# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('part3ShortAnswer')
idx_end = text.find(']  }', idx)
if idx_end == -1:
    idx_end = text.find('}};\n"""', idx)
print(repr(text[idx:idx_end]))
