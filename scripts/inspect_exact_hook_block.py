# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('poi-11-1-hook-1')
idx_start = text.rfind('checkpoints: [', 0, idx)
idx_end = text.find(']', idx) + 1
print("Exact hook block:")
print(repr(text[idx_start:idx_end]))
