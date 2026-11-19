with open('js/lesson-11-4-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print('=== FIRST 30 LINES ===')
for i in range(min(30, len(lines))):
    print(f"{i+1}: {lines[i]}", end='')

print('\n=== LAST 30 LINES ===')
for i in range(max(0, len(lines)-30), len(lines)):
    print(f"{i+1}: {lines[i]}", end='')
