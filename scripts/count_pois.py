import re

with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let's count how many questions each checkpoints block has
matches = re.findall(r'id:\s*"(poi-11-2-[^"]+)"', text)
print(f"Total POIs found: {len(matches)}")
for m in matches:
    print(" ", m)
