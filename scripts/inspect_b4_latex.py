# -*- coding: utf-8 -*-
import re

with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    text4 = f.read()

# Let's search for \iff or other LaTeX commands
pats = [r'\\iff\b', r'\\r\\right', r'\\\left', r'\\\right', r'Extra \\left', r'missing \\right', r'\\\\iff']
for p in pats:
    m = re.findall(p, text4)
    print(f"B4 pattern {p}: {len(m)} occurrences")

# Check if there are any unescaped \ in JSON strings
# In JSON, a backslash must be \\ in the file to produce a \ in memory!
# If someone writes "\\sin" in JSON, in memory that's "\sin".
# If they write "\sin" (single slash in JSON), that's an invalid JSON escape!
# Let's check single slashes in text4:
single_slash = list(re.finditer(r'(?<!\\)\\([a-zA-Z]+)', text4))
print(f"B4 potential single slashes: {len(single_slash)}")
for s in single_slash[:15]:
    ctx = text4[max(0, s.start()-20):min(len(text4), s.end()+20)].replace('\n', ' ')
    print("  ", s.group(0), "in context:", ctx)
