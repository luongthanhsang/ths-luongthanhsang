with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
sections = re.findall(r'title:\s*"([^"]+)",\s*num:\s*([0-9]+)', text)
print('Sections (title, num):')
for s in sections:
    print(s)

subsections = re.findall(r'subsections:\s*\[(.*?)\]\s*,?\s*(?:summary|realworld|exam|practice|quizzes|\})', text, re.DOTALL)
print('Subsections blocks:', len(subsections))
for i, sb in enumerate(subsections):
    keys = re.findall(r'key:\s*"([^"]+)"', sb)
    titles = re.findall(r'title:\s*"([^"]+)"', sb)
    print(f'Sec {i+1} subs:', list(zip(keys, titles)))
