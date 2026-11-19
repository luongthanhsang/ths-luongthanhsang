def patch_file(filepath):
    print(f"Patching {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    replacements = [
        ('title: "Tương tác Câu 2: Công thức góc đặc biệt pi/4 của Tang",',
         'title: "Tương tác Câu 2: Công thức góc đặc biệt $\\\\dfrac{\\\\pi}{4}$ của Tang",'),
        ('hint: "Thay tan(pi/4) = 1 vào công thức cộng tang.",',
         'hint: "Thay $\\\\tan\\\\dfrac{\\\\pi}{4} = 1$ vào công thức cộng tang."'),
        ('hint: "Đối chiếu biểu thức x(t) = 2*sqrt(2)*cos(pi/3*t - pi/12).",',
         'hint: "Đối chiếu biểu thức $x(t) = 2\\\\sqrt{2}\\\\cos\\\\left(\\\\dfrac{\\\\pi}{3}t - \\\\dfrac{\\\\pi}{12}\\\\right)$."')
    ]

    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
            print(f"  -> Replaced: {old[:50]}...")
        else:
            print(f"  -> Match not found: {old[:50]}...")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Done patching {filepath}.")

patch_file('js/lesson-11-2-data.js')
patch_file('BAN_CAP_NHAT_NETLIFY/js/lesson-11-2-data.js')
