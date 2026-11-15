with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

target = 'if (window.LESSON_10_C2_B3_DATA) autoInjectLesson(window.LESSON_10_C2_B3_DATA);'
injection = '''if (window.LESSON_10_C3_B5_DATA) autoInjectLesson(window.LESSON_10_C3_B5_DATA);
  if (window.LESSON_10_C3_B6_DATA) autoInjectLesson(window.LESSON_10_C3_B6_DATA);
  if (window.LESSON_10_C2_B3_DATA) autoInjectLesson(window.LESSON_10_C2_B3_DATA);'''

if target in text:
    text = text.replace(target, injection)
    with open('js/lessons-data.js', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Updated js/lessons-data.js autoInjectLesson calls successfully!")
else:
    print("Target not found in js/lessons-data.js")
