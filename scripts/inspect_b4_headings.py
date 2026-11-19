# -*- coding: utf-8 -*-
with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'<h[345][^>]*>.*?</h[345]>', text)
print(f"B4 heading tags: {len(matches)}")
for h in matches[:15]:
    print(" ", h)
