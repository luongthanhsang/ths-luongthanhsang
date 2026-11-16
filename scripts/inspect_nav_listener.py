with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = 123171
print(text[idx:idx+2500])
