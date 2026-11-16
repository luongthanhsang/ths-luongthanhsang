with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = 107223
print(text[idx:idx+800])
