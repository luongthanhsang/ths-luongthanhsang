with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Let's check how questions and options are written in de-0101 vs de-0110 vs others
import re

print("Exam 0101 sample questions:")
matches_0101 = [m.start() for m in re.finditer(r'12_BGD_0101|12_BGD_0110', content)]
for idx in matches_0101:
    snippet = content[idx:idx+500]
    print(snippet[:200])
    print("="*40)
