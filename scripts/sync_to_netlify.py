import shutil

files_to_copy = [
    ('js/lesson-11-12-data.js', 'BAN_CAP_NHAT_NETLIFY/js/lesson-11-12-data.js'),
    ('js/script.js', 'BAN_CAP_NHAT_NETLIFY/js/script.js'),
    ('js/quiz-data.js', 'BAN_CAP_NHAT_NETLIFY/js/quiz-data.js'),
    ('trac-nghiem.html', 'BAN_CAP_NHAT_NETLIFY/trac-nghiem.html'),
    ('bai-hoc-so.html', 'BAN_CAP_NHAT_NETLIFY/bai-hoc-so.html'),
]

for src, dst in files_to_copy:
    shutil.copy2(src, dst)
    print(f"Copied {src} -> {dst}")
