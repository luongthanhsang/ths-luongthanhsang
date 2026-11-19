import glob

for f in ['js/lesson-11-1-data.js', 'js/lesson-11-2-data.js', 'js/lesson-11-3-data.js', 'js/lesson-11-4-data.js']:
    with open(f, 'r', encoding='utf-8') as fp:
        lines = fp.readlines()
    missing = []
    for i in range(len(lines) - 1):
        line = lines[i].rstrip()
        next_line = lines[i+1].strip()
        if 'explain:' in next_line:
            if not line.endswith(',') and not line.endswith('{') and not line.endswith('['):
                missing.append((i+1, line))
    print(f"{f}: {len(missing)} lines missing comma before explain:")
    for m in missing:
        print(f"  Line {m[0]}: {m[1]}")
