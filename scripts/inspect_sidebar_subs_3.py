with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('data-parent-sec="${secAnchor}"')
print(text[idx:idx+2500])
