/**
 * BÀI HỌC SỐ: BÀI 7. CÁC KHÁI NIỆM MỞ ĐẦU (TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - PHẦN I: Lời chào của Thầy Sáng + Nút Voice AI vàng đồng, chỉnh tốc độ
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 46 + Voice AI
 * - PHẦN III: Tiến trình bài học đa phương tiện:
 *             + Tình huống thực tế Ga An Cựu & Hoàng thành Huế, nhiệt độ và gió bão
 *             + Mục 1: Khái niệm vectơ & độ dài - Đồ họa Hình 4.2, 4.3, 4.4 SGK
 *             + Mục 2: Hai vectơ cùng phương & cùng hướng - Đồ họa Hình 4.5, 4.6, 4.7 SGK
 *             + Mục 3: Hai vectơ bằng nhau & vectơ-không - Đồ họa Hình 4.8, 4.9 SGK
 *             + Mục 4: Ba điểm thẳng hàng & ứng dụng lực - Đồ họa Hình 4.10, 4.11 SGK
 *             + Checkpoints POI chấm vàng tương tác tự động dừng và bật câu hỏi
 *             + Chốt kiến thức then chốt & Bảng so sánh
 * - PHẦN IV: Bài tập trắc nghiệm củng cố tương tác chuẩn cấu trúc mới Bộ GD&ĐT:
 *             + 5 câu trắc nghiệm 4 lựa chọn (Hoán vị đáp án C, A, D, B, C phong phú)
 *             + 3 câu trắc nghiệm Đúng/Sai (Đủ 4 ý a, b, c, d)
 *             + 2 câu trả lời ngắn thực tế
 *             + Tích hợp "Lời giải chi tiết ThS. Lương Thanh Sáng" & "Bài toán tương tự" đổi số tự động
 */

window.LESSON_10_C4_B7_DATA = {
  id: "10-c4-b7",
  grade: "10",
  gradeLabel: "Lớp 10",
  chapterId: "c10-4",
  chapter: "Chương IV",
  chapterTitle: "Vectơ",
  number: "Bài 7",
  title: "Các khái niệm mở đầu",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào cả lớp 10 yêu quý! Thầy rất vui khi được đồng hành cùng các em trong bài học số 7: Các khái niệm mở đầu về Vectơ. Đây là bài học mở đầu cho Chương 4, một chương hình học vô cùng quan trọng và thú vị của chương trình Toán lớp 10. Vectơ không chỉ là một công cụ toán học mạnh mẽ mà còn là chiếc cầu nối tuyệt vời giữa Toán học và Vật lý, giúp ta mô tả chính xác vận tốc gió, lực kéo và chuyển động trong không gian. Thầy trò mình cùng bắt đầu tiết học với thật nhiều hứng khởi nhé!",
    audioScript: "Thầy Sáng chào cả lớp 10 yêu quý! Thầy rất vui khi được đồng hành cùng các em trong bài học số 7: Các khái niệm mở đầu về Vectơ. Đây là bài học mở đầu cho Chương 4, một chương hình học vô cùng quan trọng và thú vị của chương trình Toán lớp 10. Vectơ không chỉ là một công cụ toán học mạnh mẽ mà còn là chiếc cầu nối tuyệt vời giữa Toán học và Vật lý, giúp ta mô tả chính xác vận tốc gió, lực kéo và chuyển động trong không gian. Thầy trò mình cùng bắt đầu tiết học với thật nhiều hứng khởi nhé!",
    audioUrl: "assets/audio/b10_7_welcome.mp3",
    buttonLabel: "Nghe thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 46)
  // =========================================================================
  learningGoals: [
    "Nhận biết và hiểu sâu sắc khái niệm vectơ, độ dài vectơ, giá của vectơ và vectơ-không.",
    "Phân biệt chính xác hai vectơ cùng phương, cùng hướng, ngược hướng và hai vectơ bằng nhau.",
    "Vận dụng thành thạo điều kiện hai vectơ cùng phương để giải quyết bài toán chứng minh ba điểm thẳng hàng.",
    "Biểu thị chính xác các đại lượng có hướng quen thuộc trong đời sống và Vật lý (lực, vận tốc gió, độ dịch chuyển) bằng công cụ vectơ."
  ],
  goalsAudioUrl: "assets/audio/b10_7_goals.mp3",
  goalsAudioScript: "Mục tiêu bài học cần đạt: Sau bài học này, các em cần đạt được bốn mục tiêu trọng tâm: Thứ nhất, nhận biết và hiểu sâu sắc khái niệm vectơ, độ dài vectơ, giá của vectơ và vectơ-không. Thứ hai, phân biệt chính xác hai vectơ cùng phương, cùng hướng, ngược hướng và hai vectơ bằng nhau. Thứ ba, vận dụng thành thạo điều kiện hai vectơ cùng phương để chứng minh ba điểm thẳng hàng. Thứ tư, biết cách sử dụng vectơ để mô tả các đại lượng có hướng quen thuộc trong đời sống và Vật lý như lực và vận tốc.",
  goalsButtonLabel: "Nghe thầy Sáng phổ biến mục tiêu",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN
  // =========================================================================

  // 1. TÌNH HUỐNG THỰC TẾ MỞ ĐẦU (HOOK - HÌNH 4.1 SGK TRANG 46)
  hook: {
    title: "Tình huống mở đầu: Bản đồ Ga An Cựu Cố đô Huế và Dự báo hướng gió bão",
    story: "Khi theo dõi một bản tin thời tiết trên truyền hình, biên tập viên thông báo: 'Nhiệt độ hiện tại tại trung tâm TP. Huế là 30 độ C; một luồng gió Đông Nam đang thổi với tốc độ 18 km/h'. Bạn Nam nhận xét: 'Để mô tả nhiệt độ ta chỉ cần con số 30 độ C, nhưng để mô tả gió thì phải biết cả tốc độ 18 km/h lẫn hướng thổi Đông Nam'. Tương tự, trên bản đồ số (Hình 4.1 SGK), Ga An Cựu nằm cách Hoàng cung Huế 3,01 km về hướng Đông Nam. Hai thông tin khoảng cách và hướng đi cho phép xác định chính xác vị trí của địa danh. Trong Toán học, công cụ nào giúp chúng ta biểu diễn trọn vẹn cả độ lớn lẫn hướng đi của một đại lượng như vậy? Đó chính là khái niệm Vectơ!",
    audioScript: "Bài toán dẫn nhập: Khi theo dõi một bản tin dự báo thời tiết, các em thường nghe: Nhiệt độ hiện tại là 30 độ C, gió Đông Nam thổi với tốc độ 18 km/h. Vì sao để mô tả nhiệt độ ta chỉ cần một con số, còn để mô tả gió lại cần cả tốc độ và hướng thổi? Tương tự, nhìn trên bản đồ số, Ga An Cựu nằm cách Hoàng cung Huế 3,01 km về hướng Đông Nam. Nếu người lái tàu chỉ biết tốc độ mà không biết hướng đi thì không thể nào đưa tàu cập bến an toàn. Toán học đã xây dựng một đối tượng đặc biệt mang đầy đủ cả độ lớn và hướng đi, đó chính là Vectơ!",
    audioUrl: "assets/audio/b10_7_hook.mp3",
    buttonLabel: "Nghe thầy Sáng đặt vấn đề",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    illustrationSvg: `
      <div style="background: linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%); border: 1.5px solid #0284c7; border-radius: 12px; padding: 16px; margin: 15px 0; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.04);">
        <svg viewBox="0 0 740 260" style="width: 100%; max-width: 700px; height: auto; display: block; margin: 0 auto; background: #ffffff; border-radius: 8px;">
          <defs>
            <marker id="map-arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
            </marker>
            <marker id="compass-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a"/>
            </marker>
          </defs>

          <!-- Bản đồ Cố đô Huế thu nhỏ -->
          <rect x="30" y="25" width="460" height="210" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
          <!-- Đường nét sông Hương mô phỏng -->
          <path d="M 30,110 Q 150,140 260,100 T 490,130" fill="none" stroke="#93c5fd" stroke-width="14" stroke-linecap="round"/>
          <text x="320" y="115" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-style="italic" fill="#1e40af">Sông Hương</text>

          <!-- Điểm Hoàng cung Huế -->
          <circle cx="160" cy="70" r="7" fill="#dc2626"/>
          <rect x="153" y="63" width="14" height="14" fill="#fef08a" stroke="#dc2626" stroke-width="1.5"/>
          <text x="180" y="65" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#b91c1c">Hoàng cung Huế (Tử Cấm Thành)</text>

          <!-- Điểm Ga An Cựu -->
          <circle cx="360" cy="180" r="7" fill="#0284c7"/>
          <text x="375" y="185" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0369a1">Ga An Cựu</text>

          <!-- Vectơ dịch chuyển nối Hoàng cung Huế -> Ga An Cựu -->
          <line x1="160" y1="70" x2="350" y2="175" stroke="#dc2626" stroke-width="3" stroke-dasharray="2,2" marker-end="url(#map-arrow-red)"/>
          <rect x="220" y="110" width="105" height="26" rx="4" fill="#ffffff" stroke="#dc2626" stroke-width="1.2"/>
          <text x="228" y="128" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">3,01 km (Đông Nam)</text>

          <!-- La bàn 4 phương 8 hướng ở góc phải -->
          <g transform="translate(600, 130)">
            <circle cx="0" cy="0" r="55" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
            <!-- Trục Bắc Nam -->
            <line x1="0" y1="45" x2="0" y2="-45" stroke="#0f172a" stroke-width="2" marker-end="url(#compass-arrow)"/>
            <text x="-6" y="-50" font-family="sans-serif" font-size="14" font-weight="bold" fill="#dc2626">B</text>
            <text x="-5" y="60" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">N</text>
            <!-- Trục Đông Tây -->
            <line x1="-45" y1="0" x2="45" y2="0" stroke="#0f172a" stroke-width="2" marker-end="url(#compass-arrow)"/>
            <text x="50" y="5" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Đ</text>
            <text x="-63" y="5" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">T</text>
            <!-- Mũi tên hướng Đông Nam -->
            <line x1="0" y1="0" x2="35" y2="35" stroke="#dc2626" stroke-width="2.5" marker-end="url(#map-arrow-red)"/>
            <text x="35" y="48" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Đông Nam</text>
          </g>
        </svg>
        <div style="font-size: 0.9rem; color: #0369a1; margin-top: 8px; font-weight: 600;">
          <i class="fa-solid fa-location-dot" style="color: #dc2626;"></i> Hình 4.1 SGK: Vectơ định vị vị trí kết hợp hoàn hảo giữa <strong>độ lớn</strong> (3,01 km) và <strong>hướng</strong> (Đông Nam).
        </div>
      </div>
    `,
    question: "Nếu chỉ biết con tàu chuyển động với tốc độ 20 km/h mà không biết hướng di chuyển, hoa tiêu có thể đưa tàu cập bến an toàn tránh bão được không? Vì sao cần cả hướng và độ lớn?",
    bridge: "Hãy cùng Thầy Sáng bước vào khám phá thế giới Vectơ đầy trực quan ngay sau đây!"
  },

  // 2. CÁC MỤC LÝ THUYẾT BÀI HỌC (SECTIONS)
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1. KHÁI NIỆM VECTƠ VÀ ĐỘ DÀI CỦA VECTƠ
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "Khái niệm vectơ và độ dài của vectơ",
      audioScript: "Mục một, Khái niệm vectơ và độ dài của vectơ: Vectơ là một đoạn thẳng có hướng, tức là trong hai điểm mút đã chỉ rõ điểm đầu và điểm cuối. Vectơ có điểm đầu A và điểm cuối B được kí hiệu là vectơ AB, với mũi tên đặt ở điểm cuối B. Khi không cần chỉ rõ điểm đầu và điểm cuối, ta kí hiệu là vectơ a, vectơ b. Khoảng cách giữa điểm đầu và điểm cuối chính là độ dài của vectơ, kí hiệu là trị tuyệt đối của vectơ AB. Độ dài của vectơ luôn là một số không âm.",
      audioUrl: "assets/audio/b10_7_sec1.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-7-sec1-1",
          time: 15,
          title: "Giây 15: Khái niệm vectơ",
          question: "Vectơ $\\vec{AB}$ có điểm đầu và điểm cuối lần lượt là:",
          options: [
            "Điểm đầu là $B$, điểm cuối là $A$",
            "Điểm đầu là $A$, điểm cuối là $B$",
            "Cả hai điểm $A$ và $B$ đều là điểm đầu",
            "Không phân biệt điểm đầu và điểm cuối"
          ],
          correctIndex: 1, // B
          hint: "Thứ tự đọc và viết tên vectơ luôn đi từ gốc (điểm đầu) đến ngọn có mũi tên (điểm cuối).",
          explain: "Chính xác! Kí hiệu $\\vec{AB}$ quy ước điểm viết trước ($A$) là điểm đầu, điểm viết sau ($B$) là điểm cuối có gắn mũi tên định hướng."
        },
        {
          id: "poi-10-7-sec1-2",
          time: 27,
          title: "Giây 27: Độ dài của vectơ",
          question: "Độ dài của vectơ $\\vec{MN}$ kí hiệu là $|\\vec{MN}|$. Độ dài này bằng:",
          options: [
            "Khoảng cách giữa hai điểm $M$ và $N$ (bằng độ dài đoạn thẳng $MN$)",
            "Một số thực âm tuỳ ý",
            "Luôn bằng 1 với mọi vectơ",
            "Bằng một nửa độ dài đoạn thẳng $MN$"
          ],
          correctIndex: 0, // A
          hint: "Độ dài vectơ chính là độ dài hình học của đoạn thẳng nối điểm đầu và điểm cuối.",
          explain: "Rất chuẩn! Theo SGK trang 47: Độ dài của vectơ là khoảng cách giữa điểm đầu và điểm cuối của vectơ đó. Ta có $|\\vec{MN}| = MN \\ge 0$."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Định nghĩa vectơ, độ dài và các kí hiệu cơ bản",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Khung kiến thức SGK Toán 10 - Trang 47]:</div>
              <ul class="sgk-box-list">
                <li><strong>Vectơ</strong> là một đoạn thẳng có hướng, nghĩa là trong hai điểm mút của đoạn thẳng, đã chỉ rõ điểm đầu, điểm cuối.</li>
                <li><strong>Độ dài của vectơ</strong> là khoảng cách giữa điểm đầu và điểm cuối của vectơ đó.</li>
              </ul>
            </div>

            <div style="margin: 14px 0; line-height: 1.7;">
              <p><strong>Kí hiệu & Quy ước chuẩn:</strong></p>
              <ul>
                <li>Vectơ có điểm đầu $A$ và điểm cuối $B$ được kí hiệu là $\\vec{AB}$ (đọc là <em>vectơ $AB$</em>).</li>
                <li>Để vẽ vectơ $\\vec{AB}$, ta vẽ đoạn thẳng nối điểm đầu $A$ và điểm cuối $B$, rồi đánh dấu mũi tên ở điểm cuối $B$.</li>
                <li>Khi không cần chỉ rõ điểm đầu và điểm cuối, vectơ còn được kí hiệu là $\\vec{a}, \\vec{b}, \\vec{x}, \\vec{y}, \\vec{u}, \\vec{v}$.</li>
                <li>Độ dài của vectơ $\\vec{AB}$ hay $\\vec{a}$ được kí hiệu tương ứng là $|\\vec{AB}|$ hay $|\\vec{a}|$. Ta có $|\\vec{AB}| = AB$. Độ dài của vectơ luôn là một số thực không âm.</li>
              </ul>
            </div>

            <!-- HÌNH VẼ MINH HỌA HÌNH 4.2 & 4.3 & 4.4 SGK -->
            <div style="background: #ffffff; border: 1.5px solid #0284c7; border-radius: 12px; padding: 18px; margin: 18px 0; text-align: center;">
              <div style="font-weight: 700; color: #0369a1; font-size: 1.02rem; margin-bottom: 12px;">
                <i class="fa-solid fa-draw-polygon"></i> Hình 4.3 & 4.4 (SGK trang 47): Biểu diễn hình học của Vectơ
              </div>
              <svg viewBox="0 0 680 180" style="width: 100%; max-width: 640px; height: auto; display: block; margin: 0 auto; background: #ffffff;">
                <defs>
                  <marker id="arr-b10-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                  </marker>
                  <marker id="arr-b10-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                  </marker>
                  <marker id="arr-b10-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/>
                  </marker>
                </defs>

                <!-- Vectơ AB có điểm mút xác định -->
                <g transform="translate(40, 20)">
                  <circle cx="40" cy="100" r="5" fill="#0284c7"/>
                  <text x="15" y="125" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0369a1">A (Điểm đầu)</text>
                  <line x1="40" y1="100" x2="220" y2="40" stroke="#0284c7" stroke-width="3" marker-end="url(#arr-b10-blue)"/>
                  <circle cx="220" cy="40" r="5" fill="#0284c7"/>
                  <text x="230" y="45" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0369a1">B (Điểm cuối)</text>
                  <text x="125" y="60" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#0284c7">\\vec{AB}</text>
                  <text x="80" y="145" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-style="italic" fill="#64748b">Hình 4.3: Vectơ có gốc và ngọn</text>
                </g>

                <!-- Các vectơ tự do kí hiệu chữ thường -->
                <g transform="translate(380, 20)">
                  <!-- Vectơ a nằm ngang -->
                  <line x1="20" y1="70" x2="120" y2="70" stroke="#dc2626" stroke-width="2.8" marker-end="url(#arr-b10-red)"/>
                  <text x="65" y="60" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#dc2626">\\vec{a}</text>

                  <!-- Vectơ b xiên lên -->
                  <line x1="150" y1="110" x2="180" y2="30" stroke="#16a34a" stroke-width="2.8" marker-end="url(#arr-b10-green)"/>
                  <text x="145" y="45" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#16a34a">\\vec{b}</text>

                  <!-- Vectơ x xiên xuống -->
                  <line x1="210" y1="50" x2="270" y2="90" stroke="#7c3aed" stroke-width="2.8" marker-end="url(#arr-b10-blue)"/>
                  <text x="245" y="65" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#7c3aed">\\vec{x}</text>

                  <text x="60" y="145" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-style="italic" fill="#64748b">Hình 4.4: Các vectơ tự do \\vec{a}, \\vec{b}, \\vec{x}</text>
                </g>
              </svg>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 1 (SGK trang 47): Tính độ dài vectơ trong hình vuông",
            problem: "Cho hình vuông $ABCD$ có cạnh bằng $1$. Tính độ dài của các vectơ $\\vec{AC}, \\vec{CA}, \\vec{BD}$.",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <ul>
                <li>Độ dài của vectơ $\\vec{AC}$ là khoảng cách giữa $A$ và $C$, tức là độ dài đoạn chéo $AC$.</li>
                <li>Áp dụng định lí Pythagore trong tam giác vuông $ABC$ ($AB = BC = 1$):<br>
                  $$AC = \\sqrt{AB^2 + BC^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}.$$
                </li>
                <li>Tương tự, vì $ABCD$ là hình vuông nên hai đường chéo bằng nhau: $CA = BD = AC = \\sqrt{2}$.</li>
                <li>Vậy: $|\\vec{AC}| = AC = \\sqrt{2}; \\quad |\\vec{CA}| = CA = \\sqrt{2}; \\quad |\\vec{BD}| = BD = \\sqrt{2}$.</li>
              </ul>
            `,
            teacherGuidance: "Độ dài của một vectơ luôn luôn bằng độ dài đoạn thẳng hình học nối hai điểm mút, do đó $|\\vec{AB}| = |\\vec{BA}| = AB$.",
            similarProblem: "Cho hình chữ nhật $ABCD$ có $AB = 3\\text{ cm}, BC = 4\\text{ cm}$. Tính độ dài của các vectơ $\\vec{AB}, \\vec{BC}, \\vec{AC}, \\vec{BD}$."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2. HAI VECTƠ CÙNG PHƯƠNG, CÙNG HƯỚNG
    // -----------------------------------------------------------------------
    {
      num: "2",
      title: "Hai vectơ cùng phương, cùng hướng",
      audioScript: "Mục hai, Hai vectơ cùng phương và cùng hướng: Đường thẳng đi qua điểm đầu và điểm cuối của một vectơ được gọi là giá của vectơ đó. Hai vectơ được gọi là cùng phương nếu giá của chúng song song hoặc trùng nhau. Các em đặc biệt lưu ý: Chỉ khi hai vectơ đã cùng phương, ta mới xét đến việc chúng cùng hướng hay ngược hướng. Nếu giá của chúng cắt nhau, hai vectơ đó không cùng phương và không thể so sánh hướng.",
      audioUrl: "assets/audio/b10_7_sec2.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-7-sec2-1",
          time: 14,
          title: "Giây 14: Điều kiện hai vectơ cùng phương",
          question: "Hai vectơ được gọi là cùng phương khi và chỉ khi:",
          options: [
            "Chúng có cùng độ dài",
            "Giá của chúng song song hoặc trùng nhau",
            "Giá của chúng vuông góc với nhau",
            "Chúng có chung điểm đầu"
          ],
          correctIndex: 1, // B
          hint: "Phương của vectơ gắn liền với phương của đường thẳng chứa vectơ đó (giá của vectơ).",
          explain: "Chính xác! SGK trang 48 định nghĩa: Đường thẳng đi qua điểm đầu và điểm cuối của một vectơ là giá của vectơ đó. Hai vectơ cùng phương nếu giá của chúng song song hoặc trùng nhau."
        },
        {
          id: "poi-10-7-sec2-2",
          time: 25,
          title: "Giây 25: Mối quan hệ giữa phương và hướng",
          question: "Khẳng định nào sau đây là <strong>đúng</strong> khi nói về hướng của hai vectơ?",
          options: [
            "Hai vectơ bất kì luôn có thể so sánh xem chúng cùng hướng hay ngược hướng",
            "Chỉ khi hai vectơ cùng phương thì ta mới xét chúng cùng hướng hoặc ngược hướng",
            "Hai vectơ có giá cắt nhau thì luôn cùng hướng",
            "Hai vectơ cùng phương thì luôn luôn cùng hướng"
          ],
          correctIndex: 1, // B
          hint: "Khái niệm hướng chỉ áp dụng cho hai đường thẳng song song hoặc trùng nhau.",
          explain: "Rất chuẩn! Đối với hai vectơ cùng phương, chúng có thể cùng hướng hoặc ngược hướng. Nếu hai vectơ không cùng phương thì không có khái niệm cùng hướng hay ngược hướng."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Giá của vectơ và định nghĩa hai vectơ cùng phương, cùng hướng",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Khung kiến thức SGK Toán 10 - Trang 48]:</div>
              <ul class="sgk-box-list">
                <li>Đường thẳng đi qua điểm đầu và điểm cuối của một vectơ được gọi là <strong>giá</strong> của vectơ đó.</li>
                <li>Hai vectơ được gọi là <strong>cùng phương</strong> nếu chúng có giá song song hoặc trùng nhau.</li>
                <li>Đối với hai vectơ cùng phương thì chúng <strong>cùng hướng</strong> hoặc <strong>ngược hướng</strong>.</li>
              </ul>
            </div>

            <!-- HÌNH MINH HỌA HÌNH 4.6 & 4.7 SGK -->
            <div style="background: #ffffff; border: 1.5px solid #2563eb; border-radius: 12px; padding: 18px; margin: 18px 0; text-align: center;">
              <div style="font-weight: 700; color: #1e40af; font-size: 1.02rem; margin-bottom: 12px;">
                <i class="fa-solid fa-arrows-left-right"></i> Hình 4.6 & 4.7 (SGK trang 48): Giá của vectơ và sự cùng phương
              </div>
              <svg viewBox="0 0 680 200" style="width: 100%; max-width: 640px; height: auto; display: block; margin: 0 auto; background: #ffffff;">
                <defs>
                  <marker id="arr-m2-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
                  </marker>
                  <marker id="arr-m2-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                  </marker>
                </defs>

                <!-- KHUNG TRÁI: HÌNH 4.6 - CÁC ĐƯỜNG THẲNG LÀ GIÁ -->
                <g transform="translate(30, 20)">
                  <!-- Đường thẳng giá d1 -->
                  <line x1="20" y1="30" x2="280" y2="30" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                  <line x1="80" y1="30" x2="200" y2="30" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-m2-blue)"/>
                  <text x="140" y="20" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#2563eb">\\vec{a}</text>

                  <!-- Đường thẳng giá d2 song song d1 -->
                  <line x1="20" y1="80" x2="280" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                  <line x1="180" y1="80" x2="70" y2="80" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-m2-red)"/>
                  <text x="120" y="105" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#dc2626">\\vec{b}</text>

                  <!-- Đường thẳng giá d3 trùng nhau chứa c và d -->
                  <line x1="20" y1="140" x2="280" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                  <line x1="60" y1="140" x2="140" y2="140" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-m2-blue)"/>
                  <line x1="170" y1="140" x2="250" y2="140" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-m2-blue)"/>
                  <text x="95" y="165" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#2563eb">\\vec{c}</text>
                  <text x="205" y="165" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#2563eb">\\vec{d}</text>
                  <text x="35" y="185" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Hình 4.6: Giá song song hoặc trùng nhau</text>
                </g>

                <!-- KHUNG PHẢI: LƯỚI Ô VUÔNG HÌNH 4.7 -->
                <g transform="translate(360, 20)">
                  <!-- Lưới 5x4 ô vuông mờ -->
                  <rect x="20" y="10" width="260" height="150" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
                  <line x1="20" y1="40" x2="280" y2="40" stroke="#e2e8f0" stroke-width="1"/>
                  <line x1="20" y1="70" x2="280" y2="70" stroke="#e2e8f0" stroke-width="1"/>
                  <line x1="20" y1="100" x2="280" y2="100" stroke="#e2e8f0" stroke-width="1"/>
                  <line x1="20" y1="130" x2="280" y2="130" stroke="#e2e8f0" stroke-width="1"/>
                  <line x1="85" y1="10" x2="85" y2="160" stroke="#e2e8f0" stroke-width="1"/>
                  <line x1="150" y1="10" x2="150" y2="160" stroke="#e2e8f0" stroke-width="1"/>
                  <line x1="215" y1="10" x2="215" y2="160" stroke="#e2e8f0" stroke-width="1"/>

                  <!-- Vectơ a (hướng lên phải) -->
                  <line x1="40" y1="130" x2="80" y2="50" stroke="#2563eb" stroke-width="2.8" marker-end="url(#arr-m2-blue)"/>
                  <text x="45" y="70" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#2563eb">\\vec{a}</text>

                  <!-- Vectơ AB cùng hướng với a -->
                  <line x1="100" y1="130" x2="140" y2="50" stroke="#2563eb" stroke-width="2.8" marker-end="url(#arr-m2-blue)"/>
                  <text x="125" y="95" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#2563eb">\\vec{AB}</text>

                  <!-- Vectơ x ngược hướng với a -->
                  <line x1="170" y1="60" x2="140" y2="120" stroke="#dc2626" stroke-width="2.8" marker-end="url(#arr-m2-red)"/>
                  <text x="160" y="110" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#dc2626">\\vec{x}</text>

                  <!-- Vectơ b không cùng phương (cắt xiên khác góc) -->
                  <line x1="210" y1="130" x2="260" y2="40" stroke="#059669" stroke-width="2.8" marker-end="url(#arr-m2-blue)"/>
                  <text x="245" y="115" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#059669">\\vec{b}</text>
                  <text x="40" y="185" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Hình 4.7: Cùng phương, cùng hướng và ngược hướng</text>
                </g>
              </svg>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 2 (SGK trang 48): Nhận biết vectơ cùng phương trong hình chữ nhật",
            problem: "Cho hình chữ nhật $ABCD$. Hãy chỉ ra mối quan hệ về độ dài, phương, hướng giữa các cặp vectơ sau:<br>a) $\\vec{AD}$ và $\\vec{BC}$;<br>b) $\\vec{AB}$ và $\\vec{CD}$;<br>c) $\\vec{AC}$ và $\\vec{BD}$.",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <ul>
                <li><strong>a) Cặp vectơ $\\vec{AD}$ và $\\vec{BC}$</strong>: Giá của chúng là hai đường thẳng song song $AD \\parallel BC$ nên chúng cùng phương. Điểm mút chỉ từ trên xuống dưới nên chúng <em>cùng hướng</em>. Vì $ABCD$ là hình chữ nhật nên $AD = BC$, do đó $|\\vec{AD}| = |\\vec{BC}|$.</li>
                <li><strong>b) Cặp vectơ $\\vec{AB}$ và $\\vec{CD}$</strong>: Giá của chúng là hai đường thẳng song song $AB \\parallel CD$ nên chúng cùng phương. Tuy nhiên, $\\vec{AB}$ hướng từ trái sang phải, còn $\\vec{CD}$ hướng từ phải sang trái, nên hai vectơ này <em>ngược hướng</em>. Chúng có cùng độ dài ($|\\vec{AB}| = |\\vec{CD}| = AB$).</li>
                <li><strong>c) Cặp vectơ $\\vec{AC}$ và $\\vec{BD}$</strong>: Hai đường chéo $AC$ và $BD$ cắt nhau tại tâm $O$ (giá không song song cũng không trùng nhau), do đó $\\vec{AC}$ và $\\vec{BD}$ <em>không cùng phương</em>, không so sánh hướng. Tuy nhiên, chúng có cùng độ dài ($|\\vec{AC}| = |\\vec{BD}|$).</li>
              </ul>
            `,
            teacherGuidance: "Chỉ khi hai đường thẳng chứa vectơ song song hoặc trùng nhau thì hai vectơ mới cùng phương. Hai đường chéo cắt nhau thì hai vectơ tuyệt đối không cùng phương!",
            similarProblem: "Cho hình bình hành $ABCD$ tâm $O$. Xác định các cặp vectơ cùng hướng, ngược hướng và có độ dài bằng nhau trong số các vectơ: $\\vec{OA}, \\vec{OB}, \\vec{OC}, \\vec{OD}$."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3. HAI VECTƠ BẰNG NHAU VÀ VECTƠ-KHÔNG
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "Hai vectơ bằng nhau và vectơ-không",
      audioScript: "Mục ba, Hai vectơ bằng nhau và vectơ-không: Hai vectơ a và b được gọi là bằng nhau nếu chúng thỏa mãn đồng thời hai điều kiện: cùng độ dài và cùng hướng. Nếu hai vectơ cùng độ dài nhưng ngược hướng thì chúng không bằng nhau. Ngoài ra, ta quy ước vectơ có điểm đầu và điểm cuối trùng nhau là vectơ-không, kí hiệu là vectơ 0. Vectơ-không có độ dài bằng 0 và được coi là cùng phương, cùng hướng với mọi vectơ.",
      audioUrl: "assets/audio/b10_7_sec3.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-7-sec3-1",
          time: 12,
          title: "Giây 12: Hai vectơ bằng nhau",
          question: "Hai vectơ $\\vec{a}$ và $\\vec{b}$ được gọi là bằng nhau (kí hiệu $\\vec{a} = \\vec{b}$) khi:",
          options: [
            "Chúng có cùng độ dài",
            "Chúng cùng phương",
            "Chúng có cùng độ dài và cùng hướng",
            "Chúng có cùng độ dài và ngược hướng"
          ],
          correctIndex: 2, // C
          hint: "Bằng nhau phải trọn vẹn cả hai yếu tố: cùng chiều dài và chỉ về cùng một hướng.",
          explain: "Chính xác! Theo SGK trang 48: Hai vectơ $\\vec{a}$ và $\\vec{b}$ được gọi là bằng nhau, kí hiệu $\\vec{a} = \\vec{b}$, nếu chúng có cùng độ dài và cùng hướng."
        },
        {
          id: "poi-10-7-sec3-2",
          time: 24,
          title: "Giây 24: Đặc điểm của vectơ-không",
          question: "Vectơ-không (kí hiệu $\\vec{0}$) có tính chất nào sau đây?",
          options: [
            "Có độ dài bằng 1",
            "Có điểm đầu và điểm cuối trùng nhau, độ dài bằng 0, cùng hướng với mọi vectơ",
            "Không có độ dài xác định",
            "Chỉ cùng phương với duy nhất chính nó"
          ],
          correctIndex: 1, // B
          hint: "Điểm đầu và điểm cuối trùng nhau tạo thành một điểm, độ dài bằng 0.",
          explain: "Rất chuẩn! Vectơ-không là vectơ có điểm đầu và điểm cuối trùng nhau (ví dụ $\\vec{AA}, \\vec{BB}$). Độ dài bằng 0 và được quy ước cùng phương, cùng hướng với mọi vectơ."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Khái niệm hai vectơ bằng nhau và vectơ-không",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Khung kiến thức SGK Toán 10 - Trang 48]:</div>
              <ul class="sgk-box-list">
                <li>Hai vectơ $\\vec{a}$ và $\\vec{b}$ được gọi là <strong>bằng nhau</strong>, kí hiệu $\\vec{a} = \\vec{b}$, nếu chúng có <strong>cùng độ dài</strong> và <strong>cùng hướng</strong>.</li>
                <li><strong>Vectơ-không</strong>: Là vectơ có điểm đầu và điểm cuối trùng nhau (chẳng hạn $\\vec{AA}, \\vec{BB}, \\vec{MM}$).</li>
                <li>Quy ước: Vectơ-không có độ dài bằng $0$, cùng hướng (do đó cùng phương) với mọi vectơ. Các vectơ-không đều bằng nhau và được kí hiệu chung là $\\vec{0}$.</li>
                <li>Với mỗi điểm $O$ và vectơ $\\vec{a}$ cho trước, có <strong>duy nhất</strong> điểm $A$ sao cho $\\vec{OA} = \\vec{a}$ (Hình 4.8 SGK).</li>
              </ul>
            </div>

            <!-- HÌNH MINH HỌA HÌNH 4.8 & 4.9 SGK -->
            <div style="background: #ffffff; border: 1.5px solid #10b981; border-radius: 12px; padding: 18px; margin: 18px 0; text-align: center;">
              <div style="font-weight: 700; color: #047857; font-size: 1.02rem; margin-bottom: 12px;">
                <i class="fa-solid fa-equals"></i> Hình 4.8 & 4.9 (SGK trang 48): Dựng vectơ bằng nhau và Vectơ trong hình chữ nhật
              </div>
              <svg viewBox="0 0 680 180" style="width: 100%; max-width: 640px; height: auto; display: block; margin: 0 auto; background: #ffffff;">
                <defs>
                  <marker id="arr-m3-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981"/>
                  </marker>
                  <marker id="arr-m3-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
                  </marker>
                </defs>

                <!-- KHUNG TRÁI: DỰNG OA = a TRÊN LƯỚI Ô VUÔNG (HÌNH 4.8) -->
                <g transform="translate(40, 15)">
                  <!-- Lưới ô vuông -->
                  <rect x="10" y="10" width="220" height="130" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
                  <line x1="10" y1="53" x2="230" y2="53" stroke="#e2e8f0" stroke-width="1"/>
                  <line x1="10" y1="96" x2="230" y2="96" stroke="#e2e8f0" stroke-width="1"/>
                  <line x1="83" y1="10" x2="83" y2="140" stroke="#e2e8f0" stroke-width="1"/>
                  <line x1="156" y1="10" x2="156" y2="140" stroke="#e2e8f0" stroke-width="1"/>

                  <!-- Vectơ a tự do -->
                  <line x1="25" y1="120" x2="80" y2="40" stroke="#10b981" stroke-width="3" marker-end="url(#arr-m3-green)"/>
                  <text x="35" y="70" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#047857">\\vec{a}</text>

                  <!-- Vectơ OA = a xuất phát từ gốc O -->
                  <circle cx="120" cy="120" r="4.5" fill="#0f172a"/>
                  <text x="105" y="138" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#0f172a">O</text>
                  <line x1="120" y1="120" x2="175" y2="40" stroke="#10b981" stroke-width="3" marker-end="url(#arr-m3-green)"/>
                  <circle cx="175" cy="40" r="4.5" fill="#0f172a"/>
                  <text x="185" y="45" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#0f172a">A</text>
                  <text x="160" y="90" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#047857">\\vec{OA} = \\vec{a}</text>
                  <text x="25" y="160" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Hình 4.8: Dựng duy nhất điểm A để \\vec{OA} = \\vec{a}</text>
                </g>

                <!-- KHUNG PHẢI: HÌNH CHỮ NHẬT ABCD (HÌNH 4.9) -->
                <g transform="translate(370, 15)">
                  <!-- Hình chữ nhật ABCD -->
                  <rect x="40" y="25" width="200" height="100" fill="none" stroke="#64748b" stroke-width="1.8"/>
                  <!-- Vectơ AD và BC bằng nhau (màu xanh dương đậm) -->
                  <line x1="40" y1="25" x2="40" y2="125" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-m3-blue)"/>
                  <line x1="240" y1="25" x2="240" y2="125" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-m3-blue)"/>
                  <!-- Hai đường chéo AC và BD nét mảnh -->
                  <line x1="40" y1="25" x2="240" y2="125" stroke="#94a3b8" stroke-width="1.2"/>
                  <line x1="40" y1="125" x2="240" y2="25" stroke="#94a3b8" stroke-width="1.2"/>

                  <!-- Các đỉnh A, B, C, D -->
                  <text x="20" y="25" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">A</text>
                  <text x="250" y="25" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">B</text>
                  <text x="250" y="140" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">C</text>
                  <text x="20" y="140" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">D</text>

                  <text x="50" y="160" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Hình 4.9: \\vec{AD} = \\vec{BC} (cùng hướng và cùng độ dài)</text>
                </g>
              </svg>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 3 (Luyện tập 2 SGK trang 49): Vectơ trong hình thang cân",
            problem: "Cho hình thang cân $ABCD$ có hai đáy $AB$ và $CD$ ($AB < CD$). Hãy chỉ ra mối quan hệ về độ dài, phương, hướng giữa các cặp vectơ $\\vec{AD}$ và $\\vec{BC}$, $\\vec{AB}$ và $\\vec{CD}$, $\\vec{AC}$ và $\\vec{BD}$. Có cặp vectơ nào bằng nhau không?",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <ul>
                <li><strong>Cặp $\\vec{AD}$ và $\\vec{BC}$</strong>: Trong hình thang cân, hai cạnh bên có độ dài bằng nhau ($AD = BC$), do đó $|\\vec{AD}| = |\\vec{BC}|$. Tuy nhiên, hai đường thẳng $AD$ và $BC$ cắt nhau nên chúng <em>không cùng phương</em> (không cùng hướng cũng không ngược hướng). Do đó $\\vec{AD} \\ne \\vec{BC}$.</li>
                <li><strong>Cặp $\\vec{AB}$ và $\\vec{CD}$</strong>: Do hai đáy song song ($AB \\parallel CD$) nên $\\vec{AB}$ và $\\vec{CD}$ <em>cùng phương</em>. Cả hai vectơ cùng hướng từ trái sang phải nên chúng <em>cùng hướng</em>. Tuy nhiên, theo giả thiết $AB < CD$ nên $|\\vec{AB}| < |\\vec{CD}|$. Do đó $\\vec{AB} \\ne \\vec{CD}$.</li>
                <li><strong>Cặp $\\vec{AC}$ và $\\vec{BD}$</strong>: Hai đường chéo hình thang cân bằng nhau ($AC = BD$) nên $|\\vec{AC}| = |\\vec{BD}|$. Tuy nhiên hai đường chéo cắt nhau nên hai vectơ <em>không cùng phương</em> $\\implies \\vec{AC} \\ne \\vec{BD}$.</li>
                <li><strong>Kết luận</strong>: Trong các cặp vectơ trên, <strong>không có</strong> cặp vectơ nào bằng nhau.</li>
              </ul>
            `,
            teacherGuidance: "Muốn hai vectơ bằng nhau bắt buộc phải thỏa mãn ĐỒNG THỜI cả hai điều kiện: 1. Cùng độ dài; 2. Cùng hướng. Thiếu một trong hai điều kiện đều không bằng nhau!",
            similarProblem: "Cho hình thoi $ABCD$. Trong các cặp vectơ sau, cặp nào bằng nhau: ($\\vec{AB}, \\vec{CD}$), ($\\vec{AB}, \\vec{DC}$), ($\\vec{AD}, \\vec{BC}$), ($\\vec{AC}, \\vec{BD}$)?"
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4. BA ĐIỂM THẲNG HÀNG VÀ ỨNG DỤNG THỰC TIỄN
    // -----------------------------------------------------------------------
    {
      num: "4",
      title: "Ba điểm thẳng hàng và ứng dụng thực tiễn của vectơ",
      audioScript: "Mục bốn, Ba điểm thẳng hàng và ứng dụng thực tiễn: Một ứng dụng hình học rất quan trọng là: Ba điểm phân biệt A, B, C thẳng hàng khi và chỉ khi hai vectơ AB và AC cùng phương. Trong Vật lý, khi một vật chìm dưới đáy cốc nước, vật chịu tác động của lực đẩy Ác-si-mét hướng thẳng đứng lên trên và trọng lực P hướng thẳng đứng xuống dưới. Hai lực này là hai vectơ cùng phương nhưng ngược hướng nhau.",
      audioUrl: "assets/audio/b10_7_sec4.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-7-sec4-1",
          time: 12,
          title: "Giây 12: Điều kiện 3 điểm thẳng hàng",
          question: "Cho ba điểm phân biệt $A, B, C$. Điều kiện cần và đủ để $A, B, C$ thẳng hàng là:",
          options: [
            "Hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương",
            "Hai vectơ $\\vec{AB}$ và $\\vec{AC}$ có cùng độ dài",
            "Hai vectơ $\\vec{AB}$ và $\\vec{AC}$ vuông góc với nhau",
            "Điểm $B$ phải nằm giữa $A$ và $C$"
          ],
          correctIndex: 0, // A
          hint: "Hai vectơ có chung gốc A, nếu giá của chúng cùng phương (trùng nhau) thì 3 điểm cùng nằm trên một đường thẳng.",
          explain: "Chính xác! Theo SGK trang 49: Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương."
        },
        {
          id: "poi-10-7-sec4-2",
          time: 25,
          title: "Giây 25: Ứng dụng vectơ mô tả lực",
          question: "Khi một vật chìm dưới đáy cốc nước, lực đẩy Ác-si-mét $\\vec{F}$ và trọng lực $\\vec{P}$ tác dụng lên vật có mối quan hệ gì?",
          options: [
            "Cùng phương, cùng hướng",
            "Cùng phương, ngược hướng (với $|\\vec{P}| > |\\vec{F}|$ khi vật chìm)",
            "Vuông góc với nhau",
            "Không cùng phương"
          ],
          correctIndex: 1, // B
          hint: "Trọng lực luôn kéo vật thẳng đứng xuống dưới, lực đẩy Ác-si-mét nâng vật thẳng đứng lên trên.",
          explain: "Rất chuẩn! Trọng lực $\\vec{P}$ hướng thẳng đứng xuống dưới, lực đẩy Ác-si-mét $\\vec{F}$ hướng thẳng đứng lên trên. Chúng có cùng giá thẳng đứng (cùng phương) nhưng có chiều ngược nhau (ngược hướng)."
        }
      ],
      subsections: [
        {
          key: "4a",
          title: "Điều kiện ba điểm thẳng hàng & Ứng dụng trong Vật lý (Hình 4.11 SGK)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Định lí & Nhận xét SGK Toán 10 - Trang 49]:</div>
              <ul class="sgk-box-list">
                <li><strong>Điều kiện ba điểm thẳng hàng:</strong> Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương.</li>
                <li><strong>Ứng dụng vật lý:</strong> Vectơ được dùng để biểu diễn các đại lượng có hướng như lực, vận tốc, gia tốc. Hướng của vectơ chỉ hướng của đại lượng, độ dài của vectơ thể hiện độ lớn của đại lượng theo một tỉ lệ xích thích hợp.</li>
              </ul>
            </div>

            <!-- HÌNH MINH HỌA HÌNH 4.11 SGK (VẬT CHÌM TRONG CHẤT LỎNG) -->
            <div style="background: #ffffff; border: 1.5px solid #0284c7; border-radius: 12px; padding: 18px; margin: 18px 0; text-align: center;">
              <div style="font-weight: 700; color: #0369a1; font-size: 1.02rem; margin-bottom: 12px;">
                <i class="fa-solid fa-flask"></i> Hình 4.11 (SGK trang 49): Ứng dụng vectơ biểu diễn lực đẩy Ác-si-mét và trọng lực
              </div>
              <svg viewBox="0 0 520 220" style="width: 100%; max-width: 480px; height: auto; display: block; margin: 0 auto; background: #ffffff;">
                <defs>
                  <marker id="arr-force-up" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                  </marker>
                  <marker id="arr-force-down" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                  </marker>
                </defs>

                <!-- Lưới toạ độ nền mờ -->
                <rect x="40" y="20" width="440" height="180" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="40" y1="56" x2="480" y2="56" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="40" y1="92" x2="480" y2="92" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="40" y1="128" x2="480" y2="128" stroke="#e2e8f0" stroke-width="1"/>
                <line x1="40" y1="164" x2="480" y2="164" stroke="#e2e8f0" stroke-width="1"/>

                <!-- Cốc chất lỏng (hình thang) -->
                <polygon points="120,40 400,40 340,180 180,180" fill="#e0f2fe" fill-opacity="0.6" stroke="#0284c7" stroke-width="2"/>
                <!-- Mặt thoáng nước -->
                <line x1="130" y1="60" x2="390" y2="60" stroke="#0284c7" stroke-width="2"/>

                <!-- Vật A chìm sát đáy -->
                <rect x="235" y="130" width="50" height="35" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="1.8"/>
                <text x="253" y="152" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">A</text>

                <!-- Lực đẩy Ác-si-mét F hướng lên (2 ô = 40px) -->
                <line x1="260" y1="130" x2="260" y2="70" stroke="#0284c7" stroke-width="3.5" marker-end="url(#arr-force-up)"/>
                <text x="270" y="85" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0284c7">\\vec{F} (Ác-si-mét)</text>

                <!-- Trọng lực P hướng xuống (3 ô = 60px) -->
                <line x1="260" y1="165" x2="260" y2="205" stroke="#dc2626" stroke-width="3.5" marker-end="url(#arr-force-down)"/>
                <text x="270" y="200" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#dc2626">\\vec{P} (Trọng lực)</text>
              </svg>
              <div style="font-size: 0.9rem; color: #0369a1; margin-top: 8px; font-weight: 600;">
                <i class="fa-solid fa-arrow-up-down"></i> Hai lực $\\vec{F}$ và $\\vec{P}$ cùng phương, ngược hướng. Do $|\\vec{P}| > |\\vec{F}|$ nên vật chìm hoàn toàn dưới đáy cốc.
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 4 (SGK trang 49): Chứng minh 3 điểm thẳng hàng bằng vectơ",
            problem: "Cho ba điểm phân biệt $A, B, C$. Chứng minh rằng ba điểm $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương.",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <ul>
                <li><strong>Chiều thuận ($\\implies$):</strong> Giả sử ba điểm $A, B, C$ thẳng hàng. Khi đó chúng cùng thuộc một đường thẳng $d$. Suy ra giá của vectơ $\\vec{AB}$ và giá của vectơ $\\vec{AC}$ đều là đường thẳng $d$. Vì hai giá trùng nhau nên hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương.</li>
                <li><strong>Chiều đảo ($\\Longleftarrow$):</strong> Giả sử hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương. Khi đó giá của chúng hoặc song song hoặc trùng nhau. Mặt khác, hai giá này đều đi qua điểm chung là điểm $A$. Hai đường thẳng đi qua cùng một điểm mà song song thì phải trùng nhau. Do đó giá của $\\vec{AB}$ và $\\vec{AC}$ trùng nhau, nghĩa là ba điểm $A, B, C$ cùng thuộc một đường thẳng (thẳng hàng).</li>
              </ul>
            `,
            teacherGuidance: "Đây là một công cụ cực kì hữu hiệu để giải các bài toán chứng minh 3 điểm thẳng hàng trong suốt cả chương trình hình học THPT!",
            similarProblem: "Cho tam giác $ABC$. Gọi $M$ là trung điểm của $BC$. Điểm $N$ thỏa mãn $\\vec{AN} = 2\\vec{AM}$. Chứng minh ba điểm $A, M, N$ thẳng hàng."
          }
        }
      ]
    }
  ],

  // 3. CHỐT BÀI HỌC VÀ TỔNG KẾT (WRAPUP)
  realworldWrapup: {
    title: "Chốt bài học & Bảng tra cứu các khái niệm then chốt",
    audioScript: "Chốt bài học: Như vậy, qua bài học số 7, các em đã làm quen với khái niệm nền tảng của Vectơ: một đoạn thẳng có hướng, có độ dài và có giá. Hãy luôn nhớ câu thần chú của Thầy Sáng: Muốn bằng nhau phải cùng hướng cùng độ dài; muốn cùng hướng thì trước hết phải cùng phương! Nắm chắc bài học này, các em sẽ học rất nhẹ nhàng bài Tổng và hiệu của hai vectơ tiếp theo. Thầy chúc các em luôn yêu thích môn Toán và đạt kết quả thật cao!",
    audioUrl: "assets/audio/b10_7_wrapup.mp3",
    buttonLabel: "Nghe thầy Sáng tổng kết",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    summaryHtml: `
      <div style="background: linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%); border: 1.5px solid #3b82f6; border-radius: 12px; padding: 18px; margin: 15px 0;">
        <h4 style="color: #1e3a8a; margin-top: 0; font-size: 1.1rem;"><i class="fa-solid fa-graduation-cap"></i> Ghi nhớ cốt lõi của ThS. Lương Thanh Sáng</h4>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.92rem; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
            <thead>
              <tr style="background: #2563eb; color: #ffffff;">
                <th style="padding: 10px; border: 1px solid #bfdbfe; width: 22%;">Khái niệm</th>
                <th style="padding: 10px; border: 1px solid #bfdbfe; width: 45%;">Bản chất hình học</th>
                <th style="padding: 10px; border: 1px solid #bfdbfe; width: 33%;">Kí hiệu / Quy ước</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Vectơ</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">Đoạn thẳng có hướng (xác định điểm đầu và điểm cuối)</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">$\\vec{AB}, \\vec{a}, \\vec{b}$</td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Độ dài vectơ</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">Khoảng cách giữa điểm đầu và điểm cuối ($|\\vec{AB}| = AB \\ge 0$)</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">$|\\vec{AB}|, |\\vec{a}|$</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Cùng phương</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">Giá của chúng <strong>song song hoặc trùng nhau</strong></td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">Có thể cùng hướng hoặc ngược hướng</td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Bằng nhau</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">Thỏa mãn đồng thời: <strong>Cùng độ dài</strong> VÀ <strong>Cùng hướng</strong></td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #16a34a;">$\\vec{a} = \\vec{b}$</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Vectơ-không</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">Điểm đầu trùng điểm cuối, độ dài $= 0$, cùng hướng mọi vectơ</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #dc2626;">$\\vec{0}$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC MỚI BỘ GD&ĐT)
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN IV. BÀI TẬP TRẮC NGHIỆM CỦNG CỐ TỔNG HỢP",

    // DẠNG 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (5 CÂU - ĐÁP ÁN HOÁN VỊ C, A, D, B, C)
    part1MultipleChoice: [
      {
        id: "mc-10-7-1",
        num: 1,
        prompt: "Câu 1: Khẳng định nào sau đây là <strong>đúng</strong> về định nghĩa của vectơ trong hình học?",
        options: [
          "Vectơ là một đường thẳng có hướng xác định.",
          "Vectơ là một tia có gốc xác định và kéo dài vô tận.",
          "Vectơ là một đoạn thẳng có hướng, nghĩa là trong hai điểm mút đã chỉ rõ điểm đầu và điểm cuối.",
          "Độ dài của một vectơ luôn nhận giá trị âm."
        ],
        correctIndex: 2, // Đáp án C
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo định nghĩa SGK Toán 10 trang 47: Vectơ là một đoạn thẳng có hướng, nghĩa là trong hai điểm mút của đoạn thẳng, đã chỉ rõ điểm đầu, điểm cuối. Độ dài của vectơ là khoảng cách giữa điểm đầu và điểm cuối nên luôn là một số không âm. Do đó đáp án C là hoàn toàn chính xác.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Cho hai điểm phân biệt $M$ và $N$. Có bao nhiêu vectơ khác vectơ-không có điểm đầu và điểm cuối là $M$ hoặc $N$?",
          options: ["1", "2", "3", "Vô số"],
          correctIndex: 1, // B (2 vectơ: MN và NM)
          explain: "Từ hai điểm phân biệt M và N ta lập được đúng hai vectơ ngược hướng nhau là \\vec{MN} và \\vec{NM}."
        }
      },
      {
        id: "mc-10-7-2",
        num: 2,
        prompt: "Câu 2: Cho hình vuông $ABCD$ có cạnh bằng $a$. Độ dài của vectơ $\\vec{AC}$ bằng:",
        options: [
          "$a\\sqrt{2}$.",
          "$a$.",
          "$2a$.",
          "$\\dfrac{a\\sqrt{2}}{2}$."
        ],
        correctIndex: 0, // Đáp án A
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Độ dài của vectơ $\\vec{AC}$ chính là độ dài của đoạn thẳng đường chéo $AC$.<br>Trong tam giác vuông $ABC$, theo định lí Pythagore:<br>$$AC = \\sqrt{AB^2 + BC^2} = \\sqrt{a^2 + a^2} = a\\sqrt{2}.$$<br>Do đó: $|\\vec{AC}| = a\\sqrt{2}$. Đáp án đúng là A.",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cho tam giác đều $ABC$ có cạnh bằng $2a$. Độ dài của vectơ $\\vec{BC}$ bằng:",
          options: ["$a$", "$2a$", "$a\\sqrt{3}$", "$4a$"],
          correctIndex: 1, // B (2a)
          explain: "Độ dài vectơ \\vec{BC} bằng độ dài cạnh BC = 2a."
        }
      },
      {
        id: "mc-10-7-3",
        num: 3,
        prompt: "Câu 3: Cho ba điểm phân biệt $A, B, C$. Điều kiện cần và đủ để ba điểm $A, B, C$ thẳng hàng là:",
        options: [
          "Hai vectơ $\\vec{AB}$ và $\\vec{AC}$ có cùng độ dài.",
          "Hai vectơ $\\vec{AB}$ và $\\vec{AC}$ có giá vuông góc với nhau.",
          "Hai vectơ $\\vec{AB}$ và $\\vec{BC}$ cùng hướng.",
          "Hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương."
        ],
        correctIndex: 3, // Đáp án D
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo định lí SGK trang 49: Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương (vì hai vectơ cùng phương và có chung điểm đầu $A$ thì giá của chúng phải trùng nhau, dẫn tới $A, B, C$ cùng thuộc một đường thẳng). Do đó đáp án D là chính xác.",
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Nếu hai vectơ \\vec{AB} và \\vec{CD} cùng phương thì vị trí tương đối giữa đường thẳng AB và CD là:",
          options: ["Cắt nhau", "Song song hoặc trùng nhau", "Luôn trùng nhau", "Vuông góc"],
          correctIndex: 1, // B (Song song hoặc trùng nhau)
          explain: "Hai vectơ cùng phương khi và chỉ khi giá của chúng song song hoặc trùng nhau."
        }
      },
      {
        id: "mc-10-7-4",
        num: 4,
        prompt: "Câu 4: Cho hình chữ nhật $ABCD$ có tâm $O$. Khẳng định nào sau đây là <strong>đúng</strong>?",
        options: [
          "$\\vec{AB} = \\vec{CD}$.",
          "$\\vec{AD} = \\vec{BC}$.",
          "$\\vec{AC} = \\vec{BD}$.",
          "$|\\vec{OA}| \\ne |\\vec{OB}|$."
        ],
        correctIndex: 1, // Đáp án B
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>- Khẳng định A sai vì $\\vec{AB}$ và $\\vec{CD}$ là hai vectơ ngược hướng nhau ($\\vec{AB} = -\\vec{CD}$).<br>- Khẳng định B đúng vì hai vectơ $\\vec{AD}$ và $\\vec{BC}$ cùng hướng (từ trên xuống dưới dọc theo hai cạnh song song) và có cùng độ dài ($AD = BC$), do đó $\\vec{AD} = \\vec{BC}$.<br>- Khẳng định C sai vì hai đường chéo $AC$ và $BD$ cắt nhau nên hai vectơ không cùng phương.<br>- Khẳng định D sai vì tâm $O$ cách đều các đỉnh của hình chữ nhật ($OA = OB$).",
        similarVariation: {
          prompt: "Câu 4 (Tương tự): Cho hình bình hành $ABCD$. Khẳng định nào sau đây đúng?",
          options: ["\\vec{AB} = \\vec{CD}", "\\vec{AB} = \\vec{DC}", "\\vec{AD} = \\vec{CB}", "\\vec{AC} = \\vec{BD}"],
          correctIndex: 1, // B (\\vec{AB} = \\vec{DC})
          explain: "Trong hình bình hành ABCD, vectơ AB và DC cùng hướng và cùng độ dài nên \\vec{AB} = \\vec{DC}."
        }
      },
      {
        id: "mc-10-7-5",
        num: 5,
        prompt: "Câu 5: Cho đoạn thẳng $AB$ có độ dài $6\\text{ cm}$ và điểm $M$ nằm giữa hai điểm $A, B$ sao cho $AM = 2\\text{ cm}$. Khẳng định nào sau đây là <strong>sai</strong>?",
        options: [
          "Hai vectơ $\\vec{MA}$ và $\\vec{MB}$ là hai vectơ ngược hướng.",
          "$|\\vec{MB}| = 4\\text{ cm}$.",
          "Hai vectơ $\\vec{AM}$ và $\\vec{AB}$ là hai vectơ ngược hướng.",
          "Hai vectơ $\\vec{AB}$ và $\\vec{MB}$ là hai vectơ cùng phương."
        ],
        correctIndex: 2, // Đáp án C
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vì điểm $M$ nằm giữa hai điểm $A$ và $B$ nên tia $AM$ trùng với tia $AB$. Do đó hai vectơ $\\vec{AM}$ và $\\vec{AB}$ là hai vectơ <strong>cùng hướng</strong>. Khẳng định C nói rằng chúng 'ngược hướng' là sai. Các khẳng định A, B, D đều đúng.",
        similarVariation: {
          prompt: "Câu 5 (Tương tự): Cho I là trung điểm của đoạn thẳng AB. Hai vectơ \\vec{IA} và \\vec{IB} là hai vectơ:",
          options: ["Cùng hướng", "Ngược hướng và có cùng độ dài", "Vuông góc", "Không cùng phương"],
          correctIndex: 1, // B (Ngược hướng và cùng độ dài)
          explain: "Vì I nằm giữa A và B và IA = IB nên \\vec{IA} và \\vec{IB} ngược hướng và cùng độ dài."
        }
      }
    ],

    // DẠNG 2: TRẮC NGHIỆM ĐÚNG/SAI (3 CÂU - MỖI CÂU 4 Ý a, b, c, d)
    part2TrueFalse: [
      {
        id: "tf-10-7-1",
        num: 1,
        prompt: "Câu 1: Xét tính Đúng/Sai của các mệnh đề sau đây về khái niệm và tính chất của vectơ-không ($\\vec{0}$):",
        items: [
          {
            key: "a",
            statement: "Vectơ-không là vectơ có điểm đầu và điểm cuối trùng nhau.",
            isCorrect: true,
            explain: "Đúng theo định nghĩa SGK Toán 10 trang 48."
          },
          {
            key: "b",
            statement: "Độ dài của vectơ-không bằng 0, kí hiệu là $|\\vec{0}| = 0$.",
            isCorrect: true,
            explain: "Đúng. Khoảng cách giữa hai điểm trùng nhau bằng 0."
          },
          {
            key: "c",
            statement: "Vectơ-không được quy ước là cùng hướng và cùng phương với mọi vectơ.",
            isCorrect: true,
            explain: "Đúng theo quy ước chuẩn của SGK Toán 10."
          },
          {
            key: "d",
            statement: "Tồn tại hai vectơ-không khác nhau về độ dài.",
            isCorrect: false,
            explain: "Sai. Mọi vectơ-không đều có độ dài bằng 0 và tất cả các vectơ-không đều bằng nhau, kí hiệu chung là $\\vec{0}$."
          }
        ],
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Mệnh đề: 'Độ dài của vectơ \\vec{AA} bằng 0' là Đúng hay Sai?",
          items: [
            { key: "a", statement: "Độ dài vectơ \\vec{AA} bằng 0.", isCorrect: true, explain: "Đúng, \\vec{AA} là vectơ-không nên độ dài bằng 0." }
          ]
        }
      },
      {
        id: "tf-10-7-2",
        num: 2,
        prompt: "Câu 2: Cho tam giác đều $ABC$ có cạnh bằng $4\\text{ cm}$. Gọi $H$ là trung điểm của cạnh $BC$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          {
            key: "a",
            statement: "Độ dài của vectơ $\\vec{AB}$ bằng $4\\text{ cm}$.",
            isCorrect: true,
            explain: "Đúng. $|\\vec{AB}| = AB = 4\\text{ cm}$."
          },
          {
            key: "b",
            statement: "Hai vectơ $\\vec{HB}$ và $\\vec{HC}$ có cùng độ dài.",
            isCorrect: true,
            explain: "Đúng. Vì $H$ là trung điểm cạnh $BC$ nên $HB = HC = 2\\text{ cm} \\implies |\\vec{HB}| = |\\vec{HC}| = 2\\text{ cm}$."
          },
          {
            key: "c",
            statement: "Hai vectơ $\\vec{HB}$ và $\\vec{HC}$ là hai vectơ bằng nhau ($\\vec{HB} = \\vec{HC}$).",
            isCorrect: false,
            explain: "Sai. Hai vectơ $\\vec{HB}$ và $\\vec{HC}$ ngược hướng nhau nên chúng không bằng nhau ($\\vec{HB} = -\\vec{HC}$)."
          },
          {
            key: "d",
            statement: "Độ dài của vectơ $\\vec{AH}$ bằng $2\\sqrt{3}\\text{ cm}$.",
            isCorrect: true,
            explain: "Đúng. Đường cao tam giác đều cạnh $a = 4\\text{ cm}$ là $AH = \\dfrac{a\\sqrt{3}}{2} = \\dfrac{4\\sqrt{3}}{2} = 2\\sqrt{3}\\text{ cm} \\implies |\\vec{AH}| = 2\\sqrt{3}\\text{ cm}$."
          }
        ],
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cho tam giác đều ABC cạnh 6 cm. Mệnh đề: 'Độ dài vectơ \\vec{BC} bằng 6 cm' là Đúng hay Sai?",
          items: [
            { key: "a", statement: "Độ dài vectơ \\vec{BC} bằng 6 cm.", isCorrect: true, explain: "Đúng, |\\vec{BC}| = BC = 6 cm." }
          ]
        }
      },
      {
        id: "tf-10-7-3",
        num: 3,
        prompt: "Câu 3: Cho hình bình hành $ABCD$ tâm $O$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          {
            key: "a",
            statement: "Hai vectơ $\\vec{AB}$ và $\\vec{DC}$ cùng hướng và cùng độ dài.",
            isCorrect: true,
            explain: "Đúng. Cạnh $AB \\parallel DC$ và $AB = DC$, chiều từ $A \\to B$ trùng với chiều từ $D \\to C$ nên $\\vec{AB} = \\vec{DC}$."
          },
          {
            key: "b",
            statement: "$\\vec{AB} = \\vec{CD}$.",
            isCorrect: false,
            explain: "Sai. Hai vectơ $\\vec{AB}$ và $\\vec{CD}$ cùng phương, cùng độ dài nhưng ngược hướng nhau ($\\vec{AB} = -\\vec{CD}$)."
          },
          {
            key: "c",
            statement: "Hai vectơ $\\vec{OA}$ và $\\vec{OC}$ là hai vectơ ngược hướng.",
            isCorrect: true,
            explain: "Đúng. Vì tâm $O$ là trung điểm của đường chéo $AC$ nên từ $O \\to A$ và từ $O \\to C$ là hai hướng ngược nhau."
          },
          {
            key: "d",
            statement: "Có tất cả 4 vectơ khác vectơ-không có điểm đầu và điểm cuối là các đỉnh của hình bình hành $ABCD$ mà bằng vectơ $\\vec{AB}$.",
            isCorrect: false,
            explain: "Sai. Trong số các vectơ nối các đỉnh, chỉ có duy nhất một vectơ bằng $\\vec{AB}$ là vectơ $\\vec{DC}$."
          }
        ],
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Cho hình bình hành ABCD. Vectơ \\vec{AD} bằng vectơ nào?",
          items: [
            { key: "a", statement: "\\vec{AD} = \\vec{BC}", isCorrect: true, explain: "Đúng, \\vec{AD} và \\vec{BC} cùng hướng và cùng độ dài." }
          ]
        }
      }
    ],

    // DẠNG 3: CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (2 CÂU TOÁN THỰC TẾ)
    part3ShortAnswer: [
      {
        id: "sa-10-7-1",
        num: 1,
        prompt: "Câu 1: Một chiếc ca nô xuất phát từ bến $A$ đi thẳng về hướng Đông được $12\\text{ km}$ đến vị trí $C$, sau đó từ $C$ ca nô đổi hướng đi thẳng về hướng Nam được $5\\text{ km}$ đến bến $B$. Tính độ dài vectơ dịch chuyển tổng hợp $\\vec{AB}$ của ca nô từ bến $A$ đến bến $B$ (tính theo đơn vị kilômét).",
        correctAnswer: "13",
        acceptedAnswers: ["13", "13km", "13 km"],
        unit: "km",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vì hướng Đông vuông góc với hướng Nam nên tam giác $ACB$ vuông tại $C$.<br>Độ dài vectơ dịch chuyển $\\vec{AB}$ chính là độ dài đoạn thẳng nối từ vị trí ban đầu $A$ đến vị trí kết thúc $B$.<br>Áp dụng định lí Pythagore trong tam giác vuông $ACB$:<br>$$|\\vec{AB}| = AB = \\sqrt{AC^2 + BC^2} = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\text{ km}.$$",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Một máy bay bay từ A về hướng Tây 8 km, sau đó bay về hướng Bắc 6 km đến B. Tính độ dài vectơ dịch chuyển AB theo km.",
          correctAnswer: "10",
          acceptedAnswers: ["10", "10km"],
          unit: "km",
          explain: "Tam giác vuông có hai cạnh góc vuông 8 km và 6 km -> Cạnh huyền AB = sqrt(8^2 + 6^2) = 10 km."
        }
      },
      {
        id: "sa-10-7-2",
        num: 2,
        prompt: "Câu 2: Một vật nặng đang nằm yên cân bằng trên mặt bàn nằm ngang. Vật chịu tác động của hai lực: trọng lực $\\vec{P}$ hướng thẳng đứng xuống dưới và phản lực $\\vec{N}$ của mặt bàn hướng thẳng đứng lên trên. Biết độ lớn của trọng lực là $|\\vec{P}| = 25\\text{ N}$. Tính độ dài của phản lực $|\\vec{N}|$ theo đơn vị Newton.",
        correctAnswer: "25",
        acceptedAnswers: ["25", "25N", "25 N"],
        unit: "N",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vì vật nằm yên ở trạng thái cân bằng lực, hai lực tác dụng lên vật là hai lực trực đối (hai vectơ cùng phương, ngược hướng và có độ lớn bằng nhau):<br>$$\\vec{N} + \\vec{P} = \\vec{0} \\implies |\\vec{N}| = |\\vec{P}| = 25\\text{ N}.$$",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Một kiện hàng có khối lượng chịu trọng lực 40 N nằm cân bằng trên sàn. Phản lực của sàn có độ lớn bằng bao nhiêu N?",
          correctAnswer: "40",
          acceptedAnswers: ["40", "40N"],
          unit: "N",
          explain: "Ở trạng thái cân bằng, phản lực có độ lớn bằng trọng lực = 40 N."
        }
      }
    ]
  }
};

// Đồng bộ biến toàn cục
if (typeof window !== "undefined") {
  window.LESSON_10_7_DATA = window.LESSON_10_C4_B7_DATA;
}
