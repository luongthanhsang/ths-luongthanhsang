with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx1 = text.find('let currentExamId =')
idx2 = text.find('function displayQuizResults')
print(f"Quiz section from {idx1} to {idx2}")
print(text[idx1:idx1+1500])
