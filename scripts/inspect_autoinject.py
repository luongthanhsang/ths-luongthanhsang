with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'autoInjectLesson', text)]
print(f"Total autoInjectLesson calls: {len(matches)}")
for idx in matches[-10:]:
    print(text[idx-50:idx+250])
