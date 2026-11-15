import asyncio, aiohttp, os, time, base64, json, re
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

VOICE = "vi-VN-NamMinhNeural"

tasks = [
    ("assets/audio/b10_6_sec2.mp3",
     "Mục hai, định lí sin. Trong mọi tam giác ABC, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng nhau và bằng hai lần bán kính đường tròn ngoại tiếp, tức là: a chia sin A bằng b chia sin B bằng c chia sin C và bằng 2R. Nhờ định lí sin, hễ các em biết một cặp cạnh đối và góc đối, ta có thể tính ngay bán kính đường tròn ngoại tiếp R, hoặc tính các cạnh và các góc còn lại cực kì thanh thoát!"),

    ("assets/audio/b10_6_sec4.mp3",
     "Mục bốn, các công thức tính diện tích tam giác. Trong hình học, chúng ta có năm công thức tính diện tích tam giác vô cùng lợi hại. Thứ nhất, diện tích bằng một nửa cạnh đáy nhân chiều cao tương ứng. Thứ hai, diện tích bằng một nửa tích hai cạnh nhân sin của góc xen giữa. Thứ ba, diện tích bằng tích ba cạnh a b c chia cho 4R. Thứ tư, diện tích bằng nửa chu vi p nhân bán kính đường tròn nội tiếp r. Và thứ năm, khi biết độ dài cả ba cạnh, công thức Hê-rông nổi tiếng cho phép ta tính diện tích bằng căn bậc hai của p nhân p trừ a, nhân p trừ b, nhân p trừ c. Nắm vững năm công thức này, các em có thể giải quyết mọi bài toán diện tích từ đơn giản đến nâng cao!")
]

async def synth_single(text, outfile):
    conn_id = connect_id()
    sec_gec = DRM.generate_sec_ms_gec()
    url = f"{WSS_URL}&ConnectionId={conn_id}&Sec-MS-GEC={sec_gec}&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
    headers = DRM.headers_with_muid(WSS_HEADERS)
    async with aiohttp.ClientSession() as session:
        async with session.ws_connect(url, compress=15, headers=headers) as ws:
            ts = date_to_string()
            cmd = (
                f"X-Timestamp:{ts}\r\n"
                "Content-Type:application/json; charset=utf-8\r\n"
                "Path:speech.config\r\n\r\n"
                '{"context":{"synthesis":{"audio":{"metadataoptions":{'
                '"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"true"'
                '},'
                '"outputFormat":"audio-24khz-48kbitrate-mono-mp3"'
                "}}}}\r\n"
            )
            await ws.send_str(cmd)
            cfg = TTSConfig(VOICE, "+0%", "+0%", "+0Hz", "WordBoundary")
            ssml_body = mkssml(cfg, text)
            ssml_req = ssml_headers_plus_data(connect_id(), date_to_string(), ssml_body)
            await ws.send_str(ssml_req)
            
            audio_bytes = bytearray()
            while True:
                msg = await ws.receive()
                if msg.type == aiohttp.WSMsgType.BINARY:
                    if len(msg.data) >= 2:
                        hlen = int.from_bytes(msg.data[:2], "big")
                        h_dict, data = get_headers_and_data(msg.data, hlen)
                        if h_dict.get(b"Path") == b"audio":
                            audio_bytes.extend(data)
                elif msg.type == aiohttp.WSMsgType.TEXT:
                    if "turn.end" in msg.data:
                        break
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.ERROR, aiohttp.WSMsgType.CLOSED):
                    break
            
            if len(audio_bytes) > 20000:
                with open(outfile, "wb") as f:
                    f.write(audio_bytes)
                print(f"[SUCCESS] Saved {outfile}: {len(audio_bytes)} bytes", flush=True)
                return True
            else:
                print(f"[RETRY] {outfile}: received {len(audio_bytes)} bytes", flush=True)
                return False

async def main():
    for outfile, text in tasks:
        print(f"\n=== Processing {outfile} ===", flush=True)
        success = False
        for attempt in range(1, 20):
            print(f"Attempt {attempt}/20 for {outfile}...", flush=True)
            try:
                ok = await synth_single(text, outfile)
                if ok:
                    success = True
                    break
            except Exception as e:
                print(f"Exception on attempt {attempt}: {e}", flush=True)
            
            wait_time = 4 + attempt * 2
            print(f"Waiting {wait_time}s before next attempt...", flush=True)
            await asyncio.sleep(wait_time)
            
        if not success:
            print(f"FATAL: Could not generate {outfile} after 20 attempts!", flush=True)
        else:
            print(f"Sleeping 5s after successful file generation...", flush=True)
            await asyncio.sleep(5)

    print("\n=== Updating Base64 Caches and Durations ===", flush=True)
    all_b5 = [
        "assets/audio/b10_5_welcome.mp3",
        "assets/audio/b10_5_goals.mp3",
        "assets/audio/b10_5_hook.mp3",
        "assets/audio/b10_5_sec1.mp3",
        "assets/audio/b10_5_sec2.mp3",
        "assets/audio/b10_5_sec3.mp3",
        "assets/audio/b10_5_wrapup.mp3"
    ]
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

    # Update cache b10-5
    c5 = {}
    for p in all_b5:
        if os.path.exists(p):
            b64 = base64.b64encode(open(p, 'rb').read()).decode('utf-8')
            fname = p.split('/')[-1]
            c5[fname] = f"data:audio/mp3;base64,{b64}"
            c5[p] = f"data:audio/mp3;base64,{b64}"
    with open('js/b10-5-audio-cache.js', 'w', encoding='utf-8') as f:
        f.write(f"// Cache Base64 Audio cho Bài 5 Lớp 10 (Giá trị lượng giác của một góc từ 0° đến 180°)\n// Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\nwindow.B10_5_AUDIO_CACHE = {json.dumps(c5, ensure_ascii=False)};\n")
    print(f"Updated js/b10-5-audio-cache.js with {len(c5)//2} unique audios", flush=True)

    # Update cache b10-6
    c6 = {}
    for p in all_b6:
        if os.path.exists(p):
            b64 = base64.b64encode(open(p, 'rb').read()).decode('utf-8')
            fname = p.split('/')[-1]
            c6[fname] = f"data:audio/mp3;base64,{b64}"
            c6[p] = f"data:audio/mp3;base64,{b64}"
    with open('js/b10-6-audio-cache.js', 'w', encoding='utf-8') as f:
        f.write(f"// Cache Base64 Audio cho Bài 6 Lớp 10 (Hệ thức lượng trong tam giác)\n// Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\nwindow.B10_6_AUDIO_CACHE = {json.dumps(c6, ensure_ascii=False)};\n")
    print(f"Updated js/b10-6-audio-cache.js with {len(c6)//2} unique audios", flush=True)

    # Update durations in js/script.js
    with open('js/script.js', 'r', encoding='utf-8') as f:
        js_text = f.read()
    for p in all_b5 + all_b6:
        if os.path.exists(p):
            dur = round(os.path.getsize(p) / 6000, 2)
            pat = re.compile(rf'"{re.escape(p)}":\s*[\d\.]+')
            if pat.search(js_text):
                js_text = pat.sub(f'"{p}": {dur}', js_text)
            else:
                # Add if missing in KNOWN_AUDIO_DURATIONS
                dur_marker = "const KNOWN_AUDIO_DURATIONS = {"
                if dur_marker in js_text:
                    js_text = js_text.replace(dur_marker, f'{dur_marker}\n    "{p}": {dur},')
    with open('js/script.js', 'w', encoding='utf-8') as f:
        f.write(js_text)
    print("Updated KNOWN_AUDIO_DURATIONS in js/script.js", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
