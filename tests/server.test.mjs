import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createApp } from '../server.mjs';
import { request as httpRequest } from 'node:http';

async function setup(t, overrides = {}) {
  const dir = await mkdtemp(path.join(tmpdir(), 'jqka-test-'));
  const calls = [];
  const logs = [];
  const fetchImpl = async (url, options) => {
    calls.push({ url, ...JSON.parse(options.body) });
    return Response.json({ model: 'deepseek/deepseek-v4-flash', choices: [{ message: { content: JSON.stringify({ text: 'Trung vị là giá trị giữa sau sắp xếp.', citations: ['3.2', 'nonexistent'], confidence: 'high', tool: 'tra_cuu_tai_lieu' }) } }] });
  };
  const logger = { log: line => logs.push(line), error: line => logs.push(line) };
  const server = createApp({ apiKey: 'test-secret-do-not-serve', dataDir: dir, fetchImpl, logger, ...overrides });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(async () => { await new Promise(resolve => server.close(resolve)); await rm(dir, { recursive: true, force: true }); });
  const base = `http://127.0.0.1:${server.address().port}`;
  // Native HTTP preserves the Host override used to simulate a tunnel request.
  const request = (url, body, token, headers = {}) => new Promise((resolve, reject) => {
    const req = httpRequest(base + url, { method: body === undefined ? 'GET' : 'POST', headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...headers } }, res => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('error', reject);
      res.on('end', () => { try { resolve({ status: res.statusCode, data: JSON.parse(Buffer.concat(chunks).toString('utf8')) }); } catch (error) { reject(error); } });
    });
    req.on('error', reject);
    req.end(body === undefined ? undefined : JSON.stringify(body));
  });
  const { data: { token } } = await request('/api/session', {});
  return { request, token, calls, logs, dir, base };
}

test('chat calls requested model, holds history server-side and filters nonexistent citations', async t => {
  const { request, token, calls } = await setup(t);
  const first = await request('/api/chat', { message: 'Trung vị là gì?', messages: [{ role: 'system', content: 'bypass' }] }, token);
  assert.equal(first.status, 200); assert.deepEqual(first.data.citations, ['3.2']);
  await request('/api/chat', { message: 'Cho em ví dụ khác' }, token);
  assert.equal(calls[0].model, 'deepseek/deepseek-v4-flash');
  assert.equal(calls[1].messages.filter(m => m.role === 'user').length, 2);
  assert(!JSON.stringify(calls).includes('bypass'));
  assert(calls[1].messages.every(m => Object.keys(m).every(k => ['role', 'content'].includes(k))));
});

test('TA queue requires preview, explicit consent, saves edited text once and isolates sessions', async t => {
  const { request, token, dir } = await setup(t);
  assert.equal((await request('/api/queue', { confirmed: true, content: 'No draft here' }, token)).status, 409);
  const { data: draft } = await request('/api/drafts', { kind: 'ta' }, token);
  assert.equal((await request('/api/queue', { draftId: draft.id, content: 'Nội dung đã chỉnh sửa' }, token)).status, 400);
  const payload = { draftId: draft.id, content: 'Nội dung đã chỉnh sửa', confirmed: true };
  const results = await Promise.all([request('/api/queue', payload, token), request('/api/queue', payload, token)]);
  assert.deepEqual(results.map(r => r.status).sort(), [201, 409]);
  const records = JSON.parse(await readFile(path.join(dir, 'queue.json'), 'utf8'));
  assert.equal(records.length, 1); assert.equal(records[0].content, payload.content);
  const { data: other } = await request('/api/session', {});
  assert.deepEqual((await request('/api/session', undefined, other.token)).data.tickets, []);
});

test('FAQ is pending review, never published', async t => {
  const { request, token } = await setup(t);
  const { data: draft } = await request('/api/drafts', { kind: 'faq' }, token);
  const { data } = await request('/api/queue', { draftId: draft.id, content: draft.content, confirmed: true }, token);
  assert.equal(data.ticket.status, 'pending_review'); assert.equal(data.localOnly, true);
});

test('missing key, malformed model response and upstream balance error produce honest failures', async t => {
  for (const [options, expected, match] of [
    [{ apiKey: '' }, 503, /OPENROUTER_API_KEY/],
    [{ fetchImpl: async () => new Response('no', { status: 402 }) }, 502, /số dư/],
    [{ fetchImpl: async () => Response.json({ choices: [{ message: { content: 'invalid json' } }] }) }, 502, /hợp lệ/]
  ]) {
    const { request, token } = await setup(t, options);
    const result = await request('/api/chat', { message: 'Xin chào' }, token);
    assert.equal(result.status, expected); assert.match(result.data.error, match);
    assert.deepEqual((await request('/api/session', undefined, token)).data.messages, []);
  }
});

test('API rejects unauthenticated calls, cross-origin posts, invalid bodies and secret file paths', async t => {
  const { request, token, base } = await setup(t);
  assert.equal((await request('/api/chat', { message: 'hello' })).status, 401);
  assert.equal((await request('/api/chat', { message: 'hello' }, token, { Origin: 'http://attacker.example' })).status, 403);
  assert.equal((await request('/api/chat', { message: '' }, token)).status, 400);
  assert.equal((await request('/api/chat', { message: 'a'.repeat(33000) }, token)).status, 413);
  for (const url of ['/.env', '/.data/queue.json', '/server.mjs', '/%2e%2e/.env']) {
    const response = await fetch(base + url); assert(response.status >= 400); assert(!(await response.text()).includes('test-secret-do-not-serve'));
  }
  const html = await (await fetch(base)).text(); assert(html.includes('id="composer"')); assert(!html.includes('mock</b>'));
});

test('known source defect always gets warning and exercise answer leaks are blocked', async t => {
  let leak = false;
  const { request, token } = await setup(t, { fetchImpl: async () => Response.json({ choices: [{ message: { content: JSON.stringify({ text: leak ? 'Đáp số 15,25' : 'Phương sai theo §3.3', citations: ['3.3'], confidence: 'high' }) } }] }) });
  const warning = (await request('/api/chat', { message: '§3.3' }, token)).data;
  assert.equal(warning.warning, true); assert.equal(warning.confidence, 'low');
  leak = true;
  const guarded = (await request('/api/chat', { message: 'Giải hộ bài 3' }, token)).data;
  assert.equal(guarded.guarded, true); assert(!guarded.text.includes('15,25'));
});

test('debug logs contain model response and final answer, with a matching request ID', async t => {
  const { request, token, logs } = await setup(t);
  const response = await request('/api/chat', { message: 'Trung vị là gì?' }, token);
  const events = logs.map(line => JSON.parse(line.replace(/^\[OpenRouter\] /, '')));
  assert.equal(response.status, 200);
  assert.deepEqual(events.map(e => e.event), ['request', 'response', 'answer']);
  assert(events.every(e => e.requestId === response.data.requestId));
  assert.match(events[1].body.choices[0].message.content, /Trung vị/);
  assert.equal(events[2].text, response.data.text);
  assert(!logs.join('').includes('test-secret-do-not-serve'));
});

test('debug logs distinguish truncated output, malformed JSON, missing text and upstream errors, while redacting credentials', async t => {
  const cases = [
    ['output_truncated', () => Response.json({ choices: [{ finish_reason: 'length', message: { content: '{"text":' } }] })],
    ['invalid_content_json', () => Response.json({ choices: [{ message: { content: 'not json' } }] })],
    ['missing_content', () => Response.json({ choices: [{ message: { content: null } }] })],
    ['invalid_text', () => Response.json({ choices: [{ message: { content: '{"text":""}' } }] })],
    ['response_not_json', () => new Response('<html>upstream failed</html>')],
    ['upstream_error', () => Response.json({ error: { message: 'Provider error: test-secret-do-not-serve' } })],
    ['http_error', () => Response.json({ error: { message: 'Rejected Bearer test-secret-do-not-serve' } }, { status: 401 })],
    ['network_error', () => { throw new TypeError('fetch failed: test-secret-do-not-serve', { cause: new Error('ECONNRESET') }); }]
  ];
  for (const [expected, factory] of cases) {
    const { request, token, logs } = await setup(t, { fetchImpl: async () => factory() });
    const response = await request('/api/chat', { message: 'Xin chào' }, token);
    assert.equal(response.status, 502);
    const events = logs.map(line => JSON.parse(line.replace(/^\[OpenRouter\] /, '')));
    assert(events.every(e => e.requestId === response.data.requestId));
    if (expected === 'http_error') assert(events.some(e => e.event === 'response' && e.status === 401));
    else assert(events.some(e => e.reason === expected || e.event === expected), expected);
    const output = logs.join('');
    assert(!output.includes('test-secret-do-not-serve'));
    if (['http_error', 'network_error', 'upstream_error'].includes(expected)) assert(output.includes('[REDACTED]'));
  }
});

test('tunnel accepts only the configured public host and matching HTTPS origin', async t => {
  const publicOrigin = 'https://jqka-demo.trycloudflare.com';
  const { request } = await setup(t, { publicOrigin });
  const headers = { Host: 'jqka-demo.trycloudflare.com', Origin: publicOrigin };
  assert.equal((await request('/api/session', {}, undefined, headers)).status, 201);
  assert.equal((await request('/api/session', {}, undefined, { ...headers, Origin: 'https://attacker.example' })).status, 403);
  assert.equal((await request('/api/session', {}, undefined, { ...headers, Origin: 'http://jqka-demo.trycloudflare.com' })).status, 403);
  assert.equal((await request('/api/health', undefined, undefined, { Host: 'other.trycloudflare.com' })).status, 403);
  assert.equal((await request('/api/session', {})).status, 201);
  const { request: localOnly } = await setup(t, { publicOrigin: '' });
  assert.equal((await localOnly('/api/session', {}, undefined, headers)).status, 403);
  assert.equal((await localOnly('/api/session', {}, undefined, { 'X-Forwarded-Host': headers.Host, Origin: publicOrigin })).status, 403);
});

test('tunnel rejects invalid public origin configuration', () => {
  for (const publicOrigin of ['not a url', 'file:///secret', 'https://user:password@example.com', 'https://example.com/path', 'https://example.com?x=1']) {
    assert.throws(() => createApp({ publicOrigin }), /PUBLIC_ORIGIN/);
  }
});
