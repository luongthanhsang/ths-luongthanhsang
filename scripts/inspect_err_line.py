# -*- coding: utf-8 -*-
with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")
for i in range(max(0, 1704 - 15), min(len(lines), 1704 + 15)):
    print(f"L{i+1}: {repr(lines[i])}")
