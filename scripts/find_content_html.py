with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find("contentHtml:")
count = 0
while idx != -1:
    count += 1
    print(f"\n=== contentHtml #{count} ===")
    print(text[idx:idx+400])
    idx = text.find("contentHtml:", idx + 1)
