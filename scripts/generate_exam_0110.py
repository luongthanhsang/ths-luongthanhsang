# -*- coding: utf-8 -*-
"""
Script to generate EXAM_12_BGD_0110 object for js/quiz-data.js
Author: ThS. Lương Thanh Sáng
"""

import json

# SVG Definitions
SVG_CAU7_BBT = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 180" class="tikz-svg" style="max-width: 480px; width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff;">
  <defs>
    <marker id="arrow-bbt" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 7 5 L 0 8 z" fill="#1e293b"/>
    </marker>
  </defs>
  <rect x="15" y="15" width="490" height="150" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
  <line x1="85" y1="15" x2="85" y2="165" stroke="#1e293b" stroke-width="1.2"/>
  <line x1="15" y1="52" x2="505" y2="52" stroke="#1e293b" stroke-width="1.2"/>
  <line x1="15" y1="88" x2="505" y2="88" stroke="#1e293b" stroke-width="1.2"/>

  <text x="50" y="38" text-anchor="middle" font-family="'Times New Roman', serif" font-style="italic" font-size="16" fill="#1e293b">x</text>
  <text x="50" y="74" text-anchor="middle" font-family="'Times New Roman', serif" font-style="italic" font-size="16" fill="#1e293b">f &apos;(x)</text>
  <text x="50" y="132" text-anchor="middle" font-family="'Times New Roman', serif" font-style="italic" font-size="16" fill="#1e293b">f(x)</text>

  <text x="120" y="38" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" fill="#1e293b">-1</text>
  <text x="220" y="38" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" fill="#1e293b">0</text>
  <text x="340" y="38" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" fill="#1e293b">1</text>
  <text x="460" y="38" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" fill="#1e293b">2</text>

  <text x="170" y="74" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" fill="#1e293b">+</text>
  <text x="220" y="74" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" fill="#1e293b">0</text>
  <text x="280" y="74" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" fill="#1e293b">-</text>
  <text x="340" y="74" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" fill="#1e293b">0</text>
  <text x="400" y="74" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" fill="#1e293b">+</text>

  <text x="120" y="152" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" fill="#1e293b">-4</text>
  <line x1="135" y1="145" x2="205" y2="108" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow-bbt)"/>
  <text x="220" y="105" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" fill="#1e293b">1</text>
  <line x1="235" y1="110" x2="325" y2="148" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow-bbt)"/>
  <text x="340" y="155" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" fill="#1e293b">0</text>
  <line x1="355" y1="148" x2="445" y2="110" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow-bbt)"/>
  <text x="460" y="105" text-anchor="middle" font-family="'Times New Roman', serif" font-size="16" fill="#1e293b">5</text>
</svg>"""

SVG_CAU9_BOX = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 220" class="tikz-svg" style="max-width: 320px; width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff;">
  <line x1="130" y1="160" x2="240" y2="160" stroke="#1e293b" stroke-width="1.3" stroke-dasharray="4,4"/>
  <line x1="130" y1="160" x2="145" y2="60" stroke="#1e293b" stroke-width="1.3" stroke-dasharray="4,4"/>

  <line x1="100" y1="200" x2="130" y2="160" stroke="#1e293b" stroke-width="1.3"/>
  <line x1="100" y1="200" x2="210" y2="200" stroke="#1e293b" stroke-width="1.3"/>
  <line x1="210" y1="200" x2="240" y2="160" stroke="#1e293b" stroke-width="1.3"/>

  <polygon points="145,60 115,100 225,100 255,60" fill="none" stroke="#1e293b" stroke-width="1.3"/>

  <line x1="100" y1="200" x2="115" y2="100" stroke="#1e293b" stroke-width="1.3"/>
  <line x1="210" y1="200" x2="225" y2="100" stroke="#1e293b" stroke-width="1.3"/>
  <line x1="240" y1="160" x2="255" y2="60" stroke="#1e293b" stroke-width="1.3"/>

  <text x="133" y="150" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">A</text>
  <text x="90" y="215" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">B</text>
  <text x="215" y="215" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">C</text>
  <text x="248" y="165" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">D</text>

  <text x="135" y="50" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">A&apos;</text>
  <text x="100" y="105" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">B&apos;</text>
  <text x="235" y="105" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">C&apos;</text>
  <text x="260" y="50" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">D&apos;</text>
</svg>"""

SVG_CAU11_CHOP = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 250" class="tikz-svg" style="max-width: 300px; width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff;">
  <line x1="140" y1="30" x2="140" y2="160" stroke="#1e293b" stroke-width="1.3" stroke-dasharray="4,4"/>
  <line x1="140" y1="160" x2="100" y2="210" stroke="#1e293b" stroke-width="1.3" stroke-dasharray="4,4"/>
  <line x1="140" y1="160" x2="255" y2="160" stroke="#1e293b" stroke-width="1.3" stroke-dasharray="4,4"/>
  <line x1="140" y1="160" x2="215" y2="210" stroke="#1e293b" stroke-width="1.3" stroke-dasharray="4,4"/>
  <line x1="100" y1="210" x2="255" y2="160" stroke="#1e293b" stroke-width="1.3" stroke-dasharray="4,4"/>

  <line x1="140" y1="30" x2="100" y2="210" stroke="#1e293b" stroke-width="1.3"/>
  <line x1="140" y1="30" x2="215" y2="210" stroke="#1e293b" stroke-width="1.3"/>
  <line x1="140" y1="30" x2="255" y2="160" stroke="#1e293b" stroke-width="1.3"/>
  <line x1="100" y1="210" x2="215" y2="210" stroke="#1e293b" stroke-width="1.3"/>
  <line x1="215" y1="210" x2="255" y2="160" stroke="#1e293b" stroke-width="1.3"/>

  <text x="135" y="22" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">S</text>
  <text x="125" y="160" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">A</text>
  <text x="85" y="222" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">B</text>
  <text x="222" y="228" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">C</text>
  <text x="263" y="165" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">D</text>
</svg>"""

SVG_CAU2_PARABOL = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 250" class="tikz-svg" style="max-width: 420px; width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff;">
  <defs>
    <marker id="arrow-parabol" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
  </defs>

  <line x1="40" y1="190" x2="410" y2="190" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow-parabol)"/>
  <text x="400" y="215" font-family="'Times New Roman', serif" font-size="14.5" fill="#1e293b">t (giờ)</text>

  <line x1="60" y1="210" x2="60" y2="40" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow-parabol)"/>
  <text x="65" y="45" font-family="'Times New Roman', serif" font-size="14.5" fill="#1e293b">y (m<tspan dy="-5" font-size="11">3</tspan><tspan dy="5">/giờ)</tspan></text>

  <text x="42" y="208" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">O</text>

  <line x1="60" y1="106" x2="288" y2="106" stroke="#64748b" stroke-width="1.1" stroke-dasharray="4,4"/>
  <line x1="136" y1="190" x2="136" y2="106" stroke="#64748b" stroke-width="1.1" stroke-dasharray="4,4"/>
  <line x1="288" y1="190" x2="288" y2="106" stroke="#64748b" stroke-width="1.1" stroke-dasharray="4,4"/>

  <text x="136" y="208" text-anchor="middle" font-family="'Times New Roman', serif" font-size="14.5" fill="#1e293b">2</text>
  <text x="288" y="208" text-anchor="middle" font-family="'Times New Roman', serif" font-size="14.5" fill="#1e293b">6</text>

  <text x="50" y="111" text-anchor="end" font-family="'Times New Roman', serif" font-size="14.5" fill="#1e293b">3</text>

  <path d="M 60,190 Q 212,-34 364,190" fill="none" stroke="#1e293b" stroke-width="1.8"/>

  <text x="125" y="96" font-family="'Times New Roman', serif" font-style="italic" font-weight="bold" font-size="15" fill="#1e293b">A</text>
  <text x="295" y="96" font-family="'Times New Roman', serif" font-style="italic" font-weight="bold" font-size="15" fill="#1e293b">B</text>

  <text x="306" y="125" font-family="'Times New Roman', serif" font-style="italic" font-size="15" fill="#1e293b">y = f(t)</text>
</svg>"""

# SVG chuẩn 100% hình vẽ Câu 3 trang 4 theo yêu cầu đặc biệt của Thầy Sáng
SVG_CAU3_ELIP_TRON = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 260" class="tikz-svg" style="max-width: 520px; width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff;">
  <defs>
    <marker id="arrow-axis-c3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
    <marker id="arrow-pointer-c3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 2 L 7 5 L 0 8 z" fill="#1e293b"/>
    </marker>
  </defs>

  <!-- Vùng tô xám (H): kẹp giữa nửa trên đường tròn và nửa trên elip từ x = -8 đến x = 8 -->
  <path d="M 187,124 A 110 110 0 0 1 363,124 A 176 76.21 0 0 0 187,124 Z" fill="#b0b0b0" stroke="none"/>

  <!-- Trục hoành Ox -->
  <line x1="130" y1="190" x2="475" y2="190" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow-axis-c3)"/>
  <text x="475" y="182" font-family="'Times New Roman', serif" font-style="italic" font-size="16" fill="#1e293b">x</text>

  <!-- Trục tung Oy -->
  <line x1="275" y1="190" x2="275" y2="45" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow-axis-c3)"/>
  <text x="283" y="52" font-family="'Times New Roman', serif" font-style="italic" font-size="16" fill="#1e293b">y</text>

  <!-- Nửa đường tròn: từ (-10, 0) -> (165, 190) đến (10, 0) -> (385, 190) -->
  <path d="M 165,190 A 110 110 0 0 1 385,190" fill="none" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Nửa đường elip: từ (-16, 0) -> (99, 190) đến (16, 0) -> (451, 190) -->
  <path d="M 99,190 A 176 76.21 0 0 1 451,190" fill="none" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Gốc tọa độ O -->
  <text x="282" y="208" font-family="'Times New Roman', serif" font-style="italic" font-size="16" fill="#1e293b">O</text>

  <!-- Nhãn (H) và mũi tên chỉ vào vùng tô đậm -->
  <text x="215" y="88" font-family="'Times New Roman', serif" font-style="italic" font-size="16" fill="#1e293b">(H)</text>
  <line x1="237" y1="94" x2="252" y2="102" stroke="#1e293b" stroke-width="1.2" marker-end="url(#arrow-pointer-c3)"/>

  <!-- Ghi chú tỉ lệ bên dưới (chuẩn 100% file gốc) -->
  <text x="275" y="240" text-anchor="middle" font-family="'Times New Roman', serif" font-style="italic" font-size="14.5" fill="#1e293b">Lưu ý: Các kích thước trong hình minh họa có thể không đúng tỉ lệ thực tế.</text>
</svg>"""

print("SVGs defined successfully")

# Part 1 questions
PART1_QUESTIONS = [
    {
        "id": 1,
        "part": "I",
        "grade": "12",
        "topic": "Phương trình lượng giác cơ bản",
        "question": "Phương trình $\\sin x = 0$ có tập nghiệm là",
        "svg": "",
        "options": [
            {"id": "A", "text": "$S = \\left\\{-\\dfrac{\\pi}{2} + k2\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$"},
            {"id": "B", "text": "$S = \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$"},
            {"id": "C", "text": "$S = \\{k2\\pi \\mid k \\in \\mathbb{Z}\\}$"},
            {"id": "D", "text": "$S = \\left\\{\\dfrac{\\pi}{2} + k2\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$"}
        ],
        "correctAnswer": "B",
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Phương trình lượng giác cơ bản:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$\\sin x = 0 \\iff x = k\\pi \\quad (k \\in \\mathbb{Z}).$$
  </div>
  <p>Vậy tập nghiệm của phương trình là $S = \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$.</p>
  <p class="final-answer">&rArr; <strong>Chọn đáp án B.</strong></p>
</div>"""
    },
    {
        "id": 2,
        "part": "I",
        "grade": "12",
        "topic": "Mẫu số liệu ghép nhóm - Khoảng biến thiên",
        "question": """Sau khi khảo sát về mức lương khởi điểm (đơn vị: triệu đồng) của $20$ công nhân, người ta thu được mẫu số liệu ghép nhóm như sau:
<div class="stat-table-wrapper" style="overflow-x: auto; margin: 12px 0;">
  <table style="width: 100%; max-width: 580px; margin: 0 auto; border-collapse: collapse; text-align: center; border: 1px solid #cbd5e1; background: #ffffff;">
    <thead>
      <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
        <th style="padding: 8px 10px; border: 1px solid #cbd5e1; font-weight: 600;">Mức lương</th>
        <th style="padding: 8px 10px; border: 1px solid #cbd5e1;">[5; 6)</th>
        <th style="padding: 8px 10px; border: 1px solid #cbd5e1;">[6; 7)</th>
        <th style="padding: 8px 10px; border: 1px solid #cbd5e1;">[7; 8)</th>
        <th style="padding: 8px 10px; border: 1px solid #cbd5e1;">[8; 9)</th>
        <th style="padding: 8px 10px; border: 1px solid #cbd5e1;">[9; 10)</th>
        <th style="padding: 8px 10px; border: 1px solid #cbd5e1;">[10; 11)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px 10px; border: 1px solid #cbd5e1; font-weight: 600; background: #f8fafc;">Tần số</td>
        <td style="padding: 8px 10px; border: 1px solid #cbd5e1;">4</td>
        <td style="padding: 8px 10px; border: 1px solid #cbd5e1;">5</td>
        <td style="padding: 8px 10px; border: 1px solid #cbd5e1;">5</td>
        <td style="padding: 8px 10px; border: 1px solid #cbd5e1;">3</td>
        <td style="padding: 8px 10px; border: 1px solid #cbd5e1;">2</td>
        <td style="padding: 8px 10px; border: 1px solid #cbd5e1;">1</td>
      </tr>
    </tbody>
  </table>
</div>
Khoảng biến thiên của mẫu số liệu ghép nhóm đó bằng""",
        "svg": "",
        "options": [
            {"id": "A", "text": "$6$"},
            {"id": "B", "text": "$1$"},
            {"id": "C", "text": "$7,35$"},
            {"id": "D", "text": "$1,42$"}
        ],
        "correctAnswer": "A",
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Khoảng biến thiên của mẫu số liệu ghép nhóm là hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$R = 11 - 5 = 6.$$
  </div>
  <p class="final-answer">&rArr; <strong>Chọn đáp án A.</strong></p>
</div>"""
    },
    {
        "id": 3,
        "part": "I",
        "grade": "12",
        "topic": "Phương trình chính tắc của đường thẳng trong không gian Oxyz",
        "question": "Trong không gian với hệ tọa độ $Oxyz$, phương trình của đường thẳng đi qua điểm $A(1; 3; -5)$ và có một vectơ chỉ phương $\\vec{u} = (2; -1; 3)$ là",
        "svg": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{x - 1}{2} = \\dfrac{y + 3}{-1} = \\dfrac{z - 5}{3}$"},
            {"id": "B", "text": "$\\dfrac{x - 1}{2} = \\dfrac{y + 3}{-1} = \\dfrac{z + 5}{3}$"},
            {"id": "C", "text": "$\\dfrac{x - 1}{2} = \\dfrac{y - 3}{-1} = \\dfrac{z + 5}{3}$"},
            {"id": "D", "text": "$\\dfrac{x - 1}{2} = \\dfrac{y - 3}{-1} = \\dfrac{z - 5}{3}$"}
        ],
        "correctAnswer": "C",
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Phương trình chính tắc của đường thẳng đi qua điểm $A(x_0; y_0; z_0)$ với VTCP $\\vec{u} = (a; b; c)$ ($a, b, c \\ne 0$) là:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$\\dfrac{x - x_0}{a} = \\dfrac{y - y_0}{b} = \\dfrac{z - z_0}{c}$$
  </div>
  <p>Với $A(1; 3; -5)$ và $\\vec{u} = (2; -1; 3)$, phương trình chính tắc là:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$\\dfrac{x - 1}{2} = \\dfrac{y - 3}{-1} = \\dfrac{z - (-5)}{3} \\iff \\dfrac{x - 1}{2} = \\dfrac{y - 3}{-1} = \\dfrac{z + 5}{3}.$$
  </div>
  <p class="final-answer">&rArr; <strong>Chọn đáp án C.</strong></p>
</div>"""
    },
    {
        "id": 4,
        "part": "I",
        "grade": "12",
        "topic": "Định nghĩa tích phân và công thức Newton-Leibniz",
        "question": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ có một nguyên hàm là $F(x)$ thỏa mãn $F(1) = 3, F(2) = 9$. Phát biểu nào sau đây là đúng?",
        "svg": "",
        "options": [
            {"id": "A", "text": "$\\displaystyle\\int_1^2 f(x)\\,dx = 12$"},
            {"id": "B", "text": "$\\displaystyle\\int_1^2 f(x)\\,dx = 3$"},
            {"id": "C", "text": "$\\displaystyle\\int_1^2 f(x)\\,dx = 6$"},
            {"id": "D", "text": "$\\displaystyle\\int_1^2 f(x)\\,dx = 27$"}
        ],
        "correctAnswer": "C",
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Áp dụng định nghĩa và công thức Newton-Leibniz của tích phân:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$\\int_1^2 f(x)\\,dx = F(2) - F(1) = 9 - 3 = 6.$$
  </div>
  <p class="final-answer">&rArr; <strong>Chọn đáp án C.</strong></p>
</div>"""
    },
    {
        "id": 5,
        "part": "I",
        "grade": "12",
        "topic": "Đạo hàm của hàm phân thức bậc nhất trên bậc nhất",
        "question": "Cho hàm số $y = f(x) = \\dfrac{ax + 4}{3x + 1}$ (với $a > 12$). Đạo hàm của hàm số đã cho là",
        "svg": "",
        "options": [
            {"id": "A", "text": "$y' = \\dfrac{-a - 12}{(3x + 1)^2}$"},
            {"id": "B", "text": "$y' = \\dfrac{a - 12}{(3x + 1)^2}$"},
            {"id": "C", "text": "$y' = \\dfrac{a + 12}{(3x + 1)^2}$"},
            {"id": "D", "text": "$y' = \\dfrac{12 - a}{(3x + 1)^2}$"}
        ],
        "correctAnswer": "B",
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Áp dụng công thức đạo hàm nhanh cho hàm phân thức bậc nhất trên bậc nhất $\\left(\\dfrac{ax + b}{cx + d}\\right)' = \\dfrac{ad - bc}{(cx + d)^2}$:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$y' = \\dfrac{a \\cdot 1 - 4 \\cdot 3}{(3x + 1)^2} = \\dfrac{a - 12}{(3x + 1)^2}.$$
  </div>
  <p class="final-answer">&rArr; <strong>Chọn đáp án B.</strong></p>
</div>"""
    },
    {
        "id": 6,
        "part": "I",
        "grade": "12",
        "topic": "Tính chất tuyến tính của nguyên hàm",
        "question": "Cho hàm số $f(x) = ax + b$ ($a, b \\in \\mathbb{R}, a \\ne 0$). Phát biểu nào sau đây là đúng?",
        "svg": "",
        "options": [
            {"id": "A", "text": "$\\displaystyle\\int 7f(x)\\,dx = 7 + \\int f(x)\\,dx$"},
            {"id": "B", "text": "$\\displaystyle\\int 7f(x)\\,dx = 7\\int f(x)\\,dx$"},
            {"id": "C", "text": "$\\displaystyle\\int 7f(x)\\,dx = 7 - \\int f(x)\\,dx$"},
            {"id": "D", "text": "$\\displaystyle\\int 7f(x)\\,dx = -7\\int f(x)\\,dx$"}
        ],
        "correctAnswer": "B",
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Theo tính chất cơ bản của nguyên hàm, với hằng số $k \\ne 0$ ta có:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$\\int k \\cdot f(x)\\,dx = k \\int f(x)\\,dx.$$
  </div>
  <p>Với $k = 7$, ta có: $\\displaystyle\\int 7f(x)\\,dx = 7\\int f(x)\\,dx$.</p>
  <p class="final-answer">&rArr; <strong>Chọn đáp án B.</strong></p>
</div>"""
    },
    {
        "id": 7,
        "part": "I",
        "grade": "12",
        "topic": "Giá trị lớn nhất của hàm số trên đoạn từ bảng biến thiên",
        "question": "Cho hàm số bậc ba $y = f(x)$ có bảng biến thiên trên đoạn $[-1; 2]$ như sau:<br>Giá trị lớn nhất của hàm số đã cho trên đoạn $[-1; 2]$ bằng",
        "svg": SVG_CAU7_BBT,
        "options": [
            {"id": "A", "text": "$1$"},
            {"id": "B", "text": "$5$"},
            {"id": "C", "text": "$0$"},
            {"id": "D", "text": "$-4$"}
        ],
        "correctAnswer": "B",
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Quan sát bảng biến thiên của hàm số trên đoạn $[-1; 2]$:</p>
  <ul>
    <li>$f(-1) = -4$</li>
    <li>$f(0) = 1$ (điểm cực đại địa phương)</li>
    <li>$f(1) = 0$ (điểm cực tiểu địa phương)</li>
    <li>$f(2) = 5$</li>
  </ul>
  <p>So sánh các giá trị, ta có giá trị lớn nhất của hàm số trên đoạn $[-1; 2]$ là:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$\\max_{[-1; 2]} f(x) = f(2) = 5.$$
  </div>
  <p class="final-answer">&rArr; <strong>Chọn đáp án B.</strong></p>
</div>"""
    },
    {
        "id": 8,
        "part": "I",
        "grade": "12",
        "topic": "Mẫu số liệu ghép nhóm - Tính số trung bình",
        "question": """Sau khi khảo sát tổng số giờ xem truyền hình (đơn vị: giờ) của $100$ gia đình trong hai ngày nghỉ cuối tuần, người ta thu được mẫu số liệu ghép nhóm như sau:
<div class="stat-table-wrapper" style="overflow-x: auto; margin: 12px 0;">
  <table style="width: 100%; max-width: 550px; margin: 0 auto; border-collapse: collapse; text-align: center; border: 1px solid #cbd5e1; background: #ffffff;">
    <thead>
      <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
        <th style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 600;">Số giờ xem</th>
        <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">[0; 2)</th>
        <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">[2; 4)</th>
        <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">[4; 6)</th>
        <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">[6; 8)</th>
        <th style="padding: 8px 12px; border: 1px solid #cbd5e1;">[8; 10)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px 12px; border: 1px solid #cbd5e1; font-weight: 600; background: #f8fafc;">Tần số</td>
        <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">20</td>
        <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">35</td>
        <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">30</td>
        <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">10</td>
        <td style="padding: 8px 12px; border: 1px solid #cbd5e1;">5</td>
      </tr>
    </tbody>
  </table>
</div>
Giá trị trung bình của mẫu số liệu ghép nhóm đó bằng (làm tròn kết quả đến hàng phần mười)""",
        "svg": "",
        "options": [
            {"id": "A", "text": "$3,9$"},
            {"id": "B", "text": "$4,6$"},
            {"id": "C", "text": "$2,1$"},
            {"id": "D", "text": "$10$"}
        ],
        "correctAnswer": "A",
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Giá trị đại diện của các nhóm lần lượt là:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.05rem;">
    $$c_1 = 1; \\quad c_2 = 3; \\quad c_3 = 5; \\quad c_4 = 7; \\quad c_5 = 9.$$
  </div>
  <p>Giá trị trung bình của mẫu số liệu ghép nhóm:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$\\bar{x} = \\dfrac{1 \\cdot 20 + 3 \\cdot 35 + 5 \\cdot 30 + 7 \\cdot 10 + 9 \\cdot 5}{100} = \\dfrac{20 + 105 + 150 + 70 + 45}{100} = \\dfrac{390}{100} = 3,9.$$
  </div>
  <p class="final-answer">&rArr; <strong>Chọn đáp án A.</strong></p>
</div>"""
    },
    {
        "id": 9,
        "part": "I",
        "grade": "12",
        "topic": "Vectơ cùng phương trong hình không gian",
        "question": "Cho hình hộp $ABCD.A'B'C'D'$ (xem hình minh họa bên dưới). Vectơ nào sau đây cùng phương với vectơ $\\vec{A'D'}$?",
        "svg": SVG_CAU9_BOX,
        "options": [
            {"id": "A", "text": "$\\vec{BD}$"},
            {"id": "B", "text": "$\\vec{AB}$"},
            {"id": "C", "text": "$\\vec{AC}$"},
            {"id": "D", "text": "$\\vec{AD}$"}
        ],
        "correctAnswer": "D",
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Trong hình hộp $ABCD.A'B'C'D'$, mặt bên $ADD'A'$ là hình bình hành nên cạnh $A'D'$ song song và có cùng độ dài với cạnh $AD$.</p>
  <p>Do đó, vectơ $\\vec{AD}$ cùng phương (và cùng hướng) với vectơ $\\vec{A'D'}$.</p>
  <p class="final-answer">&rArr; <strong>Chọn đáp án D.</strong></p>
</div>"""
    },
    {
        "id": 10,
        "part": "I",
        "grade": "12",
        "topic": "Cấp số nhân - Hệ thức hai số hạng liên tiếp",
        "question": "Cho cấp số nhân $(u_n)$ có công bội $q$ với $u_1 = m$ và $u_2 = n$, trong đó $m > 2, n > 2m$. Phát biểu nào sau đây là đúng?",
        "svg": "",
        "options": [
            {"id": "A", "text": "$n = m \\cdot q$"},
            {"id": "B", "text": "$m = n + q$"},
            {"id": "C", "text": "$m = n \\cdot q$"},
            {"id": "D", "text": "$n = m + q$"}
        ],
        "correctAnswer": "A",
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Theo định nghĩa cấp số nhân, số hạng thứ hai liên hệ với số hạng đầu theo công thức:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$u_2 = u_1 \\cdot q \\iff n = m \\cdot q.$$
  </div>
  <p class="final-answer">&rArr; <strong>Chọn đáp án A.</strong></p>
</div>"""
    },
    {
        "id": 11,
        "part": "I",
        "grade": "12",
        "topic": "Đường thẳng vuông góc với mặt phẳng trong hình chóp",
        "question": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông và $SA$ vuông góc với $(ABCD)$. Đường thẳng $BC$ vuông góc với mặt phẳng nào trong các mặt phẳng sau đây?",
        "svg": SVG_CAU11_CHOP,
        "options": [
            {"id": "A", "text": "$(SCD)$"},
            {"id": "B", "text": "$(SAB)$"},
            {"id": "C", "text": "$(SBC)$"},
            {"id": "D", "text": "$(SBD)$"}
        ],
        "correctAnswer": "B",
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Ta có:</p>
  <ul>
    <li>Vì đáy $ABCD$ là hình vuông nên $BC \\perp AB$.</li>
    <li>Vì $SA \\perp (ABCD)$ nên $SA \\perp BC \\implies BC \\perp SA$.</li>
  </ul>
  <p>Do $AB$ và $SA$ là hai đường thẳng cắt nhau cùng nằm trong mặt phẳng $(SAB)$, suy ra:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$BC \\perp (SAB).$$
  </div>
  <p class="final-answer">&rArr; <strong>Chọn đáp án B.</strong></p>
</div>"""
    },
    {
        "id": 12,
        "part": "I",
        "grade": "12",
        "topic": "Bảng nguyên hàm cơ bản",
        "question": "Nguyên hàm của hàm số $f(x) = 3x^2 - \\cos x$ là",
        "svg": "",
        "options": [
            {"id": "A", "text": "$x^3 + \\sin x + C$"},
            {"id": "B", "text": "$6x + \\sin x + C$"},
            {"id": "C", "text": "$6x - \\sin x + C$"},
            {"id": "D", "text": "$x^3 - \\sin x + C$"}
        ],
        "correctAnswer": "D",
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Áp dụng các công thức nguyên hàm cơ bản:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$\\int (3x^2 - \\cos x)\\,dx = 3 \\cdot \\dfrac{x^3}{3} - \\sin x + C = x^3 - \\sin x + C.$$
  </div>
  <p class="final-answer">&rArr; <strong>Chọn đáp án D.</strong></p>
</div>"""
    }
]

# Part 2 questions
PART2_QUESTIONS = [
    {
        "id": 1,
        "part": "II",
        "grade": "12",
        "topic": "Khảo sát sự biến thiên và cực trị của hàm số bậc ba",
        "question": "Cho hàm số $y = f(x) = x^3 - 6x^2 + 9x + 2$. Xét tính Đúng / Sai của các khẳng định sau:",
        "svg": "",
        "items": [
            {
                "id": "a",
                "text": "Đạo hàm của hàm số đã cho là $f'(x) = 3x^2 - 12x + 9$.",
                "correct": True,
                "explanation": "Đúng. Ta có $f'(x) = (x^3)' - 6(x^2)' + 9(x)' + (2)' = 3x^2 - 12x + 9$."
            },
            {
                "id": "b",
                "text": "Phương trình $f'(x) = 0$ có tập nghiệm là $S = \\{1; 3\\}$.",
                "correct": True,
                "explanation": "Đúng. $f'(x) = 0 \\iff 3(x^2 - 4x + 3) = 0 \\iff x = 1$ hoặc $x = 3$. Tập nghiệm là $S = \\{1; 3\\}$."
            },
            {
                "id": "c",
                "text": "Hàm số đã cho đạt giá trị lớn nhất trên đoạn $[2; 4]$ tại $x = 2$.",
                "correct": False,
                "explanation": "Sai. Trên đoạn $[2; 4]$, $f'(x) = 0 \\iff x = 3 \\in [2; 4]$. Tính các giá trị: $f(2) = 4, f(3) = 2, f(4) = 6$. Suy ra $\\max_{[2; 4]} f(x) = 6$ đạt tại $x = 4$, không phải tại $x = 2$."
            },
            {
                "id": "d",
                "text": "Gọi $x_1, x_2$ là hai điểm cực trị của hàm số $y = f(x)$. Khi đó, phương trình đường thẳng đi qua hai điểm $M_1(x_1; f(x_1))$ và $M_2(x_2; f(x_2))$ là $y = -2x + 1$.",
                "correct": False,
                "explanation": "Sai. Hai điểm cực trị là $M_1(1; 6)$ và $M_2(3; 2)$. Hệ số góc $k = \\dfrac{2 - 6}{3 - 1} = -2$. Phương trình đường thẳng qua 2 cực trị là $y - 6 = -2(x - 1) \\iff y = -2x + 8$."
            }
        ],
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Cho hàm số $y = f(x) = x^3 - 6x^2 + 9x + 2$.</p>
  <ul>
    <li><strong>Ý a:</strong> $f'(x) = 3x^2 - 12x + 9$ &rArr; <strong>ĐÚNG</strong>.</li>
    <li><strong>Ý b:</strong> $f'(x) = 0 \\iff 3(x^2 - 4x + 3) = 0 \\iff x = 1$ hoặc $x = 3$ &rArr; $S = \\{1; 3\\}$ &rArr; <strong>ĐÚNG</strong>.</li>
    <li><strong>Ý c:</strong> Xét trên $[2; 4]$: ta có $f(2) = 4, f(3) = 2, f(4) = 6$. Vậy $\\max_{[2; 4]} f(x) = 6$ tại $x = 4$ &rArr; <strong>SAI</strong>.</li>
    <li><strong>Ý d:</strong> Hai điểm cực trị là $M_1(1; 6)$ và $M_2(3; 2)$. Đường thẳng nối 2 điểm cực trị có phương trình $y = -2x + 8$ (không phải $y = -2x + 1$) &rArr; <strong>SAI</strong>.</li>
  </ul>
</div>"""
    },
    {
        "id": 2,
        "part": "II",
        "grade": "12",
        "topic": "Ứng dụng tích phân tính lượng nước bơm vào bể",
        "question": "Người ta dùng một thiết bị bơm nước vào một bể không có nước. Tính từ lúc thiết bị bắt đầu hoạt động, tại thời điểm $t$ giờ với $0 \\le t \\le 8$, thiết bị đó có tốc độ bơm nước vào bể là $f(t)$ ($\\text{m}^3$/giờ). Biết rằng đồ thị của hàm số $y = f(t)$ là một phần đường parabol đi qua gốc tọa độ $O$ và hai điểm $A(2; 3), B(6; 3)$ (xem hình minh họa bên dưới). Xét tính Đúng / Sai của các khẳng định sau:",
        "svg": SVG_CAU2_PARABOL,
        "items": [
            {
                "id": "a",
                "text": "Với $0 \\le t \\le 8$ thì $f(t) = 3t - \\dfrac{t^2}{6}$ ($\\text{m}^3$/giờ).",
                "correct": False,
                "explanation": "Sai. Parabol đi qua $O(0; 0), A(2; 3), B(6; 3)$ có dạng $f(t) = at^2 + bt$. Thay tọa độ ta được $a = -\\dfrac{1}{4}, b = 2$. Do đó $f(t) = 2t - \\dfrac{t^2}{4}$."
            },
            {
                "id": "b",
                "text": "Tại thời điểm $t$ giờ ($0 \\le t \\le 8$) tính từ lúc thiết bị bắt đầu hoạt động, lượng nước trong bể là $V(t) = t^2 - \\dfrac{t^3}{12}$ ($\\text{m}^3$).",
                "correct": True,
                "explanation": "Đúng. Lượng nước trong bể $V(t) = \\int_0^t f(u)\\,du = \\int_0^t \\left(2u - \\dfrac{u^2}{4}\\right) du = \\left.\\left(u^2 - \\dfrac{u^3}{12}\\right)\\right|_0^t = t^2 - \\dfrac{t^3}{12}$."
            },
            {
                "id": "c",
                "text": "Tại thời điểm thiết bị có tốc độ bơm nước vào bể là lớn nhất, lượng nước trong bể lớn hơn $10,7$ mét khối.",
                "correct": False,
                "explanation": "Sai. Tốc độ bơm $f(t) = 2t - \\dfrac{t^2}{4} = -\\dfrac{1}{4}(t - 4)^2 + 4$ đạt GTLN tại $t = 4$. Khi đó $V(4) = 4^2 - \\dfrac{4^3}{12} = 16 - \\dfrac{16}{3} = \\dfrac{32}{3} \\approx 10,67\\text{ m}^3 < 10,7\\text{ m}^3$."
            },
            {
                "id": "d",
                "text": "Sau $\\dfrac{a}{b}$ giờ tính từ lúc thiết bị bắt đầu hoạt động (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $b > 0$), lượng nước trong bể là $13,824$ mét khối. Khi đó, giá trị của $a + b$ là $29$.",
                "correct": True,
                "explanation": "Đúng. $V(t) = 13,824 \\iff t^2 - \\dfrac{t^3}{12} = 13,824 \\iff t^3 - 12t^2 + 165,888 = 0 \\iff t = 4,8 = \\dfrac{24}{5}$. Vì $\\dfrac{24}{5}$ tối giản nên $a = 24, b = 5 \\implies a + b = 29$."
            }
        ],
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Thiết bị bơm nước vào bể có tốc độ bơm là hàm bậc hai $f(t) = at^2 + bt + c$.</p>
  <ul>
    <li>Đồ thị qua $O(0; 0) \\implies c = 0$.</li>
    <li>Đồ thị qua $A(2; 3) \\implies 4a + 2b = 3$.</li>
    <li>Đồ thị qua $B(6; 3) \\implies 36a + 6b = 3$.</li>
  </ul>
  <p>Giải hệ ta được $a = -\\dfrac{1}{4}, b = 2$. Do đó $f(t) = 2t - \\dfrac{t^2}{4}$ ($\\text{m}^3$/giờ).</p>
  <ul>
    <li><strong>Ý a:</strong> Đề bài đưa ra $f(t) = 3t - \\dfrac{t^2}{6}$ &rArr; <strong>SAI</strong>.</li>
    <li><strong>Ý b:</strong> $V(t) = \\int_0^t \\left(2u - \\dfrac{u^2}{4}\\right) du = t^2 - \\dfrac{t^3}{12}$ &rArr; <strong>ĐÚNG</strong>.</li>
    <li><strong>Ý c:</strong> Tốc độ cực đại tại đỉnh parabol $t = 4$. $V(4) = \\dfrac{32}{3} \\approx 10,67 < 10,7$ &rArr; <strong>SAI</strong>.</li>
    <li><strong>Ý d:</strong> $V(t) = 13,824 \\iff t = 4,8 = \\dfrac{24}{5} \\implies a = 24, b = 5 \\implies a + b = 29$ &rArr; <strong>ĐÚNG</strong>.</li>
  </ul>
</div>"""
    },
    {
        "id": 3,
        "part": "II",
        "grade": "12",
        "topic": "Ứng dụng hình học giải tích Oxyz trong mô hình phủ sóng viễn thông",
        "question": "Trong không gian với hệ tọa độ $Oxyz$, một trạm thu phát sóng điện thoại di động được đặt ở vị trí $I(2; 1; 12)$, trong đó một đơn vị độ dài trên mỗi trục tương ứng với $10$ mét trên thực tế. Trạm thu phát sóng đó có bán kính phủ sóng là $130$ mét. Vùng phủ sóng của trạm thu phát được quy ước là tập hợp tất cả các điểm $P$ trên mặt đất và trong không gian sao cho khoảng cách $IP$ không vượt quá $130$ mét. Mặt đất được coi là một phần của mặt phẳng $(Oxy)$ và mỗi người trên mặt đất được coi như một chất điểm. Xét tính Đúng / Sai của các khẳng định sau:",
        "svg": "",
        "items": [
            {
                "id": "a",
                "text": "Vùng phủ sóng của trạm thu phát là một phần của hình cầu giới hạn bởi mặt cầu $(S)$ có phương trình $(x - 2)^2 + (y - 1)^2 + (z - 12)^2 = 169$.",
                "correct": True,
                "explanation": "Đúng. Bán kính $R = 130\\text{ m} = 13$ đơn vị. Phương trình mặt cầu tâm $I(2; 1; 12)$, bán kính $R = 13$ là $(x - 2)^2 + (y - 1)^2 + (z - 12)^2 = 13^2 = 169$."
            },
            {
                "id": "b",
                "text": "Giả sử một người cầm điện thoại đang ở vị trí điểm $M(3; 1; 0)$ và chuyển động thẳng đều trên mặt đất với tốc độ $3,6\\text{ km/h}$. Khi đó, tại giây thứ 40 tính từ lúc xuất phát ở vị trí điểm $M(3; 1; 0)$, người đó đã đi được ra ngoài vùng phủ sóng của trạm thu phát.",
                "correct": False,
                "explanation": "Sai. Giao của mặt cầu với mặt đất $(Oxy): z = 0$ là hình tròn tâm $H(2; 1; 0)$, bán kính $r = \\sqrt{13^2 - 12^2} = 5$ đơn vị = $50\\text{ m}$. Vị trí $M(3; 1; 0)$ có $HM = 1$ đơn vị = $10\\text{ m}$. Tốc độ $3,6\\text{ km/h} = 1\\text{ m/s}$. Sau 40s người đó đi được quãng đường $s = 40\\text{ m}$. Khoảng cách xa nhất từ $H$ đến người đó là $HM + s = 10 + 40 = 50\\text{ m} = r$. Do đó người đó vẫn nằm trong vùng phủ sóng."
            },
            {
                "id": "c",
                "text": "Khoảng cách ngắn nhất để một người cầm điện thoại đang ở vị trí có tọa độ $N(8; 9; 0)$ di chuyển trên mặt đất tới được vùng phủ sóng (theo đơn vị mét) là $100\\text{ m}$.",
                "correct": False,
                "explanation": "Sai. Khoảng cách từ $N(8; 9; 0)$ đến tâm vùng phủ sóng trên mặt đất $H(2; 1; 0)$ là $HN = \\sqrt{(8-2)^2 + (9-1)^2} = \\sqrt{6^2 + 8^2} = 10$ đơn vị = $100\\text{ m}$. Vì bán kính phủ sóng trên mặt đất là $r = 50\\text{ m}$, khoảng cách ngắn nhất để tới vùng phủ sóng là $HN - r = 100 - 50 = 50\\text{ m}$."
            },
            {
                "id": "d",
                "text": "Giả sử một người cầm điện thoại chuyển động thẳng đều trên mặt đất từ vị trí $A(6; 9; 0)$ đến vị trí $B(-4; b; 0)$ với tốc độ $3,6\\text{ km/h}$ sao cho khoảng thời gian người đó thuộc vùng phủ sóng đúng bằng 60 giây. Khi đó $b = \\dfrac{3}{2}$.",
                "correct": True,
                "explanation": "Đúng. Vận tốc $1\\text{ m/s} = 0,1$ đv/s. Chiều dài dây cung trong vùng phủ sóng là $L = 60 \\times 0,1 = 6$ đơn vị. Khoảng cách từ $H(2; 1)$ đến đường thẳng $AB$ là $d = \\sqrt{r^2 - (L/2)^2} = \\sqrt{5^2 - 3^2} = 4$. Đường thẳng $AB$ qua $A(6; 9)$ và $B(-4; b)$ có phương trình $(b - 9)x + 10y - 6b - 36 = 0$. Khoảng cách $d(H, AB) = \\dfrac{4|b + 11|}{\\sqrt{(b - 9)^2 + 100}} = 4 \\iff (b + 11)^2 = b^2 - 18b + 181 \\iff 40b = 60 \\iff b = \\dfrac{3}{2}$."
            }
        ],
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Tọa độ trạm thu phát $I(2; 1; 12)$, 1 đơn vị = $10\\text{ m}$. Bán kính $R = 130\\text{ m} = 13$ đơn vị. Mặt đất là mặt phẳng $(Oxy): z = 0$.</p>
  <ul>
    <li><strong>Ý a:</strong> Mặt cầu $(S)$ tâm $I(2; 1; 12)$, bán kính $R = 13$ có phương trình $(x - 2)^2 + (y - 1)^2 + (z - 12)^2 = 169$ &rArr; <strong>ĐÚNG</strong>.</li>
    <li><strong>Ý b:</strong> Vùng phủ sóng trên mặt đất là hình tròn tâm $H(2; 1; 0)$, bán kính $r = \\sqrt{13^2 - 12^2} = 5$ đơn vị ($50\\text{ m}$). Điểm $M(3; 1; 0)$ cách $H$ một đoạn $10\\text{ m}$. Sau 40 giây người đi được tối đa $40\\text{ m}$, khoảng cách lớn nhất tới $H$ là $10 + 40 = 50\\text{ m} = r$, chưa ra ngoài vùng phủ sóng &rArr; <strong>SAI</strong>.</li>
    <li><strong>Ý c:</strong> $N(8; 9; 0)$ có $HN = \\sqrt{6^2 + 8^2} = 10$ đơn vị ($100\\text{ m}$). Khoảng cách ngắn nhất đến biên vùng phủ sóng là $100\\text{ m} - 50\\text{ m} = 50\\text{ m}$ (không phải $100\\text{ m}$) &rArr; <strong>SAI</strong>.</li>
    <li><strong>Ý d:</strong> Đoạn đường trong vùng phủ sóng có độ dài $L = 60 \\times 1 = 60\\text{ m} = 6$ đơn vị. Khoảng cách từ tâm $H$ đến đường thẳng $AB$ là $d = \\sqrt{5^2 - 3^2} = 4$. Lập phương trình đường thẳng $AB$ và giải phương trình khoảng cách ta được $b = \\dfrac{3}{2}$ &rArr; <strong>ĐÚNG</strong>.</li>
  </ul>
</div>"""
    },
    {
        "id": 4,
        "part": "II",
        "grade": "12",
        "topic": "Xác suất toàn phần và công thức Bayes trong cấp học bổng",
        "question": "Một trường đại học trao hai loại học bổng A và B cho sinh viên trong trường, một sinh viên có thể được nhận cả hai loại học bổng A và B. Trong số các sinh viên được trao học bổng loại A có $12\\%$ số bạn được trao học bổng loại B và trong số các sinh viên không được trao học bổng loại A có $10\\%$ số bạn được trao học bổng loại B. Có $10,2\\%$ số sinh viên toàn trường được trao học bổng loại B. Chọn ngẫu nhiên một sinh viên trong trường. Xét tính Đúng / Sai của các khẳng định sau:",
        "svg": "",
        "items": [
            {
                "id": "a",
                "text": "Xác suất để sinh viên đó không được trao học bổng loại B là $0,898$.",
                "correct": True,
                "explanation": "Đúng. $P(\\overline{B}) = 1 - P(B) = 1 - 0,102 = 0,898$."
            },
            {
                "id": "b",
                "text": "Xác suất để sinh viên đó không được trao học bổng loại B, biết sinh viên đó không được trao học bổng loại A, là $0,88$.",
                "correct": False,
                "explanation": "Sai. Theo giả thiết, trong số sinh viên không nhận học bổng A có 10% nhận học bổng B, tức $P(B \\mid \\overline{A}) = 0,10$. Suy ra xác suất không nhận học bổng B biết không nhận học bổng A là $P(\\overline{B} \\mid \\overline{A}) = 1 - P(B \\mid \\overline{A}) = 1 - 0,10 = 0,90$ (không phải $0,88$)."
            },
            {
                "id": "c",
                "text": "Xác suất để sinh viên đó không được trao học bổng loại A là $0,89$.",
                "correct": False,
                "explanation": "Sai. Theo công thức xác suất toàn phần: $P(B) = P(A)P(B \\mid A) + P(\\overline{A})P(B \\mid \\overline{A}) \\iff 0,102 = 0,12 P(A) + 0,10(1 - P(A)) \\implies 0,02 P(A) = 0,002 \\implies P(A) = 0,1$. Do đó $P(\\overline{A}) = 1 - P(A) = 0,90$ (không phải $0,89$)."
            },
            {
                "id": "d",
                "text": "Xác suất để sinh viên đó không được trao học bổng loại A, biết sinh viên đó không được trao học bổng loại B, lớn hơn $0,9$.",
                "correct": True,
                "explanation": "Đúng. Theo công thức Bayes: $P(\\overline{A} \\mid \\overline{B}) = \\dfrac{P(\\overline{A}) \\cdot P(\\overline{B} \\mid \\overline{A})}{P(\\overline{B})} = \\dfrac{0,90 \\times 0,90}{0,898} = \\dfrac{0,81}{0,898} \\approx 0,902 > 0,9$."
            }
        ],
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Gọi $A$ là biến cố sinh viên nhận học bổng A, $B$ là biến cố sinh viên nhận học bổng B.</p>
  <p>Theo đề bài: $P(B \\mid A) = 0,12$; $P(B \\mid \\overline{A}) = 0,10$; $P(B) = 0,102$.</p>
  <p>Theo công thức xác suất toàn phần:</p>
  <div style="text-align: center; margin: 8px 0;">
    $$P(B) = P(A) \\cdot P(B \\mid A) + [1 - P(A)] \\cdot P(B \\mid \\overline{A})$$
    $$0,102 = 0,12 P(A) + 0,10[1 - P(A)] \\implies 0,02 P(A) = 0,002 \\implies P(A) = 0,1.$$
  </div>
  <ul>
    <li><strong>Ý a:</strong> $P(\\overline{B}) = 1 - 0,102 = 0,898$ &rArr; <strong>ĐÚNG</strong>.</li>
    <li><strong>Ý b:</strong> $P(\\overline{B} \\mid \\overline{A}) = 1 - P(B \\mid \\overline{A}) = 1 - 0,10 = 0,90$ &rArr; <strong>SAI</strong>.</li>
    <li><strong>Ý c:</strong> $P(\\overline{A}) = 1 - P(A) = 1 - 0,1 = 0,90$ &rArr; <strong>SAI</strong>.</li>
    <li><strong>Ý d:</strong> $P(\\overline{A} \\mid \\overline{B}) = \\dfrac{P(\\overline{A} \\cap \\overline{B})}{P(\\overline{B})} = \\dfrac{0,9 \\times 0,9}{0,898} = \\dfrac{0,81}{0,898} \\approx 0,902 > 0,9$ &rArr; <strong>ĐÚNG</strong>.</li>
  </ul>
</div>"""
    }
]

# Part 3 questions
PART3_QUESTIONS = [
    {
        "id": 1,
        "part": "III",
        "grade": "12",
        "topic": "Bài toán đếm - Xác suất tổ hợp trên bàn cờ 6x6",
        "question": "Cho bảng $6 \\times 6$ gồm $36$ ô vuông đơn vị và cho $8$ quân cờ đôi một khác nhau. Người ta xếp ngẫu nhiên $8$ quân cờ đó vào $36$ ô trong bảng sao cho mỗi ô xếp nhiều nhất một quân cờ. Hai cách xếp được gọi là như nhau nếu vị trí của $8$ quân cờ tương ứng trên bảng là giống nhau sau khi xếp xong (không tính đến thứ tự xếp các quân cờ vào bảng). Chọn ngẫu nhiên một cách xếp như trên. Gọi $P$ là xác suất của biến cố: “Cách xếp được chọn thỏa mãn đồng thời ba điều kiện sau:<br>• Trên mỗi hàng có ít nhất một quân cờ;<br>• Trên mỗi cột có ít nhất một quân cờ;<br>• Mỗi quân cờ phải cùng hàng với đúng một quân cờ khác hoặc cùng cột với đúng một quân cờ khác.”<br>Giá trị của $9^4 P$ bằng bao nhiêu (không làm tròn kết quả các phép tính trung gian, chỉ làm tròn kết quả phép tính cuối cùng đến hàng phần trăm)?",
        "svg": "",
        "correctAnswer": "1,76",
        "acceptableAnswers": ["1,76", "1.76", "1,75", "1.75"],
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Tổng số cách xếp 8 quân cờ vào 36 ô là số cách chọn 8 ô từ 36 ô:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.05rem;">
    $$|\\Omega| = C_{36}^8 = 30\\,260\\,340.$$
  </div>
  <p>Để thỏa mãn mỗi hàng và mỗi cột có ít nhất một quân cờ, với 8 quân cờ trên 6 hàng và 6 cột, phân bố số quân cờ trên các hàng bắt buộc phải là $(2, 2, 1, 1, 1, 1)$ và trên các cột cũng là $(2, 2, 1, 1, 1, 1)$.</p>
  <p>Để mỗi quân cờ cùng hàng với đúng 1 quân khác hoặc cùng cột với đúng 1 quân khác:</p>
  <ul>
    <li>4 quân cờ ở 4 hàng đơn bắt buộc phải nằm trên 2 cột đôi.</li>
    <li>4 quân cờ ở 2 hàng đôi bắt buộc phải nằm trên 4 cột đơn.</li>
  </ul>
  <p>Số cách chọn thỏa mãn:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.05rem;">
    $$N = C_6^2 \\cdot C_6^2 \\cdot C_4^2 \\cdot C_4^2 = 15 \\times 15 \\times 6 \\times 6 = 8\\,100.$$
  </div>
  <p>Xác suất $P = \\dfrac{8100}{30\\,260\\,340}$.</p>
  <p>Khi đó:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$9^4 P = 6561 \\times \\dfrac{8100}{30\\,260\\,340} = \\dfrac{53\\,144\\,100}{30\\,260\\,340} \\approx 1,7562 \\approx 1,76.$$
  </div>
  <div style="text-align: center; margin: 12px 0;">
    <strong style="color: #dc2626; font-size: 1.15rem; background: #fee2e2; padding: 6px 16px; border-radius: 8px; border: 1px solid #f87171;">
      Đáp số: 1,76
    </strong>
  </div>
</div>"""
    },
    {
        "id": 2,
        "part": "III",
        "grade": "12",
        "topic": "Bài toán quy hoạch tuyến tính và tối ưu chi phí vận tải",
        "question": "Công ty vận tải nhận một đơn hàng vận chuyển ít nhất $23$ tấn hàng loại A, ít nhất $59$ tấn hàng loại B và không quá $139$ tấn hàng loại C. Công ty vận tải sử dụng hai loại xe X và Y để chở số hàng đó. Mỗi xe loại X đều chở $12$ tấn hàng loại A, $6$ tấn hàng loại B và $18$ tấn hàng loại C. Mỗi xe loại Y đều chở $2$ tấn hàng loại A, $20$ tấn hàng loại B và $22$ tấn hàng loại C. Chi phí cho $1$ xe loại X là $37$ triệu đồng và cho $1$ xe loại Y là $45$ triệu đồng. Gọi $T$ (triệu đồng) là chi phí nhỏ nhất để công ty hoàn thành đơn hàng. Giá trị của $10T$ bằng bao nhiêu?",
        "svg": "",
        "correctAnswer": "2090",
        "acceptableAnswers": ["2090"],
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Gọi $x, y$ lần lượt là số chuyến xe loại X và loại Y ($x, y \\in \\mathbb{N}$).</p>
  <p>Ta có hệ bất phương trình ràng buộc:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.05rem;">
    $$\\begin{cases} 12x + 2y \\ge 23 \\\\ 6x + 20y \\ge 59 \\\\ 18x + 22y \\le 139 \\\\ x, y \\in \\mathbb{N} \\end{cases}$$
  </div>
  <p>Chi phí vận chuyển cần tối thiểu hóa là: $T(x, y) = 37x + 45y$ (triệu đồng).</p>
  <p>Khảo sát các nghiệm nguyên $(x, y)$ thỏa mãn hệ:</p>
  <ul>
    <li>Với $x = 0$ hoặc $x = 1$: không có $y$ nguyên thỏa mãn đồng thời cả 3 bất phương trình.</li>
    <li>Với $x = 2$: hệ trở thành $\\begin{cases} 2y \\ge -1 \\\\ 20y \\ge 47 \\implies y \\ge 3 \\\\ 22y \\le 103 \\implies y \\le 4 \\end{cases} \\implies y \\in \\{3; 4\\}$.
      <ul>
        <li>Tại $(2; 3)$: $18(2) + 22(3) = 102 \\le 139$ (thỏa mãn). Chi phí $T = 37(2) + 45(3) = 74 + 135 = 209$ triệu đồng.</li>
        <li>Tại $(2; 4)$: Chi phí $T = 37(2) + 45(4) = 254$ triệu đồng.</li>
      </ul>
    </li>
    <li>Với $x \\ge 3$: vì chi phí mỗi xe là $37$ triệu đồng nên với $x \\ge 3$ thì riêng chi phí xe X đã là $37 \\times 3 = 111$, cộng thêm số xe Y cần thiết để đủ 59 tấn hàng B thì tổng chi phí đều lớn hơn $209$.</li>
  </ul>
  <p>Do đó, chi phí nhỏ nhất là $T = 209$ triệu đồng.</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$10T = 10 \\times 209 = 2090.$$
  </div>
  <div style="text-align: center; margin: 12px 0;">
    <strong style="color: #dc2626; font-size: 1.15rem; background: #fee2e2; padding: 6px 16px; border-radius: 8px; border: 1px solid #f87171;">
      Đáp số: 2090
    </strong>
  </div>
</div>"""
    },
    {
        "id": 3,
        "part": "III",
        "grade": "12",
        "topic": "Ứng dụng tích phân tính thể tích khối tròn xoay giới hạn bởi Elip và Đường tròn",
        "question": "Người ta cần tính thể tích của một vật thể được chế tác như sau. Trên mặt phẳng với hệ tọa độ $Oxy$ (một đơn vị độ dài trên mỗi trục tương ứng với một xắc-ti-mét trong thực tế), gọi $(H)$ là hình phẳng được tô đậm, giới hạn bởi đường elip $\\dfrac{x^2}{256} + \\dfrac{y^2}{48} = 1$ và đường tròn tâm $O$ có bán kính $10$ (xem hình minh họa bên dưới). Vật thể có dạng khối tròn xoay được tạo thành khi quay hình phẳng $(H)$ quanh trục hoành.<br>Thể tích của vật thể nói trên bằng bao nhiêu xăng-ti-mét khối (không làm tròn kết quả các phép tính trung gian, chỉ làm tròn kết quả phép tính cuối cùng đến hàng đơn vị)?",
        "svg": SVG_CAU3_ELIP_TRON,
        "correctAnswer": "1743",
        "acceptableAnswers": ["1743"],
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Phương trình nửa trên của đường tròn: $y_1^2 = 100 - x^2$.</p>
  <p>Phương trình nửa trên của elip: $y_2^2 = 48\\left(1 - \\dfrac{x^2}{256}\\right) = 48 - \\dfrac{3}{16}x^2$.</p>
  <p>Hoành độ giao điểm của hai đường cong là nghiệm của phương trình:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.05rem;">
    $$100 - x^2 = 48 - \\dfrac{3}{16}x^2 \\iff \\dfrac{13}{16}x^2 = 52 \\iff x^2 = 64 \\iff x = \\pm 8.$$
  </div>
  <p>Thể tích của khối tròn xoay tạo thành khi quay hình phẳng $(H)$ quanh trục hoành $Ox$ là:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$V = \\pi \\int_{-8}^8 \\left( y_1^2 - y_2^2 \\right) dx = \\pi \\int_{-8}^8 \\left[ (100 - x^2) - \\left(48 - \\dfrac{3}{16}x^2\\right) \\right] dx$$
    $$= 2\\pi \\int_0^8 \\left( 52 - \\dfrac{13}{16}x^2 \\right) dx = 2\\pi \\left.\\left( 52x - \\dfrac{13}{48}x^3 \\right)\\right|_0^8$$
    $$= 2\\pi \\left( 416 - \\dfrac{416}{3} \\right) = \\dfrac{1664\\pi}{3} \\approx 1742,54\\text{ cm}^3.$$
  </div>
  <p>Làm tròn kết quả đến hàng đơn vị: $1743$.</p>
  <div style="text-align: center; margin: 12px 0;">
    <strong style="color: #dc2626; font-size: 1.15rem; background: #fee2e2; padding: 6px 16px; border-radius: 8px; border: 1px solid #f87171;">
      Đáp số: 1743
    </strong>
  </div>
</div>"""
    },
    {
        "id": 4,
        "part": "III",
        "grade": "12",
        "topic": "Bài toán tô màu bảng ô vuông 5x5 - Đồ thị và Tổ hợp",
        "question": "Cho bảng $5 \\times 5$ gồm $25$ ô vuông đơn vị và cho bốn màu. Người ta tô mỗi ô trong bảng bởi một trong bốn màu đã cho sao cho hai ô bất kì có chung đỉnh hoặc chung cạnh thì khác màu. Hai cách tô màu bảng được gọi là giống nhau nếu mỗi ô của bảng có cùng màu ở cả hai cách tô (không tính đến thứ tự tô màu các ô). Gọi $S$ là số cách tô màu bảng phân biệt thỏa mãn điều kiện trên. Giá trị của $9S$ bằng bao nhiêu?",
        "svg": "",
        "correctAnswer": "3240",
        "acceptableAnswers": ["3240"],
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Mỗi khối ô vuông $2 \\times 2$ gồm 4 ô đôi một chung đỉnh hoặc chung cạnh nên bắt buộc phải tô bằng 4 màu phân biệt.</p>
  <p>Có 2 dạng cấu trúc tô màu thỏa mãn cho bảng $5 \\times 5$:</p>
  <ul>
    <li><strong>Dạng 1 (Theo cột):</strong> Các cột lẻ nhận 2 màu từ tập $A$, các cột chẵn nhận 2 màu từ tập $B$ ($A, B$ là phân hoạch của 4 màu thành hai tập có 2 phần tử).
      <br>Số cách chọn tập $A$ là $C_4^2 = 6$. Mỗi cột có 2 cách tô xen kẽ, có 5 cột &rArr; $6 \\times 2^5 = 192$ cách.
    </li>
    <li><strong>Dạng 2 (Theo hàng):</strong> Các hàng lẻ nhận màu từ tập $A$, các hàng chẵn nhận màu từ tập $B$.
      <br>Tương tự có $6 \\times 2^5 = 192$ cách.
    </li>
    <li><strong>Số cách trùng lặp giữa hai dạng:</strong> Là các cách mà màu sắc được xác định hoàn toàn theo tính chẵn lẻ của cả hàng và cột, gồm $4! = 24$ cách.</li>
  </ul>
  <p>Tổng số cách tô màu phân biệt là:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.05rem;">
    $$S = 192 + 192 - 24 = 360.$$
  </div>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$9S = 9 \\times 360 = 3240.$$
  </div>
  <div style="text-align: center; margin: 12px 0;">
    <strong style="color: #dc2626; font-size: 1.15rem; background: #fee2e2; padding: 6px 16px; border-radius: 8px; border: 1px solid #f87171;">
      Đáp số: 3240
    </strong>
  </div>
</div>"""
    },
    {
        "id": 5,
        "part": "III",
        "grade": "12",
        "topic": "Tối ưu hóa lợi nhuận doanh nghiệp - Ứng dụng hàm số bậc hai",
        "question": "Một doanh nghiệp dự kiến sản xuất không quá $2000$ sản phẩm cùng loại. Giả sử rằng doanh thu của doanh nghiệp khi sản xuất $x$ sản phẩm ($x \\in \\mathbb{N};\\; 0 \\le x \\le 2000$) là $R(x) = 16x - 0,005x^2$ (triệu đồng) và doanh nghiệp phải nộp một khoản thuế là $5\\%$ của doanh thu $R(x)$. Chi phí để sản xuất mỗi sản phẩm là bốn triệu đồng. Lợi nhuận của doanh nghiệp (khi sản xuất $x$ sản phẩm) được tính theo công thức: Lợi nhuận bằng doanh thu trừ đi thuế và chi phí. Doanh nghiệp phải sản xuất bao nhiêu sản phẩm để thu được lợi nhuận lớn nhất?",
        "svg": "",
        "correctAnswer": "1179",
        "acceptableAnswers": ["1179"],
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Doanh thu sau thuế của doanh nghiệp khi sản xuất $x$ sản phẩm:</p>
  <div style="text-align: center; margin: 8px 0;">
    $$R_{\\text{sau thuế}}(x) = 0,95 R(x) = 0,95(16x - 0,005x^2) = 15,2x - 0,00475x^2.$$
  </div>
  <p>Chi phí sản xuất $x$ sản phẩm là: $C(x) = 4x$ (triệu đồng).</p>
  <p>Lợi nhuận của doanh nghiệp là:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.05rem;">
    $$L(x) = R_{\\text{sau thuế}}(x) - C(x) = -0,00475x^2 + 11,2x.$$
  </div>
  <p>Hàm số $L(x)$ là hàm bậc hai có $a = -0,00475 < 0$, đạt giá trị lớn nhất tại đỉnh của parabol:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$x_0 = -\\dfrac{b}{2a} = \\dfrac{11,2}{2 \\times 0,00475} = \\dfrac{22400}{19} \\approx 1178,947.$$
  </div>
  <p>Vì số sản phẩm $x \\in \\mathbb{N}$, ta xét hai số nguyên lân cận là $1178$ và $1179$:</p>
  <div style="text-align: center; margin: 8px 0;">
    $$|1179 - x_0| = \\dfrac{1}{19} < |1178 - x_0| = \\dfrac{18}{19}$$
  </div>
  <p>Do $x = 1179$ gần đỉnh hơn, nên $L(1179) > L(1178)$. Doanh nghiệp cần sản xuất $1179$ sản phẩm để thu được lợi nhuận lớn nhất.</p>
  <div style="text-align: center; margin: 12px 0;">
    <strong style="color: #dc2626; font-size: 1.15rem; background: #fee2e2; padding: 6px 16px; border-radius: 8px; border: 1px solid #f87171;">
      Đáp số: 1179
    </strong>
  </div>
</div>"""
    },
    {
        "id": 6,
        "part": "III",
        "grade": "12",
        "topic": "Thể tích tứ diện gần đều - Phương pháp hình hộp chữ nhật ngoại tiếp",
        "question": "Cho tứ diện $ABCD$ có $AB = CD = 20\\sqrt{5}$, $AC = BD = 50$, $AD = BC = 10\\sqrt{13}$. Thể tích của khối tứ diện đã cho bằng bao nhiêu?",
        "svg": "",
        "correctAnswer": "8000",
        "acceptableAnswers": ["8000"],
        "explanation": """<div class="solution-step">
  <strong>Lời giải chi tiết từ ThS. Lương Thanh Sáng:</strong>
  <p>Tứ diện $ABCD$ có các cặp cạnh đối bằng nhau đôi một:</p>
  <div style="text-align: center; margin: 8px 0;">
    $$a^2 = AB^2 = CD^2 = (20\\sqrt{5})^2 = 2000$$
    $$b^2 = AC^2 = BD^2 = 50^2 = 2500$$
    $$c^2 = AD^2 = BC^2 = (10\\sqrt{13})^2 = 1300$$
  </div>
  <p>Đây là tứ diện gần đều. Dựng hình hộp chữ nhật ngoại tiếp tứ diện có ba kích thước $x, y, z$ sao cho các cạnh của tứ diện là đường chéo các mặt của hình hộp chữ nhật:</p>
  <div style="text-align: center; margin: 8px 0;">
    $$\\begin{cases} x^2 + y^2 = 2000 \\\\ y^2 + z^2 = 2500 \\\\ z^2 + x^2 = 1300 \\end{cases} \\implies x^2 + y^2 + z^2 = \\dfrac{2000 + 2500 + 1300}{2} = 2900.$$
  </div>
  <p>Từ đó suy ra:</p>
  <div style="text-align: center; margin: 8px 0;">
    $$x^2 = 2900 - 2500 = 400 \\implies x = 20$$
    $$y^2 = 2900 - 1300 = 1600 \\implies y = 40$$
    $$z^2 = 2900 - 2000 = 900 \\implies z = 30$$
  </div>
  <p>Thể tích của khối tứ diện $ABCD$ bằng $\\dfrac{1}{3}$ thể tích hình hộp chữ nhật ngoại tiếp:</p>
  <div style="text-align: center; margin: 8px 0; font-size: 1.1rem; color: #1e3a8a;">
    $$V = \\dfrac{1}{3} xyz = \\dfrac{1}{3} \\times 20 \\times 40 \\times 30 = 8000.$$
  </div>
  <div style="text-align: center; margin: 12px 0;">
    <strong style="color: #dc2626; font-size: 1.15rem; background: #fee2e2; padding: 6px 16px; border-radius: 8px; border: 1px solid #f87171;">
      Đáp số: 8000
    </strong>
  </div>
</div>"""
    }
]

# Config
EXAM_CONFIG = {
    "title": "Đề Thi Tốt Nghiệp THPT Năm 2026 - Lần 2 - Môn Toán (Mã Đề 0110)",
    "school": "Bộ Giáo Dục và Đào Tạo • Đề Thi Chính Thức (Lần 2)",
    "schoolYear": "Kỳ thi tốt nghiệp THPT năm 2026 - Lần 2",
    "teacher": "ThS. Lương Thanh Sáng (Lời giải chi tiết & Đồ họa TikZ)",
    "timeLimitMinutes": 90,
    "totalQuestions": 22,
    "maxScore": 10.0,
    "grade": "12",
    "modes": {
        "all": {"time": 90, "label": "90 phút (Cả đề thi gồm 3 phần - 22 câu)", "count": 22},
        "part1": {"time": 45, "label": "45 phút (12 câu trắc nghiệm - 3.0 điểm)", "count": 12},
        "part2": {"time": 25, "label": "25 phút (4 câu Đúng / Sai - 4.0 điểm)", "count": 4},
        "part3": {"time": 25, "label": "25 phút (6 câu Trả lời ngắn - 3.0 điểm)", "count": 6}
    }
}

exam_obj = {
    "id": "12_BGD_0110",
    "config": EXAM_CONFIG,
    "part1": PART1_QUESTIONS,
    "part2": PART2_QUESTIONS,
    "part3": PART3_QUESTIONS
}

# Dump to JS format
with open("scripts/exam_0110_snippet.json", "w", encoding="utf-8") as f:
    json.dump(exam_obj, f, ensure_ascii=False, indent=2)

print("Generated scripts/exam_0110_snippet.json successfully!")
