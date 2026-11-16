# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_2_full.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if any(k in l for k in ['key: "b"', 'key: "a"', 'wrapup:']):
        print(f"Line {i+1}: {l.strip()[:60]}")
        for j in range(i, min(len(lines), i+8)):
            print(f"  {lines[j]}", end='')
