/**
 * BÀI HỌC SỐ: BÀI 7. HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN (TOÁN 12 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - Phần I: Lời chào của Thầy Sáng + Nút Voice AI vàng đồng, chỉnh tốc độ
 * - Phần II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 60 + Voice AI
 * - Phần III: Tiến trình bài học (Dẫn nhập radar không lưu Tân Sơn Nhất, 2 mục lý thuyết đóng khung nguyên văn SGK, 
 *             TikZ SVG 3D không gian nét đứt/liền chuẩn mực, POI checkpoints giữa & cuối, Mẹo nhớ, Ví dụ tự luận ẩn/hiện, Chốt bài học)
 * - Phần IV: Bài tập trắc nghiệm tổng hợp chuẩn cấu trúc thi mới 2025:
 *             + 5 câu trắc nghiệm nhiều lựa chọn (Dễ - Nhận biết)
 *             + 3 câu trắc nghiệm Đúng/Sai 4 ý (Thông hiểu)
 *             + 2 câu trả lời ngắn thực tế (Vận dụng)
 *             + Kèm nút "Lời giải chi tiết" và nút "Bài toán tương tự" đổi số tự động
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
    audioUrl: "assets/audio/b12_7_welcome.mp3",
    buttonLabel: "Lời chào của thầy Sáng",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 60)
  // =========================================================================
  learningGoals: [
    "Nhận biết hệ trục toạ độ Descartes vuông góc Oxyz trong không gian, gốc toạ độ, các trục toạ độ (trục hoành Ox, trục tung Oy, trục cao Oz) và các mặt phẳng toạ độ (Oxy), (Oyz), (Ozx).",
    "Nhận biết và xác định toạ độ của một điểm đối với hệ toạ độ Oxyz: bộ ba số (x; y; z) tương ứng với hoành độ, tung độ và cao độ.",
    "Nhận biết và tính toán toạ độ của vectơ: $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}$, toạ độ của vectơ qua hai điểm $\\vec{MN} = (x_N - x_M; y_N - y_M; z_N - z_M)$, toạ độ trung điểm đoạn thẳng và toạ độ trọng tâm tam giác.",
    "Vận dụng linh hoạt hệ toạ độ không gian Oxyz để giải quyết các bài toán định vị thực tiễn: hệ thống radar kiểm soát không lưu hàng không và mô hình hoá kết cấu không gian ba chiều."
  ],
  goalsAudioUrl: "assets/audio/b12_7_goals.mp3",
  goalsButtonLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================
  // 1. Bài toán dẫn nhập
  hook: {
    title: "Bài toán kiểm soát không lưu radar tại Sân bay quốc tế Tân Sơn Nhất",
    story: "Tại đài kiểm soát không lưu sân bay quốc tế Tân Sơn Nhất, màn hình radar liên tục giám sát hàng trăm chuyến bay di chuyển trên bầu trời. Mỗi chiếc máy bay đều được xác định vị trí chính xác thông qua ba thông số không gian: khoảng cách kinh độ Đông - Tây, khoảng cách vĩ độ Nam - Bắc, và độ cao hành trình so với mực nước biển. Khi hai máy bay bay qua cùng một vùng không phận, làm thế nào để các kỹ sư hàng không thiết lập một hệ thống toán học chuẩn xác nhằm định vị chính xác vị trí máy bay và giám sát khoảng cách an toàn giữa chúng trong không gian ba chiều? Hệ trục toạ độ Đề-các vuông góc Oxyz chính là công cụ vĩ đại giúp chúng ta giải mã trọn vẹn bài toán thực tế này!",
    illustration: "",
    illustrationCaption: "Mô hình hoá hệ toạ độ không gian Oxyz định vị máy bay trong kiểm soát không lưu",
    question: "Nếu biết toạ độ không gian của máy bay $A(30; 40; 12)$ và máy bay $B(36; 48; 12)$ (đơn vị: km), làm thế nào để tính ngay khoảng cách đường chim bay giữa hai máy bay để đảm bảo an toàn bay?",
    audioUrl: "assets/audio/b12_7_hook.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    bridge: "Hãy cùng Thầy Sáng bước vào khám phá Hệ toạ độ Đề-các vuông góc Oxyz ngay sau đây!"
  },

  // 2. Trình phát bài giảng tương tác tích hợp POI
  interactiveAudio: {
    title: "Bài giảng tương tác: Hệ trục toạ độ trong không gian Oxyz",
    audioUrl: "assets/audio/b12_7_interactive_lecture.mp3",
    duration: 70,
    timestamps: [
      {
        id: "poi-12-7-1",
        time: 25,
        title: "Điểm dừng 1: Cấu tạo ba trục toạ độ trong không gian",
        question: "Trong hệ trục toạ độ Đề-các vuông góc $Oxyz$, trục $Oz$ vuông góc với cả hai trục $Ox$ và $Oy$ được gọi là:",
        options: [
          "Trục cao",
          "Trục hoành",
          "Trục tung",
          "Trục số"
        ],
        correctIndex: 0,
        hint: "Trục Ox là hoành, Oy là tung, Oz thẳng đứng là...",
        explain: "Chính xác! Trục $Ox$ là trục hoành, trục $Oy$ là trục tung, và trục $Oz$ hướng thẳng đứng được gọi là trục cao. Ba trục này đôi một vuông góc tại gốc toạ độ $O$."
      },
      {
        id: "poi-12-7-2",
        time: 55,
        title: "Điểm dừng 2: Xác định toạ độ điểm từ biểu diễn véctơ",
        question: "Trong không gian $Oxyz$, cho điểm $M$ thoả mãn $\\vec{OM} = 2\\vec{i} + 3\\vec{j} - 5\\vec{k}$. Toạ độ của điểm $M$ là:",
        options: [
          "$M(2; 3; -5)$",
          "$M(-2; -3; 5)$",
          "$M(3; 2; -5)$",
          "$M(2; -5; 3)$"
        ],
        correctIndex: 0,
        hint: "Toạ độ của điểm M chính là bộ ba hệ số trước các véctơ đơn vị i, j, k.",
        explain: "Rất giỏi! Vì $\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ thì $M(x; y; z)$. Với $\\vec{OM} = 2\\vec{i} + 3\\vec{j} - 5\\vec{k}$, ta có ngay $M(2; 3; -5)$."
      }
    ]
  },

  // 3. Triển khai các mục lý thuyết chuẩn SGK
  sections: [
    {
      num: "1",
      title: "HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN",
      subsections: [
        {
          key: "1a",
          title: "Định nghĩa hệ trục toạ độ Đề-các vuông góc Oxyz",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 12 - Trang 60:</div>
              <p>Trong không gian, ba trục $Ox, Oy, Oz$ đôi một vuông góc với nhau tại gốc $O$ của mỗi trục. Gọi $\\vec{i}, \\vec{j}, \\vec{k}$ lần lượt là các vectơ đơn vị trên các trục $Ox, Oy, Oz$.</p>
              <ul class="sgk-box-list">
                <li>Hệ ba trục như vậy được gọi là <strong>hệ trục toạ độ Descartes vuông góc $Oxyz$</strong>, hay đơn giản là <strong>hệ toạ độ $Oxyz$</strong>.</li>
                <li>Điểm $O$ được gọi là <strong>gốc toạ độ</strong>.</li>
                <li>Các mặt phẳng $(Oxy), (Oyz), (Ozx)$ đôi một vuông góc với nhau được gọi là <strong>các mặt phẳng toạ độ</strong>.</li>
              </ul>
              <p>Không gian với hệ toạ độ $Oxyz$ còn được gọi là <strong>không gian $Oxyz$</strong>.</p>
            </div>

            <!-- TikZ SVG Hệ trục Oxyz 3D -->
            <div class="tikz-svg-card">
              <div class="tikz-svg-title"><i class="fa-solid fa-arrows-to-dot"></i> Mô hình không gian 3D: Hệ trục toạ độ Descartes Oxyz</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="440" height="230" viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-axis-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                    </marker>
                    <marker id="arr-axis-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                    </marker>
                  </defs>
                  <!-- Gốc O -->
                  <circle cx="180" cy="140" r="4" fill="#0f172a"/>
                  <text x="160" y="155" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">O</text>

                  <!-- Trục Oz thẳng đứng -->
                  <line x1="180" y1="140" x2="180" y2="25" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-axis-b)"/>
                  <text x="190" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0284c7">z (Trục cao)</text>

                  <!-- Trục Oy nằm ngang sang phải -->
                  <line x1="180" y1="140" x2="380" y2="140" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-axis-b)"/>
                  <text x="390" y="145" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0284c7">y (Trục tung)</text>

                  <!-- Trục Ox xiên chéo về phía trước -->
                  <line x1="180" y1="140" x2="60" y2="210" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-axis-b)"/>
                  <text x="40" y="215" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0284c7">x (Trục hoành)</text>

                  <!-- Vectơ đơn vị i, j, k đỏ -->
                  <line x1="180" y1="140" x2="130" y2="169" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-axis-r)"/>
                  <text x="140" y="185" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">\\vec{i}</text>

                  <line x1="180" y1="140" x2="240" y2="140" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-axis-r)"/>
                  <text x="215" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">\\vec{j}</text>

                  <line x1="180" y1="140" x2="180" y2="80" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-axis-r)"/>
                  <text x="190" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">\\vec{k}</text>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình 2.35 SGK: Hệ toạ độ Oxyz ba chiều với ba trục đôi một vuông góc và các vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$</em>
              </div>
            </div>
          `,
          audioUrl: "assets/audio/b12_7_sec1a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-12-7-1a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Cấu tạo hệ toạ độ Oxyz",
              question: "Trong không gian, ba trục $Ox, Oy, Oz$ đôi một vuông góc tại gốc $O$. Trục $Oz$ hướng thẳng đứng được gọi là:",
              options: [
                "Trục cao",
                "Trục hoành",
                "Trục tung",
                "Trục số"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Trục Ox là trục hoành, Oy là trục tung, Oz là trục cao.",
              feedbackWrong: "Ghi nhớ SGK trang 60: Oz là trục cao trong không gian ba chiều."
            },
            {
              id: "cp-12-7-1a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Vectơ đơn vị trên các trục",
              question: "Độ dài của các vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ trên các trục $Ox, Oy, Oz$ bằng:",
              options: [
                "1",
                "0",
                "2",
                "Tùy ý"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất chuẩn! Vectơ đơn vị có độ dài chuẩn hóa bằng 1: $|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1$.",
              feedbackWrong: "Vectơ đơn vị luôn có độ dài bằng 1."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về Góc phòng học",
            content: "Để không bao giờ nhầm lẫn ba trục không gian: <strong>'Gốc O là góc sàn nhà. Mép sàn bên trái là trục hoành Ox, mép sàn bên phải là trục tung Oy, và góc tường thẳng đứng vươn lên trần là trục cao Oz!'</strong>."
          },

          workedExample: {
            title: "Ví dụ 1 (SGK trang 61) - Chọn hệ toạ độ thích hợp cho hình lập phương",
            problem: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $1$. Có thể lập một hệ toạ độ $Oxyz$ có gốc $O$ trùng với đỉnh $B'$ và các vectơ $\\vec{i}, \\vec{j}, \\vec{k}$ lần lượt là các vectơ $\\vec{B'A'}, \\vec{B'C'}, \\vec{B'B}$ không? Giải thích vì sao.",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <p>1. Vì $ABCD.A'B'C'D'$ là hình lập phương nên tại đỉnh $B'$, ba cạnh $B'A', B'C'$ và $B'B$ đôi một vuông góc với nhau.</p>
              <p>2. Độ dài mỗi cạnh của hình lập phương bằng 1 nên:</p>
              <p>$$|\\vec{B'A'}| = B'A' = 1, \\quad |\\vec{B'C'}| = B'C' = 1, \\quad |\\vec{B'B}| = B'B = 1.$$</p>
              <p>3. Do đó, ba vectơ $\\vec{B'A'}, \\vec{B'C'}, \\vec{B'B}$ là ba vectơ đơn vị đôi một vuông góc có chung điểm gốc $B'$.</p>
              <p><strong>Kết luận:</strong> Ta hoàn toàn có thể lập được một hệ toạ độ $Oxyz$ có gốc $O$ trùng với đỉnh $B'$, các trục $Ox, Oy, Oz$ lần lượt chứa các tia $B'A', B'C', B'B$ và các vectơ đơn vị tương ứng là $\\vec{i} = \\vec{B'A'}, \\vec{j} = \\vec{B'C'}, \\vec{k} = \\vec{B'B}$.</p>
            `,
            teacherGuidance: "Khi gặp bài toán toạ độ hoá hình học không gian, hãy luôn ưu tiên chọn gốc toạ độ $O$ tại một đỉnh có 3 cạnh đôi một vuông góc (như đỉnh của hình lập phương, hình hộp chữ nhật hoặc chóp có đáy vuông)."
          }
        }
      ]
    },
    {
      num: "2",
      title: "TOẠ ĐỘ CỦA ĐIỂM, TOẠ ĐỘ CỦA VECTƠ TRONG KHÔNG GIAN",
      subsections: [
        {
          key: "2a",
          title: "Toạ độ của điểm và Toạ độ của vectơ",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 12 - Trang 61:</div>
              <p>Trong không gian $Oxyz$, cho một điểm $M$ tuỳ ý. Bộ ba số $(x; y; z)$ duy nhất sao cho $\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ được gọi là <strong>toạ độ của điểm $M$</strong> đối với hệ toạ độ $Oxyz$. Khi đó, ta viết $M = (x; y; z)$ hoặc $M(x; y; z)$, trong đó $x$ là hoành độ, $y$ là tung độ và $z$ là cao độ của $M$.</p>
            </div>

            <div class="sgk-framed-box" style="margin-top: 14px; background: #fefce8; border-left-color: #eab308;">
              <div class="sgk-box-tag" style="color: #854d0e;"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 12 - Trang 63:</div>
              <p>Trong không gian $Oxyz$, cho vectơ $\\vec{a}$ tuỳ ý. Bộ ba số $(x; y; z)$ duy nhất sao cho $\\vec{a} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ được gọi là <strong>toạ độ của vectơ $\\vec{a}$</strong> đối với hệ toạ độ $Oxyz$. Khi đó, ta viết $\\vec{a} = (x; y; z)$ hoặc $\\vec{a}(x; y; z)$.</p>
              <p><strong>Toạ độ của vectơ qua hai điểm (SGK trang 63):</strong> Cho hai điểm $M(x_M; y_M; z_M)$ và $N(x_N; y_N; z_N)$. Khi đó:</p>
              <p style="text-align: center; font-weight: bold; font-size: 1.15rem; color: #b45309;">
                $$\\vec{MN} = (x_N - x_M;\\, y_N - y_M;\\, z_N - z_M)$$
              </p>
            </div>

            <div class="theory-details-wrap" style="margin-top: 14px;">
              <p><strong>Toạ độ trung điểm và trọng tâm (SGK trang 63):</strong></p>
              <ul>
                <li>Trung điểm $I$ của đoạn thẳng $AB$: $x_I = \\frac{x_A + x_B}{2},\\; y_I = \\frac{y_A + y_B}{2},\\; z_I = \\frac{z_A + z_B}{2}$.</li>
                <li>Trọng tâm $G$ của tam giác $ABC$: $x_G = \\frac{x_A + x_B + x_C}{3},\\; y_G = \\frac{y_A + y_B + y_C}{3},\\; z_G = \\frac{z_A + z_B + z_C}{3}$.</li>
              </ul>
            </div>
          `,
          audioUrl: "assets/audio/b12_7_sec2a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-12-7-2a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Xác định toạ độ điểm",
              question: "Cho điểm $M$ thỏa mãn $\\vec{OM} = 2\\vec{i} + 3\\vec{j} - 5\\vec{k}$. Toạ độ của điểm $M$ là:",
              options: [
                "$M(2; 3; -5)$",
                "$M(-2; -3; 5)$",
                "$M(3; 2; -5)$",
                "$M(2; -5; 3)$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Toạ độ điểm M là bộ ba hệ số trước các vectơ đơn vị: M(2; 3; -5).",
              feedbackWrong: "Toạ độ lấy theo thứ tự hệ số của i, j, k."
            },
            {
              id: "cp-12-7-2a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Điểm nằm trên trục toạ độ",
              question: "Điểm nào sau đây nằm trên trục cao $Oz$?",
              options: [
                "$P(0; 0; 4)$",
                "$Q(4; 0; 0)$",
                "$R(0; 4; 0)$",
                "$S(4; 4; 0)$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất giỏi! Điểm thuộc trục Oz có hoành độ và tung độ bằng 0: $(0; 0; z)$.",
              feedbackWrong: "Nhớ mẹo: Thuộc trục nào thì chỉ có trục đó khác 0, hai trục kia bằng 0."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về Hình chiếu",
            content: "Khẩu quyết độc quyền của Thầy Sáng: <strong>'Chiếu lên đâu thì GIỮ NGUYÊN toạ độ đó; KHUYẾT cái gì thì toạ độ cái đó bằng 0!'</strong>. Ví dụ: Chiếu lên mặt phẳng $(Oxy)$ $\\implies$ giữ $x, y$, cho $z = 0$ thành $(x; y; 0)$!"
          },

          workedExample: {
            title: "Ví dụ 5 (SGK trang 63) - Tính toạ độ vectơ và toạ độ đỉnh lăng trụ",
            problem: "Trong không gian $Oxyz$, cho hình lăng trụ tam giác $ABC.A'B'C'$ có $A(1; 0; 2), B(3; 2; 5), C(7; -3; 9)$ và $A'(5; 0; 1)$.\na) Tìm toạ độ của vectơ $\\vec{AA'}$.\nb) Tìm toạ độ của các đỉnh $B', C'$.",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <p>a) Áp dụng công thức toạ độ vectơ qua hai điểm:</p>
              <p>$$\\vec{AA'} = (x_{A'} - x_A;\\, y_{A'} - y_A;\\, z_{A'} - z_A) = (5 - 1;\\, 0 - 0;\\, 1 - 2) = (4;\\, 0;\\, -1).$$</p>
              <p>b) Gọi toạ độ đỉnh $B'$ là $(x; y; z)$.</p>
              <p>Vì $ABB'A'$ là hình bình hành nên $\\vec{BB'} = \\vec{AA'}$.</p>
              <p>Ta có $\\vec{BB'} = (x - 3;\\, y - 2;\\, z - 5)$.</p>
              <p>$$\\begin{cases} x - 3 = 4 \\\\ y - 2 = 0 \\\\ z - 5 = -1 \\end{cases} \\iff \\begin{cases} x = 7 \\\\ y = 2 \\\\ z = 4 \\end{cases} \\implies B'(7; 2; 4).$$</p>
              <p>Tương tự, vì $ACC'A'$ là hình bình hành nên $\\vec{CC'} = \\vec{AA'} = (4; 0; -1)$.</p>
              <p>$$\\begin{cases} x_{C'} - 7 = 4 \\\\ y_{C'} - (-3) = 0 \\\\ z_{C'} - 9 = -1 \\end{cases} \\iff \\begin{cases} x_{C'} = 11 \\\\ y_{C'} = -3 \\\\ z_{C'} = 8 \\end{cases} \\implies C'(11; -3; 8).$$</p>
              <p><strong>Kết luận:</strong> $\\vec{AA'} = (4; 0; -1)$, $B'(7; 2; 4)$ và $C'(11; -3; 8)$.</p>
            `,
            teacherGuidance: "Trong hình lăng trụ, các cạnh bên song song và bằng nhau dẫn đến các vectơ cạnh bên bằng nhau: $\\vec{AA'} = \\vec{BB'} = \\vec{CC'}$. Đây là chìa khoá để tìm toạ độ đáy trên khi biết đáy dưới."
          }
        }
      ]
    }
  ],

  // 4. Chốt bài học
  realworldWrapup: {
    title: "GIẢI QUYẾT BÀI TOÁN DẪN NHẬP RADAR KHÔNG LƯU TÂN SƠN NHẤT",
    recap: "Đầu bài học, ta đã đặt câu hỏi: Cho biết toạ độ không gian của máy bay $A(30; 40; 12)$ và máy bay $B(36; 48; 12)$ (đơn vị: km), làm thế nào để tính khoảng cách đường chim bay giữa chúng?",
    solution: `
      <p><strong>Lời giải chi tiết chốt vấn đề của Thầy Sáng:</strong></p>
      <p>1. <strong>Tính vectơ độ dịch chuyển giữa hai máy bay:</strong></p>
      <p>$$\\vec{AB} = (x_B - x_A;\\, y_B - y_A;\\, z_B - z_A) = (36 - 30;\\, 48 - 40;\\, 12 - 12) = (6;\\, 8;\\, 0).$$</p>
      <p>2. <strong>Tính khoảng cách đường chim bay:</strong></p>
      <p>Khoảng cách giữa hai máy bay chính là độ dài của vectơ $\\vec{AB}$:</p>
      <p>$$AB = |\\vec{AB}| = \\sqrt{6^2 + 8^2 + 0^2} = \\sqrt{36 + 64 + 0} = \\sqrt{100} = 10\\text{ km}.$$</p>
      <p>3. <strong>Nhận định chuyên môn:</strong> Cả hai máy bay cùng ở độ cao $12\\text{ km}$ ($z_A = z_B = 12$) và cách nhau đúng $10\\text{ km}$. Khoảng cách này lớn hơn tiêu chuẩn phân cách an toàn hàng không tối thiểu ($5\\text{ km}$), do đó hai máy bay đang bay hoàn toàn an toàn!</p>
    `,
    audioUrl: "assets/audio/b12_7_wrapup.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ 2025)
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN FORM ĐỀ THI MỚI 2025)",

    // Dạng 1: 5 câu nhiều lựa chọn (Dễ - Nhận biết)
    part1MultipleChoice: [
      {
        id: "mc-12-7-1",
        num: 1,
        level: "Nhận biết",
        prompt: "Trong không gian $Oxyz$, cho điểm $M(1; 2; 3)$. Hình chiếu vuông góc của điểm $M$ lên mặt phẳng $(Oxy)$ có toạ độ là:",
        options: [
          "$(1; 2; 0)$",
          "$(1; 0; 3)$",
          "$(0; 2; 3)$",
          "$(0; 0; 3)$"
        ],
        correctIndex: 0,
        solution: "Hình chiếu lên mặt phẳng $(Oxy)$ thì giữ nguyên $x, y$ và cho $z = 0$, ta được $(1; 2; 0)$.",
        similarVariation: {
          prompt: "Hình chiếu vuông góc của điểm $A(3; -4; 5)$ lên mặt phẳng $(Oyz)$ có toạ độ là:",
          options: ["$(0; -4; 5)$", "$(3; 0; 5)$", "$(3; -4; 0)$", "$(0; 0; 5)$"],
          correctIndex: 0,
          solution: "Chiếu lên $(Oyz)$ thì $x = 0$, giữ nguyên $y, z$ $\\implies (0; -4; 5)$."
        }
      },
      {
        id: "mc-12-7-2",
        num: 2,
        level: "Nhận biết",
        prompt: "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -3)$ và $B(3; 0; 1)$. Toạ độ của vectơ $\\vec{AB}$ là:",
        options: [
          "$(2; -2; 4)$",
          "$(4; 2; -2)$",
          "$(-2; 2; -4)$",
          "$(2; -2; -2)$"
        ],
        correctIndex: 0,
        solution: "$\\vec{AB} = (3 - 1; 0 - 2; 1 - (-3)) = (2; -2; 4)$.",
        similarVariation: {
          prompt: "Cho hai điểm $M(2; 1; -1)$ và $N(5; 3; 2)$. Toạ độ của vectơ $\\vec{MN}$ là:",
          options: ["$(3; 2; 3)$", "$(-3; -2; -3)$", "$(7; 4; 1)$", "$(3; 2; 1)$"],
          correctIndex: 0,
          solution: "$\\vec{MN} = (5 - 2; 3 - 1; 2 - (-1)) = (3; 2; 3)$."
        }
      },
      {
        id: "mc-12-7-3",
        num: 3,
        level: "Nhận biết",
        prompt: "Trong không gian $Oxyz$, toạ độ của vectơ đơn vị $\\vec{k}$ trên trục cao $Oz$ là:",
        options: [
          "$(0; 0; 1)$",
          "$(1; 0; 0)$",
          "$(0; 1; 0)$",
          "$(1; 1; 1)$"
        ],
        correctIndex: 0,
        solution: "Theo SGK trang 63: $\\vec{i} = (1; 0; 0), \\vec{j} = (0; 1; 0), \\vec{k} = (0; 0; 1)$.",
        similarVariation: {
          prompt: "Toạ độ của vectơ đơn vị $\\vec{j}$ trên trục tung $Oy$ là:",
          options: ["$(0; 1; 0)$", "$(1; 0; 0)$", "$(0; 0; 1)$", "$(1; 1; 0)$"],
          correctIndex: 0,
          solution: "$\\vec{j} = (0; 1; 0)$."
        }
      },
      {
        id: "mc-12-7-4",
        num: 4,
        level: "Nhận biết",
        prompt: "Trong không gian $Oxyz$, cho hai điểm $A(2; 4; 6)$ và $B(4; 2; 0)$. Toạ độ trung điểm $I$ của đoạn thẳng $AB$ là:",
        options: [
          "$(3; 3; 3)$",
          "$(6; 6; 6)$",
          "$(2; -2; -6)$",
          "$(1; -1; -3)$"
        ],
        correctIndex: 0,
        solution: "Toạ độ trung điểm: $x_I = (2 + 4)/2 = 3, y_I = (4 + 2)/2 = 3, z_I = (6 + 0)/2 = 3 \\implies I(3; 3; 3)$.",
        similarVariation: {
          prompt: "Toạ độ trung điểm của đoạn thẳng nối $P(1; 3; 5)$ và $Q(3; 5; 7)$ là:",
          options: ["$(2; 4; 6)$", "$(4; 8; 12)$", "$(2; 2; 2)$", "$(1; 1; 1)$"],
          correctIndex: 0,
          solution: "$((1+3)/2; (3+5)/2; (5+7)/2) = (2; 4; 6)$."
        }
      },
      {
        id: "mc-12-7-5",
        num: 5,
        level: "Nhận biết",
        prompt: "Trong không gian $Oxyz$, điểm nào sau đây nằm trên trục hoành $Ox$?",
        options: [
          "$A(5; 0; 0)$",
          "$B(0; 5; 0)$",
          "$C(0; 0; 5)$",
          "$D(5; 5; 0)$"
        ],
        correctIndex: 0,
        solution: "Điểm thuộc trục $Ox$ có tung độ và cao độ bằng 0: $(x; 0; 0)$. Vậy điểm $A(5; 0; 0)$ thuộc $Ox$.",
        similarVariation: {
          prompt: "Điểm nào sau đây nằm trên trục tung $Oy$?",
          options: ["$M(0; -3; 0)$", "$N(-3; 0; 0)$", "$P(0; 0; -3)$", "$Q(-3; -3; 0)$"],
          correctIndex: 0,
          solution: "Điểm thuộc $Oy$ có $x = 0, z = 0$."
        }
      }
    ],

    // Dạng 2: 3 câu Đúng/Sai (Thông hiểu - chuẩn 4 ý a, b, c, d)
    part2TrueFalse: [
      {
        id: "tf-12-7-1",
        num: 1,
        level: "Thông hiểu",
        prompt: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; 3), B(2; 1; 0), C(3; 0; -3)$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) Toạ độ của vectơ $\\vec{AB}$ là $(1; -1; -3)$.", isCorrect: true },
          { text: "b) Toạ độ của vectơ $\\vec{BC}$ là $(1; -1; -3)$.", isCorrect: true },
          { text: "c) Ba điểm $A, B, C$ tạo thành ba đỉnh của một tam giác.", isCorrect: false },
          { text: "d) Điểm $B$ là trung điểm của đoạn thẳng $AC$.", isCorrect: true }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> $\\vec{AB} = (2 - 1; 1 - 2; 0 - 3) = (1; -1; -3)$.</li>
            <li>b) <strong>ĐÚNG:</strong> $\\vec{BC} = (3 - 2; 0 - 1; -3 - 0) = (1; -1; -3)$.</li>
            <li>c) <strong>SAI:</strong> Vì $\\vec{AB} = \\vec{BC}$ nên hai vectơ cùng phương, do đó $A, B, C$ thẳng hàng, không thể tạo thành tam giác.</li>
            <li>d) <strong>ĐÚNG:</strong> Vì $\\vec{AB} = \\vec{BC}$ nên $B$ chính là trung điểm của đoạn thẳng $AC$.</li>
          </ul>
        `
      },
      {
        id: "tf-12-7-2",
        num: 2,
        level: "Thông hiểu",
        prompt: "Trong không gian $Oxyz$, cho tam giác $ABC$ có $A(1; 0; 2), B(-2; 1; 3), C(4; 2; 1)$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) Trọng tâm $G$ của tam giác $ABC$ có toạ độ là $(1; 1; 2)$.", isCorrect: true },
          { text: "b) Độ dài cạnh $AB$ bằng $\\sqrt{11}$.", isCorrect: true },
          { text: "c) Điểm $D(7; 1; 0)$ thỏa mãn tứ giác $ABCD$ là hình bình hành.", isCorrect: true },
          { text: "d) Tam giác $ABC$ là tam giác vuông tại $A$.", isCorrect: false }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> $x_G = (1 - 2 + 4)/3 = 1, y_G = (0 + 1 + 2)/3 = 1, z_G = (2 + 3 + 1)/3 = 2 \\implies G(1; 1; 2)$.</li>
            <li>b) <strong>ĐÚNG:</strong> $\\vec{AB} = (-3; 1; 1) \\implies AB = \\sqrt{(-3)^2 + 1^2 + 1^2} = \\sqrt{11}$.</li>
            <li>c) <strong>ĐÚNG:</strong> Để $ABCD$ là hình bình hành thì $\\vec{AD} = \\vec{BC} = (6; 1; -2) \\implies D = A + \\vec{BC} = (7; 1; 0)$.</li>
            <li>d) <strong>SAI:</strong> $\\vec{AB} = (-3; 1; 1), \\vec{AC} = (3; 2; -1) \\implies \\vec{AB} \\cdot \\vec{AC} = -9 + 2 - 1 = -8 \\neq 0$, không vuông.</li>
          </ul>
        `
      },
      {
        id: "tf-12-7-3",
        num: 3,
        level: "Thông hiểu",
        prompt: "Trong không gian $Oxyz$, cho điểm $M(2; -3; 4)$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) Khoảng cách từ điểm $M$ đến mặt phẳng $(Oxy)$ bằng $4$.", isCorrect: true },
          { text: "b) Hình chiếu vuông góc của điểm $M$ lên trục $Oy$ là điểm $N(0; -3; 0)$.", isCorrect: true },
          { text: "c) Điểm đối xứng của điểm $M$ qua gốc toạ độ $O$ là $M'(-2; 3; -4)$.", isCorrect: true },
          { text: "d) Độ dài đoạn thẳng $OM$ bằng $\\sqrt{29}$.", isCorrect: true }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Khoảng cách đến $(Oxy)$ bằng $|z_M| = |4| = 4$.</li>
            <li>b) <strong>ĐÚNG:</strong> Chiếu lên $Oy$ thì $x = 0, z = 0 \\implies N(0; -3; 0)$.</li>
            <li>c) <strong>ĐÚNG:</strong> Đối xứng qua $O$ thì đổi dấu cả 3 toạ độ: $(-x; -y; -z) = (-2; 3; -4)$.</li>
            <li>d) <strong>ĐÚNG:</strong> $OM = \\sqrt{2^2 + (-3)^2 + 4^2} = \\sqrt{4 + 9 + 16} = \\sqrt{29}$.</li>
          </ul>
        `
      }
    ],

    // Dạng 3: 2 câu Trả lời ngắn (Toán thực tế - Vận dụng)
    part3ShortAnswer: [
      {
        id: "sa-12-7-1",
        num: 1,
        level: "Vận dụng",
        prompt: "Một chiếc bóng đèn được treo trong phòng ngủ có kích thước hình hộp chữ nhật. Chọn hệ toạ độ $Oxyz$ sao cho gốc $O$ là một góc phòng trên mặt sàn, trục $Ox$ và $Oy$ lần lượt chạy dọc theo hai mép chân tường, trục $Oz$ hướng thẳng đứng lên trần nhà (đơn vị: mét). Biết bóng đèn cách sàn nhà $2\\text{ m}$, cách bức tường thứ nhất $1\\text{ m}$ và cách bức tường thứ hai $1{,}5\\text{ m}$. Tính khoảng cách từ bóng đèn đến gốc toạ độ $O$ (kết quả tính theo mét, làm tròn đến chữ số thập phân thứ hai).",
        correctValue: "2.69",
        acceptableAnswers: ["2.69", "2,69", "2.69m", "2.7"],
        unit: "m",
        solution: "Toạ độ của chiếc bóng đèn là $M(1; 1{,}5; 2)$. Khoảng cách từ bóng đèn đến gốc $O$ chính là độ dài đoạn thẳng $OM$: $OM = \\sqrt{1^2 + 1{,}5^2 + 2^2} = \\sqrt{1 + 2{,}25 + 4} = \\sqrt{7{,}25} \\approx 2{,}6925\\text{ m}$. Làm tròn 2 chữ số thập phân ta được $2{,}69\\text{ m}$.",
        similarVariation: {
          prompt: "Nếu một bóng đèn treo cách hai bức tường lần lượt là $2\\text{ m}, 2\\text{ m}$ và cách mặt sàn $1\\text{ m}$, khoảng cách từ đèn đến gốc $O$ bằng bao nhiêu mét?",
          correctValue: "3",
          acceptableAnswers: ["3", "3m", "3.0"],
          solution: "$\\sqrt{2^2 + 2^2 + 1^2} = \\sqrt{9} = 3\\text{ m}$."
        }
      },
      {
        id: "sa-12-7-2",
        num: 2,
        level: "Vận dụng",
        prompt: "Để theo dõi hành trình của máy bay chở khách, đài kiểm soát không lưu thiết lập hệ trục toạ độ $Oxyz$ với gốc $O$ tại trạm radar, mặt phẳng $(Oxy)$ trùng với mặt đất, trục $Oz$ hướng thẳng đứng lên trời (đơn vị: km). Máy bay duy trì hướng bay về phía nam với vận tốc không đổi $800\\text{ km/h}$. Sau khi bay được $45$ phút kể từ vị trí $A(20; 30; 10)$ dọc theo hướng trục $Oy$ giảm dần, toạ độ tung độ $y$ của máy bay khi đó bằng bao nhiêu?",
        correctValue: "-570",
        acceptableAnswers: ["-570", "-570 km"],
        unit: "",
        solution: "Thời gian bay là $t = 45\\text{ phút} = 0{,}75\\text{ giờ}$. Quãng đường máy bay bay được là $s = v \\times t = 800 \\times 0{,}75 = 600\\text{ km}$. Vì máy bay bay thẳng về hướng nam (dọc theo chiều âm trục $Oy$) nên tung độ của máy bay giảm đi $600\\text{ km}$. Tung độ mới là: $y = y_A - 600 = 30 - 600 = -570$.",
        similarVariation: {
          prompt: "Nếu máy bay bay với vận tốc $600\\text{ km/h}$ trong $30$ phút về hướng nam bắt đầu từ tung độ $y_0 = 100$, tung độ mới của máy bay là:",
          correctValue: "-200",
          acceptableAnswers: ["-200"],
          solution: "$y = 100 - (600 \\times 0{,}5) = 100 - 300 = -200$."
        }
      }
    ]
  }
};

// Tự động gán vào Window để Engine nhận diện
if (typeof window !== "undefined") {
  window.LESSON_12_7_DATA = window.LESSON_12_C2_B7_DATA;
}
