with open('scripts/verify_lesson_10_1.py', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(
    "if (btn) btn.click();",
    "if (btn) { if (btn.onclick) btn.onclick(); else btn.click(); }"
)

with open('scripts/verify_lesson_10_1.py', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated verify_lesson_10_1.py")
