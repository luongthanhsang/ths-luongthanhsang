with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for j in range(835, 855):
    print(f'L{j+1}: {lines[j].rstrip()}')
