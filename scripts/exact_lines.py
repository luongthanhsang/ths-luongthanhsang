# -*- coding: utf-8 -*-
with open('js/script.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for j in range(5053, 5065):
    print(repr(lines[j]))
