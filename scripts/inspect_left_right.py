# -*- coding: utf-8 -*-
import re

with open('js/lesson-11-3-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect all occurrences of \\r\\right or \r\right or \\\left
matches = list(re.finditer(r'(\\+r\\+right|\\+left|\\+right)', text))
print(f"Total left/right slash matches: {len(matches)}")
types = {}
for m in matches:
    val = m.group(0)
    types[val] = types.get(val, 0) + 1

for val, count in types.items():
    print(f"  {repr(val)}: {count}")
