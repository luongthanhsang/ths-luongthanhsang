with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'<div class="brand-logo[^"]*">.*?</div>', text, re.DOTALL)
if m:
    print('index.html brand-logo:', m.group(0))
