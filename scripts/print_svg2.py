with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('viewBox="0 0 780 230"')
if idx != -1:
    end = text.find('</svg>', idx)
    print(text[idx-5:end+6])
