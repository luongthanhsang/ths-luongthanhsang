with open("js/lessons-data.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('id: "11-c1-b2"')
if idx != -1:
    print(text[idx-50:idx+2500])
else:
    print("11-c1-b2 NOT FOUND!")
