# -*- coding: utf-8 -*-
import asyncio
import aiohttp
import os, base64, json
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

VOICE = "vi-VN-NamMinhNeural"

tasks = [
    ("assets/audio/b10_1_sec5.mp3",
     "Mục 5. Mệnh đề có chứa kí hiệu với mọi và tồn tại. Trong toán học, kí hiệu chữ A lộn ngược đọc là với mọi, nghĩa là tất cả các phần tử đều thỏa mãn tính chất. Kí hiệu chữ E quay ngược đọc là tồn tại, nghĩa là có ít nhất một phần tử thỏa mãn tính chất. Quy tắc phủ định rất quan trọng: Phủ định của mệnh đề với mọi x thuộc X thỏa mãn P x chính là tồn tại x thuộc X sao cho không thỏa mãn P x. Ngược lại, phủ định của mệnh đề tồn tại x thuộc X thỏa mãn P x là với mọi x thuộc X đều không thỏa mãn P x."),

    ("assets/audio/b10_1_wrapup.mp3",
     "Chốt kiến thức then chốt. Như vậy các em đã nắm vững toàn bộ các khái niệm cốt lõi về mệnh đề. Về lịch sử toán học, Lôgic mệnh đề lần đầu tiên được phát triển có hệ thống bởi nhà triết học Hy Lạp Aristotle cách đây hơn 2300 năm, và sau đó được nhà toán học George Boole đại số hóa vào năm 1854 trong công trình Các định luật tư duy, mở đường cho sự ra đời của máy tính điện tử hiện đại. Mẹo của Thầy Sáng: Để chứng minh một mệnh đề với mọi là sai, các em chỉ cần tìm ra một phản ví dụ duy nhất. Bây giờ, các em hãy cùng bước sang Phần 4 để làm bài tập trắc nghiệm củng cố nhé!")
]

async def synth_single(text, outfile):
    print(f"Connecting to synthesize {outfile}...", flush=True)
    conn_id = connect_id()
    url = f"{WSS_URL}&ConnectionId={conn_id}&Sec-MS-GEC={DRM.generate_sec_ms_gec()}&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
    headers = DRM.headers_with_muid(WSS_HEADERS)
    async with aiohttp.ClientSession() as session:
        async with session.ws_connect(url, compress=15, headers=headers, ssl=None, timeout=aiohttp.ClientTimeout(total=30)) as ws:
            ts = date_to_string()
            cmd = f"X-Timestamp:{ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n" + '{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"true"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}\r\n'
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
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.CLOSED):
                    break
            
            if len(audio_bytes) > 5000:
                os.makedirs(os.path.dirname(outfile), exist_ok=True)
                with open(outfile, "wb") as f:
                    f.write(audio_bytes)
                print(f"[SUCCESS] {outfile}: {len(audio_bytes)} bytes", flush=True)
                return True
            else:
                print(f"[RETRY] {outfile} got {len(audio_bytes)} bytes", flush=True)
                return False

async def main():
    for outfile, text in tasks:
        success = False
        for attempt in range(1, 10):
            try:
                success = await synth_single(text, outfile)
                if success:
                    break
            except Exception as e:
                print(f"Attempt {attempt} for {outfile}: {e}", flush=True)
            await asyncio.sleep(4)
        if not success:
            print(f"[ERROR] Could not synthesize {outfile}", flush=True)
        await asyncio.sleep(2)

    print("Updating js/b10-1-audio-cache.js...", flush=True)
    all_b10_1 = [
        "assets/audio/b10_1_welcome.mp3",
        "assets/audio/b10_1_goals.mp3",
        "assets/audio/b10_1_hook.mp3",
        "assets/audio/b10_1_sec1.mp3",
        "assets/audio/b10_1_sec2.mp3",
        "assets/audio/b10_1_sec3.mp3",
        "assets/audio/b10_1_sec4.mp3",
        "assets/audio/b10_1_sec5.mp3",
        "assets/audio/b10_1_wrapup.mp3"
    ]

    cache = {}
    for p in all_b10_1:
        if os.path.exists(p) and os.path.getsize(p) > 1000:
            b64 = base64.b64encode(open(p, 'rb').read()).decode('utf-8')
            fname = p.split('/')[-1]
            cache[fname] = f"data:audio/mp3;base64,{b64}"
            cache[p] = f"data:audio/mp3;base64,{b64}"
            print(f"Cached {p}: {os.path.getsize(p)} bytes", flush=True)

    with open('js/b10-1-audio-cache.js', 'w', encoding='utf-8') as f:
        f.write(f"// Cache Base64 Audio cho Bài 1 Lớp 10 (Mệnh đề)\n// Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\nwindow.B10_1_AUDIO_CACHE = {json.dumps(cache, ensure_ascii=False)};\n")
    print("[ALL DONE] js/b10-1-audio-cache.js updated with all tracks successfully!", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
