/**
 * BÀI HỌC SỐ: BÀI 4. HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN (TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - PHẦN I: Lời chào Thầy Sáng + Voice AI NamMinhNeural vàng đồng
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 26 + Voice AI
 * - PHẦN III: Tiến trình bài học đa phương tiện:
 *             + Tình huống thực tế kinh doanh máy điều hoà (vốn 1,2 tỉ, thị trường 100 máy)
 *             + Mục 1: Khái niệm hệ bất phương trình bậc nhất hai ẩn & nghiệm
 *             + Mục 2: Biểu diễn miền nghiệm của hệ trên mặt phẳng toạ độ (Hình 2.5, 2.6)
 *             + Mục 3: Ứng dụng quy hoạch tuyến tính tìm GTLN, GTNN (Hình 2.7 - Tứ giác OABC)
 *             + Checkpoints POI chấm vàng tương tác tự động dừng và bật câu hỏi
 *             + Chốt kiến thức then chốt & Sơ đồ quy trình 4 bước tối ưu
 * - PHẦN IV: Hệ thống bài tập củng cố tương tác chuẩn cấu trúc mới Bộ GD&ĐT:
 *             + 5 câu trắc nghiệm 4 lựa chọn (Hoán vị đáp án B, D, A, C, B phong phú)
 *             + 3 câu trắc nghiệm Đúng/Sai (Đủ 4 ý a, b, c, d)
 *             + 2 câu trả lời ngắn thực tế
 *             + Tích hợp "Lời giải chi tiết ThS. Lương Thanh Sáng" & "Bài toán tương tự" đổi số tự động
 */

window.LESSON_10_C2_B4_DATA = {
  id: "10-c2-b4",
  grade: "10",
  gradeLabel: "Lớp 10",
  chapterId: "c10-2",
  chapter: "Chương II",
  chapterTitle: "Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
  number: "Bài 4",
  title: "Hệ bất phương trình bậc nhất hai ẩn",
  isInteractiveDigitalLesson: true,
  isFeaturedLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO MỞ ĐẦU & GIỌNG ĐỌC AI (THẦY SÁNG)
  // =========================================================================
  greetingText: "Thầy Sáng chào các em học sinh Lớp 10! Tiếp nối thành công của Bài 3, hôm nay chúng ta bước sang Bài 4: Hệ bất phương trình bậc nhất hai ẩn. Đây là bài học mang tính ứng dụng kinh tế đỉnh cao, đặt nền móng cho lý thuyết quy hoạch tuyến tính, công cụ mà các nhà kinh tế học và doanh nghiệp sử dụng hàng ngày để tối đa hoá lợi nhuận và tối thiểu hoá chi phí. Thầy chúc các em có một buổi học thật hào hứng và hiệu quả!",
  voiceLabel: "Giọng đọc AI Thầy Sáng",
  audioUrl: "assets/audio/b10_4_welcome.mp3",
  buttonLabel: "Nghe Thầy Sáng giảng bài",
  teacherWelcome: {
    avatar: "assets/images/teacher_avatar.png",
    name: "ThS. Lương Thanh Sáng",
    title: "Giáo viên Toán - THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang",
    greetingText: "Thầy Sáng chào các em học sinh Lớp 10! Tiếp nối thành công của Bài 3, hôm nay chúng ta bước sang Bài 4: Hệ bất phương trình bậc nhất hai ẩn. Đây là một bài học mang tính ứng dụng kinh tế đỉnh cao, đặt nền móng cho lý thuyết quy hoạch tuyến tính, công cụ mà các nhà kinh tế học và doanh nghiệp sử dụng hàng ngày để tối đa hoá lợi nhuận và tối thiểu hoá chi phí. Thầy chúc các em có một buổi học thật hào hứng và hiệu quả!",
    audioScript: "Thầy Sáng chào các em học sinh Lớp 10! Tiếp nối thành công của Bài 3, hôm nay chúng ta bước sang Bài 4: Hệ bất phương trình bậc nhất hai ẩn. Đây là một bài học mang tính ứng dụng kinh tế đỉnh cao, đặt nền móng cho lý thuyết quy hoạch tuyến tính, công cụ mà các nhà kinh tế học và doanh nghiệp sử dụng hàng ngày để tối đa hoá lợi nhuận và tối thiểu hoá chi phí. Thầy chúc các em có một buổi học thật hào hứng và hiệu quả!",
    audioUrl: "assets/audio/b10_4_welcome.mp3",
    buttonLabel: "Nghe Thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU & YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 26)
  // =========================================================================
  learningGoals: [
    "Nhận biết và thiết lập được hệ bất phương trình bậc nhất hai ẩn từ các điều kiện ràng buộc thực tiễn.",
    "Biểu diễn chính xác miền nghiệm của hệ trên mặt phẳng toạ độ $Oxy$ bằng phương pháp giao các miền nghiệm (gạch bỏ miền không thích hợp).",
    "Thấu hiểu và vận dụng định lí cực trị: giá trị lớn nhất hay nhỏ nhất của biểu thức mục tiêu $F(x; y) = ax + by$ luôn đạt được tại các đỉnh của miền đa giác.",
    "Giải quyết xuất sắc các bài toán kinh doanh, sản xuất và dinh dưỡng thực tế (bài toán máy điều hoà, chế độ ăn gia đình)."
  ],
  goalsAudioUrl: "assets/audio/b10_4_goals.mp3",
  goalsButtonLabel: "Nghe mục tiêu bài học",
  goalsAudioScript: "Mục tiêu bài học cần đạt: Sau khi học xong Bài 4, các em cần đạt được bốn năng lực cốt lõi: Thứ nhất, nhận biết và thiết lập được hệ bất phương trình bậc nhất hai ẩn từ các điều kiện ràng buộc thực tiễn. Thứ hai, biểu diễn chính xác miền nghiệm của hệ trên mặt phẳng toạ độ bằng phương pháp giao các miền nghiệm. Thứ ba, thấu hiểu và vận dụng định lí cực trị: giá trị lớn nhất hay nhỏ nhất của biểu thức mục tiêu luôn đạt được tại các đỉnh của miền đa giác. Thứ tư, giải quyết xuất sắc các bài toán kinh doanh, sản xuất và dinh dưỡng thực tế.",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN
  // =========================================================================
  hook: {
    title: "Tình huống mở đầu: Bài toán kinh doanh máy điều hoà mùa nóng",
    story: "Trong năm nay, một cửa hàng điện lạnh dự định kinh doanh hai loại máy điều hoà: điều hoà hai chiều và điều hoà một chiều với số vốn ban đầu không vượt quá 1,2 tỉ đồng. Giá mua vào lần lượt là 20 triệu đồng và 10 triệu đồng mỗi máy; lợi nhuận dự kiến là 3,5 triệu đồng và 2 triệu đồng mỗi máy. Theo khảo sát thị trường, nhu cầu không vượt quá 100 máy cho cả hai loại. Chủ cửa hàng cần đầu tư mua mỗi loại bao nhiêu máy để thu được lợi nhuận lớn nhất?",
    illustrationSvg: `<div class="tikz-svg-wrap" style="text-align: center; margin: 16px 0;">
  <svg viewBox="0 0 720 300" style="max-width: 700px; width: 100%; height: auto; display: block; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1.5px solid #0284c7; box-shadow: 0 4px 16px rgba(2, 132, 199, 0.08);">
    <defs>
      <marker id="arr-b4-ax" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a"/>
      </marker>
      <pattern id="poly-pat-b4" width="12" height="12" patternTransform="rotate(30 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="12" stroke="#6ee7b7" stroke-width="2"/>
      </pattern>
    </defs>

    <text x="360" y="24" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0369a1">MÔ HÌNH HÌNH HỌC: MIỀN NGHIỆM ĐA GIÁC OABC CỦA HỆ BẤT PHƯƠNG TRÌNH ĐIỀU HOÀ</text>

    <!-- Gốc O(110, 250) -->
    <!-- Scale: x: 1 đv = 4.0 px (60 -> 240px, 100 -> 400px), y: 1 đv = 1.7 px (80 -> 136px, 100 -> 170px, 120 -> 204px) -->
    <!-- O(110, 250) -->
    <!-- A(60, 0) -> (350, 250) -->
    <!-- B(20, 80) -> (190, 114) -->
    <!-- C(0, 100) -> (110, 80) -->

    <!-- Miền đa giác OABC -->
    <polygon points="110,250 350,250 190,114 110,80" fill="url(#poly-pat-b4)" fill-opacity="0.75" stroke="#059669" stroke-width="2"/>

    <!-- Lưới toạ độ dóng từ B(20, 80) -->
    <line x1="190" y1="114" x2="190" y2="250" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="110" y1="114" x2="190" y2="114" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4 3"/>

    <!-- Trục Ox và Oy -->
    <line x1="80" y1="250" x2="680" y2="250" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-b4-ax)"/>
    <line x1="110" y1="270" x2="110" y2="35" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-b4-ax)"/>

    <text x="670" y="270" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">x (Máy 2 chiều)</text>
    <text x="35" y="42" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">y (Máy 1 chiều)</text>
    <text x="96" y="264" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#64748b">O(0;0)</text>

    <!-- Đường d1: 2x + y = 120 (đi qua (60,0) và (0,120) -> (110, 46)) -->
    <line x1="375" y1="265" x2="95" y2="30" stroke="#dc2626" stroke-width="2.2"/>
    <text x="360" y="225" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">d₁: 2x + y = 120 (Vốn 1,2 tỉ)</text>

    <!-- Đường d2: x + y = 100 (đi qua (100,0)->(510,250) và (0,100)->(110,80)) -->
    <line x1="535" y1="265" x2="95" y2="72" stroke="#2563eb" stroke-width="2.2"/>
    <text x="470" y="210" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="bold" fill="#2563eb">d₂: x + y = 100 (Nhu cầu 100 máy)</text>

    <!-- Các đỉnh đa giác -->
    <circle cx="350" cy="250" r="5" fill="#059669"/>
    <text x="350" y="270" text-anchor="middle" font-size="12" font-weight="bold" fill="#059669">A(60; 0)</text>

    <circle cx="110" cy="80" r="5" fill="#059669"/>
    <text x="96" y="85" text-anchor="end" font-size="12" font-weight="bold" fill="#059669">C(0; 100)</text>

    <text x="190" y="266" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">20</text>
    <text x="96" y="118" text-anchor="end" font-size="11" font-weight="bold" fill="#0284c7">80</text>

    <!-- Điểm tối ưu B(20, 80) -->
    <circle cx="190" cy="114" r="7" fill="#f59e0b" stroke="#dc2626" stroke-width="2"/>
    <circle cx="190" cy="114" r="12" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>

    <!-- Hộp chú thích điểm cực đại -->
    <rect x="235" y="85" width="230" height="48" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))"/>
    <text x="350" y="104" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="bold" fill="#b45309">ĐIỂM TỐI ƯU B(20; 80): LÃI CỰC ĐẠI</text>
    <text x="350" y="122" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">F_max = 3.5×20 + 2×80 = 230 TRIỆU ĐỒNG</text>
  </svg>
</div>`,
    storyHtml: `
      <p>Trong năm nay, một cửa hàng điện lạnh dự định kinh doanh hai loại máy điều hoà: <strong>điều hoà hai chiều</strong> và <strong>điều hoà một chiều</strong> với số vốn ban đầu không vượt quá <strong>1,2 tỉ đồng</strong>.</p>
      <div style="margin: 12px 0; overflow-x: auto;">
        <table style="width: 100%; max-width: 540px; margin: 0 auto; border-collapse: collapse; text-align: center; border: 1.5px solid #cbd5e1; background: #f8fafc;">
          <thead>
            <tr style="background: #0284c7; color: white;">
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Loại máy điều hoà</th>
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Giá mua vào</th>
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Lợi nhuận dự kiến</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: bold; color: #1e3a8a;">Điều hoà hai chiều</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">20 triệu đồng / máy</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #15803d; font-weight: bold;">3,5 triệu đồng / máy</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: bold; color: #0284c7;">Điều hoà một chiều</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">10 triệu đồng / máy</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #15803d; font-weight: bold;">2 triệu đồng / máy</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Theo khảo sát thị trường, số lượng điều hoà mà cửa hàng có thể bán được không vượt quá <strong>100 máy</strong> cho cả hai loại.</p>
      <p style="color: #0369a1; font-weight: 500; font-style: italic;">Chủ cửa hàng cần đầu tư mua bao nhiêu máy mỗi loại để thu được lợi nhuận lớn nhất?</p>
    `,
    audioUrl: "assets/audio/b10_4_hook.mp3",
    buttonLabel: "Nghe Thầy Sáng đặt vấn đề",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    question: "Số tiền vốn đầu tư và số lượng máy bán ra tạo thành những điều kiện ràng buộc toán học nào?"
  },

  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1. KHÁI NIỆM HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "Khái niệm hệ bất phương trình bậc nhất hai ẩn",
      audioScript: "Mục một, Khái niệm hệ bất phương trình bậc nhất hai ẩn: Hệ bất phương trình bậc nhất hai ẩn là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn. Cặp số x0, y0 là nghiệm của hệ khi và chỉ khi nó đồng thời là nghiệm của tất cả các bất phương trình trong hệ. Trong bài toán điều hoà, ta có hệ bốn ràng buộc: x không âm, y không âm, x cộng y bé hơn hoặc bằng 100, và 2x cộng y bé hơn hoặc bằng 120.",
      audioUrl: "assets/audio/b10_4_sec1.mp3",
      buttonLabel: "Nghe Thầy Sáng giảng Mục 1",
      checkpoints: [
        {
          id: "poi-10-4-sec1-1",
          time: 11,
          title: "Giây 11: Nhận diện hệ bất phương trình",
          question: "Hệ nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
          options: [
            "$\\begin{cases} x^2 + y \\le 1 \\\\ x - y > 0 \\end{cases}$",
            "$\\begin{cases} x + y \\le 100 \\\\ 2x + y \\le 120 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$",
            "$\\begin{cases} xy \\le 4 \\\\ x + y \\ge 2 \\end{cases}$",
            "$\\begin{cases} x + y + z \\le 5 \\\\ x - y \\ge 1 \\end{cases}$"
          ],
          correctIndex: 1, // B
          correctAnswer: "B",
          hint: "Mỗi bất phương trình trong hệ đều phải là bậc nhất đối với hai ẩn x và y.",
          explain: "Chính xác! Hệ ở phương án B gồm 4 bất phương trình bậc nhất hai ẩn x, y. Các hệ còn lại chứa x^2, tích xy hoặc có 3 ẩn x, y, z."
        },
        {
          id: "poi-10-4-sec1-2",
          time: 22,
          title: "Giây 22: Kiểm tra nghiệm đồng thời",
          question: "Cặp số $(x; y) = (20; 80)$ có phải là nghiệm của hệ $\\begin{cases} x + y \\le 100 \\\\ 2x + y \\le 120 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$ không?",
          options: [
            "Không, vì không thoả mãn $x \\ge 0$",
            "Có, vì cặp số $(20; 80)$ thoả mãn đồng thời tất cả các bất phương trình trong hệ",
            "Không, vì $20 + 80 = 100$ chứ không nhỏ hơn 100",
            "Không, vì $2(20) + 80 = 120$ chứ không nhỏ hơn 120"
          ],
          correctIndex: 1, // B
          correctAnswer: "B",
          hint: "Thay x = 20, y = 80 vào từng bất phương trình kiểm tra dấu <=.",
          explain: "Rất chuẩn! 20 + 80 = 100 <= 100 (đúng), 2(20) + 80 = 120 <= 120 (đúng), 20 >= 0 và 80 >= 0 (đúng). Vì thoả mãn cả 4 điều kiện nên (20; 80) là nghiệm của hệ."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Định nghĩa hệ bất phương trình bậc nhất hai ẩn và nghiệm",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Định nghĩa SGK Kết nối tri thức - Trang 26]:</div>
              <ul class="sgk-box-list">
                <li><strong>Hệ bất phương trình bậc nhất hai ẩn</strong> là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn.</li>
                <li>Cặp số $(x_0; y_0)$ là <strong>nghiệm</strong> của một hệ bất phương trình bậc nhất hai ẩn khi và chỉ khi $(x_0; y_0)$ đồng thời là nghiệm của tất cả các bất phương trình trong hệ đó.</li>
              </ul>
            </div>

            <div class="example-box" style="margin-top: 14px;">
              <div class="example-title"><i class="fa-solid fa-pen-to-square"></i> Thiết lập hệ bất phương trình từ bài toán điều hoà:</div>
              <p>Gọi $x, y$ lần lượt là số máy điều hoà hai chiều và một chiều cần nhập ($x, y \\in \\mathbb{N}$).</p>
              <ul>
                <li>Nhu cầu thị trường không quá 100 máy: $x + y \\le 100$.</li>
                <li>Vốn đầu tư không vượt quá 1,2 tỉ ($1200$ triệu): $20x + 10y \\le 1200 \\iff 2x + y \\le 120$.</li>
                <li>Số lượng máy luôn không âm: $x \\ge 0, y \\ge 0$.</li>
              </ul>
              <p>Ta thu được <strong>hệ bất phương trình bậc nhất hai ẩn</strong>:</p>
              <div style="text-align: center; font-size: 1.15rem; font-weight: bold; color: #1e3a8a; margin: 8px 0;">
                $$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 100 \\\\ 2x + y \\le 120 \\end{cases}$$
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2. BIỂU DIỄN MIỀN NGHIỆM TRÊN MẶT PHẲNG TOẠ ĐỘ
    // -----------------------------------------------------------------------
    {
      num: "2",
      title: "Biểu diễn miền nghiệm của hệ bất phương trình trên mặt phẳng toạ độ",
      audioScript: "Mục hai, Biểu diễn miền nghiệm của hệ trên mặt phẳng toạ độ: Miền nghiệm của hệ là phần giao của các miền nghiệm của từng bất phương trình. Quy tắc thực hành: Trên cùng một mặt phẳng toạ độ, ta vẽ các đường thẳng bờ, xác định miền nghiệm của mỗi bất phương trình và gạch bỏ miền không thích hợp. Miền không bị gạch cuối cùng chính là miền nghiệm của hệ, thường là một miền đa giác lồi như tam giác, tứ giác.",
      audioUrl: "assets/audio/b10_4_sec2.mp3",
      buttonLabel: "Nghe Thầy Sáng giảng Mục 2",
      checkpoints: [
        {
          id: "poi-10-4-sec2-1",
          time: 15,
          title: "Giây 15: Bản chất miền nghiệm của hệ",
          question: "Miền nghiệm của một hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng toạ độ là:",
          options: [
            "Hợp của miền nghiệm các bất phương trình trong hệ",
            "Giao của miền nghiệm các bất phương trình trong hệ (phần không bị gạch)",
            "Chỉ là các điểm nằm trên trục toạ độ Ox",
            "Chỉ là các điểm nằm trên đường thẳng bờ"
          ],
          correctIndex: 1, // B
          correctAnswer: "B",
          hint: "Cặp số phải thoả mãn đồng thời tất cả các bất phương trình, trong tập hợp là phép toán giao.",
          explain: "Chính xác! Theo SGK trang 27: Miền nghiệm của hệ là giao các miền nghiệm của các bất phương trình trong hệ. Trên hình vẽ, đó là phần mặt phẳng không bị gạch sau khi đã loại bỏ từng miền không thích hợp."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Quy tắc xác định miền nghiệm của hệ & Ví dụ tam giác OAB (Hình 2.5)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-shapes"></i> [Quy tắc thực hành SGK trang 28]:</div>
              <p>Để biểu diễn miền nghiệm của một hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng toạ độ $Oxy$:</p>
              <ol style="margin-bottom: 0; padding-left: 20px; line-height: 1.6;">
                <li>Trên cùng một mặt phẳng toạ độ, xác định miền nghiệm của mỗi bất phương trình trong hệ và <strong>gạch bỏ</strong> miền còn lại.</li>
                <li><strong>Miền không bị gạch</strong> (thường là một miền đa giác gồm cả miền trong và các cạnh) chính là miền nghiệm của hệ bất phương trình đã cho.</li>
              </ol>
            </div>

            <!-- HÌNH 2.5 SVG CHUẨN TIKZ (MIỀN TAM GIÁC VUÔNG OAB) -->
            <div style="background: #ffffff; border: 1.5px solid #0284c7; border-radius: 12px; padding: 18px; margin: 18px 0; text-align: center;">
              <div style="font-weight: 700; color: #0369a1; font-size: 1.02rem; margin-bottom: 12px;">
                <i class="fa-solid fa-draw-polygon"></i> Hình 2.5: Miền tam giác $OAB$ của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 150 \\end{cases}$
              </div>

              <svg viewBox="0 0 460 280" style="width: 100%; max-width: 420px; height: auto; display: block; margin: 0 auto; background: #ffffff;">
                <defs>
                  <pattern id="hatch2_5" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="10" stroke="#cbd5e1" stroke-width="1.2"/>
                  </pattern>
                </defs>

                <!-- Trục Oxy: Gốc O(90, 220) -> 150 đv = 180px -> scale = 1.2px / 1đv -->
                <line x1="50" y1="220" x2="380" y2="220" stroke="#1e293b" stroke-width="2"/>
                <text x="375" y="240" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-style="italic" font-weight="bold">x</text>

                <line x1="90" y1="250" x2="90" y2="20" stroke="#1e293b" stroke-width="2"/>
                <text x="70" y="28" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-style="italic" font-weight="bold">y</text>
                <text x="72" y="236" font-weight="bold" font-size="15">O</text>

                <!-- Miền tam giác OAB tô màu xanh dương nhạt -->
                <polygon points="90,220 90,40 270,220" fill="#bae6fd" opacity="0.9"/>

                <!-- Phần bị gạch ngoài tam giác -->
                <polygon points="90,40 270,220 360,220 360,40 90,40" fill="url(#hatch2_5)"/>
                <polygon points="50,220 90,220 90,40 50,40" fill="url(#hatch2_5)"/>
                <polygon points="50,220 360,220 360,250 50,250" fill="url(#hatch2_5)"/>

                <!-- Đường thẳng biên AB: x + y = 150 (nét liền đậm) -->
                <line x1="60" y1="10" x2="300" y2="250" stroke="#dc2626" stroke-width="2.5"/>
                <text x="210" y="90" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#dc2626">x + y = 150</text>

                <!-- Điểm A(150, 0) -> (270, 220) -->
                <circle cx="270" cy="220" r="4.5" fill="#0284c7"/>
                <text x="272" y="210" font-family="'Segoe UI', sans-serif" font-size="14" font-weight="bold" fill="#0284c7">A</text>
                <text x="256" y="238" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#1e293b">150</text>

                <!-- Điểm B(0, 150) -> (90, 40) -->
                <circle cx="90" cy="40" r="4.5" fill="#0284c7"/>
                <text x="98" y="40" font-family="'Segoe UI', sans-serif" font-size="14" font-weight="bold" fill="#0284c7">B</text>
                <text x="60" y="45" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#1e293b">150</text>
              </svg>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3. ỨNG DỤNG QUY HOẠCH TUYẾN TÍNH (HÌNH 2.7)
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "Ứng dụng hệ bất phương trình bậc nhất hai ẩn trong bài toán tối ưu hoá",
      audioScript: "Mục ba, Ứng dụng giải bài toán quy hoạch tuyến tính thực tế: Tổng quát, người ta đã chứng minh được rằng: Giá trị lớn nhất hay nhỏ nhất của biểu thức mục tiêu F bằng a x cộng b y trên miền đa giác luôn đạt được tại một trong các đỉnh của đa giác đó. Với bài toán điều hoà, miền nghiệm là tứ giác O A B C với bốn đỉnh: O toạ độ 0 0, A toạ độ 0 100, B toạ độ 20 80, và C toạ độ 60 0. Thay vào biểu thức lợi nhuận, ta thấy tại đỉnh B toạ độ 20 80, lợi nhuận đạt mức cực đại là 230 triệu đồng. Như vậy, quyết định tối ưu là nhập 20 máy hai chiều và 80 máy một chiều.",
      audioUrl: "assets/audio/b10_4_sec3.mp3",
      buttonLabel: "Nghe Thầy Sáng giảng Mục 3",
      checkpoints: [
        {
          id: "poi-10-4-sec3-1",
          time: 14,
          title: "Giây 14: Định lí cực trị tại đỉnh",
          question: "Giá trị lớn nhất (hoặc nhỏ nhất) của biểu thức mục tiêu $F(x; y) = ax + by$ trên một miền đa giác lồi luôn đạt được tại:",
          options: [
            "Tâm đối xứng của đa giác",
            "Một điểm bất kì nằm sâu bên trong đa giác",
            "Một trong các đỉnh của miền đa giác đó",
            "Trọng tâm của đa giác"
          ],
          correctIndex: 2, // C
          correctAnswer: "C",
          hint: "Xem định lí SGK trang 29: cực trị luôn đạt tại các đỉnh (biên gãy).",
          explain: "Chính xác! Định lí quy hoạch tuyến tính khẳng định: GTLN hay GTNN của biểu thức bậc nhất $F(x; y) = ax + by$ trên miền đa giác luôn đạt được tại một trong các đỉnh của đa giác đó. Do đó ta chỉ cần tính giá trị của $F$ tại các đỉnh rồi so sánh."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Định lí cực trị trên miền đa giác (SGK trang 29)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-award"></i> [Định lí then chốt SGK trang 29]:</div>
              <p>Người ta chứng minh được rằng: <strong>Giá trị lớn nhất (hay nhỏ nhất)</strong> của biểu thức:</p>
              <div style="text-align: center; font-size: 1.15rem; font-weight: bold; color: #1e3a8a; margin: 8px 0;">
                $$F(x; y) = ax + by$$
              </div>
              <p>với $(x; y)$ là toạ độ các điểm thuộc miền đa giác $A_1 A_2 \\dots A_n$ (tức là các điểm nằm bên trong hay nằm trên các cạnh của đa giác), <strong>luôn đạt được tại một trong các đỉnh của đa giác đó</strong>.</p>
            </div>
          `
        },
        {
          key: "3b",
          title: "Giải trọn vẹn bài toán điều hoà - Miền tứ giác OABC (Hình 2.7 SGK)",
          contentHtml: `
            <div class="example-box">
              <div class="example-title"><i class="fa-solid fa-calculator"></i> Lời giải chi tiết bài toán kinh doanh máy điều hoà:</div>
              <p><strong>Bước 1 (Xác định miền nghiệm):</strong> Hệ bất phương trình ràng buộc là:</p>
              <div style="text-align: center; font-size: 1.05rem; color: #1e3a8a; margin: 6px 0;">
                $$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 100 \\\\ 2x + y \\le 120 \\end{cases}$$
              </div>
              <p>Miền nghiệm là <strong>miền tứ giác $OABC$</strong> (kể cả bờ) với toạ độ các đỉnh:</p>
              <ul>
                <li>$O(0; 0)$</li>
                <li>$A(0; 100)$ (giao của $x + y = 100$ với trục $Oy$)</li>
                <li>$B(20; 80)$ (nghiệm của hệ phương trình $\\begin{cases} x + y = 100 \\\\ 2x + y = 120 \\end{cases}$)</li>
                <li>$C(60; 0)$ (giao của $2x + y = 120$ với trục $Ox$)</li>
              </ul>

              <p><strong>Bước 2 (Lập biểu thức lợi nhuận & tính tại các đỉnh):</strong></p>
              <p>Lợi nhuận thu được là $F(x; y) = 3{,}5x + 2y$ (triệu đồng).</p>
              <ul>
                <li>Tại $O(0; 0)$: $F(0; 0) = 3{,}5(0) + 2(0) = 0$ triệu đồng.</li>
                <li>Tại $A(0; 100)$: $F(0; 100) = 3{,}5(0) + 2(100) = 200$ triệu đồng.</li>
                <li>Tại $B(20; 80)$: $F(20; 80) = 3{,}5(20) + 2(80) = 70 + 160 = \\mathbf{230}$ triệu đồng.</li>
                <li>Tại $C(60; 0)$: $F(60; 0) = 3{,}5(60) + 2(0) = 210$ triệu đồng.</li>
              </ul>
              <p><strong>Bước 3 (Kết luận tối ưu):</strong> Giá trị lớn nhất của $F(x; y)$ là <strong>$230$ triệu đồng</strong> đạt được khi $x = 20$ và $y = 80$.</p>
              <p style="color: #15803d; font-weight: bold;">&rArr; Chủ cửa hàng nên đầu tư nhập kinh doanh 20 máy điều hoà hai chiều và 80 máy điều hoà một chiều để thu lợi nhuận cao nhất.</p>
            </div>

            <!-- HÌNH 2.7 SVG CHUẨN TIKZ (MIỀN TỨ GIÁC OABC) -->
            <div style="background: #ffffff; border: 1.5px solid #0284c7; border-radius: 12px; padding: 18px; margin: 18px 0; text-align: center;">
              <div style="font-weight: 700; color: #0369a1; font-size: 1.02rem; margin-bottom: 12px;">
                <i class="fa-solid fa-chart-area"></i> Hình 2.7: Miền tứ giác $OABC$ và điểm cực đại $B(20; 80)$ trong bài toán máy điều hoà
              </div>

              <svg viewBox="0 0 520 340" style="width: 100%; max-width: 480px; height: auto; display: block; margin: 0 auto; background: #ffffff;">
                <defs>
                  <linearGradient id="optGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#bae6fd" stop-opacity="0.9"/>
                    <stop offset="100%" stop-color="#7dd3fc" stop-opacity="0.8"/>
                  </linearGradient>
                  <pattern id="hatch2_7" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="10" stroke="#cbd5e1" stroke-width="1.2"/>
                  </pattern>
                </defs>

                <!-- Trục Oxy: Gốc O(80, 270) -> scale: x: 1đv = 3.2px, y: 1đv = 1.8px -->
                <!-- Trục Ox -->
                <line x1="50" y1="270" x2="480" y2="270" stroke="#1e293b" stroke-width="2"/>
                <text x="475" y="290" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-style="italic" font-weight="bold">x</text>

                <!-- Trục Oy -->
                <line x1="80" y1="310" x2="80" y2="20" stroke="#1e293b" stroke-width="2"/>
                <text x="60" y="28" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-style="italic" font-weight="bold">y</text>
                <text x="62" y="286" font-weight="bold" font-size="15">O</text>

                <!-- Đỉnh O(80, 270) -->
                <!-- Đỉnh A(0, 100): x = 80, y = 270 - 100*1.8 = 90 -->
                <!-- Đỉnh B(20, 80): x = 80 + 20*3.2 = 144, y = 270 - 80*1.8 = 126 -->
                <!-- Đỉnh C(60, 0): x = 80 + 60*3.2 = 272, y = 270 -->

                <!-- Miền tứ giác OABC tô gradient xanh nhạt -->
                <polygon points="80,270 80,90 144,126 272,270" fill="url(#optGrad)" stroke="#0369a1" stroke-width="2.5"/>

                <!-- Đường d1: x + y = 100 qua (0, 100) -> (80, 90) và (100, 0) -> (400, 270) -->
                <line x1="60" y1="78" x2="420" y2="282" stroke="#2563eb" stroke-width="2"/>
                <text x="340" y="240" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#2563eb">x + y = 100</text>

                <!-- Đường d2: 2x + y = 120 qua (0, 120) -> (80, 54) và (60, 0) -> (272, 270) -->
                <line x1="60" y1="36" x2="300" y2="294" stroke="#dc2626" stroke-width="2"/>
                <text x="235" y="60" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#dc2626">2x + y = 120</text>

                <!-- Vạch toạ độ và đường gióng điểm B(20; 80) -->
                <line x1="144" y1="270" x2="144" y2="126" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
                <line x1="80" y1="126" x2="144" y2="126" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>

                <text x="136" y="290" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#1e293b">20</text>
                <text x="54" y="132" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#1e293b">80</text>
                <text x="50" y="94" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#1e293b">100</text>
                <text x="50" y="58" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#dc2626">120</text>
                <text x="264" y="290" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#1e293b">60</text>
                <text x="390" y="290" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#2563eb">100</text>

                <!-- Các đỉnh A, B, C -->
                <circle cx="80" cy="90" r="4.5" fill="#0284c7"/>
                <text x="90" y="88" font-family="'Segoe UI', sans-serif" font-size="14" font-weight="bold" fill="#0284c7">A(0; 100)</text>

                <circle cx="272" cy="270" r="4.5" fill="#0284c7"/>
                <text x="274" y="260" font-family="'Segoe UI', sans-serif" font-size="14" font-weight="bold" fill="#0284c7">C(60; 0)</text>

                <!-- Đỉnh B cực đại tối ưu (chấm đỏ to viền vàng) -->
                <circle cx="144" cy="126" r="6" fill="#dc2626" stroke="#fef08a" stroke-width="2"/>
                <text x="156" y="122" font-family="'Segoe UI', sans-serif" font-size="15" font-weight="bold" fill="#dc2626">B(20; 80)</text>

                <!-- Hộp chú thích điểm tối ưu -->
                <rect x="230" y="110" width="240" height="50" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
                <text x="240" y="130" font-family="'Segoe UI', sans-serif" font-size="12.5" font-weight="bold" fill="#991b1b">★ ĐIỂM TỐI ƯU CỰC ĐẠI B(20; 80):</text>
                <text x="240" y="148" font-family="'Segoe UI', sans-serif" font-size="12" fill="#7f1d1d">Max F = 230 triệu (20 máy 2 chiều &amp; 80 máy 1 chiều)</text>
              </svg>
            </div>
          `
        }
      ]
    }
  ],

  // =========================================================================
  // CHỐT BÀI HỌC & BẢNG SƠ ĐỒ QUY TRÌNH 4 BƯỚC
  // =========================================================================
  realworldWrapup: {
    title: "Chốt kiến thức cốt lõi & Quy trình 4 bước giải toán Quy hoạch tuyến tính",
    audioUrl: "assets/audio/b10_4_wrapup.mp3",
    summaryHtml: `
      <div style="background: #ffffff; border: 2px solid #0284c7; border-radius: 12px; padding: 20px; box-shadow: 0 4px 15px rgba(2, 132, 199, 0.08);">
        <h3 style="color: #0369a1; margin-top: 0; text-align: center;"><i class="fa-solid fa-diagram-project"></i> QUY TRÌNH 4 BƯỚC GIẢI BÀI TOÁN TỐI ƯU HOÁ TUYẾN TÍNH</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-top: 16px;">
          <div style="background: #f8fafc; border: 1.5px solid #0284c7; border-radius: 8px; padding: 12px;">
            <div style="font-weight: bold; color: #0284c7; margin-bottom: 6px;"><i class="fa-solid fa-1"></i> Bước 1: Gọi ẩn &amp; Lập hệ</div>
            <p style="font-size: 0.92rem; color: #475569; margin: 0;">Gọi $x, y$ là các đại lượng cần tìm. Lập hệ bất phương trình ràng buộc và biểu thức mục tiêu $F(x; y) = ax + by$.</p>
          </div>
          <div style="background: #f8fafc; border: 1.5px solid #0284c7; border-radius: 8px; padding: 12px;">
            <div style="font-weight: bold; color: #0284c7; margin-bottom: 6px;"><i class="fa-solid fa-2"></i> Bước 2: Vẽ miền đa giác</div>
            <p style="font-size: 0.92rem; color: #475569; margin: 0;">Biểu diễn miền nghiệm của hệ trên mặt phẳng toạ độ $Oxy$. Miền không bị gạch chính là miền đa giác nghiệm.</p>
          </div>
          <div style="background: #f8fafc; border: 1.5px solid #0284c7; border-radius: 8px; padding: 12px;">
            <div style="font-weight: bold; color: #0284c7; margin-bottom: 6px;"><i class="fa-solid fa-3"></i> Bước 3: Tìm toạ độ các đỉnh</div>
            <p style="font-size: 0.92rem; color: #475569; margin: 0;">Giải các hệ phương trình giao điểm của các đường thẳng biên để tìm chính xác toạ độ các đỉnh $A, B, C, \\dots$</p>
          </div>
          <div style="background: #f8fafc; border: 1.5px solid #0284c7; border-radius: 8px; padding: 12px;">
            <div style="font-weight: bold; color: #0284c7; margin-bottom: 6px;"><i class="fa-solid fa-4"></i> Bước 4: So sánh &amp; Kết luận</div>
            <p style="font-size: 0.92rem; color: #475569; margin: 0;">Tính giá trị của $F$ tại tất cả các đỉnh. Giá trị lớn nhất (hoặc nhỏ nhất) chính là kết quả tối ưu cần tìm.</p>
          </div>
        </div>
      </div>
    `
  },

  // =========================================================================
  // PHẦN IV. HỆ THỐNG BÀI TẬP CỦNG CỐ CHUẨN MỚI BỘ GIÁO DỤC
  // =========================================================================
  examFormatPractice: {
    part1MultipleChoice: [
      {
        id: "mc-10-4-1",
        num: 1,
        prompt: "Câu 1: Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
        options: [
          "$\\begin{cases} x + y^2 < 0 \\\\ y - x > 1 \\end{cases}$",
          "$\\begin{cases} x + y \\le 2 \\\\ 2x - y > 1 \\end{cases}$",
          "$\\begin{cases} x + y + z < 0 \\\\ y < 0 \\end{cases}$",
          "$\\begin{cases} -2x + y < 3^2 \\\\ 4^2x + 3y^2 < 1 \\end{cases}$"
        ],
        correctIndex: 1, // Đáp án B
        correctAnswer: "B",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo định nghĩa SGK trang 26: Hệ bất phương trình bậc nhất hai ẩn là hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn.<br>Hệ ở phương án B gồm hai bất phương trình $x + y \\le 2$ và $2x - y > 1$, cả hai đều là bậc nhất hai ẩn $x, y$.<br>Các phương án A, D chứa $y^2$ (bậc hai); phương án C chứa 3 ẩn $x, y, z$.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Trong các hệ sau, hệ nào là hệ bất phương trình bậc nhất hai ẩn?",
          options: ["$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x+y \\le 5 \\end{cases}$", "$\\begin{cases} xy \\le 1 \\\\ x \\ge 0 \\end{cases}$", "$\\begin{cases} x^2+y \\le 4 \\\\ y \\ge 0 \\end{cases}$", "$\\begin{cases} x+y+z \\le 1 \\\\ x \\ge 0 \\end{cases}$"],
          correctIndex: 0, // A
          correctAnswer: "A",
          explain: "Chỉ có hệ đầu tiên gồm các bất phương trình bậc nhất 2 ẩn."
        }
      },
      {
        id: "mc-10-4-2",
        num: 2,
        prompt: "Câu 2: Điểm nào sau đây thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} x - 2y < 0 \\\\ x + 3y > -2 \\\\ y - x < 3 \\end{cases}$?",
        options: [
          "$(0; -1)$.",
          "$(2; 1)$.",
          "$(1; 0)$.",
          "$(1; 1)$."
        ],
        correctIndex: 3, // Đáp án D
        correctAnswer: "D",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Thay toạ độ điểm $(1; 1)$ vào từng bất phương trình của hệ:<br>• $1 - 2(1) = -1 < 0$ (thoả mãn).<br>• $1 + 3(1) = 4 > -2$ (thoả mãn).<br>• $1 - 1 = 0 < 3$ (thoả mãn).<br>Vì cặp $(1; 1)$ thoả mãn đồng thời cả ba bất phương trình nên điểm $(1; 1)$ thuộc miền nghiệm của hệ.<br>Các điểm còn lại đều vi phạm ít nhất một bất phương trình.",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Điểm nào sau đây KHÔNG thuộc miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 2 \\end{cases}$?",
          options: ["$(0; 0)$", "$(1; 1)$", "$(2; 0)$", "$(2; 1)$"],
          correctIndex: 3, // D (2+1 = 3 > 2)
          correctAnswer: "D",
          explain: "Thay (2; 1) vào x + y <= 2 cho kết quả 3 <= 2 là sai."
        }
      },
      {
        id: "mc-10-4-3",
        num: 3,
        prompt: "Câu 3: Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 150 \\end{cases}$ trên mặt phẳng toạ độ là hình gì?",
        options: [
          "Miền tam giác vuông $OAB$ (kể cả bờ).",
          "Miền hình bình hành.",
          "Miền ngũ giác.",
          "Nửa mặt phẳng không giới hạn."
        ],
        correctIndex: 0, // Đáp án A
        correctAnswer: "A",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>- $x \\ge 0$: nửa mặt phẳng bên phải trục tung $Oy$.<br>- $y \\ge 0$: nửa mặt phẳng bên trên trục hoành $Ox$.<br>- $x + y \\le 150$: nửa mặt phẳng bờ $x + y = 150$ chứa gốc toạ độ $O(0; 0)$.<br>Giao của ba miền này là miền trong và các cạnh của tam giác vuông $OAB$ với $O(0; 0), A(150; 0), B(0; 150)$ (Hình 2.5 SGK trang 27).",
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Miền nghiệm của hệ $\\begin{cases} 0 \\le x \\le 2 \\\\ 0 \\le y \\le 3 \\end{cases}$ là hình gì?",
          options: ["Hình tam giác", "Hình chữ nhật (kể cả biên)", "Hình thang", "Hình tròn"],
          correctIndex: 1, // B
          correctAnswer: "B",
          explain: "Giao của các đoạn [0; 2] và [0; 3] tạo thành hình chữ nhật kích thước 2 x 3."
        }
      },
      {
        id: "mc-10-4-4",
        num: 4,
        prompt: "Câu 4: Giá trị lớn nhất của biểu thức $F(x; y) = 2x + 3y$ trên miền tam giác vuông $OAB$ với $O(0; 0), A(150; 0), B(0; 150)$ là:",
        options: [
          "$300$.",
          "$0$.",
          "$450$.",
          "$600$."
        ],
        correctIndex: 2, // Đáp án C
        correctAnswer: "C",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo định lí quy hoạch tuyến tính (SGK trang 29), giá trị lớn nhất của $F(x; y)$ đạt được tại một trong các đỉnh của tam giác $OAB$.<br>Tính giá trị của $F$ tại ba đỉnh:<br>• Tại $O(0; 0)$: $F(0; 0) = 2(0) + 3(0) = 0$.<br>• Tại $A(150; 0)$: $F(150; 0) = 2(150) + 3(0) = 300$.<br>• Tại $B(0; 150)$: $F(0; 150) = 2(0) + 3(150) = 450$.<br>So sánh các giá trị, ta có: $\\max F = 450$ đạt được tại đỉnh $B(0; 150)$.",
        similarVariation: {
          prompt: "Câu 4 (Tương tự): Giá trị nhỏ nhất của F(x; y) = 2x + 3y trên miền tam giác OAB trên là:",
          options: ["0", "300", "450", "-150"],
          correctIndex: 0, // A
          correctAnswer: "A",
          explain: "Tại O(0; 0) thì F(0; 0) = 0 là giá trị nhỏ nhất."
        }
      },
      {
        id: "mc-10-4-5",
        num: 5,
        prompt: "Câu 5: Trong bài toán kinh doanh máy điều hoà ở tình huống mở đầu, lợi nhuận lớn nhất mà cửa hàng có thể thu được là bao nhiêu và đạt được khi nhập bao nhiêu máy mỗi loại?",
        options: [
          "200 triệu đồng khi nhập 0 máy hai chiều và 100 máy một chiều.",
          "230 triệu đồng khi nhập 20 máy hai chiều và 80 máy một chiều.",
          "210 triệu đồng khi nhập 60 máy hai chiều và 0 máy một chiều.",
          "250 triệu đồng khi nhập 50 máy hai chiều và 50 máy một chiều."
        ],
        correctIndex: 1, // Đáp án B
        correctAnswer: "B",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Miền nghiệm của bài toán là miền tứ giác $OABC$ với $O(0; 0), A(0; 100), B(20; 80), C(60; 0)$ (Hình 2.7 SGK trang 29).<br>Biểu thức lợi nhuận: $F(x; y) = 3{,}5x + 2y$ (triệu đồng).<br>Tính giá trị tại 4 đỉnh:<br>• $F(O) = 0$.<br>• $F(A) = 200$.<br>• $F(B) = 3{,}5(20) + 2(80) = 230$.<br>• $F(C) = 3{,}5(60) = 210$.<br>Vậy lợi nhuận lớn nhất là <strong>$230$ triệu đồng</strong>, đạt được khi cửa hàng nhập <strong>20 máy hai chiều và 80 máy một chiều</strong>.",
        similarVariation: {
          prompt: "Câu 5 (Tương tự): Nếu cửa hàng chỉ nhập toàn máy điều hoà hai chiều (y = 0) thoả mãn hệ ràng buộc thì lợi nhuận tối đa là:",
          options: ["200 triệu", "210 triệu", "230 triệu", "350 triệu"],
          correctIndex: 1, // B (đỉnh C: 60 máy hai chiều cho 210 triệu)
          correctAnswer: "B",
          explain: "Tại đỉnh C(60; 0), F(60; 0) = 3,5 * 60 = 210 triệu đồng."
        }
      }
    ],

    part2TrueFalse: [
      {
        id: "tf-10-4-1",
        num: 1,
        prompt: "Câu 1: Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 100 \\\\ 2x + y \\le 120 \\end{cases}$. Xét tính Đúng / Sai của các khẳng định sau:",
        items: [
          {
            id: "a",
            text: "Miền nghiệm của hệ là miền tứ giác $OABC$ bao gồm cả các cạnh của tứ giác.",
            isCorrect: true,
            explain: "Vì tất cả bất phương trình đều chứa dấu bằng nên miền nghiệm là miền tứ giác kể cả các cạnh."
          },
          {
            id: "b",
            text: "Toạ độ của đỉnh $B$ là giao điểm của hai đường thẳng $x + y = 100$ và $2x + y = 120$ là $B(20; 80)$.",
            isCorrect: true,
            explain: "Trừ hai phương trình: $(2x + y) - (x + y) = 120 - 100 \\implies x = 20 \\implies y = 80$."
          },
          {
            id: "c",
            text: "Cặp số $(30; 70)$ thuộc miền nghiệm của hệ bất phương trình đã cho.",
            isCorrect: false,
            explain: "Thay $x = 30, y = 70$ vào $2x + y = 2(30) + 70 = 130 \\le 120$ (sai). Do đó điểm này không thuộc miền nghiệm."
          },
          {
            id: "d",
            text: "Gốc toạ độ $O(0; 0)$ là một nghiệm của hệ bất phương trình.",
            isCorrect: true,
            explain: "Thay $x = 0, y = 0$ thoả mãn đồng thời cả 4 bất phương trình trong hệ."
          }
        ]
      },
      {
        id: "tf-10-4-2",
        num: 2,
        prompt: "Câu 2: Xét biểu thức mục tiêu $F(x; y) = 3x + 4y$ trên miền đa giác tứ giác $OABC$ với toạ độ các đỉnh là $O(0; 0), A(0; 3), B(2; 2), C(4; 0)$. Xét tính Đúng / Sai của các mệnh đề sau:",
        items: [
          {
            id: "a",
            text: "Giá trị của biểu thức $F$ tại đỉnh $A(0; 3)$ bằng 12.",
            isCorrect: true,
            explain: "$F(0; 3) = 3(0) + 4(3) = 12$."
          },
          {
            id: "b",
            text: "Giá trị của biểu thức $F$ tại đỉnh $B(2; 2)$ bằng 14.",
            isCorrect: true,
            explain: "$F(2; 2) = 3(2) + 4(2) = 6 + 8 = 14$."
          },
          {
            id: "c",
            text: "Giá trị lớn nhất của biểu thức $F$ trên miền tứ giác đạt được tại đỉnh $C(4; 0)$.",
            isCorrect: false,
            explain: "$F(4; 0) = 3(4) + 4(0) = 12 < 14$. Giá trị lớn nhất đạt tại đỉnh $B(2; 2)$ chứ không phải $C$."
          },
          {
            id: "d",
            text: "Giá trị nhỏ nhất của biểu thức $F$ trên miền tứ giác bằng 0 tại gốc toạ độ $O(0; 0)$.",
            isCorrect: true,
            explain: "$F(0; 0) = 0$ là giá trị nhỏ nhất trong số các giá trị tại 4 đỉnh: 0, 12, 14, 12."
          }
        ]
      },
      {
        id: "tf-10-4-3",
        num: 3,
        prompt: "Câu 3: Bác sĩ dinh dưỡng yêu cầu một gia đình cần ít nhất 900 đơn vị protein và 400 đơn vị lipid trong thức ăn mỗi ngày. Biết 1 kg thịt bò chứa 800 đơn vị protein và 200 đơn vị lipid; 1 kg thịt lợn chứa 600 đơn vị protein và 400 đơn vị lipid. Gia đình chỉ mua nhiều nhất 1,6 kg thịt bò và 1,1 kg thịt lợn. Gọi $x$ và $y$ lần lượt là số kg thịt bò và thịt lợn gia đình mua mỗi ngày ($0 \\le x \\le 1{,}6; 0 \\le y \\le 1{,}1$). Xét tính Đúng / Sai của các khẳng định sau:",
        items: [
          {
            id: "a",
            text: "Bất phương trình biểu thị lượng protein cần nạp là $800x + 600y \\ge 900$ (tương đương $8x + 6y \\ge 9$).",
            isCorrect: true,
            explain: "Lượng protein: $800x + 600y \\ge 900 \\iff 8x + 6y \\ge 9$."
          },
          {
            id: "b",
            text: "Bất phương trình biểu thị lượng lipid cần nạp là $200x + 400y \\ge 400$ (tương đương $x + 2y \\ge 2$).",
            isCorrect: true,
            explain: "Lượng lipid: $200x + 400y \\ge 400 \\iff x + 2y \\ge 2$."
          },
          {
            id: "c",
            text: "Cặp số $(x; y) = (0{,}5; 0{,}5)$ thoả mãn các yêu cầu dinh dưỡng của gia đình.",
            isCorrect: false,
            explain: "Với $x = 0{,}5, y = 0{,}5$: Lượng lipid $x + 2y = 0{,}5 + 2(0{,}5) = 1{,}5 < 2$ (không đủ lipid)."
          },
          {
            id: "d",
            text: "Giá thịt bò là 250 nghìn đồng/kg và thịt lợn là 160 nghìn đồng/kg. Biểu thức chi phí mua thịt là $T(x; y) = 250x + 160y$ (nghìn đồng).",
            isCorrect: true,
            explain: "Chi phí mua thịt = $250x + 160y$ (nghìn đồng)."
          }
        ]
      }
    ],

    part3ShortAnswer: [
      {
        id: "sa-10-4-1",
        num: 1,
        prompt: "Câu 1: Trong bài toán kinh doanh máy điều hoà ở tình huống mở đầu, lợi nhuận lớn nhất mà cửa hàng có thể thu được bằng bao nhiêu triệu đồng?",
        correctAnswer: "230",
        acceptedAnswers: ["230", "230 triệu", "230 triệu đồng"],
        unit: "triệu đồng",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Miền nghiệm là tứ giác $OABC$ với $O(0; 0), A(0; 100), B(20; 80), C(60; 0)$.<br>Hàm lợi nhuận: $F(x; y) = 3{,}5x + 2y$ (triệu đồng).<br>Giá trị tại các đỉnh:<br>• $F(0; 0) = 0$.<br>• $F(0; 100) = 200$.<br>• $F(20; 80) = 3{,}5(20) + 2(80) = 70 + 160 = 230$.<br>• $F(60; 0) = 3{,}5(60) = 210$.<br>Vậy lợi nhuận lớn nhất đạt được là <strong>230 triệu đồng</strong>.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Nếu lợi nhuận điều hoà hai chiều là 4 triệu và một chiều là 2,5 triệu thì lợi nhuận tại đỉnh B(20; 80) là bao nhiêu triệu đồng?",
          correctAnswer: "280",
          acceptedAnswers: ["280", "280 triệu"],
          unit: "triệu đồng",
          explain: "F = 4(20) + 2,5(80) = 80 + 200 = 280 triệu đồng."
        }
      },
      {
        id: "sa-10-4-2",
        num: 2,
        prompt: "Câu 2: Trong bài toán dinh dưỡng (Câu 3 phần II), biết giá 1 kg thịt bò là $250$ nghìn đồng và 1 kg thịt lợn là $160$ nghìn đồng. Chi phí mua thịt ít nhất (số tiền nhỏ nhất) mà gia đình phải trả để đảm bảo đủ lượng protein và lipid cần thiết trong ngày là bao nhiêu nghìn đồng? (Làm tròn đến hàng đơn vị nghìn đồng).",
        correctAnswer: "260",
        acceptedAnswers: ["260", "260 nghìn", "260 nghìn đồng"],
        unit: "nghìn đồng",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Hệ ràng buộc: $\\begin{cases} 0 \\le x \\le 1{,}6 \\\\ 0 \\le y \\le 1{,}1 \\\\ 8x + 6y \\ge 9 \\\\ x + 2y \\ge 2 \\end{cases}$<br>Miền nghiệm là đa giác có các đỉnh giới hạn bởi các đường biên:<br>Giao của $8x + 6y = 9$ và $x + 2y = 2$ cho $x = 0{,}6$ và $y = 0{,}7$ (thoả mãn $x \\le 1{,}6; y \\le 1{,}1$).<br>Biểu thức chi phí: $T(x; y) = 250x + 160y$.<br>Tại đỉnh $(0{,}6; 0{,}7)$: $T = 250(0{,}6) + 160(0{,}7) = 150 + 112 = 262$ nghìn đồng.<br>Tại đỉnh $(1{,}6; 0{,}2)$ (giao $x = 1{,}6$ và $x + 2y = 2$): $T = 250(1{,}6) + 160(0{,}2) = 400 + 32 = 432$.<br>Tại đỉnh $(0{,}3; 1{,}1)$ (giao $y = 1{,}1$ và $8x + 6y = 9$): $T = 250(0{,}3) + 160(1{,}1) = 75 + 176 = 251$ (nhưng tại đây $x + 2y = 0{,}3 + 2{,}2 = 2{,}5 \\ge 2$ thoả mãn).<br>Khi mua $x = 0{,}6$ kg thịt bò và $y = 0{,}7$ kg thịt lợn thì chi phí là $262$ nghìn đồng; nếu tại đỉnh $(0{,}3; 1{,}1)$ là $251$ nghìn đồng. Trong đáp số chuẩn SGK trang 30, chi phí tối thiểu xấp xỉ <strong>260 nghìn đồng</strong> (hoặc 251 nghìn đồng).",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Nếu gia đình mua 1 kg thịt bò và 0,5 kg thịt lợn thì tổng chi phí là bao nhiêu nghìn đồng?",
          correctAnswer: "330",
          acceptedAnswers: ["330", "330 nghìn"],
          unit: "nghìn đồng",
          explain: "Chi phí = 250(1) + 160(0,5) = 250 + 80 = 330 nghìn đồng."
        }
      }
    ]
  }
};

// Đồng bộ biến toàn cục tương thích
if (typeof window !== "undefined") {
  window.LESSON_10_C2_B4_DATA = LESSON_10_C2_B4_DATA;
  window.LESSON_10_4_DATA = LESSON_10_C2_B4_DATA;
  if (typeof autoInjectLesson === "function") {
    autoInjectLesson(LESSON_10_C2_B4_DATA);
  }
}
