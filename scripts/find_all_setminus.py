# -*- coding: utf-8 -*-
import re

for fname in ['js/lesson-11-3-data.js', 'js/lesson-11-4-data.js']:
    print("=" * 50)
    print("FILE:", fname)
    with open(fname, 'r', encoding='utf-8') as f:
        text = f.read()
    
    matches = list(re.finditer(r'setminus[^\$]*', text))
    for m in matches:
        print("Setminus match:", repr(m.group(0)[:80]))
