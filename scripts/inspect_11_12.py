with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines[:100]):
    if 'section' in l.lower() or 'sub' in l.lower():
        print(f"{i+1}: {l.strip()[:100]}")
