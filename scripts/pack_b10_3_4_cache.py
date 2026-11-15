# -*- coding: utf-8 -*-
import os
import json
import base64

def get_mp3_duration(path):
    with open(path, 'rb') as f:
        data = f.read()
    offset = 0
    if data[:3] == b'ID3':
        size = 0
        for b in data[6:10]:
            size = (size << 7) | (b & 0x7F)
        offset = 10 + size
    
    frame_count = 0
    pos = offset
    while pos < len(data) - 4:
        if data[pos] == 0xFF and (data[pos+1] & 0xE0) == 0xE0:
            frame_count += 1
            pos += 144
        else:
            pos += 1
    duration = round(frame_count * 0.024, 1)
    return duration

def build_cache(audio_files, var_name, js_path, desc):
    cache_dict = {}
    durations = {}
    for fpath in audio_files:
        if not os.path.exists(fpath):
            print(f"Warning: {fpath} does not exist yet!")
            return False, {}
        fname = os.path.basename(fpath)
        dur = get_mp3_duration(fpath)
        durations[fname] = dur
        with open(fpath, 'rb') as f:
            b64 = base64.b64encode(f.read()).decode('utf-8')
        cache_dict[fname] = f"data:audio/mp3;base64,{b64}"
        print(f"[{fname}] {dur}s ({os.path.getsize(fpath)} bytes)")

    with open(js_path, "w", encoding="utf-8") as f:
        f.write(f"// {desc}\n// Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\n")
        f.write(f"window.{var_name} = ")
        json.dump(cache_dict, f, ensure_ascii=False)
        f.write(";\n")
    print(f"Wrote {js_path} ({os.path.getsize(js_path)} bytes)\n")
    return True, durations

b3_files = [
    "assets/audio/b10_3_welcome.mp3",
    "assets/audio/b10_3_goals.mp3",
    "assets/audio/b10_3_hook.mp3",
    "assets/audio/b10_3_sec1.mp3",
    "assets/audio/b10_3_sec2.mp3",
    "assets/audio/b10_3_sec3.mp3",
    "assets/audio/b10_3_wrapup.mp3"
]

b4_files = [
    "assets/audio/b10_4_welcome.mp3",
    "assets/audio/b10_4_goals.mp3",
    "assets/audio/b10_4_hook.mp3",
    "assets/audio/b10_4_sec1.mp3",
    "assets/audio/b10_4_sec2.mp3",
    "assets/audio/b10_4_sec3.mp3",
    "assets/audio/b10_4_wrapup.mp3"
]

if __name__ == "__main__":
    ok3, dur3 = build_cache(b3_files, "B10_3_AUDIO_CACHE", "js/b10-3-audio-cache.js", "Cache Base64 Audio cho Bài 3 Lớp 10 (Bất phương trình bậc nhất hai ẩn)")
    ok4, dur4 = build_cache(b4_files, "B10_4_AUDIO_CACHE", "js/b10-4-audio-cache.js", "Cache Base64 Audio cho Bài 4 Lớp 10 (Hệ bất phương trình bậc nhất hai ẩn)")
    with open("scripts/b10_3_4_durations.json", "w", encoding="utf-8") as f:
        json.dump({"b3": dur3, "b4": dur4}, f, indent=2)
    print("Durations saved to scripts/b10_3_4_durations.json")
