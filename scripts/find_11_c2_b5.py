with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('11-c2-b5')
print(text[idx-100:idx+800])
