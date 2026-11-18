with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'window\.LESSON_11_C1_B2_DATA', text)
if m:
    print(text[m.start()-300:m.start()+400])
