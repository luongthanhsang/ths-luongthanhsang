with open('css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r':root\s*\{[^}]+\}', text)
if m:
    print(m.group(0))
