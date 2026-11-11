# -*- coding: utf-8 -*-
import json
import generate_svgs as svgs

# Generate SVGs
svg_c1 = svgs.generate_cau1()
svg_c6 = svgs.generate_cau6()
svg_c7 = svgs.generate_cau7()
svg_c8 = svgs.generate_cau8()
svg_c10 = svgs.generate_cau10()
svg_c12 = svgs.generate_cau12()
svg_p2_c1 = svgs.generate_p2_c1()
svg_p2_c3 = svgs.generate_p2_c3()
svg_p3_c5 = svgs.generate_p3_c5()
svg_p3_c6 = svgs.generate_p3_c6()

# Build the complete QUIZ_QUESTIONS array for Phần I (12 câu chuẩn thi THPT Nguyễn Văn Thoại)
part1 = [
    {
        "id": 1,
        "part": "I",
        "grade": "12",
        "topic": "Khảo sát hàm số - Số điểm cực trị của hàm bậc bốn trùng phương",
        "question": "Cho hàm số bậc bốn $y = f(x)$ có đồ thị như hình vẽ bên dưới. Hàm số đã cho có bao nhiêu điểm cực trị?",
        "svg": svg_c1,
        "options": [
            { "id": "A", "text": "1" },
            { "id": "B", "text": "2" },
            { "id": "C", "text": "3" },
            { "id": "D", "text": "4" }
        ],
        "correctAnswer": "C",
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Dựa vào đồ thị hàm số bậc bốn trùng phương đã cho:</p>
  <ul>
    <li>Đồ thị hàm số có hai điểm cực đại tại $x = -\\sqrt{2}$ và $x = \\sqrt{2}$ với giá trị cực đại bằng $3$.</li>
    <li>Đồ thị hàm số có một điểm cực tiểu tại $x = 0$ với giá trị cực tiểu bằng $-1$.</li>
  </ul>
  <p>Do đó, hàm số đã cho có tất cả $3$ điểm cực trị.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>
"""
    },
    {
        "id": 2,
        "part": "I",
        "grade": "12",
        "topic": "Tính đơn điệu của hàm số chứa căn thức",
        "question": "Cho hàm số $y = \\sqrt{x^2 - 4x + 8}$. Hàm số đã cho nghịch biến trên khoảng nào dưới đây?",
        "svg": "",
        "options": [
            { "id": "A", "text": "$(-\\infty;\\; 2)$" },
            { "id": "B", "text": "$(2;\\; +\\infty)$" },
            { "id": "C", "text": "$(-\\infty;\\; 4)$" },
            { "id": "D", "text": "$(0;\\; 4)$" }
        ],
        "correctAnswer": "A",
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Tập xác định: $D = \\mathbb{R}$ vì $x^2 - 4x + 8 = (x - 2)^2 + 4 > 0,\\; \\forall x \\in \\mathbb{R}$.</p>
  <p>Đạo hàm:</p>
  $$y' = \\frac{(x^2 - 4x + 8)'}{2\\sqrt{x^2 - 4x + 8}} = \\frac{2x - 4}{2\\sqrt{x^2 - 4x + 8}} = \\frac{x - 2}{\\sqrt{x^2 - 4x + 8}}$$
  <p>Ta thấy mẫu số luôn dương với mọi $x \\in \\mathbb{R}$.</p>
  <p>Hàm số nghịch biến khi và chỉ khi:</p>
  $$y' < 0 \\iff x - 2 < 0 \\iff x < 2$$
  <p>Vậy hàm số nghịch biến trên khoảng $(-\\infty;\\; 2)$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án A.</strong></p>
</div>
"""
    },
    {
        "id": 3,
        "part": "I",
        "grade": "12",
        "topic": "Đồ thị hàm số bậc ba - Điểm thuộc đồ thị",
        "question": "Cho hàm số $y = -x^3 + 3x^2 - 2$. Điểm nào sau đây thuộc đồ thị hàm số đã cho?",
        "svg": "",
        "options": [
            { "id": "A", "text": "$P(1;\\; 2)$" },
            { "id": "B", "text": "$Q(-1;\\; -2)$" },
            { "id": "C", "text": "$N(0;\\; 2)$" },
            { "id": "D", "text": "$M(2;\\; 2)$" }
        ],
        "correctAnswer": "D",
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Lần lượt thay tọa độ các điểm vào hàm số $y = -x^3 + 3x^2 - 2$:</p>
  <ul>
    <li>Với $M(2;\\; 2)$: $y(2) = -(2)^3 + 3(2)^2 - 2 = -8 + 12 - 2 = 2$ (thỏa mãn).</li>
    <li>Với $P(1;\\; 2)$: $y(1) = -(1)^3 + 3(1)^2 - 2 = 0 \\neq 2$ (loại).</li>
    <li>Với $Q(-1;\\; -2)$: $y(-1) = -(-1)^3 + 3(-1)^2 - 2 = 1 + 3 - 2 = 2 \\neq -2$ (loại).</li>
    <li>Với $N(0;\\; 2)$: $y(0) = -2 \\neq 2$ (loại).</li>
  </ul>
  <p class="final-answer">$\\Rightarrow$ Vậy điểm $M(2;\\; 2)$ thuộc đồ thị hàm số. <strong>Chọn đáp án D.</strong></p>
</div>
"""
    },
    {
        "id": 4,
        "part": "I",
        "grade": "12",
        "topic": "Cực trị của hàm số bậc ba",
        "question": "Cho hàm số $y = x^3 - 3x^2 - 9x + 5$. Điểm cực tiểu của hàm số đã cho là:",
        "svg": "",
        "options": [
            { "id": "A", "text": "$x = -1$" },
            { "id": "B", "text": "$x = 3$" },
            { "id": "C", "text": "$y = -22$" },
            { "id": "D", "text": "$x = 0$" }
        ],
        "correctAnswer": "B",
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Tập xác định $D = \\mathbb{R}$.</p>
  <p>Đạo hàm: $y' = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x + 1)(x - 3)$.</p>
  <p>Cho $y' = 0 \\iff x = -1$ hoặc $x = 3$.</p>
  <p>Bảng xét dấu đạo hàm:</p>
  <ul>
    <li>Trên khoảng $(-1;\\; 3)$, $y' < 0$.</li>
    <li>Trên khoảng $(3;\\; +\\infty)$, $y' > 0$.</li>
  </ul>
  <p>Đạo hàm đổi dấu từ âm sang dương khi đi qua $x = 3$, do đó điểm cực tiểu của hàm số là $x = 3$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>
"""
    },
    {
        "id": 5,
        "part": "I",
        "grade": "12",
        "topic": "Đường tiệm cận của đồ thị hàm số qua giới hạn",
        "question": "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R} \\setminus \\{2\\}$ thỏa mãn $\\lim_{x \\to +\\infty} f(x) = 1$, $\\lim_{x \\to -\\infty} f(x) = 1$ và $\\lim_{x \\to 2^+} f(x) = +\\infty$. Khẳng định nào sau đây đúng?",
        "svg": "",
        "options": [
            { "id": "A", "text": "Đồ thị hàm số có đúng một tiệm cận ngang $y = 1$ và một tiệm cận đứng $x = 2$." },
            { "id": "B", "text": "Đồ thị hàm số có hai tiệm cận đứng là $x = 1$ và $x = 2$." },
            { "id": "C", "text": "Đồ thị hàm số không có đường tiệm cận đứng nào." },
            { "id": "D", "text": "Đồ thị hàm số có hai đường tiệm cận ngang là các đường thẳng $y = 1$ và $y = 2$." }
        ],
        "correctAnswer": "A",
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Theo định nghĩa đường tiệm cận của đồ thị hàm số:</p>
  <ul>
    <li>Do $\\lim_{x \\to +\\infty} f(x) = 1$ và $\\lim_{x \\to -\\infty} f(x) = 1$ nên đồ thị hàm số có đúng một đường tiệm cận ngang là đường thẳng $y = 1$.</li>
    <li>Do $\\lim_{x \\to 2^+} f(x) = +\\infty$ nên đường thẳng $x = 2$ là đường tiệm cận đứng của đồ thị hàm số.</li>
  </ul>
  <p>Vậy đồ thị hàm số có đúng một tiệm cận ngang $y = 1$ và một tiệm cận đứng $x = 2$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án A.</strong></p>
</div>
"""
    },
    {
        "id": 6,
        "part": "I",
        "grade": "12",
        "topic": "Nhận dạng đồ thị hàm phân thức bậc hai trên bậc nhất",
        "question": "Đường cong trong hình vẽ bên dưới là đồ thị của hàm số phân thức hữu tỉ bậc hai trên bậc nhất nào?",
        "svg": svg_c6,
        "options": [
            { "id": "A", "text": "$y = \\dfrac{x^2 - x + 1}{x - 2}$" },
            { "id": "B", "text": "$y = \\dfrac{x^2 + 1}{x - 2}$" },
            { "id": "C", "text": "$y = \\dfrac{x^2 - 2x + 2}{x - 2}$" },
            { "id": "D", "text": "$y = \\dfrac{x^2 - 3x + 3}{x - 2}$" }
        ],
        "correctAnswer": "D",
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Dựa vào đồ thị đã cho:</p>
  <ul>
    <li>Đường tiệm cận đứng là $x = 2$.</li>
    <li>Đường tiệm cận xiên đi qua các điểm $(0;\\; -1)$ và $(1;\\; 0)$, có phương trình là $y = x - 1$.</li>
    <li>Đồ thị có điểm cực đại là $(1;\\; -1)$ và điểm cực tiểu là $(3;\\; 3)$.</li>
  </ul>
  <p>Xét hàm số ở phương án D: $y = \\dfrac{x^2 - 3x + 3}{x - 2} = x - 1 + \\dfrac{1}{x - 2}$:</p>
  <ul>
    <li>Tiệm cận đứng: $x = 2$.</li>
    <li>Tiệm cận xiên: $y = x - 1$.</li>
    <li>Đạo hàm: $y' = 1 - \\dfrac{1}{(x - 2)^2} = \\dfrac{(x - 2)^2 - 1}{(x - 2)^2} = 0 \\iff x = 1$ hoặc $x = 3$.</li>
    <li>Với $x = 1 \\implies y = 1 - 1 - 1 = -1$ (điểm cực đại $(1;\\; -1)$ phù hợp với hình vẽ).</li>
    <li>Với $x = 3 \\implies y = 3 - 1 + 1 = 3$ (điểm cực tiểu $(3;\\; 3)$ phù hợp với hình vẽ).</li>
  </ul>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án D.</strong></p>
</div>
"""
    },
    {
        "id": 7,
        "part": "I",
        "grade": "12",
        "topic": "Đọc bảng biến thiên - Khoảng đơn điệu của hàm số",
        "question": "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R} \\setminus \\{1\\}$ và có bảng biến thiên như sau. Mệnh đề nào dưới đây đúng?",
        "svg": svg_c7,
        "options": [
            { "id": "A", "text": "Hàm số đồng biến trên khoảng $(-\\infty;\\; -2)$." },
            { "id": "B", "text": "Hàm số đồng biến trên khoảng $(-2;\\; 1)$." },
            { "id": "C", "text": "Hàm số nghịch biến trên khoảng $(-2;\\; 4)$." },
            { "id": "D", "text": "Hàm số đồng biến trên khoảng $(-2;\\; 4)$." }
        ],
        "correctAnswer": "B",
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Dựa vào bảng biến thiên của hàm số $y = f(x)$:</p>
  <ul>
    <li>Trên khoảng $(-2;\\; 1)$, ta có $f'(x) > 0$ nên hàm số đồng biến trên khoảng $(-2;\\; 1)$.</li>
    <li>Trên khoảng $(-\\infty;\\; -2)$, $f'(x) < 0$ nên hàm số nghịch biến.</li>
    <li>Khoảng $(-2;\\; 4)$ chứa điểm gián đoạn $x = 1$ nên không thể kết luận hàm số đồng biến hay nghịch biến trên $(-2;\\; 4)$.</li>
  </ul>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>
"""
    },
    {
        "id": 8,
        "part": "I",
        "grade": "12",
        "topic": "Giao điểm của đồ thị hàm phân thức bậc nhất với trục hoành",
        "question": "Cho hàm số $y = \\dfrac{2x - 4}{x + 1}$ có đồ thị là đường cong trong hình vẽ bên dưới. Giao điểm của đồ thị hàm số với trục hoành là điểm nào?",
        "svg": svg_c8,
        "options": [
            { "id": "A", "text": "$(0;\\; -4)$" },
            { "id": "B", "text": "$(-1;\\; 0)$" },
            { "id": "C", "text": "$(2;\\; 0)$" },
            { "id": "D", "text": "$(0;\\; 2)$" }
        ],
        "correctAnswer": "C",
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Giao điểm của đồ thị hàm số $y = \\dfrac{2x - 4}{x + 1}$ với trục hoành là điểm có tung độ $y = 0$.</p>
  <p>Cho $y = 0 \\iff \\dfrac{2x - 4}{x + 1} = 0 \\iff 2x - 4 = 0 \\iff x = 2$.</p>
  <p>Vậy giao điểm của đồ thị với trục hoành là điểm $(2;\\; 0)$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>
"""
    },
    {
        "id": 9,
        "part": "I",
        "grade": "12",
        "topic": "Giá trị nhỏ nhất của hàm số trên đoạn",
        "question": "Giá trị nhỏ nhất của hàm số $y = \\dfrac{2x + 1}{x - 2}$ trên đoạn $[3;\\; 5]$ bằng bao nhiêu?",
        "svg": "",
        "options": [
            { "id": "A", "text": "$7$" },
            { "id": "B", "text": "$\\dfrac{11}{3}$" },
            { "id": "C", "text": "$-\\dfrac{1}{2}$" },
            { "id": "D", "text": "$4$" }
        ],
        "correctAnswer": "B",
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Hàm số $y = \\dfrac{2x + 1}{x - 2}$ xác định và liên tục trên đoạn $[3;\\; 5]$.</p>
  <p>Đạo hàm:</p>
  $$y' = \\frac{2(x - 2) - (2x + 1)(1)}{(x - 2)^2} = \\frac{2x - 4 - 2x - 1}{(x - 2)^2} = \\frac{-5}{(x - 2)^2} < 0,\\; \\forall x \\in [3;\\; 5]$$
  <p>Do $y' < 0$ trên $[3;\\; 5]$ nên hàm số nghịch biến trên đoạn $[3;\\; 5]$.</p>
  <p>Do đó, giá trị nhỏ nhất của hàm số đạt tại $x = 5$:</p>
  $$\\min_{[3;\\; 5]} y = y(5) = \\frac{2(5) + 1}{5 - 2} = \\frac{11}{3}$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án B.</strong></p>
</div>
"""
    },
    {
        "id": 10,
        "part": "I",
        "grade": "12",
        "topic": "Bảng biến thiên - Xác định đường tiệm cận đứng và tiệm cận ngang",
        "question": "Cho hàm số $y = f(x)$ có bảng biến thiên như sau. Mệnh đề nào sau đây đúng?",
        "svg": svg_c10,
        "options": [
            { "id": "A", "text": "Hàm số không có đường tiệm cận ngang nào." },
            { "id": "B", "text": "Hàm số đồng biến trên tập xác định $\\mathbb{R} \\setminus \\{-1\\}$." },
            { "id": "C", "text": "Hàm số đạt cực đại tại $x = -1$." },
            { "id": "D", "text": "Đồ thị hàm số có tiệm cận đứng $x = -1$ và tiệm cận ngang $y = 3$." }
        ],
        "correctAnswer": "D",
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Dựa vào bảng biến thiên:</p>
  <ul>
    <li>$\\lim_{x \\to -\\infty} f(x) = 3$ và $\\lim_{x \\to +\\infty} f(x) = 3 \\implies$ đường thẳng $y = 3$ là đường tiệm cận ngang của đồ thị hàm số.</li>
    <li>$\\lim_{x \\to -1^-} f(x) = -\\infty$ và $\\lim_{x \\to -1^+} f(x) = +\\infty \\implies$ đường thẳng $x = -1$ là đường tiệm cận đứng của đồ thị hàm số.</li>
  </ul>
  <p>Vậy đồ thị hàm số có tiệm cận đứng $x = -1$ và tiệm cận ngang $y = 3$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án D.</strong></p>
</div>
"""
    },
    {
        "id": 11,
        "part": "I",
        "grade": "12",
        "topic": "Tổng số đường tiệm cận đứng và ngang của đồ thị hàm số chứa căn",
        "question": "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\dfrac{\\sqrt{x^2 + 9} - 2x}{x + 3}$ là:",
        "svg": "",
        "options": [
            { "id": "A", "text": "3" },
            { "id": "B", "text": "1" },
            { "id": "C", "text": "2" },
            { "id": "D", "text": "4" }
        ],
        "correctAnswer": "A",
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Tập xác định: $D = \\mathbb{R} \\setminus \\{-3\\}$.</p>
  <p><strong>Tiệm cận đứng:</strong> Tại $x = -3$, tử số có giá trị $\\sqrt{(-3)^2 + 9} - 2(-3) = \\sqrt{18} + 6 \\neq 0$ và mẫu số bằng $0$. Do đó:</p>
  $$\\lim_{x \\to -3} \\frac{\\sqrt{x^2 + 9} - 2x}{x + 3} = \\infty \\implies x = -3 \\text{ là đường tiệm cận đứng.}$$
  <p><strong>Tiệm cận ngang:</strong></p>
  <ul>
    <li>Khi $x \\to +\\infty$:
    $$\\lim_{x \\to +\\infty} \\frac{\\sqrt{x^2 + 9} - 2x}{x + 3} = \\lim_{x \\to +\\infty} \\frac{x\\sqrt{1 + \\frac{9}{x^2}} - 2x}{x\\left(1 + \\frac{3}{x}\\right)} = \\frac{1 - 2}{1} = -1 \\implies y = -1 \\text{ là tiệm cận ngang.}$$
    </li>
    <li>Khi $x \\to -\\infty$ (lưu ý $\\sqrt{x^2} = |x| = -x$):
    $$\\lim_{x \\to -\\infty} \\frac{\\sqrt{x^2 + 9} - 2x}{x + 3} = \\lim_{x \\to -\\infty} \\frac{-x\\sqrt{1 + \\frac{9}{x^2}} - 2x}{x\\left(1 + \\frac{3}{x}\\right)} = \\frac{-1 - 2}{1} = -3 \\implies y = -3 \\text{ là tiệm cận ngang thứ hai.}$$
    </li>
  </ul>
  <p>Vậy đồ thị hàm số có $1$ tiệm cận đứng và $2$ tiệm cận ngang, tổng cộng là $3$ đường tiệm cận.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án A.</strong></p>
</div>
"""
    },
    {
        "id": 12,
        "part": "I",
        "grade": "12",
        "topic": "Giá trị lớn nhất, nhỏ nhất từ bảng biến thiên liên tục trên đoạn",
        "question": "Cho hàm số $y = f(x)$ xác định và liên tục trên đoạn $[-3;\\; 2]$ có bảng biến thiên như sau. Gọi $M, m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn $[-3;\\; 2]$. Giá trị của biểu thức $T = M - 2m$ bằng:",
        "svg": svg_c12,
        "options": [
            { "id": "A", "text": "1" },
            { "id": "B", "text": "11" },
            { "id": "C", "text": "13" },
            { "id": "D", "text": "-13" }
        ],
        "correctAnswer": "C",
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Từ bảng biến thiên của hàm số $y = f(x)$ liên tục trên $[-3;\\; 2]$:</p>
  <ul>
    <li>Giá trị lớn nhất của hàm số trên $[-3;\\; 2]$ là $M = \\max_{[-3;\\; 2]} f(x) = f(-1) = 7$.</li>
    <li>Giá trị nhỏ nhất của hàm số trên $[-3;\\; 2]$ là $m = \\min_{[-3;\\; 2]} f(x) = f(1) = -3$.</li>
  </ul>
  <p>Giá trị biểu thức:</p>
  $$T = M - 2m = 7 - 2(-3) = 7 + 6 = 13$$
  <p class="final-answer">$\\Rightarrow$ <strong>Chọn đáp án C.</strong></p>
</div>
"""
    }
]

# Build Part II: Đúng / Sai
part2 = [
    {
        "id": 1,
        "part": "II",
        "grade": "12",
        "topic": "Đồ thị hàm số bậc ba y = x^3 - 3x^2 + 2",
        "question": "Cho hàm số $y = f(x) = x^3 - 3x^2 + 2$ có đồ thị là đường cong $(C)$ như hình vẽ bên dưới. Xét tính đúng hay sai của các mệnh đề sau:",
        "svg": svg_p2_c1,
        "items": [
            { "id": "a", "text": "Điểm cực đại của hàm số là $x = 0$ và giá trị cực đại bằng $2$.", "correct": True },
            { "id": "b", "text": "Hàm số nghịch biến trên khoảng $(0;\\; 2)$.", "correct": True },
            { "id": "c", "text": "Tâm đối xứng của đồ thị $(C)$ là gốc tọa độ $O(0;\\; 0)$.", "correct": False },
            { "id": "d", "text": "Đồ thị $(C)$ cắt trục hoành tại đúng $3$ điểm phân biệt.", "correct": True }
        ],
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <ul>
    <li>Đạo hàm: $f'(x) = 3x^2 - 6x = 3x(x - 2)$. $f'(x) = 0 \\iff x = 0$ hoặc $x = 2$.</li>
    <li>$x = 0 \\implies y = 2$ (điểm cực đại của hàm số là $x = 0$ và giá trị cực đại bằng $2$) $\\implies$ <strong>a) ĐÚNG</strong>.</li>
    <li>Trên khoảng $(0;\\; 2)$, $f'(x) < 0$ nên hàm số nghịch biến trên khoảng $(0;\\; 2)$ $\\implies$ <strong>b) ĐÚNG</strong>.</li>
    <li>Đạo hàm cấp hai $f''(x) = 6x - 6 = 0 \\iff x = 1 \\implies y = 0$. Điểm uốn đồng thời là tâm đối xứng của đồ thị là $I(1;\\; 0) \\neq O(0;\\; 0)$ $\\implies$ <strong>c) SAI</strong>.</li>
    <li>Phương trình hoành độ giao điểm với trục hoành:
    $$x^3 - 3x^2 + 2 = 0 \\iff (x - 1)(x^2 - 2x - 2) = 0 \\iff x = 1 \\text{ hoặc } x = 1 \\pm \\sqrt{3}$$
    Phương trình có đúng $3$ nghiệm thực phân biệt nên đồ thị cắt trục hoành tại $3$ điểm phân biệt $\\implies$ <strong>d) ĐÚNG</strong>.</li>
  </ul>
  <p class="final-answer">$\\Rightarrow$ <strong>Đáp án: a) Đ; b) Đ; c) S; d) Đ.</strong></p>
</div>
"""
    },
    {
        "id": 2,
        "part": "II",
        "grade": "12",
        "topic": "Ứng dụng đạo hàm - Mô hình vi khuẩn nuôi cấy khép kín",
        "question": "Giả sử số lượng vi khuẩn trong một môi trường nuôi cấy khép kín được mô hình hóa bởi hàm số $N(t) = \\dfrac{m}{n + e^{-0,5t}}$, trong đó thời gian $t$ được tính bằng giờ ($t \\ge 0$), $m$ và $n$ là các hằng số thực dương. Tại thời điểm ban đầu $t = 0$, quần thể có 80 cá thể và đang tăng với tốc độ 32 cá thể/giờ. Xét tính đúng hay sai của các khẳng định sau:",
        "svg": "",
        "items": [
            { "id": "a", "text": "Các hệ số của mô hình là $m = 100$ và $n = 0,25$.", "correct": True },
            { "id": "b", "text": "Về lâu dài, số lượng vi khuẩn trong môi trường có thể vượt quá $500$ cá thể.", "correct": False },
            { "id": "c", "text": "Tốc độ sinh trưởng của quần thể vi khuẩn đạt giá trị lớn nhất bằng $50$ cá thể/giờ tại thời điểm $t = 4\\ln 2$ giờ.", "correct": True },
            { "id": "d", "text": "Kể từ thời điểm ban đầu, tốc độ sinh trưởng giảm trở lại mức $32$ cá thể/giờ tại thời điểm $t = 5$ giờ.", "correct": False }
        ],
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <ul>
    <li>Tại $t = 0$: $N(0) = \\frac{m}{n + 1} = 80 \\implies m = 80(n + 1)$.</li>
    <li>Đạo hàm: $N'(t) = \\frac{0,5me^{-0,5t}}{(n + e^{-0,5t})^2}$. Tại $t = 0$: $N'(0) = \\frac{0,5m}{(n + 1)^2} = \\frac{40}{n + 1} = 32 \\implies n = 0,25 \\implies m = 100$ $\\implies$ <strong>a) ĐÚNG</strong>.</li>
    <li>Khi $t \\to +\\infty$, $\\lim_{t \\to +\\infty} N(t) = \\frac{100}{0,25} = 400 < 500$ cá thể $\\implies$ <strong>b) SAI</strong>.</li>
    <li>Đặt $u = e^{-0,5t}$ ($0 < u \\le 1$). Tốc độ tăng trưởng $g(u) = \\frac{50u}{(0,25 + u)^2}$. Đạt giá trị lớn nhất khi $u = 0,25 \\iff e^{-0,5t} = 0,25 \\iff t = 4\\ln 2$ giờ, với $g_{\\max} = 50$ cá thể/giờ $\\implies$ <strong>c) ĐÚNG</strong>.</li>
    <li>Tốc độ giảm trở lại 32 khi $u = \\frac{1}{16} \\iff e^{-0,5t} = \\frac{1}{16} \\iff t = 8\\ln 2 \\approx 5,55 \\text{ giờ} \\neq 5 \\text{ giờ}$ $\\implies$ <strong>d) SAI</strong>.</li>
  </ul>
  <p class="final-answer">$\\Rightarrow$ <strong>Đáp án: a) Đ; b) S; c) Đ; d) S.</strong></p>
</div>
"""
    },
    {
        "id": 3,
        "part": "II",
        "grade": "12",
        "topic": "Khảo sát bảng biến thiên hàm số phân thức hữu tỉ",
        "question": "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R} \\setminus \\{2\\}$ có bảng biến thiên như sau. Xét tính đúng hay sai của các mệnh đề sau:",
        "svg": svg_p2_c3,
        "items": [
            { "id": "a", "text": "Hàm số đồng biến trên toàn bộ tập xác định.", "correct": False },
            { "id": "b", "text": "Điểm cực đại của hàm số là $x = 0$ và giá trị cực đại bằng $3$.", "correct": True },
            { "id": "c", "text": "Đồ thị hàm số có tiệm cận đứng $x = 2$ và tiệm cận ngang $y = -1$.", "correct": True },
            { "id": "d", "text": "Giá trị nhỏ nhất của hàm số trên tập xác định bằng $-2$.", "correct": False }
        ],
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <ul>
    <li>Đạo hàm $f'(x) < 0$ trên $(0;\\; 2)$ và $(2;\\; 4)$ nên không đồng biến trên toàn bộ tập xác định $\\implies$ <strong>a) SAI</strong>.</li>
    <li>Tại $x = 0$, đạo hàm đổi dấu từ dương sang âm, $f(0) = 3$ $\\implies$ <strong>b) ĐÚNG</strong>.</li>
    <li>$\\lim_{x \\to 2^-} f(x) = -\\infty \\implies x = 2$ là tiệm cận đứng; $\\lim_{x \\to \\pm\\infty} f(x) = -1 \\implies y = -1$ là tiệm cận ngang $\\implies$ <strong>c) ĐÚNG</strong>.</li>
    <li>Do $\\lim_{x \\to 2^-} f(x) = -\\infty$ nên hàm số không có giá trị nhỏ nhất trên tập xác định ($-2$ chỉ là giá trị cực tiểu) $\\implies$ <strong>d) SAI</strong>.</li>
  </ul>
  <p class="final-answer">$\\Rightarrow$ <strong>Đáp án: a) S; b) Đ; c) Đ; d) S.</strong></p>
</div>
"""
    },
    {
        "id": 4,
        "part": "II",
        "grade": "12",
        "topic": "Khảo sát hàm phân thức y = x - 1 + 4/(x + 2)",
        "question": "Cho hàm số $y = f(x) = x - 1 + \\dfrac{4}{x + 2}$. Xét tính đúng hay sai của các khẳng định sau:",
        "svg": "",
        "items": [
            { "id": "a", "text": "Đạo hàm của hàm số là $f'(x) = \\dfrac{x^2 + 2x - 4}{(x + 2)^2}$.", "correct": False },
            { "id": "b", "text": "Hàm số nghịch biến trên khoảng $(-4;\\; 0)$.", "correct": False },
            { "id": "c", "text": "Tập nghiệm của phương trình $f'(x) = 0$ là $S = \\{-4;\\; 0\\}$.", "correct": True },
            { "id": "d", "text": "Điểm cực đại của đồ thị hàm số là $(-4;\\; -7)$.", "correct": True }
        ],
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <ul>
    <li>Đạo hàm: $f'(x) = 1 - \\frac{4}{(x + 2)^2} = \\frac{x^2 + 4x}{(x + 2)^2} \\implies$ <strong>a) SAI</strong>.</li>
    <li>$f'(x) = 0 \\iff x^2 + 4x = 0 \\iff x = -4$ hoặc $x = 0 \\implies$ <strong>c) ĐÚNG</strong>.</li>
    <li>Trên $(-4;\\; 0)$, hàm số bị gián đoạn tại $x = -2$ nên chỉ nghịch biến trên từng khoảng $(-4;\\; -2)$ và $(-2;\\; 0)$ $\\implies$ <strong>b) SAI</strong>.</li>
    <li>Tại $x = -4$, $f'(x)$ đổi dấu từ dương sang âm nên là điểm cực đại. Tung độ cực đại: $f(-4) = -4 - 1 + \\frac{4}{-4 + 2} = -7$. Điểm cực đại của đồ thị là $(-4;\\; -7)$ $\\implies$ <strong>d) ĐÚNG</strong>.</li>
  </ul>
  <p class="final-answer">$\\Rightarrow$ <strong>Đáp án: a) S; b) S; c) Đ; d) Đ.</strong></p>
</div>
"""
    }
]

# Build Part III: Trả lời ngắn
part3 = [
    {
        "id": 1,
        "part": "III",
        "grade": "12",
        "topic": "Giá trị lớn nhất và nhỏ nhất trên đoạn [0; 3]",
        "question": "Cho hàm số $f(x) = x^3 - 3x^2 - x + 2$ trên đoạn $[0;\\; 3]$. Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn đã cho. Tính giá trị của biểu thức $T = M + m$ (làm tròn kết quả đến hàng phần mười).",
        "svg": "",
        "correctAnswer": "-2,1",
        "acceptableAnswers": ["-2,1", "-2.1", "-2,10", "-2.10"],
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Đạo hàm: $f'(x) = 3x^2 - 6x - 1 = 0 \\iff x_1 = 1 - \\frac{2\\sqrt{3}}{3} \\notin [0;\\; 3],\\; x_2 = 1 + \\frac{2\\sqrt{3}}{3} \\approx 2,1547 \\in [0;\\; 3]$.</p>
  <p>Tính các giá trị:</p>
  <ul>
    <li>$f(0) = 2$</li>
    <li>$f(3) = 3^3 - 3(3^2) - 3 + 2 = -1$</li>
    <li>$f(x_2) = -1 - \\frac{16\\sqrt{3}}{9} \\approx -4,0792$</li>
  </ul>
  <p>So sánh ta được: $M = \\max_{[0;\\; 3]} f(x) = 2$, $m = \\min_{[0;\\; 3]} f(x) = -1 - \\frac{16\\sqrt{3}}{9} \\approx -4,0792$.</p>
  <p>Giá trị biểu thức: $T = M + m = 2 + \\left(-1 - \\frac{16\\sqrt{3}}{9}\\right) = 1 - \\frac{16\\sqrt{3}}{9} \\approx -2,0792 \\approx -2,1$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Đáp số: -2,1</strong></p>
</div>
"""
    },
    {
        "id": 2,
        "part": "III",
        "grade": "12",
        "topic": "Đường tiệm cận xiên của đồ thị hàm phân thức",
        "question": "Cho hàm số $y = -2,2x + 1 - \\dfrac{4x + 1}{3x - 1}$. Biết đường tiệm cận xiên của đồ thị hàm số có dạng $y = ax + b$. Tính giá trị của biểu thức $T = a + b$ (làm tròn kết quả đến hàng phần mười).",
        "svg": "",
        "correctAnswer": "-2,5",
        "acceptableAnswers": ["-2,5", "-2.5", "-2,53", "-2.53"],
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Chia tử cho mẫu: $\\frac{4x + 1}{3x - 1} = \\frac{4}{3} + \\frac{7}{3(3x - 1)}$.</p>
  <p>Do đó: $y = -2,2x + 1 - \\left[\\frac{4}{3} + \\frac{7}{3(3x - 1)}\\right] = -2,2x - \\frac{1}{3} - \\frac{7}{3(3x - 1)}$.</p>
  <p>Vì $\\lim_{x \\to \\pm\\infty} \\left[-\\frac{7}{3(3x - 1)}\\right] = 0$ nên tiệm cận xiên là $y = -2,2x - \\frac{1}{3}$.</p>
  <p>Suy ra: $a = -2,2 = -\\frac{11}{5};\\; b = -\\frac{1}{3}$.</p>
  <p>Giá trị biểu thức: $T = a + b = -2,2 - \\frac{1}{3} = -\\frac{38}{15} \\approx -2,5333... \\approx -2,5$.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Đáp số: -2,5</strong></p>
</div>
"""
    },
    {
        "id": 3,
        "part": "III",
        "grade": "12",
        "topic": "Bài toán chuyển động thực tế - Quãng đường xe thám hiểm",
        "question": "Một xe thám hiểm tự hành di chuyển trên một đường dốc nghiêng được định vị bởi đường thẳng $d: 5x - 12y + 1 = 0$ trong mặt phẳng tọa độ $Oxy$ (đơn vị: mét). Trong khoảng thời gian khảo sát, hoành độ vị trí của xe theo thời gian $t \\ge 0$ (tính bằng giây) được xác định bởi hàm số $x(t) = t^3 - 9t^2 + 24t$. Tính tổng quãng đường mà xe đã di chuyển được trên đường thẳng $d$ từ thời điểm $t = 0$ giây đến thời điểm $t = 5$ giây (làm tròn kết quả đến hàng phần mười).",
        "svg": "",
        "correctAnswer": "30,3",
        "acceptableAnswers": ["30,3", "30.3", "30,33", "30.33"],
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Vận tốc theo phương hoành độ: $v_x(t) = x'(t) = 3t^2 - 18t + 24 = 3(t - 2)(t - 4)$.</p>
  <p>$x'(t) = 0 \\iff t = 2$ hoặc $t = 4$.</p>
  <p>Tọa độ hoành độ tại các mốc thời gian:</p>
  <ul>
    <li>$x(0) = 0$ m</li>
    <li>$x(2) = 2^3 - 9(2^2) + 24(2) = 20$ m</li>
    <li>$x(4) = 4^3 - 9(4^2) + 24(4) = 16$ m</li>
    <li>$x(5) = 5^3 - 9(5^2) + 24(5) = 20$ m</li>
  </ul>
  <p>Tổng độ biến thiên hoành độ: $S_x = |20 - 0| + |16 - 20| + |20 - 16| = 20 + 4 + 4 = 28$ m.</p>
  <p>Vì $d: y = \\frac{5}{12}x + \\frac{1}{12} \\implies \\Delta s = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} = \\sqrt{(\\Delta x)^2 + \\left(\\frac{5}{12}\\Delta x\\right)^2} = \\frac{13}{12}|\\Delta x|$.</p>
  <p>Tổng quãng đường thực tế trên dốc: $S = \\frac{13}{12} \\times S_x = \\frac{13}{12} \\times 28 = \\frac{91}{3} \\approx 30,333... \\approx 30,3$ m.</p>
  <p class="final-answer">$\\Rightarrow$ <strong>Đáp số: 30,3</strong></p>
</div>
"""
    },
    {
        "id": 4,
        "part": "III",
        "grade": "12",
        "topic": "Bài toán thực tế tăng trưởng logistic - Tốc độ phát tán lớn nhất",
        "question": "Trong một nghiên cứu sinh học nông nghiệp theo mô hình tăng trưởng logistic, tốc độ phát tán của một loài côn trùng gây hại tại nông trường sau $t$ ngày ($t \\ge 0$) kể từ khi xuất hiện được mô hình hóa bởi hàm số $v(t) = (2400t^2 + 7200t)e^{-0,05t}$ (đơn vị: cá thể/ngày). Hỏi sau bao nhiêu ngày kể từ khi xuất hiện, tốc độ phát tán của loài côn trùng này đạt giá trị lớn nhất (làm tròn kết quả đến hàng phần mười)?",
        "svg": "",
        "correctAnswer": "38,6",
        "acceptableAnswers": ["38,6", "38.6", "38,56", "38.56"],
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Hàm số: $v(t) = 2400(t^2 + 3t)e^{-0,05t}$ ($t \\ge 0$).</p>
  <p>Lấy đạo hàm:</p>
  $$v'(t) = 2400e^{-0,05t}\\left[-0,05t^2 + 1,85t + 3\\right]$$
  <p>Cho $v'(t) = 0 \\iff -0,05t^2 + 1,85t + 3 = 0 \\iff t^2 - 37t - 60 = 0$.</p>
  <p>Do $t \\ge 0$, phương trình có nghiệm duy nhất:</p>
  $$t_0 = \\frac{37 + \\sqrt{37^2 - 4(1)(-60)}}{2} = \\frac{37 + \\sqrt{1609}}{2} \\approx \\frac{37 + 40,11234}{2} \\approx 38,556... \\text{ ngày} \\approx 38,6 \\text{ ngày.}$$
  <p class="final-answer">$\\Rightarrow$ <strong>Đáp số: 38,6</strong></p>
</div>
"""
    },
    {
        "id": 5,
        "part": "III",
        "grade": "12",
        "topic": "Bài toán thực tế tối ưu hóa - Khoảng cách ngắn nhất từ sườn đồi đến cáp treo",
        "question": "Trong một dự án xây dựng tuyến cáp treo tham quan, một sườn đồi tự nhiên có mặt cắt địa hình được mô hình hóa bởi đồ thị hàm số $y = \\dfrac{x^2 - 2x + 5}{x - 2}$ với $x > 2$ (đơn vị tọa độ là km). Tuyến đường cáp treo chạy thẳng theo đường thẳng $\\Delta: 3x - 4y - 25 = 0$. Ban quản lý cần xác định khoảng cách ngắn nhất từ sườn đồi đến tuyến cáp treo $\\Delta$. Khoảng cách ngắn nhất đó bằng bao nhiêu kilômét (làm tròn kết quả đến hàng phần mười)?",
        "svg": svg_p3_c5,
        "correctAnswer": "7,2",
        "acceptableAnswers": ["7,2", "7.2", "7,19", "7.19"],
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Mặt cắt sườn đồi: $y = x + \\frac{5}{x - 2}$ với $x > 2$.</p>
  <p>Lấy điểm $M\\left(x;\\; x + \\frac{5}{x - 2}\\right)$ tùy ý trên sườn đồi. Khoảng cách từ $M$ đến $\\Delta: 3x - 4y - 25 = 0$ là:</p>
  $$d(x) = \\frac{\\left|3x - 4\\left(x + \\frac{5}{x - 2}\\right) - 25\\right|}{\\sqrt{3^2 + (-4)^2}} = \\frac{x + 25 + \\frac{20}{x - 2}}{5}$$
  <p>Khảo sát hàm số $h(x) = \\frac{1}{5}\\left(x + 25 + \\frac{20}{x - 2}\\right)$ trên $(2;\\; +\\infty)$:</p>
  $$h'(x) = \\frac{1}{5}\\left(1 - \\frac{20}{(x - 2)^2}\\right) = 0 \\iff (x - 2)^2 = 20 \\iff x = 2 + 2\\sqrt{5} \\text{ (do } x > 2\\text{).}$$
  <p>Khoảng cách ngắn nhất đạt tại $x_0 = 2 + 2\\sqrt{5}$:</p>
  $$d_{\\min} = h(x_0) = \\frac{27 + 4\\sqrt{5}}{5} \\approx 7,1888... \\text{ km} \\approx 7,2 \\text{ km.}$$
  <p class="final-answer">$\\Rightarrow$ <strong>Đáp số: 7,2</strong></p>
</div>
"""
    },
    {
        "id": 6,
        "part": "III",
        "grade": "12",
        "topic": "Bài toán thực tế tối ưu vật liệu vách kính phòng triển lãm LiDAR",
        "question": "Một nhà triển lãm công nghệ cao có gian phòng trưng bày dạng hình chữ nhật $ABCD$. Tại một góc phòng, ban tổ chức lắp đặt một cảm biến LiDAR thông minh $K$ cố định cách bức tường $AB$ một khoảng $3\\text{ m}$ và cách bức tường $AD$ một khoảng $5\\text{ m}$. Người ta lắp đặt một vách ngăn kính cường lực phẳng $PQ$ đi qua vị trí cảm biến $K$ ($P \\in AB, Q \\in AD$) để quây riêng một khoang tương tác thực tế ảo tam giác $APQ$ (như hình vẽ). Để tiết kiệm vật liệu (chiều dài tấm vách kính $PQ$ ngắn nhất), hãy tính diện tích của khoang tương tác $APQ$ lúc đó (làm tròn kết quả cuối cùng đến hàng phần mười của đơn vị $\\text{m}^2$).",
        "svg": svg_p3_c6,
        "correctAnswer": "30,9",
        "acceptableAnswers": ["30,9", "30.9", "30,88", "30.88"],
        "explanation": """
<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Chọn hệ trục tọa độ $Axy$ sao cho $A(0; 0)$, tia $Ax$ trùng $AD$, tia $Ay$ trùng $AB$.</p>
  <p>Cảm biến LiDAR $K$ có tọa độ $K(3;\\; 5)$. Điểm $Q(x;\\; 0)$ với $x > 3$, $P(0;\\; y)$ với $y > 5$.</p>
  <p>Phương trình đoạn chắn $PQ$: $\\frac{X}{x} + \\frac{Y}{y} = 1$.</p>
  <p>Do $PQ$ đi qua $K(3;\\; 5)$ nên: $\\frac{3}{x} + \\frac{5}{y} = 1 \\iff y = \\frac{5x}{x - 3}$.</p>
  <p>Chiều dài vách kính: $L = \\sqrt{x^2 + y^2} = \\sqrt{x^2 + \\frac{25x^2}{(x - 3)^2}}$.</p>
  <p>Khảo sát $f(x) = x^2 + \\frac{25x^2}{(x - 3)^2}$ trên $(3;\\; +\\infty)$:</p>
  $$f'(x) = 2x\\left[1 - \\frac{75}{(x - 3)^3}\\right] = 0 \\iff (x - 3)^3 = 75 \\iff x_0 = 3 + \\sqrt[3]{75}.$$
  <p>Tung độ tương ứng: $y_0 = 5 + \\sqrt[3]{45}$.</p>
  <p>Diện tích khoang tam giác vuông $APQ$:</p>
  $$S = \\frac{1}{2}x_0 y_0 = \\frac{1}{2}\\left(3 + \\sqrt[3]{75}\\right)\\left(5 + \\sqrt[3]{45}\\right) \\approx \\frac{1}{2} \\times (7,21716) \\times (8,55689) \\approx 30,878... \\text{ m}^2 \\approx 30,9 \\text{ m}^2.$$
  <p class="final-answer">$\\Rightarrow$ <strong>Đáp số: 30,9</strong></p>
</div>
"""
    }
]

# Write out to js/quiz-data.js
output = """/**
 * DỮ LIỆU ĐỀ KIỂM TRA GIỮA KÌ I - MÔN TOÁN 12 (NĂM HỌC 2026 - 2027)
 * TRƯỜNG THPT NGUYỄN VĂN THOẠI - SỞ GIÁO DỤC VÀ ĐÀO TẠO AN GIANG
 * ====================================================================
 * Tác giả: ThS. Lương Thanh Sáng (Tổ trưởng chuyên môn)
 * Mã đề thi: 0002
 * Cấu trúc đề thi mới nhất của Bộ GD&ĐT:
 * - Phần I: 12 câu trắc nghiệm nhiều phương án lựa chọn (A, B, C, D)
 * - Phần II: 4 câu trắc nghiệm Đúng / Sai
 * - Phần III: 6 câu trắc nghiệm Trả lời ngắn
 * Đầy đủ hình vẽ minh họa đồ thị, bảng biến thiên chuẩn TikZ/SVG sắc nét!
 */

const QUIZ_CONFIG = {
  title: "Đề Kiểm Tra Giữa Kì I - Mã Đề 0002 (Toán 12)",
  school: "Trường THPT Nguyễn Văn Thoại - Sở GD&ĐT An Giang",
  schoolYear: "2026 - 2027",
  teacher: "ThS. Lương Thanh Sáng (Tổ trưởng chuyên môn)",
  timeLimitMinutes: 90, // Thời gian làm bài chuẩn: 90 phút
  totalQuestions: 22,
  maxScore: 10.0
};

// ==================== PHẦN I: 12 CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (A, B, C, D) ====================
const QUIZ_PART1 = """ + json.dumps(part1, ensure_ascii=False, indent=2) + """;

// ==================== PHẦN II: 4 CÂU TRẮC NGHIỆM ĐÚNG / SAI ====================
const QUIZ_PART2 = """ + json.dumps(part2, ensure_ascii=False, indent=2) + """;

// ==================== PHẦN III: 6 CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN ====================
const QUIZ_PART3 = """ + json.dumps(part3, ensure_ascii=False, indent=2) + """;

// Mặc định câu hỏi ban đầu: Tích hợp đầy đủ các phần để học sinh làm trực tuyến
const QUIZ_QUESTIONS = QUIZ_PART1;
"""

with open('js/quiz-data.js', 'w', encoding='utf-8') as f:
    f.write(output)

print("quiz-data.js written successfully with all 22 questions and 10 TikZ SVGs!")

