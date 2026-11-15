import base64, json

def make_cache_file(mp3_list, output_js, var_name, title):
    cache = {}
    for p in mp3_list:
        with open(p, "rb") as f:
            b64 = base64.b64encode(f.read()).decode("utf-8")
        fname = p.split("/")[-1]
        cache[fname] = f"data:audio/mp3;base64,{b64}"
        cache[p] = f"data:audio/mp3;base64,{b64}"
    
    js_content = f"""// Cache Base64 Audio cho {title}
// Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)
window.{var_name} = {json.dumps(cache, ensure_ascii=False)};
"""
    with open(output_js, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Created {output_js} successfully!")

b5_mp3s = [
    "assets/audio/b10_5_welcome.mp3",
    "assets/audio/b10_5_goals.mp3",
    "assets/audio/b10_5_hook.mp3",
    "assets/audio/b10_5_sec1.mp3",
    "assets/audio/b10_5_sec2.mp3",
    "assets/audio/b10_5_sec3.mp3",
    "assets/audio/b10_5_wrapup.mp3"
]

b6_mp3s = [
    "assets/audio/b10_6_welcome.mp3",
    "assets/audio/b10_6_goals.mp3",
    "assets/audio/b10_6_hook.mp3",
    "assets/audio/b10_6_sec1.mp3",
    "assets/audio/b10_6_sec2.mp3",
    "assets/audio/b10_6_sec3.mp3",
    "assets/audio/b10_6_sec4.mp3",
    "assets/audio/b10_6_wrapup.mp3"
]

make_cache_file(b5_mp3s, "js/b10-5-audio-cache.js", "B10_5_AUDIO_CACHE", "Bài 5 Lớp 10 (Giá trị lượng giác của một góc từ 0° đến 180°)")
make_cache_file(b6_mp3s, "js/b10-6-audio-cache.js", "B10_6_AUDIO_CACHE", "Bài 6 Lớp 10 (Hệ thức lượng trong tam giác)")
