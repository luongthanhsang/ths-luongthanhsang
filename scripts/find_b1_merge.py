with open("js/lessons-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'LESSON_11_C1_B1_DATA', text)]
print(f"LESSON_11_C1_B1_DATA found {len(matches)} times:")
for idx in matches:
    print(text[max(0, idx-50):min(len(text), idx+200)])
    print("="*40)
