with open('BAN_CAP_NHAT_NETLIFY/js/lesson-11-1-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
v10 = re.search(r'VÍ DỤ 10.*?</div>', text, re.DOTALL)
if v10:
    print('V10 in NETLIFY:', repr(v10.group(0)[:250]))

q5 = re.search(r'mc-11-1-5.*?question:\s*"(.*?)"', text, re.DOTALL)
if q5:
    print('Q5 in NETLIFY:', repr(q5.group(1)))
