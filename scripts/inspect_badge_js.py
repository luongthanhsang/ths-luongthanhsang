with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'const badgeText =', text)
if m:
    print(text[m.start()-200:m.start()+400])
