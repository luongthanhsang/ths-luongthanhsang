# -*- coding: utf-8 -*-
"""
Tạo 5 đồ họa vector SVG Toán học siêu nét cho Bài 6 Lớp 11: Cấp số cộng
Bộ sách Kết nối tri thức với cuộc sống - ThS. Lương Thanh Sáng
"""

# 1. SVG_HOOK: Bài toán hàng ghế nhà hát (25 hàng ghế, hàng đầu 16 ghế, mỗi hàng thêm 2 ghế)
SVG_HOOK = """<svg viewBox="0 0 760 250" style="max-width:100%; height:auto; background:#0f172a; border-radius:12px; border:1.5px solid #334155; box-shadow:0 6px 20px rgba(0,0,0,0.3);">
  <defs>
    <linearGradient id="stageGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.1"/>
    </linearGradient>
    <linearGradient id="seatGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </linearGradient>
  </defs>

  <!-- SÂN KHẤU TRUNG TÂM -->
  <path d="M 280 30 Q 380 45 480 30 L 460 15 Q 380 25 300 15 Z" fill="url(#stageGlow)" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="380" y="27" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">SÂN KHẤU NHÀ HÁT</text>

  <!-- CÁC CUNG HÀNG GHẾ XẾP NAN QUẠT -->
  <!-- Hàng 1: 16 ghế -->
  <path d="M 290 65 Q 380 85 470 65" fill="none" stroke="#e2e8f0" stroke-width="3" stroke-dasharray="6,4"/>
  <circle cx="290" cy="65" r="4" fill="#38bdf8"/>
  <circle cx="470" cy="65" r="4" fill="#38bdf8"/>
  <text x="495" y="69" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">Hàng 1: u₁ = 16 ghế</text>

  <!-- Hàng 2: 18 ghế -->
  <path d="M 260 95 Q 380 120 500 95" fill="none" stroke="#94a3b8" stroke-width="3" stroke-dasharray="6,4"/>
  <circle cx="260" cy="95" r="4" fill="#94a3b8"/>
  <circle cx="500" cy="95" r="4" fill="#94a3b8"/>
  <text x="525" y="99" font-family="sans-serif" font-size="11" font-weight="bold" fill="#94a3b8">Hàng 2: u₂ = 18 ghế (+2)</text>

  <!-- Hàng 3: 20 ghế -->
  <path d="M 230 125 Q 380 155 530 125" fill="none" stroke="#94a3b8" stroke-width="3" stroke-dasharray="6,4"/>
  <circle cx="230" cy="125" r="4" fill="#94a3b8"/>
  <circle cx="530" cy="125" r="4" fill="#94a3b8"/>
  <text x="555" y="129" font-family="sans-serif" font-size="11" font-weight="bold" fill="#94a3b8">Hàng 3: u₃ = 20 ghế (+2)</text>

  <!-- Dấu chấm lửng -->
  <text x="380" y="160" font-family="sans-serif" font-size="18" font-weight="bold" fill="#fbbf24" text-anchor="middle">. . . . . . . . . . . . . . .</text>

  <!-- Hàng 25: 64 ghế -->
  <path d="M 160 190 Q 380 235 600 190" fill="none" stroke="url(#seatGrad)" stroke-width="4"/>
  <circle cx="160" cy="190" r="5" fill="#f59e0b"/>
  <circle cx="600" cy="190" r="5" fill="#f59e0b"/>
  <text x="625" y="195" font-family="sans-serif" font-size="11" font-weight="bold" fill="#fbbf24">Hàng 25: u₂₅ = 64 ghế</text>

  <!-- HỘP THỐNG KÊ KẾT QUẢ TỔNG -->
  <rect x="30" y="70" width="200" height="95" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="130" y="92" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">QUY LUẬT CẤP SỐ CỘNG</text>
  <text x="45" y="112" font-family="sans-serif" font-size="10.5" fill="#e2e8f0">• Số hàng ghế: n = 25</text>
  <text x="45" y="130" font-family="sans-serif" font-size="10.5" fill="#e2e8f0">• Hàng đầu: u₁ = 16, d = 2</text>
  <text x="45" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#fbbf24">⇒ Tổng: S₂₅ = 1.000 ghế!</text>
</svg>"""

# 2. SVG_COMMON_DIFF: Trục số thể hiện bước nhảy công sai d
SVG_COMMON_DIFF = """<svg viewBox="0 0 760 160" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <marker id="arrowB6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
    </marker>
    <marker id="axisArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
  </defs>

  <!-- TRỤC SỐ NẰM NGANG -->
  <line x1="50" y1="105" x2="710" y2="105" stroke="#334155" stroke-width="2.5" marker-end="url(#axisArrow)"/>
  <text x="715" y="110" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155">n</text>

  <!-- CÁC ĐIỂM SỐ HẠNG u1, u2, u3, u4, u5 -->
  <!-- u1 -->
  <circle cx="120" cy="105" r="6" fill="#2563eb"/>
  <text x="120" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₁</text>
  <text x="120" y="146" font-family="sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">(Số hạng đầu)</text>

  <!-- Cung nhảy u1 -> u2 -->
  <path d="M 125 95 Q 185 45 245 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrowB6)"/>
  <rect x="165" y="45" width="40" height="20" rx="4" fill="#eff6ff" stroke="#2563eb"/>
  <text x="185" y="59" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">+d</text>

  <!-- u2 -->
  <circle cx="250" cy="105" r="6" fill="#2563eb"/>
  <text x="250" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₂</text>
  <text x="250" y="146" font-family="sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">u₁ + d</text>

  <!-- Cung nhảy u2 -> u3 -->
  <path d="M 255 95 Q 315 45 375 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrowB6)"/>
  <rect x="295" y="45" width="40" height="20" rx="4" fill="#eff6ff" stroke="#2563eb"/>
  <text x="315" y="59" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">+d</text>

  <!-- u3 -->
  <circle cx="380" cy="105" r="6" fill="#2563eb"/>
  <text x="380" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₃</text>
  <text x="380" y="146" font-family="sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">u₁ + 2d</text>

  <!-- Cung nhảy u3 -> u4 -->
  <path d="M 385 95 Q 445 45 505 95" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrowB6)"/>
  <rect x="425" y="45" width="40" height="20" rx="4" fill="#eff6ff" stroke="#2563eb"/>
  <text x="445" y="59" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">+d</text>

  <!-- u4 -->
  <circle cx="510" cy="105" r="6" fill="#2563eb"/>
  <text x="510" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">u₄</text>
  <text x="510" y="146" font-family="sans-serif" font-size="10.5" fill="#64748b" text-anchor="middle">u₁ + 3d</text>

  <!-- Cung nhảy u4 -> ... -->
  <path d="M 515 95 Q 575 45 635 95" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5,4" marker-end="url(#arrowB6)"/>
  <rect x="555" y="45" width="40" height="20" rx="4" fill="#eff6ff" stroke="#2563eb"/>
  <text x="575" y="59" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">+d</text>

  <!-- un -->
  <circle cx="640" cy="105" r="6" fill="#059669"/>
  <text x="640" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#059669" text-anchor="middle">uₙ</text>
  <text x="640" y="146" font-family="sans-serif" font-size="10.5" fill="#059669" text-anchor="middle">u₁ + (n-1)d</text>

  <!-- TIÊU ĐỀ HỘP -->
  <rect x="230" y="10" width="300" height="26" rx="6" fill="#f8fafc" stroke="#94a3b8"/>
  <text x="380" y="27" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#0f172a" text-anchor="middle">QUY LUẬT BƯỚC NHẢY CÔNG SAI: uₙ₊₁ = uₙ + d</text>
</svg>"""

# 3. SVG_STEP_LADDER: Sơ đồ bậc thang số hạng tổng quát un
SVG_STEP_LADDER = """<svg viewBox="0 0 760 210" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <linearGradient id="stepGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
  </defs>

  <!-- BẬC THANG ĐỘ CAO SỐ HẠNG -->
  <!-- Bậc 1: u1 -->
  <rect x="80" y="140" width="80" height="40" rx="4" fill="#e2e8f0" stroke="#94a3b8"/>
  <text x="120" y="165" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">u₁</text>

  <!-- Bậc 2: u2 = u1 + d -->
  <rect x="180" y="115" width="80" height="65" rx="4" fill="#dbeafe" stroke="#3b82f6"/>
  <text x="220" y="145" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">u₂</text>
  <text x="220" y="165" font-family="sans-serif" font-size="10.5" fill="#2563eb" text-anchor="middle">u₁ + d</text>

  <!-- Bậc 3: u3 = u1 + 2d -->
  <rect x="280" y="90" width="80" height="90" rx="4" fill="#bfdbfe" stroke="#2563eb"/>
  <text x="320" y="130" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">u₃</text>
  <text x="320" y="150" font-family="sans-serif" font-size="10.5" fill="#1d4ed8" text-anchor="middle">u₁ + 2d</text>

  <!-- Bậc 4: u4 = u1 + 3d -->
  <rect x="380" y="65" width="80" height="115" rx="4" fill="#93c5fd" stroke="#1d4ed8"/>
  <text x="420" y="115" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">u₄</text>
  <text x="420" y="135" font-family="sans-serif" font-size="10.5" fill="#1e40af" text-anchor="middle">u₁ + 3d</text>

  <!-- Dấu chấm lửng chuyển bậc -->
  <text x="490" y="125" font-family="sans-serif" font-size="20" font-weight="bold" fill="#64748b">. . .</text>

  <!-- Bậc thứ n: un = u1 + (n-1)d -->
  <rect x="540" y="35" width="130" height="145" rx="6" fill="url(#stepGrad)" stroke="#1e3a8a" stroke-width="2"/>
  <text x="605" y="85" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">uₙ</text>
  <text x="605" y="115" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fef08a" text-anchor="middle">u₁ + (n - 1)d</text>
  <text x="605" y="140" font-family="sans-serif" font-size="10" fill="#e0f2fe" text-anchor="middle">(Số hạng tổng quát)</text>

  <!-- MŨI TÊN NHẢY TỔNG (n - 1) BƯỚC CÔNG SAI -->
  <path d="M 120 130 Q 360 -10 595 25" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4"/>
  <rect x="300" y="10" width="160" height="24" rx="4" fill="#fee2e2" stroke="#dc2626"/>
  <text x="380" y="26" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">Nhảy (n - 1) lần công sai d</text>

  <!-- ĐƯỜNG ĐÁY MẶT ĐẤT -->
  <line x1="50" y1="180" x2="710" y2="180" stroke="#334155" stroke-width="3"/>
</svg>"""

# 4. SVG_GAUSS_PAIRING: Phương pháp chứng minh hình học tính tổng Gauss Sn
SVG_GAUSS_PAIRING = """<svg viewBox="0 0 760 210" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <linearGradient id="blueTrap" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="amberTrap" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  </defs>

  <!-- TIÊU ĐỀ TRỰC QUAN -->
  <rect x="180" y="12" width="400" height="28" rx="6" fill="#eff6ff" stroke="#2563eb"/>
  <text x="380" y="31" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">Ý TƯỞNG GAUSS: GHÉP ĐỐI XỨNG HAI HÌNH THANG RỜI RẠC</text>

  <!-- KHỐI 1: TỔNG THUẬN Sn (Màu xanh) -->
  <polygon points="120,165 420,165 420,65 120,125" fill="url(#blueTrap)" opacity="0.85"/>
  <text x="145" y="150" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">u₁</text>
  <text x="390" y="120" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">uₙ</text>
  <text x="270" y="145" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Sₙ (Thuận)</text>

  <!-- KHỐI 2: TỔNG NGHỊCH Sn (Màu cam ghép khít thành hình chữ nhật) -->
  <polygon points="120,125 420,65 420,25 120,25" fill="none"/>
  <!-- Ghép úp ngược -->
  <polygon points="120,125 420,65 420,25 120,25" fill="url(#amberTrap)" opacity="0.85"/>
  <text x="145" y="55" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">uₙ</text>
  <text x="390" y="45" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">u₁</text>
  <text x="270" y="50" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Sₙ (Nghịch)</text>

  <!-- KÍCH THƯỚC HÌNH CHỮ NHẬT TOÀN THỂ -->
  <!-- Chiều cao: u1 + un -->
  <line x1="100" y1="25" x2="100" y2="165" stroke="#dc2626" stroke-width="2"/>
  <line x1="95" y1="25" x2="105" y2="25" stroke="#dc2626" stroke-width="2"/>
  <line x1="95" y1="165" x2="105" y2="165" stroke="#dc2626" stroke-width="2"/>
  <text x="85" y="100" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="end">u₁ + uₙ</text>

  <!-- Chiều rộng: n số hạng -->
  <line x1="120" y1="180" x2="420" y2="180" stroke="#059669" stroke-width="2"/>
  <line x1="120" y1="175" x2="120" y2="185" stroke="#059669" stroke-width="2"/>
  <line x1="420" y1="175" x2="420" y2="185" stroke="#059669" stroke-width="2"/>
  <text x="270" y="198" font-family="sans-serif" font-size="12" font-weight="bold" fill="#059669" text-anchor="middle">n số hạng</text>

  <!-- HỘP KẾT LUẬN CÔNG THỨC BÊN PHẢI -->
  <rect x="460" y="50" width="260" height="130" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="475" y="78" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">• Diện tích HCN = 2 · Sₙ</text>
  <text x="475" y="105" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">2 · Sₙ = n · (u₁ + uₙ)</text>
  <line x1="475" y1="118" x2="700" y2="118" stroke="#cbd5e1"/>
  <text x="475" y="142" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2563eb">⇒ Sₙ = n(u₁ + uₙ) / 2</text>
  <text x="475" y="165" font-family="sans-serif" font-size="12" font-weight="bold" fill="#059669">= n[2u₁ + (n-1)d] / 2</text>
</svg>"""

# 5. SVG_SALARY_GROWTH: Bài toán tiền lương anh Nam (khởi điểm 100tr, tăng 20tr/năm sau 10 năm)
SVG_SALARY_GROWTH = """<svg viewBox="0 0 760 210" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#059669"/>
    </linearGradient>
  </defs>

  <text x="380" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">MÔ HÌNH TIỀN LƯƠNG TÍCH LŨY 10 NĂM CỦA ANH NAM (SGK TRANG 50)</text>

  <!-- TRỤC NẰM NGANG VÀ ĐỨNG -->
  <line x1="60" y1="170" x2="520" y2="170" stroke="#334155" stroke-width="2"/>
  <line x1="60" y1="170" x2="60" y2="35" stroke="#334155" stroke-width="2"/>
  <text x="50" y="35" font-family="sans-serif" font-size="10" font-weight="bold" fill="#334155" text-anchor="end">Triệu đ</text>
  <text x="525" y="174" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155">Năm</text>

  <!-- 10 CỘT LƯƠNG TĂNG ĐỀU DÃY CẤP SỐ CỘNG -->
  <!-- Năm 1: 100tr -->
  <rect x="75" y="125" width="30" height="45" rx="3" fill="url(#barGrad)"/>
  <text x="90" y="120" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">100</text>
  <text x="90" y="184" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">1</text>

  <!-- Năm 2: 120tr -->
  <rect x="115" y="116" width="30" height="54" rx="3" fill="url(#barGrad)"/>
  <text x="130" y="111" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">120</text>
  <text x="130" y="184" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">2</text>

  <!-- Năm 3: 140tr -->
  <rect x="155" y="107" width="30" height="63" rx="3" fill="url(#barGrad)"/>
  <text x="170" y="102" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">140</text>
  <text x="170" y="184" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">3</text>

  <!-- Năm 4: 160tr -->
  <rect x="195" y="98" width="30" height="72" rx="3" fill="url(#barGrad)"/>
  <text x="210" y="93" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">160</text>
  <text x="210" y="184" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">4</text>

  <!-- Năm 5: 180tr -->
  <rect x="235" y="89" width="30" height="81" rx="3" fill="url(#barGrad)"/>
  <text x="250" y="84" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">180</text>
  <text x="250" y="184" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">5</text>

  <!-- Năm 6: 200tr -->
  <rect x="275" y="80" width="30" height="90" rx="3" fill="url(#barGrad)"/>
  <text x="290" y="75" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">200</text>
  <text x="290" y="184" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">6</text>

  <!-- Năm 7: 220tr -->
  <rect x="315" y="71" width="30" height="99" rx="3" fill="url(#barGrad)"/>
  <text x="330" y="66" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">220</text>
  <text x="330" y="184" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">7</text>

  <!-- Năm 8: 240tr -->
  <rect x="355" y="62" width="30" height="108" rx="3" fill="url(#barGrad)"/>
  <text x="370" y="57" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">240</text>
  <text x="370" y="184" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">8</text>

  <!-- Năm 9: 260tr -->
  <rect x="395" y="53" width="30" height="117" rx="3" fill="url(#barGrad)"/>
  <text x="410" y="48" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">260</text>
  <text x="410" y="184" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">9</text>

  <!-- Năm 10: 280tr -->
  <rect x="435" y="44" width="30" height="126" rx="3" fill="url(#barGrad)"/>
  <text x="450" y="39" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">280</text>
  <text x="450" y="184" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">10</text>

  <!-- BẢNG TÍNH TỔNG BÊN PHẢI -->
  <rect x="495" y="45" width="245" height="135" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="510" y="70" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#065f46">TỔNG LƯƠNG 10 NĂM:</text>
  <text x="510" y="93" font-family="sans-serif" font-size="11" fill="#047857">• Số năm: n = 10</text>
  <text x="510" y="112" font-family="sans-serif" font-size="11" fill="#047857">• Khởi điểm: u₁ = 100 tr</text>
  <text x="510" y="131" font-family="sans-serif" font-size="11" fill="#047857">• Tăng đều: d = 20 tr/năm</text>
  <line x1="510" y1="142" x2="725" y2="142" stroke="#6ee7b7"/>
  <text x="510" y="163" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">⇒ S₁₀ = 1.900 triệu đ (1,9 tỷ!)</text>
</svg>"""

if __name__ == "__main__":
    print("5 SVG graphics defined successfully!")
