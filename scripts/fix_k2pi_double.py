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

    text, n = re.subn(r'k2(?<!\\)\\pi\b', lambda m: 'k2\\\\pi', text)
    print(f"[{filepath}] Replaced {n} single-slash 'k2\\pi' -> 'k2\\\\pi'")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text)
