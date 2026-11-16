# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

idx_start = text.find('part3ShortAnswer: [')
idx_end = text.find('}}\n}};\n"""', idx_start) + 2

clean_part3 = '''part3ShortAnswer: [
      {{
        id: "sa-11-1-1",
        num: 1,
        question: "Theo bài toán mở đầu SGK trang 5, trạm vũ trụ quốc tế ISS bay quanh Trái Đất ở độ cao $400\\\\text{{ km}}$, bán kính Trái Đất là $6\\\\,400\\\\text{{ km}}$. Khi trạm quét góc ở tâm $45^\\\\circ$, quãng đường trạm ISS đã di chuyển làm tròn đến hàng đơn vị là bao nhiêu kilômét?",
        correctValue: 5341,
        unit: "km",
        hint: "Bán kính quỹ đạo R = 6400 + 400 = 6800 km. Đổi 45° = pi/4 rad. Tính l = R * alpha = 6800 * pi / 4.",
        explain: "Bán kính quỹ đạo: $R = 6400 + 400 = 6800\\\\text{{ km}}$. Góc quét $\\\\alpha = 45^\\\\circ = \\\\dfrac{{\\\\pi}}{{4}}\\\\text{{ rad}}$. Quãng đường $l = 6800 \\\\cdot \\\\dfrac{{\\\\pi}}{{4}} = 1700\\\\pi \\\\approx 5340.71\\\\text{{ km}}$, làm tròn đến hàng đơn vị là 5341 km."
      }},
      {{
        id: "sa-11-1-2",
        num: 2,
        question: "Một bánh xe đạp có bán kính $R = 35\\\\text{{ cm}}$. Khi người đi xe đạp di chuyển một quãng đường dài $110\\\\text{{ cm}}$ thì bánh xe đã quay một góc lượng giác bằng bao nhiêu radian? (Lấy $\\\\pi \\\\approx \\\\dfrac{{22}}{{7}}$, làm tròn đến hàng phần mười nếu cần hoặc ghi giá trị phân số thập phân)",
        correctValue: 3.14,
        unit: "rad",
        hint: "Từ công thức l = R * alpha suy ra alpha = l / R.",
        explain: "Áp dụng công thức $l = R \\\\cdot \\\\alpha \\\\implies \\\\alpha = \\\\dfrac{{l}}{{R}} = \\\\dfrac{{110}}{{35}} = \\\\dfrac{{22}}{{7}} \\\\approx 3.14\\\\text{{ rad}}$ (tương đương đúng 1/2 vòng xe đạp)."
      }},
      {{
        id: "sa-11-1-3",
        num: 3,
        question: "Cho góc lượng giác $\\\\alpha$ thỏa mãn $\\\\tan\\\\alpha = 2$. Giá trị của biểu thức $P = \\\\dfrac{{2\\\\sin\\\\alpha + \\\\cos\\\\alpha}}{{\\\\sin\\\\alpha - \\\\cos\\\\alpha}}$ bằng bao nhiêu?",
        correctValue: 5,
        unit: "",
        hint: "Chia cả tử và mẫu cho cos alpha khác 0 để đưa về tan alpha.",
        explain: "Chia cả tử và mẫu cho $\\\\cos\\\\alpha \\\\ne 0$, ta được: $P = \\\\dfrac{{2\\\\tan\\\\alpha + 1}}{{\\\\tan\\\\alpha - 1}} = \\\\dfrac{{2(2) + 1}}{{2 - 1}} = \\\\dfrac{{5}}{{1}} = 5$."
      }}
    ]
  }}'''

text = text[:idx_start] + clean_part3 + text[idx_end:]

with open('scripts/build_lesson_11_1_full.py', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed part3ShortAnswer cleanly!")
