with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function submitQuiz')
print(text[idx+3500:idx+7500])
