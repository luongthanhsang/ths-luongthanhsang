# Script sinh file js/lesson-10-10-data.js
import os

content = r'''/**
 * BÀI HỌC SỐ: BÀI 10. VECTƠ TRONG MẶT PHẲNG TOẠ ĐỘ - TOÁN 10 (KẾT NỐI TRI THỨC)
 * Thiết kế bài giảng chuẩn mực ThS. Lương Thanh Sáng
 * Voice AI tích hợp, Audio Timeline đồng bộ, POI tương tác, Trắc nghiệm hoán vị chuẩn Bộ GD&ĐT 2026
 */

window.LESSON_10_C4_B10_DATA = {
  id: "10-c4-b10",
  grade: "10",
  number: "Bài 10",
  title: "Vectơ trong mặt phẳng toạ độ",
  chapter: "Chương IV. Vectơ",
  subtitle: "Hệ trục Oxy, toạ độ của vectơ, biểu thức toạ độ các phép toán và ứng dụng thực tiễn",
  author: "ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)",
  duration: "45 phút",

  // PHẦN I: GIỚI THIỆU VOICE AI
  welcomeVoice: "assets/audio/b10_10_welcome.mp3",
  welcomeText: "Chào mừng các em học sinh lớp 10 đến với Bài 10: Vectơ trong mặt phẳng toạ độ. Trong các bài học trước, chúng ta đã tiếp cận vectơ dưới góc độ hình học thuần tuý: phương, hướng, độ dài cùng các phép toán cộng trừ vectơ và nhân vectơ với một số. Hôm nay, Thầy Sáng sẽ hướng dẫn các em đưa vectơ vào hệ toạ độ Descartes vuông góc Oxy. Đây là một bước đột phá vĩ đại trong lịch sử toán học, giúp kết hợp sức mạnh trực quan của hình học với sự chuẩn xác, kỳ diệu của đại số!",

  // PHẦN II: MỤC TIÊU BÀI HỌC (SGK TR. 60)
  goalsVoice: "assets/audio/b10_10_goals.mp3",
  goals: [
    "Nhận biết được toạ độ của một vectơ đối với hệ trục toạ độ Oxy và mối liên hệ giữa toạ độ điểm với toạ độ vectơ vị trí.",
    "Nắm vững các biểu thức toạ độ của phép cộng hai vectơ, phép trừ hai vectơ và phép nhân một số với vectơ.",
    "Vận dụng thành thạo công thức toạ độ trung điểm của đoạn thẳng, toạ độ trọng tâm tam giác và điều kiện hai vectơ cùng phương để giải các bài toán hình học và thực tiễn (chuyển động tàu thuyền, cờ vua, định vị GPS)."
  ],

  // PHẦN III: NỘI DUNG TRỌNG TÂM (SGK KẾT NỐI TRI THỨC TR. 60 - 65)
  hook: {
    title: "Ứng dụng thực tiễn: Xác định toạ độ và dự báo đường đi của bão trên biển Đông",
    voice: "assets/audio/b10_10_hook.mp3",
    content: "Trong dự báo khí tượng thuỷ văn và hàng hải, bản đồ biển Đông được số hoá thành một mặt phẳng toạ độ $Oxy$. Vị trí của tâm bão được xác định bởi toạ độ $(x; y)$, trong khi vận tốc và hướng di chuyển của bão được biểu diễn bởi một vectơ vận tốc $\\vec{v} = (v_x; v_y)$. Nhờ các biểu thức toạ độ của vectơ, các nhà khí tượng có thể tính toán chính xác toạ độ vùng bão đổ bộ sau mỗi giờ, hỗ trợ ngư dân và tàu cứu hộ di chuyển đến nơi an toàn kịp thời!",
    illustration: `<div class="p-4 bg-slate-900 rounded-xl border border-blue-500/30 text-center my-3 shadow-inner">
      <svg viewBox="0 0 520 230" class="w-full max-w-xl mx-auto drop-shadow-md">
        <!-- Nền biển Đông lưới tọa độ -->
        <defs>
          <pattern id="radar-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" stroke-width="1"/>
          </pattern>
          <radialGradient id="storm-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.8"/>
            <stop offset="60%" stop-color="#f97316" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="520" height="230" fill="#0f172a" rx="10"/>
        <rect width="520" height="230" fill="url(#radar-grid)" rx="10"/>

        <!-- Trục toạ độ Oxy -->
        <line x1="40" y1="200" x2="490" y2="200" stroke="#64748b" stroke-width="2"/>
        <polygon points="495,200 485,195 485,205" fill="#64748b"/>
        <text x="495" y="215" fill="#94a3b8" font-size="12" font-family="sans-serif">x (Kinh độ)</text>

        <line x1="80" y1="215" x2="80" y2="25" stroke="#64748b" stroke-width="2"/>
        <polygon points="80,20 75,30 85,30" fill="#64748b"/>
        <text x="60" y="25" fill="#94a3b8" font-size="12" font-family="sans-serif">y (Vĩ độ)</text>
        <text x="65" y="215" fill="#94a3b8" font-size="12" font-family="sans-serif">O</text>

        <!-- Tâm bão ban đầu A(120; 140) trên hệ tọa độ vẽ minh họa A(160, 150) -->
        <circle cx="160" cy="140" r="30" fill="url(#storm-grad)"/>
        <circle cx="160" cy="140" r="4" fill="#ef4444"/>
        <text x="130" y="130" fill="#fca5a5" font-weight="bold" font-size="12" font-family="sans-serif">Tâm bão A(x₀; y₀)</text>

        <!-- Vectơ vận tốc di chuyển v -->
        <line x1="160" y1="140" x2="280" y2="80" stroke="#38bdf8" stroke-width="3" stroke-dasharray="2 2"/>
        <line x1="160" y1="140" x2="240" y2="100" stroke="#38bdf8" stroke-width="3"/>
        <polygon points="245,97 232,96 238,107" fill="#38bdf8"/>
        <text x="210" y="85" fill="#38bdf8" font-weight="bold" font-size="12" font-family="sans-serif">Vectơ vận tốc v</text>

        <!-- Vị trí dự báo sau 12h B(x₁; y₁) -->
        <circle cx="280" cy="80" r="38" fill="url(#storm-grad)"/>
        <circle cx="280" cy="80" r="4" fill="#fbbf24"/>
        <text x="285" y="70" fill="#fde047" font-weight="bold" font-size="12" font-family="sans-serif">Dự báo B(x₀+vₓ·t; y₀+v_y·t)</text>

        <!-- Bờ biển Việt Nam tượng trưng -->
        <path d="M 100 30 Q 115 90 95 150 T 110 210" fill="none" stroke="#22c55e" stroke-width="3"/>
        <text x="95" y="55" fill="#4ade80" font-size="11" font-family="sans-serif">Đất liền Việt Nam</text>
      </svg>
      <div class="text-xs text-slate-400 mt-2 font-mono">Hình 4.31: Mô hình toán học hoá toạ độ và hướng di chuyển của bão trên mặt phẳng Oxy</div>
    </div>`
  },

  sections: [
    {
      id: "10-c4-b10-sec1",
      number: "1",
      title: "1. Toạ độ của vectơ và Hệ trục toạ độ Oxy",
      voice: "assets/audio/b10_10_sec1.mp3",
      content: `
        <div class="mb-4 text-slate-200 leading-relaxed">
          <p class="mb-2"><strong>a) Hệ trục toạ độ $Oxy$:</strong></p>
          <ul class="list-disc pl-6 space-y-1 mb-3">
            <li>Hệ trục toạ độ $(O; \\vec{i}, \\vec{j})$ gồm hai trục toạ độ $Ox$ (trục hoành) và $Oy$ (trục tung) vuông góc với nhau tại gốc $O$.</li>
            <li>$\\vec{i}$ là vectơ đơn vị trên trục $Ox$ ($|\\vec{i}| = 1$).</li>
            <li>$\\vec{j}$ là vectơ đơn vị trên trục $Oy$ ($|\\vec{j}| = 1$).</li>
            <li>Hai vectơ $\\vec{i}$ và $\\vec{j}$ vuông góc với nhau và có độ dài bằng $1$.</li>
          </ul>

          <p class="mb-2"><strong>b) Định nghĩa toạ độ của một vectơ:</strong></p>
          <div class="p-3 bg-blue-900/30 rounded-lg border-l-4 border-blue-500 my-2">
            <p class="font-semibold text-blue-300">Định lí & Định nghĩa (SGK tr. 61):</p>
            <p>Với mỗi vectơ $\\vec{u}$ trong mặt phẳng, tồn tại duy nhất cặp số thực $(x; y)$ sao cho:</p>
            <p class="text-center font-bold text-amber-300 my-1 text-lg">$\\vec{u} = x\\vec{i} + y\\vec{j}$</p>
            <p>Cặp số $(x; y)$ được gọi là <strong>toạ độ của vectơ $\\vec{u}$</strong> đối với hệ trục toạ độ $Oxy$.</p>
            <p>Kí hiệu: $\\vec{u} = (x; y)$ hoặc $\\vec{u}(x; y)$. Số $x$ gọi là <em>hoành độ</em>, số $y$ gọi là <em>tung độ</em> của $\\vec{u}$.</p>
          </div>

          <div class="p-3 bg-amber-900/20 rounded-lg border border-amber-500/30 text-amber-200 my-3 text-sm">
            <strong>Chú ý đặc biệt:</strong>
            <ul class="list-disc pl-5 mt-1 space-y-1">
              <li>Hai vectơ bằng nhau khi và chỉ khi các toạ độ tương ứng bằng nhau: <br/>
                $\\vec{u}(x; y) = \\vec{v}(x'; y') \\Longleftrightarrow \\begin{cases} x = x' \\\\ y = y' \\end{cases}$
              </li>
              <li>$\\vec{0} = (0; 0)$ vì $\\vec{0} = 0\\vec{i} + 0\\vec{j}$.</li>
              <li>$\\vec{i} = (1; 0)$ và $\\vec{j} = (0; 1)$.</li>
            </ul>
          </div>
        </div>

        <div class="p-4 bg-slate-900 rounded-xl border border-slate-700 text-center my-3">
          <svg viewBox="0 0 460 220" class="w-full max-w-md mx-auto">
            <!-- Grid lines -->
            <defs>
              <pattern id="grid-sec1" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#334155" stroke-width="0.8"/>
              </pattern>
            </defs>
            <rect width="460" height="220" fill="#0f172a" rx="8"/>
            <rect width="460" height="220" fill="url(#grid-sec1)" rx="8"/>

            <!-- Axes -->
            <line x1="30" y1="180" x2="430" y2="180" stroke="#94a3b8" stroke-width="2"/>
            <polygon points="435,180 425,175 425,185" fill="#94a3b8"/>
            <text x="430" y="198" fill="#cbd5e1" font-size="13" font-family="sans-serif">x</text>

            <line x1="90" y1="210" x2="90" y2="20" stroke="#94a3b8" stroke-width="2"/>
            <polygon points="90,15 85,25 95,25" fill="#94a3b8"/>
            <text x="75" y="20" fill="#cbd5e1" font-size="13" font-family="sans-serif">y</text>
            <text x="73" y="195" fill="#cbd5e1" font-size="13" font-family="sans-serif">O</text>

            <!-- Unit vectors i, j -->
            <!-- i: (90,180) -> (120, 180) -->
            <line x1="90" y1="180" x2="120" y2="180" stroke="#ef4444" stroke-width="3"/>
            <polygon points="124,180 116,176 116,184" fill="#ef4444"/>
            <text x="100" y="172" fill="#ef4444" font-weight="bold" font-size="12" font-family="sans-serif">i</text>

            <!-- j: (90,180) -> (90, 150) -->
            <line x1="90" y1="180" x2="90" y2="150" stroke="#22c55e" stroke-width="3"/>
            <polygon points="90,146 86,154 94,154" fill="#22c55e"/>
            <text x="72" y="162" fill="#22c55e" font-weight="bold" font-size="12" font-family="sans-serif">j</text>

            <!-- Vector u = (4; 3) -> 4*30=120, 3*30=90 => (210, 90) -->
            <line x1="90" y1="180" x2="210" y2="180" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>
            <line x1="210" y1="180" x2="210" y2="90" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>
            <line x1="90" y1="180" x2="90" y2="90" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>
            <line x1="90" y1="90" x2="210" y2="90" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>

            <line x1="90" y1="180" x2="210" y2="90" stroke="#38bdf8" stroke-width="3"/>
            <polygon points="214,87 203,91 209,99" fill="#38bdf8"/>
            <circle cx="210" cy="90" r="4" fill="#38bdf8"/>
            <text x="218" y="85" fill="#38bdf8" font-weight="bold" font-size="13" font-family="sans-serif">u = (x; y) = x·i + y·j</text>
            <text x="205" y="196" fill="#94a3b8" font-size="11" font-family="sans-serif">x</text>
            <text x="75" y="94" fill="#94a3b8" font-size="11" font-family="sans-serif">y</text>
          </svg>
          <div class="text-xs text-slate-400 mt-2">Hình 4.34: Biểu diễn vectơ $\\vec{u} = x\\vec{i} + y\\vec{j}$ trên hệ trục toạ độ Oxy</div>
        </div>
      `
    },
    {
      id: "10-c4-b10-sec2",
      number: "2",
      title: "2. Biểu thức toạ độ của các phép toán vectơ",
      voice: "assets/audio/b10_10_sec2.mp3",
      content: `
        <div class="mb-4 text-slate-200 leading-relaxed">
          <p class="mb-2">Cho hai vectơ $\\vec{u} = (x; y)$, $\\vec{v} = (x'; y')$ và số thực $k$. Khi đó:</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
            <div class="p-3 bg-blue-950/60 rounded-xl border border-blue-500/40 text-center">
              <span class="text-xs text-blue-300 font-semibold uppercase">Phép cộng vectơ</span>
              <p class="text-lg font-bold text-amber-300 mt-1">$\\vec{u} + \\vec{v} = (x + x'; y + y')$</p>
              <p class="text-xs text-slate-400 mt-1">Cộng hoành theo hoành, tung theo tung</p>
            </div>
            <div class="p-3 bg-purple-950/60 rounded-xl border border-purple-500/40 text-center">
              <span class="text-xs text-purple-300 font-semibold uppercase">Phép trừ vectơ</span>
              <p class="text-lg font-bold text-amber-300 mt-1">$\\vec{u} - \\vec{v} = (x - x'; y - y')$</p>
              <p class="text-xs text-slate-400 mt-1">Trừ hoành theo hoành, tung theo tung</p>
            </div>
            <div class="p-3 bg-emerald-950/60 rounded-xl border border-emerald-500/40 text-center">
              <span class="text-xs text-emerald-300 font-semibold uppercase">Nhân số với vectơ</span>
              <p class="text-lg font-bold text-amber-300 mt-1">$k\\vec{u} = (kx; ky)$</p>
              <p class="text-xs text-slate-400 mt-1">Nhân $k$ vào từng toạ độ</p>
            </div>
          </div>

          <div class="p-4 bg-slate-800/80 rounded-xl border-l-4 border-emerald-500 my-3">
            <h4 class="font-bold text-emerald-300 mb-1">Điều kiện để hai vectơ cùng phương:</h4>
            <p class="text-sm">Vectơ $\\vec{v}$ cùng phương với vectơ $\\vec{u} \\neq \\vec{0}$ khi và chỉ khi tồn tại số thực $k$ sao cho $\\vec{v} = k\\vec{u}$, tức là:</p>
            <p class="text-center font-bold text-amber-300 my-1 text-base">$\\begin{cases} x' = kx \\\\ y' = ky \\end{cases}$</p>
            <p class="text-xs text-slate-300 mt-1">Nếu $x \\neq 0$ và $y \\neq 0$ thì điều kiện cùng phương tương đương với tỉ lệ: $\\dfrac{x'}{x} = \\dfrac{y'}{y}$.</p>
          </div>

          <div class="p-3 bg-slate-900 rounded-lg text-sm border border-slate-700">
            <span class="text-cyan-400 font-bold">Ví dụ (SGK tr. 62):</span> Cho $\\vec{u} = (2; -3)$, $\\vec{v} = (4; 1)$.<br/>
            Ta có: $\\vec{u} + \\vec{v} = (2 + 4; -3 + 1) = (6; -2)$.<br/>
            $\\vec{u} - \\vec{v} = (2 - 4; -3 - 1) = (-2; -4)$.<br/>
            $3\\vec{u} - 2\\vec{v} = 3(2; -3) - 2(4; 1) = (6; -9) - (8; 2) = (-2; -11)$.
          </div>
        </div>
      `
    },
    {
      id: "10-c4-b10-sec3",
      number: "3",
      title: "3. Toạ độ của điểm và độ dài vectơ",
      voice: "assets/audio/b10_10_sec3.mp3",
      content: `
        <div class="mb-4 text-slate-200 leading-relaxed">
          <p class="mb-2"><strong>a) Toạ độ của điểm:</strong></p>
          <div class="p-3 bg-blue-900/30 rounded-lg border-l-4 border-blue-400 my-2">
            <p>Trong mặt phẳng toạ độ $Oxy$, toạ độ của điểm $M$ chính là toạ độ của vectơ $\\vec{OM}$ (vectơ vị trí của $M$):</p>
            <p class="text-center font-bold text-amber-300 text-base my-1">$M(x; y) \\Longleftrightarrow \\vec{OM} = (x; y) \\Longleftrightarrow \\vec{OM} = x\\vec{i} + y\\vec{j}$</p>
          </div>

          <p class="mb-2"><strong>b) Toạ độ của vectơ nối hai điểm và công thức khoảng cách:</strong></p>
          <div class="p-4 bg-slate-800/80 rounded-xl border border-slate-700 my-2 space-y-2">
            <p>Cho hai điểm $A(x_A; y_A)$ và $B(x_B; y_B)$. Khi đó:</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Toạ độ vectơ $\\vec{AB}$ bằng toạ độ điểm cuối trừ toạ độ điểm đầu:
                <p class="font-bold text-amber-300 text-base my-1">$\\vec{AB} = (x_B - x_A;\\, y_B - y_A)$</p>
              </li>
              <li>Độ dài của vectơ $\\vec{u} = (x; y)$ là:
                <p class="font-bold text-amber-300 text-base my-1">$|\\vec{u}| = \\sqrt{x^2 + y^2}$</p>
              </li>
              <li>Khoảng cách giữa hai điểm $A$ và $B$ (độ dài đoạn thẳng $AB$):
                <p class="font-bold text-amber-300 text-base my-1">$AB = |\\vec{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="p-4 bg-slate-900 rounded-xl border border-slate-700 text-center my-3">
          <svg viewBox="0 0 460 210" class="w-full max-w-md mx-auto">
            <rect width="460" height="210" fill="#0f172a" rx="8"/>
            <!-- Axes -->
            <line x1="30" y1="170" x2="430" y2="170" stroke="#64748b" stroke-width="2"/>
            <polygon points="435,170 425,165 425,175" fill="#64748b"/>
            <text x="430" y="188" fill="#94a3b8" font-size="12" font-family="sans-serif">x</text>

            <line x1="70" y1="195" x2="70" y2="25" stroke="#64748b" stroke-width="2"/>
            <polygon points="70,20 65,30 75,30" fill="#64748b"/>
            <text x="55" y="25" fill="#94a3b8" font-size="12" font-family="sans-serif">y</text>
            <text x="55" y="185" fill="#94a3b8" font-size="12" font-family="sans-serif">O</text>

            <!-- Point A(140, 130), B(320, 60) -->
            <!-- Dotted lines for A -->
            <line x1="140" y1="170" x2="140" y2="130" stroke="#64748b" stroke-dasharray="3 3"/>
            <line x1="70" y1="130" x2="140" y2="130" stroke="#64748b" stroke-dasharray="3 3"/>
            <text x="135" y="185" fill="#94a3b8" font-size="11" font-family="sans-serif">x_A</text>
            <text x="45" y="134" fill="#94a3b8" font-size="11" font-family="sans-serif">y_A</text>

            <!-- Dotted lines for B -->
            <line x1="320" y1="170" x2="320" y2="60" stroke="#64748b" stroke-dasharray="3 3"/>
            <line x1="70" y1="60" x2="320" y2="60" stroke="#64748b" stroke-dasharray="3 3"/>
            <text x="315" y="185" fill="#94a3b8" font-size="11" font-family="sans-serif">x_B</text>
            <text x="45" y="64" fill="#94a3b8" font-size="11" font-family="sans-serif">y_B</text>

            <!-- Vector AB -->
            <line x1="140" y1="130" x2="320" y2="60" stroke="#38bdf8" stroke-width="3"/>
            <polygon points="324,58 312,63 318,72" fill="#38bdf8"/>

            <!-- Points A, B circles -->
            <circle cx="140" cy="130" r="4" fill="#f59e0b"/>
            <text x="125" y="125" fill="#f59e0b" font-weight="bold" font-size="12" font-family="sans-serif">A(x_A; y_A)</text>

            <circle cx="320" cy="60" r="4" fill="#10b981"/>
            <text x="328" y="58" fill="#10b981" font-weight="bold" font-size="12" font-family="sans-serif">B(x_B; y_B)</text>

            <!-- Delta x, Delta y right triangle -->
            <line x1="140" y1="130" x2="320" y2="130" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="2 2"/>
            <line x1="320" y1="130" x2="320" y2="60" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="2 2"/>
            <text x="210" y="145" fill="#f472b6" font-size="11" font-family="sans-serif">x_B - x_A</text>
            <text x="330" y="100" fill="#f472b6" font-size="11" font-family="sans-serif">y_B - y_A</text>
          </svg>
          <div class="text-xs text-slate-400 mt-2">Hình 4.35: Minh hoạ vectơ $\\vec{AB} = (x_B - x_A;\\, y_B - y_A)$ và định lí Pythagore trong tam giác vuông</div>
        </div>
      `
    },
    {
      id: "10-c4-b10-sec4",
      number: "4",
      title: "4. Toạ độ trung điểm của đoạn thẳng và trọng tâm tam giác",
      voice: "assets/audio/b10_10_sec4.mp3",
      content: `
        <div class="mb-4 text-slate-200 leading-relaxed">
          <p class="mb-2"><strong>a) Toạ độ trung điểm của đoạn thẳng:</strong></p>
          <div class="p-3 bg-blue-900/30 rounded-lg border-l-4 border-cyan-400 my-2">
            <p>Cho đoạn thẳng $AB$ với $A(x_A; y_A)$ và $B(x_B; y_B)$. Toạ độ trung điểm $M(x_M; y_M)$ của đoạn thẳng $AB$ là trung bình cộng toạ độ hai đầu mút:</p>
            <p class="text-center font-bold text-amber-300 text-lg my-1">
              $x_M = \\dfrac{x_A + x_B}{2}, \\quad y_M = \\dfrac{y_A + y_B}{2}$
            </p>
          </div>

          <p class="mb-2"><strong>b) Toạ độ trọng tâm tam giác:</strong></p>
          <div class="p-3 bg-purple-900/30 rounded-lg border-l-4 border-purple-400 my-2">
            <p>Cho tam giác $ABC$ với $A(x_A; y_A), B(x_B; y_B), C(x_C; y_C)$. Toạ độ trọng tâm $G(x_G; y_G)$ của tam giác $ABC$ là trung bình cộng toạ độ ba đỉnh:</p>
            <p class="text-center font-bold text-amber-300 text-lg my-1">
              $x_G = \\dfrac{x_A + x_B + x_C}{3}, \\quad y_G = \\dfrac{y_A + y_B + y_C}{3}$
            </p>
          </div>

          <p class="mb-2"><strong>c) Bài toán ứng dụng cờ vua (SGK Bài 4.20 tr. 65):</strong></p>
          <div class="p-3 bg-slate-800 rounded-lg border border-slate-700 text-sm">
            <p>Trong môn Cờ vua, bàn cờ là một lưới toạ độ gồm 8 hàng và 8 cột (gốc $O(0; 0)$ tại góc dưới bên trái). Quân mã di chuyển theo quy tắc chữ L, nghĩa là vectơ dịch chuyển $\\vec{d} = (\\Delta x; \\Delta y)$ thoả mãn $(|\\Delta x|, |\\Delta y|) \\in \\{(1, 2), (2, 1)\\}$.</p>
            <p class="mt-1 text-slate-300">Nếu quân mã đang đứng ở vị trí $M(1; 2)$, các nước đi hợp lệ trên bàn cờ là những toạ độ $(1 + \\Delta x; 2 + \\Delta y)$ nằm trong phạm vi $0 \\le x, y \\le 7$. Bằng phép tịnh tiến vectơ toạ độ, ta dễ dàng liệt kê đầy đủ 6 nước đi hợp lệ của quân mã!</p>
          </div>
        </div>
      `
    }
  ],

  // TỔNG KẾT BÀI HỌC
  wrapup: {
    voice: "assets/audio/b10_10_wrapup.mp3",
    text: "Thầy Sáng chúc mừng các em đã nắm vững toàn bộ kiến thức trọng tâm của Bài 10: Vectơ trong mặt phẳng toạ độ! Từ đây, mọi tính chất hình học về cùng phương, trung điểm, trọng tâm, độ dài và khoảng cách đều có thể giải quyết nhanh chóng, chính xác bằng các công thức đại số. Bây giờ, các em hãy cùng Thầy rèn luyện 10 câu hỏi trắc nghiệm chuẩn hoá ở Phần IV để kiểm tra mức độ hiểu bài nhé!"
  },

  // POI CHECKPOINTS
  poiCheckpoints: [
    { id: "poi-welcome", title: "Lời mở đầu Voice AI", time: 0 },
    { id: "poi-goals", title: "Mục tiêu bài học", time: 28 },
    { id: "poi-hook", title: "Tâm bão biển Đông", time: 57 },
    { id: "poi-sec1", title: "Hệ trục toạ độ Oxy", time: 86 },
    { id: "poi-sec2", title: "Biểu thức toạ độ phép toán", time: 111 },
    { id: "poi-sec3", title: "Toạ độ điểm & độ dài", time: 132 },
    { id: "poi-sec4", title: "Trung điểm & Trọng tâm", time: 156 },
    { id: "poi-wrapup", title: "Tổng kết & Ghi nhớ", time: 177 }
  ],

  // PHẦN IV: CÂU HỎI TRẮC NGHIỆM TỔNG HỢP (10 CÂU HOÁN VỊ ĐÁP ÁN CHUẨN BỘ GD 2026)
  examPractice: [
    {
      id: "q1",
      type: "single",
      level: "Nhận biết",
      question: "Trong mặt phẳng toạ độ $Oxy$, cho vectơ $\\vec{u} = 2\\vec{i} - 5\\vec{j}$. Toạ độ của vectơ $\\vec{u}$ là:",
      options: [
        "A. $(-5; 2)$",
        "B. $(2; -5)$",
        "C. $(2; 5)$",
        "D. $(-2; -5)$"
      ],
      correctAnswer: "B",
      explanation: "Theo định nghĩa toạ độ của vectơ, nếu $\\vec{u} = x\\vec{i} + y\\vec{j}$ thì $\\vec{u} = (x; y)$. Do đó với $\\vec{u} = 2\\vec{i} - 5\\vec{j}$ ta có ngay toạ độ là $(2; -5)$."
    },
    {
      id: "q2",
      type: "single",
      level: "Nhận biết",
      question: "Trong mặt phẳng toạ độ $Oxy$, cho hai điểm $A(1; 3)$ và $B(4; -1)$. Toạ độ của vectơ $\\vec{AB}$ là:",
      options: [
        "A. $(5; 2)$",
        "B. $(-3; 4)$",
        "C. $(3; 4)$",
        "D. $(3; -4)$"
      ],
      correctAnswer: "D",
      explanation: "Toạ độ của vectơ $\\vec{AB} = (x_B - x_A;\\, y_B - y_A) = (4 - 1;\\, -1 - 3) = (3; -4)$."
    },
    {
      id: "q3",
      type: "single",
      level: "Thông hiểu",
      question: "Trong mặt phẳng toạ độ $Oxy$, cho $\\vec{a} = (2; -3)$ và $\\vec{b} = (-1; 4)$. Toạ độ của vectơ $\\vec{u} = 2\\vec{a} + 3\\vec{b}$ là:",
      options: [
        "A. $(1; 6)$",
        "B. $(7; 6)$",
        "C. $(1; -18)$",
        "D. $(-1; 6)$"
      ],
      correctAnswer: "A",
      explanation: "Ta có $2\\vec{a} = 2(2; -3) = (4; -6)$ và $3\\vec{b} = 3(-1; 4) = (-3; 12)$. Do đó $\\vec{u} = 2\\vec{a} + 3\\vec{b} = (4 + (-3);\\, -6 + 12) = (1; 6)$."
    },
    {
      id: "q4",
      type: "single",
      level: "Thông hiểu",
      question: "Trong mặt phẳng toạ độ $Oxy$, cho tam giác $ABC$ có $A(2; 1)$, $B(-1; 3)$ và $C(5; -1)$. Toạ độ trọng tâm $G$ của tam giác $ABC$ là:",
      options: [
        "A. $G(6; 3)$",
        "B. $G(3; 1)$",
        "C. $G(2; 1)$",
        "D. $G(2; 3)$"
      ],
      correctAnswer: "C",
      explanation: "Áp dụng công thức toạ độ trọng tâm tam giác: $x_G = \\dfrac{x_A + x_B + x_C}{3} = \\dfrac{2 + (-1) + 5}{3} = 2$; $y_G = \\dfrac{y_A + y_B + y_C}{3} = \\dfrac{1 + 3 + (-1)}{3} = 1$. Vậy $G(2; 1)$."
    },
    {
      id: "q5",
      type: "single",
      level: "Vận dụng",
      question: "Trong mặt phẳng toạ độ $Oxy$, cho ba điểm $A(-2; 3)$, $B(4; 5)$ và $C(2; -1)$. Toạ độ điểm $D$ để tứ giác $ABCD$ là hình bình hành là:",
      options: [
        "A. $D(0; 7)$",
        "B. $D(-4; -3)$",
        "C. $D(8; 1)$",
        "D. $D(4; 3)$"
      ],
      correctAnswer: "B",
      explanation: "Tứ giác $ABCD$ là hình bình hành $\\Longleftrightarrow \\vec{AD} = \\vec{BC}$. Ta có $\\vec{BC} = (2 - 4;\\, -1 - 5) = (-2; -6)$ và $\\vec{AD} = (x_D - (-2);\\, y_D - 3) = (x_D + 2;\\, y_D - 3)$. Suy ra $\\begin{cases} x_D + 2 = -2 \\\\ y_D - 3 = -6 \\end{cases} \\Longleftrightarrow \\begin{cases} x_D = -4 \\\\ y_D = -3 \\end{cases}$. Vậy $D(-4; -3)$."
    },
    {
      id: "q6",
      type: "multi",
      level: "Thông hiểu",
      question: "Trong mặt phẳng toạ độ $Oxy$, cho hai vectơ $\\vec{a} = (3; -2)$ và $\\vec{b} = (-6; 4)$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subQuestions: [
        { id: "q6_a", text: "a) Hai vectơ $\\vec{a}$ và $\\vec{b}$ cùng phương với nhau.", answer: true, explanation: "Ta có $\\dfrac{-6}{3} = \\dfrac{4}{-2} = -2$, suy ra $\\vec{b} = -2\\vec{a}$ nên hai vectơ cùng phương." },
        { id: "q6_b", text: "b) Vectơ $\\vec{b}$ ngược hướng với vectơ $\\vec{a}$.", answer: true, explanation: "Do $\\vec{b} = k\\vec{a}$ với hệ số $k = -2 < 0$ nên hai vectơ ngược hướng." },
        { id: "q6_c", text: "c) Độ dài của vectơ $\\vec{a}$ bằng 5.", answer: false, explanation: "Độ dài $|\vec{a}| = \\sqrt{3^2 + (-2)^2} = \\sqrt{9 + 4} = \\sqrt{13} \\neq 5$." },
        { id: "q6_d", text: "d) Vectơ tổng $\\vec{a} + \\vec{b}$ có toạ độ là $(-3; 2)$.", answer: true, explanation: "$\\vec{a} + \\vec{b} = (3 + (-6);\\, -2 + 4) = (-3; 2)$." }
      ]
    },
    {
      id: "q7",
      type: "multi",
      level: "Vận dụng",
      question: "Trong mặt phẳng toạ độ $Oxy$, cho ba điểm $A(-1; 2)$, $B(3; 4)$ và $C(1; -2)$. Xét tính Đúng / Sai của các mệnh đề sau:",
      subQuestions: [
        { id: "q7_a", text: "a) Toạ độ của vectơ $\\vec{AB}$ là $(4; 2)$ và $\\vec{AC}$ là $(2; -4)$.", answer: true, explanation: "$\\vec{AB} = (3 - (-1); 4 - 2) = (4; 2)$; $\\vec{AC} = (1 - (-1); -2 - 2) = (2; -4)$." },
        { id: "q7_b", text: "b) Độ dài hai đoạn thẳng $AB$ và $AC$ bằng nhau và bằng $2\\sqrt{5}$.", answer: true, explanation: "$AB = \\sqrt{4^2 + 2^2} = \\sqrt{20} = 2\\sqrt{5}$; $AC = \\sqrt{2^2 + (-4)^2} = \\sqrt{20} = 2\\sqrt{5}$." },
        { id: "q7_c", text: "c) Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = 0$, suy ra tam giác $ABC$ vuông tại $A$.", answer: true, explanation: "$\\vec{AB} \\cdot \\vec{AC} = 4 \\cdot 2 + 2 \\cdot (-4) = 8 - 8 = 0 \\Rightarrow AB \\perp AC$." },
        { id: "q7_d", text: "d) Tam giác $ABC$ là tam giác đều.", answer: false, explanation: "Tam giác $ABC$ vuông cân tại $A$ chứ không phải tam giác đều." }
      ]
    },
    {
      id: "q8",
      type: "multi",
      level: "Vận dụng thực tế",
      question: "Trong mặt phẳng toạ độ $Oxy$, sự chuyển động của một tàu cứu nạn được biểu diễn như sau (SGK Bài 4.19 tr. 65): Tàu xuất phát từ vị trí $A(1; 2)$ và chuyển động thẳng đều với vận tốc được biểu thị bởi vectơ $\\vec{v} = (3; 4)$ (vận tốc tính theo hải lí/giờ). Xét tính Đúng / Sai của các mệnh đề sau:",
      subQuestions: [
        { id: "q8_a", text: "a) Tốc độ chuyển động của tàu là 5 hải lí/giờ.", answer: true, explanation: "Tốc độ bằng độ lớn của vectơ vận tốc: $|\\vec{v}| = \\sqrt{3^2 + 4^2} = 5$ hải lí/giờ." },
        { id: "q8_b", text: "b) Sau $1{,}5$ giờ, vectơ độ dời của tàu là $\\vec{d} = (4{,}5;\\, 6)$.", answer: true, explanation: "Vectơ độ dời sau $t = 1{,}5$ giờ là $\\vec{d} = t\\vec{v} = 1{,}5(3; 4) = (4{,}5; 6)$." },
        { id: "q8_c", text: "c) Vị trí của tàu trên mặt phẳng toạ độ sau khi khởi hành $1{,}5$ giờ là điểm $M(5{,}5;\\, 8)$.", answer: true, explanation: "Toạ độ vị trí mới: $\\vec{OM} = \\vec{OA} + \\vec{d} = (1; 2) + (4{,}5; 6) = (5{,}5; 8) \\Rightarrow M(5{,}5; 8)$." },
        { id: "q8_d", text: "d) Quãng đường tàu đã đi được sau $1{,}5$ giờ là 10 hải lí.", answer: false, explanation: "Quãng đường tàu đi được sau $1{,}5$ giờ là $s = |\\vec{v}| \\cdot t = 5 \\cdot 1{,}5 = 7{,}5$ hải lí." }
      ]
    },
    {
      id: "q9",
      type: "short",
      level: "Thông hiểu",
      question: "Trong mặt phẳng toạ độ $Oxy$, cho hai điểm $A(-3; 2)$ và $B(5; -4)$. Khoảng cách giữa hai điểm $A$ và $B$ bằng bao nhiêu?",
      correctAnswer: "10",
      explanation: "Khoảng cách $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} = \\sqrt{(5 - (-3))^2 + (-4 - 2)^2} = \\sqrt{8^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$."
    },
    {
      id: "q10",
      type: "short",
      level: "Vận dụng thực tế",
      question: "Trong một bàn cờ vua có kích thước $8 \\times 8$ (các ô có toạ độ nguyên $(x; y)$ thoả mãn $0 \\le x \\le 7$ và $0 \\le y \\le 7$, theo SGK Bài 4.20 tr. 65), quân mã đang đứng ở vị trí có toạ độ $(1; 2)$. Sau đúng một nước đi theo luật cờ vua, quân mã có thể đến được bao nhiêu vị trí hợp lệ trên bàn cờ?",
      correctAnswer: "6",
      explanation: "Theo quy tắc cờ vua, quân mã di chuyển theo vectơ độ dời $(\\pm 1; \\pm 2)$ hoặc $(\\pm 2; \\pm 1)$. Từ vị trí $(1; 2)$, các vị trí đích có thể có là:\\n- $(1+1; 2+2) = (2; 4)$ (hợp lệ)\\n- $(1+1; 2-2) = (2; 0)$ (hợp lệ)\\n- $(1-1; 2+2) = (0; 4)$ (hợp lệ)\\n- $(1-1; 2-2) = (0; 0)$ (hợp lệ)\\n- $(1+2; 2+1) = (3; 3)$ (hợp lệ)\\n- $(1+2; 2-1) = (3; 1)$ (hợp lệ)\\n- $(1-2; 2+1) = (-1; 3)$ (không hợp lệ vì $x = -1 < 0$)\\n- $(1-2; 2-1) = (-1; 1)$ (không hợp lệ vì $x = -1 < 0$).\\nNhư vậy, có chính xác 6 vị trí hợp lệ trên bàn cờ."
    }
  ]
};
'''

with open("js/lesson-10-10-data.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Created js/lesson-10-10-data.js ({os.path.getsize('js/lesson-10-10-data.js')} bytes)")
