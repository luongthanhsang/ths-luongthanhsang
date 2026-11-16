# -*- coding: utf-8 -*-
with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(min(30, len(lines))):
    print(f"L{i+1}: {lines[i].rstrip()}")
