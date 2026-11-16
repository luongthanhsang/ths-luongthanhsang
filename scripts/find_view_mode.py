# -*- coding: utf-8 -*-
with open('js/script.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'currentViewMode' in l:
        print(f"Line {i+1}: {l.strip()}")
