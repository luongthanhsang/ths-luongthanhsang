with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'selectLesson(' in line:
        print(f"selectLesson: {i+1}: {line.strip()}")
    if 'renderSidebar(' in line:
        print(f"renderSidebar: {i+1}: {line.strip()}")
