# -*- coding: utf-8 -*-
with open("js/lesson-11-12-data.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
pos_exam = text.find("examFormatPractice")
if pos_exam != -1:
    print("--- EXAM FORMAT PRACTICE SNIPPET ---")
    print(text[pos_exam:pos_exam + 1200])

# Check correct answers in part1
part1_correct = re.findall(r'correctAnswer:\s*["\']([A-D])["\']', text)
print("Part 1 correct answers currently in lesson-11-12-data.js:", part1_correct)

# Check SVGs currently in lesson-11-12-data.js
svgs = re.findall(r'svg:\s*["\'`](<svg[^>]*>.*?</svg>)["\'`]', text, re.DOTALL)
print("Total SVGs in lesson-11-12-data.js:", len(svgs))
