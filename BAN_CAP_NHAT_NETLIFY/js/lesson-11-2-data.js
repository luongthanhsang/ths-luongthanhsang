/**
 * BÀI HỌC SỐ: BÀI 2. CÔNG THỨC LƯỢNG GIÁC (TOÁN 11 - TẬP 1 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Tác giả biên soạn: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * BỘ QUY CHUẨN THẦY SÁNG 5 SAO:
 * - PHẦN I: Lời chào Thầy Sáng + Voice AI NamMinhNeural chuẩn mực (5% tiến trình)
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 17 (5% tiến trình)
 * - PHẦN III: Tiến trình bài học đa phương tiện tương tác (70% tiến trình):
 *             + Tình huống mở đầu (Hook): Trễ kỹ thuật số và Sóng âm kết hợp (SGK trang 17)
 *             + Mục 1: Công thức cộng (1a. Sin và Cosin; 1b. Tang & Sóng âm mở đầu)
 *             + Mục 2: Công thức nhân đôi và hạ bậc (2a. Công thức nhân đôi; 2b. Công thức hạ bậc)
 *             + Mục 3: Công thức biến đổi tích thành tổng (3a. Ba công thức cơ bản; 3b. Kĩ thuật rút gọn)
 *             + Mục 4: Công thức biến đổi tổng thành tích (4a. Bốn công thức cơ bản; 4b. Ứng dụng âm thanh DTMF)
 *             + Chốt kiến thức: Bộ 4 câu thần chú lượng giác & Bài toán dao động tổng hợp
 * - PHẦN IV: Bài tập trắc nghiệm củng cố chuẩn 3 dạng thức thi mới 2026 Bộ GD&ĐT (20% tiến trình)
 * =========================================================================================
 */

window.LESSON_11_C1_B2_DATA = {
  id: "11-c1-b2",
  grade: "11",
  subject: "Toán 11 - Kết nối tri thức",
  chapter: "Chương I",
  chapterTitle: "Hàm số lượng giác và phương trình lượng giác",
  number: "Bài 2",
  title: "Công thức lượng giác",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Hôm nay, thầy trò chúng ta sẽ tiếp tục hành trình chinh phục Chương 1 với một bài học mang tính nền tảng và cốt lõi bậc nhất: Bài 2. Công thức lượng giác. Nếu như ở Bài 1, các em đã làm quen với góc lượng giác và đường tròn lượng giác, thì ở bài học này, các em sẽ được trang bị 'bộ vũ khí' biến đổi lượng giác toàn năng gồm 4 hệ thống công thức: Công thức cộng, Công thức nhân đôi - hạ bậc, Công thức biến đổi tích thành tổng và Tổng thành tích. Đây chính là chiếc chìa khóa vàng giúp các em giải quyết các bài toán rút gọn phức tạp, chứng minh đẳng thức và đặc biệt là giải mã các hiện tượng vật lý kỳ thú như hiện tượng trễ âm thanh kỹ thuật số hay tín hiệu bàn phím điện thoại cảm ứng DTMF. Các em hãy chuẩn bị sách vở, tập trung lắng nghe và tương tác nhiệt tình cùng Thầy nhé!",
    audioScript: "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Hôm nay, thầy trò chúng ta sẽ tiếp tục hành trình chinh phục Chương một với một bài học mang tính nền tảng và cốt lõi bậc nhất: Bài hai. Công thức lượng giác. Nếu như ở Bài một, các em đã làm quen với góc lượng giác và đường tròn lượng giác, thì ở bài học này, các em sẽ được trang bị bộ vũ khí biến đổi lượng giác toàn năng gồm bốn hệ thống công thức: Công thức cộng, Công thức nhân đôi và hạ bậc, Công thức biến đổi tích thành tổng, và Tổng thành tích. Đây chính là chiếc chìa khóa vàng giúp các em giải quyết các bài toán rút gọn phức tạp, chứng minh đẳng thức, và đặc biệt là giải mã các hiện tượng vật lý kỳ thú như hiện tượng trễ âm thanh kỹ thuật số hay tín hiệu bàn phím điện thoại cảm ứng D-T-M-F. Các em hãy chuẩn bị sách vở, tập trung lắng nghe và tương tác nhiệt tình cùng Thầy nhé!",
    audioUrl: "assets/audio/b11_2_welcome.mp3"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU & YÊU CẦU CẦN ĐẠT
  // =========================================================================
  learningGoals: [
    "Nắm vững và vận dụng thành thạo 6 công thức cộng đối với $\\cos, \\sin, \\tan$: $\\cos(a \\pm b), \\sin(a \\pm b), \\tan(a \\pm b)$.",
    "Nắm vững bộ công thức nhân đôi $\\sin 2a, \\cos 2a, \\tan 2a$ và mối liên hệ hữu cơ với công thức hạ bậc.",
    "Hiểu bản chất và vận dụng linh hoạt 3 công thức biến đổi tích thành tổng để tính giá trị biểu thức lượng giác không dùng máy tính.",
    "Nắm vững 4 công thức biến đổi tổng thành tích và phương pháp nhóm các cặp góc đối xứng để triệt tiêu.",
    "Vận dụng giải quyết các bài toán thực tiễn gắn liền với đời sống: hiện tượng giao thoa sóng âm trễ kỹ thuật số và mã hóa âm thanh đa tần số DTMF trên bàn phím cảm ứng."
  ],
  goalsAudioUrl: "assets/audio/b11_2_goals.mp3",
  goalsAudioScript: "Phần 2. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần đạt được các yêu cầu trọng tâm sau: Thứ nhất: Nắm vững và vận dụng thành thạo sáu công thức cộng đối với cos, sin và tang. Thứ hai: Nắm vững bộ công thức nhân đôi và mối liên hệ hữu cơ với công thức hạ bậc. Thứ ba: Hiểu bản chất và vận dụng linh hoạt ba công thức biến đổi tích thành tổng để tính giá trị biểu thức lượng giác mà không cần dùng máy tính cầm tay. Thứ tư: Nắm vững bốn công thức biến đổi tổng thành tích và phương pháp ghép cặp góc đối xứng. Thứ năm: Vận dụng giải quyết các bài toán thực tiễn như hiện tượng giao thoa sóng âm trễ kỹ thuật số và mã hóa âm thanh đa tần số D-T-M-F trên bàn phím điện thoại.",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================

  // --- TÌNH HUỐNG MỞ ĐẦU (HOOK) ---
  hook: {
    title: "Tình huống mở đầu: Trễ kỹ thuật số và Sóng âm kết hợp",
    storyHtml: `<p>Một thiết bị trễ kĩ thuật số lặp lại tín hiệu đầu vào bằng cách lặp lại tín hiệu đó trong một khoảng thời gian cố định sau khi nhận được tín hiệu (SGK trang 17). Nếu một thiết bị như vậy nhận được nốt thuần <b>$f_1(t) = 5\\sin t$</b> và phát lại được nốt thuần <b>$f_2(t) = 5\\cos t$</b> thì âm kết hợp là <b>$f(t) = f_1(t) + f_2(t)$</b>, trong đó $t$ là biến thời gian (tính bằng giây).</p>
    <div class="alert-box alert-question mt-3" style="text-align:justify;">
      <b>❓ Câu hỏi khởi động:</b> Chứng tỏ rằng âm kết hợp viết được dưới dạng <b>$f(t) = k\\sin(t + \\varphi)$</b>, tức là âm kết hợp vẫn là một sóng âm hình sin. Hãy xác định biên độ âm <b>$k$</b> và pha ban đầu <b>$\\varphi$</b> (với $-\\pi \\le \\varphi \\le \\pi$) của sóng âm này.
      <br><i>(Để đưa tổng của hai hàm số $\\sin t$ và $\\cos t$ về dạng một hàm sin duy nhất, chúng ta cần dùng đến một công cụ toán học cực kỳ đắc lực: <b>Công thức cộng lượng giác</b>. Cùng Thầy khám phá bài học ngay bây giờ!)</i>
    </div>`,
    situation: `Một thiết bị trễ kĩ thuật số nhận được nốt thuần f1(t) = 5 sin(t) và phát lại nốt thuần f2(t) = 5 cos(t). Âm kết hợp là f(t) = 5 sin(t) + 5 cos(t). Hãy xác định biên độ k và pha ban đầu phi của sóng âm f(t) = k sin(t + phi).`,
    illustrationSvg: `<div class="svg-container text-center my-3" style="background:#0f172a; border-radius:12px; padding:16px; box-shadow:0 10px 25px -5px rgba(0,0,0,0.3); overflow-x:auto;">
  <svg viewBox="0 0 800 280" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="waveGradCombined" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#ec4899"/>
        <stop offset="50%" stop-color="#f59e0b"/>
        <stop offset="100%" stop-color="#10b981"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="800" height="280" rx="10" fill="#0f172a"/>
    <line x1="50" y1="40" x2="50" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="225" y1="40" x2="225" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="400" y1="40" x2="400" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="575" y1="40" x2="575" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="750" y1="40" x2="750" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="40" y1="140" x2="760" y2="140" stroke="#64748b" stroke-width="1.5"/>
    <polygon points="765,140 755,135 755,145" fill="#64748b"/>
    <text x="765" y="155" fill="#94a3b8" font-size="12" font-family="sans-serif">t (s)</text>
    <line x1="50" y1="250" x2="50" y2="30" stroke="#64748b" stroke-width="1.5"/>
    <polygon points="50,25 45,35 55,35" fill="#64748b"/>
    <text x="35" y="30" fill="#94a3b8" font-size="12" font-family="sans-serif">y</text>
    <text x="35" y="155" fill="#94a3b8" font-size="12" font-family="sans-serif">O</text>
    <text x="220" y="155" fill="#94a3b8" font-size="11" font-family="sans-serif">π</text>
    <text x="395" y="155" fill="#94a3b8" font-size="11" font-family="sans-serif">2π</text>
    <text x="570" y="155" fill="#94a3b8" font-size="11" font-family="sans-serif">3π</text>
    <text x="745" y="155" fill="#94a3b8" font-size="11" font-family="sans-serif">4π</text>
    <!-- Sóng 1: f1(t) = 5sin(t) -->
    <path d="M 50 140 Q 93.75 80 137.5 140 T 225 140 T 312.5 140 T 400 140 T 487.5 140 T 575 140 T 662.5 140 T 750 140" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3" opacity="0.75"/>
    <!-- Sóng 2: f2(t) = 5cos(t) -->
    <path d="M 50 80 Q 93.75 140 137.5 200 T 225 140 T 312.5 80 T 400 200 T 487.5 140 T 575 80 T 662.5 200 T 750 140" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3,3" opacity="0.75"/>
    <!-- Sóng tổng hợp: f(t) = 5√2 sin(t + π/4) -->
    <path d="M 50 55 C 90 55, 110 225, 150 225 C 190 225, 210 55, 250 55 C 290 55, 310 225, 350 225 C 390 225, 410 55, 450 55 C 490 55, 510 225, 550 225 C 590 225, 610 55, 650 55 C 690 55, 710 225, 750 225" fill="none" stroke="url(#waveGradCombined)" stroke-width="3.5"/>
    <!-- Chú thích -->
    <g transform="translate(480, 15)">
      <rect x="0" y="0" width="300" height="60" rx="6" fill="#1e293b" opacity="0.9" stroke="#334155"/>
      <line x1="15" y1="18" x2="45" y2="18" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="55" y="22" fill="#38bdf8" font-size="11" font-family="sans-serif">f₁(t) = 5·sin(t) (Tín hiệu gốc)</text>
      <line x1="15" y1="34" x2="45" y2="34" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="55" y="38" fill="#a78bfa" font-size="11" font-family="sans-serif">f₂(t) = 5·cos(t) (Tín hiệu trễ)</text>
      <line x1="15" y1="50" x2="45" y2="50" stroke="#ec4899" stroke-width="3"/>
      <text x="55" y="54" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif">f(t) = 5√2·sin(t + π/4) (Âm kết hợp)</text>
    </g>
  </svg>
  <div class="mt-2 text-xs text-slate-400">Hình minh họa: Sóng âm hình sin kết hợp có biên độ k = 5√2 ≈ 7,07 và pha ban đầu φ = π/4 rad</div>
</div>`,
    checkpoints: [
      {
        id: "poi-11-2-hook-1",
        time: 15,
        title: "Tương tác Câu 1: Xác định biên độ sóng âm kết hợp",
        question: "Biểu thức âm kết hợp $f(t) = 5\\sin t + 5\\cos t$ có thể viết lại thành $f(t) = 5\\sqrt{2}\\left(\\dfrac{1}{\\sqrt{2}\\sin t + \\dfrac{1}{\\sqrt{2}\\cos t\\right)$. Khi đó biên độ âm $k$ bằng bao nhiêu?",
        options: [
          "$k = 5$",
          "$k = 10$",
          "$k = 5\\sqrt{2} \\approx 7{,}07$",
          "$k = 25$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        hint: "Số nhân trước ngoặc vuông chính là biên độ dao động cực đại k.",
        explain: "Chính xác! Đặt nhân tử chung $5\\sqrt{2}$, ta có biên độ âm kết hợp là: $k = 5\\sqrt{2} \\approx 7{,}07$."
      },
      {
        id: "poi-11-2-hook-2",
        time: 25,
        title: "Tương tác Câu 2: Pha ban đầu phi của sóng âm kết hợp",
        question: "Vì $\\cos\\dfrac{\\pi}{4} = \\sin\\dfrac{\\pi}{4} = \\dfrac{1}{\\sqrt{2}$, ta có $f(t) = 5\\sqrt{2}\\sin\\left(t + \\dfrac{\\pi}{4}\\right)$. Pha ban đầu $\\varphi$ của sóng âm này bằng:",
        options: [
          "$\\varphi = \\dfrac{\\pi}{4}$",
          "$\\varphi = \\dfrac{\\pi}{2}$",
          "$\\varphi = -\\dfrac{\\pi}{4}$",
          "$\\varphi = \\pi$"
        ],
        correctIndex: 0,
        correctAnswer: "A",
        hint: "Đối chiếu biểu thức f(t) = k*sin(t + phi).",
        explain: "Chính xác! So sánh với dạng $f(t) = k\\sin(t + \\varphi)$, ta có pha ban đầu $\\varphi = \\dfrac{\\pi}{4}$."
      }
    ],
    audioUrl: "assets/audio/b11_2_hook.mp3",
    audioScript: "Khởi động: Tình huống mở đầu. Một thiết bị trễ kỹ thuật số nhận tín hiệu gốc f một theo t bằng năm sin t và phát lại tín hiệu trễ f hai theo t bằng năm cos t. Âm kết hợp là tổng của hai tín hiệu f theo t bằng năm sin t cộng năm cos t. Bằng cách đặt năm căn hai làm nhân tử chung, ta viết được f theo t bằng năm căn hai nhân mở ngoặc một phần căn hai sin t cộng một phần căn hai cos t đóng ngoặc. Thay một phần căn hai bằng cos pi trên bốn và sin pi trên bốn, ta được năm căn hai nhân sin của t cộng pi trên bốn. Như vậy âm kết hợp là một sóng âm hình sin với biên độ k bằng năm căn hai và pha ban đầu phi bằng pi trên bốn."
  },

  // --- CÁC MỤC KIẾN THỨC BÀI HỌC ---
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1: CÔNG THỨC CỘNG
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b2-s1",
      num: "1",
      title: "Công thức cộng",
      audioUrl: "assets/audio/b11_2_sec1a.mp3",
      audioScript: "Mục 1. Công thức cộng. Mục này gồm hai tiểu mục: a. Công thức cộng đối với Sin và Côsin; và b. Công thức cộng đối với Tang và Vận dụng bài toán sóng âm.",
      subsections: [
        // --- 1a. CÔNG THỨC CỘNG ĐỐI VỚI SIN VÀ COSIN ---
        {
          key: "a",
          title: "Công thức cộng đối với Sin và Côsin",
          audioUrl: "assets/audio/b11_2_sec1a.mp3",
          audioScript: "Mục 1. Công thức cộng. Tiểu mục a: Công thức cộng đối với Sin và Côsin. Cho hai góc a và b. Trên đường tròn lượng giác, ta xét hai vectơ đơn vị O M biểu diễn góc a và O N biểu diễn góc b. Tích vô hướng của O M và O N một mặt bằng độ dài O M nhân độ dài O N nhân cos của góc a trừ b, tức là bằng cos của a trừ b. Mặt khác, tọa độ điểm M là cos a, sin a; tọa độ điểm N là cos b, sin b, nên tích vô hướng bằng cos a cos b cộng sin a sin b. Từ đó ta có công thức nền tảng bất hủ: cos của a trừ b bằng cos a cos b cộng sin a sin b. Thầy Sáng tặng các em câu thần chú dễ nhớ: Cos thì cos cos sin sin, dấu trừ đổi lại; Sin thì sin cos cos sin, dấu cùng một thể! Nghĩa là: cos của tổng thì thành hiệu, cos của hiệu thì thành tổng. Còn sin của tổng vẫn là tổng, sin của hiệu vẫn là hiệu.",
          checkpoints: [
            {
              id: "poi-11-2-sec1a-1",
              time: 20,
              title: "Tương tác Câu 1: Quy tắc dấu trong công thức cộng Cosin",
              question: "Khẳng định nào sau đây là <b>đúng</b> đối với công thức cộng của côsin?",
              options: [
                "$\\cos(a + b) = \\cos a \\cos b + \\sin a \\sin b$",
                "$\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$",
                "$\\cos(a + b) = \\sin a \\cos b + \\cos a \\sin b$",
                "$\\cos(a + b) = \\sin a \\cos b - \\cos a \\sin b$"
              ],
              correctIndex: 1,
              correctAnswer: "B",
              hint: "Nhớ câu thần chú Thầy Sáng: Cos thì cos cos sin sin, dấu cộng đổi thành dấu trừ!",
              explain: "Chính xác! Công thức đúng là: $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$."
            },
            {
              id: "poi-11-2-sec1a-2",
              time: 35,
              title: "Tương tác Câu 2: Công thức cộng của Sin",
              question: "Biểu thức $\\sin(a - b)$ được khai triển theo công thức cộng là:",
              options: [
                "$\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$",
                "$\\sin(a - b) = \\sin a \\cos b + \\cos a \\sin b$",
                "$\\sin(a - b) = \\cos a \\cos b - \\sin a \\sin b$",
                "$\\sin(a - b) = \\cos a \\cos b + \\sin a \\sin b$"
              ],
              correctIndex: 0,
              correctAnswer: "A",
              hint: "Sin thì sin cos cos sin, dấu cùng một thể (dấu trừ giữ nguyên dấu trừ).",
              explain: "Chính xác! $\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$."
            }
          ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p><b>Công thức cộng</b> là công thức cho phép biểu diễn các giá trị lượng giác của tổng hoặc hiệu hai góc qua các giá trị lượng giác của từng góc thành phần.</p>

            <div class="card mb-3 border-primary">
              <div class="card-header bg-primary text-white fw-bold">1. Cơ sở hình học và Định lý công thức cộng (SGK trang 17)</div>
              <div class="card-body">
                <p>Xét đường tròn lượng giác gốc $A(1; 0)$. Lấy hai điểm $M(\\cos a; \\sin a)$ và $N(\\cos b; \\sin b)$ biểu diễn các góc $a$ và $b$.</p>
                <div class="svg-container text-center my-3" style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 600 360" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowAxis" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#64748b"/>
      </marker>
      <marker id="arrowVecM" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#2563eb"/>
      </marker>
      <marker id="arrowVecN" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#ea580c"/>
      </marker>
    </defs>
    <!-- Trục tọa độ -->
    <line x1="60" y1="200" x2="440" y2="200" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrowAxis)"/>
    <text x="445" y="205" fill="#475569" font-size="14" font-weight="bold">x</text>
    <line x1="220" y1="330" x2="220" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrowAxis)"/>
    <text x="225" y="35" fill="#475569" font-size="14" font-weight="bold">y</text>
    <text x="205" y="215" fill="#475569" font-size="14" font-weight="bold">O</text>
    <!-- Đường tròn lượng giác R=120 -->
    <circle cx="220" cy="200" r="120" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
    <!-- Điểm A(1; 0) -->
    <circle cx="340" cy="200" r="3.5" fill="#0f172a"/>
    <text x="345" y="218" fill="#0f172a" font-size="12" font-weight="bold">A(1;0)</text>
    <!-- Vectơ OM: góc a = 60 độ -->
    <line x1="220" y1="200" x2="280" y2="96.08" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrowVecM)"/>
    <circle cx="280" cy="96.08" r="4" fill="#2563eb"/>
    <text x="285" y="90" fill="#2563eb" font-size="13" font-weight="bold">M(cos a; sin a)</text>
    <!-- Vectơ ON: góc b = 20 độ -->
    <line x1="220" y1="200" x2="332.76" y2="158.96" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowVecN)"/>
    <circle cx="332.76" cy="158.96" r="4" fill="#ea580c"/>
    <text x="340" y="160" fill="#ea580c" font-size="13" font-weight="bold">N(cos b; sin b)</text>
    <!-- Cung góc a -->
    <path d="M 270 200 A 50 50 0 0 0 245 156.7" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    <text x="268" y="175" fill="#2563eb" font-size="12" font-weight="bold">a</text>
    <!-- Cung góc b -->
    <path d="M 285 200 A 65 65 0 0 0 281 177.7" fill="none" stroke="#ea580c" stroke-width="1.5"/>
    <text x="290" y="195" fill="#ea580c" font-size="12" font-weight="bold">b</text>
    <!-- Góc giữa hai vectơ: a - b -->
    <path d="M 252 168 A 40 40 0 0 0 257.5 186.3" fill="none" stroke="#059669" stroke-width="2" stroke-dasharray="2,2"/>
    <text x="268" y="145" fill="#059669" font-size="12" font-weight="bold">a - b</text>
    <!-- Hộp chứng minh đại số -->
    <g transform="translate(380, 50)">
      <rect x="0" y="0" width="210" height="200" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="15" y="25" fill="#1e3a8a" font-size="12" font-weight="bold">CHỨNG MINH TÍCH VÔ HƯỚNG:</text>
      <text x="15" y="55" fill="#1e293b" font-size="12">Ta có: |OM| = |ON| = 1</text>
      <text x="15" y="80" fill="#2563eb" font-size="12" font-weight="bold">Cách 1: Theo định nghĩa</text>
      <text x="20" y="105" fill="#1e293b" font-size="12">OM · ON = cos(a - b)</text>
      <text x="15" y="135" fill="#ea580c" font-size="12" font-weight="bold">Cách 2: Theo toạ độ</text>
      <text x="20" y="160" fill="#1e293b" font-size="12">OM · ON = cos a cos b + sin a sin b</text>
      <line x1="15" y1="172" x2="195" y2="172" stroke="#93c5fd"/>
      <text x="15" y="190" fill="#059669" font-size="12" font-weight="bold">⇒ cos(a - b) = cos a cos b + sin a sin b</text>
    </g>
  </svg>
  <div class="mt-2 text-xs text-slate-600 font-semibold">Hình 1.1: Chứng minh công thức cộng bằng tích vô hướng hai vectơ đơn vị trên đường tròn lượng giác</div>
</div>
                <div class="p-3 bg-light rounded text-center border mt-2">
                  <span class="fs-5 fw-bold text-danger">$\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$</span>
                </div>
              </div>
            </div>

            <div class="card mb-3 border-danger">
              <div class="card-header bg-danger text-white fw-bold">2. Bảng 4 công thức cộng đối với Sin và Côsin</div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 mb-2">
                    <div class="p-3 border rounded bg-light text-center h-100">
                      <h6 class="text-danger fw-bold">Công thức Côsin</h6>
                      <p class="fs-5 fw-bold text-primary mb-1">$\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$</p>
                      <p class="fs-5 fw-bold text-primary mb-0">$\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$</p>
                    </div>
                  </div>
                  <div class="col-md-6 mb-2">
                    <div class="p-3 border rounded bg-light text-center h-100">
                      <h6 class="text-success fw-bold">Công thức Sin</h6>
                      <p class="fs-5 fw-bold text-success mb-1">$\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$</p>
                      <p class="fs-5 fw-bold text-success mb-0">$\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$</p>
                    </div>
                  </div>
                </div>
                <div class="alert alert-warning mt-3 mb-0 py-2">
                  <b>💡 Thần chú Thầy Sáng:</b> <i>"Cos thì cos cos sin sin, dấu trừ đổi lại; Sin thì sin cos cos sin, dấu cùng một thể!"</i>
                </div>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 1A (SGK TRANG 17) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Không dùng máy tính cầm tay, hãy tính giá trị của $\\cos 75^\\circ$.</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>Ta tách góc $75^\\circ$ thành tổng của hai góc đặc biệt quen thuộc: $75^\\circ = 45^\\circ + 30^\\circ$.</p>
              <p>Áp dụng công thức cộng côsin:</p>
              <p>$\\cos 75^\\circ = \\cos(45^\\circ + 30^\\circ) = \\cos 45^\\circ \\cos 30^\\circ - \\sin 45^\\circ \\sin 30^\\circ$</p>
              <p class="fw-bold text-primary fs-5">$\\cos 75^\\circ = \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{\\sqrt{3}}{2} - \\dfrac{\\sqrt{2}}{2} \\cdot \\dfrac{1}{2} = \\dfrac{\\sqrt{6} - \\sqrt{2}}{4}$.</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 1A (SGK TRANG 18):</div>
              <p><b>Đề bài:</b> Chứng minh rằng: $\\sin x - \\cos x = \\sqrt{2}\\sin\\left(x - \\dfrac{\\pi}{4}\\right)$.</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b></p>
              <p>Khai triển vế phải bằng công thức cộng sin: $\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$:</p>
              <p>$\\text{VP} = \\sqrt{2}\\left(\\sin x \\cos\\dfrac{\\pi}{4} - \\cos x \\sin\\dfrac{\\pi}{4}\\right)$</p>
              <p>Vì $\\cos\\dfrac{\\pi}{4} = \\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$, nên:</p>
              <p class="fw-bold text-primary fs-5">$\\text{VP} = \\sqrt{2}\\left(\\sin x \\cdot \\dfrac{\\sqrt{2}}{2} - \\cos x \\cdot \\dfrac{\\sqrt{2}}{2}\\right) = \\sin x - \\cos x = \\text{VT}$.</p>
              <p class="text-success fw-bold mb-0">Đẳng thức được chứng minh!</p>
            </div>
          </div>`
        },

        // --- 1b. CÔNG THỨC CỘNG ĐỐI VỚI TANG & SÓNG ÂM MỞ ĐẦU ---
        {
          key: "b",
          title: "Công thức cộng đối với Tang & Vận dụng sóng âm",
          audioUrl: "assets/audio/b11_2_sec1b.mp3",
          audioScript: "Tiểu mục b: Công thức cộng đối với Tang và Vận dụng sóng âm mở đầu. Từ định nghĩa tang an-pha bằng sin chia cos, bằng cách chia cả tử và mẫu cho cos a nhân cos b, ta thu được hai công thức cộng tang tuyệt đẹp: tang của a trừ b bằng tang a trừ tang b chia cho 1 cộng tang a nhân tang b. Và tang của a cộng b bằng tang a cộng tang b chia cho 1 trừ tang a nhân tang b. Trong bài toán trễ âm thanh mở đầu, khi sóng âm gốc năm sin t kết hợp với sóng trễ năm cos t, ta áp dụng công thức cộng sin x cộng cos x bằng căn hai sin của x cộng pi trên bốn, nhân thêm hệ số năm sẽ được biên độ sóng âm mới là năm căn hai xấp xỉ bảy phẩy không bảy, và pha ban đầu là pi trên bốn.",
          checkpoints: [
            {
              id: "poi-11-2-sec1b-1",
              time: 20,
              title: "Tương tác Câu 1: Công thức cộng Tang của tổng",
              question: "Biểu thức $\\tan(a + b)$ được tính theo công thức nào dưới đây (với điều kiện các biểu thức đều có nghĩa)?",
              options: [
                "$\\tan(a + b) = \\dfrac{\\tan a + \\tan b}{1 - \\tan a \\tan b}$",
                "$\\tan(a + b) = \\dfrac{\\tan a - \\tan b}{1 + \\tan a \\tan b}$",
                "$\\tan(a + b) = \\dfrac{\\tan a + \\tan b}{1 + \\tan a \\tan b}$",
                "$\\tan(a + b) = \\tan a + \\tan b$"
              ],
              correctIndex: 0,
              correctAnswer: "A",
              hint: "Ở tử số là dấu cộng (+), dưới mẫu số đảo dấu thành dấu trừ (-).",
              explain: "Chính xác! $\\tan(a + b) = \\dfrac{\\tan a + \\tan b}{1 - \\tan a \\tan b}$."
            },
            {
              id: "poi-11-2-sec1b-2",
              time: 35,
              title: "Tương tác Câu 2: Công thức góc đặc biệt $\\dfrac{\\pi}{4}$ của Tang",
              question: "Rút gọn biểu thức $\\tan\\left(\\dfrac{\\pi}{4} + x\\right)$ ta được kết quả là:",
              options: [
                "$\\dfrac{1 + \\tan x}{1 - \\tan x}$",
                "$\\dfrac{1 - \\tan x}{1 + \\tan x}$",
                "$1 + \\tan x$",
                "$\\dfrac{\\tan x}{1 - \\tan x}$"
              ],
              correctIndex: 0,
              correctAnswer: "A",
              hint: "Thay $\\tan\\dfrac{\\pi}{4} = 1$ vào công thức cộng tang.",
              explain: "Chính xác! $\\tan\\left(\\dfrac{\\pi}{4} + x\\right) = \\dfrac{\\tan\\frac{\\pi}{4} + \\tan x}{1 - \\tan\\frac{\\pi}{4}\\tan x} = \\dfrac{1 + \\tan x}{1 - \\tan x}$."
            }
          ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Từ công thức cộng của $\\sin$ và $\\cos$, ta thiết lập công thức cộng đối với $\\tan$ bằng cách lấy thương số: $\\tan(a \\pm b) = \\dfrac{\\sin(a \\pm b)}{\\cos(a \\pm b)}$.</p>

            <div class="card mb-3 border-warning">
              <div class="card-header bg-warning text-dark fw-bold">Công thức cộng đối với Tang (SGK trang 17)</div>
              <div class="card-body">
                <div class="svg-container text-center my-3" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 650 200" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="280" height="150" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="140" y="28" fill="#1d4ed8" font-size="14" font-weight="bold" text-anchor="middle">TÍNH GÓC 75° (Ví dụ 1a SGK)</text>
      <text x="140" y="55" fill="#0f172a" font-size="13" text-anchor="middle">75° = 45° + 30°</text>
      <line x1="20" y1="70" x2="260" y2="70" stroke="#bfdbfe"/>
      <text x="140" y="95" fill="#475569" font-size="12" text-anchor="middle">cos 75° = cos 45° cos 30° - sin 45° sin 30°</text>
      <text x="140" y="125" fill="#15803d" font-size="14" font-weight="bold" text-anchor="middle">= (√6 - √2) / 4</text>
    </g>
    <g transform="translate(340, 20)">
      <rect x="0" y="0" width="290" height="150" rx="8" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
      <text x="145" y="28" fill="#a21caf" font-size="14" font-weight="bold" text-anchor="middle">TÍNH GÓC π/12 (Ví dụ 1b SGK)</text>
      <text x="145" y="55" fill="#0f172a" font-size="13" text-anchor="middle">π/12 = π/3 - π/4 (hoặc 45° - 30°)</text>
      <line x1="20" y1="70" x2="270" y2="70" stroke="#f0abfc"/>
      <text x="145" y="95" fill="#475569" font-size="12" text-anchor="middle">tan(π/12) = (tan π/3 - tan π/4)/(1 + tan π/3 tan π/4)</text>
      <text x="145" y="125" fill="#b91c1c" font-size="14" font-weight="bold" text-anchor="middle">= 2 - √3</text>
    </g>
  </svg>
  <div class="mt-2 text-xs text-slate-600 font-semibold">Sơ đồ phân tích góc đưa về tổng và hiệu các góc đặc biệt (30°, 45°, 60°)</div>
</div>
                <div class="row text-center">
                  <div class="col-md-6 mb-2">
                    <div class="p-3 border rounded bg-light">
                      <span class="fs-5 fw-bold text-primary">$\\tan(a - b) = \\dfrac{\\tan a - \\tan b}{1 + \\tan a \\tan b}$</span>
                    </div>
                  </div>
                  <div class="col-md-6 mb-2">
                    <div class="p-3 border rounded bg-light">
                      <span class="fs-5 fw-bold text-danger">$\\tan(a + b) = \\dfrac{\\tan a + \\tan b}{1 - \\tan a \\tan b}$</span>
                    </div>
                  </div>
                </div>
                <p class="text-muted small mt-2 mb-0"><i>(Giả thiết các góc $a, b, a \\pm b \\ne \\dfrac{\\pi}{2} + k\\pi$ để các giá trị tang đều xác định).</i></p>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 1B (SGK TRANG 17) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Không dùng máy tính, hãy tính giá trị của $\\tan\\dfrac{\\pi}{12}$.</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>Ta nhận thấy: $\\dfrac{\\pi}{12} = \\dfrac{\\pi}{3} - \\dfrac{\\pi}{4}$.</p>
              <p>Áp dụng công thức cộng tang:</p>
              <p>$\\tan\\dfrac{\\pi}{12} = \\tan\\left(\\dfrac{\\pi}{3} - \\dfrac{\\pi}{4}\\right) = \\dfrac{\\tan\\frac{\\pi}{3} - \\tan\\frac{\\pi}{4}}{1 + \\tan\\frac{\\pi}{3}\\tan\\frac{\\pi}{4}}$</p>
              <p>Thay $\\tan\\dfrac{\\pi}{3} = \\sqrt{3}$ và $\\tan\\dfrac{\\pi}{4} = 1$:</p>
              <p class="fw-bold text-primary fs-5">$\\tan\\dfrac{\\pi}{12} = \\dfrac{\\sqrt{3} - 1}{1 + \\sqrt{3}} = \\dfrac{(\\sqrt{3} - 1)^2}{3 - 1} = \\dfrac{4 - 2\\sqrt{3}}{2} = 2 - \\sqrt{3}$.</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ VẬN DỤNG 1 (SGK TRANG 18) — GIẢI QUYẾT BÀI TOÁN SÓNG ÂM MỞ ĐẦU:</div>
              <p><b>Đề bài:</b> Cho âm kết hợp $f(t) = 5\\sin t + 5\\cos t$. Viết $f(t)$ dưới dạng $f(t) = k\\sin(t + \\varphi)$ và xác định biên độ $k$, pha ban đầu $\\varphi$.</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b></p>
              <p>Theo Ví dụ 2 (SGK trang 18), ta có công thức biến đổi cơ bản: $\\sin t + \\cos t = \\sqrt{2}\\sin\\left(t + \\dfrac{\\pi}{4}\\right)$.</p>
              <p>Nhân cả hai vế với 5:</p>
              <p class="fs-5 fw-bold text-primary">$f(t) = 5(\\sin t + \\cos t) = 5\\sqrt{2}\\sin\\left(t + \\dfrac{\\pi}{4}\\right)$.</p>
              <p>So sánh với dạng tổng quát $f(t) = k\\sin(t + \\varphi)$, ta kết luận:</p>
              <p>• <b>Biên độ âm:</b> $k = 5\\sqrt{2} \\approx 7{,}07$;</p>
              <p>• <b>Pha ban đầu:</b> $\\varphi = \\dfrac{\\pi}{4}$ (thỏa mãn $-\\pi \\le \\varphi \\le \\pi$).</p>
            </div>
          </div>`
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2: CÔNG THỨC NHÂN ĐÔI VÀ HẠ BẬC
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b2-s2",
      num: "2",
      title: "Công thức nhân đôi và hạ bậc",
      audioUrl: "assets/audio/b11_2_sec2a.mp3",
      audioScript: "Mục 2. Công thức nhân đôi và hạ bậc. Gồm hai tiểu mục: a. Công thức nhân đôi cơ bản; và b. Công thức hạ bậc và kĩ thuật tính góc đặc biệt.",
      subsections: [
        // --- 2a. CÔNG THỨC NHÂN ĐÔI CƠ BẢN ---
        {
          key: "a",
          title: "Công thức nhân đôi cơ bản",
          audioUrl: "assets/audio/b11_2_sec2a.mp3",
          audioScript: "Mục 2. Công thức nhân đôi. Tiểu mục a: Công thức nhân đôi cơ bản. Trong các công thức cộng, nếu ta cho góc b bằng góc a, ta sẽ thu được các công thức tính giá trị lượng giác của góc nhân đôi hai a. Thứ nhất: sin hai a bằng hai sin a cos a. Thứ hai: cos hai a có ba dạng biến đổi vô cùng linh hoạt: bằng cos bình a trừ sin bình a, hoặc bằng hai cos bình a trừ 1, hoặc bằng 1 trừ hai sin bình a. Thứ ba: tang hai a bằng hai tang a chia cho 1 trừ tang bình a. Các em đặc biệt lưu ý: cos hai a là cầu nối liên kết mật thiết với các biểu thức hạ bậc sau này.",
          checkpoints: [
            {
              id: "poi-11-2-sec2a-1",
              time: 20,
              title: "Tương tác Câu 1: Công thức nhân đôi của Sin",
              question: "Đẳng thức nào sau đây là <b>đúng</b> với mọi góc $a$?",
              options: [
                "$\\sin 2a = 2\\sin a$",
                "$\\sin 2a = 2\\sin a \\cos a$",
                "$\\sin 2a = \\sin^2 a - \\cos^2 a$",
                "$\\sin 2a = \\sin a \\cos a$"
              ],
              correctIndex: 1,
              correctAnswer: "B",
              hint: "Sin nhân đôi bằng 2 lần tích của sin và cos.",
              explain: "Chính xác! $\\sin 2a = 2\\sin a \\cos a$."
            },
            {
              id: "poi-11-2-sec2a-2",
              time: 35,
              title: "Tương tác Câu 2: Các dạng tương đương của cos 2a",
              question: "Biểu thức nào dưới đây <b>KHÔNG</b> bằng $\\cos 2a$?",
              options: [
                "$\\cos^2 a - \\sin^2 a$",
                "$2\\cos^2 a - 1$",
                "$1 - 2\\sin^2 a$",
                "$2\\sin^2 a - 1$"
              ],
              correctIndex: 3,
              correctAnswer: "D",
              hint: "Công thức đúng là 1 - 2*sin^2(a), không phải 2*sin^2(a) - 1.",
              explain: "Chính xác! $\\cos 2a = 1 - 2\\sin^2 a = 2\\cos^2 a - 1 = \\cos^2 a - \\sin^2 a$. Do đó $2\\sin^2 a - 1$ là sai (nó bằng $-\\cos 2a$)."
            }
          ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Khi cho $b = a$ trong các công thức cộng, ta thu được <b>công thức nhân đôi</b> cho phép biểu diễn các giá trị lượng giác của góc $2a$ theo góc $a$.</p>

            <div class="card mb-3 border-danger">
              <div class="card-header bg-danger text-white fw-bold">Bộ công thức nhân đôi (SGK trang 18)</div>
              <div class="card-body">
                <div class="svg-container text-center my-3" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 700 240" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Nút trung tâm -->
    <rect x="250" y="85" width="200" height="60" rx="30" fill="#2563eb" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"/>
    <text x="350" y="112" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">GÓC NHÂN ĐÔI</text>
    <text x="350" y="132" fill="#bfdbfe" font-size="12" text-anchor="middle">(Đặt b = a trong công thức cộng)</text>
    <!-- Nhánh Sin 2a -->
    <path d="M 250 115 C 160 115, 160 50, 80 50" fill="none" stroke="#3b82f6" stroke-width="2"/>
    <rect x="10" y="25" width="160" height="50" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="90" y="47" fill="#1d4ed8" font-size="13" font-weight="bold" text-anchor="middle">sin 2a</text>
    <text x="90" y="65" fill="#1e293b" font-size="12" text-anchor="middle">= 2 sin a cos a</text>
    <!-- Nhánh Tan 2a -->
    <path d="M 250 115 C 160 115, 160 185, 80 185" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <rect x="10" y="160" width="160" height="52" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="90" y="182" fill="#b45309" font-size="13" font-weight="bold" text-anchor="middle">tan 2a</text>
    <text x="90" y="200" fill="#1e293b" font-size="11" text-anchor="middle">= 2 tan a / (1 - tan²a)</text>
    <!-- Nhánh Cos 2a với 3 biến thể -->
    <path d="M 450 115 C 510 115, 510 50, 540 50" fill="none" stroke="#ec4899" stroke-width="2"/>
    <path d="M 450 115 L 540 115" stroke="#ec4899" stroke-width="2"/>
    <path d="M 450 115 C 510 115, 510 185, 540 185" fill="none" stroke="#ec4899" stroke-width="2"/>
    <rect x="540" y="25" width="150" height="42" rx="6" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
    <text x="615" y="50" fill="#9d174d" font-size="12" font-weight="bold" text-anchor="middle">= cos²a - sin²a</text>
    <rect x="540" y="95" width="150" height="42" rx="6" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
    <text x="615" y="120" fill="#9d174d" font-size="12" font-weight="bold" text-anchor="middle">= 2 cos²a - 1</text>
    <rect x="540" y="165" width="150" height="42" rx="6" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
    <text x="615" y="190" fill="#9d174d" font-size="12" font-weight="bold" text-anchor="middle">= 1 - 2 sin²a</text>
    <text x="510" y="110" fill="#be185d" font-size="12" font-weight="bold">cos 2a</text>
  </svg>
  <div class="mt-2 text-xs text-slate-600 font-semibold">Sơ đồ 3 nhánh mở rộng của cos 2a – Nền tảng thiết lập công thức hạ bậc</div>
</div>
                <div class="row text-center mt-3">
                  <div class="col-md-4 mb-2">
                    <div class="p-2 border rounded bg-info bg-opacity-10">
                      <span class="fw-bold text-primary">$\\sin 2a = 2\\sin a \\cos a$</span>
                    </div>
                  </div>
                  <div class="col-md-4 mb-2">
                    <div class="p-2 border rounded bg-danger bg-opacity-10">
                      <span class="fw-bold text-danger">$\\cos 2a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$</span>
                    </div>
                  </div>
                  <div class="col-md-4 mb-2">
                    <div class="p-2 border rounded bg-success bg-opacity-10">
                      <span class="fw-bold text-success">$\\tan 2a = \\dfrac{2\\tan a}{1 - \\tan^2 a}$</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 3 (SGK TRANG 18) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Cho $\\cos a = -\\dfrac{1}{3}$ với $\\dfrac{\\pi}{2} < a < \\pi$. Tính giá trị của $\\sin 2a$.</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>Vì $\\dfrac{\\pi}{2} < a < \\pi$ (góc thuộc góc phần tư thứ II) nên $\\sin a > 0$.</p>
              <p>Từ hệ thức $\\sin^2 a + \\cos^2 a = 1$, suy ra:</p>
              <p>$\\sin a = \\sqrt{1 - \\cos^2 a} = \\sqrt{1 - \\left(-\\dfrac{1}{3}\\right)^2} = \\sqrt{\\dfrac{8}{9}} = \\dfrac{2\\sqrt{2}}{3}$.</p>
              <p>Áp dụng công thức nhân đôi của sin:</p>
              <p class="fw-bold text-primary fs-5">$\\sin 2a = 2\\sin a \\cos a = 2 \\cdot \\dfrac{2\\sqrt{2}}{3} \\cdot \\left(-\\dfrac{1}{3}\\right) = -\\dfrac{4\\sqrt{2}}{9}$.</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP TƯƠNG TỰ (BÀI 1.9A SGK TRANG 21):</div>
              <p><b>Đề bài:</b> Cho $\\sin a = \\dfrac{1}{3}$ và $\\dfrac{\\pi}{2} < a < \\pi$. Tính $\\sin 2a, \\cos 2a, \\tan 2a$.</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b></p>
              <p>1. Vì $\\dfrac{\\pi}{2} < a < \\pi$ nên $\\cos a < 0$:</p>
              <p>$\\cos a = -\\sqrt{1 - \\sin^2 a} = -\\sqrt{1 - \\left(\\dfrac{1}{3}\\right)^2} = -\\dfrac{2\\sqrt{2}}{3}$.</p>
              <p>2. Áp dụng các công thức nhân đôi:</p>
              <p>• $\\sin 2a = 2\\sin a \\cos a = 2 \\cdot \\dfrac{1}{3} \\cdot \\left(-\\dfrac{2\\sqrt{2}}{3}\\right) = -\\dfrac{4\\sqrt{2}}{9}$;</p>
              <p>• $\\cos 2a = 1 - 2\\sin^2 a = 1 - 2 \\cdot \\left(\\dfrac{1}{3}\\right)^2 = 1 - \\dfrac{2}{9} = \\dfrac{7}{9}$;</p>
              <p>• $\\tan 2a = \\dfrac{\\sin 2a}{\\cos 2a} = \\dfrac{-4\\sqrt{2}/9}{7/9} = -\\dfrac{4\\sqrt{2}}{7}$.</p>
            </div>
          </div>`
        },

        // --- 2b. CÔNG THỨC HẠ BẬC & KĨ THUẬT GÓC ĐẶC BIỆT ---
        {
          key: "b",
          title: "Công thức hạ bậc & Kĩ thuật góc đặc biệt",
          audioUrl: "assets/audio/b11_2_sec2b.mp3",
          audioScript: "Tiểu mục b: Công thức hạ bậc và kĩ thuật tính góc đặc biệt. Từ hai đẳng thức cos hai a bằng hai cos bình a trừ 1 và cos hai a bằng 1 trừ hai sin bình a, ta rút ra công thức hạ bậc: cos bình a bằng 1 cộng cos hai a chia hai; sin bình a bằng 1 trừ cos hai a chia hai. Công thức hạ bậc có ứng dụng vô cùng lớn trong giải tích và lượng giác, giúp biến đổi lũy thừa bậc hai về bậc nhất. Ví dụ khi tính cos pi trên tám, ta hạ bậc cos bình pi trên tám bằng 1 cộng cos pi trên bốn chia hai, tức là bằng hai cộng căn hai chia bốn. Vì pi trên tám là góc nhọn dương nên ta lấy căn bậc hai dương, được kết quả tuyệt đẹp là căn bậc hai của hai cộng căn hai chia hai.",
          checkpoints: [
            {
              id: "poi-11-2-sec2b-1",
              time: 20,
              title: "Tương tác Câu 1: Công thức hạ bậc của cosin bình phương",
              question: "Công thức hạ bậc nào dưới đây là <b>đúng</b>?",
              options: [
                "$\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}$",
                "$\\cos^2 a = \\dfrac{1 - \\cos 2a}{2}$",
                "$\\cos^2 a = 1 + \\cos 2a$",
                "$\\cos^2 a = 1 - 2\\cos 2a$"
              ],
              correctIndex: 0,
              correctAnswer: "A",
              hint: "Hạ bậc cosin mang dấu cộng: (1 + cos 2a)/2.",
              explain: "Chính xác! $\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}$."
            },
            {
              id: "poi-11-2-sec2b-2",
              time: 35,
              title: "Tương tác Câu 2: Công thức hạ bậc của sin bình phương",
              question: "Công thức hạ bậc của $\\sin^2 a$ là:",
              options: [
                "$\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$",
                "$\\sin^2 a = \\dfrac{1 + \\cos 2a}{2}$",
                "$\\sin^2 a = \\dfrac{1 - \\sin 2a}{2}$",
                "$\\sin^2 a = \\dfrac{1 + \\sin 2a}{2}$"
              ],
              correctIndex: 0,
              correctAnswer: "A",
              hint: "Hạ bậc sin mang dấu trừ: (1 - cos 2a)/2.",
              explain: "Chính xác! $\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$."
            }
          ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Từ công thức nhân đôi $\\cos 2a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$, ta biến đổi rút ra <b>công thức hạ bậc</b>.</p>

            <div class="card mb-3 border-warning">
              <div class="card-header bg-warning text-dark fw-bold">Công thức hạ bậc (SGK trang 19)</div>
              <div class="card-body">
                <div class="svg-container text-center my-3" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 650 180" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="280" height="135" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
      <text x="140" y="26" fill="#15803d" font-size="14" font-weight="bold" text-anchor="middle">CÔNG THỨC HẠ BẬC</text>
      <line x1="20" y1="40" x2="260" y2="40" stroke="#bbf7d0"/>
      <text x="140" y="68" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">cos²a = (1 + cos 2a) / 2</text>
      <text x="140" y="100" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">sin²a = (1 - cos 2a) / 2</text>
      <text x="140" y="122" fill="#475569" font-size="11" text-anchor="middle">Dấu cộng cho cos, dấu trừ cho sin</text>
    </g>
    <g transform="translate(330, 20)">
      <rect x="0" y="0" width="300" height="135" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="150" y="26" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">TÍNH cos(π/8) (Luyện tập 2 SGK)</text>
      <line x1="20" y1="40" x2="280" y2="40" stroke="#bfdbfe"/>
      <text x="150" y="65" fill="#1e293b" font-size="12" text-anchor="middle">cos²(π/8) = [1 + cos(π/4)] / 2</text>
      <text x="150" y="90" fill="#1e293b" font-size="12" text-anchor="middle">= [1 + √2/2] / 2 = (2 + √2) / 4</text>
      <text x="150" y="118" fill="#15803d" font-size="13" font-weight="bold" text-anchor="middle">⇒ cos(π/8) = √(2 + √2) / 2</text>
    </g>
  </svg>
  <div class="mt-2 text-xs text-slate-600 font-semibold">Quy tắc hạ bậc và ứng dụng xác định giá trị lượng giác góc nửa</div>
</div>
                <div class="row text-center">
                  <div class="col-md-6 mb-2">
                    <div class="p-3 border rounded bg-light">
                      <span class="fs-5 fw-bold text-danger">$\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}$</span>
                    </div>
                  </div>
                  <div class="col-md-6 mb-2">
                    <div class="p-3 border rounded bg-light">
                      <span class="fs-5 fw-bold text-primary">$\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ MẪU: LUYỆN TẬP 2 (SGK TRANG 19) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Không dùng máy tính, hãy tính giá trị của $\\cos\\dfrac{\\pi}{8}$.</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>Áp dụng công thức hạ bậc đối với $a = \\dfrac{\\pi}{8}$:</p>
              <p>$\\cos^2\\dfrac{\\pi}{8} = \\dfrac{1 + \\cos\\left(2 \\cdot \\frac{\\pi}{8}\\right)}{2} = \\dfrac{1 + \\cos\\frac{\\pi}{4}}{2} = \\dfrac{1 + \\frac{\\sqrt{2}}{2}}{2} = \\dfrac{2 + \\sqrt{2}}{4}$.</p>
              <p>Vì $0 < \\dfrac{\\pi}{8} < \\dfrac{\\pi}{2}$ (góc nhọn góc phần tư thứ I) nên $\\cos\\dfrac{\\pi}{8} > 0$.</p>
              <p class="fw-bold text-primary fs-5">Do đó: $\\cos\\dfrac{\\pi}{8} = \\sqrt{\\dfrac{2 + \\sqrt{2}}{4}} = \\dfrac{\\sqrt{2 + \\sqrt{2}}{2}$.</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP TƯƠNG TỰ CỦA THẦY SÁNG:</div>
              <p><b>Đề bài:</b> Áp dụng công thức hạ bậc, hãy tính giá trị chính xác của $\\sin\\dfrac{\\pi}{8}$.</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b></p>
              <p>Áp dụng công thức hạ bậc cho sin:</p>
              <p>$\\sin^2\\dfrac{\\pi}{8} = \\dfrac{1 - \\cos\\frac{\\pi}{4}}{2} = \\dfrac{1 - \\frac{\\sqrt{2}}{2}}{2} = \\dfrac{2 - \\sqrt{2}}{4}$.</p>
              <p>Vì $0 < \\dfrac{\\pi}{8} < \\dfrac{\\pi}{2}$ nên $\\sin\\dfrac{\\pi}{8} > 0$.</p>
              <p class="fw-bold text-primary fs-5">Vậy: $\\sin\\dfrac{\\pi}{8} = \\dfrac{\\sqrt{2 - \\sqrt{2}}{2}$.</p>
            </div>
          </div>`
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3: CÔNG THỨC BIẾN ĐỔI TÍCH THÀNH TỔNG
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b2-s3",
      num: "3",
      title: "Công thức biến đổi tích thành tổng",
      audioUrl: "assets/audio/b11_2_sec3a.mp3",
      audioScript: "Mục 3. Công thức biến đổi tích thành tổng. Mục này gồm hai tiểu mục: a. Ba công thức biến đổi tích thành tổng cơ bản; và b. Kĩ thuật rút gọn và chứng minh đẳng thức.",
      subsections: [
        // --- 3a. BA CÔNG THỨC BIẾN ĐỔI TÍCH THÀNH TỔNG ---
        {
          key: "a",
          title: "Ba công thức biến đổi tích thành tổng cơ bản",
          audioUrl: "assets/audio/b11_2_sec3a.mp3",
          audioScript: "Mục 3. Biến đổi tích thành tổng. Tiểu mục a: Ba công thức cơ bản. Bằng cách cộng hoặc trừ từng vế các công thức cộng, ta thu được ba công thức biến đổi tích thành tổng. Thứ nhất: cos a nhân cos b bằng một phần hai nhân mở ngoặc cos của a trừ b cộng cos của a cộng b đóng ngoặc. Thứ hai: sin a nhân sin b bằng một phần hai nhân mở ngoặc cos của a trừ b trừ đi cos của a cộng b đóng ngoặc. Thứ ba: sin a nhân cos b bằng một phần hai nhân mở ngoặc sin của a trừ b cộng sin của a cộng b đóng ngoặc. Thầy Sáng mách nhỏ: Nhớ rằng tích hai sin bằng một phần hai hiệu hai cos, còn tích hai cos bằng một phần hai tổng hai cos.",
          checkpoints: [
            {
              id: "poi-11-2-sec3a-1",
              time: 20,
              title: "Tương tác Câu 1: Công thức biến tích cos.cos thành tổng",
              question: "Công thức biến đổi tích $\\cos a \\cos b$ thành tổng là:",
              options: [
                "$\\cos a \\cos b = \\dfrac{1}{2}\\left[\\cos(a - b) + \\cos(a + b)\\right]$",
                "$\\cos a \\cos b = \\dfrac{1}{2}\\left[\\cos(a - b) - \\cos(a + b)\\right]$",
                "$\\cos a \\cos b = \\cos(a - b) + \\cos(a + b)$",
                "$\\cos a \\cos b = \\dfrac{1}{2}\\left[\\sin(a - b) + \\sin(a + b)\\right]$"
              ],
              correctIndex: 0,
              correctAnswer: "A",
              hint: "Tích hai cos bằng 1/2 tổng hai cos.",
              explain: "Chính xác! $\\cos a \\cos b = \\dfrac{1}{2}[\\cos(a - b) + \\cos(a + b)]$."
            },
            {
              id: "poi-11-2-sec3a-2",
              time: 35,
              title: "Tương tác Câu 2: Công thức biến tích sin.sin thành tổng",
              question: "Đẳng thức nào sau đây là <b>đúng</b>?",
              options: [
                "$\\sin a \\sin b = \\dfrac{1}{2}\\left[\\cos(a - b) - \\cos(a + b)\\right]$",
                "$\\sin a \\sin b = \\dfrac{1}{2}\\left[\\cos(a - b) + \\cos(a + b)\\right]$",
                "$\\sin a \\sin b = \\dfrac{1}{2}\\left[\\sin(a + b) - \\sin(a - b)\\right]$",
                "$\\sin a \\sin b = -\\dfrac{1}{2}\\left[\\cos(a - b) + \\cos(a + b)\\right]$"
              ],
              correctIndex: 0,
              correctAnswer: "A",
              hint: "Sin nhân sin có dấu trừ giữa hai hàm cos.",
              explain: "Chính xác! $\\sin a \\sin b = \\dfrac{1}{2}[\\cos(a - b) - \\cos(a + b)]$."
            }
          ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Từ các công thức cộng, khi cộng hoặc trừ từng vế, ta thu được <b>bộ ba công thức biến đổi tích thành tổng</b>.</p>

            <div class="card mb-3 border-primary">
              <div class="card-header bg-primary text-white fw-bold">Khung ba công thức biến đổi tích thành tổng (SGK trang 19)</div>
              <div class="card-body">
                <div class="p-3 border rounded bg-light mb-2">
                  <span class="fs-5 fw-bold text-primary">$\\cos a \\cos b = \\dfrac{1}{2}\\left[\\cos(a - b) + \\cos(a + b)\\right]$</span>
                </div>
                <div class="p-3 border rounded bg-light mb-2">
                  <span class="fs-5 fw-bold text-danger">$\\sin a \\sin b = \\dfrac{1}{2}\\left[\\cos(a - b) - \\cos(a + b)\\right]$</span>
                </div>
                <div class="p-3 border rounded bg-light">
                  <span class="fs-5 fw-bold text-success">$\\sin a \\cos b = \\dfrac{1}{2}\\left[\\sin(a - b) + \\sin(a + b)\\right]$</span>
                </div>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 4 (SGK TRANG 19) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Tính giá trị của các biểu thức sau:</p>
              <p>$A = \\cos\\dfrac{5\\pi}{12}\\cos\\dfrac{7\\pi}{12}$;&emsp;&emsp;$B = \\cos 75^\\circ \\sin 15^\\circ$.</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>• Tính $A$: Áp dụng công thức tích cos thành tổng:</p>
              <p>$A = \\dfrac{1}{2}\\left[\\cos\\left(\\dfrac{5\\pi}{12} - \\dfrac{7\\pi}{12}\\right) + \\cos\\left(\\dfrac{5\\pi}{12} + \\dfrac{7\\pi}{12}\\right)\\right] = \\dfrac{1}{2}\\left[\\cos\\left(-\\dfrac{\\pi}{6}\\right) + \\cos\\pi\\right]$</p>
              <p>Vì $\\cos\\left(-\\dfrac{\\pi}{6}\\right) = \\dfrac{\\sqrt{3}}{2}$ và $\\cos\\pi = -1$, nên:</p>
              <p class="fw-bold text-primary fs-5">$A = \\dfrac{1}{2}\\left(\\dfrac{\\sqrt{3}}{2} - 1\\right) = \\dfrac{\\sqrt{3} - 2}{4}$.</p>
              <p>• Tính $B$: Đổi $B = \\sin 15^\\circ \\cos 75^\\circ$ và áp dụng công thức tích sin.cos:</p>
              <p>$B = \\dfrac{1}{2}\\left[\\sin(15^\\circ - 75^\\circ) + \\sin(15^\\circ + 75^\\circ)\\right] = \\dfrac{1}{2}\\left[\\sin(-60^\\circ) + \\sin 90^\\circ\\right]$</p>
              <p class="fw-bold text-primary fs-5">$B = \\dfrac{1}{2}\\left(-\\dfrac{\\sqrt{3}}{2} + 1\\right) = \\dfrac{2 - \\sqrt{3}}{4}$.</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 3 (SGK TRANG 19):</div>
              <p><b>Đề bài:</b> Không dùng máy tính, hãy tính giá trị của biểu thức:</p>
              <p class="fw-bold">$A = \\cos 75^\\circ \\cos 15^\\circ$;&emsp;&emsp;$B = \\sin\\dfrac{5\\pi}{12}\\cos\\dfrac{7\\pi}{12}$.</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b></p>
              <p>• Tính $A$:</p>
              <p>$A = \\dfrac{1}{2}[\\cos(75^\\circ - 15^\\circ) + \\cos(75^\\circ + 15^\\circ)] = \\dfrac{1}{2}[\\cos 60^\\circ + \\cos 90^\\circ] = \\dfrac{1}{2}\\left(\\dfrac{1}{2} + 0\\right) = \\dfrac{1}{4}$.</p>
              <p>• Tính $B$:</p>
              <p>$B = \\dfrac{1}{2}\\left[\\sin\\left(\\dfrac{5\\pi}{12} - \\dfrac{7\\pi}{12}\\right) + \\sin\\left(\\dfrac{5\\pi}{12} + \\dfrac{7\\pi}{12}\\right)\\right] = \\dfrac{1}{2}\\left[\\sin\\left(-\\dfrac{\\pi}{6}\\right) + \\sin\\pi\\right]$</p>
              <p class="fw-bold text-primary fs-5">$B = \\dfrac{1}{2}\\left(-\\dfrac{1}{2} + 0\\right) = -\\dfrac{1}{4}$.</p>
            </div>
          </div>`
        },

        // --- 3b. KĨ THUẬT RÚT GỌN VÀ CHỨNG MINH ĐẲNG THỨC ---
        {
          key: "b",
          title: "Kĩ thuật rút gọn và chứng minh đẳng thức",
          audioUrl: "assets/audio/b11_2_sec3b.mp3",
          audioScript: "Tiểu mục b: Kĩ thuật rút gọn và chứng minh đẳng thức tích thành tổng. Trong các đề kiểm tra và thi học sinh giỏi, các bài toán rút gọn tích liên hoàn thường xuất hiện rất nhiều. Điển hình như bài 1 chấm 11 trong sách giáo khoa: Chứng minh tích của sin a cộng b nhân sin a trừ b bằng sin bình a trừ sin bình b. Ta chỉ cần áp dụng biến đổi tích thành tổng: sin a cộng b nhân sin a trừ b bằng một phần hai nhân mở ngoặc cos hai b trừ cos hai a đóng ngoặc. Hạ bậc cos hai b thành 1 trừ hai sin bình b, và cos hai a thành 1 trừ hai sin bình a, ta sẽ thu được ngay điều phải chứng minh.",
          checkpoints: [
            {
              id: "poi-11-2-sec3b-1",
              time: 20,
              title: "Tương tác Câu 1: Đẳng thức tích hai sin đối xứng",
              question: "Biểu thức $P = \\sin(a + b)\\sin(a - b)$ luôn bằng:",
              options: [
                "$\\sin^2 a - \\sin^2 b$",
                "$\\sin^2 a + \\sin^2 b$",
                "$\\cos^2 a - \\cos^2 b$",
                "$\\cos^2 a + \\sin^2 b$"
              ],
              correctIndex: 0,
              correctAnswer: "A",
              hint: "Khai triển tích thành tổng: 1/2 [cos 2b - cos 2a] rồi đưa về sin.",
              explain: "Chính xác! $\\sin(a + b)\\sin(a - b) = \\sin^2 a - \\sin^2 b = \\cos^2 b - \\cos^2 a$ (Bài 1.11 SGK)."
            },
            {
              id: "poi-11-2-sec3b-2",
              time: 35,
              title: "Tương tác Câu 2: Tích liên hoàn của các góc nhân đôi",
              question: "Giá trị của biểu thức $B = \\sin\\dfrac{\\pi}{32}\\cos\\dfrac{\\pi}{32}\\cos\\dfrac{\\pi}{16}\\cos\\dfrac{\\pi}{8}$ bằng:",
              options: [
                "$\\dfrac{\\sqrt{2}{16}$",
                "$\\dfrac{\\sqrt{2}{8}$",
                "$\\dfrac{1}{16}$",
                "$\\dfrac{\\sqrt{3}{16}$"
              ],
              correctIndex: 0,
              correctAnswer: "A",
              hint: "Nhân đôi liên tiếp: sin(x)cos(x) = 1/2 sin(2x).",
              explain: "Chính xác! Ta có: $B = \\dfrac{1}{2}\\sin\\dfrac{\\pi}{16}\\cos\\dfrac{\\pi}{16}\\cos\\dfrac{\\pi}{8} = \\dfrac{1}{4}\\sin\\dfrac{\\pi}{8}\\cos\\dfrac{\\pi}{8} = \\dfrac{1}{8}\\sin\\dfrac{\\pi}{4} = \\dfrac{1}{8} \\cdot \\dfrac{\\sqrt{2}{2} = \\dfrac{\\sqrt{2}{16}$."
            }
          ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Biến đổi tích thành tổng là công cụ sắc bén để giải quyết các bài toán chứng minh đẳng thức và rút gọn dãy tích liên hoàn.</p>

            <div class="svg-container text-center my-3" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 720 160" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowDomino" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#3b82f6"/>
      </marker>
    </defs>
    <text x="360" y="25" fill="#1e3a8a" font-size="13" font-weight="bold" text-anchor="middle">HIỆU ỨNG NHÂN ĐÔI DOMINO B = sin(π/32)·cos(π/32)·cos(π/16)·cos(π/8)</text>
    <g transform="translate(10, 45)">
      <rect x="0" y="10" width="130" height="55" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
      <text x="65" y="35" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">sin(π/32)cos(π/32)</text>
      <text x="65" y="55" fill="#475569" font-size="11" text-anchor="middle">= ½ sin(π/16)</text>

      <line x1="135" y1="37" x2="175" y2="37" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowDomino)"/>

      <rect x="180" y="10" width="145" height="55" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
      <text x="252" y="35" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">½ sin(π/16)cos(π/16)</text>
      <text x="252" y="55" fill="#475569" font-size="11" text-anchor="middle">= ¼ sin(π/8)</text>

      <line x1="330" y1="37" x2="370" y2="37" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowDomino)"/>

      <rect x="375" y="10" width="145" height="55" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
      <text x="447" y="35" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">¼ sin(π/8)cos(π/8)</text>
      <text x="447" y="55" fill="#475569" font-size="11" text-anchor="middle">= ⅛ sin(π/4)</text>

      <line x1="525" y1="37" x2="565" y2="37" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowDomino)"/>

      <rect x="570" y="10" width="125" height="55" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="632" y="35" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle">⅛ · (√2 / 2)</text>
      <text x="632" y="55" fill="#15803d" font-size="13" font-weight="bold" text-anchor="middle">= √2 / 16</text>
    </g>
    <text x="360" y="140" fill="#64748b" font-size="11" text-anchor="middle">Kĩ thuật nhân đôi liên tiếp giải quyết các tích dãy số cô-sin với góc gấp đôi</text>
  </svg>
</div>
            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ MẪU: BÀI 1.11 (SGK TRANG 21) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Chứng minh rằng: $\\sin(a + b)\\sin(a - b) = \\sin^2 a - \\sin^2 b = \\cos^2 b - \\cos^2 a$.</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>Áp dụng công thức biến đổi tích thành tổng cho $\\sin u \\sin v$ với $u = a + b, v = a - b$:</p>
              <p>$\\sin(a + b)\\sin(a - b) = \\dfrac{1}{2}\\left[\\cos\\left((a + b) - (a - b)\\right) - \\cos\\left((a + b) + (a - b)\\right)\\right]$</p>
              <p>$= \\dfrac{1}{2}[\\cos(2b) - \\cos(2a)]$.</p>
              <p>Áp dụng công thức nhân đôi $\\cos 2x = 1 - 2\\sin^2 x$:</p>
              <p>$= \\dfrac{1}{2}\\left[(1 - 2\\sin^2 b) - (1 - 2\\sin^2 a)\\right] = \\dfrac{1}{2}\\left(2\\sin^2 a - 2\\sin^2 b\\right) = \\sin^2 a - \\sin^2 b$.</p>
              <p>Mặt khác, vì $\\sin^2 a = 1 - \\cos^2 a$ và $\\sin^2 b = 1 - \\cos^2 b$, nên:</p>
              <p class="fw-bold text-primary fs-5">$\\sin^2 a - \\sin^2 b = (1 - \\cos^2 a) - (1 - \\cos^2 b) = \\cos^2 b - \\cos^2 a$.</p>
              <p class="text-success fw-bold mb-0">Đẳng thức được chứng minh hoàn tất!</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP TƯƠNG TỰ (BÀI 1.10B SGK TRANG 21):</div>
              <p><b>Đề bài:</b> Tính giá trị của biểu thức: $B = \\sin\\dfrac{\\pi}{32}\\cos\\dfrac{\\pi}{32}\\cos\\dfrac{\\pi}{16}\\cos\\dfrac{\\pi}{8}$.</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b></p>
              <p>Áp dụng công thức nhân đôi $\\sin x \\cos x = \\dfrac{1}{2}\\sin 2x$ theo từng cấp:</p>
              <p>1. Cặp đầu tiên: $\\sin\\dfrac{\\pi}{32}\\cos\\dfrac{\\pi}{32} = \\dfrac{1}{2}\\sin\\dfrac{\\pi}{16}$;</p>
              <p>2. Cặp thứ hai: $\\left(\\dfrac{1}{2}\\sin\\dfrac{\\pi}{16}\\right)\\cos\\dfrac{\\pi}{16} = \\dfrac{1}{4}\\sin\\dfrac{\\pi}{8}$;</p>
              <p>3. Cặp cuối cùng: $\\left(\\dfrac{1}{4}\\sin\\dfrac{\\pi}{8}\\right)\\cos\\dfrac{\\pi}{8} = \\dfrac{1}{8}\\sin\\dfrac{\\pi}{4}$.</p>
              <p class="fw-bold text-primary fs-5">Do $\\sin\\dfrac{\\pi}{4} = \\dfrac{\\sqrt{2}}{2}$, nên $B = \\dfrac{1}{8} \\cdot \\dfrac{\\sqrt{2}}{2} = \\dfrac{\\sqrt{2}}{16}$.</p>
            </div>
          </div>`
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4: CÔNG THỨC BIẾN ĐỔI TỔNG THÀNH TÍCH
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b2-s4",
      num: "4",
      title: "Công thức biến đổi tổng thành tích",
      audioUrl: "assets/audio/b11_2_sec4a.mp3",
      audioScript: "Mục 4. Công thức biến đổi tổng thành tích. Mục này gồm hai tiểu mục: a. Bốn công thức biến đổi tổng thành tích cơ bản; và b. Ứng dụng thực tiễn trong công nghệ âm thanh phím bấm điện thoại cảm ứng D-T-M-F.",
      subsections: [
        // --- 4a. BỐN CÔNG THỨC BIẾN ĐỔI TỔNG THÀNH TÍCH ---
        {
          key: "a",
          title: "Bốn công thức biến đổi tổng thành tích cơ bản",
          audioUrl: "assets/audio/b11_2_sec4a.mp3",
          audioScript: "Mục 4. Tổng thành tích. Tiểu mục a: Bốn công thức cơ bản. Đặt u bằng a trừ b và v bằng a cộng b, ta có a bằng u cộng v chia hai, và b bằng v trừ u chia hai. Từ đó suy ra bốn công thức biến đổi tổng thành tích bất hủ. Thầy tặng các em câu ca dao lượng giác truyền thống cực kỳ dễ thuộc: Cos cộng cos bằng hai cos cos; Cos trừ cos bằng trừ hai sin sin; Sin cộng sin bằng hai sin cos; Sin trừ sin bằng hai cos sin! Trong các công thức này, góc của thừa số thứ nhất luôn là nửa tổng, u cộng v chia hai; góc của thừa số thứ hai luôn là nửa hiệu, u trừ v chia hai.",
          checkpoints: [
            {
              id: "poi-11-2-sec4a-1",
              time: 20,
              title: "Tương tác Câu 1: Quy tắc Cos cộng Cos",
              question: "Công thức biến đổi $\\cos u + \\cos v$ thành tích là:",
              options: [
                "$\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$",
                "$\\cos u + \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$",
                "$\\cos u + \\cos v = 2\\sin\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$",
                "$\\cos u + \\cos v = \\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$"
              ],
              correctIndex: 0,
              correctAnswer: "A",
              hint: "Cos cộng cos bằng 2 cos cos (nửa tổng, nửa hiệu).",
              explain: "Chính xác! $\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$."
            },
            {
              id: "poi-11-2-sec4a-2",
              time: 35,
              title: "Tương tác Câu 2: Dấu trừ trong Cos trừ Cos",
              question: "Biểu thức $\\cos u - \\cos v$ được biến đổi thành tích là:",
              options: [
                "$-2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$",
                "$2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$",
                "$2\\cos\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$",
                "$-2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$"
              ],
              correctIndex: 0,
              correctAnswer: "A",
              hint: "Cos trừ cos có dấu trừ ở đằng trước: -2 sin sin.",
              explain: "Chính xác! $\\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$."
            }
          ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Phép biến đổi ngược lại từ tổng (hoặc hiệu) thành tích giúp ích rất nhiều trong việc giải phương trình lượng giác và rút gọn biểu thức.</p>

            <div class="card mb-3 border-success">
              <div class="card-header bg-success text-white fw-bold">Bộ 4 Công thức biến đổi tổng thành tích (SGK trang 20)</div>
              <div class="card-body">
                <div class="svg-container text-center my-3" style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 700 200" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="330" height="80" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="25" y="35" fill="#1e40af" font-size="13" font-weight="bold">cos u + cos v = 2 cos(½(u+v)) cos(½(u-v))</text>
    <text x="25" y="65" fill="#2563eb" font-size="12" font-style="italic">"Cos cộng cos bằng hai cos cos"</text>

    <rect x="360" y="10" width="330" height="80" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="375" y="35" fill="#991b1b" font-size="13" font-weight="bold">cos u - cos v = -2 sin(½(u+v)) sin(½(u-v))</text>
    <text x="375" y="65" fill="#dc2626" font-size="12" font-style="italic">"Cos trừ cos bằng trừ hai sin sin"</text>

    <rect x="10" y="105" width="330" height="80" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
    <text x="25" y="130" fill="#166534" font-size="13" font-weight="bold">sin u + sin v = 2 sin(½(u+v)) cos(½(u-v))</text>
    <text x="25" y="160" fill="#15803d" font-size="12" font-style="italic">"Sin cộng sin bằng hai sin cos"</text>

    <rect x="360" y="105" width="330" height="80" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="375" y="130" fill="#92400e" font-size="13" font-weight="bold">sin u - sin v = 2 cos(½(u+v)) sin(½(u-v))</text>
    <text x="375" y="160" fill="#b45309" font-size="12" font-style="italic">"Sin trừ sin bằng hai cos sin"</text>
  </svg>
  <div class="mt-2 text-xs text-slate-600 font-semibold">Bài ca biến đổi Tổng thành Tích Thầy Sáng – Luôn nhớ: góc trước nửa tổng, góc sau nửa hiệu!</div>
</div>
                <div class="row">
                  <div class="col-md-6 mb-2">
                    <div class="p-3 border rounded bg-light">
                      <span class="fs-5 fw-bold text-primary">$\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$</span>
                    </div>
                  </div>
                  <div class="col-md-6 mb-2">
                    <div class="p-3 border rounded bg-light">
                      <span class="fs-5 fw-bold text-danger">$\\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$</span>
                    </div>
                  </div>
                  <div class="col-md-6 mb-2">
                    <div class="p-3 border rounded bg-light">
                      <span class="fs-5 fw-bold text-success">$\\sin u + \\sin v = 2\\sin\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$</span>
                    </div>
                  </div>
                  <div class="col-md-6 mb-2">
                    <div class="p-3 border rounded bg-light">
                      <span class="fs-5 fw-bold text-warning">$\\sin u - \\sin v = 2\\cos\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$</span>
                    </div>
                  </div>
                </div>
                <div class="alert alert-warning mt-3 mb-0 py-2">
                  <b>💡 Thần chú bất hủ:</b> <i>"Cos cộng cos bằng 2 cos cos; Cos trừ cos bằng trừ 2 sin sin; Sin cộng sin bằng 2 sin cos; Sin trừ sin bằng 2 cos sin!"</i>
                </div>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 5 (SGK TRANG 20) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Không dùng máy tính, hãy tính giá trị của biểu thức: $A = \\sin\\dfrac{\\pi}{9} - \\sin\\dfrac{4\\pi}{9} + \\sin\\dfrac{7\\pi}{9}$.</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>Nhóm hai số hạng có góc đối xứng lại với nhau:</p>
              <p>$A = \\left(\\sin\\dfrac{\\pi}{9} + \\sin\\dfrac{7\\pi}{9}\\right) - \\sin\\dfrac{4\\pi}{9}$.</p>
              <p>Áp dụng công thức Sin cộng Sin: $\\sin u + \\sin v = 2\\sin\\frac{u+v}{2}\\cos\\frac{u-v}{2}$:</p>
              <p>$\\sin\\dfrac{\\pi}{9} + \\sin\\dfrac{7\\pi}{9} = 2\\sin\\left(\\dfrac{\\frac{\\pi}{9} + \\frac{7\\pi}{9}}{2}\\right)\\cos\\left(\\dfrac{\\frac{\\pi}{9} - \\frac{7\\pi}{9}}{2}\\right) = 2\\sin\\dfrac{4\\pi}{9}\\cos\\left(-\\dfrac{\\pi}{3}\\right)$.</p>
              <p>Vì $\\cos\\left(-\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}$, nên biểu thức trở thành:</p>
              <p class="fw-bold text-primary fs-5">$A = 2\\sin\\dfrac{4\\pi}{9} \\cdot \\dfrac{1}{2} - \\sin\\dfrac{4\\pi}{9} = \\sin\\dfrac{4\\pi}{9} - \\sin\\dfrac{4\\pi}{9} = 0$.</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 4 (SGK TRANG 20):</div>
              <p><b>Đề bài:</b> Không dùng máy tính, hãy tính giá trị của biểu thức: $B = \\cos\\dfrac{\\pi}{9} + \\cos\\dfrac{5\\pi}{9} + \\cos\\dfrac{11\\pi}{9}$.</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b></p>
              <p>Nhóm số hạng thứ nhất và thứ ba: $B = \\left(\\cos\\dfrac{\\pi}{9} + \\cos\\dfrac{11\\pi}{9}\\right) + \\cos\\dfrac{5\\pi}{9}$.</p>
              <p>Áp dụng công thức Cos cộng Cos: $\\cos u + \\cos v = 2\\cos\\frac{u+v}{2}\\cos\\frac{u-v}{2}$:</p>
              <p>$\\cos\\dfrac{\\pi}{9} + \\cos\\dfrac{11\\pi}{9} = 2\\cos\\left(\\dfrac{\\frac{\\pi}{9} + \\frac{11\\pi}{9}}{2}\\right)\\cos\\left(\\dfrac{\\frac{\\pi}{9} - \\frac{11\\pi}{9}}{2}\\right) = 2\\cos\\dfrac{2\\pi}{3}\\cos\\left(-\\dfrac{5\\pi}{9}\\right)$.</p>
              <p>Vì $\\cos\\dfrac{2\\pi}{3} = -\\dfrac{1}{2}$ và $\\cos\\left(-\\dfrac{5\\pi}{9}\\right) = \\cos\\dfrac{5\\pi}{9}$, nên:</p>
              <p class="fw-bold text-primary fs-5">$B = 2 \\cdot \\left(-\\dfrac{1}{2}\\right)\\cos\\dfrac{5\\pi}{9} + \\cos\\dfrac{5\\pi}{9} = -\\cos\\dfrac{5\\pi}{9} + \\cos\\dfrac{5\\pi}{9} = 0$.</p>
            </div>
          </div>`
        },

        // --- 4b. ỨNG DỤNG THỰC TIỄN: ÂM THANH BÀN PHÍM ĐIỆN THOẠI CẢM ỨNG DTMF ---
        {
          key: "b",
          title: "Ứng dụng âm thanh bàn phím cảm ứng DTMF",
          audioUrl: "assets/audio/b11_2_sec4b.mp3",
          audioScript: "Tiểu mục b: Ứng dụng thực tiễn trong công nghệ âm thanh bàn phím cảm ứng D-T-M-F. Khi các em nhấn một phím số trên điện thoại thông minh, bàn phím sẽ phát ra hai âm thuần đồng thời: một âm có tần số thấp tương ứng với hàng, và một âm có tần số cao tương ứng với cột. Ví dụ khi nhấn phím số 4, tần số thấp là 770 héc và tần số cao là 1209 héc. Phương trình sóng âm kết hợp là y bằng sin của 1540 pi t cộng sin của 2418 pi t. Nhờ công thức tổng thành tích sin cộng sin bằng hai sin cos, chip âm thanh chuyển đổi thành dạng hai nhân sin của 1979 pi t nhân cos của 439 pi t, giúp tổng đài viễn thông nhận diện chính xác phím bấm chỉ trong một phần nghìn giây.",
          checkpoints: [
            {
              id: "poi-11-2-sec4b-1",
              time: 20,
              title: "Tương tác Câu 1: Tần số kết hợp của phím số 4",
              question: "Theo Hình 1.13 SGK, khi nhấn phím số 4 trên điện thoại cảm ứng, hai tần số âm thanh được kích hoạt là:",
              options: [
                "$f_1 = 770\\text{ Hz}$ và $f_2 = 1209\\text{ Hz}$",
                "$f_1 = 697\\text{ Hz}$ và $f_2 = 1209\\text{ Hz}$",
                "$f_1 = 852\\text{ Hz}$ và $f_2 = 1336\\text{ Hz}$",
                "$f_1 = 770\\text{ Hz}$ và $f_2 = 1477\\text{ Hz}$"
              ],
              correctIndex: 0,
              correctAnswer: "A",
              hint: "Phím 4 nằm ở hàng 2 (770 Hz) và cột 1 (1209 Hz).",
              explain: "Chính xác! Phím 4 tương ứng với tần số thấp hàng 2 là 770 Hz và tần số cao cột 1 là 1209 Hz."
            },
            {
              id: "poi-11-2-sec4b-2",
              time: 35,
              title: "Tương tác Câu 2: Biến đổi tổng thành tích tín hiệu âm thanh",
              question: "Biến đổi $y = \\sin(1540\\pi t) + \\sin(2418\\pi t)$ về dạng tích ta được:",
              options: [
                "$y = 2\\sin(1979\\pi t)\\cos(439\\pi t)$",
                "$y = 2\\cos(1979\\pi t)\\sin(439\\pi t)$",
                "$y = 2\\sin(3958\\pi t)\\cos(878\\pi t)$",
                "$y = \\sin(1979\\pi t)\\cos(439\\pi t)$"
              ],
              correctIndex: 0,
              correctAnswer: "A",
              hint: "Sin cộng sin bằng 2 sin nửa tổng cos nửa hiệu.",
              explain: "Chính xác! Nửa tổng: $(1540 + 2418)/2 = 1979$; Nửa hiệu: $(1540 - 2418)/2 = -439$. Vì $\\cos(-x) = \\cos x$ nên $y = 2\\sin(1979\\pi t)\\cos(439\\pi t)$."
            }
          ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Trong kỹ thuật viễn thông, công nghệ <b>DTMF (Dual-Tone Multi-Frequency)</b> sử dụng công thức lượng giác tổng thành tích để giải mã tín hiệu âm thanh từ bàn phím điện thoại.</p>

            <div class="card mb-3 border-primary">
              <div class="card-header bg-primary text-white fw-bold">Mô hình ma trận tần số bàn phím điện thoại (Hình 1.13 SGK trang 20)</div>
              <div class="card-body">
                <div class="svg-container text-center my-3" style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 650 320" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Tiêu đề cột Tần số cao -->
    <text x="270" y="25" fill="#2563eb" font-size="13" font-weight="bold" text-anchor="middle">Tần số cao (Hz)</text>
    <text x="200" y="48" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">1209 Hz</text>
    <line x1="200" y1="52" x2="200" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
    <polygon points="200,73 196,65 204,65" fill="#94a3b8"/>
    <text x="270" y="48" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">1336 Hz</text>
    <line x1="270" y1="52" x2="270" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
    <polygon points="270,73 266,65 274,65" fill="#94a3b8"/>
    <text x="340" y="48" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">1477 Hz</text>
    <line x1="340" y1="52" x2="340" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
    <polygon points="340,73 336,65 344,65" fill="#94a3b8"/>
    <!-- Tiêu đề hàng Tần số thấp -->
    <text x="65" y="190" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle" transform="rotate(-90 65 190)">Tần số thấp (Hz)</text>
    <g transform="translate(100, 75)">
      <!-- Hàng 1: 697 Hz -->
      <text x="15" y="32" fill="#475569" font-size="12" font-weight="bold" text-anchor="end">697 Hz →</text>
      <rect x="25" y="8" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="50" y="34" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">1</text>
      <rect x="95" y="8" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="120" y="34" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">2</text>
      <rect x="165" y="8" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="190" y="34" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">3</text>
      <!-- Hàng 2: 770 Hz (Phím 4 nổi bật) -->
      <text x="15" y="87" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="end">770 Hz →</text>
      <rect x="25" y="63" width="50" height="40" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="2.5"/>
      <text x="50" y="89" fill="#dc2626" font-size="18" font-weight="bold" text-anchor="middle">4</text>
      <rect x="95" y="63" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="120" y="89" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">5</text>
      <rect x="165" y="63" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="190" y="89" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">6</text>
      <!-- Hàng 3: 852 Hz -->
      <text x="15" y="142" fill="#475569" font-size="12" font-weight="bold" text-anchor="end">852 Hz →</text>
      <rect x="25" y="118" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="50" y="144" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">7</text>
      <rect x="95" y="118" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="120" y="144" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">8</text>
      <rect x="165" y="118" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="190" y="144" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">9</text>
      <!-- Hàng 4: 941 Hz -->
      <text x="15" y="197" fill="#475569" font-size="12" font-weight="bold" text-anchor="end">941 Hz →</text>
      <rect x="25" y="173" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="50" y="199" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">*</text>
      <rect x="95" y="173" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="120" y="199" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">0</text>
      <rect x="165" y="173" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="190" y="199" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">#</text>
    </g>
    <!-- Phân tích sóng phím 4 bên phải -->
    <g transform="translate(360, 75)">
      <rect x="0" y="8" width="275" height="205" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="15" y="32" fill="#991b1b" font-size="13" font-weight="bold">KHI NHẤN PHÍM 4 (Vận dụng 2):</text>
      <text x="15" y="58" fill="#475569" font-size="12">• Tần số thấp: f₁ = 770 Hz</text>
      <text x="15" y="80" fill="#475569" font-size="12">• Tần số cao: f₂ = 1209 Hz</text>
      <line x1="15" y1="92" x2="260" y2="92" stroke="#e2e8f0"/>
      <text x="15" y="112" fill="#1e3a8a" font-size="12" font-weight="bold">Phương trình sóng âm kết hợp:</text>
      <text x="15" y="132" fill="#0f172a" font-size="11">y = sin(2π·770t) + sin(2π·1209t)</text>
      <text x="15" y="152" fill="#0f172a" font-size="11">  = sin(1540πt) + sin(2418πt)</text>
      <line x1="15" y1="162" x2="260" y2="162" stroke="#e2e8f0"/>
      <text x="15" y="180" fill="#15803d" font-size="12" font-weight="bold">Biến đổi tổng thành tích:</text>
      <text x="15" y="200" fill="#15803d" font-size="12" font-weight="bold">y = 2·sin(1979πt)·cos(439πt)</text>
    </g>
  </svg>
  <div class="mt-2 text-xs text-slate-600 font-semibold">Hình 1.13 SGK: Ma trận mã hóa âm thanh đa tần số DTMF trên bàn phím điện thoại cảm ứng</div>
</div>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VẬN DỤNG 2 (SGK TRANG 20) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Khi nhấn một phím trên điện thoại cảm ứng, bàn phím tạo ra hai âm thuần kết hợp tạo ra sóng âm $y = \\sin(2\\pi f_1 t) + \\sin(2\\pi f_2 t)$.</p>
              <p>a) Tìm hàm số mô hình hoá âm thanh được tạo ra khi nhấn phím 4.</p>
              <p>b) Biến đổi công thức vừa tìm được ở câu a về dạng tích của một hàm số sin và một hàm số côsin.</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>a) Quan sát Hình 1.13 SGK, phím 4 nằm ở hàng thứ hai và cột thứ nhất:</p>
              <p>• Tần số thấp: $f_1 = 770\\text{ Hz}$;</p>
              <p>• Tần số cao: $f_2 = 1\\,209\\text{ Hz}$.</p>
              <p>Hàm số mô hình hoá âm thanh phím 4 là:</p>
              <p class="fw-bold text-primary fs-5">$y = \\sin(2\\pi \\cdot 770 t) + \\sin(2\\pi \\cdot 1\\,209 t) = \\sin(1\\,540\\pi t) + \\sin(2\\,418\\pi t)$.</p>
              <p>b) Áp dụng công thức biến đổi tổng thành tích: $\\sin u + \\sin v = 2\\sin\\frac{u+v}{2}\\cos\\frac{u-v}{2}$:</p>
              <p>$\\dfrac{u+v}{2} = \\dfrac{1\\,540\\pi t + 2\\,418\\pi t}{2} = 1\\,979\\pi t$;</p>
              <p>$\\dfrac{u-v}{2} = \\dfrac{1\\,540\\pi t - 2\\,418\\pi t}{2} = -439\\pi t$.</p>
              <p>Vì hàm số côsin là hàm số chẵn nên $\\cos(-439\\pi t) = \\cos(439\\pi t)$. Do đó:</p>
              <p class="fw-bold text-danger fs-5">$y = 2\\sin(1\\,979\\pi t)\\cos(439\\pi t)$.</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP MỞ RỘNG CỦA THẦY SÁNG:</div>
              <p><b>Đề bài:</b> Tương tự, hãy viết hàm sóng âm và biến đổi về dạng tích khi nhấn <b>phím số 8</b> trên điện thoại cảm ứng.</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b></p>
              <p>1. Tra cứu ma trận: Phím 8 nằm ở hàng 3 (tần số thấp $f_1 = 852\\text{ Hz}$) và cột 2 (tần số cao $f_2 = 1\\,336\\text{ Hz}$).</p>
              <p>2. Hàm sóng âm tương ứng:</p>
              <p>$y = \\sin(2\\pi \\cdot 852 t) + \\sin(2\\pi \\cdot 1\\,336 t) = \\sin(1\\,704\\pi t) + \\sin(2\\,672\\pi t)$.</p>
              <p>3. Biến đổi tổng thành tích:</p>
              <p class="fw-bold text-primary fs-5">$y = 2\\sin(2\\,188\\pi t)\\cos(484\\pi t)$.</p>
            </div>
          </div>`
        }
      ]
    }
  ],

  // =========================================================================
  // PHẦN IV. CHỐT KIẾN THỨC & VẬN DỤNG THỰC TẾ
  // =========================================================================
  realworldWrapup: {
    title: "Chốt kiến thức then chốt & Bài toán Dao động điều hòa",
    summaryHtml: `<p>Chúc mừng các em đã chinh phục trọn vẹn <b>Bài 2: Công thức lượng giác</b>! Hãy cùng Thầy tổng kết bộ 4 công thức kim cương:</p>
    <ul>
      <li><b>1. Công thức cộng:</b><br>
      • $\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b$<br>
      • $\\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b$<br>
      • $\\tan(a \\pm b) = \\dfrac{\\tan a \\pm \\tan b}{1 \\mp \\tan a \\tan b}$</li>
      <li><b>2. Công thức nhân đôi & Hạ bậc:</b><br>
      • $\\sin 2a = 2\\sin a \\cos a$<br>
      • $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$<br>
      • $\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}; \\quad \\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$</li>
      <li><b>3. Công thức tích thành tổng:</b><br>
      • $\\cos a \\cos b = \\dfrac{1}{2}[\\cos(a - b) + \\cos(a + b)]$<br>
      • $\\sin a \\sin b = \\dfrac{1}{2}[\\cos(a - b) - \\cos(a + b)]$<br>
      • $\\sin a \\cos b = \\dfrac{1}{2}[\\sin(a - b) + \\sin(a + b)]$</li>
      <li><b>4. Công thức tổng thành tích:</b><br>
      • $\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$ &emsp;|&emsp; $\\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$<br>
      • $\\sin u + \\sin v = 2\\sin\\dfrac{u+v}{2}\\cos\\dfrac{u-v}{2}$ &emsp;|&emsp; $\\sin u - \\sin v = 2\\cos\\dfrac{u+v}{2}\\sin\\dfrac{u-v}{2}$</li>
    </ul>

    <div class="alert-box alert-success mt-3">
      <div class="fw-bold text-success mb-2">🚀 VẬN DỤNG CAO VẬT LÝ: BÀI 1.13 (SGK TRANG 21) — TỔNG HỢP HAI DAO ĐỘNG ĐIỀU HÒA</div>
      <p><b>Đề bài:</b> Một vật thực hiện đồng thời hai dao động điều hoà cùng phương có phương trình li độ:<br>
      $x_1(t) = 2\\cos\\left(\\dfrac{\\pi}{3}t + \\dfrac{\\pi}{6}\\right)\\text{ (cm)}$ và $x_2(t) = 2\\cos\\left(\\dfrac{\\pi}{3}t - \\dfrac{\\pi}{3}\\right)\\text{ (cm)}$.<br>
      Tìm dao động tổng hợp $x(t) = x_1(t) + x_2(t)$ và xác định biên độ và pha ban đầu của dao động tổng hợp.</p>
      <hr>
      <p><b>Lời giải chi tiết của Thầy Sáng:</b></p>
      <p>Áp dụng công thức Cos cộng Cos: $\\cos u + \\cos v = 2\\cos\\frac{u+v}{2}\\cos\\frac{u-v}{2}$:</p>
      <p>$x(t) = 2\\left[\\cos\\left(\\dfrac{\\pi}{3}t + \\dfrac{\\pi}{6}\\right) + \\cos\\left(\\dfrac{\\pi}{3}t - \\dfrac{\\pi}{3}\\right)\\right]$</p>
      <p>• Nửa hiệu: $\\dfrac{\\left(\\frac{\\pi}{3}t + \\frac{\\pi}{6}\\right) - \\left(\\frac{\\pi}{3}t - \\frac{\\pi}{3}\\right)}{2} = \\dfrac{\\frac{\\pi}{2}}{2} = \\dfrac{\\pi}{4}$;</p>
      <p>• Nửa tổng: $\\dfrac{\\left(\\frac{\\pi}{3}t + \\frac{\\pi}{6}\\right) + \\left(\\frac{\\pi}{3}t - \\frac{\\pi}{3}\\right)}{2} = \\dfrac{\\frac{2\\pi}{3}t - \\frac{\\pi}{6}}{2} = \\dfrac{\\pi}{3}t - \\dfrac{\\pi}{12}$.</p>
      <p>Do đó: $x(t) = 2 \\cdot 2\\cos\\dfrac{\\pi}{4}\\cos\\left(\\dfrac{\\pi}{3}t - \\dfrac{\\pi}{12}\\right) = 4 \\cdot \\dfrac{\\sqrt{2}}{2}\\cos\\left(\\dfrac{\\pi}{3}t - \\dfrac{\\pi}{12}\\right)$.</p>
      <p class="fs-5 fw-bold text-primary">$x(t) = 2\\sqrt{2}\\cos\\left(\\dfrac{\\pi}{3}t - \\dfrac{\\pi}{12}\\right)\\text{ (cm)}$.</p>
      <p>• <b>Biên độ dao động tổng hợp:</b> $A = 2\\sqrt{2}\\text{ cm} \\approx 2{,}83\\text{ cm}$;<br>
      • <b>Pha ban đầu:</b> $\\varphi = -\\dfrac{\\pi}{12}\\text{ rad}$.</p>
    </div>`,
    checkpoints: [
      {
        id: "poi-11-2-wrapup-1",
        time: 20,
        title: "Tương tác Câu 1: Biên độ dao động tổng hợp",
        question: "Trong bài toán dao động tổng hợp ở trên, biên độ $A$ của dao động $x(t) = x_1(t) + x_2(t)$ bằng:",
        options: [
          "$A = 2\\text{ cm}$",
          "$A = 4\\text{ cm}$",
          "$A = 2\\sqrt{2}\\text{ cm}$",
          "$A = 2\\sqrt{3}\\text{ cm}$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        hint: "Nhớ hệ số trước hàm cosin sau khi rút gọn: 4 * (sqrt(2)/2) = 2*sqrt(2).",
        explain: "Chính xác! Biên độ của dao động điều hòa tổng hợp là $A = 2\\sqrt{2}\\text{ cm}$."
      },
      {
        id: "poi-11-2-wrapup-2",
        time: 35,
        title: "Tương tác Câu 2: Pha ban đầu dao động tổng hợp",
        question: "Pha ban đầu $\\varphi$ của dao động tổng hợp $x(t)$ bằng:",
        options: [
          "$\\varphi = -\\dfrac{\\pi}{12}$",
          "$\\varphi = \\dfrac{\\pi}{6}$",
          "$\\varphi = -\\dfrac{\\pi}{3}$",
          "$\\varphi = \\dfrac{\\pi}{4}$"
        ],
        correctIndex: 0,
        correctAnswer: "A",
        hint: "Đối chiếu biểu thức $x(t) = 2\\sqrt{2}\\cos\\left(\\dfrac{\\pi}{3}t - \\dfrac{\\pi}{12}\\right)$.",
        explain: "Chính xác! Pha ban đầu của dao động là $\\varphi = -\\dfrac{\\pi}{12}\\text{ rad}$."
      }
    ],
    audioUrl: "assets/audio/b11_2_wrapup.mp3",
    audioScript: "Phần tổng kết: Chốt kiến thức then chốt. Thầy Sáng chúc mừng các em đã nắm trọn vẹn bốn bộ công thức lượng giác. Hãy luôn khắc cốt ghi tâm: Công thức cộng, Công thức nhân đôi, Công thức biến đổi tích thành tổng và tổng thành tích. Nhờ công thức tổng thành tích, khi cộng hai dao động điều hòa x một và x hai, ta tìm ra biên độ dao động mới là hai căn hai xen-ti-mét và pha ban đầu là âm pi trên mười hai. Bây giờ, các em hãy tự tin bước sang Phần bốn để làm bài tập củng cố nhé!"
  },

  // =========================================================================
  // PHẦN V (HOẶC IV). BÀI TẬP TRẮC NGHIỆM CỦNG CỐ CHUẨN 2026
  // =========================================================================
  examFormatPractice: {
    title: "Bài tập trắc nghiệm củng cố (Chuẩn cấu trúc 2026 Bộ GD&ĐT)",
    durationMinutes: 20,
    totalPoints: 10,

    // DẠNG 1: TRẮC NGHIỆM 4 LỰA CHỌN (5 CÂU - ĐÁP ÁN HOÁN VỊ ĐỀU)
    part1MultipleChoice: [
      {
        id: "mc-11-2-1",
        question: "Khẳng định nào sau đây là <b>đúng</b> với mọi góc $a, b$?",
        prompt: "Khẳng định nào sau đây là <b>đúng</b> với mọi góc $a, b$?",
        options: [
          "$\\cos(a + b) = \\cos a \\cos b + \\sin a \\sin b$",
          "$\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$",
          "$\\sin(a + b) = \\sin a \\cos b - \\cos a \\sin b$",
          "$\\cos(a - b) = \\cos a \\cos b - \\sin a \\sin b$"
        ],
        correctIndex: 1,
        correctAnswer: "B",
        hint: "Nhớ câu thần chú: Cos thì cos cos sin sin, dấu cộng đổi thành dấu trừ.",
        explain: "Áp dụng công thức cộng đối với côsin: $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$. Đáp án B."
      },
      {
        id: "mc-11-2-2",
        question: "Biểu thức $\\cos 2a$ <b>KHÔNG</b> bằng biểu thức nào sau đây?",
        prompt: "Biểu thức $\\cos 2a$ <b>KHÔNG</b> bằng biểu thức nào sau đây?",
        options: [
          "$\\cos^2 a - \\sin^2 a$",
          "$2\\cos^2 a - 1$",
          "$1 - 2\\sin^2 a$",
          "$\\sin^2 a - \\cos^2 a$"
        ],
        correctIndex: 3,
        correctAnswer: "D",
        hint: "cos 2a = cos^2(a) - sin^2(a), nên sin^2(a) - cos^2(a) = -cos(2a).",
        explain: "Ta có: $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$. Do đó phương án D sai. Đáp án D."
      },
      {
        id: "mc-11-2-3",
        question: "Không dùng máy tính cầm tay, giá trị của biểu thức $P = \\cos 75^\\circ \\cos 15^\\circ$ bằng:",
        prompt: "Không dùng máy tính cầm tay, giá trị của biểu thức $P = \\cos 75^\\circ \\cos 15^\\circ$ bằng:",
        options: [
          "$\\dfrac{1}{4}$",
          "$\\dfrac{1}{2}$",
          "$\\dfrac{\\sqrt{3}{4}$",
          "$\\dfrac{\\sqrt{6} - \\sqrt{2}{4}$"
        ],
        correctIndex: 0,
        correctAnswer: "A",
        hint: "Biến đổi tích thành tổng: cos 75° cos 15° = 1/2 [cos 60° + cos 90°].",
        explain: "Áp dụng công thức biến đổi tích thành tổng: $P = \\dfrac{1}{2}[\\cos(75^\\circ - 15^\\circ) + \\cos(75^\\circ + 15^\\circ)] = \\dfrac{1}{2}[\\cos 60^\\circ + \\cos 90^\\circ] = \\dfrac{1}{2}\\left(\\dfrac{1}{2} + 0\\right) = \\dfrac{1}{4}$. Đáp án A."
      },
      {
        id: "mc-11-2-4",
        question: "Rút gọn biểu thức $S = \\sin 3x + \\sin x$ ta được kết quả là:",
        prompt: "Rút gọn biểu thức $S = \\sin 3x + \\sin x$ ta được kết quả là:",
        options: [
          "$2\\cos 2x \\sin x$",
          "$-2\\sin 2x \\cos x$",
          "$2\\sin 2x \\cos x$",
          "$4\\sin x \\cos x$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        hint: "Áp dụng công thức Sin cộng Sin: sin u + sin v = 2 sin((u+v)/2) cos((u-v)/2).",
        explain: "Ta có: $S = \\sin 3x + \\sin x = 2\\sin\\dfrac{3x+x}{2}\\cos\\dfrac{3x-x}{2} = 2\\sin 2x \\cos x$. Đáp án C."
      },
      {
        id: "mc-11-2-5",
        question: "Biên độ âm $k$ của sóng âm kết hợp $f(t) = 3\\sin t + 4\\cos t$ bằng:",
        prompt: "Biên độ âm $k$ của sóng âm kết hợp $f(t) = 3\\sin t + 4\\cos t$ bằng:",
        options: [
          "$k = 7$",
          "$k = 5$",
          "$k = 1$",
          "$k = 12$"
        ],
        correctIndex: 1,
        correctAnswer: "B",
        hint: "Biên độ của a*sin(t) + b*cos(t) bằng sqrt(a^2 + b^2).",
        explain: "Ta có: $f(t) = \\sqrt{3^2 + 4^2}\\left(\\dfrac{3}{5}\\sin t + \\dfrac{4}{5}\\cos t\\right) = 5\\sin(t + \\varphi)$. Biên độ $k = \\sqrt{3^2 + 4^2} = 5$. Đáp án B."
      }
    ],

    // DẠNG 2: TRẮC NGHIỆM ĐÚNG / SAI (3 CÂU LỚN)
    part2TrueFalse: [
      {
        id: "tf-11-2-1",
        prompt: "Cho góc $\\alpha$ thoả mãn $\\sin\\alpha = \\dfrac{3}{5}$ và $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          {
            id: "tf-11-2-1-a",
            text: "Giá trị của $\\cos\\alpha = -\\dfrac{4}{5}$.",
            correct: true,
            explain: "Vì $\\dfrac{\\pi}{2} < \\alpha < \\pi$ nên $\\cos\\alpha < 0$. $\\cos\\alpha = -\\sqrt{1 - (3/5)^2} = -\\dfrac{4}{5}$. Mệnh đề này ĐÚNG."
          },
          {
            id: "tf-11-2-1-b",
            text: "Giá trị của $\\sin 2\\alpha = -\\dfrac{24}{25}$.",
            correct: true,
            explain: "$\\sin 2\\alpha = 2\\sin\\alpha \\cos\\alpha = 2 \\cdot \\dfrac{3}{5} \\cdot \\left(-\\dfrac{4}{5}\\right) = -\\dfrac{24}{25}$. Mệnh đề này ĐÚNG."
          },
          {
            id: "tf-11-2-1-c",
            text: "Giá trị của $\\cos 2\\alpha = \\dfrac{7}{25}$.",
            correct: true,
            explain: "$\\cos 2\\alpha = 1 - 2\\sin^2\\alpha = 1 - 2 \\cdot \\dfrac{9}{25} = \\dfrac{7}{25}$. Mệnh đề này ĐÚNG."
          },
          {
            id: "tf-11-2-1-d",
            text: "Góc $2\\alpha$ thuộc góc phần tư thứ III trên đường tròn lượng giác.",
            correct: false,
            explain: "Vì $\\cos 2\\alpha = \\dfrac{7}{25} > 0$ và $\\sin 2\\alpha = -\\dfrac{24}{25} < 0$ nên điểm biểu diễn góc $2\\alpha$ thuộc góc phần tư thứ IV. Mệnh đề này SAI."
          }
        ]
      },
      {
        id: "tf-11-2-2",
        prompt: "Xét biểu thức $P = \\cos(x + y)\\cos(x - y)$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          {
            id: "tf-11-2-2-a",
            text: "Biến đổi tích thành tổng ta được $P = \\dfrac{1}{2}\\left(\\cos 2x + \\cos 2y\\right)$.",
            correct: true,
            explain: "Áp dụng công thức tích cos thành tổng: $P = \\dfrac{1}{2}[\\cos((x+y)-(x-y)) + \\cos((x+y)+(x-y))] = \\dfrac{1}{2}(\\cos 2y + \\cos 2x)$. Mệnh đề này ĐÚNG."
          },
          {
            id: "tf-11-2-2-b",
            text: "Biểu thức $P$ có thể viết lại thành $P = \\cos^2 x - \\sin^2 y$.",
            correct: true,
            explain: "$P = \\dfrac{1}{2}(2\\cos^2 x - 1 + 1 - 2\\sin^2 y) = \\cos^2 x - \\sin^2 y$. Mệnh đề này ĐÚNG."
          },
          {
            id: "tf-11-2-2-c",
            text: "Biểu thức $P$ cũng luôn bằng $\\cos^2 y - \\sin^2 x$.",
            correct: true,
            explain: "Thay $\\cos^2 x = 1 - \\sin^2 x$ và $\\sin^2 y = 1 - \\cos^2 y \\implies (1 - \\sin^2 x) - (1 - \\cos^2 y) = \\cos^2 y - \\sin^2 x$. Mệnh đề này ĐÚNG."
          },
          {
            id: "tf-11-2-2-d",
            text: "Khi $x = y = \\dfrac{\\pi}{4}$ thì giá trị của $P = \\dfrac{1}{2}$.",
            correct: false,
            explain: "Khi $x = y = \\dfrac{\\pi}{4}$, $P = \\cos\\dfrac{\\pi}{2}\\cos 0 = 0 \\cdot 1 = 0$. Mệnh đề này SAI."
          }
        ]
      },
      {
        id: "tf-11-2-3",
        prompt: "Theo công nghệ DTMF (Hình 1.13 SGK), tín hiệu âm thanh bàn phím cảm ứng được biểu diễn bởi $y = \\sin(2\\pi f_1 t) + \\sin(2\\pi f_2 t)$. Xét tính Đúng/Sai:",
        items: [
          {
            id: "tf-11-2-3-a",
            text: "Khi nhấn phím 4, tần số thấp là $770\\text{ Hz}$ và tần số cao là $1209\\text{ Hz}$.",
            correct: true,
            explain: "Phím 4 thuộc hàng 2 (770 Hz) và cột 1 (1209 Hz). Mệnh đề này ĐÚNG."
          },
          {
            id: "tf-11-2-3-b",
            text: "Hàm sóng âm phím 4 biến đổi thành tích là $y = 2\\sin(1979\\pi t)\\cos(439\\pi t)$.",
            correct: true,
            explain: "Áp dụng sin cộng sin: $2\\sin((1540+2418)\\pi t / 2)\\cos((1540-2418)\\pi t / 2) = 2\\sin(1979\\pi t)\\cos(439\\pi t)$. Mệnh đề này ĐÚNG."
          },
          {
            id: "tf-11-2-3-c",
            text: "Khi nhấn phím 8, tần số thấp được kích hoạt là $852\\text{ Hz}$ và tần số cao là $1336\\text{ Hz}$.",
            correct: true,
            explain: "Phím 8 thuộc hàng 3 (852 Hz) và cột 2 (1336 Hz). Mệnh đề này ĐÚNG."
          },
          {
            id: "tf-11-2-3-d",
            text: "Sóng âm kết hợp khi nhấn phím 8 có biên độ dao động cực đại bằng 4.",
            correct: false,
            explain: "Vì $y = 2\\sin(2188\\pi t)\\cos(484\\pi t)$, biên độ dao động cực đại của sóng âm kết hợp là 2, không phải 4. Mệnh đề này SAI."
          }
        ]
      }
    ],

    // DẠNG 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (3 CÂU)
    part3ShortAnswer: [
      {
        id: "sa-11-2-1",
        question: "Tính giá trị số của biểu thức $A = \\tan 75^\\circ + \\tan 15^\\circ$.",
        prompt: "Tính giá trị số của biểu thức $A = \\tan 75^\\circ + \\tan 15^\\circ$ (kết quả là một số nguyên):",
        correctAnswer: "4",
        acceptableAnswers: ["4", "4.0", "4,0"],
        hint: "Ta có: tan 75° = 2 + sqrt(3) và tan 15° = 2 - sqrt(3).",
        explain: "Ta có: $\\tan 75^\\circ = \\tan(45^\\circ + 30^\\circ) = 2 + \\sqrt{3}$; $\\tan 15^\\circ = \\tan(45^\\circ - 30^\\circ) = 2 - \\sqrt{3}$. Do đó: $A = (2 + \\sqrt{3}) + (2 - \\sqrt{3}) = 4$. Đáp số là 4."
      },
      {
        id: "sa-11-2-2",
        question: "Tính giá trị của biểu thức $B = \\sin 10^\\circ \\sin 50^\\circ \\sin 70^\\circ$ dưới dạng số thập phân.",
        prompt: "Tính giá trị số của $B = \\sin 10^\\circ \\sin 50^\\circ \\sin 70^\\circ$ (viết dưới dạng số thập phân, ví dụ 0.125):",
        correctAnswer: "0.125",
        acceptableAnswers: ["0.125", "0,125", "1/8"],
        hint: "Biến đổi tích thành tổng: sin 50° sin 70° = 1/2 [cos 20° - cos 120°].",
        explain: "Ta có: $\\sin 50^\\circ \\sin 70^\\circ = \\dfrac{1}{2}[\\cos 20^\\circ - \\cos 120^\\circ] = \\dfrac{1}{2}\\left(\\cos 20^\\circ + \\dfrac{1}{2}\\right)$. Do đó: $B = \\sin 10^\\circ \\cdot \\dfrac{1}{2}\\left(\\cos 20^\\circ + \\dfrac{1}{2}\\right) = \\dfrac{1}{4}\\sin 10^\\circ + \\dfrac{1}{2}\\sin 10^\\circ \\cos 20^\\circ = \\dfrac{1}{4}\\sin 10^\\circ + \\dfrac{1}{4}[\\sin 30^\\circ - \\sin 10^\\circ] = \\dfrac{1}{4}\\sin 30^\\circ = \\dfrac{1}{4} \\cdot \\dfrac{1}{2} = \\dfrac{1}{8} = 0{,}125$."
      },
      {
        id: "sa-11-2-3",
        question: "Biên độ của dao động điều hòa tổng hợp $x(t) = 5\\sin(100\\pi t) + 12\\cos(100\\pi t)$ (đơn vị cm) bằng bao nhiêu?",
        prompt: "Biên độ dao động tổng hợp bằng bao nhiêu cm (điền số nguyên):",
        correctAnswer: "13",
        acceptableAnswers: ["13", "13 cm"],
        hint: "Áp dụng định lý Pythagoras tính biên độ: A = sqrt(5^2 + 12^2).",
        explain: "Biên độ dao động tổng hợp là $A = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\text{ cm}$."
      }
    ]
  }
};

// Global Aliases & Auto-Inject for Compatibility
window.CURRENT_LESSON_DATA = window.LESSON_11_C1_B2_DATA;
window.LESSON_DATA = window.LESSON_11_C1_B2_DATA;
window.B11_2_DATA = window.LESSON_11_C1_B2_DATA;

if (typeof window !== "undefined" && window.LESSONS_DATABASE) {
  for (var gradeKey in window.LESSONS_DATABASE) {
    var g = window.LESSONS_DATABASE[gradeKey];
    if (g && Array.isArray(g.chapters)) {
      for (var i = 0; i < g.chapters.length; i++) {
        var ch = g.chapters[i];
        if (ch && Array.isArray(ch.lessons)) {
          var idx = ch.lessons.findIndex(function(l) { return l.id === "11-c1-b2"; });
          if (idx !== -1) {
            ch.lessons[idx] = window.LESSON_11_C1_B2_DATA;
            break;
          }
        }
      }
    }
  }
}
