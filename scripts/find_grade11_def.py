with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('"11":')
if idx != -1:
    print(text[idx:idx+2500])
else:
    print('Not found "11":')
