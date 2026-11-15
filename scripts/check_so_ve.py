with open('js/lesson-10-3-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
for m in re.finditer(r'số vé loại 1', text, re.IGNORECASE):
    idx = m.start()
    print("--- Context around 'số vé loại 1' ---")
    print(repr(text[max(0, idx-50):idx+350]))
