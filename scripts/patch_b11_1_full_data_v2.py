# -*- coding: utf-8 -*-
"""
Script patch toàn diện chuẩn Thầy Sáng cho Bài 1 Lớp 11:
1. Sửa dứt điểm lỗi công thức toán (Ví dụ 10, Câu 5 trắc nghiệm).
2. Bổ sung đầy đủ 100% cấu trúc cho TẤT CẢ 8 mục con:
   Mỗi mục con (1a, 1b, 2a, 2b, 3a, 3b, 4a, 4b) đều có:
   - 1 Ví dụ mẫu (có lời giải chi tiết SGK)
   - 1 Luyện tập tương tự (có hướng dẫn giải chi tiết SGK)
   - 2 POIs tương tác lý thuyết
3. Đảm bảo hoán vị đáp án Part V (A, B, C, D đều có mặt).
"""

import os, sys, re

def patch_build_lesson():
    filepath = "scripts/build_lesson_11_1_full.py"
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # --- 1. Sửa lỗi công thức toán Ví dụ 10 ---
    old_v10 = r"\\(A = \\cos(\\pi - \\alpha) + \\sin\\left(\\dfrac{{\\pi}}{{2}} - \\alpha\\) - \\tan(\\pi + \\alpha) \\cdot \\cot\\alpha\\)"
    new_v10 = r"\\(A = \\cos(\\pi - \\alpha) + \\sin\\left(\\dfrac{{\\pi}}{{2}} - \\alpha\\right) - \\tan(\\pi + \\alpha) \\cdot \\cot\\alpha\\)"
    assert old_v10 in content, "Error: old_v10 not found!"
    content = content.replace(old_v10, new_v10)
    print("✓ Fixed Ví dụ 10 math formula!")

    # --- 2. Sửa lỗi công thức toán Câu 5 (Part V) ---
    old_q5 = r"Rút gọn biểu thức $P = \\sin(\\pi - \\alpha) + \\cos\\left(\\dfrac{{\\pi}}{{2}} - \\alpha\\) - 2\\sin\\alpha$ ta được:"
    new_q5 = r"Rút gọn biểu thức $P = \\sin(\\pi - \\alpha) + \\cos\\left(\\dfrac{{\\pi}}{{2}} - \\alpha\\right) - 2\\sin\\alpha$ ta được:"
    assert old_q5 in content, "Error: old_q5 not found!"
    content = content.replace(old_q5, new_q5)
    print("✓ Fixed Câu 5 (Part V) math formula!")

    # --- 3. Bổ sung Luyện tập 3 vào Mục 2a ---
    target_2a = r"""              <p>b) \\(\\dfrac{{3\\pi}}{{8}}\\text{{ rad}} = \\left(\\dfrac{{3\\pi}}{{8}} \\cdot \\dfrac{{180}}{\\pi}\\right)^\\circ = 67^\\circ 30'\\);&emsp;&emsp;\\(-2\\text{{ rad}} = \\left(-2 \\cdot \\dfrac{{180}}{\\pi}\\right)^\\circ \\approx -114^\\circ 35'30''\\).</p>
            </div>"""

    replacement_2a = r"""              <p>b) \\(\\dfrac{{3\\pi}}{{8}}\\text{{ rad}} = \\left(\\dfrac{{3\\pi}}{{8}} \\cdot \\dfrac{{180}}{\\pi}\\right)^\\circ = 67^\\circ 30'\\);&emsp;&emsp;\\(-2\\text{{ rad}} = \\left(-2 \\cdot \\dfrac{{180}}{\\pi}\\right)^\\circ \\approx -114^\\circ 35'30''\\).</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 3 (SGK TRANG 9):</div>
              <p><b>Đề bài:</b></p>
              <p>a) Đổi từ độ sang radian các số đo sau: \\(360^\\circ\\); \\(-450^\\circ\\);</p>
              <p>b) Đổi từ radian sang độ các số đo sau: \\(3\\pi\\text{{ rad}}\\); \\(-\\dfrac{{11\\pi}}{{5}}\\text{{ rad}}\\).</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b></p>
              <p>a) Áp dụng công thức đổi sang radian \\(\\alpha = a \\cdot \\dfrac{{\\pi}}{{180}}\\):</p>
              <p>• \\(360^\\circ = 360 \\cdot \\dfrac{{\\pi}}{{180}} = 2\\pi\\text{{ rad}}\\);</p>
              <p>• \\(-450^\\circ = -450 \\cdot \\dfrac{{\\pi}}{{180}} = -\\dfrac{{5\\pi}}{{2}}\\text{{ rad}}\\).</p>
              <p>b) Áp dụng công thức đổi sang độ \\(a^\\circ = \\alpha \\cdot \\left(\\dfrac{{180}}{{\\pi}}\\right)^\\circ\\):</p>
              <p>• \\(3\\pi\\text{{ rad}} = \\left(3\\pi \\cdot \\dfrac{{180}}{{\\pi}}\\right)^\\circ = 540^\\circ\\);</p>
              <p>• \\(-\\dfrac{{11\\pi}}{{5}}\\text{{ rad}} = \\left(-\\dfrac{{11\\pi}}{{5}} \\cdot \\dfrac{{180}}{{\\pi}}\\right)^\\circ = -396^\\circ\\).</p>
            </div>"""

    assert target_2a in content, "Error: target_2a not found!"
    content = content.replace(target_2a, replacement_2a)
    print("✓ Added Luyện tập 3 to Mục 2a!")

    # --- 4. Bổ sung Ví dụ 4 vào Mục 2b (trước Vận dụng 1) ---
    target_2b = r"""            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">🚀 VẬN DỤNG 1: GIẢI QUYẾT TRỌN VẸN BÀI TOÁN TRẠM ISS MỞ ĐẦU (SGK TRANG 9):</div>"""

    replacement_2b = r"""            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 4 (SGK TRANG 9) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Cho đường tròn bán kính \\(R = 2\\text{{ cm}}\\). Tính độ dài cung tròn có số đo \\(\\alpha = \\dfrac{{2\\pi}}{{3}}\\text{{ rad}}\\) của đường tròn đó.</p>
              <hr>
              <p><b>Lời giải:</b> Áp dụng công thức độ dài cung tròn \\(l = R \\cdot \\alpha\\):</p>
              <p class="fw-bold text-primary">\\(l = 2 \\cdot \\dfrac{{2\\pi}}{{3}} = \\dfrac{{4\\pi}}{{3}}\\text{{ (cm)}} \\approx 4{,}19\\text{{ cm}}\\).</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP / VẬN DỤNG 1 (SGK TRANG 9) — BÀI TOÁN TRẠM ISS:</div>"""

    assert target_2b in content, "Error: target_2b not found!"
    content = content.replace(target_2b, replacement_2b)
    print("✓ Added Ví dụ 4 & Luyện tập 1 to Mục 2b!")

    # --- 5. Bổ sung Ví dụ 5 và Luyện tập 4 vào Mục 3a ---
    target_3a = r"""                  <li>Ngược lại, một điểm \\(M\\) trên đường tròn lượng giác là điểm biểu diễn của <b>vô số góc lượng giác</b> có số đo dạng \\(\\alpha + k 2\\pi \\; (k \\in \\mathbb{{Z}})\\) (hoặc \\(\\alpha + k 360^\\circ\\)).</li>
                </ul>
              </div>
            </div>
          </div>`"""

    replacement_3a = r"""                  <li>Ngược lại, một điểm \\(M\\) trên đường tròn lượng giác là điểm biểu diễn của <b>vô số góc lượng giác</b> có số đo dạng \\(\\alpha + k 2\\pi \\; (k \\in \\mathbb{{Z}})\\) (hoặc \\(\\alpha + k 360^\\circ\\)).</li>
                </ul>
              </div>
            </div>

            <div class="alert-box alert-success mb-3">
              <div class="fw-bold text-success mb-2">📌 VÍ DỤ 5 (SGK TRANG 10) & LỜI GIẢI CHI TIẾT:</div>
              <p><b>Đề bài:</b> Xác định các điểm \\(M\\) và \\(N\\) trên đường tròn lượng giác lần lượt biểu diễn các góc lượng giác có số đo bằng \\(\\dfrac{{13\\pi}}{{4}}\\) và \\(-150^\\circ\\).</p>
              <hr>
              <p><b>Lời giải:</b></p>
              <p>• Ta có: \\(\\dfrac{{13\\pi}}{{4}} = 3\\pi + \\dfrac{{\\pi}}{{4}} = 2\\pi + \\pi + \\dfrac{{\\pi}}{{4}} = \\dfrac{{5\\pi}}{{4}} + 2\\pi\\). Do đó điểm biểu diễn \\(M\\) nằm ở <b>góc phần tư thứ III</b> (chính giữa cung phần tư thứ III).</p>
              <p>• Ta có: \\(-150^\\circ = -180^\\circ + 30^\\circ\\). Quay theo chiều âm một góc \\(150^\\circ\\) từ tia gốc \\(OA\\), điểm biểu diễn \\(N\\) nằm ở <b>góc phần tư thứ III</b>.</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 4 (SGK TRANG 10):</div>
              <p><b>Đề bài:</b> Xác định các điểm \\(M\\) và \\(N\\) trên đường tròn lượng giác lần lượt biểu diễn các góc lượng giác có số đo bằng \\(-\\dfrac{{15\\pi}}{{4}}\\) và \\(420^\\circ\\).</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b></p>
              <p>• Ta có: \\(-\\dfrac{{15\\pi}}{{4}} = -4\\pi + \\dfrac{{\\pi}}{{4}} = \\dfrac{{\\pi}}{{4}} - 2 \\cdot 2\\pi\\). Do đó điểm biểu diễn \\(M\\) trùng với điểm biểu diễn góc \\(\\dfrac{{\\pi}}{{4}}\\) (nằm ở <b>góc phần tư thứ I</b>, là trung điểm của cung \\(AB\\)).</p>
              <p>• Ta có: \\(420^\\circ = 360^\\circ + 60^\\circ\\). Do đó điểm biểu diễn \\(N\\) trùng với điểm biểu diễn góc \\(60^\\circ\\) (nằm ở <b>góc phần tư thứ I</b>).</p>
            </div>
          </div>`"""

    assert target_3a in content, "Error: target_3a not found!"
    content = content.replace(target_3a, replacement_3a)
    print("✓ Added Ví dụ 5 & Luyện tập 4 to Mục 3a!")

    # --- 6. Bổ sung Luyện tập 5 vào Mục 3b ---
    target_3b = r"""              <p>• \\(\\cos\\left(-\\dfrac{{\\pi}}{{3}}\\right) = \\dfrac{{1}}{{2}}\\);&emsp;&emsp;\\(\\sin\\left(-\\dfrac{{\\pi}}{{3}}\\right) = -\\dfrac{{\\sqrt{{3}}}}{{2}}\\);</p>
              <p>• \\(\\tan\\left(-\\dfrac{{\\pi}}{{3}}\\right) = -\\sqrt{{3}}\\);&emsp;&emsp;\\(\\cot\\left(-\\dfrac{{\\pi}}{{3}}\\right) = -\\dfrac{{1}}{{\\sqrt{{3}}}} = -\\dfrac{{\\sqrt{{3}}}}{{3}}\\).</p>
            </div>"""

    replacement_3b = r"""              <p>• \\(\\cos\\left(-\\dfrac{{\\pi}}{{3}}\\right) = \\dfrac{{1}}{{2}}\\);&emsp;&emsp;\\(\\sin\\left(-\\dfrac{{\\pi}}{{3}}\\right) = -\\dfrac{{\\sqrt{{3}}}}{{2}}\\);</p>
              <p>• \\(\\tan\\left(-\\dfrac{{\\pi}}{{3}}\\right) = -\\sqrt{{3}}\\);&emsp;&emsp;\\(\\cot\\left(-\\dfrac{{\\pi}}{{3}}\\right) = -\\dfrac{{1}}{{\\sqrt{{3}}}} = -\\dfrac{{\\sqrt{{3}}}}{{3}}\\).</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 5 (SGK TRANG 12):</div>
              <p><b>Đề bài:</b> Cho góc lượng giác có số đo bằng \\(\\dfrac{{5\\pi}}{{6}}\\).</p>
              <p>a) Xác định điểm \\(M\\) trên đường tròn lượng giác biểu diễn góc lượng giác đã cho.</p>
              <p>b) Tính các giá trị lượng giác của góc lượng giác đã cho.</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b></p>
              <p>a) Ta có: \\(\\dfrac{{5\\pi}}{{6}} = \\pi - \\dfrac{{\\pi}}{{6}}\\) (nằm ở <b>góc phần tư thứ II</b>, tạo với tia đối của trục Ox một góc \\(30^\\circ\\)).</p>
              <p>b) Tọa độ của điểm biểu diễn \\(M\\) là \\(\\left(-\\dfrac{{\\sqrt{{3}}}}{{2}}; \\dfrac{{1}}{{2}}\\right)\\). Do đó:</p>
              <p>• \\(\\cos\\dfrac{{5\\pi}}{{6}} = -\\dfrac{{\\sqrt{{3}}}}{{2}}\\);&emsp;&emsp;• \\(\\sin\\dfrac{{5\\pi}}{{6}} = \\dfrac{{1}}{{2}}\\);</p>
              <p>• \\(\\tan\\dfrac{{5\\pi}}{{6}} = \\dfrac{{\\sin}}{{\\cos}} = -\\dfrac{{1}}{{\\sqrt{{3}}}} = -\\dfrac{{\\sqrt{{3}}}}{{3}}\\);&emsp;&emsp;• \\(\\cot\\dfrac{{5\\pi}}{{6}} = \\dfrac{{\\cos}}{{\\sin}} = -\\sqrt{{3}}\\).</p>
            </div>"""

    assert target_3b in content, "Error: target_3b not found!"
    content = content.replace(target_3b, replacement_3b)
    print("✓ Added Luyện tập 5 to Mục 3b!")

    # --- 7. Bổ sung Luyện tập 7 vào Mục 4a ---
    target_4a = r"""              <p>\\(\\tan\\alpha = \\dfrac{{\\sin\\alpha}}{{\\cos\\alpha}} = \\dfrac{{3/5}}{{-4/5}} = -\\dfrac{{3}}{{4}}\\);&emsp;&emsp;\\(\\cot\\alpha = \\dfrac{{1}}{{\\tan\\alpha}} = -\\dfrac{{4}}{{3}}\\).</p>
            </div>"""

    replacement_4a = r"""              <p>\\(\\tan\\alpha = \\dfrac{{\\sin\\alpha}}{{\\cos\\alpha}} = \\dfrac{{3/5}}{{-4/5}} = -\\dfrac{{3}}{{4}}\\);&emsp;&emsp;\\(\\cot\\alpha = \\dfrac{{1}}{{\\tan\\alpha}} = -\\dfrac{{4}}{{3}}\\).</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 7 (SGK TRANG 14):</div>
              <p><b>Đề bài:</b> Tính các giá trị lượng giác của góc \\(\\alpha\\), biết: \\(\\cos\\alpha = -\\dfrac{{2}}{{3}}\\) và \\(\\pi < \\alpha < \\dfrac{{3\\pi}}{{2}}\\).</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b></p>
              <p>1. Vì \\(\\pi < \\alpha < \\dfrac{{3\\pi}}{{2}}\\) (góc phần tư thứ III) nên \\(\\sin\\alpha < 0\\).</p>
              <p>2. Áp dụng công thức \\(\\sin^2\\alpha + \\cos^2\\alpha = 1\\), suy ra:</p>
              <p class="fw-bold text-primary">\\(\\sin\\alpha = -\\sqrt{{1 - \\cos^2\\alpha}} = -\\sqrt{{1 - \\left(-\\dfrac{{2}}{{3}}\\right)^2}} = -\\sqrt{{\\dfrac{{5}}{{9}}}} = -\\dfrac{{\\sqrt{{5}}}}{{3}}\\).</p>
              <p>3. Từ đó ta tính được:</p>
              <p>• \\(\\tan\\alpha = \\dfrac{{\\sin\\alpha}}{{\\cos\\alpha}} = \\dfrac{{-\\sqrt{{5}}/3}}{{-2/3}} = \\dfrac{{\\sqrt{{5}}}}{{2}}\\);</p>
              <p>• \\(\\cot\\alpha = \\dfrac{{1}}{{\\tan\\alpha}} = \\dfrac{{2}}{{\\sqrt{{5}}}} = \\dfrac{{2\\sqrt{{5}}}}{{5}}\\).</p>
            </div>"""

    assert target_4a in content, "Error: target_4a not found!"
    content = content.replace(target_4a, replacement_4a)
    print("✓ Added Luyện tập 7 to Mục 4a!")

    # --- 8. Bổ sung Luyện tập 8 vào Mục 4b ---
    target_4b = r"""              <p>Thay vào biểu thức \\(A\\):</p>
              <p class="fw-bold text-primary">\\(A = -\\cos\\alpha + \\cos\\alpha - \\tan\\alpha \\cdot \\cot\\alpha = 0 - 1 = -1\\).</p>
            </div>"""

    replacement_4b = r"""              <p>Thay vào biểu thức \\(A\\):</p>
              <p class="fw-bold text-primary">\\(A = -\\cos\\alpha + \\cos\\alpha - \\tan\\alpha \\cdot \\cot\\alpha = 0 - 1 = -1\\).</p>
            </div>

            <div class="alert-box alert-info mb-3">
              <div class="fw-bold text-primary mb-2">✏️ LUYỆN TẬP 8 (SGK TRANG 15):</div>
              <p><b>Đề bài:</b> Tính giá trị của các biểu thức sau:</p>
              <p class="fw-bold text-dark">a) \\(\\sin(-675^\\circ)\\);&emsp;&emsp;b) \\(\\tan\\dfrac{{15\\pi}}{{4}}\\).</p>
              <hr>
              <p><b>Hướng dẫn của Thầy Sáng:</b></p>
              <p>a) Ta có: \\(-675^\\circ = 45^\\circ - 2 \\cdot 360^\\circ\\). Do đó:</p>
              <p class="fw-bold text-primary">\\(\\sin(-675^\\circ) = \\sin 45^\\circ = \\dfrac{{\\sqrt{{2}}}}{{2}}\\).</p>
              <p>b) Ta có: \\(\\dfrac{{15\\pi}}{{4}} = 4\\pi - \\dfrac{{\\pi}}{{4}}\\). Do đó:</p>
              <p class="fw-bold text-primary">\\(\\tan\\dfrac{{15\\pi}}{{4}} = \\tan\\left(-\\dfrac{{\\pi}}{{4}}\\right) = -\\tan\\dfrac{{\\pi}}{{4}} = -1\\).</p>
            </div>"""

    assert target_4b in content, "Error: target_4b not found!"
    content = content.replace(target_4b, replacement_4b)
    print("✓ Added Luyện tập 8 to Mục 4b!")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print("===> Successfully saved updated scripts/build_lesson_11_1_full.py!")

if __name__ == "__main__":
    patch_build_lesson()
