# -*- coding: utf-8 -*-
with open("scripts/check_live_dom.py", "r", encoding="utf-8") as f:
    text = f.read()

text = text.replace("document.querySelectorAll('.exam-tf-card').length", "document.querySelectorAll('.exam-list-tf .exam-item-card').length")
text = text.replace("document.querySelectorAll('.exam-sa-card').length", "document.querySelectorAll('.exam-list-sa .exam-item-card').length")

with open("scripts/check_live_dom.py", "w", encoding="utf-8") as f:
    f.write(text)

print("Updated query selectors in check_live_dom.py")
