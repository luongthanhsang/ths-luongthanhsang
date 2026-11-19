with open('js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
svgs = re.findall(r'<svg[^>]*>.*?</svg>', text, re.DOTALL)
print('SVG 6 length:', len(svgs[5]))
text_tags = re.findall(r'<text[^>]*>(.*?)</text>', svgs[5], re.DOTALL)
for tt in text_tags:
    if 'pi' in tt.lower() or 'hơn kém' in tt.lower() or 'π' in tt:
        print('  Text tag:', tt.strip())
