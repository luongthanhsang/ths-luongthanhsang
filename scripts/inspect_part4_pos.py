with open('js/lesson-11-2-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'PHẦN IV', text)]
print("Matches count:", len(matches))
if len(matches) > 1:
    idx = matches[1]
    print(text[idx-50:idx+2500])
