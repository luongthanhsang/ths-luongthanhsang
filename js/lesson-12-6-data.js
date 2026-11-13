/**
 * BÀI HỌC SỐ: BÀI 6. VECTƠ TRONG KHÔNG GIAN (TOÁN 12 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - Phần I: Lời chào của Thầy Sáng + Nút Voice AI vàng đồng, chỉnh tốc độ
 * - Phần II: Mục tiêu & Yêu cầu cần đạt chuẩn kịch bản ThS. Lương Thanh Sáng + Voice AI
 * - Phần III: Tiến trình bài học:
 *             1. Dẫn nhập cần cẩu nâng hàng trong không gian 3D + TikZ SVG
 *             2. Bốn mục lý thuyết bám sát kịch bản:
 *                - Mục 1: Vectơ trong không gian (Đóng khung SGK, TikZ SVG, 2 POI, Mẹo nhớ, Ví dụ & Bài tập tương tự)
 *                - Mục 2: Tổng và hiệu của hai vectơ (Đóng khung SGK, TikZ SVG Hình hộp, 2 POI, Mẹo nhớ, Ví dụ & Bài tập tương tự)
 *                - Mục 3: Tích của một số với một vectơ (Đóng khung SGK, TikZ SVG Trọng tâm, 2 POI, Mẹo nhớ, Ví dụ & Bài tập tương tự)
 *                - Mục 4: Tích vô hướng của hai vectơ (Đóng khung SGK, TikZ SVG Góc & Tích vô hướng, 2 POI, Mẹo nhớ, Ví dụ & Bài tập tương tự)
 *             3. Chốt bài học: Nhắc lại bài toán dẫn nhập + Lời giải chi tiết của Thầy Sáng
 * - Phần IV: Bài tập trắc nghiệm tổng hợp chuẩn cấu trúc thi mới 2025:
 *             + 5 câu trắc nghiệm nhiều lựa chọn (Dễ - Nhận biết)
 *             + 3 câu trắc nghiệm Đúng/Sai 4 ý (Thông hiểu)
 *             + 2 câu trả lời ngắn thực tế (Vận dụng)
 *             + Tất cả các câu đều có nút "Lời giải chi tiết của thầy Sáng" và nút "Bài toán tương tự" đổi số tự động
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
    buttonLabel: "Nhấn nghe Lời chào",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN KỊCH BẢN THS. LƯƠNG THANH SÁNG)
  // =========================================================================
  learningGoals: [
    "Nhận biết: Vectơ trong không gian, sự cùng phương, cùng hướng và góc giữa hai vectơ.",
    "Thực hành: Các phép toán vectơ (Tổng, hiệu, tích với một số, tích vô hướng)."
  ],
  goalsAudioUrl: "assets/audio/b6_main_lecture.mp3",
  goalsButtonLabel: "Nghe thầy Sáng AI đọc",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================
  // 1. Bài toán dẫn nhập
  hook: {
    title: "1. Bài toán dẫn nhập: Cần cẩu nâng kiện hàng nặng trong không gian 3 chiều",
    story: "Trong thực tế, khi một chiếc cần cẩu nâng một kiện hàng nặng, lực căng của các sợi dây cáp không chỉ nằm trên mặt đất mà tỏa ra trong không gian ba chiều. Làm sao để biểu diễn chính xác hướng và độ lớn của các lực lơ lửng này?",
    illustrationCaption: "Mô phỏng cần cẩu nâng kiện hàng bằng các vectơ lực căng trong không gian 3 chiều",
    illustration: "",
    illustrationSvg: `
      <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
        <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
          <i class="fa-solid fa-compass-drafting"></i> Đồ họa mô phỏng: Cần cẩu tháp và các vectơ lực căng cáp không gian 3D
        </div>
        <div style="text-align: center;">
          <svg width="460" height="230" viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
            <defs>
              <marker id="hook-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
              </marker>
              <marker id="hook-p-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
              </marker>
            </defs>
            <!-- Thân và cần cẩu -->
            <line x1="60" y1="210" x2="60" y2="30" stroke="#475569" stroke-width="5"/>
            <line x1="40" y1="30" x2="380" y2="30" stroke="#475569" stroke-width="4"/>
            <line x1="60" y1="30" x2="160" y2="70" stroke="#94a3b8" stroke-width="2"/>
            <!-- Móc cẩu trung tâm S -->
            <circle cx="230" cy="70" r="5" fill="#f59e0b"/>
            <text x="236" y="68" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">S (Móc cẩu)</text>
            <!-- Dây treo từ cần cẩu xuống móc -->
            <line x1="230" y1="30" x2="230" y2="70" stroke="#334155" stroke-width="2.5"/>

            <!-- Khối kiện hàng hình hộp ở dưới -->
            <polygon points="170,160 270,160 300,180 200,180" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
            <polygon points="170,160 200,180 200,210 170,190" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
            <polygon points="200,180 300,180 300,210 200,210" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>
            <!-- 4 góc kiện hàng A, B, C, D -->
            <circle cx="170" cy="160" r="3" fill="#0284c7"/><text x="156" y="158" font-size="11" font-weight="bold" fill="#0369a1">A</text>
            <circle cx="270" cy="160" r="3" fill="#0284c7"/><text x="276" y="158" font-size="11" font-weight="bold" fill="#0369a1">B</text>
            <circle cx="300" cy="180" r="3" fill="#0284c7"/><text x="306" y="182" font-size="11" font-weight="bold" fill="#0369a1">C</text>
            <circle cx="200" cy="180" r="3" fill="#0284c7"/><text x="188" y="192" font-size="11" font-weight="bold" fill="#0369a1">D</text>

            <!-- 4 vectơ lực căng dây cáp từ 4 góc về móc S -->
            <line x1="170" y1="160" x2="223" y2="80" stroke="#2563eb" stroke-width="2" marker-end="url(#hook-arr)"/>
            <line x1="270" y1="160" x2="234" y2="80" stroke="#2563eb" stroke-width="2" marker-end="url(#hook-arr)"/>
            <line x1="300" y1="180" x2="237" y2="82" stroke="#2563eb" stroke-width="2" marker-end="url(#hook-arr)"/>
            <line x1="200" y1="180" x2="227" y2="82" stroke="#2563eb" stroke-width="2" marker-end="url(#hook-arr)"/>
            <text x="180" y="115" font-size="12" font-weight="bold" fill="#2563eb">\\vec{T_1}</text>
            <text x="260" y="115" font-size="12" font-weight="bold" fill="#2563eb">\\vec{T_2}</text>

            <!-- Trọng lực P thẳng đứng xuống dưới -->
            <line x1="235" y1="185" x2="235" y2="228" stroke="#dc2626" stroke-width="2.5" marker-end="url(#hook-p-arr)"/>
            <text x="242" y="222" font-size="13" font-weight="bold" fill="#dc2626">\\vec{P}</text>
          </svg>
        </div>
      </div>
    `,
    question: "Làm sao để biểu diễn chính xác hướng và độ lớn của các lực lơ lửng này để tính toán điều kiện cân bằng trong không gian?",
    audioUrl: "assets/audio/b6_wrapup.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    bridge: "Hãy cùng Thầy Sáng đi sâu vào các quy tắc hình học không gian kỳ diệu ngay sau đây!"
  },

  // 2. Trình phát bài giảng tương tác có POI
  interactiveAudio: {
    title: "Bài giảng tương tác: Vectơ trong không gian & Quy tắc hình hộp",
    audioUrl: "assets/audio/b6_main_lecture.mp3",
    duration: 75,
    timestamps: [
      {
        id: "poi-12-6-1",
        time: 25,
        title: "Điểm dừng 1: Quy tắc hình hộp trong không gian",
        question: "Cho hình hộp $ABCD.A'B'C'D'$. Tổng $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng vectơ nào sau đây?",
        options: [
          "$\\vec{AC'}$ (đường chéo xuất phát từ $A$)",
          "$\\vec{AC}$",
          "$\\vec{BD'}$",
          "$\\vec{A'C}$"
        ],
        correctIndex: 0,
        hint: "Quy tắc hình hộp: Ba vectơ cạnh cùng xuất phát từ một đỉnh sẽ cộng lại bằng vectơ đường chéo xuất phát từ đỉnh đó.",
        explain: "Chính xác tuyệt đối! Định lí quy tắc hình hộp khẳng định: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$."
      },
      {
        id: "poi-12-6-2",
        time: 55,
        title: "Điểm dừng 2: Điều kiện vuông góc của hai vectơ",
        question: "Trong không gian, điều kiện cần và đủ để hai vectơ khác vectơ-không $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau là:",
        options: [
          "$\\vec{u} \\cdot \\vec{v} = 0$",
          "$|\\vec{u}| = |\\vec{v}|$",
          "$\\vec{u} \\cdot \\vec{v} = 1$",
          "$\\vec{u}$ và $\\vec{v}$ cùng phương"
        ],
        correctIndex: 0,
        hint: "Vì $\\cos 90^\\circ = 0$ nên tích vô hướng phải bằng 0.",
        explain: "Rất xuất sắc! Hai vectơ vuông góc khi và chỉ khi tích vô hướng của chúng triệt tiêu: $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$."
      }
    ]
  },

  // 3. Triển khai 4 mục lý thuyết chuẩn chỉ theo kịch bản
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1. VECTƠ TRONG KHÔNG GIAN
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "VECTƠ TRONG KHÔNG GIAN",
      subsections: [
        {
          key: "1a",
          title: "Định nghĩa vectơ, độ dài và hai vectơ bằng nhau",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn phần đóng khung SGK:</div>
              <ul class="sgk-box-list">
                <li><strong>Vectơ trong không gian</strong> là một đoạn thẳng có hướng. Kí hiệu: $\\vec{a}, \\vec{b}, \\vec{AB}$.</li>
                <li><strong>Độ dài của vectơ</strong> là khoảng cách giữa điểm đầu và điểm cuối của vectơ đó, kí hiệu là $|\\vec{AB}|$.</li>
                <li><strong>Hai vectơ cùng phương</strong> nếu giá của chúng song song hoặc trùng nhau.</li>
                <li>Hai vectơ $\\vec{a}$ và $\\vec{b}$ được gọi là <strong>bằng nhau</strong> (kí hiệu $\\vec{a} = \\vec{b}$) nếu chúng có <strong>cùng hướng và cùng độ dài</strong>.</li>
              </ul>
            </div>

            <!-- TikZ SVG Minh họa Vectơ trong Tứ diện -->
            <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
              <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
                <i class="fa-solid fa-cube"></i> Hình vẽ TikZ: Biểu diễn vectơ trong không gian qua tứ diện ABCD
              </div>
              <div class="tikz-svg-container" style="text-align: center; padding: 10px 0;">
                <svg width="440" height="200" viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-3d-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                    </marker>
                  </defs>
                  <circle cx="220" cy="20" r="4" fill="#0284c7"/>
                  <text x="215" y="12" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0369a1">A</text>
                  <circle cx="100" cy="150" r="4" fill="#0284c7"/>
                  <text x="80" y="155" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0369a1">B</text>
                  <circle cx="200" cy="180" r="4" fill="#0284c7"/>
                  <text x="195" y="198" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0369a1">C</text>
                  <circle cx="340" cy="140" r="4" fill="#0284c7"/>
                  <text x="350" y="145" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0369a1">D</text>

                  <line x1="100" y1="150" x2="200" y2="180" stroke="#0284c7" stroke-width="2"/>
                  <line x1="200" y1="180" x2="340" y2="140" stroke="#0284c7" stroke-width="2"/>
                  <line x1="100" y1="150" x2="340" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>

                  <line x1="220" y1="20" x2="103" y2="145" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-3d-red)"/>
                  <line x1="220" y1="20" x2="200" y2="175" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-3d-red)"/>
                  <line x1="220" y1="20" x2="337" y2="137" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-3d-red)"/>
                  <text x="145" y="80" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\vec{AB}</text>
                  <text x="220" y="100" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\vec{AC}</text>
                  <text x="290" y="75" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\vec{AD}</text>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình minh họa: Ba vectơ $\\vec{AB}, \\vec{AC}, \\vec{AD}$ xuất phát từ đỉnh $A$ của tứ diện $ABCD$</em>
              </div>
            </div>
          `,
          audioUrl: "assets/audio/b12_7_sec1a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          // Tương tác POI (bám sát kịch bản Thầy gửi)
          checkpoints: [
            {
              id: "cp-12-6-v1",
              triggerRatio: 0.25,
              title: "Tương tác 1: Điểm đầu và điểm cuối của vectơ",
              question: "Điểm đầu và điểm cuối của vectơ $\\vec{AB}$ lần lượt là?",
              options: [
                "Điểm A và Điểm B",
                "Điểm B và Điểm A"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Vectơ $\\vec{AB}$ có điểm đầu là $A$ và điểm cuối là $B$.",
              feedbackWrong: "Chưa chính xác! Thử lại để mở khóa bài giảng nhé."
            },
            {
              id: "cp-12-6-v2",
              triggerRatio: 0.5,
              title: "Tương tác 2: Khái niệm hai vectơ cùng phương",
              question: "Hai vectơ cùng phương khi giá của chúng...",
              options: [
                "Song song hoặc trùng nhau",
                "Cắt nhau"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Theo định nghĩa, hai vectơ cùng phương nếu giá của chúng song song hoặc trùng nhau.",
              feedbackWrong: "Chưa chính xác! Thử lại để mở khóa bài giảng nhé."
            }
          ],

          memoryTip: {
            title: "Mẹo của thầy Sáng:",
            content: "Đã nói đến vectơ là nói đến 2 yếu tố: <strong>HƯỚNG và ĐỘ DÀI</strong>. Chỉ cần so sánh 2 yếu tố này để biết chúng có bằng nhau hay không, bất chấp chúng nằm lơ lửng ở đâu trong không gian."
          },

          workedExample: {
            title: "Ví dụ 1: Nhận biết vectơ trong tứ diện",
            problem: "Cho tứ diện $ABCD$ có độ dài mỗi cạnh bằng $1$.\na) Có bao nhiêu vectơ có điểm đầu là $A$ và điểm cuối là một trong các đỉnh còn lại của tứ diện?\nb) Tính độ dài của các vectơ tìm được ở câu a.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>a) Các đỉnh còn lại của tứ diện khác đỉnh $A$ là $B, C, D$.</p>
              <p>Do đó, có đúng 3 vectơ có điểm đầu là $A$ và điểm cuối là các đỉnh còn lại: $\\vec{AB}, \\vec{AC}, \\vec{AD}$.</p>
              <p>b) Vì tứ diện $ABCD$ có tất cả các cạnh bằng 1 nên:</p>
              <ul>
                <li>$|\\vec{AB}| = AB = 1$.</li>
                <li>$|\\vec{AC}| = AC = 1$.</li>
                <li>$|\\vec{AD}| = AD = 1$.</li>
              </ul>
              <p><strong>Kết luận:</strong> Độ dài của cả ba vectơ đều bằng 1.</p>
            `,
            similarProblem: `
              <p><strong>Đề bài bài tập tương tự:</strong> Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $3$, cạnh bên bằng $5$. Hãy kể tên các vectơ có điểm đầu là đỉnh $S$, điểm cuối là các đỉnh của đáy và tính độ dài của các vectơ đó.</p>
              <p><strong>Hướng dẫn:</strong> Các vectơ là $\\vec{SA}, \\vec{SB}, \\vec{SC}$ và $|\\vec{SA}| = |\\vec{SB}| = |\\vec{SC}| = 5$.</p>
            `
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2. TỔNG VÀ HIỆU CỦA HAI VECTƠ
    // -----------------------------------------------------------------------
    {
      num: "2",
      title: "TỔNG VÀ HIỆU CỦA HAI VECTƠ",
      subsections: [
        {
          key: "2a",
          title: "Quy tắc 3 điểm, hình bình hành và Quy tắc hình hộp",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn phần đóng khung SGK:</div>
              <ul class="sgk-box-list">
                <li><strong>Quy tắc ba điểm:</strong> $\\vec{AB} + \\vec{BC} = \\vec{AC}$.</li>
                <li><strong>Quy tắc hình bình hành:</strong> Nếu $ABCD$ là hình bình hành thì $\\vec{AB} + \\vec{AD} = \\vec{AC}$.</li>
                <li><strong>Quy tắc hình hộp:</strong> Cho hình hộp $ABCD.A'B'C'D'$. Ta có: 
                  <div style="text-align: center; font-size: 1.15rem; font-weight: bold; margin: 8px 0; color: #1e3a8a;">
                    $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$
                  </div>
                </li>
                <li><strong>Hiệu hai vectơ:</strong> $\\vec{OB} - \\vec{OA} = \\vec{AB}$.</li>
              </ul>
            </div>

            <!-- TikZ SVG Quy tắc hình hộp 3D -->
            <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
              <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
                <i class="fa-solid fa-cube"></i> Hình vẽ TikZ: Mô phỏng Quy tắc hình hộp $ABCD.A'B'C'D'$
              </div>
              <div class="tikz-svg-container" style="text-align: center; padding: 10px 0;">
                <svg width="440" height="240" viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="box-arr-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
                    </marker>
                    <marker id="box-arr-gold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706"/>
                    </marker>
                  </defs>
                  <!-- Điểm A và các đỉnh -->
                  <!-- A=(120,160), B=(260,160), C=(340,110), D=(200,110) -->
                  <!-- A'=(120,70), B'=(260,70), C'=(340,20), D'=(200,20) -->
                  <!-- Cạnh khuất nét đứt -->
                  <line x1="120" y1="160" x2="200" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                  <line x1="200" y1="110" x2="340" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                  <line x1="200" y1="110" x2="200" y2="20" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

                  <!-- Các cạnh nét liền -->
                  <line x1="260" y1="160" x2="340" y2="110" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="120" y1="70" x2="260" y2="70" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="260" y1="70" x2="340" y2="20" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="340" y1="20" x2="200" y2="20" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="200" y1="20" x2="120" y2="70" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="260" y1="160" x2="260" y2="70" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="340" y1="110" x2="340" y2="20" stroke="#64748b" stroke-width="1.5"/>

                  <!-- Ba vectơ thành phần từ đỉnh A -->
                  <line x1="120" y1="160" x2="252" y2="160" stroke="#2563eb" stroke-width="2.5" marker-end="url(#box-arr-blue)"/>
                  <line x1="120" y1="160" x2="194" y2="114" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#box-arr-blue)"/>
                  <line x1="120" y1="160" x2="120" y2="78" stroke="#2563eb" stroke-width="2.5" marker-end="url(#box-arr-blue)"/>
                  <text x="180" y="180" font-size="12" font-weight="bold" fill="#2563eb">\\vec{AB}</text>
                  <text x="145" y="130" font-size="12" font-weight="bold" fill="#2563eb">\\vec{AD}</text>
                  <text x="90" y="115" font-size="12" font-weight="bold" fill="#2563eb">\\vec{AA'}</text>

                  <!-- Đường chéo không gian AC' -->
                  <line x1="120" y1="160" x2="334" y2="24" stroke="#d97706" stroke-width="3" marker-end="url(#box-arr-gold)"/>
                  <text x="245" y="85" font-size="14" font-weight="bold" fill="#d97706">\\vec{AC'}</text>

                  <!-- Tên các đỉnh -->
                  <text x="105" y="172" font-size="13" font-weight="bold" fill="#0f172a">A</text>
                  <text x="265" y="172" font-size="13" font-weight="bold" fill="#0f172a">B</text>
                  <text x="348" y="115" font-size="13" font-weight="bold" fill="#0f172a">C</text>
                  <text x="190" y="105" font-size="13" font-weight="bold" fill="#0f172a">D</text>
                  <text x="105" y="68" font-size="13" font-weight="bold" fill="#0f172a">A'</text>
                  <text x="268" y="68" font-size="13" font-weight="bold" fill="#0f172a">B'</text>
                  <text x="348" y="18" font-size="13" font-weight="bold" fill="#0f172a">C'</text>
                  <text x="195" y="15" font-size="13" font-weight="bold" fill="#0f172a">D'</text>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình minh họa: Quy tắc hình hộp $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$</em>
              </div>
            </div>
          `,
          audioUrl: "assets/audio/b12_7_sec1b.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-12-6-ct1",
              triggerRatio: 0.25,
              title: "Tương tác 1: Quy tắc ba điểm",
              question: "Theo quy tắc 3 điểm, $\\vec{AB} + \\vec{BC}$ bằng?",
              options: [
                "$\\vec{AC}$",
                "$\\vec{CA}$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! $\\vec{AB} + \\vec{BC} = \\vec{AC}$.",
              feedbackWrong: "Chưa chính xác! Thử lại để mở khóa bài giảng nhé."
            },
            {
              id: "cp-12-6-ct2",
              triggerRatio: 0.5,
              title: "Tương tác 2: Khái niệm vectơ đối",
              question: "Vectơ đối của $\\vec{AB}$ là vectơ nào?",
              options: [
                "$\\vec{BA}$",
                "$\\vec{0}$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Vectơ đối của $\\vec{AB}$ là $-\\vec{AB} = \\vec{BA}$.",
              feedbackWrong: "Chưa chính xác! Thử lại để mở khóa bài giảng nhé."
            }
          ],

          memoryTip: {
            title: "Mẹo của thầy Sáng:",
            content: "Quy tắc hình hộp chính là quy tắc hình bình hành được nâng lên không gian 3 chiều: tổng 3 vectơ cạnh chung một đỉnh bằng vectơ đường chéo xuất phát từ chính đỉnh đó!"
          },

          workedExample: {
            title: "Ví dụ 2: Rút gọn biểu thức vectơ trong hình hộp",
            problem: "Cho hình hộp $ABCD.A'B'C'D'$. Rút gọn biểu thức vectơ: $\\vec{u} = \\vec{AB} + \\vec{B'C'} + \\vec{DD'}$.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>Trong hình hộp $ABCD.A'B'C'D'$, ta có:</p>
              <ul>
                <li>Mặt bên $BCC'B'$ là hình bình hành nên $\\vec{B'C'} = \\vec{BC} = \\vec{AD}$.</li>
                <li>Mặt bên $ADD'A'$ là hình bình hành nên $\\vec{DD'} = \\vec{AA'}$.</li>
              </ul>
              <p>Thay vào biểu thức ta được:</p>
              <p>$$\\vec{u} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$$</p>
              <p>Áp dụng trực tiếp <strong>quy tắc hình hộp</strong>, ta có:</p>
              <p>$$\\vec{u} = \\vec{AC'}$$</p>
            `,
            similarProblem: `
              <p><strong>Đề bài bài tập tương tự:</strong> Cho hình hộp $ABCD.A'B'C'D'$. Rút gọn biểu thức vectơ: $\\vec{v} = \\vec{BA} + \\vec{BC} + \\vec{BB'}$.</p>
              <p><strong>Hướng dẫn:</strong> Áp dụng quy tắc hình hộp xuất phát từ đỉnh $B$, ta có $\\vec{v} = \\vec{BD'}$.</p>
            `
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3. TÍCH CỦA MỘT SỐ VỚI MỘT VECTƠ
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "TÍCH CỦA MỘT SỐ VỚI MỘT VECTƠ",
      subsections: [
        {
          key: "3a",
          title: "Định nghĩa, điều kiện cùng phương và trọng tâm tứ diện",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn phần đóng khung SGK:</div>
              <ul class="sgk-box-list">
                <li>Vectơ $k\\vec{a}$ cùng hướng với $\\vec{a}$ nếu $k > 0$, ngược hướng nếu $k < 0$, độ dài bằng $|k||\\vec{a}|$.</li>
                <li><strong>Điều kiện cùng phương:</strong> $\\vec{a}$ và $\\vec{b}$ cùng phương ($\\vec{b} \\ne \\vec{0}$) $\\Leftrightarrow \\exists k \\in \\mathbb{R}: \\vec{a} = k\\vec{b}$.</li>
                <li><strong>Trọng tâm tứ diện $ABCD$:</strong> Điểm $G$ là trọng tâm tứ diện khi và chỉ khi:
                  <div style="text-align: center; font-size: 1.15rem; font-weight: bold; margin: 8px 0; color: #1e3a8a;">
                    $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$
                  </div>
                </li>
              </ul>
            </div>
          `,
          audioUrl: "assets/audio/b12_7_sec2a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-12-6-ns1",
              triggerRatio: 0.25,
              title: "Tương tác 1: Hướng của tích vectơ với số âm",
              question: "Nếu $k < 0$, vectơ $k\\vec{a}$ sẽ có hướng như thế nào so với $\\vec{a}$?",
              options: [
                "Ngược hướng",
                "Cùng hướng"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Khi nhân vectơ với một số âm ($k < 0$), vectơ mới luôn ngược hướng với vectơ ban đầu.",
              feedbackWrong: "Chưa chính xác! Thử lại để mở khóa bài giảng nhé."
            },
            {
              id: "cp-12-6-ns2",
              triggerRatio: 0.5,
              title: "Tương tác 2: Đẳng thức trọng tâm tứ diện",
              question: "Điểm $G$ là trọng tâm của tứ diện $ABCD$ khi và chỉ khi:",
              options: [
                "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$",
                "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = 4\\vec{0}$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất xuất sắc! Đẳng thức trọng tâm tứ diện chuẩn mực là $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$.",
              feedbackWrong: "Chưa chính xác! Thử lại để mở khóa bài giảng nhé."
            }
          ],

          memoryTip: {
            title: "Mẹo của thầy Sáng:",
            content: "Điểm $G$ là trọng tâm tứ diện thì chia đoạn nối đỉnh với trọng tâm mặt đối diện theo tỉ lệ 3:1 (đỉnh đến $G$ chiếm 3 phần, $G$ đến đáy chiếm 1 phần). Với mọi điểm $M$, luôn có: $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG}$!"
          },

          workedExample: {
            title: "Ví dụ 3: Hệ thức trọng tâm tứ diện với điểm tùy ý",
            problem: "Cho tứ diện $ABCD$ có trọng tâm $G$. Chứng minh rằng với điểm $M$ bất kì trong không gian, ta luôn có: $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG}$.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>Chèn điểm $G$ vào từng vectơ ở vế trái theo quy tắc 3 điểm:</p>
              <p>$$\\vec{MA} = \\vec{MG} + \\vec{GA}$$</p>
              <p>$$\\vec{MB} = \\vec{MG} + \\vec{GB}$$</p>
              <p>$$\\vec{MC} = \\vec{MG} + \\vec{GC}$$</p>
              <p>$$\\vec{MD} = \\vec{MG} + \\vec{GD}$$</p>
              <p>Cộng vế theo vế 4 đẳng thức trên:</p>
              <p>$$\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG} + (\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD})$$</p>
              <p>Vì $G$ là trọng tâm tứ diện $ABCD$ nên $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$.</p>
              <p>Do đó: $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG}$ (điều phải chứng minh).</p>
            `,
            similarProblem: `
              <p><strong>Đề bài bài tập tương tự:</strong> Cho tam giác $ABC$ có trọng tâm $G$. Chứng minh rằng với mọi điểm $M$ trong không gian, ta luôn có $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$.</p>
              <p><strong>Hướng dẫn:</strong> Chèn điểm $G$ vào từng vectơ và áp dụng hệ thức $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.</p>
            `
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4. TÍCH VÔ HƯỚNG CỦA HAI VECTƠ
    // -----------------------------------------------------------------------
    {
      num: "4",
      title: "TÍCH VÔ HƯỚNG CỦA HAI VECTƠ",
      subsections: [
        {
          key: "4a",
          title: "Góc giữa hai vectơ và Công thức tích vô hướng",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn phần đóng khung SGK:</div>
              <ul class="sgk-box-list">
                <li><strong>Tích vô hướng</strong> của hai vectơ $\\vec{a}$ và $\\vec{b}$ là một số, kí hiệu là $\\vec{a} \\cdot \\vec{b}$, xác định bởi:
                  <div style="text-align: center; font-size: 1.15rem; font-weight: bold; margin: 8px 0; color: #1e3a8a;">
                    $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$
                  </div>
                </li>
                <li><strong>Sự vuông góc:</strong> Hai vectơ khác vectơ-không vuông góc với nhau khi và chỉ khi tích vô hướng của chúng bằng 0:
                  <div style="text-align: center; font-weight: bold; margin: 6px 0; color: #b91c1c;">
                    $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$
                  </div>
                </li>
              </ul>
            </div>
          `,
          audioUrl: "assets/audio/b12_7_sec2b.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-12-6-tvh1",
              triggerRatio: 0.25,
              title: "Tương tác 1: Góc giữa hai vectơ cùng hướng",
              question: "Góc giữa hai vectơ cùng hướng bằng bao nhiêu độ?",
              options: [
                "$0^\\circ$",
                "$90^\\circ$",
                "$180^\\circ$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Hai vectơ cùng hướng có góc giữa chúng bằng 0 độ.",
              feedbackWrong: "Chưa chính xác! Thử lại để mở khóa bài giảng nhé."
            },
            {
              id: "cp-12-6-tvh2",
              triggerRatio: 0.5,
              title: "Tương tác 2: Điều kiện vuông góc",
              question: "Hai vectơ khác vectơ-không vuông góc với nhau khi nào?",
              options: [
                "$\\vec{a} \\cdot \\vec{b} = 0$",
                "$\\vec{a} \\cdot \\vec{b} = 1$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$.",
              feedbackWrong: "Chưa chính xác! Thử lại để mở khóa bài giảng nhé."
            }
          ],

          memoryTip: {
            title: "Mẹo của thầy Sáng:",
            content: "Tích vô hướng là một CON SỐ, không phải vectơ! Muốn chứng minh hai đường thẳng vuông góc trong không gian, hãy chứng minh tích vô hướng của hai vectơ chỉ phương bằng 0!"
          },

          workedExample: {
            title: "Ví dụ 4: Tính tích vô hướng trong hình lập phương",
            problem: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Tính tích vô hướng của hai vectơ $\\vec{AC}$ và $\\vec{B'D'}$.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>Trong hình lập phương $ABCD.A'B'C'D'$, mặt đáy trên $A'B'C'D'$ và mặt đáy dưới $ABCD$ là hai hình vuông bằng nhau và song song.</p>
              <p>Do đó: $\\vec{B'D'} = \\vec{BD}$.</p>
              <p>Suy ra: $\\vec{AC} \\cdot \\vec{B'D'} = \\vec{AC} \\cdot \\vec{BD}$.</p>
              <p>Mặt khác, tứ giác $ABCD$ là hình vuông nên hai đường chéo vuông góc với nhau: $AC \\perp BD$.</p>
              <p>Suy ra $(\\vec{AC}, \\vec{BD}) = 90^\\circ \\Rightarrow \\cos(\\vec{AC}, \\vec{BD}) = 0$.</p>
              <p>Do đó: $\\vec{AC} \\cdot \\vec{B'D'} = |\\vec{AC}| \\cdot |\\vec{BD}| \\cdot \\cos 90^\\circ = 0$.</p>
            `,
            similarProblem: `
              <p><strong>Đề bài bài tập tương tự:</strong> Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{B'C'}$.</p>
              <p><strong>Hướng dẫn:</strong> Vì $\\vec{B'C'} = \\vec{BC}$ và $AB \\perp BC$ nên $\\vec{AB} \\cdot \\vec{B'C'} = \\vec{AB} \\cdot \\vec{BC} = 0$.</p>
            `
          }
        }
      ]
    }
  ],

  // =========================================================================
  // 3. CHỐT BÀI HỌC
  // =========================================================================
  realworldWrapup: {
    title: "Chốt bài học: Giải quyết bài toán cần cẩu nâng hàng 3D",
    recap: "Quay trở lại tình huống cần cẩu nâng kiện hàng nặng ở phần Mở đầu: Khi khối hàng đứng yên thăng bằng lơ lửng giữa không trung, tổng hợp lực của 4 sợi cáp căng $\\vec{T_1}, \\vec{T_2}, \\vec{T_3}, \\vec{T_4}$ cùng trọng lực $\\vec{P}$ tác dụng lên kiện hàng phải triệt tiêu lẫn nhau.",
    solution: `
      <p>Theo định luật I Newton, điều kiện để kiện hàng đứng cân bằng trong không gian 3 chiều là:</p>
      <p>$$\\vec{T_1} + \\vec{T_2} + \\vec{T_3} + \\vec{T_4} + \\vec{P} = \\vec{0}$$</p>
      <p>$$\\iff \\vec{T_1} + \\vec{T_2} + \\vec{T_3} + \\vec{T_4} = -\\vec{P}$$</p>
      <p>Nhờ công cụ vectơ trong không gian, ta phân tích từng lực căng thành các thành phần dọc theo 3 trục tọa độ vuông góc (ngang, dọc, cao). Bằng cách giải hệ phương trình vectơ, các kỹ sư tính được chính xác lực căng tối đa trên từng sợi cáp, từ đó lựa chọn loại cáp chịu lực an toàn tuyệt đối cho công trình!</p>
    `,
    audioUrl: "assets/audio/b6_wrapup.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài"
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2025 BỘ GD&ĐT)
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC 3 DẠNG THỨC 2025)",

    // DẠNG 1: 5 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN (DỄ - NHẬN BIẾT)
    part1MultipleChoice: [
      {
        id: "mc-12-6-1",
        prompt: "Trong không gian, hai vectơ có độ dài bằng nhau và cùng hướng thì được gọi là:",
        options: [
          "Hai vectơ đối nhau.",
          "Hai vectơ bằng nhau.",
          "Hai vectơ cùng phương.",
          "Hai vectơ-không."
        ],
        correctIndex: 1,
        solution: "Theo định nghĩa SGK, hai vectơ bằng nhau khi và chỉ khi chúng có cùng độ dài và cùng hướng.",
        similarVariation: {
          prompt: "Trong không gian, hai vectơ có độ dài bằng nhau nhưng ngược hướng nhau thì được gọi là:",
          options: [
            "Hai vectơ đối nhau.",
            "Hai vectơ bằng nhau.",
            "Hai vectơ vuông góc.",
            "Hai vectơ trùng nhau."
          ],
          correctIndex: 0,
          solution: "Theo định nghĩa, hai vectơ cùng độ dài và ngược hướng là hai vectơ đối nhau."
        }
      },
      {
        id: "mc-12-6-2",
        prompt: "Cho hình hộp $ABCD.A'B'C'D'$. Tổng $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng:",
        options: [
          "$\\vec{AC}$",
          "$\\vec{AC'}$",
          "$\\vec{A'C}$",
          "$\\vec{BD'}$"
        ],
        correctIndex: 1,
        solution: "Áp dụng trực tiếp quy tắc hình hộp cho 3 cạnh xuất phát từ đỉnh $A$ ta được đường chéo không gian $\\vec{AC'}$.",
        similarVariation: {
          prompt: "Cho hình hộp $ABCD.A'B'C'D'$. Tổng $\\vec{BA} + \\vec{BC} + \\vec{BB'}$ bằng:",
          options: [
            "$\\vec{BD'}$",
            "$\\vec{BD}$",
            "$\\vec{AC'}$",
            "$\\vec{B'D}$"
          ],
          correctIndex: 0,
          solution: "Áp dụng quy tắc hình hộp cho 3 cạnh xuất phát từ đỉnh $B$, ta được đường chéo $\\vec{BD'}$."
        }
      },
      {
        id: "mc-12-6-3",
        prompt: "Khẳng định nào sau đây <b>sai</b>?",
        options: [
          "$\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$",
          "$\\vec{a} \\cdot \\vec{a} = |\\vec{a}|^2$",
          "$\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0$",
          "$|\\vec{a} + \\vec{b}| = |\\vec{a}| + |\\vec{b}|$"
        ],
        correctIndex: 3,
        solution: "Bất đẳng thức tam giác $|\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|$, dấu bằng chỉ xảy ra khi hai vectơ cùng hướng. Do đó đẳng thức không phải luôn đúng.",
        similarVariation: {
          prompt: "Khẳng định nào sau đây <b>đúng</b> với mọi vectơ $\\vec{a}$ và $\\vec{b}$ khác $\\vec{0}$?",
          options: [
            "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$",
            "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin(\\vec{a}, \\vec{b})$",
            "$\\vec{a} \\cdot \\vec{b} = -\\vec{b} \\cdot \\vec{a}$",
            "$|\\vec{a} - \\vec{b}| = |\\vec{a}| - |\\vec{b}|$"
          ],
          correctIndex: 0,
          solution: "Theo định nghĩa tích vô hướng: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$."
        }
      },
      {
        id: "mc-12-6-4",
        prompt: "Góc giữa hai vectơ cùng hướng (và khác vectơ-không) là:",
        options: [
          "$90^\\circ$",
          "$180^\\circ$",
          "$0^\\circ$",
          "$45^\\circ$"
        ],
        correctIndex: 2,
        solution: "Hai vectơ cùng hướng có góc giữa chúng bằng $0^\\circ$.",
        similarVariation: {
          prompt: "Góc giữa hai vectơ ngược hướng (và khác vectơ-không) là:",
          options: [
            "$0^\\circ$",
            "$90^\\circ$",
            "$180^\\circ$",
            "$360^\\circ$"
          ],
          correctIndex: 2,
          solution: "Hai vectơ ngược hướng có góc giữa chúng bằng $180^\\circ$."
        }
      },
      {
        id: "mc-12-6-5",
        prompt: "Cho tứ diện $ABCD$ có trọng tâm $G$. Đẳng thức nào sau đây đúng?",
        options: [
          "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$",
          "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = 4\\vec{0}$",
          "$\\vec{AB} + \\vec{AC} + \\vec{AD} = \\vec{AG}$",
          "$\\vec{GA} + \\vec{GB} = \\vec{GC} + \\vec{GD}$"
        ],
        correctIndex: 0,
        solution: "Theo tính chất trọng tâm tứ diện, $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$.",
        similarVariation: {
          prompt: "Cho tam giác $ABC$ có trọng tâm $G$. Đẳng thức nào sau đây đúng?",
          options: [
            "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$",
            "$\\vec{GA} + \\vec{GB} = \\vec{GC}$",
            "$\\vec{AB} + \\vec{AC} = \\vec{AG}$",
            "$\\vec{GA} + \\vec{GB} + \\vec{GC} = 3\\vec{0}$"
          ],
          correctIndex: 0,
          solution: "Theo tính chất trọng tâm tam giác, $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$."
        }
      }
    ],

    // DẠNG 2: 3 CÂU TRẮC NGHIỆM ĐÚNG/SAI (THÔNG HIỂU, 4 Ý A-B-C-D)
    part2TrueFalse: [
      {
        id: "tf-12-6-1",
        intro: "Cho hình lập phương $ABCD.A'B'C'D'$. Xét tính đúng / sai của các mệnh đề sau:",
        items: [
          {
            key: "a",
            statement: "$\\vec{AB} = \\vec{D'C'}$",
            isCorrect: true,
            explain: "Đúng, vì tứ giác $ABC'D'$ có $AB // D'C'$ và $AB = D'C'$ nên $\\vec{AB} = \\vec{D'C'}$."
          },
          {
            key: "b",
            statement: "$\\vec{AC} \\cdot \\vec{B'D'} = 0$",
            isCorrect: true,
            explain: "Đúng, vì $\\vec{B'D'} = \\vec{BD}$ mà $AC \\perp BD$ (hai đường chéo hình vuông) nên tích vô hướng bằng 0."
          },
          {
            key: "c",
            statement: "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$",
            isCorrect: true,
            explain: "Đúng, đây là quy tắc hình hộp chuẩn mực."
          },
          {
            key: "d",
            statement: "Góc giữa hai vectơ $\\vec{A'C'}$ và $\\vec{BD}$ bằng $90^\\circ$",
            isCorrect: true,
            explain: "Đúng, vì $\\vec{A'C'} = \\vec{AC}$ mà $AC \\perp BD$ nên góc giữa chúng bằng $90^\\circ$."
          }
        ]
      },
      {
        id: "tf-12-6-2",
        intro: "Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Xét tính đúng / sai của các mệnh đề sau:",
        items: [
          {
            key: "a",
            statement: "Hai đường thẳng $AB$ và $CD$ là hai đường thẳng chéo nhau.",
            isCorrect: true,
            explain: "Đúng, hai cạnh đối diện của tứ diện luôn chéo nhau."
          },
          {
            key: "b",
            statement: "$|\\vec{AB} - \\vec{AC}| = a$",
            isCorrect: true,
            explain: "Đúng, vì $\\vec{AB} - \\vec{AC} = \\vec{CB}$ và độ dài đoạn $CB = a$."
          },
          {
            key: "c",
            statement: "Tích vô hướng $\\vec{AB} \\cdot \\vec{CD} = 0$",
            isCorrect: true,
            explain: "Đúng, trong tứ diện đều hai cạnh đối diện vuông góc với nhau."
          },
          {
            key: "d",
            statement: "Nếu $G$ là trọng tâm tứ diện thì $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$.",
            isCorrect: true,
            explain: "Đúng theo định nghĩa trọng tâm tứ diện."
          }
        ]
      },
      {
        id: "tf-12-6-3",
        intro: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Xét tính đúng / sai của các mệnh đề sau:",
        items: [
          {
            key: "a",
            statement: "Độ dài $|\\vec{AC}| = 5$",
            isCorrect: true,
            explain: "Đúng, $AC = \\sqrt{AB^2 + AD^2} = \\sqrt{3^2 + 4^2} = 5$."
          },
          {
            key: "b",
            statement: "Độ dài đường chéo $|\\vec{AC'}| = 5\\sqrt{2}$",
            isCorrect: true,
            explain: "Đúng, $AC' = \\sqrt{AB^2 + AD^2 + AA'^2} = \\sqrt{3^2 + 4^2 + 5^2} = \\sqrt{50} = 5\\sqrt{2}$."
          },
          {
            key: "c",
            statement: "$\\vec{AB} \\cdot \\vec{AA'} = 0$",
            isCorrect: true,
            explain: "Đúng, vì $AB \\perp AA'$ trong hình hộp chữ nhật."
          },
          {
            key: "d",
            statement: "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{BD'}$",
            isCorrect: false,
            explain: "Sai, theo quy tắc hình hộp $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$ chứ không phải $\\vec{BD'}$."
          }
        ]
      }
    ],

    // DẠNG 3: 2 CÂU TRẢ LỜI NGẮN (VẬN DỤNG TOÁN THỰC TẾ)
    part3ShortAnswer: [
      {
        id: "sa-12-6-1",
        prompt: "Một chiếc máy bay bay theo hướng Bắc với vận tốc $600\\text{ km/h}$. Gió thổi từ hướng Tây sang Đông với vận tốc $80\\text{ km/h}$. Tính độ lớn vận tốc thực tế của máy bay so với mặt đất (Làm tròn đến hàng đơn vị, đơn vị: km/h).",
        correctAnswer: "605",
        solution: "Gọi $\\vec{v_1}$ là vận tốc máy bay hướng Bắc, $\\vec{v_2}$ là vận tốc gió hướng Đông. Vận tốc thực tế của máy bay so với mặt đất là $\\vec{v} = \\vec{v_1} + \\vec{v_2}$. Do hướng Bắc vuông góc với hướng Đông nên $\\vec{v_1} \\perp \\vec{v_2}$. Áp dụng định lí Pythagore: $|\\vec{v}| = \\sqrt{600^2 + 80^2} = \\sqrt{360000 + 6400} = \\sqrt{366400} \\approx 605,31\\text{ km/h}$. Làm tròn đến hàng đơn vị: 605.",
        similarVariation: {
          prompt: "Một chiếc máy bay bay theo hướng Bắc với vận tốc $700\\text{ km/h}$. Gió thổi từ hướng Tây sang Đông với vận tốc $60\\text{ km/h}$. Tính độ lớn vận tốc thực tế của máy bay so với mặt đất (Làm tròn đến hàng đơn vị, đơn vị: km/h).",
          correctAnswer: "703",
          solution: "Vận tốc thực tế $|\\vec{v}| = \\sqrt{700^2 + 60^2} = \\sqrt{490000 + 3600} = \\sqrt{493600} \\approx 702,57\\text{ km/h}$. Làm tròn hàng đơn vị: 703."
        }
      },
      {
        id: "sa-12-6-2",
        prompt: "Cho hình chóp tứ giác đều $S.ABCD$ có tất cả các cạnh đều bằng $a$. Tính tích vô hướng $\\vec{SA} \\cdot \\vec{SC}$ theo $a^2$. (Nhập hệ số, ví dụ 0 hoặc 0.5 hoặc -0.5).",
        correctAnswer: "0",
        solution: "Tam giác $SAC$ có $SA = SC = a$. Đáy $ABCD$ là hình vuông cạnh $a$ nên đường chéo $AC = a\\sqrt{2}$. Ta có $SA^2 + SC^2 = a^2 + a^2 = 2a^2 = AC^2$. Suy ra $\\Delta SAC$ vuông tại $S$ theo định lí Pythagore đảo. Do đó $\\vec{SA} \\perp \\vec{SC} \\Rightarrow \\vec{SA} \\cdot \\vec{SC} = 0$. Hệ số là 0.",
        similarVariation: {
          prompt: "Cho hình chóp tứ giác đều $S.ABCD$ có đáy là hình vuông tâm $O$. Biết $\\vec{SO}$ là đường cao của hình chóp. Tính tích vô hướng $\\vec{SO} \\cdot \\vec{AC}$. (Nhập số).",
          correctAnswer: "0",
          solution: "Vì $SO \\perp (ABCD)$ nên $SO \\perp AC$. Do đó $\\vec{SO} \\cdot \\vec{AC} = 0$."
        }
      }
    ]
  }
};
