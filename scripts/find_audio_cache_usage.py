with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'AUDIO_CACHE', text)]
print(f"AUDIO_CACHE matches: {len(matches)}")
for idx in matches:
    print(text[max(0, idx-50):idx+250])
