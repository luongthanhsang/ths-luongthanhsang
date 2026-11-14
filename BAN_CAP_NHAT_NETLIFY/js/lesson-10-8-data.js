/**
 * BÀI HỌC SỐ: BÀI 8. TỔNG VÀ HIỆU CỦA HAI VECTƠ (TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - Phần I: Lời chào của Thầy Sáng + Nút Voice AI vàng đồng, chỉnh tốc độ
 * - Phần II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 51 + Voice AI
 * - Phần III: Tiến trình bài học (Dẫn nhập ca nô vượt sông Tiền, 2 mục lý thuyết đóng khung nguyên văn SGK, 
 *             TikZ SVG vector chuẩn mực, POI checkpoints giữa & cuối, Mẹo nhớ, Ví dụ tự luận ẩn/hiện, Chốt bài học)
 * - Phần IV: Bài tập trắc nghiệm tổng hợp chuẩn cấu trúc thi mới 2025:
 *             + 5 câu trắc nghiệm nhiều lựa chọn (Dễ - Nhận biết)
 *             + 3 câu trắc nghiệm Đúng/Sai 4 ý (Thông hiểu)
 *             + 2 câu trả lời ngắn thực tế (Vận dụng)
 *             + Kèm nút "Lời giải chi tiết" và nút "Bài toán tương tự" đổi số tự động
 */

window.LESSON_10_C4_B8_DATA = {
  id: "10-c4-b8",
  number: "Bài 8",
  title: "Tổng và hiệu của hai vectơ",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioScript: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioUrl: "assets/audio/b10_8_welcome.mp3",
    buttonLabel: "Lời chào của thầy Sáng",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 51)
  // =========================================================================
  learningGoals: [
    "Thực hiện thành thạo các phép toán cộng, trừ vectơ.",
    "Nắm vững và vận dụng linh hoạt quy tắc ba điểm và quy tắc hình bình hành để biến đổi hệ thức vectơ.",
    "Mô tả chính xác tính chất trung điểm của đoạn thẳng ($\\vec{IA} + \\vec{IB} = \\vec{0}$) và trọng tâm của tam giác ($\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$) bằng vectơ.",
    "Vận dụng xuất sắc kiến thức vectơ trong bài toán tổng hợp lực và tổng hợp vận tốc thực tế."
  ],
  goalsAudioUrl: "assets/audio/b10_8_goals.mp3",
  goalsButtonLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================
  // 1. Bài toán dẫn nhập
  hook: {
    title: "Bài toán chuyển động của con tàu vượt dòng sông Tiền (An Giang)",
    story: "Một con tàu chuyển động từ bờ bên này sang bờ bên kia của dòng sông Tiền (An Giang) với vận tốc riêng không đổi là $\\vec{v}_r$. Do dòng nước chảy xiết với vận tốc $\\vec{v}_n$, vận tốc thực tế của con tàu đối với bờ là sự kết hợp của cả hai vận tốc. Nếu không quan tâm đến điểm đến thì người lái tàu cần giữ lái cho tàu tạo với bờ sông một góc bao nhiêu để tàu sang bờ bên kia được nhanh nhất? Để giải quyết bài toán thực tế này, Toán học xây dựng các phép toán vectơ, tương thích với việc tổng hợp vận tốc và tổng hợp lực!",
    illustration: "",
    illustrationCaption: "Con tàu chuyển động qua sông chịu tác động đồng thời của vận tốc động cơ và vận tốc dòng chảy",
    question: "Vận tốc thực tế của con tàu được xác định theo quy tắc hình học nào giữa vectơ vận tốc riêng của tàu và vectơ vận tốc dòng nước?",
    audioUrl: "assets/audio/b10_8_hook.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    bridge: "Hãy cùng Thầy Sáng bước vào tìm hiểu Phép cộng vectơ và các quy tắc hình học ngay sau đây!"
  },

  // 2. Trình phát bài giảng tương tác tích hợp POI
  interactiveAudio: {
    title: "Bài giảng tương tác: Tổng và hiệu của hai vectơ",
    audioUrl: "assets/audio/b10_8_interactive_lecture.mp3",
    duration: 70,
    timestamps: [
      {
        id: "poi-10-8-1",
        time: 25,
        title: "Điểm dừng 1: Quy tắc ba điểm",
        question: "Với ba điểm bất kì $A, B, C$, ta luôn có đẳng thức vectơ nào sau đây?",
        options: [
          "$\\vec{AB} + \\vec{BC} = \\vec{AC}$",
          "$\\vec{AB} + \\vec{AC} = \\vec{BC}$",
          "$\\vec{BA} + \\vec{BC} = \\vec{AC}$",
          "$\\vec{AB} - \\vec{BC} = \\vec{AC}$"
        ],
        correctIndex: 0,
        hint: "Quy tắc nối đuôi: Điểm cuối của vectơ thứ nhất trùng với điểm đầu của vectơ thứ hai.",
        explain: "Chính xác! Theo Quy tắc ba điểm (SGK trang 52): Với ba điểm bất kì $A, B, C$, ta có $\\vec{AB} + \\vec{BC} = \\vec{AC}$."
      },
      {
        id: "poi-10-8-2",
        time: 55,
        title: "Điểm dừng 2: Vectơ đối và quy tắc trừ",
        question: "Hiệu của hai vectơ $\\vec{a} - \\vec{b}$ được định nghĩa là:",
        options: [
          "Tổng của vectơ $\\vec{a}$ với vectơ đối của vectơ $\\vec{b}$ (tức $\\vec{a} + (-\\vec{b})$)",
          "Hiệu độ dài $|\vec{a}| - |\vec{b}|$",
          "Vectơ có độ dài bằng 0",
          "Tích của hai vectơ"
        ],
        correctIndex: 0,
        hint: "Phép trừ chính là phép cộng với vectơ đối.",
        explain: "Rất chuẩn! SGK trang 53 định nghĩa: Vectơ $\\vec{a} + (-\\vec{b})$ được gọi là hiệu của hai vectơ $\\vec{a}$ và $\\vec{b}$, kí hiệu là $\\vec{a} - \\vec{b}$."
      }
    ]
  },

  // 3. Triển khai các mục lý thuyết chuẩn SGK
  sections: [
    {
      num: "1",
      title: "TỔNG CỦA HAI VECTƠ",
      subsections: [
        {
          key: "1a",
          title: "Định nghĩa tổng hai vectơ và Quy tắc ba điểm",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 10 - Trang 51:</div>
              <p>Cho hai vectơ $\\vec{a}, \\vec{b}$. Lấy một điểm $A$ tuỳ ý và vẽ $\\vec{AB} = \\vec{a}, \\vec{BC} = \\vec{b}$. Khi đó vectơ $\\vec{AC}$ được gọi là <strong>tổng của hai vectơ $\\vec{a}$ và $\\vec{b}$</strong> và được kí hiệu là $\\vec{a} + \\vec{b}$.</p>
              <p>Phép lấy tổng của hai vectơ được gọi là <strong>phép cộng vectơ</strong>.</p>
            </div>

            <div class="sgk-framed-box" style="margin-top: 14px; background: #f0fdf4; border-left-color: #16a34a;">
              <div class="sgk-box-tag" style="color: #15803d;"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 10 - Trang 52:</div>
              <ul class="sgk-box-list" style="color: #14532d;">
                <li><strong>Quy tắc ba điểm:</strong> Với ba điểm bất kì $A, B, C$, ta có $\\vec{AB} + \\vec{BC} = \\vec{AC}$.</li>
                <li><strong>Quy tắc hình bình hành:</strong> Nếu $ABCD$ là một hình bình hành thì $\\vec{AB} + \\vec{AD} = \\vec{AC}$.</li>
              </ul>
            </div>

            <div class="theory-details-wrap" style="margin-top: 14px;">
              <p><strong>Tính chất của phép cộng vectơ (SGK trang 52):</strong></p>
              <ul class="sgk-box-list">
                <li>Tính chất giao hoán: $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$;</li>
                <li>Tính chất kết hợp: $(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$;</li>
                <li>Tính chất vectơ-không: $\\vec{a} + \\vec{0} = \\vec{0} + \\vec{a} = \\vec{a}$.</li>
              </ul>
            </div>

            <!-- TikZ SVG Minh họa Quy tắc ba điểm & Hình bình hành -->
            <div class="tikz-svg-card">
              <div class="tikz-svg-title"><i class="fa-solid fa-draw-polygon"></i> Hình học trực quan: Quy tắc tam giác và Quy tắc hình bình hành</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="480" height="170" viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-c-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                    </marker>
                    <marker id="arr-c-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                    </marker>
                  </defs>
                  <!-- Tam giác ABC bên trái -->
                  <g transform="translate(10, 10)">
                    <circle cx="30" cy="120" r="4" fill="#0284c7"/>
                    <text x="15" y="125" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0284c7">A</text>
                    <line x1="30" y1="120" x2="115" y2="35" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-c-blue)"/>
                    <text x="65" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">\\vec{a}</text>
                    <circle cx="120" cy="30" r="4" fill="#0284c7"/>
                    <text x="120" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0284c7">B</text>
                    <line x1="120" y1="30" x2="195" y2="115" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-c-blue)"/>
                    <text x="170" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">\\vec{b}</text>
                    <circle cx="200" cy="120" r="4" fill="#0284c7"/>
                    <text x="210" y="125" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0284c7">C</text>
                    <line x1="30" y1="120" x2="192" y2="120" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-c-red)"/>
                    <text x="110" y="145" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\vec{a}+\\vec{b}</text>
                    <text x="110" y="165" font-family="sans-serif" font-size="12" fill="#475569" text-anchor="middle">Quy tắc ba điểm: $\\vec{AB}+\\vec{BC}=\\vec{AC}$</text>
                  </g>

                  <!-- Hình bình hành ABCD bên phải -->
                  <g transform="translate(250, 10)">
                    <line x1="20" y1="120" x2="120" y2="40" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-c-blue)"/>
                    <text x="60" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">\\vec{AB}</text>
                    <line x1="20" y1="120" x2="115" y2="120" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-c-blue)"/>
                    <text x="65" y="140" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">\\vec{AD}</text>
                    <line x1="120" y1="40" x2="215" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                    <line x1="120" y1="120" x2="215" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                    <!-- Đường chéo AC -->
                    <line x1="20" y1="120" x2="210" y2="43" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-c-red)"/>
                    <text x="120" y="95" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\vec{AC}</text>
                    <text x="120" y="165" font-family="sans-serif" font-size="12" fill="#475569" text-anchor="middle">Quy tắc hình bình hành: $\\vec{AB}+\\vec{AD}=\\vec{AC}$</text>
                  </g>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình 4.13 & 4.14 SGK: Quy tắc ba điểm (nối tiếp) và Quy tắc hình bình hành (chung gốc)</em>
              </div>
            </div>
          `,
          audioUrl: "assets/audio/b10_8_sec1a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-10-8-1a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Quy tắc ba điểm",
              question: "Với ba điểm bất kì $A, B, C$, đẳng thức nào sau đây luôn ĐÚNG?",
              options: [
                "$\\vec{AB} + \\vec{BC} = \\vec{AC}$",
                "$\\vec{AB} + \\vec{AC} = \\vec{BC}$",
                "$\\vec{BA} + \\vec{BC} = \\vec{AC}$",
                "$\\vec{AB} - \\vec{BC} = \\vec{AC}$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Quy tắc ba điểm: Nối đuôi nhau thì điểm giữa triệt tiêu: $\\vec{AB} + \\vec{BC} = \\vec{AC}$.",
              feedbackWrong: "Nhớ quy tắc ba điểm: Điểm cuối của vectơ trước phải là điểm đầu của vectơ sau."
            },
            {
              id: "cp-10-8-1a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Quy tắc hình bình hành",
              question: "Nếu $ABCD$ là hình bình hành thì tổng $\\vec{AB} + \\vec{AD}$ bằng vectơ nào?",
              options: [
                "$\\vec{AC}$ (vectơ đường chéo)",
                "$\\vec{BD}$",
                "$\\vec{CA}$",
                "$\\vec{DB}$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất giỏi! Theo quy tắc hình bình hành: Hai vectơ cạnh chung gốc cộng lại sẽ bằng vectơ đường chéo xuất phát từ gốc đó: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.",
              feedbackWrong: "Lưu ý: Vectơ tổng phải xuất phát từ gốc $A$ đến đỉnh đối diện $C$."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về Quy tắc Cộng",
            content: "Nhớ 2 câu thần chú: <strong>'Nối đuôi nhau thì dùng Ba Điểm; Chung một gốc thì dùng Bình Hành!'</strong>. Nối đuôi: điểm cuối anh trước là đầu anh sau $\\implies$ rút gọn về đầu cuối."
          },

          workedExample: {
            title: "Ví dụ 1 (SGK trang 52) - Tính độ dài vectơ tổng trong hình vuông",
            problem: "Cho hình vuông $ABCD$ với cạnh có độ dài bằng $1$. Tính độ dài của các vectơ $\\vec{u} = \\vec{AB} + \\vec{CB}$ và $\\vec{v} = \\vec{AB} + \\vec{DC} + \\vec{BD}$.",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <p>1. <strong>Tính độ dài $\\vec{u} = \\vec{AB} + \\vec{CB}$:</strong></p>
              <p>Vì $ABCD$ là hình vuông nên $\\vec{AB} = \\vec{DC}$. Thay vào biểu thức ta có:</p>
              <p>$$\\vec{u} = \\vec{DC} + \\vec{CB} = \\vec{DB} \\quad (\\text{áp dụng quy tắc ba điểm}).$$</p>
              <p>Vì đường chéo hình vuông cạnh bằng $1$ là $DB = \\sqrt{1^2 + 1^2} = \\sqrt{2}$, nên:</p>
              <p>$$|\\vec{u}| = |\\vec{DB}| = DB = \\sqrt{2}.$$</p>
              <p>2. <strong>Tính độ dài $\\vec{v} = \\vec{AB} + \\vec{DC} + \\vec{BD}$:</p>
              <p>Áp dụng tính chất giao hoán và kết hợp của phép cộng vectơ:</p>
              <p>$$\\vec{v} = (\\vec{AB} + \\vec{BD}) + \\vec{DC} = \\vec{AD} + \\vec{DC} = \\vec{AC}.$$</p>
              <p>Độ dài đường chéo $AC = \\sqrt{2}$. Do đó $|\\vec{v}| = |\\vec{AC}| = AC = \\sqrt{2}$.</p>
              <p><strong>Kết luận:</strong> $|\\vec{AB} + \\vec{CB}| = \\sqrt{2}$ và $|\\vec{AB} + \\vec{DC} + \\vec{BD}| = \\sqrt{2}$.</p>
            `,
            teacherGuidance: "Khi các vectơ chưa nối đuôi nhau, các em hãy thay thế bằng một vectơ bằng với nó hoặc đổi thứ tự cộng để xuất hiện quy tắc ba điểm."
          }
        }
      ]
    },
    {
      num: "2",
      title: "HIỆU CỦA HAI VECTƠ",
      subsections: [
        {
          key: "2a",
          title: "Khái niệm vectơ đối, định nghĩa hiệu và Quy tắc hiệu",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 10 - Trang 52:</div>
              <ul class="sgk-box-list">
                <li>Vectơ có cùng độ dài và ngược hướng với vectơ $\\vec{a}$ được gọi là <strong>vectơ đối</strong> của vectơ $\\vec{a}$. Vectơ đối của $\\vec{a}$ được kí hiệu là $-\\vec{a}$.</li>
                <li>Vectơ $\\vec{0}$ được coi là vectơ đối của chính nó.</li>
                <li>Hai vectơ là đối nhau khi và chỉ khi tổng của chúng bằng $\\vec{0}$.</li>
              </ul>
            </div>

            <div class="sgk-framed-box" style="margin-top: 14px; background: #eff6ff; border-left-color: #2563eb;">
              <div class="sgk-box-tag" style="color: #1d4ed8;"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 10 - Trang 53:</div>
              <ul class="sgk-box-list" style="color: #1e40af;">
                <li>Vectơ $\\vec{a} + (-\\vec{b})$ được gọi là <strong>hiệu của hai vectơ $\\vec{a}$ và $\\vec{b}$</strong> và được kí hiệu là $\\vec{a} - \\vec{b}$. Phép lấy hiệu hai vectơ được gọi là <strong>phép trừ vectơ</strong>.</li>
                <li><strong>Quy tắc hiệu:</strong> Với ba điểm $O, M, N$ tuỳ ý, ta có $\\vec{MN} = \\vec{ON} - \\vec{OM}$.</li>
              </ul>
            </div>

            <div class="theory-details-wrap" style="margin-top: 14px;">
              <p><strong>Tính chất trung điểm và trọng tâm (SGK trang 53):</strong></p>
              <ul>
                <li>Điểm $I$ là trung điểm của đoạn thẳng $AB$ khi và chỉ khi: $\\vec{IA} + \\vec{IB} = \\vec{0}$.</li>
                <li>Điểm $G$ là trọng tâm của tam giác $ABC$ khi và chỉ khi: $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.</li>
              </ul>
            </div>
          `,
          audioUrl: "assets/audio/b10_8_sec2a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-10-8-2a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Vectơ đối",
              question: "Vectơ đối của vectơ $\\vec{AB}$ là:",
              options: [
                "$-\\vec{AB} = \\vec{BA}$",
                "$\\vec{AB}$",
                "$-\\vec{BA}$",
                "$\\vec{AA}$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Vectơ đối của $\\vec{AB}$ là $-\\vec{AB}$, đồng thời chính là $\\vec{BA}$.",
              feedbackWrong: "Vectơ đối có cùng độ dài nhưng đảo ngược chiều mũi tên: $-\\vec{AB} = \\vec{BA}$."
            },
            {
              id: "cp-10-8-2a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Quy tắc trừ hai vectơ chung gốc",
              question: "Với ba điểm bất kì $O, A, B$, hiệu $\\vec{OB} - \\vec{OA}$ bằng:",
              options: [
                "$\\vec{AB}$",
                "$\\vec{BA}$",
                "$\\vec{OA} + \\vec{OB}$",
                "$\\vec{0}$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất xuất sắc! Quy tắc trừ chung gốc: ngọn trừ gốc $\\vec{OB} - \\vec{OA} = \\vec{AB}$.",
              feedbackWrong: "Ghi nhớ quy tắc trừ: $\\vec{OB} - \\vec{OA} = \\vec{AB}$ (ngọn $B$ trừ gốc $A$ thành vectơ đi từ $A$ đến $B$)."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về Quy tắc Trừ",
            content: "Để không bao giờ bị ngược hướng khi trừ hai vectơ chung gốc: <strong>'Phép trừ chung gốc: Lấy NGỌN của số bị trừ làm ĐIỂM CUỐI, ngọn của số trừ làm ĐIỂM ĐẦU'</strong>. Tức là: $\\vec{OB} - \\vec{OA} = \\vec{AB}$."
          },

          workedExample: {
            title: "Ví dụ 2 (SGK trang 53) - Áp dụng quy tắc hiệu trong hình bình hành",
            problem: "Cho hình bình hành $ABCD$ và một điểm $O$ bất kì. Chứng minh rằng $\\vec{OB} - \\vec{OA} = \\vec{OC} - \\vec{OD}$.",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <p>1. Áp dụng quy tắc hiệu cho vế trái:</p>
              <p>$$\\vec{OB} - \\vec{OA} = \\vec{AB}.$$</p>
              <p>2. Áp dụng quy tắc hiệu cho vế phải:</p>
              <p>$$\\vec{OC} - \\vec{OD} = \\vec{DC}.$$</p>
              <p>3. Vì $ABCD$ là hình bình hành nên hai cạnh đối $AB$ và $DC$ song song và bằng nhau, đồng thời hướng từ $A \\to B$ cùng hướng từ $D \\to C$.</p>
              <p>Do đó ta có $\\vec{AB} = \\vec{DC}$.</p>
              <p>Từ đó suy ra $\\vec{OB} - \\vec{OA} = \\vec{OC} - \\vec{OD}$.</p>
              <p><strong>Kết luận:</strong> Đẳng thức đã được chứng minh xong.</p>
            `,
            teacherGuidance: "Khi gặp hiệu hai vectơ có chung gốc, hãy lập tức áp dụng quy tắc trừ để rút gọn về một vectơ duy nhất."
          }
        }
      ]
    }
  ],

  // 4. Chốt bài học
  realworldWrapup: {
    title: "GIẢI QUYẾT BÀI TOÁN DẪN NHẬP CA NÔ QUA SÔNG TIỀN",
    recap: "Đầu bài học, ta băn khoăn: Làm thế nào xác định vận tốc thực tế của con tàu vượt dòng sông Tiền, và cần hướng mũi tàu thế nào để sang bờ bên kia nhanh nhất?",
    solution: `
      <p><strong>Lời giải chi tiết chốt vấn đề của Thầy Sáng:</strong></p>
      <p>1. <strong>Tổng hợp vận tốc theo quy tắc hình bình hành:</strong></p>
      <p>Gọi $\\vec{v}_r$ là vectơ vận tốc riêng của tàu hướng vuông góc với bờ sông, $\\vec{v}_n$ là vectơ vận tốc của dòng chảy sông Tiền dọc theo bờ sông. Vì con tàu chuyển động đồng thời theo cả hai phương nên vận tốc thực tế của tàu đối với bờ là vectơ tổng:</p>
      <p>$$\\vec{v} = \\vec{v}_r + \\vec{v}_n.$$</p>
      <p>Vì $\\vec{v}_r \\perp \\vec{v}_n$ nên độ lớn vận tốc thực tế là $v = \\sqrt{v_r^2 + v_n^2}$.</p>
      <p>2. <strong>Để sang bờ bên kia nhanh nhất:</strong></p>
      <p>Thời gian sang sông chỉ phụ thuộc vào thành phần vận tốc vuông góc với bờ. Do đó, người lái tàu cần <strong>hướng mũi tàu vuông góc với bờ sông</strong> ($90^\\circ$). Khi đó vận tốc riêng của máy tàu sẽ đưa tàu cập bờ bên kia trong thời gian ngắn nhất $t = d / v_r$ (dù điểm cập bến sẽ bị dòng nước đẩy xuôi xuống hạ lưu một đoạn)!</p>
    `,
    audioUrl: "assets/audio/b10_8_wrapup.mp3",
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
        id: "mc-10-8-1",
        num: 1,
        level: "Nhận biết",
        prompt: "Cho ba điểm phân biệt $A, B, C$. Đẳng thức nào sau đây là <strong>đúng</strong> theo quy tắc ba điểm?",
        options: [
          "$\\vec{AB} + \\vec{BC} = \\vec{AC}$",
          "$\\vec{AB} + \\vec{CB} = \\vec{AC}$",
          "$\\vec{BA} + \\vec{BC} = \\vec{AC}$",
          "$\\vec{AB} + \\vec{BC} = \\vec{CA}$"
        ],
        correctIndex: 0,
        solution: "Theo quy tắc ba điểm SGK trang 52: $\\vec{AB} + \\vec{BC} = \\vec{AC}$.",
        similarVariation: {
          prompt: "Cho ba điểm $M, N, P$. Tổng $\\vec{MN} + \\vec{NP}$ bằng:",
          options: ["$\\vec{MP}$", "$\\vec{PM}$", "$\\vec{PN}$", "$\\vec{NM}$"],
          correctIndex: 0,
          solution: "Điểm nối $N$ triệt tiêu, còn lại $\\vec{MP}$."
        }
      },
      {
        id: "mc-10-8-2",
        num: 2,
        level: "Nhận biết",
        prompt: "Cho hình bình hành $ABCD$. Tổng của hai vectơ $\\vec{AB} + \\vec{AD}$ bằng:",
        options: [
          "$\\vec{AC}$",
          "$\\vec{BD}$",
          "$\\vec{CA}$",
          "$\\vec{DB}$"
        ],
        correctIndex: 0,
        solution: "Theo quy tắc hình bình hành SGK trang 52: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.",
        similarVariation: {
          prompt: "Trong hình bình hành $ABCD$, tổng $\\vec{CB} + \\vec{CD}$ bằng:",
          options: ["$\\vec{CA}$", "$\\vec{AC}$", "$\\vec{BD}$", "$\\vec{DB}$"],
          correctIndex: 0,
          solution: "Xuất phát từ đỉnh $C$, vectơ tổng là đường chéo $\\vec{CA}$."
        }
      },
      {
        id: "mc-10-8-3",
        num: 3,
        level: "Nhận biết",
        prompt: "Vectơ đối của vectơ $\\vec{a}$ là vectơ:",
        options: [
          "Cùng độ dài và ngược hướng với vectơ $\\vec{a}$",
          "Cùng độ dài và cùng hướng với vectơ $\\vec{a}$",
          "Khác độ dài và ngược hướng",
          "Có độ dài bằng 0"
        ],
        correctIndex: 0,
        solution: "Định nghĩa SGK trang 52: Vectơ đối có cùng độ dài và ngược hướng với vectơ đã cho.",
        similarVariation: {
          prompt: "Tổng của một vectơ và vectơ đối của nó luôn bằng:",
          options: ["$\\vec{0}$", "$0$", "$1$", "$-1$"],
          correctIndex: 0,
          solution: "$\\vec{a} + (-\\vec{a}) = \\vec{0}$."
        }
      },
      {
        id: "mc-10-8-4",
        num: 4,
        level: "Nhận biết",
        prompt: "Cho điểm $I$ là trung điểm của đoạn thẳng $AB$. Đẳng thức vectơ nào sau đây là <strong>đúng</strong>?",
        options: [
          "$\\vec{IA} + \\vec{IB} = \\vec{0}$",
          "$\\vec{IA} = \\vec{IB}$",
          "$\\vec{IA} - \\vec{IB} = \\vec{0}$",
          "$\\vec{AI} + \\vec{BI} = \\vec{AB}$"
        ],
        correctIndex: 0,
        solution: "Vì $I$ là trung điểm $AB$ nên $\\vec{IA}$ và $\\vec{IB}$ là hai vectơ đối nhau, do đó $\\vec{IA} + \\vec{IB} = \\vec{0}$.",
        similarVariation: {
          prompt: "Nếu $M$ là trung điểm của $PQ$ thì vectơ đối của $\\vec{MP}$ là:",
          options: ["$\\vec{MQ}$", "$\\vec{PM}$", "$\\vec{QP}$", "$\\vec{PQ}$"],
          correctIndex: 0,
          solution: "Vì $\\vec{MP} + \\vec{MQ} = \\vec{0}$ nên vectơ đối của $\\vec{MP}$ chính là $\\vec{MQ}$."
        }
      },
      {
        id: "mc-10-8-5",
        num: 5,
        level: "Nhận biết",
        prompt: "Với ba điểm bất kì $O, M, N$, hiệu $\\vec{ON} - \\vec{OM}$ bằng:",
        options: [
          "$\\vec{MN}$",
          "$\\vec{NM}$",
          "$\\vec{MO}$",
          "$\\vec{NO}$"
        ],
        correctIndex: 0,
        solution: "Theo quy tắc hiệu SGK trang 53: $\\vec{ON} - \\vec{OM} = \\vec{MN}$.",
        similarVariation: {
          prompt: "Hiệu $\\vec{OB} - \\vec{OA}$ bằng:",
          options: ["$\\vec{AB}$", "$\\vec{BA}$", "$\\vec{0}$", "$-\\vec{AB}$"],
          correctIndex: 0,
          solution: "Ngọn trừ gốc: $\\vec{OB} - \\vec{OA} = \\vec{AB}$."
        }
      }
    ],

    // Dạng 2: 3 câu Đúng/Sai (Thông hiểu - chuẩn 4 ý a, b, c, d)
    part2TrueFalse: [
      {
        id: "tf-10-8-1",
        num: 1,
        level: "Thông hiểu",
        prompt: "Cho hình vuông $ABCD$ cạnh bằng $a$, tâm $O$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { label: "a", key: "a", statement: "$\\vec{AB} + \\vec{AD} = \\vec{AC}$.", text: "$\\vec{AB} + \\vec{AD} = \\vec{AC}$.", isTrue: true, isCorrect: true },
          { label: "b", key: "b", statement: "$|\\vec{AB} + \\vec{AD}| = a\\sqrt{2}$.", text: "$|\\vec{AB} + \\vec{AD}| = a\\sqrt{2}$.", isTrue: true, isCorrect: true },
          { label: "c", key: "c", statement: "$\\vec{OA} + \\vec{OC} = \\vec{0}$.", text: "$\\vec{OA} + \\vec{OC} = \\vec{0}$.", isTrue: true, isCorrect: true },
          { label: "d", key: "d", statement: "$\\vec{AB} - \\vec{AD} = \\vec{BD}$.", text: "$\\vec{AB} - \\vec{AD} = \\vec{BD}$.", isTrue: false, isCorrect: false }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Theo quy tắc hình bình hành.</li>
            <li>b) <strong>ĐÚNG:</strong> $|\\vec{AC}| = AC = a\\sqrt{2}$.</li>
            <li>c) <strong>ĐÚNG:</strong> $O$ là trung điểm $AC$ nên $\\vec{OA}$ và $\\vec{OC}$ đối nhau $\\implies \\vec{OA} + \\vec{OC} = \\vec{0}$.</li>
            <li>d) <strong>SAI:</strong> Theo quy tắc trừ $\\vec{AB} - \\vec{AD} = \\vec{DB}$, không phải $\\vec{BD}$.</li>
          </ul>
        `
      },
      {
        id: "tf-10-8-2",
        num: 2,
        level: "Thông hiểu",
        prompt: "Cho tam giác $ABC$ có trọng tâm $G$ và $M$ là trung điểm cạnh $BC$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { label: "a", key: "a", statement: "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.", text: "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.", isTrue: true, isCorrect: true },
          { label: "b", key: "b", statement: "$\\vec{AB} + \\vec{AC} = 2\\vec{AM}$.", text: "$\\vec{AB} + \\vec{AC} = 2\\vec{AM}$.", isTrue: true, isCorrect: true },
          { label: "c", key: "c", statement: "$\\vec{MB} + \\vec{MC} = \\vec{0}$.", text: "$\\vec{MB} + \\vec{MC} = \\vec{0}$.", isTrue: true, isCorrect: true },
          { label: "d", key: "d", statement: "$\\vec{GB} + \\vec{GC} = \\vec{GA}$.", text: "$\\vec{GB} + \\vec{GC} = \\vec{GA}$.", isTrue: false, isCorrect: false }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Tính chất trọng tâm tam giác.</li>
            <li>b) <strong>ĐÚNG:</strong> Tính chất trung điểm: $\\vec{AB} + \\vec{AC} = 2\\vec{AM}$.</li>
            <li>c) <strong>ĐÚNG:</strong> $M$ là trung điểm $BC$.</li>
            <li>d) <strong>SAI:</strong> Vì $\\vec{GB} + \\vec{GC} + \\vec{GA} = \\vec{0} \\implies \\vec{GB} + \\vec{GC} = -\\vec{GA}$.</li>
          </ul>
        `
      },
      {
        id: "tf-10-8-3",
        num: 3,
        level: "Thông hiểu",
        prompt: "Cho bốn điểm phân biệt $A, B, C, D$. Xét tính Đúng/Sai của các đẳng thức vectơ sau:",
        items: [
          { label: "a", key: "a", statement: "$\\vec{AB} + \\vec{BC} + \\vec{CD} = \\vec{AD}$.", text: "$\\vec{AB} + \\vec{BC} + \\vec{CD} = \\vec{AD}$.", isTrue: true, isCorrect: true },
          { label: "b", key: "b", statement: "$\\vec{AB} - \\vec{CD} = \\vec{AC} - \\vec{BD}$.", text: "$\\vec{AB} - \\vec{CD} = \\vec{AC} - \\vec{BD}$.", isTrue: false, isCorrect: false },
          { label: "c", key: "c", statement: "$\\vec{AB} + \\vec{CD} = \\vec{AD} + \\vec{CB}$.", text: "$\\vec{AB} + \\vec{CD} = \\vec{AD} + \\vec{CB}$.", isTrue: true, isCorrect: true },
          { label: "d", key: "d", statement: "$\\vec{AB} + \\vec{DA} = \\vec{DB}$.", text: "$\\vec{AB} + \\vec{DA} = \\vec{DB}$.", isTrue: true, isCorrect: true }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Quy tắc ba điểm nối tiếp nhiều vectơ.</li>
            <li>b) <strong>SAI:</strong> $\\vec{AB} + \\vec{BD} = \\vec{AD}$ còn $\\vec{AC} + \\vec{CD} = \\vec{AD}$.</li>
            <li>c) <strong>ĐÚNG:</strong> $\\vec{AB} - \\vec{AD} = \\vec{DB}$ và $\\vec{CB} - \\vec{CD} = \\vec{DB}$.</li>
            <li>d) <strong>ĐÚNG:</strong> $\\vec{DA} + \\vec{AB} = \\vec{DB}$.</li>
          </ul>
        `
      }
    ],

    // Dạng 3: 2 câu Trả lời ngắn (Toán thực tế - Vận dụng)
    part3ShortAnswer: [
      {
        id: "sa-10-8-1",
        num: 1,
        level: "Vận dụng",
        prompt: "Một chất điểm chịu tác động đồng thời của hai lực $\\vec{F}_1$ và $\\vec{F}_2$ vuông góc với nhau tại điểm $O$. Biết độ lớn $|\vec{F}_1| = 30\\text{ N}$ và $|\vec{F}_2| = 40\\text{ N}$. Tính độ lớn của hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ tác dụng lên chất điểm (đơn vị: Newton).",
        correctValue: "50",
        acceptableAnswers: ["50", "50 N", "50N"],
        unit: "N",
        solution: "Theo quy tắc hình bình hành, vì hai lực vuông góc với nhau nên hình bình hành lực là hình chữ nhật. Do đó độ lớn hợp lực tính theo định lí Pythagore: $|\\vec{F}| = \\sqrt{F_1^2 + F_2^2} = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\text{ N}$.",
        similarVariation: {
          prompt: "Nếu hai lực vuông góc có độ lớn lần lượt là $60\\text{ N}$ và $80\\text{ N}$, độ lớn của hợp lực bằng bao nhiêu Newton?",
          correctValue: "100",
          acceptableAnswers: ["100", "100 N"],
          solution: "$\\sqrt{60^2 + 80^2} = 100\\text{ N}$."
        }
      },
      {
        id: "sa-10-8-2",
        num: 2,
        level: "Vận dụng",
        prompt: "Cho tam giác đều $ABC$ có cạnh bằng $6\\text{ cm}$. Tính độ dài của vectơ tổng $\\vec{u} = \\vec{AB} + \\vec{AC}$ (kết quả làm tròn đến chữ số thập phân thứ nhất, đơn vị cm).",
        correctValue: "10.4",
        acceptableAnswers: ["10.4", "10,4", "10.39"],
        unit: "cm",
        solution: "Gọi $M$ là trung điểm của cạnh $BC$. Theo tính chất trung điểm ta có: $\\vec{AB} + \\vec{AC} = 2\\vec{AM}$. Vì tam giác $ABC$ đều cạnh $a = 6\\text{ cm}$ nên đường trung tuyến $AM = \\frac{a\\sqrt{3}}{2} = \\frac{6\\sqrt{3}}{2} = 3\\sqrt{3}\\text{ cm}$. Do đó độ dài $|\\vec{u}| = 2 AM = 2 \\times 3\\sqrt{3} = 6\\sqrt{3} \\approx 10{,}392\\text{ cm}$. Làm tròn 1 chữ số thập phân ta được $10{,}4\\text{ cm}$.",
        similarVariation: {
          prompt: "Cho tam giác đều $ABC$ cạnh bằng $4\\text{ cm}$. Tính độ dài của vectơ $\\vec{AB} - \\vec{AC}$ (đơn vị: cm).",
          correctValue: "4",
          acceptableAnswers: ["4", "4 cm"],
          solution: "$\\vec{AB} - \\vec{AC} = \\vec{CB}$, độ dài bằng $CB = 4\\text{ cm}$."
        }
      }
    ]
  }
};

// Tự động gán vào Window để Engine nhận diện
if (typeof window !== "undefined") {
  window.LESSON_10_8_DATA = window.LESSON_10_C4_B8_DATA;
}
