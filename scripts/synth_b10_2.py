# -*- coding: utf-8 -*-
import asyncio
import os, base64, json
import edge_tts

VOICE = "vi-VN-NamMinhNeural"

tasks = [
    ("assets/audio/b10_2_welcome.mp3",
     "Thầy Sáng chào toàn thể các em học sinh lớp 10 thân yêu! Chào mừng các em đến với Bài 2: Tập hợp và các phép toán trên tập hợp – một trong những nền tảng quan trọng nhất của toán học hiện đại. Nếu mệnh đề giúp chúng ta rèn luyện tư duy logic chính xác, thì tập hợp chính là ngôn ngữ phổ quát để gom nhóm, phân loại và xử lý mọi đối tượng toán học. Từ các tập hợp số quen thuộc như số tự nhiên, số nguyên, số thực cho đến các phép toán giao, hợp, hiệu và các khoảng, đoạn trên trục số, bài học này sẽ trang bị cho các em những công cụ đắc lực nhất để học tốt toàn bộ chương trình THPT. Thầy chúc các em có một buổi học thật hào hứng, tràn đầy năng lượng và làm chủ trọn vẹn kiến thức hôm nay!"),

    ("assets/audio/b10_2_goals.mp3",
     "Phần 2. Mục tiêu và yêu cầu cần đạt của bài học. Sau bài học này, các em cần đạt được các yêu cầu trọng tâm sau đây: Thứ nhất: Nhận biết và sử dụng đúng các khái niệm cơ bản về tập hợp: phần tử, tập con, tập hợp bằng nhau và tập hợp rỗng. Thứ hai: Thấu hiểu mối quan hệ giữa các tập hợp số tự nhiên N, số nguyên Z, số hữu tỉ Q, số thực R và thành thạo các tập con thường dùng của R gồm khoảng, đoạn, nửa khoảng. Thứ ba: Thực hiện chính xác các phép toán trên tập hợp: giao, hợp, hiệu và phần bù. Thứ tư: Sử dụng thành thạo biểu đồ Ven và trục số để biểu diễn tập hợp, giải quyết các bài toán thực tiễn và câu hỏi mô hình hóa dữ liệu."),

    ("assets/audio/b10_2_hook.mp3",
     "Phần 3. Tiến trình bài học. Tình huống mở đầu. Các em hãy quan sát giao diện họp trực tuyến của Câu lạc bộ Lịch sử trên màn hình. Câu lạc bộ có tất cả 12 thành viên, tổ chức hai chuyên đề thảo luận trực tuyến. Chuyên đề một có 7 bạn tham gia: Nam, Hương, Chi, Tú, Bình, Ngân, Khánh. Chuyên đề hai có 8 bạn tham gia: Hương, Chi, Tú, Khánh, Bình, Hân, Hiền, Lam. Bạn An thắc mắc: Có bao nhiêu thành viên tham gia cả hai chuyên đề, và có bao nhiêu thành viên của câu lạc bộ vắng mặt trong cả hai chuyên đề? Để giải quyết bài toán thực tế thú vị này, chúng ta sẽ cùng bước vào tìm hiểu ngôn ngữ Tập hợp và các phép toán giao, hợp, hiệu ngay sau đây!"),

    ("assets/audio/b10_2_sec1.mp3",
     "Mục 1. Các khái niệm cơ bản về tập hợp. Mục này gồm ba nội dung chính: a. Tập hợp; b. Tập hợp con; và c. Hai tập hợp bằng nhau. Trong tiểu mục a, các em cần nhớ: Một tập hợp thường được kí hiệu bằng chữ cái in hoa như A, B, C, S. Mỗi đối tượng trong tập hợp gọi là một phần tử. Kí hiệu x thuộc S nghĩa là x là phần tử của S. Kí hiệu x không thuộc S nghĩa là x không phải là phần tử của S. Ta có hai cách mô tả tập hợp: Cách một là liệt kê các phần tử; cách hai là chỉ ra tính chất đặc trưng. Số phần tử của tập S được kí hiệu là n mở ngoặc S đóng ngoặc. Tập hợp không chứa phần tử nào được gọi là tập hợp rỗng, kí hiệu là chữ O gạch chéo. Sang tiểu mục b, tập hợp con: Nếu mọi phần tử của tập hợp T đều là phần tử của tập hợp S thì ta nói T là tập hợp con của S, kí hiệu T chứa trong S. Quy ước: Tập rỗng là tập con của mọi tập hợp. Người ta thường dùng đường cong kín, gọi là biểu đồ Ven, để minh họa trực quan tập con. Ở tiểu mục c: Hai tập hợp S và T được gọi là bằng nhau nếu mỗi phần tử của T cũng là phần tử của S và ngược lại, kí hiệu S bằng T."),

    ("assets/audio/b10_2_sec2.mp3",
     "Mục 2. Các tập hợp số. Mục này gồm hai nội dung trọng tâm: a. Mối quan hệ giữa các tập hợp số; và b. Các tập con thường dùng của tập số thực R. Trong tiểu mục a, các em nhớ lại: Tập số tự nhiên N là tập con của tập số nguyên Z. Tập số nguyên Z là tập con của tập số hữu tỉ Q. Và tập số hữu tỉ Q là tập con của tập số thực R. Mối quan hệ này được biểu diễn lồng nhau: N con Z, Z con Q, Q con R. Ở tiểu mục b: Các tập con thường dùng của R gồm có khoảng, đoạn và nửa khoảng. Kí hiệu dương vô cực và âm vô cực biểu diễn độ lớn vô hạn. Đoạn từ a đến b lấy cả hai đầu mút a và b, dùng ngoặc vuông. Khoảng từ a đến b không lấy hai đầu mút, dùng ngoặc tròn. Nửa khoảng lấy một đầu mút ngoặc vuông và bỏ đầu mút ngoặc tròn. Trong Ví dụ 5, tập hợp C gồm các số thực lớn hơn hoặc bằng 2 và nhỏ hơn hoặc bằng 7 được viết là đoạn từ vuông 2 đến vuông 7. Tập hợp D gồm các số thực nhỏ hơn 2 được viết là khoảng từ âm vô cực đến tròn 2. Các em hãy chú ý quan sát bảng vàng minh họa trực quan trên màn hình!"),

    ("assets/audio/b10_2_sec3.mp3",
     "Mục 3. Các phép toán trên tập hợp. Mục này gồm ba nội dung then chốt: a. Giao của hai tập hợp; b. Hợp của hai tập hợp; và c. Hiệu của hai tập hợp và phần bù. Cả ba mục con này đều được minh họa trực quan sinh động bằng biểu đồ Ven. Trong tiểu mục a, Giao của hai tập hợp S và T là tập hợp gồm tất cả các phần tử vừa thuộc S vừa thuộc T, kí hiệu là S giao T. Trên biểu đồ Ven Hình 1.6, phần giao được tô màu đỏ nổi bật. Trong Ví dụ 6, giao của hai tập rời rạc C và D là tập gồm hai số 4 và 27. Giao của nửa khoảng từ vuông 1 đến dương vô cực và nửa khoảng từ âm vô cực đến vuông 3 chính là đoạn từ vuông 1 đến vuông 3. Sang tiểu mục b, Hợp của hai tập hợp S và T là tập hợp gồm tất cả các phần tử thuộc S hoặc thuộc T, kí hiệu là S hợp T. Trên biểu đồ Ven Hình 1.7, toàn bộ vùng của cả hai hình tròn được tô màu xanh lá mạ. Ví dụ 8 đã giải quyết trọn vẹn bài toán mở đầu: có 10 bạn tham gia ít nhất một chuyên đề, do đó có đúng 2 thành viên của câu lạc bộ vắng mặt trong cả hai chuyên đề. Cuối cùng ở tiểu mục c, Hiệu của S và T là tập hợp gồm các phần tử thuộc S nhưng không thuộc T, kí hiệu S trừ T, được biểu diễn bởi phần hình trăng khuyết màu xanh lam trên Hình 1.9. Khi T là tập con của S, hiệu S trừ T được gọi là phần bù của T trong S, kí hiệu C chỉ số S của T, biểu diễn bởi hình vành khăn trên Hình 1.10. Bài toán vận dụng khảo sát thể thao cho chúng ta công thức thực tế quan trọng: số phần tử của A hợp B bằng số phần tử của A cộng số phần tử của B trừ đi số phần tử của A giao B."),

    ("assets/audio/b10_2_wrapup.mp3",
     "Chốt kiến thức then chốt. Như vậy các em đã nắm vững toàn bộ các khái niệm và phép toán trên tập hợp. Về lịch sử toán học, Biểu đồ Ven được nhà logic học người Anh John Venn giới thiệu vào năm 1880, và ngày nay đã trở thành công cụ không thể thiếu trong khoa học máy tính và trí tuệ nhân tạo. Mẹo của Thầy Sáng: Khi tìm giao của các khoảng đoạn trên trục số, các em hãy vẽ lần lượt từng tập và gạch bỏ phần ngoài; phần còn trắng duy nhất chính là giao. Khi tìm hiệu, nhớ quy tắc đảo dấu mút: mút tròn của tập bị trừ sẽ biến thành mút vuông trong tập hiệu. Bây giờ, các em hãy cùng bước sang Phần 4 để làm bài tập trắc nghiệm củng cố nhé!")
]

async def synth_all():
    for outfile, text in tasks:
        if os.path.exists(outfile) and os.path.getsize(outfile) > 5000:
            print(f"[SKIP] {outfile} exists ({os.path.getsize(outfile)} bytes)", flush=True)
            continue
        
        for attempt in range(1, 6):
            try:
                print(f"Synthesizing {outfile} (attempt {attempt})...", flush=True)
                if os.path.exists(outfile):
                    os.remove(outfile)
                comm = edge_tts.Communicate(text, VOICE)
                await comm.save(outfile)
                if os.path.exists(outfile) and os.path.getsize(outfile) > 5000:
                    print(f" -> Done: {outfile} ({os.path.getsize(outfile)} bytes)", flush=True)
                    break
            except Exception as e:
                print(f"Attempt {attempt} error: {e}", flush=True)
                if os.path.exists(outfile):
                    try: os.remove(outfile)
                    except: pass
                await asyncio.sleep(4)
        await asyncio.sleep(2)

    # Đóng gói js/b10-2-audio-cache.js
    cache_dict = {}
    for outfile, _ in tasks:
        rel_key = outfile.replace("\\", "/")
        if os.path.exists(outfile) and os.path.getsize(outfile) > 5000:
            with open(outfile, "rb") as f:
                b64 = base64.b64encode(f.read()).decode("ascii")
            cache_dict[rel_key] = f"data:audio/mp3;base64,{b64}"
            print(f"Cached {rel_key}: {len(b64)} chars", flush=True)
        else:
            print(f"[WARNING] Missing or empty: {outfile}", flush=True)

    js_content = "window.B10_2_AUDIO_CACHE = " + json.dumps(cache_dict, indent=2, ensure_ascii=False) + ";\n"
    with open("js/b10-2-audio-cache.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    print("Successfully generated js/b10-2-audio-cache.js!", flush=True)

if __name__ == "__main__":
    asyncio.run(synth_all())
