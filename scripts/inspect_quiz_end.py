with open('js/script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(3200, 3315):
    line = lines[i]
    if any(k in line for k in ['practiceQuizzes', 'practice-wrap', 'examFormatPractice', 'sectionsHtml +=']):
        print(f"{i+1}: {line.strip()[:100]}")
