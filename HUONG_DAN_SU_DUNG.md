# HƯỚNG DẪN QUẢN TRỊ & SỬ DỤNG TRANG WEB CÁ NHÂN
## Dành riêng cho: ThS. Lương Thanh Sáng - Thạc sĩ Toán ứng dụng, Tổ trưởng chuyên môn Tổ Toán học, THPT Nguyễn Văn Thoại (xã Thoại Sơn, tỉnh An Giang)

Xin chào Thầy Sáng! Trang web cá nhân của Thầy đã được thiết kế hoàn thiện, chuẩn phong cách sư phạm với gam màu xanh dương hiện đại, tương thích hoàn hảo trên cả máy tính, máy tính bảng và điện thoại di động.

Dưới đây là cẩm nang chi tiết giúp Thầy dễ dàng làm chủ, thay link tài liệu thực tế, thêm câu hỏi trắc nghiệm và đưa trang web lên mạng Internet hoàn toàn miễn phí.

---

## 1. Cấu Trúc Thư Mục & File Mã Nguồn

```
Wed_ThS. Lương Thanh Sáng/
│
├── index.html              <-- Trang web chính (chứa Trang chủ, Thông báo, Form liên hệ, Footer)
├── HUONG_DAN_SU_DUNG.md    <-- Tài liệu hướng dẫn này
│
├── css/
│   └── styles.css          <-- Bộ giao diện thiết kế chuẩn sư phạm, màu xanh dương trang nhã
│
└── js/
    ├── document-data.js    <-- NƠI THẦY THÊM / SỬA TÀI LIỆU (Khối 10, 11, 12, Google Drive)
    ├── quiz-data.js        <-- NƠI THẦY THÊM / SỬA ĐỀ THI TRẮC NGHIỆM & CÔNG THỨC TOÁN
    └── script.js           <-- Xử lý đồng hồ đếm ngược, chấm điểm, lọc tài liệu, modal xem PDF
```

---

## 2. Cách Xem Thử Trang Web Ngay Trên Máy Tính

- **Cách đơn giản nhất**: Thầy chỉ cần **nhấp đúp chuột vào file `index.html`**, trang web sẽ lập tức mở lên trên trình duyệt Google Chrome / Cốc Cốc / Edge của Thầy.
- Không cần cài đặt bất kỳ phần mềm máy chủ phức tạp nào!

---

## 3. Cách Thay Link Tài Liệu Của Thầy (Google Drive)

Mọi danh sách tài liệu nằm trong file: **`js/document-data.js`**. Thầy mở file này bằng Notepad, VS Code hoặc bất kỳ trình soạn thảo nào.

### Bước 1: Tải tài liệu (PDF hoặc Word) lên Google Drive của Thầy
1. Thầy tải file đề cương, bài giảng lên Google Drive của Thầy.
2. Nhấp chuột phải vào file $\rightarrow$ Chọn **Chia sẻ (Share)** $\rightarrow$ Đổi quyền thành **"Bất kỳ ai có đường liên kết đều có thể xem" (Anyone with the link can view)**.
3. Bấm **Sao chép đường liên kết**. Link có dạng:
   `https://drive.google.com/file/d/1A2B3C4D5E6F7G8H9/view?usp=sharing`
   *(Trong đó `1A2B3C4D5E6F7G8H9` là mã ID của file).*

### Bước 2: Điền link vào file `js/document-data.js`
Trong file `js/document-data.js`, mỗi tài liệu có dạng:

```javascript
{
  id: "doc-12-01",
  grade: "12",                     // 10, 11, 12 hoặc all (dành cho toàn trường)
  category: "giaitich",            // daiso, giaitich, hinhhoc, dekiemtra, hoặc hsg (Thi học sinh giỏi)
  title: "Tên tài liệu của Thầy Sáng ở đây",
  description: "Mô tả ngắn gọn nội dung để học sinh dễ nắm bắt",
  pages: 35,                       // Số trang
  size: "2.4 MB",                  // Dung lượng file
  type: "pdf",                     // pdf hoặc word
  date: "10/11/2026",              // Ngày đăng
  
  // Link xem trước trực tiếp trên trang web (Thầy đổi mã ID của file vào):
  previewUrl: "https://drive.google.com/file/d/MÃ_ID_CỦA_THẦY/preview",
  
  // Link để học sinh tải về máy:
  downloadUrl: "https://drive.google.com/file/d/MÃ_ID_CỦA_THẦY/view?usp=sharing",
  
  tag: "Trọng tâm thi THPT"        // Có thể ghi: "Đội tuyển HSG", "Chương trình mới", v.v.
}
```

*Khi học sinh bấm **"Xem trực tiếp"**, một cửa sổ xem tài liệu sẽ hiện ra ngay giữa trang web mà không bị chuyển trang. Học sinh cũng có nút **"Mở tab mới"** và **"Tải về máy"** ngay trong khung xem.*

---

## 4. Hệ Thống Thi Trắc Nghiệm Online & Đề Kiểm Tra Giữa Kì I
Mọi câu hỏi, đề thi và hình vẽ TikZ/SVG sắc nét nằm trong file: **`js/quiz-data.js`**.

Hiện tại hệ thống đã được tích hợp trọn vẹn **Toàn bộ Đề Kiểm Tra Giữa Kì I Năm học 2026 - 2027 (Mã đề: 0002 - Môn Toán 12)** của trường THPT Nguyễn Văn Thoại do Thầy Sáng biên soạn:
- **Phần I: 12 câu trắc nghiệm nhiều phương án lựa chọn (A, B, C, D)** - Thang điểm 3.0đ.
- **Phần II: 4 câu trắc nghiệm Đúng / Sai** (mỗi câu 4 ý a, b, c, d) - Thang điểm 4.0đ.
- **Phần III: 6 câu trắc nghiệm Trả lời ngắn** (điền số thập phân) - Thang điểm 3.0đ.
- **Tổng cộng cả đề: 22 câu (90 phút)** - Chấm điểm tự động theo đúng barem của Bộ GD&ĐT!
- Đầy đủ 10 hình vẽ đồ thị và bảng biến thiên dạng vector SVG sắc nét tuyệt đối, chuẩn phong cách TikZ sư phạm.

Học sinh có thể chọn làm riêng từng phần (Phần I, Phần II, Phần III) hoặc làm cả đề thi 90 phút. Sau khi nộp bài, hệ thống hiển thị điểm số và nút **"Xem đáp án & Lời giải chi tiết"** với công thức MathJax chuẩn từng bước.

### Hỗ trợ công thức Toán học chuẩn LaTeX (MathJax)
Hệ thống sử dụng MathJax 3 để hiển thị công thức đẹp như trong sách giáo khoa:
- Công thức viết cùng dòng: đặt trong dấu `$ ... $`. Ví dụ: `$\\sqrt{x^2 + 1}$`, `$\\frac{a}{b}$`.
- Khối công thức nổi bật giữa trang: đặt trong dấu `$$ ... $$`.

*(Lưu ý: Trong chuỗi văn bản JavaScript, các dấu gạch chéo ngược `\` của LaTeX Thầy chỉ cần gõ gấp đôi `\\`, ví dụ: `\\frac`, `\\sqrt`, `\\int`).*

### Mẫu 1 câu hỏi hoàn chỉnh để Thầy copy thêm:

```javascript
{
  id: 6,
  grade: "12",
  topic: "Giải tích 12 - Nguyên hàm",
  question: "Tìm nguyên hàm của hàm số $f(x) = 3x^2 + 2x$:\n$$F(x) = \\int f(x)\\,\\mathrm{d}x$$",
  options: [
    { id: "A", text: "$F(x) = x^3 + x^2 + C$" },
    { id: "B", text: "$F(x) = 6x + 2 + C$" },
    { id: "C", text: "$F(x) = x^3 + 2x^2 + C$" },
    { id: "D", text: "$F(x) = 3x^3 + x^2 + C$" }
  ],
  correctAnswer: "A", // Đáp án đúng là A, B, C hoặc D
  explanation: `
<div class="solution-step">
  <strong>Lời giải từ Thầy Sáng:</strong>
  <p>Áp dụng công thức nguyên hàm cơ bản: $\\int x^n \\mathrm{d}x = \\frac{x^{n+1}}{n+1} + C$.</p>
  <p>Ta có: $\\int (3x^2 + 2x)\\,\\mathrm{d}x = 3 \\cdot \\frac{x^3}{3} + 2 \\cdot \\frac{x^2}{2} + C = x^3 + x^2 + C$.</p>
  <p class="final-answer">$\\Rightarrow$ Chọn đáp án A.</p>
</div>
`
}
```

### Đổi thời gian làm bài:
Ở đầu file `js/quiz-data.js`, Thầy có thể chỉnh số phút làm bài:
```javascript
const QUIZ_CONFIG = {
  title: "Đề Ôn Tập Khảo Sát Kiến Thức Toán THPT - Đề Số 01",
  timeLimitMinutes: 15, // Đổi thành 30, 45, 90 phút tùy ý Thầy
  ...
};
```

---

## 5. Cập Nhật Bảng Thông Báo Mới Nhất

Trong file `index.html`, tại phần `<section class="section section-subtle" id="notices">`, Thầy có thể sửa ngày tháng, tiêu đề và nội dung thông báo (Lịch thi giữa kỳ, học thêm, sinh hoạt CLB Toán...) rất trực quan.

---

## 6. Hướng Dẫn Đưa Trang Web Lên Mạng Hoàn Toàn Miễn Phí

Để học sinh của Thầy tại THPT Nguyễn Văn Thoại có thể truy cập qua điện thoại và máy tính ở nhà, Thầy có thể dùng 1 trong 2 dịch vụ miễn phí 100% tốt nhất hiện nay:

### Cách 1: Sử dụng Vercel hoặc Netlify (Cực kỳ dễ, chỉ kéo thả chuột)
1. Thầy vào trang web [https://app.netlify.com/drop](https://app.netlify.com/drop) (hoặc Vercel).
2. Kéo toàn bộ thư mục `Wed_ThS. Lương Thanh Sáng` thả vào ô upload trên màn hình.
3. Sau 5 giây, trang web sẽ có một đường link trực tuyến miễn phí (Ví dụ: `thayluongthanhsang.netlify.app`). Thầy có thể gửi link này vào nhóm Zalo lớp để học sinh vào học ngay!

### Cách 2: Sử dụng GitHub Pages
1. Tạo một tài khoản trên [GitHub.com](https://github.com).
2. Tạo một Repository mới đặt tên là `toan-thpt-nguyenvanthoai` (hoặc tên tùy thích).
3. Tải các file trong thư mục lên.
4. Vào phần **Settings** $\rightarrow$ **Pages** $\rightarrow$ Chọn nguồn từ nhánh `main`.
5. Thầy sẽ có ngay địa chỉ web chuyên nghiệp dạng: `https://ten-cua-thay.github.io/toan-thpt-nguyenvanthoai/`.

---

## 7. Các Tính Năng Nổi Bật Đã Tích Hợp

1. **Khối lớp & Phân môn**: Lọc tức thì Khối 10, Khối 11, Khối 12 và tìm kiếm tài liệu theo từ khóa.
2. **Xem trực tiếp PDF (Modal Previewer)**: Không cần mở tab mới làm gián đoạn việc học của học sinh.
3. **Phòng thi trắc nghiệm**:
   - Đồng hồ đếm ngược thông minh (nhấp nháy đỏ khi còn dưới 2 phút).
   - Tự động nộp bài khi hết giờ.
   - Chấm điểm ngay lập tức, hiển thị số câu đúng/sai và lời khuyên sư phạm theo mức điểm.
   - Nút **Xem đáp án chi tiết** mở ra lời giải từng bước với công thức Toán sắc nét.
4. **Form gửi câu hỏi thắc mắc**: Lưu trữ vào bộ nhớ trình duyệt, có phản hồi thân thiện để học sinh an tâm.
5. **Giao diện chuẩn Responsive**: Tự động co giãn đẹp mắt trên iPhone, Android, iPad, Laptop.

*Kính chúc ThS. Lương Thanh Sáng có thêm một kênh dạy học trực tuyến đắc lực, lan tỏa tình yêu Toán học đến thật nhiều thế hệ học sinh trường THPT Nguyễn Văn Thoại!*

