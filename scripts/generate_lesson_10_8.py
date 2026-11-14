# -*- coding: utf-8 -*-
"""
Script to generate js/lesson-10-8-data.js with standard 4-part architecture.
Author: ThS. Lương Thanh Sáng
"""

import os

content = r'''/**
 * BÀI HỌC SỐ: BÀI 8. TỔNG VÀ HIỆU CỦA HAI VECTƠ (TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - PHẦN I: Lời chào của Thầy Sáng + Nút Voice AI vàng đồng, chỉnh tốc độ
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 51 + Voice AI
 * - PHẦN III: Tiến trình bài học đa phương tiện:
 *             + Tình huống thực tế con tàu vượt sông Tiền & trò chơi kéo co
 *             + Mục 1: Tổng của hai vectơ & Quy tắc 3 điểm, hình bình hành (Hình 4.13 SGK)
 *             + Mục 2: Tính chất của phép cộng vectơ (Hình 4.14 SGK)
 *             + Mục 3: Hiệu của hai vectơ & Vectơ đối (HĐ4, Quy tắc hiệu SGK)
 *             + Mục 4: Tính chất trung điểm, trọng tâm & ứng dụng thực tiễn (Hình 4.15, 4.16, 4.17, 4.18 SGK)
 *             + Checkpoints POI chấm vàng tương tác tự động dừng và bật câu hỏi
 *             + Chốt kiến thức then chốt & Bảng so sánh
 * - PHẦN IV: Bài tập trắc nghiệm củng cố tương tác chuẩn cấu trúc mới Bộ GD&ĐT:
 *             + 5 câu trắc nghiệm 4 lựa chọn (Hoán vị đáp án B, D, A, C, B phong phú)
 *             + 3 câu trắc nghiệm Đúng/Sai (Đủ 4 ý a, b, c, d)
 *             + 2 câu trả lời ngắn thực tế
 *             + Tích hợp "Lời giải chi tiết ThS. Lương Thanh Sáng" & "Bài toán tương tự" đổi số tự động
 */

window.LESSON_10_C4_B8_DATA = {
  id: "10-c4-b8",
  grade: "10",
  gradeLabel: "Lớp 10",
  chapterId: "c10-4",
  chapter: "Chương IV",
  chapterTitle: "Vectơ",
  number: "Bài 8",
  title: "Tổng và hiệu của hai vectơ",
  isFeaturedLesson: true,
  isInteractiveDigitalLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG
  // =========================================================================
  teacherWelcome: {
    greetingText: "Thầy Sáng chào cả lớp 10 yêu quý! Sau khi đã làm quen với các khái niệm mở đầu, hôm nay Thầy trò mình cùng bước sang bài học số 8: Tổng và hiệu của hai vectơ. Đây là bài học trang bị cho các em các phép toán đại số đầu tiên trên các đại lượng hình học có hướng. Các quy tắc cộng trừ vectơ sẽ giúp các em giải quyết những bài toán biến đổi hình học và ứng dụng vật lý vô cùng kì diệu. Nào, Thầy trò mình cùng bắt đầu tiết học với thật nhiều hứng khởi nhé!",
    audioScript: "Thầy Sáng chào cả lớp 10 yêu quý! Sau khi đã làm quen với các khái niệm mở đầu, hôm nay Thầy trò mình cùng bước sang bài học số 8: Tổng và hiệu của hai vectơ. Đây là bài học trang bị cho các em các phép toán đại số đầu tiên trên các đại lượng hình học có hướng. Các quy tắc cộng trừ vectơ sẽ giúp các em giải quyết những bài toán biến đổi hình học và ứng dụng vật lý vô cùng kì diệu. Nào, Thầy trò mình cùng bắt đầu tiết học với thật nhiều hứng khởi nhé!",
    audioUrl: "assets/audio/b10_8_welcome.mp3",
    buttonLabel: "Nghe thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU VÀ YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 51)
  // =========================================================================
  learningGoals: [
    "Thực hiện thành thạo phép cộng và phép trừ vectơ trong hình học.",
    "Nắm vững và vận dụng linh hoạt Quy tắc ba điểm, Quy tắc hình bình hành và Quy tắc hiệu.",
    "Hiểu rõ và sử dụng thành thạo hệ thức trung điểm của đoạn thẳng ($\\vec{IA} + \\vec{IB} = \\vec{0}$) và hệ thức trọng tâm của tam giác ($\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$).",
    "Vận dụng xuất sắc các phép toán vectơ vào giải quyết các bài toán thực tiễn như tổng hợp lực và tổng hợp vận tốc con tàu vượt sông."
  ],
  goalsAudioUrl: "assets/audio/b10_8_goals.mp3",
  goalsAudioScript: "Mục tiêu bài học cần đạt: Sau bài học này, các em cần đạt được bốn mục tiêu trọng tâm: Thứ nhất, thực hiện thành thạo phép cộng và phép trừ vectơ. Thứ hai, nắm vững và vận dụng linh hoạt Quy tắc ba điểm, Quy tắc hình bình hành và Quy tắc hiệu. Thứ ba, hiểu rõ và sử dụng thành thạo hệ thức trung điểm của đoạn thẳng và hệ thức trọng tâm của tam giác. Thứ tư, vận dụng xuất sắc các phép toán vectơ vào giải quyết các bài toán thực tiễn như tổng hợp lực và tổng hợp vận tốc con tàu vượt sông.",
  goalsButtonLabel: "Nghe thầy Sáng phổ biến mục tiêu",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN
  // =========================================================================

  // 1. TÌNH HUỐNG THỰC TẾ MỞ ĐẦU (HOOK - TRANG 51 & 54 SGK)
  hook: {
    title: "Tình huống mở đầu: Chuyển động của con tàu vượt sông Tiền và Lực kéo co cân bằng",
    story: "Một con tàu chuyển động từ bờ bên này sang bờ bên kia của dòng sông với vận tốc riêng không đổi $\\vec{v}_r$. Do dòng nước chảy xiết với vận tốc $\\vec{v}_n$, vận tốc thực tế của con tàu đối với bờ là sự kết hợp của cả hai vận tốc. Nếu không quan tâm đến điểm đến, người lái tàu cần giữ lái cho tàu tạo với bờ sông một góc bao nhiêu để tàu sang bờ bên kia được nhanh nhất? Và trong trò chơi kéo co, khi hai đội giữ sợi dây đứng yên bất phân thắng bại, lực kéo của hai đội tác dụng lên nút thắt giữa dây có mối quan hệ toán học như thế nào? Chúng ta cùng đi tìm câu trả lời ngay sau đây!",
    audioScript: "Bài toán dẫn nhập: Một con tàu chuyển động từ bờ bên này sang bờ bên kia của dòng sông với vận tốc riêng không đổi. Do dòng nước chảy xiết, vận tốc thực tế của con tàu đối với bờ là sự kết hợp của cả hai vận tốc: vận tốc riêng của tàu và vận tốc dòng chảy. Nếu không quan tâm đến điểm đến, người lái tàu cần giữ góc lái bao nhiêu để tàu sang bờ bên kia được nhanh nhất? Và trong trò chơi kéo co, khi hai đội giữ sợi dây đứng yên bất phân thắng bại, lực kéo của hai đội có mối quan hệ toán học như thế nào? Chúng ta cùng đi tìm câu trả lời ngay sau đây.",
    audioUrl: "assets/audio/b10_8_hook.mp3",
    buttonLabel: "Nghe thầy Sáng đặt vấn đề",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    illustrationSvg: `
      <div style="background: linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%); border: 1.5px solid #0284c7; border-radius: 12px; padding: 16px; margin: 15px 0; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.04);">
        <svg viewBox="0 0 740 240" style="width: 100%; max-width: 700px; height: auto; display: block; margin: 0 auto; background: #ffffff; border-radius: 8px;">
          <defs>
            <marker id="arr-boat-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
            </marker>
            <marker id="arr-flow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
            </marker>
            <marker id="arr-result-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/>
            </marker>
          </defs>

          <!-- KHUNG HÌNH 1: CON TÀU VƯỢT SÔNG (HÌNH 4.17) -->
          <g transform="translate(30, 20)">
            <!-- Bờ sông d1 (dưới) và d2 (trên) -->
            <line x1="10" y1="180" x2="360" y2="180" stroke="#047857" stroke-width="4"/>
            <text x="320" y="198" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#047857">Bờ d1</text>
            <line x1="10" y1="40" x2="360" y2="40" stroke="#047857" stroke-width="4"/>
            <text x="320" y="32" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#047857">Bờ d2</text>

            <!-- Làn nước sông Tiền -->
            <rect x="10" y="42" width="350" height="136" fill="#e0f2fe" fill-opacity="0.4"/>
            <text x="20" y="70" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-style="italic" fill="#0284c7">Dòng chảy nước sông</text>

            <!-- Điểm xuất phát A trên bờ d1 -->
            <circle cx="80" cy="180" r="5" fill="#0f172a"/>
            <text x="65" y="198" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#0f172a">A</text>

            <!-- Vectơ vận tốc riêng v_r = AM (hướng xiên) -->
            <line x1="80" y1="180" x2="160" y2="100" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-boat-red)"/>
            <circle cx="160" cy="100" r="4" fill="#dc2626"/>
            <text x="100" y="130" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">\\vec{v}_r</text>
            <text x="165" y="105" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">M</text>

            <!-- Vectơ vận tốc dòng nước v_n = MN (nằm ngang) -->
            <line x1="160" y1="100" x2="260" y2="100" stroke="#0284c7" stroke-width="3" marker-end="url(#arr-flow-blue)"/>
            <circle cx="260" cy="100" r="4" fill="#0284c7"/>
            <text x="200" y="90" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">\\vec{v}_n</text>
            <text x="268" y="105" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">N</text>

            <!-- Vectơ vận tốc thực tế v = AN = AM + MN -->
            <line x1="80" y1="180" x2="255" y2="102" stroke="#16a34a" stroke-width="3.5" marker-end="url(#arr-result-green)"/>
            <text x="145" y="165" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#15803d">\\vec{v} = \\vec{v}_r + \\vec{v}_n</text>
          </g>

          <!-- KHUNG HÌNH 2: TRÒ CHƠI KÉO CO CÂN BẰNG (HĐ4) -->
          <g transform="translate(430, 20)">
            <rect x="20" y="30" width="260" height="160" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="75" y="55" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">Hai lực cân bằng (Kéo co)</text>

            <!-- Sợi dây kéo co -->
            <line x1="40" y1="110" x2="260" y2="110" stroke="#ea580c" stroke-width="4"/>
            <!-- Nút thắt màu đỏ ở giữa -->
            <circle cx="150" cy="110" r="6" fill="#dc2626"/>
            <text x="145" y="130" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">O</text>

            <!-- Lực kéo F1 sang trái -->
            <line x1="150" y1="110" x2="70" y2="110" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-flow-blue)"/>
            <text x="90" y="100" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#2563eb">\\vec{F}_1</text>

            <!-- Lực kéo F2 sang phải -->
            <line x1="150" y1="110" x2="230" y2="110" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-flow-blue)"/>
            <text x="190" y="100" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#2563eb">\\vec{F}_2</text>

            <text x="65" y="165" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\vec{F}_1 + \\vec{F}_2 = \\vec{0} (Đối nhau)</text>
          </g>
        </svg>
      </div>
    `,
    question: "Vận tốc thực tế của con tàu được xác định theo quy tắc hình học nào giữa vectơ vận tốc riêng của tàu và vectơ vận tốc dòng nước?",
    bridge: "Hãy cùng Thầy Sáng bước vào tìm hiểu Phép cộng vectơ và các quy tắc hình học ngay sau đây!"
  },

  // 2. CÁC MỤC LÝ THUYẾT BÀI HỌC (SECTIONS)
  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1. TỔNG CỦA HAI VECTƠ & QUY TẮC BA ĐIỂM, HÌNH BÌNH HÀNH
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "Tổng của hai vectơ và các quy tắc cơ bản",
      audioScript: "Mục một, Tổng của hai vectơ và hai quy tắc cơ bản: Để cộng hai vectơ a và b, từ điểm A tuỳ ý ta dựng vectơ AB bằng a, rồi từ B dựng tiếp vectơ BC bằng b. Khi đó vectơ AC nối từ gốc A đến ngọn C chính là tổng của hai vectơ a và b. Từ đây ta có hai quy tắc vàng: Quy tắc ba điểm, vectơ AB cộng vectơ BC bằng vectơ AC. Và Quy tắc hình bình hành: Nếu ABCD là hình bình hành thì vectơ AB cộng vectơ AD bằng đường chéo vectơ AC.",
      audioUrl: "assets/audio/b10_8_sec1.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-8-sec1-1",
          time: 14,
          title: "Giây 14: Quy tắc ba điểm",
          question: "Với ba điểm bất kì $A, B, C$, kết quả của phép cộng $\\vec{AB} + \\vec{BC}$ bằng:",
          options: [
            "$\\vec{AC}$",
            "$\\vec{CA}$",
            "$\\vec{BA}$",
            "$\\vec{CB}$"
          ],
          correctIndex: 0, // A
          hint: "Điểm B đứng ở giữa nối đuôi: ngọn của vectơ thứ nhất trùng với gốc của vectơ thứ hai.",
          explain: "Chính xác! Theo Quy tắc ba điểm: Với ba điểm bất kì $A, B, C$, ta luôn có $\\vec{AB} + \\vec{BC} = \\vec{AC}$."
        },
        {
          id: "poi-10-8-sec1-2",
          time: 25,
          title: "Giây 25: Quy tắc hình bình hành",
          question: "Nếu $ABCD$ là một hình bình hành thì tổng của hai vectơ chung gốc $\\vec{AB} + \\vec{AD}$ bằng:",
          options: [
            "Đường chéo $\\vec{BD}$",
            "Đường chéo $\\vec{AC}$",
            "Vectơ $\\vec{DC}$",
            "Vectơ $\\vec{0}$"
          ],
          correctIndex: 1, // B
          hint: "Tổng hai cạnh kề của hình bình hành bằng vectơ đường chéo xuất phát từ cùng đỉnh đó.",
          explain: "Rất chuẩn! Theo Quy tắc hình bình hành: Nếu $ABCD$ là hình bình hành thì $\\vec{AB} + \\vec{AD} = \\vec{AC}$."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Định nghĩa tổng hai vectơ, Quy tắc ba điểm và Quy tắc hình bình hành",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Khung kiến thức SGK Toán 10 - Trang 51 & 52]:</div>
              <ul class="sgk-box-list">
                <li>Cho hai vectơ $\\vec{a}, \\vec{b}$. Lấy một điểm $A$ tuỳ ý và vẽ $\\vec{AB} = \\vec{a}, \\vec{BC} = \\vec{b}$. Khi đó vectơ $\\vec{AC}$ được gọi là <strong>tổng của hai vectơ $\\vec{a}$ và $\\vec{b}$</strong>, kí hiệu là $\\vec{a} + \\vec{b}$. Phép lấy tổng của hai vectơ được gọi là <em>phép cộng vectơ</em>.</li>
                <li><strong>Quy tắc ba điểm:</strong> Với ba điểm bất kì $A, B, C$, ta có:
                  <div style="text-align: center; font-size: 1.15rem; font-weight: bold; margin: 6px 0; color: #1d4ed8;">$$\\vec{AB} + \\vec{BC} = \\vec{AC}$$</div>
                </li>
                <li><strong>Quy tắc hình bình hành:</strong> Nếu $ABCD$ là một hình bình hành thì:
                  <div style="text-align: center; font-size: 1.15rem; font-weight: bold; margin: 6px 0; color: #1d4ed8;">$$\\vec{AB} + \\vec{AD} = \\vec{AC}$$</div>
                </li>
              </ul>
            </div>

            <!-- HÌNH MINH HỌA HÌNH 4.13 SGK -->
            <div style="background: #ffffff; border: 1.5px solid #2563eb; border-radius: 12px; padding: 18px; margin: 18px 0; text-align: center;">
              <div style="font-weight: 700; color: #1e40af; font-size: 1.02rem; margin-bottom: 12px;">
                <i class="fa-solid fa-draw-polygon"></i> Hình 4.13 (SGK trang 51): Định nghĩa phép cộng và Quy tắc hình bình hành
              </div>
              <svg viewBox="0 0 680 180" style="width: 100%; max-width: 640px; height: auto; display: block; margin: 0 auto; background: #ffffff;">
                <defs>
                  <marker id="arr-m1-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
                  </marker>
                  <marker id="arr-m1-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
                  </marker>
                </defs>

                <!-- KHUNG TRÁI: QUY TẮC TAM GIÁC (HÌNH 4.13) -->
                <g transform="translate(40, 20)">
                  <polygon points="40,120 160,30 240,120" fill="#f0f9ff" stroke="#bfdbfe" stroke-width="1.5"/>
                  <line x1="40" y1="120" x2="160" y2="30" stroke="#2563eb" stroke-width="2.8" marker-end="url(#arr-m1-blue)"/>
                  <line x1="160" y1="30" x2="240" y2="120" stroke="#2563eb" stroke-width="2.8" marker-end="url(#arr-m1-blue)"/>
                  <line x1="40" y1="120" x2="240" y2="120" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-m1-red)"/>

                  <circle cx="40" cy="120" r="4.5" fill="#0f172a"/>
                  <circle cx="160" cy="30" r="4.5" fill="#0f172a"/>
                  <circle cx="240" cy="120" r="4.5" fill="#0f172a"/>

                  <text x="25" y="130" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">A</text>
                  <text x="160" y="20" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">B</text>
                  <text x="248" y="130" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">C</text>

                  <text x="85" y="65" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#2563eb">\\vec{a}</text>
                  <text x="210" y="65" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#2563eb">\\vec{b}</text>
                  <text x="125" y="145" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">\\vec{a} + \\vec{b} = \\vec{AC}</text>
                  <text x="60" y="165" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Quy tắc ba điểm (nối đuôi)</text>
                </g>

                <!-- KHUNG PHẢI: QUY TẮC HÌNH BÌNH HÀNH -->
                <g transform="translate(370, 20)">
                  <polygon points="30,120 150,30 250,30 130,120" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/>
                  <line x1="30" y1="120" x2="150" y2="30" stroke="#2563eb" stroke-width="2.8" marker-end="url(#arr-m1-blue)"/>
                  <line x1="30" y1="120" x2="130" y2="120" stroke="#2563eb" stroke-width="2.8" marker-end="url(#arr-m1-blue)"/>
                  <line x1="30" y1="120" x2="250" y2="30" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-m1-red)"/>

                  <text x="15" y="130" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">A</text>
                  <text x="145" y="22" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">B</text>
                  <text x="258" y="30" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">C</text>
                  <text x="135" y="138" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">D</text>

                  <text x="70" y="65" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#2563eb">\\vec{AB}</text>
                  <text x="75" y="140" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#2563eb">\\vec{AD}</text>
                  <text x="155" y="90" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">\\vec{AC}</text>
                  <text x="65" y="165" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Quy tắc hình bình hành: \\vec{AB} + \\vec{AD} = \\vec{AC}</text>
                </g>
              </svg>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 1 (SGK trang 52): Tính độ dài tổng vectơ trong hình vuông",
            problem: "Cho hình vuông $ABCD$ với cạnh có độ dài bằng $1$. Tính độ dài của các vectơ $\\vec{u} = \\vec{AB} + \\vec{CB}$ và $\\vec{v} = \\vec{AB} + \\vec{DC} + \\vec{BD}$.",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <ul>
                <li><strong>Tính $|\\vec{u}|$</strong>: Vì $ABCD$ là hình vuông nên $\\vec{AB} = \\vec{DC}$. Thay vào biểu thức ta có:<br>
                  $$\\vec{u} = \\vec{AB} + \\vec{CB} = \\vec{DC} + \\vec{CB} = \\vec{DB} \\text{ (áp dụng quy tắc ba điểm)}.$$
                  Do đó: $|\\vec{u}| = |\\vec{DB}| = DB = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.
                </li>
                <li><strong>Tính $|\\vec{v}|$</strong>: Áp dụng tính chất giao hoán và kết hợp:<br>
                  $$\\vec{v} = (\\vec{AB} + \\vec{BD}) + \\vec{DC} = \\vec{AD} + \\vec{DC} = \\vec{AC}.$$
                  Do đó: $|\\vec{v}| = |\\vec{AC}| = AC = \\sqrt{2}$.
                </li>
              </ul>
            `,
            teacherGuidance: "Khi cộng các vectơ không chung đầu hoặc không nối đuôi, ta luôn tìm một vectơ bằng với một trong các vectơ đó để đưa về quy tắc ba điểm hoặc quy tắc hình bình hành!",
            similarProblem: "Cho hình thoi $ABCD$ có cạnh bằng $1$ và $\\widehat{BAD} = 120^\\circ$. Tính độ dài của các vectơ $\\vec{CB} + \\vec{CD}$ và $\\vec{DB} + \\vec{CD} + \\vec{BA}$."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2. TÍNH CHẤT CỦA PHÉP CỘNG VECTƠ
    // -----------------------------------------------------------------------
    {
      num: "2",
      title: "Tính chất của phép cộng vectơ",
      audioScript: "Mục hai, Tính chất của phép cộng vectơ: Tương tự như phép cộng các số thực, phép cộng vectơ cũng có ba tính chất cơ bản: Thứ nhất là tính chất giao hoán, vectơ a cộng vectơ b bằng vectơ b cộng vectơ a. Thứ hai là tính chất kết hợp, giúp ta cộng ba vectơ mà không cần dùng ngoặc. Thứ ba là tính chất cộng với vectơ không, bất kì vectơ nào cộng với vectơ không đều bằng chính nó.",
      audioUrl: "assets/audio/b10_8_sec2.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-8-sec2-1",
          time: 12,
          title: "Giây 12: Tính chất giao hoán và kết hợp",
          question: "Với ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ tuỳ ý, khẳng định nào sau đây là <strong>sai</strong>?",
          options: [
            "$\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$ (Giao hoán)",
            "$(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$ (Kết hợp)",
            "$\\vec{a} + \\vec{0} = \\vec{a}$",
            "$\\vec{a} + \\vec{b} = \\vec{a} - \\vec{b}$"
          ],
          correctIndex: 3, // D
          hint: "Phép cộng vectơ có đầy đủ tính chất giao hoán, kết hợp và cộng với vectơ không giống số thực.",
          explain: "Chính xác! Đẳng thức D sai hoàn toàn. Các đẳng thức A, B, C là 3 tính chất nền tảng của phép cộng vectơ theo SGK trang 52."
        },
        {
          id: "poi-10-8-sec2-2",
          time: 22,
          title: "Giây 22: Rút gọn biểu thức vectơ",
          question: "Biểu thức $\\vec{AB} + \\vec{BC} + \\vec{CD} + \\vec{DA}$ rút gọn bằng:",
          options: [
            "$2\\vec{AC}$",
            "$\\vec{0}$",
            "$\\vec{BD}$",
            "$4\\vec{AB}$"
          ],
          correctIndex: 1, // B
          hint: "Cộng liên tiếp theo quy tắc ba điểm: (AB + BC) + (CD + DA) = AC + CA = AA = 0.",
          explain: "Rất chuẩn! Áp dụng quy tắc ba điểm liên tiếp: $\\vec{AB} + \\vec{BC} + \\vec{CD} + \\vec{DA} = \\vec{AC} + \\vec{CA} = \\vec{AA} = \\vec{0}$."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Các tính chất cơ bản của phép cộng vectơ (Hình 4.14 SGK)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Khung kiến thức SGK Toán 10 - Trang 52]:</div>
              <p style="margin-bottom: 8px;">Với ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ tuỳ ý, phép cộng vectơ thỏa mãn:</p>
              <ul class="sgk-box-list">
                <li><strong>Tính chất giao hoán:</strong> $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$.</li>
                <li><strong>Tính chất kết hợp:</strong> $(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$.</li>
                <li><strong>Tính chất của vectơ-không:</strong> $\\vec{a} + \\vec{0} = \\vec{0} + \\vec{a} = \\vec{a}$.</li>
              </ul>
              <div style="background: #eff6ff; padding: 10px; border-radius: 6px; margin-top: 8px;">
                <i class="fa-solid fa-circle-info" style="color: #2563eb;"></i> <em>Chú ý:</em> Do có tính chất kết hợp, ta viết $\\vec{a} + \\vec{b} + \\vec{c}$ mà không cần đặt dấu ngoặc.
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 2: Chứng minh đẳng thức vectơ bằng tính chất cộng",
            problem: "Cho bốn điểm phân biệt $A, B, C, D$. Chứng minh rằng:<br>a) $\\vec{AB} + \\vec{CD} = \\vec{AD} + \\vec{CB}$;<br>b) $\\vec{AB} + \\vec{BC} + \\vec{CD} + \\vec{DA} = \\vec{0}$.",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <ul>
                <li><strong>a) Chứng minh $\\vec{AB} + \\vec{CD} = \\vec{AD} + \\vec{CB}$</strong>:<br>
                  Chèn điểm $D$ vào vectơ $\\vec{AB}$ và chèn điểm $B$ vào vectơ $\\vec{CD}$ theo quy tắc ba điểm:<br>
                  $$VT = \\vec{AB} + \\vec{CD} = (\\vec{AD} + \\vec{DB}) + (\\vec{CB} + \\vec{BD}) = \\vec{AD} + \\vec{CB} + (\\vec{DB} + \\vec{BD}).$$<br>
                  Vì $\\vec{DB} + \\vec{BD} = \\vec{DD} = \\vec{0}$, nên $VT = \\vec{AD} + \\vec{CB} = VP$ (đpcm).
                </li>
                <li><strong>b) Chứng minh $\\vec{AB} + \\vec{BC} + \\vec{CD} + \\vec{DA} = \\vec{0}$</strong>:<br>
                  Áp dụng tính chất kết hợp và quy tắc ba điểm:<br>
                  $$VT = (\\vec{AB} + \\vec{BC}) + (\\vec{CD} + \\vec{DA}) = \\vec{AC} + \\vec{CA} = \\vec{AA} = \\vec{0} = VP \\text{ (đpcm)}.$$
                </li>
              </ul>
            `,
            teacherGuidance: "Kĩ thuật chèn điểm bằng quy tắc ba điểm: $\\vec{XY} = \\vec{XZ} + \\vec{ZY}$ là chìa khóa vạn năng để chứng minh mọi đẳng thức vectơ!",
            similarProblem: "Cho 5 điểm $A, B, C, D, E$. Rút gọn tổng sau: $\\vec{AB} + \\vec{BC} + \\vec{CD} + \\vec{DE} + \\vec{EA}$."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3. HIỆU CỦA HAI VECTƠ & VECTƠ ĐỐI
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "Hiệu của hai vectơ và vectơ đối",
      audioScript: "Mục ba, Hiệu của hai vectơ và vectơ đối: Vectơ đối của vectơ a là vectơ có cùng độ dài nhưng ngược hướng với a, kí hiệu là trừ a. Vectơ đối của vectơ không chính là vectơ không. Hiệu của hai vectơ a và b được định nghĩa là a cộng với vectơ đối của b. Để trừ hai vectơ có chung điểm đầu, ta dùng Quy tắc hiệu: vectơ OM trừ vectơ ON bằng vectơ NM, ngọn đứng trước gốc đứng sau.",
      audioUrl: "assets/audio/b10_8_sec3.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-8-sec3-1",
          time: 12,
          title: "Giây 12: Khái niệm vectơ đối",
          question: "Vectơ đối của vectơ $\\vec{AB}$ là:",
          options: [
            "Vectơ $\\vec{BA}$ (kí hiệu là $-\\vec{AB}$)",
            "Vectơ $\\vec{AB}$",
            "Vectơ $\\vec{0}$",
            "Đoạn thẳng $AB$"
          ],
          correctIndex: 0, // A
          hint: "Vectơ đối có cùng độ dài nhưng đảo ngược hướng (điểm đầu thành điểm cuối).",
          explain: "Chính xác! Vectơ đối của $\\vec{AB}$ là $-\\vec{AB} = \\vec{BA}$ vì chúng cùng độ dài và ngược hướng nhau."
        },
        {
          id: "poi-10-8-sec3-2",
          time: 24,
          title: "Giây 24: Quy tắc hiệu chung gốc",
          question: "Với ba điểm bất kì $O, M, N$, hiệu hai vectơ $\\vec{ON} - \\vec{OM}$ bằng:",
          options: [
            "$\\vec{MN}$",
            "$\\vec{NM}$",
            "$\\vec{OM}$",
            "$\\vec{NO}$"
          ],
          correctIndex: 0, // A
          hint: "Quy tắc trừ hai vectơ chung gốc O: ngọn trừ gốc (ON - OM = MN).",
          explain: "Rất chuẩn! Quy tắc hiệu: Với ba điểm $O, M, N$ bất kì, ta luôn có $\\vec{ON} - \\vec{OM} = \\vec{MN}$."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Vectơ đối, phép trừ vectơ và Quy tắc hiệu",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Khung kiến thức SGK Toán 10 - Trang 52 & 53]:</div>
              <ul class="sgk-box-list">
                <li><strong>Vectơ đối:</strong> Vectơ có cùng độ dài và ngược hướng với vectơ $\\vec{a}$ được gọi là <em>vectơ đối</em> của vectơ $\\vec{a}$, kí hiệu là $-\\vec{a}$.
                  <br>Ta có: $\\vec{a} + (-\\vec{a}) = \\vec{0}$. Vectơ đối của $\\vec{0}$ là $\\vec{0}$. Với hai điểm $A, B$: $-\\vec{AB} = \\vec{BA}$.
                </li>
                <li><strong>Phép trừ vectơ:</strong> Vectơ $\\vec{a} + (-\\vec{b})$ được gọi là <strong>hiệu của hai vectơ $\\vec{a}$ và $\\vec{b}$</strong>, kí hiệu là $\\vec{a} - \\vec{b}$. Phép lấy hiệu gọi là <em>phép trừ vectơ</em>.</li>
                <li><strong>Quy tắc hiệu:</strong> Với ba điểm $O, M, N$ bất kì, ta luôn có:
                  <div style="text-align: center; font-size: 1.15rem; font-weight: bold; margin: 6px 0; color: #1d4ed8;">$$\\vec{MN} = \\vec{ON} - \\vec{OM}$$</div>
                </li>
              </ul>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 3 (SGK trang 53): Quy tắc hiệu trong hình bình hành",
            problem: "Cho hình bình hành $ABCD$ và một điểm $O$ bất kì. Chứng minh rằng:<br>$$\\vec{OB} - \\vec{OA} = \\vec{OC} - \\vec{OD}.$$",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <ul>
                <li>Áp dụng quy tắc hiệu cho vế trái:<br>
                  $$VT = \\vec{OB} - \\vec{OA} = \\vec{AB}.$$
                </li>
                <li>Áp dụng quy tắc hiệu cho vế phải:<br>
                  $$VP = \\vec{OC} - \\vec{OD} = \\vec{DC}.$$
                </li>
                <li>Vì $ABCD$ là hình bình hành nên hai cạnh đối $AB$ và $DC$ song song, bằng nhau và cùng hướng từ trái sang phải, suy ra: $\\vec{AB} = \\vec{DC}$.</li>
                <li>Vậy $VT = VP$, suy ra $\\vec{OB} - \\vec{OA} = \\vec{OC} - \\vec{OD}$ (đpcm).</li>
              </ul>
            `,
            teacherGuidance: "Quy tắc hiệu rất hữu hiệu khi ta muốn đưa một vectơ bất kì về hiệu của hai vectơ có chung gốc toạ độ $O$: $\\vec{AB} = \\vec{OB} - \\vec{OA}$.",
            similarProblem: "Cho tam giác $ABC$. Gọi $M$ là một điểm bất kì. Rút gọn biểu thức: $\\vec{MA} - \\vec{MB} + \\vec{BC}$."
          }
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 4. TÍNH CHẤT TRUNG ĐIỂM, TRỌNG TÂM VÀ ỨNG DỤNG THỰC TIỄN
    // -----------------------------------------------------------------------
    {
      num: "4",
      title: "Tính chất trung điểm, trọng tâm và ứng dụng thực tiễn",
      audioScript: "Mục bốn, Tính chất trung điểm, trọng tâm và ứng dụng thực tiễn: Điểm I là trung điểm của đoạn thẳng AB khi và chỉ khi vectơ IA cộng vectơ IB bằng vectơ không. Điểm G là trọng tâm tam giác ABC khi và chỉ khi vectơ GA cộng vectơ GB cộng vectơ GC bằng vectơ không. Trong thực tế, vận tốc thực của con tàu là tổng của hai vectơ vận tốc riêng và vận tốc dòng nước, giúp các kỹ sư tính toán chính xác hướng lái tối ưu nhất.",
      audioUrl: "assets/audio/b10_8_sec4.mp3",
      buttonLabel: "Nghe thầy Sáng giảng bài",
      checkpoints: [
        {
          id: "poi-10-8-sec4-1",
          time: 12,
          title: "Giây 12: Hệ thức trung điểm",
          question: "Điểm $I$ là trung điểm của đoạn thẳng $AB$ khi và chỉ khi:",
          options: [
            "$\\vec{IA} + \\vec{IB} = \\vec{0}$",
            "$\\vec{IA} = \\vec{IB}$",
            "$\\vec{AB} = 2\\vec{IA}$",
            "$\\vec{IA} - \\vec{IB} = \\vec{0}$"
          ],
          correctIndex: 0, // A
          hint: "Hai vectơ IA và IB ngược hướng nhau và có cùng độ dài nên tổng của chúng bằng vectơ không.",
          explain: "Chính xác! Theo định lí SGK trang 53: $I$ là trung điểm của $AB \\iff \\vec{IA} + \\vec{IB} = \\vec{0}$."
        },
        {
          id: "poi-10-8-sec4-2",
          time: 24,
          title: "Giây 24: Hệ thức trọng tâm tam giác",
          question: "Điểm $G$ là trọng tâm của tam giác $ABC$ khi và chỉ khi:",
          options: [
            "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$",
            "$\\vec{GA} = \\vec{GB} = \\vec{GC}$",
            "$\\vec{AB} + \\vec{BC} + \\vec{CA} = \\vec{G}$",
            "$\\vec{GA} + \\vec{GB} = \\vec{GC}$"
          ],
          correctIndex: 0, // A
          hint: "Trọng tâm tam giác là điểm cân bằng của ba đỉnh, tổng ba vectơ từ trọng tâm tới 3 đỉnh bằng vectơ không.",
          explain: "Rất chuẩn! Theo định lí SGK trang 53: $G$ là trọng tâm tam giác $ABC \\iff \\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$."
        }
      ],
      subsections: [
        {
          key: "4a",
          title: "Hệ thức trung điểm, trọng tâm và bài toán con tàu vượt sông (Hình 4.15 - 4.18 SGK)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Khung kiến thức SGK Toán 10 - Trang 53]:</div>
              <ul class="sgk-box-list">
                <li><strong>Tính chất trung điểm:</strong> Điểm $I$ là trung điểm của đoạn thẳng $AB$ khi và chỉ khi:
                  <div style="text-align: center; font-size: 1.15rem; font-weight: bold; margin: 6px 0; color: #1d4ed8;">$$\\vec{IA} + \\vec{IB} = \\vec{0}$$</div>
                </li>
                <li><strong>Tính chất trọng tâm:</strong> Điểm $G$ là trọng tâm của tam giác $ABC$ khi và chỉ khi:
                  <div style="text-align: center; font-size: 1.15rem; font-weight: bold; margin: 6px 0; color: #1d4ed8;">$$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$$</div>
                </li>
              </ul>
            </div>

            <!-- HÌNH MINH HỌA HÌNH 4.15 & 4.16 SGK -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin: 18px 0;">
              <!-- Khung Hình 4.15: Trung điểm -->
              <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 14px; text-align: center;">
                <div style="font-weight: 700; color: #0f172a; font-size: 0.95rem; margin-bottom: 8px;">
                  Hình 4.15: Trung điểm đoạn thẳng
                </div>
                <svg viewBox="0 0 300 80" style="width: 100%; max-width: 280px; height: auto; display: block; margin: 0 auto;">
                  <line x1="30" y1="40" x2="270" y2="40" stroke="#0f172a" stroke-width="2.5"/>
                  <circle cx="30" cy="40" r="4.5" fill="#0f172a"/>
                  <circle cx="150" cy="40" r="5" fill="#dc2626"/>
                  <circle cx="270" cy="40" r="4.5" fill="#0f172a"/>
                  <text x="25" y="65" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#0f172a">A</text>
                  <text x="145" y="65" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">I</text>
                  <text x="265" y="65" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#0f172a">B</text>
                </svg>
                <div style="font-size: 0.85rem; color: #dc2626; font-weight: bold; margin-top: 4px;">$$\\vec{IA} + \\vec{IB} = \\vec{0}$$</div>
              </div>

              <!-- Khung Hình 4.16: Trọng tâm tam giác -->
              <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 14px; text-align: center;">
                <div style="font-weight: 700; color: #0f172a; font-size: 0.95rem; margin-bottom: 8px;">
                  Hình 4.16: Trọng tâm tam giác
                </div>
                <svg viewBox="0 0 300 160" style="width: 100%; max-width: 280px; height: auto; display: block; margin: 0 auto;">
                  <polygon points="150,20 40,130 260,130" fill="#f8fafc" stroke="#64748b" stroke-width="1.8"/>
                  <line x1="150" y1="20" x2="150" y2="130" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
                  <!-- Trọng tâm G: 2/3 trung tuyến -->
                  <circle cx="150" cy="93" r="5" fill="#2563eb"/>
                  <text x="145" y="15" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#0f172a">A</text>
                  <text x="25" y="140" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#0f172a">B</text>
                  <text x="265" y="140" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#0f172a">C</text>
                  <text x="160" y="95" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#2563eb">G</text>
                </svg>
                <div style="font-size: 0.85rem; color: #2563eb; font-weight: bold; margin-top: 4px;">$$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$$</div>
              </div>
            </div>
          `,
          workedExample: {
            title: "Ví dụ 4 (Luyện tập 2 SGK trang 53): Đẳng thức vectơ trong tứ giác",
            problem: "Cho tứ giác $ABCD$. Gọi $M, N$ lần lượt là trung điểm của các cạnh $AB, CD$ và $O$ là trung điểm của đoạn thẳng $MN$. Chứng minh rằng:<br>$$\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} = \\vec{0}.$$",
            solution: `
              <p><strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong></p>
              <ul>
                <li>Vì $M$ là trung điểm của $AB$ nên với điểm $O$ bất kì, ta có: $\\vec{OA} + \\vec{OB} = 2\\vec{OM}$ (hoặc viết $\\vec{OA} + \\vec{OB} = (\\vec{OM} + \\vec{MA}) + (\\vec{OM} + \\vec{MB}) = 2\\vec{OM} + (\\vec{MA} + \\vec{MB}) = 2\\vec{OM}$).</li>
                <li>Tương tự, vì $N$ là trung điểm của $CD$ nên: $\\vec{OC} + \\vec{OD} = 2\\vec{ON}$.</li>
                <li>Cộng hai vế lại ta được:<br>
                  $$\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} = 2\\vec{OM} + 2\\vec{ON} = 2(\\vec{OM} + \\vec{ON}).$$
                </li>
                <li>Mặt khác, $O$ là trung điểm của đoạn thẳng $MN$ nên theo tính chất trung điểm:<br>
                  $$\\vec{OM} + \\vec{ON} = \\vec{0}.$$
                </li>
                <li>Suy ra: $\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} = 2 \\cdot \\vec{0} = \\vec{0}$ (điều phải chứng minh).</li>
              </ul>
            `,
            teacherGuidance: "Hệ thức trung điểm mở rộng: Với điểm O tuỳ ý và I là trung điểm AB, ta luôn có $\\vec{OA} + \\vec{OB} = 2\\vec{OI}$. Đây là công thức biến đổi cực mạnh!",
            similarProblem: "Cho tam giác $ABC$ có trọng tâm $G$. Chứng minh rằng với điểm $M$ tuỳ ý, ta luôn có: $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$."
          }
        }
      ]
    }
  ],

  // 3. CHỐT BÀI HỌC VÀ TỔNG KẾT (WRAPUP)
  realworldWrapup: {
    title: "Chốt bài học & Bảng tổng kết các quy tắc phép toán vectơ",
    audioScript: "Chốt bài học: Như vậy, qua bài học số 8, các em đã làm chủ hai phép toán nền tảng: cộng và trừ vectơ cùng các quy tắc ba điểm, hình bình hành và quy tắc hiệu. Nhớ quy tắc đuôi nối đầu khi cộng liên tiếp, và chung gốc thì ngọn trước gốc sau khi trừ. Nắm chắc các hệ thức trung điểm và trọng tâm, các em đã có công cụ vô cùng sắc bén để chinh phục các bài toán hình học tiếp theo. Thầy chúc các em luôn học giỏi và tự tin đạt điểm mười!",
    audioUrl: "assets/audio/b10_8_wrapup.mp3",
    buttonLabel: "Nghe thầy Sáng tổng kết",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    summaryHtml: `
      <div style="background: linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%); border: 1.5px solid #3b82f6; border-radius: 12px; padding: 18px; margin: 15px 0;">
        <h4 style="color: #1e3a8a; margin-top: 0; font-size: 1.1rem;"><i class="fa-solid fa-graduation-cap"></i> Ghi nhớ cốt lõi của ThS. Lương Thanh Sáng</h4>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.92rem; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
            <thead>
              <tr style="background: #2563eb; color: #ffffff;">
                <th style="padding: 10px; border: 1px solid #bfdbfe; width: 25%;">Quy tắc / Hệ thức</th>
                <th style="padding: 10px; border: 1px solid #bfdbfe; width: 45%;">Công thức toán học</th>
                <th style="padding: 10px; border: 1px solid #bfdbfe; width: 30%;">Mẹo nhớ của Thầy Sáng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Quy tắc ba điểm (Cộng)</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">$$\\vec{AB} + \\vec{BC} = \\vec{AC}$$</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-style: italic;">"Nối đuôi nhau: điểm giữa triệt tiêu"</td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Quy tắc hình bình hành</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">$$\\vec{AB} + \\vec{AD} = \\vec{AC}$$</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-style: italic;">"Chung gốc cộng lại bằng đường chéo"</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Quy tắc hiệu (Trừ)</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">$$\\vec{ON} - \\vec{OM} = \\vec{MN}$$</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-style: italic;">"Chung gốc trừ nhau: ngọn trước gốc sau"</td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Hệ thức trung điểm</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #16a34a;">$$\\vec{IA} + \\vec{IB} = \\vec{0}$$</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-style: italic;">"Hai vectơ đối nhau từ trung điểm"</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e40af;">Hệ thức trọng tâm</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #2563eb;">$$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$$</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0; font-style: italic;">"Tổng ba vectơ từ trọng tâm bằng vectơ không"</td>
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

    // DẠNG 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN (5 CÂU - ĐÁP ÁN HOÁN VỊ B, D, A, C, B)
    part1MultipleChoice: [
      {
        id: "mc-10-8-1",
        num: 1,
        prompt: "Câu 1: Với ba điểm phân biệt bất kì $A, B, C$, đẳng thức nào sau đây luôn luôn <strong>đúng</strong>?",
        options: [
          "$\\vec{AB} + \\vec{AC} = \\vec{BC}$.",
          "$\\vec{AB} + \\vec{BC} = \\vec{AC}$.",
          "$\\vec{BA} + \\vec{BC} = \\vec{AC}$.",
          "$\\vec{AB} - \\vec{AC} = \\vec{BC}$."
        ],
        correctIndex: 1, // Đáp án B
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo Quy tắc ba điểm (SGK Toán 10 trang 52): Với ba điểm bất kì $A, B, C$, ta luôn có $\\vec{AB} + \\vec{BC} = \\vec{AC}$. Do đó đáp án B là hoàn toàn chính xác.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Với ba điểm M, N, P bất kì, tổng \\vec{MN} + \\vec{NP} bằng:",
          options: ["\\vec{MP}", "\\vec{PM}", "\\vec{NM}", "\\vec{0}"],
          correctIndex: 0, // A (\\vec{MP})
          explain: "Theo quy tắc ba điểm: \\vec{MN} + \\vec{NP} = \\vec{MP}."
        }
      },
      {
        id: "mc-10-8-2",
        num: 2,
        prompt: "Câu 2: Cho hình bình hành $ABCD$. Đẳng thức vectơ nào sau đây là <strong>đúng</strong>?",
        options: [
          "$\\vec{AB} + \\vec{AD} = \\vec{BD}$.",
          "$\\vec{AB} + \\vec{BC} = \\vec{CA}$.",
          "$\\vec{BA} + \\vec{BC} = \\vec{AC}$.",
          "$\\vec{AB} + \\vec{AD} = \\vec{AC}$."
        ],
        correctIndex: 3, // Đáp án D
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo Quy tắc hình bình hành (SGK trang 52): Nếu $ABCD$ là hình bình hành thì tổng hai vectơ xuất phát từ cùng đỉnh $A$ dọc theo hai cạnh bên bằng vectơ đường chéo xuất phát từ $A$: $\\vec{AB} + \\vec{AD} = \\vec{AC}$. Đáp án đúng là D.",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cho hình bình hành ABCD. Tổng \\vec{CB} + \\vec{CD} bằng vectơ nào?",
          options: ["\\vec{CA}", "\\vec{BD}", "\\vec{AC}", "\\vec{0}"],
          correctIndex: 0, // A (\\vec{CA})
          explain: "Theo quy tắc hình bình hành xuất phát từ đỉnh C: \\vec{CB} + \\vec{CD} = \\vec{CA}."
        }
      },
      {
        id: "mc-10-8-3",
        num: 3,
        prompt: "Câu 3: Cho đoạn thẳng $AB$ có trung điểm là $I$. Đẳng thức vectơ nào sau đây là <strong>đúng</strong>?",
        options: [
          "$\\vec{IA} + \\vec{IB} = \\vec{0}$.",
          "$\\vec{IA} + \\vec{IB} = \\vec{AB}$.",
          "$\\vec{IA} = \\vec{IB}$.",
          "$\\vec{IA} - \\vec{IB} = \\vec{0}$."
        ],
        correctIndex: 0, // Đáp án A
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vì $I$ là trung điểm của $AB$ nên hai vectơ $\\vec{IA}$ và $\\vec{IB}$ là hai vectơ đối nhau (cùng độ dài $IA = IB$ và ngược hướng nhau). Tổng của hai vectơ đối nhau luôn bằng vectơ-không: $\\vec{IA} + \\vec{IB} = \\vec{0}$. Do đó đáp án A là đúng.",
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Cho I là trung điểm của AB. Tổng \\vec{AI} + \\vec{BI} bằng:",
          options: ["\\vec{0}", "\\vec{AB}", "2\\vec{AB}", "-\\vec{AB}"],
          correctIndex: 0, // A (\\vec{0})
          explain: "\\vec{AI} và \\vec{BI} là hai vectơ đối nhau nên tổng bằng \\vec{0}."
        }
      },
      {
        id: "mc-10-8-4",
        num: 4,
        prompt: "Câu 4: Cho tam giác $ABC$ có trọng tâm $G$. Với điểm $M$ tuỳ ý trong mặt phẳng, khẳng định nào sau đây luôn luôn <strong>đúng</strong>?",
        options: [
          "$\\vec{MA} + \\vec{MB} + \\vec{MC} = \\vec{0}$.",
          "$\\vec{MA} + \\vec{MB} + \\vec{MC} = \\vec{MG}$.",
          "$\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$.",
          "$\\vec{MA} + \\vec{MB} + \\vec{MC} = 2\\vec{MG}$."
        ],
        correctIndex: 2, // Đáp án C
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Chèn điểm $G$ vào từng vectơ vế trái theo quy tắc ba điểm:<br>$$\\vec{MA} + \\vec{MB} + \\vec{MC} = (\\vec{MG} + \\vec{GA}) + (\\vec{MG} + \\vec{GB}) + (\\vec{MG} + \\vec{GC}) = 3\\vec{MG} + (\\vec{GA} + \\vec{GB} + \\vec{GC}).$$<br>Vì $G$ là trọng tâm tam giác $ABC$ nên $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.<br>Suy ra: $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$. Đáp án đúng là C.",
        similarVariation: {
          prompt: "Câu 4 (Tương tự): Cho tam giác ABC trọng tâm G. Tổng \\vec{GA} + \\vec{GB} + \\vec{GC} bằng:",
          options: ["\\vec{0}", "3\\vec{GG}", "\\vec{AB}", "3"],
          correctIndex: 0, // A (\\vec{0})
          explain: "Theo hệ thức trọng tâm tam giác: \\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}."
        }
      },
      {
        id: "mc-10-8-5",
        num: 5,
        prompt: "Câu 5: Cho hình chữ nhật $ABCD$ có $AB = 4\\text{ cm}$ và $AD = 3\\text{ cm}$. Độ dài của vectơ $\\vec{AB} + \\vec{AD}$ bằng:",
        options: [
          "$7\\text{ cm}$.",
          "$5\\text{ cm}$.",
          "$1\\text{ cm}$.",
          "$25\\text{ cm}$."
        ],
        correctIndex: 1, // Đáp án B
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Áp dụng quy tắc hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.<br>Độ dài của tổng vectơ bằng độ dài đường chéo $AC$.<br>Trong tam giác vuông $ABC$ vuông tại $B$, áp dụng định lí Pythagore:<br>$$AC = \\sqrt{AB^2 + BC^2} = \\sqrt{AB^2 + AD^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = 5\\text{ cm}.$$<br>Vậy $|\\vec{AB} + \\vec{AD}| = 5\\text{ cm}$. Đáp án đúng là B.",
        similarVariation: {
          prompt: "Câu 5 (Tương tự): Cho hình chữ nhật ABCD có AB = 6 cm, AD = 8 cm. Độ dài vectơ \\vec{AB} + \\vec{AD} bằng:",
          options: ["14 cm", "10 cm", "2 cm", "48 cm"],
          correctIndex: 1, // B (10 cm)
          explain: "Độ dài bằng AC = sqrt(6^2 + 8^2) = 10 cm."
        }
      }
    ],

    // DẠNG 2: TRẮC NGHIỆM ĐÚNG/SAI (3 CÂU - MỖI CÂU 4 Ý a, b, c, d)
    part2TrueFalse: [
      {
        id: "tf-10-8-1",
        num: 1,
        prompt: "Câu 1: Xét tính Đúng/Sai của các đẳng thức vectơ sau đây:",
        items: [
          {
            key: "a",
            statement: "Với ba điểm bất kì $A, B, C$, ta luôn có $\\vec{AB} + \\vec{BC} = \\vec{AC}$.",
            isCorrect: true,
            explain: "Đúng theo Quy tắc ba điểm."
          },
          {
            key: "b",
            statement: "Với ba điểm bất kì $O, A, B$, ta luôn có $\\vec{OA} - \\vec{OB} = \\vec{AB}$.",
            isCorrect: false,
            explain: "Sai. Quy tắc hiệu quy định: $\\vec{OA} - \\vec{OB} = \\vec{BA}$ (ngọn đứng trước gốc đứng sau)."
          },
          {
            key: "c",
            statement: "Với ba điểm bất kì $A, B, C$, ta luôn có $\\vec{AB} + \\vec{CA} = \\vec{CB}$.",
            isCorrect: true,
            explain: "Đúng. Áp dụng tính chất giao hoán: $\\vec{AB} + \\vec{CA} = \\vec{CA} + \\vec{AB} = \\vec{CB}$."
          },
          {
            key: "d",
            statement: "Với bốn điểm bất kì $A, B, C, D$, ta luôn có $\\vec{AB} + \\vec{BC} + \\vec{CD} + \\vec{DA} = \\vec{0}$.",
            isCorrect: true,
            explain: "Đúng. Tổng nối tiếp: $(\\vec{AB} + \\vec{BC}) + (\\vec{CD} + \\vec{DA}) = \\vec{AC} + \\vec{CA} = \\vec{AA} = \\vec{0}$."
          }
        ],
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Đẳng thức \\vec{MN} - \\vec{MP} = \\vec{PN} là Đúng hay Sai?",
          items: [
            { key: "a", statement: "\\vec{MN} - \\vec{MP} = \\vec{PN}", isCorrect: true, explain: "Đúng theo quy tắc hiệu chung gốc M." }
          ]
        }
      },
      {
        id: "tf-10-8-2",
        num: 2,
        prompt: "Câu 2: Cho tam giác đều $ABC$ có cạnh bằng $a$. Xét tính Đúng/Sai của các khẳng định sau:",
        items: [
          {
            key: "a",
            statement: "Độ dài của vectơ tổng $|\\vec{AB} + \\vec{AC}|$ bằng $a\\sqrt{3}$.",
            isCorrect: true,
            explain: "Đúng. Dựng hình thoi $ABDC$, ta có $\\vec{AB} + \\vec{AC} = \\vec{AD}$. Độ dài đường chéo chính hình thoi góc $60^\\circ$ là $AD = 2 \\cdot \\dfrac{a\\sqrt{3}}{2} = a\\sqrt{3}$."
          },
          {
            key: "b",
            statement: "Độ dài của vectơ hiệu $|\\vec{AB} - \\vec{AC}|$ bằng $a$.",
            isCorrect: true,
            explain: "Đúng. Theo quy tắc hiệu: $\\vec{AB} - \\vec{AC} = \\vec{CB} \\implies |\\vec{CB}| = CB = a$."
          },
          {
            key: "c",
            statement: "Hai vectơ $\\vec{AB} + \\vec{AC}$ và $\\vec{AB} - \\vec{AC}$ là hai vectơ cùng phương.",
            isCorrect: false,
            explain: "Sai. Dựng hình thoi $ABDC$, $\\vec{AB} + \\vec{AC} = \\vec{AD}$ và $\\vec{AB} - \\vec{AC} = \\vec{CB}$. Trong hình thoi, hai đường chéo $AD$ và $BC$ vuông góc với nhau, do đó hai vectơ này vuông góc chứ không cùng phương."
          },
          {
            key: "d",
            statement: "Nếu $G$ là trọng tâm tam giác $ABC$ thì $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.",
            isCorrect: true,
            explain: "Đúng theo hệ thức trọng tâm tam giác."
          }
        ],
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cho tam giác ABC đều cạnh 2a. Độ dài vectơ hiệu \\vec{AB} - \\vec{AC} bằng:",
          items: [
            { key: "a", statement: "|\\vec{AB} - \\vec{AC}| = 2a", isCorrect: true, explain: "Đúng, bằng BC = 2a." }
          ]
        }
      },
      {
        id: "tf-10-8-3",
        num: 3,
        prompt: "Câu 3: Xét các khẳng định sau về tổng hợp lực trong Vật lý:",
        items: [
          {
            key: "a",
            statement: "Vectơ đối của vectơ lực $\\vec{F}$ là một vectơ có cùng độ lớn nhưng ngược hướng với $\\vec{F}$.",
            isCorrect: true,
            explain: "Đúng theo định nghĩa vectơ đối."
          },
          {
            key: "b",
            statement: "Nếu hai lực $\\vec{F}_1$ và $\\vec{F}_2$ cùng tác dụng vào một chất điểm làm chất điểm ở trạng thái cân bằng thì $\\vec{F}_1 + \\vec{F}_2 = \\vec{0}$.",
            isCorrect: true,
            explain: "Đúng theo định luật I Niu-tơn và điều kiện cân bằng lực."
          },
          {
            key: "c",
            statement: "Nếu hai lực vuông góc nhau có độ lớn lần lượt là $3\\text{ N}$ và $4\\text{ N}$ thì hợp lực có độ lớn bằng $7\\text{ N}$.",
            isCorrect: false,
            explain: "Sai. Khi hai lực vuông góc nhau, hợp lực là đường chéo hình chữ nhật: $F = \\sqrt{F_1^2 + F_2^2} = \\sqrt{3^2 + 4^2} = 5\\text{ N}$, không phải $7\\text{ N}$."
          },
          {
            key: "d",
            statement: "Độ lớn của hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ luôn thỏa mãn bất đẳng thức: $|F_1 - F_2| \\le |\\vec{F}| \\le F_1 + F_2$.",
            isCorrect: true,
            explain: "Đúng theo bất đẳng thức tam giác đối với độ dài vectơ."
          }
        ],
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Hai lực cùng phương cùng hướng có F1 = 5 N, F2 = 12 N. Độ lớn hợp lực bằng bao nhiêu N?",
          items: [
            { key: "a", statement: "Hợp lực bằng 17 N", isCorrect: true, explain: "Đúng, cùng hướng nên F = 5 + 12 = 17 N." }
          ]
        }
      }
    ],

    // DẠNG 3: CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN (2 CÂU TOÁN THỰC TẾ)
    part3ShortAnswer: [
      {
        id: "sa-10-8-1",
        num: 1,
        prompt: "Câu 1: Hai lực $\\vec{F}_1$ và $\\vec{F}_2$ có cùng điểm đặt $O$, vuông góc với nhau và có độ lớn lần lượt là $60\\text{ N}$ và $80\\text{ N}$. Tính độ lớn của hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ tác dụng lên vật theo đơn vị Newton.",
        correctAnswer: "100",
        acceptedAnswers: ["100", "100N", "100 N"],
        unit: "N",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vì hai lực $\\vec{F}_1$ và $\\vec{F}_2$ vuông góc với nhau nên hình bình hành lực là một hình chữ nhật.<br>Áp dụng định lí Pythagore:<br>$$|\\vec{F}| = \\sqrt{|\\vec{F}_1|^2 + |\\vec{F}_2|^2} = \\sqrt{60^2 + 80^2} = \\sqrt{3600 + 6400} = \\sqrt{10000} = 100\\text{ N}.$$",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Hai lực vuông góc nhau có độ lớn 9 N và 12 N. Tính độ lớn hợp lực theo N.",
          correctAnswer: "15",
          acceptedAnswers: ["15", "15N"],
          unit: "N",
          explain: "Hợp lực F = sqrt(9^2 + 12^2) = 15 N."
        }
      },
      {
        id: "sa-10-8-2",
        num: 2,
        prompt: "Câu 2: Cho hình thoi $ABCD$ có cạnh bằng $10\\text{ cm}$ và góc $\\widehat{BAD} = 120^\\circ$. Tính độ dài của vectơ $\\vec{AB} + \\vec{AD}$ theo đơn vị centimét.",
        correctAnswer: "10",
        acceptedAnswers: ["10", "10cm", "10 cm"],
        unit: "cm",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Áp dụng quy tắc hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.<br>Trong hình thoi $ABCD$ có $\\widehat{BAD} = 120^\\circ$, suy ra tam giác $ABC$ có $AB = BC = 10\\text{ cm}$ và góc $\\widehat{B} = 180^\\circ - 120^\\circ = 60^\\circ$.<br>Do đó tam giác $ABC$ là tam giác đều cạnh $10\\text{ cm}$.<br>Suy ra độ dài đường chéo $AC = 10\\text{ cm}$.<br>Vậy $|\\vec{AB} + \\vec{AD}| = |\\vec{AC}| = 10\\text{ cm}$.",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cho hình thoi ABCD cạnh 15 cm có góc BAD = 120 độ. Tính độ dài vectơ \\vec{AB} + \\vec{AD} theo cm.",
          correctAnswer: "15",
          acceptedAnswers: ["15", "15cm"],
          unit: "cm",
          explain: "Tam giác ABC đều nên AC = 15 cm -> |\\vec{AB} + \\vec{AD}| = 15 cm."
        }
      }
    ]
  }
};

// Đồng bộ biến toàn cục
if (typeof window !== "undefined") {
  window.LESSON_10_8_DATA = window.LESSON_10_C4_B8_DATA;
}
'''

with open("js/lesson-10-8-data.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated js/lesson-10-8-data.js successfully! Size: {os.path.getsize('js/lesson-10-8-data.js')} bytes")
