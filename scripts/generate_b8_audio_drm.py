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
        "outfile": "assets/audio/b8_welcome.mp3",
        "text": "Thầy Sáng chào cả lớp! Thầy rất vui khi được tiếp tục đồng hành cùng các em trong bài học số 8. Hôm nay, chúng ta sẽ cùng nhau khám phá biểu thức toạ độ của các phép toán vectơ trong không gian. Thầy tin rằng những công cụ đại số mạnh mẽ này sẽ giúp các em giải quyết các bài toán hình học và thực tiễn một cách vô cùng nhẹ nhàng và trực quan. Hãy cùng thầy bắt đầu bài học với thật nhiều hứng khởi nhé!"
    },
    {
        "id": "goals",
        "outfile": "assets/audio/b8_goals.mp3",
        "text": "Mục tiêu và yêu cầu cần đạt: Sau bài học này, các em cần đạt được bốn mục tiêu chính: Thứ nhất, nhận biết và thể hiện thành thạo biểu thức toạ độ của các phép toán vectơ trong không gian, bao gồm phép cộng hai vectơ, phép trừ hai vectơ và phép nhân một số với một vectơ. Thứ hai, xác định chính xác toạ độ trung điểm của đoạn thẳng và toạ độ trọng tâm của tam giác. Thứ ba, nắm vững biểu thức toạ độ của tích vô hướng, điều kiện hai vectơ vuông góc, công thức tính độ dài vectơ, khoảng cách giữa hai điểm và góc giữa hai vectơ. Thứ tư, vận dụng linh hoạt các biểu thức toạ độ để giải quyết các bài toán định vị và đo đạc trong thực tiễn."
    },
    {
        "id": "hook",
        "outfile": "assets/audio/b8_hook.mp3",
        "text": "Bài toán dẫn nhập: Quan sát những căn nhà gỗ xinh xắn trong một khu nghỉ dưỡng, các kiến trúc sư đã phác thảo chúng dưới dạng hình lăng trụ đứng tam giác OAB chấm O phẩy A phẩy B phẩy. Khi gắn hệ toạ độ không gian Oxyz với đơn vị đo là centimét, điểm A phẩy có toạ độ 240, 450, 0 và điểm B phẩy có toạ độ 120, 450, 300. Bằng cách nào chỉ từ toạ độ hai điểm này, các kỹ sư xây dựng có thể tính toán chính xác kích thước mỗi chiều và độ dốc mái của căn nhà gỗ? Chúng ta cùng đi tìm câu trả lời qua bài học hôm nay."
    },
    {
        "id": "sec1",
        "outfile": "assets/audio/b8_sec1.mp3",
        "text": "Mục một, Biểu thức toạ độ của phép cộng hai vectơ, phép trừ hai vectơ, phép nhân một số với vectơ: Trong không gian Oxyz, cho hai vectơ a toạ độ x, y, z và b toạ độ x phẩy, y phẩy, z phẩy. Khi đó, vectơ tổng a cộng b có toạ độ x cộng x phẩy, y cộng y phẩy, z cộng z phẩy. Vectơ hiệu a trừ b có toạ độ x trừ x phẩy, y trừ y phẩy, z trừ z phẩy. Tích số thực k với vectơ a có toạ độ k x, k y, k z. Đặc biệt, hai vectơ a và b cùng phương khi và chỉ khi tồn tại số thực k sao cho x bằng k x phẩy, y bằng k y phẩy và z bằng k z phẩy."
    },
    {
        "id": "sec2",
        "outfile": "assets/audio/b8_sec2.mp3",
        "text": "Mục hai, Toạ độ trung điểm đoạn thẳng và toạ độ trọng tâm tam giác: Cho ba điểm không thẳng hàng A, B, C trong không gian Oxyz. Điểm M là trung điểm của đoạn thẳng AB sẽ có toạ độ bằng trung bình cộng toạ độ của hai đầu mút A và B: x M bằng x A cộng x B chia 2, y M bằng y A cộng y B chia 2, z M bằng z A cộng z B chia 2. Tương tự, trọng tâm G của tam giác ABC có toạ độ bằng trung bình cộng toạ độ ba đỉnh A, B, C: x G bằng x A cộng x B cộng x C chia 3, y G bằng y A cộng y B cộng y C chia 3, z G bằng z A cộng z B cộng z C chia 3."
    },
    {
        "id": "sec3",
        "outfile": "assets/audio/b8_sec3.mp3",
        "text": "Mục ba, Biểu thức toạ độ của tích vô hướng và các ứng dụng hình học: Tích vô hướng của hai vectơ a và b được xác định bằng công thức vô cùng đẹp mắt: a nhân b bằng x nhân x phẩy cộng y nhân y phẩy cộng z nhân z phẩy. Từ đó ta có các hệ quả nền tảng: hai vectơ vuông góc khi và chỉ khi tích vô hướng bằng 0; độ dài vectơ a bằng căn bậc hai của x bình phương cộng y bình phương cộng z bình phương; khoảng cách giữa hai điểm A và B bằng độ dài vectơ AB; và cô-sin góc giữa hai vectơ bằng tích vô hướng chia tích độ dài."
    },
    {
        "id": "sec4",
        "outfile": "assets/audio/b8_sec4.mp3",
        "text": "Mục bốn, Vận dụng toạ độ của vectơ trong các bài toán thực tiễn: Trong hệ thống radar hàng không, vectơ giúp dự đoán vị trí máy bay sau những khoảng thời gian di chuyển xác định. Trong kiến trúc xây dựng, toạ độ các đỉnh giúp tính toán chính xác chiều dài, chiều rộng, chiều cao mái và góc dốc của công trình. Trong hàng hải và khí tượng học, vectơ toạ độ cho phép xác định khoảng cách giữa các khinh khí cầu bay tự do hoặc tính toán bán kính tầm quét của radar bờ biển đối với các tàu thuyền ngoài khơi xa."
    },
    {
        "id": "wrapup",
        "outfile": "assets/audio/b8_wrapup.mp3",
        "text": "Chốt bài học: Trở lại bài toán căn nhà gỗ mở đầu, nhờ biểu thức toạ độ của vectơ, chúng ta xác định được căn nhà có chiều dài 450 centimét, chiều rộng 240 centimét, các cạnh bên mái dài xấp xỉ 323 centimét và góc dốc của mái nhà xấp xỉ 68,2 độ. Các phép toán toạ độ vectơ chính là chiếc cầu nối kỳ diệu giữa lý thuyết hình học và kỹ thuật hiện đại. Thầy chúc các em vận dụng thật thành thạo kiến thức này vào các bài kiểm tra sắp tới!"
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
                        h_dict, data = get_headers_and_data(msg.data, hlen)
                        if h_dict.get(b"Path") == b"audio":
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
