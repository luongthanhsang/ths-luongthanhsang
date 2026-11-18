with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('class="hero')
print(text[idx:idx+3500])
