with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = 33295 + 4000
print(text[idx:idx+4500])
