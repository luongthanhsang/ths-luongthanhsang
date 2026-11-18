with open('css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('.quiz-result-card')
print(text[idx:idx+1500])
