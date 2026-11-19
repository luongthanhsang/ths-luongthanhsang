with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('Thần chú Cos đối, Sin bù')
print('Found in lesson-11-1-data.js at pos:', idx)
if idx != -1:
    print(text[idx-50:idx+150])
