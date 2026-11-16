# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'quad' in l:
        print(f"L{i+1}: {l.strip()[:100]}")
