def fix_file(filepath, old_text, new_text):
    with open(filepath, 'r', encoding='utf-8') as f:
        c = f.read()
    if old_text in c:
        c = c.replace(old_text, new_text)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(c)
        print(f"Fixed {filepath}")
    else:
        print(f"Text not found in {filepath}")

# 1. Lesson 11-1
old1 = 'hint: "Nhân với $\\dfrac{180^\\circ}{\\pi}$: $\\left(\\dfrac{3\\pi}{4}\\right) \\cdot \\dfrac{180^\\circ}{\\pi} = 135^\\circ$."'
new1 = 'hint: "Nhân với $\\dfrac{180^\\circ}{\\pi}$: $\\left(\\dfrac{3\\pi}{4}\\right) \\cdot \\dfrac{180^\\circ}{\\pi} = 135^\\circ$.,"' # wait, comma outside quote!
new1 = 'hint: "Nhân với $\\dfrac{180^\\circ}{\\pi}$: $\\left(\\dfrac{3\\pi}{4}\\right) \\cdot \\dfrac{180^\\circ}{\\pi} = 135^\\circ$.",'

fix_file('js/lesson-11-1-data.js', old1, new1)
fix_file('BAN_CAP_NHAT_NETLIFY/js/lesson-11-1-data.js', old1, new1)

# 2. Lesson 11-2
old2 = 'hint: "Thay $\\tan\\dfrac{\\pi}{4} = 1$ vào công thức cộng tang."'
new2 = 'hint: "Thay $\\tan\\dfrac{\\pi}{4} = 1$ vào công thức cộng tang.",'

fix_file('js/lesson-11-2-data.js', old2, new2)
fix_file('BAN_CAP_NHAT_NETLIFY/js/lesson-11-2-data.js', old2, new2)

# 3. Lesson 11-3
old3 = 'hint: "Áp dụng công thức chu kì của $y = A\\sin(\\omega x)$: $T = \\dfrac{2\\pi}{|\\omega|}$."'
new3 = 'hint: "Áp dụng công thức chu kì của $y = A\\sin(\\omega x)$: $T = \\dfrac{2\\pi}{|\\omega|}$.",'

fix_file('js/lesson-11-3-data.js', old3, new3)
fix_file('BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js', old3, new3)
