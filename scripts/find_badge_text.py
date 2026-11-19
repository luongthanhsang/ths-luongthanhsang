with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'badgeText' in l:
        for j in range(max(0, i-5), min(len(lines), i+25)):
            print(f'{j+1}: {lines[j].rstrip()}')
        break
