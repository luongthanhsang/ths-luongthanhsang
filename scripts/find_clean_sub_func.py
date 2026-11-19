with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'function cleanSubKey.*?\n\}', text, re.DOTALL)
if m:
    print(m.group(0))
else:
    print('cleanSubKey not found as function')
