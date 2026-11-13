# Grilling · Round 1 — trả lời trước khi bắt đầu làm bài

> Mỗi người **tự pull về, trả lời vào file này, commit + push**. Không trả lời chung một bản — muốn xem 4 người có lệch nhau không. Hạn: trước buổi lab. *(Nhóm 4 người — lab coach đã đồng ý.)*
>
> Cách trả lời: điền dưới mỗi câu `**Trả lời:**`, ghi tên ở đầu phần trả lời của mình. Không biết thì ghi "không chắc" + chỗ đang kẹt — đừng để trống.

---

## 📖 Đọc trước khi trả lời — Bối cảnh & thực trạng

Nguồn đầy đủ kèm link: [`research/thuc-trang-nguon.md`](research/thuc-trang-nguon.md). Tóm tắt 5 điểm chính:

**Thực trạng ChatGPT Study mode hôm nay** (nguồn: OpenAI Help Center + bài công bố chính thức, kiểm 11/11/2026):
1. Làm: gợi ý từng bước, hỏi lại người học, quiz/flashcard, nhận tài liệu do người dùng **tự tải lên từng lần**.
2. **KHÔNG có con người phía sau** — không có nút chuyển TA/giảng viên nào. Đây là khoảng trống thiết kế T2 phải lấp (vì `chuyen_TA` là tool của track).
3. **KHÔNG hiển thị độ tin cậy / dẫn nguồn** cho từng câu trả lời → lỗi sai **âm thầm** (PAIR gọi là *background error* — hệ thống sai mà cả user lẫn hệ thống đều không nhận ra).
4. Chỉ bật/tắt — không có **thang tự chủ**. PAIR khuyến nghị: tự chủ tăng dần, "automate more when trust is high, or risk of error is low".
5. **Luật TTNT 134/2025/QH15, Điều 11 khoản 1** (hiệu lực 01/03/2026): hệ thống AI tương tác trực tiếp với con người **bắt buộc** để người dùng nhận biết đang nói chuyện với AI → prototype phải có nhãn "Trợ lý AI" rõ ràng.

**Vấn đề cho lát cắt T2** (chi tiết + nguồn ở file research, mục 2):
- Người học là **novice** — chưa đủ kiến thức để tự phát hiện câu trả lời sai, đúng nhóm rủi ro cao nhất theo PAIR.
- "Lỗi" do kỳ vọng người dùng định nghĩa → phải quản lý kỳ vọng ngay từ đầu (G1/G2).
- HAX chú ý: G8–G11 thuộc pha **"When wrong"**, G15 thuộc pha "Over time" — nguyên văn từng guideline có trong file research, mục 3, kèm ví dụ UI cho từng cái (dùng khi viết §3 và đánh số trên prototype).

---

---

## Q1 · Câu một lát cắt — mỗi người trả lời riêng

Nói **một câu**: ai đang làm gì, AI phải quyết gì, sai thì ai chịu cái gì?
Đặc biệt trả lời thêm: **AI được thêm quyền làm gì mà trước đây học viên tự làm?**

**Gợi ý để đối chiếu (đừng copy, tự viết lại bằng lời mình):**
> Học viên kẹt bài lúc 10h tối, khi TA đã off (giờ TA hết 22:00). Thay vì tự dò từng mục tài liệu hoặc bỏ cuộc tới sáng, AI quyết: giảng kèm trích mục tài liệu / hỏi lại cho rõ / gợi ý từng bước / nói "tài liệu không có, hỏi giảng viên". Sai thì học viên học sai mà không biết — rẻ nhưng âm thầm, không ai báo.

**Trả lời — [Phạm Hoàng Đức Minh]:** Khi học viên làm bài hay học bài buổi tối muộn và muốn hỏi bài nhưng không còn ai để hỏi. Thay vì phải tự tìm kiếm trong tài liệu thì AI quyết: Giảng kèm trích tài liệu / hỏi lại cho rõ đúng không / gợi ý tựng bước / nếu không có tài liệu nói " Tài liệu không có, hỏi giảng viên". - Nếu sai thì học viên học sai đi mà không biết.

**Trả lời — [tên TV2]:**

**Trả lời — [tên TV3]:**

**Trả lời — Nguyễn Văn Minh (TV4):** Mình từng là người dùng thật của pain này: tự học sách kỹ thuật Toán-heavy lúc tối, kẹt một khái niệm nền là nhảy ra Google/ChatGPT — mỗi lần 15–30 phút, 2–3 lần một chương, mất đà đọc. Lát cắt theo lời mình: **học viên đang làm bài buổi 3 lúc tối muộn (TA đã off sau 22:00), kẹt một khái niệm trong tài liệu; AI phải quyết: giảng kèm trích đúng mục tài liệu, hỏi lại cho rõ, gợi ý từng bước, hay nói thẳng "tài liệu không có, hỏi giảng viên".** Sai thì học viên học sai mà không biết — mình từng bỏ DeepTutor đúng vì giải thích không bám bài giảng thật. Quyền AI được thêm so với trước: thay cho việc học viên **tự dò từng mục tài liệu** hoặc **bỏ cuộc tới sáng** — hai con đường duy nhất hôm nay.

---

## Q2 · 3 việc tính năng KHÔNG làm (cả nhóm chốt, nhưng mỗi người đề xuất trước)

Chọn **3 việc** tính năng sẽ không làm. Ứng viên (từ rubric riêng T2): chấm bài / nhận xét bài hộ · đưa hoặc xác nhận đáp số bài đang mở · nhận xét năng lực người học · giảng nội dung buổi chưa học · nói về nguồn không có ("slide 12") · hứa việc không làm được ("đã báo TA").

Mỗi người đề xuất 3 việc + **một câu vì sao mỗi việc**.

**Đề xuất — [Phạm Hoàng Đức Minh]:** 3 tính năng không làm :
- Không nói về nguồn không có : vì khi làm vậy có thể sẽ dẫn đến việc học viên học lệch hướng học sai mà học viên không biết, thay vào đó có thể liệt kê nguồn và kêu học viên hỏi giảng viên sau
- Không đưa hoặc xác nhận đáp số bài đang mở : vì nếu làm vậy có thể làm học viên gian lận, không muốn hoàn thành bài trước khi bài đóng.
- Không hứa việc không làm được : vì học viên có thể yêu cầu nhiều việc mà chỉ hứa và không làm sẽ không đạt hiệu quả học tập.

**Đề xuất — [tên TV2]:**

**Đề xuất — [tên TV3]:**

**Đề xuất — Nguyễn Văn Minh (TV4):**
1. **Không đưa/xác nhận đáp số bài đang mở** (bài 3 hạn 13/11 đang mở) — `goi_y_bai_tap` quá tay thì học viên đã chép; sai thì học sai mà không biết, là cái giá đắt nhất của domain (âm thầm, không ai báo).
2. **Không nhận xét năng lực người học** ("bạn yếu phần này") — lỗi niềm tin, không đảo lại được với học viên đang tự hoài nghi lúc 10h tối; không tool nào phục vụ việc này một cách an toàn.
3. **Không giảng nội dung buổi chưa học** (buổi 4–10) — dữ liệu chỉ có buổi 1–3 + tên đề cương; giảng buổi 7 (p-value) là bịa nguồn sự thật (lớp ①), đúng hard test "hỏi nội dung buổi chưa học".

**Chốt của nhóm (điền sau khi cả 4 đề xuất):**

---

## Q3 · Phân công 3 người

Ba vai cần người ngay từ đầu (xem README, không bắt buộc đúng tên nhưng phải có người giữ):
(a) dựng prototype · (b) viết câu chữ AI (câu nguyên văn ở §3) · (c) bảng kịch bản §2 + chuẩn bị demo.

⚠️ Vibe-coding rule: **ai không giải thích được phần có tên mình → 0 điểm R7.**

**Trả lời (ai nhận vai nào, tại sao mình phù hợp):**
- Phạm Hoàng Đức Minh : Viết câu chữ AI
- TV2:
- TV3:
- Nguyễn Văn Minh (TV4): **dựng prototype.** Lý do: mình làm việc thường xuyên với coding agent (pi), đã có sẵn quy trình dựng prototype HTML tự chứa bấm được (guided walkthrough cho ca khó + free-play cho ca lạ) — ngày lab chỉ cần đổ nội dung nhóm chốt vào. Cam kết: mỗi chỗ trên prototype mình đều giải thích được vì sao nó ở đó (vibe-coding rule).

---

## Q4 · Công cụ prototype + có làm lời gọi AI thật không?

Chọn công cụ: Lovable / v0.dev / Figma / coding agent / **một file HTML tự chứa**. Ai cầm phần này thì trả lời.

**Trả lời — Nguyễn Văn Minh (TV4, người cầm prototype):** Chọn **một file HTML tự chứa** — double-click mở được, cùng dạng với mẫu giảng viên (`prototype-sample/index.html`), không cần đăng ký tài khoản nào trước giờ lab → không rủi ro "kẹt kỹ thuật quá 20 phút". Kèm theo: guided walkthrough (bấm qua ca khó từ đầu tới cuối, đúng tiêu chí R5 5 điểm) + free-play buttons (xử lý ca lạ TA đưa lúc demo). Bonus lời gọi AI thật (+3): **chỉ làm sau khi M3 đạt** — còn giờ thì dùng API free tier, key nhập lúc demo, tuyệt đối không nằm trong code nộp. Đánh đổi 3 điểm bonus bằng 25 điểm R5 là lỗ.

Có làm lời gọi AI thật (**+3 bonus**, điều kiện: không lộ API key trong code nộp, chỉ đưa dữ liệu dựng) không?

**Trả lời:** coding agent

---

## Q5 · Demo trong zone hay xung phong trước lớp (+5 bonus)?

Chỉ cần ý kiến ban đầu — chốt hẳn cuối chặng 5 sau khi M3 đạt.

**Trả lời (mỗi người một dòng):**
- TV1:
- TV2:
- TV3:
- Nguyễn Văn Minh (TV4): Nghiêng về **xung phong demo trước lớp** nếu M3 đạt — chốt hẳn cuối chặng 5 theo cả nhóm; nếu xung phong thì mình tập trước ít nhất một ca lạ trên free-play của prototype.

---

## Q6 · App học tập có sẵn — vì sao không cứu được? (mỗi người trả lời)

Từng thử app/chatbot học tập nào chưa (DeepTutor, ChatGPT thường, Khan Academy…)? **Vì sao vẫn kẹt / vì sao bỏ?** Câu trả lời sẽ thành lập luận cho §1 và §3: tính năng của nhóm phải giải được chỗ app có sẵn thất bại.

**Ví dụ từ Day 02 của một thành viên nhóm:** đã dùng DeepTutor khi tự học sách kỹ thuật Toán-heavy → bỏ vì **"không có bài giảng thật"** — app giải thích chung chung, không bám đúng tài liệu đang học. Và câu phản biện từng nhận: *"chatbot đã đủ để tóm tắt tài liệu rồi, tại sao vấn đề vẫn hiện hữu?"* — chính là câu T2 phải trả lời: ChatGPT thường không có căn cứ vào tài liệu buổi học, không biết nói "tài liệu không có", và không có TA để chuyển.

**Trả lời — [Phạm Hoàng Đức Minh]:** Mình nghĩ tới **NotebookLM**: trả lời dựa trên nguồn mình tải lên và có trích dẫn kèm theo, nên đã khắc phục được lỗi "chung chung, không bám tài liệu" của ChatGPT thường. Nhưng vẫn không cứu được lát cắt của nhóm vì:
- **Học viên phải tự tải tài liệu lên và tự dựng notebook** cho từng môn/buổi. Lúc 10h tối đang kẹt bài thì đây là thêm việc, không bớt việc. NotebookLM cũng không biết đây là buổi 1–3 của lớp nào, buổi 4–10 chưa học.
- **Không có đường chuyển người thật.** Khi tài liệu không có câu trả lời, nó không có bước "tài liệu không có, hỏi giảng viên/TA" và không có nút `chuyen_TA` hay giờ TA. Học viên vẫn tự xoay xở một mình.
**Bài học cho thiết kế:** giữ điểm mạnh của NotebookLM là *trả lời bám nguồn + trích mục* nhưng bổ sung 3 thứ nó thiếu: (1) tài liệu **có sẵn theo lớp**, học viên không phải tải lên; (2) nói thẳng **"tài liệu không có, hỏi giảng viên"** và chuyển TA đúng giờ. Phản biện "chatbot/NotebookLM đã đủ rồi" → trả lời: nó trả lời được *khi đã có tài liệu đúng*, còn chỗ học viên kẹt là *khi tài liệu không có hoặc không được phép trả lời*.

**Trả lời — [tên TV2]:**

**Trả lời — [tên TV3]:**

**Trả lời — Nguyễn Văn Minh (TV4):** Đã thử **DeepTutor** (app học tập có sẵn) khi tự học sách kỹ thuật Toán-heavy — **bỏ vì "không có bài giảng thật"**: giải thích chung chung, không bám đúng tài liệu mình đang học. ChatGPT thường cũng vậy: trả lời không dẫn nguồn vào tài liệu buổi học, mình không có cách kiểm nó bịa chỗ nào. Câu phản biện từng nhận ở Day 02 (*"chatbot đã đủ để tóm tắt tài liệu rồi, tại sao vấn đề vẫn hiện hữu?"*) — câu trả lời chính là lý do tồn tại của T2: ChatGPT không có căn cứ vào tài liệu buổi 3, không biết nói "tài liệu không có", và không có TA để chuyển. **Bài học cho thiết kế:** mỗi câu giảng phải trích kèm mã mục (§3.2…) để học viên kiểm được — hiển thị bằng chứng trên prototype là bắt buộc, không phải trang trí.

---

## Sau Round 1

Trả lời xong sẽ có Round 2: khoanh 2 kịch bản đắt nhất (từ ≥8 kịch bản) · mức tự chủ cho từng tool (`tra_cuu_tai_lieu` / `goi_y_bai_tap` / `chuyen_TA` / `dang_FAQ`) · chọn ca khó cho prototype.

Nền tảng nguồn cho thiết kế (thực trạng Study mode, HAX, PAIR, Luật TTNT Điều 11): xem `research/thuc-trang-nguon.md` khi có.
