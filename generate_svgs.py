# -*- coding: utf-8 -*-
"""
Script to generate precise TikZ-style SVG diagrams for the Mid-term Math 12 Exam:
- Câu 1: Bậc bốn trùng phương
- Câu 6: Phân thức bậc 2 trên bậc 1 với TCĐ x=2 và TCX y=x-1
- Câu 7: Bảng biến thiên R \ {1}
- Câu 8: Đồ thị hàm phân thức y = (2x-4)/(x+1) với TCĐ x=-1, TCN y=2
- Câu 10: Bảng biến thiên R \ {-1}
- Câu 12: Bảng biến thiên trên [-3; 2]
- Phần II Câu 1: Đồ thị bậc ba y = x^3 - 3x^2 + 2
- Phần II Câu 3: Bảng biến thiên R \ {2}
- Phần III Câu 5: Sườn đồi và cáp treo
- Phần III Câu 6: Phòng triển lãm và cảm biến LiDAR
"""
import math

def svg_header(w, h):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" class="tikz-svg" style="max-width: 100%; height: auto; display: block; margin: 15px auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">'

def defs_markers():
    return '''<defs>
  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
  </marker>
  <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#dc2626"/>
  </marker>
  <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#2563eb"/>
  </marker>
</defs>'''

# 1. Câu 1 Đồ thị bậc 4 trùng phương
def generate_cau1():
    w, h = 360, 240
    ox, oy = 180, 160
    sx, sy = 55, 30
    
    # y = -(x^2 - 2)^2 + 3 = -x^4 + 4x^2 - 1
    points = []
    for i in range(-120, 121):
        x = i / 50.0 # -2.4 to 2.4
        y = -(x**2 - 2)**2 + 3
        px = ox + x * sx
        py = oy - y * sy
        if 15 <= py <= h - 15:
            points.append((px, py))
    
    d_path = "M " + " L ".join([f"{p[0]:.1f},{p[1]:.1f}" for p in points])
    
    # Key points:
    # x = -sqrt(2) approx -1.414, y = 3
    # x = sqrt(2) approx 1.414, y = 3
    # x = 0, y = -1
    x_m = -math.sqrt(2)
    x_p = math.sqrt(2)
    
    px_m, py_m = ox + x_m * sx, oy - 3 * sy
    px_p, py_p = ox + x_p * sx, oy - 3 * sy
    px_0, py_0 = ox, oy - (-1) * sy
    
    svg = [svg_header(w, h), defs_markers()]
    # Grid lines / axes
    # Ox: from 20 to 340 at y = oy
    svg.append(f'<line x1="20" y1="{oy}" x2="340" y2="{oy}" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arrow)"/>')
    # Oy: from 225 to 15 at x = ox
    svg.append(f'<line x1="{ox}" y1="{h-15}" x2="{ox}" y2="15" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arrow)"/>')
    svg.append(f'<text x="345" y="{oy+4}" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="#1e293b">x</text>')
    svg.append(f'<text x="{ox+6}" y="18" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="#1e293b">y</text>')
    svg.append(f'<text x="{ox-14}" y="{oy+14}" font-family="Times New Roman, serif" font-size="14" font-style="italic" fill="#1e293b">O</text>')
    
    # Dashed lines for (-sqrt(2), 3) and (sqrt(2), 3)
    svg.append(f'<line x1="{px_m:.1f}" y1="{oy}" x2="{px_m:.1f}" y2="{py_m:.1f}" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>')
    svg.append(f'<line x1="{px_p:.1f}" y1="{oy}" x2="{px_p:.1f}" y2="{py_p:.1f}" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>')
    svg.append(f'<line x1="{px_m:.1f}" y1="{py_m:.1f}" x2="{px_p:.1f}" y2="{py_p:.1f}" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>')
    
    # Tick labels
    svg.append(f'<text x="{px_m:.1f}" y="{oy+16}" font-family="Times New Roman, serif" font-size="13" text-anchor="middle" fill="#1e293b">-√2</text>')
    svg.append(f'<text x="{px_p:.1f}" y="{oy+16}" font-family="Times New Roman, serif" font-size="13" text-anchor="middle" fill="#1e293b">√2</text>')
    svg.append(f'<text x="{ox-12}" y="{py_m+4:.1f}" font-family="Times New Roman, serif" font-size="13" text-anchor="end" fill="#1e293b">3</text>')
    svg.append(f'<text x="{ox-8}" y="{py_0+4:.1f}" font-family="Times New Roman, serif" font-size="13" text-anchor="end" fill="#1e293b">-1</text>')
    
    # Curve
    svg.append(f'<path d="{d_path}" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/>')
    
    # Dots on extreme points
    svg.append(f'<circle cx="{px_m:.1f}" cy="{py_m:.1f}" r="3.5" fill="#dc2626"/>')
    svg.append(f'<circle cx="{px_p:.1f}" cy="{py_p:.1f}" r="3.5" fill="#dc2626"/>')
    svg.append(f'<circle cx="{px_0:.1f}" cy="{py_0:.1f}" r="3.5" fill="#dc2626"/>')
    
    svg.append('</svg>')
    return "".join(svg)

# 2. Câu 6 Đồ thị phân thức bậc 2 trên bậc 1: y = (x^2 - 3x + 3)/(x - 2)
def generate_cau6():
    w, h = 360, 260
    ox, oy = 130, 150
    sx, sy = 40, 25
    
    # Asymptotes:
    # TCĐ: x = 2
    px_asymp_x = ox + 2 * sx
    # TCX: y = x - 1
    # points for y = x - 1: x from -1 to 5
    p1_tcx = (ox + (-1) * sx, oy - (-2) * sy)
    p2_tcx = (ox + 5.2 * sx, oy - (4.2) * sy)
    
    # Branch 1: x < 2 (e.g. -1 to 1.85)
    b1_pts = []
    for i in range(-50, 93): # x from -1 to 1.84
        x = i / 50.0
        if x < 1.95:
            y = (x**2 - 3*x + 3) / (x - 2)
            px = ox + x * sx
            py = oy - y * sy
            if -10 <= py <= h + 10:
                b1_pts.append((px, py))
    d1 = "M " + " L ".join([f"{p[0]:.1f},{p[1]:.1f}" for p in b1_pts])
    
    # Branch 2: x > 2 (e.g. 2.15 to 5.2)
    b2_pts = []
    for i in range(108, 261): # x from 2.16 to 5.2
        x = i / 50.0
        y = (x**2 - 3*x + 3) / (x - 2)
        px = ox + x * sx
        py = oy - y * sy
        if -10 <= py <= h + 10:
            b2_pts.append((px, py))
    d2 = "M " + " L ".join([f"{p[0]:.1f},{p[1]:.1f}" for p in b2_pts])
    
    svg = [svg_header(w, h), defs_markers()]
    # Axes
    svg.append(f'<line x1="20" y1="{oy}" x2="340" y2="{oy}" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arrow)"/>')
    svg.append(f'<line x1="{ox}" y1="{h-15}" x2="{ox}" y2="15" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arrow)"/>')
    svg.append(f'<text x="345" y="{oy+4}" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="#1e293b">x</text>')
    svg.append(f'<text x="{ox+6}" y="18" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="#1e293b">y</text>')
    svg.append(f'<text x="{ox-14}" y="{oy+14}" font-family="Times New Roman, serif" font-size="14" font-style="italic" fill="#1e293b">O</text>')
    
    # Asymptotes (red dashed)
    svg.append(f'<line x1="{px_asymp_x}" y1="15" x2="{px_asymp_x}" y2="{h-15}" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="5,4"/>')
    svg.append(f'<line x1="{p1_tcx[0]:.1f}" y1="{p1_tcx[1]:.1f}" x2="{p2_tcx[0]:.1f}" y2="{p2_tcx[1]:.1f}" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="5,4"/>')
    
    # Ticks & labels: x = 1, x = 2, x = 3, y = -1, y = 3
    # Cực đại (1; -1):
    cd_x, cd_y = ox + 1 * sx, oy - (-1) * sy
    # Cực tiểu (3; 3):
    ct_x, ct_y = ox + 3 * sx, oy - 3 * sy
    
    # Dashed for CĐ & CT
    svg.append(f'<line x1="{cd_x}" y1="{oy}" x2="{cd_x}" y2="{cd_y}" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3,3"/>')
    svg.append(f'<line x1="{ox}" y1="{cd_y}" x2="{cd_x}" y2="{cd_y}" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3,3"/>')
    svg.append(f'<line x1="{ct_x}" y1="{oy}" x2="{ct_x}" y2="{ct_y}" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3,3"/>')
    svg.append(f'<line x1="{ox}" y1="{ct_y}" x2="{ct_x}" y2="{ct_y}" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3,3"/>')
    
    svg.append(f'<text x="{cd_x}" y="{oy-6}" font-family="Times New Roman, serif" font-size="13" text-anchor="middle" fill="#1e293b">1</text>')
    svg.append(f'<text x="{px_asymp_x+2}" y="{oy+16}" font-family="Times New Roman, serif" font-size="13" fill="#dc2626">2</text>')
    svg.append(f'<text x="{ct_x}" y="{oy+16}" font-family="Times New Roman, serif" font-size="13" text-anchor="middle" fill="#1e293b">3</text>')
    svg.append(f'<text x="{ox-8}" y="{cd_y+4}" font-family="Times New Roman, serif" font-size="13" text-anchor="end" fill="#1e293b">-1</text>')
    svg.append(f'<text x="{ox-8}" y="{ct_y+4}" font-family="Times New Roman, serif" font-size="13" text-anchor="end" fill="#1e293b">3</text>')
    
    # Curves
    svg.append(f'<path d="{d1}" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/>')
    svg.append(f'<path d="{d2}" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/>')
    
    # Points
    svg.append(f'<circle cx="{cd_x}" cy="{cd_y}" r="3.5" fill="#dc2626"/>')
    svg.append(f'<circle cx="{ct_x}" cy="{ct_y}" r="3.5" fill="#dc2626"/>')
    
    svg.append('</svg>')
    return "".join(svg)

# 3. Câu 7 Bảng biến thiên TikZ: R \ {1}
def generate_cau7():
    w, h = 480, 160
    svg = [svg_header(w, h), defs_markers()]
    
    # Table borders
    svg.append('<rect x="15" y="15" width="450" height="130" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="4"/>')
    svg.append('<line x1="80" y1="15" x2="80" y2="145" stroke="#334155" stroke-width="1.5"/>') # vertical divider after headers
    svg.append('<line x1="15" y1="50" x2="465" y2="50" stroke="#334155" stroke-width="1.2"/>') # horiz 1
    svg.append('<line x1="15" y1="85" x2="465" y2="85" stroke="#334155" stroke-width="1.2"/>') # horiz 2
    
    # Row headers
    svg.append('<text x="47" y="37" font-family="Times New Roman, serif" font-size="16" font-style="italic" text-anchor="middle" fill="#0f172a">x</text>')
    svg.append('<text x="47" y="72" font-family="Times New Roman, serif" font-size="16" font-style="italic" text-anchor="middle" fill="#0f172a">f \'(x)</text>')
    svg.append('<text x="47" y="120" font-family="Times New Roman, serif" font-size="16" font-style="italic" text-anchor="middle" fill="#0f172a">f(x)</text>')
    
    # X row values: -inf, -2, 1, 4, +inf
    # x positions:
    # -inf: 110, -2: 175, 1: 260, 4: 350, +inf: 430
    svg.append('<text x="105" y="37" font-family="Times New Roman, serif" font-size="14" fill="#0f172a">-∞</text>')
    svg.append('<text x="175" y="37" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">-2</text>')
    svg.append('<text x="260" y="37" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">1</text>')
    svg.append('<text x="350" y="37" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">4</text>')
    svg.append('<text x="430" y="37" font-family="Times New Roman, serif" font-size="14" fill="#0f172a">+∞</text>')
    
    # f'(x) row: - 0 + || + 0 -
    svg.append('<text x="140" y="72" font-family="Times New Roman, serif" font-size="16" fill="#dc2626">-</text>')
    svg.append('<text x="175" y="72" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">0</text>')
    svg.append('<text x="215" y="72" font-family="Times New Roman, serif" font-size="16" fill="#16a34a">+</text>')
    # double vertical line at x = 1 for f'(x) and f(x):
    svg.append('<line x1="258" y1="50" x2="258" y2="145" stroke="#dc2626" stroke-width="1.2"/>')
    svg.append('<line x1="262" y1="50" x2="262" y2="145" stroke="#dc2626" stroke-width="1.2"/>')
    svg.append('<text x="305" y="72" font-family="Times New Roman, serif" font-size="16" fill="#16a34a">+</text>')
    svg.append('<text x="350" y="72" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">0</text>')
    svg.append('<text x="395" y="72" font-family="Times New Roman, serif" font-size="16" fill="#dc2626">-</text>')
    
    # f(x) arrows and values
    # Left branch: +inf at (110, 100) -> -3 at (175, 138) -> +inf at (245, 100)
    svg.append('<text x="105" y="102" font-family="Times New Roman, serif" font-size="13" fill="#0f172a">+∞</text>')
    svg.append('<text x="175" y="142" font-family="Times New Roman, serif" font-size="14" text-anchor="middle" fill="#0f172a">-3</text>')
    svg.append('<text x="240" y="102" font-family="Times New Roman, serif" font-size="13" text-anchor="end" fill="#0f172a">+∞</text>')
    svg.append('<line x1="125" y1="104" x2="162" y2="135" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    svg.append('<line x1="188" y1="135" x2="228" y2="104" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    
    # Right branch: -inf at (275, 142) -> 5 at (350, 102) -> -inf at (430, 142)
    svg.append('<text x="272" y="142" font-family="Times New Roman, serif" font-size="13" fill="#0f172a">-∞</text>')
    svg.append('<text x="350" y="102" font-family="Times New Roman, serif" font-size="14" text-anchor="middle" fill="#0f172a">5</text>')
    svg.append('<text x="430" y="142" font-family="Times New Roman, serif" font-size="13" fill="#0f172a">-∞</text>')
    svg.append('<line x1="295" y1="135" x2="338" y2="105" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    svg.append('<line x1="362" y1="105" x2="415" y2="135" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    
    svg.append('</svg>')
    return "".join(svg)

# 4. Câu 8 Đồ thị phân thức y = (2x-4)/(x+1)
def generate_cau8():
    w, h = 360, 240
    ox, oy = 160, 105
    sx, sy = 32, 20
    
    # y = (2x - 4)/(x + 1) = 2 - 6/(x + 1)
    # Asymptotes:
    # TCĐ: x = -1
    # TCN: y = 2
    px_tc_d = ox + (-1) * sx
    py_tc_n = oy - 2 * sy
    
    # Branch 1: x < -1 (-4.5 to -1.3)
    b1_pts = []
    for i in range(-200, -55):
        x = i / 40.0
        y = (2*x - 4) / (x + 1)
        px = ox + x * sx
        py = oy - y * sy
        if -10 <= py <= h + 10:
            b1_pts.append((px, py))
    d1 = "M " + " L ".join([f"{p[0]:.1f},{p[1]:.1f}" for p in b1_pts])
    
    # Branch 2: x > -1 (-0.7 to 5.0)
    b2_pts = []
    for i in range(-28, 201):
        x = i / 40.0
        y = (2*x - 4) / (x + 1)
        px = ox + x * sx
        py = oy - y * sy
        if -10 <= py <= h + 10:
            b2_pts.append((px, py))
    d2 = "M " + " L ".join([f"{p[0]:.1f},{p[1]:.1f}" for p in b2_pts])
    
    svg = [svg_header(w, h), defs_markers()]
    # Axes
    svg.append(f'<line x1="20" y1="{oy}" x2="340" y2="{oy}" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arrow)"/>')
    svg.append(f'<line x1="{ox}" y1="{h-15}" x2="{ox}" y2="15" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arrow)"/>')
    svg.append(f'<text x="345" y="{oy+4}" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="#1e293b">x</text>')
    svg.append(f'<text x="{ox+6}" y="18" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="#1e293b">y</text>')
    svg.append(f'<text x="{ox-14}" y="{oy+14}" font-family="Times New Roman, serif" font-size="14" font-style="italic" fill="#1e293b">O</text>')
    
    # Asymptotes (red dashed)
    svg.append(f'<line x1="{px_tc_d}" y1="15" x2="{px_tc_d}" y2="{h-15}" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="5,4"/>')
    svg.append(f'<line x1="20" y1="{py_tc_n}" x2="340" y2="{py_tc_n}" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="5,4"/>')
    
    # Intercepts:
    # (2, 0):
    p_x_int = ox + 2 * sx
    # (0, -4):
    p_y_int = oy - (-4) * sy
    
    svg.append(f'<text x="{px_tc_d-4}" y="{oy+16}" font-family="Times New Roman, serif" font-size="13" text-anchor="end" fill="#dc2626">-1</text>')
    svg.append(f'<text x="{ox-6}" y="{py_tc_n+4}" font-family="Times New Roman, serif" font-size="13" text-anchor="end" fill="#dc2626">2</text>')
    svg.append(f'<text x="{p_x_int}" y="{oy+16}" font-family="Times New Roman, serif" font-size="13" text-anchor="middle" fill="#1e293b">2</text>')
    svg.append(f'<text x="{ox-8}" y="{p_y_int+4}" font-family="Times New Roman, serif" font-size="13" text-anchor="end" fill="#1e293b">-4</text>')
    
    # Curves
    svg.append(f'<path d="{d1}" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/>')
    svg.append(f'<path d="{d2}" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/>')
    
    # Intercept points
    svg.append(f'<circle cx="{p_x_int}" cy="{oy}" r="4" fill="#dc2626"/>')
    svg.append(f'<circle cx="{ox}" cy="{p_y_int}" r="4" fill="#2563eb"/>')
    
    svg.append('</svg>')
    return "".join(svg)

# 5. Câu 10 Bảng biến thiên TikZ: R \ {-1}
def generate_cau10():
    w, h = 460, 160
    svg = [svg_header(w, h), defs_markers()]
    
    svg.append('<rect x="15" y="15" width="430" height="130" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="4"/>')
    svg.append('<line x1="80" y1="15" x2="80" y2="145" stroke="#334155" stroke-width="1.5"/>')
    svg.append('<line x1="15" y1="50" x2="445" y2="50" stroke="#334155" stroke-width="1.2"/>')
    svg.append('<line x1="15" y1="85" x2="445" y2="85" stroke="#334155" stroke-width="1.2"/>')
    
    svg.append('<text x="47" y="37" font-family="Times New Roman, serif" font-size="16" font-style="italic" text-anchor="middle" fill="#0f172a">x</text>')
    svg.append('<text x="47" y="72" font-family="Times New Roman, serif" font-size="16" font-style="italic" text-anchor="middle" fill="#0f172a">f \'(x)</text>')
    svg.append('<text x="47" y="120" font-family="Times New Roman, serif" font-size="16" font-style="italic" text-anchor="middle" fill="#0f172a">f(x)</text>')
    
    # X row: -inf, -1, 2, +inf
    svg.append('<text x="105" y="37" font-family="Times New Roman, serif" font-size="14" fill="#0f172a">-∞</text>')
    svg.append('<text x="210" y="37" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">-1</text>')
    svg.append('<text x="320" y="37" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">2</text>')
    svg.append('<text x="415" y="37" font-family="Times New Roman, serif" font-size="14" fill="#0f172a">+∞</text>')
    
    # f'(x) row: - || - 0 +
    svg.append('<text x="155" y="72" font-family="Times New Roman, serif" font-size="16" fill="#dc2626">-</text>')
    # double vertical line at x = -1
    svg.append('<line x1="208" y1="50" x2="208" y2="145" stroke="#dc2626" stroke-width="1.2"/>')
    svg.append('<line x1="212" y1="50" x2="212" y2="145" stroke="#dc2626" stroke-width="1.2"/>')
    svg.append('<text x="265" y="72" font-family="Times New Roman, serif" font-size="16" fill="#dc2626">-</text>')
    svg.append('<text x="320" y="72" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">0</text>')
    svg.append('<text x="375" y="72" font-family="Times New Roman, serif" font-size="16" fill="#16a34a">+</text>')
    
    # f(x) row:
    # 3 at (105, 102) -> -inf at (195, 142)
    svg.append('<text x="105" y="104" font-family="Times New Roman, serif" font-size="14" fill="#0f172a">3</text>')
    svg.append('<text x="188" y="142" font-family="Times New Roman, serif" font-size="13" text-anchor="end" fill="#0f172a">-∞</text>')
    svg.append('<line x1="120" y1="106" x2="175" y2="136" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    
    # +inf at (225, 102) -> -1 at (320, 142) -> 3 at (415, 104)
    svg.append('<text x="222" y="102" font-family="Times New Roman, serif" font-size="13" fill="#0f172a">+∞</text>')
    svg.append('<text x="320" y="142" font-family="Times New Roman, serif" font-size="14" text-anchor="middle" fill="#0f172a">-1</text>')
    svg.append('<text x="415" y="104" font-family="Times New Roman, serif" font-size="14" fill="#0f172a">3</text>')
    svg.append('<line x1="245" y1="105" x2="305" y2="136" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    svg.append('<line x1="335" y1="136" x2="400" y2="106" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    
    svg.append('</svg>')
    return "".join(svg)

# 6. Câu 12 Bảng biến thiên trên [-3; 2]
def generate_cau12():
    w, h = 460, 160
    svg = [svg_header(w, h), defs_markers()]
    
    svg.append('<rect x="15" y="15" width="430" height="130" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="4"/>')
    svg.append('<line x1="80" y1="15" x2="80" y2="145" stroke="#334155" stroke-width="1.5"/>')
    svg.append('<line x1="15" y1="50" x2="445" y2="50" stroke="#334155" stroke-width="1.2"/>')
    svg.append('<line x1="15" y1="85" x2="445" y2="85" stroke="#334155" stroke-width="1.2"/>')
    
    svg.append('<text x="47" y="37" font-family="Times New Roman, serif" font-size="16" font-style="italic" text-anchor="middle" fill="#0f172a">x</text>')
    svg.append('<text x="47" y="72" font-family="Times New Roman, serif" font-size="16" font-style="italic" text-anchor="middle" fill="#0f172a">f \'(x)</text>')
    svg.append('<text x="47" y="120" font-family="Times New Roman, serif" font-size="16" font-style="italic" text-anchor="middle" fill="#0f172a">f(x)</text>')
    
    # X row: -3, -1, 1, 2
    svg.append('<text x="110" y="37" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">-3</text>')
    svg.append('<text x="210" y="37" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">-1</text>')
    svg.append('<text x="310" y="37" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">1</text>')
    svg.append('<text x="410" y="37" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">2</text>')
    
    # f'(x) row: + 0 - 0 +
    svg.append('<text x="160" y="72" font-family="Times New Roman, serif" font-size="16" fill="#16a34a">+</text>')
    svg.append('<text x="210" y="72" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">0</text>')
    svg.append('<text x="260" y="72" font-family="Times New Roman, serif" font-size="16" fill="#dc2626">-</text>')
    svg.append('<text x="310" y="72" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">0</text>')
    svg.append('<text x="360" y="72" font-family="Times New Roman, serif" font-size="16" fill="#16a34a">+</text>')
    
    # f(x) row: 2 at (110, 130) -> 7 at (210, 102) -> -3 at (310, 142) -> 1 at (410, 120)
    svg.append('<text x="110" y="132" font-family="Times New Roman, serif" font-size="14" text-anchor="middle" fill="#0f172a">2</text>')
    svg.append('<text x="210" y="102" font-family="Times New Roman, serif" font-size="14" text-anchor="middle" fill="#0f172a">7</text>')
    svg.append('<text x="310" y="142" font-family="Times New Roman, serif" font-size="14" text-anchor="middle" fill="#0f172a">-3</text>')
    svg.append('<text x="410" y="122" font-family="Times New Roman, serif" font-size="14" text-anchor="middle" fill="#0f172a">1</text>')
    
    svg.append('<line x1="125" y1="127" x2="195" y2="105" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    svg.append('<line x1="225" y1="105" x2="295" y2="137" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    svg.append('<line x1="325" y1="137" x2="395" y2="124" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    
    svg.append('</svg>')
    return "".join(svg)

# 7. Phần II Câu 1 Đồ thị bậc ba y = x^3 - 3x^2 + 2
def generate_p2_c1():
    w, h = 360, 240
    ox, oy = 130, 120
    sx, sy = 45, 28
    
    # y = x^3 - 3x^2 + 2
    # CĐ (0, 2), CT (2, -2), Uốn (1, 0)
    pts = []
    for i in range(-55, 170):
        x = i / 50.0
        y = x**3 - 3*x**2 + 2
        px = ox + x * sx
        py = oy - y * sy
        if 10 <= py <= h - 10:
            pts.append((px, py))
    d = "M " + " L ".join([f"{p[0]:.1f},{p[1]:.1f}" for p in pts])
    
    svg = [svg_header(w, h), defs_markers()]
    svg.append(f'<line x1="20" y1="{oy}" x2="340" y2="{oy}" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arrow)"/>')
    svg.append(f'<line x1="{ox}" y1="{h-15}" x2="{ox}" y2="15" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arrow)"/>')
    svg.append(f'<text x="345" y="{oy+4}" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="#1e293b">x</text>')
    svg.append(f'<text x="{ox+6}" y="18" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="#1e293b">y</text>')
    svg.append(f'<text x="{ox-14}" y="{oy+14}" font-family="Times New Roman, serif" font-size="14" font-style="italic" fill="#1e293b">O</text>')
    
    # CĐ (0, 2)
    py_cd = oy - 2 * sy
    # CT (2, -2)
    px_ct = ox + 2 * sx
    py_ct = oy - (-2) * sy
    # Uốn (1, 0)
    px_uon = ox + 1 * sx
    
    # Dashed lines for CT (2, -2)
    svg.append(f'<line x1="{px_ct}" y1="{oy}" x2="{px_ct}" y2="{py_ct}" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3,3"/>')
    svg.append(f'<line x1="{ox}" y1="{py_ct}" x2="{px_ct}" y2="{py_ct}" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3,3"/>')
    
    svg.append(f'<text x="{ox-8}" y="{py_cd+4}" font-family="Times New Roman, serif" font-size="13" text-anchor="end" fill="#1e293b">2</text>')
    svg.append(f'<text x="{ox-8}" y="{py_ct+4}" font-family="Times New Roman, serif" font-size="13" text-anchor="end" fill="#1e293b">-2</text>')
    svg.append(f'<text x="{px_uon}" y="{oy+16}" font-family="Times New Roman, serif" font-size="13" text-anchor="middle" fill="#1e293b">1</text>')
    svg.append(f'<text x="{px_ct}" y="{oy-6}" font-family="Times New Roman, serif" font-size="13" text-anchor="middle" fill="#1e293b">2</text>')
    
    svg.append(f'<path d="{d}" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round"/>')
    svg.append(f'<circle cx="{ox}" cy="{py_cd}" r="3.5" fill="#dc2626"/>')
    svg.append(f'<circle cx="{px_ct}" cy="{py_ct}" r="3.5" fill="#dc2626"/>')
    svg.append(f'<circle cx="{px_uon}" cy="{oy}" r="3.5" fill="#16a34a"/>')
    
    svg.append('</svg>')
    return "".join(svg)

# 8. Phần II Câu 3 Bảng biến thiên R \ {2}
def generate_p2_c3():
    w, h = 460, 160
    svg = [svg_header(w, h), defs_markers()]
    
    svg.append('<rect x="15" y="15" width="430" height="130" fill="#f8fafc" stroke="#334155" stroke-width="1.5" rx="4"/>')
    svg.append('<line x1="80" y1="15" x2="80" y2="145" stroke="#334155" stroke-width="1.5"/>')
    svg.append('<line x1="15" y1="50" x2="445" y2="50" stroke="#334155" stroke-width="1.2"/>')
    svg.append('<line x1="15" y1="85" x2="445" y2="85" stroke="#334155" stroke-width="1.2"/>')
    
    svg.append('<text x="47" y="37" font-family="Times New Roman, serif" font-size="16" font-style="italic" text-anchor="middle" fill="#0f172a">x</text>')
    svg.append('<text x="47" y="72" font-family="Times New Roman, serif" font-size="16" font-style="italic" text-anchor="middle" fill="#0f172a">f \'(x)</text>')
    svg.append('<text x="47" y="120" font-family="Times New Roman, serif" font-size="16" font-style="italic" text-anchor="middle" fill="#0f172a">f(x)</text>')
    
    svg.append('<text x="105" y="37" font-family="Times New Roman, serif" font-size="14" fill="#0f172a">-∞</text>')
    svg.append('<text x="175" y="37" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">0</text>')
    svg.append('<text x="260" y="37" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">2</text>')
    svg.append('<text x="345" y="37" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">4</text>')
    svg.append('<text x="420" y="37" font-family="Times New Roman, serif" font-size="14" fill="#0f172a">+∞</text>')
    
    svg.append('<text x="140" y="72" font-family="Times New Roman, serif" font-size="16" fill="#16a34a">+</text>')
    svg.append('<text x="175" y="72" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">0</text>')
    svg.append('<text x="215" y="72" font-family="Times New Roman, serif" font-size="16" fill="#dc2626">-</text>')
    
    svg.append('<line x1="258" y1="50" x2="258" y2="145" stroke="#dc2626" stroke-width="1.2"/>')
    svg.append('<line x1="262" y1="50" x2="262" y2="145" stroke="#dc2626" stroke-width="1.2"/>')
    
    svg.append('<text x="305" y="72" font-family="Times New Roman, serif" font-size="16" fill="#dc2626">-</text>')
    svg.append('<text x="345" y="72" font-family="Times New Roman, serif" font-size="15" text-anchor="middle" fill="#0f172a">0</text>')
    svg.append('<text x="385" y="72" font-family="Times New Roman, serif" font-size="16" fill="#16a34a">+</text>')
    
    # f(x): -1 -> 3 -> -inf || +inf -> -2 -> -1
    svg.append('<text x="105" y="138" font-family="Times New Roman, serif" font-size="14" fill="#0f172a">-1</text>')
    svg.append('<text x="175" y="102" font-family="Times New Roman, serif" font-size="14" text-anchor="middle" fill="#0f172a">3</text>')
    svg.append('<text x="240" y="142" font-family="Times New Roman, serif" font-size="13" text-anchor="end" fill="#0f172a">-∞</text>')
    svg.append('<line x1="125" y1="135" x2="162" y2="105" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    svg.append('<line x1="188" y1="105" x2="228" y2="135" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    
    svg.append('<text x="272" y="102" font-family="Times New Roman, serif" font-size="13" fill="#0f172a">+∞</text>')
    svg.append('<text x="345" y="142" font-family="Times New Roman, serif" font-size="14" text-anchor="middle" fill="#0f172a">-2</text>')
    svg.append('<text x="420" y="112" font-family="Times New Roman, serif" font-size="14" fill="#0f172a">-1</text>')
    svg.append('<line x1="295" y1="105" x2="332" y2="135" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    svg.append('<line x1="358" y1="135" x2="408" y2="114" stroke="#2563eb" stroke-width="1.5" marker-end="url(#arrow-blue)"/>')
    
    svg.append('</svg>')
    return "".join(svg)

# 9. Phần III Câu 5 Cáp treo và sườn đồi
def generate_p3_c5():
    w, h = 340, 240
    svg = [svg_header(w, h), defs_markers()]
    
    # Axes
    ox, oy = 70, 160
    svg.append(f'<line x1="30" y1="{oy}" x2="310" y2="{oy}" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arrow)"/>')
    svg.append(f'<line x1="{ox}" y1="{h-15}" x2="{ox}" y2="20" stroke="#1e293b" stroke-width="1.5" marker-end="url(#arrow)"/>')
    svg.append(f'<text x="315" y="{oy+4}" font-family="Times New Roman, serif" font-size="14" font-style="italic" fill="#1e293b">x</text>')
    svg.append(f'<text x="{ox+6}" y="22" font-family="Times New Roman, serif" font-size="14" font-style="italic" fill="#1e293b">y</text>')
    svg.append(f'<text x="{ox-14}" y="{oy+14}" font-family="Times New Roman, serif" font-size="13" font-style="italic" fill="#1e293b">O</text>')
    
    # Hill curve y = (x^2 - 2x + 5)/(x - 2) for x > 2
    # sx = 28, sy = 12
    sx, sy = 28, 11
    hill_pts = []
    for i in range(54, 150):
        x = i / 20.0
        y = (x**2 - 2*x + 5) / (x - 2)
        px = ox + x * sx
        py = oy - y * sy
        if 20 <= py <= h - 20:
            hill_pts.append((px, py))
    d_hill = "M " + " L ".join([f"{p[0]:.1f},{p[1]:.1f}" for p in hill_pts])
    
    # Cable line Delta: 3x - 4y - 25 = 0 => y = (3/4)x - 25/4
    # Draw line from x = 1 to 9
    p1_d = (ox + 1 * sx, oy - ((0.75)*1 - 6.25)*sy)
    p2_d = (ox + 8.5 * sx, oy - ((0.75)*8.5 - 6.25)*sy)
    
    # Cable line
    svg.append(f'<line x1="{p1_d[0]:.1f}" y1="{p1_d[1]:.1f}" x2="{p2_d[0]:.1f}" y2="{p2_d[1]:.1f}" stroke="#d97706" stroke-width="2.2"/>')
    svg.append(f'<text x="{p2_d[0]-10:.1f}" y="{p2_d[1]-8:.1f}" font-family="Times New Roman, serif" font-size="14" font-weight="bold" fill="#d97706">Δ</text>')
    
    # Hill curve
    svg.append(f'<path d="{d_hill}" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round"/>')
    svg.append(f'<text x="{ox+5*sx}" y="{oy-10*sy}" font-family="Times New Roman, serif" font-size="13" font-weight="bold" fill="#059669">Sườn đồi</text>')
    
    # Point M on hill
    x0 = 2 + 2 * math.sqrt(5) # ~ 6.47
    y0 = (x0**2 - 2*x0 + 5) / (x0 - 2)
    pm = (ox + x0 * sx, oy - y0 * sy)
    svg.append(f'<circle cx="{pm[0]:.1f}" cy="{pm[1]:.1f}" r="4" fill="#dc2626"/>')
    svg.append(f'<text x="{pm[0]-6:.1f}" y="{pm[1]-10:.1f}" font-family="Times New Roman, serif" font-size="14" font-weight="bold" fill="#dc2626">M</text>')
    
    svg.append('</svg>')
    return "".join(svg)

# 10. Phần III Câu 6 Phòng triển lãm và cảm biến LiDAR
def generate_p3_c6():
    w, h = 340, 240
    svg = [svg_header(w, h), defs_markers()]
    
    # Room rectangle ABCD
    # A is at (60, 190)
    # B is at (60, 40)
    # C is at (280, 40)
    # D is at (280, 190)
    ax, ay = 60, 190
    bx, by = 60, 40
    cx, cy = 280, 40
    dx, dy = 280, 190
    
    # Wall outline
    svg.append(f'<rect x="{ax}" y="{by}" width="{dx-ax}" height="{ay-by}" fill="#f1f5f9" stroke="#1e293b" stroke-width="2"/>')
    
    # Point P on AB (between A and B), Point Q on AD (between A and D)
    # Line PQ
    # LiDAR K: distance to AB = 3m, distance to AD = 5m
    # Scale: 1m = 16px
    # K: (ax + 3*16, ay - 5*16)
    kx = ax + 3 * 16
    ky = ay - 5 * 16
    
    # Line PQ through K
    # Suppose P is at (ax, ay - 8.5*16) and Q is at (ax + 7.2*16, ay)
    px, py = ax, ay - 8.5 * 16
    qx, qy = ax + 7.2 * 16, ay
    
    # Triangle APQ shaded
    svg.append(f'<polygon points="{ax},{ay} {px},{py} {qx},{qy}" fill="rgba(37, 99, 235, 0.15)"/>')
    
    # Glass partition PQ (blue thick line)
    svg.append(f'<line x1="{px}" y1="{py}" x2="{qx}" y2="{qy}" stroke="#2563eb" stroke-width="3"/>')
    
    # Sensor K
    svg.append(f'<circle cx="{kx}" cy="{ky}" r="5" fill="#dc2626"/>')
    svg.append(f'<text x="{kx+8}" y="{ky-6}" font-family="Times New Roman, serif" font-size="14" font-weight="bold" fill="#dc2626">K</text>')
    
    # Dimension lines from K to walls:
    # to AB (horizontal left):
    svg.append(f'<line x1="{kx}" y1="{ky}" x2="{ax}" y2="{ky}" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3"/>')
    svg.append(f'<text x="{(ax+kx)/2}" y="{ky+14}" font-family="Times New Roman, serif" font-size="12" text-anchor="middle" fill="#475569">3m</text>')
    
    # to AD (vertical down):
    svg.append(f'<line x1="{kx}" y1="{ky}" x2="{kx}" y2="{ay}" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3"/>')
    svg.append(f'<text x="{kx+12}" y="{(ay+ky)/2}" font-family="Times New Roman, serif" font-size="12" fill="#475569">5m</text>')
    
    # Labels A, B, C, D, P, Q
    svg.append(f'<text x="{ax-16}" y="{ay+14}" font-family="Times New Roman, serif" font-size="14" font-weight="bold" fill="#0f172a">A</text>')
    svg.append(f'<text x="{ax-16}" y="{by+4}" font-family="Times New Roman, serif" font-size="14" font-weight="bold" fill="#0f172a">B</text>')
    svg.append(f'<text x="{cx+6}" y="{cy+4}" font-family="Times New Roman, serif" font-size="14" font-weight="bold" fill="#0f172a">C</text>')
    svg.append(f'<text x="{dx+6}" y="{dy+14}" font-family="Times New Roman, serif" font-size="14" font-weight="bold" fill="#0f172a">D</text>')
    svg.append(f'<text x="{px-16}" y="{py+4}" font-family="Times New Roman, serif" font-size="14" font-weight="bold" fill="#2563eb">P</text>')
    svg.append(f'<text x="{qx}" y="{qy+18}" font-family="Times New Roman, serif" font-size="14" font-weight="bold" text-anchor="middle" fill="#2563eb">Q</text>')
    
    svg.append('</svg>')
    return "".join(svg)

if __name__ == '__main__':
    print("All 10 SVG generators defined successfully!")

