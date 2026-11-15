# -*- coding: utf-8 -*-
import asyncio
import aiohttp
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

text = "Tình huống kinh doanh điều hoà: Một cửa hàng điện lạnh dự định kinh doanh máy điều hoà hai chiều và một chiều với số vốn đầu tư không vượt quá 1,2 tỉ đồng. Giá mua vào lần lượt là 20 triệu và 10 triệu đồng mỗi máy, lợi nhuận dự kiến là 3,5 triệu và 2 triệu đồng mỗi máy. Nhu cầu thị trường không quá 100 máy cả hai loại. Chủ cửa hàng cần đầu tư nhập bao nhiêu máy mỗi loại để thu được lợi nhuận cao nhất? Toán học sẽ cho chúng ta đáp án chính xác tới từng đồng."

async def test():
    conn_id = connect_id()
    url = f"{WSS_URL}&ConnectionId={conn_id}&Sec-MS-GEC={DRM.generate_sec_ms_gec()}&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
    headers = DRM.headers_with_muid(WSS_HEADERS)
    timeout = aiohttp.ClientTimeout(total=20)
    async with aiohttp.ClientSession(timeout=timeout) as session:
        async with session.ws_connect(url, compress=15, headers=headers, ssl=None) as ws:
            ts = date_to_string()
            cmd = f"X-Timestamp:{ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n" + '{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}\r\n'
            await ws.send_str(cmd)
            cfg = TTSConfig("vi-VN-NamMinhNeural", "+0%", "+0%", "+0Hz", "WordBoundary")
            cid = connect_id()
            ssml_body = mkssml(cfg, text)
            print("SSML:", ssml_body)
            ssml_req = ssml_headers_plus_data(cid, date_to_string(), ssml_body)
            await ws.send_str(ssml_req)
            
            while True:
                msg = await ws.receive()
                print("MSG TYPE:", msg.type)
                if msg.type == aiohttp.WSMsgType.TEXT:
                    print("TEXT MSG FULL:\n", msg.data)
                    if "turn.end" in msg.data:
                        break
                elif msg.type == aiohttp.WSMsgType.BINARY:
                    print("BINARY LEN:", len(msg.data))
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.CLOSED):
                    print("CLOSED:", ws.close_code, msg.extra)
                    break

asyncio.run(test())
