with open("js/lessons-data.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('function autoInjectLesson')
if idx != -1:
    print(text[idx:idx+1500])
