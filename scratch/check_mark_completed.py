with open('js/script.js', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'markStepCompleted', text)]
for idx in matches:
    print(text[idx-40:idx+150])
