with open('js/lesson-11-12-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Find practice section
idx = text.find('practice:')
if idx != -1:
    snippet = text[idx:]
    # find all questions in practice
    mc_questions = re.findall(r'id:\s*["\'](mc-11-12-[0-9]+)["\'][\s\S]*?correctAnswer:\s*["\']([A-D])["\']', snippet)
    print("MC questions and their correct answers:", mc_questions)

    # print each question with options and correct answer
    for m in re.finditer(r'{\s*id:\s*["\'](mc-11-12-[0-9]+)["\'][\s\S]*?correctAnswer:\s*["\']([A-D])["\']', snippet):
        block = m.group(0)
        q_text = re.search(r'prompt:\s*["\']([^"\']+)["\']', block)
        ans = re.search(r'correctAnswer:\s*["\']([A-D])["\']', block)
        print("---")
        print("ID:", m.group(1))
        print("Prompt:", q_text.group(1) if q_text else "")
        print("Correct:", ans.group(1) if ans else "")
