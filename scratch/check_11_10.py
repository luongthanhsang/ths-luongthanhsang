with open('js/lesson-11-10-data.js', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'sections:\s*\[', text)]
for idx in matches:
    print(text[idx:idx+1500])
