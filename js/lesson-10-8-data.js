/**

* BÀI HỌC SỐ: BÀI 8. TỔNG VÀ HIỆU CỦA HAI VECTƠ (TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Tác giả & Chủ biên: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, An Giang)
 * =========================================================================
 * Cấu trúc 4 phần chuẩn chỉ:
 * - Phần I: Lời chào Thầy Sáng + Nút "Lời chào của thầy Sáng" (Nền xanh, chữ vàng đồng, Voice AI Thầy Sáng, chỉnh tốc độ)
 * - Phần II: Mục tiêu và yêu cầu cần đạt chuẩn SGK trang 51 + Nút "Giọng đọc AI của Thầy Sáng" (chỉnh tốc độ)
 * - Phần III: Tiến trình bài học:
 *     + Bài toán dẫn nhập con tàu qua sông Tiền (An Giang) + Nút nghe giảng vàng đồng
 *     + Trình phát tương tác có POI chặn seekbar (dừng ở 25s và 55s)
 *     + 6 tiểu mục (1a, 1b, 1c; 2a, 2b, 2c):
 *         * Tóm tắt KaTeX sạch sẽ 100%
 *         * Hình vẽ SVG TikZ vector đồ họa sắc nét
 *         * 2 Checkpoint tương tác bắt buộc (giữa đoạn & cuối đoạn) có feedback và tính điểm vào % tiến độ
 *         * Khung Mẹo nhớ của Thầy Sáng
 *         * Nút "Nghe thầy Sáng giảng bài" (Nền xanh, chữ vàng đồng, chỉnh 4 tốc độ: 0.75x, 1x, 1.25x, 1.5x)
 *         * Ví dụ tự luận SGK: chỉ show đề, ghi chú làm vào vở + Nút bung lời giải chi tiết của Thầy Sáng
 *     + Chốt bài học: Nhắc lại con tàu qua sông + Lời giải chi tiết + Nút nghe giảng
 * - Phần IV: Bài tập trắc nghiệm tổng hợp 3 dạng thức thi mới 2025:
 *     + Dạng 1: 5 câu nhiều lựa chọn (Dễ - Nhận biết)
 *     + Dạng 2: 3 câu Đúng/Sai 4 ý a, b, c, d (Thông hiểu)
 *     + Dạng 3: 2 câu trả lời ngắn số học (Toán thực tế Vận dụng)
 *     + Mỗi câu có Nút "Lời giải chi tiết của thầy Sáng" và Nút "Bài toán tương tự" (tự động đổi số liệu)
 * =========================================================================
 * TUYỆT ĐỐI KHÔNG HIỂN THỊ CHỮ OLM TRÊN GIAO DIỆN ĐỂ BẢO VỆ BẢN QUYỀN
 */

window.LESSON_10_C4_B8_DATA = {
  id: "10-c4-b8",
  number: "Bài 8",
  title: "Tổng và hiệu của hai vectơ",
  isFeaturedLesson: true,
  isOlmInteractive: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioScript: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    audioUrl: "assets/audio/b10_8_welcome.mp3",
    buttonLabel: "Lời chào của thầy Sáng",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 51)
  // =========================================================================
  learningGoals: [
    "Thực hiện thành thạo các phép toán cộng, trừ vectơ; vận dụng linh hoạt quy tắc ba điểm (quy tắc tam giác) và quy tắc hình bình hành để biến đổi hệ thức vectơ.",
    "Nắm vững khái niệm vectơ đối và quy tắc trừ hai vectơ chung gốc: $\\vec{OB} - \\vec{OA} = \\vec{AB}$.",
    "Mô tả chính xác tính chất trung điểm của đoạn thẳng ($\\vec{IA} + \\vec{IB} = \\vec{0}$) và trọng tâm của tam giác ($\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$) bằng ngôn ngữ vectơ.",
    "Vận dụng xuất sắc kiến thức vectơ để giải quyết các bài toán thực tế: tổng hợp lực trong vật lí và tổng hợp vận tốc ca nô di chuyển trên sông nước."
  ],
  goalsAudioUrl: "assets/audio/b10_8_goals.mp3",
  goalsButtonLabel: "Giọng đọc AI của Thầy Sáng",
  goalsVoiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC
  // =========================================================================
  // 1. Bài toán dẫn nhập
  hook: {
    title: "Tình huống mở đầu thực tế: Ca nô vượt dòng sông Tiền (An Giang)",
    story: "Một chiếc ca nô chuyển động từ bờ bên này sang bờ bên kia của dòng sông Tiền (An Giang) với vận tốc riêng không đổi là $\\vec{v}_r$. Do dòng nước chảy xiết với vận tốc $\\vec{v}_n$, vận tốc thực tế của ca nô đối với bờ là tổng hợp của hai chuyển động: $\\vec{v} = \\vec{v}_r + \\vec{v}_n$. Nếu không quan tâm đến điểm đến, người lái tàu cần giữ lái cho tàu tạo với bờ sông một góc bao nhiêu để tàu sang bờ bên kia được nhanh nhất? Để giải mã trọn vẹn bài toán chuyển động thực tế này, Thầy trò mình sẽ cùng khám phá các quy tắc hình học nền tảng của phép cộng và phép trừ vectơ ngay sau đây!",
    audioUrl: "assets/audio/b10_8_hook.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    bridge: "Hãy cùng Thầy Sáng khám phá Quy tắc ba điểm và Quy tắc hình bình hành ngay dưới đây!"
  },

  // 2. Trình phát bài giảng tương tác có POI (ngăn seekbar, hỏi nhanh tại 25s và 55s)
  interactiveAudio: {
    title: "Bài giảng tương tác: Tổng và hiệu của hai vectơ",
    audioUrl: "assets/audio/b10_8_interactive_lecture.mp3",
    duration: 75,
    timestamps: [
      {
        id: "poi-1",
        time: 25,
        title: "Điểm dừng 1: Kiểm tra Quy tắc ba điểm (Tam giác)",
        question: "Với ba điểm phân biệt $A, B, C$, đẳng thức nào sau đây thể hiện đúng Quy tắc ba điểm?",
        options: [
          "$\\vec{AB} + \\vec{BC} = \\vec{AC}$",
          "$\\vec{AB} + \\vec{AC} = \\vec{BC}$",
          "$\\vec{BA} + \\vec{BC} = \\vec{AC}$",
          "$\\vec{AB} + \\vec{BC} = \\vec{CA}$"
        ],
        correctIndex: 0,
        hint: "Điểm ngọn của vectơ thứ nhất nối tiếp điểm gốc của vectơ thứ hai: $A\\mathbf{B} + \\mathbf{B}C = AC$.",
        explain: "Chính xác! Theo quy tắc ba điểm ta luôn có: $\\vec{AB} + \\vec{BC} = \\vec{AC}$."
      },
      {
        id: "poi-2",
        time: 55,
        title: "Điểm dừng 2: Kiểm tra Quy tắc trừ hai vectơ chung gốc",
        question: "Với ba điểm $O, A, B$ bất kì, hiệu hai vectơ $\\vec{OB} - \\vec{OA}$ bằng vectơ nào sau đây?",
        options: [
          "$\\vec{AB}$",
          "$\\vec{BA}$",
          "$\\vec{OA}$",
          "$\\vec{OB}$"
        ],
        correctIndex: 0,
        hint: "Quy tắc 'Sau trừ Trước': điểm $B$ ở vectơ bị trừ trở thành ngọn, điểm $A$ ở vectơ trừ trở thành gốc.",
        explain: "Xuất sắc! Theo quy tắc hiệu chung gốc: $\\vec{OB} - \\vec{OA} = \\vec{AB}$."
      }
    ]
  },

  // 3. Triển khai các mục lý thuyết (1a, 1b, 1c; 2a, 2b, 2c)
  sections: [
    {
      id: "10-c4-b8-s1",
      num: "1",
      title: "Tổng của hai vectơ",
      subsections: [
        // -------------------------------------------------------------------
        // MỤC 1a: Định nghĩa và Quy tắc tam giác (ba điểm)
        // -------------------------------------------------------------------
        {
          key: "a",
          title: "Định nghĩa và Quy tắc tam giác (ba điểm)",
          summary: "Quy tắc nối đuôi: với ba điểm A, B, C bất kì ta luôn có AB + BC = AC.",
          audioUrl: "assets/audio/b10_8_sec1a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
          contentHtml: `
            <div class="definition-card">
              <div class="def-badge"><i class="fa-solid fa-shapes"></i> Định nghĩa Tổng của hai vectơ</div>
              <p>Cho hai vectơ $\\vec{a}$ và $\\vec{b}$. Lấy một điểm $A$ tuỳ ý, vẽ $\\vec{AB} = \\vec{a}$, rồi từ điểm $B$ vẽ $\\vec{BC} = \\vec{b}$.</p>
              <p>Vectơ $\\vec{AC}$ được gọi là <strong>tổng của hai vectơ $\\vec{a}$ và $\\vec{b}$</strong>, kí hiệu là $\\vec{a} + \\vec{b}$.</p>
              <div class="math-highlight-box">
                $\\vec{a} + \\vec{b} = \\vec{AB} + \\vec{BC} = \\vec{AC}$
              </div>
              <p style="margin-top: 8px;"><em>Phép lấy tổng của hai vectơ được gọi là <strong>phép cộng vectơ</strong>.</em></p>
            </div>

            <!-- HÌNH VẼ ĐỒ HỌA TIKZ / SVG: QUY TẮC BA ĐIỂM -->
            <div class="tikz-svg-figure-box">
              <svg viewBox="0 0 520 220" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                  </marker>
                  <marker id="arrow-orange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#ea580c"/>
                  </marker>
                  <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/>
                  </marker>
                </defs>
                <!-- Grid nhẹ -->
                <line x1="40" y1="180" x2="480" y2="180" stroke="#f1f5f9" stroke-width="1"/>
                <line x1="40" y1="50" x2="480" y2="50" stroke="#f1f5f9" stroke-width="1"/>
                
                <!-- Vectơ AB = a -->
                <line x1="70" y1="170" x2="250" y2="60" stroke="#0284c7" stroke-width="3" marker-end="url(#arrow-blue)"/>
                <!-- Vectơ BC = b -->
                <line x1="250" y1="60" x2="450" y2="140" stroke="#ea580c" stroke-width="3" marker-end="url(#arrow-orange)"/>
                <!-- Vectơ tổng AC = a + b (nét liền xanh lá đậm) -->
                <line x1="70" y1="170" x2="445" y2="140" stroke="#16a34a" stroke-width="3.5" stroke-dasharray="6,4" marker-end="url(#arrow-green)"/>
                
                <!-- Các đỉnh A, B, C -->
                <circle cx="70" cy="170" r="5" fill="#0284c7"/>
                <text x="50" y="188" font-size="15" font-weight="bold" fill="#0f172a">A</text>
                
                <circle cx="250" cy="60" r="5" fill="#ea580c"/>
                <text x="248" y="42" font-size="15" font-weight="bold" fill="#0f172a">B</text>
                
                <circle cx="450" cy="140" r="5" fill="#16a34a"/>
                <text x="462" y="148" font-size="15" font-weight="bold" fill="#0f172a">C</text>
                
                <!-- Nhãn vectơ -->
                <text x="140" y="105" font-size="14" font-weight="bold" fill="#0284c7">a = AB</text>
                <text x="365" y="90" font-size="14" font-weight="bold" fill="#ea580c">b = BC</text>
                <text x="235" y="185" font-size="15" font-weight="bold" fill="#16a34a">a + b = AC (Quy tắc ba điểm)</text>
              </svg>
              <div class="tikz-caption-text">Hình 1.1: Minh họa định nghĩa tổng hai vectơ theo quy tắc ba điểm (nối đuôi)</div>
            </div>

            <!-- CHECKPOINT 1 (GIỮA ĐOẠN): KIỂM TRA TỨC THÌ KHÁI NIỆM -->
            <div class="sub-checkpoint-card" id="cp-card-10-8-1a-1">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-bolt"></i> Thầy Sáng hỏi nhanh (Giữa đoạn 1a)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Cho ba điểm phân biệt $M, N, P$. Theo quy tắc tam giác, tổng hai vectơ $\\vec{MN} + \\vec{NP}$ bằng vectơ nào sau đây?</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-10-8-1a-1">A. $\\vec{MP}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1a-1">B. $\\vec{PM}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1a-1">C. $\\vec{NM}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1a-1">D. $\\vec{PN}$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-10-8-1a-1">
                <strong>Lời giải của Thầy Sáng:</strong> Chính xác! Điểm cuối của vectơ thứ nhất là điểm $N$ nối tiếp với điểm đầu của vectơ thứ hai, do đó $\\vec{MN} + \\vec{NP} = \\vec{MP}$.
              </div>
            </div>

            <div class="theorem-card" style="margin-top: 14px;">
              <div class="theorem-badge"><i class="fa-solid fa-star"></i> Quy tắc ba điểm (Quy tắc tam giác)</div>
              <p>Với ba điểm $A, B, C$ bất kì, ta luôn có:</p>
              <div class="math-highlight-box">
                $\\vec{AB} + \\vec{BC} = \\vec{AC}$
              </div>
              <p style="margin-top: 8px;"><em>(Quy tắc mở rộng cho $n$ điểm liên tiếp: $\\vec{A_1A_2} + \\vec{A_2A_3} + \\dots + \\vec{A_{n-1}A_n} = \\vec{A_1A_n}$).</em></p>
            </div>

            <!-- CHECKPOINT 2 (CUỐI ĐOẠN): CỦNG CỐ MỞ RỘNG -->
            <div class="sub-checkpoint-card" id="cp-card-10-8-1a-2">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-check-double"></i> Thử thách củng cố (Cuối đoạn 1a)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Cho bốn điểm phân biệt $A, B, C, D$. Biểu thức $\\vec{AB} + \\vec{BC} + \\vec{CD}$ rút gọn thành vectơ nào?</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-10-8-1a-2">A. $\\vec{AD}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1a-2">B. $\\vec{DA}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1a-2">C. $\\vec{AC}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1a-2">D. $\\vec{BD}$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-10-8-1a-2">
                <strong>Lời giải của Thầy Sáng:</strong> Xuất sắc! Áp dụng quy tắc ba điểm liên tiếp: $(\\vec{AB} + \\vec{BC}) + \\vec{CD} = \\vec{AC} + \\vec{CD} = \\vec{AD}$.
              </div>
            </div>

            <!-- MẸO NHỚ CỦA THẦY SÁNG -->
            <div class="teacher-memo-tip-card">
              <div class="teacher-memo-title"><i class="fa-solid fa-lightbulb"></i> Mẹo nhớ của Thầy Sáng:</div>
              <div class="teacher-memo-body">
                Cứ thấy các chữ cái 'nối đuôi' nhau: $A\\mathbf{B} + \\mathbf{B}\\mathbf{C} + \\mathbf{C}D = \\vec{AD}$. Điểm ngọn của vectơ trước gặp điểm gốc của vectơ sau thì 'triệt tiêu', chỉ giữ lại điểm đầu xuất phát và điểm cuối cùng!
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 1 (SGK trang 52): Áp dụng quy tắc cộng vectơ trong hình vuông",
            problem: "Cho hình vuông $ABCD$ với cạnh có độ dài bằng $1$. Tính độ dài của các vectơ $\\vec{u} = \\vec{AB} + \\vec{CB}$ và $\\vec{v} = \\vec{AB} + \\vec{DC} + \\vec{BD}$.",
            solution: `
              <p>• Do $\\vec{AB} = \\vec{DC}$ nên ta có: $\\vec{u} = \\vec{AB} + \\vec{CB} = \\vec{DC} + \\vec{CB} = \\vec{DB}$.</p>
              <p>Vậy độ dài: $|\\vec{u}| = |\\vec{DB}| = DB = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.</p>
              <p>• Ta có: $\\vec{v} = (\\vec{AB} + \\vec{BD}) + \\vec{DC} = \\vec{AD} + \\vec{DC} = \\vec{AC}$.</p>
              <p>Do đó độ dài: $|\\vec{v}| = |\\vec{AC}| = AC = \\sqrt{2}$.</p>
            `,
            teacherGuidance: "Khi hai vectơ chưa nối đuôi nhau (như AB và CB), em hãy thay thế vectơ AB bằng một vectơ bằng nó (DC) để đưa về dạng nối đuôi DC + CB = DB!"
          }
        },

        // -------------------------------------------------------------------
        // MỤC 1b: Quy tắc hình bình hành
        // -------------------------------------------------------------------
        {
          key: "b",
          title: "Quy tắc hình bình hành",
          summary: "Tổng hai cạnh chung gốc bằng vectơ đường chéo: AB + AD = AC.",
          audioUrl: "assets/audio/b10_8_sec1b.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
          contentHtml: `
            <div class="theorem-card">
              <div class="theorem-badge"><i class="fa-solid fa-draw-polygon"></i> Quy tắc hình bình hành</div>
              <p>Nếu tứ giác $ABCD$ là một hình bình hành thì ta có:</p>
              <div class="math-highlight-box">
                $\\vec{AB} + \\vec{AD} = \\vec{AC}$
              </div>
              <p style="margin-top: 8px;"><em>(Tổng của hai vectơ có chung điểm gốc là hai cạnh của hình bình hành bằng vectơ đường chéo xuất phát từ gốc đó).</em></p>
            </div>

            <!-- HÌNH VẼ ĐỒ HỌA TIKZ / SVG: HÌNH BÌNH HÀNH -->
            <div class="tikz-svg-figure-box">
              <svg viewBox="0 0 520 230" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arr-pb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                  </marker>
                  <marker id="arr-pp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#8b5cf6"/>
                  </marker>
                  <marker id="arr-pr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                  </marker>
                </defs>
                
                <!-- Cạnh nét đứt hình bình hành -->
                <line x1="200" y1="50" x2="460" y2="50" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>
                <line x1="330" y1="180" x2="460" y2="50" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4,4"/>

                <!-- Vectơ AB (cạnh trên) -->
                <line x1="70" y1="180" x2="195" y2="55" stroke="#0284c7" stroke-width="3" marker-end="url(#arr-pb)"/>
                <!-- Vectơ AD (cạnh dưới) -->
                <line x1="70" y1="180" x2="325" y2="180" stroke="#8b5cf6" stroke-width="3" marker-end="url(#arr-pp)"/>
                <!-- Đường chéo AC = AB + AD -->
                <line x1="70" y1="180" x2="455" y2="53" stroke="#dc2626" stroke-width="3.5" marker-end="url(#arr-pr)"/>
                
                <!-- Các đỉnh -->
                <circle cx="70" cy="180" r="5" fill="#dc2626"/>
                <text x="50" y="195" font-size="15" font-weight="bold" fill="#0f172a">A</text>
                
                <circle cx="200" cy="50" r="5" fill="#0284c7"/>
                <text x="195" y="38" font-size="15" font-weight="bold" fill="#0f172a">B</text>
                
                <circle cx="460" cy="50" r="5" fill="#dc2626"/>
                <text x="472" y="55" font-size="15" font-weight="bold" fill="#0f172a">C</text>
                
                <circle cx="330" cy="180" r="5" fill="#8b5cf6"/>
                <text x="335" y="198" font-size="15" font-weight="bold" fill="#0f172a">D</text>

                <!-- Labels -->
                <text x="110" y="110" font-size="14" font-weight="bold" fill="#0284c7">AB</text>
                <text x="200" y="200" font-size="14" font-weight="bold" fill="#8b5cf6">AD</text>
                <text x="290" y="105" font-size="15" font-weight="bold" fill="#dc2626">AC = AB + AD</text>
              </svg>
              <div class="tikz-caption-text">Hình 1.2: Quy tắc hình bình hành - Tổng hai cạnh chung gốc bằng đường chéo chung gốc</div>
            </div>

            <!-- CHECKPOINT 1 (GIỮA ĐOẠN) -->
            <div class="sub-checkpoint-card" id="cp-card-10-8-1b-1">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-bolt"></i> Thầy Sáng hỏi nhanh (Giữa đoạn 1b)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Cho hình bình hành $MNPQ$. Đẳng thức vectơ nào sau đây là đúng?</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-10-8-1b-1">A. $\\vec{MN} + \\vec{MQ} = \\vec{MP}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1b-1">B. $\\vec{MN} + \\vec{MQ} = \\vec{NQ}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1b-1">C. $\\vec{MN} + \\vec{NP} = \\vec{MQ}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1b-1">D. $\\vec{MN} + \\vec{MP} = \\vec{MQ}$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-10-8-1b-1">
                <strong>Lời giải của Thầy Sáng:</strong> Rất giỏi! Vì tứ giác $MNPQ$ là hình bình hành nên tổng hai vectơ cùng xuất phát từ đỉnh $M$ bằng vectơ đường chéo xuất phát từ $M$: $\\vec{MN} + \\vec{MQ} = \\vec{MP}$.
              </div>
            </div>

            <!-- CHECKPOINT 2 (CUỐI ĐOẠN) -->
            <div class="sub-checkpoint-card" id="cp-card-10-8-1b-2">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-check-double"></i> Thử thách củng cố (Cuối đoạn 1b)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Cho hình chữ nhật $ABCD$ có $AB = 3$ và $AD = 4$. Độ dài của vectơ tổng $|\\vec{AB} + \\vec{AD}|$ là:</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-10-8-1b-2">A. $5$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1b-2">B. $7$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1b-2">C. $1$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1b-2">D. $25$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-10-8-1b-2">
                <strong>Lời giải của Thầy Sáng:</strong> Chính xác! Vì $ABCD$ là hình chữ nhật nên $\\vec{AB} + \\vec{AD} = \\vec{AC}$. Suy ra độ dài $|\\vec{AB} + \\vec{AD}| = AC = \\sqrt{3^2 + 4^2} = 5$.
              </div>
            </div>

            <!-- MẸO NHỚ CỦA THẦY SÁNG -->
            <div class="teacher-memo-tip-card">
              <div class="teacher-memo-title"><i class="fa-solid fa-triangle-exclamation" style="color: #ea580c;"></i> Mẹo nhớ của Thầy Sáng: Cảnh giác bẫy độ dài!</div>
              <div class="teacher-memo-body">
                Độ dài của vectơ tổng KHÔNG bao giờ bằng tổng độ dài! Ở câu trên, $|\\vec{AB} + \\vec{AD}| = 5$, trong khi $|\\vec{AB}| + |\\vec{AD}| = 3 + 4 = 7$. Các em phải gom hai vectơ lại thành một vectơ duy nhất $(\\vec{AC})$ rồi mới tính độ dài đoạn thẳng!
              </div>
            </div>
          `,
          workedExample: {
            title: "Luyện tập 1 (SGK trang 52): Tổng vectơ trong hình thoi góc 120 độ",
            problem: "Cho hình thoi $ABCD$ với cạnh có độ dài bằng $1$ và $\\widehat{BAD} = 120^\\circ$. Tính độ dài của các vectơ $\\vec{u} = \\vec{CB} + \\vec{CD}$ và $\\vec{v} = \\vec{DB} + \\vec{CD} + \\vec{BA}$.",
            solution: `
              <p>• Áp dụng quy tắc hình bình hành cho hình thoi $ABCD$ tại đỉnh $C$:</p>
              <p>$\\vec{CB} + \\vec{CD} = \\vec{CA} \\implies |\\vec{CB} + \\vec{CD}| = CA$.</p>
              <p>Vì hình thoi $ABCD$ có $\\widehat{BAD} = 120^\\circ$ nên $\\widehat{ABC} = 180^\\circ - 120^\\circ = 60^\\circ$.</p>
              <p>Tam giác $ABC$ cân tại $B$ có $\\widehat{B} = 60^\\circ$ nên $\\triangle ABC$ đều cạnh $1$, suy ra $CA = 1$.</p>
              <p>Vậy $|\\vec{CB} + \\vec{CD}| = 1$.</p>
              <p>• Xét biểu thức $\\vec{v}$: ta có $\\vec{BA} = \\vec{CD}$ nên $\\vec{DB} + \\vec{CD} + \\vec{BA} = (\\vec{DB} + \\vec{BA}) + \\vec{CD} = \\vec{DA} + \\vec{CD} = \\vec{CD} + \\vec{DA} = \\vec{CA}$.</p>
              <p>Vậy $|\\vec{v}| = CA = 1$.</p>
            `,
            teacherGuidance: "Hình thoi có góc 60 độ hoặc 120 độ sẽ chia thành 2 tam giác đều. Hãy nhớ tính chất này để tính độ dài đường chéo cực nhanh!"
          }
        },

        // -------------------------------------------------------------------
        // MỤC 1c: Tính chất của phép cộng vectơ
        // -------------------------------------------------------------------
        {
          key: "c",
          title: "Tính chất của phép cộng vectơ",
          summary: "Giao hoán, kết hợp, cộng vectơ-không và quy tắc mở rộng cho tổng ba vectơ.",
          audioUrl: "assets/audio/b10_8_sec1c.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
          contentHtml: `
            <div class="definition-card">
              <div class="def-badge"><i class="fa-solid fa-list-check"></i> Ba tính chất cốt lõi của phép cộng vectơ</div>
              <p>Với ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ tuỳ ý, ta có:</p>
              <ul>
                <li><strong>1. Tính chất giao hoán:</strong> $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$</li>
                <li><strong>2. Tính chất kết hợp:</strong> $(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$</li>
                <li><strong>3. Tính chất của vectơ-không:</strong> $\\vec{a} + \\vec{0} = \\vec{0} + \\vec{a} = \\vec{a}$</li>
              </ul>
              <p style="margin-top: 10px;"><em><strong>Chú ý (SGK trang 52):</strong> Do $(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$ nên ta viết gọn là $\\vec{a} + \\vec{b} + \\vec{c}$ và gọi là tổng của ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$.</em></p>
            </div>

            <!-- CHECKPOINT 1 (GIỮA ĐOẠN) -->
            <div class="sub-checkpoint-card" id="cp-card-10-8-1c-1">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-bolt"></i> Thầy Sáng hỏi nhanh (Giữa đoạn 1c)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Đẳng thức nào sau đây thể hiện tính chất kết hợp của phép cộng vectơ?</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-10-8-1c-1">A. $(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1c-1">B. $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1c-1">C. $\\vec{a} + \\vec{0} = \\vec{a}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1c-1">D. $\\vec{a} + (-\\vec{a}) = \\vec{0}$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-10-8-1c-1">
                <strong>Lời giải của Thầy Sáng:</strong> Hoàn toàn chính xác! Tính chất kết hợp cho phép ta nhóm các vectơ tuỳ ý khi cộng nhiều vectơ mà không làm đổi kết quả.
              </div>
            </div>

            <!-- CHECKPOINT 2 (CUỐI ĐOẠN) -->
            <div class="sub-checkpoint-card" id="cp-card-10-8-1c-2">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-check-double"></i> Thử thách củng cố (Cuối đoạn 1c)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Cho ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$. Khẳng định nào sau đây là SAI?</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-10-8-1c-2">A. $|\\vec{a} + \\vec{b}| = |\\vec{a}| + |\\vec{b}|$ với mọi $\\vec{a}, \\vec{b}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1c-2">B. $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1c-2">C. $\\vec{a} + \\vec{0} = \\vec{a}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-1c-2">D. $(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-10-8-1c-2">
                <strong>Lời giải của Thầy Sáng:</strong> Xuất sắc! Khẳng định A là SAI vì độ dài của vectơ tổng chỉ bằng tổng độ dài khi hai vectơ cùng hướng ($|\\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|$).
              </div>
            </div>

            <!-- MẸO NHỚ CỦA THẦY SÁNG -->
            <div class="teacher-memo-tip-card">
              <div class="teacher-memo-title"><i class="fa-solid fa-lightbulb"></i> Mẹo nhớ của Thầy Sáng:</div>
              <div class="teacher-memo-body">
                Nhờ có tính giao hoán và kết hợp, khi cộng một dãy nhiều vectơ, các em cứ tự do đổi chỗ và nhóm những cặp vectơ có chung điểm đầu/cuối nối tiếp nhau để triệt tiêu nhanh nhất!
              </div>
            </div>
          `,
          workedExample: {
            title: "Hoạt động 3 (SGK trang 52): Chứng minh đẳng thức vectơ bằng tính chất cộng",
            problem: "Cho hình bình hành $ABCD$. Chứng minh rằng: $\\vec{AB} + \\vec{BC} = \\vec{AD} + \\vec{DC}$.",
            solution: `
              <p>• Theo quy tắc ba điểm, vế trái là: $\\vec{AB} + \\vec{BC} = \\vec{AC}$.</p>
              <p>• Tương tự theo quy tắc ba điểm, vế phải là: $\\vec{AD} + \\vec{DC} = \\vec{AC}$.</p>
              <p>Do cả hai vế đều bằng vectơ đường chéo $\\vec{AC}$, suy ra đẳng thức được chứng minh.</p>
            `,
            teacherGuidance: "Một đẳng thức vectơ có thể được chứng minh đơn giản bằng cách rút gọn độc lập cả hai vế về cùng một vectơ trung gian!"
          }
        }
      ]
    },

    {
      id: "10-c4-b8-s2",
      num: "2",
      title: "Hiệu của hai vectơ",
      subsections: [
        // -------------------------------------------------------------------
        // MỤC 2a: Khái niệm vectơ đối
        // -------------------------------------------------------------------
        {
          key: "a",
          title: "Khái niệm vectơ đối",
          summary: "Vectơ có cùng độ dài nhưng ngược hướng: a + (-a) = 0; -AB = BA.",
          audioUrl: "assets/audio/b10_8_sec2a.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
          contentHtml: `
            <div class="definition-card">
              <div class="def-badge"><i class="fa-solid fa-arrows-left-right"></i> Định nghĩa Vectơ đối (SGK trang 52)</div>
              <p>Vectơ có cùng độ dài và ngược hướng với vectơ $\\vec{a}$ được gọi là <strong>vectơ đối</strong> của vectơ $\\vec{a}$, kí hiệu là $-\\vec{a}$.</p>
              <div class="math-highlight-box">
                $\\vec{a} + (-\\vec{a}) = \\vec{0}$
              </div>
              <p><strong>Các tính chất quan trọng:</strong></p>
              <ul>
                <li>Vectơ $\\vec{0}$ được coi là vectơ đối của chính nó: $-\\vec{0} = \\vec{0}$.</li>
                <li>Vectơ đối của vectơ $\\vec{AB}$ là vectơ $\\vec{BA}$: $-\\vec{AB} = \\vec{BA}$.</li>
                <li>Hai vectơ đối nhau khi và chỉ khi tổng của chúng bằng $\\vec{0}$.</li>
              </ul>
            </div>

            <!-- HÌNH VẼ ĐỒ HỌA TIKZ / SVG: HAI LỰC CÂN BẰNG KÉO CO -->
            <div class="tikz-svg-figure-box">
              <svg viewBox="0 0 520 180" width="100%" height="170" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arr-left" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                  </marker>
                  <marker id="arr-right" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
                  </marker>
                </defs>
                <!-- Đường trục kéo co -->
                <line x1="40" y1="90" x2="480" y2="90" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                
                <!-- Vectơ F1 (sang trái, màu đỏ) -->
                <line x1="260" y1="90" x2="105" y2="90" stroke="#dc2626" stroke-width="3.5" marker-end="url(#arr-left)"/>
                <!-- Vectơ F2 (sang phải, màu xanh) -->
                <line x1="260" y1="90" x2="415" y2="90" stroke="#2563eb" stroke-width="3.5" marker-end="url(#arr-right)"/>
                
                <!-- Điểm nút buộc cờ ở giữa O -->
                <circle cx="260" cy="90" r="6" fill="#f59e0b"/>
                <text x="254" y="70" font-size="15" font-weight="bold" fill="#0f172a">O</text>
                
                <!-- Nhãn lực -->
                <text x="130" y="75" font-size="14" font-weight="bold" fill="#dc2626">F1 = -a (Đội đỏ kéo)</text>
                <text x="320" y="75" font-size="14" font-weight="bold" fill="#2563eb">F2 = a (Đội xanh kéo)</text>
                <text x="160" y="135" font-size="14" font-weight="bold" fill="#059669">F1 + F2 = 0 (Hai lực cân bằng - Bất phân thắng bại)</text>
              </svg>
              <div class="tikz-caption-text">Hình 2.1: Minh họa vật lí hai vectơ đối nhau qua trò chơi kéo co bất phân thắng bại</div>
            </div>

            <!-- CHECKPOINT 1 (GIỮA ĐOẠN) -->
            <div class="sub-checkpoint-card" id="cp-card-10-8-2a-1">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-bolt"></i> Thầy Sáng hỏi nhanh (Giữa đoạn 2a)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Vectơ đối của vectơ $\\vec{MN}$ là vectơ nào sau đây?</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-10-8-2a-1">A. $\\vec{NM}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2a-1">B. $\\vec{MN}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2a-1">C. $-\\vec{NM}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2a-1">D. $\\vec{0}$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-10-8-2a-1">
                <strong>Lời giải của Thầy Sáng:</strong> Rất chính xác! Vectơ đối của $\\vec{MN}$ là $-\\vec{MN}$, đảo ngược điểm đầu và điểm cuối ta được chính là vectơ $\\vec{NM}$.
              </div>
            </div>

            <!-- CHECKPOINT 2 (CUỐI ĐOẠN) -->
            <div class="sub-checkpoint-card" id="cp-card-10-8-2a-2">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-check-double"></i> Thử thách củng cố (Cuối đoạn 2a)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Điều kiện cần và đủ để hai vectơ $\\vec{u}$ và $\\vec{v}$ đối nhau là:</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-10-8-2a-2">A. $\\vec{u} + \\vec{v} = \\vec{0}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2a-2">B. $\\vec{u} - \\vec{v} = \\vec{0}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2a-2">C. $|\\vec{u}| = |\\vec{v}|$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2a-2">D. $\\vec{u}$ và $\\vec{v}$ cùng phương</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-10-8-2a-2">
                <strong>Lời giải của Thầy Sáng:</strong> Chuẩn xác! Theo định nghĩa chú ý SGK trang 52: Hai vectơ đối nhau khi và chỉ khi tổng của chúng bằng vectơ-không: $\\vec{u} + \\vec{v} = \\vec{0}$.
              </div>
            </div>

            <!-- MẸO NHỚ CỦA THẦY SÁNG -->
            <div class="teacher-memo-tip-card">
              <div class="teacher-memo-title"><i class="fa-solid fa-lightbulb"></i> Mẹo nhớ 'Đổi dấu - Đảo chữ' của Thầy Sáng:</div>
              <div class="teacher-memo-body">
                Bất cứ khi nào gặp dấu trừ trước một vectơ, em chỉ cần đảo ngược vị trí hai chữ cái để chuyển thành dấu cộng: $-\\vec{PQ} = +\\vec{QP}$. Điều này giúp biến toàn bộ bài toán trừ vectơ phức tạp về bài toán cộng nối đuôi quen thuộc!
              </div>
            </div>
          `,
          workedExample: {
            title: "Hoạt động 4 (SGK trang 52): Vectơ đối trong hình bình hành",
            problem: "Cho hình bình hành $ABCD$ tâm $O$. Tìm tất cả các vectơ đối của vectơ $\\vec{OA}$.",
            solution: `
              <p>Do $O$ là trung điểm của đường chéo $AC$ nên:</p>
              <p>• Vectơ đối thứ nhất là đảo ngược chữ: $-\\vec{OA} = \\vec{AO}$.</p>
              <p>• Vectơ đối thứ hai (cùng độ dài, ngược hướng với $\\vec{OA}$): đó là vectơ $\\vec{OC}$.</p>
              <p>Vậy các vectơ đối của $\\vec{OA}$ là $\\vec{AO}$ và $\\vec{OC}$.</p>
            `,
            teacherGuidance: "Trong các hình có tâm đối xứng như hình bình hành, hình vuông, tâm đường tròn là mỏ vàng để tìm ra các cặp vectơ đối nhau!"
          }
        },

        // -------------------------------------------------------------------
        // MỤC 2b: Quy tắc trừ hai vectơ (Quy tắc hiệu)
        // -------------------------------------------------------------------
        {
          key: "b",
          title: "Quy tắc trừ hai vectơ (Quy tắc hiệu)",
          summary: "Hiệu chung gốc: OB - OA = AB với ba điểm O, A, B bất kì.",
          audioUrl: "assets/audio/b10_8_sec2b.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
          contentHtml: `
            <div class="definition-card">
              <div class="def-badge"><i class="fa-solid fa-minus"></i> Định nghĩa Phép trừ vectơ (SGK trang 53)</div>
              <p>Vectơ $\\vec{a} + (-\\vec{b})$ được gọi là <strong>hiệu của hai vectơ $\\vec{a}$ và $\\vec{b}$</strong> và được kí hiệu là $\\vec{a} - \\vec{b}$.</p>
              <div class="math-highlight-box">
                $\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})$
              </div>
              <p style="margin-top: 8px;"><em>Phép lấy hiệu hai vectơ được gọi là <strong>phép trừ vectơ</strong>.</em></p>
            </div>

            <div class="theorem-card" style="margin-top: 14px;">
              <div class="theorem-badge"><i class="fa-solid fa-bolt"></i> Quy tắc hiệu (SGK trang 53)</div>
              <p>Với ba điểm $O, M, N$ bất kì, ta luôn có:</p>
              <div class="math-highlight-box">
                $\\vec{MN} = \\vec{ON} - \\vec{OM} \\quad \\Longleftrightarrow \\quad \\vec{OB} - \\vec{OA} = \\vec{AB}$
              </div>
            </div>

            <!-- HÌNH VẼ ĐỒ HỌA TIKZ / SVG: QUY TẮC HIỆU CHUNG GỐC -->
            <div class="tikz-svg-figure-box">
              <svg viewBox="0 0 520 220" width="100%" height="210" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arr-oa" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                  </marker>
                  <marker id="arr-ob" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#8b5cf6"/>
                  </marker>
                  <marker id="arr-ab" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#ea580c"/>
                  </marker>
                </defs>

                <!-- Vectơ OA -->
                <line x1="120" y1="170" x2="265" y2="65" stroke="#0284c7" stroke-width="3" marker-end="url(#arr-oa)"/>
                <!-- Vectơ OB -->
                <line x1="120" y1="170" x2="425" y2="155" stroke="#8b5cf6" stroke-width="3" marker-end="url(#arr-ob)"/>
                <!-- Vectơ hiệu AB = OB - OA -->
                <line x1="270" y1="60" x2="425" y2="152" stroke="#ea580c" stroke-width="3.5" marker-end="url(#arr-ab)"/>
                
                <!-- Các điểm O, A, B -->
                <circle cx="120" cy="170" r="5" fill="#0f172a"/>
                <text x="100" y="185" font-size="15" font-weight="bold" fill="#0f172a">O</text>
                
                <circle cx="270" cy="60" r="5" fill="#0284c7"/>
                <text x="268" y="42" font-size="15" font-weight="bold" fill="#0284c7">A</text>
                
                <circle cx="430" cy="160" r="5" fill="#8b5cf6"/>
                <text x="442" y="170" font-size="15" font-weight="bold" fill="#8b5cf6">B</text>

                <!-- Nhãn -->
                <text x="165" y="105" font-size="14" font-weight="bold" fill="#0284c7">OA</text>
                <text x="280" y="185" font-size="14" font-weight="bold" fill="#8b5cf6">OB</text>
                <text x="365" y="95" font-size="15" font-weight="bold" fill="#ea580c">AB = OB - OA</text>
              </svg>
              <div class="tikz-caption-text">Hình 2.2: Quy tắc hiệu hai vectơ chung gốc - 'Ngọn sau trừ Ngọn trước'</div>
            </div>

            <!-- CHECKPOINT 1 (GIỮA ĐOẠN) -->
            <div class="sub-checkpoint-card" id="cp-card-10-8-2b-1">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-bolt"></i> Thầy Sáng hỏi nhanh (Giữa đoạn 2b)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Với ba điểm $O, A, B$ bất kì, hiệu $\\vec{OB} - \\vec{OA}$ bằng vectơ nào sau đây?</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-10-8-2b-1">A. $\\vec{AB}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2b-1">B. $\\vec{BA}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2b-1">C. $\\vec{OA}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2b-1">D. $\\vec{OB}$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-10-8-2b-1">
                <strong>Lời giải của Thầy Sáng:</strong> Chuẩn xác! Theo quy tắc hiệu: $\\vec{OB} - \\vec{OA} = \\vec{AB}$.
              </div>
            </div>

            <!-- CHECKPOINT 2 (CUỐI ĐOẠN) -->
            <div class="sub-checkpoint-card" id="cp-card-10-8-2b-2">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-check-double"></i> Thử thách củng cố (Cuối đoạn 2b)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Rút gọn biểu thức vectơ: $\\vec{MN} - \\vec{MP}$ ta được vectơ:</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-10-8-2b-2">A. $\\vec{PN}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2b-2">B. $\\vec{NP}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2b-2">C. $\\vec{PM}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2b-2">D. $\\vec{NM}$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-10-8-2b-2">
                <strong>Lời giải của Thầy Sáng:</strong> Quá xuất sắc! Hai vectơ chung gốc $M$, áp dụng quy tắc 'Sau trừ Trước': $\\vec{MN} - \\vec{MP} = \\vec{PN}$.
              </div>
            </div>

            <!-- MẸO NHỚ CỦA THẦY SÁNG -->
            <div class="teacher-memo-tip-card">
              <div class="teacher-memo-title"><i class="fa-solid fa-lightbulb"></i> Mẹo nhớ 'Sau trừ Trước' của Thầy Sáng:</div>
              <div class="teacher-memo-body">
                Trong công thức trừ chung gốc: $\\vec{O\\mathbf{B}} - \\vec{O\\mathbf{A}} = \\vec{\\mathbf{A}\\mathbf{B}}$. Điểm $B$ ở vectơ bị trừ đứng SAU trở thành ngọn, điểm $A$ ở vectơ trừ đứng TRƯỚC trở thành gốc!
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 2 (SGK trang 53): Chứng minh đẳng thức vectơ hiệu trong hình bình hành",
            problem: "Cho hình bình hành $ABCD$ và một điểm $O$ bất kì. Chứng minh rằng: $\\vec{OB} - \\vec{OA} = \\vec{OC} - \\vec{OD}$.",
            solution: `
              <p>Áp dụng quy tắc hiệu cho từng vế:</p>
              <p>• Vế trái: $\\vec{OB} - \\vec{OA} = \\vec{AB}$.</p>
              <p>• Vế phải: $\\vec{OC} - \\vec{OD} = \\vec{DC}$.</p>
              <p>Mặt khác, vì tứ giác $ABCD$ là hình bình hành nên hai cạnh đối song song và bằng nhau, suy ra $\\vec{AB} = \\vec{DC}$.</p>
              <p>Vậy ta có điều phải chứng minh: $\\vec{OB} - \\vec{OA} = \\vec{OC} - \\vec{OD}$.</p>
            `,
            teacherGuidance: "Quy tắc hiệu giúp tách một vectơ bất kì thành hiệu của hai vectơ chung gốc với gốc O tuỳ ý!"
          }
        },

        // -------------------------------------------------------------------
        // MỤC 2c: Tính chất trung điểm và trọng tâm tam giác
        // -------------------------------------------------------------------
        {
          key: "c",
          title: "Tính chất trung điểm và trọng tâm tam giác",
          summary: "Chuẩn Hình 4.15 & 4.16 SGK: IA + IB = 0; GA + GB + GC = 0.",
          audioUrl: "assets/audio/b10_8_sec2c.mp3",
          buttonLabel: "Nghe thầy Sáng giảng bài",
          voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
          contentHtml: `
            <div class="theorem-card">
              <div class="theorem-badge"><i class="fa-solid fa-crown"></i> Hai hệ thức vàng hình học (Ví dụ 3 SGK trang 53)</div>
              <p><strong>1. Tính chất trung điểm của đoạn thẳng (Hình 4.15):</strong></p>
              <p>Điểm $I$ là trung điểm của đoạn thẳng $AB$ khi và chỉ khi:</p>
              <div class="math-highlight-box">
                $\\vec{IA} + \\vec{IB} = \\vec{0} \\quad \\text{và với mọi điểm } M: \\; \\vec{MA} + \\vec{MB} = 2\\vec{MI}$
              </div>
              <p style="margin-top: 10px;"><strong>2. Tính chất trọng tâm của tam giác (Hình 4.16):</strong></p>
              <p>Điểm $G$ là trọng tâm của tam giác $ABC$ khi và chỉ khi:</p>
              <div class="math-highlight-box">
                $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0} \\quad \\text{và với mọi điểm } M: \\; \\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$
              </div>
            </div>

            <!-- HÌNH VẼ ĐỒ HỌA TIKZ / SVG: HÌNH 4.15 & 4.16 SGK -->
            <div class="tikz-svg-figure-box">
              <svg viewBox="0 0 540 250" width="100%" height="240" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arr-m1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
                  </marker>
                  <marker id="arr-m2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/>
                  </marker>
                  <marker id="arr-m3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                  </marker>
                </defs>

                <!-- KHU VỰC 1: HÌNH 4.15 (TRUNG ĐIỂM) -->
                <text x="30" y="30" font-size="13" font-weight="bold" fill="#475569">Hình 4.15: I là trung điểm AB</text>
                <line x1="30" y1="80" x2="220" y2="80" stroke="#94a3b8" stroke-width="2"/>
                <!-- Vectơ IA (sang trái) -->
                <line x1="125" y1="80" x2="35" y2="80" stroke="#0284c7" stroke-width="3" marker-end="url(#arr-m1)"/>
                <!-- Vectơ IB (sang phải) -->
                <line x1="125" y1="80" x2="215" y2="80" stroke="#16a34a" stroke-width="3" marker-end="url(#arr-m2)"/>
                
                <circle cx="30" cy="80" r="4" fill="#0f172a"/><text x="25" y="102" font-size="14" font-weight="bold">A</text>
                <circle cx="125" cy="80" r="5" fill="#f59e0b"/><text x="122" y="105" font-size="14" font-weight="bold">I</text>
                <circle cx="220" cy="80" r="4" fill="#0f172a"/><text x="215" y="102" font-size="14" font-weight="bold">B</text>
                <text x="60" y="130" font-size="13" font-weight="bold" fill="#0369a1">IA + IB = 0</text>

                <!-- VÁCH NGĂN -->
                <line x1="250" y1="20" x2="250" y2="230" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,4"/>

                <!-- KHU VỰC 2: HÌNH 4.16 (TRỌNG TÂM G VÀ HÌNH BÌNH HÀNH GBDC) -->
                <text x="270" y="30" font-size="13" font-weight="bold" fill="#475569">Hình 4.16: Trọng tâm G &amp; Hbh GBDC</text>
                
                <!-- Tam giác ABC -->
                <polygon points="380,45 280,150 480,150" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
                
                <!-- Trung tuyến AI, I(380, 150) -->
                <line x1="380" y1="45" x2="380" y2="150" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
                
                <!-- Điểm G(380, 115) -->
                <!-- Điểm D đối xứng G qua I: D(380, 185) -->
                <!-- Hình bình hành GBDC -->
                <polygon points="380,115 280,150 380,185 480,150" fill="rgba(2, 132, 199, 0.05)" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
                
                <!-- Vectơ GA và GD đối nhau -->
                <line x1="380" y1="115" x2="380" y2="52" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-m3)"/>
                <line x1="380" y1="115" x2="380" y2="180" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-m1)"/>

                <circle cx="380" cy="45" r="4" fill="#0f172a"/><text x="375" y="38" font-size="14" font-weight="bold">A</text>
                <circle cx="280" cy="150" r="4" fill="#0f172a"/><text x="265" y="155" font-size="14" font-weight="bold">B</text>
                <circle cx="480" cy="150" r="4" fill="#0f172a"/><text x="488" y="155" font-size="14" font-weight="bold">C</text>
                <circle cx="380" cy="150" r="4" fill="#f59e0b"/><text x="385" y="148" font-size="13" font-weight="bold">I</text>
                <circle cx="380" cy="115" r="5" fill="#dc2626"/><text x="390" y="115" font-size="14" font-weight="bold" fill="#dc2626">G</text>
                <circle cx="380" cy="185" r="4" fill="#0284c7"/><text x="375" y="202" font-size="14" font-weight="bold">D</text>

                <text x="290" y="225" font-size="13" font-weight="bold" fill="#dc2626">GA + GB + GC = GA + GD = 0</text>
              </svg>
              <div class="tikz-caption-text">Hình 2.3: Mô hình trực quan chứng minh tính chất trung điểm (Hình 4.15) và trọng tâm (Hình 4.16)</div>
            </div>

            <!-- CHECKPOINT 1 (GIỮA ĐOẠN) -->
            <div class="sub-checkpoint-card" id="cp-card-10-8-2c-1">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-bolt"></i> Thầy Sáng hỏi nhanh (Giữa đoạn 2c)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Cho đoạn thẳng $AB$ có trung điểm $I$. Đẳng thức vectơ nào sau đây là ĐÚNG?</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-10-8-2c-1">A. $\\vec{IA} + \\vec{IB} = \\vec{0}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2c-1">B. $\\vec{IA} = \\vec{IB}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2c-1">C. $\\vec{AI} + \\vec{BI} = \\vec{AB}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2c-1">D. $\\vec{IA} - \\vec{IB} = \\vec{0}$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-10-8-2c-1">
                <strong>Lời giải của Thầy Sáng:</strong> Chính xác! Vì $I$ là trung điểm nên hai vectơ $\\vec{IA}$ và $\\vec{IB}$ có cùng độ dài nhưng ngược hướng, tức là hai vectơ đối nhau, suy ra $\\vec{IA} + \\vec{IB} = \\vec{0}$.
              </div>
            </div>

            <!-- CHECKPOINT 2 (CUỐI ĐOẠN) -->
            <div class="sub-checkpoint-card" id="cp-card-10-8-2c-2">
              <div class="sub-checkpoint-header">
                <span class="checkpoint-badge"><i class="fa-solid fa-check-double"></i> Thử thách củng cố (Cuối đoạn 2c)</span>
                <span style="font-size: 0.8rem; color: #6366f1; font-weight: 700;">+10 XP</span>
              </div>
              <div class="checkpoint-prompt">Cho tam giác $ABC$ có trọng tâm $G$. Với mọi điểm $M$ tuỳ ý, khẳng định nào sau đây luôn đúng?</div>
              <div class="checkpoint-options-grid">
                <button class="btn-cp-opt" data-correct="true" data-qid="cp-10-8-2c-2">A. $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2c-2">B. $\\vec{MA} + \\vec{MB} + \\vec{MC} = \\vec{MG}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2c-2">C. $\\vec{GA} + \\vec{GB} + \\vec{GC} = 3\\vec{GM}$</button>
                <button class="btn-cp-opt" data-correct="false" data-qid="cp-10-8-2c-2">D. $\\vec{MA} + \\vec{MB} = 2\\vec{MC}$</button>
              </div>
              <div class="checkpoint-feedback" id="feedback-cp-10-8-2c-2">
                <strong>Lời giải của Thầy Sáng:</strong> Quá xuất sắc! Hệ thức chèn điểm vào trọng tâm: $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$ là công cụ cực mạnh để giải các bài toán quỹ tích và cực trị vectơ.
              </div>
            </div>

            <!-- MẸO NHỚ CỦA THẦY SÁNG -->
            <div class="teacher-memo-tip-card">
              <div class="teacher-memo-title"><i class="fa-solid fa-crown" style="color: #eab308;"></i> Mẹo nhớ khắc cốt ghi tâm của Thầy Sáng:</div>
              <div class="teacher-memo-body">
                Nhớ mẹo theo số đỉnh: <strong>Trung điểm (2 đầu mút)</strong> thì tổng bằng $\\vec{0}$ và chèn điểm có hệ số 2: $\\vec{MA} + \\vec{MB} = 2\\vec{MI}$. <strong>Trọng tâm (3 đỉnh tam giác)</strong> thì tổng bằng $\\vec{0}$ và chèn điểm có hệ số 3: $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$!
              </div>
            </div>
          `,
          workedExample: {
            title: "Luyện tập 2 (SGK trang 53): Ứng dụng hệ thức trung điểm trong tứ giác",
            problem: "Cho tứ giác $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB, CD$ và $O$ là trung điểm của đoạn thẳng $MN$. Chứng minh rằng: $\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} = \\vec{0}$.",
            solution: `
              <p>• Do $M$ là trung điểm của đoạn thẳng $AB$ nên với điểm $O$ ta có: $\\vec{OA} + \\vec{OB} = 2\\vec{OM}$.</p>
              <p>• Do $N$ là trung điểm của đoạn thẳng $CD$ nên với điểm $O$ ta có: $\\vec{OC} + \\vec{OD} = 2\\vec{ON}$.</p>
              <p>Cộng hai vế lại ta được:</p>
              <p>$\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} = 2\\vec{OM} + 2\\vec{ON} = 2(\\vec{OM} + \\vec{ON})$.</p>
              <p>• Lại có $O$ là trung điểm của đoạn thẳng $MN$ nên theo tính chất trung điểm: $\\vec{OM} + \\vec{ON} = \\vec{0}$.</p>
              <p>Suy ra: $\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} = 2 \\cdot \\vec{0} = \\vec{0}$ (điều phải chứng minh).</p>
            `,
            teacherGuidance: "Bí quyết giải bài toán này là nhóm từng cặp đỉnh đối diện có chung trung điểm để chuyển về vectơ trung tuyến!"
          }
        }
      ]
    }
  ],

  // 3. Chốt bài học: Nhắc lại và giải mã trọn vẹn bài toán mở đầu
  realworldWrapup: {
    title: "Chốt bài học: Giải mã hoàn hảo bài toán ca nô vượt sông Tiền (An Giang)",
    recap: "Một con tàu chuyển động từ bờ bên này sang bờ bên kia của một dòng sông với vận tốc riêng không đổi $\\vec{v}_r$. Giả sử vận tốc dòng nước là $\\vec{v}_n$. Nếu không quan tâm đến điểm đến thì cần giữ lái cho tàu tạo với bờ sông một góc bao nhiêu để tàu sang bờ bên kia được nhanh nhất?",
    solution: `
      <p><strong>Mô hình hóa toán học &amp; Lời giải chi tiết của Thầy Sáng:</strong></p>
      <p>1. Vận tốc thực tế của con tàu đối với bờ là tổng của hai chuyển động: $\\vec{v} = \\vec{v}_r + \\vec{v}_n$.</p>
      <p>2. Để tàu sang bờ bên kia nhanh nhất (thời gian di chuyển ngắn nhất), thành phần vận tốc theo phương vuông góc với bờ sông phải đạt giá trị lớn nhất. Do dòng nước chảy dọc theo bờ sông (phương song song với bờ) nên nó không hỗ trợ rút ngắn bề rộng dòng sông.</p>
      <p>3. Do đó, người lái tàu cần <strong>hướng mũi lái vuông góc với bờ sông</strong> (góc lái tạo với bờ sông là $90^\\circ$). Khi đó toàn bộ vận tốc riêng $\\vec{v}_r$ được dùng để đưa tàu vượt qua khoảng cách giữa hai bờ sông trong thời gian ngắn nhất: $t_{\\min} = \\frac{d}{v_r}$ (với $d$ là bề rộng lòng sông).</p>
      <p>4. <em>Số liệu thực nghiệm tại sông Tiền (An Giang):</em> Cho vận tốc riêng ca nô $v_r = 15\\text{ km/h}$, vận tốc dòng chảy $v_n = 8\\text{ km/h}$. Vì hai vectơ vuông góc nhau nên tốc độ thực tế của tàu đối với bờ là:</p>
      <div class="math-highlight-box">
        $v = |\\vec{v}| = \\sqrt{v_r^2 + v_n^2} = \\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17\\text{ km/h}$
      </div>
      <p>Góc dạt dòng so với phương vuông góc bờ: $\\tan \\alpha = \\frac{v_n}{v_r} = \\frac{8}{15} \\implies \\alpha \\approx 28^\\circ 4'$.</p>
    `,
    audioUrl: "assets/audio/b10_8_wrapup.mp3",
    buttonLabel: "Nghe thầy Sáng giảng bài",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN 3 DẠNG THỨC THI MỚI 2025)
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2025 BỘ GD&ĐT)",

    // DẠNG 1: 5 CÂU TRẮC NGHIỆM 4 LỰA CHỌN (DỄ - NHẬN BIẾT)
    part1MultipleChoice: [
      {
        id: "p1-q1",
        num: 1,
        title: "Câu 1 (Quy tắc ba điểm):",
        prompt: "Cho ba điểm phân biệt $A, B, C$. Theo quy tắc ba điểm, tổng hai vectơ $\\vec{AB} + \\vec{BC}$ bằng vectơ nào sau đây?",
        options: ["A. $\\vec{AC}$", "B. $\\vec{CA}$", "C. $\\vec{BA}$", "D. $\\vec{CB}$"],
        correctIndex: 0,
        solution: "Theo quy tắc ba điểm (quy tắc tam giác): với ba điểm $A, B, C$ bất kì ta luôn có $\\vec{AB} + \\vec{BC} = \\vec{AC}$. Chọn đáp án A.",
        similarVariation: {
          prompt: "Cho ba điểm phân biệt $M, N, P$. Theo quy tắc tam giác, tổng hai vectơ $\\vec{MN} + \\vec{NP}$ bằng vectơ nào sau đây?",
          options: ["A. $\\vec{MP}$", "B. $\\vec{PM}$", "C. $\\vec{NP}$", "D. $\\vec{MN}$"],
          correctIndex: 0,
          solution: "Theo quy tắc ba điểm: $\\vec{MN} + \\vec{NP} = \\vec{MP}$."
        }
      },
      {
        id: "p1-q2",
        num: 2,
        title: "Câu 2 (Quy tắc hình bình hành):",
        prompt: "Cho hình bình hành $ABCD$. Đẳng thức vectơ nào sau đây là đúng?",
        options: ["A. $\\vec{AB} + \\vec{AD} = \\vec{AC}$", "B. $\\vec{AB} + \\vec{AD} = \\vec{CA}$", "C. $\\vec{AB} + \\vec{AC} = \\vec{AD}$", "D. $\\vec{BA} + \\vec{BC} = \\vec{AC}$"],
        correctIndex: 0,
        solution: "Theo quy tắc hình bình hành: tổng hai vectơ chung gốc $A$ là hai cạnh bằng vectơ đường chéo xuất phát từ $A$, do đó $\\vec{AB} + \\vec{AD} = \\vec{AC}$. Chọn đáp án A.",
        similarVariation: {
          prompt: "Cho hình bình hành $MNPQ$. Đẳng thức vectơ nào sau đây là đúng?",
          options: ["A. $\\vec{MN} + \\vec{MQ} = \\vec{MP}$", "B. $\\vec{MN} + \\vec{MQ} = \\vec{PM}$", "C. $\\vec{MN} + \\vec{MP} = \\vec{MQ}$", "D. $\\vec{NM} + \\vec{NP} = \\vec{MP}$"],
          correctIndex: 0,
          solution: "Theo quy tắc hình bình hành: $\\vec{MN} + \\vec{MQ} = \\vec{MP}$."
        }
      },
      {
        id: "p1-q3",
        num: 3,
        title: "Câu 3 (Quy tắc hiệu chung gốc):",
        prompt: "Với ba điểm phân biệt $O, A, B$ bất kì, hiệu $\\vec{OB} - \\vec{OA}$ bằng vectơ nào sau đây?",
        options: ["A. $\\vec{AB}$", "B. $\\vec{BA}$", "C. $\\vec{OA}$", "D. $\\vec{OB}$"],
        correctIndex: 0,
        solution: "Theo quy tắc hiệu hai vectơ chung gốc: $\\vec{OB} - \\vec{OA} = \\vec{AB}$ (ngọn sau trừ ngọn trước). Chọn đáp án A.",
        similarVariation: {
          prompt: "Với ba điểm $I, M, N$ bất kì, hiệu $\\vec{IN} - \\vec{IM}$ bằng vectơ nào sau đây?",
          options: ["A. $\\vec{MN}$", "B. $\\vec{NM}$", "C. $\\vec{MI}$", "D. $\\vec{NI}$"],
          correctIndex: 0,
          solution: "Theo quy tắc hiệu chung gốc: $\\vec{IN} - \\vec{IM} = \\vec{MN}$."
        }
      },
      {
        id: "p1-q4",
        num: 4,
        title: "Câu 4 (Tính chất trung điểm):",
        prompt: "Cho đoạn thẳng $AB$ có trung điểm $I$. Đẳng thức vectơ nào sau đây luôn đúng?",
        options: ["A. $\\vec{IA} + \\vec{IB} = \\vec{0}$", "B. $\\vec{IA} = \\vec{IB}$", "C. $\\vec{AI} + \\vec{BI} = \\vec{AB}$", "D. $\\vec{IA} - \\vec{IB} = \\vec{0}$"],
        correctIndex: 0,
        solution: "Vì $I$ là trung điểm của $AB$ nên $\\vec{IA}$ và $\\vec{IB}$ có cùng độ dài và ngược hướng, suy ra chúng là hai vectơ đối nhau: $\\vec{IA} + \\vec{IB} = \\vec{0}$. Chọn đáp án A.",
        similarVariation: {
          prompt: "Cho đoạn thẳng $CD$ có trung điểm $M$. Đẳng thức vectơ nào sau đây luôn đúng?",
          options: ["A. $\\vec{MC} + \\vec{MD} = \\vec{0}$", "B. $\\vec{MC} = \\vec{MD}$", "C. $\\vec{CM} + \\vec{DM} = \\vec{CD}$", "D. $\\vec{MC} - \\vec{MD} = \\vec{0}$"],
          correctIndex: 0,
          solution: "Do $M$ là trung điểm của $CD$ nên $\\vec{MC} + \\vec{MD} = \\vec{0}$."
        }
      },
      {
        id: "p1-q5",
        num: 5,
        title: "Câu 5 (Độ dài vectơ tổng tam giác vuông):",
        prompt: "Cho tam giác $ABC$ vuông tại $A$ có cạnh $AB = 6$ và $AC = 8$. Độ dài của vectơ tổng $|\\vec{AB} + \\vec{AC}|$ bằng bao nhiêu?",
        options: ["A. $10$", "B. $14$", "C. $2$", "D. $\\sqrt{14}$"],
        correctIndex: 0,
        solution: "Dựng hình chữ nhật $ABDC$. Theo quy tắc hình bình hành: $\\vec{AB} + \\vec{AC} = \\vec{AD}$. Vì $ABDC$ là hình chữ nhật nên độ dài đường chéo $AD = \\sqrt{AB^2 + AC^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10$. Vậy $|\\vec{AB} + \\vec{AC}| = 10$. Chọn đáp án A.",
        similarVariation: {
          prompt: "Cho tam giác $ABC$ vuông tại $A$ có $AB = 5$ và $AC = 12$. Độ dài của vectơ tổng $|\\vec{AB} + \\vec{AC}|$ bằng bao nhiêu?",
          options: ["A. $13$", "B. $17$", "C. $7$", "D. $60$"],
          correctIndex: 0,
          solution: "Dựng hình chữ nhật $ABDC$: $|\\vec{AB} + \\vec{AC}| = |\\vec{AD}| = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = 13$."
        }
      }
    ],

    // DẠNG 2: 3 CÂU TRẮC NGHIỆM ĐÚNG / SAI 4 Ý (THÔNG HIỂU)
    part2TrueFalse: [
      {
        id: "p2-q1",
        num: 1,
        title: "Câu 1 (Hình bình hành và tâm):",
        prompt: "Cho hình bình hành $ABCD$ có tâm là điểm $O$. Xét tính đúng hoặc sai của các mệnh đề sau:",
        items: [
          { label: "a", text: "Vectơ $\\vec{AB} = \\vec{DC}$.", isTrue: true, explain: "Đúng vì hai vectơ cùng hướng và có độ dài bằng nhau do $ABCD$ là hình bình hành." },
          { label: "b", text: "Vectơ $\\vec{OA} + \\vec{OC} = \\vec{0}$.", isTrue: true, explain: "Đúng vì $O$ là trung điểm của đường chéo $AC$ nên $\\vec{OA}$ và $\\vec{OC}$ đối nhau." },
          { label: "c", text: "Vectơ hiệu $\\vec{OB} - \\vec{OA} = \\vec{BA}$.", isTrue: false, explain: "Sai vì theo quy tắc hiệu: $\\vec{OB} - \\vec{OA} = \\vec{AB}$, chứ không phải $\\vec{BA}$." },
          { label: "d", text: "Vectơ tổng $\\vec{AB} + \\vec{AD} = 2\\vec{AO}$.", isTrue: true, explain: "Đúng vì $\\vec{AB} + \\vec{AD} = \\vec{AC}$, mà $O$ là trung điểm $AC$ nên $\\vec{AC} = 2\\vec{AO}$." }
        ],
        solution: "• a) Đúng vì $AB // DC$ và $AB = DC$.<br>• b) Đúng vì $O$ là trung điểm $AC$.<br>• c) Sai vì $\\vec{OB} - \\vec{OA} = \\vec{AB}$.<br>• d) Đúng vì $\\vec{AB} + \\vec{AD} = \\vec{AC} = 2\\vec{AO}$."
      },
      {
        id: "p2-q2",
        num: 2,
        title: "Câu 2 (Trọng tâm và trung điểm tam giác):",
        prompt: "Cho tam giác $ABC$ có $G$ là trọng tâm và $M$ là trung điểm của cạnh $BC$. Xét tính đúng hoặc sai của các mệnh đề sau:",
        items: [
          { label: "a", text: "Đẳng thức $\\vec{MB} + \\vec{MC} = \\vec{0}$ là đúng.", isTrue: true, explain: "Đúng vì $M$ là trung điểm của cạnh $BC$." },
          { label: "b", text: "Đẳng thức $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$ là đúng.", isTrue: true, explain: "Đúng theo tính chất trọng tâm tam giác (SGK trang 53)." },
          { label: "c", text: "Với đỉnh $A$, ta có $\\vec{AB} + \\vec{AC} = \\vec{AM}$.", isTrue: false, explain: "Sai vì theo hệ thức trung điểm: $\\vec{AB} + \\vec{AC} = 2\\vec{AM}$, thiếu hệ số 2." },
          { label: "d", text: "Vectơ $\\vec{AG} = \\frac{2}{3}\\vec{AM}$.", isTrue: true, explain: "Đúng vì $G$ nằm trên trung tuyến $AM$ và chia đoạn $AM$ theo tỉ lệ $AG = \\frac{2}{3}AM$, cùng hướng." }
        ],
        solution: "• a) Đúng vì $M$ là trung điểm $BC$.<br>• b) Đúng theo tính chất trọng tâm tam giác.<br>• c) Sai vì thiếu hệ số 2 (đúng phải là $\\vec{AB} + \\vec{AC} = 2\\vec{AM}$).<br>• d) Đúng vì $\\vec{AG}$ và $\\vec{AM}$ cùng hướng và độ lớn $AG = \\frac{2}{3}AM$."
      },
      {
        id: "p2-q3",
        num: 3,
        title: "Câu 3 (Biến đổi hệ thức bốn điểm bất kì):",
        prompt: "Cho bốn điểm phân biệt bất kì $A, B, C, D$. Xét tính đúng hoặc sai của các mệnh đề sau:",
        items: [
          { label: "a", text: "Đẳng thức $\\vec{AB} + \\vec{BC} + \\vec{CD} = \\vec{AD}$ luôn đúng.", isTrue: true, explain: "Đúng theo quy tắc ba điểm nối tiếp liên tục." },
          { label: "b", text: "Đẳng thức $\\vec{AB} - \\vec{AC} = \\vec{CB}$ luôn đúng.", isTrue: true, explain: "Đúng theo quy tắc hiệu chung gốc $A$." },
          { label: "c", text: "Đẳng thức $\\vec{AB} + \\vec{CD} = \\vec{AD} + \\vec{CB}$ luôn đúng.", isTrue: true, explain: "Đúng vì vế trái trừ vế phải: $\\vec{AB} - \\vec{AD} + \\vec{CD} - \\vec{CB} = \\vec{DB} + \\vec{BD} = \\vec{0}$." },
          { label: "d", text: "Độ dài $|\\vec{AB} + \\vec{BC}| = AB + BC$ luôn đúng.", isTrue: false, explain: "Sai vì theo bất đẳng thức tam giác: $|\\vec{AB} + \\vec{BC}| = AC \\le AB + BC$, dấu bằng chỉ xảy ra khi B nằm giữa A và C." }
        ],
        solution: "• a) Đúng: $(\\vec{AB} + \\vec{BC}) + \\vec{CD} = \\vec{AC} + \\vec{CD} = \\vec{AD}$.<br>• b) Đúng theo quy tắc hiệu: $\\vec{AB} - \\vec{AC} = \\vec{CB}$.<br>• c) Đúng vì biến đổi tương đương chuyển vế luôn bằng $\\vec{0}$.<br>• d) Sai vì độ dài vectơ tổng không bằng tổng độ dài với ba điểm bất kì."
      }
    ],

    // DẠNG 3: 2 CÂU TRẢ LỜI NGẮN SỐ HỌC (TOÁN THỰC TẾ VẬN DỤNG)
    part3ShortAnswer: [
      {
        id: "p3-q1",
        num: 1,
        title: "Câu 1 (Toán thực tế: Tốc độ thực tế ca nô qua sông Tiền):",
        prompt: "Một chiếc ca nô di chuyển từ bờ bên này sang bờ bên kia của sông Tiền (An Giang) theo phương vuông góc với bờ sông với vận tốc riêng là $15\\text{ km/h}$. Dòng nước chảy xuôi dòng với vận tốc $8\\text{ km/h}$. Tính tốc độ thực tế của chiếc ca nô đối với bờ sông (kết quả làm tròn đến hàng đơn vị theo $\\text{km/h}$).",
        correctAnswer: "17",
        unit: "km/h",
        solution: "Gọi $\\vec{v}_r$ là vận tốc riêng của ca nô và $\\vec{v}_n$ là vận tốc dòng nước. Vận tốc thực tế của ca nô so với bờ là $\\vec{v} = \\vec{v}_r + \\vec{v}_n$. Vì ca nô di chuyển vuông góc với bờ sông và dòng nước chảy song song với bờ sông nên $\\vec{v}_r \\perp \\vec{v}_n$. Theo định lí Pythagore: $v = |\\vec{v}| = \\sqrt{v_r^2 + v_n^2} = \\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17\\text{ km/h}$. Đáp số: 17.",
        similarVariation: {
          prompt: "Một chiếc ca nô di chuyển qua sông với vận tốc riêng là $12\\text{ km/h}$ vuông góc với bờ. Vận tốc dòng nước chảy là $5\\text{ km/h}$. Tính tốc độ thực tế của ca nô đối với bờ sông theo đơn vị $\\text{km/h}$.",
          correctAnswer: "13",
          unit: "km/h",
          solution: "$v = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13\\text{ km/h}$. Đáp số: 13."
        }
      },
      {
        id: "p3-q2",
        num: 2,
        title: "Câu 2 (Vật lí thực tế: Độ lớn hợp lực cân bằng):",
        prompt: "Một vật nằm cân bằng trên mặt sàn phẳng dưới tác dụng của ba lực $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$, nghĩa là $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0}$. Biết rằng hai lực $\\vec{F}_1$ và $\\vec{F}_2$ vuông góc với nhau và có độ lớn lần lượt là $30\\text{ N}$ và $40\\text{ N}$. Tính độ lớn của lực thứ ba $\\vec{F}_3$ theo đơn vị Newton.",
        correctAnswer: "50",
        unit: "N",
        solution: "Từ điều kiện cân bằng: $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0} \\implies \\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$. Suy ra độ lớn: $|\\vec{F}_3| = |\\vec{F}_1 + \\vec{F}_2|$. Vì $\\vec{F}_1 \\perp \\vec{F}_2$ nên theo quy tắc hình chữ nhật (Pythagore): $|\\vec{F}_1 + \\vec{F}_2| = \\sqrt{F_1^2 + F_2^2} = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\text{ N}$. Vậy độ lớn của lực $\\vec{F}_3$ là $50\\text{ N}$. Đáp số: 50.",
        similarVariation: {
          prompt: "Một chất điểm cân bằng dưới tác dụng của ba lực $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0}$. Biết $\\vec{F}_1 \\perp \\vec{F}_2$ và có độ lớn lần lượt là $60\\text{ N}$ và $80\\text{ N}$. Tính độ lớn của lực $\\vec{F}_3$ theo đơn vị Newton.",
          correctAnswer: "100",
          unit: "N",
          solution: "$|\\vec{F}_3| = \\sqrt{60^2 + 80^2} = \\sqrt{3600 + 6400} = 100\\text{ N}$. Đáp số: 100."
        }
      }
    ]
  }
};

// Tự động kết nối vào window.LESSONS_DATABASE nếu đã được nạp trước đó
if (typeof window !== "undefined" && window.LESSONS_DATABASE) {
  try {
    var c4 = window.LESSONS_DATABASE["10"] && window.LESSONS_DATABASE["10"].chapters["c4"];
    if (c4 && Array.isArray(c4.lessons)) {
      var idx = c4.lessons.findIndex(function(l) { return l.id === "10-c4-b8"; });
      if (idx !== -1) {
        c4.lessons[idx] = window.LESSON_10_C4_B8_DATA;
      }
    }
  } catch (e) {
    console.warn("Could not inject LESSON_10_C4_B8_DATA into LESSONS_DATABASE:", e);
  }
}

