# -*- coding: utf-8 -*-
"""
Hệ thống đồ họa SVG vector hiện đại cho Bài 2. Công thức lượng giác (Toán 11)
Chuẩn ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)
- Tỷ lệ chuẩn, màu sắc sư phạm cao cấp.
- Không lỗi font hay ký hiệu thô.
- Responsive 100% trên mọi thiết bị.
"""

# 1. Đồ họa Hook: Giao thoa & Tổng hợp Sóng âm Trễ kỹ thuật số f(t) = 5sin(t) + 5cos(t)
SVG_HOOK_DELAY = """
<div class="svg-container text-center my-3" style="background:#0f172a; border-radius:12px; padding:16px; box-shadow:0 10px 25px -5px rgba(0,0,0,0.3);">
  <svg viewBox="0 0 800 280" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gridGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#334155" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#1e293b" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="waveGradCombined" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#ec4899"/>
        <stop offset="50%" stop-color="#f59e0b"/>
        <stop offset="100%" stop-color="#10b981"/>
      </linearGradient>
    </defs>

    <!-- Background Grid -->
    <rect x="0" y="0" width="800" height="280" rx="10" fill="#0f172a"/>
    <line x1="50" y1="40" x2="50" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="225" y1="40" x2="225" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="400" y1="40" x2="400" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="575" y1="40" x2="575" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="750" y1="40" x2="750" y2="240" stroke="#334155" stroke-dasharray="4,4"/>

    <!-- Trục tọa độ -->
    <line x1="40" y1="140" x2="760" y2="140" stroke="#64748b" stroke-width="1.5"/>
    <polygon points="765,140 755,135 755,145" fill="#64748b"/>
    <text x="765" y="155" fill="#94a3b8" font-size="12" font-family="sans-serif">t (s)</text>

    <line x1="50" y1="250" x2="50" y2="30" stroke="#64748b" stroke-width="1.5"/>
    <polygon points="50,25 45,35 55,35" fill="#64748b"/>
    <text x="58" y="32" fill="#94a3b8" font-size="12" font-family="sans-serif">Biên độ f(t)</text>

    <!-- Đường sóng 1: f1(t) = 5 sin(t) (Xanh lam nhạt nét đứt) -->
    <path d="M 50,140 Q 137.5,60 225,140 T 400,140 T 575,140 T 750,140" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="5,4" opacity="0.85"/>

    <!-- Đường sóng 2: f2(t) = 5 cos(t) (Vàng cam nhạt nét đứt) -->
    <path d="M 50,60 Q 137.5,140 225,220 T 400,60 T 575,220 T 750,60" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,4" opacity="0.85"/>

    <!-- Đường sóng tổng hợp: f(t) = 5sqrt(2) sin(t + pi/4) (Cầu vồng rực rỡ, nét đậm) -->
    <path d="M 50,83.4 Q 93.75,26.8 137.5,26.8 T 225,140 T 312.5,253.2 T 400,140 T 487.5,26.8 T 575,140 T 662.5,253.2 T 750,140" fill="none" stroke="url(#waveGradCombined)" stroke-width="3.5"/>

    <!-- Chú thích Sóng -->
    <circle cx="90" cy="255" r="5" fill="#38bdf8"/>
    <text x="102" y="259" fill="#38bdf8" font-size="11" font-weight="bold" font-family="sans-serif">f₁(t) = 5 sin t (Tín hiệu gốc)</text>

    <circle cx="310" cy="255" r="5" fill="#fbbf24"/>
    <text x="322" y="259" fill="#fbbf24" font-size="11" font-weight="bold" font-family="sans-serif">f₂(t) = 5 cos t (Tín hiệu trễ)</text>

    <circle cx="530" cy="255" r="5" fill="#ec4899"/>
    <text x="542" y="259" fill="#f43f5e" font-size="11" font-weight="bold" font-family="sans-serif">f(t) = 5√2 sin(t + π/4) (Âm kết hợp)</text>

    <!-- Điểm cực đại biên độ -->
    <circle cx="137.5" cy="26.8" r="4" fill="#10b981"/>
    <text x="145" y="25" fill="#34d399" font-size="11" font-weight="bold" font-family="sans-serif">Biên độ cực đại k = 5√2 ≈ 7.07</text>
  </svg>
  <div style="color:#94a3b8; font-size:12px; margin-top:6px; font-style:italic;">
    Hình 1. Mô hình sóng âm giao thoa: Sự tổng hợp 2 tín hiệu trễ thành sóng âm điều hòa có biên độ k = 5√2 và pha ban đầu φ = π/4 (SGK trang 17)
  </div>
</div>
"""

# 2. Đồ họa Mục 1: Minh họa hình học Chứng minh Công thức cộng cos(a - b)
SVG_SEC1A_TRIG_VEC = """
<div class="svg-container text-center my-3" style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:12px; padding:14px; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
  <svg viewBox="0 0 540 320" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Trục tọa độ -->
    <line x1="40" y1="160" x2="480" y2="160" stroke="#475569" stroke-width="1.8"/>
    <polygon points="485,160 475,155 475,165" fill="#475569"/>
    <text x="480" y="180" fill="#334155" font-size="14" font-weight="bold" font-family="serif">x</text>

    <line x1="220" y1="300" x2="220" y2="20" stroke="#475569" stroke-width="1.8"/>
    <polygon points="220,15 215,25 225,25" fill="#475569"/>
    <text x="230" y="25" fill="#334155" font-size="14" font-weight="bold" font-family="serif">y</text>

    <text x="205" y="178" fill="#475569" font-size="14" font-weight="bold" font-family="serif">O</text>

    <!-- Đường tròn lượng giác R = 120 -->
    <circle cx="220" cy="160" r="120" fill="none" stroke="#2563eb" stroke-width="2.2"/>
    <text x="345" y="178" fill="#2563eb" font-size="13" font-weight="bold" font-family="sans-serif">A(1; 0)</text>
    <circle cx="340" cy="160" r="3.5" fill="#2563eb"/>

    <!-- Bán kính OM ứng với góc a (60 độ) -->
    <!-- 60 deg: dx = 120*cos(60)=60, dy = -120*sin(60)=-103.92 -> M(280, 56.1) -->
    <line x1="220" y1="160" x2="280" y2="56.1" stroke="#dc2626" stroke-width="2.5"/>
    <circle cx="280" cy="56.1" r="4.5" fill="#dc2626"/>
    <text x="286" y="52" fill="#dc2626" font-size="13" font-weight="bold" font-family="sans-serif">M(cos a; sin a)</text>

    <!-- Bán kính ON ứng với góc b (25 độ) -->
    <!-- 25 deg: dx = 120*cos(25)=108.76, dy = -120*sin(25)=-50.71 -> N(328.8, 109.3) -->
    <line x1="220" y1="160" x2="328.8" y2="109.3" stroke="#16a34a" stroke-width="2.5"/>
    <circle cx="328.8" cy="109.3" r="4.5" fill="#16a34a"/>
    <text x="335" y="112" fill="#16a34a" font-size="13" font-weight="bold" font-family="sans-serif">N(cos b; sin b)</text>

    <!-- Cung góc a -->
    <path d="M 265,160 A 45 45 0 0 0 242.5,121" fill="none" stroke="#dc2626" stroke-width="1.8"/>
    <text x="252" y="140" fill="#dc2626" font-size="12" font-weight="bold">a</text>

    <!-- Cung góc b -->
    <path d="M 285,160 A 65 65 0 0 0 278.9,132.5" fill="none" stroke="#16a34a" stroke-width="1.8"/>
    <text x="290" y="152" fill="#16a34a" font-size="12" font-weight="bold">b</text>

    <!-- Cung góc hiệu (a - b) giữa OM và ON -->
    <path d="M 250,73.4 A 95 95 0 0 1 296.9,124.9" fill="none" stroke="#9333ea" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="292" y="90" fill="#9333ea" font-size="13" font-weight="bold">a - b</text>

    <!-- Khung chú thích công thức tích vô hướng -->
    <rect x="20" y="240" width="500" height="65" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
    <text x="35" y="262" fill="#1e293b" font-size="13" font-weight="bold" font-family="sans-serif">Cơ sở hình học:</text>
    <text x="35" y="282" fill="#0f172a" font-size="13" font-family="serif">
      <tspan fill="#2563eb">OM · ON = |OM| · |ON| · cos(a - b) = 1 · 1 · cos(a - b)</tspan>
    </text>
    <text x="35" y="298" fill="#0f172a" font-size="13" font-family="serif">
      <tspan fill="#b91c1c">Mặt khác: OM · ON = cos a · cos b + sin a · sin b ⇒ cos(a - b) = cos a cos b + sin a sin b</tspan>
    </text>
  </svg>
  <div style="color:#64748b; font-size:12px; margin-top:6px; font-style:italic;">
    Hình 2. Chứng minh công thức cộng cos(a - b) thông qua tích vô hướng của 2 vectơ đơn vị OM và ON trên đường tròn lượng giác
  </div>
</div>
"""

# 3. Đồ họa Mục 2: Sơ đồ tư duy Công thức nhân đôi & Hạ bậc
SVG_SEC2A_MINDMAP = """
<div class="svg-container text-center my-3" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px;">
  <svg viewBox="0 0 760 270" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Nút trung tâm: GÓC NHÂN ĐÔI 2a -->
    <rect x="290" y="20" width="180" height="50" rx="12" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
    <text x="380" y="50" fill="#ffffff" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle">CÔNG THỨC NHÂN ĐÔI</text>

    <!-- Nhánh trái: sin 2a -->
    <path d="M 330,70 L 150,110" fill="none" stroke="#0284c7" stroke-width="2.5"/>
    <rect x="50" y="110" width="200" height="55" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
    <text x="150" y="132" fill="#0369a1" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">sin 2a = 2 sin a cos a</text>
    <text x="150" y="152" fill="#64748b" font-size="11" font-family="sans-serif" text-anchor="middle">(Sin đôi bằng 2 sin cos)</text>

    <!-- Nhánh giữa: cos 2a (3 dạng biến hóa) -->
    <path d="M 380,70 L 380,105" fill="none" stroke="#dc2626" stroke-width="2.5"/>
    <rect x="260" y="105" width="240" height="75" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
    <text x="380" y="126" fill="#b91c1c" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">cos 2a = cos²a - sin²a</text>
    <text x="380" y="147" fill="#b91c1c" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">= 2cos²a - 1</text>
    <text x="380" y="168" fill="#b91c1c" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">= 1 - 2sin²a</text>

    <!-- Nhánh phải: tan 2a -->
    <path d="M 430,70 L 610,110" fill="none" stroke="#16a34a" stroke-width="2.5"/>
    <rect x="510" y="110" width="200" height="55" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
    <text x="610" y="133" fill="#15803d" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">tan 2a = 2tan a / (1 - tan²a)</text>
    <text x="610" y="153" fill="#64748b" font-size="11" font-family="sans-serif" text-anchor="middle">(Điều kiện tan a, tan 2a xác định)</text>

    <!-- Mũi tên dẫn xuống Công thức hạ bậc từ cos 2a -->
    <path d="M 380,180 L 380,205" fill="none" stroke="#d97706" stroke-width="2.5" marker-end="url(#arrow)"/>
    <rect x="200" y="205" width="360" height="50" rx="10" fill="#fffbeb" stroke="#d97706" stroke-width="2"/>
    <text x="380" y="226" fill="#b45309" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">
      HẠ BẬC: cos²a = (1 + cos 2a)/2 &emsp;|&emsp; sin²a = (1 - cos 2a)/2
    </text>
    <text x="380" y="244" fill="#92400e" font-size="11" font-family="sans-serif" text-anchor="middle">
      (Công cụ then chốt để tính các góc nửa: π/8, π/12, 22.5°,...)
    </text>
  </svg>
  <div style="color:#64748b; font-size:12px; margin-top:6px; font-style:italic;">
    Hình 3. Sơ đồ liên hệ hữu cơ giữa Công thức nhân đôi và Công thức hạ bậc (SGK trang 18-19)
  </div>
</div>
"""

# 4. Đồ họa Mục 4: Bàn phím điện thoại cảm ứng tạo âm thanh DTMF (Hình 1.13 SGK trang 20)
SVG_SEC4B_DTMF_PHONE = """
<div class="svg-container text-center my-3" style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 14px rgba(0,0,0,0.06);">
  <svg viewBox="0 0 680 340" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Tiêu đề sơ đồ -->
    <text x="340" y="24" fill="#1e3a8a" font-size="15" font-weight="bold" font-family="sans-serif" text-anchor="middle">BÀN PHÍM ĐIỆN THOẠI & MA TRẬN TẦN SỐ ÂM THANH KÉP DTMF (SGK TRANG 20)</text>

    <!-- Nhãn cột Tần số cao -->
    <text x="240" y="55" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">1209 Hz</text>
    <text x="340" y="55" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">1336 Hz</text>
    <text x="440" y="55" fill="#2563eb" font-size="12" font-weight="bold" text-anchor="middle">1477 Hz</text>
    <line x1="240" y1="62" x2="240" y2="75" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrowBlue)"/>
    <line x1="340" y1="62" x2="340" y2="75" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="440" y1="62" x2="440" y2="75" stroke="#2563eb" stroke-width="1.5"/>

    <text x="340" y="40" fill="#1e40af" font-size="13" font-weight="bold" text-anchor="middle">Tần số cao (Cột) ↓</text>

    <!-- Nhãn hàng Tần số thấp -->
    <text x="140" y="105" fill="#b91c1c" font-size="12" font-weight="bold" text-anchor="end">697 Hz →</text>
    <text x="140" y="160" fill="#b91c1c" font-size="12" font-weight="bold" text-anchor="end">770 Hz →</text>
    <text x="140" y="215" fill="#b91c1c" font-size="12" font-weight="bold" text-anchor="end">852 Hz →</text>
    <text x="140" y="270" fill="#b91c1c" font-size="12" font-weight="bold" text-anchor="end">941 Hz →</text>
    <text x="75" y="185" fill="#991b1b" font-size="13" font-weight="bold" text-anchor="middle" transform="rotate(-90 75 185)">Tần số thấp (Hàng)</text>

    <!-- Khung bàn phím số -->
    <!-- Hàng 1: 1, 2, 3 -->
    <rect x="215" y="80" width="50" height="42" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="240" y="107" fill="#0f172a" font-size="20" font-weight="bold" text-anchor="middle">1</text>

    <rect x="315" y="80" width="50" height="42" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="340" y="107" fill="#0f172a" font-size="20" font-weight="bold" text-anchor="middle">2</text>

    <rect x="415" y="80" width="50" height="42" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="440" y="107" fill="#0f172a" font-size="20" font-weight="bold" text-anchor="middle">3</text>

    <!-- Hàng 2: 4, 5, 6 (LÀM NỔI BẬT PHÍM 4 THEO VẬN DỤNG 2 SGK) -->
    <rect x="215" y="135" width="50" height="42" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/>
    <text x="240" y="162" fill="#854d0e" font-size="22" font-weight="bold" text-anchor="middle">4</text>

    <rect x="315" y="135" width="50" height="42" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="340" y="162" fill="#0f172a" font-size="20" font-weight="bold" text-anchor="middle">5</text>

    <rect x="415" y="135" width="50" height="42" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="440" y="162" fill="#0f172a" font-size="20" font-weight="bold" text-anchor="middle">6</text>

    <!-- Hàng 3: 7, 8, 9 -->
    <rect x="215" y="190" width="50" height="42" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="240" y="217" fill="#0f172a" font-size="20" font-weight="bold" text-anchor="middle">7</text>

    <rect x="315" y="190" width="50" height="42" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="340" y="217" fill="#0f172a" font-size="20" font-weight="bold" text-anchor="middle">8</text>

    <rect x="415" y="190" width="50" height="42" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="440" y="217" fill="#0f172a" font-size="20" font-weight="bold" text-anchor="middle">9</text>

    <!-- Hàng 4: *, 0, # -->
    <rect x="215" y="245" width="50" height="42" rx="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="240" y="274" fill="#334155" font-size="22" font-weight="bold" text-anchor="middle">*</text>

    <rect x="315" y="245" width="50" height="42" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="340" y="272" fill="#0f172a" font-size="20" font-weight="bold" text-anchor="middle">0</text>

    <rect x="415" y="245" width="50" height="42" rx="8" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="440" y="272" fill="#334155" font-size="20" font-weight="bold" text-anchor="middle">#</text>

    <!-- Khung giải thích toán học bên phải cho Phím 4 -->
    <rect x="480" y="125" width="185" height="110" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
    <text x="490" y="145" fill="#15803d" font-size="12" font-weight="bold">Phím 4 kích hoạt:</text>
    <text x="490" y="165" fill="#0f172a" font-size="11">• f₁ = 770 Hz (Thấp)</text>
    <text x="490" y="182" fill="#0f172a" font-size="11">• f₂ = 1209 Hz (Cao)</text>
    <text x="490" y="202" fill="#1d4ed8" font-size="11" font-weight="bold">Biến đổi tổng → tích:</text>
    <text x="490" y="222" fill="#b91c1c" font-size="11" font-weight="bold">y = 2 sin(1979πt) cos(439πt)</text>
  </svg>
  <div style="color:#64748b; font-size:12px; margin-top:6px; font-style:italic;">
    Hình 4. Chuẩn hóa Hình 1.13 SGK: Ma trận bàn phím điện thoại cảm ứng DTMF và phép biến đổi tổng thành tích trong vi xử lý âm thanh
  </div>
</div>
"""
