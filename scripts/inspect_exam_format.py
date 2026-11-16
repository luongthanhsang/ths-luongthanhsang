with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
idx = text.find("examFormatPractice:")
if idx != -1:
    print(text[idx:idx+3500])
