# Generator for js/lesson-10-6-data.js
# Ensuring double backslashes for all LaTeX syntax

code = r'''/**
 * BÀI HỌC SỐ: BÀI 6. HỆ THỨC LƯỢNG TRONG TAM GIÁC (TOÁN 10 - KẾT NỐI TRI THỨC)
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - Tích hợp toàn bộ Audio Voice AI (vi-VN-NamMinhNeural) chuẩn sư phạm
 * - Tích hợp câu hỏi tương tác POI cả trực tiếp trên màn hình và popup tự động khi nghe audio
 * - Đồ họa TikZ SVG Định lí Côsin, Định lí Sin, Tháp Rùa Hồ Gươm, Công thức Heron sắc nét 100%
 * - Bài tập trắc nghiệm 3 dạng thức thi mới 2025 (hoán vị A, B, C, D phong phú)
 */

window.LESSON_10_C3_B6_DATA = {
  id: "10-c3-b6",
  number: "Bài 6",
  title: "Hệ thức lượng trong tam giác",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO SƯ PHẠM ĐẦU GIỜ CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    avatar: "assets/images/teacher_avatar.png",
    name: "ThS. Lương Thanh Sáng",
    title: "Giáo viên Toán - THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang",
    greetingText: "Thầy Sáng chào các em học sinh Lớp 10 thân yêu! Chào mừng các em đến với Bài 6: Hệ thức lượng trong tam giác, một trong những bài học trọng tâm và ứng dụng thực tiễn rực rỡ nhất của hình học phẳng. Từ thời cổ đại, các nhà toán học đã tìm ra cách đo khoảng cách đến những hòn đảo xa xôi, đo chiều cao của kim tự tháp hay khoảng cách tới các vì sao mà không cần đặt chân đến. Tất cả bí mật tuyệt diệu đó nằm ở Định lí Côsin, Định lí Sin và các công thức tính diện tích tam giác mà Thầy trò mình sẽ cùng chinh phục ngay hôm nay. Hãy cùng Thầy bắt đầu tiết học với niềm đam mê khám phá bất tận nhé!",
    audioScript: "Thầy Sáng chào các em học sinh Lớp 10 thân yêu! Chào mừng các em đến với Bài 6: Hệ thức lượng trong tam giác, một trong những bài học trọng tâm và ứng dụng thực tiễn rực rỡ nhất của hình học phẳng. Từ thời cổ đại, các nhà toán học đã tìm ra cách đo khoảng cách đến những hòn đảo xa xôi, đo chiều cao của kim tự tháp hay khoảng cách tới các vì sao mà không cần đặt chân đến. Tất cả bí mật tuyệt diệu đó nằm ở Định lí Côsin, Định lí Sin và các công thức tính diện tích tam giác mà Thầy trò mình sẽ cùng chinh phục ngay hôm nay. Hãy cùng Thầy bắt đầu tiết học với niềm đam mê khám phá bất tận nhé!",
    audioUrl: "assets/audio/b10_6_welcome.mp3",
    buttonLabel: "Nghe Thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN BỘ GD&ĐT)
  // =========================================================================
  learningGoals: [
    "Thấu hiểu và vận dụng thành thạo Định lí Côsin, công thức tính góc và công thức độ dài đường trung tuyến trong mọi tam giác.",
    "Nắm vững Định lí Sin: $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C} = 2R$ và mối liên hệ với bán kính đường tròn ngoại tiếp.",
    "Làm chủ 5 công thức tính diện tích tam giác: $S = \\dfrac{1}{2}ah_a = \\dfrac{1}{2}bc\\sin A = \\dfrac{abc}{4R} = pr = \\sqrt{p(p-a)(p-b)(p-c)}$ (Công thức Heron).",
    "Vận dụng xuất sắc giải quyết bài toán đo đạc thực tiễn: xác định khoảng cách tới Tháp Rùa Hồ Gươm, đo chiều cao công trình và bài toán hoa tiêu hàng hải."
  ],
  goalsAudioScript: "Sau bài học số sáu, các em cần đạt được bốn mục tiêu trọng tâm: Thứ nhất, làm chủ định lí côsin và công thức đường trung tuyến. Thứ hai, vận dụng định lí sin liên hệ với bán kính đường tròn ngoại tiếp. Thứ ba, thành thạo năm công thức tính diện tích tam giác, đặc biệt là công thức Hê-rông. Và thứ tư, giải quyết xuất sắc các bài toán đo đạc khoảng cách thực tế như bài toán Tháp Rùa Hồ Gươm.",
  goalsAudioUrl: "assets/audio/b10_6_goals.mp3",
  goalsButtonLabel: "Nghe Thầy Sáng đọc mục tiêu",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN
  // =========================================================================
  hook: {
    title: "Tình huống thực tế: Đo khoảng cách từ bờ tới Tháp Rùa Hồ Gươm",
    story: "Ngắm Tháp Rùa từ bờ Hồ Hoàn Kiếm, làm sao để đo chính xác khoảng cách từ bờ tới Tháp Rùa mà không cần bơi qua hồ? Chỉ với hai chiếc cọc tiêu, một thước dây và một giác kế đo góc, hệ thức lượng trong tam giác giúp ta đo đạc chính xác tuyệt đối!",
    storyHtml: `
      <p>Ngắm Tháp Rùa cổ kính nằm giữa lòng Hồ Hoàn Kiếm (Thủ đô Hà Nội), câu hỏi thú vị đặt ra là:</p>
      <div style="margin: 12px 0; padding: 14px 18px; background: #f0fdf4; border-left: 4px solid #16a34a; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
        <p style="margin: 0 0 6px 0;">• <strong>Bài toán đặt ra:</strong> Làm sao để đo chính xác khoảng cách từ vị trí ta đang đứng ở bờ hồ tới Tháp Rùa mà <strong>không cần phải bơi hay chèo thuyền</strong> qua hồ?</p>
        <p style="margin: 0;">• <strong>Giải pháp của toán học:</strong> Chỉ cần cắm hai cọc tiêu $A, B$ trên bờ, đo khoảng cách $AB$, sau đó dùng giác kế đo hai góc ngắm hướng về Tháp Rùa $C$. Nhờ <strong>Định lí Sin và Định lí Côsin</strong>, vị trí và khoảng cách của Tháp Rùa được xác định hoàn hảo!</p>
      </div>
    `,
    audioScript: "Ngắm Tháp Rùa cổ kính nằm giữa lòng Hồ Hoàn Kiếm, làm sao để đo chính xác khoảng cách từ bờ hồ tới Tháp Rùa mà không cần bơi hay chèo thuyền qua hồ? Chỉ với hai chiếc cọc tiêu cắm trên bờ, một thước đo khoảng cách và một giác kế ngắm góc, các hệ thức lượng trong tam giác sẽ giúp các kỹ sư đo đạc khoảng cách chính xác đến từng centimet. Cùng thầy khám phá bí mật tuyệt vời này nhé!",
    audioUrl: "assets/audio/b10_6_hook.mp3",
    buttonLabel: "Nghe Thầy Sáng giảng dẫn nhập",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    illustrationCaption: "Hình 3.12 SGK: Mô phỏng bài toán đo đạc Tháp Rùa giữa lòng Hồ Gươm",
    illustrationSvg: `
      <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
        <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
          <i class="fa-solid fa-monument"></i> [Đồ họa TikZ - Hình 3.12 SGK]: Mô hình tam giác ngắm góc đo khoảng cách Tháp Rùa
        </div>
        <div style="text-align: center;">
          <svg width="520" height="240" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
            <defs>
              <linearGradient id="lakeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#bae6fd"/>
                <stop offset="100%" stop-color="#38bdf8"/>
              </linearGradient>
            </defs>

            <!-- Mặt hồ nước xanh biếc -->
            <rect x="20" y="30" width="480" height="150" rx="8" fill="url(#lakeGrad)" opacity="0.6"/>
            <text x="50" y="55" font-family="sans-serif" font-size="12" font-style="italic" fill="#0369a1">Mặt nước Hồ Gươm</text>

            <!-- Tháp Rùa tại vị trí C giữa hồ (260, 60) -->
            <polygon points="260,35 245,55 275,55" fill="#b45309"/>
            <rect x="247" y="55" width="26" height="25" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
            <circle cx="260" cy="80" r="5" fill="#dc2626"/>
            <text x="270" y="85" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#dc2626">C (Tháp Rùa)</text>

            <!-- Bờ hồ phía dưới -->
            <rect x="20" y="180" width="480" height="50" rx="4" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
            <text x="50" y="215" font-family="sans-serif" font-size="12" font-weight="bold" fill="#475569">BỜ HỒ HOÀN KIẾM</text>

            <!-- Cọc tiêu A (120, 180) và Cọc tiêu B (380, 180) -->
            <line x1="120" y1="160" x2="120" y2="195" stroke="#0284c7" stroke-width="3"/>
            <circle cx="120" cy="180" r="5" fill="#0284c7"/>
            <text x="95" y="210" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#0284c7">Cọc tiêu A</text>

            <line x1="380" y1="160" x2="380" y2="195" stroke="#0284c7" stroke-width="3"/>
            <circle cx="380" cy="180" r="5" fill="#0284c7"/>
            <text x="365" y="210" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#0284c7">Cọc tiêu B</text>

            <!-- Cạnh đo AB trên bờ -->
            <line x1="120" y1="180" x2="380" y2="180" stroke="#0284c7" stroke-width="2.5"/>
            <text x="240" y="195" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0284c7">Khoảng cách AB = c (đo được)</text>

            <!-- Tia ngắm từ A tới C và B tới C nét đứt -->
            <line x1="120" y1="180" x2="260" y2="80" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
            <line x1="380" y1="180" x2="260" y2="80" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>

            <!-- Góc ngắm alpha và beta -->
            <path d="M 155,180 A 35,35 0 0,0 148,160" fill="none" stroke="#e11d48" stroke-width="2"/>
            <text x="160" y="172" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#e11d48">α (Góc ngắm A)</text>

            <path d="M 345,180 A 35,35 0 0,1 352,160" fill="none" stroke="#e11d48" stroke-width="2"/>
            <text x="300" y="172" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#e11d48">β (Góc ngắm B)</text>
          </svg>
        </div>
      </div>
    `
  },

  // -------------------------------------------------------------------------
  // CÁC MỤC KIẾN THỨC BÀI HỌC
  // -------------------------------------------------------------------------
  sections: [
    // =======================================================================
    // MỤC 1. ĐỊNH LÍ CÔSIN
    // =======================================================================
    {
      num: "1",
      title: "Định lí Côsin và Hệ quả tính góc, đường trung tuyến",
      audioScript: "Mục một, định lí côsin trong tam giác. Trong một tam giác ABC bất kì, bình phương một cạnh bằng tổng bình phương hai cạnh kia trừ đi hai lần tích của hai cạnh đó với côsin của góc xen giữa. Cụ thể: a bình phương bằng b bình cộng c bình trừ hai b c nhân cos A. Khi góc A vuông, cos A bằng 0, định lí côsin chính là định lí Pi-ta-go quen thuộc. Từ định lí côsin, ta suy ra công thức tính góc: cos A bằng b bình cộng c bình trừ a bình, tất cả chia cho hai b c. Ngoài ra, ta còn có công thức tính độ dài đường trung tuyến m a bình phương bằng hai lần tổng b bình cộng c bình trừ a bình, tất cả chia cho bốn.",
      audioUrl: "assets/audio/b10_6_sec1.mp3",
      buttonLabel: "Nghe Thầy Sáng giảng Mục 1",
      checkpoints: [
        {
          id: "poi-10-6-sec1-1",
          time: 18,
          title: "Giây 18: Công thức định lí côsin",
          question: "Trong tam giác $ABC$, công thức định lí côsin tính cạnh $a^2$ theo hai cạnh $b, c$ và góc $A$ là:",
          options: [
            "$a^2 = b^2 + c^2 + 2bc \\cos A$",
            "$a^2 = b^2 + c^2 - 2bc \\cos A$",
            "$a^2 = b^2 + c^2 - bc \\cos A$",
            "$a^2 = (b + c)^2 - 2bc \\cos A$"
          ],
          correctIndex: 1,
          hint: "Hãy nhớ dấu trừ trước tích 2bc cos A.",
          explain: "Chính xác! Định lí côsin chuẩn: $a^2 = b^2 + c^2 - 2bc \\cos A$."
        },
        {
          id: "poi-10-6-sec1-2",
          time: 40,
          title: "Giây 40: Trường hợp góc tù",
          question: "Nếu góc $A$ là góc tù ($90^\\circ < \\widehat{A} < 180^\\circ$), thì $a^2$ so với $b^2 + c^2$ sẽ như thế nào?",
          options: [
            "$a^2 > b^2 + c^2$",
            "$a^2 < b^2 + c^2$",
            "$a^2 = b^2 + c^2$"
          ],
          correctIndex: 0,
          hint: "Khi góc A tù thì cos A < 0, do đó -2bc cos A > 0.",
          explain: "Chính xác! Vì góc tù có $\\cos A < 0$ nên $-2bc \\cos A > 0$, suy ra $a^2 > b^2 + c^2$."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Nội dung Định lí Côsin (SGK Trang 39)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Định lí Côsin SGK Trang 39]:</div>
              <p>Trong tam giác $ABC$ bất kì với các cạnh đối diện các góc $A, B, C$ lần lượt là $a, b, c$, ta có:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; margin: 10px 0;">
                <div style="background: #f0fdf4; padding: 12px; border-radius: 6px; text-align: center; border-left: 3px solid #16a34a;">
                  $$a^2 = b^2 + c^2 - 2bc \\cos A$$
                </div>
                <div style="background: #f0fdf4; padding: 12px; border-radius: 6px; text-align: center; border-left: 3px solid #16a34a;">
                  $$b^2 = a^2 + c^2 - 2ac \\cos B$$
                </div>
                <div style="background: #f0fdf4; padding: 12px; border-radius: 6px; text-align: center; border-left: 3px solid #16a34a;">
                  $$c^2 = a^2 + b^2 - 2ab \\cos C$$
                </div>
              </div>
              <p style="margin-top: 8px;"><em>Nhận xét:</em> Khi $\\widehat{A} = 90^\\circ$ thì $\\cos 90^\\circ = 0$, ta có $a^2 = b^2 + c^2$. Như vậy <strong>Định lí Pythagoras là một trường hợp đặc biệt</strong> của Định lí Côsin!</p>
            </div>

            <!-- TikZ SVG: Hình 3.8 SGK chứng minh định lí côsin -->
            <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
              <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
                <i class="fa-solid fa-draw-polygon"></i> [Đồ họa TikZ - Hình 3.8 & 3.9 SGK]: Tam giác tổng quát và ứng dụng định lí côsin
              </div>
              <div style="text-align: center;">
                <svg width="480" height="200" viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <!-- Tam giác ABC với góc A tù 120° như Ví dụ 1 SGK -->
                  <!-- A tại (240, 70), B tại (80, 160), C tại (420, 160) -->
                  <polygon points="240,70 80,160 420,160" fill="#f8fafc" stroke="#0284c7" stroke-width="2.5"/>

                  <!-- Các đỉnh -->
                  <circle cx="240" cy="70" r="5" fill="#dc2626"/>
                  <text x="235" y="55" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" fill="#dc2626">A</text>

                  <circle cx="80" cy="160" r="5" fill="#0284c7"/>
                  <text x="55" y="165" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" fill="#0284c7">B</text>

                  <circle cx="420" cy="160" r="5" fill="#0284c7"/>
                  <text x="430" y="165" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" fill="#0284c7">C</text>

                  <!-- Cung góc A = 120° -->
                  <path d="M 215,84 A 30,30 0 0,0 266,85" fill="none" stroke="#dc2626" stroke-width="2"/>
                  <text x="230" y="105" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#dc2626">120°</text>

                  <!-- Tên và số đo các cạnh: c = AB = 5, b = AC = 8, a = BC = sqrt(129) -->
                  <text x="145" y="105" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#475569">c = 5</text>
                  <text x="340" y="105" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#475569">b = 8</text>
                  <text x="235" y="180" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#0284c7">a = BC = √129 ≈ 11,36</text>
                </svg>
              </div>
            </div>
          `,
          memoryTip: {
            title: "Mẹo của Thầy Sáng: Nhận dạng bài toán dùng Định lí Côsin",
            content: "Khi một bài toán cho biết:<br>• <strong>Hai cạnh và góc xen giữa:</strong> Tính cạnh thứ ba bằng Định lí Côsin.<br>• <strong>Ba cạnh của tam giác:</strong> Muốn tính góc bất kì, dùng ngay Hệ quả côsin!"
          }
        },
        {
          key: "1b",
          title: "Hệ quả tính góc và Công thức đường trung tuyến",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-compass-drafting"></i> [Hệ quả tính góc & Công thức trung tuyến]:</div>
              <p><strong>1. Hệ quả tính côsin của các góc:</strong></p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; margin: 10px 0;">
                <div style="background: #eff6ff; padding: 10px; border-radius: 6px; text-align: center;">$$\\cos A = \\dfrac{b^2 + c^2 - a^2}{2bc}$$</div>
                <div style="background: #eff6ff; padding: 10px; border-radius: 6px; text-align: center;">$$\\cos B = \\dfrac{a^2 + c^2 - b^2}{2ac}$$</div>
                <div style="background: #eff6ff; padding: 10px; border-radius: 6px; text-align: center;">$$\\cos C = \\dfrac{a^2 + b^2 - c^2}{2ab}$$</div>
              </div>
              <p><strong>2. Công thức tính độ dài đường trung tuyến $m_a, m_b, m_c$:</strong></p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; margin: 10px 0;">
                <div style="background: #fffbeb; padding: 10px; border-radius: 6px; text-align: center; border-left: 3px solid #f59e0b;">$$m_a^2 = \\dfrac{2(b^2 + c^2) - a^2}{4}$$</div>
                <div style="background: #fffbeb; padding: 10px; border-radius: 6px; text-align: center; border-left: 3px solid #f59e0b;">$$m_b^2 = \\dfrac{2(a^2 + c^2) - b^2}{4}$$</div>
                <div style="background: #fffbeb; padding: 10px; border-radius: 6px; text-align: center; border-left: 3px solid #f59e0b;">$$m_c^2 = \\dfrac{2(a^2 + b^2) - c^2}{4}$$</div>
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 1 (SGK Trang 39) & Ứng dụng tính cạnh và góc",
            problem: "Cho tam giác $ABC$ có $\\widehat{A} = 120^\\circ, AB = 5, AC = 8$. Tính độ dài cạnh $BC$ và tính $\\cos B$.",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <p>Áp dụng định lí côsin cho tam giác $ABC$ có $b = AC = 8, c = AB = 5, \\widehat{A} = 120^\\circ$:</p>
              <div style="margin: 8px 0; color: #0284c7; font-weight: bold;">
                $$BC^2 = AB^2 + AC^2 - 2AB \\cdot AC \\cdot \\cos 120^\\circ = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cdot \\left(-\\dfrac{1}{2}\\right)$$
                $$= 25 + 64 + 40 = 129 \\implies BC = \\sqrt{129} \\approx 11{,}36.$$
              </div>
              <p>Áp dụng hệ quả tính góc để tìm $\\cos B$:</p>
              <div style="margin: 8px 0; color: #1e3a8a; font-weight: bold;">
                $$\\cos B = \\dfrac{a^2 + c^2 - b^2}{2ac} = \\dfrac{129 + 25 - 64}{2 \\cdot \\sqrt{129} \\cdot 5} = \\dfrac{90}{10\\sqrt{129}} = \\dfrac{9}{\\sqrt{129}} \\approx 0{,}7925 \\implies \\widehat{B} \\approx 37{,}6^\\circ.$$
              </div>
            `,
            similarProblem: `
              <p><strong>Bài tập tương tự:</strong> Cho tam giác $ABC$ có $AB = 3, AC = 6, \\widehat{A} = 60^\\circ$. Tính cạnh $BC$.</p>
              <p><strong>Hướng dẫn:</strong> $BC^2 = 3^2 + 6^2 - 2 \\cdot 3 \\cdot 6 \\cdot \\cos 60^\\circ = 9 + 36 - 18 = 27 \\implies BC = 3\\sqrt{3}$.</p>
            `
          }
        }
      ]
    },

    // =======================================================================
    // MỤC 2. ĐỊNH LÍ SIN
    // =======================================================================
    {
      num: "2",
      title: "Định lí Sin và Bán kính đường tròn ngoại tiếp",
      audioScript: "Mục hai, định lí sin. Trong mọi tam giác ABC, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng nhau và bằng hai lần bán kính đường tròn ngoại tiếp, tức là: a chia sin A bằng b chia sin B bằng c chia sin C và bằng 2R. Nhờ định lí sin, hễ các em biết một cặp cạnh đối và góc đối, ta có thể tính ngay bán kính đường tròn ngoại tiếp R, hoặc tính các cạnh và các góc còn lại cực kì thanh thoát!",
      audioUrl: "assets/audio/b10_6_sec2.mp3",
      buttonLabel: "Nghe Thầy Sáng giảng Mục 2",
      checkpoints: [
        {
          id: "poi-10-6-sec2-1",
          time: 18,
          title: "Giây 18: Tỉ số Định lí Sin",
          question: "Trong tam giác $ABC$ nội tiếp đường tròn bán kính $R$, tỉ số $\\dfrac{a}{\\sin A}$ bằng:",
          options: [
            "$R$",
            "$2R$",
            "$4R$",
            "$\\dfrac{R}{2}$"
          ],
          correctIndex: 1,
          hint: "Hãy nhớ tỉ số bằng đường kính đường tròn ngoại tiếp 2R.",
          explain: "Chính xác! $\\dfrac{a}{\\sin A} = 2R$ (đường kính)."
        },
        {
          id: "poi-10-6-sec2-2",
          time: 36,
          title: "Giây 36: Tính bán kính ngoại tiếp R",
          question: "Cho tam giác có cạnh $a = 10$ và góc đối diện $\\widehat{A} = 30^\\circ$. Bán kính $R$ bằng bao nhiêu?",
          options: [
            "$R = 5$",
            "$R = 20$",
            "$R = 10$",
            "$R = 15$"
          ],
          correctIndex: 2,
          hint: "Ta có 2R = a / sin A = 10 / sin 30° = 10 / 0.5 = 20 -> R = 10.",
          explain: "Chính xác! $2R = \\dfrac{10}{\\sin 30^\\circ} = 20 \\implies R = 10$."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Định lí Sin (SGK Trang 39) & Đồ họa đường tròn ngoại tiếp",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-circle"></i> [Định lí Sin SGK Trang 39]:</div>
              <p>Trong tam giác $ABC$, $R$ là bán kính đường tròn ngoại tiếp. Ta có:</p>
              <div style="background: #eff6ff; padding: 14px; border-radius: 8px; border: 1.5px solid #2563eb; text-align: center; margin: 10px 0; font-size: 1.2rem; color: #1e3a8a; font-weight: bold;">
                $$\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C} = 2R$$
              </div>
              <p><strong>Các công thức suy ra:</strong></p>
              <ul class="sgk-box-list">
                <li>Tính độ dài cạnh: $a = 2R\\sin A, \\quad b = 2R\\sin B, \\quad c = 2R\\sin C$.</li>
                <li>Tính bán kính ngoại tiếp: $R = \\dfrac{a}{2\\sin A} = \\dfrac{b}{2\\sin B} = \\dfrac{c}{2\\sin C}$.</li>
              </ul>
            </div>

            <!-- TikZ SVG: Hình 3.10 SGK - Chứng minh Định lí Sin qua đường kính BM -->
            <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
              <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
                <i class="fa-solid fa-circle-dot"></i> [Đồ họa TikZ - Hình 3.10 SGK]: Tam giác nội tiếp và đường kính 2R
              </div>
              <div style="text-align: center;">
                <svg width="440" height="240" viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <!-- Đường tròn tâm O(220, 120), R = 95 -->
                  <circle cx="220" cy="120" r="95" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
                  <circle cx="220" cy="120" r="4" fill="#334155"/>
                  <text x="225" y="125" font-family="'Times New Roman', serif" font-size="14" font-style="italic">O</text>

                  <!-- Đỉnh A(180, 28), B(135, 168), C(312, 145) -->
                  <polygon points="180,28 135,168 312,145" fill="none" stroke="#0284c7" stroke-width="2.5"/>
                  <circle cx="180" cy="28" r="5" fill="#0284c7"/>
                  <text x="175" y="20" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#0284c7">A</text>

                  <circle cx="135" cy="168" r="5" fill="#0284c7"/>
                  <text x="115" y="180" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#0284c7">B</text>

                  <circle cx="312" cy="145" r="5" fill="#0284c7"/>
                  <text x="322" y="155" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#0284c7">C</text>

                  <!-- Cạnh đối diện BC = a màu đỏ -->
                  <line x1="135" y1="168" x2="312" y2="145" stroke="#dc2626" stroke-width="2.5"/>
                  <text x="220" y="175" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#dc2626">a (BC)</text>

                  <!-- Đường kính BM qua tâm O: B(135, 168), O(220, 120) -> M = 2*O - B = (305, 72) -->
                  <line x1="135" y1="168" x2="305" y2="72" stroke="#e11d48" stroke-width="2" stroke-dasharray="4,4"/>
                  <circle cx="305" cy="72" r="5" fill="#e11d48"/>
                  <text x="315" y="75" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#e11d48">M</text>

                  <!-- Đoạn MC -->
                  <line x1="305" y1="72" x2="312" y2="145" stroke="#e11d48" stroke-width="2" stroke-dasharray="4,4"/>

                  <!-- Kí hiệu 2R trên đường kính BM -->
                  <text x="200" y="145" font-family="sans-serif" font-size="13" font-weight="bold" fill="#e11d48">2R</text>

                  <!-- Kí hiệu góc vuông tại C của tam giác BCM chắn nửa đường tròn -->
                  <polyline points="307,135 297,136 298,146" fill="none" stroke="#e11d48" stroke-width="1.5"/>
                </svg>
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 2 (SGK Trang 40): Tính các yếu tố tam giác qua Định lí Sin",
            problem: "Cho tam giác $ABC$ có $\\widehat{A} = 135^\\circ, \\widehat{C} = 15^\\circ$ và cạnh $b = AC = 12$. Tính số đo góc $\\widehat{B}$, độ dài các cạnh $a, c$ và bán kính $R$.",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <p>1. Tổng ba góc trong tam giác bằng $180^\\circ$ nên:</p>
              <p>$$\\widehat{B} = 180^\\circ - (\\widehat{A} + \\widehat{C}) = 180^\\circ - (135^\\circ + 15^\\circ) = 30^\\circ.$$</p>
              <p>2. Áp dụng định lí sin:</p>
              <p>$$\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C} = 2R \\iff \\dfrac{a}{\\sin 135^\\circ} = \\dfrac{12}{\\sin 30^\\circ} = \\dfrac{c}{\\sin 15^\\circ} = 2R.$$</p>
              <p>Vì $\\sin 30^\\circ = \\dfrac{1}{2}$ nên tỉ số: $\\dfrac{12}{\\sin 30^\\circ} = 24$. Từ đó suy ra:</p>
              <div style="margin: 8px 0; color: #0284c7; font-weight: bold;">
                $$a = 24 \\cdot \\sin 135^\\circ = 24 \\cdot \\dfrac{\\sqrt{2}}{2} = 12\\sqrt{2} \\approx 16{,}97.$$
                $$c = 24 \\cdot \\sin 15^\\circ = 24 \\cdot \\dfrac{\\sqrt{6} - \\sqrt{2}}{4} = 6(\\sqrt{6} - \\sqrt{2}) \\approx 6{,}21.$$
                $$2R = 24 \\implies R = 12.$$
              </div>
            `,
            similarProblem: `
              <p><strong>Bài tập tương tự:</strong> Cho tam giác $ABC$ có $\\widehat{B} = 60^\\circ, \\widehat{C} = 45^\\circ$ và $b = 6$. Tính cạnh $c$ và bán kính $R$.</p>
              <p><strong>Hướng dẫn:</strong> $\\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C} \\implies c = \\dfrac{6 \\cdot \\sin 45^\\circ}{\\sin 60^\\circ} = \\dfrac{6 \\cdot (\\sqrt{2}/2)}{\\sqrt{3}/2} = 2\\sqrt{6}$. $R = \\dfrac{b}{2\\sin B} = \\dfrac{6}{2 \\cdot (\\sqrt{3}/2)} = 2\\sqrt{3}$.</p>
            `
          }
        }
      ]
    },

    // =======================================================================
    // MỤC 3. GIẢI TAM GIÁC VÀ ỨNG DỤNG THỰC TẾ
    // =======================================================================
    {
      num: "3",
      title: "Giải tam giác và Ứng dụng đo đạc thực tiễn",
      audioScript: "Mục ba, giải tam giác và ứng dụng thực tiễn. Giải tam giác là bài toán tìm số đo các cạnh và các góc còn lại khi đã biết một số yếu tố của tam giác đó. Chúng ta thường gặp ba trường hợp điển hình: biết hai cạnh và góc xen giữa; biết ba cạnh; hoặc biết một cạnh và hai góc kề. Trở lại bài toán đo Tháp Rùa giữa hồ Hoàn Kiếm, ta cắm hai cọc tiêu A và B trên bờ, đo được khoảng cách AB và hai góc ngắm tới Tháp Rùa C. Áp dụng định lí sin, ta tính được khoảng cách từ vị trí A tới Tháp Rùa một cách chính xác tuyệt đối mà không cần đặt chân xuống nước!",
      audioUrl: "assets/audio/b10_6_sec3.mp3",
      buttonLabel: "Nghe Thầy Sáng giảng Mục 3",
      checkpoints: [
        {
          id: "poi-10-6-sec3-1",
          time: 20,
          title: "Giây 20: Ba trường hợp giải tam giác",
          question: "Khi biết độ dài cả 3 cạnh của tam giác, ta dùng công thức nào để tính các góc?",
          options: [
            "Hệ quả Định lí Côsin",
            "Định lí Sin",
            "Công thức diện tích $S = pr$"
          ],
          correctIndex: 0,
          hint: "cos A = (b^2 + c^2 - a^2) / (2bc).",
          explain: "Chính xác! Biết 3 cạnh thì dùng Hệ quả Định lí Côsin để tính cos góc."
        },
        {
          id: "poi-10-6-sec3-2",
          time: 38,
          title: "Giây 38: Quy trình đo Tháp Rùa",
          question: "Để tính khoảng cách $AC$ tới Tháp Rùa khi biết cạnh đáy $AB$ và 2 góc ngắm $\\alpha, \\beta$, ta dùng định lí nào?",
          options: [
            "Định lí Pythagoras",
            "Định lí Sin",
            "Công thức Heron"
          ],
          correctIndex: 1,
          hint: "Biết 1 cạnh và 2 góc kề -> tính được góc thứ ba, sau đó áp dụng định lí sin.",
          explain: "Chính xác! Ta tính $\\widehat{C} = 180^\\circ - (\\alpha + \\beta)$, sau đó áp dụng Định lí Sin: $AC = \\dfrac{AB \\cdot \\sin \\beta}{\\sin C}$."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Quy trình giải tam giác & Bài toán thực tế đo đạc Tháp Rùa (Ví dụ 4 SGK Trang 40)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-map-location-dot"></i> [Quy trình giải bài toán đo khoảng cách Tháp Rùa]:</div>
              <p>Để đo khoảng cách từ điểm $A$ trên bờ hồ tới Tháp Rùa $C$ giữa hồ (Hình 3.12 SGK), các kỹ sư thực hiện 4 bước:</p>
              <ul class="sgk-box-list">
                <li><strong>Bước 1:</strong> Chọn điểm $B$ trên bờ sao cho nhìn thấy cả $A$ và $C$. Đo trực tiếp khoảng cách $AB = c$ (ví dụ $AB = 40\\text{ m}$).</li>
                <li><strong>Bước 2:</strong> Đứng tại $A$, dùng giác kế ngắm cọc tiêu $B$ và Tháp Rùa $C$, đo được góc $\\alpha = \\widehat{CAB}$ (ví dụ $\\alpha = 70^\\circ$).</li>
                <li><strong>Bước 3:</strong> Đứng tại $B$, ngắm cọc tiêu $A$ và Tháp Rùa $C$, đo được góc $\\beta = \\widehat{CBA}$ (ví dụ $\\beta = 65^\\circ$).</li>
                <li><strong>Bước 4:</strong> Tính góc ngắm tại Tháp Rùa: $\\widehat{C} = 180^\\circ - (\\alpha + \\beta) = 180^\\circ - (70^\\circ + 65^\\circ) = 45^\\circ$.<br>Áp dụng Định lí Sin trong tam giác $ABC$:
                  $$\\dfrac{AC}{\\sin \\beta} = \\dfrac{AB}{\\sin C} \\implies AC = \\dfrac{AB \\cdot \\sin \\beta}{\\sin C} = \\dfrac{40 \\cdot \\sin 65^\\circ}{\\sin 45^\\circ} \\approx \\dfrac{40 \\cdot 0{,}9063}{0{,}7071} \\approx 51{,}26\\text{ m}.$$
                </li>
              </ul>
              <p><em>Kết luận:</em> Khoảng cách từ bờ $A$ tới Tháp Rùa là xấp xỉ <strong>$51{,}26$ mét</strong>.</p>
            </div>
          `
        }
      ]
    },

    // =======================================================================
    // MỤC 4. CÔNG THỨC TÍNH DIỆN TÍCH TAM GIÁC
    // =======================================================================
    {
      num: "4",
      title: "Các công thức tính diện tích tam giác và Công thức Heron",
      audioScript: "Mục bốn, các công thức tính diện tích tam giác. Trong hình học, chúng ta có năm công thức tính diện tích tam giác vô cùng lợi hại. Thứ nhất, diện tích bằng một nửa cạnh đáy nhân chiều cao tương ứng. Thứ hai, diện tích bằng một nửa tích hai cạnh nhân sin của góc xen giữa. Thứ ba, diện tích bằng tích ba cạnh a b c chia cho 4R. Thứ tư, diện tích bằng nửa chu vi p nhân bán kính đường tròn nội tiếp r. Và thứ năm, khi biết độ dài cả ba cạnh, công thức Hê-rông nổi tiếng cho phép ta tính diện tích bằng căn bậc hai của p nhân p trừ a, nhân p trừ b, nhân p trừ c. Nắm vững năm công thức này, các em có thể giải quyết mọi bài toán diện tích từ đơn giản đến nâng cao!",
      audioUrl: "assets/audio/b10_6_sec4.mp3",
      buttonLabel: "Nghe Thầy Sáng giảng Mục 4",
      checkpoints: [
        {
          id: "poi-10-6-sec4-1",
          time: 20,
          title: "Giây 20: Công thức diện tích theo sin góc xen giữa",
          question: "Công thức nào sau đây tính diện tích tam giác theo 2 cạnh $b, c$ và góc xen giữa $A$?",
          options: [
            "$S = bc \\sin A$",
            "$S = \\dfrac{1}{2}bc \\sin A$",
            "$S = \\dfrac{1}{2}bc \\cos A$",
            "$S = \\dfrac{1}{4}bc \\sin A$"
          ],
          correctIndex: 1,
          hint: "Nhớ hệ số 1/2 và sin góc xen giữa.",
          explain: "Chính xác! $S = \\dfrac{1}{2}bc \\sin A$."
        },
        {
          id: "poi-10-6-sec4-2",
          time: 42,
          title: "Giây 42: Công thức Heron",
          question: "Cho tam giác có 3 cạnh là $3, 4, 5$. Nửa chu vi $p$ và diện tích $S$ lần lượt bằng:",
          options: [
            "$p = 12$ và $S = 12$",
            "$p = 6$ và $S = 6$",
            "$p = 6$ và $S = 10$",
            "$p = 7$ và $S = 6$"
          ],
          correctIndex: 1,
          hint: "p = (3 + 4 + 5)/2 = 6. S = sqrt(6 * 3 * 2 * 1) = sqrt(36) = 6.",
          explain: "Chính xác! $p = 6$, $S = \\sqrt{6(6-3)(6-4)(6-5)} = \\sqrt{36} = 6$."
        }
      ],
      subsections: [
        {
          key: "4a",
          title: "Hệ thống 5 công thức tính diện tích tam giác (SGK Trang 41)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-shapes"></i> [Bảng vàng 5 công thức diện tích tam giác ABC]:</div>
              <p>Kí hiệu $p = \\dfrac{a + b + c}{2}$ là nửa chu vi, $R$ là bán kính ngoại tiếp, $r$ là bán kính nội tiếp. Ta có:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin: 12px 0;">
                <div style="background: #ffffff; padding: 12px; border-radius: 8px; border: 1.5px solid #0284c7; text-align: center;">
                  <strong style="color: #0284c7;">(1) Cạnh đáy & Chiều cao:</strong>
                  <div style="margin-top: 6px; font-size: 1.05rem; color: #1e3a8a;">$$S = \\dfrac{1}{2}ah_a = \\dfrac{1}{2}bh_b = \\dfrac{1}{2}ch_c$$</div>
                </div>
                <div style="background: #ffffff; padding: 12px; border-radius: 8px; border: 1.5px solid #0284c7; text-align: center;">
                  <strong style="color: #0284c7;">(2) Tích 2 cạnh & Sin xen giữa:</strong>
                  <div style="margin-top: 6px; font-size: 1.05rem; color: #1e3a8a;">$$S = \\dfrac{1}{2}bc\\sin A = \\dfrac{1}{2}ac\\sin B = \\dfrac{1}{2}ab\\sin C$$</div>
                </div>
                <div style="background: #ffffff; padding: 12px; border-radius: 8px; border: 1.5px solid #0284c7; text-align: center;">
                  <strong style="color: #0284c7;">(3) Bán kính ngoại tiếp R:</strong>
                  <div style="margin-top: 6px; font-size: 1.05rem; color: #1e3a8a;">$$S = \\dfrac{abc}{4R} \\implies R = \\dfrac{abc}{4S}$$</div>
                </div>
                <div style="background: #ffffff; padding: 12px; border-radius: 8px; border: 1.5px solid #0284c7; text-align: center;">
                  <strong style="color: #0284c7;">(4) Bán kính nội tiếp r:</strong>
                  <div style="margin-top: 6px; font-size: 1.05rem; color: #1e3a8a;">$$S = pr \\implies r = \\dfrac{S}{p}$$</div>
                </div>
              </div>

              <!-- Công thức Heron nổi bật -->
              <div style="background: #f0fdf4; border: 2px solid #16a34a; border-radius: 8px; padding: 14px; text-align: center; margin-top: 10px;">
                <h4 style="margin: 0 0 6px 0; color: #15803d;"><i class="fa-solid fa-crown"></i> (5) CÔNG THỨC HERON (HÊ-RÔNG):</h4>
                <div style="font-size: 1.3rem; color: #166534; font-weight: bold;">
                  $$S = \\sqrt{p(p - a)(p - b)(p - c)}$$
                </div>
                <p style="margin: 6px 0 0 0; font-size: 0.9rem; color: #166534;"><em>Dùng cực kì hiệu quả khi biết độ dài cả 3 cạnh của tam giác!</em></p>
              </div>
            </div>

            <!-- TikZ SVG: Hình 3.13 & 3.16 SGK -->
            <div class="tikz-svg-card" style="margin: 16px 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
              <div class="tikz-svg-title" style="font-weight: 700; color: #1e3a8a; margin-bottom: 12px; text-align: center;">
                <i class="fa-solid fa-circle-dot"></i> [Đồ họa TikZ - Hình 3.13 & 3.16 SGK]: Đường tròn nội tiếp và tam giác (13, 14, 15)
              </div>
              <div style="text-align: center;">
                <svg width="460" height="230" viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
                  <!-- Tam giác ABC với 3 cạnh a=14, b=15, c=13 -->
                  <!-- Đỉnh A(310, 190), B(200, 30), C(70, 190) -->
                  <polygon points="200,30 70,190 350,190" fill="#f8fafc" stroke="#0284c7" stroke-width="2.5"/>
                  <circle cx="200" cy="30" r="5" fill="#0284c7"/>
                  <text x="195" y="20" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" fill="#0284c7">B</text>

                  <circle cx="70" cy="190" r="5" fill="#0284c7"/>
                  <text x="50" y="195" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" fill="#0284c7">C</text>

                  <circle cx="350" cy="190" r="5" fill="#0284c7"/>
                  <text x="360" y="195" font-family="'Times New Roman', serif" font-size="16" font-weight="bold" fill="#0284c7">A</text>

                  <!-- Độ dài các cạnh -->
                  <text x="110" y="105" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#dc2626">a = 13 (BC)</text>
                  <text x="290" y="105" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#dc2626">c = 15 (AB)</text>
                  <text x="200" y="210" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" fill="#dc2626">b = 14 (AC)</text>

                  <!-- Đường tròn nội tiếp tâm I bán kính r = 4 (tọa độ tâm khoảng 200, 142) -->
                  <circle cx="200" cy="142" r="48" fill="none" stroke="#16a34a" stroke-width="2"/>
                  <circle cx="200" cy="142" r="4" fill="#16a34a"/>
                  <text x="205" y="145" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#16a34a">I</text>

                  <!-- Bán kính r hạ vuông góc xuống cạnh đáy AC -->
                  <line x1="200" y1="142" x2="200" y2="190" stroke="#16a34a" stroke-width="2" stroke-dasharray="3,3"/>
                  <polyline points="200,182 208,182 208,190" fill="none" stroke="#16a34a" stroke-width="1.2"/>
                  <text x="205" y="170" font-family="'Times New Roman', serif" font-size="13" font-style="italic" fill="#16a34a">r = 4</text>
                </svg>
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 6 (SGK Trang 42): Bài toán tam giác kinh điển (13, 14, 15)",
            problem: "Cho tam giác $ABC$ có độ dài ba cạnh là $a = 13, b = 14, c = 15$. Tính diện tích $S$, bán kính ngoại tiếp $R$, bán kính nội tiếp $r$ và chiều cao $h_a$ của tam giác.",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <p>1. Tính nửa chu vi $p$:</p>
              <p>$$p = \\dfrac{a + b + c}{2} = \\dfrac{13 + 14 + 15}{2} = \\dfrac{42}{2} = 21.$$</p>
              <p>2. Áp dụng công thức Heron tính diện tích $S$:</p>
              <div style="margin: 8px 0; color: #166534; font-weight: bold;">
                $$S = \\sqrt{p(p - a)(p - b)(p - c)} = \\sqrt{21(21 - 13)(21 - 14)(21 - 15)}$$
                $$= \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = \\sqrt{7056} = 84.$$
              </div>
              <p>3. Tính chiều cao $h_a$ ứng với cạnh $a = 13$:</p>
              <p>$$S = \\dfrac{1}{2}ah_a \\implies h_a = \\dfrac{2S}{a} = \\dfrac{2 \\cdot 84}{13} = \\dfrac{168}{13} \\approx 12{,}92.$$</p>
              <p>4. Tính bán kính ngoại tiếp $R$ và nội tiếp $r$:</p>
              <div style="margin: 8px 0; color: #0284c7; font-weight: bold;">
                $$R = \\dfrac{abc}{4S} = \\dfrac{13 \\cdot 14 \\cdot 15}{4 \\cdot 84} = \\dfrac{2730}{336} = \\dfrac{65}{8} = 8{,}125.$$
                $$r = \\dfrac{S}{p} = \\dfrac{84}{21} = 4.$$
              </div>
            `,
            similarProblem: `
              <p><strong>Bài tập tương tự:</strong> Cho tam giác có 3 cạnh $a = 7, b = 8, c = 9$. Tính diện tích tam giác và bán kính nội tiếp $r$.</p>
              <p><strong>Hướng dẫn:</strong> $p = 12$. $S = \\sqrt{12(12-7)(12-8)(12-9)} = \\sqrt{12 \\cdot 5 \\cdot 4 \\cdot 3} = \\sqrt{720} = 12\\sqrt{5} \\approx 26{,}83$. Bán kính $r = \\dfrac{S}{p} = \\dfrac{12\\sqrt{5}}{12} = \\sqrt{5}$.</p>
            `
          }
        }
      ]
    }
  ],

  // =========================================================================
  // PHẦN IV. CHỐT BÀI HỌC & THÔNG ĐIỆP SƯ PHẠM
  // =========================================================================
  realworldWrapup: {
    title: "PHẦN IV. CHỐT BÀI HỌC & THÔNG ĐIỆP SƯ PHẠM",
    recap: "Hệ thức lượng trong tam giác là kho báu hình học kết nối các cạnh, các góc và diện tích của mọi tam giác trong vũ trụ. Nắm vững Định lí Côsin, Định lí Sin và Công thức Heron, các em có trong tay chiếc chìa khóa vạn năng để đo đạc và kiến thiết thế giới.",
    formula: "a^2 = b^2 + c^2 - 2bc \\cos A, \\quad \\dfrac{a}{\\sin A} = 2R, \\quad S = \\sqrt{p(p-a)(p-b)(p-c)} = pr = \\dfrac{abc}{4R}",
    solution: `
      <div style="background: #f0fdf4; border: 1.5px solid #16a34a; border-radius: 12px; padding: 18px; margin: 12px 0;">
        <h4 style="margin: 0 0 10px 0; color: #15803d;"><i class="fa-solid fa-graduation-cap"></i> KIM CHỈ NAM BÀI HỌC TỪ THẦY SÁNG:</h4>
        <ol style="margin: 0; padding-left: 20px; line-height: 1.8;">
          <li><strong>Biết 2 cạnh và 1 góc xen giữa:</strong> Dùng <em>Định lí Côsin</em> tính cạnh còn lại: $a^2 = b^2 + c^2 - 2bc \\cos A$.</li>
          <li><strong>Biết 3 cạnh muốn tính góc:</strong> Dùng <em>Hệ quả côsin</em>: $\\cos A = \\dfrac{b^2 + c^2 - a^2}{2bc}$.</li>
          <li><strong>Biết 1 cạnh và 2 góc, hoặc bài toán liên quan đến $R$:</strong> Dùng <em>Định lí Sin</em>: $\\dfrac{a}{\\sin A} = 2R$.</li>
          <li><strong>Tính diện tích khi biết 3 cạnh:</strong> Dùng <em>Công thức Heron</em>: $S = \\sqrt{p(p-a)(p-b)(p-c)}$.</li>
          <li><strong>Tính các bán kính:</strong> $R = \\dfrac{abc}{4S}$ và $r = \\dfrac{S}{p}$.</li>
        </ol>
      </div>
    `,
    audioScript: "Hệ thức lượng trong tam giác là kho báu hình học kết nối các cạnh, các góc và diện tích của mọi tam giác trong vũ trụ. Nắm vững Định lí Côsin, Định lí Sin và Công thức Hê-rông, các em có trong tay chiếc chìa khóa vạn năng để đo đạc và kiến thiết thế giới. Hãy cùng Thầy luyện tập ngay các câu hỏi trắc nghiệm ở phần 5 nhé!",
    audioUrl: "assets/audio/b10_6_wrapup.mp3",
    buttonLabel: "Nghe Thầy Sáng dặn dò"
  },

  // =========================================================================
  // PHẦN V. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN BỘ GD&ĐT 2025)
  // HOÁN VỊ ĐÁP ÁN A, B, C, D ĐA DẠNG
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN V. BÀI TẬP TRẮC NGHIỆM CỦNG CỐ KIẾN THỨC",

    // DẠNG 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (4 LỰA CHỌN - HOÁN VỊ ĐÁP ÁN)
    part1MultipleChoice: [
      {
        id: "mc-10-6-1",
        num: 1,
        prompt: "Câu 1: Cho tam giác $ABC$ có cạnh $b = 6, c = 8$ và góc $\\widehat{A} = 60^\\circ$. Độ dài cạnh $a$ bằng:",
        options: [
          "$a = 2\\sqrt{37}$",
          "$a = 10$",
          "$a = 2\\sqrt{13}$",
          "$a = 52$"
        ],
        correctIndex: 2, // Đáp án C
        solution: "Áp dụng định lí côsin: $a^2 = b^2 + c^2 - 2bc \\cos A = 6^2 + 8^2 - 2 \\cdot 6 \\cdot 8 \\cdot \\cos 60^\\circ = 36 + 64 - 48 = 52$.<br>Do đó $a = \\sqrt{52} = 2\\sqrt{13}$. Chọn C.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Cho tam giác có b = 3, c = 4 và góc A = 60°. Độ dài a là:",
          options: [
            "$\\sqrt{13}$",
            "$5$",
            "$\\sqrt{37}$",
            "$\\sqrt{7}$"
          ],
          correctIndex: 0, // Đáp án A
          solution: "a^2 = 9 + 16 - 2*3*4*(1/2) = 25 - 12 = 13 -> a = sqrt(13). Chọn A."
        }
      },
      {
        id: "mc-10-6-2",
        num: 2,
        prompt: "Câu 2: Trong tam giác $ABC$, khẳng định nào sau đây là <strong>đúng</strong>?",
        options: [
          "$\\dfrac{a}{\\sin A} = 2R$",
          "$\\dfrac{a}{\\sin A} = R$",
          "$\\dfrac{a}{\\sin A} = 4R$",
          "$\\dfrac{a}{\\sin A} = \\dfrac{R}{2}$"
        ],
        correctIndex: 0, // Đáp án A
        solution: "Theo định lí sin chuẩn SGK: $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C} = 2R$ (với $R$ là bán kính đường tròn ngoại tiếp). Chọn A.",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Bán kính đường tròn ngoại tiếp R tính theo cạnh c và góc C là:",
          options: [
            "$R = \\dfrac{c}{\\sin C}$",
            "$R = \\dfrac{c}{2\\sin C}$",
            "$R = 2c\\sin C$",
            "$R = \\dfrac{2c}{\\sin C}$"
          ],
          correctIndex: 1, // Đáp án B
          solution: "2R = c / sin C -> R = c / (2 sin C). Chọn B."
        }
      },
      {
        id: "mc-10-6-3",
        num: 3,
        prompt: "Câu 3: Tam giác $ABC$ có ba cạnh $a = 5, b = 6, c = 7$. Diện tích $S$ của tam giác này bằng:",
        options: [
          "$S = 6\\sqrt{3}$",
          "$S = 12\\sqrt{3}$",
          "$S = 18$",
          "$S = 6\\sqrt{6}$"
        ],
        correctIndex: 3, // Đáp án D
        solution: "Nửa chu vi $p = \\dfrac{5 + 6 + 7}{2} = 9$.<br>Theo công thức Heron: $S = \\sqrt{p(p-a)(p-b)(p-c)} = \\sqrt{9(9-5)(9-6)(9-7)} = \\sqrt{9 \\cdot 4 \\cdot 3 \\cdot 2} = \\sqrt{216} = 6\\sqrt{6}$. Chọn D.",
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Cho tam giác có 3 cạnh là 4, 5, 7. Nửa chu vi p bằng:",
          options: [
            "$p = 8$",
            "$p = 16$",
            "$p = 7$",
            "$p = 9$"
          ],
          correctIndex: 0, // Đáp án A
          solution: "p = (4 + 5 + 7)/2 = 16/2 = 8. Chọn A."
        }
      },
      {
        id: "mc-10-6-4",
        num: 4,
        prompt: "Câu 4: Cho tam giác $ABC$ có diện tích $S = 84$ và nửa chu vi $p = 21$. Bán kính đường tròn nội tiếp $r$ của tam giác bằng:",
        options: [
          "$r = 2$",
          "$r = 4$",
          "$r = 6$",
          "$r = 8$"
        ],
        correctIndex: 1, // Đáp án B
        solution: "Áp dụng công thức $S = pr \\implies r = \\dfrac{S}{p} = \\dfrac{84}{21} = 4$. Chọn B.",
        similarVariation: {
          prompt: "Câu 4 (Tương tự): Cho tam giác có S = 60 và r = 3. Nửa chu vi p bằng:",
          options: [
            "$p = 15$",
            "$p = 180$",
            "$p = 20$",
            "$p = 30$"
          ],
          correctIndex: 2, // Đáp án C
          solution: "p = S / r = 60 / 3 = 20. Chọn C."
        }
      },
      {
        id: "mc-10-6-5",
        num: 5,
        prompt: "Câu 5: Cho tam giác $ABC$ có $b = 10, c = 12$ và góc $\\widehat{A} = 150^\\circ$. Diện tích của tam giác $ABC$ bằng:",
        options: [
          "$S = 60$",
          "$S = 30\\sqrt{3}$",
          "$S = 30$",
          "$S = 60\\sqrt{3}$"
        ],
        correctIndex: 2, // Đáp án C
        solution: "Ta có: $S = \\dfrac{1}{2}bc \\sin A = \\dfrac{1}{2} \\cdot 10 \\cdot 12 \\cdot \\sin 150^\\circ = 60 \\cdot \\dfrac{1}{2} = 30$. Chọn C.",
        similarVariation: {
          prompt: "Câu 5 (Tương tự): Cho b = 4, c = 6 và góc A = 30°. Diện tích S là:",
          options: [
            "$S = 12$",
            "$S = 6$",
            "$S = 6\\sqrt{3}$",
            "$S = 3$"
          ],
          correctIndex: 1, // Đáp án B
          solution: "S = 1/2 * 4 * 6 * sin 30° = 12 * 0.5 = 6. Chọn B."
        }
      }
    ],

    // DẠNG 2: TRẮC NGHIỆM ĐÚNG / SAI (4 Ý MỖI CÂU)
    part2TrueFalse: [
      {
        id: "tf-10-6-1",
        num: 1,
        prompt: "Câu 1: Cho tam giác $ABC$ có độ dài ba cạnh là $a = 7, b = 8, c = 5$. Xét tính Đúng / Sai của các khẳng định sau:",
        items: [
          {
            id: "a",
            text: "Góc $\\widehat{A}$ của tam giác $ABC$ bằng $60^\\circ$.",
            isCorrect: true,
            explain: "Đúng vì $\\cos A = \\dfrac{b^2 + c^2 - a^2}{2bc} = \\dfrac{8^2 + 5^2 - 7^2}{2 \\cdot 8 \\cdot 5} = \\dfrac{64 + 25 - 49}{80} = \\dfrac{40}{80} = \\dfrac{1}{2} \\implies \\widehat{A} = 60^\\circ$."
          },
          {
            id: "b",
            text: "Diện tích của tam giác $ABC$ bằng $10\\sqrt{3}$.",
            isCorrect: true,
            explain: "Đúng vì $S = \\dfrac{1}{2}bc \\sin A = \\dfrac{1}{2} \\cdot 8 \\cdot 5 \\cdot \\sin 60^\\circ = 20 \\cdot \\dfrac{\\sqrt{3}}{2} = 10\\sqrt{3}$."
          },
          {
            id: "c",
            text: "Bán kính đường tròn ngoại tiếp $R = \\dfrac{7\\sqrt{3}}{3}$.",
            isCorrect: true,
            explain: "Đúng vì theo định lí sin: $2R = \\dfrac{a}{\\sin A} = \\dfrac{7}{\\sin 60^\\circ} = \\dfrac{7}{\\sqrt{3}/2} = \\dfrac{14}{\\sqrt{3}} \\implies R = \\dfrac{7}{\\sqrt{3}} = \\dfrac{7\\sqrt{3}}{3}$."
          },
          {
            id: "d",
            text: "Độ dài đường trung tuyến $m_a$ kẻ từ đỉnh $A$ bằng $\\sqrt{38}$.",
            isCorrect: false,
            explain: "Sai vì $m_a^2 = \\dfrac{2(b^2 + c^2) - a^2}{4} = \\dfrac{2(64 + 25) - 49}{4} = \\dfrac{2(89) - 49}{4} = \\dfrac{178 - 49}{4} = \\dfrac{129}{4} \\implies m_a = \\dfrac{\\sqrt{129}}{2} \\approx 5{,}68 \\ne \\sqrt{38}$."
          }
        ]
      },
      {
        id: "tf-10-6-2",
        num: 2,
        prompt: "Câu 2: Xét tính Đúng / Sai của các hệ thức lượng sau đối với tam giác $ABC$ bất kì:",
        items: [
          {
            id: "a",
            text: "Nếu $a^2 < b^2 + c^2$ thì tam giác $ABC$ có góc $\\widehat{A}$ là góc nhọn.",
            isCorrect: true,
            explain: "Đúng vì $\\cos A = \\dfrac{b^2 + c^2 - a^2}{2bc} > 0 \\implies 0^\\circ < \\widehat{A} < 90^\\circ$."
          },
          {
            id: "b",
            text: "Hệ thức $S = \\dfrac{abc}{4r}$ là đúng.",
            isCorrect: false,
            explain: "Sai vì đúng phải là $S = \\dfrac{abc}{4R}$ ($R$ là bán kính ngoại tiếp, không phải $r$ nội tiếp)."
          },
          {
            id: "c",
            text: "Nếu $\\dfrac{a}{\\cos A} = \\dfrac{b}{\\cos B}$ thì tam giác $ABC$ cân tại $C$.",
            isCorrect: true,
            explain: "Đúng vì theo định lí sin $a = 2R\\sin A, b = 2R\\sin B$, ta có $\\tan A = \\tan B \\implies \\widehat{A} = \\widehat{B} \\implies \\triangle ABC$ cân tại $C$."
          },
          {
            id: "d",
            text: "Đường cao $h_a$ liên hệ với bán kính $R$ theo công thức $h_a = \\dfrac{bc}{2R}$.",
            isCorrect: true,
            explain: "Đúng vì $S = \\dfrac{1}{2}ah_a = \\dfrac{abc}{4R} \\implies h_a = \\dfrac{bc}{2R}$."
          }
        ]
      }
    ],

    // DẠNG 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (ĐIỀN ĐÁP SỐ)
    part3ShortAnswer: [
      {
        id: "sa-10-6-1",
        num: 1,
        prompt: "Câu 1: Cho tam giác $ABC$ có $AB = 4, AC = 6$ và đường trung tuyến $AM = 3$. Tính độ dài cạnh $BC$ (làm tròn đến hàng phần mười).",
        correctAnswer: "8.2",
        acceptedAnswers: ["8.2", "8,2", "sqrt(68)", "2*sqrt(17)", "8.25"],
        unit: "",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Áp dụng công thức độ dài đường trung tuyến:<br>$$m_a^2 = \\dfrac{2(b^2 + c^2) - a^2}{4} \\iff 3^2 = \\dfrac{2(6^2 + 4^2) - a^2}{4}$$<br>$$9 = \\dfrac{2(36 + 16) - a^2}{4} \\iff 36 = 2(52) - a^2 \\iff 36 = 104 - a^2$$<br>$$a^2 = 104 - 36 = 68 \\implies a = BC = \\sqrt{68} = 2\\sqrt{17} \\approx 8{,}25 \\approx 8{,}2.$$<br>Đáp số: <strong>8,2</strong>.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Cho tam giác có b = 5, c = 7, ma = 4. Tính cạnh a.",
          correctAnswer: "10",
          acceptedAnswers: ["10"],
          explain: "16 = (2(25 + 49) - a^2)/4 -> 64 = 148 - a^2 -> a^2 = 84 -> a = sqrt(84)."
        }
      },
      {
        id: "sa-10-6-2",
        num: 2,
        prompt: "Câu 2: Hai tàu thủy xuất phát từ cùng một cảng $A$ đi theo hai hướng tạo với nhau một góc $60^\\circ$. Tàu thứ nhất chạy với vận tốc $30\\text{ km/h}$, tàu thứ hai chạy với vận tốc $40\\text{ km/h}$. Hỏi sau $2\\text{ giờ}$, khoảng cách giữa hai tàu là bao nhiêu kilômét?",
        correctAnswer: "72.1",
        acceptedAnswers: ["72.1", "72,1", "20*sqrt(13)", "72"],
        unit: "km",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Sau 2 giờ:<br>• Tàu 1 đi được quãng đường: $b = AB = 30 \\times 2 = 60\\text{ km}$.<br>• Tàu 2 đi được quãng đường: $c = AC = 40 \\times 2 = 80\\text{ km}$.<br>• Góc giữa hai hướng đi là $\\widehat{BAC} = 60^\\circ$.<br>Khoảng cách giữa hai tàu là cạnh $BC = a$ trong tam giác $ABC$.<br>Áp dụng định lí côsin:<br>$$BC^2 = AB^2 + AC^2 - 2AB \\cdot AC \\cdot \\cos 60^\\circ$$<br>$$= 60^2 + 80^2 - 2 \\cdot 60 \\cdot 80 \\cdot 0{,}5 = 3600 + 6400 - 4800 = 5200.$$<br>$$BC = \\sqrt{5200} = 20\\sqrt{13} \\approx 72{,}11\\text{ km}.$$<br>Đáp số: <strong>72,1 km</strong>.",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Nếu 2 tàu đi sau 1 giờ với vận tốc 30 km/h và 40 km/h thì khoảng cách là:",
          correctAnswer: "36.1",
          acceptedAnswers: ["36.1", "36,1", "10*sqrt(13)"],
          explain: "BC = sqrt(30^2 + 40^2 - 2*30*40*0.5) = sqrt(2500 - 1200) = sqrt(1300) = 10*sqrt(13) ≈ 36.1 km."
        }
      }
    ]
  }
};

// Đồng bộ biến toàn cục tương thích
if (typeof window !== "undefined") {
  window.LESSON_10_C3_B6_DATA = LESSON_10_C3_B6_DATA;
  window.LESSON_10_6_DATA = LESSON_10_C3_B6_DATA;
  if (typeof autoInjectLesson === "function") {
    autoInjectLesson(LESSON_10_C3_B6_DATA);
  }
}
'''

with open('js/lesson-10-6-data.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("Created js/lesson-10-6-data.js successfully!")
