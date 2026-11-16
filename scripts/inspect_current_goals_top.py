# -*- coding: utf-8 -*-
with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(35, 52):
    print(f"L{i+1}: {lines[i].rstrip()}")
