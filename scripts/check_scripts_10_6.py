import re

with open('js/lesson-10-6-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.findall(r'audioScript:\s*"([^"]+)"', text)
for idx, s in enumerate(m):
    print(f"{idx}: {s[:80]}...")
