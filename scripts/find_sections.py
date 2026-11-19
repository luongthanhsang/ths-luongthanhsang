# -*- coding: utf-8 -*-
with open('js/lesson-11-3-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

s1_idx = text.find('id: "11-c1-b3-s1"')
s2_idx = text.find('id: "11-c1-b3-s2"')
print(text[s1_idx:s1_idx + 3500])
