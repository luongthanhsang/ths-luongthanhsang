with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('function checkMultipleChoiceAnswer')
if idx == -1:
    idx = text.find('checkQuiz')
if idx == -1:
    idx = text.find('exam-format-wrap')
print(text[idx:idx+2500])
