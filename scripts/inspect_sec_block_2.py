with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = 151141 + 1800
print(text[idx:idx+2500])
