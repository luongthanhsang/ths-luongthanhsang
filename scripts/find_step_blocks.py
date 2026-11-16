with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'data-step-block', text)]
print(f"data-step-block found {len(matches)} times:")
for idx in matches:
    print("At", idx, ":")
    print(text[max(0, idx-50):min(len(text), idx+150)])
    print("="*40)
