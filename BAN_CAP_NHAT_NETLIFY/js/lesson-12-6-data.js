/**
 * BÀI HỌC SỐ: BÀI 6. VECTƠ TRONG KHÔNG GIAN (TOÁN 12 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - Tích hợp toàn bộ Audio Voice AI  (vi-VN-NamMinhNeural) chuẩn sư phạm
 * - Tích hợp câu hỏi tương tác POI cả trực tiếp trên màn hình và popup tự động khi nghe audio
 * - Đồ họa TikZ SVG 3D siêu nét, chuẩn ký hiệu toán học
 * - Bài tập trắc nghiệm 3 dạng thức thi mới 2025 (chuẩn 100% không lỗi undefined)
 */

window.LESSON_12_C2_B6_DATA = {
  id: "12-c2-b6",
  number: "Bài 6",
  title: "Vectơ trong không gian",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioScript: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioUrl: "assets/audio/b6_welcome.mp3",
    buttonLabel: "Nhấn nghe Lời chào",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng "
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT
  // =========================================================================
  learningGoals: [
    "Nhận biết: Vectơ trong không gian, sự cùng phương, cùng hướng và góc giữa hai vectơ.",
    "Thực hành: Các phép toán vectơ (Tổng, hiệu, tích với một số, tích vô hướng)."
  ],
  goalsAudioScript: "Sau bài học này, các em cần đạt được hai mục tiêu chính: Thứ nhất, nhận biết được vectơ trong không gian. Thứ hai, thực hiện thành thạo các phép toán vectơ bao gồm: cộng, trừ, nhân vectơ với một số và tính tích vô hướng của hai vectơ trong không gian.",
  goalsAudioUrl: "assets/audio/b6_goals.mp3",
  goalsButtonLabel: "Nghe thầy Sáng AI đọc",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================
  // 1. Bài toán dẫn nhập
  hook: {
    title: "1. Bài toán dẫn nhập",
    story: "Trong thực tế, khi một chiếc cần cẩu nâng một kiện hàng nặng, lực căng của các sợi dây cáp không chỉ nằm trên mặt đất mà tỏa ra trong không gian ba chiều. Làm sao để biểu diễn chính xác hướng và độ lớn của các lực lơ lửng này? Khái niệm vectơ các em đã học ở lớp 10 sẽ được mở rộng ra không gian như thế nào? Cùng thầy vào phần 1 nhé.",
    audioScript: "Trong thực tế, khi một chiếc cần cẩu nâng một kiện hàng nặng, lực căng của các sợi dây cáp không chỉ nằm trên mặt đất mà tỏa ra trong không gian ba chiều. Làm sao để biểu diễn chính xác hướng và độ lớn của các lực lơ lửng này? Khái niệm vectơ các em đã học ở lớp 10 sẽ được mở rộng ra không gian như thế nào? Cùng thầy vào phần 1 nhé.",
    audioUrl: "assets/audio/b6_hook.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng ",
    illustrationCaption: "Đồ họa mô phỏng: Cần cẩu nâng kiện hàng và các lực căng dây cáp",
    illustrationSvg: `
      <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
        <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
          <i class="fa-solid fa-compass-drafting"></i> [Đồ họa mô phỏng - TikZ]: Hiển thị hình ảnh kiện hàng và các lực căng dây cáp
        </div>
        <div style="text-align: center;">
          <svg width="460" height="260" viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
            <defs>
              <marker id="hook-f-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
              </marker>
              <marker id="hook-p-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
              </marker>
            </defs>

            <!-- Khung đỉnh cẩu nét đứt -->
            <line x1="160" y1="120" x2="230" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
            <line x1="300" y1="120" x2="230" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
            <line x1="230" y1="40" x2="230" y2="20" stroke="#64748b" stroke-width="2.5"/>

            <!-- Khối kiện hàng hình hộp ở dưới (3D perspective) -->
            <polygon points="160,120 280,120 320,145 200,145" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
            <polygon points="160,120 200,145 200,185 160,160" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
            <polygon points="200,145 320,145 320,185 200,185" fill="#fcd34d" stroke="#b45309" stroke-width="1.5"/>

            <!-- 4 dây cáp màu đỏ kéo từ 4 góc về móc cẩu S (230, 40) kèm mũi tên -->
            <line x1="160" y1="120" x2="210" y2="63" stroke="#dc2626" stroke-width="2.5" marker-end="url(#hook-f-arr)"/>
            <line x1="200" y1="145" x2="223" y2="66" stroke="#dc2626" stroke-width="2.5" marker-end="url(#hook-f-arr)"/>
            <line x1="320" y1="145" x2="248" y2="61" stroke="#dc2626" stroke-width="2.5" marker-end="url(#hook-f-arr)"/>
            <line x1="280" y1="120" x2="242" y2="60" stroke="#dc2626" stroke-width="2.5" marker-end="url(#hook-f-arr)"/>

            <!-- Ký hiệu 4 vectơ lực F1, F2, F3, F4 chuẩn TikZ -->
            <g transform="translate(182, 82)">
              <line x1="0" y1="-10" x2="16" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
              <polyline points="12,-12 16,-10 12,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
              <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#dc2626">F<tspan font-size="10" dy="3">1</tspan></text>
            </g>

            <g transform="translate(236, 105)">
              <line x1="0" y1="-10" x2="16" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
              <polyline points="12,-12 16,-10 12,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
              <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#dc2626">F<tspan font-size="10" dy="3">2</tspan></text>
            </g>

            <g transform="translate(288, 86)">
              <line x1="0" y1="-10" x2="16" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
              <polyline points="12,-12 16,-10 12,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
              <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#dc2626">F<tspan font-size="10" dy="3">3</tspan></text>
            </g>

            <g transform="translate(216, 50)">
              <line x1="0" y1="-10" x2="16" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
              <polyline points="12,-12 16,-10 12,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
              <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#dc2626">F<tspan font-size="10" dy="3">4</tspan></text>
            </g>

            <!-- Trọng lực P thẳng đứng xuống dưới từ tâm kiện hàng -->
            <line x1="235" y1="145" x2="235" y2="225" stroke="#2563eb" stroke-width="2.5" marker-end="url(#hook-p-arr)"/>
            <g transform="translate(205, 246)">
              <line x1="0" y1="-10" x2="15" y2="-10" stroke="#2563eb" stroke-width="1.2"/>
              <polyline points="11,-12 15,-10 11,-8" fill="none" stroke="#2563eb" stroke-width="1.2"/>
              <text x="0" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#2563eb">P <tspan font-style="normal" font-size="13">(Trọng lực)</tspan></text>
            </g>
          </svg>
        </div>
      </div>
    `,
    question: "Làm sao để biểu diễn chính xác hướng và độ lớn của các lực lơ lửng này để tính toán điều kiện cân bằng trong không gian?"
  },

  // 2. Các mục lý thuyết
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1. VECTƠ TRONG KHÔNG GIAN
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "Vectơ trong không gian",
      audioScript: "Vectơ trong không gian hoàn toàn giống với vectơ trong mặt phẳng, nó là một đoạn thẳng có hướng. Khi hai vectơ có cùng hướng và cùng độ dài, ta nói chúng bằng nhau.",
      audioUrl: "assets/audio/b6_sec1.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-12-6-sec1-1",
          time: 15,
          title: "Giây 15: Kiểm tra khái niệm",
          question: "Điểm đầu và điểm cuối của vectơ $\\vec{AB}$ lần lượt là?",
          options: [
            "Điểm A và Điểm B",
            "Điểm B và Điểm A"
          ],
          correctIndex: 0,
          hint: "Vectơ $\\vec{AB}$ có gốc tại điểm thứ nhất và ngọn tại điểm thứ hai.",
          explain: "Chính xác! Điểm đầu là $A$ và điểm cuối là $B$."
        },
        {
          id: "poi-12-6-sec1-2",
          time: 35,
          title: "Giây 35: Điều kiện cùng phương",
          question: "Hai vectơ cùng phương khi giá của chúng...",
          options: [
            "Cắt nhau",
            "Song song hoặc trùng nhau"
          ],
          correctIndex: 1,
          hint: "Hãy nhớ lại định nghĩa về giá của hai vectơ cùng phương trong hình học.",
          explain: "Chính xác! Hai vectơ cùng phương khi giá của chúng song song hoặc trùng nhau."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Định nghĩa vectơ, độ dài và sự cùng phương",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Nội dung hiển thị - Khung bài học]:</div>
              <ul class="sgk-box-list">
                <li><strong>Vectơ trong không gian</strong> là một đoạn thẳng có hướng. Độ dài kí hiệu là $|\\vec{AB}|$.</li>
                <li><strong>Hai vectơ cùng phương</strong> nếu giá của chúng song song hoặc trùng nhau.</li>
                <li>Hai vectơ $\\vec{a}$ và $\\vec{b}$ <strong>bằng nhau</strong> ($\\vec{a} = \\vec{b}$) nếu chúng cùng hướng và cùng độ dài.</li>
              </ul>
            </div>

            <!-- TikZ SVG: Sự cùng phương, cùng hướng  -->
            <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
              <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
                <i class="fa-solid fa-arrows-split-up-and-left"></i> [Đồ họa TikZ - Sự cùng phương, cùng hướng]:
              </div>
              <div style="text-align: center;">
                <svg width="460" height="170" viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="arr-blue-dir" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
                    </marker>
                    <marker id="arr-red-dir" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                    </marker>
                  </defs>

                  <!-- BÊN TRÁI: CÙNG PHƯƠNG, CÙNG HƯỚNG (MÀU XANH DƯƠNG) -->
                  <line x1="50" y1="65" x2="160" y2="25" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue-dir)"/>
                  <g transform="translate(100, 32)">
                    <line x1="0" y1="-10" x2="14" y2="-10" stroke="#2563eb" stroke-width="1.2"/>
                    <polyline points="10,-12 14,-10 10,-8" fill="none" stroke="#2563eb" stroke-width="1.2"/>
                    <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#2563eb">a</text>
                  </g>

                  <line x1="50" y1="120" x2="180" y2="75" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue-dir)"/>
                  <g transform="translate(120, 87)">
                    <line x1="0" y1="-10" x2="14" y2="-10" stroke="#2563eb" stroke-width="1.2"/>
                    <polyline points="10,-12 14,-10 10,-8" fill="none" stroke="#2563eb" stroke-width="1.2"/>
                    <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#2563eb">b</text>
                  </g>
                  <text x="110" y="150" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">Cùng phương, cùng hướng</text>

                  <!-- ĐƯỜNG PHÂN CÁCH NHẸ -->
                  <line x1="230" y1="20" x2="230" y2="150" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="3,3"/>

                  <!-- BÊN PHẢI: CÙNG PHƯƠNG, NGƯỢC HƯỚNG (MÀU ĐỎ) -->
                  <line x1="270" y1="65" x2="380" y2="25" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red-dir)"/>
                  <g transform="translate(320, 32)">
                    <line x1="0" y1="-10" x2="14" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
                    <polyline points="10,-12 14,-10 10,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
                    <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#dc2626">c</text>
                  </g>

                  <line x1="400" y1="75" x2="270" y2="120" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red-dir)"/>
                  <g transform="translate(340, 115)">
                    <line x1="0" y1="-10" x2="14" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
                    <polyline points="10,-12 14,-10 10,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
                    <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#dc2626">d</text>
                  </g>
                  <text x="345" y="150" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">Cùng phương, ngược hướng</text>
                </svg>
              </div>
            </div>
          `,
          memoryTip: {
            title: "Mẹo nhớ:",
            content: "“Đã nói đến vectơ là nói đến 2 yếu tố: <strong>HƯỚNG và ĐỘ DÀI</strong>. Chỉ cần so sánh 2 yếu tố này để biết chúng có bằng nhau hay không, bất chấp chúng nằm lơ lửng ở đâu trong không gian.”"
          },
          workedExample: {
            title: "[Ví dụ tự luận] ",
            problem: "Cho tứ diện $ABCD$. Hãy chỉ ra 3 vectơ có điểm đầu là $A$ và điểm cuối là các đỉnh còn lại. Các vectơ này có cùng nằm trong một mặt phẳng không?",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>Các vectơ đó là: $\\vec{AB}, \\vec{AC}, \\vec{AD}$.</p>
              <p>Ba vectơ này không cùng nằm trong một mặt phẳng vì $ABCD$ là tứ diện.</p>
            `,
            similarProblem: `
              <p><strong>Bài tập tương tự:</strong> Cho hình chóp tam giác $S.ABC$. Hãy chỉ ra 3 vectơ có điểm đầu là đỉnh $S$ và điểm cuối là các đỉnh của tam giác đáy. Ba vectơ này có đồng phẳng không?</p>
              <p><strong>Hướng dẫn:</strong> Ba vectơ đó là $\\vec{SA}, \\vec{SB}, \\vec{SC}$. Chúng không đồng phẳng vì 4 điểm $S, A, B, C$ tạo thành hình chóp không cùng thuộc một mặt phẳng.</p>
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
      title: "Tổng và hiệu của hai vectơ",
      audioScript: "Quy tắc 3 điểm và quy tắc hình bình hành vẫn đúng trong không gian. Nhưng thầy muốn nhấn mạnh Quy tắc hình hộp. Cho hình hộp ABCD.A'B'C'D', vectơ AB cộng vectơ AD cộng vectơ AA' bằng vectơ AC'.",
      audioUrl: "assets/audio/b6_sec2.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-12-6-sec2-1",
          time: 25,
          title: "Giây 25: Quy tắc 3 điểm",
          question: "Theo quy tắc 3 điểm, $\\vec{AB} + \\vec{BC}$ bằng?",
          options: [
            "$\\vec{AC}$",
            "$\\vec{CA}$"
          ],
          correctIndex: 0,
          hint: "Quy tắc xen điểm: điểm cuối của vectơ thứ nhất trùng với điểm đầu của vectơ thứ hai.",
          explain: "Chính xác! $\\vec{AB} + \\vec{BC} = \\vec{AC}$."
        },
        {
          id: "poi-12-6-sec2-2",
          time: 50,
          title: "Giây 50: Vectơ đối",
          question: "Vectơ đối của $\\vec{AB}$ là vectơ nào?",
          options: [
            "$\\vec{BA}$",
            "$\\vec{0}$"
          ],
          correctIndex: 0,
          hint: "Vectơ đối cùng độ dài nhưng ngược hướng, đổi ngược điểm đầu và điểm cuối.",
          explain: "Chính xác! Vectơ đối của $\\vec{AB}$ là $-\\vec{AB} = \\vec{BA}$."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Quy tắc ba điểm, hình bình hành và Quy tắc hình hộp",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Nội dung hiển thị - Khung bài học]:</div>
              <ul class="sgk-box-list">
                <li><strong>Quy tắc ba điểm:</strong> Với 3 điểm $A, B, C$ bất kì: $\\vec{AB} + \\vec{BC} = \\vec{AC}$.</li>
                <li><strong>Quy tắc hình bình hành:</strong> Nếu $ABCD$ là hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.</li>
                <li><strong>Quy tắc hình hộp:</strong> Cho hình hộp $ABCD.A'B'C'D'$. Ta có: 
                  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; margin: 8px 0; color: #1e3a8a;">
                    $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$
                  </div>
                </li>
                <li><strong>Hiệu hai vectơ:</strong> $\\vec{OB} - \\vec{OA} = \\vec{AB}$.</li>
              </ul>
            </div>

            <!-- TikZ SVG: Quy tắc hình hộp  -->
            <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
              <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
                <i class="fa-solid fa-cube"></i> [Đồ họa TikZ - Quy tắc hình hộp]:
              </div>
              <div style="text-align: center;">
                <svg width="440" height="250" viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <defs>
                    <marker id="box-arr-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
                    </marker>
                    <marker id="box-arr-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                    </marker>
                  </defs>

                  <!-- Cạnh khuất nét đứt -->
                  <line x1="100" y1="180" x2="160" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                  <line x1="160" y1="120" x2="320" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                  <line x1="160" y1="120" x2="160" y2="30" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

                  <!-- Cạnh nét liền -->
                  <line x1="100" y1="180" x2="260" y2="180" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="260" y1="180" x2="320" y2="120" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="100" y1="90" x2="260" y2="90" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="260" y1="90" x2="320" y2="30" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="320" y1="30" x2="160" y2="30" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="160" y1="30" x2="100" y2="90" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="100" y1="180" x2="100" y2="90" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="260" y1="180" x2="260" y2="90" stroke="#64748b" stroke-width="1.5"/>
                  <line x1="320" y1="120" x2="320" y2="30" stroke="#64748b" stroke-width="1.5"/>

                  <!-- Ba vectơ thành phần từ đỉnh A -->
                  <line x1="100" y1="180" x2="252" y2="180" stroke="#2563eb" stroke-width="2.5" marker-end="url(#box-arr-blue)"/>
                  <line x1="100" y1="180" x2="154" y2="126" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#box-arr-blue)"/>
                  <line x1="100" y1="180" x2="100" y2="98" stroke="#2563eb" stroke-width="2.5" marker-end="url(#box-arr-blue)"/>

                  <!-- Đường chéo không gian AC' -->
                  <line x1="100" y1="180" x2="314" y2="36" stroke="#dc2626" stroke-width="3" marker-end="url(#box-arr-red)"/>

                  <!-- Nhãn các vectơ -->
                  <g transform="translate(165, 202)">
                    <line x1="0" y1="-10" x2="20" y2="-10" stroke="#2563eb" stroke-width="1.2"/>
                    <polyline points="16,-12 20,-10 16,-8" fill="none" stroke="#2563eb" stroke-width="1.2"/>
                    <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#2563eb">AB</text>
                  </g>

                  <g transform="translate(105, 148)">
                    <line x1="0" y1="-10" x2="20" y2="-10" stroke="#2563eb" stroke-width="1.2"/>
                    <polyline points="16,-12 20,-10 16,-8" fill="none" stroke="#2563eb" stroke-width="1.2"/>
                    <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#2563eb">AD</text>
                  </g>

                  <g transform="translate(68, 142)">
                    <line x1="0" y1="-10" x2="24" y2="-10" stroke="#2563eb" stroke-width="1.2"/>
                    <polyline points="20,-12 24,-10 20,-8" fill="none" stroke="#2563eb" stroke-width="1.2"/>
                    <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#2563eb">AA'</text>
                  </g>

                  <g transform="translate(225, 110)">
                    <line x1="0" y1="-10" x2="24" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
                    <polyline points="20,-12 24,-10 20,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
                    <text x="0" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#dc2626">AC'</text>
                  </g>

                  <text x="88" y="195" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">A</text>
                  <text x="268" y="195" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">B</text>
                  <text x="328" y="125" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">C</text>
                  <text x="145" y="115" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">D</text>
                  <text x="82" y="86" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">A'</text>
                  <text x="326" y="24" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">C'</text>
                </svg>
              </div>
            </div>
          `,
          memoryTip: {
            title: "Mẹo nhớ:",
            content: "Quy tắc hình hộp: Ba vectơ cạnh cùng xuất phát từ một đỉnh cộng lại sẽ bằng vectơ đường chéo xuất phát từ đỉnh đó: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$."
          },
          workedExample: {
            title: "Ví dụ 2: Áp dụng quy tắc hình hộp",
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
              <p>Áp dụng trực tiếp <strong>quy tắc hình hộp</strong>, ta có: $\\vec{u} = \\vec{AC'}$.</p>
            `,
            similarProblem: `
              <p><strong>Bài tập tương tự:</strong> Cho hình hộp $ABCD.A'B'C'D'$. Rút gọn biểu thức vectơ $\\vec{v} = \\vec{BA} + \\vec{BC} + \\vec{BB'}$.</p>
              <p><strong>Hướng dẫn:</strong> Áp dụng quy tắc hình hộp cho ba vectơ cạnh cùng xuất phát từ đỉnh $B$, ta được $\\vec{v} = \\vec{BD'}$.</p>
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
      title: "Tích của một số với một vectơ",
      audioScript: "Khi nhân một số thực k với vectơ a, nó sẽ làm vectơ đó dài ra hoặc ngắn đi. Vectơ k a cùng hướng vectơ a nếu k dương, ngược hướng nếu k âm. Đặc biệt, nếu G là trọng tâm tứ diện ABCD thì vectơ GA cộng vectơ GB cộng vectơ GC cộng vectơ GD bằng vectơ không.",
      audioUrl: "assets/audio/b6_sec3.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-12-6-sec3-1",
          time: 20,
          title: "Giây 20: Hướng của tích vectơ với số k",
          question: "Nếu $k < 0$, vectơ $k\\vec{a}$ sẽ có hướng như thế nào so với $\\vec{a}$?",
          options: [
            "Cùng hướng",
            "Ngược hướng"
          ],
          correctIndex: 1,
          hint: "Khi hệ số $k$ mang dấu âm, vectơ đảo chiều 180 độ.",
          explain: "Chính xác! Khi $k < 0$, vectơ $k\\vec{a}$ luôn ngược hướng với $\\vec{a}$."
        },
        {
          id: "poi-12-6-sec3-2",
          time: 45,
          title: "Giây 45: Trọng tâm tứ diện",
          question: "Cho $G$ là trọng tâm tứ diện $ABCD$. Khẳng định nào đúng?",
          options: [
            "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$",
            "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{GD}$"
          ],
          correctIndex: 0,
          hint: "Tổng các vectơ từ trọng tâm tứ diện tới 4 đỉnh triệt tiêu nhau.",
          explain: "Chính xác! $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Tích của số với vectơ và hệ thức trọng tâm",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Nội dung hiển thị - Khung bài học]:</div>
              <ul class="sgk-box-list">
                <li>Tích $k\\vec{a}$ cùng hướng $\\vec{a}$ nếu $k > 0$, ngược hướng nếu $k < 0$, và có độ dài bằng $|k||\\vec{a}|$.</li>
                <li><strong>Trọng tâm tứ diện $ABCD$:</strong> Điểm $G$ là trọng tâm tứ diện khi và chỉ khi:
                  <div style="text-align: center; font-size: 1.2rem; font-weight: bold; margin: 8px 0; color: #1e3a8a;">
                    $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$
                  </div>
                </li>
              </ul>
            </div>
          `,
          memoryTip: {
            title: "Mẹo nhớ:",
            content: "Với tứ diện $ABCD$ có trọng tâm $G$, với mọi điểm $M$ bất kì trong không gian luôn có: $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG}$."
          },
          workedExample: {
            title: "Ví dụ 3: Hệ thức trọng tâm tứ diện với điểm tùy ý",
            problem: "Cho tứ diện $ABCD$ có trọng tâm $G$. Chứng minh rằng với mọi điểm $M$ bất kì trong không gian, ta luôn có: $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG}$.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>Chèn điểm $G$ vào từng vectơ ở vế trái theo quy tắc 3 điểm:</p>
              <p>$$\\vec{MA} = \\vec{MG} + \\vec{GA}, \\quad \\vec{MB} = \\vec{MG} + \\vec{GB}$$</p>
              <p>$$\\vec{MC} = \\vec{MG} + \\vec{GC}, \\quad \\vec{MD} = \\vec{MG} + \\vec{GD}$$</p>
              <p>Cộng từng vế 4 đẳng thức trên:</p>
              <p>$$\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG} + (\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD})$$</p>
              <p>Vì $G$ là trọng tâm tứ diện $ABCD$ nên $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$.</p>
              <p>Do đó: $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG}$ (điều phải chứng minh).</p>
            `,
            similarProblem: `
              <p><strong>Bài tập tương tự:</strong> Cho tam giác $ABC$ có trọng tâm $G$. Chứng minh rằng với mọi điểm $M$ trong không gian, ta luôn có $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$.</p>
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
      title: "Tích vô hướng của hai vectơ",
      audioScript: "Phép toán cuối cùng là tích vô hướng, sinh ra một con số thực. Tích vô hướng của vectơ a và vectơ b bằng độ dài vectơ a nhân độ dài vectơ b nhân cosin góc giữa chúng. Hai vectơ khác không vuông góc với nhau khi và chỉ khi tích vô hướng của chúng bằng không.",
      audioUrl: "assets/audio/b6_sec4.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-12-6-sec4-1",
          time: 25,
          title: "Giây 25: Góc giữa hai vectơ cùng hướng",
          question: "Góc giữa hai vectơ cùng hướng bằng bao nhiêu độ?",
          options: [
            "$0^\\circ$",
            "$90^\\circ$",
            "$180^\\circ$"
          ],
          correctIndex: 0,
          hint: "Hai vectơ chỉ cùng một phía nên góc tạo bởi chúng không mở ra.",
          explain: "Chính xác! Góc giữa hai vectơ cùng hướng bằng $0^\\circ$."
        },
        {
          id: "poi-12-6-sec4-2",
          time: 50,
          title: "Giây 50: Điều kiện vuông góc",
          question: "Hai vectơ $\\vec{a}, \\vec{b}$ khác $\\vec{0}$ vuông góc với nhau khi nào?",
          options: [
            "$\\vec{a} \\cdot \\vec{b} = 1$",
            "$\\vec{a} \\cdot \\vec{b} = 0$"
          ],
          correctIndex: 1,
          hint: "Vì $\\cos 90^\\circ = 0$ nên tích vô hướng phải bằng 0.",
          explain: "Chính xác! $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$."
        }
      ],
      subsections: [
        {
          key: "4a",
          title: "Công thức tích vô hướng và sự vuông góc",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Nội dung hiển thị - Khung bài học]:</div>
              <ul class="sgk-box-list">
                <li><strong>Tích vô hướng:</strong> $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$</li>
                <li><strong>Chú ý sự vuông góc:</strong> $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$.</li>
              </ul>
            </div>
          `,
          memoryTip: {
            title: "Mẹo nhớ:",
            content: "Tích vô hướng là một CON SỐ thực, không phải vectơ! Để chứng minh hai đường thẳng vuông góc trong không gian, ta chỉ cần chứng minh tích vô hướng của hai vectơ chỉ phương bằng 0."
          },
          workedExample: {
            title: "Ví dụ 4: Tính tích vô hướng trong hình lập phương",
            problem: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Tính tích vô hướng của hai vectơ $\\vec{AC}$ và $\\vec{B'D'}$.",
            solution: `
              <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
              <p>Trong hình lập phương $ABCD.A'B'C'D'$, mặt đáy trên $A'B'C'D'$ song song và bằng mặt đáy dưới $ABCD$.</p>
              <p>Do đó: $\\vec{B'D'} = \\vec{BD}$.</p>
              <p>Suy ra: $\\vec{AC} \\cdot \\vec{B'D'} = \\vec{AC} \\cdot \\vec{BD}$.</p>
              <p>Mặt khác, tứ giác $ABCD$ là hình vuông nên hai đường chéo vuông góc nhau: $AC \\perp BD$.</p>
              <p>Do đó: $\\vec{AC} \\cdot \\vec{BD} = 0$. Vậy $\\vec{AC} \\cdot \\vec{B'D'} = 0$.</p>
            `,
            similarProblem: `
              <p><strong>Bài tập tương tự:</strong> Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{B'C'}$.</p>
              <p><strong>Hướng dẫn:</strong> Vì $\\vec{B'C'} = \\vec{BC}$ và $AB \\perp BC$ nên $\\vec{AB} \\cdot \\vec{B'C'} = \\vec{AB} \\cdot \\vec{BC} = 0$.</p>
            `
          }
        }
      ]
    }
  ],

  // =========================================================================
  // PHẦN IV. CHỐT BÀI HỌC
  // =========================================================================
  realworldWrapup: {
    title: "PHẦN IV. CHỐT BÀI HỌC",
    recap: "Trở lại Bài toán dẫn nhập, để kiện hàng cân bằng, tổng các lực kéo từ dây cáp và trọng lực phải triệt tiêu nhau. Hệ thống cần cẩu phải thỏa mãn phương trình vectơ:",
    formula: "\\vec{F_1} + \\vec{F_2} + \\vec{F_3} + \\vec{F_4} + \\vec{P} = \\vec{0}",
    solution: `
      <p>Trở lại Bài toán dẫn nhập, để kiện hàng cân bằng, tổng các lực kéo từ dây cáp và trọng lực phải triệt tiêu nhau. Hệ thống cần cẩu phải thỏa mãn phương trình vectơ:</p>
      <div style="text-align: center; font-size: 1.3rem; font-weight: bold; margin: 12px 0; color: #1e3a8a;">
        $$\\vec{F_1} + \\vec{F_2} + \\vec{F_3} + \\vec{F_4} + \\vec{P} = \\vec{0}$$
      </div>
      <p>Nhờ tính toán các góc và tích vô hướng, máy tính phân bổ lực kéo đồng đều để cáp không đứt.</p>
    `,
    audioScript: "Trở lại Bài toán dẫn nhập, để kiện hàng cân bằng, tổng các lực kéo từ dây cáp và trọng lực phải triệt tiêu nhau. Hệ thống cần cẩu phải thỏa mãn phương trình vectơ: F1 cộng F2 cộng F3 cộng F4 cộng P bằng vectơ không. Nhờ tính toán các góc và tích vô hướng, máy tính phân bổ lực kéo đồng đều để cáp không đứt.",
    audioUrl: "assets/audio/b6_wrapup.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài"
  },

  // =========================================================================
  // PHẦN V. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC 3 DẠNG THỨC 2025)
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN V. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP",

    // DẠNG 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (NHẬN BIẾT)
    part1MultipleChoice: [
      {
        id: "mc-12-6-1",
        num: 1,
        prompt: "Câu 1: Trong không gian, hai vectơ có độ dài bằng nhau và cùng hướng thì được gọi là:",
        options: [
          "Hai vectơ đối nhau",
          "Hai vectơ bằng nhau",
          "Hai vectơ cùng phương",
          "Hai vectơ-không"
        ],
        correctIndex: 1,
        solution: "Theo định nghĩa chuẩn SGK, hai vectơ bằng nhau khi và chỉ khi chúng có cùng hướng và cùng độ dài.",
        similarVariation: {
          prompt: "Trong không gian, hai vectơ có độ dài bằng nhau và ngược hướng thì được gọi là:",
          options: [
            "Hai vectơ đối nhau",
            "Hai vectơ bằng nhau",
            "Hai vectơ cùng phương",
            "Hai vectơ vuông góc"
          ],
          correctIndex: 0,
          solution: "Theo định nghĩa, hai vectơ có cùng độ dài và ngược hướng là hai vectơ đối nhau."
        }
      },
      {
        id: "mc-12-6-2",
        num: 2,
        prompt: "Câu 2: Khẳng định nào sau đây <b>sai</b>?",
        options: [
          "$\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$",
          "$\\vec{a} \\cdot \\vec{a} = |\\vec{a}|^2$",
          "$\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0$",
          "$|\\vec{a} + \\vec{b}| = |\\vec{a}| + |\\vec{b}|$"
        ],
        correctIndex: 3,
        solution: "Bất đẳng thức tam giác khẳng định $|\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|$, dấu bằng chỉ xảy ra khi hai vectơ cùng hướng. Do đó đẳng thức không phải luôn đúng với mọi vectơ.",
        similarVariation: {
          prompt: "Khẳng định nào sau đây <b>đúng</b> với mọi vectơ $\\vec{a}, \\vec{b}$ khác $\\vec{0}$?",
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
        id: "mc-12-6-3",
        num: 3,
        prompt: "Câu 3: Cho hình hộp $ABCD.A'B'C'D'$. Tổng $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng:",
        options: [
          "$\\vec{AC}$",
          "$\\vec{AC'}$",
          "$\\vec{A'C}$",
          "$\\vec{BD'}$"
        ],
        correctIndex: 1,
        solution: "Áp dụng trực tiếp quy tắc hình hộp cho ba vectơ cạnh cùng xuất phát từ đỉnh $A$, ta được vectơ đường chéo không gian $\\vec{AC'}$.",
        similarVariation: {
          prompt: "Cho hình hộp $ABCD.A'B'C'D'$. Tổng $\\vec{BA} + \\vec{BC} + \\vec{BB'}$ bằng:",
          options: [
            "$\\vec{BD'}$",
            "$\\vec{AC'}$",
            "$\\vec{BD}$",
            "$\\vec{B'D}$"
          ],
          correctIndex: 0,
          solution: "Theo quy tắc hình hộp xuất phát từ đỉnh $B$, ta được $\\vec{BD'}$."
        }
      },
      {
        id: "mc-12-6-4",
        num: 4,
        prompt: "Câu 4: Góc giữa hai vectơ cùng hướng (và khác vectơ-không) là:",
        options: [
          "$90^\\circ$",
          "$180^\\circ$",
          "$0^\\circ$",
          "$45^\\circ$"
        ],
        correctIndex: 2,
        solution: "Hai vectơ cùng hướng có góc hợp bởi chúng bằng $0^\\circ$.",
        similarVariation: {
          prompt: "Góc giữa hai vectơ ngược hướng (và khác vectơ-không) là:",
          options: [
            "$0^\\circ$",
            "$90^\\circ$",
            "$180^\\circ$",
            "$360^\\circ$"
          ],
          correctIndex: 2,
          solution: "Hai vectơ ngược hướng có góc hợp bởi chúng bằng $180^\\circ$."
        }
      },
      {
        id: "mc-12-6-5",
        num: 5,
        prompt: "Câu 5: Cho tứ diện $ABCD$ có trọng tâm $G$. Đẳng thức nào sau đây đúng?",
        options: [
          "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$",
          "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = 4\\vec{0}$",
          "$\\vec{AB} + \\vec{AC} + \\vec{AD} = \\vec{AG}$",
          "$\\vec{GA} + \\vec{GB} = \\vec{GC} + \\vec{GD}$"
        ],
        correctIndex: 0,
        solution: "Theo định lí trọng tâm tứ diện, $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$.",
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

    // DẠNG 2: TRẮC NGHIỆM ĐÚNG/SAI (THÔNG HIỂU)
    part2TrueFalse: [
      {
        id: "tf-12-6-1",
        num: 1,
        prompt: "Câu 1 : Cho tứ diện $ABCD$ có $G$ là trọng tâm. Xét tính đúng / sai của các mệnh đề sau:",
        intro: "Câu 1 : Cho tứ diện $ABCD$ có $G$ là trọng tâm. Xét tính đúng / sai của các mệnh đề sau:",
        items: [
          {
            label: "a",
            key: "a",
            text: "1) $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$",
            statement: "1) $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$",
            isTrue: false,
            isCorrect: false,
            explain: "Sai - Thiếu $\\vec{GD}$. Đẳng thức đúng phải là $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$."
          },
          {
            label: "b",
            key: "b",
            text: "2) $\\vec{AB} + \\vec{AC} + \\vec{AD} = 4\\vec{AG}$",
            statement: "2) $\\vec{AB} + \\vec{AC} + \\vec{AD} = 4\\vec{AG}$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, vì $\\vec{AB} + \\vec{AC} + \\vec{AD} = (\\vec{AG} + \\vec{GB}) + (\\vec{AG} + \\vec{GC}) + (\\vec{AG} + \\vec{GD}) = 3\\vec{AG} + (\\vec{GB} + \\vec{GC} + \\vec{GD}) = 3\\vec{AG} + (-\\vec{GA}) = 4\\vec{AG}$."
          },
          {
            label: "c",
            key: "c",
            text: "3) $\\vec{DA} + \\vec{DB} + \\vec{DC} = 4\\vec{DG}$",
            statement: "3) $\\vec{DA} + \\vec{DB} + \\vec{DC} = 4\\vec{DG}$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, tương tự với đỉnh $D$ ta có $\\vec{DA} + \\vec{DB} + \\vec{DC} = 4\\vec{DG}$."
          },
          {
            label: "d",
            key: "d",
            text: "4) Với điểm $M$ bất kì trong không gian, $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG}$",
            statement: "4) Với điểm $M$ bất kì trong không gian, $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG}$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng theo hệ thức trọng tâm tứ diện đối với điểm $M$ tùy ý."
          }
        ],
        solution: "Ý a sai vì thiếu vectơ $\\vec{GD}$. Các ý b, c, d đều là các hệ thức đúng chuẩn mực của trọng tâm tứ diện.",
        similarVariation: {
          prompt: "Cho tam giác $ABC$ trong không gian có $G$ là trọng tâm và $M$ là một điểm tùy ý. Xét tính đúng / sai của các mệnh đề sau:",
          items: [
            {
              label: "a",
              key: "a",
              text: "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$",
              statement: "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, theo tính chất trọng tâm tam giác."
            },
            {
              label: "b",
              key: "b",
              text: "$\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$",
              statement: "$\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, với mọi điểm M trong không gian."
            },
            {
              label: "c",
              key: "c",
              text: "$\\vec{AB} + \\vec{AC} = 2\\vec{AG}$",
              statement: "$\\vec{AB} + \\vec{AC} = 2\\vec{AG}$",
              isTrue: false,
              isCorrect: false,
              explain: "Sai, đẳng thức đúng là $\\vec{AB} + \\vec{AC} = 3\\vec{AG}$."
            },
            {
              label: "d",
              key: "d",
              text: "$\\vec{GB} + \\vec{GC} = -\\vec{GA}$",
              statement: "$\\vec{GB} + \\vec{GC} = -\\vec{GA}$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, vì $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0} \\implies \\vec{GB} + \\vec{GC} = -\\vec{GA}$."
            }
          ],
          solution: "Các ý a, b, d đúng. Ý c sai vì $\\vec{AB} + \\vec{AC} = 3\\vec{AG}$."
        }
      },
      {
        id: "tf-12-6-2",
        num: 2,
        prompt: "Câu 2: Cho hình lập phương $ABCD.A'B'C'D'$. Xét tính đúng / sai của các mệnh đề sau:",
        intro: "Câu 2: Cho hình lập phương $ABCD.A'B'C'D'$. Xét tính đúng / sai của các mệnh đề sau:",
        items: [
          {
            label: "a",
            key: "a",
            text: "$\\vec{AB} = \\vec{D'C'}$",
            statement: "$\\vec{AB} = \\vec{D'C'}$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, vì tứ giác $ABC'D'$ có $AB // D'C'$ và $AB = D'C'$ nên $\\vec{AB} = \\vec{D'C'}$."
          },
          {
            label: "b",
            key: "b",
            text: "$\\vec{AC} \\cdot \\vec{B'D'} = 0$",
            statement: "$\\vec{AC} \\cdot \\vec{B'D'} = 0$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, vì $\\vec{B'D'} = \\vec{BD}$ mà $AC \\perp BD$ (hai đường chéo hình vuông đáy) nên tích vô hướng bằng 0."
          },
          {
            label: "c",
            key: "c",
            text: "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$",
            statement: "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng theo quy tắc hình hộp."
          },
          {
            label: "d",
            key: "d",
            text: "Góc giữa hai vectơ $\\vec{A'C'}$ và $\\vec{BD}$ bằng $90^\\circ$",
            statement: "Góc giữa hai vectơ $\\vec{A'C'}$ và $\\vec{BD}$ bằng $90^\\circ$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, vì $\\vec{A'C'} = \\vec{AC}$ mà $AC \\perp BD$ nên góc giữa chúng bằng $90^\\circ$."
          }
        ],
        solution: "Cả 4 mệnh đề a, b, c, d đều đúng nhờ các tính chất đối xứng và vuông góc trong hình lập phương.",
        similarVariation: {
          prompt: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Xét tính đúng / sai của các mệnh đề sau:",
          items: [
            {
              label: "a",
              key: "a",
              text: "$\\vec{AD} = \\vec{B'C'}$",
              statement: "$\\vec{AD} = \\vec{B'C'}$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, vì tứ giác $AB'C'D$ có $AD // B'C'$ và $AD = B'C'$."
            },
            {
              label: "b",
              key: "b",
              text: "$\\vec{BD} \\cdot \\vec{AA'} = 0$",
              statement: "$\\vec{BD} \\cdot \\vec{AA'} = 0$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, vì đường thẳng cạnh bên $AA'$ vuông góc với mặt phẳng đáy $(ABCD)$ chứa $BD$."
            },
            {
              label: "c",
              key: "c",
              text: "$\\vec{BA} + \\vec{BC} + \\vec{BB'} = \\vec{BD'}$",
              statement: "$\\vec{BA} + \\vec{BC} + \\vec{BB'} = \\vec{BD'}$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng theo quy tắc hình hộp xuất phát từ đỉnh B."
            },
            {
              label: "d",
              key: "d",
              text: "Góc giữa $\\vec{AB}$ và $\\vec{A'D'}$ bằng $60^\\circ$",
              statement: "Góc giữa $\\vec{AB}$ và $\\vec{A'D'}$ bằng $60^\\circ$",
              isTrue: false,
              isCorrect: false,
              explain: "Sai, vì $\\vec{A'D'} = \\vec{AD}$ mà $AB \\perp AD$ nên góc giữa chúng bằng $90^\\circ$."
            }
          ],
          solution: "Các ý a, b, c đúng. Ý d sai vì góc giữa $\\vec{AB}$ và $\\vec{A'D'}$ bằng $90^\\circ$."
        }
      },
      {
        id: "tf-12-6-3",
        num: 3,
        prompt: "Câu 3: Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Xét tính đúng / sai của các mệnh đề sau:",
        intro: "Câu 3: Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Xét tính đúng / sai của các mệnh đề sau:",
        items: [
          {
            label: "a",
            key: "a",
            text: "Độ dài $|\\vec{AC}| = 5$",
            statement: "Độ dài $|\\vec{AC}| = 5$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, $AC = \\sqrt{AB^2 + AD^2} = \\sqrt{3^2 + 4^2} = 5$."
          },
          {
            label: "b",
            key: "b",
            text: "Độ dài $|\\vec{AC'}| = 5\\sqrt{2}$",
            statement: "Độ dài $|\\vec{AC'}| = 5\\sqrt{2}$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, $AC' = \\sqrt{AB^2 + AD^2 + AA'^2} = \\sqrt{3^2 + 4^2 + 5^2} = \\sqrt{50} = 5\\sqrt{2}$."
          },
          {
            label: "c",
            key: "c",
            text: "$\\vec{AB} \\cdot \\vec{AA'} = 0$",
            statement: "$\\vec{AB} \\cdot \\vec{AA'} = 0$",
            isTrue: true,
            isCorrect: true,
            explain: "Đúng, vì $AB \\perp AA'$ trong hình hộp chữ nhật."
          },
          {
            label: "d",
            key: "d",
            text: "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{BD'}$",
            statement: "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{BD'}$",
            isTrue: false,
            isCorrect: false,
            explain: "Sai, theo quy tắc hình hộp tổng ba vectơ cạnh cùng xuất phát từ đỉnh $A$ bằng $\\vec{AC'}$, không phải $\\vec{BD'}$."
          }
        ],
        solution: "Ý a, b, c đúng theo định lí Pythagore và quan hệ vuông góc. Ý d sai vì vế phải phải là vectơ $\\vec{AC'}$.",
        similarVariation: {
          prompt: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 6, AD = 8, AA' = 10$. Xét tính đúng / sai của các mệnh đề sau:",
          items: [
            {
              label: "a",
              key: "a",
              text: "Độ dài $|\\vec{BD}| = 10$",
              statement: "Độ dài $|\\vec{BD}| = 10$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $BD = \\sqrt{6^2 + 8^2} = 10$."
            },
            {
              label: "b",
              key: "b",
              text: "Độ dài $|\\vec{BD'}| = 10\\sqrt{2}$",
              statement: "Độ dài $|\\vec{BD'}| = 10\\sqrt{2}$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng, $BD' = \\sqrt{6^2 + 8^2 + 10^2} = \\sqrt{200} = 10\\sqrt{2}$."
            },
            {
              label: "c",
              key: "c",
              text: "$\\vec{AD} \\cdot \\vec{DD'} = 0$",
              statement: "$\\vec{AD} \\cdot \\vec{DD'} = 0$",
              isTrue: true,
              isCorrect: true,
              explain: "Đúng vì $AD \\perp DD'$."
            },
            {
              label: "d",
              key: "d",
              text: "$\\vec{DA} + \\vec{DC} + \\vec{DD'} = \\vec{CA'}$",
              statement: "$\\vec{DA} + \\vec{DC} + \\vec{DD'} = \\vec{CA'}$",
              isTrue: false,
              isCorrect: false,
              explain: "Sai, theo quy tắc hình hộp xuất phát từ đỉnh D thì tổng phải là $\\vec{DB'}$."
            }
          ],
          solution: "Ý a, b, c đúng. Ý d sai vì quy tắc hình hộp cho kết quả là $\\vec{DB'}$."
        }
      }
    ],

    // DẠNG 3: TRẢ LỜI NGẮN (VẬN DỤNG)
    part3ShortAnswer: [
      {
        id: "sa-12-6-1",
        num: 1,
        prompt: `
          <div style="font-weight: 600; color: #1e3a8a; margin-bottom: 8px;">
            Câu 4 (Bài toán thực tế):
          </div>
          <p>Một chiếc máy bay bay theo hướng Bắc với vận tốc $600\\text{ km/h}$. Gió thổi từ hướng Tây sang Đông với vận tốc $80\\text{ km/h}$. Tính độ lớn vận tốc thực tế của máy bay (Làm tròn đến hàng đơn vị).</p>
          
          <!-- Đồ họa minh họa (TikZ)  -->
          <div class="tikz-svg-card" style="margin: 14px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px; max-width: 420px;">
            <div style="font-weight: 700; color: #1e3a8a; margin-bottom: 8px; font-size: 0.95rem;">
              <i class="fa-solid fa-plane-departure"></i> Đồ họa minh họa (TikZ):
            </div>
            <div style="text-align: center;">
              <svg width="340" height="240" viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                <defs>
                  <marker id="plane-arr-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
                  </marker>
                  <marker id="plane-arr-cyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                  </marker>
                  <marker id="plane-arr-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                  </marker>
                </defs>

                <!-- Hướng Bắc: Trục thẳng đứng lên trên -->
                <line x1="140" y1="180" x2="140" y2="40" stroke="#2563eb" stroke-width="2.5" marker-end="url(#plane-arr-blue)"/>
                <text x="140" y="28" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Hướng Bắc</text>
                
                <g transform="translate(75, 105)">
                  <line x1="0" y1="-10" x2="16" y2="-10" stroke="#2563eb" stroke-width="1.2"/>
                  <polyline points="12,-12 16,-10 12,-8" fill="none" stroke="#2563eb" stroke-width="1.2"/>
                  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#2563eb">v<tspan font-size="10" dy="3">1</tspan> <tspan font-style="normal" font-size="12">(Máy bay)</tspan></text>
                </g>

                <!-- Hướng Đông: Trục nằm ngang sang phải -->
                <line x1="140" y1="180" x2="260" y2="180" stroke="#0284c7" stroke-width="2.5" marker-end="url(#plane-arr-cyan)"/>
                <text x="265" y="184" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0369a1">Hướng Đông</text>

                <g transform="translate(170, 202)">
                  <line x1="0" y1="-10" x2="16" y2="-10" stroke="#0284c7" stroke-width="1.2"/>
                  <polyline points="12,-12 16,-10 12,-8" fill="none" stroke="#0284c7" stroke-width="1.2"/>
                  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#0284c7">v<tspan font-size="10" dy="3">2</tspan> <tspan font-style="normal" font-size="12">(Gió)</tspan></text>
                </g>

                <!-- Cạnh nét đứt hoàn thành hình chữ nhật -->
                <line x1="140" y1="40" x2="260" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                <line x1="260" y1="180" x2="260" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

                <!-- Đường chéo đỏ hợp lực: Vectơ vận tốc thực tế v -->
                <line x1="140" y1="180" x2="254" y2="46" stroke="#dc2626" stroke-width="3" marker-end="url(#plane-arr-red)"/>

                <g transform="translate(195, 125) rotate(-49)">
                  <line x1="0" y1="-10" x2="14" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
                  <polyline points="10,-12 14,-10 10,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
                  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#dc2626">v <tspan font-style="normal" font-size="12">(Thực tế)</tspan></text>
                </g>
              </svg>
            </div>
          </div>
        `,
        correctAnswer: "605",
        solution: `
          <p><strong>Lời giải chi tiết của thầy Sáng:</strong></p>
          <p>Gọi $\\vec{v_1}$ là vận tốc máy bay, $\\vec{v_2}$ là vận tốc gió.</p>
          <p>Vận tốc thực tế của máy bay so với mặt đất là $\\vec{v} = \\vec{v_1} + \\vec{v_2}$.</p>
          <p>Do hướng Bắc vuông góc với hướng Đông nên $\\vec{v_1} \\perp \\vec{v_2}$.</p>
          <p>$$|\\vec{v}| = \\sqrt{v_1^2 + v_2^2} = \\sqrt{600^2 + 80^2} = \\sqrt{360000 + 6400} = \\sqrt{366400} \\approx 605,31\\text{ km/h}$$</p>
          <p>Làm tròn đến hàng đơn vị: <strong>605</strong>.</p>
        `,
        similarVariation: {
          prompt: "Một chiếc máy bay bay theo hướng Bắc với vận tốc $700\\text{ km/h}$. Gió thổi từ hướng Tây sang Đông với vận tốc $60\\text{ km/h}$. Tính độ lớn vận tốc thực tế của máy bay so với mặt đất (Làm tròn đến hàng đơn vị).",
          correctAnswer: "703",
          solution: "Vận tốc thực tế $|\\vec{v}| = \\sqrt{700^2 + 60^2} = \\sqrt{490000 + 3600} = \\sqrt{493600} \\approx 702,57\\text{ km/h}$. Làm tròn đến hàng đơn vị: 703."
        }
      },
      {
        id: "sa-12-6-2",
        num: 2,
        prompt: "Câu 5: Cho hình chóp tứ giác đều $S.ABCD$ có tất cả các cạnh đều bằng $a$. Tính tích vô hướng $\\vec{SA} \\cdot \\vec{SC}$ theo $a^2$. (Nhập hệ số, ví dụ 0 hoặc 0.5 hoặc -0.5).",
        correctAnswer: "0",
        solution: `
          <p><strong>Lời giải chi tiết của Thầy Sáng:</strong></p>
          <p>Tam giác $SAC$ có $SA = SC = a$. Đáy $ABCD$ là hình vuông cạnh $a$ nên đường chéo $AC = a\\sqrt{2}$.</p>
          <p>Xét tam giác $SAC$ có: $SA^2 + SC^2 = a^2 + a^2 = 2a^2 = AC^2$.</p>
          <p>Suy ra tam giác $SAC$ vuông tại $S$ theo định lí Pythagore đảo.</p>
          <p>Do đó: $\\vec{SA} \\perp \\vec{SC} \\Rightarrow \\vec{SA} \\cdot \\vec{SC} = 0$.</p>
          <p>Hệ số cần nhập là: <strong>0</strong>.</p>
        `,
        similarVariation: {
          prompt: "Cho hình chóp tứ giác đều $S.ABCD$ có đáy là hình vuông tâm $O$, $SO$ là đường cao của khối chóp. Tính tích vô hướng $\\vec{SO} \\cdot \\vec{AC}$. (Nhập số).",
          correctAnswer: "0",
          solution: "Vì $SO \\perp (ABCD)$ nên $SO \\perp AC$. Do đó $\\vec{SO} \\cdot \\vec{AC} = 0$."
        }
      }
    ]
  }
};
