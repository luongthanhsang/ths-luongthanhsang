with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('id: "mc-11-12-4"')
if idx != -1:
    print(text[idx:idx+2500])
