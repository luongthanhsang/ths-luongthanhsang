with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()
for j in range(762, 775):
    print(f'B1 L{j+1}: {lines[j].rstrip()}')

with open('js/lesson-11-2-data.js', 'r', encoding='utf-8') as f:
    lines2 = f.readlines()
for j in range(1225, 1238):
    print(f'B2 L{j+1}: {lines2[j].rstrip()}')
