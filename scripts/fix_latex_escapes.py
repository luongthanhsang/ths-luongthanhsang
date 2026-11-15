# -*- coding: utf-8 -*-
import re

for filepath in ['js/lesson-10-4-data.js', 'js/lesson-10-3-data.js']:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace single backslash \begin with \\begin
    content = re.sub(r'(?<!\\)\\begin', r'\\\\begin', content)
    # Replace single backslash \end with \\end
    content = re.sub(r'(?<!\\)\\end', r'\\\\end', content)
    # Replace single backslash \ge with \\ge
    content = re.sub(r'(?<!\\)\\ge', r'\\\\ge', content)
    # Replace single backslash \le with \\le
    content = re.sub(r'(?<!\\)\\le', r'\\\\le', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Fixed {filepath}!")
