import re
import math

def generate_math_svg_sin():
    pts = []
    for X in range(50, 715, 2):
        x_rad = (X - 380) / 120.0 * math.pi
        Y = 130.0 - 60.0 * math.sin(x_rad)
        pts.append(f"{X:.1f},{Y:.1f}")
    path_d = "M " + " L ".join(pts)
    
    return '''      <!-- HÌNH 1.14 SGK KẾT NỐI TRI THỨC CHUẨN XÁC 100% -->
      <div class="text-center my-3">
        <div class="fw-bold text-secondary mb-1">HÌNH 1.14: ĐỒ THỊ HÀM SỐ $y = \\sin x$ TRÊN $\\mathbb{R}$ (SGK TRANG 25)</div>
        <svg viewBox="0 0 760 260" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
          <!-- Đường dóng biên độ y = 1 và y = -1 -->
          <line x1="40" y1="70" x2="720" y2="70" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,4"/>
          <line x1="40" y1="190" x2="720" y2="190" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,4"/>
          <text x="365" y="74" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">1</text>
          <text x="360" y="194" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">-1</text>

          <!-- Hệ trục toạ độ Ox, Oy -->
          <line x1="40" y1="130" x2="720" y2="130" stroke="#1e293b" stroke-width="2"/>
          <line x1="380" y1="240" x2="380" y2="20" stroke="#1e293b" stroke-width="2"/>
          <polygon points="720,130 710,125 710,135" fill="#1e293b"/>
          <polygon points="380,20 375,30 385,30" fill="#1e293b"/>
          <text x="715" y="150" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">x</text>
          <text x="360" y="26" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">y</text>
          <text x="368" y="146" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">O</text>

          <!-- Đường hình sin chuẩn xác y = sin x (Màu xanh dương hoàng gia) -->
          <path d="''' + path_d + '''" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

          <!-- Điểm cực đại (pi/2, 1) và (-3pi/2, 1) -->
          <circle cx="440" cy="70" r="4.5" fill="#dc2626"/>
          <line x1="440" y1="130" x2="440" y2="70" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
          <text x="424" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">(\\pi/2; 1)</text>

          <circle cx="200" cy="70" r="4.5" fill="#dc2626"/>
          <line x1="200" y1="130" x2="200" y2="70" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
          <text x="172" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">(-3\\pi/2; 1)</text>

          <!-- Điểm cực tiểu (-pi/2, -1) và (3pi/2, -1) -->
          <circle cx="320" cy="190" r="4.5" fill="#dc2626"/>
          <line x1="320" y1="130" x2="320" y2="190" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
          <text x="296" y="210" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">(-\\pi/2; -1)</text>

          <circle cx="560" cy="190" r="4.5" fill="#dc2626"/>
          <line x1="560" y1="130" x2="560" y2="190" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
          <text x="540" y="210" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">(3\\pi/2; -1)</text>

          <!-- Các mốc hoành độ trên trục Ox -->
          <circle cx="140" cy="130" r="3" fill="#1e293b"/><text x="126" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">-2\\pi</text>
          <circle cx="200" cy="130" r="3" fill="#1e293b"/><text x="186" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">-3\\pi/2</text>
          <circle cx="260" cy="130" r="3" fill="#1e293b"/><text x="252" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">-\\pi</text>
          <circle cx="320" cy="130" r="3" fill="#1e293b"/><text x="308" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">-\\pi/2</text>
          <circle cx="440" cy="130" r="3" fill="#1e293b"/><text x="432" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">\\pi/2</text>
          <circle cx="500" cy="130" r="3" fill="#1e293b"/><text x="496" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">\\pi</text>
          <circle cx="560" cy="130" r="3" fill="#1e293b"/><text x="548" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">3\\pi/2</text>
          <circle cx="620" cy="130" r="3" fill="#1e293b"/><text x="612" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">2\\pi</text>
          
          <!-- Hộp ghi chú sư phạm -->
          <rect x="475" y="26" width="235" height="28" rx="6" fill="#eff6ff" stroke="#bfdbfe"/>
          <text x="485" y="44" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8">Đồ thị đối xứng qua gốc toạ độ O</text>
        </svg>
      </div>'''

def generate_math_svg_cos():
    pts = []
    for X in range(50, 715, 2):
        x_rad = (X - 380) / 120.0 * math.pi
        Y = 130.0 - 60.0 * math.cos(x_rad)
        pts.append(f"{X:.1f},{Y:.1f}")
    path_d = "M " + " L ".join(pts)
    
    return '''      <!-- HÌNH 1.15 SGK KẾT NỐI TRI THỨC CHUẨN XÁC 100% -->
      <div class="text-center my-3">
        <div class="fw-bold text-secondary mb-1">HÌNH 1.15: ĐỒ THỊ HÀM SỐ $y = \\cos x$ TRÊN $\\mathbb{R}$ (SGK TRANG 27)</div>
        <svg viewBox="0 0 760 260" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
          <!-- Đường dóng biên độ y = 1 và y = -1 -->
          <line x1="40" y1="70" x2="720" y2="70" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,4"/>
          <line x1="40" y1="190" x2="720" y2="190" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,4"/>
          <text x="365" y="74" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">1</text>
          <text x="360" y="194" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">-1</text>

          <!-- Hệ trục toạ độ Ox, Oy (Oy tô đỏ nhấn mạnh trục đối xứng) -->
          <line x1="40" y1="130" x2="720" y2="130" stroke="#1e293b" stroke-width="2"/>
          <line x1="380" y1="240" x2="380" y2="20" stroke="#dc2626" stroke-width="2.5"/>
          <polygon points="720,130 710,125 710,135" fill="#1e293b"/>
          <polygon points="380,20 375,30 385,30" fill="#dc2626"/>
          <text x="715" y="150" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">x</text>
          <text x="350" y="26" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">y (Trục ĐX)</text>
          <text x="368" y="146" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b">O</text>

          <!-- Đường hình sin chuẩn xác y = cos x (Màu tím thạch anh hoàng gia) -->
          <path d="''' + path_d + '''" fill="none" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

          <!-- Điểm cực đại (0, 1), (-2pi, 1), (2pi, 1) -->
          <circle cx="380" cy="70" r="5" fill="#dc2626"/>
          <text x="388" y="66" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">(0; 1)</text>

          <circle cx="140" cy="70" r="4.5" fill="#dc2626"/>
          <line x1="140" y1="130" x2="140" y2="70" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
          <text x="120" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">(-2\\pi; 1)</text>

          <circle cx="620" cy="70" r="4.5" fill="#dc2626"/>
          <line x1="620" y1="130" x2="620" y2="70" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
          <text x="605" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">(2\\pi; 1)</text>

          <!-- Điểm cực tiểu (-pi, -1) và (pi, -1) -->
          <circle cx="260" cy="190" r="4.5" fill="#dc2626"/>
          <line x1="260" y1="130" x2="260" y2="190" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
          <text x="245" y="210" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">(-\\pi; -1)</text>

          <circle cx="500" cy="190" r="4.5" fill="#dc2626"/>
          <line x1="500" y1="130" x2="500" y2="190" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
          <text x="488" y="210" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">(\\pi; -1)</text>

          <!-- Các mốc hoành độ trên trục Ox (Giao điểm với Ox) -->
          <circle cx="200" cy="130" r="3" fill="#1e293b"/><text x="186" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">-3\\pi/2</text>
          <circle cx="320" cy="130" r="3" fill="#1e293b"/><text x="308" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">-\\pi/2</text>
          <circle cx="440" cy="130" r="3" fill="#1e293b"/><text x="432" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">\\pi/2</text>
          <circle cx="560" cy="130" r="3" fill="#1e293b"/><text x="548" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#475569">3\\pi/2</text>

          <!-- Hộp ghi chú sư phạm -->
          <rect x="475" y="26" width="235" height="28" rx="6" fill="#fef2f2" stroke="#fecaca"/>
          <text x="485" y="44" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">Đồ thị đối xứng qua trục tung Oy</text>
        </svg>
      </div>'''

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

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. MỤC 1: Thay thế toàn bộ từ <h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-compass"></i> HĐ1 (SGK trang 22) đến trước svg đường tròn lượng giác
    sec1_pat = r'(<h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-compass"></i> HĐ1 \(SGK trang 22\):.*?)(<div class="text-center my-3">\s*<svg viewBox="0 0 460 380")'
    sec1_match = re.search(sec1_pat, content, re.DOTALL)
    if sec1_match:
        replacement_sec1 = '''<h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-compass"></i> HĐ 1 (SGK trang 22): Khảo sát giá trị lượng giác theo biến số thực</h5>
        <p style="color: #334155; line-height: 1.6;">Trên đường tròn lượng giác gốc $A(1;0)$, mỗi số thực $x$ xác định duy nhất một điểm $M$ sao cho số đo góc lượng giác $(OA, OM) = x\\text{ rad}$.</p>
        
        <!-- BẢNG GIÁ TRỊ LƯỢNG GIÁC CÁC GÓC ĐẶC BIỆT (HÌNH 1: KẺ BẢNG LƯỚI SẮC NÉT THẨM MĨ) -->
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

      <!-- ĐỊNH NGHĨA 4 HÀM SỐ LƯỢNG GIÁC (HÌNH 2: CARD SƯ PHẠM MÀU SẮC KÍCH THÍCH THỊ GIÁC) -->
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
      </div>\n\n      '''
        content = content[:sec1_match.start(1)] + replacement_sec1 + content[sec1_match.start(2):]
        print(f"[{filepath}] Upgraded Section 1 (Table + Cards)")
    else:
        print(f"[{filepath}] Section 1 pattern NOT found!")

    # 2. MỤC 3: Bảng HĐ4 + Card Tính chất + Đồ thị SVG Hình 1.14
    sec3_pat = r'(<h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-chart-line"></i> HĐ4 \(SGK trang 25\):.*?)(<!-- HÌNH 1\.14 SGK CHUẨN XÁC.*?<\/svg>\s*<\/div>)'
    sec3_match = re.search(sec3_pat, content, re.DOTALL)
    if sec3_match:
        replacement_sec3 = '''<h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-chart-line"></i> HĐ 4 (SGK trang 25): Khảo sát vẽ đồ thị hàm số y = sin x</h5>
        <p style="color: #334155; line-height: 1.6;">Do $y = \\sin x$ là hàm số lẻ nên ta vẽ trên đoạn $[0; \\pi]$, sau đó lấy đối xứng qua gốc toạ độ $O$ để được đồ thị trên $[-\\pi; \\pi]$, rồi tịnh tiến theo chu kì $2\\pi$ để thu được toàn bộ đồ thị trên $\\mathbb{R}$.</p>
        
        <!-- BẢNG KHẢO SÁT GIÁ TRỊ Y = SIN X (KẺ BẢNG LƯỚI THẨM MĨ SẮC NÉT) -->
        <div class="math-table-container">
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
      </div>\n\n''' + generate_math_svg_sin()
        content = content[:sec3_match.start(1)] + replacement_sec3 + content[sec3_match.end(2):]
        print(f"[{filepath}] Upgraded Section 3 (Table + Card + Sin SVG)")
    else:
        print(f"[{filepath}] Section 3 pattern NOT found!")

    # 3. MỤC 4: Bảng HĐ5 (Hình 3) + Card Tính chất + Đồ thị SVG Hình 1.15
    sec4_pat = r'(<h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-chart-area"></i> HĐ5 \(SGK trang 26\):.*?)(<!-- HÌNH 1\.15 SGK CHUẨN XÁC.*?<\/svg>\s*<\/div>)'
    sec4_match = re.search(sec4_pat, content, re.DOTALL)
    if sec4_match:
        replacement_sec4 = '''<h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-chart-area"></i> HĐ 5 (SGK trang 26): Khảo sát vẽ đồ thị hàm số y = cos x</h5>
        <p style="color: #334155; line-height: 1.6;">Do $\\cos x = \\sin\\left(x + \\dfrac{\\pi}{2}\\right)$ nên đồ thị hàm số $y = \\cos x$ có được bằng cách tịnh tiến đồ thị hàm số $y = \\sin x$ sang bên trái một đoạn bằng $\\dfrac{\\pi}{2}$. Đồng thời vì $y = \\cos x$ là hàm số chẵn nên đồ thị nhận <b>trục tung $Oy$ làm trục đối xứng</b>.</p>
        
        <!-- BẢNG KHẢO SÁT GIÁ TRỊ Y = COS X (HÌNH 3: KẺ BẢNG LƯỚI THẨM MĨ SẮC NÉT) -->
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
      </div>\n\n''' + generate_math_svg_cos()
        content = content[:sec4_match.start(1)] + replacement_sec4 + content[sec4_match.end(2):]
        print(f"[{filepath}] Upgraded Section 4 (Table + Card + Cos SVG)")
    else:
        print(f"[{filepath}] Section 4 pattern NOT found!")

    # 4. MỤC 5: Bảng HĐ7 + Card Tính chất + Đồ thị SVG Hình 1.16
    sec5_pat = r'(<h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-wave-square"></i> HĐ7 \(SGK trang 28\):.*?)(<!-- HÌNH 1\.16 SGK CHUẨN XÁC.*?<\/svg>\s*<\/div>)'
    sec5_match = re.search(sec5_pat, content, re.DOTALL)
    if sec5_match:
        replacement_sec5 = '''<h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-wave-square"></i> HĐ 7 (SGK trang 28): Khảo sát vẽ đồ thị hàm số y = tan x</h5>
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

    # 5. MỤC 6: Bảng HĐ9 + Card Tính chất + Đồ thị SVG Hình 1.17
    sec6_pat = r'(<h5 class="fw-bold text-primary mb-2"><i class="fa-solid fa-chart-column"></i> HĐ9 \(SGK trang 29\):.*?)(<!-- HÌNH 1\.17 SGK CHUẨN XÁC.*?<\/svg>\s*<\/div>)'
    sec6_match = re.search(sec6_pat, content, re.DOTALL)
    if sec6_match:
        replacement_sec6 = '''<h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-chart-column"></i> HĐ 9 (SGK trang 29): Khảo sát vẽ đồ thị hàm số y = cot x</h5>
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
        print(f"[{filepath}] Upgraded Section 6 (Table + Card + Cot SVG)")
    else:
        print(f"[{filepath}] Section 6 pattern NOT found!")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Successfully wrote upgraded content to {filepath}!\n")

process_file('js/lesson-11-3-data.js')
process_file('BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js')
