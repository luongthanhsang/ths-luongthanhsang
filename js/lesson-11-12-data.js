/**
 * BÀI HỌC SỐ: BÀI 12. ĐƯỜNG THẲNG VÀ MẶT PHẲNG SONG SONG (TOÁN 11 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - Phần I: Lời chào của Thầy Sáng + Nút Voice AI vàng đồng, chỉnh tốc độ
 * - Phần II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 84 + Voice AI
 * - Phần III: Tiến trình bài học (Dẫn nhập dây nhợ thợ xây tường gạch, 2 mục lý thuyết đóng khung nguyên văn SGK, 
 *             TikZ SVG 3D không gian nét đứt/liền chuẩn mực, POI checkpoints giữa & cuối, Mẹo nhớ, Ví dụ tự luận ẩn/hiện, Chốt bài học)
 * - Phần IV: Bài tập trắc nghiệm tổng hợp chuẩn cấu trúc thi mới 2025:
 *             + 5 câu trắc nghiệm nhiều lựa chọn (Dễ - Nhận biết)
 *             + 3 câu trắc nghiệm Đúng/Sai 4 ý (Thông hiểu)
 *             + 2 câu trả lời ngắn thực tế (Vận dụng)
 *             + Kèm nút "Lời giải chi tiết" và nút "Bài toán tương tự" đổi số tự động
 */

window.LESSON_11_C4_B12_DATA = {
  id: "11-c4-b12",
  number: "Bài 12",
  title: "Đường thẳng và mặt phẳng song song",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioScript: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioUrl: "assets/audio/b12_welcome.mp3",
    buttonLabel: "Lời chào của thầy Sáng",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 84)
  // =========================================================================
  learningGoals: [
    "Nhận biết và phân biệt chính xác 3 vị trí tương đối giữa đường thẳng và mặt phẳng: song song, cắt nhau tại 1 điểm, và đường thẳng nằm trong mặt phẳng.",
    "Làm chủ Định lí 1 (Dấu hiệu nhận biết): Chứng minh đường thẳng song song với mặt phẳng bằng cách chứng minh nó song song với một đường thẳng nằm trong mặt phẳng đó.",
    "Làm chủ Định lí 2 (Tính chất giao tuyến): Tìm giao tuyến song song trong các bài toán thiết diện qua một đường thẳng song song với mặt phẳng.",
    "Vận dụng định lí vào mô tả và giải thích hiện thực đời sống: căng dây nhợ thợ xây, mép cánh cửa mở quay song song sàn nhà."
  ],
  goalsAudioUrl: "assets/audio/b11_12_goals.mp3",
  goalsButtonLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================
  // 1. Bài toán dẫn nhập
  hook: {
    title: "Bài toán dây nhợ của người thợ xây và mép cửa sổ song song mặt sàn",
    story: "Khi xây một bức tường gạch, người thợ xây luôn bắt đầu bằng việc đặt các viên gạch chuẩn ở hai góc tường, sau đó căng một sợi dây nhợ thật căng nối hai điểm chuẩn này dọc theo mép tường rồi mới đặt từng viên gạch thẳng tắp theo đường dây. Việc căng dây này có tác dụng gì? Trong Toán học, làm thế nào để đảm bảo sợi dây nhợ luôn song song với mặt đất bằng phẳng bên dưới dù người thợ xây cao lên tầng 2, tầng 3? Tương tự, khi mở một cánh cửa sổ hay cánh cửa phòng, dù cánh cửa xoay ở bất kì góc độ nào thì mép trên của cửa vẫn luôn luôn song song với mặt sàn nhà. Quan hệ hình học nào chi phối các hiện tượng thực tiễn tuyệt đẹp này? Đó chính là quan hệ đường thẳng song song với mặt phẳng!",
    illustration: "",
    illustrationCaption: "Người thợ xây căng dây nhợ: Ứng dụng thực tế của đường thẳng song song với mặt phẳng sàn",
    question: "Nếu chỉ cần sợi dây nhợ song song với một đường mạch vữa gạch nằm trên mặt sàn, ta có thể khẳng định ngay sợi dây song song với toàn bộ mặt sàn không? Định lí nào đảm bảo điều đó?",
    audioUrl: "assets/audio/b11_12_hook.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    bridge: "Hãy cùng Thầy Sáng khám phá các quy tắc hình học không gian nền tảng ngay sau đây!"
  },

  // 2. Trình phát bài giảng tương tác tích hợp POI
  interactiveAudio: {
    title: "Bài giảng tương tác: Đường thẳng song song với mặt phẳng",
    audioUrl: "assets/audio/b12_main_lecture.mp3",
    duration: 65,
    timestamps: [
      {
        id: "poi-11-12-1",
        time: 25,
        title: "Điểm dừng 1: Vị trí tương đối đường thẳng và mặt phẳng",
        question: "Đường thẳng $d$ và mặt phẳng $(\\alpha)$ được gọi là song song với nhau khi:",
        options: [
          "$d$ và $(\\alpha)$ không có điểm chung",
          "$d$ có duy nhất 1 điểm chung với $(\\alpha)$",
          "$d$ có vô số điểm chung với $(\\alpha)$",
          "$d$ vuông góc với $(\\alpha)$"
        ],
        correctIndex: 0,
        hint: "Song song nghĩa là không bao giờ chạm vào nhau, tức là số điểm chung bằng 0.",
        explain: "Chính xác! Theo định nghĩa SGK trang 84: Nếu đường thẳng $d$ và mặt phẳng $(\\alpha)$ không có điểm chung thì ta nói $d$ song song với $(\\alpha)$, kí hiệu $d // (\\alpha)$."
      },
      {
        id: "poi-11-12-2",
        time: 52,
        title: "Điểm dừng 2: Điều kiện chứng minh đường thẳng song song mặt phẳng",
        question: "Để chứng minh đường thẳng $a$ song song với mặt phẳng $(P)$, ta cần chứng minh:",
        options: [
          "$a \\not\\subset (P)$ và $a$ song song với một đường thẳng $b$ nằm trong $(P)$",
          "Chỉ cần $a$ song song với một đường thẳng bất kì trong không gian",
          "$a$ cắt $(P)$ tại một điểm",
          "$a$ nằm trọn vẹn trong $(P)$"
        ],
        correctIndex: 0,
        hint: "Phải có 2 điều kiện: đường thẳng không nằm trong mặt phẳng, và song song với một đường thẳng thuộc mặt phẳng đó.",
        explain: "Rất chuẩn! Định lí 1 (Dấu hiệu nhận biết) quy định: Nếu $a \\not\\subset (P)$ và $a // b$ với $b \\subset (P)$ thì $a // (P)$."
      }
    ]
  },

  // 3. Triển khai các mục lý thuyết chuẩn SGK
  sections: [
    {
      num: "1",
      title: "ĐƯỜNG THẲNG SONG SONG VỚI MẶT PHẲNG",
      subsections: [
        {
          key: "1a",
          title: "Định nghĩa và Ba vị trí tương đối giữa đường thẳng và mặt phẳng",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 11 - Trang 84:</div>
              <p>Cho đường thẳng $d$ và mặt phẳng $(\\alpha)$. Nếu $d$ và $(\\alpha)$ <strong>không có điểm chung</strong> thì ta nói $d$ <strong>song song với</strong> $(\\alpha)$ hay $(\\alpha)$ <strong>song song với</strong> $d$ và kí hiệu là $d // (\\alpha)$ hay $(\\alpha) // d$.</p>
            </div>

            <div class="theory-details-wrap" style="margin-top: 14px;">
              <p><strong>Ba vị trí tương đối giữa đường thẳng và mặt phẳng:</strong></p>
              <ul>
                <li><strong>Trường hợp 1 (Song song):</strong> $d$ và $(\\alpha)$ không có điểm chung nào: $d \\cap (\\alpha) = \\varnothing \\iff d // (\\alpha)$.</li>
                <li><strong>Trường hợp 2 (Cắt nhau):</strong> $d$ và $(\\alpha)$ có đúng một điểm chung duy nhất $M$: $d \\cap (\\alpha) = \\{M\\}$.</li>
                <li><strong>Trường hợp 3 (Nằm trong):</strong> $d$ và $(\\alpha)$ có từ 2 điểm chung phân biệt trở lên, khi đó mọi điểm của $d$ đều thuộc $(\\alpha)$: $d \\subset (\\alpha)$ hay $(\\alpha) \\supset d$.</li>
              </ul>
            </div>

            <!-- TikZ SVG Minh họa 3 Vị trí tương đối -->
            <div class="tikz-svg-card">
              <div class="tikz-svg-title"><i class="fa-solid fa-layer-group"></i> Hình học không gian trực quan: Ba vị trí tương đối giữa đường thẳng và mặt phẳng</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="500" height="170" viewBox="0 0 500 170" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <!-- Vị trí 1: Song song -->
                  <g transform="translate(15, 10)">
                    <polygon points="10,80 110,80 140,20 40,20" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
                    <text x="20" y="70" font-family="sans-serif" font-size="12" fill="#15803d">α</text>
                    <line x1="20" y1="5" x2="130" y2="5" stroke="#16a34a" stroke-width="2.5"/>
                    <text x="135" y="9" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a">d</text>
                    <text x="75" y="110" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">d // (α)</text>
                  </g>

                  <!-- Vị trí 2: Cắt nhau -->
                  <g transform="translate(180, 10)">
                    <polygon points="10,80 110,80 140,20 40,20" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
                    <text x="20" y="70" font-family="sans-serif" font-size="12" fill="#1d4ed8">α</text>
                    <!-- Đoạn trên mặt phẳng -->
                    <line x1="75" y1="0" x2="75" y2="45" stroke="#0284c7" stroke-width="2.5"/>
                    <circle cx="75" cy="45" r="3" fill="#dc2626"/>
                    <text x="82" y="48" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">M</text>
                    <!-- Đoạn khuất -->
                    <line x1="75" y1="45" x2="75" y2="65" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
                    <!-- Đoạn dưới mặt phẳng -->
                    <line x1="75" y1="65" x2="75" y2="85" stroke="#0284c7" stroke-width="2.5"/>
                    <text x="80" y="15" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">d</text>
                    <text x="75" y="110" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">d ∩ (α) = {M}</text>
                  </g>

                  <!-- Vị trí 3: Nằm trong -->
                  <g transform="translate(345, 10)">
                    <polygon points="10,80 110,80 140,20 40,20" fill="#fdf2f8" stroke="#fbcfe8" stroke-width="1.5"/>
                    <text x="20" y="70" font-family="sans-serif" font-size="12" fill="#be185d">α</text>
                    <line x1="30" y1="50" x2="120" y2="50" stroke="#db2777" stroke-width="2.5"/>
                    <text x="125" y="54" font-family="sans-serif" font-size="12" font-weight="bold" fill="#db2777">d</text>
                    <text x="75" y="110" font-family="sans-serif" font-size="12" font-weight="bold" fill="#be185d" text-anchor="middle">d ⊂ (α)</text>
                  </g>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình minh họa SGK trang 84: Ba trường hợp vị trí tương đối giữa đường thẳng $d$ và mặt phẳng $(\alpha)$</em>
              </div>
            </div>
          `,
          audioUrl: "assets/audio/b11_12_sec1a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-11-12-1a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Số điểm chung giữa đường thẳng và mặt phẳng",
              question: "Nếu đường thẳng $d$ có hai điểm chung phân biệt $A$ và $B$ với mặt phẳng $(P)$ thì:",
              options: [
                "Đường thẳng $d$ nằm hoàn toàn trong mặt phẳng $(P)$",
                "Đường thẳng $d$ song song với mặt phẳng $(P)$",
                "Đường thẳng $d$ cắt mặt phẳng $(P)$ tại 2 điểm",
                "Chưa đủ dữ kiện để kết luận"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Theo định lí thừa nhận: Nếu một đường thẳng có hai điểm phân biệt cùng thuộc một mặt phẳng thì mọi điểm của đường thẳng đều thuộc mặt phẳng đó ($d \\subset (P)$).",
              feedbackWrong: "Chú ý: Đường thẳng không thể cắt mặt phẳng tại 2 điểm phân biệt; nếu có từ 2 điểm chung thì nó phải nằm trọn trong mặt phẳng."
            },
            {
              id: "cp-11-12-1a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Cạnh và mặt phẳng trong tứ diện",
              question: "Cho tứ diện $ABCD$. Đường thẳng $AB$ cắt mặt phẳng nào sau đây?",
              options: [
                "Mặt phẳng $(BCD)$",
                "Mặt phẳng $(ABC)$",
                "Mặt phẳng $(ABD)$",
                "Không cắt mặt phẳng nào"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất giỏi! Đường thẳng $AB$ cắt mặt phẳng đáy $(BCD)$ tại điểm chung duy nhất là đỉnh $B$.",
              feedbackWrong: "Lưu ý: $AB$ nằm trong $(ABC)$ và $(ABD)$, chỉ cắt $(BCD)$ tại điểm $B$."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về 3 Vị trí tương đối",
            content: "Để ghi nhớ số giao điểm, các em chỉ cần nhớ: <strong>'Song song = 0 điểm chung; Cắt nhau = đúng 1 điểm; Nằm trong = vô số điểm chung'</strong>."
          },

          workedExample: {
            title: "Ví dụ 1 (SGK trang 85) - Vị trí của cạnh tứ diện đối với các mặt",
            problem: "Cho hình tứ diện $ABCD$. Trong các mặt phẳng chứa các mặt của hình tứ diện, hãy cho biết:\na) Đường thẳng $AB$ cắt các mặt phẳng nào?\nb) Đường thẳng $AB$ nằm trong các mặt phẳng nào?",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <p>Hình tứ diện $ABCD$ có 4 mặt phẳng tương ứng với 4 mặt tam giác là: $(ABC), (ABD), (ACD), (BCD)$.</p>
              <ul>
                <li>a) <strong>Đường thẳng $AB$ cắt các mặt phẳng:</strong>
                  <br>- Cắt mặt phẳng $(ACD)$ tại điểm duy nhất là đỉnh $A$.
                  <br>- Cắt mặt phẳng $(BCD)$ tại điểm duy nhất là đỉnh $B$.
                </li>
                <li>b) <strong>Đường thẳng $AB$ nằm trong các mặt phẳng:</strong>
                  <br>- Nằm trong mặt phẳng $(ABC)$ vì cả hai điểm $A$ và $B$ đều thuộc mặt phẳng $(ABC)$.
                  <br>- Nằm trong mặt phẳng $(ABD)$ vì cả hai điểm $A$ và $B$ đều thuộc mặt phẳng $(ABD)$.
                </li>
              </ul>
            `,
            teacherGuidance: "Mẹo làm nhanh: Một cạnh của hình tứ diện luôn nằm trong đúng 2 mặt kề nhau, và cắt 2 mặt còn lại lần lượt tại hai đầu mút của cạnh đó."
          }
        }
      ]
    },
    {
      num: "2",
      title: "ĐIỀU KIỆN VÀ TÍNH CHẤT CỦA ĐƯỜNG THẲNG SONG SONG VỚI MẶT PHẲNG",
      subsections: [
        {
          key: "2a",
          title: "Định lí 1 (Dấu hiệu nhận biết) và Định lí 2 (Tính chất giao tuyến)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Định lí 1 - Dấu hiệu nhận biết (SGK trang 85):</div>
              <p style="font-weight: 500;">
                Nếu đường thẳng $a$ không nằm trong mặt phẳng $(P)$ và song song với một đường thẳng nằm trong $(P)$ thì $a$ <strong>song song với $(P)$</strong>.
              </p>
              <p>$$\\begin{cases} a \\not\\subset (P) \\\\ b \\subset (P) \\\\ a // b \\end{cases} \\implies a // (P).$$</p>
            </div>

            <div class="sgk-framed-box" style="margin-top: 14px; background: #eff6ff; border-left-color: #2563eb;">
              <div class="sgk-box-tag" style="color: #1e40af;"><i class="fa-solid fa-bookmark"></i> Định lí 2 - Tính chất giao tuyến (SGK trang 86):</div>
              <p style="font-weight: 500; color: #1e3a8a;">
                Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Nếu mặt phẳng $(Q)$ chứa $a$ và cắt $(P)$ theo giao tuyến $b$ thì $b$ <strong>song song với $a$</strong>.
              </p>
              <p>$$\\begin{cases} a // (P) \\\\ a \\subset (Q) \\\\ (P) \\cap (Q) = b \\end{cases} \\implies b // a.$$</p>
            </div>

            <div class="theory-details-wrap" style="margin-top: 14px;">
              <p><strong>Định lí 3 (Qua đường thẳng chéo nhau - SGK trang 86):</strong></p>
              <p>Cho hai đường thẳng chéo nhau. Có duy nhất một mặt phẳng chứa đường thẳng này và song song với đường thẳng kia.</p>
            </div>

            <!-- TikZ SVG Định lí 1 và Định lí 2 -->
            <div class="tikz-svg-card">
              <div class="tikz-svg-title"><i class="fa-solid fa-shield-halved"></i> Mô hình không gian 3D: Định lí 1 (Dấu hiệu nhận biết) và Định lí 2 (Giao tuyến song song)</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="480" height="170" viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <!-- Định lí 1 -->
                  <g transform="translate(20, 10)">
                    <polygon points="10,80 140,80 180,20 50,20" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
                    <text x="25" y="72" font-family="sans-serif" font-size="11" fill="#475569">(P)</text>
                    <line x1="50" y1="50" x2="140" y2="50" stroke="#0284c7" stroke-width="2"/>
                    <text x="145" y="54" font-family="sans-serif" font-size="11" fill="#0284c7">b ⊂ (P)</text>
                    <line x1="30" y1="5" x2="120" y2="5" stroke="#16a34a" stroke-width="2.5"/>
                    <text x="125" y="9" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">a // b</text>
                    <text x="95" y="115" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">Định lí 1: a // (P)</text>
                  </g>

                  <!-- Định lí 2 -->
                  <g transform="translate(260, 10)">
                    <polygon points="10,80 140,80 180,20 50,20" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
                    <text x="25" y="72" font-family="sans-serif" font-size="11" fill="#475569">(P)</text>
                    <polygon points="50,20 180,20 180,-10 50,-10" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1" opacity="0.6"/>
                    <line x1="50" y1="20" x2="180" y2="20" stroke="#dc2626" stroke-width="2.5"/>
                    <text x="185" y="24" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">b (giao tuyến)</text>
                    <line x1="50" y1="-10" x2="180" y2="-10" stroke="#16a34a" stroke-width="2.5"/>
                    <text x="185" y="-6" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a">a ⊂ (Q)</text>
                    <text x="110" y="115" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">Định lí 2: b // a</text>
                  </g>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình 4.36 SGK: Điều kiện nhận biết đường thẳng song song mặt phẳng và định lí giao tuyến</em>
              </div>
            </div>
          `,
          audioUrl: "assets/audio/b11_12_sec2a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-11-12-2a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Phương pháp chứng minh $d // (P)$",
              question: "Phương pháp hiệu quả nhất để chứng minh đường thẳng $d$ song song với mặt phẳng $(P)$ là gì?",
              options: [
                "Tìm một đường thẳng $\\Delta$ nằm trong $(P)$ sao cho $d // \\Delta$",
                "Chứng minh $d$ không cắt bất kì đường thẳng nào",
                "Lấy một điểm trên $d$ rồi chiếu vuông góc lên $(P)$",
                "Chứng minh $d$ song song với đường thẳng nằm ngoài $(P)$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất chính xác! Đây là phương pháp kinh điển theo Định lí 1: Chỉ cần chỉ ra một đường thẳng $\\Delta \\subset (P)$ mà $d // \\Delta$ và $d \\not\\subset (P)$.",
              feedbackWrong: "Hãy áp dụng đúng Định lí 1: Muốn chứng minh $d // (P)$, hãy tìm trong $(P)$ một đường thẳng song song với $d$."
            },
            {
              id: "cp-11-12-2a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Tính chất giao tuyến của Định lí 2",
              question: "Cho đường thẳng $a // (P)$. Mặt phẳng $(Q)$ chứa $a$ và cắt $(P)$ theo giao tuyến $b$. Khẳng định nào sau đây là ĐÚNG?",
              options: [
                "$b // a$",
                "$b$ cắt $a$",
                "$b$ chéo $a$",
                "$b$ vuông góc với $a$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Xuất sắc! Theo Định lí 2: Nếu $(Q)$ chứa $a$ và cắt $(P)$ theo giao tuyến $b$ thì giao tuyến $b$ bắt buộc phải song song với $a$.",
              feedbackWrong: "Ghi nhớ Định lí 2 trang 86 SGK: Giao tuyến $b$ luôn song song với đường thẳng $a$ ban đầu."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về Chứng minh Song song",
            content: "Để chứng minh đường thẳng song song với mặt phẳng: <strong>'Muốn song song với cả làng $(P)$, chỉ cần kết thân (song song) với một anh trong làng!'</strong>. Tìm đường song song trong mặt phẳng bằng đường trung bình hoặc hình bình hành."
          },

          workedExample: {
            title: "Ví dụ 2 (SGK trang 85) - Chứng minh đường thẳng song song mặt phẳng",
            problem: "Cho ba đường thẳng $a, b, c$ đôi một song song nhau và không cùng nằm trong một mặt phẳng. Chứng minh rằng đường thẳng $a$ song song với mặt phẳng $\\text{mp}(b, c)$.",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <p>1. Vì ba đường thẳng $a, b, c$ không cùng nằm trong một mặt phẳng nên đường thẳng $a$ không nằm trong mặt phẳng $\\text{mp}(b, c)$, tức là $a \\not\\subset \\text{mp}(b, c)$.</p>
              <p>2. Mặt khác, theo giả thiết ta có $a // b$. Mà đường thẳng $b$ nằm trong mặt phẳng $\\text{mp}(b, c)$, tức là $b \\subset \\text{mp}(b, c)$.</p>
              <p>3. Áp dụng Định lí 1 về dấu hiệu nhận biết:</p>
              <p>$$\\begin{cases} a \\not\\subset \\text{mp}(b, c) \\\\ b \\subset \\text{mp}(b, c) \\\\ a // b \\end{cases} \\implies a // \\text{mp}(b, c).$$</p>
              <p><strong>Kết luận:</strong> Đường thẳng $a$ song song với mặt phẳng chứa hai đường thẳng $b$ và $c$.</p>
            `,
            teacherGuidance: "Khi làm bài thi, các em nhớ nêu đủ 3 điều kiện trong móc nhọn hệ phương trình như Thầy hướng dẫn để người chấm cho điểm tuyệt đối nhé!"
          }
        }
      ]
    }
  ],

  // 4. Chốt bài học
  realworldWrapup: {
    title: "GIẢI QUYẾT BÀI TOÁN DẪN NHẬP DÂY NHỢ CỦA NGƯỜI THỢ XÂY",
    recap: "Đầu bài học, ta đã tìm hiểu: Tại sao người thợ xây chỉ cần căng một sợi dây nhợ song song với một hàng gạch chân tường là đảm bảo sợi dây song song với toàn bộ mặt sàn nhà?",
    solution: `
      <p><strong>Lời giải chi tiết chốt vấn đề của Thầy Sáng:</strong></p>
      <p>1. <strong>Mô hình hóa hình học:</strong></p>
      <ul>
        <li>Mặt sàn nhà là mặt phẳng $(P)$.</li>
        <li>Hàng gạch chân tường nằm ngay trên mặt sàn, xem như đường thẳng $b \\subset (P)$.</li>
        <li>Sợi dây nhợ được người thợ căng thẳng ở trên cao, xem như đường thẳng $a$ ($a \\not\\subset (P)$).</li>
      </ul>
      <p>2. <strong>Ứng dụng Định lí 1:</strong></p>
      <p>Người thợ xây căng dây nhợ $a$ song song với hàng gạch chân tường $b$. Vì $b$ nằm trọn trong mặt phẳng sàn nhà $(P)$ nên theo Định lí 1: Sợi dây nhợ $a$ <strong>song song tuyệt đối với mặt sàn $(P)$</strong>!</p>
      <p>3. <strong>Ý nghĩa thực tiễn:</strong> Nhờ tính chất này, toàn bộ hàng gạch xây dọc theo sợi dây nhợ sẽ giữ được khoảng cách không đổi so với mặt sàn, đảm bảo bức tường không bị nghiêng, lệch hay võng, đứng vững bền bỉ theo thời gian.</p>
    `,
    audioUrl: "assets/audio/b12_wrapup.mp3",
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
        id: "mc-11-12-1",
        num: 1,
        level: "Nhận biết",
        prompt: "Cho đường thẳng $d$ và mặt phẳng $(\\alpha)$. Nếu $d$ và $(\\alpha)$ không có điểm chung thì ta nói:",
        options: [
          "$d$ song song với $(\\alpha)$",
          "$d$ cắt $(\\alpha)$",
          "$d$ nằm trong $(\\alpha)$",
          "$d$ trùng với $(\\alpha)$"
        ],
        correctIndex: 0,
        solution: "Theo định nghĩa chuẩn SGK trang 84: Nếu $d$ và $(\\alpha)$ không có điểm chung thì $d // (\\alpha)$.",
        similarVariation: {
          prompt: "Kí hiệu $d // (P)$ biểu thị quan hệ nào giữa đường thẳng $d$ và mặt phẳng $(P)$?",
          options: ["Đường thẳng $d$ song song với mặt phẳng $(P)$", "$d$ vuông góc $(P)$", "$d$ cắt $(P)$", "$d$ nằm trong $(P)$"],
          correctIndex: 0,
          solution: "$//$ là kí hiệu quan hệ song song."
        }
      },
      {
        id: "mc-11-12-2",
        num: 2,
        level: "Nhận biết",
        prompt: "Nếu đường thẳng $a$ không nằm trong $(P)$ và song song với đường thẳng $b$ nằm trong $(P)$ thì:",
        options: [
          "$a // (P)$",
          "$a$ cắt $(P)$",
          "$a \\subset (P)$",
          "$a$ chéo với $(P)$"
        ],
        correctIndex: 0,
        solution: "Đây chính là nội dung Định lí 1 (Dấu hiệu nhận biết đường thẳng song song với mặt phẳng) SGK trang 85.",
        similarVariation: {
          prompt: "Điều kiện để đường thẳng $d$ song song với mặt phẳng $(\\alpha)$ là $d$ song song với một đường thẳng $d'$ thỏa mãn:",
          options: ["$d' \\subset (\\alpha)$ và $d \\not\\subset (\\alpha)$", "$d' \\not\\subset (\\alpha)$", "$d'$ cắt $(\\alpha)$", "$d' // (\\alpha)$"],
          correctIndex: 0,
          solution: "Đường thẳng $d'$ phải nằm trong $(\\alpha)$ và $d$ không nằm trong $(\\alpha)$."
        }
      },
      {
        id: "mc-11-12-3",
        num: 3,
        level: "Nhận biết",
        prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Đường thẳng $AB$ song song với mặt phẳng nào sau đây?",
        options: [
          "Mặt phẳng $(SCD)$",
          "Mặt phẳng $(SAD)$",
          "Mặt phẳng $(SBC)$",
          "Mặt phẳng $(ABCD)$"
        ],
        correctIndex: 0,
        solution: "Vì $AB // CD$ mà $CD \\subset (SCD)$ và $AB \\not\\subset (SCD)$, do đó $AB // (SCD)$.",
        similarVariation: {
          prompt: "Trong hình chóp $S.ABCD$ có đáy là hình bình hành, đường thẳng $BC$ song song với mặt phẳng nào?",
          options: ["$(SAD)$", "$(SAB)$", "$(SCD)$", "$(ABCD)$"],
          correctIndex: 0,
          solution: "Vì $BC // AD$ và $AD \\subset (SAD)$ nên $BC // (SAD)$."
        }
      },
      {
        id: "mc-11-12-4",
        num: 4,
        level: "Nhận biết",
        prompt: "Cho hai đường thẳng chéo nhau $a$ và $b$. Có bao nhiêu mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$?",
        options: [
          "1 mặt phẳng duy nhất",
          "2 mặt phẳng",
          "Vô số mặt phẳng",
          "Không có mặt phẳng nào"
        ],
        correctIndex: 0,
        solution: "Theo định lí SGK trang 86: Cho hai đường thẳng chéo nhau, có duy nhất một mặt phẳng chứa đường thẳng này và song song với đường thẳng kia.",
        similarVariation: {
          prompt: "Số lượng mặt phẳng song song với cả hai đường thẳng chéo nhau $a$ và $b$ là:",
          options: ["Vô số mặt phẳng", "Duy nhất một", "Hai", "Không có"],
          correctIndex: 0,
          solution: "Có vô số mặt phẳng cùng song song với hai đường thẳng chéo nhau."
        }
      },
      {
        id: "mc-11-12-5",
        num: 5,
        level: "Nhận biết",
        prompt: "Cho đường thẳng $a // (P)$. Khẳng định nào sau đây là <strong>sai</strong>?",
        options: [
          "Đường thẳng $a$ song song với mọi đường thẳng nằm trong $(P)$",
          "Đường thẳng $a$ không có điểm chung với mặt phẳng $(P)$",
          "Trong $(P)$ tồn tại đường thẳng song song với $a$",
          "Nếu $(Q)$ chứa $a$ và cắt $(P)$ theo giao tuyến $b$ thì $b // a$"
        ],
        correctIndex: 0,
        solution: "$a // (P)$ không có nghĩa là $a$ song song với mọi đường trong $(P)$ (trong $(P)$ vẫn có vô số đường chéo với $a$). Do đó câu đầu tiên là khẳng định sai.",
        similarVariation: {
          prompt: "Nếu đường thẳng $d // (\\alpha)$ thì trong $(\\alpha)$ có bao nhiêu đường thẳng song song với $d$?",
          options: ["Vô số đường thẳng", "Duy nhất một đường", "Không có đường nào", "Đúng hai đường"],
          correctIndex: 0,
          solution: "Có vô số đường thẳng song song với $d$ nằm trong $(\\alpha)$."
        }
      }
    ],

    // Dạng 2: 3 câu Đúng/Sai (Thông hiểu - chuẩn 4 ý a, b, c, d)
    part2TrueFalse: [
      {
        id: "tf-11-12-1",
        num: 1,
        level: "Thông hiểu",
        prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của cạnh $SC$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) Đường thẳng $OM$ song song với mặt phẳng $(SAB)$.", isCorrect: true },
          { text: "b) Đường thẳng $OM$ song song với mặt phẳng $(SAD)$.", isCorrect: true },
          { text: "c) Đường thẳng $AB$ song song với mặt phẳng $(SCD)$.", isCorrect: true },
          { text: "d) Đường thẳng $SO$ song song với mặt phẳng $(SCD)$.", isCorrect: false }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Trong $\\triangle SAC$, $O$ là trung điểm $AC$, $M$ là trung điểm $SC$ nên $OM$ là đường trung bình $\\implies OM // SA$. Mà $SA \\subset (SAB) \\implies OM // (SAB)$.</li>
            <li>b) <strong>ĐÚNG:</strong> Tương tự, $OM // SA$ mà $SA \\subset (SAD) \\implies OM // (SAD)$.</li>
            <li>c) <strong>ĐÚNG:</strong> Vì $AB // CD$ mà $CD \\subset (SCD) \\implies AB // (SCD)$.</li>
            <li>d) <strong>SAI:</strong> Đường thẳng $SO$ cắt mặt phẳng $(SCD)$ tại đỉnh $S$.</li>
          </ul>
        `
      },
      {
        id: "tf-11-12-2",
        num: 2,
        level: "Thông hiểu",
        prompt: "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm tam giác $ABD$, $M$ là điểm trên cạnh $BC$ sao cho $MB = 2MC$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) Đường thẳng $MG$ song song với mặt phẳng $(ACD)$.", isCorrect: true },
          { text: "b) Đường thẳng $CD$ song song với mặt phẳng $(ABD)$.", isCorrect: false },
          { text: "c) Tồn tại mặt phẳng qua $CD$ và song song với $AB$.", isCorrect: true },
          { text: "d) Giao tuyến của mặt phẳng $(ACD)$ và mặt phẳng $(BCD)$ là đường thẳng $CD$.", isCorrect: true }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Dùng định lí Ta-lét đảo trong tam giác trung tuyến ta chứng minh được $MG$ song song với một đường trong $(ACD)$.</li>
            <li>b) <strong>SAI:</strong> $CD$ cắt $(ABD)$ tại đỉnh $D$.</li>
            <li>c) <strong>ĐÚNG:</strong> Vì $AB$ và $CD$ chéo nhau nên có duy nhất 1 mặt phẳng chứa $CD$ và song song $AB$.</li>
            <li>d) <strong>ĐÚNG:</strong> Hai mặt phẳng có chung hai đỉnh $C$ và $D$ nên giao tuyến chính là cạnh $CD$.</li>
          </ul>
        `
      },
      {
        id: "tf-11-12-3",
        num: 3,
        level: "Thông hiểu",
        prompt: "Xét tính Đúng/Sai của các khẳng định sau về quan hệ song song trong không gian:",
        items: [
          { text: "a) Nếu đường thẳng $a // (P)$ thì $a$ song song với ít nhất một đường thẳng trong $(P)$.", isCorrect: true },
          { text: "b) Nếu $a // (P)$ và $b // (P)$ thì $a // b$.", isCorrect: false },
          { text: "c) Hai đường thẳng cùng song song với một mặt phẳng thì có thể chéo nhau.", isCorrect: true },
          { text: "d) Nếu đường thẳng $a$ song song với mặt phẳng $(P)$ thì mọi mặt phẳng chứa $a$ đều song song với $(P)$.", isCorrect: false }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Mặt phẳng chứa $a$ cắt $(P)$ cho giao tuyến song song với $a$.</li>
            <li>b) <strong>SAI:</strong> Hai đường thẳng cùng song song một mặt phẳng có thể cắt nhau, song song hoặc chéo nhau.</li>
            <li>c) <strong>ĐÚNG:</strong> Ví dụ hai đường thẳng chéo nhau nằm trên hai mặt đối diện của hình hộp chữ nhật.</li>
            <li>d) <strong>SAI:</strong> Mặt phẳng chứa $a$ có thể cắt $(P)$ theo giao tuyến song song với $a$.</li>
          </ul>
        `
      }
    ],

    // Dạng 3: 2 câu Trả lời ngắn (Toán thực tế - Vận dụng)
    part3ShortAnswer: [
      {
        id: "sa-11-12-1",
        num: 1,
        level: "Vận dụng",
        prompt: "Một khung thành bóng đá mini có xà ngang $AB = 3\\text{ m}$ đặt song song với mặt sân cỏ nhân tạo ở độ cao $2\\text{ m}$. Cột dọc $AC$ vuông góc với mặt sân. Một người thợ căng một sợi dây giăng từ trung điểm $M$ của xà ngang $AB$ song song với mặt sân đến cột điện chiếu sáng ngoài biên. Khoảng cách ngắn nhất từ bất kì điểm nào trên sợi dây đến mặt cỏ bằng bao nhiêu mét?",
        correctValue: "2",
        acceptableAnswers: ["2", "2m", "2 m", "2.0"],
        unit: "m",
        solution: "Vì sợi dây song song với mặt sân và đi qua điểm $M$ ở độ cao $2\\text{ m}$, nên mọi điểm trên sợi dây đều cách mặt sân cỏ một khoảng cách không đổi bằng chính độ cao của điểm $M$, tức là $2\\text{ m}$.",
        similarVariation: {
          prompt: "Một chiếc bóng đèn thả trần được treo bằng dây cáp nằm ngang song song với mặt sàn nhà ở độ cao $2{,}8\\text{ m}$. Khoảng cách từ bóng đèn đến mặt sàn bằng bao nhiêu mét?",
          correctValue: "2.8",
          acceptableAnswers: ["2.8", "2,8", "2.8m"],
          solution: "Khoảng cách bằng $2{,}8\\text{ m}$."
        }
      },
      {
        id: "sa-11-12-2",
        num: 2,
        level: "Vận dụng",
        prompt: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Một mặt phẳng $(\\alpha)$ song song với cạnh $AB$ và cắt các cạnh $SA, SB, SC, SD$ lần lượt tại bốn điểm $M, N, P, Q$. Tứ giác $MNPQ$ là hình gì (nếu là hình thang thì nhập số 1, nếu là hình bình hành thì nhập số 2)?",
        correctValue: "1",
        acceptableAnswers: ["1", "Hình thang"],
        unit: "",
        solution: "Vì $(\\alpha) // AB$ nên giao tuyến của $(\\alpha)$ với $(SAB)$ là $MN // AB$. Giao tuyến của $(\\alpha)$ với $(SCD)$ là $PQ // CD$. Vì $ABCD$ là hình bình hành nên $AB // CD \\implies MN // PQ$. Do đó tứ giác $MNPQ$ có một cặp cạnh đối song song $MN // PQ$, kết luận nó là hình thang (nhập số 1).",
        similarVariation: {
          prompt: "Nếu ngoài điều kiện song song với $AB$, mặt phẳng $(\\alpha)$ còn song song thêm với cạnh $BC$, thì thiết diện $MNPQ$ thu được là hình gì (nhập 1 nếu là hình thang, nhập 2 nếu là hình bình hành)?",
          correctValue: "2",
          acceptableAnswers: ["2", "Hình bình hành"],
          solution: "Khi song song với cả 2 cạnh đáy kề nhau thì cả 2 cặp cạnh đối đều song song $\\implies$ hình bình hành (nhập số 2)."
        }
      }
    ]
  }
};

// Tự động gán vào Window để Engine nhận diện
if (typeof window !== "undefined") {
  window.LESSON_11_12_DATA = window.LESSON_11_C4_B12_DATA;
}
