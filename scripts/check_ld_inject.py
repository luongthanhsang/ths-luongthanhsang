with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for j in range(3380, 3405):
    print(f'{j+1}: {lines[j].rstrip()}')
