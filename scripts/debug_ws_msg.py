# -*- coding: utf-8 -*-
import asyncio, aiohttp
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

async def check():
    conn_id = connect_id()
    url = f"{WSS_URL}&ConnectionId={conn_id}&Sec-MS-GEC={DRM.generate_sec_ms_gec()}&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
    headers = DRM.headers_with_muid(WSS_HEADERS)
    async with aiohttp.ClientSession() as s:
        async with s.ws_connect(url, headers=headers) as ws:
            ts = date_to_string()
            config_json = '{"context":{"synthesis":{"audio":{"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}'
            await ws.send_str(f"X-Timestamp:{ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n{config_json}\r\n")
            cfg = TTSConfig("vi-VN-NamMinhNeural", "+0%", "+0%", "+0Hz", "WordBoundary")
            ssml = mkssml(cfg, "Xin chào các em")
            await ws.send_str(ssml_headers_plus_data(connect_id(), date_to_string(), ssml))
            while True:
                msg = await ws.receive()
                if msg.type == aiohttp.WSMsgType.TEXT:
                    print("TEXT MSG:", msg.data[:150], flush=True)
                elif msg.type == aiohttp.WSMsgType.BINARY:
                    print("BINARY MSG LEN:", len(msg.data), flush=True)
                else:
                    print("OTHER:", msg.type, "close_code:", ws.close_code, flush=True)
                    break

if __name__ == "__main__":
    asyncio.run(check())
