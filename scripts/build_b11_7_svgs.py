# -*- coding: utf-8 -*-
"""
Tạo 5 đồ họa vector SVG Toán học siêu nét cho Bài 7 Lớp 11: Cấp số nhân
Bộ sách Kết nối tri thức với cuộc sống - ThS. Lương Thanh Sáng
"""

# 1. SVG_HOOK: Bài toán tiền lương chuyên gia CNTT (khởi điểm 240tr, tăng 5%/năm sau 10 năm)
SVG_HOOK = """<svg viewBox="0 0 760 250" style="max-width:100%; height:auto; background:#0f172a; border-radius:12px; border:1.5px solid #334155; box-shadow:0 6px 20px rgba(0,0,0,0.3);">
  <defs>
    <linearGradient id="glowSalary" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="barCSN" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
  </defs>

  <!-- TIÊU ĐỀ BÀI TOÁN KHỞI NGHIỆP CNTT -->
  <text x="380" y="26" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">BÀI TOÁN MỞ ĐẦU: HỢP ĐỒNG LƯƠNG CỦA KỸ SƯ CÔNG NGHỆ THÔNG TIN (SGK TRANG 51)</text>

  <!-- TRỤC TỌA ĐỘ -->
  <line x1="60" y1="200" x2="480" y2="200" stroke="#475569" stroke-width="2"/>
  <line x1="60" y1="200" x2="60" y2="50" stroke="#475569" stroke-width="2"/>
  <text x="50" y="48" font-family="sans-serif" font-size="10" font-weight="bold" fill="#94a3b8" text-anchor="end">Triệu đ</text>
  <text x="485" y="204" font-family="sans-serif" font-size="11" font-weight="bold" fill="#94a3b8">Năm</text>

  <!-- ĐƯỜNG CONG TĂNG TRƯỞNG MŨ CỦA LƯƠNG -->
  <path d="M 85 155 Q 260 135 450 85" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4"/>

  <!-- CÁC CỘT LƯƠNG ĐẠI DIỆN -->
  <!-- Năm 1: 240 tr -->
  <rect x="75" y="155" width="22" height="45" rx="3" fill="#0284c7"/>
  <text x="86" y="148" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">240</text>
  <text x="86" y="215" font-family="sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Năm 1</text>

  <!-- Năm 2: 252 tr -->
  <rect x="115" y="152" width="22" height="48" rx="3" fill="#0284c7"/>
  <text x="126" y="145" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">252</text>
  <text x="126" y="215" font-family="sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">2</text>

  <!-- Năm 3: 264.6 tr -->
  <rect x="155" y="149" width="22" height="51" rx="3" fill="#0284c7"/>
  <text x="166" y="142" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">264.6</text>
  <text x="166" y="215" font-family="sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">3</text>

  <!-- Năm 4: 277.8 tr -->
  <rect x="195" y="145" width="22" height="55" rx="3" fill="#0284c7"/>
  <text x="206" y="138" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">277.8</text>
  <text x="206" y="215" font-family="sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">4</text>

  <!-- Năm 5: 291.7 tr -->
  <rect x="235" y="141" width="22" height="59" rx="3" fill="#0284c7"/>
  <text x="246" y="134" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">291.7</text>
  <text x="246" y="215" font-family="sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">5</text>

  <!-- Chấm lửng -->
  <text x="290" y="170" font-family="sans-serif" font-size="16" font-weight="bold" fill="#94a3b8">. . .</text>

  <!-- Năm 10: 372.3 tr -->
  <rect x="438" y="85" width="25" height="115" rx="3" fill="url(#barCSN)"/>
  <text x="450" y="78" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#fbbf24" text-anchor="middle">372.3 tr</text>
  <text x="450" y="215" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#fbbf24" text-anchor="middle">Năm 10</text>

  <!-- MŨI TÊN NHÂN CÔNG BỘI -->
  <path d="M 86 135 Q 106 120 126 135" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="106" y="120" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#fbbf24" text-anchor="middle">×1,05</text>

  <!-- HỘP THỐNG KÊ QUY LUẬT CẤP SỐ NHÂN -->
  <rect x="500" y="55" width="235" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="617" y="78" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#38bdf8" text-anchor="middle">QUY LUẬT CẤP SỐ NHÂN</text>
  <text x="515" y="100" font-family="sans-serif" font-size="10.5" fill="#e2e8f0">• Năm đầu: u₁ = 240 triệu</text>
  <text x="515" y="118" font-family="sans-serif" font-size="10.5" fill="#e2e8f0">• Tăng 5%/năm ⇒ q = 1 + 0,05 = 1,05</text>
  <text x="515" y="136" font-family="sans-serif" font-size="10.5" fill="#e2e8f0">• Lương năm 10: u₁₀ = u₁·q⁹</text>
  <text x="515" y="154" font-family="sans-serif" font-size="11" font-weight="bold" fill="#fbbf24">  = 240·(1,05)⁹ ≈ 372,32 tr</text>
  <line x1="515" y1="164" x2="720" y2="164" stroke="#475569"/>
  <text x="515" y="185" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#34d399">⇒ Tổng 10 năm: S₁₀ ≈ 3.021,35 tr!</text>
</svg>"""

# 2. SVG_COMMON_RATIO: Trục số thể hiện bước nhân công bội q
SVG_COMMON_RATIO = """<svg viewBox="0 0 760 160" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <marker id="arrowCSN" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706"/>
    </marker>
    <marker id="axisArrowCSN" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
  </defs>

  <!-- TRỤC SỐ NẰM NGANG -->
  <line x1="50" y1="105" x2="710" y2="105" stroke="#334155" stroke-width="2.5" marker-end="url(#axisArrowCSN)"/>
  <text x="715" y="110" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155">n</text>

  <!-- CÁC ĐIỂM SỐ HẠNG u1, u2, u3, u4, un -->
  <!-- u1 -->
  <circle cx="120" cy="105" r="6" fill="#2563eb"/>
  <text x="120" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₁</text>
  <text x="120" y="146" font-family="sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">(Số hạng đầu)</text>

  <!-- Cung nhân u1 -> u2 -->
  <path d="M 125 95 Q 185 45 245 95" fill="none" stroke="#d97706" stroke-width="2.5" marker-end="url(#arrowCSN)"/>
  <rect x="165" y="45" width="40" height="20" rx="4" fill="#fef3c7" stroke="#d97706"/>
  <text x="185" y="59" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d97706" text-anchor="middle">× q</text>

  <!-- u2 -->
  <circle cx="250" cy="105" r="6" fill="#2563eb"/>
  <text x="250" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₂</text>
  <text x="250" y="146" font-family="sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">u₁ · q</text>

  <!-- Cung nhân u2 -> u3 -->
  <path d="M 255 95 Q 315 45 375 95" fill="none" stroke="#d97706" stroke-width="2.5" marker-end="url(#arrowCSN)"/>
  <rect x="295" y="45" width="40" height="20" rx="4" fill="#fef3c7" stroke="#d97706"/>
  <text x="315" y="59" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d97706" text-anchor="middle">× q</text>

  <!-- u3 -->
  <circle cx="380" cy="105" r="6" fill="#2563eb"/>
  <text x="380" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₃</text>
  <text x="380" y="146" font-family="sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">u₁ · q²</text>

  <!-- Cung nhân u3 -> u4 -->
  <path d="M 385 95 Q 445 45 505 95" fill="none" stroke="#d97706" stroke-width="2.5" marker-end="url(#arrowCSN)"/>
  <rect x="425" y="45" width="40" height="20" rx="4" fill="#fef3c7" stroke="#d97706"/>
  <text x="445" y="59" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d97706" text-anchor="middle">× q</text>

  <!-- u4 -->
  <circle cx="510" cy="105" r="6" fill="#2563eb"/>
  <text x="510" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₄</text>
  <text x="510" y="146" font-family="sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">u₁ · q³</text>

  <!-- Cung nhảy u4 -> ... -> un -->
  <path d="M 515 95 Q 575 45 635 95" fill="none" stroke="#d97706" stroke-width="2.5" stroke-dasharray="5,4" marker-end="url(#arrowCSN)"/>
  <rect x="555" y="45" width="40" height="20" rx="4" fill="#fef3c7" stroke="#d97706"/>
  <text x="575" y="59" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d97706" text-anchor="middle">× q</text>

  <!-- un -->
  <circle cx="640" cy="105" r="6" fill="#059669"/>
  <text x="640" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#059669" text-anchor="middle">uₙ</text>
  <text x="640" y="146" font-family="sans-serif" font-size="10.5" fill="#059669" text-anchor="middle">u₁ · qⁿ⁻¹</text>

  <!-- TIÊU ĐỀ HỘP -->
  <rect x="210" y="10" width="340" height="26" rx="6" fill="#f8fafc" stroke="#94a3b8"/>
  <text x="380" y="27" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a" text-anchor="middle">QUY LUẬT BƯỚC NHÂN CÔNG BỘI: uₙ = uₙ₋₁ · q (n ≥ 2)</text>
</svg>"""

# 3. SVG_EXPONENTIAL_GROWTH: Sơ đồ lũy thừa bậc thang nhân số hạng tổng quát un
SVG_EXPONENTIAL_GROWTH = """<svg viewBox="0 0 760 210" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <linearGradient id="geomGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  </defs>

  <!-- BẬC THANG TĂNG TRƯỞNG MŨ CỦA SỐ HẠNG -->
  <!-- Bậc 1: u1 -->
  <rect x="70" y="150" width="75" height="30" rx="4" fill="#e2e8f0" stroke="#94a3b8"/>
  <text x="107" y="170" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₁</text>

  <!-- Bậc 2: u2 = u1 * q -->
  <rect x="165" y="130" width="75" height="50" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="202" y="152" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">u₂</text>
  <text x="202" y="170" font-family="sans-serif" font-size="10" fill="#92400e" text-anchor="middle">u₁ · q¹</text>

  <!-- Bậc 3: u3 = u1 * q^2 -->
  <rect x="260" y="105" width="75" height="75" rx="4" fill="#fde68a" stroke="#d97706"/>
  <text x="297" y="132" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">u₃</text>
  <text x="297" y="152" font-family="sans-serif" font-size="10" fill="#78350f" text-anchor="middle">u₁ · q²</text>

  <!-- Bậc 4: u4 = u1 * q^3 -->
  <rect x="355" y="75" width="75" height="105" rx="4" fill="#fcd34d" stroke="#b45309"/>
  <text x="392" y="112" font-family="sans-serif" font-size="12" font-weight="bold" fill="#78350f" text-anchor="middle">u₄</text>
  <text x="392" y="132" font-family="sans-serif" font-size="10" fill="#451a03" text-anchor="middle">u₁ · q³</text>

  <!-- Dấu chấm lửng -->
  <text x="460" y="125" font-family="sans-serif" font-size="20" font-weight="bold" fill="#64748b">. . .</text>

  <!-- Bậc thứ n: un = u1 * q^(n-1) -->
  <rect x="510" y="30" width="160" height="150" rx="6" fill="url(#geomGrad)" stroke="#92400e" stroke-width="2"/>
  <text x="590" y="75" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">uₙ</text>
  <text x="590" y="108" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fef08a" text-anchor="middle">u₁ · qⁿ⁻¹</text>
  <text x="590" y="135" font-family="sans-serif" font-size="10.5" fill="#fef3c7" text-anchor="middle">(Số hạng tổng quát)</text>
  <text x="590" y="155" font-family="sans-serif" font-size="9.5" fill="#ffffff" opacity="0.9" text-anchor="middle">Số mũ của q luôn bằng (n - 1)</text>

  <!-- MŨI TÊN NHẢY (n-1) LẦN NHÂN CÔNG BỘI q -->
  <path d="M 107 140 Q 340 -15 580 20" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
  <rect x="260" y="8" width="220" height="24" rx="4" fill="#eff6ff" stroke="#2563eb"/>
  <text x="370" y="24" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Nhân liên tiếp (n - 1) lần công bội q ⇒ qⁿ⁻¹</text>

  <!-- ĐƯỜNG ĐÁY MẶT ĐẤT -->
  <line x1="50" y1="180" x2="710" y2="180" stroke="#334155" stroke-width="3"/>
</svg>"""

# 4. SVG_GEOMETRIC_SUM: Minh họa rút gọn sai phân đại số tính tổng Sn
SVG_GEOMETRIC_SUM = """<svg viewBox="0 0 760 210" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <linearGradient id="diffGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="diffGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#b45309"/>
    </linearGradient>
  </defs>

  <!-- TIÊU ĐỀ KỸ THUẬT SAI PHÂN -->
  <rect x="160" y="10" width="440" height="26" rx="6" fill="#eff6ff" stroke="#2563eb"/>
  <text x="380" y="27" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#1e40af" text-anchor="middle">KỸ THUẬT TRIỆT TIÊU SAI PHÂN (TELESCOPING) TÍNH TỔNG Sₙ</text>

  <!-- DÒNG 1: Sn = u1 + u1*q + u1*q^2 + ... + u1*q^(n-1) -->
  <rect x="60" y="48" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="80" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb">Sₙ  =</text>
  <rect x="130" y="52" width="55" height="26" rx="4" fill="#dbeafe" stroke="#2563eb"/>
  <text x="157" y="69" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#1e40af" text-anchor="middle">u₁</text>
  <text x="200" y="70" font-family="sans-serif" font-size="12" fill="#64748b">+</text>

  <!-- Phần bị triệt tiêu dòng 1 -->
  <rect x="220" y="52" width="460" height="26" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-dasharray="4,2"/>
  <text x="450" y="69" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">[ u₁·q + u₁·q² + ... + u₁·qⁿ⁻¹ ] (Khối triệt tiêu)</text>

  <!-- DÒNG 2: q*Sn = u1*q + u1*q^2 + ... + u1*q^(n-1) + u1*q^n -->
  <rect x="60" y="92" width="640" height="34" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="80" y="114" font-family="sans-serif" font-size="12" font-weight="bold" fill="#d97706">q·Sₙ =</text>

  <!-- Phần bị triệt tiêu dòng 2 (thụt vào 1 vị trí) -->
  <rect x="180" y="96" width="460" height="26" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-dasharray="4,2"/>
  <text x="410" y="113" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">[ u₁·q + u₁·q² + ... + u₁·qⁿ⁻¹ ] (Khối triệt tiêu)</text>
  <text x="650" y="114" font-family="sans-serif" font-size="12" fill="#64748b">+</text>
  <rect x="665" y="96" width="65" height="26" rx="4" fill="#fef3c7" stroke="#d97706"/>
  <text x="697" y="113" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#b45309" text-anchor="middle">u₁·qⁿ</text>

  <!-- DÒNG TRỪ HAI VẾ: Sn - qSn = u1 - u1*q^n -->
  <line x1="60" y1="136" x2="700" y2="136" stroke="#ef4444" stroke-width="2"/>
  <text x="715" y="140" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ef4444">−</text>

  <!-- HỘP KẾT QUẢ ĐẸP MẮT -->
  <rect x="60" y="148" width="640" height="50" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="80" y="178" font-family="sans-serif" font-size="13" font-weight="bold" fill="#047857">Sₙ(1 − q) = u₁ − u₁·qⁿ = u₁(1 − qⁿ)</text>
  <line x1="390" y1="154" x2="390" y2="192" stroke="#a7f3d0"/>
  <text x="410" y="178" font-family="sans-serif" font-size="14" font-weight="bold" fill="#2563eb">⇒ Sₙ = [ u₁(1 − qⁿ) ] / (1 − q)</text>
  <text x="640" y="178" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">(với q ≠ 1)</text>
</svg>"""

# 5. SVG_CHESSBOARD_RICE: Bàn cờ vua và câu chuyện hạt thóc huyền thoại
SVG_CHESSBOARD_RICE = """<svg viewBox="0 0 760 250" style="max-width:100%; height:auto; background:#1e293b; border-radius:12px; border:1.5px solid #475569; box-shadow:0 6px 20px rgba(0,0,0,0.3);">
  <defs>
    <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <radialGradient id="riceGrain" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fffbeb"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </radialGradient>
  </defs>

  <!-- TIÊU ĐỀ TRUYỀN CẢM HỨNG -->
  <text x="380" y="24" font-family="sans-serif" font-size="12.5" font-weight="bold" fill="#fbbf24" text-anchor="middle">SỰ BÙNG NỔ CỦA CẤP SỐ NHÂN: BÀN CỜ VUA VÀ PHẦN THƯỞNG HẠT THÓC</text>

  <!-- BÀN CỜ VUA THU NHỎ (GÓC TRÁI) -->
  <rect x="40" y="40" width="180" height="180" rx="6" fill="#334155" stroke="#94a3b8" stroke-width="2"/>

  <!-- Lưới 4x4 đại diện minh họa ô bàn cờ -->
  <!-- Hàng 1 -->
  <rect x="46" y="46" width="41" height="41" fill="#f8fafc"/>
  <rect x="87" y="46" width="41" height="41" fill="#475569"/>
  <rect x="128" y="46" width="41" height="41" fill="#f8fafc"/>
  <rect x="169" y="46" width="41" height="41" fill="#475569"/>

  <!-- Hàng 2 -->
  <rect x="46" y="87" width="41" height="41" fill="#475569"/>
  <rect x="87" y="87" width="41" height="41" fill="#f8fafc"/>
  <rect x="128" y="87" width="41" height="41" fill="#475569"/>
  <rect x="169" y="87" width="41" height="41" fill="#f8fafc"/>

  <!-- Hàng 3 -->
  <rect x="46" y="128" width="41" height="41" fill="#f8fafc"/>
  <rect x="87" y="128" width="41" height="41" fill="#475569"/>
  <rect x="128" y="128" width="41" height="41" fill="#f8fafc"/>
  <rect x="169" y="128" width="41" height="41" fill="#475569"/>

  <!-- Hàng 4 -->
  <rect x="46" y="169" width="41" height="41" fill="#475569"/>
  <rect x="87" y="169" width="41" height="41" fill="#f8fafc"/>
  <rect x="128" y="169" width="41" height="41" fill="#475569"/>
  <rect x="169" y="169" width="41" height="41" fill="#f8fafc"/>

  <!-- HẠT THÓC TRÊN CÁC Ô ĐẦU TIÊN -->
  <!-- Ô 1: 1 hạt -->
  <ellipse cx="66" cy="66" rx="4" ry="7" fill="url(#riceGrain)" transform="rotate(30 66 66)"/>
  <text x="66" y="82" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#0f172a" text-anchor="middle">1 (2⁰)</text>

  <!-- Ô 2: 2 hạt -->
  <ellipse cx="103" cy="64" rx="3.5" ry="6" fill="url(#riceGrain)" transform="rotate(-20 103 64)"/>
  <ellipse cx="111" cy="68" rx="3.5" ry="6" fill="url(#riceGrain)" transform="rotate(40 111 68)"/>
  <text x="107" y="82" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#ffffff" text-anchor="middle">2 (2¹)</text>

  <!-- Ô 3: 4 hạt -->
  <ellipse cx="143" cy="62" rx="3" ry="5.5" fill="url(#riceGrain)"/>
  <ellipse cx="152" cy="63" rx="3" ry="5.5" fill="url(#riceGrain)"/>
  <ellipse cx="144" cy="72" rx="3" ry="5.5" fill="url(#riceGrain)"/>
  <ellipse cx="153" cy="71" rx="3" ry="5.5" fill="url(#riceGrain)"/>
  <text x="148" y="83" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#0f172a" text-anchor="middle">4 (2²)</text>

  <!-- Ô 4: 8 hạt -->
  <text x="189" y="67" font-family="sans-serif" font-size="10" font-weight="bold" fill="#fbbf24" text-anchor="middle">8 (2³)</text>
  <text x="189" y="80" font-family="sans-serif" font-size="8" fill="#e2e8f0" text-anchor="middle">hạt...</text>

  <!-- Ô 64 ở góc xa -->
  <rect x="169" y="169" width="41" height="41" fill="#7c2d12"/>
  <text x="189" y="186" font-family="sans-serif" font-size="9" font-weight="bold" fill="#fbbf24" text-anchor="middle">Ô 64:</text>
  <text x="189" y="200" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#fef08a" text-anchor="middle">2⁶³</text>

  <!-- MŨI TÊN KẾT NỐI TĂNG TRƯỞNG MŨ -->
  <path d="M 230 130 C 270 130 270 60 300 60" fill="none" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arrowCSN)"/>

  <!-- KHỐI DIỄN GIẢI KINH ĐIỂN BÊN PHẢI -->
  <rect x="290" y="40" width="430" height="180" rx="8" fill="#0f172a" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="310" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">• Ô thứ nhất: u₁ = 1 hạt thóc</text>
  <text x="310" y="87" font-family="sans-serif" font-size="12" font-weight="bold" fill="#38bdf8">• Công bội: q = 2 (ô sau gấp đôi ô trước)</text>
  <text x="310" y="109" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fef08a">• Ô thứ 64: u₆₄ = 2⁶³ ≈ 9,22 · 10¹⁸ hạt thóc</text>

  <line x1="310" y1="120" x2="700" y2="120" stroke="#334155"/>

  <!-- TỔNG SỐ HẠT THÓC TOÀN BỘ 64 Ô -->
  <text x="310" y="142" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#f8fafc">TỔNG TOÀN BỘ 64 Ô CỜ (CÔNG THỨC Sₙ):</text>
  <text x="310" y="167" font-family="sans-serif" font-size="15" font-weight="bold" fill="url(#goldGlow)">S₆₄ = 2⁶⁴ − 1 ≈ 18.446.744.073.709.551.615</text>
  <text x="310" y="190" font-family="sans-serif" font-size="11" font-weight="bold" fill="#34d399">≈ 18,4 TỶ TỶ HẠT THÓC (khoảng 369 tỷ tấn gạo)</text>
  <text x="310" y="208" font-family="sans-serif" font-size="10" fill="#94a3b8">Bằng tổng sản lượng lúa của cả nhân loại trong hơn 500 năm!</text>
</svg>"""

if __name__ == "__main__":
    print("5 SVG graphics for Lesson 7 defined successfully!")
