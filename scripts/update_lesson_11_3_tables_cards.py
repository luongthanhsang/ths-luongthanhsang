import re

def update_lesson_11_3(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. CẬP NHẬT MỤC 1: Bảng giá trị HĐ 1 & 4 Card Sư phạm định nghĩa hàm số (Hình 1 & Hình 2)
    old_sec1_content = '''      contentHtml: `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
        <h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-compass"></i> HĐ 1 (SGK trang 22): Khảo sát giá trị lượng giác theo biến số thực</h5>
        <p>Trên đường tròn lượng giác gốc $A(1;0)$, mỗi số thực $x$ xác định duy nhất một điểm $M$ sao cho số đo góc lượng giác $(OA, OM) = x\\text{ rad}$.</p>
        <div class="table-responsive">
          <table class="table table-bordered table-sm text-center align-middle bg-white mb-0">
            <thead class="table-primary">
              <tr>
                <th>$x$</th>
                <th>$0$</th>
                <th>$\\dfrac{\\pi}{6}$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{3}$</th>
                <th>$\\dfrac{\\pi}{2}$</th>
                <th>$\\pi$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$\\sin x$</td>
                <td>$0$</td>
                <td>$\\dfrac{1}{2}$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$\\dfrac{\\sqrt{3}}{2}$</td>
                <td>$1$</td>
                <td>$0$</td>
              </tr>
              <tr>
                <td class="fw-bold">$\\cos x$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{3}}{2}$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$\\dfrac{1}{2}$</td>
                <td>$0$</td>
                <td>$-1$</td>
              </tr>
              <tr>
                <td class="fw-bold">$\\tan x$</td>
                <td>$0$</td>
                <td>$\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$1$</td>
                <td>$\\sqrt{3}$</td>
                <td class="text-danger fw-bold">Không XĐ</td>
                <td>$0$</td>
              </tr>
              <tr>
                <td class="fw-bold">$\\cot x$</td>
                <td class="text-danger fw-bold">Không XĐ</td>
                <td>$\\sqrt{3}$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$0$</td>
                <td class="text-danger fw-bold">Không XĐ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="alert-box alert-success mb-3">
        <h5 class="fw-bold text-success mb-2"><i class="fa-solid fa-book-bookmark"></i> ĐỊNH NGHĨA 4 HÀM SỐ LƯỢNG GIÁC CƠ BẢN (SGK TRANG 23)</h5>
        <ul>
          <li><b>1. Hàm số sin:</b> Quy tắc đặt tương ứng mỗi số thực $x$ với số thực $\\sin x$ được gọi là hàm số sin, kí hiệu $y = \\sin x$.<br>
          • <b>Tập xác định:</b> $D = \\mathbb{R}$.<br>
          • <b>Tập giá trị:</b> $[-1; 1]$, nghĩa là $-1 \\le \\sin x \\le 1$ với mọi $x \\in \\mathbb{R}$.</li>
          <li class="mt-2"><b>2. Hàm số côsin:</b> Quy tắc đặt tương ứng mỗi số thực $x$ với số thực $\\cos x$ được gọi là hàm số côsin, kí hiệu $y = \\cos x$.<br>
          • <b>Tập xác định:</b> $D = \\mathbb{R}$.<br>
          • <b>Tập giá trị:</b> $[-1; 1]$, nghĩa là $-1 \\le \\cos x \\le 1$ với mọi $x \\in \\mathbb{R}$.</li>
          <li class="mt-2"><b>3. Hàm số tang:</b> Hàm số cho bởi công thức $y = \\dfrac{\\sin x}{\\cos x}$ được gọi là hàm số tang, kí hiệu $y = \\tan x$.<br>
          • Biểu thức có nghĩa khi $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$.<br>
          • <b>Tập xác định:</b> $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$.<br>
          • <b>Tập giá trị:</b> $\\mathbb{R}$.</li>
          <li class="mt-2"><b>4. Hàm số côtang:</b> Hàm số cho bởi công thức $y = \\dfrac{\\cos x}{\\sin x}$ được gọi là hàm số côtang, kí hiệu $y = \\cot x$.<br>
          • Biểu thức có nghĩa khi $\\sin x \\ne 0 \\Leftrightarrow x \\ne k\\pi\\ (k \\in \\mathbb{Z})$.<br>
          • <b>Tập xác định:</b> $D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$.<br>
          • <b>Tập giá trị:</b> $\\mathbb{R}$.</li>
        </ul>
      </div>'''

    new_sec1_content = '''      contentHtml: `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
        <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-compass"></i> HĐ 1 (SGK trang 22): Khảo sát giá trị lượng giác theo biến số thực</h5>
        <p style="color: #334155; line-height: 1.6;">Trên đường tròn lượng giác gốc $A(1;0)$, mỗi số thực $x$ xác định duy nhất một điểm $M$ sao cho số đo góc lượng giác $(OA, OM) = x\\text{ rad}$.</p>
        
        <!-- BẢNG GIÁ TRỊ LƯỢNG GIÁC CÁC GÓC ĐẶC BIỆT (KẺ BẢNG SẮC NÉT CHUẨN THẨM MĨ) -->
        <div class="math-table-container">
          <table class="math-table table-bordered">
            <thead>
              <tr>
                <th style="width: 14%;">$x$</th>
                <th style="width: 14%;">$0$</th>
                <th style="width: 14%;">$\\dfrac{\\pi}{6}$</th>
                <th style="width: 14%;">$\\dfrac{\\pi}{4}$</th>
                <th style="width: 14%;">$\\dfrac{\\pi}{3}$</th>
                <th style="width: 15%;">$\\dfrac{\\pi}{2}$</th>
                <th style="width: 15%;">$\\pi$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$\\sin x$</td>
                <td>$0$</td>
                <td>$\\dfrac{1}{2}$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$\\dfrac{\\sqrt{3}}{2}$</td>
                <td>$1$</td>
                <td>$0$</td>
              </tr>
              <tr>
                <td class="fw-bold">$\\cos x$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{3}}{2}$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$\\dfrac{1}{2}$</td>
                <td>$0$</td>
                <td>$-1$</td>
              </tr>
              <tr>
                <td class="fw-bold">$\\tan x$</td>
                <td>$0$</td>
                <td>$\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$1$</td>
                <td>$\\sqrt{3}$</td>
                <td class="text-danger fw-bold not-defined">Không XĐ</td>
                <td>$0$</td>
              </tr>
              <tr>
                <td class="fw-bold">$\\cot x$</td>
                <td class="text-danger fw-bold not-defined">Không XĐ</td>
                <td>$\\sqrt{3}$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$0$</td>
                <td class="text-danger fw-bold not-defined">Không XĐ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ĐỊNH NGHĨA 4 HÀM SỐ LƯỢNG GIÁC: THẺ CARD SƯ PHẠM MÀU SẮC KÍCH THÍCH THỊ GIÁC -->
      <div class="mb-3">
        <h5 class="fw-bold section-heading-red mb-3"><i class="fa-solid fa-book-bookmark"></i> ĐỊNH NGHĨA 4 HÀM SỐ LƯỢNG GIÁC CƠ BẢN (SGK TRANG 23)</h5>
        
        <!-- 1. HÀM SỐ SIN -->
        <div class="math-func-card card-sin">
          <div class="math-func-title"><i class="fa-solid fa-wave-square"></i> 1. HÀM SỐ SIN ($y = \\sin x$)</div>
          <p style="margin-bottom: 8px; color: #1e293b; line-height: 1.6;">Quy tắc đặt tương ứng mỗi số thực $x$ với số thực $\\sin x$ được gọi là <b>hàm số sin</b>, kí hiệu $y = \\sin x$.</p>
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
            <span class="math-badge math-badge-primary"><i class="fa-solid fa-compass"></i> Tập xác định: $D = \\mathbb{R}$</span>
            <span class="math-badge math-badge-danger"><i class="fa-solid fa-arrows-up-down"></i> Tập giá trị: $[-1; 1]$</span>
            <span style="font-size: 0.88rem; color: #64748b; font-style: italic;">(nghĩa là $-1 \\le \\sin x \\le 1$ với mọi $x \\in \\mathbb{R}$)</span>
          </div>
        </div>

        <!-- 2. HÀM SỐ CÔSIN -->
        <div class="math-func-card card-cos">
          <div class="math-func-title"><i class="fa-solid fa-arrows-split-up-and-left"></i> 2. HÀM SỐ CÔSIN ($y = \\cos x$)</div>
          <p style="margin-bottom: 8px; color: #1e293b; line-height: 1.6;">Quy tắc đặt tương ứng mỗi số thực $x$ với số thực $\\cos x$ được gọi là <b>hàm số côsin</b>, kí hiệu $y = \\cos x$.</p>
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
            <span class="math-badge math-badge-primary"><i class="fa-solid fa-compass"></i> Tập xác định: $D = \\mathbb{R}$</span>
            <span class="math-badge math-badge-danger"><i class="fa-solid fa-arrows-up-down"></i> Tập giá trị: $[-1; 1]$</span>
            <span style="font-size: 0.88rem; color: #64748b; font-style: italic;">(nghĩa là $-1 \\le \\cos x \\le 1$ với mọi $x \\in \\mathbb{R}$)</span>
          </div>
        </div>

        <!-- 3. HÀM SỐ TANG -->
        <div class="math-func-card card-tan">
          <div class="math-func-title"><i class="fa-solid fa-chart-line"></i> 3. HÀM SỐ TANG ($y = \\tan x = \\dfrac{\\sin x}{\\cos x}$)</div>
          <p style="margin-bottom: 8px; color: #1e293b; line-height: 1.6;">Hàm số cho bởi công thức $y = \\dfrac{\\sin x}{\\cos x}$ được gọi là <b>hàm số tang</b>, kí hiệu $y = \\tan x$. Biểu thức có nghĩa khi $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$.</p>
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
            <span class="math-badge math-badge-success"><i class="fa-solid fa-compass"></i> Tập xác định: $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$</span>
            <span class="math-badge math-badge-purple"><i class="fa-solid fa-arrows-up-down"></i> Tập giá trị: $\\mathbb{R}$</span>
          </div>
        </div>

        <!-- 4. HÀM SỐ CÔTANG -->
        <div class="math-func-card card-cot">
          <div class="math-func-title"><i class="fa-solid fa-chart-pie"></i> 4. HÀM SỐ CÔTANG ($y = \\cot x = \\dfrac{\\cos x}{\\sin x}$)</div>
          <p style="margin-bottom: 8px; color: #1e293b; line-height: 1.6;">Hàm số cho bởi công thức $y = \\dfrac{\\cos x}{\\sin x}$ được gọi là <b>hàm số côtang</b>, kí hiệu $y = \\cot x$. Biểu thức có nghĩa khi $\\sin x \\ne 0 \\Leftrightarrow x \\ne k\\pi\\ (k \\in \\mathbb{Z})$.</p>
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px;">
            <span class="math-badge math-badge-warning"><i class="fa-solid fa-compass"></i> Tập xác định: $D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$</span>
            <span class="math-badge math-badge-purple"><i class="fa-solid fa-arrows-up-down"></i> Tập giá trị: $\\mathbb{R}$</span>
          </div>
        </div>
      </div>'''

    if old_sec1_content in content:
        content = content.replace(old_sec1_content, new_sec1_content)
        print(f"Updated Section 1 in {filepath}")
    else:
        print(f"Section 1 NOT matched in {filepath}")

    # 2. CẬP NHẬT MỤC 3: Hàm số y = sin x (Bảng khảo sát kẻ viền & Card tính chất & SVG Hình 1.14)
    old_sec3_table_card = '''        <div class="table-responsive">
          <table class="table table-bordered table-sm text-center align-middle bg-white mb-0">
            <thead class="table-info">
              <tr>
                <th>$x$</th>
                <th>$-\\pi$</th>
                <th>$-\\dfrac{3\\pi}{4}$</th>
                <th>$-\\dfrac{\\pi}{2}$</th>
                <th>$-\\dfrac{\\pi}{4}$</th>
                <th>$0$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{2}$</th>
                <th>$\\dfrac{3\\pi}{4}$</th>
                <th>$\\pi$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$y = \\sin x$</td>
                <td>$0$</td>
                <td>$-\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$-1$</td>
                <td>$-\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$0$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$0$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="alert-box alert-success mb-3">
        <h5 class="fw-bold text-success mb-2"><i class="fa-solid fa-star"></i> TỔNG KẾT TÍNH CHẤT CỦA HÀM SỐ $y = \\sin x$ (SGK TRANG 26)</h5>
        <ul>
          <li><b>Tập xác định:</b> $D = \\mathbb{R}$.</li>
          <li><b>Tập giá trị:</b> $[-1; 1]$, nghĩa là $-1 \\le \\sin x \\le 1$.</li>
          <li><b>Tính chất chẵn lẻ:</b> Là hàm số <b>lẻ</b>, đồ thị đối xứng qua <b>gốc toạ độ $O$</b>.</li>
          <li><b>Tính tuần hoàn:</b> Tuần hoàn với chu kì <b>$T = 2\\pi$</b>.</li>
          <li><b>Tính đơn điệu:</b>
            <br>• Đồng biến trên mỗi khoảng: $\\left(-\\dfrac{\\pi}{2} + k2\\pi; \\dfrac{\\pi}{2} + k2\\pi\\right), k \\in \\mathbb{Z}$.
            <br>• Nghịch biến trên mỗi khoảng: $\\left(\\dfrac{\\pi}{2} + k2\\pi; \\dfrac{3\\pi}{2} + k2\\pi\\right), k \\in \\mathbb{Z}$.
          </li>
          <li><b>Dạng đồ thị:</b> Là một đường lượn sóng liên tục gọi là <b>đường hình sin</b> (sine wave).</li>
        </ul>
      </div>'''

    new_sec3_table_card = '''        <div class="math-table-container">
          <table class="math-table table-bordered">
            <thead class="table-primary">
              <tr>
                <th>$x$</th>
                <th>$-\\pi$</th>
                <th>$-\\dfrac{3\\pi}{4}$</th>
                <th>$-\\dfrac{\\pi}{2}$</th>
                <th>$-\\dfrac{\\pi}{4}$</th>
                <th>$0$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{2}$</th>
                <th>$\\dfrac{3\\pi}{4}$</th>
                <th>$\\pi$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$y = \\sin x$</td>
                <td>$0$</td>
                <td>$-\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$-1$</td>
                <td>$-\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$0$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$0$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TỔNG KẾT TÍNH CHẤT HÀM SỐ SIN: CARD SƯ PHẠM ĐỎ NỔI BẬT -->
      <div class="math-func-card card-sin mb-3">
        <div class="math-func-title"><i class="fa-solid fa-star"></i> TỔNG KẾT TÍNH CHẤT QUAN TRỌNG CỦA HÀM SỐ $y = \\sin x$ (SGK TRANG 26)</div>
        <div style="margin-bottom: 10px; display: flex; flex-wrap: wrap; gap: 8px;">
          <span class="math-badge math-badge-primary"><i class="fa-solid fa-compass"></i> Tập xác định: $D = \\mathbb{R}$</span>
          <span class="math-badge math-badge-danger"><i class="fa-solid fa-arrows-up-down"></i> Tập giá trị: $[-1; 1]$</span>
          <span class="math-badge math-badge-purple"><i class="fa-solid fa-circle-nodes"></i> Hàm số lẻ (Đối xứng qua $O$)</span>
          <span class="math-badge math-badge-warning"><i class="fa-solid fa-rotate"></i> Chu kì tuần hoàn: $T = 2\\pi$</span>
        </div>
        <div style="background: #f8fafc; border-radius: 8px; padding: 12px 14px; border: 1px solid #e2e8f0; font-size: 0.95rem; color: #1e293b;">
          <div><b style="color: #15803d;"><i class="fa-solid fa-arrow-trend-up"></i> Đồng biến trên mỗi khoảng:</b> $\\left(-\\dfrac{\\pi}{2} + k2\\pi; \\dfrac{\\pi}{2} + k2\\pi\\right), k \\in \\mathbb{Z}$.</div>
          <div style="margin-top: 6px;"><b style="color: #b91c1c;"><i class="fa-solid fa-arrow-trend-down"></i> Nghịch biến trên mỗi khoảng:</b> $\\left(\\dfrac{\\pi}{2} + k2\\pi; \\dfrac{3\\pi}{2} + k2\\pi\\right), k \\in \\mathbb{Z}$.</div>
          <div style="margin-top: 6px;"><b style="color: #1d4ed8;"><i class="fa-solid fa-wave-square"></i> Dạng đồ thị:</b> Là một đường lượn sóng liên tục gọi là <b>đường hình sin</b> (sine wave), đi qua gốc toạ độ $O(0; 0)$.</div>
        </div>
      </div>'''

    if old_sec3_table_card in content:
        content = content.replace(old_sec3_table_card, new_sec3_table_card)
        print(f"Updated Section 3 Table & Card in {filepath}")
    else:
        print(f"Section 3 Table & Card NOT matched in {filepath}")

    # 3. CẬP NHẬT MỤC 4: Hàm số y = cos x (Bảng khảo sát Hình 3 kẻ viền & Card tính chất & SVG Hình 1.15)
    old_sec4_table_card = '''        <div class="table-responsive">
          <table class="table table-bordered table-sm text-center align-middle bg-white mb-0">
            <thead class="table-warning">
              <tr>
                <th>$x$</th>
                <th>$-\\pi$</th>
                <th>$-\\dfrac{3\\pi}{4}$</th>
                <th>$-\\dfrac{\\pi}{2}$</th>
                <th>$-\\dfrac{\\pi}{4}$</th>
                <th>$0$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{2}$</th>
                <th>$\\dfrac{3\\pi}{4}$</th>
                <th>$\\pi$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$y = \\cos x$</td>
                <td>$-1$</td>
                <td>$-\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$0$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$0$</td>
                <td>$-\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$-1$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="alert-box alert-success mb-3">
        <h5 class="fw-bold text-success mb-2"><i class="fa-solid fa-star"></i> TỔNG KẾT TÍNH CHẤT CỦA HÀM SỐ $y = \\cos x$ (SGK TRANG 27)</h5>
        <ul>
          <li><b>Tập xác định:</b> $D = \\mathbb{R}$.</li>
          <li><b>Tập giá trị:</b> $[-1; 1]$, nghĩa là $-1 \\le \\cos x \\le 1$.</li>
          <li><b>Tính chất chẵn lẻ:</b> Là hàm số <b>chẵn</b>, đồ thị đối xứng qua <b>trục tung $Oy$</b>.</li>
          <li><b>Tính tuần hoàn:</b> Tuần hoàn với chu kì <b>$T = 2\\pi$</b>.</li>
          <li><b>Tính đơn điệu:</b>
            <br>• Đồng biến trên mỗi khoảng: $(-\\pi + k2\\pi; k2\\pi), k \\in \\mathbb{Z}$.
            <br>• Nghịch biến trên mỗi khoảng: $(k2\\pi; \\pi + k2\\pi), k \\in \\mathbb{Z}$.
          </li>
          <li><b>Dạng đồ thị:</b> Là một đường hình sin đối xứng hoàn hảo qua trục tung $Oy$, cắt $Oy$ tại điểm $(0; 1)$.</li>
        </ul>
      </div>'''

    new_sec4_table_card = '''        <!-- BẢNG KHẢO SÁT GIÁ TRỊ Y = COS X (HÌNH 3: KẺ BẢNG LƯỚI VIỀN THẨM MĨ SẮC NÉT) -->
        <div class="math-table-container">
          <table class="math-table table-bordered">
            <thead class="table-warning">
              <tr>
                <th>$x$</th>
                <th>$-\\pi$</th>
                <th>$-\\dfrac{3\\pi}{4}$</th>
                <th>$-\\dfrac{\\pi}{2}$</th>
                <th>$-\\dfrac{\\pi}{4}$</th>
                <th>$0$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{2}$</th>
                <th>$\\dfrac{3\\pi}{4}$</th>
                <th>$\\pi$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$y = \\cos x$</td>
                <td>$-1$</td>
                <td>$-\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$0$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$0$</td>
                <td>$-\\dfrac{\\sqrt{2}}{2}$</td>
                <td>$-1$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TỔNG KẾT TÍNH CHẤT HÀM SỐ CÔSIN: CARD SƯ PHẠM XANH SAPPHIRE NỔI BẬT -->
      <div class="math-func-card card-cos mb-3">
        <div class="math-func-title"><i class="fa-solid fa-star"></i> TỔNG KẾT TÍNH CHẤT QUAN TRỌNG CỦA HÀM SỐ $y = \\cos x$ (SGK TRANG 27)</div>
        <div style="margin-bottom: 10px; display: flex; flex-wrap: wrap; gap: 8px;">
          <span class="math-badge math-badge-primary"><i class="fa-solid fa-compass"></i> Tập xác định: $D = \\mathbb{R}$</span>
          <span class="math-badge math-badge-danger"><i class="fa-solid fa-arrows-up-down"></i> Tập giá trị: $[-1; 1]$</span>
          <span class="math-badge math-badge-primary" style="background:#dbeafe; color:#1e40af;"><i class="fa-solid fa-arrows-left-right"></i> Hàm số chẵn (Đối xứng qua trục tung $Oy$)</span>
          <span class="math-badge math-badge-warning"><i class="fa-solid fa-rotate"></i> Chu kì tuần hoàn: $T = 2\\pi$</span>
        </div>
        <div style="background: #f8fafc; border-radius: 8px; padding: 12px 14px; border: 1px solid #e2e8f0; font-size: 0.95rem; color: #1e293b;">
          <div><b style="color: #15803d;"><i class="fa-solid fa-arrow-trend-up"></i> Đồng biến trên mỗi khoảng:</b> $(-\\pi + k2\\pi; k2\\pi), k \\in \\mathbb{Z}$.</div>
          <div style="margin-top: 6px;"><b style="color: #b91c1c;"><i class="fa-solid fa-arrow-trend-down"></i> Nghịch biến trên mỗi khoảng:</b> $(k2\\pi; \\pi + k2\\pi), k \\in \\mathbb{Z}$.</div>
          <div style="margin-top: 6px;"><b style="color: #2563eb;"><i class="fa-solid fa-chart-line"></i> Dạng đồ thị:</b> Đồ thị đối xứng hoàn hảo qua trục tung $Oy$, cắt $Oy$ tại điểm cực đại $(0; 1)$, đạt cực tiểu tại các điểm $(\\pi + k2\\pi; -1)$.</div>
        </div>
      </div>'''

    if old_sec4_table_card in content:
        content = content.replace(old_sec4_table_card, new_sec4_table_card)
        print(f"Updated Section 4 Table & Card in {filepath}")
    else:
        print(f"Section 4 Table & Card NOT matched in {filepath}")

    # 4. CẬP NHẬT MỤC 5: Hàm số y = tan x (Bảng kẻ viền & Card tính chất)
    old_sec5_table_card = '''        <div class="table-responsive">
          <table class="table table-bordered table-sm text-center align-middle bg-white mb-0">
            <thead class="table-success">
              <tr>
                <th>$x$</th>
                <th>$-\\dfrac{\\pi}{3}$</th>
                <th>$-\\dfrac{\\pi}{4}$</th>
                <th>$-\\dfrac{\\pi}{6}$</th>
                <th>$0$</th>
                <th>$\\dfrac{\\pi}{6}$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{3}$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$y = \\tan x$</td>
                <td>$-\\sqrt{3}$</td>
                <td>$-1$</td>
                <td>$-\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$0$</td>
                <td>$\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$1$</td>
                <td>$\\sqrt{3}$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="alert-box alert-success mb-3">
        <h5 class="fw-bold text-success mb-2"><i class="fa-solid fa-star"></i> TỔNG KẾT TÍNH CHẤT CỦA HÀM SỐ $y = \\tan x$ (SGK TRANG 28)</h5>
        <ul>
          <li><b>Tập xác định:</b> $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$.</li>
          <li><b>Tập giá trị:</b> $\\mathbb{R}$.</li>
          <li><b>Tính chất chẵn lẻ:</b> Là hàm số <b>lẻ</b>, đồ thị đối xứng qua <b>gốc toạ độ $O$</b>.</li>
          <li><b>Tính tuần hoàn:</b> Tuần hoàn với chu kì <b>$T = \\pi$</b>.</li>
          <li><b>Tính đơn điệu:</b> <b>Luôn đồng biến</b> trên mỗi khoảng xác định $\\left(-\\dfrac{\\pi}{2} + k\\pi; \\dfrac{\\pi}{2} + k\\pi\\right), k \\in \\mathbb{Z}$.</li>
          <li><b>Tiệm cận đứng:</b> Các đường thẳng $x = \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$ là các đường tiệm cận đứng của đồ thị.</li>
        </ul>
      </div>'''

    new_sec5_table_card = '''        <div class="math-table-container">
          <table class="math-table table-bordered">
            <thead class="table-success">
              <tr>
                <th>$x$</th>
                <th>$-\\dfrac{\\pi}{3}$</th>
                <th>$-\\dfrac{\\pi}{4}$</th>
                <th>$-\\dfrac{\\pi}{6}$</th>
                <th>$0$</th>
                <th>$\\dfrac{\\pi}{6}$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{3}$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$y = \\tan x$</td>
                <td>$-\\sqrt{3}$</td>
                <td>$-1$</td>
                <td>$-\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$0$</td>
                <td>$\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$1$</td>
                <td>$\\sqrt{3}$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TỔNG KẾT TÍNH CHẤT HÀM SỐ TANG: CARD SƯ PHẠM XANH LỤC NỔI BẬT -->
      <div class="math-func-card card-tan mb-3">
        <div class="math-func-title"><i class="fa-solid fa-star"></i> TỔNG KẾT TÍNH CHẤT QUAN TRỌNG CỦA HÀM SỐ $y = \\tan x$ (SGK TRANG 28)</div>
        <div style="margin-bottom: 10px; display: flex; flex-wrap: wrap; gap: 8px;">
          <span class="math-badge math-badge-success"><i class="fa-solid fa-compass"></i> Tập xác định: $D = \\mathbb{R} \\setminus \\left\\{\\dfrac{\\pi}{2} + k\\pi \\;\\middle|\\; k \\in \\mathbb{Z}\\right\\}$</span>
          <span class="math-badge math-badge-purple"><i class="fa-solid fa-arrows-up-down"></i> Tập giá trị: $\\mathbb{R}$</span>
          <span class="math-badge math-badge-primary"><i class="fa-solid fa-circle-nodes"></i> Hàm số lẻ (Đối xứng qua $O$)</span>
          <span class="math-badge math-badge-warning"><i class="fa-solid fa-rotate"></i> Chu kì tuần hoàn: $T = \\pi$</span>
        </div>
        <div style="background: #f8fafc; border-radius: 8px; padding: 12px 14px; border: 1px solid #e2e8f0; font-size: 0.95rem; color: #1e293b;">
          <div><b style="color: #15803d;"><i class="fa-solid fa-arrow-trend-up"></i> Tính đơn điệu:</b> <b>Luôn đồng biến</b> trên mỗi khoảng xác định $\\left(-\\dfrac{\\pi}{2} + k\\pi; \\dfrac{\\pi}{2} + k\\pi\\right), k \\in \\mathbb{Z}$.</div>
          <div style="margin-top: 6px;"><b style="color: #ea580c;"><i class="fa-solid fa-grip-lines-vertical"></i> Tiệm cận đứng:</b> Các đường thẳng $x = \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$ là các đường tiệm cận đứng của đồ thị.</div>
          <div style="margin-top: 6px;"><b style="color: #059669;"><i class="fa-solid fa-chart-line"></i> Dạng đồ thị:</b> Gồm vô số nhánh uốn cong đồng biến đi lên, cắt $Ox$ tại các điểm $(k\\pi; 0)$.</div>
        </div>
      </div>'''

    if old_sec5_table_card in content:
        content = content.replace(old_sec5_table_card, new_sec5_table_card)
        print(f"Updated Section 5 Table & Card in {filepath}")
    else:
        print(f"Section 5 Table & Card NOT matched in {filepath}")

    # 5. CẬP NHẬT MỤC 6: Hàm số y = cot x (Bảng kẻ viền & Card tính chất)
    old_sec6_table_card = '''        <div class="table-responsive">
          <table class="table table-bordered table-sm text-center align-middle bg-white mb-0">
            <thead class="table-primary">
              <tr>
                <th>$x$</th>
                <th>$\\dfrac{\\pi}{6}$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{3}$</th>
                <th>$\\dfrac{\\pi}{2}$</th>
                <th>$\\dfrac{2\\pi}{3}$</th>
                <th>$\\dfrac{3\\pi}{4}$</th>
                <th>$\\dfrac{5\\pi}{6}$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$y = \\cot x$</td>
                <td>$\\sqrt{3}$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$0$</td>
                <td>$-\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$-1$</td>
                <td>$-\\sqrt{3}$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="alert-box alert-success mb-3">
        <h5 class="fw-bold text-success mb-2"><i class="fa-solid fa-star"></i> TỔNG KẾT TÍNH CHẤT CỦA HÀM SỐ $y = \\cot x$ (SGK TRANG 30)</h5>
        <ul>
          <li><b>Tập xác định:</b> $D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$.</li>
          <li><b>Tập giá trị:</b> $\\mathbb{R}$.</li>
          <li><b>Tính chất chẵn lẻ:</b> Là hàm số <b>lẻ</b>, đồ thị đối xứng qua <b>gốc toạ độ $O$</b>.</li>
          <li><b>Tính tuần hoàn:</b> Tuần hoàn với chu kì <b>$T = \\pi$</b>.</li>
          <li><b>Tính đơn điệu:</b> <b>Luôn nghịch biến</b> trên mỗi khoảng xác định $(k\\pi; \\pi + k\\pi), k \\in \\mathbb{Z}$.</li>
          <li><b>Tiệm cận đứng:</b> Các đường thẳng $x = k\\pi\\ (k \\in \\mathbb{Z})$ là các đường tiệm cận đứng của đồ thị.</li>
        </ul>
      </div>'''

    new_sec6_table_card = '''        <div class="math-table-container">
          <table class="math-table table-bordered">
            <thead class="table-purple">
              <tr>
                <th>$x$</th>
                <th>$\\dfrac{\\pi}{6}$</th>
                <th>$\\dfrac{\\pi}{4}$</th>
                <th>$\\dfrac{\\pi}{3}$</th>
                <th>$\\dfrac{\\pi}{2}$</th>
                <th>$\\dfrac{2\\pi}{3}$</th>
                <th>$\\dfrac{3\\pi}{4}$</th>
                <th>$\\dfrac{5\\pi}{6}$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">$y = \\cot x$</td>
                <td>$\\sqrt{3}$</td>
                <td>$1$</td>
                <td>$\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$0$</td>
                <td>$-\\dfrac{\\sqrt{3}}{3}$</td>
                <td>$-1$</td>
                <td>$-\\sqrt{3}$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TỔNG KẾT TÍNH CHẤT HÀM SỐ CÔTANG: CARD SƯ PHẠM VÀNG CAM NỔI BẬT -->
      <div class="math-func-card card-cot mb-3">
        <div class="math-func-title"><i class="fa-solid fa-star"></i> TỔNG KẾT TÍNH CHẤT QUAN TRỌNG CỦA HÀM SỐ $y = \\cot x$ (SGK TRANG 30)</div>
        <div style="margin-bottom: 10px; display: flex; flex-wrap: wrap; gap: 8px;">
          <span class="math-badge math-badge-warning"><i class="fa-solid fa-compass"></i> Tập xác định: $D = \\mathbb{R} \\setminus \\{k\\pi \\mid k \\in \\mathbb{Z}\\}$</span>
          <span class="math-badge math-badge-purple"><i class="fa-solid fa-arrows-up-down"></i> Tập giá trị: $\\mathbb{R}$</span>
          <span class="math-badge math-badge-primary"><i class="fa-solid fa-circle-nodes"></i> Hàm số lẻ (Đối xứng qua $O$)</span>
          <span class="math-badge math-badge-warning"><i class="fa-solid fa-rotate"></i> Chu kì tuần hoàn: $T = \\pi$</span>
        </div>
        <div style="background: #f8fafc; border-radius: 8px; padding: 12px 14px; border: 1px solid #e2e8f0; font-size: 0.95rem; color: #1e293b;">
          <div><b style="color: #b91c1c;"><i class="fa-solid fa-arrow-trend-down"></i> Tính đơn điệu:</b> <b>Luôn nghịch biến</b> trên mỗi khoảng xác định $(k\\pi; \\pi + k\\pi), k \\in \\mathbb{Z}$.</div>
          <div style="margin-top: 6px;"><b style="color: #ea580c;"><i class="fa-solid fa-grip-lines-vertical"></i> Tiệm cận đứng:</b> Các đường thẳng $x = k\\pi\\ (k \\in \\mathbb{Z})$ là các đường tiệm cận đứng của đồ thị.</div>
          <div style="margin-top: 6px;"><b style="color: #d97706;"><i class="fa-solid fa-chart-line"></i> Dạng đồ thị:</b> Gồm vô số nhánh uốn cong nghịch biến đi xuống, cắt $Ox$ tại các điểm $\\left(\\dfrac{\\pi}{2} + k\\pi; 0\\right)$.</div>
        </div>
      </div>'''

    if old_sec6_table_card in content:
        content = content.replace(old_sec6_table_card, new_sec6_table_card)
        print(f"Updated Section 6 Table & Card in {filepath}")
    else:
        print(f"Section 6 Table & Card NOT matched in {filepath}")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_lesson_11_3('js/lesson-11-3-data.js')
update_lesson_11_3('BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js')
