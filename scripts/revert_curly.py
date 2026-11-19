# -*- coding: utf-8 -*-
import re

for filepath in [
    'js/lesson-11-3-data.js',
    'BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js',
    'js/lesson-11-4-data.js',
    'BAN_CAP_NHAT_NETLIFY/js/lesson-11-4-data.js'
]:
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # In JS string/JSON, to pass \{ to MathJax, we need \\{ in the file.
    # So \left\{ in file gave MathJax: \left{ (which is invalid LaTeX!)
    # We need \\left\\\\{ and \\right\\\\} in the file!
    t1, n1 = re.subn(r'\\left\\\{', r'\\\\left\\\\{', text)
    t2, n2 = re.subn(r'\\right\\\}', r'\\\\right\\\\}', t1)
    
    print(f"[{filepath}] Reverted \\left\\{{ -> \\\\left\\\\{{: {n1}, \\right\\}} -> \\\\right\\\\}}: {n2}")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(t2)
