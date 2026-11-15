# -*- coding: utf-8 -*-
"""
Generate all remaining audio files for Lesson 3 and Lesson 4
using fresh sessions per file.
"""

import asyncio
import aiohttp
import os
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

AUDIOS = [
    # BÀI 3
    ("assets/audio/b10_3_welcome.mp3", "Thầy Sáng thân ái chào toàn thể các em học sinh Lớp 10! Hôm nay, Thầy trò mình cùng bước vào Chương hai: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn, bắt đầu với Bài học số 3: Bất phương trình bậc nhất hai ẩn. Đây là cầu nối tuyệt vời giữa đại số và hình học toạ độ phẳng, giúp các em giải quyết những bài toán kinh tế, sản xuất và đời sống vô cùng thực tế. Nào, các em hãy chuẩn bị sách vở, thước kẻ và cùng Thầy khám phá bài học với trọn vẹn niềm đam mê nhé!"),
    ("assets/audio/b10_3_goals.mp3", "Mục tiêu trọng tâm của bài học: Sau khi hoàn thành bài học này, các em cần đạt được bốn yêu cầu sau: Thứ nhất, nhận biết chính xác bất phương trình bậc nhất hai ẩn và viết đúng dạng tổng quát. Thứ hai, hiểu rõ khái niệm nghiệm và chỉ ra được các nghiệm của bất phương trình. Thứ ba, nắm vững phương pháp biểu diễn miền nghiệm trên mặt phẳng toạ độ Ô ích y, phân biệt bờ nét liền và bờ nét đứt. Thứ tư, vận dụng thành thạo vào giải quyết các bài toán kinh tế thực tế như bài toán rạp chiếu phim bù lỗ hay cước viễn thông."),
    ("assets/audio/b10_3_hook.mp3", "Tình huống mở đầu thực tế: Nhân dịp Quốc tế Thiếu nhi một tháng sáu, một rạp chiếu phim phục vụ bộ phim hoạt hình với hai loại vé: vé loại 1 dành cho trẻ em giá 50 nghìn đồng và vé loại 2 dành cho người lớn giá 100 nghìn đồng. Để không phải bù lỗ, doanh thu tiền vé phải đạt tối thiểu 20 triệu đồng. Vậy khi nào rạp chiếu phim phải chịu lỗ, và khi nào rạp đạt điểm hoà vốn hoặc có lãi? Chúng ta cùng lập mô hình toán học để tìm lời giải đáp ngay sau đây."),
    ("assets/audio/b10_3_sec1.mp3", "Mục một, Khái niệm bất phương trình bậc nhất hai ẩn: Bất phương trình bậc nhất hai ẩn ích và y có dạng tổng quát là a nhân ích cộng b nhân y bé hơn hoặc bằng c, hoặc lớn hơn hoặc bằng c, bé hơn c, lớn hơn c. Trong đó a, b, c là các số thực đã cho, với a và b không đồng thời bằng không. Mỗi cặp số ích không, y không thoả mãn bất đẳng thức được gọi là một nghiệm. Các em chú ý: một bất phương trình bậc nhất hai ẩn luôn có vô số nghiệm trên tập số thực."),
    ("assets/audio/b10_3_sec2.mp3", "Mục hai, Biểu diễn miền nghiệm trên mặt phẳng toạ độ: Đường thẳng d có phương trình a ích cộng b y bằng c chia mặt phẳng toạ độ thành hai nửa mặt phẳng bờ d. Để xác định miền nghiệm, ta thực hiện bốn bước: Bước một, vẽ đường thẳng d. Bước hai, lấy một điểm kiểm tra M không thuộc d, thông thường là gốc toạ độ Ô nếu c khác không. Bước ba, thay toạ độ điểm M vào biểu thức để so sánh. Bước bốn, kết luận và gạch bỏ phần mặt phẳng không phải là nghiệm. Đặc biệt lưu ý: nếu bất phương trình có dấu ngặt bé hơn hoặc lớn hơn thì bờ d được vẽ bằng nét đứt."),
    ("assets/audio/b10_3_sec3.mp3", "Mục ba, Vận dụng giải quyết bài toán thực tế: Trở lại bài toán rạp chiếu phim, điều kiện để rạp phải bù lỗ là ích cộng hai y bé hơn 400, với ích và y là các số nguyên không âm. Miền nghiệm là miền tam giác Ô A B không kể cạnh A B. Nếu rạp bán được 100 vé loại một và 100 vé loại hai thì tổng tiền mới đạt 15 triệu, nhỏ hơn 20 triệu nên rạp bị lỗ. Nhưng nếu bán được 200 vé loại một và 100 vé loại hai thì rạp đạt đúng 20 triệu, vừa vặn hoà vốn."),
    ("assets/audio/b10_3_wrapup.mp3", "Tổng kết bài học: Thầy muốn các em ghi nhớ ba từ khoá cốt lõi: Dạng tổng quát bậc nhất hai ẩn, quy tắc chọn điểm thử gốc toạ độ Ô, và quy ước bờ nét liền khi có dấu bằng, bờ nét đứt khi dấu ngặt. Bây giờ, các em hãy cùng Thầy bước sang Phần bốn để thử sức với các câu hỏi trắc nghiệm đa dạng và nhận điểm số tuyệt đối nhé!"),

    # BÀI 4
    ("assets/audio/b10_4_welcome.mp3", "Thầy Sáng chào các em học sinh Lớp 10! Tiếp nối thành công của Bài 3, hôm nay chúng ta bước sang Bài 4: Hệ bất phương trình bậc nhất hai ẩn. Đây là một bài học mang tính ứng dụng kinh tế đỉnh cao, đặt nền móng cho lý thuyết quy hoạch tuyến tính, công cụ mà các nhà kinh tế học và doanh nghiệp sử dụng hàng ngày để tối đa hoá lợi nhuận và tối thiểu hoá chi phí. Thầy chúc các em có một buổi học thật hào hứng và hiệu quả!"),
    ("assets/audio/b10_4_goals.mp3", "Mục tiêu bài học cần đạt: Sau khi học xong Bài 4, các em cần đạt được bốn năng lực cốt lõi: Thứ nhất, nhận biết và thiết lập được hệ bất phương trình bậc nhất hai ẩn từ các điều kiện ràng buộc thực tiễn. Thứ hai, biểu diễn chính xác miền nghiệm của hệ trên mặt phẳng toạ độ bằng phương pháp giao các miền nghiệm. Thứ ba, thấu hiểu và vận dụng định lí cực trị: giá trị lớn nhất hay nhỏ nhất của biểu thức mục tiêu luôn đạt được tại các đỉnh của miền đa giác. Thứ tư, giải quyết xuất sắc các bài toán kinh doanh, sản xuất và dinh dưỡng thực tế."),
    ("assets/audio/b10_4_hook.mp3", "Tình huống kinh doanh điều hoà: Một cửa hàng điện lạnh dự định kinh doanh máy điều hoà hai chiều và một chiều với số vốn đầu tư không vượt quá 1,2 tỉ đồng. Giá mua vào lần lượt là 20 triệu và 10 triệu đồng mỗi máy, lợi nhuận dự kiến là 3,5 triệu và 2 triệu đồng mỗi máy. Nhu cầu thị trường không quá 100 máy cả hai loại. Chủ cửa hàng cần đầu tư nhập bao nhiêu máy mỗi loại để thu được lợi nhuận cao nhất? Toán học sẽ cho chúng ta đáp án chính xác tới từng đồng."),
    ("assets/audio/b10_4_sec1.mp3", "Mục một, Khái niệm hệ bất phương trình bậc nhất hai ẩn: Hệ bất phương trình bậc nhất hai ẩn là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn. Cặp số ích không, y không là nghiệm của hệ khi và chỉ khi nó đồng thời là nghiệm của tất cả các bất phương trình trong hệ. Trong bài toán điều hoà, ta có hệ bốn ràng buộc: ích không âm, y không âm, ích cộng y bé hơn hoặc bằng 100, và 2 ích cộng y bé hơn hoặc bằng 120."),
    ("assets/audio/b10_4_sec2.mp3", "Mục hai, Biểu diễn miền nghiệm của hệ trên mặt phẳng toạ độ: Miền nghiệm của hệ là phần giao của các miền nghiệm của từng bất phương trình. Quy tắc thực hành: Trên cùng một mặt phẳng toạ độ, ta vẽ các đường thẳng bờ, xác định miền nghiệm của mỗi bất phương trình và gạch bỏ miền không thích hợp. Miền không bị gạch cuối cùng chính là miền nghiệm của hệ, thường là một miền đa giác lồi như tam giác, tứ giác."),
    ("assets/audio/b10_4_sec3.mp3", "Mục ba, Ứng dụng giải bài toán quy hoạch tuyến tính thực tế: Tổng quát, người ta đã chứng minh được rằng: Giá trị lớn nhất hay nhỏ nhất của biểu thức mục tiêu F bằng a ích cộng b y trên miền đa giác luôn đạt được tại một trong các đỉnh của đa giác đó. Với bài toán điều hoà, miền nghiệm là tứ giác Ô A B C với bốn đỉnh: Ô toạ độ 0 0, A toạ độ 0 100, B toạ độ 20 80, và C toạ độ 60 0. Thay vào biểu thức lợi nhuận, ta thấy tại đỉnh B toạ độ 20 80, lợi nhuận đạt mức cực đại là 230 triệu đồng. Như vậy, quyết định tối ưu là nhập 20 máy hai chiều và 80 máy một chiều."),
    ("assets/audio/b10_4_wrapup.mp3", "Tổng kết bài học: Bài học số 4 mang lại cho các em quy trình bốn bước giải quyết bài toán quy hoạch tuyến tính: Bước một, gọi ẩn và thiết lập hệ bất phương trình. Bước hai, vẽ miền đa giác nghiệm. Bước ba, tìm toạ độ các đỉnh của miền đa giác. Bước bốn, tính và so sánh giá trị biểu thức mục tiêu tại các đỉnh để đưa ra kết luận tối ưu. Thầy mời các em cùng bước vào Phần bốn để luyện tập và làm chủ dạng toán này nhé!")
]

async def generate_single(outfile, text):
    conn_id = connect_id()
    url = f"{WSS_URL}&ConnectionId={conn_id}&Sec-MS-GEC={DRM.generate_sec_ms_gec()}&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
    headers = DRM.headers_with_muid(WSS_HEADERS)
    timeout = aiohttp.ClientTimeout(total=25)
    async with aiohttp.ClientSession(timeout=timeout) as session:
        async with session.ws_connect(url, compress=15, headers=headers, ssl=None) as ws:
            ts = date_to_string()
            cmd = f"X-Timestamp:{ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n" + '{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}\r\n'
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
            
            if len(audio_bytes) > 1000:
                os.makedirs(os.path.dirname(outfile), exist_ok=True)
                with open(outfile, "wb") as f:
                    f.write(audio_bytes)
                print(f"[SUCCESS] {outfile}: {len(audio_bytes)} bytes", flush=True)
                return True
            return False

async def main():
    for outfile, text in AUDIOS:
        if os.path.exists(outfile) and os.path.getsize(outfile) > 30000:
            print(f"[SKIP] {outfile} exists ({os.path.getsize(outfile)} bytes)", flush=True)
            continue
        print(f"Generating {outfile}...", flush=True)
        for attempt in range(5):
            try:
                ok = await generate_single(outfile, text)
                if ok:
                    break
            except Exception as e:
                print(f"  Attempt {attempt+1} err: {e}", flush=True)
            await asyncio.sleep(1.0)
        await asyncio.sleep(0.5)
    print("ALL DONE!", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
