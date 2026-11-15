with open('js/lesson-10-3-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
for m in re.finditer(r'50x \+ 100y', text):
    idx = m.start()
    print("--- Formula 50x + 100y ---")
    print(repr(text[idx:idx+250]))
