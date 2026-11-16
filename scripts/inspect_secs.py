# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_2_full.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for idx in [136, 240, 341, 435, 532, 620, 704, 805]:
    print(f"--- Line {idx} ---")
    for j in range(idx-1, idx+15):
        if j < len(lines):
            print(lines[j], end='')
