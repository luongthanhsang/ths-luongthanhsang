with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'id:\s*"11-c1-b3"', text)
if m:
    print(text[m.start()-50:m.start()+1500])
