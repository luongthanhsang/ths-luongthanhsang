with open("js/lessons-data.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('id: "b11-2"')
if idx != -1:
    print(text[idx-50:idx+2500])
