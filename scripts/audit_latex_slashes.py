# -*- coding: utf-8 -*-
import re

for filepath in ['js/lesson-10-3-data.js', 'js/lesson-10-4-data.js']:
    print(f"\n==========================================")
    print(f"AUDITING LATEX IN: {filepath}")
    print(f"==========================================")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find any single backslash followed by a letter
    # Negative lookbehind (?<!\\) ensures it's a single backslash
    singles = re.findall(r'(?<!\\)\\([a-zA-Z]+)', content)
    unique_singles = sorted(list(set(singles)))
    print(f"Single backslash commands found ({len(unique_singles)} types):")
    print(unique_singles)

    # Print first 20 occurrences with line numbers
    count = 0
    for m in re.finditer(r'(?<!\\)\\([a-zA-Z]+)', content):
        count += 1
        pos = m.start()
        line_no = content[:pos].count('\n') + 1
        cmd = m.group(1)
        snippet = content[max(0, pos-20):min(len(content), pos+30)].replace('\n', ' ')
        if count <= 20:
            print(f"  Line {line_no:4d} | \\{cmd:<10} | {snippet!r}")
    print(f"Total single-backslash occurrences: {count}")
