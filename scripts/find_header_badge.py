import re

for filename in ['bai-hoc-so.html', 'js/script.js', 'BAN_CAP_NHAT_NETLIFY/bai-hoc-so.html', 'BAN_CAP_NHAT_NETLIFY/js/script.js']:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            text = f.read()
        for idx, m in enumerate(re.finditer(r'BÀI HỌC SỐ|bài học số', text, re.IGNORECASE)):
            start = max(0, m.start() - 60)
            end = min(len(text), m.end() + 60)
            print(f'[{filename}] match {idx}: {repr(text[start:end])}')
    except Exception as e:
        print(f'Error reading {filename}: {e}')
