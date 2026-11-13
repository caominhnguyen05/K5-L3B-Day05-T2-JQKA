# Nguồn & thực trạng cho thiết kế T2 (trợ lý học bài)

> **Ghi chú phương pháp:** Tài liệu biên soạn trong phiên nghiên cứu này (2026). Môi trường truy vấn không cung cấp ngày lịch hệ thống chính xác, nên "ngày kiểm tra" dưới đây là ngày biên soạn; trạng thái nội dung các nguồn được xác nhận còn hiện hành qua các nguồn phụ cập nhật trong năm 2026. **Lưu ý truy cập:** `help.openai.com` và `openai.com/index` chặn truy vấn trực tiếp (HTTP 403); nội dung hai nguồn này được xác minh qua **trích dẫn trực tiếp (snippet) từ công cụ tìm kiếm**, không qua bài viết diễn giải. Trang `microsoft.com/en-us/haxtoolkit/hax-guidelines/` trả về HTTP 404; đã dùng bản gốc PDF của bài báo CHI 2019 (Amershi et al.) trên cùng domain chính thức của Microsoft Research làm nguồn nguyên văn. Toàn văn 2 chương PAIR Guidebook (PDF chính thức) và Công báo điện tử Chính phủ được tải và đọc trọn vẹn.

---

## 1. Thực trạng ChatGPT Study mode hôm nay

### 1.1. Study mode LÀM GÌ

| # | Sự kiện | Nguồn |
|---|---------|-------|
| 1 | **Hướng dẫn từng bước thay vì chỉ đưa đáp án cuối:** trang trợ giúp chính thức mô tả "Instead of only giving a final answer…" — study mode hỏi lại người học về mục tiêu, phần đã biết, chỗ đang bí; đưa **gợi ý (hints)** và **giải thích từng bước**; **kiểm tra mức hiểu** trong suốt quá trình. | [Using study mode in ChatGPT — OpenAI Help Center](https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt) (trích dẫn trực tiếp) |
| 2 | **Hỏi lại câu hỏi cho người học (asks questions back):** bài công bố chính thức nói study mode giúp học "step by step, rather than just providing answers", khuyến khích tư duy phản biện; demo cho thấy ChatGPT yêu cầu học sinh tự tóm lại đáp án bằng lời của mình. | [Introducing study mode in ChatGPT — OpenAI](https://openai.com/index/chatgpt-study-mode/) (trích dẫn trực tiếp); xác nhận thêm qua [NBC News, 29/7/2025](https://www.nbcnews.com/tech/tech-news/openai-announces-new-study-mode-product-students-rcna221808) |
| 3 | **Tạo quiz / câu hỏi luyện tập / flashcard:** trang trợ giúp nêu rõ có thể nhờ ChatGPT "quiz you, create practice questions, or create flashcard-style review". | [OpenAI Help Center](https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt) (trích dẫn trực tiếp) |
| 4 | **Nhận tài liệu môn học do người dùng tải lên:** "Any course materials that would help, such as notes, a worksheet, a syllabus, a PDF, or a photo of the problem". | [OpenAI Help Center](https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt) (trích dẫn trực tiếp) |
| 5 | **Trực quan tương tác** (thay đổi biến số và xem kết quả) cho một số chủ đề toán/khoa học — xác nhận qua nguồn phụ mô tả tính năng này. | [The Rundown — ChatGPT Study Mode](https://www.therundown.ai/tools/study-mode) (nguồn phụ; không thấy trong trích dẫn trực tiếp từ OpenAI) |
| 6 | **Ra mắt 29/7/2025**, dùng bằng cách chọn **"Study and learn"** trong menu tools, gõ `@study`, hoặc vào `chatgpt.com/studymode`. | [OpenAI](https://openai.com/index/chatgpt-study-mode/) (trích dẫn trực tiếp); [CNBC, 29/7/2025](https://www.cnbc.com/2025/07/29/openai-announces-new-study-mode-product-for-students-.html) |
| 7 | **Phạm vi sử dụng:** "available to logged in users on Free, Plus, Pro, Team, with availability in ChatGPT Edu coming in the next few weeks"; trang trợ giúp nói tính năng "is available across ChatGPT plans globally on web, iOS, and Android, and is available for all ChatGPT models". | [OpenAI](https://openai.com/index/chatgpt-study-mode/) + [OpenAI Help Center](https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt) (trích dẫn trực tiếp) |
| 8 | **Tính chất:** OpenAI tự định vị đây là **"a first step in a longer journey to improve learning in ChatGPT"** — tức sản phẩm công khai thừa nhận đang ở giai đoạn đầu. | [OpenAI](https://openai.com/index/chatgpt-study-mode/) (trích dẫn trực tiếp); [TechCrunch, 29/7/2025](https://techcrunch.com/2025/07/29/openai-launches-study-mode-in-chatgpt/) |

### 1.2. Study mode KHÔNG làm gì

- **KHÔNG có con người phía sau để "chuyển tiếp".** Trong toàn bộ trang trợ giúp chính thức và bài công bố, **không hề có bất kỳ cơ chế nào** đưa cuộc trò chuyện tới trợ giảng (TA), giảng viên, hay con người nào để xem xét. Đây là kết luận dạng *vắng mặt bằng chứng* (absence of evidence): tôi đã đọc toàn bộ nội dung trích được của cả hai tài liệu chính thức và không tìm thấy chức năng escalation/human review nào — Study mode là **một chế độ hành vi của cùng một mô hình ChatGPT**, không phải dịch vụ có người vận hành. Nguồn: [OpenAI Help Center](https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt); [OpenAI](https://openai.com/index/chatgpt-study-mode/).
- **KHÔNG hiển thị độ tin cậy (confidence) hay dẫn nguồn** cho từng câu trả lời trong giao diện study mode — không có trích dẫn nguồn, không có mức độ chắc chắn hiển thị (không thấy mô tả tính năng nào như vậy trong tài liệu chính thức). *Suy luận từ vắng mặt trong tài liệu.*
- **KHÔNG thêm quota hay đặc quyền gì:** study mode dùng đúng plan, model, giới hạn tin nhắn và rate limit như chat thường; không có mô hình riêng hay ưu đãi riêng. Nguồn: [OpenAI Help Center](https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt) (trích dẫn trực tiếp); xác nhận qua [The AI Rankings](https://theairankings.com/guides/chatgpt-study-mode/).
- **KHÔNG ép buộc:** người dùng tắt/bỏ chế độ Study bất cứ lúc nào (xóa icon Study khỏi ô soạn tin, hoặc tắt trong menu). Nguồn: [OpenAI Help Center](https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt) (trích dẫn trực tiếp).
- **KHÔNG gắn với trang môn học / LMS:** study mode hoạt động trong ChatGPT chung, chỉ "hiểu" tài liệu môn học khi người dùng **tự tay tải lên từng lần**; không có khái niệm khóa học, giáo trình cố định, hay liên kết trang môn học. *Suy luận từ mô tả sản phẩm.*
- **KHÔNG thay thế giáo viên:** OpenAI khẳng định mục đích là khuyến khích học chủ động, tư duy phản biện, "not to replace teachers or course materials" (diễn giải qua nguồn phụ); CNBC/NBC xác nhận động cơ là phản bác hình ảnh ChatGPT như "cỗ máy đưa đáp án" (answer machine). Nguồn: [AVID Open Access](https://avidopenaccess.org/resource/explore-chatgpt-study-mode/); [CNBC](https://www.cnbc.com/2025/07/29/openai-announces-new-study-mode-product-for-students-.html).

### 1.3. Kết luận cho câu hỏi "có ai phía sau để chuyển không?"

**Không.** Tài liệu chính thức không ghi nhận bất kỳ lớp con người nào (TA, giảng viên, moderator) đứng sau study mode. Khi AI sai, người học chỉ có các lựa chọn như trong ChatGPT thường: yêu cầu AI sửa, bắt đầu hội thoại mới, hoặc tự kiểm chứng bên ngoài. **Không tồn tại nút "chuyển cho người" nào trong thực trạng hiện nay.** (Vắng mặt bằng chứng từ tài liệu chính thức, kiểm tra trong phiên nghiên cứu này.)

---

## 2. Vấn đề cho lát cắt T2

Các điểm căng thẳng (tension points) rút ra từ thực trạng trên — *phần này là suy luận nghiên cứu (researcher inference) có căn cứ trực tiếp vào nguồn ở mục 1, 3, 4, 5*:

1. **Không có người phía sau ⇒ không có gì để "chuyển tiếp".** Study mode không có đường escalation tới con người. Đây chính là khoảng trống mà một trợ lý học bài nhúng vào **trang môn học** có thể lấp: TA/giảng viên là tài nguyên sẵn có mà ChatGPT không có. Đáng chú ý: bài báo CHI 2019 của Microsoft từng cân nhắc guideline riêng "**fallback to a human where appropriate**" nhưng đã **gộp nó vào G10** ("scope services when in doubt") vì ít sản phẩm áp dụng ([Amershi et al. 2019, PDF chính thức](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf)) — tức "hạ cấp xuống con người khi nghi ngờ" là việc hệ thống tự làm, còn "chuyển cho con người khi sai" là thứ thiết kế của T2 phải **tự thêm**.

2. **Lỗi sai âm thầm (silent wrong answers).** Study mode không hiển thị confidence hay nguồn ⇒ người học không có tín hiệu nào để nhận biết câu trả lời sai. PAIR gọi đây là **background errors** — "situations in which the system isn't working correctly, but neither the user nor the system register an error… may have significant consequences if undetected for long periods of time" ([PAIR Guidebook — Errors + Graceful Failure, PDF chính thức](https://pair.withgoogle.com/chapter/People%20+%20AI%20Guidebook%20-%20Errors%20+%20Graceful%20Failure.pdf)). Trong bối cảnh học tập, lỗi này đặc biệt nguy hiểm vì người học **chưa đủ kiến thức để tự phát hiện** (đúng lý do phải dùng trợ lý).

3. **Kỳ vọng người dùng chưa được hiệu chỉnh (G2 bị vi phạm).** Người học không được cho biết AI sai "bao lâu một lần" và ở đâu — vi phạm hướng dẫn HAX G2 ("Make clear how well the system can do what it can do"). Thiết kế T2 phải trả lời: người dùng thấy gì khi AI không chắc, và thấy gì khi AI sai.

4. **Quyền tự chủ của AI nên theo mức, không phải bật/tắt.** Study mode chỉ có hai trạng thái (bật/tắt chế độ). PAIR khuyến nghị "**Progressively increase automation under user guidance. Automate more when trust is high, or risk of error is low**" ([PAIR — Explainability + Trust, PDF chính thức](https://pair.withgoogle.com/chapter/People%20+%20AI%20Guidebook%20-%20Explainability%20+%20Trust.pdf)) và "**Return control to the user**" khi hệ thống thất bại ([PAIR — Errors + Graceful Failure](https://pair.withgoogle.com/chapter/People%20+%20AI%20Guidebook%20-%20Errors%20+%20Graceful%20Failure.pdf)). Trợ lý trong trang môn học cần thang tự chủ: gợi ý → giải thích từng bước → tự chấm/tự tổng kết, kèm đường "trả quyền cho người học".

5. **Tích hợp trang môn học phải THÊM những thứ Study mode còn thiếu** (đây là giá trị thiết kế của T2): (a) ngữ cảnh khóa học cố định (giáo trình, slide, đề cương) thay vì tải tay từng lần; (b) hiển thị nguồn/dẫn chứng từ chính tài liệu môn học; (c) đường chuyển tiếp tới TA/giảng viên khi AI bế tắc hoặc người học phản đối kết quả; (d) ghi nhận phản hồi granular (G15) để cải thiện; và (e) **công khai danh tính AI** theo Điều 11 khoản 1 Luật TTNT (mục 5).

---

## 3. HAX Guidelines — nguyên văn & ví dụ cụ thể

**Nguồn nguyên văn:** Amershi, S., et al. (2019). *Guidelines for Human-AI Interaction.* CHI 2019 — [PDF chính thức trên Microsoft Research](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf) (đã tải và đọc toàn văn). Trang web HAX Toolkit hiện tại: [haxtoolkit/ai-guidelines](https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/) (URL cũ `/hax-guidelines/` trả về 404; kiểm tra trong phiên nghiên cứu này).

**Lưu ý về phân nhóm pha:** theo bài báo gốc, các guideline chia 4 pha: **Initially** (G1–G2), **During interaction** (G3–G6), **When wrong** (G7–G11), **Over time** (G12–G18). Như vậy G8–G11 thuộc pha **"When wrong"** (không phải "During interaction"), và G15 thuộc pha **"Over time"**.

| G | Nguyên văn (tiếng Anh, trích PDF CHI 2019) | Dịch nghĩa | Pha | Ví dụ cụ thể trong giao diện (trích từ bài báo / HAX Toolkit) |
|---|---|---|---|---|
| **G1** | "**Make clear what the system can do.** Help the user understand what the AI system is capable of doing." | Nói rõ hệ thống có thể làm gì; giúp người dùng hiểu năng lực của AI. | Initially | Activity tracker hiển thị đầy đủ các chỉ số nó theo dõi và cách tính: "Displays all the metrics that it tracks and explains how. Metrics include movement metrics such as steps, distance traveled, length of time exercised, and all-day calorie burn." ([PDF](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf)) |
| **G2** | "**Make clear how well the system can do what it can do.** Help the user understand how often the AI system may make mistakes." | Nói rõ hệ thống làm tốt đến mức nào; giúp người dùng hiểu AI có thể sai bao lâu một lần. | Initially | Music recommender dùng ngôn ngữ chừa lối: "A little bit of hedging language: 'we think you'll like'." ([PDF](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf)) |
| **G8** | "**Support efficient dismissal.** Make it easy to dismiss or ignore undesired AI system services." | Cho phép bỏ qua / tắt dịch vụ AI không mong muốn một cách dễ dàng. | When wrong | Tính năng gợi ý trên site thương mại điện tử đặt "below the fold, and easy to scroll past… Easy to ignore" — không chặn luồng chính. ([PDF](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf)) |
| **G9** | "**Support efficient correction.** Make it easy to edit, refine, or recover when the AI system is wrong." | Khi AI sai, việc sửa/chỉnh/lấy lại quyền kiểm soát phải dễ. | When wrong | Trợ lý giọng nói sau khi tạo reminder hiển thị ngay dòng "Tap to Edit" với chevron để người dùng sửa kết quả. ([PDF](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf)) |
| **G10** | "**Scope services when in doubt.** Engage in disambiguation or gracefully degrade the AI system's services when uncertain about a user's goals." | Khi không chắc mục tiêu người dùng: làm rõ (disambiguation) hoặc tự thu hẹp/hạ cấp dịch vụ một cách duyên dáng. | When wrong | Autocomplete "usually provides 3-4 suggestions instead of directly auto completing it for you" — không tự quyết thay người dùng. ([PDF](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf)) |
| **G11** | "**Make clear why the system did what it did.** Enable the user to access an explanation of why the AI system behaved as it did." | Cho người dùng tiếp cận lời giải thích vì sao AI hành xử như vậy. | When wrong | Ứng dụng điều hướng hiển thị phụ đề lý do: "The route chosen by the app was made based on the Fastest Route, which is shown in the subtext." ([PDF](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf)) |
| **G15** | "**Encourage granular feedback.** Enable the user to provide feedback indicating their preferences during regular interaction with the AI system." | Khuyến khích phản hồi chi tiết theo từng đầu ra trong tương tác thường ngày. | Over time | Email app: "The user can directly mark something as important, when the AI hadn't marked it as that previously." ([PDF](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf)); HAX Toolkit còn có pattern 15A — Copilot in Excel cho feedback từng phản hồi ([haxtoolkit/pattern/g15-a](https://www.microsoft.com/en-us/haxtoolkit/pattern/g15-a-encourage-explicit-feedback-on-individual-system-outputs/)) |

---

## 4. PAIR Guidebook — lỗi & niềm tin

**Nguồn:** Google PAIR — *People + AI Guidebook*, 2 chương (đã tải và đọc toàn văn PDF chính thức):
- [Errors + Graceful Failure (PDF)](https://pair.withgoogle.com/chapter/People%20+%20AI%20Guidebook%20-%20Errors%20+%20Graceful%20Failure.pdf) · [trang chương](https://pair.withgoogle.com/chapter/errors-failing/)
- [Explainability + Trust (PDF)](https://pair.withgoogle.com/chapter/People%20+%20AI%20Guidebook%20-%20Explainability%20+%20Trust.pdf)

### 4.1. Errors + Graceful Failure

- **"Lỗi" do kỳ vọng người dùng định nghĩa, không phải do hệ thống:** "What the user considers an error is deeply connected to their expectations of the AI system… a recommendations system that's useful 60% of the time could be seen as a failure or a success." ⇒ Thiết kế phải quản lý kỳ vọng ngay từ đầu (liên hệ G1/G2).
- **Phân loại lỗi theo con mắt người dùng:** (a) **Context errors** — hệ thống "working as intended" nhưng người dùng coi là lỗi vì hành vi không được giải thích; (b) **Failstates** — hệ thống không đưa ra được đáp án do giới hạn cố hữu (true negatives); (c) **Happy accidents**; và (d) **Background errors** — hệ thống sai nhưng **cả người dùng lẫn hệ thống đều không nhận ra**: "situations in which the system isn't working correctly, but neither the user nor the system register an error… may have significant consequences if undetected for long periods of time." ⇒ *Đây là bằng chứng trực tiếp cho rủi ro "trả lời sai âm thầm" của một trợ lý học bài.*
- **Mỗi loại lỗi cần một con đường xử lý khác nhau:** ví dụ với lỗi do thiếu dữ liệu/hạn chế mô hình: "Explain why a certain result couldn't be given and provide alternative paths forward. For example, 'There's not enough data to predict prices for flights to Paris next year. Try checking again in a month'." ⇒ thông điệp lỗi phải "inform the user as specifically as possible about the system's limitations."
- **Luôn có đường đi tiếp (paths forward):** "The trick isn't to avoid failure, but to find it and make it just as user-centered as the rest of your product" — ví dụ ẩn dụ người phục vụ nhà hàng: hết Coke thì đề xuất Pepsi (kiểm tra an toàn nếu có rủi ro dị ứng).
- **Trả quyền kiểm soát cho người dùng:** "When an AI system fails, often the easiest path forward is to let the user take over… the user must have all the information they need in order to take the reins: awareness of the situation, what they need to do next, and how to do it."
- **Tạo cơ hội phản hồi ngay cả khi không có lỗi:** "Include opportunities for users to provide feedback both when presented with an error message as well as alongside 'correct' system output."
- **Đánh giá rủi ro theo tình huống:** rủi ro lỗi cao hơn khi "User is a novice at the task… Low system confidence…"; mức stakes cao hơn khi liên quan "Health, safety, or financial decisions" — *một trợ lý học bài thường phục vụ novice, tức nhóm rủi ro cao theo khung này.*
- **Giọng điệu:** "When designing your error experience, be human, not machine… Address mistakes with humanity and humility, and explain the system's limits while inviting people to continue forward."

### 4.2. Explainability + Trust

- **Hiệu chỉnh niềm tin (calibrate trust), không tối đa hóa niềm tin:** "Users shouldn't implicitly trust your AI system in all circumstances, but rather calibrate their trust correctly… indicating that a prediction could be wrong may cause the user to trust that particular prediction less. However, in the long term, users may come to use or rely on your product or company more, because they're less likely to over-trust your system and be disappointed." ⇒ **khớp niềm tin người dùng với độ tin cậy hệ thống** là mục tiêu, kể cả khi điều đó làm giảm tin ngay lập tức.
- **Nói rõ nguồn dữ liệu (evidence/sources):** "Every AI prediction is based on data, so data sources have to be part of your explanations… telling users what data the model is using can help them know when they have a critical piece of information that the system does not." Khái niệm cốt lõi: giải thích **Scope** (dữ liệu gì, dùng làm gì), **Reach** (cá nhân hóa hay tổng hợp), **Removal** (người dùng có xóa/reset được không).
- **Hiển thị confidence một cách hữu dụng:** "Model confidence displays explain how certain the AI is in its prediction, and the alternatives it considered" — dạng số ("Prediction: Poison oak (80%)") hoặc n-best ("Most likely plant: Poison oak / Maple leaf / Blackberry leaf"); lưu ý "statistical information like confidence scores can be challenging for users to understand" nên **phải thử nghiệm hiển thị sớm với người dùng thật**.
- **Giải thích gắn với hành động và mức stakes:** "the perfect time to show explanations is in response to a user's action"; trong kịch báo stakes cao thì "Don't say 'what' without saying 'why'". Học bài trước kỳ thi = stakes cao ⇒ cần giải thích nhiều hơn.
- **Giải thích một phần (partial explanations) là lựa chọn tốt nhất:** "In many cases the best approach is not to attempt to explain everything – just the aspects that impact user trust and decision-making… The best explanation is likely a partial one."
- **Tự chủ tăng dần theo hướng dẫn của người dùng:** "**Progressively increase automation under user guidance.** Allow users to get used to the shift from human to machine control… Automate more when trust is high, or risk of error is low." ⇒ câu trả lời trực tiếp cho câu hỏi thiết kế "AI nên có bao nhiêu quyền tự chủ": bắt đầu mức thấp, tăng khi niềm tin được hiệu chỉnh và rủi ro thấp.
- **Khi mất niềm tin:** cho biết trước có kế hoạch phục hồi, xử lý lỗi trong khoảnh khắc và ngăn lặp lại; trong trường hợp rủi ro cao thì "completely shift away from automation to manual control."

---

## 5. Luật TTNT 134/2025/QH15 — Điều 11 khoản 1

**Văn bản:** Luật Trí tuệ nhân tạo số **134/2025/QH15**, Quốc hội khóa XV thông qua tại **Kỳ họp thứ 10, ngày 10/12/2025** ([Báo Chính phủ](https://baochinhphu.vn/viet-nam-chinh-thuc-co-luat-tri-tue-nhan-tao-ai-102251210164948585.htm); [Bộ KH&CN — mst.gov.vn](https://mst.gov.vn/quoc-hoi-thong-qua-luat-tri-tue-nhan-tao-hoan-thien-hanh-lang-phap-ly-cho-ky-nguyen-so-197251210165544671.htm)); **hiệu lực từ 01/03/2026** ([Công báo điện tử Chính phủ — trang văn bản 134/2025/QH15](https://congbao.chinhphu.vn/van-ban/luat-so-134-2025-qh15-468694.htm): "Ban hành: 10/12/2025 — Hiệu lực: 01/03/2026", người ký: Trần Thanh Mẫn).

**Nguyên văn khoản 1 Điều 11 (Trách nhiệm minh bạch)** — nội dung nhất quán trên các cơ sở dữ liệu pháp luật:

> **"Điều 11. Trách nhiệm minh bạch**
> 1. Nhà cung cấp bảo đảm hệ thống trí tuệ nhân tạo tương tác trực tiếp với con người được thiết kế và vận hành để người sử dụng nhận biết khi đang tương tác với hệ thống, trừ trường hợp pháp luật có quy định khác."

Nguồn trích: [Luật Trí tuệ nhân tạo 2025 — luatvietnam.vn](https://luatvietnam.vn/khoa-hoc/luat-tri-tue-nhan-tao-2025-so-134-2025-qh15-422299-d1.html); [luatnguyen.vn](https://luatnguyen.vn/van-ban-phap-luat/luat-tri-tue-nhan-tao-so-134-2025-qh15-3751.html); đối chiếu [thuvienphapluat.vn](https://thuvienphapluat.vn/phap-luat/nguyen-tac-minh-bach-khi-trien-khai-he-thong-tri-tue-nhan-tao-tu-152026-chi-tiet-ra-sao-trach-nhiem-271468.html). *(Ghi chú nguồn: trang congbao.chinhphu.vn chỉ truy vấn được metadata văn bản — số hiệu, ngày ban hành, ngày hiệu lực — còn toàn văn Điều 11 được đối chiếu qua các mirror pháp lý nêu trên.)*

**Ý nghĩa cho prototype của nhóm (suy luận nghiên cứu từ quy định trên):**

1. Trợ lý học bài là "hệ thống trí tuệ nhân tạo tương tác trực tiếp với con người" ⇒ **bắt buộc** phải được thiết kế và vận hành sao cho người dùng **nhận biết mình đang nói chuyện với AI** — không được để giao diện dễ gây nhầm là giảng viên/TA thật. Cách hiện thực hóa: nhãn "Trợ lý AI" cố định trên khung chat, câu chào tự xưng là AI, không bắt chước phong cách con người đến mức gây nhầm lẫn.
2. Nghĩa vụ thuộc về **nhà cung cấp** (bên triển khai hệ thống) — trong bối cảnh lớp học, bên tích hợp trợ lý vào trang môn học là chủ thể chịu trách nhiệm bảo đảm tính năng này.
3. Hiệu lực **01/03/2026**: đây không phải yêu cầu viển vông tương lai — nếu prototype hướng tới triển khai thực tế, công khai danh tính AI là **điều kiện tuân thủ pháp lý bắt buộc** ngay từ bản đầu tiên, tương đương các yêu cầu kỹ thuật khác.
4. Điều khoản chỉ yêu cầu mức "nhận biết khi tương tác" (disclosure) — đây là **mức sàn**; các thiết kế nâng cao hơn (hiển thị confidence theo PAIR, G2/G11 của HAX) là tự nguyện nhưng nên xem là thực hành tốt ngay từ đầu.

---

## Nguồn tham khảo (tổng hợp)

**Đã dùng (kept):**
1. [Using study mode in ChatGPT — OpenAI Help Center](https://help.openai.com/en/articles/11780217-using-study-mode-in-chatgpt) — tài liệu chính thức về study mode (truy cập trực tiếp bị chặn 403; nội dung xác minh qua trích dẫn trực tiếp từ công cụ tìm kiếm trong phiên nghiên cứu này).
2. [Introducing study mode in ChatGPT — OpenAI](https://openai.com/index/chatgpt-study-mode/) — bài công bố chính thức, 29/7/2025 (cùng lưu ý truy cập như trên).
3. [Amershi et al., *Guidelines for Human-AI Interaction*, CHI 2019 — PDF chính thức Microsoft Research](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/01/Guidelines-for-Human-AI-Interaction-camera-ready.pdf) — nguồn nguyên văn G1–G18 + ví dụ ứng dụng (đã tải, đọc toàn văn).
4. [HAX Toolkit — ai-guidelines & các trang guideline/pattern](https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/) — phiên bản web hiện tại của bộ hướng dẫn (URL `/hax-guidelines/` đã 404).
5. [PAIR Guidebook — Errors + Graceful Failure (PDF toàn văn)](https://pair.withgoogle.com/chapter/People%20+%20AI%20Guidebook%20-%20Errors%20+%20Graceful%20Failure.pdf) — chương chính thức về lỗi & thất bại duyên dáng.
6. [PAIR Guidebook — Explainability + Trust (PDF toàn văn)](https://pair.withgoogle.com/chapter/People%20+%20AI%20Guidebook%20-%20Explainability%20+%20Trust.pdf) — chương chính thức về giải thích & niềm tin.
7. [Công báo điện tử Chính phủ — Luật số 134/2025/QH15](https://congbao.chinhphu.vn/van-ban/luat-so-134-2025-qh15-468694.htm) — nguồn chính thức cho số hiệu, ngày ban hành (10/12/2025), ngày hiệu lực (01/03/2026).
8. [Luật TTNT 134/2025/QH15 — luatvietnam.vn](https://luatvietnam.vn/khoa-hoc/luat-tri-tue-nhan-tao-2025-so-134-2025-qh15-422299-d1.html) + [luatnguyen.vn](https://luatnguyen.vn/van-ban-phap-luat/luat-tri-tue-nhan-tao-so-134-2025-qh15-3751.html) — mirror toàn văn Luật TTNT (dùng cho nguyên văn Điều 11 khoản 1).
9. [Báo Chính phủ — "Việt Nam chính thức có Luật Trí tuệ nhân tạo"](https://baochinhphu.vn/viet-nam-chinh-thuc-co-luat-tri-tue-nhan-tao-ai-102251210164948585.htm) + [Bộ KH&CN (mst.gov.vn)](https://mst.gov.vn/quoc-hoi-thong-qua-luat-tri-tue-nhan-tao-hoan-thien-hanh-lang-phap-ly-cho-ky-nguyen-so-197251210165544671.htm) — xác nhận thông qua ngày 10/12/2025, Kỳ họp thứ 10.
10. Nguồn phụ xác nhận study mode: [CNBC 29/7/2025](https://www.cnbc.com/2025/07/29/openai-announces-new-study-mode-product-for-students-.html), [NBC News](https://www.nbcnews.com/tech/tech-news/openai-announces-new-study-mode-product-students-rcna221808), [TechCrunch](https://techcrunch.com/2025/07/29/openai-launches-study-mode-in-chatgpt/), [The Rundown](https://www.therundown.ai/tools/study-mode), [The AI Rankings](https://theairankings.com/guides/chatgpt-study-mode/).

**Loại bỏ / hạ ưu tiên (rejected):**
- [FindSkill.ai — "Where Did ChatGPT's Study Mode Go?"](https://findskill.ai/blog/chatgpt-study-mode-back-to-school-2026/) — blog SEO, nội dung gây nhiễu về "study mode biến mất 4/2026", không dùng làm bằng chứng.
- [Medium/Bootcamp — "Future of Studying"](https://medium.com/design-bootcamp/study-mode-how-chatgpt-is-rethinking-the-way-we-learn-f6b14f98ba3b) — bài viết cá nhân, trùng lặp thông tin công bố chính thức.
- [TTMS](https://ttms.com/chatgpts-new-study-mode-revolutionizing-learning-for-individuals-and-businesses/) — content marketing, không có thông tin sơ cấp.

**Bằng chứng còn thiếu / cần lưu ý (missing evidence):**
- Không truy cập được trực tiếp help.openai.com và openai.com (HTTP 403); mọi trích dẫn từ hai nguồn này đều qua snippet công cụ tìm kiếm — nếu cần trích nguyên đoạn dài hơn cho báo cáo, nên mở lại bằng trình duyệt thường.
- "Study mode không có human escalation" là kết luận **vắng mặt bằng chứng** từ tài liệu chính thức hiện có — không loại trừ khả năng OpenAI có quy trình nội bộ không công khai, nhưng không có gì cho người dùng cuối tương tác được.
- Ngày kiểm tra chính xác từng nguồn không xác định được từ môi trường truy vấn (không có đồng hồ hệ thống tin cậy); trạng thái hiện hành được xác nhận qua nguồn phụ cập nhật năm 2026.
