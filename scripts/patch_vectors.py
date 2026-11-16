# -*- coding: utf-8 -*-
"""
Professional SVG Vector standardizer for all lessons:
Replaces unprintable unicode combining characters (&#8407;) and raw LaTeX
inside SVG <text> elements with crisp, standard SVG vector graphics (<line>, <polyline>, <text>).
Also adjusts viewBox height on diagrams to eliminate clipped bottom captions.
"""

import os, re

def make_vec(letter, x, y, color, subscript=None, extra_text=None, font_size=15):
    if len(letter) == 1:
        w = 12 if letter.islower() else 14
    elif len(letter) == 2:
        w = 20
    else:
        w = 24
    
    arrow_line = f'<line x1="0" y1="-10" x2="{w}" y2="-10" stroke="{color}" stroke-width="1.2"/>'
    arrow_tip = f'<polyline points="{w-3},-12 {w},-10 {w-3},-8" fill="none" stroke="{color}" stroke-width="1.2"/>'
    sub_tag = f'<tspan font-size="{int(font_size*0.7)}" dy="3">{subscript}</tspan>' if subscript else ''
    extra_tag = f' <tspan font-style="normal" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="{int(font_size*0.85)}">{extra_text}</tspan>' if extra_text else ''
    text_tag = f'<text x="0" y="0" font-family="\'Times New Roman\', serif" font-size="{font_size}" font-weight="bold" font-style="italic" fill="{color}">{letter}{sub_tag}{extra_tag}</text>'
    
    return f'''<g transform="translate({x}, {y})">
  {arrow_line}
  {arrow_tip}
  {text_tag}
</g>'''

def patch_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    
    count = 0
    for old, new in replacements:
        if old in text:
            text = text.replace(old, new)
            count += 1
        else:
            print(f"[WARN] In {filepath}: Could not find snippet:\n{old[:80]}...")
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text)
    print(f"Patched {filepath}: {count}/{len(replacements)} replacements applied.")

# =========================================================================
# 1. js/lesson-10-8-data.js (Bài 8 Lớp 10: Tổng và hiệu của hai vectơ)
# =========================================================================
b10_8_replacements = [
    # Hook SVG: Con tàu vượt sông
    (
        '<text x="100" y="130" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">\\v&#8407;_r</text>',
        make_vec('v', 100, 130, '#dc2626', subscript='r', font_size=15)
    ),
    (
        '<text x="200" y="90" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">\\v&#8407;_n</text>',
        make_vec('v', 200, 90, '#0284c7', subscript='n', font_size=15)
    ),
    (
        '<text x="145" y="165" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#15803d">\\v&#8407; = \\v&#8407;_r + \\v&#8407;_n</text>',
        '''<g transform="translate(130, 165)">
  <line x1="0" y1="-10" x2="11" y2="-10" stroke="#15803d" stroke-width="1.2"/>
  <polyline points="8,-12 11,-10 8,-8" fill="none" stroke="#15803d" stroke-width="1.2"/>
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#15803d">v</text>
  <text x="15" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#15803d">=</text>
  <line x1="32" y1="-10" x2="44" y2="-10" stroke="#15803d" stroke-width="1.2"/>
  <polyline points="41,-12 44,-10 41,-8" fill="none" stroke="#15803d" stroke-width="1.2"/>
  <text x="32" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#15803d">v<tspan font-size="10" dy="3">r</tspan></text>
  <text x="56" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#15803d">+</text>
  <line x1="72" y1="-10" x2="84" y2="-10" stroke="#15803d" stroke-width="1.2"/>
  <polyline points="81,-12 84,-10 81,-8" fill="none" stroke="#15803d" stroke-width="1.2"/>
  <text x="72" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#15803d">v<tspan font-size="10" dy="3">n</tspan></text>
</g>'''
    ),
    # Hook SVG: Kéo co
    (
        '<text x="90" y="100" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#2563eb">\\F&#8407;_1</text>',
        make_vec('F', 90, 100, '#2563eb', subscript='1', font_size=15)
    ),
    (
        '<text x="190" y="100" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#2563eb">\\F&#8407;_2</text>',
        make_vec('F', 190, 100, '#2563eb', subscript='2', font_size=15)
    ),
    (
        '<text x="65" y="165" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\F&#8407;_1 + \\F&#8407;_2 = \\0&#8407; (Đối nhau)</text>',
        '''<g transform="translate(50, 165)">
  <line x1="0" y1="-10" x2="14" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
  <polyline points="10,-12 14,-10 10,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#dc2626">F<tspan font-size="10" dy="3">1</tspan></text>
  <text x="18" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">+</text>
  <line x1="32" y1="-10" x2="46" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
  <polyline points="42,-12 46,-10 42,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
  <text x="32" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#dc2626">F<tspan font-size="10" dy="3">2</tspan></text>
  <text x="50" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">=</text>
  <line x1="64" y1="-10" x2="74" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
  <polyline points="70,-12 74,-10 70,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
  <text x="64" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#dc2626">0</text>
  <text x="80" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">(Đối nhau)</text>
</g>'''
    ),
    # Section 1 SVG: Hình 4.13 (Fix viewBox height to 220 so bottom text is not cut off)
    (
        '<svg viewBox="0 0 680 180" style="width: 100%; max-width: 640px; height: auto; display: block; margin: 0 auto; background: #ffffff;">',
        '<svg viewBox="0 0 680 220" style="width: 100%; max-width: 640px; height: auto; display: block; margin: 0 auto; background: #ffffff;">'
    ),
    (
        '<text x="85" y="65" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#2563eb">\\a&#8407;</text>',
        make_vec('a', 85, 65, '#2563eb', font_size=15)
    ),
    (
        '<text x="210" y="65" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#2563eb">\\b&#8407;</text>',
        make_vec('b', 210, 65, '#2563eb', font_size=15)
    ),
    (
        '<text x="125" y="145" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">\\a&#8407; + \\b&#8407; = \\AC&#8407;</text>\n                  <text x="60" y="165" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Quy tắc ba điểm (nối đuôi)</text>',
        '''<g transform="translate(85, 155)">
  <line x1="0" y1="-10" x2="12" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
  <polyline points="9,-12 12,-10 9,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#dc2626">a</text>
  <text x="18" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">+</text>
  <line x1="34" y1="-10" x2="46" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
  <polyline points="43,-12 46,-10 43,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
  <text x="34" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#dc2626">b</text>
  <text x="52" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">=</text>
  <line x1="70" y1="-10" x2="94" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
  <polyline points="90,-12 94,-10 90,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
  <text x="70" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#dc2626">AC</text>
</g>
<text x="140" y="185" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-style="italic" fill="#475569">Quy tắc ba điểm (nối đuôi)</text>'''
    ),
    (
        '<text x="70" y="65" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#2563eb">\\AB&#8407;</text>',
        make_vec('AB', 70, 65, '#2563eb', font_size=15)
    ),
    (
        '<text x="75" y="140" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#2563eb">\\AD&#8407;</text>',
        make_vec('AD', 75, 142, '#2563eb', font_size=15)
    ),
    (
        '<text x="155" y="90" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">\\AC&#8407;</text>',
        make_vec('AC', 155, 90, '#dc2626', font_size=15)
    ),
    (
        '<text x="65" y="165" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Quy tắc hình bình hành: \\AB&#8407; + \\AD&#8407; = \\AC&#8407;</text>',
        '''<g transform="translate(15, 185)">
  <text x="0" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-style="italic" fill="#475569">Quy tắc hình bình hành:</text>
  <line x1="145" y1="-9" x2="167" y2="-9" stroke="#dc2626" stroke-width="1.1"/>
  <polyline points="164,-11 167,-9 164,-7" fill="none" stroke="#dc2626" stroke-width="1.1"/>
  <text x="145" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#dc2626">AB</text>
  <text x="173" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">+</text>
  <line x1="187" y1="-9" x2="209" y2="-9" stroke="#dc2626" stroke-width="1.1"/>
  <polyline points="206,-11 209,-9 206,-7" fill="none" stroke="#dc2626" stroke-width="1.1"/>
  <text x="187" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#dc2626">AD</text>
  <text x="215" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">=</text>
  <line x1="229" y1="-9" x2="251" y2="-9" stroke="#dc2626" stroke-width="1.1"/>
  <polyline points="248,-11 251,-9 248,-7" fill="none" stroke="#dc2626" stroke-width="1.1"/>
  <text x="229" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#dc2626">AC</text>
</g>'''
    )
]

patch_file('js/lesson-10-8-data.js', b10_8_replacements)

# =========================================================================
# 2. js/lesson-10-7-data.js (Bài 7 Lớp 10: Các khái niệm mở đầu)
# =========================================================================
b10_7_replacements = [
    (
        '<text x="125" y="60" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="18" font-weight="bold" fill="#0284c7">\\AB&#8407;</text>',
        make_vec('AB', 125, 60, '#0284c7', font_size=18)
    ),
    (
        '<text x="65" y="60" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#dc2626">\\a&#8407;</text>',
        make_vec('a', 65, 60, '#dc2626', font_size=16)
    ),
    (
        '<text x="145" y="45" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#16a34a">\\b&#8407;</text>',
        make_vec('b', 145, 45, '#16a34a', font_size=16)
    ),
    (
        '<text x="245" y="65" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#7c3aed">\\x&#8407;</text>',
        make_vec('x', 245, 65, '#7c3aed', font_size=16)
    ),
    (
        '<text x="60" y="145" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="13" font-style="italic" fill="#64748b">Hình 4.4: Các vectơ tự do \\a&#8407;, \\b&#8407;, \\x&#8407;</text>',
        '<text x="60" y="145" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="13" font-style="italic" fill="#64748b">Hình 4.4: Các vectơ tự do (a, b, x)</text>'
    ),
    (
        '<text x="140" y="20" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#2563eb">\\a&#8407;</text>',
        make_vec('a', 140, 20, '#2563eb', font_size=16)
    ),
    (
        '<text x="120" y="105" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#dc2626">\\b&#8407;</text>',
        make_vec('b', 120, 105, '#dc2626', font_size=16)
    ),
    (
        '<text x="95" y="165" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#2563eb">\\c&#8407;</text>',
        make_vec('c', 95, 165, '#2563eb', font_size=15)
    ),
    (
        '<text x="205" y="165" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#2563eb">\\d&#8407;</text>',
        make_vec('d', 205, 165, '#2563eb', font_size=15)
    ),
    (
        '<text x="45" y="70" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#2563eb">\\a&#8407;</text>',
        make_vec('a', 45, 70, '#2563eb', font_size=16)
    ),
    (
        '<text x="125" y="95" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#2563eb">\\AB&#8407;</text>',
        make_vec('AB', 125, 95, '#2563eb', font_size=15)
    ),
    (
        '<text x="160" y="110" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#dc2626">\\x&#8407;</text>',
        make_vec('x', 160, 110, '#dc2626', font_size=16)
    ),
    (
        '<text x="245" y="115" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#059669">\\b&#8407;</text>',
        make_vec('b', 245, 115, '#059669', font_size=16)
    ),
    (
        '<text x="35" y="70" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#047857">\\a&#8407;</text>',
        make_vec('a', 35, 70, '#047857', font_size=16)
    ),
    (
        '<text x="160" y="90" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#047857">\\OA&#8407; = \\a&#8407;</text>',
        '''<g transform="translate(155, 90)">
  <line x1="0" y1="-10" x2="22" y2="-10" stroke="#047857" stroke-width="1.2"/>
  <polyline points="18,-12 22,-10 18,-8" fill="none" stroke="#047857" stroke-width="1.2"/>
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#047857">OA</text>
  <text x="26" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#047857">=</text>
  <line x1="42" y1="-10" x2="54" y2="-10" stroke="#047857" stroke-width="1.2"/>
  <polyline points="51,-12 54,-10 51,-8" fill="none" stroke="#047857" stroke-width="1.2"/>
  <text x="42" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#047857">a</text>
</g>'''
    ),
    (
        '<text x="25" y="160" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Hình 4.8: Dựng duy nhất điểm A để \\OA&#8407; = \\a&#8407;</text>',
        '<text x="25" y="160" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Hình 4.8: Dựng duy nhất điểm A để OA = a</text>'
    ),
    (
        '<text x="50" y="160" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Hình 4.9: \\AD&#8407; = \\BC&#8407; (cùng hướng và cùng độ dài)</text>',
        '<text x="50" y="160" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Hình 4.9: AD = BC (cùng hướng và cùng độ dài)</text>'
    ),
    (
        '<text x="270" y="85" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#0284c7">\\F&#8407; (Ác-si-mét)</text>',
        make_vec('F', 270, 85, '#0284c7', extra_text='(Ác-si-mét)', font_size=16)
    ),
    (
        '<text x="270" y="200" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="16" font-weight="bold" fill="#dc2626">\\P&#8407; (Trọng lực)</text>',
        make_vec('P', 270, 200, '#dc2626', extra_text='(Trọng lực)', font_size=16)
    )
]

patch_file('js/lesson-10-7-data.js', b10_7_replacements)

# =========================================================================
# 3. js/lesson-10-9-data.js (Bài 9 Lớp 10: Tích của một vectơ với một số)
# =========================================================================
b10_9_replacements = [
    (
        '<text x="360" y="24" text-anchor="middle" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0369a1">HÌNH 4.20 SGK: NGUYÊN LÍ ĐÒN BẨY CÂN BẰNG VÀ KHỐI TÂM M (m₁·MA&#8407; + m₂·MB&#8407; = 0&#8407;)</text>',
        '<text x="360" y="24" text-anchor="middle" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0369a1">HÌNH 4.20 SGK: NGUYÊN LÍ ĐÒN BẨY CÂN BẰNG VÀ KHỐI TÂM M (m₁·MA + m₂·MB = 0)</text>'
    ),
    (
        '<text x="190" y="130" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\F&#8407;</text>',
        make_vec('F', 190, 130, '#dc2626', font_size=14)
    ),
    (
        '<text x="25" y="175" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Lực \\F&#8407; = x·\\a&#8407; + y·\\b&#8407; đẩy thuyền tiến lên</text>',
        '<text x="25" y="175" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="12" font-style="italic" fill="#475569">Lực F = x·a + y·b đẩy thuyền tiến lên</text>'
    ),
    (
        '<text x="35" y="130" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0284c7">\\\\frac{1}{2}\\a&#8407;</text>',
        '''<g transform="translate(25, 130)">
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" fill="#0284c7">1/2</text>
  <line x1="22" y1="-9" x2="33" y2="-9" stroke="#0284c7" stroke-width="1.1"/>
  <polyline points="30,-11 33,-9 30,-7" fill="none" stroke="#0284c7" stroke-width="1.1"/>
  <text x="22" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#0284c7">a</text>
</g>'''
    ),
    (
        '<text x="110" y="115" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">\\a&#8407;</text>',
        make_vec('a', 110, 115, '#0284c7', font_size=14)
    ),
    (
        '<text x="180" y="105" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">\\\\frac{3}{2}\\a&#8407;</text>',
        '''<g transform="translate(170, 105)">
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" fill="#0284c7">3/2</text>
  <line x1="22" y1="-9" x2="33" y2="-9" stroke="#0284c7" stroke-width="1.1"/>
  <polyline points="30,-11 33,-9 30,-7" fill="none" stroke="#0284c7" stroke-width="1.1"/>
  <text x="22" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#0284c7">a</text>
</g>'''
    ),
    (
        '<text x="35" y="100" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0284c7">\\a&#8407;</text>',
        make_vec('a', 35, 100, '#0284c7', font_size=13)
    ),
    (
        '<text x="165" y="65" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">-2\\a&#8407;</text>',
        '''<g transform="translate(155, 65)">
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" fill="#dc2626">-2</text>
  <line x1="16" y1="-9" x2="27" y2="-9" stroke="#dc2626" stroke-width="1.1"/>
  <polyline points="24,-11 27,-9 24,-7" fill="none" stroke="#dc2626" stroke-width="1.1"/>
  <text x="16" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#dc2626">a</text>
</g>'''
    ),
    (
        '<text x="195" y="100" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">-\\\\frac{3}{2}\\a&#8407;</text>',
        '''<g transform="translate(185, 100)">
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" fill="#dc2626">-3/2</text>
  <line x1="28" y1="-9" x2="39" y2="-9" stroke="#dc2626" stroke-width="1.1"/>
  <polyline points="36,-11 39,-9 36,-7" fill="none" stroke="#dc2626" stroke-width="1.1"/>
  <text x="28" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#dc2626">a</text>
</g>'''
    ),
    (
        '<text x="70" y="60" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">\\GA&#8407; = -2\\GM&#8407;</text>',
        '''<g transform="translate(60, 60)">
  <line x1="0" y1="-9" x2="22" y2="-9" stroke="#dc2626" stroke-width="1.1"/>
  <polyline points="19,-11 22,-9 19,-7" fill="none" stroke="#dc2626" stroke-width="1.1"/>
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#dc2626">GA</text>
  <text x="26" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">= -2</text>
  <line x1="56" y1="-9" x2="80" y2="-9" stroke="#dc2626" stroke-width="1.1"/>
  <polyline points="77,-11 80,-9 77,-7" fill="none" stroke="#dc2626" stroke-width="1.1"/>
  <text x="56" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#dc2626">GM</text>
</g>'''
    ),
    (
        '<text x="240" y="150" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#047857">\\MN&#8407; = -\\\\frac{1}{2}\\AB&#8407;</text>',
        '''<g transform="translate(230, 150)">
  <line x1="0" y1="-9" x2="24" y2="-9" stroke="#047857" stroke-width="1.1"/>
  <polyline points="21,-11 24,-9 21,-7" fill="none" stroke="#047857" stroke-width="1.1"/>
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#047857">MN</text>
  <text x="28" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#047857">= -1/2</text>
  <line x1="72" y1="-9" x2="94" y2="-9" stroke="#047857" stroke-width="1.1"/>
  <polyline points="91,-11 94,-9 91,-7" fill="none" stroke="#047857" stroke-width="1.1"/>
  <text x="72" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#047857">AB</text>
</g>'''
    ),
    (
        '<text x="170" y="170" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">\\a&#8407;</text>',
        make_vec('a', 170, 170, '#0284c7', font_size=14)
    ),
    (
        '<text x="75" y="115" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#16a34a">\\b&#8407;</text>',
        make_vec('b', 75, 115, '#16a34a', font_size=14)
    ),
    (
        '<text x="270" y="140" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#0284c7">x\\a&#8407;</text>',
        '''<g transform="translate(265, 140)">
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#0284c7">x</text>
  <line x1="8" y1="-9" x2="19" y2="-9" stroke="#0284c7" stroke-width="1.1"/>
  <polyline points="16,-11 19,-9 16,-7" fill="none" stroke="#0284c7" stroke-width="1.1"/>
  <text x="8" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#0284c7">a</text>
</g>'''
    ),
    (
        '<text x="45" y="65" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#16a34a">y\\b&#8407;</text>',
        '''<g transform="translate(40, 65)">
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#16a34a">y</text>
  <line x1="8" y1="-9" x2="19" y2="-9" stroke="#16a34a" stroke-width="1.1"/>
  <polyline points="16,-11 19,-9 16,-7" fill="none" stroke="#16a34a" stroke-width="1.1"/>
  <text x="8" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#16a34a">b</text>
</g>'''
    ),
    (
        '<text x="180" y="85" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">\\u&#8407; = x\\a&#8407; + y\\b&#8407;</text>',
        '''<g transform="translate(170, 85)">
  <line x1="0" y1="-10" x2="11" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
  <polyline points="8,-12 11,-10 8,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#dc2626">u</text>
  <text x="15" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">= x</text>
  <line x1="42" y1="-10" x2="53" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
  <polyline points="50,-12 53,-10 50,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
  <text x="42" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#dc2626">a</text>
  <text x="57" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">+ y</text>
  <line x1="84" y1="-10" x2="95" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
  <polyline points="92,-12 95,-10 92,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
  <text x="84" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#dc2626">b</text>
</g>'''
    )
]

patch_file('js/lesson-10-9-data.js', b10_9_replacements)

# =========================================================================
# 4. js/lesson-10-10-data.js (Bài 10 Lớp 10: Vectơ trong mặt phẳng toạ độ)
# =========================================================================
b10_10_replacements = [
    (
        '<text x="350" y="95" fill="#38bdf8" font-weight="bold" font-size="13" font-family="\'Segoe UI\', Roboto, sans-serif">\\v&#8407; = (v_x; v_y)</text>',
        '''<g transform="translate(350, 95)">
  <line x1="0" y1="-9" x2="11" y2="-9" stroke="#38bdf8" stroke-width="1.1"/>
  <polyline points="8,-11 11,-9 8,-7" fill="none" stroke="#38bdf8" stroke-width="1.1"/>
  <text x="0" y="0" font-family="'Times New Roman', serif" font-size="13" font-weight="bold" font-style="italic" fill="#38bdf8">v</text>
  <text x="14" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">= (v_x; v_y)</text>
</g>'''
    )
]

patch_file('js/lesson-10-10-data.js', b10_10_replacements)

# =========================================================================
# 5. js/lesson-10-11-data.js (Bài 11 Lớp 10: Tích vô hướng của hai vectơ)
# =========================================================================
b10_11_replacements = [
    (
        '<text x="310" y="45" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">Lực \\F&#8407;</text>',
        '''<g transform="translate(310, 45)">
  <text x="0" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="bold" fill="#dc2626">Lực </text>
  <line x1="35" y1="-10" x2="49" y2="-10" stroke="#dc2626" stroke-width="1.2"/>
  <polyline points="45,-12 49,-10 45,-8" fill="none" stroke="#dc2626" stroke-width="1.2"/>
  <text x="35" y="0" font-family="'Times New Roman', serif" font-size="15" font-weight="bold" font-style="italic" fill="#dc2626">F</text>
</g>'''
    ),
    (
        '<text x="350" y="152" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">Độ dời \\MN&#8407;</text>',
        '''<g transform="translate(340, 152)">
  <text x="0" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#0284c7">Độ dời </text>
  <line x1="52" y1="-10" x2="76" y2="-10" stroke="#0284c7" stroke-width="1.2"/>
  <polyline points="72,-12 76,-10 72,-8" fill="none" stroke="#0284c7" stroke-width="1.2"/>
  <text x="52" y="0" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" font-style="italic" fill="#0284c7">MN</text>
</g>'''
    ),
    (
        '<text x="310" y="225" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#334155">Hình 4.42: Công cơ học A = |\\F&#8407;|·|\\MN&#8407;|·cos(&alpha;)</text>',
        '<text x="310" y="225" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="13" font-weight="bold" fill="#334155">Hình 4.42: Công cơ học A = |F|·|MN|·cos(&alpha;)</text>'
    )
]

patch_file('js/lesson-10-11-data.js', b10_11_replacements)

# =========================================================================
# 6. js/lesson-12-7-data.js (Bài 7 Lớp 12: Hệ toạ độ trong không gian)
# =========================================================================
b12_7_replacements = [
    (
        '<text x="210" y="250" font-style="italic" font-weight="bold" fill="#dc2626">i&#8407;</text>',
        make_vec('i', 210, 250, '#dc2626', font_size=14)
    ),
    (
        '<text x="315" y="210" font-style="italic" font-weight="bold" fill="#16a34a">j&#8407;</text>',
        make_vec('j', 315, 210, '#16a34a', font_size=14)
    ),
    (
        '<text x="272" y="185" font-style="italic" font-weight="bold" fill="#2563eb">k&#8407;</text>',
        make_vec('k', 272, 185, '#2563eb', font_size=14)
    ),
    (
        '<text x="440" y="145" text-anchor="middle" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="10" fill="#e2e8f0">OM&#8407; = 1·i&#8407; + 1,5·j&#8407; + 2·k&#8407;</text>',
        '<text x="440" y="145" text-anchor="middle" font-family="\'Segoe UI\', Roboto, sans-serif" font-size="10" fill="#e2e8f0">OM = 1·i + 1,5·j + 2·k</text>'
    ),
    (
        '<text x="175" y="130" font-family="\'Times New Roman\', serif" font-size="14" font-weight="bold" font-style="italic" fill="#dc2626">\\OM&#8407;</text>',
        make_vec('OM', 175, 130, '#dc2626', font_size=14)
    )
]

patch_file('js/lesson-12-7-data.js', b12_7_replacements)

print("\nAll SVG vector replacements applied!")
