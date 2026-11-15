with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('4.36')
if idx != -1:
    print(text[max(0, idx-300):idx+500])
