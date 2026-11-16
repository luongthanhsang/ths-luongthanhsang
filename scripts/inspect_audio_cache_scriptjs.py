# -*- coding: utf-8 -*-
with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'[A-Za-z0-9_]*AUDIO_CACHE[A-Za-z0-9_]*', text)
print('AUDIO_CACHE occurrences in script.js:', set(matches))

idx = text.find('AUDIO_CACHE')
while idx != -1:
    print('---')
    print(text[max(0, idx-80):min(len(text), idx+120)])
    idx = text.find('AUDIO_CACHE', idx+1)
