with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('function initDigitalLessons(')
pos_end = text.find('\nfunction ', pos + 100)

print("initDigitalLessons range:", pos, "to", pos_end, "length:", pos_end - pos)

import re
funcs = re.findall(r'function\s+([a-zA-Z0-9_]+)\s*\(', text[pos:pos_end])
print("Internal functions in initDigitalLessons:", funcs)
