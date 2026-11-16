with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('window.activateStep = activateStep;')
print(text[idx-50:idx+300])
