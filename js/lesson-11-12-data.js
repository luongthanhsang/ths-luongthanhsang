/**
 * BÀI HỌC SỐ: BÀI 12. ĐƯỜNG THẲNG VÀ MẶT PHẲNG SONG SONG (TOÁN 11 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - PHẦN I: Lời chào của Thầy Sáng + Nút Voice AI vàng đồng, chỉnh tốc độ
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 84 + Voice AI
 * - PHẦN III: Tiến trình bài học đa phương tiện:
 *             + Tình huống thực tế dây nhợ thợ xây tường gạch & xà ngang khung thành
 *             + Mục 1: Ba vị trí tương đối - Đồ họa TikZ/SVG CHUẨN 100% NGUYÊN BẢN ẢNH ĐÍNH KÈM
 *             + Mục 2: Điều kiện song song (Định lí 1) - Đồ họa Hình 4.36 & 4.35 SGK
 *             + Mục 3: Tính chất giao tuyến song song (Định lí 2 & 3) - Đồ họa Hình 4.37 & 4.38 SGK
 *             + Mục 4: Thiết diện & Bài toán thực tiễn - Đồ họa Hình 4.39 & Bài 4.20 SGK
 *             + Checkpoints POI chấm vàng tương tác tự động dừng và bật câu hỏi
 *             + Chốt kiến thức then chốt & Bảng so sánh
 * - PHẦN IV: Bài tập trắc nghiệm củng cố tương tác chuẩn cấu trúc mới Bộ GD&ĐT:
 *             + 5 câu trắc nghiệm 4 lựa chọn (Hoán vị đáp án A, B, C, D phong phú)
 *             + 3 câu trắc nghiệm Đúng/Sai (Đủ 4 ý a, b, c, d)
 *             + 2 câu trả lời ngắn thực tế
 *             + Tích hợp "Lời giải chi tiết ThS. Lương Thanh Sáng" & "Bài toán tương tự" đổi số tự động
 */

window.LESSON_11_C4_B12_DATA = {
  id: "11-c4-b12",
  grade: "11",
  gradeLabel: "Lớp 11",
  chapterId: "c11-4",
  chapter: "Chương IV",
  chapterTitle: "Quan hệ song song trong không gian",
  number: "Bài 12",
  title: "Đường thẳng và mặt phẳng song song",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào cả lớp! Thầy rất vui khi được đồng hành cùng các em trong bài học số 12 môn Toán lớp 11: Đường thẳng và mặt phẳng song song. Khi bước vào hình học không gian, nhiều bạn thường cảm thấy bỡ ngỡ vì phải tưởng tượng các hình vẽ ba chiều trên trang giấy phẳng. Nhưng các em đừng lo lắng, Thầy Sáng sẽ chia sẻ những bí quyết tư duy vô cùng trực quan và dễ hiểu, giúp các em tự tin làm chủ mọi dạng bài. Nào, Thầy trò mình cùng bắt đầu tiết học với thật nhiều năng lượng nhé!",
    audioScript: "Thầy Sáng chào cả lớp! Thầy rất vui khi được đồng hành cùng các em trong bài học số 12 môn Toán lớp 11: Đường thẳng và mặt phẳng song song. Khi bước vào hình học không gian, nhiều bạn thường cảm thấy bỡ ngỡ vì phải tưởng tượng các hình vẽ ba chiều trên trang giấy phẳng. Nhưng các em đừng lo lắng, Thầy Sáng sẽ chia sẻ những bí quyết tư duy vô cùng trực quan và dễ hiểu, giúp các em tự tin làm chủ mọi dạng bài. Nào, Thầy trò mình cùng bắt đầu tiết học với thật nhiều năng lượng nhé!",
    audioUrl: "assets/audio/b12_welcome.mp3",
    buttonLabel: "Nghe thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 84)
  // =========================================================================
  learningGoals: [
    "Nhận biết và phân biệt chính xác 3 vị trí tương đối giữa đường thẳng và mặt phẳng: song song, cắt nhau tại một điểm, và đường thẳng nằm trong mặt phẳng.",
    "Làm chủ Định lí 1 (Dấu hiệu nhận biết): Chứng minh đường thẳng song song với mặt phẳng bằng cách chứng minh nó song song với một đường thẳng nằm trong mặt phẳng đó.",
    "Làm chủ Định lí 2 (Tính chất giao tuyến song song): Vận dụng để tìm giao tuyến song song và xác định thiết diện trong hình chóp, hình tứ diện.",
    "Vận dụng linh hoạt các tính chất vào thực tiễn: Giải thích hiện tượng căng dây nhợ thợ xây, mép xà ngang khung thành bóng đá và chuyển động cánh cửa mở quay."
  ],
  goalsAudioUrl: "assets/audio/b12_goals.mp3",
  goalsAudioScript: "Mục tiêu và yêu cầu cần đạt: Sau bài học này, các em cần đạt được bốn mục tiêu trọng tâm: Thứ nhất, nhận biết và phân biệt chính xác ba vị trí tương đối giữa đường thẳng và mặt phẳng trong không gian. Thứ hai, nắm vững Định lí 1 để giải thích điều kiện một đường thẳng song song với một mặt phẳng. Thứ ba, hiểu rõ và vận dụng linh hoạt các tính chất cơ bản, đặc biệt là Định lí 2 về giao tuyến song song. Thứ tư, biết cách liên hệ và mô tả các hình ảnh thực tế quen thuộc trong đời sống, như dây nhợ thợ xây, khung thành bóng đá hay mép cửa phòng học.",
  goalsButtonLabel: "Nghe thầy Sáng phổ biến mục tiêu",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN
  // =========================================================================

  // 1. TÌNH HUỐNG THỰC TẾ MỞ ĐẦU (HOOK)
  hook: {
    title: "Tình huống mở đầu: Sợi dây nhợ của bác thợ xây và xà ngang khung thành",
    story: "Khi xây tường gạch, người thợ xây thường bắt đầu bằng việc đặt các viên gạch dẫn ở hai đầu bức tường, sau đó căng một sợi dây nhợ dọc theo cạnh của các viên gạch đó để làm chuẩn rồi mới xây các viên gạch tiếp theo. Việc căng dây như vậy có tác dụng gì? Dưới góc nhìn hình học không gian, vị trí giữa dây căng và mặt đất được mô tả như thế nào? Và trên sân bóng đá, tại sao xà ngang khung thành luôn giữ khoảng cách cố định 2,44 mét so với mặt sân dù được quan sát từ bất kỳ góc độ nào?",
    audioScript: "Bài toán dẫn nhập: Khi xây tường gạch, người thợ xây thường bắt đầu bằng việc đặt các viên gạch dẫn ở hai đầu bức tường, sau đó căng một sợi dây nhợ dọc theo cạnh của các viên gạch đó để làm chuẩn rồi mới xây các viên gạch tiếp theo. Việc căng dây như vậy có tác dụng gì? Dưới góc nhìn hình học không gian, vị trí giữa dây căng và mặt đất được mô tả như thế nào? Và trên sân bóng đá, tại sao xà ngang khung thành luôn giữ khoảng cách cố định hai mét so với mặt sân? Chúng ta cùng đi tìm câu trả lời ngay sau đây.",
    audioUrl: "assets/audio/b12_hook.mp3",
    buttonLabel: "Nghe thầy Sáng đặt vấn đề",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    illustrationSvg: `
      <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 15px; margin: 15px 0; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.03);">
        <svg viewBox="0 0 760 260" style="width: 100%; max-width: 720px; height: auto; display: block; margin: 0 auto;">
          <defs>
            <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#86efac" stop-opacity="0.6"/>
              <stop offset="100%" stop-color="#4ade80" stop-opacity="0.3"/>
            </linearGradient>
            <linearGradient id="wallGrad11" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#fca5a5"/>
              <stop offset="100%" stop-color="#f87171"/>
            </linearGradient>
          </defs>

          <!-- Mặt đất / Sân phẳng -->
          <polygon points="40,210 260,160 720,160 500,210" fill="url(#groundGrad)" stroke="#16a34a" stroke-width="1.8"/>
          <text x="560" y="195" font-family="sans-serif" font-size="14" font-weight="bold" fill="#15803d">Mặt đất phẳng (Mặt phẳng đáy)</text>

          <!-- KHUNG HÌNH 1: DÂY NHỢ THỢ XÂY -->
          <!-- Hàng gạch đang xây -->
          <g transform="translate(60, 40)">
            <!-- Bức tường gạch -->
            <rect x="20" y="80" width="180" height="60" fill="url(#wallGrad11)" stroke="#b91c1c" stroke-width="1.5" rx="3"/>
            <!-- Các mạch gạch -->
            <line x1="20" y1="100" x2="200" y2="100" stroke="#fee2e2" stroke-width="1.5"/>
            <line x1="20" y1="120" x2="200" y2="120" stroke="#fee2e2" stroke-width="1.5"/>
            <line x1="60" y1="80" x2="60" y2="100" stroke="#fee2e2" stroke-width="1.5"/>
            <line x1="120" y1="80" x2="120" y2="100" stroke="#fee2e2" stroke-width="1.5"/>
            <line x1="160" y1="80" x2="160" y2="100" stroke="#fee2e2" stroke-width="1.5"/>
            <line x1="90" y1="100" x2="90" y2="120" stroke="#fee2e2" stroke-width="1.5"/>
            <line x1="150" y1="100" x2="150" y2="120" stroke="#fee2e2" stroke-width="1.5"/>

            <!-- Sợi dây nhợ căng chuẩn màu vàng cam -->
            <line x1="10" y1="70" x2="210" y2="70" stroke="#ea580c" stroke-width="3" stroke-linecap="round"/>
            <circle cx="10" cy="70" r="4" fill="#c2410c"/>
            <circle cx="210" cy="70" r="4" fill="#c2410c"/>
            <text x="35" y="60" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c2410c">Sợi dây nhợ căng chuẩn (Đường d)</text>

            <!-- Mũi tên gióng song song mặt đất -->
            <line x1="110" y1="75" x2="110" y2="140" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
            <text x="75" y="155" font-family="sans-serif" font-size="12" fill="#0369a1" font-weight="bold">d // Mặt đất</text>
            <text x="35" y="175" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Hình A: Dây nhợ thợ xây</text>
          </g>

          <!-- KHUNG HÌNH 2: KHUNG THÀNH BÓNG ĐÁ -->
          <g transform="translate(420, 20)">
            <!-- Hai cột dọc -->
            <line x1="80" y1="50" x2="80" y2="170" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
            <line x1="260" y1="50" x2="260" y2="170" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
            <!-- Xà ngang -->
            <line x1="75" y1="50" x2="265" y2="50" stroke="#2563eb" stroke-width="4.5" stroke-linecap="round"/>
            <text x="100" y="40" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8">Xà ngang: d // Mặt sân</text>

            <!-- Lưới tượng trưng -->
            <line x1="80" y1="50" x2="110" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
            <line x1="260" y1="50" x2="290" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
            <line x1="110" y1="20" x2="290" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
            <line x1="110" y1="20" x2="110" y2="140" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="290" y1="20" x2="290" y2="140" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>

            <!-- Kích thước chiều cao 2.44m -->
            <line x1="55" y1="50" x2="55" y2="170" stroke="#64748b" stroke-width="1.5"/>
            <line x1="50" y1="50" x2="60" y2="50" stroke="#64748b" stroke-width="1.5"/>
            <line x1="50" y1="170" x2="60" y2="170" stroke="#64748b" stroke-width="1.5"/>
            <text x="12" y="115" font-family="sans-serif" font-size="12" font-weight="bold" fill="#475569">h = 2,44m</text>

            <text x="105" y="195" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Hình B: Khung thành bóng đá</text>
          </g>
        </svg>
        <div style="font-size: 0.88rem; color: #475569; margin-top: 6px; font-weight: 500;">
          <i class="fa-solid fa-circle-info" style="color: #0284c7;"></i> Mô phỏng trực quan: Sợi dây nhợ và xà ngang khung thành luôn song song với mặt sàn / mặt đất.
        </div>
      </div>
    `,
    question: "Nếu chỉ cần sợi dây nhợ song song với một đường mạch vữa gạch nằm trên mặt sàn, ta có thể khẳng định ngay sợi dây song song với toàn bộ mặt sàn không? Định lí nào đảm bảo điều đó?",
    bridge: "Hãy cùng Thầy Sáng khám phá các quy tắc hình học không gian nền tảng ngay sau đây!"
  },

  // 2. CÁC MỤC LÝ THUYẾT BÀI HỌC (SECTIONS)
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1. VỊ TRÍ TƯƠNG ĐỐI CỦA ĐƯỜNG THẲNG VÀ MẶT PHẲNG
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "Vị trí tương đối của đường thẳng và mặt phẳng",
      audioScript: "Mục một, Vị trí tương đối của đường thẳng và mặt phẳng: Trong không gian, cho đường thẳng d và mặt phẳng an-pha. Ta có ba trường hợp tương đối: Trường hợp thứ nhất, nếu d và an-pha không có điểm chung nào, ta nói d song song với an-pha, ký hiệu là d song song an-pha. Trường hợp thứ hai, nếu d và an-pha có đúng một điểm chung M, ta nói d cắt an-pha tại điểm M. Trường hợp thứ ba, nếu d và an-pha có từ hai điểm chung trở lên, thì toàn bộ đường thẳng d nằm trong mặt phẳng an-pha, ký hiệu là d là tập con của an-pha.",
      audioUrl: "assets/audio/b12_sec1.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-11-12-sec1-1",
          time: 12,
          title: "Giây 12: Khái niệm song song",
          question: "Đường thẳng $d$ và mặt phẳng $(\\alpha)$ được gọi là song song với nhau khi:",
          options: [
            "$d$ và $(\\alpha)$ không có điểm chung nào",
            "$d$ có duy nhất một điểm chung với $(\\alpha)$",
            "$d$ có từ hai điểm chung trở lên với $(\\alpha)$",
            "$d$ vuông góc với $(\\alpha)$"
          ],
          correctIndex: 0,
          hint: "Song song nghĩa là không giao nhau, tức là số lượng điểm chung bằng 0.",
          explain: "Chính xác! Theo định nghĩa SGK trang 84: Nếu đường thẳng $d$ và mặt phẳng $(\\alpha)$ không có điểm chung thì ta nói $d$ song song với $(\\alpha)$, kí hiệu $d \\parallel (\\alpha)$."
        },
        {
          id: "poi-11-12-sec1-2",
          time: 24,
          title: "Giây 24: Trường hợp có từ 2 điểm chung",
          question: "Nếu đường thẳng $d$ và mặt phẳng $(\\alpha)$ có hai điểm chung phân biệt $A$ và $B$ thì:",
          options: [
            "$d$ cắt $(\\alpha)$ tại hai điểm",
            "$d$ nằm hoàn toàn trong mặt phẳng $(\\alpha)$",
            "$d$ song song với mặt phẳng $(\\alpha)$",
            "$d$ chéo nhau với $(\\alpha)$"
          ],
          correctIndex: 1,
          hint: "Đường thẳng được xác định duy nhất bởi 2 điểm. Nếu cả 2 điểm đều thuộc mặt phẳng thì mọi điểm của đường thẳng đều thuộc mặt phẳng đó.",
          explain: "Rất chuẩn! Một trong các tiên đề cơ bản của hình học không gian: Nếu đường thẳng có 2 điểm phân biệt thuộc mặt phẳng thì toàn bộ đường thẳng nằm trong mặt phẳng đó, kí hiệu $d \\subset (\\alpha)$."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Ba vị trí tương đối giữa đường thẳng và mặt phẳng",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Nội dung cốt lõi - Khung kiến thức SGK trang 84]:</div>
              <p style="margin-bottom: 8px;">Cho đường thẳng $d$ và mặt phẳng $(\\alpha)$. Căn cứ vào số lượng điểm chung, ta có <strong>ba vị trí tương đối</strong> sau:</p>
              <ul class="sgk-box-list">
                <li>
                  <strong>Trường hợp 1:</strong> $d$ và $(\\alpha)$ <em>không có điểm chung</em>. Ta nói $d$ <strong>song song</strong> với $(\\alpha)$ (hoặc $(\\alpha)$ song song với $d$).
                  <br>Kí hiệu: $d \\parallel (\\alpha)$ hoặc $(\\alpha) \\parallel d$. Khi đó: $d \\cap (\\alpha) = \\varnothing$.
                </li>
                <li>
                  <strong>Trường hợp 2:</strong> $d$ và $(\\alpha)$ <em>có duy nhất một điểm chung</em> $M$. Ta nói $d$ <strong>cắt</strong> $(\\alpha)$ tại $M$ (hoặc $d$ và $(\\alpha)$ gặp nhau tại $M$).
                  <br>Kí hiệu: $d \\cap (\\alpha) = \\{M\\}$ hay $d \\cap (\\alpha) = M$.
                </li>
                <li>
                  <strong>Trường hợp 3:</strong> $d$ và $(\\alpha)$ <em>có từ hai điểm chung phân biệt trở lên</em>. Khi đó toàn bộ đường thẳng $d$ nằm trọn trong mặt phẳng $(\\alpha)$. Ta nói $d$ <strong>nằm trong</strong> $(\\alpha)$ (hoặc $(\\alpha)$ chứa $d$).
                  <br>Kí hiệu: $d \\subset (\\alpha)$ hay $(\\alpha) \\supset d$.
                </li>
              </ul>
            </div>

            <!-- HÌNH VẼ MINH HỌA NGUYÊN BẢN THEO ẢNH ĐÍNH KÈM CỦA THẦY SÁNG -->
            <div style="background: #ffffff; border: 1.5px solid #0284c7; border-radius: 12px; padding: 18px; margin: 18px 0; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.08); text-align: center;">
              <div style="font-weight: 700; color: #0369a1; font-size: 1.02rem; margin-bottom: 12px;">
                <i class="fa-solid fa-shapes"></i> Hình minh họa: Ba vị trí tương đối giữa đường thẳng $d$ và mặt phẳng $(\\alpha)$
              </div>

              <svg viewBox="0 0 780 230" style="width: 100%; max-width: 760px; height: auto; display: block; margin: 0 auto; background: #ffffff;">
                <defs>
                  <!-- Gradient nhẹ cho mặt phẳng -->
                  <linearGradient id="planeGradAlpha" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#ffffff"/>
                    <stop offset="100%" stop-color="#f8fafc"/>
                  </linearGradient>
                </defs>

                <!-- ==================== HÌNH 1: d // (alpha) ==================== -->
                <g id="fig-parallel">
                  <!-- Đường thẳng d nằm ngang song song phía trên -->
                  <line x1="45" y1="35" x2="235" y2="35" stroke="#000000" stroke-width="2.5" stroke-linecap="round"/>
                  <!-- Nhãn d màu xanh cyan ở góc phải trên -->
                  <text x="215" y="24" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-style="italic" font-weight="bold" fill="#00a8e8">d</text>

                  <!-- Mặt phẳng (alpha) dạng hình bình hành -->
                  <polygon points="25,145 65,55 245,55 205,145" fill="url(#planeGradAlpha)" stroke="#000000" stroke-width="2"/>

                  <!-- Cung góc alpha ở góc dưới trái -->
                  <path d="M 45,145 A 25 25 0 0 0 54,122" fill="none" stroke="#000000" stroke-width="1.8"/>
                  <!-- Chữ alpha màu xanh cyan bên trong góc -->
                  <text x="36" y="140" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-style="italic" font-weight="bold" fill="#00a8e8">α</text>

                  <!-- Chú thích phía dưới: d // (alpha) -->
                  <text x="135" y="185" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="bold" fill="#00a8e8">d // (α)</text>
                </g>

                <!-- ==================== HÌNH 2: d cap (alpha) = {M} ==================== -->
                <g id="fig-intersect">
                  <!-- Mặt phẳng (alpha) -->
                  <polygon points="285,145 325,55 505,55 465,145" fill="url(#planeGradAlpha)" stroke="#000000" stroke-width="2"/>

                  <!-- Cung góc alpha ở góc dưới trái -->
                  <path d="M 305,145 A 25 25 0 0 0 314,122" fill="none" stroke="#000000" stroke-width="1.8"/>
                  <text x="296" y="140" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-style="italic" font-weight="bold" fill="#00a8e8">α</text>

                  <!-- Đường thẳng d cắt xiên:
                       Điểm trên: (380, 20)
                       Điểm xuyên qua mặt phẳng M: (420, 95)
                       Điểm chạm cạnh đáy: (450, 145)
                       Điểm dưới cùng nhô ra ngoài: (465, 175)
                  -->
                  <!-- Đoạn trên mặt phẳng: NÉT LIỀN ĐEN -->
                  <line x1="380" y1="20" x2="420" y2="95" stroke="#000000" stroke-width="2.5" stroke-linecap="round"/>

                  <!-- Điểm giao M: Chấm tròn xanh cyan -->
                  <circle cx="420" cy="95" r="4.5" fill="#00a8e8"/>
                  <!-- Nhãn M màu xanh cyan ở góc phải trên điểm M -->
                  <text x="432" y="86" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-style="italic" font-weight="bold" fill="#00a8e8">M</text>

                  <!-- Đoạn khuất bên trong mặt phẳng từ M đến cạnh đáy: NÉT ĐỨT (DASHED) -->
                  <line x1="420" y1="95" x2="450" y2="145" stroke="#000000" stroke-width="2.5" stroke-dasharray="5,5"/>

                  <!-- Đoạn ló ra ngoài mặt phẳng: NÉT LIỀN ĐEN -->
                  <line x1="450" y1="145" x2="465" y2="175" stroke="#000000" stroke-width="2.5" stroke-linecap="round"/>

                  <!-- Chú thích phía dưới: d cap (alpha) = {M} -->
                  <text x="395" y="185" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="bold" fill="#00a8e8">d ∩ (α) = {M}</text>
                </g>

                <!-- ==================== HÌNH 3: d subset (alpha) ==================== -->
                <g id="fig-subset">
                  <!-- Mặt phẳng (alpha) -->
                  <polygon points="545,145 585,55 765,55 725,145" fill="url(#planeGradAlpha)" stroke="#000000" stroke-width="2"/>

                  <!-- Cung góc alpha ở góc dưới trái -->
                  <path d="M 565,145 A 25 25 0 0 0 574,122" fill="none" stroke="#000000" stroke-width="1.8"/>
                  <text x="556" y="140" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-style="italic" font-weight="bold" fill="#00a8e8">α</text>

                  <!-- Đường thẳng d nằm trọn vẹn trong mặt phẳng: NÉT LIỀN ĐEN -->
                  <line x1="590" y1="130" x2="740" y2="85" stroke="#000000" stroke-width="2.5" stroke-linecap="round"/>

                  <!-- Hai chấm tròn xanh cyan trên d biểu thị có từ 2 điểm chung trở lên -->
                  <circle cx="640" cy="115" r="4.5" fill="#00a8e8"/>
                  <circle cx="695" cy="98.5" r="4.5" fill="#00a8e8"/>

                  <!-- Nhãn d màu xanh cyan ở phía trên bên phải -->
                  <text x="715" y="75" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-style="italic" font-weight="bold" fill="#00a8e8">d</text>

                  <!-- Chú thích phía dưới: d subset (alpha) -->
                  <text x="655" y="185" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="bold" fill="#00a8e8">d ⊂ (α)</text>
                </g>
              </svg>

              <div style="font-size: 0.9rem; color: #0369a1; font-weight: 600; margin-top: 10px;">
                <i class="fa-solid fa-circle-check"></i> Đồ họa chuẩn xác 100% theo nguyên bản: nét đứt dưới mặt phẳng và các ký hiệu toán học $d \\parallel (\\alpha)$, $d \\cap (\\alpha) = \\{M\\}$, $d \\subset (\\alpha)$.
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 1: Nhận biết vị trí tương đối trong mô hình phòng học",
            problem: "Quan sát một căn phòng học hình hộp chữ nhật $ABCD.A'B'C'D'$:<br>a) Nêu vị trí tương đối của mép tường $A'B'$ với mặt sàn nhà $(ABCD)$.<br>b) Nêu vị trí tương đối của cây cột nhà $AA'$ với mặt sàn $(ABCD)$.<br>c) Nêu vị trí tương đối của đường gờ chân tường $AB$ với mặt sàn $(ABCD)$.",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <ul>
                <li><strong>a) Mép tường $A'B'$ và mặt sàn $(ABCD)$</strong>: Đoạn thẳng $A'B'$ nằm trên trần nhà, không có bất kỳ điểm chung nào với mặt sàn $(ABCD)$. Do đó: $A'B' \\parallel (ABCD)$.</li>
                <li><strong>b) Cột nhà $AA'$ và mặt sàn $(ABCD)$</strong>: Cột thẳng đứng chạm mặt sàn tại đúng một điểm duy nhất là chân cột $A$. Do đó: $AA' \\cap (ABCD) = \\{A\\}$ (đường thẳng cắt mặt phẳng).</li>
                <li><strong>c) Đường gờ chân tường $AB$ và mặt sàn $(ABCD)$</strong>: Mọi điểm trên đường viền gạch chân tường $AB$ đều nằm trên mặt sàn nhà. Do đó: $AB \\subset (ABCD)$.</li>
              </ul>
            `,
            teacherGuidance: "Khi gặp bài toán thực tế, các em chỉ cần tìm số điểm chung giữa vật thể dạng đường thẳng và bề mặt dạng mặt phẳng: 0 điểm chung là song song, 1 điểm chung là cắt, từ 2 điểm chung trở lên là nằm trong!",
            similarProblem: "Trong hình lập phương $ABCD.A'B'C'D'$, hãy xác định vị trí tương đối giữa đường chéo mặt trên $A'C'$ và mặt phẳng đáy $(ABCD)$, và giữa đường thẳng $BC'$ với mặt phẳng $(ABCD)$."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2. ĐIỀU KIỆN ĐỂ ĐƯỜNG THẲNG SONG SONG VỚI MẶT PHẲNG (ĐỊNH LÍ 1)
    // -----------------------------------------------------------------------
    {
      num: "2",
      title: "Điều kiện để đường thẳng song song với mặt phẳng",
      audioScript: "Mục hai, Điều kiện để đường thẳng song song với mặt phẳng: Để chứng minh đường thẳng a song song với mặt phẳng P, chúng ta có một định lý nền tảng cực kỳ quan trọng, đó là Định lí 1: Nếu đường thẳng a không nằm trong mặt phẳng P và song song với một đường thẳng b nằm trong P, thì a song song với mặt phẳng P. Thầy tặng các em một câu thần chú dễ nhớ: Muốn đường song song với mặt, hãy tìm trong mặt một đường song song. Chỉ cần tìm được đường b nằm sẵn trong P mà song song với a, bài toán xem như đã được giải quyết.",
      audioUrl: "assets/audio/b12_sec2.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-11-12-sec2-1",
          time: 11,
          title: "Giây 11: Dấu hiệu nhận biết Định lí 1",
          question: "Để chứng minh đường thẳng $a$ song song với mặt phẳng $(P)$, ta cần chỉ ra những điều kiện nào sau đây?",
          options: [
            "Chỉ cần $a$ song song với một đường thẳng $b$ nằm trong $(P)$",
            "$a$ không nằm trong $(P)$ và $a$ song song với một đường thẳng $b$ nằm trong $(P)$",
            "$a$ và $(P)$ cùng vuông góc với một đường thẳng thứ ba",
            "$a$ cắt một đường thẳng $b$ nằm trong $(P)$"
          ],
          correctIndex: 1,
          hint: "Bắt buộc phải có điều kiện loại trừ: đường thẳng a không được nằm sẵn trong mặt phẳng (P).",
          explain: "Chính xác! Định lí 1 (Dấu hiệu nhận biết) nêu rõ: Nếu $a \\not\\subset (P)$ và $a \\parallel b$ với $b \\subset (P)$ thì $a \\parallel (P)$."
        },
        {
          id: "poi-11-12-sec2-2",
          time: 21,
          title: "Giây 21: Vận dụng trong hình chóp",
          question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Đường thẳng $AB$ song song với mặt phẳng nào sau đây?",
          options: [
            "Mặt phẳng $(SAB)$",
            "Mặt phẳng $(SBC)$",
            "Mặt phẳng $(SCD)$",
            "Mặt phẳng $(SAD)$"
          ],
          correctIndex: 2,
          hint: "Đáy ABCD là hình bình hành nên AB // CD. Hãy tìm mặt phẳng nào chứa cạnh CD mà không chứa AB.",
          explain: "Tuyệt vời! Ta có $AB \\parallel CD$ (do $ABCD$ là hình bình hành). Mà $CD \\subset (SCD)$ và $AB \\not\\subset (SCD)$, do đó theo Định lí 1 suy ra $AB \\parallel (SCD)$."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Định lí 1 (Dấu hiệu nhận biết đường thẳng song song mặt phẳng)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Định lí 1 - SGK trang 85]:</div>
              <p style="font-size: 1.05rem; font-weight: 600; color: #1e3a8a; line-height: 1.6;">
                Nếu đường thẳng $a$ không nằm trong mặt phẳng $(P)$ và $a$ song song với một đường thẳng $b$ nằm trong $(P)$ thì $a$ song song với $(P)$.
              </p>
              <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 10px 14px; margin: 10px 0; border-radius: 0 8px 8px 0;">
                <strong>Kí hiệu tóm tắt phương pháp chứng minh:</strong>
                <div style="text-align: center; font-size: 1.15rem; font-weight: bold; margin: 8px 0; color: #1d4ed8;">
                  $$\\begin{cases} a \\not\\subset (P) \\\\ b \\subset (P) \\\\ a \\parallel b \\end{cases} \\implies a \\parallel (P)$$
                </div>
              </div>
            </div>

            <!-- HÌNH MINH HỌA 4.36 SGK TRANG 85 -->
            <div style="background: #ffffff; border: 1.5px solid #2563eb; border-radius: 12px; padding: 18px; margin: 18px 0; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.08); text-align: center;">
              <div style="font-weight: 700; color: #1e40af; font-size: 1.02rem; margin-bottom: 12px;">
                <i class="fa-solid fa-cube"></i> Hình minh họa 4.36 (SGK trang 85): Mô hình Định lí 1
              </div>

              <svg viewBox="0 0 680 280" style="width: 100%; max-width: 620px; height: auto; display: block; margin: 0 auto; background: #ffffff;">
                <defs>
                  <linearGradient id="planeP_Grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#f0f9ff"/>
                    <stop offset="100%" stop-color="#e0f2fe"/>
                  </linearGradient>
                  <linearGradient id="planeQ_Grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#fef3c7" stop-opacity="0.7"/>
                    <stop offset="100%" stop-color="#fde68a" stop-opacity="0.4"/>
                  </linearGradient>
                </defs>

                <!-- Mặt phẳng nằm ngang (P) -->
                <polygon points="60,240 160,110 620,110 520,240" fill="url(#planeP_Grad)" stroke="#0369a1" stroke-width="2"/>
                <text x="80" y="225" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="bold" fill="#0369a1">(P)</text>

                <!-- Mặt phẳng cắt đứng xiên (Q) đi qua giao tuyến b -->
                <!-- Đỉnh của (Q): (190, 30), (510, 30), (450, 175), (130, 175) -->
                <polygon points="130,175 190,30 570,30 510,175" fill="url(#planeQ_Grad)" stroke="#d97706" stroke-width="1.8" stroke-dasharray="2,2"/>
                <text x="540" y="55" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="bold" fill="#d97706">(Q)</text>

                <!-- Giao tuyến b nằm trong (P) và (Q) -->
                <line x1="110" y1="175" x2="530" y2="175" stroke="#b45309" stroke-width="3" stroke-linecap="round"/>
                <text x="540" y="180" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-style="italic" font-weight="bold" fill="#b45309">b</text>

                <!-- Đường thẳng a nằm trong (Q), song song với b -->
                <line x1="170" y1="65" x2="590" y2="65" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
                <text x="600" y="70" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-style="italic" font-weight="bold" fill="#2563eb">a</text>

                <!-- Ký hiệu song song mũi tên kép -->
                <path d="M 340,65 L 350,60 M 340,65 L 350,70" stroke="#2563eb" stroke-width="2.5" fill="none"/>
                <path d="M 350,65 L 360,60 M 350,65 L 360,70" stroke="#2563eb" stroke-width="2.5" fill="none"/>

                <path d="M 300,175 L 310,170 M 300,175 L 310,180" stroke="#b45309" stroke-width="2.5" fill="none"/>
                <path d="M 310,175 L 320,170 M 310,175 L 320,180" stroke="#b45309" stroke-width="2.5" fill="none"/>
              </svg>

              <div style="font-size: 0.92rem; color: #1e40af; font-weight: 600; margin-top: 10px;">
                <i class="fa-solid fa-lightbulb" style="color: #f59e0b;"></i> Thần chú Thầy Sáng: <em>"Muốn đường song song với mặt, hãy tìm trong mặt một đường song song!"</em>
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 2 (Luyện tập 1 SGK tr. 85): Đường trung bình trong tứ diện",
            problem: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của các cạnh $AB$ và $AC$. Chứng minh rằng đường thẳng $MN$ song song với mặt phẳng $(BCD)$.",
            solution: `
              <p><strong>Lời giải mẫu chuẩn chỉ của ThS. Lương Thanh Sáng:</strong></p>
              <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; margin: 10px 0; text-align: center;">
                <svg viewBox="0 0 460 260" style="width: 100%; max-width: 400px; height: auto; display: block; margin: 0 auto;">
                  <!-- Đỉnh A: (220, 30) -->
                  <!-- Đáy BCD: B(80, 210), C(380, 210), D(270, 160) -->
                  <!-- Cạnh khuất AD nét đứt: (220, 30) -> (270, 160) -->
                  <!-- Cạnh đáy khuất BD, CD nét đứt -->
                  <line x1="80" y1="210" x2="270" y2="160" stroke="#64748b" stroke-width="1.8" stroke-dasharray="4,4"/>
                  <line x1="270" y1="160" x2="380" y2="210" stroke="#64748b" stroke-width="1.8" stroke-dasharray="4,4"/>
                  <line x1="220" y1="30" x2="270" y2="160" stroke="#64748b" stroke-width="1.8" stroke-dasharray="4,4"/>

                  <!-- Các cạnh thấy nét liền -->
                  <line x1="220" y1="30" x2="80" y2="210" stroke="#0f172a" stroke-width="2.2"/>
                  <line x1="220" y1="30" x2="380" y2="210" stroke="#0f172a" stroke-width="2.2"/>
                  <line x1="80" y1="210" x2="380" y2="210" stroke="#0f172a" stroke-width="2.2"/>

                  <!-- Điểm trung điểm M trên AB: (150, 120) -->
                  <!-- Điểm trung điểm N trên AC: (300, 120) -->
                  <circle cx="150" cy="120" r="4.5" fill="#ea580c"/>
                  <circle cx="300" cy="120" r="4.5" fill="#ea580c"/>
                  <line x1="150" y1="120" x2="300" y2="120" stroke="#ea580c" stroke-width="2.8"/>

                  <!-- Nhãn đỉnh -->
                  <text x="215" y="20" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#0f172a">A</text>
                  <text x="55" y="225" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#0f172a">B</text>
                  <text x="390" y="225" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#0f172a">C</text>
                  <text x="280" y="165" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#0f172a">D</text>
                  <text x="125" y="118" font-family="'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="bold" fill="#ea580c">M</text>
                  <text x="312" y="118" font-family="'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="bold" fill="#ea580c">N</text>
                </svg>
                <div style="font-size: 0.85rem; color: #64748b; margin-top: 4px;">Hình minh họa 4.35 (SGK trang 85): Tứ diện $ABCD$ và đường trung bình $MN$</div>
              </div>

              <ul>
                <li>Trong tam giác $ABC$, vì $M$ là trung điểm của cạnh $AB$ và $N$ là trung điểm của cạnh $AC$, nên $MN$ là đường trung bình của tam giác $ABC$.</li>
                <li>Suy ra: $MN \\parallel BC$.</li>
                <li>Mặt khác: $BC \\subset (BCD)$ và đường thẳng $MN$ không nằm trong mặt phẳng $(BCD)$ (do $M, N$ nằm trên $AB, AC$).</li>
                <li>Áp dụng Định lí 1: $\\begin{cases} MN \\not\\subset (BCD) \\\\ BC \\subset (BCD) \\\\ MN \\parallel BC \\end{cases} \\implies MN \\parallel (BCD)$ (điều phải chứng minh).</li>
              </ul>
            `,
            teacherGuidance: "Luôn kiểm tra đủ 3 bước: 1. Đường thẳng không nằm trong mặt; 2. Đường thẳng song song với một đường khác; 3. Đường thẳng kia nằm sẵn trong mặt.",
            similarProblem: "Cho tứ diện $ABCD$. Gọi $P, Q$ lần lượt là trọng tâm của tam giác $ABC$ và tam giác $ABD$. Chứng minh rằng đường thẳng $PQ$ song song với mặt phẳng $(BCD)$."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3. TÍNH CHẤT CỦA ĐƯỜNG THẲNG SONG SONG VỚI MẶT PHẲNG (ĐỊNH LÍ 2 & 3)
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "Tính chất của đường thẳng song song với mặt phẳng",
      audioScript: "Mục ba, Tính chất của đường thẳng song song với mặt phẳng: Khi đã có đường thẳng a song song với mặt phẳng P, nếu một mặt phẳng Q chứa a và cắt P theo giao tuyến b, thì giao tuyến b bắt buộc phải song song với a. Đây chính là Định lí 2, chìa khóa vàng để tìm giao tuyến song song và giải các bài toán dựng thiết diện trong hình chóp và tứ diện. Ngoài ra, nếu hai mặt phẳng cắt nhau cùng song song với một đường thẳng, thì giao tuyến của chúng cũng song song với đường thẳng đó.",
      audioUrl: "assets/audio/b12_sec3.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-11-12-sec3-1",
          time: 10,
          title: "Giây 10: Định lí 2 về giao tuyến song song",
          question: "Cho đường thẳng $a \\parallel (P)$. Mặt phẳng $(Q)$ chứa $a$ cắt $(P)$ theo giao tuyến $b$. Khi đó vị trí tương đối giữa $a$ và $b$ là:",
          options: [
            "$a$ cắt $b$",
            "$a$ song song với $b$",
            "$a$ chéo nhau với $b$",
            "$a$ trùng với $b$"
          ],
          correctIndex: 1,
          hint: "Cả a và b cùng thuộc mặt phẳng (Q) và không có điểm chung vì a song song với (P). Hai đường thẳng đồng phẳng không có điểm chung thì song song.",
          explain: "Rất chính xác! Theo Định lí 2 SGK trang 86: Nếu $a \\parallel (P)$ và $(Q)$ chứa $a$ cắt $(P)$ theo giao tuyến $b$ thì $b \\parallel a$."
        },
        {
          id: "poi-11-12-sec3-2",
          time: 19,
          title: "Giây 19: Giao tuyến của hai mặt phẳng",
          question: "Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng $d$, thì giao tuyến của chúng (nếu có):",
          options: [
            "Cắt đường thẳng $d$",
            "Vuông góc với đường thẳng $d$",
            "Song song với đường thẳng $d$",
            "Chéo nhau với đường thẳng $d$"
          ],
          correctIndex: 2,
          hint: "Đây là hệ quả trực tiếp từ Định lí 3 về ba mặt phẳng cắt nhau đôi một theo ba giao tuyến.",
          explain: "Chuẩn xác! Theo Hệ quả SGK: Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có) cũng song song với đường thẳng đó."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Định lí 2 (Định lí giao tuyến song song)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Định lí 2 - SGK trang 86]:</div>
              <p style="font-size: 1.05rem; font-weight: 600; color: #1e3a8a; line-height: 1.6;">
                Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Nếu mặt phẳng $(Q)$ chứa $a$ và cắt $(P)$ theo giao tuyến $b$ thì $b$ song song với $a$.
              </p>
              <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 10px 14px; margin: 10px 0; border-radius: 0 8px 8px 0;">
                <strong>Kí hiệu tóm tắt:</strong>
                <div style="text-align: center; font-size: 1.15rem; font-weight: bold; margin: 8px 0; color: #1d4ed8;">
                  $$\\begin{cases} a \\parallel (P) \\\\ a \\subset (Q) \\\\ (P) \\cap (Q) = b \\end{cases} \\implies b \\parallel a$$
                </div>
              </div>
            </div>

            <!-- HÌNH MINH HỌA ĐỊNH LÍ 3 & HỆ QUẢ (HÌNH 4.37 & 4.38 SGK) -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin: 18px 0;">
              <!-- Khung Hình 4.37 -->
              <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 14px; text-align: center;">
                <div style="font-weight: 700; color: #0f172a; font-size: 0.95rem; margin-bottom: 8px;">
                  Hình 4.37: Ba giao tuyến đôi một song song
                </div>
                <svg viewBox="0 0 320 200" style="width: 100%; max-width: 300px; height: auto; display: block; margin: 0 auto;">
                  <!-- Lăng trụ tam giác hở biểu thị 3 mặt phẳng -->
                  <polygon points="60,160 160,180 260,140 260,40 160,80 60,60" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                  <!-- 3 giao tuyến a, b, c song song -->
                  <line x1="60" y1="60" x2="60" y2="160" stroke="#2563eb" stroke-width="2.5"/>
                  <line x1="160" y1="80" x2="160" y2="180" stroke="#2563eb" stroke-width="2.5"/>
                  <line x1="260" y1="40" x2="260" y2="140" stroke="#2563eb" stroke-width="2.5"/>
                  <text x="45" y="115" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-style="italic" font-weight="bold" fill="#2563eb">a</text>
                  <text x="170" y="135" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-style="italic" font-weight="bold" fill="#2563eb">b</text>
                  <text x="270" y="95" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-style="italic" font-weight="bold" fill="#2563eb">c</text>
                </svg>
                <div style="font-size: 0.82rem; color: #64748b; margin-top: 6px;">Định lí 3: Ba giao tuyến phân biệt hoặc đồng quy, hoặc đôi một song song.</div>
              </div>

              <!-- Khung Hình 4.38 -->
              <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 14px; text-align: center;">
                <div style="font-weight: 700; color: #0f172a; font-size: 0.95rem; margin-bottom: 8px;">
                  Hình 4.38: Mặt phẳng chứa $a$ và song song $b$
                </div>
                <svg viewBox="0 0 320 200" style="width: 100%; max-width: 300px; height: auto; display: block; margin: 0 auto;">
                  <!-- Mặt phẳng (P) -->
                  <polygon points="30,170 100,70 290,70 220,170" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
                  <text x="45" y="155" font-family="'Segoe UI', Roboto, sans-serif" font-size="17" font-weight="bold" fill="#16a34a">(P)</text>
                  <!-- Đường thẳng a nằm trong (P) -->
                  <line x1="60" y1="120" x2="250" y2="120" stroke="#15803d" stroke-width="2.5"/>
                  <text x="260" y="125" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-style="italic" font-weight="bold" fill="#15803d">a</text>
                  <!-- Đường thẳng b ở trên không gian, chéo với a -->
                  <line x1="120" y1="35" x2="280" y2="35" stroke="#ea580c" stroke-width="2.5"/>
                  <text x="290" y="40" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-style="italic" font-weight="bold" fill="#ea580c">b</text>
                </svg>
                <div style="font-size: 0.82rem; color: #64748b; margin-top: 6px;">Hệ quả: Cho hai đường chéo nhau $a, b$. Có duy nhất một mặt phẳng $(P) \\supset a$ và $(P) \\parallel b$.</div>
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 3: Tìm giao tuyến song song trong hình chóp",
            problem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với hai đáy $AB$ và $CD$ ($AB > CD$). Gọi $M$ là một điểm thuộc cạnh $SC$. Hãy xác định giao tuyến của mặt phẳng $(ABM)$ và mặt phẳng $(SCD)$.",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <ul>
                <li>Ta có: Điểm $M$ thuộc cạnh $SC$, mà $SC \\subset (SCD)$ nên $M$ là điểm chung thứ nhất của hai mặt phẳng $(ABM)$ và $(SCD)$.</li>
                <li>Mặt khác, trong hình thang đáy $ABCD$, ta có $AB \\parallel CD$.</li>
                <li>Đường thẳng $AB \\subset (ABM)$ và đường thẳng $CD \\subset (SCD)$.</li>
                <li>Vì $AB \\parallel CD$ nên theo định lí giao tuyến song song (Định lí 2), giao tuyến $d$ của hai mặt phẳng $(ABM)$ và $(SCD)$ là đường thẳng đi qua điểm chung $M$ và song song với cả $AB$ và $CD$.</li>
                <li>Trong mặt phẳng $(SCD)$, từ điểm $M$ ta kẻ đường thẳng $Mx \\parallel CD$ cắt cạnh $SD$ tại điểm $N$.</li>
                <li>Khi đó đoạn thẳng $MN$ chính là giao tuyến cần tìm.</li>
              </ul>
            `,
            teacherGuidance: "Khi tìm giao tuyến của 2 mặt phẳng lần lượt chứa 2 đường thẳng song song, giao tuyến đó chắc chắn đi qua điểm chung và song song với 2 đường thẳng ấy!",
            similarProblem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Xác định giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4. XÁC ĐỊNH THIẾT DIỆN VÀ ỨNG DỤNG THỰC TIỄN
    // -----------------------------------------------------------------------
    {
      num: "4",
      title: "Xác định thiết diện và ứng dụng thực tiễn",
      audioScript: "Mục bốn, Ứng dụng xác định thiết diện và các bài toán thực tiễn: Khi một mặt phẳng đi qua một điểm và song song với hai đường thẳng chéo nhau, nó sẽ cắt các mặt của tứ diện hoặc hình chóp tạo thành thiết diện là hình bình hành hoặc hình thang. Trong đời sống thực tế, khi cửa ra vào quay quanh trục bản lề thẳng đứng vuông góc với sàn nhà, mép trên của cánh cửa luôn di chuyển song song với mặt sàn, tạo nên một chuyển động hình học vô cùng nhịp nhàng và chuẩn xác.",
      audioUrl: "assets/audio/b12_sec4.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-11-12-sec4-1",
          time: 10,
          title: "Giây 10: Dạng của thiết diện song song hai cạnh đối",
          question: "Khi cắt một tứ diện bởi mặt phẳng song song với hai cạnh đối diện của tứ diện đó, thiết diện thu được là hình gì?",
          options: [
            "Tam giác cân",
            "Hình bình hành (hoặc hình thang)",
            "Hình ngũ giác",
            "Hình tròn"
          ],
          correctIndex: 1,
          hint: "Bốn giao tuyến trên bốn mặt của tứ diện từng đôi một song song với hai cạnh đối ban đầu.",
          explain: "Chính xác! Thiết diện cắt bởi mặt phẳng song song với hai cạnh đối của tứ diện có các cạnh đối song song với nhau, do đó nó là một hình bình hành (hoặc hình thang)."
        },
        {
          id: "poi-11-12-sec4-2",
          time: 18,
          title: "Giây 18: Ứng dụng bản lề cánh cửa",
          question: "Khi cánh cửa phòng mở quay quanh trục bản lề thẳng đứng vuông góc với sàn nhà, mép trên của cánh cửa luôn:",
          options: [
            "Cắt mặt sàn nhà",
            "Nằm trong mặt sàn nhà",
            "Song song với mặt sàn nhà",
            "Chéo nhau với mặt sàn nhà"
          ],
          correctIndex: 2,
          hint: "Mép trên của cánh cửa luôn vuông góc với trục bản lề và giữ khoảng cách không đổi tới mặt sàn.",
          explain: "Tuyệt vời! Theo Bài 4.20 SGK tr. 87: Vì trục bản lề thẳng đứng vuông góc sàn nhà và mép cửa vuông góc bản lề nên mép cửa luôn song song với một đường thẳng nằm trên sàn, dẫn đến luôn song song với mặt sàn nhà."
        }
      ],
      subsections: [
        {
          key: "4a",
          title: "Phương pháp xác định thiết diện song song (Hình 4.39 SGK tr. 87)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Ví dụ 3 & Hình 4.39 - SGK trang 87]:</div>
              <p style="margin-bottom: 8px;">Cho tứ diện $ABCD$. Mặt phẳng $(P)$ đi qua một điểm $M$ trên cạnh $AB$ và song song với hai đường thẳng $BC, CD$.</p>
              <ul class="sgk-box-list">
                <li>Mặt phẳng $(P) \\parallel BC$ nên $(P)$ cắt $(ABC)$ theo giao tuyến $MN \\parallel BC$ ($N \\in AC$).</li>
                <li>Mặt phẳng $(P) \\parallel CD$ nên $(P)$ cắt $(ACD)$ theo giao tuyến $NP \\parallel CD$ ($P \\in AD$).</li>
                <li>Mặt phẳng $(P) \\parallel CD$ nên $(P)$ cắt $(BCD)$ theo giao tuyến $MQ \\parallel BD$ hoặc tương tự cắt $(ABD)$ theo giao tuyến $MQ \\parallel CD$.</li>
                <li>Thiết diện thu được là tứ giác $MNPQ$ là <strong>hình bình hành</strong> (hoặc hình thang).</li>
              </ul>
            </div>

            <!-- HÌNH MINH HỌA 4.39 SGK TRANG 87 -->
            <div style="background: #ffffff; border: 1.5px solid #059669; border-radius: 12px; padding: 18px; margin: 18px 0; text-align: center;">
              <div style="font-weight: 700; color: #047857; font-size: 1.02rem; margin-bottom: 12px;">
                <i class="fa-solid fa-gem"></i> Hình minh họa 4.39 (SGK trang 87): Thiết diện hình bình hành $MNPQ$
              </div>
              <svg viewBox="0 0 520 280" style="width: 100%; max-width: 480px; height: auto; display: block; margin: 0 auto;">
                <!-- Đỉnh A: (250, 25) -->
                <!-- Đáy BCD: B(80, 230), C(440, 230), D(320, 160) -->
                <!-- Các cạnh khuất nét đứt: BD, CD, AD -->
                <line x1="80" y1="230" x2="320" y2="160" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,4"/>
                <line x1="320" y1="160" x2="440" y2="230" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,4"/>
                <line x1="250" y1="25" x2="320" y2="160" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,4"/>

                <!-- Các cạnh ngoài nét liền: AB, AC, BC -->
                <line x1="250" y1="25" x2="80" y2="230" stroke="#0f172a" stroke-width="2.2"/>
                <line x1="250" y1="25" x2="440" y2="230" stroke="#0f172a" stroke-width="2.2"/>
                <line x1="80" y1="230" x2="440" y2="230" stroke="#0f172a" stroke-width="2.2"/>

                <!-- Các điểm M trên AB, N trên AC, P trên AD, Q trên BD -->
                <!-- M: (140, 158), N: (370, 158) -> MN // BC -->
                <!-- P trên AD: (295, 112), Q trên BD: (164, 205) -->
                <polygon points="140,158 370,158 300,120 180,120" fill="#a7f3d0" fill-opacity="0.45" stroke="#059669" stroke-width="2.5"/>

                <!-- Điểm và nhãn -->
                <circle cx="140" cy="158" r="4.5" fill="#047857"/>
                <circle cx="370" cy="158" r="4.5" fill="#047857"/>
                <circle cx="300" cy="120" r="4.5" fill="#047857"/>
                <circle cx="180" cy="120" r="4.5" fill="#047857"/>

                <text x="245" y="18" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#0f172a">A</text>
                <text x="60" y="240" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#0f172a">B</text>
                <text x="450" y="240" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#0f172a">C</text>
                <text x="330" y="165" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#0f172a">D</text>

                <text x="115" y="158" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#047857">M</text>
                <text x="382" y="162" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#047857">N</text>
                <text x="312" y="120" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#047857">P</text>
                <text x="160" y="118" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#047857">Q</text>
              </svg>
              <div style="font-size: 0.88rem; color: #047857; margin-top: 8px; font-weight: 600;">
                Thiết diện $MNPQ$ có các cặp cạnh đối song song nên là hình bình hành.
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 4 (Bài 4.20 SGK tr. 87): Mép cánh cửa mở quay",
            problem: "Một cánh cửa phòng học có dạng hình chữ nhật quay quanh một trục bản lề thẳng đứng vuông góc với sàn nhà. Hãy giải thích vì sao khi mở cánh cửa ra ở bất kì góc quay nào, mép trên của cánh cửa vẫn luôn di chuyển trong một mặt phẳng song song với sàn nhà.",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <ul>
                <li>Gọi trục bản lề là đường thẳng $\\Delta$, sàn nhà là mặt phẳng $(P)$. Theo đề bài, $\\Delta \\perp (P)$.</li>
                <li>Cánh cửa có dạng hình chữ nhật nên mép trên của cánh cửa (đặt là đường thẳng $a$) luôn vuông góc với trục bản lề $\\Delta$.</li>
                <li>Khi cánh cửa đóng lại, mép trên $a$ nằm ở vị trí $a_0$. Do $\\Delta \\perp (P)$ và $a_0 \\perp \\Delta$ nên $a_0 \\parallel (P)$.</li>
                <li>Khi cánh cửa mở quay quanh trục $\\Delta$, mép trên $a$ luôn vuông góc với trục thẳng đứng $\\Delta$ và giữ khoảng cách không đổi đến sàn nhà.</li>
                <li>Do đó, đường thẳng $a$ luôn song song với một đường thẳng nằm trên sàn nhà. Theo Định lí 1, mép trên $a$ luôn luôn song song với mặt phẳng sàn nhà $(P)$.</li>
              </ul>
            `,
            teacherGuidance: "Hình học không gian hiện diện quanh cuộc sống ta hàng ngày: từ bản lề cánh cửa, bậc cầu thang đến xà ngang khung thành. Nắm chắc bản chất hình học giúp các em giải thích mọi hiện tượng cơ học rất thú vị!",
            similarProblem: "Giải thích tại sao một chiếc quạt trần khi quay quanh trục thẳng đứng vuông góc với trần nhà thì các cánh quạt luôn chuyển động song song với mặt sàn nhà."
          }
        }
      ]
    }
  ],

  // 3. CHỐT BÀI HỌC VÀ TỔNG KẾT (WRAPUP)
  realworldWrapup: {
    title: "Chốt bài học & Bảng so sánh hai định lí then chốt",
    audioScript: "Chốt bài học: Trở lại bài toán mở đầu, nhờ quan hệ song song giữa đường thẳng và mặt phẳng, sợi dây nhợ của bác thợ xây khi căng song song với mặt đất sẽ đảm bảo hàng gạch luôn thẳng tắp và bằng phẳng tuyệt đối. Khung thành bóng đá nhờ xà ngang song song với mặt sân mà đảm bảo tính công bằng trong mọi trận đấu. Nắm chắc Định lí 1 và Định lí 2, các em đã sở hữu trong tay chiếc chìa khóa vạn năng để chinh phục toàn bộ chương Quan hệ song song. Thầy chúc các em học thật giỏi và đạt điểm số tối đa!",
    audioUrl: "assets/audio/b12_wrapup.mp3",
    buttonLabel: "Nghe thầy Sáng tổng kết",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    summaryHtml: `
      <div style="background: linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%); border: 1.5px solid #3b82f6; border-radius: 12px; padding: 18px; margin: 15px 0;">
        <h4 style="color: #1e3a8a; margin-top: 0; font-size: 1.1rem;"><i class="fa-solid fa-graduation-cap"></i> Ghi nhớ cốt lõi của ThS. Lương Thanh Sáng</h4>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.92rem; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
            <thead>
              <tr style="background: #2563eb; color: #ffffff;">
                <th style="padding: 10px; border: 1px solid #bfdbfe; width: 22%;">Nội dung</th>
                <th style="padding: 10px; border: 1px solid #bfdbfe; width: 39%;">Định lí 1 (Dấu hiệu nhận biết)</th>
                <th style="padding: 10px; border: 1px solid #bfdbfe; width: 39%;">Định lí 2 (Tính chất giao tuyến)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Mục đích</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">Chứng minh <em>đường thẳng song song với mặt phẳng</em></td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">Tìm <em>giao tuyến song song</em> và xác định thiết diện</td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Giả thiết</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">$a \\not\\subset (P)$, $b \\subset (P)$, $a \\parallel b$</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">$a \\parallel (P)$, $a \\subset (Q)$, $(P) \\cap (Q) = b$</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Kết luận</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #16a34a;">$a \\parallel (P)$</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #2563eb;">$b \\parallel a$</td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Khẩu quyết</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-style: italic; color: #d97706;">"Muốn đường song song mặt, tìm trong mặt một đường song song"</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-style: italic; color: #d97706;">"Mặt phẳng chứa đường song song cắt mặt kia theo giao tuyến song song"</td>
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

    // DẠNG 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (5 CÂU - ĐÁP ÁN HOÁN VỊ B, C, A, D, B)
    part1MultipleChoice: [
      {
        id: "mc-11-12-1",
        num: 1,
        prompt: "Câu 1: Trong không gian, cho đường thẳng $d$ và mặt phẳng $(\\alpha)$. Khẳng định nào sau đây là <strong>sai</strong>?",
        options: [
          "Nếu $d$ và $(\\alpha)$ không có điểm chung thì $d \\parallel (\\alpha)$.",
          "Nếu $d$ song song với một đường thẳng nằm trong $(\\alpha)$ thì $d$ luôn song song với $(\\alpha)$.",
          "Nếu $d \\cap (\\alpha) = \\{M\\}$ thì $d$ cắt $(\\alpha)$ tại điểm duy nhất $M$.",
          "Nếu $d$ và $(\\alpha)$ có hai điểm chung phân biệt thì $d \\subset (\\alpha)$."
        ],
        correctIndex: 1, // Đáp án B
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Khẳng định B sai vì thiếu điều kiện $d$ không nằm trong mặt phẳng $(\\alpha)$ ($d \\not\\subset (\\alpha)$). Nếu đường thẳng $d$ nằm sẵn trong $(\\alpha)$ và song song với một đường thẳng khác cùng nằm trong $(\\alpha)$ thì $d \\subset (\\alpha)$ chứ không phải $d \\parallel (\\alpha)$. Các khẳng định A, C, D đều đúng theo định nghĩa SGK.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Cho đường thẳng $a$ và mặt phẳng $(P)$. Nếu $a$ song song với mặt phẳng $(P)$ thì số lượng điểm chung giữa $a$ và $(P)$ là:",
          options: ["1 điểm", "0 điểm", "Vô số điểm", "2 điểm"],
          correctIndex: 1, // B (0 điểm)
          explain: "Theo định nghĩa SGK trang 84, đường thẳng song song với mặt phẳng khi và chỉ khi chúng không có bất kỳ điểm chung nào (số điểm chung bằng 0)."
        }
      },
      {
        id: "mc-11-12-2",
        num: 2,
        prompt: "Câu 2: Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của các cạnh $AB$ và $AC$. Khẳng định nào sau đây là <strong>đúng</strong>?",
        options: [
          "$MN \\parallel (ABC)$.",
          "$MN$ cắt $(BCD)$.",
          "$MN \\parallel (BCD)$.",
          "$MN \\subset (BCD)$."
        ],
        correctIndex: 2, // Đáp án C
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Trong tam giác $ABC$, $M$ là trung điểm $AB$, $N$ là trung điểm $AC$ nên $MN$ là đường trung bình của tam giác $ABC \\implies MN \\parallel BC$.<br>Mặt khác, $BC \\subset (BCD)$ và $MN \\not\\subset (BCD)$ (do $M, N \\notin (BCD)$).<br>Theo Định lí 1 suy ra $MN \\parallel (BCD)$. Do đó đáp án C là đúng.",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SD$. Khẳng định nào sau đây đúng?",
          options: ["$MN \\parallel (SBC)$", "$MN \\parallel (ABCD)$", "$MN \\subset (ABCD)$", "$MN$ cắt $(ABCD)$"],
          correctIndex: 1, // B (MN // ABCD)
          explain: "Trong tam giác $SAD$, $MN$ là đường trung bình nên $MN \\parallel AD$. Mà $AD \\subset (ABCD)$ và $MN \\not\\subset (ABCD) \\implies MN \\parallel (ABCD)$."
        }
      },
      {
        id: "mc-11-12-3",
        num: 3,
        prompt: "Câu 3: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của đoạn thẳng $SC$. Khẳng định nào sau đây là <strong>đúng</strong>?",
        options: [
          "$OM \\parallel (SAB)$ và $OM \\parallel (SAD)$.",
          "$OM$ cắt mặt phẳng $(SAB)$.",
          "$OM \\subset (ABCD)$.",
          "$OM \\parallel (SBC)$."
        ],
        correctIndex: 0, // Đáp án A
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Xét tam giác $SAC$: $O$ là trung điểm của đường chéo $AC$ (tính chất hình bình hành) và $M$ là trung điểm của $SC$.<br>Suy ra $OM$ là đường trung bình của tam giác $SAC \\implies OM \\parallel SA$.<br>Vì $SA \\subset (SAD)$ và $OM \\not\\subset (SAD)$ nên $OM \\parallel (SAD)$.<br>Tương tự, $SA \\subset (SAB)$ và $OM \\not\\subset (SAB)$ nên $OM \\parallel (SAB)$. Do đó đáp án A hoàn toàn chính xác.",
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $N$ là trung điểm của cạnh $SB$. Đường thẳng $ON$ song song với mặt phẳng nào sau đây?",
          options: ["$(SAD)$", "$(ABCD)$", "$(SBC)$", "$(SAB)$"],
          correctIndex: 0, // A ((SAD))
          explain: "Trong tam giác $SBD$, $O$ là trung điểm $BD$, $N$ là trung điểm $SB$ nên $ON \\parallel SD$. Mà $SD \\subset (SAD) \\implies ON \\parallel (SAD)$."
        }
      },
      {
        id: "mc-11-12-4",
        num: 4,
        prompt: "Câu 4: Cho hai đường thẳng chéo nhau $a$ và $b$ trong không gian. Có bao nhiêu mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$?",
        options: [
          "0 mặt phẳng.",
          "Vô số mặt phẳng.",
          "2 mặt phẳng.",
          "Duy nhất 1 mặt phẳng."
        ],
        correctIndex: 3, // Đáp án D
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo hệ quả của Định lí 3 (SGK trang 86): Cho hai đường thẳng chéo nhau $a$ và $b$. Có <strong>duy nhất một</strong> mặt phẳng chứa đường thẳng này và song song với đường thẳng kia. (Qua một điểm trên $a$, ta dựng đường thẳng $b' \\parallel b$; khi đó mặt phẳng $(a, b')$ là duy nhất thỏa mãn chứa $a$ và song song với $b$). Do đó đáp án D là chính xác.",
        similarVariation: {
          prompt: "Câu 4 (Tương tự): Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Có bao nhiêu mặt phẳng chứa $a$ và song song với mặt phẳng $(P)$?",
          options: ["Vô số", "Không có", "Duy nhất 1", "2"],
          correctIndex: 2, // C (Duy nhất 1)
          explain: "Theo tiên đề hình học không gian, qua một đường thẳng song song với một mặt phẳng, có duy nhất một mặt phẳng song song với mặt phẳng đã cho."
        }
      },
      {
        id: "mc-11-12-5",
        num: 5,
        prompt: "Câu 5: Cho tứ diện $ABCD$. Mặt phẳng $(\\alpha)$ đi qua trung điểm của cạnh $AB$ và song song với hai cạnh $BC, AD$. Thiết diện tạo bởi $(\\alpha)$ và các mặt của tứ diện $ABCD$ là hình gì?",
        options: [
          "Tam giác đều.",
          "Hình bình hành.",
          "Hình thang vuông.",
          "Hình ngũ giác."
        ],
        correctIndex: 1, // Đáp án B
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Gọi $M$ là trung điểm $AB$.<br>- Vì $(\\alpha) \\parallel BC$ nên $(\\alpha)$ cắt $(ABC)$ theo giao tuyến qua $M$ song song $BC$, cắt $AC$ tại trung điểm $N \\implies MN \\parallel BC$.<br>- Tương tự, $(\\alpha)$ cắt $(ABD)$ theo giao tuyến qua $M$ song song $AD$, cắt $BD$ tại trung điểm $Q \\implies MQ \\parallel AD$.<br>- Mặt phẳng $(\\alpha)$ cắt $(ACD)$ theo giao tuyến $NP \\parallel AD$ ($P$ là trung điểm $CD$).<br>- Mặt phẳng $(\\alpha)$ cắt $(BCD)$ theo giao tuyến $PQ \\parallel BC$.<br>Tứ giác $MNPQ$ có $MN \\parallel PQ$ (cùng $\\parallel BC$) và $MQ \\parallel NP$ (cùng $\\parallel AD$). Do đó thiết diện $MNPQ$ là một <strong>hình bình hành</strong>. Đáp án đúng là B.",
        similarVariation: {
          prompt: "Câu 5 (Tương tự): Cho tứ diện đều $ABCD$. Mặt phẳng $(\\alpha)$ song song với $AB$ và $CD$, cắt 4 cạnh $AC, BC, BD, AD$ tạo thành thiết diện có 4 cạnh bằng nhau và các góc vuông. Khi đó thiết diện là:",
          options: ["Hình chữ nhật", "Hình vuông", "Hình thoi", "Tam giác cân"],
          correctIndex: 1, // B (Hình vuông)
          explain: "Vì tứ diện đều nên $AB \\perp CD$ và $AB = CD$. Thiết diện song song với 2 cạnh đối vuông góc và bằng nhau nên thiết diện là một hình vuông."
        }
      }
    ],

    // DẠNG 2: TRẮC NGHIỆM ĐÚNG/SAI (3 CÂU - MỖI CÂU 4 Ý a, b, c, d)
    part2TrueFalse: [
      {
        id: "tf-11-12-1",
        num: 1,
        prompt: "Câu 1: Cho đường thẳng $a$ và mặt phẳng $(P)$ trong không gian. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          {
            key: "a",
            statement: "Nếu đường thẳng $a$ song song với mặt phẳng $(P)$ thì $a$ không có điểm chung với $(P)$.",
            isCorrect: true,
            explain: "Đúng theo định nghĩa SGK trang 84: Đường thẳng và mặt phẳng song song khi và chỉ khi số điểm chung bằng 0."
          },
          {
            key: "b",
            statement: "Nếu $a \\parallel b$ và $b \\subset (P)$ thì chắc chắn $a \\parallel (P)$.",
            isCorrect: false,
            explain: "Sai. Vì thiếu điều kiện $a \\not\\subset (P)$. Nếu $a$ nằm sẵn trong $(P)$ thì $a$ và $b$ cùng nằm trong $(P)$ và song song với nhau, khi đó $a \\subset (P)$ chứ không phải $a \\parallel (P)$."
          },
          {
            key: "c",
            statement: "Nếu $a \\parallel (P)$ thì trong $(P)$ có duy nhất một đường thẳng song song với $a$.",
            isCorrect: false,
            explain: "Sai. Trong $(P)$ có vô số đường thẳng song song với $a$ (tất cả các đường thẳng trong $(P)$ song song với đường giao tuyến chiếu)."
          },
          {
            key: "d",
            statement: "Hai đường thẳng phân biệt cùng song song với một mặt phẳng thì luôn song song với nhau.",
            isCorrect: false,
            explain: "Sai. Hai đường thẳng cùng song song với một mặt phẳng có thể cắt nhau hoặc chéo nhau (ví dụ: mép chiều dài và mép chiều rộng của trần nhà cùng song song với mặt sàn nhưng cắt nhau tại góc trần)."
          }
        ],
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Cho hai mặt phẳng phân biệt $(P)$ và $(Q)$ cùng song song với đường thẳng $d$. Xét tính Đúng/Sai của khẳng định: Giao tuyến của $(P)$ và $(Q)$ (nếu có) luôn song song với đường thẳng $d$.",
          items: [
            { key: "a", statement: "Giao tuyến song song với đường thẳng d.", isCorrect: true, explain: "Đúng theo hệ quả của Định lí 3." }
          ]
        }
      },
      {
        id: "tf-11-12-2",
        num: 2,
        prompt: "Câu 2: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M, N$ lần lượt là trung điểm của hai cạnh bên $SA$ và $SB$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          {
            key: "a",
            statement: "Đoạn thẳng $MN$ song song với cạnh đáy $AB$.",
            isCorrect: true,
            explain: "Đúng. Trong tam giác $SAB$, $M$ và $N$ là trung điểm của $SA, SB$ nên $MN$ là đường trung bình, do đó $MN \\parallel AB$."
          },
          {
            key: "b",
            statement: "Đường thẳng $MN$ song song với mặt phẳng đáy $(ABCD)$.",
            isCorrect: true,
            explain: "Đúng. Vì $MN \\parallel AB$, $AB \\subset (ABCD)$ và $MN \\not\\subset (ABCD)$ nên theo Định lí 1 suy ra $MN \\parallel (ABCD)$."
          },
          {
            key: "c",
            statement: "Đường thẳng $MN$ song song với mặt phẳng $(SCD)$.",
            isCorrect: true,
            explain: "Đúng. Vì $ABCD$ là hình bình hành nên $AB \\parallel CD$. Mà $MN \\parallel AB \\implies MN \\parallel CD$. Lại có $CD \\subset (SCD)$ và $MN \\not\\subset (SCD) \\implies MN \\parallel (SCD)$."
          },
          {
            key: "d",
            statement: "Giao tuyến của mặt phẳng $(SAB)$ và mặt phẳng $(SCD)$ là đường thẳng đi qua $S$ và cắt cạnh đáy $AB$.",
            isCorrect: false,
            explain: "Sai. Hai mặt phẳng $(SAB)$ và $(SCD)$ lần lượt chứa hai đường thẳng song song $AB \\parallel CD$, nên giao tuyến của chúng là đường thẳng đi qua điểm chung $S$ và song song với cả $AB$ và $CD$, không thể cắt cạnh $AB$."
          }
        ],
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cho hình chóp $S.ABCD$ đáy hình bình hành. Gọi $P, Q$ là trung điểm $SC, SD$. Mệnh đề: $PQ \\parallel (ABCD)$ là Đúng hay Sai?",
          items: [
            { key: "a", statement: "PQ song song với (ABCD)", isCorrect: true, explain: "Đúng. PQ // CD // AB nên PQ // (ABCD)." }
          ]
        }
      },
      {
        id: "tf-11-12-3",
        num: 3,
        prompt: "Câu 3: Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng $a$. Một mặt phẳng $(\\alpha)$ song song với hai cạnh đối diện $AB$ và $CD$, cắt cạnh $BC$ tại điểm $M$ sao cho $BM = x$ ($0 < x < a$). Mặt phẳng $(\\alpha)$ cắt các cạnh $AC, AD, BD$ lần lượt tại $N, P, Q$. Xét tính Đúng/Sai của các mệnh đề sau:",
        items: [
          {
            key: "a",
            statement: "Thiết diện $MNPQ$ luôn là một hình bình hành.",
            isCorrect: true,
            explain: "Đúng. Vì $(\\alpha) \\parallel AB$ nên $MN \\parallel AB$ và $PQ \\parallel AB \\implies MN \\parallel PQ$. Lại có $(\\alpha) \\parallel CD$ nên $MQ \\parallel CD$ và $NP \\parallel CD \\implies MQ \\parallel NP$. Tứ giác có hai cặp cạnh đối song song nên là hình bình hành."
          },
          {
            key: "b",
            statement: "Độ dài đoạn thẳng $MN$ bằng $\\dfrac{a - x}{a} \\cdot a = a - x$.",
            isCorrect: true,
            explain: "Đúng. Trong tam giác $ABC$, vì $MN \\parallel AB$ nên theo định lí Ta-lét: $\\dfrac{MN}{AB} = \\dfrac{CM}{CB} = \\dfrac{a - x}{a} \\implies MN = a - x$."
          },
          {
            key: "c",
            statement: "Chu vi của thiết diện $MNPQ$ luôn thay đổi phụ thuộc vào giá trị của $x$.",
            isCorrect: false,
            explain: "Sai. Ta có $MN = a - x$ và $MQ = x$ (do $MQ \\parallel CD \\implies \\dfrac{MQ}{CD} = \\dfrac{BM}{BC} = \\dfrac{x}{a} \\implies MQ = x$). Do đó chu vi hình bình hành $MNPQ$ là $2(MN + MQ) = 2(a - x + x) = 2a$ không đổi, không phụ thuộc vào $x$."
          },
          {
            key: "d",
            statement: "Khi $M$ là trung điểm của cạnh $BC$ ($x = \\dfrac{a}{2}$), thiết diện $MNPQ$ là một hình vuông.",
            isCorrect: true,
            explain: "Đúng. Khi $x = \\dfrac{a}{2}$, ta có $MN = MQ = \\dfrac{a}{2}$ nên $MNPQ$ là hình thoi. Mặt khác, trong tứ diện đều thì hai cạnh đối diện vuông góc với nhau: $AB \\perp CD$. Mà $MN \\parallel AB$ và $MQ \\parallel CD$ nên $MN \\perp MQ$. Hình thoi có một góc vuông là hình vuông."
          }
        ],
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Cho tứ diện đều cạnh a. Chu vi thiết diện song song với 2 cạnh đối diện có phụ thuộc vị trí mặt phẳng cắt không?",
          items: [
            { key: "a", statement: "Chu vi thiết diện luôn bằng 2a không đổi.", isCorrect: true, explain: "Đúng, chu vi luôn bằng 2a." }
          ]
        }
      }
    ],

    // DẠNG 3: CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (2 CÂU TOÁN THỰC TẾ)
    part3ShortAnswer: [
      {
        id: "sa-11-12-1",
        num: 1,
        prompt: "Câu 1: Một khung thành bóng đá tiêu chuẩn có xà ngang dài $7{,}32\\text{ m}$ được đặt ở độ cao $2{,}44\\text{ m}$ song song với mặt sân bóng. Từ đỉnh hai cột dọc, người ta căng hai dây néo thẳng xuống mặt đất để giữ khung thành cố định. Biết mặt sân phẳng hoàn toàn. Khoảng cách ngắn nhất từ một điểm bất kỳ trên thanh xà ngang tới mặt phẳng sân bóng bằng bao nhiêu mét? (Viết kết quả dưới dạng số thập phân dùng dấu phẩy hoặc chấm).",
        correctAnswer: "2.44",
        acceptedAnswers: ["2.44", "2,44", "2.44m", "2,44m"],
        unit: "m",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vì xà ngang là một đoạn thẳng song song với mặt phẳng sân bóng, nên mọi điểm trên thanh xà ngang đều cách đều mặt phẳng sân bóng một khoảng bằng đúng chiều cao của cột dọc khung thành.<br>Khoảng cách ngắn nhất từ bất kỳ điểm nào trên xà ngang đến mặt sân bóng chính là chiều cao $h = 2{,}44\\text{ m}$.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Một đường dây điện cao thế được căng thẳng và song song với mặt đường nhựa bằng phẳng bên dưới ở độ cao $12{,}5\\text{ m}$. Khoảng cách từ một điểm trên dây điện đến mặt đường bằng bao nhiêu mét?",
          correctAnswer: "12.5",
          acceptedAnswers: ["12.5", "12,5"],
          unit: "m",
          explain: "Do đường dây song song với mặt đường nên khoảng cách từ mọi điểm trên dây đến mặt đường là hằng số và bằng 12,5 m."
        }
      },
      {
        id: "sa-11-12-2",
        num: 2,
        prompt: "Câu 2: Cho một khối gỗ hình tứ diện đều $ABCD$ có tất cả các cạnh bằng $12\\text{ cm}$. Một người thợ mộc dùng cưa cắt khối gỗ theo một mặt phẳng $(\\alpha)$ song song với hai cạnh đối $AB$ và $CD$ sao cho vết cắt (thiết diện) thu được là một hình vuông. Chu vi của hình vuông thiết diện này bằng bao nhiêu centimét?",
        correctAnswer: "24",
        acceptedAnswers: ["24", "24cm", "24 cm"],
        unit: "cm",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo kết quả đã chứng minh ở Mục 4 và Câu 3 Phần II: Thiết diện cắt bởi mặt phẳng song song với hai cạnh đối $AB$ và $CD$ là hình bình hành $MNPQ$ có chu vi luôn không đổi và bằng:<br>$$\\mathcal{P} = 2(MN + MQ) = 2a$$<br>Với $a = 12\\text{ cm}$, chu vi của hình vuông thiết diện là:<br>$$\\mathcal{P} = 2 \\times 12 = 24\\text{ cm}.$$",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cho tứ diện đều cạnh 15 cm. Thiết diện song song với 2 cạnh đối có chu vi bằng bao nhiêu cm?",
          correctAnswer: "30",
          acceptedAnswers: ["30", "30cm", "30 cm"],
          unit: "cm",
          explain: "Chu vi thiết diện = 2 x a = 2 x 15 = 30 cm."
        }
      }
    ]
  }
};

// Đồng bộ biến toàn cục
if (typeof window !== "undefined") {
  window.LESSON_11_12_DATA = window.LESSON_11_C4_B12_DATA;
}
