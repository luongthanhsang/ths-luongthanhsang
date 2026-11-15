with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

print("Length of lesson-11-12-data.js:", len(text))
for kw in ['d // (\\alpha)', 'd \\cap (\\alpha)', '4.36', 'vị trí tương đối']:
    print(kw, kw in text)
