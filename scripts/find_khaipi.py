# -*- coding: utf-8 -*-
import re

for filepath in ['js/lesson-11-3-data.js', 'js/lesson-11-4-data.js']:
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    
    matches = list(re.finditer(r'k\s*hai\s*pi|khaipi', text))
    print(f"[{filepath}] Found {len(matches)} occurrences of k hai pi / khaipi")
    for m in matches:
        pos = m.start()
        print("  Snippet:", repr(text[pos-20:pos+30]))
