# -*- coding: utf-8 -*-
"""
Generate complete data for Grade 10 Lesson 3:
BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN (SGK Kết nối tri thức trang 22-25)
Author: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)
"""

content = """/**
 * BÀI HỌC SỐ: BÀI 3. BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN (TOÁN 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * 
 * Biên soạn & Chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Chuẩn cấu trúc 4 phần sư phạm số hiện đại:
 * - PHẦN I: Lời chào Thầy Sáng + Voice AI NamMinhNeural vàng đồng
 * - PHẦN II: Mục tiêu & Yêu cầu cần đạt chuẩn SGK trang 22 + Voice AI
 * - PHẦN III: Tiến trình bài học đa phương tiện:
 *             + Tình huống thực tế rạp chiếu phim hoạt hình 1-6
 *             + Mục 1: Khái niệm bất phương trình bậc nhất hai ẩn & nghiệm
 *             + Mục 2: Biểu diễn miền nghiệm trên mặt phẳng toạ độ (Hình 2.1, 2.2, 2.3)
 *             + Mục 3: Vận dụng mô hình hóa thực tiễn (Hình 2.4 - Tam giác OAB)
 *             + Checkpoints POI chấm vàng tương tác tự động dừng và bật câu hỏi
 *             + Chốt kiến thức then chốt & Sơ đồ tư duy
 * - PHẦN IV: Hệ thống bài tập củng cố tương tác chuẩn cấu trúc mới Bộ GD&ĐT:
 *             + 5 câu trắc nghiệm 4 lựa chọn (Hoán vị đáp án C, A, D, B, C phong phú)
 *             + 3 câu trắc nghiệm Đúng/Sai (Đủ 4 ý a, b, c, d)
 *             + 2 câu trả lời ngắn thực tế
 *             + Tích hợp "Lời giải chi tiết ThS. Lương Thanh Sáng" & "Bài toán tương tự" đổi số tự động
 */

window.LESSON_10_C2_B3_DATA = {
  id: "10-c2-b3",
  grade: "10",
  gradeLabel: "Lớp 10",
  chapterId: "c10-2",
  chapter: "Chương II",
  chapterTitle: "Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
  number: "Bài 3",
  title: "Bất phương trình bậc nhất hai ẩn",
  isInteractiveDigitalLesson: true,
  isFeaturedLesson: true,

  // =========================================================================
  // PHẦN I. LỜI CHÀO MỞ ĐẦU & GIỌNG ĐỌC AI (THẦY SÁNG)
  // =========================================================================
  greetingText: "Thầy Sáng thân ái chào toàn thể các em học sinh Lớp 10! Chào mừng các em đến với Bài học số 3: Bất phương trình bậc nhất hai ẩn thuộc Chương 2. Đây là bài học nền tảng tuyệt đẹp kết nối giữa phương trình đại số và hình học toạ độ phẳng, mở ra cánh cửa giải quyết các bài toán tối ưu hoá kinh tế và đời sống thực tế.",
  voiceLabel: "Giọng đọc AI Thầy Sáng",
  audioUrl: "assets/audio/b10_3_welcome.mp3",
  buttonLabel: "Nghe Thầy Sáng giảng bài",
  teacherWelcome: {
    avatar: "assets/images/teacher_avatar.png",
    name: "ThS. Lương Thanh Sáng",
    title: "Giáo viên Toán - THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang",
    quote: "Toán học không chỉ nằm trong trang sách, mà hiển hiện sinh động trong từng bài toán kinh doanh, tính tiền cước hay lập kế hoạch tài chính của cuộc sống."
  },

  // =========================================================================
  // PHẦN II. MỤC TIÊU & YÊU CẦU CẦN ĐẠT (CHUẨN SGK TRANG 22)
  // =========================================================================
  learningGoals: [
    {
      icon: "fa-solid fa-shapes",
      title: "Nhận biết bất phương trình bậc nhất hai ẩn",
      desc: "Nhận diện đúng dạng tổng quát $ax + by \\le c$ ($<, \\ge, >$) với $a, b$ không đồng thời bằng 0; phân biệt được với biểu thức bậc hai hoặc tích $xy$."
    },
    {
      icon: "fa-solid fa-check-double",
      title: "Khái niệm nghiệm và cặp số nghiệm",
      desc: "Hiểu bản chất cặp số $(x_0; y_0)$ là nghiệm khi thay vào cho bất đẳng thức đúng; nhận thức rõ bất phương trình bậc nhất hai ẩn luôn có vô số nghiệm."
    },
    {
      icon: "fa-solid fa-draw-polygon",
      title: "Biểu diễn miền nghiệm trên mặt phẳng toạ độ",
      desc: "Thành thạo phương pháp 4 bước: vẽ đường thẳng bờ $d: ax + by = c$, chọn điểm thử $M_0$ (thường là gốc $O$), xác định miền nghiệm và phân biệt quy tắc bờ nét liền vs nét đứt."
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Vận dụng giải bài toán kinh tế - xã hội",
      desc: "Mô hình hoá và giải quyết các tình huống thực tiễn như tính toán bù lỗ rạp chiếu phim, hạn mức cước viễn thông, bài toán thuê xe du lịch."
    }
  ],
  goalsAudioUrl: "assets/audio/b10_3_goals.mp3",
  goalsButtonLabel: "Nghe mục tiêu bài học",
  goalsAudioScript: "Mục tiêu trọng tâm của bài học: Sau khi hoàn thành bài học này, các em cần đạt được bốn yêu cầu sau: Thứ nhất, nhận biết chính xác bất phương trình bậc nhất hai ẩn và viết đúng dạng tổng quát. Thứ hai, hiểu rõ khái niệm nghiệm và chỉ ra được các nghiệm của bất phương trình. Thứ ba, nắm vững phương pháp biểu diễn miền nghiệm trên mặt phẳng toạ độ Ô ích y, phân biệt bờ nét liền và bờ nét đứt. Thứ tư, vận dụng thành thạo vào giải quyết các bài toán kinh tế thực tế.",

  // =========================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN
  // =========================================================================
  hook: {
    title: "Tình huống mở đầu: Doanh thu rạp chiếu phim nhân ngày 1-6",
    story: `Nhân ngày Quốc tế Thiếu nhi 1-6, một rạp chiếu phim phục vụ khán giả một bộ phim hoạt hình đặc sắc. Vé được bán ra gồm hai loại:
    <div style="margin: 10px 0; padding: 10px 14px; background: #f8fafc; border-left: 4px solid #0284c7; border-radius: 4px;">
      • <strong>Vé loại 1</strong> (trẻ em từ 6 đến 13 tuổi): <strong>$50\\,000$ đồng/vé</strong>.<br>
      • <strong>Vé loại 2</strong> (người trên 13 tuổi): <strong>$100\\,000$ đồng/vé</strong>.
    </div>
    Ban quản lý tính toán rằng: Để không phải bù lỗ thì số tiền vé thu được ở rạp chiếu phim này phải đạt tối thiểu <strong>20 triệu đồng</strong>.<br>
    <em>Câu hỏi đặt ra:</em> Gọi $x$ và $y$ lần lượt là số lượng vé loại 1 và loại 2 bán được. Trong những trường hợp nào của cặp số $(x; y)$ thì rạp chiếu phim phải bù lỗ? Khi nào rạp đạt điểm hoà vốn hoặc bắt đầu có lãi?`,
    audioUrl: "assets/audio/b10_3_hook.mp3",
    bridge: "Mối liên hệ giữa số vé $x$ và $y$ tạo nên một bất phương trình bậc nhất hai ẩn. Chúng ta cùng khám phá định nghĩa toán học chính xác ngay sau đây."
  },

  sections: [
    // -----------------------------------------------------------------------
    // MỤC 1. KHÁI NIỆM BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN
    // -----------------------------------------------------------------------
    {
      num: "1",
      title: "Khái niệm bất phương trình bậc nhất hai ẩn",
      audioScript: "Mục một, Khái niệm bất phương trình bậc nhất hai ẩn: Bất phương trình bậc nhất hai ẩn x và y có dạng tổng quát là a nhân x cộng b nhân y bé hơn hoặc bằng c, hoặc lớn hơn hoặc bằng c, bé hơn c, lớn hơn c. Trong đó a, b, c là các số thực đã cho, với a và b không đồng thời bằng không. Mỗi cặp số x0, y0 thoả mãn bất đẳng thức được gọi là một nghiệm. Các em chú ý: một bất phương trình bậc nhất hai ẩn luôn có vô số nghiệm trên tập số thực.",
      audioUrl: "assets/audio/b10_3_sec1.mp3",
      buttonLabel: "Nghe Thầy Sáng giảng Mục 1",
      checkpoints: [
        {
          id: "poi-10-3-sec1-1",
          time: 12,
          title: "Giây 12: Nhận biết dạng bất phương trình",
          question: "Trong các bất phương trình sau, bất phương trình nào là bất phương trình bậc nhất hai ẩn?",
          options: [
            "$2x^2 + 3y < 1$",
            "$2x + 3y < 1$",
            "$xy + 2x \\ge 4$",
            "$x + y + z \\le 10$"
          ],
          correctIndex: 1, // B
          hint: "Bất phương trình bậc nhất hai ẩn chỉ chứa bậc 1 của x và y, không chứa số mũ bậc 2 hay tích x nhân y.",
          explain: "Chính xác! $2x + 3y < 1$ có dạng $ax + by < c$ với $a = 2, b = 3, c = 1$. Các biểu thức còn lại chứa $x^2$, tích $xy$ hoặc có 3 ẩn $x, y, z$ nên không thoả mãn."
        },
        {
          id: "poi-10-3-sec1-2",
          time: 24,
          title: "Giây 24: Kiểm tra cặp nghiệm",
          question: "Cho bất phương trình $x + 2y > 5$. Cặp số $(x; y)$ nào sau đây là một nghiệm của bất phương trình?",
          options: [
            "$(0; -1)$",
            "$(1; 1)$",
            "$(3; 4)$",
            "$(5; 0)$"
          ],
          correctIndex: 2, // C
          hint: "Thay toạ độ từng cặp số vào vế trái và so sánh với 5.",
          explain: "Rất chuẩn! Thay $(3; 4)$ vào vế trái: $3 + 2(4) = 11 > 5$ (đúng). Các cặp còn lại cho kết quả $\\le 5$ nên không phải là nghiệm."
        }
      ],
      subsections: [
        {
          key: "1a",
          title: "Dạng tổng quát của bất phương trình bậc nhất hai ẩn",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-bookmark"></i> [Định nghĩa SGK Kết nối tri thức - Trang 23]:</div>
              <p style="margin-bottom: 8px;"><strong>Bất phương trình bậc nhất hai ẩn</strong> $x, y$ có dạng tổng quát là:</p>
              <div style="text-align: center; font-size: 1.15rem; font-weight: bold; color: #1e3a8a; margin: 10px 0; padding: 8px; background: #f0fdf4; border-radius: 6px; border: 1px dashed #16a34a;">
                $$ax + by \\le c \\quad (ax + by \\ge c, \\; ax + by < c, \\; ax + by > c)$$
              </div>
              <p>trong đó $a, b, c$ là những số thực đã cho, $a$ và $b$ không đồng thời bằng 0 ($a^2 + b^2 \\ne 0$), $x$ và $y$ là các ẩn số.</p>
            </div>

            <div class="example-box" style="margin-top: 14px;">
              <div class="example-title"><i class="fa-solid fa-pen-to-square"></i> Ví dụ 1 (SGK trang 23): Nhận biết bất phương trình bậc nhất hai ẩn</div>
              <p>Xét hai bất phương trình sau:</p>
              <ul>
                <li>$2x + 3y < 1$: là bất phương trình bậc nhất hai ẩn (với $a = 2, b = 3, c = 1$).</li>
                <li>$2x^2 + 3y < 1$: không phải là bất phương trình bậc nhất hai ẩn vì có chứa $x^2$ (bậc hai đối với $x$).</li>
              </ul>
            </div>
          `
        },
        {
          key: "1b",
          title: "Nghiệm của bất phương trình bậc nhất hai ẩn",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-circle-check"></i> [Khái niệm nghiệm SGK trang 23]:</div>
              <p>Mỗi cặp số $(x_0; y_0)$ được gọi là một <strong>nghiệm</strong> của bất phương trình bậc nhất hai ẩn $ax + by \\le c$ nếu bất đẳng thức số:</p>
              <div style="text-align: center; font-size: 1.08rem; color: #0284c7; margin: 8px 0; font-weight: bold;">
                $$ax_0 + by_0 \\le c \\quad \\text{là một bất đẳng thức đúng.}$$
              </div>
            </div>

            <div class="tip-box" style="margin-top: 12px; background: #fffbeb; border: 1.5px solid #f59e0b; border-radius: 8px; padding: 12px 16px;">
              <strong style="color: #b45309;"><i class="fa-solid fa-lightbulb"></i> Nhận xét quan trọng của Thầy Sáng:</strong>
              <p style="margin-top: 6px; color: #78350f;">
                Khác với phương trình bậc nhất một ẩn (chỉ có duy nhất 1 nghiệm), một bất phương trình bậc nhất hai ẩn <strong>luôn có vô số nghiệm</strong>. Tập hợp tất cả các điểm $(x_0; y_0)$ thoả mãn được biểu diễn hình học thành một <em>nửa mặt phẳng</em> trong hệ toạ độ $Oxy$.
              </p>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2. BIỂU DIỄN MIỀN NGHIỆM TRÊN MẶT PHẲNG TOẠ ĐỘ
    // -----------------------------------------------------------------------
    {
      num: "2",
      title: "Biểu diễn miền nghiệm của bất phương trình bậc nhất hai ẩn trên mặt phẳng toạ độ",
      audioScript: "Mục hai, Biểu diễn miền nghiệm trên mặt phẳng toạ độ: Đường thẳng d có phương trình a x cộng b y bằng c chia mặt phẳng toạ độ thành hai nửa mặt phẳng bờ d. Để xác định miền nghiệm, ta thực hiện bốn bước: Bước một, vẽ đường thẳng d. Bước hai, lấy một điểm kiểm tra M không thuộc d, thông thường là gốc toạ độ O nếu c khác không. Bước ba, thay toạ độ điểm M vào biểu thức để so sánh. Bước bốn, kết luận và gạch bỏ phần mặt phẳng không phải là nghiệm. Đặc biệt lưu ý: nếu bất phương trình có dấu ngặt bé hơn hoặc lớn hơn thì bờ d được vẽ bằng nét đứt.",
      audioUrl: "assets/audio/b10_3_sec2.mp3",
      buttonLabel: "Nghe Thầy Sáng giảng Mục 2",
      checkpoints: [
        {
          id: "poi-10-3-sec2-1",
          time: 14,
          title: "Giây 14: Điểm thử nghiệm tối ưu",
          question: "Khi biểu diễn miền nghiệm của bất phương trình $2x - 3y \\le 6$, điểm thử nghiệm nào tiện lợi nhất để kiểm tra?",
          options: [
            "Điểm $A(3; 0)$ nằm trên đường thẳng bờ",
            "Gốc toạ độ $O(0; 0)$",
            "Điểm $B(100; 100)$",
            "Điểm $C(0; -2)$ nằm trên trục tung"
          ],
          correctIndex: 1, // B
          hint: "Khi đường thẳng không đi qua gốc toạ độ, thay x = 0, y = 0 vào tính toán là nhanh nhất.",
          explain: "Chính xác! Vì đường thẳng $2x - 3y = 6$ không đi qua gốc toạ độ $O(0; 0)$, việc thay $x=0, y=0$ cho kết quả $0 \\le 6$ (đúng) cực kì nhanh chóng và không sợ nhầm lẫn."
        },
        {
          id: "poi-10-3-sec2-2",
          time: 28,
          title: "Giây 28: Quy tắc vẽ đường thẳng bờ",
          question: "Khi biểu diễn miền nghiệm của bất phương trình ngặt $x + y > 100$, đường thẳng bờ $d: x + y = 100$ được thể hiện như thế nào?",
          options: [
            "Vẽ bằng nét liền đậm và thuộc miền nghiệm",
            "Vẽ bằng nét đứt và không thuộc miền nghiệm",
            "Không cần vẽ đường thẳng bờ",
            "Vẽ bằng đường cong lượn sóng"
          ],
          correctIndex: 1, // B
          hint: "Bất phương trình ngặt không có dấu bằng (>) thì các điểm trên bờ không phải là nghiệm.",
          explain: "Rất chuẩn! SGK trang 24 quy ước rõ: Miền nghiệm của bất phương trình ngặt $ax + by < c$ hoặc $ax + by > c$ không kể bờ $d$, và đường thẳng bờ $d$ được biểu diễn bằng nét đứt."
        }
      ],
      subsections: [
        {
          key: "2a",
          title: "Đường thẳng bờ và hai nửa mặt phẳng (Hình 2.1 SGK)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-shapes"></i> [Tính chất hình học không gian phẳng SGK trang 24]:</div>
              <p>Người ta chứng minh được rằng đường thẳng $d: ax + by = c$ chia mặt phẳng toạ độ $Oxy$ thành hai nửa mặt phẳng đối nhau bờ $d$:</p>
              <ul class="sgk-box-list">
                <li>Một nửa mặt phẳng (không kể bờ $d$) gồm các điểm $(x; y)$ thoả mãn $ax + by > c$.</li>
                <li>Nửa mặt phẳng còn lại (không kể bờ $d$) gồm các điểm $(x; y)$ thoả mãn $ax + by < c$.</li>
                <li>Bờ $d$ gồm các điểm $(x; y)$ thoả mãn phương trình đường thẳng $ax + by = c$.</li>
              </ul>
            </div>

            <!-- HÌNH 2.1 SVG CHUẨN TIKZ HIỆN ĐẠI -->
            <div style="background: #ffffff; border: 1.5px solid #0284c7; border-radius: 12px; padding: 18px; margin: 18px 0; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.08); text-align: center;">
              <div style="font-weight: 700; color: #0369a1; font-size: 1.02rem; margin-bottom: 12px;">
                <i class="fa-solid fa-chart-line"></i> Hình 2.1: Đường thẳng $d: 2x - y = 4$ chia mặt phẳng $Oxy$ thành hai nửa mặt phẳng
              </div>

              <svg viewBox="0 0 520 340" style="width: 100%; max-width: 480px; height: auto; display: block; margin: 0 auto; background: #ffffff;">
                <defs>
                  <marker id="arrow10_3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/>
                  </marker>
                </defs>

                <!-- Lưới toạ độ mờ -->
                <path d="M 60,60 H 460 M 60,110 H 460 M 60,160 H 460 M 60,210 H 460 M 60,260 H 460 M 60,310 H 460" stroke="#f1f5f9" stroke-width="1"/>
                <path d="M 110,30 V 320 M 160,30 V 320 M 210,30 V 320 M 260,30 V 320 M 310,30 V 320 M 360,30 V 320 M 410,30 V 320" stroke="#f1f5f9" stroke-width="1"/>

                <!-- Trục toạ độ Oxy: Gốc O tại (210, 160) -> 1 đv = 50px -->
                <!-- Trục Ox -->
                <line x1="40" y1="160" x2="480" y2="160" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow10_3)"/>
                <text x="475" y="180" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-style="italic" font-weight="bold" fill="#1e293b">x</text>

                <!-- Trục Oy -->
                <line x1="210" y1="320" x2="210" y2="20" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow10_3)"/>
                <text x="195" y="24" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-style="italic" font-weight="bold" fill="#1e293b">y</text>

                <!-- Gốc toạ độ O -->
                <text x="192" y="178" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#1e293b">O</text>

                <!-- Các vạch số trên trục -->
                <!-- Ox: 1 -> (260,160), 2 -> (310,160), 3 -> (360,160), 4 -> (410,160), -1 -> (160,160), -2 -> (110,160) -->
                <line x1="260" y1="157" x2="260" y2="163" stroke="#1e293b" stroke-width="1.5"/>
                <text x="257" y="176" font-family="'Segoe UI', sans-serif" font-size="13" fill="#64748b">1</text>
                <line x1="310" y1="157" x2="310" y2="163" stroke="#1e293b" stroke-width="1.5"/>
                <text x="307" y="176" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#1e293b">2</text>
                <line x1="360" y1="157" x2="360" y2="163" stroke="#1e293b" stroke-width="1.5"/>
                <text x="357" y="176" font-family="'Segoe UI', sans-serif" font-size="13" fill="#64748b">3</text>
                <line x1="410" y1="157" x2="410" y2="163" stroke="#1e293b" stroke-width="1.5"/>
                <text x="407" y="176" font-family="'Segoe UI', sans-serif" font-size="13" fill="#64748b">4</text>
                <line x1="160" y1="157" x2="160" y2="163" stroke="#1e293b" stroke-width="1.5"/>
                <text x="150" y="176" font-family="'Segoe UI', sans-serif" font-size="13" fill="#64748b">-1</text>
                <line x1="110" y1="157" x2="110" y2="163" stroke="#1e293b" stroke-width="1.5"/>
                <text x="100" y="176" font-family="'Segoe UI', sans-serif" font-size="13" fill="#64748b">-2</text>

                <!-- Oy: 1 -> (210,110), 3 -> (210,10), -1 -> (210,210), -2 -> (210,260), -4 -> (210,360 - we use 25px = 1đv for better fit or 35px) -->
                <!-- Let scale: 1 unit = 32px -->
                <!-- Gốc O: (200, 160) -->
                <!-- Điểm vẽ đường thẳng d: y = 2x - 4 -->
                <!-- x=0 -> y=-4; x=2 -> y=0; x=3 -> y=2; x=4 -> y=4; x=1 -> y=-2 -->
                <!-- Let map: x_pixel = 200 + x * 40; y_pixel = 160 - y * 32 -->
                <!-- (2; 0) -> (280, 160) -->
                <!-- (0; -4) -> (200, 288) -->
                <!-- (3.5; 3) -> (340, 64) -->
                <!-- (-0.5; -5) -> (180, 320) -->
                <line x1="170" y1="330" x2="350" y2="40" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
                <text x="355" y="45" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-style="italic" font-weight="bold" fill="#dc2626">d</text>

                <!-- Điểm A(-1; 3): x = 200 - 40 = 160, y = 160 - 3*32 = 64 -->
                <line x1="160" y1="160" x2="160" y2="64" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
                <line x1="200" y1="64" x2="160" y2="64" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
                <circle cx="160" cy="64" r="4.5" fill="#0284c7"/>
                <text x="142" y="60" font-family="'Segoe UI', sans-serif" font-size="15" font-weight="bold" fill="#0284c7">A</text>
                <text x="204" y="68" font-family="'Segoe UI', sans-serif" font-size="12" fill="#0284c7">3</text>

                <!-- Điểm B(-2; -2): x = 200 - 80 = 120, y = 160 + 64 = 224 -->
                <line x1="120" y1="160" x2="120" y2="224" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
                <line x1="200" y1="224" x2="120" y2="224" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,3"/>
                <circle cx="120" cy="224" r="4.5" fill="#0284c7"/>
                <text x="100" y="235" font-family="'Segoe UI', sans-serif" font-size="15" font-weight="bold" fill="#0284c7">B</text>

                <!-- Điểm C(3; 1): x = 200 + 120 = 320, y = 160 - 32 = 128 -->
                <line x1="320" y1="160" x2="320" y2="128" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3"/>
                <line x1="200" y1="128" x2="320" y2="128" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3"/>
                <circle cx="320" cy="128" r="4.5" fill="#059669"/>
                <text x="328" y="125" font-family="'Segoe UI', sans-serif" font-size="15" font-weight="bold" fill="#059669">C</text>

                <!-- Điểm D(4; -1): x = 200 + 160 = 360, y = 160 + 32 = 192 -->
                <line x1="360" y1="160" x2="360" y2="192" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3"/>
                <line x1="200" y1="192" x2="360" y2="192" stroke="#059669" stroke-width="1.5" stroke-dasharray="3,3"/>
                <circle cx="360" cy="192" r="4.5" fill="#059669"/>
                <text x="368" y="198" font-family="'Segoe UI', sans-serif" font-size="15" font-weight="bold" fill="#059669">D</text>

                <!-- Chú thích hai nửa mặt phẳng -->
                <text x="75" y="120" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#0284c7">2x - y &lt; 4 (Chứa O, A, B)</text>
                <text x="320" y="270" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#059669">2x - y &gt; 4 (Chứa C, D)</text>
              </svg>
            </div>
          `
        },
        {
          key: "2b",
          title: "Quy trình 4 bước biểu diễn miền nghiệm của ax + by ≤ c",
          contentHtml: `
            <div class="procedure-box" style="background: #f8fafc; border: 1.5px solid #0284c7; border-radius: 10px; padding: 16px;">
              <h4 style="color: #0369a1; margin-top: 0;"><i class="fa-solid fa-list-check"></i> 4 Bước vàng biểu diễn miền nghiệm của $ax + by \\le c$:</h4>
              <ol style="padding-left: 20px; line-height: 1.7;">
                <li><strong>Bước 1 (Vẽ đường thẳng bờ):</strong> Vẽ đường thẳng $d: ax + by = c$ trên mặt phẳng toạ độ $Oxy$.</li>
                <li><strong>Bước 2 (Lấy điểm kiểm tra):</strong> Lấy một điểm $M_0(x_0; y_0)$ không thuộc $d$.
                  <br><span style="color: #0284c7;"><em>Mẹo của Thầy Sáng:</em> Nếu $c \\ne 0$, ta luôn ưu tiên chọn $M_0(0; 0)$ (gốc toạ độ $O$). Nếu $c = 0$, ta chọn $M_0(1; 0)$ hoặc $M_0(0; 1)$.</span>
                </li>
                <li><strong>Bước 3 (Tính và so sánh giá trị):</strong> Tính giá trị $ax_0 + by_0$ và so sánh với hằng số $c$.</li>
                <li><strong>Bước 4 (Kết luận & gạch miền):</strong>
                  <br>• Nếu $ax_0 + by_0 < c$ thì nửa mặt phẳng bờ $d$ chứa $M_0$ là miền nghiệm.
                  <br>• Nếu $ax_0 + by_0 > c$ thì nửa mặt phẳng bờ $d$ không chứa $M_0$ là miền nghiệm.
                  <br>• Gạch chéo (loại bỏ) nửa mặt phẳng không phải là nghiệm. Miền không bị gạch chính là miền nghiệm cần tìm.
                </li>
              </ol>
            </div>

            <!-- HÌNH 2.2 VÀ HÌNH 2.3 SGK TRANG 24 -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px; margin: 18px 0;">
              <!-- Khung Hình 2.2 -->
              <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 14px; text-align: center;">
                <div style="font-weight: 700; color: #1e293b; font-size: 0.98rem; margin-bottom: 8px;">
                  Hình 2.2: Miền nghiệm của $x + y \\ge 100$
                </div>
                <svg viewBox="0 0 320 240" style="width: 100%; max-width: 300px; height: auto; display: block; margin: 0 auto;">
                  <defs>
                    <pattern id="hatch2_2" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="10" stroke="#94a3b8" stroke-width="1.2"/>
                    </pattern>
                  </defs>
                  <!-- Trục Oxy: Gốc O(70, 190) -->
                  <line x1="40" y1="190" x2="300" y2="190" stroke="#1e293b" stroke-width="1.8"/>
                  <text x="290" y="208" font-style="italic" font-weight="bold" font-size="14">x</text>
                  <line x1="70" y1="220" x2="70" y2="20" stroke="#1e293b" stroke-width="1.8"/>
                  <text x="52" y="28" font-style="italic" font-weight="bold" font-size="14">y</text>
                  <text x="56" y="204" font-weight="bold" font-size="14">O</text>

                  <!-- Miền bị gạch: chứa O(0,0) vì 0+0 < 100 -->
                  <polygon points="70,190 70,70 190,190" fill="url(#hatch2_2)"/>
                  <polygon points="40,190 70,190 70,70 40,100" fill="url(#hatch2_2)"/>
                  <polygon points="70,190 190,190 220,220 70,220" fill="url(#hatch2_2)"/>

                  <!-- Đường thẳng d: x + y = 100 qua (100, 0) -> (190, 190) và (0, 100) -> (70, 70) -->
                  <line x1="40" y1="40" x2="220" y2="220" stroke="#dc2626" stroke-width="2.5"/>
                  <text x="195" y="55" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#dc2626">d: x + y = 100</text>
                  <text x="180" y="206" font-size="13" font-weight="bold" fill="#1e293b">100</text>
                  <text x="38" y="75" font-size="13" font-weight="bold" fill="#1e293b">100</text>
                  <circle cx="190" cy="190" r="3.5" fill="#dc2626"/>
                  <circle cx="70" cy="70" r="3.5" fill="#dc2626"/>
                </svg>
                <div style="font-size: 0.88rem; color: #64748b; margin-top: 6px;">Miền nghiệm là nửa mặt phẳng phía trên-phải không bị gạch (kể cả bờ $d$).</div>
              </div>

              <!-- Khung Hình 2.3 -->
              <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 14px; text-align: center;">
                <div style="font-weight: 700; color: #1e293b; font-size: 0.98rem; margin-bottom: 8px;">
                  Hình 2.3: Miền nghiệm của $5x - 7y \\le 0$
                </div>
                <svg viewBox="0 0 320 240" style="width: 100%; max-width: 300px; height: auto; display: block; margin: 0 auto;">
                  <defs>
                    <pattern id="hatch2_3" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="10" stroke="#94a3b8" stroke-width="1.2"/>
                    </pattern>
                  </defs>
                  <!-- Trục Oxy: Gốc O(80, 180) -->
                  <line x1="40" y1="180" x2="300" y2="180" stroke="#1e293b" stroke-width="1.8"/>
                  <text x="290" y="198" font-style="italic" font-weight="bold" font-size="14">x</text>
                  <line x1="80" y1="220" x2="80" y2="20" stroke="#1e293b" stroke-width="1.8"/>
                  <text x="62" y="28" font-style="italic" font-weight="bold" font-size="14">y</text>
                  <text x="66" y="194" font-weight="bold" font-size="14">O</text>

                  <!-- Đường thẳng d: 5x - 7y = 0 qua O(80,180) và (7, 5) -> (220, 80) -->
                  <line x1="40" y1="208" x2="260" y2="52" stroke="#dc2626" stroke-width="2.5"/>
                  <text x="200" y="42" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#dc2626">d: 5x - 7y = 0</text>

                  <!-- Gạch bỏ nửa mặt phẳng phía dưới bờ d không chứa M0(0; 1) -->
                  <polygon points="40,208 80,180 260,52 300,52 300,220 40,220" fill="url(#hatch2_3)"/>

                  <!-- Điểm kiểm tra M0(0; 1): (80, 160) -->
                  <circle cx="80" cy="160" r="3.5" fill="#0284c7"/>
                  <text x="88" y="164" font-size="12" font-weight="bold" fill="#0284c7">M₀(0; 1)</text>

                  <!-- Điểm (7; 5): x=220, y=80 -->
                  <line x1="220" y1="180" x2="220" y2="80" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3"/>
                  <line x1="80" y1="80" x2="220" y2="80" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3"/>
                  <circle cx="220" cy="80" r="3.5" fill="#dc2626"/>
                  <text x="216" y="196" font-size="13" fill="#1e293b">7</text>
                  <text x="65" y="85" font-size="13" fill="#1e293b">5</text>
                </svg>
                <div style="font-size: 0.88rem; color: #64748b; margin-top: 6px;">Điểm thử $M_0(0; 1)$ cho $5(0)-7(1) = -7 < 0$, miền nghiệm chứa $M_0$ (phần không bị gạch).</div>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3. VẬN DỤNG GIẢI QUYẾT BÀI TOÁN THỰC TIỄN
    // -----------------------------------------------------------------------
    {
      num: "3",
      title: "Vận dụng giải quyết bài toán thực tế (Hình 2.4 SGK)",
      audioScript: "Mục ba, Vận dụng giải quyết bài toán thực tế: Trở lại bài toán rạp chiếu phim, điều kiện để rạp phải bù lỗ là x cộng 2y bé hơn 400, với x và y là các số nguyên không âm. Miền nghiệm là miền tam giác OAB không kể cạnh AB. Nếu rạp bán được 100 vé loại một và 100 vé loại hai thì tổng tiền mới đạt 15 triệu, nhỏ hơn 20 triệu nên rạp bị lỗ. Nhưng nếu bán được 200 vé loại một và 100 vé loại hai thì rạp đạt đúng 20 triệu, vừa vặn hoà vốn.",
      audioUrl: "assets/audio/b10_3_sec3.mp3",
      buttonLabel: "Nghe Thầy Sáng giảng Mục 3",
      checkpoints: [
        {
          id: "poi-10-3-sec3-1",
          time: 16,
          title: "Giây 16: Điểm hoà vốn của rạp chiếu phim",
          question: "Trong bài toán rạp chiếu phim $x + 2y < 400$, nếu rạp bán được 200 vé loại 1 ($x = 200$) và 100 vé loại 2 ($y = 100$) thì tình trạng tài chính của rạp là:",
          options: [
            "Rạp bị bù lỗ 5 triệu đồng",
            "Rạp vừa vặn hoà vốn (đạt đúng 20 triệu)",
            "Rạp có lãi 10 triệu đồng",
            "Rạp phá sản"
          ],
          correctIndex: 1, // B
          hint: "Thay x = 200, y = 100 vào biểu thức 50x + 100y.",
          explain: "Chính xác! Doanh thu = 50(200) + 100(100) = 10000 + 10000 = 20000 nghìn đồng = 20 triệu đồng. Điểm (200; 100) nằm chính xác trên đường thẳng biên AB: x + 2y = 400, ứng với trạng thái hoà vốn."
        }
      ],
      subsections: [
        {
          key: "3a",
          title: "Giải trọn vẹn bài toán rạp chiếu phim (Hình 2.4 SGK)",
          contentHtml: `
            <div class="sgk-framed-box">
              <div class="sgk-box-tag"><i class="fa-solid fa-film"></i> [Mô hình hoá bài toán rạp chiếu phim]:</div>
              <p>Gọi $x$ là số vé loại 1 ($x \\in \\mathbb{N}$) và $y$ là số vé loại 2 ($y \\in \\mathbb{N}$).</p>
              <p>Số tiền bán vé thu được là: $50x + 100y$ (nghìn đồng).</p>
              <p>Rạp chiếu phim phải <strong>bù lỗ</strong> khi và chỉ khi doanh thu nhỏ hơn 20 triệu ($20\\,000$ nghìn đồng):</p>
              <div style="text-align: center; font-size: 1.1rem; color: #dc2626; font-weight: bold; margin: 8px 0;">
                $$50x + 100y < 20\\,000 \\iff x + 2y < 400 \\quad (x \\ge 0, y \\ge 0).$$
              </div>
            </div>

            <!-- HÌNH 2.4 SVG CHUẨN TIKZ -->
            <div style="background: #ffffff; border: 1.5px solid #0284c7; border-radius: 12px; padding: 18px; margin: 18px 0; text-align: center;">
              <div style="font-weight: 700; color: #0369a1; font-size: 1.02rem; margin-bottom: 12px;">
                <i class="fa-solid fa-shapes"></i> Hình 2.4: Miền tam giác $OAB$ (không kể đoạn thẳng $AB$) biểu diễn các trường hợp bù lỗ
              </div>

              <svg viewBox="0 0 480 300" style="width: 100%; max-width: 440px; height: auto; display: block; margin: 0 auto; background: #ffffff;">
                <defs>
                  <pattern id="hatch2_4" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="10" stroke="#cbd5e1" stroke-width="1.2"/>
                  </pattern>
                </defs>

                <!-- Trục Oxy: Gốc O(80, 240) -> x: 1đv = 0.75px, y: 1đv = 0.85px -->
                <!-- Trục Ox -->
                <line x1="50" y1="240" x2="440" y2="240" stroke="#1e293b" stroke-width="2"/>
                <text x="435" y="260" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-style="italic" font-weight="bold">x</text>

                <!-- Trục Oy -->
                <line x1="80" y1="270" x2="80" y2="30" stroke="#1e293b" stroke-width="2"/>
                <text x="60" y="38" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-style="italic" font-weight="bold">y</text>
                <text x="62" y="255" font-weight="bold" font-size="15">O</text>

                <!-- Vạch số: A(0, 200) -> (80, 70), B(400, 0) -> (380, 240) -->
                <!-- Miền tam giác OAB được tô màu xanh nhạt cyan (miền bù lỗ) -->
                <polygon points="80,240 80,70 380,240" fill="#e0f2fe" opacity="0.85"/>

                <!-- Miền bên ngoài bị gạch sọc -->
                <polygon points="80,70 380,240 440,240 440,40 80,40" fill="url(#hatch2_4)"/>

                <!-- Đường thẳng biên AB: x + 2y = 400 VẼ BẰNG NÉT ĐỨT VÌ DẤU < NGẶT -->
                <line x1="40" y1="47" x2="420" y2="263" stroke="#dc2626" stroke-width="2.8" stroke-dasharray="6,4"/>
                <text x="170" y="80" font-family="'Segoe UI', sans-serif" font-size="14" font-weight="bold" fill="#dc2626">x + 2y = 400 (Nét đứt)</text>

                <!-- Hai điểm mút A và B -->
                <circle cx="80" cy="70" r="4.5" fill="#0284c7"/>
                <text x="88" y="68" font-family="'Segoe UI', sans-serif" font-size="15" font-weight="bold" fill="#0284c7">A</text>
                <text x="50" y="74" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#1e293b">200</text>

                <circle cx="380" cy="240" r="4.5" fill="#0284c7"/>
                <text x="382" y="230" font-family="'Segoe UI', sans-serif" font-size="15" font-weight="bold" fill="#0284c7">B</text>
                <text x="366" y="260" font-family="'Segoe UI', sans-serif" font-size="13" font-weight="bold" fill="#1e293b">400</text>

                <text x="50" y="155" font-family="'Segoe UI', sans-serif" font-size="13" fill="#64748b">100</text>
                <line x1="77" y1="155" x2="83" y2="155" stroke="#1e293b" stroke-width="1.5"/>

                <text x="220" y="260" font-family="'Segoe UI', sans-serif" font-size="13" fill="#64748b">200</text>
                <line x1="230" y1="237" x2="230" y2="243" stroke="#1e293b" stroke-width="1.5"/>

                <!-- Điểm kiểm tra (100; 100): x=155, y=155 (nằm trong tam giác OAB) -->
                <circle cx="155" cy="155" r="4" fill="#ef4444"/>
                <text x="165" y="150" font-family="'Segoe UI', sans-serif" font-size="12" font-weight="bold" fill="#ef4444">Bù lỗ (100; 100)</text>

                <!-- Chú thích khung bên dưới -->
                <rect x="180" y="180" width="220" height="42" rx="6" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
                <text x="190" y="198" font-family="'Segoe UI', sans-serif" font-size="12" fill="#0369a1" font-weight="bold">Miền tam giác OAB (bỏ cạnh AB):</text>
                <text x="190" y="214" font-family="'Segoe UI', sans-serif" font-size="11.5" fill="#64748b">Tập hợp các trường hợp rạp bị bù lỗ.</text>
              </svg>
            </div>
          `
        }
      ]
    }
  ],

  // =========================================================================
  // CHỐT BÀI HỌC & BẢNG SƠ ĐỒ TƯ DUY TÓM TẮT
  // =========================================================================
  realworldWrapup: {
    title: "Chốt kiến thức cốt lõi & Sơ đồ tư duy Bài 3",
    summaryHtml: `
      <div style="background: #ffffff; border: 2px solid #0284c7; border-radius: 12px; padding: 20px; box-shadow: 0 4px 15px rgba(2, 132, 199, 0.08);">
        <h3 style="color: #0369a1; margin-top: 0; text-align: center;"><i class="fa-solid fa-graduation-cap"></i> BẢNG TỔNG KẾT PHƯƠNG PHÁP BIỂU DIỄN MIỀN NGHIỆM</h3>
        
        <div style="overflow-x: auto; margin-top: 14px;">
          <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem;">
            <thead>
              <tr style="background: #0284c7; color: #ffffff;">
                <th style="padding: 10px; border: 1px solid #cbd5e1;">Bất phương trình</th>
                <th style="padding: 10px; border: 1px solid #cbd5e1;">Quy ước đường bờ $d: ax + by = c$</th>
                <th style="padding: 10px; border: 1px solid #cbd5e1;">Điểm thử nghiệm $M_0$</th>
                <th style="padding: 10px; border: 1px solid #cbd5e1;">Kết luận miền nghiệm</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background: #f8fafc;">
                <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; color: #1e3a8a;">$ax + by \\le c$<br>hoặc $ax + by \\ge c$</td>
                <td style="padding: 10px; border: 1px solid #cbd5e1; color: #15803d; font-weight: bold;">NÉT LIỀN ĐẬM<br>(Bờ thuộc miền nghiệm)</td>
                <td style="padding: 10px; border: 1px solid #cbd5e1;" rowspan="2">
                  Ưu tiên chọn <strong>$O(0; 0)$</strong> nếu $c \\ne 0$.<br>
                  Chọn <strong>$(1; 0)$</strong> hoặc <strong>$(0; 1)$</strong> nếu $c = 0$.
                </td>
                <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">
                  • Nếu $ax_0 + by_0 \\le c$: Chọn nửa mặt phẳng <strong>chứa $M_0$</strong>.<br>
                  • Nếu $ax_0 + by_0 > c$: Chọn nửa mặt phẳng <strong>không chứa $M_0$</strong>.
                </td>
              </tr>
              <tr style="background: #ffffff;">
                <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: bold; color: #dc2626;">$ax + by < c$<br>hoặc $ax + by > c$</td>
                <td style="padding: 10px; border: 1px solid #cbd5e1; color: #b91c1c; font-weight: bold;">NÉT ĐỨT<br>(Bờ KHÔNG thuộc miền nghiệm)</td>
                <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: left;">
                  Lấy nửa mặt phẳng tương ứng thoả mãn dấu ngặt, <em>không kể các điểm nằm trên đường thẳng bờ</em>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },

  // =========================================================================
  // PHẦN IV. HỆ THỐNG BÀI TẬP CỦNG CỐ CHUẨN MỚI BỘ GIÁO DỤC
  // =========================================================================
  examFormatPractice: {
    part1MultipleChoice: [
      {
        id: "mc-10-3-1",
        num: 1,
        prompt: "Câu 1: Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
        options: [
          "$2x^2 + 5y \\le 3$.",
          "$x - 3y^2 > 4$.",
          "$2x - 3y > 5$.",
          "$xy + x < 1$."
        ],
        correctIndex: 2, // Đáp án C
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo định nghĩa SGK trang 23: Bất phương trình bậc nhất hai ẩn có dạng $ax + by > c$ (với $a, b$ không đồng thời bằng 0).<br>Biểu thức $2x - 3y > 5$ có $a = 2, b = -3, c = 5$ là bất phương trình bậc nhất hai ẩn.<br>Các phương án A, B chứa số hạng bậc hai ($x^2, y^2$), phương án D chứa tích $xy$ nên đều không phải.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Trong các bất phương trình sau, đâu là bất phương trình bậc nhất hai ẩn?",
          options: ["$3x + y \\le 7$", "$x^2 + y^2 \\le 4$", "$x + y + z > 0$", "$x/y \\le 2$"],
          correctIndex: 0, // A
          explain: "Chỉ có $3x + y \\le 7$ có dạng $ax + by \\le c$ bậc nhất với hai ẩn $x, y$."
        }
      },
      {
        id: "mc-10-3-2",
        num: 2,
        prompt: "Câu 2: Cặp số $(x; y)$ nào sau đây là một nghiệm của bất phương trình $2x + y \\le 5$?",
        options: [
          "$(1; 2)$.",
          "$(3; 1)$.",
          "$(2; 3)$.",
          "$(4; 0)$."
        ],
        correctIndex: 0, // Đáp án A
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Thay toạ độ $(1; 2)$ vào vế trái của bất phương trình:<br>$2(1) + 2 = 4 \\le 5$ (luôn đúng).<br>Vậy cặp số $(1; 2)$ là một nghiệm của bất phương trình đã cho.<br>Kiểm tra các phương án còn lại:<br>• Với $(3; 1)$: $2(3) + 1 = 7 > 5$ (sai).<br>• Với $(2; 3)$: $2(2) + 3 = 7 > 5$ (sai).<br>• Với $(4; 0)$: $2(4) + 0 = 8 > 5$ (sai).",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Cặp số nào sau đây KHÔNG phải là nghiệm của bất phương trình $x - 2y < 3$?",
          options: ["$(0; 0)$", "$(1; 0)$", "$(5; 0)$", "$(2; 1)$"],
          correctIndex: 2, // C (5 - 0 = 5 > 3)
          explain: "Thay $(5; 0)$ vào ta có $5 - 0 = 5 < 3$ là sai nên $(5; 0)$ không phải nghiệm."
        }
      },
      {
        id: "mc-10-3-3",
        num: 3,
        prompt: "Câu 3: Cho bất phương trình $x - 2y < 4$. Khẳng định nào sau đây là <strong>đúng</strong> về đường thẳng bờ của miền nghiệm?",
        options: [
          "Đường thẳng bờ đi qua gốc toạ độ $O(0; 0)$.",
          "Đường thẳng bờ được vẽ bằng nét liền đậm và thuộc miền nghiệm.",
          "Điểm $O(0; 0)$ không thuộc miền nghiệm.",
          "Đường thẳng bờ được biểu diễn bằng nét đứt và không thuộc miền nghiệm."
        ],
        correctIndex: 3, // Đáp án D
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Vì bất phương trình có dấu ngặt '$<$' (không có dấu bằng) nên đường thẳng bờ $d: x - 2y = 4$ được biểu diễn bằng <strong>nét đứt</strong> và các điểm nằm trên bờ không thuộc miền nghiệm.<br>Kiểm tra gốc $O(0; 0)$: $0 - 2(0) = 0 < 4$ (đúng) nên $O(0; 0)$ thuộc miền nghiệm.",
        similarVariation: {
          prompt: "Câu 3 (Tương tự): Bất phương trình $3x - y \\ge 6$ có đường thẳng bờ được vẽ bằng nét gì?",
          options: ["Nét đứt", "Nét liền", "Không vẽ", "Đường lượn sóng"],
          correctIndex: 1, // B (Nét liền)
          explain: "Vì có dấu $\\ge$ (có chứa dấu bằng) nên bờ được vẽ bằng nét liền đậm và thuộc miền nghiệm."
        }
      },
      {
        id: "mc-10-3-4",
        num: 4,
        prompt: "Câu 4: Nửa mặt phẳng không bị gạch (kể cả bờ $d$) chứa gốc toạ độ $O(0; 0)$ của đường thẳng $d: x - y = 2$ là miền nghiệm của bất phương trình nào?",
        options: [
          "$x - y > 2$.",
          "$x - y \\le 2$.",
          "$x - y \\ge 2$.",
          "$x - y < -2$."
        ],
        correctIndex: 1, // Đáp án B
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>- Vì miền nghiệm kể cả bờ $d$ nên bất phương trình phải chứa dấu bằng '$\\le$' hoặc '$\\ge$'.<br>- Thay toạ độ gốc toạ độ $O(0; 0)$ vào vế trái biểu thức $x - y$:<br>$0 - 0 = 0$.<br>So sánh với 2, ta thấy $0 \\le 2$ là khẳng định đúng.<br>Do miền nghiệm chứa điểm $O(0; 0)$ nên bất phương trình cần tìm là $x - y \\le 2$.",
        similarVariation: {
          prompt: "Câu 4 (Tương tự): Nửa mặt phẳng không chứa gốc toạ độ O của đường thẳng x + y = 3 (kể cả bờ) là miền nghiệm của:",
          options: ["$x + y < 3$", "$x + y \\le 3$", "$x + y \\ge 3$", "$x + y > 3$"],
          correctIndex: 2, // C
          explain: "Vì không chứa O(0,0) nên 0 + 0 = 0 < 3 bị loại, miền nghiệm phải thoả mãn x + y >= 3."
        }
      },
      {
        id: "mc-10-3-5",
        num: 5,
        prompt: "Câu 5: Một người sử dụng dịch vụ viễn thông với cước phí 1 nghìn đồng mỗi phút gọi nội mạng và 2 nghìn đồng mỗi phút gọi ngoại mạng. Gọi $x$ và $y$ lần lượt là số phút gọi nội mạng và ngoại mạng trong một tháng. Bất phương trình biểu thị điều kiện để tổng số tiền cước trong tháng đó nhỏ hơn $200$ nghìn đồng là:",
        options: [
          "$x + 2y \\le 200$.",
          "$2x + y < 200$.",
          "$x + 2y < 200$.",
          "$x + 2y > 200$."
        ],
        correctIndex: 2, // Đáp án C
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>- Số tiền cước gọi nội mạng: $1 \\cdot x = x$ (nghìn đồng).<br>- Số tiền cước gọi ngoại mạng: $2 \\cdot y = 2y$ (nghìn đồng).<br>- Tổng số tiền cước phát sinh trong tháng: $x + 2y$ (nghìn đồng).<br>- Đề bài yêu cầu số tiền phải trả <strong>nhỏ hơn</strong> $200$ nghìn đồng (dấu ngặt '$<$'):<br>Do đó ta có bất phương trình: $x + 2y < 200$ ($x, y \\ge 0$).",
        similarVariation: {
          prompt: "Câu 5 (Tương tự): Nếu cước nội mạng là 2 nghìn đồng/phút, ngoại mạng là 3 nghìn đồng/phút và số tiền không vượt quá 300 nghìn đồng thì điều kiện là:",
          options: ["$2x + 3y \\le 300$", "$2x + 3y < 300$", "$3x + 2y \\le 300$", "$2x + 3y > 300$"],
          correctIndex: 0, // A
          explain: "'Không vượt quá' nghĩa là bé hơn hoặc bằng <= 300."
        }
      }
    ],

    part2TrueFalse: [
      {
        id: "tf-10-3-1",
        num: 1,
        prompt: "Câu 1: Cho bất phương trình bậc nhất hai ẩn $2x - 3y \\le 6$. Xét tính Đúng / Sai của các mệnh đề sau:",
        items: [
          {
            id: "a",
            text: "Cặp số $(0; 0)$ là một nghiệm của bất phương trình đã cho.",
            isCorrect: true,
            explain: "Thay $x = 0, y = 0$ ta có $2(0) - 3(0) = 0 \\le 6$ (đúng) nên $(0; 0)$ là một nghiệm."
          },
          {
            id: "b",
            text: "Đường thẳng bờ của miền nghiệm đi qua hai điểm $A(3; 0)$ và $B(0; -2)$.",
            isCorrect: true,
            explain: "Đường thẳng $2x - 3y = 6$ cắt $Ox$ tại $A(3; 0)$ và cắt $Oy$ tại $B(0; -2)$."
          },
          {
            id: "c",
            text: "Đường thẳng bờ được vẽ bằng nét đứt trên mặt phẳng toạ độ.",
            isCorrect: false,
            explain: "Bất phương trình chứa dấu '$\\le$' (có dấu bằng) nên đường thẳng bờ phải vẽ bằng <strong>nét liền</strong> và thuộc miền nghiệm."
          },
          {
            id: "d",
            text: "Điểm $M(4; 1)$ thuộc miền nghiệm của bất phương trình đã cho.",
            isCorrect: true,
            explain: "Thay $x = 4, y = 1$ ta được $2(4) - 3(1) = 8 - 3 = 5 \\le 6$ (đúng) nên $M(4; 1)$ thuộc miền nghiệm."
          }
        ]
      },
      {
        id: "tf-10-3-2",
        num: 2,
        prompt: "Câu 2: Cho bất phương trình $x + y > 100$ trên mặt phẳng toạ độ $Oxy$. Xét tính Đúng / Sai của các khẳng định sau:",
        items: [
          {
            id: "a",
            text: "Miền nghiệm của bất phương trình là nửa mặt phẳng bờ $d: x + y = 100$ không chứa gốc toạ độ $O(0; 0)$.",
            isCorrect: true,
            explain: "Thay $O(0; 0)$ ta được $0 + 0 = 0 > 100$ (sai), do đó miền nghiệm không chứa gốc $O$."
          },
          {
            id: "b",
            text: "Đường thẳng bờ $d: x + y = 100$ thuộc vào miền nghiệm của bất phương trình.",
            isCorrect: false,
            explain: "Vì dấu ngặt '$>$' nên các điểm nằm trên đường thẳng bờ $d$ không thoả mãn bất phương trình."
          },
          {
            id: "c",
            text: "Điểm $P(60; 50)$ thuộc miền nghiệm của bất phương trình.",
            isCorrect: true,
            explain: "Thay toạ độ $P$: $60 + 50 = 110 > 100$ (đúng)."
          },
          {
            id: "d",
            text: "Cặp số $(50; 50)$ là một nghiệm của bất phương trình đã cho.",
            isCorrect: false,
            explain: "Thay toạ độ: $50 + 50 = 100$. Vì $100 > 100$ là sai nên $(50; 50)$ không phải là nghiệm."
          }
        ]
      },
      {
        id: "tf-10-3-3",
        num: 3,
        prompt: "Câu 3: Ông An muốn thuê một chiếc xe ô tô du lịch (có lái xe) trong một tuần. Giá thuê xe được cho như sau:<br>• Từ thứ Hai đến thứ Sáu: Phí cố định $900$ nghìn đồng/ngày và $8$ nghìn đồng/km.<br>• Thứ Bảy và Chủ nhật: Phí cố định $1500$ nghìn đồng/ngày và $10$ nghìn đồng/km.<br>Gọi $x, y$ lần lượt là số kilômét ông An đi trong các ngày trong tuần và hai ngày cuối tuần. Xét tính Đúng / Sai của các khẳng định sau:",
        items: [
          {
            id: "a",
            text: "Tổng chi phí cố định cho cả tuần thuê xe là $7{,}5$ triệu đồng ($7500$ nghìn đồng).",
            isCorrect: true,
            explain: "Phí cố định: $5 \\times 900 + 2 \\times 1500 = 4500 + 3000 = 7500$ nghìn đồng = $7{,}5$ triệu đồng."
          },
          {
            id: "b",
            text: "Số tiền tính theo quãng đường di chuyển được biểu thị là $8x + 10y$ (nghìn đồng).",
            isCorrect: true,
            explain: "$x$ km trong tuần giá 8 nghìn/km, $y$ km cuối tuần giá 10 nghìn/km nên số tiền là $8x + 10y$."
          },
          {
            id: "c",
            text: "Bất phương trình biểu thị số tiền ông An phải trả không quá 14 triệu đồng là $8x + 10y \\le 6500$.",
            isCorrect: true,
            explain: "Tổng tiền $\\le 14\\,000 \\iff 7500 + 8x + 10y \\le 14\\,000 \\iff 8x + 10y \\le 6500$ (tương đương $4x + 5y \\le 3250$)."
          },
          {
            id: "d",
            text: "Nếu trong tuần ông An đi 500 km ($x = 500$) và cuối tuần đi 250 km ($y = 250$) thì chi phí vượt quá 14 triệu đồng.",
            isCorrect: true,
            explain: "Với $x = 500, y = 250$: $8(500) + 10(250) = 4000 + 2500 = 6500$. Tổng chi phí = $7500 + 6500 = 14000$ nghìn đồng = đúng 14 triệu đồng (không vượt quá), do đó khẳng định 'vượt quá' là Sai."
          }
        ]
      }
    ],

    part3ShortAnswer: [
      {
        id: "sa-10-3-1",
        num: 1,
        prompt: "Câu 1: Trong bài toán rạp chiếu phim (vé loại 1 giá $50\\,000$ đồng, vé loại 2 giá $100\\,000$ đồng), để không phải bù lỗ thì doanh thu phải đạt tối thiểu 20 triệu đồng. Nếu trong một suất chiếu, rạp đã bán được 120 vé loại 1 thì rạp cần bán tối thiểu bao nhiêu vé loại 2 để không phải chịu lỗ?",
        correctAnswer: "140",
        acceptedAnswers: ["140", "140 vé"],
        unit: "vé",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Điều kiện để không bù lỗ: $50x + 100y \\ge 20\\,000$ (nghìn đồng).<br>Khi đã bán được $x = 120$ vé loại 1, ta có:<br>$50(120) + 100y \\ge 20\\,000 \\iff 6000 + 100y \\ge 20\\,000$<br>$\\iff 100y \\ge 14\\,000 \\iff y \\ge 140$.<br>Vậy rạp cần bán tối thiểu <strong>140 vé</strong> loại 2 để không phải bù lỗ.",
        similarVariation: {
          prompt: "Câu 1 (Tương tự): Nếu rạp đã bán được 160 vé loại 1 thì cần bán tối thiểu bao nhiêu vé loại 2 để không bị bù lỗ?",
          correctAnswer: "120",
          acceptedAnswers: ["120", "120 vé"],
          unit: "vé",
          explain: "50(160) + 100y >= 20000 -> 8000 + 100y >= 20000 -> y >= 120."
        }
      },
      {
        id: "sa-10-3-2",
        num: 2,
        prompt: "Câu 2: Một người có hạn mức chi tiêu không quá 200 nghìn đồng mỗi tháng cho cước điện thoại. Cước gọi nội mạng là 1 nghìn đồng/phút và ngoại mạng là 2 nghìn đồng/phút. Nếu người này đã sử dụng hết 68 phút gọi nội mạng trong tháng thì số phút gọi ngoại mạng tối đa (số nguyên phút) mà người đó có thể gọi để không vượt quá hạn mức là bao nhiêu phút?",
        correctAnswer: "66",
        acceptedAnswers: ["66", "66 phút"],
        unit: "phút",
        explain: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Gọi $y$ là số phút gọi ngoại mạng ($y \\in \\mathbb{N}$).<br>Số phút gọi nội mạng đã dùng là $x = 68$.<br>Điều kiện chi phí không vượt quá 200 nghìn đồng là:<br>$1(68) + 2y \\le 200 \\iff 2y \\le 200 - 68 \\iff 2y \\le 132 \\iff y \\le 66$.<br>Vậy số phút gọi ngoại mạng tối đa có thể thực hiện là <strong>66 phút</strong>.",
        similarVariation: {
          prompt: "Câu 2 (Tương tự): Nếu cước nội mạng là 1 nghìn, ngoại mạng là 2 nghìn, hạn mức là 150 nghìn đồng và đã dùng 50 phút nội mạng thì số phút ngoại mạng tối đa là:",
          correctAnswer: "50",
          acceptedAnswers: ["50", "50 phút"],
          unit: "phút",
          explain: "50 + 2y <= 150 -> 2y <= 100 -> y <= 50 phút."
        }
      }
    ]
  }
};

// Đồng bộ biến toàn cục tương thích
if (typeof window !== "undefined") {
  window.LESSON_10_3_DATA = window.LESSON_10_C2_B3_DATA;
}
"""

with open('js/lesson-10-3-data.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Generated js/lesson-10-3-data.js successfully!")
