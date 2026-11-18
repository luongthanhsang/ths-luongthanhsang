with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'LESSON_11_C1_B2_DATA', text)]
for idx in matches:
    print('--- in script.js ---')
    print(text[max(0, idx-100):min(len(text), idx+200)])

with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text2 = f.read()

matches2 = [m.start() for m in re.finditer(r'LESSON_11_C1_B2_DATA', text2)]
for idx in matches2:
    print('--- in lessons-data.js ---')
    print(text2[max(0, idx-100):min(len(text2), idx+200)])
