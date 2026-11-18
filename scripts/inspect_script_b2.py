with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'11-c1-b2', text)]
print(f"Matches for 11-c1-b2 in js/script.js: {len(matches)}")
for idx in matches:
    print(text[max(0, idx-50):min(len(text), idx+150)])
