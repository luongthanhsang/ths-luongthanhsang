import asyncio
import aiohttp
import os
import time
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

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
                        audio_data = msg.data[hlen:]
                        audio_bytes.extend(audio_data)
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

async def generate_with_retry(text, outfile, max_retries=4):
    for attempt in range(1, max_retries + 1):
        try:
            ok = await generate_speech_single(text, outfile)
            if ok:
                return True
        except Exception as e:
            print(f"[ATTEMPT {attempt}] Exception for {outfile}: {e}", flush=True)
        await asyncio.sleep(2.5)
    return False

SCRIPTS = {
    "assets/audio/b6_welcome.mp3": "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
    "assets/audio/b6_goals.mp3": "Sau bài học này, các em cần đạt được hai mục tiêu chính: Thứ nhất, nhận biết được vectơ trong không gian. Thứ hai, thực hiện thành thạo các phép toán vectơ bao gồm: cộng, trừ, nhân vectơ với một số và tính tích vô hướng của hai vectơ trong không gian.",
    "assets/audio/b6_hook.mp3": "Trong thực tế, khi một chiếc cần cẩu nâng một kiện hàng nặng, lực căng của các sợi dây cáp không chỉ nằm trên mặt đất mà tỏa ra trong không gian ba chiều. Làm sao để biểu diễn chính xác hướng và độ lớn của các lực lơ lửng này? Khái niệm vectơ các em đã học ở lớp 10 sẽ được mở rộng ra không gian như thế nào? Cùng thầy vào phần 1 nhé.",
    "assets/audio/b6_sec1.mp3": "Vectơ trong không gian hoàn toàn giống với vectơ trong mặt phẳng, nó là một đoạn thẳng có hướng. Khi hai vectơ có cùng hướng và cùng độ dài, ta nói chúng bằng nhau.",
    "assets/audio/b6_sec2.mp3": "Quy tắc 3 điểm và quy tắc hình bình hành vẫn đúng trong không gian. Nhưng thầy muốn nhấn mạnh Quy tắc hình hộp. Cho hình hộp ABCD.A'B'C'D', vectơ AB cộng vectơ AD cộng vectơ AA' bằng vectơ AC'.",
    "assets/audio/b6_sec3.mp3": "Khi nhân một số thực k với vectơ a, nó sẽ làm vectơ đó dài ra hoặc ngắn đi. Vectơ k a cùng hướng vectơ a nếu k dương, ngược hướng nếu k âm. Đặc biệt, nếu G là trọng tâm tứ diện ABCD thì vectơ GA cộng vectơ GB cộng vectơ GC cộng vectơ GD bằng vectơ không.",
    "assets/audio/b6_sec4.mp3": "Phép toán cuối cùng là tích vô hướng, sinh ra một con số thực. Tích vô hướng của vectơ a và vectơ b bằng độ dài vectơ a nhân độ dài vectơ b nhân cosin góc giữa chúng. Hai vectơ khác không vuông góc với nhau khi và chỉ khi tích vô hướng của chúng bằng không.",
    "assets/audio/b6_wrapup.mp3": "Trở lại Bài toán dẫn nhập, để kiện hàng cân bằng, tổng các lực kéo từ dây cáp và trọng lực phải triệt tiêu nhau. Hệ thống cần cẩu phải thỏa mãn phương trình vectơ: F1 cộng F2 cộng F3 cộng F4 cộng P bằng vectơ không. Nhờ tính toán các góc và tích vô hướng, máy tính phân bổ lực kéo đồng đều để cáp không đứt."
}

async def main():
    for path, text in SCRIPTS.items():
        # if file already exists with > 10000 bytes and was created today, skip
        if os.path.exists(path) and os.path.getsize(path) > 10000 and path in ["assets/audio/b6_welcome.mp3", "assets/audio/b6_sec1.mp3", "assets/audio/b6_sec3.mp3"]:
            print(f"[SKIP] {path} already exists ({os.path.getsize(path)} bytes)", flush=True)
            continue
        print(f"[START] Generating {path}...", flush=True)
        res = await generate_with_retry(text, path)
        print(f"[DONE] {path}: {res}", flush=True)
        await asyncio.sleep(2.0)

if __name__ == "__main__":
    asyncio.run(main())
