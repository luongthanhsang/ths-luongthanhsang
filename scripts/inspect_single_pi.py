# -*- coding: utf-8 -*-
import re

with open('js/lesson-11-3-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

for m in re.finditer(r'(?<!\\)\\pi\b', text):
    s = max(0, m.start() - 30)
    e = min(len(text), m.end() + 30)
    print("Single \\pi at", m.start(), ":", repr(text[s:e]))

for m in re.finditer(r'(?<!\\)\\mid\b', text):
    s = max(0, m.start() - 30)
    e = min(len(text), m.end() + 30)
    print("Single \\mid at", m.start(), ":", repr(text[s:e]))
