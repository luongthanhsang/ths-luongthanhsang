# -*- coding: utf-8 -*-
import re

for filepath in ['js/lesson-11-3-data.js', 'js/lesson-11-4-data.js']:
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    matches = list(re.finditer(r'k2(\\+)pi', text))
    print(f"[{filepath}] k2\\pi matches: {len(matches)}")
    types = {}
    for m in matches:
        sl = len(m.group(1))
        types[sl] = types.get(sl, 0) + 1
    print("  Slash counts:", types)
