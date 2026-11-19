with open('css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'\.brand-logo-badge.*?\}(?:\s*\.[^{]+\{[^}]+\})*', text, re.DOTALL)
if m:
    print(m.group(0))
else:
    print('Not found')
