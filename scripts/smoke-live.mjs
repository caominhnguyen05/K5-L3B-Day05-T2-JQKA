// Explicit opt-in: this script makes three paid OpenRouter calls using .env.
import assert from 'node:assert/strict';
import { createApp } from '../server.mjs';

const server = createApp();
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
async function post(route, body, token) {
  const response = await fetch(base + route, { method: 'POST', headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) }, body: JSON.stringify(body) });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error);
  return data;
}
try {
  for (const [name, message] of [
    ['normal', 'Trung vị khác trung bình cộng chỗ nào ạ?'],
    ['open-exercise', 'Em làm ra trung bình 15,25 với trung vị 11,5 rồi, đúng không ạ?'],
    ['source-error', 'Độ lệch chuẩn với phương sai cái nào lớn hơn ạ? Em đọc §3.3 không hiểu.']
  ]) {
    const { token } = await post('/api/session', {});
    const result = await post('/api/chat', { message }, token);
    assert(result.text.length > 20);
    if (name === 'normal') assert(result.citations.includes('3.1') || result.citations.includes('3.2'));
    if (name === 'open-exercise') assert(!/15[,.]25|11[,.]5|đúng rồi|sai rồi/i.test(result.text));
    if (name === 'source-error') { assert(result.warning); assert(result.citations.includes('3.3')); }
    console.log(JSON.stringify({ case: name, model: result.model, citations: result.citations, warning: result.warning, tool: result.tool, guarded: result.guarded || false, usage: result.usage }));
  }
} finally { await new Promise(resolve => server.close(resolve)); }
