# -*- coding: utf-8 -*-
import json

data_js = r"""/**
 * BÀI HỌC SỐ: BÀI 10. VECTƠ TRONG MẶT PHẲNG TOẠ ĐỘ (TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - PHẦN I: Lời chào Thầy Sáng + Voice AI vàng đồng, chỉnh tốc độ
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 60 + Voice AI
 * - PHẦN III: Tiến trình bài học đa phương tiện:
 *             + Tình huống mở đầu: Bản đồ bão & Định vị GPS hàng hải (Hình 4.31 SGK)
 *             + Mục 1: Toạ độ của vectơ và Hệ trục toạ độ Oxy (Hình 4.32, 4.34 SGK)
 *             + Mục 2: Biểu thức toạ độ của các phép toán vectơ (Cộng, trừ, nhân số, cùng phương)
 *             + Mục 3: Toạ độ điểm và độ dài vectơ (Hình 4.35 SGK)
 *             + Mục 4: Toạ độ trung điểm đoạn thẳng, trọng tâm tam giác & Bài toán quân mã cờ vua (Hình 4.38 SGK)
 *             + Checkpoints POI chấm vàng tương tác tự động dừng và bật câu hỏi
 * - PHẦN IV: Bài tập trắc nghiệm củng cố tương tác chuẩn cấu trúc mới Bộ GD&ĐT:
 *             + 5 câu trắc nghiệm 4 lựa chọn (Hoán vị đáp án B, D, A, C, B phong phú)
 *             + 3 câu trắc nghiệm Đúng/Sai (Đủ 4 ý a, b, c, d)
 *             + 2 câu trả lời ngắn thực tế
 *             + Tích hợp "Lời giải chi tiết ThS. Lương Thanh Sáng" & "Bài toán tương tự" đổi số tự động
 */

window.LESSON_10_C4_B10_DATA = {
  id: "10-c4-b10",
  grade: "10",
  gradeLabel: "Lớp 10",
  chapterId: "c10-4",
  chapter: "Chương IV",
  chapterTitle: "Vectơ",
  number: "Bài 10",
  title: "Vectơ trong mặt phẳng toạ độ",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào toàn thể các em học sinh lớp 10 yêu quý! Ở các bài học trước, các em đã tiếp cận vectơ dưới góc độ hình học thuần túy: phương, hướng, độ dài cùng các phép toán cộng trừ vectơ và nhân vectơ với một số. Hôm nay, Thầy trò mình sẽ cùng thực hiện một bước ngoặt vĩ đại trong lịch sử toán học: đưa vectơ vào hệ toạ độ Descartes vuông góc Oxy. Phương pháp toạ độ sẽ giúp các em chuyển đổi các bài toán hình học phức tạp thành các phép tính đại số cực kì mạch lạc và chuẩn xác. Chúc các em có một tiết học tràn đầy niềm hứng khởi và say mê khám phá!",
    audioScript: "Thầy Sáng chào toàn thể các em học sinh lớp 10 yêu quý! Ở các bài học trước, các em đã tiếp cận vectơ dưới góc độ hình học thuần túy: phương, hướng, độ dài cùng các phép toán cộng trừ vectơ và nhân vectơ với một số. Hôm nay, Thầy trò mình sẽ cùng thực hiện một bước ngoặt vĩ đại trong lịch sử toán học: đưa vectơ vào hệ toạ độ Descartes vuông góc Oxy. Phương pháp toạ độ sẽ giúp các em chuyển đổi các bài toán hình học phức tạp thành các phép tính đại số cực kì mạch lạc và chuẩn xác. Chúc các em có một tiết học tràn đầy niềm hứng khởi và say mê khám phá!",
    audioUrl: "assets/audio/b10_10_welcome.mp3",
    buttonLabel: "Nghe thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 60)
  // =========================================================================
  learningGoals: [
    "Nhận biết được toạ độ của một vectơ đối với hệ trục toạ độ $Oxy$ và mối liên hệ giữa toạ độ điểm với toạ độ vectơ vị trí.",
    "Nắm vững các biểu thức toạ độ của phép cộng hai vectơ, phép trừ hai vectơ và phép nhân một số với vectơ.",
    "Vận dụng thành thạo công thức toạ độ trung điểm của đoạn thẳng, toạ độ trọng tâm tam giác và điều kiện hai vectơ cùng phương để giải các bài toán hình học và thực tiễn (chuyển động tàu thuyền, cờ vua, định vị GPS)."
  ],
  goalsAudioScript: "Mục tiêu bài học cần đạt: Sau bài học này, các em cần làm chủ ba mục tiêu trọng tâm: Thứ nhất, nhận biết toạ độ của một vectơ đối với hệ trục Oxy và mối liên hệ giữa toạ độ điểm với toạ độ vectơ vị trí. Thứ hai, nắm vững các biểu thức toạ độ của phép cộng hai vectơ, phép trừ hai vectơ và phép nhân một số với vectơ. Thứ ba, vận dụng thành thạo công thức toạ độ trung điểm của đoạn thẳng, toạ độ trọng tâm tam giác và điều kiện hai vectơ cùng phương để giải các bài toán hình học và thực tế.",
  goalsAudioUrl: "assets/audio/b10_10_goals.mp3",
  goalsButtonLabel: "Nghe mục tiêu bài học",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN
  // =========================================================================
  hook: {
    title: "TÌNH HUỐNG THỰC TẾ: BẢN ĐỒ BIỂN ĐÔNG & DỰ BÁO TÂM BÃO ĐỔ BỘ",
    audioScript: "Bài toán dẫn nhập: Trong dự báo khí tượng thủy văn và hàng hải quốc tế, bản đồ biển Đông được số hóa thành một mặt phẳng toạ độ Oxy. Vị trí tâm bão được xác định bởi cặp toạ độ x, y, còn vận tốc và hướng di chuyển của bão được biểu diễn bởi vectơ vận tốc v. Nhờ các biểu thức toạ độ của vectơ, các chuyên gia có thể dự báo chính xác tâm bão sau mỗi giờ sẽ nằm ở vị trí nào, giúp bà con ngư dân chủ động tránh bão an toàn!",
    audioUrl: "assets/audio/b10_10_hook.mp3",
    buttonLabel: "Nghe tình huống mở đầu",
    story: `
      <p>Trong dự báo khí tượng thuỷ văn và hàng hải quốc tế, bản đồ biển Đông được số hoá thành một mặt phẳng toạ độ $Oxy$. Vị trí của tâm bão được xác định bởi cặp toạ độ $(x; y)$, trong khi vận tốc và hướng di chuyển của bão được mô hình hoá bởi một vectơ vận tốc $\\vec{v} = (v_x; v_y)$.</p>
      <p>Nhờ các biểu thức toạ độ của vectơ, các nhà khí tượng có thể tính toán chính xác toạ độ vùng bão đổ bộ sau mỗi giờ: vị trí mới $B = A + t\\vec{v}$, hỗ trợ ngư dân và các lực lượng cứu hộ ven biển chủ động phòng tránh an toàn kịp thời!</p>
    `,
    illustration: `
      <div class="tikz-svg-wrap" style="text-align: center; margin: 16px 0;">
        <svg viewBox="0 0 700 240" style="max-width: 660px; width: 100%; height: auto; display: block; margin: 0 auto; background: #0f172a; border-radius: 12px; border: 1px solid #334155;">
          <defs>
            <pattern id="radar-grid-b10" width="35" height="35" patternUnits="userSpaceOnUse">
              <path d="M 35 0 L 0 0 0 35" fill="none" stroke="#1e293b" stroke-width="1"/>
            </pattern>
            <radialGradient id="stormGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ef4444" stop-opacity="0.9"/>
              <stop offset="60%" stop-color="#f97316" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
            </radialGradient>
            <marker id="arr-radar" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
            </marker>
          </defs>
          <rect width="700" height="240" fill="#0f172a" rx="12"/>
          <rect width="700" height="240" fill="url(#radar-grid-b10)" rx="12"/>

          <!-- Trục Ox (Kinh độ Đông) -->
          <line x1="50" y1="200" x2="650" y2="200" stroke="#64748b" stroke-width="2"/>
          <polygon points="655,200 645,195 645,205" fill="#64748b"/>
          <text x="615" y="222" fill="#94a3b8" font-size="12" font-family="'Segoe UI', Roboto, sans-serif">x (Kinh độ °Đ)</text>

          <!-- Trục Oy (Vĩ độ Bắc) -->
          <line x1="90" y1="220" x2="90" y2="25" stroke="#64748b" stroke-width="2"/>
          <polygon points="90,20 85,30 95,30" fill="#64748b"/>
          <text x="70" y="25" fill="#94a3b8" font-size="12" font-family="'Segoe UI', Roboto, sans-serif">y (Vĩ độ °B)</text>
          <text x="75" y="215" fill="#94a3b8" font-size="12" font-family="'Segoe UI', Roboto, sans-serif">O</text>

          <!-- Đường bờ biển Việt Nam mềm mại -->
          <path d="M 120 30 Q 150 90 130 140 T 145 205" fill="none" stroke="#22c55e" stroke-width="3"/>
          <text x="125" y="50" fill="#4ade80" font-size="12" font-weight="bold" font-family="'Segoe UI', Roboto, sans-serif">Đất liền Việt Nam</text>

          <!-- Tâm bão ban đầu A(x₀, y₀) -->
          <circle cx="280" cy="150" r="32" fill="url(#stormGrad)"/>
          <circle cx="280" cy="150" r="4.5" fill="#ef4444"/>
          <text x="245" y="140" fill="#fca5a5" font-weight="bold" font-size="13" font-family="'Segoe UI', Roboto, sans-serif">Tâm bão A(x₀; y₀)</text>

          <!-- Vectơ vận tốc v -->
          <line x1="280" y1="150" x2="430" y2="75" stroke="#38bdf8" stroke-width="3" marker-end="url(#arr-radar)"/>
          <text x="350" y="95" fill="#38bdf8" font-weight="bold" font-size="13" font-family="'Segoe UI', Roboto, sans-serif">\\vec{v} = (v_x; v_y)</text>

          <!-- Vị trí dự báo sau t giờ B = A + t*v -->
          <circle cx="440" cy="70" r="42" fill="url(#stormGrad)"/>
          <circle cx="440" cy="70" r="4.5" fill="#fbbf24"/>
          <text x="448" y="65" fill="#fde047" font-weight="bold" font-size="13" font-family="'Segoe UI', Roboto, sans-serif">Dự báo B(x₀+v_x·t; y₀+v_y·t)</text>
          <line x1="280" y1="150" x2="440" y2="70" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,3"/>
        </svg>
      </div>
    `
  },

  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1. TOẠ ĐỘ CỦA VECTƠ VÀ HỆ TRỤC TOẠ ĐỘ OXY
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "Toạ độ của vectơ và Hệ trục toạ độ Oxy",
      audioScript: "Mục một, Toạ độ của vectơ: Hệ toạ độ Oxy gồm hai trục vuông góc Ox và Oy với hai vectơ đơn vị i và j có độ dài bằng 1. Định lí then chốt khẳng định: Với mỗi vectơ u bất kì trong mặt phẳng, luôn tồn tại duy nhất cặp số thực x, y sao cho u bằng x nhân i cộng y nhân j. Khi đó, cặp số x, y được gọi là toạ độ của vectơ u, kí hiệu là u bằng mở ngoặc x chấm phẩy y đóng ngoặc.",
      audioUrl: "assets/audio/b10_10_sec1.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-10-sec1-1",
          time: 14,
          title: "Giây 14: Toạ độ của hai vectơ đơn vị",
          question: "Trong mặt phẳng toạ độ $Oxy$, toạ độ của hai vectơ đơn vị $\\vec{i}$ và $\\vec{j}$ lần lượt là:",
          options: [
            "$\\vec{i} = (0; 1)$ và $\\vec{j} = (1; 0)$",
            "$\\vec{i} = (1; 0)$ và $\\vec{j} = (0; 1)$",
            "$\\vec{i} = (1; 1)$ và $\\vec{j} = (-1; 1)$",
            "$\\vec{i} = (1; 0)$ và $\\vec{j} = (1; 0)$"
          ],
          correctIndex: 1, // B
          hint: "$\\vec{i}$ nằm trên trục hoành $Ox$, $\\vec{j}$ nằm trên trục tung $Oy$ và cả hai đều có độ dài bằng 1.",
          explain: "Chính xác! $\\vec{i} = 1\\vec{i} + 0\\vec{j} = (1; 0)$ và $\\vec{j} = 0\\vec{i} + 1\\vec{j} = (0; 1)$."
        },
        {
          id: "poi-10-10-sec1-2",
          time: 22,
          title: "Giây 22: Xác định toạ độ từ phân tích đơn vị",
          question: "Cho vectơ $\\vec{u} = 3\\vec{j} - 4\\vec{i}$. Toạ độ của vectơ $\\vec{u}$ là:",
          options: [
            "$(3; -4)$",
            "$(-4; 3)$",
            "$(4; 3)$",
            "$(3; 4)$"
          ],
          correctIndex: 1, // B
          hint: "Cẩn thận thứ tự: hoành độ là hệ số của $\\vec{i}$, tung độ là hệ số của $\\vec{j}$.",
          explain: "Rất xuất sắc! $\\vec{u} = -4\\vec{i} + 3\\vec{j}$, do đó toạ độ của $\\vec{u}$ là $(-4; 3)$."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Hệ trục toạ độ Oxy và Vectơ đơn vị",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #f0fdf4; border-left-color: #16a34a;">
              <div class="sgk-box-tag" style="color: #15803d;"><i class="fa-solid fa-compass"></i> Định nghĩa Hệ toạ độ Oxy (SGK trang 60):</div>
              <ul class="sgk-box-list" style="color: #166534;">
                <li>Hệ trục toạ độ $(O; \\vec{i}, \\vec{j})$ gồm hai trục toạ độ $Ox$ (trục hoành) và $Oy$ (trục tung) vuông góc với nhau tại gốc $O$.</li>
                <li>$\\vec{i}$ là vectơ đơn vị trên trục $Ox$ ($|\\vec{i}| = 1$); $\\vec{j}$ là vectơ đơn vị trên trục $Oy$ ($|\\vec{j}| = 1$).</li>
                <li>Mặt phẳng chứa hệ toạ độ $Oxy$ gọi là <em>mặt phẳng toạ độ $Oxy$</em>.</li>
              </ul>
            </div>
          `
        },
        {
          key: "1b",
          title: "Toạ độ của một vectơ",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #eff6ff; border-left-color: #2563eb;">
              <div class="sgk-box-tag" style="color: #1d4ed8;"><i class="fa-solid fa-bookmark"></i> Định nghĩa Toạ độ của vectơ (SGK trang 61):</div>
              <p style="color: #1e3a8a; margin-bottom: 8px;">
                Với mỗi vectơ $\\vec{u}$, có duy nhất cặp số thực $(x; y)$ sao cho:
              </p>
              <div style="text-align: center; margin: 10px 0; font-size: 1.25rem; font-weight: bold; color: #1e3a8a;">
                $$\\vec{u} = x\\vec{i} + y\\vec{j}$$
              </div>
              <p style="color: #1e3a8a; margin: 0;">
                Cặp số $(x; y)$ gọi là <strong>toạ độ của vectơ $\\vec{u}$</strong>, kí hiệu là $\\vec{u} = (x; y)$ hoặc $\\vec{u}(x; y)$.<br>
                - $x$ là <em>hoành độ</em> của $\\vec{u}$.<br>
                - $y$ là <em>tung độ</em> của $\\vec{u}$.
              </p>
            </div>

            <!-- Khung Chú ý quan trọng -->
            <div class="memory-tip-box" style="margin-top: 14px; background: #fffbeb; border: 1px solid #fde68a; border-left: 5px solid #f59e0b; padding: 14px 18px; border-radius: 8px;">
              <strong style="color: #92400e; font-size: 1.05rem;"><i class="fa-solid fa-triangle-exclamation"></i> Chú ý then chốt của Thầy Sáng:</strong>
              <p style="margin: 6px 0 0 0; color: #78350f; line-height: 1.6;">
                1) Hai vectơ bằng nhau khi và chỉ khi hoành độ bằng hoành độ, tung độ bằng tung độ:<br>
                $$\\vec{u}(x; y) = \\vec{v}(x'; y') \\iff \\begin{cases} x = x' \\\\ y = y' \\end{cases}$$
                2) Vectơ-không: $\\vec{0} = (0; 0)$.<br>
                3) Hai vectơ đơn vị: $\\vec{i} = (1; 0)$ và $\\vec{j} = (0; 1)$.
              </p>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2. BIỂU THỨC TOẠ ĐỘ CỦA CÁC PHÉP TOÁN VECTƠ
    // -----------------------------------------------------------------------
    {
      num: "2",
      title: "Biểu thức toạ độ của các phép toán vectơ",
      audioScript: "Mục hai, Biểu thức toạ độ của các phép toán vectơ: Khi biểu diễn vectơ qua toạ độ, các phép toán hình học trở nên vô cùng đơn giản. Tổng hai vectơ bằng tổng các toạ độ tương ứng, hiệu hai vectơ bằng hiệu các toạ độ tương ứng, và nhân một số với vectơ bằng cách nhân số đó vào cả hoành độ lẫn tung độ. Đặc biệt, hai vectơ cùng phương khi và chỉ khi các toạ độ của chúng tỉ lệ với nhau.",
      audioUrl: "assets/audio/b10_10_sec2.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-10-sec2-1",
          time: 12,
          title: "Giây 12: Phép toán toạ độ",
          question: "Cho $\\vec{u} = (2; -3)$ và $\\vec{v} = (1; 4)$. Vectơ $\\vec{u} - \\vec{v}$ có toạ độ là:",
          options: [
            "$(3; 1)$",
            "$(1; -7)$",
            "$(1; 1)$",
            "$(-1; 7)$"
          ],
          correctIndex: 1, // B
          hint: "Trừ hoành độ cho hoành độ: $2 - 1$; trừ tung độ cho tung độ: $-3 - 4$.",
          explain: "Chính xác! $\\vec{u} - \\vec{v} = (2 - 1;\\, -3 - 4) = (1; -7)$."
        },
        {
          id: "poi-10-10-sec2-2",
          time: 18,
          title: "Giây 18: Điều kiện cùng phương",
          question: "Hai vectơ $\\vec{a} = (x; y)$ và $\\vec{b} = (x'; y')$ ($x, y \\ne 0$) cùng phương khi và chỉ khi:",
          options: [
            "$x x' + y y' = 0$",
            "$\\dfrac{x'}{x} = \\dfrac{y'}{y}$",
            "$x + x' = y + y'$",
            "$x y' + x' y = 0$"
          ],
          correctIndex: 1, // B
          hint: "Tồn tại số $k$ sao cho $\\vec{b} = k\\vec{a}$, tức là hoành độ và tung độ lập thành tỉ số bằng nhau.",
          explain: "Chính xác! Định lí SGK trang 62: Hai vectơ cùng phương khi và chỉ khi các toạ độ tương ứng tỉ lệ: $\\frac{x'}{x} = \\frac{y'}{y}$."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Biểu thức toạ độ cộng, trừ và nhân với một số",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #fdf4ff; border-left-color: #c026d3;">
              <div class="sgk-box-tag" style="color: #a21caf;"><i class="fa-solid fa-calculator"></i> Định lí Biểu thức toạ độ (SGK trang 62):</div>
              <p style="color: #701a75; margin-bottom: 8px;">Cho hai vectơ $\\vec{u} = (x; y)$, $\\vec{v} = (x'; y')$ và số thực $k$. Khi đó:</p>
              <ul class="sgk-box-list" style="color: #701a75;">
                <li><strong>Cộng hai vectơ:</strong> $\\vec{u} + \\vec{v} = (x + x';\\, y + y')$</li>
                <li><strong>Trừ hai vectơ:</strong> $\\vec{u} - \\vec{v} = (x - x';\\, y - y')$</li>
                <li><strong>Nhân số với vectơ:</strong> $k\\vec{u} = (kx;\\, ky)$</li>
              </ul>
            </div>

            <!-- Bảng ví dụ tính toán -->
            <div style="margin-top: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
              <h5 style="color: #0f172a; margin: 0 0 8px 0; font-size: 1rem;"><i class="fa-solid fa-pen-to-square" style="color: #2563eb;"></i> Ví dụ minh hoạ (SGK trang 62):</h5>
              <p style="margin: 0; color: #334155; line-height: 1.6;">
                Cho $\\vec{a} = (3; -2)$ và $\\vec{b} = (-1; 4)$. Tính toạ độ vectơ $\\vec{c} = 2\\vec{a} - 3\\vec{b}$.<br>
                <em>Lời giải của Thầy Sáng:</em><br>
                $2\\vec{a} = (6; -4)$ và $3\\vec{b} = (-3; 12)$.<br>
                Suy ra: $\\vec{c} = 2\\vec{a} - 3\\vec{b} = (6 - (-3);\\, -4 - 12) = (9; -16)$.
              </p>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3. TOẠ ĐỘ ĐIỂM VÀ ĐỘ DÀI VECTƠ
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "Toạ độ của điểm và độ dài vectơ",
      audioScript: "Mục ba, Toạ độ của điểm và khoảng cách giữa hai điểm: Toạ độ của điểm M chính là toạ độ của vectơ vị trí OM. Khi biết toạ độ hai điểm A và B, vectơ AB được tính bằng toạ độ điểm B trừ toạ độ điểm A. Độ dài vectơ AB chính là khoảng cách giữa hai điểm A và B, được tính theo định lí Pitago bằng căn bậc hai của hiệu hoành độ bình phương cộng hiệu tung độ bình phương.",
      audioUrl: "assets/audio/b10_10_sec3.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-10-sec3-1",
          time: 12,
          title: "Giây 12: Toạ độ vectơ nối hai điểm",
          question: "Cho hai điểm $A(2; 5)$ và $B(-1; 1)$. Toạ độ của vectơ $\\vec{AB}$ là:",
          options: [
            "$(1; 6)$",
            "$(-3; -4)$",
            "$(3; 4)$",
            "$(-3; 4)$"
          ],
          correctIndex: 1, // B
          hint: "Toạ độ vectơ $\\vec{AB} = (x_B - x_A; y_B - y_A)$. Lấy ngọn trừ gốc!",
          explain: "Chính xác! $\\vec{AB} = (-1 - 2;\\, 1 - 5) = (-3; -4)$."
        },
        {
          id: "poi-10-10-sec3-2",
          time: 20,
          title: "Giây 20: Tính khoảng cách giữa hai điểm",
          question: "Khoảng cách giữa hai điểm $A(2; 5)$ và $B(-1; 1)$ bằng:",
          options: [
            "$7$",
            "$5$",
            "$\\sqrt{7}$",
            "$25$"
          ],
          correctIndex: 1, // B
          hint: "Độ dài $AB = \\sqrt{(-3)^2 + (-4)^2}$.",
          explain: "Chính xác! $AB = \\sqrt{(-3)^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Toạ độ điểm và công thức khoảng cách",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #fff7ed; border-left-color: #ea580c;">
              <div class="sgk-box-tag" style="color: #c2410c;"><i class="fa-solid fa-location-dot"></i> Toạ độ điểm và Độ dài (SGK trang 63):</div>
              <ul class="sgk-box-list" style="color: #9a3412;">
                <li><strong>Toạ độ điểm:</strong> $M(x; y) \\iff \\vec{OM} = (x; y) \\iff \\vec{OM} = x\\vec{i} + y\\vec{j}$.</li>
                <li><strong>Toạ độ vectơ nối hai điểm:</strong> Với $A(x_A; y_A)$ và $B(x_B; y_B)$, ta có:
                  <div style="text-align: center; margin: 6px 0; font-size: 1.15rem; font-weight: bold;">
                    $$\\vec{AB} = (x_B - x_A;\\, y_B - y_A)$$
                  </div>
                </li>
                <li><strong>Độ dài vectơ:</strong> Với $\\vec{u} = (x; y)$ thì $|\\vec{u}| = \\sqrt{x^2 + y^2}$.</li>
                <li><strong>Khoảng cách giữa hai điểm:</strong>
                  <div style="text-align: center; margin: 6px 0; font-size: 1.15rem; font-weight: bold;">
                    $$AB = |\\vec{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$
                  </div>
                </li>
              </ul>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4. TOẠ ĐỘ TRUNG ĐIỂM ĐOẠN THẲNG VÀ TRỌNG TÂM TAM GIÁC
    // -----------------------------------------------------------------------
    {
      num: "4",
      title: "Toạ độ trung điểm của đoạn thẳng và trọng tâm tam giác",
      audioScript: "Mục bốn, Toạ độ trung điểm và trọng tâm: Toạ độ trung điểm của một đoạn thẳng là trung bình cộng toạ độ hai đầu mút. Tương tự, toạ độ trọng tâm tam giác là trung bình cộng toạ độ ba đỉnh. Nhờ hệ toạ độ Oxy, bài toán di chuyển chữ L của quân mã trên bàn cờ vua hay bài toán xác định toạ độ va chạm của vệ tinh đều được giải quyết gọn gàng.",
      audioUrl: "assets/audio/b10_10_sec4.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-10-sec4-1",
          time: 10,
          title: "Giây 10: Toạ độ trung điểm",
          question: "Cho đoạn thẳng $AB$ có $A(1; 4)$ và $B(5; -2)$. Trung điểm $I$ của $AB$ có toạ độ là:",
          options: [
            "$(6; 2)$",
            "$(3; 1)$",
            "$(2; 3)$",
            "$(4; 1)$"
          ],
          correctIndex: 1, // B
          hint: "Lấy trung bình cộng: $x_I = (1 + 5)/2$, $y_I = (4 - 2)/2$.",
          explain: "Chính xác! $x_I = \\frac{1 + 5}{2} = 3$, $y_I = \\frac{4 + (-2)}{2} = 1$. Suy ra $I(3; 1)$."
        },
        {
          id: "poi-10-10-sec4-2",
          time: 18,
          title: "Giây 18: Toạ độ trọng tâm tam giác",
          question: "Cho tam giác $ABC$ có $A(1; 2)$, $B(3; 0)$, $C(-1; 4)$. Trọng tâm $G$ của tam giác $ABC$ có toạ độ là:",
          options: [
            "$(3; 6)$",
            "$(1; 2)$",
            "$(2; 1)$",
            "$(0; 2)$"
          ],
          correctIndex: 1, // B
          hint: "Cộng toạ độ 3 đỉnh rồi chia cho 3.",
          explain: "Chính xác! $x_G = \\frac{1 + 3 + (-1)}{3} = 1$, $y_G = \\frac{2 + 0 + 4}{3} = 2$. Vậy $G(1; 2)$."
        }
      ],
      subsections: [
        {
          key: "4a",
          title: "Công thức trung điểm và trọng tâm",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #f0f9ff; border-left-color: #0284c7;">
              <div class="sgk-box-tag" style="color: #0369a1;"><i class="fa-solid fa-shapes"></i> Công thức then chốt (SGK trang 64):</div>
              <ul class="sgk-box-list" style="color: #075985;">
                <li><strong>Trung điểm $M(x_M; y_M)$ của đoạn thẳng $AB$:</strong>
                  <div style="text-align: center; margin: 6px 0; font-size: 1.15rem; font-weight: bold;">
                    $$x_M = \\frac{x_A + x_B}{2}, \\quad y_M = \\frac{y_A + y_B}{2}$$
                  </div>
                </li>
                <li><strong>Trọng tâm $G(x_G; y_G)$ của tam giác $ABC$:</strong>
                  <div style="text-align: center; margin: 6px 0; font-size: 1.15rem; font-weight: bold;">
                    $$x_G = \\frac{x_A + x_B + x_C}{3}, \\quad y_G = \\frac{y_A + y_B + y_C}{3}$$
                  </div>
                </li>
              </ul>
            </div>

            <!-- Bài toán quân mã cờ vua -->
            <div style="margin-top: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
              <h5 style="color: #0f172a; margin: 0 0 8px 0; font-size: 1rem;"><i class="fa-solid fa-chess-knight" style="color: #7c3aed;"></i> Bài toán Quân mã Cờ vua (Bài 4.20 SGK trang 65):</h5>
              <p style="margin: 0; color: #334155; line-height: 1.6;">
                Trên bàn cờ kích thước $8 \\times 8$ (các ô có toạ độ nguyên $0 \\le x, y \\le 7$), quân mã di chuyển theo luật chữ L: vectơ độ dời $\\vec{d} = (\\Delta x; \\Delta y)$ thoả mãn $(|\\Delta x|, |\\Delta y|) \\in \\{(1, 2), (2, 1)\\}$.<br>
                Khi quân mã ở vị trí $M(1; 2)$, có đúng <strong>6 vị trí hợp lệ</strong> mà nó có thể nhảy tới (do hai vị trí có hoành độ âm $-1$ rơi ra ngoài bàn cờ)!
              </p>
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
    title: "TỔNG KẾT BÀI HỌC & BƯỚC ĐỆM SANG HÌNH HỌC TÍCH VÔ HƯỚNG",
    recap: "Phương pháp toạ độ Oxy là cầu nối tuyệt vời giữa hình học trực quan và đại số tính toán. Nhờ có toạ độ, chúng ta chuyển các phép toán vectơ phức tạp thành các phép cộng, trừ, nhân số học chính xác tuyệt đối.",
    audioScript: "Chốt bài học: Thầy Sáng chúc mừng các em đã nắm vững toàn bộ kiến thức trọng tâm của Bài 10: Vectơ trong mặt phẳng toạ độ! Từ đây, mọi tính chất hình học về cùng phương, trung điểm, trọng tâm, độ dài và khoảng cách đều có thể giải quyết nhanh chóng, chính xác bằng các công thức đại số. Bây giờ, các em hãy cùng Thầy rèn luyện 10 câu hỏi trắc nghiệm chuẩn hoá ở Phần IV để kiểm tra mức độ hiểu bài nhé!",
    audioUrl: "assets/audio/b10_10_wrapup.mp3",
    buttonLabel: "Nghe Thầy Sáng chốt bài học"
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2025 BỘ GD&ĐT)
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC BỘ GD&ĐT)",
    // -----------------------------------------------------------------------
    // DẠNG 1: 5 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN (HOÁN VỊ ĐÁP ÁN: B, D, A, C, B)
    // -----------------------------------------------------------------------
    part1MultipleChoice: [
      {
        id: "mc-10-10-1",
        num: 1,
        level: "Nhận biết",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho vectơ $\\vec{u} = 2\\vec{i} - 5\\vec{j}$. Toạ độ của vectơ $\\vec{u}$ là:",
        options: [
          "$(-5; 2)$",
          "$(2; -5)$",
          "$(2; 5)$",
          "$(-2; -5)$"
        ],
        correctIndex: 1, // B
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo định nghĩa toạ độ vectơ: nếu $\\vec{u} = x\\vec{i} + y\\vec{j}$ thì $\\vec{u} = (x; y)$.<br>Với $\\vec{u} = 2\\vec{i} - 5\\vec{j}$, ta có ngay toạ độ là $(2; -5)$.<br>&rArr; <strong>Chọn đáp án B.</strong>",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Cho $\\vec{v} = -3\\vec{i} + 7\\vec{j}$. Toạ độ của $\\vec{v}$ là:",
          options: ["$(7; -3)$", "$(-3; 7)$", "$(3; 7)$", "$(-3; -7)$"],
          correctIndex: 1, // B
          solution: "$\\vec{v} = (-3; 7)$."
        }
      },
      {
        id: "mc-10-10-2",
        num: 2,
        level: "Nhận biết",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho hai điểm $A(1; 3)$ và $B(4; -1)$. Toạ độ của vectơ $\\vec{AB}$ là:",
        options: [
          "$(5; 2)$",
          "$(-3; 4)$",
          "$(3; 4)$",
          "$(3; -4)$"
        ],
        correctIndex: 3, // D
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Toạ độ vectơ $\\vec{AB} = (x_B - x_A;\\, y_B - y_A) = (4 - 1;\\, -1 - 3) = (3; -4)$.<br>&rArr; <strong>Chọn đáp án D.</strong>",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cho $A(2; -1)$ và $B(5; 3)$. Toạ độ $\\vec{AB}$ là:",
          options: ["$(3; 4)$", "$(-3; -4)$", "$(7; 2)$", "$(3; 2)$"],
          correctIndex: 0, // A
          solution: "$\\vec{AB} = (5 - 2; 3 - (-1)) = (3; 4)$."
        }
      },
      {
        id: "mc-10-10-3",
        num: 3,
        level: "Thông hiểu",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho $\\vec{a} = (2; -3)$ và $\\vec{b} = (-1; 4)$. Toạ độ của vectơ $\\vec{u} = 2\\vec{a} + 3\\vec{b}$ là:",
        options: [
          "$(1; 6)$",
          "$(7; 6)$",
          "$(1; -18)$",
          "$(-1; 6)$"
        ],
        correctIndex: 0, // A
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Ta có: $2\\vec{a} = (4; -6)$ và $3\\vec{b} = (-3; 12)$.<br>Suy ra: $\\vec{u} = (4 + (-3);\\, -6 + 12) = (1; 6)$.<br>&rArr; <strong>Chọn đáp án A.</strong>",
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Cho $\\vec{a} = (1; 2)$ và $\\vec{b} = (3; -1)$. Toạ độ $\\vec{u} = 3\\vec{a} - \\vec{b}$ là:",
          options: ["$(0; 7)$", "$(6; 5)$", "$(0; 5)$", "$(6; 7)$"],
          correctIndex: 0, // A
          solution: "$\\vec{u} = (3(1) - 3; 3(2) - (-1)) = (0; 7)$."
        }
      },
      {
        id: "mc-10-10-4",
        num: 4,
        level: "Thông hiểu",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho tam giác $ABC$ có $A(2; 1)$, $B(-1; 3)$ và $C(5; -1)$. Toạ độ trọng tâm $G$ của tam giác $ABC$ là:",
        options: [
          "$G(6; 3)$",
          "$G(3; 1)$",
          "$G(2; 1)$",
          "$G(2; 3)$"
        ],
        correctIndex: 2, // C
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Áp dụng công thức toạ độ trọng tâm tam giác:<br>$$x_G = \\dfrac{x_A + x_B + x_C}{3} = \\dfrac{2 + (-1) + 5}{3} = 2$$<br>$$y_G = \\dfrac{y_A + y_B + y_C}{3} = \\dfrac{1 + 3 + (-1)}{3} = 1$$<br>Vậy $G(2; 1)$.<br>&rArr; <strong>Chọn đáp án C.</strong>",
        similarVariation: {
          prompt: "Câu 4 (Tương tự): Cho tam giác $ABC$ có $A(1; 4)$, $B(2; -2)$, $C(3; 4)$. Toạ độ trọng tâm $G$ là:",
          options: ["$G(2; 3)$", "$G(2; 2)$", "$G(6; 6)$", "$G(3; 2)$"],
          correctIndex: 1, // B
          solution: "$x_G = (1+2+3)/3 = 2$; $y_G = (4-2+4)/3 = 2$."
        }
      },
      {
        id: "mc-10-10-5",
        num: 5,
        level: "Vận dụng",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho ba điểm $A(-2; 3)$, $B(4; 5)$ và $C(2; -1)$. Toạ độ điểm $D$ để tứ giác $ABCD$ là hình bình hành là:",
        options: [
          "$D(0; 7)$",
          "$D(-4; -3)$",
          "$D(8; 1)$",
          "$D(4; 3)$"
        ],
        correctIndex: 1, // B
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Tứ giác $ABCD$ là hình bình hành &hArr; $\\vec{AD} = \\vec{BC}$.<br>Ta có: $\\vec{BC} = (2 - 4;\\, -1 - 5) = (-2; -6)$<br>Và $\\vec{AD} = (x_D - (-2);\\, y_D - 3) = (x_D + 2;\\, y_D - 3)$.<br>Do đó: $\\begin{cases} x_D + 2 = -2 \\\\ y_D - 3 = -6 \\end{cases} \\iff \\begin{cases} x_D = -4 \\\\ y_D = -3 \\end{cases}$.<br>Vậy $D(-4; -3)$.<br>&rArr; <strong>Chọn đáp án B.</strong>",
        similarVariation: {
          prompt: "Câu 5 (Tương tự): Cho $A(1; 1), B(3; 2), C(2; 5)$. Tìm $D$ để $ABCD$ là hình bình hành.",
          options: ["$D(0; 4)$", "$D(4; 6)$", "$D(0; 2)$", "$D(-1; 4)$"],
          correctIndex: 0, // A
          solution: "$\\vec{AD} = \\vec{BC} = (-1; 3) \\Rightarrow D(0; 4)$."
        }
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 2: 3 CÂU TRẮC NGHIỆM ĐÚNG / SAI
    // -----------------------------------------------------------------------
    part2TrueFalse: [
      {
        id: "tf-10-10-1",
        num: 1,
        level: "Thông hiểu",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho hai vectơ $\\vec{a} = (3; -2)$ và $\\vec{b} = (-6; 4)$.",
        items: [
          {
            statement: "a) Hai vectơ $\\vec{a}$ và $\\vec{b}$ cùng phương với nhau.",
            isCorrect: true,
            solution: "Ta có $\\dfrac{-6}{3} = \\dfrac{4}{-2} = -2$, suy ra $\\vec{b} = -2\\vec{a}$ nên hai vectơ cùng phương."
          },
          {
            statement: "b) Vectơ $\\vec{b}$ ngược hướng với vectơ $\\vec{a}$.",
            isCorrect: true,
            solution: "Do $\\vec{b} = k\\vec{a}$ với $k = -2 < 0$ nên hai vectơ ngược hướng nhau."
          },
          {
            statement: "c) Độ dài của vectơ $\\vec{a}$ bằng 5.",
            isCorrect: false,
            solution: "$|\\vec{a}| = \\sqrt{3^2 + (-2)^2} = \\sqrt{13} \\ne 5$."
          },
          {
            statement: "d) Vectơ tổng $\\vec{a} + \\vec{b}$ có toạ độ là $(-3; 2)$.",
            isCorrect: true,
            solution: "$\\vec{a} + \\vec{b} = (3 + (-6);\\, -2 + 4) = (-3; 2)$."
          }
        ]
      },
      {
        id: "tf-10-10-2",
        num: 2,
        level: "Vận dụng",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho ba điểm $A(-1; 2)$, $B(3; 4)$ và $C(1; -2)$.",
        items: [
          {
            statement: "a) Toạ độ của vectơ $\\vec{AB}$ là $(4; 2)$ và $\\vec{AC}$ là $(2; -4)$.",
            isCorrect: true,
            solution: "$\\vec{AB} = (3 - (-1); 4 - 2) = (4; 2)$; $\\vec{AC} = (1 - (-1); -2 - 2) = (2; -4)$."
          },
          {
            statement: "b) Độ dài hai đoạn thẳng $AB$ và $AC$ bằng nhau và bằng $2\\sqrt{5}$.",
            isCorrect: true,
            solution: "$AB = \\sqrt{4^2 + 2^2} = \\sqrt{20} = 2\\sqrt{5}$; $AC = \\sqrt{2^2 + (-4)^2} = \\sqrt{20} = 2\\sqrt{5}$."
          },
          {
            statement: "c) Hai đường thẳng $AB$ và $AC$ vuông góc với nhau.",
            isCorrect: true,
            solution: "Ta có $4 \\times 2 + 2 \\times (-4) = 8 - 8 = 0$, do đó $\\vec{AB} \\perp \\vec{AC}$."
          },
          {
            statement: "d) Tam giác $ABC$ là tam giác đều.",
            isCorrect: false,
            solution: "Tam giác $ABC$ vuông cân tại $A$ chứ không phải tam giác đều."
          }
        ]
      },
      {
        id: "tf-10-10-3",
        num: 3,
        level: "Vận dụng thực tế",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, sự chuyển động của một tàu cứu nạn được biểu diễn như sau (Bài 4.19 SGK trang 65): Tàu xuất phát từ vị trí $A(1; 2)$ và chuyển động thẳng đều với vận tốc được biểu thị bởi vectơ $\\vec{v} = (3; 4)$ (vận tốc tính theo hải lí/giờ).",
        items: [
          {
            statement: "a) Tốc độ chuyển động của tàu là 5 hải lí/giờ.",
            isCorrect: true,
            solution: "Tốc độ bằng độ dài vectơ vận tốc: $|\\vec{v}| = \\sqrt{3^2 + 4^2} = 5$ hải lí/giờ."
          },
          {
            statement: "b) Sau $1{,}5$ giờ, vectơ độ dời của tàu là $\\vec{d} = (4{,}5;\\, 6)$.",
            isCorrect: true,
            solution: "$\\vec{d} = 1{,}5\\vec{v} = 1{,}5(3; 4) = (4{,}5; 6)$."
          },
          {
            statement: "c) Vị trí của tàu trên mặt phẳng toạ độ sau khi khởi hành $1{,}5$ giờ là điểm $M(5{,}5;\\, 8)$.",
            isCorrect: true,
            solution: "$\\vec{OM} = \\vec{OA} + \\vec{d} = (1; 2) + (4{,}5; 6) = (5{,}5; 8) \\Rightarrow M(5{,}5; 8)$."
          },
          {
            statement: "d) Quãng đường tàu đã đi được sau $1{,}5$ giờ là 10 hải lí.",
            isCorrect: false,
            solution: "Quãng đường $s = |\\vec{v}| \\times 1{,}5 = 5 \\times 1{,}5 = 7{,}5$ hải lí (chứ không phải 10 hải lí)."
          }
        ]
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 3: 2 CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN
    // -----------------------------------------------------------------------
    part3ShortAnswer: [
      {
        id: "sa-10-10-1",
        num: 1,
        level: "Thông hiểu",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho hai điểm $A(-3; 2)$ và $B(5; -4)$. Khoảng cách giữa hai điểm $A$ và $B$ bằng bao nhiêu?",
        correctValue: 10,
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Áp dụng công thức khoảng cách giữa hai điểm trong mặt phẳng toạ độ $Oxy$:<br>$$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} = \\sqrt{(5 - (-3))^2 + (-4 - 2)^2} = \\sqrt{8^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10.$$<br>&rArr; <strong>Đáp số: 10.</strong>"
      },
      {
        id: "sa-10-10-2",
        num: 2,
        level: "Vận dụng thực tế",
        prompt: "Trong một bàn cờ vua có kích thước $8 \\times 8$ (các ô có toạ độ nguyên $0 \\le x \\le 7$ và $0 \\le y \\le 7$, theo Bài 4.20 SGK trang 65), quân mã đang đứng ở vị trí có toạ độ $(1; 2)$. Sau đúng một nước đi theo luật cờ vua, quân mã có thể đến được bao nhiêu vị trí hợp lệ trên bàn cờ?",
        correctValue: 6,
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo quy tắc cờ vua, quân mã di chuyển theo vectơ độ dời $(\\pm 1; \\pm 2)$ hoặc $(\\pm 2; \\pm 1)$.<br>Từ vị trí $(1; 2)$, các vị trí đích có thể có là:<br>- $(1+1; 2+2) = (2; 4)$ (hợp lệ)<br>- $(1+1; 2-2) = (2; 0)$ (hợp lệ)<br>- $(1-1; 2+2) = (0; 4)$ (hợp lệ)<br>- $(1-1; 2-2) = (0; 0)$ (hợp lệ)<br>- $(1+2; 2+1) = (3; 3)$ (hợp lệ)<br>- $(1+2; 2-1) = (3; 1)$ (hợp lệ)<br>- $(1-2; 2+1) = (-1; 3)$ (không hợp lệ vì $x = -1 < 0$)<br>- $(1-2; 2-1) = (-1; 1)$ (không hợp lệ vì $x = -1 < 0$).<br>Như vậy, quân mã có chính xác 6 vị trí hợp lệ trên bàn cờ.<br>&rArr; <strong>Đáp số: 6.</strong>"
      }
    ]
  }
};
"""

with open("js/lesson-10-10-data.js", "w", encoding="utf-8") as f:
    f.write(data_js)

print("SUCCESS: Written js/lesson-10-10-data.js")
