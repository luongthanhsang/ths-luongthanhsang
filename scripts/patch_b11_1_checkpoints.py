# -*- coding: utf-8 -*-
import re

with open("scripts/build_lesson_11_1_full.py", "r", encoding="utf-8") as f:
    content = f.read()

REPLACEMENTS = {
    "poi-11-1-hook-1": """checkpoints: [
      {{
        id: "poi-11-1-hook-1",
        time: 15,
        title: "Tương tác Câu 1: Bán kính quỹ đạo tròn của trạm ISS",
        question: "Từ tâm Trái Đất đến trạm vũ trụ ISS, bán kính quỹ đạo tròn $R$ của trạm ISS bằng bao nhiêu kilômét?",
        options: [
          "$R = 6\\\\,000\\\\text{{ km}}$",
          "$R = 6\\\\,400\\\\text{{ km}}$",
          "$R = 6\\\\,800\\\\text{{ km}}$",
          "$R = 7\\\\,200\\\\text{{ km}}$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        hint: "Bán kính quỹ đạo tròn = Bán kính Trái Đất (6 400 km) + Độ cao trạm ISS (400 km).",
        explain: "Chính xác! Bán kính quỹ đạo tròn từ tâm Trái Đất là: $R = 6\\\\,400 + 400 = 6\\\\,800\\\\text{{ km}}$."
      }},
      {{
        id: "poi-11-1-hook-2",
        time: 25,
        title: "Tương tác Câu 2: Quãng đường di chuyển của trạm ISS",
        question: "Khi góc quét ở tâm là $45^\\\\circ = \\\\dfrac{{\\\\pi}}{{4}}\\\\text{{ rad}}$, quãng đường trạm ISS bay được ($R = 6\\\\,800\\\\text{{ km}}$) xấp xỉ bằng:",
        options: [
          "$l \\\\approx 5\\\\,341\\\\text{{ km}}$",
          "$l \\\\approx 2\\\\,670\\\\text{{ km}}$",
          "$l \\\\approx 6\\\\,800\\\\text{{ km}}$",
          "$l \\\\approx 10\\\\,681\\\\text{{ km}}$"
        ],
        correctIndex: 0,
        correctAnswer: "A",
        hint: "Áp dụng công thức l = R * alpha.",
        explain: "Chính xác! $l = R \\\\cdot \\\\alpha = 6\\\\,800 \\\\cdot \\\\dfrac{{\\\\pi}}{{4}} = 1\\\\,700\\\\pi \\\\approx 5\\\\,340.71 \\\\approx 5\\\\,341\\\\text{{ km}}$."
      }}
    ]""",

    "poi-11-1-sec1a-1": """checkpoints: [
          {{
            id: "poi-11-1-sec1a-1",
            time: 20,
            title: "Tương tác Câu 1: Số đo tổng quát của góc lượng giác",
            question: "Cho góc lượng giác $(Ou, Ov)$ có một số đo là $60^\\\\circ$. Các số đo khác của góc $(Ou, Ov)$ có dạng tổng quát là:",
            options: [
              "$60^\\\\circ + k 180^\\\\circ,\\\\; k \\\\in \\\\mathbb{{Z}}$",
              "$60^\\\\circ + k 360^\\\\circ,\\\\; k \\\\in \\\\mathbb{{Z}}$",
              "$-60^\\\\circ + k 360^\\\\circ,\\\\; k \\\\in \\\\mathbb{{Z}}$",
              "$60^\\\\circ + k 90^\\\\circ,\\\\; k \\\\in \\\\mathbb{{Z}}$"
            ],
            correctIndex: 1,
            correctAnswer: "B",
            hint: "Số đo các góc lượng giác có cùng tia đầu và tia cuối sai khác nhau một bội của 360°.",
            explain: "Chính xác! $\\\\text{{sđ}}(Ou, Ov) = 60^\\\\circ + k 360^\\\\circ,\\\\; k \\\\in \\\\mathbb{{Z}}$."
          }},
          {{
            id: "poi-11-1-sec1a-2",
            time: 35,
            title: "Tương tác Câu 2: Xác định góc cùng tia đầu và tia cuối",
            question: "Cho góc lượng giác $(Ou, Ov)$ có số đo $-225^\\\\circ$. Số đo nào sau đây CÙNG tia đầu và tia cuối với $(Ou, Ov)$?",
            options: [
              "$135^\\\\circ$",
              "$225^\\\\circ$",
              "$315^\\\\circ$",
              "$-45^\\\\circ$"
            ],
            correctIndex: 0,
            correctAnswer: "A",
            hint: "Tính -225° + k * 360°. Với k = 1: -225° + 360° = 135°.",
            explain: "Chính xác! Với $k = 1$, ta có $-225^\\\\circ + 360^\\\\circ = 135^\\\\circ$."
          }}
        ]""",

    "poi-11-1-sec1b-1": """checkpoints: [
          {{
            id: "poi-11-1-sec1b-1",
            time: 20,
            title: "Tương tác Câu 1: Vận dụng hệ thức Chasles",
            question: "Biết $\\\\text{{sđ}}(Ou, Ov) = 120^\\\\circ$ và $\\\\text{{sđ}}(Ov, Ow) = -75^\\\\circ$. Một số đo của góc $(Ou, Ow)$ là:",
            options: [
              "$195^\\\\circ$",
              "$45^\\\\circ$",
              "$-45^\\\\circ$",
              "$75^\\\\circ$"
            ],
            correctIndex: 1,
            correctAnswer: "B",
            hint: "Áp dụng hệ thức Chasles: sđ(Ou, Ow) = sđ(Ou, Ov) + sđ(Ov, Ow) + k*360°.",
            explain: "Chính xác! Theo hệ thức Chasles: $\\\\text{{sđ}}(Ou, Ow) = 120^\\\\circ + (-75^\\\\circ) = 45^\\\\circ$."
          }},
          {{
            id: "poi-11-1-sec1b-2",
            time: 35,
            title: "Tương tác Câu 2: Công thức hiệu hai góc lượng giác",
            question: "Với ba tia $Ou, Ov, Ox$ bất kì, công thức hiệu nào sau đây ĐÚNG theo hệ thức Chasles?",
            options: [
              "$\\\\text{{sđ}}(Ou, Ov) = \\\\text{{sđ}}(Ox, Ou) - \\\\text{{sđ}}(Ox, Ov) + k 360^\\\\circ$",
              "$\\\\text{{sđ}}(Ou, Ov) = \\\\text{{sđ}}(Ox, Ov) + \\\\text{{sđ}}(Ox, Ou) + k 360^\\\\circ$",
              "$\\\\text{{sđ}}(Ou, Ov) = \\\\text{{sđ}}(Ox, Ov) - \\\\text{{sđ}}(Ox, Ou) + k 360^\\\\circ$",
              "$\\\\text{{sđ}}(Ou, Ov) = -\\\\text{{sđ}}(Ox, Ov) - \\\\text{{sđ}}(Ox, Ou) + k 360^\\\\circ$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "Tương tự vectơ AB = OB - OA, sđ(Ou, Ov) = sđ(Ox, Ov) - sđ(Ox, Ou) + k*360°.",
            explain: "Chính xác! Tương tự như hiệu hai vectơ $\\\\vec{{AB}} = \\\\vec{{OB}} - \\\\vec{{OA}}$, ta có: $\\\\text{{sđ}}(Ou, Ov) = \\\\text{{sđ}}(Ox, Ov) - \\\\text{{sđ}}(Ox, Ou) + k 360^\\\\circ$."
          }}
        ]""",

    "poi-11-1-sec2a-1": """checkpoints: [
          {{
            id: "poi-11-1-sec2a-1",
            time: 20,
            title: "Tương tác Câu 1: Đổi từ độ sang radian",
            question: "Góc có số đo $150^\\\\circ$ khi đổi sang đơn vị radian bằng bao nhiêu?",
            options: [
              "$\\\\dfrac{{2\\\\pi}}{{3}}\\\\text{{ rad}}$",
              "$\\\\dfrac{{3\\\\pi}}{{4}}\\\\text{{ rad}}$",
              "$\\\\dfrac{{5\\\\pi}}{{6}}\\\\text{{ rad}}$",
              "$\\\\dfrac{{7\\\\pi}}{{6}}\\\\text{{ rad}}$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "Công thức đổi từ độ sang radian: alpha = a * pi / 180.",
            explain: "Chính xác! Ta có: $150^\\\\circ = 150 \\\\cdot \\\\dfrac{{\\\\pi}}{{180}} = \\\\dfrac{{5\\\\pi}}{{6}}\\\\text{{ rad}}$."
          }},
          {{
            id: "poi-11-1-sec2a-2",
            time: 35,
            title: "Tương tác Câu 2: Đổi từ radian sang độ",
            question: "Góc có số đo $\\\\dfrac{{3\\\\pi}}{{4}}\\\\text{{ rad}}$ đổi sang đơn vị độ bằng:",
            options: [
              "$135^\\\\circ$",
              "$120^\\\\circ$",
              "$150^\\\\circ$",
              "$105^\\\\circ$"
            ],
            correctIndex: 0,
            correctAnswer: "A",
            hint: "Nhân với 180/pi: (3*pi/4) * (180/pi) = 135°.",
            explain: "Chính xác! $\\\\dfrac{{3\\\\pi}}{{4}}\\\\text{{ rad}} = \\\\left(\\\\dfrac{{3\\\\pi}}{{4}} \\\\cdot \\\\dfrac{{180}}{\\\\pi}\\\\right)^\\\\circ = 135^\\\\circ$."
          }}
        ]""",

    "poi-11-1-sec2b-1": """checkpoints: [
          {{
            id: "poi-11-1-sec2b-1",
            time: 20,
            title: "Tương tác Câu 1: Độ dài cung tròn theo radian",
            question: "Một đường tròn có bán kính $R = 20\\\\text{{ cm}}$. Cung tròn có số đo $\\\\dfrac{{\\\\pi}}{{5}}\\\\text{{ rad}}$ có độ dài $l$ bằng:",
            options: [
              "$2\\\\pi\\\\text{{ cm}}$",
              "$4\\\\pi\\\\text{{ cm}}$",
              "$5\\\\pi\\\\text{{ cm}}$",
              "$10\\\\pi\\\\text{{ cm}}$"
            ],
            correctIndex: 1,
            correctAnswer: "B",
            hint: "Áp dụng công thức l = R * alpha (với alpha tính bằng radian).",
            explain: "Chính xác! Độ dài cung tròn là: $l = R \\\\cdot \\\\alpha = 20 \\\\cdot \\\\dfrac{{\\\\pi}}{{5}} = 4\\\\pi\\\\text{{ cm}} \\\\approx 12.57\\\\text{{ cm}}$."
          }},
          {{
            id: "poi-11-1-sec2b-2",
            time: 35,
            title: "Tương tác Câu 2: Độ dài cung tròn cho trước bằng độ",
            question: "Một đường tròn có bán kính $R = 10\\\\text{{ cm}}$. Cung tròn có số đo $90^\\\\circ$ có độ dài bằng:",
            options: [
              "$10\\\\pi\\\\text{{ cm}}$",
              "$2.5\\\\pi\\\\text{{ cm}}$",
              "$5\\\\pi\\\\text{{ cm}}$",
              "$20\\\\pi\\\\text{{ cm}}$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "Đổi 90° = pi/2 rad. Sau đó l = 10 * (pi/2) = 5*pi cm.",
            explain: "Chính xác! Đổi $90^\\\\circ = \\\\dfrac{{\\\\pi}}{{2}}\\\\text{{ rad}}$. Ta có: $l = R \\\\cdot \\\\alpha = 10 \\\\cdot \\\\dfrac{{\\\\pi}}{{2}} = 5\\\\pi\\\\text{{ cm}}$."
          }}
        ]""",

    "poi-11-1-sec3a-1": """checkpoints: [
          {{
            id: "poi-11-1-sec3a-1",
            time: 20,
            title: "Tương tác Câu 1: Tọa độ điểm biểu diễn góc pi",
            question: "Trên đường tròn lượng giác gốc $A(1; 0)$, điểm biểu diễn góc lượng giác có số đo $\\\\pi$ là điểm có tọa độ:",
            options: [
              "$(1; 0)$",
              "$(0; 1)$",
              "$(-1; 0)$",
              "$(0; -1)$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "Góc pi tương ứng với 180° ngược chiều kim đồng hồ từ điểm A(1; 0).",
            explain: "Chính xác! Góc $\\\\pi = 180^\\\\circ$ quay từ $A(1; 0)$ ngược chiều kim đồng hồ đúng nửa vòng tròn đến điểm $A'(-1; 0)$ trên trục Ox."
          }},
          {{
            id: "poi-11-1-sec3a-2",
            time: 35,
            title: "Tương tác Câu 2: Điểm gốc A của đường tròn lượng giác",
            question: "Trong mặt phẳng tọa độ $Oxy$, đường tròn lượng giác có bán kính $R = 1$ và điểm gốc $A$ có tọa độ là:",
            options: [
              "$A(0; 1)$",
              "$A(1; 0)$",
              "$A(-1; 0)$",
              "$A(0; -1)$"
            ],
            correctIndex: 1,
            correctAnswer: "B",
            hint: "Điểm gốc A nằm trên trục hoành Ox tại điểm có hoành độ 1.",
            explain: "Chính xác! Theo định nghĩa SGK, điểm gốc $A$ của đường tròn lượng giác có tọa độ $A(1; 0)$."
          }}
        ]""",

    "poi-11-1-sec3b-1": """checkpoints: [
          {{
            id: "poi-11-1-sec3b-1",
            time: 20,
            title: "Tương tác Câu 1: Dấu của cos và tan ở góc phần tư III",
            question: "Cho góc lượng giác $\\\\alpha$ thỏa mãn $\\\\pi < \\\\alpha < \\\\dfrac{{3\\\\pi}}{{2}}$ (góc phần tư thứ III). Khẳng định nào sau đây là <strong>đúng</strong>?",
            options: [
              "$\\\\cos\\\\alpha > 0$ và $\\\\tan\\\\alpha > 0$",
              "$\\\\cos\\\\alpha > 0$ và $\\\\tan\\\\alpha < 0$",
              "$\\\\cos\\\\alpha < 0$ và $\\\\tan\\\\alpha < 0$",
              "$\\\\cos\\\\alpha < 0$ và $\\\\tan\\\\alpha > 0$"
            ],
            correctIndex: 3,
            correctAnswer: "D",
            hint: "Xem lại Hình 1.9b SGK: Ở góc phần tư thứ III, x < 0 (cos âm), y < 0 (sin âm), do đó tan = y/x > 0.",
            explain: "Chính xác! Ở góc phần tư thứ III: hoành độ $x < 0 \\\\implies \\\\cos\\\\alpha < 0$; tung độ $y < 0 \\\\implies \\\\sin\\\\alpha < 0$. Do đó: $\\\\tan\\\\alpha = \\\\dfrac{{\\\\sin\\\\alpha}}{{\\\\cos\\\\alpha}} > 0$."
          }},
          {{
            id: "poi-11-1-sec3b-2",
            time: 35,
            title: "Tương tác Câu 2: Dấu của tan và cot ở góc phần tư III",
            question: "Với góc lượng giác $\\\\alpha$ thuộc góc phần tư thứ III, dấu của $\\\\tan\\\\alpha$ và $\\\\cot\\\\alpha$ là:",
            options: [
              "$\\\\tan\\\\alpha > 0$ và $\\\\cot\\\\alpha > 0$",
              "$\\\\tan\\\\alpha < 0$ và $\\\\cot\\\\alpha < 0$",
              "$\\\\tan\\\\alpha > 0$ và $\\\\cot\\\\alpha < 0$",
              "$\\\\tan\\\\alpha < 0$ và $\\\\cot\\\\alpha > 0$"
            ],
            correctIndex: 0,
            correctAnswer: "A",
            hint: "Vì sin và cos đều âm, nên thương của chúng (tan và cot) luôn dương.",
            explain: "Chính xác! Vì ở góc phần tư III, cả $\\\\sin\\\\alpha < 0$ và $\\\\cos\\\\alpha < 0$ nên $\\\\tan\\\\alpha = \\\\dfrac{{\\\\sin\\\\alpha}}{{\\\\cos\\\\alpha}} > 0$ và $\\\\cot\\\\alpha = \\\\dfrac{{\\\\cos\\\\alpha}}{{\\\\sin\\\\alpha}} > 0$."
          }}
        ]""",

    "poi-11-1-sec4a-1": """checkpoints: [
          {{
            id: "poi-11-1-sec4a-1",
            time: 20,
            title: "Tương tác Câu 1: Tính sin khi biết cos ở góc phần tư III",
            question: "Cho $\\\\cos\\\\alpha = -\\\\dfrac{{4}}{{5}}$ và $\\\\pi < \\\\alpha < \\\\dfrac{{3\\\\pi}}{{2}}$ (góc phần tư III). Giá trị của $\\\\sin\\\\alpha$ bằng:",
            options: [
              "$\\\\dfrac{{3}}{{5}}$",
              "$-\\\\dfrac{{3}}{{5}}$",
              "$\\\\dfrac{{1}}{{5}}$",
              "$-\\\\dfrac{{1}}{{5}}$"
            ],
            correctIndex: 1,
            correctAnswer: "B",
            hint: "Áp dụng sin^2 + cos^2 = 1. Vì góc phần tư III nên sin alpha mang dấu âm.",
            explain: "Chính xác! Ta có $\\\\sin^2\\\\alpha = 1 - \\\\cos^2\\\\alpha = 1 - \\\\dfrac{{16}}{{25}} = \\\\dfrac{{9}}{{25}}$. Do $\\\\alpha$ thuộc góc phần tư III nên $\\\\sin\\\\alpha < 0$, vậy $\\\\sin\\\\alpha = -\\\\dfrac{{3}}{{5}}$."
          }},
          {{
            id: "poi-11-1-sec4a-2",
            time: 35,
            title: "Tương tác Câu 2: Hệ thức liên hệ giữa tan và cos",
            question: "Với góc $\\\\alpha \\\\ne \\\\dfrac{{\\\\pi}}{{2}} + k\\\\pi$, hệ thức liên hệ giữa $\\\\tan\\\\alpha$ và $\\\\cos\\\\alpha$ là:",
            options: [
              "$1 - \\\\tan^2\\\\alpha = \\\\dfrac{{1}}{{\\\\cos^2\\\\alpha}}$",
              "$1 + \\\\tan^2\\\\alpha = \\\\dfrac{{1}}{{\\\\sin^2\\\\alpha}}$",
              "$1 + \\\\tan^2\\\\alpha = \\\\dfrac{{1}}{{\\\\cos^2\\\\alpha}}$",
              "$\\\\tan^2\\\\alpha = \\\\dfrac{{1}}{{\\\\cos^2\\\\alpha}}$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "1 + tan^2 alpha = 1 + sin^2/cos^2 = (cos^2 + sin^2)/cos^2 = 1/cos^2 alpha.",
            explain: "Chính xác! Ta có: $1 + \\\\tan^2\\\\alpha = 1 + \\\\dfrac{{\\\\sin^2\\\\alpha}}{{\\\\cos^2\\\\alpha}} = \\\\dfrac{{\\\\cos^2\\\\alpha + \\\\sin^2\\\\alpha}}{{\\\\cos^2\\\\alpha}} = \\\\dfrac{{1}}{{\\\\cos^2\\\\alpha}}$."
          }}
        ]""",

    "poi-11-1-sec4b-1": """checkpoints: [
          {{
            id: "poi-11-1-sec4b-1",
            time: 20,
            title: "Tương tác Câu 1: Xác định đẳng thức sai",
            question: "Đẳng thức nào sau đây là <strong>sai</strong>?",
            options: [
              "$\\\\cos(-\\\\alpha) = \\\\cos\\\\alpha$",
              "$\\\\sin(\\\\pi - \\\\alpha) = \\\\sin\\\\alpha$",
              "$\\\\cos(\\\\pi - \\\\alpha) = \\\\cos\\\\alpha$",
              "$\\\\sin\\\\left(\\\\dfrac{{\\\\pi}}{{2}} - \\\\alpha\\\\right) = \\\\cos\\\\alpha$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "Nhớ câu thần chú: 'Sin bù' nghĩa là chỉ có sin(pi - alpha) = sin alpha, còn cos(pi - alpha) phải bằng -cos alpha.",
            explain: "Chính xác! Theo công thức hai góc bù nhau: $\\\\cos(\\\\pi - \\\\alpha) = -\\\\cos\\\\alpha$, do đó khẳng định C là sai."
          }},
          {{
            id: "poi-11-1-sec4b-2",
            time: 35,
            title: "Tương tác Câu 2: Quy tắc Sin bù",
            question: "Theo quy tắc 'Sin bù', khẳng định nào sau đây là ĐÚNG?",
            options: [
              "$\\\\sin(\\\\pi - \\\\alpha) = -\\\\sin\\\\alpha$",
              "$\\\\sin(\\\\pi - \\\\alpha) = \\\\cos\\\\alpha$",
              "$\\\\sin(\\\\pi - \\\\alpha) = \\\\sin\\\\alpha$",
              "$\\\\sin(\\\\pi - \\\\alpha) = -\\\\cos\\\\alpha$"
            ],
            correctIndex: 2,
            correctAnswer: "C",
            hint: "Hai góc bù nhau có sin bằng nhau: sin(pi - alpha) = sin alpha.",
            explain: "Chính xác! Theo quy tắc 'Sin bù': $\\\\sin(\\\\pi - \\\\alpha) = \\\\sin\\\\alpha$."
          }}
        ]""",

    "poi-11-1-wrapup-1": """checkpoints: [
      {{
        id: "poi-11-1-wrapup-1",
        time: 20,
        title: "Tương tác Câu 1: Huyết áp tâm trương thấp nhất",
        question: "Theo mô hình $B(t) = 80 + 7\\\\sin\\\\left(\\\\dfrac{{\\\\pi t}}{{12}}\\\\right)$, huyết áp tâm trương thấp nhất của người đó trong ngày là bao nhiêu?",
        options: [
          "$80\\\\text{{ mmHg}}$",
          "$87\\\\text{{ mmHg}}$",
          "$73\\\\text{{ mmHg}}$",
          "$70\\\\text{{ mmHg}}$"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        hint: "Giá trị nhỏ nhất của hàm sin là -1, xảy ra khi sin(pi*t / 12) = -1.",
        explain: "Chính xác! Vì $\\\\sin\\\\left(\\\\dfrac{{\\\\pi t}}{{12}}\\\\right) \\\\ge -1$ nên $B(t) \\\\ge 80 + 7(-1) = 73\\\\text{{ mmHg}}$!"
      }},
      {{
        id: "poi-11-1-wrapup-2",
        time: 35,
        title: "Tương tác Câu 2: Huyết áp tâm trương cao nhất lúc 6 giờ",
        question: "Vào lúc 6 giờ sáng ($t = 6$), huyết áp tâm trương của người này đạt mức bao nhiêu?",
        options: [
          "$80\\\\text{{ mmHg}}$",
          "$87\\\\text{{ mmHg}}$",
          "$73\\\\text{{ mmHg}}$",
          "$70\\\\text{{ mmHg}}$"
        ],
        correctIndex: 1,
        correctAnswer: "B",
        hint: "Tính B(6) = 80 + 7 * sin(6*pi / 12) = 80 + 7 * sin(pi/2) = 80 + 7 = 87 mmHg.",
        explain: "Chính xác! Tại $t = 6$: $B(6) = 80 + 7\\\\sin\\\\left(\\\\dfrac{{\\\\pi}}{{2}}\\\\right) = 80 + 7(1) = 87\\\\text{{ mmHg}}$."
      }}
    ]"""
}

for poi_id, new_block in REPLACEMENTS.items():
    idx = content.find(poi_id)
    if idx == -1:
        print(f"ERROR: Cannot find {poi_id}")
        continue
    start_pos = content.rfind("checkpoints: [", 0, idx)
    if start_pos == -1:
        print(f"ERROR: Cannot find 'checkpoints: [' before {poi_id}")
        continue
    # Tìm dấu ] đóng sau poi_id tương ứng
    # Tìm dấu ] kế tiếp sau 'explain:' của checkpoint đó
    explain_idx = content.find("explain:", idx)
    end_pos = content.find("]", explain_idx) + 1
    
    print(f"Replacing checkpoint block for {poi_id}: range [{start_pos}, {end_pos}]...")
    content = content[:start_pos] + new_block + content[end_pos:]

with open("scripts/build_lesson_11_1_full.py", "w", encoding="utf-8") as f:
    f.write(content)

print("Done replacing checkpoints in scripts/build_lesson_11_1_full.py!")
