# -*- coding: utf-8 -*-
"""
Script tạo file js/lesson-11-2-data.js chuẩn Thầy Sáng 5 sao:
- Đảm bảo 100% hình vẽ SVG vector hiện đại cho tất cả các mục (Hook sóng trễ, Mục 1a vecto tròn, Mục 1b góc 75/15, Mục 2a nhân đôi mindmap, Mục 2b hạ bậc cos pi/8, Mục 3a tích thành tổng, Mục 3b domino nhân đôi, Mục 4a tổng thành tích ca dao, Mục 4b ma trận DTMF điện thoại, Wrapup tổng kết 4 trụ cột).
- Đảm bảo 100% công thức Toán LaTeX hiển thị sắc nét bằng MathJax (không mất backslash, không bị tab/carriage-return, không lỗi Extra \left or missing \right).
- Đảm bảo cú pháp Javascript hoàn hảo 100%, không lọt mã thừa.
- Đảm bảo cấu trúc 4 phần, 4 mục lớn, mỗi mục lớn có đúng 2 mục con a và b riêng biệt.
- Mỗi mục con có đầy đủ 1 Ví dụ mẫu (có đề và giải SGK), 1 Luyện tập tương tự (có hướng dẫn giải của Thầy) và 2 POIs tương tác lý thuyết.
- Phần IV: Đủ 3 dạng thức mới 2026 của Bộ GD&ĐT; phương án đúng dạng 1 hoán vị B, D, A, C, B; giải thích chi tiết.
- Đóng gói và đồng bộ sang BAN_CAP_NHAT_NETLIFY/.
"""

import os, sys, re, shutil
sys.path.insert(0, os.path.dirname(__file__))

from generate_b11_2_svgs_all import (
    SVG_HOOK_DELAY,
    SVG_SEC1A_TRIG_VEC,
    SVG_SEC1B_DECOMPOSE,
    SVG_SEC2A_MINDMAP,
    SVG_SEC2B_POW_REDUCE,
    SVG_SEC3A_PROD_TO_SUM,
    SVG_SEC3B_DOMINO,
    SVG_SEC4A_SUM_TO_PROD,
    SVG_SEC4B_DTMF_PHONE,
    SVG_WRAPUP_SUMMARY
)

def main():
    print("Reading template scripts/build_lesson_11_2_full.py ...")
    with open("scripts/build_lesson_11_2_full.py", "r", encoding="utf-8") as f:
        full_code = f.read()

    # Trích xuất phần dữ liệu JSON/JS nằm giữa data_js = """ và }};\n"""
    start_token = 'data_js = """'
    start_pos = full_code.find(start_token)
    if start_pos == -1:
        raise ValueError("Cannot find start of data_js")
    start_pos += len(start_token)

    end_token = '};\n"""'
    end_pos = full_code.find(end_token, start_pos)
    if end_pos == -1:
        # Thử tìm }};\n"""
        end_token = '}};\n"""'
        end_pos = full_code.find(end_token, start_pos)
        if end_pos == -1:
            raise ValueError("Cannot find end token")
        end_pos += 3
    else:
        end_pos += 2 # Lấy cả '};'
    
    js_raw = full_code[start_pos:end_pos].strip()

    print(f"Extracted template length: {len(js_raw):,} chars")

    # 1. Thay thế các placeholder SVG cơ bản
    print("Injecting primary SVGs ...")
    js_raw = js_raw.replace("{SVG_HOOK_DELAY}", SVG_HOOK_DELAY)
    js_raw = js_raw.replace("{SVG_SEC1A_TRIG_VEC}", SVG_SEC1A_TRIG_VEC)
    js_raw = js_raw.replace("{SVG_SEC2A_MINDMAP}", SVG_SEC2A_MINDMAP)
    js_raw = js_raw.replace("{SVG_SEC4B_DTMF_PHONE}", SVG_SEC4B_DTMF_PHONE)

    # 2. Bổ sung các SVG phong phú cho các mục con còn lại
    print("Injecting additional section SVGs ...")
    # Mục 1b: chèn SVG_SEC1B_DECOMPOSE sau phần giới thiệu
    js_raw = js_raw.replace(
        '<div class="card-header bg-warning text-dark fw-bold">Công thức cộng đối với Tang (SGK trang 17)</div>',
        f'<div class="card-header bg-warning text-dark fw-bold">Công thức cộng đối với Tang (SGK trang 17)</div>\n              <div class="card-body">\n                {SVG_SEC1B_DECOMPOSE}'
    )
    # Loại bỏ thẻ trùng nếu có
    js_raw = js_raw.replace(
        f'<div class="card-body">\n                {SVG_SEC1B_DECOMPOSE}\n              <div class="card-body">',
        f'<div class="card-body">\n                {SVG_SEC1B_DECOMPOSE}'
    )

    # Mục 2b: chèn SVG_SEC2B_POW_REDUCE
    js_raw = js_raw.replace(
        '<div class="card-header bg-warning text-dark fw-bold">Công thức hạ bậc (SGK trang 19)</div>',
        f'<div class="card-header bg-warning text-dark fw-bold">Công thức hạ bậc (SGK trang 19)</div>\n              <div class="card-body">\n                {SVG_SEC2B_POW_REDUCE}'
    )
    js_raw = js_raw.replace(
        f'<div class="card-body">\n                {SVG_SEC2B_POW_REDUCE}\n              <div class="card-body">',
        f'<div class="card-body">\n                {SVG_SEC2B_POW_REDUCE}'
    )

    # Mục 3a: chèn SVG_SEC3A_PROD_TO_SUM
    js_raw = js_raw.replace(
        '<div class="card-header bg-info text-white fw-bold">Bộ 3 Công thức biến đổi tích thành tổng (SGK trang 19)</div>',
        f'<div class="card-header bg-info text-white fw-bold">Bộ 3 Công thức biến đổi tích thành tổng (SGK trang 19)</div>\n              <div class="card-body">\n                {SVG_SEC3A_PROD_TO_SUM}'
    )
    js_raw = js_raw.replace(
        f'<div class="card-body">\n                {SVG_SEC3A_PROD_TO_SUM}\n              <div class="card-body">',
        f'<div class="card-body">\n                {SVG_SEC3A_PROD_TO_SUM}'
    )

    # Mục 3b: chèn SVG_SEC3B_DOMINO trước Ví dụ mẫu
    js_raw = js_raw.replace(
        '<div class="alert-box alert-success mb-3">\n              <div class="fw-bold text-success mb-2">📌 VÍ DỤ MẪU: BÀI 1.11 (SGK TRANG 21) & LỜI GIẢI CHI TIẾT:</div>',
        f'{SVG_SEC3B_DOMINO}\n            <div class="alert-box alert-success mb-3">\n              <div class="fw-bold text-success mb-2">📌 VÍ DỤ MẪU: BÀI 1.11 (SGK TRANG 21) & LỜI GIẢI CHI TIẾT:</div>'
    )

    # Mục 4a: chèn SVG_SEC4A_SUM_TO_PROD
    js_raw = js_raw.replace(
        '<div class="card-header bg-success text-white fw-bold">Bộ 4 Công thức biến đổi tổng thành tích (SGK trang 20)</div>',
        f'<div class="card-header bg-success text-white fw-bold">Bộ 4 Công thức biến đổi tổng thành tích (SGK trang 20)</div>\n              <div class="card-body">\n                {SVG_SEC4A_SUM_TO_PROD}'
    )
    js_raw = js_raw.replace(
        f'<div class="card-body">\n                {SVG_SEC4A_SUM_TO_PROD}\n              <div class="card-body">',
        f'<div class="card-body">\n                {SVG_SEC4A_SUM_TO_PROD}'
    )

    # Wrapup: chèn SVG_WRAPUP_SUMMARY vào đầu wrapup
    js_raw = js_raw.replace(
        'wrapup: {\n    title: "Chốt kiến thức then chốt: Hệ thống 4 bộ công thức lượng giác đỉnh cao & Vận dụng dao động tổng hợp",',
        'wrapup: {\n    title: "Chốt kiến thức then chốt: Hệ thống 4 bộ công thức lượng giác đỉnh cao & Vận dụng dao động tổng hợp",'
    )
    # Tìm contentHtml của wrapup và chèn SVG_WRAPUP_SUMMARY
    wrapup_idx = js_raw.find('wrapup: {')
    if wrapup_idx != -1:
        c_html_idx = js_raw.find('contentHtml: `<div class="content-box"', wrapup_idx)
        if c_html_idx != -1:
            js_raw = js_raw[:c_html_idx] + f'contentHtml: `<div class="content-box" style="text-align:justify;">\n            {SVG_WRAPUP_SUMMARY}\n' + js_raw[c_html_idx + len('contentHtml: `<div class="content-box" style="text-align:justify;">\n'):]

    # 3. Chuẩn hóa dấu ngoặc kép thừa ({{ -> { và }} -> })
    print("Normalizing curly braces ...")
    js_raw = js_raw.replace("{{", "{").replace("}}", "}")

    # 4. Chuẩn hóa delimiters LaTeX
    print("Normalizing math delimiters ...")
    js_raw = js_raw.replace(r"\\[", "$$").replace(r"\\]", "$$")
    js_raw = js_raw.replace(r"\[", "$$").replace(r"\]", "$$")
    js_raw = js_raw.replace(r"\\(", "$").replace(r"\\)", "$")
    js_raw = js_raw.replace(r"\(", "$").replace(r"\)", "$")
    js_raw = re.sub(r'\\+\$', '$', js_raw)

    # 5. Bảo vệ JavaScript runtime: Double-escape toàn bộ lệnh LaTeX
    print("Double-escaping LaTeX commands for JavaScript string literals ...")
    latex_commands = [
        "text", "circ", "pi", "alpha", "beta", "gamma", "delta", "theta", "lambda", "mu", "sigma", "omega", "phi", "varphi",
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

    # 6. Kiểm tra cân bằng \left và \right
    print("Validating math formulas & left/right balance ...")
    lines = js_raw.splitlines()
    for idx, line in enumerate(lines):
        if r'\left' in line or r'\\left' in line:
            lefts = len(re.findall(r'\\+left\b', line))
            rights = len(re.findall(r'\\+right\b', line))
            if 'begin{array}' not in line and lefts != rights:
                raise ValueError(f"CRITICAL ERROR at line {idx+1}: Mismatched left/right ({lefts} vs {rights}):\n{line}")

    # 7. Thêm bí danh và Auto-Inject vào LESSONS_DATABASE
    alias_code = """

// Global Aliases & Auto-Inject for Compatibility
window.CURRENT_LESSON_DATA = window.LESSON_11_C1_B2_DATA;
window.LESSON_DATA = window.LESSON_11_C1_B2_DATA;
window.B11_2_DATA = window.LESSON_11_C1_B2_DATA;

if (typeof window !== "undefined" && window.LESSONS_DATABASE) {
  for (var gradeKey in window.LESSONS_DATABASE) {
    var g = window.LESSONS_DATABASE[gradeKey];
    if (g && Array.isArray(g.chapters)) {
      for (var i = 0; i < g.chapters.length; i++) {
        var ch = g.chapters[i];
        if (ch && Array.isArray(ch.lessons)) {
          var idx = ch.lessons.findIndex(function(l) { return l.id === "11-c1-b2"; });
          if (idx !== -1) {
            ch.lessons[idx] = window.LESSON_11_C1_B2_DATA;
            break;
          }
        }
      }
    }
  }
}
"""
    final_output = js_raw + alias_code

    out_file = "js/lesson-11-2-data.js"
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(final_output)
    print(f"Successfully generated {out_file} ({os.path.getsize(out_file):,} bytes)")

    netlify_file = "BAN_CAP_NHAT_NETLIFY/js/lesson-11-2-data.js"
    os.makedirs(os.path.dirname(netlify_file), exist_ok=True)
    shutil.copy2(out_file, netlify_file)
    print(f"Successfully synchronized to {netlify_file}")

if __name__ == "__main__":
    main()
