with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
sub_cards = re.findall(r'title:\s*"([^"]+)",\s*audioUrl:\s*"([^"]+)",\s*audioScript:\s*"([^"]+)",\s*contentHtml:\s*`([^`]+)`', text)
print(f"Found {len(sub_cards)} sub_cards with contentHtml:")
for s in sub_cards:
    print(f"\n--- Sub: {s[0]} ---")
    print(s[3][:300] + "...")
