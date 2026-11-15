import asyncio, aiohttp
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

async def check(txt):
    conn_id = connect_id()
    url = f"{WSS_URL}&ConnectionId={conn_id}&Sec-MS-GEC={DRM.generate_sec_ms_gec()}&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
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
            cfg = TTSConfig("vi-VN-NamMinhNeural", "+0%", "+0%", "+0Hz", "WordBoundary")
            ssml_body = mkssml(cfg, txt)
            await ws.send_str(ssml_headers_plus_data(connect_id(), date_to_string(), ssml_body))
            b_count = 0
            while True:
                msg = await ws.receive()
                if msg.type == aiohttp.WSMsgType.BINARY:
                    b_count += len(msg.data)
                elif msg.type == aiohttp.WSMsgType.TEXT and "turn.end" in msg.data:
                    break
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.ERROR, aiohttp.WSMsgType.CLOSED):
                    break
            print(f"{txt[:45]}: {b_count} bytes", flush=True)

async def main():
    await check("Mục hai, định lý sin trong tam giác.")
    await check("Trong mọi tam giác, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng nhau.")
    await check("tức là: a chia sin A bằng b chia sin B bằng c chia sin C và bằng 2R.")
    await check("Mục bốn, các công thức tính diện tích tam giác.")

asyncio.run(main())
