with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'lessonId|lessonParam|getLesson', text)]
print(f"Matches: {len(matches)}")
for idx in matches[:5]:
    print("--- Snippet ---")
    print(text[max(0, idx-50):idx+300])
