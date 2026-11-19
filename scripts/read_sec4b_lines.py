with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for j in range(1310, 1360):
    print(f'{j+1}: {lines[j].rstrip()}')
