with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('autoInjectLesson')
if idx != -1:
    print(text[max(0, idx-100):idx+500])
else:
    print("autoInjectLesson not found in lessons-data.js")
