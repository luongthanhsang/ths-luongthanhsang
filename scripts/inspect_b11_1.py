# -*- coding: utf-8 -*-
import re

with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

cps = re.findall(r'id:\s*[\'\"](poi-[^\'\"]+)[\'\"]', text)
print('Total POIs found:', len(cps))
for cp in cps:
    print(' ', cp)

idx = text.find('examFormatPractice')
if idx != -1:
    print('\n--- examFormatPractice snippet ---')
    print(text[idx:idx+500])
