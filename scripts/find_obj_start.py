with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos = 91839
# find opening brace of this object
obj_start = text.rfind('{', 0, pos)
print(text[obj_start:obj_start+250])
