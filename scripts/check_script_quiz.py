# -*- coding: utf-8 -*-
with open('js/script.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'correctAnswer|correctIndex', text)]
for idx in matches[:10]:
    print(text[max(0, idx-40):min(len(text), idx+60)].strip())
    print('---')
