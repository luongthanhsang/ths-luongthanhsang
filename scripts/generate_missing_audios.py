import asyncio, aiohttp, os, time, base64, json, re
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

VOICE = "vi-VN-NamMinhNeural"

missing_tasks = [
    ("assets/audio/b10_5_welcome.mp3", 
     "Thầy Sáng thân ái chào toàn thể các em học sinh Lớp 10! Thầy rất vui khi được đồng hành cùng các em trong Chương ba: Hệ thức lượng trong tam giác. Hôm nay, Thầy trò mình cùng khám phá Bài 5: Giá trị lượng giác của một góc từ 0 độ đến 180 độ. Ở lớp 9, các em đã rất quen thuộc với tỉ số lượng giác của góc nhọn trong tam giác vuông. Nhưng trong không gian thực tế, các góc chuyển động của bánh xe, cánh tay robot hay quỹ đạo vệ tinh có thể là góc tù, thậm chí góc bẹt. Nửa đường tròn đơn vị hôm nay sẽ mở ra cho các em một chân trời toán học hoàn toàn mới. Thầy chúc các em học thật hứng khởi và tiếp thu trọn vẹn kiến thức nhé!"),

    ("assets/audio/b10_6_sec2.mp3",
     "Mục hai, định lí sin. Trong mọi tam giác ABC, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng nhau và bằng hai lần bán kính đường tròn ngoại tiếp, tức là: a chia sin A bằng b chia sin B bằng c chia sin C và bằng 2R. Nhờ định lí sin, hễ các em biết một cặp cạnh đối và góc đối, ta có thể tính ngay bán kính đường tròn ngoại tiếp R, hoặc tính các cạnh và các góc còn lại cực kì thanh thoát!"),

    ("assets/audio/b10_6_sec4.mp3",
     "Mục bốn, các công thức tính diện tích tam giác. Trong hình học, chúng ta có năm công thức tính diện tích tam giác vô cùng lợi hại. Thứ nhất, diện tích bằng một nửa cạnh đáy nhân chiều cao tương ứng. Thứ hai, diện tích bằng một nửa tích hai cạnh nhân sin của góc xen giữa. Thứ ba, diện tích bằng tích ba cạnh a b c chia cho 4R. Thứ tư, diện tích bằng nửa chu vi p nhân bán kính đường tròn nội tiếp r. Và thứ năm, khi biết độ dài cả ba cạnh, công thức Hê-rông nổi tiếng cho phép ta tính diện tích bằng căn bậc hai của p nhân p trừ a, nhân p trừ b, nhân p trừ c. Nắm vững năm công thức này, các em có thể giải quyết mọi bài toán diện tích từ đơn giản đến nâng cao!")
]

async def generate_speech_single(text, outfile):
    conn_id = connect_id()
    sec_gec = DRM.generate_sec_ms_gec()
    url = (
        f"{WSS_URL}&ConnectionId={conn_id}"
        f"&Sec-MS-GEC={sec_gec}"
        f"&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
    )
    headers = DRM.headers_with_muid(WSS_HEADERS)
    async with aiohttp.ClientSession() as session:
        async with session.ws_connect(url, compress=15, headers=headers, ssl=None, timeout=45) as ws:
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
            cid = connect_id()
            ssml_body = mkssml(cfg, text)
            ssml_req = ssml_headers_plus_data(cid, date_to_string(), ssml_body)
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
            
            if len(audio_bytes) > 0:
                with open(outfile, "wb") as f:
                    f.write(audio_bytes)
                print(f"[OK] {outfile}: {len(audio_bytes)} bytes", flush=True)
                return True
            else:
                return False

async def main():
    for outfile, text in missing_tasks:
        print(f"Generating missing {outfile}...")
        for attempt in range(1, 15):
            try:
                ok = await generate_speech_single(text, outfile)
                if ok:
                    break
                else:
                    print(f"  Attempt {attempt} returned empty, retrying in 2s...")
                    await asyncio.sleep(2)
            except Exception as e:
                print(f"  Attempt {attempt} error: {e}, retrying in 2s...")
                await asyncio.sleep(2)
        await asyncio.sleep(1)

    print("\nUpdating caches and durations...")
    # Update cache b10-5
    with open('js/b10-5-audio-cache.js', 'r', encoding='utf-8') as f:
        c5_txt = f.read()
    var_m5 = re.search(r'window\.B10_5_AUDIO_CACHE\s*=\s*(\{[\s\S]*?\});', c5_txt)
    if var_m5:
        c5 = json.loads(var_m5.group(1))
        for p, _ in missing_tasks:
            if 'b10_5' in p and os.path.exists(p):
                b64 = base64.b64encode(open(p, 'rb').read()).decode('utf-8')
                fname = p.split('/')[-1]
                c5[fname] = f"data:audio/mp3;base64,{b64}"
                c5[p] = f"data:audio/mp3;base64,{b64}"
        with open('js/b10-5-audio-cache.js', 'w', encoding='utf-8') as f:
            f.write(f"// Cache Base64 Audio cho Bài 5 Lớp 10 (Giá trị lượng giác của một góc từ 0° đến 180°)\n// Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\nwindow.B10_5_AUDIO_CACHE = {json.dumps(c5, ensure_ascii=False)};\n")
        print("Updated b10-5 cache!")

    # Update cache b10-6
    with open('js/b10-6-audio-cache.js', 'r', encoding='utf-8') as f:
        c6_txt = f.read()
    var_m6 = re.search(r'window\.B10_6_AUDIO_CACHE\s*=\s*(\{[\s\S]*?\});', c6_txt)
    if var_m6:
        c6 = json.loads(var_m6.group(1))
        for p, _ in missing_tasks:
            if 'b10_6' in p and os.path.exists(p):
                b64 = base64.b64encode(open(p, 'rb').read()).decode('utf-8')
                fname = p.split('/')[-1]
                c6[fname] = f"data:audio/mp3;base64,{b64}"
                c6[p] = f"data:audio/mp3;base64,{b64}"
        with open('js/b10-6-audio-cache.js', 'w', encoding='utf-8') as f:
            f.write(f"// Cache Base64 Audio cho Bài 6 Lớp 10 (Hệ thức lượng trong tam giác)\n// Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\nwindow.B10_6_AUDIO_CACHE = {json.dumps(c6, ensure_ascii=False)};\n")
        print("Updated b10-6 cache!")

    # Update durations in script.js
    with open('js/script.js', 'r', encoding='utf-8') as f:
        js_text = f.read()
    for p, _ in missing_tasks:
        if os.path.exists(p):
            dur = round(os.path.getsize(p) / 6000, 2)
            pat = re.compile(rf'"{re.escape(p)}":\s*[\d\.]+')
            if pat.search(js_text):
                js_text = pat.sub(f'"{p}": {dur}', js_text)
    with open('js/script.js', 'w', encoding='utf-8') as f:
        f.write(js_text)
    print("Updated durations in js/script.js!")

if __name__ == "__main__":
    asyncio.run(main())
