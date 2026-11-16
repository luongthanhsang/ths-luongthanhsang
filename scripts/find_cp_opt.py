with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('btn-cp-opt')
while idx != -1:
    print("Found at", idx)
    print(text[max(0, idx-50):min(len(text), idx+200)])
    print("="*40)
    idx = text.find('btn-cp-opt', idx+1)
