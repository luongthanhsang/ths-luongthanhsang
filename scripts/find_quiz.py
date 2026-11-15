with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(3578, -1, -1):
    if 'id:' in lines[i]:
        print(f'{i+1}: {lines[i].strip()}')
        if any(k in lines[i] for k in ['de-', 'quiz-', '0110', '0101']):
            break
