# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'checkpoints:' in l:
        print(f"L{i+1}: {l.strip()}")
        # in 15 dòng tiếp theo
        for j in range(i+1, min(len(lines), i+20)):
            print(f"  L{j+1}: {lines[j].strip()[:90]}")
            if ']' in lines[j]:
                break
