# -*- coding: utf-8 -*-
"""
Script to generate js/lesson-10-10-data.js
BÀI 10: VECTƠ TRONG MẶT PHẲNG TOẠ ĐỘ (TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
"""

content = r'''/**
 * BÀI HỌC SỐ: BÀI 10. VECTƠ TRONG MẶT PHẲNG TOẠ ĐỘ (TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - PHẦN I: Lời chào của Thầy Sáng + Nút Voice AI vàng đồng, chỉnh tốc độ
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 60 + Voice AI
 * - PHẦN III: Tiến trình bài học đa phương tiện:
 *             + Tình huống mở đầu: Dự báo toạ độ bão trên biển Đông (Hình 4.31 SGK)
 *             + Mục 1: Toạ độ của vectơ & Hệ trục Oxy (Hình 4.33, 4.34 SGK)
 *             + Mục 2: Biểu thức toạ độ các phép toán vectơ & Điều kiện cùng phương
 *             + Mục 3: Toạ độ điểm, vectơ nối hai điểm và công thức độ dài (Hình 4.35, 4.36 SGK)
 *             + Mục 4: Toạ độ trung điểm, trọng tâm & Nước đi quân mã cờ vua (Hình 4.37, 4.38 SGK)
 *             + Checkpoints POI chấm vàng tương tác tự động dừng và bật câu hỏi
 *             + Chốt kiến thức then chốt & Bảng so sánh
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
  title: "Vectơ trong mặt phẳng tọa độ",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào các em học sinh lớp 10 thân yêu! Chào mừng các em đến với bài học số 10: Vectơ trong mặt phẳng toạ độ. Đây là một bước ngoặt vĩ đại của toán học hình học, nơi nhà bác học Đề-các đã kết hợp hoàn hảo giữa Hình học trực quan và Đại số tính toán. Kể từ bài học này, mọi điểm, mọi vectơ và các hình vẽ phức tạp đều được biểu diễn thành những cặp số đơn giản, giúp các em tính toán khoảng cách và toạ độ cực kì chuẩn xác. Thầy trò mình cùng bắt đầu nhé!",
    audioScript: "Thầy Sáng chào các em học sinh lớp 10 thân yêu! Chào mừng các em đến với bài học số 10: Vectơ trong mặt phẳng toạ độ. Đây là một bước ngoặt vĩ đại của toán học hình học, nơi nhà bác học Đề-các đã kết hợp hoàn hảo giữa Hình học trực quan và Đại số tính toán. Kể từ bài học này, mọi điểm, mọi vectơ và các hình vẽ phức tạp đều được biểu diễn thành những cặp số đơn giản, giúp các em tính toán khoảng cách và toạ độ cực kì chuẩn xác. Thầy trò mình cùng bắt đầu nhé!",
    audioUrl: "assets/audio/b10_10_welcome.mp3",
    buttonLabel: "Nghe thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 60)
  // =========================================================================
  learningGoals: [
    "Nhận biết toạ độ của một vectơ trong mặt phẳng toạ độ $Oxy$ thông qua hai vectơ đơn vị $\\vec{i}$ và $\\vec{j}$.",
    "Thực hiện thành thạo các phép toán cộng, trừ vectơ và nhân vectơ với một số bằng biểu thức toạ độ.",
    "Tính chính xác toạ độ vectơ nối hai điểm, độ dài của vectơ và khoảng cách giữa hai điểm trong mặt phẳng toạ độ.",
    "Vận dụng linh hoạt công thức toạ độ trung điểm của đoạn thẳng và toạ độ trọng tâm tam giác vào giải quyết các bài toán toạ độ và thực tiễn."
  ],
  goalsAudioScript: "Mục tiêu bài học cần đạt: Sau bài học này, các em cần đạt được bốn mục tiêu then chốt: Thứ nhất, hiểu rõ khái niệm hệ trục toạ độ Oxy và định nghĩa toạ độ của vectơ thông qua hai vectơ đơn vị i và j. Thứ hai, thực hiện thành thạo các phép toán cộng, trừ vectơ và nhân vectơ với một số theo biểu thức toạ độ. Thứ ba, tính chính xác toạ độ vectơ nối hai điểm, độ dài vectơ và khoảng cách giữa hai điểm. Thứ tư, áp dụng thành thạo công thức toạ độ trung điểm của đoạn thẳng và toạ độ trọng tâm tam giác vào bài toán thực tiễn.",
  goalsAudioUrl: "assets/audio/b10_10_goals.mp3",
  goalsButtonLabel: "Nghe mục tiêu bài học",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN
  // =========================================================================
  // 1. TÌNH HUỐNG DẪN NHẬP (DỰ BÁO BÃO TRÊN BIỂN ĐÔNG - HÌNH 4.31 SGK)
  hook: {
    title: "TÌNH HUỐNG THỰC TẾ: BẢN TIN DỰ BÁO ĐƯỜNG ĐI CƠN BÃO TRÊN BIỂN ĐÔNG",
    audioScript: "Bài toán dẫn nhập: Các em thường theo dõi các bản tin thời tiết dự báo đường đi của các cơn bão trên biển Đông. Trên bản đồ khí tượng, vị trí tâm bão được xác định chính xác theo kinh độ và vĩ độ, ví dụ như toạ độ mười ba phẩy tám độ vĩ Bắc và một trăm lẻ tám phẩy ba độ kinh Đông. Nếu một cơn bão di chuyển thẳng đều trong mười hai giờ, làm thế nào các chuyên gia khí tượng dự đoán chính xác tâm bão sẽ ở đâu vào thời điểm chín giờ? Chúng ta cùng dùng toạ độ vectơ để giải mã bài toán này ngay sau đây!",
    audioUrl: "assets/audio/b10_10_hook.mp3",
    buttonLabel: "Nghe tình huống mở đầu",
    story: `
      <p>Một bản tin dự báo thời tiết thể hiện đường đi trong $12\\text{ giờ}$ của một cơn bão trên biển Đông. Trong khoảng thời gian đó, tâm bão di chuyển thẳng đều từ vị trí $A(13{,}8; 108{,}3)$ đến vị trí $B(14{,}1; 106{,}3)$ (Hình 4.31 SGK).</p>
      <p>Nhờ vào việc gắn hệ toạ độ $Oxy$ lên bề mặt Trái Đất, các chuyên gia khí tượng có thể tính toán chính xác toạ độ vị trí tâm bão $M(x; y)$ tại thời điểm $9\\text{ giờ}$ thông qua hệ thức vectơ: $\\vec{AM} = \\frac{9}{12}\\vec{AB} = \\frac{3}{4}\\vec{AB}$!</p>
    `,
    illustration: `
      <div class="tikz-svg-wrap" style="text-align: center; margin: 16px 0;">
        <svg viewBox="0 0 680 220" style="max-width: 640px; width: 100%; height: auto; display: block; margin: 0 auto; background: #ffffff;">
          <defs>
            <marker id="arr-b10-red" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
            </marker>
            <marker id="arr-b10-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
            </marker>
          </defs>

          <!-- BẢN ĐỒ VÙNG BIỂN KHÍ TƯỢNG (HÌNH 4.31) -->
          <g transform="translate(40, 20)">
            <rect x="0" y="0" width="340" height="170" rx="8" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
            <text x="15" y="25" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0369a1">Bản đồ dự báo bão biển Đông (Hình 4.31 SGK)</text>

            <!-- Lưới kinh vĩ độ nhẹ -->
            <line x1="0" y1="60" x2="340" y2="60" stroke="#e0f2fe" stroke-width="1"/>
            <line x1="0" y1="120" x2="340" y2="120" stroke="#e0f2fe" stroke-width="1"/>
            <line x1="120" y1="0" x2="120" y2="170" stroke="#e0f2fe" stroke-width="1"/>
            <line x1="240" y1="0" x2="240" y2="170" stroke="#e0f2fe" stroke-width="1"/>

            <!-- Vùng ảnh hưởng bão hình elip xanh lá -->
            <ellipse cx="180" cy="90" rx="140" ry="45" fill="#86efac" fill-opacity="0.35" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,4"/>

            <!-- Vị trí A lúc 0h (13.8N, 108.3E) -->
            <circle cx="280" cy="110" r="5" fill="#dc2626"/>
            <text x="285" y="125" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">A (0h)</text>

            <!-- Vị trí B lúc 12h (14.1N, 106.3E) -->
            <circle cx="60" cy="60" r="5" fill="#dc2626"/>
            <text x="45" y="50" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">B (12h)</text>

            <!-- Đường đi bão AB -->
            <line x1="280" y1="110" x2="68" y2="62" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-b10-red)"/>

            <!-- Tâm bão M tại thời điểm 9h (AM = 3/4 AB) -->
            <circle cx="115" cy="72.5" r="5.5" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
            <text x="115" y="95" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#b45309">M (9h)</text>
          </g>

          <!-- TOẠ ĐỘ TRÊN HỆ TRỤC OXY -->
          <g transform="translate(420, 20)">
            <text x="10" y="25" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Mô hình toán học: Toạ độ vectơ</text>

            <!-- Trục Ox và Oy -->
            <line x1="30" y1="140" x2="220" y2="140" stroke="#0f172a" stroke-width="1.8" marker-end="url(#arr-b10-blue)"/>
            <text x="225" y="145" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">x</text>
            <line x1="30" y1="140" x2="30" y2="30" stroke="#0f172a" stroke-width="1.8" marker-end="url(#arr-b10-blue)"/>
            <text x="25" y="22" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">y</text>
            <text x="18" y="155" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">O</text>

            <!-- Vectơ đơn vị i và j -->
            <line x1="30" y1="140" x2="70" y2="140" stroke="#0284c7" stroke-width="3" marker-end="url(#arr-b10-blue)"/>
            <text x="50" y="158" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0284c7">\\vec{i}</text>
            <line x1="30" y1="140" x2="30" y2="100" stroke="#0284c7" stroke-width="3" marker-end="url(#arr-b10-blue)"/>
            <text x="12" y="115" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0284c7">\\vec{j}</text>

            <!-- Vectơ u = x*i + y*j -->
            <line x1="30" y1="140" x2="160" y2="60" stroke="#16a34a" stroke-width="3" marker-end="url(#arr-b10-blue)"/>
            <circle cx="165" cy="57" r="4" fill="#16a34a"/>
            <text x="170" y="60" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#16a34a">\\vec{u} = (x; y)</text>
          </g>
        </svg>
      </div>
    `,
    question: "Vectơ $\\vec{u}$ có toạ độ $(x; y)$ được biểu diễn qua hai vectơ đơn vị $\\vec{i}, \\vec{j}$ như thế nào?",
    bridge: "Hãy cùng Thầy Sáng tìm hiểu Định nghĩa toạ độ vectơ ngay sau đây!"
  },

  // 2. CÁC MỤC LÝ THUYẾT BÀI HỌC (SECTIONS)
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1. TOẠ ĐỘ CỦA VECTƠ
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "Toạ độ của vectơ trên mặt phẳng toạ độ Oxy",
      audioScript: "Mục một, Toạ độ của vectơ trên mặt phẳng Oxy: Hệ trục toạ độ Oxy gồm hai trục vuông góc tại gốc O, với hai vectơ đơn vị là i trên trục hoành và j trên trục tung. Mọi vectơ u trong mặt phẳng đều phân tích duy nhất thành u bằng x lần vectơ i cộng y lần vectơ j. Cặp số x y đó chính là toạ độ của vectơ u, trong đó x là hoành độ và y là tung độ. Hai vectơ bằng nhau khi và chỉ khi chúng có cùng hoành độ và cùng tung độ.",
      audioUrl: "assets/audio/b10_10_sec1.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-10-sec1-1",
          time: 15,
          title: "Giây 15: Định nghĩa toạ độ vectơ",
          question: "Nếu vectơ $\\vec{u} = 3\\vec{i} - 5\\vec{j}$ thì toạ độ của vectơ $\\vec{u}$ là:",
          options: [
            "$(3; 5)$",
            "$(3; -5)$",
            "$(-3; 5)$",
            "$(-5; 3)$"
          ],
          correctIndex: 1, // B
          hint: "Hoành độ là hệ số của $\\vec{i}$, tung độ là hệ số của $\\vec{j}$.",
          explain: "Chính xác! Ta có $\\vec{u} = x\\vec{i} + y\\vec{j} \\iff \\vec{u} = (x; y)$. Với $\\vec{u} = 3\\vec{i} - 5\\vec{j}$, toạ độ là $(3; -5)$."
        },
        {
          id: "poi-10-10-sec1-2",
          time: 25,
          title: "Giây 25: Toạ độ vectơ đơn vị",
          question: "Toạ độ của hai vectơ đơn vị $\\vec{i}$ và $\\vec{j}$ lần lượt là:",
          options: [
            "$\\vec{i} = (0; 1), \\vec{j} = (1; 0)$",
            "$\\vec{i} = (1; 0), \\vec{j} = (0; 1)$",
            "$\\vec{i} = (1; 1), \\vec{j} = (0; 0)$",
            "$\\vec{i} = (1; 0), \\vec{j} = (1; 0)$"
          ],
          correctIndex: 1, // B
          hint: "Ví dụ 1 SGK trang 61: $\\vec{i} = 1\\vec{i} + 0\\vec{j} = (1; 0)$ và $\\vec{j} = 0\\vec{i} + 1\\vec{j} = (0; 1)$.",
          explain: "Rất chuẩn! Vectơ đơn vị trục hoành $\\vec{i} = (1; 0)$ và vectơ đơn vị trục tung $\\vec{j} = (0; 1)$."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Khái niệm hệ toạ độ và toạ độ vectơ (SGK trang 60 - 61)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 10 - Trang 61:</div>
              <p>Hệ trục toạ độ $(O; \\vec{i}, \\vec{j})$ gồm hai trục toạ độ $Ox$ và $Oy$ vuông góc với nhau tại gốc $O$.</p>
              <ul class="sgk-box-list">
                <li>$Ox$ gọi là <strong>trục hoành</strong>, có vectơ đơn vị $\\vec{i}$ ($|\\vec{i}| = 1$).</li>
                <li>$Oy$ gọi là <strong>trục tung</strong>, có vectơ đơn vị $\\vec{j}$ ($|\\vec{j}| = 1$).</li>
                <li>Mặt phẳng chứa hệ trục toạ độ gọi là <strong>mặt phẳng toạ độ $Oxy$</strong>.</li>
              </ul>
              <div style="margin-top: 10px; padding: 10px; background: #f0fdf4; border-radius: 6px;">
                <p><strong>Định nghĩa toạ độ vectơ:</strong> Với mỗi vectơ $\\vec{u}$ trên mặt phẳng $Oxy$, có duy nhất cặp số $(x_0; y_0)$ sao cho:
                  $$\\vec{u} = x_0\\vec{i} + y_0\\vec{j}$$
                  Ta nói vectơ $\\vec{u}$ có toạ độ là $(x_0; y_0)$, viết là $\\vec{u} = (x_0; y_0)$ hay $\\vec{u}(x_0; y_0)$. Số $x_0$ gọi là <em>hoành độ</em>, $y_0$ gọi là <em>tung độ</em> của $\\vec{u}$.
                </p>
              </div>
            </div>

            <!-- TikZ SVG Minh họa Hình 4.34 SGK: Toạ độ vectơ u = x0*i + y0*j -->
            <div class="tikz-svg-card" style="margin-top: 16px;">
              <div class="tikz-svg-title"><i class="fa-solid fa-chart-line"></i> Minh họa Hình 4.34 SGK: Biểu diễn toạ độ của vectơ $\\vec{u} = (x_0; y_0)$</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="440" height="220" viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-axis-black" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/>
                    </marker>
                    <marker id="arr-u-orange" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ea580c"/>
                    </marker>
                    <marker id="arr-unit-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                    </marker>
                  </defs>

                  <!-- Trục Ox và Oy -->
                  <line x1="40" y1="170" x2="380" y2="170" stroke="#1e293b" stroke-width="2" marker-end="url(#arr-axis-black)"/>
                  <text x="385" y="175" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#1e293b">x</text>
                  <line x1="90" y1="200" x2="90" y2="25" stroke="#1e293b" stroke-width="2" marker-end="url(#arr-axis-black)"/>
                  <text x="85" y="18" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#1e293b">y</text>
                  <text x="75" y="185" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#1e293b">O</text>

                  <!-- Vectơ đơn vị i trên Ox (90,170 -> 140,170) -->
                  <line x1="90" y1="170" x2="135" y2="170" stroke="#0284c7" stroke-width="3.5" marker-end="url(#arr-unit-blue)"/>
                  <text x="110" y="190" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">\\vec{i}</text>
                  <text x="135" y="185" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" fill="#64748b">1</text>

                  <!-- Vectơ đơn vị j trên Oy (90,170 -> 90,120) -->
                  <line x1="90" y1="170" x2="90" y2="125" stroke="#0284c7" stroke-width="3.5" marker-end="url(#arr-unit-blue)"/>
                  <text x="70" y="145" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">\\vec{j}</text>
                  <text x="75" y="125" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" fill="#64748b">1</text>

                  <!-- Điểm (x0, y0) với x0 = 260, y0 = 60 -->
                  <line x1="260" y1="170" x2="260" y2="60" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4,4"/>
                  <line x1="90" y1="60" x2="260" y2="60" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="4,4"/>
                  <text x="255" y="190" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">x₀</text>
                  <text x="65" y="65" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">y₀</text>

                  <!-- Vectơ u = (x0, y0) từ O đến (260, 60) -->
                  <line x1="90" y1="170" x2="254" y2="64" stroke="#ea580c" stroke-width="3" marker-end="url(#arr-u-orange)"/>
                  <circle cx="260" cy="60" r="4.5" fill="#ea580c"/>
                  <text x="180" y="105" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#ea580c">\\vec{u} = x₀\\vec{i} + y₀\\vec{j}</text>
                </svg>
              </div>
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
      title: "Biểu thức toạ độ của các phép toán vectơ và điều kiện cùng phương",
      audioScript: "Mục hai, Biểu thức toạ độ của các phép toán vectơ: Khi cộng hoặc trừ hai vectơ, ta chỉ việc cộng hoặc trừ các toạ độ tương ứng. Khi nhân một vectơ với một số thực k, ta nhân số k đó với cả hoành độ và tung độ. Hai vectơ u và v cùng phương khi và chỉ khi toạ độ của chúng tỉ lệ với nhau, tức là hoành độ này chia hoành độ kia bằng tung độ này chia tung độ kia.",
      audioUrl: "assets/audio/b10_10_sec2.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-10-sec2-1",
          time: 14,
          title: "Giây 14: Biểu thức toạ độ cộng trừ",
          question: "Cho $\\vec{u} = (2; -3)$ và $\\vec{v} = (4; 1)$. Toạ độ của vectơ tổng $\\vec{u} + \\vec{v}$ là:",
          options: [
            "$(6; -2)$",
            "$(6; 4)$",
            "$(-2; -4)$",
            "$(8; -3)$"
          ],
          correctIndex: 0, // A
          hint: "Cộng hoành với hoành: $2 + 4 = 6$; cộng tung với tung: $-3 + 1 = -2$.",
          explain: "Chính xác! $\\vec{u} + \\vec{v} = (2 + 4; -3 + 1) = (6; -2)$."
        },
        {
          id: "poi-10-10-sec2-2",
          time: 25,
          title: "Giây 25: Điều kiện cùng phương theo toạ độ",
          question: "Hai vectơ $\\vec{u} = (x; y)$ và $\\vec{v} = (x'; y')$ (với $\\vec{v} \\ne \\vec{0}$) cùng phương khi và chỉ khi:",
          options: [
            "$x = x'$ và $y = y'$",
            "Tồn tại số $k$ sao cho $x = kx'$ và $y = ky'$",
            "$xx' + yy' = 0$",
            "$xy' - yx' = 1$"
          ],
          correctIndex: 1, // B
          hint: "Nhận xét SGK trang 62: Hai vectơ cùng phương khi toạ độ của chúng tỉ lệ với nhau.",
          explain: "Rất chuẩn! Vectơ $\\vec{u}$ cùng phương với $\\vec{v}$ khi và chỉ khi tồn tại $k$ sao cho $\\vec{u} = k\\vec{v} \\iff x = kx'$ và $y = ky'$."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Công thức toạ độ phép toán vectơ (SGK trang 61 - 62)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 10 - Trang 61:</div>
              <p>Cho hai vectơ $\\vec{u} = (x; y)$ và $\\vec{v} = (x'; y')$, cùng số thực $k$. Khi đó:</p>
              <ul class="sgk-box-list">
                <li>$\\vec{u} + \\vec{v} = (x + x'; y + y')$;</li>
                <li>$\\vec{u} - \\vec{v} = (x - x'; y - y')$;</li>
                <li>$k\\vec{u} = (kx; ky)$.</li>
              </ul>
              <div style="margin-top: 10px; padding: 10px; background: #fffbeb; border-radius: 6px;">
                <p><strong>Điều kiện cùng phương theo toạ độ:</strong> Vectơ $\\vec{v}(x'; y')$ cùng phương với vectơ $\\vec{u}(x; y) \\ne \\vec{0}$ khi và chỉ khi tồn tại số thực $k$ sao cho:
                  $$x' = kx \\quad \\text{và} \\quad y' = ky \\iff \\frac{x'}{x} = \\frac{y'}{y} \\quad (\\text{nếu } xy \\ne 0).$$
                </p>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3. TOẠ ĐỘ ĐIỂM, VECTƠ NỐI HAI ĐIỂM VÀ ĐỘ DÀI
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "Toạ độ của điểm, vectơ nối hai điểm và công thức độ dài (SGK trang 62 - 63)",
      audioScript: "Mục ba, Toạ độ điểm, vectơ nối hai điểm và công thức độ dài: Toạ độ của điểm M chính là toạ độ của vectơ OM nối từ gốc toạ độ. Toạ độ của vectơ MN nối từ điểm M đến điểm N được tính bằng toạ độ điểm sau trừ toạ độ điểm trước. Độ dài của vectơ u và khoảng cách giữa hai điểm M N được tính bằng căn bậc hai của tổng bình phương các hiệu toạ độ theo định lí Pi-ta-go quen thuộc.",
      audioUrl: "assets/audio/b10_10_sec3.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-10-sec3-1",
          time: 14,
          title: "Giây 14: Toạ độ vectơ nối hai điểm",
          question: "Cho hai điểm $A(1; 3)$ và $B(4; -1)$. Toạ độ của vectơ $\\vec{AB}$ là:",
          options: [
            "$(3; -4)$",
            "$(5; 2)$",
            "$(-3; 4)$",
            "$(4; -3)$"
          ],
          correctIndex: 0, // A
          hint: "Quy tắc: Toạ độ sau trừ toạ độ trước: $x_B - x_A = 4 - 1 = 3$; $y_B - y_A = -1 - 3 = -4$.",
          explain: "Chính xác! $\\vec{AB} = (x_B - x_A; y_B - y_A) = (4 - 1; -1 - 3) = (3; -4)$."
        },
        {
          id: "poi-10-10-sec3-2",
          time: 24,
          title: "Giây 24: Công thức tính độ dài",
          question: "Độ dài của vectơ $\\vec{u} = (3; -4)$ bằng bao nhiêu?",
          options: [
            "$-1$",
            "$7$",
            "$5$",
            "$\\sqrt{7}$"
          ],
          correctIndex: 2, // C
          hint: "Độ dài: $|\\vec{u}| = \\sqrt{x^2 + y^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
          explain: "Rất chuẩn! $|\\vec{u}| = \\sqrt{3^2 + (-4)^2} = 5$."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Toạ độ điểm và công thức khoảng cách (SGK trang 62 - 63)",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #fdf4ff; border-left-color: #c026d3;">
              <div class="sgk-box-tag" style="color: #a21caf;"><i class="fa-solid fa-location-dot"></i> Toạ độ điểm và công thức khoảng cách:</div>
              <ul class="sgk-box-list" style="color: #701a75;">
                <li><strong>Toạ độ điểm:</strong> Điểm $M$ có toạ độ $(x; y)$ khi và chỉ khi $\\vec{OM} = (x; y)$.</li>
                <li><strong>Toạ độ vectơ $\\vec{MN}$:</strong> Với $M(x; y)$ và $N(x'; y')$ thì:
                  <div style="text-align: center; margin: 8px 0; font-size: 1.15rem; font-weight: bold; color: #86198f;">
                    $$\\vec{MN} = (x' - x; y' - y)$$
                  </div>
                </li>
                <li><strong>Độ dài vectơ và khoảng cách giữa hai điểm:</strong>
                  <div style="text-align: center; margin: 8px 0; font-size: 1.15rem; font-weight: bold; color: #86198f;">
                    $$MN = |\\vec{MN}| = \\sqrt{(x' - x)^2 + (y' - y)^2}$$
                  </div>
                </li>
              </ul>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4. TOẠ ĐỘ TRUNG ĐIỂM VÀ TRỌNG TÂM TAM GIÁC
    // -----------------------------------------------------------------------
    {
      num: "4",
      title: "Toạ độ trung điểm, toạ độ trọng tâm tam giác và ứng dụng thực tiễn",
      audioScript: "Mục bốn, Toạ độ trung điểm và trọng tâm tam giác: Toạ độ trung điểm của đoạn thẳng bằng trung bình cộng toạ độ hai đầu mút, lấy hoành cộng hoành chia đôi, tung cộng tung chia đôi. Toạ độ trọng tâm tam giác bằng trung bình cộng toạ độ ba đỉnh, lấy tổng ba toạ độ chia cho ba. Công thức này giúp xác định tức thì tâm bão sau chín giờ di chuyển trên biển Đông.",
      audioUrl: "assets/audio/b10_10_sec4.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-10-sec4-1",
          time: 14,
          title: "Giây 14: Toạ độ trung điểm",
          question: "Cho đoạn thẳng $AB$ với $A(1; 3)$ và $B(-3; 5)$. Toạ độ trung điểm $M$ của $AB$ là:",
          options: [
            "$(-1; 4)$",
            "$(-2; 8)$",
            "$(2; 1)$",
            "$(4; -2)$"
          ],
          correctIndex: 0, // A
          hint: "$x_M = \\frac{1 + (-3)}{2} = -1; y_M = \\frac{3 + 5}{2} = 4$.",
          explain: "Chính xác! $x_M = \\frac{x_A + x_B}{2} = -1$ và $y_M = \\frac{y_A + y_B}{2} = 4 \\implies M(-1; 4)$."
        },
        {
          id: "poi-10-10-sec4-2",
          time: 25,
          title: "Giây 25: Toạ độ trọng tâm tam giác",
          question: "Cho tam giác $ABC$ với $A(1; 2), B(3; -4), C(5; 5)$. Toạ độ trọng tâm $G$ của tam giác là:",
          options: [
            "$(9; 3)$",
            "$(3; 1)$",
            "$(3; -1)$",
            "$(4{,}5; 1{,}5)$"
          ],
          correctIndex: 1, // B
          hint: "Cộng toạ độ 3 đỉnh chia cho 3: $x_G = \\frac{1 + 3 + 5}{3} = 3; y_G = \\frac{2 - 4 + 5}{3} = 1$.",
          explain: "Rất xuất sắc! $x_G = \\frac{1 + 3 + 5}{3} = 3$ và $y_G = \\frac{2 + (-4) + 5}{3} = 1 \\implies G(3; 1)$."
        }
      ],
      subsections: [
        {
          key: "4a",
          title: "Công thức toạ độ trung điểm và trọng tâm (SGK trang 64)",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #f0fdf4; border-left-color: #16a34a;">
              <div class="sgk-box-tag" style="color: #15803d;"><i class="fa-solid fa-calculator"></i> Hai công thức toạ độ kinh điển:</div>
              <ul class="sgk-box-list" style="color: #14532d;">
                <li><strong>Toạ độ trung điểm $M$ của đoạn thẳng $AB$:</strong>
                  <div style="text-align: center; margin: 8px 0; font-size: 1.15rem; font-weight: bold; color: #15803d;">
                    $$x_M = \\frac{x_A + x_B}{2}, \\quad y_M = \\frac{y_A + y_B}{2}$$
                  </div>
                </li>
                <li><strong>Toạ độ trọng tâm $G$ của tam giác $ABC$:</strong>
                  <div style="text-align: center; margin: 8px 0; font-size: 1.15rem; font-weight: bold; color: #15803d;">
                    $$x_G = \\frac{x_A + x_B + x_C}{3}, \\quad y_G = \\frac{y_A + y_B + y_C}{3}$$
                  </div>
                </li>
              </ul>
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
    title: "TỔNG KẾT BÀI HỌC & GIẢI MÃ BÀI TOÁN DỰ BÁO TÂM BÃO",
    recap: "Toạ độ hoá hình học giúp chuyển hoá các bài toán vectơ trừu tượng thành các phép toán số học cực kì đơn giản và chính xác. Bằng cách lấy hoành độ và tung độ, ta dễ dàng dự đoán chính xác tâm bão sau 9 giờ di chuyển trên biển Đông.",
    audioScript: "Chốt bài học: Như vậy, qua bài học số 10, các em đã làm chủ phương pháp toạ độ trong mặt phẳng. Hãy ghi nhớ thật kĩ: toạ độ vectơ sau trừ trước, độ dài là căn tổng bình phương, trung điểm chia đôi và trọng tâm chia ba. Với vũ khí toạ độ sắc bén này, các bài toán hình học đã trở thành những phép tính đại số cực kì nhẹ nhàng. Thầy chúc các em luôn đạt điểm số cao nhất cùng Thầy Sáng!",
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
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho vectơ $\\vec{u} = -2\\vec{i} + 7\\vec{j}$. Toạ độ của vectơ $\\vec{u}$ là:",
        options: [
          "$(2; 7)$",
          "$(-2; 7)$",
          "$(7; -2)$",
          "$(-2; -7)$"
        ],
        correctIndex: 1, // B
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo định nghĩa toạ độ vectơ: $\\vec{u} = x\\vec{i} + y\\vec{j} \\iff \\vec{u} = (x; y)$.<br>Với $\\vec{u} = -2\\vec{i} + 7\\vec{j}$ thì hoành độ $x = -2$ và tung độ $y = 7$.<br>&rArr; <strong>Chọn đáp án B.</strong>",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Cho $\\vec{v} = 4\\vec{i} - 3\\vec{j}$. Toạ độ của $\\vec{v}$ là:",
          options: ["$(-3; 4)$", "$(4; -3)$", "$(4; 3)$", "$(-4; 3)$"],
          correctIndex: 1, // B
          solution: "$\\vec{v} = (4; -3)$."
        }
      },
      {
        id: "mc-10-10-2",
        num: 2,
        level: "Nhận biết",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho hai điểm $A(2; -1)$ và $B(5; 3)$. Toạ độ của vectơ $\\vec{AB}$ là:",
        options: [
          "$(7; 2)$",
          "$(-3; -4)$",
          "$(3; 2)$",
          "$(3; 4)$"
        ],
        correctIndex: 3, // D
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Toạ độ của vectơ $\\vec{AB}$ tính bằng toạ độ điểm $B$ trừ toạ độ điểm $A$:<br>$$\\vec{AB} = (x_B - x_A; y_B - y_A) = (5 - 2; 3 - (-1)) = (3; 4).$$<br>&rArr; <strong>Chọn đáp án D.</strong>",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cho $M(1; 4)$ và $N(6; 1)$. Toạ độ $\\vec{MN}$ là:",
          options: ["$(5; -3)$", "$(-5; 3)$", "$(7; 5)$", "$(5; 3)$"],
          correctIndex: 0, // A
          solution: "$\\vec{MN} = (6 - 1; 1 - 4) = (5; -3)$."
        }
      },
      {
        id: "mc-10-10-3",
        num: 3,
        level: "Thông hiểu",
        prompt: "Trong mặt phẳng $Oxy$, cho $\\vec{a} = (1; 2)$ và $\\vec{b} = (-3; 4)$. Toạ độ của vectơ $\\vec{c} = 2\\vec{a} - \\vec{b}$ là:",
        options: [
          "$(5; 0)$",
          "$(-1; 8)$",
          "$(5; 8)$",
          "$(-5; 0)$"
        ],
        correctIndex: 0, // A
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Ta có $2\\vec{a} = 2(1; 2) = (2; 4)$.<br>Khi đó $\\vec{c} = 2\\vec{a} - \\vec{b} = (2 - (-3); 4 - 4) = (5; 0)$.<br>&rArr; <strong>Chọn đáp án A.</strong>",
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Cho $\\vec{u} = (2; 1), \\vec{v} = (1; 3)$. Toạ độ của $\\vec{u} + 2\\vec{v}$ là:",
          options: ["$(4; 7)$", "$(3; 4)$", "$(5; 5)$", "$(4; 5)$"],
          correctIndex: 0, // A
          solution: "$\\vec{u} + 2\\vec{v} = (2 + 2; 1 + 6) = (4; 7)$."
        }
      },
      {
        id: "mc-10-10-4",
        num: 4,
        level: "Thông hiểu",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, khoảng cách giữa hai điểm $A(1; 2)$ và $B(4; 6)$ bằng:",
        options: [
          "$7$",
          "$\\sqrt{7}$",
          "$5$",
          "$25$"
        ],
        correctIndex: 2, // C
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Áp dụng công thức khoảng cách giữa hai điểm:<br>$$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} = \\sqrt{(4 - 1)^2 + (6 - 2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5.$$<br>&rArr; <strong>Chọn đáp án C.</strong>",
        similarVariation: {
          prompt: "Câu 4 (Tương tự): Tính khoảng cách giữa $M(0; 1)$ và $N(6; 9)$.",
          options: ["$8$", "$10$", "$14$", "$\\sqrt{10}$"],
          correctIndex: 1, // B
          solution: "$MN = \\sqrt{6^2 + 8^2} = 10$."
        }
      },
      {
        id: "mc-10-10-5",
        num: 5,
        level: "Vận dụng",
        prompt: "Trong mặt phẳng $Oxy$, cho ba điểm $A(1; 2), B(-2; 6), C(9; 8)$. Tìm toạ độ điểm $D(x; y)$ để tứ giác $ABCD$ là một hình bình hành.",
        options: [
          "$(12; 4)$",
          "$(12; 4)$",
          "$(6; 12)$",
          "$(-6; 4)$"
        ],
        correctIndex: 1, // B
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Tứ giác $ABCD$ là hình bình hành khi và chỉ khi $\\vec{AD} = \\vec{BC}$.<br>Ta có $\\vec{AD} = (x - 1; y - 2)$ và $\\vec{BC} = (9 - (-2); 8 - 6) = (11; 2)$.<br>Do đó:<br>$$\\begin{cases} x - 1 = 11 \\\\ y - 2 = 2 \\end{cases} \\iff \\begin{cases} x = 12 \\\\ y = 4 \\end{cases} \\implies D(12; 4).$$<br>&rArr; <strong>Chọn đáp án B.</strong>",
        similarVariation: {
          prompt: "Câu 5 (Tương tự): Cho $A(0; 0), B(3; 1), C(4; 5)$. Tìm $D$ để $ABCD$ là hình bình hành.",
          options: ["$(1; 4)$", "$(7; 6)$", "$(-1; 4)$", "$(1; -4)$"],
          correctIndex: 0, // A
          solution: "$\\vec{AD} = \\vec{BC} = (1; 4) \\implies D(1; 4)$."
        }
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 2: 3 CÂU TRẮC NGHIỆM ĐÚNG / SAI (ĐỦ 4 Ý a, b, c, d)
    // -----------------------------------------------------------------------
    part2TrueFalse: [
      {
        id: "tf-10-10-1",
        num: 1,
        intro: "Trong mặt phẳng toạ độ $Oxy$, cho ba điểm $A(-1; 3), B(3; 5), C(2; 1)$. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
        items: [
          {
            id: "a",
            text: "Toạ độ của vectơ $\\vec{AB}$ là $(4; 2)$.",
            isCorrect: true,
            explain: "Đúng vì $\\vec{AB} = (3 - (-1); 5 - 3) = (4; 2)$."
          },
          {
            id: "b",
            text: "Toạ độ trung điểm $M$ của đoạn thẳng $AB$ là $(1; 4)$.",
            isCorrect: true,
            explain: "Đúng vì $x_M = \\frac{-1 + 3}{2} = 1$ và $y_M = \\frac{3 + 5}{2} = 4$."
          },
          {
            id: "c",
            text: "Toạ độ trọng tâm $G$ của tam giác $ABC$ là $\\left(\\frac{4}{3}; 3\\right)$.",
            isCorrect: true,
            explain: "Đúng vì $x_G = \\frac{-1 + 3 + 2}{3} = \\frac{4}{3}$ và $y_G = \\frac{3 + 5 + 1}{3} = 3$."
          },
          {
            id: "d",
            text: "Ba điểm $A, B, C$ thẳng hàng.",
            isCorrect: false,
            explain: "Sai vì $\\vec{AB} = (4; 2)$ và $\\vec{AC} = (3; -2)$ có tỉ số toạ độ $\\frac{4}{3} \\ne \\frac{2}{-2} = -1$ nên hai vectơ không cùng phương, ba điểm không thẳng hàng."
          }
        ]
      },
      {
        id: "tf-10-10-2",
        num: 2,
        intro: "Trong mặt phẳng toạ độ $Oxy$, cho các vectơ $\\vec{u} = (2; -4)$ và $\\vec{v} = (-1; 2)$. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
        items: [
          {
            id: "a",
            text: "Độ dài của vectơ $\\vec{u}$ bằng $2\\sqrt{5}$.",
            isCorrect: true,
            explain: "Đúng vì $|\\vec{u}| = \\sqrt{2^2 + (-4)^2} = \\sqrt{20} = 2\\sqrt{5}$."
          },
          {
            id: "b",
            text: "Hai vectơ $\\vec{u}$ và $\\vec{v}$ cùng phương với nhau.",
            isCorrect: true,
            explain: "Đúng vì $\\vec{u} = -2\\vec{v}$ (hoặc $\\frac{2}{-1} = \\frac{-4}{2} = -2$)."
          },
          {
            id: "c",
            text: "Hai vectơ $\\vec{u}$ và $\\vec{v}$ cùng hướng với nhau.",
            isCorrect: false,
            explain: "Sai vì $\\vec{u} = -2\\vec{v}$ với $k = -2 < 0$ nên hai vectơ này ngược hướng nhau."
          },
          {
            id: "d",
            text: "Toạ độ của vectơ tổng $\\vec{u} + \\vec{v}$ là $(1; -2)$.",
            isCorrect: true,
            explain: "Đúng vì $\\vec{u} + \\vec{v} = (2 + (-1); -4 + 2) = (1; -2)$."
          }
        ]
      },
      {
        id: "tf-10-10-3",
        num: 3,
        intro: "Trong mặt phẳng toạ độ $Oxy$, cho tam giác $ABC$ với $A(1; 1), B(4; 5), C(1; 5)$. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
        items: [
          {
            id: "a",
            text: "Độ dài các cạnh là $AB = 5, AC = 4, BC = 3$.",
            isCorrect: true,
            explain: "Đúng: $AB = \\sqrt{3^2 + 4^2} = 5, AC = \\sqrt{0^2 + 4^2} = 4, BC = \\sqrt{(-3)^2 + 0^2} = 3$."
          },
          {
            id: "b",
            text: "Tam giác $ABC$ là tam giác vuông tại $C$.",
            isCorrect: true,
            explain: "Đúng vì $BC^2 + AC^2 = 3^2 + 4^2 = 25 = AB^2$ (theo định lí Pythagore đảo)."
          },
          {
            id: "c",
            text: "Diện tích của tam giác $ABC$ bằng $6$.",
            isCorrect: true,
            explain: "Đúng vì diện tích tam giác vuông bằng $\\frac{1}{2} AC \\cdot BC = \\frac{1}{2} \\times 4 \\times 3 = 6$."
          },
          {
            id: "d",
            text: "Tâm đường tròn ngoại tiếp tam giác $ABC$ có toạ độ là $(2; 3)$.",
            isCorrect: false,
            explain: "Sai vì tam giác vuông tại $C$ nên tâm đường tròn ngoại tiếp là trung điểm cạnh huyền $AB$: $I\\left(\\frac{1+4}{2}; \\frac{1+5}{2}\\right) = (2{,}5; 3)$ chứ không phải $(2; 3)$."
          }
        ]
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 3: 2 CÂU HỎI TRẢ LỜI NGẮN (VẬN DỤNG THỰC TẾ)
    // -----------------------------------------------------------------------
    part3ShortAnswer: [
      {
        id: "sa-10-10-1",
        num: 1,
        prompt: "Câu 1: Một con tàu thuỷ xuất phát từ vị trí có toạ độ $A(1; 2)$ trên mặt phẳng toạ độ (đơn vị: hải lí). Tàu chuyển động thẳng đều với vectơ vận tốc $\\vec{v} = (6; 8)$ (hải lí/giờ). Sau $2{,}5\\text{ giờ}$ khởi hành, khoảng cách từ con tàu đến gốc toạ độ $O(0; 0)$ bằng bao nhiêu hải lí?",
        correctAnswer: "27.2",
        acceptedAnswers: ["27.2", "27,2", "27.20"],
        unit: "hải lí",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vị trí con tàu sau $2{,}5\\text{ giờ}$ được xác định bởi điểm $M$ thoả mãn:<br>$$\\vec{AM} = 2{,}5 \\vec{v} = 2{,}5(6; 8) = (15; 20).$$<br>Toạ độ của điểm $M$ là:<br>$$x_M = x_A + 15 = 1 + 15 = 16, \\quad y_M = y_A + 20 = 2 + 20 = 22 \\implies M(16; 22).$$<br>Khoảng cách từ tàu $M$ đến gốc toạ độ $O$ là:<br>$$OM = \\sqrt{16^2 + 22^2} = \\sqrt{256 + 484} = \\sqrt{740} \\approx 27{,}203\\text{ hải lí}.$$<br>Làm tròn đến một chữ số thập phân ta được $27{,}2\\text{ hải lí}$.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Tàu xuất phát từ A(0; 0) với vận tốc v = (3; 4) sau 2 giờ. Khoảng cách đến O là bao nhiêu hải lí?",
          correctAnswer: "10",
          acceptedAnswers: ["10", "10 hải lí"],
          unit: "hải lí",
          explain: "Vị trí M(6; 8) -> OM = sqrt(6^2 + 8^2) = 10 hải lí."
        }
      },
      {
        id: "sa-10-10-2",
        num: 2,
        prompt: "Câu 2: Theo thông tin khí tượng ở đầu bài học, trong $12\\text{ giờ}$ tâm bão di chuyển thẳng đều từ vị trí $A(13{,}8; 108{,}3)$ đến vị trí $B(14{,}1; 106{,}3)$ (toạ độ theo vĩ độ Bắc và kinh độ Đông). Tìm toạ độ kinh độ Đông của tâm bão tại thời điểm $9\\text{ giờ}$ tính từ lúc bắt đầu dự báo (làm tròn kết quả đến hai chữ số thập phân).",
        correctAnswer: "106.8",
        acceptedAnswers: ["106.8", "106.80", "106,8", "106,80"],
        unit: "độ",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vì bão di chuyển thẳng đều trong $12\\text{ giờ}$, tại thời điểm $9\\text{ giờ}$ tâm bão ở vị trí điểm $M$ thoả mãn:<br>$$\\vec{AM} = \\frac{9}{12}\\vec{AB} = \\frac{3}{4}\\vec{AB}.$$<br>Ta có $\\vec{AB} = (14{,}1 - 13{,}8; 106{,}3 - 108{,}3) = (0{,}3; -2{,}0)$.<br>Suy ra $\\vec{AM} = \\frac{3}{4}(0{,}3; -2{,}0) = (0{,}225; -1{,}5)$.<br>Do đó toạ độ điểm $M$ là:<br>$$x_M = 13{,}8 + 0{,}225 = 14{,}025^\\circ\\text{ vĩ Bắc},$$<br>$$y_M = 108{,}3 + (-1{,}5) = 106{,}80^\\circ\\text{ kinh Đông}.$$<br>Vậy kinh độ của tâm bão sau $9\\text{ giờ}$ là $106{,}8^\\circ$ Đông.",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Tính vĩ độ Bắc của tâm bão sau 9 giờ (làm tròn 3 chữ số thập phân).",
          correctAnswer: "14.025",
          acceptedAnswers: ["14.025", "14,025"],
          unit: "độ",
          explain: "x_M = 13.8 + 0.225 = 14.025 độ Bắc."
        }
      }
    ]
  }
};

// Đồng bộ biến toàn cục
if (typeof window !== "undefined") {
  window.LESSON_10_10_DATA = window.LESSON_10_C4_B10_DATA;
}
'''

import os
with open("js/lesson-10-10-data.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated js/lesson-10-10-data.js successfully! Size: {os.path.getsize('js/lesson-10-10-data.js')} bytes")
