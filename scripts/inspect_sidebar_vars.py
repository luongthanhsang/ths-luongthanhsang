with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines[:2350]):
    if 'sidebar' in line.lower():
        print(f"{i+1}: {line.strip()[:100]}")
