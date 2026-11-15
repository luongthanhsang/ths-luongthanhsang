# -*- coding: utf-8 -*-
import re

# 1. Update js/lesson-11-12-data.js
with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    l12_text = f.read()

target_start = l12_text.find('<svg viewBox="0 0 780 230"')
target_end = l12_text.find('</svg>', target_start) + 6

exact_svg = """<svg viewBox="0 0 768 198" style="width: 100%; max-width: 768px; height: auto; display: block; margin: 0 auto; background: #ffffff;">
                <!-- ==================== HÌNH 1: d // (alpha) ==================== -->
                <g id="fig-parallel">
                  <!-- Mặt phẳng (alpha) -->
                  <polygon points="4,133 39,49 237,49 201,133" fill="#ffffff" stroke="#000000" stroke-width="2.2"/>
                  <!-- Cung góc alpha ở góc dưới trái -->
                  <path d="M 28,133 A 24 24 0 0 0 15,107" fill="none" stroke="#000000" stroke-width="1.8"/>
                  <text x="18" y="126" font-family="'Times New Roman', serif" font-size="18" font-style="italic" fill="#000000">α</text>
                  
                  <!-- Đường thẳng d phía trên -->
                  <line x1="50" y1="32" x2="236" y2="32" stroke="#000000" stroke-width="2.8" stroke-linecap="round"/>
                  <text x="210" y="24" font-family="'Segoe UI', Roboto, sans-serif" font-size="19" font-style="italic" font-weight="bold" fill="#00a4e4">d</text>
                  
                  <!-- Chú thích dưới: d // (alpha) -->
                  <text x="120" y="170" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#00a4e4">d // (α)</text>
                </g>

                <!-- ==================== HÌNH 2: d cap (alpha) = {M} ==================== -->
                <g id="fig-intersect">
                  <!-- Mặt phẳng (alpha) -->
                  <polygon points="261,133 296,49 494,49 459,133" fill="#ffffff" stroke="#000000" stroke-width="2.2"/>
                  <!-- Cung góc alpha -->
                  <path d="M 285,133 A 24 24 0 0 0 272,107" fill="none" stroke="#000000" stroke-width="1.8"/>
                  <text x="275" y="126" font-family="'Times New Roman', serif" font-size="18" font-style="italic" fill="#000000">α</text>
                  
                  <!-- Đoạn đường thẳng bên trên và xuyên qua mặt phẳng tới M: NÉT LIỀN -->
                  <line x1="368" y1="15" x2="407" y2="80" stroke="#000000" stroke-width="2.8" stroke-linecap="round"/>
                  
                  <!-- Điểm giao M (chấm tròn xanh) và nhãn M -->
                  <circle cx="407" cy="80" r="4.2" fill="#00a4e4"/>
                  <text x="418" y="72" font-family="'Segoe UI', Roboto, sans-serif" font-size="19" font-style="italic" font-weight="bold" fill="#00a4e4">M</text>
                  
                  <!-- Đoạn dưới mặt phẳng từ M đến đáy: NÉT ĐỨT -->
                  <line x1="407" y1="80" x2="439" y2="133" stroke="#000000" stroke-width="2.8" stroke-dasharray="6,4"/>
                  
                  <!-- Đoạn ló ra ngoài mặt phẳng phía dưới: NÉT LIỀN -->
                  <line x1="439" y1="133" x2="451" y2="153" stroke="#000000" stroke-width="2.8" stroke-linecap="round"/>
                  
                  <!-- Chú thích dưới: d cap (alpha) = {M} -->
                  <text x="377" y="170" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#00a4e4">d ∩ (α) = {M}</text>
                </g>

                <!-- ==================== HÌNH 3: d subset (alpha) ==================== -->
                <g id="fig-subset">
                  <!-- Mặt phẳng (alpha) -->
                  <polygon points="521,133 556,49 754,49 719,133" fill="#ffffff" stroke="#000000" stroke-width="2.2"/>
                  <!-- Cung góc alpha -->
                  <path d="M 545,133 A 24 24 0 0 0 532,107" fill="none" stroke="#000000" stroke-width="1.8"/>
                  <text x="535" y="126" font-family="'Times New Roman', serif" font-size="18" font-style="italic" fill="#000000">α</text>
                  
                  <!-- Đường thẳng d nằm trọn trong mặt phẳng: NÉT LIỀN -->
                  <line x1="575" y1="117" x2="725" y2="77" stroke="#000000" stroke-width="2.8" stroke-linecap="round"/>
                  
                  <!-- Hai chấm tròn xanh trên d -->
                  <circle cx="618" cy="105.5" r="4.2" fill="#00a4e4"/>
                  <circle cx="678" cy="89.5" r="4.2" fill="#00a4e4"/>
                  
                  <!-- Nhãn d màu xanh -->
                  <text x="705" y="68" font-family="'Segoe UI', Roboto, sans-serif" font-size="19" font-style="italic" font-weight="bold" fill="#00a4e4">d</text>
                  
                  <!-- Chú thích dưới: d subset (alpha) -->
                  <text x="637" y="170" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#00a4e4">d ⊂ (α)</text>
                </g>
              </svg>"""

if target_start != -1 and target_end != -1:
    l12_text_new = l12_text[:target_start] + exact_svg + l12_text[target_end:]
    with open('js/lesson-11-12-data.js', 'w', encoding='utf-8') as f:
        f.write(l12_text_new)
    print("Updated js/lesson-11-12-data.js with exact SVG!")
else:
    print("Could not find target SVG in js/lesson-11-12-data.js")

# 2. Update js/script.js to infer currentGrade from lesson parameter
with open('js/script.js', 'r', encoding='utf-8') as f:
    script_text = f.read()

old_grade_code = """  // Đọc URL params nếu có
  const urlParams = new URLSearchParams(window.location.search);
  let currentGrade = urlParams.get("grade") || "12";
  if (!["10", "11", "12"].includes(currentGrade)) {
    currentGrade = "10";
  }

  let currentVolume = "all"; // 'all', '1', '2'
  let currentSearch = "";
  let currentLessonId = urlParams.get("lesson") || "";"""

new_grade_code = """  // Đọc URL params nếu có
  const urlParams = new URLSearchParams(window.location.search);
  let currentLessonId = urlParams.get("lesson") || "";
  let currentGrade = urlParams.get("grade") || "";
  
  // Tự động suy luận khối lớp nếu chỉ có tham số lesson mà không có grade
  if (!currentGrade && currentLessonId) {
    if (currentLessonId.startsWith("10-")) currentGrade = "10";
    else if (currentLessonId.startsWith("11-")) currentGrade = "11";
    else if (currentLessonId.startsWith("12-")) currentGrade = "12";
  }
  if (!["10", "11", "12"].includes(currentGrade)) {
    currentGrade = "11";
  }

  let currentVolume = "all"; // 'all', '1', '2'
  let currentSearch = "";"""

if old_grade_code in script_text:
    script_text = script_text.replace(old_grade_code, new_grade_code)
    with open('js/script.js', 'w', encoding='utf-8') as f:
        f.write(script_text)
    print("Updated js/script.js with intelligent grade deduction!")
else:
    print("old_grade_code not found in js/script.js")

# 3. Bump cache version to v=20261115_02 in trac-nghiem.html and bai-hoc-so.html
for html_file in ['trac-nghiem.html', 'bai-hoc-so.html']:
    with open(html_file, 'r', encoding='utf-8') as f:
        c = f.read()
    c = c.replace('quiz-data.js?v=20261114_08', 'quiz-data.js?v=20261115_02')
    c = c.replace('script.js?v=20261114_08', 'script.js?v=20261115_02')
    c = c.replace('lesson-11-12-data.js?v=20261114_08', 'lesson-11-12-data.js?v=20261115_02')
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f"Bumped cache versions in {html_file}")
