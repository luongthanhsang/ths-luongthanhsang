import re

with open('js/lesson-10-2-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update hook to include checkpoints
hook_poi = '''    checkpoints: [
      {
        id: "poi-10-2-hook-1",
        time: 20,
        title: "Giây 20: Tương tác bài toán dẫn nhập Họp trực tuyến",
        question: "Dựa vào hai màn hình phòng họp trực tuyến ở tình huống mở đầu, có bao nhiêu bạn học sinh tham gia <strong>cả hai</strong> chuyên đề Toán học và Tin học?",
        options: [
          "3 bạn",
          "8 bạn",
          "5 bạn (Hương, Chi, Tú, Bình, Khánh)",
          "10 bạn"
        ],
        correctIndex: 2,
        correctAnswer: "C",
        hint: "Em hãy quan sát những cái tên cùng xuất hiện ở cả danh sách phòng A và danh sách phòng B.",
        explain: "Chính xác! Có 5 bạn học sinh tham gia cả hai chuyên đề là: Hương, Chi, Tú, Bình, Khánh. Trong toán học, tập hợp gồm 5 bạn này chính là giao của hai tập hợp học sinh hai phòng!"
      }
    ],
    audioUrl:'''

content = content.replace('    audioUrl: "assets/audio/b10_2_hook.mp3",', hook_poi + ' "assets/audio/b10_2_hook.mp3",', 1)

# 2. Update section 1 to include checkpoints
sec1_poi = '''      checkpoints: [
        {
          id: "poi-10-2-sec1-1",
          time: 25,
          title: "Giây 25: Tương tác khái niệm Tập hợp con",
          question: "Cho tập hợp $S = \\\\{x \\\\in \\\\mathbb{N} \\\\mid x \\\\le 5\\\\}$. Số phần tử của $S$ là $n(S)$ và khẳng định nào sau đây là <strong>đúng</strong>?",
          options: [
            "$n(S) = 5$ và $\\\\{0; 1\\\\} \\\\in S$",
            "$n(S) = 6$ và $\\\\{1; 2; 3\\\\} \\\\subset S$",
            "$n(S) = 6$ và $6 \\\\in S$",
            "$n(S) = 5$ và $\\\\varnothing \\\\not\\\\subset S$"
          ],
          correctIndex: 1,
          correctAnswer: "B",
          hint: "Tập các số tự nhiên không vượt quá 5 bắt đầu từ 0 đến 5. Phân biệt kí hiệu phần tử thuộc (∈) và tập hợp con con (⊂).",
          explain: "Chính xác! Tập $S = \\\\{0; 1; 2; 3; 4; 5\\\\}$ có 6 phần tử nên $n(S) = 6$. Tập $\\\\{1; 2; 3\\\\}$ là một tập hợp gồm các phần tử đều thuộc $S$, nên $\\\\{1; 2; 3\\\\} \\\\subset S$ là khẳng định hoàn toàn chính xác!"
        }
      ],
      subsections: ['''

content = content.replace("      subsections: [", sec1_poi, 1)

# 3. Update section 2 to include checkpoints
sec2_poi = '''      checkpoints: [
        {
          id: "poi-10-2-sec2-1",
          time: 30,
          title: "Giây 30: Tương tác quy ước các khoảng, đoạn, nửa khoảng",
          question: "Kí hiệu $[a; b)$ được định nghĩa như thế nào và cách biểu diễn hình học trên trục số ra sao?",
          options: [
            "Đoạn $[a; b) = \\\\{x \\\\in \\\\mathbb{R} \\\\mid a < x < b\\\\}$, dùng ngoặc tròn tại cả hai đầu mút.",
            "Nửa khoảng $[a; b) = \\\\{x \\\\in \\\\mathbb{R} \\\\mid a \\\\le x < b\\\\}$, dùng ngoặc vuông $[$ tại $a$, ngoặc tròn $)$ tại $b$, gạch bỏ phần ngoài.",
            "Khoảng $[a; b) = \\\\{x \\\\in \\\\mathbb{R} \\\\mid a \\\\le x \\\\le b\\\\}$, dùng ngoặc vuông tại cả hai đầu mút.",
            "Nửa khoảng $[a; b) = \\\\{x \\\\in \\\\mathbb{R} \\\\mid a < x \\\\le b\\\\}$, dùng ngoặc tròn $($ tại $a$, ngoặc vuông $]$ tại $b$."
          ],
          correctIndex: 1,
          correctAnswer: "B",
          hint: "Mút vuông ứng với dấu có dấu bằng (≤), mút tròn ứng với dấu bất đẳng thức ngặt (<).",
          explain: "Chính xác! $[a; b)$ là nửa khoảng lấy từ $a$ đến $b$, trong đó $x$ có thể bằng $a$ (ngoặc vuông $[$) nhưng phải nhỏ hơn hẳn $b$ (ngoặc tròn $)$). Trên trục số ta gạch bỏ các số nhỏ hơn $a$ và các số lớn hơn hoặc bằng $b$."
        }
      ],
      subsections: ['''

# Replace the 2nd subsections: [
parts = content.split("      subsections: [")
if len(parts) >= 3:
    content = parts[0] + "      subsections: [" + parts[1] + sec2_poi + "      subsections: [".join(parts[2:])

# 4. Update section 3 to include checkpoints
sec3_poi = '''      checkpoints: [
        {
          id: "poi-10-2-sec3-1",
          time: 35,
          title: "Giây 35: Tương tác phép toán giao và hợp trên tập số",
          question: "Cho hai tập hợp $A = [0; 4]$ và $B = (2; 6)$. Giao $A \\\\cap B$ và Hợp $A \\\\cup B$ lần lượt là:",
          options: [
            "$A \\\\cap B = (2; 4]$ và $A \\\\cup B = [0; 6)$",
            "$A \\\\cap B = [0; 6)$ và $A \\\\cup B = (2; 4]$",
            "$A \\\\cap B = [2; 4]$ và $A \\\\cup B = (0; 6)$",
            "$A \\\\cap B = (2; 4)$ và $A \\\\cup B = [0; 6]$"
          ],
          correctIndex: 0,
          correctAnswer: "A",
          hint: "Giao lấy phần chung (vừa thuộc A vừa thuộc B), Hợp lấy tất cả các phần tử thuộc ít nhất một trong hai tập.",
          explain: "Chính xác! Với $A = [0; 4]$ và $B = (2; 6)$:<br>• $x \\\\in A \\\\cap B \\\\Leftrightarrow 0 \\\\le x \\\\le 4$ và $2 < x < 6 \\\\Leftrightarrow 2 < x \\\\le 4 \\\\Rightarrow A \\\\cap B = (2; 4]$.<br>• $x \\\\in A \\\\cup B \\\\Leftrightarrow x \\\\in [0; 4]$ hoặc $x \\\\in (2; 6) \\\\Rightarrow A \\\\cup B = [0; 6)$."
        }
      ],
      subsections: ['''

parts = content.split("      subsections: [")
if len(parts) >= 4:
    content = parts[0] + "      subsections: [" + parts[1] + "      subsections: [" + parts[2] + sec3_poi + "      subsections: [".join(parts[3:])

# 5. Update realworldWrapup to include checkpoints
wrapup_poi = '''    checkpoints: [
      {
        id: "poi-10-2-wrapup-1",
        time: 25,
        title: "Giây 25: Tương tác công thức số phần tử hợp của hai tập hữu hạn",
        question: "Gọi $A$ là tập các học sinh chơi bóng đá, $B$ là tập các học sinh chơi cầu lông trong một lớp. Công thức tính tổng số bạn chơi ít nhất một môn thể thao $n(A \\\\cup B)$ là:",
        options: [
          "$n(A \\\\cup B) = n(A) + n(B)$",
          "$n(A \\\\cup B) = n(A) + n(B) - n(A \\\\cap B)$",
          "$n(A \\\\cup B) = n(A) \\\\cdot n(B)$",
          "$n(A \\\\cup B) = n(A) + n(B) + n(A \\\\cap B)$"
        ],
        correctIndex: 1,
        correctAnswer: "B",
        hint: "Nhớ rằng các bạn chơi cả hai môn (A ∩ B) đã được đếm một lần trong n(A) và thêm một lần trong n(B).",
        explain: "Chính xác! Đây là nguyên lí bao hàm - loại trừ (Inclusion-Exclusion Principle): $n(A \\\\cup B) = n(A) + n(B) - n(A \\\\cap B)$. Nhờ trừ đi số bạn chơi cả hai môn một lần, mỗi bạn chỉ được tính đúng một lần!"
      }
    ],
    audioUrl:'''

content = content.replace('    audioUrl: "assets/audio/b10_2_wrapup.mp3",', wrapup_poi + ' "assets/audio/b10_2_wrapup.mp3",', 1)

# 6. Update part1MultipleChoice: ensure both correctIndex and correctAnswer
# mc-10-2-1: C -> 2
content = content.replace('id: "mc-10-2-1",\n        num: 1,', 'id: "mc-10-2-1",\n        num: 1,\n        correctIndex: 2,')
# mc-10-2-2: A -> 0
content = content.replace('id: "mc-10-2-2",\n        num: 2,', 'id: "mc-10-2-2",\n        num: 2,\n        correctIndex: 0,')
# mc-10-2-3: D -> 3
content = content.replace('id: "mc-10-2-3",\n        num: 3,', 'id: "mc-10-2-3",\n        num: 3,\n        correctIndex: 3,')
# mc-10-2-4: B -> 1
content = content.replace('id: "mc-10-2-4",\n        num: 4,', 'id: "mc-10-2-4",\n        num: 4,\n        correctIndex: 1,')
# mc-10-2-5: C -> 2
content = content.replace('id: "mc-10-2-5",\n        num: 5,', 'id: "mc-10-2-5",\n        num: 5,\n        correctIndex: 2,')

with open('js/lesson-10-2-data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated lesson-10-2-data.js successfully!")
