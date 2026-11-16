# -*- coding: utf-8 -*-
with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
print('File size:', len(text), 'chars')
pois = re.findall(r'id:\s*[\'\"](poi-[^\'\"]+)[\'\"]', text)
print('POIs count in js:', len(pois))
for p in pois:
    print(' ', p)

print('part1MultipleChoice count:', len(re.findall(r'id:\s*[\'\"](mc-[^\'\"]+)[\'\"]', text)))
print('part2TrueFalse count:', len(re.findall(r'id:\s*[\'\"](tf-[^\'\"]+)[\'\"]', text)))
print('part3ShortAnswer count:', len(re.findall(r'id:\s*[\'\"](sa-[^\'\"]+)[\'\"]', text)))
print('Raw quad outside math:', len(re.findall(r';\s*\\quad', text)))
