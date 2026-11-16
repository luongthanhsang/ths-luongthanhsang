# -*- coding: utf-8 -*-
with open('js/script.js', 'r', encoding='utf-8', errors='ignore') as f:
    lines = f.readlines()

for j in range(3550, 3650):
    print(f"{j+1}: {lines[j]}", end='')
