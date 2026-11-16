# -*- coding: utf-8 -*-
with open('scripts/generate_lesson_11_1_perfect.py', 'r', encoding='utf-8') as f:
    text = f.read()

for l in text.splitlines()[50:120]:
    print(l)
