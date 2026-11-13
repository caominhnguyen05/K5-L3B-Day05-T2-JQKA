# Grilling · Round 2 — đối chiếu Round 1 + chốt những chỗ còn trống

> Đọc phần "Đối chiếu" trước, rồi mỗi người trả lời Q7–Q11 phần tên mình, commit + push như Round 1.

---

## 📊 Đối chiếu Round 1 — chỗ 4 người lệch nhau (chỗ đáng bàn nhất)

### Q1 · Lát cắt — ⚠️ MỘT LỆCH LỚN

**Lát cắt là "phát sẵn, không chọn lại"** (đề gốc, `tracks/t2-education.md`): _"khi **học viên** đang hỏi bài lúc tối muộn, khi không còn ai để hỏi"_. Actor là **học viên** — người kẹt bài lúc 10h tối.

- Phạm Hoàng Đức Minh ✓ đúng actor
- TV2 ✓ đúng actor
- **MinhTDN ✘ actor là GIẢNG VIÊN** — "khi giảng viên cần tra cứu hoặc kiểm chứng kiến thức… sai thì giảng viên sẽ chuẩn bị kiến thức sai bài giảng". Đây là một sản phẩm khác (trợ lý soạn bài cho giảng viên), không phải lát cắt T2. → **Q7 bên dưới**
- Nguyễn Văn Minh (TV4) ✓ đúng actor

Ba người còn lại đều đồng thuận về "sai thì **học viên** học sai mà không biết" — đúng cái giá của track. Chỗ còn thiếu: Đức Minh và TV2 chưa thấy nêu rõ **AI được thêm quyền gì so với hôm nay** (TV4: thay cho việc tự dò tài liệu / bỏ cuộc tới sáng; TV2: tự tra cứu thay học viên).

### Q6 · App có sẵn — điểm xuất sắc để giữ lại làm lập luận

- **Đức Minh (NotebookLM)**: trả lời bám nguồn + trích dẫn ✓ nhưng (1) học viên phải **tự tải tài liệu từng lần** — lúc 10h tối là thêm việc, (2) **không có đường chuyển người**. → Bài học thiết kế: giữ trích dẫn theo mục, thêm ngữ cảnh khoá học có sẵn + nút chuyển TA. **Đây là lập luận §1 chất lượng — giữ lại.**
- **TV2 (ChatGPT/Gemini cho Calculus)**: trả lời đúng nhưng dùng **công thức chưa học** + đưa luôn đáp án thay vì gợi ý — đúng 2 lỗi của track (ngoài phạm vi dữ liệu + không phải Study mode). Giữ lại.s
- **TV4 (DeepTutor)**: bỏ vì "không có bài giảng thật" → mỗi câu giảng phải trích §x.x.

Cả 3 trải nghiệm hội tụ về **một câu lập luận dùng được nhiều chỗ**: _app có sẵn thất bại ở (a) không bám đúng tài liệu đang học, (b) không biết giới hạn của mình, (c) không có người phía sau_ — T2 giải đủ cả ba bằng `tra_cuu_tai_lieu` + "tài liệu không có" + `chuyen_TA`.

### Q2 · 3 việc KHÔNG làm — đủ để chốt (Q8)

Các đề xuất trùng nhau nhiều: **không đưa/xác nhận đáp số bài đang mở** (Đức Minh, TV2 gián tiếp, TV4) · **không nhận xét năng lực học viên** (TV2, TV4) · **không nói nguồn không có** (Đức Minh, TV2 gián tiếp) · **không giảng buổi chưa học** (TV4) · **không hứa việc không làm được** (Đức Minh) · **không tự nạp thông tin internet** (MinhTDN — hợp lệ, không có trong danh sách ứng viên nhưng đúng: AI chỉ được dựa vào dữ liệu track).

### Còn trống

- **Vai (c) — bảng kịch bản §2 + chuẩn bị demo**: chưa ai nhận (TV2, MinhTDN chưa nhận vai gì).
- **Q5 · demo trong zone / xung phong**: mới TV4 trả lời.
- **TV2 chưa điền tên** vào các chỗ `[tên TV2]`.

---

## Q7 · MinhTDN viết lại câu một lát cắt

Lát cắt phát sẵn đặt actor là **học viên** (người kẹt bài lúc tối muộn, không còn ai để hỏi). Viết lại câu một lát cắt của bạn theo đúng actor — hoặc, nếu bạn vẫn cho rằng giảng viên mới là người dùng xứng đáng của tính năng, viết lý do để cả nhóm bàn (đây là câu hỏi chấm được: đề nói "không chọn lại").

**Trả lời — MinhTDN:**Khi học viên làm bài hay học bài buổi tối muộn và muốn hỏi bài nhưng không còn ai để hỏi. Thay vì phải tự tìm kiếm trong tài liệu thì AI quyết: Giảng kèm trích tài liệu / hỏi lại cho rõ đúng không / gợi ý tựng bước / nếu không có tài liệu nói " Tài liệu không có, hỏi giảng viên". - Nếu sai thì học viên học sai đi mà không biết.

---

## Q8 · Chốt 3 việc tính năng KHÔNG làm (cả nhóm)

Từ các đề xuất ở Round 1, mỗi người **bình chọn 3** (ghi số 1–3 theo thứ tự ưu tiên). Gợi ý bộ mạnh nhất hiện có:

1. Không đưa / xác nhận đáp số bài đang mở
2. Không nhận xét năng lực người học
3. Không giảng nội dung buổi chưa học
4. Không nói về nguồn không có ("slide 12")
5. Không hứa việc không làm được ("đã báo TA")
6. Không tự nạp thông tin ngoài tài liệu khoá học

**Bình chọn — Phạm Hoàng Đức Minh:**

**Bình chọn — Nguyễn Cao Minh:** 1,2,4
**Bình chọn — Phạm Hoàng Đức Minh:** 1 2 4
**Bình chọn — TV2:**

**Bình chọn — MinhTDN:** 1 2 4

**Bình chọn — Nguyễn Văn Minh (TV4):** 1 · 3 · 2 — (1) là cái giá đắt nhất của domain (chép đáp án sai, âm thầm); (3) là lớp ① bịa nguồn sự thật, dữ liệu chỉ có buổi 1–3; (2) là lỗi niềm tin không đảo lại được với học viên đang tự hoài nghi lúc 10h tối. (4)(5) sẽ nằm trong câu chữ §3 như ràng buộc hành vi, không cần tách thành "tính năng không làm".

**Chốt của nhóm:**

---

## Q9 · Vai (c) — bảng kịch bản §2 + chuẩn bị demo: ai nhận?

Hai vai đã có người: prototype (TV4) · câu chữ AI (Đức Minh). Còn lại: **bảng kịch bản §2 + chuẩn bị demo** — TV2 hoặc MinhTDN nhận, kèm một câu vì sao phù hợp.

**Trả lời — Nguyễn Cao Minh:** bảng kịch bản §2 + chuẩn bị demo

**Trả lời — MinhTDN:** **bảng kịch bản §2**

---

## Q10 · Pre-vote mức tự chủ cho 4 tool (làm trước lab — chặng 4 sẽ nhanh hơn hẳn)

Guide §4.3: _"Mỗi người tự xếp mức cho mọi tool trước, không bàn; rồi cả nhóm so và chốt."_ Làm sẵn ở nhà: với **mỗi tool**, chọn mức **tự làm / cần người duyệt / cấm** + **một câu lý do theo cost-of-error** (sai thì ai chịu gì · đảo lại được không · chờ người thì mất gì). Chỗ mọi người lệch nhau = tool khó xếp nhất — sẽ là 5 điểm R4.

| Tool               | Làm gì                                           | Đảo lại được không                 |
| ------------------ | ------------------------------------------------ | ---------------------------------- |
| `tra_cuu_tai_lieu` | Tìm trong tài liệu buổi học, trả đoạn kèm mã mục | Chỉ đọc                            |
| `goi_y_bai_tap`    | Gửi gợi ý làm bài cho một học viên               | Gợi ý quá tay thì học viên đã chép |
| `chuyen_TA`        | Chuyển câu hỏi cho TA, báo giờ TA trả lời        | Được                               |
| `dang_FAQ`         | Đăng câu hỏi + trả lời vào FAQ cả lớp            | Gỡ được, nhưng nhiều người đã đọc  |

**Pre-vote — Phạm Hoàng Đức Minh:** 

- `tra_cuu_tai_lieu`: **tự làm** — chỉ đọc, đảo lại hoàn toàn; nếu trích sai mục, học viên kiểm được ngay vì hiển thị mã mục (đây chính là lý do bằng chứng phải hiện trên màn hình).
- `goi_y_bai_tap`: **tự làm kèm luật chặt** (chỉ gợi ý bước đầu của bài đang mở, không bao giờ đưa/xác nhận đáp số)
- `chuyen_TA`: **tự làm** — đảo lại được (TA nhận câu hỏi thừa thì rẻ); kèm ràng buộc hiển thị: phải cho thấy câu đã vào hàng chờ + giờ TA trả lời, không bao giờ nói "đã báo TA" khi chưa gửi (lỗi HAX #7 của rubric riêng).
- `dang_FAQ`: **cần người duyệt (TA/giảng viên)** — một câu sai đăng lên FAQ cả lớp thì nhiều người đã đọc, cái sai lan theo cấp số nhân; chờ duyệt không mất gì vì FAQ không phải việc gấp lúc 10h tối.

**Pre-vote — Nguyễn Cao Minh:**

- `tra_cuu_tai_lieu`: **tự làm** — Tool chỉ đọc tài liệu, không thay đổi dữ liệu nên rủi ro thấp. Nếu AI trích dẫn sai mục, học viên có thể kiểm tra lại thông qua mã nguồn tài liệu được hiển thị. Việc chờ TA duyệt từng lần tra cứu sẽ làm mất khả năng hỗ trợ học viên vào tối muộn.
- `goi_y_bai_tap`: **tự làm kèm giới hạn** - AI chỉ được gợi ý bước đầu, không đưa hoặc xác nhận đáp số bài đang mở. Nếu gợi ý quá chi tiết, học viên có thể chép đáp án và không thể đảo ngược việc đó. Tuy nhiên, nếu phải chờ TA duyệt mọi gợi ý thì tính năng mất giá trị khi TA đã hết giờ trực.
- `chuyen_TA`: **cần học viên duyệt** — AI có thể đề xuất chuyển câu hỏi nhưng học viên phải xác nhận trước khi gửi, tránh chuyển nhầm hoặc chia sẻ nội dung học viên không muốn gửi. Việc chuyển nhầm có thể thu hồi nhưng vẫn gây phiền cho TA.
- `dang_FAQ`: **cần người duyệt (TA/giảng viên)** — Nếu AI tự đăng câu trả lời sai lên FAQ, nhiều học viên có thể tiếp thu kiến thức sai trước khi bài được gỡ, gây hậu quả khó khắc phục. Vì FAQ không phải yêu cầu khẩn cấp nên việc chờ TA duyệt là hợp lý; nếu chưa được duyệt thì không đăng.

**Pre-vote — MinhTDN:** 
- `tra_cuu_tai_lieu`: **tự làm** — chỉ đọc, đảo lại hoàn toàn; nếu trích sai mục, học viên kiểm được ngay vì hiển thị mã mục .
- `goi_y_bai_tap`: **Cần người duyệt** Gửi gợi ý làm bài cho một học viên. hoàn toàn đảo lại được, Gợi ý sai hoặc quá chi tiết có thể khiến học viên hiểu sai hoặc mất cơ hội tự giải bài; giảng viên duyệt trước sẽ giảm rủi ro, dù có thể làm chậm phản hồi.
- `chuyen_TA`: **tự làm** — Chuyển câu hỏi cho TA, báo giờ TA trả lời, Có thể hủy hoặc cập nhật, Chuyển nhầm có thể sửa hoặc chuyển lại; nếu bắt giảng viên duyệt từng yêu cầu thì học viên phải chờ lâu, làm mất giá trị hỗ trợ kịp thời.
- `dang_FAQ`: **cần người duyệt (TA/giảng viên)** — một câu sai đăng lên FAQ cả lớp thì nhiều người đã đọc, cái sai lan theo cấp số nhân; chờ duyệt không mất gì vì FAQ không phải việc gấp lúc 10h tối. Quá hạn không ai duyệt → không đăng, trả lời riêng cho người hỏi.

**Pre-vote — Nguyễn Văn Minh (TV4):**

- `tra_cuu_tai_lieu`: **tự làm** — chỉ đọc, đảo lại hoàn toàn; nếu trích sai mục, học viên kiểm được ngay vì hiển thị mã mục (đây chính là lý do bằng chứng phải hiện trên màn hình).
- `goi_y_bai_tap`: **tự làm kèm luật chặt** (chỉ gợi ý bước đầu của bài đang mở, không bao giờ đưa/xác nhận đáp số) — đã cân nhắc "cần người duyệt" nhưng loại: lúc 10h tối TA đã off, chờ duyệt = chờ vô ích, mất đúng giá trị cốt lõi của lát cắt; gợi ý bước đầu sai thì rẻ, học viên tự thấy khi làm tiếp.
- `chuyen_TA`: **tự làm** — đảo lại được (TA nhận câu hỏi thừa thì rẻ); kèm ràng buộc hiển thị: phải cho thấy câu đã vào hàng chờ + giờ TA trả lời, không bao giờ nói "đã báo TA" khi chưa gửi (lỗi HAX #7 của rubric riêng).
- `dang_FAQ`: **cần người duyệt (TA/giảng viên)** — một câu sai đăng lên FAQ cả lớp thì nhiều người đã đọc, cái sai lan theo cấp số nhân; chờ duyệt không mất gì vì FAQ không phải việc gấp lúc 10h tối. Quá hạn không ai duyệt → không đăng, trả lời riêng cho người hỏi.

---

## Q11 · Ca khó cho prototype — nghiêng ca nào?

Demo bắt buộc của track: bấm qua một ca **"bài đang mở hoặc tài liệu sai"**. Ứng viên (hard tests của track):

- **A.** Xin giải hộ bài 3 đang mở (+ xin xác nhận đáp số) — user đòi thứ AI không được phép; từ chối sao cho vẫn hữu ích
- **B.** Tài liệu khoá có câu sai (ví dụ mâu thuẫn giữa 2 mục) — AI phải nói câu nào cần xem lại, bảo báo giảng viên, không khẳng định tài liệu đúng
- **C.** Học viên nhắc nguồn không có ("slide 12 nói gì?")
- **D.** Hỏi nội dung buổi chưa học (buổi 7 — p-value)

**Ý kiến — Nguyễn Văn Minh (TV4):** ca **A** — nó căng nhất vì chạm đồng thời 3 ranh giới: thẩm quyền (không được giải hộ), giá trị cốt lõi (phải vẫn hữu ích, không đuổi user đi), và mức tự chủ (`goi_y_bai_tap` đúng lúc cần luật "chỉ bước đầu"). Ca B làm kịch bản đắt thứ hai trong spec; C, D để free-play lúc demo xử lý ca lạ.

**Ý kiến — Phạm Hoàng Đức Minh:** ca A (phải vẫn hữu ích, không đuổi user đi)

**Ý kiến — TV2:**

**Ý kiến — MinhTDN:** ca B 

---

## Sau Round 2

Còn lại cho buổi lab: viết ≥8 kịch bản (chặng 2) · câu AI nói nguyên văn cho 2 ca đắt nhất (chặng 3, Đức Minh cầm) · thử mức tự chủ trên 3 kịch bản (chặng 4) · dựng prototype (chặng 5, TV4 cầm) · 3 tiêu chí Pass/Fail (chặng 6).
