with open('trac-nghiem.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('class="result-actions"')
print(text[idx:idx+800])
