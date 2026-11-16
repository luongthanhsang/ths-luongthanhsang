# -*- coding: utf-8 -*-
import asyncio, os, base64, json, time
import edge_tts

VOICE = "vi-VN-NamMinhNeural"

tasks = [
    (
        "assets/audio/b11_1_welcome.mp3",
        "Thầy Sáng thân ái chào tất cả các em học sinh khối mười một thân yêu! Hôm nay, thầy trò chúng ta sẽ cùng bước vào Chương một: Hàm số lượng giác và phương trình lượng giác, với bài học mở đầu vô cùng quan trọng: Bài một, Giá trị lượng giác của góc lượng giác. Ở lớp mười, các em đã biết giá trị lượng giác của các góc hình học từ 0 độ đến 180 độ. Lên cấp học này, chúng ta sẽ mở rộng khái niệm góc lượng giác với số đo tùy ý từ âm vô cực đến dương vô cực, tìm hiểu đơn vị ra-đi-an, đường tròn lượng giác và các công thức lượng giác nền tảng. Bài học này là chiếc chìa khóa vàng cho toàn bộ chương trình lượng giác và vật lý dao động. Các em hãy chuẩn bị sách vở, bút thước và máy tính cầm tay, tập trung lắng nghe và tương tác cùng Thầy nhé!"
    ),
    (
        "assets/audio/b11_1_goals.mp3",
        "Phần 2. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần đạt được các yêu cầu trọng tâm sau: Thứ nhất: Nhận biết các khái niệm cơ bản về góc lượng giác, tia đầu, tia cuối, chiều quay và số đo góc lượng giác; hiểu và vận dụng thành thạo hệ thức Sát-lơ. Thứ hai: Hiểu khái niệm đơn vị ra-đi-an, mối quan hệ giữa độ và ra-đi-an, công thức tính độ dài cung tròn. Thứ ba: Nhận biết đường tròn lượng giác, điểm biểu diễn góc lượng giác và định nghĩa các giá trị lượng giác: sin, cô-sin, tang, cô-tang. Thứ tư: Nắm vững các hệ thức lượng giác cơ bản và công thức các góc liên quan đặc biệt: cos đối, sin bù, phụ chéo, hơn kém pi. Thứ năm: Vận dụng giải quyết các bài toán thực tiễn như quỹ đạo trạm không gian I-S-S và bài toán huyết áp tâm trương."
    ),
    (
        "assets/audio/b11_1_hook.mp3",
        "Phần 3. Tiến trình bài học. Tình huống mở đầu. Các em hãy quan sát hình ảnh trạm vũ trụ quốc tế I-S-S bay quanh Trái Đất trên màn hình. Trạm vũ trụ I-S-S nằm trong quỹ đạo tròn cách bề mặt Trái Đất khoảng 400 kilômét. Bán kính Trái Đất là 6 nghìn 400 kilômét. Nếu trạm mặt đất theo dõi trạm I-S-S khi nó nằm trong góc 45 độ ở tâm của quỹ đạo tròn này phía trên ăng-ten theo dõi, thì trạm vũ trụ I-S-S đã di chuyển được bao nhiêu kilômét trong khi đang được trạm mặt đất theo dõi? Để tính được độ dài quãng đường cong này một cách chính xác và nhanh chóng, chúng ta cần đến một đơn vị đo góc mới trong toán học: đơn vị ra-đi-an. Chúng ta cùng bước vào bài học ngay sau đây!"
    ),
    (
        "assets/audio/b11_1_sec1a.mp3",
        "Mục 1. Góc lượng giác. Tiểu mục a: Khái niệm góc lượng giác và số đo của góc lượng giác. Trong mặt phẳng, cho hai tia O u và O v. Xét tia O m cùng nằm trong mặt phẳng này. Nếu tia O m quay quanh gốc O, theo một chiều nhất định từ tia đầu O u đến tia cuối O v, thì ta nói nó quét một góc lượng giác với tia đầu O u, tia cuối O v, kí hiệu là mở ngoặc O u phẩy O v đóng ngoặc. Quy ước: Chiều quay ngược chiều kim đồng hồ là chiều dương, chiều quay cùng chiều kim đồng hồ là chiều âm. Khi tia O m quay góc an-pha độ thì góc lượng giác có số đo an-pha độ. Các em hãy quan sát 4 sơ đồ xoắn ốc trên màn hình: Khi tia O m quay đúng một vòng theo chiều dương về trùng O v, số đo là dương 360 độ. Khi quay 2 vòng dương, số đo là 720 độ. Khi quay nửa vòng theo chiều âm, số đo là âm 180 độ. Và khi quay một vòng rưỡi theo chiều âm, số đo là âm 540 độ. Tổng quát, số đo của các góc lượng giác tia đầu O u, tia cuối O v sai khác nhau một bội nguyên của 360 độ: an-pha cộng k nhân 360 độ, với k thuộc tập số nguyên Z."
    ),
    (
        "assets/audio/b11_1_sec1b.mp3",
        "Tiểu mục b: Hệ thức Sát-lơ. Với ba tia O u, O v, O w bất kì, ta có hệ thức Sát-lơ nổi tiếng: Số đo góc lượng giác O u phẩy O v, cộng số đo góc lượng giác O v phẩy O w, bằng số đo góc lượng giác O u phẩy O w, cộng k nhân 360 độ, với k là số nguyên. Từ hệ thức này, ta suy ra công thức hiệu quan trọng: Số đo góc lượng giác O u phẩy O v bằng số đo góc O x phẩy O v, trừ đi số đo góc O x phẩy O u, cộng k 360 độ. Công thức này hoàn toàn tương tự công thức hiệu hai vectơ mà các em đã học ở lớp mười: vectơ A B bằng vectơ O B trừ vectơ O A. Trong Ví dụ 2, cho số đo O x O u bằng âm 270 độ, số đo O x O v bằng 135 độ, ta tính được số đo O u O v bằng 135 độ trừ đi âm 270 độ, bằng 405 độ, tức là bằng 45 độ cộng m nhân 360 độ."
    ),
    (
        "assets/audio/b11_1_sec2a.mp3",
        "Mục 2. Đơn vị đo góc và độ dài cung tròn. Tiểu mục a: Đơn vị đo góc và cung tròn. Ngoài đơn vị độ truyền thống, trong khoa học kỹ thuật và toán học cao cấp, người ta sử dụng đơn vị ra-đi-an, viết tắt là r a d. Định nghĩa: Cho đường tròn tâm O bán kính R. Cung tròn A B có độ dài đúng bằng bán kính R được gọi là có số đo bằng 1 ra-đi-an. Góc ở tâm A O B chắn cung đó có số đo bằng 1 ra-đi-an. Vì đường tròn có chu vi 2 pi R ứng với 360 độ, nên ta có đẳng thức then chốt: 180 độ bằng pi ra-đi-an. Từ đó suy ra công thức đổi: 1 độ bằng pi phần 180 ra-đi-an; và 1 ra-đi-an bằng 180 phần pi độ, xấp xỉ 57 độ 17 phút 45 giây. Các em hãy chú ý ghi nhớ bảng góc đặc biệt: 30 độ là pi phần 6; 45 độ là pi phần 4; 60 độ là pi phần 3; 90 độ là pi phần 2; và 180 độ là pi."
    ),
    (
        "assets/audio/b11_1_sec2b.mp3",
        "Tiểu mục b: Độ dài cung tròn. Một cung của đường tròn bán kính R có số đo an-pha ra-đi-an thì có độ dài l bằng R nhân an-pha. Công thức này vô cùng ngắn gọn và đẹp mắt! Bây giờ, thầy trò ta cùng giải quyết bài toán mở đầu về trạm vũ trụ I-S-S: Quỹ đạo của trạm cách bề mặt Trái Đất 400 kilômét, bán kính Trái Đất là 6 nghìn 400 kilômét, nên bán kính quỹ đạo tròn từ tâm Trái Đất là: R bằng 6 nghìn 400 cộng 400 bằng 6 nghìn 800 kilômét. Góc ở tâm 45 độ đổi sang ra-đi-an là: an-pha bằng 45 nhân pi chia 180 bằng pi phần 4 ra-đi-an. Áp dụng công thức: Quãng đường trạm I-S-S bay được là: l bằng R nhân an-pha, bằng 6 nghìn 800 nhân pi phần 4, bằng 1 nghìn 700 pi, xấp xỉ 5 nghìn 341 kilômét. Một kết quả thực tiễn rất thú vị và chuẩn xác!"
    ),
    (
        "assets/audio/b11_1_sec3a.mp3",
        "Mục 3. Giá trị lượng giác của góc lượng giác. Tiểu mục a: Đường tròn lượng giác. Trong mặt phẳng toạ độ O x y, đường tròn lượng giác là đường tròn có tâm tại gốc toạ độ O, bán kính R bằng 1, được định hướng chiều quay ngược kim đồng hồ là dương, và lấy điểm A toạ độ 1 chấm phẩy 0 làm điểm gốc của đường tròn. Điểm M trên đường tròn lượng giác sao cho số đo góc lượng giác tia đầu O A, tia cuối O M bằng an-pha được gọi là điểm biểu diễn góc lượng giác có số đo an-pha. Mỗi góc lượng giác an-pha được biểu diễn bởi duy nhất một điểm M trên đường tròn lượng giác. Ngược lại, mỗi điểm M trên đường tròn lượng giác là điểm biểu diễn của vô số góc lượng giác có số đo an-pha cộng k 2 pi, với k thuộc tập số nguyên Z."
    ),
    (
        "assets/audio/b11_1_sec3b.mp3",
        "Tiểu mục b: Các giá trị lượng giác của góc lượng giác. Giả sử điểm M toạ độ x chấm phẩy y biểu diễn góc lượng giác an-pha trên đường tròn lượng giác. Ta định nghĩa: Hoành độ x của điểm M là cô-sin của an-pha, kí hiệu cos an-pha bằng x. Trục hoành O x được gọi là trục cô-sin. Tung độ y của điểm M là sin của an-pha, kí hiệu sin an-pha bằng y. Trục tung O y được gọi là trục sin. Tang của an-pha là tỉ số y chia x, tức là sin chia cos. Cô-tang của an-pha là tỉ số x chia y, tức là cos chia sin. Các em hãy chú ý quan sát Hình 1 chấm 9 b trên màn hình: Thầy đã vẽ điểm M nằm ở góc phần tư thứ ba. Khi đó, hình chiếu của M lên trục O x cho hoành độ x âm, nên cos an-pha mang dấu âm. Hình chiếu của M lên trục O y cho tung độ y âm, nên sin an-pha cũng mang dấu âm. Khi đó, tang và cô-tang bằng tỉ số của hai số cùng âm nên sẽ mang dấu dương! Đây là quy tắc xét dấu lượng giác cực kỳ quan trọng ở 4 góc phần tư."
    ),
    (
        "assets/audio/b11_1_sec4a.mp3",
        "Mục 4. Quan hệ giữa các giá trị lượng giác. Tiểu mục a: Các công thức lượng giác cơ bản. Từ định lí Pi-ta-go trong tam giác vuông trên đường tròn lượng giác bán kính 1, ta có bộ 4 công thức cơ bản then chốt: Thứ nhất: sin bình phương an-pha cộng cos bình phương an-pha bằng 1. Thứ hai: 1 cộng tang bình phương an-pha bằng 1 chia cos bình phương an-pha. Thứ ba: 1 cộng cô-tang bình phương an-pha bằng 1 chia sin bình phương an-pha. Thứ tư: tang an-pha nhân cô-tang an-pha bằng 1. Trong Ví dụ 9, biết sin an-pha bằng 3 phần 5 và an-pha thuộc góc phần tư thứ hai từ 90 đến 180 độ, vì ở góc phần tư thứ hai cos âm nên ta tính được cos an-pha bằng âm căn bậc hai của 1 trừ sin bình, bằng âm 4 phần 5. Từ đó suy ra tang bằng âm 3 phần 4, và cô-tang bằng âm 4 phần 3."
    ),
    (
        "assets/audio/b11_1_sec4b.mp3",
        "Tiểu mục b: Giá trị lượng giác của các góc có liên quan đặc biệt. Thầy tặng các em câu thần chú lượng giác bất hủ để nhớ nhanh: Cos đối, Sin bù, Phụ chéo, Hơn kém pi tang cô-tang! Cụ thể: Hai góc đối nhau an-pha và trừ an-pha thì cos bằng nhau: cos trừ an-pha bằng cos an-pha, còn sin, tang, cô-tang đổi dấu. Hai góc bù nhau an-pha và pi trừ an-pha thì sin bằng nhau: sin pi trừ an-pha bằng sin an-pha. Hai góc phụ nhau an-pha và pi phần hai trừ an-pha thì chéo nhau: sin góc này bằng cos góc kia, tang góc này bằng cô-tang góc kia. Hai góc hơn kém nhau pi thì tang và cô-tang bằng nhau. Nhờ câu thần chú vàng này, các em sẽ rút gọn mọi biểu thức lượng giác phức tạp trong chớp mắt!"
    ),
    (
        "assets/audio/b11_1_wrapup.mp3",
        "Phần 4. Chốt kiến thức then chốt và vận dụng thực tế. Như vậy thầy trò chúng ta đã chinh phục trọn vẹn Bài 1: Giá trị lượng giác của góc lượng giác. Trong thực tế đời sống, lượng giác xuất hiện khắp nơi từ chuyển động bánh xe, quỹ đạo vệ tinh đến nhịp sinh học con người. Bài toán thực tế Vận dụng 2 cho thấy: Huyết áp tâm trương của một người dao động theo hàm số sin: B t bằng 80 cộng 7 sin pi t chia 12. Vào lúc 6 giờ sáng, huyết áp đạt mức cực đại 87 milimét thủy ngân. Vào lúc 8 giờ tối, huyết áp giảm xuống xấp xỉ 74 milimét thủy ngân. Bây giờ, các em hãy cùng bước sang Phần 5 để thử sức với các bài tập trắc nghiệm củng cố chuẩn cấu trúc mới 2025 của Bộ Giáo dục và Đào tạo nhé!"
    )
]

async def synth_all():
    os.makedirs("assets/audio", exist_ok=True)
    for outfile, text in tasks:
        if os.path.exists(outfile) and os.path.getsize(outfile) > 10000:
            print(f"[EXISTS] {outfile} ({os.path.getsize(outfile)} bytes)", flush=True)
            continue
        print(f"Synthesizing {outfile}...", flush=True)
        for attempt in range(1, 4):
            try:
                c = edge_tts.Communicate(text, VOICE)
                await c.save(outfile)
                if os.path.exists(outfile) and os.path.getsize(outfile) > 5000:
                    print(f" -> SUCCESS: {outfile} ({os.path.getsize(outfile)} bytes)", flush=True)
                    break
            except Exception as e:
                print(f" -> Attempt {attempt} error: {e}", flush=True)
                if os.path.exists(outfile):
                    try: os.remove(outfile)
                    except: pass
            await asyncio.sleep(2)
        await asyncio.sleep(1)

    print("\nPacking js/b11-1-audio-cache.js ...", flush=True)
    cache = {}
    for outfile, _ in tasks:
        fname = os.path.basename(outfile)
        rel_key = outfile.replace("\\", "/")
        if os.path.exists(outfile) and os.path.getsize(outfile) > 1000:
            b64 = base64.b64encode(open(outfile, "rb").read()).decode("utf-8")
            cache[fname] = f"data:audio/mp3;base64,{b64}"
            cache[rel_key] = f"data:audio/mp3;base64,{b64}"
            print(f"Cached {rel_key}: {os.path.getsize(outfile)} bytes", flush=True)
        else:
            print(f"[MISSING] {outfile}", flush=True)

    with open("js/b11-1-audio-cache.js", "w", encoding="utf-8") as f:
        f.write("// Audio Cache Base64 - Bài 1 Lớp 11: Giá trị lượng giác của góc lượng giác\n")
        f.write("// ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại\n")
        f.write("window.B11_1_AUDIO_CACHE = ")
        json.dump(cache, f, ensure_ascii=False)
        f.write(";\n")
    print("Done generating audio cache! Total:", len(cache) // 2)

if __name__ == "__main__":
    asyncio.run(synth_all())
