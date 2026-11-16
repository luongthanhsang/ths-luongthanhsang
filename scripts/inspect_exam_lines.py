# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines in build_lesson_11_1_full.py: {len(lines)}")
for i in range(900, min(len(lines), 950)):
    print(f"L{i+1}: {lines[i].rstrip()[:100]}")
