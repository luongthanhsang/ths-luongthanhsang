with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx5 = text.find('"10-c3-b5"')
if idx5 != -1:
    print("--- 10-c3-b5 in lessons-data.js ---")
    print(text[idx5-50:idx5+800])

idx6 = text.find('"10-c3-b6"')
if idx6 != -1:
    print("--- 10-c3-b6 in lessons-data.js ---")
    print(text[idx6-50:idx6+800])
