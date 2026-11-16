with open('js/script.js', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'section-body-wrap[\s\S]{1,500}', text)
if m:
    print(m.group(0))
