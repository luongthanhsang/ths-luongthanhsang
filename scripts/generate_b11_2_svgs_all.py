# -*- coding: utf-8 -*-
"""
Hệ thống đồ họa SVG vector hiện đại toàn diện cho Bài 2. Công thức lượng giác (Toán 11)
Biên soạn chuẩn ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, An Giang)
- Phối màu chuẩn sư phạm cao cấp: Primary #2563eb, Emerald #059669, Amber #d97706, Rose #e11d48, Indigo #4f46e5.
- Tuyệt đối không lỗi font hay ô vuông ký hiệu toán học.
- Responsive 100%, tỷ lệ viewBox chuẩn mực trên mọi màn hình máy tính & di động.
"""

# 1. Đồ họa Hook: Giao thoa sóng âm Trễ kỹ thuật số f(t) = 5sin(t) + 5cos(t) = 5√2 sin(t + π/4)
SVG_HOOK_DELAY = """<div class="svg-container text-center my-3" style="background:#0f172a; border-radius:12px; padding:16px; box-shadow:0 10px 25px -5px rgba(0,0,0,0.3); overflow-x:auto;">
  <svg viewBox="0 0 800 280" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="waveGradCombined" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#ec4899"/>
        <stop offset="50%" stop-color="#f59e0b"/>
        <stop offset="100%" stop-color="#10b981"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="800" height="280" rx="10" fill="#0f172a"/>
    <line x1="50" y1="40" x2="50" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="225" y1="40" x2="225" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="400" y1="40" x2="400" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="575" y1="40" x2="575" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="750" y1="40" x2="750" y2="240" stroke="#334155" stroke-dasharray="4,4"/>
    <line x1="40" y1="140" x2="760" y2="140" stroke="#64748b" stroke-width="1.5"/>
    <polygon points="765,140 755,135 755,145" fill="#64748b"/>
    <text x="765" y="155" fill="#94a3b8" font-size="12" font-family="sans-serif">t (s)</text>
    <line x1="50" y1="250" x2="50" y2="30" stroke="#64748b" stroke-width="1.5"/>
    <polygon points="50,25 45,35 55,35" fill="#64748b"/>
    <text x="35" y="30" fill="#94a3b8" font-size="12" font-family="sans-serif">y</text>
    <text x="35" y="155" fill="#94a3b8" font-size="12" font-family="sans-serif">O</text>
    <text x="220" y="155" fill="#94a3b8" font-size="11" font-family="sans-serif">π</text>
    <text x="395" y="155" fill="#94a3b8" font-size="11" font-family="sans-serif">2π</text>
    <text x="570" y="155" fill="#94a3b8" font-size="11" font-family="sans-serif">3π</text>
    <text x="745" y="155" fill="#94a3b8" font-size="11" font-family="sans-serif">4π</text>
    <!-- Sóng 1: f1(t) = 5sin(t) -->
    <path d="M 50 140 Q 93.75 80 137.5 140 T 225 140 T 312.5 140 T 400 140 T 487.5 140 T 575 140 T 662.5 140 T 750 140" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3" opacity="0.75"/>
    <!-- Sóng 2: f2(t) = 5cos(t) -->
    <path d="M 50 80 Q 93.75 140 137.5 200 T 225 140 T 312.5 80 T 400 200 T 487.5 140 T 575 80 T 662.5 200 T 750 140" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3,3" opacity="0.75"/>
    <!-- Sóng tổng hợp: f(t) = 5√2 sin(t + π/4) -->
    <path d="M 50 55 C 90 55, 110 225, 150 225 C 190 225, 210 55, 250 55 C 290 55, 310 225, 350 225 C 390 225, 410 55, 450 55 C 490 55, 510 225, 550 225 C 590 225, 610 55, 650 55 C 690 55, 710 225, 750 225" fill="none" stroke="url(#waveGradCombined)" stroke-width="3.5"/>
    <!-- Chú thích -->
    <g transform="translate(480, 15)">
      <rect x="0" y="0" width="300" height="60" rx="6" fill="#1e293b" opacity="0.9" stroke="#334155"/>
      <line x1="15" y1="18" x2="45" y2="18" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="55" y="22" fill="#38bdf8" font-size="11" font-family="sans-serif">f₁(t) = 5·sin(t) (Tín hiệu gốc)</text>
      <line x1="15" y1="34" x2="45" y2="34" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="55" y="38" fill="#a78bfa" font-size="11" font-family="sans-serif">f₂(t) = 5·cos(t) (Tín hiệu trễ)</text>
      <line x1="15" y1="50" x2="45" y2="50" stroke="#ec4899" stroke-width="3"/>
      <text x="55" y="54" fill="#f8fafc" font-size="11" font-weight="bold" font-family="sans-serif">f(t) = 5√2·sin(t + π/4) (Âm kết hợp)</text>
    </g>
  </svg>
  <div class="mt-2 text-xs text-slate-400">Hình minh họa: Sóng âm hình sin kết hợp có biên độ k = 5√2 ≈ 7,07 và pha ban đầu φ = π/4 rad</div>
</div>"""

# 2. Đồ họa Mục 1a: Minh họa hình học Chứng minh Công thức cộng cos(a - b)
SVG_SEC1A_TRIG_VEC = """<div class="svg-container text-center my-3" style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 600 360" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowAxis" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#64748b"/>
      </marker>
      <marker id="arrowVecM" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#2563eb"/>
      </marker>
      <marker id="arrowVecN" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#ea580c"/>
      </marker>
    </defs>
    <!-- Trục tọa độ -->
    <line x1="60" y1="200" x2="440" y2="200" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrowAxis)"/>
    <text x="445" y="205" fill="#475569" font-size="14" font-weight="bold">x</text>
    <line x1="220" y1="330" x2="220" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrowAxis)"/>
    <text x="225" y="35" fill="#475569" font-size="14" font-weight="bold">y</text>
    <text x="205" y="215" fill="#475569" font-size="14" font-weight="bold">O</text>
    <!-- Đường tròn lượng giác R=120 -->
    <circle cx="220" cy="200" r="120" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
    <!-- Điểm A(1; 0) -->
    <circle cx="340" cy="200" r="3.5" fill="#0f172a"/>
    <text x="345" y="218" fill="#0f172a" font-size="12" font-weight="bold">A(1;0)</text>
    <!-- Vectơ OM: góc a = 60 độ -->
    <line x1="220" y1="200" x2="280" y2="96.08" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrowVecM)"/>
    <circle cx="280" cy="96.08" r="4" fill="#2563eb"/>
    <text x="285" y="90" fill="#2563eb" font-size="13" font-weight="bold">M(cos a; sin a)</text>
    <!-- Vectơ ON: góc b = 20 độ -->
    <line x1="220" y1="200" x2="332.76" y2="158.96" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowVecN)"/>
    <circle cx="332.76" cy="158.96" r="4" fill="#ea580c"/>
    <text x="340" y="160" fill="#ea580c" font-size="13" font-weight="bold">N(cos b; sin b)</text>
    <!-- Cung góc a -->
    <path d="M 270 200 A 50 50 0 0 0 245 156.7" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    <text x="268" y="175" fill="#2563eb" font-size="12" font-weight="bold">a</text>
    <!-- Cung góc b -->
    <path d="M 285 200 A 65 65 0 0 0 281 177.7" fill="none" stroke="#ea580c" stroke-width="1.5"/>
    <text x="290" y="195" fill="#ea580c" font-size="12" font-weight="bold">b</text>
    <!-- Góc giữa hai vectơ: a - b -->
    <path d="M 252 168 A 40 40 0 0 0 257.5 186.3" fill="none" stroke="#059669" stroke-width="2" stroke-dasharray="2,2"/>
    <text x="268" y="145" fill="#059669" font-size="12" font-weight="bold">a - b</text>
    <!-- Hộp chứng minh đại số -->
    <g transform="translate(380, 50)">
      <rect x="0" y="0" width="210" height="200" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="15" y="25" fill="#1e3a8a" font-size="12" font-weight="bold">CHỨNG MINH TÍCH VÔ HƯỚNG:</text>
      <text x="15" y="55" fill="#1e293b" font-size="12">Ta có: |OM| = |ON| = 1</text>
      <text x="15" y="80" fill="#2563eb" font-size="12" font-weight="bold">Cách 1: Theo định nghĩa</text>
      <text x="20" y="105" fill="#1e293b" font-size="12">OM · ON = cos(a - b)</text>
      <text x="15" y="135" fill="#ea580c" font-size="12" font-weight="bold">Cách 2: Theo toạ độ</text>
      <text x="20" y="160" fill="#1e293b" font-size="12">OM · ON = cos a cos b + sin a sin b</text>
      <line x1="15" y1="172" x2="195" y2="172" stroke="#93c5fd"/>
      <text x="15" y="190" fill="#059669" font-size="12" font-weight="bold">⇒ cos(a - b) = cos a cos b + sin a sin b</text>
    </g>
  </svg>
  <div class="mt-2 text-xs text-slate-600 font-semibold">Hình 1.1: Chứng minh công thức cộng bằng tích vô hướng hai vectơ đơn vị trên đường tròn lượng giác</div>
</div>"""

# 3. Đồ họa Mục 1b: Sơ đồ phân tách góc không đặc biệt 75° = 45° + 30° và π/12 = π/3 - π/4
SVG_SEC1B_DECOMPOSE = """<div class="svg-container text-center my-3" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 650 200" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="280" height="150" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="140" y="28" fill="#1d4ed8" font-size="14" font-weight="bold" text-anchor="middle">TÍNH GÓC 75° (Ví dụ 1a SGK)</text>
      <text x="140" y="55" fill="#0f172a" font-size="13" text-anchor="middle">75° = 45° + 30°</text>
      <line x1="20" y1="70" x2="260" y2="70" stroke="#bfdbfe"/>
      <text x="140" y="95" fill="#475569" font-size="12" text-anchor="middle">cos 75° = cos 45° cos 30° - sin 45° sin 30°</text>
      <text x="140" y="125" fill="#15803d" font-size="14" font-weight="bold" text-anchor="middle">= (√6 - √2) / 4</text>
    </g>
    <g transform="translate(340, 20)">
      <rect x="0" y="0" width="290" height="150" rx="8" fill="#fdf4ff" stroke="#d946ef" stroke-width="1.5"/>
      <text x="145" y="28" fill="#a21caf" font-size="14" font-weight="bold" text-anchor="middle">TÍNH GÓC π/12 (Ví dụ 1b SGK)</text>
      <text x="145" y="55" fill="#0f172a" font-size="13" text-anchor="middle">π/12 = π/3 - π/4 (hoặc 45° - 30°)</text>
      <line x1="20" y1="70" x2="270" y2="70" stroke="#f0abfc"/>
      <text x="145" y="95" fill="#475569" font-size="12" text-anchor="middle">tan(π/12) = (tan π/3 - tan π/4)/(1 + tan π/3 tan π/4)</text>
      <text x="145" y="125" fill="#b91c1c" font-size="14" font-weight="bold" text-anchor="middle">= 2 - √3</text>
    </g>
  </svg>
  <div class="mt-2 text-xs text-slate-600 font-semibold">Sơ đồ phân tích góc đưa về tổng và hiệu các góc đặc biệt (30°, 45°, 60°)</div>
</div>"""

# 4. Đồ họa Mục 2a: Sơ đồ tư duy Công thức nhân đôi
SVG_SEC2A_MINDMAP = """<div class="svg-container text-center my-3" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 700 240" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Nút trung tâm -->
    <rect x="250" y="85" width="200" height="60" rx="30" fill="#2563eb" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"/>
    <text x="350" y="112" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">GÓC NHÂN ĐÔI</text>
    <text x="350" y="132" fill="#bfdbfe" font-size="12" text-anchor="middle">(Đặt b = a trong công thức cộng)</text>
    <!-- Nhánh Sin 2a -->
    <path d="M 250 115 C 160 115, 160 50, 80 50" fill="none" stroke="#3b82f6" stroke-width="2"/>
    <rect x="10" y="25" width="160" height="50" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="90" y="47" fill="#1d4ed8" font-size="13" font-weight="bold" text-anchor="middle">sin 2a</text>
    <text x="90" y="65" fill="#1e293b" font-size="12" text-anchor="middle">= 2 sin a cos a</text>
    <!-- Nhánh Tan 2a -->
    <path d="M 250 115 C 160 115, 160 185, 80 185" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <rect x="10" y="160" width="160" height="52" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="90" y="182" fill="#b45309" font-size="13" font-weight="bold" text-anchor="middle">tan 2a</text>
    <text x="90" y="200" fill="#1e293b" font-size="11" text-anchor="middle">= 2 tan a / (1 - tan²a)</text>
    <!-- Nhánh Cos 2a với 3 biến thể -->
    <path d="M 450 115 C 510 115, 510 50, 540 50" fill="none" stroke="#ec4899" stroke-width="2"/>
    <path d="M 450 115 L 540 115" stroke="#ec4899" stroke-width="2"/>
    <path d="M 450 115 C 510 115, 510 185, 540 185" fill="none" stroke="#ec4899" stroke-width="2"/>
    <rect x="540" y="25" width="150" height="42" rx="6" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
    <text x="615" y="50" fill="#9d174d" font-size="12" font-weight="bold" text-anchor="middle">= cos²a - sin²a</text>
    <rect x="540" y="95" width="150" height="42" rx="6" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
    <text x="615" y="120" fill="#9d174d" font-size="12" font-weight="bold" text-anchor="middle">= 2 cos²a - 1</text>
    <rect x="540" y="165" width="150" height="42" rx="6" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
    <text x="615" y="190" fill="#9d174d" font-size="12" font-weight="bold" text-anchor="middle">= 1 - 2 sin²a</text>
    <text x="510" y="110" fill="#be185d" font-size="12" font-weight="bold">cos 2a</text>
  </svg>
  <div class="mt-2 text-xs text-slate-600 font-semibold">Sơ đồ 3 nhánh mở rộng của cos 2a – Nền tảng thiết lập công thức hạ bậc</div>
</div>"""

# 5. Đồ họa Mục 2b: Sơ đồ công thức hạ bậc & Kĩ thuật tính cos(π/8)
SVG_SEC2B_POW_REDUCE = """<div class="svg-container text-center my-3" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 650 180" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="280" height="135" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
      <text x="140" y="26" fill="#15803d" font-size="14" font-weight="bold" text-anchor="middle">CÔNG THỨC HẠ BẬC</text>
      <line x1="20" y1="40" x2="260" y2="40" stroke="#bbf7d0"/>
      <text x="140" y="68" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">cos²a = (1 + cos 2a) / 2</text>
      <text x="140" y="100" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">sin²a = (1 - cos 2a) / 2</text>
      <text x="140" y="122" fill="#475569" font-size="11" text-anchor="middle">Dấu cộng cho cos, dấu trừ cho sin</text>
    </g>
    <g transform="translate(330, 20)">
      <rect x="0" y="0" width="300" height="135" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="150" y="26" fill="#1e40af" font-size="14" font-weight="bold" text-anchor="middle">TÍNH cos(π/8) (Luyện tập 2 SGK)</text>
      <line x1="20" y1="40" x2="280" y2="40" stroke="#bfdbfe"/>
      <text x="150" y="65" fill="#1e293b" font-size="12" text-anchor="middle">cos²(π/8) = [1 + cos(π/4)] / 2</text>
      <text x="150" y="90" fill="#1e293b" font-size="12" text-anchor="middle">= [1 + √2/2] / 2 = (2 + √2) / 4</text>
      <text x="150" y="118" fill="#15803d" font-size="13" font-weight="bold" text-anchor="middle">⇒ cos(π/8) = √(2 + √2) / 2</text>
    </g>
  </svg>
  <div class="mt-2 text-xs text-slate-600 font-semibold">Quy tắc hạ bậc và ứng dụng xác định giá trị lượng giác góc nửa</div>
</div>"""

# 6. Đồ họa Mục 3a: Sơ đồ 3 công thức biến đổi tích thành tổng
SVG_SEC3A_PROD_TO_SUM = """<div class="svg-container text-center my-3" style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 680 180" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="15" width="200" height="130" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="110" y="40" fill="#1d4ed8" font-size="14" font-weight="bold" text-anchor="middle">TÍCH HAI CÔ-SIN</text>
    <text x="110" y="70" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">cos a cos b =</text>
    <text x="110" y="95" fill="#1e40af" font-size="12" text-anchor="middle">½ [cos(a - b) + cos(a + b)]</text>
    <text x="110" y="130" fill="#64748b" font-size="11" text-anchor="middle">(Nửa tổng hai cos)</text>

    <rect x="240" y="15" width="200" height="130" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="340" y="40" fill="#b91c1c" font-size="14" font-weight="bold" text-anchor="middle">TÍCH HAI SIN (!)</text>
    <text x="340" y="70" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">sin a sin b =</text>
    <text x="340" y="95" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="middle">½ [cos(a - b) - cos(a + b)]</text>
    <text x="340" y="130" fill="#991b1b" font-size="11" text-anchor="middle">(Lưu ý: dấu TRỪ ở giữa)</text>

    <rect x="470" y="15" width="200" height="130" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
    <text x="570" y="40" fill="#15803d" font-size="14" font-weight="bold" text-anchor="middle">TÍCH SIN VÀ COS</text>
    <text x="570" y="70" fill="#0f172a" font-size="13" font-weight="bold" text-anchor="middle">sin a cos b =</text>
    <text x="570" y="95" fill="#166534" font-size="12" text-anchor="middle">½ [sin(a - b) + sin(a + b)]</text>
    <text x="570" y="130" fill="#64748b" font-size="11" text-anchor="middle">(Nửa tổng hai sin)</text>
  </svg>
  <div class="mt-2 text-xs text-slate-600 font-semibold">Hệ thống 3 công thức biến đổi tích thành tổng chuẩn SGK Toán 11</div>
</div>"""

# 7. Đồ họa Mục 3b: Chuỗi nhân đôi liên hoàn Domino (Bài 1.10b SGK)
SVG_SEC3B_DOMINO = """<div class="svg-container text-center my-3" style="background:#f8fafc; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 720 160" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrowDomino" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#3b82f6"/>
      </marker>
    </defs>
    <text x="360" y="25" fill="#1e3a8a" font-size="13" font-weight="bold" text-anchor="middle">HIỆU ỨNG NHÂN ĐÔI DOMINO B = sin(π/32)·cos(π/32)·cos(π/16)·cos(π/8)</text>
    <g transform="translate(10, 45)">
      <rect x="0" y="10" width="130" height="55" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
      <text x="65" y="35" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">sin(π/32)cos(π/32)</text>
      <text x="65" y="55" fill="#475569" font-size="11" text-anchor="middle">= ½ sin(π/16)</text>

      <line x1="135" y1="37" x2="175" y2="37" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowDomino)"/>

      <rect x="180" y="10" width="145" height="55" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
      <text x="252" y="35" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">½ sin(π/16)cos(π/16)</text>
      <text x="252" y="55" fill="#475569" font-size="11" text-anchor="middle">= ¼ sin(π/8)</text>

      <line x1="330" y1="37" x2="370" y2="37" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowDomino)"/>

      <rect x="375" y="10" width="145" height="55" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
      <text x="447" y="35" fill="#1d4ed8" font-size="11" font-weight="bold" text-anchor="middle">¼ sin(π/8)cos(π/8)</text>
      <text x="447" y="55" fill="#475569" font-size="11" text-anchor="middle">= ⅛ sin(π/4)</text>

      <line x1="525" y1="37" x2="565" y2="37" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowDomino)"/>

      <rect x="570" y="10" width="125" height="55" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="632" y="35" fill="#15803d" font-size="11" font-weight="bold" text-anchor="middle">⅛ · (√2 / 2)</text>
      <text x="632" y="55" fill="#15803d" font-size="13" font-weight="bold" text-anchor="middle">= √2 / 16</text>
    </g>
    <text x="360" y="140" fill="#64748b" font-size="11" text-anchor="middle">Kĩ thuật nhân đôi liên tiếp giải quyết các tích dãy số cô-sin với góc gấp đôi</text>
  </svg>
</div>"""

# 8. Đồ họa Mục 4a: Bốn công thức biến đổi tổng thành tích & Bài ca lượng giác
SVG_SEC4A_SUM_TO_PROD = """<div class="svg-container text-center my-3" style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 700 200" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="330" height="80" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="25" y="35" fill="#1e40af" font-size="13" font-weight="bold">cos u + cos v = 2 cos(½(u+v)) cos(½(u-v))</text>
    <text x="25" y="65" fill="#2563eb" font-size="12" font-style="italic">"Cos cộng cos bằng hai cos cos"</text>

    <rect x="360" y="10" width="330" height="80" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="375" y="35" fill="#991b1b" font-size="13" font-weight="bold">cos u - cos v = -2 sin(½(u+v)) sin(½(u-v))</text>
    <text x="375" y="65" fill="#dc2626" font-size="12" font-style="italic">"Cos trừ cos bằng trừ hai sin sin"</text>

    <rect x="10" y="105" width="330" height="80" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
    <text x="25" y="130" fill="#166534" font-size="13" font-weight="bold">sin u + sin v = 2 sin(½(u+v)) cos(½(u-v))</text>
    <text x="25" y="160" fill="#15803d" font-size="12" font-style="italic">"Sin cộng sin bằng hai sin cos"</text>

    <rect x="360" y="105" width="330" height="80" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="375" y="130" fill="#92400e" font-size="13" font-weight="bold">sin u - sin v = 2 cos(½(u+v)) sin(½(u-v))</text>
    <text x="375" y="160" fill="#b45309" font-size="12" font-style="italic">"Sin trừ sin bằng hai cos sin"</text>
  </svg>
  <div class="mt-2 text-xs text-slate-600 font-semibold">Bài ca biến đổi Tổng thành Tích Thầy Sáng – Luôn nhớ: góc trước nửa tổng, góc sau nửa hiệu!</div>
</div>"""

# 9. Đồ họa Mục 4b: Bàn phím điện thoại cảm ứng DTMF (Hình 1.13 SGK trang 20)
SVG_SEC4B_DTMF_PHONE = """<div class="svg-container text-center my-3" style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 4px 12px rgba(0,0,0,0.05); overflow-x:auto;">
  <svg viewBox="0 0 650 320" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Tiêu đề cột Tần số cao -->
    <text x="270" y="25" fill="#2563eb" font-size="13" font-weight="bold" text-anchor="middle">Tần số cao (Hz)</text>
    <text x="200" y="48" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">1209 Hz</text>
    <line x1="200" y1="52" x2="200" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
    <polygon points="200,73 196,65 204,65" fill="#94a3b8"/>
    <text x="270" y="48" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">1336 Hz</text>
    <line x1="270" y1="52" x2="270" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
    <polygon points="270,73 266,65 274,65" fill="#94a3b8"/>
    <text x="340" y="48" fill="#475569" font-size="12" font-weight="bold" text-anchor="middle">1477 Hz</text>
    <line x1="340" y1="52" x2="340" y2="70" stroke="#94a3b8" stroke-width="1.5"/>
    <polygon points="340,73 336,65 344,65" fill="#94a3b8"/>
    <!-- Tiêu đề hàng Tần số thấp -->
    <text x="65" y="190" fill="#dc2626" font-size="13" font-weight="bold" text-anchor="middle" transform="rotate(-90 65 190)">Tần số thấp (Hz)</text>
    <g transform="translate(100, 75)">
      <!-- Hàng 1: 697 Hz -->
      <text x="15" y="32" fill="#475569" font-size="12" font-weight="bold" text-anchor="end">697 Hz →</text>
      <rect x="25" y="8" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="50" y="34" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">1</text>
      <rect x="95" y="8" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="120" y="34" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">2</text>
      <rect x="165" y="8" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="190" y="34" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">3</text>
      <!-- Hàng 2: 770 Hz (Phím 4 nổi bật) -->
      <text x="15" y="87" fill="#dc2626" font-size="12" font-weight="bold" text-anchor="end">770 Hz →</text>
      <rect x="25" y="63" width="50" height="40" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="2.5"/>
      <text x="50" y="89" fill="#dc2626" font-size="18" font-weight="bold" text-anchor="middle">4</text>
      <rect x="95" y="63" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="120" y="89" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">5</text>
      <rect x="165" y="63" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="190" y="89" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">6</text>
      <!-- Hàng 3: 852 Hz -->
      <text x="15" y="142" fill="#475569" font-size="12" font-weight="bold" text-anchor="end">852 Hz →</text>
      <rect x="25" y="118" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="50" y="144" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">7</text>
      <rect x="95" y="118" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="120" y="144" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">8</text>
      <rect x="165" y="118" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="190" y="144" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">9</text>
      <!-- Hàng 4: 941 Hz -->
      <text x="15" y="197" fill="#475569" font-size="12" font-weight="bold" text-anchor="end">941 Hz →</text>
      <rect x="25" y="173" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="50" y="199" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">*</text>
      <rect x="95" y="173" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="120" y="199" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">0</text>
      <rect x="165" y="173" width="50" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="190" y="199" fill="#0f172a" font-size="16" font-weight="bold" text-anchor="middle">#</text>
    </g>
    <!-- Phân tích sóng phím 4 bên phải -->
    <g transform="translate(360, 75)">
      <rect x="0" y="8" width="275" height="205" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="15" y="32" fill="#991b1b" font-size="13" font-weight="bold">KHI NHẤN PHÍM 4 (Vận dụng 2):</text>
      <text x="15" y="58" fill="#475569" font-size="12">• Tần số thấp: f₁ = 770 Hz</text>
      <text x="15" y="80" fill="#475569" font-size="12">• Tần số cao: f₂ = 1209 Hz</text>
      <line x1="15" y1="92" x2="260" y2="92" stroke="#e2e8f0"/>
      <text x="15" y="112" fill="#1e3a8a" font-size="12" font-weight="bold">Phương trình sóng âm kết hợp:</text>
      <text x="15" y="132" fill="#0f172a" font-size="11">y = sin(2π·770t) + sin(2π·1209t)</text>
      <text x="15" y="152" fill="#0f172a" font-size="11">  = sin(1540πt) + sin(2418πt)</text>
      <line x1="15" y1="162" x2="260" y2="162" stroke="#e2e8f0"/>
      <text x="15" y="180" fill="#15803d" font-size="12" font-weight="bold">Biến đổi tổng thành tích:</text>
      <text x="15" y="200" fill="#15803d" font-size="12" font-weight="bold">y = 2·sin(1979πt)·cos(439πt)</text>
    </g>
  </svg>
  <div class="mt-2 text-xs text-slate-600 font-semibold">Hình 1.13 SGK: Ma trận mã hóa âm thanh đa tần số DTMF trên bàn phím điện thoại cảm ứng</div>
</div>"""

# 10. Đồ họa Wrapup: Tổng kết 4 khối công thức lượng giác & Sóng dao động điều hòa tổng hợp
SVG_WRAPUP_SUMMARY = """<div class="svg-container text-center my-3" style="background:#0f172a; border-radius:12px; padding:16px; box-shadow:0 10px 25px -5px rgba(0,0,0,0.3); overflow-x:auto;">
  <svg viewBox="0 0 760 220" style="max-width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">
    <text x="380" y="28" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">BỐN TRỤ CỘT CÔNG THỨC LƯỢNG GIÁC LỚP 11</text>
    <rect x="20" y="45" width="165" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="102" y="70" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">1. CÔNG THỨC CỘNG</text>
    <text x="102" y="95" fill="#e2e8f0" font-size="10" text-anchor="middle">cos(a ± b) = cc ∓ ss</text>
    <text x="102" y="120" fill="#e2e8f0" font-size="10" text-anchor="middle">sin(a ± b) = sc ± cs</text>
    <text x="102" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">tan(a ± b) = (t ± t)/(1 ∓ tt)</text>
    <text x="102" y="175" fill="#94a3b8" font-size="9" text-anchor="middle">6 công thức cơ sở</text>

    <rect x="205" y="45" width="165" height="150" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="1.5"/>
    <text x="287" y="70" fill="#ec4899" font-size="12" font-weight="bold" text-anchor="middle">2. NHÂN ĐÔI & HẠ BẬC</text>
    <text x="287" y="95" fill="#e2e8f0" font-size="10" text-anchor="middle">sin 2a = 2 sin a cos a</text>
    <text x="287" y="120" fill="#e2e8f0" font-size="10" text-anchor="middle">cos 2a = 2cos²-1 = 1-2sin²</text>
    <text x="287" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">cos² = (1+c2a)/2</text>
    <text x="287" y="175" fill="#94a3b8" font-size="9" text-anchor="middle">Cầu nối bậc & góc</text>

    <rect x="390" y="45" width="165" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="472" y="70" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">3. TÍCH THÀNH TỔNG</text>
    <text x="472" y="95" fill="#e2e8f0" font-size="10" text-anchor="middle">cos cos = ½[c(a-b)+c(a+b)]</text>
    <text x="472" y="120" fill="#e2e8f0" font-size="10" text-anchor="middle">sin sin = ½[c(a-b)-c(a+b)]</text>
    <text x="472" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">sin cos = ½[s(a-b)+s(a+b)]</text>
    <text x="472" y="175" fill="#94a3b8" font-size="9" text-anchor="middle">Rút gọn tích liên hoàn</text>

    <rect x="575" y="45" width="165" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
    <text x="657" y="70" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">4. TỔNG THÀNH TÍCH</text>
    <text x="657" y="95" fill="#e2e8f0" font-size="10" text-anchor="middle">cos+cos = 2 cos cos</text>
    <text x="657" y="120" fill="#e2e8f0" font-size="10" text-anchor="middle">cos-cos = -2 sin sin</text>
    <text x="657" y="145" fill="#e2e8f0" font-size="10" text-anchor="middle">sin+sin = 2 sin cos</text>
    <text x="657" y="175" fill="#94a3b8" font-size="9" text-anchor="middle">sin-sin = 2 cos sin</text>
  </svg>
  <div class="mt-2 text-xs text-slate-400">Bản đồ tư duy 4 trụ cột công thức lượng giác – Vũ khí sắc bén giải nhanh mọi đề thi Toán 11</div>
</div>"""
