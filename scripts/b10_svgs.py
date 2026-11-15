svg_hook_b10_11 = """<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: linear-gradient(135deg, #091222 0%, #112240 100%); border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#1e40af" stop-opacity="0.1"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <marker id="arrowB10" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Lưới phối cảnh không gian 3D CAD -->
  <g stroke="#1e3a8a" stroke-width="0.8" opacity="0.4">
    <line x1="80" y1="280" x2="380" y2="280"/>
    <line x1="120" y1="240" x2="420" y2="240"/>
    <line x1="160" y1="200" x2="460" y2="200"/>
    <line x1="80" y1="280" x2="200" y2="160"/>
    <line x1="180" y1="280" x2="300" y2="160"/>
    <line x1="280" y1="280" x2="400" y2="160"/>
    <line x1="380" y1="280" x2="500" y2="160"/>
  </g>

  <!-- KHỐI 1 (Bên trái): Mô hình CAD 3D & Mặt phẳng sàn -->
  <polygon points="60,300 360,300 480,180 180,180" fill="url(#planeGrad)" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="none"/>
  <text x="75" y="290" fill="#38bdf8" font-size="14" font-weight="700" font-family="'Be Vietnam Pro', sans-serif">(P) - Mặt phẳng sàn CAD</text>

  <!-- Chiếc ghế ba chân thăng bằng hoàn hảo -->
  <circle cx="190" cy="275" r="5" fill="#f59e0b" filter="url(#glow)"/>
  <text x="175" y="295" fill="#f59e0b" font-size="13" font-weight="700">A</text>

  <circle cx="330" cy="270" r="5" fill="#f59e0b" filter="url(#glow)"/>
  <text x="340" y="285" fill="#f59e0b" font-size="13" font-weight="700">B</text>

  <circle cx="280" cy="210" r="5" fill="#f59e0b" filter="url(#glow)"/>
  <text x="290" y="205" fill="#f59e0b" font-size="13" font-weight="700">C</text>

  <!-- Tam giác tiếp xúc A-B-C trên mặt phẳng sàn (xác định duy nhất mặt phẳng) -->
  <polygon points="190,275 330,270 280,210" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3"/>

  <!-- Mặt ghế tròn trên cao -->
  <ellipse cx="265" cy="110" rx="60" ry="22" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5" filter="url(#glow)"/>
  <ellipse cx="265" cy="107" rx="58" ry="20" fill="#0284c7" fill-opacity="0.4"/>
  <text x="235" y="112" fill="#ffffff" font-size="12" font-weight="600">Mặt ghế</text>

  <!-- 3 Chân ghế vững chắc nối từ mặt ghế xuống A, B, C -->
  <line x1="225" y1="120" x2="190" y2="275" stroke="#f8fafc" stroke-width="3" stroke-linecap="round"/>
  <line x1="305" y1="118" x2="330" y2="270" stroke="#f8fafc" stroke-width="3" stroke-linecap="round"/>
  <line x1="265" y1="125" x2="280" y2="210" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="none"/>

  <rect x="70" y="25" width="370" height="42" rx="8" fill="#0f172a" fill-opacity="0.8" stroke="#38bdf8" stroke-width="1.2"/>
  <text x="85" y="50" fill="#ffd875" font-size="13" font-weight="700">Nguyên lí 3 chân: Qua 3 điểm A, B, C không thẳng hàng</text>
  <text x="85" y="62" fill="#94a3b8" font-size="11">luôn xác định DUY NHẤT một mặt phẳng &rarr; Không bao giờ bị bập bênh!</text>

  <!-- KHỐI 2 (Bên phải): Hệ trục tọa độ 3D & Mô hình hình học không gian -->
  <g transform="translate(630, 260)">
    <line x1="0" y1="0" x2="-80" y2="60" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowB10)"/>
    <text x="-95" y="75" fill="#ef4444" font-size="13" font-weight="700">Ox</text>
    <line x1="0" y1="0" x2="110" y2="0" stroke="#10b981" stroke-width="2" marker-end="url(#arrowB10)"/>
    <text x="120" y="5" fill="#10b981" font-size="13" font-weight="700">Oy</text>
    <line x1="0" y1="0" x2="0" y2="-170" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrowB10)"/>
    <text x="5" y="-175" fill="#38bdf8" font-size="13" font-weight="700">Oz</text>
    <circle cx="0" cy="0" r="4" fill="#ffffff"/>
    <text x="-15" y="-5" fill="#ffffff" font-size="12" font-weight="700">O</text>

    <!-- Nét đứt khuất -->
    <line x1="-10" y1="0" x2="70" y2="0" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="-10" y1="0" x2="-50" y2="30" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="-10" y1="0" x2="-10" y2="-90" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>

    <!-- Nét liền thấy -->
    <polygon points="-50,30 30,30 70,0 70,-90 30,-60 -50,-60" fill="#38bdf8" fill-opacity="0.08"/>
    <line x1="-50" y1="30" x2="30" y2="30" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="30" y1="30" x2="70" y2="0" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="-50" y1="30" x2="-50" y2="-60" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="30" y1="30" x2="30" y2="-60" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="70" y1="0" x2="70" y2="-90" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="-50" y1="-60" x2="30" y2="-60" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="30" y1="-60" x2="70" y2="-90" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="70" y1="-90" x2="-10" y2="-90" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="-10" y1="-90" x2="-50" y2="-60" stroke="#38bdf8" stroke-width="1.8"/>

    <text x="-40" y="-115" fill="#38bdf8" font-size="12" font-weight="700">Mô hình 3D trong CAD</text>
  </g>
</svg>"""

svg_sec1_b10 = """<svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px;">
  <!-- Hình 1.1: Mặt phẳng (P) và điểm A thuộc (P), B không thuộc (P) -->
  <g transform="translate(30, 30)">
    <polygon points="20,180 240,180 320,60 100,60" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    <text x="35" y="165" fill="#0369a1" font-size="15" font-weight="700">(P)</text>
    
    <!-- Điểm A thuộc (P) -->
    <circle cx="160" cy="120" r="5" fill="#0284c7"/>
    <text x="172" y="125" fill="#0f172a" font-size="14" font-weight="700">A</text>
    <text x="130" y="215" fill="#0369a1" font-size="13" font-weight="600">A &isin; (P)</text>

    <!-- Điểm B không thuộc (P) và đường thẳng xuyên qua -->
    <circle cx="210" cy="30" r="5" fill="#ef4444"/>
    <text x="222" y="35" fill="#ef4444" font-size="14" font-weight="700">B</text>
    <text x="180" y="240" fill="#dc2626" font-size="13" font-weight="600">B &notin; (P)</text>
    
    <!-- Đường thẳng qua B cắt (P) tại A -->
    <line x1="225" y1="3" x2="210" y2="30" stroke="#ef4444" stroke-width="1.8"/>
    <line x1="210" y1="30" x2="160" y2="120" stroke="#ef4444" stroke-width="1.8"/>
    <line x1="160" y1="120" x2="140" y2="156" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="4,4"/>
    <line x1="140" y1="156" x2="120" y2="192" stroke="#ef4444" stroke-width="1.8"/>
    
    <text x="70" y="275" fill="#475569" font-size="12" font-style="italic">Hình 4.1 &amp; 4.2: Biểu diễn (P) &amp; Quan hệ liên thuộc</text>
  </g>

  <!-- Đường phân cách -->
  <line x1="390" y1="20" x2="390" y2="290" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- Hình 1.2: Quy tắc vẽ hình không gian (Nét liền thấy - Nét đứt khuất) -->
  <g transform="translate(430, 25)">
    <!-- Hình chóp S.ABC tam giác đều -->
    <!-- Nét đứt AC bên trong -->
    <line x1="60" y1="200" x2="270" y2="180" stroke="#64748b" stroke-width="1.8" stroke-dasharray="5,4"/>
    <!-- Nét liền thấy -->
    <polygon points="160,20 60,200 150,230" fill="#38bdf8" fill-opacity="0.12"/>
    <polygon points="160,20 150,230 270,180" fill="#0284c7" fill-opacity="0.18"/>
    
    <line x1="160" y1="20" x2="60" y2="200" stroke="#0369a1" stroke-width="2"/>
    <line x1="160" y1="20" x2="150" y2="230" stroke="#0369a1" stroke-width="2"/>
    <line x1="160" y1="20" x2="270" y2="180" stroke="#0369a1" stroke-width="2"/>
    <line x1="60" y1="200" x2="150" y2="230" stroke="#0369a1" stroke-width="2"/>
    <line x1="150" y1="230" x2="270" y2="180" stroke="#0369a1" stroke-width="2"/>

    <!-- Tọa độ các điểm -->
    <circle cx="160" cy="20" r="4.5" fill="#f59e0b"/>
    <text x="155" y="10" fill="#b45309" font-size="14" font-weight="700">S</text>

    <circle cx="60" cy="200" r="4.5" fill="#0f172a"/>
    <text x="40" y="205" fill="#0f172a" font-size="14" font-weight="700">A</text>

    <circle cx="150" cy="230" r="4.5" fill="#0f172a"/>
    <text x="145" y="250" fill="#0f172a" font-size="14" font-weight="700">B</text>

    <circle cx="270" cy="180" r="4.5" fill="#0f172a"/>
    <text x="280" y="185" fill="#0f172a" font-size="14" font-weight="700">C</text>

    <!-- Nhãn quy ước nét -->
    <rect x="20" y="255" width="310" height="32" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
    <text x="30" y="275" fill="#0f172a" font-size="12" font-weight="600">&bull; Nét liền: nhìn thấy (SA, SB, SC, AB, BC)</text>
    <text x="30" y="290" fill="#dc2626" font-size="11" font-weight="600">&bull; Nét đứt: bị che khuất (AC)</text>
  </g>
</svg>"""

svg_sec2_b10 = """<svg viewBox="0 0 820 330" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
  <!-- Khối A: Tồn tại 4 điểm không đồng phẳng tạo thành Tứ diện ABCD (H.4.5) -->
  <g transform="translate(30, 20)">
    <!-- Tứ diện D.ABC -->
    <line x1="50" y1="180" x2="250" y2="160" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,4"/>
    <polygon points="140,25 50,180 130,220" fill="#fef3c7" fill-opacity="0.5"/>
    <polygon points="140,25 130,220 250,160" fill="#fde68a" fill-opacity="0.6"/>

    <line x1="140" y1="25" x2="50" y2="180" stroke="#d97706" stroke-width="2"/>
    <line x1="140" y1="25" x2="130" y2="220" stroke="#d97706" stroke-width="2"/>
    <line x1="140" y1="25" x2="250" y2="160" stroke="#d97706" stroke-width="2"/>
    <line x1="50" y1="180" x2="130" y2="220" stroke="#d97706" stroke-width="2"/>
    <line x1="130" y1="220" x2="250" y2="160" stroke="#d97706" stroke-width="2"/>

    <circle cx="140" cy="25" r="4.5" fill="#b45309"/>
    <text x="135" y="15" fill="#b45309" font-size="14" font-weight="700">D</text>

    <circle cx="50" cy="180" r="4.5" fill="#0f172a"/>
    <text x="32" y="185" fill="#0f172a" font-size="14" font-weight="700">A</text>

    <circle cx="130" cy="220" r="4.5" fill="#0f172a"/>
    <text x="125" y="240" fill="#0f172a" font-size="14" font-weight="700">B</text>

    <circle cx="250" cy="160" r="4.5" fill="#0f172a"/>
    <text x="260" y="165" fill="#0f172a" font-size="14" font-weight="700">C</text>

    <text x="40" y="270" fill="#0f172a" font-size="13" font-weight="700">Hình 4.5: Tứ diện ABCD</text>
    <text x="15" y="290" fill="#475569" font-size="11">Có đúng 4 mặt phẳng: (DAB), (DAC), (DBC), (ABC)</text>
  </g>

  <!-- Vạch ngăn cách dọc -->
  <line x1="340" y1="15" x2="340" y2="305" stroke="#e2e8f0" stroke-width="1.2"/>

  <!-- Khối B: Giao tuyến của hai mặt phẳng cắt nhau d = (P) &cap; (Q) -->
  <g transform="translate(390, 20)">
    <!-- Mặt phẳng (P) nằm ngang -->
    <polygon points="20,180 280,180 380,90 120,90" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8" fill-opacity="0.6"/>
    <text x="35" y="170" fill="#0369a1" font-size="14" font-weight="700">(P)</text>

    <!-- Mặt phẳng (Q) xiên cắt (P) theo giao tuyến d -->
    <polygon points="130,240 310,240 260,30 80,30" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8" fill-opacity="0.5"/>
    <text x="75" y="50" fill="#15803d" font-size="14" font-weight="700">(Q)</text>

    <!-- Đường giao tuyến chung d = (P) &cap; (Q) -->
    <line x1="100" y1="135" x2="330" y2="135" stroke="#dc2626" stroke-width="2.8"/>
    <text x="340" y="140" fill="#dc2626" font-size="14" font-weight="700">d = (P) &cap; (Q)</text>

    <!-- Hai điểm chung A và B trên giao tuyến -->
    <circle cx="160" cy="135" r="4.5" fill="#dc2626"/>
    <text x="155" y="125" fill="#dc2626" font-size="13" font-weight="700">A</text>

    <circle cx="260" cy="135" r="4.5" fill="#dc2626"/>
    <text x="255" y="125" fill="#dc2626" font-size="13" font-weight="700">B</text>

    <rect x="30" y="260" width="340" height="42" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
    <text x="40" y="278" fill="#0f172a" font-size="12" font-weight="700">Tính chất 5: Hai mp phân biệt có 1 điểm chung A</text>
    <text x="40" y="293" fill="#0369a1" font-size="11">&rArr; Chúng có chung đường thẳng duy nhất d đi qua A (Giao tuyến)</text>
  </g>
</svg>"""

svg_sec3_b10 = """<svg viewBox="0 0 820 280" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #fdfefe; border: 1px solid #cbd5e1; border-radius: 10px;">
  <!-- Cách 1: Qua 3 điểm không thẳng hàng -->
  <g transform="translate(15, 20)">
    <polygon points="10,170 190,170 240,70 60,70" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
    <text x="20" y="160" fill="#15803d" font-size="13" font-weight="700">(ABC)</text>
    <circle cx="70" cy="130" r="4" fill="#0f172a"/><text x="60" y="125" font-size="12" font-weight="700">A</text>
    <circle cx="150" cy="140" r="4" fill="#0f172a"/><text x="155" y="155" font-size="12" font-weight="700">B</text>
    <circle cx="130" cy="90" r="4" fill="#0f172a"/><text x="135" y="85" font-size="12" font-weight="700">C</text>
    <line x1="70" y1="130" x2="150" y2="140" stroke="#16a34a" stroke-dasharray="3,3"/>
    <line x1="150" y1="140" x2="130" y2="90" stroke="#16a34a" stroke-dasharray="3,3"/>
    <line x1="130" y1="90" x2="70" y2="130" stroke="#16a34a" stroke-dasharray="3,3"/>
    <text x="30" y="205" fill="#0f172a" font-size="13" font-weight="700">Cách 1: Ba điểm</text>
    <text x="15" y="225" fill="#475569" font-size="11">A, B, C không thẳng hàng</text>
    <text x="45" y="245" fill="#16a34a" font-size="12" font-weight="700">Kí hiệu: (ABC)</text>
  </g>

  <!-- Cách 2: Điểm A và đường thẳng d không qua A -->
  <g transform="translate(285, 20)">
    <polygon points="10,170 190,170 240,70 60,70" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
    <text x="20" y="160" fill="#1d4ed8" font-size="13" font-weight="700">mp(A, d)</text>
    <circle cx="100" cy="85" r="4.5" fill="#dc2626"/><text x="95" y="75" fill="#dc2626" font-size="13" font-weight="700">A</text>
    <line x1="40" y1="140" x2="200" y2="130" stroke="#2563eb" stroke-width="2.2"/>
    <text x="205" y="135" fill="#2563eb" font-size="13" font-weight="700">d</text>
    <circle cx="70" cy="138" r="3.5" fill="#0f172a"/>
    <circle cx="160" cy="132" r="3.5" fill="#0f172a"/>
    <text x="25" y="205" fill="#0f172a" font-size="13" font-weight="700">Cách 2: Điểm &amp; đường thẳng</text>
    <text x="25" y="225" fill="#475569" font-size="11">Điểm A &notin; đường thẳng d</text>
    <text x="45" y="245" fill="#2563eb" font-size="12" font-weight="700">Kí hiệu: mp(A, d)</text>
  </g>

  <!-- Cách 3: Hai đường thẳng cắt nhau a và b -->
  <g transform="translate(555, 20)">
    <polygon points="10,170 190,170 240,70 60,70" fill="#fefce8" stroke="#ca8a04" stroke-width="1.8"/>
    <text x="20" y="160" fill="#a16207" font-size="13" font-weight="700">mp(a, b)</text>
    <line x1="30" y1="150" x2="190" y2="85" stroke="#ca8a04" stroke-width="2.2"/>
    <text x="195" y="85" fill="#ca8a04" font-size="13" font-weight="700">a</text>
    <line x1="50" y1="85" x2="180" y2="155" stroke="#ca8a04" stroke-width="2.2"/>
    <text x="185" y="160" fill="#ca8a04" font-size="13" font-weight="700">b</text>
    <circle cx="118" cy="118" r="4.5" fill="#dc2626"/>
    <text x="115" y="140" fill="#dc2626" font-size="12" font-weight="700">M</text>
    <text x="25" y="205" fill="#0f172a" font-size="13" font-weight="700">Cách 3: Hai đường cắt nhau</text>
    <text x="35" y="225" fill="#475569" font-size="11">a &cap; b = {M}</text>
    <text x="45" y="245" fill="#ca8a04" font-size="12" font-weight="700">Kí hiệu: mp(a, b)</text>
  </g>
</svg>"""

svg_sec4_b10 = """<svg viewBox="0 0 820 340" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px;">
  <!-- Hình A: Hình chóp tứ giác S.ABCD (H.4.11) -->
  <g transform="translate(30, 20)">
    <line x1="60" y1="200" x2="220" y2="180" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,4"/>
    <line x1="150" y1="30" x2="220" y2="180" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4,4"/>

    <polygon points="150,30 60,200 120,240" fill="#0284c7" fill-opacity="0.12"/>
    <polygon points="150,30 120,240 240,230" fill="#38bdf8" fill-opacity="0.18"/>

    <line x1="150" y1="30" x2="60" y2="200" stroke="#0284c7" stroke-width="2"/>
    <line x1="150" y1="30" x2="120" y2="240" stroke="#0284c7" stroke-width="2"/>
    <line x1="150" y1="30" x2="240" y2="230" stroke="#0284c7" stroke-width="2"/>
    <line x1="60" y1="200" x2="120" y2="240" stroke="#0284c7" stroke-width="2"/>
    <line x1="120" y1="240" x2="240" y2="230" stroke="#0284c7" stroke-width="2"/>
    <line x1="240" y1="230" x2="220" y2="180" stroke="#0284c7" stroke-width="2"/>

    <circle cx="150" cy="30" r="4.5" fill="#f59e0b"/>
    <text x="145" y="18" fill="#b45309" font-size="14" font-weight="700">S (Đỉnh)</text>

    <circle cx="60" cy="200" r="4" fill="#0f172a"/><text x="42" y="205" font-size="13" font-weight="700">A</text>
    <circle cx="120" cy="240" r="4" fill="#0f172a"/><text x="115" y="260" font-size="13" font-weight="700">B</text>
    <circle cx="240" cy="230" r="4" fill="#0f172a"/><text x="248" y="238" font-size="13" font-weight="700">C</text>
    <circle cx="220" cy="180" r="4" fill="#0f172a"/><text x="230" y="180" font-size="13" font-weight="700">D</text>

    <text x="60" y="285" fill="#0f172a" font-size="13" font-weight="700">Hình 4.11: Hình chóp tứ giác S.ABCD</text>
    <text x="50" y="305" fill="#475569" font-size="11">Gồm 1 đỉnh S, 1 đáy ABCD, 4 mặt bên, 8 cạnh</text>
  </g>

  <!-- Vạch ngăn cách dọc -->
  <line x1="365" y1="15" x2="365" y2="315" stroke="#e2e8f0" stroke-width="1.2"/>

  <!-- Hình B: Tứ diện ABCD và Tìm giao điểm của BF với mp(ACD) (Ví dụ 6 SGK) -->
  <g transform="translate(420, 20)">
    <line x1="60" y1="210" x2="280" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="60" y1="210" x2="240" y2="225" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="170" y1="25" x2="240" y2="225" stroke="#16a34a" stroke-width="1.8"/>

    <line x1="170" y1="25" x2="60" y2="210" stroke="#0f172a" stroke-width="2"/>
    <line x1="170" y1="25" x2="200" y2="260" stroke="#0f172a" stroke-width="2"/>
    <line x1="170" y1="25" x2="280" y2="190" stroke="#0f172a" stroke-width="2"/>
    <line x1="60" y1="210" x2="200" y2="260" stroke="#0f172a" stroke-width="2"/>
    <line x1="200" y1="260" x2="280" y2="190" stroke="#0f172a" stroke-width="2"/>

    <circle cx="240" cy="225" r="4" fill="#16a34a"/><text x="250" y="235" fill="#16a34a" font-size="12" font-weight="700">M</text>
    
    <line x1="60" y1="210" x2="195" y2="155" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="3,3"/>
    <circle cx="195" cy="155" r="5" fill="#dc2626"/>
    <text x="208" y="155" fill="#dc2626" font-size="13" font-weight="700">N = BF &cap; (ACD)</text>

    <circle cx="170" cy="25" r="4.5" fill="#0f172a"/><text x="165" y="15" font-size="14" font-weight="700">A</text>
    <circle cx="60" cy="210" r="4.5" fill="#0f172a"/><text x="42" y="215" font-size="14" font-weight="700">B</text>
    <circle cx="200" cy="260" r="4.5" fill="#0f172a"/><text x="205" y="278" font-size="14" font-weight="700">C</text>
    <circle cx="280" cy="190" r="4.5" fill="#0f172a"/><text x="290" y="195" font-size="14" font-weight="700">D</text>

    <rect x="25" y="285" width="340" height="36" rx="6" fill="#fef2f2" stroke="#fecaca"/>
    <text x="35" y="302" fill="#991b1b" font-size="12" font-weight="700">&bull; Thuật toán tìm giao điểm d &cap; (P):</text>
    <text x="35" y="315" fill="#7f1d1d" font-size="11">Tìm mặt phẳng phụ (ABM) chứa d, rồi tìm giao điểm N = d &cap; AM.</text>
  </g>
</svg>"""

