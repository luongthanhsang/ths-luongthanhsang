with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for j in range(35, 110):
    print(f'{j+1}: {lines[j].rstrip()}')
