with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'subsection-card', text)]
print(f"js/script.js: {len(matches)} matches")
for idx in matches[:5]:
    start = max(0, idx - 100)
    end = min(len(text), idx + 200)
    print("--- MATCH ---")
    print(text[start:end])
