/**
 * BÀI HỌC SỐ: BÀI 1. MỆNH ĐỀ (TOÁN 10 - TẬP 1 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Tác giả biên soạn: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - PHẦN I: Lời chào Thầy Sáng + Voice AI NamMinhNeural chuẩn mực (5% tiến trình)
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 5 (5% tiến trình)
 * - PHẦN III: Tiến trình bài học đa phương tiện tương tác (70% tiến trình):
 *             + Tình huống mở đầu: Đố vui đếm con vật trong tranh (Hình SGK trang 5)
 *             + Mục 1: Mệnh đề, mệnh đề chứa biến (Mục con: a. Mệnh đề [có Bảng Luyện tập 1 SGK trang 6]; b. Mệnh đề chứa biến)
 *             + Mục 2: Mệnh đề phủ định (Không có mục con - Đồ họa biển báo người đi bộ SVG)
 *             + Mục 3: Mệnh đề kéo theo, mệnh đề đảo (Mục con: a. Mệnh đề kéo theo; b. Mệnh đề đảo)
 *             + Mục 4: Mệnh đề tương đương (Không có mục con)
 *             + Mục 5: Mệnh đề có chứa kí hiệu với mọi (\forall) và tồn tại (\exists) (Không có mục con)
 *             + Chốt kiến thức: Lịch sử logic Aristotle, George Boole & Mẹo của Thầy Sáng
 * - PHẦN IV: Bài tập trắc nghiệm củng cố tương tác chuẩn 3 dạng thức thi mới 2025 Bộ GD&ĐT (20% tiến trình):
 *             + Dạng 1: 5 câu trắc nghiệm nhiều lựa chọn (Hoán vị đáp án chuẩn B, D, A, C, B)
 *             + Dạng 2: 3 câu trắc nghiệm Đúng/Sai (Mỗi câu đủ 4 ý a, b, c, d)
 *             + Dạng 3: 2 câu trắc nghiệm Trả lời ngắn thực tế
 */

window.LESSON_10_C1_B1_DATA = {
  id: "10-c1-b1",
  grade: "10",
  gradeLabel: "Lớp 10",
  chapterId: "c10-1",
  chapter: "Chương I",
  chapterTitle: "Mệnh đề và tập hợp",
  number: "Bài 1",
  title: "Mệnh đề",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào toàn thể các em học sinh lớp 10 thân yêu! Chào mừng các em bước vào chương trình Toán Trung học phổ thông với Chương 1: Mệnh đề và Tập hợp. Bài học đầu tiên hôm nay, Thầy trò mình sẽ cùng khám phá 'Mệnh đề' – nền tảng tư duy logic cốt lõi của toán học và khoa học máy tính hiện đại. Từ những câu nói khẳng định đúng sai giản dị hàng ngày đến các suy luận logic phức tạp, mệnh đề sẽ giúp các em rèn luyện tư duy chặt chẽ, chính xác và sắc bén. Thầy chúc các em có một buổi học thật hào hứng và tiếp thu trọn vẹn kiến thức!",
    audioScript: "Thầy Sáng chào toàn thể các em học sinh lớp 10 thân yêu! Chào mừng các em bước vào chương trình Toán Trung học phổ thông với Chương 1: Mệnh đề và Tập hợp. Bài học đầu tiên hôm nay, Thầy trò mình sẽ cùng khám phá Mệnh đề – nền tảng tư duy logic cốt lõi của toán học và khoa học máy tính hiện đại. Từ những câu nói khẳng định đúng sai giản dị hàng ngày đến các suy luận logic phức tạp, mệnh đề sẽ giúp các em rèn luyện tư duy chặt chẽ, chính xác và sắc bén. Thầy chúc các em có một buổi học thật hào hứng và tiếp thu trọn vẹn kiến thức!",
    audioUrl: "assets/audio/b10_1_welcome.mp3",
    buttonLabel: "Nghe thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 5)
  // =========================================================================
  learningGoals: [
    "Nhận biết và phân biệt được mệnh đề logic, mệnh đề đúng, mệnh đề sai và mệnh đề chứa biến.",
    "Thiết lập và phát biểu được mệnh đề phủ định, mệnh đề kéo theo, mệnh đề đảo và mệnh đề tương đương.",
    "Hiểu và sử dụng thành thạo các thuật ngữ điều kiện cần, điều kiện đủ, điều kiện cần và đủ trong các định lí toán học.",
    "Biết cách thiết lập, phát biểu và xét tính đúng sai của các mệnh đề có chứa kí hiệu với mọi ($\\forall$) và tồn tại ($\\exists$)."
  ],
  goalsAudioUrl: "assets/audio/b10_1_goals.mp3",
  goalsAudioScript: "Phần 2. Mục tiêu và yêu cầu cần đạt của bài học. Sau bài học này, các em cần đạt được các yêu cầu trọng tâm sau đây: Thứ nhất: Nhận biết và phân biệt được mệnh đề logic, mệnh đề đúng, mệnh đề sai và mệnh đề chứa biến. Thứ hai: Thiết lập và phát biểu được mệnh đề phủ định, mệnh đề kéo theo, mệnh đề đảo và mệnh đề tương đương. Thứ ba: Hiểu và sử dụng thành thạo các thuật ngữ điều kiện cần, điều kiện đủ, điều kiện cần và đủ trong các định lí toán học. Thứ tư: Biết cách thiết lập, phát biểu và xét tính đúng sai của các mệnh đề có chứa kí hiệu với mọi và tồn tại.",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================

  // --- TÌNH HUỐNG MỞ ĐẦU (HOOK) ---
  hook: {
    title: "Tình huống mở đầu: Đố vui đếm con vật trong tranh",
    context: "Trong một buổi sinh hoạt ngoại khóa toán học, bạn An và bạn Khoa cùng quan sát một bức tranh vẽ nghệ thuật đố vui đánh lừa thị giác lồng ghép các con vật:",
    problemHtml: `
      <div style="background: #f8fafc; border-left: 4px solid #0284c7; padding: 14px 18px; border-radius: 8px; margin-bottom: 15px;">
        <p style="margin-bottom: 8px;"><strong>Tình huống mở đầu (SGK trang 5):</strong></p>
        <p>Bức tranh chứa hình bóng của nhiều con vật lồng vào nhau (voi, ngựa, chó, mèo, chuột). Hai bạn đưa ra hai phát biểu:</p>
        <ul>
          <li><strong>Bạn An khẳng định:</strong> <em>"Có 5 con vật xuất hiện trong hình vẽ."</em></li>
          <li><strong>Bạn Khoa khẳng định:</strong> <em>"Có 6 con vật xuất hiện trong hình vẽ."</em></li>
        </ul>
        <p style="margin-top: 8px; color: #0369a1; font-weight: 600;">
          <i class="fa-solid fa-circle-question"></i> Câu hỏi đặt ra: Trong hai câu khẳng định của An và Khoa, câu nào đúng, câu nào sai? Điều cốt lõi là: mỗi câu nói trên dứt khoát chỉ có thể hoặc đúng, hoặc sai. Những khẳng định như vậy trong toán học được gọi là gì?
        </p>
      </div>

      <!-- ĐỒ HỌA VECTOR TIKZ/SVG MINH HỌA TÌNH HUỐNG MỞ ĐẦU -->
      <div style="text-align: center; margin: 20px 0;">
        <svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <!-- Khung cảnh nền -->
          <rect x="10" y="10" width="740" height="280" rx="10" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
          
          <!-- Tranh vẽ con vật ở giữa -->
          <g transform="translate(230, 25)">
            <rect x="0" y="0" width="300" height="250" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
            <text x="150" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="#0369a1">BỨC TRANH NGHỆ THUẬT ĐỐ VUI</text>
            
            <!-- Hình khối trừu tượng đại diện cho các con vật lồng nhau -->
            <!-- Con voi (khối lớn) -->
            <path d="M 50,190 C 40,140 70,80 130,80 C 180,80 230,100 240,150 C 245,170 235,210 220,210 L 210,170 L 190,170 L 180,210 L 140,210 L 140,170 L 120,170 L 110,210 Z" fill="#94a3b8" opacity="0.65" stroke="#475569" stroke-width="2"/>
            <!-- Con ngựa (lồng bên trong) -->
            <path d="M 120,170 C 110,130 130,110 160,110 C 180,110 200,130 195,165 C 190,180 170,185 150,185 Z" fill="#38bdf8" opacity="0.7" stroke="#0284c7" stroke-width="1.8"/>
            <!-- Con chó -->
            <path d="M 70,180 C 65,155 80,140 100,140 C 115,140 120,160 115,180 Z" fill="#fbbf24" opacity="0.8" stroke="#d97706" stroke-width="1.5"/>
            <!-- Con mèo -->
            <path d="M 160,185 C 155,165 170,155 185,155 C 195,155 198,170 190,185 Z" fill="#34d399" opacity="0.85" stroke="#059669" stroke-width="1.5"/>
            <!-- Con chuột (nhỏ nhất) -->
            <ellipse cx="95" cy="188" rx="14" ry="8" fill="#f43f5e" opacity="0.85" stroke="#e11d48" stroke-width="1.2"/>
            
            <text x="150" y="238" text-anchor="middle" font-size="12" font-style="italic" fill="#64748b">Hình ảnh lồng ghép: Voi, Ngựa, Chó, Mèo, Chuột...</text>
          </g>

          <!-- Bạn An (bên trái) -->
          <g transform="translate(30, 60)">
            <circle cx="80" cy="50" r="30" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
            <!-- Tóc & khuôn mặt An -->
            <path d="M 55,45 Q 80,20 105,45 Q 105,65 55,65 Z" fill="#7c2d12"/>
            <circle cx="72" cy="48" r="3" fill="#1e293b"/>
            <circle cx="88" cy="48" r="3" fill="#1e293b"/>
            <path d="M 75,58 Q 80,63 85,58" stroke="#ea580c" stroke-width="2" fill="none"/>
            <rect x="50" y="85" width="60" height="90" rx="8" fill="#f97316"/>
            <text x="80" y="200" text-anchor="middle" font-size="14" font-weight="700" fill="#c2410c">Bạn An</text>
            
            <!-- Bong bóng lời thoại của An -->
            <path d="M 80,15 L 90,-10 L 160,-10 L 160,-40 L 40,-40 L 40,-10 L 70,-10 Z" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
            <text x="100" y="-22" text-anchor="middle" font-size="12" font-weight="700" fill="#c2410c">"Có 5 con vật"</text>
          </g>

          <!-- Bạn Khoa (bên phải) -->
          <g transform="translate(570, 60)">
            <circle cx="80" cy="50" r="30" fill="#fed7aa" stroke="#2563eb" stroke-width="2"/>
            <!-- Tóc & khuôn mặt Khoa -->
            <path d="M 52,42 Q 80,15 108,42 Q 108,35 52,35 Z" fill="#1e293b"/>
            <circle cx="72" cy="48" r="3" fill="#1e293b"/>
            <circle cx="88" cy="48" r="3" fill="#1e293b"/>
            <path d="M 75,58 Q 80,63 85,58" stroke="#2563eb" stroke-width="2" fill="none"/>
            <rect x="50" y="85" width="60" height="90" rx="8" fill="#2563eb"/>
            <text x="80" y="200" text-anchor="middle" font-size="14" font-weight="700" fill="#1d4ed8">Bạn Khoa</text>
            
            <!-- Bong bóng lời thoại của Khoa -->
            <path d="M 80,15 L 70,-10 L 0,-10 L 0,-40 L 120,-40 L 120,-10 L 90,-10 Z" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
            <text x="60" y="-22" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">"Có 6 con vật"</text>
          </g>
        </svg>
      </div>
    `,
    audioUrl: "assets/audio/b10_1_hook.mp3",
    audioScript: "Phần 3. Tiến trình bài học. Tình huống mở đầu. Các em hãy quan sát bức tranh vẽ nghệ thuật đố vui đếm con vật trong sách giáo khoa. Bạn An quan sát và khẳng định: Có 5 con vật xuất hiện trong hình vẽ. Bạn Khoa lại khẳng định: Có 6 con vật xuất hiện trong hình vẽ. Trong đời sống hàng ngày, chúng ta liên tục đưa ra những lời khẳng định. Điều thú vị là mỗi câu nói của An hay Khoa dứt khoát chỉ có thể hoặc là đúng, hoặc là sai. Những câu khẳng định có tính đúng sai rõ ràng như vậy chính là đối tượng nghiên cứu đầu tiên của chúng ta: Mệnh đề logic.",
    checkpoints: [
      {
        id: "poi-10-1-hook-1",
        time: 20,
        title: "Giây 20: Đặc điểm logic của lời khẳng định",
        question: "Trong hai câu khẳng định của An và Khoa, đặc điểm chung quan trọng nhất về mặt logic học là gì?",
        options: [
          "Cả hai câu khẳng định đều đúng cùng một lúc.",
          "Mỗi câu đều là một khẳng định dứt khoát hoặc đúng hoặc sai, không thể vừa đúng vừa sai.",
          "Cả hai câu đều là câu cảm thán bộc lộ cảm xúc cá nhân.",
          "Cả hai câu đều không thể xác định được tính đúng hay sai."
        ],
        correctIndex: 1, // B
        correctAnswer: "B",
        hint: "Một khẳng định mang tính đúng sai dứt khoát là cốt lõi của mệnh đề.",
        explain: "Chính xác! Lời nói của An và Khoa đều là những khẳng định có tính đúng hoặc sai rõ ràng. Trong toán học, mỗi câu khẳng định như vậy được gọi là một mệnh đề logic!"
      }
    ]
  },

  // =========================================================================
  // 5 MỤC NỘI DUNG BÀI HỌC THEO ĐÚNG YÊU CẦU CỦA THẦY SÁNG
  // =========================================================================
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1: MỆNH ĐỀ, MỆNH ĐỀ CHỨA BIẾN (Có 2 mục con: a và b)
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "Mệnh đề, mệnh đề chứa biến",
      audioUrl: "assets/audio/b10_1_sec1.mp3",
      audioScript: "Mục 1. Mệnh đề, mệnh đề chứa biến. Tiểu mục a. Mệnh đề. Trong toán học, mỗi mệnh đề phải hoặc đúng hoặc sai. Một mệnh đề không thể vừa đúng vừa sai. Ta thường dùng các chữ cái in hoa như P, Q, R để biểu thị các mệnh đề. Lưu ý rằng những câu hỏi nghi vấn, câu cảm thán hay câu cầu khiến không phải là mệnh đề vì chúng không xác định được tính đúng sai. Trong Luyện tập 1, câu 13 là số nguyên tố là mệnh đề đúng. Câu tổng độ dài hai cạnh bất kì của một tam giác nhỏ hơn cạnh còn lại là mệnh đề sai. Hai câu Bạn đã làm bài tập chưa và Thời tiết hôm nay thật đẹp không phải là mệnh đề. Tiểu mục b. Mệnh đề chứa biến. Xét câu n chia hết cho 2. Khi chưa biết giá trị cụ thể của n, ta chưa thể khẳng định câu này đúng hay sai, do đó nó chưa phải là mệnh đề. Nhưng khi thay n bằng một số cụ thể, chẳng hạn n bằng 5 thì được mệnh đề sai, n bằng 10 thì được mệnh đề đúng. Câu như vậy gọi là mệnh đề chứa biến.",
      buttonLabel: "Nghe thầy Sáng giảng Mục 1",
      checkpoints: [
        {
          id: "poi-10-1-sec1-1",
          time: 16,
          title: "Giây 16: Khái niệm mệnh đề logic",
          question: "Một câu như thế nào được gọi là một mệnh đề trong toán học?",
          options: [
            "Là một câu hỏi có câu trả lời rõ ràng.",
            "Là một câu khẳng định có tính hoặc đúng hoặc sai, không thể vừa đúng vừa sai.",
            "Là một câu cảm thán thể hiện cảm xúc của người nói.",
            "Là một câu mệnh lệnh yêu cầu người khác thực hiện hành động."
          ],
          correctIndex: 1, // B
          correctAnswer: "B",
          hint: "Mỗi mệnh đề phải hoặc đúng hoặc sai dứt khoát.",
          explain: "Rất xuất sắc! Mỗi mệnh đề toán học phải hoặc đúng hoặc sai, một mệnh đề không thể vừa đúng vừa sai."
        },
        {
          id: "poi-10-1-sec1-2",
          time: 32,
          title: "Giây 32: Nhận biết câu không phải mệnh đề",
          question: "Trong các câu sau, câu nào KHÔNG PHẢI là một mệnh đề?",
          options: [
            "Số 12 là số chia hết cho 3.",
            "Thủ đô của Việt Nam là Hà Nội.",
            "Thời tiết hôm nay thật là tuyệt vời!",
            "Tam giác đều có ba góc bằng 60 độ."
          ],
          correctIndex: 2, // C
          correctAnswer: "C",
          hint: "Câu cảm thán nêu ý kiến cá nhân không xác định được tính đúng sai.",
          explain: "Chính xác! Câu 'Thời tiết hôm nay thật là tuyệt vời!' là câu cảm thán nêu cảm xúc chủ quan, không xác định được đúng sai nên không phải là mệnh đề."
        }
      ],
      subsections: [
        // --- 1a. MỆNH ĐỀ ---
        {
          key: "a",
          title: "Mệnh đề",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 16px 20px; border-radius: 8px; margin-bottom: 16px;">
              <div class="sgk-box-tag" style="color: #15803d; font-weight: 700; margin-bottom: 8px;">
                <i class="fa-solid fa-bookmark"></i> [Khái niệm Mệnh đề SGK Trang 6]:
              </div>
              <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: #166534;">
                <li>Những khẳng định có tính đúng hoặc sai được gọi là một <strong>mệnh đề lôgic</strong> (gọi tắt là <strong>mệnh đề</strong>).</li>
                <li><strong>Mỗi mệnh đề phải hoặc đúng hoặc sai.</strong></li>
                <li><strong>Một mệnh đề không thể vừa đúng vừa sai.</strong></li>
                <li>Người ta thường dùng các chữ cái in hoa $P, Q, R, \\dots$ để biểu thị các mệnh đề.</li>
                <li><em>Ghi chú quan trọng:</em> Những câu nghi vấn (câu hỏi), câu cảm thán, câu cầu khiến <strong>không phải là mệnh đề</strong> vì không xác định được tính đúng sai.</li>
                <li>Những mệnh đề liên quan đến toán học được gọi là <strong>mệnh đề toán học</strong>.</li>
              </ul>
            </div>

            <!-- BẢNG LUYỆN TẬP 1 CHUẨN 100% SÁCH GIÁO KHOA TRANG 6 THEO YÊU CẦU THẦY SÁNG -->
            <div class="sgk-exercise-table-wrap" style="background: #ffffff; border: 2px solid #0284c7; border-radius: 12px; padding: 18px; margin: 20px 0; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.08);">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 14px;">
                <span style="background: #0284c7; color: #ffffff; font-weight: 700; padding: 6px 14px; border-radius: 6px; font-size: 0.95rem;">
                  <i class="fa-solid fa-table-list"></i> LUYỆN TẬP 1 (SGK TOÁN 10 TRANG 6)
                </span>
                <span style="font-size: 0.85rem; color: #64748b; font-style: italic;">
                  Yêu cầu: Thay dấu "?" bằng dấu tick "&#10003;" vào ô thích hợp trong bảng sau
                </span>
              </div>

              <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem;">
                  <thead>
                    <tr style="background: #e0f2fe; color: #0369a1; border-bottom: 2px solid #0284c7;">
                      <th style="padding: 12px 14px; text-align: left; border: 1px solid #cbd5e1; width: 46%;">Câu</th>
                      <th style="padding: 12px 14px; border: 1px solid #cbd5e1; width: 18%; background: #f1f5f9; color: #334155;">Không là mệnh đề</th>
                      <th style="padding: 12px 14px; border: 1px solid #cbd5e1; width: 18%; background: #dcfce7; color: #15803d;">Mệnh đề đúng</th>
                      <th style="padding: 12px 14px; border: 1px solid #cbd5e1; width: 18%; background: #fee2e2; color: #b91c1c;">Mệnh đề sai</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 12px 14px; text-align: left; border: 1px solid #cbd5e1; font-weight: 500;">
                        <strong>(1)</strong> $13$ là số nguyên tố.
                      </td>
                      <td style="padding: 12px; border: 1px solid #cbd5e1;">
                        <input type="radio" name="lt1_row_1" value="none" style="transform: scale(1.3); cursor: pointer;">
                      </td>
                      <td style="padding: 12px; border: 1px solid #cbd5e1; background: #f0fdf4;">
                        <input type="radio" name="lt1_row_1" value="true" style="transform: scale(1.3); cursor: pointer;">
                      </td>
                      <td style="padding: 12px; border: 1px solid #cbd5e1;">
                        <input type="radio" name="lt1_row_1" value="false" style="transform: scale(1.3); cursor: pointer;">
                      </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
                      <td style="padding: 12px 14px; text-align: left; border: 1px solid #cbd5e1; font-weight: 500;">
                        <strong>(2)</strong> Tổng độ dài hai cạnh bất kì của một tam giác nhỏ hơn độ dài cạnh còn lại.
                      </td>
                      <td style="padding: 12px; border: 1px solid #cbd5e1;">
                        <input type="radio" name="lt1_row_2" value="none" style="transform: scale(1.3); cursor: pointer;">
                      </td>
                      <td style="padding: 12px; border: 1px solid #cbd5e1;">
                        <input type="radio" name="lt1_row_2" value="true" style="transform: scale(1.3); cursor: pointer;">
                      </td>
                      <td style="padding: 12px; border: 1px solid #cbd5e1; background: #fef2f2;">
                        <input type="radio" name="lt1_row_2" value="false" style="transform: scale(1.3); cursor: pointer;">
                      </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 12px 14px; text-align: left; border: 1px solid #cbd5e1; font-weight: 500;">
                        <strong>(3)</strong> Bạn đã làm bài tập chưa?
                      </td>
                      <td style="padding: 12px; border: 1px solid #cbd5e1; background: #f8fafc;">
                        <input type="radio" name="lt1_row_3" value="none" style="transform: scale(1.3); cursor: pointer;">
                      </td>
                      <td style="padding: 12px; border: 1px solid #cbd5e1;">
                        <input type="radio" name="lt1_row_3" value="true" style="transform: scale(1.3); cursor: pointer;">
                      </td>
                      <td style="padding: 12px; border: 1px solid #cbd5e1;">
                        <input type="radio" name="lt1_row_3" value="false" style="transform: scale(1.3); cursor: pointer;">
                      </td>
                    </tr>
                    <tr style="background: #f8fafc;">
                      <td style="padding: 12px 14px; text-align: left; border: 1px solid #cbd5e1; font-weight: 500;">
                        <strong>(4)</strong> Thời tiết hôm nay thật đẹp!
                      </td>
                      <td style="padding: 12px; border: 1px solid #cbd5e1; background: #f8fafc;">
                        <input type="radio" name="lt1_row_4" value="none" style="transform: scale(1.3); cursor: pointer;">
                      </td>
                      <td style="padding: 12px; border: 1px solid #cbd5e1;">
                        <input type="radio" name="lt1_row_4" value="true" style="transform: scale(1.3); cursor: pointer;">
                      </td>
                      <td style="padding: 12px; border: 1px solid #cbd5e1;">
                        <input type="radio" name="lt1_row_4" value="false" style="transform: scale(1.3); cursor: pointer;">
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Nút kiểm tra kết quả bảng tương tác -->
              <div style="margin-top: 15px; text-align: right;">
                <button type="button" class="btn-check-table-lt1" onclick="var b=document.getElementById('lt1-feedback-box');if(b){b.style.display=(b.style.display==='none'?'block':'none');}" style="background: linear-gradient(135deg, #0284c7, #0369a1); color: #ffffff; border: none; border-radius: 8px; padding: 10px 22px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
                  <i class="fa-solid fa-clipboard-check"></i> Kiểm tra đáp án bảng Luyện tập 1
                </button>
              </div>

              <!-- Hộp thoại kết quả giải thích chi tiết Luyện tập 1 -->
              <div id="lt1-feedback-box" style="display: none; margin-top: 15px; background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 8px; padding: 14px 18px;">
                <div style="color: #15803d; font-weight: 700; margin-bottom: 8px;">
                  <i class="fa-solid fa-circle-check"></i> Lời giải chi tiết Luyện tập 1 của ThS. Lương Thanh Sáng:
                </div>
                <ul style="margin: 0; padding-left: 20px; color: #166534; line-height: 1.6;">
                  <li><strong>Câu (1):</strong> $13$ chỉ chia hết cho $1$ và chính nó, đây là một khẳng định đúng &rArr; <strong>Mệnh đề đúng</strong>.</li>
                  <li><strong>Câu (2):</strong> Theo bất đẳng thức tam giác, tổng độ dài hai cạnh bất kì luôn lớn hơn cạnh còn lại. Câu khẳng định "nhỏ hơn" là sai &rArr; <strong>Mệnh đề sai</strong>.</li>
                  <li><strong>Câu (3):</strong> Là một câu hỏi (câu nghi vấn), không thể gán tính đúng sai &rArr; <strong>Không là mệnh đề</strong>.</li>
                  <li><strong>Câu (4):</strong> Là một câu cảm thán bộc lộ cảm xúc chủ quan của người nói &rArr; <strong>Không là mệnh đề</strong>.</li>
                </ul>
              </div>
            </div>
            <script>
              function checkLt1TableAnswers() {
                var r1 = document.querySelector('input[name="lt1_row_1"]:checked');
                var r2 = document.querySelector('input[name="lt1_row_2"]:checked');
                var r3 = document.querySelector('input[name="lt1_row_3"]:checked');
                var r4 = document.querySelector('input[name="lt1_row_4"]:checked');
                var box = document.getElementById('lt1-feedback-box');
                if (box) {
                  box.style.display = 'block';
                  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
              }
            </script>
          `,
          workedExample: {
            title: "Ví dụ 1 (SGK Toán 10 trang 6)",
            problem: "Trong các câu sau, câu nào là mệnh đề? Câu nào không là mệnh đề?<br>a) Phương trình $3x^2 - 5x + 2 = 0$ có nghiệm nguyên;<br>b) $5 < 7 - 3$;<br>c) Có bao nhiêu dấu hiệu nhận biết hai tam giác đồng dạng?<br>d) Đấy là cách xử lí khôn ngoan!",
            solution: `
              <strong>Lời giải chi tiết chuẩn SGK:</strong><br>
              - Xét câu a): Phương trình $3x^2 - 5x + 2 = 0$ có hai nghiệm là $x = 1$ và $x = \\frac{2}{3}$. Vì $x = 1$ là số nguyên nên câu a là một khẳng định đúng. Do đó, <strong>câu a là một mệnh đề</strong> (mệnh đề đúng).<br>
              - Xét câu b): Ta có $7 - 3 = 4$, mà $5 < 4$ là khẳng định sai. Do đó, <strong>câu b là một mệnh đề</strong> (mệnh đề sai).<br>
              - Xét câu c): Đây là một câu hỏi (nghi vấn), không xác định được tính đúng sai. Do đó, <strong>câu c không phải là mệnh đề</strong>.<br>
              - Xét câu d): Đây là một câu cảm thán nêu ý kiến đánh giá chủ quan của người nói. Do đó, <strong>câu d không phải là mệnh đề</strong>.
            `,
            teacherGuidance: "Mẹo của Thầy Sáng: Cứ thấy dấu chấm hỏi (?) hoặc dấu chấm than (!) thể hiện cảm xúc, mệnh lệnh thì các em kết luận ngay đó KHÔNG PHẢI là mệnh đề nhé!",
            similarProblem: "Trong các câu sau, câu nào là mệnh đề?<br>(1) Số 10 là bội của 5.<br>(2) Bạn có thích học môn Toán không?<br>(3) Hãy tắt quạt trước khi ra khỏi phòng!<br>(4) $-3 > 0$."
          }
        },

        // --- 1b. MỆNH ĐỀ CHỨA BIẾN ---
        {
          key: "b",
          title: "Mệnh đề chứa biến",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 16px 20px; border-radius: 8px; margin-bottom: 16px;">
              <div class="sgk-box-tag" style="color: #15803d; font-weight: 700; margin-bottom: 8px;">
                <i class="fa-solid fa-square-root-variable"></i> [Khái niệm Mệnh đề chứa biến SGK Trang 7]:
              </div>
              <p style="margin-bottom: 10px; color: #166534; line-height: 1.7;">
                Xét câu: <em>"$n$ chia hết cho $2$"</em> (với $n$ là số tự nhiên).
              </p>
              <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: #166534;">
                <li>Khi chưa cho giá trị cụ thể của $n$, ta chưa thể khẳng định câu này đúng hay sai, do đó nó <strong>chưa phải là một mệnh đề</strong>.</li>
                <li>Tuy nhiên, nếu thay $n$ bằng số tự nhiên cụ thể:
                  <ul>
                    <li>Với $n = 5$, ta được câu: <em>"5 chia hết cho 2"</em> &rArr; Đây là <strong>mệnh đề sai</strong>.</li>
                    <li>Với $n = 10$, ta được câu: <em>"10 chia hết cho 2"</em> &rArr; Đây là <strong>mệnh đề đúng</strong>.</li>
                  </ul>
                </li>
                <li>Ta nói rằng câu <em>"$n$ chia hết cho $2$"</em> là một <strong>mệnh đề chứa biến</strong>, thường kí hiệu là $P(n)$.</li>
              </ul>
            </div>

            <!-- Khung bài toán tương tác SGK trang 7 -->
            <div style="background: #eff6ff; border: 1.5px dashed #3b82f6; border-radius: 8px; padding: 14px 18px; margin-top: 14px;">
              <strong style="color: #1d4ed8;"><i class="fa-solid fa-circle-question"></i> Câu hỏi SGK trang 7:</strong>
              <p style="margin: 6px 0 0 0; color: #1e3a8a;">
                Xét câu "$x > 5$". Hãy tìm hai giá trị thực của $x$ để từ câu đã cho, ta nhận được một mệnh đề đúng và một mệnh đề sai.
              </p>
              <div style="margin-top: 10px; padding: 10px 14px; background: #ffffff; border-radius: 6px; border: 1px solid #bfdbfe;">
                <strong>Hướng dẫn của Thầy Sáng:</strong><br>
                - Với $x = 7$, ta được mệnh đề "$7 > 5$" (mệnh đề đúng).<br>
                - Với $x = 2$, ta được mệnh đề "$2 > 5$" (mệnh đề sai).
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ minh họa: Mệnh đề chứa biến và tập nghiệm",
            problem: "Cho mệnh đề chứa biến $P(x): \"x^2 - 5x + 6 = 0\"$ với $x$ là số thực.<br>a) Với $x = 2$ và $x = 4$, ta được các mệnh đề đúng hay sai?<br>b) Tìm tất cả các giá trị của $x$ để $P(x)$ trở thành mệnh đề đúng.",
            solution: `
              <strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>
              a) Với $x = 2$: Thay vào phương trình ta được $2^2 - 5\\cdot 2 + 6 = 4 - 10 + 6 = 0$ (thỏa mãn). Vậy $P(2)$ là <strong>mệnh đề đúng</strong>.<br>
              Với $x = 4$: Thay vào phương trình ta được $4^2 - 5\\cdot 4 + 6 = 16 - 20 + 6 = 2 \\ne 0$. Vậy $P(4)$ là <strong>mệnh đề sai</strong>.<br>
              b) $P(x)$ đúng khi và chỉ khi $x^2 - 5x + 6 = 0 \\Leftrightarrow (x - 2)(x - 3) = 0 \\Leftrightarrow x = 2$ hoặc $x = 3$.<br>
              Vậy với $x \\in \\{2; 3\\}$ thì $P(x)$ là mệnh đề đúng.
            `,
            teacherGuidance: "Mệnh đề chứa biến bản chất là một vị từ logic. Tập hợp các giá trị của biến làm cho mệnh đề chứa biến trở thành mệnh đề đúng chính là tập nghiệm của phương trình hoặc bất phương trình tương ứng!",
            similarProblem: "Cho mệnh đề chứa biến $Q(n): \"2n + 1 \\text{ là số nguyên tố}\"$ với $n$ là số tự nhiên. Xét tính đúng sai của $Q(1), Q(2), Q(4)$."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2: MỆNH ĐỀ PHỦ ĐỊNH (KHÔNG CÓ MỤC CON THEO YÊU CẦU THẦY SÁNG)
    // -----------------------------------------------------------------------
    {
      num: "2",
      title: "Mệnh đề phủ định",
      audioUrl: "assets/audio/b10_1_sec2.mp3",
      audioScript: "Mục 2. Mệnh đề phủ định. Quan sát biển báo giao thông trong Hoạt động 2, Khoa nói: Đây là biển báo đường dành cho người đi bộ. An phản đối ý kiến của Khoa và khẳng định: Đây không phải là biển báo đường dành cho người đi bộ. Câu nói của An chính là mệnh đề phủ định câu nói của Khoa. Để phủ định một mệnh đề P, ta thường thêm hoặc bớt từ không hoặc không phải vào trước vị ngữ, kí hiệu là P gạch ngang trên đầu. Mệnh đề P và mệnh đề phủ định P là hai phát biểu hoàn toàn trái ngược nhau: Nếu P đúng thì mệnh đề phủ định sai, còn nếu P sai thì mệnh đề phủ định đúng.",
      buttonLabel: "Nghe thầy Sáng giảng Mục 2",
      checkpoints: [
        {
          id: "poi-10-1-sec2-1",
          time: 18,
          title: "Giây 18: Kí hiệu và quy tắc mệnh đề phủ định",
          question: "Để kí hiệu mệnh đề phủ định của mệnh đề P, ta dùng kí hiệu nào và mối quan hệ chân trị của chúng ra sao?",
          options: [
            "Kí hiệu là P', nếu P đúng thì P' cũng đúng.",
            "Kí hiệu là P gạch ngang trên đầu (\\overline{P}). Nếu P đúng thì \\overline{P} sai, nếu P sai thì \\overline{P} đúng.",
            "Kí hiệu là -P, nếu P đúng thì -P sai hoàn toàn.",
            "Kí hiệu là 1/P, cả hai luôn có cùng chân trị."
          ],
          correctIndex: 1, // B
          correctAnswer: "B",
          hint: "Phủ định có kí hiệu gạch đầu và mang giá trị chân trị trái ngược.",
          explain: "Chính xác! Mệnh đề phủ định của $P$ kí hiệu là $\\overline{P}$. $P$ và $\\overline{P}$ là hai phát biểu trái ngược nhau: $P$ đúng thì $\\overline{P}$ sai, $P$ sai thì $\\overline{P}$ đúng."
        }
      ],
      subsections: [], // KHÔNG CÓ MỤC CON
      contentHtml: `
        <!-- HĐ2: QUAN SÁT BIỂN BÁO GIAO THÔNG -->
        <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 10px; padding: 16px; margin-bottom: 18px;">
          <div style="font-weight: 700; color: #0369a1; margin-bottom: 10px;">
            <i class="fa-solid fa-traffic-light"></i> Hoạt động 2 (HĐ2 SGK trang 7): Quan sát biển báo giao thông
          </div>
          <div style="display: flex; align-items: center; justify-content: space-around; flex-wrap: wrap; gap: 20px;">
            <div style="flex: 1; min-width: 260px;">
              <p>Quan sát biển báo giao thông trong hình bên:</p>
              <ul>
                <li><strong>Khoa nói:</strong> <em>"Đây là biển báo đường dành cho người đi bộ."</em></li>
                <li><strong>An không đồng ý:</strong> Hãy phát biểu ý kiến của An dưới dạng một mệnh đề!</li>
              </ul>
              <div style="background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #16a34a; font-size: 0.92rem;">
                <strong>Phát biểu của An:</strong> <em>"Đây <strong>không phải</strong> là biển báo đường dành cho người đi bộ."</em> (An phủ định phát biểu của Khoa).
              </div>
            </div>

            <!-- SVG BIỂN BÁO GIAO THÔNG CHO NGƯỜI ĐI BỘ (Biển tròn xanh R.305) -->
            <div style="text-align: center;">
              <svg viewBox="0 0 160 160" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                <!-- Viền ngoài & nền biển tròn xanh -->
                <circle cx="80" cy="80" r="75" fill="#0284c7" stroke="#ffffff" stroke-width="4"/>
                <circle cx="80" cy="80" r="70" fill="#0284c7"/>
                <!-- Hình người đi bộ màu trắng chuẩn SVG -->
                <!-- Đầu -->
                <circle cx="80" cy="42" r="12" fill="#ffffff"/>
                <!-- Thân & tay -->
                <path d="M 75,56 L 85,56 L 96,82 L 88,86 L 80,68 L 74,84 L 66,80 Z" fill="#ffffff"/>
                <!-- Chân trước bước tới -->
                <path d="M 80,68 L 94,104 L 105,103 L 105,110 L 88,110 L 76,80 Z" fill="#ffffff"/>
                <!-- Chân sau -->
                <path d="M 74,84 L 60,118 L 52,118 L 52,111 L 64,106 L 72,80 Z" fill="#ffffff"/>
              </svg>
              <div style="font-size: 0.8rem; color: #64748b; margin-top: 4px; font-weight: 600;">Biển hiệu R.305: Đường người đi bộ</div>
            </div>
          </div>
        </div>

        <!-- KHUNG ĐỊNH NGHĨA CHUẨN SGK TRANG 7 -->
        <div class="sgk-framed-box" style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 16px 20px; border-radius: 8px; margin-bottom: 18px;">
          <div class="sgk-box-tag" style="color: #15803d; font-weight: 700; margin-bottom: 8px;">
            <i class="fa-solid fa-circle-check"></i> [Định nghĩa Mệnh đề phủ định SGK Trang 7]:
          </div>
          <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: #166534;">
            <li>Để phủ định một mệnh đề $P$, người ta thường thêm (hoặc bớt) từ <strong>"không"</strong> hoặc <strong>"không phải"</strong> vào trước vị ngữ của mệnh đề $P$.</li>
            <li>Kí hiệu mệnh đề phủ định của mệnh đề $P$ là: <strong>$\\overline{P}$</strong> (đọc là <em>"P gạch ngang"</em> hoặc <em>"phủ định của P"</em>).</li>
            <li><strong>Quy tắc chân trị:</strong> Mệnh đề $P$ và mệnh đề $\\overline{P}$ là hai phát biểu trái ngược nhau:
              <ul>
                <li>Nếu $P$ <strong>đúng</strong> thì $\\overline{P}$ <strong>sai</strong>.</li>
                <li>Nếu $P$ <strong>sai</strong> thì $\\overline{P}$ <strong>đúng</strong>.</li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- LUYỆN TẬP 2 VÀ VẬN DỤNG SGK TRANG 7 -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 18px 0;">
          <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 8px; padding: 14px;">
            <div style="font-weight: 700; color: #1d4ed8; margin-bottom: 6px;">
              <i class="fa-solid fa-pencil"></i> Luyện tập 2 (SGK trang 7):
            </div>
            <p style="font-size: 0.92rem; margin-bottom: 6px;">Phát biểu mệnh đề phủ định và xét tính đúng sai:</p>
            <ul style="font-size: 0.9rem; padding-left: 18px; line-height: 1.6; margin: 0;">
              <li>$P$: <em>"2 022 chia hết cho 5"</em><br>&rArr; $\\overline{P}$: <em>"2 022 <strong>không chia hết</strong> cho 5"</em> ($\\overline{P}$ là mệnh đề <strong>đúng</strong>).</li>
              <li>$Q$: <em>"Bất phương trình $2x + 1 > 0$ có nghiệm"</em><br>&rArr; $\\overline{Q}$: <em>"Bất phương trình $2x + 1 > 0$ <strong>vô nghiệm</strong>"</em> ($\\overline{Q}$ là mệnh đề <strong>sai</strong>, vì $x = 1$ thỏa mãn).</li>
            </ul>
          </div>

          <div style="background: #fefce8; border: 1.5px solid #fef08a; border-radius: 8px; padding: 14px;">
            <div style="font-weight: 700; color: #a16207; margin-bottom: 6px;">
              <i class="fa-solid fa-earth-americas"></i> Vận dụng (SGK trang 7):
            </div>
            <p style="font-size: 0.92rem; margin-bottom: 6px;">Cho mệnh đề $Q$: <em>"Châu Á là châu lục có diện tích lớn nhất trên thế giới"</em>.</p>
            <ul style="font-size: 0.9rem; padding-left: 18px; line-height: 1.6; margin: 0;">
              <li><strong>Mệnh đề phủ định $\\overline{Q}$:</strong> <em>"Châu Á <strong>không phải</strong> là châu lục có diện tích lớn nhất trên thế giới"</em>.</li>
              <li><strong>Xét tính đúng sai:</strong> Theo kiến thức địa lí thế giới, Châu Á có diện tích khoảng $44{,}58$ triệu $\\text{km}^2$ (lớn nhất thế giới). Do đó: $Q$ là mệnh đề <strong>đúng</strong>, còn $\\overline{Q}$ là mệnh đề <strong>sai</strong>.</li>
            </ul>
          </div>
        </div>
      `,
      workedExample: {
        title: "Ví dụ 2 (SGK Toán 10 trang 7)",
        problem: "Phát biểu mệnh đề phủ định của mỗi mệnh đề sau:<br>P: \"17 là số chính phương\";<br>Q: \"Hình hộp chữ nhật không phải là hình lăng trụ đứng tứ giác\".",
        solution: `
          <strong>Lời giải chi tiết chuẩn SGK:</strong><br>
          - Mệnh đề phủ định của $P$ là $\\overline{P}$: <em>\"17 <strong>không phải</strong> là số chính phương\"</em>.<br>
          - Mệnh đề phủ định của $Q$ là $\\overline{Q}$: <em>\"Hình hộp chữ nhật <strong>là</strong> hình lăng trụ đứng tứ giác\"</em>.<br>
          <em>Nhận xét chân trị:</em> Vì $17$ không phải là bình phương của bất kì số tự nhiên nào nên $P$ sai, do đó $\\overline{P}$ là mệnh đề đúng. Ngược lại, hình hộp chữ nhật chính là hình lăng trụ đứng tứ giác có đáy là hình chữ nhật nên $\\overline{Q}$ đúng, còn $Q$ sai.
        `,
        teacherGuidance: "Mẹo của Thầy Sáng: Muốn phủ định một khẳng định chứa từ 'không phải', các em chỉ cần lược bỏ từ 'không phải' đi là xong, không nên thêm 'không phải là không phải' sẽ gây tối nghĩa!",
        similarProblem: "Phát biểu mệnh đề phủ định của các mệnh đề sau và xét tính đúng sai:<br>A: \"Tam giác có ba cạnh bằng nhau là tam giác đều\";<br>B: \"Số 11 là hợp số\"."
      }
    },

    // -----------------------------------------------------------------------
    // MỤC 3: MỆNH ĐỀ KÉO THEO, MỆNH ĐỀ ĐẢO (Có 2 mục con: a và b)
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "Mệnh đề kéo theo, mệnh đề đảo",
      audioUrl: "assets/audio/b10_1_sec3.mp3",
      audioScript: "Mục 3. Mệnh đề kéo theo, mệnh đề đảo. Tiểu mục a. Mệnh đề kéo theo. Mệnh đề có dạng Nếu P thì Q được gọi là mệnh đề kéo theo, kí hiệu là P suy ra Q. Mệnh đề P suy ra Q chỉ sai trong trường hợp duy nhất là P đúng nhưng Q sai. Trong các định lí toán học có dạng P suy ra Q, ta gọi P là giả thiết, Q là kết luận. Hoặc nói P là điều kiện đủ để có Q, còn Q là điều kiện cần để có P. Tiểu mục b. Mệnh đề đảo. Mệnh đề Q suy ra P được gọi là mệnh đề đảo của mệnh đề P suy ra Q. Các em cần đặc biệt lưu ý: Mệnh đề đảo của một mệnh đề đúng chưa chắc đã đúng. Ví dụ: Nếu tam giác A B C đều thì tam giác A B C cân là mệnh đề đúng, nhưng mệnh đề đảo: Nếu tam giác A B C cân thì tam giác A B C đều lại là mệnh đề sai.",
      buttonLabel: "Nghe thầy Sáng giảng Mục 3",
      checkpoints: [
        {
          id: "poi-10-1-sec3-1",
          time: 20,
          title: "Giây 20: Chân trị của mệnh đề kéo theo",
          question: "Mệnh đề kéo theo P \\Rightarrow Q chỉ sai trong trường hợp nào sau đây?",
          options: [
            "Khi cả P và Q đều sai.",
            "Khi P sai và Q đúng.",
            "Khi P đúng và Q sai.",
            "Khi cả P và Q đều đúng."
          ],
          correctIndex: 2, // C
          correctAnswer: "C",
          hint: "Lời hứa chỉ bị phá vỡ khi tiền đề xảy ra (P đúng) nhưng kết quả không xảy ra (Q sai).",
          explain: "Chính xác! Mệnh đề $P \\Rightarrow Q$ chỉ sai trong trường hợp duy nhất khi $P$ đúng mà $Q$ sai. Nếu $P$ sai thì mệnh đề kéo theo mặc nhiên được coi là đúng."
        },
        {
          id: "poi-10-1-sec3-2",
          time: 42,
          title: "Giây 42: Mệnh đề đảo và tính đúng sai",
          question: "Mệnh đề đảo của một mệnh đề đúng thì có tính chất gì?",
          options: [
            "Luôn luôn đúng.",
            "Luôn luôn sai.",
            "Không nhất thiết là đúng (có thể đúng hoặc sai).",
            "Trở thành một mệnh đề chứa biến."
          ],
          correctIndex: 2, // C
          correctAnswer: "C",
          hint: "Ví dụ: tam giác đều thì cân (đúng), nhưng tam giác cân thì đều (sai).",
          explain: "Rất chuẩn xác! Mệnh đề đảo của một mệnh đề đúng không nhất thiết là đúng!"
        }
      ],
      subsections: [
        // --- 3a. MỆNH ĐỀ KÉO THEO ---
        {
          key: "a",
          title: "Mệnh đề kéo theo",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 16px 20px; border-radius: 8px; margin-bottom: 16px;">
              <div class="sgk-box-tag" style="color: #15803d; font-weight: 700; margin-bottom: 8px;">
                <i class="fa-solid fa-arrow-right"></i> [Khái niệm Mệnh đề kéo theo SGK Trang 8]:
              </div>
              <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: #166534;">
                <li>Mệnh đề <strong>"Nếu $P$ thì $Q$"</strong> được gọi là một <strong>mệnh đề kéo theo</strong> và kí hiệu là: <strong>$P \\Rightarrow Q$</strong>.</li>
                <li><strong>Quy tắc xét tính đúng sai:</strong>
                  <ul>
                    <li>Mệnh đề $P \\Rightarrow Q$ <strong>chỉ sai khi $P$ đúng và $Q$ sai</strong>.</li>
                    <li>Do đó, ta chỉ cần xét tính đúng sai của $P \\Rightarrow Q$ khi $P$ đúng. Khi đó, nếu $Q$ đúng thì $P \\Rightarrow Q$ đúng, nếu $Q$ sai thì $P \\Rightarrow Q$ sai.</li>
                  </ul>
                </li>
                <li><strong>Thuật ngữ trong các định lí toán học:</strong> Các định lí toán học thường có dạng $P \\Rightarrow Q$. Khi đó:
                  <ul>
                    <li>$P$ là <strong>giả thiết</strong>, $Q$ là <strong>kết luận</strong> của định lí.</li>
                    <li>$P$ là <strong>điều kiện đủ</strong> để có $Q$.</li>
                    <li>$Q$ là <strong>điều kiện cần</strong> để có $P$.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <!-- ĐỒ HỌA VECTOR MINH HỌA ĐỊNH LÍ HÌNH HỌC TỨ GIÁC NỘI TIẾP -->
            <div style="text-align: center; margin: 18px 0;">
              <svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 10px;">
                <!-- Đường tròn ngoại tiếp -->
                <circle cx="200" cy="110" r="85" fill="#f0fdf4" stroke="#16a34a" stroke-dasharray="4,4" stroke-width="2"/>
                <!-- Tứ giác nội tiếp ABCD -->
                <polygon points="170,28 275,65 245,185 130,165" fill="rgba(34, 197, 94, 0.15)" stroke="#15803d" stroke-width="2.5"/>
                <!-- Các đỉnh -->
                <circle cx="170" cy="28" r="4.5" fill="#1e293b"/><text x="165" y="20" font-weight="700" font-size="14">B</text>
                <circle cx="275" cy="65" r="4.5" fill="#1e293b"/><text x="285" y="70" font-weight="700" font-size="14">C</text>
                <circle cx="245" cy="185" r="4.5" fill="#1e293b"/><text x="250" y="202" font-weight="700" font-size="14">D</text>
                <circle cx="130" cy="165" r="4.5" fill="#1e293b"/><text x="110" y="172" font-weight="700" font-size="14">A</text>
                
                <!-- Góc A và C đối diện -->
                <path d="M 145,150 A 20 20 0 0 0 142,166" fill="none" stroke="#ea580c" stroke-width="2"/>
                <path d="M 260,78 A 20 20 0 0 0 262,60" fill="none" stroke="#ea580c" stroke-width="2"/>

                <!-- Text ghi chú bên phải -->
                <g transform="translate(320, 45)">
                  <rect x="0" y="0" width="260" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                  <text x="130" y="28" text-anchor="middle" font-weight="700" fill="#0369a1" font-size="13">ĐỊNH LÍ HÌNH HỌC (VÍ DỤ 3)</text>
                  <text x="20" y="58" font-size="12" fill="#334155">Giả thiết P: Tứ giác có</text>
                  <text x="20" y="78" font-size="12" font-weight="700" fill="#ea580c">&#8736;A + &#8736;C = 180&#176;</text>
                  <text x="20" y="102" font-size="12" fill="#334155">Kết luận Q: Tứ giác nội tiếp đường tròn</text>
                  <text x="20" y="120" font-size="11" font-style="italic" fill="#16a34a">&rArr; Mệnh đề kéo theo P &#8658; Q là ĐÚNG</text>
                </g>
              </svg>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 3 (SGK Toán 10 trang 8)",
            problem: "Cho tứ giác $ABCD$, xét hai câu sau:<br>P: \"Tứ giác $ABCD$ có tổng số đo hai góc đối diện bằng $180^\\circ$\";<br>Q: \"$ABCD$ là tứ giác nội tiếp đường tròn\".<br>Phát biểu mệnh đề $P \\Rightarrow Q$ và cho biết tính đúng sai của mệnh đề đó.",
            solution: `
              <strong>Lời giải chi tiết chuẩn SGK:</strong><br>
              Mệnh đề kéo theo $P \\Rightarrow Q$ được phát biểu là:<br>
              <em>\"Nếu tứ giác $ABCD$ có tổng số đo hai góc đối diện bằng $180^\\circ$ thì $ABCD$ là tứ giác nội tiếp đường tròn\".</em><br>
              Theo định lí hình học về dấu hiệu nhận biết tứ giác nội tiếp (đã học ở lớp 9), mệnh đề kéo theo này là một <strong>mệnh đề đúng</strong>.<br>
              Ở đây, ta có thể phát biểu:<br>
              - <em>\"Tứ giác $ABCD$ có tổng số đo hai góc đối diện bằng $180^\\circ$ là <strong>điều kiện đủ</strong> để $ABCD$ nội tiếp đường tròn.\"</em><br>
              - <em>\"$ABCD$ nội tiếp đường tròn là <strong>điều kiện cần</strong> để tứ giác $ABCD$ có tổng số đo hai góc đối diện bằng $180^\\circ$.\"</em>
            `,
            teacherGuidance: "Mẹo nhớ điều kiện CẦN và ĐỦ của Thầy Sáng: 'Đầu ĐỦ, Đuôi CẦN'! Trong $P \\Rightarrow Q$, thằng đứng đầu (P) là ĐIỀU KIỆN ĐỦ, thằng đứng sau (Q) là ĐIỀU KIỆN CẦN. Nhớ câu này là không bao giờ bị nhầm lẫn!",
            similarProblem: "Cho hai mệnh đề: P: \"Tam giác ABC vuông tại A\"; Q: \"Tam giác ABC có $AB^2 + AC^2 = BC^2$\". Hãy phát biểu định lí $P \\Rightarrow Q$ dưới dạng điều kiện cần và điều kiện đủ."
          }
        },

        // --- 3b. MỆNH ĐỀ ĐẢO ---
        {
          key: "b",
          title: "Mệnh đề đảo",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 16px 20px; border-radius: 8px; margin-bottom: 16px;">
              <div class="sgk-box-tag" style="color: #15803d; font-weight: 700; margin-bottom: 8px;">
                <i class="fa-solid fa-arrow-right-arrow-left"></i> [Khái niệm Mệnh đề đảo SGK Trang 9]:
              </div>
              <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: #166534;">
                <li>Cho mệnh đề kéo theo $P \\Rightarrow Q$. Mệnh đề <strong>$Q \\Rightarrow P$</strong> được gọi là <strong>mệnh đề đảo</strong> của mệnh đề $P \\Rightarrow Q$.</li>
                <li><strong>Nhận xét đặc biệt quan trọng:</strong> Mệnh đề đảo của một mệnh đề đúng <strong>không nhất thiết là đúng</strong>!</li>
              </ul>
            </div>

            <!-- Khung Luyện tập 3 SGK trang 9 -->
            <div style="background: #eff6ff; border: 1.5px solid #93c5fd; border-radius: 8px; padding: 16px; margin: 16px 0;">
              <div style="font-weight: 700; color: #1e40af; margin-bottom: 8px;">
                <i class="fa-solid fa-pen-to-square"></i> Luyện tập 3 (SGK trang 9):
              </div>
              <p style="margin-bottom: 6px;">Cho các mệnh đề $P$: <em>"$a$ và $b$ chia hết cho $c$"</em>; $Q$: <em>"$a + b$ chia hết cho $c$"</em>.</p>
              <div style="background: #ffffff; padding: 12px 16px; border-radius: 6px; border: 1px solid #bfdbfe; font-size: 0.93rem; line-height: 1.6;">
                <strong>a) Phát biểu định lí $P \\Rightarrow Q$:</strong><br>
                <em>"Nếu $a$ và $b$ chia hết cho $c$ thì $a + b$ chia hết cho $c$."</em><br>
                - Giả thiết: $a$ và $b$ chia hết cho $c$.<br>
                - Kết luận: $a + b$ chia hết cho $c$.<br>
                - Điều kiện đủ: "$a$ và $b$ chia hết cho $c$ là điều kiện đủ để $a + b$ chia hết cho $c$."<br>
                - Điều kiện cần: "$a + b$ chia hết cho $c$ là điều kiện cần để $a$ và $b$ chia hết cho $c$."<br><br>
                <strong>b) Phát biểu mệnh đề đảo $Q \\Rightarrow P$:</strong><br>
                <em>"Nếu $a + b$ chia hết cho $c$ thì $a$ và $b$ chia hết cho $c$."</em><br>
                - <strong>Xét tính đúng sai:</strong> Mệnh đề đảo này là <strong>mệnh đề sai</strong>!<br>
                <em>Phản ví dụ:</em> Chọn $a = 1, b = 3, c = 2$. Ta có $a + b = 1 + 3 = 4$ chia hết cho $2$, nhưng cả $1$ và $3$ đều không chia hết cho $2$.
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 4 (SGK Toán 10 trang 9)",
            problem: "Hãy phát biểu mệnh đề đảo của mệnh đề: \"Nếu tam giác $ABC$ là tam giác đều thì tam giác $ABC$ là tam giác cân\" và xác định tính đúng sai của mệnh đề đảo này.",
            solution: `
              <strong>Lời giải chi tiết chuẩn SGK:</strong><br>
              Mệnh đề ban đầu: \"Nếu tam giác $ABC$ là tam giác đều thì tam giác $ABC$ là tam giác cân\" (đây là mệnh đề đúng).<br>
              Mệnh đề đảo là:<br>
              <em>\"Nếu tam giác $ABC$ là tam giác cân thì tam giác $ABC$ là tam giác đều\".</em><br>
              <strong>Mệnh đề đảo này là sai</strong>, vì một tam giác cân có thể có góc ở đỉnh bằng $100^\\circ$ hoặc hai cạnh bên bằng nhau nhưng cạnh đáy khác hai cạnh bên, do đó không phải tam giác đều.
            `,
            teacherGuidance: "Thầy Sáng nhắc nhở: Khi gặp câu hỏi 'mệnh đề đảo có đúng không', các em hãy lập tức tìm một phản ví dụ (counterexample). Chỉ cần chỉ ra duy nhất một trường hợp sai là khẳng định được ngay mệnh đề đảo sai!",
            similarProblem: "Phát biểu mệnh đề đảo của mệnh đề: \"Nếu số tự nhiên n chia hết cho 6 thì n chia hết cho 2\" và xét tính đúng sai."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4: MỆNH ĐỀ TƯƠNG ĐƯƠNG (KHÔNG CÓ MỤC CON THEO YÊU CẦU THẦY SÁNG)
    // -----------------------------------------------------------------------
    {
      num: "4",
      title: "Mệnh đề tương đương",
      audioUrl: "assets/audio/b10_1_sec4.mp3",
      audioScript: "Mục 4. Mệnh đề tương đương. Mệnh đề có dạng P nếu và chỉ nếu Q được gọi là mệnh đề tương đương, kí hiệu là P tương đương Q. Mệnh đề tương đương P tương đương Q đúng khi và chỉ khi cả hai mệnh đề kéo theo P suy ra Q và Q suy ra P đều cùng đúng. Khi đó, ta còn phát biểu: P tương đương với Q, hoặc P là điều kiện cần và đủ để có Q, hoặc P khi và chỉ khi Q. Ví dụ: Tứ giác A B C D là hình vuông khi và chỉ khi tứ giác A B C D là hình chữ nhật có hai đường chéo vuông góc với nhau.",
      buttonLabel: "Nghe thầy Sáng giảng Mục 4",
      checkpoints: [
        {
          id: "poi-10-1-sec4-1",
          time: 18,
          title: "Giây 18: Điều kiện để mệnh đề tương đương đúng",
          question: "Mệnh đề tương đương P \\Leftrightarrow Q đúng khi và chỉ khi điều nào sau đây xảy ra?",
          options: [
            "Chỉ cần mệnh đề kéo theo P \\Rightarrow Q đúng.",
            "Cả hai mệnh đề kéo theo P \\Rightarrow Q và Q \\Rightarrow P đều cùng đúng.",
            "Chỉ cần một trong hai mệnh đề P hoặc Q đúng.",
            "Khi cả hai mệnh đề kéo theo P \\Rightarrow Q và Q \\Rightarrow P đều cùng sai."
          ],
          correctIndex: 1, // B
          correctAnswer: "B",
          hint: "Tương đương hai chiều đòi hỏi cả chiều xuôi và chiều ngược đều đúng.",
          explain: "Chính xác! Mệnh đề tương đương $P \\Leftrightarrow Q$ đúng khi và chỉ khi cả hai mệnh đề kéo theo $P \\Rightarrow Q$ và $Q \\Rightarrow P$ đều đúng."
        }
      ],
      subsections: [], // KHÔNG CÓ MỤC CON
      contentHtml: `
        <!-- HĐ6 SGK TRANG 9 -->
        <div style="background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 14px 18px; margin-bottom: 16px;">
          <strong style="color: #0369a1;"><i class="fa-solid fa-lightbulb"></i> Hoạt động 6 (HĐ6 SGK trang 9):</strong>
          <p style="margin: 6px 0 0 0; color: #334155;">
            Xét mệnh đề: <em>"Một số tự nhiên chia hết cho 5 nếu số đó có chữ số tận cùng bằng 0 hoặc 5 và ngược lại."</em><br>
            Câu ghép này có thể diễn đạt lại là: <em>"Một số tự nhiên chia hết cho 5 <strong>nếu và chỉ nếu</strong> số đó có chữ số tận cùng bằng 0 hoặc 5."</em>
          </p>
        </div>

        <!-- KHUNG ĐỊNH NGHĨA CHUẨN SGK TRANG 9 -->
        <div class="sgk-framed-box" style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 16px 20px; border-radius: 8px; margin-bottom: 18px;">
          <div class="sgk-box-tag" style="color: #15803d; font-weight: 700; margin-bottom: 8px;">
            <i class="fa-solid fa-arrows-left-right"></i> [Định nghĩa Mệnh đề tương đương SGK Trang 9]:
          </div>
          <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: #166534;">
            <li>Mệnh đề <strong>"P nếu và chỉ nếu Q"</strong> được gọi là một <strong>mệnh đề tương đương</strong> và kí hiệu là: <strong>$P \\Leftrightarrow Q$</strong>.</li>
            <li><strong>Tính đúng sai:</strong> Nếu cả hai mệnh đề kéo theo $P \\Rightarrow Q$ và $Q \\Rightarrow P$ <strong>đều đúng</strong> thì mệnh đề tương đương $P \\Leftrightarrow Q$ <strong>đúng</strong>.</li>
            <li><strong>Các cách phát biểu tương đương nhau trong toán học:</strong>
              <ul>
                <li><em>"$P$ tương đương với $Q$"</em>.</li>
                <li><em>"$P$ là <strong>điều kiện cần và đủ</strong> để có $Q$"</em>.</li>
                <li><em>"$P$ <strong>khi và chỉ khi</strong> $Q$"</em>.</li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- LUYỆN TẬP 4 SGK TRANG 9 -->
        <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
          <div style="font-weight: 700; color: #1d4ed8; margin-bottom: 6px;">
            <i class="fa-solid fa-pencil"></i> Luyện tập 4 (SGK trang 9):
          </div>
          <p style="margin: 0; color: #1e3a8a;">
            <strong>Đề bài:</strong> Phát biểu điều kiện cần và đủ để số tự nhiên $n$ chia hết cho 2.<br>
            <strong>Lời giải của Thầy Sáng:</strong> <em>"Số tự nhiên $n$ có chữ số tận cùng là chữ số chẵn (0, 2, 4, 6, 8) là <strong>điều kiện cần và đủ</strong> để $n$ chia hết cho 2."</em> (hoặc: <em>"Số tự nhiên $n$ chia hết cho 2 <strong>khi và chỉ khi</strong> $n$ có chữ số tận cùng là 0, 2, 4, 6, 8"</em>).
          </p>
        </div>
      `,
      workedExample: {
        title: "Ví dụ 5 (SGK Toán 10 trang 9)",
        problem: "Cho hai mệnh đề:<br>P: \"Tứ giác ABCD là hình vuông\";<br>Q: \"Tứ giác ABCD là hình chữ nhật có hai đường chéo vuông góc với nhau\".<br>Hãy phát biểu mệnh đề tương đương $P \\Leftrightarrow Q$ và xác định tính đúng sai của mệnh đề tương đương này.",
        solution: `
          <strong>Lời giải chi tiết chuẩn SGK:</strong><br>
          Mệnh đề tương đương $P \\Leftrightarrow Q$ được phát biểu là:<br>
          <em>\"Tứ giác $ABCD$ là hình vuông <strong>khi và chỉ khi</strong> tứ giác $ABCD$ là hình chữ nhật có hai đường chéo vuông góc với nhau\".</em><br>
          <strong>Xét tính đúng sai:</strong><br>
          - Chiều thuận $P \\Rightarrow Q$: \"Nếu $ABCD$ là hình vuông thì $ABCD$ là hình chữ nhật có hai đường chéo vuông góc\" &rArr; Đúng theo tính chất hình vuông.<br>
          - Chiều đảo $Q \\Rightarrow P$: \"Nếu $ABCD$ là hình chữ nhật có hai đường chéo vuông góc thì $ABCD$ là hình vuông\" &rArr; Đúng theo dấu hiệu nhận biết hình vuông.<br>
          Vì cả hai mệnh đề $P \\Rightarrow Q$ và $Q \\Rightarrow P$ đều đúng, nên <strong>mệnh đề tương đương $P \\Leftrightarrow Q$ là mệnh đề đúng</strong>.
        `,
        teacherGuidance: "Khi đề bài yêu cầu 'Phát biểu điều kiện cần và đủ', các em chỉ cần dùng cụm từ 'khi và chỉ khi' hoặc 'là điều kiện cần và đủ để'. Đây là mối quan hệ hoàn hảo hai chiều trong toán học!",
        similarProblem: "Cho tam giác ABC. Xét mệnh đề tương đương: \"Tam giác ABC đều khi và chỉ khi tam giác ABC có ba cạnh bằng nhau\". Xác định tính đúng sai."
      }
    },

    // -----------------------------------------------------------------------
    // MỤC 5: MỆNH ĐỀ CÓ CHỨA KÍ HIỆU VỚI MỌI (∀) VÀ TỒN TẠI (∃) (KHÔNG CÓ MỤC CON)
    // -----------------------------------------------------------------------
    {
      num: "5",
      title: "Mệnh đề có chứa kí hiệu với mọi và tồn tại",
      audioUrl: "assets/audio/b10_1_sec5.mp3",
      audioScript: "Mục 5. Mệnh đề có chứa kí hiệu với mọi và tồn tại. Trong toán học, kí hiệu chữ A lộn ngược đọc là với mọi, nghĩa là tất cả các phần tử đều thỏa mãn tính chất. Kí hiệu chữ E quay ngược đọc là tồn tại, nghĩa là có ít nhất một phần tử thỏa mãn tính chất. Quy tắc phủ định rất quan trọng: Phủ định của mệnh đề với mọi x thuộc X thỏa mãn P x chính là tồn tại x thuộc X sao cho không thỏa mãn P x. Ngược lại, phủ định của mệnh đề tồn tại x thuộc X thỏa mãn P x là với mọi x thuộc X đều không thỏa mãn P x.",
      buttonLabel: "Nghe thầy Sáng giảng Mục 5",
      checkpoints: [
        {
          id: "poi-10-1-sec5-1",
          time: 20,
          title: "Giây 20: Phủ định của kí hiệu với mọi (\\forall)",
          question: "Mệnh đề phủ định của mệnh đề P: \"\\forall x \\in \\mathbb{R}, x^2 + 1 > 0\" là:",
          options: [
            "\\forall x \\in \\mathbb{R}, x^2 + 1 \\le 0",
            "\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0",
            "\\exists x \\in \\mathbb{R}, x^2 + 1 < 0",
            "\\forall x \\in \\mathbb{R}, x^2 + 1 < 0"
          ],
          correctIndex: 1, // B
          correctAnswer: "B",
          hint: "Phủ định của 'với mọi' là 'tồn tại', phủ định của '>' là '<='.",
          explain: "Chính xác! Phủ định của kí hiệu với mọi (\\forall) đổi thành tồn tại (\\exists), và phủ định của phép toán > đổi thành \\le."
        }
      ],
      subsections: [], // KHÔNG CÓ MỤC CON
      contentHtml: `
        <!-- KHUNG ĐỊNH NGHĨA KÍ HIỆU VỚI MỌI VÀ TỒN TẠI -->
        <div class="sgk-framed-box" style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 16px 20px; border-radius: 8px; margin-bottom: 18px;">
          <div class="sgk-box-tag" style="color: #15803d; font-weight: 700; margin-bottom: 8px;">
            <i class="fa-solid fa-infinity"></i> [Kí hiệu $\\forall$ và $\\exists$ SGK Trang 10]:
          </div>
          <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: #166534;">
            <li>Kí hiệu <strong>$\\forall$</strong> đọc là <strong>"với mọi"</strong> (tất cả các phần tử).
              <br>Ví dụ: Câu <em>"Mọi số thực đều có bình phương không âm"</em> viết là: <strong>$P: \"\\forall x \\in \\mathbb{R}, x^2 \\ge 0\"$</strong> (Mệnh đề đúng).
            </li>
            <li>Kí hiệu <strong>$\\exists$</strong> đọc là <strong>"tồn tại"</strong> (hoặc <em>"có ít nhất một"</em>).
              <br>Ví dụ: Câu <em>"Có một số hữu tỉ mà bình phương của nó bằng 2"</em> viết là: <strong>$Q: \"\\exists x \\in \\mathbb{Q}, x^2 = 2\"$</strong> (Mệnh đề sai, vì $\\sqrt{2}$ là số vô tỉ).
            </li>
          </ul>
        </div>

        <!-- QUY TẮC PHỦ ĐỊNH MỆNH ĐỀ CHỨA ∀ VÀ ∃ -->
        <div style="background: #fefce8; border: 2px solid #facc15; border-radius: 10px; padding: 16px 20px; margin-bottom: 18px;">
          <div style="font-weight: 700; color: #854d0e; font-size: 1rem; margin-bottom: 8px;">
            <i class="fa-solid fa-bolt"></i> QUY TẮC VÀNG: Phủ định mệnh đề có chứa kí hiệu $\\forall, \\exists$
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
            <div style="background: #ffffff; padding: 12px 16px; border-radius: 6px; border: 1.5px solid #fde047;">
              <strong style="color: #ca8a04;">1. Phủ định của $\\forall$ là $\\exists$:</strong>
              <p style="margin: 6px 0 0 0; font-size: 0.95rem; color: #713f12;">
                Phủ định của mệnh đề: <em>\"$\\forall x \\in X, P(x)$\"</em><br>
                là mệnh đề: <strong>\"$\\exists x \\in X, \\overline{P(x)}$\"</strong>.
              </p>
            </div>
            <div style="background: #ffffff; padding: 12px 16px; border-radius: 6px; border: 1.5px solid #fde047;">
              <strong style="color: #ca8a04;">2. Phủ định của $\\exists$ là $\\forall$:</strong>
              <p style="margin: 6px 0 0 0; font-size: 0.95rem; color: #713f12;">
                Phủ định của mệnh đề: <em>\"$\\exists x \\in X, P(x)$\"</em><br>
                là mệnh đề: <strong>\"$\\forall x \\in X, \\overline{P(x)}$\"</strong>.
              </p>
            </div>
          </div>
        </div>

        <!-- LUYỆN TẬP 5 VÀ LUYỆN TẬP 6 SGK TRANG 10 -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin: 18px 0;">
          <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 8px; padding: 14px;">
            <div style="font-weight: 700; color: #1d4ed8; margin-bottom: 6px;">
              <i class="fa-solid fa-pencil"></i> Luyện tập 5 (SGK trang 10):
            </div>
            <p style="font-size: 0.92rem; margin-bottom: 6px;">Phát biểu bằng lời và xét tính đúng sai:</p>
            <div style="background: #ffffff; padding: 10px; border-radius: 6px; font-size: 0.9rem; color: #1e3a8a;">
              <em>\"$\\forall x \\in \\mathbb{R}, x^2 + 1 \\le 0$\"</em><br>
              <strong>Phát biểu:</strong> \"Mọi số thực $x$ đều có bình phương cộng 1 nhỏ hơn hoặc bằng 0\".<br>
              <strong>Xét tính đúng sai:</strong> Vì $x^2 \\ge 0$ với mọi $x \\in \\mathbb{R}$ nên $x^2 + 1 \\ge 1 > 0$. Vậy đây là <strong>mệnh đề sai</strong>.
            </div>
          </div>

          <div style="background: #f0fdf4; border: 1.5px solid #bbf7d0; border-radius: 8px; padding: 14px;">
            <div style="font-weight: 700; color: #15803d; margin-bottom: 6px;">
              <i class="fa-solid fa-users"></i> Luyện tập 6 (SGK trang 10):
            </div>
            <p style="font-size: 0.92rem; margin-bottom: 6px;">Phát biểu của Nam và Mai:</p>
            <div style="background: #ffffff; padding: 10px; border-radius: 6px; font-size: 0.9rem; color: #166534;">
              - Nam: <em>\"$\\forall x \\in \\mathbb{R}, x^2 \\ne 1$\"</em> (Sai, vì với $x = 1$ thì $1^2 = 1$).<br>
              - Mai: <em>\"$\\exists x \\in \\mathbb{R}, x^2 = 1$\"</em> (Đúng, vì tồn tại $x = 1 \\in \\mathbb{R}$ thỏa $1^2 = 1$).<br>
              &rArr; <strong>Bạn Mai phát biểu đúng.</strong>
            </div>
          </div>
        </div>
      `,
      workedExample: {
        title: "Ví dụ 6 (SGK Toán 10 trang 10)",
        problem: "Viết mệnh đề phủ định của mệnh đề sau và xác định tính đúng sai của nó:<br>P: \"$\\exists x \\in \\mathbb{R}, x^2 + 1 = 0$\".",
        solution: `
          <strong>Lời giải chi tiết chuẩn SGK:</strong><br>
          - Mệnh đề $P$ phát biểu là: <em>\"Tồn tại một số thực mà bình phương của nó cộng với 1 bằng 0\".</em><br>
          - Phủ định của mệnh đề $P$ là $\\overline{P}$: <em>\"Mọi số thực đều có bình phương cộng với 1 khác 0\".</em><br>
          Ta có thể viết dưới dạng kí hiệu là: <strong>$\\overline{P}: \"\\forall x \\in \\mathbb{R}, x^2 + 1 \\ne 0\"$</strong>.<br>
          - <strong>Xét tính đúng sai:</strong> Với mọi số thực $x$, ta luôn có $x^2 \\ge 0 \\Rightarrow x^2 + 1 \\ge 1 > 0$, do đó $x^2 + 1 \\ne 0$ luôn đúng với mọi $x \\in \\mathbb{R}$.<br>
          Vậy <strong>$\\overline{P}$ là mệnh đề đúng</strong> (và $P$ là mệnh đề sai).
        `,
        teacherGuidance: "Mẹo của Thầy Sáng: Đổi dấu đồng thời cả 2 vị trí: '$\\exists$' biến thành '$\\forall$', còn dấu '=' biến thành dấu '$\\ne$'. Tương tự: '>' biến thành '$\\le$', '<' biến thành '$\\ge$'. Cực kì dễ nhớ!",
        similarProblem: "Viết mệnh đề phủ định của mệnh đề: $A: \"\\forall n \\in \\mathbb{N}, n(n+1) \\text{ chia hết cho 2}\"$ và xét tính đúng sai."
      }
    }
  ],

  // =========================================================================
  // PHẦN III (TIẾP): CHỐT BÀI HỌC & LỊCH SỬ TOÁN HỌC (WRAPUP)
  // =========================================================================
  realworldWrapup: {
    title: "Chốt kiến thức then chốt: Nguồn gốc Logic & Mẹo của Thầy Sáng",
    audioUrl: "assets/audio/b10_1_wrapup.mp3",
    audioScript: "Chốt kiến thức then chốt. Như vậy các em đã nắm vững toàn bộ các khái niệm cốt lõi về mệnh đề. Về lịch sử toán học, Lôgic mệnh đề lần đầu tiên được phát triển có hệ thống bởi nhà triết học Hy Lạp Aristotle cách đây hơn 2300 năm, và sau đó được nhà toán học George Boole đại số hóa vào năm 1854 trong công trình Các định luật tư duy, mở đường cho sự ra đời của máy tính điện tử hiện đại. Mẹo của Thầy Sáng: Để chứng minh một mệnh đề với mọi là sai, các em chỉ cần tìm ra một phản ví dụ duy nhất. Bây giờ, các em hãy cùng bước sang Phần 4 để làm bài tập trắc nghiệm củng cố nhé!",
    buttonLabel: "Nghe thầy Sáng tổng kết bài học",
    recap: "Quay trở lại tình huống mở đầu về bức tranh đố vui đếm con vật của bạn An và bạn Khoa: Lời nói của An ('Có 5 con vật...') hay của Khoa ('Có 6 con vật...') đều là những mệnh đề logic vì chúng dứt khoát hoặc đúng hoặc sai. Nếu bức tranh thực sự có đúng 5 con vật thì phát biểu của An là mệnh đề đúng, phát biểu của Khoa là mệnh đề sai.",
    solution: `
      <!-- KHUNG LỊCH SỬ TOÁN HỌC SGK TRANG 11 -->
      <div style="background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%); border: 1.5px solid #93c5fd; border-radius: 12px; padding: 18px; margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px; border-bottom: 1px solid #bfdbfe; padding-bottom: 8px;">
          <i class="fa-solid fa-landmark" style="font-size: 1.4rem; color: #1d4ed8;"></i>
          <h4 style="margin: 0; color: #1e3a8a; font-size: 1.1rem;">EM CÓ BIẾT? (LỊCH SỬ TOÁN HỌC SGK TRANG 11)</h4>
        </div>
        <p style="line-height: 1.7; color: #334155; margin-bottom: 12px;">
          <strong>Lôgic mệnh đề</strong> lần đầu tiên được phát triển một cách có hệ thống bởi nhà triết học Hy Lạp cổ đại <strong>Aristotle (384 – 322 TCN)</strong> cách đây hơn 2.300 năm. Đến thế kỉ 19, nhà toán học người Anh <strong>George Boole (1815 – 1864)</strong> đã số hóa các quy luật logic trong cuốn sách kinh điển <em>"The Laws of Thought" (Các định luật của tư duy - 1854)</em>.
        </p>
        <div style="background: #ffffff; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #0284c7; color: #0369a1; font-size: 0.95rem;">
          <i class="fa-solid fa-microchip"></i> <strong>Ứng dụng công nghệ hiện đại:</strong> Nhờ đại số Boole, các mệnh đề Đúng (1) và Sai (0) trở thành nền tảng của hệ số nhị phân (Binary), các cổng logic điện tử, vi xử lí máy tính và toàn bộ mạng Internet toàn cầu ngày nay!
        </div>
      </div>

      <!-- MẸO CỦA THẦY SÁNG -->
      <div style="background: #fffbeb; border: 2px dashed #f59e0b; border-radius: 10px; padding: 16px 20px;">
        <div style="font-weight: 700; color: #b45309; font-size: 1rem; margin-bottom: 8px;">
          <i class="fa-solid fa-lightbulb"></i> TỔNG KẾT &amp; MẸO GHI NHỚ CỦA THS. LƯƠNG THANH SÁNG:
        </div>
        <ol style="margin: 0; padding-left: 20px; line-height: 1.8; color: #92400e;">
          <li><strong>Nhận diện mệnh đề:</strong> Câu khẳng định &rArr; Đúng hoặc Sai. Không cảm thán (!), không hỏi (?), không cầu khiến!</li>
          <li><strong>Kéo theo ($P \\Rightarrow Q$):</strong> Chỉ sai khi <em>Đúng kéo theo Sai</em>. Giả thiết sai thì mệnh đề kéo theo mặc nhiên đúng!</li>
          <li><strong>Cần và Đủ:</strong> <em>"Đầu ĐỦ, Đuôi CẦN"</em>. Trong $P \\Rightarrow Q$: $P$ là điều kiện ĐỦ, $Q$ là điều kiện CẦN.</li>
          <li><strong>Bác bỏ mệnh đề chứa $\\forall$:</strong> Muốn chứng minh mệnh đề chứa $\\forall$ là SAI, chỉ cần tìm ra <strong>duy nhất 1 phản ví dụ</strong>.</li>
          <li><strong>Phủ định có lượng từ:</strong> $\\overline{\\forall}$ thành $\\exists$; $\\overline{\\exists}$ thành $\\forall$; $\\overline{>}$ thành $\\le$; $\\overline{<}$ thành $\\ge$; $\\overline{=}$ thành $\\ne$.</li>
        </ol>
      </div>
    `
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2025 BỘ GD&ĐT)
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN IV. BÀI TẬP TRẮC NGHIỆM CỦNG CỐ (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2025 BỘ GD&ĐT)",

    // -----------------------------------------------------------------------
    // DẠNG 1: 5 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN (ĐÁP ÁN HOÁN VỊ B, D, A, C, B)
    // -----------------------------------------------------------------------
    part1MultipleChoice: [
      // Câu 1: Đáp án B
      {
        id: "mc-10-1-1",
        num: 1,
        level: "Nhận biết",
        prompt: "Trong các câu sau đây, câu nào là một <strong>mệnh đề</strong>?",
        options: [
          "A. Hôm nay trời mưa to quá!",
          "B. Số 17 là một số nguyên tố.",
          "C. Bạn đã làm xong bài tập về nhà chưa?",
          "D. Hãy giữ trật tự trong giờ học môn Toán!"
        ],
        correctIndex: 1, // B
        correctAnswer: "B",
        hint: "Mệnh đề là câu khẳng định có tính đúng hoặc sai rõ ràng.",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>- Câu A là câu cảm thán bộc lộ cảm xúc.<br>- Câu B là câu khẳng định có tính đúng sai dứt khoát (17 là số nguyên tố, đây là khẳng định đúng). Do đó câu B là một mệnh đề.<br>- Câu C là câu hỏi nghi vấn.<br>- Câu D là câu cầu khiến, mệnh lệnh.<br>&rArr; <strong>Đáp án đúng là: B.</strong>"
      },

      // Câu 2: Đáp án D
      {
        id: "mc-10-1-2",
        num: 2,
        level: "Thông hiểu",
        prompt: "Trong các mệnh đề sau đây, mệnh đề nào là mệnh đề <strong>sai</strong>?",
        options: [
          "A. Phương trình $x^2 - 4 = 0$ có hai nghiệm phân biệt trong $\\mathbb{R}$.",
          "B. Tổng số đo ba góc trong một tam giác bằng $180^\\circ$.",
          "C. Số 2 là số nguyên tố chẵn duy nhất.",
          "D. Với mọi số tự nhiên $n$, ta luôn có $n^2 > 0$."
        ],
        correctIndex: 3, // D
        correctAnswer: "D",
        hint: "Chú ý số tự nhiên nhỏ nhất là số 0.",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>- Mệnh đề A đúng vì có 2 nghiệm $x = 2$ và $x = -2$.<br>- Mệnh đề B đúng theo định lí tổng 3 góc tam giác.<br>- Mệnh đề C đúng vì 2 là số nguyên tố chẵn duy nhất.<br>- Mệnh đề D sai, vì với $n = 0 \\in \\mathbb{N}$ ta có $0^2 = 0 \\ngtr 0$. Phản ví dụ $n = 0$ bác bỏ mệnh đề D.<br>&rArr; <strong>Đáp án đúng là: D.</strong>"
      },

      // Câu 3: Đáp án A
      {
        id: "mc-10-1-3",
        num: 3,
        level: "Nhận biết",
        prompt: "Phủ định của mệnh đề $P: \"\\forall x \\in \\mathbb{R}, x^2 + 1 > 0\"$ là mệnh đề nào sau đây?",
        options: [
          "A. $\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$.",
          "B. $\\overline{P}: \"\\forall x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$.",
          "C. $\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 < 0\"$.",
          "D. $\\overline{P}: \"\\forall x \\in \\mathbb{R}, x^2 + 1 < 0\"$."
        ],
        correctIndex: 0, // A
        correctAnswer: "A",
        hint: "Phủ định của 'với mọi' là 'tồn tại', phủ định của '>' là '<='.",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Áp dụng quy tắc phủ định mệnh đề chứa lượng từ: Phủ định của $\\forall$ là $\\exists$, phủ định của bất đẳng thức nghiêm ngặt $>$ là $\\le$. Do đó: $\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$.<br>&rArr; <strong>Đáp án đúng là: A.</strong>"
      },

      // Câu 4: Đáp án C
      {
        id: "mc-10-1-4",
        num: 4,
        level: "Thông hiểu",
        prompt: "Cho hai mệnh đề: $P$: \"Tứ giác $ABCD$ là hình vuông\" và $Q$: \"Tứ giác $ABCD$ là hình thoi có hai đường chéo bằng nhau\". Khẳng định nào sau đây là <strong>đúng</strong>?",
        options: [
          "A. $P$ là điều kiện cần nhưng không đủ để có $Q$.",
          "B. $P$ là điều kiện đủ nhưng không cần để có $Q$.",
          "C. $P$ là điều kiện cần và đủ để có $Q$.",
          "D. $P$ và $Q$ không có mối quan hệ tương đương logic."
        ],
        correctIndex: 2, // C
        correctAnswer: "C",
        hint: "Dấu hiệu nhận biết hình vuông: hình thoi có 2 đường chéo bằng nhau chính là hình vuông.",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>- Chiều thuận: Nếu $ABCD$ là hình vuông thì hiển nhiên $ABCD$ là hình thoi có hai đường chéo bằng nhau ($P \\Rightarrow Q$ đúng).<br>- Chiều ngược: Nếu $ABCD$ là hình thoi có hai đường chéo bằng nhau thì $ABCD$ là hình vuông ($Q \\Rightarrow P$ đúng).<br>Do cả hai chiều đều đúng nên $P \\Leftrightarrow Q$. Vì vậy $P$ là điều kiện cần và đủ để có $Q$.<br>&rArr; <strong>Đáp án đúng là: C.</strong>"
      },

      // Câu 5: Đáp án B
      {
        id: "mc-10-1-5",
        num: 5,
        level: "Vận dụng",
        prompt: "Cho mệnh đề kéo theo: <em>\"Nếu một số tự nhiên $n$ có chữ số tận cùng là $0$ thì $n$ chia hết cho $5$\"</em>. Mệnh đề đảo của mệnh đề này là gì và có tính đúng hay sai?",
        options: [
          "A. \"Nếu $n$ chia hết cho $5$ thì $n$ có chữ số tận cùng là $0$\" và đây là mệnh đề đúng.",
          "B. \"Nếu $n$ chia hết cho $5$ thì $n$ có chữ số tận cùng là $0$\" và đây là mệnh đề sai.",
          "C. \"Nếu $n$ không chia hết cho $5$ thì $n$ không có chữ số tận cùng là $0$\" và đây là mệnh đề đúng.",
          "D. \"Nếu $n$ không có chữ số tận cùng là $0$ thì $n$ không chia hết cho $5$\" và đây là mệnh đề sai."
        ],
        correctIndex: 1, // B
        correctAnswer: "B",
        hint: "Mệnh đề đảo là đảo ngược Giả thiết và Kết luận. Thử số 15 xem sao.",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>- Mệnh đề ban đầu có dạng $P \\Rightarrow Q$ với $P$: \"$n$ tận cùng là 0\", $Q$: \"$n$ chia hết cho 5\".<br>- Mệnh đề đảo $Q \\Rightarrow P$ là: <em>\"Nếu $n$ chia hết cho $5$ thì $n$ có chữ số tận cùng là $0$\"</em>.<br>- Mệnh đề đảo này là <strong>sai</strong> vì có phản ví dụ: $n = 15$ chia hết cho $5$ nhưng chữ số tận cùng là $5$ (chứ không phải $0$).<br>&rArr; <strong>Đáp án đúng là: B.</strong>"
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 2: 3 CÂU TRẮC NGHIỆM ĐÚNG / SAI (ĐỦ 4 Ý a, b, c, d)
    // -----------------------------------------------------------------------
    part2TrueFalse: [
      // Câu 1: Về các khẳng định số học và khái niệm mệnh đề
      {
        id: "tf-10-1-1",
        num: 1,
        intro: "Xét tính đúng hoặc sai của các khẳng định sau đây về mệnh đề logic và số học:",
        items: [
          {
            statement: "a) \"Năm 2024 là năm nhuận\" là một mệnh đề đúng.",
            isCorrect: true,
            solution: "Năm 2024 chia hết cho 4 nên năm 2024 là năm nhuận (tháng 2 có 29 ngày). Đây là khẳng định đúng nên là mệnh đề đúng."
          },
          {
            statement: "b) \"$x^2 - 3x + 2 = 0$\" là một mệnh đề chứa biến.",
            isCorrect: true,
            solution: "Khẳng định chứa biến số $x$, chưa xác định đúng sai. Khi thay $x = 1$ ta được mệnh đề đúng, thay $x = 0$ ta được mệnh đề sai. Vậy đây là mệnh đề chứa biến."
          },
          {
            statement: "c) Mệnh đề phủ định của \"15 chia hết cho 3\" là \"15 chia hết cho 5\".",
            isCorrect: false,
            solution: "Phủ định của \"15 chia hết cho 3\" phải là \"15 không chia hết cho 3\" chứ không phải thay đổi số chia thành 5."
          },
          {
            statement: "d) \"Số $\\pi$ là một số hữu tỉ\" là một mệnh đề đúng.",
            isCorrect: false,
            solution: "Số $\\pi = 3{,}14159\\dots$ là số vô tỉ, không thể biểu diễn dưới dạng phân số $a/b$. Khẳng định này là một mệnh đề sai."
          }
        ]
      },

      // Câu 2: Về định lí hình học tam giác và điều kiện cần, đủ
      {
        id: "tf-10-1-2",
        num: 2,
        intro: "Cho tam giác $ABC$. Xét hai mệnh đề: $P$: \"Tam giác $ABC$ là tam giác đều\" và $Q$: \"Tam giác $ABC$ là tam giác cân có một góc bằng $60^\\circ$\".",
        items: [
          {
            statement: "a) Mệnh đề kéo theo $P \\Rightarrow Q$ là một mệnh đề đúng.",
            isCorrect: true,
            solution: "Tam giác đều thì có 3 cạnh bằng nhau (nên là tam giác cân) và 3 góc bằng $60^\\circ$. Do đó $P \\Rightarrow Q$ đúng."
          },
          {
            statement: "b) Mệnh đề đảo $Q \\Rightarrow P$ là một mệnh đề đúng.",
            isCorrect: true,
            solution: "Theo dấu hiệu nhận biết hình học lớp 7, một tam giác cân có một góc bằng $60^\\circ$ thì chắc chắn là tam giác đều. Do đó $Q \\Rightarrow P$ đúng."
          },
          {
            statement: "c) $P$ là điều kiện đủ để có $Q$.",
            isCorrect: true,
            solution: "Vì $P \\Rightarrow Q$ đúng nên $P$ là điều kiện đủ để có $Q$ (\"Đầu ĐỦ, Đuôi CẦN\")."
          },
          {
            statement: "d) $P$ không phải là điều kiện cần để có $Q$.",
            isCorrect: false,
            solution: "Vì mệnh đề đảo $Q \\Rightarrow P$ cũng đúng nên $P$ đồng thời là điều kiện cần để có $Q$. Vậy khẳng định $P$ không phải là điều kiện cần là sai."
          }
        ]
      },

      // Câu 3: Về mệnh đề có chứa lượng từ với mọi và tồn tại
      {
        id: "tf-10-1-3",
        num: 3,
        intro: "Xét các mệnh đề có chứa kí hiệu với mọi ($\\forall$) và tồn tại ($\\exists$) trong tập số thực $\\mathbb{R}$:",
        items: [
          {
            statement: "a) Mệnh đề $P: \"\\forall x \\in \\mathbb{R}, x^2 + 2 > 0\"$ là một mệnh đề đúng.",
            isCorrect: true,
            solution: "Với mọi số thực $x$, ta luôn có $x^2 \\ge 0 \\Rightarrow x^2 + 2 \\ge 2 > 0$. Vậy $P$ là mệnh đề đúng."
          },
          {
            statement: "b) Mệnh đề phủ định của $P$ là $\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 2 \\le 0\"$.",
            isCorrect: true,
            solution: "Đúng theo quy tắc phủ định lượng từ: $\\forall$ chuyển thành $\\exists$ và dấu $>$ chuyển thành $\\le$."
          },
          {
            statement: "c) Mệnh đề $Q: \"\\exists n \\in \\mathbb{N}, n^2 = 2\"$ là một mệnh đề đúng.",
            isCorrect: false,
            solution: "Phương trình $n^2 = 2$ có nghiệm $n = \\pm\\sqrt{2} \\notin \\mathbb{N}$. Do đó không tồn tại số tự nhiên $n$ nào để $n^2 = 2$. Vậy $Q$ là mệnh đề sai."
          },
          {
            statement: "d) Mệnh đề phủ định của $Q$ là $\\overline{Q}: \"\\forall n \\in \\mathbb{N}, n^2 \\ne 2\"$ là một mệnh đề đúng.",
            isCorrect: true,
            solution: "Vì mệnh đề $Q$ sai nên mệnh đề phủ định $\\overline{Q}$ chắc chắn là một mệnh đề đúng."
          }
        ]
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 3: 2 CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN THỰC TẾ
    // -----------------------------------------------------------------------
    part3ShortAnswer: [
      {
        id: "sa-10-1-1",
        num: 1,
        level: "Thông hiểu",
        prompt: "Trong các khẳng định sau đây, có tất cả bao nhiêu khẳng định là một <strong>mệnh đề đúng</strong>?<br>(1) Số 1 là số nguyên tố nhỏ nhất.<br>(2) Tứ giác có 4 cạnh bằng nhau là hình thoi.<br>(3) $\\forall x \\in \\mathbb{R}, |x| \\ge 0$.<br>(4) Số 2025 chia hết cho 3.<br>(5) Các em hãy tích cực phát biểu xây dựng bài nhé!",
        correctValue: 3,
        correctAnswer: "3",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>- Khẳng định (1) SAI, vì số nguyên tố là số tự nhiên lớn hơn 1 và chỉ có 2 ước là 1 và chính nó. Số nguyên tố nhỏ nhất là số 2.<br>- Khẳng định (2) ĐÚNG, theo định nghĩa hình thoi.<br>- Khẳng định (3) ĐÚNG, giá trị tuyệt đối của mọi số thực luôn không âm.<br>- Khẳng định (4) ĐÚNG, vì tổng các chữ số là $2 + 0 + 2 + 5 = 9$ chia hết cho 3 nên 2025 chia hết cho 3.<br>- Khẳng định (5) KHÔNG PHẢI là mệnh đề (đây là câu cầu khiến).<br>Như vậy có chính xác <strong>3 khẳng định</strong> là mệnh đề đúng (các khẳng định 2, 3, 4).<br>&rArr; <strong>Đáp số: 3.</strong>"
      },
      {
        id: "sa-10-1-2",
        num: 2,
        level: "Vận dụng",
        prompt: "Có bao nhiêu giá trị nguyên của tham số $m$ thuộc đoạn $[-3; 3]$ để mệnh đề sau là một mệnh đề đúng: <em>\"$\\forall x \\in \\mathbb{R}, x^2 - 2mx + 4 > 0$\"</em>?",
        correctValue: 3,
        correctAnswer: "3",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Tam thức bậc hai $f(x) = x^2 - 2mx + 4$ có hệ số $a = 1 > 0$.<br>Để $f(x) > 0$ đúng với mọi $x \\in \\mathbb{R}$ khi và chỉ khi biệt thức thu gọn $\\Delta' < 0$:<br>$$\\Delta' = (-m)^2 - 1 \\cdot 4 = m^2 - 4 < 0 \\Leftrightarrow -2 < m < 2.$$<br>Vì $m$ là số nguyên và $m \\in [-3; 3]$ nên $m \\in \\{-1; 0; 1\\}$.<br>Như vậy có đúng <strong>3 giá trị nguyên</strong> của $m$ thỏa mãn.<br>&rArr; <strong>Đáp số: 3.</strong>"
      }
    ]
  }
};
