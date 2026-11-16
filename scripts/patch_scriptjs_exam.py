# -*- coding: utf-8 -*-
with open("js/script.js", "r", encoding="utf-8") as f:
    text = f.read()

text = text.replace("const qPrompt = q.prompt || q.intro || '';", "const qPrompt = q.prompt || q.intro || q.question || '';")
text = text.replace("const saPrompt = q.prompt || '';", "const saPrompt = q.prompt || q.question || '';")
text = text.replace("const saSol = q.solution || '';", "const saSol = q.solution || q.explain || '';")

with open("js/script.js", "w", encoding="utf-8") as f:
    f.write(text)

# Đồng bộ sang BAN_CAP_NHAT_NETLIFY
with open("BAN_CAP_NHAT_NETLIFY/js/script.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Safely patched js/script.js fallback for exam format!")
