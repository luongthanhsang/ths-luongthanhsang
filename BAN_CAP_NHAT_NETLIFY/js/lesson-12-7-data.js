/**
 * BÀI HỌC SỐ: BÀI 7. HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN (TOÁN 12 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại (Bản thiết kế vàng tương thích 100% Bài 6):
 * - Phần I: Lời chào của Thầy Sáng + Voice AI Nam Minh + Timeline
 * - Phần II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 60 + Voice AI Nam Minh + Timeline
 * - Phần III: Tiến trình bài học:
 *             + Bài toán dẫn nhập (Bóng đèn Hình 2.34 SGK) + Đồ họa TikZ 3D + Voice AI
 *             + Mục 1: Hệ trục toạ độ trong không gian + Đồ họa 3D + Audio b7_sec1 (29.98s) + 2 POI (35%, 75%)
 *             + Mục 2: Toạ độ của một điểm trong không gian + Đồ họa 3D + Audio b7_sec2 (25.46s) + 2 POI (35%, 75%)
 *             + Mục 3: Toạ độ của vectơ trong không gian + Đồ họa 3D + Audio b7_sec3 (26.14s) + 2 POI (35%, 75%)
 *             + Mục 4: Liên hệ toạ độ điểm và vectơ + Đồ họa 3D + Audio b7_sec4 (31.25s) + 2 POI (35%, 75%)
 *             + Chốt bài học: Giải đáp bài toán thực tế bóng đèn & radar + Audio b7_wrapup (23.64s)
 * - Phần IV: Bài tập trắc nghiệm tổng hợp chuẩn cấu trúc đề thi mới 2025 Bộ GD&ĐT:
 *             + 5 câu trắc nghiệm nhiều lựa chọn (Nhận biết) có "Bài toán tương tự" và Lời giải chi tiết
 *             + 3 câu trắc nghiệm Đúng/Sai 4 ý (Thông hiểu) có "Bài toán tương tự" và Lời giải chi tiết
 *             + 2 câu trả lời ngắn toán thực tế (Vận dụng) có "Bài toán tương tự" và Lời giải chi tiết
 */

window.LESSON_12_C2_B7_DATA = {
  id: "12-c2-b7",
  number: "Bài 7",
  title: "Hệ trục toạ độ trong không gian",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioScript: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioUrl: "assets/audio/b7_welcome.mp3",
    buttonLabel: "Lời chào của thầy Sáng",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 60)
  // =========================================================================
  learningGoals: [
    "Nhận biết hệ trục toạ độ Descartes vuông góc $Oxyz$ trong không gian, gốc toạ độ, các trục toạ độ (trục hoành $Ox$, trục tung $Oy$, trục cao $Oz$) và các mặt phẳng toạ độ $(Oxy), (Oyz), (Ozx)$.",
    "Nhận biết và xác định toạ độ của một điểm đối với hệ toạ độ $Oxyz$: bộ ba số $(x; y; z)$ tương ứng với hoành độ, tung độ và cao độ, toạ độ các hình chiếu vuông góc lên các trục và các mặt phẳng toạ độ.",
    "Nhận biết và xác định toạ độ của vectơ: $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\Leftrightarrow \\vec{u} = (x; y; z)$, toạ độ của vectơ qua hai điểm $\\vec{MN} = (x_N - x_M; y_N - y_M; z_N - z_M)$, toạ độ trung điểm đoạn thẳng và toạ độ trọng tâm tam giác.",
    "Vận dụng linh hoạt hệ toạ độ không gian $Oxyz$ để giải quyết các bài toán định vị thực tiễn: định vị thiết bị đèn trong phòng học và hệ thống radar giám sát không lưu hàng không."
  ],
  goalsAudioUrl: "assets/audio/b7_goals.mp3",
  goalsButtonLabel: "Nghe thầy Sáng đọc mục tiêu",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC (4 MỤC CHUẨN SGK + DẪN NHẬP + CHỐT BÀI HỌC)
  // =========================================================================
  hook: {
    title: "Bài toán vị trí chiếc bóng đèn trong không gian ba chiều (Hình 2.34 SGK trang 60)",
    story: "Trong một căn phòng hình hộp chữ nhật, một chiếc bóng đèn được treo cách sàn nhà $2\\text{ m}$, cách hai bức tường vuông góc lần lượt là $1\\text{ m}$ và $1{,}5\\text{ m}$. Làm thế nào để các kỹ sư thiết kế mô tả vị trí của chiếc bóng đèn một cách chính xác, ngắn gọn và tính toán khoảng cách từ bóng đèn đến góc phòng? Hệ trục toạ độ Đề-các vuông góc $Oxyz$ trong không gian chính là chìa khóa toán học tuyệt vời giúp chúng ta giải quyết trọn vẹn bài toán này!",
    illustration: "",
    illustrationCaption: "Hình 2.34 SGK: Mô hình căn phòng và vị trí chiếc bóng đèn treo trong không gian ba chiều",
    question: "Nếu chọn gốc $O$ là một góc phòng trên mặt sàn, hai mép tường là trục $Ox, Oy$ và đường chân tường thẳng đứng là trục $Oz$, toạ độ của bóng đèn sẽ là bộ ba số nào?",
    audioUrl: "assets/audio/b7_hook.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài toán dẫn nhập",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    bridge: "Hãy cùng Thầy Sáng bước vào khám phá Mục 1: Hệ trục toạ độ trong không gian ngay sau đây!"
  },

  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1: HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN",
      audioUrl: "assets/audio/b7_sec1.mp3",
      buttonLabel: "Nghe thầy Sáng giảng Mục 1",
      checkpoints: [
        {
          id: "poi-12-7-1-1",
          time: 10,
          title: "Điểm dừng 1: Cấu tạo các trục toạ độ",
          question: "Trong hệ toạ độ Đề-các vuông góc $Oxyz$, trục $Oz$ hướng thẳng đứng vuông góc với cả hai trục $Ox$ và $Oy$ được gọi là:",
          options: [
            "Trục cao",
            "Trục hoành",
            "Trục tung",
            "Trục đối xứng"
          ],
          correctIndex: 0,
          hint: "Trục Ox là trục hoành, trục Oy là trục tung, còn trục Oz thẳng đứng là...",
          explain: "Chính xác! Trục $Ox$ là trục hoành, trục $Oy$ là trục tung, và trục $Oz$ thẳng đứng là trục cao. Ba trục đôi một vuông góc tại gốc $O$."
        },
        {
          id: "poi-12-7-1-2",
          time: 22,
          title: "Điểm dừng 2: Tính chất vectơ đơn vị",
          question: "Các vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ lần lượt nằm trên các trục $Ox, Oy, Oz$. Khẳng định nào sau đây là ĐÚNG?",
          options: [
            "$|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1$ và $\\vec{i} \\cdot \\vec{j} = \\vec{j} \\cdot \\vec{k} = \\vec{k} \\cdot \\vec{i} = 0$",
            "$|\\vec{i}| = 1, |\\vec{j}| = 2, |\\vec{k}| = 3$",
            "$\\vec{i} + \\vec{j} + \\vec{k} = \\vec{0}$",
            "$\\vec{i} \\cdot \\vec{j} = 1$"
          ],
          correctIndex: 0,
          hint: "Các vectơ đơn vị có độ dài bằng 1 và đôi một vuông góc nên tích vô hướng bằng 0.",
          explain: "Rất giỏi! Ba vectơ đơn vị có độ dài chuẩn hoá bằng 1 và vì ba trục đôi một vuông góc nên tích vô hướng giữa hai vectơ bất kì bằng 0."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Định nghĩa hệ trục toạ độ Đề-các vuông góc trong không gian",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 12 - Trang 60:</div>
              <p>Trong không gian, xét ba trục $Ox, Oy, Oz$ đôi một vuông góc với nhau tại gốc $O$ của mỗi trục. Gọi $\\vec{i}, \\vec{j}, \\vec{k}$ lần lượt là các vectơ đơn vị trên các trục $Ox, Oy, Oz$.</p>
              <ul class="sgk-box-list">
                <li>Hệ ba trục như vậy được gọi là <strong>hệ trục toạ độ Đề-các vuông góc $Oxyz$</strong> trong không gian, hay đơn giản là <strong>hệ toạ độ $Oxyz$</strong>.</li>
                <li>Điểm $O$ gọi là <strong>gốc toạ độ</strong>.</li>
                <li>$Ox$ gọi là <strong>trục hoành</strong>, $Oy$ gọi là <strong>trục tung</strong>, $Oz$ gọi là <strong>trục cao</strong>.</li>
                <li>Các mặt phẳng đi qua hai trong ba trục toạ độ gọi là các <strong>mặt phẳng toạ độ</strong>: mặt phẳng $(Oxy)$, mặt phẳng $(Oyz)$ và mặt phẳng $(Ozx)$. Ba mặt phẳng này đôi một vuông góc với nhau.</li>
              </ul>
              <p>Không gian với hệ toạ độ $Oxyz$ còn được gọi là <strong>không gian $Oxyz$</strong>.</p>
            </div>

            <!-- Đồ họa TikZ SVG 3D Hệ trục Oxyz -->
            <div class="tikz-svg-card">
              <div class="tikz-svg-title"><i class="fa-solid fa-arrows-to-dot"></i> Mô hình hình học 3D: Hệ trục toạ độ Đề-các vuông góc Oxyz</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="460" height="250" viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-axis-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                    </marker>
                    <marker id="arr-vec-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                    </marker>
                  </defs>

                  <!-- Mặt phẳng toạ độ Oxy mờ -->
                  <polygon points="190,150 70,225 290,225 410,150" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.2" stroke-dasharray="4,4"/>
                  <text x="350" y="215" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#0284c7">(Oxy)</text>

                  <!-- Gốc O -->
                  <circle cx="190" cy="150" r="4.5" fill="#0f172a"/>
                  <text x="170" y="165" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" fill="#0f172a">O</text>

                  <!-- Trục Oz thẳng đứng -->
                  <line x1="190" y1="150" x2="190" y2="25" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-axis-blue)"/>
                  <text x="200" y="32" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" font-style="italic" fill="#0284c7">z (Trục cao)</text>

                  <!-- Trục Oy nằm ngang sang phải -->
                  <line x1="190" y1="150" x2="410" y2="150" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-axis-blue)"/>
                  <text x="420" y="155" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" font-style="italic" fill="#0284c7">y (Trục tung)</text>

                  <!-- Trục Ox hướng xéo xuống trái -->
                  <line x1="190" y1="150" x2="70" y2="225" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-axis-blue)"/>
                  <text x="45" y="235" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" font-style="italic" fill="#0284c7">x (Trục hoành)</text>

                  <!-- Vectơ đơn vị i trên Ox -->
                  <line x1="190" y1="150" x2="135" y2="184" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-vec-red)"/>
                  <text x="145" y="202" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#dc2626">i</text>

                  <!-- Vectơ đơn vị j trên Oy -->
                  <line x1="190" y1="150" x2="255" y2="150" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-vec-red)"/>
                  <text x="235" y="140" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#dc2626">j</text>

                  <!-- Vectơ đơn vị k trên Oz -->
                  <line x1="190" y1="150" x2="190" y2="85" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-vec-red)"/>
                  <text x="202" y="110" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#dc2626">k</text>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình 2.35 SGK: Hệ toạ độ Oxyz ba chiều với ba trục đôi một vuông góc và các vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$</em>
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 1 (SGK trang 61): Đọc toạ độ các đỉnh trong hệ trục toạ độ",
            problem: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có các đỉnh $A(0;0;0), B(a;0;0), D(0;b;0), A'(0;0;c)$ với $a, b, c > 0$. Hãy xác định toạ độ của đỉnh $C$ và đỉnh $C'$.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <ul>
                <li>Đáy $ABCD$ nằm trên mặt phẳng toạ độ $(Oxy)$ với gốc $A \\equiv O$. Vì $ABCD$ là hình chữ nhật nên đỉnh $C$ có hoành độ bằng hoành độ của $B$ ($x_C = a$), tung độ bằng tung độ của $D$ ($y_C = b$) và cao độ $z_C = 0$. Vậy $C(a; b; 0)$.</li>
                <li>Đỉnh $C'$ nằm thẳng đứng phía trên đỉnh $C$ với độ cao bằng $c$, do đó toạ độ của đỉnh $C'$ là $C'(a; b; c)$.</li>
              </ul>
            `,
            teacherGuidance: "Mẹo của Thầy Sáng: Điểm nằm trong mặt phẳng toạ độ nào thì chỉ mang các thành phần của mặt phẳng đó; toạ độ còn lại bằng 0 (ví dụ điểm trên $(Oxy)$ thì cao độ $z = 0$)."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2: TOẠ ĐỘ CỦA MỘT ĐIỂM TRONG KHÔNG GIAN
    // -----------------------------------------------------------------------
    {
      num: "2",
      title: "TOẠ ĐỘ CỦA MỘT ĐIỂM TRONG KHÔNG GIAN",
      audioUrl: "assets/audio/b7_sec2.mp3",
      buttonLabel: "Nghe thầy Sáng giảng Mục 2",
      checkpoints: [
        {
          id: "poi-12-7-2-1",
          time: 9,
          title: "Điểm dừng 1: Mối liên hệ vectơ OM và toạ độ điểm M",
          question: "Trong không gian $Oxyz$, cho điểm $M$ thoả mãn $\\vec{OM} = 3\\vec{i} - 2\\vec{j} + 4\\vec{k}$. Toạ độ của điểm $M$ là:",
          options: [
            "$M(3; -2; 4)$",
            "$M(-3; 2; -4)$",
            "$M(3; 2; 4)$",
            "$M(4; -2; 3)$"
          ],
          correctIndex: 0,
          hint: "Toạ độ của điểm M chính là bộ ba hệ số trước các vectơ đơn vị i, j, k.",
          explain: "Chính xác! $\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\Leftrightarrow M(x; y; z)$. Do đó $M(3; -2; 4)$."
        },
        {
          id: "poi-12-7-2-2",
          time: 19,
          title: "Điểm dừng 2: Hình chiếu vuông góc lên mặt phẳng toạ độ",
          question: "Hình chiếu vuông góc của điểm $M(2; -3; 5)$ lên mặt phẳng toạ độ $(Oxy)$ là điểm nào?",
          options: [
            "$M_1(2; -3; 0)$",
            "$M_2(2; 0; 5)$",
            "$M_3(0; -3; 5)$",
            "$M_4(0; 0; 5)$"
          ],
          correctIndex: 0,
          hint: "Chiếu lên mặt phẳng (Oxy) thì giữ nguyên x, y và cho cao độ z = 0.",
          explain: "Rất chuẩn! Chiếu lên mặt phẳng $(Oxy)$ thì giữ nguyên hoành độ và tung độ, còn cao độ triệt tiêu bằng 0: $M_1(2; -3; 0)$."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Định nghĩa toạ độ của điểm và toạ độ các hình chiếu vuông góc",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 12 - Trang 61:</div>
              <p>Trong không gian $Oxyz$, cho một điểm $M$ tuỳ ý. Bộ ba số $(x; y; z)$ duy nhất sao cho:</p>
              <div style="text-align: center; font-size: 1.15rem; font-weight: 700; color: #1e3a8a; margin: 10px 0;">
                $$\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$$
              </div>
              <p>được gọi là <strong>toạ độ của điểm $M$</strong> đối với hệ toạ độ $Oxyz$, kí hiệu là $M(x; y; z)$ hay $M = (x; y; z)$.</p>
              <ul class="sgk-box-list">
                <li>$x$ là <strong>hoành độ</strong>, $y$ là <strong>tung độ</strong>, $z$ là <strong>cao độ</strong> của điểm $M$.</li>
                <li>Gốc toạ độ $O$ có toạ độ là $O(0; 0; 0)$.</li>
              </ul>
              <div style="margin-top: 10px; background: #eff6ff; padding: 10px 14px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <strong>Toạ độ hình chiếu vuông góc của $M(x; y; z)$ (SGK trang 62):</strong>
                <ul>
                  <li>Chiếu lên các mặt phẳng toạ độ: $(Oxy) \\implies M_1(x; y; 0)$, $(Oyz) \\implies M_2(0; y; z)$, $(Ozx) \\implies M_3(x; 0; z)$.</li>
                  <li>Chiếu lên các trục toạ độ: $Ox \\implies M_x(x; 0; 0)$, $Oy \\implies M_y(0; y; 0)$, $Oz \\implies M_z(0; 0; z)$.</li>
                </ul>
              </div>
            </div>

            <!-- Đồ họa TikZ SVG 3D Chiếu điểm M -->
            <div class="tikz-svg-card">
              <div class="tikz-svg-title"><i class="fa-solid fa-cube"></i> Hình 2.36 SGK: Hình chiếu vuông góc của điểm M(x; y; z) trong không gian Oxyz</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="460" height="260" viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-b7-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                    </marker>
                    <marker id="arr-b7-om" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                    </marker>
                  </defs>

                  <!-- Ba trục toạ độ -->
                  <line x1="160" y1="170" x2="160" y2="25" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-b7-arrow)"/>
                  <text x="170" y="30" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" font-style="italic" fill="#0284c7">z</text>

                  <line x1="160" y1="170" x2="400" y2="170" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-b7-arrow)"/>
                  <text x="410" y="175" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" font-style="italic" fill="#0284c7">y</text>

                  <line x1="160" y1="170" x2="60" y2="235" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-b7-arrow)"/>
                  <text x="45" y="240" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" font-style="italic" fill="#0284c7">x</text>

                  <!-- Gốc O -->
                  <circle cx="160" cy="170" r="4" fill="#0f172a"/>
                  <text x="140" y="180" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#0f172a">O</text>

                  <!-- Toạ độ Mx, My, Mz -->
                  <circle cx="100" cy="209" r="3.5" fill="#0284c7"/>
                  <text x="75" y="215" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#0284c7">M_x(x;0;0)</text>

                  <circle cx="280" cy="170" r="3.5" fill="#0284c7"/>
                  <text x="275" y="190" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#0284c7">M_y(0;y;0)</text>

                  <circle cx="160" cy="70" r="3.5" fill="#0284c7"/>
                  <text x="100" y="75" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#0284c7">M_z(0;0;z)</text>

                  <!-- Hình chiếu M' trên (Oxy) -->
                  <circle cx="220" cy="209" r="4" fill="#0284c7"/>
                  <text x="225" y="225" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#0284c7">M'(x; y; 0)</text>

                  <!-- Điểm M trong không gian -->
                  <circle cx="220" cy="109" r="5" fill="#dc2626"/>
                  <text x="230" y="105" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" fill="#dc2626">M(x; y; z)</text>

                  <!-- Nét đứt hộp không gian -->
                  <line x1="100" y1="209" x2="220" y2="209" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                  <line x1="280" y1="170" x2="220" y2="209" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                  <line x1="220" y1="209" x2="220" y2="109" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                  <line x1="160" y1="70" x2="220" y2="109" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

                  <!-- Vectơ OM đỏ -->
                  <line x1="160" y1="170" x2="216" y2="114" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-b7-om)"/>
                  <text x="175" y="130" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#dc2626">\\vec{OM}</text>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình chiếu vuông góc của điểm $M$ lên các trục và các mặt phẳng toạ độ tuân theo quy tắc hình hộp chữ nhật</em>
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 2 & 3 (SGK trang 62): Xác định toạ độ hình chiếu vuông góc",
            problem: "Trong không gian $Oxyz$, cho điểm $A(3; -4; 5)$. Hãy tìm toạ độ hình chiếu vuông góc của điểm $A$ lên:\\n1) Mặt phẳng $(Oxy)$;\\n2) Mặt phẳng $(Oyz)$;\\n3) Trục cao $Oz$.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <ul>
                <li>1) Hình chiếu của $A$ lên mặt phẳng $(Oxy)$ là $A'(3; -4; 0)$ (giữ nguyên $x, y$ và triệt tiêu $z = 0$).</li>
                <li>2) Hình chiếu của $A$ lên mặt phẳng $(Oyz)$ là $A''(0; -4; 5)$ (giữ nguyên $y, z$ và triệt tiêu $x = 0$).</li>
                <li>3) Hình chiếu của $A$ lên trục cao $Oz$ là $A_3(0; 0; 5)$ (giữ nguyên $z$ và triệt tiêu $x = 0, y = 0$).</li>
              </ul>
            `,
            teacherGuidance: "Bí quyết giải nhanh của Thầy Sáng: 'Chiếu lên đâu thì giữ nguyên thành phần đó, còn lại cho bằng 0'!"
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3: TOẠ ĐỘ CỦA VECTƠ TRONG KHÔNG GIAN
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "TOẠ ĐỘ CỦA VECTƠ TRONG KHÔNG GIAN",
      audioUrl: "assets/audio/b7_sec3.mp3",
      buttonLabel: "Nghe thầy Sáng giảng Mục 3",
      checkpoints: [
        {
          id: "poi-12-7-3-1",
          time: 9,
          title: "Điểm dừng 1: Toạ độ các vectơ đơn vị đặc biệt",
          question: "Trong không gian $Oxyz$, toạ độ của vectơ đơn vị $\\vec{j}$ trên trục tung $Oy$ là:",
          options: [
            "$\\vec{j} = (0; 1; 0)$",
            "$\\vec{j} = (1; 0; 0)$",
            "$\\vec{j} = (0; 0; 1)$",
            "$\\vec{j} = (1; 1; 0)$"
          ],
          correctIndex: 0,
          hint: "Trục tung Oy tương ứng với tung độ y = 1, hoành độ x = 0 và cao độ z = 0.",
          explain: "Chính xác! $\\vec{i} = (1; 0; 0)$, $\\vec{j} = (0; 1; 0)$, $\\vec{k} = (0; 0; 1)$ và vectơ-không $\\vec{0} = (0; 0; 0)$."
        },
        {
          id: "poi-12-7-3-2",
          time: 20,
          title: "Điểm dừng 2: Điều kiện hai vectơ bằng nhau",
          question: "Cho hai vectơ $\\vec{u} = (x; y; z)$ và $\\vec{v} = (x'; y'; z')$. Hai vectơ $\\vec{u} = \\vec{v}$ khi và chỉ khi:",
          options: [
            "$x = x', y = y', z = z'$",
            "$x + y + z = x' + y' + z'$",
            "$x = y = z$",
            "$x \\cdot x' + y \\cdot y' + z \\cdot z' = 0$"
          ],
          correctIndex: 0,
          hint: "Hai vectơ bằng nhau khi các toạ độ tương ứng đôi một bằng nhau.",
          explain: "Rất chuẩn! Hai vectơ bằng nhau khi và chỉ khi hoành độ bằng hoành độ, tung độ bằng tung độ, và cao độ bằng cao độ."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Định nghĩa toạ độ vectơ và điều kiện hai vectơ bằng nhau",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 12 - Trang 63:</div>
              <p>Trong không gian $Oxyz$, cho vectơ $\\vec{a}$ tuỳ ý. Bộ ba số $(x; y; z)$ duy nhất sao cho:</p>
              <div style="text-align: center; font-size: 1.15rem; font-weight: 700; color: #1e3a8a; margin: 10px 0;">
                $$\\vec{a} = x\\vec{i} + y\\vec{j} + z\\vec{k}$$
              </div>
              <p>được gọi là <strong>toạ độ của vectơ $\\vec{a}$</strong> đối với hệ toạ độ $Oxyz$, kí hiệu là $\\vec{a} = (x; y; z)$ hay $\\vec{a}(x; y; z)$.</p>
              <ul class="sgk-box-list">
                <li>$x$ là hoành độ, $y$ là tung độ, $z$ là cao độ của vectơ $\\vec{a}$.</li>
                <li>Toạ độ của các vectơ đặc biệt: $\\vec{i} = (1; 0; 0)$, $\\vec{j} = (0; 1; 0)$, $\\vec{k} = (0; 0; 1)$, $\\vec{0} = (0; 0; 0)$.</li>
              </ul>
              <div style="margin-top: 10px; background: #fefce8; padding: 10px 14px; border-radius: 8px; border-left: 4px solid #eab308;">
                <strong>Điều kiện hai vectơ bằng nhau:</strong>
                <p>Cho $\\vec{u} = (x; y; z)$ và $\\vec{v} = (x'; y'; z')$. Khi đó:</p>
                $$\\vec{u} = \\vec{v} \\iff \\begin{cases} x = x' \\\\ y = y' \\\\ z = z' \\end{cases}$$
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 4 (SGK trang 63): Tìm toạ độ vectơ và xác định tham số để hai vectơ bằng nhau",
            problem: "Trong không gian $Oxyz$:\\n1) Tìm toạ độ của vectơ $\\vec{u} = 3\\vec{i} - 5\\vec{k}$;\\n2) Cho $\\vec{a} = (2; m - 1; 3)$ và $\\vec{b} = (n + 1; 4; 3)$. Tìm $m, n$ để $\\vec{a} = \\vec{b}$.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <ul>
                <li>1) Ta có $\\vec{u} = 3\\vec{i} + 0\\vec{j} - 5\\vec{k}$. Do đó $\\vec{u} = (3; 0; -5)$.</li>
                <li>2) Để $\\vec{a} = \\vec{b}$ thì:
                  $$\\begin{cases} 2 = n + 1 \\\\ m - 1 = 4 \\\\ 3 = 3 \\end{cases} \\iff \\begin{cases} n = 1 \\\\ m = 5 \\end{cases}$$
                  Vậy $m = 5$ và $n = 1$.
                </li>
              </ul>
            `,
            teacherGuidance: "Lưu ý quan trọng: Thiếu thành phần vectơ đơn vị nào thì toạ độ tương ứng bằng 0 (ví dụ trong $\\vec{u}$ khuyết $\\vec{j}$ nên tung độ $y = 0$)."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4: LIÊN HỆ TOẠ ĐỘ ĐIỂM VÀ TOẠ ĐỘ VECTƠ
    // -----------------------------------------------------------------------
    {
      num: "4",
      title: "LIÊN HỆ TOẠ ĐỘ ĐIỂM VÀ TOẠ ĐỘ VECTƠ",
      audioUrl: "assets/audio/b7_sec4.mp3",
      buttonLabel: "Nghe thầy Sáng giảng Mục 4",
      checkpoints: [
        {
          id: "poi-12-7-4-1",
          time: 11,
          title: "Điểm dừng 1: Công thức toạ độ vectơ qua hai điểm",
          question: "Trong không gian $Oxyz$, cho $A(1; 2; 3)$ và $B(4; 0; -1)$. Toạ độ của vectơ $\\vec{AB}$ là:",
          options: [
            "$\\vec{AB} = (3; -2; -4)$",
            "$\\vec{AB} = (-3; 2; 4)$",
            "$\\vec{AB} = (5; 2; 2)$",
            "$\\vec{AB} = (4; 0; -3)$"
          ],
          correctIndex: 0,
          hint: "Toạ độ véctơ AB = Toạ độ điểm ngọn B trừ Toạ độ điểm gốc A.",
          explain: "Chính xác! $\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (4 - 1; 0 - 2; -1 - 3) = (3; -2; -4)$."
        },
        {
          id: "poi-12-7-4-2",
          time: 23,
          title: "Điểm dừng 2: Toạ độ trung điểm và toạ độ trọng tâm",
          question: "Cho đoạn thẳng $AB$ có $A(2; 4; -1)$ và $B(4; -2; 5)$. Toạ độ trung điểm $I$ của đoạn thẳng $AB$ là:",
          options: [
            "$I(3; 1; 2)$",
            "$I(6; 2; 4)$",
            "$I(2; -6; 6)$",
            "$I(1; 3; -3)$"
          ],
          correctIndex: 0,
          hint: "Toạ độ trung điểm bằng trung bình cộng toạ độ hai đầu mút: (xA + xB)/2, ...",
          explain: "Rất chuẩn! $x_I = (2 + 4)/2 = 3$, $y_I = (4 - 2)/2 = 1$, $z_I = (-1 + 5)/2 = 2$. Vậy $I(3; 1; 2)$."
        }
      ],
      subsections: [
        {
          key: "4a",
          title: "Vectơ qua hai điểm, toạ độ trung điểm và trọng tâm tam giác",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 12 - Trang 64:</div>
              <p>Trong không gian $Oxyz$, cho hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$. Ta có:</p>
              <div style="text-align: center; font-size: 1.15rem; font-weight: 700; color: #1e3a8a; margin: 10px 0;">
                $$\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$$
              </div>
              <ul class="sgk-box-list">
                <li><strong>Toạ độ trung điểm $I$ của đoạn thẳng $AB$:</strong>
                  $$x_I = \\frac{x_A + x_B}{2}, \\quad y_I = \\frac{y_A + y_B}{2}, \\quad z_I = \\frac{z_A + z_B}{2}$$
                </li>
                <li><strong>Toạ độ trọng tâm $G$ của tam giác $ABC$ với $C(x_C; y_C; z_C)$:</strong>
                  $$x_G = \\frac{x_A + x_B + x_C}{3}, \\quad y_G = \\frac{y_A + y_B + y_C}{3}, \\quad z_G = \\frac{z_A + z_B + z_C}{3}$$
                </li>
              </ul>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 5 (SGK trang 64): Tìm toạ độ đỉnh thứ tư của hình bình hành",
            problem: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 0), B(-1; 1; 3), C(0; -2; 5)$.\\n1) Tìm toạ độ trọng tâm $G$ của tam giác $ABC$;\\n2) Tìm toạ độ điểm $D$ để tứ giác $ABCD$ là hình bình hành.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <ul>
                <li>1) Toạ độ trọng tâm $G$:
                  $$x_G = \\frac{1 + (-1) + 0}{3} = 0, \\quad y_G = \\frac{2 + 1 + (-2)}{3} = \\frac{1}{3}, \\quad z_G = \\frac{0 + 3 + 5}{3} = \\frac{8}{3} \\implies G\\left(0; \\frac{1}{3}; \\frac{8}{3}\\right)$$
                </li>
                <li>2) Để $ABCD$ là hình bình hành thì $\\vec{AD} = \\vec{BC}$.<br>
                  Ta có $\\vec{BC} = (0 - (-1); -2 - 1; 5 - 3) = (1; -3; 2)$.<br>
                  Gọi $D(x; y; z)$, ta có $\\vec{AD} = (x - 1; y - 2; z - 0)$.<br>
                  Do đó:
                  $$\\begin{cases} x - 1 = 1 \\\\ y - 2 = -3 \\\\ z = 2 \\end{cases} \\iff \\begin{cases} x = 2 \\\\ y = -1 \\\\ z = 2 \\end{cases} \\implies D(2; -1; 2)$$
                </li>
              </ul>
            `,
            teacherGuidance: "Bí quyết của Thầy Sáng: Nhớ quy tắc vectơ bằng nhau trong hình bình hành: $\\vec{AD} = \\vec{BC}$ (hoặc dùng tính chất hai đường chéo cắt nhau tại trung điểm mỗi đường)."
          }
        }
      ]
    }
  ],

  // Chốt bài học
  realworldWrapup: {
    title: "PHẦN IV. CHỐT BÀI HỌC VÀ VẬN DỤNG THỰC TIỄN",
    recap: "Trở lại bài toán mở đầu: Khi chọn hệ toạ độ Oxyz với gốc O là góc phòng trên mặt sàn, hai trục Ox, Oy lần lượt dọc theo hai mép tường và trục Oz hướng thẳng đứng, vị trí chiếc bóng đèn treo được xác định chính xác bởi điểm M(1; 1,5; 2). Khoảng cách từ bóng đèn đến góc phòng O chính là độ dài đoạn thẳng OM: OM = căn bậc hai của 1 bình phương cộng 1,5 bình phương cộng 2 bình phương, xấp xỉ 2,69 mét.",
    takeaway: "Hệ toạ độ không gian Oxyz chính là ngôn ngữ toán học nền tảng kết nối hình học thuần tuý với thế giới đại số số hoá, làm nền móng cho đồ hoạ máy tính 3D, định vị GPS vệ tinh, và điều khiển robot công nghiệp.",
    solution: `
      <p>Trở lại Bài toán dẫn nhập: Chọn hệ trục toạ độ $Oxyz$ với gốc $O$ đặt tại góc phòng trên mặt sàn, trục $Ox$ dọc theo mép sàn thứ nhất, trục $Oy$ dọc theo mép sàn thứ hai vuông góc với $Ox$, và trục $Oz$ hướng thẳng đứng lên trần nhà.</p>
      <div style="text-align: center; font-size: 1.25rem; font-weight: bold; margin: 12px 0; color: #1e3a8a;">
        $$M(1;\\, 1{,}5;\\, 2) \\implies \\vec{OM} = 1\\vec{i} + 1{,}5\\vec{j} + 2\\vec{k}$$
      </div>
      <p>Khoảng cách từ chiếc bóng đèn đến góc phòng $O$ chính là độ dài của vectơ $\\vec{OM}$:</p>
      <div style="text-align: center; font-size: 1.2rem; font-weight: bold; margin: 10px 0; color: #047857;">
        $$OM = |\\vec{OM}| = \\sqrt{1^2 + 1{,}5^2 + 2^2} = \\sqrt{1 + 2{,}25 + 4} = \\sqrt{7{,}25} \\approx 2{,}69\\text{ m}$$
      </div>
      <p>Nhờ hệ toạ độ $Oxyz$, vị trí của mọi vật thể trong không gian thực tế được số hoá chính xác, phục vụ thiết kế xây dựng, đồ hoạ 3D và điều khiển tự động.</p>
    `,
    audioUrl: "assets/audio/b7_wrapup.mp3",
    buttonLabel: "Nghe thầy Sáng chốt bài học"
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2025)
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2025 BỘ GD&ĐT)",

    // DẠNG 1: 5 CÂU NHIỀU LỰA CHỌN (NHẬN BIẾT)
    part1MultipleChoice: [
      {
        id: "mc-12-7-1",
        num: 1,
        level: "Nhận biết",
        prompt: "Trong không gian $Oxyz$, cho vectơ $\\vec{u} = 2\\vec{i} - 3\\vec{j} + 5\\vec{k}$. Toạ độ của vectơ $\\vec{u}$ là:",
        options: [
          "A. $(2; -3; 5)$",
          "B. $(2; 3; 5)$",
          "C. $(-3; 2; 5)$",
          "D. $(5; -3; 2)$"
        ],
        correctIndex: 0,
        solution: "Theo định nghĩa toạ độ của vectơ: $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\iff \\vec{u} = (x; y; z)$. Do đó $\\vec{u} = (2; -3; 5)$. Chọn A.",
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, cho vectơ $\\vec{v} = -4\\vec{i} + \\vec{j} - 6\\vec{k}$. Toạ độ của vectơ $\\vec{v}$ là:",
          options: [
            "A. $(-4; 1; -6)$",
            "B. $(4; -1; 6)$",
            "C. $(-4; 0; -6)$",
            "D. $(1; -4; -6)$"
          ],
          correctIndex: 0,
          solution: "Ta có $\\vec{v} = -4\\vec{i} + 1\\vec{j} - 6\\vec{k} \\implies \\vec{v} = (-4; 1; -6)$. Chọn A."
        }
      },
      {
        id: "mc-12-7-2",
        num: 2,
        level: "Nhận biết",
        prompt: "Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $M(3; -2; 7)$ lên mặt phẳng toạ độ $(Oxy)$ có toạ độ là:",
        options: [
          "A. $(3; -2; 0)$",
          "B. $(3; 0; 7)$",
          "C. $(0; -2; 7)$",
          "D. $(0; 0; 7)$"
        ],
        correctIndex: 0,
        solution: "Hình chiếu vuông góc của điểm $M(x; y; z)$ lên mặt phẳng $(Oxy)$ là $M_1(x; y; 0)$. Do đó toạ độ hình chiếu là $(3; -2; 0)$. Chọn A.",
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $P(-5; 4; 9)$ lên trục cao $Oz$ có toạ độ là:",
          options: [
            "A. $(0; 0; 9)$",
            "B. $(-5; 0; 0)$",
            "C. $(0; 4; 0)$",
            "D. $(-5; 4; 0)$"
          ],
          correctIndex: 0,
          solution: "Hình chiếu vuông góc của điểm lên trục $Oz$ có $x = 0, y = 0$ và giữ nguyên $z$: $(0; 0; 9)$. Chọn A."
        }
      },
      {
        id: "mc-12-7-3",
        num: 3,
        level: "Nhận biết",
        prompt: "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -3)$ và $B(3; 0; 1)$. Toạ độ của vectơ $\\vec{AB}$ là:",
        options: [
          "A. $(2; -2; 4)$",
          "B. $(-2; 2; -4)$",
          "C. $(4; 2; -2)$",
          "D. $(2; 1; -1)$"
        ],
        correctIndex: 0,
        solution: "Ta có $\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (3 - 1; 0 - 2; 1 - (-3)) = (2; -2; 4)$. Chọn A.",
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, cho hai điểm $M(2; -1; 4)$ và $N(5; 2; 1)$. Toạ độ của vectơ $\\vec{MN}$ là:",
          options: [
            "A. $(3; 3; -3)$",
            "B. $(-3; -3; 3)$",
            "C. $(7; 1; 5)$",
            "D. $(3; 1; -3)$"
          ],
          correctIndex: 0,
          solution: "$\\vec{MN} = (5 - 2; 2 - (-1); 1 - 4) = (3; 3; -3)$. Chọn A."
        }
      },
      {
        id: "mc-12-7-4",
        num: 4,
        level: "Nhận biết",
        prompt: "Trong không gian $Oxyz$, cho đoạn thẳng $AB$ với $A(-2; 3; 4)$ và $B(4; 1; -2)$. Toạ độ trung điểm $I$ của đoạn thẳng $AB$ là:",
        options: [
          "A. $(1; 2; 1)$",
          "B. $(2; 4; 2)$",
          "C. $(3; -1; -3)$",
          "D. $(6; -2; -6)$"
        ],
        correctIndex: 0,
        solution: "Toạ độ trung điểm: $x_I = \\frac{-2 + 4}{2} = 1, y_I = \\frac{3 + 1}{2} = 2, z_I = \\frac{4 + (-2)}{2} = 1 \\implies I(1; 2; 1)$. Chọn A.",
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, cho đoạn thẳng $CD$ với $C(3; -5; 1)$ và $D(1; 1; 7)$. Toạ độ trung điểm $M$ của đoạn thẳng $CD$ là:",
          options: [
            "A. $(2; -2; 4)$",
            "B. $(4; -4; 8)$",
            "C. $(1; -3; 3)$",
            "D. $(2; -3; 4)$"
          ],
          correctIndex: 0,
          solution: "$x_M = (3+1)/2 = 2, y_M = (-5+1)/2 = -2, z_M = (1+7)/2 = 4 \\implies M(2; -2; 4)$. Chọn A."
        }
      },
      {
        id: "mc-12-7-5",
        num: 5,
        level: "Nhận biết",
        prompt: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 0; 2), B(-2; 3; 1), C(4; 3; 3)$. Toạ độ trọng tâm $G$ của tam giác $ABC$ là:",
        options: [
          "A. $(1; 2; 2)$",
          "B. $(3; 6; 6)$",
          "C. $(1; 3; 2)$",
          "D. $(0; 2; 2)$"
        ],
        correctIndex: 0,
        solution: "Toạ độ trọng tâm: $x_G = \\frac{1 + (-2) + 4}{3} = 1, y_G = \\frac{0 + 3 + 3}{3} = 2, z_G = \\frac{2 + 1 + 3}{3} = 2 \\implies G(1; 2; 2)$. Chọn A.",
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, cho tam giác $MNP$ có $M(2; 1; -1), N(0; 4; 2), P(4; 1; 2)$. Toạ độ trọng tâm $G$ của tam giác $MNP$ là:",
          options: [
            "A. $(2; 2; 1)$",
            "B. $(6; 6; 3)$",
            "C. $(2; 3; 1)$",
            "D. $(3; 2; 1)$"
          ],
          correctIndex: 0,
          solution: "$x_G = (2+0+4)/3 = 2, y_G = (1+4+1)/3 = 2, z_G = (-1+2+2)/3 = 1 \\implies G(2; 2; 1)$. Chọn A."
        }
      }
    ],

    // DẠNG 2: 3 CÂU TRẮC NGHIỆM ĐÚNG / SAI 4 Ý (THÔNG HIỂU)
    part2TrueFalse: [
      {
        id: "tf-12-7-1",
        num: 1,
        level: "Thông hiểu",
        prompt: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 3), B(2; 1; 0), C(3; 0; -3)$. Xét tính Đúng / Sai của các mệnh đề sau:",
        items: [
          {
            label: "a",
            key: "a",
            text: "Toạ độ của vectơ $\\vec{AB}$ là $(1; -1; -3)$",
            statement: "Toạ độ của vectơ $\\vec{AB}$ là $(1; -1; -3)$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, $\\vec{AB} = (2 - 1; 1 - 2; 0 - 3) = (1; -1; -3)$."
          },
          {
            label: "b",
            key: "b",
            text: "Toạ độ của vectơ $\\vec{BC}$ là $(1; -1; -3)$",
            statement: "Toạ độ của vectơ $\\vec{BC}$ là $(1; -1; -3)$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, $\\vec{BC} = (3 - 2; 0 - 1; -3 - 0) = (1; -1; -3)$."
          },
          {
            label: "c",
            key: "c",
            text: "Ba điểm $A, B, C$ tạo thành ba đỉnh của một tam giác",
            statement: "Ba điểm $A, B, C$ tạo thành ba đỉnh của một tam giác",
            isTrue: false,
            isCorrect: false,
            explain: "Sai, vì $\\vec{AB} = \\vec{BC}$ nên ba điểm $A, B, C$ thẳng hàng, không thể tạo thành tam giác."
          },
          {
            label: "d",
            key: "d",
            text: "Điểm $B$ là trung điểm của đoạn thẳng $AC$",
            statement: "Điểm $B$ là trung điểm của đoạn thẳng $AC$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, vì $\\vec{AB} = \\vec{BC}$ nên $B$ chính là trung điểm của đoạn thẳng $AC$."
          }
        ],
        solution: "Ý a, b đúng theo công thức tính toạ độ vectơ qua hai điểm. Ý c sai vì $\\vec{AB} = \\vec{BC}$ nên 3 điểm thẳng hàng. Ý d đúng vì $B$ là trung điểm $AC$.",
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, cho ba điểm $M(2; 0; 1), N(3; 2; -1), P(4; 4; -3)$. Xét tính Đúng / Sai của các mệnh đề sau:",
          items: [
            {
              label: "a",
              key: "a",
              text: "Toạ độ của vectơ $\\vec{MN}$ là $(1; 2; -2)$",
              statement: "Toạ độ của vectơ $\\vec{MN}$ là $(1; 2; -2)$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $\\vec{MN} = (3 - 2; 2 - 0; -1 - 1) = (1; 2; -2)$."
            },
            {
              label: "b",
              key: "b",
              text: "Toạ độ của vectơ $\\vec{NP}$ là $(1; 2; -2)$",
              statement: "Toạ độ của vectơ $\\vec{NP}$ là $(1; 2; -2)$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $\\vec{NP} = (4 - 3; 4 - 2; -3 - (-1)) = (1; 2; -2)$."
            },
            {
              label: "c",
              key: "c",
              text: "Ba điểm $M, N, P$ là ba đỉnh của tam giác cân",
              statement: "Ba điểm $M, N, P$ là ba đỉnh của tam giác cân",
              isTrue: false,
              isCorrect: false,
              explain: "Sai, vì $\\vec{MN} = \\vec{NP}$ nên ba điểm $M, N, P$ thẳng hàng."
            },
            {
              label: "d",
              key: "d",
              text: "Điểm $N$ là trung điểm của đoạn thẳng $MP$",
              statement: "Điểm $N$ là trung điểm của đoạn thẳng $MP$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $N$ là trung điểm của $MP$."
            }
          ],
          solution: "Các ý a, b, d đúng. Ý c sai do 3 điểm thẳng hàng."
        }
      },
      {
        id: "tf-12-7-2",
        num: 2,
        level: "Thông hiểu",
        prompt: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 0; 2), B(-2; 1; 3), C(4; 2; 1)$. Xét tính Đúng / Sai của các mệnh đề sau:",
        items: [
          {
            label: "a",
            key: "a",
            text: "Trọng tâm $G$ của tam giác $ABC$ có toạ độ là $(1; 1; 2)$",
            statement: "Trọng tâm $G$ của tam giác $ABC$ có toạ độ là $(1; 1; 2)$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, $x_G = (1 - 2 + 4)/3 = 1, y_G = (0 + 1 + 2)/3 = 1, z_G = (2 + 3 + 1)/3 = 2 \\implies G(1; 1; 2)$."
          },
          {
            label: "b",
            key: "b",
            text: "Toạ độ của vectơ $\\vec{AB}$ là $(-3; 1; 1)$",
            statement: "Toạ độ của vectơ $\\vec{AB}$ là $(-3; 1; 1)$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, $\\vec{AB} = (-2 - 1; 1 - 0; 3 - 2) = (-3; 1; 1)$."
          },
          {
            label: "c",
            key: "c",
            text: "Điểm $D(7; 1; 0)$ thỏa mãn tứ giác $ABCD$ là hình bình hành",
            statement: "Điểm $D(7; 1; 0)$ thỏa mãn tứ giác $ABCD$ là hình bình hành",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, để $ABCD$ là hình bình hành thì $\\vec{AD} = \\vec{BC} = (6; 1; -2) \\implies D = A + \\vec{BC} = (7; 1; 0)$."
          },
          {
            label: "d",
            key: "d",
            text: "Gốc toạ độ $O$ nằm trong mặt phẳng $(ABC)$",
            statement: "Gốc toạ độ $O$ nằm trong mặt phẳng $(ABC)$",
            isTrue: false,
            isCorrect: false,
            explain: "Sai, điểm O(0; 0; 0) không đồng phẳng với 3 điểm A, B, C."
          }
        ],
        solution: "Ý a, b, c đúng. Ý d sai vì gốc toạ độ $O$ không thuộc mặt phẳng $(ABC)$.",
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, cho tam giác $MNP$ có $M(3; 1; 0), N(-1; 2; 4), P(1; 3; -1)$. Xét tính Đúng / Sai của các mệnh đề sau:",
          items: [
            {
              label: "a",
              key: "a",
              text: "Trọng tâm $G$ của tam giác $MNP$ có toạ độ là $(1; 2; 1)$",
              statement: "Trọng tâm $G$ của tam giác $MNP$ có toạ độ là $(1; 2; 1)$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $x_G = (3 - 1 + 1)/3 = 1, y_G = (1 + 2 + 3)/3 = 2, z_G = (0 + 4 - 1)/3 = 1 \\implies G(1; 2; 1)$."
            },
            {
              label: "b",
              key: "b",
              text: "Toạ độ của vectơ $\\vec{MN}$ là $(-4; 1; 4)$",
              statement: "Toạ độ của vectơ $\\vec{MN}$ là $(-4; 1; 4)$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $\\vec{MN} = (-1 - 3; 2 - 1; 4 - 0) = (-4; 1; 4)$."
            },
            {
              label: "c",
              key: "c",
              text: "Điểm $Q(5; 2; -5)$ thỏa mãn tứ giác $MNPQ$ là hình bình hành",
              statement: "Điểm $Q(5; 2; -5)$ thỏa mãn tứ giác $MNPQ$ là hình bình hành",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $\\vec{MQ} = \\vec{NP} = (2; 1; -5) \\implies Q = M + (2; 1; -5) = (5; 2; -5)$."
            },
            {
              label: "d",
              key: "d",
              text: "Tam giác $MNP$ có ba đỉnh đều nằm trên các mặt phẳng toạ độ",
              statement: "Tam giác $MNP$ có ba đỉnh đều nằm trên các mặt phẳng toạ độ",
              isTrue: false,
              isCorrect: false,
              explain: "Sai, chỉ có đỉnh M nằm trên (Oxy) vì z_M = 0; N và P không có toạ độ nào bằng 0."
            }
          ],
          solution: "Ý a, b, c đúng. Ý d sai vì N và P không thuộc các mặt phẳng toạ độ."
        }
      },
      {
        id: "tf-12-7-3",
        num: 3,
        level: "Thông hiểu",
        prompt: "Trong không gian $Oxyz$, cho điểm $M(2; -3; 4)$. Xét tính Đúng / Sai của các mệnh đề sau:",
        items: [
          {
            label: "a",
            key: "a",
            text: "Khoảng cách từ điểm $M$ đến mặt phẳng toạ độ $(Oxy)$ bằng $4$",
            statement: "Khoảng cách từ điểm $M$ đến mặt phẳng toạ độ $(Oxy)$ bằng $4$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, khoảng cách đến $(Oxy)$ bằng $|z_M| = |4| = 4$."
          },
          {
            label: "b",
            key: "b",
            text: "Hình chiếu vuông góc của điểm $M$ lên trục $Oy$ là điểm $N(0; -3; 0)$",
            statement: "Hình chiếu vuông góc của điểm $M$ lên trục $Oy$ là điểm $N(0; -3; 0)$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, chiếu lên $Oy$ thì $x = 0, z = 0 \\implies N(0; -3; 0)$."
          },
          {
            label: "c",
            key: "c",
            text: "Điểm đối xứng của điểm $M$ qua gốc toạ độ $O$ là $M'(-2; 3; -4)$",
            statement: "Điểm đối xứng của điểm $M$ qua gốc toạ độ $O$ là $M'(-2; 3; -4)$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, đối xứng qua gốc $O$ thì đổi dấu cả ba toạ độ: $(-x; -y; -z) = (-2; 3; -4)$."
          },
          {
            label: "d",
            key: "d",
            text: "Vectơ vị trí $\\vec{OM}$ có độ dài bằng $29$",
            statement: "Vectơ vị trí $\\vec{OM}$ có độ dài bằng $29$",
            isTrue: false,
            isCorrect: false,
            explain: "Sai, độ dài $|\\vec{OM}| = \\sqrt{2^2 + (-3)^2 + 4^2} = \\sqrt{29}$, không phải 29."
          }
        ],
        solution: "Ý a, b, c đúng. Ý d sai vì độ dài bằng $\\sqrt{29}$ chứ không phải 29.",
        similarVariation: {
          prompt: "Trong không gian $Oxyz$, cho điểm $K(-3; 4; -5)$. Xét tính Đúng / Sai của các mệnh đề sau:",
          items: [
            {
              label: "a",
              key: "a",
              text: "Khoảng cách từ điểm $K$ đến mặt phẳng toạ độ $(Oxz)$ bằng $4$",
              statement: "Khoảng cách từ điểm $K$ đến mặt phẳng toạ độ $(Oxz)$ bằng $4$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, khoảng cách đến $(Oxz)$ bằng $|y_K| = |4| = 4$."
            },
            {
              label: "b",
              key: "b",
              text: "Hình chiếu vuông góc của điểm $K$ lên trục $Oz$ là điểm $H(0; 0; -5)$",
              statement: "Hình chiếu vuông góc của điểm $K$ lên trục $Oz$ là điểm $H(0; 0; -5)$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, chiếu lên $Oz$ thì $x = 0, y = 0 \\implies H(0; 0; -5)$."
            },
            {
              label: "c",
              key: "c",
              text: "Điểm đối xứng của điểm $K$ qua gốc toạ độ $O$ là $K'(3; -4; 5)$",
              statement: "Điểm đối xứng của điểm $K$ qua gốc toạ độ $O$ là $K'(3; -4; 5)$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, đổi dấu cả 3 toạ độ: $(3; -4; 5)$."
            },
            {
              label: "d",
              key: "d",
              text: "Điểm $K$ nằm trong mặt phẳng toạ độ $(Oyz)$",
              statement: "Điểm $K$ nằm trong mặt phẳng toạ độ $(Oyz)$",
              isTrue: false,
              isCorrect: false,
              explain: "Sai, vì hoành độ $x_K = -3 \\neq 0$ nên điểm $K$ không thuộc mặt phẳng $(Oyz)$."
            }
          ],
          solution: "Ý a, b, c đúng. Ý d sai vì $x_K \\neq 0$."
        }
      }
    ],

    // DẠNG 3: 2 CÂU TRẢ LỜI NGẮN (TOÁN THỰC TẾ - VẬN DỤNG)
    part3ShortAnswer: [
      {
        id: "sa-12-7-1",
        num: 1,
        level: "Vận dụng",
        prompt: "Một chiếc bóng đèn được treo trong phòng ngủ có kích thước hình hộp chữ nhật. Chọn hệ toạ độ $Oxyz$ sao cho gốc $O$ là một góc phòng trên mặt sàn, trục $Ox$ và $Oy$ lần lượt chạy dọc theo hai mép chân tường, trục $Oz$ hướng thẳng đứng lên trần nhà (đơn vị: mét). Biết bóng đèn cách sàn nhà $2\\text{ m}$, cách bức tường thứ nhất $1\\text{ m}$ và cách bức tường thứ hai $1{,}5\\text{ m}$. Tính khoảng cách từ bóng đèn đến gốc toạ độ $O$ (kết quả tính theo mét, làm tròn đến chữ số thập phân thứ hai).",
        correctAnswer: "2.69",
        correctValue: "2.69",
        unit: "m",
        solution: `
          <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
          <ul>
            <li>Theo đề bài, bóng đèn có toạ độ $M(1; 1{,}5; 2)$.</li>
            <li>Khoảng cách từ bóng đèn $M$ đến gốc toạ độ $O(0; 0; 0)$ là:
              $$OM = \\sqrt{x_M^2 + y_M^2 + z_M^2} = \\sqrt{1^2 + 1{,}5^2 + 2^2} = \\sqrt{1 + 2{,}25 + 4} = \\sqrt{7{,}25} \\approx 2{,}69\\text{ (m)}$$
            </li>
          </ul>
        `,
        similarVariation: {
          prompt: "Một chiếc đèn trang trí được treo tại sảnh một toà nhà hình hộp chữ nhật. Trong hệ toạ độ $Oxyz$ gắn với sảnh (đơn vị: mét), chiếc đèn ở vị trí cách sàn nhà $3\\text{ m}$, cách tường thứ nhất $2\\text{ m}$ và cách tường thứ hai $2{,}5\\text{ m}$. Tính khoảng cách từ đèn đến góc sàn $O$ (làm tròn đến hai chữ số thập phân).",
          correctAnswer: "4.39",
          correctValue: "4.39",
          unit: "m",
          solution: `
            <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
            <ul>
              <li>Toạ độ điểm treo đèn là $M(2; 2{,}5; 3)$.</li>
              <li>Khoảng cách: $OM = \\sqrt{2^2 + 2{,}5^2 + 3^2} = \\sqrt{4 + 6{,}25 + 9} = \\sqrt{19{,}25} \\approx 4{,}39\\text{ (m)}$.</li>
            </ul>
          `
        }
      },
      {
        id: "sa-12-7-2",
        num: 2,
        level: "Vận dụng",
        prompt: "Tại trạm kiểm soát không lưu sân bay Tân Sơn Nhất, radar quét và định vị hai chiếc máy bay trong không gian $Oxyz$ (đơn vị: km, gốc $O$ tại trạm radar). Máy bay $A$ ở toạ độ $(30; 40; 12)$ và máy bay $B$ ở toạ độ $(36; 48; 12)$. Tính khoảng cách giữa hai chiếc máy bay (theo đơn vị kilômét).",
        correctAnswer: "10",
        correctValue: "10",
        unit: "km",
        solution: `
          <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
          <ul>
            <li>Vectơ nối vị trí hai máy bay là:
              $$\\vec{AB} = (36 - 30; 48 - 40; 12 - 12) = (6; 8; 0)$$
            </li>
            <li>Khoảng cách giữa hai máy bay là độ dài đoạn thẳng $AB$:
              $$AB = |\\vec{AB}| = \\sqrt{6^2 + 8^2 + 0^2} = \\sqrt{36 + 64 + 0} = \\sqrt{100} = 10\\text{ (km)}$$
            </li>
            <li>Vậy hai máy bay cách nhau đúng $10\\text{ km}$.</li>
          </ul>
        `,
        similarVariation: {
          prompt: "Trạm không lưu phát hiện máy bay thứ nhất ở toạ độ $(20; 30; 10)$ và máy bay thứ hai ở toạ độ $(23; 34; 10)$ (đơn vị: km). Tính khoảng cách giữa hai máy bay (km).",
          correctAnswer: "5",
          correctValue: "5",
          unit: "km",
          solution: `
            <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
            <ul>
              <li>$\\vec{AB} = (23 - 20; 34 - 30; 10 - 10) = (3; 4; 0)$.</li>
              <li>Khoảng cách $AB = \\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{25} = 5\\text{ (km)}$.</li>
            </ul>
          `
        }
      }
    ]
  }
};
