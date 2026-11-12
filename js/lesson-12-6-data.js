/**
 * BÀI HỌC SỐ: BÀI 6. VECTƠ TRONG KHÔNG GIAN (TOÁN 12 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - Phần I: Lời chào của Thầy Sáng + Nút Voice AI vàng đồng, chỉnh tốc độ
 * - Phần II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 45 + Voice AI
 * - Phần III: Tiến trình bài học (Dẫn nhập cần cẩu nâng hàng 3D, 4 mục lý thuyết đóng khung nguyên văn SGK, 
 *             TikZ SVG 3D không gian nét đứt/liền chuẩn mực, POI checkpoints giữa & cuối, Mẹo nhớ, Ví dụ tự luận ẩn/hiện, Chốt bài học)
 * - Phần IV: Bài tập trắc nghiệm tổng hợp chuẩn cấu trúc thi mới 2025:
 *             + 5 câu trắc nghiệm nhiều lựa chọn (Dễ - Nhận biết)
 *             + 3 câu trắc nghiệm Đúng/Sai 4 ý (Thông hiểu)
 *             + 2 câu trả lời ngắn thực tế (Vận dụng)
 *             + Kèm nút "Lời giải chi tiết" và nút "Bài toán tương tự" đổi số tự động
 */

window.LESSON_12_C2_B6_DATA = {
  id: "12-c2-b6",
  number: "Bài 6",
  title: "Vectơ trong không gian",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioScript: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioUrl: "assets/audio/b6_welcome.mp3",
    buttonLabel: "Lời chào của thầy Sáng",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 45)
  // =========================================================================
  learningGoals: [
    "Nhận biết và mở rộng trọn vẹn khái niệm vectơ, độ dài vectơ, hai vectơ cùng phương, cùng hướng và bằng nhau từ mặt phẳng lên không gian ba chiều.",
    "Làm chủ các phép toán vectơ trong không gian: phép cộng, phép trừ, quy tắc ba điểm, quy tắc hình bình hành và đặc biệt là QUY TẮC HÌNH HỘP $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$.",
    "Nắm vững phép nhân một số với một vectơ, điều kiện để hai vectơ cùng phương trong không gian và tính chất trọng tâm của tứ diện ($\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$).",
    "Thành thạo công thức tính góc giữa hai vectơ và TÍCH VÔ HƯỚNG $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$, vận dụng giải bài toán góc và chứng minh quan hệ vuông góc trong không gian."
  ],
  goalsAudioUrl: "assets/audio/b6_main_lecture.mp3",
  goalsButtonLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================
  // 1. Bài toán dẫn nhập
  hook: {
    title: "Bài toán lực căng cáp cần cẩu xây dựng và lực đẩy động cơ máy bay",
    story: "Tại các đại công trình xây dựng nhà chọc trời, những chiếc cần cẩu tháp khổng lồ nhấc bổng các khối bê tông nặng hàng chục tấn lên không trung. Khối bê tông được giữ thăng bằng nhờ 4 sợi dây cáp thép tỏa ra từ một móc treo trung tâm nối đến 4 góc của kiện hàng. Bốn lực căng dây này không hề cùng nằm trong một mặt phẳng, mà tỏa ra trong không gian ba chiều. Làm thế nào các kỹ sư kết cấu tính toán chính xác tổng hợp lực của 4 sợi cáp này để đảm bảo cần cẩu không bị đứt cáp hay đổ sập? Tương tự, khi máy bay bay trong không trung, nó chịu tác động đồng thời của 4 lực không gian: lực đẩy động cơ, lực cản không khí, trọng lực và lực nâng khí động học. Để mô hình hóa và giải quyết trọn vẹn các bài toán vật lý đa chiều này, chúng ta cần một công cụ toán học mở rộng: đó chính là Vectơ trong không gian!",
    illustration: "",
    illustrationCaption: "Cần cẩu tháp nâng kiện hàng bằng 4 sợi dây cáp trong không gian ba chiều",
    question: "Nếu ba cạnh xuất phát từ một đỉnh của chiếc thùng hàng hình hộp biểu diễn cho 3 lực kéo không gian, thì hợp lực tổng của chúng sẽ là vectơ nào?",
    audioUrl: "assets/audio/b6_wrapup.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    bridge: "Hãy cùng Thầy Sáng khám phá các quy tắc hình học không gian kỳ diệu ngay sau đây!"
  },

  // 2. Trình phát bài giảng tương tác tích hợp POI
  interactiveAudio: {
    title: "Bài giảng tương tác: Vectơ trong không gian & Quy tắc hình hộp",
    audioUrl: "assets/audio/b6_main_lecture.mp3",
    duration: 75,
    timestamps: [
      {
        id: "poi-12-6-1",
        time: 32,
        title: "Điểm dừng 1: Quy tắc hình hộp trong không gian",
        question: "Cho hình hộp $ABCD.A'B'C'D'$. Tổng của ba vectơ $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng vectơ nào sau đây?",
        options: [
          "$\\vec{AC'}$ (đường chéo xuất phát từ $A$)",
          "$\\vec{AC}$ (đường chéo đáy)",
          "$\\vec{BD'}$",
          "$\\vec{A'C}$"
        ],
        correctIndex: 0,
        hint: "Quy tắc hình hộp: Tổng 3 vectơ chung gốc $A$ dọc theo 3 kích thước của hình hộp sẽ bằng vectơ đường chéo xuất phát từ đỉnh $A$ sang đỉnh đối diện $C'$.",
        explain: "Chính xác tuyệt đối! Định lí quy tắc hình hộp SGK trang 50 khẳng định: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$."
      },
      {
        id: "poi-12-6-2",
        time: 62,
        title: "Điểm dừng 2: Điều kiện vuông góc của hai vectơ",
        question: "Trong không gian, điều kiện cần và đủ để hai vectơ khác vectơ-không $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau là:",
        options: [
          "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0$",
          "Độ dài $|\vec{u}| = |\vec{v}|$",
          "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 1$",
          "Hai vectơ cùng phương"
        ],
        correctIndex: 0,
        hint: "Vì $\\cos 90^\\circ = 0$ nên tích vô hướng phải triệt tiêu về 0.",
        explain: "Rất xuất sắc! Hai vectơ vuông góc khi và chỉ khi tích vô hướng của chúng bằng 0: $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$."
      }
    ]
  },

  // 3. Triển khai các mục lý thuyết chuẩn SGK
  sections: [
    {
      num: "1",
      title: "ĐỊNH NGHĨA VECTƠ TRONG KHÔNG GIAN",
      subsections: [
        {
          key: "1a",
          title: "Khái niệm vectơ, độ dài và sự bằng nhau trong không gian",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 12 - Trang 46:</div>
              <ul class="sgk-box-list">
                <li><strong>Vectơ trong không gian</strong> là một đoạn thẳng có hướng.</li>
                <li><strong>Độ dài của vectơ trong không gian</strong> là khoảng cách giữa điểm đầu và điểm cuối của vectơ đó.</li>
              </ul>
            </div>

            <div class="sgk-framed-box" style="margin-top: 14px; background: #f0fdf4; border-left-color: #16a34a;">
              <div class="sgk-box-tag" style="color: #15803d;"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 12 - Trang 47:</div>
              <ul class="sgk-box-list" style="color: #14532d;">
                <li>Hai vectơ được gọi là <strong>cùng phương</strong> nếu chúng có giá song song hoặc trùng nhau.</li>
                <li>Nếu hai vectơ cùng phương thì chúng <strong>cùng hướng</strong> hoặc <strong>ngược hướng</strong>.</li>
                <li>Hai vectơ $\\vec{a}$ và $\\vec{b}$ được gọi là <strong>bằng nhau</strong>, kí hiệu $\\vec{a} = \\vec{b}$, nếu chúng có <strong>cùng độ dài và cùng hướng</strong>.</li>
              </ul>
            </div>

            <!-- TikZ SVG Minh họa Vectơ trong Tứ diện -->
            <div class="tikz-svg-card">
              <div class="tikz-svg-title"><i class="fa-solid fa-cube"></i> Hình học không gian 3D: Biểu diễn vectơ trong tứ diện ABCD</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="440" height="200" viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-3d-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                    </marker>
                  </defs>
                  <!-- Đỉnh A -->
                  <circle cx="220" cy="20" r="4" fill="#0284c7"/>
                  <text x="215" y="12" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0369a1">A</text>
                  <!-- Điểm B, C, D đáy -->
                  <circle cx="100" cy="150" r="4" fill="#0284c7"/>
                  <text x="80" y="155" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0369a1">B</text>
                  <circle cx="200" cy="180" r="4" fill="#0284c7"/>
                  <text x="195" y="198" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0369a1">C</text>
                  <circle cx="340" cy="140" r="4" fill="#0284c7"/>
                  <text x="350" y="145" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0369a1">D</text>

                  <!-- Cạnh đáy -->
                  <line x1="100" y1="150" x2="200" y2="180" stroke="#0284c7" stroke-width="2"/>
                  <line x1="200" y1="180" x2="340" y2="140" stroke="#0284c7" stroke-width="2"/>
                  <line x1="100" y1="150" x2="340" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>

                  <!-- Các vectơ xuất phát từ A -->
                  <line x1="220" y1="20" x2="103" y2="145" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-3d-red)"/>
                  <line x1="220" y1="20" x2="200" y2="175" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-3d-red)"/>
                  <line x1="220" y1="20" x2="337" y2="137" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-3d-red)"/>
                  <text x="145" y="80" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\vec{AB}</text>
                  <text x="220" y="100" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\vec{AC}</text>
                  <text x="290" y="75" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\vec{AD}</text>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình 2.5 SGK: Ba vectơ $\\vec{AB}, \\vec{AC}, \\vec{AD}$ xuất phát từ đỉnh $A$ của tứ diện $ABCD$</em>
              </div>
            </div>
          `,
          audioUrl: "assets/audio/b12_7_sec1a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-12-6-1a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Vectơ cùng phương trong không gian",
              question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Vectơ nào sau đây cùng phương và cùng hướng với $\\vec{AA'}$?",
              options: [
                "$\\vec{BB'}$ và $\\vec{CC'}$",
                "$\\vec{B'B}$ và $\\vec{C'C}$",
                "$\\vec{AB}$ và $\\vec{AC}$",
                "$\\vec{A'B'}$ và $\\vec{A'C'}$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Các cạnh bên của hình lăng trụ song song và bằng nhau, hướng từ dưới lên: $\\vec{AA'} = \\vec{BB'} = \\vec{CC'}$.",
              feedbackWrong: "Chú ý: $\\vec{B'B}$ ngược hướng với $\\vec{AA'}$ nên không thể cùng hướng."
            },
            {
              id: "cp-12-6-1a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Vectơ đối trong không gian",
              question: "Trong hình hộp $ABCD.A'B'C'D'$, vectơ đối của vectơ $\\vec{A'B'}$ là:",
              options: [
                "$\\vec{B'A'}$ hoặc $\\vec{CD}$",
                "$\\vec{AB}$",
                "$\\vec{DC}$",
                "$\\vec{A'D'}$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất chuẩn! Vectơ đối có cùng độ dài nhưng ngược hướng, nên vectơ đối của $\\vec{A'B'}$ là $\\vec{B'A'}$, đồng thời cũng bằng $\\vec{CD}$ và $\\vec{BA}$.",
              feedbackWrong: "Lưu ý: $\\vec{AB} = \\vec{A'B'}$ là hai vectơ bằng nhau, không phải đối nhau."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về Vectơ không gian",
            content: "Quy tắc nhận dạng vectơ không gian: <strong>'Dù trong mặt phẳng hay không gian 3 chiều, hai vectơ bằng nhau chỉ khi: song song (hoặc trùng), cùng chiều mũi tên, và dài bằng nhau!'</strong>."
          },

          workedExample: {
            title: "Ví dụ 1 (SGK trang 47) - Xác định vectơ trong tứ diện đều",
            problem: "Cho tứ diện $ABCD$ có độ dài mỗi cạnh bằng $1$.\na) Có bao nhiêu vectơ có điểm đầu là $A$ và điểm cuối là một trong các đỉnh còn lại của tứ diện?\nb) Tính độ dài của các vectơ tìm được ở câu a.",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <p>a) Các đỉnh còn lại của tứ diện $ABCD$ khác đỉnh $A$ là $B, C, D$.</p>
              <p>Do đó, có đúng 3 vectơ có điểm đầu là $A$ và điểm cuối là các đỉnh còn lại, đó là: $\\vec{AB}, \\vec{AC}$ và $\\vec{AD}$.</p>
              <p>b) Vì tứ diện $ABCD$ có tất cả các cạnh bằng 1 nên:</p>
              <ul>
                <li>$|\\vec{AB}| = AB = 1$.</li>
                <li>$|\\vec{AC}| = AC = 1$.</li>
                <li>$|\\vec{AD}| = AD = 1$.</li>
              </ul>
              <p><strong>Kết luận:</strong> Độ dài của cả ba vectơ đều bằng 1.</p>
            `,
            teacherGuidance: "Dạng bài tập cơ bản này rèn luyện cho các em thói quen xác định điểm đầu, điểm cuối và độ dài tuyệt đối của vectơ trong không gian."
          }
        }
      ]
    },
    {
      num: "2",
      title: "TỔNG VÀ HIỆU CỦA HAI VECTƠ TRONG KHÔNG GIAN. QUY TẮC HÌNH HỘP",
      subsections: [
        {
          key: "2a",
          title: "Phép cộng, trừ vectơ và Quy tắc hình hộp",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 12 - Trang 49:</div>
              <p>Trong không gian, cho hai vectơ $\\vec{a}$ và $\\vec{b}$. Lấy một điểm $A$ bất kì và các điểm $B, C$ sao cho $\\vec{AB} = \\vec{a}, \\vec{BC} = \\vec{b}$. Khi đó, vectơ $\\vec{AC}$ được gọi là <strong>tổng của hai vectơ $\\vec{a}$ và $\\vec{b}$</strong>, kí hiệu là $\\vec{a} + \\vec{b}$.</p>
              <p>Quy tắc ba điểm và quy tắc hình bình hành trong mặt phẳng vẫn đúng trong không gian:</p>
              <ul>
                <li>Nếu $A, B, C$ là ba điểm bất kì thì: $\\vec{AB} + \\vec{BC} = \\vec{AC}$.</li>
                <li>Nếu $ABCD$ là hình bình hành thì: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.</li>
              </ul>
            </div>

            <div class="sgk-framed-box" style="margin-top: 14px; background: #fefce8; border-left-color: #eab308;">
              <div class="sgk-box-tag" style="color: #854d0e;"><i class="fa-solid fa-crown"></i> Quy tắc hình hộp - Trọng tâm SGK Toán 12 (Trang 50):</div>
              <p style="font-weight: 600; font-size: 1.05rem; color: #713f12;">
                Cho hình hộp $ABCD.A'B'C'D'$. Khi đó, ta có:
              </p>
              <p style="text-align: center; font-size: 1.25rem; font-weight: bold; color: #b45309;">
                $$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$$
              </p>
              <p style="color: #78350f;"><em>(Tổng 3 vectơ cạnh xuất phát từ đỉnh A bằng vectơ đường chéo chính AC')</em></p>
            </div>

            <!-- TikZ SVG Quy tắc hình hộp -->
            <div class="tikz-svg-card">
              <div class="tikz-svg-title"><i class="fa-solid fa-cube"></i> Mô hình không gian 3D: Quy tắc hình hộp thần thánh</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="480" height="220" viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-box-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                    </marker>
                    <marker id="arr-box-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                    </marker>
                  </defs>
                  <!-- Điểm cơ sở -->
                  <!-- Đáy trên: A(120, 80), B(280, 80), C(360, 40), D(200, 40) -->
                  <!-- Đáy dưới: A'(120, 180), B'(280, 180), C'(360, 140), D'(200, 140) -->
                  <!-- Nét đứt khuất -->
                  <line x1="120" y1="80" x2="200" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                  <line x1="200" y1="40" x2="360" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                  <line x1="200" y1="40" x2="200" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

                  <!-- Các cạnh thấy -->
                  <line x1="120" y1="80" x2="280" y2="80" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-box-b)"/>
                  <text x="200" y="72" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">\\vec{AB}</text>

                  <line x1="120" y1="80" x2="196" y2="42" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-box-b)"/>
                  <text x="145" y="55" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">\\vec{AD}</text>

                  <line x1="120" y1="80" x2="120" y2="175" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-box-b)"/>
                  <text x="95" y="135" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">\\vec{AA'}</text>

                  <!-- Cạnh ngoài khung -->
                  <line x1="280" y1="80" x2="360" y2="40" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="280" y1="80" x2="280" y2="180" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="360" y1="40" x2="360" y2="140" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="120" y1="180" x2="280" y2="180" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="280" y1="180" x2="360" y2="140" stroke="#64748b" stroke-width="1.5"/>

                  <!-- Đường chéo AC' ĐỎ RỰC RỠ -->
                  <line x1="120" y1="80" x2="355" y2="138" stroke="#dc2626" stroke-width="3" stroke-dasharray="6,3" marker-end="url(#arr-box-r)"/>
                  <text x="240" y="125" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">\\vec{AC'}</text>

                  <!-- Nhãn các đỉnh -->
                  <text x="105" y="80" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">A</text>
                  <text x="285" y="80" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">B</text>
                  <text x="365" y="38" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">C</text>
                  <text x="195" y="32" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">D</text>
                  <text x="105" y="195" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">A'</text>
                  <text x="285" y="195" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">B'</text>
                  <text x="368" y="145" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">C'</text>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình 2.14 SGK: Minh họa trực quan Quy tắc hình hộp $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$</em>
              </div>
            </div>
          `,
          audioUrl: "assets/audio/b12_7_sec2a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-12-6-2a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Nhận dạng quy tắc hình hộp",
              question: "Cho hình hộp $ABCD.A'B'C'D'$. Biểu thức nào sau đây bằng với $\\vec{BD'}$?",
              options: [
                "$\\vec{BA} + \\vec{BC} + \\vec{BB'}$",
                "$\\vec{AB} + \\vec{AD} + \\vec{AA'}$",
                "$\\vec{DA} + \\vec{DC} + \\vec{DD'}$",
                "$\\vec{CA} + \\vec{CB} + \\vec{CC'}$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất xuất sắc! Xuất phát từ gốc $B$, vectơ đường chéo $\\vec{BD'}$ bằng tổng 3 cạnh xuất phát từ $B$: $\\vec{BA} + \\vec{BC} + \\vec{BB'}$.",
              feedbackWrong: "Chú ý: Quy tắc hình hộp áp dụng cho bất kì đỉnh nào: gốc là đỉnh nào thì 3 vectơ thành phần và vectơ đường chéo đều phải chung gốc đó."
            },
            {
              id: "cp-12-6-2a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Quy tắc trừ trong không gian",
              question: "Trong không gian, với ba điểm $O, M, N$ bất kì, ta luôn có:",
              options: [
                "$\\vec{MN} = \\vec{ON} - \\vec{OM}$",
                "$\\vec{MN} = \\vec{OM} - \\vec{ON}$",
                "$\\vec{MN} = \\vec{OM} + \\vec{ON}$",
                "$\\vec{MN} = \\vec{ON} + \\vec{OM}$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Quy tắc hiệu chung gốc: ngọn trừ gốc $\\vec{MN} = \\vec{ON} - \\vec{OM}$.",
              feedbackWrong: "Ghi nhớ quy tắc trừ: Vectơ bằng ngọn trừ gốc $\\vec{MN} = \\vec{ON} - \\vec{OM}$."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về Quy tắc hình hộp",
            content: "Để không bao giờ viết nhầm tên đỉnh, các em nhớ quy tắc ngón tay cái: <strong>'Chung một góc nhà, cộng ba mép tường sẽ ra đường bay của chú nhện sang góc đối diện bên kia sàn!'</strong>."
          },

          workedExample: {
            title: "Ví dụ 3 (SGK trang 50) - Tính độ dài vectơ trong hình lập phương",
            problem: "Cho hình lập phương $ABCD.A'B'C'D'$ có độ dài mỗi cạnh bằng $1$. Tính độ dài của vectơ $\\vec{u} = \\vec{BC} + \\vec{DD'}$.",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <p>1. Vì $ABCD$ là hình vuông nên $\\vec{BC} = \\vec{AD}$.</p>
              <p>2. Thay vào biểu thức của $\\vec{u}$, ta được:</p>
              <p>$$\\vec{u} = \\vec{BC} + \\vec{DD'} = \\vec{AD} + \\vec{DD'}.$$</p>
              <p>3. Áp dụng quy tắc ba điểm trong mặt phẳng $(ADD'A')$:</p>
              <p>$$\\vec{AD} + \\vec{DD'} = \\vec{AD'}.$$</p>
              <p>4. Vì $ADD'A'$ là hình vuông cạnh bằng $1$ nên đường chéo $AD' = \\sqrt{AD^2 + DD'^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.</p>
              <p><strong>Kết luận:</strong> $|\\vec{u}| = |\\vec{AD'}| = AD' = \\sqrt{2}$.</p>
            `,
            teacherGuidance: "Bí quyết giải toán vectơ trong đa diện: Khi hai vectơ không nối đuôi nhau, hãy tìm một vectơ bằng với nó để đưa về cùng một mặt phẳng rồi áp dụng quy tắc ba điểm."
          }
        }
      ]
    },
    {
      num: "3",
      title: "TÍCH CỦA MỘT SỐ VỚI MỘT VECTƠ TRONG KHÔNG GIAN",
      subsections: [
        {
          key: "3a",
          title: "Định nghĩa, Tính chất và Trọng tâm tứ diện",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 12 - Trang 53:</div>
              <p>Trong không gian, tích của một số thực $k \\neq 0$ với một vectơ $\\vec{a} \\neq \\vec{0}$ là một vectơ, kí hiệu là $k\\vec{a}$, được xác định như sau:</p>
              <ul class="sgk-box-list">
                <li>Cùng hướng với vectơ $\\vec{a}$ nếu $k > 0$; ngược hướng với vectơ $\\vec{a}$ nếu $k < 0$;</li>
                <li>Có độ dài bằng $|k| \\cdot |\\vec{a}|$.</li>
              </ul>
            </div>

            <div class="sgk-framed-box" style="margin-top: 14px; background: #fdf2f8; border-left-color: #db2777;">
              <div class="sgk-box-tag" style="color: #9d174d;"><i class="fa-solid fa-circle-nodes"></i> Điều kiện cùng phương & Trọng tâm tứ diện (SGK trang 53 - 54):</div>
              <ul class="sgk-box-list" style="color: #831843;">
                <li>Điều kiện để hai vectơ $\\vec{a}$ và $\\vec{b}$ $(\\vec{b} \\neq \\vec{0})$ cùng phương là có một số thực $k$ sao cho $\\vec{a} = k\\vec{b}$.</li>
                <li>Điểm $G$ là <strong>trọng tâm của tứ diện $ABCD$</strong> khi và chỉ khi:
                  $$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}.$$
                </li>
                <li>Với điểm $O$ bất kì trong không gian:
                  $$\\vec{OG} = \\frac{1}{4} (\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD}).$$
                </li>
              </ul>
            </div>
          `,
          audioUrl: "assets/audio/b12_7_sec2a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-12-6-3a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Hệ số cùng phương của vectơ",
              question: "Nếu hai vectơ $\\vec{u}$ và $\\vec{v}$ thỏa mãn $\\vec{u} = -3\\vec{v}$ thì:",
              options: [
                "$\\vec{u}$ và $\\vec{v}$ cùng phương, ngược hướng và $|\vec{u}| = 3|\vec{v}|$",
                "$\\vec{u}$ và $\\vec{v}$ cùng hướng",
                "$\\vec{u}$ vuông góc với $\\vec{v}$",
                "$|\vec{u}| = -3|\vec{v}|$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Vì $k = -3 < 0$ nên hai vectơ ngược hướng, và độ dài bằng $|-3| \\cdot |\\vec{v}| = 3|\\vec{v}|$.",
              feedbackWrong: "Chú ý: Độ dài của một vectơ luôn là số không âm, không thể bằng số âm."
            },
            {
              id: "cp-12-6-3a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Tính chất trọng tâm tứ diện",
              question: "Cho tứ diện $ABCD$ có trọng tâm $G$. Đẳng thức vectơ nào sau đây là ĐÚNG?",
              options: [
                "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$",
                "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{GD}$",
                "$\\vec{AB} + \\vec{CD} = \\vec{0}$",
                "$\\vec{GA} = \\vec{GB} = \\vec{GC} = \\vec{GD}$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất giỏi! Đây là định nghĩa và tính chất cơ bản của trọng tâm tứ diện $ABCD$ trong không gian.",
              feedbackWrong: "Ghi nhớ hệ thức SGK trang 54: Trọng tâm tứ diện là điểm triệt tiêu tổng 4 vectơ hướng về 4 đỉnh."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về Trọng tâm",
            content: "Nhớ so sánh để không nhầm: <strong>'Tam giác 3 đỉnh chia 3 (tổng 3 vectơ bằng 0); Tứ diện 4 đỉnh chia 4 (tổng 4 vectơ bằng 0)'</strong>."
          },

          workedExample: {
            title: "Ví dụ 8 (SGK trang 54) - Chứng minh hệ thức vectơ qua trọng tâm",
            problem: "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm của tam giác $BCD$. Chứng minh rằng $\\vec{AB} + \\vec{AC} + \\vec{AD} = 3\\vec{AG}$.",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <p>Vì $G$ là trọng tâm của tam giác đáy $BCD$ nên ta có tính chất quen thuộc ở lớp 10:</p>
              <p>$$\\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}.$$</p>
              <p>Chèn điểm $G$ vào vế trái theo quy tắc ba điểm:</p>
              <p>$$\\vec{AB} = \\vec{AG} + \\vec{GB}$$</p>
              <p>$$\\vec{AC} = \\vec{AG} + \\vec{GC}$$</p>
              <p>$$\\vec{AD} = \\vec{AG} + \\vec{GD}$$</p>
              <p>Cộng vế theo vế ba đẳng thức trên, ta được:</p>
              <p>$$\\vec{AB} + \\vec{AC} + \\vec{AD} = (\\vec{AG} + \\vec{AG} + \\vec{AG}) + (\\vec{GB} + \\vec{GC} + \\vec{GD})$$</p>
              <p>$$= 3\\vec{AG} + \\vec{0} = 3\\vec{AG}.$$</p>
              <p><strong>Kết luận:</strong> Đẳng thức đã được chứng minh hoàn tất.</p>
            `,
            teacherGuidance: "Kĩ thuật chèn điểm: Cứ thấy vế phải có vectơ $\\vec{AG}$, các em hãy chèn ngay điểm $G$ vào giữa các vectơ ở vế trái là bài toán tự khắc được tháo gỡ!"
          }
        }
      ]
    },
    {
      num: "4",
      title: "TÍCH VÔ HƯỚNG CỦA HAI VECTƠ TRONG KHÔNG GIAN",
      subsections: [
        {
          key: "4a",
          title: "Góc giữa hai vectơ và Công thức tích vô hướng",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 12 - Trang 55 & 56:</div>
              <ul class="sgk-box-list">
                <li>Trong không gian, cho hai vectơ $\\vec{a}, \\vec{b}$ khác $\\vec{0}$. Lấy điểm $O$ bất kì, vẽ $\\vec{OA} = \\vec{a}, \\vec{OB} = \\vec{b}$. Góc $\\widehat{AOB}$ ($0^\\circ \\le \\widehat{AOB} \\le 180^\\circ$) được gọi là <strong>góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$</strong>, kí hiệu là $(\\vec{a}, \\vec{b})$.</li>
                <li><strong>Tích vô hướng</strong> của hai vectơ $\\vec{a}$ và $\\vec{b}$ là một số, kí hiệu là $\\vec{a} \\cdot \\vec{b}$, xác định bởi công thức:
                  $$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$$
                </li>
                <li>Điều kiện vuông góc: $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$.</li>
                <li>Bình phương vô hướng: $\\vec{a}^2 = |\\vec{a}|^2$.</li>
                <li>Công thức cosin góc: $\\cos(\\vec{a}, \\vec{b}) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$.</li>
              </ul>
            </div>
          `,
          audioUrl: "assets/audio/b12_7_sec2b.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-12-6-4a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Góc giữa hai vectơ ngược hướng",
              question: "Nếu hai vectơ $\\vec{u}$ và $\\vec{v}$ ngược hướng nhau thì góc giữa chúng bằng bao nhiêu?",
              options: [
                "$180^\\circ$",
                "$0^\\circ$",
                "$90^\\circ$",
                "$360^\\circ$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Hai vectơ cùng hướng có góc bằng $0^\\circ$, hai vectơ ngược hướng có góc bằng $180^\\circ$.",
              feedbackWrong: "Chú ý: Góc giữa hai vectơ nằm trong đoạn từ $0^\\circ$ đến $180^\\circ$."
            },
            {
              id: "cp-12-6-4a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Tính tích vô hướng",
              question: "Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ có $|\\vec{a}| = 2, |\\vec{b}| = 3$ và góc $(\\vec{a}, \\vec{b}) = 60^\\circ$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
              options: [
                "3",
                "6",
                "$3\\sqrt{3}$",
                "0"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất giỏi! Áp dụng công thức: $\\vec{a} \\cdot \\vec{b} = 2 \\times 3 \\times \\cos 60^\\circ = 6 \\times 0{,}5 = 3$.",
              feedbackWrong: "Áp dụng công thức: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos(\\vec{a}, \\vec{b})$ với $\\cos 60^\\circ = 1/2$."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về Tích Vô Hướng",
            content: "Khắc cốt ghi tâm công thức: <strong>'Tích vô hướng = Dài nhân Dài nhân Cốt (cos) góc xen giữa'</strong>. Nhớ thêm: Vuông góc thì tích bằng Không; cùng hướng thì bằng tích độ dài."
          },

          workedExample: {
            title: "Ví dụ 10 (SGK trang 56) - Tính tích vô hướng trong hình chóp tứ giác đều",
            problem: "Cho hình chóp tứ giác đều $S.ABCD$ có độ dài tất cả các cạnh bằng $a$. Tính tích vô hướng $\\vec{AS} \\cdot \\vec{AC}$.",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <p>1. Vì $ABCD$ là hình vuông cạnh $a$ nên độ dài đường chéo là $AC = a\\sqrt{2}$.</p>
              <p>2. Xét tam giác $SAC$ có các cạnh: $SA = a, SC = a, AC = a\\sqrt{2}$.</p>
              <p>Ta nhận thấy $SA^2 + SC^2 = a^2 + a^2 = 2a^2 = AC^2$.</p>
              <p>Do đó tam giác $SAC$ vuông cân tại $S$, suy ra góc $\\widehat{SAC} = 45^\\circ$.</p>
              <p>3. Góc giữa hai vectơ $(\\vec{AS}, \\vec{AC}) = \\widehat{SAC} = 45^\\circ$.</p>
              <p>4. Áp dụng công thức tích vô hướng:</p>
              <p>$$\\vec{AS} \\cdot \\vec{AC} = |\\vec{AS}| \\cdot |\\vec{AC}| \\cdot \\cos 45^\\circ = a \\cdot (a\\sqrt{2}) \\cdot \\frac{\\sqrt{2}}{2} = a^2.$$</p>
              <p><strong>Kết luận:</strong> $\\vec{AS} \\cdot \\vec{AC} = a^2$.</p>
            `,
            teacherGuidance: "Các em hãy chú ý: Cả hai vectơ $\\vec{AS}$ và $\\vec{AC}$ đều chung gốc $A$, do đó góc giữa chúng chính là góc hình học $\\widehat{SAC}$."
          }
        }
      ]
    }
  ],

  // 4. Chốt bài học
  realworldWrapup: {
    title: "GIẢI QUYẾT BÀI TOÁN DẪN NHẬP LỰC CĂNG DÂY CẦN CẨU THÁP",
    recap: "Đầu bài học, ta đã tìm hiểu: Làm thế nào các kĩ sư xây dựng tính toán được hợp lực của 4 sợi dây cáp thép không đồng phẳng giữ kiện hàng bê tông treo lơ lửng trên không trung?",
    solution: `
      <p><strong>Lời giải chi tiết chốt vấn đề của Thầy Sáng:</strong></p>
      <p>1. <strong>Mô hình hóa hình học:</strong> Đặt kiện hàng bê tông có trọng lượng $\\vec{P}$ hướng thẳng đứng xuống đất. Bốn sợi cáp chịu 4 lực căng $\\vec{T}_1, \\vec{T}_2, \\vec{T}_3, \\vec{T}_4$ xuất phát từ móc treo chung $O$.</p>
      <p>2. <strong>Điều kiện cân bằng tĩnh học:</strong></p>
      <p>Để kiện hàng treo yên trên không trung không bị rơi, tổng hợp lực của 4 lực căng cáp trong không gian phải triệt tiêu chính xác với trọng lực:</p>
      <p>$$\\vec{T}_1 + \\vec{T}_2 + \\vec{T}_3 + \\vec{T}_4 + \\vec{P} = \\vec{0} \\iff \\vec{T}_1 + \\vec{T}_2 + \\vec{T}_3 + \\vec{T}_4 = -\\vec{P}.$$</p>
      <p>3. Nhờ quy tắc cộng vectơ trong không gian và phép phân tích lực, các kĩ sư có thể tính chính xác tải trọng mà từng sợi cáp phải gánh chịu, từ đó chọn kích thước tao cáp thép chuẩn xác, bảo đảm an toàn tuyệt đối cho người lao động tại công trường!</p>
    `,
    audioUrl: "assets/audio/b6_wrapup.mp3",
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
        id: "mc-12-6-1",
        num: 1,
        level: "Nhận biết",
        prompt: "Cho hình hộp $ABCD.A'B'C'D'$. Khẳng định nào sau đây là <strong>đúng</strong> theo quy tắc hình hộp?",
        options: [
          "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$",
          "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{CA'}$",
          "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{BD'}$",
          "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC}$"
        ],
        correctIndex: 0,
        solution: "Theo quy tắc hình hộp SGK trang 50: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$.",
        similarVariation: {
          prompt: "Trong hình hộp $ABCD.A'B'C'D'$, tổng $\\vec{DA} + \\vec{DC} + \\vec{DD'}$ bằng vectơ nào?",
          options: ["$\\vec{DB'}$", "$\\vec{AC'}$", "$\\vec{CA'}$", "$\\vec{BD'}$"],
          correctIndex: 0,
          solution: "Xuất phát từ đỉnh $D$ thì đường chéo là $\\vec{DB'}$."
        }
      },
      {
        id: "mc-12-6-2",
        num: 2,
        level: "Nhận biết",
        prompt: "Trong không gian, điều kiện để hai vectơ $\\vec{a}$ và $\\vec{b}$ $(\\vec{b} \\neq \\vec{0})$ cùng phương là:",
        options: [
          "Tồn tại số thực $k$ sao cho $\\vec{a} = k\\vec{b}$",
          "Tích vô hướng $\\vec{a} \\cdot \\vec{b} = 0$",
          "$|\\vec{a}| = |\\vec{b}|$",
          "$\\vec{a} + \\vec{b} = \\vec{0}$"
        ],
        correctIndex: 0,
        solution: "Theo định lí SGK trang 53: Hai vectơ cùng phương khi và chỉ khi có số thực $k$ sao cho $\\vec{a} = k\\vec{b}$.",
        similarVariation: {
          prompt: "Nếu $\\vec{u} = 2\\vec{v}$ thì hai vectơ $\\vec{u}$ và $\\vec{v}$ có quan hệ gì?",
          options: ["Cùng phương và cùng hướng", "Ngược hướng", "Vuông góc", "Không cùng phương"],
          correctIndex: 0,
          solution: "Vì $k = 2 > 0$ nên cùng phương và cùng hướng."
        }
      },
      {
        id: "mc-12-6-3",
        num: 3,
        level: "Nhận biết",
        prompt: "Góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ trong không gian có thể nhận giá trị trong đoạn nào?",
        options: [
          "$[0^\\circ; 180^\\circ]$",
          "$[0^\\circ; 90^\\circ]$",
          "$[-180^\\circ; 180^\\circ]$",
          "$[0^\\circ; 360^\\circ]$"
        ],
        correctIndex: 0,
        solution: "Theo định nghĩa SGK trang 55: Góc giữa hai vectơ luôn thỏa mãn $0^\\circ \\le (\\vec{a}, \\vec{b}) \\le 180^\\circ$.",
        similarVariation: {
          prompt: "Góc giữa hai vectơ cùng hướng bằng:",
          options: ["$0^\\circ$", "$90^\\circ$", "$180^\\circ$", "$45^\\circ$"],
          correctIndex: 0,
          solution: "Hai vectơ cùng hướng thì góc bằng $0^\\circ$."
        }
      },
      {
        id: "mc-12-6-4",
        num: 4,
        level: "Nhận biết",
        prompt: "Cho tứ diện $ABCD$ có trọng tâm $G$. Khẳng định nào sau đây là <strong>đúng</strong>?",
        options: [
          "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$",
          "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{AB}$",
          "$\\vec{GA} + \\vec{GB} = \\vec{GC} + \\vec{GD}$",
          "$\\vec{OG} = \\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD}$"
        ],
        correctIndex: 0,
        solution: "Đây là định nghĩa trọng tâm của tứ diện trong không gian SGK trang 54.",
        similarVariation: {
          prompt: "Với điểm $M$ bất kì và $G$ là trọng tâm tứ diện $ABCD$, hệ thức nào sau đây đúng?",
          options: ["$\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG}$", "$\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = \\vec{0}$", "$\\vec{MG} = \\vec{MA} + \\vec{MB}$", "$4\\vec{MG} = \\vec{0}$"],
          correctIndex: 0,
          solution: "Tổng 4 vectơ từ điểm $M$ đến 4 đỉnh bằng $4\\vec{MG}$."
        }
      },
      {
        id: "mc-12-6-5",
        num: 5,
        level: "Nhận biết",
        prompt: "Trong không gian, hai vectơ $\\vec{u}$ và $\\vec{v}$ đều khác $\\vec{0}$ vuông góc với nhau khi và chỉ khi:",
        options: [
          "$\\vec{u} \\cdot \\vec{v} = 0$",
          "$\\vec{u} \\cdot \\vec{v} = 1$",
          "$|\\vec{u}| = |\\vec{v}| = 0$",
          "$\\vec{u} + \\vec{v} = \\vec{0}$"
        ],
        correctIndex: 0,
        solution: "Theo tính chất SGK trang 56: $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.",
        similarVariation: {
          prompt: "Bình phương vô hướng $\\vec{a}^2$ của vectơ $\\vec{a}$ bằng:",
          options: ["$|\\vec{a}|^2$", "$|\\vec{a}|$", "$2|\\vec{a}|$", "$0$"],
          correctIndex: 0,
          solution: "Bình phương vô hướng bằng bình phương độ dài."
        }
      }
    ],

    // Dạng 2: 3 câu Đúng/Sai (Thông hiểu - chuẩn 4 ý a, b, c, d)
    part2TrueFalse: [
      {
        id: "tf-12-6-1",
        num: 1,
        level: "Thông hiểu",
        prompt: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$.", isCorrect: true },
          { text: "b) Độ dài của vectơ $\\vec{AC'}$ bằng $a\\sqrt{3}$.", isCorrect: true },
          { text: "c) Hai vectơ $\\vec{AB}$ và $\\vec{B'C'}$ là hai vectơ vuông góc với nhau.", isCorrect: true },
          { text: "d) Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{A'D'}$ bằng $90^\\circ$.", isCorrect: true }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Đây là quy tắc hình hộp chuẩn.</li>
            <li>b) <strong>ĐÚNG:</strong> Đường chéo hình lập phương cạnh $a$ có độ dài bằng $\\sqrt{a^2 + a^2 + a^2} = a\\sqrt{3}$.</li>
            <li>c) <strong>ĐÚNG:</strong> $\\vec{B'C'} = \\vec{BC}$, mà $AB \\perp BC \\implies \\vec{AB} \\perp \\vec{B'C'}$.</li>
            <li>d) <strong>ĐÚNG:</strong> $\\vec{A'D'} = \\vec{AD}$, mà $AB \\perp AD \\implies$ góc bằng $90^\\circ$.</li>
          </ul>
        `
      },
      {
        id: "tf-12-6-2",
        num: 2,
        level: "Thông hiểu",
        prompt: "Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng $a$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{AC}$ bằng $60^\\circ$.", isCorrect: true },
          { text: "b) Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = \\frac{a^2}{2}$.", isCorrect: true },
          { text: "c) Hai vectơ $\\vec{AB}$ và $\\vec{CD}$ là hai vectơ vuông góc với nhau.", isCorrect: true },
          { text: "d) Tích vô hướng $\\vec{AB} \\cdot \\vec{CD} = a^2$.", isCorrect: false }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Tam giác $ABC$ là tam giác đều nên $\\widehat{BAC} = 60^\\circ$.</li>
            <li>b) <strong>ĐÚNG:</strong> $\\vec{AB} \\cdot \\vec{AC} = a \\times a \\times \\cos 60^\\circ = a^2 / 2$.</li>
            <li>c) <strong>ĐÚNG:</strong> Trong tứ diện đều, các cặp cạnh đối diện luôn vuông góc với nhau trong không gian.</li>
            <li>d) <strong>SAI:</strong> Vì $AB \\perp CD$ nên tích vô hướng $\\vec{AB} \\cdot \\vec{CD} = 0$.</li>
          </ul>
        `
      },
      {
        id: "tf-12-6-3",
        num: 3,
        level: "Thông hiểu",
        prompt: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Gọi $M$ là trung điểm cạnh $BB'$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) $\\vec{AA'} + \\vec{AB} = \\vec{AB'}$.", isCorrect: true },
          { text: "b) $\\vec{AM} = \\vec{AB} + \\frac{1}{2}\\vec{AA'}$.", isCorrect: true },
          { text: "c) $\\vec{A'C} = \\vec{AC} - \\vec{AA'}$.", isCorrect: true },
          { text: "d) Ba vectơ $\\vec{AB}, \\vec{AC}, \\vec{AA'}$ cùng nằm trên một mặt phẳng.", isCorrect: false }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Tứ giác $ABB'A'$ là hình bình hành nên $\\vec{AA'} + \\vec{AB} = \\vec{AB'}$.</li>
            <li>b) <strong>ĐÚNG:</strong> $\\vec{AM} = \\vec{AB} + \\vec{BM} = \\vec{AB} + \\frac{1}{2}\\vec{BB'} = \\vec{AB} + \\frac{1}{2}\\vec{AA'}$.</li>
            <li>c) <strong>ĐÚNG:</strong> $\\vec{A'C} = \\vec{AC} - \\vec{AA'}$.</li>
            <li>d) <strong>SAI:</strong> $A, B, C, A'$ là 4 đỉnh của khối lăng trụ không đồng phẳng.</li>
          </ul>
        `
      }
    ],

    // Dạng 3: 2 câu Trả lời ngắn (Toán thực tế - Vận dụng)
    part3ShortAnswer: [
      {
        id: "sa-12-6-1",
        num: 1,
        level: "Vận dụng",
        prompt: "Một chiếc bàn làm việc hình hộp chữ nhật có ba kích thước: dài $1{,}6\\text{ m}$, rộng $1{,}2\\text{ m}$ và cao $0{,}9\\text{ m}$. Một con nhện bò trên không gian theo đường bay thẳng tắp từ góc trên mặt bàn $A$ đến góc chân bàn đối diện $C'$ bên dưới. Tính độ dài quãng đường ngắn nhất mà con nhện đã bay (tính theo mét, làm tròn đến chữ số thập phân thứ hai).",
        correctValue: "2.19",
        acceptableAnswers: ["2.19", "2,19", "2.19m", "2.2"],
        unit: "m",
        solution: "Theo quy tắc hình hộp, vectơ đường chéo $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$. Vì ba kích thước đôi một vuông góc nên độ dài đường chéo $AC' = \\sqrt{1{,}6^2 + 1{,}2^2 + 0{,}9^2} = \\sqrt{2{,}56 + 1{,}44 + 0{,}81} = \\sqrt{4{,}81} \\approx 2{,}193\\text{ m}$. Làm tròn 2 chữ số thập phân ta được $2{,}19\\text{ m}$.",
        similarVariation: {
          prompt: "Một căn phòng hình hộp chữ nhật có kích thước $4\\text{ m} \\times 4\\text{ m} \\times 2\\text{ m}$. Khoảng cách đường chéo giữa góc trần nhà và góc sàn nhà đối diện là bao nhiêu mét?",
          correctValue: "6",
          acceptableAnswers: ["6", "6m", "6.0"],
          solution: "$\\sqrt{4^2 + 4^2 + 2^2} = \\sqrt{16 + 16 + 4} = \\sqrt{36} = 6\\text{ m}$."
        }
      },
      {
        id: "sa-12-6-2",
        num: 2,
        level: "Vận dụng",
        prompt: "Một vật có khối lượng bị kéo bởi ba lực trong không gian: lực $\\vec{F}_1$ kéo sang phải $30\\text{ N}$, lực $\\vec{F}_2$ kéo về phía trước $40\\text{ N}$ và lực $\\vec{F}_3$ kéo thẳng đứng lên trên $120\\text{ N}$. Biết ba lực này đôi một vuông góc với nhau. Độ lớn của hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3$ tác dụng lên vật bằng bao nhiêu Newton?",
        correctValue: "130",
        acceptableAnswers: ["130", "130 N", "130N"],
        unit: "N",
        solution: "Vì ba lực đôi một vuông góc nên độ lớn của hợp lực tính theo công thức Pythagore trong không gian 3 chiều: $|\\vec{F}| = \\sqrt{F_1^2 + F_2^2 + F_3^2} = \\sqrt{30^2 + 40^2 + 120^2} = \\sqrt{900 + 1600 + 14400} = \\sqrt{16900} = 130\\text{ N}$.",
        similarVariation: {
          prompt: "Nếu ba lực vuông góc có độ lớn lần lượt là $6\\text{ N}, 8\\text{ N}$ và $24\\text{ N}$, độ lớn của hợp lực bằng bao nhiêu Newton?",
          correctValue: "26",
          acceptableAnswers: ["26", "26 N"],
          solution: "$\\sqrt{6^2 + 8^2 + 24^2} = \\sqrt{36 + 64 + 576} = \\sqrt{676} = 26\\text{ N}$."
        }
      }
    ]
  }
};

// Tự động gán vào Window để Engine nhận diện
if (typeof window !== "undefined") {
  window.LESSON_12_6_DATA = window.LESSON_12_C2_B6_DATA;
}

