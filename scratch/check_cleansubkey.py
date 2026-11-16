with open('js/script.js', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'function cleanSubKey[\s\S]{1,300}', text)
if m:
    print(m.group(0))
