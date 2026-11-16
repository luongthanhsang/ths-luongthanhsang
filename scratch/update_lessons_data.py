with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the sections for 10-c1-b1
old_b1_sections = '''              {
                id: "10-c1-b1-s1",
                num: "1",
                title: "Mệnh đề, mệnh đề chứa biến",
                subsections: [
                  { key: "a", title: "Mệnh đề", summary: "Khái niệm và định nghĩa mệnh đề logic, mệnh đề đúng, mệnh đề sai." },
                  { key: "b", title: "Mệnh đề chứa biến", summary: "Câu khẳng định chứa biến và cách xác định tính đúng sai khi gán giá trị cụ thể cho biến." }
                ]
              },
              {
                id: "10-c1-b1-s2",
                num: "2",
                title: "Mệnh đề phủ định",
                subsections: [
                  { key: "a", title: "Định nghĩa mệnh đề phủ định", summary: "Kí hiệu gạch đầu và mối quan hệ chân trị đúng - sai giữa mệnh đề ban đầu và phủ định." },
                  { key: "b", title: "Cách thành lập mệnh đề phủ định", summary: "Quy tắc thêm hoặc bớt từ phủ định 'không', 'không phải' và ví dụ minh họa." }
                ]
              },
              {
                id: "10-c1-b1-s3",
                num: "3",
                title: "Mệnh đề kéo theo, mệnh đề đảo",
                subsections: [
                  { key: "a", title: "Mệnh đề kéo theo", summary: "Cấu trúc 'Nếu P thì Q' (kí hiệu P => Q), điều kiện cần và điều kiện đủ." },
                  { key: "b", title: "Mệnh đề đảo", summary: "Khái niệm mệnh đề đảo 'Q => P' và phân tích tính đúng sai của mệnh đề đảo." }
                ]
              },
              {
                id: "10-c1-b1-s4",
                num: "4",
                title: "Mệnh đề tương đương",
                subsections: [
                  { key: "a", title: "Định nghĩa mệnh đề tương đương", summary: "Cấu trúc 'P khi và chỉ khi Q' (kí hiệu P <=> Q)." },
                  { key: "b", title: "Điều kiện cần và đủ", summary: "Ý nghĩa toán học của điều kiện cần và đủ trong các định lý hình học và đại số." }
                ]
              },
              {
                id: "10-c1-b1-s5",
                num: "5",
                title: "Kí hiệu với mọi (∀) và tồn tại (∃)",
                subsections: [
                  { key: "a", title: "Kí hiệu với mọi (∀)", summary: "Cách biểu đạt mệnh đề chứa lượng từ 'với mọi' và xét tính đúng sai." },
                  { key: "b", title: "Kí hiệu tồn tại (∃)", summary: "Cách biểu đạt mệnh đề chứa lượng từ 'tồn tại ít nhất' và phủ định của các mệnh đề chứa ∀, ∃." }
                ]
              }'''

new_b1_sections = '''              {
                id: "10-c1-b1-s1",
                num: "1",
                title: "Mệnh đề, mệnh đề chứa biến",
                subsections: [
                  { key: "a", title: "Mệnh đề", summary: "Khái niệm và định nghĩa mệnh đề logic, mệnh đề đúng, mệnh đề sai và Luyện tập 1 bảng chuẩn SGK trang 6." },
                  { key: "b", title: "Mệnh đề chứa biến", summary: "Câu khẳng định chứa biến và cách xác định tính đúng sai khi gán giá trị cụ thể cho biến." }
                ]
              },
              {
                id: "10-c1-b1-s2",
                num: "2",
                title: "Mệnh đề phủ định",
                subsections: []
              },
              {
                id: "10-c1-b1-s3",
                num: "3",
                title: "Mệnh đề kéo theo, mệnh đề đảo",
                subsections: [
                  { key: "a", title: "Mệnh đề kéo theo", summary: "Cấu trúc 'Nếu P thì Q' (kí hiệu P => Q), điều kiện cần và điều kiện đủ." },
                  { key: "b", title: "Mệnh đề đảo", summary: "Khái niệm mệnh đề đảo 'Q => P' và phân tích tính đúng sai của mệnh đề đảo." }
                ]
              },
              {
                id: "10-c1-b1-s4",
                num: "4",
                title: "Mệnh đề tương đương",
                subsections: []
              },
              {
                id: "10-c1-b1-s5",
                num: "5",
                title: "Mệnh đề có chứa kí hiệu với mọi và tồn tại",
                subsections: []
              }'''

if old_b1_sections in text:
    text = text.replace(old_b1_sections, new_b1_sections)
    print("Replaced 10-c1-b1 sections successfully!")
else:
    print("WARNING: old_b1_sections not found directly!")

# Add autoInjectLesson at bottom
old_inject = '  if (window.LESSON_10_C3_B5_DATA) autoInjectLesson(window.LESSON_10_C3_B5_DATA);'
new_inject = '  if (window.LESSON_10_C1_B1_DATA) autoInjectLesson(window.LESSON_10_C1_B1_DATA);\n  if (window.LESSON_10_C3_B5_DATA) autoInjectLesson(window.LESSON_10_C3_B5_DATA);'

if old_inject in text and 'LESSON_10_C1_B1_DATA' not in text:
    text = text.replace(old_inject, new_inject)
    print("Added autoInject for LESSON_10_C1_B1_DATA!")

with open('js/lessons-data.js', 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated js/lessons-data.js successfully!")
