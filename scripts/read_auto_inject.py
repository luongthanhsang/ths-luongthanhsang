with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for j in range(3345, 3385):
    print(f'{j+1}: {lines[j].rstrip()}')
