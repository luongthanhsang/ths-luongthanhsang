with open('js/lessons-data.js', 'r', encoding='utf-8') as f:
    text = f.read()

dangling = '''              {
                id: "11-c1-b3-s2",
                num: "2",
                title: "Hàm số y = tan x và hàm số y = cot x",
                subsections: [
                  { key: "a", title: "Tập xác định và tính tuần hoàn", summary: "y = tan x có D = R \\\\ {π/2 + kπ}, chu kì π; y = cot x có D = R \\\\ {kπ}, chu kì π." },
                  { key: "b", title: "Đồ thị và tính đơn điệu", summary: "Tính đồng biến của hàm tan và tính nghịch biến của hàm cot trên từng khoảng xác định." }
                ]
              }
            ]
          },'''

# Also let's check with standard string
import re
idx = text.find('id: "11-c1-b3"')
if idx != -1:
    idx2 = text.find('id: "11-c1-b4"', idx)
    print("Between 11-c1-b3 and 11-c1-b4:")
    print(text[idx:idx2])

    # Clean replacement between idx and idx2
    correct_b3 = '''id: "11-c1-b3",
            number: "Bài 3",
            title: "Hàm số lượng giác",
            isFeaturedLesson: true,
            isInteractiveDigitalLesson: true,
            sections: [
              {
                id: "11-c1-b3-s1",
                num: "1",
                title: "Định nghĩa các hàm số lượng giác"
              },
              {
                id: "11-c1-b3-s2",
                num: "2",
                title: "Hàm số chẵn, hàm số lẻ, hàm số tuần hoàn",
                subsections: [
                  { key: "a", title: "Hàm số chẵn và hàm số lẻ" },
                  { key: "b", title: "Hàm số tuần hoàn và chu kì" }
                ]
              },
              {
                id: "11-c1-b3-s3",
                num: "3",
                title: "Đồ thị và tính chất của hàm số y = sin x"
              },
              {
                id: "11-c1-b3-s4",
                num: "4",
                title: "Đồ thị và tính chất của hàm số y = cos x"
              },
              {
                id: "11-c1-b3-s5",
                num: "5",
                title: "Đồ thị và tính chất của hàm số y = tan x"
              },
              {
                id: "11-c1-b3-s6",
                num: "6",
                title: "Đồ thị và tính chất của hàm số y = cot x"
              }
            ]
          },
          {
            '''
    text = text[:idx] + correct_b3 + text[idx2:]
    with open('js/lessons-data.js', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Fixed js/lessons-data.js successfully!")

    import shutil
    shutil.copy2('js/lessons-data.js', 'BAN_CAP_NHAT_NETLIFY/js/lessons-data.js')
    print("Synced to BAN_CAP_NHAT_NETLIFY/js/lessons-data.js!")
