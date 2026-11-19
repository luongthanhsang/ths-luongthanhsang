# -*- coding: utf-8 -*-
with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text1 = f.read()

pos = text1.find('Bốn sơ đồ xoắn ốc minh họa số đo góc lượng giác')
print("Position:", pos)
svg_start = text1.find('<svg', pos)
svg_end = text1.find('</svg>', svg_start) + 6
print(text1[svg_start:svg_end])
