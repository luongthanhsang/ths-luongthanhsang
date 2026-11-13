import asyncio
import aiohttp
import os
import time
import base64
import json
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

VOICE = "vi-VN-NamMinhNeural"

AUDIOS = [
    {
        "id": "welcome",
        "outfile": "assets/audio/b7_welcome.mp3",
        "text": "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!"
    },
    {
        "id": "goals",
        "outfile": "assets/audio/b7_goals.mp3",
        "text": "Mục tiêu và yêu cầu cần đạt: Sau bài học này, các em cần đạt được bốn mục tiêu chính: Thứ nhất, nhận biết hệ trục toạ độ Đề-các vuông góc Oxyz trong không gian, gốc toạ độ, các trục toạ độ, các mặt phẳng toạ độ và các vectơ đơn vị. Thứ hai, xác định toạ độ của một điểm đối với hệ toạ độ Oxyz và toạ độ các hình chiếu vuông góc. Thứ ba, xác định toạ độ của vectơ, hai vectơ bằng nhau, toạ độ vectơ qua hai điểm, toạ độ trung điểm và toạ độ trọng tâm tam giác. Thứ tư, vận dụng hệ toạ độ Oxyz để giải quyết các bài toán định vị thực tế."
    },
    {
        "id": "hook",
        "outfile": "assets/audio/b7_hook.mp3",
        "text": "Bài toán dẫn nhập: Trong một căn phòng, một chiếc bóng đèn được treo cách sàn nhà hai mét, cách hai bức tường vuông góc lần lượt là một mét và một mét rưỡi. Làm thế nào để các kỹ sư thiết kế mô tả vị trí của chiếc bóng đèn một cách chính xác, ngắn gọn trong không gian ba chiều? Kiến thức về Hệ trục toạ độ trong không gian Oxyz chính là chìa khoá toán học tuyệt vời giúp chúng ta giải quyết trọn vẹn bài toán này."
    },
    {
        "id": "sec1",
        "outfile": "assets/audio/b7_sec1.mp3",
        "text": "Mục một, Hệ trục toạ độ trong không gian: Trong không gian, xét ba trục Ox, Oy, Oz đôi một vuông góc với nhau tại gốc O của mỗi trục. Gọi vectơ i, vectơ j, vectơ k lần lượt là các vectơ đơn vị trên các trục Ox, Oy, Oz. Hệ ba trục như vậy được gọi là hệ trục toạ độ Đề-các vuông góc Oxyz, hay đơn giản là hệ toạ độ Oxyz. Điểm O gọi là gốc toạ độ. Các mặt phẳng Oxy, Oyz, Ozx đôi một vuông góc được gọi là các mặt phẳng toạ độ."
    },
    {
        "id": "sec2",
        "outfile": "assets/audio/b7_sec2.mp3",
        "text": "Mục hai, Toạ độ của điểm trong không gian: Trong không gian Oxyz, cho một điểm M tuỳ ý. Bộ ba số x, y, z duy nhất sao cho vectơ OM bằng x lần vectơ i, cộng y lần vectơ j, cộng z lần vectơ k được gọi là toạ độ của điểm M đối với hệ toạ độ Oxyz, kí hiệu là M mở ngoặc x chấm phẩy y chấm phẩy z đóng ngoặc. Trong đó, x là hoành độ, y là tung độ, và z là cao độ của điểm M."
    },
    {
        "id": "sec3",
        "outfile": "assets/audio/b7_sec3.mp3",
        "text": "Mục ba, Toạ độ của vectơ trong không gian: Trong không gian Oxyz, cho vectơ a tuỳ ý. Bộ ba số x, y, z duy nhất sao cho vectơ a bằng x lần vectơ i, cộng y lần vectơ j, cộng z lần vectơ k được gọi là toạ độ của vectơ a, kí hiệu vectơ a bằng mở ngoặc x chấm phẩy y chấm phẩy z đóng ngoặc. Hai vectơ bằng nhau khi và chỉ khi các toạ độ tương ứng của chúng bằng nhau: hoành độ bằng hoành độ, tung độ bằng tung độ, và cao độ bằng cao độ."
    },
    {
        "id": "sec4",
        "outfile": "assets/audio/b7_sec4.mp3",
        "text": "Mục bốn, Toạ độ của vectơ theo toạ độ hai đầu mút: Cho hai điểm M có toạ độ x M, y M, z M và N có toạ độ x N, y N, z N. Khi đó toạ độ của vectơ MN được tính bằng cách lấy toạ độ điểm ngọn N trừ toạ độ điểm gốc M: x N trừ x M, y N trừ y M, z N trừ z M. Toạ độ trung điểm I của đoạn thẳng AB bằng trung bình cộng toạ độ hai đầu mút. Toạ độ trọng tâm G của tam giác ABC bằng trung bình cộng toạ độ của ba đỉnh."
    },
    {
        "id": "wrapup",
        "outfile": "assets/audio/b7_wrapup.mp3",
        "text": "Chốt bài học: Trở lại bài toán mở đầu, khi chọn gốc O là góc phòng trên mặt sàn, trục Ox và Oy theo hai mép chân tường, trục Oz hướng thẳng đứng, vị trí chiếc bóng đèn treo được xác định chính xác với toạ độ M mở ngoặc 1 chấm phẩy 1 phẩy 5 chấm phẩy 2 đóng ngoặc. Khoảng cách từ bóng đèn đến gốc O là căn bậc hai của 1 bình phương cộng 1 phẩy 5 bình phương cộng 2 bình phương, xấp xỉ bằng hai phẩy sáu mươi chín mét."
    }
]

async def generate_speech_fixed(text, outfile):
    conn_id = connect_id()
    url = (
        f"{WSS_URL}&ConnectionId={conn_id}"
        f"&Sec-MS-GEC={DRM.generate_sec_ms_gec()}"
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
            ssml_body = mkssml(cfg, text)
            ssml_req = ssml_headers_plus_data(cid, date_to_string(), ssml_body)
            await ws.send_str(ssml_req)
            
            audio_bytes = bytearray()
            while True:
                msg = await ws.receive()
                if msg.type == aiohttp.WSMsgType.BINARY:
                    if len(msg.data) >= 2:
                        hlen = int.from_bytes(msg.data[:2], "big")
                        headers, data = get_headers_and_data(msg.data, hlen)
                        if headers.get(b"Path") == b"audio":
                            audio_bytes.extend(data)
                elif msg.type == aiohttp.WSMsgType.TEXT:
                    if "turn.end" in msg.data:
                        break
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.ERROR):
                    break
            
            if len(audio_bytes) > 0:
                with open(outfile, 'wb') as f:
                    f.write(audio_bytes)
                print(f"[SUCCESS] {outfile}: {len(audio_bytes)} bytes.", flush=True)
                return True
            else:
                print(f"[FAIL] {outfile}: No bytes.", flush=True)
                return False

async def main():
    os.makedirs("assets/audio", exist_ok=True)
    # First terminate any previous task if needed
    for item in AUDIOS:
        if os.path.exists(item["outfile"]) and os.path.getsize(item["outfile"]) > 50000:
            print(f"Skipping already existing: {item['outfile']} ({os.path.getsize(item['outfile'])} bytes)", flush=True)
            continue
        print(f"Generating {item['id']}...", flush=True)
        success = False
        for attempt in range(5):
            try:
                success = await generate_speech_fixed(item["text"], item["outfile"])
                if success:
                    break
            except Exception as e:
                print(f"Attempt {attempt+1} failed: {e}", flush=True)
            await asyncio.sleep(2.0)
        if not success:
            print(f"Failed to generate {item['id']}", flush=True)
        await asyncio.sleep(1.0)
    print("ALL AUDIOS GENERATED SUCCESSFULLY!", flush=True)

if __name__ == "__main__":
    asyncio.run(main())

