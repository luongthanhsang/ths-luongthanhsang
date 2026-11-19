with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print('Head (first 25 lines):')
for l in lines[:25]:
    print(l, end='')

print('\nTail (last 25 lines):')
for l in lines[-25:]:
    print(l, end='')
