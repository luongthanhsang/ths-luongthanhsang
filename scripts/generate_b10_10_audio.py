# -*- coding: utf-8 -*-
"""
Generate 8 Voice AI mp3 files for Grade 10 Lesson 10 (Vectơ trong mặt phẳng toạ độ)
Voice: vi-VN-NamMinhNeural
Author: ThS. Lương Thanh Sáng
"""

import asyncio
import aiohttp
import os
import time
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

SCRIPTS = {
    "assets/audio/b10_10_welcome.mp3": "Thầy Sáng chào các em học sinh lớp 10 thân yêu! Chào mừng các em đến với bài học số 10: Vectơ trong mặt phẳng toạ độ. Đây là một bước ngoặt vĩ đại của toán học hình học, nơi nhà bác học Đề-các đã kết hợp hoàn hảo giữa Hình học trực quan và Đại số tính toán. Kể từ bài học này, mọi điểm, mọi vectơ và các hình vẽ phức tạp đều được biểu diễn thành những cặp số đơn giản, giúp các em tính toán khoảng cách và toạ độ cực kì chuẩn xác. Thầy trò mình cùng bắt đầu nhé!",
    "assets/audio/b10_10_goals.mp3": "Mục tiêu bài học cần đạt: Sau bài học này, các em cần đạt được bốn mục tiêu then chốt: Thứ nhất, hiểu rõ khái niệm hệ trục toạ độ Oxy và định nghĩa toạ độ của vectơ thông qua hai vectơ đơn vị i và j. Thứ hai, thực hiện thành thạo các phép toán cộng, trừ vectơ và nhân vectơ với một số theo biểu thức toạ độ. Thứ ba, tính chính xác toạ độ vectơ nối hai điểm, độ dài vectơ và khoảng cách giữa hai điểm. Thứ tư, áp dụng thành thạo công thức toạ độ trung điểm của đoạn thẳng và toạ độ trọng tâm tam giác vào bài toán thực tiễn.",
    "assets/audio/b10_10_hook.mp3": "Bài toán dẫn nhập: Các em thường theo dõi các bản tin thời tiết dự báo đường đi của các cơn bão trên biển Đông. Trên bản đồ khí tượng, vị trí tâm bão được xác định chính xác theo kinh độ và vĩ độ, ví dụ như toạ độ mười ba phẩy tám độ vĩ Bắc và một trăm lẻ tám phẩy ba độ kinh Đông. Nếu một cơn bão di chuyển thẳng đều trong mười hai giờ, làm thế nào các chuyên gia khí tượng dự đoán chính xác tâm bão sẽ ở đâu vào thời điểm chín giờ? Chúng ta cùng dùng toạ độ vectơ để giải mã bài toán này ngay sau đây!",
    "assets/audio/b10_10_sec1.mp3": "Mục một, Toạ độ của vectơ trên mặt phẳng Oxy: Hệ trục toạ độ Oxy gồm hai trục vuông góc tại gốc O, với hai vectơ đơn vị là i trên trục hoành và j trên trục tung. Mọi vectơ u trong mặt phẳng đều phân tích duy nhất thành u bằng x lần vectơ i cộng y lần vectơ j. Cặp số x y đó chính là toạ độ của vectơ u, trong đó x là hoành độ và y là tung độ. Hai vectơ bằng nhau khi và chỉ khi chúng có cùng hoành độ và cùng tung độ.",
    "assets/audio/b10_10_sec2.mp3": "Mục hai, Biểu thức toạ độ của các phép toán vectơ: Khi cộng hoặc trừ hai vectơ, ta chỉ việc cộng hoặc trừ các toạ độ tương ứng. Khi nhân một vectơ với một số thực k, ta nhân số k đó với cả hoành độ và tung độ. Hai vectơ u và v cùng phương khi và chỉ khi toạ độ của chúng tỉ lệ với nhau, tức là hoành độ này chia hoành độ kia bằng tung độ này chia tung độ kia.",
    "assets/audio/b10_10_sec3.mp3": "Mục ba, Toạ độ điểm, vectơ nối hai điểm và công thức độ dài: Toạ độ của điểm M chính là toạ độ của vectơ OM nối từ gốc toạ độ. Toạ độ của vectơ MN nối từ điểm M đến điểm N được tính bằng toạ độ điểm sau trừ toạ độ điểm trước. Độ dài của vectơ u và khoảng cách giữa hai điểm M N được tính bằng căn bậc hai của tổng bình phương các hiệu toạ độ theo định lí Pi-ta-go quen thuộc.",
    "assets/audio/b10_10_sec4.mp3": "Mục bốn, Toạ độ trung điểm và trọng tâm tam giác: Toạ độ trung điểm của đoạn thẳng bằng trung bình cộng toạ độ hai đầu mút, lấy hoành cộng hoành chia đôi, tung cộng tung chia đôi. Toạ độ trọng tâm tam giác bằng trung bình cộng toạ độ ba đỉnh, lấy tổng ba toạ độ chia cho ba. Công thức này giúp xác định tức thì tâm bão sau chín giờ di chuyển trên biển Đông.",
    "assets/audio/b10_10_wrapup.mp3": "Chốt bài học: Như vậy, qua bài học số 10, các em đã làm chủ phương pháp toạ độ trong mặt phẳng. Hãy ghi nhớ thật kĩ: toạ độ vectơ sau trừ trước, độ dài là căn tổng bình phương, trung điểm chia đôi và trọng tâm chia ba. Với vũ khí toạ độ sắc bén này, các bài toán hình học đã trở thành những phép tính đại số cực kì nhẹ nhàng. Thầy chúc các em luôn đạt điểm số cao nhất cùng Thầy Sáng!"
}

async def generate_speech_single(text, outfile):
    conn_id = connect_id()
    url = (
        f"{WSS_URL}&ConnectionId={conn_id}"
        f"&Sec-MS-GEC={DRM.generate_sec_ms_gec()}"
        f"&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
    )
    headers = DRM.headers_with_muid(WSS_HEADERS)
    async with aiohttp.ClientSession() as session:
        async with session.ws_connect(url, compress=15, headers=headers, ssl=None, timeout=30) as ws:
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
            ssml_body = mkssml(cfg, text)
            ssml_req = ssml_headers_plus_data(cid, date_to_string(), ssml_body)
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
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.CLOSED):
                    break
            
            if len(audio_bytes) > 0:
                os.makedirs(os.path.dirname(outfile), exist_ok=True)
                with open(outfile, "wb") as f:
                    f.write(audio_bytes)
                print(f"[OK] Generated {outfile} ({len(audio_bytes)} bytes)", flush=True)
                return True
            else:
                print(f"[RETRY] 0 bytes for {outfile}", flush=True)
                return False

async def generate_with_retry(text, outfile, max_retries=6):
    for attempt in range(1, max_retries + 1):
        try:
            ok = await generate_speech_single(text, outfile)
            if ok:
                return True
        except Exception as e:
            print(f"[ATTEMPT {attempt}] Exception for {outfile}: {e}", flush=True)
        await asyncio.sleep(2.0)
    return False

async def main():
    for path, text in SCRIPTS.items():
        if os.path.exists(path) and os.path.getsize(path) > 30000:
            print(f"[SKIP] {path} already exists ({os.path.getsize(path)} bytes)", flush=True)
            continue
        print(f"[START] Generating {path}...", flush=True)
        res = await generate_with_retry(text, path)
        print(f"[DONE] {path}: {res}", flush=True)
        await asyncio.sleep(1.5)
    print("ALL AUDIOS FOR LESSON 10 (GRADE 10) FINISHED!")

if __name__ == "__main__":
    asyncio.run(main())
