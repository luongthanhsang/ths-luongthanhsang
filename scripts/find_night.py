# -*- coding: utf-8 -*-
with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text4 = f.read()

import re
matches = list(re.finditer(r'mathbb\{Z\}[^$]*', text4))
for m in matches:
    pos = m.start()
    snippet = text4[pos:pos+30]
    if '}' in snippet[10:]:
        print("Snippet:", repr(snippet))
        print("Char codes:", [(c, ord(c)) for c in snippet])
