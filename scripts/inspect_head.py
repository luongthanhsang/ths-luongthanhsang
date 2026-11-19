# -*- coding: utf-8 -*-
with open('js/lesson-11-3-data.js', 'r', encoding='utf-8') as f:
    lines = [f.readline() for _ in range(120)]
print(''.join(lines))
