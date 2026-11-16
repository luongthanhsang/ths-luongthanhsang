with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'(\/\/[^\n]*(?:stepper|tree|sub-step|subkey|subKey|subsection)[^\n]*)', text, re.IGNORECASE)
for m in matches[:15]:
    print(m)
