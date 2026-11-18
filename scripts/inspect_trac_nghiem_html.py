with open('trac-nghiem.html', 'r', encoding='utf-8') as f:
    text = f.read()

print("trac-nghiem.html length:", len(text))
print(text[:2000])
