with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'function autoInjectLesson', text)
if m:
    print(text[m.start():m.start()+1000])
