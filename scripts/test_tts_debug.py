import asyncio, aiohttp
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

VOICE = "vi-VN-NamMinhNeural"

async def test_text(txt, outfile):
    print(f"Testing text: {txt[:40]}...", flush=True)
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
            ssml_body = mkssml(cfg, txt)
            await ws.send_str(ssml_headers_plus_data(connect_id(), date_to_string(), ssml_body))
            
            audio_bytes = bytearray()
            while True:
                try:
                    msg = await asyncio.wait_for(ws.receive(), timeout=15.0)
                except asyncio.TimeoutError:
                    print("  Timeout waiting for ws", flush=True)
                    break
                if msg.type == aiohttp.WSMsgType.BINARY:
                    if len(msg.data) >= 2:
                        hlen = int.from_bytes(msg.data[:2], "big")
                        headers, data = get_headers_and_data(msg.data, hlen)
                        if headers.get(b"Path") == b"audio":
                            audio_bytes.extend(data)
                elif msg.type == aiohttp.WSMsgType.TEXT and "turn.end" in msg.data:
                    break
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.ERROR, aiohttp.WSMsgType.CLOSED):
                    break
            print(f"Result: {len(audio_bytes)} bytes", flush=True)
            if len(audio_bytes) > 20000:
                with open(outfile, "wb") as f:
                    f.write(audio_bytes)
                print(f"[OK] Saved to {outfile}!", flush=True)
                return True
            return False

async def main():
    t2 = "Mục hai, định lí sin. Trong tam giác ABC bất kì, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng nhau và bằng hai lần bán kính đường tròn ngoại tiếp. Ta có: cạnh a chia cho sin góc A, bằng cạnh b chia cho sin góc B, bằng cạnh c chia cho sin góc C, và bằng hai lần bán kính R lớn. Nhờ có định lí sin, khi biết một cạnh và các góc tương ứng, các em có thể tính được ngay bán kính đường tròn ngoại tiếp cũng như các yếu tố còn lại của tam giác!"
    ok2 = await test_text(t2, "assets/audio/b10_6_sec2.mp3")
    print(f"Section 2 result: {ok2}", flush=True)

    await asyncio.sleep(3)

    t4 = "Mục bốn, các công thức tính diện tích tam giác. Trong hình học, chúng ta có năm công thức tính diện tích tam giác rất thông dụng. Thứ nhất, diện tích bằng một nửa cạnh đáy nhân chiều cao. Thứ hai, diện tích bằng một nửa tích hai cạnh nhân sin góc xen giữa. Thứ ba, diện tích bằng tích ba cạnh a, b, c chia cho bốn lần bán kính R lớn. Thứ tư, diện tích bằng nửa chu vi p nhân bán kính đường tròn nội tiếp r nhỏ. Và thứ năm, công thức Hê rông cho phép tính diện tích khi biết độ dài cả ba cạnh tam giác. Nắm chắc năm công thức này, các em sẽ tự tin xử lý mọi bài toán tính diện tích!"
    ok4 = await test_text(t4, "assets/audio/b10_6_sec4.mp3")
    print(f"Section 4 result: {ok4}", flush=True)

asyncio.run(main())
