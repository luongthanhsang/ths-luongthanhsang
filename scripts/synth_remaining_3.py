import asyncio, edge_tts, os, base64, json, shutil

VOICE = "vi-VN-NamMinhNeural"
AUDIO_DIR = "assets/audio"

REMAINING = {
    "b11_5_hook.mp3": (
        "Tình huống mở đầu. Bài toán dự báo quy mô dân số. "
        "Vào năm 2020, một thành phố có 500 nghìn người, với tốc độ tăng trưởng ổn định hai phần trăm mỗi năm. "
        "Khi đó, số dân sau n năm được tính theo công thức: P n bằng 500 nhân mở ngoặc 1 cộng 0 phẩy 02 đóng ngoặc mũ n. "
        "Thầy đặt ra câu hỏi cho các em: Đến năm 2030, sau mười năm, số dân của thành phố sẽ là bao nhiêu nghìn người?"
    ),
    "b11_5_sec2b.mp3": (
        "Tiểu mục b: Phương pháp mô tả và phương pháp truy hồi. "
        "Phương pháp truy hồi là việc cho trước số hạng đầu tiên, và hệ thức tính các số hạng tiếp theo qua các số hạng đứng trước nó. "
        "Tiêu biểu là dãy số Phi-bô-na-xi kì diệu với hai số hạng đầu bằng 1, và mỗi số hạng tiếp theo bằng tổng của hai số hạng liền trước."
    ),
    "b11_5_sec3b.mp3": (
        "Tiểu mục b: Dãy số bị chặn. "
        "Dãy số u n được gọi là bị chặn trên nếu tồn tại số thực M lớn sao cho mọi số hạng u n đều không vượt quá M lớn. "
        "Dãy số gọi là bị chặn dưới nếu tồn tại số thực m nhỏ sao cho mọi số hạng u n đều lớn hơn hoặc bằng m nhỏ. "
        "Khi một dãy số vừa bị chặn trên vừa bị chặn dưới thì ta gọi đó là dãy số bị chặn."
    )
}

async def main():
    for fname, text in REMAINING.items():
        fpath = os.path.join(AUDIO_DIR, fname)
        for attempt in range(1, 4):
            print(f"Generating {fname} (attempt {attempt})...")
            try:
                c = edge_tts.Communicate(text, VOICE)
                await c.save(fpath)
                size = os.path.getsize(fpath)
                if size > 10000:
                    print(f" -> SUCCESS: {fname} ({size:,} bytes)")
                    break
            except Exception as e:
                print(f" -> Error: {e}")
            await asyncio.sleep(4.0)
        await asyncio.sleep(3.0)

    # Update cache
    with open("js/b11-5-audio-cache.js", "r", encoding="utf-8") as f:
        content = f.read()
    
    idx_start = content.find("{")
    idx_end = content.rfind("}") + 1
    cache = json.loads(content[idx_start:idx_end])

    for fname in REMAINING.keys():
        fpath = os.path.join(AUDIO_DIR, fname)
        if os.path.exists(fpath) and os.path.getsize(fpath) > 10000:
            with open(fpath, "rb") as f:
                b64 = base64.b64encode(f.read()).decode("utf-8")
            data_uri = f"data:audio/mp3;base64,{b64}"
            cache[fname] = data_uri
            cache[f"assets/audio/{fname}"] = data_uri
            print(f"Updated cache for {fname}: {os.path.getsize(fpath):,} bytes")

    cache_js = "// Audio Cache Base64 - Bài 5 Lớp 11: Dãy số\n"
    cache_js += "// ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại\n"
    cache_js += "window.B11_5_AUDIO_CACHE = " + json.dumps(cache, ensure_ascii=False) + ";\n"
    cache_js += "if (typeof window !== 'undefined') window.AUDIO_CACHE = Object.assign(window.AUDIO_CACHE || {}, window.B11_5_AUDIO_CACHE);\n"

    with open("js/b11-5-audio-cache.js", "w", encoding="utf-8") as f:
        f.write(cache_js)
    with open("BAN_CAP_NHAT_NETLIFY/js/b11-5-audio-cache.js", "w", encoding="utf-8") as f:
        f.write(cache_js)

    for fname in REMAINING.keys():
        src = os.path.join(AUDIO_DIR, fname)
        if os.path.exists(src):
            dst = os.path.join("BAN_CAP_NHAT_NETLIFY/assets/audio", fname)
            shutil.copy2(src, dst)
    print("ALL 10 AUDIOS CACHED AND SYNCHRONIZED!")

asyncio.run(main())
