import re

with open('js/quiz-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's check for any math formula $...$ that contains suspicious patterns like dfrac, vec without backslash
matches = re.findall(r'\$([^\$]+)\$', text)
suspicious = []
for m in matches:
    # Look for bare dfrac not preceded by backslash
    if re.search(r'(?<!\\)dfrac', m):
        suspicious.append(('bare dfrac', m))
    # Look for bare frac not preceded by backslash and not part of dfrac
    if re.search(r'(?<!\\)(?<!d)frac', m):
        suspicious.append(('bare frac', m))
    # Look for bare vec not preceded by backslash
    if re.search(r'(?<!\\)vec', m):
        suspicious.append(('bare vec', m))
    # Look for bare sqrt not preceded by backslash
    if re.search(r'(?<!\\)sqrt', m):
        suspicious.append(('bare sqrt', m))

print(f'Total inline math found: {len(matches)}')
print(f'Suspicious math patterns: {len(suspicious)}')
for s in suspicious:
    print(' ', s[0], '-->', repr(s[1][:80]))
