with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'function renderLesson' in l or 'function selectLesson' in l or 'function initLesson' in l:
        print(f'{i+1}: {l.strip()}')
