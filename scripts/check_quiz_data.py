with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m1 = re.findall(r'DEFAULT_ACTIVE_EXAM_ID.*', text)
print("DEFAULT_ACTIVE_EXAM_ID lines:", m1)

# Find keys of EXAMS_DATABASE
m2 = re.findall(r'["\']([a-zA-Z0-9_\-]+)["\']\s*:\s*\{\s*config\s*:', text)
print("EXAMS_DATABASE keys:", m2)
