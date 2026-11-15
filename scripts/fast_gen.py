# -*- coding: utf-8 -*-
import asyncio
import aiohttp
import os
import sys
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

AUDIOS = [
    ("assets/audio/b10_4_hook.mp3", "Tình huống kinh doanh điều hoà: Một cửa hàng điện lạnh dự định kinh doanh máy điều hoà hai chiều và một chiều với số vốn đầu tư không vượt quá một phẩy hai tỉ đồng. Giá mua vào lần lượt là hai mươi triệu và mười triệu đồng mỗi máy, lợi nhuận dự kiến là ba phẩy năm triệu và hai triệu đồng mỗi máy. Nhu cầu thị trường không quá một trăm máy cả hai loại. Chủ cửa hàng cần đầu tư nhập bao nhiêu máy mỗi loại để thu được lợi nhuận cao nhất? Toán học sẽ cho chúng ta đáp án chính xác tới từng đồng."),
    ("assets/audio/b10_4_sec3.mp3", "Mục ba, Ứng dụng giải bài toán quy hoạch tuyến tính thực tế: Tổng quát, người ta đã chứng minh được rằng: Giá trị lớn nhất hay nhỏ nhất của biểu thức mục tiêu F bằng a ích cộng b y trên miền đa giác luôn đạt được tại một trong các đỉnh của đa giác đó. Với bài toán điều hoà, miền nghiệm là tứ giác Ô A B C với bốn đỉnh: Ô toạ độ 0 0, A toạ độ 0 100, B toạ độ 20 80, và C toạ độ 60 0. Thay vào biểu thức lợi nhuận, ta thấy tại đỉnh B toạ độ 20 80, lợi nhuận đạt mức cực đại là 230 triệu đồng. Như vậy, quyết định tối ưu là nhập 20 máy hai chiều và 80 máy một chiều."),
    ("assets/audio/b10_4_wrapup.mp3", "Tổng kết bài học: Bài học số 4 mang lại cho các em quy trình bốn bước giải quyết bài toán quy hoạch tuyến tính: Bước một, gọi ẩn và thiết lập hệ bất phương trình. Bước hai, vẽ miền đa giác nghiệm. Bước ba, tìm toạ độ các đỉnh của miền đa giác. Bước bốn, tính và so sánh giá trị biểu thức mục tiêu tại các đỉnh để đưa ra kết luận tối ưu. Thầy mời các em cùng bước vào Phần bốn để luyện tập và làm chủ dạng toán này nhé!")
]

async def gen_file(outfile, text):
    print(f"Starting {outfile}...", flush=True)
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
                try:
                    # After audio chunks start flowing, wait at most 2.5s for next packet
                    recv_timeout = 2.5 if len(audio_bytes) > 0 else 8.0
                    msg = await asyncio.wait_for(ws.receive(), timeout=recv_timeout)
                except asyncio.TimeoutError:
                    if len(audio_bytes) > 10000:
                        print(f"  [STREAM END VIA TIMEOUT] got {len(audio_bytes)} bytes", flush=True)
                        break
                    else:
                        print(f"  [TIMEOUT INITIAL] got only {len(audio_bytes)} bytes", flush=True)
                        return False
                
                if msg.type == aiohttp.WSMsgType.BINARY:
                    if len(msg.data) >= 2:
                        hlen = int.from_bytes(msg.data[:2], "big")
                        h_dict, data = get_headers_and_data(msg.data, hlen)
                        if h_dict.get(b"Path") == b"audio":
                            audio_bytes.extend(data)
                elif msg.type == aiohttp.WSMsgType.TEXT:
                    if "turn.end" in msg.data:
                        print(f"  [TURN.END] got {len(audio_bytes)} bytes", flush=True)
                        break
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.CLOSED):
                    print(f"  [WS CLOSED] got {len(audio_bytes)} bytes", flush=True)
                    break
            
            if len(audio_bytes) > 10000:
                with open(outfile, "wb") as f:
                    f.write(audio_bytes)
                print(f"[SUCCESS] Wrote {outfile} ({len(audio_bytes)} bytes)", flush=True)
                return True
            return False

async def main():
    for outfile, text in AUDIOS:
        if os.path.exists(outfile) and os.path.getsize(outfile) > 30000:
            print(f"[EXISTS] {outfile} ({os.path.getsize(outfile)} bytes)", flush=True)
            continue
        for att in range(3):
            try:
                ok = await gen_file(outfile, text)
                if ok:
                    break
            except Exception as e:
                print(f"  Error attempt {att}: {e}", flush=True)
            await asyncio.sleep(1.0)
    print("FINISHED ALL!", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
