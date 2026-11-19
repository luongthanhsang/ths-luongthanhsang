# -*- coding: utf-8 -*-
import re

for filepath in ['js/lesson-11-4-data.js', 'BAN_CAP_NHAT_NETLIFY/js/lesson-11-4-data.js']:
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    text = re.sub(r'"title":\s*"Phương trình\s*\\*\$\\\\sin x = m\\*\$"', '"title": "Phương trình sin x = m"', text)
    text = re.sub(r'"title":\s*"Phương trình\s*\\*\$\\\\cos x = m\\*\$"', '"title": "Phương trình cos x = m"', text)
    text = re.sub(r'"title":\s*"Phương trình\s*\\*\$\\\\tan x = m\\*\$"', '"title": "Phương trình tan x = m"', text)
    text = re.sub(r'"title":\s*"Phương trình\s*\\*\$\\\\cot x = m\\*\$"', '"title": "Phương trình cot x = m"', text)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(text)
    print("Updated titles in", filepath)
