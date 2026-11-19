with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for j in range(2888, 2940):
    print(f'{j+1}: {lines[j]}', end='')
