with open('js/lesson-11-3-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for l in lines[-30:]:
    print(l, end='')
