# -*- coding: utf-8 -*-
with open('js/lesson-11-2-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for j in range(20, 50):
    print(lines[j], end='')
