import re

with open('js/lesson-10-8-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'sections:\s*\[([\s\S]*?)realworldWrapup:', text)
if m:
    sec_text = m.group(1)
    titles = re.findall(r'title:\s*"([^"]+)"', sec_text)
    print('Section titles:', titles)
else:
    print('sections not found!')
