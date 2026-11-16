# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_2_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'id:\s*"(mc-11-2-\d+)".*?correctAnswer:\s*"([A-D])"', text, re.DOTALL)
for m in matches:
    print(m)
