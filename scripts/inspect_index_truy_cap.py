with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.lower().find('truy cập')
while idx != -1:
    print("Found in index.html at", idx)
    print(text[max(0, idx-100):min(len(text), idx+300)])
    print("="*40)
    idx = text.lower().find('truy cập', idx+1)
