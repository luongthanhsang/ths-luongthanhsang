with open("js/lessons-data.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('"11":')
if idx == -1:
    idx = text.find('grade11')
if idx == -1:
    idx = text.find('11')
print(text[idx:idx+1500])
