# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_2_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.rfind('return data_js')
print(text[idx-200:idx+50])
