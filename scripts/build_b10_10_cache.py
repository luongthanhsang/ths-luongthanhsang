import base64
import os
import subprocess
import json

AUDIO_DIR = "assets/audio"
OUTPUT_CACHE_JS = "js/b10-10-audio-cache.js"

AUDIO_FILES = [
    "b10_10_welcome.mp3",
    "b10_10_goals.mp3",
    "b10_10_hook.mp3",
    "b10_10_sec1.mp3",
    "b10_10_sec2.mp3",
    "b10_10_sec3.mp3",
    "b10_10_sec4.mp3",
    "b10_10_wrapup.mp3"
]

def get_duration(file_path):
    cmd = [
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1", file_path
    ]
    try:
        res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        return float(res.stdout.strip())
    except Exception:
        # Fallback estimation for 48kbps MP3
        size = os.path.getsize(file_path)
        return round(size / (48000 / 8), 1)

cache_dict = {}
durations = {}

for fname in AUDIO_FILES:
    fpath = os.path.join(AUDIO_DIR, fname)
    if not os.path.exists(fpath):
        print(f"Missing {fpath}")
        continue
    dur = get_duration(fpath)
    durations[fname] = round(dur, 1)
    with open(fpath, "rb") as f:
        b64 = base64.b64encode(f.read()).decode("utf-8")
        cache_dict[f"assets/audio/{fname}"] = f"data:audio/mp3;base64,{b64}"
    print(f"{fname}: {durations[fname]}s")

with open(OUTPUT_CACHE_JS, "w", encoding="utf-8") as f:
    f.write("// Cache Base64 Audio cho Bài 10: Vectơ trong mặt phẳng toạ độ (Lớp 10)\n")
    f.write("window.B10_10_AUDIO_CACHE = ")
    json.dump(cache_dict, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Written cache to {OUTPUT_CACHE_JS} ({os.path.getsize(OUTPUT_CACHE_JS)} bytes)")
print("DURATIONS TABLE:")
for k, v in durations.items():
    print(f'"{k}": {v},')
