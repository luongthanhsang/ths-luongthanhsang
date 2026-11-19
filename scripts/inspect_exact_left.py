# -*- coding: utf-8 -*-
with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
for m in re.finditer(r'right', text):
    s = max(0, m.start() - 10)
    e = min(len(text), m.end() + 20)
    print("B4 right context:", repr(text[s:e]))
