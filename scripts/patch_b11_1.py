import sys, os, re
sys.path.append(os.path.abspath('scripts'))
from gen_spiral_svg import generate_spiral_svg

def patch_file(filepath):
    print(f"Patching {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Replace SVG 2
    svgs = list(re.finditer(r'<svg[^>]*>.*?</svg>', content, re.DOTALL))
    if len(svgs) >= 2:
        old_svg2 = svgs[1].group(0)
        new_svg2 = generate_spiral_svg()
        content = content[:svgs[1].start()] + new_svg2 + content[svgs[1].end():]
        print("  -> Replaced SVG 2 with smooth Archimedean spiral.")
    else:
        print("  -> WARNING: Could not find SVG 2!")

    # 2. Text and formula fixes
    replacements = [
        ('hint: "Nhân với 180/pi: (3*pi/4) * (180/pi) = 135°.",',
         'hint: "Nhân với $\\\\dfrac{180^\\\\circ}{\\\\pi}$: $\\\\left(\\\\dfrac{3\\\\pi}{4}\\\\right) \\\\cdot \\\\dfrac{180^\\\\circ}{\\\\pi} = 135^\\\\circ$."'),
        ('hint: "Đổi 90° = pi/2 rad. Sau đó l = 10 * (pi/2) = 5*pi cm.",',
         'hint: "Đổi $90^\\\\circ = \\\\dfrac{\\\\pi}{2}$ rad. Sau đó $l = 10 \\\\cdot \\\\dfrac{\\\\pi}{2} = 5\\\\pi$ cm."'),
        ('title: "Tương tác Câu 1: Tọa độ điểm biểu diễn góc pi",',
         'title: "Tương tác Câu 1: Tọa độ điểm biểu diễn góc $\\\\pi$",'),
        ('hint: "Góc pi tương ứng với 180° ngược chiều kim đồng hồ từ điểm A(1; 0).",',
         'hint: "Góc $\\\\pi$ tương ứng với $180^\\\\circ$ ngược chiều kim đồng hồ từ điểm $A(1; 0)$."'),
        ('✨ "COS ĐỐI — SIN BÙ — PHỤ CHÉO — HƠN KÉM PI" ✨',
         '✨ "COS ĐỐI — SIN BÙ — PHỤ CHÉO — HƠN KÉM $\\\\pi$" ✨'),
        ('<p>• $\\tan(\\pi + \\alpha) = \\tan\\alpha$ (Hơn kém pi).</p>',
         '<p>• $\\\\tan(\\\\pi + \\\\alpha) = \\\\tan\\\\alpha$ (Hơn kém $\\\\pi$).</p>'),
        ('• $\\tan(\\pi + \\alpha) = \\tan\\alpha$ (Hơn kém pi).',
         '• $\\\\tan(\\\\pi + \\\\alpha) = \\\\tan\\\\alpha$ (Hơn kém $\\\\pi$).'),
        ('• $\\\\tan(\\\\pi + \\\\alpha) = \\\\tan\\\\alpha$ (Hơn kém pi).',
         '• $\\\\tan(\\\\pi + \\\\alpha) = \\\\tan\\\\alpha$ (Hơn kém $\\\\pi$).'),
        ('<i>"Cos đối — Sin bù — Phụ chéo — Hơn kém pi tan/cot"</i>',
         '<i>"Cos đối — Sin bù — Phụ chéo — Hơn kém $\\\\pi$ tan/cot"</i>'),
        ('hint: "Tính B(6) = 80 + 7 * sin(6*pi / 12) = 80 + 7 * sin(pi/2) = 80 + 7 = 87 mmHg.",',
         'hint: "Tính $B(6) = 80 + 7\\\\sin\\\\left(\\\\dfrac{6\\\\pi}{12}\\\\right) = 80 + 7\\\\sin\\\\left(\\\\dfrac{\\\\pi}{2}\\\\right) = 80 + 7 = 87$ mmHg."'),
        ('hint: "Nhớ câu thần chú: sin(pi - alpha) = sin alpha (Sin bù) và cos(pi/2 - alpha) = sin alpha (Phụ chéo).",',
         'hint: "Nhớ câu thần chú: $\\\\sin(\\\\pi - \\\\alpha) = \\\\sin\\\\alpha$ (Sin bù) và $\\\\cos\\\\left(\\\\dfrac{\\\\pi}{2} - \\\\alpha\\\\right) = \\\\sin\\\\alpha$ (Phụ chéo)."'),
        ('hint: "Bán kính quỹ đạo R = 6400 + 400 = 6800 km. Đổi 45° = pi/4 rad. Tính l = R * alpha = 6800 * pi / 4.",',
         'hint: "Bán kính quỹ đạo $R = 6400 + 400 = 6800$ km. Đổi $45^\\\\circ = \\\\dfrac{\\\\pi}{4}$ rad. Tính $l = R \\\\cdot \\\\alpha = 6800 \\\\cdot \\\\dfrac{\\\\pi}{4} = 1700\\\\pi \\\\approx 5340{,}7$ km."')
    ]

    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
            print(f"  -> Replaced: {old[:50]}...")
        else:
            print(f"  -> Match not found (already updated or different): {old[:50]}...")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Done patching {filepath}.")

patch_file('js/lesson-11-1-data.js')
patch_file('BAN_CAP_NHAT_NETLIFY/js/lesson-11-1-data.js')
