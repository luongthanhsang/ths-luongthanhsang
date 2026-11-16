# -*- coding: utf-8 -*-
import os, base64, json, shutil

AUDIO_DIR = "assets/audio"
audio_keys = [
    "b11_1_welcome.mp3",
    "b11_1_goals.mp3",
    "b11_1_hook.mp3",
    "b11_1_sec1a.mp3",
    "b11_1_sec1b.mp3",
    "b11_1_sec2a.mp3",
    "b11_1_sec2b.mp3",
    "b11_1_sec3a.mp3",
    "b11_1_sec3b.mp3",
    "b11_1_sec4a.mp3",
    "b11_1_sec4b.mp3",
    "b11_1_wrapup.mp3"
]

def pack_and_sync():
    print("=== PACKING AUDIO CACHE ===")
    cache = {}
    for fname in audio_keys:
        fpath = os.path.join(AUDIO_DIR, fname)
        if os.path.exists(fpath):
            sz = os.path.getsize(fpath)
            with open(fpath, "rb") as f:
                b64 = base64.b64encode(f.read()).decode("utf-8")
            cache[fname] = f"data:audio/mp3;base64,{b64}"
            cache[f"assets/audio/{fname}"] = f"data:audio/mp3;base64,{b64}"
            print(f" -> Cached {fname}: {sz:,} bytes")
        else:
            print(f" -> MISSING: {fname}")

    cache_file = "js/b11-1-audio-cache.js"
    with open(cache_file, "w", encoding="utf-8") as f:
        f.write("// Audio Cache Base64 - Bài 1 Lớp 11: Giá trị lượng giác của góc lượng giác\n")
        f.write("// Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\n")
        f.write("window.B11_1_AUDIO_CACHE = ")
        json.dump(cache, f, ensure_ascii=False)
        f.write(";\n")
    print(f"Created {cache_file} ({os.path.getsize(cache_file):,} bytes)")

    # Đồng bộ sang BAN_CAP_NHAT_NETLIFY
    netlify_cache = "BAN_CAP_NHAT_NETLIFY/js/b11-1-audio-cache.js"
    os.makedirs(os.path.dirname(netlify_cache), exist_ok=True)
    shutil.copy2(cache_file, netlify_cache)
    print(f"Synchronized to {netlify_cache}")

    # Đồng bộ cả lesson-11-1-data.js
    shutil.copy2("js/lesson-11-1-data.js", "BAN_CAP_NHAT_NETLIFY/js/lesson-11-1-data.js")
    print("Synchronized js/lesson-11-1-data.js")

if __name__ == "__main__":
    pack_and_sync()
