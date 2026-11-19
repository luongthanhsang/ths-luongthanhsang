with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

import re
for line_no, line in enumerate(lines, 1):
    line_no_math = re.sub(r'\$.*?\$', ' ', line)
    line_clean = re.sub(r'<[^>]+>', ' ', line_no_math)
    matches = list(re.finditer(r'\b(?:Hơn kém pi|HƠN KÉM PI|hơn kém pi|chu k[iì]\s*[0-9]*\s*pi|bằng\s*[0-9]*\s*pi|khoảng\s*[0-9]*\s*pi|đoạn\s*[0-9]*\s*pi|góc pi|Góc pi|pi/2|pi/3|pi/4|pi/6|2pi)\b', line_clean))
    if matches:
        for m in matches:
            print(f'L{line_no}: "{m.group(0)}" in line: {line.strip()[:110]}')
