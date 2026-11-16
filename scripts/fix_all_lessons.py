import glob
import re
import os

print("=== STARTING COMPREHENSIVE FIX & HARMONIZATION FOR ALL LESSONS ===")

# -------------------------------------------------------------
# 1. FIX LESSON 11-11 OPTIONS HOÁN VỊ
# -------------------------------------------------------------
filepath = 'js/lesson-11-11-data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    c = f.read()

# Fix mc-11-11-1: C
mc1_old = '''        options: [
          "Chúng cùng nằm trong một mặt phẳng và không có điểm chung.",
          "Chúng không có điểm chung.",
          "Chúng không cắt nhau.",
          "Chúng cùng nằm trong một mặt phẳng."
        ],
        correctIndex: 0,
        solution: "Theo định nghĩa chuẩn SGK trang 79: Hai đường thẳng song song trong không gian là hai đường thẳng đồng phẳng (cùng nằm trong một mặt phẳng) và không có điểm chung.",'''

mc1_new = '''        options: [
          "Chúng không có điểm chung.",
          "Chúng không cắt nhau.",
          "Chúng cùng nằm trong một mặt phẳng và không có điểm chung.",
          "Chúng cùng nằm trong một mặt phẳng."
        ],
        correctIndex: 2,
        correctAnswer: "C",
        solution: "Theo định nghĩa chuẩn SGK trang 79: Hai đường thẳng song song trong không gian là hai đường thẳng đồng phẳng (cùng nằm trong một mặt phẳng) và không có điểm chung. Chọn C.",'''

if mc1_old in c:
    c = c.replace(mc1_old, mc1_new)
    print("Fixed mc-11-11-1 -> C")

# Fix mc-11-11-2: A (already 0)
mc2_old = '''        options: [
          "1",
          "2",
          "Vô số",
          "Không có"
        ],
        correctIndex: 0,
        solution: "Theo tính chất SGK trang 80: 'Trong không gian, qua một điểm không nằm trên đường thẳng cho trước, có đúng một đường thẳng song song với đường thẳng đã cho'.",'''

mc2_new = '''        options: [
          "1",
          "2",
          "Vô số",
          "Không có"
        ],
        correctIndex: 0,
        correctAnswer: "A",
        solution: "Theo tính chất SGK trang 80: 'Trong không gian, qua một điểm không nằm trên đường thẳng cho trước, có đúng một đường thẳng song song với đường thẳng đã cho'. Chọn A.",'''

if mc2_old in c:
    c = c.replace(mc2_old, mc2_new)
    print("Fixed mc-11-11-2 -> A")

# Fix mc-11-11-3: D
mc3_old = '''        options: [
          "Cạnh bên và cạnh đáy không chung đỉnh (ví dụ $SA$ và $BC$ chéo nhau)",
          "Hai cạnh đáy $AB$ và $CD$ chéo nhau",
          "Hai cạnh bên $SA$ và $SC$ chéo nhau",
          "Cạnh $SB$ và $BC$ chéo nhau"
        ],
        correctIndex: 0,
        solution: "$SA$ và $BC$ không đồng phẳng và không cắt nhau nên chúng chéo nhau.",'''

mc3_new = '''        options: [
          "Hai cạnh đáy $AB$ và $CD$ chéo nhau",
          "Hai cạnh bên $SA$ và $SC$ chéo nhau",
          "Cạnh $SB$ và $BC$ chéo nhau",
          "Cạnh bên và cạnh đáy không chung đỉnh (ví dụ $SA$ và $BC$ chéo nhau)"
        ],
        correctIndex: 3,
        correctAnswer: "D",
        solution: "$SA$ và $BC$ không đồng phẳng và không cắt nhau nên chúng chéo nhau. Chọn D.",'''

if mc3_old in c:
    c = c.replace(mc3_old, mc3_new)
    print("Fixed mc-11-11-3 -> D")

# Fix mc-11-11-4: B
mc4_old = '''        options: [
          "Giao tuyến $d$ song song với $a$ và $b$ (hoặc trùng với một trong hai đường)",
          "Giao tuyến $d$ vuông góc với $a$",
          "Giao tuyến $d$ chéo với $a$",
          "Giao tuyến $d$ cắt cả $a$ và $b$"
        ],
        correctIndex: 0,
        solution: "Theo hệ quả định lí ba đường giao tuyến SGK trang 81: Giao tuyến $d // a // b$.",'''

mc4_new = '''        options: [
          "Giao tuyến $d$ vuông góc với $a$",
          "Giao tuyến $d$ song song với $a$ và $b$ (hoặc trùng với một trong hai đường)",
          "Giao tuyến $d$ chéo với $a$",
          "Giao tuyến $d$ cắt cả $a$ và $b$"
        ],
        correctIndex: 1,
        correctAnswer: "B",
        solution: "Theo hệ quả định lí ba đường giao tuyến SGK trang 81: Giao tuyến $d // a // b$. Chọn B.",'''

if mc4_old in c:
    c = c.replace(mc4_old, mc4_new)
    print("Fixed mc-11-11-4 -> B")

# Fix mc-11-11-5: C
mc5_old = '''        options: [
          "$AC$ và $BD$",
          "$AB$ và $BC$",
          "$BC$ và $CD$",
          "$AD$ và $AC$"
        ],
        correctIndex: 0,
        solution: "Trong tứ diện $ABCD$, hai cạnh $AC$ và $BD$ không có đỉnh chung nên là hai đường chéo nhau.",'''

mc5_new = '''        options: [
          "$AB$ và $BC$",
          "$BC$ và $CD$",
          "$AC$ và $BD$",
          "$AD$ và $AC$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        solution: "Trong tứ diện $ABCD$, hai cạnh $AC$ và $BD$ không có đỉnh chung nên là hai đường chéo nhau. Chọn C.",'''

if mc5_old in c:
    c = c.replace(mc5_old, mc5_new)
    print("Fixed mc-11-11-5 -> C")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(c)

# -------------------------------------------------------------
# 2. FIX LESSON 12-7 OPTIONS HOÁN VỊ
# -------------------------------------------------------------
filepath = 'js/lesson-12-7-data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    c = f.read()

# Fix mc-12-7-1: C
mc1_old = '''        options: [
          "A. $(2; -3; 5)$",
          "B. $(2; 3; 5)$",
          "C. $(-3; 2; 5)$",
          "D. $(5; -3; 2)$"
        ],
        correctIndex: 0,
        solution: "Theo định nghĩa toạ độ của vectơ: $\\\\vec{u} = x\\\\vec{i} + y\\\\vec{j} + z\\\\vec{k} \\\\iff \\\\vec{u} = (x; y; z)$. Do đó $\\\\vec{u} = (2; -3; 5)$. Chọn A.",'''

mc1_new = '''        options: [
          "A. $(2; 3; 5)$",
          "B. $(-3; 2; 5)$",
          "C. $(2; -3; 5)$",
          "D. $(5; -3; 2)$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        solution: "Theo định nghĩa toạ độ của vectơ: $\\\\vec{u} = x\\\\vec{i} + y\\\\vec{j} + z\\\\vec{k} \\\\iff \\\\vec{u} = (x; y; z)$. Do đó $\\\\vec{u} = (2; -3; 5)$. Chọn C.",'''

if mc1_old in c:
    c = c.replace(mc1_old, mc1_new)
    print("Fixed mc-12-7-1 -> C")

# Fix mc-12-7-2: A
mc2_old = '''        options: [
          "A. $(3; -2; 0)$",
          "B. $(3; 0; 7)$",
          "C. $(0; -2; 7)$",
          "D. $(0; 0; 7)$"
        ],
        correctIndex: 0,
        solution: "Hình chiếu vuông góc của điểm $M(x; y; z)$ lên mặt phẳng $(Oxy)$ là $M_1(x; y; 0)$. Do đó toạ độ hình chiếu là $(3; -2; 0)$. Chọn A.",'''

mc2_new = '''        options: [
          "A. $(3; -2; 0)$",
          "B. $(3; 0; 7)$",
          "C. $(0; -2; 7)$",
          "D. $(0; 0; 7)$"
        ],
        correctIndex: 0,
        correctAnswer: "A",
        solution: "Hình chiếu vuông góc của điểm $M(x; y; z)$ lên mặt phẳng $(Oxy)$ là $M_1(x; y; 0)$. Do đó toạ độ hình chiếu là $(3; -2; 0)$. Chọn A.",'''

if mc2_old in c:
    c = c.replace(mc2_old, mc2_new)
    print("Fixed mc-12-7-2 -> A")

# Fix mc-12-7-3: D
mc3_old = '''        options: [
          "A. $(2; -2; 4)$",
          "B. $(-2; 2; -4)$",
          "C. $(4; 2; -2)$",
          "D. $(2; 1; -1)$"
        ],
        correctIndex: 0,
        solution: "Ta có $\\\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (3 - 1; 0 - 2; 1 - (-3)) = (2; -2; 4)$. Chọn A.",'''

mc3_new = '''        options: [
          "A. $(-2; 2; -4)$",
          "B. $(4; 2; -2)$",
          "C. $(2; 1; -1)$",
          "D. $(2; -2; 4)$"
        ],
        correctIndex: 3,
        correctAnswer: "D",
        solution: "Ta có $\\\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (3 - 1; 0 - 2; 1 - (-3)) = (2; -2; 4)$. Chọn D.",'''

if mc3_old in c:
    c = c.replace(mc3_old, mc3_new)
    print("Fixed mc-12-7-3 -> D")

# Fix mc-12-7-4: B
mc4_old = '''        options: [
          "A. $(1; 2; 1)$",
          "B. $(2; 4; 2)$",
          "C. $(3; -1; -3)$",
          "D. $(6; -2; -6)$"
        ],
        correctIndex: 0,
        solution: "Toạ độ trung điểm: $x_I = \\\\frac{-2 + 4}{2} = 1, y_I = \\\\frac{3 + 1}{2} = 2, z_I = \\\\frac{4 + (-2)}{2} = 1 \\\\implies I(1; 2; 1)$. Chọn A.",'''

mc4_new = '''        options: [
          "A. $(2; 4; 2)$",
          "B. $(1; 2; 1)$",
          "C. $(3; -1; -3)$",
          "D. $(6; -2; -6)$"
        ],
        correctIndex: 1,
        correctAnswer: "B",
        solution: "Toạ độ trung điểm: $x_I = \\\\frac{-2 + 4}{2} = 1, y_I = \\\\frac{3 + 1}{2} = 2, z_I = \\\\frac{4 + (-2)}{2} = 1 \\\\implies I(1; 2; 1)$. Chọn B.",'''

if mc4_old in c:
    c = c.replace(mc4_old, mc4_new)
    print("Fixed mc-12-7-4 -> B")

# Fix mc-12-7-5: C
mc5_old = '''        options: [
          "A. $(1; 2; 2)$",
          "B. $(3; 6; 6)$",
          "C. $(1; 3; 2)$",
          "D. $(0; 2; 2)$"
        ],
        correctIndex: 0,
        solution: "Toạ độ trọng tâm: $x_G = \\\\frac{1 + (-2) + 4}{3} = 1, y_G = \\\\frac{0 + 3 + 3}{3} = 2, z_G = \\\\frac{2 + 1 + 3}{3} = 2 \\\\implies G(1; 2; 2)$. Chọn A.",'''

mc5_new = '''        options: [
          "A. $(3; 6; 6)$",
          "B. $(1; 3; 2)$",
          "C. $(1; 2; 2)$",
          "D. $(0; 2; 2)$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        solution: "Toạ độ trọng tâm: $x_G = \\\\frac{1 + (-2) + 4}{3} = 1, y_G = \\\\frac{0 + 3 + 3}{3} = 2, z_G = \\\\frac{2 + 1 + 3}{3} = 2 \\\\implies G(1; 2; 2)$. Chọn C.",'''

if mc5_old in c:
    c = c.replace(mc5_old, mc5_new)
    print("Fixed mc-12-7-5 -> C")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(c)

# -------------------------------------------------------------
# 3. HARMONIZE ALL LESSON FILES: ADD BOTH correctIndex AND correctAnswer
# -------------------------------------------------------------
for filepath in sorted(glob.glob('js/lesson-*-data.js')):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    modified = False
    new_lines = []
    
    for i, line in enumerate(lines):
        new_lines.append(line)
        # Check if line defines correctIndex but not correctAnswer
        m_idx = re.match(r'^(\s*)correctIndex:\s*(\d+)\s*,?\s*$', line)
        if m_idx:
            indent = m_idx.group(1)
            idx = int(m_idx.group(2))
            letter = chr(65 + idx)
            # Check next or previous line for correctAnswer
            has_ca_nearby = False
            for look in range(max(0, i-2), min(len(lines), i+3)):
                if 'correctAnswer:' in lines[look]:
                    has_ca_nearby = True
                    break
            if not has_ca_nearby:
                new_lines.append(f'{indent}correctAnswer: "{letter}",\n')
                modified = True
                
        # Also check if line defines correctAnswer but not correctIndex
        m_ans = re.match(r'^(\s*)correctAnswer:\s*["\']([A-D])["\']\s*,?\s*$', line)
        if m_ans:
            indent = m_ans.group(1)
            letter = m_ans.group(2).upper()
            idx = ord(letter) - 65
            has_ci_nearby = False
            for look in range(max(0, i-2), min(len(lines), i+3)):
                if 'correctIndex:' in lines[look]:
                    has_ci_nearby = True
                    break
            if not has_ci_nearby:
                new_lines.append(f'{indent}correctIndex: {idx},\n')
                modified = True
                
        # Also check part3ShortAnswer: ensure both correctValue and correctAnswer
        m_cval = re.match(r'^(\s*)correctValue:\s*([0-9\.\-]+)\s*,?\s*$', line)
        if m_cval:
            indent = m_cval.group(1)
            val_str = m_cval.group(2)
            has_ca_nearby = any('correctAnswer:' in lines[look] for look in range(max(0, i-2), min(len(lines), i+3)))
            if not has_ca_nearby:
                new_lines.append(f'{indent}correctAnswer: "{val_str}",\n')
                modified = True
    
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Synchronized properties in {os.path.basename(filepath)}")

print("=== ALL LESSONS PROCESSED SUCCESSFULLY ===")
