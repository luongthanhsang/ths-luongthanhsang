with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

print("File size:", len(text))
for line in text.split('\n')[:40]:
    print(line)
