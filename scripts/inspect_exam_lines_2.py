# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(950, len(lines)):
    print(f"L{i+1}: {lines[i].rstrip()[:100]}")
