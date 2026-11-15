with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'renderQuestionInputArea' in l:
        for j in range(max(0, i-5), min(len(lines), i+60)):
            print(f'{j+1}: {lines[j]}', end='')
        break
