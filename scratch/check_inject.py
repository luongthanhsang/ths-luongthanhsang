with open('js/lesson-10-10-data.js', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
for l in lines[-40:]:
    print(l)
