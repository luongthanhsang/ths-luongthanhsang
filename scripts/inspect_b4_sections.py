# -*- coding: utf-8 -*-
with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text4 = f.read()

import re
matches = re.findall(r'"title":\s*"(.*?)"', text4)
for m in matches:
    print("title:", m)
