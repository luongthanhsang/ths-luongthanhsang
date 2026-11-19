with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'tree-leaf-item' in l or 'tree-sub-item' in l or 'data-step-target' in l or 'data-sub-target' in l:
        print(f'{i+1}: {l.strip()[:100]}')
