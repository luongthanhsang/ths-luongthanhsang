# -*- coding: utf-8 -*-
with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('class="exam-list-tf"')
print(text[idx:idx+1200])

idx2 = text.find('class="exam-list-sa"')
print(text[idx2:idx2+1200])
