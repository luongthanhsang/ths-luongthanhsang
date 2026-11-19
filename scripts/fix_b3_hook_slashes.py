# -*- coding: utf-8 -*-
for filepath in ['js/lesson-11-3-data.js', 'BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js']:
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    text = text.replace(
        '$v = 0{,}85\\sin\\left(\\dfrac{\\pi t}{3}\\right)$',
        '$v = 0{,}85\\\\sin\\\\left(\\\\dfrac{\\\\pi t}{3}\\\\right)$'
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text)
