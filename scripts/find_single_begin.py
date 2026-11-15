# -*- coding: utf-8 -*-
with open('js/lesson-10-4-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

import re
for m in re.finditer(r'(?<!\\)\\begin', content):
    pos = m.start()
    line_no = content[:pos].count('\n') + 1
    print(f"Line {line_no}: {content[pos-30:pos+50]!r}")
