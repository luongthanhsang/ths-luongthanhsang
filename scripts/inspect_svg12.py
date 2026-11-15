with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('svg viewBox="0 0 760 260"')
if idx != -1:
    end_idx = text.find('</svg>', idx)
    print(text[idx:end_idx+6])
