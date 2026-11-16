# -*- coding: utf-8 -*-
with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('class="exam-list-mc"')
print(text[idx+1000:idx+2000])
