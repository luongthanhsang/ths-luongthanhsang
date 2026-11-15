with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'LESSON_10_C2_B3_DATA', text)]
print(f"Matches for LESSON_10_C2_B3_DATA: {len(matches)}")
for idx in matches:
    print(text[max(0, idx-50):idx+250])
