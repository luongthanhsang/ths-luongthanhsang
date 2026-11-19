# -*- coding: utf-8 -*-
import math

def generate_spiral_svg():
    # Helper to generate smooth path string
    def spiral_path(cx, cy, r_start, r_end, theta_start, theta_end, clockwise=False, steps=100):
        pts = []
        for i in range(steps + 1):
            t = i / steps
            theta = theta_start + t * (theta_end - theta_start)
            r = r_start + t * (r_end - r_start)
            if not clockwise: # Positive: counter-clockwise (angle up)
                x = cx + r * math.cos(theta)
                y = cy - r * math.sin(theta)
            else: # Negative: clockwise (angle down)
                x = cx + r * math.cos(theta)
                y = cy + r * math.sin(theta)
            pts.append(f"{x:.1f},{y:.1f}")
        return "M " + " L ".join(pts)

    # 1. Spiral 360 (counter-clockwise, 1 turn)
    # Starts from (cx + 8, cy), coils CCW to (cx + 36, cy)
    cx1, cy1 = 80, 110
    path1 = spiral_path(cx1, cy1, 8, 36, 0, 2*math.pi, clockwise=False, steps=80)
    # Arrowhead at end of 360: end is at (cx1 + 36, cy1) = (116, 110), pointing DOWN
    arrow1 = f'<polygon points="116,118 111.5,106 120.5,106" fill="#dc2626"/>'

    # 2. Spiral 720 (counter-clockwise, 2 turns)
    # Starts from (cx + 6, cy), coils CCW to (cx + 42, cy)
    cx2, cy2 = 280, 110
    path2 = spiral_path(cx2, cy2, 6, 42, 0, 4*math.pi, clockwise=False, steps=140)
    # Arrowhead at end of 720: end is at (cx2 + 42, cy2) = (322, 110), pointing DOWN
    arrow2 = f'<polygon points="322,118 317.5,106 326.5,106" fill="#dc2626"/>'

    # 3. Semi-circle -180 (clockwise, 0.5 turn)
    # Starts on ray Ou at (cx3 + 46, cy3), curves down and around to (cx3 - 46, cy3) on ray Ov
    cx3, cy3 = 490, 110
    r3 = 42
    # SVG arc from (cx3 + r3, cy3) to (cx3 - r3, cy3) below the axis
    path3 = f"M {cx3 + r3} {cy3} A {r3} {r3} 0 0 1 {cx3 - r3} {cy3}"
    # Arrowhead at end of -180: at (cx3 - r3, cy3) = (448, 110), pointing UP
    arrow3 = f'<polygon points="{cx3 - r3},102 {cx3 - r3 - 4.5},114 {cx3 - r3 + 4.5},114" fill="#dc2626"/>'

    # 4. Spiral -540 (clockwise, 1.5 turns)
    # Starts from (cx4 + 6, cy4), coils CW 1.5 turns (3*pi) to (cx4 - 44, cy4) on ray Ov
    cx4, cy4 = 700, 110
    path4 = spiral_path(cx4, cy4, 6, 44, 0, 3*math.pi, clockwise=True, steps=120)
    # Arrowhead at end of -540: at (cx4 - 44, cy4) = (656, 110), pointing UP
    arrow4 = f'<polygon points="{cx4 - 44},102 {cx4 - 44 - 4.5},114 {cx4 - 44 + 4.5},114" fill="#dc2626"/>'

    svg = f'''<svg width="780" height="240" viewBox="0 0 780 240" xmlns="http://www.w3.org/2000/svg" style="background: #ffffff; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
  <defs>
    <!-- Mũi tên đen nhỏ cho hướng quay + và - -->
    <marker id="sharpBlackArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 1 2 L 8 5 L 1 8 z" fill="#1e293b"/>
    </marker>
  </defs>

  <!-- ==================== HÌNH 1: sđ(Ou, Ov) = 360° ==================== -->
  <g>
    <!-- Tia Ou, Ov nằm ngang -->
    <line x1="{cx1}" y1="{cy1}" x2="{cx1 + 105}" y2="{cy1}" stroke="#1e293b" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="{cx1}" cy="{cy1}" r="3.5" fill="#0284c7"/>
    <text x="{cx1 - 5}" y="{cy1 + 22}" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="{cx1 + 80}" y="{cy1 + 22}" fill="#0284c7" font-size="14" font-style="italic">u, v</text>

    <!-- Tia phụ Om nét đứt chiều dương -->
    <line x1="{cx1}" y1="{cy1}" x2="{cx1 + 75}" y2="{cy1 - 42}" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="{cx1 + 72}" y="{cy1 - 48}" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>

    <!-- Mũi tên cong nhỏ chỉ chiều dương (+) -->
    <path d="M {cx1 + 42} {cy1 - 12} A 32 32 0 0 1 {cx1 + 32} {cy1 - 32}" fill="none" stroke="#1e293b" stroke-width="1.6" marker-end="url(#sharpBlackArrow)"/>
    <text x="{cx1 + 45}" y="{cy1 - 24}" fill="#1e293b" font-size="13" font-weight="bold">+</text>

    <!-- Xoắn ốc đỏ 360° -->
    <path d="{path1}" fill="none" stroke="#dc2626" stroke-width="2.4" stroke-linecap="round"/>
    {arrow1}

    <text x="{cx1 + 35}" y="210" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="bold">sđ (Ou, Ov) = 360°</text>
  </g>

  <!-- Vạch phân cách dọc 1 -->
  <line x1="185" y1="20" x2="185" y2="220" stroke="#f1f5f9" stroke-width="2"/>

  <!-- ==================== HÌNH 2: sđ(Ou, Ov) = 720° ==================== -->
  <g>
    <!-- Tia Ou, Ov nằm ngang -->
    <line x1="{cx2}" y1="{cy2}" x2="{cx2 + 105}" y2="{cy2}" stroke="#1e293b" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="{cx2}" cy="{cy2}" r="3.5" fill="#0284c7"/>
    <text x="{cx2 - 5}" y="{cy2 + 22}" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="{cx2 + 80}" y="{cy2 + 22}" fill="#0284c7" font-size="14" font-style="italic">u, v</text>

    <!-- Tia phụ Om nét đứt chiều dương -->
    <line x1="{cx2}" y1="{cy2}" x2="{cx2 + 75}" y2="{cy2 - 42}" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="{cx2 + 72}" y="{cy2 - 48}" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>

    <!-- Mũi tên cong nhỏ chỉ chiều dương (+) -->
    <path d="M {cx2 + 48} {cy2 - 12} A 36 36 0 0 1 {cx2 + 36} {cy2 - 34}" fill="none" stroke="#1e293b" stroke-width="1.6" marker-end="url(#sharpBlackArrow)"/>
    <text x="{cx2 + 50}" y="{cy2 - 25}" fill="#1e293b" font-size="13" font-weight="bold">+</text>

    <!-- Xoắn ốc đỏ 720° (2 vòng) -->
    <path d="{path2}" fill="none" stroke="#dc2626" stroke-width="2.4" stroke-linecap="round"/>
    {arrow2}

    <text x="{cx2 + 35}" y="210" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="bold">sđ (Ou, Ov) = 720°</text>
  </g>

  <!-- Vạch phân cách dọc 2 -->
  <line x1="385" y1="20" x2="385" y2="220" stroke="#f1f5f9" stroke-width="2"/>

  <!-- ==================== HÌNH 3: sđ(Ou, Ov) = -180° ==================== -->
  <g>
    <!-- Trục ngang qua O: Ou sang phải, Ov sang trái -->
    <line x1="{cx3 - 85}" y1="{cy3}" x2="{cx3}" y2="{cy3}" stroke="#dc2626" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="{cx3}" y1="{cy3}" x2="{cx3 + 85}" y2="{cy3}" stroke="#1e293b" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="{cx3}" cy="{cy3}" r="3.5" fill="#0284c7"/>
    <text x="{cx3 - 5}" y="{cy3 - 14}" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="{cx3 + 70}" y="{cy3 + 22}" fill="#0284c7" font-size="14" font-style="italic">u</text>
    <text x="{cx3 - 75}" y="{cy3 + 22}" fill="#0284c7" font-size="14" font-style="italic">v</text>

    <!-- Tia phụ Om nét đứt chiều âm (dưới trục) -->
    <line x1="{cx3}" y1="{cy3}" x2="{cx3 + 65}" y2="{cy3 + 42}" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="{cx3 + 60}" y="{cy3 + 60}" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>

    <!-- Mũi tên cong nhỏ chỉ chiều âm (-) -->
    <path d="M {cx3 + 36} {cy3 + 8} A 28 28 0 0 1 {cx3 + 50} {cy3 + 26}" fill="none" stroke="#1e293b" stroke-width="1.6" marker-end="url(#sharpBlackArrow)"/>
    <text x="{cx3 + 56}" y="{cy3 + 20}" fill="#1e293b" font-size="13" font-weight="bold">-</text>

    <!-- Cung đỏ -180° -->
    <path d="{path3}" fill="none" stroke="#dc2626" stroke-width="2.4" stroke-linecap="round"/>
    {arrow3}

    <text x="{cx3}" y="210" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="bold">sđ (Ou, Ov) = -180°</text>
  </g>

  <!-- Vạch phân cách dọc 3 -->
  <line x1="595" y1="20" x2="595" y2="220" stroke="#f1f5f9" stroke-width="2"/>

  <!-- ==================== HÌNH 4: sđ(Ou, Ov) = -540° ==================== -->
  <g>
    <!-- Trục ngang qua O: Ou sang phải, Ov sang trái -->
    <line x1="{cx4 - 85}" y1="{cy4}" x2="{cx4}" y2="{cy4}" stroke="#dc2626" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="{cx4}" y1="{cy4}" x2="{cx4 + 85}" y2="{cy4}" stroke="#1e293b" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="{cx4}" cy="{cy4}" r="3.5" fill="#0284c7"/>
    <text x="{cx4 - 5}" y="{cy4 - 14}" fill="#0284c7" font-size="14" font-weight="bold">O</text>
    <text x="{cx4 + 70}" y="{cy4 + 22}" fill="#0284c7" font-size="14" font-style="italic">u</text>
    <text x="{cx4 - 75}" y="{cy4 + 22}" fill="#0284c7" font-size="14" font-style="italic">v</text>

    <!-- Tia phụ Om nét đứt chiều âm (dưới trục) -->
    <line x1="{cx4}" y1="{cy4}" x2="{cx4 + 65}" y2="{cy4 + 42}" stroke="#0d9488" stroke-width="1.8" stroke-dasharray="4 3"/>
    <text x="{cx4 + 60}" y="{cy4 + 60}" fill="#0d9488" font-size="14" font-style="italic" font-weight="bold">m</text>

    <!-- Mũi tên cong nhỏ chỉ chiều âm (-) -->
    <path d="M {cx4 + 36} {cy4 + 8} A 28 28 0 0 1 {cx4 + 50} {cy4 + 26}" fill="none" stroke="#1e293b" stroke-width="1.6" marker-end="url(#sharpBlackArrow)"/>
    <text x="{cx4 + 56}" y="{cy4 + 20}" fill="#1e293b" font-size="13" font-weight="bold">-</text>

    <!-- Xoắn ốc đỏ -540° (1.5 vòng) -->
    <path d="{path4}" fill="none" stroke="#dc2626" stroke-width="2.4" stroke-linecap="round"/>
    {arrow4}

    <text x="{cx4}" y="210" text-anchor="middle" fill="#0f172a" font-size="15" font-weight="bold">sđ (Ou, Ov) = -540°</text>
  </g>
</svg>'''
    return svg

print("SVG length:", len(generate_spiral_svg()))
