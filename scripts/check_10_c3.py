with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m5 = re.search(r'["\']10-c3-b5["\']\s*:\s*\{[\s\S]*?\n  \},', text)
if m5:
    print('10-c3-b5:')
    print(m5.group(0))
m6 = re.search(r'["\']10-c3-b6["\']\s*:\s*\{[\s\S]*?\n  \},', text)
if m6:
    print('10-c3-b6:')
    print(m6.group(0))
