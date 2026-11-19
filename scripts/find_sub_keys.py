with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.findall(r'data-step-id="([^"]+)"\s+data-subkey="([^"]+)"', text)
for s in m[:20]:
    print('Tree sub-item:', s)
