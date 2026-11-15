with open('bai-giang.html', 'r', encoding='utf-8') as f:
    text = f.read()

for l in text.splitlines():
    if '<script' in l:
        print(l)
