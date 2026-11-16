with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    c = f.read()

old_11_1 = '''          {
            id: "11-c1-b1",
            number: "Bài 1",
            title: "Giá trị lượng giác của góc lượng giác",
            sections: [
              {
                id: "11-c1-b1-s1",
                num: "1",
                title: "Góc lượng giác và đơn vị rađian",
                subsections: [
                  { key: "a", title: "Khái niệm góc lượng giác", summary: "Tia đầu, tia cuối, chiều quay dương/âm và số đo góc lượng giác tổng quát α + k360°." },
                  { key: "b", title: "Đơn vị rađian và công thức đổi đơn vị", summary: "1 rad = 180°/π; công thức độ dài cung tròn l = α.R." }
                ]
              },
              {
                id: "11-c1-b1-s2",
                num: "2",
                title: "Đường tròn lượng giác và giá trị lượng giác",
                subsections: [
                  { key: "a", title: "Đường tròn lượng giác", summary: "Đường tròn định hướng tâm O, bán kính 1 với điểm gốc A(1; 0)." },
                  { key: "b", title: "Định nghĩa sin, cos, tan, cot", summary: "Trục hoành là trục côsin, trục tung là trục sin, trục tan và trục cot." }
                ]
              },
              {
                id: "11-c1-b1-s3",
                num: "3",
                title: "Hệ thức lượng giác cơ bản và giá trị góc liên quan đặc biệt",
                subsections: [
                  { key: "a", title: "Các hệ thức lượng giác cơ bản", summary: "sin²α + cos²α = 1; 1 + tan²α = 1/cos²α; 1 + cot²α = 1/sin²α; tanα.cotα = 1." },
                  { key: "b", title: "Giá trị góc liên quan đặc biệt", summary: "Cung đối nhau, bù nhau, hơn kém π, phụ nhau, hơn kém π/2." }
                ]
              }
            ]
          },'''

new_11_1 = '''          {
            id: "11-c1-b1",
            number: "Bài 1",
            title: "Giá trị lượng giác của góc lượng giác",
            sections: [
              {
                id: "11-c1-b1-s1",
                num: "1",
                title: "Góc lượng giác",
                subsections: [
                  { key: "a", title: "Khái niệm góc lượng giác và số đo của góc lượng giác", summary: "Tia đầu Ou, tia cuối Ov, chiều quay dương/âm và 4 sơ đồ xoắn ốc 360°, 720°, -180°, -540°." },
                  { key: "b", title: "Hệ thức Chasles", summary: "Định lí hệ thức Chasles cộng góc lượng giác và công thức hiệu tương tự vectơ." }
                ]
              },
              {
                id: "11-c1-b1-s2",
                num: "2",
                title: "Đơn vị đo góc và độ dài cung tròn",
                subsections: [
                  { key: "a", title: "Đơn vị đo góc và cung tròn", summary: "Đơn vị độ, đơn vị radian, định nghĩa cung 1 rad có độ dài bằng bán kính R (Hình 1.6) và bảng đổi góc đặc biệt." },
                  { key: "b", title: "Độ dài cung tròn", summary: "Công thức l = Rα và bài toán mô hình thực tế quỹ đạo trạm vũ trụ quốc tế ISS." }
                ]
              },
              {
                id: "11-c1-b1-s3",
                num: "3",
                title: "Giá trị lượng giác của góc lượng giác",
                subsections: [
                  { key: "a", title: "Đường tròn lượng giác", summary: "Đường tròn định hướng tâm O, bán kính R=1, điểm gốc A(1; 0) và điểm M biểu diễn góc α (Hình 1.7)." },
                  { key: "b", title: "Các giá trị lượng giác của góc lượng giác", summary: "Định nghĩa sin, cos, tan, cot, hình 1.9b với điểm M ở góc phần tư thứ III và bảng dấu 4 góc phần tư." }
                ]
              },
              {
                id: "11-c1-b1-s4",
                num: "4",
                title: "Quan hệ giữa các giá trị lượng giác",
                subsections: [
                  { key: "a", title: "Các công thức lượng giác cơ bản", summary: "Bộ 4 công thức lượng giác cơ bản: sin²α + cos²α = 1, 1+tan²α = 1/cos²α, 1+cot²α = 1/sin²α, tanα.cotα = 1." },
                  { key: "b", title: "Giá trị lượng giác của các góc có liên quan đặc biệt", summary: "Thần chú Cos đối, Sin bù, Phụ chéo, Hơn kém pi tan/cot kèm sơ đồ minh họa Hình 1.12." }
                ]
              }
            ]
          },'''

if old_11_1 in c:
    c = c.replace(old_11_1, new_11_1)
    print("Replaced 11-c1-b1 definition in lessons-data.js")
else:
    print("WARNING: old_11_1 not found exactly in lessons-data.js")

# Add autoInjectLesson call at bottom
if "window.LESSON_11_C1_B1_DATA" not in c:
    target_inject = 'if (window.LESSON_11_C4_B10_DATA) autoInjectLesson(window.LESSON_11_C4_B10_DATA);'
    c = c.replace(target_inject, 'if (window.LESSON_11_C1_B1_DATA) autoInjectLesson(window.LESSON_11_C1_B1_DATA);\n  ' + target_inject)
    print("Added autoInjectLesson for LESSON_11_C1_B1_DATA")

with open('js/lessons-data.js', 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated js/lessons-data.js successfully!")
