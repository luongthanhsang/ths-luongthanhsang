# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('poi-11-1-hook-1')
print(repr(text[idx-50:idx+200]))
