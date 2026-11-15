with open('js/lesson-10-8-data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("TOP 30 LINES:")
for l in lines[:30]:
    print(l, end='')

print("\nBOTTOM 30 LINES:")
for l in lines[-30:]:
    print(l, end='')
