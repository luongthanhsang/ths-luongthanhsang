# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

import re
print("Occurrences of 'quad':", len(re.findall(r'quad', text)))
for m in re.finditer(r'.{0,40}quad.{0,40}', text):
    print(" ", m.group(0).strip())

print("\nOccurrences of 'ext{':", len(re.findall(r'ext\{', text)))
for m in re.finditer(r'.{0,40}ext\{.{0,40}', text):
    print(" ", m.group(0).strip())
