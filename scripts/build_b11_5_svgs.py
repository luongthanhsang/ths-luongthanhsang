# -*- coding: utf-8 -*-
"""
Tạo dữ liệu bài học số chuẩn 5 sao Thầy Sáng:
BÀI 5: DÃY SỐ (LỚP 11 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
SGK Toán 11 Tập 1, Chương II, Trang 42-46
"""
import os
import json

# Định nghĩa các SVG chất lượng cao
SVG_HOOK = '''<svg viewBox="0 0 760 260" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <linearGradient id="popGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0.02"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
  </defs>

  <!-- Lưới toạ độ nhạt -->
  <line x1="80" y1="190" x2="700" y2="190" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="80" y1="140" x2="700" y2="140" stroke="#f1f5f9" stroke-width="1"/>
  <line x1="80" y1="90" x2="700" y2="90" stroke="#f1f5f9" stroke-width="1"/>

  <!-- Trục toạ độ Ox, Oy -->
  <line x1="80" y1="210" x2="710" y2="210" stroke="#334155" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="120" y1="225" x2="120" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="705" y="230" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155">Năm (n)</text>
  <text x="80" y="32" font-family="sans-serif" font-size="13" font-weight="bold" fill="#334155">Dân số Pₙ (nghìn người)</text>
  <text x="105" y="225" font-family="sans-serif" font-size="12" font-weight="bold" fill="#64748b">O</text>

  <!-- Miền diện tích tăng trưởng -->
  <path d="M 120 180 Q 380 155 640 90 L 640 210 L 120 210 Z" fill="url(#popGrad)"/>

  <!-- Đường cong tăng trưởng dân số P_n = 500(1.02)^n -->
  <path d="M 120 180 Q 380 155 640 90" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Mốc năm 2020 (n = 0): 500 nghìn người -->
  <circle cx="120" cy="180" r="5" fill="#2563eb"/>
  <line x1="120" y1="180" x2="120" y2="210" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="105" y="228" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">2020 (n=0)</text>
  <text x="50" y="184" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb">500</text>

  <!-- Mốc năm 2025 (n = 5): 552 nghìn người -->
  <circle cx="380" cy="142" r="5" fill="#d97706"/>
  <line x1="380" y1="142" x2="380" y2="210" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="120" y1="142" x2="380" y2="142" stroke="#d97706" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="355" y="228" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">2025 (n=5)</text>
  <text x="50" y="146" font-family="sans-serif" font-size="12" font-weight="bold" fill="#d97706">≈ 552</text>
  <text x="390" y="136" font-family="sans-serif" font-size="11" font-weight="bold" fill="#d97706">P₅ ≈ 552k</text>

  <!-- Mốc năm 2030 (n = 10): 609 nghìn người -->
  <circle cx="640" cy="90" r="6" fill="#dc2626"/>
  <line x1="640" y1="90" x2="640" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="120" y1="90" x2="640" y2="90" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="610" y="228" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e293b">2030 (n=10)</text>
  <text x="50" y="94" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">≈ 609</text>
  <text x="615" y="78" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626">P₁₀ ≈ 609k người</text>

  <!-- Hộp chú giải mô hình -->
  <rect x="420" y="32" width="280" height="32" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
  <text x="432" y="52" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8">Mô hình tăng trưởng: Pₙ = 500 · (1 + 0,02)ⁿ</text>
</svg>'''

SVG_TREE = '''<svg viewBox="0 0 760 210" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <!-- Khối gốc -->
  <rect x="290" y="16" width="180" height="42" rx="8" fill="#1e293b"/>
  <text x="380" y="42" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">KHÁI NIỆM DÃY SỐ</text>

  <!-- Đường nối phân nhánh -->
  <path d="M 340 58 L 340 85 L 180 85 L 180 105" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <path d="M 420 58 L 420 85 L 580 85 L 580 105" fill="none" stroke="#16a34a" stroke-width="2.5"/>

  <!-- Nhánh 1: Dãy số vô hạn -->
  <rect x="60" y="105" width="240" height="88" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>
  <text x="180" y="128" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">1. DÃY SỐ VÔ HẠN</text>
  <text x="180" y="148" font-family="sans-serif" font-size="11.5" fill="#1e293b" text-anchor="middle">Hàm số u: ℕ* → ℝ (n ∈ {1, 2, 3, ...})</text>
  <text x="180" y="168" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">Khai triển: u₁, u₂, u₃, ..., uₙ, ...</text>
  <text x="180" y="184" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#0284c7" text-anchor="middle">Số hạng đầu u₁, số hạng tổng quát uₙ</text>

  <!-- Nhánh 2: Dãy số hữu hạn -->
  <rect x="460" y="105" width="240" height="88" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
  <text x="580" y="128" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d" text-anchor="middle">2. DÃY SỐ HỮU HẠN</text>
  <text x="580" y="148" font-family="sans-serif" font-size="11.5" fill="#1e293b" text-anchor="middle">Hàm số u: {1, 2, ..., m} → ℝ (m hữu hạn)</text>
  <text x="580" y="168" font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle">Khai triển: u₁, u₂, ..., uₘ</text>
  <text x="580" y="184" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#16a34a" text-anchor="middle">Số hạng đầu u₁, số hạng cuối uₘ</text>
</svg>'''

SVG_NUMBER_LINE = '''<svg viewBox="0 0 760 180" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <marker id="arrowLine" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/>
    </marker>
  </defs>

  <text x="380" y="28" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">
    BIỂU DIỄN CÁC SỐ HẠNG CỦA DÃY SỐ uₙ = (-1)ⁿ / 2ⁿ TRÊN TRỤC SỐ (SGK TRANG 45)
  </text>

  <!-- Trục số chính -->
  <line x1="40" y1="100" x2="720" y2="100" stroke="#1e293b" stroke-width="2.5" marker-end="url(#arrowLine)"/>

  <!-- Mốc -1 và 1 -->
  <line x1="80" y1="92" x2="80" y2="108" stroke="#64748b" stroke-width="2"/>
  <text x="80" y="125" font-family="sans-serif" font-size="12" font-weight="bold" fill="#64748b" text-anchor="middle">-1</text>

  <line x1="680" y1="92" x2="680" y2="108" stroke="#64748b" stroke-width="2"/>
  <text x="680" y="125" font-family="sans-serif" font-size="12" font-weight="bold" fill="#64748b" text-anchor="middle">1</text>

  <!-- Gốc toạ độ 0 -->
  <line x1="380" y1="88" x2="380" y2="112" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="380" cy="100" r="4" fill="#dc2626"/>
  <text x="380" y="128" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">0</text>

  <!-- u1 = -1/2 (x = 380 - 150 = 230) -->
  <line x1="230" y1="92" x2="230" y2="108" stroke="#2563eb" stroke-width="2"/>
  <circle cx="230" cy="100" r="4.5" fill="#2563eb"/>
  <text x="230" y="78" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">-1/2</text>
  <text x="230" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">u₁</text>

  <!-- u2 = 1/4 (x = 380 + 75 = 455) -->
  <line x1="455" y1="92" x2="455" y2="108" stroke="#16a34a" stroke-width="2"/>
  <circle cx="455" cy="100" r="4.5" fill="#16a34a"/>
  <text x="455" y="78" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">1/4</text>
  <text x="455" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">u₂</text>

  <!-- u3 = -1/8 (x = 380 - 37.5 = 342.5) -->
  <line x1="342.5" y1="92" x2="342.5" y2="108" stroke="#2563eb" stroke-width="1.8"/>
  <circle cx="342.5" cy="100" r="4" fill="#2563eb"/>
  <text x="340" y="78" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">-1/8</text>
  <text x="342.5" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">u₃</text>

  <!-- u4 = 1/16 (x = 380 + 18.75 = 398.75) -->
  <line x1="399" y1="92" x2="399" y2="108" stroke="#16a34a" stroke-width="1.8"/>
  <circle cx="399" cy="100" r="3.5" fill="#16a34a"/>
  <text x="412" y="78" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#16a34a" text-anchor="middle">1/16</text>
  <text x="408" y="148" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a" text-anchor="middle">u₄</text>

  <!-- u5 = -1/32 (x = 380 - 9.375 = 370.6) -->
  <line x1="371" y1="92" x2="371" y2="108" stroke="#2563eb" stroke-width="1.5"/>
  <circle cx="371" cy="100" r="3" fill="#2563eb"/>
  <text x="360" y="62" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">-1/32</text>
  <text x="365" y="152" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">u₅</text>

  <!-- Chú thích quy luật hội tụ -->
  <rect x="520" y="38" width="220" height="26" rx="6" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="630" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">Các số hạng dao động hội tụ về 0</text>
</svg>'''

SVG_MONOTONIC = '''<svg viewBox="0 0 760 220" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <marker id="arr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
  </defs>

  <!-- BẢNG TRÁI: DÃY SỐ TĂNG -->
  <g transform="translate(10, 0)">
    <rect x="20" y="15" width="340" height="190" rx="10" fill="#f8fafc" stroke="#bfdbfe" stroke-width="1.5"/>
    <text x="190" y="38" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">DÃY SỐ TĂNG: uₙ₊₁ &gt; uₙ (∀n ∈ ℕ*)</text>
    
    <!-- Trục tọa độ -->
    <line x1="50" y1="175" x2="330" y2="175" stroke="#64748b" stroke-width="1.8" marker-end="url(#arr2)"/>
    <line x1="70" y1="185" x2="70" y2="55" stroke="#64748b" stroke-width="1.8" marker-end="url(#arr2)"/>
    <text x="325" y="192" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">n</text>
    <text x="55" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">uₙ</text>

    <!-- Các điểm chấm tăng dần u1, u2, u3, u4, u5 -->
    <circle cx="105" cy="150" r="4.5" fill="#2563eb"/><text x="105" y="140" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2563eb" text-anchor="middle">u₁</text>
    <circle cx="150" cy="130" r="4.5" fill="#2563eb"/><text x="150" y="120" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2563eb" text-anchor="middle">u₂</text>
    <circle cx="195" cy="105" r="4.5" fill="#2563eb"/><text x="195" y="95" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2563eb" text-anchor="middle">u₃</text>
    <circle cx="240" cy="80" r="4.5" fill="#2563eb"/><text x="240" y="70" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2563eb" text-anchor="middle">u₄</text>
    <circle cx="285" cy="55" r="5" fill="#2563eb"/><text x="285" y="45" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#2563eb" text-anchor="middle">u₅</text>

    <!-- Đường nét đứt nối các điểm -->
    <path d="M 105 150 L 150 130 L 195 105 L 240 80 L 285 55" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="190" y="198" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">uₙ₊₁ - uₙ &gt; 0 (Đồ thị đi lên theo n)</text>
  </g>

  <!-- BẢNG PHẢI: DÃY SỐ GIẢM -->
  <g transform="translate(390, 0)">
    <rect x="20" y="15" width="340" height="190" rx="10" fill="#f8fafc" stroke="#fecaca" stroke-width="1.5"/>
    <text x="190" y="38" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">DÃY SỐ GIẢM: uₙ₊₁ &lt; uₙ (∀n ∈ ℕ*)</text>
    
    <!-- Trục tọa độ -->
    <line x1="50" y1="175" x2="330" y2="175" stroke="#64748b" stroke-width="1.8" marker-end="url(#arr2)"/>
    <line x1="70" y1="185" x2="70" y2="55" stroke="#64748b" stroke-width="1.8" marker-end="url(#arr2)"/>
    <text x="325" y="192" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">n</text>
    <text x="55" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#64748b">uₙ</text>

    <!-- Các điểm chấm giảm dần u1, u2, u3, u4, u5 -->
    <circle cx="105" cy="65" r="5" fill="#dc2626"/><text x="105" y="55" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#dc2626" text-anchor="middle">u₁</text>
    <circle cx="150" cy="90" r="4.5" fill="#dc2626"/><text x="150" y="80" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#dc2626" text-anchor="middle">u₂</text>
    <circle cx="195" cy="115" r="4.5" fill="#dc2626"/><text x="195" y="105" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#dc2626" text-anchor="middle">u₃</text>
    <circle cx="240" cy="135" r="4.5" fill="#dc2626"/><text x="240" y="125" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#dc2626" text-anchor="middle">u₄</text>
    <circle cx="285" cy="150" r="4.5" fill="#dc2626"/><text x="285" y="140" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#dc2626" text-anchor="middle">u₅</text>

    <!-- Đường nét đứt nối các điểm -->
    <path d="M 105 65 L 150 90 L 195 115 L 240 135 L 285 150" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="190" y="198" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">uₙ₊₁ - uₙ &lt; 0 (Đồ thị đi xuống theo n)</text>
  </g>
</svg>'''

SVG_BOUNDED = '''<svg viewBox="0 0 760 210" style="max-width:100%; height:auto; background:#ffffff; border-radius:12px; border:1.5px solid #cbd5e1; box-shadow:0 4px 16px rgba(15,23,42,0.06);">
  <defs>
    <linearGradient id="bandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#10b981" stop-opacity="0.04"/>
    </linearGradient>
    <marker id="arr3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
  </defs>

  <!-- Dải bị chặn kẹp giữa m và M -->
  <rect x="100" y="60" width="580" height="90" fill="url(#bandGrad)"/>

  <!-- Đường biên trên M (Chặn trên) -->
  <line x1="70" y1="60" x2="710" y2="60" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="50" y="65" font-family="sans-serif" font-size="13" font-weight="bold" fill="#dc2626">y = M</text>
  <text x="715" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">Chặn trên (uₙ ≤ M)</text>

  <!-- Đường biên dưới m (Chặn dưới) -->
  <line x1="70" y1="150" x2="710" y2="150" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="50" y="155" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2563eb">y = m</text>
  <text x="715" y="155" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb">Chặn dưới (uₙ ≥ m)</text>

  <!-- Trục toạ độ Ox, Oy -->
  <line x1="70" y1="180" x2="710" y2="180" stroke="#334155" stroke-width="2" marker-end="url(#arr3)"/>
  <line x1="100" y1="195" x2="100" y2="30" stroke="#334155" stroke-width="2" marker-end="url(#arr3)"/>
  <text x="705" y="198" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155">n</text>
  <text x="80" y="32" font-family="sans-serif" font-size="12" font-weight="bold" fill="#334155">uₙ</text>

  <!-- Các điểm số hạng dao động kẹp giữa m và M -->
  <!-- Ví dụ dãy u_n = (n-1)/n = 1 - 1/n kẹp giữa [0, 1) -->
  <circle cx="150" cy="150" r="5" fill="#059669"/><text x="150" y="140" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">u₁ = 0</text>
  <circle cx="220" cy="105" r="4.5" fill="#059669"/><text x="220" y="95" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">u₂ = 1/2</text>
  <circle cx="290" cy="90" r="4.5" fill="#059669"/><text x="290" y="80" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">u₃ = 2/3</text>
  <circle cx="360" cy="82" r="4" fill="#059669"/><text x="360" y="73" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">u₄ = 3/4</text>
  <circle cx="430" cy="78" r="4" fill="#059669"/><text x="430" y="69" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">u₅ = 4/5</text>
  <circle cx="500" cy="75" r="3.5" fill="#059669"/>
  <circle cx="570" cy="72" r="3.5" fill="#059669"/>
  <circle cx="640" cy="70" r="3.5" fill="#059669"/><text x="640" y="61" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">uₙ → 1</text>

  <!-- Hộp chú thích -->
  <rect x="250" y="16" width="320" height="28" rx="6" fill="#ecfdf5" stroke="#10b981"/>
  <text x="410" y="35" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">DÃY BỊ CHẶN: ∃ m, M sao cho m ≤ uₙ ≤ M, ∀n ∈ ℕ*</text>
</svg>'''

print("SVGs prepared successfully!")
