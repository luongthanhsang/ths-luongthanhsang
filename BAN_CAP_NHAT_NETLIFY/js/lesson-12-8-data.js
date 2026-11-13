/**
 * BÀI HỌC SỐ: BÀI 8. BIỂU THỨC TOẠ ĐỘ CỦA CÁC PHÉP TOÁN VECTƠ (TOÁN 12 - KẾT NỐI TRI THỨC)
 * 
 * Bản thiết kế chuẩn mực sư phạm ThS. Lương Thanh Sáng:
 * - Cấu trúc 4 phần chuẩn chỉ như Bài 6 & Bài 7
 * - Tích hợp Voice AI Nam Minh (vi-VN-NamMinhNeural) chuẩn sư phạm
 * - Audio Timeline đồng bộ thời gian thực
 * - POI tương tác chấm vàng tại mốc 35% và 75% tự động dừng và bật câu hỏi
 * - Đồ họa hình học không gian 3D SVG sắc nét, không lỗi ký hiệu
 * - 10 câu trắc nghiệm tổng hợp chuẩn cấu trúc đề thi 2025 Bộ GD&ĐT (Dạng 1 hoán vị A, B, C, D; Dạng 2 đủ 4 ý a/b/c/d; Dạng 3 toán thực tế)
 * - Tích hợp đầy đủ Lời giải chi tiết và Bài toán tương tự đổi số liệu tự động
 */

window.LESSON_12_C2_B8_DATA = {
  id: "12-c2-b8",
  grade: "12",
  gradeLabel: "Lớp 12",
  chapterId: "c12-2",
  chapter: "Chương II",
  chapterTitle: "Toạ độ của vectơ trong không gian",
  number: "Bài 8",
  title: "Biểu thức toạ độ của các phép toán vectơ",

  // =========================================================================
  // PHẦN I. LỜI CHÀO THẦY SÁNG
  // =========================================================================
  teacherGreeting: {
    welcomeText: "Thầy Sáng chào cả lớp! Thầy rất vui khi được tiếp tục đồng hành cùng các em trong bài học số 8. Hôm nay, chúng ta sẽ cùng nhau khám phá biểu thức toạ độ của các phép toán vectơ trong không gian. Thầy tin rằng những công cụ đại số mạnh mẽ này sẽ giúp các em giải quyết các bài toán hình học và thực tiễn một cách vô cùng nhẹ nhàng và trực quan. Hãy cùng thầy bắt đầu bài học với thật nhiều hứng khởi nhé!",
    audioScript: "Thầy Sáng chào cả lớp! Thầy rất vui khi được tiếp tục đồng hành cùng các em trong bài học số 8. Hôm nay, chúng ta sẽ cùng nhau khám phá biểu thức toạ độ của các phép toán vectơ trong không gian. Thầy tin rằng những công cụ đại số mạnh mẽ này sẽ giúp các em giải quyết các bài toán hình học và thực tiễn một cách vô cùng nhẹ nhàng và trực quan. Hãy cùng thầy bắt đầu bài học với thật nhiều hứng khởi nhé!",
    audioUrl: "assets/audio/b8_welcome.mp3",
    buttonLabel: "Nghe thầy Sáng chào lớp"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU CẦN ĐẠT (CHUẨN SGK TRANG 67)
  // =========================================================================
  objectives: {
    title: "Mục tiêu bài học cần đạt",
    items: [
      "Nhận biết và thể hiện thành thạo biểu thức toạ độ của các phép toán vectơ trong không gian: cộng hai vectơ, trừ hai vectơ và nhân một số thực với một vectơ.",
      "Xác định chính xác toạ độ trung điểm của đoạn thẳng và toạ độ trọng tâm của tam giác khi biết toạ độ các đỉnh.",
      "Nắm vững biểu thức toạ độ của tích vô hướng, điều kiện hai vectơ vuông góc, công thức tính độ dài vectơ, khoảng cách giữa hai điểm và góc giữa hai vectơ.",
      "Vận dụng linh hoạt biểu thức toạ độ của các phép toán vectơ để giải quyết các bài toán đo đạc, định vị thực tiễn (radar hàng không, kiến trúc nhà gỗ, khinh khí cầu, giàn khoan trên biển)."
    ],
    audioScript: "Mục tiêu và yêu cầu cần đạt: Sau bài học này, các em cần đạt được bốn mục tiêu chính: Thứ nhất, nhận biết và thể hiện thành thạo biểu thức toạ độ của các phép toán vectơ trong không gian, bao gồm phép cộng hai vectơ, phép trừ hai vectơ và phép nhân một số với một vectơ. Thứ hai, xác định chính xác toạ độ trung điểm của đoạn thẳng và toạ độ trọng tâm của tam giác. Thứ ba, nắm vững biểu thức toạ độ của tích vô hướng, điều kiện hai vectơ vuông góc, công thức tính độ dài vectơ, khoảng cách giữa hai điểm và góc giữa hai vectơ. Thứ tư, vận dụng linh hoạt các biểu thức toạ độ để giải quyết các bài toán định vị và đo đạc trong thực tiễn.",
    audioUrl: "assets/audio/b8_goals.mp3",
    buttonLabel: "Nghe thầy Sáng phổ biến mục tiêu"
  },

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN
  // =========================================================================

  // 1. BÀI TOÁN DẪN NHẬP (TÌNH HUỐNG MỞ ĐẦU - HÌNH 2.47 SGK TRANG 67)
  realworldHook: {
    title: "Tình huống mở đầu: Thiết kế kiến trúc căn nhà gỗ lăng trụ tam giác",
    description: `
      <p>Những căn nhà gỗ trong một khu nghỉ dưỡng sinh thái được các kiến trúc sư phác thảo dưới dạng một hình lăng trụ đứng tam giác $OAB.O'A'B'$ như trong hình vẽ dưới đây.</p>
      <p>Chọn hệ toạ độ $Oxyz$ với đơn vị đo là centimét (cm):</p>
      <ul>
        <li>Gốc toạ độ $O(0; 0; 0)$ đặt tại một đỉnh góc của mặt trước căn nhà trên mặt đất.</li>
        <li>Trục $Ox$ dọc theo chiều rộng mặt tiền, trục $Oy$ dọc theo chiều dài căn nhà trên mặt đất, trục $Oz$ hướng thẳng đứng lên trần.</li>
        <li>Hai điểm $A'$ và $B'$ ở mặt sau có toạ độ lần lượt là $A'(240; 450; 0)$ và $B'(120; 450; 300)$.</li>
      </ul>
      <p><strong>Câu hỏi đặt ra:</strong> Từ toạ độ của hai điểm $A'$ và $B'$, làm thế nào để các kỹ sư tính toán chính xác kích thước mỗi chiều (chiều dài, chiều rộng, chiều cao nóc) và độ dốc mái của căn nhà gỗ?</p>
    `,
    audioScript: "Bài toán dẫn nhập: Quan sát những căn nhà gỗ xinh xắn trong một khu nghỉ dưỡng, các kiến trúc sư đã phác thảo chúng dưới dạng hình lăng trụ đứng tam giác OAB chấm O phẩy A phẩy B phẩy. Khi gắn hệ toạ độ không gian Oxyz với đơn vị đo là centimét, điểm A phẩy có toạ độ 240, 450, 0 và điểm B phẩy có toạ độ 120, 450, 300. Bằng cách nào chỉ từ toạ độ hai điểm này, các kỹ sư xây dựng có thể tính toán chính xác kích thước mỗi chiều và độ dốc mái của căn nhà gỗ? Chúng ta cùng đi tìm câu trả lời qua bài học hôm nay.",
    audioUrl: "assets/audio/b8_hook.mp3",
    buttonLabel: "Nghe thầy Sáng đặt vấn đề",
    svgIllustration: `
      <svg viewBox="0 0 760 380" style="width: 100%; max-width: 720px; height: auto; display: block; margin: 15px auto; background: linear-gradient(135deg, #f8fafc, #f1f5f9); border-radius: 12px; border: 1px solid #cbd5e1; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <defs>
          <marker id="arrow-hook" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0369a1"/>
          </marker>
          <linearGradient id="roofGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fdba74" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#ea580c" stop-opacity="0.4"/>
          </linearGradient>
          <linearGradient id="roofGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fed7aa" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#f97316" stop-opacity="0.5"/>
          </linearGradient>
          <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#e2e8f0" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#cbd5e1" stop-opacity="0.3"/>
          </linearGradient>
        </defs>

        <!-- Trục toạ độ Oxyz -->
        <!-- Trục Oy (sang phải chếch nhẹ) -->
        <line x1="220" y1="260" x2="710" y2="230" stroke="#0369a1" stroke-width="2.2" marker-end="url(#arrow-hook)"/>
        <text x="715" y="235" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0369a1">y (Chiều dài)</text>

        <!-- Trục Ox (hướng chéo ra phía trước) -->
        <line x1="220" y1="260" x2="80" y2="340" stroke="#0369a1" stroke-width="2.2" marker-end="url(#arrow-hook)"/>
        <text x="50" y="348" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0369a1">x (Chiều rộng)</text>

        <!-- Trục Oz (thẳng đứng lên) -->
        <line x1="220" y1="260" x2="220" y2="40" stroke="#0369a1" stroke-width="2.2" marker-end="url(#arrow-hook)"/>
        <text x="228" y="45" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0369a1">z (Chiều cao)</text>

        <!-- Các toạ độ các đỉnh lăng trụ OAB.O'A'B' -->
        <!-- O(0,0,0) = (220, 260) -->
        <!-- A(240, 0, 0) trên trục Ox = (130, 311) -->
        <!-- B(120, 0, 300) = trung điểm Ox gióng lên z 150px = (175, 125) -->
        <!-- O'(0, 450, 0) trên Oy = (570, 238) -->
        <!-- A'(240, 450, 0) = (480, 289) -->
        <!-- B'(120, 450, 300) = (525, 103) -->

        <!-- Đáy sàn OAA'O' nét đứt O-O' và O-A -->
        <polygon points="220,260 570,238 480,289 130,311" fill="url(#wallGrad)"/>
        <line x1="220" y1="260" x2="570" y2="238" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5,5"/>
        <line x1="220" y1="260" x2="130" y2="311" stroke="#0f172a" stroke-width="2.2"/>
        <line x1="130" y1="311" x2="480" y2="289" stroke="#0f172a" stroke-width="2.2"/>
        <line x1="480" y1="289" x2="570" y2="238" stroke="#0f172a" stroke-width="2.2"/>

        <!-- Mặt mái trái OBB'O' -->
        <polygon points="220,260 175,125 525,103 570,238" fill="url(#roofGrad1)"/>
        <line x1="220" y1="260" x2="175" y2="125" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5,5"/>
        <line x1="175" y1="125" x2="525" y2="103" stroke="#b91c1c" stroke-width="2.4"/>
        <line x1="570" y1="238" x2="525" y2="103" stroke="#b91c1c" stroke-width="2.2"/>

        <!-- Mặt mái phải ABB'A' -->
        <polygon points="130,311 175,125 525,103 480,289" fill="url(#roofGrad2)"/>
        <line x1="130" y1="311" x2="175" y2="125" stroke="#b91c1c" stroke-width="2.4"/>
        <line x1="480" y1="289" x2="525" y2="103" stroke="#b91c1c" stroke-width="2.4"/>

        <!-- Điểm đỉnh và Nhãn -->
        <circle cx="220" cy="260" r="5" fill="#0369a1"/>
        <text x="202" y="278" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0369a1">O</text>

        <circle cx="130" cy="311" r="5" fill="#1e293b"/>
        <text x="110" y="325" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1e293b">A</text>

        <circle cx="175" cy="125" r="5" fill="#b91c1c"/>
        <text x="155" y="120" font-family="sans-serif" font-size="15" font-weight="bold" fill="#b91c1c">B</text>

        <circle cx="570" cy="238" r="5" fill="#0369a1"/>
        <text x="580" y="245" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0369a1">O'</text>

        <circle cx="480" cy="289" r="6" fill="#047857"/>
        <text x="455" y="315" font-family="sans-serif" font-size="15" font-weight="bold" fill="#047857">A'(240; 450; 0)</text>

        <circle cx="525" cy="103" r="6" fill="#047857"/>
        <text x="535" y="98" font-family="sans-serif" font-size="15" font-weight="bold" fill="#047857">B'(120; 450; 300)</text>

        <!-- Ký hiệu góc dốc mái alpha -->
        <path d="M 450,291 A 30,30 0 0,0 488,270" fill="none" stroke="#d97706" stroke-width="2.5"/>
        <text x="475" y="260" font-family="sans-serif" font-size="16" font-weight="bold" fill="#d97706">α</text>

        <!-- Chú thích kích thước -->
        <text x="320" y="325" font-family="sans-serif" font-size="13" font-weight="bold" fill="#475569">Chiều dài = 450 cm</text>
        <text x="60" y="245" font-family="sans-serif" font-size="13" font-weight="bold" fill="#475569">Chiều rộng = 240 cm</text>
        <text x="340" y="100" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b91c1c">Đỉnh nóc B'(cao 300 cm)</text>
      </svg>
    `
  },

  // =========================================================================
  // =========================================================================
  // 4 MỤC LÝ THUYẾT ĐỘC LẬP (ĐẦY ĐỦ AUDIO, TIMELINE, POI, VÍ DỤ, LUYỆN TẬP)
  // CHUẨN CẤU TRÚC BÀI 6 & BÀI 7: num, audioUrl, checkpoints, subsections
  // =========================================================================
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1. BIỂU THỨC TOẠ ĐỘ CỘNG, TRỪ HAI VECTƠ & NHÂN SỐ VỚI VECTƠ
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "Biểu thức toạ độ của phép cộng hai vectơ, phép trừ hai vectơ và phép nhân một số với vectơ",
      audioScript: "Trong không gian Oxyz, toạ độ của tổng hoặc hiệu hai vectơ bằng tổng hoặc hiệu các toạ độ tương ứng của chúng. Toạ độ của tích một số thực với một vectơ bằng tích của số đó với từng toạ độ của vectơ. Hai vectơ cùng phương khi và chỉ khi các toạ độ tương ứng tỉ lệ với nhau.",
      audioUrl: "assets/audio/b8_sec1.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-12-8-sec1-1",
          time: 7,
          title: "Giây 7: Phép cộng toạ độ vectơ",
          question: "Trong không gian $Oxyz$, cho $\\vec{u} = (2; -1; 4)$ và $\\vec{v} = (1; 3; -2)$. Toạ độ của vectơ $\\vec{u} + \\vec{v}$ là:",
          options: [
            "$(1; -4; 6)$",
            "$(3; 2; 2)$",
            "$(2; -3; -8)$",
            "$(3; -2; 2)$"
          ],
          correctIndex: 1,
          hint: "Cộng từng thành phần hoành độ với hoành độ, tung độ với tung độ, cao độ với cao độ.",
          explain: "Chính xác! Áp dụng công thức cộng toạ độ: $\\vec{u} + \\vec{v} = (2+1; -1+3; 4+(-2)) = (3; 2; 2)$."
        },
        {
          id: "poi-12-8-sec1-2",
          time: 15,
          title: "Giây 15: Điều kiện hai vectơ cùng phương",
          question: "Cho vectơ $\\vec{a} = (2; -4; 6)$. Vectơ nào dưới đây cùng phương với vectơ $\\vec{a}$?",
          options: [
            "$\\vec{b_1} = (1; -2; 3)$",
            "$\\vec{b_2} = (1; 2; 3)$",
            "$\\vec{b_3} = (-2; -4; 6)$",
            "$\\vec{b_4} = (4; -8; 10)$"
          ],
          correctIndex: 0,
          hint: "Hai vectơ cùng phương khi toạ độ của chúng tỉ lệ với nhau.",
          explain: "Chính xác! Ta có $\\vec{a} = 2\\vec{b_1} \\iff (2; -4; 6) = 2(1; -2; 3)$ nên hai vectơ cùng phương."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Các công thức toạ độ phép cộng, trừ vectơ và nhân một số với vectơ",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Ghi nhớ nguyên văn SGK Toán 12 - Trang 67]:</div>
              <p>Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (x; y; z)$ và $\\vec{b} = (x'; y'; z')$. Khi đó:</p>
              <ul class="sgk-box-list">
                <li><strong>Phép cộng:</strong> $\\vec{a} + \\vec{b} = (x + x';\\, y + y';\\, z + z')$</li>
                <li><strong>Phép trừ:</strong> $\\vec{a} - \\vec{b} = (x - x';\\, y - y';\\, z - z')$</li>
                <li><strong>Phép nhân một số thực:</strong> $k\\vec{a} = (kx;\\, ky;\\, kz)$ với $k \\in \\mathbb{R}$</li>
                <li><strong>Vectơ đối:</strong> $-\\vec{a} = (-x;\\, -y;\\, -z)$</li>
              </ul>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 1 (SGK trang 68): Phép tính toạ độ cơ bản",
            problem: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (2; 1; 5)$ và $\\vec{b} = (2; 2; 1)$. Tìm toạ độ của mỗi vectơ sau: a) $\\vec{a} - \\vec{b}$; b) $3\\vec{a} + 2\\vec{b}$.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>a) $\\vec{a} - \\vec{b} = (2 - 2;\\, 1 - 2;\\, 5 - 1) = (0;\\, -1;\\, 4)$.</p>
              <p>b) Ta có $3\\vec{a} = (6;\\, 3;\\, 15)$ và $2\\vec{b} = (4;\\, 4;\\, 2)$.<br>
              Do đó: $3\\vec{a} + 2\\vec{b} = (6 + 4;\\, 3 + 4;\\, 15 + 2) = (10;\\, 7;\\, 17)$.</p>
            `,
            teacherGuidance: "Mẹo của Thầy Sáng: Các phép toán trên toạ độ vectơ được thực hiện độc lập trên từng thành phần trục toạ độ."
          }
        },
        {
          key: "1b",
          title: "Điều kiện hai vectơ cùng phương",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Định lý cùng phương - SGK trang 68]:</div>
              <p>Vectơ $\\vec{a} = (x; y; z)$ cùng phương với vectơ $\\vec{b} = (x'; y'; z') \\ne \\vec{0}$ khi và chỉ khi tồn tại một số thực $k$ sao cho:</p>
              <div style="text-align: center; margin: 10px 0; font-size: 1.15rem; color: #1e3a8a;">
                $$\\begin{cases} x = kx' \\\\ y = ky' \\\\ z = kz' \\end{cases} \\iff \\frac{x}{x'} = \\frac{y}{y'} = \\frac{z}{z'} \\quad (\\text{với } x', y', z' \\ne 0)$$
              </div>
            </div>
          `,
          workedExample: {
            title: "Luyện tập 1 (SGK trang 68): Phối hợp các phép toán vectơ",
            problem: "Trong không gian $Oxyz$, cho ba vectơ $\\vec{u} = (1; 8; 6)$, $\\vec{v} = (-1; 3; -2)$ và $\\vec{w} = (0; 5; 4)$. Tìm toạ độ của vectơ $\\vec{u} - 2\\vec{v} + \\vec{w}$.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>Ta có: $-2\\vec{v} = -2(-1;\\, 3;\\, -2) = (2;\\, -6;\\, 4)$.<br>
              Suy ra: $\\vec{u} - 2\\vec{v} + \\vec{w} = (1 + 2 + 0;\\, 8 - 6 + 5;\\, 6 + 4 + 4) = (3;\\, 7;\\, 14)$.</p>
            `,
            teacherGuidance: "Thầy Sáng lưu ý: Cẩn thận dấu trừ khi nhân phân phối số âm vào các toạ độ."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2. TOẠ ĐỘ TRUNG ĐIỂM ĐOẠN THẲNG & TRỌNG TÂM TAM GIÁC, TỨ DIỆN
    // -----------------------------------------------------------------------
    {
      num: "2",
      title: "Toạ độ trung điểm của đoạn thẳng và toạ độ trọng tâm tam giác, tứ diện",
      audioScript: "Toạ độ trung điểm của đoạn thẳng bằng trung bình cộng toạ độ của hai đầu mút. Tương tự, toạ độ trọng tâm tam giác bằng trung bình cộng toạ độ của ba đỉnh, và toạ độ trọng tâm tứ diện bằng trung bình cộng toạ độ của bốn đỉnh.",
      audioUrl: "assets/audio/b8_sec2.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-12-8-sec2-1",
          time: 9,
          title: "Giây 9: Toạ độ trung điểm",
          question: "Trong không gian $Oxyz$, cho $A(2; -1; 3)$ và $B(4; 5; 1)$. Toạ độ trung điểm $M$ của đoạn thẳng $AB$ là:",
          options: [
            "$(6; 4; 4)$",
            "$(3; 2; 2)$",
            "$(1; 3; -1)$",
            "$(2; 6; -2)$"
          ],
          correctIndex: 1,
          hint: "Lấy toạ độ hai điểm cộng lại chia đôi.",
          explain: "Chính xác! $x_M = (2+4)/2 = 3; y_M = (-1+5)/2 = 2; z_M = (3+1)/2 = 2 \\implies M(3; 2; 2)$."
        },
        {
          id: "poi-12-8-sec2-2",
          time: 19,
          title: "Giây 19: Tìm toạ độ đỉnh từ trọng tâm",
          question: "Cho tam giác $ABC$ có $A(1; 2; 0), B(3; -1; 4)$ và trọng tâm $G(2; 1; 1)$. Toạ độ của đỉnh $C$ là:",
          options: [
            "$(2; 0; -1)$",
            "$(0; 2; 1)$",
            "$(2; 2; -1)$",
            "$(6; 3; 3)$"
          ],
          correctIndex: 2,
          hint: "Nhân 3 toạ độ của trọng tâm G rồi trừ đi toạ độ của A và B.",
          explain: "Chính xác! $x_C = 3(2) - 1 - 3 = 2; y_C = 3(1) - 2 - (-1) = 2; z_C = 3(1) - 0 - 4 = -1 \\implies C(2; 2; -1)$."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Toạ độ trung điểm của đoạn thẳng",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Công thức trung điểm - SGK trang 68]:</div>
              <p>Cho đoạn thẳng $AB$ với $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$. Trung điểm $M$ của đoạn thẳng $AB$ có toạ độ là:</p>
              <div style="text-align: center; font-size: 1.15rem; color: #1e3a8a; margin: 10px 0;">
                $$M\\left(\\frac{x_A + x_B}{2};\\, \\frac{y_A + y_B}{2};\\, \\frac{z_A + z_B}{2}\\right)$$
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 2 (SGK trang 68): Tìm toạ độ trung điểm và trọng tâm",
            problem: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 3), B(3; 2; 1)$ và $C(2; -1; 5)$. Tìm toạ độ trung điểm $M$ của đoạn thẳng $AB$ và toạ độ trọng tâm $G$ của tam giác $ABC$.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>Vì $M$ là trung điểm của $AB$ nên: $M((1+3)/2;\\, (2+2)/2;\\, (3+1)/2) \\implies M(2;\\, 2;\\, 2)$.</p>
              <p>Vì $G$ là trọng tâm của $\\triangle ABC$ nên: $G((1+3+2)/3;\\, (2+2-1)/3;\\, (3+1+5)/3) \\implies G(2;\\, 1;\\, 3)$.</p>
            `,
            teacherGuidance: "Mẹo của Thầy Sáng: Nhớ quy tắc: Trung điểm chia 2, Trọng tâm tam giác chia 3."
          }
        },
        {
          key: "2b",
          title: "Toạ độ trọng tâm tam giác và toạ độ trọng tâm tứ diện",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Công thức trọng tâm - SGK trang 69]:</div>
              <p>Cho tam giác $ABC$ có $A(x_A; y_A; z_A), B(x_B; y_B; z_B), C(x_C; y_C; z_C)$. Trọng tâm $G$ có toạ độ:</p>
              <div style="text-align: center; font-size: 1.15rem; color: #1e3a8a; margin: 8px 0;">
                $$G\\left(\\frac{x_A + x_B + x_C}{3};\\, \\frac{y_A + y_B + y_C}{3};\\, \\frac{z_A + z_B + z_C}{3}\\right)$$
              </div>
              <p><em>Mở rộng tứ diện:</em> Với tứ diện $ABCD$, trọng tâm tứ diện $G$ có toạ độ:</p>
              <div style="text-align: center; font-size: 1.15rem; color: #1e3a8a; margin: 8px 0;">
                $$G\\left(\\frac{x_A + x_B + x_C + x_D}{4};\\, \\frac{y_A + y_B + y_C + y_D}{4};\\, \\frac{z_A + z_B + z_C + z_D}{4}\\right)$$
              </div>
            </div>
          `,
          workedExample: {
            title: "Luyện tập 2 (SGK trang 69): Tìm toạ độ đỉnh khi biết trọng tâm",
            problem: "Trong không gian $Oxyz$, cho ba điểm $A(2; 9; -1), B(9; 4; 5)$ và $G(3; 0; 4)$. Tìm toạ độ điểm $C$ sao cho tam giác $ABC$ nhận $G$ là trọng tâm.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>Áp dụng công thức toạ độ trọng tâm tam giác:<br>
              $$\\begin{cases} x_C = 3x_G - x_A - x_B = 3(3) - 2 - 9 = -2 \\\\ y_C = 3y_G - y_A - y_B = 3(0) - 9 - 4 = -13 \\\\ z_C = 3z_G - z_A - z_B = 3(4) - (-1) - 5 = 8 \\end{cases}$$
              Vậy $C(-2;\\, -13;\\, 8)$.</p>
            `,
            teacherGuidance: "Thầy Sáng hướng dẫn: Nhân chéo $3x_G$ rồi trừ đi toạ độ 2 đỉnh đã biết."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3. BIỂU THỨC TOẠ ĐỘ CỦA TÍCH VÔ HƯỚNG VÀ ỨNG DỤNG HÌNH HỌC
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "Biểu thức toạ độ của tích vô hướng và các ứng dụng hình học",
      audioScript: "Tích vô hướng của hai vectơ trong không gian bằng tổng các tích của hai toạ độ tương ứng. Từ công thức này, ta suy ra biểu thức tính độ dài của một vectơ, khoảng cách giữa hai điểm trong không gian, góc giữa hai vectơ và điều kiện để hai vectơ vuông góc.",
      audioUrl: "assets/audio/b8_sec3.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-12-8-sec3-1",
          time: 10,
          title: "Giây 10: Tích vô hướng của hai vectơ",
          question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; -2; 3)$ và $\\vec{b} = (4; 1; -2)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
          options: [
            "$4$",
            "$-4$",
            "$0$",
            "$12$"
          ],
          correctIndex: 1,
          hint: "Nhân hoành với hoành, tung với tung, cao với cao rồi cộng lại.",
          explain: "Chính xác! $\\vec{a} \\cdot \\vec{b} = 1(4) + (-2)(1) + 3(-2) = 4 - 2 - 6 = -4$."
        },
        {
          id: "poi-12-8-sec3-2",
          time: 21,
          title: "Giây 21: Khoảng cách giữa hai điểm",
          question: "Khoảng cách giữa hai điểm $A(1; 0; 2)$ và $B(3; -2; 1)$ trong không gian bằng:",
          options: [
            "$9$",
            "$5$",
            "$3$",
            "$\\sqrt{13}$"
          ],
          correctIndex: 2,
          hint: "Căn bậc hai của tổng bình phương các hiệu toạ độ.",
          explain: "Chính xác! $AB = \\sqrt{(3-1)^2 + (-2-0)^2 + (1-2)^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Biểu thức toạ độ của tích vô hướng",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Định lý tích vô hướng - SGK trang 69]:</div>
              <p>Trong không gian $Oxyz$, tích vô hướng của hai vectơ $\\vec{a} = (x; y; z)$ và $\\vec{b} = (x'; y'; z')$ được xác định bởi:</p>
              <div style="text-align: center; font-size: 1.3rem; font-weight: bold; color: #1e3a8a; margin: 12px 0;">
                $$\\vec{a} \\cdot \\vec{b} = xx' + yy' + zz'$$
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 3 (SGK trang 69): Tính tích vô hướng và độ dài vectơ",
            problem: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; 4; 2)$ và $\\vec{b} = (-4; 1; 0)$. a) Tính $\\vec{a} \\cdot \\vec{b}$ và cho biết hai vectơ có vuông góc không. b) Tính độ dài của $\\vec{a}$.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>a) $\\vec{a} \\cdot \\vec{b} = 1(-4) + 4(1) + 2(0) = 0$. Do đó, hai vectơ $\\vec{a}$ và $\\vec{b}$ vuông góc với nhau (\\vec{a} \\perp \\vec{b}).</p>
              <p>b) $|\\vec{a}| = \\sqrt{1^2 + 4^2 + 2^2} = \\sqrt{1 + 16 + 4} = \\sqrt{21}$.</p>
            `,
            teacherGuidance: "Mẹo của Thầy Sáng: Tích vô hướng bằng 0 là chìa khóa vàng để chứng minh quan hệ vuông góc."
          }
        },
        {
          key: "3b",
          title: "Hệ quả: Độ dài, khoảng cách và côsin góc giữa hai vectơ",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Các hệ quả hình học - SGK trang 70]:</div>
              <ul class="sgk-box-list">
                <li><strong>Độ dài vectơ:</strong> $|\\vec{a}| = \\sqrt{x^2 + y^2 + z^2}$</li>
                <li><strong>Khoảng cách giữa hai điểm:</strong> $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$</li>
                <li><strong>Điều kiện vuông góc:</strong> $\\vec{a} \\perp \\vec{b} \\iff xx' + yy' + zz' = 0$ (với $\\vec{a}, \\vec{b} \\ne \\vec{0}$)</li>
                <li><strong>Cô-sin góc giữa hai vectơ:</strong><br>
                  $$\\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|} = \\frac{xx' + yy' + zz'}{\\sqrt{x^2 + y^2 + z^2} \\cdot \\sqrt{x'^2 + y'^2 + z'^2}}$$
                </li>
              </ul>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 4 (SGK trang 69): Hình chóp gắn hệ toạ độ Oxyz",
            problem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật và $SA \\perp (ABCD)$. Giả sử $SA = 2, AB = 3, AD = 4$. Chọn hệ toạ độ $Oxyz$ với $A \\equiv O, B \\in Ox, D \\in Oy, S \\in Oz$. Tính góc giữa hai vectơ $\\vec{BD}$ và $\\vec{SC}$.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>Ta có $B(3; 0; 0), D(0; 4; 0) \\implies \\vec{BD} = (-3; 4; 0) \\implies BD = 5$.<br>
              $S(0; 0; 2), C(3; 4; 0) \\implies \\vec{SC} = (3; 4; -2) \\implies SC = \\sqrt{29}$.</p>
              <p>$$\\cos(\\vec{BD}, \\vec{SC}) = \\frac{(-3)(3) + 4(4) + 0(-2)}{5\\sqrt{29}} = \\frac{7}{5\\sqrt{29}} \\approx 0{,}2600 \\implies (\\vec{BD}, \\vec{SC}) \\approx 74{,}9^\\circ.$$</p>
            `,
            teacherGuidance: "Mẹo của Thầy Sáng: Khi đáy và cạnh bên đôi một vuông góc, luôn chọn đỉnh đó làm gốc O để toạ độ hoá đơn giản nhất."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4. VẬN DỤNG TOẠ ĐỘ VECTƠ TRONG CÁC BÀI TOÁN THỰC TIỄN
    // -----------------------------------------------------------------------
    {
      num: "4",
      title: "Vận dụng toạ độ của vectơ trong một số bài toán có liên quan đến thực tiễn",
      audioScript: "Trong thực tiễn, việc thiết lập hệ toạ độ không gian giúp ta mô hình hoá và giải quyết nhanh chóng các bài toán định vị hàng hải, quỹ đạo bay của máy bay, kiểm soát không lưu cũng như tính toán độ nghiêng của công trình xây dựng.",
      audioUrl: "assets/audio/b8_sec4.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-12-8-sec4-1",
          time: 10,
          title: "Giây 10: Toạ độ máy bay chuyển động thẳng đều",
          question: "Một máy bay bay thẳng đều từ điểm $A(800; 500; 7)$ đến $B(940; 550; 8)$ trong 10 phút. Nếu tiếp tục bay theo hướng và vận tốc đó trong 5 phút tiếp theo thì máy bay đến điểm $C$ có toạ độ là:",
          options: [
            "$(1010; 575; 8{,}5)$",
            "$(1080; 600; 9)$",
            "$(870; 525; 7{,}5)$",
            "$(1000; 580; 8)$"
          ],
          correctIndex: 0,
          hint: "Vì thời gian bằng 1/2 nên vectơ BC bằng 1/2 vectơ AB.",
          explain: "Chính xác! $\\vec{BC} = \\frac{1}{2}\\vec{AB} = (70; 25; 0{,}5) \\implies C(940+70; 550+25; 8+0{,}5) = (1010; 575; 8{,}5)$."
        },
        {
          id: "poi-12-8-sec4-2",
          time: 21,
          title: "Giây 21: Khoảng cách giữa hai khinh khí cầu",
          question: "Hai khinh khí cầu có toạ độ $M(2; 1; 0{,}5)$ và $N(-1; -1{,}5; 0{,}8)$ (đơn vị: km). Khoảng cách giữa hai khinh khí cầu làm tròn đến hàng phần trăm là:",
          options: [
            "$3{,}25\\text{ km}$",
            "$4{,}12\\text{ km}$",
            "$3{,}92\\text{ km}$",
            "$5{,}10\\text{ km}$"
          ],
          correctIndex: 2,
          hint: "Tính độ dài đoạn thẳng MN theo công thức khoảng cách giữa hai điểm.",
          explain: "Chính xác! $MN = \\sqrt{(-1-2)^2 + (-1{,}5-1)^2 + (0{,}8-0{,}5)^2} = \\sqrt{9 + 6{,}25 + 0{,}09} = \\sqrt{15{,}34} \\approx 3{,}92\\text{ km}$."
        }
      ],
      subsections: [
        {
          key: "4a",
          title: "Mô hình hoá chuyển động thẳng đều trong không gian",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Phương pháp mô hình thực tiễn - SGK trang 70]:</div>
              <p>Khi vật chuyển động thẳng đều với vận tốc không đổi từ $A$ đến $B$ trong thời gian $t_1$, và tiếp tục chuyển động đến $C$ trong thời gian $t_2$, ta luôn có đẳng thức vectơ liên hệ:</p>
              <div style="text-align: center; font-size: 1.15rem; color: #1e3a8a; margin: 10px 0;">
                $$\\vec{BC} = \\frac{t_2}{t_1} \\vec{AB}$$
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 5 (SGK trang 70): Định vị đường bay radar giám sát",
            problem: "Radar phát hiện máy bay bay thẳng đều từ $A(800; 500; 7)$ đến $B(940; 550; 8)$ trong 10 phút. Nếu tiếp tục bay theo hướng và vận tốc đó trong 5 phút tiếp theo thì máy bay đến điểm $C$ có toạ độ là gì? (đơn vị km).",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>Ta có $\\vec{AB} = (140;\\, 50;\\, 1)$. Vì $t_2 = 5$ phút $= \\frac{1}{2} t_1$ nên $\\vec{BC} = \\frac{1}{2}\\vec{AB} = (70;\\, 25;\\, 0{,}5)$.<br>
              Suy ra: $C(940 + 70;\\, 550 + 25;\\, 8 + 0{,}5) = C(1010;\\, 575;\\, 8{,}5)$.</p>
            `,
            teacherGuidance: "Mẹo của Thầy Sáng: Vectơ vận tốc và thời gian cho phép xác định chính xác vị trí tiếp theo trên quỹ đạo bay."
          }
        },
        {
          key: "4b",
          title: "Xác định khoảng cách và góc nghiêng công trình xây dựng",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Ứng dụng khoảng cách và góc - SGK trang 71]:</div>
              <p>Ứng dụng công thức khoảng cách và góc vô hướng trong xây dựng để đo chính xác chiều dài thanh xà gồ, độ dốc mái nhà và khoảng cách an toàn giữa các thiết bị trên không.</p>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 7 (SGK trang 71): Khoảng cách giữa hai khinh khí cầu",
            problem: "Khinh khí cầu 1 ở $M(2; 1; 0{,}5)$ và khinh khí cầu 2 ở $N(-1; -1{,}5; 0{,}8)$ (đơn vị: km). Xác định khoảng cách giữa hai chiếc khinh khí cầu.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>$$MN = \\sqrt{(-1 - 2)^2 + (-1{,}5 - 1)^2 + (0{,}8 - 0{,}5)^2} = \\sqrt{9 + 6{,}25 + 0{,}09} = \\sqrt{15{,}34} \\approx 3{,}92\\text{ km}.$$</p>
            `,
            teacherGuidance: "Thầy Sáng lưu ý: Đơn vị khoảng cách phải thống nhất trước khi áp dụng công thức căn bậc hai."
          }
        }
      ]
    }
  ],

    // CHỐT BÀI HỌC VÀ VẬN DỤNG THỰC TIỄN
  // =========================================================================
  realworldWrapup: {
    title: "PHẦN IV. CHỐT BÀI HỌC VÀ VẬN DỤNG THỰC TIỄN",
    recap: "Trở lại bài toán căn nhà gỗ mở đầu: Nhờ các phép toán toạ độ vectơ, chúng ta xác định được chiều dài căn nhà là 450 centimét, chiều rộng là 240 centimét, các cạnh bên mái nhà dài xấp xỉ 323 centimét và góc dốc của mái nhà xấp xỉ 68,2 độ. Đồng thời, biểu thức toạ độ vectơ còn cho phép giải quyết bài toán radar tầm quét giàn khoan trên biển xác định khoảng cách tới tàu thám hiểm ngoài khơi xa.",
    takeaway: "Biểu thức toạ độ của các phép toán vectơ biến các bài toán định vị không gian phức tạp thành các phép tính đại số chuẩn mực, chính xác, làm nền tảng cho đồ hoạ 3D, điều khiển bay tự động và định vị hàng hải hiện đại.",
    solution: `
      <p><strong>1. Trở lại Bài toán dẫn nhập (Kích thước căn nhà gỗ):</strong></p>
      <ul>
        <li>Điểm $A'(240; 450; 0)$ cho ta chiều rộng căn nhà là $OA = 240\\text{ cm}$ và chiều dài căn nhà là $OO' = 450\\text{ cm}$.</li>
        <li>Chiều dài cạnh bên mái nhà chính là độ dài đoạn thẳng $A'B'$ với $B'(120; 450; 300)$:<br>
        $$A'B' = \\sqrt{(120 - 240)^2 + (450 - 450)^2 + (300 - 0)^2} = \\sqrt{(-120)^2 + 0^2 + 300^2} = 60\\sqrt{29} \\approx 323\\text{ cm}.$$
        </li>
        <li>Góc dốc $\\alpha$ của mái nhà so với mặt đất thoả mãn:<br>
        $$\\cos\\alpha = \\frac{120}{60\\sqrt{29}} = \\frac{2}{\\sqrt{29}} \\approx 0{,}3714 \\implies \\alpha \\approx 68{,}2^\\circ.$$
        </li>
      </ul>
      <p><strong>2. Vận dụng: Giàn khoan radar trên biển (Bài 2.24 SGK trang 72):</strong></p>
      <p>Giàn khoan tại gốc $O(0; 0; 0)$, tàu thám hiểm tại $M(25; 15; -10)$ (đơn vị km). Khoảng cách từ radar đến tàu là:<br>
      $$OM = \\sqrt{25^2 + 15^2 + (-10)^2} = \\sqrt{625 + 225 + 100} = \\sqrt{950} \\approx 30{,}82\\text{ km}.$$
      Vì $OM \\approx 30{,}82\\text{ km} > 30\\text{ km}$ (tầm quét tối đa của radar), nên radar giàn khoan chưa thể phát hiện được tàu thám hiểm này.</p>
    `,
    audioUrl: "assets/audio/b8_wrapup.mp3",
    buttonLabel: "Nghe thầy Sáng chốt bài học"
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2025 BỘ GD&ĐT)
  // LƯU Ý ĐẶC BIỆT: ĐÁP ÁN ĐÚNG HOÁN VỊ ĐA DẠNG B, C, A, D, B (KHÔNG ĐỂ TOÀN BỘ LÀ A)
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2025 BỘ GD&ĐT)",

    // -----------------------------------------------------------------------
    // DẠNG 1: 5 CÂU NHIỀU LỰA CHỌN (NHẬN BIẾT & THÔNG HIỂU)
    // -----------------------------------------------------------------------
    part1MultipleChoice: [
      {
        id: "mc-12-8-1",
        num: 1,
        level: "Nhận biết",
        prompt: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; -2; 3)$ và $\\vec{b} = (2; 1; -1)$. Toạ độ của vectơ $\\vec{u} = 2\\vec{a} + \\vec{b}$ là:",
        options: [
          "A. $(3; -1; 2)$",
          "B. $(4; -3; 5)$",
          "C. $(0; -5; 7)$",
          "D. $(5; -3; 4)$"
        ],
        correctIndex: 1, // Đáp án B
        solution: `
          <p><strong>Đáp án đúng: B</strong></p>
          <p>Ta có: $2\\vec{a} = 2(1;\\, -2;\\, 3) = (2;\\, -4;\\, 6)$.<br>
          Suy ra: $\\vec{u} = 2\\vec{a} + \\vec{b} = (2 + 2;\\, -4 + 1;\\, 6 + (-1)) = (4;\\, -3;\\, 5)$.</p>
        `,
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (2; -1; 1)$ và $\\vec{b} = (1; 3; -2)$. Toạ độ của vectơ $\\vec{u} = 3\\vec{a} - \\vec{b}$ là:",
          options: [
            "A. $(7; 0; 1)$",
            "B. $(3; -4; 3)$",
            "C. $(5; -6; 5)$",
            "D. $(5; 0; 5)$"
          ],
          correctIndex: 2, // Đáp án C
          solution: "Ta có $3\\vec{a} = (6; -3; 3) \\implies \\vec{u} = (6 - 1; -3 - 3; 3 - (-2)) = (5; -6; 5)$."
        }
      },
      {
        id: "mc-12-8-2",
        num: 2,
        level: "Thông hiểu",
        prompt: "Trong không gian $Oxyz$, cho ba điểm $A(1; 0; -2), B(3; 2; 4)$ và $C(2; -2; 1)$. Toạ độ trọng tâm $G$ của tam giác $ABC$ là:",
        options: [
          "A. $(6; 0; 3)$",
          "B. $(3; 1; 2)$",
          "C. $(2; 0; 1)$",
          "D. $(2; 1; 0)$"
        ],
        correctIndex: 2, // Đáp án C
        solution: `
          <p><strong>Đáp án đúng: C</strong></p>
          <p>Áp dụng công thức toạ độ trọng tâm tam giác:<br>
          $$x_G = \\frac{1 + 3 + 2}{3} = 2;\\quad y_G = \\frac{0 + 2 + (-2)}{3} = 0;\\quad z_G = \\frac{-2 + 4 + 1}{3} = 1.$$
          Vậy $G(2;\\, 0;\\, 1)$.</p>
        `,
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, cho ba điểm $A(2; 1; -3), B(4; -3; 1)$ và $C(0; 2; 5)$. Toạ độ trọng tâm $G$ của tam giác $ABC$ là:",
          options: [
            "A. $(2; 0; 1)$",
            "B. $(3; -1; 1)$",
            "C. $(6; 0; 3)$",
            "D. $(1; 0; 2)$"
          ],
          correctIndex: 0, // Đáp án A
          solution: "Toạ độ trọng tâm: $x_G = (2+4+0)/3 = 2; y_G = (1-3+2)/3 = 0; z_G = (-3+1+5)/3 = 1 \\implies G(2; 0; 1)$."
        }
      },
      {
        id: "mc-12-8-3",
        num: 3,
        level: "Thông hiểu",
        prompt: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (1; 2; m)$ và $\\vec{v} = (4; -2; 1)$. Giá trị của tham số $m$ để hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau là:",
        options: [
          "A. $m = 0$",
          "B. $m = 2$",
          "C. $m = -4$",
          "D. $m = 1$"
        ],
        correctIndex: 0, // Đáp án A
        solution: `
          <p><strong>Đáp án đúng: A</strong></p>
          <p>Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc khi và chỉ khi tích vô hướng của chúng bằng $0$:<br>
          $$\\vec{u} \\cdot \\vec{v} = 0 \\iff 1 \\cdot 4 + 2 \\cdot (-2) + m \\cdot 1 = 0 \\iff 4 - 4 + m = 0 \\iff m = 0.$$</p>
        `,
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{u} = (2; -1; 3)$ và $\\vec{v} = (1; m; -2)$. Giá trị của $m$ để $\\vec{u} \\perp \\vec{v}$ là:",
          options: [
            "A. $m = 4$",
            "B. $m = -2$",
            "C. $m = 2$",
            "D. $m = -4$"
          ],
          correctIndex: 3, // Đáp án D
          solution: "Ta có: $\\vec{u}\\cdot\\vec{v} = 2(1) - 1(m) + 3(-2) = 0 \\iff 2 - m - 6 = 0 \\iff m = -4$."
        }
      },
      {
        id: "mc-12-8-4",
        num: 4,
        level: "Nhận biết",
        prompt: "Trong không gian $Oxyz$, cho hai điểm $M(1; -2; 2)$ và $N(4; 2; 2)$. Độ dài đoạn thẳng $MN$ bằng:",
        options: [
          "A. $\\sqrt{7}$",
          "B. $3$",
          "C. $4$",
          "D. $5$"
        ],
        correctIndex: 3, // Đáp án D
        solution: `
          <p><strong>Đáp án đúng: D</strong></p>
          <p>Độ dài đoạn thẳng $MN$ được tính theo công thức:<br>
          $$MN = \\sqrt{(4 - 1)^2 + (2 - (-2))^2 + (2 - 2)^2} = \\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{9 + 16} = 5.$$</p>
        `,
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, cho hai điểm $A(2; 1; -1)$ và $B(2; 4; 3)$. Độ dài đoạn thẳng $AB$ bằng:",
          options: [
            "A. $5$",
            "B. $\\sqrt{7}$",
            "C. $4$",
            "D. $6$"
          ],
          correctIndex: 0, // Đáp án A
          solution: "$AB = \\sqrt{(2-2)^2 + (4-1)^2 + (3-(-1))^2} = \\sqrt{0 + 9 + 16} = 5$."
        }
      },
      {
        id: "mc-12-8-5",
        num: 5,
        level: "Thông hiểu",
        prompt: "Trong không gian $Oxyz$, góc giữa hai vectơ $\\vec{a} = (1; 1; 0)$ và $\\vec{b} = (0; 1; 1)$ bằng:",
        options: [
          "A. $45^\\circ$",
          "B. $60^\\circ$",
          "C. $90^\\circ$",
          "D. $120^\\circ$"
        ],
        correctIndex: 1, // Đáp án B
        solution: `
          <p><strong>Đáp án đúng: B</strong></p>
          <p>Áp dụng công thức tính cô-sin góc giữa hai vectơ:<br>
          $$\\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|} = \\frac{1 \\cdot 0 + 1 \\cdot 1 + 0 \\cdot 1}{\\sqrt{1^2 + 1^2 + 0^2} \\cdot \\sqrt{0^2 + 1^2 + 1^2}} = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}.$$
          Do đó: $(\\vec{a}, \\vec{b}) = 60^\\circ$.</p>
        `,
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, góc giữa hai vectơ $\\vec{u} = (1; 0; 1)$ và $\\vec{v} = (0; 1; 0)$ bằng:",
          options: [
            "A. $45^\\circ$",
            "B. $0^\\circ$",
            "C. $90^\\circ$",
            "D. $180^\\circ$"
          ],
          correctIndex: 2, // Đáp án C
          solution: "Ta có: $\\vec{u} \\cdot \\vec{v} = 1(0) + 0(1) + 1(0) = 0 \\implies (\\vec{u}, \\vec{v}) = 90^\\circ$."
        }
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 2: 3 CÂU TRẮC NGHIỆM ĐÚNG / SAI (MỖI CÂU 4 Ý a, b, c, d)
    // -----------------------------------------------------------------------
    part2TrueFalse: [
      {
        id: "tf-12-8-1",
        num: 1,
        level: "Thông hiểu",
        prompt: "Trong không gian $Oxyz$, cho ba vectơ $\\vec{a} = (3; 1; 2)$, $\\vec{b} = (-3; 0; 4)$ và $\\vec{c} = (6; -1; 0)$ (Bài 2.20 SGK). Xét tính Đúng / Sai của các mệnh đề sau:",
        items: [
          {
            label: "a",
            key: "a",
            text: "Toạ độ của vectơ $\\vec{u} = \\vec{a} + \\vec{b} + \\vec{c}$ là $(6; 0; 6)$",
            statement: "Toạ độ của vectơ $\\vec{u} = \\vec{a} + \\vec{b} + \\vec{c}$ là $(6; 0; 6)$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, $\\vec{a} + \\vec{b} + \\vec{c} = (3 - 3 + 6; 1 + 0 - 1; 2 + 4 + 0) = (6; 0; 6)$."
          },
          {
            label: "b",
            key: "b",
            text: "Toạ độ của vectơ $\\vec{v} = 2\\vec{a} - 3\\vec{b}$ là $(15; 2; -8)$",
            statement: "Toạ độ của vectơ $\\vec{v} = 2\\vec{a} - 3\\vec{b}$ là $(15; 2; -8)$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, $2\\vec{a} = (6; 2; 4), 3\\vec{b} = (-9; 0; 12) \\implies 2\\vec{a} - 3\\vec{b} = (6 - (-9); 2 - 0; 4 - 12) = (15; 2; -8)$."
          },
          {
            label: "c",
            key: "c",
            text: "Tích vô hướng $\\vec{a} \\cdot (-\\vec{b})$ có giá trị bằng $1$",
            statement: "Tích vô hướng $\\vec{a} \\cdot (-\\vec{b})$ có giá trị bằng $1$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, $-\\vec{b} = (3; 0; -4) \\implies \\vec{a} \\cdot (-\\vec{b}) = 3(3) + 1(0) + 2(-4) = 9 - 8 = 1$."
          },
          {
            label: "d",
            key: "d",
            text: "Hai vectơ $\\vec{a}$ và $\\vec{c}$ vuông góc với nhau",
            statement: "Hai vectơ $\\vec{a}$ và $\\vec{c}$ vuông góc với nhau",
            isTrue: false,
            isCorrect: false,
            explain: "Sai, ta có $\\vec{a} \\cdot \\vec{c} = 3(6) + 1(-1) + 2(0) = 18 - 1 = 17 \\ne 0$, nên chúng không vuông góc."
          }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> $\\vec{a} + \\vec{b} + \\vec{c} = (3 - 3 + 6;\\, 1 + 0 - 1;\\, 2 + 4 + 0) = (6;\\, 0;\\, 6)$.</li>
            <li>b) <strong>ĐÚNG:</strong> $2\\vec{a} - 3\\vec{b} = (2 \\cdot 3 - 3(-3);\\, 2 \\cdot 1 - 0;\\, 2 \\cdot 2 - 3 \\cdot 4) = (15;\\, 2;\\, -8)$.</li>
            <li>c) <strong>ĐÚNG:</strong> $\\vec{a} \\cdot (-\\vec{b}) = -(\\vec{a} \\cdot \\vec{b}) = -(3(-3) + 1(0) + 2(4)) = -(-9 + 8) = 1$.</li>
            <li>d) <strong>SAI:</strong> $\\vec{a} \\cdot \\vec{c} = 3(6) + 1(-1) + 2(0) = 17 \\ne 0$, suy ra hai vectơ không vuông góc.</li>
          </ul>
        `,
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, cho ba vectơ $\\vec{u} = (2; -1; 1), \\vec{v} = (1; 2; 0)$ và $\\vec{w} = (-1; 1; 2)$. Xét tính Đúng / Sai của các khẳng định sau:",
          items: [
            {
              label: "a",
              key: "a",
              text: "Toạ độ của vectơ $\\vec{u} + \\vec{v} + \\vec{w}$ là $(2; 2; 3)$",
              statement: "Toạ độ của vectơ $\\vec{u} + \\vec{v} + \\vec{w}$ là $(2; 2; 3)$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $2 + 1 - 1 = 2; -1 + 2 + 1 = 2; 1 + 0 + 2 = 3$."
            },
            {
              label: "b",
              key: "b",
              text: "Vectơ $\\vec{u}$ và vectơ $\\vec{v}$ vuông góc với nhau",
              statement: "Vectơ $\\vec{u}$ và vectơ $\\vec{v}$ vuông góc với nhau",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $\\vec{u}\\cdot\\vec{v} = 2(1) + (-1)(2) + 1(0) = 0$."
            },
            {
              label: "c",
              key: "c",
              text: "Độ dài của vectơ $\\vec{u}$ bằng $6$",
              statement: "Độ dài của vectơ $\\vec{u}$ bằng $6$",
              isTrue: false,
              isCorrect: false,
              explain: "Sai, $|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 1^2} = \\sqrt{6}$, không phải $6$."
            },
            {
              label: "d",
              key: "d",
              text: "Toạ độ của vectơ $2\\vec{v} - \\vec{w}$ là $(3; 3; -2)$",
              statement: "Toạ độ của vectơ $2\\vec{v} - \\vec{w}$ là $(3; 3; -2)$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $2(1; 2; 0) - (-1; 1; 2) = (2 - (-1); 4 - 1; 0 - 2) = (3; 3; -2)$."
            }
          ],
          solution: "Kiểm tra từng ý mệnh đề bằng công thức toạ độ các phép toán vectơ."
        }
      },
      {
        id: "tf-12-8-2",
        num: 2,
        level: "Thông hiểu",
        prompt: "Trong không gian $Oxyz$, cho ba điểm $M(-4; 3; 3), N(4; -4; 2)$ và $P(3; 6; -1)$ (Bài 2.21 SGK). Xét tính Đúng / Sai của các mệnh đề sau:",
        items: [
          {
            label: "a",
            key: "a",
            text: "Toạ độ của vectơ $\\vec{MN}$ là $(8; -7; -1)$",
            statement: "Toạ độ của vectơ $\\vec{MN}$ là $(8; -7; -1)$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, $\\vec{MN} = (4 - (-4); -4 - 3; 2 - 3) = (8; -7; -1)$."
          },
          {
            label: "b",
            key: "b",
            text: "Ba điểm $M, N, P$ thẳng hàng",
            statement: "Ba điểm $M, N, P$ thẳng hàng",
            isTrue: false,
            isCorrect: false,
            explain: "Sai, ta có $\\vec{MP} = (7; 3; -4)$. Tỉ số toạ độ $\\frac{8}{7} \\ne \\frac{-7}{3}$ nên hai vectơ không cùng phương, ba điểm không thẳng hàng."
          },
          {
            label: "c",
            key: "c",
            text: "Toạ độ của điểm $Q$ sao cho tứ giác $MNPQ$ là hình bình hành là $Q(-5; 13; 0)$",
            statement: "Toạ độ của điểm $Q$ sao cho tứ giác $MNPQ$ là hình bình hành là $Q(-5; 13; 0)$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, $MNPQ$ là hình bình hành $\\iff \\vec{MQ} = \\vec{NP} \\iff (x_Q + 4; y_Q - 3; z_Q - 3) = (-1; 10; -3) \\iff Q(-5; 13; 0)$."
          },
          {
            label: "d",
            key: "d",
            text: "Tam giác $MNP$ là tam giác vuông tại đỉnh $P$",
            statement: "Tam giác $MNP$ là tam giác vuông tại đỉnh $P$",
            isTrue: false,
            isCorrect: false,
            explain: "Sai, $\\vec{PM} = (-7; -3; 4), \\vec{PN} = (1; -10; 3) \\implies \\vec{PM} \\cdot \\vec{PN} = -7(1) + (-3)(-10) + 4(3) = -7 + 30 + 12 = 35 \\ne 0$."
          }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> $\\vec{MN} = (4 - (-4);\\, -4 - 3;\\, 2 - 3) = (8;\\, -7;\\, -1)$.</li>
            <li>b) <strong>SAI:</strong> Ta có $\\vec{MP} = (3 - (-4);\\, 6 - 3;\\, -1 - 3) = (7;\\, 3;\\, -4)$. Do $\\frac{8}{7} \\ne \\frac{-7}{3}$ nên $\\vec{MN}$ và $\\vec{MP}$ không cùng phương, ba điểm $M, N, P$ không thẳng hàng.</li>
            <li>c) <strong>ĐÚNG:</strong> $MNPQ$ là hình bình hành $\\iff \\vec{NM} + \\vec{NP} = \\vec{NQ}$ hay $\\vec{MQ} = \\vec{NP} = (-1;\\, 10;\\, -3) \\implies Q(-4 - 1;\\, 3 + 10;\\, 3 - 3) = Q(-5;\\, 13;\\, 0)$.</li>
            <li>d) <strong>SAI:</strong> Tích vô hướng $\\vec{PM}\\cdot\\vec{PN} = 35 \\ne 0$, tam giác không vuông tại $P$.</li>
          </ul>
        `,
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, cho ba điểm $A(1; 1; 1), B(2; 3; 4)$ và $C(3; 5; 7)$. Xét tính Đúng / Sai của các mệnh đề sau:",
          items: [
            {
              label: "a",
              key: "a",
              text: "Toạ độ của vectơ $\\vec{AB}$ là $(1; 2; 3)$",
              statement: "Toạ độ của vectơ $\\vec{AB}$ là $(1; 2; 3)$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $\\vec{AB} = (2-1; 3-1; 4-1) = (1; 2; 3)$."
            },
            {
              label: "b",
              key: "b",
              text: "Ba điểm $A, B, C$ thẳng hàng",
              statement: "Ba điểm $A, B, C$ thẳng hàng",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $\\vec{AC} = (2; 4; 6) = 2\\vec{AB}$ nên hai vectơ cùng phương."
            },
            {
              label: "c",
              key: "c",
              text: "Điểm $B$ là trung điểm của đoạn thẳng $AC$",
              statement: "Điểm $B$ là trung điểm của đoạn thẳng $AC$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $(1+3)/2 = 2; (1+5)/2 = 3; (1+7)/2 = 4$."
            },
            {
              label: "d",
              key: "d",
              text: "Độ dài đoạn thẳng $AB$ bằng $\\sqrt{14}$",
              statement: "Độ dài đoạn thẳng $AB$ bằng $\\sqrt{14}$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $AB = \\sqrt{1^2 + 2^2 + 3^2} = \\sqrt{14}$."
            }
          ],
          solution: "Xét tỉ lệ vectơ và công thức trung điểm toạ độ."
        }
      },
      {
        id: "tf-12-8-3",
        num: 3,
        level: "Vận dụng",
        prompt: "Cho hình chữ nhật $ABCD$ có $A(0; 0; 0), B(3; 0; 0), D(0; 4; 0)$ và đỉnh $S(0; 0; 2)$ thoả mãn $SA \\perp (ABCD)$ (Ví dụ 4 SGK). Xét tính Đúng / Sai của các khẳng định sau:",
        items: [
          {
            label: "a",
            key: "a",
            text: "Toạ độ của đỉnh $C$ là $(3; 4; 0)$",
            statement: "Toạ độ của đỉnh $C$ là $(3; 4; 0)$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, vì $ABCD$ là hình chữ nhật nên $\\vec{AC} = \\vec{AB} + \\vec{AD} = (3; 4; 0) \\implies C(3; 4; 0)$."
          },
          {
            label: "b",
            key: "b",
            text: "Độ dài đoạn thẳng $BD$ bằng $5$",
            statement: "Độ dài đoạn thẳng $BD$ bằng $5$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, $BD = \\sqrt{(0 - 3)^2 + (4 - 0)^2 + 0^2} = \\sqrt{9 + 16} = 5$."
          },
          {
            label: "c",
            key: "c",
            text: "Độ dài đoạn thẳng $SC$ bằng $29$",
            statement: "Độ dài đoạn thẳng $SC$ bằng $29$",
            isTrue: false,
            isCorrect: false,
            explain: "Sai, độ dài $SC = \\sqrt{3^2 + 4^2 + (-2)^2} = \\sqrt{29} \\approx 5{,}39$, không phải $29$."
          },
          {
            label: "d",
            key: "d",
            text: "Góc giữa hai đường thẳng $BD$ và $SC$ xấp xỉ bằng $74{,}9^\\circ$",
            statement: "Góc giữa hai đường thẳng $BD$ và $SC$ xấp xỉ bằng $74{,}9^\\circ$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, $\\cos(BD, SC) = |\\cos(\\vec{BD}, \\vec{SC})| = \\frac{7}{5\\sqrt{29}} \\implies (BD, SC) \\approx 74{,}9^\\circ$."
          }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> $C$ có hoành độ bằng $x_B = 3$, tung độ bằng $y_D = 4$, cao độ bằng $0 \\implies C(3;\\, 4;\\, 0)$.</li>
            <li>b) <strong>ĐÚNG:</strong> $\\vec{BD} = (-3;\\, 4;\\, 0) \\implies BD = \\sqrt{(-3)^2 + 4^2} = 5$.</li>
            <li>c) <strong>SAI:</strong> $\\vec{SC} = (3;\\, 4;\\, -2) \\implies SC = \\sqrt{9 + 16 + 4} = \\sqrt{29}$, không phải $29$.</li>
            <li>d) <strong>ĐÚNG:</strong> $\\cos(BD, SC) = \\frac{|(-3)(3) + 4(4) + 0(-2)|}{5\\sqrt{29}} = \\frac{7}{5\\sqrt{29}} \\approx 0{,}25997 \\implies \\text{góc } \\approx 74{,}9^\\circ$.</li>
          </ul>
        `,
        similarVariation: {
          prompt: "Cho hình chóp $S.ABC$ có $A(0; 0; 0), B(4; 0; 0), C(0; 3; 0), S(0; 0; 6)$. Xét tính Đúng / Sai của các khẳng định sau:",
          items: [
            {
              label: "a",
              key: "a",
              text: "Độ dài cạnh $BC$ bằng $5$",
              statement: "Độ dài cạnh $BC$ bằng $5$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $BC = \\sqrt{(-4)^2 + 3^2} = 5$."
            },
            {
              label: "b",
              key: "b",
              text: "Độ dài cạnh $SB$ bằng $2\\sqrt{13}$",
              statement: "Độ dài cạnh $SB$ bằng $2\\sqrt{13}$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $SB = \\sqrt{4^2 + 6^2} = \\sqrt{52} = 2\\sqrt{13}$."
            },
            {
              label: "c",
              key: "c",
              text: "Tam giác $ABC$ là tam giác vuông tại $A$",
              statement: "Tam giác $ABC$ là tam giác vuông tại $A$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $A$ trùng gốc toạ độ, $AB$ nằm trên $Ox$, $AC$ nằm trên $Oy$ nên $AB \\perp AC$."
            },
            {
              label: "d",
              key: "d",
              text: "Góc giữa $SA$ và $BC$ bằng $90^\\circ$",
              statement: "Góc giữa $SA$ và $BC$ bằng $90^\\circ$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, vì $SA \\perp (ABC)$ nên $SA$ vuông góc với mọi đường thẳng nằm trong $(ABC)$, trong đó có $BC$."
            }
          ],
          solution: "Xét toạ độ và các tích vô hướng trong không gian $Oxyz$."
        }
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 3: 2 CÂU HỎI TRẢ LỜI NGẮN (VẬN DỤNG TOÁN THỰC TẾ)
    // -----------------------------------------------------------------------
    part3ShortAnswer: [
      {
        id: "sa-12-8-1",
        num: 1,
        level: "Vận dụng",
        prompt: "Trong không gian, xét hệ toạ độ $Oxyz$ có gốc $O$ trùng với vị trí của một giàn khoan trên biển (mặt biển trùng mặt phẳng toạ độ $Oxy$, đơn vị: km). Một chiếc radar đặt tại giàn khoan có phạm vi theo dõi tối đa là $30\\text{ km}$. Một chiếc tàu ngầm thám hiểm đại dương có toạ độ là $M(25; 15; -10)$. Khoảng cách từ giàn khoan đến chiếc tàu thám hiểm bằng bao nhiêu kilômét? (Nhập kết quả làm tròn đến chữ số thập phân thứ nhất, ví dụ: 30.8).",
        unit: "km",
        correctAnswer: "30.8",
        correctValue: 30.8,
        tolerance: 0.1,
        solution: `
          <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
          <p>Khoảng cách từ giàn khoan $O(0; 0; 0)$ đến chiếc tàu ngầm $M(25; 15; -10)$ là độ dài đoạn thẳng $OM$:<br>
          $$OM = \\sqrt{25^2 + 15^2 + (-10)^2} = \\sqrt{625 + 225 + 100} = \\sqrt{950} \\approx 30{,}822\\text{ km}.$$
          Làm tròn đến chữ số thập phân thứ nhất, ta được kết quả: <strong>30.8</strong> (hoặc 30,8).</p>
        `,
        similarVariation: {
          prompt: "Một trạm hải đăng tại gốc $O(0; 0; 0)$ có tầm quan sát $25\\text{ km}$. Một tàu cứu nạn có toạ độ $K(20; 12; 0)$ (đơn vị: km). Khoảng cách từ hải đăng đến tàu cứu nạn bằng bao nhiêu kilômét? (Làm tròn đến hàng phần mười).",
          unit: "km",
          correctAnswer: "23.3",
          correctValue: 23.3,
          tolerance: 0.1,
          solution: "$OK = \\sqrt{20^2 + 12^2} = \\sqrt{400 + 144} = \\sqrt{544} \\approx 23{,}32\\text{ km}$."
        }
      },
      {
        id: "sa-12-8-2",
        num: 2,
        level: "Vận dụng",
        prompt: "Hai chiếc khinh khí cầu bay lên từ cùng một điểm xuất phát. Chiếc thứ nhất bay đến vị trí có toạ độ $M(2; 1; 0{,}5)$ và chiếc thứ hai đến vị trí có toạ độ $N(-1; -1{,}5; 0{,}8)$ (đơn vị: km). Hãy tính khoảng cách giữa hai chiếc khinh khí cầu theo đơn vị kilômét? (Nhập kết quả làm tròn đến hai chữ số thập phân, ví dụ: 3.92).",
        unit: "km",
        correctAnswer: "3.92",
        correctValue: 3.92,
        tolerance: 0.05,
        solution: `
          <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
          <p>Khoảng cách giữa hai khinh khí cầu chính là độ dài đoạn thẳng $MN$:<br>
          $$MN = \\sqrt{(-1 - 2)^2 + (-1{,}5 - 1)^2 + (0{,}8 - 0{,}5)^2} = \\sqrt{(-3)^2 + (-2{,}5)^2 + (0{,}3)^2} = \\sqrt{9 + 6{,}25 + 0{,}09} = \\sqrt{15{,}34} \\approx 3{,}9166\\text{ km}.$$
          Làm tròn đến hai chữ số thập phân, ta được kết quả: <strong>3.92</strong>.</p>
        `,
        similarVariation: {
          prompt: "Hai chiếc máy bay không người lái (drone) có toạ độ lần lượt là $A(1; 2; 0{,}4)$ và $B(4; -2; 0{,}4)$ (đơn vị: km). Khoảng cách giữa hai chiếc drone bằng bao nhiêu kilômét?",
          unit: "km",
          correctAnswer: "5",
          correctValue: 5,
          tolerance: 0.05,
          solution: "$AB = \\sqrt{(4-1)^2 + (-2-2)^2 + (0{,}4-0{,}4)^2} = \\sqrt{3^2 + (-4)^2 + 0} = 5\\text{ km}$."
        }
      }
    ]
  }
};
