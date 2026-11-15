with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(3570, 3600):
    print(f'{i+1}: {repr(lines[i])}')
