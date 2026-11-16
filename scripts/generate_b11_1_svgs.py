# -*- coding: utf-8 -*-
"""
Tạo các mã SVG đồ họa chuẩn TikZ cho Bài 1 Lớp 11:
1. SVG Tình huống mở đầu (Quỹ đạo trạm ISS quanh Trái Đất - Hình 1.1 SGK)
2. SVG Mục 1a: 4 sơ đồ xoắn ốc 360°, 720°, -180°, -540° theo đúng ảnh đính kèm của Thầy Sáng (Dùng phương trình Archimedes chuẩn toán học)
3. SVG Mục 2a: Hình 1.6 SGK (Cung 1 rad có độ dài bằng bán kính R)
4. SVG Mục 3a: Hình 1.7 SGK (Đường tròn lượng giác, điểm gốc A(1; 0), điểm M)
5. SVG Mục 3b: Hình 1.9b SGK CHỈNH ĐIỂM M Ở GÓC PHẦN TƯ THỨ III (theo yêu cầu đặc biệt của Thầy)
6. SVG Mục 4b: Minh họa quy tắc câu thần chú vàng: "Cos đối — Sin bù — Phụ chéo — Hơn kém pi"
"""

import math

def gen_spiral(x0, y0, r0, r_end, total_rad, clockwise=False, steps=100):
    points = []
    for i in range(steps + 1):
        t = i / steps
        theta = t * total_rad
        r = r0 + t * (r_end - r0)
        if clockwise:
            # Chiều âm: cùng chiều kim đồng hồ (y tăng)
            x = x0 + r * math.cos(theta)
            y = y0 + r * math.sin(theta)
        else:
            # Chiều dương: ngược chiều kim đồng hồ (y giảm)
            x = x0 + r * math.cos(theta)
            y = y0 - r * math.sin(theta)
        points.append(f"{x:.1f} {y:.1f}")
    return "M " + " L ".join(points)

# 1. SVG TÌNH HUỐNG MỞ ĐẦU: TRẠM VŨ TRỤ QUỐC TẾ ISS (HÌNH 1.1 SGK TRANG 5)
SVG_HOOK_ISS = '''<div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="600" height="360" viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" style="background: radial-gradient(circle, #0f172a 0%, #020617 100%); border-radius: 12px; border: 1.5px solid #1e293b; box-shadow: 0 8px 24px rgba(0,0,0,0.4);">
  <defs>
    <radialGradient id="earthGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="70%" stop-color="#0284c7"/>
      <stop offset="90%" stop-color="#0369a1"/>
      <stop offset="100%" stop-color="#075985"/>
    </radialGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <marker id="issArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#38bdf8"/>
    </marker>
    <marker id="arcArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Các vì sao nền vũ trụ -->
  <circle cx="50" cy="40" r="1.5" fill="#ffffff" opacity="0.8"/>
  <circle cx="120" cy="80" r="1" fill="#ffffff" opacity="0.6"/>
  <circle cx="520" cy="50" r="1.5" fill="#ffffff" opacity="0.7"/>
  <circle cx="560" cy="180" r="1" fill="#ffffff" opacity="0.5"/>
  <circle cx="80" cy="280" r="1.2" fill="#ffffff" opacity="0.6"/>
  <circle cx="500" cy="310" r="1" fill="#ffffff" opacity="0.8"/>

  <!-- Tâm Trái Đất O -->
  <g transform="translate(300, 240)">
    <!-- Vùng quạt quét 45 độ của trạm ISS -->
    <path d="M 0 0 L 61.2 -147.8 A 160 160 0 0 0 -61.2 -147.8 Z" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>

    <!-- Quỹ đạo tròn của trạm ISS (R = 160px) -->
    <circle cx="0" cy="0" r="160" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4" opacity="0.7"/>

    <!-- Khí quyển mỏng bao quanh Trái Đất -->
    <circle cx="0" cy="0" r="126" fill="none" stroke="#7dd3fc" stroke-width="3" opacity="0.4" filter="url(#glow)"/>

    <!-- Quả địa cầu Trái Đất (R = 120px) -->
    <circle cx="0" cy="0" r="120" fill="url(#earthGrad)"/>
    
    <!-- Lục địa minh họa trên Trái Đất -->
    <path d="M -40 -80 Q -10 -90 20 -70 Q 50 -50 30 -20 Q 10 10 -20 0 Q -50 -30 -40 -80 Z" fill="#15803d" opacity="0.7"/>
    <path d="M -80 -20 Q -50 -10 -40 30 Q -60 60 -90 40 Z" fill="#16a34a" opacity="0.65"/>
    <path d="M 30 10 Q 70 0 80 40 Q 60 70 20 60 Z" fill="#15803d" opacity="0.6"/>

    <!-- Tâm Trái Đất O -->
    <circle cx="0" cy="0" r="4" fill="#ffffff"/>
    <text x="-8" y="18" fill="#ffffff" font-size="13" font-weight="bold">O</text>

    <!-- Bán kính Trái Đất R_TĐ = 6400 km -->
    <line x1="0" y1="0" x2="104" y2="60" stroke="#f8fafc" stroke-width="1.5"/>
    <circle cx="104" cy="60" r="3" fill="#f8fafc"/>
    <rect x="25" y="10" width="75" height="18" rx="4" fill="#0f172a" fill-opacity="0.8"/>
    <text x="30" y="23" fill="#38bdf8" font-size="11" font-weight="bold">6 400 km</text>

    <!-- Độ cao quỹ đạo 400 km -->
    <line x1="-120" y1="0" x2="-160" y2="0" stroke="#f43f5e" stroke-width="2"/>
    <circle cx="-120" cy="0" r="2.5" fill="#f43f5e"/>
    <circle cx="-160" cy="0" r="2.5" fill="#f43f5e"/>
    <rect x="-155" y="-22" width="65" height="18" rx="4" fill="#0f172a" fill-opacity="0.8"/>
    <text x="-150" y="-9" fill="#f43f5e" font-size="11" font-weight="bold">400 km</text>

    <!-- Cung góc ở tâm 45 độ -->
    <path d="M -23 -55.5 A 60 60 0 0 1 23 -55.5" fill="none" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arcArrow)"/>
    <rect x="-16" y="-80" width="32" height="18" rx="4" fill="#0f172a" fill-opacity="0.9"/>
    <text x="-11" y="-66" fill="#f59e0b" font-size="12" font-weight="bold">45°</text>

    <!-- Cung quỹ đạo ISS di chuyển (độ dài l) -->
    <path d="M -61.2 -147.8 A 160 160 0 0 1 61.2 -147.8" fill="none" stroke="#e11d48" stroke-width="4"/>
    <rect x="-50" y="-180" width="100" height="22" rx="5" fill="#881337" stroke="#fda4af" stroke-width="1"/>
    <text x="-44" y="-165" fill="#ffffff" font-size="11" font-weight="bold">Quãng đường l = ?</text>

    <!-- Trạm mặt đất với ăng-ten -->
    <g transform="translate(0, -120)">
      <path d="M -8 0 L 8 0 L 4 -12 L -4 -12 Z" fill="#64748b"/>
      <line x1="0" y1="-12" x2="0" y2="-20" stroke="#cbd5e1" stroke-width="2"/>
      <path d="M -10 -20 Q 0 -16 10 -20" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <text x="14" y="-10" fill="#fef08a" font-size="11" font-weight="bold">Trạm mặt đất</text>
    </g>

    <!-- Trạm không gian ISS đang bay trên quỹ đạo -->
    <g transform="translate(61.2, -147.8) rotate(22)">
      <rect x="-14" y="-5" width="28" height="10" rx="2" fill="#e2e8f0" stroke="#334155" stroke-width="1"/>
      <rect x="-24" y="-12" width="8" height="24" rx="1" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
      <rect x="16" y="-12" width="8" height="24" rx="1" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
      <circle cx="0" cy="0" r="3" fill="#f43f5e"/>
      <text x="12" y="-16" fill="#38bdf8" font-size="12" font-weight="bold">Trạm ISS</text>
    </g>
  </g>

  <!-- Chú thích chân hình -->
  <text x="300" y="345" text-anchor="middle" fill="#94a3b8" font-size="12" font-style="italic">Hình 1.1: Mô hình toán học trạm vũ trụ ISS bay trên quỹ đạo tròn quanh Trái Đất (SGK trang 5)</text>
</svg>
</div>'''

# Tọa độ xoắn ốc Archimedes chuẩn 100% toán học cho 4 sơ đồ
path_360 = gen_spiral(45, 110, 10, 36, 2 * math.pi, clockwise=False, steps=120)
path_720 = gen_spiral(235, 110, 8, 42, 4 * math.pi, clockwise=False, steps=150)
path_540 = gen_spiral(665, 110, 10, 42, 3 * math.pi, clockwise=True, steps=140)

# 2. SVG MỤC 1a: BỐN SƠ ĐỒ XOẮN ỐC ARCHIMEDES CHUẨN SGK TRANG 6
SVG_SEC1A_SPIRALS = f'''<div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="780" height="240" viewBox="0 0 780 240" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  <defs>
    <!-- Mũi tên đỏ chỉ chiều quay lượng giác -->
    <marker id="redArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
    </marker>
    <!-- Mũi tên đen nhỏ cho chiều + / - -->
    <marker id="blackArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
  </defs>

  <!-- ==================== HÌNH 1: sđ(Ou, Ov) = 360° ==================== -->
  <g>
    <!-- Trục tia Ou, Ov trùng nhau -->
    <line x1="45" y1="110" x2="165" y2="110" stroke="#1e293b" stroke-width="2"/>
    <circle cx="45" cy="110" r="3.5" fill="#0284c7"/>
    <text x="40" y="130" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="145" y="130" fill="#0284c7" font-size="14" font-style="italic">u, v</text>

    <!-- Tia Om quay ngược chiều KĐH (chiều dương) -->
    <line x1="45" y1="110" x2="120" y2="75" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="115" y="65" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>
    
    <!-- Cung chiều dương (+) -->
    <path d="M 85 96 A 25 25 0 0 1 78 78" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#blackArrow)"/>
    <text x="88" y="88" fill="#1e293b" font-size="13" font-weight="bold">+</text>

    <!-- Xoắn ốc Archimedes 1 vòng đỏ mượt mà (360 độ) -->
    <path d="{path_360}" fill="none" stroke="#dc2626" stroke-width="2.2"/>
    <!-- Mũi tên kết thúc chỉ xuống vào trục u, v -->
    <path d="M 81 106 L 81 118" stroke="#dc2626" stroke-width="2.2" marker-end="url(#redArrow)"/>

    <text x="105" y="210" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="bold">sđ (Ou, Ov) = 360°</text>
  </g>

  <!-- Đường phân cách dọc 1 -->
  <line x1="185" y1="20" x2="185" y2="220" stroke="#f1f5f9" stroke-width="2"/>

  <!-- ==================== HÌNH 2: sđ(Ou, Ov) = 720° ==================== -->
  <g>
    <!-- Trục tia Ou, Ov trùng nhau -->
    <line x1="235" y1="110" x2="355" y2="110" stroke="#1e293b" stroke-width="2"/>
    <circle cx="235" cy="110" r="3.5" fill="#0284c7"/>
    <text x="230" y="130" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="335" y="130" fill="#0284c7" font-size="14" font-style="italic">u, v</text>

    <!-- Tia Om quay ngược chiều KĐH (chiều dương) -->
    <line x1="235" y1="110" x2="310" y2="75" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="305" y="65" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>

    <!-- Cung chiều dương (+) -->
    <path d="M 275 96 A 25 25 0 0 1 268 78" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#blackArrow)"/>
    <text x="278" y="88" fill="#1e293b" font-size="13" font-weight="bold">+</text>

    <!-- Xoắn ốc Archimedes 2 vòng đỏ mượt mà (720 độ) -->
    <path d="{path_720}" fill="none" stroke="#dc2626" stroke-width="2.2"/>
    <!-- Mũi tên kết thúc chỉ xuống vào trục u, v -->
    <path d="M 277 106 L 277 118" stroke="#dc2626" stroke-width="2.2" marker-end="url(#redArrow)"/>

    <text x="295" y="210" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="bold">sđ (Ou, Ov) = 720°</text>
  </g>

  <!-- Đường phân cách dọc 2 -->
  <line x1="380" y1="20" x2="380" y2="220" stroke="#f1f5f9" stroke-width="2"/>

  <!-- ==================== HÌNH 3: sđ(Ou, Ov) = -180° ==================== -->
  <g>
    <!-- Trục tia Ou và Ov đối nhau -->
    <line x1="475" y1="110" x2="560" y2="110" stroke="#1e293b" stroke-width="2"/>
    <line x1="400" y1="110" x2="475" y2="110" stroke="#dc2626" stroke-width="2"/>
    <circle cx="475" cy="110" r="3.5" fill="#0284c7"/>
    <text x="470" y="90" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="545" y="130" fill="#0284c7" font-size="14" font-style="italic">u</text>
    <text x="405" y="130" fill="#0284c7" font-size="14" font-style="italic">v</text>

    <!-- Tia Om quay cùng chiều KĐH (chiều âm) -->
    <line x1="475" y1="110" x2="540" y2="148" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="535" y="168" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>

    <!-- Cung chiều âm (-) -->
    <path d="M 505 116 A 25 25 0 0 1 520 132" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#blackArrow)"/>
    <text x="525" y="128" fill="#1e293b" font-size="13" font-weight="bold">-</text>

    <!-- Cung tròn nửa vòng đỏ mượt mà (-180 độ) -->
    <path d="M 515 110 A 40 40 0 0 1 435 110" fill="none" stroke="#dc2626" stroke-width="2.2"/>
    <!-- Mũi tên kết thúc chỉ lên chạm vào tia Ov -->
    <path d="M 435 118 L 435 106" stroke="#dc2626" stroke-width="2.2" marker-end="url(#redArrow)"/>

    <text x="480" y="210" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="bold">sđ (Ou, Ov) = -180°</text>
  </g>

  <!-- Đường phân cách dọc 3 -->
  <line x1="575" y1="20" x2="575" y2="220" stroke="#f1f5f9" stroke-width="2"/>

  <!-- ==================== HÌNH 4: sđ(Ou, Ov) = -540° ==================== -->
  <g>
    <!-- Trục tia Ou và Ov đối nhau -->
    <line x1="665" y1="110" x2="750" y2="110" stroke="#1e293b" stroke-width="2"/>
    <line x1="590" y1="110" x2="665" y2="110" stroke="#dc2626" stroke-width="2"/>
    <circle cx="665" cy="110" r="3.5" fill="#0284c7"/>
    <text x="660" y="90" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="735" y="130" fill="#0284c7" font-size="14" font-style="italic">u</text>
    <text x="595" y="130" fill="#0284c7" font-size="14" font-style="italic">v</text>

    <!-- Tia Om quay cùng chiều KĐH (chiều âm) -->
    <line x1="665" y1="110" x2="730" y2="148" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="725" y="168" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>

    <!-- Cung chiều âm (-) -->
    <path d="M 695 116 A 25 25 0 0 1 710 132" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#blackArrow)"/>
    <text x="715" y="128" fill="#1e293b" font-size="13" font-weight="bold">-</text>

    <!-- Xoắn ốc Archimedes 1.5 vòng đỏ mượt mà (-540 độ) -->
    <path d="{path_540}" fill="none" stroke="#dc2626" stroke-width="2.2"/>
    <!-- Mũi tên kết thúc chỉ lên chạm vào tia Ov -->
    <path d="M 623 118 L 623 106" stroke="#dc2626" stroke-width="2.2" marker-end="url(#redArrow)"/>

    <text x="670" y="210" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="bold">sđ (Ou, Ov) = -540°</text>
  </g>
</svg>
</div>'''

# 3. SVG MỤC 2a: HÌNH 1.6 SGK (CUNG 1 RAD CÓ ĐỘ DÀI BẰNG BÁN KÍNH R)
SVG_SEC2A_RADIAN = '''<div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="440" height="260" viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  <defs>
    <marker id="angleArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0284c7"/>
    </marker>
  </defs>

  <g transform="translate(220, 130)">
    <!-- Đường tròn tâm O, bán kính R = 90px -->
    <circle cx="0" cy="0" r="90" fill="none" stroke="#10b981" stroke-width="2"/>

    <!-- Tâm O -->
    <circle cx="0" cy="0" r="3.5" fill="#0284c7"/>
    <text x="-16" y="5" fill="#0284c7" font-size="15" font-weight="bold">O</text>

    <!-- Bán kính OA (góc 0 độ, tức chếch nhẹ sang phải) -->
    <!-- Trong SGK: OA chếch khoảng 15 độ, OB ở góc khoảng 72.3 độ (1 rad = 57.3 độ) -->
    <!-- Đặt OA ở góc -15 deg (x = 86.9, y = -23.3) -->
    <!-- Đặt OB ở góc -72.3 deg (x = 27.4, y = -85.7) -->
    <line x1="0" y1="0" x2="86.9" y2="-23.3" stroke="#1e293b" stroke-width="2"/>
    <circle cx="86.9" cy="-23.3" r="3.5" fill="#0284c7"/>
    <text x="96" y="-18" fill="#0284c7" font-size="15" font-weight="bold">A</text>

    <!-- Bán kính OB -->
    <line x1="0" y1="0" x2="27.4" y2="-85.7" stroke="#1e293b" stroke-width="2"/>
    <circle cx="27.4" cy="-85.7" r="3.5" fill="#0284c7"/>
    <text x="22" y="-95" fill="#0284c7" font-size="15" font-weight="bold">B</text>

    <!-- Cung tròn AB màu đỏ (độ dài đúng bằng R) -->
    <path d="M 86.9 -23.3 A 90 90 0 0 0 27.4 -85.7" fill="none" stroke="#dc2626" stroke-width="3.5"/>

    <!-- Nhãn R trên hai bán kính -->
    <text x="45" y="-5" fill="#1e293b" font-size="13" font-style="italic" font-weight="bold">R</text>
    <text x="5" y="-45" fill="#1e293b" font-size="13" font-style="italic" font-weight="bold">R</text>

    <!-- Góc ở tâm 1 rad -->
    <path d="M 33.8 -9.1 A 35 35 0 0 0 10.6 -33.3" fill="none" stroke="#0284c7" stroke-width="1.8"/>
    <rect x="42" y="-55" width="52" height="22" rx="4" fill="#fef2f2" stroke="#fca5a5" stroke-width="1"/>
    <text x="48" y="-40" fill="#dc2626" font-size="12" font-weight="bold">1 rad</text>
  </g>

  <!-- Chú thích chân hình -->
  <text x="220" y="248" text-anchor="middle" fill="#64748b" font-size="12" font-style="italic">Hình 1.6: Định nghĩa cung có số đo 1 radian có độ dài l = R (SGK trang 8)</text>
</svg>
</div>'''

# 4. SVG MỤC 3a: HÌNH 1.7 SGK (ĐƯỜNG TRÒN LƯỢNG GIÁC, ĐIỂM GỐC A(1; 0))
SVG_SEC3A_TRIG_CIRCLE = '''<div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="460" height="300" viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  <defs>
    <marker id="axisArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
    <marker id="posRotArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
    </marker>
  </defs>

  <g transform="translate(230, 150)">
    <!-- Trục tọa độ Ox, Oy -->
    <line x1="-140" y1="0" x2="140" y2="0" stroke="#1e293b" stroke-width="1.8" marker-end="url(#axisArrow)"/>
    <text x="145" y="4" fill="#1e293b" font-size="14" font-weight="bold">x</text>

    <line x1="0" y1="130" x2="0" y2="-130" stroke="#1e293b" stroke-width="1.8" marker-end="url(#axisArrow)"/>
    <text x="-4" y="-135" fill="#1e293b" font-size="14" font-weight="bold">y</text>

    <!-- Đường tròn lượng giác R = 95px -->
    <circle cx="0" cy="0" r="95" fill="none" stroke="#f59e0b" stroke-width="2.5"/>

    <!-- Tâm O(0,0) -->
    <circle cx="0" cy="0" r="3.5" fill="#0284c7"/>
    <text x="-16" y="18" fill="#0284c7" font-size="14" font-weight="bold">O</text>

    <!-- Điểm gốc A(1; 0) -->
    <circle cx="95" cy="0" r="4.5" fill="#dc2626"/>
    <text x="102" y="18" fill="#dc2626" font-size="14" font-weight="bold">A(1; 0)</text>

    <!-- Điểm B(0; 1) -->
    <circle cx="0" cy="-95" r="3.5" fill="#0284c7"/>
    <text x="8" y="-95" fill="#0284c7" font-size="14" font-weight="bold">B(0; 1)</text>

    <!-- Điểm A'(-1; 0) -->
    <circle cx="-95" cy="0" r="3.5" fill="#0284c7"/>
    <text x="-120" y="18" fill="#0284c7" font-size="13" font-weight="bold">A'(-1; 0)</text>

    <!-- Điểm B'(0; -1) -->
    <circle cx="0" cy="95" r="3.5" fill="#0284c7"/>
    <text x="8" y="105" fill="#0284c7" font-size="13" font-weight="bold">B'(0; -1)</text>

    <!-- Chiều dương ngược chiều KĐH (Cung chỉ chiều quay) -->
    <path d="M 65 -65 A 92 92 0 0 1 20 -90" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#posRotArrow)"/>
    <text x="45" y="-75" fill="#dc2626" font-size="14" font-weight="bold">+</text>

    <!-- Điểm M biểu diễn góc alpha (Góc phần tư thứ I, khoảng 50 độ) -->
    <!-- cos(50) = 0.643, sin(50) = 0.766 -> x = 61, y = -72.8 -->
    <line x1="0" y1="0" x2="61" y2="-72.8" stroke="#0d9488" stroke-width="2"/>
    <circle cx="61" cy="-72.8" r="4.5" fill="#0d9488"/>
    <text x="70" y="-76" fill="#0d9488" font-size="15" font-weight="bold">M(x; y)</text>

    <!-- Góc alpha -->
    <path d="M 32 0 A 32 32 0 0 0 20.5 -24.5" fill="none" stroke="#dc2626" stroke-width="1.8"/>
    <text x="32" y="-12" fill="#dc2626" font-size="13" font-weight="bold">α</text>
  </g>

  <!-- Chú thích chân hình -->
  <text x="230" y="290" text-anchor="middle" fill="#64748b" font-size="12" font-style="italic">Hình 1.7: Đường tròn lượng giác gốc A(1; 0) và điểm biểu diễn M(α) (SGK trang 9)</text>
</svg>
</div>'''

# 5. SVG MỤC 3b: HÌNH 1.9b SGK ĐẶC BIỆT CHỈNH ĐIỂM M Ở GÓC PHẦN TƯ THỨ III
# YÊU CẦU ĐẶC BIỆT CỦA THẦY SÁNG: cos < 0, sin < 0, tan > 0, cot > 0
SVG_SEC3B_QUADRANT3 = '''<div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="480" height="340" viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  <defs>
    <marker id="axisArrow3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0284c7"/>
    </marker>
    <marker id="redRot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
    </marker>
  </defs>

  <g transform="translate(240, 160)">
    <!-- Vùng tô sáng Góc phần tư thứ III -->
    <rect x="-110" y="0" width="110" height="110" fill="#fef2f2" fill-opacity="0.6"/>
    <text x="-85" y="55" fill="#f87171" font-size="11" font-weight="bold">Góc phần tư III</text>

    <!-- Trục tọa độ: Ox là trục cosin, Oy là trục sin -->
    <line x1="-150" y1="0" x2="150" y2="0" stroke="#0284c7" stroke-width="2" marker-end="url(#axisArrow3)"/>
    <text x="145" y="18" fill="#0284c7" font-size="14" font-weight="bold">x</text>
    <text x="85" y="-8" fill="#0369a1" font-size="11" font-weight="bold">(trục côsin)</text>

    <line x1="0" y1="145" x2="0" y2="-145" stroke="#0284c7" stroke-width="2" marker-end="url(#axisArrow3)"/>
    <text x="-16" y="-135" fill="#0284c7" font-size="14" font-weight="bold">y</text>
    <text x="12" y="-125" fill="#0369a1" font-size="11" font-weight="bold">(trục sin)</text>

    <!-- Đường tròn lượng giác R = 100px -->
    <circle cx="0" cy="0" r="100" fill="none" stroke="#f59e0b" stroke-width="2.5"/>

    <!-- Tâm O(0,0) -->
    <circle cx="0" cy="0" r="4" fill="#0f172a"/>
    <text x="-18" y="-10" fill="#0f172a" font-size="14" font-weight="bold">O</text>

    <!-- Điểm gốc A(1; 0) -->
    <circle cx="100" cy="0" r="4" fill="#dc2626"/>
    <text x="95" y="24" fill="#dc2626" font-size="13" font-weight="bold">A (1; 0)</text>

    <!-- Điểm B(0; 1) -->
    <circle cx="0" cy="-100" r="3.5" fill="#0284c7"/>
    <text x="8" y="-95" fill="#0284c7" font-size="12" font-weight="bold">B (0; 1)</text>

    <!-- Điểm A'(-1; 0) -->
    <circle cx="-100" cy="0" r="3.5" fill="#0284c7"/>
    <text x="-135" y="20" fill="#0284c7" font-size="12" font-weight="bold">A' (-1; 0)</text>

    <!-- Điểm B'(0; -1) -->
    <circle cx="0" cy="100" r="3.5" fill="#0284c7"/>
    <text x="8" y="115" fill="#0284c7" font-size="12" font-weight="bold">B' (0; -1)</text>

    <!-- ĐIỂM M Ở GÓC PHẦN TƯ THỨ III: alpha = 225 deg (hoặc 215 deg) -->
    <!-- Chọn góc 220 độ: cos(220) = -0.766, sin(220) = -0.643 -->
    <!-- x = -76.6, y = 64.3 (y dương trong SVG là hướng xuống dưới) -->
    
    <!-- Đoạn OM nối tâm O với M -->
    <line x1="0" y1="0" x2="-76.6" y2="64.3" stroke="#dc2626" stroke-width="2.5"/>
    <circle cx="-76.6" cy="64.3" r="5" fill="#dc2626"/>
    <text x="-120" y="80" fill="#dc2626" font-size="14" font-weight="bold">M(x; y)</text>

    <!-- Hình chiếu của M lên trục Ox: cho hoành độ x = cos(alpha) < 0 -->
    <line x1="-76.6" y1="64.3" x2="-76.6" y2="0" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4 3"/>
    <circle cx="-76.6" cy="0" r="4" fill="#16a34a"/>
    <rect x="-105" y="-24" width="75" height="18" rx="4" fill="#dcfce7" stroke="#86efac" stroke-width="1"/>
    <text x="-100" y="-11" fill="#15803d" font-size="11" font-weight="bold">cos α = x &lt; 0</text>

    <!-- Hình chiếu của M lên trục Oy: cho tung độ y = sin(alpha) < 0 -->
    <line x1="-76.6" y1="64.3" x2="0" y2="64.3" stroke="#9333ea" stroke-width="1.8" stroke-dasharray="4 3"/>
    <circle cx="0" cy="64.3" r="4" fill="#9333ea"/>
    <rect x="5" y="55" width="75" height="18" rx="4" fill="#f3e8ff" stroke="#d8b4fe" stroke-width="1"/>
    <text x="10" y="68" fill="#7e22ce" font-size="11" font-weight="bold">sin α = y &lt; 0</text>

    <!-- Cung góc alpha quét từ tia OA qua góc I, II sang góc III (ngược chiều KĐH) -->
    <path d="M 35 0 A 35 35 0 1 0 -26.8 22.5" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#redRot)"/>
    <text x="-30" y="-35" fill="#dc2626" font-size="14" font-weight="bold">α</text>
  </g>

  <!-- Bảng ghi nhớ dấu lượng giác ở góc III -->
  <rect x="15" y="295" width="450" height="36" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
  <text x="240" y="318" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="bold">
    Dấu giá trị lượng giác khi điểm M ở góc phần tư thứ III: cos α = x &lt; 0; sin α = y &lt; 0; tan α &gt; 0; cot α &gt; 0
  </text>
</svg>
</div>'''

# 6. SVG MỤC 4b: BỘ 4 QUY TẮC "COS ĐỐI — SIN BÙ — PHỤ CHÉO — HƠN KÉM PI"
SVG_SEC4_FORMULAS = '''<div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="780" height="230" viewBox="0 0 780 230" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  
  <!-- Khung 1: Cos đối -->
  <g transform="translate(20, 15)">
    <rect x="0" y="0" width="170" height="195" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="85" y="24" text-anchor="middle" fill="#0284c7" font-size="13" font-weight="bold">1. Cos đối</text>
    <!-- Tròn mini -->
    <circle cx="85" cy="85" r="45" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
    <line x1="40" y1="85" x2="130" y2="85" stroke="#94a3b8" stroke-width="1"/>
    <line x1="85" y1="40" x2="85" y2="130" stroke="#94a3b8" stroke-width="1"/>
    <!-- Điểm M(alpha) và N(-alpha) đối xứng qua Ox -->
    <circle cx="117" cy="53" r="3" fill="#dc2626"/>
    <text x="122" y="52" fill="#dc2626" font-size="10" font-weight="bold">M(α)</text>
    <circle cx="117" cy="117" r="3" fill="#0284c7"/>
    <text x="122" y="125" fill="#0284c7" font-size="10" font-weight="bold">N(-α)</text>
    <line x1="117" y1="53" x2="117" y2="117" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3 2"/>
    <!-- Công thức chốt -->
    <rect x="15" y="150" width="140" height="32" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="85" y="171" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold">cos(-α) = cos α</text>
  </g>

  <!-- Khung 2: Sin bù -->
  <g transform="translate(210, 15)">
    <rect x="0" y="0" width="170" height="195" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="85" y="24" text-anchor="middle" fill="#0284c7" font-size="13" font-weight="bold">2. Sin bù</text>
    <circle cx="85" cy="85" r="45" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
    <line x1="40" y1="85" x2="130" y2="85" stroke="#94a3b8" stroke-width="1"/>
    <line x1="85" y1="40" x2="85" y2="130" stroke="#94a3b8" stroke-width="1"/>
    <!-- Điểm M(alpha) và N(pi - alpha) đối xứng qua Oy -->
    <circle cx="117" cy="53" r="3" fill="#dc2626"/>
    <text x="122" y="52" fill="#dc2626" font-size="10" font-weight="bold">M</text>
    <circle cx="53" cy="53" r="3" fill="#0284c7"/>
    <text x="25" y="52" fill="#0284c7" font-size="10" font-weight="bold">N(π-α)</text>
    <line x1="53" y1="53" x2="117" y2="53" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3 2"/>
    <!-- Công thức chốt -->
    <rect x="15" y="150" width="140" height="32" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="85" y="171" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold">sin(π-α) = sin α</text>
  </g>

  <!-- Khung 3: Phụ chéo -->
  <g transform="translate(400, 15)">
    <rect x="0" y="0" width="170" height="195" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="85" y="24" text-anchor="middle" fill="#0284c7" font-size="13" font-weight="bold">3. Phụ chéo</text>
    <circle cx="85" cy="85" r="45" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
    <line x1="40" y1="85" x2="130" y2="85" stroke="#94a3b8" stroke-width="1"/>
    <line x1="85" y1="40" x2="85" y2="130" stroke="#94a3b8" stroke-width="1"/>
    <!-- Đường chéo phân giác y = x -->
    <line x1="50" y1="120" x2="120" y2="50" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2 2"/>
    <!-- M(alpha) và N(pi/2 - alpha) đối xứng qua y=x -->
    <circle cx="123" cy="62" r="3" fill="#dc2626"/>
    <text x="127" y="62" fill="#dc2626" font-size="10" font-weight="bold">M</text>
    <circle cx="108" cy="47" r="3" fill="#0284c7"/>
    <text x="65" y="42" fill="#0284c7" font-size="9" font-weight="bold">N(π/2-α)</text>
    <!-- Công thức chốt -->
    <rect x="15" y="150" width="140" height="32" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="85" y="171" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold">sin(π/2-α) = cos α</text>
  </g>

  <!-- Khung 4: Hơn kém pi -->
  <g transform="translate(590, 15)">
    <rect x="0" y="0" width="170" height="195" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
    <text x="85" y="24" text-anchor="middle" fill="#0284c7" font-size="13" font-weight="bold">4. Hơn kém π</text>
    <circle cx="85" cy="85" r="45" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
    <line x1="40" y1="85" x2="130" y2="85" stroke="#94a3b8" stroke-width="1"/>
    <line x1="85" y1="40" x2="85" y2="130" stroke="#94a3b8" stroke-width="1"/>
    <!-- M(alpha) và N(pi + alpha) đối xứng qua tâm O -->
    <circle cx="117" cy="53" r="3" fill="#dc2626"/>
    <text x="122" y="52" fill="#dc2626" font-size="10" font-weight="bold">M</text>
    <circle cx="53" cy="117" r="3" fill="#0284c7"/>
    <text x="25" y="128" fill="#0284c7" font-size="10" font-weight="bold">N(π+α)</text>
    <line x1="53" y1="117" x2="117" y2="53" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3 2"/>
    <!-- Công thức chốt -->
    <rect x="15" y="150" width="140" height="32" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="85" y="171" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold">tan(π+α) = tan α</text>
  </g>
</svg>
</div>'''

if __name__ == '__main__':
    print("SVG definitions prepared successfully!")
