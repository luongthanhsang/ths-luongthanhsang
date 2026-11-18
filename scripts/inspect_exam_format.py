with open('js/lesson-11-2-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'examFormatPractice:\s*\{', text)
if m:
    print(text[m.start():m.start()+2500])
