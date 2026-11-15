import re

with open('js/lesson-10-6-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

for m in re.finditer(r'num:\s*"([^"]+)"[\s\S]*?audioScript:\s*"([^"]+)"[\s\S]*?audioUrl:\s*"([^"]+)"', text):
    print(f"Section {m.group(1)}: {m.group(3)}")
    print("  Script:", m.group(2))
