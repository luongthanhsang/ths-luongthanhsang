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
        "id": "b11_3_welcome.mp3",
        "outfile": "assets/audio/b11_3_welcome.mp3",
        "text": "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Hôm nay, thầy trò chúng ta sẽ bước vào Bài 3: Hàm số lượng giác. Ở các bài trước, các em đã làm quen với góc lượng giác và các công thức biến đổi lượng giác toàn năng. Bây giờ, chúng ta sẽ mở rộng góc nhìn từ hình học sang giải tích: mỗi số thực x cho ta một giá trị sin, cos, tan, hoặc cotang, từ đó hình thành nên bốn hàm số lượng giác cơ bản. Các hàm số này có tính chất vô cùng đặc biệt: tính chẵn lẻ đối xứng, và tính tuần hoàn lặp lại sau mỗi chu kì. Đồ thị hình sin nhấp nhô nhịp nhàng chính là chìa khóa để mô tả thế giới xung quanh ta: từ nhịp thở luồng khí hô hấp trong y học, dao động điều hòa của con lắc trong vật lý, cho đến những con sóng biển nhấp nhô ngoài đại dương hay dòng điện xoay chiều thắp sáng mọi nhà. Các em hãy chuẩn bị sách vở, tập trung lắng nghe và cùng Thầy khám phá thế giới hàm số lượng giác đầy kì thú nhé!"
    },
    {
        "id": "b11_3_goals.mp3",
        "outfile": "assets/audio/b11_3_goals.mp3",
        "text": "Phần 2. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần đạt được các yêu cầu trọng tâm sau: Thứ nhất, nhận biết và hiểu rõ định nghĩa của bốn hàm số lượng giác: y bằng sin x, y bằng cos x, y bằng tan x và y bằng cotang x; nắm chắc tập xác định và tập giá trị của từng hàm số. Thứ hai, hiểu khái niệm và phân biệt chính xác hàm số chẵn, hàm số lẻ và đặc trưng đối xứng của đồ thị qua trục tung hay gốc tọa độ. Thứ ba, hiểu bản chất hàm số tuần hoàn, xác định chu kì của sin và cos là hai pi, của tan và cotang là pi. Thứ tư, vẽ và phân tích thành thạo đồ thị của bốn hàm số lượng giác; giải thích được tính đồng biến, nghịch biến trên từng khoảng. Thứ năm, vận dụng kiến thức hàm số lượng giác để giải quyết các bài toán thực tiễn gắn liền với đời sống như nhịp thở hô hấp, dao động điều hòa và chiều cao sóng biển."
    },
    {
        "id": "b11_3_hook.mp3",
        "outfile": "assets/audio/b11_3_hook.mp3",
        "text": "Tình huống mở đầu: Vận tốc luồng khí hô hấp. Trong y học và sinh học, các nhà khoa học đã mô hình hóa vận tốc v tính bằng lít trên giây của luồng khí trong một chu kì hô hấp của một người ở trạng thái nghỉ ngơi bởi công thức: v bằng 0,85 nhân sin của pi t chia 3, trong đó t là thời gian tính bằng giây. Vận tốc dương ứng với quá trình hít vào, vận tốc âm ứng với quá trình thở ra. Từ công thức này, làm thế nào để chúng ta biết được một chu kì hô hấp đầy đủ kéo dài bao nhiêu giây? Trong một phút người đó thực hiện được bao nhiêu nhịp thở? Và ở những khoảng thời gian nào thì người đó đang hít vào hay thở ra? Câu trả lời nằm trọn vẹn trong các tính chất của hàm số lượng giác mà chúng ta sẽ cùng khám phá ngay sau đây."
    },
    {
        "id": "b11_3_sec1.mp3",
        "outfile": "assets/audio/b11_3_sec1.mp3",
        "text": "Mục 1. Định nghĩa các hàm số lượng giác. Trên đường tròn lượng giác gốc A(1; 0), với mỗi số thực x, ta xác định được duy nhất một điểm M sao cho số đo góc lượng giác OA, OM bằng x radian. Tung độ của điểm M chính là sin x, hoành độ của điểm M chính là cos x. Từ đó, ta có bốn hàm số lượng giác cơ bản: Thứ nhất, hàm số sin: y bằng sin x, có tập xác định là R. Thứ hai, hàm số côsin: y bằng cos x, có tập xác định là R. Thứ ba, hàm số tang: y bằng tan x bằng sin x chia cos x, xác định khi cos x khác 0, tức là x khác pi chia 2 cộng k pi, tập xác định là R trừ đi tập hợp các điểm pi chia 2 cộng k pi. Thứ tư, hàm số côtang: y bằng cotang x bằng cos x chia sin x, xác định khi sin x khác 0, tức là x khác k pi, tập xác định là R trừ đi tập hợp các điểm k pi, với k thuộc Z."
    },
    {
        "id": "b11_3_sec2a.mp3",
        "outfile": "assets/audio/b11_3_sec2a.mp3",
        "text": "Mục 2. Tiểu mục a: Hàm số chẵn và hàm số lẻ. Cho hàm số y bằng f(x) có tập xác định D đối xứng qua gốc tọa độ, tức là với mọi x thuộc D thì trừ x cũng thuộc D. Hàm số được gọi là hàm số chẵn nếu f của trừ x bằng f(x). Đồ thị của hàm số chẵn luôn nhận trục tung Oy làm trục đối xứng. Ngược lại, hàm số được gọi là hàm số lẻ nếu f của trừ x bằng trừ f(x). Đồ thị của hàm số lẻ luôn nhận gốc tọa độ O làm tâm đối xứng. Trong bốn hàm số lượng giác cơ bản, ta có: cos của trừ x bằng cos x nên hàm số y bằng cos x là hàm số chẵn; còn sin của trừ x bằng trừ sin x, tan của trừ x bằng trừ tan x, cotang của trừ x bằng trừ cotang x nên ba hàm số y bằng sin x, y bằng tan x và y bằng cotang x đều là các hàm số lẻ."
    },
    {
        "id": "b11_3_sec2b.mp3",
        "outfile": "assets/audio/b11_3_sec2b.mp3",
        "text": "Mục 2. Tiểu mục b: Hàm số tuần hoàn và chu kì. Một hàm số y bằng f(x) có tập xác định D được gọi là hàm số tuần hoàn nếu tồn tại một số thực T khác 0 sao cho với mọi x thuộc D, thì x cộng T thuộc D, x trừ T thuộc D, và f của x cộng T bằng f(x). Số T dương nhỏ nhất thỏa mãn điều kiện trên được gọi là chu kì của hàm số. Do tính chất lặp lại sau mỗi vòng tròn lượng giác, hàm số y bằng sin x và y bằng cos x là các hàm số tuần hoàn với chu kì nhỏ nhất là 2 pi; còn hàm số y bằng tan x và y bằng cotang x là các hàm số tuần hoàn với chu kì nhỏ nhất là pi. Tổng quát hơn, hàm số A nhân sin của omega x hoặc A nhân cos của omega x tuần hoàn với chu kì T bằng 2 pi chia trị tuyệt đối của omega."
    },
    {
        "id": "b11_3_sec3.mp3",
        "outfile": "assets/audio/b11_3_sec3.mp3",
        "text": "Mục 3. Đồ thị và tính chất của hàm số y bằng sin x. Hàm số y bằng sin x có tập xác định là R và tập giá trị là đoạn từ trừ 1 đến 1. Vì đây là hàm số lẻ nên đồ thị nhận gốc tọa độ O làm tâm đối xứng; và vì tuần hoàn với chu kì 2 pi nên đồ thị lặp lại sau mỗi khoảng cách 2 pi dọc theo trục hoành. Đồ thị là một đường cong hình sin lượn sóng liên tục. Trên đoạn từ trừ pi đến pi, đồ thị đi qua gốc O(0; 0), đạt cực đại bằng 1 tại điểm pi chia 2, đạt cực tiểu bằng trừ 1 tại điểm trừ pi chia 2. Hàm số đồng biến trên mỗi khoảng từ trừ pi chia 2 cộng k2pi đến pi chia 2 cộng k2pi; và nghịch biến trên mỗi khoảng từ pi chia 2 cộng k2pi đến 3 pi chia 2 cộng k2pi."
    },
    {
        "id": "b11_3_sec4.mp3",
        "outfile": "assets/audio/b11_3_sec4.mp3",
        "text": "Mục 4. Đồ thị và tính chất của hàm số y bằng cos x. Hàm số y bằng cos x có tập xác định là R và tập giá trị là đoạn từ trừ 1 đến 1. Vì là hàm số chẵn nên đồ thị nhận trục tung Oy làm trục đối xứng; và vì tuần hoàn với chu kì 2 pi nên đồ thị cũng là một đường cong hình sin lặp lại sau mỗi khoảng 2 pi. Đồ thị hàm số cos x có được bằng cách tịnh tiến đồ thị hàm số sin x sang trái một đoạn pi chia 2. Đồ thị cắt trục tung tại điểm (0; 1), cắt trục hoành tại các điểm pi chia 2 cộng k pi. Hàm số đồng biến trên mỗi khoảng từ trừ pi cộng k2pi đến k2pi; và nghịch biến trên mỗi khoảng từ k2pi đến pi cộng k2pi, với k thuộc Z."
    },
    {
        "id": "b11_3_sec5.mp3",
        "outfile": "assets/audio/b11_3_sec5.mp3",
        "text": "Mục 5. Đồ thị và tính chất của hàm số y bằng tan x. Hàm số y bằng tan x có tập xác định là R trừ các điểm pi chia 2 cộng k pi, tập giá trị là R. Vì là hàm số lẻ nên đồ thị nhận gốc tọa độ O làm tâm đối xứng; và tuần hoàn với chu kì là pi. Do đó ta chỉ cần khảo sát trên khoảng từ trừ pi chia 2 đến pi chia 2 rồi tịnh tiến theo chu kì pi. Trên mỗi khoảng xác định, hàm số luôn luôn đồng biến. Các đường thẳng x bằng pi chia 2 cộng k pi là các đường tiệm cận đứng của đồ thị, nghĩa là khi x tiến dần đến pi chia 2 từ bên trái, tan x tiến ra dương vô cực; còn khi tiến đến trừ pi chia 2 từ bên phải, tan x tiến ra âm vô cực."
    },
    {
        "id": "b11_3_sec6.mp3",
        "outfile": "assets/audio/b11_3_sec6.mp3",
        "text": "Mục 6. Đồ thị và tính chất của hàm số y bằng cotang x. Hàm số y bằng cotang x có tập xác định là R trừ các điểm k pi, tập giá trị là R. Vì là hàm số lẻ nên đồ thị nhận gốc tọa độ O làm tâm đối xứng; và tuần hoàn với chu kì là pi. Trên mỗi khoảng xác định từ k pi đến pi cộng k pi, hàm số luôn luôn nghịch biến, đồ thị đi dốc xuống từ trái sang phải. Các đường thẳng x bằng k pi chính là các đường tiệm cận đứng của đồ thị. Khi x tiến dần về 0 từ bên phải, cotang x tiến ra dương vô cực; còn khi x tiến dần về pi từ bên trái, cotang x tiến ra âm vô cực."
    },
    {
        "id": "b11_3_wrapup.mp3",
        "outfile": "assets/audio/b11_3_wrapup.mp3",
        "text": "Chốt kiến thức then chốt và Tổng kết bài học. Thầy chúc mừng các em đã xuất sắc hoàn thành trọn vẹn Bài 3: Hàm số lượng giác! Hãy cùng Thầy ghi nhớ bảng tổng kết vàng của 4 hàm số lượng giác: Về tập xác định: sin và cos xác định trên R; tan loại bỏ pi chia 2 cộng k pi; cotang loại bỏ k pi. Về tính chẵn lẻ: chỉ duy nhất cos x là hàm chẵn, còn sin x, tan x, cotang x đều là hàm lẻ. Về chu kì: sin và cos có chu kì 2 pi; tan và cotang có chu kì pi. Về biến thiên: tan luôn đồng biến, cotang luôn nghịch biến trên từng khoảng xác định. Bây giờ, các em hãy tự tin bước vào Phần 4 để chinh phục các câu hỏi trắc nghiệm theo chuẩn cấu trúc đề thi mới nhất nhé!"
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
    timeout = aiohttp.ClientTimeout(total=25)
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
        if os.path.exists(item["outfile"]) and os.path.getsize(item["outfile"]) > 10000:
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
    print("\nPackaging Base64 audio cache into js/b11-3-audio-cache.js ...", flush=True)
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
            
    out_file = "js/b11-3-audio-cache.js"
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("// Audio Cache Base64 - Bài 3 Lớp 11: Hàm số lượng giác\n")
        f.write("// ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại\n")
        f.write("window.B11_3_AUDIO_CACHE = ")
        json.dump(cache, f, ensure_ascii=False)
        f.write(";\n")
        f.write("if (typeof window !== 'undefined') window.AUDIO_CACHE = Object.assign(window.AUDIO_CACHE || {}, window.B11_3_AUDIO_CACHE);\n")

    print(f"\nWrote {out_file} ({os.path.getsize(out_file):,} bytes)")

    # Netlify synchronization
    os.makedirs("BAN_CAP_NHAT_NETLIFY/assets/audio", exist_ok=True)
    os.makedirs("BAN_CAP_NHAT_NETLIFY/js", exist_ok=True)
    shutil.copy2(out_file, "BAN_CAP_NHAT_NETLIFY/js/b11-3-audio-cache.js")
    for item in AUDIOS:
        if os.path.exists(item["outfile"]):
            shutil.copy2(item["outfile"], os.path.join("BAN_CAP_NHAT_NETLIFY", item["outfile"]))
    print("Synchronized all audio and cache to BAN_CAP_NHAT_NETLIFY!")

if __name__ == "__main__":
    asyncio.run(main())
