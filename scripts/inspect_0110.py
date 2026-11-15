with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx_exam = text.find('id: "12_BGD_0110"')
snippet = text[idx_exam:idx_exam+4000]

print(snippet[:3000])
