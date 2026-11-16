# -*- coding: utf-8 -*-
with open('js/script.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for j in range(3145, 3230):
    print(f"{j+1}: {lines[j]}", end='')
