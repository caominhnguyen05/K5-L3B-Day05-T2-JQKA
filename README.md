# Demo trợ lý học bài · Nhóm JQKA

Frontend HTML/JS + backend Node.js, gọi OpenRouter bằng **`deepseek/deepseek-v4-flash`**. Yêu cầu **Node.js 22+**, không cần cài thư viện.

## Chạy chatbot

Nếu chưa có `.env`, sao chép `.env.example` thành `.env`. Điền key:

```dotenv
OPENROUTER_API_KEY=your_key
```

Chạy trong thư mục repo:

```powershell
node server.mjs
```

Mở **http://localhost:3000**. Key chỉ nằm ở backend; sửa `.env` cần restart server.

## Cloudflare Tunnel · Windows

**1. Cài cloudflared** (một lần):

```powershell
winget install --id Cloudflare.cloudflared --exact
```

Nếu chưa nhận lệnh, mở PowerShell mới rồi kiểm tra:

```powershell
cloudflared --version
```

**2. Terminal 1 — chạy chatbot:**

```powershell
node server.mjs
```

**3. Terminal 2 — mở tunnel:**

```powershell
cloudflared tunnel --url http://127.0.0.1:3000
```

**4. Thêm URL vừa nhận vào `.env`:**

```dotenv
PUBLIC_ORIGIN=https://your-demo.trycloudflare.com
```

**5. Terminal 1 — Ctrl+C rồi chạy lại:**

```powershell
node server.mjs
```

Mở URL tunnel để demo. Giữ máy và hai terminal chạy; mỗi tunnel mới cần cập nhật `PUBLIC_ORIGIN`. Lỗi **403**: kiểm tra URL và restart backend. Lỗi **502 từ Cloudflare**: kiểm tra server cổng 3000.

Ai có link đều có thể dùng chatbot và tiêu token của bạn. [Tải cloudflared](https://developers.cloudflare.com/tunnel/downloads/) · [Quick Tunnels](https://developers.cloudflare.com/tunnel/get-started/quick-tunnels/).

## Debug và kiểm tra

Log `[OpenRouter]` hiện ngay trong terminal: phản hồi model, `finish_reason`, câu trả lời cuối và lỗi cụ thể. Dùng `requestId` để đối chiếu; API key được che.

```powershell
node --test tests/server.test.mjs  # Test API, không tốn token
node scripts/browser-smoke.mjs    # Test giao diện, cần Chrome
node scripts/smoke-live.mjs       # 3 lượt gọi OpenRouter thật, tốn token
```

## Phạm vi demo

- Ca **A**: chỉ gợi ý bước đầu, không chấm hộ bài đang mở. Ca **B**: cảnh báo lỗi tài liệu §3.3. Ca **C**: hỏi bài bình thường, mở trích dẫn.
- Dữ liệu ở `demo/course.json`, dựng từ prototype/spec. Kịch bản cố định: **13/11/2026 lúc 22:15 (Asia/Bangkok)**; model vẫn có thể trả lời sai.
- TA/FAQ chỉ lưu vào `.data/queue.json` sau xác nhận, chưa kết nối người nhận thật. Hội thoại mất khi restart backend.
- Bản mock gốc: `prototype/index.html`. Backend: `server.mjs`; prompt/API: `lib/assistant.mjs`; frontend: `demo/`.
