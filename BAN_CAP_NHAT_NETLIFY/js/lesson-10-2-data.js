/**
 * BÀI HỌC SỐ: BÀI 2. TẬP HỢP VÀ CÁC PHÉP TOÁN TRÊN TẬP HỢP (TOÁN 10 - TẬP 1 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Tác giả biên soạn: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - PHẦN I: Lời chào Thầy Sáng + Voice AI NamMinhNeural chuẩn mực (5% tiến trình)
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 12 (5% tiến trình)
 * - PHẦN III: Tiến trình bài học đa phương tiện tương tác (70% tiến trình):
 *             + Tình huống mở đầu: Hội thảo trực tuyến CLB Lịch sử 12 thành viên (Hình 1.1 SGK trang 12)
 *             + Mục 1: Các khái niệm cơ bản về tập hợp (Mục con: a. Tập hợp; b. Tập hợp con [Vẽ biểu đồ Ven H1.2, 1.3, 1.4]; c. Hai tập hợp bằng nhau)
 *             + Mục 2: Các tập hợp số (Mục con: a. Mối quan hệ giữa các tập hợp số [Biểu đồ Ven H1.5]; b. Các tập con thường dùng của R [Vẽ bảng vàng SVG chuẩn 100% SGK], có Ví dụ 5 và Luyện tập 4)
 *             + Mục 3: Các phép toán trên tập hợp (Mục con: a. Giao của hai tập hợp [Biểu đồ Ven H1.6, Ví dụ 6 và LT5]; b. Hợp của hai tập hợp [Biểu đồ Ven H1.7, Ví dụ 7, 8 và LT6]; c. Hiệu và phần bù [Biểu đồ Ven H1.9, H1.10, Ví dụ 9, LT7 và Vận dụng])
 *             + Chốt kiến thức: Nhà toán học John Venn, công thức đếm thực tế & Mẹo của Thầy Sáng
 * - PHẦN IV: Bài tập trắc nghiệm củng cố tương tác chuẩn 3 dạng thức thi mới 2025 Bộ GD&ĐT (20% tiến trình):
 *             + Dạng 1: 5 câu trắc nghiệm nhiều lựa chọn (Hoán vị đáp án chuẩn C, A, D, B, C)
 *             + Dạng 2: 3 câu trắc nghiệm Đúng/Sai (Mỗi câu đủ 4 ý a, b, c, d = 12 ý)
 *             + Dạng 3: 2 câu trắc nghiệm Trả lời ngắn thực tế
 */

window.LESSON_10_C1_B2_DATA = {
  id: "10-c1-b2",
  grade: "10",
  gradeLabel: "Lớp 10",
  chapterId: "c10-1",
  chapter: "Chương I",
  chapterTitle: "Mệnh đề và tập hợp",
  number: "Bài 2",
  title: "Tập hợp và các phép toán trên tập hợp",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào toàn thể các em học sinh lớp 10 thân yêu! Chào mừng các em đến với Bài 2: Tập hợp và các phép toán trên tập hợp – một trong những nền tảng quan trọng nhất của toán học hiện đại. Nếu mệnh đề giúp chúng ta rèn luyện tư duy logic chính xác, thì tập hợp chính là ngôn ngữ phổ quát để gom nhóm, phân loại và xử lý mọi đối tượng toán học. Từ các tập hợp số quen thuộc như số tự nhiên, số nguyên, số thực cho đến các phép toán giao, hợp, hiệu và các khoảng, đoạn trên trục số, bài học này sẽ trang bị cho các em những công cụ đắc lực nhất để học tốt toàn bộ chương trình THPT. Thầy chúc các em có một buổi học thật hào hứng, tràn đầy năng lượng và làm chủ trọn vẹn kiến thức hôm nay!",
    audioScript: "Thầy Sáng chào toàn thể các em học sinh lớp 10 thân yêu! Chào mừng các em đến với Bài 2: Tập hợp và các phép toán trên tập hợp – một trong những nền tảng quan trọng nhất của toán học hiện đại. Nếu mệnh đề giúp chúng ta rèn luyện tư duy logic chính xác, thì tập hợp chính là ngôn ngữ phổ quát để gom nhóm, phân loại và xử lý mọi đối tượng toán học. Từ các tập hợp số quen thuộc như số tự nhiên, số nguyên, số thực cho đến các phép toán giao, hợp, hiệu và các khoảng, đoạn trên trục số, bài học này sẽ trang bị cho các em những công cụ đắc lực nhất để học tốt toàn bộ chương trình THPT. Thầy chúc các em có một buổi học thật hào hứng, tràn đầy năng lượng và làm chủ trọn vẹn kiến thức hôm nay!",
    audioUrl: "assets/audio/b10_2_welcome.mp3",
    buttonLabel: "Nghe thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 12)
  // =========================================================================
  learningGoals: [
    "Nhận biết và sử dụng đúng các khái niệm cơ bản về tập hợp: phần tử, tập con, tập hợp bằng nhau và tập hợp rỗng.",
    "Thấu hiểu mối quan hệ giữa các tập hợp số (\\(\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}\\)) và thành thạo các tập con thường dùng của \\(\\mathbb{R}\\) gồm khoảng, đoạn, nửa khoảng.",
    "Thực hiện chính xác các phép toán trên tập hợp: giao (\\(\\cap\\)), hợp (\\(\\cup\\)), hiệu (\\(\\setminus\\)) và phần bù (\\(C_S T\\)).",
    "Sử dụng thành thạo biểu đồ Ven và trục số để biểu diễn tập hợp, giải quyết các bài toán thực tiễn và câu hỏi mô hình hóa dữ liệu."
  ],
  goalsAudioUrl: "assets/audio/b10_2_goals.mp3",
  goalsAudioScript: "Phần 2. Mục tiêu và yêu cầu cần đạt của bài học. Sau bài học này, các em cần đạt được các yêu cầu trọng tâm sau đây: Thứ nhất: Nhận biết và sử dụng đúng các khái niệm cơ bản về tập hợp: phần tử, tập con, tập hợp bằng nhau và tập hợp rỗng. Thứ hai: Thấu hiểu mối quan hệ giữa các tập hợp số tự nhiên N, số nguyên Z, số hữu tỉ Q, số thực R và thành thạo các tập con thường dùng của R gồm khoảng, đoạn, nửa khoảng. Thứ ba: Thực hiện chính xác các phép toán trên tập hợp: giao, hợp, hiệu và phần bù. Thứ tư: Sử dụng thành thạo biểu đồ Ven và trục số để biểu diễn tập hợp, giải quyết các bài toán thực tiễn và câu hỏi mô hình hóa dữ liệu.",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================

  // --- TÌNH HUỐNG MỞ ĐẦU (HOOK) ---
  hook: {
    title: "Tình huống mở đầu: Hội thảo trực tuyến CLB Lịch sử",
    storyHtml: "Câu lạc bộ Lịch sử của một trường THPT có 12 thành viên (không có hai bạn nào trùng tên), tổ chức hai chuyên đề thảo luận trên phần mềm họp trực tuyến. Tên các thành viên tham gia mỗi chuyên đề được hiển thị trên màn hình:<br>• <b>Chuyên đề 1:</b> Nam, Hương, Chi, Tú, Bình, Ngân, Khánh.<br>• <b>Chuyên đề 2:</b> Hương, Chi, Tú, Khánh, Bình, Hân, Hiền, Lam.<br><div class='alert-box alert-question mt-3' style='text-align:justify;'><b>Câu hỏi suy nghĩ:</b> Bạn An băn khoăn: <i>'Có bao nhiêu thành viên tham gia cả hai chuyên đề? Và có bao nhiêu thành viên của CLB vắng mặt trong cả hai chuyên đề nhỉ?'</i> Hãy cùng Thầy Sáng dùng ngôn ngữ Tập hợp để tìm câu trả lời chính xác nhất!</div>",
    situation: "Câu lạc bộ Lịch sử của một trường THPT có 12 thành viên (không có hai bạn nào trùng tên), tổ chức hai chuyên đề thảo luận trên phần mềm họp trực tuyến. Tên các thành viên tham gia mỗi chuyên đề được hiển thị trên màn hình:<br>• <b>Chuyên đề 1:</b> Nam, Hương, Chi, Tú, Bình, Ngân, Khánh.<br>• <b>Chuyên đề 2:</b> Hương, Chi, Tú, Khánh, Bình, Hân, Hiền, Lam.<br><div class='alert-box alert-question mt-3' style='text-align:justify;'><b>Câu hỏi suy nghĩ:</b> Bạn An băn khoăn: <i>'Có bao nhiêu thành viên tham gia cả hai chuyên đề? Và có bao nhiêu thành viên của CLB vắng mặt trong cả hai chuyên đề nhỉ?'</i> Hãy cùng Thầy Sáng dùng ngôn ngữ Tập hợp để tìm câu trả lời chính xác nhất!</div>",
    illustrationSvg: `<div class="p-3 bg-light rounded border text-center my-3">
      <div class="fw-bold text-primary mb-2">HÌNH 1.1: GIAO DIỆN HỌP TRỰC TUYẾN HAI CHUYÊN ĐỀ LỊCH SỬ</div>
      <svg viewBox="0 0 860 330" style="max-width: 100%; height: auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <defs>
          <linearGradient id="screenGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#1e3c72"/>
            <stop offset="100%" stop-color="#2a5298"/>
          </linearGradient>
          <linearGradient id="screenGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#2c3e50"/>
            <stop offset="100%" stop-color="#4ca1af"/>
          </linearGradient>
          <filter id="shadowBox" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" flood-opacity="0.25"/>
          </filter>
        </defs>

        <!-- Màn hình 1: Chuyên đề 1 -->
        <g filter="url(#shadowBox)">
          <!-- Khung viền màn hình máy tính -->
          <rect x="30" y="20" width="360" height="230" rx="12" fill="#111827" stroke="#374151" stroke-width="3"/>
          <rect x="42" y="32" width="336" height="206" rx="6" fill="url(#screenGrad1)"/>
          
          <!-- Chân đế máy tính -->
          <path d="M 190 250 L 170 290 L 250 290 L 230 250 Z" fill="#4b5563"/>
          <rect x="140" y="290" width="140" height="12" rx="4" fill="#374151"/>

          <!-- Tiêu đề màn hình 1 -->
          <rect x="120" y="42" width="180" height="26" rx="13" fill="#ffffff" fill-opacity="0.9"/>
          <text x="210" y="59" fill="#1e3c72" font-size="13" font-weight="bold" text-anchor="middle">CHUYÊN ĐỀ 1 (7 bạn)</text>

          <!-- 7 thẻ avatar học sinh -->
          <!-- Hàng 1 -->
          <g transform="translate(60, 85)">
            <rect width="85" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="20" cy="19" r="12" fill="#ef4444"/>
            <text x="20" y="23" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">N</text>
            <text x="52" y="23" fill="#1f2937" font-size="12" font-weight="bold">Nam</text>
          </g>
          <g transform="translate(165, 85)">
            <rect width="85" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="20" cy="19" r="12" fill="#f59e0b"/>
            <text x="20" y="23" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">H</text>
            <text x="50" y="23" fill="#1f2937" font-size="12" font-weight="bold">Hương</text>
          </g>
          <g transform="translate(270, 85)">
            <rect width="85" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="20" cy="19" r="12" fill="#10b981"/>
            <text x="20" y="23" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">C</text>
            <text x="52" y="23" fill="#1f2937" font-size="12" font-weight="bold">Chi</text>
          </g>

          <!-- Hàng 2 -->
          <g transform="translate(60, 135)">
            <rect width="85" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="20" cy="19" r="12" fill="#6366f1"/>
            <text x="20" y="23" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">T</text>
            <text x="52" y="23" fill="#1f2937" font-size="12" font-weight="bold">Tú</text>
          </g>
          <g transform="translate(165, 135)">
            <rect width="85" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="20" cy="19" r="12" fill="#ec4899"/>
            <text x="20" y="23" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">B</text>
            <text x="52" y="23" fill="#1f2937" font-size="12" font-weight="bold">Bình</text>
          </g>
          <g transform="translate(270, 135)">
            <rect width="85" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="20" cy="19" r="12" fill="#8b5cf6"/>
            <text x="20" y="23" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">N</text>
            <text x="50" y="23" fill="#1f2937" font-size="12" font-weight="bold">Ngân</text>
          </g>

          <!-- Hàng 3 (Khánh) -->
          <g transform="translate(165, 185)">
            <rect width="85" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="20" cy="19" r="12" fill="#06b6d4"/>
            <text x="20" y="23" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">K</text>
            <text x="50" y="23" fill="#1f2937" font-size="12" font-weight="bold">Khánh</text>
          </g>
        </g>

        <!-- Phần giữa: Nhân vật suy nghĩ câu hỏi -->
        <g transform="translate(430, 80)">
          <!-- Bong bóng thoại -->
          <path d="M -25 -50 Q -35 -50 -35 -20 Q -35 15 -10 15 L 0 35 L 10 15 Q 35 15 35 -20 Q 35 -50 25 -50 Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <!-- Nội dung thoại -->
          <rect x="-70" y="-70" width="140" height="70" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <path d="M -10 0 L 0 20 L 10 0 Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="0" y="-48" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">Có bao nhiêu bạn</text>
          <text x="0" y="-32" fill="#b45309" font-size="11" font-weight="bold" text-anchor="middle">vắng mặt trong</text>
          <text x="0" y="-16" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">cả 2 chuyên đề?</text>

          <!-- Đầu học sinh biểu cảm -->
          <circle cx="0" cy="65" r="28" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
          <!-- Tóc -->
          <path d="M -26 55 Q 0 25 26 55 Q 0 40 -26 55 Z" fill="#451a03"/>
          <!-- Mắt & Miệng suy nghĩ -->
          <circle cx="-10" cy="62" r="3" fill="#1f2937"/>
          <circle cx="10" cy="62" r="3" fill="#1f2937"/>
          <path d="M -6 78 Q 0 74 6 78" stroke="#78350f" stroke-width="2" fill="none"/>
          <!-- Bàn tay chống cằm -->
          <ellipse cx="14" cy="88" rx="8" ry="6" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
          <!-- Thân áo -->
          <path d="M -25 93 Q 0 98 25 93 L 32 150 L -32 150 Z" fill="#3b82f6"/>
        </g>

        <!-- Màn hình 2: Chuyên đề 2 -->
        <g filter="url(#shadowBox)">
          <!-- Khung viền màn hình máy tính -->
          <rect x="470" y="20" width="360" height="230" rx="12" fill="#111827" stroke="#374151" stroke-width="3"/>
          <rect x="482" y="32" width="336" height="206" rx="6" fill="url(#screenGrad2)"/>
          
          <!-- Chân đế máy tính -->
          <path d="M 630 250 L 610 290 L 690 290 L 670 250 Z" fill="#4b5563"/>
          <rect x="580" y="290" width="140" height="12" rx="4" fill="#374151"/>

          <!-- Tiêu đề màn hình 2 -->
          <rect x="560" y="42" width="180" height="26" rx="13" fill="#ffffff" fill-opacity="0.9"/>
          <text x="650" y="59" fill="#2c3e50" font-size="13" font-weight="bold" text-anchor="middle">CHUYÊN ĐỀ 2 (8 bạn)</text>

          <!-- 8 thẻ avatar học sinh -->
          <!-- Hàng 1 -->
          <g transform="translate(500, 85)">
            <rect width="72" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="17" cy="19" r="11" fill="#f59e0b"/>
            <text x="17" y="23" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">H</text>
            <text x="44" y="23" fill="#1f2937" font-size="11" font-weight="bold">Hương</text>
          </g>
          <g transform="translate(580, 85)">
            <rect width="72" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="17" cy="19" r="11" fill="#10b981"/>
            <text x="17" y="23" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">C</text>
            <text x="45" y="23" fill="#1f2937" font-size="11" font-weight="bold">Chi</text>
          </g>
          <g transform="translate(660, 85)">
            <rect width="72" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="17" cy="19" r="11" fill="#6366f1"/>
            <text x="17" y="23" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">T</text>
            <text x="45" y="23" fill="#1f2937" font-size="11" font-weight="bold">Tú</text>
          </g>
          <g transform="translate(740, 85)">
            <rect width="72" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="17" cy="19" r="11" fill="#06b6d4"/>
            <text x="17" y="23" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">K</text>
            <text x="44" y="23" fill="#1f2937" font-size="11" font-weight="bold">Khánh</text>
          </g>

          <!-- Hàng 2 -->
          <g transform="translate(500, 140)">
            <rect width="72" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="17" cy="19" r="11" fill="#ec4899"/>
            <text x="17" y="23" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">B</text>
            <text x="45" y="23" fill="#1f2937" font-size="11" font-weight="bold">Bình</text>
          </g>
          <g transform="translate(580, 140)">
            <rect width="72" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="17" cy="19" r="11" fill="#14b8a6"/>
            <text x="17" y="23" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">H</text>
            <text x="45" y="23" fill="#1f2937" font-size="11" font-weight="bold">Hân</text>
          </g>
          <g transform="translate(660, 140)">
            <rect width="72" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="17" cy="19" r="11" fill="#a855f7"/>
            <text x="17" y="23" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">H</text>
            <text x="45" y="23" fill="#1f2937" font-size="11" font-weight="bold">Hiền</text>
          </g>
          <g transform="translate(740, 140)">
            <rect width="72" height="38" rx="6" fill="#ffffff" fill-opacity="0.85"/>
            <circle cx="17" cy="19" r="11" fill="#e11d48"/>
            <text x="17" y="23" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">L</text>
            <text x="45" y="23" fill="#1f2937" font-size="11" font-weight="bold">Lam</text>
          </g>
        </g>
      </svg>
      <div class="small text-muted mt-2">Mô hình họp trực tuyến hai chuyên đề của CLB Lịch sử 12 thành viên (SGK Kết nối tri thức trang 12).</div>
    </div>`,
    checkpoints: [
      {
        id: "poi-10-2-hook-1",
        time: 20,
        title: "Giây 20: Tương tác bài toán dẫn nhập Họp trực tuyến",
        question: "Dựa vào hai màn hình phòng họp trực tuyến ở tình huống mở đầu, có bao nhiêu bạn học sinh tham gia <strong>cả hai</strong> chuyên đề Toán học và Tin học?",
        options: [
          "3 bạn",
          "8 bạn",
          "5 bạn (Hương, Chi, Tú, Bình, Khánh)",
          "10 bạn"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        hint: "Em hãy quan sát những cái tên cùng xuất hiện ở cả danh sách phòng A và danh sách phòng B.",
        explain: "Chính xác! Có 5 bạn học sinh tham gia cả hai chuyên đề là: Hương, Chi, Tú, Bình, Khánh. Trong toán học, tập hợp gồm 5 bạn này chính là giao của hai tập hợp học sinh hai phòng!"
      }
    ],
    audioUrl: "assets/audio/b10_2_hook.mp3",
    audioScript: "Phần 3. Tiến trình bài học. Tình huống mở đầu. Các em hãy quan sát giao diện họp trực tuyến của Câu lạc bộ Lịch sử trên màn hình. Câu lạc bộ có tất cả 12 thành viên, tổ chức hai chuyên đề thảo luận trực tuyến. Chuyên đề một có 7 bạn tham gia: Nam, Hương, Chi, Tú, Bình, Ngân, Khánh. Chuyên đề hai có 8 bạn tham gia: Hương, Chi, Tú, Khánh, Bình, Hân, Hiền, Lam. Bạn An thắc mắc: Có bao nhiêu thành viên tham gia cả hai chuyên đề, và có bao nhiêu thành viên của câu lạc bộ vắng mặt trong cả hai chuyên đề? Để giải quyết bài toán thực tế thú vị này, chúng ta sẽ cùng bước vào tìm hiểu ngôn ngữ Tập hợp và các phép toán giao, hợp, hiệu ngay sau đây!",
    poiTime: 20,
    poiPrompt: "Em hãy quan sát nhanh hai màn hình và cho biết: Có bao nhiêu bạn học sinh tham gia ở cả hai chuyên đề?",
    poiAnswer: "Có 5 bạn tham gia cả hai chuyên đề là: Hương, Chi, Tú, Bình, Khánh."
  },

  // =========================================================================
  // MỤC 1, 2, 3 TRONG TIẾN TRÌNH BÀI HỌC (CHIA RÕ CÁC MỤC CON)
  // =========================================================================
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1: CÁC KHÁI NIỆM CƠ BẢN VỀ TẬP HỢP
    // -----------------------------------------------------------------------
    {
      id: "10-c1-b2-s1",
      num: "1",
      title: "Các khái niệm cơ bản về tập hợp",
      audioUrl: "assets/audio/b10_2_sec1.mp3",
      audioScript: "Mục 1. Các khái niệm cơ bản về tập hợp. Mục này gồm ba nội dung chính: a. Tập hợp; b. Tập hợp con; và c. Hai tập hợp bằng nhau. Trong tiểu mục a, các em cần nhớ: Một tập hợp thường được kí hiệu bằng chữ cái in hoa như A, B, C, S. Mỗi đối tượng trong tập hợp gọi là một phần tử. Kí hiệu x thuộc S nghĩa là x là phần tử của S. Kí hiệu x không thuộc S nghĩa là x không phải là phần tử của S. Ta có hai cách mô tả tập hợp: Cách một là liệt kê các phần tử; cách hai là chỉ ra tính chất đặc trưng. Số phần tử của tập S được kí hiệu là n mở ngoặc S đóng ngoặc. Tập hợp không chứa phần tử nào được gọi là tập hợp rỗng, kí hiệu là chữ O gạch chéo. Sang tiểu mục b, tập hợp con: Nếu mọi phần tử của tập hợp T đều là phần tử của tập hợp S thì ta nói T là tập hợp con của S, kí hiệu T chứa trong S. Quy ước: Tập rỗng là tập con của mọi tập hợp. Người ta thường dùng đường cong kín, gọi là biểu đồ Ven, để minh họa trực quan tập con. Ở tiểu mục c: Hai tập hợp S và T được gọi là bằng nhau nếu mỗi phần tử của T cũng là phần tử của S và ngược lại, kí hiệu S bằng T.",
      checkpoints: [
        {
          id: "poi-10-2-sec1-1",
          time: 25,
          title: "Giây 25: Tương tác khái niệm Tập hợp con",
          question: "Cho tập hợp $S = \\{x \\in \\mathbb{N} \\mid x \\le 5\\}$. Số phần tử của $S$ là $n(S)$ và khẳng định nào sau đây là <strong>đúng</strong>?",
          options: [
            "$n(S) = 5$ và $\\{0; 1\\} \\in S$",
            "$n(S) = 6$ và $\\{1; 2; 3\\} \\subset S$",
            "$n(S) = 6$ và $6 \\in S$",
            "$n(S) = 5$ và $\\varnothing \\not\\subset S$"
          ],
          correctIndex: 1,
          correctAnswer: "B",
          hint: "Tập các số tự nhiên không vượt quá 5 bắt đầu từ 0 đến 5. Phân biệt kí hiệu phần tử thuộc (∈) và tập hợp con con (⊂).",
          explain: "Chính xác! Tập $S = \\{0; 1; 2; 3; 4; 5\\}$ có 6 phần tử nên $n(S) = 6$. Tập $\\{1; 2; 3\\}$ là một tập hợp gồm các phần tử đều thuộc $S$, nên $\\{1; 2; 3\\} \\subset S$ là khẳng định hoàn toàn chính xác!"
        }
      ],
      subsections: [
        // --- 1a. TẬP HỢP ---
        {
          key: "a",
          title: "Tập hợp",
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Khái niệm <b>tập hợp</b> (thường gọi tắt là <b>tập</b>) là một khái niệm cơ bản của toán học, không định nghĩa mà được hiểu thông qua các ví dụ thực tế như tập hợp học sinh lớp 10, tập hợp các số tự nhiên...</p>
            
            <div class="card mb-3 border-info">
              <div class="card-header bg-info text-white fw-bold">1. Phần tử và kí hiệu thuộc / không thuộc</div>
              <div class="card-body">
                <p>• Đối tượng tạo nên tập hợp được gọi là <b>phần tử</b> của tập hợp đó. Ta thường dùng các chữ cái in hoa \\(A, B, C, S, X...\\) để đặt tên tập hợp và chữ cái in thường \\(a, b, c, x, y...\\) để biểu diễn các phần tử.</p>
                <p>• Kí hiệu \\(a \\in S\\): Đọc là <i>"\\(a\\) thuộc \\(S\\)"</i> hoặc <i>"\\(a\\) là phần tử của \\(S\\)"</i>.</p>
                <p>• Kí hiệu \\(a \\notin S\\): Đọc là <i>"\\(a\\) không thuộc \\(S\\)"</i> hoặc <i>"\\(a\\) không phải là phần tử của \\(S\\)"</i>.</p>
              </div>
            </div>

            <div class="card mb-3 border-primary">
              <div class="card-header bg-primary text-white fw-bold">2. Hai cách mô tả tập hợp (SGK trang 13)</div>
              <div class="card-body">
                <p>Để xác định một tập hợp, người ta thường dùng một trong hai cách sau:</p>
                <ul>
                  <li><b>Cách 1 (Liệt kê phần tử):</b> Viết các phần tử của tập hợp trong dấu ngoặc nhọn \\(\\{\\dots\\}\\), phân cách bởi dấu chấm phẩy (;). Mỗi phần tử chỉ được liệt kê một lần, thứ tự liệt kê tùy ý.<br>
                  <i>Ví dụ:</i> \\(A = \\{\\text{Nam}; \\text{Hương}; \\text{Chi}; \\text{Tú}; \\text{Bình}; \\text{Ngân}; \\text{Khánh}\\}\\).</li>
                  <li><b>Cách 2 (Nêu tính chất đặc trưng):</b> Chỉ ra một hoặc nhiều tính chất mà tất cả các phần tử của tập hợp đều thỏa mãn và chỉ có chúng mới thỏa mãn.<br>
                  <i>Ví dụ:</i> \\(B = \\{x \\in \\mathbb{R} \\mid x^2 - 4 = 0\\}\\) hoặc \\(C = \\{n \\in \\mathbb{N} \\mid n \\text{ là số chẵn}, n < 10\\}\\).</li>
                </ul>
              </div>
            </div>

            <div class="card mb-3 border-warning">
              <div class="card-header bg-warning text-dark fw-bold">3. Số phần tử và Tập hợp rỗng</div>
              <div class="card-body">
                <p>• Số phần tử của tập hợp \\(S\\) hữu hạn được kí hiệu là \\(n(S)\\). Chẳng hạn tập hợp \\(A\\) ở Chuyên đề 1 có 7 phần tử, ta viết: \\(n(A) = 7\\).</p>
                <p>• <b>Định nghĩa Tập rỗng:</b> Tập hợp không chứa phần tử nào được gọi là <b>tập rỗng</b>, kí hiệu là \\(\\varnothing\\).<br>
                <i>Ví dụ:</i> Tập hợp các nghiệm thực của phương trình \\(x^2 + 1 = 0\\) là tập rỗng vì phương trình vô nghiệm trên \\(\\mathbb{R}\\), ta viết: \\(S = \\varnothing\\). Do đó \\(n(\\varnothing) = 0\\).</p>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 1 (SGK TRANG 13) & LỜI GIẢI CHI TIẾT CỦA THẦY SÁNG:</div>
              <p><b>Đề bài:</b> Cho tập hợp \\(D = \\{n \\in \\mathbb{N} \\mid n \\text{ là số nguyên tố}, 5 < n < 20\\}\\).</p>
              <p>a) Viết tập hợp \\(D\\) bằng cách liệt kê các phần tử. Tập hợp \\(D\\) có bao nhiêu phần tử?</p>
              <p>b) Dùng kí hiệu \\(\\in, \\notin\\) để viết câu trả lời cho câu hỏi sau: Trong các số \\(5; 12; 17; 18\\), số nào thuộc tập \\(D\\), số nào không thuộc tập \\(D\\)?</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>a) Các số nguyên tố lớn hơn 5 và nhỏ hơn 20 là: \\(7, 11, 13, 17, 19\\).<br>
              Do đó: \\(D = \\{7; 11; 13; 17; 19\\}\\). Tập hợp \\(D\\) có 5 phần tử, tức là \\(n(D) = 5\\).</p>
              <p>b) Ta có: \\(5 \\notin D; \\quad 12 \\notin D; \\quad 17 \\in D; \\quad 18 \\notin D\\).</p>
            </div>

            <div class="alert-box alert-info">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 1 (SGK TRANG 13):</div>
              <p>Gọi \\(S\\) là tập nghiệm của phương trình \\(x^2 - 24x + 143 = 0\\). Các mệnh đề sau đúng hay sai?</p>
              <p>a) \\(13 \\in S\\); &nbsp;&nbsp;&nbsp;&nbsp; b) \\(11 \\notin S\\); &nbsp;&nbsp;&nbsp;&nbsp; c) \\(n(S) = 2\\).</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b> Giải phương trình bậc hai \\(x^2 - 24x + 143 = 0\\), ta được hai nghiệm là \\(x = 11\\) và \\(x = 13\\). Do đó tập nghiệm là \\(S = \\{11; 13\\}\\).<br>
              • Mệnh đề a) Đúng vì \\(13 \\in S\\).<br>
              • Mệnh đề b) Sai vì \\(11\\) là nghiệm nên \\(11 \\in S\\).<br>
              • Mệnh đề c) Đúng vì \\(S\\) có 2 phần tử nên \\(n(S) = 2\\).</p>
            </div>
          </div>`
        },

        // --- 1b. TẬP HỢP CON ---
        {
          key: "b",
          title: "Tập hợp con",
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <div class="card mb-3 border-primary">
              <div class="card-header bg-primary text-white fw-bold">1. Định nghĩa tập hợp con (SGK trang 14)</div>
              <div class="card-body">
                <p>Nếu mọi phần tử của tập hợp \\(T\\) đều là phần tử của tập hợp \\(S\\) thì ta nói \\(T\\) là một <b>tập hợp con</b> (gọi tắt là <b>tập con</b>) của \\(S\\), kí hiệu là \\(T \\subset S\\) (đọc là <i>"\\(T\\) chứa trong \\(S\\)"</i> hoặc <i>"\\(T\\) là tập con của \\(S\\)"</i>).</p>
                <p>Ta cũng có thể viết \\(S \\supset T\\) (đọc là <i>"\\(S\\) chứa \\(T\\)"</i>).</p>
                <p>• Dưới dạng mệnh đề logic: \\(T \\subset S \\Leftrightarrow (\\forall x, x \\in T \\Rightarrow x \\in S)\\).</p>
                <p>• Nếu \\(T\\) không phải là tập con của \\(S\\), ta kí hiệu \\(T \\not\\subset S\\).</p>
                <p>• <b>Quy ước quan trọng:</b> Tập rỗng là tập con của mọi tập hợp, tức là \\(\\varnothing \\subset S\\) với mọi tập hợp \\(S\\).</p>
              </div>
            </div>

            <!-- HÌNH MINH HỌA BIỂU ĐỒ VEN TẬP CON (HÌNH 1.2, 1.3, 1.4 SGK) -->
            <div class="p-3 bg-light rounded border text-center my-3">
              <div class="fw-bold text-primary mb-2">HÌNH MINH HỌA BIỂU ĐỒ VEN (VENN DIAGRAM) VỀ TẬP CON</div>
              <svg viewBox="0 0 840 260" style="max-width: 100%; height: auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                <!-- HÌNH 1.2: Tập S -->
                <g transform="translate(30, 20)">
                  <ellipse cx="90" cy="90" rx="80" ry="55" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
                  <text x="35" y="65" fill="#0369a1" font-size="16" font-weight="bold">S</text>
                  <text x="90" y="180" fill="#334155" font-size="13" font-weight="bold" text-anchor="middle">Hình 1.2: Tập hợp S</text>
                </g>

                <!-- HÌNH 1.3: T là tập con của S (T ⊂ S) -->
                <g transform="translate(240, 20)">
                  <ellipse cx="110" cy="90" rx="95" ry="65" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
                  <text x="40" y="60" fill="#0369a1" font-size="16" font-weight="bold">S</text>
                  
                  <ellipse cx="130" cy="95" rx="55" ry="38" fill="#bae6fd" stroke="#0ea5e9" stroke-width="2"/>
                  <text x="130" y="100" fill="#0284c7" font-size="15" font-weight="bold" text-anchor="middle">T</text>

                  <text x="110" y="180" fill="#334155" font-size="13" font-weight="bold" text-anchor="middle">Hình 1.3: Minh họa T ⊂ S</text>
                </g>

                <!-- HÌNH 1.4: Minh họa Ví dụ 2 với S = {2; 3; 5} -->
                <!-- Nhánh 1: S1 = {3} ⊂ S -->
                <g transform="translate(470, 10)">
                  <ellipse cx="60" cy="85" rx="55" ry="50" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
                  <text x="20" y="55" fill="#0f172a" font-size="13" font-weight="bold">S</text>
                  <text x="45" y="75" fill="#0284c7" font-size="13" font-weight="bold">2</text>
                  <text x="45" y="115" fill="#0284c7" font-size="13" font-weight="bold">5</text>
                  
                  <ellipse cx="80" cy="90" rx="22" ry="18" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
                  <text x="80" y="94" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle">3</text>
                  <text x="105" y="105" fill="#dc2626" font-size="12" font-weight="bold">S₁</text>
                  
                  <text x="60" y="160" fill="#16a34a" font-size="12" font-weight="bold" text-anchor="middle">S₁ ⊂ S (Đúng)</text>
                </g>

                <!-- Nhánh 2: S2 = {0; 2} không con S -->
                <g transform="translate(600, 10)">
                  <ellipse cx="60" cy="95" rx="55" ry="45" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
                  <text x="20" y="70" fill="#0f172a" font-size="13" font-weight="bold">S</text>
                  <text x="45" y="120" fill="#0284c7" font-size="13" font-weight="bold">5</text>
                  <text x="80" y="110" fill="#0284c7" font-size="13" font-weight="bold">3</text>

                  <!-- S2 giao cắt đưa 0 ra ngoài -->
                  <ellipse cx="60" cy="55" rx="35" ry="30" fill="#fee2e2" stroke="#ef4444" stroke-width="2" fill-opacity="0.6"/>
                  <text x="60" y="45" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle">0</text>
                  <text x="60" y="78" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle">2</text>
                  <text x="100" y="45" fill="#dc2626" font-size="12" font-weight="bold">S₂</text>

                  <text x="60" y="160" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">S₂ ⊄ S (Vì 0 ∉ S)</text>
                </g>

                <!-- Nhánh 3: S3 = {3; 5} ⊂ S -->
                <g transform="translate(730, 10)">
                  <ellipse cx="50" cy="85" rx="50" ry="50" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
                  <text x="15" y="55" fill="#0f172a" font-size="13" font-weight="bold">S</text>
                  <text x="35" y="80" fill="#0284c7" font-size="13" font-weight="bold">2</text>
                  
                  <ellipse cx="65" cy="95" rx="28" ry="32" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
                  <text x="65" y="85" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle">3</text>
                  <text x="65" y="115" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle">5</text>
                  <text x="96" y="90" fill="#dc2626" font-size="12" font-weight="bold">S₃</text>

                  <text x="50" y="160" fill="#16a34a" font-size="12" font-weight="bold" text-anchor="middle">S₃ ⊂ S (Đúng)</text>
                </g>
              </svg>
              <div class="small text-muted mt-1">Hình 1.4 (SGK trang 14): Trực quan hóa quan hệ tập con bằng biểu đồ Ven của nhà toán học John Venn.</div>
            </div>

            <div class="alert-box alert-success">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 2 (SGK TRANG 14) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Cho tập hợp \\(S = \\{2; 3; 5\\}\\). Những tập hợp nào sau đây là tập con của \\(S\\)?</p>
              <p class="text-center">\\(S_1 = \\{3\\}; \\qquad S_2 = \\{0; 2\\}; \\qquad S_3 = \\{3; 5\\}\\).</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>• Tập hợp \\(S_1 = \\{3\\}\\) chỉ chứa phần tử 3, mà \\(3 \\in S\\) nên \\(S_1 \\subset S\\).</p>
              <p>• Tập hợp \\(S_2 = \\{0; 2\\}\\) có phần tử \\(0 \\notin S\\) nên \\(S_2\\) không phải là tập con của \\(S\\) (\\(S_2 \\not\\subset S\\)).</p>
              <p>• Tập hợp \\(S_3 = \\{3; 5\\}\\) có cả hai phần tử \\(3, 5\\) đều thuộc \\(S\\) nên \\(S_3 \\subset S\\).</p>
              <p class="fst-italic text-primary">💡 <b>Mẹo Thầy Sáng:</b> Một tập hợp có \\(n\\) phần tử thì có tất cả \\(2^n\\) tập hợp con (kể cả tập rỗng \\(\\varnothing\\) và chính nó)! Ví dụ tập \\(S = \\{2; 3; 5\\}\\) có 3 phần tử thì có \\(2^3 = 8\\) tập con.</p>
            </div>
          </div>`
        },

        // --- 1c. HAI TẬP HỢP BẰNG NHAU ---
        {
          key: "c",
          title: "Hai tập hợp bằng nhau",
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <div class="card mb-3 border-success">
              <div class="card-header bg-success text-white fw-bold">1. Định nghĩa hai tập hợp bằng nhau (SGK trang 14)</div>
              <div class="card-body">
                <p>Hai tập hợp \\(S\\) và \\(T\\) được gọi là <b>bằng nhau</b> nếu mỗi phần tử của \\(T\\) cũng là phần tử của tập hợp \\(S\\) và ngược lại. Kí hiệu là \\(S = T\\).</p>
                <div class="p-2 bg-light rounded border text-center fw-bold text-primary my-2" style="font-size:16px;">
                  \\(S = T \\Longleftrightarrow (S \\subset T \\text{ và } T \\subset S)\\)
                </div>
                <p class="mb-0">Nói cách khác, hai tập hợp bằng nhau khi và chỉ khi chúng chứa hoàn toàn các phần tử giống hệt nhau.</p>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 3 (SGK TRANG 14) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Cho hai tập hợp:</p>
              <p class="text-center">\\(C = \\{n \\in \\mathbb{N} \\mid n \\text{ là bội chung của 2 và 3}; n < 30\\}\\);</p>
              <p class="text-center">\\(D = \\{n \\in \\mathbb{N} \\mid n \\text{ là bội của 6}; n < 30\\}\\).</p>
              <p>Chứng minh rằng \\(C = D\\).</p>
              <hr>
              <p><b>Lời giải của Thầy Sáng:</b></p>
              <p>• Một số tự nhiên vừa là bội của 2 vừa là bội của 3 khi và chỉ khi nó là bội của \\(\\text{BCNN}(2, 3) = 6\\).</p>
              <p>• Liệt kê các phần tử nhỏ hơn 30 của hai tập hợp:</p>
              <p class="text-center">\\(C = \\{0; 6; 12; 18; 24\\}\\); &nbsp;&nbsp;&nbsp;&nbsp; \\(D = \\{0; 6; 12; 18; 24\\}\\).</p>
              <p>Vì mọi phần tử của \\(C\\) đều thuộc \\(D\\) và mọi phần tử của \\(D\\) đều thuộc \\(C\\) nên \\(C \\subset D\\) và \\(D \\subset C\\). Do đó: \\(C = D\\) (đpcm).</p>
            </div>

            <div class="alert-box alert-info">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 2 (SGK TRANG 15):</div>
              <p>Giả sử \\(C\\) là tập hợp các hình bình hành có hai đường chéo vuông góc; \\(D\\) là tập hợp các hình vuông. Các mệnh đề sau đúng hay sai?</p>
              <p class="text-center">a) \\(C \\subset D\\); &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) \\(C \\supset D\\); &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c) \\(C = D\\).</p>
              <hr>
              <p><b>Lời giải chi tiết:</b></p>
              <p>• Theo tính chất hình học: Hình bình hành có hai đường chéo vuông góc chính là <b>hình thoi</b>. Vậy \\(C\\) là tập hợp tất cả các hình thoi.</p>
              <p>• Mỗi hình vuông đều là một hình thoi đặc biệt (có 1 góc vuông), nên mọi phần tử của \\(D\\) đều thuộc \\(C\\). Do đó \\(D \\subset C\\) (tức là \\(C \\supset D\\)).</p>
              <p>• Ngược lại, một hình thoi chưa chắc đã là hình vuông (nếu nó không có góc vuông), nên \\(C \\not\\subset D\\).</p>
              <p><b>Kết luận:</b> Mệnh đề a) <b>Sai</b>; Mệnh đề b) <b>Đúng</b>; Mệnh đề c) <b>Sai</b>.</p>
            </div>
          </div>`
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2: CÁC TẬP HỢP SỐ
    // -----------------------------------------------------------------------
    {
      id: "10-c1-b2-s2",
      num: "2",
      title: "Các tập hợp số",
      audioUrl: "assets/audio/b10_2_sec2.mp3",
      audioScript: "Mục 2. Các tập hợp số. Mục này gồm hai nội dung trọng tâm: a. Mối quan hệ giữa các tập hợp số; và b. Các tập con thường dùng của tập số thực R. Trong tiểu mục a, các em nhớ lại: Tập số tự nhiên N là tập con của tập số nguyên Z. Tập số nguyên Z là tập con của tập số hữu tỉ Q. Và tập số hữu tỉ Q là tập con của tập số thực R. Mối quan hệ này được biểu diễn lồng nhau: N con Z, Z con Q, Q con R. Ở tiểu mục b: Các tập con thường dùng của R gồm có khoảng, đoạn và nửa khoảng. Kí hiệu dương vô cực và âm vô cực biểu diễn độ lớn vô hạn. Đoạn từ a đến b lấy cả hai đầu mút a và b, dùng ngoặc vuông. Khoảng từ a đến b không lấy hai đầu mút, dùng ngoặc tròn. Nửa khoảng lấy một đầu mút ngoặc vuông và bỏ đầu mút ngoặc tròn. Trong Ví dụ 5, tập hợp C gồm các số thực lớn hơn hoặc bằng 2 và nhỏ hơn hoặc bằng 7 được viết là đoạn từ vuông 2 đến vuông 7. Tập hợp D gồm các số thực nhỏ hơn 2 được viết là khoảng từ âm vô cực đến tròn 2. Các em hãy chú ý quan sát bảng vàng minh họa trực quan trên màn hình!",
      checkpoints: [
        {
          id: "poi-10-2-sec2-1",
          time: 30,
          title: "Giây 30: Tương tác quy ước các khoảng, đoạn, nửa khoảng",
          question: "Kí hiệu $[a; b)$ được định nghĩa như thế nào và cách biểu diễn hình học trên trục số ra sao?",
          options: [
            "Đoạn $[a; b) = \\{x \\in \\mathbb{R} \\mid a < x < b\\}$, dùng ngoặc tròn tại cả hai đầu mút.",
            "Nửa khoảng $[a; b) = \\{x \\in \\mathbb{R} \\mid a \\le x < b\\}$, dùng ngoặc vuông $[$ tại $a$, ngoặc tròn $)$ tại $b$, gạch bỏ phần ngoài.",
            "Khoảng $[a; b) = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$, dùng ngoặc vuông tại cả hai đầu mút.",
            "Nửa khoảng $[a; b) = \\{x \\in \\mathbb{R} \\mid a < x \\le b\\}$, dùng ngoặc tròn $($ tại $a$, ngoặc vuông $]$ tại $b$."
          ],
          correctIndex: 1,
          correctAnswer: "B",
          hint: "Mút vuông ứng với dấu có dấu bằng (≤), mút tròn ứng với dấu bất đẳng thức ngặt (<).",
          explain: "Chính xác! $[a; b)$ là nửa khoảng lấy từ $a$ đến $b$, trong đó $x$ có thể bằng $a$ (ngoặc vuông $[$) nhưng phải nhỏ hơn hẳn $b$ (ngoặc tròn $)$). Trên trục số ta gạch bỏ các số nhỏ hơn $a$ và các số lớn hơn hoặc bằng $b$."
        }
      ],
      subsections: [
        // --- 2a. MỐI QUAN HỆ GIỮA CÁC TẬP HỢP SỐ ---
        {
          key: "a",
          title: "Mối quan hệ giữa các tập hợp số",
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Ở các lớp dưới, chúng ta đã lần lượt học các tập hợp số cơ bản:</p>
            <ul>
              <li><b>Tập hợp các số tự nhiên:</b> \\(\\mathbb{N} = \\{0; 1; 2; 3; 4; \\dots\\}\\) và tập các số tự nhiên khác 0: \\(\\mathbb{N}^* = \\{1; 2; 3; \\dots\\}\\).</li>
              <li><b>Tập hợp các số nguyên:</b> Gồm các số tự nhiên và các số nguyên âm: \\(\\mathbb{Z} = \\{\\dots; -3; -2; -1; 0; 1; 2; 3; \\dots\\}\\).</li>
              <li><b>Tập hợp các số hữu tỉ:</b> \\(\\mathbb{Q}\\) gồm các số viết được dưới dạng phân số \\(\\dfrac{a}{b}\\) với \\(a, b \\in \\mathbb{Z}, b \\neq 0\\). Số hữu tỉ còn được biểu diễn dưới dạng số thập phân hữu hạn hoặc vô hạn tuần hoàn.</li>
              <li><b>Tập hợp các số thực:</b> \\(\\mathbb{R}\\) gồm các số hữu tỉ và các số vô tỉ (số thập phân vô hạn không tuần hoàn như \\(\\pi, \sqrt{2}, \sqrt{3}...\\)).</li>
            </ul>

            <div class="card mb-3 border-warning">
              <div class="card-header bg-warning text-dark fw-bold">Mối quan hệ bao hàm giữa các tập hợp số (SGK trang 15)</div>
              <div class="card-body text-center">
                <div class="fw-bold text-danger my-2" style="font-size:18px;">
                  \\(\\mathbb{N}^* \\subset \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}\\)
                </div>
                <p class="text-muted mb-0">Mọi số tự nhiên đều là số nguyên; mọi số nguyên đều là số hữu tỉ; và mọi số hữu tỉ đều là số thực.</p>
              </div>
            </div>

            <!-- HÌNH 1.5: SƠ ĐỒ VEN LỒNG NHAU CÁC TẬP HỢP SỐ -->
            <div class="p-3 bg-light rounded border text-center my-3">
              <div class="fw-bold text-primary mb-2">HÌNH 1.5: BIỂU ĐỒ VEN MỐI QUAN HỆ CÁC TẬP HỢP SỐ</div>
              <svg viewBox="0 0 620 280" style="max-width: 100%; height: auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                <!-- Vòng R (ngoài cùng) -->
                <ellipse cx="310" cy="140" rx="280" ry="125" fill="#ffedd5" stroke="#ea580c" stroke-width="3"/>
                <text x="80" y="80" fill="#c2410c" font-size="22" font-weight="bold">ℝ</text>
                <text x="130" y="230" fill="#9a3412" font-size="12" font-style="italic">Tập số thực</text>

                <!-- Vòng Q -->
                <ellipse cx="360" cy="145" rx="210" ry="105" fill="#fef3c7" stroke="#d97706" stroke-width="2.5"/>
                <text x="180" y="105" fill="#b45309" font-size="20" font-weight="bold">ℚ</text>
                <text x="210" y="210" fill="#78350f" font-size="11" font-style="italic">Số hữu tỉ</text>

                <!-- Vòng Z -->
                <ellipse cx="410" cy="150" rx="145" ry="80" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
                <text x="290" y="130" fill="#15803d" font-size="18" font-weight="bold">ℤ</text>
                <text x="310" y="195" fill="#14532d" font-size="11" font-style="italic">Số nguyên</text>

                <!-- Vòng N -->
                <ellipse cx="465" cy="155" rx="75" ry="55" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
                <text x="465" y="162" fill="#0369a1" font-size="18" font-weight="bold" text-anchor="middle">ℕ</text>
                <text x="465" y="185" fill="#075985" font-size="10" font-style="italic" text-anchor="middle">Số tự nhiên</text>
              </svg>
              <div class="small text-muted mt-1">Sơ đồ Venn các tập hợp số lồng nhau: \\(\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}\\) (SGK trang 15).</div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 4 (SGK TRANG 15) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Hãy xác định tính đúng sai của các mệnh đề sau:</p>
              <p class="text-center">a) \\(3,274 \\in \\mathbb{Q}\\); &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) \\(\sqrt{2} \\in \\mathbb{R}\\); &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c) \\(\\dfrac{3}{4} \\in \\mathbb{Z}\\).</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>a) \\(3,274 = \\dfrac{3274}{1000}\\) là số thập phân hữu hạn nên \\(3,274 \\in \\mathbb{Q}\\). Mệnh đề <b>Đúng</b>.</p>
              <p>b) \\(\sqrt{2} \\approx 1,41421356...\\) là số vô tỉ, mà số vô tỉ là số thực nên \\(\sqrt{2} \\in \\mathbb{R}\\). Mệnh đề <b>Đúng</b>.</p>
              <p>c) \\(\\dfrac{3}{4} = 0,75\\) không phải là số nguyên nên \\(\\dfrac{3}{4} \\notin \\mathbb{Z}\\). Mệnh đề <b>Sai</b>.</p>
            </div>

            <div class="alert-box alert-info">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 3 (SGK TRANG 15):</div>
              <p>Cho tập hợp \\(C = \\{-4; 0; 1; 2\\}\\). Các mệnh đề sau đúng hay sai?</p>
              <p class="text-center">a) \\(C\\) là tập con của \\(\\mathbb{Z}\\); &nbsp;&nbsp;&nbsp;&nbsp; b) \\(C\\) là tập con của \\(\\mathbb{N}\\); &nbsp;&nbsp;&nbsp;&nbsp; c) \\(C\\) là tập con của \\(\\mathbb{R}\\).</p>
              <hr>
              <p><b>Lời giải:</b><br>
              • a) Đúng vì tất cả các phần tử \\(-4, 0, 1, 2\\) đều là số nguyên.<br>
              • b) Sai vì phần tử \\(-4\\) không phải là số tự nhiên (\\(-4 \\notin \\mathbb{N}\\)).<br>
              • c) Đúng vì mọi số nguyên đều là số thực, nên \\(C \\subset \\mathbb{R}\\).</p>
            </div>
          </div>`
        },

        // --- 2b. CÁC TẬP CON THƯỜNG DÙNG CỦA R ---
        {
          key: "b",
          title: "Các tập con thường dùng của R",
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <p>Trong giải tích và toán học phổ thông, ta thường xuyên làm việc với các tập con của tập số thực \\(\\mathbb{R}\\) gồm: <b>khoảng</b>, <b>đoạn</b> và <b>nửa khoảng</b>.</p>

            <!-- BẢNG VÀNG SVG CHUẨN 100% THEO ẢNH ĐÍNH KÈM CỦA THẦY SÁNG -->
            <div class="my-4 text-center">
              <div class="fw-bold text-primary mb-2" style="font-size:16px;">BẢNG TỔNG HỢP CÁC TẬP CON THƯỜNG DÙNG CỦA TẬP SỐ THỰC \\(\\mathbb{R}\\) (CHUẨN SGK TRANG 16)</div>
              
              <div style="background-color: #fef5e4; border: 2px solid #e2b97f; border-radius: 14px; padding: 18px 22px; box-shadow: 0 4px 15px rgba(0,0,0,0.06); max-width: 820px; margin: 0 auto; text-align: left;">
                
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <div style="font-size: 17px; font-weight: bold; color: #333;">Một số tập con thường dùng của tập số thực \\(\\mathbb{R}\\):</div>
                  <div style="background: #e0f2fe; border: 1px solid #7dd3fc; border-radius: 8px; padding: 6px 12px; font-size: 12px; color: #0369a1;">
                    <b>Kí hiệu:</b> \\(+\\infty\\) (dương vô cực); \\(-\\infty\\) (âm vô cực)<br>
                    \\(a, b\\) gọi là các <b>đầu mút</b>.
                  </div>
                </div>

                <svg viewBox="0 0 760 520" style="width: 100%; height: auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                  <defs>
                    <!-- Mũi tên trục số -->
                    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#333"/>
                    </marker>
                    <!-- Mẫu gạch sọc chéo bỏ phần ngoài ///// -->
                    <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="8" stroke="#555" stroke-width="1.2"/>
                    </pattern>
                  </defs>

                  <!-- ================= 1. KHOẢNG ================= -->
                  <text x="10" y="24" fill="#111" font-size="15" font-weight="bold" font-style="italic">• Khoảng</text>

                  <!-- Dòng 1: (a; b) -->
                  <g transform="translate(0, 32)">
                    <text x="15" y="24" fill="#222" font-size="14">(a; b) = {x ∈ ℝ | a &lt; x &lt; b}</text>
                    <!-- Trục số -->
                    <line x1="360" y1="20" x2="720" y2="20" stroke="#222" stroke-width="1.5" marker-end="url(#arrow)"/>
                    <!-- Gạch chéo x < a -->
                    <rect x="360" y="13" width="105" height="14" fill="url(#hatch)"/>
                    <!-- Ngoặc mút a: ( -->
                    <text x="465" y="26" fill="#0284c7" font-size="20" font-weight="bold">(</text>
                    <text x="466" y="42" fill="#0284c7" font-size="13" font-weight="bold">a</text>
                    <!-- Ngoặc mút b: ) -->
                    <text x="585" y="26" fill="#0284c7" font-size="20" font-weight="bold">)</text>
                    <text x="586" y="42" fill="#0284c7" font-size="13" font-weight="bold">b</text>
                    <!-- Gạch chéo x > b -->
                    <rect x="596" y="13" width="115" height="14" fill="url(#hatch)"/>
                  </g>

                  <!-- Dòng 2: (a; +∞) -->
                  <g transform="translate(0, 80)">
                    <text x="15" y="24" fill="#222" font-size="14">(a; +∞) = {x ∈ ℝ | x &gt; a}</text>
                    <line x1="360" y1="20" x2="720" y2="20" stroke="#222" stroke-width="1.5" marker-end="url(#arrow)"/>
                    <!-- Gạch chéo x <= a -->
                    <rect x="360" y="13" width="105" height="14" fill="url(#hatch)"/>
                    <text x="465" y="26" fill="#0284c7" font-size="20" font-weight="bold">(</text>
                    <text x="466" y="42" fill="#0284c7" font-size="13" font-weight="bold">a</text>
                  </g>

                  <!-- Dòng 3: (-∞; b) -->
                  <g transform="translate(0, 128)">
                    <text x="15" y="24" fill="#222" font-size="14">(-∞; b) = {x ∈ ℝ | x &lt; b}</text>
                    <line x1="360" y1="20" x2="720" y2="20" stroke="#222" stroke-width="1.5" marker-end="url(#arrow)"/>
                    <text x="585" y="26" fill="#0284c7" font-size="20" font-weight="bold">)</text>
                    <text x="586" y="42" fill="#0284c7" font-size="13" font-weight="bold">b</text>
                    <!-- Gạch chéo x >= b -->
                    <rect x="596" y="13" width="115" height="14" fill="url(#hatch)"/>
                  </g>

                  <!-- Dòng 4: (-∞; +∞) -->
                  <g transform="translate(0, 176)">
                    <text x="15" y="24" fill="#222" font-size="14">(-∞; +∞)</text>
                    <line x1="360" y1="20" x2="720" y2="20" stroke="#222" stroke-width="1.5" marker-end="url(#arrow)"/>
                    <line x1="520" y1="14" x2="520" y2="26" stroke="#0284c7" stroke-width="2"/>
                    <text x="520" y="42" fill="#0284c7" font-size="13" font-weight="bold" text-anchor="middle">O</text>
                  </g>

                  <!-- ================= 2. ĐOẠN ================= -->
                  <text x="10" y="238" fill="#111" font-size="15" font-weight="bold" font-style="italic">• Đoạn</text>

                  <!-- Dòng 5: [a; b] -->
                  <g transform="translate(0, 246)">
                    <text x="15" y="24" fill="#222" font-size="14">[a; b] = {x ∈ ℝ | a ≤ x ≤ b}</text>
                    <line x1="360" y1="20" x2="720" y2="20" stroke="#222" stroke-width="1.5" marker-end="url(#arrow)"/>
                    <rect x="360" y="13" width="105" height="14" fill="url(#hatch)"/>
                    <text x="465" y="25" fill="#0284c7" font-size="18" font-weight="bold">[</text>
                    <text x="466" y="42" fill="#0284c7" font-size="13" font-weight="bold">a</text>
                    <text x="585" y="25" fill="#0284c7" font-size="18" font-weight="bold">]</text>
                    <text x="586" y="42" fill="#0284c7" font-size="13" font-weight="bold">b</text>
                    <rect x="595" y="13" width="116" height="14" fill="url(#hatch)"/>
                  </g>

                  <!-- ================= 3. NỬA KHOẢNG ================= -->
                  <text x="10" y="306" fill="#111" font-size="15" font-weight="bold" font-style="italic">• Nửa khoảng</text>

                  <!-- Dòng 6: [a; b) -->
                  <g transform="translate(0, 314)">
                    <text x="15" y="24" fill="#222" font-size="14">[a; b) = {x ∈ ℝ | a ≤ x &lt; b}</text>
                    <line x1="360" y1="20" x2="720" y2="20" stroke="#222" stroke-width="1.5" marker-end="url(#arrow)"/>
                    <rect x="360" y="13" width="105" height="14" fill="url(#hatch)"/>
                    <text x="465" y="25" fill="#0284c7" font-size="18" font-weight="bold">[</text>
                    <text x="466" y="42" fill="#0284c7" font-size="13" font-weight="bold">a</text>
                    <text x="585" y="26" fill="#0284c7" font-size="20" font-weight="bold">)</text>
                    <text x="586" y="42" fill="#0284c7" font-size="13" font-weight="bold">b</text>
                    <rect x="596" y="13" width="115" height="14" fill="url(#hatch)"/>
                  </g>

                  <!-- Dòng 7: (a; b] -->
                  <g transform="translate(0, 362)">
                    <text x="15" y="24" fill="#222" font-size="14">(a; b] = {x ∈ ℝ | a &lt; x ≤ b}</text>
                    <line x1="360" y1="20" x2="720" y2="20" stroke="#222" stroke-width="1.5" marker-end="url(#arrow)"/>
                    <rect x="360" y="13" width="105" height="14" fill="url(#hatch)"/>
                    <text x="465" y="26" fill="#0284c7" font-size="20" font-weight="bold">(</text>
                    <text x="466" y="42" fill="#0284c7" font-size="13" font-weight="bold">a</text>
                    <text x="585" y="25" fill="#0284c7" font-size="18" font-weight="bold">]</text>
                    <text x="586" y="42" fill="#0284c7" font-size="13" font-weight="bold">b</text>
                    <rect x="595" y="13" width="116" height="14" fill="url(#hatch)"/>
                  </g>

                  <!-- Dòng 8: [a; +∞) -->
                  <g transform="translate(0, 410)">
                    <text x="15" y="24" fill="#222" font-size="14">[a; +∞) = {x ∈ ℝ | x ≥ a}</text>
                    <line x1="360" y1="20" x2="720" y2="20" stroke="#222" stroke-width="1.5" marker-end="url(#arrow)"/>
                    <rect x="360" y="13" width="105" height="14" fill="url(#hatch)"/>
                    <text x="465" y="25" fill="#0284c7" font-size="18" font-weight="bold">[</text>
                    <text x="466" y="42" fill="#0284c7" font-size="13" font-weight="bold">a</text>
                  </g>

                  <!-- Dòng 9: (-∞; b] -->
                  <g transform="translate(0, 458)">
                    <text x="15" y="24" fill="#222" font-size="14">(-∞; b] = {x ∈ ℝ | x ≤ b}</text>
                    <line x1="360" y1="20" x2="720" y2="20" stroke="#222" stroke-width="1.5" marker-end="url(#arrow)"/>
                    <text x="585" y="25" fill="#0284c7" font-size="18" font-weight="bold">]</text>
                    <text x="586" y="42" fill="#0284c7" font-size="13" font-weight="bold">b</text>
                    <rect x="595" y="13" width="116" height="14" fill="url(#hatch)"/>
                  </g>
                </svg>
              </div>
            </div>

            <!-- TRÌNH BÀY VÍ DỤ 5 (SGK TRANG 16) CÓ LỜI GIẢI CHI TIẾT CỦA THẦY SÁNG -->
            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2" style="font-size:16px;">📌 VÍ DỤ 5 (SGK TRANG 16) & LỜI GIẢI CHI TIẾT CỦA THẦY SÁNG:</div>
              <p><b>Đề bài:</b> Viết các tập hợp sau dưới dạng các khoảng, đoạn, nửa khoảng trong \\(\\mathbb{R}\\) rồi biểu diễn chúng trên trục số:</p>
              <p class="text-center">\\(C = \\{x \\in \\mathbb{R} \\mid 2 \\le x \\le 7\\}; \\qquad D = \\{x \\in \\mathbb{R} \\mid x < 2\\}\\).</p>
              <hr>
              <p><b>Lời giải chi tiết:</b></p>
              <p>• Tập hợp \\(C\\) gồm các số thực lớn hơn hoặc bằng 2 và nhỏ hơn hoặc bằng 7. Do đó \\(C\\) là một <b>đoạn</b>, ta viết:</p>
              <div class="p-2 bg-white rounded border text-center text-primary fw-bold my-2" style="font-size:16px;">
                \\(C = [2; 7]\\)
              </div>
              <p>Biểu diễn trên trục số: Đặt ngoặc vuông \\([\\) tại điểm 2 và ngoặc vuông \\(]\\) tại điểm 7. Gạch bỏ tất cả các phần tử nằm ngoài đoạn \\([2; 7]\\) (tức là phần \\(x < 2\\) và \\(x > 7\\)):</p>
              
              <div class="text-center my-2">
                <svg viewBox="0 0 500 65" style="max-width: 420px; height: auto;">
                  <line x1="20" y1="30" x2="470" y2="30" stroke="#222" stroke-width="1.8" marker-end="url(#arrow)"/>
                  <rect x="20" y="21" width="130" height="18" fill="url(#hatch)"/>
                  <text x="150" y="36" fill="#0284c7" font-size="22" font-weight="bold">[</text>
                  <text x="152" y="55" fill="#0284c7" font-size="14" font-weight="bold">2</text>
                  <text x="330" y="36" fill="#0284c7" font-size="22" font-weight="bold">]</text>
                  <text x="332" y="55" fill="#0284c7" font-size="14" font-weight="bold">7</text>
                  <rect x="342" y="21" width="120" height="18" fill="url(#hatch)"/>
                </svg>
              </div>

              <p class="mt-3">• Tập hợp \\(D\\) gồm các số thực nhỏ hơn 2 (không lấy điểm 2). Do đó \\(D\\) là một <b>khoảng</b> vô hạn về bên trái, ta viết:</p>
              <div class="p-2 bg-white rounded border text-center text-primary fw-bold my-2" style="font-size:16px;">
                \\(D = (-\\infty; 2)\\)
              </div>
              <p>Biểu diễn trên trục số: Đặt ngoặc tròn \\()\\) tại điểm 2. Gạch bỏ phần bên phải điểm 2 (tức là phần \\(x \\ge 2\\)):</p>

              <div class="text-center my-2">
                <svg viewBox="0 0 500 65" style="max-width: 420px; height: auto;">
                  <line x1="20" y1="30" x2="470" y2="30" stroke="#222" stroke-width="1.8" marker-end="url(#arrow)"/>
                  <text x="210" y="38" fill="#0284c7" font-size="24" font-weight="bold">)</text>
                  <text x="212" y="56" fill="#0284c7" font-size="14" font-weight="bold">2</text>
                  <rect x="224" y="21" width="238" height="18" fill="url(#hatch)"/>
                </svg>
              </div>
            </div>

            <!-- LUYỆN TẬP 4 (SGK TRANG 16) -->
            <div class="alert-box alert-info">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 4 (SGK TRANG 16): GHÉP ĐÔI THÍCH HỢP</div>
              <p>Hãy ghép mỗi dòng ở cột bên trái với một dòng thích hợp ở cột bên phải:</p>
              <div class="row">
                <div class="col-md-6">
                  <div class="p-2 bg-white rounded border mb-2"><b>1)</b> \\(x \\in [2; 5]\\)</div>
                  <div class="p-2 bg-white rounded border mb-2"><b>2)</b> \\(x \\in (2; 5]\\)</div>
                  <div class="p-2 bg-white rounded border mb-2"><b>3)</b> \\(x \\in [7; +\\infty)\\)</div>
                  <div class="p-2 bg-white rounded border mb-2"><b>4)</b> \\(x \\in (7; 10)\\)</div>
                </div>
                <div class="col-md-6">
                  <div class="p-2 bg-white rounded border mb-2"><b>a)</b> \\(2 < x \\le 5\\)</div>
                  <div class="p-2 bg-white rounded border mb-2"><b>b)</b> \\(x \\ge 7\\)</div>
                  <div class="p-2 bg-white rounded border mb-2"><b>c)</b> \\(7 < x < 10\\)</div>
                  <div class="p-2 bg-white rounded border mb-2"><b>d)</b> \\(2 \\le x \\le 5\\)</div>
                  <div class="p-2 bg-light text-muted rounded border mb-2"><b>e)</b> \\(2 \\le x < 5\\) (dư)</div>
                </div>
              </div>
              <hr>
              <p class="mb-0"><b>Đáp án ghép nối chuẩn của Thầy Sáng:</b><br>
              • <b>1 ghép với d:</b> Vì \\([2; 5]\\) là đoạn lấy cả hai đầu mút: \\(2 \\le x \\le 5\\).<br>
              • <b>2 ghép với a:</b> Vì \\((2; 5]\\) là nửa khoảng bỏ mút 2 và lấy mút 5: \\(2 < x \\le 5\\).<br>
              • <b>3 ghép với b:</b> Vì \\([7; +\\infty)\\) là nửa khoảng lấy mút 7 kéo dài vô hạn: \\(x \\ge 7\\).<br>
              • <b>4 ghép với c:</b> Vì \\((7; 10)\\) là khoảng không lấy hai đầu mút: \\(7 < x < 10\\).</p>
            </div>
          </div>`
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3: CÁC PHÉP TOÁN TRÊN TẬP HỢP
    // -----------------------------------------------------------------------
    {
      id: "10-c1-b2-s3",
      num: "3",
      title: "Các phép toán trên tập hợp",
      audioUrl: "assets/audio/b10_2_sec3.mp3",
      audioScript: "Mục 3. Các phép toán trên tập hợp. Mục này gồm ba nội dung then chốt: a. Giao của hai tập hợp; b. Hợp của hai tập hợp; và c. Hiệu của hai tập hợp và phần bù. Cả ba mục con này đều được minh họa trực quan sinh động bằng biểu đồ Ven. Trong tiểu mục a, Giao của hai tập hợp S và T là tập hợp gồm tất cả các phần tử vừa thuộc S vừa thuộc T, kí hiệu là S giao T. Trên biểu đồ Ven Hình 1.6, phần giao được tô màu đỏ nổi bật. Trong Ví dụ 6, giao của hai tập rời rạc C và D là tập gồm hai số 4 và 27. Giao của nửa khoảng từ vuông 1 đến dương vô cực và nửa khoảng từ âm vô cực đến vuông 3 chính là đoạn từ vuông 1 đến vuông 3. Sang tiểu mục b, Hợp của hai tập hợp S và T là tập hợp gồm tất cả các phần tử thuộc S hoặc thuộc T, kí hiệu là S hợp T. Trên biểu đồ Ven Hình 1.7, toàn bộ vùng của cả hai hình tròn được tô màu xanh lá mạ. Ví dụ 8 đã giải quyết trọn vẹn bài toán mở đầu: có 10 bạn tham gia ít nhất một chuyên đề, do đó có đúng 2 thành viên của câu lạc bộ vắng mặt trong cả hai chuyên đề. Cuối cùng ở tiểu mục c, Hiệu của S và T là tập hợp gồm các phần tử thuộc S nhưng không thuộc T, kí hiệu S trừ T, được biểu diễn bởi phần hình trăng khuyết màu xanh lam trên Hình 1.9. Khi T là tập con của S, hiệu S trừ T được gọi là phần bù của T trong S, kí hiệu C chỉ số S của T, biểu diễn bởi hình vành khăn trên Hình 1.10. Bài toán vận dụng khảo sát thể thao cho chúng ta công thức thực tế quan trọng: số phần tử của A hợp B bằng số phần tử của A cộng số phần tử của B trừ đi số phần tử của A giao B.",
      checkpoints: [
        {
          id: "poi-10-2-sec3-1",
          time: 35,
          title: "Giây 35: Tương tác phép toán giao và hợp trên tập số",
          question: "Cho hai tập hợp $A = [0; 4]$ và $B = (2; 6)$. Giao $A \\cap B$ và Hợp $A \\cup B$ lần lượt là:",
          options: [
            "$A \\cap B = (2; 4]$ và $A \\cup B = [0; 6)$",
            "$A \\cap B = [0; 6)$ và $A \\cup B = (2; 4]$",
            "$A \\cap B = [2; 4]$ và $A \\cup B = (0; 6)$",
            "$A \\cap B = (2; 4)$ và $A \\cup B = [0; 6]$"
          ],
          correctIndex: 0,
          correctAnswer: "A",
          hint: "Giao lấy phần chung (vừa thuộc A vừa thuộc B), Hợp lấy tất cả các phần tử thuộc ít nhất một trong hai tập.",
          explain: "Chính xác! Với $A = [0; 4]$ và $B = (2; 6)$:<br>• $x \\in A \\cap B \\Leftrightarrow 0 \\le x \\le 4$ và $2 < x < 6 \\Leftrightarrow 2 < x \\le 4 \\Rightarrow A \\cap B = (2; 4]$.<br>• $x \\in A \\cup B \\Leftrightarrow x \\in [0; 4]$ hoặc $x \\in (2; 6) \\Rightarrow A \\cup B = [0; 6)$."
        }
      ],
      subsections: [
        // --- 3a. GIAO CỦA HAI TẬP HỢP ---
        {
          key: "a",
          title: "Giao của hai tập hợp",
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <div class="card mb-3 border-danger">
              <div class="card-header bg-danger text-white fw-bold">1. Định nghĩa phép giao (SGK trang 17)</div>
              <div class="card-body">
                <p>Tập hợp gồm các phần tử thuộc cả hai tập hợp \\(S\\) và \\(T\\) gọi là <b>giao của hai tập hợp</b> \\(S\\) và \\(T\\), kí hiệu là \\(S \\cap T\\).</p>
                <div class="p-2 bg-light rounded border text-center text-danger fw-bold my-2" style="font-size:16px;">
                  \\(S \\cap T = \\{x \\mid x \\in S \\text{ và } x \\in T\\}\\)
                </div>
                <p class="mb-0">Tức là: \\(x \\in S \\cap T \\Longleftrightarrow (x \\in S \\text{ và } x \\in T)\\).</p>
              </div>
            </div>

            <!-- HÌNH 1.6 BIỂU ĐỒ VEN PHÉP GIAO S ∩ T -->
            <div class="p-3 bg-light rounded border text-center my-3">
              <div class="fw-bold text-danger mb-2">HÌNH 1.6: BIỂU ĐỒ VEN MINH HỌA GIAO CỦA HAI TẬP HỢP (S ∩ T)</div>
              <svg viewBox="0 0 520 220" style="max-width: 100%; height: auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                <defs>
                  <!-- Vùng giao cắt của hai elip S và T -->
                  <clipPath id="clipS">
                    <ellipse cx="210" cy="110" rx="110" ry="75"/>
                  </clipPath>
                </defs>
                
                <!-- Elip S bên trái -->
                <ellipse cx="210" cy="110" rx="110" ry="75" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
                <text x="140" y="115" fill="#1e293b" font-size="18" font-weight="bold">S</text>

                <!-- Elip T bên phải -->
                <ellipse cx="310" cy="110" rx="110" ry="75" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
                <text x="380" y="115" fill="#1e293b" font-size="18" font-weight="bold">T</text>

                <!-- Vùng giao S ∩ T tô màu đỏ rực rỡ -->
                <ellipse cx="310" cy="110" rx="110" ry="75" fill="#ef4444" fill-opacity="0.9" clip-path="url(#clipS)"/>

                <!-- Chú thích nhãn S ∩ T -->
                <text x="260" y="35" fill="#dc2626" font-size="18" font-weight="bold" text-anchor="middle">S ∩ T</text>
                <path d="M 260 42 L 260 75" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow)"/>
              </svg>
              <div class="small text-muted mt-1">Phần màu đỏ biểu diễn các phần tử chung vừa thuộc \\(S\\) vừa thuộc \\(T\\) (SGK trang 17).</div>
            </div>

            <!-- TRÌNH BÀY VÍ DỤ 6 (SGK TRANG 17) CÓ LỜI GIẢI CHI TIẾT CỦA THẦY SÁNG -->
            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2" style="font-size:16px;">📌 VÍ DỤ 6 (SGK TRANG 17) & LỜI GIẢI CHI TIẾT CỦA THẦY SÁNG:</div>
              <p><b>Đề bài:</b></p>
              <p>a) Cho hai tập hợp \\(C = \\{4; 7; 27\\}\\) và \\(D = \\{2; 4; 9; 27; 36\\}\\). Hãy xác định tập hợp \\(C \\cap D\\).</p>
              <p>b) Cho hai tập hợp \\(E = [1; +\\infty)\\) và \\(F = (-\\infty; 3]\\). Hãy xác định tập hợp \\(E \\cap F\\).</p>
              <hr>
              <p><b>Lời giải chi tiết:</b></p>
              <p>a) Xét các phần tử chung của hai tập hợp \\(C\\) và \\(D\\): Ta thấy cả hai tập hợp đều cùng chứa hai phần tử là 4 và 27.<br>
              Do đó giao của hai tập hợp \\(C\\) và \\(D\\) là:</p>
              <div class="p-2 bg-white rounded border text-center text-danger fw-bold my-2" style="font-size:16px;">
                \\(C \\cap D = \\{4; 27\\}\\)
              </div>

              <p class="mt-3">b) Xét hai tập con của \\(\\mathbb{R}\\): \\(E = [1; +\\infty)\\) và \\(F = (-\\infty; 3]\\).<br>
              Giao của \\(E\\) và \\(F\\) là tập hợp các số thực \\(x\\) thỏa mãn đồng thời: \\(x \\ge 1\\) và \\(x \\le 3\\), tức là \\(1 \\le x \\le 3\\). Do đó:</p>
              <div class="p-2 bg-white rounded border text-center text-danger fw-bold my-2" style="font-size:16px;">
                \\(E \\cap F = [1; +\\infty) \\cap (-\\infty; 3] = [1; 3]\\)
              </div>
              <p><b>Biểu diễn trực quan bằng 3 trục số tìm giao (SGK trang 17):</b></p>
              <div class="text-center my-2">
                <svg viewBox="0 0 620 180" style="max-width: 560px; height: auto;">
                  <!-- Trục 1: [1; +∞) -->
                  <g transform="translate(0, 10)">
                    <text x="10" y="24" fill="#333" font-size="13" font-weight="bold">[1; +∞)</text>
                    <line x1="120" y1="20" x2="580" y2="20" stroke="#222" stroke-width="1.8" marker-end="url(#arrow)"/>
                    <rect x="120" y="11" width="130" height="18" fill="url(#hatch)"/>
                    <text x="250" y="26" fill="#0284c7" font-size="20" font-weight="bold">[</text>
                    <text x="252" y="44" fill="#0284c7" font-size="13" font-weight="bold">1</text>
                  </g>
                  
                  <!-- Trục 2: (-∞; 3] -->
                  <g transform="translate(0, 65)">
                    <text x="10" y="24" fill="#333" font-size="13" font-weight="bold">(-∞; 3]</text>
                    <line x1="120" y1="20" x2="580" y2="20" stroke="#222" stroke-width="1.8" marker-end="url(#arrow)"/>
                    <text x="390" y="26" fill="#0284c7" font-size="20" font-weight="bold">]</text>
                    <text x="392" y="44" fill="#0284c7" font-size="13" font-weight="bold">3</text>
                    <rect x="402" y="11" width="168" height="18" fill="url(#hatch)"/>
                  </g>

                  <!-- Trục 3: Kết quả giao [1; 3] -->
                  <g transform="translate(0, 120)">
                    <text x="10" y="24" fill="#dc2626" font-size="13" font-weight="bold">[1; +∞) ∩ (-∞; 3] = [1; 3]</text>
                    <line x1="220" y1="20" x2="580" y2="20" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow)"/>
                    <rect x="220" y="11" width="30" height="18" fill="url(#hatch)"/>
                    <text x="250" y="26" fill="#dc2626" font-size="20" font-weight="bold">[</text>
                    <text x="252" y="44" fill="#dc2626" font-size="13" font-weight="bold">1</text>
                    <text x="390" y="26" fill="#dc2626" font-size="20" font-weight="bold">]</text>
                    <text x="392" y="44" fill="#dc2626" font-size="13" font-weight="bold">3</text>
                    <rect x="402" y="11" width="168" height="18" fill="url(#hatch)"/>
                  </g>
                </svg>
              </div>
            </div>

            <div class="alert-box alert-info">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 5 (SGK TRANG 17):</div>
              <p>Cho các tập hợp \\(C = [1; 5]\\) và \\(D = [-2; 3]\\). Hãy xác định tập hợp \\(C \\cap D\\).</p>
              <hr>
              <p><b>Lời giải:</b><br>
              Phần tử \\(x \\in C \\cap D\\) khi và chỉ khi \\(1 \\le x \\le 5\\) và \\(-2 \\le x \\le 3\\).<br>
              Kết hợp hai điều kiện trên: \\(\\max(1, -2) \\le x \\le \\min(5, 3) \\Longleftrightarrow 1 \\le x \\le 3\\).<br>
              Vậy \\(C \\cap D = [1; 3]\\).</p>
            </div>
          </div>`
        },

        // --- 3b. HỢP CỦA HAI TẬP HỢP ---
        {
          key: "b",
          title: "Hợp của hai tập hợp",
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <div class="card mb-3 border-success">
              <div class="card-header bg-success text-white fw-bold">1. Định nghĩa phép hợp (SGK trang 17)</div>
              <div class="card-body">
                <p>Tập hợp gồm các phần tử thuộc tập hợp \\(S\\) hoặc thuộc tập hợp \\(T\\) gọi là <b>hợp của hai tập hợp</b> \\(S\\) và \\(T\\), kí hiệu là \\(S \\cup T\\).</p>
                <div class="p-2 bg-light rounded border text-center text-success fw-bold my-2" style="font-size:16px;">
                  \\(S \\cup T = \\{x \\mid x \\in S \\text{ hoặc } x \\in T\\}\\)
                </div>
                <p class="mb-0">Tức là: \\(x \\in S \\cup T \\Longleftrightarrow (x \\in S \\text{ hoặc } x \\in T)\\).</p>
              </div>
            </div>

            <!-- HÌNH 1.7 BIỂU ĐỒ VEN PHÉP HỢP S ∪ T -->
            <div class="p-3 bg-light rounded border text-center my-3">
              <div class="fw-bold text-success mb-2">HÌNH 1.7: BIỂU ĐỒ VEN MINH HỌA HỢP CỦA HAI TẬP HỢP (S ∪ T)</div>
              <svg viewBox="0 0 520 220" style="max-width: 100%; height: auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                <!-- Toàn bộ hai elip tô màu xanh lá mạ -->
                <ellipse cx="210" cy="110" rx="110" ry="75" fill="#4ade80" fill-opacity="0.8" stroke="#15803d" stroke-width="2.5"/>
                <ellipse cx="310" cy="110" rx="110" ry="75" fill="#4ade80" fill-opacity="0.8" stroke="#15803d" stroke-width="2.5"/>
                
                <text x="140" y="115" fill="#064e3b" font-size="18" font-weight="bold">S</text>
                <text x="380" y="115" fill="#064e3b" font-size="18" font-weight="bold">T</text>

                <!-- Chú thích S ∪ T -->
                <text x="260" y="35" fill="#15803d" font-size="18" font-weight="bold" text-anchor="middle">S ∪ T</text>
                <path d="M 260 42 L 260 85" stroke="#15803d" stroke-width="2" marker-end="url(#arrow)"/>
              </svg>
              <div class="small text-muted mt-1">Toàn bộ phần màu xanh lá biểu diễn hợp của hai tập hợp \\(S \\cup T\\) (SGK trang 17).</div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 7 (SGK TRANG 17) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b><br>
              a) Cho hai tập hợp \\(C = \\{2; 3; 4; 7\\}\\) và \\(D = \\{-1; 2; 3; 4; 6\\}\\). Hãy xác định tập hợp \\(C \\cup D\\).<br>
              b) Cho hai tập hợp \\(E = (-1; 2]\\) và \\(F = [0; 3]\\). Hãy xác định tập hợp \\(E \\cup F\\).</p>
              <hr>
              <p><b>Lời giải:</b><br>
              a) Gom tất cả các phần tử của cả hai tập hợp \\(C\\) và \\(D\\) (mỗi phần tử lấy 1 lần):<br>
              \\(C \\cup D = \\{-1; 2; 3; 4; 6; 7\\}\\).<br>
              b) Phần tử \\(x \\in E \\cup F\\) khi \\(x \\in (-1; 2]\\) hoặc \\(x \\in [0; 3]\\). Lấy toàn bộ từ điểm mút nhỏ nhất đến lớn nhất: \\(-1 < x \\le 3\\). Do đó:<br>
              \\(E \\cup F = (-1; 3]\\).</p>
            </div>

            <!-- VÍ DỤ 8 GIẢI QUYẾT BÀI TOÁN MỞ ĐẦU -->
            <div class="alert-box alert-warning mb-3">
              <div class="fw-bold text-danger mb-2" style="font-size:16px;">🌟 VÍ DỤ 8 (SGK TRANG 17): GIẢI QUYẾT TRỌN VẸN BÀI TOÁN HỘI THẢO LỊCH SỬ MỞ ĐẦU</div>
              <p><b>Đề bài:</b> Trở lại câu hỏi trong tình huống mở đầu. Gọi \\(A\\) là tập hợp những thành viên tham gia Chuyên đề 1, \\(B\\) là tập hợp những thành viên tham gia Chuyên đề 2.</p>
              <p>Hỏi: Có bao nhiêu thành viên tham gia cả hai chuyên đề? Và có bao nhiêu thành viên vắng mặt trong cả hai chuyên đề?</p>
              <hr>
              <p><b>Lời giải của Thầy Sáng:</b></p>
              <p>• Các thành viên tham gia cả hai chuyên đề chính là giao của hai tập hợp \\(A \\cap B\\):</p>
              <p class="text-center fw-bold text-primary">\\(A \\cap B = \\{\\text{Hương}; \\text{Chi}; \\text{Tú}; \\text{Bình}; \\text{Khánh}\\}\\) \\(\Longrightarrow n(A \\cap B) = 5\\) bạn.</p>
              <p>• Các thành viên tham gia ít nhất một trong hai chuyên đề chính là hợp của hai tập hợp \\(A \\cup B\\):</p>
              <p class="text-center fw-bold text-success">\\(A \\cup B = \\{\\text{Nam}; \\text{Hương}; \\text{Chi}; \\text{Tú}; \\text{Bình}; \\text{Ngân}; \\text{Khánh}; \\text{Hân}; \\text{Hiền}; \\text{Lam}\\}\\)</p>
              <p>Tập hợp \\(A \\cup B\\) có 10 phần tử, tức là có 10 thành viên tham gia một hoặc hai chuyên đề (\\(n(A \\cup B) = 10\\)).</p>
              <p>• Vì câu lạc bộ có tất cả 12 thành viên, nên số thành viên vắng mặt trong cả hai chuyên đề là:</p>
              <div class="p-2 bg-white rounded border text-center text-danger fw-bold my-2" style="font-size:17px;">
                \\(12 - 10 = 2 \\text{ (thành viên)}\\)
              </div>
            </div>

            <div class="alert-box alert-info">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 6 (SGK TRANG 17):</div>
              <p>Hãy biểu diễn tập hợp \\(A \\cup B\\) bằng biểu đồ Ven, với \\(A, B\\) được cho trong HĐ1.</p>
              <p><b>Gợi ý:</b> Vẽ hai elip giao nhau, điền 5 bạn chung vào vùng giao, điền Nam và Ngân vào phần riêng của A, điền Hân, Hiền, Lam vào phần riêng của B.</p>
            </div>
          </div>`
        },

        // --- 3c. HIỆU CỦA HAI TẬP HỢP VÀ PHẦN BÙ ---
        {
          key: "c",
          title: "Hiệu của hai tập hợp và phần bù",
          contentHtml: `<div class="content-box" style="text-align:justify;">
            <div class="card mb-3 border-info">
              <div class="card-header bg-info text-white fw-bold">1. Hiệu của hai tập hợp (SGK trang 18)</div>
              <div class="card-body">
                <p>Hiệu của hai tập hợp \\(S\\) và \\(T\\) là tập hợp gồm các phần tử thuộc \\(S\\) nhưng không thuộc \\(T\\), kí hiệu là \\(S \\setminus T\\) (đọc là <i>"\\(S\\) trừ \\(T\\)"</i> hoặc <i>"\\(S\\) hiệu \\(T\\)"</i>).</p>
                <div class="p-2 bg-light rounded border text-center text-info fw-bold my-2" style="font-size:16px;">
                  \\(S \\setminus T = \\{x \\mid x \\in S \\text{ và } x \\notin T\\}\\)
                </div>
              </div>
            </div>

            <div class="card mb-3 border-primary">
              <div class="card-header bg-primary text-white fw-bold">2. Phần bù của một tập con (SGK trang 18)</div>
              <div class="card-body">
                <p>Nếu \\(T\\) là tập con của \\(S\\) (\\(T \\subset S\\)) thì hiệu \\(S \\setminus T\\) được gọi là <b>phần bù của \\(T\\) trong \\(S\\)</b>, kí hiệu là \\(C_S T\\).</p>
                <div class="p-2 bg-light rounded border text-center text-primary fw-bold my-2" style="font-size:16px;">
                  \\(C_S T = S \\setminus T \\quad (\\text{khi } T \\subset S)\\)
                </div>
                <p class="mb-0"><i>Chú ý:</i> Phần bù của chính nó bằng tập rỗng: \\(C_S S = \\varnothing\\).</p>
              </div>
            </div>

            <!-- HÌNH 1.9 & 1.10: BIỂU ĐỒ VEN HIỆU VÀ PHẦN BÙ -->
            <div class="p-3 bg-light rounded border text-center my-3">
              <div class="fw-bold text-primary mb-2">HÌNH 1.9 & HÌNH 1.10: BIỂU ĐỒ VEN MINH HỌA HIỆU VÀ PHẦN BÙ</div>
              <svg viewBox="0 0 780 230" style="max-width: 100%; height: auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                <defs>
                  <mask id="cutOutT">
                    <rect x="0" y="0" width="400" height="230" fill="white"/>
                    <ellipse cx="260" cy="115" rx="85" ry="65" fill="black"/>
                  </mask>
                </defs>

                <!-- HÌNH 1.9: Hiệu S \ T (bên trái) -->
                <g transform="translate(20, 0)">
                  <!-- Elip T không tô -->
                  <ellipse cx="240" cy="115" rx="85" ry="65" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
                  <text x="290" y="120" fill="#1e293b" font-size="16" font-weight="bold">T</text>

                  <!-- Elip S tô phần trăng khuyết xanh lam -->
                  <ellipse cx="140" cy="115" rx="85" ry="65" fill="#0284c7" stroke="#0369a1" stroke-width="2.5" mask="url(#cutOutT)"/>
                  <ellipse cx="140" cy="115" rx="85" ry="65" fill="none" stroke="#0369a1" stroke-width="2.5"/>
                  <text x="90" y="120" fill="#fff" font-size="16" font-weight="bold">S</text>

                  <text x="180" y="30" fill="#0284c7" font-size="16" font-weight="bold" text-anchor="middle">S \ T</text>
                  <path d="M 175 36 L 140 75" stroke="#0284c7" stroke-width="2" marker-end="url(#arrow)"/>
                  
                  <text x="190" y="210" fill="#334155" font-size="13" font-weight="bold" text-anchor="middle">Hình 1.9: Hiệu S \ T</text>
                </g>

                <!-- Đường ngăn cách -->
                <line x1="390" y1="20" x2="390" y2="200" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="6"/>

                <!-- HÌNH 1.10: Phần bù Cs T (bên phải) -->
                <g transform="translate(420, 0)">
                  <!-- Vòng S ngoài tô màu xanh lam -->
                  <ellipse cx="160" cy="115" rx="120" ry="75" fill="#0284c7" stroke="#0369a1" stroke-width="2.5"/>
                  <text x="65" y="75" fill="#fff" font-size="16" font-weight="bold">S</text>

                  <!-- Vòng T trong màu trắng -->
                  <ellipse cx="190" cy="120" rx="55" ry="40" fill="#ffffff" stroke="#334155" stroke-width="2"/>
                  <text x="190" y="126" fill="#1e293b" font-size="15" font-weight="bold" text-anchor="middle">T</text>

                  <text x="140" y="30" fill="#0369a1" font-size="16" font-weight="bold" text-anchor="middle">Cₛ T</text>
                  <path d="M 140 36 L 140 68" stroke="#0369a1" stroke-width="2" marker-end="url(#arrow)"/>

                  <text x="160" y="210" fill="#334155" font-size="13" font-weight="bold" text-anchor="middle">Hình 1.10: Phần bù Cₛ T (khi T ⊂ S)</text>
                </g>
              </svg>
              <div class="small text-muted mt-1">Minh họa biểu đồ Ven: Hiệu \\(S \\setminus T\\) và Phần bù \\(C_S T\\) (SGK trang 18).</div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 9 (SGK TRANG 18) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Cho các tập hợp:</p>
              <p class="text-center">\\(D = \\{-2; 3; 5; 6\\}\\); &nbsp;&nbsp;&nbsp;&nbsp; \\(E = \\{x \\mid x \\text{ là số nguyên tố nhỏ hơn } 10\\}\\);</p>
              <p class="text-center">\\(X = \\{x \\mid x \\text{ là số nguyên dương nhỏ hơn } 10\\}\\).</p>
              <p>a) Tìm \\(D \\setminus E\\) và \\(E \\setminus D\\).<br>
              b) \\(E\\) có là tập con của \\(X\\) không? Hãy tìm phần bù của \\(E\\) trong \\(X\\) (nếu có).</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>a) Ta có \\(E = \\{2; 3; 5; 7\\}\\).<br>
              • Phần tử thuộc \\(D\\) nhưng không thuộc \\(E\\) là: \\(-2, 6\\). Vậy \\(D \\setminus E = \\{-2; 6\\}\\).<br>
              • Phần tử thuộc \\(E\\) nhưng không thuộc \\(D\\) là: \\(2, 7\\). Vậy \\(E \\setminus D = \\{2; 7\\}\\).</p>
              <p>b) Ta có \\(X = \\{1; 2; 3; 4; 5; 6; 7; 8; 9\\}\\).<br>
              Mọi phần tử của \\(E\\) đều là số nguyên dương nhỏ hơn 10 nên \\(E \\subset X\\).<br>
              Phần bù của \\(E\\) trong \\(X\\) là:<br>
              \\(C_X E = X \\setminus E = \\{1; 4; 6; 8; 9\\}\\).</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 7 (SGK TRANG 18): TÌM PHẦN BÙ TRONG ℝ</div>
              <p>Tìm phần bù của các tập hợp sau trong \\(\\mathbb{R}\\): &nbsp;&nbsp;&nbsp;&nbsp; a) \\((-\\infty; -2)\\); &nbsp;&nbsp;&nbsp;&nbsp; b) \\([-5; +\\infty)\\).</p>
              <hr>
              <p><b>Lời giải:</b><br>
              a) Phần bù của khoảng \\((-\\infty; -2)\\) trong \\(\\mathbb{R}\\) là tập hợp các số thực \\(x \\ge -2\\), tức là nửa khoảng \\([-2; +\\infty)\\):<br>
              \\(C_\\mathbb{R} (-\\infty; -2) = [-2; +\\infty)\\).<br>
              b) Phần bù của nửa khoảng \\([-5; +\\infty)\\) trong \\(\\mathbb{R}\\) là tập hợp các số thực \\(x < -5\\), tức là khoảng \\((-\\infty; -5)\\):<br>
              \\(C_\\mathbb{R} [-5; +\\infty) = (-\\infty; -5)\\).</p>
            </div>

            <!-- VẬN DỤNG THỰC TẾ (BÀI TOÁN KHẢO SÁT 24 HỌC SINH THỂ THAO) -->
            <div class="alert-box alert-warning">
              <div class="fw-bold text-danger mb-2" style="font-size:16px;">⚽ BÀI TOÁN VẬN DỤNG (SGK TRANG 18): CÔNG THỨC ĐẾM PHẦN TỬ THỰC TẾ</div>
              <p><b>Đề bài:</b> Lớp 10A có 24 bạn tham gia thi đấu bóng đá và cầu lông, trong đó có 16 bạn thi đấu bóng đá và 11 bạn thi đấu cầu lông. Giả sử các trận bóng đá và cầu lông không tổ chức đồng thời. Hỏi có bao nhiêu bạn lớp 10A tham gia thi đấu cả bóng đá và cầu lông?</p>
              
              <div class="text-center my-3">
                <svg viewBox="0 0 520 180" style="max-width: 460px; height: auto;">
                  <circle cx="200" cy="90" r="70" fill="#fee2e2" stroke="#ef4444" stroke-width="2.5" fill-opacity="0.8"/>
                  <circle cx="320" cy="90" r="70" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5" fill-opacity="0.8"/>
                  
                  <text x="140" y="50" fill="#b91c1c" font-size="14" font-weight="bold">Bóng đá (16)</text>
                  <text x="160" y="95" fill="#b91c1c" font-size="15" font-weight="bold">16 - x</text>
                  
                  <text x="360" y="50" fill="#0369a1" font-size="14" font-weight="bold">Cầu lông (11)</text>
                  <text x="350" y="95" fill="#0369a1" font-size="15" font-weight="bold">11 - x</text>

                  <text x="260" y="95" fill="#ea580c" font-size="18" font-weight="bold" text-anchor="middle">x</text>
                  <text x="260" y="170" fill="#334155" font-size="12" font-style="italic" text-anchor="middle">Tổng số học sinh: n(A ∪ B) = 24 bạn</text>
                </svg>
              </div>

              <hr>
              <p><b>Lời giải chi tiết của Thầy Sáng:</b></p>
              <p>Gọi \\(A\\) là tập hợp các bạn thi đấu bóng đá (\\(n(A) = 16\\)).<br>
              Gọi \\(B\\) là tập hợp các bạn thi đấu cầu lông (\\(n(B) = 11\\)).<br>
              Khi đó \\(A \\cup B\\) là tập hợp các bạn tham gia thi đấu (\\(n(A \\cup B) = 24\\)), và \\(A \\cap B\\) là tập hợp các bạn thi đấu cả hai môn.<br>
              Áp dụng công thức số phần tử thực tế:</p>
              <div class="p-2 bg-white rounded border text-center text-danger fw-bold my-2" style="font-size:16px;">
                \\(n(A \\cup B) = n(A) + n(B) - n(A \\cap B)\\)
              </div>
              <p>Thay số vào ta có:<br>
              \\(24 = 16 + 11 - n(A \\cap B) \\Longleftrightarrow n(A \\cap B) = 27 - 24 = 3\\).<br>
              <b>Đáp số:</b> Có <b>3 bạn</b> lớp 10A tham gia thi đấu cả bóng đá và cầu lông.</p>
            </div>
          </div>`
        }
      ]
    }
  ],

  // =========================================================================
  // CHỐT KIẾN THỨC THEN CHỐT & MẸO CỦA THẦY SÁNG
  // =========================================================================
  realworldWrapup: {
    title: "Chốt kiến thức then chốt & Mẹo làm chủ Tập hợp",
    contentHtml: `<div class="content-box" style="text-align:justify;">
      <div class="card mb-3 border-primary">
        <div class="card-header bg-primary text-white fw-bold">1. Dấu ấn lịch sử: Nhà toán học John Venn (1834 – 1923)</div>
        <div class="card-body">
          <p>Biểu đồ Ven (Venn Diagram) được nhà triết học và logic học người Anh John Venn giới thiệu vào năm 1880 trong bài báo khoa học <i>"Về việc biểu diễn hình học và cơ học các mệnh đề và suy luận"</i>. Ngày nay, biểu đồ Ven không chỉ là công cụ giảng dạy trực quan trong toán học mà còn được ứng dụng rộng rãi trong khoa học dữ liệu, quản trị cơ sở dữ liệu SQL (phép JOIN), sinh học phân loại và trí tuệ nhân tạo.</p>
        </div>
      </div>

      <div class="card mb-3 border-success">
        <div class="card-header bg-success text-white fw-bold">2. Bảng ghi nhớ vàng các phép toán tập hợp</div>
        <div class="card-body">
          <table class="table table-bordered table-striped text-center align-middle mb-0">
            <thead class="table-primary">
              <tr>
                <th>Phép toán</th>
                <th>Kí hiệu</th>
                <th>Điều kiện logic</th>
                <th>Ý nghĩa hình học</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Giao</b></td>
                <td>\\(A \\cap B\\)</td>
                <td>\\(x \\in A\\) <b>và</b> \\(x \\in B\\)</td>
                <td>Phần chung giữa hai tập hợp</td>
              </tr>
              <tr>
                <td><b>Hợp</b></td>
                <td>\\(A \\cup B\\)</td>
                <td>\\(x \\in A\\) <b>hoặc</b> \\(x \\in B\\)</td>
                <td>Gom toàn bộ phần tử của cả hai tập hợp</td>
              </tr>
              <tr>
                <td><b>Hiệu</b></td>
                <td>\\(A \\setminus B\\)</td>
                <td>\\(x \\in A\\) <b>và</b> \\(x \\notin B\\)</td>
                <td>Lấy thuộc \\(A\\), bỏ tất cả những gì thuộc \\(B\\)</td>
              </tr>
              <tr>
                <td><b>Phần bù</b></td>
                <td>\\(C_E A\\)</td>
                <td>\\(E \\setminus A\\) (khi \\(A \\subset E\\))</td>
                <td>Phần còn lại của \\(E\\) sau khi bỏ \\(A\\)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="alert-box alert-warning">
        <div class="fw-bold text-danger mb-2">💡 MẸO ĐỘC BẢN CỦA THẦY SÁNG KHI LÀM BÀI TẬP VỀ KHOẢNG, ĐOẠN TRÊN TRỤC SỐ:</div>
        <p><b>1. Phép GIAO (\\(\\cap\\)):</b> Vẽ từng tập lên trục số, tập nào không thuộc thì <i>gạch bỏ ngay lập tức</i>. Phần còn lại không bị gạch sau khi xét hết tất cả các tập chính là Giao!</p>
        <p><b>2. Phép HỢP (\\(\\cup\\)):</b> Tô đậm (hoặc giữ lại) tất cả các vùng thuộc ít nhất một tập. Hợp là lấy tất cả từ đầu mút nhỏ nhất đến lớn nhất.</p>
        <p><b>3. Phép HIỆU (\\(A \\setminus B\\)):</b> Giữ lại tập \\(A\\), sau đó xóa/gạch bỏ toàn bộ phần thuộc tập \\(B\\). Lưu ý quy tắc đảo dấu đầu mút: Nếu \\(B\\) chứa ngoặc tròn tại điểm mốc \\(a\\) thì hiệu \\(A \\setminus B\\) sẽ nhận mút vuông \\([\\) tại \\(a\\), và ngược lại!</p>
      </div>
    </div>`,
    checkpoints: [
      {
        id: "poi-10-2-wrapup-1",
        time: 25,
        title: "Giây 25: Tương tác công thức số phần tử hợp của hai tập hữu hạn",
        question: "Gọi $A$ là tập các học sinh chơi bóng đá, $B$ là tập các học sinh chơi cầu lông trong một lớp. Công thức tính tổng số bạn chơi ít nhất một môn thể thao $n(A \\cup B)$ là:",
        options: [
          "$n(A \\cup B) = n(A) + n(B)$",
          "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$",
          "$n(A \\cup B) = n(A) \\cdot n(B)$",
          "$n(A \\cup B) = n(A) + n(B) + n(A \\cap B)$"
        ],
        correctIndex: 1,
        correctAnswer: "B",
        hint: "Nhớ rằng các bạn chơi cả hai môn (A ∩ B) đã được đếm một lần trong n(A) và thêm một lần trong n(B).",
        explain: "Chính xác! Đây là nguyên lí bao hàm - loại trừ (Inclusion-Exclusion Principle): $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$. Nhờ trừ đi số bạn chơi cả hai môn một lần, mỗi bạn chỉ được tính đúng một lần!"
      }
    ],
    audioUrl: "assets/audio/b10_2_wrapup.mp3",
    audioScript: "Chốt kiến thức then chốt. Như vậy các em đã nắm vững toàn bộ các khái niệm và phép toán trên tập hợp. Về lịch sử toán học, Biểu đồ Ven được nhà logic học người Anh John Venn giới thiệu vào năm 1880, và ngày nay đã trở thành công cụ không thể thiếu trong khoa học máy tính và trí tuệ nhân tạo. Mẹo của Thầy Sáng: Khi tìm giao của các khoảng đoạn trên trục số, các em hãy vẽ lần lượt từng tập và gạch bỏ phần ngoài; phần còn trắng duy nhất chính là giao. Khi tìm hiệu, nhớ quy tắc đảo dấu mút: mút tròn của tập bị trừ sẽ biến thành mút vuông trong tập hiệu. Bây giờ, các em hãy cùng bước sang Phần 4 để làm bài tập trắc nghiệm củng cố nhé!"
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM CỦNG CỐ CHUẨN 3 DẠNG THỨC MỚI 2025 BỘ GD&ĐT
  // =========================================================================
  examFormatPractice: {
    // -----------------------------------------------------------------------
    // DẠNG 1: 5 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN (HOÁN VỊ ĐÁP ÁN C, A, D, B, C)
    // -----------------------------------------------------------------------
    part1MultipleChoice: [
      {
        id: "mc-10-2-1",
        num: 1,
        correctIndex: 2,
        correctAnswer: "C",
        level: "Nhận biết",
        prompt: "Cho tập hợp $A = \\{x \\in \\mathbb{R} \\mid x^2 - 5x + 6 = 0\\}$. Khẳng định nào sau đây là <strong>đúng</strong>?",
        options: [
          "A. $A = \\{2\\}$",
          "B. $A = \\{3\\}$",
          "C. $A = \\{2; 3\\}$",
          "D. $A = \\varnothing$"
        ],
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Phương trình $x^2 - 5x + 6 = 0 \\Leftrightarrow (x - 2)(x - 3) = 0 \\Leftrightarrow x = 2$ hoặc $x = 3$.<br>Cả hai nghiệm đều là số thực, nên tập hợp $A$ gồm hai phần tử là 2 và 3, viết là $A = \\{2; 3\\}$.<br>&rArr; <strong>Đáp án đúng là C.</strong>"
      },
      {
        id: "mc-10-2-2",
        num: 2,
        correctIndex: 0,
        correctAnswer: "A",
        level: "Thông hiểu",
        prompt: "Cho tập hợp $S = \\{a; b; c\\}$. Số lượng tất cả các <strong>tập hợp con</strong> của tập hợp $S$ là:",
        options: [
          "A. 8",
          "B. 3",
          "C. 6",
          "D. 7"
        ],
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo định lí số tập con: Một tập hợp có $n$ phần tử thì có tất cả $2^n$ tập con.<br>Ở đây tập $S$ có 3 phần tử nên số tập con là: $2^3 = 8$.<br>Các tập con đó gồm: $\\varnothing$, 3 tập có 1 phần tử ($\\{a\\}, \\{b\\}, \\{c\\}$), 3 tập có 2 phần tử ($\\{a; b\\}, \\{b; c\\}, \\{c; a\\}$) và chính tập $S$.<br>&rArr; <strong>Đáp án đúng là A.</strong>"
      },
      {
        id: "mc-10-2-3",
        num: 3,
        correctIndex: 3,
        correctAnswer: "D",
        level: "Thông hiểu",
        prompt: "Cho hai tập hợp $A = [-2; 3)$ và $B = [1; 5]$. Giao của hai tập hợp $A \\cap B$ là:",
        options: [
          "A. $[-2; 5]$",
          "B. $[1; 3]$",
          "C. $(-2; 1)$",
          "D. $[1; 3)$"
        ],
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Ta có: $x \\in A \\cap B \\Leftrightarrow -2 \\le x < 3$ và $1 \\le x \\le 5 \\Leftrightarrow \\max(-2, 1) \\le x < \\min(3, 5) \\Leftrightarrow 1 \\le x < 3$.<br>Do đó: $A \\cap B = [1; 3)$ (nửa khoảng lấy đầu mút vuông tại 1 và bỏ mút tròn tại 3).<br>&rArr; <strong>Đáp án đúng là D.</strong>"
      },
      {
        id: "mc-10-2-4",
        num: 4,
        correctIndex: 1,
        correctAnswer: "B",
        level: "Vận dụng",
        prompt: "Cho hai tập hợp $A = (-\\infty; 2]$ và $B = (0; +\\infty)$. Hợp của hai tập hợp $A \\cup B$ là:",
        options: [
          "A. $(0; 2]$",
          "B. $(-\\infty; +\\infty) = \\mathbb{R}$",
          "C. $(-\\infty; 0)$",
          "D. $[2; +\\infty)$"
        ],
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Tập $A$ lấy toàn bộ các số $x \\le 2$. Tập $B$ lấy toàn bộ các số $x > 0$.<br>Vì $0 < 2$ nên hai tập này chồng lấn lên nhau và phủ kín toàn bộ trục số thực từ âm vô cực đến dương vô cực.<br>Do đó: $A \\cup B = (-\\infty; +\\infty) = \\mathbb{R}$.<br>&rArr; <strong>Đáp án đúng là B.</strong>"
      },
      {
        id: "mc-10-2-5",
        num: 5,
        correctIndex: 2,
        correctAnswer: "C",
        level: "Vận dụng",
        prompt: "Cho tập hợp $A = [-3; 2)$. Phần bù của tập hợp $A$ trong $\\mathbb{R}$, kí hiệu $C_\\mathbb{R} A$, bằng:",
        options: [
          "A. $(-\\infty; -3] \\cup (2; +\\infty)$",
          "B. $(-\\infty; -3) \\cup (2; +\\infty)$",
          "C. $(-\\infty; -3) \\cup [2; +\\infty)$",
          "D. $[-3; 2]$"
        ],
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Phần bù của $A$ trong $\\mathbb{R}$ là: $C_\\mathbb{R} A = \\mathbb{R} \\setminus [-3; 2)$.<br>Tập $A$ lấy các số thực $-3 \\le x < 2$. Do đó các số không thuộc $A$ là: $x < -3$ hoặc $x \\ge 2$.<br>Biểu diễn dưới dạng hợp của hai khoảng/nửa khoảng: $(-\\infty; -3) \\cup [2; +\\infty)$.<br><em>Lưu ý mẹo Thầy Sáng:</em> Đổi dấu đầu mút: mút vuông $[-3$ đổi thành mút tròn $-3)$, và mút tròn $2)$ đổi thành mút vuông $[2$.<br>&rArr; <strong>Đáp án đúng là C.</strong>"
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 2: 3 CÂU TRẮC NGHIỆM ĐÚNG/SAI (MỖI CÂU ĐỦ 4 Ý a, b, c, d = 12 Ý)
    // -----------------------------------------------------------------------
    part2TrueFalse: [
      {
        id: "tf-10-2-1",
        num: 1,
        intro: "Cho hai tập hợp số: $A = \\{x \\in \\mathbb{R} \\mid (2x - x^2)(x^2 - 3x - 4) = 0\\}$ và $B = \\{n \\in \\mathbb{N} \\mid 0 \\le n \\le 4\\}$. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
        items: [
          {
            statement: "a) Tập hợp $A$ có 4 phần tử là: $A = \\{-1; 0; 2; 4\\}$.",
            isCorrect: true,
            solution: "Giải phương trình tích: $2x - x^2 = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Giải $x^2 - 3x - 4 = 0 \\Leftrightarrow x = -1$ hoặc $x = 4$. Cả 4 nghiệm đều thuộc $\\mathbb{R}$. Vậy $A = \\{-1; 0; 2; 4\\}$."
          },
          {
            statement: "b) Tập hợp $B$ có 4 phần tử.",
            isCorrect: false,
            solution: "Vì $n \\in \\mathbb{N}$ và $0 \\le n \\le 4$ nên $B = \\{0; 1; 2; 3; 4\\}$. Tập $B$ có 5 phần tử chứ không phải 4 phần tử."
          },
          {
            statement: "c) Giao của hai tập hợp là $A \\cap B = \\{0; 2; 4\\}$.",
            isCorrect: true,
            solution: "Các phần tử chung của $A$ và $B$ là $0, 2, 4$. Vậy $A \\cap B = \\{0; 2; 4\\}$."
          },
          {
            statement: "d) Hiệu $A \\setminus B = \\{-1; 1; 3\\}$.",
            isCorrect: false,
            solution: "Hiệu $A \\setminus B$ là tập các phần tử thuộc $A$ nhưng không thuộc $B$. Ta có $-1 \\in A$ và $-1 \\notin B$. Các phần tử $0, 2, 4$ đều thuộc $B$. Vậy $A \\setminus B = \\{-1\\}$."
          }
        ]
      },
      {
        id: "tf-10-2-2",
        num: 2,
        intro: "Cho hai tập hợp khoảng và đoạn trên trục số thực: $E = (-4; 3]$ và $F = [1; 6)$. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
        items: [
          {
            statement: "a) Giao của hai tập hợp là $E \\cap F = [1; 3]$.",
            isCorrect: true,
            solution: "Ta có $x \\in E \\cap F \\Leftrightarrow -4 < x \\le 3$ và $1 \\le x < 6 \\Leftrightarrow 1 \\le x \\le 3$. Vậy $E \\cap F = [1; 3]$."
          },
          {
            statement: "b) Hợp của hai tập hợp là $E \\cup F = (-4; 6)$.",
            isCorrect: true,
            solution: "Lấy tất cả các phần tử thuộc $E$ hoặc $F$: $-4 < x < 6$. Vậy $E \\cup F = (-4; 6)$."
          },
          {
            statement: "c) Hiệu $E \\setminus F = (-4; 1]$.",
            isCorrect: false,
            solution: "Vì tập $F$ lấy điểm 1 (mút vuông $[1$), nên khi bỏ tập $F$, điểm 1 bị loại ra, đầu mút trở thành ngoặc tròn: $E \\setminus F = (-4; 1)$."
          },
          {
            statement: "d) Số lượng số nguyên thuộc tập hợp $E \\cap F$ là 3.",
            isCorrect: true,
            solution: "Tập $E \\cap F = [1; 3]$ chứa các số nguyên là: 1, 2, 3 (có đúng 3 số nguyên)."
          }
        ]
      },
      {
        id: "tf-10-2-3",
        num: 3,
        intro: "Cho hai tập hợp chứa tham số $m$: $A = [m; m + 3]$ và $B = (1; 5)$. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
        items: [
          {
            statement: "a) Độ dài của đoạn $A$ luôn không đổi và bằng 3 với mọi giá trị của tham số $m$.",
            isCorrect: true,
            solution: "Độ dài đoạn $[m; m + 3]$ là $(m + 3) - m = 3$, không phụ thuộc vào $m$."
          },
          {
            statement: "b) Khi $m = 0$, ta có $A \\cap B = (1; 3]$.",
            isCorrect: true,
            solution: "Khi $m = 0$, $A = [0; 3]$. Giao với $B = (1; 5)$ cho kết quả: $[0; 3] \\cap (1; 5) = (1; 3]$."
          },
          {
            statement: "c) Để $A \\subset B$ thì điều kiện của tham số $m$ là $1 < m < 2$.",
            isCorrect: true,
            solution: "Để đoạn $[m; m + 3] \\subset (1; 5)$, ta cần: $m > 1$ và $m + 3 < 5 \\Leftrightarrow 1 < m < 2$ (do $B$ là khoảng mở nên không được lấy dấu bằng tại các mút)."
          },
          {
            statement: "d) Điều kiện để $A \\cap B = \\varnothing$ là $m \\le -2$ hoặc $m \\ge 5$.",
            isCorrect: true,
            solution: "$A \\cap B = \\varnothing \\Leftrightarrow m + 3 \\le 1$ hoặc $m \\ge 5 \\Leftrightarrow m \\le -2$ hoặc $m \\ge 5$."
          }
        ]
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 3: 2 CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN THỰC TẾ
    // -----------------------------------------------------------------------
    part3ShortAnswer: [
      {
        id: "sa-10-2-1",
        num: 1,
        level: "Vận dụng",
        prompt: "Trong một đợt khảo sát sở thích thể thao của 45 học sinh lớp 10, có 28 bạn thích môn Bóng đá, 20 bạn thích môn Bóng rổ và 5 bạn không thích cả hai môn này. Hỏi có bao nhiêu bạn thích cả hai môn Bóng đá và Bóng rổ?",
        correctValue: 8,
        correctAnswer: "8",
        unit: "bạn",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Số học sinh thích ít nhất một môn thể thao là: $45 - 5 = 40$ (học sinh).<br>Gọi $A$ là tập các bạn thích bóng đá ($n(A) = 28$).<br>Gọi $B$ là tập các bạn thích bóng rổ ($n(B) = 20$).<br>Khi đó $n(A \\cup B) = 40$. Áp dụng công thức số phần tử:<br>$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$<br>Thay số vào: $40 = 28 + 20 - n(A \\cap B) \\Rightarrow n(A \\cap B) = 48 - 40 = 8$.<br>&rArr; <strong>Đáp số: 8.</strong>"
      },
      {
        id: "sa-10-2-2",
        num: 2,
        level: "Vận dụng cao",
        prompt: "Cho hai tập hợp $A = [-4; 2]$ và $B = (m - 1; m + 3]$. Có bao nhiêu giá trị nguyên của tham số $m$ để giao của hai tập hợp $A \\cap B \\neq \\varnothing$?",
        correctValue: 10,
        correctAnswer: "10",
        unit: "giá trị",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Xét biến cố đối: $A \\cap B = \\varnothing$.<br>Điều này xảy ra khi và chỉ khi: $m + 3 < -4$ hoặc $m - 1 \\ge 2 \\Leftrightarrow m < -7$ hoặc $m \\ge 3$.<br>Do đó để $A \\cap B \\neq \\varnothing$ thì điều kiện là: $-7 \\le m < 3$.<br>Các giá trị nguyên của $m$ thỏa mãn là: $-7, -6, -5, -4, -3, -2, -1, 0, 1, 2$.<br>Số giá trị nguyên là: $2 - (-7) + 1 = 10$ giá trị.<br>&rArr; <strong>Đáp số: 10.</strong>"
      }
    ]
  }
};
