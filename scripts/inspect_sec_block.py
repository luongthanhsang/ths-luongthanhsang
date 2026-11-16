with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = 151141
print(text[idx-50:idx+2000])
