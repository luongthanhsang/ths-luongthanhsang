with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('// Global Aliases')
print(text[idx:])
