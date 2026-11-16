with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('exam-format-wrap')
print(text[idx+2000:idx+4500])
