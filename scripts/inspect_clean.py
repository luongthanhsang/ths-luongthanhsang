# -*- coding: utf-8 -*-
with open('scripts/synth_b11_1_clean.py', 'r', encoding='utf-8') as f:
    text = f.read()

print(text[text.find("async def"):])
