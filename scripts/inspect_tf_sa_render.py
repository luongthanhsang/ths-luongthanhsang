# -*- coding: utf-8 -*-
with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('part2TrueFalse')
if idx != -1:
    print("--- part2TrueFalse render snippet ---")
    print(text[idx-50:idx+800])

idx2 = text.find('part3ShortAnswer')
if idx2 != -1:
    print("--- part3ShortAnswer render snippet ---")
    print(text[idx2-50:idx2+800])
