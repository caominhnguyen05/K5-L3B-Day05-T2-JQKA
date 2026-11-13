import http from 'node:http';
import { readFile, mkdir, writeFile, rename } from 'node:fs/promises';
import { randomBytes, randomUUID, createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { answer, AppError, course, MODEL } from './lib/assistant.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
try { process.loadEnvFile(path.join(ROOT, '.env')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
const hash = value => createHash('sha256').update(value).digest('hex');
const STATIC = { '/': ['demo/index.html', 'text/html'], '/app.js': ['demo/app.js', 'text/javascript'], '/style.css': ['demo/style.css', 'text/css'] };

export function createApp({ apiKey = process.env.OPENROUTER_API_KEY, model = process.env.OPENROUTER_MODEL || MODEL, dataDir = path.join(ROOT, '.data'), fetchImpl = fetch, logger = console, publicOrigin = process.env.PUBLIC_ORIGIN || '' } = {}) {
  let publicUrl = null;
  if (publicOrigin) {
    try {
      publicUrl = new URL(publicOrigin);
      if (!['http:', 'https:'].includes(publicUrl.protocol) || publicUrl.username || publicUrl.password || publicUrl.pathname !== '/' || publicUrl.search || publicUrl.hash) throw new Error();
    } catch { throw new Error('PUBLIC_ORIGIN phải là URL gốc, ví dụ https://your-demo.trycloudflare.com (không có đường dẫn).'); }
  }
  const sessions = new Map();
  let writeQueue = Promise.resolve();
  const queueFile = path.join(dataDir, 'queue.json');
  async function saveTicket(ticket) {
    const operation = writeQueue.then(async () => {
      await mkdir(dataDir, { recursive: true });
      let records;
      try { records = JSON.parse(await readFile(queueFile, 'utf8')); } catch (error) { if (error.code !== 'ENOENT') throw error; records = []; }
      records.push(ticket);
      await writeFile(`${queueFile}.tmp`, JSON.stringify(records, null, 2), { mode: 0o600 });
      await rename(`${queueFile}.tmp`, queueFile);
    });
    writeQueue = operation.catch(() => {});
    await operation;
  }
  function json(res, status, body) { res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(JSON.stringify(body)); }
  async function body(req) {
    if (!req.headers['content-type']?.startsWith('application/json')) throw new AppError(415, 'Yêu cầu Content-Type application/json.');
    const chunks = []; let size = 0;
    for await (const chunk of req) { size += chunk.length; if (size > 32000) throw new AppError(413, 'Nội dung quá dài.'); chunks.push(chunk); }
    try { const value = JSON.parse(Buffer.concat(chunks).toString('utf8')); if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(); return value; } catch { throw new AppError(400, 'JSON không hợp lệ.'); }
  }
  const server = http.createServer(async (req, res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'no-referrer');
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'");
    try {
      const url = new URL(req.url, 'http://localhost');
      // Allow localhost and one explicitly configured public origin; ignore forwarded headers.
      const host = req.headers.host || '';
      const localHost = /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host);
      const publicHost = publicUrl !== null && host === publicUrl.host;
      if (!localHost && !publicHost) throw new AppError(403, 'Tên miền chưa được cho phép. Cấu hình PUBLIC_ORIGIN để dùng tunnel.');
      const expectedOrigin = publicHost ? publicUrl.origin : `http://${host}`;
      if (req.method === 'POST' && req.headers.origin && req.headers.origin !== expectedOrigin) throw new AppError(403, 'Nguồn yêu cầu không hợp lệ.');
      if (req.method === 'GET' && STATIC[url.pathname]) {
        const [file, type] = STATIC[url.pathname];
        res.writeHead(200, { 'Content-Type': `${type}; charset=utf-8`, 'Cache-Control': 'no-cache' });
        return res.end(await readFile(path.join(ROOT, file)));
      }
      if (req.method === 'GET' && url.pathname === '/api/health') return json(res, 200, { ready: Boolean(apiKey), model, localQueueOnly: true });
      if (req.method === 'GET' && url.pathname === '/api/course') return json(res, 200, course);
      // Opportunistic cleanup; histories and session credentials never go to disk.
      for (const [key, session] of sessions) if (Date.now() - session.touched > 86400000 && !session.busy) sessions.delete(key);
      if (req.method === 'POST' && url.pathname === '/api/session') {
        await body(req);
        if (sessions.size >= 100) throw new AppError(429, 'Quá nhiều phiên demo. Khởi động lại server hoặc thử sau.');
        const token = randomBytes(32).toString('hex');
        sessions.set(hash(token), { messages: [], tickets: [], drafts: new Map(), touched: Date.now(), busy: false });
        return json(res, 201, { token, messages: [], tickets: [] });
      }
      const sessionId = hash((req.headers.authorization || '').replace(/^Bearer /, ''));
      const session = sessions.get(sessionId);
      if (!session) throw new AppError(401, 'Phiên đã hết hạn. Tải lại trang để bắt đầu.');
      session.touched = Date.now();
      if (req.method === 'GET' && url.pathname === '/api/session') return json(res, 200, { messages: session.messages, tickets: session.tickets });
      if (req.method !== 'POST') throw new AppError(404, 'Không tìm thấy đường dẫn.');
      const input = await body(req);
      if (url.pathname === '/api/chat') {
        if (typeof input.message !== 'string' || !input.message.trim() || input.message.length > 4000) throw new AppError(400, 'Nhập câu hỏi từ 1 đến 4.000 ký tự.');
        if (session.busy) throw new AppError(409, 'Đợi câu trả lời hiện tại trước khi gửi tiếp.');
        session.busy = true;
        try {
          const result = await answer(session, input.message.trim(), { apiKey, model, fetchImpl, logger });
          session.messages.push({ role: 'user', content: input.message.trim() }, { role: 'assistant', content: result.text, result });
          session.messages = session.messages.slice(-40);
          return json(res, 200, result);
        } finally { session.busy = false; }
      }
      if (url.pathname === '/api/drafts') {
        if (!['ta', 'report', 'faq'].includes(input.kind)) throw new AppError(400, 'Loại yêu cầu không hợp lệ.');
        let content = input.kind === 'report' ? `Mục §3.3 cần xem lại. Câu: “Vì là căn bậc hai, độ lệch chuẩn luôn nhỏ hơn phương sai.”\nPhản ví dụ (phương sai tổng thể): dữ liệu 0 và 1 có phương sai 0,25, độ lệch chuẩn 0,5.` : input.kind === 'faq' ? `Đề nghị TA duyệt nội dung FAQ (chưa công khai):\n${session.messages.filter(m => m.role === 'assistant').at(-1)?.content || 'Nội dung câu hỏi cần bổ sung.'}` : 'Em cần TA hướng dẫn thêm về buổi 3.\nCâu hỏi cụ thể của em: ';
        const draft = { id: randomUUID(), kind: input.kind, content, created: Date.now() };
        if (session.drafts.size >= 20) session.drafts.delete(session.drafts.keys().next().value);
        session.drafts.set(draft.id, draft);
        return json(res, 201, draft);
      }
      if (url.pathname === '/api/queue') {
        const draft = session.drafts.get(input.draftId);
        if (!draft || Date.now() - draft.created > 1800000) throw new AppError(409, 'Bản nháp đã hết hạn hoặc đã được gửi. Soạn lại trước khi gửi.');
        if (draft.sending) throw new AppError(409, 'Yêu cầu này đang được lưu.');
        if (input.confirmed !== true) throw new AppError(400, 'Học viên cần xác nhận nội dung trước khi lưu.');
        if (typeof input.content !== 'string' || input.content.trim().length < 10 || input.content.length > 10000) throw new AppError(400, 'Nội dung cần có từ 10 đến 10.000 ký tự.');
        const ticket = { id: `${draft.kind.toUpperCase()}-${randomUUID().slice(0, 8)}`, sessionId, kind: draft.kind, content: input.content.trim(), status: draft.kind === 'faq' ? 'pending_review' : 'queued_local', createdAt: new Date().toISOString() };
        draft.sending = true;
        try { await saveTicket(ticket); } catch { draft.sending = false; throw new AppError(500, 'Không lưu được hàng chờ. Chưa ghi nhận yêu cầu; em thử lại nhé.'); }
        session.drafts.delete(draft.id);
        const { sessionId: _, ...publicTicket } = ticket;
        session.tickets.push(publicTicket);
        return json(res, 201, { ticket: publicTicket, localOnly: true });
      }
      throw new AppError(404, 'Không tìm thấy đường dẫn.');
    } catch (error) { if (!res.headersSent) json(res, error.status || 500, { error: error.status ? error.message : 'Server gặp lỗi. Vui lòng thử lại.', ...(error.requestId ? { requestId: error.requestId } : {}) }); else res.end(); }
  });
  return server;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT || 3000);
  const server = createApp();
  server.on('error', error => { console.error(error.code === 'EADDRINUSE' ? `Cổng ${port} đang được dùng. Đổi PORT trong .env.` : `Không khởi động được server (${error.code}).`); process.exitCode = 1; });
  server.listen(port, '127.0.0.1', () => console.log(`Demo: http://localhost:${port}\nModel: ${process.env.OPENROUTER_MODEL || MODEL}\nHàng chờ lưu cục bộ, chưa nối dịch vụ TA.`));
}
