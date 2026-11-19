# -*- coding: utf-8 -*-
import re

with open('js/lesson-11-3-data.js', 'r', encoding='utf-8') as f:
    text3 = f.read()

m = re.search(r'id:\s*[\'\"]sec_1[\'\"].*?contentHtml:\s*`([\s\S]*?)`,\s*audioScript', text3)
if m:
    content = m.group(1)
    print("Found sec_1 contentHtml, length:", len(content))
    tbl_idx = content.find('<table')
    if tbl_idx != -1:
        tbl_end = content.find('</table>', tbl_idx) + 8
        print("TABLE CONTENT:")
        print(content[tbl_idx:tbl_end])
    else:
        print("No table tag found!")
else:
    print("sec_1 not matched!")
