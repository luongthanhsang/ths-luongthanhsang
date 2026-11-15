with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'function getActiveLessonData[\s\S]*?\{([\s\S]*?)\n\}', text)
if m:
    print("getActiveLessonData:")
    print(m.group(0)[:1000])
else:
    for kw in ['10-c2-b3', 'LESSON_10_', 'LESSON_']:
        matches = [m.start() for m in re.finditer(kw, text)]
        print(f"{kw}: {len(matches)} matches")
        if matches:
            idx = matches[0]
            print(text[max(0, idx-50):idx+200])
