# -*- coding: utf-8 -*-
import re

# 1. FIX LESSON 10-3
with open('js/lesson-10-3-data.js', 'r', encoding='utf-8') as f:
    t3 = f.read()

# Fix teacherWelcome in B3
old_welcome_b3 = """  teacherWelcome: {
    avatar: "assets/images/teacher_avatar.png",
    name: "ThS. Lương Thanh Sáng",
    title: "Giáo viên Toán - THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang",
    quote: "Toán học không chỉ nằm trong trang sách, mà hiển hiện sinh động trong từng bài toán kinh doanh, tính tiền cước hay lập kế hoạch tài chính của cuộc sống."
  },"""

new_welcome_b3 = """  teacherWelcome: {
    avatar: "assets/images/teacher_avatar.png",
    name: "ThS. Lương Thanh Sáng",
    title: "Giáo viên Toán - THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang",
    greetingText: "Thầy Sáng thân ái chào toàn thể các em học sinh Lớp 10! Hôm nay, Thầy trò mình cùng bước vào Chương hai: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn, bắt đầu với Bài học số 3: Bất phương trình bậc nhất hai ẩn. Đây là cầu nối tuyệt vời giữa đại số và hình học toạ độ phẳng, giúp các em giải quyết những bài toán kinh tế, sản xuất và đời sống vô cùng thực tế. Nào, các em hãy chuẩn bị sách vở, thước kẻ và cùng Thầy khám phá bài học với trọn vẹn niềm đam mê nhé!",
    audioScript: "Thầy Sáng thân ái chào toàn thể các em học sinh Lớp 10! Hôm nay, Thầy trò mình cùng bước vào Chương hai: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn, bắt đầu với Bài học số 3: Bất phương trình bậc nhất hai ẩn. Đây là cầu nối tuyệt vời giữa đại số và hình học toạ độ phẳng, giúp các em giải quyết những bài toán kinh tế, sản xuất và đời sống vô cùng thực tế. Nào, các em hãy chuẩn bị sách vở, thước kẻ và cùng Thầy khám phá bài học với trọn vẹn niềm đam mê nhé!",
    audioUrl: "assets/audio/b10_3_welcome.mp3",
    buttonLabel: "Nghe Thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },"""

if old_welcome_b3 in t3:
    t3 = t3.replace(old_welcome_b3, new_welcome_b3)
    print("Replaced teacherWelcome in B3")

# Fix learningGoals in B3 to strings
old_goals_b3 = """  learningGoals: [
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
  ],"""

new_goals_b3 = """  learningGoals: [
    "Nhận biết bất phương trình bậc nhất hai ẩn và viết đúng dạng tổng quát $ax + by \\\\le c$ ($<, \\\\ge, >$) với $a, b$ không đồng thời bằng 0.",
    "Hiểu rõ khái niệm nghiệm và chỉ ra được các cặp nghiệm $(x_0; y_0)$ của bất phương trình.",
    "Nắm vững phương pháp 4 bước biểu diễn miền nghiệm trên mặt phẳng toạ độ $Oxy$, phân biệt bờ nét liền (khi có dấu $\\\\le, \\\\ge$) và bờ nét đứt (khi có dấu $<, >$).",
    "Vận dụng thành thạo vào giải quyết các bài toán kinh tế đời sống thực tế như bài toán rạp chiếu phim bù lỗ hay hạn mức cước viễn thông."
  ],"""

if old_goals_b3 in t3:
    t3 = t3.replace(old_goals_b3, new_goals_b3)
    print("Replaced learningGoals in B3")

# Fix hook in B3
old_hook_b3_pattern = r'hook:\s*\{[\s\S]*?bridge:'
new_hook_b3 = """hook: {
    title: "Tình huống mở đầu: Doanh thu rạp chiếu phim nhân ngày 1-6",
    story: "Nhân ngày Quốc tế Thiếu nhi 1-6, một rạp chiếu phim phục vụ khán giả một bộ phim hoạt hình đặc sắc. Vé được bán ra gồm hai loại: vé loại 1 dành cho trẻ em giá 50 nghìn đồng và vé loại 2 dành cho người lớn giá 100 nghìn đồng. Ban quản lý tính toán rằng: Để không phải bù lỗ thì số tiền vé thu được ở rạp chiếu phim này phải đạt tối thiểu 20 triệu đồng. Trong những trường hợp nào của cặp số lượng vé bán được thì rạp chiếu phim phải bù lỗ? Khi nào rạp đạt điểm hoà vốn hoặc bắt đầu có lãi?",
    storyHtml: `
      <p>Nhân ngày Quốc tế Thiếu nhi 1-6, một rạp chiếu phim phục vụ khán giả một bộ phim hoạt hình đặc sắc. Vé được bán ra gồm hai loại:</p>
      <div style="margin: 12px 0; padding: 12px 16px; background: #f8fafc; border-left: 4px solid #0284c7; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
        <p style="margin: 0 0 6px 0;">• <strong>Vé loại 1 (trẻ em từ 6 đến 13 tuổi):</strong> <strong style="color: #0284c7;">50.000 đồng/vé</strong>.</p>
        <p style="margin: 0;">• <strong>Vé loại 2 (người trên 13 tuổi):</strong> <strong style="color: #0284c7;">100.000 đồng/vé</strong>.</p>
      </div>
      <p>Ban quản lý tính toán rằng: Để không phải bù lỗ thì số tiền vé thu được ở rạp chiếu phim này phải đạt tối thiểu <strong>20 triệu đồng</strong>.</p>
      <p style="color: #0369a1; font-weight: 500; font-style: italic;">Câu hỏi đặt ra: Gọi $x$ và $y$ lần lượt là số lượng vé loại 1 và loại 2 bán được. Trong những trường hợp nào của cặp số $(x; y)$ thì rạp chiếu phim phải bù lỗ? Khi nào rạp đạt điểm hoà vốn hoặc bắt đầu có lãi?</p>
    `,
    audioUrl: "assets/audio/b10_3_hook.mp3",
    buttonLabel: "Nghe Thầy Sáng đặt vấn đề",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    bridge:"""

t3 = re.sub(old_hook_b3_pattern, new_hook_b3, t3)
print("Updated hook in B3")


# 2. FIX LESSON 10-4
with open('js/lesson-10-4-data.js', 'r', encoding='utf-8') as f:
    t4 = f.read()

# Fix teacherWelcome in B4
old_welcome_b4 = """  teacherWelcome: {
    avatar: "assets/images/teacher_avatar.png",
    name: "ThS. Lương Thanh Sáng",
    title: "Giáo viên Toán - THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang",
    quote: "Quy hoạch tuyến tính là phép màu của Toán học ứng dụng: Từ những ràng buộc tài chính và nguồn lực có hạn, chúng ta luôn tìm ra phương án tối ưu để mang lại thành công lớn nhất."
  },"""

new_welcome_b4 = """  teacherWelcome: {
    avatar: "assets/images/teacher_avatar.png",
    name: "ThS. Lương Thanh Sáng",
    title: "Giáo viên Toán - THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang",
    greetingText: "Thầy Sáng chào các em học sinh Lớp 10! Tiếp nối thành công của Bài 3, hôm nay chúng ta bước sang Bài 4: Hệ bất phương trình bậc nhất hai ẩn. Đây là một bài học mang tính ứng dụng kinh tế đỉnh cao, đặt nền móng cho lý thuyết quy hoạch tuyến tính, công cụ mà các nhà kinh tế học và doanh nghiệp sử dụng hàng ngày để tối đa hoá lợi nhuận và tối thiểu hoá chi phí. Thầy chúc các em có một buổi học thật hào hứng và hiệu quả!",
    audioScript: "Thầy Sáng chào các em học sinh Lớp 10! Tiếp nối thành công của Bài 3, hôm nay chúng ta bước sang Bài 4: Hệ bất phương trình bậc nhất hai ẩn. Đây là một bài học mang tính ứng dụng kinh tế đỉnh cao, đặt nền móng cho lý thuyết quy hoạch tuyến tính, công cụ mà các nhà kinh tế học và doanh nghiệp sử dụng hàng ngày để tối đa hoá lợi nhuận và tối thiểu hoá chi phí. Thầy chúc các em có một buổi học thật hào hứng và hiệu quả!",
    audioUrl: "assets/audio/b10_4_welcome.mp3",
    buttonLabel: "Nghe Thầy Sáng chào lớp",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng"
  },"""

if old_welcome_b4 in t4:
    t4 = t4.replace(old_welcome_b4, new_welcome_b4)
    print("Replaced teacherWelcome in B4")

# Fix learningGoals in B4
old_goals_b4 = """  learningGoals: [
    {
      icon: "fa-solid fa-layer-group",
      title: "Nhận biết hệ bất phương trình bậc nhất hai ẩn",
      desc: "Nhận diện hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn; hiểu rõ khái niệm nghiệm đồng thời của hệ."
    },
    {
      icon: "fa-solid fa-draw-polygon",
      title: "Biểu diễn miền nghiệm của hệ trên mặt phẳng toạ độ",
      desc: "Nắm vững nguyên lý giao các miền nghiệm: gạch bỏ các miền không thoả mãn của từng bất phương trình, miền không bị gạch chính là miền đa giác nghiệm của hệ."
    },
    {
      icon: "fa-solid fa-trophy",
      title: "Định lí cực trị trên miền đa giác (Quy hoạch tuyến tính)",
      desc: "Thấu hiểu định lí then chốt: Giá trị lớn nhất hay nhỏ nhất của biểu thức mục tiêu $F(x; y) = ax + by$ luôn đạt được tại một trong các đỉnh của miền đa giác nghiệm."
    },
    {
      icon: "fa-solid fa-briefcase",
      title: "Vận dụng tối ưu hoá kinh doanh và đời sống",
      desc: "Thiết lập mô hình và giải quyết trọn vẹn bài toán kinh doanh máy điều hoà (tối đa lợi nhuận), bài toán khẩu phần dinh dưỡng (tối thiểu chi phí)."
    }
  ],"""

new_goals_b4 = """  learningGoals: [
    "Nhận biết và thiết lập được hệ bất phương trình bậc nhất hai ẩn từ các điều kiện ràng buộc thực tiễn.",
    "Biểu diễn chính xác miền nghiệm của hệ trên mặt phẳng toạ độ $Oxy$ bằng phương pháp giao các miền nghiệm (gạch bỏ miền không thích hợp).",
    "Thấu hiểu và vận dụng định lí cực trị: giá trị lớn nhất hay nhỏ nhất của biểu thức mục tiêu $F(x; y) = ax + by$ luôn đạt được tại các đỉnh của miền đa giác.",
    "Giải quyết xuất sắc các bài toán kinh doanh, sản xuất và dinh dưỡng thực tế (bài toán máy điều hoà, chế độ ăn gia đình)."
  ],"""

if old_goals_b4 in t4:
    t4 = t4.replace(old_goals_b4, new_goals_b4)
    print("Replaced learningGoals in B4")

# Fix hook in B4
old_hook_b4_pattern = r'hook:\s*\{[\s\S]*?sections:'
new_hook_b4 = """hook: {
    title: "Tình huống mở đầu: Bài toán kinh doanh máy điều hoà mùa nóng",
    story: "Trong năm nay, một cửa hàng điện lạnh dự định kinh doanh hai loại máy điều hoà: điều hoà hai chiều và điều hoà một chiều với số vốn ban đầu không vượt quá 1,2 tỉ đồng. Giá mua vào lần lượt là 20 triệu đồng và 10 triệu đồng mỗi máy; lợi nhuận dự kiến là 3,5 triệu đồng và 2 triệu đồng mỗi máy. Theo khảo sát thị trường, nhu cầu không vượt quá 100 máy cho cả hai loại. Chủ cửa hàng cần đầu tư mua mỗi loại bao nhiêu máy để thu được lợi nhuận lớn nhất?",
    storyHtml: `
      <p>Trong năm nay, một cửa hàng điện lạnh dự định kinh doanh hai loại máy điều hoà: <strong>điều hoà hai chiều</strong> và <strong>điều hoà một chiều</strong> với số vốn ban đầu không vượt quá <strong>1,2 tỉ đồng</strong>.</p>
      <div style="margin: 12px 0; overflow-x: auto;">
        <table style="width: 100%; max-width: 540px; margin: 0 auto; border-collapse: collapse; text-align: center; border: 1.5px solid #cbd5e1; background: #f8fafc;">
          <thead>
            <tr style="background: #0284c7; color: white;">
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Loại máy điều hoà</th>
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Giá mua vào</th>
              <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">Lợi nhuận dự kiến</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: bold; color: #1e3a8a;">Điều hoà hai chiều</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">20 triệu đồng / máy</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #15803d; font-weight: bold;">3,5 triệu đồng / máy</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: bold; color: #0284c7;">Điều hoà một chiều</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">10 triệu đồng / máy</td>
              <td style="padding: 8px 12px; border: 1px solid #cbd5e1; color: #15803d; font-weight: bold;">2 triệu đồng / máy</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Theo khảo sát thị trường, số lượng điều hoà mà cửa hàng có thể bán được không vượt quá <strong>100 máy</strong> cho cả hai loại.</p>
      <p style="color: #0369a1; font-weight: 500; font-style: italic;">Chủ cửa hàng cần đầu tư mua bao nhiêu máy mỗi loại để thu được lợi nhuận lớn nhất?</p>
    `,
    audioUrl: "assets/audio/b10_4_hook.mp3",
    buttonLabel: "Nghe Thầy Sáng đặt vấn đề",
    voiceLabel: "Giọng đọc AI của ThS. Lương Thanh Sáng",
    question: "Số tiền vốn đầu tư và số lượng máy bán ra tạo thành những điều kiện ràng buộc toán học nào?"
  },

  sections:"""

t4 = re.sub(old_hook_b4_pattern, new_hook_b4, t4)
print("Updated hook in B4")

# 3. DOUBLE-SLASH ALL LATEX COMMANDS IN BOTH FILES
latex_commands = [
    'ne', 'quad', 'text', 'in', 'mathbb', 'iff', 'times', 'cdot',
    'dots', 'implies', 'mathbf', 'le', 'ge', 'begin', 'end',
    'frac', 'dfrac', 'sqrt', 'left', 'right', 'widehat', 'circ',
    'cases', 'array', 'to'
]

for cmd in latex_commands:
    # (?<!\\)\\cmd(?![a-zA-Z]) ensures exactly single backslash followed by cmd and not part of another word
    pat = r'(?<!\\)\\' + cmd + r'(?![a-zA-Z])'
    rep = r'\\\\' + cmd
    t3 = re.sub(pat, rep, t3)
    t4 = re.sub(pat, rep, t4)

with open('js/lesson-10-3-data.js', 'w', encoding='utf-8') as f:
    f.write(t3)
print("Saved js/lesson-10-3-data.js")

with open('js/lesson-10-4-data.js', 'w', encoding='utf-8') as f:
    f.write(t4)
print("Saved js/lesson-10-4-data.js")
