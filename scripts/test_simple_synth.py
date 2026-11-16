# -*- coding: utf-8 -*-
import asyncio, os
import aiohttp
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

async def test():
    text = "Thầy Sáng chào các em học sinh khối mười một!"
    outfile = "test_gen.mp3"
    conn_id = connect_id()
    url = f"{WSS_URL}&ConnectionId={conn_id}&Sec-MS-GEC={DRM.generate_sec_ms_gec()}&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
    headers = DRM.headers_with_muid(WSS_HEADERS)
    async with aiohttp.ClientSession() as session:
        async with session.ws_connect(url, compress=15, headers=headers, ssl=None) as ws:
            ts = date_to_string()
            cmd = f"X-Timestamp:{ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n" + '{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"true"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}\r\n'
            await ws.send_str(cmd)
            cfg = TTSConfig("vi-VN-NamMinhNeural", "+0%", "+0%", "+0Hz", "WordBoundary")
            cid = connect_id()
            ssml_body = mkssml(cfg, text)
            ssml_req = ssml_headers_plus_data(cid, date_to_string(), ssml_body)
            await ws.send_str(ssml_req)
            
            audio_bytes = bytearray()
            while True:
                msg = await ws.receive()
                if msg.type == aiohttp.WSMsgType.BINARY:
                    if len(msg.data) >= 2:
                        hlen = int.from_bytes(msg.data[:2], 'big')
                        h_dict, data = get_headers_and_data(msg.data, hlen)
                        if h_dict.get(b'Path') == b'audio':
                            audio_bytes.extend(data)
                elif msg.type == aiohttp.WSMsgType.TEXT:
                    if 'turn.end' in msg.data:
                        break
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.CLOSED):
                    break
            print('Received bytes:', len(audio_bytes), flush=True)
            if len(audio_bytes) > 0:
                with open(outfile, 'wb') as f:
                    f.write(audio_bytes)

if __name__ == "__main__":
    asyncio.run(test())
