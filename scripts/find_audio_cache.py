with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'B\d+.*AUDIO_CACHE.*', text)
for m in matches:
    print(m)
