with open('js/lessons-data.js', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'10-c1', text)]
for idx in matches:
    print(text[idx-50:idx+300])
