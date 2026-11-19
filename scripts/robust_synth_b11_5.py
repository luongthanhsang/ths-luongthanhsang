# -*- coding: utf-8 -*-
"""
Tạo 10 file audio cho Bài 5 Lớp 11 với sleep 3s và retry cẩn thận
"""
import asyncio, os, time, base64, json, shutil, edge_tts

VOICE = "vi-VN-NamMinhNeural"
AUDIO_DIR = "assets/audio"
os.makedirs(AUDIO_DIR, exist_ok=True)

SCRIPTS = {
    "b11_5_welcome.mp3": (
        "Thầy Sáng xin chào tất cả các em học sinh lớp 11! Hôm nay thầy trò chúng ta sẽ cùng nhau học Bài 5: Dãy số. "
        "Dãy số là một nội dung toán học rất quen thuộc và có nhiều ứng dụng trong thực tế, từ dự báo dân số, tính tiền lãi gửi tiết kiệm, cho đến dãy số Fibonacci trong tự nhiên. "
        "Bài học này sẽ giúp các em nắm vững định nghĩa dãy số vô hạn, dãy số hữu hạn, bốn cách cho một dãy số, cùng kĩ thuật xét tính tăng, giảm và tính bị chặn. "
        "Các em hãy cùng Thầy bắt đầu bài học nhé!"
    ),
    "b11_5_goals.mp3": (
        "Phần 2. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần đạt được các mục tiêu trọng tâm: "
        "Thứ nhất, hiểu định nghĩa dãy số vô hạn và hữu hạn. "
        "Thứ hai, biết bốn cách cho một dãy số gồm liệt kê, công thức tổng quát, mô tả và truy hồi. "
        "Thứ ba, thành thạo xét tính tăng, giảm của dãy số. "
        "Thứ tư, biết cách chứng minh dãy số bị chặn trên, bị chặn dưới và bị chặn. "
        "Thứ năm, vận dụng giải quyết các bài toán thực tế và làm tốt các bài tập trắc nghiệm."
    ),
    "b11_5_hook.mp3": (
        "Tình huống mở đầu. Bài toán dự báo dân số đô thị. Năm 2020, dân số của một thành phố là 500 nghìn người và tăng trưởng 2 phần trăm mỗi năm. "
        "Khi đó, dân số sau n năm được tính theo công thức: P n bằng 500 nhân mở ngoặc 1 cộng 0 phẩy 02 đóng ngoặc mũ n. "
        "Hỏi đến năm 2030, tức là sau 10 năm, dân số của thành phố sẽ là khoảng bao nhiêu nghìn người?"
    ),
    "b11_5_sec1a.mp3": (
        "Mục 1. Định nghĩa dãy số. Tiểu mục a: Dãy số vô hạn. Mỗi hàm số u xác định trên tập hợp các số nguyên dương N sao được gọi là một dãy số vô hạn, gọi tắt là dãy số, kí hiệu là mở ngoặc u n đóng ngoặc. "
        "Khai triển của dãy số là: u 1, u 2, u 3, vân vân, u n, vân vân. "
        "Trong đó, u 1 là số hạng đầu, và u n là số hạng thứ n, gọi là số hạng tổng quát của dãy số."
    ),
    "b11_5_sec1b.mp3": (
        "Tiểu mục b: Dãy số hữu hạn. Mỗi hàm số u xác định trên tập hợp gồm m số nguyên dương đầu tiên từ 1 đến m được gọi là một dãy số hữu hạn. "
        "Dạng khai triển của dãy số hữu hạn là u 1, u 2, cho đến u m. Số u 1 gọi là số hạng đầu, và u m gọi là số hạng cuối."
    ),
    "b11_5_sec2a.mp3": (
        "Mục 2. Các cách cho một dãy số. Tiểu mục a: Liệt kê các số hạng và công thức số hạng tổng quát. Một dãy số có thể cho bằng bốn cách: "
        "Liệt kê các số hạng, công thức số hạng tổng quát, phương pháp mô tả và phương pháp truy hồi. "
        "Trong đó, công thức số hạng tổng quát giúp tính trực tiếp bất kì số hạng nào của dãy số."
    ),
    "b11_5_sec2b.mp3": (
        "Tiểu mục b: Phương pháp mô tả và phương pháp truy hồi. Phương pháp truy hồi là cho số hạng đầu và hệ thức tính số hạng tiếp theo qua các số hạng đứng trước. "
        "Tiêu biểu là dãy số Fibonacci với hai số hạng đầu bằng 1, và mỗi số hạng sau bằng tổng hai số hạng liền trước."
    ),
    "b11_5_sec3a.mp3": (
        "Mục 3. Dãy số tăng, dãy số giảm và dãy số bị chặn. Tiểu mục a: Dãy số tăng và dãy số giảm. Dãy số u n được gọi là dãy tăng nếu u n cộng 1 lớn hơn u n với mọi n. "
        "Dãy số gọi là dãy giảm nếu u n cộng 1 nhỏ hơn u n với mọi n. Để xét tính tăng giảm, ta thường tính hiệu số u n cộng 1 trừ u n."
    ),
    "b11_5_sec3b.mp3": (
        "Tiểu mục b: Dãy số bị chặn. Dãy số u n được gọi là bị chặn trên nếu mọi số hạng đều không vượt quá số M. Dãy số gọi là bị chặn dưới nếu mọi số hạng đều lớn hơn hoặc bằng số m. "
        "Khi dãy số vừa bị chặn trên vừa bị chặn dưới thì ta gọi đó là dãy số bị chặn."
    ),
    "b11_5_wrapup.mp3": (
        "Chốt kiến thức then chốt Bài 5: Dãy số. Thầy chúc mừng các em đã hoàn thành bài học! "
        "Các em hãy ghi nhớ định nghĩa dãy số vô hạn, hữu hạn, bốn cách cho dãy số, phương pháp xét tính tăng giảm và tính bị chặn. "
        "Bây giờ, các em hãy cùng Thầy chuyển sang phần bài tập trắc nghiệm củng cố nhé!"
    )
}

async def generate_file(filename, text):
    filepath = os.path.join(AUDIO_DIR, filename)
    if os.path.exists(filepath) and os.path.getsize(filepath) > 10000:
        print(f"Skipping already valid: {filename} ({os.path.getsize(filepath):,} bytes)", flush=True)
        return True

    for attempt in range(1, 6):
        print(f"Generating {filename} (Attempt {attempt})...", flush=True)
        try:
            c = edge_tts.Communicate(text, VOICE)
            await c.save(filepath)
            size = os.path.getsize(filepath)
            if size > 10000:
                print(f" -> SUCCESS: {filename} ({size:,} bytes)", flush=True)
                return True
        except Exception as e:
            print(f" -> Retry on error: {e}", flush=True)
        await asyncio.sleep(4.0)
    return False

async def main():
    for fname, text in SCRIPTS.items():
        await generate_file(fname, text)
        await asyncio.sleep(3.0)

    # Package Cache
    print("\nPackaging Base64 cache...")
    cache = {}
    for fname in SCRIPTS.keys():
        fpath = os.path.join(AUDIO_DIR, fname)
        if os.path.exists(fpath) and os.path.getsize(fpath) > 1000:
            with open(fpath, "rb") as f:
                b64 = base64.b64encode(f.read()).decode("utf-8")
            data_uri = f"data:audio/mp3;base64,{b64}"
            cache[fname] = data_uri
            cache[f"assets/audio/{fname}"] = data_uri
            print(f"  Cached {fname}: {os.path.getsize(fpath):,} bytes")

    cache_js = "// Audio Cache Base64 - Bài 5 Lớp 11: Dãy số\n"
    cache_js += "// ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại\n"
    cache_js += "window.B11_5_AUDIO_CACHE = " + json.dumps(cache, ensure_ascii=False) + ";\n"
    cache_js += "if (typeof window !== 'undefined') window.AUDIO_CACHE = Object.assign(window.AUDIO_CACHE || {}, window.B11_5_AUDIO_CACHE);\n"

    with open("js/b11-5-audio-cache.js", "w", encoding="utf-8") as f:
        f.write(cache_js)
    with open("BAN_CAP_NHAT_NETLIFY/js/b11-5-audio-cache.js", "w", encoding="utf-8") as f:
        f.write(cache_js)

    for fname in SCRIPTS.keys():
        src = os.path.join(AUDIO_DIR, fname)
        if os.path.exists(src):
            dst = os.path.join("BAN_CAP_NHAT_NETLIFY/assets/audio", fname)
            shutil.copy2(src, dst)

    print("ALL DONE AND SYNCHRONIZED TO NETLIFY!")

if __name__ == "__main__":
    asyncio.run(main())
