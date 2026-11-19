# -*- coding: utf-8 -*-
with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = list(re.finditer(r'"title":\s*"Phương trình[^"]*"', text))
for m in matches:
    print(m.group(0))
