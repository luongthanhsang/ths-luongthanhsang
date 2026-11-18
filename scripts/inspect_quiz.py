with open('js/lesson-11-2-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
# check examFormatQuiz or quiz
m = re.search(r'(examFormatQuiz|quizPart|examFormat):\s*\{', text)
if m:
    print("Found quiz at index:", m.start())
    print(text[m.start():m.start()+2500])
else:
    print("No quiz format found by regex")
