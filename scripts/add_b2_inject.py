with open("js/lessons-data.js", "r", encoding="utf-8") as f:
    text = f.read()

target = "if (window.LESSON_11_C1_B1_DATA) autoInjectLesson(window.LESSON_11_C1_B1_DATA);"
replacement = "if (window.LESSON_11_C1_B1_DATA) autoInjectLesson(window.LESSON_11_C1_B1_DATA);\n  if (window.LESSON_11_C1_B2_DATA) autoInjectLesson(window.LESSON_11_C1_B2_DATA);"

if target in text:
    text = text.replace(target, replacement)
    print("Added autoInjectLesson for LESSON_11_C1_B2_DATA")
else:
    print("target not found!")

with open("js/lessons-data.js", "w", encoding="utf-8") as f:
    f.write(text)

with open("BAN_CAP_NHAT_NETLIFY/js/lessons-data.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Saved to both js/lessons-data.js and BAN_CAP_NHAT_NETLIFY/js/lessons-data.js")
