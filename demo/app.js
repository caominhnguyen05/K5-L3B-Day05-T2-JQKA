const $ = selector => document.querySelector(selector);
const chat = $('#chat');
const S = { token: sessionStorage.getItem('jqka-session'), busy: false, online: false, messages: [], tickets: [], course: null, last: null, draft: null, active: null };
const TOOLS = {
  tra_cuu_tai_lieu: ['tự làm', 'auto'], goi_y_buoc_dau: ['bước đầu · tự làm', 'auto'],
  giai_chi_tiet: ['cấm · đã chặn', 'ban'], chuyen_TA: ['học viên xác nhận', 'human'], dang_FAQ: ['TA duyệt trước khi đăng', 'human']
};
const PROMPTS = {
  A: 'Giải hộ em bài 3 câu (a) với, em cần gấp',
  A2: 'Em làm ra trung bình 15,25 với trung vị 11,5 rồi, đúng không ạ?',
  B: 'Độ lệch chuẩn với phương sai cái nào lớn hơn ạ? Em đọc §3.3 không hiểu.',
  C: 'Trung vị khác trung bình cộng chỗ nào ạ? Khi nào dùng cái nào?',
  kb1: 'Slide 12 nói gì về phương sai ạ?', kb2: 'Buổi 7 học gì ạ? p-value là gì?',
  kb4: 'Cái độ lệch ấy là gì ạ, em đọc không hiểu.', kb5: 'Hạn nộp bài 3 là khi nào ạ? Với cả tính độ lệch chuẩn bằng Excel thì dùng hàm gì?',
  kb8: 'Em không hiểu gì cả, chắc em dốt môn này', kb9: 'Đăng câu này lên FAQ cả lớp nhé',
  kb10: 'Sáng mai em thi rồi, giảng lại §3.3 cho em gấp', kb11: 'Đã báo TA chưa ạ?'
};
function node(tag, className, text) {
  const el = document.createElement(tag); if (className) el.className = className;
  if (text !== undefined) el.textContent = text; return el;
}
function button(text, fn, cls = '') { const el = node('button', cls, text); el.type = 'button'; el.addEventListener('click', fn); return el; }
function scroll() { chat.scrollTop = chat.scrollHeight; }
async function api(url, { method = 'GET', body } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 100000);
  try {
    const response = await fetch(url, { method, signal: controller.signal, headers: { ...(body ? { 'Content-Type': 'application/json' } : {}), ...(S.token ? { Authorization: `Bearer ${S.token}` } : {}) }, ...(body ? { body: JSON.stringify(body) } : {}) });
    const data = await response.json();
    if (!response.ok) { const error = new Error(data.error || 'Yêu cầu chưa thành công.'); error.status = response.status; throw error; }
    return data;
  } catch (error) { if (error.name === 'AbortError') throw new Error('Kết nối quá lâu. Em thử lại nhé.'); if (error instanceof TypeError) throw new Error('Mất kết nối backend. Kiểm tra server rồi thử lại.'); throw error; }
  finally { clearTimeout(timer); }
}
function bubble(role, text = '') {
  const row = node('div', `msg ${role}`), box = node('div', 'bubble');
  row.append(box); if (text) box.append(node('div', 'message-text', text));
  chat.append(row); scroll(); return box;
}
function source(id) {
  const section = S.course.sections.find(s => s.id === id); if (!section) return;
  const dialog = $('#source-dialog'); dialog.replaceChildren();
  dialog.append(node('h2', '', `${id === 'course' ? '' : '§' + id + ' · '}${section.title}`), node('small', '', section.kind), node('p', '', section.text));
  if (section.warning) dialog.append(node('p', 'warn', `⚠ ${section.warning}`));
  dialog.append(node('p', '', S.course.provenance), button('Đóng', () => dialog.close()));
  dialog.showModal();
}
function resultMessage(result) {
  S.last = result;
  const box = bubble('ai');
  const level = result.confidence || 'low', filled = { high: 3, mid: 2, low: 1 }[level];
  const conf = node('div', `conf ${level === 'low' ? 'low' : ''}`), bar = node('span', 'bar');
  for (let i = 0; i < 3; i++) bar.append(node('span', `seg ${i < filled ? 'f' : ''}`));
  conf.append(bar, node('span', 'lbl', { high: 'Mình khá chắc', mid: 'Mình chưa chắc lắm', low: 'Cần kiểm tra lại' }[level]));
  conf.title = 'Model tự đánh giá; chưa hiệu chuẩn thành xác suất đúng.';
  box.append(conf);
  if (result.tool === 'giai_chi_tiet' || result.tool === 'goi_y_buoc_dau') box.append(node('span', 'chip lock', '🔒 Bài đang mở · chỉ gợi ý bước đầu'));
  if (result.warning) box.append(node('span', 'chip warn', '⚠ Tài liệu có thể sai · §3.3 cần xem lại'));
  box.append(node('div', 'message-text', result.text));
  const refs = node('div', 'citations');
  for (const id of result.citations || []) refs.append(button(id === 'course' ? 'Thông tin khóa học ↗' : `Xem §${id} ↗`, () => source(id)));
  box.append(refs);
  if (result.warning) {
    const details = node('details', 'why');
    details.append(node('summary', '', 'Vì sao câu §3.3 cần xem lại'), node('div', 'body', S.course.sections.find(s => s.id === '3.3').warning)); box.append(details);
  }
  const acts = node('div', 'acts');
  acts.append(button('Soạn câu hỏi cho TA', () => openDraft('ta'), 'primary'));
  if (result.warning) acts.append(button('Báo giảng viên', () => openDraft('report'), 'warn'));
  acts.append(button('Đề xuất FAQ', () => openDraft('faq'))); box.append(acts);
  if (result.model) box.append(node('div', 'message-meta', `${result.model}${result.usage ? ` · ${result.usage.completion_tokens} token đầu ra` : ''}${result.guarded ? ' · backend đã chặn đáp số' : ''}`));
  renderState(); scroll(); return box;
}
function renderState() {
  const el = $('#state'); el.replaceChildren();
  const entries = [['Model', $('#model-name').textContent], ['Hành vi', S.last?.tool || '—'], ['Mức tự chủ', TOOLS[S.last?.tool]?.[0] || '—']];
  for (const [key, value] of entries) { const row = node('div', 'kv'); row.append(node('span', 'k', key), node('span', 'v', value)); el.append(row); }
  const q = node('div', 'queue');
  for (const [kind, label] of [['report', 'Báo lỗi tài liệu'], ['ta', 'Câu hỏi chờ TA'], ['faq', 'FAQ chờ duyệt']]) {
    const count = S.tickets.filter(t => t.kind === kind).length, row = node('div', 'row');
    row.append(node('span', 'nm', label), node('span', `ct ${count ? '' : 'zero'}`, count)); q.append(row);
  }
  el.append(q, node('p', 'message-meta', 'Hàng chờ cục bộ của phiên này. Chưa gửi thông báo cho TA/giảng viên.'));
  const list = node('ul', 'queue-tickets');
  for (const ticket of S.tickets) list.append(node('li', '', `${ticket.id} · ${ticket.kind === 'faq' ? 'chờ duyệt, chưa đăng' : 'đã lưu cục bộ'}\n${ticket.content}`));
  el.append(list);
  document.querySelectorAll('#aut .r').forEach(row => row.classList.toggle('hit', row.dataset.tool === S.last?.tool));
}
function setBusy(value) {
  S.busy = value;
  $('#send').disabled = value || !S.online;
  document.querySelectorAll('.step,.free button,#new-chat').forEach(b => b.disabled = value || !S.online);
  $('#send').textContent = value ? 'Đang trả lời…' : 'Gửi câu hỏi';
}
function showError(error, retry) {
  const box = bubble('ai'); box.append(node('div', 'error-box', error.message));
  if (retry) box.append(button('Thử lại câu hỏi', retry)); scroll();
}
async function send(text, retry = false) {
  if (S.busy || !S.online || !text.trim()) return;
  if (!retry) bubble('user', text);
  $('#question').value = ''; setBusy(true);
  const pending = bubble('ai', 'DeepSeek đang đọc tài liệu và trả lời…'); pending.classList.add('pending');
  try { const result = await api('/api/chat', { method: 'POST', body: { message: text } }); pending.parentElement.remove(); resultMessage(result); }
  catch (error) { pending.parentElement.remove(); showError(error, () => send(text, true)); $('#question').value = text; }
  finally { setBusy(false); $('#question').focus(); }
}
async function openDraft(kind) {
  if (S.active || S.busy) return;
  S.active = true;
  try {
    const draft = await api('/api/drafts', { method: 'POST', body: { kind } }); S.draft = draft;
    const box = bubble('ai'), form = node('form', 'confirm');
    form.append(node('div', 't', { ta: 'Xem và sửa câu hỏi trước khi chuyển TA', report: 'Xem báo cáo lỗi tài liệu', faq: 'Nội dung đề xuất FAQ · cần TA duyệt' }[kind]));
    const label = node('label', '', 'Chỉ nội dung bên dưới sẽ được lưu'), input = node('textarea');
    input.id = `draft-${draft.id}`; label.htmlFor = input.id; input.value = draft.content; input.rows = 6; input.maxLength = 10000; input.required = true;
    form.append(label, input, node('div', 'meta', 'Chỉ lưu vào hàng chờ của demo trên máy này. Chưa có kết nối TA/giảng viên thật. Giờ TA: 08:00–22:00; ca tiếp theo trong kịch bản là 14/11 08:00, sau hạn bài 3.'));
    const consent = node('label', 'consent'), check = node('input'); check.type = 'checkbox'; check.required = true;
    consent.append(check, node('span', '', 'Em đã xem nội dung và đồng ý lưu yêu cầu này.')); form.append(consent);
    const acts = node('div', 'acts'), save = node('button', 'primary', 'Xác nhận lưu vào hàng chờ'); save.type = 'submit'; save.disabled = true;
    check.addEventListener('change', () => save.disabled = !check.checked);
    const cancel = button('Không gửi', () => { form.remove(); S.draft = null; S.active = null; box.append(node('p', '', 'Đã hủy bản nháp. Không lưu nội dung vào hàng chờ.')); });
    acts.append(save, cancel); form.append(acts); box.append(form); input.focus(); scroll();
    form.addEventListener('submit', async event => {
      event.preventDefault(); if (!check.checked || save.disabled) return; save.disabled = true; cancel.disabled = true;
      try {
        const { ticket } = await api('/api/queue', { method: 'POST', body: { draftId: draft.id, content: input.value, confirmed: true } });
        S.tickets.push(ticket); S.draft = null; S.active = null; form.replaceChildren(node('span', 'chip ok', `✓ Đã lưu cục bộ · ${ticket.id}`), node('p', '', kind === 'faq' ? 'FAQ đang chờ TA duyệt, chưa công khai. Demo chưa kết nối TA thật.' : 'Yêu cầu đã lưu vào file hàng chờ trên máy. Demo chưa gửi thông báo cho TA/giảng viên.'));
        renderState();
      } catch (error) { showError(error); save.disabled = !check.checked; cancel.disabled = false; }
    });
  } catch (error) { S.active = null; showError(error); }
}
async function newSession() {
  const data = await api('/api/session', { method: 'POST', body: {} }); S.token = data.token; sessionStorage.setItem('jqka-session', data.token);
  S.messages = []; S.tickets = []; S.last = null; S.active = null; S.draft = null; chat.replaceChildren(); renderState();
}
document.querySelectorAll('.step').forEach(btn => btn.addEventListener('click', async () => {
  const scn = btn.closest('.steps').dataset.scn, idx = Number(btn.dataset.step);
  if (idx === 0) { await send(PROMPTS[scn]); }
  else if (scn === 'A' && idx === 1) await send(PROMPTS.A2);
  else if (scn === 'A' && idx === 2) await openDraft('ta');
  else if (scn === 'B' && idx === 1) { const details = chat.querySelector('details.why'); if (details) { details.open = true; details.scrollIntoView({ block: 'nearest' }); } else showError(new Error('Hãy hỏi ca B trước để có giải thích §3.3.')); }
  else if (scn === 'B' && idx === 2) await openDraft('report');
}));
document.querySelectorAll('[data-free]').forEach(btn => btn.addEventListener('click', () => send(PROMPTS[btn.dataset.free])));
$('#composer').addEventListener('submit', event => { event.preventDefault(); send($('#question').value); });
$('#question').addEventListener('keydown', event => { if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) { event.preventDefault(); send($('#question').value); } });
$('#new-chat').addEventListener('click', async () => { setBusy(true); try { await newSession(); } catch (error) { showError(error); } finally { setBusy(false); } });
for (const [name, [label, level]] of Object.entries(TOOLS)) {
  const row = node('div', 'r'); row.dataset.tool = name; row.append(node('span', 't', name), node('span', `m ${level}`, label)); $('#aut').append(row);
}
$('#legend').append(node('p', 'tx', 'Trích dẫn mở đúng đoạn dữ liệu demo. Độ chắc do model tự đánh giá. Backend lưu hội thoại theo phiên và yêu cầu xác nhận trước khi tạo mã hàng chờ. Lỗi nguồn §3.3 có cảnh báo và phản ví dụ cố định để tự kiểm.'));
async function init() {
  setBusy(true);
  try {
    const [health, course] = await Promise.all([api('/api/health'), api('/api/course')]);
    S.course = course; S.online = health.ready; $('#model-name').textContent = health.model;
    $('#connection').textContent = health.ready ? '● Backend sẵn sàng · OpenRouter' : '● Cần cấu hình key trong .env';
    $('#connection').className = `status ${health.ready ? 'ready' : 'error'}`;
    if (S.token) {
      try { const data = await api('/api/session'); S.messages = data.messages; S.tickets = data.tickets;
        for (const message of data.messages) { if (message.role === 'user') bubble('user', message.content); else resultMessage(message.result); }
      } catch (error) { if (error.status === 401) await newSession(); else throw error; }
    } else await newSession();
    renderState();
  } catch (error) { $('#connection').textContent = '● Chưa kết nối backend'; $('#connection').className = 'status error'; showError(error); }
  finally { setBusy(false); }
}
init();
