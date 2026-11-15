with open('css/olm-lesson.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'lesson-structure-header', text)]
for idx in matches:
    print(text[idx:idx+1500])
