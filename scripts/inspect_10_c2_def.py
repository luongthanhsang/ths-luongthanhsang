with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx3 = text.find('"10-c2-b3"')
if idx3 != -1:
    print("--- 10-c2-b3 in lessons-data.js ---")
    print(text[idx3-50:idx3+600])
