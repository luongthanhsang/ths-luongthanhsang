# -*- coding: utf-8 -*-
"""
Script to generate js/lesson-10-9-data.js
BÀI 9: TÍCH CỦA MỘT SỐ VỚI MỘT VECTƠ (TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
"""

content = r'''/**
 * BÀI HỌC SỐ: BÀI 9. TÍCH CỦA MỘT SỐ VỚI MỘT VECTƠ (TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - PHẦN I: Lời chào của Thầy Sáng + Nút Voice AI vàng đồng, chỉnh tốc độ
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 55 + Voice AI
 * - PHẦN III: Tiến trình bài học đa phương tiện:
 *             + Tình huống mở đầu: Đòn bẩy thăng bằng & Khối tâm M (Hình 4.20 SGK)
 *             + Mục 1: Định nghĩa tích của một vectơ với một số (Hình 4.21, 4.22, 4.23 SGK)
 *             + Mục 2: Các tính chất của phép nhân vectơ với một số & Điều kiện cùng phương (Hình 4.24, 4.26 SGK)
 *             + Mục 3: Hệ thức trung điểm và trọng tâm mở rộng (Hình 4.25 SGK)
 *             + Mục 4: Phân tích một vectơ theo hai vectơ không cùng phương & Thuyền buồm zích zắc (Hình 4.28, 4.29, 4.30 SGK)
 *             + Checkpoints POI chấm vàng tương tác tự động dừng và bật câu hỏi
 *             + Chốt kiến thức then chốt & Bảng so sánh
 * - PHẦN IV: Bài tập trắc nghiệm củng cố tương tác chuẩn cấu trúc mới Bộ GD&ĐT:
 *             + 5 câu trắc nghiệm 4 lựa chọn (Hoán vị đáp án C, A, D, B, C phong phú)
 *             + 3 câu trắc nghiệm Đúng/Sai (Đủ 4 ý a, b, c, d)
 *             + 2 câu trả lời ngắn thực tế
 *             + Tích hợp "Lời giải chi tiết ThS. Lương Thanh Sáng" & "Bài toán tương tự" đổi số tự động
 */

window.LESSON_10_C4_B9_DATA = {
  id: "10-c4-b9",
  grade: "10",
  gradeLabel: "Lớp 10",
  chapterId: "c10-4",
  chapter: "Chương IV",
  chapterTitle: "Vectơ",
  number: "Bài 9",
  title: "Tích của một vectơ với một số",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào toàn thể các em học sinh lớp 10 yêu quý! Ở hai bài học trước, các em đã làm quen với khái niệm vectơ và hai phép toán cộng, trừ vectơ. Hôm nay Thầy trò mình cùng khám phá phép toán đại số thứ ba vô cùng lợi hại: Bài 9, Tích của một vectơ với một số. Phép toán này sẽ giúp các em co giãn độ dài, đổi hướng vectơ và đặc biệt là phân tích một lực phức tạp thành hai thành phần đơn giản. Thầy chúc các em có một tiết học tràn đầy niềm say mê và hứng khởi!",
    audioScript: "Thầy Sáng chào toàn thể các em học sinh lớp 10 yêu quý! Ở hai bài học trước, các em đã làm quen với khái niệm vectơ và hai phép toán cộng, trừ vectơ. Hôm nay Thầy trò mình cùng khám phá phép toán đại số thứ ba vô cùng lợi hại: Bài 9, Tích của một vectơ với một số. Phép toán này sẽ giúp các em co giãn độ dài, đổi hướng vectơ và đặc biệt là phân tích một lực phức tạp thành hai thành phần đơn giản. Thầy chúc các em có một tiết học tràn đầy niềm say mê và hứng khởi!",
    audioUrl: "assets/audio/b10_9_welcome.mp3",
    buttonLabel: "Nghe thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 55)
  // =========================================================================
  learningGoals: [
    "Hiểu sâu sắc định nghĩa tích của một số thực $k$ với một vectơ $\\vec{a}$ trong cả hai trường hợp $k > 0$ và $k < 0$.",
    "Nắm vững các tính chất phân phối, giao hoán và điều kiện cần và đủ để hai vectơ cùng phương (tồn tại số $k$ sao cho $\\vec{a} = k\\vec{b}$).",
    "Sử dụng thành thạo hệ thức trung điểm mở rộng $\\vec{OA} + \\vec{OB} = 2\\vec{OI}$ và hệ thức trọng tâm tam giác $\\vec{OA} + \\vec{OB} + \\vec{OC} = 3\\vec{OG}$.",
    "Biết cách phân tích một vectơ bất kì theo hai vectơ không cùng phương và vận dụng vào giải quyết các bài toán vật lí như nguyên lí thuyền buồm đi ngược hướng gió."
  ],
  goalsAudioScript: "Mục tiêu bài học cần đạt: Sau bài học này, các em cần làm chủ bốn mục tiêu trọng tâm: Thứ nhất, hiểu sâu sắc định nghĩa tích của một số với một vectơ trong cả hai trường hợp số dương và số âm. Thứ hai, nắm vững các tính chất phân phối và điều kiện để hai vectơ cùng phương. Thứ ba, sử dụng thành thạo hệ thức trung điểm mở rộng và hệ thức trọng tâm tam giác. Thứ tư, biết cách phân tích một vectơ bất kì theo hai vectơ không cùng phương và ứng dụng vào giải thích nguyên lí thuyền buồm đi ngược gió.",
  goalsAudioUrl: "assets/audio/b10_9_goals.mp3",
  goalsButtonLabel: "Nghe mục tiêu bài học",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN
  // =========================================================================
  // 1. TÌNH HUỐNG DẪN NHẬP (BẬP BÊNH & KHỐI TÂM THANH ĐÒN - HÌNH 4.20 SGK)
  hook: {
    title: "TÌNH HUỐNG THỰC TẾ: ĐÒN BẨY CÂN BẰNG & BÍ MẬT THUYỀN BUỒM ĐI NGƯỢC GIÓ",
    audioScript: "Bài toán dẫn nhập: Các em có bao giờ thắc mắc tại sao một đứa trẻ có thể nhấc bổng một người lớn trên bập bênh nếu ngồi đúng vị trí? Hay trong cơ học, vị trí điểm đặt trụ đỡ để thanh đòn chịu tải cân bằng được xác định như thế nào? Và kì diệu hơn cả, tại sao những chiếc thuyền buồm cổ đại có thể di chuyển tiến về phía trước ngay cả khi gió đang thổi ngược lại? Bí mật nằm ở việc phân tích lực gió thành các vectơ thành phần. Chúng ta cùng khám phá lời giải đáp toán học ngay sau đây nhé!",
    audioUrl: "assets/audio/b10_9_hook.mp3",
    buttonLabel: "Nghe tình huống mở đầu",
    story: `
      <p>Với mỗi cặp vật đặt trên hai đầu của một thanh đòn $AB$, luôn có duy nhất một điểm $M$ thuộc đoạn thẳng $AB$ để nếu đặt trụ đỡ tại $M$ thì thanh đòn ở trạng thái cân bằng (Hình 4.20 SGK). Điểm $M$ đó chính là <strong>khối tâm</strong> của hệ hai chất điểm $A, B$ có khối lượng $m_1, m_2$.</p>
      <p>Và kì diệu hơn thế nữa, từ thời xa xưa, con người đã biết điều khiển những chiếc thuyền buồm khổng lồ đi ngược hướng gió bằng cách chạy zích zắc, nhờ vào việc phân tích lực gió tác động lên cánh buồm thành hai phương trực giao!</p>
    `,
    illustration: `
      <div class="tikz-svg-wrap" style="text-align: center; margin: 16px 0;">
        <svg viewBox="0 0 720 220" style="max-width: 680px; width: 100%; height: auto; display: block; margin: 0 auto; background: #ffffff;">
          <defs>
            <marker id="arr-b9-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
            </marker>
            <marker id="arr-b9-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
            </marker>
            <radialGradient id="sphereBlue" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#38bdf8"/>
              <stop offset="100%" stop-color="#0369a1"/>
            </radialGradient>
            <radialGradient id="sphereOrange" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#fdba74"/>
              <stop offset="100%" stop-color="#c2410c"/>
            </radialGradient>
          </defs>

          <!-- KHUNG HÌNH 1: THANH ĐÒN CÂN BẰNG & KHỐI TÂM M (HÌNH 4.20 SGK) -->
          <g transform="translate(30, 20)">
            <text x="140" y="20" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">Hình 4.20: Thanh đòn thăng bằng & Khối tâm M</text>
            
            <!-- Trụ đỡ hình tam giác màu nâu tại M -->
            <polygon points="210,150 230,110 250,150" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
            <!-- Điểm tựa M -->
            <text x="225" y="100" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">M</text>

            <!-- Mặt đất nằm ngang -->
            <line x1="20" y1="150" x2="380" y2="150" stroke="#64748b" stroke-width="2"/>

            <!-- Thanh đòn AB nằm ngang tựa trên đỉnh M -->
            <rect x="40" y="106" width="320" height="8" rx="2" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>

            <!-- Quả cầu A (nhỏ, xanh) bên trái -->
            <circle cx="70" cy="94" r="16" fill="url(#sphereBlue)" stroke="#0284c7" stroke-width="1"/>
            <text x="65" y="132" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">A</text>
            <text x="50" y="70" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" fill="#0369a1">m₁ = 2 kg</text>

            <!-- Quả cầu B (to, cam) bên phải -->
            <circle cx="330" cy="80" r="30" fill="url(#sphereOrange)" stroke="#ea580c" stroke-width="1"/>
            <text x="325" y="132" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">B</text>
            <text x="310" y="42" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" fill="#c2410c">m₂ = 4 kg</text>

            <!-- Vectơ liên hệ giữa MA và MB -->
            <line x1="230" y1="110" x2="75" y2="110" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-b9-blue)"/>
            <line x1="230" y1="110" x2="325" y2="110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-b9-red)"/>
            <text x="130" y="175" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0369a1">m₁·MA + m₂·MB = 0  ⇒  MA = -2·MB</text>
          </g>

          <!-- KHUNG HÌNH 2: NGUYÊN LÍ THUYỀN BUỒM NGƯỢC GIÓ -->
          <g transform="translate(440, 20)">
            <text x="60" y="20" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">Phân tích lực cánh buồm</text>
            <!-- Thân thuyền tượng trưng -->
            <ellipse cx="140" cy="90" rx="80" ry="24" fill="#f8fafc" stroke="#475569" stroke-width="1.8" transform="rotate(-30 140 90)"/>
            <!-- Trục sống thuyền -->
            <line x1="75" y1="125" x2="205" y2="55" stroke="#047857" stroke-width="2.5" stroke-dasharray="4,4"/>
            <text x="195" y="45" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="bold" fill="#047857">Sống thuyền</text>

            <!-- Cánh buồm cong đón gió -->
            <path d="M 110,120 Q 150,90 170,60" fill="none" stroke="#2563eb" stroke-width="3"/>
            <!-- Lực đẩy vuông góc cánh buồm F -->
            <line x1="140" y1="90" x2="185" y2="120" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-b9-red)"/>
            <text x="190" y="130" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\vec{F}</text>

            <text x="25" y="175" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Lực \\vec{F} = x·\\vec{a} + y·\\vec{b} đẩy thuyền tiến lên</text>
          </g>
        </svg>
      </div>
    `,
    question: "Đẳng thức vectơ nào thể hiện vị trí khối tâm $M$ của hai vật có khối lượng $m_1, m_2$ đặt tại hai đầu thanh đòn $A, B$?",
    bridge: "Hãy cùng Thầy Sáng bước vào tìm hiểu Định nghĩa phép nhân vectơ với một số ngay sau đây!"
  },

  // 2. CÁC MỤC LÝ THUYẾT BÀI HỌC (SECTIONS)
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1. ĐỊNH NGHĨA TÍCH CỦA MỘT VECTƠ VỚI MỘT SỐ
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "Định nghĩa tích của một vectơ với một số",
      audioScript: "Mục một, Định nghĩa tích của một vectơ với một số: Cho số thực k và vectơ a. Tích của k với vectơ a là một vectơ kí hiệu là k a. Độ dài của k a bằng giá trị tuyệt đối của k nhân với độ dài vectơ a. Về hướng, nếu k dương thì k a cùng hướng với a; nếu k âm thì k a ngược hướng với a. Đặc biệt, nếu k bằng không hoặc vectơ a là vectơ không thì tích k a chính là vectơ không.",
      audioUrl: "assets/audio/b10_9_sec1.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-9-sec1-1",
          time: 15,
          title: "Giây 15: Độ dài và hướng của vectơ k·a",
          question: "Cho vectơ $\\vec{a} \\ne \\vec{0}$ và số thực $k < 0$. Vectơ $k\\vec{a}$ có đặc điểm gì?",
          options: [
            "Cùng hướng với $\\vec{a}$ và độ dài bằng $k|\\vec{a}|$",
            "Ngược hướng với $\\vec{a}$ và độ dài bằng $|k||\\vec{a}|$",
            "Ngược hướng với $\\vec{a}$ và độ dài bằng $-|\\vec{a}|$",
            "Cùng phương nhưng luôn có độ dài bằng $0$"
          ],
          correctIndex: 1, // B
          hint: "Nhớ quy tắc: $k$ âm thì ngược hướng, và độ dài là số không âm $|k|\\cdot |\\vec{a}|$.",
          explain: "Chính xác! SGK trang 56 quy định: Với $k < 0$, vectơ $k\\vec{a}$ ngược hướng với $\\vec{a}$ và có độ dài bằng $|k||\\vec{a}| = (-k)|\\vec{a}|$."
        },
        {
          id: "poi-10-9-sec1-2",
          time: 25,
          title: "Giây 25: Trường hợp đặc biệt",
          question: "Tích $k\\vec{a} = \\vec{0}$ khi và chỉ khi:",
          options: [
            "$k = 0$ và $\\vec{a} = \\vec{0}$",
            "$k = 0$ hoặc $\\vec{a} = \\vec{0}$",
            "$k = 1$ hoặc $\\vec{a} = \\vec{0}$",
            "$k = -1$ và $\\vec{a} \\ne \\vec{0}$"
          ],
          correctIndex: 1, // B
          hint: "Tương tự như phép nhân số thực: tích bằng không khi có ít nhất một thừa số bằng không.",
          explain: "Rất chuẩn! Ta quy ước $k\\vec{a} = \\vec{0} \\iff k = 0$ hoặc $\\vec{a} = \\vec{0}$."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Định nghĩa tích của vectơ với số thực (SGK trang 55 - 56)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 10 - Trang 55 & 56:</div>
              <p>Cho số thực $k$ và một vectơ $\\vec{a}$. Tích của số $k$ với vectơ $\\vec{a}$ là một vectơ, kí hiệu là $k\\vec{a}$.</p>
              <ul class="sgk-box-list">
                <li><strong>Về độ dài:</strong> $|k\\vec{a}| = |k| \\cdot |\\vec{a}|$.</li>
                <li><strong>Về hướng:</strong>
                  <ul>
                    <li>Nếu $k > 0$, vectơ $k\\vec{a}$ <strong>cùng hướng</strong> với vectơ $\\vec{a}$.</li>
                    <li>Nếu $k < 0$ và $\\vec{a} \\ne \\vec{0}$, vectơ $k\\vec{a}$ <strong>ngược hướng</strong> với vectơ $\\vec{a}$.</li>
                  </ul>
                </li>
                <li><strong>Quy ước đặc biệt:</strong> $0\\vec{a} = \\vec{0}$ và $k\\vec{0} = \\vec{0}$.</li>
              </ul>
            </div>

            <!-- TikZ SVG Minh họa các vectơ k*a trên lưới ô vuông (Hình 4.21 & 4.23 SGK) -->
            <div class="tikz-svg-card" style="margin-top: 16px;">
              <div class="tikz-svg-title"><i class="fa-solid fa-grid-2"></i> Trực quan hoá trên lưới ô vuông: Các vectơ $\\frac{1}{2}\\vec{a}, \\vec{a}, \\frac{3}{2}\\vec{a}, -2\\vec{a}$ (Hình 4.21 & 4.23 SGK)</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="560" height="180" viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-grid-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                    </marker>
                    <marker id="arr-grid-red" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                    </marker>
                    <pattern id="grid-b9" width="30" height="30" patternUnits="userSpaceOnUse">
                      <rect width="30" height="30" fill="none" stroke="#e2e8f0" stroke-width="1"/>
                    </pattern>
                  </defs>

                  <!-- Khung lưới bên trái: k > 0 (Hình 4.21) -->
                  <g transform="translate(10, 10)">
                    <rect x="0" y="0" width="240" height="150" fill="url(#grid-b9)" stroke="#cbd5e1" stroke-width="1.5"/>
                    <text x="10" y="20" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="bold" fill="#0369a1">Hình 4.21: k > 0 (Cùng hướng)</text>

                    <!-- Vectơ 1/2 a (dx=30, dy=-30) -->
                    <line x1="15" y1="135" x2="42" y2="108" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-grid-blue)"/>
                    <text x="35" y="130" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0284c7">\\frac{1}{2}\\vec{a}</text>

                    <!-- Vectơ a (dx=60, dy=-60) -->
                    <line x1="75" y1="135" x2="132" y2="78" stroke="#0284c7" stroke-width="3" marker-end="url(#arr-grid-blue)"/>
                    <text x="110" y="115" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">\\vec{a}</text>

                    <!-- Vectơ 3/2 a (dx=90, dy=-90) -->
                    <line x1="135" y1="135" x2="222" y2="48" stroke="#0284c7" stroke-width="3" marker-end="url(#arr-grid-blue)"/>
                    <text x="180" y="105" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">\\frac{3}{2}\\vec{a}</text>
                  </g>

                  <!-- Khung lưới bên phải: k < 0 (Hình 4.23) -->
                  <g transform="translate(290, 10)">
                    <rect x="0" y="0" width="240" height="150" fill="url(#grid-b9)" stroke="#cbd5e1" stroke-width="1.5"/>
                    <text x="10" y="20" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Hình 4.23: k < 0 (Ngược hướng)</text>

                    <!-- Vectơ a làm chuẩn -->
                    <line x1="15" y1="135" x2="72" y2="78" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-grid-blue)"/>
                    <text x="35" y="100" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0284c7">\\vec{a}</text>

                    <!-- Vectơ -2a (hướng ngược lại: dx=-120, dy=120) -->
                    <line x1="210" y1="15" x2="94" y2="131" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-grid-red)"/>
                    <text x="165" y="65" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">-2\\vec{a}</text>

                    <!-- Vectơ -3/2 a -->
                    <line x1="225" y1="45" x2="139" y2="131" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-grid-red)"/>
                    <text x="195" y="100" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">-\\frac{3}{2}\\vec{a}</text>
                  </g>
                </svg>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2. CÁC TÍNH CHẤT CỦA PHÉP NHÂN VECTƠ VỚI MỘT SỐ
    // -----------------------------------------------------------------------
    {
      num: "2",
      title: "Các tính chất của phép nhân vectơ với một số và điều kiện cùng phương",
      audioScript: "Mục hai, Các tính chất cơ bản và điều kiện cùng phương: Phép nhân vectơ với một số có đầy đủ các tính chất phân phối quen thuộc đối với phép cộng vectơ và phép cộng số thực. Đặc biệt, hai vectơ a và b, với b khác vectơ không, cùng phương khi và chỉ khi tồn tại một số thực k sao cho vectơ a bằng k lần vectơ b. Đây chính là chìa khoá vàng để chứng minh ba điểm thẳng hàng trong hình học.",
      audioUrl: "assets/audio/b10_9_sec2.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-9-sec2-1",
          time: 12,
          title: "Giây 12: Tính chất phân phối",
          question: "Đẳng thức nào sau đây thể hiện tính chất phân phối của phép nhân vectơ với một số?",
          options: [
            "$k(\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b}$",
            "$k(\\vec{a} + \\vec{b}) = k\\vec{a} + \\vec{b}$",
            "$k(\\vec{a} + \\vec{b}) = \\vec{a} + k\\vec{b}$",
            "$k(\\vec{a} + \\vec{b}) = k^2(\\vec{a} + \\vec{b})$"
          ],
          correctIndex: 0, // A
          hint: "Nhân số $k$ vào từng số hạng vectơ bên trong dấu ngoặc.",
          explain: "Rất tốt! Tính chất phân phối đối với phép cộng vectơ: $k(\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b}$."
        },
        {
          id: "poi-10-9-sec2-2",
          time: 22,
          title: "Giây 22: Điều kiện hai vectơ cùng phương",
          question: "Điều kiện cần và đủ để hai vectơ $\\vec{a}$ và $\\vec{b}$ (với $\\vec{b} \\ne \\vec{0}$) cùng phương là:",
          options: [
            "Tồn tại số thực $k$ sao cho $\\vec{a} = k\\vec{b}$",
            "$|\\vec{a}| = |\\vec{b}|$",
            "$\\vec{a} + \\vec{b} = \\vec{0}$",
            "$\\vec{a}$ và $\\vec{b}$ có cùng điểm đầu"
          ],
          correctIndex: 0, // A
          hint: "Ví dụ 1 SGK trang 56: Hai vectơ cùng phương khi vectơ này bằng k lần vectơ kia.",
          explain: "Chính xác tuyệt đối! Định lí SGK trang 56: Hai vectơ $\\vec{a}$ và $\\vec{b}$ ($\\vec{b} \\ne \\vec{0}$) cùng phương khi và chỉ khi tồn tại số thực $k$ để $\\vec{a} = k\\vec{b}$."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Bảng tính chất đại số (SGK trang 57)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 10 - Trang 57:</div>
              <p>Với hai vectơ $\\vec{a}, \\vec{b}$ và hai số thực $k, t$, ta luôn có:</p>
              <ul class="sgk-box-list">
                <li>$k(t\\vec{a}) = (kt)\\vec{a}$;</li>
                <li>$(k + t)\\vec{a} = k\\vec{a} + t\\vec{a}$;</li>
                <li>$k(\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b}$;</li>
                <li>$k(\\vec{a} - \\vec{b}) = k\\vec{a} - k\\vec{b}$;</li>
                <li>$1\\vec{a} = \\vec{a}$ và $(-1)\\vec{a} = -\\vec{a}$.</li>
              </ul>
            </div>

            <!-- TikZ SVG Trọng tâm tam giác và trung tuyến (Hình 4.24 SGK) -->
            <div class="tikz-svg-card" style="margin-top: 16px;">
              <div class="tikz-svg-title"><i class="fa-solid fa-shapes"></i> Minh họa Hình 4.24 SGK: Hệ thức vectơ trọng tâm và đường trung bình</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="420" height="200" viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-med-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                    </marker>
                    <marker id="arr-med-red" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                    </marker>
                  </defs>

                  <!-- Tam giác ABC -->
                  <polygon points="210,25 50,165 370,165" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
                  <!-- Đỉnh A, B, C -->
                  <text x="205" y="18" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">A</text>
                  <text x="35" y="175" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">B</text>
                  <text x="375" y="175" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">C</text>

                  <!-- Trung điểm M của BC -->
                  <circle cx="210" cy="165" r="4" fill="#0284c7"/>
                  <text x="205" y="185" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0284c7">M</text>

                  <!-- Trung điểm N của AC (A(210,25), C(370,165) -> N(290, 95)) -->
                  <circle cx="290" cy="95" r="4" fill="#0284c7"/>
                  <text x="300" y="95" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0284c7">N</text>

                  <!-- Đoạn nối MN (Đường trung bình) -->
                  <line x1="210" y1="165" x2="290" y2="95" stroke="#047857" stroke-width="2"/>

                  <!-- Trung tuyến AM và BN cắt nhau tại trọng tâm G (210, 118) -->
                  <line x1="210" y1="25" x2="210" y2="165" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
                  <line x1="50" y1="165" x2="290" y2="95" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
                  <circle cx="210" cy="118.3" r="4.5" fill="#dc2626"/>
                  <text x="195" y="115" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">G</text>

                  <!-- Nhãn hệ thức vectơ -->
                  <text x="70" y="60" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\vec{GA} = -2\\vec{GM}</text>
                  <text x="240" y="150" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#047857">\\vec{MN} = -\\frac{1}{2}\\vec{AB}</text>
                </svg>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3. HỆ THỨC TRUNG ĐIỂM VÀ TRỌNG TÂM MỞ RỘNG
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "Hệ thức trung điểm và trọng tâm mở rộng (SGK trang 57)",
      audioScript: "Mục ba, Hệ thức trung điểm và trọng tâm mở rộng: Nếu I là trung điểm của đoạn thẳng AB thì với mọi điểm O tuỳ ý, vectơ OA cộng vectơ OB bằng hai lần vectơ OI. Tương tự, nếu G là trọng tâm của tam giác ABC thì với mọi điểm O, vectơ OA cộng vectơ OB cộng vectơ OC bằng ba lần vectơ OG. Hai hệ thức này được sử dụng liên tục trong các đề thi tuyển sinh và thi học sinh giỏi.",
      audioUrl: "assets/audio/b10_9_sec3.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-9-sec3-1",
          time: 14,
          title: "Giây 14: Hệ thức trung điểm mở rộng",
          question: "Cho đoạn thẳng $AB$ có trung điểm $I$. Với điểm $O$ bất kì, hệ thức nào sau đây luôn ĐÚNG?",
          options: [
            "$\\vec{OA} + \\vec{OB} = \\vec{OI}$",
            "$\\vec{OA} + \\vec{OB} = 2\\vec{OI}$",
            "$\\vec{OA} + \\vec{OB} = \\frac{1}{2}\\vec{OI}$",
            "$\\vec{OA} - \\vec{OB} = 2\\vec{OI}$"
          ],
          correctIndex: 1, // B
          hint: "Quy tắc chèn điểm $I$: $\\vec{OA} + \\vec{OB} = (\\vec{OI} + \\vec{IA}) + (\\vec{OI} + \\vec{IB}) = 2\\vec{OI} + \\vec{0}$.",
          explain: "Rất chuẩn! Ví dụ 2 SGK trang 57: Với $I$ là trung điểm $AB$, với mọi điểm $O$ ta luôn có $\\vec{OA} + \\vec{OB} = 2\\vec{OI}$."
        },
        {
          id: "poi-10-9-sec3-2",
          time: 24,
          title: "Giây 24: Hệ thức trọng tâm mở rộng",
          question: "Cho tam giác $ABC$ có trọng tâm $G$. Với điểm $M$ bất kì trong mặt phẳng, ta có:",
          options: [
            "$\\vec{MA} + \\vec{MB} + \\vec{MC} = \\vec{0}$",
            "$\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$",
            "$\\vec{MA} + \\vec{MB} + \\vec{MC} = \\frac{1}{3}\\vec{MG}$",
            "$\\vec{MA} + \\vec{MB} + \\vec{MC} = 2\\vec{MG}$"
          ],
          correctIndex: 1, // B
          hint: "Luyện tập 2 SGK trang 57: Tổng 3 vectơ từ một điểm đến 3 đỉnh bằng 3 lần vectơ nối tới trọng tâm.",
          explain: "Chính xác! Luyện tập 2 SGK trang 57: Với mọi điểm $M$, $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Hai hệ thức nền tảng trong hình học vectơ",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #eff6ff; border-left-color: #2563eb;">
              <div class="sgk-box-tag" style="color: #1d4ed8;"><i class="fa-solid fa-star"></i> Hai hệ thức mở rộng then chốt (SGK trang 57):</div>
              <ul class="sgk-box-list" style="color: #1e3a8a;">
                <li><strong>Hệ thức trung điểm mở rộng:</strong> Điểm $I$ là trung điểm của đoạn thẳng $AB$ khi và chỉ khi với mọi điểm $O$, ta có:
                  <div style="text-align: center; margin: 8px 0; font-size: 1.15rem; font-weight: bold; color: #1e3a8a;">
                    $$\\vec{OA} + \\vec{OB} = 2\\vec{OI} \\iff \\vec{OI} = \\frac{1}{2}(\\vec{OA} + \\vec{OB})$$
                  </div>
                </li>
                <li><strong>Hệ thức trọng tâm mở rộng:</strong> Điểm $G$ là trọng tâm của tam giác $ABC$ khi và chỉ khi với mọi điểm $O$, ta có:
                  <div style="text-align: center; margin: 8px 0; font-size: 1.15rem; font-weight: bold; color: #1e3a8a;">
                    $$\\vec{OA} + \\vec{OB} + \\vec{OC} = 3\\vec{OG} \\iff \\vec{OG} = \\frac{1}{3}(\\vec{OA} + \\vec{OB} + \\vec{OC})$$
                  </div>
                </li>
              </ul>
            </div>

            <!-- Khung Mẹo nhớ của Thầy Sáng -->
            <div class="memory-tip-box" style="margin-top: 16px; background: #fffbeb; border: 1px solid #fde68a; border-left: 5px solid #f59e0b; padding: 14px 18px; border-radius: 8px;">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                <i class="fa-solid fa-lightbulb" style="color: #d97706; font-size: 1.3rem;"></i>
                <strong style="color: #92400e; font-size: 1.05rem;">Mẹo nhớ khắc sâu của Thầy Sáng:</strong>
              </div>
              <p style="margin: 0; color: #78350f; line-height: 1.6;">
                - <em>Đoạn thẳng có 2 đầu ($A, B$) $\\rightarrow$ Hệ số là 2:</em> $\\vec{OA} + \\vec{OB} = 2\\vec{OI}$.<br>
                - <em>Tam giác có 3 đỉnh ($A, B, C$) $\\rightarrow$ Hệ số là 3:</em> $\\vec{OA} + \\vec{OB} + \\vec{OC} = 3\\vec{OG}$.<br>
                Hệ số bên vế phải luôn đúng bằng số điểm được cộng ở vế trái!
              </p>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4. PHÂN TÍCH MỘT VECTƠ THEO HAI VECTƠ KHÔNG CÙNG PHƯƠNG
    // -----------------------------------------------------------------------
    {
      num: "4",
      title: "Phân tích một vectơ theo hai vectơ không cùng phương và ứng dụng thực tiễn",
      audioScript: "Mục bốn, Phân tích một vectơ và ứng dụng thuyền buồm: Cho hai vectơ không cùng phương a và b. Khi đó mọi vectơ u bất kì trong mặt phẳng đều có thể biểu diễn duy nhất dưới dạng u bằng x a cộng y b. Nhờ định lí phân tích này, lực đẩy của gió vào cánh buồm được tách thành hai thành phần vuông góc, giúp đẩy con thuyền lướt đi zích zắc ngược dòng gió một cách ngoạn mục.",
      audioUrl: "assets/audio/b10_9_sec4.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-9-sec4-1",
          time: 14,
          title: "Giây 14: Tính duy nhất của biểu diễn",
          question: "Cho hai vectơ không cùng phương $\\vec{a}$ và $\\vec{b}$. Với mỗi vectơ $\\vec{u}$, tồn tại bao nhiêu cặp số thực $(x; y)$ sao cho $\\vec{u} = x\\vec{a} + y\\vec{b}$?",
          options: [
            "Vô số cặp số $(x; y)$",
            "Duy nhất một cặp số $(x; y)$",
            "Không tồn tại nếu $\\vec{u} = \\vec{0}$",
            "Có đúng hai cặp số $(x; y)$"
          ],
          correctIndex: 1, // B
          hint: "Định lí SGK trang 57: Mọi vectơ u đều biểu thị được MỘT CÁCH DUY NHẤT.",
          explain: "Chính xác! Chú ý SGK trang 57: Cho hai vectơ không cùng phương $\\vec{a}, \\vec{b}$, mọi vectơ $\\vec{u}$ đều biểu thị được MỘT CÁCH DUY NHẤT dưới dạng $\\vec{u} = x\\vec{a} + y\\vec{b}$."
        },
        {
          id: "poi-10-9-sec4-2",
          time: 25,
          title: "Giây 25: Ứng dụng phân tích vectơ",
          question: "Cho hình bình hành $ABCD$, $M$ là trung điểm của cạnh $BC$. Phân tích vectơ $\\vec{AM}$ theo hai vectơ $\\vec{AB}$ và $\\vec{AD}$ ta được:",
          options: [
            "$\\vec{AM} = \\vec{AB} + \\vec{AD}$",
            "$\\vec{AM} = \\vec{AB} + \\frac{1}{2}\\vec{AD}$",
            "$\\vec{AM} = \\frac{1}{2}\\vec{AB} + \\vec{AD}$",
            "$\\vec{AM} = 2\\vec{AB} + \\vec{AD}$"
          ],
          correctIndex: 1, // B
          hint: "Bài tập 4.11 SGK: $\\vec{AM} = \\vec{AB} + \\vec{BM} = \\vec{AB} + \\frac{1}{2}\\vec{BC} = \\vec{AB} + \\frac{1}{2}\\vec{AD}$.",
          explain: "Rất xuất sắc! Vì $M$ là trung điểm $BC$ nên $\\vec{BM} = \\frac{1}{2}\\vec{BC} = \\frac{1}{2}\\vec{AD}$. Do đó $\\vec{AM} = \\vec{AB} + \\vec{BM} = \\vec{AB} + \\frac{1}{2}\\vec{AD}$."
        }
      ],
      subsections: [
        {
          key: "4a",
          title: "Định lí phân tích một vectơ (SGK trang 57)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 10 - Trang 57:</div>
              <p>Cho hai vectơ không cùng phương $\\vec{a}$ và $\\vec{b}$. Khi đó, mọi vectơ $\\vec{u}$ đều biểu thị (phân tích) được một cách duy nhất theo hai vectơ $\\vec{a}, \\vec{b}$, nghĩa là có <strong>duy nhất</strong> cặp số thực $(x; y)$ sao cho:</p>
              <div style="text-align: center; margin: 10px 0; font-size: 1.2rem; color: #1e3a8a; font-weight: bold;">
                $$\\vec{u} = x\\vec{a} + y\\vec{b}$$
              </div>
            </div>

            <!-- TikZ SVG Minh họa Hình 4.28 SGK: Phân tích vectơ u theo a và b -->
            <div class="tikz-svg-card" style="margin-top: 16px;">
              <div class="tikz-svg-title"><i class="fa-solid fa-compass-drafting"></i> Minh họa Hình 4.28 SGK: Dựng hình bình hành phân tích vectơ</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="460" height="200" viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-dec-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                    </marker>
                    <marker id="arr-dec-red" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                    </marker>
                    <marker id="arr-dec-green" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/>
                    </marker>
                  </defs>

                  <!-- Gốc toạ độ O (chọn tại 120, 150) -->
                  <circle cx="120" cy="150" r="4.5" fill="#0f172a"/>
                  <text x="105" y="165" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">O</text>

                  <!-- Trục cơ sở a (hướng ngang chếch nhẹ: 120,150 -> 220,150) -->
                  <line x1="120" y1="150" x2="215" y2="150" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-dec-blue)"/>
                  <text x="170" y="170" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">\\vec{a}</text>

                  <!-- Trục cơ sở b (hướng xiên lên trái: 120,150 -> 60,80) -->
                  <line x1="120" y1="150" x2="65" y2="85" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-dec-green)"/>
                  <text x="75" y="115" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#16a34a">\\vec{b}</text>

                  <!-- Thành phần x*a (120,150 -> 320,150: x=2) -->
                  <line x1="120" y1="150" x2="315" y2="150" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,4"/>
                  <circle cx="320" cy="150" r="3.5" fill="#0284c7"/>
                  <text x="270" y="140" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0284c7">x\\vec{a}</text>

                  <!-- Thành phần y*b (120,150 -> 30,45: y=1.5) -->
                  <line x1="120" y1="150" x2="33" y2="48" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
                  <circle cx="30" cy="45" r="3.5" fill="#16a34a"/>
                  <text x="45" y="65" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#16a34a">y\\vec{b}</text>

                  <!-- Đường dóng song song hoàn thành hình bình hành -->
                  <line x1="320" y1="150" x2="230" y2="45" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
                  <line x1="30" y1="45" x2="230" y2="45" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>

                  <!-- Vectơ u = x*a + y*b (đường chéo đỏ: 120,150 -> 230,45) -->
                  <line x1="120" y1="150" x2="225" y2="50" stroke="#dc2626" stroke-width="3.5" marker-end="url(#arr-dec-red)"/>
                  <circle cx="230" cy="45" r="4.5" fill="#dc2626"/>
                  <text x="180" y="85" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">\\vec{u} = x\\vec{a} + y\\vec{b}</text>
                </svg>
              </div>
            </div>
          `
        }
      ]
    }
  ],

  // =========================================================================
  // TỔNG KẾT & CHỐT BÀI HỌC CỦA THẦY SÁNG
  // =========================================================================
  realworldWrapup: {
    title: "TỔNG KẾT BÀI HỌC & GIẢI QUYẾT BÀI TOÁN KHỐI TÂM THỰC TẾ",
    recap: "Phép nhân vectơ với một số giúp liên kết chặt chẽ giữa đại số số học và hình học hướng. Từ việc tính khối tâm hệ chất điểm đến phân tích lực của thuyền buồm ngược gió, vectơ là ngôn ngữ chuẩn mực của vật lí và kĩ thuật hiện đại.",
    audioScript: "Chốt bài học: Như vậy, qua bài học số 9, các em đã trang bị thêm một công cụ đại số hình học cực kì mạnh mẽ. Nhớ kĩ: nhân với số dương giữ nguyên hướng, nhân với số âm đảo ngược hướng, độ dài nhân với trị tuyệt đối của k. Hai hệ thức mở rộng trung điểm, trọng tâm và định lí phân tích vectơ sẽ đồng hành cùng các em suốt những năm cấp ba. Chúc các em luôn tự tin làm chủ môn Toán cùng Thầy Sáng!",
    audioUrl: "assets/audio/b10_9_wrapup.mp3",
    buttonLabel: "Nghe Thầy Sáng chốt bài học"
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2025 BỘ GD&ĐT)
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC BỘ GD&ĐT)",
    // -----------------------------------------------------------------------
    // DẠNG 1: 5 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN (HOÁN VỊ ĐÁP ÁN: C, A, D, B, C)
    // -----------------------------------------------------------------------
    part1MultipleChoice: [
      {
        id: "mc-10-9-1",
        num: 1,
        level: "Nhận biết",
        prompt: "Cho vectơ $\\vec{a} \\ne \\vec{0}$ có độ dài $|\\vec{a}| = 4$. Độ dài của vectơ $\\vec{u} = -3\\vec{a}$ bằng bao nhiêu?",
        options: [
          "$-12$",
          "$1$",
          "$12$",
          "$7$"
        ],
        correctIndex: 2, // C
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo định nghĩa độ dài của tích vectơ với một số:<br>$$|\\vec{u}| = |-3\\vec{a}| = |-3| \\cdot |\\vec{a}| = 3 \\times 4 = 12.$$<br>&rArr; <strong>Chọn đáp án C.</strong>",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Cho $|\\vec{a}| = 5$. Tính độ dài của vectơ $\\vec{v} = -2\\vec{a}$.",
          options: ["$-10$", "$10$", "$3$", "$7$"],
          correctIndex: 1, // B (10)
          solution: "$|-2\\vec{a}| = 2 \\times 5 = 10$."
        }
      },
      {
        id: "mc-10-9-2",
        num: 2,
        level: "Nhận biết",
        prompt: "Cho đoạn thẳng $AB$ có trung điểm $I$. Khẳng định nào sau đây là khẳng định ĐÚNG?",
        options: [
          "$\\vec{IA} + \\vec{IB} = \\vec{0}$ và $\\vec{AB} = 2\\vec{IB}$",
          "$\\vec{IA} = \\vec{IB}$",
          "$\\vec{AB} = -2\\vec{IA}$",
          "$\\vec{AI} = -\\vec{IB}$"
        ],
        correctIndex: 0, // A
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vì $I$ là trung điểm của $AB$ nên hai vectơ $\\vec{IA}$ và $\\vec{IB}$ là hai vectơ đối nhau, do đó $\\vec{IA} + \\vec{IB} = \\vec{0}$.<br>Mặt khác, $\\vec{AB}$ và $\\vec{IB}$ cùng hướng và $AB = 2 IB$, do đó $\\vec{AB} = 2\\vec{IB}$.<br>&rArr; <strong>Chọn đáp án A.</strong>",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cho đoạn thẳng $AB$ có trung điểm $M$. Vectơ $\\vec{MA}$ biểu diễn theo $\\vec{AB}$ là:",
          options: ["$\\vec{MA} = \\frac{1}{2}\\vec{AB}$", "$\\vec{MA} = -\\frac{1}{2}\\vec{AB}$", "$\\vec{MA} = 2\\vec{AB}$", "$\\vec{MA} = -2\\vec{AB}$"],
          correctIndex: 1, // B (-1/2 AB)
          solution: "Vì MA ngược hướng AB và MA = 1/2 AB nên $\\vec{MA} = -\\frac{1}{2}\\vec{AB}$."
        }
      },
      {
        id: "mc-10-9-3",
        num: 3,
        level: "Thông hiểu",
        prompt: "Cho tam giác $ABC$ có trọng tâm $G$ và $M$ là trung điểm của $BC$. Khẳng định nào sau đây là khẳng định SAI?",
        options: [
          "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$",
          "$\\vec{AG} = \\frac{2}{3}\\vec{AM}$",
          "$\\vec{GA} = -2\\vec{GM}$",
          "$\\vec{AM} = 3\\vec{MG}$"
        ],
        correctIndex: 3, // D
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Ta có trọng tâm $G$ chia trung tuyến $AM$ theo tỉ lệ $AG = \\frac{2}{3}AM$ và $GM = \\frac{1}{3}AM$.<br>Do đó $\\vec{AM}$ và $\\vec{GM}$ cùng hướng, độ dài $AM = 3 GM \\implies \\vec{AM} = 3\\vec{GM}$.<br>Vì $\\vec{MG} = -\\vec{GM}$ nên $\\vec{AM} = -3\\vec{MG}$. Phát biểu $\\vec{AM} = 3\\vec{MG}$ là SAI.<br>&rArr; <strong>Chọn đáp án D.</strong>",
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Cho $G$ là trọng tâm $\\triangle ABC$, $M$ là trung điểm $BC$. Hệ thức nào sau đây ĐÚNG?",
          options: ["$\\vec{GM} = \\frac{1}{3}\\vec{AM}$", "$\\vec{GM} = -\\frac{1}{3}\\vec{AM}$", "$\\vec{GM} = 2\\vec{GA}$", "$\\vec{GM} = -2\\vec{GA}$"],
          correctIndex: 0, // A
          solution: "$\\vec{GM}$ cùng hướng $\\vec{AM}$ và bằng 1/3 độ dài nên $\\vec{GM} = \\frac{1}{3}\\vec{AM}$."
        }
      },
      {
        id: "mc-10-9-4",
        num: 4,
        level: "Thông hiểu",
        prompt: "Cho hình bình hành $ABCD$. Đẳng thức nào sau đây biểu diễn đúng vectơ $\\vec{AC}$ theo hai vectơ cạnh $\\vec{AB}$ và $\\vec{AD}$?",
        options: [
          "$\\vec{AC} = \\vec{AB} - \\vec{AD}$",
          "$\\vec{AC} = \\vec{AB} + \\vec{AD}$",
          "$\\vec{AC} = 2\\vec{AB} + \\vec{AD}$",
          "$\\vec{AC} = \\frac{1}{2}(\\vec{AB} + \\vec{AD})$"
        ],
        correctIndex: 1, // B
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo quy tắc hình bình hành: đường chéo $\\vec{AC}$ xuất phát từ đỉnh $A$ bằng tổng hai vectơ cạnh $\\vec{AB}$ và $\\vec{AD}$:<br>$$\\vec{AC} = \\vec{AB} + \\vec{AD}.$$<br>&rArr; <strong>Chọn đáp án B.</strong>",
        similarVariation: {
          prompt: "Câu 4 (Tương tự): Cho hình bình hành $ABCD$ tâm $O$. Vectơ $\\vec{AO}$ bằng:",
          options: ["$\\vec{AB} + \\vec{AD}$", "$\\frac{1}{2}(\\vec{AB} + \\vec{AD})$", "$\\vec{AB} - \\vec{AD}$", "$2(\\vec{AB} + \\vec{AD})$"],
          correctIndex: 1, // B
          solution: "$\\vec{AO} = \\frac{1}{2}\\vec{AC} = \\frac{1}{2}(\\vec{AB} + \\vec{AD})$."
        }
      },
      {
        id: "mc-10-9-5",
        num: 5,
        level: "Vận dụng",
        prompt: "Cho tam giác $ABC$. Gọi $M$ là điểm trên cạnh $BC$ sao cho $MB = 2MC$. Đẳng thức phân tích vectơ $\\vec{AM}$ theo $\\vec{AB}$ và $\\vec{AC}$ là:",
        options: [
          "$\\vec{AM} = \\frac{2}{3}\\vec{AB} + \\frac{1}{3}\\vec{AC}$",
          "$\\vec{AM} = \\frac{1}{2}\\vec{AB} + \\frac{1}{2}\\vec{AC}$",
          "$\\vec{AM} = \\frac{1}{3}\\vec{AB} + \\frac{2}{3}\\vec{AC}$",
          "$\\vec{AM} = \\frac{3}{4}\\vec{AB} + \\frac{1}{4}\\vec{AC}$"
        ],
        correctIndex: 2, // C
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vì $M \\in BC$ và $MB = 2MC$ nên hai vectơ $\\vec{MB}$ và $\\vec{MC}$ ngược hướng, suy ra $\\vec{MB} = -2\\vec{MC} \\iff \\vec{MB} + 2\\vec{MC} = \\vec{0}$.<br>Chèn điểm $A$ vào hệ thức:<br>$$(\\vec{AB} - \\vec{AM}) + 2(\\vec{AC} - \\vec{AM}) = \\vec{0} \\iff 3\\vec{AM} = \\vec{AB} + 2\\vec{AC} \\iff \\vec{AM} = \\frac{1}{3}\\vec{AB} + \\frac{2}{3}\\vec{AC}.$$<br>&rArr; <strong>Chọn đáp án C.</strong>",
        similarVariation: {
          prompt: "Câu 5 (Tương tự): Điểm $N$ trên $BC$ sao cho $NC = 2NB$. Phân tích $\\vec{AN}$ theo $\\vec{AB}, \\vec{AC}$:",
          options: ["$\\vec{AN} = \\frac{2}{3}\\vec{AB} + \\frac{1}{3}\\vec{AC}$", "$\\vec{AN} = \\frac{1}{3}\\vec{AB} + \\frac{2}{3}\\vec{AC}$", "$\\vec{AN} = \\frac{1}{2}\\vec{AB} + \\frac{1}{2}\\vec{AC}$", "$\\vec{AN} = \\frac{3}{2}\\vec{AB} + \\frac{1}{2}\\vec{AC}$"],
          correctIndex: 0, // A
          solution: "Vì NC = 2NB nên N gần B hơn, $\\vec{AN} = \\frac{2}{3}\\vec{AB} + \\frac{1}{3}\\vec{AC}$."
        }
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 2: 3 CÂU TRẮC NGHIỆM ĐÚNG / SAI (ĐỦ 4 Ý a, b, c, d)
    // -----------------------------------------------------------------------
    part2TrueFalse: [
      {
        id: "tf-10-9-1",
        num: 1,
        intro: "Cho tam giác $ABC$ có trọng tâm $G$, $M$ là trung điểm cạnh $BC$. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
        items: [
          {
            id: "a",
            text: "$\\vec{GA} + 2\\vec{GM} = \\vec{0}$.",
            isCorrect: true,
            explain: "Đúng vì $G$ chia đoạn $AM$ theo tỉ số $GA = 2GM$ và hai vectơ $\\vec{GA}, \\vec{GM}$ ngược hướng nhau."
          },
          {
            id: "b",
            text: "Với mọi điểm $O$ bất kì, ta luôn có $\\vec{OA} + \\vec{OB} + \\vec{OC} = 3\\vec{OG}$.",
            isCorrect: true,
            explain: "Đúng. Đây là hệ thức trọng tâm mở rộng cơ bản trong SGK trang 57."
          },
          {
            id: "c",
            text: "$\\vec{AM} = \\frac{1}{2}(\\vec{AB} + \\vec{AC})$.",
            isCorrect: true,
            explain: "Đúng vì $M$ là trung điểm $BC$, áp dụng quy tắc hình bình hành ta có $2\\vec{AM} = \\vec{AB} + \\vec{AC}$."
          },
          {
            id: "d",
            text: "Độ dài vectơ $|\\vec{AB} + \\vec{AC}|$ luôn bằng $AB + AC$.",
            isCorrect: false,
            explain: "Sai. Bất đẳng thức tam giác chỉ ra rằng $|\\vec{AB} + \\vec{AC}| = 2AM < AB + AC$ đối với tam giác không suy biến."
          }
        ]
      },
      {
        id: "tf-10-9-2",
        num: 2,
        intro: "Cho hai vectơ khác vectơ-không $\\vec{a}$ và $\\vec{b}$. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
        items: [
          {
            id: "a",
            text: "Vectơ $2\\vec{a}$ và vectơ $-2\\vec{a}$ là hai vectơ đối nhau.",
            isCorrect: true,
            explain: "Đúng vì $2\\vec{a} + (-2\\vec{a}) = (2 - 2)\\vec{a} = 0\\vec{a} = \\vec{0}$."
          },
          {
            id: "b",
            text: "Hai vectơ $\\vec{a}$ và $\\vec{b}$ cùng phương khi và chỉ khi tồn tại số thực $k$ sao cho $\\vec{a} = k\\vec{b}$.",
            isCorrect: true,
            explain: "Đúng. Đây là điều kiện cần và đủ để hai vectơ cùng phương (SGK trang 56)."
          },
          {
            id: "c",
            text: "Nếu $\\vec{a} = -3\\vec{b}$ thì $|\\vec{a}| = -3|\\vec{b}|$.",
            isCorrect: false,
            explain: "Sai vì độ dài vectơ luôn là số không âm: $|\\vec{a}| = |-3| \\cdot |\\vec{b}| = 3|\\vec{b}|$."
          },
          {
            id: "d",
            text: "Nếu ba điểm phân biệt $A, B, C$ thẳng hàng thì luôn tồn tại số thực $k \\ne 0$ sao cho $\\vec{AB} = k\\vec{AC}$.",
            isCorrect: true,
            explain: "Đúng vì ba điểm thẳng hàng khi và chỉ khi hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương."
          }
        ]
      },
      {
        id: "tf-10-9-3",
        num: 3,
        intro: "Cho hình bình hành $ABCD$ tâm $O$. Gọi $M$ là trung điểm của cạnh $BC$ và $N$ là trung điểm của cạnh $CD$. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
        items: [
          {
            id: "a",
            text: "$\\vec{AM} = \\vec{AB} + \\frac{1}{2}\\vec{AD}$.",
            isCorrect: true,
            explain: "Đúng vì $\\vec{AM} = \\vec{AB} + \\vec{BM} = \\vec{AB} + \\frac{1}{2}\\vec{BC} = \\vec{AB} + \\frac{1}{2}\\vec{AD}$."
          },
          {
            id: "b",
            text: "$\\vec{AN} = \\frac{1}{2}\\vec{AB} + \\vec{AD}$.",
            isCorrect: true,
            explain: "Đúng vì $\\vec{AN} = \\vec{AD} + \\vec{DN} = \\vec{AD} + \\frac{1}{2}\\vec{DC} = \\vec{AD} + \\frac{1}{2}\\vec{AB}$."
          },
          {
            id: "c",
            text: "$\\vec{AM} + \\vec{AN} = \\frac{3}{2}\\vec{AC}$.",
            isCorrect: true,
            explain: "Đúng vì $\\vec{AM} + \\vec{AN} = \\frac{3}{2}(\\vec{AB} + \\vec{AD}) = \\frac{3}{2}\\vec{AC}$."
          },
          {
            id: "d",
            text: "$\\vec{MN} = \\frac{1}{2}\\vec{AC}$.",
            isCorrect: false,
            explain: "Sai. Trong tam giác $BCD$, $MN$ là đường trung bình song song với $BD$ nên $\\vec{MN} = \\frac{1}{2}\\vec{BD}$ chứ không phải $\\vec{AC}$."
          }
        ]
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 3: 2 CÂU HỎI TRẢ LỜI NGẮN (VẬN DỤNG THỰC TẾ)
    // -----------------------------------------------------------------------
    part3ShortAnswer: [
      {
        id: "sa-10-9-1",
        num: 1,
        prompt: "Câu 1: Một thanh đòn $AB$ dài $120\\text{ cm}$ có khối lượng không đáng kể, hai đầu gắn hai vật nặng có khối lượng lần lượt là $m_1 = 2\\text{ kg}$ tại đầu $A$ và $m_2 = 4\\text{ kg}$ tại đầu $B$. Để thanh đòn nằm cân bằng nằm ngang trên một điểm tựa $M$, khoảng cách từ đầu $A$ đến điểm tựa $M$ phải bằng bao nhiêu centimét?",
        correctAnswer: "80",
        acceptedAnswers: ["80", "80cm", "80 cm"],
        unit: "cm",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo điều kiện cân bằng đòn bẩy (khối tâm $M$ của hệ hai chất điểm $A, B$):<br>$$m_1\\vec{MA} + m_2\\vec{MB} = \\vec{0} \\implies m_1 MA = m_2 MB \\implies 2 MA = 4 MB \\implies MA = 2 MB.$$<br>Mà $MA + MB = AB = 120\\text{ cm}$, suy ra:<br>$$2 MB + MB = 120 \\implies 3 MB = 120 \\implies MB = 40\\text{ cm}.$$<br>Do đó khoảng cách từ $A$ đến điểm tựa $M$ là $MA = 2 \\times 40 = 80\\text{ cm}$.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Thanh đòn dài 90 cm có hai vật nặng 1 kg tại A và 2 kg tại B. Tính khoảng cách từ A đến điểm tựa M (đơn vị: cm).",
          correctAnswer: "60",
          acceptedAnswers: ["60", "60cm"],
          unit: "cm",
          explain: "1*MA = 2*MB -> MA = 2*MB. MA + MB = 90 -> 3 MB = 90 -> MB = 30 -> MA = 60 cm."
        }
      },
      {
        id: "sa-10-9-2",
        num: 2,
        prompt: "Câu 2: Chất điểm $A$ chịu tác động đồng thời của ba lực $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ ở trạng thái cân bằng (tức $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0}$) như Hình 4.30 SGK. Biết rằng $\\vec{F}_1$ vuông góc với $\\vec{F}_2$, góc tạo bởi $\\vec{F}_2$ và $\\vec{F}_3$ bằng $120^\\circ$ và độ lớn của lực $\\vec{F}_1$ là $20\\text{ N}$. Tính độ lớn của lực $\\vec{F}_3$ theo đơn vị Newton (làm tròn đến hàng đơn vị).",
        correctAnswer: "23",
        acceptedAnswers: ["23", "23.1", "23.09", "23N", "23 N"],
        unit: "N",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vì ba lực cân bằng nên $\\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$.<br>Theo quy tắc hình bình hành, hợp lực $\\vec{F}_{12} = \\vec{F}_1 + \\vec{F}_2$ trực đối với $\\vec{F}_3$, do đó $|\\vec{F}_3| = |\\vec{F}_{12}|$.<br>Vì góc giữa $\\vec{F}_2$ và $\\vec{F}_3$ bằng $120^\\circ$ nên góc giữa $\\vec{F}_2$ và $\\vec{F}_{12}$ bằng $180^\\circ - 120^\\circ = 60^\\circ$.<br>Do $\\vec{F}_1 \\perp \\vec{F}_2$, trong tam giác lực vuông ta có:<br>$$\\sin 60^\\circ = \\frac{|\\vec{F}_1|}{|\\vec{F}_{12}|} \\implies |\\vec{F}_3| = |\\vec{F}_{12}| = \\frac{|\\vec{F}_1|}{\\sin 60^\\circ} = \\frac{20}{\\frac{\\sqrt{3}}{2}} = \\frac{40}{\\sqrt{3}} \\approx 23{,}094\\text{ N}.$$<br>Làm tròn đến hàng đơn vị ta được $23\\text{ N}$.",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Nếu góc giữa F2 và F3 là 135 độ, F1 vuông góc F2 và |F1| = 10 N. Tính |F3| (làm tròn 1 chữ số thập phân, đơn vị N).",
          correctAnswer: "14.1",
          acceptedAnswers: ["14.1", "14,1", "14.14"],
          unit: "N",
          explain: "Góc giữa F2 và F12 là 45 độ. |F3| = 10 / sin 45 = 10*sqrt(2) approx 14.1 N."
        }
      }
    ]
  }
};

// Đồng bộ biến toàn cục
if (typeof window !== "undefined") {
  window.LESSON_10_9_DATA = window.LESSON_10_C4_B9_DATA;
}
'''

import os
with open("js/lesson-10-9-data.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated js/lesson-10-9-data.js successfully! Size: {os.path.getsize('js/lesson-10-9-data.js')} bytes")
