with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('const EXAMS_DATABASE')
print("EXAMS_DATABASE start:")
print(text[idx:idx+500])
