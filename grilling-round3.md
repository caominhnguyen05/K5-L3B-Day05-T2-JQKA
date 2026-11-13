# Grilling · Round 3 — chốt 3 chỗ bất đồng thật + một phát hiện trong dữ liệu track

> Round 2 đã trả lời xong. Round 3 chỉ còn **4 câu**, tất cả đều là chỗ 4 người đang lệch nhau — đây chính là chỗ ăn điểm R4 (25đ) và R1 (5đ). Mỗi người đọc lập luận rồi bình chọn lại.

---

## 🔍 PHÁT HIỆN: tài liệu buổi 3 có một câu SAI cài sẵn — và nó "đúng vì may"

Trong `tracks/t2-education.md`, **§3.3** viết:

> "Độ lệch chuẩn là căn bậc hai của phương sai, có cùng đơn vị với dữ liệu. **Vì là căn bậc hai, độ lệch chuẩn luôn nhỏ hơn phương sai.**"

Câu cuối **sai về mặt toán học**. √x < x chỉ đúng khi x > 1. Phương sai < 1 thì độ lệch chuẩn **lớn hơn** phương sai:

- Dữ liệu 0,1 · 0,2 · 0,3 → phương sai ≈ 0,0067, độ lệch chuẩn ≈ 0,082 → **std > var** ✗
- Dữ liệu 1 · 1,5 → phương sai = 0,0625, độ lệch chuẩn = 0,25 → **std > var** ✗

**Nhưng với chính dữ liệu bài tập 3** (9, 10, 10, 11, 12, 12, 13, 45): phương sai ≈ 127,9, độ lệch chuẩn ≈ 11,3 → std < var ✓ **đúng**.

Nghĩa là: nếu học viên thử bằng dữ liệu bài tập 3 thì câu sai **trông đúng**. Đây đúng là ca mà guide §2 gọi là *"câu trả lời trông đúng nhưng vẫn rủi ro — đúng vì may, không vì thiết kế"*.

**Hệ quả cho bài làm (rất đắt):**

1. Đây là **ca B có thật**, không phải giả định: hỏi *"độ lệch chuẩn với phương sai cái nào lớn hơn ạ?"* → AI phải nói **§3.3 có câu cần xem lại** + giải thích vì sao + bảo học viên báo giảng viên. Đúng rubric riêng T2 mục 6: *"không khẳng định tài liệu đúng khi chưa kiểm"*.
2. Đây là **lỗi sửa câu chữ không cứu được** (R3, 3 điểm): nếu AI chỉ nói khéo hơn ("theo tài liệu §3.3 thì…") thì vẫn truyền câu sai. Chỉ **thiết kế** mới cứu: AI phải có nhánh "tài liệu có thể sai" → hiện cảnh báo + nút báo giảng viên, không chỉ trích dẫn.
3. **Tăng hạng ca B** trong Q11 — nó không còn là ca phụ.

---

## Q12 · Chốt 3 việc KHÔNG làm — TV4 xin rút, theo nhóm

Kết quả bình chọn: **1, 2, 4** được 3/4 phiếu (Cao Minh, Đức Minh, MinhTDN). TV4 bình chọn 1, 3, 2.

**TV4 xin rút phiếu của mình — nhóm đúng, TV4 sai.** Lý do:

- Việc **(3) "không giảng buổi chưa học"** không phải một *việc không làm* tuyệt đối. Rubric riêng T2 mục 2 cho phép: *"Nội dung buổi sau: nói buổi nào sẽ học, **giới thiệu tối đa một câu**"*. Một non-goal mà bản thân nó có ngoại lệ thì không chấm được — R1 yêu cầu "bản prototype không vi phạm", mà prototype sẽ phải nói tên buổi 7 khi bị hỏi.
- Việc **(4) "không nói về nguồn không có"** là tuyệt đối và kiểm được trên prototype: học viên nói "slide 12" → AI phải nói tài liệu buổi 3 **không có slide đánh số**, chỉ có §3.1–§3.5. Đây cũng là một hard test có sẵn của track.

→ **Chốt đề nghị: 1 · 2 · 4.** Ba việc này tuyệt đối, kiểm được trên màn hình, và mỗi cái trỏ về một hard test của track.

**Bình chọn lại — Phạm Hoàng Đức Minh:**

**Bình chọn lại — Nguyễn Cao Minh:**

**Bình chọn lại — MinhTDN:** 1 · 2 · 4

**Bình chọn lại — Nguyễn Văn Minh (TV4):** 1 · 2 · 4 (rút phiếu cũ, đồng ý với nhóm — lý do ở trên)

---

## Q13 · `goi_y_bai_tap` — bất đồng thật 3–1, đề nghị TÁCH BƯỚC

| | Mức | Lý do |
|---|---|---|
| Đức Minh | tự làm + luật chặt | chờ TA lúc 10h tối = chờ vô ích |
| Cao Minh | tự làm + giới hạn | như trên |
| MinhTDN | **cần người duyệt** | gợi ý sai/quá chi tiết → học viên hiểu sai hoặc mất cơ hội tự giải |
| TV4 | tự làm + luật chặt | như trên |

**Đây là tool khó xếp nhất của nhóm** — và cả hai phía đều đúng:

- MinhTDN đúng về **cái giá**: cột "đảo lại được không" của tool ghi rõ *"Gợi ý quá tay thì học viên đã chép"* — chép rồi thì **không đảo lại được**. Đây là tool duy nhất trong 4 tool có cái giá không đảo được mà lại đang được đề xuất "tự làm".
- Ba người còn lại đúng về **thời điểm**: giờ TA là 08:00–22:00. Lúc 10h tối, "cần TA duyệt" = **không bao giờ được duyệt** → tính năng chết đúng lúc cần nhất. Guide §4.1 hỏi thẳng: *"Chờ có phải cũng là một kiểu sai không?"*

**Đề nghị chốt — tách `goi_y_bai_tap` thành 2 bước** (guide §4.3 cho phép, rubric R4 "Tốt khi" thưởng điểm):

| Bước | Tên | Mức | Lý do |
|---|---|---|---|
| 1 | `goi_y_buoc_dau` — AI gợi ý **bước đầu tiên** cho bài đang mở, kèm mã mục tài liệu | **tự làm** | Sai thì rẻ: học viên làm tiếp là tự thấy vô lý; không thể chép đáp số vì không có đáp số nào được đưa ra |
| 2 | `giai_chi_tiet` — AI đi sâu từng bước / xác nhận đáp số | **cấm** (không phải "cần duyệt") | Đây là chỗ "chép rồi không đảo lại được". Nhưng lúc 10h tối không ai duyệt được → **cấm hẳn**, và chuyển sang `chuyen_TA` để sáng mai TA trả lời |

Như vậy MinhTDN được thỏa về **cái giá** (bước nguy hiểm bị chặn), ba người kia được thỏa về **thời điểm** (không phải chờ ai lúc 10h tối). Và nhóm có một câu trả lời cho "tool tách bước" mà rubric R4 thưởng điểm.

**Bình chọn — Phạm Hoàng Đức Minh:** đồng ý

**Bình chọn — Nguyễn Cao Minh:**

**Bình chọn — MinhTDN:** Đồng ý

**Bình chọn — Nguyễn Văn Minh (TV4):** Đồng ý tách bước như bảng trên.

---

## Q14 · `chuyen_TA` — bất đồng này thực ra chỉ là LỆCH TỪ NGỮ

| | Mức | Lý do |
|---|---|---|
| Đức Minh | tự làm | đảo được, TA nhận thừa thì rẻ |
| Cao Minh | **cần học viên duyệt** | tránh chuyển nhầm / chia sẻ nội dung học viên không muốn gửi |
| MinhTDN | tự làm | chuyển nhầm sửa được; bắt duyệt thì học viên chờ lâu |
| TV4 | tự làm | như Đức Minh |

**Khoan — đọc lại định nghĩa của guide §4.2:**

> **cần người duyệt** *(khách hoặc nhân viên bấm xác nhận)*

Người duyệt **có thể là khách** (ở đây là học viên), không bắt buộc là TA. Ba người chọn "tự làm" đang hiểu "cần người duyệt" = "cần TA duyệt" → nên mới thấy nó đắt. Nhưng Cao Minh đề xuất **học viên bấm xác nhận** — học viên đang ngồi đó, chi phí chờ = **một cú bấm**, không phải chờ người.

Và lý do của Cao Minh không phải "cho tiện" mà là **quyền riêng tư + niềm tin**: học viên có thể đã gõ *"em không hiểu gì cả, chắc em dốt"* — tự động gửi nguyên văn cho TA là vi phạm niềm tin, không đảo lại được (TA đã đọc rồi). Đúng PAIR *"Return control to the user"* và HAX **G9** (sửa dễ dàng).

**Đề nghị chốt: `chuyen_TA` = cần người duyệt (học viên bấm xác nhận).** AI soạn sẵn câu chuyển + hiện rõ **nội dung nào sẽ gửi cho TA** + giờ TA trả lời, học viên bấm một lần. Đây là chỗ Cao Minh đúng và 3 người kia cần đổi.

**Bình chọn — Phạm Hoàng Đức Minh:** đồng ý 

**Bình chọn — Nguyễn Cao Minh:**

**Bình chọn — MinhTDN:** Đồng ý

**Bình chọn — Nguyễn Văn Minh (TV4):** Đổi sang **cần người duyệt (học viên bấm)** — Cao Minh đúng, mình đã hiểu sai định nghĩa "cần người duyệt".

---

## Q15 · Ca khó cho prototype — đề nghị làm CẢ A và B (2 tab)

| | Ca | Phiếu |
|---|---|---|
| A | Xin giải hộ bài 3 đang mở (+ xin xác nhận đáp số) | TV4, Đức Minh |
| B | Tài liệu khoá có câu sai (§3.3) | MinhTDN |
| — | Cao Minh chưa bỏ phiếu | |

**Đề nghị: làm cả hai, A là tab chính, B là tab thứ hai.** Lý do:

- Demo bắt buộc của track ghi *"bấm qua một ca **bài đang mở hoặc tài liệu sai**"* — cả hai đều hợp lệ, không phải chọn một.
- Prototype dạng guided walkthrough vốn đã là **nhiều tab, mỗi tab một ca** — dựng thêm tab thứ hai gần như miễn phí sau khi có khung.
- **A** thể hiện: ranh giới thẩm quyền + vẫn hữu ích + luật của `goi_y_buoc_dau` (Q13).
- **B** thể hiện: lớp ① nguồn sự thật + nhánh "tài liệu có thể sai" + lỗi sửa câu chữ không cứu được (phát hiện ở trên). Đây là ca **khó nhất về thiết kế**, và là ca ăn điểm R3.
- Có 2 tab thì lúc demo TA đưa ca lạ, nhóm có nhiều đường hơn để chỉ "thiết kế của tôi xử lý ca này thế nào".

**Ý kiến — Phạm Hoàng Đức Minh:** đồng ý

**Ý kiến — Nguyễn Cao Minh:**

**Ý kiến — MinhTDN:** Đồng ý

**Ý kiến — Nguyễn Văn Minh (TV4):** Đồng ý làm cả A và B; A mở màn, B là ca ăn điểm.

---

## Sau Round 3

Chốt xong 4 câu này là **đủ nguyên liệu để viết `spec.md` §1–§4**. Còn lại cho buổi lab: viết ≥8 kịch bản §2 (Cao Minh + MinhTDN) · câu AI nói nguyên văn §3 (Đức Minh) · dựng prototype (TV4) · 3 tiêu chí §6.
