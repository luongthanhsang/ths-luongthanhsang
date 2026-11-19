with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'function\s+([a-zA-Z0-9_]*poi[a-zA-Z0-9_]*|[a-zA-Z0-9_]*checkpoint[a-zA-Z0-9_]*)', text, re.IGNORECASE)
print('Functions matching poi/checkpoint:', matches)
