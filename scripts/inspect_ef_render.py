# -*- coding: utf-8 -*-
with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('if (lesson.examFormatPractice) {')
if idx != -1:
    print(text[idx:idx+2000])
