import asyncio
import aiohttp
import os
import base64
import json
import shutil
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

text = (
    "Mục 4. Đồ thị và tính chất của hàm số y bằng cos x. Hàm số y bằng cos x có tập xác định là R và tập giá trị là đoạn từ trừ 1 đến 1. "
    "Vì là hàm số chẵn nên đồ thị nhận trục tung Oy làm trục đối xứng; và vì tuần hoàn với chu kì 2 pi nên đồ thị cũng là một đường cong hình sin lặp lại sau mỗi khoảng 2 pi. "
    "Đồ thị hàm số cos x có được bằng cách tịnh tiến đồ thị hàm số sin x sang trái một đoạn pi chia 2. "
    "Đồ thị cắt trục tung tại điểm (0; 1), cắt trục hoành tại các điểm pi chia 2 cộng k pi. "
    "Hàm số đồng biến trên mỗi khoảng từ trừ pi cộng k2pi đến k2pi; và nghịch biến trên mỗi khoảng từ k2pi đến pi cộng k2pi, với k thuộc Z."
)

outfile = "assets/audio/b11_3_sec4.mp3"

async def gen():
    for attempt in range(1, 8):
        print(f"Attempt {attempt}...")
        try:
            conn_id = connect_id()
            url = (
                f"{WSS_URL}&ConnectionId={conn_id}"
                f"&Sec-MS-GEC={DRM.generate_sec_ms_gec()}"
                f"&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
            )
            headers = DRM.headers_with_muid(WSS_HEADERS)
            timeout = aiohttp.ClientTimeout(total=20)
            async with aiohttp.ClientSession(timeout=timeout) as session:
                async with session.ws_connect(url, compress=15, headers=headers, ssl=None) as ws:
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
                    cfg = TTSConfig("vi-VN-NamMinhNeural", "+0%", "+0%", "+0Hz", "WordBoundary")
                    cid = connect_id()
                    ssml_body = mkssml(cfg, text)
                    ssml_req = ssml_headers_plus_data(cid, date_to_string(), ssml_body)
                    await ws.send_str(ssml_req)
                    
                    audio_bytes = bytearray()
                    while True:
                        try:
                            msg = await asyncio.wait_for(ws.receive(), timeout=10.0)
                        except asyncio.TimeoutError:
                            break
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
                    
                    if len(audio_bytes) > 5000:
                        with open(outfile, 'wb') as f:
                            f.write(audio_bytes)
                        print(f"SUCCESS: {len(audio_bytes)} bytes!")
                        return True
                    else:
                        print(f"Got {len(audio_bytes)} bytes, retrying...")
        except Exception as e:
            print(f"Error: {e}")
        await asyncio.sleep(2.0)
    return False

async def main():
    ok = await gen()
    if ok:
        # Re-pack js/b11-3-audio-cache.js
        audios = [
            "b11_3_welcome.mp3", "b11_3_goals.mp3", "b11_3_hook.mp3",
            "b11_3_sec1.mp3", "b11_3_sec2a.mp3", "b11_3_sec2b.mp3",
            "b11_3_sec3.mp3", "b11_3_sec4.mp3", "b11_3_sec5.mp3",
            "b11_3_sec6.mp3", "b11_3_wrapup.mp3"
        ]
        cache = {}
        for fname in audios:
            fpath = os.path.join("assets/audio", fname)
            rel_path = f"assets/audio/{fname}"
            if os.path.exists(fpath):
                b64 = base64.b64encode(open(fpath, "rb").read()).decode("utf-8")
                uri = f"data:audio/mp3;base64,{b64}"
                cache[fname] = uri
                cache[rel_path] = uri
                print(f"Packed {fname}: {os.path.getsize(fpath)} bytes")
        
        out_file = "js/b11-3-audio-cache.js"
        with open(out_file, "w", encoding="utf-8") as f:
            f.write("// Audio Cache Base64 - Bài 3 Lớp 11: Hàm số lượng giác\n")
            f.write("// ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại\n")
            f.write("window.B11_3_AUDIO_CACHE = ")
            json.dump(cache, f, ensure_ascii=False)
            f.write(";\n")
            f.write("if (typeof window !== 'undefined') window.AUDIO_CACHE = Object.assign(window.AUDIO_CACHE || {}, window.B11_3_AUDIO_CACHE);\n")

        shutil.copy2(out_file, "BAN_CAP_NHAT_NETLIFY/js/b11-3-audio-cache.js")
        shutil.copy2(outfile, f"BAN_CAP_NHAT_NETLIFY/{outfile}")
        print("Updated cache and synced to Netlify!")

asyncio.run(main())
