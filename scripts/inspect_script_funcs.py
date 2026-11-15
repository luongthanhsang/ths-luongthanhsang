with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.finditer(r'//\s*===+\s*([^\n=]+)\s*===+|function\s+([a-zA-Z0-9_]+)\s*\(', text[88000:115000])
for m in matches:
    print(m.group(0))
