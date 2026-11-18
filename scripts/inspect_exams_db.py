with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
exams = re.findall(r'(\w+):\s*\{\s*config:', text)
print(f"Exams in quiz-data.js: {exams}")

# Check first exam config
idx = text.find('config:')
print("\nFirst exam config:\n", text[idx:idx+400])
