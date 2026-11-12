/**
 * BÀI HỌC SỐ: BÀI 7. CÁC KHÁI NIỆM MỞ ĐẦU (TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - Phần I: Lời chào của Thầy Sáng + Nút Voice AI vàng đồng, chỉnh tốc độ
 * - Phần II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 46 + Voice AI
 * - Phần III: Tiến trình bài học (Dẫn nhập bão gió Ga An Cựu Huế, 2 mục lý thuyết đóng khung nguyên văn SGK, 
 *             TikZ SVG vector chuẩn mực, POI checkpoints giữa & cuối, Mẹo nhớ, Ví dụ tự luận ẩn/hiện, Chốt bài học)
 * - Phần IV: Bài tập trắc nghiệm tổng hợp chuẩn cấu trúc thi mới 2025:
 *             + 5 câu trắc nghiệm nhiều lựa chọn (Dễ - Nhận biết)
 *             + 3 câu trắc nghiệm Đúng/Sai 4 ý (Thông hiểu)
 *             + 2 câu trả lời ngắn thực tế (Vận dụng)
 *             + Kèm nút "Lời giải chi tiết" và nút "Bài toán tương tự" đổi số tự động
 */

window.LESSON_10_C4_B7_DATA = {
  id: "10-c4-b7",
  number: "Bài 7",
  title: "Các khái niệm mở đầu",
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
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 46)
  // =========================================================================
  learningGoals: [
    "Nhận biết và phân biệt chính xác khái niệm vectơ, độ dài vectơ, giá của vectơ và vectơ-không.",
    "Làm chủ khái niệm hai vectơ cùng phương, hai vectơ cùng hướng, ngược hướng và hai vectơ bằng nhau.",
    "Vận dụng thành thạo điều kiện hai vectơ cùng phương để giải bài toán ba điểm thẳng hàng trong hình học.",
    "Biểu thị chính xác các đại lượng có hướng trong đời sống và Vật lý (vận tốc gió, lực kéo, trọng lực) bằng công cụ vectơ."
  ],
  goalsAudioUrl: "assets/audio/b10_7_goals.mp3",
  goalsButtonLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================
  // 1. Bài toán dẫn nhập
  hook: {
    title: "Bài toán dự báo gió bão và định vị bản đồ Cố đô Huế",
    story: "Trong một bản tin dự báo khí tượng thời quyển, biên tập viên thông báo: 'Nhiệt độ hiện tại tại trung tâm TP. Huế là 30 độ C; một luồng gió Đông Nam đang thổi mạnh với tốc độ 18 km/h'. Bạn Nam nhận xét: 'Để mô tả nhiệt độ ta chỉ cần con số 30 độ C, nhưng để mô tả gió thì phải biết cả tốc độ 18 km/h lẫn hướng thổi Đông Nam'. Tương tự, nhìn trên bản đồ số, Ga An Cựu nằm cách Hoàng thành Huế 3,01 km về hướng Đông Nam. Hai thông tin khoảng cách và hướng đi cho phép xác định chính xác vị trí một địa danh. Trong Toán học, công cụ nào giúp chúng ta mô tả trọn vẹn cả độ lớn lẫn hướng đi của một đại lượng như vậy? Đó chính là khái niệm Vectơ!",
    illustration: "",
    illustrationCaption: "Bản đồ định vị Ga An Cựu cách Hoàng thành Huế 3,01 km về hướng Đông Nam",
    question: "Nếu chỉ biết con tàu chuyển động với tốc độ 20 km/h mà không biết hướng di chuyển, hoa tiêu có thể đưa tàu cập bến an toàn tránh bão được không? Vì sao cần cả hướng và độ lớn?",
    audioUrl: "assets/audio/b10_7_hook.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    bridge: "Hãy cùng Thầy Sáng bước vào khám phá thế giới Vectơ đầy trực quan ngay sau đây!"
  },

  // 2. Trình phát bài giảng tương tác tích hợp POI
  interactiveAudio: {
    title: "Bài giảng tương tác: Các khái niệm mở đầu về Vectơ",
    audioUrl: "assets/audio/b7_main_lecture.mp3",
    duration: 68,
    timestamps: [
      {
        id: "poi-10-7-1",
        time: 26,
        title: "Điểm dừng 1: Khái niệm vectơ và độ dài",
        question: "Vectơ $\\vec{AB}$ có điểm đầu và điểm cuối lần lượt là:",
        options: [
          "Điểm đầu là $A$, điểm cuối là $B$",
          "Điểm đầu là $B$, điểm cuối là $A$",
          "Cả hai điểm đều là điểm đầu",
          "Không phân biệt điểm đầu và điểm cuối"
        ],
        correctIndex: 0,
        hint: "Thứ tự đọc tên vectơ luôn là từ gốc (điểm đầu) đến ngọn mũi tên (điểm cuối).",
        explain: "Chính xác! Kí hiệu $\\vec{AB}$ quy ước điểm viết trước $A$ là điểm đầu (gốc), điểm viết sau $B$ là điểm cuối (ngọn có mũi tên)."
      },
      {
        id: "poi-10-7-2",
        time: 54,
        title: "Điểm dừng 2: Điều kiện để hai vectơ bằng nhau",
        question: "Hai vectơ $\\vec{a}$ và $\\vec{b}$ được gọi là bằng nhau khi nào?",
        options: [
          "Khi chúng có cùng độ dài và cùng hướng",
          "Chỉ cần chúng có cùng độ dài",
          "Chỉ cần chúng song song với nhau",
          "Khi chúng cùng độ dài và ngược hướng"
        ],
        correctIndex: 0,
        hint: "Hai vectơ bằng nhau phải thỏa mãn đồng thời cả 2 yếu tố: cùng hướng và cùng độ lớn.",
        explain: "Xuất sắc! Hai vectơ bằng nhau khi và chỉ khi chúng cùng độ dài và cùng hướng, kí hiệu là $\\vec{a} = \\vec{b}$."
      }
    ]
  },

  // 3. Triển khai các mục lý thuyết chuẩn SGK
  sections: [
    {
      num: "1",
      title: "KHÁI NIỆM VECTƠ",
      subsections: [
        {
          key: "1a",
          title: "Định nghĩa vectơ và độ dài của vectơ",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 10 - Trang 47:</div>
              <ul class="sgk-box-list">
                <li><strong>Vectơ</strong> là một đoạn thẳng có hướng, nghĩa là trong hai điểm mút của đoạn thẳng, đã chỉ rõ điểm đầu, điểm cuối.</li>
                <li><strong>Độ dài của vectơ</strong> là khoảng cách giữa điểm đầu và điểm cuối của vectơ đó.</li>
              </ul>
            </div>

            <div class="theory-details-wrap" style="margin-top: 14px;">
              <p><strong>Kí hiệu & Quy ước:</strong></p>
              <ul>
                <li>Vectơ có điểm đầu là $A$ và điểm cuối là $B$ được kí hiệu là $\\vec{AB}$ (đọc là <em>vectơ $AB$</em>).</li>
                <li>Để vẽ vectơ $\\vec{AB}$, ta vẽ đoạn thẳng nối $A$ và $B$, rồi đánh dấu mũi tên ở điểm cuối $B$.</li>
                <li>Khi không cần chỉ rõ điểm đầu và điểm cuối, vectơ còn được kí hiệu là $\\vec{a}, \\vec{b}, \\vec{u}, \\vec{v}, \\vec{x}, \\vec{y}$.</li>
                <li>Độ dài của vectơ $\\vec{AB}, \\vec{a}$ tương ứng được kí hiệu là $|\\vec{AB}|, |\\vec{a}|$. Ta có $|\\vec{AB}| = AB$. Độ dài của vectơ là một số không âm.</li>
              </ul>
            </div>

            <!-- TikZ SVG Minh họa Vectơ -->
            <div class="tikz-svg-card">
              <div class="tikz-svg-title"><i class="fa-solid fa-draw-polygon"></i> Hình học trực quan: Biểu diễn Vectơ $\\vec{AB}$ và $\\vec{a}$</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="460" height="150" viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                    </marker>
                    <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                    </marker>
                  </defs>
                  <!-- Vector AB -->
                  <circle cx="50" cy="100" r="5" fill="#0284c7"/>
                  <text x="40" y="125" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0369a1">A (Điểm đầu)</text>
                  <line x1="50" y1="100" x2="210" y2="40" stroke="#0284c7" stroke-width="3" marker-end="url(#arrow-blue)"/>
                  <circle cx="210" cy="40" r="5" fill="#0284c7"/>
                  <text x="215" y="42" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0369a1">B (Điểm cuối)</text>
                  <text x="120" y="60" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0284c7">\\vec{AB}</text>

                  <!-- Vector a tự do -->
                  <line x1="280" y1="90" x2="410" y2="50" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
                  <text x="345" y="60" font-family="sans-serif" font-size="15" font-weight="bold" fill="#dc2626">\\vec{a}</text>
                  <text x="290" y="125" font-family="sans-serif" font-size="13" fill="#64748b">Vectơ tự do</text>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình 4.3 & 4.4 SGK: Vectơ có điểm mút xác định $\\vec{AB}$ và vectơ kí hiệu bằng chữ in thường $\\vec{a}$</em>
              </div>
            </div>
          `,
          audioUrl: "assets/audio/b10_7_sec1a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          // 2 câu hỏi POI tương tác bắt buộc
          checkpoints: [
            {
              id: "cp-10-7-1a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Điểm đầu và điểm cuối",
              question: "Cho đoạn thẳng $MN$. Có bao nhiêu vectơ khác vectơ-không có điểm đầu và điểm cuối là các điểm $M$ hoặc $N$?",
              options: [
                "2 vectơ (đó là $\\vec{MN}$ và $\\vec{NM}$)",
                "1 vectơ (đoạn thẳng chỉ có 1 vectơ)",
                "4 vectơ",
                "Vô số vectơ"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất giỏi! Mỗi đoạn thẳng $MN$ cho ta đúng 2 vectơ có hướng ngược nhau: $\\vec{MN}$ (từ $M$ đến $N$) và $\\vec{NM}$ (từ $N$ đến $M$).",
              feedbackWrong: "Chú ý: Một đoạn thẳng có 2 đầu mút, chọn 1 điểm làm gốc và 1 điểm làm ngọn ta được 2 hướng đi khác biệt."
            },
            {
              id: "cp-10-7-1a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Độ dài của vectơ",
              question: "Cho tam giác đều $ABC$ cạnh $a$. Độ dài của vectơ $\\vec{AB}$ bằng bao nhiêu?",
              options: [
                "$|\\vec{AB}| = a$",
                "$|\\vec{AB}| = 2a$",
                "$|\\vec{AB}| = a\\sqrt{3}$",
                "$|\\vec{AB}| = \\frac{a}{2}$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Độ dài của vectơ $\\vec{AB}$ chính là độ dài đoạn thẳng $AB$, do đó $|\\vec{AB}| = AB = a$.",
              feedbackWrong: "Ghi nhớ: Độ dài của vectơ $\\vec{AB}$ luôn bằng khoảng cách giữa hai điểm $A$ và $B$, tức là độ dài đoạn thẳng $AB$."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về Vectơ",
            content: "Nhớ nằm lòng câu này các em nhé: <strong>'Đoạn thẳng vô hướng, vectơ có đầu có đuôi'</strong>. Đọc tên vectơ thì đọc điểm gốc trước, ngọn mũi tên sau; độ dài vectơ chính là chiều dài thực của đoạn thẳng, luôn là số dương (hoặc bằng 0)."
          },

          workedExample: {
            title: "Ví dụ 1 (SGK trang 47) - Tính độ dài vectơ trong hình phẳng",
            problem: "Cho hình vuông $ABCD$ với cạnh có độ dài bằng 1. Tính độ dài của các vectơ $\\vec{AC}, \\vec{CA}, \\vec{BD}$.",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <p>Vì tứ giác $ABCD$ là hình vuông cạnh bằng $1$ nên hai đường chéo $AC$ và $BD$ bằng nhau.</p>
              <p>Áp dụng định lí Pythagore trong tam giác vuông $ABC$ vuông tại $B$:</p>
              <p>$$AC = \\sqrt{AB^2 + BC^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}.$$</p>
              <p>Do đó:</p>
              <ul>
                <li>$|\\vec{AC}| = AC = \\sqrt{2}.$</li>
                <li>$|\\vec{CA}| = CA = \\sqrt{2}.$</li>
                <li>$|\\vec{BD}| = BD = AC = \\sqrt{2}.$</li>
              </ul>
              <p><strong>Kết luận:</strong> $|\\vec{AC}| = |\\vec{CA}| = |\\vec{BD}| = \\sqrt{2}$.</p>
            `,
            teacherGuidance: "Lưu ý quan trọng: Hai vectơ $\\vec{AC}$ và $\\vec{CA}$ là hai vectơ có hướng ngược nhau, nhưng độ dài của chúng luôn bằng nhau vì cùng bằng độ dài đoạn thẳng $AC$."
          }
        }
      ]
    },
    {
      num: "2",
      title: "HAI VECTƠ CÙNG PHƯƠNG, CÙNG HƯỚNG, BẰNG NHAU",
      subsections: [
        {
          key: "2a",
          title: "Giá của vectơ và Hai vectơ cùng phương, cùng hướng",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 10 - Trang 48:</div>
              <ul class="sgk-box-list">
                <li>Đường thẳng đi qua điểm đầu và điểm cuối của một vectơ được gọi là <strong>giá của vectơ</strong> đó.</li>
                <li>Hai vectơ được gọi là <strong>cùng phương</strong> nếu chúng có giá song song hoặc trùng nhau.</li>
                <li>Đối với hai vectơ cùng phương thì chúng <strong>cùng hướng</strong> hoặc <strong>ngược hướng</strong>.</li>
              </ul>
            </div>

            <div class="theory-details-wrap" style="margin-top: 14px;">
              <p><strong>Định nghĩa hai vectơ bằng nhau & Vectơ-không:</strong></p>
              <div class="sgk-framed-box" style="background: #f0fdf4; border-left-color: #16a34a;">
                <ul class="sgk-box-list" style="color: #14532d;">
                  <li>Hai vectơ $\\vec{a}$ và $\\vec{b}$ được gọi là <strong>bằng nhau</strong>, kí hiệu $\\vec{a} = \\vec{b}$, nếu chúng có <strong>cùng độ dài và cùng hướng</strong>.</li>
                  <li>Vectơ có điểm đầu và điểm cuối trùng nhau (chẳng hạn $\\vec{AA}, \\vec{BB}$) gọi là <strong>vectơ-không</strong>, kí hiệu là $\\vec{0}$.</li>
                  <li>Quy ước: Vectơ $\\vec{0}$ có độ dài bằng 0, cùng phương và cùng hướng với mọi vectơ.</li>
                </ul>
              </div>
              <p style="margin-top: 10px;"><strong>Đặc tính thẳng hàng (SGK trang 49):</strong> Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương.</p>
            </div>

            <!-- TikZ SVG Minh họa Hai Vectơ Cùng Phương -->
            <div class="tikz-svg-card">
              <div class="tikz-svg-title"><i class="fa-solid fa-arrows-split-up-and-left"></i> Hình học trực quan: Hai vectơ cùng phương, cùng hướng và ngược hướng</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="480" height="170" viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/>
                    </marker>
                    <marker id="arr-orange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ea580c"/>
                    </marker>
                  </defs>
                  <!-- Giá d1 -->
                  <line x1="30" y1="50" x2="450" y2="50" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="6,4"/>
                  <text x="455" y="54" font-family="sans-serif" font-size="12" fill="#94a3b8">d₁ (giá)</text>
                  <!-- Vector a trên d1 -->
                  <line x1="60" y1="50" x2="180" y2="50" stroke="#16a34a" stroke-width="3.5" marker-end="url(#arr-green)"/>
                  <text x="110" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#16a34a">\\vec{a}</text>

                  <!-- Vector b trên d1 ngược hướng -->
                  <line x1="380" y1="50" x2="260" y2="50" stroke="#ea580c" stroke-width="3.5" marker-end="url(#arr-orange)"/>
                  <text x="310" y="40" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ea580c">\\vec{b}</text>

                  <!-- Giá d2 song song d1 -->
                  <line x1="30" y1="120" x2="450" y2="120" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="6,4"/>
                  <text x="455" y="124" font-family="sans-serif" font-size="12" fill="#94a3b8">d₂ // d₁</text>
                  <!-- Vector c cùng hướng với a -->
                  <line x1="120" y1="120" x2="240" y2="120" stroke="#16a34a" stroke-width="3.5" marker-end="url(#arr-green)"/>
                  <text x="170" y="145" font-family="sans-serif" font-size="14" font-weight="bold" fill="#16a34a">\\vec{c}</text>

                  <text x="280" y="125" font-family="sans-serif" font-size="13" fill="#334155">
                    $\\vec{a}$ và $\\vec{c}$ cùng hướng; $\\vec{a}$ và $\\vec{b}$ ngược hướng
                  </text>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình 4.6 & 4.7 SGK: Khái niệm giá và sự cùng phương, cùng hướng của các vectơ</em>
              </div>
            </div>
          `,
          audioUrl: "assets/audio/b10_7_sec2a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          // 2 câu hỏi POI tương tác bắt buộc
          checkpoints: [
            {
              id: "cp-10-7-2a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Nhận biết hai vectơ cùng phương",
              question: "Khẳng định nào sau đây là ĐÚNG khi nói về hai vectơ cùng phương?",
              options: [
                "Hai vectơ cùng phương thì giá của chúng song song hoặc trùng nhau",
                "Hai vectơ cùng phương thì bắt buộc phải có độ dài bằng nhau",
                "Hai vectơ cùng phương thì không thể ngược hướng nhau",
                "Hai vectơ cùng phương thì giá của chúng phải cắt nhau"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Theo định nghĩa SGK, hai vectơ cùng phương khi và chỉ khi giá của chúng song song hoặc trùng nhau.",
              feedbackWrong: "Chú ý: Định nghĩa cùng phương chỉ xét về vị trí tương đối của giá (song song hoặc trùng nhau), không bắt buộc cùng độ dài."
            },
            {
              id: "cp-10-7-2a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Đặc tính của Vectơ-không",
              question: "Mệnh đề nào sau đây SAI khi nói về vectơ-không $\\vec{0}$?",
              options: [
                "Vectơ-không có độ dài bằng 1",
                "Vectơ-không có điểm đầu và điểm cuối trùng nhau",
                "Vectơ-không cùng hướng với mọi vectơ",
                "Vectơ-không có độ dài bằng 0"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất chuẩn! Độ dài của vectơ $\\vec{0}$ bằng 0, không thể bằng 1 (vectơ có độ dài bằng 1 gọi là vectơ đơn vị).",
              feedbackWrong: "Hãy nhớ quy ước SGK trang 48: Vectơ-không có độ dài bằng 0 và cùng hướng với mọi vectơ."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về Cùng Phương & Bằng Nhau",
            content: "Nhớ 2 câu khẩu quyết thần tốc này nhé: <strong>'Muốn cùng hướng, trước hết phải cùng phương (giá song song hoặc trùng)'</strong>. Và <strong>'Bằng nhau là song hành tuyệt đối: vừa bằng độ lớn, vừa chung hướng đi'</strong>."
          },

          workedExample: {
            title: "Ví dụ 2 (SGK trang 48) - Xác định vectơ bằng nhau trong hình chữ nhật",
            problem: "Cho hình chữ nhật $ABCD$. Hãy chỉ ra mối quan hệ về độ dài, phương, hướng giữa các cặp vectơ: $\\vec{AD}$ và $\\vec{BC}$; $\\vec{AB}$ và $\\vec{CD}$; $\\vec{AC}$ và $\\vec{BD}$. Những cặp vectơ nào trong các cặp vectơ trên là bằng nhau?",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <ul>
                <li><strong>Cặp $\\vec{AD}$ và $\\vec{BC}$:</strong>
                  <br>Vì $ABCD$ là hình chữ nhật nên $AD // BC$ và $AD = BC$. Do đó hai vectơ $\\vec{AD}$ và $\\vec{BC}$ có cùng độ dài và cùng hướng đi từ trái sang phải.
                  <br>$\\Rightarrow \\vec{AD} = \\vec{BC}$.
                </li>
                <li><strong>Cặp $\\vec{AB}$ và $\\vec{CD}$:</strong>
                  <br>Ta có $AB // CD$ và $AB = CD$. Do đó $\\vec{AB}$ và $\\vec{CD}$ cùng độ dài, cùng phương nhưng ngược hướng ($\\vec{AB}$ từ trái sang phải, $\\vec{CD}$ từ phải sang trái).
                  <br>$\\Rightarrow \\vec{AB} \\neq \\vec{CD}$ (chúng là hai vectơ đối nhau).
                </li>
                <li><strong>Cặp $\\vec{AC}$ và $\\vec{BD}$:</strong>
                  <br>Hai đường chéo hình chữ nhật có $AC = BD$, do đó $|\\vec{AC}| = |\\vec{BD}|$. Tuy nhiên giá của chúng là hai đường thẳng cắt nhau (không song song, không trùng nhau), nên $\\vec{AC}$ và $\\vec{BD}$ không cùng phương.
                  <br>$\\Rightarrow \\vec{AC} \\neq \\vec{BD}$.
                </li>
              </ul>
              <p><strong>Kết luận:</strong> Trong các cặp vectơ trên, chỉ có cặp $\\vec{AD} = \\vec{BC}$ là bằng nhau.</p>
            `,
            teacherGuidance: "Bí quyết giải nhanh: Để hai vectơ bằng nhau, các em kiểm tra 2 bước: 1) Hai mũi tên chỉ về cùng một phía hay không? 2) Hai đoạn thẳng có bằng nhau hay không? Thỏa cả hai mới kết luận bằng nhau."
          }
        }
      ]
    }
  ],

  // 4. Chốt bài học
  realworldWrapup: {
    title: "GIẢI QUYẾT BÀI TOÁN DẪN NHẬP DỰ BÁO GIÓ BÃO & BẢN ĐỒ HUẾ",
    recap: "Đầu bài học, ta băn khoăn: Tại sao để dự báo một cơn gió bão hay định vị vị trí Ga An Cựu đối với Hoàng thành Huế (3,01 km về hướng Đông Nam), chỉ dùng độ lớn thôi là chưa đủ?",
    solution: `
      <p><strong>Lời giải chi tiết chốt vấn đề của Thầy Sáng:</strong></p>
      <p>1. <strong>Bản chất vật lí:</strong> Gió là sự chuyển động của khối không khí, có hướng thổi xác định (Đông Nam) và tốc độ xác định ($18\\text{ km/h}$). Nếu chỉ nói gió $18\\text{ km/h}$, người dân vùng biển không thể biết bão đang áp sát hay thổi ra xa.</p>
      <p>2. <strong>Mô hình hóa Vectơ:</strong> Ta đặt gốc tại tâm Hoàng thành Huế (điểm $O$). Vị trí Ga An Cựu (điểm $A$) được xác định hoàn toàn nhờ vectơ vị trí $\\vec{OA}$, trong đó:</p>
      <ul>
        <li>Độ dài: $|\\vec{OA}| = OA = 3{,}01\\text{ km}$.</li>
        <li>Hướng: Tạo với phương Bắc một góc $135^\\circ$ về phía Đông (hướng Đông Nam).</li>
      </ul>
      <p>Như vậy, vectơ chính là 'ngôn ngữ toán học' duy nhất kết hợp hoàn hảo cả <strong>độ lớn</strong> và <strong>phương hướng</strong> để mô phỏng thế giới tự nhiên!</p>
    `,
    audioUrl: "assets/audio/b7_wrapup.mp3",
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
        id: "mc-10-7-1",
        num: 1,
        level: "Nhận biết",
        prompt: "Khẳng định nào sau đây là <strong>đúng</strong> về định nghĩa vectơ?",
        options: [
          "Vectơ là một đoạn thẳng có hướng.",
          "Vectơ là một đường thẳng có hướng.",
          "Vectơ là một tia xác định.",
          "Vectơ là một đoạn thẳng không phân biệt thứ tự hai mút."
        ],
        correctIndex: 0,
        solution: "Theo định nghĩa chuẩn SGK Toán 10 trang 47: 'Vectơ là một đoạn thẳng có hướng, nghĩa là trong hai điểm mút của đoạn thẳng, đã chỉ rõ điểm đầu, điểm cuối'.",
        similarVariation: {
          prompt: "Cho điểm đầu $P$ và điểm cuối $Q$. Kí hiệu chuẩn của vectơ này là:",
          options: ["$\\vec{PQ}$", "$\\vec{QP}$", "$PQ$", "$|PQ|$"],
          correctIndex: 0,
          solution: "Điểm đầu viết trước, điểm cuối viết sau với mũi tên ở trên: $\\vec{PQ}$."
        }
      },
      {
        id: "mc-10-7-2",
        num: 2,
        level: "Nhận biết",
        prompt: "Cho ba điểm phân biệt $A, B, C$. Điều kiện cần và đủ để ba điểm $A, B, C$ thẳng hàng là:",
        options: [
          "Hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương.",
          "Hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng hướng.",
          "Hai vectơ $\\vec{AB}$ và $\\vec{AC}$ có độ dài bằng nhau.",
          "Hai vectơ $\\vec{AB}$ và $\\vec{BC}$ vuông góc với nhau."
        ],
        correctIndex: 0,
        solution: "Theo Nhận xét SGK trang 49: 'Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\vec{AB}, \\vec{AC}$ cùng phương'.",
        similarVariation: {
          prompt: "Cho ba điểm phân biệt $M, N, P$. Để ba điểm này thẳng hàng thì hai vectơ nào sau đây phải cùng phương?",
          options: ["$\\vec{MN}$ và $\\vec{MP}$", "$\\vec{MN}$ và $\\vec{NP}$ cắt nhau", "$|\\vec{MN}| = |\\vec{MP}|$", "$\\vec{MN} \\perp \\vec{MP}$"],
          correctIndex: 0,
          solution: "Hai vectơ có chung gốc $\\vec{MN}$ và $\\vec{MP}$ cùng phương thì $M, N, P$ thẳng hàng."
        }
      },
      {
        id: "mc-10-7-3",
        num: 3,
        level: "Nhận biết",
        prompt: "Độ dài của vectơ-không $\\vec{0}$ bằng:",
        options: [
          "0",
          "1",
          "-1",
          "Vô cùng lớn"
        ],
        correctIndex: 0,
        solution: "Vectơ-không có điểm đầu trùng với điểm cuối nên khoảng cách bằng 0. Do đó $|\\vec{0}| = 0$.",
        similarVariation: {
          prompt: "Độ dài của vectơ $\\vec{AA}$ với điểm $A$ bất kì là:",
          options: ["$0$", "$1$", "$A^2$", "Không xác định"],
          correctIndex: 0,
          solution: "Điểm đầu trùng điểm cuối nên $|\\vec{AA}| = 0$."
        }
      },
      {
        id: "mc-10-7-4",
        num: 4,
        level: "Nhận biết",
        prompt: "Cho hình bình hành $ABCD$. Vectơ nào sau đây bằng với vectơ $\\vec{AB}$?",
        options: [
          "$\\vec{DC}$",
          "$\\vec{CD}$",
          "$\\vec{BA}$",
          "$\\vec{BC}$"
        ],
        correctIndex: 0,
        solution: "Trong hình bình hành $ABCD$, cạnh $AB // DC$ và $AB = DC$. Hướng từ $A$ sang $B$ cùng hướng từ $D$ sang $C$. Do đó $\\vec{AB} = \\vec{DC}$.",
        similarVariation: {
          prompt: "Trong hình bình hành $ABCD$, vectơ bằng với vectơ $\\vec{AD}$ là:",
          options: ["$\\vec{BC}$", "$\\vec{CB}$", "$\\vec{DA}$", "$\\vec{CD}$"],
          correctIndex: 0,
          solution: "Cạnh $AD // BC$ và cùng hướng từ trên xuống: $\\vec{AD} = \\vec{BC}$."
        }
      },
      {
        id: "mc-10-7-5",
        num: 5,
        level: "Nhận biết",
        prompt: "Hai vectơ có cùng độ dài và ngược hướng được gọi là:",
        options: [
          "Hai vectơ đối nhau",
          "Hai vectơ bằng nhau",
          "Hai vectơ vuông góc",
          "Hai vectơ không cùng phương"
        ],
        correctIndex: 0,
        solution: "Hai vectơ có cùng độ dài và ngược hướng được định nghĩa là hai vectơ đối nhau (kí hiệu $\\vec{a}$ và $-\\vec{a}$).",
        similarVariation: {
          prompt: "Nếu $\\vec{a}$ và $\\vec{b}$ là hai vectơ đối nhau thì tổng của chúng bằng:",
          options: ["$\\vec{0}$", "$0$", "$2\\vec{a}$", "$-2\\vec{b}$"],
          correctIndex: 0,
          solution: "Tổng của hai vectơ đối nhau luôn bằng vectơ-không: $\\vec{a} + (-\\vec{a}) = \\vec{0}$."
        }
      }
    ],

    // Dạng 2: 3 câu Đúng/Sai (Thông hiểu - chuẩn 4 ý a, b, c, d)
    part2TrueFalse: [
      {
        id: "tf-10-7-1",
        num: 1,
        level: "Thông hiểu",
        prompt: "Cho tam giác đều $ABC$ cạnh bằng $2a$, đường cao $AH$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) Vectơ $\\vec{AB}$ và vectơ $\\vec{AC}$ cùng phương với nhau.", isCorrect: false },
          { text: "b) Độ dài của vectơ $\\vec{BC}$ bằng $2a$.", isCorrect: true },
          { text: "c) Độ dài của vectơ $\\vec{AH}$ bằng $a\\sqrt{3}$.", isCorrect: true },
          { text: "d) Vectơ $\\vec{HB}$ và vectơ $\\vec{HC}$ là hai vectơ bằng nhau.", isCorrect: false }
        ],
        solution: `
          <ul>
            <li>a) <strong>SAI:</strong> Giá của $\\vec{AB}$ là đường thẳng $AB$, giá của $\\vec{AC}$ là đường thẳng $AC$. Hai đường thẳng này cắt nhau tại $A$ nên không cùng phương.</li>
            <li>b) <strong>ĐÚNG:</strong> $|\\vec{BC}| = BC = 2a$.</li>
            <li>c) <strong>ĐÚNG:</strong> Trong tam giác đều cạnh $2a$, đường cao $AH = \\frac{2a\\sqrt{3}}{2} = a\\sqrt{3}$, do đó $|\\vec{AH}| = a\\sqrt{3}$.</li>
            <li>d) <strong>SAI:</strong> $H$ là trung điểm $BC$ nên hai vectơ $\\vec{HB}$ và $\\vec{HC}$ ngược hướng nhau (hai vectơ đối nhau), không thể bằng nhau.</li>
          </ul>
        `
      },
      {
        id: "tf-10-7-2",
        num: 2,
        level: "Thông hiểu",
        prompt: "Cho lục giác đều $ABCDEF$ tâm $O$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) Vectơ $\\vec{OA}$ và vectơ $\\vec{DO}$ là hai vectơ bằng nhau.", isCorrect: true },
          { text: "b) Vectơ $\\vec{AB}$ và vectơ $\\vec{ED}$ cùng phương và cùng hướng.", isCorrect: true },
          { text: "c) Vectơ $\\vec{AB}$ và vectơ $\\vec{DE}$ là hai vectơ bằng nhau.", isCorrect: false },
          { text: "d) Có đúng 6 vectơ khác $\\vec{0}$ có điểm đầu là $O$ và điểm cuối là các đỉnh của lục giác.", isCorrect: true }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Vì $O$ là tâm đối xứng, $D, O, A$ thẳng hàng theo thứ tự đó và $DO = OA$, cùng hướng từ $D$ đến $A$. Vậy $\\vec{DO} = \\vec{OA}$.</li>
            <li>b) <strong>ĐÚNG:</strong> Trong lục giác đều, cạnh $AB // ED$ và hướng từ $A \\to B$ trùng hướng $E \\to D$.</li>
            <li>c) <strong>SAI:</strong> $\\vec{AB}$ và $\\vec{DE}$ ngược hướng nhau nên chúng đối nhau, không bằng nhau.</li>
            <li>d) <strong>ĐÚNG:</strong> Có 6 đỉnh $A, B, C, D, E, F$ tương ứng cho 6 vectơ: $\\vec{OA}, \\vec{OB}, \\vec{OC}, \\vec{OD}, \\vec{OE}, \\vec{OF}$.</li>
          </ul>
        `
      },
      {
        id: "tf-10-7-3",
        num: 3,
        level: "Thông hiểu",
        prompt: "Cho đoạn thẳng $AB$ có độ dài bằng $6\\text{ cm}$ và $M$ là trung điểm của $AB$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) $|\\vec{MA}| = |\\vec{MB}| = 3\\text{ cm}$.", isCorrect: true },
          { text: "b) $\\vec{MA} = \\vec{MB}$.", isCorrect: false },
          { text: "c) Hai vectơ $\\vec{AM}$ và $\\vec{AB}$ cùng hướng.", isCorrect: true },
          { text: "d) Hai vectơ $\\vec{MA}$ và $\\vec{BA}$ cùng phương.", isCorrect: true }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Độ dài $|\\vec{MA}| = MA = 3\\text{ cm}$ và $|\\vec{MB}| = MB = 3\\text{ cm}$.</li>
            <li>b) <strong>SAI:</strong> Vì $M$ nằm giữa $A$ và $B$ nên hai vectơ $\\vec{MA}$ và $\\vec{MB}$ ngược hướng nhau, do đó $\\vec{MA} \\neq \\vec{MB}$.</li>
            <li>c) <strong>ĐÚNG:</strong> Cả hai vectơ $\\vec{AM}$ và $\\vec{AB}$ đều có giá là đường thẳng $AB$ và cùng hướng từ trái sang phải.</li>
            <li>d) <strong>ĐÚNG:</strong> Giá của cả hai vectơ đều là đường thẳng $AB$ nên chúng cùng phương.</li>
          </ul>
        `
      }
    ],

    // Dạng 3: 2 câu Trả lời ngắn (Toán thực tế - Vận dụng)
    part3ShortAnswer: [
      {
        id: "sa-10-7-1",
        num: 1,
        level: "Vận dụng",
        prompt: "Một chiếc máy bay phản lực cất cánh từ sân bay, bay theo hướng Đông Nam với vận tốc $800\\text{ km/h}$. Cùng lúc đó, một chiếc máy bay thứ hai cất cánh theo hướng Tây Bắc với vận tốc $800\\text{ km/h}$. Gọi $\\vec{v_1}$ và $\\vec{v_2}$ lần lượt là vectơ vận tốc của hai máy bay. Tỉ số độ dài $|\\vec{v_1}| / |\\vec{v_2}|$ bằng bao nhiêu?",
        correctValue: "1",
        acceptableAnswers: ["1", "1.0", "1,0"],
        unit: "",
        solution: "Độ dài của vectơ vận tốc bằng chính tốc độ bay của máy bay: $|\\vec{v_1}| = 800\\text{ km/h}$ và $|\\vec{v_2}| = 800\\text{ km/h}$. Do đó tỉ số $|\\vec{v_1}| / |\\vec{v_2}| = 800 / 800 = 1$. (Chú ý: Hai vectơ này ngược hướng nhau nên là hai vectơ đối nhau).",
        similarVariation: {
          prompt: "Một canô di chuyển xuôi dòng với vận tốc $|\\vec{v_1}| = 24\\text{ km/h}$, canô thứ hai di chuyển ngược dòng với vận tốc $|\\vec{v_2}| = 16\\text{ km/h}$. Giá trị của hiệu $|\\vec{v_1}| - |\\vec{v_2}|$ bằng bao nhiêu?",
          correctValue: "8",
          acceptableAnswers: ["8", "8.0", "8,0"],
          solution: "Hiệu độ lớn hai vectơ vận tốc là $24 - 16 = 8\\text{ km/h}$."
        }
      },
      {
        id: "sa-10-7-2",
        num: 2,
        level: "Vận dụng",
        prompt: "Cho hình chữ nhật $ABCD$ có diện tích bằng $48\\text{ cm}^2$ và chiều rộng $AD = 6\\text{ cm}$. Tính độ dài của vectơ $\\vec{AC}$ (kết quả ghi bằng số nguyên theo đơn vị cm).",
        correctValue: "10",
        acceptableAnswers: ["10", "10 cm"],
        unit: "cm",
        solution: "Chiều dài hình chữ nhật là $AB = S / AD = 48 / 6 = 8\\text{ cm}$. Áp dụng định lí Pythagore: $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10\\text{ cm}$. Độ dài vectơ $|\\vec{AC}| = AC = 10\\text{ cm}$.",
        similarVariation: {
          prompt: "Cho hình chữ nhật $MNPQ$ có $MN = 12\\text{ cm}, MQ = 5\\text{ cm}$. Tính độ dài của vectơ $\\vec{MP}$ (đơn vị: cm).",
          correctValue: "13",
          acceptableAnswers: ["13", "13 cm"],
          solution: "$MP = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = 13\\text{ cm}$."
        }
      }
    ]
  }
};

// Tự động gán vào Window để Engine nhận diện
if (typeof window !== "undefined") {
  window.LESSON_10_7_DATA = window.LESSON_10_C4_B7_DATA;
}

