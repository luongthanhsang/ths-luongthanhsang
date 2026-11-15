with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

import re
pattern = re.compile(r'(?<!\\)\\(sqrt|dfrac|circ)\b')

for i, line in enumerate(lines):
    if pattern.search(line):
        print(f"Line {i+1}: {repr(line)}")
