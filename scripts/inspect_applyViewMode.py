with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'function applyViewMode\(\)', text)
if m:
    print(text[m.start():m.start()+1500])
