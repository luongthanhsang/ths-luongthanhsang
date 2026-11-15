# -*- coding: utf-8 -*-
with open('js/lesson-10-4-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Look for single backslash followed by characters that form escape sequences in JS:
# \b, \f, \n, \r, \t, \v
# In regex: (?<!\\)\\(f|b|v)
escapes = re.findall(r'(?<!\\)\\(f|b|v)[a-zA-Z]*', content)
print("Single backslash escapes found:", set(escapes))

for m in re.finditer(r'(?<!\\)\\([fbv][a-zA-Z]+)', content):
    print("Found escape at pos", m.start(), ":", m.group(0))
