# -*- coding: utf-8 -*-
import re

with open('js/lesson-11-3-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find every \left in the file
matches = list(re.finditer(r'\\left([^\s\(\[\{])', text))
print(f"Total \\left followed by non-bracket: {len(matches)}")
for m in matches:
    pos = m.start()
    s = max(0, pos - 20)
    e = min(len(text), pos + 40)
    print("Match:", repr(text[pos:pos+10]), "in context:", repr(text[s:e]))
