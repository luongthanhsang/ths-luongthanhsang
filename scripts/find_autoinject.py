with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'autoInjectLesson|LESSON_', text)]
print(f"Matches in lessons-data.js: {len(matches)}")
for idx in matches[:5]:
    print(text[max(0, idx-50):idx+250])
