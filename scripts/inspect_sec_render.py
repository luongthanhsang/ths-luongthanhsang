with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('data-step-block="sec-')
if idx != -1:
    print(text[idx-200:idx+2500])
