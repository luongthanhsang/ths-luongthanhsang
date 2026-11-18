with open('css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.findall(r'[^\n]*gold[^\n]*', text, re.IGNORECASE)
for line in m[:25]:
    print(line)
