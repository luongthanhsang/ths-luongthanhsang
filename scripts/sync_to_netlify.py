# -*- coding: utf-8 -*-
import shutil
import os

os.makedirs('BAN_CAP_NHAT_NETLIFY/js', exist_ok=True)
os.makedirs('BAN_CAP_NHAT_NETLIFY/assets/audio', exist_ok=True)

files_to_copy = [
    ('js/lesson-10-3-data.js', 'BAN_CAP_NHAT_NETLIFY/js/lesson-10-3-data.js'),
    ('js/b10-3-audio-cache.js', 'BAN_CAP_NHAT_NETLIFY/js/b10-3-audio-cache.js'),
    ('js/lesson-10-4-data.js', 'BAN_CAP_NHAT_NETLIFY/js/lesson-10-4-data.js'),
    ('js/b10-4-audio-cache.js', 'BAN_CAP_NHAT_NETLIFY/js/b10-4-audio-cache.js'),
    ('js/lessons-data.js', 'BAN_CAP_NHAT_NETLIFY/js/lessons-data.js'),
    ('js/script.js', 'BAN_CAP_NHAT_NETLIFY/js/script.js'),
    ('bai-hoc-so.html', 'BAN_CAP_NHAT_NETLIFY/bai-hoc-so.html'),
]

# Audio files for Bài 3 and Bài 4
for prefix in ['b10_3_', 'b10_4_']:
    for f in os.listdir('assets/audio'):
        if f.startswith(prefix) and f.endswith('.mp3'):
            files_to_copy.append((f'assets/audio/{f}', f'BAN_CAP_NHAT_NETLIFY/assets/audio/{f}'))

for src, dst in files_to_copy:
    shutil.copy2(src, dst)
    print(f"Copied {src} -> {dst} ({os.path.getsize(dst)} bytes)")

print("\nALL NETLIFY SYNC COMPLETE!")
