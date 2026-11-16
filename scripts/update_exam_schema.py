# -*- coding: utf-8 -*-
new_exam_format = r'''  examFormatPractice: {
    // -----------------------------------------------------------------------
    // DẠNG 1: 5 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN (HOÁN VỊ ĐÁP ÁN C, A, D, B, C)
    // -----------------------------------------------------------------------
    part1MultipleChoice: [
      {
        id: "mc-10-2-1",
        num: 1,
        level: "Nhận biết",
        prompt: "Cho tập hợp $A = \\{x \\in \\mathbb{R} \\mid x^2 - 5x + 6 = 0\\}$. Khẳng định nào sau đây là <strong>đúng</strong>?",
        options: [
          "A. $A = \\{2\\}$",
          "B. $A = \\{3\\}$",
          "C. $A = \\{2; 3\\}$",
          "D. $A = \\varnothing$"
        ],
        correctAnswer: "C",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Phương trình $x^2 - 5x + 6 = 0 \\Leftrightarrow (x - 2)(x - 3) = 0 \\Leftrightarrow x = 2$ hoặc $x = 3$.<br>Cả hai nghiệm đều là số thực, nên tập hợp $A$ gồm hai phần tử là 2 và 3, viết là $A = \\{2; 3\\}$.<br>&rArr; <strong>Đáp án đúng là C.</strong>"
      },
      {
        id: "mc-10-2-2",
        num: 2,
        level: "Thông hiểu",
        prompt: "Cho tập hợp $S = \\{a; b; c\\}$. Số lượng tất cả các <strong>tập hợp con</strong> của tập hợp $S$ là:",
        options: [
          "A. 8",
          "B. 3",
          "C. 6",
          "D. 7"
        ],
        correctAnswer: "A",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Theo định lí số tập con: Một tập hợp có $n$ phần tử thì có tất cả $2^n$ tập con.<br>Ở đây tập $S$ có 3 phần tử nên số tập con là: $2^3 = 8$.<br>Các tập con đó gồm: $\\varnothing$, 3 tập có 1 phần tử ($\\{a\\}, \\{b\\}, \\{c\\}$), 3 tập có 2 phần tử ($\\{a; b\\}, \\{b; c\\}, \\{c; a\\}$) và chính tập $S$.<br>&rArr; <strong>Đáp án đúng là A.</strong>"
      },
      {
        id: "mc-10-2-3",
        num: 3,
        level: "Thông hiểu",
        prompt: "Cho hai tập hợp $A = [-2; 3)$ và $B = [1; 5]$. Giao của hai tập hợp $A \\cap B$ là:",
        options: [
          "A. $[-2; 5]$",
          "B. $[1; 3]$",
          "C. $(-2; 1)$",
          "D. $[1; 3)$"
        ],
        correctAnswer: "D",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Ta có: $x \\in A \\cap B \\Leftrightarrow -2 \\le x < 3$ và $1 \\le x \\le 5 \\Leftrightarrow \\max(-2, 1) \\le x < \\min(3, 5) \\Leftrightarrow 1 \\le x < 3$.<br>Do đó: $A \\cap B = [1; 3)$ (nửa khoảng lấy đầu mút vuông tại 1 và bỏ mút tròn tại 3).<br>&rArr; <strong>Đáp án đúng là D.</strong>"
      },
      {
        id: "mc-10-2-4",
        num: 4,
        level: "Vận dụng",
        prompt: "Cho hai tập hợp $A = (-\\infty; 2]$ và $B = (0; +\\infty)$. Hợp của hai tập hợp $A \\cup B$ là:",
        options: [
          "A. $(0; 2]$",
          "B. $(-\\infty; +\\infty) = \\mathbb{R}$",
          "C. $(-\\infty; 0)$",
          "D. $[2; +\\infty)$"
        ],
        correctAnswer: "B",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Tập $A$ lấy toàn bộ các số $x \\le 2$. Tập $B$ lấy toàn bộ các số $x > 0$.<br>Vì $0 < 2$ nên hai tập này chồng lấn lên nhau và phủ kín toàn bộ trục số thực từ âm vô cực đến dương vô cực.<br>Do đó: $A \\cup B = (-\\infty; +\\infty) = \\mathbb{R}$.<br>&rArr; <strong>Đáp án đúng là B.</strong>"
      },
      {
        id: "mc-10-2-5",
        num: 5,
        level: "Vận dụng",
        prompt: "Cho tập hợp $A = [-3; 2)$. Phần bù của tập hợp $A$ trong $\\mathbb{R}$, kí hiệu $C_\\mathbb{R} A$, bằng:",
        options: [
          "A. $(-\\infty; -3] \\cup (2; +\\infty)$",
          "B. $(-\\infty; -3) \\cup (2; +\\infty)$",
          "C. $(-\\infty; -3) \\cup [2; +\\infty)$",
          "D. $[-3; 2]$"
        ],
        correctAnswer: "C",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Phần bù của $A$ trong $\\mathbb{R}$ là: $C_\\mathbb{R} A = \\mathbb{R} \\setminus [-3; 2)$.<br>Tập $A$ lấy các số thực $-3 \\le x < 2$. Do đó các số không thuộc $A$ là: $x < -3$ hoặc $x \\ge 2$.<br>Biểu diễn dưới dạng hợp của hai khoảng/nửa khoảng: $(-\\infty; -3) \\cup [2; +\\infty)$.<br><em>Lưu ý mẹo Thầy Sáng:</em> Đổi dấu đầu mút: mút vuông $[-3$ đổi thành mút tròn $-3)$, và mút tròn $2)$ đổi thành mút vuông $[2$.<br>&rArr; <strong>Đáp án đúng là C.</strong>"
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 2: 3 CÂU TRẮC NGHIỆM ĐÚNG/SAI (MỖI CÂU ĐỦ 4 Ý a, b, c, d = 12 Ý)
    // -----------------------------------------------------------------------
    part2TrueFalse: [
      {
        id: "tf-10-2-1",
        num: 1,
        intro: "Cho hai tập hợp số: $A = \\{x \\in \\mathbb{R} \\mid (2x - x^2)(x^2 - 3x - 4) = 0\\}$ và $B = \\{n \\in \\mathbb{N} \\mid 0 \\le n \\le 4\\}$. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
        items: [
          {
            statement: "a) Tập hợp $A$ có 4 phần tử là: $A = \\{-1; 0; 2; 4\\}$.",
            isCorrect: true,
            solution: "Giải phương trình tích: $2x - x^2 = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Giải $x^2 - 3x - 4 = 0 \\Leftrightarrow x = -1$ hoặc $x = 4$. Cả 4 nghiệm đều thuộc $\\mathbb{R}$. Vậy $A = \\{-1; 0; 2; 4\\}$."
          },
          {
            statement: "b) Tập hợp $B$ có 4 phần tử.",
            isCorrect: false,
            solution: "Vì $n \\in \\mathbb{N}$ và $0 \\le n \\le 4$ nên $B = \\{0; 1; 2; 3; 4\\}$. Tập $B$ có 5 phần tử chứ không phải 4 phần tử."
          },
          {
            statement: "c) Giao của hai tập hợp là $A \\cap B = \\{0; 2; 4\\}$.",
            isCorrect: true,
            solution: "Các phần tử chung của $A$ và $B$ là $0, 2, 4$. Vậy $A \\cap B = \\{0; 2; 4\\}$."
          },
          {
            statement: "d) Hiệu $A \\setminus B = \\{-1; 1; 3\\}$.",
            isCorrect: false,
            solution: "Hiệu $A \\setminus B$ là tập các phần tử thuộc $A$ nhưng không thuộc $B$. Ta có $-1 \\in A$ và $-1 \\notin B$. Các phần tử $0, 2, 4$ đều thuộc $B$. Vậy $A \\setminus B = \\{-1\\}$."
          }
        ]
      },
      {
        id: "tf-10-2-2",
        num: 2,
        intro: "Cho hai tập hợp khoảng và đoạn trên trục số thực: $E = (-4; 3]$ và $F = [1; 6)$. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
        items: [
          {
            statement: "a) Giao của hai tập hợp là $E \\cap F = [1; 3]$.",
            isCorrect: true,
            solution: "Ta có $x \\in E \\cap F \\Leftrightarrow -4 < x \\le 3$ và $1 \\le x < 6 \\Leftrightarrow 1 \\le x \\le 3$. Vậy $E \\cap F = [1; 3]$."
          },
          {
            statement: "b) Hợp của hai tập hợp là $E \\cup F = (-4; 6)$.",
            isCorrect: true,
            solution: "Lấy tất cả các phần tử thuộc $E$ hoặc $F$: $-4 < x < 6$. Vậy $E \\cup F = (-4; 6)$."
          },
          {
            statement: "c) Hiệu $E \\setminus F = (-4; 1]$.",
            isCorrect: false,
            solution: "Vì tập $F$ lấy điểm 1 (mút vuông $[1$), nên khi bỏ tập $F$, điểm 1 bị loại ra, đầu mút trở thành ngoặc tròn: $E \\setminus F = (-4; 1)$."
          },
          {
            statement: "d) Số lượng số nguyên thuộc tập hợp $E \\cap F$ là 3.",
            isCorrect: true,
            solution: "Tập $E \\cap F = [1; 3]$ chứa các số nguyên là: 1, 2, 3 (có đúng 3 số nguyên)."
          }
        ]
      },
      {
        id: "tf-10-2-3",
        num: 3,
        intro: "Cho hai tập hợp chứa tham số $m$: $A = [m; m + 3]$ và $B = (1; 5)$. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
        items: [
          {
            statement: "a) Độ dài của đoạn $A$ luôn không đổi và bằng 3 với mọi giá trị của tham số $m$.",
            isCorrect: true,
            solution: "Độ dài đoạn $[m; m + 3]$ là $(m + 3) - m = 3$, không phụ thuộc vào $m$."
          },
          {
            statement: "b) Khi $m = 0$, ta có $A \\cap B = (1; 3]$.",
            isCorrect: true,
            solution: "Khi $m = 0$, $A = [0; 3]$. Giao với $B = (1; 5)$ cho kết quả: $[0; 3] \\cap (1; 5) = (1; 3]$."
          },
          {
            statement: "c) Để $A \\subset B$ thì điều kiện của tham số $m$ là $1 < m < 2$.",
            isCorrect: true,
            solution: "Để đoạn $[m; m + 3] \\subset (1; 5)$, ta cần: $m > 1$ và $m + 3 < 5 \\Leftrightarrow 1 < m < 2$ (do $B$ là khoảng mở nên không được lấy dấu bằng tại các mút)."
          },
          {
            statement: "d) Điều kiện để $A \\cap B = \\varnothing$ là $m \\le -2$ hoặc $m \\ge 5$.",
            isCorrect: true,
            solution: "$A \\cap B = \\varnothing \\Leftrightarrow m + 3 \\le 1$ hoặc $m \\ge 5 \\Leftrightarrow m \\le -2$ hoặc $m \\ge 5$."
          }
        ]
      }
    ],

    // -----------------------------------------------------------------------
    // DẠNG 3: 2 CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN THỰC TẾ
    // -----------------------------------------------------------------------
    part3ShortAnswer: [
      {
        id: "sa-10-2-1",
        num: 1,
        level: "Vận dụng",
        prompt: "Trong một đợt khảo sát sở thích thể thao của 45 học sinh lớp 10, có 28 bạn thích môn Bóng đá, 20 bạn thích môn Bóng rổ và 5 bạn không thích cả hai môn này. Hỏi có bao nhiêu bạn thích cả hai môn Bóng đá và Bóng rổ?",
        correctValue: 8,
        unit: "bạn",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Số học sinh thích ít nhất một môn thể thao là: $45 - 5 = 40$ (học sinh).<br>Gọi $A$ là tập các bạn thích bóng đá ($n(A) = 28$).<br>Gọi $B$ là tập các bạn thích bóng rổ ($n(B) = 20$).<br>Khi đó $n(A \\cup B) = 40$. Áp dụng công thức số phần tử:<br>$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$<br>Thay số vào: $40 = 28 + 20 - n(A \\cap B) \\Rightarrow n(A \\cap B) = 48 - 40 = 8$.<br>&rArr; <strong>Đáp số: 8.</strong>"
      },
      {
        id: "sa-10-2-2",
        num: 2,
        level: "Vận dụng cao",
        prompt: "Cho hai tập hợp $A = [-4; 2]$ và $B = (m - 1; m + 3]$. Có bao nhiêu giá trị nguyên của tham số $m$ để giao của hai tập hợp $A \\cap B \\neq \\varnothing$?",
        correctValue: 10,
        unit: "giá trị",
        solution: "<strong>Lời giải chi tiết của ThS. Lương Thanh Sáng:</strong><br>Xét biến cố đối: $A \\cap B = \\varnothing$.<br>Điều này xảy ra khi và chỉ khi: $m + 3 < -4$ hoặc $m - 1 \\ge 2 \\Leftrightarrow m < -7$ hoặc $m \\ge 3$.<br>Do đó để $A \\cap B \\neq \\varnothing$ thì điều kiện là: $-7 \\le m < 3$.<br>Các giá trị nguyên của $m$ thỏa mãn là: $-7, -6, -5, -4, -3, -2, -1, 0, 1, 2$.<br>Số giá trị nguyên là: $2 - (-7) + 1 = 10$ giá trị.<br>&rArr; <strong>Đáp số: 10.</strong>"
      }
    ]
  }
};
'''

with open('js/lesson-10-2-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace from examFormatPractice to end
idx = text.find('  examFormatPractice: {')
if idx != -1:
    text = text[:idx] + new_exam_format
    with open('js/lesson-10-2-data.js', 'w', encoding='utf-8') as f:
        f.write(text)
    print('Updated examFormatPractice successfully!')
else:
    print('Pattern not found!')
