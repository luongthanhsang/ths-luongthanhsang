# -*- coding: utf-8 -*-
"""
Generate 8 Voice AI mp3 files for Grade 10 Lesson 8
Voice: vi-VN-NamMinhNeural
"""

import asyncio
import aiohttp
import os
import time
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

SCRIPTS = {
    "assets/audio/b10_8_welcome.mp3": "Thầy Sáng chào cả lớp 10 yêu quý! Sau khi đã làm quen với các khái niệm mở đầu, hôm nay Thầy trò mình cùng bước sang bài học số 8: Tổng và hiệu của hai vectơ. Đây là bài học trang bị cho các em các phép toán đại số đầu tiên trên các đại lượng hình học có hướng. Các quy tắc cộng trừ vectơ sẽ giúp các em giải quyết những bài toán biến đổi hình học và ứng dụng vật lý vô cùng kì diệu. Nào, Thầy trò mình cùng bắt đầu tiết học với thật nhiều hứng khởi nhé!",
    "assets/audio/b10_8_goals.mp3": "Mục tiêu bài học cần đạt: Sau bài học này, các em cần đạt được bốn mục tiêu trọng tâm: Thứ nhất, thực hiện thành thạo phép cộng và phép trừ vectơ. Thứ hai, nắm vững và vận dụng linh hoạt Quy tắc ba điểm, Quy tắc hình bình hành và Quy tắc hiệu. Thứ ba, hiểu rõ và sử dụng thành thạo hệ thức trung điểm của đoạn thẳng và hệ thức trọng tâm của tam giác. Thứ tư, vận dụng xuất sắc các phép toán vectơ vào giải quyết các bài toán thực tiễn như tổng hợp lực và tổng hợp vận tốc con tàu vượt sông.",
    "assets/audio/b10_8_hook.mp3": "Bài toán dẫn nhập: Một con tàu chuyển động từ bờ bên này sang bờ bên kia của dòng sông với vận tốc riêng không đổi. Do dòng nước chảy xiết, vận tốc thực tế của con tàu đối với bờ là sự kết hợp của cả hai vận tốc: vận tốc riêng của tàu và vận tốc dòng chảy. Nếu không quan tâm đến điểm đến, người lái tàu cần giữ góc lái bao nhiêu để tàu sang bờ bên kia được nhanh nhất? Và trong trò chơi kéo co, khi hai đội giữ sợi dây đứng yên bất phân thắng bại, lực kéo của hai đội có mối quan hệ toán học như thế nào? Chúng ta cùng đi tìm câu trả lời ngay sau đây.",
    "assets/audio/b10_8_sec1.mp3": "Mục một, Tổng của hai vectơ và hai quy tắc cơ bản: Để cộng hai vectơ a và b, từ điểm A tuỳ ý ta dựng vectơ AB bằng a, rồi từ B dựng tiếp vectơ BC bằng b. Khi đó vectơ AC nối từ gốc A đến ngọn C chính là tổng của hai vectơ a và b. Từ đây ta có hai quy tắc vàng: Quy tắc ba điểm, vectơ AB cộng vectơ BC bằng vectơ AC. Và Quy tắc hình bình hành: Nếu ABCD là hình bình hành thì vectơ AB cộng vectơ AD bằng đường chéo vectơ AC.",
    "assets/audio/b10_8_sec2.mp3": "Mục hai, Tính chất của phép cộng vectơ: Tương tự như phép cộng các số thực, phép cộng vectơ cũng có ba tính chất cơ bản: Thứ nhất là tính chất giao hoán, vectơ a cộng vectơ b bằng vectơ b cộng vectơ a. Thứ hai là tính chất kết hợp, giúp ta cộng ba vectơ mà không cần dùng ngoặc. Thứ ba là tính chất cộng với vectơ không, bất kì vectơ nào cộng với vectơ không đều bằng chính nó.",
    "assets/audio/b10_8_sec3.mp3": "Mục ba, Hiệu của hai vectơ và vectơ đối: Vectơ đối của vectơ a là vectơ có cùng độ dài nhưng ngược hướng với a, kí hiệu là trừ a. Vectơ đối của vectơ không chính là vectơ không. Hiệu của hai vectơ a và b được định nghĩa là a cộng với vectơ đối của b. Để trừ hai vectơ có chung điểm đầu, ta dùng Quy tắc hiệu: vectơ OM trừ vectơ ON bằng vectơ NM, ngọn đứng trước gốc đứng sau.",
    "assets/audio/b10_8_sec4.mp3": "Mục bốn, Tính chất trung điểm, trọng tâm và ứng dụng thực tiễn: Điểm I là trung điểm của đoạn thẳng AB khi và chỉ khi vectơ IA cộng vectơ IB bằng vectơ không. Điểm G là trọng tâm tam giác ABC khi và chỉ khi vectơ GA cộng vectơ GB cộng vectơ GC bằng vectơ không. Trong thực tế, vận tốc thực của con tàu là tổng của hai vectơ vận tốc riêng và vận tốc dòng nước, giúp các kỹ sư tính toán chính xác hướng lái tối ưu nhất.",
    "assets/audio/b10_8_wrapup.mp3": "Chốt bài học: Như vậy, qua bài học số 8, các em đã làm chủ hai phép toán nền tảng: cộng và trừ vectơ cùng các quy tắc ba điểm, hình bình hành và quy tắc hiệu. Nhớ quy tắc đuôi nối đầu khi cộng liên tiếp, và chung gốc thì ngọn trước gốc sau khi trừ. Nắm chắc các hệ thức trung điểm và trọng tâm, các em đã có công cụ vô cùng sắc bén để chinh phục các bài toán hình học tiếp theo. Thầy chúc các em luôn học giỏi và tự tin đạt điểm mười!"
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

async def generate_with_retry(text, outfile, max_retries=5):
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
    print("ALL AUDIOS FOR LESSON 8 (GRADE 10) FINISHED!")

if __name__ == "__main__":
    asyncio.run(main())
