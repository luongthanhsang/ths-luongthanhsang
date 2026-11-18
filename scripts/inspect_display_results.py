with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function displayQuizResults(')
print(text[idx:idx+2500])
