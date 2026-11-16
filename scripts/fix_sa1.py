with open("js/lesson-11-2-data.js", "r", encoding="utf-8") as f:
    text = f.read()

# Fix sa-11-2-1
old_sa1 = """      {
        id: "sa-11-2-1",
        question: "Tính giá trị số của biểu thức $A = \\tan 75^\\circ - \\tan 15^\\circ$.",
        prompt: "Tính giá trị số của biểu thức $A = \\tan 75^\\circ - \\tan 15^\\circ$ (kết quả là số nguyên):",
        correctAnswer: "4",
        acceptableAnswers: ["4", "4.0", "4,0"],
        hint: "Nhớ rằng tan 75° = 2 + sqrt(3) và tan 15° = 2 - sqrt(3).",
        explain: "Ta có: $\\tan 75^\\circ = \\tan(45^\\circ + 30^\\circ) = 2 + \\sqrt{3}$; $\\tan 15^\\circ = \\tan(45^\\circ - 30^\\circ) = 2 - \\sqrt{3}$. Do đó: $A = (2 + \\sqrt{3}) - (2 - \\sqrt{3}) = 2\\sqrt{3}$? Chờ chút! Kiểm tra lại: $\\tan 75^\\circ - \\tan 15^\\circ = \\dfrac{\\sin(75^\\circ - 15^\\circ)}{\\cos 75^\\circ \\cos 15^\\circ} = \\dfrac{\\sin 60^\\circ}{\\frac{1}{2}(\\cos 60^\\circ + \\cos 90^\\circ)} = \\dfrac{\\sqrt{3}/2}{1/4} = 2\\sqrt{3} \\approx 3{,}46$. Nếu đề hỏi $A = \\tan 75^\\circ + \\tan 15^\\circ = (2+\\sqrt{3}) + (2-\\sqrt{3}) = 4$! Đáp án là 4 khi là tổng."
      },"""

new_sa1 = """      {
        id: "sa-11-2-1",
        question: "Tính giá trị số của biểu thức $A = \\tan 75^\\circ + \\tan 15^\\circ$.",
        prompt: "Tính giá trị số của biểu thức $A = \\tan 75^\\circ + \\tan 15^\\circ$ (kết quả là một số nguyên):",
        correctAnswer: "4",
        acceptableAnswers: ["4", "4.0", "4,0"],
        hint: "Ta có: tan 75° = 2 + sqrt(3) và tan 15° = 2 - sqrt(3).",
        explain: "Ta có: $\\tan 75^\\circ = \\tan(45^\\circ + 30^\\circ) = 2 + \\sqrt{3}$; $\\tan 15^\\circ = \\tan(45^\\circ - 30^\\circ) = 2 - \\sqrt{3}$. Do đó: $A = (2 + \\sqrt{3}) + (2 - \\sqrt{3}) = 4$. Đáp số là 4."
      },"""

if old_sa1 in text:
    text = text.replace(old_sa1, new_sa1)
    print("Fixed sa-11-2-1 cleanly!")
else:
    print("old_sa1 not found exactly, will search and replace via regex")
    import re
    text = re.sub(
        r'id:\s*"sa-11-2-1",\s*question:\s*"[^"]*",\s*prompt:\s*"[^"]*",\s*correctAnswer:\s*"4",[\s\S]*?explain:\s*"[^"]*"',
        '''id: "sa-11-2-1",
        question: "Tính giá trị số của biểu thức $A = \\\\tan 75^\\\\circ + \\\\tan 15^\\\\circ$.",
        prompt: "Tính giá trị số của biểu thức $A = \\\\tan 75^\\\\circ + \\\\tan 15^\\\\circ$ (kết quả là một số nguyên):",
        correctAnswer: "4",
        acceptableAnswers: ["4", "4.0", "4,0"],
        hint: "Ta có: tan 75° = 2 + sqrt(3) và tan 15° = 2 - sqrt(3).",
        explain: "Ta có: $\\\\tan 75^\\\\circ = \\\\tan(45^\\\\circ + 30^\\\\circ) = 2 + \\\\sqrt{3}$; $\\\\tan 15^\\\\circ = \\\\tan(45^\\\\circ - 30^\\\\circ) = 2 - \\\\sqrt{3}$. Do đó: $A = (2 + \\\\sqrt{3}) + (2 - \\\\sqrt{3}) = 4$. Đáp số là 4."''',
        text
    )

with open("js/lesson-11-2-data.js", "w", encoding="utf-8") as f:
    f.write(text)

with open("BAN_CAP_NHAT_NETLIFY/js/lesson-11-2-data.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Updated both js/lesson-11-2-data.js and BAN_CAP_NHAT_NETLIFY/js/lesson-11-2-data.js!")
