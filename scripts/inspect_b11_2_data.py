import json
import re

with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Check sections in window.LESSON_11_C1_B2_DATA
pattern = r'title:\s*"([^"]+)",\s*subsections:\s*\['
sections = re.findall(pattern, content)
print("Sections found:", len(sections))
for s in sections:
    print(" Section:", s)

sub_pattern = r'key:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*audioUrl:\s*"([^"]+)"'
subs = re.findall(sub_pattern, content)
print("\nSubsections with audioUrl found:", len(subs))
for k, t, a in subs:
    print(f" Sub {k}: {t} -> audio: {a}")

pois = re.findall(r'title:\s*"([^"]+)",\s*timestamp:\s*([0-9.]+)', content)
print("\nPOIs found:", len(pois))
for p in pois:
    print(f" POI: {p[0]} @ {p[1]}s")
