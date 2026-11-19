import re
import math

def generate_math_svg_tan():
    # Tan branches: 3 intervals
    branches = []
    # Branch 1: (-3pi/2, -pi/2), center 260 (-pi)
    pts1 = []
    for X in range(208, 313, 2):
        x_rad = (X - 260) / 120.0 * math.pi
        val = math.tan(x_rad)
        Y = 130.0 - 35.0 * val
        Y = max(24.0, min(236.0, Y))
        pts1.append(f"{X:.1f},{Y:.1f}")
    branches.append("M " + " L ".join(pts1))

    # Branch 2 (Center): (-pi/2, pi/2), center 380 (0)
    pts2 = []
    for X in range(328, 433, 2):
        x_rad = (X - 380) / 120.0 * math.pi
        val = math.tan(x_rad)
        Y = 130.0 - 35.0 * val
        Y = max(24.0, min(236.0, Y))
        pts2.append(f"{X:.1f},{Y:.1f}")
    branches.append("M " + " L ".join(pts2))

    # Branch 3: (pi/2, 3pi/2), center 500 (pi)
    pts3 = []
    for X in range(448, 553, 2):
        x_rad = (X - 500) / 120.0 * math.pi
        val = math.tan(x_rad)
        Y = 130.0 - 35.0 * val
        Y = max(24.0, min(236.0, Y))
        pts3.append(f"{X:.1f},{Y:.1f}")
    branches.append("M " + " L ".join(pts3))

    return '''      <!-- HÌNH 1.16 SGK KẾT NỐI TRI THỨC CHUẨN XÁC 100% -->
      <div class="text-center my-3">
        <div class="fw-bold text-secondary mb-1">HÌNH 1.16: ĐỒ THỊ HÀM SỐ $y = \\tan x$ TRÊN $\\mathbb{R}$ (SGK TRANG 28)</div>
        <svg viewBox="0 0 760 260" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
          <!-- Các đường tiệm cận đứng nét đứt màu đỏ cam x = pi/2 + k*pi -->
          <line x1="200" y1="20" x2="200" y2="240" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/>
          <line x1="320" y1="20" x2="320" y2="240" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/>
          <line x1="440" y1="20" x2="440" y2="240" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/>
          <line x1="560" y1="20" x2="560" y2="240" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/>

          <text x="180" y="252" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">-3\\pi/2</text>
          <text x="306" y="252" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">-\\pi/2</text>
          <text x="432" y="252" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">\\pi/2</text>
          <text x="548" y="252" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">3\\pi/2</text>

          <!-- Hệ trục toạ độ Ox, Oy -->
          <line x1="40" y1="130" x2="720" y2="130" stroke="#1e293b" stroke-width="2"/>
          <line x1="380" y1="240" x2="380" y2="20" stroke="#1e293b" stroke-width="2"/>
          <polygon points="720,130 710,125 710,135" fill="#1e293b"/>
          <polygon points="380,20 375,30 385,30" fill="#1e293b"/>
          <text x="715" y="150" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">x</text>
          <text x="360" y="26" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">y</text>
          <text x="368" y="146" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">O</text>

          <!-- Các nhánh đồ thị đồng biến đi lên (Màu xanh ngọc lục bảo) -->
          <path d="''' + branches[0] + '''" fill="none" stroke="#059669" stroke-width="2.8" stroke-linecap="round"/>
          <path d="''' + branches[1] + '''" fill="none" stroke="#059669" stroke-width="2.8" stroke-linecap="round"/>
          <path d="''' + branches[2] + '''" fill="none" stroke="#059669" stroke-width="2.8" stroke-linecap="round"/>

          <!-- Giao điểm với trục Ox (260: -pi, 380: 0, 500: pi) -->
          <circle cx="260" cy="130" r="4" fill="#059669"/><text x="252" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">-\\pi</text>
          <circle cx="380" cy="130" r="4" fill="#059669"/>
          <circle cx="500" cy="130" r="4" fill="#059669"/><text x="496" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">\\pi</text>

          <!-- Điểm mẫu pi/4: tan(pi/4) = 1 (X = 410, Y = 95) -->
          <circle cx="410" cy="95" r="3.5" fill="#dc2626"/>
          <line x1="410" y1="130" x2="410" y2="95" stroke="#dc2626" stroke-dasharray="2,2"/>
          <line x1="380" y1="95" x2="410" y2="95" stroke="#dc2626" stroke-dasharray="2,2"/>
          <text x="365" y="98" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">1</text>
          <text x="402" y="145" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">\\pi/4</text>

          <!-- Hộp ghi chú sư phạm -->
          <rect x="475" y="26" width="235" height="28" rx="6" fill="#f0fdf4" stroke="#bbf7d0"/>
          <text x="485" y="44" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d">Luôn đồng biến trên từng khoảng</text>
        </svg>
      </div>'''

def generate_math_svg_cot():
    # Cot branches: 3 intervals
    branches = []
    # Branch 1: (-pi, 0), center 320 (-pi/2)
    pts1 = []
    for X in range(268, 373, 2):
        x_rad = (X - 380) / 120.0 * math.pi
        val = 1.0 / math.tan(x_rad)
        Y = 130.0 - 35.0 * val
        Y = max(24.0, min(236.0, Y))
        pts1.append(f"{X:.1f},{Y:.1f}")
    branches.append("M " + " L ".join(pts1))

    # Branch 2: (0, pi), center 440 (pi/2)
    pts2 = []
    for X in range(388, 493, 2):
        x_rad = (X - 380) / 120.0 * math.pi
        val = 1.0 / math.tan(x_rad)
        Y = 130.0 - 35.0 * val
        Y = max(24.0, min(236.0, Y))
        pts2.append(f"{X:.1f},{Y:.1f}")
    branches.append("M " + " L ".join(pts2))

    # Branch 3: (pi, 2pi), center 560 (3pi/2)
    pts3 = []
    for X in range(508, 613, 2):
        x_rad = (X - 380) / 120.0 * math.pi
        val = 1.0 / math.tan(x_rad)
        Y = 130.0 - 35.0 * val
        Y = max(24.0, min(236.0, Y))
        pts3.append(f"{X:.1f},{Y:.1f}")
    branches.append("M " + " L ".join(pts3))

    return '''      <!-- HÌNH 1.17 SGK KẾT NỐI TRI THỨC CHUẨN XÁC 100% -->
      <div class="text-center my-3">
        <div class="fw-bold text-secondary mb-1">HÌNH 1.17: ĐỒ THỊ HÀM SỐ $y = \\cot x$ TRÊN $\\mathbb{R}$ (SGK TRANG 29)</div>
        <svg viewBox="0 0 760 260" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
          <!-- Các đường tiệm cận đứng nét đứt màu đỏ cam x = k*pi -->
          <line x1="140" y1="20" x2="140" y2="240" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/>
          <line x1="260" y1="20" x2="260" y2="240" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/>
          <line x1="500" y1="20" x2="500" y2="240" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/>
          <line x1="620" y1="20" x2="620" y2="240" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="5,4"/>

          <text x="126" y="252" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">-2\\pi</text>
          <text x="252" y="252" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">-\\pi</text>
          <text x="496" y="252" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">\\pi</text>
          <text x="614" y="252" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ea580c">2\\pi</text>

          <!-- Hệ trục toạ độ Ox, Oy (Oy trùng tiệm cận x = 0) -->
          <line x1="40" y1="130" x2="720" y2="130" stroke="#1e293b" stroke-width="2"/>
          <line x1="380" y1="240" x2="380" y2="20" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/>
          <polygon points="720,130 710,125 710,135" fill="#1e293b"/>
          <polygon points="380,20 375,30 385,30" fill="#ea580c"/>
          <text x="715" y="150" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">x</text>
          <text x="350" y="26" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ea580c">y (TCĐ)</text>
          <text x="368" y="146" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">O</text>

          <!-- Các nhánh đồ thị nghịch biến đi xuống (Màu vàng hổ phách) -->
          <path d="''' + branches[0] + '''" fill="none" stroke="#d97706" stroke-width="2.8" stroke-linecap="round"/>
          <path d="''' + branches[1] + '''" fill="none" stroke="#d97706" stroke-width="2.8" stroke-linecap="round"/>
          <path d="''' + branches[2] + '''" fill="none" stroke="#d97706" stroke-width="2.8" stroke-linecap="round"/>

          <!-- Giao điểm với trục Ox (320: -pi/2, 440: pi/2, 560: 3pi/2) -->
          <circle cx="320" cy="130" r="4" fill="#d97706"/><text x="306" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">-\\pi/2</text>
          <circle cx="440" cy="130" r="4" fill="#d97706"/><text x="432" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">\\pi/2</text>
          <circle cx="560" cy="130" r="4" fill="#d97706"/><text x="548" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">3\\pi/2</text>

          <!-- Điểm mẫu pi/4: cot(pi/4) = 1 (X = 410, Y = 95) -->
          <circle cx="410" cy="95" r="3.5" fill="#dc2626"/>
          <line x1="410" y1="130" x2="410" y2="95" stroke="#dc2626" stroke-dasharray="2,2"/>
          <line x1="380" y1="95" x2="410" y2="95" stroke="#dc2626" stroke-dasharray="2,2"/>
          <text x="365" y="98" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">1</text>
          <text x="402" y="145" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">\\pi/4</text>

          <!-- Hộp ghi chú sư phạm -->
          <rect x="475" y="26" width="235" height="28" rx="6" fill="#fffbeb" stroke="#fde68a"/>
          <text x="485" y="44" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309">Luôn nghịch biến trên từng khoảng</text>
        </svg>
      </div>'''

def process_file_sec5_6(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 4. MỤC 5: Bảng HĐ6 + Card Tính chất + Đồ thị SVG Hình 1.16
    sec5_pat = r'(<h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-calculator"></i> HĐ6 \(SGK trang 28\):.*?)(<!-- HÌNH 1\.16 SGK CHUẨN XÁC.*?<\/svg>\s*<\/div>)'
    sec5_match = re.search(sec5_pat, content, re.DOTALL)
    if sec5_match:
        replacement_sec5 = '''<h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-calculator"></i> HĐ 6 (SGK trang 28): Khảo sát vẽ đồ thị hàm số y = tan x</h5>
        <p style="color: #334155; line-height: 1.6;">Do $y = \\tan x$ là hàm số lẻ và tuần hoàn với chu kì $\\pi$ nên ta chỉ cần khảo sát trên nửa khoảng $\\left[0; \\dfrac{\\pi}{2}\\right)$, sau đó lấy đối xứng qua gốc toạ độ $O$ để được đồ thị trên $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$, rồi tịnh tiến song song với trục $Ox$ các đoạn có độ dài là bội của $\\pi$.</p>
        
        <!-- BẢNG KHẢO SÁT GIÁ TRỊ Y = TAN X (KẺ BẢNG LƯỚI THẨM MĨ SẮC NÉT) -->
        <div class="math-table-container">
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
      </div>\n\n''' + generate_math_svg_tan()
        content = content[:sec5_match.start(1)] + replacement_sec5 + content[sec5_match.end(2):]
        print(f"[{filepath}] Upgraded Section 5 (Table + Card + Tan SVG)")
    else:
        print(f"[{filepath}] Section 5 pattern NOT found!")

    # 5. MỤC 6: Bảng HĐ7 + Card Tính chất + Đồ thị SVG Hình 1.17
    sec6_pat = r'(<h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-table-cells"></i> HĐ7 \(SGK trang 29\):.*?)(<!-- HÌNH 1\.17 SGK CHUẨN XÁC.*?<\/svg>\s*<\/div>)'
    sec6_match = re.search(sec6_pat, content, re.DOTALL)
    if sec6_match:
        replacement_sec6 = '''<h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-table-cells"></i> HĐ 7 (SGK trang 29): Khảo sát vẽ đồ thị hàm số y = cot x</h5>
        <p style="color: #334155; line-height: 1.6;">Do $y = \\cot x$ là hàm số lẻ và tuần hoàn với chu kì $\\pi$ nên ta chỉ cần khảo sát trên khoảng $(0; \\pi)$, sau đó tịnh tiến song song với trục $Ox$ các đoạn có độ dài là bội của $\\pi$ để thu được toàn bộ đồ thị trên tập xác định.</p>
        
        <!-- BẢNG KHẢO SÁT GIÁ TRỊ Y = COT X (KẺ BẢNG LƯỚI THẨM MĨ SẮC NÉT) -->
        <div class="math-table-container">
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
      </div>\n\n''' + generate_math_svg_cot()
        content = content[:sec6_match.start(1)] + replacement_sec6 + content[sec6_match.end(2):]
        print(f"[{filepath}] Upgraded Section 5 & 6 (Table + Card + Tan/Cot SVG)")
    else:
        print(f"[{filepath}] Section 6 pattern NOT found!")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

process_file_sec5_6('js/lesson-11-3-data.js')
process_file_sec5_6('BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js')
