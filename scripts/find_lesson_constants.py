with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'(\bLESSON_[A-Z0-9_]+_DATA\b)', text)
print(f"Lesson data constants referenced in script.js ({len(set(matches))} unique):")
for m in sorted(set(matches)):
    print(f"  {m}")
