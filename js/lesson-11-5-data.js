// Dữ liệu Bài 5 Lớp 11: Dãy số
// ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại, An Giang
// Chuẩn mực 5 sao Sư phạm & Công nghệ Giáo dục 2026
window.LESSON_11_C2_B5_DATA = {
  "id": "11-c2-b5",
  "grade": "11",
  "subject": "Toán 11 - Kết nối tri thức",
  "chapter": "Chương II",
  "chapterTitle": "Dãy số. Cấp số cộng và cấp số nhân",
  "number": "Bài 5",
  "title": "Dãy số",
  "isFeaturedLesson": true,
  "isInteractiveDigitalLesson": true,
  "teacherWelcome": {
    "greetingText": "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Thầy rất vui mừng được đồng hành cùng các em mở màn Chương 2 với Bài 5: Dãy số. Các em có biết không, dãy số không hề là những con số trừu tượng khô khan trên trang giấy, mà chính là ngôn ngữ toán học phản chiếu nhịp đập kì diệu của vũ trụ và đời sống xung quanh ta. Từ mô hình dự báo tăng trưởng dân số, số tiền tích lũy lãi kép hàng tháng trong ngân hàng, sự phân chia tế bào sinh học, cho đến quy luật xoắn ốc tuyệt mỹ của các cánh hoa hướng dương hay vỏ ốc Nautilus theo dãy số thần kỳ Fibonacci – tất cả đều được vận hành theo quy luật của dãy số! Nắm vững bài học hôm nay sẽ giúp các em làm chủ các khái niệm nền tảng: thế nào là dãy số vô hạn, hữu hạn, 4 phương pháp xác định dãy số, cùng kĩ thuật khảo sát tính tăng, giảm và tính bị chặn. Đây chính là chiếc chìa khóa vàng để các em chinh phục Cấp số cộng, Cấp số nhân và chuyên đề Giới hạn sau này. Nào, các em hãy chuẩn bị tập vở, giữ trọn niềm đam mê và cùng Thầy khám phá thế giới diệu kỳ của Dãy số nhé!",
    "audioScript": "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Thầy rất vui mừng được đồng hành cùng các em mở màn Chương 2 với Bài 5: Dãy số. Các em có biết không, dãy số không hề là những con số trừu tượng khô khan trên trang giấy, mà chính là ngôn ngữ toán học phản chiếu nhịp đập kì diệu của vũ trụ và đời sống xung quanh ta. Từ mô hình dự báo tăng trưởng dân số, số tiền tích lũy lãi kép hàng tháng trong ngân hàng, sự phân chia tế bào sinh học, cho đến quy luật xoắn ốc tuyệt mỹ của các cánh hoa hướng dương hay vỏ ốc Nautilus theo dãy số thần kỳ Fibonacci – tất cả đều được vận hành theo quy luật của dãy số! Nắm vững bài học hôm nay sẽ giúp các em làm chủ các khái niệm nền tảng: thế nào là dãy số vô hạn, hữu hạn, 4 phương pháp xác định dãy số, cùng kĩ thuật khảo sát tính tăng, giảm và tính bị chặn. Đây chính là chiếc chìa khóa vàng để các em chinh phục Cấp số cộng, Cấp số nhân và chuyên đề Giới hạn sau này. Nào, các em hãy chuẩn bị tập vở, giữ trọn niềm đam mê và cùng Thầy khám phá thế giới diệu kỳ của Dãy số nhé!",
    "audioUrl": "assets/audio/b11_5_welcome.mp3"
  },
  "learningGoals": [
    "Hiểu sâu sắc định nghĩa dãy số vô hạn (hàm số trên tập $\\mathbb{N}^*$) và dãy số hữu hạn (hàm số trên tập $\\{1, 2, \\dots, m\\}$); phân biệt rõ số hạng đầu $u_1$, số hạng thứ $n$ $u_n$ và số hạng cuối $u_m$.",
    "Thành thạo 4 cách cho một dãy số: liệt kê các số hạng, cho bằng công thức số hạng tổng quát, bằng phương pháp mô tả và bằng hệ thức truy hồi (tiêu biểu như dãy Fibonacci).",
    "Nắm vững định nghĩa và kĩ năng khảo sát tính tăng, tính giảm của dãy số thông qua xét hiệu $u_{n+1} - u_n$ hoặc xét tỉ số $\\dfrac{u_{n+1}}{u_n}$ (khi các số hạng dương).",
    "Làm chủ khái niệm và phương pháp chứng minh dãy số bị chặn trên, bị chặn dưới và bị chặn; biểu diễn trực quan các số hạng trên trục số.",
    "Vận dụng kiến thức dãy số giải quyết các bài toán thực tiễn phong phú: mô hình tăng trưởng dân số, bài toán tính lương định kì, tiền gửi tiết kiệm lãi kép ngân hàng và cấu trúc đề thi 2026."
  ],
  "goalsAudioUrl": "assets/audio/b11_5_goals.mp3",
  "goalsAudioScript": "Phần 2. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần làm chủ năm mục tiêu trọng tâm sau: Thứ nhất, hiểu sâu sắc định nghĩa dãy số vô hạn và hữu hạn, phân biệt rõ số hạng đầu, số hạng thứ n và số hạng cuối. Thứ hai, thành thạo bốn cách cho một dãy số gồm liệt kê, công thức số hạng tổng quát, mô tả và hệ thức truy hồi. Thứ ba, nắm vững kĩ năng khảo sát tính tăng, giảm qua xét hiệu hoặc tỉ số. Thứ tư, làm chủ phương pháp chứng minh dãy số bị chặn trên, bị chặn dưới và bị chặn. Thứ năm, tự tin vận dụng giải quyết các bài toán thực tế như dân số, tiền lương, lãi kép và chinh phục trọn vẹn đề thi đánh giá năng lực mới nhất.",
  
  // -------------------------------------------------------------------------
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN TƯƠNG TÁC (70% TIẾN TRÌNH)
  // -------------------------------------------------------------------------
  "hook": {
    "title": "Tình huống mở đầu: Dự báo tốc độ tăng trưởng dân số đô thị",
    "contentHtml": `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
        <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-city"></i> TÌNH HUỐNG MỞ ĐẦU (SGK TOÁN 11 KNTT TRANG 42)</h5>
        <p style="color: #334155; line-height: 1.7; font-size: 1rem;">
          Năm 2020, số dân của một thành phố trực thuộc tỉnh là khoảng <b>500 nghìn người</b>. Người ta ước tính rằng số dân của thành phố đó sẽ tăng trưởng với tốc độ ổn định khoảng <b>2% mỗi năm</b>.<br>
          Khi đó số dân $P_n$ (tính theo đơn vị nghìn người) của thành phố đó sau $n$ năm, kể từ mốc năm 2020, được mô hình hóa bởi công thức:
        </p>
        <div class="text-center my-3">
          <span style="font-size: 1.25rem; background: #eff6ff; padding: 10px 24px; border-radius: 10px; border: 1.5px solid #3b82f6; color: #1d4ed8; font-weight: bold; display: inline-block;">
            $P_n = 500 \\cdot (1 + 0{,}02)^n = 500 \\cdot (1{,}02)^n \\quad (n \\in \\mathbb{N}^*)$
          </span>
        </div>
        <p style="color: #334155; line-height: 1.7;">
          <i class="fa-solid fa-circle-question text-primary"></i> <b>Câu hỏi thực tiễn:</b> Nếu quy luật tăng trưởng tiếp tục duy trì ổn định như vậy, thì vào <b>năm 2030</b> (sau đúng 10 năm), số dân của thành phố đó ước tính là khoảng bao nhiêu nghìn người?
        </p>

        <!-- ĐỒ HỌA SVG MÔ HÌNH DỰ BÁO DÂN SỐ 2020 - 2030 -->
        <div class="text-center my-3">
          <div class="fw-bold text-secondary mb-1">BIỂU ĐỒ TĂNG TRƯỞNG DÂN SỐ ĐÔ THỊ GIAI ĐOẠN 2020 - 2030</div>
          <svg viewBox="0 0 760 260" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <linearGradient id="popGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0.02"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
  </defs>

  <!-- Lưới toạ độ nhạt -->
  <line x1="80" y1="190" x2="700" y2="190" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="80" y1="140" x2="700" y2="140" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="80" y1="90" x2="700" y2="90" stroke="#f1f5f9" stroke-width="1"/>

  <!-- Trục toạ độ Ox, Oy -->
  <line x1="80" y1="210" x2="710" y2="210" stroke="#334155" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="120" y1="225" x2="120" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="705" y="230" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155">Năm (n)</text>
  <text x="80" y="32" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155">Dân số Pₙ (nghìn người)</text>
  <text x="105" y="225" font-family="sans-serif" font-size="12" font-weight="bold" fill="#64748b">O</text>

  <!-- Miền diện tích tăng trưởng -->
  <path d="M 120 180 Q 380 155 640 90 L 640 210 L 120 210 Z" fill="url(#popGrad)"/>

  <!-- Đường cong tăng trưởng dân số P_n = 500(1.02)^n -->
  <path d="M 120 180 Q 380 155 640 90" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Mốc năm 2020 (n = 0): 500 nghìn người -->
  <circle cx="120" cy="180" r="5" fill="#2563eb"/>
  <line x1="120" y1="180" x2="120" y2="210" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="105" y="228" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">2020 (n=0)</text>
  <text x="50" y="184" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb">500</text>

  <!-- Mốc năm 2025 (n = 5): 552 nghìn người -->
  <circle cx="380" cy="142" r="5" fill="#d97706"/>
  <line x1="380" y1="142" x2="380" y2="210" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="120" y1="142" x2="380" y2="142" stroke="#d97706" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="355" y="228" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">2025 (n=5)</text>
  <text x="50" y="146" font-family="sans-serif" font-size="12" font-weight="bold" fill="#d97706">≈ 552</text>
  <text x="390" y="136" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d97706">P₅ ≈ 552k</text>

  <!-- Mốc năm 2030 (n = 10): 609 nghìn người -->
  <circle cx="640" cy="90" r="6" fill="#dc2626"/>
  <line x1="640" y1="90" x2="640" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="120" y1="90" x2="640" y2="90" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="610" y="228" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">2030 (n=10)</text>
  <text x="50" y="94" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">≈ 609</text>
  <text x="615" y="78" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">P₁₀ ≈ 609k người</text>

  <!-- Hộp chú giải mô hình -->
  <rect x="420" y="32" width="280" height="32" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
  <text x="432" y="52" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8">Mô hình tăng trưởng: Pₙ = 500 · (1 + 0,02)ⁿ</text>
</svg>
        </div>
      </div>`,
    "audioUrl": "assets/audio/b11_5_hook.mp3",
    "audioScript": "Tình huống mở đầu. Dự báo tốc độ tăng trưởng dân số đô thị. Năm 2020, dân số của một thành phố là khoảng 500 nghìn người và ước tính tăng trưởng ổn định 2% mỗi năm. Khi đó, dân số P n sau n năm được tính bằng công thức: P n bằng 500 nhân mở ngoặc 1 cộng 0 phẩy 02 đóng ngoặc mũ n, hay 500 nhân 1 phẩy 02 mũ n. Thầy đặt ra câu hỏi cho các em: Đến năm 2030, tức là sau 10 năm, dân số của thành phố này sẽ là khoảng bao nhiêu? Dãy các số dân theo từng năm chính là một ví dụ sống động về dãy số trong cuộc sống thực tế.",
    "pois": [
      {
        "time": 0.35,
        "question": "Tại mốc xuất phát năm 2020 ứng với n = 0, giá trị số dân P₀ bằng bao nhiêu nghìn người?",
        "options": [
          "500 nghìn người",
          "510 nghìn người",
          "520 nghìn người",
          "100 nghìn người"
        ],
        "correctIndex": 0,
        "explanation": "Tại n = 0, ta có P₀ = 500 · (1,02)⁰ = 500 · 1 = 500 nghìn người, đúng bằng quy mô dân số ban đầu của thành phố."
      },
      {
        "time": 0.70,
        "question": "Mỗi năm trôi qua, số dân năm sau gấp bao nhiêu lần số dân của năm liền trước?",
        "options": [
          "1,02 lần (tăng 2%)",
          "2 lần (tăng 100%)",
          "0,02 lần",
          "1,2 lần (tăng 20%)"
        ],
        "correctIndex": 0,
        "explanation": "Vì mỗi năm dân số tăng 2%, nên số dân năm sau bằng 100% + 2% = 102% = 1,02 lần số dân năm trước: P_{n} = 1,02 · P_{n-1}."
      }
    ],
    "workedExample": {
      "title": "Ví dụ mở đầu: Giải bài toán dự báo dân số năm 2030 (SGK trang 44 - Ví dụ 6)",
      "problem": "Từ tình huống mở đầu, hãy xác định số năm n từ 2020 đến 2030 và tính số dân dự kiến $P_{10}$ của thành phố vào năm 2030 (làm tròn đến hàng đơn vị theo nghìn người).",
      "solution": `<p><b>Lời giải chi tiết từ Thầy Sáng:</b></p>
        <ul>
          <li>Khoảng thời gian từ năm 2020 đến năm 2030 là: $n = 2030 - 2020 = 10$ (năm).</li>
          <li>Thay $n = 10$ vào công thức số hạng tổng quát $P_n$, ta có:
            $$P_{10} = 500 \\cdot (1 + 0{,}02)^{10} = 500 \\cdot (1{,}02)^{10}$$
          </li>
          <li>Sử dụng máy tính cầm tay tính toán:
            $$(1{,}02)^{10} \\approx 1{,}218994$$
            $$P_{10} \\approx 500 \\cdot 1{,}218994 \\approx 609{,}497 \\approx 609 \\text{ (nghìn người)}.$$
          </li>
        </ul>
        <div class="alert alert-success mt-2 mb-0">
          <i class="fa-solid fa-check-circle"></i> <b>Kết luận:</b> Vào năm 2030, dân số của thành phố ước tính đạt khoảng <b>609 nghìn người</b> (tăng gần 110 nghìn người so với năm 2020).
        </div>`
    },
    "practiceProblem": {
      "title": "Luyện tập mở đầu: Dự báo dân số năm 2035",
      "problem": "Vẫn theo mô hình tăng trưởng dân số trên, hãy dự báo dân số thành phố vào năm 2035 (làm tròn kết quả đến hàng đơn vị theo nghìn người).",
      "hint": "Năm 2035 ứng với số năm n = 2035 - 2020 = 15. Áp dụng công thức P₁₅ = 500 · (1,02)¹⁵.",
      "solution": `<p><b>Hướng dẫn giải Thầy Sáng:</b></p>
        <p>Khoảng cách thời gian từ năm 2020 đến năm 2035 là: $n = 2035 - 2020 = 15$ năm.</p>
        <p>Số dân thành phố vào năm 2035 là:
          $$P_{15} = 500 \\cdot (1{,}02)^{15} \\approx 500 \\cdot 1{,}345868 \\approx 672{,}93 \\approx 673 \\text{ (nghìn người)}.$$
        </p>
        <p><b>Đáp số:</b> Khoảng <b>673 nghìn người</b>.</p>`
    }
  },

  // -------------------------------------------------------------------------
  // DANH SÁCH CÁC MỤC KIẾN THỨC TRỌNG TÂM (SECTIONS & SUBSECTIONS)
  // -------------------------------------------------------------------------
  "sections": [
    // =======================================================================
    // MỤC 1: ĐỊNH NGHĨA DÃY SỐ (VÔ HẠN & HỮU HẠN)
    // =======================================================================
    {
      "id": "11-c2-b5-s1",
      "num": "1",
      "title": "Định nghĩa dãy số",
      "audioUrl": "assets/audio/b11_5_sec1a.mp3",
      "audioScript": "Mục 1. Định nghĩa dãy số. Mục này gồm hai tiểu mục: a. Định nghĩa dãy số vô hạn; và b. Định nghĩa dãy số hữu hạn.",
      "subsections": [
        // --- 1a. DÃY SỐ VÔ HẠN ---
        {
          "key": "a",
          "title": "Dãy số vô hạn",
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
              <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-infinity"></i> HĐ 1 (SGK trang 42): Nhận biết dãy số vô hạn</h5>
              <p style="color: #334155; line-height: 1.6;">
                <b>Số chính phương</b> là số bằng bình phương của một số tự nhiên: $0^2=0, 1^2=1, 2^2=4, 3^2=9, \\dots$<br>
                Hãy viết 5 số chính phương đầu tiên (khác 0) theo thứ tự tăng dần: $1, 4, 9, 16, 25$.<br>
                Từ đó, ta nhận thấy quy luật số chính phương thứ $n$ là: $u_n = n^2 \\quad (n \\in \\mathbb{N}^*)$.
              </p>

              <!-- CARD ĐỊNH NGHĨA SƯ PHẠM VÀNG SAPPHIRE -->
              <div class="math-func-card card-sin mb-3">
                <div class="math-func-title"><i class="fa-solid fa-book-bookmark"></i> ĐỊNH NGHĨA DÃY SỐ VÔ HẠN (SGK TRANG 42)</div>
                <div style="background: #ffffff; border-radius: 8px; padding: 14px 16px; border: 1px solid #cbd5e1; font-size: 0.98rem; color: #1e293b; line-height: 1.7;">
                  <ul class="mb-2" style="padding-left: 20px;">
                    <li>Mỗi hàm số $u$ xác định trên tập hợp các số nguyên dương $\\mathbb{N}^* = \\{1, 2, 3, \\dots\\}$ được gọi là một <b>dãy số vô hạn</b> (gọi tắt là <b>dãy số</b>), kí hiệu là $u = u(n)$.</li>
                    <li>Ta thường viết $u_n$ thay cho $u(n)$ và kí hiệu dãy số $u = u(n)$ bởi <b>$(u_n)$</b>.</li>
                    <li>Dãy số $(u_n)$ được viết dưới dạng khai triển:
                      <div class="text-center my-2">
                        <span class="badge bg-primary text-wrap fs-6 px-3 py-2">$u_1, u_2, u_3, \\dots, u_n, \\dots$</span>
                      </div>
                    </li>
                    <li>Số $u_1 = u(1)$ gọi là <b>số hạng đầu</b>.</li>
                    <li>Số $u_n = u(n)$ là <b>số hạng thứ $n$</b> và gọi là <b>số hạng tổng quát</b> của dãy số.</li>
                  </ul>
                  <div class="alert alert-warning mb-0 py-2">
                    <i class="fa-solid fa-lightbulb"></i> <b>Chú ý quan trọng:</b> Nếu với mọi $n \\in \\mathbb{N}^*$, $u_n = c$ (hằng số không đổi) thì $(u_n)$ được gọi là <b>dãy số không đổi</b> (ví dụ dãy $5, 5, 5, 5, \\dots$).
                  </div>
                </div>
              </div>

              <!-- SƠ ĐỒ PHÂN NHÁNH TRỰC QUAN -->
              <div class="text-center my-3">
                <div class="fw-bold text-secondary mb-1">SƠ ĐỒ HỆ THỐNG PHÂN LOẠI DÃY SỐ</div>
                <svg viewBox="0 0 760 210" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <!-- Khối gốc -->
  <rect x="290" y="16" width="180" height="42" rx="8" fill="#1e293b"/>
  <text x="380" y="42" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">KHÁI NIỆM DÃY SỐ</text>

  <!-- Đường nối phân nhánh -->
  <path d="M 340 58 L 340 85 L 180 85 L 180 105" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <path d="M 420 58 L 420 85 L 580 85 L 580 105" fill="none" stroke="#16a34a" stroke-width="2.5"/>

  <!-- Nhánh 1: Dãy số vô hạn -->
  <rect x="60" y="105" width="240" height="88" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
  <text x="180" y="128" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">1. DÃY SỐ VÔ HẠN</text>
  <text x="180" y="148" font-family="sans-serif" font-size="11.5" fill="#1e293b" text-anchor="middle">Hàm số u: ℕ* → ℝ (n ∈ {1, 2, 3, ...})</text>
  <text x="180" y="168" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">Khai triển: u₁, u₂, u₃, ..., uₙ, ...</text>
  <text x="180" y="184" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0284c7" text-anchor="middle">Số hạng đầu u₁, số hạng tổng quát uₙ</text>

  <!-- Nhánh 2: Dãy số hữu hạn -->
  <rect x="460" y="105" width="240" height="88" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
  <text x="580" y="128" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d" text-anchor="middle">2. DÃY SỐ HỮU HẠN</text>
  <text x="580" y="148" font-family="sans-serif" font-size="11.5" fill="#1e293b" text-anchor="middle">Hàm số u: {1, 2, ..., m} → ℝ (m hữu hạn)</text>
  <text x="580" y="168" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">Khai triển: u₁, u₂, ..., uₘ</text>
  <text x="580" y="184" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#16a34a" text-anchor="middle">Số hạng đầu u₁, số hạng cuối uₘ</text>
</svg>
              </div>
            </div>`,
          "audioUrl": "assets/audio/b11_5_sec1a.mp3",
          "audioScript": "Mục 1. Định nghĩa dãy số. Tiểu mục a: Dãy số vô hạn. Mỗi hàm số u xác định trên tập hợp các số nguyên dương N sao được gọi là một dãy số vô hạn, gọi tắt là dãy số, kí hiệu là mở ngoặc u n đóng ngoặc. Dãy số được viết dưới dạng khai triển là: u 1, u 2, u 3, vân vân, u n, vân vân. Trong đó, u 1 là số hạng đầu tiên, và u n là số hạng thứ n, được gọi là số hạng tổng quát của dãy số. Nếu mọi số hạng đều bằng một hằng số c không đổi, ta gọi đó là dãy số không đổi.",
          "pois": [
            {
              "time": 0.35,
              "question": "Tập xác định của một dãy số vô hạn (un) là tập hợp nào sau đây?",
              "options": [
                "Tập số nguyên dương ℕ* = {1, 2, 3, ...}",
                "Tập số tự nhiên ℕ = {0, 1, 2, 3, ...}",
                "Tập số thực ℝ",
                "Tập số nguyên ℤ"
              ],
              "correctIndex": 0,
              "explanation": "Theo đúng định nghĩa SGK, dãy số vô hạn là hàm số xác định trên tập các số nguyên dương ℕ* = {1, 2, 3, ...}."
            },
            {
              "time": 0.70,
              "question": "Cho dãy số không đổi (un) có un = 7 với mọi n ∈ ℕ*. Giá trị của số hạng thứ 2026 bằng bao nhiêu?",
              "options": [
                "u₂₀₂₆ = 7",
                "u₂₀₂₆ = 2026",
                "u₂₀₂₆ = 14182",
                "u₂₀₂₆ = 0"
              ],
              "correctIndex": 0,
              "explanation": "Vì là dãy số không đổi, mọi số hạng đều bằng 7, do đó u₂₀₂₆ = 7."
            }
          ],
          "workedExample": {
            "title": "Ví dụ mẫu 1: Xác định số hạng đầu và số hạng tổng quát (SGK trang 43 - Ví dụ 1)",
            "problem": "Xác định số hạng đầu và số hạng tổng quát của mỗi dãy số sau:<br>a) Dãy số $(u_n)$ các số tự nhiên lẻ: $1, 3, 5, 7, \\dots$<br>b) Dãy số $(v_n)$ các số nguyên dương chia hết cho 5: $5, 10, 15, 20, \\dots$",
            "solution": `<p><b>Lời giải chi tiết:</b></p>
              <ul>
                <li><b>Câu a:</b> Dãy số lẻ $(u_n)$ có số hạng đầu là $u_1 = 1$. Số hạng tổng quát của các số tự nhiên lẻ thứ $n$ là:
                  $$u_n = 2n - 1 \\quad (n \\in \\mathbb{N}^*).$$
                </li>
                <li><b>Câu b:</b> Dãy $(v_n)$ các số chia hết cho 5 có số hạng đầu là $v_1 = 5$. Số hạng tổng quát thứ $n$ là:
                  $$v_n = 5n \\quad (n \\in \\mathbb{N}^*).$$
                </li>
              </ul>`
          },
          "practiceProblem": {
            "title": "Luyện tập tương tự 1a: Tìm số hạng tổng quát (SGK trang 43)",
            "problem": "Xét dãy số gồm tất cả các số tự nhiên chia cho 5 dư 1 theo thứ tự tăng dần. Xác định số hạng đầu và số hạng tổng quát của dãy số đó.",
            "hint": "Số tự nhiên chia cho 5 dư 1 có dạng 5k + 1 với k = 0, 1, 2, ... Vì dãy số bắt đầu từ n = 1, ta đặt n = k + 1 để tìm uₙ theo n.",
            "solution": `<p><b>Hướng dẫn giải Thầy Sáng:</b></p>
              <ul>
                <li>Các số tự nhiên chia cho 5 dư 1 viết theo thứ tự tăng dần là: $1, 6, 11, 16, 21, \\dots$</li>
                <li>Số hạng đầu tiên của dãy số là: $u_1 = 1$.</li>
                <li>Mỗi số hạng sau hơn số hạng trước 5 đơn vị. Với số nguyên dương $n \\ge 1$, số hạng tổng quát là:
                  $$u_n = 5(n - 1) + 1 = 5n - 4 \\quad (n \\in \\mathbb{N}^*).$$
                </li>
                <li>Kiểm tra lại: Với $n = 1 \\implies u_1 = 5(1) - 4 = 1$; với $n = 2 \\implies u_2 = 5(2) - 4 = 6$ (hoàn toàn chính xác).</li>
              </ul>`
          }
        },

        // --- 1b. DÃY SỐ HỮU HẠN ---
        {
          "key": "b",
          "title": "Dãy số hữu hạn",
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
              <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-list-check"></i> HĐ 2 (SGK trang 43): Nhận biết dãy số hữu hạn</h5>
              <p style="color: #334155; line-height: 1.6;">
                a) Liệt kê tất cả các số chính phương nhỏ hơn 50 sắp xếp theo thứ tự tăng dần:<br>
                $$1, 4, 9, 16, 25, 36, 49$$
                b) Các số trên có công thức $u_n = n^2$, nhưng biến số $n$ chỉ nhận các giá trị trong tập hợp hữu hạn $M = \\{1, 2, 3, 4, 5, 6, 7\\}$.
              </p>

              <!-- CARD ĐỊNH NGHĨA DÃY SỐ HỮU HẠN -->
              <div class="math-func-card card-cos mb-3">
                <div class="math-func-title"><i class="fa-solid fa-bookmark"></i> ĐỊNH NGHĨA DÃY SỐ HỮU HẠN (SGK TRANG 43)</div>
                <div style="background: #ffffff; border-radius: 8px; padding: 14px 16px; border: 1px solid #cbd5e1; font-size: 0.98rem; color: #1e293b; line-height: 1.7;">
                  <ul class="mb-0" style="padding-left: 20px;">
                    <li>Mỗi hàm số $u$ xác định trên tập hợp $M = \\{1, 2, 3, \\dots, m\\}$ với $m \\in \\mathbb{N}^*$ được gọi là một <b>dãy số hữu hạn</b>.</li>
                    <li>Dạng khai triển của dãy số hữu hạn gồm đúng $m$ phần tử:
                      <div class="text-center my-2">
                        <span class="badge bg-success text-wrap fs-6 px-3 py-2">$u_1, u_2, u_3, \\dots, u_m$</span>
                      </div>
                    </li>
                    <li>Số $u_1$ gọi là <b>số hạng đầu</b>, số $u_m$ gọi là <b>số hạng cuối</b> của dãy số hữu hạn.</li>
                  </ul>
                </div>
              </div>
            </div>`,
          "audioUrl": "assets/audio/b11_5_sec1b.mp3",
          "audioScript": "Tiểu mục b: Dãy số hữu hạn. Mỗi hàm số u xác định trên tập hợp M gồm m số nguyên dương đầu tiên từ 1 đến m được gọi là một dãy số hữu hạn. Dạng khai triển của dãy số hữu hạn là u 1, u 2, cho đến u m. Trong đó, u 1 là số hạng đầu, và u m là số hạng cuối cùng.",
          "pois": [
            {
              "time": 0.35,
              "question": "Dãy số hữu hạn u₁, u₂, ..., uₘ có tất cả bao nhiêu số hạng?",
              "options": [
                "Đúng m số hạng",
                "Vô số số hạng",
                "m - 1 số hạng",
                "m + 1 số hạng"
              ],
              "correctIndex": 0,
              "explanation": "Vì hàm số xác định trên tập M = {1, 2, ..., m} nên dãy có đúng m số hạng."
            },
            {
              "time": 0.70,
              "question": "Xét dãy số hữu hạn gồm 12 tháng trong năm: u₁ là Tháng 1, ..., u₁₂ là Tháng 12. Số hạng cuối u₁₂ là gì?",
              "options": [
                "Tháng 12",
                "Tháng 1",
                "Tháng 6",
                "Tháng 11"
              ],
              "correctIndex": 0,
              "explanation": "Dãy hữu hạn này có 12 số hạng, số hạng đầu là Tháng 1 và số hạng cuối u₁₂ là Tháng 12."
            }
          ],
          "workedExample": {
            "title": "Ví dụ mẫu 2: Khảo sát dãy số hữu hạn (SGK trang 43 - Ví dụ 2)",
            "problem": "Xét dãy số hữu hạn gồm các số tự nhiên lẻ nhỏ hơn 20, sắp xếp theo thứ tự từ bé đến lớn.<br>a) Liệt kê tất cả các số hạng của dãy số hữu hạn này.<br>b) Tìm số hạng đầu, số hạng cuối và số lượng số hạng của dãy số đó.",
            "solution": `<p><b>Lời giải chi tiết:</b></p>
              <ul>
                <li><b>Câu a:</b> Các số tự nhiên lẻ nhỏ hơn 20 là:
                  $$1, 3, 5, 7, 9, 11, 13, 15, 17, 19.$$
                </li>
                <li><b>Câu b:</b>
                  <ul>
                    <li>Số hạng đầu là: $u_1 = 1$.</li>
                    <li>Số hạng cuối là: $u_{10} = 19$.</li>
                    <li>Dãy số hữu hạn này có tất cả <b>10 số hạng</b>.</li>
                  </ul>
                </li>
              </ul>`
          },
          "practiceProblem": {
            "title": "Luyện tập tương tự 1b: Viết dãy số hữu hạn (SGK trang 43)",
            "problem": "Viết dãy số hữu hạn gồm năm số hạng đầu của dãy số các số tự nhiên chia cho 5 dư 1. Xác định số hạng đầu và số hạng cuối của dãy số hữu hạn này.",
            "hint": "Năm số hạng đầu tiên ứng với n = 1, 2, 3, 4, 5. Sử dụng công thức uₙ = 5n - 4.",
            "solution": `<p><b>Hướng dẫn giải Thầy Sáng:</b></p>
              <ul>
                <li>Năm số hạng đầu tiên là:
                  $$u_1 = 1, \\quad u_2 = 6, \\quad u_3 = 11, \\quad u_4 = 16, \\quad u_5 = 21.$$
                </li>
                <li>Dạng khai triển của dãy số hữu hạn là: $1, 6, 11, 16, 21$.</li>
                <li>Số hạng đầu là $u_1 = 1$, số hạng cuối là $u_5 = 21$. Dãy có đúng 5 số hạng.</li>
              </ul>`
          }
        }
      ]
    },

    // =======================================================================
    // MỤC 2: CÁC CÁCH CHO MỘT DÃY SỐ
    // =======================================================================
    {
      "id": "11-c2-b5-s2",
      "num": "2",
      "title": "Các cách cho một dãy số",
      "audioUrl": "assets/audio/b11_5_sec2a.mp3",
      "audioScript": "Mục 2. Các cách cho một dãy số. Mục này gồm hai tiểu mục: a. Liệt kê các số hạng và cho bằng công thức số hạng tổng quát; và b. Phương pháp mô tả cùng phương pháp truy hồi.",
      "subsections": [
        // --- 2a. LIỆT KÊ & CÔNG THỨC SỐ HẠNG TỔNG QUÁT ---
        {
          "key": "a",
          "title": "Liệt kê và Công thức số hạng tổng quát",
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
              <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-shapes"></i> BỐN CÁCH CHO MỘT DÃY SỐ (SGK TRANG 43 - 44)</h5>
              <p style="color: #334155; line-height: 1.6;">
                Một dãy số có thể được cho bằng một trong bốn phương pháp cơ bản sau:
              </p>

              <!-- BẢNG SO SÁNH 4 CÁCH CHO DÃY SỐ: KẺ BẢNG LƯỚI SẮC NÉT THẨM MĨ -->
              <div class="math-table-container my-3">
                <table class="math-table table-bordered">
                  <thead class="table-primary">
                    <tr>
                      <th style="width: 25%;">Phương pháp</th>
                      <th style="width: 45%;">Đặc điểm & Bản chất</th>
                      <th style="width: 30%;">Ví dụ minh họa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fw-bold text-primary">1. Liệt kê số hạng</td>
                      <td>Liệt kê cụ thể tất cả các số hạng. Chỉ áp dụng cho dãy hữu hạn và có ít số hạng.</td>
                      <td>Dãy các chữ số lẻ: $1, 3, 5, 7, 9$.</td>
                    </tr>
                    <tr>
                      <td class="fw-bold text-success">2. Công thức số hạng tổng quát</td>
                      <td>Cho công thức $u_n = f(n)$ giúp xác định ngay lập tức số hạng thứ $n$ bất kì mà không cần biết các số hạng trước.</td>
                      <td>$u_n = 2n$, $u_n = \\dfrac{(-1)^n}{n}$, $u_n = n!$.</td>
                    </tr>
                    <tr>
                      <td class="fw-bold text-warning">3. Phương pháp mô tả</td>
                      <td>Mô tả bằng lời quy tắc xác định mỗi số hạng của dãy số.</td>
                      <td>Dãy số nguyên tố: $2, 3, 5, 7, 11, \\dots$</td>
                    </tr>
                    <tr>
                      <td class="fw-bold text-danger">4. Phương pháp truy hồi</td>
                      <td>Cho số hạng đầu (hoặc vài số hạng đầu) và hệ thức tính $u_n$ qua các số hạng đứng trước nó.</td>
                      <td>$u_1 = 1, u_n = 3u_{n-1} + 2$;<br>Dãy Fibonacci: $F_n = F_{n-1} + F_{n-2}$.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>`,
          "audioUrl": "assets/audio/b11_5_sec2a.mp3",
          "audioScript": "Mục 2. Các cách cho một dãy số. Tiểu mục a: Liệt kê và công thức số hạng tổng quát. Một dãy số có thể được xác định bằng một trong bốn phương pháp: Liệt kê các số hạng, cho bằng công thức số hạng tổng quát, phương pháp mô tả và phương pháp truy hồi. Trong đó, cách cho bằng công thức số hạng tổng quát u n bằng f của n là cách phổ biến và tiện lợi nhất, vì cho phép chúng ta tính toán trực tiếp bất kì số hạng thứ n nào mà không cần lần lượt tính các số hạng đứng trước.",
          "pois": [
            {
              "time": 0.35,
              "question": "Cho dãy số (un) với un = 2n. Số hạng thứ 100 của dãy số u₁₀₀ bằng bao nhiêu?",
              "options": [
                "u₁₀₀ = 200",
                "u₁₀₀ = 100",
                "u₁₀₀ = 102",
                "u₁₀₀ = 2026"
              ],
              "correctIndex": 0,
              "explanation": "Thay n = 100 vào công thức, ta có u₁₀₀ = 2 · 100 = 200."
            },
            {
              "time": 0.70,
              "question": "Dãy số un = (-1)ⁿ / n có đặc điểm gì về dấu của các số hạng?",
              "options": [
                "Đan dấu xen kẽ âm, dương, âm, dương...",
                "Tất cả các số hạng đều mang dấu dương",
                "Tất cả các số hạng đều mang dấu âm",
                "Bằng 0 với mọi n"
              ],
              "correctIndex": 0,
              "explanation": "Do (-1)ⁿ luân phiên bằng -1 khi n lẻ và +1 khi n chẵn, nên dãy có các số hạng xen kẽ: u₁ = -1, u₂ = 1/2, u₃ = -1/3, u₄ = 1/4..."
            }
          ],
          "workedExample": {
            "title": "Ví dụ mẫu 3: Tính số hạng theo công thức tổng quát (SGK trang 44 - Ví dụ 3)",
            "problem": "Tìm năm số hạng đầu và số hạng thứ 100 của mỗi dãy số sau:<br>a) $u_n = 2n$;<br>b) $u_n = \\dfrac{(-1)^n}{n}$.",
            "solution": `<p><b>Lời giải chi tiết:</b></p>
              <ul>
                <li><b>Câu a:</b> Thay lần lượt $n = 1, 2, 3, 4, 5$ vào $u_n = 2n$:
                  $$u_1 = 2, \\quad u_2 = 4, \\quad u_3 = 6, \\quad u_4 = 8, \\quad u_5 = 10.$$
                  Số hạng thứ 100 là: $u_{100} = 2 \\cdot 100 = 200$.
                </li>
                <li><b>Câu b:</b> Thay lần lượt $n = 1, 2, 3, 4, 5$ vào $u_n = \\dfrac{(-1)^n}{n}$:
                  $$u_1 = -1, \\quad u_2 = \\dfrac{1}{2}, \\quad u_3 = -\\dfrac{1}{3}, \\quad u_4 = \\dfrac{1}{4}, \\quad u_5 = -\\dfrac{1}{5}.$$
                  Số hạng thứ 100 là: $u_{100} = \\dfrac{(-1)^{100}}{100} = \\dfrac{1}{100}$.
                </li>
              </ul>`
          },
          "practiceProblem": {
            "title": "Luyện tập tương tự 2a: Dãy số giai thừa (SGK trang 44)",
            "problem": "Viết năm số hạng đầu của dãy số $(u_n)$ cho bởi công thức số hạng tổng quát $u_n = n!$.",
            "hint": "Giai thừa n! = 1 · 2 · 3 · ... · n. Ví dụ 1! = 1, 2! = 1 · 2 = 2, 3! = 1 · 2 · 3 = 6.",
            "solution": `<p><b>Hướng dẫn giải Thầy Sáng:</b></p>
              <ul>
                <li>$u_1 = 1! = 1$</li>
                <li>$u_2 = 2! = 1 \\cdot 2 = 2$</li>
                <li>$u_3 = 3! = 1 \\cdot 2 \\cdot 3 = 6$</li>
                <li>$u_4 = 4! = 1 \\cdot 2 \\cdot 3 \\cdot 4 = 24$</li>
                <li>$u_5 = 5! = 1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdot 5 = 120$</li>
              </ul>
              <p><b>Kết luận:</b> Năm số hạng đầu của dãy số là: $1, 2, 6, 24, 120$.</p>`
          }
        },

        // --- 2b. PHƯƠNG PHÁP MÔ TẢ & PHƯƠNG PHÁP TRUY HỒI ---
        {
          "key": "b",
          "title": "Phương pháp mô tả và Phương pháp truy hồi",
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
              <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-code-fork"></i> PHƯƠNG PHÁP TRUY HỒI & BIỂU DIỄN HÌNH HỌC DÃY SỐ</h5>
              
              <!-- CARD SƯ PHẠM TRUY HỒI -->
              <div class="math-func-card card-tan mb-3">
                <div class="math-func-title"><i class="fa-solid fa-arrows-spin"></i> HỆ THỨC TRUY HỒI & DÃY SỐ FIBONACCI (SGK TRANG 44)</div>
                <div style="background: #ffffff; border-radius: 8px; padding: 14px 16px; border: 1px solid #cbd5e1; font-size: 0.98rem; color: #1e293b; line-height: 1.7;">
                  <p><b>Hệ thức truy hồi</b> là hệ thức biểu thị số hạng thứ $n$ của dãy số qua số hạng (hay vài số hạng) đứng trước nó.</p>
                  <div class="row align-items-center">
                    <div class="col-md-6">
                      <div class="p-2 bg-light rounded border">
                        <b>Ví dụ truy hồi đơn giản:</b><br>
                        $\\begin{cases} u_1 = 1 \\\\ u_n = 3u_{n-1} + 2 \\quad (n \\ge 2) \\end{cases}$
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="p-2 bg-light rounded border">
                        <b>Dãy Fibonacci huyền thoại:</b><br>
                        $\\begin{cases} F_1 = 1, \\, F_2 = 1 \\\\ F_n = F_{n-1} + F_{n-2} \\quad (n \\ge 3) \\end{cases}$
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ĐỒ HỌA SVG CHUẨN XÁC TRỤC SỐ BIỂU DIỄN DÃY SỐ ĐAN DẤU HỘI TỤ (SGK TRANG 45) -->
              <div class="text-center my-3">
                <svg viewBox="0 0 760 180" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <marker id="arrowLine" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/>
    </marker>
  </defs>

  <text x="380" y="28" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">
    BIỂU DIỄN CÁC SỐ HẠNG CỦA DÃY SỐ uₙ = (-1)ⁿ / 2ⁿ TRÊN TRỤC SỐ (SGK TRANG 45)
  </text>

  <!-- Trục số chính -->
  <line x1="40" y1="100" x2="720" y2="100" stroke="#1e293b" stroke-width="2.5" marker-end="url(#arrowLine)"/>

  <!-- Mốc -1 và 1 -->
  <line x1="80" y1="92" x2="80" y2="108" stroke="#64748b" stroke-width="2"/>
  <text x="80" y="125" font-family="sans-serif" font-size="12" font-weight="bold" fill="#64748b" text-anchor="middle">-1</text>

  <line x1="680" y1="92" x2="680" y2="108" stroke="#64748b" stroke-width="2"/>
  <text x="680" y="125" font-family="sans-serif" font-size="12" font-weight="bold" fill="#64748b" text-anchor="middle">1</text>

  <!-- Gốc toạ độ 0 -->
  <line x1="380" y1="88" x2="380" y2="112" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="380" cy="100" r="4" fill="#dc2626"/>
  <text x="380" y="128" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">0</text>

  <!-- u1 = -1/2 (x = 380 - 150 = 230) -->
  <line x1="230" y1="92" x2="230" y2="108" stroke="#2563eb" stroke-width="2"/>
  <circle cx="230" cy="100" r="4.5" fill="#2563eb"/>
  <text x="230" y="78" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">-1/2</text>
  <text x="230" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">u₁</text>

  <!-- u2 = 1/4 (x = 380 + 75 = 455) -->
  <line x1="455" y1="92" x2="455" y2="108" stroke="#16a34a" stroke-width="2"/>
  <circle cx="455" cy="100" r="4.5" fill="#16a34a"/>
  <text x="455" y="78" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">1/4</text>
  <text x="455" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">u₂</text>

  <!-- u3 = -1/8 (x = 380 - 37.5 = 342.5) -->
  <line x1="342.5" y1="92" x2="342.5" y2="108" stroke="#2563eb" stroke-width="1.8"/>
  <circle cx="342.5" cy="100" r="4" fill="#2563eb"/>
  <text x="340" y="78" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">-1/8</text>
  <text x="342.5" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">u₃</text>

  <!-- u4 = 1/16 (x = 380 + 18.75 = 398.75) -->
  <line x1="399" y1="92" x2="399" y2="108" stroke="#16a34a" stroke-width="1.8"/>
  <circle cx="399" cy="100" r="3.5" fill="#16a34a"/>
  <text x="412" y="78" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#16a34a" text-anchor="middle">1/16</text>
  <text x="408" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a" text-anchor="middle">u₄</text>

  <!-- u5 = -1/32 (x = 380 - 9.375 = 370.6) -->
  <line x1="371" y1="92" x2="371" y2="108" stroke="#2563eb" stroke-width="1.5"/>
  <circle cx="371" cy="100" r="3" fill="#2563eb"/>
  <text x="360" y="62" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">-1/32</text>
  <text x="365" y="152" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">u₅</text>

  <!-- Chú thích quy luật hội tụ -->
  <rect x="520" y="38" width="220" height="26" rx="6" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="630" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">Các số hạng dao động hội tụ về 0</text>
</svg>
              </div>
            </div>`,
          "audioUrl": "assets/audio/b11_5_sec2b.mp3",
          "audioScript": "Tiểu mục b: Phương pháp mô tả và phương pháp truy hồi. Phương pháp truy hồi là việc cho trước số hạng đầu tiên, cùng hệ thức tính số hạng thứ n qua một hoặc nhiều số hạng đứng liền trước nó. Tiêu biểu nhất là dãy số Fibonacci kì diệu với hai số hạng đầu bằng 1, và mỗi số hạng tiếp theo bằng tổng của hai số hạng liền trước. Để có hình ảnh trực quan về dãy số, ta có thể biểu diễn các số hạng của nó trên trục số như hình vẽ minh họa dãy số đan dấu u n bằng mở ngoặc trừ 1 đóng ngoặc mũ n chia cho 2 mũ n đang hội tụ về điểm 0.",
          "pois": [
            {
              "time": 0.35,
              "question": "Dãy số Fibonacci có F₁ = 1, F₂ = 1. Giá trị của số hạng thứ tư F₄ bằng bao nhiêu?",
              "options": [
                "F₄ = 3",
                "F₄ = 2",
                "F₄ = 4",
                "F₄ = 5"
              ],
              "correctIndex": 0,
              "explanation": "Ta có F₃ = F₂ + F₁ = 1 + 1 = 2; F₄ = F₃ + F₂ = 2 + 1 = 3."
            },
            {
              "time": 0.70,
              "question": "Trên trục số biểu diễn dãy un = (-1)ⁿ / 2ⁿ, các số hạng luân phiên nằm ở đâu so với điểm gốc 0?",
              "options": [
                "Nằm xen kẽ ở hai phía bên trái (âm) và bên phải (dương) của điểm 0",
                "Tất cả đều nằm ở bên phải của điểm 0",
                "Tất cả đều nằm ở bên trái của điểm 0",
                "Trùng hoàn toàn với điểm 0"
              ],
              "correctIndex": 0,
              "explanation": "Vì các số hạng đan dấu xen kẽ: u₁ = -1/2 (bên trái), u₂ = 1/4 (bên phải), u₃ = -1/8 (bên trái)... nên chúng dao động hai bên gốc 0 và ngày càng tiến sát về 0."
            }
          ],
          "workedExample": {
            "title": "Ví dụ mẫu 4: Tính số hạng theo hệ thức truy hồi (SGK trang 44 - Ví dụ 5)",
            "problem": "Cho dãy số $(u_n)$ xác định bằng hệ thức truy hồi:<br>$$u_1 = 1, \\quad u_n = 3u_{n-1} + 2 \\quad (n \\ge 2).$$<br>Viết ba số hạng đầu của dãy số này.",
            "solution": `<p><b>Lời giải chi tiết:</b></p>
              <ul>
                <li>Số hạng thứ nhất đã cho: $u_1 = 1$.</li>
                <li>Với $n = 2$: $u_2 = 3u_1 + 2 = 3 \\cdot 1 + 2 = 5$.</li>
                <li>Với $n = 3$: $u_3 = 3u_2 + 2 = 3 \\cdot 5 + 2 = 17$.</li>
              </ul>
              <p><b>Kết luận:</b> Ba số hạng đầu của dãy số là: $u_1 = 1, \\, u_2 = 5, \\, u_3 = 17$.</p>`
          },
          "practiceProblem": {
            "title": "Luyện tập tương tự 2b: Dãy Fibonacci (SGK trang 44)",
            "problem": "Viết năm số hạng đầu của dãy số Fibonacci $(F_n)$ cho bởi hệ thức truy hồi:<br>$$F_1 = 1, \\quad F_2 = 1, \\quad F_n = F_{n-1} + F_{n-2} \\quad (n \\ge 3).$$",
            "hint": "Tính F₃ = F₂ + F₁, F₄ = F₃ + F₂, F₅ = F₄ + F₃.",
            "solution": `<p><b>Hướng dẫn giải Thầy Sáng:</b></p>
              <ul>
                <li>$F_1 = 1$</li>
                <li>$F_2 = 1$</li>
                <li>$F_3 = F_2 + F_1 = 1 + 1 = 2$</li>
                <li>$F_4 = F_3 + F_2 = 2 + 1 = 3$</li>
                <li>$F_5 = F_4 + F_3 = 3 + 2 = 5$</li>
              </ul>
              <p><b>Kết luận:</b> Năm số hạng đầu của dãy Fibonacci là: <b>$1, 1, 2, 3, 5$</b> (số hạng tiếp theo sẽ là $8, 13, 21, \\dots$).</p>`
          }
        }
      ]
    },

    // =======================================================================
    // MỤC 3: DÃY SỐ TĂNG, DÃY SỐ GIẢM VÀ DÃY SỐ BỊ CHẶN
    // =======================================================================
    {
      "id": "11-c2-b5-s3",
      "num": "3",
      "title": "Dãy số tăng, dãy số giảm và dãy số bị chặn",
      "audioUrl": "assets/audio/b11_5_sec3a.mp3",
      "audioScript": "Mục 3. Dãy số tăng, dãy số giảm và dãy số bị chặn. Mục này gồm hai tiểu mục quan trọng: a. Dãy số tăng và dãy số giảm; và b. Dãy số bị chặn trên, bị chặn dưới và bị chặn.",
      "subsections": [
        // --- 3a. DÃY SỐ TĂNG VÀ DÃY SỐ GIẢM ---
        {
          "key": "a",
          "title": "Dãy số tăng và dãy số giảm",
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
              <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-arrow-trend-up"></i> HĐ 4 (SGK trang 45): Khảo sát tính tăng, giảm của dãy số</h5>
              <p style="color: #334155; line-height: 1.6;">
                a) Xét $(u_n)$ với $u_n = 3n - 1$: Ta có $u_{n+1} = 3(n+1) - 1 = 3n + 2$. So sánh: $u_{n+1} - u_n = (3n+2) - (3n-1) = 3 > 0 \\implies u_{n+1} > u_n \\implies$ Dãy số tăng.<br>
                b) Xét $(v_n)$ với $v_n = \\dfrac{1}{n^2}$: Ta có $v_{n+1} = \\dfrac{1}{(n+1)^2} < \\dfrac{1}{n^2} = v_n \\implies v_{n+1} < v_n \\implies$ Dãy số giảm.
              </p>

              <!-- CARD ĐỊNH NGHĨA DÃY SỐ TĂNG / GIẢM -->
              <div class="math-func-card card-sin mb-3">
                <div class="math-func-title"><i class="fa-solid fa-chart-line"></i> ĐỊNH NGHĨA VÀ PHƯƠNG PHÁP XÉT TÍNH TĂNG, GIẢM (SGK TRANG 45)</div>
                <div style="background: #ffffff; border-radius: 8px; padding: 14px 16px; border: 1px solid #cbd5e1; font-size: 0.98rem; color: #1e293b; line-height: 1.7;">
                  <ul style="padding-left: 20px;">
                    <li>Dãy số $(u_n)$ được gọi là <b>dãy số tăng</b> nếu ta có:
                      <div class="text-center my-1"><span class="badge bg-primary fs-6 px-3 py-1">$u_{n+1} > u_n \\quad (\\forall n \\in \\mathbb{N}^*)$</span></div>
                    </li>
                    <li>Dãy số $(u_n)$ được gọi là <b>dãy số giảm</b> nếu ta có:
                      <div class="text-center my-1"><span class="badge bg-danger fs-6 px-3 py-1">$u_{n+1} < u_n \\quad (\\forall n \\in \\mathbb{N}^*)$</span></div>
                    </li>
                  </ul>
                  <hr style="margin: 10px 0;">
                  <p class="mb-1"><b>Hai phương pháp xét tính tăng, giảm thường dùng:</b></p>
                  <ol style="padding-left: 20px;" class="mb-0">
                    <li><b>Phương pháp 1 (Xét hiệu số):</b> Tính $D = u_{n+1} - u_n$.
                      <ul>
                        <li>Nếu $u_{n+1} - u_n > 0, \\forall n \\in \\mathbb{N}^* \\implies (u_n)$ là <b>dãy tăng</b>.</li>
                        <li>Nếu $u_{n+1} - u_n < 0, \\forall n \\in \\mathbb{N}^* \\implies (u_n)$ là <b>dãy giảm</b>.</li>
                      </ul>
                    </li>
                    <li><b>Phương pháp 2 (Xét tỉ số - Dùng khi $u_n > 0$ với mọi $n$):</b> So sánh tỉ số $\\dfrac{u_{n+1}}{u_n}$ với số 1.
                      <ul>
                        <li>Nếu $\\dfrac{u_{n+1}}{u_n} > 1 \\implies (u_n)$ là <b>dãy tăng</b>.</li>
                        <li>Nếu $\\dfrac{u_{n+1}}{u_n} < 1 \\implies (u_n)$ là <b>dãy giảm</b>.</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>

              <!-- ĐỒ HỌA SVG MINH HỌA DÃY SỐ TĂNG VÀ DÃY SỐ GIẢM -->
              <div class="text-center my-3">
                <svg viewBox="0 0 760 220" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <marker id="arr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
  </defs>

  <!-- BẢNG TRÁI: DÃY SỐ TĂNG -->
  <g transform="translate(10, 0)">
    <rect x="20" y="15" width="340" height="190" rx="10" fill="#f8fafc" stroke="#bfdbfe" stroke-width="1.5"/>
    <text x="190" y="38" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">DÃY SỐ TĂNG: uₙ₊₁ &gt; uₙ (∀n ∈ ℕ*)</text>
    
    <!-- Trục tọa độ -->
    <line x1="50" y1="175" x2="330" y2="175" stroke="#64748b" stroke-width="1.8" marker-end="url(#arr2)"/>
    <line x1="70" y1="185" x2="70" y2="55" stroke="#64748b" stroke-width="1.8" marker-end="url(#arr2)"/>
    <text x="325" y="192" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">n</text>
    <text x="55" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">uₙ</text>

    <!-- Các điểm chấm tăng dần u1, u2, u3, u4, u5 -->
    <circle cx="105" cy="150" r="4.5" fill="#2563eb"/><text x="105" y="140" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2563eb" text-anchor="middle">u₁</text>
    <circle cx="150" cy="130" r="4.5" fill="#2563eb"/><text x="150" y="120" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2563eb" text-anchor="middle">u₂</text>
    <circle cx="195" cy="105" r="4.5" fill="#2563eb"/><text x="195" y="95" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2563eb" text-anchor="middle">u₃</text>
    <circle cx="240" cy="80" r="4.5" fill="#2563eb"/><text x="240" y="70" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2563eb" text-anchor="middle">u₄</text>
    <circle cx="285" cy="55" r="5" fill="#2563eb"/><text x="285" y="45" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2563eb" text-anchor="middle">u₅</text>

    <!-- Đường nét đứt nối các điểm -->
    <path d="M 105 150 L 150 130 L 195 105 L 240 80 L 285 55" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="190" y="198" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">uₙ₊₁ - uₙ &gt; 0 (Đồ thị đi lên theo n)</text>
  </g>

  <!-- BẢNG PHẢI: DÃY SỐ GIẢM -->
  <g transform="translate(390, 0)">
    <rect x="20" y="15" width="340" height="190" rx="10" fill="#f8fafc" stroke="#fecaca" stroke-width="1.5"/>
    <text x="190" y="38" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">DÃY SỐ GIẢM: uₙ₊₁ &lt; uₙ (∀n ∈ ℕ*)</text>
    
    <!-- Trục tọa độ -->
    <line x1="50" y1="175" x2="330" y2="175" stroke="#64748b" stroke-width="1.8" marker-end="url(#arr2)"/>
    <line x1="70" y1="185" x2="70" y2="55" stroke="#64748b" stroke-width="1.8" marker-end="url(#arr2)"/>
    <text x="325" y="192" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">n</text>
    <text x="55" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">uₙ</text>

    <!-- Các điểm chấm giảm dần u1, u2, u3, u4, u5 -->
    <circle cx="105" cy="65" r="5" fill="#dc2626"/><text x="105" y="55" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#dc2626" text-anchor="middle">u₁</text>
    <circle cx="150" cy="90" r="4.5" fill="#dc2626"/><text x="150" y="80" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#dc2626" text-anchor="middle">u₂</text>
    <circle cx="195" cy="115" r="4.5" fill="#dc2626"/><text x="195" y="105" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#dc2626" text-anchor="middle">u₃</text>
    <circle cx="240" cy="135" r="4.5" fill="#dc2626"/><text x="240" y="125" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#dc2626" text-anchor="middle">u₄</text>
    <circle cx="285" cy="150" r="4.5" fill="#dc2626"/><text x="285" y="140" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#dc2626" text-anchor="middle">u₅</text>

    <!-- Đường nét đứt nối các điểm -->
    <path d="M 105 65 L 150 90 L 195 115 L 240 135 L 285 150" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="190" y="198" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">uₙ₊₁ - uₙ &lt; 0 (Đồ thị đi xuống theo n)</text>
  </g>
</svg>
              </div>
            </div>`,
          "audioUrl": "assets/audio/b11_5_sec3a.mp3",
          "audioScript": "Mục 3. Dãy số tăng, dãy số giảm và dãy số bị chặn. Tiểu mục a: Dãy số tăng và dãy số giảm. Dãy số u n được gọi là dãy số tăng nếu số hạng sau luôn lớn hơn số hạng trước, tức là u n cộng 1 lớn hơn u n với mọi n thuộc tập số nguyên dương N sao. Ngược lại, nếu u n cộng 1 nhỏ hơn u n với mọi n, thì dãy số được gọi là dãy số giảm. Để xét tính tăng giảm, phương pháp phổ biến nhất là tính hiệu số u n cộng 1 trừ u n. Nếu hiệu này luôn dương thì dãy tăng, nếu luôn âm thì dãy giảm.",
          "pois": [
            {
              "time": 0.35,
              "question": "Nếu uₙ₊₁ - uₙ > 0 với mọi n ∈ ℕ* thì kết luận nào sau đây là đúng?",
              "options": [
                "(un) là dãy số tăng",
                "(un) là dãy số giảm",
                "(un) là dãy số không đổi",
                "(un) là dãy số bị chặn trên"
              ],
              "correctIndex": 0,
              "explanation": "Hiệu uₙ₊₁ - uₙ > 0 tương đương với uₙ₊₁ > uₙ với mọi n, theo định nghĩa đây là dãy số tăng."
            },
            {
              "time": 0.70,
              "question": "Dãy số un = (-1)ⁿ có phải là dãy số tăng hoặc dãy số giảm không?",
              "options": [
                "Không tăng cũng không giảm (dãy số đan dấu)",
                "Là dãy số tăng",
                "Là dãy số giảm",
                "Vừa tăng vừa giảm"
              ],
              "correctIndex": 0,
              "explanation": "Dãy có các số hạng: -1, 1, -1, 1... Giá trị luân phiên tăng rồi giảm nên không phải dãy tăng và cũng không phải dãy giảm."
            }
          ],
          "workedExample": {
            "title": "Ví dụ mẫu 5: Xét tính tăng, giảm của dãy số bậc nhất (SGK trang 45 - Ví dụ 7)",
            "problem": "Xét tính tăng, giảm của dãy số $(u_n)$ với $u_n = -2n + 5$.",
            "solution": `<p><b>Lời giải chi tiết:</b></p>
              <ul>
                <li>Ta có: $u_n = -2n + 5$.</li>
                <li>Thay $n$ bởi $n + 1$, ta được:
                  $$u_{n+1} = -2(n + 1) + 5 = -2n - 2 + 5 = -2n + 3.$$
                </li>
                <li>Xét hiệu giữa hai số hạng liên tiếp:
                  $$u_{n+1} - u_n = (-2n + 3) - (-2n + 5) = -2n + 3 + 2n - 5 = -2.$$
                </li>
                <li>Vì $-2 < 0$ với mọi $n \\in \\mathbb{N}^*$, suy ra $u_{n+1} < u_n$ với mọi $n \\in \\mathbb{N}^*$.</li>
              </ul>
              <div class="alert alert-success mt-2 mb-0">
                <i class="fa-solid fa-check-circle"></i> <b>Kết luận:</b> Dãy số $(u_n)$ là <b>dãy số giảm</b>.
              </div>`
          },
          "practiceProblem": {
            "title": "Luyện tập tương tự 3: Xét tính tăng, giảm của dãy phân thức (SGK trang 45)",
            "problem": "Xét tính tăng, giảm của dãy số $(u_n)$ với $u_n = \\dfrac{1}{n + 1}$.",
            "hint": "Tính u_{n+1} = 1/(n+2), sau đó lập hiệu u_{n+1} - u_n và quy đồng mẫu số.",
            "solution": `<p><b>Hướng dẫn giải Thầy Sáng:</b></p>
              <ul>
                <li>Ta có: $u_{n+1} = \\dfrac{1}{(n + 1) + 1} = \\dfrac{1}{n + 2}$.</li>
                <li>Xét hiệu:
                  $$u_{n+1} - u_n = \\dfrac{1}{n + 2} - \\dfrac{1}{n + 1} = \\dfrac{(n + 1) - (n + 2)}{(n + 2)(n + 1)} = \\dfrac{-1}{(n + 1)(n + 2)}.$$
                </li>
                <li>Vì với mọi $n \\in \\mathbb{N}^*$ thì $(n+1)(n+2) > 0$, do đó:
                  $$\\dfrac{-1}{(n + 1)(n + 2)} < 0 \\implies u_{n+1} < u_n, \\quad \\forall n \\in \\mathbb{N}^*.$$
                </li>
              </ul>
              <p><b>Kết luận:</b> Dãy số $(u_n)$ là <b>dãy số giảm</b>.</p>`
          }
        },

        // --- 3b. DÃY SỐ BỊ CHẶN ---
        {
          "key": "b",
          "title": "Dãy số bị chặn",
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
              <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-arrows-to-line"></i> HĐ 5 (SGK trang 45): Nhận biết tính bị chặn</h5>
              <p style="color: #334155; line-height: 1.6;">
                Cho dãy số $(u_n)$ với $u_n = \\dfrac{n + 1}{n} = 1 + \\dfrac{1}{n}, \\forall n \\in \\mathbb{N}^*$.<br>
                a) Vì $\\dfrac{1}{n} > 0$ nên $u_n = 1 + \\dfrac{1}{n} > 1, \\forall n \\in \\mathbb{N}^*$ (chặn dưới bởi 1).<br>
                b) Vì $n \\ge 1 \\implies \\dfrac{1}{n} \\le 1 \\implies u_n = 1 + \\dfrac{1}{n} \\le 1 + 1 = 2, \\forall n \\in \\mathbb{N}^*$ (chặn trên bởi 2).<br>
                Do đó: $1 < u_n \\le 2, \\forall n \\in \\mathbb{N}^*$ $\\implies (u_n)$ bị kẹp trong một dải giá trị hữu hạn!
              </p>

              <!-- CARD ĐỊNH NGHĨA DÃY SỐ BỊ CHẶN -->
              <div class="math-func-card card-cot mb-3">
                <div class="math-func-title"><i class="fa-solid fa-shield-halved"></i> ĐỊNH NGHĨA DÃY SỐ BỊ CHẶN (SGK TRANG 45)</div>
                <div style="background: #ffffff; border-radius: 8px; padding: 14px 16px; border: 1px solid #cbd5e1; font-size: 0.98rem; color: #1e293b; line-height: 1.7;">
                  <ul class="mb-0" style="padding-left: 20px;">
                    <li>Dãy số $(u_n)$ được gọi là <b>bị chặn trên</b> nếu tồn tại một số thực $M$ sao cho:
                      <div class="text-center my-1"><span class="badge bg-danger fs-6 px-3 py-1">$u_n \\le M, \\quad \\forall n \\in \\mathbb{N}^*$</span></div>
                    </li>
                    <li>Dãy số $(u_n)$ được gọi là <b>bị chặn dưới</b> nếu tồn tại một số thực $m$ sao cho:
                      <div class="text-center my-1"><span class="badge bg-primary fs-6 px-3 py-1">$u_n \\ge m, \\quad \\forall n \\in \\mathbb{N}^*$</span></div>
                    </li>
                    <li>Dãy số $(u_n)$ được gọi là <b>bị chặn</b> nếu nó <b>vừa bị chặn trên vừa bị chặn dưới</b>, nghĩa là tồn tại các số thực $m, M$ sao cho:
                      <div class="text-center my-1"><span class="badge bg-success fs-6 px-3 py-1">$m \\le u_n \\le M, \\quad \\forall n \\in \\mathbb{N}^*$</span></div>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- ĐỒ HỌA SVG MINH HỌA DẢI SỐ BỊ CHẶN -->
              <div class="text-center my-3">
                <svg viewBox="0 0 760 210" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <linearGradient id="bandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#10b981" stop-opacity="0.04"/>
    </linearGradient>
    <marker id="arr3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
  </defs>

  <!-- Dải bị chặn kẹp giữa m và M -->
  <rect x="100" y="60" width="580" height="90" fill="url(#bandGrad)"/>

  <!-- Đường biên trên M (Chặn trên) -->
  <line x1="100" y1="60" x2="710" y2="60" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="42" y="65" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">y = M</text>
  <text x="715" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">Chặn trên (uₙ ≤ M)</text>

  <!-- Đường biên dưới m (Chặn dưới) -->
  <line x1="100" y1="150" x2="710" y2="150" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="42" y="155" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2563eb">y = m</text>
  <text x="715" y="155" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb">Chặn dưới (uₙ ≥ m)</text>

  <!-- Trục toạ độ Ox, Oy -->
  <line x1="70" y1="180" x2="710" y2="180" stroke="#334155" stroke-width="2" marker-end="url(#arr3)"/>
  <line x1="100" y1="195" x2="100" y2="30" stroke="#334155" stroke-width="2" marker-end="url(#arr3)"/>
  <text x="705" y="198" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155">n</text>
  <text x="80" y="32" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155">uₙ</text>

  <!-- Các điểm số hạng dao động kẹp giữa m và M -->
  <!-- Ví dụ dãy u_n = (n-1)/n = 1 - 1/n kẹp giữa [0, 1) -->
  <circle cx="150" cy="150" r="5" fill="#059669"/><text x="150" y="140" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">u₁ = 0</text>
  <circle cx="220" cy="105" r="4.5" fill="#059669"/><text x="220" y="95" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">u₂ = 1/2</text>
  <circle cx="290" cy="90" r="4.5" fill="#059669"/><text x="290" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">u₃ = 2/3</text>
  <circle cx="360" cy="82" r="4" fill="#059669"/><text x="360" y="73" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">u₄ = 3/4</text>
  <circle cx="430" cy="78" r="4" fill="#059669"/><text x="430" y="69" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">u₅ = 4/5</text>
  <circle cx="500" cy="75" r="3.5" fill="#059669"/>
  <circle cx="570" cy="72" r="3.5" fill="#059669"/>
  <circle cx="640" cy="70" r="3.5" fill="#059669"/><text x="640" y="61" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">uₙ → 1</text>

  <!-- Hộp chú thích -->
  <rect x="250" y="16" width="320" height="28" rx="6" fill="#ecfdf5" stroke="#10b981"/>
  <text x="410" y="35" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">DÃY BỊ CHẶN: ∃ m, M sao cho m ≤ uₙ ≤ M, ∀n ∈ ℕ*</text>
</svg>
              </div>
            </div>`,
          "audioUrl": "assets/audio/b11_5_sec3b.mp3",
          "audioScript": "Tiểu mục b: Dãy số bị chặn. Dãy số u n được gọi là bị chặn trên nếu tồn tại một số M sao cho mọi số hạng u n đều không vượt quá M. Dãy số được gọi là bị chặn dưới nếu tồn tại số m sao cho mọi số hạng u n đều lớn hơn hoặc bằng m. Khi một dãy số vừa bị chặn trên vừa bị chặn dưới, tức là mọi số hạng đều nằm gọn trong đoạn từ m đến M, thì ta nói dãy số đó là dãy số bị chặn.",
          "pois": [
            {
              "time": 0.35,
              "question": "Dãy số (un) thỏa mãn 0 ≤ un ≤ 1 với mọi n ∈ ℕ* được gọi là dãy số gì?",
              "options": [
                "Dãy số bị chặn",
                "Chỉ là dãy số bị chặn trên",
                "Chỉ là dãy số bị chặn dưới",
                "Dãy số không bị chặn"
              ],
              "correctIndex": 0,
              "explanation": "Vì dãy vừa có cận dưới m = 0 vừa có cận trên M = 1 nên (un) là dãy số bị chặn."
            },
            {
              "time": 0.70,
              "question": "Dãy số un = 2n - 1 có bị chặn trên không?",
              "options": [
                "Không bị chặn trên (tiến ra dương vô cực)",
                "Bị chặn trên bởi 1",
                "Bị chặn trên bởi 2",
                "Bị chặn trên bởi 0"
              ],
              "correctIndex": 0,
              "explanation": "Khi n tăng lớn tùy ý, 2n - 1 tăng vô hạn, không có số thực M cố định nào lớn hơn hoặc bằng mọi số hạng của dãy."
            }
          ],
          "workedExample": {
            "title": "Ví dụ mẫu 6: Xét tính bị chặn của dãy phân thức (SGK trang 45 - Ví dụ 8)",
            "problem": "Xét tính bị chặn của dãy số $(u_n)$ với $u_n = \\dfrac{n - 1}{n}$.",
            "solution": `<p><b>Lời giải chi tiết:</b></p>
              <ul>
                <li>Biến đổi biểu thức số hạng tổng quát:
                  $$u_n = \\dfrac{n - 1}{n} = 1 - \\dfrac{1}{n}.$$
                </li>
                <li><b>Xét chặn trên:</b> Vì $n \\in \\mathbb{N}^* \\implies \\dfrac{1}{n} > 0$, do đó:
                  $$u_n = 1 - \\dfrac{1}{n} < 1, \\quad \\forall n \\in \\mathbb{N}^*.$$
                  Vậy dãy số $(u_n)$ bị chặn trên bởi $M = 1$.
                </li>
                <li><b>Xét chặn dưới:</b> Vì $n \\ge 1 \\implies n - 1 \\ge 0$, do đó:
                  $$u_n = \\dfrac{n - 1}{n} \\ge 0, \\quad \\forall n \\in \\mathbb{N}^*.$$
                  Vậy dãy số $(u_n)$ bị chặn dưới bởi $m = 0$.
                </li>
                <li>Kết hợp hai điều trên: $0 \\le u_n < 1$ với mọi $n \\in \\mathbb{N}^*$.</li>
              </ul>
              <div class="alert alert-success mt-2 mb-0">
                <i class="fa-solid fa-check-circle"></i> <b>Kết luận:</b> Dãy số $(u_n)$ là <b>dãy số bị chặn</b>.
              </div>`
          },
          "practiceProblem": {
            "title": "Luyện tập tương tự 4 & Vận dụng thực tiễn (SGK trang 46)",
            "problem": "<b>1) Luyện tập 4:</b> Xét tính bị chặn của dãy số $(u_n)$ với $u_n = 2n - 1$.<br><b>2) Bài toán thực tế (Vận dụng):</b> Anh Thanh vừa được tuyển dụng vào công ty công nghệ với cam kết lương năm đầu $s_1 = 200$ triệu đồng, và lương mỗi năm tiếp theo tăng thêm 25 triệu: $s_n = s_{n-1} + 25 \\, (n \\ge 2)$. Tính lương của anh Thanh vào năm thứ 5 và chứng minh $(s_n)$ là dãy số tăng.",
            "hint": "1) Với n >= 1 thì 2n - 1 >= 1 (chặn dưới). Khi n tiến ra vô cùng, 2n - 1 không bị chặn trên. 2) Tính s₅ = s₁ + 4 · 25.",
            "solution": `<p><b>Hướng dẫn giải Thầy Sáng:</b></p>
              <p><b>1) Xét dãy $u_n = 2n - 1$:</b></p>
              <ul>
                <li>Với mọi $n \\in \\mathbb{N}^* \\implies n \\ge 1 \\implies 2n - 1 \\ge 2(1) - 1 = 1$. Vậy $(u_n)$ bị chặn dưới bởi 1.</li>
                <li>Với số thực $M$ dương bất kì, ta luôn có thể chọn số nguyên dương $n > \\dfrac{M + 1}{2}$ để $u_n = 2n - 1 > M$. Vậy $(u_n)$ <b>không bị chặn trên</b>.</li>
                <li>Kết luận: Dãy số $(u_n)$ <b>chỉ bị chặn dưới</b>, không phải là dãy bị chặn.</li>
              </ul>
              <p><b>2) Bài toán lương anh Thanh:</b></p>
              <ul>
                <li>Lương năm thứ 5 là:
                  $$s_5 = s_1 + 4 \\times 25 = 200 + 100 = 300 \\text{ (triệu đồng/năm)}.$$
                </li>
                <li>Xét hiệu: $s_n - s_{n-1} = 25 > 0$ với mọi $n \\ge 2$. Suy ra $(s_n)$ là <b>dãy số tăng</b>.</li>
                <li><i>Ý nghĩa thực tế:</i> Mức thu nhập tăng đều đặn qua các năm ghi nhận sự cống hiến và kinh nghiệm làm việc tích lũy của người lao động.</li>
              </ul>`
          }
        }
      ]
    }
  ],

  // -------------------------------------------------------------------------
  // CHỐT KIẾN THỨC THEN CHỐT (WRAP-UP)
  // -------------------------------------------------------------------------
  "wrapUp": {
    "title": "Chốt kiến thức then chốt Bài 5: Dãy số",
    "contentHtml": `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
        <h5 class="fw-bold section-heading-red mb-3"><i class="fa-solid fa-graduation-cap"></i> HỆ THỐNG HOÁ TOÀN DIỆN BÀI 5: DÃY SỐ</h5>

        <!-- BẢNG TỔNG KẾT QUY TẮC CỐT LÕI -->
        <div class="math-table-container mb-3">
          <table class="math-table table-bordered">
            <thead class="table-primary">
              <tr>
                <th style="width: 25%;">Nội dung trọng tâm</th>
                <th style="width: 50%;">Công thức & Định nghĩa then chốt</th>
                <th style="width: 25%;">Lưu ý của Thầy Sáng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold text-primary">Dãy số vô hạn & hữu hạn</td>
                <td>
                  • Vô hạn: $u: \\mathbb{N}^* \\to \\mathbb{R}$, khai triển $u_1, u_2, \\dots, u_n, \\dots$<br>
                  • Hữu hạn: $u: \\{1, 2, \\dots, m\\} \\to \\mathbb{R}$, khai triển $u_1, u_2, \\dots, u_m$
                </td>
                <td>$u_1$ là số hạng đầu, $u_n$ là số hạng tổng quát, $u_m$ là số hạng cuối.</td>
              </tr>
              <tr>
                <td class="fw-bold text-success">4 Cách xác định dãy số</td>
                <td>
                  1. Liệt kê số hạng (dãy hữu hạn ít phần tử)<br>
                  2. Công thức số hạng tổng quát: $u_n = f(n)$<br>
                  3. Phương pháp mô tả tính chất<br>
                  4. Hệ thức truy hồi (VD: Dãy Fibonacci $F_n = F_{n-1} + F_{n-2}$)
                </td>
                <td>Dãy truy hồi muốn tìm $u_n$ trực tiếp thường cần giải phương trình đặc trưng hoặc dự đoán quy nạp.</td>
              </tr>
              <tr>
                <td class="fw-bold text-warning">Dãy số tăng / giảm</td>
                <td>
                  • Dãy tăng: $u_{n+1} > u_n, \\, \\forall n \\in \\mathbb{N}^* \\iff u_{n+1} - u_n > 0$<br>
                  • Dãy giảm: $u_{n+1} < u_n, \\, \\forall n \\in \\mathbb{N}^* \\iff u_{n+1} - u_n < 0$<br>
                  • Khi $u_n > 0$: Dãy tăng khi $\\dfrac{u_{n+1}}{u_n} > 1$; giảm khi $\\dfrac{u_{n+1}}{u_n} < 1$.
                </td>
                <td>Dãy đan dấu như $(-1)^n$ hoặc dao động không phải là dãy tăng, cũng không phải dãy giảm.</td>
              </tr>
              <tr>
                <td class="fw-bold text-danger">Dãy số bị chặn</td>
                <td>
                  • Bị chặn trên: $u_n \\le M, \\, \\forall n \\in \\mathbb{N}^*$<br>
                  • Bị chặn dưới: $u_n \\ge m, \\, \\forall n \\in \\mathbb{N}^*$<br>
                  • Bị chặn: $m \\le u_n \\le M, \\, \\forall n \\in \\mathbb{N}^*$
                </td>
                <td>Mọi dãy số tăng và bị chặn trên thì luôn có giới hạn (Định lý Weierstrass sau này).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- KHỐI ỨNG DỤNG THỰC TIỄN RỰC RỠ -->
        <div class="alert alert-info mb-0">
          <h6 class="fw-bold"><i class="fa-solid fa-earth-americas"></i> ỨNG DỤNG THỰC TẾ & KHOA HỌC:</h6>
          <p class="mb-1">• <b>Kinh tế & Tài chính:</b> Mô hình tính tiền gửi tiết kiệm lãi kép ngân hàng: $A_n = A_0(1 + r)^n$ chính là dãy số tăng theo cấp số mũ.</p>
          <p class="mb-1">• <b>Tự nhiên & Kiến trúc:</b> Tỉ số hai số hạng liên tiếp của dãy Fibonacci $\\dfrac{F_{n+1}}{F_n}$ tiến dần tới <b>Tỉ lệ vàng $\\Phi \\approx 1{,}618$</b>, xuất hiện trong vòng xoắn ốc của hoa hướng dương, thiên hà và tỉ lệ vàng của các công trình kiến trúc kì quan.</p>
          <p class="mb-0">• <b>Tin học:</b> Giải thuật đệ quy (Recursive Algorithms) trong khoa học máy tính như thuật toán Tháp Hà Nội, sắp xếp trộn Merge-Sort đều dựa trên hệ thức truy hồi của dãy số.</p>
        </div>
      </div>`,
    "audioUrl": "assets/audio/b11_5_wrapup.mp3",
    "audioScript": "Chốt kiến thức then chốt Bài 5: Dãy số. Thầy chúc mừng các em đã xuất sắc hoàn thành toàn bộ nội dung bài học hôm nay! Chúng ta đã nắm chắc định nghĩa dãy số vô hạn, dãy số hữu hạn; làm chủ bốn cách cho dãy số gồm liệt kê, công thức số hạng tổng quát, phương pháp mô tả và hệ thức truy hồi. Các em hãy luôn nhớ kĩ hai phương pháp vàng để xét tính tăng giảm là lập hiệu số hoặc tỉ số; cùng phương pháp đánh giá tính bị chặn trên, bị chặn dưới. Dãy số chính là cánh cửa dẫn các em bước vào hai quy luật kinh điển tiếp theo là Cấp số cộng và Cấp số nhân. Bây giờ, các em hãy cùng Thầy bước vào Phần 4 để tự tin chinh phục bộ câu hỏi trắc nghiệm theo chuẩn cấu trúc mới nhé!"
  },

  // -------------------------------------------------------------------------
  // PHẦN IV: BÀI TẬP TRẮC NGHIỆM CỦNG CỐ (CHUẨN ĐỀ THI 2026 CỦA BỘ GD&ĐT)
  // -------------------------------------------------------------------------
  "quiz": [
    // =======================================================================
    // DẠNG 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (4 LỰA CHỌN - 1 ĐÁP ÁN ĐÚNG)
    // =======================================================================
    {
      "type": "multiple_choice",
      "question": "<b>Câu 1 (Nhận biết):</b> Cho dãy số $(u_n)$ xác định bởi công thức số hạng tổng quát $u_n = \\dfrac{2n - 1}{n + 1}$. Số hạng thứ 3 của dãy số là:",
      "options": [
        "$u_3 = \\dfrac{5}{4}$",
        "$u_3 = 1$",
        "$u_3 = \\dfrac{3}{4}$",
        "$u_3 = \\dfrac{7}{4}$"
      ],
      "correct": 0,
      "hint": "Thay n = 3 trực tiếp vào công thức u_n = (2n - 1) / (n + 1).",
      "explain": "Thay n = 3 vào công thức số hạng tổng quát, ta được: u₃ = (2·3 - 1) / (3 + 1) = (6 - 1) / 4 = 5/4. Do đó phương án đúng là A."
    },
    {
      "type": "multiple_choice",
      "question": "<b>Câu 2 (Nhận biết):</b> Trong các dãy số sau đây, dãy số nào là một <b>dãy số tăng</b>?",
      "options": [
        "$u_n = \\dfrac{1}{n}$",
        "$u_n = 3n + 1$",
        "$u_n = (-1)^n \\cdot n$",
        "$u_n = -2n + 5$"
      ],
      "correct": 1,
      "hint": "Xét hiệu u_{n+1} - u_n hoặc quan sát chiều biến thiên khi n tăng.",
      "explain": "Xét u_n = 3n + 1: ta có u_{n+1} - u_n = [3(n+1)+1] - (3n+1) = 3 > 0 với mọi n ∈ ℕ*. Do đó u_{n+1} > u_n, vậy đây là dãy số tăng. Các dãy còn lại: 1/n là dãy giảm, -2n+5 là dãy giảm, (-1)ⁿ·n là dãy đan dấu dao động. Phương án đúng là B."
    },
    {
      "type": "multiple_choice",
      "question": "<b>Câu 3 (Thông hiểu):</b> Cho dãy số $(u_n)$ xác định bởi hệ thức truy hồi: $u_1 = 2$ và $u_{n+1} = 2u_n - 1$ với mọi $n \\ge 1$. Số hạng thứ tư $u_4$ của dãy số bằng:",
      "options": [
        "$u_4 = 5$",
        "$u_4 = 7$",
        "$u_4 = 9$",
        "$u_4 = 17$"
      ],
      "correct": 2,
      "hint": "Tính tuần tự u₂ = 2u₁ - 1, sau đó u₃ = 2u₂ - 1, và u₄ = 2u₃ - 1.",
      "explain": "Ta tính tuần tự theo hệ thức truy hồi:<br>• u₁ = 2<br>• u₂ = 2u₁ - 1 = 2(2) - 1 = 3<br>• u₃ = 2u₂ - 1 = 2(3) - 1 = 5<br>• u₄ = 2u₃ - 1 = 2(5) - 1 = 9.<br>Vậy số hạng thứ tư là 9. Phương án đúng là C."
    },
    {
      "type": "multiple_choice",
      "question": "<b>Câu 4 (Thông hiểu):</b> Khẳng định nào sau đây là <b>đúng</b> về tính bị chặn của dãy số $(u_n)$ với $u_n = \\dfrac{2n + 1}{n + 2}$?",
      "options": [
        "Dãy số chỉ bị chặn dưới bởi 1, không bị chặn trên",
        "Dãy số chỉ bị chặn trên bởi 2, không bị chặn dưới",
        "Dãy số không bị chặn trên và không bị chặn dưới",
        "Dãy số bị chặn vì $1 \\le u_n < 2$ với mọi $n \\in \\mathbb{N}^*$"
      ],
      "correct": 3,
      "hint": "Chia đa thức: u_n = (2n + 4 - 3)/(n + 2) = 2 - 3/(n + 2). Đánh giá khi n >= 1.",
      "explain": "Ta biến đổi: u_n = (2n + 1)/(n + 2) = 2 - 3/(n + 2).<br>• Vì n ∈ ℕ* (n ≥ 1) nên n + 2 ≥ 3 > 0 ⇒ 3/(n + 2) > 0 ⇒ u_n = 2 - 3/(n + 2) < 2 (bị chặn trên bởi 2).<br>• Mặt khác, khi n ≥ 1 thì 3/(n + 2) ≤ 3/3 = 1 ⇒ u_n = 2 - 3/(n + 2) ≥ 2 - 1 = 1 (bị chặn dưới bởi 1).<br>Do đó 1 ≤ u_n < 2 với mọi n ∈ ℕ*. Vậy dãy số là dãy bị chặn. Phương án đúng là D."
    },
    {
      "type": "multiple_choice",
      "question": "<b>Câu 5 (Vận dụng):</b> Một người gửi tiết kiệm 100 triệu đồng vào ngân hàng với kì hạn 1 tháng, lãi suất 0,5%/tháng theo hình thức lãi kép (tiền lãi mỗi tháng được cộng dồn vào gốc để tính lãi tháng sau). Số tiền cả gốc lẫn lãi sau $n$ tháng được tính bởi công thức nào sau đây?",
      "options": [
        "$A_n = 100 \\cdot (1 + 0{,}005)^n$ (triệu đồng)",
        "$A_n = 100 \\cdot (1 + 0{,}05)^n$ (triệu đồng)",
        "$A_n = 100 + 0{,}5n$ (triệu đồng)",
        "$A_n = 100 \\cdot (1 + 0{,}005 \\cdot n)$ (triệu đồng)"
      ],
      "correct": 0,
      "hint": "Lãi suất r = 0,5% = 0,005. Công thức lãi kép là An = A₀(1 + r)ⁿ.",
      "explain": "Với hình thức gửi tiết kiệm lãi kép kì hạn 1 tháng và lãi suất r = 0,5% = 0,005 mỗi tháng, sau mỗi tháng số tiền được nhân với hệ số (1 + r) = (1 + 0,005) = 1,005.<br>Sau n tháng, số tiền thu được là A_n = 100 · (1 + 0,005)ⁿ (triệu đồng). Phương án đúng là A."
    },

    // =======================================================================
    // DẠNG 2: TRẮC NGHIỆM ĐÚNG / SAI (MỖI CÂU GỒM 4 Ý A, B, C, D)
    // =======================================================================
    {
      "type": "true_false",
      "question": "<b>Câu 1 (Đúng/Sai):</b> Cho dãy số $(u_n)$ xác định bởi công thức số hạng tổng quát: $u_n = \\dfrac{3n - 1}{n + 1} \\quad (n \\in \\mathbb{N}^*)$.",
      "items": [
        {
          "id": "a",
          "statement": "a) Số hạng đầu tiên của dãy số là $u_1 = 1$.",
          "correct": true,
          "explain": "Thay n = 1 vào công thức: u₁ = (3·1 - 1)/(1 + 1) = 2/2 = 1. Do đó mệnh đề a ĐÚNG."
        },
        {
          "id": "b",
          "statement": "b) Dãy số có thể viết lại dưới dạng: $u_n = 3 - \\dfrac{4}{n + 1}$.",
          "correct": true,
          "explain": "Ta có: (3n - 1)/(n + 1) = [3(n + 1) - 4]/(n + 1) = 3 - 4/(n + 1). Do đó mệnh đề b ĐÚNG."
        },
        {
          "id": "c",
          "statement": "c) $(u_n)$ là một dãy số giảm.",
          "correct": false,
          "explain": "Xét hiệu u_{n+1} - u_n = [3 - 4/(n + 2)] - [3 - 4/(n + 1)] = 4/(n + 1) - 4/(n + 2) = 4/[(n + 1)(n + 2)] > 0 với mọi n ∈ ℕ*. Do đó u_{n+1} > u_n, nghĩa là dãy số TĂNG, không phải dãy giảm. Mệnh đề c SAI."
        },
        {
          "id": "d",
          "statement": "d) Dãy số $(u_n)$ là một dãy số bị chặn, thỏa mãn $1 \\le u_n < 3$ với mọi $n \\in \\mathbb{N}^*$.",
          "correct": true,
          "explain": "Vì n ≥ 1 nên 4/(n + 1) > 0 ⇒ u_n = 3 - 4/(n + 1) < 3. Mặt khác n ≥ 1 ⇒ 4/(n + 1) ≤ 4/2 = 2 ⇒ u_n ≥ 3 - 2 = 1. Vậy 1 ≤ u_n < 3 với mọi n ∈ ℕ*, dãy số bị chặn. Mệnh đề d ĐÚNG."
        }
      ]
    },
    {
      "type": "true_false",
      "question": "<b>Câu 2 (Đúng/Sai):</b> Cho dãy số Fibonacci $(F_n)$ được xác định bởi hệ thức truy hồi:<br>$$F_1 = 1, \\quad F_2 = 1, \\quad F_n = F_{n-1} + F_{n-2} \\quad (n \\ge 3).$$",
      "items": [
        {
          "id": "a",
          "statement": "a) Số hạng thứ 5 của dãy Fibonacci là $F_5 = 5$.",
          "correct": true,
          "explain": "Ta tính: F₁ = 1, F₂ = 1, F₃ = 2, F₄ = 3, F₅ = 2 + 3 = 5. Mệnh đề a ĐÚNG."
        },
        {
          "id": "b",
          "statement": "b) Số hạng thứ 6 của dãy Fibonacci là $F_6 = 8$.",
          "correct": true,
          "explain": "Ta có: F₆ = F₅ + F₄ = 5 + 3 = 8. Mệnh đề b ĐÚNG."
        },
        {
          "id": "c",
          "statement": "c) Dãy số Fibonacci $(F_n)$ là một dãy số giảm.",
          "correct": false,
          "explain": "Các số hạng: 1, 1, 2, 3, 5, 8... Từ n ≥ 2, các số hạng tăng nghiêm ngặt (F_{n+1} > F_n), không phải dãy giảm. Mệnh đề c SAI."
        },
        {
          "id": "d",
          "statement": "d) Dãy số Fibonacci $(F_n)$ không bị chặn trên.",
          "correct": true,
          "explain": "Vì F_n tăng không giới hạn khi n tiến ra vô cùng (F_n → +∞), nên dãy không bị chặn trên. Mệnh đề d ĐÚNG."
        }
      ]
    },
    {
      "type": "true_false",
      "question": "<b>Câu 3 (Đúng/Sai):</b> Một doanh nghiệp dự kiến doanh thu tháng đầu tiên là $S_1 = 500$ triệu đồng. Do mở rộng thị trường, doanh thu các tháng tiếp theo tăng đều đặn 30 triệu đồng mỗi tháng, tức là $S_n = S_{n-1} + 30 \\quad (n \\ge 2)$.",
      "items": [
        {
          "id": "a",
          "statement": "a) Doanh thu của tháng thứ 2 đạt 530 triệu đồng.",
          "correct": true,
          "explain": "S₂ = S₁ + 30 = 500 + 30 = 530 triệu đồng. Mệnh đề a ĐÚNG."
        },
        {
          "id": "b",
          "statement": "b) Công thức số hạng tổng quát theo tháng n là $S_n = 500 + 30(n - 1)$ (triệu đồng).",
          "correct": true,
          "explain": "Mỗi tháng tăng 30 triệu so với tháng 1, sau n - 1 lần tăng thì S_n = S₁ + (n - 1)·30 = 500 + 30(n - 1). Mệnh đề b ĐÚNG."
        },
        {
          "id": "c",
          "statement": "c) Dãy số doanh thu $(S_n)$ là một dãy số giảm theo thời gian.",
          "correct": false,
          "explain": "Vì S_n - S_{n-1} = 30 > 0 với mọi n ≥ 2 nên dãy số (S_n) là dãy số TĂNG. Mệnh đề c SAI."
        },
        {
          "id": "d",
          "statement": "d) Doanh thu của doanh nghiệp ở tháng thứ 12 (kết thúc năm thứ nhất) vượt quá 800 triệu đồng.",
          "correct": true,
          "explain": "Thay n = 12 vào công thức: S₁₂ = 500 + 30(12 - 1) = 500 + 30·11 = 500 + 330 = 830 triệu đồng > 800 triệu đồng. Mệnh đề d ĐÚNG."
        }
      ]
    },

    // =======================================================================
    // DẠNG 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (KẾT QUẢ ĐIỀN SỐ / ĐIỀN CHỮ)
    // =======================================================================
    {
      "type": "short_answer",
      "question": "<b>Câu 1 (Vận dụng):</b> Cho dãy số $(u_n)$ xác định bởi $u_1 = 3$ và $u_{n+1} = u_n + 4$ với mọi $n \\ge 1$. Hãy tìm giá trị của số hạng thứ 25 ($u_{25}$).",
      "acceptableAnswers": ["99"],
      "correctAnswer": "99",
      "unit": "",
      "hint": "Nhận xét đây là cấp số cộng có số hạng đầu u₁ = 3 và công sai d = 4. Công thức un = u₁ + (n - 1)d.",
      "explain": "Dãy số có số hạng đầu u₁ = 3 và mỗi số hạng sau hơn số hạng trước 4 đơn vị: u_{n+1} - u_n = 4.<br>Do đó công thức số hạng tổng quát là: u_n = u₁ + (n - 1)·4 = 3 + 4(n - 1) = 4n - 1.<br>Với n = 25, ta có: u₂₅ = 4·25 - 1 = 100 - 1 = 99.<br><b>Đáp số: 99</b>."
    },
    {
      "type": "short_answer",
      "question": "<b>Câu 2 (Vận dụng thực tế):</b> Theo mô hình dự báo tăng trưởng dân số ở tình huống mở đầu $P_n = 500 \\cdot (1{,}02)^n$ (nghìn người), hãy tính số dân của thành phố sau 10 năm (năm 2030). Kết quả làm tròn đến hàng đơn vị theo đơn vị nghìn người.",
      "acceptableAnswers": ["609", "609 nghìn người", "609 nghìn"],
      "correctAnswer": "609",
      "unit": "nghìn người",
      "hint": "Tính P₁₀ = 500 · (1,02)¹⁰ và làm tròn đến số nguyên gần nhất.",
      "explain": "Thay n = 10 vào công thức: P₁₀ = 500 · (1,02)¹⁰.<br>Sử dụng máy tính cầm tay: (1,02)¹⁰ ≈ 1,2189944.<br>Do đó: P₁₀ ≈ 500 · 1,2189944 ≈ 609,497 nghìn người.<br>Làm tròn đến hàng đơn vị, ta được <b>609</b> nghìn người."
    },
    {
      "type": "short_answer",
      "question": "<b>Câu 3 (Vận dụng cao):</b> Cho dãy số $(u_n)$ xác định bởi công thức: $u_n = \\dfrac{n^2 + 2n}{n + 1} \\quad (n \\in \\mathbb{N}^*)$. Tìm giá trị nguyên lớn nhất của số thực $m$ sao cho $u_n \\ge m$ với mọi $n \\in \\mathbb{N}^*$.",
      "acceptableAnswers": ["1", "m = 1"],
      "correctAnswer": "1",
      "unit": "",
      "hint": "Phân tích tử thức: n² + 2n = (n + 1)² - 1. Đánh giá u_n theo n >= 1.",
      "explain": "Ta biến đổi số hạng tổng quát:<br>u_n = (n² + 2n)/(n + 1) = [n(n + 1) + n]/(n + 1) = n + n/(n + 1) = (n + 1) - 1/(n + 1).<br>Vì n ∈ ℕ* (tức n ≥ 1) nên:<br>• Với n = 1: u₁ = (1² + 2·1)/(1 + 1) = 3/2 = 1,5.<br>• Khi n ≥ 2: u_n = n + n/(n + 1) > n ≥ 2 > 1,5.<br>Do đó giá trị nhỏ nhất của dãy số là u₁ = 1,5.<br>Để u_n ≥ m với mọi n ∈ ℕ* thì điều kiện là m ≤ 1,5.<br>Vì m là số nguyên nên giá trị nguyên lớn nhất của m là <b>1</b>."
    }
  ]
};

// Cung cấp thêm realworldWrapup và examFormatPractice tương thích hoàn hảo với bộ renderer 5 sao
window.LESSON_11_C2_B5_DATA.realworldWrapup = {
  title: "Chốt kiến thức then chốt & Hệ thống hóa Bài 5: Dãy số",
  audioUrl: "assets/audio/b11_5_wrapup.mp3",
  audioScript: window.LESSON_11_C2_B5_DATA.wrapUp.audioScript,
  recap: "Hệ thống hóa toàn diện định nghĩa dãy số vô hạn, hữu hạn, 4 cách xác định dãy số, phương pháp khảo sát tính tăng giảm và tính bị chặn cùng các ứng dụng thực tế phong phú.",
  summaryHtml: window.LESSON_11_C2_B5_DATA.wrapUp.contentHtml,
  solutionHtml: window.LESSON_11_C2_B5_DATA.wrapUp.contentHtml,
  solution: window.LESSON_11_C2_B5_DATA.wrapUp.contentHtml
};

window.LESSON_11_C2_B5_DATA.examFormatPractice = {
  title: "PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2026 BỘ GD&ĐT)",
  durationMinutes: 20,
  totalPoints: 10,
  part1MultipleChoice: window.LESSON_11_C2_B5_DATA.quiz.filter(q => q.type === "multiple_choice" || !q.type).map((q, idx) => ({
    id: "mc-11-5-" + (idx + 1),
    num: idx + 1,
    question: q.question,
    prompt: q.question,
    options: q.options,
    correctIndex: q.correct,
    correctAnswer: String.fromCharCode(65 + q.correct),
    hint: q.hint,
    explain: q.explain,
    solution: q.explain
  })),
  part2TrueFalse: window.LESSON_11_C2_B5_DATA.quiz.filter(q => q.type === "true_false").map((q, idx) => ({
    id: "tf-11-5-" + (idx + 1),
    num: idx + 1,
    prompt: q.question,
    intro: q.question,
    items: q.items.map(it => ({
      id: it.id,
      label: it.id,
      text: it.statement,
      statement: it.statement,
      correct: it.correct,
      isCorrect: it.correct,
      isTrue: it.correct,
      explain: it.explain
    })),
    solution: q.items.map(it => `<strong>${it.id.toUpperCase()})</strong> ${it.explain}`).join("<br>"),
    explain: q.items.map(it => `<strong>${it.id.toUpperCase()})</strong> ${it.explain}`).join("<br>")
  })),
  part3ShortAnswer: window.LESSON_11_C2_B5_DATA.quiz.filter(q => q.type === "short_answer").map((q, idx) => ({
    id: "sa-11-5-" + (idx + 1),
    num: idx + 1,
    question: q.question,
    prompt: q.question,
    correctAnswer: q.correctAnswer,
    acceptableAnswers: q.acceptableAnswers,
    unit: q.unit || "",
    hint: q.hint,
    explain: q.explain,
    solution: q.explain
  }))
};

// Tự động inject vào cơ sở dữ liệu nếu có hàm autoInjectLesson
if (typeof autoInjectLesson === "function") {
  autoInjectLesson(window.LESSON_11_C2_B5_DATA);
}
