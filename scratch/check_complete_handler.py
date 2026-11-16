with open('js/script.js', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'nav-action="complete"|action === ["\']complete["\']', text)]
for idx in matches:
    print(text[idx-50:idx+400])
