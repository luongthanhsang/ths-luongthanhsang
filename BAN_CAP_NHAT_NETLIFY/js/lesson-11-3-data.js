/**
 * BÀI HỌC SỐ: BÀI 3. HÀM SỐ LƯỢNG GIÁC (TOÁN 11 - TẬP 1 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Tác giả biên soạn: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * BỘ QUY CHUẨN THẦY SÁNG 5 SAO:
 * - PHẦN I: Lời chào Thầy Sáng + Voice AI NamMinhNeural chuẩn mực (5% tiến trình)
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK GDPT 2018 (5% tiến trình)
 * - PHẦN III: Tiến trình bài học đa phương tiện tương tác (70% tiến trình):
 *             + Tình huống mở đầu (Hook): Vận tốc luồng khí hô hấp v = 0.85 sin(pi t / 3)
 *             + Mục 1: Định nghĩa các hàm số lượng giác
 *             + Mục 2: Hàm số chẵn, hàm số lẻ, hàm số tuần hoàn (Mục con 2a và 2b)
 *             + Mục 3: Đồ thị và tính chất của hàm số y = sin x (Hình 1.14)
 *             + Mục 4: Đồ thị và tính chất của hàm số y = cos x (Hình 1.15)
 *             + Mục 5: Đồ thị và tính chất của hàm số y = tan x (Hình 1.16)
 *             + Mục 6: Đồ thị và tính chất của hàm số y = cot x (Hình 1.17)
 *             + Chốt kiến thức: Bảng so sánh 4 hàm số & Bài toán sóng biển 1.18 SGK
 * - PHẦN IV: Bài tập trắc nghiệm củng cố chuẩn 3 dạng thức thi mới 2026 Bộ GD&ĐT (20% tiến trình)
 * =========================================================================================
 */

window.LESSON_11_C1_B3_DATA = {
  id: "11-c1-b3",
  grade: "11",
  subject: "Toán 11 - Kết nối tri thức",
  chapter: "Chương I",
  chapterTitle: "Hàm số lượng giác và phương trình lượng giác",
  number: "Bài 3",
  title: "Hàm số lượng giác",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG (5% TIẾN TRÌNH)
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Hôm nay, thầy trò chúng ta sẽ bước vào Bài 3: Hàm số lượng giác. Ở các bài trước, các em đã làm quen với góc lượng giác và các công thức biến đổi lượng giác toàn năng. Bây giờ, chúng ta sẽ mở rộng góc nhìn từ hình học sang giải tích: mỗi số thực x cho ta một giá trị sin, cos, tan, hoặc cotang, từ đó hình thành nên bốn hàm số lượng giác cơ bản. Các hàm số này có tính chất vô cùng đặc biệt: tính chẵn lẻ đối xứng, và tính tuần hoàn lặp lại sau mỗi chu kì. Đồ thị hình sin nhấp nhô nhịp nhàng chính là chìa khóa để mô tả thế giới xung quanh ta: từ nhịp thở luồng khí hô hấp trong y học, dao động điều hòa của con lắc trong vật lý, cho đến những con sóng biển nhấp nhô ngoài đại dương hay dòng điện xoay chiều thắp sáng mọi nhà. Các em hãy chuẩn bị sách vở, tập trung lắng nghe và cùng Thầy khám phá thế giới hàm số lượng giác đầy kì thú nhé!",
    audioScript: "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Hôm nay, thầy trò chúng ta sẽ bước vào Bài 3: Hàm số lượng giác. Ở các bài trước, các em đã làm quen với góc lượng giác và các công thức biến đổi lượng giác toàn năng. Bây giờ, chúng ta sẽ mở rộng góc nhìn từ hình học sang giải tích: mỗi số thực x cho ta một giá trị sin, cos, tan, hoặc cotang, từ đó hình thành nên bốn hàm số lượng giác cơ bản. Các hàm số này có tính chất vô cùng đặc biệt: tính chẵn lẻ đối xứng, và tính tuần hoàn lặp lại sau mỗi chu kì. Đồ thị hình sin nhấp nhô nhịp nhàng chính là chìa khóa để mô tả thế giới xung quanh ta: từ nhịp thở luồng khí hô hấp trong y học, dao động điều hòa của con lắc trong vật lý, cho đến những con sóng biển nhấp nhô ngoài đại dương hay dòng điện xoay chiều thắp sáng mọi nhà. Các em hãy chuẩn bị sách vở, tập trung lắng nghe và cùng Thầy khám phá thế giới hàm số lượng giác đầy kì thú nhé!",
    audioUrl: "assets/audio/b11_3_welcome.mp3"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU & YÊU CẦU CẦN ĐẠT (5% TIẾN TRÌNH)
  // =========================================================================
  learningGoals: [
    "Nhận biết và hiểu rõ định nghĩa của bốn hàm số lượng giác: $y = \\sin x$, $y = \\cos x$, $y = \\tan x$, $y = \\cot x$; xác định chính xác tập xác định và tập giá trị của từng hàm số.",
    "Hiểu khái niệm, phân biệt hàm số chẵn, hàm số lẻ và nhận diện đặc trưng hình học đối xứng của đồ thị qua trục tung $Oy$ hoặc gốc toạ độ $O$.",
    "Hiểu bản chất hàm số tuần hoàn, xác định chu kì của $y = \\sin x$ và $y = \\cos x$ là $2\\pi$, của $y = \\tan x$ và $y = \\cot x$ là $\\pi$.",
    "Vẽ và giải thích thành thạo bảng biến thiên, đồ thị của 4 hàm số lượng giác (đường hình sin, các nhánh tiệm cận đứng); xác định chính xác các khoảng đồng biến, nghịch biến.",
    "Vận dụng giải quyết các bài toán thực tiễn gắn liền với đời sống: mô hình luồng khí hô hấp trong y học, dao động điều hòa trong vật lý và bài toán chiều cao sóng biển."
  ],
  goalsAudioUrl: "assets/audio/b11_3_goals.mp3",
  goalsAudioScript: "Phần 2. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần đạt được các yêu cầu trọng tâm sau: Thứ nhất, nhận biết và hiểu rõ định nghĩa của bốn hàm số lượng giác: y bằng sin x, y bằng cos x, y bằng tan x và y bằng cotang x; nắm chắc tập xác định và tập giá trị của từng hàm số. Thứ hai, hiểu khái niệm và phân biệt chính xác hàm số chẵn, hàm số lẻ và đặc trưng đối xứng của đồ thị qua trục tung hay gốc tọa độ. Thứ ba, hiểu bản chất hàm số tuần hoàn, xác định chu kì của sin và cos là hai pi, của tan và cotang là pi. Thứ tư, vẽ và phân tích thành thạo đồ thị của bốn hàm số lượng giác; giải thích được tính đồng biến, nghịch biến trên từng khoảng. Thứ năm, vận dụng kiến thức hàm số lượng giác để giải quyết các bài toán thực tiễn gắn liền với đời sống như nhịp thở hô hấp, dao động điều hòa và chiều cao sóng biển.",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN TƯƠNG TÁC (70% TIẾN TRÌNH)
  // =========================================================================

  // --- TÌNH HUỐNG MỞ ĐẦU (HOOK) ---
  hook: {
    title: "Tình huống mở đầu: Vận tốc luồng khí hô hấp",
    storyHtml: `<p>Giả sử vận tốc $v$ (tính bằng lít/giây) của luồng khí trong một chu kì hô hấp (thời gian từ lúc bắt đầu một nhịp thở đến khi bắt đầu nhịp thở tiếp theo) của một người ở trạng thái nghỉ ngơi được mô hình hóa bởi công thức (SGK trang 22):</p>
    <div class="text-center my-3 p-3 bg-light rounded border border-primary">
      <span class="fs-4 fw-bold text-primary">$$v = 0{,}85\\sin\\left(\\dfrac{\\pi t}{3}\\right)$$</span>
      <div class="text-muted small mt-1">trong đó $t$ là thời gian tính bằng giây ($t \\ge 0$). Vận tốc $v > 0$ ứng với quá trình hít vào, $v < 0$ ứng với quá trình thở ra.</div>
    </div>
    <p><b>Câu hỏi đặt ra:</b></p>
    <ul>
      <li>Thời gian của một chu kì hô hấp đầy đủ (gồm cả hít vào và thở ra) kéo dài bao nhiêu giây?</li>
      <li>Trong thời gian một phút (60 giây), người đó thực hiện được bao nhiêu chu kì hô hấp?</li>
      <li>Khoảng thời gian nào trong một chu kì thì người đó đang hít vào? Khoảng thời gian nào thì thở ra?</li>
    </ul>`,
    svgDiagram: `<div class="text-center my-3">
      <svg viewBox="0 0 760 260" style="max-width:100%; height:auto; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
        <!-- Lưới nền -->
        <defs>
          <linearGradient id="hookGradPos" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.05"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.3"/>
          </linearGradient>
          <linearGradient id="hookGradNeg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.05"/>
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0.25"/>
          </linearGradient>
        </defs>

        <!-- Trục tọa độ -->
        <line x1="60" y1="130" x2="720" y2="130" stroke="#334155" stroke-width="2"/>
        <line x1="100" y1="230" x2="100" y2="25" stroke="#334155" stroke-width="2"/>
        
        <!-- Mũi tên trục -->
        <polygon points="720,130 710,125 710,135" fill="#334155"/>
        <polygon points="100,25 95,35 105,35" fill="#334155"/>
        <text x="715" y="150" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155">t (giây)</text>
        <text x="75" y="25" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155">v (L/s)</text>
        <text x="85" y="145" font-family="sans-serif" font-size="12" fill="#64748b">O</text>

        <!-- Vùng diện tích Hít vào (t từ 0 đến 3) -->
        <path d="M 100 130 C 133 45, 167 45, 200 130 Z" fill="url(#hookGradPos)"/>
        <!-- Vùng diện tích Thở ra (t từ 3 đến 6) -->
        <path d="M 200 130 C 233 215, 267 215, 300 130 Z" fill="url(#hookGradNeg)"/>

        <!-- Vùng chu kì 2 (t từ 6 đến 12) -->
        <path d="M 300 130 C 333 45, 367 45, 400 130 Z" fill="url(#hookGradPos)"/>
        <path d="M 400 130 C 433 215, 467 215, 500 130 Z" fill="url(#hookGradNeg)"/>

        <!-- Đường cong v(t) -->
        <path d="M 100 130 
                 C 133 45, 167 45, 200 130 
                 C 233 215, 267 215, 300 130 
                 C 333 45, 367 45, 400 130 
                 C 433 215, 467 215, 500 130 
                 C 533 45, 567 45, 600 130
                 C 633 215, 667 215, 700 130" 
              fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>

        <!-- Điểm mốc trên trục hoành -->
        <!-- t = 1.5 -->
        <line x1="150" y1="130" x2="150" y2="55" stroke="#94a3b8" stroke-dasharray="3,3"/>
        <circle cx="150" cy="55" r="4" fill="#2563eb"/>
        <text x="142" y="148" font-family="sans-serif" font-size="11" fill="#475569">1.5</text>
        <text x="110" y="48" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8">v = +0.85</text>

        <!-- t = 3 -->
        <circle cx="200" cy="130" r="4" fill="#334155"/>
        <text x="196" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155">3</text>

        <!-- t = 4.5 -->
        <line x1="250" y1="130" x2="250" y2="205" stroke="#94a3b8" stroke-dasharray="3,3"/>
        <circle cx="250" cy="205" r="4" fill="#dc2626"/>
        <text x="242" y="148" font-family="sans-serif" font-size="11" fill="#475569">4.5</text>
        <text x="210" y="222" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">v = -0.85</text>

        <!-- t = 6 (hết 1 chu kì) -->
        <circle cx="300" cy="130" r="4" fill="#16a34a"/>
        <text x="296" y="148" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">6</text>

        <!-- t = 12 (hết chu kì 2) -->
        <circle cx="500" cy="130" r="4" fill="#16a34a"/>
        <text x="494" y="148" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">12</text>

        <!-- Kích thước 1 chu kì T = 6s -->
        <line x1="100" y1="240" x2="300" y2="240" stroke="#16a34a" stroke-width="2"/>
        <line x1="100" y1="235" x2="100" y2="245" stroke="#16a34a" stroke-width="2"/>
        <line x1="300" y1="235" x2="300" y2="245" stroke="#16a34a" stroke-width="2"/>
        <text x="155" y="255" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">1 Chu kì đầy đủ T = 6 giây</text>

        <!-- Nhãn chú thích -->
        <rect x="520" y="30" width="180" height="60" rx="8" fill="#ffffff" stroke="#cbd5e1"/>
        <circle cx="535" cy="48" r="5" fill="#3b82f6"/>
        <text x="548" y="52" font-family="sans-serif" font-size="11" fill="#1e293b">v &gt; 0: Quá trình Hít vào</text>
        <circle cx="535" cy="72" r="5" fill="#ef4444"/>
        <text x="548" y="76" font-family="sans-serif" font-size="11" fill="#1e293b">v &lt; 0: Quá trình Thở ra</text>
      </svg>
    </div>`,
    audioUrl: "assets/audio/b11_3_hook.mp3",
    audioScript: "Tình huống mở đầu: Vận tốc luồng khí hô hấp. Trong y học và sinh học, các nhà khoa học đã mô hình hóa vận tốc v tính bằng lít trên giây của luồng khí trong một chu kì hô hấp của một người ở trạng thái nghỉ ngơi bởi công thức: v bằng 0,85 nhân sin của pi t chia 3, trong đó t là thời gian tính bằng giây. Vận tốc dương ứng với quá trình hít vào, vận tốc âm ứng với quá trình thở ra. Từ công thức này, làm thế nào để chúng ta biết được một chu kì hô hấp đầy đủ kéo dài bao nhiêu giây? Trong một phút người đó thực hiện được bao nhiêu nhịp thở? Và ở những khoảng thời gian nào thì người đó đang hít vào hay thở ra? Câu trả lời nằm trọn vẹn trong các tính chất của hàm số lượng giác mà chúng ta sẽ cùng khám phá ngay sau đây.",
    checkpoints: [
      {
        id: "poi-11-3-hook-1",
        time: 18,
        title: "Tương tác Hook Câu 1: Xác định thời điểm hít vào cực đại",
        question: "Dựa vào công thức $v = 0{,}85\\sin\\left(\\dfrac{\\pi t}{3}\\right)$, tại thời điểm nào sau đây luồng khí <b>hít vào</b> đạt vận tốc lớn nhất?",
        options: [
          "$t = 3\\text{ giây}$",
          "$t = 1{,}5\\text{ giây}$",
          "$t = 4{,}5\\text{ giây}$",
          "$t = 6\\text{ giây}$"
        ],
        correctIndex: 1,
        correctAnswer: "B",
        explanation: "Vận tốc $v$ đạt cực đại khi $\\sin\\left(\\dfrac{\\pi t}{3}\\right) = 1 \\Leftrightarrow \\dfrac{\\pi t}{3} = \\dfrac{\\pi}{2} \\Leftrightarrow t = 1{,}5\\text{ giây}$. Khi đó $v = 0{,}85\\text{ L/s}$ (luồng khí hít vào mạnh nhất)."
      },
      {
        id: "poi-11-3-hook-2",
        time: 32,
        title: "Tương tác Hook Câu 2: Thời gian một chu kì hô hấp",
        question: "Hàm số $\\sin\\left(\\dfrac{\\pi t}{3}\\right)$ lặp lại giá trị sau mỗi khoảng thời gian bằng chu kì $T$. Chu kì một nhịp thở đầy đủ của người này là:",
        options: [
          "$3\\text{ giây}$",
          "$2\\pi\\text{ giây}$",
          "$6\\text{ giây}$",
          "$12\\text{ giây}$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        explanation: "Chu kì của hàm số $y = \\sin(\\omega t)$ là $T = \\dfrac{2\\pi}{\\omega} = \\dfrac{2\\pi}{\\pi / 3} = 6\\text{ giây}$. Do đó một chu kì hô hấp đầy đủ (gồm hít vào và thở ra) kéo dài đúng 6 giây."
      }
    ]
  },

  // --- CÁC MỤC KIẾN THỨC BÀI HỌC (SECTIONS) ---
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1: ĐỊNH NGHĨA CÁC HÀM SỐ LƯỢNG GIÁC
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b3-s1",
      num: "1",
      title: "Định nghĩa các hàm số lượng giác",
      contentHtml: `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
        <h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-compass"></i> HĐ1 (SGK trang 22): Khảo sát giá trị lượng giác theo biến số thực</h5>
        <p>Trên đường tròn lượng giác gốc $A(1;0)$, mỗi số thực $x$ xác định duy nhất một điểm $M$ sao cho số đo góc lượng giác $(OA, OM) = x\\text{ rad}$.</p>
        <div class="table-responsive">
          <table class="table table-bordered table-sm text-center align-middle bg-white mb-0">
            <thead class="table-primary">
              <tr>
                <th>$x$</th>
                <th>$0$</th>
                <th>$\\dfrac{\\pi}{6}$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{3}$</th>
                <th>$\\dfrac{\\pi}{2}$</th>
                <th>$\\pi$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$\\sin x$</td>
                <td>$0$</td>
                <td>$\\dfrac{1}{2}$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$\\dfrac{\\sqrt{3}}{2}$</td>
                <td>$1$</td>
                <td>$0$</td>
              </tr>
              <tr>
                <td class="fw-bold">$\\cos x$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{3}}{2}$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$\\dfrac{1}{2}$</td>
                <td>$0$</td>
                <td>$-1$</td>
              </tr>
              <tr>
                <td class="fw-bold">$\\tan x$</td>
                <td>$0$</td>
                <td>$\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$1$</td>
                <td>$\\sqrt{3}$</td>
                <td class="text-danger fw-bold">Không XĐ</td>
                <td>$0$</td>
              </tr>
              <tr>
                <td class="fw-bold">$\\cot x$</td>
                <td class="text-danger fw-bold">Không XĐ</td>
                <td>$\\sqrt{3}$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$0$</td>
                <td class="text-danger fw-bold">Không XĐ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="alert-box alert-success mb-3">
        <h5 class="fw-bold text-success mb-2"><i class="fa-solid fa-book-bookmark"></i> ĐỊNH NGHĨA 4 HÀM SỐ LƯỢNG GIÁC CƠ BẢN (SGK TRANG 23)</h5>
        <ul>
          <li><b>1. Hàm số sin:</b> Quy tắc đặt tương ứng mỗi số thực $x$ với số thực $\\sin x$ được gọi là hàm số sin, kí hiệu $y = \\sin x$.<br>
          • <b>Tập xác định:</b> $D = \\mathbb{R}$.<br>
          • <b>Tập giá trị:</b> $[-1; 1]$, nghĩa là $-1 \\le \\sin x \\le 1$ với mọi $x \\in \\mathbb{R}$.</li>
          <li class="mt-2"><b>2. Hàm số côsin:</b> Quy tắc đặt tương ứng mỗi số thực $x$ với số thực $\\cos x$ được gọi là hàm số côsin, kí hiệu $y = \\cos x$.<br>
          • <b>Tập xác định:</b> $D = \\mathbb{R}$.<br>
          • <b>Tập giá trị:</b> $[-1; 1]$, nghĩa là $-1 \\le \\cos x \\le 1$ với mọi $x \\in \\mathbb{R}$.</li>
          <li class="mt-2"><b>3. Hàm số tang:</b> Hàm số cho bởi công thức $y = \\dfrac{\\sin x}{\\cos x}$ được gọi là hàm số tang, kí hiệu $y = \\tan x$.<br>
          • Biểu thức có nghĩa khi $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$.<br>
          • <b>Tập xác định:</b> $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$.<br>
          • <b>Tập giá trị:</b> $\\mathbb{R}$.</li>
          <li class="mt-2"><b>4. Hàm số côtang:</b> Hàm số cho bởi công thức $y = \\dfrac{\\cos x}{\\sin x}$ được gọi là hàm số côtang, kí hiệu $y = \\cot x$.<br>
          • Biểu thức có nghĩa khi $\\sin x \\ne 0 \\Leftrightarrow x \\ne k\\pi\\ (k \\in \\mathbb{Z})$.<br>
          • <b>Tập xác định:</b> $D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$.<br>
          • <b>Tập giá trị:</b> $\\mathbb{R}$.</li>
        </ul>
      </div>

      <div class="text-center my-3">
        <svg viewBox="0 0 460 380" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
          <!-- Hệ trục toạ độ -->
          <line x1="40" y1="200" x2="420" y2="200" stroke="#334155" stroke-width="1.8"/>
          <line x1="220" y1="360" x2="220" y2="30" stroke="#334155" stroke-width="1.8"/>
          <polygon points="420,200 410,195 410,205" fill="#334155"/>
          <polygon points="220,30 215,40 225,40" fill="#334155"/>
          <text x="415" y="190" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155">x (cos)</text>
          <text x="230" y="38" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155">y (sin)</text>
          <text x="205" y="218" font-family="sans-serif" font-size="12" fill="#64748b">O</text>

          <!-- Đường tròn lượng giác bán kính R = 130 -->
          <circle cx="220" cy="200" r="130" fill="none" stroke="#2563eb" stroke-width="2.2"/>
          <text x="355" y="218" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">A(1;0)</text>
          <text x="228" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">B(0;1)</text>
          <text x="68" y="218" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">A'(-1;0)</text>
          <text x="228" y="345" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">B'(0;-1)</text>

          <!-- Điểm M trên đường tròn (góc alpha = 55 độ) -->
          <!-- cx = 220 + 130*cos(55°) = 220 + 74.5 = 294.5 -->
          <!-- cy = 200 - 130*sin(55°) = 200 - 106.5 = 93.5 -->
          <line x1="220" y1="200" x2="295" y2="94" stroke="#ea580c" stroke-width="2.5"/>
          <circle cx="295" cy="94" r="5" fill="#ea580c"/>
          <text x="305" y="90" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ea580c">M(x)</text>

          <!-- Cung góc x -->
          <path d="M 260 200 A 40 40 0 0 0 243 167" fill="none" stroke="#d97706" stroke-width="2.5"/>
          <text x="265" y="180" font-family="sans-serif" font-size="12" font-weight="bold" fill="#d97706">x</text>

          <!-- Hình chiếu H lên Ox (cos x) -->
          <line x1="295" y1="94" x2="295" y2="200" stroke="#059669" stroke-width="1.8" stroke-dasharray="4,4"/>
          <circle cx="295" cy="200" r="3.5" fill="#059669"/>
          <text x="290" y="218" font-family="sans-serif" font-size="11" font-weight="bold" fill="#059669">H</text>
          <line x1="220" y1="200" x2="295" y2="200" stroke="#059669" stroke-width="3"/>
          <text x="238" y="193" font-family="sans-serif" font-size="11" font-weight="bold" fill="#059669">cos x</text>

          <!-- Hình chiếu K lên Oy (sin x) -->
          <line x1="295" y1="94" x2="220" y2="94" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="4,4"/>
          <circle cx="220" cy="94" r="3.5" fill="#7c3aed"/>
          <text x="202" y="98" font-family="sans-serif" font-size="11" font-weight="bold" fill="#7c3aed">K</text>
          <line x1="220" y1="200" x2="220" y2="94" stroke="#7c3aed" stroke-width="3"/>
          <text x="175" y="145" font-family="sans-serif" font-size="11" font-weight="bold" fill="#7c3aed">sin x</text>

          <!-- Trục tang tại A(1;0) -->
          <line x1="350" y1="40" x2="350" y2="350" stroke="#0891b2" stroke-width="1.8" stroke-dasharray="6,4"/>
          <!-- Tia OM kéo dài cắt trục tang -->
          <!-- y_tan = 200 - 130*tan(55°) = 200 - 130*1.428 = 200 - 185.6 = 14.4 -->
          <line x1="220" y1="200" x2="350" y2="14" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,3"/>
          <circle cx="350" cy="14" r="4" fill="#0891b2"/>
          <text x="358" y="25" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0891b2">T (tan x)</text>
          <text x="358" y="340" font-family="sans-serif" font-size="11" font-style="italic" fill="#0891b2">Trục tang</text>
        </svg>
      </div>`,
      audioUrl: "assets/audio/b11_3_sec1.mp3",
      audioScript: "Mục 1. Định nghĩa các hàm số lượng giác. Trên đường tròn lượng giác gốc A(1; 0), với mỗi số thực x, ta xác định được duy nhất một điểm M sao cho số đo góc lượng giác OA, OM bằng x radian. Tung độ của điểm M chính là sin x, hoành độ của điểm M chính là cos x. Từ đó, ta có bốn hàm số lượng giác cơ bản: Thứ nhất, hàm số sin: y bằng sin x, có tập xác định là R. Thứ hai, hàm số côsin: y bằng cos x, có tập xác định là R. Thứ ba, hàm số tang: y bằng tan x bằng sin x chia cos x, xác định khi cos x khác 0, tức là x khác pi chia 2 cộng k pi, tập xác định là R trừ đi tập hợp các điểm pi chia 2 cộng k pi. Thứ tư, hàm số côtang: y bằng cotang x bằng cos x chia sin x, xác định khi sin x khác 0, tức là x khác k pi, tập xác định là R trừ đi tập hợp các điểm k pi, với k thuộc Z.",
      checkpoints: [
        {
          id: "poi-11-3-sec1-1",
          time: 20,
          title: "Tương tác Câu 1: Tập xác định của hàm số Tang",
          question: "Tập xác định của hàm số $y = \\tan x$ là:",
          options: [
            "$D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$",
            "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$",
            "$D = \\mathbb{R}$",
            "$D = [-1; 1]$"
          ],
          correctIndex: 1,
          correctAnswer: "B",
          explanation: "Vì $\\tan x = \\dfrac{\\sin x}{\\cos x}$ nên điều kiện xác định là $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$. Do đó $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$."
        },
        {
          id: "poi-11-3-sec1-2",
          time: 40,
          title: "Tương tác Câu 2: Tập xác định của hàm số Côtang",
          question: "Tập xác định của hàm số $y = \\cot x$ là:",
          options: [
            "$D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$",
            "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k2\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$",
            "$D = \\mathbb{R}$",
            "$D = (-\\infty; +\\infty) \\setminus \\{0\\}$"
          ],
          correctIndex: 0,
          correctAnswer: "A",
          explanation: "Vì $\\cot x = \\dfrac{\\cos x}{\\sin x}$ nên điều kiện xác định là $\\sin x \\ne 0 \\Leftrightarrow x \\ne k\\pi\\ (k \\in \\mathbb{Z})$. Do đó $D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$."
        }
      ],
      workedExample: {
        title: "VÍ DỤ 1 (SGK TRANG 23) & LỜI GIẢI CHI TIẾT",
        problemHtml: "Tìm tập xác định của hàm số $y = \\dfrac{1}{\\cos x}$.",
        solutionHtml: `<p><b>Lời giải:</b></p>
        <p>Biểu thức $\\dfrac{1}{\\cos x}$ có nghĩa khi và chỉ khi:</p>
        <p>$$\\cos x \\ne 0 \\iff x \\ne \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$$</p>
        <p>Vậy tập xác định của hàm số đã cho là:</p>
        <p>$$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}.$$</p>`
      },
      practiceProblem: {
        title: "LUYỆN TẬP 1 (SGK TRANG 23) - HƯỚNG DẪN TỰ LUYỆN",
        problemHtml: "Tìm tập xác định của hàm số $y = \\dfrac{1}{\\sin x}$.",
        hintHtml: `<p><b>Hướng dẫn giải của Thầy Sáng:</b></p>
        <p>• Phân thức $\\dfrac{1}{\\sin x}$ có nghĩa khi mẫu thức khác 0: $\\sin x \\ne 0$.</p>
        <p>• Điểm biểu diễn góc $x$ trên đường tròn lượng giác có tung độ khác 0, tức là $x \\ne k\\pi\\ (k \\in \\mathbb{Z})$.</p>
        <p>• <b>Kết luận:</b> Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$.</p>`
      }
    },

    // -----------------------------------------------------------------------
    // MỤC 2: HÀM SỐ CHẴN, HÀM SỐ LẺ, HÀM SỐ TUẦN HOÀN (2 MỤC CON a & b)
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b3-s2",
      num: "2",
      title: "Hàm số chẵn, hàm số lẻ, hàm số tuần hoàn",
      subsections: [
        // --- 2a. HÀM SỐ CHẴN VÀ HÀM SỐ LẺ ---
        {
          key: "a",
          title: "Hàm số chẵn và hàm số lẻ",
          contentHtml: `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
            <h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-shapes"></i> HĐ2 (SGK trang 23): Tính đối xứng hình học</h5>
            <p>Cho hai hàm số cơ bản $f(x) = x^2$ và $g(x) = x^3$ trên tập xác định $\\mathbb{R}$:</p>
            <ul>
              <li>Hàm số $f(x) = x^2$ có $f(-x) = (-x)^2 = x^2 = f(x)$. Đồ thị là một parabol <b>đối xứng qua trục tung $Oy$</b>.</li>
              <li>Hàm số $g(x) = x^3$ có $g(-x) = (-x)^3 = -x^3 = -g(x)$. Đồ thị là đường cong bậc ba <b>đối xứng qua gốc toạ độ $O$</b>.</li>
            </ul>
          </div>

          <div class="alert-box alert-success mb-3">
            <h5 class="fw-bold text-success mb-2"><i class="fa-solid fa-balance-scale"></i> ĐỊNH NGHĨA HÀM SỐ CHẴN VÀ HÀM SỐ LẺ</h5>
            <p>Cho hàm số $y = f(x)$ có tập xác định là $D$ (với $D$ là tập đối xứng qua gốc tọa độ: $\\forall x \\in D \\Rightarrow -x \\in D$):</p>
            <ul>
              <li>Hàm số $f(x)$ được gọi là <b>hàm số chẵn</b> nếu:
              $$f(-x) = f(x), \\quad \\forall x \\in D.$$
              Đồ thị của một hàm số chẵn nhận <b>trục tung $Oy$ làm trục đối xứng</b>.</li>
              <li class="mt-2">Hàm số $f(x)$ được gọi là <b>hàm số lẻ</b> nếu:
              $$f(-x) = -f(x), \\quad \\forall x \\in D.$$
              Đồ thị của một hàm số lẻ nhận <b>gốc toạ độ $O$ làm tâm đối xứng</b>.</li>
            </ul>
            <div class="mt-2 p-2 bg-white rounded border border-success">
              <b>⚡ GHI NHỚ ĐẶC BIỆT CỦA THẦY SÁNG:</b> Trong 4 hàm số lượng giác:
              <br>• $y = \\cos x$ là <b>HÀM SỐ CHẴN DUY NHẤT</b> (vì $\\cos(-x) = \\cos x$).
              <br>• $y = \\sin x$, $y = \\tan x$, $y = \\cot x$ đều là các <b>HÀM SỐ LẺ</b> (vì $\\sin(-x) = -\\sin x$, $\\tan(-x) = -\\tan x$, $\\cot(-x) = -\\cot x$).
            </div>
          </div>

          <div class="text-center my-3">
            <svg viewBox="0 0 680 250" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
              <!-- ĐỒ THỊ 1: HÀM SỐ CHẴN f(x) = x^2 (Trục tung đối xứng) -->
              <g transform="translate(40, 20)">
                <rect x="0" y="0" width="280" height="210" fill="#f8fafc" rx="8" stroke="#cbd5e1"/>
                <line x1="20" y1="180" x2="260" y2="180" stroke="#64748b" stroke-width="1.5"/>
                <line x1="140" y1="200" x2="140" y2="15" stroke="#ef4444" stroke-width="2"/>
                <polygon points="140,15 136,25 144,25" fill="#ef4444"/>
                <polygon points="260,180 250,176 250,184" fill="#64748b"/>
                <text x="148" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ef4444">Oy (Trục đối xứng)</text>
                <text x="250" y="196" font-family="sans-serif" font-size="11" fill="#64748b">x</text>
                <text x="130" y="195" font-family="sans-serif" font-size="11" fill="#64748b">O</text>
                <!-- Parabola -->
                <path d="M 60 40 Q 140 210 220 40" fill="none" stroke="#2563eb" stroke-width="2.5"/>
                <!-- Điểm đối xứng qua Oy -->
                <line x1="85" y1="80" x2="195" y2="80" stroke="#059669" stroke-width="1.2" stroke-dasharray="3,3"/>
                <circle cx="85" cy="80" r="3.5" fill="#2563eb"/>
                <circle cx="195" cy="80" r="3.5" fill="#2563eb"/>
                <text x="50" y="75" font-family="sans-serif" font-size="10" fill="#1e293b">(-x, f(-x))</text>
                <text x="200" y="75" font-family="sans-serif" font-size="10" fill="#1e293b">(x, f(x))</text>
                <text x="65" y="202" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8">HÀM CHẴN: f(-x) = f(x)</text>
              </g>

              <!-- ĐỒ THỊ 2: HÀM SỐ LẺ g(x) = x^3 (Gốc O là tâm đối xứng) -->
              <g transform="translate(360, 20)">
                <rect x="0" y="0" width="280" height="210" fill="#f8fafc" rx="8" stroke="#cbd5e1"/>
                <line x1="20" y1="105" x2="260" y2="105" stroke="#64748b" stroke-width="1.5"/>
                <line x1="140" y1="195" x2="140" y2="15" stroke="#64748b" stroke-width="1.5"/>
                <polygon points="140,15 136,25 144,25" fill="#64748b"/>
                <polygon points="260,105 250,101 250,109" fill="#64748b"/>
                <text x="146" y="26" font-family="sans-serif" font-size="11" fill="#64748b">y</text>
                <text x="250" y="120" font-family="sans-serif" font-size="11" fill="#64748b">x</text>
                <!-- Gốc O tâm đối xứng -->
                <circle cx="140" cy="105" r="5" fill="#f59e0b"/>
                <text x="146" y="118" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309">O (Tâm ĐX)</text>
                <!-- Cubic curve -->
                <path d="M 60 185 C 110 180, 130 115, 140 105 C 150 95, 170 30, 220 25" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
                <!-- Điểm đối xứng qua O -->
                <line x1="90" y1="165" x2="190" y2="45" stroke="#ea580c" stroke-width="1.2" stroke-dasharray="3,3"/>
                <circle cx="90" cy="165" r="3.5" fill="#7c3aed"/>
                <circle cx="190" cy="45" r="3.5" fill="#7c3aed"/>
                <text x="35" y="160" font-family="sans-serif" font-size="10" fill="#1e293b">(-x, -g(x))</text>
                <text x="195" y="45" font-family="sans-serif" font-size="10" fill="#1e293b">(x, g(x))</text>
                <text x="65" y="202" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6d28d9">HÀM LẺ: g(-x) = -g(x)</text>
              </g>
            </svg>
          </div>`,
          audioUrl: "assets/audio/b11_3_sec2a.mp3",
          audioScript: "Mục 2. Tiểu mục a: Hàm số chẵn và hàm số lẻ. Cho hàm số y bằng f(x) có tập xác định D đối xứng qua gốc tọa độ, tức là với mọi x thuộc D thì trừ x cũng thuộc D. Hàm số được gọi là hàm số chẵn nếu f của trừ x bằng f(x). Đồ thị của hàm số chẵn luôn nhận trục tung Oy làm trục đối xứng. Ngược lại, hàm số được gọi là hàm số lẻ nếu f của trừ x bằng trừ f(x). Đồ thị của hàm số lẻ luôn nhận gốc tọa độ O làm tâm đối xứng. Trong bốn hàm số lượng giác cơ bản, ta có: cos của trừ x bằng cos x nên hàm số y bằng cos x là hàm số chẵn; còn sin của trừ x bằng trừ sin x, tan của trừ x bằng trừ tan x, cotang của trừ x bằng trừ cotang x nên ba hàm số y bằng sin x, y bằng tan x và y bằng cotang x đều là các hàm số lẻ.",
          checkpoints: [
            {
              id: "poi-11-3-sec2a-1",
              time: 20,
              title: "Tương tác 2a Câu 1: Phân loại hàm số lượng giác chẵn",
              question: "Trong 4 hàm số lượng giác cơ bản: $y = \\sin x$, $y = \\cos x$, $y = \\tan x$, $y = \\cot x$, hàm số nào là <b>hàm số chẵn</b>?",
              options: [
                "$y = \\sin x$",
                "$y = \\cos x$",
                "$y = \\tan x$",
                "$y = \\cot x$"
              ],
              correctIndex: 1,
              correctAnswer: "B",
              explanation: "Hàm số $y = \\cos x$ có $\\cos(-x) = \\cos x$ với mọi $x \\in \\mathbb{R}$, do đó đây là hàm số chẵn. Ba hàm số còn lại đều là hàm số lẻ."
            },
            {
              id: "poi-11-3-sec2a-2",
              time: 40,
              title: "Tương tác 2a Câu 2: Đặc trưng hình học đồ thị hàm số lẻ",
              question: "Đồ thị của một hàm số lẻ luôn có đặc trưng đối xứng nào sau đây?",
              options: [
                "Đối xứng qua trục hoành $Ox$",
                "Đối xứng qua trục tung $Oy$",
                "Đối xứng qua gốc toạ độ $O(0;0)$",
                "Đối xứng qua đường phân giác $y = x$"
              ],
              correctIndex: 2,
              correctAnswer: "C",
              explanation: "Theo định nghĩa, nếu điểm $M(x; y)$ thuộc đồ thị hàm số lẻ thì điểm $M'(-x; -y)$ cũng thuộc đồ thị. Do đó đồ thị luôn nhận gốc toạ độ $O(0;0)$ làm tâm đối xứng."
            }
          ],
          workedExample: {
            title: "VÍ DỤ 2 (SGK TRANG 24) & LỜI GIẢI CHI TIẾT",
            problemHtml: "Xét tính chẵn, lẻ của hàm số $f(x) = x\\sin x$.",
            solutionHtml: `<p><b>Lời giải:</b></p>
            <p>• Tập xác định của hàm số là $D = \\mathbb{R}$.</p>
            <p>• Do đó, nếu $x \\in D$ thì $-x \\in D$.</p>
            <p>• Với mọi $x \\in D$, ta có:</p>
            <p>$$f(-x) = (-x)\\sin(-x) = (-x)(-\\sin x) = x\\sin x = f(x).$$</p>
            <p><b>Kết luận:</b> $f(x) = x\\sin x$ là hàm số chẵn.</p>`
          },
          practiceProblem: {
            title: "LUYỆN TẬP 2 (SGK TRANG 24) - HƯỚNG DẪN TỰ LUYỆN",
            problemHtml: "Xét tính chẵn, lẻ của hàm số $g(x) = \\dfrac{1}{x}$.",
            hintHtml: `<p><b>Hướng dẫn giải của Thầy Sáng:</b></p>
            <p>• Tập xác định: $D = \\mathbb{R} \\setminus \\{0\\}$, là tập đối xứng (nếu $x \\in D$ thì $-x \\in D$).</p>
            <p>• Xét $g(-x) = \\dfrac{1}{-x} = -\\dfrac{1}{x} = -g(x)$.</p>
            <p>• <b>Kết luận:</b> $g(x) = \\dfrac{1}{x}$ là hàm số lẻ.</p>`
          }
        },

        // --- 2b. HÀM SỐ TUẦN HOÀN VÀ CHU KÌ ---
        {
          key: "b",
          title: "Hàm số tuần hoàn và chu kì",
          contentHtml: `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
            <h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-rotate"></i> HĐ3 (SGK trang 24): Khảo sát sự lặp lại của các giá trị lượng giác</h5>
            <p>Do điểm biểu diễn góc lượng giác lặp lại vị trí sau mỗi vòng quay $2\\pi$ (hoặc nửa vòng $\\pi$ đối với tang và côtang):</p>
            <ul>
              <li>$\\sin(x + 2\\pi) = \\sin x$ và $\\cos(x + 2\\pi) = \\cos x$.</li>
              <li>$\\tan(x + \\pi) = \\tan x$ và $\\cot(x + \\pi) = \\cot x$.</li>
            </ul>
          </div>

          <div class="alert-box alert-success mb-3">
            <h5 class="fw-bold text-success mb-2"><i class="fa-solid fa-arrows-spin"></i> ĐỊNH NGHĨA HÀM SỐ TUẦN HOÀN & CHU KÌ (SGK TRANG 24)</h5>
            <p>Hàm số $y = f(x)$ có tập xác định $D$ được gọi là <b>hàm số tuần hoàn</b> nếu tồn tại số $T \\ne 0$ sao cho với mọi $x \\in D$ ta có:</p>
            <ol>
              <li>$x + T \\in D$ và $x - T \\in D$;</li>
              <li>$f(x + T) = f(x)$.</li>
            </ol>
            <p>Số $T > 0$ nhỏ nhất thoả mãn các điều kiện trên (nếu có) được gọi là <b>chu kì</b> của hàm số tuần hoàn đó.</p>
            <div class="mt-2 p-2 bg-white rounded border border-success">
              <b>⚡ KẾT LUẬN QUAN TRỌNG VỀ CHU KÌ:</b>
              <br>• Hàm số $y = \\sin x$ và $y = \\cos x$ tuần hoàn với chu kì nhỏ nhất là <b>$T = 2\\pi$</b>.
              <br>• Hàm số $y = \\tan x$ và $y = \\cot x$ tuần hoàn với chu kì nhỏ nhất là <b>$T = \\pi$</b>.
              <br>• <b>Công thức tổng quát:</b> Hàm số $y = A\\sin(\\omega x)$ và $y = A\\cos(\\omega x)$ (với $\\omega \\ne 0$) tuần hoàn với chu kì:
              $$T = \\dfrac{2\\pi}{|\\omega|}.$$
              Hàm số $y = A\\tan(\\omega x)$ và $y = A\\cot(\\omega x)$ tuần hoàn với chu kì:
              $$T = \\dfrac{\\pi}{|\\omega|}.$$
            </div>
          </div>

          <div class="text-center my-3">
            <svg viewBox="0 0 680 200" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
              <defs>
                <linearGradient id="periodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2"/>
                  <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0"/>
                </linearGradient>
              </defs>
              <!-- Trục tọa độ -->
              <line x1="30" y1="100" x2="650" y2="100" stroke="#334155" stroke-width="1.8"/>
              <line x1="70" y1="180" x2="70" y2="20" stroke="#334155" stroke-width="1.8"/>
              <polygon points="650,100 640,96 640,104" fill="#334155"/>
              <polygon points="70,20 66,30 74,30" fill="#334155"/>
              <text x="645" y="120" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155">x</text>
              <text x="50" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155">y</text>

              <!-- Chu kì cơ sở [a, a + T] -->
              <rect x="150" y="30" width="180" height="140" fill="url(#periodGrad)" stroke="#3b82f6" stroke-dasharray="4,4"/>
              <text x="175" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8">Khoảng cơ sở độ dài T</text>

              <!-- Đường sóng lặp lại -->
              <path d="M 60 100 
                       C 105 30, 105 30, 150 100
                       C 195 170, 195 170, 240 100
                       C 285 30, 285 30, 330 100
                       C 375 170, 375 170, 420 100
                       C 465 30, 465 30, 510 100
                       C 555 170, 555 170, 600 100" 
                    fill="none" stroke="#2563eb" stroke-width="2.8"/>

              <!-- Mũi tên tịnh tiến T -->
              <line x1="150" y1="185" x2="330" y2="185" stroke="#16a34a" stroke-width="2"/>
              <polygon points="330,185 320,181 320,189" fill="#16a34a"/>
              <polygon points="150,185 160,181 160,189" fill="#16a34a"/>
              <text x="215" y="180" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d">Tịnh tiến T</text>

              <!-- Điểm đỉnh và khoảng cách T -->
              <circle cx="105" cy="48" r="4" fill="#ea580c"/>
              <circle cx="285" cy="48" r="4" fill="#ea580c"/>
              <line x1="105" y1="48" x2="285" y2="48" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,3"/>
              <text x="175" y="40" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">Khoảng cách = T</text>
            </svg>
          </div>`,
          audioUrl: "assets/audio/b11_3_sec2b.mp3",
          audioScript: "Mục 2. Tiểu mục b: Hàm số tuần hoàn và chu kì. Một hàm số y bằng f(x) có tập xác định D được gọi là hàm số tuần hoàn nếu tồn tại một số thực T khác 0 sao cho với mọi x thuộc D, thì x cộng T thuộc D, x trừ T thuộc D, và f của x cộng T bằng f(x). Số T dương nhỏ nhất thỏa mãn điều kiện trên được gọi là chu kì của hàm số. Do tính chất lặp lại sau mỗi vòng tròn lượng giác, hàm số y bằng sin x và y bằng cos x là các hàm số tuần hoàn với chu kì nhỏ nhất là 2 pi; còn hàm số y bằng tan x và y bằng cotang x là các hàm số tuần hoàn với chu kì nhỏ nhất là pi. Tổng quát hơn, hàm số A nhân sin của omega x hoặc A nhân cos của omega x tuần hoàn với chu kì T bằng 2 pi chia trị tuyệt đối của omega.",
          checkpoints: [
            {
              id: "poi-11-3-sec2b-1",
              time: 20,
              title: "Tương tác 2b Câu 1: Chu kì cơ bản của Sin và Côsin",
              question: "Chu kì tuần hoàn nhỏ nhất của hàm số $y = \\sin x$ và $y = \\cos x$ là:",
              options: [
                "$\\pi$",
                "$\\dfrac{\\pi}{2}$",
                "$2\\pi$",
                "$4\\pi$"
              ],
              correctIndex: 2,
              correctAnswer: "C",
              explanation: "Hàm số $y = \\sin x$ và $y = \\cos x$ tuần hoàn với chu kì dương nhỏ nhất $T = 2\\pi$."
            },
            {
              id: "poi-11-3-sec2b-2",
              time: 40,
              title: "Tương tác 2b Câu 2: Chu kì hàm số hợp",
              question: "Chu kì tuần hoàn của hàm số $y = \\sin(2x)$ bằng bao nhiêu?",
              options: [
                "$2\\pi$",
                "$\\pi$",
                "$\\dfrac{\\pi}{2}$",
                "$4\\pi$"
              ],
              correctIndex: 1,
              correctAnswer: "B",
              explanation: "Áp dụng công thức tổng quát: hàm số $y = \\sin(\\omega x)$ có chu kì $T = \\dfrac{2\\pi}{|\\omega|} = \\dfrac{2\\pi}{2} = \\pi$."
            }
          ],
          workedExample: {
            title: "VÍ DỤ 3 (SGK TRANG 25) & LỜI GIẢI CHI TIẾT",
            problemHtml: "Xét tính tuần hoàn của hàm số $y = \\sin 2x$.",
            solutionHtml: `<p><b>Lời giải:</b></p>
            <p>• Hàm số có tập xác định là $\\mathbb{R}$ và với mọi số thực $x$, ta có:</p>
            <p>$$x - \\pi \\in \\mathbb{R}, \\quad x + \\pi \\in \\mathbb{R}$$</p>
            <p>• Xét giá trị hàm số khi tịnh tiến một khoảng $\\pi$:</p>
            <p>$$\\sin\\left(2(x + \\pi)\\right) = \\sin(2x + 2\\pi) = \\sin 2x.$$</p>
            <p><b>Kết luận:</b> Vậy $y = \\sin 2x$ là hàm số tuần hoàn với chu kì $T = \\pi$.</p>`
          },
          practiceProblem: {
            title: "LUYỆN TẬP 3 (SGK TRANG 25) - HƯỚNG DẪN TỰ LUYỆN",
            problemHtml: "Xét tính tuần hoàn và tìm chu kì của hàm số $y = \\tan 2x$.",
            hintHtml: `<p><b>Hướng dẫn giải của Thầy Sáng:</b></p>
            <p>• Ta có $\\tan 2(x + T) = \\tan(2x + 2T) = \\tan 2x$.</p>
            <p>• Vì chu kì của hàm số tang cơ bản là $\\pi$, nên ta có $2T = \\pi \\Leftrightarrow T = \\dfrac{\\pi}{2}$.</p>
            <p>• <b>Kết luận:</b> Hàm số $y = \\tan 2x$ tuần hoàn với chu kì $T = \\dfrac{\\pi}{2}$.</p>`
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3: ĐỒ THỊ VÀ TÍNH CHẤT CỦA HÀM SỐ y = sin x (HÌNH 1.14)
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b3-s3",
      num: "3",
      title: "Đồ thị và tính chất của hàm số y = sin x",
      contentHtml: `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
        <h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-chart-line"></i> HĐ4 (SGK trang 25): Khảo sát vẽ đồ thị hàm số y = sin x</h5>
        <p>Do $y = \\sin x$ là hàm số lẻ nên ta vẽ trên đoạn $[0; \\pi]$, sau đó lấy đối xứng qua gốc toạ độ $O$ để được đồ thị trên $[-\\pi; \\pi]$, rồi tịnh tiến theo chu kì $2\\pi$ để thu được toàn bộ đồ thị trên $\\mathbb{R}$.</p>
        <div class="table-responsive">
          <table class="table table-bordered table-sm text-center align-middle bg-white mb-0">
            <thead class="table-info">
              <tr>
                <th>$x$</th>
                <th>$-\\pi$</th>
                <th>$-\\dfrac{3\\pi}{4}$</th>
                <th>$-\\dfrac{\\pi}{2}$</th>
                <th>$-\\dfrac{\\pi}{4}$</th>
                <th>$0$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{2}$</th>
                <th>$\\dfrac{3\\pi}{4}$</th>
                <th>$\\pi$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$y = \\sin x$</td>
                <td>$0$</td>
                <td>$-\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$-1$</td>
                <td>$-\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$0$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$0$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="alert-box alert-success mb-3">
        <h5 class="fw-bold text-success mb-2"><i class="fa-solid fa-star"></i> TỔNG KẾT TÍNH CHẤT CỦA HÀM SỐ $y = \\sin x$ (SGK TRANG 26)</h5>
        <ul>
          <li><b>Tập xác định:</b> $D = \\mathbb{R}$.</li>
          <li><b>Tập giá trị:</b> $[-1; 1]$, nghĩa là $-1 \\le \\sin x \\le 1$.</li>
          <li><b>Tính chất chẵn lẻ:</b> Là hàm số <b>lẻ</b>, đồ thị đối xứng qua <b>gốc toạ độ $O$</b>.</li>
          <li><b>Tính tuần hoàn:</b> Tuần hoàn với chu kì <b>$T = 2\\pi$</b>.</li>
          <li><b>Tính đơn điệu:</b>
            <br>• Đồng biến trên mỗi khoảng: $\\left(-\\dfrac{\\pi}{2} + k2\\pi; \\dfrac{\\pi}{2} + k2\\pi\\right), k \\in \\mathbb{Z}$.
            <br>• Nghịch biến trên mỗi khoảng: $\\left(\\dfrac{\\pi}{2} + k2\\pi; \\dfrac{3\\pi}{2} + k2\\pi\\right), k \\in \\mathbb{Z}$.
          </li>
          <li><b>Dạng đồ thị:</b> Là một đường lượn sóng liên tục gọi là <b>đường hình sin</b> (sine wave).</li>
        </ul>
      </div>

      <!-- HÌNH 1.14 SGK CHUẨN XÁC -->
      <div class="text-center my-3">
        <div class="fw-bold text-secondary mb-1">HÌNH 1.14: ĐỒ THỊ HÀM SỐ $y = \\sin x$ TRÊN $\\mathbb{R}$ (SGK TRANG 25)</div>
        <svg viewBox="0 0 760 260" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
          <!-- Trục tọa độ -->
          <line x1="30" y1="130" x2="720" y2="130" stroke="#334155" stroke-width="1.8"/>
          <line x1="380" y1="240" x2="380" y2="20" stroke="#334155" stroke-width="1.8"/>
          <polygon points="720,130 710,126 710,134" fill="#334155"/>
          <polygon points="380,20 376,30 384,30" fill="#334155"/>
          <text x="715" y="150" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155">x</text>
          <text x="360" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155">y</text>
          <text x="368" y="146" font-family="sans-serif" font-size="12" fill="#64748b">O</text>

          <!-- Giới hạn y = 1 và y = -1 -->
          <line x1="30" y1="70" x2="710" y2="70" stroke="#cbd5e1" stroke-dasharray="4,4"/>
          <line x1="30" y1="190" x2="710" y2="190" stroke="#cbd5e1" stroke-dasharray="4,4"/>
          <text x="365" y="74" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">1</text>
          <text x="360" y="194" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">-1</text>

          <!-- Đường hình sin chuẩn xác (O ở x=380, pi = 70px) -->
          <!-- x = -2pi -> 380 - 140 = 240 -->
          <!-- x = -pi -> 380 - 70 = 310 -->
          <!-- x = 0 -> 380 -->
          <!-- x = pi -> 380 + 70 = 450 -->
          <!-- x = 2pi -> 380 + 140 = 520 -->
          <!-- x = 3pi -> 380 + 210 = 590 -->
          <path d="M 170 130 
                   C 187.5 70, 222.5 70, 240 130
                   C 257.5 190, 292.5 190, 310 130
                   C 327.5 70, 362.5 70, 380 130
                   C 397.5 190, 432.5 190, 450 130
                   C 467.5 70, 502.5 70, 520 130
                   C 537.5 190, 572.5 190, 590 130
                   C 607.5 70, 642.5 70, 660 130"
                fill="none" stroke="#ef4444" stroke-width="2.8"/>

          <!-- Mốc hoành độ -->
          <!-- -5pi/2 (205) -->
          <line x1="205" y1="130" x2="205" y2="70" stroke="#94a3b8" stroke-dasharray="3,3"/>
          <circle cx="205" cy="70" r="3.5" fill="#ef4444"/>
          <text x="188" y="148" font-family="sans-serif" font-size="10" fill="#334155">-5π/2</text>

          <!-- -2pi (240) -->
          <circle cx="240" cy="130" r="3.5" fill="#334155"/>
          <text x="230" y="148" font-family="sans-serif" font-size="11" fill="#334155">-2π</text>

          <!-- -3pi/2 (275) -->
          <line x1="275" y1="130" x2="275" y2="190" stroke="#94a3b8" stroke-dasharray="3,3"/>
          <circle cx="275" cy="190" r="3.5" fill="#ef4444"/>
          <text x="260" y="148" font-family="sans-serif" font-size="10" fill="#334155">-3π/2</text>

          <!-- -pi (310) -->
          <circle cx="310" cy="130" r="3.5" fill="#334155"/>
          <text x="302" y="148" font-family="sans-serif" font-size="11" fill="#334155">-π</text>

          <!-- -pi/2 (345) -->
          <line x1="345" y1="130" x2="345" y2="70" stroke="#94a3b8" stroke-dasharray="3,3"/>
          <circle cx="345" cy="70" r="3.5" fill="#ef4444"/>
          <text x="332" y="148" font-family="sans-serif" font-size="10" fill="#334155">-π/2</text>

          <!-- pi/2 (415) -->
          <line x1="415" y1="130" x2="415" y2="190" stroke="#94a3b8" stroke-dasharray="3,3"/>
          <circle cx="415" cy="190" r="3.5" fill="#ef4444"/>
          <text x="408" y="148" font-family="sans-serif" font-size="10" fill="#334155">π/2</text>

          <!-- pi (450) -->
          <circle cx="450" cy="130" r="3.5" fill="#334155"/>
          <text x="446" y="148" font-family="sans-serif" font-size="11" fill="#334155">π</text>

          <!-- 3pi/2 (485) -->
          <line x1="485" y1="130" x2="485" y2="70" stroke="#94a3b8" stroke-dasharray="3,3"/>
          <circle cx="485" cy="70" r="3.5" fill="#ef4444"/>
          <text x="475" y="148" font-family="sans-serif" font-size="10" fill="#334155">3π/2</text>

          <!-- 2pi (520) -->
          <circle cx="520" cy="130" r="3.5" fill="#334155"/>
          <text x="515" y="148" font-family="sans-serif" font-size="11" fill="#334155">2π</text>

          <!-- 5pi/2 (555) -->
          <line x1="555" y1="130" x2="555" y2="190" stroke="#94a3b8" stroke-dasharray="3,3"/>
          <circle cx="555" cy="190" r="3.5" fill="#ef4444"/>
          <text x="546" y="148" font-family="sans-serif" font-size="10" fill="#334155">5π/2</text>

          <!-- Chỉ báo 1 chu kì 2pi từ -pi đến pi -->
          <line x1="310" y1="215" x2="450" y2="215" stroke="#16a34a" stroke-width="1.8"/>
          <line x1="310" y1="205" x2="310" y2="225" stroke="#16a34a" stroke-width="1.8"/>
          <line x1="450" y1="205" x2="450" y2="225" stroke="#16a34a" stroke-width="1.8"/>
          <text x="365" y="235" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">2π</text>
        </svg>
      </div>`,
      audioUrl: "assets/audio/b11_3_sec3.mp3",
      audioScript: "Mục 3. Đồ thị và tính chất của hàm số y bằng sin x. Hàm số y bằng sin x có tập xác định là R và tập giá trị là đoạn từ trừ 1 đến 1. Vì đây là hàm số lẻ nên đồ thị nhận gốc tọa độ O làm tâm đối xứng; và vì tuần hoàn với chu kì 2 pi nên đồ thị lặp lại sau mỗi khoảng cách 2 pi dọc theo trục hoành. Đồ thị là một đường cong hình sin lượn sóng liên tục. Trên đoạn từ trừ pi đến pi, đồ thị đi qua gốc O(0; 0), đạt cực đại bằng 1 tại điểm pi chia 2, đạt cực tiểu bằng trừ 1 tại điểm trừ pi chia 2. Hàm số đồng biến trên mỗi khoảng từ trừ pi chia 2 cộng k2pi đến pi chia 2 cộng k2pi; và nghịch biến trên mỗi khoảng từ pi chia 2 cộng k2pi đến 3 pi chia 2 cộng k2pi.",
      checkpoints: [
        {
          id: "poi-11-3-sec3-1",
          time: 20,
          title: "Tương tác Mục 3 Câu 1: Giá trị cực đại của hàm số Sin",
          question: "Hàm số $y = \\sin x$ đạt giá trị lớn nhất bằng $1$ tại những điểm nào sau đây?",
          options: [
            "$x = k2\\pi\\ (k \\in \\mathbb{Z})$",
            "$x = \\dfrac{\\pi}{2} + k2\\pi\\ (k \\in \\mathbb{Z})$",
            "$x = \\pi + k2\\pi\\ (k \\in \\mathbb{Z})$",
            "$x = -\\dfrac{\\pi}{2} + k2\\pi\\ (k \\in \\mathbb{Z})$"
          ],
          correctIndex: 1,
          correctAnswer: "B",
          explanation: "Ta có $\\sin x = 1 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k2\\pi\\ (k \\in \\mathbb{Z})$. Đây chính là hoành độ các đỉnh cao nhất trên đồ thị hình sin."
        },
        {
          id: "poi-11-3-sec3-2",
          time: 40,
          title: "Tương tác Mục 3 Câu 2: Chiều biến thiên của hàm số Sin",
          question: "Trên khoảng $\\left(0; \\dfrac{\\pi}{2}\\right)$, hàm số $y = \\sin x$ có chiều biến thiên như thế nào?",
          options: [
            "Hàm số nghịch biến",
            "Hàm số luôn đồng biến",
            "Hàm số không đổi",
            "Hàm số vừa đồng biến vừa nghịch biến"
          ],
          correctIndex: 1,
          correctAnswer: "B",
          explanation: "Vì khoảng $\\left(0; \\dfrac{\\pi}{2}\\right) \\subset \\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$, mà trên $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ hàm số $y = \\sin x$ đồng biến, nên trên $\\left(0; \\dfrac{\\pi}{2}\\right)$ hàm số luôn đồng biến (đồ thị đi lên từ 0 đến 1)."
        }
      ],
      workedExample: {
        title: "VÍ DỤ 4 (SGK TRANG 26) & LỜI GIẢI CHI TIẾT",
        problemHtml: "Sử dụng đồ thị ở Hình 1.14, hãy xác định các giá trị của $x$ trên đoạn $\\left[-\\dfrac{\\pi}{2}; \\dfrac{3\\pi}{2}\\right]$ để hàm số $y = \\sin x$:<br>a) Nhận giá trị bằng 0;<br>b) Nhận giá trị dương.",
        solutionHtml: `<p><b>Lời giải:</b></p>
        <p>a) Từ đồ thị Hình 1.14, ta thấy trên đoạn $\\left[-\\dfrac{\\pi}{2}; \\dfrac{3\\pi}{2}\\right]$, đường cong cắt trục hoành tại hai điểm có hoành độ là $x = 0$ và $x = \\pi$. Do đó:</p>
        <p>$$y = 0 \\iff x = 0 \\quad \\text{hoặc} \\quad x = \\pi.$$</p>
        <p>b) Hàm số nhận giá trị dương ứng với phần đồ thị nằm phía trên trục hoành. Từ đồ thị suy ra trên đoạn $\\left[-\\dfrac{\\pi}{2}; \\dfrac{3\\pi}{2}\\right]$, ta có:</p>
        <p>$$y > 0 \\iff x \\in (0; \\pi).$$</p>`
      },
      practiceProblem: {
        title: "LUYỆN TẬP 4 & VẬN DỤNG 1 (SGK TRANG 26) - HƯỚNG DẪN TỰ LUYỆN",
        problemHtml: "a) [Luyện tập 4] Tìm tập giá trị của hàm số $y = 2\\sin x$.<br>b) [Vận dụng 1] Xét bài toán hô hấp $v = 0{,}85\\sin\\left(\\dfrac{\\pi t}{3}\\right)$. Biết rằng quá trình hít vào xảy ra khi $v > 0$ và quá trình thở ra xảy ra khi $v < 0$. Trong khoảng thời gian từ 0 đến 5 giây, khoảng thời điểm nào người đó hít vào? Người đó thở ra?",
        hintHtml: `<p><b>Hướng dẫn giải của Thầy Sáng:</b></p>
        <p><b>a) Luyện tập 4:</b> Với mọi $x \\in \\mathbb{R}$, ta có $-1 \\le \\sin x \\le 1 \\Leftrightarrow -2 \\le 2\\sin x \\le 2$. Vậy tập giá trị của hàm số là đoạn $[-2; 2]$.</p>
        <p><b>b) Vận dụng 1:</b></p>
        <p>• Người đó hít vào khi $v > 0 \\Leftrightarrow \\sin\\left(\\dfrac{\\pi t}{3}\\right) > 0$. Với $t \\in [0; 5]$, ta có $\\dfrac{\\pi t}{3} \\in \\left[0; \\dfrac{5\\pi}{3}\\right]$. Khi đó $\\sin\\left(\\dfrac{\\pi t}{3}\\right) > 0 \\Leftrightarrow 0 < \\dfrac{\\pi t}{3} < \\pi \\Leftrightarrow 0 < t < 3$. Vậy người đó hít vào trong khoảng thời gian từ 0 đến 3 giây.</p>
        <p>• Người đó thở ra khi $v < 0 \\Leftrightarrow \\pi < \\dfrac{\\pi t}{3} < \\dfrac{5\\pi}{3} \\Leftrightarrow 3 < t < 5$. Vậy người đó thở ra trong khoảng thời gian từ 3 đến 5 giây.</p>`
      }
    },

    // -----------------------------------------------------------------------
    // MỤC 4: ĐỒ THỊ VÀ TÍNH CHẤT CỦA HÀM SỐ y = cos x (HÌNH 1.15)
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b3-s4",
      num: "4",
      title: "Đồ thị và tính chất của hàm số y = cos x",
      contentHtml: `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
        <h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-chart-area"></i> HĐ5 (SGK trang 26): Khảo sát vẽ đồ thị hàm số y = cos x</h5>
        <p>Do $\\cos x = \\sin\\left(x + \\dfrac{\\pi}{2}\\right)$ nên đồ thị hàm số $y = \\cos x$ có được bằng cách tịnh tiến đồ thị hàm số $y = \\sin x$ sang bên trái một đoạn bằng $\\dfrac{\\pi}{2}$. Đồng thời vì $y = \\cos x$ là hàm số chẵn nên đồ thị nhận <b>trục tung $Oy$ làm trục đối xứng</b>.</p>
        <div class="table-responsive">
          <table class="table table-bordered table-sm text-center align-middle bg-white mb-0">
            <thead class="table-warning">
              <tr>
                <th>$x$</th>
                <th>$-\\pi$</th>
                <th>$-\\dfrac{3\\pi}{4}$</th>
                <th>$-\\dfrac{\\pi}{2}$</th>
                <th>$-\\dfrac{\\pi}{4}$</th>
                <th>$0$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{2}$</th>
                <th>$\\dfrac{3\\pi}{4}$</th>
                <th>$\\pi$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$y = \\cos x$</td>
                <td>$-1$</td>
                <td>$-\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$0$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$0$</td>
                <td>$-\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$-1$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="alert-box alert-success mb-3">
        <h5 class="fw-bold text-success mb-2"><i class="fa-solid fa-star"></i> TỔNG KẾT TÍNH CHẤT CỦA HÀM SỐ $y = \\cos x$ (SGK TRANG 27)</h5>
        <ul>
          <li><b>Tập xác định:</b> $D = \\mathbb{R}$.</li>
          <li><b>Tập giá trị:</b> $[-1; 1]$, nghĩa là $-1 \\le \\cos x \\le 1$.</li>
          <li><b>Tính chất chẵn lẻ:</b> Là hàm số <b>chẵn</b>, đồ thị đối xứng qua <b>trục tung $Oy$</b>.</li>
          <li><b>Tính tuần hoàn:</b> Tuần hoàn với chu kì <b>$T = 2\\pi$</b>.</li>
          <li><b>Tính đơn điệu:</b>
            <br>• Đồng biến trên mỗi khoảng: $(-\\pi + k2\\pi; k2\\pi), k \\in \\mathbb{Z}$.
            <br>• Nghịch biến trên mỗi khoảng: $(k2\\pi; \\pi + k2\\pi), k \\in \\mathbb{Z}$.
          </li>
          <li><b>Dạng đồ thị:</b> Là một đường hình sin đối xứng hoàn hảo qua trục tung $Oy$, cắt $Oy$ tại điểm $(0; 1)$.</li>
        </ul>
      </div>

      <!-- HÌNH 1.15 SGK CHUẨN XÁC -->
      <div class="text-center my-3">
        <div class="fw-bold text-secondary mb-1">HÌNH 1.15: ĐỒ THỊ HÀM SỐ $y = \\cos x$ TRÊN $\\mathbb{R}$ (SGK TRANG 27)</div>
        <svg viewBox="0 0 760 260" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
          <!-- Trục tọa độ -->
          <line x1="30" y1="130" x2="720" y2="130" stroke="#334155" stroke-width="1.8"/>
          <line x1="380" y1="240" x2="380" y2="20" stroke="#ef4444" stroke-width="2"/>
          <polygon points="720,130 710,126 710,134" fill="#334155"/>
          <polygon points="380,20 376,30 384,30" fill="#ef4444"/>
          <text x="715" y="150" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155">x</text>
          <text x="360" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ef4444">y (Oy ĐX)</text>
          <text x="368" y="146" font-family="sans-serif" font-size="12" fill="#64748b">O</text>

          <!-- Giới hạn y = 1 và y = -1 -->
          <line x1="30" y1="70" x2="710" y2="70" stroke="#cbd5e1" stroke-dasharray="4,4"/>
          <line x1="30" y1="190" x2="710" y2="190" stroke="#cbd5e1" stroke-dasharray="4,4"/>
          <text x="365" y="74" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">1</text>
          <text x="360" y="194" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">-1</text>

          <!-- Đường hình sin của cos x (O ở 380, pi = 70px) -->
          <!-- Cắt Oy tại (380, 70) cực đại = 1 -->
          <!-- Đi qua (380 - 35 = 345, 130) [-pi/2] và (380 + 35 = 415, 130) [pi/2] -->
          <path d="M 170 190 
                   C 187.5 130, 222.5 130, 240 70
                   C 257.5 130, 292.5 130, 310 190
                   C 327.5 130, 362.5 130, 380 70
                   C 397.5 130, 432.5 130, 450 190
                   C 467.5 130, 502.5 130, 520 70
                   C 537.5 130, 572.5 130, 590 190
                   C 607.5 130, 642.5 130, 660 70"
                fill="none" stroke="#d97706" stroke-width="2.8"/>

          <!-- Điểm cắt Oy (0, 1) -->
          <circle cx="380" cy="70" r="4.5" fill="#ef4444"/>

          <!-- Mốc hoành độ -->
          <!-- -2pi (240) -> cực đại = 1 -->
          <circle cx="240" cy="70" r="3.5" fill="#d97706"/>
          <text x="230" y="148" font-family="sans-serif" font-size="11" fill="#334155">-2π</text>

          <!-- -3pi/2 (275) -> y = 0 -->
          <circle cx="275" cy="130" r="3.5" fill="#334155"/>
          <text x="260" y="148" font-family="sans-serif" font-size="10" fill="#334155">-3π/2</text>

          <!-- -pi (310) -> cực tiểu = -1 -->
          <circle cx="310" cy="190" r="3.5" fill="#d97706"/>
          <text x="302" y="148" font-family="sans-serif" font-size="11" fill="#334155">-π</text>

          <!-- -pi/2 (345) -> y = 0 -->
          <circle cx="345" cy="130" r="3.5" fill="#334155"/>
          <text x="332" y="148" font-family="sans-serif" font-size="10" fill="#334155">-π/2</text>

          <!-- pi/2 (415) -> y = 0 -->
          <circle cx="415" cy="130" r="3.5" fill="#334155"/>
          <text x="408" y="148" font-family="sans-serif" font-size="10" fill="#334155">π/2</text>

          <!-- pi (450) -> cực tiểu = -1 -->
          <circle cx="450" cy="190" r="3.5" fill="#d97706"/>
          <text x="446" y="148" font-family="sans-serif" font-size="11" fill="#334155">π</text>

          <!-- 3pi/2 (485) -> y = 0 -->
          <circle cx="485" cy="130" r="3.5" fill="#334155"/>
          <text x="475" y="148" font-family="sans-serif" font-size="10" fill="#334155">3π/2</text>

          <!-- 2pi (520) -> cực đại = 1 -->
          <circle cx="520" cy="70" r="3.5" fill="#d97706"/>
          <text x="515" y="148" font-family="sans-serif" font-size="11" fill="#334155">2π</text>

          <!-- Chỉ báo 1 chu kì 2pi từ -pi đến pi -->
          <line x1="310" y1="215" x2="450" y2="215" stroke="#16a34a" stroke-width="1.8"/>
          <line x1="310" y1="205" x2="310" y2="225" stroke="#16a34a" stroke-width="1.8"/>
          <line x1="450" y1="205" x2="450" y2="225" stroke="#16a34a" stroke-width="1.8"/>
          <text x="355" y="235" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">T = 2π</text>
        </svg>
      </div>`,
      audioUrl: "assets/audio/b11_3_sec4.mp3",
      audioScript: "Mục 4. Đồ thị và tính chất của hàm số y bằng cos x. Hàm số y bằng cos x có tập xác định là R và tập giá trị là đoạn từ trừ 1 đến 1. Vì là hàm số chẵn nên đồ thị nhận trục tung Oy làm trục đối xứng; và vì tuần hoàn với chu kì 2 pi nên đồ thị cũng là một đường cong hình sin lặp lại sau mỗi khoảng 2 pi. Đồ thị hàm số cos x có được bằng cách tịnh tiến đồ thị hàm số sin x sang trái một đoạn pi chia 2. Đồ thị cắt trục tung tại điểm (0; 1), cắt trục hoành tại các điểm pi chia 2 cộng k pi. Hàm số đồng biến trên mỗi khoảng từ trừ pi cộng k2pi đến k2pi; và nghịch biến trên mỗi khoảng từ k2pi đến pi cộng k2pi, với k thuộc Z.",
      checkpoints: [
        {
          id: "poi-11-3-sec4-1",
          time: 20,
          title: "Tương tác Mục 4 Câu 1: Giao điểm của đồ thị Cosin với Oy",
          question: "Đồ thị hàm số $y = \\cos x$ cắt trục tung $Oy$ tại điểm có toạ độ là:",
          options: [
            "$(0; 0)$",
            "$(0; 1)$",
            "$(1; 0)$",
            "$(0; -1)$"
          ],
          correctIndex: 1,
          correctAnswer: "B",
          explanation: "Tại $x = 0$, ta có $y = \\cos 0 = 1$. Do đó đồ thị cắt trục tung tại điểm $(0; 1)$."
        },
        {
          id: "poi-11-3-sec4-2",
          time: 40,
          title: "Tương tác Mục 4 Câu 2: Chiều biến thiên của hàm số Cosin",
          question: "Trên khoảng $(0; \\pi)$, hàm số $y = \\cos x$ có chiều biến thiên như thế nào?",
          options: [
            "Hàm số đồng biến",
            "Hàm số nghịch biến",
            "Hàm số không đổi",
            "Hàm số đạt cực tiểu"
          ],
          correctIndex: 1,
          correctAnswer: "B",
          explanation: "Trên khoảng $(0; \\pi)$, khi $x$ tăng từ $0$ đến $\\pi$ thì giá trị $\\cos x$ giảm liên tục từ $1$ xuống $-1$, do đó hàm số luôn nghịch biến."
        }
      ],
      workedExample: {
        title: "VÍ DỤ 5 (SGK TRANG 27) & LỜI GIẢI CHI TIẾT",
        problemHtml: "Sử dụng đồ thị ở Hình 1.15, hãy xác định các giá trị của $x$ trên đoạn $\\left[-\\dfrac{3\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ để hàm số $y = \\cos x$:<br>a) Nhận giá trị bằng 0;<br>b) Nhận giá trị âm.",
        solutionHtml: `<p><b>Lời giải:</b></p>
        <p>a) Từ đồ thị Hình 1.15, ta thấy trên đoạn $\\left[-\\dfrac{3\\pi}{2}; \\dfrac{\\pi}{2}\\right]$, đồ thị cắt trục hoành tại 3 điểm:</p>
        <p>$$y = 0 \\iff x = -\\dfrac{3\\pi}{2}, \\quad x = -\\dfrac{\\pi}{2}, \\quad x = \\dfrac{\\pi}{2}.$$</p>
        <p>b) Hàm số nhận giá trị âm ứng với phần đồ thị nằm phía dưới trục hoành. Từ đồ thị suy ra trên đoạn $\\left[-\\dfrac{3\\pi}{2}; \\dfrac{\\pi}{2}\\right]$:</p>
        <p>$$y < 0 \\iff x \\in \\left(-\\dfrac{3\\pi}{2}; -\\dfrac{\\pi}{2}\\right).$$</p>`
      },
      practiceProblem: {
        title: "LUYỆN TẬP 5 & VẬN DỤNG 2 (SGK TRANG 27) - HƯỚNG DẪN TỰ LUYỆN",
        problemHtml: "a) [Luyện tập 5] Tìm tập giá trị của hàm số $y = -3\\cos x$.<br>b) [Vận dụng 2] Một vật dao động điều hoà theo phương trình $x(t) = -5\\cos(4\\pi t)$ (cm). Hãy xác định biên độ và pha ban đầu của dao động. Tính số dao động toàn phần vật thực hiện được trong 2 giây.",
        hintHtml: `<p><b>Hướng dẫn giải của Thầy Sáng:</b></p>
        <p><b>a) Luyện tập 5:</b> Với mọi $x \\in \\mathbb{R}$, $-1 \\le \\cos x \\le 1 \\Rightarrow -3 \\le -3\\cos x \\le 3$. Vậy tập giá trị là đoạn $[-3; 3]$.</p>
        <p><b>b) Vận dụng 2:</b></p>
        <p>• Viết lại phương trình li độ dưới dạng chuẩn $A\\cos(\\omega t + \\varphi)$ với $A > 0$:</p>
        <p>$$x(t) = 5\\cos(4\\pi t + \\pi)\\text{ (cm)}.$$</p>
        <p>• Biên độ dao động: $A = 5\\text{ cm}$. Pha ban đầu: $\\varphi = \\pi\\text{ rad}$.</p>
        <p>• Chu kì dao động: $T = \\dfrac{2\\pi}{\\omega} = \\dfrac{2\\pi}{4\\pi} = 0{,}5\\text{ giây}$.</p>
        <p>• Trong khoảng thời gian $\\Delta t = 2\\text{ giây}$, số dao động toàn phần vật thực hiện được là $N = \\dfrac{\\Delta t}{T} = \\dfrac{2}{0{,}5} = 4$ dao động toàn phần.</p>`
      }
    },

    // -----------------------------------------------------------------------
    // MỤC 5: ĐỒ THỊ VÀ TÍNH CHẤT CỦA HÀM SỐ y = tan x (HÌNH 1.16)
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b3-s5",
      num: "5",
      title: "Đồ thị và tính chất của hàm số y = tan x",
      contentHtml: `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
        <h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-calculator"></i> HĐ6 (SGK trang 28): Khảo sát vẽ đồ thị hàm số y = tan x</h5>
        <p>Vì $y = \\tan x$ là hàm số lẻ và tuần hoàn với chu kì $\\pi$, ta chỉ cần vẽ trên khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ rồi tịnh tiến theo các bội của $\\pi$.</p>
        <div class="table-responsive">
          <table class="table table-bordered table-sm text-center align-middle bg-white mb-0">
            <thead class="table-danger">
              <tr>
                <th>$x$</th>
                <th>$-\\dfrac{\\pi}{3}$</th>
                <th>$-\\dfrac{\\pi}{4}$</th>
                <th>$-\\dfrac{\\pi}{6}$</th>
                <th>$0$</th>
                <th>$\\dfrac{\\pi}{6}$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{3}$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$y = \\tan x$</td>
                <td>$-\\sqrt{3}$</td>
                <td>$-1$</td>
                <td>$-\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$0$</td>
                <td>$\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$1$</td>
                <td>$\\sqrt{3}$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="alert-box alert-success mb-3">
        <h5 class="fw-bold text-success mb-2"><i class="fa-solid fa-star"></i> TỔNG KẾT TÍNH CHẤT CỦA HÀM SỐ $y = \\tan x$ (SGK TRANG 28)</h5>
        <ul>
          <li><b>Tập xác định:</b> $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$.</li>
          <li><b>Tập giá trị:</b> $\\mathbb{R}$.</li>
          <li><b>Tính chất chẵn lẻ:</b> Là hàm số <b>lẻ</b>, đồ thị đối xứng qua <b>gốc toạ độ $O$</b>.</li>
          <li><b>Tính tuần hoàn:</b> Tuần hoàn với chu kì <b>$T = \\pi$</b>.</li>
          <li><b>Tính đơn điệu:</b> <b>Luôn đồng biến</b> trên mỗi khoảng xác định $\\left(-\\dfrac{\\pi}{2} + k\\pi; \\dfrac{\\pi}{2} + k\\pi\\right), k \\in \\mathbb{Z}$.</li>
          <li><b>Tiệm cận đứng:</b> Các đường thẳng $x = \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$ là các đường tiệm cận đứng của đồ thị.</li>
        </ul>
      </div>

      <!-- HÌNH 1.16 SGK CHUẨN XÁC -->
      <div class="text-center my-3">
        <div class="fw-bold text-secondary mb-1">HÌNH 1.16: ĐỒ THỊ HÀM SỐ $y = \\tan x$ TRÊN $\\mathbb{R}$ (SGK TRANG 28)</div>
        <svg viewBox="0 0 760 280" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
          <!-- Trục tọa độ -->
          <line x1="30" y1="140" x2="720" y2="140" stroke="#334155" stroke-width="1.8"/>
          <line x1="380" y1="260" x2="380" y2="20" stroke="#334155" stroke-width="1.8"/>
          <polygon points="720,140 710,136 710,144" fill="#334155"/>
          <polygon points="380,20 376,30 384,30" fill="#334155"/>
          <text x="715" y="160" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155">x</text>
          <text x="360" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155">y</text>
          <text x="368" y="156" font-family="sans-serif" font-size="12" fill="#64748b">O</text>

          <!-- Các đường tiệm cận đứng (x = pi/2 + k*pi) -->
          <!-- O tại 380, pi = 120px. pi/2 = 60px -->
          <!-- x = -3pi/2 -> 380 - 180 = 200 -->
          <!-- x = -pi/2 -> 380 - 60 = 320 -->
          <!-- x = pi/2 -> 380 + 60 = 440 -->
          <!-- x = 3pi/2 -> 380 + 180 = 560 -->
          <line x1="200" y1="20" x2="200" y2="260" stroke="#059669" stroke-width="1.6" stroke-dasharray="5,4"/>
          <line x1="320" y1="20" x2="320" y2="260" stroke="#059669" stroke-width="1.6" stroke-dasharray="5,4"/>
          <line x1="440" y1="20" x2="440" y2="260" stroke="#059669" stroke-width="1.6" stroke-dasharray="5,4"/>
          <line x1="560" y1="20" x2="560" y2="260" stroke="#059669" stroke-width="1.6" stroke-dasharray="5,4"/>

          <text x="185" y="272" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">-3π/2</text>
          <text x="308" y="272" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">-π/2</text>
          <text x="432" y="272" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">π/2</text>
          <text x="548" y="272" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">3π/2</text>

          <!-- Các nhánh đồ thị đồng biến dốc lên -->
          <!-- Nhánh 1: (-3pi/2; -pi/2) đi qua -pi (260, 140) -->
          <path d="M 215 250 C 235 220, 250 170, 260 140 C 270 110, 285 60, 305 30" fill="none" stroke="#dc2626" stroke-width="2.6"/>
          <circle cx="260" cy="140" r="3.5" fill="#334155"/>
          <text x="252" y="156" font-family="sans-serif" font-size="11" fill="#334155">-π</text>

          <!-- Nhánh 2 (Trung tâm): (-pi/2; pi/2) đi qua O (380, 140) -->
          <path d="M 335 250 C 355 220, 370 170, 380 140 C 390 110, 405 60, 425 30" fill="none" stroke="#dc2626" stroke-width="2.6"/>
          <circle cx="380" cy="140" r="4.5" fill="#f59e0b"/>

          <!-- Nhánh 3: (pi/2; 3pi/2) đi qua pi (500, 140) -->
          <path d="M 455 250 C 475 220, 490 170, 500 140 C 510 110, 525 60, 545 30" fill="none" stroke="#dc2626" stroke-width="2.6"/>
          <circle cx="500" cy="140" r="3.5" fill="#334155"/>
          <text x="496" y="156" font-family="sans-serif" font-size="11" fill="#334155">π</text>

          <!-- Khoảng cách chu kì T = pi giữa 2 tiệm cận hoặc 2 tâm đối xứng -->
          <line x1="380" y1="210" x2="500" y2="210" stroke="#2563eb" stroke-width="1.8"/>
          <line x1="380" y1="202" x2="380" y2="218" stroke="#2563eb" stroke-width="1.8"/>
          <line x1="500" y1="202" x2="500" y2="218" stroke="#2563eb" stroke-width="1.8"/>
          <text x="428" y="202" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb">T = π</text>
        </svg>
      </div>`,
      audioUrl: "assets/audio/b11_3_sec5.mp3",
      audioScript: "Mục 5. Đồ thị và tính chất của hàm số y bằng tan x. Hàm số y bằng tan x có tập xác định là R trừ các điểm pi chia 2 cộng k pi, tập giá trị là R. Vì là hàm số lẻ nên đồ thị nhận gốc tọa độ O làm tâm đối xứng; và tuần hoàn với chu kì là pi. Do đó ta chỉ cần khảo sát trên khoảng từ trừ pi chia 2 đến pi chia 2 rồi tịnh tiến theo chu kì pi. Trên mỗi khoảng xác định, hàm số luôn luôn đồng biến. Các đường thẳng x bằng pi chia 2 cộng k pi là các đường tiệm cận đứng của đồ thị, nghĩa là khi x tiến dần đến pi chia 2 từ bên trái, tan x tiến ra dương vô cực; còn khi tiến đến trừ pi chia 2 từ bên phải, tan x tiến ra âm vô cực.",
      checkpoints: [
        {
          id: "poi-11-3-sec5-1",
          time: 20,
          title: "Tương tác Mục 5 Câu 1: Tính đơn điệu của hàm số Tang",
          question: "Khẳng định nào sau đây là <b>đúng</b> về tính đơn điệu của hàm số $y = \\tan x$?",
          options: [
            "Hàm số đồng biến trên toàn bộ $\\mathbb{R}$",
            "Hàm số đồng biến trên mỗi khoảng $\\left(-\\dfrac{\\pi}{2} + k\\pi; \\dfrac{\\pi}{2} + k\\pi\\right), k \\in \\mathbb{Z}$",
            "Hàm số nghịch biến trên mỗi khoảng $\\left(-\\dfrac{\\pi}{2} + k\\pi; \\dfrac{\\pi}{2} + k\\pi\\right), k \\in \\mathbb{Z}$",
            "Hàm số luôn nghịch biến trên $\\mathbb{R}$"
          ],
          correctIndex: 1,
          correctAnswer: "B",
          explanation: "Hàm số $y = \\tan x$ luôn đồng biến trên <b>từng khoảng xác định</b> $\\left(-\\dfrac{\\pi}{2} + k\\pi; \\dfrac{\\pi}{2} + k\\pi\\right)$. Chú ý không được kết luận đồng biến trên $\\mathbb{R}$ vì hàm số bị gián đoạn tại các điểm tiệm cận."
        },
        {
          id: "poi-11-3-sec5-2",
          time: 40,
          title: "Tương tác Mục 5 Câu 2: Đường tiệm cận đứng",
          question: "Đường thẳng nào sau đây là một <b>tiệm cận đứng</b> của đồ thị hàm số $y = \\tan x$?",
          options: [
            "$x = \\pi$",
            "$x = 0$",
            "$x = \\dfrac{\\pi}{2}$",
            "$y = 1$"
          ],
          correctIndex: 2,
          correctAnswer: "C",
          explanation: "Các đường tiệm cận đứng của đồ thị hàm số $y = \\tan x$ có phương trình là $x = \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$. Khi $k = 0$, ta có đường thẳng $x = \\dfrac{\\pi}{2}$."
        }
      ],
      workedExample: {
        title: "VÍ DỤ 6 (SGK TRANG 29) & LỜI GIẢI CHI TIẾT",
        problemHtml: "Sử dụng đồ thị đã vẽ ở Hình 1.16, hãy xác định các giá trị của $x$ trên đoạn $\\left[-\\pi; \\dfrac{3\\pi}{2}\\right]$ để hàm số $y = \\tan x$:<br>a) Nhận giá trị bằng 0;<br>b) Nhận giá trị dương.",
        solutionHtml: `<p><b>Lời giải:</b></p>
        <p>a) Từ đồ thị Hình 1.16, trên đoạn $\\left[-\\pi; \\dfrac{3\\pi}{2}\\right]$, đồ thị cắt trục hoành tại 3 điểm:</p>
        <p>$$y = 0 \\iff x = -\\pi, \\quad x = 0, \\quad x = \\pi.$$</p>
        <p>b) Hàm số nhận giá trị dương ứng với phần đồ thị nằm phía trên trục hoành. Từ đồ thị suy ra trên đoạn $\\left[-\\pi; \\dfrac{3\\pi}{2}\\right]$:</p>
        <p>$$y > 0 \\iff x \\in \\left(-\\pi; -\\dfrac{\\pi}{2}\\right) \\cup \\left(0; \\dfrac{\\pi}{2}\\right) \\cup \\left(\\pi; \\dfrac{3\\pi}{2}\\right).$$</p>`
      },
      practiceProblem: {
        title: "LUYỆN TẬP 6 (SGK TRANG 29) - HƯỚNG DẪN TỰ LUYỆN",
        problemHtml: "Sử dụng đồ thị đã vẽ ở Hình 1.16, hãy xác định các giá trị của $x$ trên đoạn $\\left[-\\pi; \\dfrac{3\\pi}{2}\\right]$ để hàm số $y = \\tan x$ nhận giá trị âm.",
        hintHtml: `<p><b>Hướng dẫn giải của Thầy Sáng:</b></p>
        <p>• Hàm số $y = \\tan x$ nhận giá trị âm khi và chỉ khi phần đồ thị nằm phía dưới trục hoành.</p>
        <p>• Quan sát đồ thị trên đoạn $\\left[-\\pi; \\dfrac{3\\pi}{2}\\right]$, các khoảng đồ thị nằm dưới trục hoành là:</p>
        <p>$$x \\in \\left(-\\dfrac{\\pi}{2}; 0\\right) \\cup \\left(\\dfrac{\\pi}{2}; \\pi\\right).$$</p>`
      }
    },

    // -----------------------------------------------------------------------
    // MỤC 6: ĐỒ THỊ VÀ TÍNH CHẤT CỦA HÀM SỐ y = cot x (HÌNH 1.17)
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b3-s6",
      num: "6",
      title: "Đồ thị và tính chất của hàm số y = cot x",
      contentHtml: `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
        <h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-table-cells"></i> HĐ7 (SGK trang 29): Khảo sát vẽ đồ thị hàm số y = cot x</h5>
        <p>Vì $y = \\cot x$ là hàm số lẻ và tuần hoàn với chu kì $\\pi$, ta chỉ cần vẽ trên khoảng $(0; \\pi)$ rồi tịnh tiến theo các bội của $\\pi$.</p>
        <div class="table-responsive">
          <table class="table table-bordered table-sm text-center align-middle bg-white mb-0">
            <thead class="table-secondary">
              <tr>
                <th>$x$</th>
                <th>$\\dfrac{\\pi}{6}$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{3}$</th>
                <th>$\\dfrac{\\pi}{2}$</th>
                <th>$\\dfrac{2\\pi}{3}$</th>
                <th>$\\dfrac{3\\pi}{4}$</th>
                <th>$\\dfrac{5\\pi}{6}$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$y = \\cot x$</td>
                <td>$\\sqrt{3}$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$0$</td>
                <td>$-\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$-1$</td>
                <td>$-\\sqrt{3}$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="alert-box alert-success mb-3">
        <h5 class="fw-bold text-success mb-2"><i class="fa-solid fa-star"></i> TỔNG KẾT TÍNH CHẤT CỦA HÀM SỐ $y = \\cot x$ (SGK TRANG 30)</h5>
        <ul>
          <li><b>Tập xác định:</b> $D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$.</li>
          <li><b>Tập giá trị:</b> $\\mathbb{R}$.</li>
          <li><b>Tính chất chẵn lẻ:</b> Là hàm số <b>lẻ</b>, đồ thị đối xứng qua <b>gốc toạ độ $O$</b>.</li>
          <li><b>Tính tuần hoàn:</b> Tuần hoàn với chu kì <b>$T = \\pi$</b>.</li>
          <li><b>Tính đơn điệu:</b> <b>Luôn nghịch biến</b> trên mỗi khoảng xác định $(k\\pi; \\pi + k\\pi), k \\in \\mathbb{Z}$.</li>
          <li><b>Tiệm cận đứng:</b> Các đường thẳng $x = k\\pi\\ (k \\in \\mathbb{Z})$ là các đường tiệm cận đứng của đồ thị.</li>
        </ul>
      </div>

      <!-- HÌNH 1.17 SGK CHUẨN XÁC -->
      <div class="text-center my-3">
        <div class="fw-bold text-secondary mb-1">HÌNH 1.17: ĐỒ THỊ HÀM SỐ $y = \\cot x$ TRÊN $\\mathbb{R}$ (SGK TRANG 29)</div>
        <svg viewBox="0 0 760 280" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);">
          <!-- Trục tọa độ -->
          <line x1="30" y1="140" x2="720" y2="140" stroke="#334155" stroke-width="1.8"/>
          <line x1="380" y1="260" x2="380" y2="20" stroke="#334155" stroke-width="1.8"/>
          <polygon points="720,140 710,136 710,144" fill="#334155"/>
          <polygon points="380,20 376,30 384,30" fill="#334155"/>
          <text x="715" y="160" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155">x</text>
          <text x="360" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155">y</text>
          <text x="368" y="156" font-family="sans-serif" font-size="12" fill="#64748b">O</text>

          <!-- Các đường tiệm cận đứng x = k*pi -->
          <!-- O tại 380, pi = 120px -->
          <!-- x = -2pi -> 140 -->
          <!-- x = -pi -> 260 -->
          <!-- x = 0 (trùng trục Oy 380) -->
          <!-- x = pi -> 500 -->
          <!-- x = 2pi -> 620 -->
          <line x1="140" y1="20" x2="140" y2="260" stroke="#059669" stroke-width="1.6" stroke-dasharray="5,4"/>
          <line x1="260" y1="20" x2="260" y2="260" stroke="#059669" stroke-width="1.6" stroke-dasharray="5,4"/>
          <line x1="380" y1="20" x2="380" y2="260" stroke="#059669" stroke-width="1.6" stroke-dasharray="5,4"/>
          <line x1="500" y1="20" x2="500" y2="260" stroke="#059669" stroke-width="1.6" stroke-dasharray="5,4"/>
          <line x1="620" y1="20" x2="620" y2="260" stroke="#059669" stroke-width="1.6" stroke-dasharray="5,4"/>

          <text x="126" y="272" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">-2π</text>
          <text x="252" y="272" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">-π</text>
          <text x="496" y="272" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">π</text>
          <text x="614" y="272" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">2π</text>

          <!-- Các nhánh đồ thị nghịch biến dốc xuống từ trái qua phải -->
          <!-- Nhánh (-pi; 0): đi qua -pi/2 (320, 140) -->
          <path d="M 275 30 C 295 60, 310 110, 320 140 C 330 170, 345 220, 365 250" fill="none" stroke="#7c3aed" stroke-width="2.6"/>
          <circle cx="320" cy="140" r="3.5" fill="#334155"/>
          <text x="306" y="156" font-family="sans-serif" font-size="10" fill="#334155">-π/2</text>

          <!-- Nhánh (0; pi): đi qua pi/2 (440, 140) -->
          <path d="M 395 30 C 415 60, 430 110, 440 140 C 450 170, 465 220, 485 250" fill="none" stroke="#7c3aed" stroke-width="2.6"/>
          <circle cx="440" cy="140" r="3.5" fill="#334155"/>
          <text x="430" y="156" font-family="sans-serif" font-size="10" fill="#334155">π/2</text>

          <!-- Nhánh (pi; 2pi): đi qua 3pi/2 (560, 140) -->
          <path d="M 515 30 C 535 60, 550 110, 560 140 C 570 170, 585 220, 605 250" fill="none" stroke="#7c3aed" stroke-width="2.6"/>
          <circle cx="560" cy="140" r="3.5" fill="#334155"/>
          <text x="548" y="156" font-family="sans-serif" font-size="10" fill="#334155">3π/2</text>

          <!-- Khoảng cách chu kì T = pi -->
          <line x1="320" y1="210" x2="440" y2="210" stroke="#2563eb" stroke-width="1.8"/>
          <line x1="320" y1="202" x2="320" y2="218" stroke="#2563eb" stroke-width="1.8"/>
          <line x1="440" y1="202" x2="440" y2="218" stroke="#2563eb" stroke-width="1.8"/>
          <text x="368" y="202" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb">T = π</text>
        </svg>
      </div>`,
      audioUrl: "assets/audio/b11_3_sec6.mp3",
      audioScript: "Mục 6. Đồ thị và tính chất của hàm số y bằng cotang x. Hàm số y bằng cotang x có tập xác định là R trừ các điểm k pi, tập giá trị là R. Vì là hàm số lẻ nên đồ thị nhận gốc tọa độ O làm tâm đối xứng; và tuần hoàn với chu kì là pi. Trên mỗi khoảng xác định từ k pi đến pi cộng k pi, hàm số luôn luôn nghịch biến, đồ thị đi dốc xuống từ trái sang phải. Các đường thẳng x bằng k pi chính là các đường tiệm cận đứng của đồ thị. Khi x tiến dần về 0 từ bên phải, cotang x tiến ra dương vô cực; còn khi x tiến dần về pi từ bên trái, cotang x tiến ra âm vô cực.",
      checkpoints: [
        {
          id: "poi-11-3-sec6-1",
          time: 20,
          title: "Tương tác Mục 6 Câu 1: Tập giá trị của hàm số Côtang",
          question: "Hàm số $y = \\cot x$ có tập giá trị là:",
          options: [
            "$[-1; 1]$",
            "$\\mathbb{R}$",
            "$(-\\infty; 0)$",
            "$(0; +\\infty)$"
          ],
          correctIndex: 1,
          correctAnswer: "B",
          explanation: "Tương tự như hàm số tang, hàm số côtang nhận mọi giá trị thực từ $-\\infty$ đến $+\\infty$, do đó tập giá trị là $\\mathbb{R}$."
        },
        {
          id: "poi-11-3-sec6-2",
          time: 40,
          title: "Tương tác Mục 6 Câu 2: Tính đơn điệu của hàm số Côtang",
          question: "Trên mỗi khoảng $(k\\pi; \\pi + k\\pi), k \\in \\mathbb{Z}$, hàm số $y = \\cot x$ có chiều biến thiên như thế nào?",
          options: [
            "Luôn đồng biến",
            "Luôn nghịch biến",
            "Không đổi",
            "Vừa đồng biến vừa nghịch biến"
          ],
          correctIndex: 1,
          correctAnswer: "B",
          explanation: "Trên mỗi khoảng xác định $(k\\pi; \\pi + k\\pi)$, đồ thị hàm số $y = \\cot x$ đi dốc xuống từ trái sang phải, do đó hàm số luôn luôn nghịch biến."
        }
      ],
      workedExample: {
        title: "VÍ DỤ 7 (SGK TRANG 30) & LỜI GIẢI CHI TIẾT",
        problemHtml: "Sử dụng đồ thị đã vẽ ở Hình 1.17, hãy xác định các giá trị của $x$ trên đoạn $\\left[-\\dfrac{\\pi}{2}; 2\\pi\\right]$ để hàm số $y = \\cot x$:<br>a) Nhận giá trị bằng 0;<br>b) Nhận giá trị âm.",
        solutionHtml: `<p><b>Lời giải:</b></p>
        <p>a) Từ đồ thị Hình 1.17, ta thấy trên đoạn $\\left[-\\dfrac{\\pi}{2}; 2\\pi\\right]$, đồ thị cắt trục hoành tại 3 điểm:</p>
        <p>$$y = 0 \\iff x = -\\dfrac{\\pi}{2}, \\quad x = \\dfrac{\\pi}{2}, \\quad x = \\dfrac{3\\pi}{2}.$$</p>
        <p>b) Hàm số nhận giá trị âm ứng với phần đồ thị nằm phía dưới trục hoành. Từ đồ thị suy ra trên đoạn $\\left[-\\dfrac{\\pi}{2}; 2\\pi\\right]$:</p>
        <p>$$y < 0 \\iff x \\in \\left(-\\dfrac{\\pi}{2}; 0\\right) \\cup \\left(\\dfrac{\\pi}{2}; \\pi\\right) \\cup \\left(\\dfrac{3\\pi}{2}; 2\\pi\\right).$$</p>`
      },
      practiceProblem: {
        title: "LUYỆN TẬP 7 (SGK TRANG 30) - HƯỚNG DẪN TỰ LUYỆN",
        problemHtml: "Sử dụng đồ thị đã vẽ ở Hình 1.17, hãy xác định các giá trị của $x$ trên đoạn $\\left[-\\dfrac{\\pi}{2}; 2\\pi\\right]$ để hàm số $y = \\cot x$ nhận giá trị dương.",
        hintHtml: `<p><b>Hướng dẫn giải của Thầy Sáng:</b></p>
        <p>• Hàm số $y = \\cot x$ nhận giá trị dương ứng với các phần đồ thị nằm phía trên trục hoành.</p>
        <p>• Quan sát đồ thị trên đoạn $\\left[-\\dfrac{\\pi}{2}; 2\\pi\\right]$, ta thu được các khoảng:</p>
        <p>$$x \\in \\left(0; \\dfrac{\\pi}{2}\\right) \\cup \\left(\\pi; \\dfrac{3\\pi}{2}\\right).$$</p>`
      }
    }
  ],

  // =========================================================================
  // CHỐT KIẾN THỨC THEN CHỐT & BÀI TOÁN THỰC TẾ (WRAP-UP)
  // =========================================================================
  realworldWrapup: {
    title: "Chốt kiến thức then chốt & Bài toán Sóng biển thực tế",
    summaryHtml: `<p>Chúc mừng các em đã chinh phục trọn vẹn <b>Bài 3: Hàm số lượng giác</b>! Hãy cùng Thầy tổng kết bảng so sánh kim cương của 4 hàm số lượng giác:</p>

    <div class="table-responsive my-3">
      <table class="table table-bordered table-hover text-center align-middle bg-white shadow-sm">
        <thead class="table-primary text-nowrap">
          <tr>
            <th>Đặc trưng</th>
            <th>$y = \\sin x$</th>
            <th>$y = \\cos x$</th>
            <th>$y = \\tan x$</th>
            <th>$y = \\cot x$</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="fw-bold bg-light">Tập xác định ($D$)</td>
            <td>$\\mathbb{R}$</td>
            <td>$\\mathbb{R}$</td>
            <td>$\\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi\\right\\}$</td>
            <td>$\\mathbb{R} \\setminus \\{k\\pi\\}$</td>
          </tr>
          <tr>
            <td class="fw-bold bg-light">Tập giá trị ($TGT$)</td>
            <td>$[-1; 1]$</td>
            <td>$[-1; 1]$</td>
            <td>$\\mathbb{R}$</td>
            <td>$\\mathbb{R}$</td>
          </tr>
          <tr>
            <td class="fw-bold bg-light">Tính chẵn lẻ</td>
            <td><span class="badge bg-danger">Hàm lẻ</span></td>
            <td><span class="badge bg-success">Hàm chẵn duy nhất</span></td>
            <td><span class="badge bg-danger">Hàm lẻ</span></td>
            <td><span class="badge bg-danger">Hàm lẻ</span></td>
          </tr>
          <tr>
            <td class="fw-bold bg-light">Tính đối xứng</td>
            <td>Tâm $O(0;0)$</td>
            <td>Trục tung $Oy$</td>
            <td>Tâm $O(0;0)$</td>
            <td>Tâm $O(0;0)$</td>
          </tr>
          <tr>
            <td class="fw-bold bg-light">Chu kì ($T$)</td>
            <td><b>$2\\pi$</b></td>
            <td><b>$2\\pi$</b></td>
            <td><b>$\\pi$</b></td>
            <td><b>$\\pi$</b></td>
          </tr>
          <tr>
            <td class="fw-bold bg-light">Tính đơn điệu</td>
            <td>ĐB trên $\\left(-\\dfrac{\\pi}{2}+k2\\pi; \\dfrac{\\pi}{2}+k2\\pi\\right)$<br>NB trên $\\left(\\dfrac{\\pi}{2}+k2\\pi; \\dfrac{3\\pi}{2}+k2\\pi\\right)$</td>
            <td>ĐB trên $(-\\pi+k2\\pi; k2\\pi)$<br>NB trên $(k2\\pi; \\pi+k2\\pi)$</td>
            <td><span class="text-success fw-bold">Luôn đồng biến</span> trên mỗi khoảng xác định</td>
            <td><span class="text-danger fw-bold">Luôn nghịch biến</span> trên mỗi khoảng xác định</td>
          </tr>
          <tr>
            <td class="fw-bold bg-light">Đồ thị</td>
            <td>Đường hình sin qua $O$</td>
            <td>Đường hình sin qua $(0; 1)$</td>
            <td>Các nhánh tăng dốc lên, tiệm cận $x = \\dfrac{\\pi}{2}+k\\pi$</td>
            <td>Các nhánh giảm dốc xuống, tiệm cận $x = k\\pi$</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="alert-box alert-success mt-4">
      <div class="fw-bold text-success mb-2">🌊 VẬN DỤNG CAO THỰC TẾ: BÀI 1.18 (SGK TRANG 30) — MÔ HÌNH HÓA CHIỀU CAO SÓNG BIỂN</div>
      <p><b>Đề bài:</b> Giả sử khi một cơn sóng biển đi qua một cái cọc ở ngoài khơi, chiều cao của nước được mô hình hoá bởi hàm số:<br>
      $$h(t) = 90\\cos\\left(\\dfrac{\\pi}{10}t\\right),$$
      trong đó $h(t)$ là độ cao tính bằng xentimét trên mực nước biển trung bình tại thời điểm $t$ giây ($t \\ge 0$).<br>
      a) Tìm chu kì của sóng.<br>
      b) Tìm chiều cao của sóng, tức là khoảng cách theo phương thẳng đứng giữa đáy sóng và đỉnh sóng.</p>
      <hr>
      <p><b>Lời giải chi tiết của Thầy Sáng:</b></p>
      <p><b>a) Chu kì của sóng:</b></p>
      <p>Hàm số $h(t) = 90\\cos\\left(\\dfrac{\\pi}{10}t\\right)$ có dạng $A\\cos(\\omega t)$ với $\\omega = \\dfrac{\\pi}{10}$. Chu kì của sóng là:</p>
      <p>$$T = \\dfrac{2\\pi}{\\omega} = \\dfrac{2\\pi}{\\pi / 10} = 20\\text{ (giây)}.$$</p>
      <p>Điều này có nghĩa là cứ sau mỗi 20 giây thì ngọn sóng biển lại lặp lại một chu kì nhấp nhô hoàn chỉnh.</p>
      <p><b>b) Chiều cao của sóng:</b></p>
      <p>• Vì $-1 \\le \\cos\\left(\\dfrac{\\pi}{10}t\\right) \\le 1$ nên:</p>
      <p>$$-90 \\le h(t) \\le 90.$$</p>
      <p>• Đỉnh sóng (vị trí cao nhất trên mực nước biển trung bình) là: $h_{\\max} = 90\\text{ cm}$.</p>
      <p>• Đáy sóng (vị trí thấp nhất dưới mực nước biển trung bình) là: $h_{\\min} = -90\\text{ cm}$.</p>
      <p>• Chiều cao của sóng (khoảng cách theo phương thẳng đứng giữa đáy sóng và đỉnh sóng) là:</p>
      <p>$$H = h_{\\max} - h_{\\min} = 90 - (-90) = 180\\text{ (cm)} = 1{,}8\\text{ (m)}.$$</p>
      <p class="text-success fw-bold">Đáp số: a) Chu kì T = 20 giây; b) Chiều cao sóng H = 180 cm.</p>
    </div>`,
    audioUrl: "assets/audio/b11_3_wrapup.mp3",
    audioScript: "Chốt kiến thức then chốt và Tổng kết bài học. Thầy chúc mừng các em đã xuất sắc hoàn thành trọn vẹn Bài 3: Hàm số lượng giác! Hãy cùng Thầy ghi nhớ bảng tổng kết vàng của 4 hàm số lượng giác: Về tập xác định: sin và cos xác định trên R; tan loại bỏ pi chia 2 cộng k pi; cotang loại bỏ k pi. Về tính chẵn lẻ: chỉ duy nhất cos x là hàm chẵn, còn sin x, tan x, cotang x đều là hàm lẻ. Về chu kì: sin và cos có chu kì 2 pi; tan và cotang có chu kì pi. Về biến thiên: tan luôn đồng biến, cotang luôn nghịch biến trên từng khoảng xác định. Bây giờ, các em hãy tự tin bước vào Phần 4 để chinh phục các câu hỏi trắc nghiệm theo chuẩn cấu trúc đề thi mới nhất nhé!"
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM CỦNG CỐ CHUẨN 3 DẠNG THỨC 2026 (20% TIẾN TRÌNH)
  // =========================================================================
  examFormatPractice: {
    title: "Bài tập trắc nghiệm củng cố (Chuẩn cấu trúc 2026 Bộ GD&ĐT)",
    durationMinutes: 20,
    totalPoints: 10,

    // DẠNG 1: TRẮC NGHIỆM 4 LỰA CHỌN (4 CÂU - ĐÁP ÁN HOÁN VỊ B, D, A, C)
    part1MultipleChoice: [
      {
        id: "mc-11-3-1",
        question: "Tập xác định của hàm số $y = \\dfrac{1 - \\sin x}{\\cos x}$ là:",
        prompt: "Tập xác định của hàm số $y = \\dfrac{1 - \\sin x}{\\cos x}$ là:",
        options: [
          "$D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$",
          "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$",
          "$D = \\mathbb{R}$",
          "$D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k2\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$"
        ],
        correctIndex: 1,
        correctAnswer: "B",
        hint: "Phân thức có nghĩa khi mẫu thức khác 0: cos x khác 0.",
        explain: "Hàm số xác định khi và chỉ khi $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$. Do đó tập xác định là $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$. Đáp án đúng là B."
      },
      {
        id: "mc-11-3-2",
        question: "Trong các hàm số sau đây, hàm số nào là <b>hàm số chẵn</b>?",
        prompt: "Trong các hàm số sau đây, hàm số nào là hàm số chẵn?",
        options: [
          "$y = \\sin 2x + \\tan x$",
          "$y = x\\cos x$",
          "$y = \\sin x \\cos 2x$",
          "$y = \\cos 2x + \\sin^2 x$"
        ],
        correctIndex: 3,
        correctAnswer: "D",
        hint: "Kiểm tra tính chẵn: f(-x) = f(x). Nhớ rằng cos(-u) = cos u và (-sin u)^2 = sin^2 u.",
        explain: "Xét hàm số $f(x) = \\cos 2x + \\sin^2 x$. Ta có TXĐ $D = \\mathbb{R}$. Với mọi $x \\in \\mathbb{R}$: $f(-x) = \\cos(-2x) + [\\sin(-x)]^2 = \\cos 2x + [-\\sin x]^2 = \\cos 2x + \\sin^2 x = f(x)$. Do đó $f(x)$ là hàm số chẵn. Các hàm số ở A, B, C đều là hàm số lẻ. Đáp án đúng là D."
      },
      {
        id: "mc-11-3-3",
        question: "Chu kì tuần hoàn của hàm số $y = 3\\sin 2x$ là:",
        prompt: "Chu kì tuần hoàn của hàm số $y = 3\\sin 2x$ là:",
        options: [
          "$T = \\pi$",
          "$T = 2\\pi$",
          "$T = 4\\pi$",
          "$T = \\dfrac{\\pi}{2}$"
        ],
        correctIndex: 0,
        correctAnswer: "A",
        hint: "Áp dụng công thức chu kì của y = A sin(omega x): T = 2pi / |omega|.",
        explain: "Hàm số $y = 3\\sin 2x$ có tần số góc $\\omega = 2$. Chu kì tuần hoàn của hàm số là $T = \\dfrac{2\\pi}{|\\omega|} = \\dfrac{2\\pi}{2} = \\pi$. Đáp án đúng là A."
      },
      {
        id: "mc-11-3-4",
        question: "Cho hàm số $y = \\cos x$. Khẳng định nào sau đây là <b>SAI</b>?",
        prompt: "Cho hàm số $y = \\cos x$. Khẳng định nào sau đây là SAI?",
        options: [
          "Hàm số có tập xác định là $\\mathbb{R}$ và tập giá trị là đoạn $[-1; 1]$",
          "Đồ thị hàm số nhận trục tung $Oy$ làm trục đối xứng",
          "Hàm số luôn đồng biến trên khoảng $(0; \\pi)$",
          "Hàm số là hàm tuần hoàn với chu kì nhỏ nhất bằng $2\\pi$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        hint: "Quan sát đồ thị hoặc chiều biến thiên: khi x tăng từ 0 đến pi thì cos x giảm từ 1 xuống -1.",
        explain: "Trên khoảng $(0; \\pi)$, hàm số $y = \\cos x$ luôn nghịch biến vì khi $x$ tăng từ $0$ đến $\\pi$ thì $\\cos x$ giảm dần từ $1$ xuống $-1$. Khẳng định C 'đồng biến' là sai. Đáp án đúng là C."
      }
    ],

    // DẠNG 2: TRẮC NGHIỆM ĐÚNG / SAI (2 CÂU LỚN, MỖI CÂU 4 Ý a-b-c-d)
    part2TrueFalse: [
      {
        id: "tf-11-3-1",
        prompt: "Cho hai hàm số lượng giác cơ bản $f(x) = \\sin x$ và $g(x) = \\cos x$ xác định trên $\\mathbb{R}$. Xét tính Đúng / Sai của các khẳng định sau:",
        items: [
          {
            id: "tf-11-3-1-a",
            text: "Hàm số $f(x) = \\sin x$ là hàm số chẵn trên $\\mathbb{R}$.",
            correct: false,
            explain: "Hàm số $f(x) = \\sin x$ có $\\sin(-x) = -\\sin x = -f(x)$ với mọi $x \\in \\mathbb{R}$, nên $f(x)$ là hàm số lẻ, không phải hàm số chẵn. Mệnh đề này SAI."
          },
          {
            id: "tf-11-3-1-b",
            text: "Đồ thị hàm số $g(x) = \\cos x$ nhận trục tung $Oy$ làm trục đối xứng.",
            correct: true,
            explain: "Vì $g(-x) = \\cos(-x) = \\cos x = g(x)$ nên $g(x) = \\cos x$ là hàm số chẵn, do đó đồ thị nhận trục tung $Oy$ làm trục đối xứng. Mệnh đề này ĐÚNG."
          },
          {
            id: "tf-11-3-1-c",
            text: "Cả hai hàm số $f(x)$ và $g(x)$ đều là hàm số tuần hoàn với chu kì nhỏ nhất bằng $2\\pi$.",
            correct: true,
            explain: "Đúng theo định nghĩa và tính chất SGK trang 26-27: Cả hai hàm số $\\sin x$ và $\\cos x$ đều tuần hoàn với chu kì cơ sở $T = 2\\pi$. Mệnh đề này ĐÚNG."
          },
          {
            id: "tf-11-3-1-d",
            text: "Trên khoảng $\\left(0; \\dfrac{\\pi}{2}\\right)$, cả hai hàm số $f(x)$ và $g(x)$ đều đồng biến.",
            correct: false,
            explain: "Trên khoảng $\\left(0; \\dfrac{\\pi}{2}\\right)$, hàm số $\\sin x$ đồng biến (tăng từ 0 lên 1), nhưng hàm số $\\cos x$ nghịch biến (giảm từ 1 xuống 0). Do đó khẳng định cả hai hàm đều đồng biến là SAI."
          }
        ]
      },
      {
        id: "tf-11-3-2",
        prompt: "Một người ở trạng thái nghỉ ngơi có vận tốc luồng khí hô hấp được mô hình hoá bởi công thức $v(t) = 0{,}85\\sin\\left(\\dfrac{\\pi t}{3}\\right)$ (lít/giây) với $t \\ge 0$ (thời gian tính bằng giây). Quy ước $v > 0$ là hít vào, $v < 0$ là thở ra. Xét tính Đúng / Sai của các khẳng định sau:",
        items: [
          {
            id: "tf-11-3-2-a",
            text: "Thời gian của một chu kì hô hấp đầy đủ (gồm 1 lần hít vào và 1 lần thở ra) là 6 giây.",
            correct: true,
            explain: "Chu kì của hàm số là $T = \\dfrac{2\\pi}{\\pi/3} = 6\\text{ giây}$. Mệnh đề này ĐÚNG."
          },
          {
            id: "tf-11-3-2-b",
            text: "Vận tốc tối đa của luồng khí hít vào đạt $0{,}85\\text{ lít/giây}$.",
            correct: true,
            explain: "Vì giá trị lớn nhất của hàm sin bằng 1 nên $v_{\\max} = 0{,}85 \\times 1 = 0{,}85\\text{ L/s}$. Mệnh đề này ĐÚNG."
          },
          {
            id: "tf-11-3-2-c",
            text: "Trong thời gian 1 phút (60 giây), người này thực hiện được 15 chu kì hô hấp đầy đủ.",
            correct: false,
            explain: "Trong 1 phút = 60 giây, số chu kì hô hấp đầy đủ là $60 / 6 = 10$ chu kì (không phải 15). Mệnh đề này SAI."
          },
          {
            id: "tf-11-3-2-d",
            text: "Tại thời điểm $t = 1{,}5\\text{ giây}$, luồng khí đang được hít vào với vận tốc lớn nhất.",
            correct: true,
            explain: "Tại $t = 1{,}5\\text{ s}$, ta có $v(1{,}5) = 0{,}85\\sin\\left(\\dfrac{\\pi \\cdot 1{,}5}{3}\\right) = 0{,}85\\sin\\left(\\dfrac{\\pi}{2}\\right) = 0{,}85 > 0$, đây là vận tốc hít vào cực đại. Mệnh đề này ĐÚNG."
          }
        ]
      }
    ],

    // DẠNG 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (2 CÂU)
    part3ShortAnswer: [
      {
        id: "sa-11-3-1",
        question: "Giá trị lớn nhất của hàm số $y = 2\\sin\\left(x - \\dfrac{\\pi}{4}\\right) - 1$ bằng bao nhiêu?",
        prompt: "Giá trị lớn nhất của hàm số bằng (điền một số nguyên):",
        correctAnswer: "1",
        acceptableAnswers: ["1", "1.0", "1,0"],
        hint: "Với mọi góc u, ta luôn có sin u <= 1.",
        explain: "Với mọi $x \\in \\mathbb{R}$, ta luôn có $\\sin\\left(x - \\dfrac{\\pi}{4}\\right) \\le 1$. Do đó: $y = 2\\sin\\left(x - \\dfrac{\\pi}{4}\\right) - 1 \\le 2(1) - 1 = 1$. Dấu đẳng thức xảy ra khi $\\sin\\left(x - \\dfrac{\\pi}{4}\\right) = 1 \\Leftrightarrow x - \\dfrac{\\pi}{4} = \\dfrac{\\pi}{2} + k2\\pi \\Leftrightarrow x = \\dfrac{3\\pi}{4} + k2\\pi\\ (k \\in \\mathbb{Z})$. Vậy giá trị lớn nhất của hàm số là 1."
      },
      {
        id: "sa-11-3-2",
        question: "Một cơn sóng biển đi qua một cái cọc ngoài khơi được mô hình hoá bởi hàm số $h(t) = 90\\cos\\left(\\dfrac{\\pi}{10}t\\right)$ (cm), trong đó $h(t)$ là độ cao tính bằng cm trên mực nước biển trung bình tại thời điểm $t$ giây. Chiều cao của sóng (khoảng cách theo phương thẳng đứng giữa đáy sóng và đỉnh sóng) bằng bao nhiêu xentimét?",
        prompt: "Chiều cao sóng bằng bao nhiêu cm (điền một số nguyên):",
        correctAnswer: "180",
        acceptableAnswers: ["180", "180 cm", "180cm"],
        hint: "Chiều cao sóng bằng hiệu giữa độ cao đỉnh sóng và độ cao đáy sóng: h_max - h_min.",
        explain: "Vì $-1 \\le \\cos\\left(\\dfrac{\\pi}{10}t\\right) \\le 1$ nên độ cao đỉnh sóng là $h_{\\max} = 90\\text{ cm}$ và độ cao đáy sóng là $h_{\\min} = -90\\text{ cm}$. Chiều cao của sóng theo phương thẳng đứng là $H = h_{\\max} - h_{\\min} = 90 - (-90) = 180\\text{ cm}$."
      }
    ]
  }
};

// Global Aliases & Auto-Inject for Compatibility
window.CURRENT_LESSON_DATA = window.LESSON_11_C1_B3_DATA;
window.LESSON_DATA = window.LESSON_11_C1_B3_DATA;
window.B11_3_DATA = window.LESSON_11_C1_B3_DATA;

if (typeof window !== "undefined" && window.LESSONS_DATABASE) {
  for (var gradeKey in window.LESSONS_DATABASE) {
    if (window.LESSONS_DATABASE[gradeKey] && Array.isArray(window.LESSONS_DATABASE[gradeKey])) {
      var found = window.LESSONS_DATABASE[gradeKey].find(function(l) { return l.id === "11-c1-b3"; });
      if (found) {
        Object.assign(found, window.LESSON_11_C1_B3_DATA);
        found.isReady = true;
      }
    }
  }
}
