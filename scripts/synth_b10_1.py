# -*- coding: utf-8 -*-
import asyncio
import aiohttp
import os, base64, json
from edge_tts.communicate import *
from edge_tts.constants import *
from edge_tts.drm import DRM

VOICE = "vi-VN-NamMinhNeural"

tasks = [
    ("assets/audio/b10_1_welcome.mp3",
     "Thầy Sáng chào toàn thể các em học sinh lớp 10 thân yêu! Chào mừng các em bước vào chương trình Toán Trung học phổ thông với Chương 1: Mệnh đề và Tập hợp. Bài học đầu tiên hôm nay, Thầy trò mình sẽ cùng khám phá Mệnh đề – nền tảng tư duy logic cốt lõi của toán học và khoa học máy tính hiện đại. Từ những câu nói khẳng định đúng sai giản dị hàng ngày đến các suy luận logic phức tạp, mệnh đề sẽ giúp các em rèn luyện tư duy chặt chẽ, chính xác và sắc bén. Thầy chúc các em có một buổi học thật hào hứng và tiếp thu trọn vẹn kiến thức!"),

    ("assets/audio/b10_1_goals.mp3",
     "Phần 2. Mục tiêu và yêu cầu cần đạt của bài học. Sau bài học này, các em cần đạt được các yêu cầu trọng tâm sau đây: Thứ nhất: Nhận biết và phân biệt được mệnh đề logic, mệnh đề đúng, mệnh đề sai và mệnh đề chứa biến. Thứ hai: Thiết lập và phát biểu được mệnh đề phủ định, mệnh đề kéo theo, mệnh đề đảo và mệnh đề tương đương. Thứ ba: Hiểu và sử dụng thành thạo các thuật ngữ điều kiện cần, điều kiện đủ, điều kiện cần và đủ trong các định lí toán học. Thứ tư: Biết cách thiết lập, phát biểu và xét tính đúng sai của các mệnh đề có chứa kí hiệu với mọi và tồn tại."),

    ("assets/audio/b10_1_hook.mp3",
     "Phần 3. Tiến trình bài học. Tình huống mở đầu. Các em hãy quan sát bức tranh vẽ nghệ thuật đố vui đếm con vật trong sách giáo khoa. Bạn An quan sát và khẳng định: Có 5 con vật xuất hiện trong hình vẽ. Bạn Khoa lại khẳng định: Có 6 con vật xuất hiện trong hình vẽ. Trong đời sống hàng ngày, chúng ta liên tục đưa ra những lời khẳng định. Điều thú vị là mỗi câu nói của An hay Khoa dứt khoát chỉ có thể hoặc là đúng, hoặc là sai. Những câu khẳng định có tính đúng sai rõ ràng như vậy chính là đối tượng nghiên cứu đầu tiên của chúng ta: Mệnh đề logic."),

    ("assets/audio/b10_1_sec1.mp3",
     "Mục 1. Mệnh đề, mệnh đề chứa biến. Tiểu mục a. Mệnh đề. Trong toán học, mỗi mệnh đề phải hoặc đúng hoặc sai. Một mệnh đề không thể vừa đúng vừa sai. Ta thường dùng các chữ cái in hoa như P, Q, R để biểu thị các mệnh đề. Lưu ý rằng những câu hỏi nghi vấn, câu cảm thán hay câu cầu khiến không phải là mệnh đề vì chúng không xác định được tính đúng sai. Trong Luyện tập 1, câu 13 là số nguyên tố là mệnh đề đúng. Câu tổng độ dài hai cạnh bất kì của một tam giác nhỏ hơn cạnh còn lại là mệnh đề sai. Hai câu Bạn đã làm bài tập chưa và Thời tiết hôm nay thật đẹp không phải là mệnh đề. Tiểu mục b. Mệnh đề chứa biến. Xét câu n chia hết cho 2. Khi chưa biết giá trị cụ thể của n, ta chưa thể khẳng định câu này đúng hay sai, do đó nó chưa phải là mệnh đề. Nhưng khi thay n bằng một số cụ thể, chẳng hạn n bằng 5 thì được mệnh đề sai, n bằng 10 thì được mệnh đề đúng. Câu như vậy gọi là mệnh đề chứa biến."),

    ("assets/audio/b10_1_sec2.mp3",
     "Mục 2. Mệnh đề phủ định. Quan sát biển báo giao thông trong Hoạt động 2, Khoa nói: Đây là biển báo đường dành cho người đi bộ. An phản đối ý kiến của Khoa và khẳng định: Đây không phải là biển báo đường dành cho người đi bộ. Câu nói của An chính là mệnh đề phủ định câu nói của Khoa. Để phủ định một mệnh đề P, ta thường thêm hoặc bớt từ không hoặc không phải vào trước vị ngữ, kí hiệu là P gạch ngang trên đầu. Mệnh đề P và mệnh đề phủ định P là hai phát biểu hoàn toàn trái ngược nhau: Nếu P đúng thì mệnh đề phủ định sai, còn nếu P sai thì mệnh đề phủ định đúng."),

    ("assets/audio/b10_1_sec3.mp3",
     "Mục 3. Mệnh đề kéo theo, mệnh đề đảo. Tiểu mục a. Mệnh đề kéo theo. Mệnh đề có dạng Nếu P thì Q được gọi là mệnh đề kéo theo, kí hiệu là P suy ra Q. Mệnh đề P suy ra Q chỉ sai trong trường hợp duy nhất là P đúng nhưng Q sai. Trong các định lí toán học có dạng P suy ra Q, ta gọi P là giả thiết, Q là kết luận. Hoặc nói P là điều kiện đủ để có Q, còn Q là điều kiện cần để có P. Tiểu mục b. Mệnh đề đảo. Mệnh đề Q suy ra P được gọi là mệnh đề đảo của mệnh đề P suy ra Q. Các em cần đặc biệt lưu ý: Mệnh đề đảo của một mệnh đề đúng chưa chắc đã đúng. Ví dụ: Nếu tam giác A B C đều thì tam giác A B C cân là mệnh đề đúng, nhưng mệnh đề đảo: Nếu tam giác A B C cân thì tam giác A B C đều lại là mệnh đề sai."),

    ("assets/audio/b10_1_sec4.mp3",
     "Mục 4. Mệnh đề tương đương. Mệnh đề có dạng P nếu và chỉ nếu Q được gọi là mệnh đề tương đương, kí hiệu là P tương đương Q. Mệnh đề tương đương P tương đương Q đúng khi và chỉ khi cả hai mệnh đề kéo theo P suy ra Q và Q suy ra P đều cùng đúng. Khi đó, ta còn phát biểu: P tương đương với Q, hoặc P là điều kiện cần và đủ để có Q, hoặc P khi và chỉ khi Q. Ví dụ: Tứ giác A B C D là hình vuông khi và chỉ khi tứ giác A B C D là hình chữ nhật có hai đường chéo vuông góc với nhau."),

    ("assets/audio/b10_1_sec5.mp3",
     "Mục 5. Mệnh đề có chứa kí hiệu với mọi và tồn tại. Trong toán học, kí hiệu chữ A lộn ngược đọc là với mọi, nghĩa là tất cả các phần tử đều thỏa mãn tính chất. Kí hiệu chữ E quay ngược đọc là tồn tại, nghĩa là có ít nhất một phần tử thỏa mãn tính chất. Quy tắc phủ định rất quan trọng: Phủ định của mệnh đề với mọi x thuộc X thỏa mãn P x chính là tồn tại x thuộc X sao cho không thỏa mãn P x. Ngược lại, phủ định của mệnh đề tồn tại x thuộc X thỏa mãn P x là với mọi x thuộc X đều không thỏa mãn P x."),

    ("assets/audio/b10_1_wrapup.mp3",
     "Chốt kiến thức then chốt. Như vậy các em đã nắm vững toàn bộ các khái niệm cốt lõi về mệnh đề. Về lịch sử toán học, Lôgic mệnh đề lần đầu tiên được phát triển có hệ thống bởi nhà triết học Hy Lạp Aristotle cách đây hơn 2300 năm, và sau đó được nhà toán học George Boole đại số hóa vào năm 1854 trong công trình Các định luật tư duy, mở đường cho sự ra đời của máy tính điện tử hiện đại. Mẹo của Thầy Sáng: Để chứng minh một mệnh đề với mọi là sai, các em chỉ cần tìm ra một phản ví dụ duy nhất. Bây giờ, các em hãy cùng bước sang Phần 4 để làm bài tập trắc nghiệm củng cố nhé!")
]

async def synth_single(text, outfile):
    print(f"Synthesizing {outfile}...", flush=True)
    conn_id = connect_id()
    url = f"{WSS_URL}&ConnectionId={conn_id}&Sec-MS-GEC={DRM.generate_sec_ms_gec()}&Sec-MS-GEC-Version={SEC_MS_GEC_VERSION}"
    headers = DRM.headers_with_muid(WSS_HEADERS)
    async with aiohttp.ClientSession() as session:
        async with session.ws_connect(url, compress=15, headers=headers, ssl=None, timeout=aiohttp.ClientTimeout(total=30)) as ws:
            ts = date_to_string()
            cmd = f"X-Timestamp:{ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n" + '{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"true"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}\r\n'
            await ws.send_str(cmd)
            cfg = TTSConfig(VOICE, "+0%", "+0%", "+0Hz", "WordBoundary")
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
            
            if len(audio_bytes) > 5000:
                os.makedirs(os.path.dirname(outfile), exist_ok=True)
                with open(outfile, "wb") as f:
                    f.write(audio_bytes)
                print(f"[SUCCESS] {outfile}: {len(audio_bytes)} bytes", flush=True)
                return True
            else:
                print(f"[RETRY] {outfile} got {len(audio_bytes)} bytes", flush=True)
                return False

async def main():
    for outfile, text in tasks:
        success = False
        for attempt in range(1, 6):
            try:
                success = await synth_single(text, outfile)
                if success:
                    break
            except Exception as e:
                print(f"Attempt {attempt} failed for {outfile}: {e}", flush=True)
            await asyncio.sleep(2)
        if not success:
            print(f"[ERROR] Could not synthesize {outfile}", flush=True)
        await asyncio.sleep(1)

    print("Building js/b10-1-audio-cache.js...", flush=True)
    all_b10_1 = [
        "assets/audio/b10_1_welcome.mp3",
        "assets/audio/b10_1_goals.mp3",
        "assets/audio/b10_1_hook.mp3",
        "assets/audio/b10_1_sec1.mp3",
        "assets/audio/b10_1_sec2.mp3",
        "assets/audio/b10_1_sec3.mp3",
        "assets/audio/b10_1_sec4.mp3",
        "assets/audio/b10_1_sec5.mp3",
        "assets/audio/b10_1_wrapup.mp3"
    ]

    cache = {}
    for p in all_b10_1:
        if os.path.exists(p) and os.path.getsize(p) > 1000:
            b64 = base64.b64encode(open(p, 'rb').read()).decode('utf-8')
            fname = p.split('/')[-1]
            cache[fname] = f"data:audio/mp3;base64,{b64}"
            cache[p] = f"data:audio/mp3;base64,{b64}"
            print(f"Cached {p}: {os.path.getsize(p)} bytes", flush=True)

    with open('js/b10-1-audio-cache.js', 'w', encoding='utf-8') as f:
        f.write(f"// Cache Base64 Audio cho Bài 1 Lớp 10 (Mệnh đề)\n// Tác giả: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\nwindow.B10_1_AUDIO_CACHE = {json.dumps(cache, ensure_ascii=False)};\n")
    print("[ALL DONE] js/b10-1-audio-cache.js created successfully!", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
