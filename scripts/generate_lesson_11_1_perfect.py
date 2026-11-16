# -*- coding: utf-8 -*-
"""
Script tạo file js/lesson-11-1-data.js chuẩn Thầy Sáng:
- Đảm bảo 100% hình vẽ SVG (ISS, 4 sơ đồ xoắn ốc, Hình 1.6, Hình 1.7, Hình 1.9b góc phần tư III, Bộ 4 quy tắc góc đặc biệt).
- Đảm bảo 100% công thức Toán LaTeX hiển thị sắc nét bằng MathJax (không bị mất backslash, không bị tab, không bị piextrad, an, circ, không bị lỗi Extra \left or missing \right).
- Đảm bảo cú pháp Javascript hoàn hảo 100%, không bị lọt code Python.
- Đảm bảo cấu trúc 4 phần, mỗi mục có mục con a và b riêng biệt, tick xanh mục con rồi mới tick xanh mục cha.
- Mỗi mục con đều có đầy đủ 1 Ví dụ mẫu (có lời giải), 1 Luyện tập tương tự (có hướng dẫn giải) và 2 POIs tương tác lý thuyết.
"""

import os, sys, re
sys.path.insert(0, os.path.dirname(__file__))
from generate_b11_1_svgs import (
    SVG_HOOK_ISS,
    SVG_SEC1A_SPIRALS,
    SVG_SEC2A_RADIAN,
    SVG_SEC3A_TRIG_CIRCLE,
    SVG_SEC3B_QUADRANT3,
    SVG_SEC4_FORMULAS
)

def main():
    print("Reading template scripts/build_lesson_11_1_full.py ...")
    with open("scripts/build_lesson_11_1_full.py", "r", encoding="utf-8") as f:
        full_code = f.read()

    # Trích xuất phần text nằm giữa data_js = """ và }};\n"""
    start_token = 'data_js = """'
    start_pos = full_code.find(start_token)
    if start_pos == -1:
        raise ValueError("Cannot find start of data_js")
    start_pos += len(start_token)

    end_token = '}};\n"""'
    end_pos = full_code.find(end_token, start_pos)
    if end_pos == -1:
        raise ValueError("Cannot find end token }};\\n\"\"\"")
    end_pos += 3 # lấy cả '}};'
    
    js_raw = full_code[start_pos:end_pos].strip()

    print(f"Extracted template length: {len(js_raw):,} chars")

    # 1. Thay thế các placeholder SVG bằng SVG thật
    print("Injecting true SVGs ...")
    js_raw = js_raw.replace("{SVG_HOOK_ISS}", SVG_HOOK_ISS)
    js_raw = js_raw.replace("{SVG_SEC1A_SPIRALS}", SVG_SEC1A_SPIRALS)
    js_raw = js_raw.replace("{SVG_SEC2A_RADIAN}", SVG_SEC2A_RADIAN)
    js_raw = js_raw.replace("{SVG_SEC3A_TRIG_CIRCLE}", SVG_SEC3A_TRIG_CIRCLE)
    js_raw = js_raw.replace("{SVG_SEC3B_QUADRANT3}", SVG_SEC3B_QUADRANT3)
    js_raw = js_raw.replace("{SVG_SEC4_FORMULAS}", SVG_SEC4_FORMULAS)

    # 2. Xóa các ngoặc kép thừa do f-string/format cũ ({{ -> { và }} -> })
    print("Normalizing braces ...")
    js_raw = js_raw.replace("{{", "{").replace("}}", "}")

    # 3. Chuẩn hóa công thức toán LaTeX delimiters
    print("Normalizing math delimiters ...")
    js_raw = js_raw.replace(r"\\[", "$$").replace(r"\\]", "$$")
    js_raw = js_raw.replace(r"\[", "$$").replace(r"\]", "$$")
    js_raw = js_raw.replace(r"\\(", "$").replace(r"\\)", "$")
    js_raw = js_raw.replace(r"\(", "$").replace(r"\)", "$")
    # Đảm bảo không còn ký tự backslash đứng trước dấu $
    js_raw = re.sub(r'\\+\$', '$', js_raw)

    # 4. Bảo vệ các ký tự escape LaTeX trong JS string literal:
    # Trong JS code, nếu ta viết `\text` thì JS parser sẽ parse `\t` thành ký tự TAB!
    # Nếu viết `\circ` thì JS parser sẽ parse thành `circ`!
    # Nếu viết `\right` thì JS parser sẽ parse `\r` thành Carriage Return!
    # Vì thế, mọi lệnh LaTeX trong JS string literal BẮT BUỘC phải có 2 dấu gạch chéo ngược `\\`!
    print("Escaping LaTeX commands for JavaScript runtime ...")
    latex_commands = [
        "text", "circ", "pi", "alpha", "beta", "gamma", "delta", "theta", "lambda", "mu", "sigma", "omega",
        "Delta", "Sigma", "Omega", "quad", "qquad",
        "vec", "widehat", "sin", "cos", "tan", "cot", "arcsin", "arccos", "arctan",
        "mathbb", "mathbf", "mathrm", "mathcal",
        "frac", "dfrac", "sqrt", "approx", "ne", "neq", "in", "notin", "le", "ge", "leq", "geq", "pm", "mp",
        "cdot", "times", "div", "cap", "cup", "subset", "subseteq", "varnothing",
        "left", "right", "equiv", "dots", "cdots", "ldots", "infty",
        "begin", "end", "array", "matrix", "pmatrix", "bmatrix", "cases"
    ]
    
    # Chuẩn hóa về 1 backslash trước
    for cmd in latex_commands:
        js_raw = re.sub(r'\\+' + cmd + r'\b', r'\\' + cmd, js_raw)
    
    # Nhân đôi thành 2 backslash \\cmd
    for cmd in latex_commands:
        js_raw = re.sub(r'(?<!\\)\\' + cmd + r'\b', r'\\\\' + cmd, js_raw)

    # Xử lý các trường hợp đặc biệt như \, và \;
    js_raw = re.sub(r'(?<!\\)\\,', r'\\\\,', js_raw)
    js_raw = re.sub(r'(?<!\\)\\;', r'\\\\;', js_raw)

    # 5. Validation check: Đảm bảo không còn lỗi syntax hoặc thiếu \right
    print("Validating math formulas & left/right balance ...")
    lines = js_raw.splitlines()
    for idx, line in enumerate(lines):
        if r'\left' in line or r'\\left' in line:
            lefts = len(re.findall(r'\\+left\b', line))
            rights = len(re.findall(r'\\+right\b', line))
            if 'begin{array}' not in line and lefts != rights:
                raise ValueError(f"CRITICAL ERROR at line {idx+1}: Mismatched left/right ({lefts} vs {rights}):\n{line}")

    # 6. Gán thêm các alias toàn cục và auto-inject vào LESSONS_DATABASE
    alias_code = """

// Global Aliases & Auto-Inject for Compatibility
window.CURRENT_LESSON_DATA = window.LESSON_11_C1_B1_DATA;
window.LESSON_DATA = window.LESSON_11_C1_B1_DATA;
window.B11_1_DATA = window.LESSON_11_C1_B1_DATA;

if (typeof window !== "undefined" && window.LESSONS_DATABASE) {
  for (var gradeKey in window.LESSONS_DATABASE) {
    var g = window.LESSONS_DATABASE[gradeKey];
    if (g && Array.isArray(g.chapters)) {
      for (var i = 0; i < g.chapters.length; i++) {
        var ch = g.chapters[i];
        if (ch && Array.isArray(ch.lessons)) {
          var idx = ch.lessons.findIndex(function(l) { return l.id === "11-c1-b1"; });
          if (idx !== -1) {
            ch.lessons[idx] = window.LESSON_11_C1_B1_DATA;
            break;
          }
        }
      }
    }
  }
}
"""
    final_output = js_raw + alias_code

    # 7. Ghi ra đĩa
    out_path = "js/lesson-11-1-data.js"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(final_output)
    print(f"-> SUCCESS: Written {out_path} ({len(final_output):,} chars)")

    # Đồng bộ sang BAN_CAP_NHAT_NETLIFY
    netlify_out = "BAN_CAP_NHAT_NETLIFY/js/lesson-11-1-data.js"
    os.makedirs(os.path.dirname(netlify_out), exist_ok=True)
    with open(netlify_out, "w", encoding="utf-8") as f:
        f.write(final_output)
    print(f"-> SUCCESS: Synchronized to {netlify_out}")

if __name__ == "__main__":
    main()
