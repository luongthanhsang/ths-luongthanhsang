# -*- coding: utf-8 -*-
with open('scripts/generate_b11_1_svgs.py', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('SVG_SEC1A_SPIRALS')
if idx != -1:
    print(text[idx:idx+800])
