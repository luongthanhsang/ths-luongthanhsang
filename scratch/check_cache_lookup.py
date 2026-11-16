with open('js/script.js', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'AUDIO_CACHE|KNOWN_AUDIO_DURATIONS', text)]
for idx in matches[:5]:
    print(text[idx-50:idx+250])
