# -*- coding: utf-8 -*-
import re

lessons = [
    ('11-1', 'js/lesson-11-1-data.js'),
    ('11-2', 'js/lesson-11-2-data.js'),
    ('11-3', 'js/lesson-11-3-data.js'),
    ('11-4', 'js/lesson-11-4-data.js')
]

for lid, fpath in lessons:
    print("\n" + "=" * 60)
    print(f"CHECKING RAW 'PI' IN LESSON {lid}:")
    with open(fpath, 'r', encoding='utf-8') as f:
        text = f.read()

    # Find occurrences of 'pi' that are NOT preceded by backslash, NOT in audioScript, NOT inside standard words like 'spiral', 'quốc', etc.
    # Exclude audioScript fields
    text_no_audio = re.sub(r'audioScript:\s*"[^"]*"', '', text)
    text_no_audio = re.sub(r'audioScript:\s*`[^`]*`', '', text_no_audio)

    # Find standalone 'pi', 'pi/2', '2pi', '-pi', 'kpi', 'k2pi'
    pat = r'(?<![a-zA-Z0-9_\\])([-+]?[0-9]*pi(?:/[0-9]+)?|k[0-9]*pi)(?![a-zA-Z0-9_])'
    matches = list(re.finditer(pat, text_no_audio, re.IGNORECASE))
    
    # Filter out inside LaTeX $...$ if it is \pi
    # Let's inspect each match:
    real_corruptions = []
    for m in matches:
        s = max(0, m.start() - 30)
        e = min(len(text_no_audio), m.end() + 30)
        snippet = text_no_audio[s:e].replace('\n', ' ')
        real_corruptions.append((m.group(0), snippet))
    
    print(f"Total candidate raw 'pi' occurrences: {len(real_corruptions)}")
    for val, snip in real_corruptions[:15]:
        print(f"  [{val}] in: {snip}")
