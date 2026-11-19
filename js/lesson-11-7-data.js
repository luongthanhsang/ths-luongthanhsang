// ===========================================================================
// BÀI HỌC SỐ TƯƠNG TÁC HOÀN HẢO - THS. LƯƠNG THANH SÁNG (5 SAO)
// BÀI 7: CẤP SỐ NHÂN - TOÁN 11 KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
// ===========================================================================

window.LESSON_11_C2_B7_DATA = {
  "id": "11-c2-b7",
  "grade": "11",
  "volume": 1,
  "chapterId": "c11-2",
  "chapter": "Chương II. Dãy số. Cấp số cộng và cấp số nhân",
  "title": "Bài 7. Cấp số nhân",
  "badgeText": "BÀI HỌC SỐ LỚP 11",
  "subject": "Toán học 11 - Kết nối tri thức với cuộc sống",
  "duration": "90 phút",
  "author": "ThS. Lương Thanh Sáng",
  "school": "THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang",

  // =======================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG (5% TIẾN TRÌNH)
  // =======================================================================
  "teacherWelcome": {
    "title": "Lời chào truyền cảm hứng từ ThS. Lương Thanh Sáng",
    "audioUrl": "assets/audio/b11_7_welcome.mp3",
    "audioScript": "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Chào mừng các em đến với Bài 7: Cấp số nhân. Nếu như ở bài học trước, chúng ta đã cùng nhau khám phá quy luật cộng dồn thẳng tắp của Cấp số cộng, thì Cấp số nhân lại mang đến một sức mạnh tăng trưởng bùng nổ phi thường theo hàm số mũ! Từ hợp đồng tiền lương tăng trưởng phần trăm của một kỹ sư công nghệ thông tin, tốc độ phân chia nhân đôi chóng mặt của quần thể tế bào và vi khuẩn, cho đến câu chuyện huyền thoại về phần thưởng hạt thóc trên bàn cờ vua làm kinh ngạc cả một đế chế - tất cả đều tuân theo quy luật tuyệt đẹp của Cấp số nhân. Nắm chắc bài học này, các em sẽ làm chủ định nghĩa, công bội quy nạp, công thức số hạng tổng quát và tuyệt chiêu tính tổng n số hạng đầu để tự tin bứt phá điểm số cao trong các kì thi. Nào, thầy trò chúng ta hãy cùng nhau bắt đầu bài học tràn đầy năng lượng nhé!",
    "quote": "Toán học mở ra quy luật tăng trưởng kỳ diệu của vũ trụ và đời sống. Cấp số nhân chính là chiếc đòn bẩy tư duy đưa các em từ quy luật cộng dồn đơn giản vươn tới sức mạnh bùng nổ của cấp số mũ trong khoa học và tài chính hiện đại.",
    "signature": "ThS. Lương Thanh Sáng - GV Toán THPT Nguyễn Văn Thoại"
  },

  // =======================================================================
  // PHẦN II. MỤC TIÊU & YÊU CẦU CẦN ĐẠT (5% TIẾN TRÌNH)
  // =======================================================================
  "learningGoals": {
    "title": "Mục tiêu và Yêu cầu cần đạt (Chuẩn GDPT 2018)",
    "audioUrl": "assets/audio/b11_7_goals.mp3",
    "audioScript": "Phần 2. Mục tiêu và yêu cầu cần đạt Bài 7, Cấp số nhân. Sau bài học này, các em cần nắm vững bốn mục tiêu trọng tâm: Thứ nhất, nhận biết một dãy số là cấp số nhân và xác định công bội. Thứ hai, hiểu bản chất và vận dụng thành thạo công thức số hạng tổng quát u n bằng u 1 nhân q mũ n trừ 1. Thứ ba, tính chuẩn xác tổng của n số hạng đầu của cấp số nhân. Thứ tư, giải quyết linh hoạt các bài toán thực tiễn gắn với đời sống.",
    "goals": [
      {
        "icon": "fa-solid fa-compass",
        "title": "Nhận biết cấp số nhân",
        "desc": "Nhận biết một dãy số (hữu hạn hay vô hạn) là cấp số nhân và xác định chuẩn xác số hạng đầu $u_1$ cùng công bội $q$."
      },
      {
        "icon": "fa-solid fa-calculator",
        "title": "Số hạng tổng quát",
        "desc": "Hiểu bản chất quy nạp và vận dụng thành thạo công thức $u_n = u_1 \\cdot q^{n-1}$ ($n \\ge 2$) cùng tính chất trung bình nhân $u_k^2 = u_{k-1} \\cdot u_{k+1}$."
      },
      {
        "icon": "fa-solid fa-cubes-stacked",
        "title": "Tính tổng n số hạng đầu",
        "desc": "Làm chủ công thức tính tổng $S_n = \\dfrac{u_1(1 - q^n)}{1 - q}$ ($q \\ne 1$) và kỹ thuật triệt tiêu sai phân đại số."
      },
      {
        "icon": "fa-solid fa-chart-line",
        "title": "Ứng dụng tăng trưởng thực tế",
        "desc": "Vận dụng giải quyết các mô hình thực tế: tăng trưởng lương phần trăm, nhân đôi vi khuẩn sinh học, bài toán lãi kép ngân hàng và truyền thuyết hạt thóc bàn cờ vua."
      },
      {
        "icon": "fa-solid fa-award",
        "title": "Chinh phục bài tập thi mới 2026",
        "desc": "Rèn luyện tư duy tự tin làm chủ cả 3 dạng thức đề thi mới: Trắc nghiệm 4 lựa chọn, Đúng/Sai đa ý và Trả lời ngắn."
      }
    ]
  },

  // =======================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN TƯƠNG TÁC (70% TIẾN TRÌNH)
  // =======================================================================
  "hook": {
    "title": "Tình huống mở đầu (Bài toán hợp đồng lương chuyên gia CNTT)",
    "audioUrl": "assets/audio/b11_7_hook.mp3",
    "audioScript": "Tình huống mở đầu. Bài toán hợp đồng tiền lương của chuyên gia công nghệ thông tin. Một công ty công nghệ tuyển dụng chuyên gia với mức lương năm đầu tiên là 240 triệu đồng và cam kết sẽ tăng thêm 5% lương mỗi năm so với năm liền trước đó. Hỏi sau 10 năm cống hiến cho công ty, tổng số tiền lương mà vị chuyên gia đó nhận được là bao nhiêu? Liệu quy luật tăng trưởng phần trăm này có gì khác biệt so với việc tăng một số tiền cố định mỗi năm?",
    "contentHtml": `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
        <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-laptop-code"></i> TÌNH HUỐNG THỰC TẾ: BÀI TOÁN LƯƠNG CHUYÊN GIA CNTT (SGK TRANG 51)</h5>
        <p class="text-secondary mb-3">Một công ty tuyển một chuyên gia về công nghệ thông tin với mức lương năm đầu là <b>240 triệu đồng</b> và cam kết sẽ <b>tăng thêm 5% lương mỗi năm</b> so với năm liền trước đó. Tính tổng số lương mà chuyên gia đó nhận được sau khi làm việc cho công ty 10 năm (làm tròn đến triệu đồng).</p>

        <!-- ĐỒ HỌA SVG BÀI TOÁN LƯƠNG CNTT -->
        <div class="text-center my-3">
          <svg viewBox="0 0 760 250" style="max-width:100%; height:auto; background:#0f172a; border-radius:12px; border:1.5px solid #334155; box-shadow:0 6px 20px rgba(0,0,0,0.3);">
  <defs>
    <linearGradient id="glowSalary" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="barCSN" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
  </defs>

  <!-- TIÊU ĐỀ BÀI TOÁN KHỞI NGHIỆP CNTT -->
  <text x="380" y="26" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">BÀI TOÁN MỞ ĐẦU: HỢP ĐỒNG LƯƠNG CỦA KỸ SƯ CÔNG NGHỆ THÔNG TIN (SGK TRANG 51)</text>

  <!-- TRỤC TỌA ĐỘ -->
  <line x1="60" y1="200" x2="480" y2="200" stroke="#475569" stroke-width="2"/>
  <line x1="60" y1="200" x2="60" y2="50" stroke="#475569" stroke-width="2"/>
  <text x="50" y="48" font-family="sans-serif" font-size="10" font-weight="bold" fill="#94a3b8" text-anchor="end">Triệu đ</text>
  <text x="485" y="204" font-family="sans-serif" font-size="11" font-weight="bold" fill="#94a3b8">Năm</text>

  <!-- ĐƯỜNG CONG TĂNG TRƯỞNG MŨ CỦA LƯƠNG -->
  <path d="M 85 155 Q 260 135 450 85" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4"/>

  <!-- CÁC CỘT LƯƠNG ĐẠI DIỆN -->
  <!-- Năm 1: 240 tr -->
  <rect x="75" y="155" width="22" height="45" rx="3" fill="#0284c7"/>
  <text x="86" y="148" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">240</text>
  <text x="86" y="215" font-family="sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Năm 1</text>

  <!-- Năm 2: 252 tr -->
  <rect x="115" y="152" width="22" height="48" rx="3" fill="#0284c7"/>
  <text x="126" y="145" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">252</text>
  <text x="126" y="215" font-family="sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">2</text>

  <!-- Năm 3: 264.6 tr -->
  <rect x="155" y="149" width="22" height="51" rx="3" fill="#0284c7"/>
  <text x="166" y="142" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">264.6</text>
  <text x="166" y="215" font-family="sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">3</text>

  <!-- Năm 4: 277.8 tr -->
  <rect x="195" y="145" width="22" height="55" rx="3" fill="#0284c7"/>
  <text x="206" y="138" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">277.8</text>
  <text x="206" y="215" font-family="sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">4</text>

  <!-- Năm 5: 291.7 tr -->
  <rect x="235" y="141" width="22" height="59" rx="3" fill="#0284c7"/>
  <text x="246" y="134" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">291.7</text>
  <text x="246" y="215" font-family="sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">5</text>

  <!-- Chấm lửng -->
  <text x="290" y="170" font-family="sans-serif" font-size="16" font-weight="bold" fill="#94a3b8">. . .</text>

  <!-- Năm 10: 372.3 tr -->
  <rect x="438" y="85" width="25" height="115" rx="3" fill="url(#barCSN)"/>
  <text x="450" y="78" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#fbbf24" text-anchor="middle">372.3 tr</text>
  <text x="450" y="215" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#fbbf24" text-anchor="middle">Năm 10</text>

  <!-- MŨI TÊN NHÂN CÔNG BỘI -->
  <path d="M 86 135 Q 106 120 126 135" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="106" y="120" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#fbbf24" text-anchor="middle">×1,05</text>

  <!-- HỘP THỐNG KÊ QUY LUẬT CẤP SỐ NHÂN -->
  <rect x="500" y="55" width="235" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="617" y="78" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">QUY LUẬT CẤP SỐ NHÂN</text>
  <text x="515" y="100" font-family="sans-serif" font-size="10.5" fill="#e2e8f0">• Năm đầu: u₁ = 240 triệu</text>
  <text x="515" y="118" font-family="sans-serif" font-size="10.5" fill="#e2e8f0">• Tăng 5%/năm ⇒ q = 1 + 0,05 = 1,05</text>
  <text x="515" y="136" font-family="sans-serif" font-size="10.5" fill="#e2e8f0">• Lương năm 10: u₁₀ = u₁·q⁹</text>
  <text x="515" y="154" font-family="sans-serif" font-size="11" font-weight="bold" fill="#fbbf24">  = 240·(1,05)⁹ ≈ 372,32 tr</text>
  <line x1="515" y1="164" x2="720" y2="164" stroke="#475569"/>
  <text x="515" y="185" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#34d399">⇒ Tổng 10 năm: S₁₀ ≈ 3.021,35 tr!</text>
</svg>
        </div>

        <div class="alert alert-info border-start border-4 border-info">
          <h6 class="fw-bold mb-1"><i class="fa-solid fa-lightbulb text-warning"></i> Góc suy ngẫm của Thầy Sáng:</h6>
          <p class="mb-1">• Lương năm thứ nhất: $u_1 = 240$ triệu đồng.</p>
          <p class="mb-1">• Lương năm thứ hai: $u_2 = 240 + 240 \\times 5\\% = 240 \\times (1 + 0{,}05) = 240 \\times 1{,}05 = 252$ triệu đồng.</p>
          <p class="mb-1">• Lương năm thứ ba: $u_3 = 252 \\times 1{,}05 = 240 \\times (1{,}05)^2 = 264{,}6$ triệu đồng.</p>
          <p class="mb-0">• Ta thấy mỗi năm, tiền lương đều được <b>nhân với một số không đổi</b> $q = 1{,}05$. Dãy số như vậy được gọi là <b>Cấp số nhân</b>! Làm thế nào để tính tổng tiền lương 10 năm $S_{10} = u_1 + u_2 + \\dots + u_{10}$ một cách chuẩn xác và thông minh nhất? Thầy trò chúng ta hãy cùng khám phá ngay sau đây!</p>
        </div>
      </div>`
  },

  "sections": [
    // ---------------------------------------------------------------------
    // MỤC 1. ĐỊNH NGHĨA CẤP SỐ NHÂN
    // ---------------------------------------------------------------------
    {
      "id": "sec-1",
      "title": "1. ĐỊNH NGHĨA CẤP SỐ NHÂN",
      "audioUrl": "assets/audio/b11_7_sec1a.mp3",
      "audioScript": "Mục 1. Định nghĩa cấp số nhân. Tiểu mục a, Định nghĩa và Khái niệm công bội. Cấp số nhân là một dãy số mà kể từ số hạng thứ hai, mỗi số hạng đều bằng tích của số hạng đứng ngay trước nó với một số không đổi q. Số q được gọi là công bội của cấp số nhân. Hệ thức truy hồi là u n bằng u n trừ 1 nhân q với mọi n lớn hơn hoặc bằng 2. Đặc biệt, nếu công bội q lớn hơn 0, các số hạng cùng dấu; nếu q nhỏ hơn 0, cấp số nhân là một dãy số đan dấu xen kẽ âm dương.",
      "subsections": [
        // 1a. Định nghĩa và Khái niệm công bội q
        {
          "id": "sub-1a",
          "code": "1a",
          "title": "1a. Định nghĩa và Khái niệm công bội q",
          "audioUrl": "assets/audio/b11_7_sec1a.mp3",
          "audioScript": "Mục 1. Định nghĩa cấp số nhân. Tiểu mục a, Định nghĩa và Khái niệm công bội. Cấp số nhân là một dãy số mà kể từ số hạng thứ hai, mỗi số hạng đều bằng tích của số hạng đứng ngay trước nó với một số không đổi q. Số q được gọi là công bội của cấp số nhân. Hệ thức truy hồi là u n bằng u n trừ 1 nhân q với mọi n lớn hơn hoặc bằng 2. Đặc biệt, nếu công bội q lớn hơn 0, các số hạng cùng dấu; nếu q nhỏ hơn 0, cấp số nhân là một dãy số đan dấu xen kẽ âm dương.",
          "duration": 58,
          "pois": [
            {
              "time": 0.35,
              "question": "Trong cấp số nhân (un), hệ thức liên hệ giữa hai số hạng liên tiếp un và un-1 là gì?",
              "options": [
                "un = un-1 · q (n ≥ 2)",
                "un = un-1 + q (n ≥ 2)",
                "un = (un-1)² · q",
                "un = un-1 / q"
              ],
              "correctIndex": 0,
              "explain": "Định nghĩa chuẩn: Kể từ số hạng thứ hai, mỗi số hạng bằng số hạng đứng ngay trước nó nhân với công bội q: un = un-1 · q (n ≥ 2)."
            },
            {
              "time": 0.70,
              "question": "Dãy số không đổi 7, 7, 7, 7,... có phải là một cấp số nhân không? Nếu có thì công bội q bằng bao nhiêu?",
              "options": [
                "Không phải cấp số nhân",
                "Là cấp số nhân với công bội q = 1",
                "Là cấp số nhân với công bội q = 0",
                "Là cấp số nhân với công bội q = 7"
              ],
              "correctIndex": 1,
              "explain": "Dãy số hằng khác 0 là cấp số nhân có công bội q = 1 vì 7 · 1 = 7."
            }
          ],
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-white shadow-sm rounded-3">
              <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-book-open"></i> 1a. ĐỊNH NGHĨA VÀ KHÁI NIỆM CÔNG BỘI $q$</h5>

              <!-- ĐỒ HỌA TRỤC SỐ CÔNG BỘI -->
              <div class="text-center my-3">
                <svg viewBox="0 0 760 160" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <marker id="arrowCSN" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706"/>
    </marker>
    <marker id="axisArrowCSN" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
  </defs>

  <!-- TRỤC SỐ NẰM NGANG -->
  <line x1="50" y1="105" x2="710" y2="105" stroke="#334155" stroke-width="2.5" marker-end="url(#axisArrowCSN)"/>
  <text x="715" y="110" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155">n</text>

  <!-- CÁC ĐIỂM SỐ HẠNG u1, u2, u3, u4, un -->
  <!-- u1 -->
  <circle cx="120" cy="105" r="6" fill="#2563eb"/>
  <text x="120" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₁</text>
  <text x="120" y="146" font-family="sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">(Số hạng đầu)</text>

  <!-- Cung nhân u1 -> u2 -->
  <path d="M 125 95 Q 185 45 245 95" fill="none" stroke="#d97706" stroke-width="2.5" marker-end="url(#arrowCSN)"/>
  <rect x="165" y="45" width="40" height="20" rx="4" fill="#fef3c7" stroke="#d97706"/>
  <text x="185" y="59" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d97706" text-anchor="middle">× q</text>

  <!-- u2 -->
  <circle cx="250" cy="105" r="6" fill="#2563eb"/>
  <text x="250" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₂</text>
  <text x="250" y="146" font-family="sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">u₁ · q</text>

  <!-- Cung nhân u2 -> u3 -->
  <path d="M 255 95 Q 315 45 375 95" fill="none" stroke="#d97706" stroke-width="2.5" marker-end="url(#arrowCSN)"/>
  <rect x="295" y="45" width="40" height="20" rx="4" fill="#fef3c7" stroke="#d97706"/>
  <text x="315" y="59" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d97706" text-anchor="middle">× q</text>

  <!-- u3 -->
  <circle cx="380" cy="105" r="6" fill="#2563eb"/>
  <text x="380" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₃</text>
  <text x="380" y="146" font-family="sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">u₁ · q²</text>

  <!-- Cung nhân u3 -> u4 -->
  <path d="M 385 95 Q 445 45 505 95" fill="none" stroke="#d97706" stroke-width="2.5" marker-end="url(#arrowCSN)"/>
  <rect x="425" y="45" width="40" height="20" rx="4" fill="#fef3c7" stroke="#d97706"/>
  <text x="445" y="59" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d97706" text-anchor="middle">× q</text>

  <!-- u4 -->
  <circle cx="510" cy="105" r="6" fill="#2563eb"/>
  <text x="510" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₄</text>
  <text x="510" y="146" font-family="sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">u₁ · q³</text>

  <!-- Cung nhảy u4 -> ... -> un -->
  <path d="M 515 95 Q 575 45 635 95" fill="none" stroke="#d97706" stroke-width="2.5" stroke-dasharray="5,4" marker-end="url(#arrowCSN)"/>
  <rect x="555" y="45" width="40" height="20" rx="4" fill="#fef3c7" stroke="#d97706"/>
  <text x="575" y="59" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d97706" text-anchor="middle">× q</text>

  <!-- un -->
  <circle cx="640" cy="105" r="6" fill="#059669"/>
  <text x="640" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#059669" text-anchor="middle">uₙ</text>
  <text x="640" y="146" font-family="sans-serif" font-size="10.5" fill="#059669" text-anchor="middle">u₁ · qⁿ⁻¹</text>

  <!-- TIÊU ĐỀ HỘP -->
  <rect x="210" y="10" width="340" height="26" rx="6" fill="#f8fafc" stroke="#94a3b8"/>
  <text x="380" y="27" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a" text-anchor="middle">QUY LUẬT BƯỚC NHÂN CÔNG BỘI: uₙ = uₙ₋₁ · q (n ≥ 2)</text>
</svg>
              </div>

              <div class="p-3 mb-3 bg-light rounded-3 border-start border-4 border-primary">
                <h6 class="fw-bold text-primary mb-2"><i class="fa-solid fa-bookmark"></i> ĐỊNH NGHĨA CHUẨN MỰC (SGK TRANG 52):</h6>
                <p class="mb-2">• <b>Cấp số nhân</b> là một dãy số (hữu hạn hoặc vô hạn), trong đó kể từ số hạng thứ hai, mỗi số hạng đều là tích của số hạng đứng ngay trước nó với một số không đổi $q$.</p>
                <p class="mb-2">• Số $q$ được gọi là <b>công bội</b> của cấp số nhân.</p>
                <div class="p-2 bg-white rounded border border-primary text-center fw-bold text-primary fs-5 mb-2">
                  $u_n = u_{n-1} \\cdot q \\quad \\text{với mọi } n \\ge 2$
                </div>
              </div>

              <!-- HỘP THẢO LUẬN -->
              <div class="alert alert-warning border-0 mb-3">
                <h6 class="fw-bold text-dark mb-1"><i class="fa-solid fa-circle-question text-danger"></i> Câu hỏi tư duy (SGK trang 52):</h6>
                <p class="mb-1">Dãy số không đổi $a, a, a, \\dots$ có phải là một cấp số nhân không?</p>
                <p class="mb-0 text-success fw-bold"><i class="fa-solid fa-check-circle"></i> Trả lời của Thầy Sáng: Có! Nếu $a \\ne 0$, đây là cấp số nhân có công bội $q = 1$. Nếu $a = 0$, dãy $0, 0, 0, \\dots$ cũng là cấp số nhân với công bội $q$ tùy ý!</p>
              </div>
            </div>`,
          "workedExample": {
            "title": "Ví dụ 1 (SGK trang 52): Viết năm số hạng đầu của cấp số nhân",
            "problem": "Cho cấp số nhân có số hạng đầu $u_1 = 5$ và công bội $q = -2$. Viết năm số hạng đầu của cấp số nhân này.",
            "question": "Cho cấp số nhân có số hạng đầu $u_1 = 5$ và công bội $q = -2$. Viết năm số hạng đầu của cấp số nhân này.",
            "teacherGuidance": "Áp dụng công thức truy hồi un = un-1 · q. Vì công bội q = -2 mang dấu âm nên dãy số sẽ đan dấu xen kẽ giữa dương và âm.",
            "solution": `<p class="mb-2"><b>Lời giải chi tiết:</b></p>
            <p class="mb-1">Theo định nghĩa hệ thức truy hồi của cấp số nhân $u_n = u_{n-1} \\cdot q$:</p>
            <ul class="mb-2">
              <li>Số hạng thứ nhất: $u_1 = 5$.</li>
              <li>Số hạng thứ hai: $u_2 = u_1 \\cdot q = 5 \\cdot (-2) = -10$.</li>
              <li>Số hạng thứ ba: $u_3 = u_2 \\cdot q = (-10) \\cdot (-2) = 20$.</li>
              <li>Số hạng thứ tư: $u_4 = u_3 \\cdot q = 20 \\cdot (-2) = -40$.</li>
              <li>Số hạng thứ năm: $u_5 = u_4 \\cdot q = (-40) \\cdot (-2) = 80$.</li>
            </ul>
            <p class="mb-0 text-primary"><b>Kết luận:</b> Năm số hạng đầu của cấp số nhân là $5; \\, -10; \\, 20; \\, -40; \\, 80$. Dãy số xen kẽ dấu dương và âm gọi là <i>dãy số đan dấu</i>.</p>`,
            "similarProblem": "Cho cấp số nhân có $u_1 = 4$ và $q = -3$. Viết năm số hạng đầu của cấp số nhân này."
          },
          "practiceProblem": {
            "title": "Luyện tập 1a: Viết các số hạng đầu và xét tính đan dấu",
            "problem": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = -3$ và công bội $q = 2$. Viết năm số hạng đầu của dãy số và cho biết dãy số này có đan dấu không?",
            "hint": "Áp dụng hệ thức truy hồi $u_n = u_{n-1} \\cdot q$. Chú ý dấu của công bội $q = 2 > 0$.",
            "solution": `<p class="mb-2"><b>Lời giải chi tiết:</b></p>
            <p class="mb-1">Ta có $u_1 = -3$. Các số hạng tiếp theo là:</p>
            <ul class="mb-2">
              <li>$u_2 = u_1 \\cdot q = (-3) \\cdot 2 = -6$.</li>
              <li>$u_3 = u_2 \\cdot q = (-6) \\cdot 2 = -12$.</li>
              <li>$u_4 = u_3 \\cdot q = (-12) \\cdot 2 = -24$.</li>
              <li>$u_5 = u_4 \\cdot q = (-24) \\cdot 2 = -48$.</li>
            </ul>
            <p class="mb-0">Năm số hạng đầu là $-3; \\, -6; \\, -12; \\, -24; \\, -48$. Vì $q = 2 > 0$ nên dãy số <b>không đan dấu</b> mà toàn bộ các số hạng đều mang dấu âm giảm dần.</p>`
          }
        },

        // 1b. Phương pháp chứng minh một dãy số là cấp số nhân
        {
          "id": "sub-1b",
          "code": "1b",
          "title": "1b. Phương pháp chứng minh một dãy số là cấp số nhân",
          "audioUrl": "assets/audio/b11_7_sec1b.mp3",
          "audioScript": "Tiểu mục b: Phương pháp chứng minh một dãy số là cấp số nhân. Để chứng minh dãy số u n gồm các số khác 0 là một cấp số nhân, ta xét tỉ số giữa hai số hạng liên tiếp: u n chia cho u n trừ 1. Nếu tỉ số này luôn bằng một hằng số q không đổi và không phụ thuộc vào n, thì dãy số đã cho chính là một cấp số nhân có công bội q.",
          "duration": 42,
          "pois": [
            {
              "time": 0.35,
              "question": "Để chứng minh một dãy số (un) (với un ≠ 0) là cấp số nhân, ta cần chứng minh điều gì?",
              "options": [
                "Tỉ số un / un-1 là một hằng số không đổi với mọi n ≥ 2",
                "Hiệu un - un-1 là một hằng số không đổi với mọi n ≥ 2",
                "Tích un · un-1 là một số dương",
                "Dãy số (un) tăng dần"
              ],
              "correctIndex": 0,
              "explain": "Để chứng minh cấp số nhân, ta chứng minh tỉ số hai số hạng liên tiếp un / un-1 = q là hằng số không phụ thuộc vào n."
            },
            {
              "time": 0.70,
              "question": "Dãy số (un) có số hạng tổng quát un = 3 · 2ⁿ. Tỉ số un / un-1 bằng bao nhiêu?",
              "options": [
                "2",
                "3",
                "6",
                "2ⁿ"
              ],
              "correctIndex": 0,
              "explain": "Ta có un / un-1 = (3 · 2ⁿ) / (3 · 2ⁿ⁻¹) = 2. Do đó (un) là cấp số nhân có q = 2."
            }
          ],
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-white shadow-sm rounded-3">
              <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-calculator"></i> 1b. PHƯƠNG PHÁP CHỨNG MINH DÃY SỐ LÀ CẤP SỐ NHÂN</h5>

              <div class="p-3 mb-3 bg-light rounded-3 border-start border-4 border-success">
                <h6 class="fw-bold text-success mb-2"><i class="fa-solid fa-graduation-cap"></i> CẨM NANG PHƯƠNG PHÁP CỦA THẦY SÁNG:</h6>
                <p class="mb-2">Cho dãy số $(u_n)$ với số hạng tổng quát cho trước ($u_n \\ne 0$ với mọi $n$). Để chứng minh $(u_n)$ là một cấp số nhân, ta thực hiện:</p>
                <ol class="mb-2">
                  <li><b>Bước 1:</b> Lập tỉ số giữa hai số hạng liên tiếp: $\\dfrac{u_n}{u_{n-1}}$ (với mọi $n \\ge 2$) hoặc $\\dfrac{u_{n+1}}{u_n}$ (với mọi $n \\ge 1$).</li>
                  <li><b>Bước 2:</b> Rút gọn biểu thức bằng các quy tắc lũy thừa: $\\dfrac{a^m}{a^n} = a^{m-n}$.</li>
                  <li><b>Bước 3:</b> Kết luận: Nếu kết quả ra một hằng số $q$ không đổi (hoàn toàn triệt tiêu biến $n$), thì dãy $(u_n)$ là cấp số nhân có công bội $q$, số hạng đầu là $u_1$.</li>
                </ol>
              </div>

              <!-- LƯU Ý SƯ PHẠM SGK -->
              <div class="p-3 bg-white rounded border border-info mb-2">
                <p class="mb-0 text-info fw-bold"><i class="fa-solid fa-comment-dots"></i> Lời khuyên của cô giáo (SGK trang 53): <i>\"Để chứng minh dãy số $(u_n)$ gồm các số khác 0 là một cấp số nhân, hãy chứng minh tỉ số $\\dfrac{u_n}{u_{n-1}}$ không đổi.\"</i></p>
              </div>
            </div>`,
          "workedExample": {
            "title": "Ví dụ 2 (SGK trang 52-53): Chứng minh dãy số là cấp số nhân",
            "problem": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{1}{3^{n-1}}$. Chứng minh rằng dãy số này là một cấp số nhân. Xác định số hạng đầu và công bội của nó.",
            "question": "Cho dãy số $(u_n)$ với $u_n = \\dfrac{1}{3^{n-1}}$. Chứng minh rằng dãy số này là một cấp số nhân. Xác định số hạng đầu và công bội của nó.",
            "teacherGuidance": "Áp dụng quy tắc chia hai lũy thừa cùng cơ số: a^(m) / a^(n) = a^(m - n). Khi triệt tiêu hết n, ta được một hằng số cố định.",
            "solution": `<p class="mb-2"><b>Lời giải chi tiết:</b></p>
            <p class="mb-2">Với mọi $n \\ge 2$, ta xét tỉ số giữa hai số hạng liên tiếp:</p>
            <div class="p-2 bg-light rounded text-center mb-2">
              $$\\dfrac{u_n}{u_{n-1}} = \\dfrac{\\dfrac{1}{3^{n-1}}}{\\dfrac{1}{3^{(n-1)-1}}} = \\dfrac{1}{3^{n-1}} \\cdot \\dfrac{3^{n-2}}{1} = 3^{(n-2)-(n-1)} = 3^{-1} = \\dfrac{1}{3}$$
            </div>
            <p class="mb-2">Tức là $u_n = \\dfrac{1}{3} \\cdot u_{n-1}$ với mọi $n \\ge 2$.</p>
            <p class="mb-1">Vì tỉ số này là hằng số $\\dfrac{1}{3}$ không phụ thuộc vào $n$, nên dãy số $(u_n)$ là một cấp số nhân.</p>
            <p class="mb-0 text-success"><b>Kết luận:</b> Cấp số nhân có số hạng đầu $u_1 = \\dfrac{1}{3^{1-1}} = 1$ và công bội $q = \\dfrac{1}{3}$.</p>`,
            "similarProblem": "Cho dãy số $(u_n)$ với $u_n = 5 \\cdot 4^{n}$. Chứng minh rằng $(u_n)$ là cấp số nhân và tìm $u_1, q$."
          },
          "practiceProblem": {
            "title": "Luyện tập 1 (SGK trang 53): Chứng minh dãy số mũ là cấp số nhân",
            "problem": "Cho dãy số $(u_n)$ với $u_n = 2 \\cdot 5^n$. Chứng minh rằng dãy số này là một cấp số nhân. Xác định số hạng đầu và công bội của nó.",
            "hint": "Lập tỉ số $\\dfrac{u_n}{u_{n-1}}$ với $n \\ge 2$ và thay $n = 1$ để tìm số hạng đầu $u_1$.",
            "solution": `<p class="mb-2"><b>Lời giải chi tiết:</b></p>
            <p class="mb-1">Với mọi $n \\ge 2$, ta có:</p>
            <div class="p-2 bg-light rounded text-center mb-2">
              $$\\dfrac{u_n}{u_{n-1}} = \\dfrac{2 \\cdot 5^n}{2 \\cdot 5^{n-1}} = \\dfrac{5^n}{5^{n-1}} = 5$$
            </div>
            <p class="mb-2">Tỉ số $\\dfrac{u_n}{u_{n-1}} = 5$ là một hằng số không đổi với mọi $n \\ge 2$.</p>
            <p class="mb-0 text-success"><b>Kết luận:</b> Dãy số $(u_n)$ là một cấp số nhân với số hạng đầu $u_1 = 2 \\cdot 5^1 = 10$ và công bội $q = 5$.</p>`
          }
        }
      ]
    },

    // ---------------------------------------------------------------------
    // MỤC 2. SỐ HẠNG TỔNG QUÁT CỦA CẤP SỐ NHÂN
    // ---------------------------------------------------------------------
    {
      "id": "sec-2",
      "title": "2. SỐ HẠNG TỔNG QUÁT CỦA CẤP SỐ NHÂN",
      "audioUrl": "assets/audio/b11_7_sec2a.mp3",
      "audioScript": "Mục 2. Số hạng tổng quát. Tiểu mục a: Công thức số hạng tổng quát của cấp số nhân. Nếu một cấp số nhân có số hạng đầu u 1 và công bội q, thì số hạng tổng quát u n được tính bằng: u n bằng u 1 nhân q mũ n trừ 1 với mọi n lớn hơn hoặc bằng 2. Các em hãy ghi nhớ: số mũ của công bội q luôn luôn nhỏ hơn chỉ số của số hạng đúng 1 đơn vị. Từ đó, ta có thể tính trực tiếp bất kì số hạng thứ bao nhiêu mà không cần tính tuần tự các số hạng trước nó.",
      "subsections": [
        // 2a. Công thức số hạng tổng quát un = u1 * q^(n-1)
        {
          "id": "sub-2a",
          "code": "2a",
          "title": "2a. Công thức số hạng tổng quát un = u1 · qⁿ⁻¹",
          "audioUrl": "assets/audio/b11_7_sec2a.mp3",
          "audioScript": "Mục 2. Số hạng tổng quát. Tiểu mục a: Công thức số hạng tổng quát của cấp số nhân. Nếu một cấp số nhân có số hạng đầu u 1 và công bội q, thì số hạng tổng quát u n được tính bằng: u n bằng u 1 nhân q mũ n trừ 1 với mọi n lớn hơn hoặc bằng 2. Các em hãy ghi nhớ: số mũ của công bội q luôn luôn nhỏ hơn chỉ số của số hạng đúng 1 đơn vị. Từ đó, ta có thể tính trực tiếp bất kì số hạng thứ bao nhiêu mà không cần tính tuần tự các số hạng trước nó.",
          "duration": 62,
          "pois": [
            {
              "time": 0.35,
              "question": "Công thức số hạng tổng quát của cấp số nhân có số hạng đầu u1 và công bội q là:",
              "options": [
                "un = u1 · qⁿ⁻¹ (n ≥ 2)",
                "un = u1 · qⁿ",
                "un = u1 + (n - 1)q",
                "un = u1 · (q - 1)ⁿ"
              ],
              "correctIndex": 0,
              "explain": "Định lý SGK trang 53: un = u1 · qⁿ⁻¹. Số mũ của q luôn bằng (n - 1)."
            },
            {
              "time": 0.70,
              "question": "Cho cấp số nhân có u1 = 3 và q = 2. Giá trị của số hạng thứ 5 (u5) là:",
              "options": [
                "48",
                "96",
                "24",
                "32"
              ],
              "correctIndex": 0,
              "explain": "Áp dụng công thức: u5 = u1 · q⁴ = 3 · 2⁴ = 3 · 16 = 48."
            }
          ],
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-white shadow-sm rounded-3">
              <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-superscript"></i> 2a. CÔNG THỨC SỐ HẠNG TỔNG QUÁT $u_n = u_1 \\cdot q^{n-1}$</h5>

              <!-- ĐỒ HỌA BẬC THANG LŨY THỪA -->
              <div class="text-center my-3">
                <svg viewBox="0 0 760 210" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <linearGradient id="geomGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  </defs>

  <!-- BẬC THANG TĂNG TRƯỞNG MŨ CỦA SỐ HẠNG -->
  <!-- Bậc 1: u1 -->
  <rect x="70" y="150" width="75" height="30" rx="4" fill="#e2e8f0" stroke="#94a3b8"/>
  <text x="107" y="170" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₁</text>

  <!-- Bậc 2: u2 = u1 * q -->
  <rect x="165" y="130" width="75" height="50" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="202" y="152" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">u₂</text>
  <text x="202" y="170" font-family="sans-serif" font-size="10" fill="#92400e" text-anchor="middle">u₁ · q¹</text>

  <!-- Bậc 3: u3 = u1 * q^2 -->
  <rect x="260" y="105" width="75" height="75" rx="4" fill="#fde68a" stroke="#d97706"/>
  <text x="297" y="132" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">u₃</text>
  <text x="297" y="152" font-family="sans-serif" font-size="10" fill="#78350f" text-anchor="middle">u₁ · q²</text>

  <!-- Bậc 4: u4 = u1 * q^3 -->
  <rect x="355" y="75" width="75" height="105" rx="4" fill="#fcd34d" stroke="#b45309"/>
  <text x="392" y="112" font-family="sans-serif" font-size="12" font-weight="bold" fill="#78350f" text-anchor="middle">u₄</text>
  <text x="392" y="132" font-family="sans-serif" font-size="10" fill="#451a03" text-anchor="middle">u₁ · q³</text>

  <!-- Dấu chấm lửng -->
  <text x="460" y="125" font-family="sans-serif" font-size="20" font-weight="bold" fill="#64748b">. . .</text>

  <!-- Bậc thứ n: un = u1 * q^(n-1) -->
  <rect x="510" y="30" width="160" height="150" rx="6" fill="url(#geomGrad)" stroke="#92400e" stroke-width="2"/>
  <text x="590" y="75" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">uₙ</text>
  <text x="590" y="108" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fef08a" text-anchor="middle">u₁ · qⁿ⁻¹</text>
  <text x="590" y="135" font-family="sans-serif" font-size="10.5" fill="#fef3c7" text-anchor="middle">(Số hạng tổng quát)</text>
  <text x="590" y="155" font-family="sans-serif" font-size="9.5" fill="#ffffff" opacity="0.9" text-anchor="middle">Số mũ của q luôn bằng (n - 1)</text>

  <!-- MŨI TÊN NHẢY (n-1) LẦN NHÂN CÔNG BỘI q -->
  <path d="M 107 140 Q 340 -15 580 20" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
  <rect x="260" y="8" width="220" height="24" rx="4" fill="#eff6ff" stroke="#2563eb"/>
  <text x="370" y="24" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Nhân liên tiếp (n - 1) lần công bội q ⇒ qⁿ⁻¹</text>

  <!-- ĐƯỜNG ĐÁY MẶT ĐẤT -->
  <line x1="50" y1="180" x2="710" y2="180" stroke="#334155" stroke-width="3"/>
</svg>
              </div>

              <div class="p-3 mb-3 bg-light rounded-3 border-start border-4 border-warning">
                <h6 class="fw-bold text-dark mb-2"><i class="fa-solid fa-award text-warning"></i> ĐỊNH LÍ SỐ HẠNG TỔNG QUÁT (SGK TRANG 53):</h6>
                <p class="mb-2">Nếu một cấp số nhân có số hạng đầu $u_1$ và công bội $q$ thì <b>số hạng tổng quát</b> $u_n$ của nó được xác định bởi công thức:</p>
                <div class="p-2 bg-white rounded border border-warning text-center fw-bold text-dark fs-5 mb-2">
                  $u_n = u_1 \\cdot q^{n-1} \\quad \\text{với mọi } n \\ge 2$
                </div>
                <p class="mb-0 text-muted fst-italic">Lưu ý: Công thức cũng đúng với $n = 1$ vì $u_1 = u_1 \\cdot q^0 = u_1 \\cdot 1 = u_1$.</p>
              </div>

              <!-- BẢNG TÍNH CHẤT TRUNG BÌNH NHÂN -->
              <div class="p-3 bg-white rounded border border-secondary mb-2">
                <h6 class="fw-bold text-primary mb-1"><i class="fa-solid fa-cube"></i> TÍNH CHẤT ĐẶC TRƯNG CỦA CẤP SỐ NHÂN:</h6>
                <p class="mb-1">Mỗi số hạng (trừ số hạng đầu và cuối) đều có bình phương bằng tích của hai số hạng đứng kề nó:</p>
                <div class="text-center fw-bold text-danger my-1">
                  $u_k^2 = u_{k-1} \\cdot u_{k+1} \\quad \\text{hay} \\quad |u_k| = \\sqrt{u_{k-1} \\cdot u_{k+1}} \\quad (k \\ge 2)$
                </div>
                <p class="mb-0 text-secondary text-center small">(Số hạng đứng giữa bằng trung bình nhân của hai số hạng hai bên nếu các số hạng cùng dấu dương).</p>
              </div>
            </div>`,
          "workedExample": {
            "title": "Ví dụ 3 (SGK trang 53): Tìm năm số hạng đầu và số hạng thứ 100",
            "problem": "Tìm năm số hạng đầu và số hạng thứ 100 của cấp số nhân: $8, \\, -4, \\dots$",
            "question": "Tìm năm số hạng đầu và số hạng thứ 100 của cấp số nhân: $8, \\, -4, \\dots$",
            "teacherGuidance": "Xác định công bội q = u2 / u1 = -4/8 = -1/2. Số hạng thứ 100 có số mũ của q bằng 100 - 1 = 99.",
            "solution": `<p class="mb-2"><b>Lời giải chi tiết:</b></p>
            <p class="mb-2">Cấp số nhân này có số hạng đầu $u_1 = 8$ và công bội:</p>
            <div class="text-center mb-2">
              $$q = \\dfrac{u_2}{u_1} = \\dfrac{-4}{8} = -\\dfrac{1}{2}$$
            </div>
            <p class="mb-1">Do đó, năm số hạng đầu của cấp số nhân là:</p>
            <div class="p-2 bg-light rounded text-center mb-2">
              $$u_1 = 8, \\quad u_2 = -4, \\quad u_3 = 2, \\quad u_4 = -1, \\quad u_5 = \\dfrac{1}{2}$$
            </div>
            <p class="mb-2">Số hạng thứ 100 của cấp số nhân được tính theo công thức:</p>
            <div class="p-2 bg-light rounded text-center mb-2">
              $$u_{100} = u_1 \\cdot q^{99} = 8 \\cdot \\left(-\\dfrac{1}{2}\\right)^{99} = 2^3 \\cdot \\left[ -\\dfrac{1}{2^{99}} \\right] = -\\dfrac{2^3}{2^{99}} = -\\dfrac{1}{2^{96}}$$
            </div>
            <p class="mb-0 text-success"><b>Kết luận:</b> Số hạng thứ 100 là $u_{100} = -\\dfrac{1}{2^{96}}$.</p>`,
            "similarProblem": "Tìm số hạng thứ 50 của cấp số nhân: $16, \\, -8, \\dots$"
          },
          "practiceProblem": {
            "title": "Luyện tập 2a: Tìm số hạng và kiểm tra phần tử của cấp số nhân",
            "problem": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = \\dfrac{1}{16}$ và công bội $q = 2$. Hãy tìm số hạng thứ 15 và kiểm tra xem số $1024$ là số hạng thứ mấy của dãy số.",
            "hint": "Sử dụng công thức $u_n = u_1 \\cdot q^{n-1}$. Thiết lập phương trình $u_1 \\cdot q^{n-1} = 1024$ và đưa về cùng cơ số 2.",
            "solution": `<p class="mb-2"><b>Lời giải chi tiết:</b></p>
            <p class="mb-2">1) Tìm số hạng thứ 15:</p>
            <div class="text-center mb-2">
              $$u_{15} = u_1 \\cdot q^{14} = \\dfrac{1}{16} \\cdot 2^{14} = 2^{-4} \\cdot 2^{14} = 2^{10} = 1024$$
            </div>
            <p class="mb-2">2) Kiểm tra số 1024 là số hạng thứ mấy:</p>
            <p class="mb-2">Giả sử $u_n = 1024$, ta có phương trình:</p>
            <div class="text-center mb-2">
              $$\\dfrac{1}{16} \\cdot 2^{n-1} = 1024 \\Leftrightarrow 2^{n-1} = 1024 \\cdot 16 = 2^{10} \\cdot 2^4 = 2^{14} \\Leftrightarrow n - 1 = 14 \\Leftrightarrow n = 15$$
            </div>
            <p class="mb-0 text-success"><b>Kết luận:</b> $u_{15} = 1024$, và 1024 chính là số hạng thứ 15 của cấp số nhân.</p>`
          }
        },

        // 2b. Xác định các yếu tố của cấp số nhân và bài toán thực tế
        {
          "id": "sub-2b",
          "code": "2b",
          "title": "2b. Xác định các yếu tố của cấp số nhân và bài toán thực tế",
          "audioUrl": "assets/audio/b11_7_sec2b.mp3",
          "audioScript": "Tiểu mục b: Xác định các yếu tố của cấp số nhân và bài toán thực tế. Khi biết hai số hạng bất kì, ta biểu diễn chúng theo u 1 và q rồi lập tỉ số để khử u 1, tìm ra công bội q. Đặc biệt với ba số hạng liên tiếp, bình phương số hạng ở giữa bằng tích của hai số hạng hai bên, tức là u k bình phương bằng u k trừ 1 nhân u k cộng 1. Đây cũng chính là nền tảng để giải bài toán tăng trưởng quần thể vi khuẩn hay lãi suất kép trong đời sống.",
          "duration": 52,
          "pois": [
            {
              "time": 0.35,
              "question": "Nếu ba số thực dương a, b, c theo thứ tự lập thành một cấp số nhân thì mối quan hệ giữa chúng là:",
              "options": [
                "b² = a · c",
                "b = (a + c) / 2",
                "b = a · c",
                "b² = a + c"
              ],
              "correctIndex": 0,
              "explain": "Tính chất trung bình nhân: Bình phương số hạng ở giữa bằng tích hai số hạng kề bên: b² = a · c."
            },
            {
              "time": 0.70,
              "question": "Một quần thể vi khuẩn ban đầu có 1 000 con, sau mỗi giờ tăng gấp đôi. Sau 4 giờ, số lượng vi khuẩn là:",
              "options": [
                "16 000 con",
                "8 000 con",
                "32 000 con",
                "4 000 con"
              ],
              "correctIndex": 0,
              "explain": "Sau 4 giờ: N = 1000 · 2⁴ = 1000 · 16 = 16 000 con vi khuẩn."
            }
          ],
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-white shadow-sm rounded-3">
              <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-dna"></i> 2b. XÁC ĐỊNH CÁC YẾU TỐ VÀ MÔ HÌNH TĂNG TRƯỞNG MŨ</h5>

              <div class="p-3 mb-3 bg-light rounded-3 border-start border-4 border-danger">
                <h6 class="fw-bold text-danger mb-2"><i class="fa-solid fa-key"></i> PHƯƠNG PHÁP GIẢI HỆ PHƯƠNG TRÌNH CẤP SỐ NHÂN:</h6>
                <p class="mb-2">Khi đề bài cho mối liên hệ giữa các số hạng, ta luôn đưa toàn bộ về hai ẩn cơ bản là $u_1$ và $q$:</p>
                <div class="p-2 bg-white rounded border border-danger text-center mb-2">
                  $\\begin{cases} u_m = u_1 \\cdot q^{m-1} \\\\ u_k = u_1 \\cdot q^{k-1} \\end{cases} \\implies \\dfrac{u_k}{u_m} = q^{k-m}$
                </div>
                <p class="mb-0 text-muted fst-italic">Lưu ý: Nếu $k - m$ là số chẵn, phương trình $q^{2p} = C$ sẽ có hai nghiệm đối nhau $q = \\pm \\sqrt[2p]{C}$. Ta cần dựa vào điều kiện số hạng dương hay âm để chọn nghiệm thích hợp.</p>
              </div>

              <!-- KHUNG TĂNG TRƯỞNG SINH HỌC & LÃI SUẤT KÉP -->
              <div class="alert alert-success border-0 mb-2">
                <h6 class="fw-bold text-success mb-1"><i class="fa-solid fa-bacteria"></i> MÔ HÌNH TĂNG TRƯỞNG VI SINH VẬT & TÀI CHÍNH:</h6>
                <p class="mb-1">• Quần thể vi khuẩn tăng trưởng $r\\%$ mỗi chu kỳ: $u_t = u_0 \\cdot (1 + r)^t$.</p>
                <p class="mb-0">• Tiền gửi tiết kiệm lãi kép hàng năm $r$: Sau $n$ năm số tiền cả gốc lẫn lãi là $A = P \\cdot (1 + r)^n$.</p>
              </div>
            </div>`,
          "workedExample": {
            "title": "Ví dụ 4 (SGK trang 53-54): Tìm số hạng khi biết hai số hạng bất kì",
            "problem": "Cho một cấp số nhân gồm các số hạng dương. Biết số hạng thứ 10 bằng 1 536 và số hạng thứ 12 bằng 6 144. Tìm số hạng thứ 20 của cấp số nhân đó.",
            "question": "Cho một cấp số nhân gồm các số hạng dương. Biết số hạng thứ 10 bằng 1 536 và số hạng thứ 12 bằng 6 144. Tìm số hạng thứ 20 của cấp số nhân đó.",
            "teacherGuidance": "Lập tỉ số u12 / u10 = q^2 = 6144 / 1536 = 4. Do các số hạng dương nên ta chọn q = 2.",
            "solution": `<p class="mb-2"><b>Lời giải chi tiết:</b></p>
            <p class="mb-2">Giả sử $u_1$ là số hạng đầu và $q$ là công bội của cấp số nhân đã cho. Ta có:</p>
            <div class="p-2 bg-light rounded text-center mb-2">
              $$\\begin{cases} u_{10} = u_1 \\cdot q^9 = 1\\,536 \\\\ u_{12} = u_1 \\cdot q^{11} = 6\\,144 \\end{cases}$$
            </div>
            <p class="mb-2">Lấy phương trình thứ hai chia cho phương trình thứ nhất, ta được:</p>
            <div class="text-center mb-2">
              $$\\dfrac{u_1 \\cdot q^{11}}{u_1 \\cdot q^9} = \\dfrac{6\\,144}{1\\,536} \\Leftrightarrow q^2 = 4 \\Leftrightarrow q = 2 \\quad \\text{hoặc} \\quad q = -2$$
            </div>
            <p class="mb-2">Vì cấp số nhân gồm các số hạng dương nên $q > 0 \\Rightarrow q = 2$.</p>
            <p class="mb-2">Thay $q = 2$ vào phương trình thứ nhất: $u_1 \\cdot 2^9 = 1\\,536 \\Leftrightarrow u_1 \\cdot 512 = 1\\,536 \\Rightarrow u_1 = 3$.</p>
            <p class="mb-2">Vậy số hạng thứ 20 của cấp số nhân đã cho là:</p>
            <div class="p-2 bg-light rounded text-center mb-2">
              $$u_{20} = u_1 \\cdot q^{19} = 3 \\cdot 2^{19} = 3 \\cdot 524\\,288 = 1\\,572\\,864$$
            </div>
            <p class="mb-0 text-success"><b>Đáp số:</b> $u_{20} = 1\\,572\\,864$.</p>`,
            "similarProblem": "Cho cấp số nhân có các số hạng dương với $u_3 = 12$ và $u_5 = 48$. Tìm số hạng thứ 10 của cấp số nhân."
          },
          "practiceProblem": {
            "title": "Luyện tập 2 (SGK trang 54): Bài toán tăng trưởng nuôi cấy vi khuẩn",
            "problem": "Trong một lọ nuôi cấy vi khuẩn, ban đầu có 5 000 con vi khuẩn và số lượng vi khuẩn tăng lên thêm 8% mỗi giờ. Hỏi sau 5 giờ thì số lượng vi khuẩn là bao nhiêu (làm tròn kết quả đến hàng đơn vị)?",
            "hint": "Số lượng vi khuẩn ban đầu là $N_0 = 5\\,000$. Mỗi giờ tăng 8% tương ứng công bội $q = 1 + 0{,}08 = 1{,}08$. Sau $n = 5$ giờ, số lượng đạt $N_5 = N_0 \\cdot q^5$.",
            "solution": `<p class="mb-2"><b>Lời giải chi tiết:</b></p>
            <p class="mb-2">Số lượng vi khuẩn sau mỗi giờ lập thành một cấp số nhân:</p>
            <ul class="mb-2">
              <li>Thời điểm ban đầu ($t = 0$): $N_0 = 5\\,000$ con vi khuẩn.</li>
              <li>Công bội tăng trưởng mỗi giờ: $q = 1 + 8\\% = 1 + 0{,}08 = 1{,}08$.</li>
              <li>Sau 1 giờ: $N_1 = 5\\,000 \\cdot 1{,}08 = 5\\,400$ con.</li>
            </ul>
            <p class="mb-2">Sau 5 giờ nuôi cấy, số lượng vi khuẩn là:</p>
            <div class="p-2 bg-light rounded text-center mb-2">
              $$N_5 = N_0 \\cdot q^5 = 5\\,000 \\cdot (1{,}08)^5 \\approx 5\\,000 \\cdot 1{,}469328 = 7\\,346{,}64 \\approx 7\\,347 \\text{ con}$$
            </div>
            <p class="mb-0 text-success"><b>Đáp số:</b> Sau 5 giờ, trong lọ nuôi cấy có khoảng <b>7 347 con vi khuẩn</b>.</p>`
          }
        }
      ]
    },

    // ---------------------------------------------------------------------
    // MỤC 3. TỔNG n SỐ HẠNG ĐẦU CỦA CẤP SỐ NHÂN
    // ---------------------------------------------------------------------
    {
      "id": "sec-3",
      "title": "3. TỔNG n SỐ HẠNG ĐẦU CỦA CẤP SỐ NHÂN",
      "audioUrl": "assets/audio/b11_7_sec3a.mp3",
      "audioScript": "Mục 3. Tổng n số hạng đầu của một cấp số nhân. Tiểu mục a, Công thức tính tổng S n. Cho cấp số nhân có công bội q khác một. Tổng của n số hạng đầu tiên được tính theo công thức: S n bằng u 1 nhân mở ngoặc 1 trừ q mũ n đóng ngoặc, tất cả chia cho 1 trừ q. Bằng kĩ thuật nhân sai phân và trừ hai vế, toàn bộ các số hạng ở giữa đều bị triệt tiêu, đem lại cho chúng ta một công thức rút gọn vô cùng thanh lịch và mạnh mẽ.",
      "subsections": [
        // 3a. Công thức tính tổng Sn
        {
          "id": "sub-3a",
          "code": "3a",
          "title": "3a. Công thức tính tổng Sn của cấp số nhân",
          "audioUrl": "assets/audio/b11_7_sec3a.mp3",
          "audioScript": "Mục 3. Tổng n số hạng đầu của một cấp số nhân. Tiểu mục a, Công thức tính tổng S n. Cho cấp số nhân có công bội q khác một. Tổng của n số hạng đầu tiên được tính theo công thức: S n bằng u 1 nhân mở ngoặc 1 trừ q mũ n đóng ngoặc, tất cả chia cho 1 trừ q. Bằng kĩ thuật nhân sai phân và trừ hai vế, toàn bộ các số hạng ở giữa đều bị triệt tiêu, đem lại cho chúng ta một công thức rút gọn vô cùng thanh lịch và mạnh mẽ.",
          "duration": 55,
          "pois": [
            {
              "time": 0.35,
              "question": "Công thức tính tổng n số hạng đầu của cấp số nhân với công bội q ≠ 1 là:",
              "options": [
                "Sn = u1(1 - qⁿ) / (1 - q)",
                "Sn = u1(1 - q) / (1 - qⁿ)",
                "Sn = n(u1 + un) / 2",
                "Sn = u1 · qⁿ"
              ],
              "correctIndex": 0,
              "explain": "Định lý SGK trang 54: Sn = u1(1 - qⁿ) / (1 - q) với q ≠ 1."
            },
            {
              "time": 0.70,
              "question": "Nếu cấp số nhân có công bội q = 1 thì tổng n số hạng đầu Sn bằng bao nhiêu?",
              "options": [
                "Sn = n · u1",
                "Sn = 0",
                "Sn = u1",
                "Sn = (u1)ⁿ"
              ],
              "correctIndex": 0,
              "explain": "Khi q = 1, cấp số nhân là dãy hằng u1, u1,... nên tổng n số hạng là Sn = n · u1."
            }
          ],
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-white shadow-sm rounded-3">
              <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-layer-group"></i> 3a. CÔNG THỨC TÍNH TỔNG $S_n$ CỦA CẤP SỐ NHÂN</h5>

              <!-- ĐỒ HỌA SAI PHÂN ĐẠI SỐ -->
              <div class="text-center my-3">
                <svg viewBox="0 0 760 210" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <linearGradient id="diffGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="diffGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
  </defs>

  <!-- TIÊU ĐỀ KỸ THUẬT SAI PHÂN -->
  <rect x="160" y="10" width="440" height="26" rx="6" fill="#eff6ff" stroke="#2563eb"/>
  <text x="380" y="27" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#1e40af" text-anchor="middle">KỸ THUẬT TRIỆT TIÊU SAI PHÂN (TELESCOPING) TÍNH TỔNG Sₙ</text>

  <!-- DÒNG 1: Sn = u1 + u1*q + u1*q^2 + ... + u1*q^(n-1) -->
  <rect x="60" y="48" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="80" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb">Sₙ  =</text>
  <rect x="130" y="52" width="55" height="26" rx="4" fill="#dbeafe" stroke="#2563eb"/>
  <text x="157" y="69" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#1e40af" text-anchor="middle">u₁</text>
  <text x="200" y="70" font-family="sans-serif" font-size="12" fill="#64748b">+</text>

  <!-- Phần bị triệt tiêu dòng 1 -->
  <rect x="220" y="52" width="460" height="26" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-dasharray="4,2"/>
  <text x="450" y="69" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">[ u₁·q + u₁·q² + ... + u₁·qⁿ⁻¹ ] (Khối triệt tiêu)</text>

  <!-- DÒNG 2: q*Sn = u1*q + u1*q^2 + ... + u1*q^(n-1) + u1*q^n -->
  <rect x="60" y="92" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="80" y="114" font-family="sans-serif" font-size="12" font-weight="bold" fill="#d97706">q·Sₙ =</text>

  <!-- Phần bị triệt tiêu dòng 2 (thụt vào 1 vị trí) -->
  <rect x="180" y="96" width="460" height="26" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-dasharray="4,2"/>
  <text x="410" y="113" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">[ u₁·q + u₁·q² + ... + u₁·qⁿ⁻¹ ] (Khối triệt tiêu)</text>
  <text x="650" y="114" font-family="sans-serif" font-size="12" fill="#64748b">+</text>
  <rect x="665" y="96" width="65" height="26" rx="4" fill="#fef3c7" stroke="#d97706"/>
  <text x="697" y="113" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#b45309" text-anchor="middle">u₁·qⁿ</text>

  <!-- DÒNG TRỪ HAI VẾ: Sn - qSn = u1 - u1*q^n -->
  <line x1="60" y1="136" x2="700" y2="136" stroke="#ef4444" stroke-width="2"/>
  <text x="715" y="140" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ef4444">−</text>

  <!-- HỘP KẾT QUẢ ĐẸP MẮT -->
  <rect x="60" y="148" width="640" height="50" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="80" y="178" font-family="sans-serif" font-size="13" font-weight="bold" fill="#047857">Sₙ(1 − q) = u₁ − u₁·qⁿ = u₁(1 − qⁿ)</text>
  <line x1="390" y1="154" x2="390" y2="192" stroke="#a7f3d0"/>
  <text x="410" y="178" font-family="sans-serif" font-size="14" font-weight="bold" fill="#2563eb">⇒ Sₙ = [ u₁(1 − qⁿ) ] / (1 − q)</text>
  <text x="640" y="178" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">(với q ≠ 1)</text>
</svg>
              </div>

              <div class="p-3 mb-3 bg-light rounded-3 border-start border-4 border-success">
                <h6 class="fw-bold text-success mb-2"><i class="fa-solid fa-certificate"></i> ĐỊNH LÍ TÍNH TỔNG (SGK TRANG 54):</h6>
                <p class="mb-2">Cho cấp số nhân $(u_n)$ với công bội $q \\ne 1$. Đặt $S_n = u_1 + u_2 + \\dots + u_n$. Khi đó:</p>
                <div class="p-2 bg-white rounded border border-success text-center fw-bold text-success fs-5 mb-2">
                  $S_n = \\dfrac{u_1(1 - q^n)}{1 - q} = \\dfrac{u_1(q^n - 1)}{q - 1} \\quad (q \\ne 1)$
                </div>
                <p class="mb-0 text-muted fst-italic">• Mẹo của Thầy Sáng: Khi $q > 1$, dùng dạng $\\dfrac{u_1(q^n - 1)}{q - 1}$ để cả tử và mẫu đều dương, tránh nhầm lẫn dấu trừ!</p>
              </div>

              <!-- HỘP THẢO LUẬN TRƯỜNG HỢP q = 1 -->
              <div class="alert alert-info border-0 mb-2">
                <h6 class="fw-bold text-dark mb-1"><i class="fa-solid fa-circle-info text-info"></i> Câu hỏi tư duy (SGK trang 54):</h6>
                <p class="mb-1">Nếu cấp số nhân có công bội $q = 1$ thì tổng $n$ số hạng đầu $S_n$ của nó bằng bao nhiêu?</p>
                <p class="mb-0 text-primary fw-bold"><i class="fa-solid fa-check"></i> Trả lời: Khi $q = 1$, ta có $u_1 = u_2 = \\dots = u_n$ nên $S_n = \\underbrace{u_1 + u_1 + \\dots + u_1}_{n \\text{ số hạng}} = n \\cdot u_1$.</p>
              </div>
            </div>`,
          "workedExample": {
            "title": "Ví dụ 5 (SGK trang 54): Giải bài toán lương chuyên gia CNTT",
            "problem": "Giải bài toán ở tình huống mở đầu: Chuyên gia CNTT nhận lương năm đầu 240 triệu đồng, cam kết tăng 5% lương mỗi năm. Tính tổng số lương chuyên gia nhận được sau 10 năm làm việc cho công ty (làm tròn đến triệu đồng).",
            "question": "Giải bài toán ở tình huống mở đầu: Chuyên gia CNTT nhận lương năm đầu 240 triệu đồng, cam kết tăng 5% lương mỗi năm. Tính tổng số lương chuyên gia nhận được sau 10 năm làm việc cho công ty (làm tròn đến triệu đồng).",
            "teacherGuidance": "Lương mỗi năm tạo thành cấp số nhân với u1 = 240 và q = 1 + 0,05 = 1,05. Áp dụng công thức Sn với n = 10.",
            "solution": `<p class="mb-2"><b>Lời giải chi tiết:</b></p>
            <p class="mb-2">Lương hằng năm (triệu đồng) của chuyên gia lập thành một cấp số nhân với số hạng đầu $u_1 = 240$ và công bội $q = 1 + 5\\% = 1{,}05$.</p>
            <p class="mb-2">Tổng số lương mà chuyên gia đó nhận được sau 10 năm chính là tổng của 10 số hạng đầu của cấp số nhân này:</p>
            <div class="p-2 bg-light rounded text-center mb-2">
              $$S_{10} = \\dfrac{u_1(1 - q^{10})}{1 - q} = \\dfrac{240 \\cdot \\left[1 - (1{,}05)^{10}\\right]}{1 - 1{,}05} = \\dfrac{240 \\cdot (1 - 1{,}628895)}{-0{,}05} \\approx 3\\,019 \\text{ triệu đồng}$$
            </div>
            <p class="mb-0 text-success"><b>Kết luận:</b> Tổng số lương chuyên gia nhận được sau 10 năm là <b>3 019 triệu đồng</b> (tương đương hơn <b>3,019 tỉ đồng</b>).</p>`,
            "similarProblem": "Một nhân viên khởi điểm lương 120 triệu/năm, tăng 10%/năm. Tính tổng lương sau 5 năm làm việc."
          },
          "practiceProblem": {
            "title": "Luyện tập 3a: Tính tổng n số hạng đầu của cấp số nhân đan dấu",
            "problem": "Cho cấp số nhân có các số hạng đầu: $1, \\, -\\dfrac{1}{2}, \\, \\dfrac{1}{4}, \\, -\\dfrac{1}{8}, \\dots$ Tính tổng của 8 số hạng đầu tiên của cấp số nhân này.",
            "hint": "Xác định số hạng đầu $u_1 = 1$, công bội $q = -\\dfrac{1}{2}$. Áp dụng công thức $S_8 = \\dfrac{u_1(1 - q^8)}{1 - q}$.",
            "solution": `<p class="mb-2"><b>Lời giải chi tiết:</b></p>
            <p class="mb-2">Dãy số là cấp số nhân có $u_1 = 1$ và $q = -\\dfrac{1}{2}$. Tổng của 8 số hạng đầu là:</p>
            <div class="p-2 bg-light rounded text-center mb-2">
              $$S_8 = \\dfrac{u_1(1 - q^8)}{1 - q} = \\dfrac{1 \\cdot \\left[1 - \\left(-\\dfrac{1}{2}\\right)^8\\right]}{1 - \\left(-\\dfrac{1}{2}\\right)} = \\dfrac{1 - \\dfrac{1}{256}}{1 + \\dfrac{1}{2}} = \\dfrac{\\dfrac{255}{256}}{\\dfrac{3}{2}} = \\dfrac{255}{256} \\cdot \\dfrac{2}{3} = \\dfrac{85}{128}$$
            </div>
            <p class="mb-0 text-success"><b>Đáp số:</b> $S_8 = \\dfrac{85}{128}$.</p>`
          }
        },

        // 3b. Giải bài toán tìm số số hạng n và bài toán thực tế
        {
          "id": "sub-3b",
          "code": "3b",
          "title": "3b. Giải bài toán tìm số số hạng n và bài toán thực tế",
          "audioUrl": "assets/audio/b11_7_sec3b.mp3",
          "audioScript": "Tiểu mục b: Giải bài toán tìm số số hạng và bài toán thực tế. Vận dụng công thức S n, ta giải quyết trọn vẹn bài toán tính tổng 10 năm lương của chuyên gia công nghệ thông tin với kết quả xấp xỉ hơn 3 tỷ đồng. Nếu đề bài cho trước tổng S n và yêu cầu tìm số số hạng n, ta cô lập lũy thừa q mũ n rồi đưa về giải phương trình mũ cơ bản để tìm ra số tự nhiên n.",
          "duration": 46,
          "pois": [
            {
              "time": 0.35,
              "question": "Để tìm số số hạng n khi biết tổng Sn, u1 và q > 1, ta đưa về giải phương trình dạng nào?",
              "options": [
                "Phương trình mũ: qⁿ = [Sn(q - 1) / u1] + 1",
                "Phương trình bậc hai: a n² + bn + c = 0",
                "Phương trình logarit: log_n q = Sn",
                "Phương trình bậc nhất: q · n = Sn"
              ],
              "correctIndex": 0,
              "explain": "Từ Sn = u1(qⁿ - 1) / (q - 1), ta cô lập lũy thừa: qⁿ = [Sn(q - 1) / u1] + 1 và tìm n."
            },
            {
              "time": 0.70,
              "question": "Số các số hạng n trong cấp số nhân phải thỏa mãn điều kiện gì?",
              "options": [
                "n ∈ ℕ* (n là số nguyên dương 1, 2, 3,...)",
                "n là số thực tùy ý",
                "n là số âm",
                "n ≥ 0 và có thể là phân số"
              ],
              "correctIndex": 0,
              "explain": "Số thứ tự các số hạng của dãy số luôn luôn là số nguyên dương: n ∈ ℕ*."
            }
          ],
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-white shadow-sm rounded-3">
              <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-puzzle-piece"></i> 3b. GIẢI BÀI TOÁN TÌM SỐ SỐ HẠNG $n$ QUA PHƯƠNG TRÌNH MŨ</h5>

              <div class="p-3 mb-3 bg-light rounded-3 border-start border-4 border-info">
                <h6 class="fw-bold text-info mb-2"><i class="fa-solid fa-brain"></i> THUẬT TOÁN 3 BƯỚC TÌM $n$ CỦA THẦY SÁNG:</h6>
                <ol class="mb-2">
                  <li><b>Bước 1:</b> Xác định rõ $u_1$, công bội $q$, và giá trị tổng $S_n$ từ giả thiết đề bài.</li>
                  <li><b>Bước 2:</b> Thay vào công thức tổng: $S_n = \\dfrac{u_1(q^n - 1)}{q - 1}$ (với $q > 1$). Cô lập lũy thừa $q^n$:
                    <div class="text-center my-1 fw-bold text-danger">$q^n = \\dfrac{S_n(q - 1)}{u_1} + 1$</div>
                  </li>
                  <li><b>Bước 3:</b> Phân tích vế phải thành lũy thừa của $q$, giải tìm $n \\in \\mathbb{N}^*$.</li>
                </ol>
              </div>

              <!-- HỘP MÁY TÍNH CASIO -->
              <div class="p-3 bg-white rounded border border-secondary mb-2">
                <h6 class="fw-bold text-dark mb-1"><i class="fa-solid fa-calculator text-primary"></i> Ứng dụng Casio fx-580VN X:</h6>
                <p class="mb-0 text-muted small">Các em có thể dùng phím $\\log$ để tìm trực tiếp: $n = \\log_q \\left[ \\dfrac{S_n(q - 1)}{u_1} + 1 \\right]$, kiểm tra lại kết quả một cách nhanh chóng và chính xác!</p>
              </div>
            </div>`,
          "workedExample": {
            "title": "Ví dụ 6 (SGK trang 54): Cần lấy tổng bao nhiêu số hạng đầu",
            "problem": "Cần lấy tổng của bao nhiêu số hạng đầu của cấp số nhân $2, \\, 6, \\, 18, \\dots$ để được kết quả bằng $728$?",
            "question": "Cần lấy tổng của bao nhiêu số hạng đầu của cấp số nhân $2, \\, 6, \\, 18, \\dots$ để được kết quả bằng $728$?",
            "teacherGuidance": "Áp dụng Sn = u1(q^n - 1) / (q - 1). Ta có u1 = 2, q = 3, Sn = 728. Đưa về 3^n = 729 = 3^6 suy ra n = 6.",
            "solution": `<p class="mb-2"><b>Lời giải chi tiết:</b></p>
            <p class="mb-2">Dãy số đã cho là cấp số nhân với số hạng đầu $u_1 = 2$ và công bội $q = \\dfrac{6}{2} = 3$.</p>
            <p class="mb-2">Tổng của $n$ số hạng đầu tiên của cấp số nhân này là:</p>
            <div class="p-2 bg-light rounded text-center mb-2">
              $$S_n = \\dfrac{u_1(1 - q^n)}{1 - q} = \\dfrac{2(1 - 3^n)}{1 - 3} = \\dfrac{2(1 - 3^n)}{-2} = -(1 - 3^n) = 3^n - 1$$
            </div>
            <p class="mb-2">Theo giả thiết đề bài, ta có:</p>
            <div class="text-center mb-2">
              $$S_n = 728 \\Leftrightarrow 3^n - 1 = 728 \\Leftrightarrow 3^n = 729$$
            </div>
            <p class="mb-2">Vì $729 = 3^6$, nên ta suy ra $n = 6$.</p>
            <p class="mb-0 text-success"><b>Kết luận:</b> Cần lấy tổng của <b>6 số hạng đầu</b> của cấp số nhân để được kết quả bằng 728.</p>`,
            "similarProblem": "Cần lấy tổng bao nhiêu số hạng đầu của cấp số nhân $3, 6, 12,...$ để được tổng bằng $381$?"
          },
          "practiceProblem": {
            "title": "Luyện tập 3b: Tìm số số hạng đầu của cấp số nhân",
            "problem": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = 2$. Hỏi cần lấy tổng của bao nhiêu số hạng đầu để được kết quả bằng $381$?",
            "hint": "Thiết lập phương trình $S_n = \\dfrac{3(2^n - 1)}{2 - 1} = 381$. Giải phương trình mũ tìm $n$.",
            "solution": `<p class="mb-2"><b>Lời giải chi tiết:</b></p>
            <p class="mb-2">Áp dụng công thức tính tổng $n$ số hạng đầu với $u_1 = 3, q = 2$:</p>
            <div class="p-2 bg-light rounded text-center mb-2">
              $$S_n = \\dfrac{u_1(q^n - 1)}{q - 1} = \\dfrac{3(2^n - 1)}{2 - 1} = 3(2^n - 1)$$
            </div>
            <p class="mb-2">Theo bài ra ta có phương trình:</p>
            <div class="text-center mb-2">
              $$3(2^n - 1) = 381 \\Leftrightarrow 2^n - 1 = \\dfrac{381}{3} = 127 \\Leftrightarrow 2^n = 128 = 2^7 \\Leftrightarrow n = 7$$
            </div>
            <p class="mb-0 text-success"><b>Đáp số:</b> Cần lấy tổng của <b>7 số hạng đầu</b>.</p>`
          }
        }
      ]
    }
  ],

  // =======================================================================
  // WRAP-UP: CHỐT KIẾN THỨC THEN CHỐT & BÀN CỜ VUA HẠT THÓC
  // =======================================================================
  "wrapUp": {
    "title": "Chốt kiến thức then chốt Bài 7: Cấp số nhân",
    "audioUrl": "assets/audio/b11_7_wrapup.mp3",
    "audioScript": "Chốt kiến thức then chốt Bài 7: Cấp số nhân. Thầy chúc mừng các em đã hoàn thành xuất sắc tiến trình bài học! Các em hãy khắc sâu 3 viên ngọc kiến thức: Thứ nhất, định nghĩa và hệ thức u n bằng u n trừ 1 nhân q. Thứ hai, công thức số hạng tổng quát u n bằng u 1 nhân q mũ n trừ 1. Thứ ba, công thức tính tổng S n bằng u 1 nhân mở ngoặc 1 trừ q mũ n đóng ngoặc chia cho 1 trừ q. Bây giờ, các em hãy cùng Thầy bước vào Phần 4 để tự tin chinh phục bộ đề trắc nghiệm chuẩn cấu trúc mới 2026 nhé!",
    "contentHtml": `<div class="card p-3 mb-3 border-0 bg-white shadow-sm rounded-3">
        <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-flag-checkered"></i> TỔNG KẾT BÀI HỌC VÀ CÂU CHUYỆN HẠT THÓC BÀN CỜ VUA</h5>

        <!-- ĐỒ HỌA BÀN CỜ VUA HẠT THÓC -->
        <div class="text-center my-3">
          <svg viewBox="0 0 760 250" style="max-width:100%; height:auto; background:#1e293b; border-radius:12px; border:1.5px solid #475569; box-shadow:0 6px 20px rgba(0,0,0,0.3);">
  <defs>
    <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <radialGradient id="riceGrain" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fffbeb"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </radialGradient>
  </defs>

  <!-- TIÊU ĐỀ TRUYỀN CẢM HỨNG -->
  <text x="380" y="24" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#fbbf24" text-anchor="middle">SỰ BÙNG NỔ CỦA CẤP SỐ NHÂN: BÀN CỜ VUA VÀ PHẦN THƯỞNG HẠT THÓC</text>

  <!-- BÀN CỜ VUA THU NHỎ (GÓC TRÁI) -->
  <rect x="40" y="40" width="180" height="180" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>

  <!-- Lưới 4x4 đại diện minh họa ô bàn cờ -->
  <!-- Hàng 1 -->
  <rect x="46" y="46" width="41" height="41" fill="#f8fafc"/>
  <rect x="87" y="46" width="41" height="41" fill="#475569"/>
  <rect x="128" y="46" width="41" height="41" fill="#f8fafc"/>
  <rect x="169" y="46" width="41" height="41" fill="#475569"/>

  <!-- Hàng 2 -->
  <rect x="46" y="87" width="41" height="41" fill="#475569"/>
  <rect x="87" y="87" width="41" height="41" fill="#f8fafc"/>
  <rect x="128" y="87" width="41" height="41" fill="#475569"/>
  <rect x="169" y="87" width="41" height="41" fill="#f8fafc"/>

  <!-- Hàng 3 -->
  <rect x="46" y="128" width="41" height="41" fill="#f8fafc"/>
  <rect x="87" y="128" width="41" height="41" fill="#475569"/>
  <rect x="128" y="128" width="41" height="41" fill="#f8fafc"/>
  <rect x="169" y="128" width="41" height="41" fill="#475569"/>

  <!-- Hàng 4 -->
  <rect x="46" y="169" width="41" height="41" fill="#475569"/>
  <rect x="87" y="169" width="41" height="41" fill="#f8fafc"/>
  <rect x="128" y="169" width="41" height="41" fill="#475569"/>
  <rect x="169" y="169" width="41" height="41" fill="#f8fafc"/>

  <!-- HẠT THÓC TRÊN CÁC Ô ĐẦU TIÊN -->
  <!-- Ô 1: 1 hạt -->
  <ellipse cx="66" cy="66" rx="4" ry="7" fill="url(#riceGrain)" transform="rotate(30 66 66)"/>
  <text x="66" y="82" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#0f172a" text-anchor="middle">1 (2⁰)</text>

  <!-- Ô 2: 2 hạt -->
  <ellipse cx="103" cy="64" rx="3.5" ry="6" fill="url(#riceGrain)" transform="rotate(-20 103 64)"/>
  <ellipse cx="111" cy="68" rx="3.5" ry="6" fill="url(#riceGrain)" transform="rotate(40 111 68)"/>
  <text x="107" y="82" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#ffffff" text-anchor="middle">2 (2¹)</text>

  <!-- Ô 3: 4 hạt -->
  <ellipse cx="143" cy="62" rx="3" ry="5.5" fill="url(#riceGrain)"/>
  <ellipse cx="152" cy="63" rx="3" ry="5.5" fill="url(#riceGrain)"/>
  <ellipse cx="144" cy="72" rx="3" ry="5.5" fill="url(#riceGrain)"/>
  <ellipse cx="153" cy="71" rx="3" ry="5.5" fill="url(#riceGrain)"/>
  <text x="148" y="83" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#0f172a" text-anchor="middle">4 (2²)</text>

  <!-- Ô 4: 8 hạt -->
  <text x="189" y="67" font-family="sans-serif" font-size="10" font-weight="bold" fill="#fbbf24" text-anchor="middle">8 (2³)</text>
  <text x="189" y="80" font-family="sans-serif" font-size="8" fill="#e2e8f0" text-anchor="middle">hạt...</text>

  <!-- Ô 64 ở góc xa -->
  <rect x="169" y="169" width="41" height="41" fill="#7c2d12"/>
  <text x="189" y="186" font-family="sans-serif" font-size="9" font-weight="bold" fill="#fbbf24" text-anchor="middle">Ô 64:</text>
  <text x="189" y="200" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#fef08a" text-anchor="middle">2⁶³</text>

  <!-- MŨI TÊN KẾT NỐI TĂNG TRƯỞNG MŨ -->
  <path d="M 230 130 C 270 130 270 60 300 60" fill="none" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arrowCSN)"/>

  <!-- KHỐI DIỄN GIẢI KINH ĐIỂN BÊN PHẢI -->
  <rect x="290" y="40" width="430" height="180" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="310" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">• Ô thứ nhất: u₁ = 1 hạt thóc</text>
  <text x="310" y="87" font-family="sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">• Công bội: q = 2 (ô sau gấp đôi ô trước)</text>
  <text x="310" y="109" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fef08a">• Ô thứ 64: u₆₄ = 2⁶³ ≈ 9,22 · 10¹⁸ hạt thóc</text>

  <line x1="310" y1="120" x2="700" y2="120" stroke="#334155"/>

  <!-- TỔNG SỐ HẠT THÓC TOÀN BỘ 64 Ô -->
  <text x="310" y="142" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#f8fafc">TỔNG TOÀN BỘ 64 Ô CỜ (CÔNG THỨC Sₙ):</text>
  <text x="310" y="167" font-family="sans-serif" font-size="15" font-weight="bold" fill="url(#goldGlow)">S₆₄ = 2⁶⁴ − 1 ≈ 18.446.744.073.709.551.615</text>
  <text x="310" y="190" font-family="sans-serif" font-size="11" font-weight="bold" fill="#34d399">≈ 18,4 TỶ TỶ HẠT THÓC (khoảng 369 tỷ tấn gạo)</text>
  <text x="310" y="208" font-family="sans-serif" font-size="10" fill="#94a3b8">Bằng tổng sản lượng lúa của cả nhân loại trong hơn 500 năm!</text>
</svg>
        </div>

        <!-- BẢNG SO SÁNH ĐỐI XỨNG TOÀN DIỆN CSC VÀ CSN -->
        <div class="table-responsive my-3">
          <table class="table table-bordered table-hover align-middle text-center mb-0">
            <thead class="table-primary text-dark">
              <tr>
                <th style="width: 25%;">Đặc trưng toán học</th>
                <th style="width: 37.5%;" class="text-primary">CẤP SỐ CỘNG $(u_n)$</th>
                <th style="width: 37.5%;" class="text-warning text-dark">CẤP SỐ NHÂN $(u_n)$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold bg-light text-start">Quy luật bước nhảy</td>
                <td><b>Cộng</b> một hằng số $d$ (công sai):<br>$u_n = u_{n-1} + d$</td>
                <td><b>Nhân</b> một hằng số $q$ (công bội):<br>$u_n = u_{n-1} \\cdot q$</td>
              </tr>
              <tr>
                <td class="fw-bold bg-light text-start">Phương pháp chứng minh</td>
                <td>Hiệu hai số hạng liên tiếp không đổi:<br>$u_n - u_{n-1} = d$</td>
                <td>Tỉ số hai số hạng liên tiếp không đổi:<br>$\\dfrac{u_n}{u_{n-1}} = q$</td>
              </tr>
              <tr>
                <td class="fw-bold bg-light text-start">Số hạng tổng quát $u_n$</td>
                <td class="fw-bold text-primary">$u_n = u_1 + (n - 1)d$</td>
                <td class="fw-bold text-danger">$u_n = u_1 \\cdot q^{n-1}$</td>
              </tr>
              <tr>
                <td class="fw-bold bg-light text-start">Tính chất trung bình</td>
                <td><b>Trung bình cộng:</b><br>$u_k = \\dfrac{u_{k-1} + u_{k+1}}{2}$</td>
                <td><b>Trung bình nhân:</b><br>$u_k^2 = u_{k-1} \\cdot u_{k+1}$</td>
              </tr>
              <tr>
                <td class="fw-bold bg-light text-start">Tổng $n$ số hạng đầu $S_n$</td>
                <td class="fw-bold text-primary">$S_n = \\dfrac{n(u_1 + u_n)}{2}$</td>
                <td class="fw-bold text-success">$S_n = \\dfrac{u_1(1 - q^n)}{1 - q} \\quad (q \\ne 1)$</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="alert alert-success border-0 mb-0">
          <h6 class="fw-bold text-success mb-1"><i class="fa-solid fa-heart text-danger"></i> Thông điệp truyền cảm hứng của Thầy Sáng:</h6>
          <p class="mb-0">Nếu nỗ lực mỗi ngày của các em chỉ cộng dồn từng bước nhỏ như Cấp số cộng, các em đã tiến bộ. Nhưng khi các em biết tích lũy tri thức, rèn luyện tư duy và đổi mới phương pháp học tập, sự tiến bộ của các em sẽ nhân đôi, nhân ba theo cấp số nhân! Hãy tự tin bước vào Phần 4 để kiểm tra bản lĩnh của mình nhé!</p>
        </div>
      </div>`
  },
  "realworldWrapup": {
    "title": "Chốt kiến thức then chốt Bài 7: Cấp số nhân",
    "audioUrl": "assets/audio/b11_7_wrapup.mp3",
    "audioScript": "Chốt kiến thức then chốt Bài 7: Cấp số nhân. Thầy chúc mừng các em đã hoàn thành xuất sắc tiến trình bài học! Các em hãy khắc sâu 3 viên ngọc kiến thức: Thứ nhất, định nghĩa và hệ thức u n bằng u n trừ 1 nhân q. Thứ hai, công thức số hạng tổng quát u n bằng u 1 nhân q mũ n trừ 1. Thứ ba, công thức tính tổng S n bằng u 1 nhân mở ngoặc 1 trừ q mũ n đóng ngoặc chia cho 1 trừ q. Bây giờ, các em hãy cùng Thầy bước vào Phần 4 để tự tin chinh phục bộ đề trắc nghiệm chuẩn cấu trúc mới 2026 nhé!"
  },

  // =======================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM CỦNG CỐ (20% TIẾN TRÌNH)
  // CHUẨN CẤU TRÚC ĐỀ THI MỚI NHẤT 2026 CỦA BỘ GD&ĐT (ĐỦ 3 DẠNG THỨC)
  // =======================================================================
  "examFormatPractice": {
    "title": "BÀI TẬP CỦNG CỐ THEO ĐỊNH DẠNG ĐỀ THI MỚI 2026",
    "description": "Hệ thống bài tập gồm 3 dạng thức đề thi mới: Dạng 1 (Nhiều lựa chọn), Dạng 2 (Đúng/Sai), Dạng 3 (Trả lời ngắn).",

    // DẠNG 1: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (5 CÂU)
    // Phân bổ đáp án: C, A, D, B, C
    "part1MultipleChoice": [
      {
        "id": "q1",
        "question": "Dãy số nào sau đây là một cấp số nhân?",
        "options": [
          "A. $1, \\, 2, \\, 3, \\, 4, \\, 5$",
          "B. $1, \\, 3, \\, 5, \\, 7, \\, 9$",
          "C. $2, \\, 4, \\, 8, \\, 16, \\, 32$",
          "D. $1, \\, 4, \\, 9, \\, 16, \\, 25$"
        ],
        "correct": 2,
        "explanation": "Dãy số $2, \\, 4, \\, 8, \\, 16, \\, 32$ là cấp số nhân vì kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng liền trước nhân với công bội không đổi $q = 2$."
      },
      {
        "id": "q2",
        "question": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = -2$ và công bội $q = 3$. Giá trị của số hạng $u_4$ bằng:",
        "options": [
          "A. $-54$",
          "B. $54$",
          "C. $-162$",
          "D. $-18$"
        ],
        "correct": 0,
        "explanation": "Áp dụng công thức số hạng tổng quát: $u_4 = u_1 \\cdot q^3 = (-2) \\cdot 3^3 = (-2) \\cdot 27 = -54$."
      },
      {
        "id": "q3",
        "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 4$ và $u_2 = 12$. Công bội $q$ và số hạng thứ ba $u_3$ lần lượt là:",
        "options": [
          "A. $q = 8, \\, u_3 = 20$",
          "B. $q = 3, \\, u_3 = 24$",
          "C. $q = 2, \\, u_3 = 24$",
          "D. $q = 3, \\, u_3 = 36$"
        ],
        "correct": 3,
        "explanation": "Ta có công bội $q = \\dfrac{u_2}{u_1} = \\dfrac{12}{4} = 3$. Số hạng thứ ba là $u_3 = u_2 \\cdot q = 12 \\cdot 3 = 36$."
      },
      {
        "id": "q4",
        "question": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = -2$. Tổng của 6 số hạng đầu tiên $S_6$ bằng:",
        "options": [
          "A. $63$",
          "B. $-63$",
          "C. $189$",
          "D. $-189$"
        ],
        "correct": 1,
        "explanation": "Áp dụng công thức tính tổng: $S_6 = \\dfrac{u_1(1 - q^6)}{1 - q} = \\dfrac{3 \\cdot [1 - (-2)^6]}{1 - (-2)} = \\dfrac{3 \\cdot (1 - 64)}{3} = 1 - 64 = -63$."
      },
      {
        "id": "q5",
        "question": "Tìm tất cả các giá trị của $x$ để ba số $x - 2, \\, x + 1, \\, x + 7$ theo thứ tự đó lập thành một cấp số nhân.",
        "options": [
          "A. $x = 3$",
          "B. $x = 4$",
          "C. $x = 5$",
          "D. $x = 6$"
        ],
        "correct": 2,
        "explanation": "Ba số lập thành cấp số nhân khi và chỉ khi bình phương số hạng ở giữa bằng tích hai số hai bên: $(x + 1)^2 = (x - 2)(x + 7) \\Leftrightarrow x^2 + 2x + 1 = x^2 + 5x - 14 \\Leftrightarrow 3x = 15 \\Leftrightarrow x = 5$."
      }
    ],

    // DẠNG 2: TRẮC NGHIỆM ĐÚNG / SAI (3 CÂU, MỖI CÂU 4 Ý a-b-c-d = 12 Ý)
    "part2TrueFalse": [
      {
        "id": "tf1",
        "question": "Cho dãy số $(u_n)$ xác định bởi công thức số hạng tổng quát $u_n = 3 \\cdot 2^n$ với mọi $n \\ge 1$. Xét tính đúng/sai của các mệnh đề sau:",
        "items": [
          {
            "id": "tf1_a",
            "text": "a) Dãy số $(u_n)$ là một cấp số nhân.",
            "correct": true,
            "explanation": "Đúng, vì tỉ số $\\dfrac{u_n}{u_{n-1}} = \\dfrac{3 \\cdot 2^n}{3 \\cdot 2^{n-1}} = 2$ không đổi với mọi $n \\ge 2$."
          },
          {
            "id": "tf1_b",
            "text": "b) Số hạng đầu tiên của dãy số là $u_1 = 3$.",
            "correct": false,
            "explanation": "Sai, vì thay $n = 1$ ta được $u_1 = 3 \\cdot 2^1 = 6$."
          },
          {
            "id": "tf1_c",
            "text": "c) Công bội của cấp số nhân là $q = 2$.",
            "correct": true,
            "explanation": "Đúng, công bội $q = \\dfrac{u_{n}}{u_{n-1}} = 2$."
          },
          {
            "id": "tf1_d",
            "text": "d) Số hạng thứ 10 của dãy số là $u_{10} = 3072$.",
            "correct": true,
            "explanation": "Đúng, vì $u_{10} = 3 \\cdot 2^{10} = 3 \\cdot 1024 = 3072$."
          }
        ]
      },
      {
        "id": "tf2",
        "question": "Cho cấp số nhân $(u_n)$ có các số hạng đều là số thực dương, thoả mãn hệ phương trình: $\\begin{cases} u_4 - u_2 = 72 \\\\ u_5 - u_3 = 144 \\end{cases}$. Xét tính đúng/sai của các mệnh đề sau:",
        "items": [
          {
            "id": "tf2_a",
            "text": "a) Công bội của cấp số nhân là $q = 2$.",
            "correct": true,
            "explanation": "Đúng. Biểu diễn qua $u_1, q$: $\\begin{cases} u_1(q^3 - q) = 72 \\\\ u_1 q(q^3 - q) = 144 \\end{cases}$. Lập tỉ số chia vế ta được $q = \\dfrac{144}{72} = 2$."
          },
          {
            "id": "tf2_b",
            "text": "b) Số hạng đầu của cấp số nhân là $u_1 = 12$.",
            "correct": true,
            "explanation": "Đúng. Thay $q = 2$ vào phương trình thứ nhất: $u_1(2^3 - 2) = 72 \\Leftrightarrow 6 u_1 = 72 \\Rightarrow u_1 = 12$."
          },
          {
            "id": "tf2_c",
            "text": "c) Số hạng thứ 7 của cấp số nhân là $u_7 = 768$.",
            "correct": true,
            "explanation": "Đúng, vì $u_7 = u_1 \\cdot q^6 = 12 \\cdot 2^6 = 12 \\cdot 64 = 768$."
          },
          {
            "id": "tf2_d",
            "text": "d) Tổng 5 số hạng đầu tiên của cấp số nhân là $S_5 = 360$.",
            "correct": false,
            "explanation": "Sai, vì $S_5 = \\dfrac{u_1(q^5 - 1)}{q - 1} = \\dfrac{12 \\cdot (2^5 - 1)}{2 - 1} = 12 \\cdot 31 = 372$."
          }
        ]
      },
      {
        "id": "tf3",
        "question": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 2$ và công bội $q = 3$. Xét tính đúng/sai của các mệnh đề sau:",
        "items": [
          {
            "id": "tf3_a",
            "text": "a) Số hạng tổng quát của cấp số nhân là $u_n = 2 \\cdot 3^n$.",
            "correct": false,
            "explanation": "Sai, vì công thức đúng là $u_n = u_1 \\cdot q^{n-1} = 2 \\cdot 3^{n-1}$."
          },
          {
            "id": "tf3_b",
            "text": "b) Tổng của 5 số hạng đầu tiên là $S_5 = 242$.",
            "correct": true,
            "explanation": "Đúng, vì $S_5 = \\dfrac{2(1 - 3^5)}{1 - 3} = \\dfrac{2(1 - 243)}{-2} = 243 - 1 = 242$."
          },
          {
            "id": "tf3_c",
            "text": "c) Số 486 là số hạng thứ 6 của cấp số nhân.",
            "correct": true,
            "explanation": "Đúng, vì $u_6 = 2 \\cdot 3^{6-1} = 2 \\cdot 3^5 = 2 \\cdot 243 = 486$."
          },
          {
            "id": "tf3_d",
            "text": "d) Nếu tổng của $n$ số hạng đầu bằng $2186$ thì $n = 8$.",
            "correct": false,
            "explanation": "Sai, vì $S_n = 3^n - 1 = 2186 \\Leftrightarrow 3^n = 2187 = 3^7 \\Rightarrow n = 7$ (chứ không phải 8)."
          }
        ]
      }
    ],

    // DẠNG 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (3 CÂU)
    "part3ShortAnswer": [
      {
        "id": "sa1",
        "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Hỏi cần lấy tổng của bao nhiêu số hạng đầu của cấp số nhân này để được kết quả bằng 381?",
        "correctAnswer": "7",
        "explanation": "Ta có $S_n = \\dfrac{u_1(q^n - 1)}{q - 1} = \\dfrac{3(2^n - 1)}{2 - 1} = 3(2^n - 1)$. Đặt $3(2^n - 1) = 381 \\Leftrightarrow 2^n - 1 = 127 \\Leftrightarrow 2^n = 128 = 2^7 \\Rightarrow n = 7$."
      },
      {
        "id": "sa2",
        "question": "Một người gửi tiết kiệm 100 triệu đồng vào ngân hàng với lãi suất 6%/năm theo hình thức lãi kép hàng năm. Hỏi sau đúng 5 năm, số tiền cả gốc lẫn lãi người đó nhận được là bao nhiêu triệu đồng (làm tròn kết quả đến hàng phần mười)?",
        "correctAnswer": "133.8",
        "explanation": "Áp dụng công thức lãi kép cấp số nhân: $A = P \\cdot (1 + r)^n = 100 \\cdot (1 + 0{,}06)^5 = 100 \\cdot (1{,}06)^5 \\approx 100 \\cdot 1{,}3382256 = 133{,}82 \\approx 133{,}8$ triệu đồng."
      },
      {
        "id": "sa3",
        "question": "Cần lấy tổng của bao nhiêu số hạng đầu của cấp số nhân $2, \\, 6, \\, 18, \\, 54, \\dots$ để được kết quả bằng 728?",
        "correctAnswer": "6",
        "explanation": "Cấp số nhân có $u_1 = 2, q = 3$. Tổng $n$ số hạng đầu là $S_n = \\dfrac{2(3^n - 1)}{3 - 1} = 3^n - 1$. Cho $3^n - 1 = 728 \\Leftrightarrow 3^n = 729 = 3^6 \\Rightarrow n = 6$."
      }
    ]
  },

  // TƯƠNG THÍCH ĐỒNG THỜI VỚI BỘ RENDERER CŨ
  "quiz": [
    {
      "id": "qz1",
      "question": "Dãy số nào sau đây là một cấp số nhân?",
      "options": [
        "A. $1, \\, 2, \\, 3, \\, 4, \\, 5$",
        "B. $1, \\, 3, \\, 5, \\, 7, \\, 9$",
        "C. $2, \\, 4, \\, 8, \\, 16, \\, 32$",
        "D. $1, \\, 4, \\, 9, \\, 16, \\, 25$"
      ],
      "correct": 2,
      "explanation": "Dãy số $2, \\, 4, \\, 8, \\, 16, \\, 32$ là cấp số nhân vì có công bội không đổi $q = 2$."
    },
    {
      "id": "qz2",
      "question": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = -2$ và công bội $q = 3$. Giá trị của số hạng $u_4$ bằng:",
      "options": [
        "A. $-54$",
        "B. $54$",
        "C. $-162$",
        "D. $-18$"
      ],
      "correct": 0,
      "explanation": "Áp dụng công thức số hạng tổng quát: $u_4 = u_1 \\cdot q^3 = (-2) \\cdot 3^3 = (-2) \\cdot 27 = -54$."
    },
    {
      "id": "qz3",
      "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 4$ và $u_2 = 12$. Công bội $q$ và số hạng thứ ba $u_3$ lần lượt là:",
      "options": [
        "A. $q = 8, \\, u_3 = 20$",
        "B. $q = 3, \\, u_3 = 24$",
        "C. $q = 2, \\, u_3 = 24$",
        "D. $q = 3, \\, u_3 = 36$"
      ],
      "correct": 3,
      "explanation": "Ta có $q = \\dfrac{u_2}{u_1} = 3$. Số hạng thứ ba là $u_3 = 12 \\cdot 3 = 36$."
    },
    {
      "id": "qz4",
      "question": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = -2$. Tổng của 6 số hạng đầu tiên $S_6$ bằng:",
      "options": [
        "A. $63$",
        "B. $-63$",
        "C. $189$",
        "D. $-189$"
      ],
      "correct": 1,
      "explanation": "Ta có $S_6 = \\dfrac{3[1 - (-2)^6]}{1 - (-2)} = 1 - 64 = -63$."
    },
    {
      "id": "qz5",
      "question": "Tìm tất cả các giá trị của $x$ để ba số $x - 2, \\, x + 1, \\, x + 7$ theo thứ tự đó lập thành một cấp số nhân.",
      "options": [
        "A. $x = 3$",
        "B. $x = 4$",
        "C. $x = 5$",
        "D. $x = 6$"
      ],
      "correct": 2,
      "explanation": "Ta có $(x + 1)^2 = (x - 2)(x + 7) \\Leftrightarrow 2x + 1 = 5x - 14 \\Leftrightarrow 3x = 15 \\Leftrightarrow x = 5$."
    }
  ]
};

// Tự động tiêm bài học vào hệ thống
if (typeof window !== 'undefined') {
  if (typeof autoInjectLesson === 'function') {
    autoInjectLesson(window.LESSON_11_C2_B7_DATA);
  }
}
