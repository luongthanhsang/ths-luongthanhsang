# -*- coding: utf-8 -*-
"""
Hệ thống tạo 11 file Audio Voice AI Thầy Sáng (vi-VN-NamMinhNeural)
cho Bài 4 Lớp 11: Phương trình lượng giác cơ bản
Có tích hợp Edge-TTS DRM Sec-MS-GEC chuẩn xác, retry và tự động đóng gói Base64 Cache
"""

import asyncio
import aiohttp
import os
import time
import base64
import json
import shutil
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

VOICE = "vi-VN-NamMinhNeural"

AUDIOS = [
    {
        "id": "b11_4_welcome.mp3",
        "outfile": "assets/audio/b11_4_welcome.mp3",
        "text": (
            "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Hôm nay, thầy trò chúng ta sẽ bước vào Bài 4: Phương trình lượng giác cơ bản. "
            "Nếu như ở bài trước, các em đã biết rằng các hiện tượng tuần hoàn như nhịp thở, sóng biển, dòng điện hay dao động điều hòa đều được mô hình hóa bởi các hàm số lượng giác; "
            "thì trong bài học hôm nay, việc giải phương trình lượng giác chính là chìa khóa để chúng ta xác định chính xác thời điểm con sóng đạt đỉnh cao nhất, "
            "thời khắc vận tốc hô hấp đổi chiều, hay tính toán góc bắn nòng pháo tối ưu để quả đạn pháo bay xa nhất bảo vệ Tổ quốc. "
            "Bài học này không chỉ trang bị cho các em các công thức nghiệm kinh điển của bốn phương trình lượng giác cơ bản sin, cos, tan, cotang, "
            "mà còn rèn luyện tư duy logic, sự cẩn trọng với điều kiện xác định và kĩ năng sử dụng máy tính cầm tay điêu luyện. "
            "Các em hãy chuẩn bị sách vở, tập trung lắng nghe và cùng Thầy chinh phục đỉnh cao bài học ngày hôm nay nhé!"
        )
    },
    {
        "id": "b11_4_goals.mp3",
        "outfile": "assets/audio/b11_4_goals.mp3",
        "text": (
            "Phần 2. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần đạt được các yêu cầu trọng tâm sau: "
            "Thứ nhất, hiểu sâu sắc khái niệm hai phương trình tương đương, tập nghiệm và hai quy tắc biến đổi tương đương cơ bản. "
            "Thứ hai, nắm vững điều kiện có nghiệm trị tuyệt đối của m nhỏ hơn hoặc bằng 1, và thành thạo công thức nghiệm của phương trình sin x bằng m, cos x bằng m theo cả đơn vị radian và đơn vị độ, "
            "xử lý thuần thục các trường hợp đặc biệt và các góc lượng giác biểu diễn qua ac sin, ac cos. "
            "Thứ ba, nắm vững công thức nghiệm của phương trình tan x bằng m và cotang x bằng m, luôn có nghiệm với mọi số thực m, kèm điều kiện xác định chặt chẽ. "
            "Thứ tư, giải quyết thành thạo phương trình lượng giác mở rộng dạng sin u bằng sin v, cos u bằng cos v, tan u bằng tan v và sử dụng thành thạo máy tính cầm tay tìm góc lượng giác. "
            "Thứ năm, vận dụng phương trình lượng giác để giải quyết các bài toán thực tiễn như góc bắn đạn pháo, các pha chiếu sáng của Mặt Trăng và dao động cơ học."
        )
    },
    {
        "id": "b11_4_hook.mp3",
        "outfile": "assets/audio/b11_4_hook.mp3",
        "text": (
            "Tình huống mở đầu: Bài toán góc bắn của nòng pháo. Trong quân sự và vật lý, một quả đạn pháo được bắn ra khỏi nòng pháo với vận tốc ban đầu v không đổi từ mặt đất. "
            "Quỹ đạo bay của quả đạn là một đường cong parabol có phương trình: y bằng trừ g chia hai v không bình phương cos bình alpha nhân x bình phương cộng x nhân tan alpha. "
            "Khi quả đạn chạm đất, tung độ y bằng 0, ta tìm được tầm xa x bằng v không bình phương nhân sin hai alpha chia g. "
            "Để đạn pháo bay xa nhất, biểu thức sin hai alpha phải đạt giá trị lớn nhất là 1. "
            "Điều này dẫn đến phương trình lượng giác cơ bản: sin hai alpha bằng 1, cho ra góc bắn tối ưu alpha bằng 45 độ. "
            "Phương trình lượng giác cơ bản xuất hiện khắp nơi trong khoa học kỹ thuật và đời sống như thế đấy các em ạ!"
        )
    },
    {
        "id": "b11_4_sec1a.mp3",
        "outfile": "assets/audio/b11_4_sec1a.mp3",
        "text": (
            "Mục 1. Tiểu mục a: Khái niệm hai phương trình tương đương. Hai phương trình có cùng tập nghiệm được gọi là hai phương trình tương đương. "
            "Nếu phương trình f(x) bằng 0 tương đương với phương trình g(x) bằng 0, ta viết f(x) bằng 0 tương đương g(x) bằng 0. "
            "Đặc biệt, hai phương trình cùng vô nghiệm luôn được coi là tương đương với nhau vì chúng đều có tập nghiệm là tập rỗng. "
            "Ví dụ, phương trình 2x cộng 6 bằng 0 và phương trình x bình cộng 6x cộng 9 bằng 0 là hai phương trình tương đương vì cả hai đều có duy nhất một nghiệm là x bằng trừ 3."
        )
    },
    {
        "id": "b11_4_sec1b.mp3",
        "outfile": "assets/audio/b11_4_sec1b.mp3",
        "text": (
            "Mục 1. Tiểu mục b: Các phép biến đổi tương đương. Để giải phương trình, ta thường biến đổi phương trình đã cho thành các phương trình tương đương đơn giản hơn. "
            "Ta có hai phép biến đổi cơ bản: "
            "Thứ nhất, cộng hoặc trừ hai vế của phương trình với cùng một biểu thức mà không làm thay đổi điều kiện xác định của phương trình. "
            "Thứ hai, nhân hoặc chia hai vế của phương trình với cùng một số khác 0, hoặc với một biểu thức luôn có giá trị khác 0 trên tập xác định. "
            "Các em lưu ý: nếu nhân hai vế với một biểu thức có thể bằng 0, ta có thể làm xuất hiện nghiệm ngoại lai; còn nếu chia cho biểu thức có thể bằng 0, ta có thể làm mất nghiệm của phương trình."
        )
    },
    {
        "id": "b11_4_sec2.mp3",
        "outfile": "assets/audio/b11_4_sec2.mp3",
        "text": (
            "Mục 2. Phương trình sin x bằng m. Xét phương trình sin x bằng m. "
            "Vì giá trị của hàm số sin luôn nằm trong đoạn từ trừ 1 đến 1, nên nếu trị tuyệt đối của m lớn hơn 1, phương trình hoàn toàn vô nghiệm. "
            "Nếu trị tuyệt đối của m nhỏ hơn hoặc bằng 1, tồn tại duy nhất một góc alpha thuộc đoạn từ trừ pi chia 2 đến pi chia 2 sao cho sin alpha bằng m. "
            "Khi đó, phương trình có hai họ nghiệm: x bằng alpha cộng k hai pi, hoặc x bằng pi trừ alpha cộng k hai pi, với k thuộc Z. "
            "Nếu tính theo đơn vị độ: x bằng alpha độ cộng k ba trăm sáu mươi độ, hoặc x bằng một trăm tám mươi độ trừ alpha độ cộng k ba trăm sáu mươi độ. "
            "Các trường hợp đặc biệt cần ghi nhớ: sin x bằng 0 khi x bằng k pi; sin x bằng 1 khi x bằng pi chia 2 cộng k hai pi; và sin x bằng trừ 1 khi x bằng trừ pi chia 2 cộng k hai pi."
        )
    },
    {
        "id": "b11_4_sec3.mp3",
        "outfile": "assets/audio/b11_4_sec3.mp3",
        "text": (
            "Mục 3. Phương trình cos x bằng m. Xét phương trình cos x bằng m. "
            "Tương tự như hàm sin, phương trình vô nghiệm nếu trị tuyệt đối của m lớn hơn 1. "
            "Nếu trị tuyệt đối của m nhỏ hơn hoặc bằng 1, tồn tại duy nhất một góc alpha thuộc đoạn từ 0 đến pi sao cho cos alpha bằng m. "
            "Khi đó, phương trình cos x bằng cos alpha cho ta hai họ nghiệm đối nhau: x bằng alpha cộng k hai pi, hoặc x bằng trừ alpha cộng k hai pi, ta có thể viết gọn là x bằng cộng trừ alpha cộng k hai pi, với k thuộc Z. "
            "Nếu tính theo đơn vị độ: x bằng cộng trừ alpha độ cộng k ba trăm sáu mươi độ. "
            "Các trường hợp đặc biệt: cos x bằng 0 khi x bằng pi chia 2 cộng k pi; cos x bằng 1 khi x bằng k hai pi; và cos x bằng trừ 1 khi x bằng pi cộng k hai pi."
        )
    },
    {
        "id": "b11_4_sec4.mp3",
        "outfile": "assets/audio/b11_4_sec4.mp3",
        "text": (
            "Mục 4. Phương trình tan x bằng m. Vì tập giá trị của hàm số tang là toàn bộ tập số thực R, nên phương trình tan x bằng m luôn luôn có nghiệm với mọi giá trị của m. "
            "Với mỗi m thuộc R, luôn tồn tại duy nhất một góc alpha thuộc khoảng từ trừ pi chia 2 đến pi chia 2 sao cho tan alpha bằng m. "
            "Khi đó, phương trình tan x bằng tan alpha có công thức nghiệm rất gọn: x bằng alpha cộng k pi, với k thuộc Z. "
            "Nếu tính theo đơn vị độ: x bằng alpha độ cộng k một trăm tám mươi độ. "
            "Các em chú ý: phương trình tan x chỉ xác định khi cos x khác 0, tức là x khác pi chia 2 cộng k pi; và chu kì nghiệm ở đây là k pi, chứ không phải k hai pi như ở hàm sin và côsin."
        )
    },
    {
        "id": "b11_4_sec5.mp3",
        "outfile": "assets/audio/b11_4_sec5.mp3",
        "text": (
            "Mục 5. Phương trình cotang x bằng m. Tương tự như hàm tang, tập giá trị của hàm côtang là toàn bộ trục số thực R, do đó phương trình cotang x bằng m luôn luôn có nghiệm với mọi số thực m. "
            "Với mỗi m thuộc R, luôn tồn tại duy nhất một góc alpha thuộc khoảng từ 0 đến pi sao cho cotang alpha bằng m. "
            "Khi đó, phương trình cotang x bằng cotang alpha có nghiệm là: x bằng alpha cộng k pi, với k thuộc Z. "
            "Nếu đo bằng đơn vị độ: x bằng alpha độ cộng k một trăm tám mươi độ. "
            "Điều kiện xác định của phương trình là sin x khác 0, tức là x khác k pi, với k thuộc Z."
        )
    },
    {
        "id": "b11_4_sec6.mp3",
        "outfile": "assets/audio/b11_4_sec6.mp3",
        "text": (
            "Mục 6. Sử dụng máy tính cầm tay tìm một góc khi biết giá trị lượng giác. "
            "Để tìm góc alpha khi biết giá trị sin, côsin hay tang, ta sử dụng các phím chức năng nghịch đảo trên máy tính: "
            "Đầu tiên, chọn đơn vị đo góc: bấm Shift Menu 2 để chọn đơn vị Độ hoặc Radian. "
            "Tiếp theo, bấm phím Shift rồi bấm sin, cos, hoặc tan, sau đó nhập giá trị m và ấn dấu bằng. "
            "Nếu muốn chuyển kết quả sang dạng độ, phút, giây, các em chỉ cần bấm thêm phím độ phút giây. "
            "Đặc biệt đối với côtang: vì máy tính không có phím côtang trực tiếp, ta áp dụng công thức cotang alpha bằng 1 chia tan alpha, do đó các em chỉ cần bấm Shift tan của một chia m là sẽ ra kết quả chính xác."
        )
    },
    {
        "id": "b11_4_wrapup.mp3",
        "outfile": "assets/audio/b11_4_wrapup.mp3",
        "text": (
            "Chốt kiến thức then chốt và Tổng kết bài học. Thầy chúc mừng các em đã xuất sắc hoàn thành nội dung bài học Phương trình lượng giác cơ bản! "
            "Hãy cùng Thầy ghi nhớ bảng vàng công thức nghiệm: "
            "Phương trình sin x bằng m có nghiệm khi trị tuyệt đối của m nhỏ hơn hoặc bằng 1, cho ra hai họ nghiệm là bù nhau, chu kì 2 pi. "
            "Phương trình cos x bằng m có nghiệm khi trị tuyệt đối của m nhỏ hơn hoặc bằng 1, cho ra hai họ nghiệm là đối nhau, chu kì 2 pi. "
            "Hai phương trình tan x bằng m và cotang x bằng m luôn luôn có nghiệm với mọi m thuộc R, chỉ có một họ nghiệm duy nhất và chu kì là pi. "
            "Bây giờ, các em hãy tự tin bước vào Phần 4 để thực hành giải các bài tập trắc nghiệm củng cố theo cấu trúc đề thi mới nhất nhé!"
        )
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
    timeout = aiohttp.ClientTimeout(total=30)
    async with aiohttp.ClientSession(timeout=timeout) as session:
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
                try:
                    msg = await asyncio.wait_for(ws.receive(), timeout=12.0)
                except asyncio.TimeoutError:
                    break
                if msg.type == aiohttp.WSMsgType.BINARY:
                    if len(msg.data) >= 2:
                        hlen = int.from_bytes(msg.data[:2], "big")
                        h_dict, data = get_headers_and_data(msg.data, hlen)
                        if h_dict.get(b"Path") == b"audio":
                            audio_bytes.extend(data)
                elif msg.type == aiohttp.WSMsgType.TEXT:
                    if "turn.end" in msg.data:
                        break
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.ERROR, aiohttp.WSMsgType.CLOSED):
                    break
            
            if len(audio_bytes) > 5000:
                os.makedirs(os.path.dirname(outfile), exist_ok=True)
                with open(outfile, 'wb') as f:
                    f.write(audio_bytes)
                print(f"[SUCCESS] {outfile}: {len(audio_bytes):,} bytes.", flush=True)
                return True
            else:
                print(f"[FAIL] {outfile}: Too few bytes ({len(audio_bytes)}).", flush=True)
                return False

async def main():
    os.makedirs("assets/audio", exist_ok=True)
    for idx, item in enumerate(AUDIOS):
        if os.path.exists(item["outfile"]) and os.path.getsize(item["outfile"]) > 50000:
            print(f"[{idx+1}/{len(AUDIOS)}] Skipping existing: {item['outfile']} ({os.path.getsize(item['outfile']):,} bytes)", flush=True)
            continue
        print(f"[{idx+1}/{len(AUDIOS)}] Generating {item['id']}...", flush=True)
        success = False
        for attempt in range(5):
            try:
                success = await generate_speech_fixed(item["text"], item["outfile"])
                if success:
                    break
            except Exception as e:
                print(f"  Attempt {attempt+1} failed: {e}", flush=True)
            await asyncio.sleep(2.0)
        if not success:
            print(f"FAILED to generate {item['id']}", flush=True)
        await asyncio.sleep(1.0)

    # Package cache
    print("\nPackaging Base64 audio cache into js/b11-4-audio-cache.js ...", flush=True)
    cache = {}
    for item in AUDIOS:
        outfile = item["outfile"]
        fname = os.path.basename(outfile)
        rel_key = outfile.replace("\\", "/")
        if os.path.exists(outfile) and os.path.getsize(outfile) > 1000:
            b64 = base64.b64encode(open(outfile, "rb").read()).decode("utf-8")
            data_uri = f"data:audio/mp3;base64,{b64}"
            cache[fname] = data_uri
            cache[rel_key] = data_uri
            print(f"  Cached {fname}: {os.path.getsize(outfile):,} bytes", flush=True)
        else:
            print(f"  WARNING Missing audio: {outfile}", flush=True)
            
    out_file = "js/b11-4-audio-cache.js"
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("// Audio Cache Base64 - Bài 4 Lớp 11: Phương trình lượng giác cơ bản\n")
        f.write("// ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại\n")
        f.write("window.B11_4_AUDIO_CACHE = ")
        json.dump(cache, f, ensure_ascii=False)
        f.write(";\n")
        f.write("if (typeof window !== 'undefined') window.AUDIO_CACHE = Object.assign(window.AUDIO_CACHE || {}, window.B11_4_AUDIO_CACHE);\n")

    print(f"\nWrote {out_file} ({os.path.getsize(out_file):,} bytes)")

    # Netlify synchronization
    os.makedirs("BAN_CAP_NHAT_NETLIFY/assets/audio", exist_ok=True)
    os.makedirs("BAN_CAP_NHAT_NETLIFY/js", exist_ok=True)
    shutil.copy2(out_file, "BAN_CAP_NHAT_NETLIFY/js/b11-4-audio-cache.js")
    for item in AUDIOS:
        if os.path.exists(item["outfile"]):
            shutil.copy2(item["outfile"], os.path.join("BAN_CAP_NHAT_NETLIFY", item["outfile"]))
    print("Synchronized all audio and cache to BAN_CAP_NHAT_NETLIFY!")

if __name__ == "__main__":
    asyncio.run(main())
