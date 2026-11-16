with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('function markStepCompleted')
print(text[idx-50:idx+300])
