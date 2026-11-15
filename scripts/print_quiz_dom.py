# -*- coding: utf-8 -*-
with open('debug_dom_b3.html', encoding='utf-8') as f:
    text = f.read()

pos = text.find('prompt-mc-10-3-1')
if pos != -1:
    print(text[pos-200:pos+800])
else:
    print("NOT FOUND")
