import re

with open('js/lesson-11-2-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# find sections: [ ... ]
m = re.search(r'sections:\s*\[', text)
if m:
    print("Found sections at index:", m.start())
    # print next 2000 chars
    print(text[m.start():m.start()+2000])
else:
    print("No 'sections:' found")
