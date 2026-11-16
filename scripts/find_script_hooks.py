# -*- coding: utf-8 -*-
with open('js/script.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'B11_1_AUDIO_CACHE' in l:
        print(f"Line {i+1}: {l.strip()}")
        for j in range(max(0, i-2), min(len(lines), i+8)):
            print(f"  {lines[j]}", end='')
    if 'LESSON_11_C1_B1_DATA' in l:
        print(f"\nLine {i+1}: {l.strip()}")
        for j in range(max(0, i-2), min(len(lines), i+8)):
            print(f"  {lines[j]}", end='')
