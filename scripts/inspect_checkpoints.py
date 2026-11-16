with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
print("checkpoints occurrences:", text.count("checkpoints:"))
print("pois occurrences:", text.count("pois:"))

# Let's find some checkpoints
idx = text.find("checkpoints:")
while idx != -1:
    print(text[idx:idx+300])
    print("-" * 40)
    idx = text.find("checkpoints:", idx + 1)
