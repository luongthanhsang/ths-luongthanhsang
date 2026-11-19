with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'logo-ths-sang.png' in l:
        for j in range(max(0, i-5), min(len(lines), i+10)):
            print(f'{j+1}: {lines[j].rstrip()}')
