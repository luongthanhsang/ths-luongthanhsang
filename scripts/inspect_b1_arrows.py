# -*- coding: utf-8 -*-
with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('Bốn sơ đồ xoắn ốc minh họa số đo góc lượng giác')
svg_start = text.find('<svg', pos)
svg_end = text.find('</svg>', svg_start) + 6
svg = text[svg_start:svg_end]

# Find markers and arrowheads in this svg
import re
markers = re.findall(r'<marker[\s\S]*?</marker>', svg)
for m in markers:
    print("Marker:", m)

# Find paths with marker-end
paths = re.findall(r'<path[^>]*marker-end[^>]*>', svg)
for p in paths:
    print("Path with marker:", p)
