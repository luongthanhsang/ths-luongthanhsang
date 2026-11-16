# -*- coding: utf-8 -*-
with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
print("piextrad in lesson-11-1-data.js:", 'piextrad' in text)
print("circ without backslash:", len(re.findall(r'\bcirc\b', text)))
print("tan without backslash:", len(re.findall(r'\ban\b', text)))

for m in re.finditer(r'.{0,30}(?:piextrad|180\^circ|\ban\b).{0,30}', text):
    print(" ", m.group(0).strip())
