# -*- coding: utf-8 -*-
"""
Tổng hợp toàn bộ 10 file Audio Voice AI Thầy Sáng (vi-VN-NamMinhNeural)
cho Bài 5 Lớp 11: Dãy số (Chương II, SGK Toán 11 KNTT)
Có retry tự động, kiểm tra kích thước và đóng gói Base64 Cache js/b11-5-audio-cache.js
"""

import asyncio
import base64
import os
import json
import shutil
import edge_tts

VOICE = "vi-VN-NamMinhNeural"
AUDIO_DIR = "assets/audio"
os.makedirs(AUDIO_DIR, exist_ok=True)

SCRIPTS = {
    "b11_5_welcome.mp3": (
        "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Thầy rất vui mừng được đồng hành cùng các em mở màn Chương 2 với Bài 5: Dãy số. "
        "Các em có biết không, dãy số không hề là những con số trừu tượng khô khan trên trang giấy, mà chính là ngôn ngữ toán học phản chiếu nhịp đập kì diệu của vũ trụ và đời sống xung quanh ta. "
        "Từ mô hình dự báo tăng trưởng dân số, số tiền tích lũy lãi kép hàng tháng trong ngân hàng, sự phân chia tế bào sinh học, cho đến quy luật xoắn ốc tuyệt mỹ của các cánh hoa hướng dương hay vỏ ốc Nautilus theo dãy số thần kỳ Fibonacci – tất cả đều được vận hành theo quy luật của dãy số! "
        "Nắm vững bài học hôm nay sẽ giúp các em làm chủ các khái niệm nền tảng: thế nào là dãy số vô hạn, hữu hạn, bốn phương pháp xác định dãy số, cùng kĩ thuật khảo sát tính tăng, giảm và tính bị chặn. "
        "Đây chính là chiếc chìa khóa vàng để các em chinh phục Cấp số cộng, Cấp số nhân và chuyên đề Giới hạn sau này. Nào, các em hãy chuẩn bị tập vở, giữ trọn niềm đam mê và cùng Thầy khám phá thế giới diệu kỳ của Dãy số nhé!"
    ),
    "b11_5_goals.mp3": (
        "Phần 2. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần làm chủ năm mục tiêu trọng tâm sau: "
        "Thứ nhất, hiểu sâu sắc định nghĩa dãy số vô hạn và hữu hạn, phân biệt rõ số hạng đầu, số hạng thứ n và số hạng cuối. "
        "Thứ hai, thành thạo bốn cách cho một dãy số gồm liệt kê, công thức số hạng tổng quát, mô tả và hệ thức truy hồi. "
        "Thứ ba, nắm vững kĩ năng khảo sát tính tăng, giảm qua xét hiệu hoặc tỉ số. "
        "Thứ tư, làm chủ phương pháp chứng minh dãy số bị chặn trên, bị chặn dưới và bị chặn. "
        "Thứ năm, tự tin vận dụng giải quyết các bài toán thực tế như dân số, tiền lương, lãi kép và chinh phục trọn vẹn đề thi đánh giá năng lực mới nhất."
    ),
    "b11_5_hook.mp3": (
        "Tình huống mở đầu. Dự báo tốc độ tăng trưởng dân số đô thị. Năm 2020, dân số của một thành phố là khoảng 500 nghìn người và ước tính tăng trưởng ổn định 2% mỗi năm. "
        "Khi đó, dân số P n sau n năm được tính bằng công thức: P n bằng 500 nhân mở ngoặc 1 cộng 0 phẩy 02 đóng ngoặc mũ n, hay 500 nhân 1 phẩy 02 mũ n. "
        "Thầy đặt ra câu hỏi cho các em: Đến năm 2030, tức là sau 10 năm, dân số của thành phố này sẽ là khoảng bao nhiêu? Dãy các số dân theo từng năm chính là một ví dụ sống động về dãy số trong cuộc sống thực tế."
    ),
    "b11_5_sec1a.mp3": (
        "Mục 1. Định nghĩa dãy số. Tiểu mục a: Dãy số vô hạn. Mỗi hàm số u xác định trên tập hợp các số nguyên dương N sao được gọi là một dãy số vô hạn, gọi tắt là dãy số, kí hiệu là mở ngoặc u n đóng ngoặc. "
        "Dãy số được viết dưới dạng khai triển là: u 1, u 2, u 3, vân vân, u n, vân vân. "
        "Trong đó, u 1 là số hạng đầu tiên, và u n là số hạng thứ n, được gọi là số hạng tổng quát của dãy số. Nếu mọi số hạng đều bằng một hằng số c không đổi, ta gọi đó là dãy số không đổi."
    ),
    "b11_5_sec1b.mp3": (
        "Tiểu mục b: Dãy số hữu hạn. Mỗi hàm số u xác định trên tập hợp M gồm m số nguyên dương đầu tiên từ 1 đến m được gọi là một dãy số hữu hạn. "
        "Dạng khai triển của dãy số hữu hạn là u 1, u 2, cho đến u m. Trong đó, u 1 là số hạng đầu, và u m là số hạng cuối cùng."
    ),
    "b11_5_sec2a.mp3": (
        "Mục 2. Các cách cho một dãy số. Tiểu mục a: Liệt kê và công thức số hạng tổng quát. Một dãy số có thể được xác định bằng một trong bốn phương pháp: "
        "Liệt kê các số hạng, cho bằng công thức số hạng tổng quát, phương pháp mô tả và phương pháp truy hồi. "
        "Trong đó, cách cho bằng công thức số hạng tổng quát u n bằng f của n là cách phổ biến và tiện lợi nhất, vì cho phép chúng ta tính toán trực tiếp bất kì số hạng thứ n nào mà không cần lần lượt tính các số hạng đứng trước."
    ),
    "b11_5_sec2b.mp3": (
        "Tiểu mục b: Phương pháp mô tả và phương pháp truy hồi. Phương pháp truy hồi là việc cho trước số hạng đầu tiên, cùng hệ thức tính số hạng thứ n qua một hoặc nhiều số hạng đứng liền trước nó. "
        "Tiêu biểu nhất là dãy số Fibonacci kì diệu với hai số hạng đầu bằng 1, và mỗi số hạng tiếp theo bằng tổng của hai số hạng liền trước. "
        "Để có hình ảnh trực quan về dãy số, ta có thể biểu diễn các số hạng của nó trên trục số như hình vẽ minh họa dãy số đan dấu u n bằng mở ngoặc trừ 1 đóng ngoặc mũ n chia cho 2 mũ n đang hội tụ về điểm 0."
    ),
    "b11_5_sec3a.mp3": (
        "Mục 3. Dãy số tăng, dãy số giảm và dãy số bị chặn. Tiểu mục a: Dãy số tăng và dãy số giảm. Dãy số u n được gọi là dãy số tăng nếu số hạng sau luôn lớn hơn số hạng trước, tức là u n cộng 1 lớn hơn u n với mọi n thuộc tập số nguyên dương N sao. "
        "Ngược lại, nếu u n cộng 1 nhỏ hơn u n với mọi n, thì dãy số được gọi là dãy số giảm. "
        "Để xét tính tăng giảm, phương pháp phổ biến nhất là tính hiệu số u n cộng 1 trừ u n. Nếu hiệu này luôn dương thì dãy tăng, nếu luôn âm thì dãy giảm."
    ),
    "b11_5_sec3b.mp3": (
        "Tiểu mục b: Dãy số bị chặn. Dãy số u n được gọi là bị chặn trên nếu tồn tại một số M sao cho mọi số hạng u n đều không vượt quá M. "
        "Dãy số được gọi là bị chặn dưới nếu tồn tại số m sao cho mọi số hạng u n đều lớn hơn hoặc bằng m. "
        "Khi một dãy số vừa bị chặn trên vừa bị chặn dưới, tức là mọi số hạng đều nằm gọn trong đoạn từ m đến M, thì ta nói dãy số đó là dãy số bị chặn."
    ),
    "b11_5_wrapup.mp3": (
        "Chốt kiến thức then chốt Bài 5: Dãy số. Thầy chúc mừng các em đã xuất sắc hoàn thành toàn bộ nội dung bài học hôm nay! "
        "Chúng ta đã nắm chắc định nghĩa dãy số vô hạn, dãy số hữu hạn; làm chủ bốn cách cho dãy số gồm liệt kê, công thức số hạng tổng quát, phương pháp mô tả và hệ thức truy hồi. "
        "Các em hãy luôn nhớ kĩ hai phương pháp vàng để xét tính tăng giảm là lập hiệu số hoặc tỉ số; cùng phương pháp đánh giá tính bị chặn trên, bị chặn dưới. "
        "Dãy số chính là cánh cửa dẫn các em bước vào hai quy luật kinh điển tiếp theo là Cấp số cộng và Cấp số nhân. Bây giờ, các em hãy cùng Thầy bước vào Phần 4 để tự tin chinh phục bộ câu hỏi trắc nghiệm theo chuẩn cấu trúc mới nhé!"
    )
}

async def generate_single(filename, text):
    filepath = os.path.join(AUDIO_DIR, filename)
    for attempt in range(1, 6):
        try:
            print(f"Generating {filename} (Attempt {attempt})...", flush=True)
            c = edge_tts.Communicate(text, VOICE)
            await c.save(filepath)
            size = os.path.getsize(filepath)
            if size > 10000:
                print(f" -> SUCCESS: {filename} ({size:,} bytes)", flush=True)
                return True
            else:
                print(f" -> Too small ({size:,} bytes), retrying...", flush=True)
        except Exception as e:
            print(f" -> Error on attempt {attempt}: {e}", flush=True)
        await asyncio.sleep(2.0)
    return False

async def main():
    for fname, text in SCRIPTS.items():
        fpath = os.path.join(AUDIO_DIR, fname)
        need_gen = True
        if os.path.exists(fpath):
            size = os.path.getsize(fpath)
            if size > 10000:
                print(f"File {fname} is good ({size:,} bytes). Skipping.")
                need_gen = False
        if need_gen:
            await generate_single(fname, text)
            await asyncio.sleep(1.5)

    # Re-pack Base64 Cache
    print("\nPacking all 10 files into Base64 Cache js/b11-5-audio-cache.js ...", flush=True)
    cache = {}
    for fname in SCRIPTS.keys():
        fpath = os.path.join(AUDIO_DIR, fname)
        rel_key = f"assets/audio/{fname}"
        if os.path.exists(fpath) and os.path.getsize(fpath) > 1000:
            b64 = base64.b64encode(open(fpath, "rb").read()).decode("utf-8")
            data_uri = f"data:audio/mp3;base64,{b64}"
            cache[fname] = data_uri
            cache[rel_key] = data_uri
            print(f"  Cached {fname}: {os.path.getsize(fpath):,} bytes", flush=True)
        else:
            print(f"  WARNING: missing or small {fname}", flush=True)

    cache_content = "// Audio Cache Base64 - Bài 5 Lớp 11: Dãy số\n"
    cache_content += "// ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại, An Giang\n"
    cache_content += "window.B11_5_AUDIO_CACHE = " + json.dumps(cache, ensure_ascii=False) + ";\n"
    cache_content += "if (typeof window !== 'undefined') window.AUDIO_CACHE = Object.assign(window.AUDIO_CACHE || {}, window.B11_5_AUDIO_CACHE);\n"

    out_file = "js/b11-5-audio-cache.js"
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(cache_content)
    print(f"Wrote {out_file} ({os.path.getsize(out_file):,} bytes)")

    # Sync to Netlify
    os.makedirs("BAN_CAP_NHAT_NETLIFY/assets/audio", exist_ok=True)
    os.makedirs("BAN_CAP_NHAT_NETLIFY/js", exist_ok=True)
    shutil.copy2(out_file, "BAN_CAP_NHAT_NETLIFY/js/b11-5-audio-cache.js")
    for fname in SCRIPTS.keys():
        src = os.path.join(AUDIO_DIR, fname)
        if os.path.exists(src):
            shutil.copy2(src, os.path.join("BAN_CAP_NHAT_NETLIFY/assets/audio", fname))
    print("All audio files synchronized to BAN_CAP_NHAT_NETLIFY!")

if __name__ == "__main__":
    asyncio.run(main())
