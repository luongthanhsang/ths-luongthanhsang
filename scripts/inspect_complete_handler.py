with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('data-nav-action="complete"')
if idx != -1:
    print(text[idx-200:idx+2500])
else:
    # search where btn-step-complete is handled
    idx2 = text.find('btn-step-complete')
    print("Found at", idx2)
    print(text[idx2:idx2+2500])
