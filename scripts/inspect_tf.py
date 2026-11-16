# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_2_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('tf-11-2-1')
print(text[idx:idx+800])
