# -*- coding: utf-8 -*-
"""
Tạo 10 file audio cho Bài 6 Lớp 11: Cấp số cộng
Giọng đọc AI: vi-VN-NamMinhNeural
"""

import asyncio, os, sys, time, base64, json, shutil
import edge_tts

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from build_b11_6_scripts import build_lesson_11_6_data

VOICE = "vi-VN-NamMinhNeural"
AUDIO_DIR = "assets/audio"
os.makedirs(AUDIO_DIR, exist_ok=True)

scripts_data = build_lesson_11_6_data()

FILES = {
    "b11_6_welcome.mp3": scripts_data["welcome_text"],
    "b11_6_goals.mp3": scripts_data["goals_script"],
    "b11_6_hook.mp3": scripts_data["hook_script"],
    "b11_6_sec1a.mp3": scripts_data["sec1a_script"],
    "b11_6_sec1b.mp3": scripts_data["sec1b_script"],
    "b11_6_sec2a.mp3": scripts_data["sec2a_script"],
    "b11_6_sec2b.mp3": scripts_data["sec2b_script"],
    "b11_6_sec3a.mp3": scripts_data["sec3a_script"],
    "b11_6_sec3b.mp3": scripts_data["sec3b_script"],
    "b11_6_wrapup.mp3": scripts_data["wrapup_script"]
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
            print(f" -> Retry on error for {filename}: {e}", flush=True)
        await asyncio.sleep(4.0)
    return False

async def main():
    print("=== BẮT ĐẦU TẠO 10 FILE AUDIO BÀI 6 LỚP 11: CẤP SỐ CỘNG ===")
    for fname, text in FILES.items():
        success = await generate_file(fname, text)
        if not success:
            print(f"⚠️ WARNING: Failed to generate {fname}", flush=True)
        await asyncio.sleep(3.5)

    print("\nĐang kiểm tra và đóng gói Base64 cache...")
    cache = {}
    valid_count = 0
    for fname in FILES.keys():
        fpath = os.path.join(AUDIO_DIR, fname)
        if os.path.exists(fpath) and os.path.getsize(fpath) > 1000:
            valid_count += 1
            with open(fpath, "rb") as f:
                b64 = base64.b64encode(f.read()).decode("utf-8")
            data_uri = f"data:audio/mp3;base64,{b64}"
            cache[fname] = data_uri
            cache[f"assets/audio/{fname}"] = data_uri
            print(f"  ✓ Cached {fname}: {os.path.getsize(fpath):,} bytes")

    cache_js = "// Audio Cache Base64 - Bài 6 Lớp 11: Cấp số cộng\n"
    cache_js += "// ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại\n"
    cache_js += "window.B11_6_AUDIO_CACHE = " + json.dumps(cache, ensure_ascii=False) + ";\n"
    cache_js += "if (typeof window !== 'undefined') window.AUDIO_CACHE = Object.assign(window.AUDIO_CACHE || {}, window.B11_6_AUDIO_CACHE);\n"

    with open("js/b11-6-audio-cache.js", "w", encoding="utf-8") as f:
        f.write(cache_js)
    os.makedirs("BAN_CAP_NHAT_NETLIFY/js", exist_ok=True)
    with open("BAN_CAP_NHAT_NETLIFY/js/b11-6-audio-cache.js", "w", encoding="utf-8") as f:
        f.write(cache_js)

    os.makedirs("BAN_CAP_NHAT_NETLIFY/assets/audio", exist_ok=True)
    for fname in FILES.keys():
        src = os.path.join(AUDIO_DIR, fname)
        if os.path.exists(src):
            dst = os.path.join("BAN_CAP_NHAT_NETLIFY/assets/audio", fname)
            shutil.copy2(src, dst)

    print(f"\nHOÀN THÀNH: {valid_count}/10 file audio đã được lưu và đồng bộ sang Netlify!")

if __name__ == "__main__":
    asyncio.run(main())
