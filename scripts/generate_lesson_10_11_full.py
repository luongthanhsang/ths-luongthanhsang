# -*- coding: utf-8 -*-
import json

data_js = r"""/**
 * BÀI HỌC SỐ: BÀI 11. TÍCH VÔ HƯỚNG CỦA HAI VECTƠ (TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - PHẦN I: Lời chào Thầy Sáng + Voice AI vàng đồng, chỉnh tốc độ
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 66 + Voice AI
 * - PHẦN III: Tiến trình bài học đa phương tiện:
 *             + Tình huống mở đầu: Công cơ học kéo hòm hàng & Lực F (Hình 4.42 SGK)
 *             + Mục 1: Góc giữa hai vectơ (Hình 4.39, 4.40, 4.41 SGK)
 *             + Mục 2: Định nghĩa tích vô hướng & Bình phương vô hướng (Hình 4.43 SGK)
 *             + Mục 3: Biểu thức toạ độ của tích vô hướng trong hệ Oxy
 *             + Mục 4: Tính chất, trực tâm tam giác & Phân tích lực sinh công (Hình 4.44, 4.45, 4.46 SGK)
 *             + Checkpoints POI chấm vàng tương tác tự động dừng và bật câu hỏi
 * - PHẦN IV: Bài tập trắc nghiệm củng cố tương tác chuẩn cấu trúc mới Bộ GD&ĐT:
 *             + 5 câu trắc nghiệm 4 lựa chọn (Hoán vị đáp án C, A, D, B, C phong phú)
 *             + 3 câu trắc nghiệm Đúng/Sai (Đủ 4 ý a, b, c, d)
 *             + 2 câu trả lời ngắn thực tế
 *             + Tích hợp "Lời giải chi tiết ThS. Lương Thanh Sáng" & "Bài toán tương tự" đổi số tự động
 */

window.LESSON_10_C4_B11_DATA = {
  id: "10-c4-b11",
  grade: "10",
  gradeLabel: "Lớp 10",
  chapterId: "c10-4",
  chapter: "Chương IV",
  chapterTitle: "Vectơ",
  number: "Bài 11",
  title: "Tích vô hướng của hai vectơ",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào toàn thể các em học sinh lớp 10 yêu quý! Trong các bài học trước, các em đã làm quen với phép cộng, phép trừ và phép nhân vectơ với một số – các phép toán này cho kết quả là một vectơ mới. Hôm nay, Thầy trò mình sẽ cùng khám phá một phép toán đặc biệt giữa hai vectơ: Bài 11, Tích vô hướng của hai vectơ. Phép toán này cho kết quả là một đại lượng vô hướng – một số thực, gắn liền mật thiết với khái niệm công cơ học trong Vật lí và là chìa khoá để tính góc, độ dài và chứng minh vuông góc trong hình học!",
    audioScript: "Thầy Sáng chào toàn thể các em học sinh lớp 10 yêu quý! Trong các bài học trước, các em đã làm quen với phép cộng, phép trừ và phép nhân vectơ với một số – các phép toán này cho kết quả là một vectơ mới. Hôm nay, Thầy trò mình sẽ cùng khám phá một phép toán đặc biệt giữa hai vectơ: Bài 11, Tích vô hướng của hai vectơ. Phép toán này cho kết quả là một đại lượng vô hướng – một số thực, gắn liền mật thiết với khái niệm công cơ học trong Vật lí và là chìa khoá để tính góc, độ dài và chứng minh vuông góc trong hình học!",
    audioUrl: "assets/audio/b10_11_welcome.mp3",
    buttonLabel: "Nghe thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 66)
  // =========================================================================
  learningGoals: [
    "Hiểu rõ định nghĩa và cách xác định góc giữa hai vectơ bất kì trong mặt phẳng từ $0^\\circ$ đến $180^\\circ$.",
    "Nắm vững định nghĩa tích vô hướng $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$, bình phương vô hướng và mối liên hệ với công cơ học $A = |\\vec{F}| \\cdot |\\vec{MN}| \\cdot \\cos(\\vec{F}, \\vec{MN})$.",
    "Thành thạo công thức toạ độ của tích vô hướng $\\vec{u} \\cdot \\vec{v} = x x' + y y'$, điều kiện hai vectơ vuông góc $x x' + y y' = 0$ và công thức tính côsin góc giữa hai vectơ.",
    "Vận dụng linh hoạt các tính chất phân phối, hằng đẳng thức vectơ để chứng minh tính vuông góc, giải tam giác và giải quyết các bài toán vật lí thực tiễn."
  ],
  goalsAudioScript: "Mục tiêu bài học cần đạt: Sau bài học này, các em cần làm chủ ba mục tiêu trọng tâm: Thứ nhất, hiểu rõ định nghĩa và cách xác định góc giữa hai vectơ từ 0 độ đến 180 độ. Thứ hai, nắm vững định nghĩa tích vô hướng, bình phương vô hướng và mối liên hệ sâu sắc với công sinh bởi một lực trong Vật lí. Thứ ba, thành thạo công thức toạ độ của tích vô hướng, điều kiện hai vectơ vuông góc và tính chất phân phối để giải các bài toán hình học và thực tiễn.",
  goalsAudioUrl: "assets/audio/b10_11_goals.mp3",
  goalsButtonLabel: "Nghe mục tiêu bài học",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN
  // =========================================================================
  hook: {
    title: "TÌNH HUỐNG THỰC TẾ: CÔNG CƠ HỌC CỦA LỰC KÉO & BẢN CHẤT VÔ HƯỚNG",
    audioScript: "Bài toán dẫn nhập: Trong Vật lí lớp 10, khi một người tác dụng một lực F không đổi kéo một thùng hàng chuyển động trên mặt sàn nằm ngang, công sinh ra được tính bằng tích độ lớn lực F, độ dài quãng đường chuyển dời và cosin góc hợp bởi hướng lực kéo với hướng chuyển động. Vì sao công lại là một đại lượng vô hướng, có thể nhận giá trị dương, âm hoặc bằng 0? Ngôn ngữ vectơ và tích vô hướng sẽ giúp chúng ta giải mã bản chất toán học kì diệu này!",
    audioUrl: "assets/audio/b10_11_hook.mp3",
    buttonLabel: "Nghe tình huống mở đầu",
    story: `
      <p>Trong Vật lí lớp 10, nếu lực $\\vec{F}$ không đổi tác động vào một vật và điểm đặt của lực chuyển động thẳng từ $M$ tới $N$, thì công $A$ của lực $\\vec{F}$ được tính theo công thức:</p>
      <div style="text-align: center; margin: 10px 0; font-size: 1.2rem; font-weight: bold; color: #0284c7;">
        $$A = |\\vec{F}| \\cdot |\\vec{MN}| \\cdot \\cos(\\vec{F}, \\vec{MN})$$
      </div>
      <p>Trong đó $|\\vec{F}|$ là độ lớn của lực (N), $|\\vec{MN}|$ là quãng đường chuyển dời (m), và $(\\vec{F}, \\vec{MN})$ là góc giữa vectơ lực $\\vec{F}$ và vectơ độ dời $\\vec{MN}$. Toán học gọi giá trị $A$ trong biểu thức trên chính là <strong>tích vô hướng</strong> của hai vectơ $\\vec{F}$ và $\\vec{MN}$!</p>
    `,
    illustration: `
      <div class="tikz-svg-wrap" style="text-align: center; margin: 16px 0;">
        <svg viewBox="0 0 700 240" style="max-width: 660px; width: 100%; height: auto; display: block; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #cbd5e1;">
          <defs>
            <marker id="arr-b11-red" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
            </marker>
            <marker id="arr-b11-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
            </marker>
            <linearGradient id="boxWood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fef3c7"/>
              <stop offset="100%" stop-color="#d97706"/>
            </linearGradient>
          </defs>

          <!-- Mặt sàn nằm ngang -->
          <line x1="40" y1="190" x2="660" y2="190" stroke="#475569" stroke-width="2.5"/>
          <!-- Vạch chéo mặt sàn -->
          <path d="M 50 190 L 40 205 M 90 190 L 80 205 M 130 190 L 120 205 M 170 190 L 160 205 M 210 190 L 200 205 M 250 190 L 240 205 M 290 190 L 280 205 M 330 190 L 320 205 M 370 190 L 360 205 M 410 190 L 400 205 M 450 190 L 440 205 M 490 190 L 480 205 M 530 190 L 520 205 M 570 190 L 560 205 M 610 190 L 600 205 M 650 190 L 640 205" stroke="#94a3b8" stroke-width="1.5"/>

          <!-- Hòm hàng ban đầu tại vị trí M -->
          <rect x="140" y="110" width="80" height="80" rx="4" fill="url(#boxWood)" stroke="#b45309" stroke-width="2"/>
          <line x1="140" y1="110" x2="220" y2="190" stroke="#b45309" stroke-width="1.5"/>
          <line x1="140" y1="190" x2="220" y2="110" stroke="#b45309" stroke-width="1.5"/>
          <circle cx="220" cy="110" r="4.5" fill="#dc2626"/>
          <text x="225" y="125" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">M</text>

          <!-- Vectơ lực kéo F chếch góc alpha -->
          <line x1="220" y1="110" x2="350" y2="50" stroke="#dc2626" stroke-width="3.5" marker-end="url(#arr-b11-red)"/>
          <text x="310" y="45" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">Lực \\vec{F}</text>

          <!-- Góc alpha giữa F và phương ngang -->
          <line x1="220" y1="110" x2="330" y2="110" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
          <path d="M 260 110 A 40 40 0 0 0 252 95" fill="none" stroke="#dc2626" stroke-width="2"/>
          <text x="270" y="102" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">&alpha;</text>

          <!-- Người kéo minh họa -->
          <g transform="translate(370, 45)">
            <!-- Đầu -->
            <circle cx="40" cy="30" r="14" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
            <!-- Thân nghiêng kéo dây -->
            <line x1="40" y1="44" x2="25" y2="95" stroke="#0284c7" stroke-width="4"/>
            <!-- Tay kéo dây nối từ M -->
            <line x1="32" y1="60" x2="-20" y2="65" stroke="#fed7aa" stroke-width="3"/>
            <!-- Chân trước, chân sau -->
            <line x1="25" y1="95" x2="45" y2="145" stroke="#1e293b" stroke-width="4"/>
            <line x1="25" y1="95" x2="0" y2="145" stroke="#1e293b" stroke-width="4"/>
          </g>

          <!-- Hòm hàng sau khi di chuyển đến N (nét đứt) -->
          <rect x="470" y="110" width="80" height="80" rx="4" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
          <circle cx="550" cy="110" r="4.5" fill="#0284c7"/>
          <text x="555" y="125" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">N</text>

          <!-- Vectơ độ dời MN -->
          <line x1="220" y1="160" x2="540" y2="160" stroke="#0284c7" stroke-width="3" marker-end="url(#arr-b11-blue)"/>
          <text x="350" y="152" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">Độ dời \\vec{MN}</text>
          <text x="310" y="225" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#334155">Hình 4.42: Công cơ học A = |\\vec{F}|·|\\vec{MN}|·cos(&alpha;)</text>
        </svg>
      </div>
    `
  },

  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1. GÓC GIỮA HAI VECTƠ
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "Góc giữa hai vectơ",
      audioScript: "Mục một, Góc giữa hai vectơ: Cho hai vectơ u và v khác vectơ không. Từ một điểm A bất kì, ta vẽ vectơ AB bằng u và AC bằng v. Khi đó, góc BAC chính là góc giữa hai vectơ u và v, nhận giá trị từ 0 độ đến 180 độ. Đặc biệt, góc bằng 0 độ khi hai vectơ cùng hướng, bằng 180 độ khi ngược hướng, và nếu góc bằng 90 độ, ta nói hai vectơ vuông góc với nhau.",
      audioUrl: "assets/audio/b10_11_sec1.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-11-sec1-1",
          time: 12,
          title: "Giây 12: Phạm vi giá trị của góc giữa hai vectơ",
          question: "Góc giữa hai vectơ $\\vec{u}$ và $\\vec{v}$ nhận giá trị trong khoảng nào sau đây?",
          options: [
            "$0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 90^\\circ$",
            "$0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$",
            "$-180^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$",
            "$0^\\circ < (\\vec{u}, \\vec{v}) < 360^\\circ$"
          ],
          correctIndex: 1, // B
          hint: "Định nghĩa SGK trang 66: Số đo góc giữa hai vectơ luôn nằm từ $0^\\circ$ đến $180^\\circ$.",
          explain: "Chính xác! Quy ước góc giữa hai vectơ nhận giá trị tuỳ ý từ $0^\\circ$ đến $180^\\circ$."
        },
        {
          id: "poi-10-11-sec1-2",
          time: 20,
          title: "Giây 20: Góc giữa hai vectơ cùng hướng",
          question: "Khi hai vectơ $\\vec{u}$ và $\\vec{v}$ cùng hướng với nhau, góc $(\\vec{u}, \\vec{v})$ bằng bao nhiêu?",
          options: [
            "$90^\\circ$",
            "$0^\\circ$",
            "$180^\\circ$",
            "$45^\\circ$"
          ],
          correctIndex: 1, // B
          hint: "Hai tia $AB$ và $AC$ trùng nhau nên số đo góc $\\widehat{BAC} = 0^\\circ$.",
          explain: "Chính xác! Khi hai vectơ cùng hướng thì góc giữa chúng bằng $0^\\circ$; khi ngược hướng thì bằng $180^\\circ$."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Định nghĩa góc giữa hai vectơ",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #f0fdf4; border-left-color: #16a34a;">
              <div class="sgk-box-tag" style="color: #15803d;"><i class="fa-solid fa-angle"></i> Định nghĩa (SGK trang 66):</div>
              <p style="color: #166534; margin-bottom: 8px;">
                Cho hai vectơ $\\vec{u}$ và $\\vec{v}$ khác $\\vec{0}$. Từ một điểm $A$ tuỳ ý, vẽ các vectơ $\\vec{AB} = \\vec{u}$ và $\\vec{AC} = \\vec{v}$ (Hình 4.40).
              </p>
              <p style="color: #166534; margin-bottom: 8px;">
                Khi đó, số đo của góc $\\widehat{BAC}$ được gọi là <strong>số đo của góc giữa hai vectơ $\\vec{u}$ và $\\vec{v}$</strong> hay đơn giản là góc giữa hai vectơ $\\vec{u}, \\vec{v}$, kí hiệu là $(\\vec{u}, \\vec{v})$.
              </p>
            </div>

            <!-- Khung Chú ý quan trọng -->
            <div class="memory-tip-box" style="margin-top: 14px; background: #fffbeb; border: 1px solid #fde68a; border-left: 5px solid #f59e0b; padding: 14px 18px; border-radius: 8px;">
              <strong style="color: #92400e; font-size: 1.05rem;"><i class="fa-solid fa-star"></i> Chú ý quan trọng của Thầy Sáng:</strong>
              <p style="margin: 6px 0 0 0; color: #78350f; line-height: 1.6;">
                1) Quy ước góc giữa vectơ $\\vec{u}$ và vectơ-không $\\vec{0}$ có thể nhận giá trị tuỳ ý từ $0^\\circ$ đến $180^\\circ$.<br>
                2) Khi $(\\vec{u}, \\vec{v}) = 90^\\circ$, ta nói $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau, kí hiệu $\\vec{u} \\perp \\vec{v}$.<br>
                3) $(\\vec{u}, \\vec{v}) = 0^\\circ \\iff \\vec{u}$ và $\\vec{v}$ cùng hướng.<br>
                4) $(\\vec{u}, \\vec{v}) = 180^\\circ \\iff \\vec{u}$ và $\\vec{v}$ ngược hướng.
              </p>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2. ĐỊNH NGHĨA TÍCH VÔ HƯỚNG CỦA HAI VECTƠ
    // -----------------------------------------------------------------------
    {
      num: "2",
      title: "Định nghĩa Tích vô hướng của hai vectơ",
      audioScript: "Mục hai, Định nghĩa tích vô hướng: Tích vô hướng của hai vectơ u và v là một số thực, kí hiệu là u chấm v, bằng tích độ dài của u, độ dài của v nhân với cosin góc giữa chúng. Bình phương vô hướng của một vectơ bằng bình phương độ dài của nó. Tích vô hướng sẽ dương nếu góc giữa chúng là góc nhọn, âm nếu là góc tù, và bằng 0 khi và chỉ khi hai vectơ vuông góc với nhau.",
      audioUrl: "assets/audio/b10_11_sec2.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-11-sec2-1",
          time: 12,
          title: "Giây 12: Dấu của tích vô hướng",
          question: "Cho hai vectơ khác không $\\vec{u}$ và $\\vec{v}$. Tích vô hướng $\\vec{u} \\cdot \\vec{v} < 0$ khi và chỉ khi:",
          options: [
            "Góc giữa hai vectơ là góc nhọn ($0^\\circ \\le (\\vec{u}, \\vec{v}) < 90^\\circ$)",
            "Góc giữa hai vectơ là góc tù ($90^\\circ < (\\vec{u}, \\vec{v}) \\le 180^\\circ$)",
            "Hai vectơ vuông góc với nhau",
            "Hai vectơ có độ dài âm"
          ],
          correctIndex: 1, // B
          hint: "Vì độ dài $|\vec{u}| > 0, |\vec{v}| > 0$ nên dấu của tích vô hướng phụ thuộc vào $\\cos(\\vec{u}, \\vec{v})$. Côsin âm khi góc tù!",
          explain: "Chính xác! $\\cos(\\vec{u}, \\vec{v}) < 0 \\iff 90^\\circ < (\\vec{u}, \\vec{v}) \\le 180^\\circ$ (góc tù)."
        },
        {
          id: "poi-10-11-sec2-2",
          time: 19,
          title: "Giây 19: Bình phương vô hướng",
          question: "Bình phương vô hướng $\\vec{u}^2$ của vectơ $\\vec{u}$ bằng:",
          options: [
            "$|\\vec{u}|$",
            "$|\\vec{u}|^2$",
            "$2|\\vec{u}|$",
            "$\\vec{0}$"
          ],
          correctIndex: 1, // B
          hint: "$\\vec{u} \\cdot \\vec{u} = |\\vec{u}| \\cdot |\\vec{u}| \\cdot \\cos 0^\\circ = |\\vec{u}|^2$.",
          explain: "Chính xác! Chú ý SGK trang 67: Bình phương vô hướng của một vectơ bằng bình phương độ dài của vectơ đó."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Công thức định nghĩa tích vô hướng",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #eff6ff; border-left-color: #2563eb;">
              <div class="sgk-box-tag" style="color: #1d4ed8;"><i class="fa-solid fa-square-root-variable"></i> Định nghĩa Tích vô hướng (SGK trang 67):</div>
              <p style="color: #1e3a8a; margin-bottom: 8px;">
                Tích vô hướng của hai vectơ $\\vec{u}$ và $\\vec{v}$ là một số, kí hiệu là $\\vec{u} \\cdot \\vec{v}$, được xác định bởi công thức:
              </p>
              <div style="text-align: center; margin: 10px 0; font-size: 1.3rem; font-weight: bold; color: #1e3a8a;">
                $$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$$
              </div>
            </div>

            <!-- Khung Hai kết quả cốt lõi -->
            <div style="margin-top: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
              <h5 style="color: #0f172a; margin: 0 0 8px 0; font-size: 1rem;"><i class="fa-solid fa-check-double" style="color: #16a34a;"></i> Hai hệ quả cốt lõi cần nhớ:</h5>
              <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.7;">
                <li><strong>Điều kiện vuông góc:</strong> $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.</li>
                <li><strong>Bình phương vô hướng:</strong> $\\vec{u} \\cdot \\vec{u} = \\vec{u}^2 = |\\vec{u}|^2$.</li>
              </ul>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3. BIỂU THỨC TOẠ ĐỘ VÀ TÍNH CHẤT CỦA TÍCH VÔ HƯỚNG
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "Biểu thức toạ độ của tích vô hướng",
      audioScript: "Mục ba, Biểu thức toạ độ của tích vô hướng: Trong mặt phẳng toạ độ Oxy, nếu u có toạ độ x, y và v có toạ độ x phẩy, y phẩy, thì tích vô hướng u nhân v bằng x nhân x phẩy cộng y nhân y phẩy. Từ đó, hai vectơ vuông góc khi và chỉ khi x x phẩy cộng y y phẩy bằng 0, và cosin góc giữa hai vectơ bằng tích vô hướng chia cho tích độ dài của chúng.",
      audioUrl: "assets/audio/b10_11_sec3.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-11-sec3-1",
          time: 12,
          title: "Giây 12: Tính tích vô hướng theo toạ độ",
          question: "Trong mặt phẳng $Oxy$, cho $\\vec{u} = (2; -3)$ và $\\vec{v} = (5; 3)$. Giá trị của $\\vec{u} \\cdot \\vec{v}$ bằng:",
          options: [
            "$19$",
            "$1$",
            "$-1$",
            "$10$"
          ],
          correctIndex: 1, // B
          hint: "$\\vec{u} \\cdot \\vec{v} = 2 \\times 5 + (-3) \\times 3 = 10 - 9$.",
          explain: "Chính xác! $\\vec{u} \\cdot \\vec{v} = 2 \\times 5 + (-3) \\times 3 = 10 - 9 = 1$."
        },
        {
          id: "poi-10-11-sec3-2",
          time: 18,
          title: "Giây 18: Điều kiện toạ độ hai vectơ vuông góc",
          question: "Hai vectơ $\\vec{u} = (x; y)$ và $\\vec{v} = (x'; y')$ vuông góc với nhau khi và chỉ khi:",
          options: [
            "$x x' - y y' = 0$",
            "$x x' + y y' = 0$",
            "$x y' - x' y = 0$",
            "$x + x' = y + y'$"
          ],
          correctIndex: 1, // B
          hint: "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0 \\iff x x' + y y' = 0$.",
          explain: "Chính xác! Định lí SGK trang 68: $\\vec{u} \\perp \\vec{v} \\iff x x' + y y' = 0$."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Biểu thức toạ độ trong mặt phẳng Oxy",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #fdf4ff; border-left-color: #c026d3;">
              <div class="sgk-box-tag" style="color: #a21caf;"><i class="fa-solid fa-code"></i> Định lí Biểu thức toạ độ (SGK trang 68):</div>
              <p style="color: #701a75; margin-bottom: 8px;">
                Cho hai vectơ $\\vec{u} = (x; y)$ và $\\vec{v} = (x'; y')$. Tích vô hướng của $\\vec{u}$ và $\\vec{v}$ được tính theo công thức:
              </p>
              <div style="text-align: center; margin: 10px 0; font-size: 1.3rem; font-weight: bold; color: #a21caf;">
                $$\\vec{u} \\cdot \\vec{v} = x x' + y y'$$
              </div>
            </div>

            <!-- Bảng Nhận xét quan trọng -->
            <div style="margin-top: 14px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px;">
              <h5 style="color: #0f172a; margin: 0 0 8px 0; font-size: 1rem;"><i class="fa-solid fa-calculator" style="color: #2563eb;"></i> Các công thức hệ quả quan trọng (SGK trang 68):</h5>
              <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.8;">
                <li><strong>Điều kiện vuông góc:</strong> $\\vec{u} \\perp \\vec{v} \\iff x x' + y y' = 0$.</li>
                <li><strong>Độ dài vectơ:</strong> $|\\vec{u}| = \\sqrt{\\vec{u}^2} = \\sqrt{x^2 + y^2}$.</li>
                <li><strong>Côsin góc giữa hai vectơ (khác $\\vec{0}$):</strong>
                  <div style="text-align: center; margin: 6px 0; font-size: 1.15rem; font-weight: bold; color: #2563eb;">
                    $$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{x x' + y y'}{\\sqrt{x^2 + y^2} \\cdot \\sqrt{x'^2 + y'^2}}$$
                  </div>
                </li>
              </ul>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4. TÍNH CHẤT VÀ ỨNG DỤNG CỦA TÍCH VÔ HƯỚNG
    // -----------------------------------------------------------------------
    {
      num: "4",
      title: "Tính chất và ứng dụng của tích vô hướng",
      audioScript: "Mục bốn, Tính chất và ứng dụng của tích vô hướng: Tích vô hướng có tính chất giao hoán, phân phối đối với phép cộng và phép trừ, cùng các hằng đẳng thức vectơ đáng nhớ. Nhờ tích vô hướng, ta có thể dễ dàng chứng minh các đoạn thẳng vuông góc, tìm trực tâm tam giác, tính độ dài, góc và tính công của hợp lực tác dụng lên vật thể trong cơ học.",
      audioUrl: "assets/audio/b10_11_sec4.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-11-sec4-1",
          time: 11,
          title: "Giây 11: Tính chất phân phối",
          question: "Với ba vectơ $\\vec{u}, \\vec{v}, \\vec{w}$ bất kì, khẳng định nào sau đây là ĐÚNG?",
          options: [
            "$\\vec{u} \\cdot (\\vec{v} + \\vec{w}) = \\vec{u} \\cdot \\vec{v} + \\vec{w}$",
            "$\\vec{u} \\cdot (\\vec{v} + \\vec{w}) = \\vec{u} \\cdot \\vec{v} + \\vec{u} \\cdot \\vec{w}$",
            "$(\\vec{u} \\cdot \\vec{v}) \\cdot \\vec{w} = \\vec{u} \\cdot (\\vec{v} \\cdot \\vec{w})$",
            "$\\vec{u} \\cdot \\vec{v} = -\\vec{v} \\cdot \\vec{u}$"
          ],
          correctIndex: 1, // B
          hint: "Tính chất phân phối của tích vô hướng đối với phép cộng vectơ: $\\vec{u} \\cdot (\\vec{v} + \\vec{w}) = \\vec{u} \\cdot \\vec{v} + \\vec{u} \\cdot \\vec{w}$.",
          explain: "Chính xác! SGK trang 69: Tích vô hướng có tính chất phân phối hoàn toàn giống như phép nhân thông thường."
        },
        {
          id: "poi-10-11-sec4-2",
          time: 19,
          title: "Giây 19: Điều kiện trực tâm tam giác",
          question: "Điểm $H$ là trực tâm của tam giác $ABC$ khi và chỉ khi thoả mãn hệ điều kiện nào sau đây?",
          options: [
            "$\\vec{HA} + \\vec{HB} + \\vec{HC} = \\vec{0}$",
            "$\\begin{cases} \\vec{AH} \\cdot \\vec{BC} = 0 \\\\ \\vec{BH} \\cdot \\vec{CA} = 0 \\end{cases}$",
            "$HA = HB = HC$",
            "$\\vec{AH} = \\vec{BC}$"
          ],
          correctIndex: 1, // B
          hint: "Trực tâm là giao điểm của các đường cao, tức là $AH \\perp BC$ và $BH \\perp CA$.",
          explain: "Chính xác! Luyện tập 4 SGK trang 70: $H$ là trực tâm &hArr; $AH \\perp BC$ và $BH \\perp CA$ &hArr; $\\vec{AH} \\cdot \\vec{BC} = 0$ và $\\vec{BH} \\cdot \\vec{CA} = 0$."
        }
      ],
      subsections: [
        {
          key: "4a",
          title: "Các tính chất đại số và hằng đẳng thức vectơ",
          contentHtml: `
            <div class="sgk-framed-box" style="background: #fff7ed; border-left-color: #ea580c;">
              <div class="sgk-box-tag" style="color: #c2410c;"><i class="fa-solid fa-list-check"></i> Các tính chất của tích vô hướng (SGK trang 69):</div>
              <ul class="sgk-box-list" style="color: #9a3412;">
                <li><strong>Giao hoán:</strong> $\\vec{u} \\cdot \\vec{v} = \\vec{v} \\cdot \\vec{u}$</li>
                <li><strong>Phân phối:</strong> $\\vec{u} \\cdot (\\vec{v} + \\vec{w}) = \\vec{u} \\cdot \\vec{v} + \\vec{u} \\cdot \\vec{w}$</li>
                <li><strong>Nhân với số:</strong> $(k\\vec{u}) \\cdot \\vec{v} = k(\\vec{u} \\cdot \\vec{v}) = \\vec{u} \\cdot (k\\vec{v})$</li>
              </ul>
            </div>

            <!-- Các hằng đẳng thức vectơ đáng nhớ -->
            <div style="margin-top: 14px; background: #ffffff; border: 1px solid #fed7aa; border-radius: 8px; padding: 14px 18px;">
              <h5 style="color: #9a3412; margin: 0 0 8px 0; font-size: 1rem;"><i class="fa-solid fa-fire" style="color: #ea580c;"></i> Hằng đẳng thức vectơ đáng nhớ (SGK trang 69):</h5>
              <div style="color: #334155; line-height: 1.8;">
                - $(\\vec{u} + \\vec{v})^2 = \\vec{u}^2 + 2\\vec{u} \\cdot \\vec{v} + \\vec{v}^2$<br>
                - $(\\vec{u} - \\vec{v})^2 = \\vec{u}^2 - 2\\vec{u} \\cdot \\vec{v} + \\vec{v}^2$<br>
                - $(\\vec{u} + \\vec{v}) \\cdot (\\vec{u} - \\vec{v}) = \\vec{u}^2 - \\vec{v}^2$
              </div>
            </div>
          `
        }
      ]
    }
  ],

  // =========================================================================
  // TỔNG KẾT & CHỐT BÀI HỌC CỦA THẦY SÁNG
  // =========================================================================
  realworldWrapup: {
    title: "TỔNG KẾT BÀI HỌC & CHINH PHỤC TRỌN VẸN CHƯƠNG IV VECTƠ",
    recap: "Tích vô hướng là một trong những khái niệm toán học đẹp đẽ và quyền năng nhất của Hình học lớp 10, mở ra chìa khoá giải quyết các bài toán góc, độ dài, tính vuông góc và công cơ học trong Vật lí hiện đại.",
    audioScript: "Chốt bài học: Thầy Sáng chúc mừng các em đã xuất sắc hoàn thành Bài 11 cũng như toàn bộ Chương IV Vectơ của chương trình Toán 10! Kiến thức về vectơ và phương pháp toạ độ sẽ là hành trang vô giá đồng hành cùng các em trong suốt các năm học cấp ba và kì thi tốt nghiệp trung học phổ thông. Bây giờ, các em hãy cùng Thầy rèn luyện 10 câu trắc nghiệm chuẩn hoá ở Phần IV nhé!",
    audioUrl: "assets/audio/b10_11_wrapup.mp3",
    buttonLabel: "Nghe Thầy Sáng chốt bài học"
  },

  // =========================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2025 BỘ GD&ĐT)
  // =========================================================================
  examFormatPractice: {
    title: "PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC BỘ GD&ĐT)",
    // -----------------------------------------------------------------------
    // DẠNG 1: 5 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN (HOÁN VỊ ĐÁP ÁN: C, A, D, B, C)
    // -----------------------------------------------------------------------
    part1MultipleChoice: [
      {
        id: "mc-10-11-1",
        num: 1,
        level: "Nhận biết",
        prompt: "Cho tam giác đều $ABC$ có cạnh bằng $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng:",
        options: [
          "$\\dfrac{a^2\\sqrt{3}}{2}$",
          "$a^2$",
          "$\\dfrac{a^2}{2}$",
          "$-\\dfrac{a^2}{2}$"
        ],
        correctIndex: 2, // C
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vì tam giác $ABC$ đều nên $AB = AC = a$ và góc $\\widehat{BAC} = 60^\\circ$.<br>Áp dụng công thức định nghĩa tích vô hướng:<br>$$\\vec{AB} \\cdot \\vec{AC} = |\\vec{AB}| \\cdot |\\vec{AC}| \\cdot \\cos(\\vec{AB}, \\vec{AC}) = a \\cdot a \\cdot \\cos 60^\\circ = a^2 \\cdot \\dfrac{1}{2} = \\dfrac{a^2}{2}.$$<br>&rArr; <strong>Chọn đáp án C.</strong>",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Cho tam giác đều $ABC$ cạnh $2$. Tính $\\vec{AB} \\cdot \\vec{AC}$.",
          options: ["$1$", "$2$", "$4$", "$\\sqrt{3}$"],
          correctIndex: 1, // B (2)
          solution: "$\\vec{AB} \\cdot \\vec{AC} = 2 \\times 2 \\times \\cos 60^\\circ = 4 \\times 0{,}5 = 2$."
        }
      },
      {
        id: "mc-10-11-2",
        num: 2,
        level: "Nhận biết",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho $\\vec{a} = (-3; 1)$ và $\\vec{b} = (2; 6)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
        options: [
          "$0$",
          "$-12$",
          "$12$",
          "$-6$"
        ],
        correctIndex: 0, // A
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo biểu thức toạ độ của tích vô hướng:<br>$$\\vec{a} \\cdot \\vec{b} = x_a x_b + y_a y_b = (-3) \\times 2 + 1 \\times 6 = -6 + 6 = 0.$$<br>Do đó $\\vec{a} \\perp \\vec{b}$.<br>&rArr; <strong>Chọn đáp án A.</strong>",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cho $\\vec{u} = (4; -2)$ và $\\vec{v} = (1; 2)$. Tính $\\vec{u} \\cdot \\vec{v}$.",
          options: ["$0$", "$8$", "$-4$", "$4$"],
          correctIndex: 0, // A
          solution: "$4 \\times 1 + (-2) \\times 2 = 4 - 4 = 0$."
        }
      },
      {
        id: "mc-10-11-3",
        num: 3,
        level: "Thông hiểu",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, góc giữa hai vectơ $\\vec{u} = (1; 1)$ và $\\vec{v} = (0; 2)$ bằng:",
        options: [
          "$90^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$45^\\circ$"
        ],
        correctIndex: 3, // D
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Ta có $\\vec{u} \\cdot \\vec{v} = 1 \\times 0 + 1 \\times 2 = 2$.<br>Độ dài: $|\\vec{u}| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$; $|\\vec{v}| = \\sqrt{0^2 + 2^2} = 2$.<br>Suy ra: $$\\cos(\\vec{u}, \\vec{v}) = \\dfrac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\dfrac{2}{\\sqrt{2} \\times 2} = \\dfrac{1}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}.$$<br>Do đó $(\\vec{u}, \\vec{v}) = 45^\\circ$.<br>&rArr; <strong>Chọn đáp án D.</strong>",
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Tính góc giữa $\\vec{a} = (1; 0)$ và $\\vec{b} = (1; \\sqrt{3})$.",
          options: ["$30^\\circ$", "$60^\\circ$", "$45^\\circ$", "$90^\\circ$"],
          correctIndex: 1, // B (60 deg)
          solution: "$\\cos = 1 / (1 \\times 2) = 1/2 \\Rightarrow 60^\\circ$."
        }
      },
      {
        id: "mc-10-11-4",
        num: 4,
        level: "Thông hiểu",
        prompt: "Cho hình vuông $ABCD$ cạnh bằng $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{BD}$ bằng:",
        options: [
          "$a^2$",
          "$-a^2$",
          "$a^2\\sqrt{2}$",
          "$-a^2\\sqrt{2}$"
        ],
        correctIndex: 1, // B
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Độ dài: $AB = a$ và đường chéo $BD = a\\sqrt{2}$.<br>Góc giữa $\\vec{AB}$ và $\\vec{BD}$: Vì $\\vec{AB}$ hướng sang phải, còn $\\vec{BD}$ hướng chéo xuống trái hợp với $BA$ góc $45^\\circ$, nên $(\\vec{AB}, \\vec{BD}) = 180^\\circ - 45^\\circ = 135^\\circ$.<br>Suy ra: $$\\vec{AB} \\cdot \\vec{BD} = a \\cdot a\\sqrt{2} \\cdot \\cos 135^\\circ = a^2\\sqrt{2} \\cdot \\left(-\\dfrac{\\sqrt{2}}{2}\\right) = -a^2.$$<br>&rArr; <strong>Chọn đáp án B.</strong>",
        similarVariation: {
          prompt: "Câu 4 (Tương tự): Cho hình vuông $ABCD$ cạnh $a$. Tính $\\vec{AB} \\cdot \\vec{AC}$.",
          options: ["$a^2$", "$2a^2$", "$0$", "$-a^2$"],
          correctIndex: 0, // A
          solution: "$\\vec{AB} \\cdot \\vec{AC} = a \\cdot a\\sqrt{2} \\cdot \\cos 45^\\circ = a^2$."
        }
      },
      {
        id: "mc-10-11-5",
        num: 5,
        level: "Vận dụng",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho ba điểm $A(1; 2)$, $B(-4; 3)$ và điểm $M(t; 0)$ thuộc trục hoành. Giá trị của tham số $t$ để tam giác $ABM$ vuông tại $M$ là:",
        options: [
          "$t = 1$ hoặc $t = 2$",
          "$t = 0$ hoặc $t = 5$",
          "$t = -2$ hoặc $t = -1$",
          "$t = -3$ hoặc $t = 4$"
        ],
        correctIndex: 2, // C
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Ta có: $\\vec{MA} = (1 - t;\\, 2)$ và $\\vec{MB} = (-4 - t;\\, 3)$.<br>Tam giác $ABM$ vuông tại $M$ &hArr; $\\vec{MA} \\perp \\vec{MB} \\iff \\vec{MA} \\cdot \\vec{MB} = 0$.<br>Suy ra:<br>$$(1 - t)(-4 - t) + 2 \\times 3 = 0 \\iff -4 - t + 4t + t^2 + 6 = 0 \\iff t^2 + 3t + 2 = 0.$$<br>Giải phương trình bậc hai ta được: $t = -1$ hoặc $t = -2$.<br>&rArr; <strong>Chọn đáp án C.</strong>",
        similarVariation: {
          prompt: "Câu 5 (Tương tự): Cho $A(2; 1), B(-2; 2), M(t; 0)$. Tìm $t$ để $\\vec{MA} \\perp \\vec{MB}$.",
          options: ["$t = \\pm \\sqrt{2}$", "$t = 0$", "$t = \\pm 1$", "$t = 1; 2$"],
          correctIndex: 0, // A
          solution: "$(2-t)(-2-t) + 2 = 0 \\iff t^2 - 4 + 2 = 0 \\iff t^2 = 2 \\iff t = \\pm\\sqrt{2}$."
        }
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 2: 3 CÂU TRẮC NGHIỆM ĐÚNG / SAI
    // -----------------------------------------------------------------------
    part2TrueFalse: [
      {
        id: "tf-10-11-1",
        num: 1,
        level: "Thông hiểu",
        prompt: "Cho tam giác $ABC$ vuông cân tại $A$ có cạnh huyền $BC = a\\sqrt{2}$.",
        items: [
          {
            statement: "a) Độ dài hai cạnh góc vuông là $AB = AC = a$.",
            isCorrect: true,
            solution: "Tam giác $ABC$ vuông cân tại $A$ nên $BC = AB\\sqrt{2} = a\\sqrt{2} \\Rightarrow AB = AC = a$."
          },
          {
            statement: "b) Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = 0$.",
            isCorrect: true,
            solution: "Do $AB \\perp AC$ nên $(\\vec{AB}, \\vec{AC}) = 90^\\circ \\Rightarrow \\vec{AB} \\cdot \\vec{AC} = 0$."
          },
          {
            statement: "c) Tích vô hướng $\\vec{BA} \\cdot \\vec{BC} = a^2$.",
            isCorrect: true,
            solution: "Góc $\\widehat{B} = 45^\\circ \\Rightarrow \\vec{BA} \\cdot \\vec{BC} = a \\cdot a\\sqrt{2} \\cdot \\cos 45^\\circ = a^2$."
          },
          {
            statement: "d) Tích vô hướng $\\vec{AB} \\cdot \\vec{BC} = a^2$.",
            isCorrect: false,
            solution: "$(\\vec{AB}, \\vec{BC}) = 180^\\circ - 45^\\circ = 135^\\circ \\Rightarrow \\vec{AB} \\cdot \\vec{BC} = a \\cdot a\\sqrt{2} \\cdot \\cos 135^\\circ = -a^2$ (chứ không phải $a^2$)."
          }
        ]
      },
      {
        id: "tf-10-11-2",
        num: 2,
        level: "Vận dụng",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho ba điểm $A(-1; 2)$, $B(8; -1)$ và $C(8; 8)$ (Luyện tập 4 SGK trang 70). Gọi $H(x_H; y_H)$ là trực tâm của tam giác $ABC$.",
        items: [
          {
            statement: "a) Toạ độ của vectơ $\\vec{BC}$ là $(0; 9)$.",
            isCorrect: true,
            solution: "$\\vec{BC} = (8 - 8; 8 - (-1)) = (0; 9)$."
          },
          {
            statement: "b) Toạ độ của vectơ $\\vec{CA}$ là $(-9; -6)$.",
            isCorrect: true,
            solution: "$\\vec{CA} = (-1 - 8; 2 - 8) = (-9; -6)$."
          },
          {
            statement: "c) Điều kiện $AH \\perp BC$ tương đương với $y_H = 2$.",
            isCorrect: true,
            solution: "$\\vec{AH} = (x_H + 1; y_H - 2)$. $\\vec{AH} \\cdot \\vec{BC} = 0 \\iff 0(x_H + 1) + 9(y_H - 2) = 0 \\iff y_H = 2$."
          },
          {
            statement: "d) Toạ độ của trực tâm $H$ là $H(2; 2)$.",
            isCorrect: false,
            solution: "$\\vec{BH} = (x_H - 8; y_H + 1) = (x_H - 8; 3)$. $\\vec{BH} \\cdot \\vec{CA} = 0 \\iff -9(x_H - 8) - 6(3) = 0 \\iff -9x_H + 72 - 18 = 0 \\iff 9x_H = 54 \\iff x_H = 6$. Vậy $H(6; 2)$ chứ không phải $H(2; 2)$."
          }
        ]
      },
      {
        id: "tf-10-11-3",
        num: 3,
        level: "Vận dụng thực tế",
        prompt: "Một chiếc xe goòng chuyển động trên đường ray nằm ngang chịu tác dụng của một lực kéo $\\vec{F}$ có độ lớn $100\\text{ N}$ hợp với phương chuyển động một góc $\\alpha = 60^\\circ$. Xe chuyển động được quãng đường $s = 50\\text{ m}$.",
        items: [
          {
            statement: "a) Vectơ lực $\\vec{F}$ có thể phân tích thành hai lực thành phần: $\\vec{F}_1$ song song với phương chuyển động và $\\vec{F}_2$ vuông góc với phương chuyển động.",
            isCorrect: true,
            solution: "Theo quy tắc phân tích lực: $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ với $\\vec{F}_1 \\parallel \\vec{s}$ và $\\vec{F}_2 \\perp \\vec{s}$."
          },
          {
            statement: "b) Độ lớn của lực thành phần kéo xe chuyển động $\\vec{F}_1$ là $50\\text{ N}$.",
            isCorrect: true,
            solution: "$F_1 = F \\cdot \\cos 60^\\circ = 100 \\times 0{,}5 = 50\\text{ N}$."
          },
          {
            statement: "c) Lực thành phần $\\vec{F}_2$ sinh công bằng $0\\text{ J}$.",
            isCorrect: true,
            solution: "Vì $\\vec{F}_2$ vuông góc với phương chuyển động nên $\\cos 90^\\circ = 0 \\Rightarrow A_2 = 0\\text{ J}$."
          },
          {
            statement: "d) Tổng công sinh bởi lực $\\vec{F}$ trên quãng đường $50\\text{ m}$ là $5000\\text{ J}$.",
            isCorrect: false,
            solution: "Công $A = F \\cdot s \\cdot \\cos 60^\\circ = 100 \\times 50 \\times 0{,}5 = 2500\\text{ J}$ (chứ không phải $5000\\text{ J}$)."
          }
        ]
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 3: 2 CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN
    // -----------------------------------------------------------------------
    part3ShortAnswer: [
      {
        id: "sa-10-11-1",
        num: 1,
        level: "Thông hiểu",
        prompt: "Trong mặt phẳng toạ độ $Oxy$, cho hai vectơ $\\vec{u} = (3; 4)$ và $\\vec{v} = (8; -6)$. Giá trị của tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng bao nhiêu?",
        correctValue: 0,
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Áp dụng biểu thức toạ độ của tích vô hướng:<br>$$\\vec{u} \\cdot \\vec{v} = x x' + y y' = 3 \\times 8 + 4 \\times (-6) = 24 - 24 = 0.$$<br>&rArr; <strong>Đáp số: 0.</strong>"
      },
      {
        id: "sa-10-11-2",
        num: 2,
        level: "Vận dụng thực tế",
        prompt: "Một kiện hàng được kéo trượt trên sàn phẳng nằm ngang một đoạn đường $s = 20\\text{ m}$ dưới tác dụng của lực kéo $\\vec{F}$ có độ lớn $150\\text{ N}$ hợp với phương chuyển động góc $60^\\circ$. Công sinh bởi lực $\\vec{F}$ bằng bao nhiêu Jun (J)?",
        correctValue: 1500,
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Áp dụng công thức tính công cơ học:<br>$$A = F \\cdot s \\cdot \\cos \\alpha = 150 \\times 20 \\times \\cos 60^\\circ = 3000 \\times 0{,}5 = 1500\\text{ J}.$$<br>&rArr; <strong>Đáp số: 1500.</strong>"
      }
    ]
  }
};
"""

with open("js/lesson-10-11-data.js", "w", encoding="utf-8") as f:
    f.write(data_js)

print("SUCCESS: Written js/lesson-10-11-data.js")
