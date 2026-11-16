with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('activateStep(stepId, firstSub)')
if idx != -1:
    print(text[idx-200:idx+300])
