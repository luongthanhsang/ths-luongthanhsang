import asyncio, aiohttp
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

VOICE = "vi-VN-NamMinhNeural"

async def synth_chunk(text):
    print(f"Synthesizing chunk: {text[:40]}...", flush=True)
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
            print(f"Chunk bytes: {len(b_count)}", flush=True)
            return bytes(b_count)

async def main():
    # Part 1
    p1 = await synth_chunk("Mục hai, định lí sin trong tam giác.")
    await asyncio.sleep(2)
    p2 = await synth_chunk("Tỉ số giữa cạnh và sin góc đối luôn bằng hai lần bán kính đường tròn ngoại tiếp.")
    await asyncio.sleep(2)
    p3 = await synth_chunk("Định lí sin khẳng định: a trên sin A bằng hai R.")
    await asyncio.sleep(2)
    p4 = await synth_chunk("Nhờ định lí sin, khi các em biết một cặp cạnh đối và góc đối, ta có thể tính ngay bán kính đường tròn ngoại tiếp R, hoặc tính các cạnh và các góc còn lại cực kì thanh thoát!")

    full_audio = p1 + p2 + p3 + p4
    print(f"\nTotal concatenated bytes: {len(full_audio)}", flush=True)
    if len(full_audio) > 50000:
        with open("assets/audio/b10_6_sec2.mp3", "wb") as f:
            f.write(full_audio)
        print("SUCCESSFULLY SAVED assets/audio/b10_6_sec2.mp3!", flush=True)

asyncio.run(main())
