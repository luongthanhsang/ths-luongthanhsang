# -*- coding: utf-8 -*-
with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx1 = text.find('id: "11-c1-b1"')
idx2 = text.find('id: "11-c1-b3"')
print(text[idx1:idx2])
