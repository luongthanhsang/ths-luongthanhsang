# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('sa-11-1-2')
print(text[idx:idx+800])
