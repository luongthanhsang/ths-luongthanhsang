# -*- coding: utf-8 -*-
"""
Cập nhật lessons-data.js cho Bài 2 Lớp 11: 4 mục lớn, 8 mục con chuẩn mực
"""
import shutil

NEW_B11_2 = """          {
            id: "11-c1-b2",
            number: "Bài 2",
            title: "Công thức lượng giác",
            sections: [
              {
                id: "11-c1-b2-s1",
                num: "1",
                title: "Công thức cộng",
                subsections: [
                  { key: "a", title: "Công thức cộng đối với Sin và Côsin", summary: "cos(a ∓ b) = cos a cos b ± sin a sin b; sin(a ± b) = sin a cos b ± cos a sin b (Chứng minh hình học bằng tích vô hướng)." },
                  { key: "b", title: "Công thức cộng đối với Tang & Vận dụng sóng âm", summary: "tan(a ± b) = (tan a ± tan b)/(1 ∓ tan a tan b) và bài toán trễ âm thanh f(t) = 5√2 sin(t + π/4)." }
                ]
              },
              {
                id: "11-c1-b2-s2",
                num: "2",
                title: "Công thức nhân đôi và hạ bậc",
                subsections: [
                  { key: "a", title: "Công thức nhân đôi cơ bản", summary: "sin 2a = 2 sin a cos a; cos 2a = cos²a - sin²a = 2cos²a - 1 = 1 - 2sin²a; tan 2a = 2tan a / (1 - tan²a)." },
                  { key: "b", title: "Công thức hạ bậc & Kĩ thuật góc đặc biệt", summary: "cos²a = (1 + cos 2a)/2; sin²a = (1 - cos 2a)/2; kĩ thuật tính cos(π/8) = √(2+√2)/2." }
                ]
              },
              {
                id: "11-c1-b2-s3",
                num: "3",
                title: "Công thức biến đổi tích thành tổng",
                subsections: [
                  { key: "a", title: "Ba công thức biến đổi tích thành tổng cơ bản", summary: "cos a cos b = ½[cos(a-b) + cos(a+b)]; sin a sin b = ½[cos(a-b) - cos(a+b)]; sin a cos b = ½[sin(a-b) + sin(a+b)]." },
                  { key: "b", title: "Kĩ thuật rút gọn và chứng minh đẳng thức", summary: "Chứng minh sin(a+b)sin(a-b) = sin²a - sin²b (Bài 1.11) và chuỗi nhân đôi domino (Bài 1.10b)." }
                ]
              },
              {
                id: "11-c1-b2-s4",
                num: "4",
                title: "Công thức biến đổi tổng thành tích",
                subsections: [
                  { key: "a", title: "Bốn công thức biến đổi tổng thành tích cơ bản", summary: "Bài ca lượng giác: Cos cộng cos bằng 2 cos cos; Cos trừ cos bằng trừ 2 sin sin; Sin cộng sin bằng 2 sin cos; Sin trừ sin bằng 2 cos sin." },
                  { key: "b", title: "Ứng dụng âm thanh bàn phím cảm ứng DTMF", summary: "Giải mã tín hiệu đa tần số DTMF trên bàn phím điện thoại cảm ứng khi nhấn phím 4 (Hình 1.13 SGK trang 20)." }
                ]
              }
            ]
          },"""

def update():
    with open("js/lessons-data.js", "r", encoding="utf-8") as f:
        text = f.read()

    idx1 = text.find('id: "11-c1-b2"')
    # Lùi lại đến dấu mở ngoặc nhọn '{' trước đó
    brace_start = text.rfind('{', 0, idx1)
    
    idx_next = text.find('id: "11-c1-b3"', idx1)
    brace_end = text.rfind('{', 0, idx_next)
    
    old_block = text[brace_start:brace_end].rstrip()
    if not old_block.endswith(','):
        old_block += ','
        
    print(f"Replacing old block ({len(old_block)} chars) with new block ({len(NEW_B11_2)} chars) ...")
    new_text = text[:brace_start] + NEW_B11_2 + "\n" + text[brace_end:]

    with open("js/lessons-data.js", "w", encoding="utf-8") as f:
        f.write(new_text)
    print("Updated js/lessons-data.js")

    shutil.copy2("js/lessons-data.js", "BAN_CAP_NHAT_NETLIFY/js/lessons-data.js")
    print("Synchronized to BAN_CAP_NHAT_NETLIFY/js/lessons-data.js")

if __name__ == "__main__":
    update()
