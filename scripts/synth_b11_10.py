# -*- coding: utf-8 -*-
import asyncio, aiohttp, os, base64, json, re
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

VOICE = "vi-VN-NamMinhNeural"

tasks = [
    ("assets/audio/b11_10_hook.mp3",
     "Tình huống mở đầu. Trong thực tế đời sống, các vật thể quanh chúng ta như hộp phấn, cục tẩy, máy in 3D hay khung xe ô tô thiết kế trên phần mềm đồ họa CAD đều là các khối hình trong không gian ba chiều. Các em có bao giờ tự hỏi, tại sao chiếc bàn bốn chân rất dễ bị bập bênh khi mặt đất gồ ghề, trong khi chiếc giá đỡ máy ảnh ba chân hay chiếc kiềng ba chân đun bếp luôn đứng vững vàng trên mọi địa hình? Đó chính là nhờ một nguyên lí cơ bản của hình học không gian: qua ba điểm không thẳng hàng luôn xác định duy nhất một mặt phẳng. Hãy cùng thầy tìm hiểu bản chất toán học tuyệt vời này ngay sau đây!"),

    ("assets/audio/b11_10_sec1.mp3",
     "Mục 1. Khái niệm mở đầu. Tiểu mục a. Mặt phẳng và cách biểu diễn mặt phẳng trong không gian. Mặt bảng, màn hình máy tính hay mặt hồ phẳng lặng là những hình ảnh trực quan của một phần mặt phẳng. Mặt phẳng không có bề dày và mở rộng vô tận về mọi phía. Để biểu diễn mặt phẳng, ta thường vẽ một hình bình hành và ghi tên mặt phẳng vào một góc, kí hiệu là mở ngoặc đơn P đóng ngoặc đơn, hoặc mở ngoặc đơn an pha đóng ngoặc đơn. Tiểu mục b. Quan hệ liên thuộc và quy tắc vẽ hình không gian. Nếu điểm A thuộc mặt phẳng P, ta kí hiệu A thuộc P. Nếu điểm B không thuộc mặt phẳng P, ta kí hiệu B không thuộc P. Khi vẽ hình biểu diễn của một hình không gian, các em cần tuân thủ nghiêm ngặt quy tắc nét vẽ: dùng nét liền để biểu diễn cho những đường nhìn thấy được, và dùng nét đứt đoạn để biểu diễn cho những đường bị che khuất."),

    ("assets/audio/b11_10_sec2.mp3",
     "Mục 2. Các tính chất thừa nhận của hình học không gian. Tiểu mục a. Ba tính chất xác định đường thẳng, mặt phẳng và điểm đồng phẳng. Tính chất 1: Có một và chỉ một đường thẳng đi qua hai điểm phân biệt. Tính chất 2: Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng, kí hiệu là mặt phẳng A B C. Tính chất 3: Tồn tại bốn điểm không cùng thuộc một mặt phẳng. Nếu nhiều điểm cùng thuộc một mặt phẳng, ta nói các điểm đó đồng phẳng. Bốn điểm không đồng phẳng sẽ tạo nên một tứ diện. Tiểu mục b. Vị trí đường thẳng trên mặt phẳng và giao tuyến của hai mặt phẳng. Tính chất 4: Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì tất cả các điểm của đường thẳng đều nằm trong mặt phẳng đó, kí hiệu là đường thẳng d con của mặt phẳng P. Tính chất 5: Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất đi qua điểm chung đó, đường thẳng này gọi là giao tuyến của hai mặt phẳng, kí hiệu d bằng P giao Q. Tính chất 6: Trên mỗi mặt phẳng, tất cả các định lí đã biết trong hình học phẳng đều đúng."),

    ("assets/audio/b11_10_sec3.mp3",
     "Mục 3. Ba cách xác định một mặt phẳng và ứng dụng thực tiễn. Tiểu mục a. Ba cách xác định mặt phẳng. Ta có ba cách để xác định duy nhất một mặt phẳng trong không gian: Cách thứ nhất, qua ba điểm không thẳng hàng A, B, C, kí hiệu là mặt phẳng A B C. Cách thứ hai, qua một điểm A và một đường thẳng d không đi qua điểm A, kí hiệu là mặt phẳng A d. Cách thứ ba, qua hai đường thẳng cắt nhau a và b, kí hiệu là mặt phẳng a b. Tiểu mục b. Phương pháp tìm giao tuyến của hai mặt phẳng và ứng dụng giữ cửa. Để tìm giao tuyến của hai mặt phẳng, ta tìm hai điểm chung phân biệt của chúng, đường thẳng nối hai điểm chung chính là giao tuyến cần tìm. Trong đời sống, phụ kiện nam châm giữ cánh cửa hoạt động dựa trên việc cố định cánh cửa trên mặt phẳng tiếp xúc khi nam châm hút chặt, ngăn gió va đập làm hỏng đồ đạc."),

    ("assets/audio/b11_10_sec4.mp3",
     "Mục 4. Hình chóp và hình tứ diện. Tiểu mục a. Khái niệm và các yếu tố của hình chóp. Cho đa giác lồi A 1 A 2 đến A n nằm trong mặt phẳng đáy và một điểm S nằm ngoài mặt phẳng đó. Nối S với các đỉnh của đáy, ta được hình chóp S A 1 A 2 đến A n. Điểm S gọi là đỉnh, đa giác đáy gọi là mặt đáy, các tam giác nối đỉnh với từng cạnh đáy gọi là các mặt bên, các đoạn thẳng nối đỉnh S với các đỉnh đáy là các cạnh bên. Nếu đáy là tam giác, ta gọi là hình chóp tam giác; nếu đáy là tứ giác, ta gọi là hình chóp tứ giác. Tiểu mục b. Khái niệm hình tứ diện và phương pháp tìm giao điểm. Cho bốn điểm A, B, C, D không đồng phẳng, hình tạo bởi bốn tam giác A B C, A C D, A B D và B C D được gọi là hình tứ diện A B C D. Để tìm giao điểm của một đường thẳng với một mặt phẳng, ta tìm một mặt phẳng phụ chứa đường thẳng đó, rồi tìm giao tuyến của mặt phẳng phụ với mặt phẳng đã cho. Giao điểm của đường thẳng ban đầu với giao tuyến vừa tìm được chính là giao điểm cần xác định."),

    ("assets/audio/b11_10_wrapup.mp3",
     "Chốt kiến thức then chốt bài học số 10. Thầy Sáng dặn dò các em hai phương pháp cốt lõi cần khắc cốt ghi tâm: Thứ nhất, để tìm giao tuyến của hai mặt phẳng, hãy luôn săn tìm hai điểm chung phân biệt. Nối hai điểm chung đó lại, ta được đường giao tuyến duy nhất. Thứ hai, để tìm giao điểm của đường thẳng d và mặt phẳng P, hãy khéo léo chọn một mặt phẳng phụ Q chứa d, tìm giao tuyến a của Q và P, rồi cho d cắt a tại điểm mong muốn. Chúc các em tự tin chinh phục phần bài tập trắc nghiệm củng cố ngay sau đây!")
]

async def synth_one(text, outfile):
    if os.path.exists(outfile) and os.path.getsize(outfile) > 30000:
        print(f"[EXISTS] {outfile} ({os.path.getsize(outfile)} bytes)", flush=True)
        return True

    print(f"Synthesizing {outfile}...", flush=True)
    conn_id = connect_id()
    url = f"{WSS_URL}&ConnectionId={conn_id}&Sec-MS-GEC={DRM.generate_sec_ms_gec()}&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
    headers = DRM.headers_with_muid(WSS_HEADERS)
    async with aiohttp.ClientSession() as session:
        async with session.ws_connect(url, compress=15, headers=headers) as ws:
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
            cfg = TTSConfig(VOICE, "+0%", "+0%", "+0Hz", "WordBoundary")
            ssml_body = mkssml(cfg, text)
            ssml_req = ssml_headers_plus_data(connect_id(), date_to_string(), ssml_body)
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
                elif msg.type in (aiohttp.WSMsgType.CLOSE, aiohttp.WSMsgType.ERROR, aiohttp.WSMsgType.CLOSED):
                    break
            
            if len(audio_bytes) > 20000:
                os.makedirs(os.path.dirname(outfile), exist_ok=True)
                with open(outfile, "wb") as f:
                    f.write(audio_bytes)
                print(f"[OK] Saved {outfile} ({len(audio_bytes)} bytes)", flush=True)
                return True
            else:
                print(f"[FAIL] {outfile} got {len(audio_bytes)} bytes", flush=True)
                return False

async def main():
    for outfile, text in tasks:
        for attempt in range(1, 10):
            ok = await synth_one(text, outfile)
            if ok:
                break
            await asyncio.sleep(2)
        await asyncio.sleep(1)

    print("Syntheses finished. Creating b11-10-audio-cache.js...", flush=True)
    all_b11_10 = [
        "assets/audio/b11_10_welcome.mp3",
        "assets/audio/b11_10_goals.mp3",
        "assets/audio/b11_10_hook.mp3",
        "assets/audio/b11_10_sec1.mp3",
        "assets/audio/b11_10_sec2.mp3",
        "assets/audio/b11_10_sec3.mp3",
        "assets/audio/b11_10_sec4.mp3",
        "assets/audio/b11_10_wrapup.mp3"
    ]

    cache = {}
    for p in all_b11_10:
        if os.path.exists(p) and os.path.getsize(p) > 1000:
            b64 = base64.b64encode(open(p, 'rb').read()).decode('utf-8')
            fname = p.split('/')[-1]
            cache[fname] = f"data:audio/mp3;base64,{b64}"
            cache[p] = f"data:audio/mp3;base64,{b64}"
            print(f"Cached {p}: {os.path.getsize(p)} bytes")

    with open('js/b11-10-audio-cache.js', 'w', encoding='utf-8') as f:
        f.write(f"// Cache Base64 Audio cho Bài 10 Lớp 11 (Đường thẳng và mặt phẳng trong không gian)\n// Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\nwindow.B11_10_AUDIO_CACHE = {json.dumps(cache, ensure_ascii=False)};\n")
    print("Created js/b11-10-audio-cache.js successfully!", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
