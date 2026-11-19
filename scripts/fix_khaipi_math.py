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

    # In math formulas: replace 'k hai pi' or 'khaipi' with 'k2\\pi'
    # Math contexts:
    # 1. '+ k hai pi' or '+ khaipi' -> '+ k2\\pi'
    # 2. '= k hai pi' or '= khaipi' -> '= k2\\pi'
    # 3. '(k hai pi' -> '(k2\\pi'
    # 4. '; k hai pi' -> '; k2\\pi'
    # 5. '$k hai pi' -> '$k2\\pi'
    # 6. 'k hai pi$' -> 'k2\\pi$'
    # 7. 'k hai pi\\\\' -> 'k2\\pi\\\\'
    # 8. 'k hai pi\\ ' -> 'k2\\pi\\ '
    # 9. 'k hai pi\\quad' -> 'k2\\pi\\quad'
    # 10. 'không phải $k hai pi$' -> 'không phải $k2\\pi$'

    patterns = [
        (r'\+\s*k\s*hai\s*pi', '+ k2\\\\pi'),
        (r'=\s*k\s*hai\s*pi', '= k2\\\\pi'),
        (r'\(\s*k\s*hai\s*pi', '(k2\\\\pi'),
        (r';\s*k\s*hai\s*pi', '; k2\\\\pi'),
        (r'\$\s*k\s*hai\s*pi', '$k2\\\\pi'),
        (r'k\s*hai\s*pi\s*\$', 'k2\\\\pi$'),
        (r'k\s*hai\s*pi\s*\\\\', 'k2\\\\pi\\\\'),
        (r'k\s*hai\s*pi\s*\\quad', 'k2\\\\pi\\\\quad'),
        (r'k\s*hai\s*pi\s*\\mid', 'k2\\\\pi\\\\mid'),
        (r'k\s*hai\s*pi\s*\)', 'k2\\\\pi)'),
        (r'k\s*hai\s*pi\s*\.', 'k2\\\\pi.'),
        (r'khaipi', 'k2\\\\pi')
    ]

    count = 0
    for pat, repl in patterns:
        text, n = re.subn(pat, repl, text)
        count += n

    print(f"[{filepath}] Replaced {count} math occurrences of 'k hai pi' -> 'k2\\pi'")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text)
