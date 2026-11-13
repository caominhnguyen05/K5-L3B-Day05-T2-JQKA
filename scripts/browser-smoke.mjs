// Browser QA without npm dependencies. Uses an installed Chromium browser via CDP.
import { spawn } from 'node:child_process';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createApp } from '../server.mjs';

const temp = await mkdtemp(path.join(tmpdir(), 'jqka-browser-'));
const server = createApp({ apiKey: 'browser-test-only', dataDir: path.join(temp, 'queue'), fetchImpl: async (_url, options) => {
  const prompt = JSON.parse(options.body).messages.at(-1).content;
  const warning = prompt.includes('3.3');
  return Response.json({ model: 'deepseek/deepseek-v4-flash', choices: [{ message: { content: JSON.stringify({ text: warning ? 'Câu §3.3 cần xem lại: dữ liệu 0 và 1 có phương sai tổng thể 0,25, độ lệch chuẩn 0,5. Em có thể báo giảng viên.' : 'Mình có thể giúp em học trung vị theo §3.2. Nội dung em gửi: ' + prompt, citations: [warning ? '3.3' : '3.2'], warning, confidence: warning ? 'low' : 'high', tool: 'tra_cuu_tai_lieu' }) } }] });
} });
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
const browser = process.env.BROWSER_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const child = spawn(browser, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check', '--no-proxy-server', '--remote-debugging-port=0', '--remote-debugging-address=127.0.0.1', `--user-data-dir=${path.join(temp, 'profile')}`, 'about:blank'], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] });
let ws;
try {
  const endpoint = await new Promise((resolve, reject) => {
    let stderr = '';
    const timer = setTimeout(() => reject(new Error('Browser did not start in time')), 20000);
    child.on('error', error => { clearTimeout(timer); reject(error); });
    child.stderr.on('data', data => { stderr += data.toString(); const found = stderr.match(/DevTools listening on (ws:\/\/\S+)/); if (found) { clearTimeout(timer); resolve(found[1]); } });
  });
  ws = new WebSocket(endpoint);
  await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
  let sequence = 0; const pending = new Map(), exceptions = [];
  ws.onmessage = event => {
    const data = JSON.parse(event.data);
    if (data.method === 'Runtime.exceptionThrown') exceptions.push(data.params.exceptionDetails.text);
    const entry = pending.get(data.id); if (entry) { pending.delete(data.id); data.error ? entry.reject(new Error(data.error.message)) : entry.resolve(data.result); }
  };
  const cdp = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    const id = ++sequence; pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
  });
  const { targetId } = await cdp('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await cdp('Target.attachToTarget', { targetId, flatten: true });
  const call = (method, params) => cdp(method, params, sessionId);
  const evaluate = async expression => {
    const data = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (data.exceptionDetails) throw new Error(data.exceptionDetails.text); return data.result.value;
  };
  const waitFor = async expression => {
    const deadline = Date.now() + 10000;
    while (Date.now() < deadline) { if (await evaluate(expression)) return; await new Promise(resolve => setTimeout(resolve, 100)); }
    throw new Error(`Timed out: ${expression}`);
  };
  await call('Runtime.enable'); await call('Page.enable');
  await call('Emulation.setDeviceMetricsOverride', { width: 1360, height: 1000, deviceScaleFactor: 1, mobile: false });
  await call('Page.navigate', { url: base });
  await waitFor("document.querySelector('#connection.ready') && !document.querySelector('#send').disabled");
  await evaluate("document.querySelector('#question').value = 'Em đọc §3.3 không hiểu'; document.querySelector('#composer').requestSubmit()");
  await waitFor("document.querySelector('.chip.warn') && !document.querySelector('#send').disabled");
  await evaluate("document.querySelector('.citations button').click()");
  assert(await evaluate("document.querySelector('#source-dialog').open && document.querySelector('#source-dialog').textContent.includes('Câu cuối sai')"));
  await evaluate("document.querySelector('#source-dialog button').click(); document.querySelector('.acts button.primary').click()");
  await waitFor("document.querySelector('.confirm input[type=checkbox]')");
  assert(await evaluate("document.querySelector('.confirm button[type=submit]').disabled"));
  await evaluate("document.querySelector('.confirm textarea').value = 'Em cần hỏi TA về lỗi trong mục 3.3.'; document.querySelector('.confirm input').click(); document.querySelector('.confirm').requestSubmit()");
  await waitFor("document.querySelector('.queue-tickets').textContent.includes('TA-')");
  assert(await evaluate("document.querySelector('.queue-tickets').textContent.includes('Em cần hỏi TA về lỗi trong mục 3.3.')"));
  await evaluate("document.querySelector('#question').value = '<img src=x onerror=alert(1)>'; document.querySelector('#composer').requestSubmit()");
  await waitFor("!document.querySelector('#send').disabled && document.querySelectorAll('.msg.user').length === 2");
  assert.equal(await evaluate("document.querySelectorAll('#chat img').length"), 0);
  await mkdir('.data', { recursive: true });
  await writeFile('.data/qa-desktop.png', Buffer.from((await call('Page.captureScreenshot', { format: 'png' })).data, 'base64'));
  await call('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  assert(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'));
  await writeFile('.data/qa-mobile.png', Buffer.from((await call('Page.captureScreenshot', { format: 'png' })).data, 'base64'));
  assert.deepEqual(exceptions, []);
  console.log('PASS: browser chat, citations, warning, consent, edited queue content, HTML escaping, desktop/mobile widths; no JavaScript exceptions.');
  console.log('Screenshots: .data/qa-desktop.png, .data/qa-mobile.png');
} finally {
  if (ws?.readyState === WebSocket.OPEN) ws.close();
  child.kill();
  await new Promise(resolve => server.close(resolve));
  // Chromium may briefly hold files after process exit; QA temp is outside the repository.
  await rm(temp, { recursive: true, force: true, maxRetries: 10, retryDelay: 200 }).catch(() => {});
}
