with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = 151141 + 6500
print(text[idx:idx+2500])
