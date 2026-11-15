import asyncio, aiohttp
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

VOICE = "vi-VN-NamMinhNeural"

async def test_full_sec2():
    text = "Mục hai, định lí sin trong tam giác. Tỉ số giữa cạnh và sin góc đối luôn bằng hai lần bán kính đường tròn ngoại tiếp. Nhờ định lí sin, khi các em biết một cặp cạnh đối và góc đối, ta có thể tính ngay bán kính đường tròn ngoại tiếp R, hoặc tính các cạnh và các góc còn lại cực kì thanh thoát!"
    
    print(f"Synthesizing complete sec2 ({len(text)} chars)...", flush=True)
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
            await ws.send_str(ssml_headers_plus_data(connect_id(), date_to_string(), ssml_body))
            
            b_count = bytearray()
            while True:
                msg = await ws.receive()
                if msg.type == aiohttp.WSMsgType.BINARY:
                    if len(msg.data) >= 2:
                        hlen = int.from_bytes(msg.data[:2], "big")
                        h_dict, data = get_headers_and_data(msg.data, hlen)
                        if h_dict.get(b"Path") == b"audio":
                            b_count.extend(data)
                elif msg.type == aiohttp.WSMsgType.TEXT and "turn.end" in msg.data:
                    break
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.ERROR, aiohttp.WSMsgType.CLOSED):
                    break
            print(f"Full Sec 2 result: {len(b_count)} bytes", flush=True)
            if len(b_count) > 20000:
                with open("assets/audio/b10_6_sec2.mp3", "wb") as f:
                    f.write(b_count)
                print("SUCCESSFULLY SAVED assets/audio/b10_6_sec2.mp3!", flush=True)
                return True
            return False

asyncio.run(test_full_sec2())
