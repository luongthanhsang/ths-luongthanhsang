import glob

for fpath in glob.glob('*.html') + ['js/script.js']:
    with open(fpath, 'r', encoding='utf-8') as f:
        t = f.read().lower()
    for kw in ['truy cập', 'lượt tải', 'counter', 'visitor', 'view']:
        if kw in t:
            print(f"Keyword '{kw}' found in {fpath}")
