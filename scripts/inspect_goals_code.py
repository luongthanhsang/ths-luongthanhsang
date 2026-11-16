# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(40, 80):
    print(f"L{i+1}: {lines[i].rstrip()}")
