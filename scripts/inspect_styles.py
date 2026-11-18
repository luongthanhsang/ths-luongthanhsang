with open('css/styles.css', 'r', encoding='utf-8') as f:
    text = f.read()

print("styles.css length:", len(text))
for kw in ['quiz-result-card', 'start-banner', 'footer-stats', 'student-info']:
    print(f"Keyword '{kw}' in styles.css:", kw in text)
