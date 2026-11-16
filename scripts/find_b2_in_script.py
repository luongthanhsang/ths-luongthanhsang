with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'11-c1-b2', text)]
print(f"11-c1-b2 found {len(matches)} times in script.js:")
for idx in matches:
    print(text[max(0, idx-100):min(len(text), idx+200)])
    print("="*40)
