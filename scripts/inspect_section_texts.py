# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

import re
# Tìm các section: id, title, content
sections = re.findall(r'\{\s*id:\s*[\'\"]([^\'\"]+)[\'\"],\s*title:\s*[\'\"]([^\'\"]+)[\'\"]', text)
print("Sections found:", len(sections))
for s in sections:
    print(" ", s)
