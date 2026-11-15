for p in ['trac-nghiem.html', 'BAN_CAP_NHAT_NETLIFY/trac-nghiem.html']:
    with open(p, 'r', encoding='utf-8') as f:
        text = f.read()
    for l in text.splitlines():
        if 'quiz-data.js' in l or 'script.js' in l:
            print(f"{p}: {l.strip()}")
