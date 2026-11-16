with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

idx1 = text.find("contentHtml:")
idx2 = text.find("checkpoints:", idx1)
print(text[idx1:idx2])
