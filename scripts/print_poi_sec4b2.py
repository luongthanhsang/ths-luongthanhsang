with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('poi-11-1-sec4b-2')
print(text[idx:idx+800])
