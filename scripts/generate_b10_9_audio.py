# -*- coding: utf-8 -*-
"""
Generate 8 Voice AI mp3 files for Grade 10 Lesson 9 (Tích của một số với một vectơ)
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
    "assets/audio/b10_9_welcome.mp3": "Thầy Sáng chào toàn thể các em học sinh lớp 10 yêu quý! Ở hai bài học trước, các em đã làm quen với khái niệm vectơ và hai phép toán cộng, trừ vectơ. Hôm nay Thầy trò mình cùng khám phá phép toán đại số thứ ba vô cùng lợi hại: Bài 9, Tích của một vectơ với một số. Phép toán này sẽ giúp các em co giãn độ dài, đổi hướng vectơ và đặc biệt là phân tích một lực phức tạp thành hai thành phần đơn giản. Thầy chúc các em có một tiết học tràn đầy niềm say mê và hứng khởi!",
    "assets/audio/b10_9_goals.mp3": "Mục tiêu bài học cần đạt: Sau bài học này, các em cần làm chủ bốn mục tiêu trọng tâm: Thứ nhất, hiểu sâu sắc định nghĩa tích của một số với một vectơ trong cả hai trường hợp số dương và số âm. Thứ hai, nắm vững các tính chất phân phối và điều kiện để hai vectơ cùng phương. Thứ ba, sử dụng thành thạo hệ thức trung điểm mở rộng và hệ thức trọng tâm tam giác. Thứ tư, biết cách phân tích một vectơ bất kì theo hai vectơ không cùng phương và ứng dụng vào giải thích nguyên lí thuyền buồm đi ngược gió.",
    "assets/audio/b10_9_hook.mp3": "Bài toán dẫn nhập: Các em có bao giờ thắc mắc tại sao một đứa trẻ có thể nhấc bổng một người lớn trên bập bênh nếu ngồi đúng vị trí? Hay trong cơ học, vị trí điểm đặt trụ đỡ để thanh đòn chịu tải cân bằng được xác định như thế nào? Và kì diệu hơn cả, tại sao những chiếc thuyền buồm cổ đại có thể di chuyển tiến về phía trước ngay cả khi gió đang thổi ngược lại? Bí mật nằm ở việc phân tích lực gió thành các vectơ thành phần. Chúng ta cùng khám phá lời giải đáp toán học ngay sau đây nhé!",
    "assets/audio/b10_9_sec1.mp3": "Mục một, Định nghĩa tích của một vectơ với một số: Cho số thực k và vectơ a. Tích của k với vectơ a là một vectơ kí hiệu là k a. Độ dài của k a bằng giá trị tuyệt đối của k nhân với độ dài vectơ a. Về hướng, nếu k dương thì k a cùng hướng với a; nếu k âm thì k a ngược hướng với a. Đặc biệt, nếu k bằng không hoặc vectơ a là vectơ không thì tích k a chính là vectơ không.",
    "assets/audio/b10_9_sec2.mp3": "Mục hai, Các tính chất cơ bản và điều kiện cùng phương: Phép nhân vectơ với một số có đầy đủ các tính chất phân phối quen thuộc đối với phép cộng vectơ và phép cộng số thực. Đặc biệt, hai vectơ a và b, với b khác vectơ không, cùng phương khi và chỉ khi tồn tại một số thực k sao cho vectơ a bằng k lần vectơ b. Đây chính là chìa khoá vàng để chứng minh ba điểm thẳng hàng trong hình học.",
    "assets/audio/b10_9_sec3.mp3": "Mục ba, Hệ thức trung điểm và trọng tâm mở rộng: Nếu I là trung điểm của đoạn thẳng AB thì với mọi điểm O tuỳ ý, vectơ OA cộng vectơ OB bằng hai lần vectơ OI. Tương tự, nếu G là trọng tâm của tam giác ABC thì với mọi điểm O, vectơ OA cộng vectơ OB cộng vectơ OC bằng ba lần vectơ OG. Hai hệ thức này được sử dụng liên tục trong các đề thi tuyển sinh và thi học sinh giỏi.",
    "assets/audio/b10_9_sec4.mp3": "Mục bốn, Phân tích một vectơ và ứng dụng thuyền buồm: Cho hai vectơ không cùng phương a và b. Khi đó mọi vectơ u bất kì trong mặt phẳng đều có thể biểu diễn duy nhất dưới dạng u bằng x a cộng y b. Nhờ định lí phân tích này, lực đẩy của gió vào cánh buồm được tách thành hai thành phần vuông góc, giúp đẩy con thuyền lướt đi zích zắc ngược dòng gió một cách ngoạn mục.",
    "assets/audio/b10_9_wrapup.mp3": "Chốt bài học: Như vậy, qua bài học số 9, các em đã trang bị thêm một công cụ đại số hình học cực kì mạnh mẽ. Nhớ kĩ: nhân với số dương giữ nguyên hướng, nhân với số âm đảo ngược hướng, độ dài nhân với trị tuyệt đối của k. Hai hệ thức mở rộng trung điểm, trọng tâm và định lí phân tích vectơ sẽ đồng hành cùng các em suốt những năm cấp ba. Chúc các em luôn tự tin làm chủ môn Toán cùng Thầy Sáng!"
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
    print("ALL AUDIOS FOR LESSON 9 (GRADE 10) FINISHED!")

if __name__ == "__main__":
    asyncio.run(main())
