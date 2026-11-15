with open('scripts/generate_exam_0110.py', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('A(1; 3; -5)')
if idx != -1:
    print(text[max(0, idx-200):idx+400])
else:
    print("Not found in generate_exam_0110.py")
