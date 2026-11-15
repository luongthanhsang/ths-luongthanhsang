import re

with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    text = f.read()

print('Length of bai-hoc-so.html:', len(text))
for m in re.finditer(r'<div[^>]+id=["\']([^"\']+)["\']', text):
    print('Div with id:', m.group(1))

# Search for sidebar / layout classes
for m in re.finditer(r'class=["\']([^"\']*(?:sidebar|layout|container|lesson|chapter)[^"\']*)["\']', text):
    print('Class:', m.group(1))
