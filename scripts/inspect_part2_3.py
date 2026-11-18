with open('js/lesson-11-2-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'part2TrueFalse', text)
if m:
    print(text[m.start()-50:m.start()+2500])
