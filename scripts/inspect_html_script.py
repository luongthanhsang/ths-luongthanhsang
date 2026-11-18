with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'subsections?', text, re.IGNORECASE)]
print(f"bai-hoc-so.html: Found {len(matches)} occurrences")
for idx in matches[:5]:
    start = max(0, idx - 150)
    end = min(len(text), idx + 250)
    print("--- MATCH bai-hoc-so.html ---")
    print(text[start:end])

with open('js/script.js', 'r', encoding='utf-8') as f:
    text2 = f.read()

matches2 = [m.start() for m in re.finditer(r'subsections?', text2, re.IGNORECASE)]
print(f"js/script.js: Found {len(matches2)} occurrences")
for idx in matches2[:5]:
    start = max(0, idx - 150)
    end = min(len(text2), idx + 250)
    print("--- MATCH js/script.js ---")
    print(text2[start:end])
