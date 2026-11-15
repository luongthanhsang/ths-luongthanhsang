with open('js/lesson-10-3-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
for m in re.finditer(r'bất đẳng thức đúng', text, re.IGNORECASE):
    idx = m.start()
    print("--- Context around 'bất đẳng thức đúng' ---")
    print(repr(text[max(0, idx-100):idx+120]))
