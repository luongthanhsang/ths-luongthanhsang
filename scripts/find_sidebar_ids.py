with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.finditer(r'sidebar[a-zA-Z0-9_]*', text)
s = set(m.group(0) for m in matches)
print("Sidebar identifiers in script.js:", s)
