# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

target = '''        explain: "Áp dụng công thức $l = R \\cdot \\alpha \\implies \\alpha = \\dfrac{{l}}{{R}} = \\dfrac{{110}}{{35}} = \\dfrac{{22}}{{7}} \\approx 3.14\\text{{ rad}}$ (tương đương đúng 1/2 vòng xe đạp)."
      }}
    ]
  }}'''

replacement = '''        explain: "Áp dụng công thức $l = R \\cdot \\alpha \\implies \\alpha = \\dfrac{{l}}{{R}} = \\dfrac{{110}}{{35}} = \\dfrac{{22}}{{7}} \\approx 3.14\\text{{ rad}}$ (tương đương đúng 1/2 vòng xe đạp)."
      }},
      {{
        id: "sa-11-1-3",
        num: 3,
        question: "Cho góc lượng giác $\\alpha$ thỏa mãn $\\tan\\alpha = 2$. Giá trị của biểu thức $P = \\dfrac{{2\\sin\\alpha + \\cos\\alpha}}{{\\sin\\alpha - \\cos\\alpha}}$ bằng bao nhiêu?",
        correctValue: 5,
        unit: "",
        hint: "Chia cả tử và mẫu cho cos alpha khác 0 để đưa về tan alpha.",
        explain: "Chia cả tử và mẫu cho $\\cos\\alpha \\ne 0$, ta được: $P = \\dfrac{{2\\tan\\alpha + 1}}{{\\tan\\alpha - 1}} = \\dfrac{{2(2) + 1}}{{2 - 1}} = \\dfrac{{5}}{{1}} = 5$."
      }}
    ]
  }}'''

if target in text:
    text = text.replace(target, replacement)
    with open('scripts/build_lesson_11_1_full.py', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Added sa-11-1-3 successfully!")
else:
    print("Could not find exact target for sa-11-1-3")
