# -*- coding: utf-8 -*-
with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for j in range(1260, min(len(lines), 1320)):
    print(lines[j], end="")
