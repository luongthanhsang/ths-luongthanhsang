import re

with open('js/lesson-11-3-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'id:\s*"11-c1-b3-s2".*?contentHtml:\s*`([^`]+)`', text, re.DOTALL)
if m:
    s2 = m.group(1)
    for w in ['dfrac', 'pi', 'sin', 'cos', 'mathbb']:
        found = re.findall(r'(\\*)' + w, s2)
        if found:
            print(f's2 {w}: slashes count = {[len(x) for x in found[:5]]}')
