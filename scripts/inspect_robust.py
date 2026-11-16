# -*- coding: utf-8 -*-
with open('scripts/robust_sentence_synth.py', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find("async def")
print(text[idx:])
