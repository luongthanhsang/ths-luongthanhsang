/**
 * BÀI HỌC SỐ: BÀI 10. ĐƯỜNG THẲNG VÀ MẶT PHẲNG TRONG KHÔNG GIAN (TOÁN 11 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - Phần I: Lời chào của Thầy Sáng kèm Voice AI Gold Box (5% tiến trình)
 * - Phần II: Mục tiêu & Yêu cầu cần đạt chuẩn GDPT 2018 (5% tiến trình)
 * - Phần III: Tiến trình bài học phân cấp mục 1, 2, 3, 4 kèm tiểu mục a, b có nút tick riêng (70% tiến trình)
 * - Phần IV: Bài tập trắc nghiệm củng cố chuẩn 2025 (20% tiến trình) - Hoán vị đáp án A, B, C, D
 * - Đồ họa TikZ SVG vector hiện đại, sắc nét, không lỗi ký hiệu
 * - Voice AI đọc nguyên văn, chuẩn xác ngữ âm toán học
 */

window.LESSON_11_C4_B10_DATA = {
  id: "11-c4-b10",
  number: "Bài 10",
  title: "Đường thẳng và mặt phẳng trong không gian",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG (5%)
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng thân ái chào toàn thể các em học sinh yêu quý! Hôm nay, thầy rất vui mừng được cùng các em bước vào một thế giới toán học vô cùng kỳ thú và quan trọng, đó là Hình học không gian ba chiều với Bài 10: Đường thẳng và mặt phẳng trong không gian. Nếu như hình học phẳng mở ra cho chúng ta những bức tranh hai chiều phẳng lặng, thì hình học không gian sẽ nâng tầm tư duy logic, đưa các em tiếp cận với những cấu trúc 3D thực tế như các công trình kiến trúc, thiết kế đồ họa CAD và công nghệ in 3D hiện đại. Các em đã chuẩn bị sẵn sàng nguồn năng lượng tích cực cùng thầy chưa? Chúng ta cùng bắt đầu khám phá bài học ngay nhé!",
    audioScript: "Thầy Sáng thân ái chào toàn thể các em học sinh yêu quý! Hôm nay, thầy rất vui mừng được cùng các em bước vào một thế giới toán học vô cùng kỳ thú và quan trọng, đó là Hình học không gian ba chiều với Bài 10: Đường thẳng và mặt phẳng trong không gian. Nếu như hình học phẳng mở ra cho chúng ta những bức tranh hai chiều phẳng lặng, thì hình học không gian sẽ nâng tầm tư duy logic, đưa các em tiếp cận với những cấu trúc 3D thực tế như các công trình kiến trúc, thiết kế đồ họa CAD và công nghệ in 3D hiện đại. Các em đã chuẩn bị sẵn sàng nguồn năng lượng tích cực cùng thầy chưa? Chúng ta cùng bắt đầu khám phá bài học ngay nhé!",
    quote: "Trong không gian ba chiều bao la, mỗi định lí và tiên đề hình học là một chiếc la bàn soi sáng tư duy logic và mở rộng trí tưởng tượng không gian của các em.",
    audioUrl: "assets/audio/b11_10_welcome.mp3",
    buttonLabel: "Nhấn nghe Lời chào",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU & YÊU CẦU CẦN ĐẠT (5%)
  // =========================================================================
  learningGoals: [
    "Nhận biết các quan hệ liên thuộc cơ bản giữa điểm, đường thẳng, mặt phẳng trong không gian.",
    "Nắm vững 6 tính chất thừa nhận (tiên đề) nền tảng của hình học không gian.",
    "Mô tả và vận dụng thành thạo 3 cách xác định một mặt phẳng.",
    "Xác định chính xác giao tuyến của hai mặt phẳng và giao điểm của đường thẳng với mặt phẳng.",
    "Nhận biết, vẽ đúng quy ước hình chóp và hình tứ diện; giải thích các hiện tượng thực tiễn (ghế ba chân, nam châm giữ cửa)."
  ],
  goalsAudioScript: "Mục tiêu bài học số 10. Sau khi hoàn thành bài học này, các em cần đạt được các yêu cầu then chốt sau: Thứ nhất, nhận biết được các quan hệ liên thuộc cơ bản giữa điểm, đường thẳng và mặt phẳng trong không gian. Thứ hai, nắm vững sáu tính chất thừa nhận của hình học không gian. Thứ ba, mô tả thành thạo ba cách xác định một mặt phẳng. Thứ tư, biết cách tìm giao tuyến của hai mặt phẳng và giao điểm của đường thẳng với mặt phẳng. Thứ năm, nhận biết và mô tả chính xác hình chóp và hình tứ diện, cùng các ứng dụng thực tiễn của nguyên lí ba chân và nam châm giữ cửa.",
  goalsAudioUrl: "assets/audio/b11_10_goals.mp3",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC SỐ (70%)
  // =========================================================================
  hook: {
    title: "Tình huống mở đầu (Bài toán dẫn nhập)",
    audioScript: "Tình huống mở đầu. Trong thực tế đời sống, các vật thể quanh chúng ta như hộp phấn, cục tẩy, máy in 3D hay khung xe ô tô thiết kế trên phần mềm đồ họa CAD đều là các khối hình trong không gian ba chiều. Các em có bao giờ tự hỏi, tại sao chiếc bàn bốn chân rất dễ bị bập bênh khi mặt đất gồ ghề, trong khi chiếc giá đỡ máy ảnh ba chân hay chiếc kiềng ba chân đun bếp luôn đứng vững vàng trên mọi địa hình? Đó chính là nhờ một nguyên lí cơ bản của hình học không gian: qua ba điểm không thẳng hàng luôn xác định duy nhất một mặt phẳng. Hãy cùng thầy tìm hiểu bản chất toán học tuyệt vời này ngay sau đây!",
    audioUrl: "assets/audio/b11_10_hook.mp3",
    buttonLabel: "Nghe bài toán mở đầu",
    storyHtml: `
      <p>Ở các lớp dưới, ta đã học về Hình học phẳng — môn học nghiên cứu tính chất của các hình trong mặt phẳng như tam giác, tứ giác, hình tròn,... Tuy nhiên, các vật thể thường gặp trong thực tế đời sống như hộp phấn, cục tẩy, chặn giấy, máy in 3D hay khung xe hơi thiết kế CAD là các hình trong không gian.</p>
      <div style="margin: 12px 0; padding: 14px 18px; background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 6px;">
        <strong>Câu hỏi thực tế của Thầy Sáng:</strong> Tại sao một chiếc bàn bốn chân rất dễ bị khập khiễng, bập bênh khi kê trên sàn nhà không bằng phẳng, trong khi chiếc <strong>chân máy ảnh ba chân</strong> (tripod) hay chiếc <strong>kiềng ba chân</strong> đun bếp luôn đứng vững vàng trên mọi địa hình mấp mô?
      </div>
      <p><em>Lời giải đáp từ hình học không gian:</em> Mặt sàn gồ ghề có thể làm cho bốn điểm chân bàn không đồng phẳng. Nhưng với ba điểm chân kiềng $A, B, C$ không thẳng hàng, toán học khẳng định luôn tồn tại <strong>duy nhất một mặt phẳng $(ABC)$</strong> đi qua chúng. Do đó, ba điểm này luôn cùng nằm trọn vẹn trong một mặt phẳng tựa, giúp vật thể đứng vững tuyệt đối!</p>
    `,
    illustrationSvg: `<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: linear-gradient(135deg, #091222 0%, #112240 100%); border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#1e40af" stop-opacity="0.1"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <marker id="arrowB10" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Lưới phối cảnh không gian 3D CAD -->
  <g stroke="#1e3a8a" stroke-width="0.8" opacity="0.4">
    <line x1="80" y1="280" x2="380" y2="280"/>
    <line x1="120" y1="240" x2="420" y2="240"/>
    <line x1="160" y1="200" x2="460" y2="200"/>
    <line x1="80" y1="280" x2="200" y2="160"/>
    <line x1="180" y1="280" x2="300" y2="160"/>
    <line x1="280" y1="280" x2="400" y2="160"/>
    <line x1="380" y1="280" x2="500" y2="160"/>
  </g>

  <!-- KHỐI 1 (Bên trái): Mô hình CAD 3D & Mặt phẳng sàn -->
  <polygon points="60,300 360,300 480,180 180,180" fill="url(#planeGrad)" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="none"/>
  <text x="75" y="290" fill="#38bdf8" font-size="14" font-weight="700" font-family="'Be Vietnam Pro', sans-serif">(P) - Mặt phẳng sàn CAD</text>

  <!-- Chiếc ghế ba chân thăng bằng hoàn hảo -->
  <circle cx="190" cy="275" r="5" fill="#f59e0b" filter="url(#glow)"/>
  <text x="175" y="295" fill="#f59e0b" font-size="13" font-weight="700">A</text>

  <circle cx="330" cy="270" r="5" fill="#f59e0b" filter="url(#glow)"/>
  <text x="340" y="285" fill="#f59e0b" font-size="13" font-weight="700">B</text>

  <circle cx="280" cy="210" r="5" fill="#f59e0b" filter="url(#glow)"/>
  <text x="290" y="205" fill="#f59e0b" font-size="13" font-weight="700">C</text>

  <!-- Tam giác tiếp xúc A-B-C trên mặt phẳng sàn (xác định duy nhất mặt phẳng) -->
  <polygon points="190,275 330,270 280,210" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>

  <!-- Mặt ghế tròn trên cao -->
  <ellipse cx="265" cy="110" rx="60" ry="22" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" filter="url(#glow)"/>
  <ellipse cx="265" cy="107" rx="58" ry="20" fill="#0284c7" fill-opacity="0.4"/>
  <text x="235" y="112" fill="#ffffff" font-size="12" font-weight="600">Mặt ghế</text>

  <!-- 3 Chân ghế vững chắc nối từ mặt ghế xuống A, B, C -->
  <line x1="225" y1="120" x2="190" y2="275" stroke="#f8fafc" stroke-width="3" stroke-linecap="round"/>
  <line x1="305" y1="118" x2="330" y2="270" stroke="#f8fafc" stroke-width="3" stroke-linecap="round"/>
  <line x1="265" y1="125" x2="280" y2="210" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="none"/>

  <rect x="70" y="25" width="370" height="42" rx="8" fill="#0f172a" fill-opacity="0.8" stroke="#38bdf8" stroke-width="1.2"/>
  <text x="85" y="50" fill="#ffd875" font-size="13" font-weight="700">Nguyên lí 3 chân: Qua 3 điểm A, B, C không thẳng hàng</text>
  <text x="85" y="62" fill="#94a3b8" font-size="11">luôn xác định DUY NHẤT một mặt phẳng &rarr; Không bao giờ bị bập bênh!</text>

  <!-- KHỐI 2 (Bên phải): Hệ trục tọa độ 3D & Mô hình hình học không gian -->
  <g transform="translate(630, 260)">
    <line x1="0" y1="0" x2="-80" y2="60" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowB10)"/>
    <text x="-95" y="75" fill="#ef4444" font-size="13" font-weight="700">Ox</text>
    <line x1="0" y1="0" x2="110" y2="0" stroke="#10b981" stroke-width="2" marker-end="url(#arrowB10)"/>
    <text x="120" y="5" fill="#10b981" font-size="13" font-weight="700">Oy</text>
    <line x1="0" y1="0" x2="0" y2="-170" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowB10)"/>
    <text x="5" y="-175" fill="#38bdf8" font-size="13" font-weight="700">Oz</text>
    <circle cx="0" cy="0" r="4" fill="#ffffff"/>
    <text x="-15" y="-5" fill="#ffffff" font-size="12" font-weight="700">O</text>

    <!-- Nét đứt khuất -->
    <line x1="-10" y1="0" x2="70" y2="0" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="-10" y1="0" x2="-50" y2="30" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="-10" y1="0" x2="-10" y2="-90" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>

    <!-- Nét liền thấy -->
    <polygon points="-50,30 30,30 70,0 70,-90 30,-60 -50,-60" fill="#38bdf8" fill-opacity="0.08"/>
    <line x1="-50" y1="30" x2="30" y2="30" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="30" y1="30" x2="70" y2="0" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="-50" y1="30" x2="-50" y2="-60" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="30" y1="30" x2="30" y2="-60" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="70" y1="0" x2="70" y2="-90" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="-50" y1="-60" x2="30" y2="-60" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="30" y1="-60" x2="70" y2="-90" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="70" y1="-90" x2="-10" y2="-90" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="-10" y1="-90" x2="-50" y2="-60" stroke="#38bdf8" stroke-width="1.8"/>

    <text x="-40" y="-115" fill="#38bdf8" font-size="12" font-weight="700">Mô hình 3D trong CAD</text>
  </g>
</svg>`,
    checkpoints: [
      {
        id: "poi-11-10-hook-1",
        time: 20,
        title: "Giây 20: Bản chất nguyên lí 3 chân",
        question: "Vì sao kiềng 3 chân hay giá đỡ máy ảnh 3 chân luôn đứng vững trên mọi mặt đất gồ ghề?",
        options: [
          "Vì 3 chân làm bằng kim loại nặng hơn 4 chân",
          "Vì qua 3 điểm không thẳng hàng luôn xác định duy nhất một mặt phẳng",
          "Vì mặt đất luôn có dạng hình tam giác",
          "Vì trọng lực chỉ tác dụng lên 3 điểm"
        ],
        correctIndex: 1,
        hint: "Xem lại tiên đề về số điểm không thẳng hàng để xác định một mặt phẳng.",
        explain: "Chính xác! Ba điểm chân tiếp xúc không thẳng hàng luôn xác định duy nhất một mặt phẳng tựa, nên vật thể không bao giờ bị bập bênh!"
      }
    ]
  },

  // -------------------------------------------------------------------------
  // CÁC MỤC KIẾN THỨC TRỌNG TÂM (MỤC 1, 2, 3, 4 PHÂN CẤP TIỂU MỤC a, b)
  // -------------------------------------------------------------------------
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1: KHÁI NIỆM MỞ ĐẦU
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "Khái niệm mở đầu",
      audioScript: "Mục 1. Khái niệm mở đầu. Tiểu mục a. Mặt phẳng và cách biểu diễn mặt phẳng trong không gian. Mặt bảng, màn hình máy tính hay mặt hồ phẳng lặng là những hình ảnh trực quan của một phần mặt phẳng. Mặt phẳng không có bề dày và mở rộng vô tận về mọi phía. Để biểu diễn mặt phẳng, ta thường vẽ một hình bình hành và ghi tên mặt phẳng vào một góc, kí hiệu là mở ngoặc đơn P đóng ngoặc đơn, hoặc mở ngoặc đơn an pha đóng ngoặc đơn. Tiểu mục b. Quan hệ liên thuộc và quy tắc vẽ hình không gian. Nếu điểm A thuộc mặt phẳng P, ta kí hiệu A thuộc P. Nếu điểm B không thuộc mặt phẳng P, ta kí hiệu B không thuộc P. Khi vẽ hình biểu diễn của một hình không gian, các em cần tuân thủ nghiêm ngặt quy tắc nét vẽ: dùng nét liền để biểu diễn cho những đường nhìn thấy được, và dùng nét đứt đoạn để biểu diễn cho những đường bị che khuất.",
      audioUrl: "assets/audio/b11_10_sec1.mp3",
      buttonLabel: "Nghe giảng Mục 1",
      checkpoints: [
        {
          id: "poi-11-10-sec1-1",
          time: 18,
          title: "Giây 18: Kí hiệu mặt phẳng",
          question: "Để kí hiệu mặt phẳng, ta dùng chữ cái in hoa hoặc chữ cái Hy Lạp đặt trong dấu gì?",
          options: [
            "Dấu ngoặc vuông [ ]",
            "Dấu ngoặc nhọn { }",
            "Dấu ngoặc đơn ( )",
            "Dấu gạch chéo / /"
          ],
          correctIndex: 2,
          hint: "Ví dụ kí hiệu mặt phẳng P hoặc mặt phẳng an pha.",
          explain: "Chính xác! Ta dùng chữ cái in hoa hoặc Hy Lạp đặt trong dấu ngoặc đơn: $(P), (Q), (\\alpha), (\\beta)$."
        }
      ],
      subsections: [
        {
          key: "a",
          title: "Mặt phẳng và cách biểu diễn mặt phẳng trong không gian",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Khái niệm mặt phẳng SGK Trang 71]:</div>
              <p>Mặt bảng, màn hình máy tính hay mặt nước lúc tĩnh lặng là một số hình ảnh về một phần của mặt phẳng.</p>
              <ul>
                <li><strong>Mặt phẳng không có bề dày và không có giới hạn</strong> (trải rộng vô tận về mọi phía).</li>
                <li><strong>Biểu diễn mặt phẳng:</strong> Ta thường dùng một hình bình hành và viết tên của mặt phẳng vào một góc của hình (hoặc viết ở bên trong góc đó).</li>
                <li><strong>Kí hiệu mặt phẳng:</strong> Ta dùng chữ cái in hoa hoặc chữ cái Hy Lạp đặt trong dấu ngoặc đơn $( )$. Ví dụ: Mặt phẳng $(P)$, mặt phẳng $(Q)$, mặt phẳng $(\\alpha)$, mặt phẳng $(\\beta)$.</li>
              </ul>
            </div>
          `
        },
        {
          key: "b",
          title: "Quan hệ liên thuộc và Quy tắc vẽ hình biểu diễn của hình không gian",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-draw-polygon"></i> [Quan hệ liên thuộc & Quy tắc nét vẽ SGK Trang 71]:</div>
              <p><strong>1. Quan hệ liên thuộc giữa điểm và mặt phẳng:</strong></p>
              <ul>
                <li>Điểm $A$ thuộc mặt phẳng $(P)$, kí hiệu: $A \\in (P)$. Ta còn nói: <em>$A$ nằm trên $(P)$</em>, hoặc <em>$(P)$ chứa $A$</em>, hoặc <em>$(P)$ đi qua $A$</em>.</li>
                <li>Điểm $B$ không thuộc mặt phẳng $(P)$, kí hiệu: $B \\notin (P)$.</li>
              </ul>
              <p><strong>2. Quy tắc vàng khi vẽ hình biểu diễn của hình không gian:</strong></p>
              <ul>
                <li>Hình biểu diễn của đường thẳng là đường thẳng, của đoạn thẳng là đoạn thẳng.</li>
                <li>Hình biểu diễn của hai đường thẳng song song là hai đường thẳng song song; của hai đường thẳng cắt nhau là hai đường thẳng cắt nhau.</li>
                <li>Hình biểu diễn giữ nguyên quan hệ liên thuộc giữa điểm và đường thẳng.</li>
                <li><span style="color: #0284c7; font-weight: 700;">Dùng nét liền</span> để biểu diễn cho đường <strong>nhìn thấy</strong>.</li>
                <li><span style="color: #dc2626; font-weight: 700;">Dùng nét đứt đoạn</span> để biểu diễn cho đường <strong>bị che khuất</strong>.</li>
              </ul>
            </div>
            <svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px;">
  <!-- Hình 1.1: Mặt phẳng (P) và điểm A thuộc (P), B không thuộc (P) -->
  <g transform="translate(30, 30)">
    <polygon points="20,180 240,180 320,60 100,60" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    <text x="35" y="165" fill="#0369a1" font-size="15" font-weight="700">(P)</text>
    
    <!-- Điểm A thuộc (P) -->
    <circle cx="160" cy="120" r="5" fill="#0284c7"/>
    <text x="172" y="125" fill="#0f172a" font-size="14" font-weight="700">A</text>
    <text x="130" y="215" fill="#0369a1" font-size="13" font-weight="600">A &isin; (P)</text>

    <!-- Điểm B không thuộc (P) và đường thẳng xuyên qua -->
    <circle cx="210" cy="30" r="5" fill="#ef4444"/>
    <text x="222" y="35" fill="#ef4444" font-size="14" font-weight="700">B</text>
    <text x="180" y="240" fill="#dc2626" font-size="13" font-weight="600">B &notin; (P)</text>
    
    <!-- Đường thẳng qua B cắt (P) tại A -->
    <line x1="225" y1="3" x2="210" y2="30" stroke="#ef4444" stroke-width="1.8"/>
    <line x1="210" y1="30" x2="160" y2="120" stroke="#ef4444" stroke-width="1.8"/>
    <line x1="160" y1="120" x2="140" y2="156" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="4,4"/>
    <line x1="140" y1="156" x2="120" y2="192" stroke="#ef4444" stroke-width="1.8"/>
    
    <text x="70" y="275" fill="#475569" font-size="12" font-style="italic">Hình 4.1 &amp; 4.2: Biểu diễn (P) &amp; Quan hệ liên thuộc</text>
  </g>

  <!-- Đường phân cách -->
  <line x1="390" y1="20" x2="390" y2="290" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- Hình 1.2: Quy tắc vẽ hình không gian (Nét liền thấy - Nét đứt khuất) -->
  <g transform="translate(430, 25)">
    <!-- Hình chóp S.ABC tam giác đều -->
    <!-- Nét đứt AC bên trong -->
    <line x1="60" y1="200" x2="270" y2="180" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5,4"/>
    <!-- Nét liền thấy -->
    <polygon points="160,20 60,200 150,230" fill="#38bdf8" fill-opacity="0.12"/>
    <polygon points="160,20 150,230 270,180" fill="#0284c7" fill-opacity="0.18"/>
    
    <line x1="160" y1="20" x2="60" y2="200" stroke="#0369a1" stroke-width="2"/>
    <line x1="160" y1="20" x2="150" y2="230" stroke="#0369a1" stroke-width="2"/>
    <line x1="160" y1="20" x2="270" y2="180" stroke="#0369a1" stroke-width="2"/>
    <line x1="60" y1="200" x2="150" y2="230" stroke="#0369a1" stroke-width="2"/>
    <line x1="150" y1="230" x2="270" y2="180" stroke="#0369a1" stroke-width="2"/>

    <!-- Tọa độ các điểm -->
    <circle cx="160" cy="20" r="4.5" fill="#f59e0b"/>
    <text x="155" y="10" fill="#b45309" font-size="14" font-weight="700">S</text>

    <circle cx="60" cy="200" r="4.5" fill="#0f172a"/>
    <text x="40" y="205" fill="#0f172a" font-size="14" font-weight="700">A</text>

    <circle cx="150" cy="230" r="4.5" fill="#0f172a"/>
    <text x="145" y="250" fill="#0f172a" font-size="14" font-weight="700">B</text>

    <circle cx="270" cy="180" r="4.5" fill="#0f172a"/>
    <text x="280" y="185" fill="#0f172a" font-size="14" font-weight="700">C</text>

    <!-- Nhãn quy ước nét -->
    <rect x="20" y="255" width="310" height="32" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <text x="30" y="275" fill="#0f172a" font-size="12" font-weight="600">&bull; Nét liền: nhìn thấy (SA, SB, SC, AB, BC)</text>
    <text x="30" y="290" fill="#dc2626" font-size="11" font-weight="600">&bull; Nét đứt: bị che khuất (AC)</text>
  </g>
</svg>
            <div class="checkpoint-card" id="cp-11-10-1">
              <div class="checkpoint-header">
                <span class="cp-badge"><i class="fa-solid fa-circle-question"></i> Câu hỏi củng cố Mục 1</span>
                <span class="cp-title">Quy ước nét vẽ trong hình không gian</span>
              </div>
              <p class="cp-question">Trong hình học không gian, đoạn thẳng bị các mặt phẳng khác che khuất tầm nhìn bắt buộc phải được vẽ bằng nét gì?</p>
              <div class="checkpoint-options">
                <button type="button" class="btn-cp-opt" data-correct="false"><span class="opt-letter">A</span> Nét liền đậm</button>
                <button type="button" class="btn-cp-opt" data-correct="true"><span class="opt-letter">B</span> Nét đứt đoạn</button>
                <button type="button" class="btn-cp-opt" data-correct="false"><span class="opt-letter">C</span> Nét gạch chấm mảnh</button>
                <button type="button" class="btn-cp-opt" data-correct="false"><span class="opt-letter">D</span> Nét lượn sóng</button>
              </div>
              <div class="checkpoint-feedback">
                <div class="feedback-content correct">
                  <i class="fa-solid fa-circle-check"></i> <strong>Chính xác!</strong> Theo quy ước SGK Hình học 11, các đường bị che khuất bắt buộc vẽ bằng nét đứt đoạn, các đường nhìn thấy vẽ bằng nét liền.
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2: CÁC TÍNH CHẤT THỪA NHẬN
    // -----------------------------------------------------------------------
    {
      num: "2",
      title: "Các tính chất thừa nhận",
      audioScript: "Mục 2. Các tính chất thừa nhận của hình học không gian. Tiểu mục a. Ba tính chất xác định đường thẳng, mặt phẳng và điểm đồng phẳng. Tính chất 1: Có một và chỉ một đường thẳng đi qua hai điểm phân biệt. Tính chất 2: Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng, kí hiệu là mặt phẳng A B C. Tính chất 3: Tồn tại bốn điểm không cùng thuộc một mặt phẳng. Nếu nhiều điểm cùng thuộc một mặt phẳng, ta nói các điểm đó đồng phẳng. Bốn điểm không đồng phẳng sẽ tạo nên một tứ diện. Tiểu mục b. Vị trí đường thẳng trên mặt phẳng và giao tuyến của hai mặt phẳng. Tính chất 4: Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì tất cả các điểm của đường thẳng đều nằm trong mặt phẳng đó, kí hiệu là đường thẳng d con của mặt phẳng P. Tính chất 5: Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất đi qua điểm chung đó, đường thẳng này gọi là giao tuyến của hai mặt phẳng, kí hiệu d bằng P giao Q. Tính chất 6: Trên mỗi mặt phẳng, tất cả các định lí đã biết trong hình học phẳng đều đúng.",
      audioUrl: "assets/audio/b11_10_sec2.mp3",
      buttonLabel: "Nghe giảng Mục 2",
      checkpoints: [
        {
          id: "poi-11-10-sec2-1",
          time: 22,
          title: "Giây 22: Điều kiện đồng phẳng",
          question: "Bốn điểm không cùng thuộc một mặt phẳng thì được gọi là gì?",
          options: [
            "Bốn điểm thẳng hàng",
            "Bốn điểm đồng phẳng",
            "Bốn điểm không đồng phẳng",
            "Bốn điểm đối xứng"
          ],
          correctIndex: 2,
          hint: "Xem định nghĩa đồng phẳng và tính chất 3 SGK.",
          explain: "Chính xác! Bốn điểm không cùng nằm trong một mặt phẳng gọi là bốn điểm không đồng phẳng (chúng tạo thành một tứ diện)."
        }
      ],
      subsections: [
        {
          key: "a",
          title: "Ba tính chất xác định đường thẳng, mặt phẳng và điểm đồng phẳng (TC 1, 2, 3)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-certificate"></i> [3 Tiên đề đầu tiên SGK Trang 72]:</div>
              <ul>
                <li><strong>Tính chất 1:</strong> Có một và chỉ một đường thẳng đi qua hai điểm phân biệt.</li>
                <li><strong>Tính chất 2:</strong> Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng. Kí hiệu mặt phẳng đi qua ba điểm $A, B, C$ không thẳng hàng là $(ABC)$.</li>
                <li><strong>Tính chất 3:</strong> Tồn tại bốn điểm không cùng thuộc một mặt phẳng.</li>
              </ul>
              <div style="background: #fffbeb; padding: 10px 14px; border-radius: 6px; margin-top: 8px; border-left: 3px solid #f59e0b;">
                <strong>Nhận xét quan trọng:</strong> Nếu có nhiều điểm cùng thuộc một mặt phẳng thì ta nói những điểm đó <strong>đồng phẳng</strong>. Nếu không có mặt phẳng nào chứa các điểm đó thì ta nói chúng <strong>không đồng phẳng</strong>.
              </div>
            </div>
            <div class="example-box">
              <div class="example-title"><i class="fa-solid fa-lightbulb"></i> Ví dụ 1 (SGK Trang 72): Số mặt phẳng xác định bởi 4 điểm không đồng phẳng</div>
              <p>Cho bốn điểm $A, B, C, D$ không đồng phẳng (Hình 4.5). Có bao nhiêu mặt phẳng đi qua ba trong số bốn điểm đã cho?</p>
              <div class="example-solution">
                <p><strong>Lời giải:</strong> Cứ ba điểm không thẳng hàng xác định duy nhất một mặt phẳng. Từ 4 điểm không đồng phẳng $A, B, C, D$, số cách chọn 3 điểm là $C_4^3 = 4$.</p>
                <p>Do đó có đúng <strong>4 mặt phẳng</strong> đi qua ba trong số bốn điểm đã cho, đó là các mặt phẳng: $(DAB), (DAC), (DBC)$ và $(ABC)$. Bốn mặt phẳng này tạo nên hình tứ diện $ABCD$.</p>
              </div>
            </div>
          `
        },
        {
          key: "b",
          title: "Đường thẳng nằm trong mặt phẳng và Giao tuyến của hai mặt phẳng (TC 4, 5, 6)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-certificate"></i> [3 Tiên đề tiếp theo SGK Trang 73 - 74]:</div>
              <ul>
                <li><strong>Tính chất 4:</strong> Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì tất cả các điểm của đường thẳng đều thuộc mặt phẳng đó. Khi đó ta nói <em>đường thẳng $d$ nằm trong $(P)$</em> (hoặc <em>$(P)$ chứa $d$</em>), kí hiệu là $d \\subset (P)$ hoặc $(P) \\supset d$.</li>
                <li><strong>Tính chất 5:</strong> Nếu hai mặt phẳng phân biệt có điểm chung thì các điểm chung của hai mặt phẳng là một đường thẳng đi qua điểm chung đó. Đường thẳng chung này gọi là <strong>giao tuyến</strong> của hai mặt phẳng, kí hiệu là $d = (P) \\cap (Q)$.</li>
                <li><strong>Tính chất 6:</strong> Trên mỗi mặt phẳng, tất cả các kết quả đã biết trong hình học phẳng đều đúng (định lí Thales, định lí Pythagoras, công thức diện tích tam giác,...).</li>
              </ul>
            </div>
            <svg viewBox="0 0 820 330" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
  <!-- Khối A: Tồn tại 4 điểm không đồng phẳng tạo thành Tứ diện ABCD (H.4.5) -->
  <g transform="translate(30, 20)">
    <!-- Tứ diện D.ABC -->
    <line x1="50" y1="180" x2="250" y2="160" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,4"/>
    <polygon points="140,25 50,180 130,220" fill="#fef3c7" fill-opacity="0.5"/>
    <polygon points="140,25 130,220 250,160" fill="#fde68a" fill-opacity="0.6"/>

    <line x1="140" y1="25" x2="50" y2="180" stroke="#d97706" stroke-width="2"/>
    <line x1="140" y1="25" x2="130" y2="220" stroke="#d97706" stroke-width="2"/>
    <line x1="140" y1="25" x2="250" y2="160" stroke="#d97706" stroke-width="2"/>
    <line x1="50" y1="180" x2="130" y2="220" stroke="#d97706" stroke-width="2"/>
    <line x1="130" y1="220" x2="250" y2="160" stroke="#d97706" stroke-width="2"/>

    <circle cx="140" cy="25" r="4.5" fill="#b45309"/>
    <text x="135" y="15" fill="#b45309" font-size="14" font-weight="700">D</text>

    <circle cx="50" cy="180" r="4.5" fill="#0f172a"/>
    <text x="32" y="185" fill="#0f172a" font-size="14" font-weight="700">A</text>

    <circle cx="130" cy="220" r="4.5" fill="#0f172a"/>
    <text x="125" y="240" fill="#0f172a" font-size="14" font-weight="700">B</text>

    <circle cx="250" cy="160" r="4.5" fill="#0f172a"/>
    <text x="260" y="165" fill="#0f172a" font-size="14" font-weight="700">C</text>

    <text x="40" y="270" fill="#0f172a" font-size="13" font-weight="700">Hình 4.5: Tứ diện ABCD</text>
    <text x="15" y="290" fill="#475569" font-size="11">Có đúng 4 mặt phẳng: (DAB), (DAC), (DBC), (ABC)</text>
  </g>

  <!-- Vạch ngăn cách dọc -->
  <line x1="340" y1="15" x2="340" y2="305" stroke="#e2e8f0" stroke-width="1.2"/>

  <!-- Khối B: Giao tuyến của hai mặt phẳng cắt nhau d = (P) &cap; (Q) -->
  <g transform="translate(390, 20)">
    <!-- Mặt phẳng (P) nằm ngang -->
    <polygon points="20,180 280,180 380,90 120,90" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8" fill-opacity="0.6"/>
    <text x="35" y="170" fill="#0369a1" font-size="14" font-weight="700">(P)</text>

    <!-- Mặt phẳng (Q) xiên cắt (P) theo giao tuyến d -->
    <polygon points="130,240 310,240 260,30 80,30" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8" fill-opacity="0.5"/>
    <text x="75" y="50" fill="#15803d" font-size="14" font-weight="700">(Q)</text>

    <!-- Đường giao tuyến chung d = (P) &cap; (Q) -->
    <line x1="100" y1="135" x2="330" y2="135" stroke="#dc2626" stroke-width="2.8"/>
    <text x="340" y="140" fill="#dc2626" font-size="14" font-weight="700">d = (P) &cap; (Q)</text>

    <!-- Hai điểm chung A và B trên giao tuyến -->
    <circle cx="160" cy="135" r="4.5" fill="#dc2626"/>
    <text x="155" y="125" fill="#dc2626" font-size="13" font-weight="700">A</text>

    <circle cx="260" cy="135" r="4.5" fill="#dc2626"/>
    <text x="255" y="125" fill="#dc2626" font-size="13" font-weight="700">B</text>

    <rect x="30" y="260" width="340" height="42" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="40" y="278" fill="#0f172a" font-size="12" font-weight="700">Tính chất 5: Hai mp phân biệt có 1 điểm chung A</text>
    <text x="40" y="293" fill="#0369a1" font-size="11">&rArr; Chúng có chung đường thẳng duy nhất d đi qua A (Giao tuyến)</text>
  </g>
</svg>
            <div class="checkpoint-card" id="cp-11-10-2">
              <div class="checkpoint-header">
                <span class="cp-badge"><i class="fa-solid fa-circle-question"></i> Checkpoint Mục 2</span>
                <span class="cp-title">Khái niệm Giao tuyến của hai mặt phẳng</span>
              </div>
              <p class="cp-question">Nếu hai mặt phẳng phân biệt $(P)$ và $(Q)$ có điểm chung $A$ thì tập hợp tất cả các điểm chung của chúng là gì?</p>
              <div class="checkpoint-options">
                <button type="button" class="btn-cp-opt" data-correct="false"><span class="opt-letter">A</span> Chỉ là duy nhất một điểm A</button>
                <button type="button" class="btn-cp-opt" data-correct="false"><span class="opt-letter">B</span> Một đoạn thẳng có giới hạn đi qua A</button>
                <button type="button" class="btn-cp-opt" data-correct="true"><span class="opt-letter">C</span> Một đường thẳng duy nhất đi qua A (giao tuyến)</button>
                <button type="button" class="btn-cp-opt" data-correct="false"><span class="opt-letter">D</span> Vô số đường thẳng cắt nhau tại A</button>
              </div>
              <div class="checkpoint-feedback">
                <div class="feedback-content correct">
                  <i class="fa-solid fa-circle-check"></i> <strong>Chính xác!</strong> Theo Tính chất 5, tập hợp các điểm chung của hai mặt phẳng phân biệt là một đường thẳng duy nhất đi qua các điểm chung đó, gọi là giao tuyến.
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3: CÁCH XÁC ĐỊNH MỘT MẶT PHẲNG
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "Cách xác định một mặt phẳng",
      audioScript: "Mục 3. Ba cách xác định một mặt phẳng và ứng dụng thực tiễn. Tiểu mục a. Ba cách xác định mặt phẳng. Ta có ba cách để xác định duy nhất một mặt phẳng trong không gian: Cách thứ nhất, qua ba điểm không thẳng hàng A, B, C, kí hiệu là mặt phẳng A B C. Cách thứ hai, qua một điểm A và một đường thẳng d không đi qua điểm A, kí hiệu là mặt phẳng A d. Cách thứ ba, qua hai đường thẳng cắt nhau a và b, kí hiệu là mặt phẳng a b. Tiểu mục b. Phương pháp tìm giao tuyến của hai mặt phẳng và ứng dụng giữ cửa. Để tìm giao tuyến của hai mặt phẳng, ta tìm hai điểm chung phân biệt của chúng, đường thẳng nối hai điểm chung chính là giao tuyến cần tìm. Trong đời sống, phụ kiện nam châm giữ cánh cửa hoạt động dựa trên việc cố định cánh cửa trên mặt phẳng tiếp xúc khi nam châm hút chặt, ngăn gió va đập làm hỏng đồ đạc.",
      audioUrl: "assets/audio/b11_10_sec3.mp3",
      buttonLabel: "Nghe giảng Mục 3",
      checkpoints: [
        {
          id: "poi-11-10-sec3-1",
          time: 20,
          title: "Giây 20: Các cách xác định mặt phẳng",
          question: "Trong các trường hợp sau, trường hợp nào KHÔNG xác định duy nhất một mặt phẳng?",
          options: [
            "Ba điểm không thẳng hàng",
            "Một điểm và một đường thẳng không đi qua điểm đó",
            "Hai đường thẳng cắt nhau",
            "Hai điểm phân biệt"
          ],
          correctIndex: 3,
          hint: "Qua 2 điểm phân biệt chỉ có 1 đường thẳng, nhưng có vô số mặt phẳng đi qua đường thẳng đó (như các trang sách).",
          explain: "Chính xác! Qua hai điểm phân biệt có vô số mặt phẳng chứa chúng (chùm mặt phẳng). Cần thêm điểm thứ ba không thẳng hàng để xác định duy nhất một mặt phẳng."
        }
      ],
      subsections: [
        {
          key: "a",
          title: "Ba cách xác định một mặt phẳng (SGK Trang 74 - 75)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-shapes"></i> [Ba điều kiện xác định duy nhất một mặt phẳng]:</div>
              <p>Một mặt phẳng được hoàn toàn xác định khi biết:</p>
              <ol>
                <li><strong>Cách 1:</strong> Nó đi qua <strong>ba điểm không thẳng hàng</strong> $A, B, C$. Kí hiệu là: $\\text{mp}(ABC)$ hoặc $(ABC)$.</li>
                <li><strong>Cách 2:</strong> Nó đi qua <strong>một điểm $A$ và chứa một đường thẳng $d$</strong> không đi qua $A$. Kí hiệu là: $\\text{mp}(A, d)$.</li>
                <li><strong>Cách 3:</strong> Nó chứa <strong>hai đường thẳng cắt nhau $a$ và $b$</strong>. Kí hiệu là: $\\text{mp}(a, b)$.</li>
              </ol>
            </div>
            <svg viewBox="0 0 820 280" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #fdfefe; border: 1px solid #cbd5e1; border-radius: 10px;">
  <!-- Cách 1: Qua 3 điểm không thẳng hàng -->
  <g transform="translate(15, 20)">
    <polygon points="10,170 190,170 240,70 60,70" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
    <text x="20" y="160" fill="#15803d" font-size="13" font-weight="700">(ABC)</text>
    <circle cx="70" cy="130" r="4" fill="#0f172a"/><text x="60" y="125" font-size="12" font-weight="700">A</text>
    <circle cx="150" cy="140" r="4" fill="#0f172a"/><text x="155" y="155" font-size="12" font-weight="700">B</text>
    <circle cx="130" cy="90" r="4" fill="#0f172a"/><text x="135" y="85" font-size="12" font-weight="700">C</text>
    <line x1="70" y1="130" x2="150" y2="140" stroke="#16a34a" stroke-dasharray="3,3"/>
    <line x1="150" y1="140" x2="130" y2="90" stroke="#16a34a" stroke-dasharray="3,3"/>
    <line x1="130" y1="90" x2="70" y2="130" stroke="#16a34a" stroke-dasharray="3,3"/>
    <text x="30" y="205" fill="#0f172a" font-size="13" font-weight="700">Cách 1: Ba điểm</text>
    <text x="15" y="225" fill="#475569" font-size="11">A, B, C không thẳng hàng</text>
    <text x="45" y="245" fill="#16a34a" font-size="12" font-weight="700">Kí hiệu: (ABC)</text>
  </g>

  <!-- Cách 2: Điểm A và đường thẳng d không qua A -->
  <g transform="translate(285, 20)">
    <polygon points="10,170 190,170 240,70 60,70" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
    <text x="20" y="160" fill="#1d4ed8" font-size="13" font-weight="700">mp(A, d)</text>
    <circle cx="100" cy="85" r="4.5" fill="#dc2626"/><text x="95" y="75" fill="#dc2626" font-size="13" font-weight="700">A</text>
    <line x1="40" y1="140" x2="200" y2="130" stroke="#2563eb" stroke-width="2.2"/>
    <text x="205" y="135" fill="#2563eb" font-size="13" font-weight="700">d</text>
    <circle cx="70" cy="138" r="3.5" fill="#0f172a"/>
    <circle cx="160" cy="132" r="3.5" fill="#0f172a"/>
    <text x="25" y="205" fill="#0f172a" font-size="13" font-weight="700">Cách 2: Điểm &amp; đường thẳng</text>
    <text x="25" y="225" fill="#475569" font-size="11">Điểm A &notin; đường thẳng d</text>
    <text x="45" y="245" fill="#2563eb" font-size="12" font-weight="700">Kí hiệu: mp(A, d)</text>
  </g>

  <!-- Cách 3: Hai đường thẳng cắt nhau a và b -->
  <g transform="translate(555, 20)">
    <polygon points="10,170 190,170 240,70 60,70" fill="#fefce8" stroke="#ca8a04" stroke-width="1.8"/>
    <text x="20" y="160" fill="#a16207" font-size="13" font-weight="700">mp(a, b)</text>
    <line x1="30" y1="150" x2="190" y2="85" stroke="#ca8a04" stroke-width="2.2"/>
    <text x="195" y="85" fill="#ca8a04" font-size="13" font-weight="700">a</text>
    <line x1="50" y1="85" x2="180" y2="155" stroke="#ca8a04" stroke-width="2.2"/>
    <text x="185" y="160" fill="#ca8a04" font-size="13" font-weight="700">b</text>
    <circle cx="118" cy="118" r="4.5" fill="#dc2626"/>
    <text x="115" y="140" fill="#dc2626" font-size="12" font-weight="700">M</text>
    <text x="25" y="205" fill="#0f172a" font-size="13" font-weight="700">Cách 3: Hai đường cắt nhau</text>
    <text x="35" y="225" fill="#475569" font-size="11">a &cap; b = {M}</text>
    <text x="45" y="245" fill="#ca8a04" font-size="12" font-weight="700">Kí hiệu: mp(a, b)</text>
  </g>
</svg>
          `
        },
        {
          key: "b",
          title: "Phương pháp tìm giao tuyến của hai mặt phẳng và Ứng dụng thực tiễn",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-compass-drafting"></i> [Quy tắc vàng tìm giao tuyến của hai mặt phẳng]:</div>
              <p>Để tìm giao tuyến của hai mặt phẳng phân biệt $(\\alpha)$ và $(\\beta)$, ta thực hiện theo 2 bước:</p>
              <ul>
                <li><strong>Bước 1:</strong> Tìm hai điểm chung phân biệt $M$ và $N$ của $(\\alpha)$ và $(\\beta)$, tức là:
                  $$M \\in (\\alpha) \\cap (\\beta) \\quad \\text{và} \\quad N \\in (\\alpha) \\cap (\\beta)$$
                </li>
                <li><strong>Bước 2:</strong> Đường thẳng nối hai điểm $M, N$ chính là giao tuyến cần tìm:
                  $$MN = (\\alpha) \\cap (\\beta)$$
                </li>
              </ul>
            </div>
            <div class="example-box">
              <div class="example-title"><i class="fa-solid fa-lightbulb"></i> Ví dụ 4 (SGK Trang 75): Giao tuyến của hai mặt phẳng chứa hai đường cắt nhau</div>
              <p>Cho hai đường thẳng cắt nhau $a, b$ tại điểm $M$, và gọi $S$ là một điểm không thuộc $\\text{mp}(a, b)$ (Hình 4.10). Xác định giao tuyến của $\\text{mp}(S, a)$ và $\\text{mp}(S, b)$.</p>
              <div class="example-solution">
                <p><strong>Lời giải:</strong></p>
                <ul>
                  <li>Điểm $S$ rõ ràng thuộc cả hai mặt phẳng $\\text{mp}(S, a)$ và $\\text{mp}(S, b)$ &rArr; $S$ là điểm chung thứ nhất.</li>
                  <li>Vì $M = a \\cap b$ nên $M \\in a \\subset \\text{mp}(S, a)$ và $M \\in b \\subset \\text{mp}(S, b)$ &rArr; $M$ là điểm chung thứ hai.</li>
                </ul>
                <p>&rArr; Giao tuyến của hai mặt phẳng $\\text{mp}(S, a)$ và $\\text{mp}(S, b)$ chính là đường thẳng <strong>$SM$</strong>.</p>
              </div>
            </div>
            <div class="checkpoint-card" id="cp-11-10-3">
              <div class="checkpoint-header">
                <span class="cp-badge"><i class="fa-solid fa-circle-question"></i> Checkpoint Mục 3</span>
                <span class="cp-title">Ứng dụng nam châm giữ cánh cửa (Vận dụng 2 SGK Trang 75)</span>
              </div>
              <p class="cp-question">Để giữ cánh cửa phòng không bị gió giật va đập, người ta lắp một phụ kiện nam châm gắn chặt cánh cửa vào tường khi mở hết cỡ. Về mặt hình học, điều này dựa trên nguyên lí nào?</p>
              <div class="checkpoint-options">
                <button type="button" class="btn-cp-opt" data-correct="false"><span class="opt-letter">A</span> Giảm số lượng điểm tiếp xúc của cửa</button>
                <button type="button" class="btn-cp-opt" data-correct="true"><span class="opt-letter">B</span> Trục bản lề (đường thẳng d) kết hợp với vị trí nam châm (điểm A không thuộc d) tạo thành một mặt phẳng cố định duy nhất</button>
                <button type="button" class="btn-cp-opt" data-correct="false"><span class="opt-letter">C</span> Hai đường thẳng song song</button>
                <button type="button" class="btn-cp-opt" data-correct="false"><span class="opt-letter">D</span> Tứ giác không đồng phẳng</button>
              </div>
              <div class="checkpoint-feedback">
                <div class="feedback-content correct">
                  <i class="fa-solid fa-circle-check"></i> <strong>Chính xác!</strong> Trục quay bản lề là một đường thẳng $d$, điểm hít nam châm là điểm $A \\notin d$. Khi cánh cửa hít chặt vào nam châm, toàn bộ cánh cửa được định vị trong duy nhất mặt phẳng $\\text{mp}(A, d)$, làm cho cửa đứng yên vững chắc!
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4: HÌNH CHÓP VÀ HÌNH TỨ DIỆN
    // -----------------------------------------------------------------------
    {
      num: "4",
      title: "Hình chóp và hình tứ diện",
      audioScript: "Mục 4. Hình chóp và hình tứ diện. Tiểu mục a. Khái niệm và các yếu tố của hình chóp. Cho đa giác lồi A 1 A 2 đến A n nằm trong mặt phẳng đáy và một điểm S nằm ngoài mặt phẳng đó. Nối S với các đỉnh của đáy, ta được hình chóp S A 1 A 2 đến A n. Điểm S gọi là đỉnh, đa giác đáy gọi là mặt đáy, các tam giác nối đỉnh với từng cạnh đáy gọi là các mặt bên, các đoạn thẳng nối đỉnh S với các đỉnh đáy là các cạnh bên. Nếu đáy là tam giác, ta gọi là hình chóp tam giác; nếu đáy là tứ giác, ta gọi là hình chóp tứ giác. Tiểu mục b. Khái niệm hình tứ diện và phương pháp tìm giao điểm. Cho bốn điểm A, B, C, D không đồng phẳng, hình tạo bởi bốn tam giác A B C, A C D, A B D và B C D được gọi là hình tứ diện A B C D. Để tìm giao điểm của một đường thẳng với một mặt phẳng, ta tìm một mặt phẳng phụ chứa đường thẳng đó, rồi tìm giao tuyến của mặt phẳng phụ với mặt phẳng đã cho. Giao điểm của đường thẳng ban đầu với giao tuyến vừa tìm được chính là giao điểm cần xác định.",
      audioUrl: "assets/audio/b11_10_sec4.mp3",
      buttonLabel: "Nghe giảng Mục 4",
      checkpoints: [
        {
          id: "poi-11-10-sec4-1",
          time: 25,
          title: "Giây 25: Số cạnh của hình tứ diện",
          question: "Hình tứ diện có tất cả bao nhiêu đỉnh, bao nhiêu mặt và bao nhiêu cạnh?",
          options: [
            "4 đỉnh, 4 mặt, 4 cạnh",
            "4 đỉnh, 4 mặt, 6 cạnh",
            "4 đỉnh, 6 mặt, 4 cạnh",
            "6 đỉnh, 4 mặt, 4 cạnh"
          ],
          correctIndex: 1,
          hint: "Tứ diện gồm 4 mặt tam giác. Đếm các cạnh nối giữa từng cặp đỉnh.",
          explain: "Chính xác! Tứ diện $ABCD$ có đúng 4 đỉnh, 4 mặt tam giác và 6 đoạn thẳng cạnh ($AB, BC, CD, DA, AC, BD$)."
        }
      ],
      subsections: [
        {
          key: "a",
          title: "Khái niệm và các yếu tố của Hình chóp (SGK Trang 75)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-mountain"></i> [Định nghĩa Hình chóp SGK Trang 75]:</div>
              <p>Cho đa giác lồi $A_1A_2\\dots A_n$ nằm trong mặt phẳng và một điểm $S$ nằm ngoài mặt phẳng chứa đa giác đó. Nối $S$ với các đỉnh $A_1, A_2, \\dots, A_n$, ta được $n$ tam giác: $SA_1A_2, SA_2A_3, \\dots, SA_nA_1$.</p>
              <p>Hình gồm $n$ tam giác đó và đa giác đáy $A_1A_2\\dots A_n$ được gọi là <strong>hình chóp</strong>, kí hiệu là: <strong>$S.A_1A_2\\dots A_n$</strong>.</p>
              <ul>
                <li><strong>Điểm $S$:</strong> Đỉnh của hình chóp.</li>
                <li><strong>Đa giác $A_1A_2\\dots A_n$:</strong> Mặt đáy của hình chóp.</li>
                <li><strong>Các tam giác $SA_1A_2, SA_2A_3, \\dots$:</strong> Các mặt bên của hình chóp.</li>
                <li><strong>Các đoạn thẳng $SA_1, SA_2, \\dots, SA_n$:</strong> Các cạnh bên.</li>
                <li><strong>Các cạnh của đa giác đáy:</strong> Các cạnh đáy.</li>
              </ul>
              <div style="background: #f1f5f9; padding: 10px 14px; border-radius: 6px; margin-top: 8px;">
                <strong>Cách gọi tên:</strong> Dựa theo tên của đa giác đáy. Nếu đáy là tam giác &rArr; <em>hình chóp tam giác</em>; nếu đáy là tứ giác &rArr; <em>hình chóp tứ giác</em>.
              </div>
            </div>
            <svg viewBox="0 0 820 340" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px;">
  <!-- Hình A: Hình chóp tứ giác S.ABCD (H.4.11) -->
  <g transform="translate(30, 20)">
    <line x1="60" y1="200" x2="220" y2="180" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,4"/>
    <line x1="150" y1="30" x2="220" y2="180" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,4"/>

    <polygon points="150,30 60,200 120,240" fill="#0284c7" fill-opacity="0.12"/>
    <polygon points="150,30 120,240 240,230" fill="#38bdf8" fill-opacity="0.18"/>

    <line x1="150" y1="30" x2="60" y2="200" stroke="#0284c7" stroke-width="2"/>
    <line x1="150" y1="30" x2="120" y2="240" stroke="#0284c7" stroke-width="2"/>
    <line x1="150" y1="30" x2="240" y2="230" stroke="#0284c7" stroke-width="2"/>
    <line x1="60" y1="200" x2="120" y2="240" stroke="#0284c7" stroke-width="2"/>
    <line x1="120" y1="240" x2="240" y2="230" stroke="#0284c7" stroke-width="2"/>
    <line x1="240" y1="230" x2="220" y2="180" stroke="#0284c7" stroke-width="2"/>

    <circle cx="150" cy="30" r="4.5" fill="#f59e0b"/>
    <text x="145" y="18" fill="#b45309" font-size="14" font-weight="700">S (Đỉnh)</text>

    <circle cx="60" cy="200" r="4" fill="#0f172a"/><text x="42" y="205" font-size="13" font-weight="700">A</text>
    <circle cx="120" cy="240" r="4" fill="#0f172a"/><text x="115" y="260" font-size="13" font-weight="700">B</text>
    <circle cx="240" cy="230" r="4" fill="#0f172a"/><text x="248" y="238" font-size="13" font-weight="700">C</text>
    <circle cx="220" cy="180" r="4" fill="#0f172a"/><text x="230" y="180" font-size="13" font-weight="700">D</text>

    <text x="60" y="285" fill="#0f172a" font-size="13" font-weight="700">Hình 4.11: Hình chóp tứ giác S.ABCD</text>
    <text x="50" y="305" fill="#475569" font-size="11">Gồm 1 đỉnh S, 1 đáy ABCD, 4 mặt bên, 8 cạnh</text>
  </g>

  <!-- Vạch ngăn cách dọc -->
  <line x1="365" y1="15" x2="365" y2="315" stroke="#e2e8f0" stroke-width="1.2"/>

  <!-- Hình B: Tứ diện ABCD và Tìm giao điểm của BF với mp(ACD) (Ví dụ 6 SGK) -->
  <g transform="translate(420, 20)">
    <line x1="60" y1="210" x2="280" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="60" y1="210" x2="240" y2="225" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="170" y1="25" x2="240" y2="225" stroke="#16a34a" stroke-width="1.8"/>

    <line x1="170" y1="25" x2="60" y2="210" stroke="#0f172a" stroke-width="2"/>
    <line x1="170" y1="25" x2="200" y2="260" stroke="#0f172a" stroke-width="2"/>
    <line x1="170" y1="25" x2="280" y2="190" stroke="#0f172a" stroke-width="2"/>
    <line x1="60" y1="210" x2="200" y2="260" stroke="#0f172a" stroke-width="2"/>
    <line x1="200" y1="260" x2="280" y2="190" stroke="#0f172a" stroke-width="2"/>

    <circle cx="240" cy="225" r="4" fill="#16a34a"/><text x="250" y="235" fill="#16a34a" font-size="12" font-weight="700">M</text>
    
    <line x1="60" y1="210" x2="195" y2="155" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="3,3"/>
    <circle cx="195" cy="155" r="5" fill="#dc2626"/>
    <text x="208" y="155" fill="#dc2626" font-size="13" font-weight="700">N = BF &cap; (ACD)</text>

    <circle cx="170" cy="25" r="4.5" fill="#0f172a"/><text x="165" y="15" font-size="14" font-weight="700">A</text>
    <circle cx="60" cy="210" r="4.5" fill="#0f172a"/><text x="42" y="215" font-size="14" font-weight="700">B</text>
    <circle cx="200" cy="260" r="4.5" fill="#0f172a"/><text x="205" y="278" font-size="14" font-weight="700">C</text>
    <circle cx="280" cy="190" r="4.5" fill="#0f172a"/><text x="290" y="195" font-size="14" font-weight="700">D</text>

    <rect x="25" y="285" width="340" height="36" rx="6" fill="#fef2f2" stroke="#fecaca"/>
    <text x="35" y="302" fill="#991b1b" font-size="12" font-weight="700">&bull; Thuật toán tìm giao điểm d &cap; (P):</text>
    <text x="35" y="315" fill="#7f1d1d" font-size="11">Tìm mặt phẳng phụ (ABM) chứa d, rồi tìm giao điểm N = d &cap; AM.</text>
  </g>
</svg>
          `
        },
        {
          key: "b",
          title: "Khái niệm Hình tứ diện và Phương pháp tìm giao điểm đường thẳng và mặt phẳng",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-cube"></i> [Định nghĩa Hình tứ diện SGK Trang 76]:</div>
              <p>Cho bốn điểm $A, B, C, D$ không đồng phẳng. Hình gồm bốn tam giác $ABC, ACD, ABD$ và $BCD$ được gọi là <strong>hình tứ diện</strong> (gọi tắt là <em>tứ diện</em>), kí hiệu là <strong>$ABCD$</strong>.</p>
              <ul>
                <li>Bốn điểm $A, B, C, D$ là 4 đỉnh của tứ diện.</li>
                <li>Sáu đoạn thẳng $AB, BC, CD, DA, AC, BD$ là 6 cạnh của tứ diện.</li>
                <li>Bốn tam giác là 4 mặt của tứ diện.</li>
                <li>Hai cạnh không có đỉnh chung gọi là <strong>hai cạnh đối diện</strong> (ví dụ: $AB$ và $CD$). Đỉnh không nằm trên một mặt gọi là đỉnh đối diện với mặt đó.</li>
                <li><em>Hình tứ diện có bốn mặt là các tam giác đều gọi là hình tứ diện đều.</em></li>
              </ul>
              <p><em>Nhận xét:</em> Hình tứ diện chính là hình chóp tam giác mà mặt nào của tứ diện cũng có thể coi là mặt đáy.</p>
            </div>
            <div class="example-box">
              <div class="example-title"><i class="fa-solid fa-lightbulb"></i> Thuật toán tìm giao điểm của đường thẳng $d$ và mặt phẳng $(\\alpha)$</div>
              <p>Để tìm giao điểm $N = d \\cap (\\alpha)$, ta thực hiện theo 2 bước chuẩn:</p>
              <ul>
                <li><strong>Bước 1:</strong> Chọn một mặt phẳng phụ $(\\beta)$ chứa đường thẳng $d$.</li>
                <li><strong>Bước 2:</strong> Tìm giao tuyến $a = (\\alpha) \\cap (\\beta)$. Khi đó giao điểm của $d$ và $a$ trong mặt phẳng $(\\beta)$ chính là giao điểm cần tìm:
                  $$N = d \\cap a \\implies N = d \\cap (\\alpha)$$
                </li>
              </ul>
            </div>
            <div class="checkpoint-card" id="cp-11-10-4">
              <div class="checkpoint-header">
                <span class="cp-badge"><i class="fa-solid fa-circle-question"></i> Checkpoint Mục 4</span>
                <span class="cp-title">Cặp cạnh đối diện của hình tứ diện</span>
              </div>
              <p class="cp-question">Trong hình tứ diện $ABCD$, cạnh đối diện với cạnh $AB$ là cạnh nào?</p>
              <div class="checkpoint-options">
                <button type="button" class="btn-cp-opt" data-correct="false"><span class="opt-letter">A</span> Cạnh AC</button>
                <button type="button" class="btn-cp-opt" data-correct="false"><span class="opt-letter">B</span> Cạnh BC</button>
                <button type="button" class="btn-cp-opt" data-correct="true"><span class="opt-letter">C</span> Cạnh CD</button>
                <button type="button" class="btn-cp-opt" data-correct="false"><span class="opt-letter">D</span> Cạnh AD</button>
              </div>
              <div class="checkpoint-feedback">
                <div class="feedback-content correct">
                  <i class="fa-solid fa-circle-check"></i> <strong>Chính xác!</strong> Hai cạnh đối diện trong tứ diện là hai cạnh không có đỉnh chung. Cạnh đối diện của $AB$ chính là $CD$.
                </div>
              </div>
            </div>
          `
        }
      ]
    }
  ],

  // =========================================================================
  // CHỐT KIẾN THỨC THEN CHỐT (TỔNG KẾT - REAL-WORLD WRAP-UP)
  // =========================================================================
  realworldWrapup: {
    title: "Chốt kiến thức then chốt (Tổng kết & Mẹo Thầy Sáng)",
    audioScript: "Chốt kiến thức then chốt bài học số 10. Thầy Sáng dặn dò các em hai phương pháp cốt lõi cần khắc cốt ghi tâm: Thứ nhất, để tìm giao tuyến của hai mặt phẳng, hãy luôn săn tìm hai điểm chung phân biệt. Nối hai điểm chung đó lại, ta được đường giao tuyến duy nhất. Thứ hai, để tìm giao điểm của đường thẳng d và mặt phẳng P, hãy khéo léo chọn một mặt phẳng phụ Q chứa d, tìm giao tuyến a của Q và P, rồi cho d cắt a tại điểm mong muốn. Chúc các em tự tin chinh phục phần bài tập trắc nghiệm củng cố ngay sau đây!",
    audioUrl: "assets/audio/b11_10_wrapup.mp3",
    buttonLabel: "Nghe tổng kết bài học",
    summaryHtml: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 15px 0;">
        <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border-left: 4px solid #16a34a;">
          <h4 style="color: #166534; margin: 0 0 8px 0;"><i class="fa-solid fa-bullseye"></i> 2 Bước Tìm Giao Tuyến 2 Mặt Phẳng</h4>
          <ol style="margin: 0; padding-left: 20px; font-size: 0.92rem; color: #14532d;">
            <li>Tìm điểm chung thứ nhất: $A \\in (P) \\cap (Q)$.</li>
            <li>Tìm điểm chung thứ hai: $B \\in (P) \\cap (Q)$.</li>
            <li><strong>Kết luận:</strong> Giao tuyến là đường thẳng $AB = (P) \\cap (Q)$.</li>
          </ol>
        </div>
        <div style="background: #eff6ff; padding: 16px; border-radius: 8px; border-left: 4px solid #2563eb;">
          <h4 style="color: #1e40af; margin: 0 0 8px 0;"><i class="fa-solid fa-crosshairs"></i> 2 Bước Tìm Giao Điểm Đường & Mặt</h4>
          <ol style="margin: 0; padding-left: 20px; font-size: 0.92rem; color: #1e3a8a;">
            <li>Chọn mặt phẳng phụ $(Q)$ chứa đường thẳng $d$.</li>
            <li>Tìm giao tuyến $a = (P) \\cap (Q)$.</li>
            <li><strong>Kết luận:</strong> Trong $(Q)$, cho $d$ cắt $a$ tại điểm $M$. Khi đó $M = d \\cap (P)$.</li>
          </ol>
        </div>
      </div>
      <div style="background: #fefce8; padding: 14px 18px; border-radius: 8px; border: 1px solid #fef08a;">
        <strong style="color: #854d0e;"><i class="fa-solid fa-graduation-cap"></i> Mẹo nhớ của Thầy Sáng:</strong>
        <p style="margin: 6px 0 0 0; color: #713f12; font-size: 0.92rem;">
          <em>"Muốn tìm giao tuyến &mdash; săn lùng hai điểm chung. Muốn tìm giao điểm &mdash; mượn mặt phẳng trung gian cắt xuyên qua!"</em>
        </p>
      </div>
    `
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP CỦNG CỐ TRẮC NGHIỆM (20%) - CHUẨN ĐỀ THI 2025
  // =========================================================================
  examFormatPractice: {
    // -----------------------------------------------------------------------
    // DẠNG 1: TRẮC NGHIỆM 4 LỰA CHỌN (5 CÂU) - ĐÁP ÁN HOÁN VỊ B, D, A, C, B
    // -----------------------------------------------------------------------
    part1MultipleChoice: [
      {
        id: "b10-p1-q1",
        question: "Câu 1. Cho ba điểm $A, B, C$ không thẳng hàng. Trong không gian, có bao nhiêu mặt phẳng đi qua cả ba điểm đó?",
        options: [
          "2 mặt phẳng",
          "1 mặt phẳng duy nhất",
          "3 mặt phẳng",
          "Vô số mặt phẳng"
        ],
        correctIndex: 1, // B
        explain: "Theo Tính chất 2 (SGK Trang 72): Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng, kí hiệu là mặt phẳng $(ABC)$."
      },
      {
        id: "b10-p1-q2",
        question: "Câu 2. Trong không gian, cho đường thẳng $d$ và điểm $A$ không nằm trên $d$. Có bao nhiêu mặt phẳng đi qua điểm $A$ và chứa đường thẳng $d$?",
        options: [
          "Không có mặt phẳng nào",
          "Có 2 mặt phẳng",
          "Có vô số mặt phẳng",
          "Có 1 mặt phẳng duy nhất"
        ],
        correctIndex: 3, // D
        explain: "Theo Cách 2 xác định mặt phẳng (SGK Trang 74): Một mặt phẳng được hoàn toàn xác định khi biết nó đi qua một điểm và chứa một đường thẳng không đi qua điểm đó, kí hiệu là $\\text{mp}(A, d)$."
      },
      {
        id: "b10-p1-q3",
        question: "Câu 3. Trong hình tứ diện $ABCD$, số cặp cạnh đối diện của tứ diện là:",
        options: [
          "3 cặp",
          "4 cặp",
          "6 cặp",
          "2 cặp"
        ],
        correctIndex: 0, // A
        explain: "Tứ diện $ABCD$ có 6 cạnh, chia thành đúng 3 cặp cạnh đối diện (không có đỉnh chung): $AB$ và $CD$; $AC$ và $BD$; $AD$ và $BC$."
      },
      {
        id: "b10-p1-q4",
        question: "Câu 4. Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là đường thẳng nào?",
        options: [
          "Đường thẳng AB",
          "Đường thẳng CD",
          "Đường thẳng SO",
          "Đường thẳng SA"
        ],
        correctIndex: 2, // C
        explain: "Ta có điểm chung thứ nhất là đỉnh $S$. Trong mặt phẳng đáy $(ABCD)$, $O = AC \\cap BD$ nên $O \\in AC \\subset (SAC)$ và $O \\in BD \\subset (SBD)$. Do đó $O$ là điểm chung thứ hai. Vậy giao tuyến là đường thẳng $SO$."
      },
      {
        id: "b10-p1-q5",
        question: "Câu 5. Cho hình chóp tứ giác $S.ABCD$. Hỏi hình chóp này gồm tất cả bao nhiêu cạnh?",
        options: [
          "6 cạnh",
          "8 cạnh",
          "10 cạnh",
          "12 cạnh"
        ],
        correctIndex: 1, // B
        explain: "Hình chóp tứ giác gồm có 4 cạnh đáy ($AB, BC, CD, DA$) và 4 cạnh bên ($SA, SB, SC, SD$). Tổng số cạnh bằng $4 + 4 = 8$ cạnh."
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 2: TRẮC NGHIỆM ĐÚNG / SAI (3 CÂU, MỖI CÂU 4 Ý)
    // -----------------------------------------------------------------------
    part2TrueFalse: [
      {
        id: "b10-p2-q1",
        title: "Câu 1. Trong không gian, xét tính Đúng / Sai của các khẳng định sau về các tiên đề và quan hệ liên thuộc:",
        items: [
          { label: "a", text: "Nếu một đường thẳng có một điểm thuộc mặt phẳng $(P)$ thì đường thẳng đó nằm trong mặt phẳng $(P)$.", correct: false, explain: "Sai. Muốn đường thẳng nằm trong $(P)$ thì phải có ít nhất HAI điểm phân biệt thuộc $(P)$." },
          { label: "b", text: "Ba điểm phân biệt bất kì luôn xác định duy nhất một mặt phẳng.", correct: false, explain: "Sai. Ba điểm phân biệt đó phải KHÔNG THẲNG HÀNG (nếu thẳng hàng thì có vô số mặt phẳng đi qua chúng)." },
          { label: "c", text: "Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất đi qua điểm chung đó.", correct: true, explain: "Đúng. Đây là nội dung chuẩn xác của Tính chất 5 (SGK Trang 73)." },
          { label: "d", text: "Tồn tại bốn điểm không cùng thuộc một mặt phẳng.", correct: true, explain: "Đúng. Đây là nội dung chuẩn xác của Tính chất 3 (SGK Trang 72), tạo nên hình tứ diện." }
        ]
      },
      {
        id: "b10-p2-q2",
        title: "Câu 2. Cho hình chóp tam giác $S.ABC$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$. Xét tính Đúng / Sai của các khẳng định sau:",
        items: [
          { label: "a", text: "Điểm $M$ thuộc mặt phẳng $(ABC)$.", correct: true, explain: "Đúng. Vì $M \\in AB \\subset (ABC)$ nên $M \\in (ABC)$." },
          { label: "b", text: "Đường thẳng $MN$ nằm trong mặt phẳng $(SBC)$.", correct: false, explain: "Sai. Cả $M$ và $N$ đều không thuộc mặt phẳng $(SBC)$." },
          { label: "c", text: "Giao tuyến của hai mặt phẳng $(SAB)$ và $(SAC)$ là đường thẳng $SA$.", correct: true, explain: "Đúng. Hai mặt phẳng có hai điểm chung phân biệt là $S$ và $A$, do đó giao tuyến là $SA$." },
          { label: "d", text: "Điểm $S$ thuộc mặt phẳng $(ABC)$.", correct: false, explain: "Sai. Theo định nghĩa hình chóp, đỉnh $S$ nằm ngoài mặt phẳng đáy $(ABC)$." }
        ]
      },
      {
        id: "b10-p2-q3",
        title: "Câu 3. Cho hình tứ diện $ABCD$. Gọi $I, J$ lần lượt là trung điểm của $AC$ và $BC$; $K$ là điểm thuộc cạnh $BD$ sao cho $K$ không phải là trung điểm của $BD$. Xét tính Đúng / Sai của các mệnh đề sau:",
        items: [
          { label: "a", text: "Đường thẳng $IJ$ nằm trong mặt phẳng $(ABC)$.", correct: true, explain: "Đúng. Vì $I, J \\in (ABC)$ nên theo Tính chất 4, đường thẳng $IJ \\subset (ABC)$." },
          { label: "b", text: "Bốn điểm $A, B, C, D$ là các điểm đồng phẳng.", correct: false, explain: "Sai. Theo định nghĩa hình tứ diện, bốn điểm $A, B, C, D$ không đồng phẳng." },
          { label: "c", text: "Trong mặt phẳng $(BCD)$, đường thẳng $JK$ cắt đường thẳng $CD$.", correct: true, explain: "Đúng. Trong $\\triangle BCD$, vì $J$ là trung điểm $BC$ còn $K$ không phải trung điểm $BD$ nên $JK$ không song song với $CD$, do đó $JK$ cắt $CD$." },
          { label: "d", text: "Giao tuyến của hai mặt phẳng $(ABD)$ và $(BCD)$ là đường thẳng $AD$.", correct: false, explain: "Sai. Hai mặt phẳng có hai điểm chung là $B$ và $D$, nên giao tuyến là đường thẳng $BD$." }
        ]
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 3: TRẢ LỜI NGẮN THỰC TẾ (2 CÂU)
    // -----------------------------------------------------------------------
    part3ShortAnswer: [
      {
        id: "b10-p3-q1",
        question: "Câu 1. Một người thợ mộc đóng một chiếc giá đỡ máy quay phim gồm 3 chân đỡ tiếp xúc với mặt đất tại 3 điểm phân biệt $A, B, C$ không thẳng hàng. Trong không gian, có bao nhiêu mặt phẳng đi qua cả 3 điểm tiếp xúc đó để đảm bảo giá đỡ luôn thăng bằng tuyệt đối không bị bập bênh?",
        correctValue: 1,
        unit: "mặt phẳng",
        explain: "Theo Tính chất 2 của hình học không gian, có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng. Do đó chỉ có duy nhất 1 mặt phẳng. Đáp số: 1."
      },
      {
        id: "b10-p3-q2",
        question: "Câu 2. Một mô hình lều trại dã ngoại có dạng hình chóp ngũ giác $S.ABCDE$ (đáy là đa giác 5 cạnh). Hỏi khung lều chóp này gồm tất cả bao nhiêu thanh cọc sắt (tương ứng với số cạnh của hình chóp)?",
        correctValue: 10,
        unit: "cạnh",
        explain: "Hình chóp ngũ giác có 5 cạnh đáy và 5 cạnh bên. Tổng số cạnh bằng $5 + 5 = 10$. Đáp số: 10."
      }
    ]
  }
};
