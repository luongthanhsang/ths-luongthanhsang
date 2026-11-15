import os, re

# ==============================================================================
# SVG 1: BÀI 3 LỚP 10 - DOANH THU RẠP CHIẾU PHIM 1-6
# ==============================================================================
svg_b3_hook = '''<div class="tikz-svg-wrap" style="text-align: center; margin: 16px 0;">
  <svg viewBox="0 0 720 290" style="max-width: 700px; width: 100%; height: auto; display: block; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1.5px solid #0284c7; box-shadow: 0 4px 16px rgba(2, 132, 199, 0.08);">
    <defs>
      <marker id="arr-b3-ax" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a"/>
      </marker>
      <pattern id="loss-grid-b3" width="14" height="14" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="14" stroke="#fecaca" stroke-width="2.2"/>
      </pattern>
      <pattern id="profit-grid-b3" width="14" height="14" patternTransform="rotate(-45 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="14" stroke="#bbf7d0" stroke-width="1.8"/>
      </pattern>
    </defs>

    <!-- Tiêu đề biểu đồ -->
    <text x="360" y="24" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0369a1">MÔ HÌNH TOÁN HỌC: MIỀN DOANH THU RẠP CHIẾU PHIM TRÊN MẶT PHẲNG Oxy (x + 2y ≥ 400)</text>

    <!-- Vùng toạ độ: Gốc O(100, 240) -->
    <!-- Scale: x: 1 đơn vị = 1.2 px (400 -> 480px), y: 1 đơn vị = 0.9 px (200 -> 180px) -->
    <!-- (0,0) -> (100, 240) -->
    <!-- (400, 0) -> (580, 240) -->
    <!-- (0, 200) -> (100, 60) -->

    <!-- Vùng bù lỗ: Tam giác OAB: O(100, 240), A(580, 240), B(100, 60) -->
    <polygon points="100,240 580,240 100,60" fill="url(#loss-grid-b3)" fill-opacity="0.8"/>
    <!-- Vùng có lãi: Nửa mặt phẳng trên -->
    <polygon points="100,60 580,240 680,240 680,40 100,40" fill="url(#profit-grid-b3)" fill-opacity="0.5"/>

    <!-- Lưới toạ độ phụ mờ -->
    <line x1="100" y1="150" x2="580" y2="150" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="340" y1="60" x2="340" y2="240" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3"/>

    <!-- Trục Ox và Oy -->
    <line x1="70" y1="240" x2="680" y2="240" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-b3-ax)"/>
    <line x1="100" y1="260" x2="100" y2="35" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-b3-ax)"/>

    <text x="670" y="260" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">x (Vé loại 1)</text>
    <text x="50" y="42" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">y (Vé loại 2)</text>
    <text x="86" y="255" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#64748b">O</text>

    <!-- Vạch toạ độ Ox -->
    <line x1="220" y1="237" x2="220" y2="243" stroke="#0f172a" stroke-width="1.5"/>
    <text x="220" y="256" text-anchor="middle" font-size="11" fill="#475569">100</text>
    <line x1="340" y1="237" x2="340" y2="243" stroke="#0f172a" stroke-width="1.5"/>
    <text x="340" y="256" text-anchor="middle" font-size="11" fill="#475569">200</text>
    <line x1="460" y1="237" x2="460" y2="243" stroke="#0f172a" stroke-width="1.5"/>
    <text x="460" y="256" text-anchor="middle" font-size="11" fill="#475569">300</text>
    <circle cx="580" cy="240" r="4.5" fill="#0284c7"/>
    <text x="580" y="258" text-anchor="middle" font-size="12" font-weight="bold" fill="#0284c7">400 (A)</text>

    <!-- Vạch toạ độ Oy -->
    <line x1="97" y1="150" x2="103" y2="150" stroke="#0f172a" stroke-width="1.5"/>
    <text x="88" y="154" text-anchor="end" font-size="11" fill="#475569">100</text>
    <circle cx="100" cy="60" r="4.5" fill="#0284c7"/>
    <text x="88" y="64" text-anchor="end" font-size="12" font-weight="bold" fill="#0284c7">200 (B)</text>

    <!-- Đường thẳng biên d: x + 2y = 400 -->
    <line x1="60" y1="45" x2="620" y2="255" stroke="#0284c7" stroke-width="3"/>
    <rect x="390" y="125" width="220" height="28" rx="6" fill="#0284c7"/>
    <text x="500" y="144" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Đường thẳng d: x + 2y = 400 (Hoà vốn 20 tr)</text>

    <!-- Nhãn vùng Bù Lỗ và Có Lãi -->
    <rect x="130" y="180" width="170" height="36" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.2"/>
    <text x="215" y="196" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">MIỀN BÙ LỖ (x + 2y &lt; 400)</text>
    <text x="215" y="210" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="10" fill="#dc2626">Doanh thu chưa đủ 20 triệu</text>

    <rect x="360" y="55" width="180" height="36" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.2"/>
    <text x="450" y="71" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="bold" fill="#15803d">MIỀN CÓ LÃI (x + 2y &gt; 400)</text>
    <text x="450" y="85" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="10" fill="#16a34a">Doanh thu vượt trên 20 triệu</text>
  </svg>
</div>'''

# ==============================================================================
# SVG 2: BÀI 4 LỚP 10 - BÀI TOÁN KINH DOANH MÁY ĐIỀU HOÀ (HỆ BẤT PHƯƠNG TRÌNH)
# ==============================================================================
svg_b4_hook = '''<div class="tikz-svg-wrap" style="text-align: center; margin: 16px 0;">
  <svg viewBox="0 0 720 300" style="max-width: 700px; width: 100%; height: auto; display: block; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1.5px solid #0284c7; box-shadow: 0 4px 16px rgba(2, 132, 199, 0.08);">
    <defs>
      <marker id="arr-b4-ax" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a"/>
      </marker>
      <pattern id="poly-pat-b4" width="12" height="12" patternTransform="rotate(30 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="12" stroke="#6ee7b7" stroke-width="2"/>
      </pattern>
    </defs>

    <text x="360" y="24" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0369a1">MÔ HÌNH HÌNH HỌC: MIỀN NGHIỆM ĐA GIÁC OABC CỦA HỆ BẤT PHƯƠNG TRÌNH ĐIỀU HOÀ</text>

    <!-- Gốc O(110, 250) -->
    <!-- Scale: x: 1 đv = 4.0 px (60 -> 240px, 100 -> 400px), y: 1 đv = 1.7 px (80 -> 136px, 100 -> 170px, 120 -> 204px) -->
    <!-- O(110, 250) -->
    <!-- A(60, 0) -> (350, 250) -->
    <!-- B(20, 80) -> (190, 114) -->
    <!-- C(0, 100) -> (110, 80) -->

    <!-- Miền đa giác OABC -->
    <polygon points="110,250 350,250 190,114 110,80" fill="url(#poly-pat-b4)" fill-opacity="0.75" stroke="#059669" stroke-width="2"/>

    <!-- Lưới toạ độ dóng từ B(20, 80) -->
    <line x1="190" y1="114" x2="190" y2="250" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="110" y1="114" x2="190" y2="114" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4 3"/>

    <!-- Trục Ox và Oy -->
    <line x1="80" y1="250" x2="680" y2="250" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-b4-ax)"/>
    <line x1="110" y1="270" x2="110" y2="35" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-b4-ax)"/>

    <text x="670" y="270" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">x (Máy 2 chiều)</text>
    <text x="35" y="42" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">y (Máy 1 chiều)</text>
    <text x="96" y="264" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#64748b">O(0;0)</text>

    <!-- Đường d1: 2x + y = 120 (đi qua (60,0) và (0,120) -> (110, 46)) -->
    <line x1="375" y1="265" x2="95" y2="30" stroke="#dc2626" stroke-width="2.2"/>
    <text x="360" y="225" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">d₁: 2x + y = 120 (Vốn 1,2 tỉ)</text>

    <!-- Đường d2: x + y = 100 (đi qua (100,0)->(510,250) và (0,100)->(110,80)) -->
    <line x1="535" y1="265" x2="95" y2="72" stroke="#2563eb" stroke-width="2.2"/>
    <text x="470" y="210" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="bold" fill="#2563eb">d₂: x + y = 100 (Nhu cầu 100 máy)</text>

    <!-- Các đỉnh đa giác -->
    <circle cx="350" cy="250" r="5" fill="#059669"/>
    <text x="350" y="270" text-anchor="middle" font-size="12" font-weight="bold" fill="#059669">A(60; 0)</text>

    <circle cx="110" cy="80" r="5" fill="#059669"/>
    <text x="96" y="85" text-anchor="end" font-size="12" font-weight="bold" fill="#059669">C(0; 100)</text>

    <text x="190" y="266" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">20</text>
    <text x="96" y="118" text-anchor="end" font-size="11" font-weight="bold" fill="#0284c7">80</text>

    <!-- Điểm tối ưu B(20, 80) -->
    <circle cx="190" cy="114" r="7" fill="#f59e0b" stroke="#dc2626" stroke-width="2"/>
    <circle cx="190" cy="114" r="12" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>

    <!-- Hộp chú thích điểm cực đại -->
    <rect x="235" y="85" width="230" height="48" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))"/>
    <text x="350" y="104" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="bold" fill="#b45309">ĐIỂM TỐI ƯU B(20; 80): LÃI CỰC ĐẠI</text>
    <text x="350" y="122" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="bold" fill="#b91c1c">F_max = 3.5×20 + 2×80 = 230 TRIỆU ĐỒNG</text>
  </svg>
</div>'''

# ==============================================================================
# SVG 3: BÀI 9 LỚP 10 - ĐÒN BẨY CÂN BẰNG & KHỐI TÂM (HÌNH 4.20 SGK)
# ==============================================================================
svg_b9_hook = '''<div class="tikz-svg-wrap" style="text-align: center; margin: 16px 0;">
  <svg viewBox="0 0 720 260" style="max-width: 700px; width: 100%; height: auto; display: block; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1.5px solid #0284c7; box-shadow: 0 4px 16px rgba(2, 132, 199, 0.08);">
    <defs>
      <marker id="arr-b9-f1" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
      </marker>
      <marker id="arr-b9-f2" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
      </marker>
      <marker id="arr-b9-n" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/>
      </marker>
    </defs>

    <text x="360" y="24" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0369a1">HÌNH 4.20 SGK: NGUYÊN LÍ ĐÒN BẨY CÂN BẰNG VÀ KHỐI TÂM M (m₁·MA&#8407; + m₂·MB&#8407; = 0&#8407;)</text>

    <!-- Mặt sàn đất -->
    <line x1="80" y1="225" x2="640" y2="225" stroke="#94a3b8" stroke-width="2"/>
    <path d="M 90 225 L 80 235 M 130 225 L 120 235 M 170 225 L 160 235 M 210 225 L 200 235 M 250 225 L 240 235 M 290 225 L 280 235 M 330 225 L 320 235 M 370 225 L 360 235 M 410 225 L 400 235 M 450 225 L 440 235 M 490 225 L 480 235 M 530 225 L 520 235 M 570 225 L 560 235 M 610 225 L 600 235" stroke="#cbd5e1" stroke-width="1.5"/>

    <!-- Trụ đỡ hình tam giác tại điểm M(320, 130) -->
    <polygon points="320,130 290,225 350,225" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
    <circle cx="320" cy="130" r="4.5" fill="#16a34a"/>
    <text x="320" y="118" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#15803d">M (Điểm tựa/Khối tâm)</text>

    <!-- Thanh đòn cứng AB nằm ngang y=130, từ x=120 đến x=600 -->
    <rect x="120" y="125" width="480" height="10" rx="3" fill="#334155"/>

    <!-- Đầu A (x=140): Vật m1 (nặng hơn, gần M) -->
    <rect x="110" y="65" width="60" height="60" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
    <text x="140" y="100" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#b91c1c">Vật m₁</text>
    <circle cx="140" cy="130" r="4" fill="#dc2626"/>
    <text x="140" y="150" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">A</text>

    <!-- Trọng lực P1 tại A -->
    <line x1="140" y1="130" x2="140" y2="210" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-b9-f1)"/>
    <!-- Nhãn vectơ P1 -->
    <g transform="translate(150, 185)">
      <line x1="0" y1="-14" x2="14" y2="-14" stroke="#dc2626" stroke-width="1.5"/><path d="M 11,-16.5 L 14,-14 L 11,-11.5" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      <text x="0" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">P₁</text>
    </g>

    <!-- Đầu B (x=580): Vật m2 (nhẹ hơn, xa M) -->
    <rect x="560" y="85" width="40" height="40" rx="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    <text x="580" y="110" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="bold" fill="#0369a1">m₂</text>
    <circle cx="580" cy="130" r="4" fill="#0284c7"/>
    <text x="580" y="150" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0284c7">B</text>

    <!-- Trọng lực P2 tại B -->
    <line x1="580" y1="130" x2="580" y2="185" stroke="#0284c7" stroke-width="2.2" marker-end="url(#arr-b9-f2)"/>
    <!-- Nhãn vectơ P2 -->
    <g transform="translate(590, 165)">
      <line x1="0" y1="-14" x2="14" y2="-14" stroke="#0284c7" stroke-width="1.5"/><path d="M 11,-16.5 L 14,-14 L 11,-11.5" fill="none" stroke="#0284c7" stroke-width="1.5"/>
      <text x="0" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0284c7">P₂</text>
    </g>

    <!-- Phản lực N tại M hướng lên -->
    <line x1="320" y1="130" x2="320" y2="45" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-b9-n)"/>
    <g transform="translate(328, 65)">
      <line x1="0" y1="-14" x2="14" y2="-14" stroke="#16a34a" stroke-width="1.5"/><path d="M 11,-16.5 L 14,-14 L 11,-11.5" fill="none" stroke="#16a34a" stroke-width="1.5"/>
      <text x="0" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#16a34a">N = -(P₁ + P₂)</text>
    </g>

    <!-- Kích thước cánh tay đòn d1 và d2 -->
    <line x1="140" y1="52" x2="320" y2="52" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <text x="230" y="47" text-anchor="middle" font-size="11" fill="#475569">d₁ = MA</text>

    <line x1="320" y1="52" x2="580" y2="52" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
    <text x="450" y="47" text-anchor="middle" font-size="11" fill="#475569">d₂ = MB</text>
  </svg>
</div>'''

# ==============================================================================
# SVG 4: BÀI 6 LỚP 12 - PHÒNG HÌNH HỘP CHỮ NHẬT VÀ BÓNG ĐÈN M(1; 1.5; 2) TRONG Oxyz (HÌNH 2.34 SGK)
# ==============================================================================
svg_b12_6_hook = '''<div class="tikz-svg-wrap" style="text-align: center; margin: 16px 0;">
  <svg viewBox="0 0 720 290" style="max-width: 700px; width: 100%; height: auto; display: block; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1.5px solid #0284c7; box-shadow: 0 4px 16px rgba(2, 132, 199, 0.08);">
    <defs>
      <marker id="arr-12-ax" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a"/>
      </marker>
      <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fef08a" stop-opacity="0.9"/>
        <stop offset="60%" stop-color="#f59e0b" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <text x="360" y="24" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0369a1">HÌNH 2.34 SGK: HỆ TRỤC TOẠ ĐỘ Oxyz TRONG CĂN PHÒNG &amp; VỊ TRÍ CHIẾC BÓNG ĐÈN M(1; 1,5; 2)</text>

    <!-- Khối không gian căn phòng 3D trục phối cảnh Isometric -->
    <!-- Gốc O ở góc tường sàn (260, 220) -->
    <!-- Trục Ox hướng xéo xuống trái: dx = -1.2, dy = 0.7 -->
    <!-- Trục Oy hướng sang phải: dx = 1.6, dy = 0.0 -->
    <!-- Trục Oz hướng thẳng đứng lên: dx = 0, dy = -1.6 -->

    <!-- Mặt sàn và 2 bức tường phòng -->
    <!-- Bức tường xOz bên trái: (260,220) -> (100, 265) -> (100, 75) -> (260, 30) -->
    <polygon points="260,220 100,265 100,75 260,30" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <!-- Bức tường yOz phía sau: (260,220) -> (600, 220) -> (600, 30) -> (260, 30) -->
    <polygon points="260,220 600,220 600,30 260,30" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
    <!-- Mặt sàn xOy: (260,220) -> (100,265) -> (440,265) -> (600,220) -->
    <polygon points="260,220 100,265 440,265 600,220" fill="#fefce8" stroke="#cbd5e1" stroke-width="1.5"/>

    <!-- Các trục toạ độ chính -->
    <!-- Trục Ox -->
    <line x1="260" y1="220" x2="60" y2="276" stroke="#0f172a" stroke-width="2.2" marker-end="url(#arr-12-ax)"/>
    <text x="45" y="285" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">x</text>

    <!-- Trục Oy -->
    <line x1="260" y1="220" x2="650" y2="220" stroke="#0f172a" stroke-width="2.2" marker-end="url(#arr-12-ax)"/>
    <text x="660" y="225" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">y</text>

    <!-- Trục Oz -->
    <line x1="260" y1="220" x2="260" y2="15" stroke="#0f172a" stroke-width="2.2" marker-end="url(#arr-12-ax)"/>
    <text x="252" y="20" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">z</text>

    <text x="270" y="235" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">O(0;0;0)</text>

    <!-- Vectơ đơn vị i, j, k -->
    <line x1="260" y1="220" x2="210" y2="234" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-12-ax)"/>
    <text x="210" y="250" font-style="italic" font-weight="bold" fill="#dc2626">i&#8407;</text>

    <line x1="260" y1="220" x2="330" y2="220" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-12-ax)"/>
    <text x="315" y="210" font-style="italic" font-weight="bold" fill="#16a34a">j&#8407;</text>

    <line x1="260" y1="220" x2="260" y2="170" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-12-ax)"/>
    <text x="272" y="185" font-style="italic" font-weight="bold" fill="#2563eb">k&#8407;</text>

    <!-- Toạ độ bóng đèn M: x = 1 (1m), y = 1.5 (1.5m), z = 2 (2m) -->
    <!-- Điểm M'(x=1, y=1.5, z=0) trên sàn: x=260 - 50 + 105 = 315, y=220 + 14 = 234 -->
    <!-- Điểm M(x=1, y=1.5, z=2): x=315, y=234 - 100 = 134 -->

    <!-- Đường dóng hình hộp chữ nhật không gian -->
    <line x1="210" y1="234" x2="315" y2="234" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
    <line x1="365" y1="220" x2="315" y2="234" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>

    <!-- Hình chiếu M' trên sàn -->
    <circle cx="315" cy="234" r="3.5" fill="#0284c7"/>
    <text x="325" y="248" font-size="11" font-weight="bold" fill="#0284c7">M'(1; 1,5; 0)</text>

    <!-- Dóng đứng từ M' lên M -->
    <line x1="315" y1="234" x2="315" y2="134" stroke="#d97706" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="325" y="184" font-size="11" font-weight="bold" fill="#d97706">z = 2 m</text>

    <!-- Dây treo bóng đèn từ trần -->
    <line x1="315" y1="30" x2="315" y2="134" stroke="#475569" stroke-width="1.2"/>

    <!-- Vầng sáng bóng đèn M -->
    <circle cx="315" cy="134" r="24" fill="url(#lampGlow)"/>
    <circle cx="315" cy="134" r="6" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5"/>

    <!-- Nhãn bóng đèn M -->
    <rect x="330" y="115" width="220" height="36" rx="6" fill="#0f172a" fill-opacity="0.9"/>
    <text x="440" y="132" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="bold" fill="#fde047">💡 Bóng đèn M(1; 1,5; 2)</text>
    <text x="440" y="145" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="10" fill="#e2e8f0">OM&#8407; = 1·i&#8407; + 1,5·j&#8407; + 2·k&#8407;</text>
  </svg>
</div>'''

print("Created all 4 TikZ SVG graphics!")
