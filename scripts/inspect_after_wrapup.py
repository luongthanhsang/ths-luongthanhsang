with open('js/lesson-11-2-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'realworldWrapup', text)
if m:
    # search next property
    rest = text[m.start():]
    keys = re.findall(r'\n  ([a-zA-Z0-9_]+):\s*', rest)
    print("Keys after realworldWrapup:", keys[:10])
    # print text of next keys
    idx2 = rest.find(keys[1]) if len(keys) > 1 else -1
    if idx2 != -1:
        print(rest[idx2:idx2+2000])
