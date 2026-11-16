with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('function renderLessonStructureSidebar')
print(text[idx+1200:idx+3700])
