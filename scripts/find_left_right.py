# -*- coding: utf-8 -*-
with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re

for i, line in enumerate(text.splitlines()):
    if 'left' in line or 'right' in line:
        print(f"L{i+1}: {line.strip()[:100]}")
