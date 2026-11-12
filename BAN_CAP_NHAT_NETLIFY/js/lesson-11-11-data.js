/**
 * BÀI HỌC SỐ: BÀI 11. HAI ĐƯỜNG THẲNG SONG SONG (TOÁN 11 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - Phần I: Lời chào của Thầy Sáng + Nút Voice AI vàng đồng, chỉnh tốc độ
 * - Phần II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 78 + Voice AI
 * - Phần III: Tiến trình bài học (Dẫn nhập cầu vượt đa tầng Hà Nội, 2 mục lý thuyết đóng khung nguyên văn SGK, 
 *             TikZ SVG 3D không gian nét đứt/liền chuẩn mực, POI checkpoints giữa & cuối, Mẹo nhớ, Ví dụ tự luận ẩn/hiện, Chốt bài học)
 * - Phần IV: Bài tập trắc nghiệm tổng hợp chuẩn cấu trúc thi mới 2025:
 *             + 5 câu trắc nghiệm nhiều lựa chọn (Dễ - Nhận biết)
 *             + 3 câu trắc nghiệm Đúng/Sai 4 ý (Thông hiểu)
 *             + 2 câu trả lời ngắn thực tế (Vận dụng)
 *             + Kèm nút "Lời giải chi tiết" và nút "Bài toán tương tự" đổi số tự động
 */

window.LESSON_11_C4_B11_DATA = {
  id: "11-c4-b11",
  number: "Bài 11",
  title: "Hai đường thẳng song song",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioScript: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioUrl: "assets/audio/b11_11_welcome.mp3",
    buttonLabel: "Lời chào của thầy Sáng",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 78)
  // =========================================================================
  learningGoals: [
    "Nhận biết và phân biệt chính xác 4 vị trí tương đối của hai đường thẳng trong không gian: cắt nhau, song song, trùng nhau và chéo nhau.",
    "Nắm vững định nghĩa hai đường thẳng song song và tính chất cơ bản: tính duy nhất qua một điểm nằm ngoài đường thẳng và tính chất bắc cầu.",
    "Làm chủ Định lí về ba đường giao tuyến (đồng quy hoặc đôi một song song) và hệ quả để tìm giao tuyến trong các bài toán hình chóp, lăng trụ.",
    "Vận dụng kiến thức quan hệ song song và chéo nhau để mô tả, giải thích chính xác các công trình kiến trúc thực tế (hệ thống cầu vượt giao thông, khung nhà thép)."
  ],
  goalsAudioUrl: "assets/audio/b11_11_goals.mp3",
  goalsButtonLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================
  // 1. Bài toán dẫn nhập
  hook: {
    title: "Bài toán kiến trúc giao thông đa tầng tại các nút giao hiện đại",
    story: "Để giải quyết vấn đề ùn tắc giao thông tại các đô thị lớn như Hà Nội và TP. Hồ Chí Minh, các kỹ sư cầu đường đã thiết kế các nút giao thông đa tầng hiện đại: tầng mặt đất dành cho đường gom và xe máy, tầng giữa là cầu vượt thép và đường vành đai trên cao, và trên cùng là tuyến đường sắt đô thị (metro). Quan sát từ trên cao, ta thấy tuyến đường vành đai và tuyến đường sắt metro băng qua nhau nhưng các phương tiện giao thông vẫn di chuyển với tốc độ tối đa mà không bao giờ va chạm hay giao cắt. Trong hình học phẳng, hai đường thẳng không song song thì chắc chắn phải cắt nhau tại một điểm. Vậy trong không gian ba chiều, mối quan hệ giữa hai tuyến đường trên được mô tả bằng khái niệm toán học nào? Đó chính là hiện tượng hai đường thẳng chéo nhau!",
    illustration: "",
    illustrationCaption: "Nút giao thông khác mức đa tầng: Minh họa thực tế của hai đường thẳng chéo nhau trong không gian",
    question: "Tại sao tuyến đường sắt trên cao và tuyến đường bộ bên dưới dù nhìn từ trên thẳng đứng xuống thấy 'giao nhau' nhưng thực tế không hề có điểm chung nào? Điều kiện để hai đường thẳng cắt nhau trong không gian là gì?",
    audioUrl: "assets/audio/b11_11_hook.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    bridge: "Hãy cùng Thầy Sáng bước vào thế giới hình học không gian 3 chiều để khám phá ngay sau đây!"
  },

  // 2. Trình phát bài giảng tương tác tích hợp POI
  interactiveAudio: {
    title: "Bài giảng tương tác: Hai đường thẳng song song & chéo nhau",
    audioUrl: "assets/audio/b11_11_interactive_lecture.mp3",
    duration: 72,
    timestamps: [
      {
        id: "poi-11-11-1",
        time: 28,
        title: "Điểm dừng 1: Vị trí tương đối của hai đường thẳng",
        question: "Trong không gian, hai đường thẳng không có điểm chung thì:",
        options: [
          "Có thể song song hoặc chéo nhau",
          "Chắc chắn phải song song với nhau",
          "Chắc chắn phải chéo nhau",
          "Cùng nằm trong một mặt phẳng"
        ],
        correctIndex: 0,
        hint: "Hãy nhớ đến hai đường ray xe lửa (song song) và tuyến cầu vượt bắc qua đường bên dưới (chéo nhau).",
        explain: "Rất xuất sắc! Trong không gian, hai đường thẳng không có điểm chung có thể song song (nếu đồng phẳng) hoặc chéo nhau (nếu không đồng phẳng)."
      },
      {
        id: "poi-11-11-2",
        time: 58,
        title: "Điểm dừng 2: Định lí ba đường giao tuyến",
        question: "Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt, thì ba giao tuyến đó:",
        options: [
          "Đồng quy hoặc đôi một song song với nhau",
          "Luôn luôn đồng quy tại một điểm",
          "Luôn luôn đôi một song song",
          "Cắt nhau tạo thành một tam giác"
        ],
        correctIndex: 0,
        hint: "Nhớ hình ảnh mái nhà (ba giao tuyến song song) hoặc đỉnh chóp (ba giao tuyến đồng quy).",
        explain: "Chính xác tuyệt đối! Định lí SGK trang 81 khẳng định: Ba giao tuyến phân biệt đó chỉ có thể đồng quy hoặc đôi một song song."
      }
    ]
  },

  // 3. Triển khai các mục lý thuyết chuẩn SGK
  sections: [
    {
      num: "1",
      title: "VỊ TRÍ TƯƠNG ĐỐI CỦA HAI ĐƯỜNG THẲNG",
      subsections: [
        {
          key: "1a",
          title: "Khái niệm hai đường thẳng đồng phẳng và chéo nhau",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 11 - Trang 78:</div>
              <p>Cho hai đường thẳng $a$ và $b$ trong không gian.</p>
              <ul class="sgk-box-list">
                <li>Nếu $a$ và $b$ cùng nằm trong một mặt phẳng thì ta nói $a$ và $b$ <strong>đồng phẳng</strong>. Khi đó, $a$ và $b$ có thể <em>cắt nhau, song song với nhau hoặc trùng nhau</em>.</li>
                <li>Nếu $a$ và $b$ không cùng nằm trong bất kì mặt phẳng nào thì ta nói $a$ và $b$ <strong>chéo nhau</strong>. Khi đó, ta cũng nói $a$ chéo với $b$, hoặc $b$ chéo với $a$.</li>
              </ul>
            </div>

            <div class="theory-details-wrap" style="margin-top: 14px;">
              <div class="sgk-framed-box" style="background: #f8fafc; border-left-color: #64748b;">
                <div class="sgk-box-tag"><i class="fa-solid fa-circle-info"></i> Nhận xét quan trọng (SGK trang 79):</div>
                <ul class="sgk-box-list" style="color: #334155;">
                  <li>Hai đường thẳng song song là hai đường thẳng đồng phẳng và không có điểm chung.</li>
                  <li>Có đúng một mặt phẳng chứa hai đường thẳng song song.</li>
                </ul>
              </div>
            </div>

            <!-- TikZ SVG Minh họa 4 Vị trí tương đối -->
            <div class="tikz-svg-card">
              <div class="tikz-svg-title"><i class="fa-solid fa-cubes"></i> Hình học không gian trực quan: 4 vị trí tương đối của hai đường thẳng</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="520" height="190" viewBox="0 0 520 190" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <!-- H1: Cắt nhau -->
                  <g transform="translate(10, 10)">
                    <polygon points="10,80 90,80 120,20 40,20" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
                    <text x="18" y="72" font-family="sans-serif" font-size="11" fill="#64748b">α</text>
                    <line x1="20" y1="30" x2="105" y2="70" stroke="#0284c7" stroke-width="2"/>
                    <line x1="30" y1="70" x2="95" y2="25" stroke="#0284c7" stroke-width="2"/>
                    <circle cx="62" cy="50" r="3" fill="#dc2626"/>
                    <text x="65" y="46" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">M</text>
                    <text x="50" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">a cắt b tại M</text>
                  </g>

                  <!-- H2: Song song -->
                  <g transform="translate(140, 10)">
                    <polygon points="10,80 90,80 120,20 40,20" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
                    <text x="18" y="72" font-family="sans-serif" font-size="11" fill="#64748b">α</text>
                    <line x1="25" y1="40" x2="105" y2="40" stroke="#16a34a" stroke-width="2"/>
                    <text x="108" y="44" font-family="sans-serif" font-size="11" fill="#16a34a">a</text>
                    <line x1="15" y1="62" x2="95" y2="62" stroke="#16a34a" stroke-width="2"/>
                    <text x="98" y="66" font-family="sans-serif" font-size="11" fill="#16a34a">b</text>
                    <text x="65" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">a // b (Đồng phẳng)</text>
                  </g>

                  <!-- H3: Trùng nhau -->
                  <g transform="translate(270, 10)">
                    <polygon points="10,80 90,80 120,20 40,20" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
                    <text x="18" y="72" font-family="sans-serif" font-size="11" fill="#64748b">α</text>
                    <line x1="20" y1="50" x2="105" y2="50" stroke="#7c3aed" stroke-width="2.5"/>
                    <text x="108" y="54" font-family="sans-serif" font-size="11" fill="#7c3aed">a ≡ b</text>
                    <text x="65" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6d28d9" text-anchor="middle">a trùng b</text>
                  </g>

                  <!-- H4: Chéo nhau -->
                  <g transform="translate(400, 10)">
                    <polygon points="10,80 90,80 120,20 40,20" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
                    <text x="18" y="72" font-family="sans-serif" font-size="11" fill="#64748b">α</text>
                    <!-- Đường b nằm trong mp -->
                    <line x1="20" y1="60" x2="95" y2="60" stroke="#ea580c" stroke-width="2"/>
                    <text x="98" y="64" font-family="sans-serif" font-size="11" fill="#ea580c">b</text>
                    <!-- Đường a đâm xuyên qua điểm I -->
                    <line x1="60" y1="10" x2="60" y2="45" stroke="#dc2626" stroke-width="2"/>
                    <circle cx="60" cy="45" r="2.5" fill="#dc2626"/>
                    <text x="64" y="44" font-family="sans-serif" font-size="10" fill="#dc2626">I</text>
                    <line x1="60" y1="45" x2="60" y2="65" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
                    <line x1="60" y1="65" x2="60" y2="85" stroke="#dc2626" stroke-width="2"/>
                    <text x="64" y="20" font-family="sans-serif" font-size="11" fill="#dc2626">a</text>
                    <text x="65" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">a và b chéo nhau</text>
                  </g>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình 4.14 & 4.15 SGK: Ba vị trí đồng phẳng (cắt, song song, trùng) và trường hợp không đồng phẳng (chéo nhau)</em>
              </div>
            </div>
          `,
          audioUrl: "assets/audio/b11_11_sec1a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-11-11-1a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Nhận diện hai đường thẳng chéo nhau",
              question: "Hai đường thẳng $a$ và $b$ được gọi là chéo nhau khi nào?",
              options: [
                "Khi chúng không cùng nằm trong bất kì mặt phẳng nào",
                "Khi chúng không có điểm chung",
                "Khi chúng vuông góc với nhau",
                "Khi chúng nằm trong hai mặt phẳng song song"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất chính xác! 'Chéo nhau' đồng nghĩa với 'không đồng phẳng', tức là không tồn tại bất kì mặt phẳng nào chứa cả hai đường thẳng đó.",
              feedbackWrong: "Lưu ý bẫy kinh điển: 'Không có điểm chung' chưa chắc đã chéo nhau, vì hai đường thẳng song song cũng không có điểm chung!"
            },
            {
              id: "cp-11-11-1a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Cạnh chéo nhau trong tứ diện",
              question: "Cho tứ diện $ABCD$. Cặp cạnh nào sau đây là hai đường thẳng chéo nhau?",
              options: [
                "$AB$ và $CD$",
                "$AB$ và $AC$",
                "$BC$ và $CD$",
                "$AD$ và $BD$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Tuyệt vời! Trong tứ diện $ABCD$, ba cặp cạnh đối diện $(AB, CD), (AC, BD), (AD, BC)$ luôn luôn chéo nhau đôi một.",
              feedbackWrong: "Chú ý: Các cặp cạnh có chung một đỉnh (như $AB$ và $AC$ chung đỉnh $A$) thì luôn cắt nhau, không thể chéo nhau."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về Chéo Nhau vs Song Song",
            content: "Để không bao giờ nhầm lẫn, các em nhớ câu khẩu quyết: <strong>'Muốn song song, bắt buộc phải chung nhà (cùng một mặt phẳng). Không chung nhà mà không đụng nhau, đích thị là chéo nhau!'</strong>."
          },

          workedExample: {
            title: "Ví dụ 2 (SGK trang 80) - Chứng minh hai đường thẳng chéo nhau trong tứ diện",
            problem: "Cho hình tứ diện $ABCD$. Hai đường thẳng $AB$ và $CD$ có chéo nhau hay không? Hãy chỉ ra các cặp đường thẳng chéo nhau có trong hình tứ diện đó.",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <p>1. <strong>Chứng minh $AB$ và $CD$ chéo nhau bằng phản chứng:</strong></p>
              <p>Giả sử hai đường thẳng $AB$ và $CD$ không chéo nhau. Khi đó, $AB$ và $CD$ cùng thuộc một mặt phẳng $(\\alpha)$.</p>
              <p>Suy ra bốn điểm $A, B, C, D$ cùng nằm trong mặt phẳng $(\\alpha)$. Điều này mâu thuẫn với giả thiết $ABCD$ là một hình tứ diện (bốn đỉnh của tứ diện không bao giờ đồng phẳng).</p>
              <p>Vậy hai đường thẳng $AB$ và $CD$ bắt buộc phải chéo nhau.</p>
              <p>2. <strong>Các cặp đường thẳng chéo nhau trong tứ diện $ABCD$:</strong></p>
              <p>Lập luận hoàn toàn tương tự, tứ diện $ABCD$ có đúng 3 cặp cạnh đối diện chéo nhau từng đôi một:</p>
              <ul>
                <li>$AB$ và $CD$;</li>
                <li>$AC$ và $BD$;</li>
                <li>$AD$ và $BC$.</li>
              </ul>
            `,
            teacherGuidance: "Mẹo tư duy nhanh: Tứ diện có 6 cạnh thì cứ 2 cạnh không có chữ cái nào chung sẽ tạo thành một cặp đường thẳng chéo nhau!"
          }
        }
      ]
    },
    {
      num: "2",
      title: "TÍNH CHẤT CỦA HAI ĐƯỜNG THẲNG SONG SONG",
      subsections: [
        {
          key: "2a",
          title: "Các tính chất cơ bản và Định lí về ba đường giao tuyến",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> Ghi nhớ nguyên văn SGK Toán 11 - Trang 80:</div>
              <ul class="sgk-box-list">
                <li>Trong không gian, qua một điểm không nằm trên đường thẳng cho trước, có đúng một đường thẳng song song với đường thẳng đã cho.</li>
                <li>Trong không gian, hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau.</li>
              </ul>
            </div>

            <div class="sgk-framed-box" style="margin-top: 14px; background: #fefce8; border-left-color: #eab308;">
              <div class="sgk-box-tag" style="color: #854d0e;"><i class="fa-solid fa-star"></i> Định lí về ba đường giao tuyến (SGK trang 81):</div>
              <p style="font-weight: 500; color: #713f12;">
                Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đó <strong>đồng quy hoặc đôi một song song với nhau</strong>.
              </p>
            </div>

            <div class="theory-details-wrap" style="margin-top: 14px;">
              <p><strong>Hệ quả ứng dụng tìm giao tuyến (SGK trang 81):</strong></p>
              <p>Nếu hai mặt phẳng chứa hai đường thẳng song song với nhau thì giao tuyến của chúng (nếu có) <em>song song với hai đường thẳng đó hoặc trùng với một trong hai đường thẳng đó</em>.</p>
              <p>$$\\begin{cases} d_1 \\subset (P), \\ d_2 \\subset (Q) \\\\ d_1 // d_2 \\\\ (P) \\cap (Q) = d \\end{cases} \\implies d // d_1 // d_2 \\quad (\\text{hoặc } d \\equiv d_1, d \\equiv d_2).$$</p>
            </div>

            <!-- TikZ SVG Ba đường giao tuyến -->
            <div class="tikz-svg-card">
              <div class="tikz-svg-title"><i class="fa-solid fa-project-diagram"></i> Mô hình không gian 3D: Định lí ba đường giao tuyến</div>
              <div class="tikz-svg-container" style="text-align: center; padding: 15px 0;">
                <svg width="480" height="180" viewBox="0 0 480 180" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <!-- Trường hợp đôi một song song (lăng trụ) -->
                  <g transform="translate(30, 10)">
                    <polygon points="30,40 100,20 170,40 100,60" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
                    <line x1="30" y1="40" x2="30" y2="130" stroke="#0284c7" stroke-width="2.5"/>
                    <line x1="170" y1="40" x2="170" y2="130" stroke="#0284c7" stroke-width="2.5"/>
                    <line x1="100" y1="60" x2="100" y2="150" stroke="#0284c7" stroke-width="2.5"/>
                    <text x="20" y="85" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">a</text>
                    <text x="175" y="85" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">b</text>
                    <text x="105" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">c</text>
                    <text x="100" y="170" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Trường hợp: a // b // c</text>
                  </g>

                  <!-- Trường hợp đồng quy (chóp) -->
                  <g transform="translate(260, 10)">
                    <circle cx="100" cy="20" r="4" fill="#dc2626"/>
                    <text x="96" y="12" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">S</text>
                    <line x1="100" y1="20" x2="30" y2="130" stroke="#dc2626" stroke-width="2.5"/>
                    <line x1="100" y1="20" x2="170" y2="130" stroke="#dc2626" stroke-width="2.5"/>
                    <line x1="100" y1="20" x2="100" y2="140" stroke="#dc2626" stroke-width="2.5"/>
                    <text x="50" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">a</text>
                    <text x="150" y="80" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">b</text>
                    <text x="105" y="90" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">c</text>
                    <text x="100" y="170" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">Trường hợp: a, b, c đồng quy tại S</text>
                  </g>
                </svg>
              </div>
              <div class="tikz-caption" style="text-align: center; color: #475569; font-size: 0.9rem;">
                <em>Hình 4.23 & 4.24 SGK: Hai khả năng của ba đường giao tuyến (đồng quy hoặc song song)</em>
              </div>
            </div>
          `,
          audioUrl: "assets/audio/b11_11_sec2a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

          checkpoints: [
            {
              id: "cp-11-11-2a-mid",
              triggerRatio: 0.5,
              title: "Tương tác giữa đoạn: Tính chất bắc cầu của quan hệ song song",
              question: "Trong không gian, cho ba đường thẳng phân biệt $a, b, c$. Nếu $a // c$ và $b // c$ thì kết luận nào sau đây là ĐÚNG?",
              options: [
                "$a // b$",
                "$a$ và $b$ chéo nhau",
                "$a$ cắt $b$",
                "$a$ vuông góc với $b$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Chính xác! Tính chất bắc cầu trong không gian: Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau.",
              feedbackWrong: "Chú ý: Đây là định lí tính chất cơ bản được phát biểu trang 80 SGK."
            },
            {
              id: "cp-11-11-2a-end",
              triggerRatio: 1.0,
              title: "Tương tác cuối đoạn: Ứng dụng hệ quả giao tuyến",
              question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là đường thẳng đi qua $S$ và:",
              options: [
                "Song song với $AB$ và $CD$",
                "Cắt cạnh $AB$",
                "Vuông góc với mặt phẳng đáy",
                "Trùng với đường chéo $AC$"
              ],
              correctIndex: 0,
              feedbackCorrect: "Rất xuất sắc! Vì $(SAB)$ chứa $AB$, $(SCD)$ chứa $CD$, mà $AB // CD$ và có điểm chung $S$, nên giao tuyến là đường thẳng $d$ qua $S$ và song song với $AB, CD$.",
              feedbackWrong: "Áp dụng hệ quả trang 81: Hai mặt phẳng lần lượt chứa hai đường thẳng song song thì giao tuyến của chúng phải song song với hai đường thẳng đó."
            }
          ],

          memoryTip: {
            title: "Mẹo nhớ của Thầy Sáng về Giao Tuyến Song Song",
            content: "Để tìm giao tuyến của 2 mặt phẳng chứa 2 đường thẳng song song: <strong>'Điểm chung đã có sẵn, kẻ đường thẳng song song với cặp cạnh đáy là xong ngay!'</strong>. Không cần tìm điểm chung thứ hai."
          },

          workedExample: {
            title: "Ví dụ 4 (SGK trang 82) - Xác định giao tuyến của hai mặt phẳng",
            problem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Xác định giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$.",
            solution: `
              <p><strong>Lời giải chi tiết:</strong></p>
              <p>Xét hai mặt phẳng $(SAB)$ và $(SCD)$:</p>
              <ul>
                <li>Hai mặt phẳng có điểm chung là đỉnh $S$.</li>
                <li>Mặt phẳng $(SAB)$ chứa đường thẳng $AB$.</li>
                <li>Mặt phẳng $(SCD)$ chứa đường thẳng $CD$.</li>
                <li>Mặt khác, $ABCD$ là hình bình hành nên $AB // CD$.</li>
              </ul>
              <p>Theo hệ quả của Định lí về ba đường giao tuyến, giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng $d$ đi qua điểm chung $S$ và song song với cả $AB$ và $CD$.</p>
              <p><strong>Kết luận:</strong> $(SAB) \\cap (SCD) = d$ với $d$ qua $S$ và $d // AB // CD$.</p>
            `,
            teacherGuidance: "Đây là dạng toán xuất hiện với tần suất 100% trong các đề kiểm tra hình học không gian 11. Các em cần trình bày đủ 4 bước như trên để đạt điểm tối đa."
          }
        }
      ]
    }
  ],

  // 4. Chốt bài học
  realworldWrapup: {
    title: "GIẢI QUYẾT BÀI TOÁN DẪN NHẬP NÚT GIAO THÔNG ĐA TẦNG",
    recap: "Đầu bài học, ta đã quan sát hình ảnh nút giao thông đa tầng tại Hà Nội: Tại sao tuyến đường vành đai 3 trên cao và tuyến metro trên cao băng qua nhau nhưng không hề giao cắt va chạm?",
    solution: `
      <p><strong>Lời giải chi tiết chốt vấn đề của Thầy Sáng:</strong></p>
      <p>1. <strong>Mô hình hóa hình học:</strong> Tuyến đường vành đai được xem như đường thẳng $a$ nằm trong mặt phẳng nằm ngang $(P)$ ở cao độ $h_1 = 15\\text{ m}$. Tuyến đường sắt metro được xem như đường thẳng $b$ nằm trong mặt phẳng nằm ngang $(Q)$ ở cao độ $h_2 = 25\\text{ m}$.</p>
      <p>2. <strong>Bản chất quan hệ không gian:</strong></p>
      <ul>
        <li>Vì $h_1 \\neq h_2$ nên hai mặt phẳng $(P)$ và $(Q)$ là hai mặt phẳng song song phân biệt.</li>
        <li>Đường thẳng $a$ thuộc $(P)$, đường thẳng $b$ thuộc $(Q)$ và hướng đi của chúng không song song với nhau. Do đó, $a$ và $b$ <strong>không cùng thuộc bất kì mặt phẳng nào</strong>.</li>
        <li>Theo định nghĩa SGK Toán 11 trang 78: Đường thẳng $a$ và đường thẳng $b$ <strong>chéo nhau trong không gian</strong>!</li>
      </ul>
      <p>Chính nhờ tính chất chéo nhau trong không gian ba chiều mà các dòng phương tiện lưu thông an toàn tuyệt đối trên các cao độ khác nhau mà không bao giờ xung đột điểm giao!</p>
    `,
    audioUrl: "assets/audio/b11_11_wrapup.mp3",
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
        id: "mc-11-11-1",
        num: 1,
        level: "Nhận biết",
        prompt: "Trong không gian, hai đường thẳng được gọi là <strong>song song</strong> với nhau nếu:",
        options: [
          "Chúng cùng nằm trong một mặt phẳng và không có điểm chung.",
          "Chúng không có điểm chung.",
          "Chúng không cắt nhau.",
          "Chúng cùng nằm trong một mặt phẳng."
        ],
        correctIndex: 0,
        solution: "Theo định nghĩa chuẩn SGK trang 79: Hai đường thẳng song song trong không gian là hai đường thẳng đồng phẳng (cùng nằm trong một mặt phẳng) và không có điểm chung.",
        similarVariation: {
          prompt: "Khẳng định nào sau đây là định nghĩa của hai đường thẳng chéo nhau?",
          options: [
            "Hai đường thẳng không cùng nằm trong bất kì mặt phẳng nào.",
            "Hai đường thẳng không có điểm chung.",
            "Hai đường thẳng cắt nhau.",
            "Hai đường thẳng vuông góc với nhau."
          ],
          correctIndex: 0,
          solution: "Chéo nhau nghĩa là không đồng phẳng."
        }
      },
      {
        id: "mc-11-11-2",
        num: 2,
        level: "Nhận biết",
        prompt: "Cho điểm $M$ không nằm trên đường thẳng $d$. Có bao nhiêu đường thẳng đi qua $M$ và song song với $d$?",
        options: [
          "1",
          "2",
          "Vô số",
          "Không có"
        ],
        correctIndex: 0,
        solution: "Theo tính chất SGK trang 80: 'Trong không gian, qua một điểm không nằm trên đường thẳng cho trước, có đúng một đường thẳng song song với đường thẳng đã cho'.",
        similarVariation: {
          prompt: "Qua điểm $A$ nằm ngoài đường thẳng $\\Delta$, số đường thẳng song song với $\\Delta$ là:",
          options: ["Duy nhất một", "Vô số", "Hai", "Không xác định"],
          correctIndex: 0,
          solution: "Chỉ có duy nhất 1 đường thẳng."
        }
      },
      {
        id: "mc-11-11-3",
        num: 3,
        level: "Nhận biết",
        prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB // CD$). Số cặp đường thẳng chéo nhau tạo bởi các cạnh của hình chóp là đại lượng nào sau đây?",
        options: [
          "Cạnh bên và cạnh đáy không chung đỉnh (ví dụ $SA$ và $BC$ chéo nhau)",
          "Hai cạnh đáy $AB$ và $CD$ chéo nhau",
          "Hai cạnh bên $SA$ và $SC$ chéo nhau",
          "Cạnh $SB$ và $BC$ chéo nhau"
        ],
        correctIndex: 0,
        solution: "$SA$ và $BC$ không đồng phẳng và không cắt nhau nên chúng chéo nhau.",
        similarVariation: {
          prompt: "Trong hình chóp $S.ABCD$, cặp đường thẳng nào sau đây chắc chắn cắt nhau?",
          options: ["$AC$ và $BD$", "$SA$ và $BC$", "$SB$ và $CD$", "$AB$ và $SC$"],
          correctIndex: 0,
          solution: "$AC$ và $BD$ là 2 đường chéo của đáy phẳng nên cắt nhau tại giao điểm của chúng."
        }
      },
      {
        id: "mc-11-11-4",
        num: 4,
        level: "Nhận biết",
        prompt: "Nếu hai mặt phẳng phân biệt $(P)$ và $(Q)$ cắt nhau theo giao tuyến $d$, và $(P), (Q)$ lần lượt chứa hai đường thẳng song song $a$ và $b$ thì:",
        options: [
          "Giao tuyến $d$ song song với $a$ và $b$ (hoặc trùng với một trong hai đường)",
          "Giao tuyến $d$ vuông góc với $a$",
          "Giao tuyến $d$ chéo với $a$",
          "Giao tuyến $d$ cắt cả $a$ và $b$"
        ],
        correctIndex: 0,
        solution: "Theo hệ quả định lí ba đường giao tuyến SGK trang 81: Giao tuyến $d // a // b$.",
        similarVariation: {
          prompt: "Khi hai mặt phẳng chứa hai đường thẳng song song cắt nhau, phương của giao tuyến sẽ:",
          options: ["Cùng phương song song với hai đường thẳng đó", "Vuông góc", "Chéo nhau", "Trùng với đường thứ ba"],
          correctIndex: 0,
          solution: "Giao tuyến song song với cả hai đường thẳng."
        }
      },
      {
        id: "mc-11-11-5",
        num: 5,
        level: "Nhận biết",
        prompt: "Cho tứ diện $ABCD$. Cặp cạnh đối diện nào sau đây là hai đường thẳng chéo nhau?",
        options: [
          "$AC$ và $BD$",
          "$AB$ và $BC$",
          "$BC$ và $CD$",
          "$AD$ và $AC$"
        ],
        correctIndex: 0,
        solution: "Trong tứ diện $ABCD$, hai cạnh $AC$ và $BD$ không có đỉnh chung nên là hai đường chéo nhau.",
        similarVariation: {
          prompt: "Trong tứ diện $S.ABC$, đường thẳng chéo với cạnh $SA$ là:",
          options: ["$BC$", "$AB$", "$AC$", "$SB$"],
          correctIndex: 0,
          solution: "Cạnh đối diện không chung đỉnh là $BC$."
        }
      }
    ],

    // Dạng 2: 3 câu Đúng/Sai (Thông hiểu - chuẩn 4 ý a, b, c, d)
    part2TrueFalse: [
      {
        id: "tf-11-11-1",
        num: 1,
        level: "Thông hiểu",
        prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SB$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) Đường thẳng $MN$ song song với đường thẳng $AB$.", isCorrect: true },
          { text: "b) Đường thẳng $MN$ song song với đường thẳng $CD$.", isCorrect: true },
          { text: "c) Đường thẳng $MN$ và đường thẳng $SC$ là hai đường thẳng cắt nhau.", isCorrect: false },
          { text: "d) Bốn điểm $M, N, C, D$ cùng thuộc một mặt phẳng.", isCorrect: true }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Trong tam giác $SAB$, $MN$ là đường trung bình nên $MN // AB$.</li>
            <li>b) <strong>ĐÚNG:</strong> Vì $MN // AB$ mà $AB // CD$ (do $ABCD$ là hình bình hành), theo tính chất bắc cầu suy ra $MN // CD$.</li>
            <li>c) <strong>SAI:</strong> $MN // (ABCD)$ còn $SC$ cắt đáy tại $C$, $MN$ và $SC$ không đồng phẳng nên chúng chéo nhau.</li>
            <li>d) <strong>ĐÚNG:</strong> Vì $MN // CD$ nên tồn tại duy nhất một mặt phẳng chứa cả hai đường thẳng song song $MN$ và $CD$, tức tứ giác $MNCD$ đồng phẳng.</li>
          </ul>
        `
      },
      {
        id: "tf-11-11-2",
        num: 2,
        level: "Thông hiểu",
        prompt: "Cho tứ diện $ABCD$. Gọi $I, J$ lần lượt là trung điểm của $AB$ và $CD$. Gọi $M$ là một điểm thuộc đoạn $BC$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) Đường thẳng $AB$ và đường thẳng $CD$ chéo nhau.", isCorrect: true },
          { text: "b) Hai đường thẳng $IJ$ và $AB$ cắt nhau.", isCorrect: true },
          { text: "c) Hai đường thẳng $AM$ và $CD$ chéo nhau khi $M$ không trùng với $B$ và $C$.", isCorrect: true },
          { text: "d) Tồn tại mặt phẳng chứa cả 3 đường thẳng $AB, CD$ và $IJ$.", isCorrect: false }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Hai cạnh đối trong tứ diện luôn chéo nhau.</li>
            <li>b) <strong>ĐÚNG:</strong> $I$ là trung điểm $AB$ nên $I$ nằm trên đường thẳng $AB$, do đó $IJ$ và $AB$ cắt nhau tại điểm $I$.</li>
            <li>c) <strong>ĐÚNG:</strong> Nếu $M$ nằm giữa $B$ và $C$ thì $AM$ thuộc $(ABC)$, $CD$ cắt $(ABC)$ tại $C$ không thuộc $AM$, nên $AM$ và $CD$ chéo nhau.</li>
            <li>d) <strong>SAI:</strong> Nếu có mặt phẳng chứa cả $AB$ và $CD$ thì 4 điểm $A, B, C, D$ đồng phẳng, mâu thuẫn định nghĩa tứ diện.</li>
          </ul>
        `
      },
      {
        id: "tf-11-11-3",
        num: 3,
        level: "Thông hiểu",
        prompt: "Trong không gian, cho ba đường thẳng phân biệt $a, b, c$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          { text: "a) Nếu $a // b$ và $b // c$ thì $a // c$.", isCorrect: true },
          { text: "b) Nếu $a$ cắt $b$ và $b$ cắt $c$ thì $a$ cắt $c$.", isCorrect: false },
          { text: "c) Nếu $a$ chéo $b$ và $b$ chéo $c$ thì $a$ chéo $c$.", isCorrect: false },
          { text: "d) Nếu $a // b$ và $c$ cắt $a$ thì $c$ bắt buộc phải cắt $b$.", isCorrect: false }
        ],
        solution: `
          <ul>
            <li>a) <strong>ĐÚNG:</strong> Đây là tính chất bắc cầu cơ bản của quan hệ song song trong không gian.</li>
            <li>b) <strong>SAI:</strong> Quan hệ cắt nhau không có tính chất bắc cầu (ví dụ 3 cạnh $SA, SB, SC$ đôi một cắt nhau hoặc $a // c$).</li>
            <li>c) <strong>SAI:</strong> Quan hệ chéo nhau không có tính chất bắc cầu (hoàn toàn có thể xảy ra $a // c$).</li>
            <li>d) <strong>SAI:</strong> Đường thẳng $c$ có thể chéo với $b$ (ví dụ trong hình hộp).</li>
          </ul>
        `
      }
    ],

    // Dạng 3: 2 câu Trả lời ngắn (Toán thực tế - Vận dụng)
    part3ShortAnswer: [
      {
        id: "sa-11-11-1",
        num: 1,
        level: "Vận dụng",
        prompt: "Một khung nhà xưởng hình hộp chữ nhật có 12 thanh xà bằng thép tương ứng với 12 cạnh của hình hộp chữ nhật. Hỏi có bao nhiêu cặp thanh xà đôi một chéo nhau và vuông góc với nhau trong không gian?",
        correctValue: "24",
        acceptableAnswers: ["24"],
        unit: "cặp",
        solution: "Hình hộp chữ nhật có 3 nhóm cạnh song song theo 3 kích thước: 4 cạnh chiều dài, 4 cạnh chiều rộng, 4 cạnh chiều cao. Mỗi thanh chiều dài chéo nhau với 2 thanh chiều rộng (tạo thành 4 x 2 = 8 cặp) và chéo nhau với 2 thanh chiều cao (tạo thành 4 x 2 = 8 cặp). Mỗi thanh chiều rộng chéo nhau với 2 thanh chiều cao (4 x 2 = 8 cặp). Vì các cạnh này thuộc các phương vuông góc của hình hộp nên chúng đều chéo nhau và vuông góc. Tổng số cặp là 8 + 8 + 8 = 24 cặp.",
        similarVariation: {
          prompt: "Trong hình lập phương $ABCD.A'B'C'D'$, có bao nhiêu đường thẳng chứa các cạnh của hình lập phương chéo nhau với đường thẳng chứa cạnh $AB$?",
          correctValue: "4",
          acceptableAnswers: ["4"],
          solution: "Các cạnh chéo với $AB$ là: $CC', DD', A'D', B'C'$ (gồm 4 cạnh)."
        }
      },
      {
        id: "sa-11-11-2",
        num: 2,
        level: "Vận dụng",
        prompt: "Cho hình chóp tứ giác $S.ABCD$ có đáy là hình bình hành diện tích bằng $40\\text{ cm}^2$. Mặt phẳng $(\\alpha)$ đi qua trung điểm $M$ của $SA$ và song song với mặt phẳng đáy $(ABCD)$, cắt các cạnh $SB, SC, SD$ lần lượt tại $N, P, Q$. Tính diện tích tứ giác $MNPQ$ (đơn vị: $\\text{cm}^2$).",
        correctValue: "10",
        acceptableAnswers: ["10", "10 cm2", "10cm2"],
        unit: "cm²",
        solution: "Vì $(\\alpha) // (ABCD)$ nên các cạnh $MN // AB, NP // BC, PQ // CD, QM // DA$. Vì $M$ là trung điểm $SA$ nên tỉ số đồng dạng giữa tứ giác $MNPQ$ và hình bình hành đáy $ABCD$ là $k = 1/2$. Do đó tỉ số diện tích là $k^2 = (1/2)^2 = 1/4$. Diện tích $S_{MNPQ} = \\frac{1}{4} S_{ABCD} = \\frac{1}{4} \\times 40 = 10\\text{ cm}^2$.",
        similarVariation: {
          prompt: "Nếu diện tích đáy của hình chóp bằng $72\\text{ cm}^2$ và mặt phẳng $(\\alpha)$ cắt các cạnh bên tại trung điểm, diện tích thiết diện thu được bằng bao nhiêu?",
          correctValue: "18",
          acceptableAnswers: ["18", "18 cm2"],
          solution: "$72 / 4 = 18\\text{ cm}^2$."
        }
      }
    ]
  }
};

// Tự động gán vào Window để Engine nhận diện
if (typeof window !== "undefined") {
  window.LESSON_11_11_DATA = window.LESSON_11_C4_B11_DATA;
}

