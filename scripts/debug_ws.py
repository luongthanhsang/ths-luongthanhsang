import asyncio, os
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM
import aiohttp

async def test():
    conn_id = connect_id()
    sec_gec = DRM.generate_sec_ms_gec()
    print("Sec-MS-GEC:", sec_gec)
    url = (
        f"{WSS_URL}&ConnectionId={conn_id}"
        f"&Sec-MS-GEC={sec_gec}"
        f"&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
    )
    headers = DRM.headers_with_muid(WSS_HEADERS)
    async with aiohttp.ClientSession() as session:
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
            ssml_body = mkssml(cfg, "Xin chào các em học sinh!")
            ssml_req = ssml_headers_plus_data(cid, date_to_string(), ssml_body)
            await ws.send_str(ssml_req)
            
            audio_bytes = bytearray()
            while True:
                msg = await ws.receive()
                print("Msg type:", msg.type)
                if msg.type == aiohttp.WSMsgType.BINARY:
                    hlen = int.from_bytes(msg.data[:2], "big")
                    headers, data = get_headers_and_data(msg.data, hlen)
                    print("Binary path:", headers.get(b"Path"), "data len:", len(data))
                    if headers.get(b"Path") == b"audio":
                        audio_bytes.extend(data)
                elif msg.type == aiohttp.WSMsgType.TEXT:
                    print("Text msg:", msg.data[:100])
                    if "turn.end" in msg.data:
                        break
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.ERROR, aiohttp.WSMsgType.CLOSED):
                    print("Closed / error:", msg.data)
                    break
            
            print("Total audio bytes:", len(audio_bytes))

if __name__ == "__main__":
    asyncio.run(test())
