# Generator for js/lesson-10-5-data.js
# Ensuring double backslashes for all LaTeX syntax

code = r'''/**
 * BÀI HỌC SỐ: BÀI 5. GIÁ TRỊ LƯỢNG GIÁC CỦA MỘT GÓC TỪ 0° ĐẾN 180° (TOÁN 10 - KẾT NỐI TRI THỨC)
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - Tích hợp toàn bộ Audio Voice AI (vi-VN-NamMinhNeural) chuẩn sư phạm
 * - Tích hợp câu hỏi tương tác POI cả trực tiếp trên màn hình và popup tự động khi nghe audio
 * - Đồ họa TikZ SVG nửa đường tròn đơn vị & Đu quay chuẩn xác 100%
 * - Bài tập trắc nghiệm 3 dạng thức thi mới 2025 (hoán vị A, B, C, D phong phú)
 */

window.LESSON_10_C3_B5_DATA = {
  id: "10-c3-b5",
  number: "Bài 5",
  title: "Giá trị lượng giác của một góc từ 0° đến 180°",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO SƯ PHẠM ĐẦU GIỜ CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    avatar: "assets/images/teacher_avatar.png",
    name: "ThS. Lương Thanh Sáng",
    title: "Giáo viên Toán - THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang",
    greetingText: "Thầy Sáng thân ái chào toàn thể các em học sinh Lớp 10! Thầy rất vui khi được đồng hành cùng các em trong Chương ba: Hệ thức lượng trong tam giác. Hôm nay, Thầy trò mình cùng khám phá Bài 5: Giá trị lượng giác của một góc từ 0 độ đến 180 độ. Ở lớp 9, các em đã rất quen thuộc với tỉ số lượng giác của góc nhọn trong tam giác vuông. Nhưng trong không gian thực tế, các góc chuyển động của bánh xe, cánh tay robot hay quỹ đạo vệ tinh có thể là góc tù, thậm chí góc bẹt. Nửa đường tròn đơn vị hôm nay sẽ mở ra cho các em một chân trời toán học hoàn toàn mới. Thầy chúc các em học thật hứng khởi và tiếp thu trọn vẹn kiến thức nhé!",
    audioScript: "Thầy Sáng thân ái chào toàn thể các em học sinh Lớp 10! Thầy rất vui khi được đồng hành cùng các em trong Chương ba: Hệ thức lượng trong tam giác. Hôm nay, Thầy trò mình cùng khám phá Bài 5: Giá trị lượng giác của một góc từ 0 độ đến 180 độ. Ở lớp 9, các em đã rất quen thuộc với tỉ số lượng giác của góc nhọn trong tam giác vuông. Nhưng trong không gian thực tế, các góc chuyển động của bánh xe, cánh tay robot hay quỹ đạo vệ tinh có thể là góc tù, thậm chí góc bẹt. Nửa đường tròn đơn vị hôm nay sẽ mở ra cho các em một chân trời toán học hoàn toàn mới. Thầy chúc các em học thật hứng khởi và tiếp thu trọn vẹn kiến thức nhé!",
    audioUrl: "assets/audio/b10_5_welcome.mp3",
    buttonLabel: "Nghe Thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN BỘ GD&ĐT)
  // =========================================================================
  learningGoals: [
    "Nhận biết và nắm vững định nghĩa giá trị lượng giác của một góc bất kì từ $0^\\circ$ đến $180^\\circ$ thông qua toạ độ điểm trên nửa đường tròn đơn vị.",
    "Hiểu sâu sắc và vận dụng linh hoạt mối quan hệ giữa các giá trị lượng giác của hai góc bù nhau (sin bù, cos đối, tan đối, cot đối) và hai góc phụ nhau.",
    "Thành thạo kĩ năng tra cứu bảng góc đặc biệt và sử dụng máy tính cầm tay (Casio fx-580VNX / fx-880BTG) để tính góc và giá trị lượng giác.",
    "Vận dụng giải quyết các bài toán đo đạc thực tiễn sinh động như bài toán chuyển động đu quay khổng lồ và góc nghiêng pin năng lượng mặt trời."
  ],
  goalsAudioScript: "Sau bài học này, các em cần đạt được bốn mục tiêu then chốt: Thứ nhất, hiểu rõ định nghĩa giá trị lượng giác của góc từ 0 đến 180 độ trên nửa đường tròn đơn vị. Thứ hai, vận dụng thành thạo mối quan hệ hai góc bù nhau và hai góc phụ nhau. Thứ ba, bấm máy tính cầm tay chính xác. Và thứ tư, giải quyết thành công các bài toán thực tiễn như vòng quay đu quay khổng lồ.",
  goalsAudioUrl: "assets/audio/b10_5_goals.mp3",
  goalsButtonLabel: "Nghe Thầy Sáng đọc mục tiêu",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN
  // =========================================================================
  hook: {
    title: "Tình huống thực tế: Vệ tinh định vị toàn cầu & Nhu cầu mở rộng góc tù",
    story: "Lượng giác bắt nguồn từ nhu cầu tính toán góc và khoảng cách trong thiên văn học, hàng hải, lập bản đồ và dẫn đường vệ tinh GPS. Ở lớp 9, chúng ta chỉ mới biết tỉ số lượng giác của góc nhọn trong tam giác vuông. Vậy khi góc quay là góc tù, làm sao để định nghĩa sin, cos, tan và cot?",
    storyHtml: `
      <p>Lượng giác bắt nguồn từ nhu cầu tính toán góc và khoảng cách trong thiên văn học, hàng hải, bản đồ và dẫn đường vệ tinh không gian:</p>
      <div style="margin: 12px 0; padding: 14px 18px; background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
        <p style="margin: 0 0 6px 0;">• <strong>Ở Lớp 9:</strong> Ta chỉ xét góc nhọn $\\alpha \\in (0^\\circ; 90^\\circ)$ trong tam giác vuông: $\\sin \\alpha = \\dfrac{\\text{đối}}{\\text{huyền}}$, $\\cos \\alpha = \\dfrac{\\text{kề}}{\\text{huyền}}$, $\\tan \\alpha = \\dfrac{\\text{đối}}{\\text{kề}}$, $\\cot \\alpha = \\dfrac{\\text{kề}}{\\text{đối}}$.</p>
        <p style="margin: 0;">• <strong>Thách thức thực tiễn:</strong> Một vệ tinh bay quanh quỹ đạo Trái Đất tạo với trạm thu mặt đất các góc tù $\\alpha > 90^\\circ$. Làm thế nào để định nghĩa các giá trị lượng giác cho mọi góc từ $0^\\circ$ đến $180^\\circ$?</p>
      </div>
      <p style="margin-top: 8px;"><em>Công cụ nửa đường tròn đơn vị chính là lời giải hoàn hảo kết nối đại số và hình học toạ độ!</em></p>
    `,
    audioScript: "Lượng giác bắt nguồn từ nhu cầu tính toán góc và khoảng cách trong thiên văn học, hàng hải và dẫn đường vệ tinh. Ở lớp 9, chúng ta chỉ mới biết tỉ số lượng giác của góc nhọn trong tam giác vuông. Vậy khi góc quay là góc tù, làm sao để định nghĩa sin, cos, tan và cot? Nửa đường tròn đơn vị chính là lời giải hoàn hảo kết nối đại số và hình học toạ độ. Cùng thầy khám phá ngay nhé!",
    audioUrl: "assets/audio/b10_5_hook.mp3",
    buttonLabel: "Nghe Thầy Sáng giảng dẫn nhập",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    illustrationCaption: "Hình 3.1 & Mô phỏng vệ tinh định vị Trái Đất cùng góc lượng giác mở rộng",
    illustrationSvg: `
      <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
        <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
          <i class="fa-solid fa-satellite"></i> [Đồ họa mô phỏng TikZ]: Vệ tinh định vị và mở rộng góc lượng giác từ 0° đến 180°
        </div>
        <div style="text-align: center;">
          <svg width="520" height="240" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
            <defs>
              <radialGradient id="earthGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#38bdf8"/>
                <stop offset="70%" stop-color="#0284c7"/>
                <stop offset="100%" stop-color="#0369a1"/>
              </radialGradient>
              <marker id="arrow-hook-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
              </marker>
            </defs>

            <!-- Bán cầu Trái Đất -->
            <path d="M 120,200 A 140,140 0 0,1 400,200 Z" fill="url(#earthGrad)" opacity="0.85"/>
            <line x1="60" y1="200" x2="460" y2="200" stroke="#64748b" stroke-width="2"/>
            <text x="475" y="204" font-family="'Times New Roman', serif" font-size="14" font-style="italic" fill="#334155">x</text>

            <!-- Trạm mặt đất O -->
            <circle cx="260" cy="200" r="5" fill="#dc2626"/>
            <text x="255" y="222" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#dc2626">O (Trạm đo)</text>

            <!-- Vệ tinh 1 (Góc nhọn alpha < 90) -->
            <line x1="260" y1="200" x2="380" y2="80" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="4,4"/>
            <circle cx="380" cy="80" r="7" fill="#0284c7"/>
            <text x="392" y="82" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">Vệ tinh 1 (Góc nhọn α)</text>
            <!-- Cung góc alpha -->
            <path d="M 320,200 A 60,60 0 0,0 302,158" fill="none" stroke="#0284c7" stroke-width="2"/>
            <text x="325" y="175" font-family="'Times New Roman', serif" font-size="14" font-style="italic" fill="#0284c7">α < 90°</text>

            <!-- Vệ tinh 2 (Góc tù beta > 90) -->
            <line x1="260" y1="200" x2="140" y2="90" stroke="#e11d48" stroke-width="2.5"/>
            <circle cx="140" cy="90" r="7" fill="#e11d48"/>
            <text x="35" y="92" font-family="sans-serif" font-size="12" font-weight="bold" fill="#e11d48">Vệ tinh 2 (Góc tù β)</text>
            <!-- Cung góc beta -->
            <path d="M 340,200 A 80,80 0 0,0 203,143" fill="none" stroke="#e11d48" stroke-width="2"/>
            <text x="215" y="135" font-family="'Times New Roman', serif" font-size="14" font-style="italic" fill="#e11d48">β > 90°</text>
          </svg>
        </div>
      </div>
    `
  },

  // -------------------------------------------------------------------------
  // CÁC MỤC KIẾN THỨC BÀI HỌC
  // -------------------------------------------------------------------------
  sections: [
    // =======================================================================
    // MỤC 1. GIÁ TRỊ LƯỢNG GIÁC CỦA MỘT GÓC
    // =======================================================================
    {
      num: "1",
      title: "Giá trị lượng giác của một góc từ 0° đến 180°",
      audioScript: "Mục một, định nghĩa giá trị lượng giác của một góc. Trong mặt phẳng tọa độ Oxy, nửa đường tròn tâm O bán kính R bằng một nằm phía trên trục hoành được gọi là nửa đường tròn đơn vị. Với mỗi góc alpha từ 0 đến 180 độ, ta xác định duy nhất điểm M có tọa độ x0, y0 trên nửa đường tròn sao cho góc xOM bằng alpha. Khi đó: sin alpha bằng tung độ y0; cos alpha bằng hoành độ x0; tan alpha bằng y0 chia x0; và cot alpha bằng x0 chia y0. Các em hãy chú ý: sin của góc từ 0 đến 180 độ luôn không âm, còn cos của góc tù thì luôn mang dấu âm nhé!",
      audioUrl: "assets/audio/b10_5_sec1.mp3",
      buttonLabel: "Nghe Thầy Sáng giảng Mục 1",
      checkpoints: [
        {
          id: "poi-10-5-sec1-1",
          time: 18,
          title: "Giây 18: Kiểm tra khái niệm cơ bản",
          question: "Trên nửa đường tròn đơn vị, $\\cos \\alpha$ là hoành độ hay tung độ của điểm $M(x_0; y_0)$?",
          options: [
            "$\\cos \\alpha$ là hoành độ $x_0$",
            "$\\cos \\alpha$ là tung độ $y_0$"
          ],
          correctIndex: 0,
          hint: "Hãy nhớ: Trục hoành Ox tương ứng với cos, trục tung Oy tương ứng với sin.",
          explain: "Chính xác! $\\cos \\alpha = x_0$ (hoành độ), còn $\\sin \\alpha = y_0$ (tung độ của điểm $M$)."
        },
        {
          id: "poi-10-5-sec1-2",
          time: 38,
          title: "Giây 38: Nhận biết dấu của góc tù",
          question: "Khi góc $\\alpha$ là góc tù ($90^\\circ < \\alpha < 180^\\circ$), giá trị của $\\cos \\alpha$ mang dấu gì?",
          options: [
            "Dấu dương ($> 0$)",
            "Dấu âm ($< 0$)"
          ],
          correctIndex: 1,
          hint: "Khi góc tù, điểm M nằm ở góc phần tư thứ hai, bên trái trục tung nên hoành độ x0 âm hay dương?",
          explain: "Chính xác! Điểm $M(x_0; y_0)$ nằm ở bên trái trục $Oy$ nên hoành độ $x_0 < 0$, do đó $\\cos \\alpha < 0$."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Nửa đường tròn đơn vị & Định nghĩa bốn giá trị lượng giác",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Định nghĩa SGK Trang 34]:</div>
              <p>Trong mặt phẳng toạ độ $Oxy$, nửa đường tròn tâm $O$, bán kính $R = 1$ nằm phía trên trục hoành được gọi là <strong>nửa đường tròn đơn vị</strong>.</p>
              <p>Với mỗi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), có duy nhất điểm $M(x_0; y_0)$ trên nửa đường tròn đơn vị sao cho $\\widehat{xOM} = \\alpha$. Khi đó:</p>
              <ul class="sgk-box-list">
                <li><strong>$\\sin$ của góc $\\alpha$</strong> là tung độ $y_0$ của điểm $M$, kí hiệu là $\\sin \\alpha = y_0$.</li>
                <li><strong>$\\text{côsin}$ của góc $\\alpha$</strong> là hoành độ $x_0$ của điểm $M$, kí hiệu là $\\cos \\alpha = x_0$.</li>
                <li>Khi $\\alpha \\ne 90^\\circ$ (tức $x_0 \\ne 0$), <strong>$\\text{tang}$ của $\\alpha$</strong> là $\\tan \\alpha = \\dfrac{y_0}{x_0} = \\dfrac{\\sin \\alpha}{\\cos \\alpha}$.</li>
                <li>Khi $\\alpha \\ne 0^\\circ$ và $\\alpha \\ne 180^\\circ$ (tức $y_0 \\ne 0$), <strong>$\\text{côtang}$ của $\\alpha$</strong> là $\\cot \\alpha = \\dfrac{x_0}{y_0} = \\dfrac{\\cos \\alpha}{\\sin \\alpha}$.</li>
              </ul>
            </div>

            <!-- TikZ SVG: Hình 3.2 SGK - Góc nhọn và Góc tù -->
            <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
              <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
                <i class="fa-solid fa-circle-notch"></i> [Đồ họa TikZ - Hình 3.2 SGK]: Nửa đường tròn đơn vị với góc nhọn (α < 90°) và góc tù (α > 90°)
              </div>
              <div style="text-align: center;">
                <svg width="680" height="230" viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-axis" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
                    </marker>
                  </defs>

                  <!-- ==================== HÌNH TRÁI: GÓC NHỌN α < 90° ==================== -->
                  <g transform="translate(10, 10)">
                    <!-- Trục tọa độ -->
                    <line x1="20" y1="170" x2="280" y2="170" stroke="#334155" stroke-width="1.8" marker-end="url(#arr-axis)"/>
                    <text x="285" y="174" font-family="'Times New Roman', serif" font-size="14" font-style="italic" fill="#334155">x</text>

                    <line x1="150" y1="190" x2="150" y2="20" stroke="#334155" stroke-width="1.8" marker-end="url(#arr-axis)"/>
                    <text x="145" y="15" font-family="'Times New Roman', serif" font-size="14" font-style="italic" fill="#334155">y</text>

                    <!-- Nửa đường tròn bán kính R=100 (tâm 150, 170) -->
                    <path d="M 50,170 A 100,100 0 0,1 250,170" fill="none" stroke="#dc2626" stroke-width="2.2"/>

                    <!-- Điểm B(-1; 0), A(1; 0), C(0; 1), O(0; 0) -->
                    <text x="135" y="185" font-family="'Times New Roman', serif" font-size="13" font-style="italic">O</text>
                    <text x="35" y="185" font-family="'Times New Roman', serif" font-size="13">-1</text>
                    <text x="40" y="165" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" fill="#0284c7">B</text>
                    <text x="252" y="185" font-family="'Times New Roman', serif" font-size="13">1</text>
                    <text x="255" y="165" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" fill="#0284c7">A</text>
                    <text x="135" y="65" font-family="'Times New Roman', serif" font-size="13">1</text>
                    <text x="155" y="65" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" fill="#0284c7">C</text>

                    <!-- Điểm M với góc nhọn 50°: x = 100*cos(50°) ≈ 64.3, y = 100*sin(50°) ≈ 76.6 -->
                    <!-- Tọa độ SVG: x = 150 + 64 = 214, y = 170 - 77 = 93 -->
                    <line x1="150" y1="170" x2="214" y2="93" stroke="#0284c7" stroke-width="2"/>
                    <circle cx="214" cy="93" r="4.5" fill="#0284c7"/>
                    <text x="220" y="90" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#0284c7">M(x₀; y₀)</text>

                    <!-- Gióng xuống Ox và Oy nét đứt -->
                    <line x1="214" y1="93" x2="214" y2="170" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3,3"/>
                    <line x1="214" y1="93" x2="150" y2="93" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3,3"/>
                    <text x="210" y="185" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#0284c7">x₀</text>
                    <text x="132" y="97" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#0284c7">y₀</text>

                    <!-- Cung góc alpha -->
                    <path d="M 180,170 A 30,30 0 0,0 169,147" fill="none" stroke="#0284c7" stroke-width="1.5"/>
                    <text x="182" y="155" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#0284c7">α</text>

                    <!-- Chú thích -->
                    <text x="150" y="215" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0284c7" text-anchor="middle">Trường hợp: α < 90° (x₀ > 0, y₀ > 0)</text>
                  </g>

                  <!-- ĐƯỜNG PHÂN CÁCH GIỮA HAI HÌNH -->
                  <line x1="340" y1="20" x2="340" y2="210" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,4"/>

                  <!-- ==================== HÌNH PHẢI: GÓC TÙ α > 90° ==================== -->
                  <g transform="translate(350, 10)">
                    <!-- Trục tọa độ -->
                    <line x1="20" y1="170" x2="280" y2="170" stroke="#334155" stroke-width="1.8" marker-end="url(#arr-axis)"/>
                    <text x="285" y="174" font-family="'Times New Roman', serif" font-size="14" font-style="italic" fill="#334155">x</text>

                    <line x1="150" y1="190" x2="150" y2="20" stroke="#334155" stroke-width="1.8" marker-end="url(#arr-axis)"/>
                    <text x="145" y="15" font-family="'Times New Roman', serif" font-size="14" font-style="italic" fill="#334155">y</text>

                    <!-- Nửa đường tròn -->
                    <path d="M 50,170 A 100,100 0 0,1 250,170" fill="none" stroke="#dc2626" stroke-width="2.2"/>

                    <!-- Điểm B, A, C, O -->
                    <text x="135" y="185" font-family="'Times New Roman', serif" font-size="13" font-style="italic">O</text>
                    <text x="35" y="185" font-family="'Times New Roman', serif" font-size="13">-1</text>
                    <text x="40" y="165" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" fill="#0284c7">B</text>
                    <text x="252" y="185" font-family="'Times New Roman', serif" font-size="13">1</text>
                    <text x="255" y="165" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" fill="#0284c7">A</text>
                    <text x="135" y="65" font-family="'Times New Roman', serif" font-size="13">1</text>
                    <text x="155" y="65" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" fill="#0284c7">C</text>

                    <!-- Điểm M với góc tù 130°: x = 100*cos(130°) ≈ -64.3, y = 100*sin(130°) ≈ 76.6 -->
                    <!-- Tọa độ SVG: x = 150 - 64 = 86, y = 170 - 77 = 93 -->
                    <line x1="150" y1="170" x2="86" y2="93" stroke="#e11d48" stroke-width="2"/>
                    <circle cx="86" cy="93" r="4.5" fill="#e11d48"/>
                    <text x="25" y="90" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#e11d48">M(x₀; y₀)</text>

                    <!-- Gióng xuống Ox và Oy -->
                    <line x1="86" y1="93" x2="86" y2="170" stroke="#e11d48" stroke-width="1.2" stroke-dasharray="3,3"/>
                    <line x1="86" y1="93" x2="150" y2="93" stroke="#e11d48" stroke-width="1.2" stroke-dasharray="3,3"/>
                    <text x="80" y="185" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#e11d48">x₀ < 0</text>
                    <text x="155" y="97" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#e11d48">y₀ > 0</text>

                    <!-- Cung góc alpha tù -->
                    <path d="M 180,170 A 30,30 0 0,0 131,147" fill="none" stroke="#e11d48" stroke-width="1.5"/>
                    <text x="175" y="152" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#e11d48">α</text>

                    <!-- Chú thích -->
                    <text x="150" y="215" font-family="sans-serif" font-size="13" font-weight="bold" fill="#e11d48" text-anchor="middle">Trường hợp: α > 90° (x₀ < 0, y₀ > 0)</text>
                  </g>
                </svg>
              </div>
            </div>
          `,
          memoryTip: {
            title: "Mẹo nhớ cốt lõi của Thầy Sáng: “Nhất cả, nhị sin”",
            content: "Trong khoảng góc từ $0^\\circ$ đến $180^\\circ$:<br>• <strong>Góc nhọn ($0^\\circ < \\alpha < 90^\\circ$):</strong> Cả 4 giá trị $\\sin, \\cos, \\tan, \\cot$ đều <strong>DƯƠNG</strong>.<br>• <strong>Góc tù ($90^\\circ < \\alpha < 180^\\circ$):</strong> <em>Chỉ duy nhất</em> $\\sin \\alpha > 0$, còn $\\cos \\alpha < 0$, $\\tan \\alpha < 0$, $\\cot \\alpha < 0$!"
          }
        },
        {
          key: "1b",
          title: "Bảng giá trị lượng giác các góc đặc biệt (Bảng 3.1 SGK)",
          contentHtml: `
            <p>Học sinh cần ghi nhớ chính xác bảng giá trị lượng giác của các góc đặc biệt dưới đây để giải nhanh các bài toán:</p>
            <div style="overflow-x: auto; margin: 14px 0;">
              <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <thead>
                  <tr style="background: #0284c7; color: #ffffff;">
                    <th style="padding: 10px; border: 1px solid #cbd5e1;">GTLG \\ $\\alpha$</th>
                    <th style="padding: 10px; border: 1px solid #cbd5e1;">$0^\\circ$</th>
                    <th style="padding: 10px; border: 1px solid #cbd5e1;">$30^\\circ$</th>
                    <th style="padding: 10px; border: 1px solid #cbd5e1;">$45^\\circ$</th>
                    <th style="padding: 10px; border: 1px solid #cbd5e1;">$60^\\circ$</th>
                    <th style="padding: 10px; border: 1px solid #cbd5e1;">$90^\\circ$</th>
                    <th style="padding: 10px; border: 1px solid #cbd5e1;">$180^\\circ$</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding: 10px; font-weight: bold; background: #f8fafc; border: 1px solid #cbd5e1;">$\\sin \\alpha$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$0$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$\\dfrac{1}{2}$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$\\dfrac{\\sqrt{2}}{2}$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$\\dfrac{\\sqrt{3}}{2}$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; color: #0284c7;">$1$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$0$</td>
                  </tr>
                  <tr style="background: #f8fafc;">
                    <td style="padding: 10px; font-weight: bold; background: #f1f5f9; border: 1px solid #cbd5e1;">$\\cos \\alpha$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; color: #0284c7;">$1$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$\\dfrac{\\sqrt{3}}{2}$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$\\dfrac{\\sqrt{2}}{2}$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$\\dfrac{1}{2}$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$0$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; color: #dc2626; font-weight: bold;">$-1$</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px; font-weight: bold; background: #f8fafc; border: 1px solid #cbd5e1;">$\\tan \\alpha$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$0$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$\\dfrac{\\sqrt{3}}{3}$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$1$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$\\sqrt{3}$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; color: #94a3b8; font-weight: bold;">|| (KXĐ)</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$0$</td>
                  </tr>
                  <tr style="background: #f8fafc;">
                    <td style="padding: 10px; font-weight: bold; background: #f1f5f9; border: 1px solid #cbd5e1;">$\\cot \\alpha$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; color: #94a3b8; font-weight: bold;">|| (KXĐ)</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$\\sqrt{3}$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$1$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$\\dfrac{\\sqrt{3}}{3}$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1;">$0$</td>
                    <td style="padding: 10px; border: 1px solid #cbd5e1; color: #94a3b8; font-weight: bold;">|| (KXĐ)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style="font-size: 0.88rem; color: #64748b; font-style: italic;"><i class="fa-solid fa-circle-info"></i> Ghi chú: Kí hiệu "||" biểu thị giá trị lượng giác tương ứng không xác định (do mẫu số bằng 0).</p>
          `,
          workedExample: {
            title: "Ví dụ 1 (SGK Trang 35) & Kĩ năng tính góc 135°",
            problem: "Tìm các giá trị lượng giác của góc $135^\\circ$ trên nửa đường tròn đơn vị.",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <p>Gọi $M$ là điểm trên nửa đường tròn đơn vị sao cho $\\widehat{xOM} = 135^\\circ$. Gọi $N, P$ lần lượt là hình chiếu vuông góc của $M$ lên trục $Ox, Oy$.</p>
              <p>Vì $\\widehat{xOM} = 135^\\circ$ nên góc kề bù $\\widehat{MON} = 180^\\circ - 135^\\circ = 45^\\circ$. Tam giác $MON$ vuông cân tại $N$ có cạnh huyền $OM = 1$.</p>
              <p>Do đó: $ON = OP = OM \\cdot \\cos 45^\\circ = 1 \\cdot \\dfrac{\\sqrt{2}}{2} = \\dfrac{\\sqrt{2}}{2}$.</p>
              <p>Mặt khác, điểm $M$ nằm bên trái trục tung nên hoành độ âm: $x_0 = -\\dfrac{\\sqrt{2}}{2}$, tung độ dương: $y_0 = \\dfrac{\\sqrt{2}}{2}$.</p>
              <div style="text-align: center; margin: 10px 0; color: #0284c7; font-weight: bold; font-size: 1.05rem;">
                $$\\sin 135^\\circ = \\dfrac{\\sqrt{2}}{2}, \\quad \\cos 135^\\circ = -\\dfrac{\\sqrt{2}}{2}, \\quad \\tan 135^\\circ = -1, \\quad \\cot 135^\\circ = -1.$$
              </div>
            `,
            similarProblem: `
              <p><strong>Bài tập tương tự:</strong> Tìm các giá trị lượng giác của góc $120^\\circ$.</p>
              <p><strong>Hướng dẫn từ Thầy Sáng:</strong> Điểm $M$ ứng với góc $120^\\circ$ tạo với $Ox$ góc $60^\\circ$ bên trái, toạ độ $M\\left(-\\dfrac{1}{2}; \\dfrac{\\sqrt{3}}{2}\\right)$.<br>Suy ra: $\\sin 120^\\circ = \\dfrac{\\sqrt{3}}{2}$, $\\cos 120^\\circ = -\\dfrac{1}{2}$, $\\tan 120^\\circ = -\\sqrt{3}$, $\\cot 120^\\circ = -\\dfrac{\\sqrt{3}}{3}$.</p>
            `
          }
        }
      ]
    },

    // =======================================================================
    // MỤC 2. MỐI QUAN HỆ GIỮA CÁC GIÁ TRỊ LƯỢNG GIÁC CỦA HAI GÓC BÙ NHAU
    // =======================================================================
    {
      num: "2",
      title: "Mối quan hệ giữa các giá trị lượng giác của hai góc bù nhau",
      audioScript: "Mục hai, mối quan hệ giữa các giá trị lượng giác của hai góc bù nhau. Hai góc bù nhau là hai góc có tổng số đo bằng 180 độ, tức là alpha và 180 độ trừ alpha. Trên nửa đường tròn đơn vị, hai điểm M và M phẩy đối xứng nhau qua trục tung Oy. Vì vậy, chúng có cùng tung độ, nhưng hoành độ đối nhau. Ta có quy tắc thần chú: Sin bù, cos đối, tan đối, cot đối. Tức là: sin của 180 độ trừ alpha bằng sin alpha; còn cos, tan và cot của 180 độ trừ alpha đều bằng số đối của cos, tan và cot alpha. Nhờ tính chất tuyệt vời này, các em có thể dễ dàng quy bất kì góc tù nào về góc nhọn để tính toán cực kì nhanh chóng!",
      audioUrl: "assets/audio/b10_5_sec2.mp3",
      buttonLabel: "Nghe Thầy Sáng giảng Mục 2",
      checkpoints: [
        {
          id: "poi-10-5-sec2-1",
          time: 20,
          title: "Giây 20: Công thức góc bù",
          question: "Khẳng định nào sau đây là ĐÚNG với hai góc bù nhau $\\alpha$ và $180^\\circ - \\alpha$?",
          options: [
            "$\\cos(180^\\circ - \\alpha) = \\cos \\alpha$",
            "$\\sin(180^\\circ - \\alpha) = \\sin \\alpha$",
            "$\\tan(180^\\circ - \\alpha) = \\tan \\alpha$",
            "$\\cot(180^\\circ - \\alpha) = \\cot \\alpha$"
          ],
          correctIndex: 1,
          hint: "Hãy nhớ thần chú: Sin bù (chỉ có sin bằng nhau, ba giá trị còn lại mang dấu đối).",
          explain: "Chính xác! Duy nhất $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$, còn $\\cos, \\tan, \\cot$ đều đổi dấu."
        },
        {
          id: "poi-10-5-sec2-2",
          time: 42,
          title: "Giây 42: Tính nhanh giá trị lượng giác góc tù",
          question: "Biết $\\cos 30^\\circ = \\dfrac{\\sqrt{3}}{2}$, giá trị của $\\cos 150^\\circ$ bằng bao nhiêu?",
          options: [
            "$\\cos 150^\\circ = \\dfrac{\\sqrt{3}}{2}$",
            "$\\cos 150^\\circ = -\\dfrac{\\sqrt{3}}{2}$"
          ],
          correctIndex: 1,
          hint: "Vì 150° và 30° là hai góc bù nhau (150° = 180° - 30°) nên áp dụng cos đối.",
          explain: "Chính xác! $\\cos 150^\\circ = \\cos(180^\\circ - 30^\\circ) = -\\cos 30^\\circ = -\\dfrac{\\sqrt{3}}{2}$."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Định lí góc bù & Đồ họa đối xứng trục tung Oy",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-scale-balanced"></i> [Định lí hai góc bù nhau SGK Trang 36]:</div>
              <p>Đối với hai góc bù nhau, $\\alpha$ và $180^\\circ - \\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), ta có:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; margin: 10px 0;">
                <div style="background: #eff6ff; padding: 10px; border-radius: 6px; text-align: center; border-left: 3px solid #2563eb;">
                  $$\\sin(180^\\circ - \\alpha) = \\sin \\alpha$$
                </div>
                <div style="background: #fef2f2; padding: 10px; border-radius: 6px; text-align: center; border-left: 3px solid #dc2626;">
                  $$\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$$
                </div>
                <div style="background: #fef2f2; padding: 10px; border-radius: 6px; text-align: center; border-left: 3px solid #dc2626;">
                  $$\\tan(180^\\circ - \\alpha) = -\\tan \\alpha \\quad (\\alpha \\ne 90^\\circ)$$
                </div>
                <div style="background: #fef2f2; padding: 10px; border-radius: 6px; text-align: center; border-left: 3px solid #dc2626;">
                  $$\\cot(180^\\circ - \\alpha) = -\\cot \\alpha \\quad (0^\\circ < \\alpha < 180^\\circ)$$
                </div>
              </div>
            </div>

            <!-- TikZ SVG: Hình 3.5 SGK - Tính đối xứng qua trục Oy -->
            <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
              <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
                <i class="fa-solid fa-arrows-left-right-to-line"></i> [Đồ họa TikZ - Hình 3.5 SGK]: Hai điểm M và M' đối xứng qua trục Oy
              </div>
              <div style="text-align: center;">
                <svg width="480" height="230" viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-axis-2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
                    </marker>
                  </defs>

                  <!-- Trục Ox, Oy -->
                  <line x1="30" y1="170" x2="450" y2="170" stroke="#334155" stroke-width="1.8" marker-end="url(#arr-axis-2)"/>
                  <text x="455" y="174" font-family="'Times New Roman', serif" font-size="14" font-style="italic">x</text>

                  <line x1="240" y1="190" x2="240" y2="20" stroke="#334155" stroke-width="1.8" marker-end="url(#arr-axis-2)"/>
                  <text x="245" y="18" font-family="'Times New Roman', serif" font-size="14" font-style="italic">y</text>
                  <text x="228" y="185" font-family="'Times New Roman', serif" font-size="13">O</text>

                  <!-- Nửa đường tròn tâm (240, 170), R = 110 -->
                  <path d="M 130,170 A 110,110 0 0,1 350,170" fill="none" stroke="#dc2626" stroke-width="2.2"/>
                  <text x="115" y="185" font-family="'Times New Roman', serif" font-size="13">-1</text>
                  <text x="352" y="185" font-family="'Times New Roman', serif" font-size="13">1</text>
                  <text x="245" y="55" font-family="'Times New Roman', serif" font-size="13">1</text>

                  <!-- Điểm M bên phải (góc nhọn 40°): x = 240 + 110*cos(40°) ≈ 240 + 84 = 324, y = 170 - 110*sin(40°) ≈ 170 - 71 = 99 -->
                  <line x1="240" y1="170" x2="324" y2="99" stroke="#0284c7" stroke-width="2"/>
                  <circle cx="324" cy="99" r="4.5" fill="#0284c7"/>
                  <text x="332" y="96" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#0284c7">M(x₀; y₀)</text>

                  <!-- Điểm M' bên trái (góc bù 140°): x = 240 - 84 = 156, y = 99 -->
                  <line x1="240" y1="170" x2="156" y2="99" stroke="#e11d48" stroke-width="2"/>
                  <circle cx="156" cy="99" r="4.5" fill="#e11d48"/>
                  <text x="85" y="96" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#e11d48">M'(-x₀; y₀)</text>

                  <!-- Nối ngang M' và M nét đứt (cùng tung độ y0) -->
                  <line x1="156" y1="99" x2="324" y2="99" stroke="#10b981" stroke-width="1.5" stroke-dasharray="4,4"/>
                  <text x="245" y="95" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#10b981">y₀</text>

                  <!-- Gióng xuống Ox -->
                  <line x1="156" y1="99" x2="156" y2="170" stroke="#e11d48" stroke-width="1.2" stroke-dasharray="3,3"/>
                  <text x="145" y="185" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#e11d48">-x₀</text>

                  <line x1="324" y1="99" x2="324" y2="170" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3,3"/>
                  <text x="320" y="185" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#0284c7">x₀</text>

                  <!-- Cung góc alpha và 180° - alpha -->
                  <path d="M 275,170 A 35,35 0 0,0 267,147" fill="none" stroke="#0284c7" stroke-width="1.5"/>
                  <text x="280" y="160" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#0284c7">α</text>

                  <path d="M 290,170 A 50,50 0 0,0 202,138" fill="none" stroke="#e11d48" stroke-width="1.5"/>
                  <text x="180" y="130" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#e11d48">180° - α</text>
                </svg>
              </div>
            </div>
          `,
          memoryTip: {
            title: "Mở rộng quan trọng: Hai góc phụ nhau (Hình 3.6 SGK)",
            content: "Đối với hai góc phụ nhau (tổng bằng $90^\\circ$): $\\alpha$ và $90^\\circ - \\alpha$:<br>• $\\sin(90^\\circ - \\alpha) = \\cos \\alpha$<br>• $\\cos(90^\\circ - \\alpha) = \\sin \\alpha$<br>• $\\tan(90^\\circ - \\alpha) = \\cot \\alpha$<br>• $\\cot(90^\\circ - \\alpha) = \\tan \\alpha$<br><em>Khẩu quyết ghi nhớ muôn đời: “Sin bù, phụ chéo”!</em>"
          }
        },
        {
          key: "2b",
          title: "Các hệ thức lượng giác cơ bản cần nhớ",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-square-root-variable"></i> [4 Hằng đẳng thức lượng giác cơ bản]:</div>
              <p>Với mọi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), ta luôn có:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin: 12px 0;">
                <div style="background: #ffffff; padding: 12px; border-radius: 8px; border: 1.5px solid #0284c7; text-align: center;">
                  <strong style="color: #0284c7;">(1) Định lí Pythagoras:</strong>
                  <div style="margin-top: 6px; font-size: 1.1rem; color: #1e3a8a;">$$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$$</div>
                </div>
                <div style="background: #ffffff; padding: 12px; border-radius: 8px; border: 1.5px solid #0284c7; text-align: center;">
                  <strong style="color: #0284c7;">(2) Liên hệ tan và cos:</strong>
                  <div style="margin-top: 6px; font-size: 1.1rem; color: #1e3a8a;">$$1 + \\tan^2 \\alpha = \\dfrac{1}{\\cos^2 \\alpha} \\quad (\\alpha \\ne 90^\\circ)$$</div>
                </div>
                <div style="background: #ffffff; padding: 12px; border-radius: 8px; border: 1.5px solid #0284c7; text-align: center;">
                  <strong style="color: #0284c7;">(3) Liên hệ cot và sin:</strong>
                  <div style="margin-top: 6px; font-size: 1.1rem; color: #1e3a8a;">$$1 + \\cot^2 \\alpha = \\dfrac{1}{\\sin^2 \\alpha} \\quad (0^\\circ < \\alpha < 180^\\circ)$$</div>
                </div>
                <div style="background: #ffffff; padding: 12px; border-radius: 8px; border: 1.5px solid #0284c7; text-align: center;">
                  <strong style="color: #0284c7;">(4) Tích tan và cot:</strong>
                  <div style="margin-top: 6px; font-size: 1.1rem; color: #1e3a8a;">$$\\tan \\alpha \\cdot \\cot \\alpha = 1 \\quad (\\alpha \\ne 0^\\circ, 90^\\circ, 180^\\circ)$$</div>
                </div>
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 2: Tính giá trị biểu thức khi biết một giá trị lượng giác",
            problem: "Cho góc $\\alpha$ với $90^\\circ < \\alpha < 180^\\circ$ thoả mãn $\\cos \\alpha = -\\dfrac{3}{5}$. Tính $\\sin \\alpha, \\tan \\alpha$ và $\\cot \\alpha$.",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <p>Áp dụng hệ thức $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$, ta có:</p>
              <p>$$\\sin^2 \\alpha = 1 - \\cos^2 \\alpha = 1 - \\left(-\\dfrac{3}{5}\\right)^2 = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}.$$</p>
              <p>Vì $90^\\circ < \\alpha < 180^\\circ$ (góc tù) nên $\\sin \\alpha > 0$. Do đó: $\\sin \\alpha = \\sqrt{\\dfrac{16}{25}} = \\dfrac{4}{5}$.</p>
              <p>Từ đó suy ra:</p>
              <div style="text-align: center; margin: 8px 0; color: #0284c7; font-weight: bold;">
                $$\\tan \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha} = \\dfrac{4/5}{-3/5} = -\\dfrac{4}{3}; \\qquad \\cot \\alpha = \\dfrac{1}{\\tan \\alpha} = -\\dfrac{3}{4}.$$
              </div>
            `,
            similarProblem: `
              <p><strong>Bài tập tương tự:</strong> Cho $\\sin \\alpha = \\dfrac{5}{13}$ với $90^\\circ < \\alpha < 180^\\circ$. Tính $\\cos \\alpha$ và $\\tan \\alpha$.</p>
              <p><strong>Hướng dẫn:</strong> Vì góc tù nên $\\cos \\alpha < 0$. $\\cos \\alpha = -\\sqrt{1 - \\sin^2 \\alpha} = -\\sqrt{1 - 25/169} = -\\dfrac{12}{13}$.<br>Từ đó $\\tan \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha} = -\\dfrac{5}{12}$.</p>
            `
          }
        }
      ]
    },

    // =======================================================================
    // MỤC 3. VẬN DỤNG THỰC TIỄN: ĐU QUAY KHỔNG LỒ (HÌNH 3.7 SGK)
    // =======================================================================
    {
      num: "3",
      title: "Vận dụng thực tiễn: Bài toán Đu quay khổng lồ",
      audioScript: "Mục ba, bài toán thực tiễn Vòng quay đu quay khổng lồ trang 37 sách giáo khoa. Một chiếc đu quay có bán kính 75 mét, tâm vòng quay ở độ cao 90 mét so với mặt đất, thời gian thực hiện một vòng quay trọn vẹn là 30 phút. Một người bước vào cabin ở vị trí thấp nhất, tức là cách mặt đất 15 mét. Câu hỏi đặt ra là: Sau 20 phút quay đều, người đó sẽ ở độ cao bao nhiêu mét? Bài toán này được mô hình hoá chính xác nhờ toạ độ góc lượng giác trên đường tròn. Cùng thầy xem mô hình giải chi tiết bên dưới nhé!",
      audioUrl: "assets/audio/b10_5_sec3.mp3",
      buttonLabel: "Nghe Thầy Sáng giảng Mục 3",
      checkpoints: [
        {
          id: "poi-10-5-sec3-1",
          time: 18,
          title: "Giây 18: Tốc độ góc quay",
          question: "Đu quay quay một vòng hết 30 phút. Vậy sau 20 phút quay, cabin đã quay được một góc bằng bao nhiêu độ?",
          options: [
            "Góc $180^\\circ$",
            "Góc $240^\\circ$",
            "Góc $120^\\circ$",
            "Góc $90^\\circ$"
          ],
          correctIndex: 1,
          hint: "Một vòng trọn vẹn là 360°. Tính tỉ lệ: (20 / 30) * 360°.",
          explain: "Chính xác! Góc quay là $\\dfrac{20}{30} \\times 360^\\circ = \\dfrac{2}{3} \\times 360^\\circ = 240^\\circ$."
        },
        {
          id: "poi-10-5-sec3-2",
          time: 35,
          title: "Giây 35: Kết quả độ cao",
          question: "Độ cao của cabin sau 20 phút so với mặt đất là:",
          options: [
            "$90\\text{ m}$",
            "$127{,}5\\text{ m}$",
            "$52{,}5\\text{ m}$",
            "$165\\text{ m}$"
          ],
          correctIndex: 1,
          hint: "Cabin tạo với phương ngang trục Ox một góc 30° phía trên. Độ cao = 90 + 75 * sin(30°).",
          explain: "Chính xác! Độ cao = $90 + 75 \\cdot \\sin 30^\\circ = 90 + 75 \\cdot 0{,}5 = 127{,}5\\text{ m}$."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Mô hình hoá chuyển động đu quay và tính độ cao",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-ferris-wheel"></i> [Bài toán Vận dụng SGK Trang 37]:</div>
              <p>Một chiếc đu quay có bán kính $R = 75\\text{ m}$, tâm của vòng quay ở độ cao $90\\text{ m}$ so với mặt đất. Thời gian thực hiện mỗi vòng quay là $30\\text{ phút}$.</p>
              <p>Nếu một người vào cabin tại vị trí thấp nhất của vòng quay, thì sau $20\\text{ phút}$ quay, người đó ở độ cao bao nhiêu mét?</p>
            </div>

            <!-- TikZ SVG: Hình 3.7 SGK - Mô hình Đu quay toạ độ -->
            <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
              <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
                <i class="fa-solid fa-compass-drafting"></i> [Đồ họa TikZ - Hình 3.7 SGK]: Mô hình hình học toạ độ tính độ cao đu quay
              </div>
              <div style="text-align: center;">
                <svg width="460" height="280" viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <!-- Mặt đất -->
                  <line x1="20" y1="260" x2="440" y2="260" stroke="#16a34a" stroke-width="3"/>
                  <rect x="20" y="260" width="420" height="15" fill="#dcfce7"/>
                  <text x="50" y="272" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d">MẶT ĐẤT (y = 0)</text>

                  <!-- Trụ đứng tâm O (độ cao 90m) -->
                  <!-- Scale: 1m = 1.3px. Mặt đất y=260. Tâm O tại y = 260 - 90*1.3 = 260 - 117 = 143. Bán kính R = 75m * 1.3 ≈ 98px -->
                  <line x1="220" y1="260" x2="220" y2="143" stroke="#64748b" stroke-width="3" stroke-dasharray="4,4"/>
                  <circle cx="220" cy="143" r="6" fill="#0284c7"/>
                  <text x="230" y="146" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#0284c7">O (Tâm, h = 90m)</text>

                  <!-- Trục Ox và Oy qua tâm O -->
                  <line x1="80" y1="143" x2="360" y2="143" stroke="#94a3b8" stroke-width="1.5"/>
                  <text x="365" y="147" font-family="'Times New Roman', serif" font-size="13" font-style="italic">x</text>
                  <line x1="220" y1="35" x2="220" y2="250" stroke="#94a3b8" stroke-width="1.5"/>
                  <text x="225" y="32" font-family="'Times New Roman', serif" font-size="13" font-style="italic">y</text>

                  <!-- Vòng tròn đu quay R = 98px -->
                  <circle cx="220" cy="143" r="98" fill="none" stroke="#0284c7" stroke-width="2.2"/>

                  <!-- Vị trí thấp nhất lúc vào cabin (0 phút): đáy vòng tròn (220, 241) -->
                  <circle cx="220" cy="241" r="5" fill="#dc2626"/>
                  <text x="230" y="245" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">Vị trí ban đầu (t=0, h=15m)</text>

                  <!-- Sau 20 phút quay theo chiều ngược kim đồng hồ (hoặc cùng chiều):
                       Góc quay = 240°. Xuất phát từ đáy (-90°), quay 240° -> góc hiện tại = -90° + 240° = 150° (hoặc 30° so với Ox).
                       Tọa độ: x = 220 - 98*cos(30°) ≈ 220 - 85 = 135, y = 143 - 98*sin(30°) = 143 - 49 = 94.
                  -->
                  <line x1="220" y1="143" x2="135" y2="94" stroke="#e11d48" stroke-width="2.5"/>
                  <circle cx="135" cy="94" r="6" fill="#e11d48"/>
                  <text x="45" y="90" font-family="sans-serif" font-size="12" font-weight="bold" fill="#e11d48">Vị trí sau 20 ph (Cabin)</text>

                  <!-- Gióng độ cao sang trục đo -->
                  <line x1="135" y1="94" x2="390" y2="94" stroke="#e11d48" stroke-width="1.2" stroke-dasharray="3,3"/>
                  <line x1="390" y1="94" x2="390" y2="260" stroke="#e11d48" stroke-width="2"/>
                  <polyline points="386,98 390,94 394,98" stroke="#e11d48" stroke-width="2" fill="none"/>
                  <polyline points="386,256 390,260 394,256" stroke="#e11d48" stroke-width="2" fill="none"/>
                  <text x="398" y="180" font-family="sans-serif" font-size="12" font-weight="bold" fill="#e11d48">h = 127,5 m</text>
                </svg>
              </div>
            </div>

            <div style="background: #f8fafc; border-left: 4px solid #0284c7; padding: 14px; border-radius: 6px; margin: 12px 0;">
              <h5 style="margin: 0 0 8px 0; color: #0284c7;"><i class="fa-solid fa-calculator"></i> Các bước giải toán chi tiết của ThS. Lương Thanh Sáng:</h5>
              <p><strong>Bước 1: Tính góc quay của đu quay trong 20 phút:</strong><br>Vận tốc quay đều của đu quay là: $\\omega = \\dfrac{360^\\circ}{30\\text{ phút}} = 12^\\circ/\\text{phút}$.<br>Sau 20 phút, đu quay quét được góc: $\\alpha = 12^\\circ \\times 20 = 240^\\circ$.</p>
              <p><strong>Bước 2: Xác định vị trí cabin so với tâm O:</strong><br>Xuất phát từ điểm thấp nhất (đáy), quay góc $240^\\circ$ gồm: $90^\\circ$ để lên vị trí ngang bằng tâm + $90^\\circ$ để lên đỉnh cao nhất + $60^\\circ$ nữa. Khi đó, bán kính nối tâm $O$ với cabin tạo với trục hoành nằm ngang một góc nhọn $30^\\circ$ hướng lên trên.</p>
              <p><strong>Bước 3: Tính khoảng cách thẳng đứng và độ cao so với mặt đất:</strong><br>Độ lệch độ cao so với tâm $O$ là: $\\Delta h = R \\cdot \\sin 30^\\circ = 75 \\cdot \\dfrac{1}{2} = 37{,}5\\text{ m}$.<br>Độ cao của tâm $O$ so với mặt đất là $90\\text{ m}$.<br>Vậy độ cao thực tế của cabin lúc này là:<br>$$h = 90 + \\Delta h = 90 + 37{,}5 = 127{,}5\\text{ m}.$$</p>
            </div>
          `
        }
      ]
    }
  ],

  // =========================================================================
  // PHẦN IV. CHỐT BÀI HỌC & THÔNG ĐIỆP SƯ PHẠM
  // =========================================================================
  realworldWrapup: {
    title: "PHẦN IV. CHỐT BÀI HỌC & THÔNG ĐIỆP SƯ PHẠM",
    recap: "Nửa đường tròn đơn vị là chiếc cầu nối tuyệt hảo đưa các tỉ số lượng giác góc nhọn lớp 9 vươn mình ra toàn bộ góc từ 0° đến 180°. Các em chỉ cần khắc cốt ghi tâm câu khẩu quyết của Thầy Sáng: “Sin bù, phụ chéo, nhất cả, nhị sin”.",
    formula: "\\sin(180^\\circ - \\alpha) = \\sin \\alpha, \\quad \\cos(180^\\circ - \\alpha) = -\\cos \\alpha, \\quad \\sin^2 \\alpha + \\cos^2 \\alpha = 1",
    solution: `
      <div style="background: #f0fdf4; border: 1.5px solid #16a34a; border-radius: 12px; padding: 18px; margin: 12px 0;">
        <h4 style="margin: 0 0 10px 0; color: #15803d;"><i class="fa-solid fa-graduation-cap"></i> 4 ĐIỀU THEN CHỐT CẦN NHỚ TỪ THẦY SÁNG:</h4>
        <ol style="margin: 0; padding-left: 20px; line-height: 1.8;">
          <li><strong>Điểm trên nửa đường tròn đơn vị:</strong> $\\sin \\alpha$ là tung độ $y_0$, $\\cos \\alpha$ là hoành độ $x_0$.</li>
          <li><strong>Dấu của các giá trị lượng giác:</strong> Với mọi $\\alpha \\in (0^\\circ; 180^\\circ)$ thì $\\sin \\alpha > 0$. Còn $\\cos \\alpha, \\tan \\alpha, \\cot \\alpha$ âm khi góc tù và dương khi góc nhọn.</li>
          <li><strong>Hai góc bù nhau:</strong> $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$; $\\cos, \\tan, \\cot$ đều đổi dấu.</li>
          <li><strong>Hằng đẳng thức vàng:</strong> $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ luôn đúng với mọi góc $\\alpha$.</li>
        </ol>
      </div>
    `,
    audioScript: "Nửa đường tròn đơn vị là chiếc cầu nối tuyệt hảo đưa các tỉ số lượng giác góc nhọn lớp 9 vươn mình ra toàn bộ góc từ 0 đến 180 độ. Các em chỉ cần khắc cốt ghi tâm câu khẩu quyết của Thầy Sáng: Sin bù, phụ chéo, nhất cả, nhị sin. Hãy rèn luyện thường xuyên các dạng bài tập trắc nghiệm ở phần 5 bên dưới để thành thạo tuyệt đối nhé!",
    audioUrl: "assets/audio/b10_5_wrapup.mp3",
    buttonLabel: "Nghe Thầy Sáng dặn dò"
  },

  // =========================================================================
  // PHẦN V. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN BỘ GD&ĐT 2025)
  // HOÁN VỊ ĐÁP ÁN A, B, C, D ĐA DẠNG
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN V. BÀI TẬP TRẮC NGHIỆM CỦNG CỐ KIẾN THỨC",

    // DẠNG 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (4 LỰA CHỌN - CÓ HOÁN VỊ ĐÁP ÁN)
    part1MultipleChoice: [
      {
        id: "mc-10-5-1",
        num: 1,
        prompt: "Câu 1: Cho góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$) và điểm $M(x_0; y_0)$ nằm trên nửa đường tròn đơn vị sao cho $\\widehat{xOM} = \\alpha$. Khẳng định nào sau đây là <strong>đúng</strong>?",
        options: [
          "$\\sin \\alpha = x_0$",
          "$\\sin \\alpha = y_0$",
          "$\\cos \\alpha = y_0$",
          "$\\tan \\alpha = \\dfrac{x_0}{y_0}$"
        ],
        correctIndex: 1, // Đáp án B
        solution: "Theo định nghĩa chuẩn SGK Toán 10 trang 34: $\\sin \\alpha = y_0$ (tung độ) và $\\cos \\alpha = x_0$ (hoành độ của điểm $M$). Do đó đáp án đúng là B.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Cho điểm $M(x_0; y_0)$ trên nửa đường tròn đơn vị với $\\widehat{xOM} = \\alpha$. Khẳng định nào sau đây là đúng?",
          options: [
            "$\\cos \\alpha = y_0$",
            "$\\tan \\alpha = x_0 \\cdot y_0$",
            "$\\cos \\alpha = x_0$",
            "$\\cot \\alpha = x_0 + y_0$"
          ],
          correctIndex: 2, // Đáp án C
          solution: "Theo định nghĩa, $\\cos \\alpha = x_0$ (hoành độ của điểm $M$). Chọn C."
        }
      },
      {
        id: "mc-10-5-2",
        num: 2,
        prompt: "Câu 2: Trong các khẳng định sau về góc tù $\\alpha$ ($90^\\circ < \\alpha < 180^\\circ$), khẳng định nào sau đây là <strong>sai</strong>?",
        options: [
          "$\\sin \\alpha > 0$",
          "$\\cos \\alpha < 0$",
          "$\\tan \\alpha > 0$",
          "$\\cot \\alpha < 0$"
        ],
        correctIndex: 2, // Đáp án C
        solution: "Với góc tù $\\alpha \\in (90^\\circ; 180^\\circ)$, ta có $x_0 < 0$ và $y_0 > 0$. Do đó $\\tan \\alpha = \\dfrac{y_0}{x_0} < 0$. Khẳng định $\\tan \\alpha > 0$ là sai. Chọn C.",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Dấu của $\\sin \\alpha$ và $\\cos \\alpha$ khi $\\alpha$ là góc nhọn ($0^\\circ < \\alpha < 90^\\circ$) là:",
          options: [
            "$\\sin \\alpha > 0$ và $\\cos \\alpha < 0$",
            "$\\sin \\alpha < 0$ và $\\cos \\alpha > 0$",
            "$\\sin \\alpha < 0$ và $\\cos \\alpha < 0$",
            "$\\sin \\alpha > 0$ và $\\cos \\alpha > 0$"
          ],
          correctIndex: 3, // Đáp án D
          solution: "Khi góc nhọn, cả hoành độ và tung độ của M đều dương nên $\\sin \\alpha > 0$ và $\\cos \\alpha > 0$. Chọn D."
        }
      },
      {
        id: "mc-10-5-3",
        num: 3,
        prompt: "Câu 3: Giá trị của biểu thức $P = \\sin 30^\\circ + \\cos 60^\\circ - \\sin 150^\\circ$ bằng:",
        options: [
          "$\\dfrac{1}{2}$",
          "$1$",
          "$0$",
          "$\\dfrac{\\sqrt{3}}{2}$"
        ],
        correctIndex: 0, // Đáp án A
        solution: "Ta có: $\\sin 30^\\circ = \\dfrac{1}{2}$, $\\cos 60^\\circ = \\dfrac{1}{2}$, và $\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\dfrac{1}{2}$.<br>Vậy $P = \\dfrac{1}{2} + \\dfrac{1}{2} - \\dfrac{1}{2} = \\dfrac{1}{2}$. Chọn A.",
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Giá trị của $Q = \\cos 120^\\circ + \\sin 150^\\circ$ bằng:",
          options: [
            "$1$",
            "$-1$",
            "$0$",
            "$\\dfrac{1}{2}$"
          ],
          correctIndex: 2, // Đáp án C
          solution: "$\\cos 120^\\circ = -\\cos 60^\\circ = -1/2$; $\\sin 150^\\circ = \\sin 30^\\circ = 1/2$. Do đó $Q = -1/2 + 1/2 = 0$. Chọn C."
        }
      },
      {
        id: "mc-10-5-4",
        num: 4,
        prompt: "Câu 4: Cho biết $\\cos \\alpha = -\\dfrac{1}{3}$ với $90^\\circ < \\alpha < 180^\\circ$. Giá trị của $\\sin \\alpha$ bằng:",
        options: [
          "$-\\dfrac{2\\sqrt{2}}{3}$",
          "$\\dfrac{2}{3}$",
          "$-\\dfrac{8}{9}$",
          "$\\dfrac{2\\sqrt{2}}{3}$"
        ],
        correctIndex: 3, // Đáp án D
        solution: "Áp dụng $\\sin^2 \\alpha = 1 - \\cos^2 \\alpha = 1 - \\left(-\\dfrac{1}{3}\\right)^2 = 1 - \\dfrac{1}{9} = \\dfrac{8}{9}$.<br>Vì $90^\\circ < \\alpha < 180^\\circ$ (góc tù) nên $\\sin \\alpha > 0$. Suy ra $\\sin \\alpha = \\sqrt{\\dfrac{8}{9}} = \\dfrac{2\\sqrt{2}}{3}$. Chọn D.",
        similarVariation: {
          prompt: "Câu 4 (Tương tự): Cho $\\cos \\alpha = -\\dfrac{3}{5}$ với $90^\\circ < \\alpha < 180^\\circ$. Giá trị của $\\sin \\alpha$ là:",
          options: [
            "$\\dfrac{4}{5}$",
            "$-\\dfrac{4}{5}$",
            "$\\dfrac{16}{25}$",
            "$\\dfrac{3}{5}$"
          ],
          correctIndex: 0, // Đáp án A
          solution: "$\\sin \\alpha = \\sqrt{1 - (-3/5)^2} = 4/5$. Chọn A."
        }
      },
      {
        id: "mc-10-5-5",
        num: 5,
        prompt: "Câu 5: Đẳng thức nào sau đây là <strong>sai</strong>?",
        options: [
          "$\\sin(180^\\circ - \\alpha) = \\sin \\alpha$",
          "$\\cos(180^\\circ - \\alpha) = \\cos \\alpha$",
          "$\\tan(180^\\circ - \\alpha) = -\\tan \\alpha \\quad (\\alpha \\ne 90^\\circ)$",
          "$\\cot(180^\\circ - \\alpha) = -\\cot \\alpha \\quad (0^\\circ < \\alpha < 180^\\circ)$"
        ],
        correctIndex: 1, // Đáp án B
        solution: "Theo công thức hai góc bù nhau, $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$ (chứ không phải $\\cos \\alpha$). Vậy đẳng thức ở phương án B là sai. Chọn B.",
        similarVariation: {
          prompt: "Câu 5 (Tương tự): Đẳng thức nào sau đây đúng?",
          options: [
            "$\\sin(180^\\circ - \\alpha) = -\\sin \\alpha$",
            "$\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$",
            "$\\tan(180^\\circ - \\alpha) = \\tan \\alpha$",
            "$\\cot(180^\\circ - \\alpha) = \\cot \\alpha$"
          ],
          correctIndex: 1, // Đáp án B
          solution: "Chỉ có $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$ là đúng. Chọn B."
        }
      }
    ],

    // DẠNG 2: TRẮC NGHIỆM ĐÚNG / SAI (4 Ý MỖI CÂU)
    part2TrueFalse: [
      {
        id: "tf-10-5-1",
        num: 1,
        prompt: "Câu 1: Cho góc $\\alpha$ thoả mãn $90^\\circ < \\alpha < 180^\\circ$ và $\\sin \\alpha = \\dfrac{3}{5}$. Xét tính Đúng / Sai của các mệnh đề sau:",
        items: [
          {
            id: "a",
            text: "Điểm $M$ biểu diễn góc $\\alpha$ trên nửa đường tròn đơn vị có tung độ bằng $0{,}6$.",
            isCorrect: true,
            explain: "Đúng vì $\\sin \\alpha = y_0 = \\dfrac{3}{5} = 0{,}6$."
          },
          {
            id: "b",
            text: "Giá trị của $\\cos \\alpha$ bằng $\\dfrac{4}{5}$.",
            isCorrect: false,
            explain: "Sai vì $\\alpha$ là góc tù nên $\\cos \\alpha < 0$. Đúng phải là $\\cos \\alpha = -\\sqrt{1 - (3/5)^2} = -\\dfrac{4}{5}$."
          },
          {
            id: "c",
            text: "Giá trị của $\\tan \\alpha$ bằng $-\\dfrac{3}{4}$.",
            isCorrect: true,
            explain: "Đúng vì $\\tan \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha} = \\dfrac{3/5}{-4/5} = -\\dfrac{3}{4}$."
          },
          {
            id: "d",
            text: "Giá trị của biểu thức $E = 2\\sin(180^\\circ - \\alpha) + 5\\cos(180^\\circ - \\alpha)$ bằng $5{,}2$.",
            isCorrect: true,
            explain: "Đúng vì $\\sin(180^\\circ - \\alpha) = \\sin \\alpha = \\dfrac{3}{5}$ và $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha = -\\left(-\\dfrac{4}{5}\\right) = \\dfrac{4}{5}$.<br>Khi đó $E = 2\\left(\\dfrac{3}{5}\\right) + 5\\left(\\dfrac{4}{5}\\right) = \\dfrac{6}{5} + 4 = 1{,}2 + 4 = 5{,}2$."
          }
        ]
      },
      {
        id: "tf-10-5-2",
        num: 2,
        prompt: "Câu 2: Xét tính Đúng / Sai của các đẳng thức lượng giác sau đây với mọi góc nhọn $\\alpha$ ($0^\\circ < \\alpha < 90^\\circ$):",
        items: [
          {
            id: "a",
            text: "$\\sin(90^\\circ - \\alpha) + \\cos(180^\\circ - \\alpha) = 0$.",
            isCorrect: true,
            explain: "Đúng vì $\\sin(90^\\circ - \\alpha) = \\cos \\alpha$ và $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$. Tổng của chúng bằng $\\cos \\alpha - \\cos \\alpha = 0$."
          },
          {
            id: "b",
            text: "$\\sin^2(180^\\circ - \\alpha) + \\cos^2(180^\\circ - \\alpha) = 1$.",
            isCorrect: true,
            explain: "Đúng vì với mọi góc, tổng bình phương sin và cos luôn bằng 1."
          },
          {
            id: "c",
            text: "$\\tan(180^\\circ - \\alpha) \\cdot \\cot(180^\\circ - \\alpha) = -1$.",
            isCorrect: false,
            explain: "Sai vì $\\tan(180^\\circ - \\alpha) \\cdot \\cot(180^\\circ - \\alpha) = (-\\tan \\alpha)(-\\cot \\alpha) = \\tan \\alpha \\cdot \\cot \\alpha = 1$."
          },
          {
            id: "d",
            text: "$\\cos 15^\\circ + \\cos 165^\\circ = 0$.",
            isCorrect: true,
            explain: "Đúng vì $165^\\circ = 180^\\circ - 15^\\circ \\implies \\cos 165^\\circ = -\\cos 15^\\circ \\implies \\cos 15^\\circ + \\cos 165^\\circ = 0$."
          }
        ]
      }
    ],

    // DẠNG 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (ĐIỀN ĐÁP SỐ)
    part3ShortAnswer: [
      {
        id: "sa-10-5-1",
        num: 1,
        prompt: "Câu 1: Tính giá trị của biểu thức $A = \\sin^2 10^\\circ + \\sin^2 20^\\circ + \\sin^2 70^\\circ + \\sin^2 80^\\circ$.",
        correctAnswer: "2",
        acceptedAnswers: ["2", "2.0"],
        unit: "",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Áp dụng quan hệ hai góc phụ nhau:<br>• $\\sin 80^\\circ = \\cos(90^\\circ - 80^\\circ) = \\cos 10^\\circ \\implies \\sin^2 80^\\circ = \\cos^2 10^\\circ$.<br>• $\\sin 70^\\circ = \\cos(90^\\circ - 70^\\circ) = \\cos 20^\\circ \\implies \\sin^2 70^\\circ = \\cos^2 20^\\circ$.<br>Do đó:<br>$A = (\\sin^2 10^\\circ + \\cos^2 10^\\circ) + (\\sin^2 20^\\circ + \\cos^2 20^\\circ) = 1 + 1 = 2$.<br>Đáp số: <strong>2</strong>.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Tính giá trị $B = \\cos^2 15^\\circ + \\cos^2 75^\\circ$.",
          correctAnswer: "1",
          acceptedAnswers: ["1"],
          explain: "cos 75° = sin 15° -> cos^2 15° + sin^2 15° = 1."
        }
      },
      {
        id: "sa-10-5-2",
        num: 2,
        prompt: "Câu 2: Cho góc $\\alpha$ thoả mãn $\\tan \\alpha = 3$. Tính giá trị của biểu thức $P = \\dfrac{2\\sin \\alpha - 3\\cos \\alpha}{3\\sin \\alpha + 2\\cos \\alpha}$ (kết quả viết dưới dạng số thập phân gọn nhất).",
        correctAnswer: "0.27",
        acceptedAnswers: ["0.27", "3/11", "0,27"],
        unit: "",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vì $\\tan \\alpha = 3$ xác định nên $\\cos \\alpha \\ne 0$.<br>Chia cả tử và mẫu của $P$ cho $\\cos \\alpha$, ta được:<br>$$P = \\dfrac{2\\dfrac{\\sin \\alpha}{\\cos \\alpha} - 3}{3\\dfrac{\\sin \\alpha}{\\cos \\alpha} + 2} = \\dfrac{2\\tan \\alpha - 3}{3\\tan \\alpha + 2}.$$<br>Thay $\\tan \\alpha = 3$ vào biểu thức:<br>$$P = \\dfrac{2(3) - 3}{3(3) + 2} = \\dfrac{6 - 3}{9 + 2} = \\dfrac{3}{11} \\approx 0{,}27.$$<br>Đáp số: <strong>3/11</strong> (hoặc $0{,}27$).",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cho tan α = 2. Tính (sin α + cos α) / (sin α - cos α).",
          correctAnswer: "3",
          acceptedAnswers: ["3"],
          explain: "Chia cho cos: (tan + 1)/(tan - 1) = (2 + 1)/(2 - 1) = 3."
        }
      }
    ]
  }
};

// Đồng bộ biến toàn cục tương thích
if (typeof window !== "undefined") {
  window.LESSON_10_C3_B5_DATA = LESSON_10_C3_B5_DATA;
  window.LESSON_10_5_DATA = LESSON_10_C3_B5_DATA;
  if (typeof autoInjectLesson === "function") {
    autoInjectLesson(LESSON_10_C3_B5_DATA);
  }
}
'''

with open('js/lesson-10-5-data.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("Created js/lesson-10-5-data.js successfully!")
