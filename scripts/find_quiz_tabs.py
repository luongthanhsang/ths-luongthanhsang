with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'part2|part3|switchQuizPart', text, re.IGNORECASE)]
print(f"Matches count: {len(matches)}")
for idx in matches[:10]:
    print(text[max(0, idx-50):min(len(text), idx+200)])
