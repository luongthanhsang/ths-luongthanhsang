import re

with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

keys = re.findall(r'["\']([0-9]+-[^"\']+)["\']', text)
print("Keys in lessons-data.js:", keys)
