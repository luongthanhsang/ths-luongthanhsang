# -*- coding: utf-8 -*-
with open('scripts/generate_b11_2_svgs.py', 'r', encoding='utf-8') as f:
    text = f.read()

import re
sections = re.findall(r'(# \d+\..*?)(?=# \d+|\Z)', text, re.DOTALL)
for s in sections:
    print(s[:200].strip())
    print("="*40)
