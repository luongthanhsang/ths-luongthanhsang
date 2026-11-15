with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'sidebar', text, re.IGNORECASE)]
for idx in matches[:10]:
    print(text[max(0, idx-50):min(len(text), idx+150)])
    print('---')
