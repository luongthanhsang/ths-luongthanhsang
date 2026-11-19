# -*- coding: utf-8 -*-
with open('css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('.section-heading-blue')
print(text[pos:pos+400])
