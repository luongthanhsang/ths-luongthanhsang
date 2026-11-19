with open('scripts/preview_logo.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for l in lines[25:85]:
    print(l, end='')
