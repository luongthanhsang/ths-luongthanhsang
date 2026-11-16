# -*- coding: utf-8 -*-
with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('examFormatPractice')
while idx != -1:
    print('--- match at', idx, '---')
    print(text[max(0, idx-50):min(len(text), idx+300)])
    idx = text.find('examFormatPractice', idx+1)
