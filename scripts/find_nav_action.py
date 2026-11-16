with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('data-nav-action')
while idx != -1:
    print("Found at", idx)
    print(text[max(0, idx-50):min(len(text), idx+300)])
    print("="*40)
    idx = text.find('data-nav-action', idx+1)
