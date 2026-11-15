import asyncio, aiohttp, os, time, base64, json, re
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

VOICE = "vi-VN-NamMinhNeural"

async def generate_speech(text, outfile, max_retries=5):
    for attempt in range(1, max_retries + 1):
        try:
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
                        os.makedirs(os.path.dirname(outfile), exist_ok=True)
                        with open(outfile, "wb") as f:
                            f.write(audio_bytes)
                        print(f"[{attempt}] SUCCESS: {outfile} ({len(audio_bytes)} bytes)")
                        return True
                    else:
                        print(f"[{attempt}] Empty bytes for {outfile}, retrying...")
        except Exception as e:
            print(f"[{attempt}] Error for {outfile}: {e}, retrying in 2s...")
            await asyncio.sleep(2)
    return False

def extract_audio_tasks(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    tasks = []
    m_tw = re.search(r'teacherWelcome:\s*\{[\s\S]*?audioScript:\s*"([^"]+)"[\s\S]*?audioUrl:\s*"([^"]+)"', text)
    if m_tw: tasks.append((m_tw.group(2), m_tw.group(1)))
    m_g = re.search(r'goalsAudioScript:\s*"([^"]+)"[\s\S]*?goalsAudioUrl:\s*"([^"]+)"', text)
    if m_g: tasks.append((m_g.group(2), m_g.group(1)))
    m_h = re.search(r'hook:\s*\{[\s\S]*?audioScript:\s*"([^"]+)"[\s\S]*?audioUrl:\s*"([^"]+)"', text)
    if m_h: tasks.append((m_h.group(2), m_h.group(1)))
    for m_sec in re.finditer(r'num:\s*"([^"]+)"[\s\S]*?audioScript:\s*"([^"]+)"[\s\S]*?audioUrl:\s*"([^"]+)"', text):
        tasks.append((m_sec.group(3), m_sec.group(2)))
    m_w = re.search(r'realworldWrapup:\s*\{[\s\S]*?audioScript:\s*"([^"]+)"[\s\S]*?audioUrl:\s*"([^"]+)"', text)
    if m_w: tasks.append((m_w.group(2), m_w.group(1)))
    return tasks

def estimate_mp3_duration(num_bytes, bitrate_kbps=48):
    # 48kbps = 6000 bytes/sec
    return round(num_bytes / (bitrate_kbps * 1000 / 8), 2)

async def main():
    tasks_b5 = extract_audio_tasks('js/lesson-10-5-data.js')
    tasks_b6 = extract_audio_tasks('js/lesson-10-6-data.js')
    all_tasks = tasks_b5 + tasks_b6
    
    print(f"Starting speech synthesis for {len(all_tasks)} audio files...")
    durations = {}
    
    for url, script in all_tasks:
        print(f"Synthesizing {url}...")
        ok = await generate_speech(script, url)
        if not ok:
            print(f"FAILED TO SYNTHESIZE {url}!")
        else:
            size = os.path.getsize(url)
            dur = estimate_mp3_duration(size)
            durations[url] = dur
            print(f"  -> {url}: {size} bytes, approx {dur}s")
        await asyncio.sleep(0.5)

    print("\n=== UPDATING BASE64 AUDIO CACHES ===")
    def write_cache_file(task_list, output_js, var_name, title):
        cache = {}
        for url, _ in task_list:
            if os.path.exists(url):
                with open(url, "rb") as f:
                    b64 = base64.b64encode(f.read()).decode("utf-8")
                fname = url.split("/")[-1]
                cache[fname] = f"data:audio/mp3;base64,{b64}"
                cache[url] = f"data:audio/mp3;base64,{b64}"
        content = f"// Cache Base64 Audio cho {title}\n// Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\nwindow.{var_name} = {json.dumps(cache, ensure_ascii=False)};\n"
        with open(output_js, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {output_js} ({len(cache)} entries)")

    write_cache_file(tasks_b5, "js/b10-5-audio-cache.js", "B10_5_AUDIO_CACHE", "Bài 5 Lớp 10 (Giá trị lượng giác của một góc từ 0° đến 180°)")
    write_cache_file(tasks_b6, "js/b10-6-audio-cache.js", "B10_6_AUDIO_CACHE", "Bài 6 Lớp 10 (Hệ thức lượng trong tam giác)")

    print("\n=== UPDATING KNOWN_AUDIO_DURATIONS IN js/script.js ===")
    with open('js/script.js', 'r', encoding='utf-8') as f:
        js_text = f.read()

    for url, dur in durations.items():
        pattern = re.compile(rf'"{re.escape(url)}":\s*[\d\.]+')
        if pattern.search(js_text):
            js_text = pattern.sub(f'"{url}": {dur}', js_text)
        else:
            print(f"Warning: {url} not found in KNOWN_AUDIO_DURATIONS")

    with open('js/script.js', 'w', encoding='utf-8') as f:
        f.write(js_text)
    print("Updated KNOWN_AUDIO_DURATIONS in js/script.js")

if __name__ == "__main__":
    asyncio.run(main())
