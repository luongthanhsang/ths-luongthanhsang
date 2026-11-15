import asyncio
import aiohttp
import os
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

text = "Tình huống kinh doanh điều hoà: Một cửa hàng điện lạnh dự định kinh doanh máy điều hoà hai chiều và một chiều với số vốn đầu tư không vượt quá một phẩy hai tỉ đồng. Giá mua vào lần lượt là hai mươi triệu và mười triệu đồng mỗi máy, lợi nhuận dự kiến là ba phẩy năm triệu và hai triệu đồng mỗi máy. Nhu cầu thị trường không quá một trăm máy cả hai loại. Chủ cửa hàng cần đầu tư nhập bao nhiêu máy mỗi loại để thu được lợi nhuận cao nhất? Toán học sẽ cho chúng ta đáp án chính xác tới từng đồng."
outfile = "assets/audio/b10_4_hook.mp3"

async def test():
    conn_id = connect_id()
    url = f"{WSS_URL}&ConnectionId={conn_id}&Sec-MS-GEC={DRM.generate_sec_ms_gec()}&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
    headers = DRM.headers_with_muid(WSS_HEADERS)
    print("Connecting...")
    async with aiohttp.ClientSession() as session:
        async with session.ws_connect(url, compress=15, headers=headers, ssl=None, timeout=aiohttp.ClientTimeout(total=20)) as ws:
            print("Connected! Sending speech.config...")
            ts = date_to_string()
            cmd = f"X-Timestamp:{ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n" + '{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"true"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}\r\n'
            await ws.send_str(cmd)
            cfg = TTSConfig("vi-VN-NamMinhNeural", "+0%", "+0%", "+0Hz", "WordBoundary")
            cid = connect_id()
            ssml_body = mkssml(cfg, text)
            ssml_req = ssml_headers_plus_data(cid, date_to_string(), ssml_body)
            print("Sending SSML...")
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
                        print("turn.end received!")
                        break
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.CLOSED):
                    print("ws closed")
                    break
            
            if len(audio_bytes) > 0:
                with open(outfile, "wb") as f:
                    f.write(audio_bytes)
                print(f"SUCCESS: {len(audio_bytes)} bytes written to {outfile}")
            else:
                print("FAILED: 0 bytes")

asyncio.run(test())
