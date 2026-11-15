with open('js/lesson-10-3-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
for m in re.finditer(r'Mẹo của Thầy Sáng', text, re.IGNORECASE):
    idx = m.start()
    print("--- Context around 'Mẹo của Thầy Sáng' ---")
    print(repr(text[max(0, idx-50):idx+250]))
