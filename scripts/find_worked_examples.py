with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find("workedExample:")
count = 0
while idx != -1:
    count += 1
    print(f"\n=== workedExample #{count} ===")
    print(text[idx:idx+500])
    idx = text.find("workedExample:", idx + 1)
