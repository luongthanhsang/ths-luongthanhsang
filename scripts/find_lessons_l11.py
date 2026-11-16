with open("js/lessons-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
matches = re.findall(r'id:\s*"([^"]+)",\s*title:\s*"([^"]+)"', text)
print("Lessons in lessons-data.js:")
for m in matches:
    if "11" in m[0] or "lượng giác" in m[1].lower():
        print(" ", m)
