/**
 * BÀI HỌC SỐ: BÀI 7. HỆ TRỤC TỌA ĐỘ TRONG KHÔNG GIAN (TOÁN 12 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Cấu trúc 4 phần chuẩn chỉ:
 * - Phần I: Lời chào Thầy Sáng + Nút "Lời chào của thầy Sáng" (Nền xanh, chữ vàng đồng, Voice AI Thầy Sáng, chỉnh tốc độ)
 * - Phần II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 58 + Nút "Giọng đọc AI của ThS. Lương Thanh Sáng" (chỉnh tốc độ)
 * - Phần III: Tiến trình bài học:
 *     + Bài toán dẫn nhập radar kiểm soát không lưu sân bay Tân Sơn Nhất + Nút nghe giảng vàng đồng
 *     + Trình phát tương tác POI chặn seekbar (dừng ở 25s và 55s)
 *     + 4 tiểu mục (1a, 1b, 2a, 2b):
 *         * Tóm tắt KaTeX sạch sẽ 100% không lỗi ký hiệu
 *         * Hình vẽ SVG TikZ 3D không gian sắc nét, nét đứt/liền chuẩn mực
 *         * Nhúng GeoGebra 3D tương tác xoay 360 độ mượt mà trên mobile/PC
 *         * 2 Checkpoint tương tác bắt buộc (giữa đoạn & cuối đoạn) tính điểm vào % tiến độ
 *         * Khung Mẹo nhớ của Thầy Sáng
 *         * Nút "Nghe thầy Sáng giảng bài" (Nền xanh, chữ vàng đồng, 4 tốc độ: 0.75x, 1x, 1.25x, 1.5x)
 *         * Ví dụ tự luận SGK: chỉ show đề bài, làm vào vở + Nút bung lời giải chi tiết
 *     + Chốt bài học: Nhắc lại bài toán radar máy bay + Lời giải chi tiết + Nút nghe giảng
 * - Phần IV: Bài tập trắc nghiệm tổng hợp 3 dạng thức thi mới 2025:
 *     + Dạng 1: 5 câu nhiều lựa chọn (Dễ - Nhận biết)
 *     + Dạng 2: 3 câu Đúng/Sai (Thông hiểu - chuẩn 4 ý a, b, c, d)
 *     + Dạng 3: 2 câu Trả lời ngắn (Toán thực tế - Vận dụng)
 *     + Kèm nút "Lời giải chi tiết" và nút "Bài toán tương tự" đổi số tự động
 */

window.LESSON_12_C2_B7_DATA = {
  id: "12-c2-b7",
  number: "Bài 7",
  title: "Hệ trục tọa độ trong không gian",
  isFeaturedLesson: true,
  isOlmInteractive: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioScript: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioUrl: "assets/audio/b12_7_welcome.mp3",
    buttonLabel: "Lời chào của thầy Sáng",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 58)
  // =========================================================================
  learningGoals: [
    "Nhận biết và hiểu sâu sắc hệ trục toạ độ Đề-các vuông góc $Oxyz$ trong không gian: gốc toạ độ $O$, ba trục toạ độ $Ox$ (trục hoành), $Oy$ (trục tung), $Oz$ (trục cao) đôi một vuông góc; ba véctơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ và ba mặt phẳng toạ độ $(Oxy), (Oyz), (Ozx)$.",
    "Xác định thành thạo toạ độ của một điểm $M(x; y; z)$ thông qua biểu diễn $\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ và toạ độ các hình chiếu vuông góc của điểm lên các trục toạ độ và các mặt phẳng toạ độ.",
    "Làm chủ toạ độ của véctơ $\\vec{u} = (x; y; z) \\Leftrightarrow \\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}$; công thức tính toạ độ véctơ $\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$ theo quy tắc 'sau trừ trước', toạ độ trung điểm của đoạn thẳng và toạ độ trọng tâm tam giác.",
    "Vận dụng linh hoạt hệ toạ độ không gian $Oxyz$ để giải quyết các bài toán định vị thực tiễn: hệ thống radar kiểm soát không lưu hàng không và mô hình hoá kết cấu không gian ba chiều."
  ],
  goalsAudioUrl: "assets/audio/b12_7_goals.mp3",
  goalsButtonLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================
  // 1. Bài toán dẫn nhập
  hook: {
    title: "Bài toán kiểm soát không lưu radar tại Sân bay quốc tế Tân Sơn Nhất",
    story: "Tại đài kiểm soát không lưu sân bay quốc tế Tân Sơn Nhất, màn hình radar liên tục giám sát hàng trăm chuyến bay di chuyển trên bầu trời. Mỗi chiếc máy bay đều được xác định vị trí chính xác thông qua ba thông số không gian: khoảng cách kinh độ Đông - Tây, khoảng cách vĩ độ Nam - Bắc, và độ cao hành trình so với mực nước biển. Khi hai máy bay bay qua cùng một vùng không phận, làm thế nào để các kỹ sư hàng không thiết lập một hệ thống toán học chuẩn xác nhằm định vị chính xác vị trí máy bay và giám sát khoảng cách an toàn giữa chúng trong không gian ba chiều? Hệ trục toạ độ Đề-các vuông góc $Oxyz$ chính là công cụ vĩ đại giúp chúng ta giải mã trọn vẹn bài toán thực tế này!",
    illustration: "",
    illustrationCaption: "Mô hình hoá hệ toạ độ không gian Oxyz định vị máy bay trong kiểm soát không lưu",
    question: "Nếu biết toạ độ không gian của máy bay $A(30; 40; 12)$ và máy bay $B(36; 48; 12)$ (đơn vị: km), làm thế nào để tính ngay khoảng cách đường chim bay giữa hai máy bay để đảm bảo an toàn bay?",
    audioUrl: "assets/audio/b12_7_hook.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    bridge: "Hãy cùng Thầy Sáng bước vào khám phá Hệ toạ độ Đề-các vuông góc Oxyz ngay sau đây!"
  },

  // 2. Trình phát bài giảng tương tác tích hợp POI (chặn seekbar tại 25s và 55s)
  interactiveAudio: {
    title: "Bài giảng tương tác: Hệ trục toạ độ trong không gian Oxyz",
    audioUrl: "assets/audio/b12_7_interactive_lecture.mp3",
    duration: 70,
    timestamps: [
      {
        id: "poi-12-7-1",
        time: 25,
        title: "Điểm dừng 1: Cấu tạo ba trục toạ độ trong không gian",
        question: "Trong hệ trục toạ độ Đề-các vuông góc $Oxyz$, trục $Oz$ vuông góc với cả hai trục $Ox$ và $Oy$ được gọi là:",
        options: [
          "Trục cao",
          "Trục hoành",
          "Trục tung",
          "Trục số"
        ],
        correctIndex: 0,
        hint: "Trục Ox là hoành, Oy là tung, Oz thẳng đứng là...",
        explain: "Chính xác! Trục $Ox$ là trục hoành, trục $Oy$ là trục tung, và trục $Oz$ hướng thẳng đứng được gọi là trục cao. Ba trục này đôi một vuông góc tại gốc toạ độ $O$."
      },
      {
        id: "poi-12-7-2",
        time: 55,
        title: "Điểm dừng 2: Xác định toạ độ điểm từ biểu diễn véctơ",
        question: "Trong không gian $Oxyz$, cho điểm $M$ thoả mãn $\\vec{OM} = 2\\vec{i} + 3\\vec{j} - 5\\vec{k}$. Toạ độ của điểm $M$ là:",
        options: [
          "$M(2; 3; -5)$",
          "$M(2; 3; 5)$",
          "$M(-5; 3; 2)$",
          "$M(3; 2; -5)$"
        ],
        correctIndex: 0,
        hint: "Tọa độ điểm M chính là bộ ba hệ số đứng trước các vectơ đơn vị i, j, k.",
        explain: "Tuyệt vời! Theo định nghĩa: $\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\Leftrightarrow M(x; y; z)$. Các hệ số lần lượt là $x = 2, y = 3, z = -5$ nên $M(2; 3; -5)$."
      }
    ]
  },

  // 3. Triển khai các mục lý thuyết (Mục 1: 1a, 1b; Mục 2: 2a, 2b)
  sections: [
    {
      id: "12-c2-b7-s1",
      num: "1",
      title: "Hệ trục toạ độ và toạ độ của một điểm trong không gian",
      subsections: [
        {
          key: "a",
          title: "Hệ trục toạ độ Đề-các vuông góc trong không gian Oxyz",
          summary: "Gốc O, ba trục hoành Ox, tung Oy, cao Oz đôi một vuông góc; ba véctơ đơn vị i, j, k và ba mặt phẳng toạ độ (Oxy), (Oyz), (Ozx).",
          audioUrl: "assets/audio/b12_7_sec1a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
          contentHtml: `
            <div class="definition-card">
              <div class="def-badge"><i class="fa-solid fa-cube"></i> Định nghĩa Hệ toạ độ Đề-các vuông góc Oxyz</div>
              <p>Trong không gian, xét ba trục số $Ox, Oy, Oz$ đôi một vuông góc với nhau từng đôi một tại gốc $O$. Ta gọi đó là <strong>hệ trục toạ độ Đề-các vuông góc trong không gian</strong> (gọi tắt là <strong>hệ toạ độ $Oxyz$</strong>).</p>
              <ul>
                <li><strong>Điểm gốc $O$:</strong> gọi là <em>gốc toạ độ</em>.</li>
                <li><strong>Trục $Ox$:</strong> gọi là <em>trục hoành</em>; <strong>Trục $Oy$:</strong> gọi là <em>trục tung</em>; <strong>Trục $Oz$:</strong> gọi là <em>trục cao</em>.</li>
                <li><strong>Ba véctơ đơn vị:</strong> Lần lượt trên ba trục $Ox, Oy, Oz$, ta chọn các véctơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ sao cho:
                  <div class="math-highlight-box">
                    $|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1 \\quad \\text{và} \\quad \\vec{i} \\cdot \\vec{j} = \\vec{j} \\cdot \\vec{k} = \\vec{k} \\cdot \\vec{i} = 0$
                  </div>
                </li>
                <li><strong>Ba mặt phẳng toạ độ:</strong>
                  <ul>
                    <li>Mặt phẳng $(Oxy)$ đi qua hai trục $Ox, Oy$ (chứa hai véctơ $\\vec{i}, \\vec{j}$).</li>
                    <li>Mặt phẳng $(Oyz)$ đi qua hai trục $Oy, Oz$ (chứa hai véctơ $\\vec{j}, \\vec{k}$).</li>
                    <li>Mặt phẳng $(Ozx)$ đi qua hai trục $Oz, Ox$ (chứa hai véctơ $\\vec{k}, \\vec{i}$).</li>
                  </ul>
                  Ba mặt phẳng toạ độ này đôi một vuông góc với nhau.
                </li>
              </ul>
            </div>

            <!-- HÌNH VẼ ĐỒ HOẠ TIKZ / SVG 3D: HỆ TOẠ ĐỘ OXYZ -->
            <div class="tikz-svg-figure-box">
              <svg viewBox="0 0 520 340" width="100%" height="320" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arrow-axis-12" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
                  </marker>
                  <marker id="arrow-unit-i" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ef4444"/>
                  </marker>
                  <marker id="arrow-unit-j" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981"/>
                  </marker>
                  <marker id="arrow-unit-k" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0284c7"/>
                  </marker>
                  <linearGradient id="planeOxyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.18"/>
                    <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
                  </linearGradient>
                </defs>

                <!-- Mặt phẳng toạ độ (Oxy) sàn nhà -->
                <polygon points="220,200 100,280 340,280 460,200" fill="url(#planeOxyGrad)" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="4,4"/>
                <text x="380" y="260" font-family="system-ui, sans-serif" font-size="13" font-style="italic" fill="#0284c7" font-weight="600">(Oxy)</text>

                <!-- Các trục toạ độ âm nét đứt -->
                <line x1="220" y1="200" x2="300" y2="147" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                <line x1="220" y1="200" x2="80" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                <line x1="220" y1="200" x2="220" y2="300" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

                <!-- Trục Ox (hướng chéo ra trước bên trái) -->
                <line x1="220" y1="200" x2="80" y2="293" stroke="#1e293b" stroke-width="2.2" marker-end="url(#arrow-axis-12)"/>
                <text x="65" y="310" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">x</text>

                <!-- Trục Oy (hướng ngang sang phải) -->
                <line x1="220" y1="200" x2="470" y2="200" stroke="#1e293b" stroke-width="2.2" marker-end="url(#arrow-axis-12)"/>
                <text x="480" y="205" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">y</text>

                <!-- Trục Oz (hướng thẳng đứng lên trên) -->
                <line x1="220" y1="200" x2="220" y2="35" stroke="#1e293b" stroke-width="2.2" marker-end="url(#arrow-axis-12)"/>
                <text x="215" y="25" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">z</text>

                <!-- Gốc toạ độ O -->
                <circle cx="220" cy="200" r="4.5" fill="#1e293b"/>
                <text x="228" y="218" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e293b">O</text>

                <!-- Véctơ đơn vị i trên Ox (màu đỏ) -->
                <line x1="220" y1="200" x2="160" y2="240" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-unit-i)"/>
                <text x="145" y="235" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ef4444">i⃗</text>

                <!-- Véctơ đơn vị j trên Oy (màu xanh lá) -->
                <line x1="220" y1="200" x2="290" y2="200" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-unit-j)"/>
                <text x="285" y="190" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#10b981">j⃗</text>

                <!-- Véctơ đơn vị k trên Oz (màu xanh dương) -->
                <line x1="220" y1="200" x2="220" y2="130" stroke="#0284c7" stroke-width="3" marker-end="url(#arrow-unit-k)"/>
                <text x="230" y="140" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0284c7">k⃗</text>

                <!-- Ký hiệu góc vuông giữa các trục -->
                <path d="M 235 200 L 235 185 L 220 185" fill="none" stroke="#64748b" stroke-width="1.2"/>
                <path d="M 205 210 L 213 220 L 228 210" fill="none" stroke="#64748b" stroke-width="1.2"/>
              </svg>
              <div class="tikz-caption-text">Hình 7.1: Mô hình hệ toạ độ Đề-các vuông góc Oxyz với ba trục và ba véctơ đơn vị i⃗, j⃗, k⃗</div>
            </div>

            <!-- NHÚNG MÔ HÌNH TRỰC QUAN 3D GEOGEBRA (XOAY 360 ĐỘ) -->
            <div class="geogebra-embed-wrapper my-3" style="margin: 16px 0; border: 1px solid #cbd5e1; border-radius: 10px; overflow: hidden; background: #f8fafc;">
              <div style="background: linear-gradient(135deg, #1e3a8a, #0284c7); color: #fff; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 700; font-size: 0.95rem;"><i class="fa-solid fa-cube"></i> Mô hình trực quan 3D GeoGebra (Dùng tay/chuột kéo xoay 360°)</span>
                <span style="background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">GeoGebra 3D Live</span>
              </div>
              <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
                <iframe src="https://www.geogebra.org/material/iframe/id/r3hyqepm/width/800/height/450/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" 
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
                        allowfullscreen 
                        loading="lazy">
                </iframe>
              </div>
            </div>

            <!-- CHECKPOINT 1 (GIỮA ĐOẠN 1A) -->
            <div class="sub-checkpoint-card" id="cp-card-12-7-1a-1">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-bolt"></i> Thầy Sáng hỏi nhanh (Giữa đoạn 1a)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Trong không gian $Oxyz$, véctơ đơn vị $\\vec{j}$ nằm trên trục nào và có độ dài bằng bao nhiêu?</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-1a-1">A. Trục hoành $Ox$, độ dài 1</button>
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-12-7-1a-1">B. Trục tung $Oy$, độ dài 1</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-1a-1">C. Trục cao $Oz$, độ dài 1</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-1a-1">D. Trục tung $Oy$, độ dài 0</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-12-7-1a-1">
                <strong>Lời giải của Thầy Sáng:</strong> Chính xác! Véctơ $\\vec{i}$ trên $Ox$, $\\vec{j}$ trên $Oy$, và $\\vec{k}$ trên $Oz$. Cả ba véctơ đơn vị đều có độ dài bằng 1 ($|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1$).
              </div>
            </div>

            <!-- CHECKPOINT 2 (CUỐI ĐOẠN 1A) -->
            <div class="sub-checkpoint-card" id="cp-card-12-7-1a-2">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-check-double"></i> Thử thách củng cố (Cuối đoạn 1a)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Khẳng định nào sau đây là khẳng định ĐÚNG về ba mặt phẳng toạ độ trong không gian $Oxyz$?</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-12-7-1a-2">A. Ba mặt phẳng toạ độ đôi một vuông góc</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-1a-2">B. Mặt phẳng $(Oxy)$ song song với trục $Oz$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-1a-2">C. Tích vô hướng $\\vec{i} \\cdot \\vec{k} = 1$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-1a-2">D. Trục $Ox$ nằm trong mặt phẳng $(Oyz)$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-12-7-1a-2">
                <strong>Lời giải của Thầy Sáng:</strong> Xuất sắc! Ba mặt phẳng toạ độ $(Oxy), (Oyz), (Ozx)$ đôi một vuông góc với nhau và chứa các cặp trục toạ độ tương ứng.
              </div>
            </div>

            <!-- MẸO NHỚ CỦA THẦY SÁNG -->
            <div class="teacher-memo-tip-card">
              <div class="teacher-memo-title"><i class="fa-solid fa-lightbulb"></i> Mẹo nhớ của Thầy Sáng: "Góc tường phòng học"</div>
              <div class="teacher-memo-body">
                Để dễ nhớ cấu trúc $Oxyz$: <strong>Gốc $O$</strong> là góc sàn nhà. Mép sàn bên trái là trục hoành $Ox$, mép sàn bên phải là trục tung $Oy$, góc tường thẳng đứng là trục cao $Oz$. Sàn nhà chính là mặt phẳng $(Oxy)$, hai bức tường chính là $(Oyz)$ và $(Ozx)$!
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 1 (SGK trang 59): Chọn hệ toạ độ thích hợp cho hình lập phương",
            problem: "Trong không gian $Oxyz$, cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $1$. Hãy chọn hệ trục toạ độ $Oxyz$ thích hợp có gốc toạ độ trùng với đỉnh $A$, và chỉ ra các véctơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ tương ứng trên các cạnh của hình lập phương.",
            solution: `
              <p>• Vì $ABCD.A'B'C'D'$ là hình lập phương nên ba cạnh $AB, AD, AA'$ đôi một vuông góc tại đỉnh $A$.</p>
              <p>• Ta chọn hệ toạ độ $Oxyz$ như sau:</p>
              <ul>
                <li>Gốc toạ độ $O$ trùng với đỉnh $A$.</li>
                <li>Trục hoành $Ox$ chứa tia $AB$; véctơ đơn vị $\\vec{i} = \\vec{AB}$ (vì $AB = 1$).</li>
                <li>Trục tung $Oy$ chứa tia $AD$; véctơ đơn vị $\\vec{j} = \\vec{AD}$ (vì $AD = 1$).</li>
                <li>Trục cao $Oz$ chứa tia $AA'$; véctơ đơn vị $\\vec{k} = \\vec{AA'}$ (vì $AA' = 1$).</li>
              </ul>
              <p>• Mặt đáy $(ABCD)$ nằm trên mặt phẳng toạ độ $(Oxy)$, các mặt bên $(ADD'A')$ và $(ABB'A')$ lần lượt nằm trên $(Oyz)$ và $(Ozx)$.</p>
            `,
            teacherGuidance: "Khi gặp bài toán hình không gian, việc chọn gốc toạ độ tại đỉnh có 3 cạnh đôi một vuông góc là bước đầu tiên quan trọng nhất giúp giải quyết mọi yêu cầu."
          }
        },
        {
          key: "b",
          title: "Toạ độ của một điểm trong không gian & Toạ độ hình chiếu",
          summary: "OM = x.i + y.j + z.k <=> M(x; y; z). Hoành độ x, tung độ y, cao độ z. Toạ độ hình chiếu vuông góc lên các trục và các mặt phẳng toạ độ.",
          audioUrl: "assets/audio/b12_7_sec1b.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
          contentHtml: `
            <div class="definition-card">
              <div class="def-badge"><i class="fa-solid fa-location-dot"></i> Toạ độ của một điểm trong không gian</div>
              <p>Trong không gian $Oxyz$, với mỗi điểm $M$ bất kì, luôn tồn tại <strong>duy nhất</strong> một bộ ba số thực $(x; y; z)$ sao cho:</p>
              <div class="math-highlight-box">
                $\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$
              </div>
              <p>Bộ ba số $(x; y; z)$ đó được gọi là <strong>toạ độ của điểm $M$</strong> đối với hệ toạ độ $Oxyz$, ký hiệu là $M(x; y; z)$ hoặc $M = (x; y; z)$.</p>
              <ul>
                <li>$x$: gọi là <em>hoành độ</em> của điểm $M$.</li>
                <li>$y$: gọi là <em>tung độ</em> của điểm $M$.</li>
                <li>$z$: gọi là <em>cao độ</em> của điểm $M$.</li>
              </ul>
            </div>

            <!-- BẢNG TOẠ ĐỘ HÌNH CHIẾU VUÔNG GÓC -->
            <div class="theorem-card" style="margin-top: 14px;">
              <div class="theorem-badge"><i class="fa-solid fa-arrows-down-to-line"></i> Toạ độ các hình chiếu vuông góc của điểm $M(x; y; z)$</div>
              <div style="overflow-x: auto; margin-top: 10px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: left;">
                  <thead>
                    <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                      <th style="padding: 8px 12px;">Hình chiếu vuông góc lên</th>
                      <th style="padding: 8px 12px;">Ký hiệu</th>
                      <th style="padding: 8px 12px;">Toạ độ chuẩn xác</th>
                      <th style="padding: 8px 12px;">Quy tắc nhận dạng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px 12px; font-weight: 600;">Trục hoành $Ox$</td>
                      <td style="padding: 8px 12px;">$M_1$</td>
                      <td style="padding: 8px 12px; color: #0284c7; font-weight: 700;">$(x; 0; 0)$</td>
                      <td style="padding: 8px 12px;">Chỉ giữ hoành độ $x$, khuyết $y, z = 0$</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px 12px; font-weight: 600;">Trục tung $Oy$</td>
                      <td style="padding: 8px 12px;">$M_2$</td>
                      <td style="padding: 8px 12px; color: #0284c7; font-weight: 700;">$(0; y; 0)$</td>
                      <td style="padding: 8px 12px;">Chỉ giữ tung độ $y$, khuyết $x, z = 0$</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px 12px; font-weight: 600;">Trục cao $Oz$</td>
                      <td style="padding: 8px 12px;">$M_3$</td>
                      <td style="padding: 8px 12px; color: #0284c7; font-weight: 700;">$(0; 0; z)$</td>
                      <td style="padding: 8px 12px;">Chỉ giữ cao độ $z$, khuyết $x, y = 0$</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px 12px; font-weight: 600;">Mặt phẳng $(Oxy)$</td>
                      <td style="padding: 8px 12px;">$M_{xy}$</td>
                      <td style="padding: 8px 12px; color: #16a34a; font-weight: 700;">$(x; y; 0)$</td>
                      <td style="padding: 8px 12px;">Thuộc $(Oxy)$ nên khuyết $z \\Rightarrow z = 0$</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px 12px; font-weight: 600;">Mặt phẳng $(Oyz)$</td>
                      <td style="padding: 8px 12px;">$M_{yz}$</td>
                      <td style="padding: 8px 12px; color: #16a34a; font-weight: 700;">$(0; y; z)$</td>
                      <td style="padding: 8px 12px;">Thuộc $(Oyz)$ nên khuyết $x \\Rightarrow x = 0$</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 12px; font-weight: 600;">Mặt phẳng $(Ozx)$</td>
                      <td style="padding: 8px 12px;">$M_{zx}$</td>
                      <td style="padding: 8px 12px; color: #16a34a; font-weight: 700;">$(x; 0; z)$</td>
                      <td style="padding: 8px 12px;">Thuộc $(Ozx)$ nên khuyết $y \\Rightarrow y = 0$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- HÌNH VẼ TIKZ / SVG 3D HÌNH HỘP CHIẾU ĐIỂM M -->
            <div class="tikz-svg-figure-box">
              <svg viewBox="0 0 520 340" width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arrow-axis-12b" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
                  </marker>
                </defs>

                <!-- Các trục toạ độ -->
                <line x1="180" y1="230" x2="60" y2="310" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow-axis-12b)"/>
                <text x="45" y="325" font-family="system-ui, sans-serif" font-size="15" font-weight="700">x</text>

                <line x1="180" y1="230" x2="480" y2="230" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow-axis-12b)"/>
                <text x="490" y="235" font-family="system-ui, sans-serif" font-size="15" font-weight="700">y</text>

                <line x1="180" y1="230" x2="180" y2="40" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow-axis-12b)"/>
                <text x="175" y="30" font-family="system-ui, sans-serif" font-size="15" font-weight="700">z</text>

                <circle cx="180" cy="230" r="4" fill="#1e293b"/>
                <text x="165" y="245" font-family="system-ui, sans-serif" font-size="14" font-weight="700">O</text>

                <!-- Các hình chiếu và nét đứt -->
                <line x1="180" y1="230" x2="110" y2="277" stroke="#0284c7" stroke-width="1.8"/>
                <text x="75" y="295" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0284c7">M₁(x;0;0)</text>

                <line x1="180" y1="230" x2="380" y2="230" stroke="#0284c7" stroke-width="1.8"/>
                <text x="375" y="220" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0284c7">M₂(0;y;0)</text>

                <line x1="180" y1="230" x2="180" y2="100" stroke="#0284c7" stroke-width="1.8"/>
                <text x="105" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#0284c7">M₃(0;0;z)</text>

                <line x1="110" y1="277" x2="310" y2="277" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,4"/>
                <line x1="380" y1="230" x2="310" y2="277" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,4"/>
                <circle cx="310" cy="277" r="4.5" fill="#f59e0b"/>
                <text x="320" y="295" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#d97706">M_xy(x; y; 0)</text>

                <line x1="310" y1="277" x2="310" y2="147" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
                <line x1="180" y1="100" x2="380" y2="100" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,4"/>
                <line x1="380" y1="100" x2="310" y2="147" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,4"/>
                <line x1="380" y1="230" x2="380" y2="100" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,4"/>

                <!-- Điểm M chính -->
                <circle cx="310" cy="147" r="6" fill="#ef4444"/>
                <text x="325" y="142" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#ef4444">M(x; y; z)</text>

                <!-- Véctơ OM -->
                <line x1="180" y1="230" x2="306" y2="150" stroke="#8b5cf6" stroke-width="2.5" marker-end="url(#arrow-axis-12b)"/>
                <text x="240" y="180" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#8b5cf6">OM⃗</text>
              </svg>
              <div class="tikz-caption-text">Hình 7.2: Toạ độ điểm M(x; y; z) và các hình chiếu vuông góc lên các trục, mặt phẳng toạ độ</div>
            </div>

            <!-- CHECKPOINT 1 (GIỮA ĐOẠN 1B) -->
            <div class="sub-checkpoint-card" id="cp-card-12-7-1b-1">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-bolt"></i> Thầy Sáng hỏi nhanh (Giữa đoạn 1b)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Trong không gian $Oxyz$, cho điểm $A(3; -4; 7)$. Toạ độ hình chiếu vuông góc của $A$ lên mặt phẳng toạ độ $(Oxy)$ là:</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-12-7-1b-1">A. $(3; -4; 0)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-1b-1">B. $(3; 0; 7)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-1b-1">C. $(0; -4; 7)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-1b-1">D. $(0; 0; 7)$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-12-7-1b-1">
                <strong>Lời giải của Thầy Sáng:</strong> Chính xác! Chiếu lên mặt phẳng $(Oxy)$ thì giữ nguyên $x = 3$ và $y = -4$, còn thành phần khuyết $z$ chuyển thành 0. Vậy toạ độ là $(3; -4; 0)$.
              </div>
            </div>

            <!-- CHECKPOINT 2 (CUỐI ĐOẠN 1B) -->
            <div class="sub-checkpoint-card" id="cp-card-12-7-1b-2">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-check-double"></i> Thử thách củng cố (Cuối đoạn 1b)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Trong không gian $Oxyz$, cho điểm $B(-2; 5; -9)$. Toạ độ hình chiếu vuông góc của $B$ lên trục cao $Oz$ là:</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-1b-2">A. $(-2; 0; 0)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-1b-2">B. $(0; 5; 0)$</button>
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-12-7-1b-2">C. $(0; 0; -9)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-1b-2">D. $(-2; 5; 0)$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-12-7-1b-2">
                <strong>Lời giải của Thầy Sáng:</strong> Rất tốt! Chiếu lên trục cao $Oz$ thì chỉ giữ lại cao độ $z = -9$, còn hoành độ và tung độ đều bằng 0. Vậy toạ độ là $(0; 0; -9)$.
              </div>
            </div>

            <!-- MẸO NHỚ THẦN TỐC CỦA THẦY SÁNG -->
            <div class="teacher-memo-tip-card">
              <div class="teacher-memo-title"><i class="fa-solid fa-lightbulb"></i> Mẹo nhớ thần tốc của Thầy Sáng: "Chiếu lên đâu - Giữ nguyên đó"</div>
              <div class="teacher-memo-body">
                Khẩu quyết độc quyền của Thầy Sáng: <strong>"Chiếu lên đâu thì GIỮ NGUYÊN toạ độ đó; KHUYẾT cái gì thì toạ độ cái đó bằng 0!"</strong><br>
                Ví dụ: Chiếu lên $(Oxy)$ $\\rightarrow$ có $x, y$ (giữ nguyên $x, y$), khuyết $z$ $\\rightarrow z = 0$. Chiếu lên trục $Oz$ $\\rightarrow$ có $z$ (giữ nguyên $z$), khuyết $x, y$ $\\rightarrow x = 0, y = 0$!
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 2: Xác định toạ độ các đỉnh hình hộp chữ nhật",
            problem: "Trong không gian $Oxyz$, cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có đỉnh $A$ trùng với gốc toạ độ $O(0;0;0)$. Các đỉnh $B, D, A'$ lần lượt nằm trên các tia $Ox, Oy, Oz$ sao cho $AB = 4, AD = 6, AA' = 3$. Hãy xác định toạ độ của tất cả các đỉnh còn lại của hình hộp chữ nhật.",
            solution: `
              <p>• Đỉnh $A$ là gốc toạ độ: $A(0; 0; 0)$.</p>
              <p>• Đỉnh $B$ nằm trên tia $Ox$ cách $O$ đoạn $AB = 4$: $B(4; 0; 0)$.</p>
              <p>• Đỉnh $D$ nằm trên tia $Oy$ cách $O$ đoạn $AD = 6$: $D(0; 6; 0)$.</p>
              <p>• Đỉnh $A'$ nằm trên tia $Oz$ cách $O$ đoạn $AA' = 3$: $A'(0; 0; 3)$.</p>
              <p>• Đỉnh $C$ nằm trên mặt phẳng đáy $(Oxy)$: $C(4; 6; 0)$.</p>
              <p>• Đỉnh $B'$ có hình chiếu lên $Ox$ là $B(4;0;0)$ và lên $Oz$ là $A'(0;0;3)$: $B'(4; 0; 3)$.</p>
              <p>• Đỉnh $D'$ có hình chiếu lên $Oy$ là $D(0;6;0)$ và lên $Oz$ là $A'(0;0;3)$: $D'(0; 6; 3)$.</p>
              <p>• Đỉnh $C'$ đối diện với $A$: $C'(4; 6; 3)$.</p>
            `,
            teacherGuidance: "Nắm vững toạ độ đỉnh hình hộp chữ nhật là nền tảng để giải quyết 90% các bài toán toạ độ hoá hình học không gian trong đề thi đại học."
          }
        }
      ]
    },
    {
      id: "12-c2-b7-s2",
      num: "2",
      title: "Toạ độ của véctơ trong không gian",
      subsections: [
        {
          key: "a",
          title: "Định nghĩa toạ độ véctơ và các véctơ đặc biệt",
          summary: "u = (x; y; z) <=> u = x.i + y.j + z.k. Toạ độ véctơ i, j, k, 0. Điều kiện hai véctơ bằng nhau.",
          audioUrl: "assets/audio/b12_7_sec2a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
          contentHtml: `
            <div class="definition-card">
              <div class="def-badge"><i class="fa-solid fa-arrows-split-up-and-left"></i> Định nghĩa toạ độ của véctơ trong không gian</div>
              <p>Trong không gian $Oxyz$, cho véctơ $\\vec{u}$. Luôn tồn tại <strong>duy nhất</strong> một bộ ba số thực $(x; y; z)$ sao cho:</p>
              <div class="math-highlight-box">
                $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}$
              </div>
              <p>Bộ ba số $(x; y; z)$ đó được gọi là <strong>toạ độ của véctơ $\\vec{u}$</strong>, ký hiệu $\\vec{u} = (x; y; z)$ hoặc $\\vec{u}(x; y; z)$.</p>
            </div>

            <div class="theorem-card" style="margin-top: 14px;">
              <div class="theorem-badge"><i class="fa-solid fa-star"></i> Toạ độ các véctơ đặc biệt</div>
              <ul>
                <li>$\\vec{i} = (1; 0; 0)$</li>
                <li>$\\vec{j} = (0; 1; 0)$</li>
                <li>$\\vec{k} = (0; 0; 1)$</li>
                <li>Véctơ-không: $\\vec{0} = (0; 0; 0)$</li>
              </ul>
              <div class="math-highlight-box" style="margin-top: 10px;">
                <strong>Điều kiện hai véctơ bằng nhau:</strong><br>
                Cho $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$. Khi đó:<br>
                $\\vec{u} = \\vec{v} \\iff \\begin{cases} x_1 = x_2 \\\\ y_1 = y_2 \\\\ z_1 = z_2 \\end{cases}$
              </div>
            </div>

            <!-- CHECKPOINT 1 (GIỮA ĐOẠN 2A) -->
            <div class="sub-checkpoint-card" id="cp-card-12-7-2a-1">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-bolt"></i> Thầy Sáng hỏi nhanh (Giữa đoạn 2a)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Trong không gian $Oxyz$, cho véctơ $\\vec{u} = 4\\vec{i} - 7\\vec{k}$. Toạ độ của véctơ $\\vec{u}$ là:</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-2a-1">A. $(4; -7; 0)$</button>
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-12-7-2a-1">B. $(4; 0; -7)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-2a-1">C. $(4; -7)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-2a-1">D. $(0; 4; -7)$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-12-7-2a-1">
                <strong>Lời giải của Thầy Sáng:</strong> Chính xác! Biểu diễn đầy đủ là: $\\vec{u} = 4\\vec{i} + 0\\vec{j} - 7\\vec{k}$. Do đó $x = 4, y = 0, z = -7 \\Rightarrow \\vec{u} = (4; 0; -7)$.
              </div>
            </div>

            <!-- CHECKPOINT 2 (CUỐI ĐOẠN 2A) -->
            <div class="sub-checkpoint-card" id="cp-card-12-7-2a-2">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-check-double"></i> Thử thách củng cố (Cuối đoạn 2a)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Cho hai véctơ $\\vec{a} = (x - 1; 3; z + 2)$ và $\\vec{b} = (2; y + 1; -4)$. Để $\\vec{a} = \\vec{b}$ thì giá trị của $(x; y; z)$ là:</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-12-7-2a-2">A. $(3; 2; -6)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-2a-2">B. $(1; 4; -2)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-2a-2">C. $(3; 2; -2)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-2a-2">D. $(2; 3; -4)$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-12-7-2a-2">
                <strong>Lời giải của Thầy Sáng:</strong> Đúng rồi! Giải hệ: $x - 1 = 2 \\Rightarrow x = 3$; $y + 1 = 3 \\Rightarrow y = 2$; $z + 2 = -4 \\Rightarrow z = -6$. Vậy $(x; y; z) = (3; 2; -6)$.
              </div>
            </div>

            <!-- MẸO NHỚ CỦA THẦY SÁNG -->
            <div class="teacher-memo-tip-card">
              <div class="teacher-memo-title"><i class="fa-solid fa-lightbulb"></i> Mẹo nhớ của Thầy Sáng: "Thứ tự vàng: i trước, j giữa, k sau"</div>
              <div class="teacher-memo-body">
                Khi đề bài cho biểu thức véctơ $\\vec{u}$, các em phải luôn kiểm tra đủ bộ ba véctơ $\\vec{i}, \\vec{j}, \\vec{k}$. Nếu khuyết véctơ nào thì toạ độ tương ứng bằng $0$. Đề thi rất hay "gài bẫy" đảo thứ tự như $\\vec{u} = 2\\vec{j} - 3\\vec{i} + \\vec{k}$, các em phải xếp lại thành $-3\\vec{i} + 2\\vec{j} + 1\\vec{k} \\Rightarrow (-3; 2; 1)$ kẻo mất điểm oan nhé!
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 3: Xác định toạ độ véctơ và thực hiện phép toán",
            problem: "Trong không gian $Oxyz$, cho véctơ $\\vec{a} = 2\\vec{i} - 5\\vec{j} + 3\\vec{k}$, $\\vec{b} = -\\vec{i} + 4\\vec{k}$ và $\\vec{c} = 3\\vec{j}$. Tìm toạ độ của các véctơ $\\vec{a}, \\vec{b}, \\vec{c}$ và tìm toạ độ véctơ $\\vec{u} = \\vec{a} + \\vec{b} - \\vec{c}$.",
            solution: `
              <p>• $\\vec{a} = 2\\vec{i} - 5\\vec{j} + 3\\vec{k} \\Rightarrow \\vec{a} = (2; -5; 3)$.</p>
              <p>• $\\vec{b} = -1\\vec{i} + 0\\vec{j} + 4\\vec{k} \\Rightarrow \\vec{b} = (-1; 0; 4)$.</p>
              <p>• $\\vec{c} = 0\\vec{i} + 3\\vec{j} + 0\\vec{k} \\Rightarrow \\vec{c} = (0; 3; 0)$.</p>
              <p>• Tính toạ độ $\\vec{u} = \\vec{a} + \\vec{b} - \\vec{c}$:</p>
              <p>$\\begin{cases} x_u = 2 + (-1) - 0 = 1 \\\\ y_u = -5 + 0 - 3 = -8 \\\\ z_u = 3 + 4 - 0 = 7 \\end{cases} \\Rightarrow \\vec{u} = (1; -8; 7)$.</p>
            `,
            teacherGuidance: "Luôn viết lại toạ độ dưới dạng bộ ba số trước khi cộng trừ để tránh nhầm lẫn giữa dấu cộng và dấu trừ."
          }
        },
        {
          key: "b",
          title: "Vectơ AB, Toạ độ trung điểm & Trọng tâm tam giác",
          summary: "AB = (xB - xA; yB - yA; zB - zA). Toạ độ trung điểm M của AB. Toạ độ trọng tâm G của tam giác ABC.",
          audioUrl: "assets/audio/b12_7_sec2b.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
          contentHtml: `
            <div class="definition-card">
              <div class="def-badge"><i class="fa-solid fa-calculator"></i> Các công thức toạ độ nền tảng trong không gian Oxyz</div>
              <p>Cho hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$ trong không gian $Oxyz$:</p>

              <h6 class="fw-bold text-danger" style="margin-top: 10px;"><i class="fa-solid fa-arrow-right-long"></i> 1. Toạ độ véctơ $\\vec{AB}$ (Quy tắc 'Sau trừ Trước'):</h6>
              <div class="math-highlight-box">
                $\\vec{AB} = (x_B - x_A;\\; y_B - y_A;\\; z_B - z_A)$
              </div>

              <h6 class="fw-bold text-success" style="margin-top: 14px;"><i class="fa-solid fa-circle-dot"></i> 2. Toạ độ trung điểm $M$ của đoạn thẳng $AB$:</h6>
              <div class="math-highlight-box">
                $M\\left(\\dfrac{x_A + x_B}{2};\\; \\dfrac{y_A + y_B}{2};\\; \\dfrac{z_A + z_B}{2}\\right)$
              </div>

              <h6 class="fw-bold text-primary" style="margin-top: 14px;"><i class="fa-solid fa-shapes"></i> 3. Toạ độ trọng tâm $G$ của tam giác $ABC$ (với $C(x_C; y_C; z_C)$):</h6>
              <div class="math-highlight-box">
                $G\\left(\\dfrac{x_A + x_B + x_C}{3};\\; \\dfrac{y_A + y_B + y_C}{3};\\; \\dfrac{z_A + z_B + z_C}{3}\\right)$
              </div>
            </div>

            <!-- HÌNH VẼ TIKZ / SVG TAM GIÁC VÀ TRỌNG TÂM 3D -->
            <div class="tikz-svg-figure-box">
              <svg viewBox="0 0 500 240" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
                <!-- Tam giác ABC -->
                <polygon points="250,30 80,190 420,190" fill="rgba(2, 132, 199, 0.06)" stroke="#0284c7" stroke-width="2"/>

                <!-- Trung điểm M của BC -->
                <circle cx="250" cy="190" r="4.5" fill="#10b981"/>
                <text x="255" y="210" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#10b981">M(trung điểm)</text>

                <!-- Đường trung tuyến AM -->
                <line x1="250" y1="30" x2="250" y2="190" stroke="#10b981" stroke-width="1.6" stroke-dasharray="4,4"/>

                <!-- Trọng tâm G -->
                <circle cx="250" cy="137" r="5.5" fill="#ef4444"/>
                <text x="260" y="142" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#ef4444">G(trọng tâm)</text>

                <!-- Các đỉnh A, B, C -->
                <circle cx="250" cy="30" r="5" fill="#1e293b"/>
                <text x="250" y="20" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">A(x_A; y_A; z_A)</text>

                <circle cx="80" cy="190" r="5" fill="#1e293b"/>
                <text x="40" y="210" font-family="system-ui, sans-serif" font-size="14" font-weight="700">B(x_B; y_B; z_B)</text>

                <circle cx="420" cy="190" r="5" fill="#1e293b"/>
                <text x="425" y="210" font-family="system-ui, sans-serif" font-size="14" font-weight="700">C(x_C; y_C; z_C)</text>
              </svg>
              <div class="tikz-caption-text">Hình 7.3: Minh hoạ toạ độ trung điểm M và trọng tâm tam giác G trong không gian</div>
            </div>

            <!-- CHECKPOINT 1 (GIỮA ĐOẠN 2B) -->
            <div class="sub-checkpoint-card" id="cp-card-12-7-2b-1">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-bolt"></i> Thầy Sáng hỏi nhanh (Giữa đoạn 2b)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Trong không gian $Oxyz$, cho $A(1; 3; -2)$ và $B(4; -1; 5)$. Toạ độ của véctơ $\\vec{AB}$ là:</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-12-7-2b-1">A. $(3; -4; 7)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-2b-1">B. $(-3; 4; -7)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-2b-1">C. $(5; 2; 3)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-2b-1">D. $(2.5; 1; 1.5)$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-12-7-2b-1">
                <strong>Lời giải của Thầy Sáng:</strong> Tuyệt vời! Theo quy tắc "Sau trừ Trước": $\\vec{AB} = (4 - 1; -1 - 3; 5 - (-2)) = (3; -4; 7)$.
              </div>
            </div>

            <!-- CHECKPOINT 2 (CUỐI ĐOẠN 2B) -->
            <div class="sub-checkpoint-card" id="cp-card-12-7-2b-2">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-check-double"></i> Thử thách củng cố (Cuối đoạn 2b)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Cho hai điểm $A(2; -4; 6)$ và $B(4; 2; -2)$. Toạ độ trung điểm $M$ của đoạn thẳng $AB$ là:</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-2b-2">A. $(2; 6; -8)$</button>
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-12-7-2b-2">B. $(3; -1; 2)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-2b-2">C. $(6; -2; 4)$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-12-7-2b-2">D. $(1; 3; -4)$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-12-7-2b-2">
                <strong>Lời giải của Thầy Sáng:</strong> Rất chuẩn xác! Trung điểm lấy cộng lại chia đôi: $x_M = \\dfrac{2+4}{2} = 3; y_M = \\dfrac{-4+2}{2} = -1; z_M = \\dfrac{6+(-2)}{2} = 2$. Vậy $M(3; -1; 2)$.
              </div>
            </div>

            <!-- MẸO NHỚ VÀNG CỦA THẦY SÁNG -->
            <div class="teacher-memo-tip-card">
              <div class="teacher-memo-title"><i class="fa-solid fa-lightbulb"></i> Mẹo nhớ vàng của Thầy Sáng: "Sau trừ trước, chia đôi, chia ba"</div>
              <div class="teacher-memo-body">
                Ba câu khẩu quyết nằm lòng khi làm hình toạ độ không gian:<br>
                1. <strong>Véctơ $\\vec{AB}$</strong>: Lấy ngọn trừ gốc (toạ độ điểm sau $B$ trừ toạ độ điểm trước $A$).<br>
                2. <strong>Trung điểm $M$</strong>: Lấy hai đầu mút cộng lại chia đôi.<br>
                3. <strong>Trọng tâm $G$</strong>: Lấy toạ độ ba đỉnh cộng lại chia ba!
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 4: Tìm toạ độ đỉnh thứ tư của hình bình hành",
            problem: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; -1), B(2; -1; 3), C(-4; 7; 5)$. Tìm toạ độ đỉnh $D$ sao cho tứ giác $ABCD$ là hình bình hành.",
            solution: `
              <p>• Gọi toạ độ đỉnh $D(x_D; y_D; z_D)$.</p>
              <p>• Tứ giác $ABCD$ là hình bình hành khi và chỉ khi: $\\vec{AD} = \\vec{BC}$.</p>
              <p>• Ta tính toạ độ hai véctơ:</p>
              <p>$\\vec{AD} = (x_D - 1;\\; y_D - 2;\\; z_D + 1)$</p>
              <p>$\\vec{BC} = (-4 - 2;\\; 7 - (-1);\\; 5 - 3) = (-6;\\; 8;\\; 2)$</p>
              <p>• Cho hai véctơ bằng nhau:</p>
              <p>$\\begin{cases} x_D - 1 = -6 \\\\ y_D - 2 = 8 \\\\ z_D + 1 = 2 \\end{cases} \\iff \\begin{cases} x_D = -5 \\\\ y_D = 10 \\\\ z_D = 1 \\end{cases}$</p>
              <p>• Vậy toạ độ đỉnh $D$ cần tìm là: $D(-5; 10; 1)$.</p>
            `,
            teacherGuidance: "Chú ý thứ tự các đỉnh của hình bình hành: ABCD thì véctơ AD = véctơ BC, hoặc véctơ AB = véctơ DC (tuyệt đối không viết nhầm thành véctơ CB)."
          }
        }
      ]
    }
  ],

  // 4. Chốt bài học
  realworldWrapup: {
    title: "CHỐT BÀI HỌC: GIẢI MÃ BÀI TOÁN KIỂM SOÁT KHÔNG LƯU RADAR MÁY BAY",
    recap: "Quay trở lại tình huống dẫn nhập ở đầu bài học: Tại trạm kiểm soát không lưu radar sân bay quốc tế Tân Sơn Nhất, có hai máy bay thương mại đang bay cùng độ cao 12 km, có toạ độ không gian lần lượt là A(30; 40; 12) và B(36; 48; 12) (đơn vị: km). Làm thế nào để tính ngay khoảng cách thực tế giữa hai máy bay để đảm bảo an toàn bay?",
    solution: `
      <p><strong>1. Mô hình hoá toạ độ:</strong></p>
      <ul>
        <li>Trạm radar được chọn làm gốc toạ độ $O(0;0;0)$.</li>
        <li>Máy bay thứ nhất có vị trí $A(30; 40; 12)$.</li>
        <li>Máy bay thứ hai có vị trí $B(36; 48; 12)$.</li>
      </ul>
      <p><strong>2. Tính véctơ khoảng cách và khoảng cách thực tế:</strong></p>
      <p>Véctơ nối hai máy bay: $\\vec{AB} = (36 - 30;\\; 48 - 40;\\; 12 - 12) = (6;\\; 8;\\; 0)$.</p>
      <p>Khoảng cách an toàn thực tế giữa hai máy bay là độ dài đoạn thẳng $AB$:</p>
      <div class="math-highlight-box">
        $$AB = |\\vec{AB}| = \\sqrt{6^2 + 8^2 + 0^2} = \\sqrt{36 + 64 + 0} = \\sqrt{100} = 10\\text{ km}$$
      </div>
      <p><strong>Kết luận của Thầy Sáng:</strong> Hai máy bay cách nhau đúng $10\\text{ km}$, đảm bảo khoảng cách an toàn bay tối thiểu theo quy định hàng không quốc tế. Nhờ hệ toạ độ $Oxyz$, các kỹ sư không lưu có thể tính toán tức thì vị trí và khoảng cách của hàng trăm máy bay trên cùng một màn hình radar!</p>
    `,
    audioUrl: "assets/audio/b12_7_wrapup.mp3",
    buttonLabel: "Nghe thầy Sáng chốt bài học",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN 3 DẠNG THỨC THI MỚI 2025)
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2025 BỘ GD&ĐT)",

    // DẠNG 1: 5 CÂU NHIỀU LỰA CHỌN (DỄ - NHẬN BIẾT)
    part1MultipleChoice: [
      {
        id: "p1-q1",
        num: 1,
        question: "Trong không gian $Oxyz$, cho véctơ $\\vec{a} = 2\\vec{i} - 3\\vec{j} + 4\\vec{k}$. Toạ độ của véctơ $\\vec{a}$ là:",
        options: [
          "A. $(2; -3; 4)$",
          "B. $(2; 3; 4)$",
          "C. $(-3; 2; 4)$",
          "D. $(4; -3; 2)$"
        ],
        correctIndex: 0,
        solution: "Theo định nghĩa: $\\vec{a} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\Leftrightarrow \\vec{a} = (x; y; z)$. Với $\\vec{a} = 2\\vec{i} - 3\\vec{j} + 4\\vec{k}$ ta có ngay toạ độ là $(2; -3; 4)$. Chọn phương án A.",
        similarVariation: {
          question: "Trong không gian $Oxyz$, cho véctơ $\\vec{a} = -5\\vec{i} + 2\\vec{j} - \\vec{k}$. Toạ độ của véctơ $\\vec{a}$ là:",
          options: [
            "A. $(-5; 2; -1)$",
            "B. $(5; -2; 1)$",
            "C. $(2; -5; -1)$",
            "D. $(-5; 2; 1)$"
          ],
          correctIndex: 0,
          solution: "Ta có $\\vec{a} = -5\\vec{i} + 2\\vec{j} - 1\\vec{k} \\Rightarrow \\vec{a} = (-5; 2; -1)$. Chọn phương án A."
        }
      },
      {
        id: "p1-q2",
        num: 2,
        question: "Trong không gian $Oxyz$, cho điểm $M(1; -2; 3)$. Hình chiếu vuông góc của điểm $M$ lên mặt phẳng toạ độ $(Oxy)$ có toạ độ là:",
        options: [
          "A. $(1; -2; 0)$",
          "B. $(1; 0; 3)$",
          "C. $(0; -2; 3)$",
          "D. $(0; 0; 3)$"
        ],
        correctIndex: 0,
        solution: "Hình chiếu của điểm $M(x; y; z)$ lên mặt phẳng $(Oxy)$ có toạ độ là $(x; y; 0)$. Vậy điểm cần tìm là $(1; -2; 0)$. Chọn phương án A.",
        similarVariation: {
          question: "Trong không gian $Oxyz$, cho điểm $M(4; 5; -6)$. Hình chiếu vuông góc của điểm $M$ lên mặt phẳng toạ độ $(Oyz)$ có toạ độ là:",
          options: [
            "A. $(0; 5; -6)$",
            "B. $(4; 5; 0)$",
            "C. $(4; 0; -6)$",
            "D. $(0; 0; -6)$"
          ],
          correctIndex: 0,
          solution: "Chiếu lên mặt phẳng $(Oyz)$ thì $x = 0$, giữ nguyên $y$ và $z$. Vậy toạ độ là $(0; 5; -6)$. Chọn phương án A."
        }
      },
      {
        id: "p1-q3",
        num: 3,
        question: "Trong không gian $Oxyz$, cho hai điểm $A(2; 1; -3)$ và $B(0; 3; 1)$. Toạ độ của véctơ $\\vec{AB}$ là:",
        options: [
          "A. $(-2; 2; 4)$",
          "B. $(2; -2; -4)$",
          "C. $(1; 2; -1)$",
          "D. $(0; 3; -3)$"
        ],
        correctIndex: 0,
        solution: "Toạ độ $\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (0 - 2; 3 - 1; 1 - (-3)) = (-2; 2; 4)$. Chọn phương án A.",
        similarVariation: {
          question: "Trong không gian $Oxyz$, cho hai điểm $A(3; -2; 1)$ và $B(1; 4; -3)$. Toạ độ của véctơ $\\vec{AB}$ là:",
          options: [
            "A. $(-2; 6; -4)$",
            "B. $(2; -6; 4)$",
            "C. $(4; 2; -2)$",
            "D. $(2; 1; -1)$"
          ],
          correctIndex: 0,
          solution: "$\\vec{AB} = (1 - 3; 4 - (-2); -3 - 1) = (-2; 6; -4)$. Chọn phương án A."
        }
      },
      {
        id: "p1-q4",
        num: 4,
        question: "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; 3)$ và $B(3; 4; 5)$. Toạ độ trung điểm $I$ của đoạn thẳng $AB$ là:",
        options: [
          "A. $(2; 3; 4)$",
          "B. $(4; 6; 8)$",
          "C. $(1; 1; 1)$",
          "D. $(2; 2; 2)$"
        ],
        correctIndex: 0,
        solution: "Toạ độ trung điểm $I$: $x_I = \\dfrac{1+3}{2} = 2, y_I = \\dfrac{2+4}{2} = 3, z_I = \\dfrac{3+5}{2} = 4$. Vậy $I(2; 3; 4)$. Chọn phương án A.",
        similarVariation: {
          question: "Trong không gian $Oxyz$, cho hai điểm $A(-1; 3; 2)$ và $B(5; 1; 4)$. Toạ độ trung điểm $I$ của đoạn thẳng $AB$ là:",
          options: [
            "A. $(2; 2; 3)$",
            "B. $(4; 4; 6)$",
            "C. $(3; -1; 1)$",
            "D. $(2; 4; 3)$"
          ],
          correctIndex: 0,
          solution: "$I\\left(\\dfrac{-1+5}{2}; \\dfrac{3+1}{2}; \\dfrac{2+4}{2}\\right) = (2; 2; 3)$. Chọn phương án A."
        }
      },
      {
        id: "p1-q5",
        num: 5,
        question: "Trong không gian $Oxyz$, véctơ đơn vị $\\vec{k}$ trên trục cao $Oz$ có toạ độ là:",
        options: [
          "A. $(0; 0; 1)$",
          "B. $(1; 0; 0)$",
          "C. $(0; 1; 0)$",
          "D. $(1; 1; 1)$"
        ],
        correctIndex: 0,
        solution: "Véctơ đơn vị $\\vec{k}$ trên trục $Oz$ có toạ độ là $(0; 0; 1)$. Chọn phương án A.",
        similarVariation: {
          question: "Trong không gian $Oxyz$, véctơ đơn vị $\\vec{i}$ trên trục hoành $Ox$ có toạ độ là:",
          options: [
            "A. $(1; 0; 0)$",
            "B. $(0; 1; 0)$",
            "C. $(0; 0; 1)$",
            "D. $(0; 0; 0)$"
          ],
          correctIndex: 0,
          solution: "Véctơ đơn vị $\\vec{i}$ trên trục $Ox$ có toạ độ là $(1; 0; 0)$. Chọn phương án A."
        }
      }
    ],

    // DẠNG 2: 3 CÂU ĐÚNG / SAI (THÔNG HIỂU - CHUẨN 4 MỆNH ĐỀ CẤU TRÚC 2025)
    part2TrueFalse: [
      {
        id: "p2-q1",
        num: 1,
        context: "Trong không gian $Oxyz$, cho ba điểm $A(1; 2; -1)$, $B(2; -1; 3)$, $C(-4; 7; 5)$.",
        statements: [
          {
            label: "a",
            text: "Toạ độ của véctơ $\\vec{AB}$ là $(1; -3; 4)$.",
            isTrue: true,
            explain: "Đúng vì $\\vec{AB} = (2 - 1; -1 - 2; 3 - (-1)) = (1; -3; 4)$."
          },
          {
            label: "b",
            text: "Toạ độ trung điểm $M$ của đoạn thẳng $AB$ là $\\left(\\dfrac{3}{2}; \\dfrac{1}{2}; 1\\right)$.",
            isTrue: true,
            explain: "Đúng vì $x_M = \\dfrac{1+2}{2} = \\dfrac{3}{2}; y_M = \\dfrac{2+(-1)}{2} = \\dfrac{1}{2}; z_M = \\dfrac{-1+3}{2} = 1$."
          },
          {
            label: "c",
            text: "Toạ độ trọng tâm $G$ của tam giác $ABC$ là $\\left(-\\dfrac{1}{3}; \\dfrac{8}{3}; \\dfrac{7}{3}\\right)$.",
            isTrue: true,
            explain: "Đúng vì $x_G = \\dfrac{1+2+(-4)}{3} = -\\dfrac{1}{3}; y_G = \\dfrac{2+(-1)+7}{3} = \\dfrac{8}{3}; z_G = \\dfrac{-1+3+5}{3} = \\dfrac{7}{3}$."
          },
          {
            label: "d",
            text: "Ba điểm $A, B, C$ thẳng hàng.",
            isTrue: false,
            explain: "Sai vì $\\vec{AB} = (1; -3; 4)$ và $\\vec{AC} = (-5; 5; 6)$. Ta thấy $\\dfrac{1}{-5} \\neq \\dfrac{-3}{5}$, do đó hai véctơ $\\vec{AB}$ và $\\vec{AC}$ không cùng phương, nghĩa là ba điểm $A, B, C$ không thẳng hàng."
          }
        ],
        similarVariation: {
          context: "Trong không gian $Oxyz$, cho ba điểm $A(2; 1; 0)$, $B(0; 3; 2)$, $C(4; -1; -2)$.",
          statements: [
            { label: "a", text: "Toạ độ véctơ $\\vec{AB} = (-2; 2; 2)$.", isTrue: true, explain: "$\\vec{AB} = (0 - 2; 3 - 1; 2 - 0) = (-2; 2; 2)$. Đúng." },
            { label: "b", text: "Toạ độ trung điểm $M$ của $AB$ là $(1; 2; 1)$.", isTrue: true, explain: "$M = ((2+0)/2; (1+3)/2; (0+2)/2) = (1; 2; 1)$. Đúng." },
            { label: "c", text: "Toạ độ trọng tâm $G$ của tam giác $ABC$ là $(2; 1; 0)$.", isTrue: true, explain: "$G = ((2+0+4)/3; (1+3-1)/3; (0+2-2)/3) = (2; 1; 0)$. Đúng." },
            { label: "d", text: "Ba điểm $A, B, C$ thẳng hàng.", isTrue: true, explain: "$\\vec{AB} = (-2; 2; 2)$ và $\\vec{AC} = (2; -2; -2) = -\\vec{AB}$. Hai véctơ cùng phương nên ba điểm A, B, C thẳng hàng. Đúng." }
          ]
        }
      },
      {
        id: "p2-q2",
        num: 2,
        context: "Trong không gian $Oxyz$, cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có đỉnh $A$ trùng gốc toạ độ $O(0;0;0)$, đỉnh $B(3; 0; 0)$, $D(0; 4; 0)$, $A'(0; 0; 5)$.",
        statements: [
          {
            label: "a",
            text: "Toạ độ đỉnh $C$ nằm trên mặt phẳng $(Oxy)$ là $C(3; 4; 0)$.",
            isTrue: true,
            explain: "Đúng vì $ABCD$ là hình chữ nhật trên mặt phẳng đáy (Oxy), toạ độ C có $x = 3, y = 4, z = 0$."
          },
          {
            label: "b",
            text: "Toạ độ đỉnh $C'$ đối diện với $A$ là $C'(3; 4; 5)$.",
            isTrue: true,
            explain: "Đúng vì $C'$ có hình chiếu lên đáy là $C(3; 4; 0)$ và cao độ bằng $AA' = 5$."
          },
          {
            label: "c",
            text: "Toạ độ tâm đối xứng $I$ của hình hộp chữ nhật là $I\\left(\\dfrac{3}{2}; 2; \\dfrac{5}{2}\\right)$.",
            isTrue: true,
            explain: "Đúng vì $I$ là trung điểm của đường chéo $AC'$, toạ độ $I = ((0+3)/2; (0+4)/2; (0+5)/2) = (1.5; 2; 2.5)$."
          },
          {
            label: "d",
            text: "Véctơ đường chéo $\\vec{AC'} = (3; 4; -5)$.",
            isTrue: false,
            explain: "Sai vì $\\vec{AC'} = (3 - 0; 4 - 0; 5 - 0) = (3; 4; 5)$ (cao độ phải là dương 5)."
          }
        ],
        similarVariation: {
          context: "Trong không gian $Oxyz$, cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng 2 có đỉnh $A(0;0;0)$, $B(2;0;0)$, $D(0;2;0)$, $A'(0;0;2)$.",
          statements: [
            { label: "a", text: "Toạ độ đỉnh $C$ là $(2; 2; 0)$.", isTrue: true, explain: "Đúng." },
            { label: "b", text: "Toạ độ đỉnh $C'$ là $(2; 2; 2)$.", isTrue: true, explain: "Đúng." },
            { label: "c", text: "Toạ độ tâm $I$ của hình lập phương là $(1; 1; 1)$.", isTrue: true, explain: "Đúng vì I là trung điểm AC'." },
            { label: "d", text: "Độ dài đường chéo $AC' = 2\\sqrt{3}$.", isTrue: true, explain: "Đúng vì AC' = sqrt(2^2 + 2^2 + 2^2) = 2*sqrt(3)." }
          ]
        }
      },
      {
        id: "p2-q3",
        num: 3,
        context: "Trong không gian $Oxyz$, cho véctơ $\\vec{u} = 2\\vec{i} - \\vec{j} + 2\\vec{k}$.",
        statements: [
          {
            label: "a",
            text: "Toạ độ của véctơ $\\vec{u}$ là $(2; -1; 2)$.",
            isTrue: true,
            explain: "Đúng theo định nghĩa toạ độ véctơ."
          },
          {
            label: "b",
            text: "Độ dài của véctơ $\\vec{u}$ bằng 3.",
            isTrue: true,
            explain: "Đúng vì $|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$."
          },
          {
            label: "c",
            text: "Véctơ $\\vec{v} = (-4; 2; -4)$ cùng phương và ngược hướng với véctơ $\\vec{u}$.",
            isTrue: true,
            explain: "Đúng vì $\\vec{v} = -2\\vec{u}$ (hệ số $k = -2 < 0$ nên cùng phương và ngược hướng)."
          },
          {
            label: "d",
            text: "Véctơ $\\vec{u}$ vuông góc với véctơ $\\vec{w} = (1; 2; 1)$.",
            isTrue: false,
            explain: "Sai vì tích vô hướng $\\vec{u} \\cdot \\vec{w} = 2(1) + (-1)(2) + 2(1) = 2 - 2 + 2 = 2 \\neq 0$."
          }
        ],
        similarVariation: {
          context: "Trong không gian $Oxyz$, cho véctơ $\\vec{u} = \\vec{i} + 2\\vec{j} - 2\\vec{k}$.",
          statements: [
            { label: "a", text: "Toạ độ của véctơ $\\vec{u}$ là $(1; 2; -2)$.", isTrue: true, explain: "Đúng." },
            { label: "b", text: "Độ dài $|\\vec{u}| = 3$.", isTrue: true, explain: "Đúng vì sqrt(1 + 4 + 4) = 3." },
            { label: "c", text: "Véctơ $\\vec{v} = (2; 4; -4)$ cùng hướng với $\\vec{u}$.", isTrue: true, explain: "Đúng vì v = 2u với k = 2 > 0." },
            { label: "d", text: "Tích vô hướng $\\vec{u} \\cdot \\vec{k} = -2$.", isTrue: true, explain: "Đúng vì k = (0; 0; 1) nên u.k = -2." }
          ]
        }
      }
    ],

    // DẠNG 3: 2 CÂU TRẢ LỜI NGẮN (TOÁN THỰC TẾ - VẬN DỤNG)
    part3ShortAnswer: [
      {
        id: "p3-q1",
        num: 1,
        title: "Câu 1 (Toán thực tế radar kiểm soát không lưu):",
        prompt: "Một trạm kiểm soát radar không lưu đặt tại gốc toạ độ $O(0;0;0)$ phát hiện một máy bay tại vị trí điểm $A$ có toạ độ $(30; 40; 12)$ (đơn vị trên mỗi trục là kilômét, trục $Oz$ thẳng đứng hướng lên trời đo độ cao). Hỏi khoảng cách đường chim bay từ trạm radar $O$ đến máy bay $A$ bằng bao nhiêu kilômét?",
        correctAnswer: "51.42",
        acceptedTolerance: 0.1,
        unit: "km",
        solution: "Khoảng cách đường chim bay từ trạm $O(0;0;0)$ đến máy bay $A(30; 40; 12)$ chính là độ dài đoạn thẳng $OA$:\\n$$OA = \\sqrt{x_A^2 + y_A^2 + z_A^2} = \\sqrt{30^2 + 40^2 + 12^2} = \\sqrt{900 + 1600 + 144} = \\sqrt{2644} \\approx 51.42\\text{ km}$$\\nĐáp số: 51.42 (hoặc làm tròn 51.4).",
        similarVariation: {
          prompt: "Một trạm radar đặt tại gốc $O(0;0;0)$ phát hiện một trực thăng cứu hộ tại vị trí $A(12; 16; 15)$ (đơn vị: km). Tính khoảng cách đường chim bay từ trạm $O$ đến trực thăng $A$ theo kilômét (làm tròn đến hàng phần mười).",
          correctAnswer: "25",
          unit: "km",
          solution: "$OA = \\sqrt{12^2 + 16^2 + 15^2} = \\sqrt{144 + 256 + 225} = \\sqrt{625} = 25\\text{ km}$. Đáp số: 25."
        }
      },
      {
        id: "p3-q2",
        num: 2,
        title: "Câu 2 (Toán thực tế kết cấu giàn không gian mái vòm):",
        prompt: "Một khung giàn không gian bằng thép hình chóp tứ giác đều $S.ABCD$ có mặt đáy $ABCD$ là hình vuông cạnh $6\\text{ m}$ đặt trên mặt phẳng sàn $(Oxy)$ tâm $O(0;0;0)$, các cạnh của hình vuông song song với các trục toạ độ. Đỉnh $S$ của giàn thép nằm trên trục cao $Oz$ cách mặt sàn một khoảng $4\\text{ m}$. Hỏi chiều dài thanh thép nghiêng $SA$ bằng bao nhiêu mét?",
        correctAnswer: "5.83",
        acceptedTolerance: 0.1,
        unit: "m",
        solution: "Vì đáy $ABCD$ là hình vuông tâm $O$ cạnh bằng $6\\text{ m}$ song song với các trục toạ độ, nên toạ độ đỉnh $A$ là $A(-3; -3; 0)$. Đỉnh $S$ nằm trên trục $Oz$ cách mặt phẳng đáy $4\\text{ m}$ nên $S(0; 0; 4)$.\\nĐộ dài thanh thép nghiêng $SA$ là khoảng cách giữa hai điểm $S$ và $A$:\\n$$SA = \\sqrt{(0 - (-3))^2 + (0 - (-3))^2 + (4 - 0)^2} = \\sqrt{3^2 + 3^2 + 4^2} = \\sqrt{9 + 9 + 16} = \\sqrt{34} \\approx 5.83\\text{ m}$$\\nĐáp số: 5.83 (hoặc $\\sqrt{34}$).",
        similarVariation: {
          prompt: "Một giàn mái không gian hình chóp $S.ABCD$ có đáy hình vuông tâm $O(0;0;0)$ nằm trên $(Oxy)$, bán kính đường tròn ngoại tiếp đáy là $OA = 3\\text{ m}$. Đỉnh $S$ nằm trên trục cao $Oz$ có cao độ $z_S = 4\\text{ m}$. Tính chiều dài thanh thép xiên $SA$ theo mét.",
          correctAnswer: "5",
          unit: "m",
          solution: "Tam giác $SOA$ vuông tại $O$, do đó $SA = \\sqrt{OA^2 + OS^2} = \\sqrt{3^2 + 4^2} = 5\\text{ m}$. Đáp số: 5."
        }
      }
    ]
  }
};

// Tự động kết nối vào window.LESSONS_DATABASE nếu đã được nạp
if (typeof window !== "undefined" && window.LESSONS_DATABASE) {
  try {
    for (var gradeKey in window.LESSONS_DATABASE) {
      var g = window.LESSONS_DATABASE[gradeKey];
      if (g && Array.isArray(g.chapters)) {
        for (var i = 0; i < g.chapters.length; i++) {
          var ch = g.chapters[i];
          if (ch && Array.isArray(ch.lessons)) {
            var idx = ch.lessons.findIndex(function(l) { return l.id === "12-c2-b7"; });
            if (idx !== -1) {
              ch.lessons[idx] = window.LESSON_12_C2_B7_DATA;
              break;
            }
          }
        }
      }
    }
  } catch (e) {
    console.warn("Could not inject LESSON_12_C2_B7_DATA into LESSONS_DATABASE:", e);
  }
}
