with open('css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'\.hero-motto\s*\{[^}]+\}', text)
if m:
    print("CSS for .hero-motto:")
    print(m.group(0))
