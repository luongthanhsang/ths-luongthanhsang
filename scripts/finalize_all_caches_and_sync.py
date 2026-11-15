import os, base64, json, re, shutil

# 1. Update b10-5 cache
all_b5 = [
    "assets/audio/b10_5_welcome.mp3",
    "assets/audio/b10_5_goals.mp3",
    "assets/audio/b10_5_hook.mp3",
    "assets/audio/b10_5_sec1.mp3",
    "assets/audio/b10_5_sec2.mp3",
    "assets/audio/b10_5_sec3.mp3",
    "assets/audio/b10_5_wrapup.mp3"
]

c5 = {}
for p in all_b5:
    if os.path.exists(p):
        b64 = base64.b64encode(open(p, 'rb').read()).decode('utf-8')
        fname = p.split('/')[-1]
        c5[fname] = f"data:audio/mp3;base64,{b64}"
        c5[p] = f"data:audio/mp3;base64,{b64}"
with open('js/b10-5-audio-cache.js', 'w', encoding='utf-8') as f:
    f.write(f"// Cache Base64 Audio cho Bài 5 Lớp 10 (Giá trị lượng giác của một góc từ 0° đến 180°)\n// Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\nwindow.B10_5_AUDIO_CACHE = {json.dumps(c5, ensure_ascii=False)};\n")
print(f"[OK] Updated js/b10-5-audio-cache.js with {len(c5)//2} audios")

# 2. Update b10-6 cache
all_b6 = [
    "assets/audio/b10_6_welcome.mp3",
    "assets/audio/b10_6_goals.mp3",
    "assets/audio/b10_6_hook.mp3",
    "assets/audio/b10_6_sec1.mp3",
    "assets/audio/b10_6_sec2.mp3",
    "assets/audio/b10_6_sec3.mp3",
    "assets/audio/b10_6_sec4.mp3",
    "assets/audio/b10_6_wrapup.mp3"
]

c6 = {}
for p in all_b6:
    if os.path.exists(p):
        b64 = base64.b64encode(open(p, 'rb').read()).decode('utf-8')
        fname = p.split('/')[-1]
        c6[fname] = f"data:audio/mp3;base64,{b64}"
        c6[p] = f"data:audio/mp3;base64,{b64}"
with open('js/b10-6-audio-cache.js', 'w', encoding='utf-8') as f:
    f.write(f"// Cache Base64 Audio cho Bài 6 Lớp 10 (Hệ thức lượng trong tam giác)\n// Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\nwindow.B10_6_AUDIO_CACHE = {json.dumps(c6, ensure_ascii=False)};\n")
print(f"[OK] Updated js/b10-6-audio-cache.js with {len(c6)//2} audios")

# 3. Update KNOWN_AUDIO_DURATIONS in js/script.js
with open('js/script.js', 'r', encoding='utf-8') as f:
    js_text = f.read()

for p in all_b5 + all_b6:
    if os.path.exists(p):
        dur = round(os.path.getsize(p) / 6000, 2)
        pat = re.compile(rf'"{re.escape(p)}":\s*[\d\.]+')
        if pat.search(js_text):
            js_text = pat.sub(f'"{p}": {dur}', js_text)
        else:
            dur_marker = "const KNOWN_AUDIO_DURATIONS = {"
            if dur_marker in js_text:
                js_text = js_text.replace(dur_marker, f'{dur_marker}\n    "{p}": {dur},')

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(js_text)
print("[OK] Updated KNOWN_AUDIO_DURATIONS in js/script.js")

# 4. Sync to BAN_CAP_NHAT_NETLIFY
target_dir = "BAN_CAP_NHAT_NETLIFY"
if os.path.exists(target_dir):
    # sync js files
    for js_f in os.listdir("js"):
        src = os.path.join("js", js_f)
        dst = os.path.join(target_dir, "js", js_f)
        if os.path.isfile(src):
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            shutil.copy2(src, dst)
    # sync assets/audio
    for audio_f in os.listdir("assets/audio"):
        src = os.path.join("assets/audio", audio_f)
        dst = os.path.join(target_dir, "assets/audio", audio_f)
        if os.path.isfile(src):
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            shutil.copy2(src, dst)
    # sync html files
    for html_f in ["bai-hoc-so.html", "index.html", "trac-nghiem.html"]:
        if os.path.exists(html_f):
            shutil.copy2(html_f, os.path.join(target_dir, html_f))
    print("[OK] Synced all files to BAN_CAP_NHAT_NETLIFY!")
