with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
scripts = [l.strip() for l in text.splitlines() if '11-' in l and '<script' in l]
for s in scripts:
    print(s)
