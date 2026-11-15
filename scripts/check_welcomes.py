for path in ['js/lesson-10-3-data.js', 'js/lesson-10-4-data.js']:
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    import re
    m = re.search(r'teacherWelcome\s*:\s*\{([\s\S]*?)\n  \},', text)
    if m:
        print(f"=== {path} teacherWelcome ===")
        print(m.group(0))
    else:
        print(f"=== {path} teacherWelcome NOT MATCHED ===")
