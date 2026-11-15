with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Find all section headers or main items
for m in re.finditer(r'{\s*id:\s*["\'](sec[0-9]+|part[0-9]+|section[0-9]+|[^"\']+)["\']', text):
    snippet = text[m.start():m.start()+200]
    print(snippet.replace('\n', ' '))
