with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('function getLessonCompletedSteps')
print(text[idx:idx+500])
