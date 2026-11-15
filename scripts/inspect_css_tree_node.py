with open('css/olm-lesson.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'\.tree-node', text)]
if matches:
    print(text[matches[0]:matches[0]+2000])
