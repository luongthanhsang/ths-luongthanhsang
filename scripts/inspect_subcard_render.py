with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'subsection-card', text)]
if len(matches) > 1:
    idx = matches[1]
    print(text[idx-300:idx+1500])
