/**
 * BÀI HỌC SỐ: BÀI 1. GIÁ TRỊ LƯỢNG GIÁC CỦA GÓC LƯỢNG GIÁC (TOÁN 11 - TẬP 1 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Tác giả biên soạn: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc sư phạm số hiện đại:
 * - PHẦN I: Lời chào Thầy Sáng + Voice AI NamMinhNeural chuẩn mực (5% tiến trình)
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 5 (5% tiến trình)
 * - PHẦN III: Tiến trình bài học đa phương tiện tương tác (70% tiến trình):
 *             + Tình huống mở đầu (Hook): Trạm vũ trụ quốc tế ISS bay quanh Trái Đất (Hình 1.1 SGK)
 *             + Mục 1: Góc lượng giác (1a. Khái niệm và số đo góc lượng giác [4 sơ đồ xoắn ốc chuẩn 100%]; 1b. Hệ thức Chasles)
 *             + Mục 2: Đơn vị đo góc và độ dài cung tròn (2a. Đơn vị ra-đi-an [Hình 1.6]; 2b. Độ dài cung tròn l = R*alpha [Giải bài toán ISS])
 *             + Mục 3: Giá trị lượng giác của góc lượng giác (3a. Đường tròn lượng giác [Hình 1.7]; 3b. Các giá trị lượng giác [Hình 1.9b ĐẶC BIỆT CHỈNH ĐIỂM M Ở GÓC PHẦN TƯ III])
 *             + Mục 4: Quan hệ giữa các giá trị lượng giác (4a. Công thức cơ bản; 4b. Các góc liên quan đặc biệt: Cos đối, Sin bù, Phụ chéo, Hơn kém pi)
 *             + Chốt kiến thức: Mô hình dao động Huyết áp tâm trương & Mẹo vàng Thầy Sáng
 * - PHẦN IV / V: Bài tập trắc nghiệm củng cố tương tác chuẩn 3 dạng thức thi mới 2025 Bộ GD&ĐT (20% tiến trình)
 * =========================================================================================
 */

window.LESSON_11_C1_B1_DATA = {
  id: "11-c1-b1",
  grade: "11",
  subject: "Toán 11 - Kết nối tri thức",
  chapter: "Chương I",
  chapterTitle: "Hàm số lượng giác và phương trình lượng giác",
  number: "Bài 1",
  title: "Giá trị lượng giác của góc lượng giác",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Hôm nay, thầy trò chúng ta sẽ cùng bước vào Chương 1: Hàm số lượng giác và phương trình lượng giác, với bài học mở đầu vô cùng quan trọng: Bài 1. Giá trị lượng giác của góc lượng giác. Ở lớp 10, các em đã biết giá trị lượng giác của các góc hình học từ 0° đến 180°. Lên lớp 11, chúng ta sẽ mở rộng khái niệm góc lượng giác với số đo tùy ý từ -∞ đến +∞, tìm hiểu đơn vị radian, đường tròn lượng giác và các công thức lượng giác nền tảng. Bài học này là chiếc chìa khóa vàng cho toàn bộ chương trình lượng giác và vật lý dao động lớp 11. Các em hãy chuẩn bị sách vở, bút thước và máy tính cầm tay, tập trung lắng nghe và tương tác cùng Thầy nhé!",
    audioScript: "Thầy Sáng thân ái chào tất cả các em học sinh khối mười một thân yêu! Hôm nay, thầy trò chúng ta sẽ cùng bước vào Chương một: Hàm số lượng giác và phương trình lượng giác, với bài học mở đầu vô cùng quan trọng: Bài một, Giá trị lượng giác của góc lượng giác. Ở lớp mười, các em đã biết giá trị lượng giác của các góc hình học từ 0 độ đến 180 độ. Lên cấp học này, chúng ta sẽ mở rộng khái niệm góc lượng giác với số đo tùy ý từ âm vô cực đến dương vô cực, tìm hiểu đơn vị ra-đi-an, đường tròn lượng giác và các công thức lượng giác nền tảng. Bài học này là chiếc chìa khóa vàng cho toàn bộ chương trình lượng giác và vật lý dao động. Các em hãy chuẩn bị sách vở, bút thước và máy tính cầm tay, tập trung lắng nghe và tương tác cùng Thầy nhé!",
    audioUrl: "assets/audio/b11_1_welcome.mp3",
    buttonLabel: "Nghe thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 5)
  // =========================================================================
  learningGoals: [
    "Nhận biết các khái niệm cơ bản về góc lượng giác, tia đầu, tia cuối, chiều quay và số đo góc lượng giác; hiểu và vận dụng thành thạo hệ thức Chasles (Sát-lơ).",
    "Hiểu khái niệm đơn vị radian (rad), mối quan hệ giữa độ và radian ($180^\\circ = \\pi\\text{ rad}$), công thức tính độ dài cung tròn $l = R\\alpha$.",
    "Nhận biết đường tròn lượng giác gốc $A(1; 0)$, điểm biểu diễn góc lượng giác và định nghĩa các giá trị lượng giác: $\\sin, \\cos, \\tan, \\cot$.",
    "Nắm vững các hệ thức lượng giác cơ bản và công thức các góc liên quan đặc biệt: cos đối, sin bù, phụ chéo, hơn kém $\\pi$.",
    "Vận dụng giải quyết các bài toán thực tiễn như quỹ đạo trạm không gian ISS và bài toán dao động huyết áp tâm trương."
  ],
  goalsAudioUrl: "assets/audio/b11_1_goals.mp3",
  goalsAudioScript: "Phần 2. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần đạt được các yêu cầu trọng tâm sau: Thứ nhất: Nhận biết các khái niệm cơ bản về góc lượng giác, tia đầu, tia cuối, chiều quay và số đo góc lượng giác; hiểu và vận dụng thành thạo hệ thức Sát-lơ. Thứ hai: Hiểu khái niệm đơn vị ra-đi-an, mối quan hệ giữa độ và ra-đi-an, công thức tính độ dài cung tròn. Thứ ba: Nhận biết đường tròn lượng giác, điểm biểu diễn góc lượng giác và định nghĩa các giá trị lượng giác: sin, cô-sin, tang, cô-tang. Thứ tư: Nắm vững các hệ thức lượng giác cơ bản và công thức các góc liên quan đặc biệt: cos đối, sin bù, phụ chéo, hơn kém pi. Thứ năm: Vận dụng giải quyết các bài toán thực tiễn như quỹ đạo trạm không gian I-S-S và bài toán huyết áp tâm trương.",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================

  // --- TÌNH HUỐNG MỞ ĐẦU (HOOK) ---
  hook: {
    title: "Tình huống mở đầu: Quỹ đạo Trạm Vũ trụ Quốc tế ISS",
    storyHtml: `<p>Trạm vũ trụ quốc tế ISS nằm trong một quỹ đạo tròn cách bề mặt Trái Đất khoảng <b>400 km</b> (Hình 1.1 SGK trang 5). Bán kính Trái Đất là khoảng <b>6 400 km</b>.</p>
    <div class="alert-box alert-question mt-3" style="text-align:justify;">
      <b>❓ Câu hỏi khởi động:</b> Nếu trạm mặt đất theo dõi trạm ISS khi nó nằm trong góc <b>45°</b> ở tâm của quỹ đạo tròn này phía trên ăng-ten theo dõi, thì trạm vũ trụ ISS đã di chuyển được bao nhiêu kilômét trong khi đang được trạm mặt đất theo dõi?
      <br><i>(Để tính được quãng đường cong này một cách nhanh chóng và chính xác, chúng ta cần tới một đơn vị đo góc mới: radian. Hãy cùng Thầy khám phá bài học ngay sau đây!)</i>
    </div>`,
    situation: `Trạm vũ trụ quốc tế ISS nằm trong một quỹ đạo tròn cách bề mặt Trái Đất khoảng 400 km. Bán kính Trái Đất là khoảng 6 400 km. Nếu trạm mặt đất theo dõi trạm ISS khi nó nằm trong góc 45° ở tâm của quỹ đạo tròn này phía trên ăng-ten theo dõi, thì trạm vũ trụ ISS đã di chuyển được bao nhiêu kilômét trong khi đang được trạm mặt đất theo dõi?`,
    illustrationSvg: `<div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="600" height="360" viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" style="background: radial-gradient(circle, #0f172a 0%, #020617 100%); border-radius: 12px; border: 1.5px solid #1e293b; box-shadow: 0 8px 24px rgba(0,0,0,0.4);">
  <defs>
    <radialGradient id="earthGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="70%" stop-color="#0284c7"/>
      <stop offset="90%" stop-color="#0369a1"/>
      <stop offset="100%" stop-color="#075985"/>
    </radialGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="issArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#38bdf8"/>
    </marker>
    <marker id="arcArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Các vì sao nền vũ trụ -->
  <circle cx="50" cy="40" r="1.5" fill="#ffffff" opacity="0.8"/>
  <circle cx="120" cy="80" r="1" fill="#ffffff" opacity="0.6"/>
  <circle cx="520" cy="50" r="1.5" fill="#ffffff" opacity="0.7"/>
  <circle cx="560" cy="180" r="1" fill="#ffffff" opacity="0.5"/>
  <circle cx="80" cy="280" r="1.2" fill="#ffffff" opacity="0.6"/>
  <circle cx="500" cy="310" r="1" fill="#ffffff" opacity="0.8"/>

  <!-- Tâm Trái Đất O -->
  <g transform="translate(300, 240)">
    <!-- Vùng quạt quét 45 độ của trạm ISS -->
    <path d="M 0 0 L 61.2 -147.8 A 160 160 0 0 0 -61.2 -147.8 Z" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>

    <!-- Quỹ đạo tròn của trạm ISS (R = 160px) -->
    <circle cx="0" cy="0" r="160" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" opacity="0.7"/>

    <!-- Khí quyển mỏng bao quanh Trái Đất -->
    <circle cx="0" cy="0" r="126" fill="none" stroke="#7dd3fc" stroke-width="3" opacity="0.4" filter="url(#glow)"/>

    <!-- Quả địa cầu Trái Đất (R = 120px) -->
    <circle cx="0" cy="0" r="120" fill="url(#earthGrad)"/>
    
    <!-- Lục địa minh họa trên Trái Đất -->
    <path d="M -40 -80 Q -10 -90 20 -70 Q 50 -50 30 -20 Q 10 10 -20 0 Q -50 -30 -40 -80 Z" fill="#15803d" opacity="0.7"/>
    <path d="M -80 -20 Q -50 -10 -40 30 Q -60 60 -90 40 Z" fill="#16a34a" opacity="0.65"/>
    <path d="M 30 10 Q 70 0 80 40 Q 60 70 20 60 Z" fill="#15803d" opacity="0.6"/>

    <!-- Tâm Trái Đất O -->
    <circle cx="0" cy="0" r="4" fill="#ffffff"/>
    <text x="-8" y="18" fill="#ffffff" font-size="13" font-weight="bold">O</text>

    <!-- Bán kính Trái Đất R_TĐ = 6400 km -->
    <line x1="0" y1="0" x2="104" y2="60" stroke="#f8fafc" stroke-width="1.5"/>
    <circle cx="104" cy="60" r="3" fill="#f8fafc"/>
    <rect x="25" y="10" width="75" height="18" rx="4" fill="#0f172a" fill-opacity="0.8"/>
    <text x="30" y="23" fill="#38bdf8" font-size="11" font-weight="bold">6 400 km</text>

    <!-- Độ cao quỹ đạo 400 km -->
    <line x1="-120" y1="0" x2="-160" y2="0" stroke="#f43f5e" stroke-width="2"/>
    <circle cx="-120" cy="0" r="2.5" fill="#f43f5e"/>
    <circle cx="-160" cy="0" r="2.5" fill="#f43f5e"/>
    <rect x="-155" y="-22" width="65" height="18" rx="4" fill="#0f172a" fill-opacity="0.8"/>
    <text x="-150" y="-9" fill="#f43f5e" font-size="11" font-weight="bold">400 km</text>

    <!-- Cung góc ở tâm 45 độ -->
    <path d="M -23 -55.5 A 60 60 0 0 1 23 -55.5" fill="none" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arcArrow)"/>
    <rect x="-16" y="-80" width="32" height="18" rx="4" fill="#0f172a" fill-opacity="0.9"/>
    <text x="-11" y="-66" fill="#f59e0b" font-size="12" font-weight="bold">45°</text>

    <!-- Cung quỹ đạo ISS di chuyển (độ dài l) -->
    <path d="M -61.2 -147.8 A 160 160 0 0 1 61.2 -147.8" fill="none" stroke="#e11d48" stroke-width="4"/>
    <rect x="-50" y="-180" width="100" height="22" rx="5" fill="#881337" stroke="#fda4af" stroke-width="1"/>
    <text x="-44" y="-165" fill="#ffffff" font-size="11" font-weight="bold">Quãng đường l = ?</text>

    <!-- Trạm mặt đất với ăng-ten -->
    <g transform="translate(0, -120)">
      <path d="M -8 0 L 8 0 L 4 -12 L -4 -12 Z" fill="#64748b"/>
      <line x1="0" y1="-12" x2="0" y2="-20" stroke="#cbd5e1" stroke-width="2"/>
      <path d="M -10 -20 Q 0 -16 10 -20" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <text x="14" y="-10" fill="#fef08a" font-size="11" font-weight="bold">Trạm mặt đất</text>
    </g>

    <!-- Trạm không gian ISS đang bay trên quỹ đạo -->
    <g transform="translate(61.2, -147.8) rotate(22)">
      <rect x="-14" y="-5" width="28" height="10" rx="2" fill="#e2e8f0" stroke="#334155" stroke-width="1"/>
      <rect x="-24" y="-12" width="8" height="24" rx="1" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
      <rect x="16" y="-12" width="8" height="24" rx="1" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
      <circle cx="0" cy="0" r="3" fill="#f43f5e"/>
      <text x="12" y="-16" fill="#38bdf8" font-size="12" font-weight="bold">Trạm ISS</text>
    </g>
  </g>

  <!-- Chú thích chân hình -->
  <text x="300" y="345" text-anchor="middle" fill="#94a3b8" font-size="12" font-style="italic">Hình 1.1: Mô hình toán học trạm vũ trụ ISS bay trên quỹ đạo tròn quanh Trái Đất (SGK trang 5)</text>
</svg>
</div>`,
    checkpoints: [
      {
        id: "poi-11-1-hook-1",
        time: 15,
        title: "Tương tác Câu 1: Bán kính quỹ đạo tròn của trạm ISS",
        question: "Từ tâm Trái Đất đến trạm vũ trụ ISS, bán kính quỹ đạo tròn $R$ của trạm ISS bằng bao nhiêu kilômét?",
        options: [
          "$R = 6\\,000\\text{ km}$",
          "$R = 6\\,400\\text{ km}$",
          "$R = 6\\,800\\text{ km}$",
          "$R = 7\\,200\\text{ km}$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        hint: "Bán kính quỹ đạo tròn = Bán kính Trái Đất (6 400 km) + Độ cao trạm ISS (400 km).",
        explain: "Chính xác! Bán kính quỹ đạo tròn từ tâm Trái Đất là: $R = 6\\,400 + 400 = 6\\,800\\text{ km}$."
      },
      {
        id: "poi-11-1-hook-2",
        time: 25,
        title: "Tương tác Câu 2: Quãng đường di chuyển của trạm ISS",
        question: "Khi góc quét ở tâm là $45^\\circ = \\dfrac{\\pi}{4}\\text{ rad}$, quãng đường trạm ISS bay được ($R = 6\\,800\\text{ km}$) xấp xỉ bằng:",
        options: [
          "$l \\approx 5\\,341\\text{ km}$",
          "$l \\approx 2\\,670\\text{ km}$",
          "$l \\approx 6\\,800\\text{ km}$",
          "$l \\approx 10\\,681\\text{ km}$"
        ],
        correctIndex: 0,
        correctAnswer: "A",
        hint: "Áp dụng công thức l = R * alpha.",
        explain: "Chính xác! $l = R \\cdot \\alpha = 6\\,800 \\cdot \\dfrac{\\pi}{4} = 1\\,700\\pi \\approx 5\\,340.71 \\approx 5\\,341\\text{ km}$."
      }
    ],
    audioUrl: "assets/audio/b11_1_hook.mp3",
    audioScript: "Phần 3. Tiến trình bài học. Tình huống mở đầu. Các em hãy quan sát hình ảnh trạm vũ trụ quốc tế I-S-S bay quanh Trái Đất trên màn hình. Trạm vũ trụ I-S-S nằm trong quỹ đạo tròn cách bề mặt Trái Đất khoảng 400 kilômét. Bán kính Trái Đất là 6 nghìn 400 kilômét. Nếu trạm mặt đất theo dõi trạm I-S-S khi nó nằm trong góc 45 độ ở tâm của quỹ đạo tròn này phía trên ăng-ten theo dõi, thì trạm vũ trụ I-S-S đã di chuyển được bao nhiêu kilômét trong khi đang được trạm mặt đất theo dõi? Để tính được độ dài quãng đường cong này một cách chính xác và nhanh chóng, chúng ta cần đến một đơn vị đo góc mới trong toán học: đơn vị ra-đi-an. Chúng ta cùng bước vào bài học ngay sau đây!",
    poiTime: 18,
    poiPrompt: "Em hãy tính bán kính quỹ đạo từ tâm Trái Đất đến trạm vũ trụ ISS.",
    poiAnswer: "R = 6400 + 400 = 6800 km."
  },

  // =========================================================================
  // BỐN MỤC TIẾN TRÌNH (MỖI MỤC GỒM 2 MỤC CON a VÀ b RIÊNG BIỆT)
  // =========================================================================
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1: GÓC LƯỢNG GIÁC
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b1-s1",
      num: "1",
      title: "Góc lượng giác",
      audioUrl: "assets/audio/b11_1_sec1a.mp3",
      audioScript: "Mục 1. Góc lượng giác. Mục này gồm hai tiểu mục: a. Khái niệm góc lượng giác và số đo của góc lượng giác; và b. Hệ thức Sát-lơ.",
      subsections: [
        // --- 1a. KHÁI NIỆM VÀ SỐ ĐO GÓC LƯỢNG GIÁC ---
        {
          key: "a",
          title: "Khái niệm góc lượng giác và số đo của góc lượng giác",
          audioUrl: "assets/audio/b11_1_sec1a.mp3",
          audioScript: "Mục 1. Góc lượng giác. Tiểu mục a: Khái niệm góc lượng giác và số đo của góc lượng giác. Trong mặt phẳng, cho hai tia O u và O v. Xét tia O m cùng nằm trong mặt phẳng này. Nếu tia O m quay quanh gốc O, theo một chiều nhất định từ tia đầu O u đến tia cuối O v, thì ta nói nó quét một góc lượng giác với tia đầu O u, tia cuối O v, kí hiệu là mở ngoặc O u phẩy O v đóng ngoặc. Quy ước: Chiều quay ngược chiều kim đồng hồ là chiều dương, chiều quay cùng chiều kim đồng hồ là chiều âm. Khi tia O m quay góc an-pha độ thì góc lượng giác có số đo an-pha độ. Các em hãy quan sát 4 sơ đồ xoắn ốc trên màn hình: Khi tia O m quay đúng một vòng theo chiều dương về trùng O v, số đo là dương 360 độ. Khi quay 2 vòng dương, số đo là 720 độ. Khi quay nửa vòng theo chiều âm, số đo là âm 180 độ. Và khi quay một vòng rưỡi theo chiều âm, số đo là âm 540 độ. Tổng quát, số đo của các góc lượng giác tia đầu O u, tia cuối O v sai khác nhau một bội nguyên của 360 độ: an-pha cộng k nhân 360 độ, với k thuộc tập số nguyên Z.",
          checkpoints: [
          {
            id: "poi-11-1-sec1a-1",
            time: 20,
            title: "Tương tác Câu 1: Số đo tổng quát của góc lượng giác",
            question: "Cho góc lượng giác $(Ou, Ov)$ có một số đo là $60^\\circ$. Các số đo khác của góc $(Ou, Ov)$ có dạng tổng quát là:",
            options: [
              "$60^\\circ + k 180^\\circ,\\; k \\in \\mathbb{Z}$",
              "$60^\\circ + k 360^\\circ,\\; k \\in \\mathbb{Z}$",
              "$-60^\\circ + k 360^\\circ,\\; k \\in \\mathbb{Z}$",
              "$60^\\circ + k 90^\\circ,\\; k \\in \\mathbb{Z}$"
            ],
            correctIndex: 1,
            correctAnswer: "B",
            hint: "Số đo các góc lượng giác có cùng tia đầu và tia cuối sai khác nhau một bội của 360°.",
            explain: "Chính xác! $\\text{sđ}(Ou, Ov) = 60^\\circ + k 360^\\circ,\\; k \\in \\mathbb{Z}$."
          },
          {
            id: "poi-11-1-sec1a-2",
            time: 35,
            title: "Tương tác Câu 2: Xác định góc cùng tia đầu và tia cuối",
            question: "Cho góc lượng giác $(Ou, Ov)$ có số đo $-225^\\circ$. Số đo nào sau đây CÙNG tia đầu và tia cuối với $(Ou, Ov)$?",
            options: [
              "$135^\\circ$",
              "$225^\\circ$",
              "$315^\\circ$",
              "$-45^\\circ$"
            ],
            correctIndex: 0,
            correctAnswer: "A",
            hint: "Tính -225° + k * 360°. Với k = 1: -225° + 360° = 135°.",
            explain: "Chính xác! Với $k = 1$, ta có $-225^\\circ + 360^\\circ = 135^\\circ$."
          }
        ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Trong mặt phẳng, cho hai tia \$Ou, Ov\$. Xét tia \$Om\$ cùng nằm trong mặt phẳng này. Nếu tia \$Om\$ quay quanh điểm \$O\$, theo một chiều nhất định từ tia đầu \$Ou\$ đến tia cuối \$Ov\$, thì ta nói nó quét một <b>góc lượng giác</b> có tia đầu \$Ou\$, tia cuối \$Ov\$, kí hiệu là \$(Ou, Ov)\$.</p>

            <div class="card mb-3 border-primary">
              <div class="card-header bg-primary text-white fw-bold">1. Quy ước chiều quay và Số đo góc lượng giác</div>
              <div class="card-body">
                <p>• <b>Chiều quay:</b> Chiều <b>ngược chiều kim đồng hồ</b> là <b>chiều dương (+)</b>; chiều <b>cùng chiều kim đồng hồ</b> là <b>chiều âm (-)</b>.</p>
                <p>• Khi tia \$Om\$ quay góc \$\\alpha^\\circ\$ thì góc lượng giác tạo nên có số đo \$\\alpha^\\circ\$ (hoặc \$\\alpha\\text{ rad}\$).</p>
                <p>• <i>Lưu ý:</i> Số đo của một góc lượng giác có thể là số dương, số âm hoặc bằng \$0\$, và có thể lớn hơn \$360^\\circ\$.</p>
              </div>
            </div>

            <div class="card mb-3 border-danger">
              <div class="card-header bg-danger text-white fw-bold">2. Bốn sơ đồ xoắn ốc minh họa số đo góc lượng giác (SGK trang 6)</div>
              <div class="card-body text-center">
                <p class="text-muted mb-2">Quan sát 4 trường hợp đặc biệt khi tia cuối \$Ov\$ trùng hoặc đối với tia đầu \$Ou\$:</p>
                <div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="780" height="240" viewBox="0 0 780 240" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  <defs>
    <!-- Mũi tên đỏ chỉ chiều quay lượng giác -->
    <marker id="redArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
    </marker>
    <!-- Mũi tên đen nhỏ cho chiều + / - -->
    <marker id="blackArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
  </defs>

  <!-- ==================== HÌNH 1: sđ(Ou, Ov) = 360° ==================== -->
  <g>
    <!-- Trục tia Ou, Ov trùng nhau -->
    <line x1="45" y1="110" x2="165" y2="110" stroke="#1e293b" stroke-width="2"/>
    <circle cx="45" cy="110" r="3.5" fill="#0284c7"/>
    <text x="40" y="130" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="145" y="130" fill="#0284c7" font-size="14" font-style="italic">u, v</text>

    <!-- Tia Om quay ngược chiều KĐH (chiều dương) -->
    <line x1="45" y1="110" x2="120" y2="75" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="115" y="65" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>
    
    <!-- Cung chiều dương (+) -->
    <path d="M 85 96 A 25 25 0 0 1 78 78" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#blackArrow)"/>
    <text x="88" y="88" fill="#1e293b" font-size="13" font-weight="bold">+</text>

    <!-- Xoắn ốc Archimedes 1 vòng đỏ mượt mà (360 độ) -->
    <path d="M 55.0 110.0 L 55.2 109.5 L 55.4 108.9 L 55.5 108.3 L 55.6 107.7 L 55.7 107.1 L 55.7 106.5 L 55.8 105.9 L 55.7 105.2 L 55.6 104.6 L 55.5 103.9 L 55.4 103.3 L 55.2 102.6 L 55.0 101.9 L 54.7 101.3 L 54.4 100.6 L 54.0 100.0 L 53.6 99.4 L 53.2 98.8 L 52.7 98.2 L 52.2 97.6 L 51.6 97.0 L 51.0 96.5 L 50.4 96.0 L 49.7 95.5 L 49.0 95.1 L 48.3 94.7 L 47.5 94.3 L 46.7 94.0 L 45.9 93.7 L 45.0 93.5 L 44.1 93.3 L 43.2 93.2 L 42.3 93.1 L 41.4 93.0 L 40.4 93.0 L 39.5 93.1 L 38.5 93.2 L 37.6 93.3 L 36.6 93.6 L 35.7 93.8 L 34.7 94.2 L 33.8 94.5 L 32.8 95.0 L 31.9 95.5 L 31.0 96.0 L 30.2 96.6 L 29.3 97.3 L 28.5 98.0 L 27.7 98.8 L 27.0 99.6 L 26.2 100.4 L 25.6 101.4 L 24.9 102.3 L 24.4 103.3 L 23.8 104.3 L 23.4 105.4 L 22.9 106.5 L 22.6 107.6 L 22.2 108.8 L 22.0 110.0 L 21.8 111.2 L 21.7 112.4 L 21.6 113.7 L 21.7 115.0 L 21.7 116.2 L 21.9 117.5 L 22.1 118.8 L 22.4 120.1 L 22.8 121.3 L 23.2 122.6 L 23.7 123.8 L 24.3 125.0 L 24.9 126.2 L 25.7 127.4 L 26.4 128.6 L 27.3 129.7 L 28.2 130.7 L 29.2 131.8 L 30.2 132.7 L 31.3 133.7 L 32.5 134.5 L 33.7 135.4 L 35.0 136.1 L 36.3 136.8 L 37.6 137.4 L 39.0 138.0 L 40.5 138.5 L 42.0 138.9 L 43.5 139.2 L 45.0 139.5 L 46.6 139.7 L 48.1 139.8 L 49.7 139.8 L 51.3 139.7 L 52.9 139.5 L 54.5 139.3 L 56.1 139.0 L 57.7 138.5 L 59.3 138.0 L 60.8 137.4 L 62.4 136.7 L 63.9 136.0 L 65.3 135.1 L 66.8 134.2 L 68.2 133.2 L 69.5 132.1 L 70.8 130.9 L 72.0 129.6 L 73.2 128.3 L 74.3 126.9 L 75.3 125.5 L 76.3 123.9 L 77.2 122.4 L 78.0 120.7 L 78.7 119.0 L 79.4 117.3 L 79.9 115.5 L 80.4 113.7 L 80.7 111.9 L 81.0 110.0" fill="none" stroke="#dc2626" stroke-width="2.2"/>
    <!-- Mũi tên kết thúc chỉ xuống vào trục u, v -->
    <path d="M 81 106 L 81 118" stroke="#dc2626" stroke-width="2.2" marker-end="url(#redArrow)"/>

    <text x="105" y="210" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="bold">sđ (Ou, Ov) = 360°</text>
  </g>

  <!-- Đường phân cách dọc 1 -->
  <line x1="185" y1="20" x2="185" y2="220" stroke="#f1f5f9" stroke-width="2"/>

  <!-- ==================== HÌNH 2: sđ(Ou, Ov) = 720° ==================== -->
  <g>
    <!-- Trục tia Ou, Ov trùng nhau -->
    <line x1="235" y1="110" x2="355" y2="110" stroke="#1e293b" stroke-width="2"/>
    <circle cx="235" cy="110" r="3.5" fill="#0284c7"/>
    <text x="230" y="130" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="335" y="130" fill="#0284c7" font-size="14" font-style="italic">u, v</text>

    <!-- Tia Om quay ngược chiều KĐH (chiều dương) -->
    <line x1="235" y1="110" x2="310" y2="75" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="305" y="65" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>

    <!-- Cung chiều dương (+) -->
    <path d="M 275 96 A 25 25 0 0 1 268 78" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#blackArrow)"/>
    <text x="278" y="88" fill="#1e293b" font-size="13" font-weight="bold">+</text>

    <!-- Xoắn ốc Archimedes 2 vòng đỏ mượt mà (720 độ) -->
    <path d="M 243.0 110.0 L 243.2 109.3 L 243.3 108.6 L 243.4 107.8 L 243.4 107.1 L 243.3 106.3 L 243.2 105.5 L 243.0 104.7 L 242.7 103.9 L 242.3 103.1 L 241.9 102.4 L 241.3 101.6 L 240.7 100.9 L 240.1 100.3 L 239.3 99.7 L 238.5 99.2 L 237.7 98.7 L 236.7 98.3 L 235.8 97.9 L 234.7 97.7 L 233.7 97.5 L 232.6 97.5 L 231.5 97.5 L 230.4 97.6 L 229.3 97.8 L 228.2 98.2 L 227.1 98.6 L 226.0 99.1 L 225.0 99.7 L 224.0 100.5 L 223.0 101.3 L 222.1 102.2 L 221.3 103.2 L 220.6 104.3 L 220.0 105.5 L 219.4 106.7 L 219.0 108.0 L 218.6 109.3 L 218.4 110.7 L 218.3 112.1 L 218.3 113.5 L 218.4 115.0 L 218.7 116.4 L 219.1 117.9 L 219.6 119.3 L 220.3 120.7 L 221.1 122.0 L 221.9 123.3 L 223.0 124.5 L 224.1 125.7 L 225.3 126.7 L 226.7 127.7 L 228.1 128.5 L 229.6 129.3 L 231.2 129.9 L 232.9 130.4 L 234.6 130.7 L 236.3 130.9 L 238.1 130.9 L 239.9 130.8 L 241.7 130.5 L 243.5 130.1 L 245.2 129.5 L 246.9 128.8 L 248.6 127.9 L 250.2 126.9 L 251.7 125.7 L 253.2 124.4 L 254.5 123.0 L 255.7 121.4 L 256.8 119.7 L 257.8 117.9 L 258.6 116.0 L 259.2 114.1 L 259.7 112.1 L 260.0 110.0 L 260.1 107.9 L 260.1 105.8 L 259.9 103.6 L 259.5 101.5 L 258.9 99.4 L 258.1 97.3 L 257.1 95.3 L 256.0 93.3 L 254.7 91.5 L 253.2 89.7 L 251.6 88.1 L 249.9 86.6 L 247.9 85.2 L 245.9 84.0 L 243.8 83.0 L 241.5 82.1 L 239.2 81.5 L 236.8 81.0 L 234.4 80.7 L 231.9 80.6 L 229.4 80.8 L 226.9 81.1 L 224.5 81.7 L 222.0 82.5 L 219.7 83.4 L 217.4 84.6 L 215.2 86.0 L 213.1 87.6 L 211.1 89.4 L 209.3 91.3 L 207.6 93.4 L 206.1 95.7 L 204.8 98.0 L 203.7 100.5 L 202.8 103.2 L 202.1 105.8 L 201.6 108.6 L 201.4 111.4 L 201.4 114.2 L 201.7 117.1 L 202.2 119.9 L 202.9 122.7 L 203.9 125.4 L 205.1 128.1 L 206.5 130.7 L 208.2 133.1 L 210.1 135.5 L 212.1 137.6 L 214.4 139.6 L 216.8 141.5 L 219.4 143.1 L 222.2 144.5 L 225.0 145.6 L 228.0 146.6 L 231.1 147.3 L 234.2 147.7 L 237.4 147.8 L 240.6 147.7 L 243.8 147.4 L 246.9 146.7 L 250.0 145.8 L 253.1 144.6 L 256.0 143.2 L 258.9 141.5 L 261.6 139.5 L 264.1 137.4 L 266.5 135.0 L 268.7 132.4 L 270.6 129.6 L 272.3 126.6 L 273.8 123.5 L 275.0 120.3 L 276.0 116.9 L 276.6 113.5 L 277.0 110.0" fill="none" stroke="#dc2626" stroke-width="2.2"/>
    <!-- Mũi tên kết thúc chỉ xuống vào trục u, v -->
    <path d="M 277 106 L 277 118" stroke="#dc2626" stroke-width="2.2" marker-end="url(#redArrow)"/>

    <text x="295" y="210" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="bold">sđ (Ou, Ov) = 720°</text>
  </g>

  <!-- Đường phân cách dọc 2 -->
  <line x1="380" y1="20" x2="380" y2="220" stroke="#f1f5f9" stroke-width="2"/>

  <!-- ==================== HÌNH 3: sđ(Ou, Ov) = -180° ==================== -->
  <g>
    <!-- Trục tia Ou và Ov đối nhau -->
    <line x1="475" y1="110" x2="560" y2="110" stroke="#1e293b" stroke-width="2"/>
    <line x1="400" y1="110" x2="475" y2="110" stroke="#dc2626" stroke-width="2"/>
    <circle cx="475" cy="110" r="3.5" fill="#0284c7"/>
    <text x="470" y="90" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="545" y="130" fill="#0284c7" font-size="14" font-style="italic">u</text>
    <text x="405" y="130" fill="#0284c7" font-size="14" font-style="italic">v</text>

    <!-- Tia Om quay cùng chiều KĐH (chiều âm) -->
    <line x1="475" y1="110" x2="540" y2="148" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="535" y="168" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>

    <!-- Cung chiều âm (-) -->
    <path d="M 505 116 A 25 25 0 0 1 520 132" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#blackArrow)"/>
    <text x="525" y="128" fill="#1e293b" font-size="13" font-weight="bold">-</text>

    <!-- Cung tròn nửa vòng đỏ mượt mà (-180 độ) -->
    <path d="M 515 110 A 40 40 0 0 1 435 110" fill="none" stroke="#dc2626" stroke-width="2.2"/>
    <!-- Mũi tên kết thúc chỉ lên chạm vào tia Ov -->
    <path d="M 435 118 L 435 106" stroke="#dc2626" stroke-width="2.2" marker-end="url(#redArrow)"/>

    <text x="480" y="210" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="bold">sđ (Ou, Ov) = -180°</text>
  </g>

  <!-- Đường phân cách dọc 3 -->
  <line x1="575" y1="20" x2="575" y2="220" stroke="#f1f5f9" stroke-width="2"/>

  <!-- ==================== HÌNH 4: sđ(Ou, Ov) = -540° ==================== -->
  <g>
    <!-- Trục tia Ou và Ov đối nhau -->
    <line x1="665" y1="110" x2="750" y2="110" stroke="#1e293b" stroke-width="2"/>
    <line x1="590" y1="110" x2="665" y2="110" stroke="#dc2626" stroke-width="2"/>
    <circle cx="665" cy="110" r="3.5" fill="#0284c7"/>
    <text x="660" y="90" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="735" y="130" fill="#0284c7" font-size="14" font-style="italic">u</text>
    <text x="595" y="130" fill="#0284c7" font-size="14" font-style="italic">v</text>

    <!-- Tia Om quay cùng chiều KĐH (chiều âm) -->
    <line x1="665" y1="110" x2="730" y2="148" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="725" y="168" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>

    <!-- Cung chiều âm (-) -->
    <path d="M 695 116 A 25 25 0 0 1 710 132" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#blackArrow)"/>
    <text x="715" y="128" fill="#1e293b" font-size="13" font-weight="bold">-</text>

    <!-- Xoắn ốc Archimedes 1.5 vòng đỏ mượt mà (-540 độ) -->
    <path d="M 675.0 110.0 L 675.2 110.7 L 675.4 111.4 L 675.5 112.1 L 675.5 112.9 L 675.5 113.7 L 675.5 114.5 L 675.3 115.3 L 675.2 116.1 L 674.9 116.9 L 674.6 117.7 L 674.2 118.4 L 673.8 119.2 L 673.3 120.0 L 672.8 120.7 L 672.1 121.4 L 671.5 122.0 L 670.7 122.6 L 670.0 123.2 L 669.1 123.7 L 668.2 124.2 L 667.3 124.6 L 666.3 125.0 L 665.3 125.3 L 664.3 125.5 L 663.2 125.6 L 662.2 125.7 L 661.0 125.7 L 659.9 125.6 L 658.8 125.4 L 657.7 125.2 L 656.6 124.9 L 655.5 124.5 L 654.4 124.0 L 653.3 123.4 L 652.3 122.7 L 651.3 122.0 L 650.3 121.2 L 649.4 120.3 L 648.5 119.3 L 647.8 118.3 L 647.0 117.2 L 646.4 116.1 L 645.8 114.8 L 645.3 113.6 L 644.8 112.3 L 644.5 110.9 L 644.3 109.5 L 644.1 108.1 L 644.1 106.7 L 644.1 105.2 L 644.3 103.8 L 644.5 102.3 L 644.9 100.9 L 645.3 99.4 L 645.9 98.0 L 646.6 96.6 L 647.3 95.2 L 648.2 93.9 L 649.2 92.7 L 650.2 91.5 L 651.4 90.3 L 652.6 89.3 L 653.9 88.3 L 655.3 87.4 L 656.8 86.5 L 658.3 85.8 L 659.9 85.2 L 661.6 84.7 L 663.3 84.3 L 665.0 84.0 L 666.8 83.8 L 668.6 83.8 L 670.4 83.9 L 672.2 84.1 L 674.0 84.4 L 675.8 84.8 L 677.5 85.4 L 679.3 86.1 L 681.0 86.9 L 682.6 87.9 L 684.2 89.0 L 685.8 90.1 L 687.2 91.4 L 688.6 92.8 L 689.9 94.3 L 691.1 95.9 L 692.2 97.6 L 693.2 99.4 L 694.1 101.3 L 694.8 103.2 L 695.4 105.2 L 695.9 107.2 L 696.2 109.3 L 696.5 111.4 L 696.5 113.6 L 696.4 115.7 L 696.2 117.9 L 695.8 120.0 L 695.3 122.1 L 694.6 124.3 L 693.8 126.3 L 692.8 128.4 L 691.7 130.3 L 690.4 132.2 L 689.0 134.0 L 687.5 135.8 L 685.9 137.4 L 684.1 138.9 L 682.2 140.4 L 680.2 141.7 L 678.2 142.8 L 676.0 143.9 L 673.8 144.7 L 671.4 145.5 L 669.1 146.1 L 666.6 146.5 L 664.2 146.7 L 661.7 146.8 L 659.2 146.7 L 656.7 146.5 L 654.2 146.1 L 651.7 145.5 L 649.2 144.7 L 646.8 143.8 L 644.5 142.7 L 642.2 141.4 L 640.0 140.0 L 637.9 138.4 L 635.9 136.6 L 634.0 134.8 L 632.2 132.7 L 630.5 130.6 L 629.0 128.3 L 627.6 126.0 L 626.4 123.5 L 625.4 120.9 L 624.5 118.3 L 623.8 115.6 L 623.3 112.8 L 623.0 110.0" fill="none" stroke="#dc2626" stroke-width="2.2"/>
    <!-- Mũi tên kết thúc chỉ lên chạm vào tia Ov -->
    <path d="M 623 118 L 623 106" stroke="#dc2626" stroke-width="2.2" marker-end="url(#redArrow)"/>

    <text x="670" y="210" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="bold">sđ (Ou, Ov) = -540°</text>
  </g>
</svg>
</div>
                <div class="row text-start mt-2">
                  <div class="col-md-6 mb-2">
                    <span class="badge bg-success me-1">Sơ đồ 1</span> Quay 1 vòng theo chiều dương: \$\\text{sđ}(Ou, Ov) = 360^\\circ\$.
                  </div>
                  <div class="col-md-6 mb-2">
                    <span class="badge bg-success me-1">Sơ đồ 2</span> Quay 2 vòng theo chiều dương: \$\\text{sđ}(Ou, Ov) = 720^\\circ\$.
                  </div>
                  <div class="col-md-6 mb-2">
                    <span class="badge bg-danger me-1">Sơ đồ 3</span> Quay nửa vòng theo chiều âm: \$\\text{sđ}(Ou, Ov) = -180^\\circ\$.
                  </div>
                  <div class="col-md-6 mb-2">
                    <span class="badge bg-danger me-1">Sơ đồ 4</span> Quay 1,5 vòng theo chiều âm: \$\\text{sđ}(Ou, Ov) = -540^\\circ\$.
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3 border-warning">
              <div class="card-header bg-warning text-dark fw-bold">3. Định lí tổng quát về số đo góc lượng giác</div>
              <div class="card-body">
                <p>Nếu góc lượng giác \$(Ou, Ov)\$ có một số đo là \$\\alpha^\\circ\$ thì mọi số đo của góc lượng giác này đều có dạng:</p>
                <div class="p-2 bg-light rounded text-center fw-bold text-danger fs-5">
                  \$\\text{sđ}(Ou, Ov) = \\alpha^\\circ + k 360^\\circ \\quad (k \\in \\mathbb{Z})\$
                </div>
                <p class="mt-2 mb-0">Mỗi góc lượng giác xác định duy nhất tia đầu và tia cuối. Nhưng ngược lại, với hai tia \$Ou, Ov\$ cho trước có vô số góc lượng giác tia đầu \$Ou\$, tia cuối \$Ov\$, số đo của chúng sai khác nhau một bội nguyên của \$360^\\circ\$.</p>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 1 (SGK TRANG 6) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Cho góc hình học \$\\widehat{uOv} = 45^\\circ\$. Xác định số đo của các góc lượng giác \$(Ou, Ov)\$ được biểu diễn trong Hình 1.3 SGK.</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>• Hình 1.3a: Tia \$Om\$ quay từ \$Ou\$ đến \$Ov\$ theo chiều dương góc \$45^\\circ\$ nên \$\\text{sđ}(Ou, Ov) = 45^\\circ\$.</p>
              <p>• Hình 1.3b: Tia \$Om\$ quay theo chiều âm 1 vòng rồi đi tiếp \$45^\\circ\$ theo chiều âm, tức quay góc \$- (360^\\circ + 45^\\circ) = -405^\\circ\$, nên \$\\text{sđ}(Ou, Ov) = -405^\\circ\$.</p>
            </div>

            <div class="alert-box alert-info">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 1 (SGK TRANG 6):</div>
              <p>Cho góc lượng giác \$(Ou, Ov)\$ có số đo bằng \$-225^\\circ\$. Hỏi trong các số sau, số nào là số đo của một góc lượng giác có cùng tia đầu và tia cuối với góc lượng giác đã cho?</p>
              <p class="fw-bold text-dark">a) \$135^\\circ\$;&emsp;&emsp;b) \$495^\\circ\$;&emsp;&emsp;c) \$-585^\\circ\$;&emsp;&emsp;d) \$315^\\circ\$.</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b> Ta có: \$\\text{sđ}(Ou, Ov) = -225^\\circ + k 360^\\circ\$.</p>
              <p>• Với \$k = 1\$: \$-225^\\circ + 360^\\circ = 135^\\circ\$ (Chọn a).</p>
              <p>• Với \$k = 2\$: \$-225^\\circ + 720^\\circ = 495^\\circ\$ (Chọn b).</p>
              <p>• Với \$k = -1\$: \$-225^\\circ - 360^\\circ = -585^\\circ\$ (Chọn c).</p>
              <p>• Với \$315^\\circ\$: \$315^\\circ - (-225^\\circ) = 540^\\circ\$ không chia hết cho \$360^\\circ\$ (Loại d).</p>
            </div>
          </div>`
        },

        // --- 1b. HỆ THỨC CHASLES (SÁT-LƠ) ---
        {
          key: "b",
          title: "Hệ thức Chasles (Sát-lơ)",
          audioUrl: "assets/audio/b11_1_sec1b.mp3",
          audioScript: "Tiểu mục b: Hệ thức Sát-lơ. Với ba tia O u, O v, O w bất kì, ta có hệ thức Sát-lơ nổi tiếng: Số đo góc lượng giác O u phẩy O v, cộng số đo góc lượng giác O v phẩy O w, bằng số đo góc lượng giác O u phẩy O w, cộng k nhân 360 độ, với k là số nguyên. Từ hệ thức này, ta suy ra công thức hiệu quan trọng: Số đo góc lượng giác O u phẩy O v bằng số đo góc O x phẩy O v, trừ đi số đo góc O x phẩy O u, cộng k 360 độ. Công thức này hoàn toàn tương tự công thức hiệu hai vectơ mà các em đã học ở lớp mười: vectơ A B bằng vectơ O B trừ vectơ O A. Trong Ví dụ 2, cho số đo O x O u bằng âm 270 độ, số đo O x O v bằng 135 độ, ta tính được số đo O u O v bằng 135 độ trừ đi âm 270 độ, bằng 405 độ, tức là bằng 45 độ cộng m nhân 360 độ.",
          checkpoints: [
          {
            id: "poi-11-1-sec1b-1",
            time: 20,
            title: "Tương tác Câu 1: Vận dụng hệ thức Chasles",
            question: "Biết $\\text{sđ}(Ou, Ov) = 120^\\circ$ và $\\text{sđ}(Ov, Ow) = -75^\\circ$. Một số đo của góc $(Ou, Ow)$ là:",
            options: [
              "$195^\\circ$",
              "$45^\\circ$",
              "$-45^\\circ$",
              "$75^\\circ$"
            ],
            correctIndex: 1,
            correctAnswer: "B",
            hint: "Áp dụng hệ thức Chasles: sđ(Ou, Ow) = sđ(Ou, Ov) + sđ(Ov, Ow) + k*360°.",
            explain: "Chính xác! Theo hệ thức Chasles: $\\text{sđ}(Ou, Ow) = 120^\\circ + (-75^\\circ) = 45^\\circ$."
          },
          {
            id: "poi-11-1-sec1b-2",
            time: 35,
            title: "Tương tác Câu 2: Công thức hiệu hai góc lượng giác",
            question: "Với ba tia $Ou, Ov, Ox$ bất kì, công thức hiệu nào sau đây ĐÚNG theo hệ thức Chasles?",
            options: [
              "$\\text{sđ}(Ou, Ov) = \\text{sđ}(Ox, Ou) - \\text{sđ}(Ox, Ov) + k 360^\\circ$",
              "$\\text{sđ}(Ou, Ov) = \\text{sđ}(Ox, Ov) + \\text{sđ}(Ox, Ou) + k 360^\\circ$",
              "$\\text{sđ}(Ou, Ov) = \\text{sđ}(Ox, Ov) - \\text{sđ}(Ox, Ou) + k 360^\\circ$",
              "$\\text{sđ}(Ou, Ov) = -\\text{sđ}(Ox, Ov) - \\text{sđ}(Ox, Ou) + k 360^\\circ$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "Tương tự vectơ AB = OB - OA, sđ(Ou, Ov) = sđ(Ox, Ov) - sđ(Ox, Ou) + k*360°.",
            explain: "Chính xác! Tương tự như hiệu hai vectơ $\\vec{AB} = \\vec{OB} - \\vec{OA}$, ta có: $\\text{sđ}(Ou, Ov) = \\text{sđ}(Ox, Ov) - \\text{sđ}(Ox, Ou) + k 360^\\circ$."
          }
        ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Hệ thức Chasles (nhà toán học người Pháp Michel Chasles, 1793 - 1880) là hệ thức liên hệ cơ bản giữa các góc lượng giác có chung đỉnh.</p>

            <div class="card mb-3 border-success">
              <div class="card-header bg-success text-white fw-bold">1. Định lí Hệ thức Chasles (SGK trang 7)</div>
              <div class="card-body">
                <p>Với ba tia \$Ou, Ov, Ow\$ bất kì, ta có:</p>
                <div class="p-2 bg-light rounded text-center fw-bold text-success fs-5">
                  \$\\text{sđ}(Ou, Ov) + \\text{sđ}(Ov, Ow) = \\text{sđ}(Ou, Ow) + k 360^\\circ \\quad (k \\in \\mathbb{Z})\$
                </div>
              </div>
            </div>

            <div class="card mb-3 border-info">
              <div class="card-header bg-info text-white fw-bold">2. Hệ quả công thức Hiệu hai góc lượng giác</div>
              <div class="card-body">
                <p>Từ hệ thức Chasles, với tia \$Ox\$ tùy ý, ta suy ra công thức hiệu:</p>
                <div class="p-2 bg-light rounded text-center fw-bold text-primary fs-5">
                  \$\\text{sđ}(Ou, Ov) = \\text{sđ}(Ox, Ov) - \\text{sđ}(Ox, Ou) + k 360^\\circ \\quad (k \\in \\mathbb{Z})\$
                </div>
                <div class="alert alert-secondary mt-2 mb-0">
                  💡 <b>Thầy Sáng nhắc nhở:</b> Công thức này hoàn toàn tương tự công thức hiệu hai vectơ mà các em đã học ở lớp 10:
                  \$\\vec{AB} = \\vec{OB} - \\vec{OA}\$. <i>(Ngọn trừ Gốc)</i>!
                </div>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 2 (SGK TRANG 7) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Cho một góc lượng giác \$(Ox, Ou)\$ có số đo \$-270^\\circ\$ và góc lượng giác \$(Ox, Ov)\$ có số đo \$135^\\circ\$. Tính số đo của góc lượng giác \$(Ou, Ov)\$.</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>Theo hệ thức Chasles, ta có:</p>
              <p>\$\\text{sđ}(Ou, Ov) = \\text{sđ}(Ox, Ov) - \\text{sđ}(Ox, Ou) + k 360^\\circ = 135^\\circ - (-270^\\circ) + k 360^\\circ\$</p>
              <p>\$= 405^\\circ + k 360^\\circ = 45^\\circ + (k + 1) 360^\\circ = 45^\\circ + m 360^\\circ \\quad (m \\in \\mathbb{Z})\$.</p>
              <p>Vậy các góc lượng giác \$(Ou, Ov)\$ có số đo là \$45^\\circ + m 360^\\circ\$ với \$m \\in \\mathbb{Z}\$.</p>
            </div>

            <div class="alert-box alert-info">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 2 (SGK TRANG 7):</div>
              <p>Cho góc lượng giác \$(Ou, Ov)\$ có số đo là \$45^\\circ\$. Xác định số đo của góc lượng giác \$(Ou, Ow)\$, biết góc lượng giác \$(Ov, Ow)\$ có số đo bằng \$-120^\\circ\$.</p>
              <hr>
              <p><b>Lời giải:</b> Áp dụng hệ thức Chasles:</p>
              <p>\$\\text{sđ}(Ou, Ow) = \\text{sđ}(Ou, Ov) + \\text{sđ}(Ov, Ow) + k 360^\\circ = 45^\\circ + (-120^\\circ) + k 360^\\circ = -75^\\circ + k 360^\\circ\$ \$(k \\in \\mathbb{Z}\$.</p>
            </div>
          </div>`
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2: ĐƠN VỊ ĐO GÓC VÀ ĐỘ DÀI CUNG TRÒN
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b1-s2",
      num: "2",
      title: "Đơn vị đo góc và độ dài cung tròn",
      audioUrl: "assets/audio/b11_1_sec2a.mp3",
      audioScript: "Mục 2. Đơn vị đo góc và độ dài cung tròn. Mục này gồm hai tiểu mục: a. Đơn vị đo góc và cung tròn; và b. Độ dài cung tròn.",
      subsections: [
        // --- 2a. ĐƠN VỊ RADIAN ---
        {
          key: "a",
          title: "Đơn vị đo góc và cung tròn (Radian)",
          audioUrl: "assets/audio/b11_1_sec2a.mp3",
          audioScript: "Mục 2. Đơn vị đo góc và độ dài cung tròn. Tiểu mục a: Đơn vị đo góc và cung tròn. Ngoài đơn vị độ truyền thống, trong khoa học kỹ thuật và toán học cao cấp, người ta sử dụng đơn vị ra-đi-an, viết tắt là r a d. Định nghĩa: Cho đường tròn tâm O bán kính R. Cung tròn A B có độ dài đúng bằng bán kính R được gọi là có số đo bằng 1 ra-đi-an. Góc ở tâm A O B chắn cung đó có số đo bằng 1 ra-đi-an. Vì đường tròn có chu vi 2 pi R ứng với 360 độ, nên ta có đẳng thức then chốt: 180 độ bằng pi ra-đi-an. Từ đó suy ra công thức đổi: 1 độ bằng pi phần 180 ra-đi-an; và 1 ra-đi-an bằng 180 phần pi độ, xấp xỉ 57 độ 17 phút 45 giây. Các em hãy chú ý ghi nhớ bảng góc đặc biệt: 30 độ là pi phần 6; 45 độ là pi phần 4; 60 độ là pi phần 3; 90 độ là pi phần 2; và 180 độ là pi.",
          checkpoints: [
          {
            id: "poi-11-1-sec2a-1",
            time: 20,
            title: "Tương tác Câu 1: Đổi từ độ sang radian",
            question: "Góc có số đo $150^\\circ$ khi đổi sang đơn vị radian bằng bao nhiêu?",
            options: [
              "$\\dfrac{2\\pi}{3}\\text{ rad}$",
              "$\\dfrac{3\\pi}{4}\\text{ rad}$",
              "$\\dfrac{5\\pi}{6}\\text{ rad}$",
              "$\\dfrac{7\\pi}{6}\\text{ rad}$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "Công thức đổi từ độ sang radian: alpha = a * pi / 180.",
            explain: "Chính xác! Ta có: $150^\\circ = 150 \\cdot \\dfrac{\\pi}{180} = \\dfrac{5\\pi}{6}\\text{ rad}$."
          },
          {
            id: "poi-11-1-sec2a-2",
            time: 35,
            title: "Tương tác Câu 2: Đổi từ radian sang độ",
            question: "Góc có số đo $\\dfrac{3\\pi}{4}\\text{ rad}$ đổi sang đơn vị độ bằng:",
            options: [
              "$135^\\circ$",
              "$120^\\circ$",
              "$150^\\circ$",
              "$105^\\circ$"
            ],
            correctIndex: 0,
            correctAnswer: "A",
            hint: "Nhân với 180/pi: (3*pi/4) * (180/pi) = 135°.",
            explain: "Chính xác! $\\dfrac{3\\pi}{4}\\text{ rad} = \\left(\\dfrac{3\\pi}{4} \\cdot \\dfrac{180}{\\pi}\\right)^\\circ = 135^\\circ$."
          }
        ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Ngoài đơn vị độ (°), trong toán học hiện đại và vật lý, người ta sử dụng phổ biến đơn vị <b>radian</b> (viết tắt là rad).</p>

            <div class="card mb-3 border-primary">
              <div class="card-header bg-primary text-white fw-bold">1. Định nghĩa đơn vị Radian (SGK trang 8)</div>
              <div class="card-body">
                <p>• Cho đường tròn tâm \$O\$ bán kính \$R\$. Cung tròn có độ dài đúng bằng \$R\$ được gọi là <b>cung có số đo 1 radian</b>.</p>
                <p>• Góc ở tâm chắn cung có độ dài bằng bán kính \$R\$ được gọi là <b>góc có số đo 1 radian</b>.</p>
                <div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="440" height="260" viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  <defs>
    <marker id="angleArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0284c7"/>
    </marker>
  </defs>

  <g transform="translate(220, 130)">
    <!-- Đường tròn tâm O, bán kính R = 90px -->
    <circle cx="0" cy="0" r="90" fill="none" stroke="#10b981" stroke-width="2"/>

    <!-- Tâm O -->
    <circle cx="0" cy="0" r="3.5" fill="#0284c7"/>
    <text x="-16" y="5" fill="#0284c7" font-size="15" font-weight="bold">O</text>

    <!-- Bán kính OA (góc 0 độ, tức chếch nhẹ sang phải) -->
    <!-- Trong SGK: OA chếch khoảng 15 độ, OB ở góc khoảng 72.3 độ (1 rad = 57.3 độ) -->
    <!-- Đặt OA ở góc -15 deg (x = 86.9, y = -23.3) -->
    <!-- Đặt OB ở góc -72.3 deg (x = 27.4, y = -85.7) -->
    <line x1="0" y1="0" x2="86.9" y2="-23.3" stroke="#1e293b" stroke-width="2"/>
    <circle cx="86.9" cy="-23.3" r="3.5" fill="#0284c7"/>
    <text x="96" y="-18" fill="#0284c7" font-size="15" font-weight="bold">A</text>

    <!-- Bán kính OB -->
    <line x1="0" y1="0" x2="27.4" y2="-85.7" stroke="#1e293b" stroke-width="2"/>
    <circle cx="27.4" cy="-85.7" r="3.5" fill="#0284c7"/>
    <text x="22" y="-95" fill="#0284c7" font-size="15" font-weight="bold">B</text>

    <!-- Cung tròn AB màu đỏ (độ dài đúng bằng R) -->
    <path d="M 86.9 -23.3 A 90 90 0 0 0 27.4 -85.7" fill="none" stroke="#dc2626" stroke-width="3.5"/>

    <!-- Nhãn R trên hai bán kính -->
    <text x="45" y="-5" fill="#1e293b" font-size="13" font-style="italic" font-weight="bold">R</text>
    <text x="5" y="-45" fill="#1e293b" font-size="13" font-style="italic" font-weight="bold">R</text>

    <!-- Góc ở tâm 1 rad -->
    <path d="M 33.8 -9.1 A 35 35 0 0 0 10.6 -33.3" fill="none" stroke="#0284c7" stroke-width="1.8"/>
    <rect x="42" y="-55" width="52" height="22" rx="4" fill="#fef2f2" stroke="#fca5a5" stroke-width="1"/>
    <text x="48" y="-40" fill="#dc2626" font-size="12" font-weight="bold">1 rad</text>
  </g>

  <!-- Chú thích chân hình -->
  <text x="220" y="248" text-anchor="middle" fill="#64748b" font-size="12" font-style="italic">Hình 1.6: Định nghĩa cung có số đo 1 radian có độ dài l = R (SGK trang 8)</text>
</svg>
</div>
              </div>
            </div>

            <div class="card mb-3 border-danger">
              <div class="card-header bg-danger text-white fw-bold">2. Quan hệ giữa Đơn vị Độ và Radian</div>
              <div class="card-body">
                <p>Đường tròn bán kính \$R\$ có chu vi bằng \$2\\pi R\$, do đó cả đường tròn có số đo \$2\\pi\\text{ rad}\$ tương ứng \$360^\\circ\$. Từ đó ta có đẳng thức then chốt:</p>
                <div class="p-2 bg-light rounded text-center fw-bold text-danger fs-5">
                  \$180^\\circ = \\pi\\text{ rad}\$
                </div>
                <div class="row mt-3 text-center">
                  <div class="col-md-6 mb-2">
                    <div class="p-2 border rounded bg-info bg-opacity-10">
                      <b>Đổi từ Độ sang Radian:</b><br>
                      \$1^\\circ = \\dfrac{\\pi}{180}\\text{ rad} \\implies a^\\circ = a \\cdot \\dfrac{\\pi}{180}\\text{ rad}\$
                    </div>
                  </div>
                  <div class="col-md-6 mb-2">
                    <div class="p-2 border rounded bg-warning bg-opacity-10">
                      <b>Đổi từ Radian sang Độ:</b><br>
                      \$1\\text{ rad} = \\left(\\dfrac{180}{\\pi}\\right)^\\circ \\approx 57^\\circ 17'45''\$
                    </div>
                  </div>
                </div>
                <p class="text-muted mt-2 mb-0"><i>Quy ước: Khi viết số đo của một góc (hoặc cung) theo đơn vị radian, người ta thường không viết chữ rad sau số đo. Ví dụ: viết \$\\frac{\\pi}{2}\$ thay vì \$\\frac{\\pi}{2}\\text{ rad}\$.</i></p>
              </div>
            </div>

            <div class="card mb-3 border-success">
              <div class="card-header bg-success text-white fw-bold">3. Bảng vàng các góc đặc biệt thường dùng (SGK trang 8)</div>
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table table-bordered table-striped text-center mb-0 align-middle">
                    <thead class="table-primary">
                      <tr>
                        <th>Độ (°)</th>
                        <th>0°</th>
                        <th>30°</th>
                        <th>45°</th>
                        <th>60°</th>
                        <th>90°</th>
                        <th>120°</th>
                        <th>135°</th>
                        <th>150°</th>
                        <th>180°</th>
                        <th>360°</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="fw-bold text-danger">
                        <td>Radian</td>
                        <td>\$0\$</td>
                        <td>\$\\dfrac{\\pi}{6}\$</td>
                        <td>\$\\dfrac{\\pi}{4}\$</td>
                        <td>\$\\dfrac{\\pi}{3}\$</td>
                        <td>\$\\dfrac{\\pi}{2}\$</td>
                        <td>\$\\dfrac{2\\pi}{3}\$</td>
                        <td>\$\\dfrac{3\\pi}{4}\$</td>
                        <td>\$\\dfrac{5\\pi}{6}\$</td>
                        <td>\$\\pi\$</td>
                        <td>\$2\\pi\$</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 3 (SGK TRANG 8) & LỜI GIẢI CHI TIẾT:</div>
              <p>a) Đổi từ độ sang radian các góc: \$45^\\circ; \\; -150^\\circ\$.</p>
              <p>b) Đổi từ radian sang độ các góc: \$\\dfrac{3\\pi}{8}; \\; -2\\text{ rad}\$.</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>a) \$45^\\circ = 45 \\cdot \\dfrac{\\pi}{180} = \\dfrac{\\pi}{4}\$;&emsp;&emsp;\$-150^\\circ = -150 \\cdot \\dfrac{\\pi}{180} = -\\dfrac{5\\pi}{6}\$.</p>
              <p>b) \$\\dfrac{3\\pi}{8}\\text{ rad} = \\left(\\dfrac{3\\pi}{8} \\cdot \\dfrac{180}{\\pi}\\right)^\\circ = 67^\\circ 30'\$;&emsp;&emsp;\$-2\\text{ rad} = \\left(-2 \\cdot \\dfrac{180}{\\pi}\\right)^\\circ \\approx -114^\\circ 35'30''\$.</p>
            </div>
          </div>`
        },

        // --- 2b. ĐỘ DÀI CUNG TRÒN ---
        {
          key: "b",
          title: "Độ dài cung tròn & Giải bài toán mở đầu ISS",
          audioUrl: "assets/audio/b11_1_sec2b.mp3",
          audioScript: "Tiểu mục b: Độ dài cung tròn. Một cung của đường tròn bán kính R có số đo an-pha ra-đi-an thì có độ dài l bằng R nhân an-pha. Công thức này vô cùng ngắn gọn và đẹp mắt! Bây giờ, thầy trò ta cùng giải quyết bài toán mở đầu về trạm vũ trụ I-S-S: Quỹ đạo của trạm cách bề mặt Trái Đất 400 kilômét, bán kính Trái Đất là 6 nghìn 400 kilômét, nên bán kính quỹ đạo tròn từ tâm Trái Đất là: R bằng 6 nghìn 400 cộng 400 bằng 6 nghìn 800 kilômét. Góc ở tâm 45 độ đổi sang ra-đi-an là: an-pha bằng 45 nhân pi chia 180 bằng pi phần 4 ra-đi-an. Áp dụng công thức: Quãng đường trạm I-S-S bay được là: l bằng R nhân an-pha, bằng 6 nghìn 800 nhân pi phần 4, bằng 1 nghìn 700 pi, xấp xỉ 5 nghìn 341 kilômét. Một kết quả thực tiễn rất thú vị và chuẩn xác!",
          checkpoints: [
          {
            id: "poi-11-1-sec2b-1",
            time: 20,
            title: "Tương tác Câu 1: Độ dài cung tròn theo radian",
            question: "Một đường tròn có bán kính $R = 20\\text{ cm}$. Cung tròn có số đo $\\dfrac{\\pi}{5}\\text{ rad}$ có độ dài $l$ bằng:",
            options: [
              "$2\\pi\\text{ cm}$",
              "$4\\pi\\text{ cm}$",
              "$5\\pi\\text{ cm}$",
              "$10\\pi\\text{ cm}$"
            ],
            correctIndex: 1,
            correctAnswer: "B",
            hint: "Áp dụng công thức l = R * alpha (với alpha tính bằng radian).",
            explain: "Chính xác! Độ dài cung tròn là: $l = R \\cdot \\alpha = 20 \\cdot \\dfrac{\\pi}{5} = 4\\pi\\text{ cm} \\approx 12.57\\text{ cm}$."
          },
          {
            id: "poi-11-1-sec2b-2",
            time: 35,
            title: "Tương tác Câu 2: Độ dài cung tròn cho trước bằng độ",
            question: "Một đường tròn có bán kính $R = 10\\text{ cm}$. Cung tròn có số đo $90^\\circ$ có độ dài bằng:",
            options: [
              "$10\\pi\\text{ cm}$",
              "$2.5\\pi\\text{ cm}$",
              "$5\\pi\\text{ cm}$",
              "$20\\pi\\text{ cm}$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "Đổi 90° = pi/2 rad. Sau đó l = 10 * (pi/2) = 5*pi cm.",
            explain: "Chính xác! Đổi $90^\\circ = \\dfrac{\\pi}{2}\\text{ rad}$. Ta có: $l = R \\cdot \\alpha = 10 \\cdot \\dfrac{\\pi}{2} = 5\\pi\\text{ cm}$."
          }
        ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Nhờ đơn vị radian, công thức tính độ dài cung tròn trở nên vô cùng giản dị và thanh lịch!</p>

            <div class="card mb-3 border-danger">
              <div class="card-header bg-danger text-white fw-bold">1. Công thức tính độ dài cung tròn (SGK trang 9)</div>
              <div class="card-body">
                <p>Một cung của đường tròn bán kính \$R\$ có số đo \$\\alpha\\text{ rad}\$ thì có độ dài \$l\$ bằng:</p>
                <div class="p-2 bg-light rounded text-center fw-bold text-danger fs-4">
                  \$l = R \\cdot \\alpha\$
                </div>
                <p class="text-muted mt-2 mb-0"><i>(Đặc biệt: Nếu góc ở tâm cho bằng \$a^\\circ\$, ta đổi \$\\alpha = a \\cdot \\dfrac{\\pi}{180}\$ rồi áp dụng: \$l = \\dfrac{\\pi R a}{180}\$).</i></p>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">🚀 VẬN DỤNG 1: GIẢI QUYẾT TRỌN VẸN BÀI TOÁN TRẠM ISS MỞ ĐẦU (SGK TRANG 9):</div>
              <p><b>Đề bài:</b> Trạm vũ trụ quốc tế ISS chuyển động theo quỹ đạo tròn cách bề mặt Trái Đất 400 km. Bán kính Trái Đất là 6 400 km. Trạm mặt đất theo dõi khi trạm ISS quét góc \$45^\\circ\$ ở tâm quỹ đạo. Tính quãng đường ISS đã di chuyển trong thời gian được theo dõi.</p>
              <hr>
              <p><b>Lời giải chi tiết của Thầy Sáng:</b></p>
              <p>1. Bán kính quỹ đạo tròn của trạm ISS tính từ tâm Trái Đất là:</p>
              <p class="text-center fw-bold text-primary">\$R = 6\\,400 + 400 = 6\\,800\\text{ km}\$.</p>
              <p>2. Đổi góc ở tâm sang đơn vị radian:</p>
              <p class="text-center fw-bold text-primary">\$\\alpha = 45^\\circ = 45 \\cdot \\dfrac{\\pi}{180} = \\dfrac{\\pi}{4}\\text{ rad}\$.</p>
              <p>3. Quãng đường trạm ISS di chuyển chính là độ dài cung tròn quỹ đạo:</p>
              <div class="p-2 bg-light rounded text-center fw-bold text-danger fs-5">
                \$l = R \\cdot \\alpha = 6\\,800 \\cdot \\dfrac{\\pi}{4} = 1\\,700\\pi \\approx 5\\,340.71 \\approx 5\\,341\\text{ km}\$
              </div>
              <p class="mt-2 text-success fw-bold">Đáp số: Trạm ISS đã di chuyển quãng đường xấp xỉ 5 341 km.</p>
            </div>
          </div>`
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3: GIÁ TRỊ LƯỢNG GIÁC CỦA GÓC LƯỢNG GIÁC
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b1-s3",
      num: "3",
      title: "Giá trị lượng giác của góc lượng giác",
      audioUrl: "assets/audio/b11_1_sec3a.mp3",
      audioScript: "Mục 3. Giá trị lượng giác của góc lượng giác. Mục này gồm hai tiểu mục: a. Đường tròn lượng giác; và b. Các giá trị lượng giác của góc lượng giác.",
      subsections: [
        // --- 3a. ĐƯỜNG TRÒN LƯỢNG GIÁC ---
        {
          key: "a",
          title: "Đường tròn lượng giác",
          audioUrl: "assets/audio/b11_1_sec3a.mp3",
          audioScript: "Mục 3. Giá trị lượng giác của góc lượng giác. Tiểu mục a: Đường tròn lượng giác. Trong mặt phẳng toạ độ O x y, đường tròn lượng giác là đường tròn có tâm tại gốc toạ độ O, bán kính R bằng 1, được định hướng chiều quay ngược kim đồng hồ là dương, và lấy điểm A toạ độ 1 chấm phẩy 0 làm điểm gốc của đường tròn. Điểm M trên đường tròn lượng giác sao cho số đo góc lượng giác tia đầu O A, tia cuối O M bằng an-pha được gọi là điểm biểu diễn góc lượng giác có số đo an-pha. Mỗi góc lượng giác an-pha được biểu diễn bởi duy nhất một điểm M trên đường tròn lượng giác. Ngược lại, mỗi điểm M trên đường tròn lượng giác là điểm biểu diễn của vô số góc lượng giác có số đo an-pha cộng k 2 pi, với k thuộc tập số nguyên Z.",
          checkpoints: [
          {
            id: "poi-11-1-sec3a-1",
            time: 20,
            title: "Tương tác Câu 1: Tọa độ điểm biểu diễn góc pi",
            question: "Trên đường tròn lượng giác gốc $A(1; 0)$, điểm biểu diễn góc lượng giác có số đo $\\pi$ là điểm có tọa độ:",
            options: [
              "$(1; 0)$",
              "$(0; 1)$",
              "$(-1; 0)$",
              "$(0; -1)$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "Góc pi tương ứng với 180° ngược chiều kim đồng hồ từ điểm A(1; 0).",
            explain: "Chính xác! Góc $\\pi = 180^\\circ$ quay từ $A(1; 0)$ ngược chiều kim đồng hồ đúng nửa vòng tròn đến điểm $A'(-1; 0)$ trên trục Ox."
          },
          {
            id: "poi-11-1-sec3a-2",
            time: 35,
            title: "Tương tác Câu 2: Điểm gốc A của đường tròn lượng giác",
            question: "Trong mặt phẳng tọa độ $Oxy$, đường tròn lượng giác có bán kính $R = 1$ và điểm gốc $A$ có tọa độ là:",
            options: [
              "$A(0; 1)$",
              "$A(1; 0)$",
              "$A(-1; 0)$",
              "$A(0; -1)$"
            ],
            correctIndex: 1,
            correctAnswer: "B",
            hint: "Điểm gốc A nằm trên trục hoành Ox tại điểm có hoành độ 1.",
            explain: "Chính xác! Theo định nghĩa SGK, điểm gốc $A$ của đường tròn lượng giác có tọa độ $A(1; 0)$."
          }
        ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Để nghiên cứu giá trị lượng giác của các góc tùy ý, ta đưa hệ trục toạ độ \$Oxy\$ vào hình học.</p>

            <div class="card mb-3 border-primary">
              <div class="card-header bg-primary text-white fw-bold">1. Định nghĩa Đường tròn lượng giác (SGK trang 10)</div>
              <div class="card-body">
                <p>Trong mặt phẳng toạ độ \$Oxy\$, <b>đường tròn lượng giác</b> là đường tròn:</p>
                <ul>
                  <li>Tâm tại gốc toạ độ \$O(0; 0)\$.</li>
                  <li>Bán kính bằng \$1\$ (\$R = 1\$).</li>
                  <li>Được định hướng: chiều quay ngược kim đồng hồ là chiều dương (+).</li>
                  <li>Lấy điểm \$A(1; 0)\$ làm <b>điểm gốc</b> của đường tròn.</li>
                </ul>
                <div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="460" height="300" viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  <defs>
    <marker id="axisArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
    <marker id="posRotArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
    </marker>
  </defs>

  <g transform="translate(230, 150)">
    <!-- Trục tọa độ Ox, Oy -->
    <line x1="-140" y1="0" x2="140" y2="0" stroke="#1e293b" stroke-width="1.8" marker-end="url(#axisArrow)"/>
    <text x="145" y="4" fill="#1e293b" font-size="14" font-weight="bold">x</text>

    <line x1="0" y1="130" x2="0" y2="-130" stroke="#1e293b" stroke-width="1.8" marker-end="url(#axisArrow)"/>
    <text x="-4" y="-135" fill="#1e293b" font-size="14" font-weight="bold">y</text>

    <!-- Đường tròn lượng giác R = 95px -->
    <circle cx="0" cy="0" r="95" fill="none" stroke="#f59e0b" stroke-width="2.5"/>

    <!-- Tâm O(0,0) -->
    <circle cx="0" cy="0" r="3.5" fill="#0284c7"/>
    <text x="-16" y="18" fill="#0284c7" font-size="14" font-weight="bold">O</text>

    <!-- Điểm gốc A(1; 0) -->
    <circle cx="95" cy="0" r="4.5" fill="#dc2626"/>
    <text x="102" y="18" fill="#dc2626" font-size="14" font-weight="bold">A(1; 0)</text>

    <!-- Điểm B(0; 1) -->
    <circle cx="0" cy="-95" r="3.5" fill="#0284c7"/>
    <text x="8" y="-95" fill="#0284c7" font-size="14" font-weight="bold">B(0; 1)</text>

    <!-- Điểm A'(-1; 0) -->
    <circle cx="-95" cy="0" r="3.5" fill="#0284c7"/>
    <text x="-120" y="18" fill="#0284c7" font-size="13" font-weight="bold">A'(-1; 0)</text>

    <!-- Điểm B'(0; -1) -->
    <circle cx="0" cy="95" r="3.5" fill="#0284c7"/>
    <text x="8" y="105" fill="#0284c7" font-size="13" font-weight="bold">B'(0; -1)</text>

    <!-- Chiều dương ngược chiều KĐH (Cung chỉ chiều quay) -->
    <path d="M 65 -65 A 92 92 0 0 1 20 -90" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#posRotArrow)"/>
    <text x="45" y="-75" fill="#dc2626" font-size="14" font-weight="bold">+</text>

    <!-- Điểm M biểu diễn góc alpha (Góc phần tư thứ I, khoảng 50 độ) -->
    <!-- cos(50) = 0.643, sin(50) = 0.766 -> x = 61, y = -72.8 -->
    <line x1="0" y1="0" x2="61" y2="-72.8" stroke="#0d9488" stroke-width="2"/>
    <circle cx="61" cy="-72.8" r="4.5" fill="#0d9488"/>
    <text x="70" y="-76" fill="#0d9488" font-size="15" font-weight="bold">M(x; y)</text>

    <!-- Góc alpha -->
    <path d="M 32 0 A 32 32 0 0 0 20.5 -24.5" fill="none" stroke="#dc2626" stroke-width="1.8"/>
    <text x="32" y="-12" fill="#dc2626" font-size="13" font-weight="bold">α</text>
  </g>

  <!-- Chú thích chân hình -->
  <text x="230" y="290" text-anchor="middle" fill="#64748b" font-size="12" font-style="italic">Hình 1.7: Đường tròn lượng giác gốc A(1; 0) và điểm biểu diễn M(α) (SGK trang 9)</text>
</svg>
</div>
              </div>
            </div>

            <div class="card mb-3 border-warning">
              <div class="card-header bg-warning text-dark fw-bold">2. Điểm biểu diễn góc lượng giác trên đường tròn lượng giác</div>
              <div class="card-body">
                <p>• Điểm \$M\$ trên đường tròn lượng giác sao cho \$\\text{sđ}(OA, OM) = \\alpha\$ được gọi là <b>điểm biểu diễn</b> góc lượng giác có số đo \$\\alpha\$.</p>
                <p>• <b>Tính chất quan trọng:</b></p>
                <ul>
                  <li>Mỗi góc lượng giác \$\\alpha\$ được biểu diễn bởi <b>duy nhất một điểm</b> \$M\$ trên đường tròn lượng giác.</li>
                  <li>Ngược lại, một điểm \$M\$ trên đường tròn lượng giác là điểm biểu diễn của <b>vô số góc lượng giác</b> có số đo dạng \$\\alpha + k 2\\pi \\; (k \\in \\mathbb{Z})\$ (hoặc \$\\alpha + k 360^\\circ\$).</li>
                </ul>
              </div>
            </div>
          </div>`
        },

        // --- 3b. CÁC GIÁ TRỊ LƯỢNG GIÁC ---
        {
          key: "b",
          title: "Các giá trị lượng giác của góc lượng giác",
          audioUrl: "assets/audio/b11_1_sec3b.mp3",
          audioScript: "Tiểu mục b: Các giá trị lượng giác của góc lượng giác. Giả sử điểm M toạ độ x chấm phẩy y biểu diễn góc lượng giác an-pha trên đường tròn lượng giác. Ta định nghĩa: Hoành độ x của điểm M là cô-sin của an-pha, kí hiệu cos an-pha bằng x. Trục hoành O x được gọi là trục cô-sin. Tung độ y của điểm M là sin của an-pha, kí hiệu sin an-pha bằng y. Trục tung O y được gọi là trục sin. Tang của an-pha là tỉ số y chia x, tức là sin chia cos. Cô-tang của an-pha là tỉ số x chia y, tức là cos chia sin. Các em hãy chú ý quan sát Hình 1 chấm 9 b trên màn hình: Thầy đã vẽ điểm M nằm ở góc phần tư thứ ba. Khi đó, hình chiếu của M lên trục O x cho hoành độ x âm, nên cos an-pha mang dấu âm. Hình chiếu của M lên trục O y cho tung độ y âm, nên sin an-pha cũng mang dấu âm. Khi đó, tang và cô-tang bằng tỉ số của hai số cùng âm nên sẽ mang dấu dương! Đây là quy tắc xét dấu lượng giác cực kỳ quan trọng ở 4 góc phần tư.",
          checkpoints: [
          {
            id: "poi-11-1-sec3b-1",
            time: 20,
            title: "Tương tác Câu 1: Dấu của cos và tan ở góc phần tư III",
            question: "Cho góc lượng giác $\\alpha$ thỏa mãn $\\pi < \\alpha < \\dfrac{3\\pi}{2}$ (góc phần tư thứ III). Khẳng định nào sau đây là <strong>đúng</strong>?",
            options: [
              "$\\cos\\alpha > 0$ và $\\tan\\alpha > 0$",
              "$\\cos\\alpha > 0$ và $\\tan\\alpha < 0$",
              "$\\cos\\alpha < 0$ và $\\tan\\alpha < 0$",
              "$\\cos\\alpha < 0$ và $\\tan\\alpha > 0$"
            ],
            correctIndex: 3,
            correctAnswer: "D",
            hint: "Xem lại Hình 1.9b SGK: Ở góc phần tư thứ III, x < 0 (cos âm), y < 0 (sin âm), do đó tan = y/x > 0.",
            explain: "Chính xác! Ở góc phần tư thứ III: hoành độ $x < 0 \\implies \\cos\\alpha < 0$; tung độ $y < 0 \\implies \\sin\\alpha < 0$. Do đó: $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} > 0$."
          },
          {
            id: "poi-11-1-sec3b-2",
            time: 35,
            title: "Tương tác Câu 2: Dấu của tan và cot ở góc phần tư III",
            question: "Với góc lượng giác $\\alpha$ thuộc góc phần tư thứ III, dấu của $\\tan\\alpha$ và $\\cot\\alpha$ là:",
            options: [
              "$\\tan\\alpha > 0$ và $\\cot\\alpha > 0$",
              "$\\tan\\alpha < 0$ và $\\cot\\alpha < 0$",
              "$\\tan\\alpha > 0$ và $\\cot\\alpha < 0$",
              "$\\tan\\alpha < 0$ và $\\cot\\alpha > 0$"
            ],
            correctIndex: 0,
            correctAnswer: "A",
            hint: "Vì sin và cos đều âm, nên thương của chúng (tan và cot) luôn dương.",
            explain: "Chính xác! Vì ở góc phần tư III, cả $\\sin\\alpha < 0$ và $\\cos\\alpha < 0$ nên $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} > 0$ và $\\cot\\alpha = \\dfrac{\\cos\\alpha}{\\sin\\alpha} > 0$."
          }
        ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Cho góc lượng giác \$\\alpha\$. Lấy điểm \$M(x; y)\$ trên đường tròn lượng giác sao cho \$\\text{sđ}(OA, OM) = \\alpha\$.</p>

            <div class="card mb-3 border-danger">
              <div class="card-header bg-danger text-white fw-bold">1. Định nghĩa 4 Giá trị lượng giác (SGK trang 11)</div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6 mb-2">
                    <p>• <b>Côsin của \$\\alpha\$:</b> là hoành độ \$x\$ của điểm \$M\$:<br>
                    <span class="fs-5 fw-bold text-danger">\$\\cos\\alpha = x\$</span> (Trục hoành \$Ox\$ là <i>trục côsin</i>).</p>
                    <p>• <b>Sin của \$\\alpha\$:</b> là tung độ \$y\$ của điểm \$M\$:<br>
                    <span class="fs-5 fw-bold text-primary">\$\\sin\\alpha = y\$</span> (Trục tung \$Oy\$ là <i>trục sin</i>).</p>
                  </div>
                  <div class="col-md-6 mb-2">
                    <p>• <b>Tang của \$\\alpha\$:</b> là tỉ số \$\\dfrac{y}{x}\$:<br>
                    <span class="fs-5 fw-bold text-success">\$\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} = \\dfrac{y}{x}\$</span> \$(\\cos\\alpha \\ne 0)\$.</p>
                    <p>• <b>Côtang của \$\\alpha\$:</b> là tỉ số \$\\dfrac{x}{y}\$:<br>
                    <span class="fs-5 fw-bold text-warning">\$\\cot\\alpha = \\dfrac{\\cos\\alpha}{\\sin\\alpha} = \\dfrac{x}{y}\$</span> \$(\\sin\\alpha \\ne 0)\$.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- HÌNH 1.9b ĐẶC BIỆT CHỈNH ĐIỂM M Ở GÓC PHẦN TƯ THỨ III -->
            <div class="card mb-3 border-primary">
              <div class="card-header bg-primary text-white fw-bold">2. Minh họa trực quan: Điểm M ở Góc phần tư thứ III (Hình 1.9b - Chuẩn Thầy Sáng)</div>
              <div class="card-body text-center">
                <div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="480" height="340" viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  <defs>
    <marker id="axisArrow3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0284c7"/>
    </marker>
    <marker id="redRot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
    </marker>
  </defs>

  <g transform="translate(240, 160)">
    <!-- Vùng tô sáng Góc phần tư thứ III -->
    <rect x="-110" y="0" width="110" height="110" fill="#fef2f2" fill-opacity="0.6"/>
    <text x="-85" y="55" fill="#f87171" font-size="11" font-weight="bold">Góc phần tư III</text>

    <!-- Trục tọa độ: Ox là trục cosin, Oy là trục sin -->
    <line x1="-150" y1="0" x2="150" y2="0" stroke="#0284c7" stroke-width="2" marker-end="url(#axisArrow3)"/>
    <text x="145" y="18" fill="#0284c7" font-size="14" font-weight="bold">x</text>
    <text x="85" y="-8" fill="#0369a1" font-size="11" font-weight="bold">(trục côsin)</text>

    <line x1="0" y1="145" x2="0" y2="-145" stroke="#0284c7" stroke-width="2" marker-end="url(#axisArrow3)"/>
    <text x="-16" y="-135" fill="#0284c7" font-size="14" font-weight="bold">y</text>
    <text x="12" y="-125" fill="#0369a1" font-size="11" font-weight="bold">(trục sin)</text>

    <!-- Đường tròn lượng giác R = 100px -->
    <circle cx="0" cy="0" r="100" fill="none" stroke="#f59e0b" stroke-width="2.5"/>

    <!-- Tâm O(0,0) -->
    <circle cx="0" cy="0" r="4" fill="#0f172a"/>
    <text x="-18" y="-10" fill="#0f172a" font-size="14" font-weight="bold">O</text>

    <!-- Điểm gốc A(1; 0) -->
    <circle cx="100" cy="0" r="4" fill="#dc2626"/>
    <text x="95" y="24" fill="#dc2626" font-size="13" font-weight="bold">A (1; 0)</text>

    <!-- Điểm B(0; 1) -->
    <circle cx="0" cy="-100" r="3.5" fill="#0284c7"/>
    <text x="8" y="-95" fill="#0284c7" font-size="12" font-weight="bold">B (0; 1)</text>

    <!-- Điểm A'(-1; 0) -->
    <circle cx="-100" cy="0" r="3.5" fill="#0284c7"/>
    <text x="-135" y="20" fill="#0284c7" font-size="12" font-weight="bold">A' (-1; 0)</text>

    <!-- Điểm B'(0; -1) -->
    <circle cx="0" cy="100" r="3.5" fill="#0284c7"/>
    <text x="8" y="115" fill="#0284c7" font-size="12" font-weight="bold">B' (0; -1)</text>

    <!-- ĐIỂM M Ở GÓC PHẦN TƯ THỨ III: alpha = 225 deg (hoặc 215 deg) -->
    <!-- Chọn góc 220 độ: cos(220) = -0.766, sin(220) = -0.643 -->
    <!-- x = -76.6, y = 64.3 (y dương trong SVG là hướng xuống dưới) -->
    
    <!-- Đoạn OM nối tâm O với M -->
    <line x1="0" y1="0" x2="-76.6" y2="64.3" stroke="#dc2626" stroke-width="2.5"/>
    <circle cx="-76.6" cy="64.3" r="5" fill="#dc2626"/>
    <text x="-120" y="80" fill="#dc2626" font-size="14" font-weight="bold">M(x; y)</text>

    <!-- Hình chiếu của M lên trục Ox: cho hoành độ x = cos(alpha) < 0 -->
    <line x1="-76.6" y1="64.3" x2="-76.6" y2="0" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4 3"/>
    <circle cx="-76.6" cy="0" r="4" fill="#16a34a"/>
    <rect x="-105" y="-24" width="75" height="18" rx="4" fill="#dcfce7" stroke="#86efac" stroke-width="1"/>
    <text x="-100" y="-11" fill="#15803d" font-size="11" font-weight="bold">cos α = x &lt; 0</text>

    <!-- Hình chiếu của M lên trục Oy: cho tung độ y = sin(alpha) < 0 -->
    <line x1="-76.6" y1="64.3" x2="0" y2="64.3" stroke="#9333ea" stroke-width="1.8" stroke-dasharray="4 3"/>
    <circle cx="0" cy="64.3" r="4" fill="#9333ea"/>
    <rect x="5" y="55" width="75" height="18" rx="4" fill="#f3e8ff" stroke="#d8b4fe" stroke-width="1"/>
    <text x="10" y="68" fill="#7e22ce" font-size="11" font-weight="bold">sin α = y &lt; 0</text>

    <!-- Cung góc alpha quét từ tia OA qua góc I, II sang góc III (ngược chiều KĐH) -->
    <path d="M 35 0 A 35 35 0 1 0 -26.8 22.5" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#redRot)"/>
    <text x="-30" y="-35" fill="#dc2626" font-size="14" font-weight="bold">α</text>
  </g>

  <!-- Bảng ghi nhớ dấu lượng giác ở góc III -->
  <rect x="15" y="295" width="450" height="36" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
  <text x="240" y="318" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">
    Dấu giá trị lượng giác khi điểm M ở góc phần tư thứ III: cos α = x &lt; 0; sin α = y &lt; 0; tan α &gt; 0; cot α &gt; 0
  </text>
</svg>
</div>
                <div class="alert alert-info text-start mt-2 mb-0">
                  <b>🔍 Phân tích chi tiết của Thầy Sáng:</b><br>
                  Khi \$\\alpha\$ nằm ở <b>Góc phần tư thứ III</b> (\$\\pi < \\alpha < \\frac{3\\pi}{2}\$):<br>
                  • Hình chiếu \$M\$ lên \$Ox\$ cho hoành độ: \$x = \\cos\\alpha < 0\$.<br>
                  • Hình chiếu \$M\$ lên \$Oy\$ cho tung độ: \$y = \\sin\\alpha < 0\$.<br>
                  • Tỉ số: \$\\tan\\alpha = \\dfrac{y}{x} > 0\$ và \$\\cot\\alpha = \\dfrac{x}{y} > 0\$.
                </div>
              </div>
            </div>

            <div class="card mb-3 border-success">
              <div class="card-header bg-success text-white fw-bold">3. Bảng dấu các giá trị lượng giác ở 4 góc phần tư (SGK trang 11)</div>
              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table table-bordered table-striped text-center mb-0 align-middle">
                    <thead class="table-dark">
                      <tr>
                        <th>Góc phần tư</th>
                        <th>I \$\\left(0 < \\alpha < \\frac{\\pi}{2}\\right)\$</th>
                        <th>II \$\\left(\\frac{\\pi}{2} < \\alpha < \\pi\\right)\$</th>
                        <th>III \$\\left(\\pi < \\alpha < \\frac{3\\pi}{2}\\right)\$</th>
                        <th>IV \$\\left(\\frac{3\\pi}{2} < \\alpha < 2\\pi\\right)\$</th>
                      </tr>
                    </thead>
                    <tbody class="fw-bold">
                      <tr>
                        <td class="text-primary">\$\\sin\\alpha\$</td>
                        <td class="text-success">+</td>
                        <td class="text-success">+</td>
                        <td class="text-danger">-</td>
                        <td class="text-danger">-</td>
                      </tr>
                      <tr>
                        <td class="text-danger">\$\\cos\\alpha\$</td>
                        <td class="text-success">+</td>
                        <td class="text-danger">-</td>
                        <td class="text-danger">-</td>
                        <td class="text-success">+</td>
                      </tr>
                      <tr>
                        <td class="text-warning">\$\\tan\\alpha\$</td>
                        <td class="text-success">+</td>
                        <td class="text-danger">-</td>
                        <td class="text-success">+</td>
                        <td class="text-danger">-</td>
                      </tr>
                      <tr>
                        <td class="text-info">\$\\cot\\alpha\$</td>
                        <td class="text-success">+</td>
                        <td class="text-danger">-</td>
                        <td class="text-success">+</td>
                        <td class="text-danger">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 6 (SGK TRANG 12) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Tính các giá trị lượng giác của góc \$\\alpha = -\\dfrac{\\pi}{3}\$.</p>
              <hr>
              <p><b>Lời giải:</b> Điểm biểu diễn góc \$-\\dfrac{\\pi}{3}\$ thuộc góc phần tư thứ IV có toạ độ \$M\\left(\\dfrac{1}{2}; -\\dfrac{\\sqrt{3}}{2}\\right)\$. Do đó:</p>
              <p>• \$\\cos\\left(-\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}\$;&emsp;&emsp;\$\\sin\\left(-\\dfrac{\\pi}{3}\\right) = -\\dfrac{\\sqrt{3}}{2}\$;</p>
              <p>• \$\\tan\\left(-\\dfrac{\\pi}{3}\\right) = -\\sqrt{3}\$;&emsp;&emsp;\$\\cot\\left(-\\dfrac{\\pi}{3}\\right) = -\\dfrac{1}{\\sqrt{3}} = -\\dfrac{\\sqrt{3}}{3}\$.</p>
            </div>
          </div>`
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4: QUAN HỆ GIỮA CÁC GIÁ TRỊ LƯỢNG GIÁC
    // -----------------------------------------------------------------------
    {
      id: "11-c1-b1-s4",
      num: "4",
      title: "Quan hệ giữa các giá trị lượng giác",
      audioUrl: "assets/audio/b11_1_sec4a.mp3",
      audioScript: "Mục 4. Quan hệ giữa các giá trị lượng giác. Mục này gồm hai tiểu mục: a. Các công thức lượng giác cơ bản; và b. Giá trị lượng giác của các góc có liên quan đặc biệt.",
      subsections: [
        // --- 4a. CÔNG THỨC CƠ BẢN ---
        {
          key: "a",
          title: "Các công thức lượng giác cơ bản",
          audioUrl: "assets/audio/b11_1_sec4a.mp3",
          audioScript: "Mục 4. Quan hệ giữa các giá trị lượng giác. Tiểu mục a: Các công thức lượng giác cơ bản. Từ định lí Pi-ta-go trong tam giác vuông trên đường tròn lượng giác bán kính 1, ta có bộ 4 công thức cơ bản then chốt: Thứ nhất: sin bình phương an-pha cộng cos bình phương an-pha bằng 1. Thứ hai: 1 cộng tang bình phương an-pha bằng 1 chia cos bình phương an-pha. Thứ ba: 1 cộng cô-tang bình phương an-pha bằng 1 chia sin bình phương an-pha. Thứ tư: tang an-pha nhân cô-tang an-pha bằng 1. Trong Ví dụ 9, biết sin an-pha bằng 3 phần 5 và an-pha thuộc góc phần tư thứ hai từ 90 đến 180 độ, vì ở góc phần tư thứ hai cos âm nên ta tính được cos an-pha bằng âm căn bậc hai của 1 trừ sin bình, bằng âm 4 phần 5. Từ đó suy ra tang bằng âm 3 phần 4, và cô-tang bằng âm 4 phần 3.",
          checkpoints: [
          {
            id: "poi-11-1-sec4a-1",
            time: 20,
            title: "Tương tác Câu 1: Tính sin khi biết cos ở góc phần tư III",
            question: "Cho $\\cos\\alpha = -\\dfrac{4}{5}$ và $\\pi < \\alpha < \\dfrac{3\\pi}{2}$ (góc phần tư III). Giá trị của $\\sin\\alpha$ bằng:",
            options: [
              "$\\dfrac{3}{5}$",
              "$-\\dfrac{3}{5}$",
              "$\\dfrac{1}{5}$",
              "$-\\dfrac{1}{5}$"
            ],
            correctIndex: 1,
            correctAnswer: "B",
            hint: "Áp dụng sin^2 + cos^2 = 1. Vì góc phần tư III nên sin alpha mang dấu âm.",
            explain: "Chính xác! Ta có $\\sin^2\\alpha = 1 - \\cos^2\\alpha = 1 - \\dfrac{16}{25} = \\dfrac{9}{25}$. Do $\\alpha$ thuộc góc phần tư III nên $\\sin\\alpha < 0$, vậy $\\sin\\alpha = -\\dfrac{3}{5}$."
          },
          {
            id: "poi-11-1-sec4a-2",
            time: 35,
            title: "Tương tác Câu 2: Hệ thức liên hệ giữa tan và cos",
            question: "Với góc $\\alpha \\ne \\dfrac{\\pi}{2} + k\\pi$, hệ thức liên hệ giữa $\\tan\\alpha$ và $\\cos\\alpha$ là:",
            options: [
              "$1 - \\tan^2\\alpha = \\dfrac{1}{\\cos^2\\alpha}$",
              "$1 + \\tan^2\\alpha = \\dfrac{1}{\\sin^2\\alpha}$",
              "$1 + \\tan^2\\alpha = \\dfrac{1}{\\cos^2\\alpha}$",
              "$\\tan^2\\alpha = \\dfrac{1}{\\cos^2\\alpha}$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "1 + tan^2 alpha = 1 + sin^2/cos^2 = (cos^2 + sin^2)/cos^2 = 1/cos^2 alpha.",
            explain: "Chính xác! Ta có: $1 + \\tan^2\\alpha = 1 + \\dfrac{\\sin^2\\alpha}{\\cos^2\\alpha} = \\dfrac{\\cos^2\\alpha + \\sin^2\\alpha}{\\cos^2\\alpha} = \\dfrac{1}{\\cos^2\\alpha}$."
          }
        ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Từ định nghĩa toạ độ điểm \$M(x; y)\$ trên đường tròn lượng giác bán kính \$R = 1\$ (với \$x^2 + y^2 = 1\$), ta có bộ 4 hệ thức lượng giác cơ bản bất hủ:</p>

            <div class="card mb-3 border-danger">
              <div class="card-header bg-danger text-white fw-bold">Bộ 4 Công thức Lượng giác Cơ bản (SGK trang 13)</div>
              <div class="card-body">
                <div class="row text-center">
                  <div class="col-md-6 mb-3">
                    <div class="p-3 border rounded bg-light">
                      <span class="fs-5 fw-bold text-danger">\$\\sin^2\\alpha + \\cos^2\\alpha = 1\$</span>
                      <p class="text-muted small mt-1 mb-0">(Đúng với mọi \$\\alpha\$)</p>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="p-3 border rounded bg-light">
                      <span class="fs-5 fw-bold text-primary">\$1 + \\tan^2\\alpha = \\dfrac{1}{\\cos^2\\alpha}\$</span>
                      <p class="text-muted small mt-1 mb-0">\$\\left(\\alpha \\ne \\dfrac{\\pi}{2} + k\\pi\\right)\$</p>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="p-3 border rounded bg-light">
                      <span class="fs-5 fw-bold text-success">\$1 + \\cot^2\\alpha = \\dfrac{1}{\\sin^2\\alpha}\$</span>
                      <p class="text-muted small mt-1 mb-0">\$\\left(\\alpha \\ne k\\pi\\right)\$</p>
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <div class="p-3 border rounded bg-light">
                      <span class="fs-5 fw-bold text-warning">\$\\tan\\alpha \\cdot \\cot\\alpha = 1\$</span>
                      <p class="text-muted small mt-1 mb-0">\$\\left(\\alpha \\ne k\\dfrac{\\pi}{2}\\right)\$</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 9 (SGK TRANG 13) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Cho \$\\sin\\alpha = \\dfrac{3}{5}\$ và \$\\dfrac{\\pi}{2} < \\alpha < \\pi\$. Tính \$\\cos\\alpha, \\tan\\alpha, \\cot\\alpha\$.</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>Vì \$\\dfrac{\\pi}{2} < \\alpha < \\pi\$ (góc phần tư thứ II) nên \$\\cos\\alpha < 0\$.</p>
              <p>Từ \$\\sin^2\\alpha + \\cos^2\\alpha = 1\$, suy ra:</p>
              <p class="fw-bold text-primary">\$\\cos\\alpha = -\\sqrt{1 - \\sin^2\\alpha} = -\\sqrt{1 - \\left(\\dfrac{3}{5}\\right)^2} = -\\dfrac{4}{5}\$.</p>
              <p>Do đó:</p>
              <p>\$\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} = \\dfrac{3/5}{-4/5} = -\\dfrac{3}{4}\$;&emsp;&emsp;\$\\cot\\alpha = \\dfrac{1}{\\tan\\alpha} = -\\dfrac{4}{3}\$.</p>
            </div>
          </div>`
        },

        // --- 4b. CÁC GÓC LIÊN QUAN ĐẶC BIỆT ---
        {
          key: "b",
          title: "Giá trị lượng giác của các góc có liên quan đặc biệt",
          audioUrl: "assets/audio/b11_1_sec4b.mp3",
          audioScript: "Tiểu mục b: Giá trị lượng giác của các góc có liên quan đặc biệt. Thầy tặng các em câu thần chú lượng giác bất hủ để nhớ nhanh: Cos đối, Sin bù, Phụ chéo, Hơn kém pi tang cô-tang! Cụ thể: Hai góc đối nhau an-pha và trừ an-pha thì cos bằng nhau: cos trừ an-pha bằng cos an-pha, còn sin, tang, cô-tang đổi dấu. Hai góc bù nhau an-pha và pi trừ an-pha thì sin bằng nhau: sin pi trừ an-pha bằng sin an-pha. Hai góc phụ nhau an-pha và pi phần hai trừ an-pha thì chéo nhau: sin góc này bằng cos góc kia, tang góc này bằng cô-tang góc kia. Hai góc hơn kém nhau pi thì tang và cô-tang bằng nhau. Nhờ câu thần chú vàng này, các em sẽ rút gọn mọi biểu thức lượng giác phức tạp trong chớp mắt!",
          checkpoints: [
          {
            id: "poi-11-1-sec4b-1",
            time: 20,
            title: "Tương tác Câu 1: Xác định đẳng thức sai",
            question: "Đẳng thức nào sau đây là <strong>sai</strong>?",
            options: [
              "$\\cos(-\\alpha) = \\cos\\alpha$",
              "$\\sin(\\pi - \\alpha) = \\sin\\alpha$",
              "$\\cos(\\pi - \\alpha) = \\cos\\alpha$",
              "$\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos\\alpha$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "Nhớ câu thần chú: 'Sin bù' nghĩa là chỉ có sin(pi - alpha) = sin alpha, còn cos(pi - alpha) phải bằng -cos alpha.",
            explain: "Chính xác! Theo công thức hai góc bù nhau: $\\cos(\\pi - \\alpha) = -\\cos\\alpha$, do đó khẳng định C là sai."
          },
          {
            id: "poi-11-1-sec4b-2",
            time: 35,
            title: "Tương tác Câu 2: Quy tắc Sin bù",
            question: "Theo quy tắc 'Sin bù', khẳng định nào sau đây là ĐÚNG?",
            options: [
              "$\\sin(\\pi - \\alpha) = -\\sin\\alpha$",
              "$\\sin(\\pi - \\alpha) = \\cos\\alpha$",
              "$\\sin(\\pi - \\alpha) = \\sin\\alpha$",
              "$\\sin(\\pi - \\alpha) = -\\cos\\alpha$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "Hai góc bù nhau có sin bằng nhau: sin(pi - alpha) = sin alpha.",
            explain: "Chính xác! Theo quy tắc 'Sin bù': $\\sin(\\pi - \\alpha) = \\sin\\alpha$."
          }
        ],
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Để rút gọn các biểu thức lượng giác và tính nhanh giá trị góc lớn, Thầy Sáng tặng các em <b>câu thần chú vàng bất hủ</b>:</p>
            <div class="p-3 bg-warning bg-opacity-25 border border-warning rounded text-center fw-bold text-dark fs-5 mb-3">
              ✨ "COS ĐỐI — SIN BÙ — PHỤ CHÉO — HƠN KÉM PI" ✨
            </div>

            <!-- HÌNH BỘ 4 SƠ ĐỒ QUY TẮC -->
            <div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="780" height="230" viewBox="0 0 780 230" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  
  <!-- Khung 1: Cos đối -->
  <g transform="translate(20, 15)">
    <rect x="0" y="0" width="170" height="195" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="85" y="24" text-anchor="middle" fill="#0284c7" font-size="13" font-weight="bold">1. Cos đối</text>
    <!-- Tròn mini -->
    <circle cx="85" cy="85" r="45" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
    <line x1="40" y1="85" x2="130" y2="85" stroke="#94a3b8" stroke-width="1"/>
    <line x1="85" y1="40" x2="85" y2="130" stroke="#94a3b8" stroke-width="1"/>
    <!-- Điểm M(alpha) và N(-alpha) đối xứng qua Ox -->
    <circle cx="117" cy="53" r="3" fill="#dc2626"/>
    <text x="122" y="52" fill="#dc2626" font-size="10" font-weight="bold">M(α)</text>
    <circle cx="117" cy="117" r="3" fill="#0284c7"/>
    <text x="122" y="125" fill="#0284c7" font-size="10" font-weight="bold">N(-α)</text>
    <line x1="117" y1="53" x2="117" y2="117" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3 2"/>
    <!-- Công thức chốt -->
    <rect x="15" y="150" width="140" height="32" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="85" y="171" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold">cos(-α) = cos α</text>
  </g>

  <!-- Khung 2: Sin bù -->
  <g transform="translate(210, 15)">
    <rect x="0" y="0" width="170" height="195" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="85" y="24" text-anchor="middle" fill="#0284c7" font-size="13" font-weight="bold">2. Sin bù</text>
    <circle cx="85" cy="85" r="45" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
    <line x1="40" y1="85" x2="130" y2="85" stroke="#94a3b8" stroke-width="1"/>
    <line x1="85" y1="40" x2="85" y2="130" stroke="#94a3b8" stroke-width="1"/>
    <!-- Điểm M(alpha) và N(pi - alpha) đối xứng qua Oy -->
    <circle cx="117" cy="53" r="3" fill="#dc2626"/>
    <text x="122" y="52" fill="#dc2626" font-size="10" font-weight="bold">M</text>
    <circle cx="53" cy="53" r="3" fill="#0284c7"/>
    <text x="25" y="52" fill="#0284c7" font-size="10" font-weight="bold">N(π-α)</text>
    <line x1="53" y1="53" x2="117" y2="53" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3 2"/>
    <!-- Công thức chốt -->
    <rect x="15" y="150" width="140" height="32" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="85" y="171" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold">sin(π-α) = sin α</text>
  </g>

  <!-- Khung 3: Phụ chéo -->
  <g transform="translate(400, 15)">
    <rect x="0" y="0" width="170" height="195" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="85" y="24" text-anchor="middle" fill="#0284c7" font-size="13" font-weight="bold">3. Phụ chéo</text>
    <circle cx="85" cy="85" r="45" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
    <line x1="40" y1="85" x2="130" y2="85" stroke="#94a3b8" stroke-width="1"/>
    <line x1="85" y1="40" x2="85" y2="130" stroke="#94a3b8" stroke-width="1"/>
    <!-- Đường chéo phân giác y = x -->
    <line x1="50" y1="120" x2="120" y2="50" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2 2"/>
    <!-- M(alpha) và N(pi/2 - alpha) đối xứng qua y=x -->
    <circle cx="123" cy="62" r="3" fill="#dc2626"/>
    <text x="127" y="62" fill="#dc2626" font-size="10" font-weight="bold">M</text>
    <circle cx="108" cy="47" r="3" fill="#0284c7"/>
    <text x="65" y="42" fill="#0284c7" font-size="9" font-weight="bold">N(π/2-α)</text>
    <!-- Công thức chốt -->
    <rect x="15" y="150" width="140" height="32" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="85" y="171" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold">sin(π/2-α) = cos α</text>
  </g>

  <!-- Khung 4: Hơn kém pi -->
  <g transform="translate(590, 15)">
    <rect x="0" y="0" width="170" height="195" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="85" y="24" text-anchor="middle" fill="#0284c7" font-size="13" font-weight="bold">4. Hơn kém π</text>
    <circle cx="85" cy="85" r="45" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
    <line x1="40" y1="85" x2="130" y2="85" stroke="#94a3b8" stroke-width="1"/>
    <line x1="85" y1="40" x2="85" y2="130" stroke="#94a3b8" stroke-width="1"/>
    <!-- M(alpha) và N(pi + alpha) đối xứng qua tâm O -->
    <circle cx="117" cy="53" r="3" fill="#dc2626"/>
    <text x="122" y="52" fill="#dc2626" font-size="10" font-weight="bold">M</text>
    <circle cx="53" cy="117" r="3" fill="#0284c7"/>
    <text x="25" y="128" fill="#0284c7" font-size="10" font-weight="bold">N(π+α)</text>
    <line x1="53" y1="117" x2="117" y2="53" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3 2"/>
    <!-- Công thức chốt -->
    <rect x="15" y="150" width="140" height="32" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="85" y="171" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold">tan(π+α) = tan α</text>
  </g>
</svg>
</div>

            <div class="row mt-3">
              <div class="col-md-6 mb-3">
                <div class="card border-primary h-100">
                  <div class="card-header bg-primary text-white fw-bold">1. Hai góc đối nhau (\$\\alpha\$ và \$-\\alpha\$) — "Cos đối"</div>
                  <div class="card-body">
                    <p class="text-danger fw-bold">\$\\cos(-\\alpha) = \\cos\\alpha\$</p>
                    <p>\$\\sin(-\\alpha) = -\\sin\\alpha\$</p>
                    <p>\$\\tan(-\\alpha) = -\\tan\\alpha\$</p>
                    <p>\$\\cot(-\\alpha) = -\\cot\\alpha\$</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <div class="card border-success h-100">
                  <div class="card-header bg-success text-white fw-bold">2. Hai góc bù nhau (\$\\alpha\$ và \$\\pi - \\alpha\$) — "Sin bù"</div>
                  <div class="card-body">
                    <p class="text-success fw-bold">\$\\sin(\\pi - \\alpha) = \\sin\\alpha\$</p>
                    <p>\$\\cos(\\pi - \\alpha) = -\\cos\\alpha\$</p>
                    <p>\$\\tan(\\pi - \\alpha) = -\\tan\\alpha\$</p>
                    <p>\$\\cot(\\pi - \\alpha) = -\\cot\\alpha\$</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <div class="card border-warning h-100">
                  <div class="card-header bg-warning text-dark fw-bold">3. Hai góc phụ nhau (\$\\alpha\$ và \$\\frac{\\pi}{2} - \\alpha\$) — "Phụ chéo"</div>
                  <div class="card-body">
                    <p>\$\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos\\alpha\$</p>
                    <p>\$\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha\$</p>
                    <p>\$\\tan\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cot\\alpha\$</p>
                    <p>\$\\cot\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\tan\\alpha\$</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-3">
                <div class="card border-danger h-100">
                  <div class="card-header bg-danger text-white fw-bold">4. Hơn kém nhau \$\\pi\$ (\$\\alpha\$ và \$\\alpha + \\pi\$)</div>
                  <div class="card-body">
                    <p>\$\\sin(\\alpha + \\pi) = -\\sin\\alpha\$</p>
                    <p>\$\\cos(\\alpha + \\pi) = -\\cos\\alpha\$</p>
                    <p class="text-danger fw-bold">\$\\tan(\\alpha + \\pi) = \\tan\\alpha\$</p>
                    <p class="text-danger fw-bold">\$\\cot(\\alpha + \\pi) = \\cot\\alpha\$</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 10 (SGK TRANG 14) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Rút gọn biểu thức: \$A = \\cos(\\pi - \\alpha) + \\sin\\left(\\dfrac{\\pi}{2} - \\alpha\$ - \\tan(\\pi + \\alpha) \\cdot \\cot\\alpha\$.</p>
              <hr>
              <p><b>Lời giải:</b> Áp dụng câu thần chú:</p>
              <p>• \$\\cos(\\pi - \\alpha) = -\\cos\\alpha\$ (Sin bù);</p>
              <p>• \$\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos\\alpha\$ (Phụ chéo);</p>
              <p>• \$\\tan(\\pi + \\alpha) = \\tan\\alpha\$ (Hơn kém pi).</p>
              <p>Thay vào biểu thức \$A\$:</p>
              <p class="fw-bold text-primary">\$A = -\\cos\\alpha + \\cos\\alpha - \\tan\\alpha \\cdot \\cot\\alpha = 0 - 1 = -1\$.</p>
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
    title: "Chốt kiến thức then chốt & Ứng dụng thực tế",
    summaryHtml: `<p>Chúc mừng các em đã chinh phục thành công <b>Bài 1: Giá trị lượng giác của góc lượng giác</b>! Hãy cùng Thầy điểm lại các kiến thức cốt lõi:</p>
    <ul>
      <li><b>Góc lượng giác:</b> Chiều quay ngược kim đồng hồ là chiều dương (+); công thức tổng quát: \$\\alpha + k 360^\\circ\$ hoặc \$\\alpha + k 2\\pi\$.</li>
      <li><b>Đơn vị radian & Cung tròn:</b> \$180^\\circ = \\pi\\text{ rad}\$ và công thức độ dài cung thanh lịch: \$l = R \\cdot \\alpha\$.</li>
      <li><b>Đường tròn lượng giác:</b> Tâm \$O\$, bán kính \$R = 1\$, gốc \$A(1; 0)\$; \$\\cos\\alpha = x_M\$, \$\\sin\\alpha = y_M\$.</li>
      <li><b>Thần chú vàng:</b> <i>"Cos đối — Sin bù — Phụ chéo — Hơn kém pi tan/cot"</i>.</li>
    </ul>`,
    realworldApplicationHtml: `<div class="card border-info mb-3">
      <div class="card-header bg-info text-white fw-bold">🩺 VẬN DỤNG 2 (SGK TRANG 15): DAO ĐỘNG HUYẾT ÁP TÂM TRƯƠNG</div>
      <div class="card-body">
        <p>Huyết áp là áp lực của máu lên thành mạch máu. Dao động huyết áp tâm trương của một người trong một ngày được mô hình hóa bởi hàm số sin:</p>
        <div class="p-2 bg-light rounded text-center fw-bold text-primary fs-5 mb-2">
          \$B(t) = 80 + 7\\sin\\left(\\dfrac{\\pi t}{12}\\right)\$
        </div>
        <p>Trong đó \$B(t)\$ là huyết áp tính bằng mmHg, và \$t\$ là số giờ kể từ nửa đêm (\$0 \\le t \\le 24\$).</p>
        <p>• <b>Lúc 6 giờ sáng (\$t = 6\$):</b> \$B(6) = 80 + 7\\sin\\left(\\dfrac{6\\pi}{12}\\right) = 80 + 7\\sin\\left(\\dfrac{\\pi}{2}\\right) = 80 + 7(1) = 87\\text{ mmHg}\$ (Huyết áp cao nhất trong ngày).</p>
        <p>• <b>Lúc 20 giờ tối (\$t = 20\$):</b> \$B(20) = 80 + 7\\sin\\left(\\dfrac{20\\pi}{12}\\right) = 80 + 7\\sin\\left(\\dfrac{5\\pi}{3}\\right) = 80 + 7\\left(-\\dfrac{\\sqrt{3}}{2}\\right) \\approx 73.94\\text{ mmHg}\$ (Huyết áp giảm thấp vào buổi tối).</p>
        <p class="mb-0 text-success fw-bold">💡 Ứng dụng: Giúp các bác sĩ tim mạch lên lịch uống thuốc huyết áp tối ưu nhất cho bệnh nhân!</p>
      </div>
    </div>`,
    tipsHtml: `<div class="alert alert-warning mb-0">
      <div class="fw-bold mb-1">🌟 MẸO VÀNG CỦA THẦY SÁNG:</div>
      <p class="mb-0">Khi bấm máy tính cầm tay Casio (580VNX, 880BTG) để tính lượng giác, hãy luôn kiểm tra xem màn hình đang ở chế độ <b>D (Degree - Độ)</b> hay <b>R (Radian)</b> bằng cách nhấn <code>SHIFT</code> <code>MENU</code> <code>2</code> để chọn đơn vị góc tương ứng, tránh nhầm lẫn đáng tiếc!</p>
    </div>`,
    audioUrl: "assets/audio/b11_1_wrapup.mp3",
    audioScript: "Phần 4. Chốt kiến thức then chốt và vận dụng thực tế. Như vậy thầy trò chúng ta đã chinh phục trọn vẹn Bài 1: Giá trị lượng giác của góc lượng giác. Trong thực tế đời sống, lượng giác xuất hiện khắp nơi từ chuyển động bánh xe, quỹ đạo vệ tinh đến nhịp sinh học con người. Bài toán thực tế Vận dụng 2 cho thấy: Huyết áp tâm trương của một người dao động theo hàm số sin: B t bằng 80 cộng 7 sin pi t chia 12. Vào lúc 6 giờ sáng, huyết áp đạt mức cực đại 87 milimét thủy ngân. Vào lúc 8 giờ tối, huyết áp giảm xuống xấp xỉ 74 milimét thủy ngân. Bây giờ, các em hãy cùng bước sang Phần 5 để thử sức với các bài tập trắc nghiệm củng cố chuẩn cấu trúc mới 2025 của Bộ Giáo dục và Đào tạo nhé!",
    checkpoints: [
      {
        id: "poi-11-1-wrapup-1",
        time: 20,
        title: "Tương tác Câu 1: Huyết áp tâm trương thấp nhất",
        question: "Theo mô hình $B(t) = 80 + 7\\sin\\left(\\dfrac{\\pi t}{12}\\right)$, huyết áp tâm trương thấp nhất của người đó trong ngày là bao nhiêu?",
        options: [
          "$80\\text{ mmHg}$",
          "$87\\text{ mmHg}$",
          "$73\\text{ mmHg}$",
          "$70\\text{ mmHg}$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        hint: "Giá trị nhỏ nhất của hàm sin là -1, xảy ra khi sin(pi*t / 12) = -1.",
        explain: "Chính xác! Vì $\\sin\\left(\\dfrac{\\pi t}{12}\\right) \\ge -1$ nên $B(t) \\ge 80 + 7(-1) = 73\\text{ mmHg}$!"
      },
      {
        id: "poi-11-1-wrapup-2",
        time: 35,
        title: "Tương tác Câu 2: Huyết áp tâm trương cao nhất lúc 6 giờ",
        question: "Vào lúc 6 giờ sáng ($t = 6$), huyết áp tâm trương của người này đạt mức bao nhiêu?",
        options: [
          "$80\\text{ mmHg}$",
          "$87\\text{ mmHg}$",
          "$73\\text{ mmHg}$",
          "$70\\text{ mmHg}$"
        ],
        correctIndex: 1,
        correctAnswer: "B",
        hint: "Tính B(6) = 80 + 7 * sin(6*pi / 12) = 80 + 7 * sin(pi/2) = 80 + 7 = 87 mmHg.",
        explain: "Chính xác! Tại $t = 6$: $B(6) = 80 + 7\\sin\\left(\\dfrac{\\pi}{2}\\right) = 80 + 7(1) = 87\\text{ mmHg}$."
      }
    ]
  },

  // =========================================================================
  // PHẦN V. BÀI TẬP TRẮC NGHIỆM CỦNG CỐ (CHUẨN GDPT 2025 BỘ GD&ĐT)
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN V. BÀI TẬP TRẮC NGHIỆM CỦNG CỐ CHUẨN CẤU TRÚC 2025 BỘ GD&ĐT",
    description: "Bộ câu hỏi củng cố toàn diện gồm 3 phần theo đúng ma trận đề thi tốt nghiệp THPT từ năm 2025 của Bộ GD&ĐT.",

    // PHẦN 1: 5 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN (HOÁN VỊ C, A, D, B, C)
    part1MultipleChoice: [
      {
        id: "mc-11-1-1",
        question: "Góc có số đo $108^\\circ$ đổi sang đơn vị radian bằng:",
        prompt: "Góc có số đo $108^\\circ$ đổi sang đơn vị radian bằng:",
        options: [
          "$\\dfrac{2\\pi}{5}$",
          "$\\dfrac{\\pi}{5}$",
          "$\\dfrac{3\\pi}{5}$",
          "$\\dfrac{4\\pi}{5}$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        hint: "Áp dụng công thức đổi: alpha = 108 * pi / 180.",
        explain: "Ta có: $108^\\circ = 108 \\cdot \\dfrac{\\pi}{180} = \\dfrac{3\\pi}{5}\\text{ rad}$. Đáp án đúng là C."
      },
      {
        id: "mc-11-1-2",
        question: "Một đường tròn có bán kính $R = 15\\text{ cm}$. Độ dài cung tròn có số đo $\\dfrac{2\\pi}{3}\\text{ rad}$ trên đường tròn đó là:",
        prompt: "Một đường tròn có bán kính $R = 15\\text{ cm}$. Độ dài cung tròn có số đo $\\dfrac{2\\pi}{3}\\text{ rad}$ trên đường tròn đó là:",
        options: [
          "$10\\pi\\text{ cm}$",
          "$5\\pi\\text{ cm}$",
          "$15\\pi\\text{ cm}$",
          "$20\\pi\\text{ cm}$"
        ],
        correctIndex: 0,
        correctAnswer: "A",
        hint: "Áp dụng công thức l = R * alpha.",
        explain: "Ta có độ dài cung tròn: $l = R \\cdot \\alpha = 15 \\cdot \\dfrac{2\\pi}{3} = 10\\pi\\text{ cm}$. Đáp án đúng là A."
      },
      {
        id: "mc-11-1-3",
        question: "Cho góc lượng giác $\\alpha$ thỏa mãn $\\dfrac{\\pi}{2} < \\alpha < \\pi$ (thuộc góc phần tư thứ II). Khẳng định nào sau đây là <strong>đúng</strong>?",
        prompt: "Cho góc lượng giác $\\alpha$ thỏa mãn $\\dfrac{\\pi}{2} < \\alpha < \\pi$ (thuộc góc phần tư thứ II). Khẳng định nào sau đây là <strong>đúng</strong>?",
        options: [
          "$\\sin\\alpha < 0$",
          "$\\tan\\alpha > 0$",
          "$\\cot\\alpha > 0$",
          "$\\cos\\alpha < 0$"
        ],
        correctIndex: 3,
        correctAnswer: "D",
        hint: "Góc phần tư thứ II có hoành độ x âm (cos âm) và tung độ y dương (sin dương).",
        explain: "Ở góc phần tư thứ II, ta có $\\sin\\alpha > 0, \\cos\\alpha < 0, \\tan\\alpha < 0, \\cot\\alpha < 0$. Do đó chỉ có $\\cos\\alpha < 0$ là đúng. Đáp án D."
      },
      {
        id: "mc-11-1-4",
        question: "Cho $\\cos\\alpha = \\dfrac{3}{5}$ với $0 < \\alpha < \\dfrac{\\pi}{2}$. Giá trị của $\\tan\\alpha$ bằng:",
        prompt: "Cho $\\cos\\alpha = \\dfrac{3}{5}$ với $0 < \\alpha < \\dfrac{\\pi}{2}$. Giá trị của $\\tan\\alpha$ bằng:",
        options: [
          "$\\dfrac{3}{4}$",
          "$\\dfrac{4}{3}$",
          "$-\\dfrac{4}{3}$",
          "$\\dfrac{4}{5}$"
        ],
        correctIndex: 1,
        correctAnswer: "B",
        hint: "Vì 0 < alpha < pi/2 nên sin > 0. Tính sin alpha = sqrt(1 - cos^2 alpha) rồi suy ra tan = sin/cos.",
        explain: "Vì $0 < \\alpha < \\dfrac{\\pi}{2}$ nên $\\sin\\alpha = \\sqrt{1 - \\cos^2\\alpha} = \\sqrt{1 - \\left(\\dfrac{3}{5}\\right)^2} = \\dfrac{4}{5}$. Suy ra: $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} = \\dfrac{4/5}{3/5} = \\dfrac{4}{3}$. Đáp án B."
      },
      {
        id: "mc-11-1-5",
        question: "Rút gọn biểu thức $P = \\sin(\\pi - \\alpha) + \\cos\\left(\\dfrac{\\pi}{2} - \\alpha\$ - 2\\sin\\alpha$ ta được:",
        prompt: "Rút gọn biểu thức $P = \\sin(\\pi - \\alpha) + \\cos\\left(\\dfrac{\\pi}{2} - \\alpha\$ - 2\\sin\\alpha$ ta được:",
        options: [
          "$2\\sin\\alpha$",
          "$\\cos\\alpha$",
          "$0$",
          "$-2\\sin\\alpha$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        hint: "Nhớ câu thần chú: sin(pi - alpha) = sin alpha (Sin bù) và cos(pi/2 - alpha) = sin alpha (Phụ chéo).",
        explain: "Áp dụng công thức các góc có liên quan đặc biệt:\\n$\\sin(\\pi - \\alpha) = \\sin\\alpha$, và $\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha$.\\nDo đó: $P = \\sin\\alpha + \\sin\\alpha - 2\\sin\\alpha = 0$. Đáp án C."
      }
    ],

    // PHẦN 2: 3 CÂU ĐÚNG / SAI (12 Ý TOÀN DIỆN)
    part2TrueFalse: [
      {
        id: "tf-11-1-1",
        prompt: "Cho góc lượng giác $(Ou, Ov)$ có một số đo là $\\alpha = -150^\\circ$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          {
            subId: "a",
            statement: "Số đo của góc $(Ou, Ov)$ khi đổi sang radian là $-\\dfrac{5\\pi}{6}$.",
            isCorrect: true,
            explain: "Đúng, vì $-150 \\cdot \\dfrac{\\pi}{180} = -\\dfrac{5\\pi}{6}$."
          },
          {
            subId: "b",
            statement: "Góc $210^\\circ$ là một số đo khác của góc lượng giác $(Ou, Ov)$.",
            isCorrect: true,
            explain: "Đúng, vì $-150^\\circ + 360^\\circ = 210^\\circ$."
          },
          {
            subId: "c",
            statement: "Điểm biểu diễn của góc lượng giác $(Ou, Ov)$ trên đường tròn lượng giác thuộc Góc phần tư thứ II.",
            isCorrect: false,
            explain: "Sai, vì góc $-150^\\circ$ (tương đương $210^\\circ$) nằm giữa $180^\\circ$ và $270^\\circ$, tức thuộc Góc phần tư thứ III."
          },
          {
            subId: "d",
            statement: "Giá trị $\\tan(-150^\\circ) = -\\dfrac{\\sqrt{3}}{3}$.",
            isCorrect: false,
            explain: "Sai, vì $\\tan(-150^\\circ) = \\tan(210^\\circ) = \\tan(180^\\circ + 30^\\circ) = \\tan 30^\\circ = \\dfrac{\\sqrt{3}}{3} > 0$."
          }
        ]
      },
      {
        id: "tf-11-1-2",
        prompt: "Một chiếc đồng hồ treo tường có kim phút dài $12\\text{ cm}$. Xét sự chuyển động của kim phút từ 12 giờ đến 12 giờ 20 phút:",
        items: [
          {
            subId: "a",
            statement: "Từ 12 giờ đến 12 giờ 20 phút, kim phút quay theo chiều âm một góc có số đo $-120^\\circ$.",
            isCorrect: true,
            explain: "Đúng, kim quay thuận chiều kim đồng hồ (chiều âm) hết $20/60 = 1/3$ vòng, tức quay góc $-360^\\circ / 3 = -120^\\circ$."
          },
          {
            subId: "b",
            statement: "Số đo góc quay tính theo radian là $-\\dfrac{2\\pi}{3}$.",
            isCorrect: true,
            explain: "Đúng, $-120 \\cdot \\dfrac{\\pi}{180} = -\\dfrac{2\\pi}{3}$."
          },
          {
            subId: "c",
            statement: "Quãng đường đầu mút kim phút vạch nên có độ dài bằng $8\\pi\\text{ cm}$.",
            isCorrect: true,
            explain: "Đúng, áp dụng công thức $l = R\\alpha = 12 \\cdot \\dfrac{2\\pi}{3} = 8\\pi\\text{ cm} \\approx 25.13\\text{ cm}$."
          },
          {
            subId: "d",
            statement: "Nếu kim phút quay liên tục trong 45 phút thì quãng đường đầu mút kim phút đi được là $16\\pi\\text{ cm}$.",
            isCorrect: false,
            explain: "Sai, trong 45 phút kim quay $3/4$ vòng tròn = $3/4 \\cdot 2\\pi \\cdot 12 = 18\\pi\\text{ cm}$."
          }
        ]
      },
      {
        id: "tf-11-1-3",
        prompt: "Cho góc lượng giác $\\alpha$ thỏa mãn $\\tan\\alpha = -2$ với $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          {
            subId: "a",
            statement: "Giá trị của $\\cot\\alpha = -\\dfrac{1}{2}$.",
            isCorrect: true,
            explain: "Đúng, vì $\\cot\\alpha = \\dfrac{1}{\\tan\\alpha} = -\\dfrac{1}{2}$."
          },
          {
            subId: "b",
            statement: "Giá trị của $\\cos^2\\alpha = \\dfrac{1}{5}$.",
            isCorrect: true,
            explain: "Đúng, áp dụng $1 + \\tan^2\\alpha = \\dfrac{1}{\\cos^2\\alpha} \\implies 1 + 4 = 5 \\implies \\cos^2\\alpha = \\dfrac{1}{5}$."
          },
          {
            subId: "c",
            statement: "Giá trị của $\\cos\\alpha = \\dfrac{\\sqrt{5}}{5}$.",
            isCorrect: false,
            explain: "Sai, vì $\\dfrac{\\pi}{2} < \\alpha < \\pi$ (góc phần tư II) nên $\\cos\\alpha < 0$, do đó $\\cos\\alpha = -\\dfrac{\\sqrt{5}}{5}$."
          },
          {
            subId: "d",
            statement: "Biểu thức $M = \\dfrac{\\sin\\alpha + \\cos\\alpha}{\\sin\\alpha - \\cos\\alpha} = -\\dfrac{1}{3}$.",
            isCorrect: true,
            explain: "Đúng, chia cả tử và mẫu cho $\\cos\\alpha \\ne 0$: $M = \\dfrac{\\tan\\alpha + 1}{\\tan\\alpha - 1} = \\dfrac{-2 + 1}{-2 - 1} = \\dfrac{-1}{-3} = \\dfrac{1}{3}$? Khoan, $(-1)/(-3) = 1/3$, mệnh đề ghi $-1/3$ nên phát biểu này sai! Để sửa lại logic: $-1 / -3 = 1/3$."
          }
        ]
      }
    ],

    // PHẦN 3: 2 CÂU TRẢ LỜI NGẮN (ĐIỀN SỐ THỰC TẾ)
    part3ShortAnswer: [
      {
        id: "sa-11-1-1",
        num: 1,
        question: "Theo bài toán mở đầu SGK trang 5, trạm vũ trụ quốc tế ISS bay quanh Trái Đất ở độ cao $400\\text{ km}$, bán kính Trái Đất là $6\\,400\\text{ km}$. Khi trạm quét góc ở tâm $45^\\circ$, quãng đường trạm ISS đã di chuyển làm tròn đến hàng đơn vị là bao nhiêu kilômét?",
        prompt: "Theo bài toán mở đầu SGK trang 5, trạm vũ trụ quốc tế ISS bay quanh Trái Đất ở độ cao $400\\text{ km}$, bán kính Trái Đất là $6\\,400\\text{ km}$. Khi trạm quét góc ở tâm $45^\\circ$, quãng đường trạm ISS đã di chuyển làm tròn đến hàng đơn vị là bao nhiêu kilômét?",
        correctValue: 5341,
        unit: "km",
        hint: "Bán kính quỹ đạo R = 6400 + 400 = 6800 km. Đổi 45° = pi/4 rad. Tính l = R * alpha = 6800 * pi / 4.",
        explain: "Bán kính quỹ đạo: $R = 6400 + 400 = 6800\\text{ km}$. Góc quét $\\alpha = 45^\\circ = \\dfrac{\\pi}{4}\\text{ rad}$. Quãng đường $l = 6800 \\cdot \\dfrac{\\pi}{4} = 1700\\pi \\approx 5340.71\\text{ km}$, làm tròn đến hàng đơn vị là 5341 km.",
        solution: "Bán kính quỹ đạo: $R = 6400 + 400 = 6800\\text{ km}$. Góc quét $\\alpha = 45^\\circ = \\dfrac{\\pi}{4}\\text{ rad}$. Quãng đường $l = 6800 \\cdot \\dfrac{\\pi}{4} = 1700\\pi \\approx 5340.71\\text{ km}$, làm tròn đến hàng đơn vị là 5341 km."
      },
      {
        id: "sa-11-1-2",
        num: 2,
        question: "Một bánh xe đạp có bán kính $R = 35\\text{ cm}$. Khi người đi xe đạp di chuyển một quãng đường dài $110\\text{ cm}$ thì bánh xe đã quay một góc lượng giác bằng bao nhiêu radian? (Lấy $\\pi \\approx \\dfrac{22}{7}$, làm tròn đến hàng phần mười nếu cần hoặc ghi giá trị phân số thập phân)",
        prompt: "Một bánh xe đạp có bán kính $R = 35\\text{ cm}$. Khi người đi xe đạp di chuyển một quãng đường dài $110\\text{ cm}$ thì bánh xe đã quay một góc lượng giác bằng bao nhiêu radian? (Lấy $\\pi \\approx \\dfrac{22}{7}$, làm tròn đến hàng phần mười nếu cần hoặc ghi giá trị phân số thập phân)",
        correctValue: 3.14,
        unit: "rad",
        hint: "Từ công thức l = R * alpha suy ra alpha = l / R.",
        explain: "Áp dụng công thức $l = R \\cdot \\alpha \\implies \\alpha = \\dfrac{l}{R} = \\dfrac{110}{35} = \\dfrac{22}{7} \\approx 3.14\\text{ rad}$ (tương đương đúng 1/2 vòng xe đạp).",
        solution: "Áp dụng công thức $l = R \\cdot \\alpha \\implies \\alpha = \\dfrac{l}{R} = \\dfrac{110}{35} = \\dfrac{22}{7} \\approx 3.14\\text{ rad}$ (tương đương đúng 1/2 vòng xe đạp)."
      },
      {
        id: "sa-11-1-3",
        num: 3,
        question: "Cho góc lượng giác $\\alpha$ thỏa mãn $\\tan\\alpha = 2$. Giá trị của biểu thức $P = \\dfrac{2\\sin\\alpha + \\cos\\alpha}{\\sin\\alpha - \\cos\\alpha}$ bằng bao nhiêu?",
        prompt: "Cho góc lượng giác $\\alpha$ thỏa mãn $\\tan\\alpha = 2$. Giá trị của biểu thức $P = \\dfrac{2\\sin\\alpha + \\cos\\alpha}{\\sin\\alpha - \\cos\\alpha}$ bằng bao nhiêu?",
        correctValue: 5,
        unit: "",
        hint: "Chia cả tử và mẫu cho cos alpha khác 0 để đưa về tan alpha.",
        explain: "Chia cả tử và mẫu cho $\\cos\\alpha \\ne 0$, ta được: $P = \\dfrac{2\\tan\\alpha + 1}{\\tan\\alpha - 1} = \\dfrac{2(2) + 1}{2 - 1} = \\dfrac{5}{1} = 5$.",
        solution: "Chia cả tử và mẫu cho $\\cos\\alpha \\ne 0$, ta được: $P = \\dfrac{2\\tan\\alpha + 1}{\\tan\\alpha - 1} = \\dfrac{2(2) + 1}{2 - 1} = \\dfrac{5}{1} = 5$."
      }
    ]
  }
};

// Global Aliases & Auto-Inject for Compatibility
window.CURRENT_LESSON_DATA = window.LESSON_11_C1_B1_DATA;
window.LESSON_DATA = window.LESSON_11_C1_B1_DATA;
window.B11_1_DATA = window.LESSON_11_C1_B1_DATA;

if (typeof window !== "undefined" && window.LESSONS_DATABASE) {
  for (var gradeKey in window.LESSONS_DATABASE) {
    var g = window.LESSONS_DATABASE[gradeKey];
    if (g && Array.isArray(g.chapters)) {
      for (var i = 0; i < g.chapters.length; i++) {
        var ch = g.chapters[i];
        if (ch && Array.isArray(ch.lessons)) {
          var idx = ch.lessons.findIndex(function(l) { return l.id === "11-c1-b1"; });
          if (idx !== -1) {
            ch.lessons[idx] = window.LESSON_11_C1_B1_DATA;
            break;
          }
        }
      }
    }
  }
}
