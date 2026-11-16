# -*- coding: utf-8 -*-
import shutil

for path in ['bai-hoc-so.html', 'BAN_CAP_NHAT_NETLIFY/bai-hoc-so.html']:
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()

    target = '<script src="js/lesson-11-1-data.js?v=20261116_01"></script>'
    addition = '\n    <script src="js/b11-2-audio-cache.js?v=20261116_01"></script>\n    <script src="js/lesson-11-2-data.js?v=20261116_01"></script>'

    if 'js/lesson-11-2-data.js' not in text and target in text:
        text = text.replace(target, target + addition)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Patched {path}")
    else:
        print(f"Skipped or already present in {path}")
