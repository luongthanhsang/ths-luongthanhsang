with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Find renderQuiz or question rendering
for line in text.splitlines():
    if 'option' in line.lower() or 'question' in line.lower() or 'dfrac' in line.lower():
        if any(k in line for k in ['render', 'innerHTML', 'math', 'replace', 'text']):
            print(line[:120])
