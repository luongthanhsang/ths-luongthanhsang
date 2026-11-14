import os
import json
import base64

audio_files = [
    "assets/audio/b10_8_welcome.mp3",
    "assets/audio/b10_8_goals.mp3",
    "assets/audio/b10_8_hook.mp3",
    "assets/audio/b10_8_sec1.mp3",
    "assets/audio/b10_8_sec2.mp3",
    "assets/audio/b10_8_sec3.mp3",
    "assets/audio/b10_8_sec4.mp3",
    "assets/audio/b10_8_wrapup.mp3"
]

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

durations = {}
cache_dict = {}

for fpath in audio_files:
    fname = os.path.basename(fpath)
    dur = get_mp3_duration(fpath)
    durations[fname] = dur
    with open(fpath, 'rb') as f:
        b64 = base64.b64encode(f.read()).decode('utf-8')
    cache_dict[fname] = f"data:audio/mp3;base64,{b64}"
    print(f"{fname}: {dur}s ({os.path.getsize(fpath)} bytes)")

print("\nDurations:")
print(json.dumps(durations, indent=2))

# Write js/b10-8-audio-cache.js
cache_js_path = "js/b10-8-audio-cache.js"
with open(cache_js_path, "w", encoding="utf-8") as f:
    f.write("// Cache Base64 Audio cho Bài 8 Lớp 10 (Chương IV: Tổng và hiệu của hai vectơ)\n")
    f.write("// Tác giả: ThS. Lương Thanh Sáng\n")
    f.write("window.B10_8_AUDIO_CACHE = ")
    json.dump(cache_dict, f, ensure_ascii=False)
    f.write(";\n")

print(f"\nWrote {cache_js_path} ({os.path.getsize(cache_js_path)} bytes)")
