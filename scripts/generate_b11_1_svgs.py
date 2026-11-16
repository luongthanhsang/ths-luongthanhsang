# -*- coding: utf-8 -*-
"""
Tạo các mã SVG đồ họa chuẩn TikZ cho Bài 1 Lớp 11:
1. SVG Tình huống mở đầu (Quỹ đạo trạm ISS quanh Trái Đất - Hình 1.1 SGK)
2. SVG Mục 1a: 4 sơ đồ xoắn ốc 360°, 720°, -180°, -540° theo đúng ảnh đính kèm của Thầy Sáng
3. SVG Mục 2a: Hình 1.6 SGK (Cung 1 rad có độ dài bằng bán kính R)
4. SVG Mục 3a: Hình 1.7 SGK (Đường tròn lượng giác, điểm gốc A(1; 0), điểm M)
5. SVG Mục 3b: Hình 1.9b SGK CHỈNH ĐIỂM M Ở GÓC PHẦN TƯ THỨ III (theo yêu cầu đặc biệt của Thầy)
6. SVG Mục 4a & 4b: Minh họa công thức lượng giác cơ bản và các góc liên quan đặc biệt
"""

# 1. SVG TÌNH HUỐNG MỞ ĐẦU: TRẠM VŨ TRỤ QUỐC TẾ ISS
SVG_HOOK_ISS = '''<div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="600" height="360" viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" style="background: radial-gradient(circle, #0f172a 0%, #020617 100%); border-radius: 12px; border: 1.5px solid #1e293b; box-shadow: 0 8px 24px rgba(0,0,0,0.4);">
  <defs>
    <!-- Trái Đất Gradient -->
    <radialGradient id="earthGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="70%" stop-color="#0284c7"/>
      <stop offset="90%" stop-color="#0369a1"/>
      <stop offset="100%" stop-color="#075985"/>
    </radialGradient>
    <!-- Khí quyển Glow -->
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
    <!-- Quạt góc ở tâm 45 độ (từ 112.5 deg sang 67.5 deg, hoặc từ 90 sang 45) -->
    <!-- Giả sử tia 1 ở góc 110 deg (-70 so với trục x) và tia 2 ở góc 65 deg (-25) -->
    <!-- R_TĐ = 120px (tương ứng 6400 km), R_quỹ đạo = 160px (tương ứng 6800 km) -->
    
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

    <!-- Trạm vũ trụ ISS trên quỹ đạo -->
    <g transform="translate(61.2, -147.8) rotate(45)">
      <!-- Thân trạm ISS -->
      <rect x="-6" y="-4" width="12" height="8" rx="2" fill="#e2e8f0"/>
      <!-- Tấm pin mặt trời -->
      <rect x="-18" y="-12" width="8" height="24" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
      <rect x="10" y="-12" width="8" height="24" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
      <line x1="-18" y1="0" x2="18" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
    </g>
    <text x="75" y="-150" fill="#38bdf8" font-size="12" font-weight="bold">Trạm ISS</text>
  </g>
  
  <text x="300" y="345" text-anchor="middle" fill="#94a3b8" font-size="12" font-style="italic">Hình 1.1: Mô hình toán học trạm vũ trụ ISS bay trên quỹ đạo tròn quanh Trái Đất (SGK trang 5)</text>
</svg>
</div>'''

# 2. SVG MỤC 1a: BỐN SƠ ĐỒ XOẮN ỐC THEO ĐÚNG ẢNH ĐÍNH KÈM (media_1794812582274_0b057345.jpg)
SVG_SEC1A_SPIRALS = '''<div class="svg-container text-center my-3" style="overflow-x: auto;">
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
  <g transform="translate(10, 20)">
    <!-- Trục tia Ou, Ov trùng nhau -->
    <line x1="45" y1="120" x2="165" y2="120" stroke="#1e293b" stroke-width="2"/>
    <circle cx="45" cy="120" r="3.5" fill="#0284c7"/>
    <text x="40" y="140" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="145" y="140" fill="#0284c7" font-size="14" font-style="italic">u, v</text>

    <!-- Tia Om quay ngược chiều KĐH (chiều dương) -->
    <line x1="45" y1="120" x2="115" y2="85" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="110" y="75" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>
    
    <!-- Cung chiều dương (+) -->
    <path d="M 85 105 A 25 25 0 0 1 75 80" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#blackArrow)"/>
    <text x="88" y="95" fill="#1e293b" font-size="13" font-weight="bold">+</text>

    <!-- Xoắn ốc 1 vòng đỏ (360 độ) -->
    <path d="M 45 120 
             A 22 22 0 0 1 45 76 
             A 30 30 0 0 1 75 120 
             A 30 30 0 0 1 45 150 
             A 35 35 0 0 1 10 120 
             A 38 38 0 0 1 45 82 
             A 42 42 0 0 1 87 118" 
          fill="none" stroke="#dc2626" stroke-width="2.2" marker-end="url(#redArrow)"/>

    <!-- Nhãn công thức -->
    <text x="95" y="205" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="bold">sđ (Ou, Ov) = 360°</text>
  </g>

  <!-- Đường phân cách nhẹ giữa các hình -->
  <line x1="195" y1="30" x2="195" y2="210" stroke="#f1f5f9" stroke-width="1.5"/>

  <!-- ==================== HÌNH 2: sđ(Ou, Ov) = 720° ==================== -->
  <g transform="translate(205, 20)">
    <!-- Trục tia Ou, Ov trùng nhau -->
    <line x1="45" y1="120" x2="165" y2="120" stroke="#1e293b" stroke-width="2"/>
    <circle cx="45" cy="120" r="3.5" fill="#0284c7"/>
    <text x="40" y="140" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="145" y="140" fill="#0284c7" font-size="14" font-style="italic">u, v</text>

    <!-- Tia Om nét đứt -->
    <line x1="45" y1="120" x2="115" y2="85" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="110" y="75" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>
    
    <!-- Cung chiều dương (+) -->
    <path d="M 85 105 A 25 25 0 0 1 75 80" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#blackArrow)"/>
    <text x="88" y="95" fill="#1e293b" font-size="13" font-weight="bold">+</text>

    <!-- Xoắn ốc 2 vòng đỏ (720 độ) -->
    <path d="M 45 120 
             A 12 12 0 0 1 45 96
             A 16 16 0 0 1 61 120
             A 18 18 0 0 1 45 138
             A 22 22 0 0 1 23 120
             A 26 26 0 0 1 45 94
             A 30 30 0 0 1 75 120
             A 34 34 0 0 1 45 154
             A 38 38 0 0 1 7 120
             A 42 42 0 0 1 45 78
             A 46 46 0 0 1 91 118" 
          fill="none" stroke="#dc2626" stroke-width="2.2" marker-end="url(#redArrow)"/>

    <!-- Nhãn công thức -->
    <text x="95" y="205" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="bold">sđ (Ou, Ov) = 720°</text>
  </g>

  <line x1="390" y1="30" x2="390" y2="210" stroke="#f1f5f9" stroke-width="1.5"/>

  <!-- ==================== HÌNH 3: sđ(Ou, Ov) = -180° ==================== -->
  <g transform="translate(400, 20)">
    <!-- Trục tia Ou và Ov đối nhau -->
    <line x1="5" y1="120" x2="85" y2="120" stroke="#dc2626" stroke-width="2"/>
    <line x1="85" y1="120" x2="165" y2="120" stroke="#1e293b" stroke-width="2"/>
    <circle cx="85" cy="120" r="3.5" fill="#0284c7"/>
    <text x="80" y="105" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="8" y="140" fill="#0284c7" font-size="14" font-style="italic">v</text>
    <text x="150" y="140" fill="#0284c7" font-size="14" font-style="italic">u</text>

    <!-- Tia Om quay cùng chiều KĐH (chiều âm) -->
    <line x1="85" y1="120" x2="140" y2="155" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="135" y="175" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>
    
    <!-- Cung chiều âm (-) -->
    <path d="M 115 130 A 25 25 0 0 1 125 155" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#blackArrow)"/>
    <text x="130" y="145" fill="#1e293b" font-size="14" font-weight="bold">−</text>

    <!-- Nửa vòng tròn màu đỏ theo chiều âm (dưới) từ Ou đến Ov -->
    <path d="M 125 120 A 35 35 0 0 1 65 120" fill="none" stroke="#dc2626" stroke-width="2.2" marker-end="url(#redArrow)"/>

    <!-- Nhãn công thức -->
    <text x="85" y="205" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="bold">sđ (Ou, Ov) = −180°</text>
  </g>

  <line x1="585" y1="30" x2="585" y2="210" stroke="#f1f5f9" stroke-width="1.5"/>

  <!-- ==================== HÌNH 4: sđ(Ou, Ov) = -540° ==================== -->
  <g transform="translate(595, 20)">
    <!-- Trục tia Ou và Ov đối nhau -->
    <line x1="5" y1="120" x2="85" y2="120" stroke="#dc2626" stroke-width="2"/>
    <line x1="85" y1="120" x2="165" y2="120" stroke="#1e293b" stroke-width="2"/>
    <circle cx="85" cy="120" r="3.5" fill="#0284c7"/>
    <text x="80" y="105" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="8" y="140" fill="#0284c7" font-size="14" font-style="italic">v</text>
    <text x="150" y="140" fill="#0284c7" font-size="14" font-style="italic">u</text>

    <!-- Tia Om nét đứt chiều âm -->
    <line x1="85" y1="120" x2="140" y2="155" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="135" y="175" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>
    
    <!-- Cung chiều âm (-) -->
    <path d="M 115 130 A 25 25 0 0 1 125 155" fill="none" stroke="#1e293b" stroke-width="1.5" marker-end="url(#blackArrow)"/>
    <text x="130" y="145" fill="#1e293b" font-size="14" font-weight="bold">−</text>

    <!-- Xoắn ốc 1.5 vòng đỏ (540 độ âm) -->
    <path d="M 105 120 
             A 20 20 0 0 1 85 140
             A 22 22 0 0 1 63 120
             A 25 25 0 0 1 85 95
             A 30 30 0 0 1 115 120
             A 35 35 0 0 1 85 155
             A 40 40 0 0 1 45 120" 
          fill="none" stroke="#dc2626" stroke-width="2.2" marker-end="url(#redArrow)"/>

    <!-- Nhãn công thức -->
    <text x="85" y="205" text-anchor="middle" fill="#1e293b" font-size="14" font-weight="bold">sđ (Ou, Ov) = −540°</text>
  </g>
</svg>
<div class="small text-muted mt-2">Hình 1.3: Số đo các góc lượng giác có cùng tia đầu Ou, tia cuối Ov (SGK Kết nối tri thức trang 6).</div>
</div>'''

# 3. SVG MỤC 2a: HÌNH 1.6 SGK (Cung 1 rad có độ dài bằng bán kính R)
SVG_SEC2A_RADIAN = '''<div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="340" height="260" viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  <g transform="translate(150, 130)">
    <!-- Đường tròn bán kính R = 90px -->
    <circle cx="0" cy="0" r="90" fill="none" stroke="#10b981" stroke-width="2"/>

    <!-- Tâm O -->
    <circle cx="0" cy="0" r="3.5" fill="#0284c7"/>
    <text x="-16" y="5" fill="#0284c7" font-size="14" font-weight="bold">O</text>

    <!-- Bán kính OA (góc 0 độ, x = 90, y = 0) -->
    <!-- Trong SGK: Bán kính OA nghiêng góc -15 độ (x = 87, y = 23) -->
    <!-- Bán kính OB nghiêng góc -15 - 57.3 = -72.3 độ (x = 27, y = -86) -->
    <line x1="0" y1="0" x2="85" y2="-25" stroke="#1e293b" stroke-width="2"/>
    <circle cx="85" cy="-25" r="3" fill="#1e293b"/>
    <text x="92" y="-20" fill="#0284c7" font-size="14" font-weight="bold">A</text>

    <line x1="0" y1="0" x2="10" y2="-89" stroke="#1e293b" stroke-width="2"/>
    <circle cx="10" cy="-89" r="3" fill="#1e293b"/>
    <text x="3" y="-96" fill="#0284c7" font-size="14" font-weight="bold">B</text>

    <!-- Cung tròn AB tô đậm màu đỏ (1 rad) -->
    <path d="M 85 -25 A 90 90 0 0 0 10 -89" fill="none" stroke="#dc2626" stroke-width="3.5"/>
    
    <!-- Cung nhỏ góc ở tâm 1 rad -->
    <path d="M 28 -8 A 30 30 0 0 0 3 -30" fill="none" stroke="#0284c7" stroke-width="1.8"/>

    <!-- Nhãn 1 rad trên cung AB -->
    <rect x="50" y="-75" width="48" height="20" rx="4" fill="#fef2f2" stroke="#fca5a5" stroke-width="1"/>
    <text x="54" y="-61" fill="#dc2626" font-size="12" font-weight="bold">1 rad</text>

    <!-- Chú thích bán kính R -->
    <text x="35" y="-3" fill="#64748b" font-size="12" font-style="italic">R</text>
    <text x="-5" y="-45" fill="#64748b" font-size="12" font-style="italic">R</text>
  </g>
  <text x="170" y="245" text-anchor="middle" fill="#64748b" font-size="12" font-style="italic">Hình 1.6: Định nghĩa cung có số đo 1 radian có độ dài l = R (SGK trang 8)</text>
</svg>
</div>'''

# 4. SVG MỤC 3a: HÌNH 1.7 SGK (Đường tròn lượng giác gốc A(1; 0))
SVG_SEC3A_TRIG_CIRCLE = '''<div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="400" height="320" viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  <defs>
    <marker id="axisArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0284c7"/>
    </marker>
    <marker id="arcGreen" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#059669"/>
    </marker>
  </defs>

  <g transform="translate(200, 160)">
    <!-- Trục Ox và Oy -->
    <line x1="-150" y1="0" x2="160" y2="0" stroke="#0284c7" stroke-width="1.8" marker-end="url(#axisArrow)"/>
    <line x1="0" y1="130" x2="0" y2="-140" stroke="#0284c7" stroke-width="1.8" marker-end="url(#axisArrow)"/>
    
    <text x="160" y="15" fill="#0284c7" font-size="14" font-weight="bold">x</text>
    <text x="-15" y="-135" fill="#0284c7" font-size="14" font-weight="bold">y</text>
    <text x="-15" y="16" fill="#1e293b" font-size="13" font-weight="bold">O</text>

    <!-- Đường tròn lượng giác R = 100px màu cam -->
    <circle cx="0" cy="0" r="100" fill="none" stroke="#f97316" stroke-width="2.5"/>

    <!-- 4 điểm gốc và các điểm mốc A, A', B, B' -->
    <circle cx="100" cy="0" r="3.5" fill="#0284c7"/>
    <text x="105" y="16" fill="#0284c7" font-size="14" font-weight="bold">A</text>

    <circle cx="-100" cy="0" r="3.5" fill="#0284c7"/>
    <text x="-122" y="16" fill="#0284c7" font-size="14" font-weight="bold">A'</text>

    <circle cx="0" cy="-100" r="3.5" fill="#0284c7"/>
    <text x="8" y="-103" fill="#0284c7" font-size="14" font-weight="bold">B</text>

    <circle cx="0" cy="100" r="3.5" fill="#0284c7"/>
    <text x="8" y="115" fill="#0284c7" font-size="14" font-weight="bold">B'</text>

    <!-- Điểm M ở góc phần tư thứ II (ví dụ 140 độ: x = -76.6, y = -64.3) -->
    <!-- Trong Hình 1.7 SGK: điểm M ở góc phần tư II -->
    <line x1="0" y1="0" x2="-76.6" y2="-64.3" stroke="#dc2626" stroke-width="2"/>
    <circle cx="-76.6" cy="-64.3" r="4.5" fill="#dc2626"/>
    <text x="-95" y="-68" fill="#dc2626" font-size="14" font-weight="bold">M</text>

    <!-- Hình chiếu H lên Ox, K lên Oy -->
    <line x1="-76.6" y1="-64.3" x2="-76.6" y2="0" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/>
    <circle cx="-76.6" cy="0" r="3" fill="#64748b"/>
    <text x="-82" y="16" fill="#475569" font-size="12" font-weight="bold">H</text>

    <line x1="-76.6" y1="-64.3" x2="0" y2="-64.3" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/>
    <circle cx="0" cy="-64.3" r="3" fill="#64748b"/>
    <text x="6" y="-60" fill="#475569" font-size="12" font-weight="bold">K</text>

    <!-- Góc lượng giác alpha từ tia OA đến tia OM -->
    <path d="M 40 0 A 40 40 0 0 0 -30.6 -25.7" fill="none" stroke="#059669" stroke-width="2" marker-end="url(#arcGreen)"/>
    <text x="15" y="-30" fill="#059669" font-size="13" font-weight="bold">α</text>
  </g>
  <text x="200" y="305" text-anchor="middle" fill="#64748b" font-size="12" font-style="italic">Hình 1.7: Đường tròn lượng giác gốc A(1; 0) và điểm M biểu diễn góc lượng giác α (SGK trang 10)</text>
</svg>
</div>'''

# 5. SVG MỤC 3b: HÌNH 1.9b SGK CHỈNH ĐIỂM M Ở GÓC PHẦN TƯ THỨ III (YÊU CẦU ĐẶC BIỆT CỦA THẦY SÁNG)
SVG_SEC3B_QUADRANT3 = '''<div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="440" height="360" viewBox="0 0 440 360" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 2px solid #3b82f6; box-shadow: 0 6px 20px rgba(59,130,246,0.12);">
  <defs>
    <marker id="blueAxis" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#2563eb"/>
    </marker>
    <marker id="rotArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#dc2626"/>
    </marker>
  </defs>

  <g transform="translate(220, 180)">
    <!-- Vùng highlight Góc phần tư thứ III -->
    <rect x="-150" y="0" width="150" height="150" fill="#fef2f2" fill-opacity="0.6"/>
    <text x="-120" y="40" fill="#f87171" font-size="12" font-weight="bold">Góc phần tư III</text>

    <!-- Trục hoành Ox (Trục côsin) và Trục tung Oy (Trục sin) -->
    <line x1="-160" y1="0" x2="170" y2="0" stroke="#2563eb" stroke-width="2" marker-end="url(#blueAxis)"/>
    <line x1="0" y1="150" x2="0" y2="-155" stroke="#2563eb" stroke-width="2" marker-end="url(#blueAxis)"/>

    <text x="172" y="16" fill="#2563eb" font-size="14" font-weight="bold">x</text>
    <text x="110" y="-8" fill="#1d4ed8" font-size="11" font-weight="bold">(trục côsin)</text>
    
    <text x="-16" y="-145" fill="#2563eb" font-size="14" font-weight="bold">y</text>
    <text x="8" y="-135" fill="#1d4ed8" font-size="11" font-weight="bold">(trục sin)</text>
    
    <text x="-16" y="-8" fill="#1e293b" font-size="14" font-weight="bold">O</text>

    <!-- Đường tròn lượng giác tâm O, bán kính R = 110px -->
    <circle cx="0" cy="0" r="110" fill="none" stroke="#f59e0b" stroke-width="2.5"/>

    <!-- Các điểm mốc A(1; 0), A'(-1; 0), B(0; 1), B'(0; -1) -->
    <circle cx="110" cy="0" r="3.5" fill="#2563eb"/>
    <text x="116" y="16" fill="#2563eb" font-size="13" font-weight="bold">A (1; 0)</text>

    <circle cx="-110" cy="0" r="3.5" fill="#2563eb"/>
    <text x="-155" y="16" fill="#2563eb" font-size="13" font-weight="bold">A' (-1; 0)</text>

    <circle cx="0" cy="-110" r="3.5" fill="#2563eb"/>
    <text x="8" y="-112" fill="#2563eb" font-size="13" font-weight="bold">B (0; 1)</text>

    <circle cx="0" cy="110" r="3.5" fill="#2563eb"/>
    <text x="8" y="125" fill="#2563eb" font-size="13" font-weight="bold">B' (0; -1)</text>

    <!-- ================================================================= -->
    <!-- ĐIỂM M ĐƯỢC ĐẶT CHÍNH XÁC Ở GÓC PHẦN TƯ THỨ III (THEO YÊU CẦU THẦY) -->
    <!-- Chọn góc α = 215 độ: cos 215° ≈ -0.819 (-90.1px), sin 215° ≈ -0.573 (+63.1px trên SVG) -->
    <!-- ================================================================= -->
    <!-- Bán kính OM -->
    <line x1="0" y1="0" x2="-90.1" y2="63.1" stroke="#dc2626" stroke-width="2.5"/>
    <circle cx="-90.1" cy="63.1" r="5" fill="#dc2626"/>
    <text x="-135" y="80" fill="#dc2626" font-size="14" font-weight="bold">M(x; y)</text>

    <!-- Đường gióng vuông góc lên trục hoành (cos α) -->
    <line x1="-90.1" y1="63.1" x2="-90.1" y2="0" stroke="#059669" stroke-width="2" stroke-dasharray="5 3"/>
    <circle cx="-90.1" cy="0" r="4" fill="#059669"/>
    <!-- Nhãn cos alpha trên trục Ox âm -->
    <rect x="-125" y="-24" width="70" height="20" rx="4" fill="#ecfdf5" stroke="#10b981" stroke-width="1.2"/>
    <text x="-120" y="-10" fill="#047857" font-size="12" font-weight="bold">cos α = x &lt; 0</text>

    <!-- Đường gióng vuông góc sang trục tung (sin α) -->
    <line x1="-90.1" y1="63.1" x2="0" y2="63.1" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5 3"/>
    <circle cx="0" cy="63.1" r="4" fill="#7c3aed"/>
    <!-- Nhãn sin alpha trên trục Oy âm -->
    <rect x="8" y="52" width="70" height="20" rx="4" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.2"/>
    <text x="12" y="66" fill="#6d28d9" font-size="12" font-weight="bold">sin α = y &lt; 0</text>

    <!-- Cung xoay góc lượng giác α từ tia OA qua góc I, II tới M ở góc III -->
    <!-- Bắt đầu từ (45, 0) qua (0, -45), (-45, 0) đến (-36.9, 25.8) -->
    <path d="M 45 0 
             A 45 45 0 0 0 0 -45 
             A 45 45 0 0 0 -45 0 
             A 45 45 0 0 0 -36.9 25.8" 
          fill="none" stroke="#dc2626" stroke-width="2.2" marker-end="url(#rotArrow)"/>
    <text x="-40" y="-55" fill="#dc2626" font-size="14" font-weight="bold">α</text>
  </g>

  <!-- Chú thích chân hình theo đúng yêu cầu Thầy Sáng -->
  <text x="220" y="348" text-anchor="middle" fill="#1e293b" font-size="12" font-weight="bold">Hình 1.9b: Giá trị lượng giác khi điểm M ở góc phần tư thứ III: cos α = x &lt; 0; sin α = y &lt; 0; tan α &gt; 0; cot α &gt; 0</text>
</svg>
</div>'''

# 6. SVG MỤC 4: HỆ THỨC LƯỢNG GIÁC CƠ BẢN & CÁC GÓC LIÊN QUAN ĐẶC BIỆT
SVG_SEC4_FORMULAS = '''<div class="svg-container text-center my-3" style="overflow-x: auto;">
<svg width="680" height="240" viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  <!-- Sơ đồ 1: Cos đối (alpha và -alpha) -->
  <g transform="translate(10, 15)">
    <rect x="0" y="0" width="150" height="180" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="75" y="20" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold">1. Cos đối</text>
    <circle cx="75" cy="95" r="45" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="20" y1="95" x2="130" y2="95" stroke="#94a3b8" stroke-width="1"/>
    <line x1="75" y1="40" x2="75" y2="150" stroke="#94a3b8" stroke-width="1"/>
    <!-- Hai điểm đối xứng qua Ox -->
    <circle cx="105" cy="65" r="3" fill="#dc2626"/>
    <text x="110" y="65" fill="#dc2626" font-size="10" font-weight="bold">M(α)</text>
    <circle cx="105" cy="125" r="3" fill="#2563eb"/>
    <text x="110" y="132" fill="#2563eb" font-size="10" font-weight="bold">N(−α)</text>
    <line x1="105" y1="65" x2="105" y2="125" stroke="#059669" stroke-width="1.5" stroke-dasharray="3 2"/>
    <text x="75" y="170" text-anchor="middle" fill="#047857" font-size="11" font-weight="bold">cos(−α) = cos α</text>
  </g>

  <!-- Sơ đồ 2: Sin bù (alpha và pi - alpha) -->
  <g transform="translate(175, 15)">
    <rect x="0" y="0" width="150" height="180" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="75" y="20" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold">2. Sin bù</text>
    <circle cx="75" cy="95" r="45" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="20" y1="95" x2="130" y2="95" stroke="#94a3b8" stroke-width="1"/>
    <line x1="75" y1="40" x2="75" y2="150" stroke="#94a3b8" stroke-width="1"/>
    <!-- Hai điểm đối xứng qua Oy -->
    <circle cx="105" cy="65" r="3" fill="#dc2626"/>
    <text x="110" y="65" fill="#dc2626" font-size="10" font-weight="bold">M</text>
    <circle cx="45" cy="65" r="3" fill="#2563eb"/>
    <text x="25" y="65" fill="#2563eb" font-size="10" font-weight="bold">N(π−α)</text>
    <line x1="45" y1="65" x2="105" y2="65" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3 2"/>
    <text x="75" y="170" text-anchor="middle" fill="#6d28d9" font-size="11" font-weight="bold">sin(π−α) = sin α</text>
  </g>

  <!-- Sơ đồ 3: Phụ chéo (alpha và pi/2 - alpha) -->
  <g transform="translate(340, 15)">
    <rect x="0" y="0" width="150" height="180" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="75" y="20" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold">3. Phụ chéo</text>
    <circle cx="75" cy="95" r="45" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="20" y1="95" x2="130" y2="95" stroke="#94a3b8" stroke-width="1"/>
    <line x1="75" y1="40" x2="75" y2="150" stroke="#94a3b8" stroke-width="1"/>
    <line x1="35" y1="135" x2="115" y2="55" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2 2"/>
    <!-- Hai điểm đối xứng qua y = x -->
    <circle cx="110" cy="75" r="3" fill="#dc2626"/>
    <text x="114" y="75" fill="#dc2626" font-size="10" font-weight="bold">M</text>
    <circle cx="95" cy="60" r="3" fill="#2563eb"/>
    <text x="70" y="55" fill="#2563eb" font-size="10" font-weight="bold">N(π/2−α)</text>
    <text x="75" y="170" text-anchor="middle" fill="#b45309" font-size="11" font-weight="bold">sin(π/2−α) = cos α</text>
  </g>

  <!-- Sơ đồ 4: Hơn kém pi tan/cot -->
  <g transform="translate(505, 15)">
    <rect x="0" y="0" width="165" height="180" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
    <text x="82" y="20" text-anchor="middle" fill="#1e40af" font-size="12" font-weight="bold">4. Hơn kém π</text>
    <circle cx="82" cy="95" r="45" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="27" y1="95" x2="137" y2="95" stroke="#94a3b8" stroke-width="1"/>
    <line x1="82" y1="40" x2="82" y2="150" stroke="#94a3b8" stroke-width="1"/>
    <!-- Hai điểm đối xứng qua O -->
    <circle cx="112" cy="65" r="3" fill="#dc2626"/>
    <text x="116" y="65" fill="#dc2626" font-size="10" font-weight="bold">M</text>
    <circle cx="52" cy="125" r="3" fill="#2563eb"/>
    <text x="25" y="135" fill="#2563eb" font-size="10" font-weight="bold">N(π+α)</text>
    <line x1="52" y1="125" x2="112" y2="65" stroke="#dc2626" stroke-width="1" stroke-dasharray="3 2"/>
    <text x="82" y="170" text-anchor="middle" fill="#be123c" font-size="11" font-weight="bold">tan(π+α) = tan α</text>
  </g>

  <text x="340" y="225" text-anchor="middle" fill="#64748b" font-size="12" font-style="italic">Hình 1.12: Quy tắc ghi nhớ vàng: "Cos đối, Sin bù, Phụ chéo, Hơn kém pi tan/cot" (SGK trang 14 - 15)</text>
</svg>
</div>'''

print("SVG definitions prepared successfully!")
