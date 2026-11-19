import re

for fpath in ['js/lesson-11-3-data.js', 'js/lesson-11-4-data.js']:
    print(f"\n--- {fpath} ---")
    with open(fpath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    for line_no, line in enumerate(lines, 1):
        line_no_math = re.sub(r'\$.*?\$', ' ', line)
        line_clean = re.sub(r'<[^>]+>', ' ', line_no_math)
        matches = list(re.finditer(r'\b(?:pi/2|pi/3|pi/4|pi/6|2pi)\b', line_clean))
        if matches:
            for m in matches:
                print(f'L{line_no}: "{m.group(0)}" in line: {line.strip()[:110]}')
