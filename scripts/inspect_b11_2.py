# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_2_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

import re
sec_ids = re.findall(r'id:\s*"([^"]+)"', text)
print("Total IDs found:", len(sec_ids))
print("IDs from 25:", sec_ids[25:])
