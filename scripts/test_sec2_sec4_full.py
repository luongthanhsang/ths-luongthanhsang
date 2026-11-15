import asyncio, aiohttp
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

VOICE = "vi-VN-NamMinhNeural"

async def test_and_save(outfile, text):
    print(f"\n--- Synthesizing {outfile} ---", flush=True)
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
            
            print(f"{outfile} result: {len(audio_bytes)} bytes", flush=True)
            if len(audio_bytes) > 20000:
                with open(outfile, "wb") as f:
                    f.write(audio_bytes)
                print(f"[SUCCESS] Saved to {outfile}!", flush=True)
                return True
            return False

async def main():
    sec2_text = "Mục hai, định lí sin. Trong mọi tam giác ABC, tỉ số giữa mỗi cạnh và sin góc đối diện luôn bằng nhau và bằng hai lần bán kính đường tròn ngoại tiếp, tức là: a trên sin A bằng b trên sin B bằng c trên sin C và bằng hai R. Nhờ định lí sin, khi các em biết một cặp cạnh đối và góc đối, ta có thể tính ngay bán kính đường tròn ngoại tiếp R, hoặc tính các cạnh và các góc còn lại cực kì thanh thoát!"
    
    sec4_text = "Mục bốn, các công thức tính diện tích tam giác. Trong hình học, chúng ta có năm công thức tính diện tích tam giác vô cùng lợi hại. Thứ nhất, diện tích bằng một nửa cạnh đáy nhân chiều cao tương ứng. Thứ hai, diện tích bằng một nửa tích hai cạnh nhân sin góc xen giữa. Thứ ba, diện tích bằng tích ba cạnh a b c chia cho bốn R. Thứ tư, diện tích bằng nửa chu vi p nhân bán kính đường tròn nội tiếp r nhỏ. Và thứ năm, khi biết độ dài cả ba cạnh, công thức Hê rông nổi tiếng cho phép ta tính diện tích bằng căn bậc hai của p nhân p trừ a, nhân p trừ b, nhân p trừ c. Nắm vững năm công thức này, các em có thể giải quyết mọi bài toán diện tích từ đơn giản đến nâng cao!"

    ok2 = await test_and_save("assets/audio/b10_6_sec2.mp3", sec2_text)
    await asyncio.sleep(2)
    ok4 = await test_and_save("assets/audio/b10_6_sec4.mp3", sec4_text)
    print(f"\nFinal: sec2={ok2}, sec4={ok4}")

asyncio.run(main())
