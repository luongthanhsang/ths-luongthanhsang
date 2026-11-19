# -*- coding: utf-8 -*-
with open('bai-hoc-so.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('MathJax')
if idx != -1:
    print(text[max(0, idx-200):min(len(text), idx+1000)])
else:
    print("MathJax not found in bai-hoc-so.html")
