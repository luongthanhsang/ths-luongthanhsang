# -*- coding: utf-8 -*-
with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(15, 120):
    if i < len(lines):
        print(lines[i], end='')
