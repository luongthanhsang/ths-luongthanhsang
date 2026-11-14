# -*- coding: utf-8 -*-
with open("js/lesson-12-6-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
pos_sec = text.find("sections: [")
print("--- SECTIONS STRUCTURE in lesson-12-6-data.js ---")
print(text[pos_sec:pos_sec + 2000])
