with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('EXAMS_DATABASE')
print(text[idx:idx+1000])
