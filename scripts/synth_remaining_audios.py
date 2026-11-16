# -*- coding: utf-8 -*-
import asyncio, os, time
import edge_tts

VOICE = "vi-VN-NamMinhNeural"

AUDIOS_TO_SYNTH = [
    ("b11_1_goals.mp3", (
        "Phần 2. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần đạt được các yêu cầu trọng tâm sau đây: "
        "Thứ nhất, nhận biết các khái niệm cơ bản về góc lượng giác, tia đầu, tia cuối, chiều quay và số đo góc lượng giác, hiểu và vận dụng thành thạo hệ thức Sát-lơ. "
        "Thứ hai, hiểu khái niệm đơn vị ra-đi-an, mối quan hệ giữa độ và ra-đi-an: 180 độ bằng pi ra-đi-an, công thức tính độ dài cung tròn: l bằng R nhân an-pha. "
        "Thứ ba, nhận biết đường tròn lượng giác gốc A toạ độ 1 chấm phẩy 0, điểm biểu diễn góc lượng giác và định nghĩa các giá trị lượng giác: sin, cô-sin, tang, cô-tang. "
        "Thứ tư, nắm vững các hệ thức lượng giác cơ bản và công thức các góc liên quan đặc biệt: cos đối, sin bù, phụ chéo, hơn kém pi. "
        "Thứ năm, vận dụng giải quyết các bài toán thực tiễn như quỹ đạo trạm không gian I-S-S và bài toán dao động huyết áp tâm trương."
    )),

    ("b11_1_sec2b.mp3", (
        "Tiểu mục b. Độ dài cung tròn và Giải bài toán mở đầu trạm vũ trụ I-S-S. "
        "Công thức độ dài cung tròn: Một cung của đường tròn bán kính R có số đo an-pha ra-đi-an thì có độ dài l bằng R nhân an-pha. "
        "Giải quyết bài toán mở đầu Trạm vũ trụ Quốc tế I-S-S: "
        "Đề bài: Trạm vũ trụ I-S-S nằm trong quỹ đạo tròn cách bề mặt Trái Đất 400 kilômét, bán kính Trái Đất là 6 nghìn 400 kilômét. "
        "Tính quãng đường trạm di chuyển khi góc ở tâm là 45 độ. "
        "Hướng dẫn giải chi tiết của Thầy Sáng: "
        "Bước 1: Bán kính quỹ đạo tròn của trạm I-S-S tính từ tâm Trái Đất là R bằng 6 nghìn 400 cộng 400 bằng 6 nghìn 800 kilômét. "
        "Bước 2: Đổi số đo góc ở tâm sang đơn vị ra-đi-an: an-pha bằng 45 độ bằng 45 nhân pi chia 180 bằng pi phần 4 ra-đi-an. "
        "Bước 3: Quãng đường trạm vũ trụ I-S-S di chuyển khi đang được trạm mặt đất theo dõi là: "
        "l bằng R nhân an-pha, bằng 6 nghìn 800 nhân pi phần 4, bằng 1 nghìn 700 pi, "
        "xấp xỉ 5 nghìn 340 phẩy 71 kilômét, làm tròn đến hàng đơn vị là 5 nghìn 341 kilômét. "
        "Ví dụ 4 Sách giáo khoa trang 9: Một đường tròn có bán kính 20 centimét. "
        "Tính độ dài của cung trên đường tròn đó có số đo bằng 3 pi phần 4. "
        "Lời giải: Độ dài cung tròn là: l bằng R nhân an-pha bằng 20 nhân 3 pi chia 4 bằng 15 pi centimét, xấp xỉ 47 phẩy 12 centimét. "
        "Luyện tập 4: Một chiếc đu quay có bán kính 30 mét quay đều với tốc độ 1 vòng hết 10 phút. "
        "Tính quãng đường một cabin đi được sau 2 phút và sau 5 phút. "
        "Lời giải: Sau 2 phút, cabin quay được 2 phần 10 bằng 1 phần 5 vòng, tức là góc an-pha bằng 2 pi chia 5 ra-đi-an. "
        "Quãng đường đi được là: l bằng 30 nhân 2 pi chia 5 bằng 12 pi mét, xấp xỉ 37 phẩy 7 mét. "
        "Sau 5 phút, cabin quay nửa vòng, quãng đường đi được là: l bằng 30 nhân pi xấp xỉ 94 phẩy 25 mét."
    )),

    ("b11_1_sec3a.mp3", (
        "Mục 3. Giá trị lượng giác của góc lượng giác. Tiểu mục a. Đường tròn lượng giác. "
        "Một nhỏ. Định nghĩa đường tròn lượng giác: "
        "Trong mặt phẳng toạ độ O x y, đường tròn lượng giác là đường tròn tâm tại gốc toạ độ O, bán kính R bằng 1, "
        "trên đó chọn chiều quay ngược chiều kim đồng hồ làm chiều dương và lấy điểm A toạ độ 1 chấm phẩy 0 làm điểm gốc của đường tròn. "
        "Hai nhỏ. Điểm biểu diễn của góc lượng giác trên đường tròn lượng giác: "
        "Điểm M trên đường tròn lượng giác sao cho số đo góc lượng giác tia đầu O A, tia cuối O M bằng an-pha "
        "được gọi là điểm biểu diễn góc lượng giác có số đo an-pha. "
        "Định lí then chốt: Mỗi góc lượng giác an-pha được biểu diễn bởi duy nhất một điểm M trên đường tròn lượng giác. "
        "Ngược lại, mỗi điểm M trên đường tròn lượng giác biểu diễn cho vô số góc lượng giác có số đo an-pha cộng k 2 pi, với k thuộc tập số nguyên Z. "
        "Ví dụ 5 Sách giáo khoa trang 11: Xác định điểm biểu diễn trên đường tròn lượng giác của các góc: 5 pi phần 6; âm 3 pi phần 4; và 5 pi phần 2. "
        "Lời giải: "
        "Điểm biểu diễn góc 5 pi phần 6 bằng 150 độ thuộc góc phần tư thứ hai. "
        "Điểm biểu diễn góc âm 3 pi phần 4 bằng âm 135 độ thuộc góc phần tư thứ ba. "
        "Điểm biểu diễn góc 5 pi phần 2 bằng 2 pi cộng pi phần 2, trùng với điểm biểu diễn góc pi phần 2 tại điểm B toạ độ 0 chấm phẩy 1 trên trục tung. "
        "Luyện tập 5: Biểu diễn trên đường tròn lượng giác các góc lượng giác có số đo: âm 5 pi phần 3; và 7 pi phần 4. "
        "Lời giải: "
        "Góc âm 5 pi phần 3 bằng âm 2 pi cộng pi phần 3, có điểm biểu diễn trùng với góc pi phần 3 bằng 60 độ trong góc phần tư thứ nhất. "
        "Góc 7 pi phần 4 bằng 2 pi trừ pi phần 4, có điểm biểu diễn trùng với góc âm pi phần 4 trong góc phần tư thứ tư."
    )),

    ("b11_1_sec3b.mp3", (
        "Tiểu mục b. Các giá trị lượng giác của góc lượng giác. "
        "Định nghĩa: Giả sử điểm M toạ độ x chấm phẩy y trên đường tròn lượng giác biểu diễn góc lượng giác có số đo an-pha. Khi đó: "
        "Tung độ y của điểm M gọi là sin của an-pha, kí hiệu sin an-pha bằng y. Trục tung O y được gọi là trục sin. "
        "Hoành độ x của điểm M gọi là cô-sin của an-pha, kí hiệu cos an-pha bằng x. Trục hoành O x được gọi là trục cô-sin. "
        "Tỉ số y chia x với x khác 0 gọi là tang của an-pha, kí hiệu tan an-pha bằng sin an-pha chia cos an-pha bằng y chia x. "
        "Tỉ số x chia y với y khác 0 gọi là cô-tang của an-pha, kí hiệu cot an-pha bằng cos an-pha chia sin an-pha bằng x chia y. "
        "Các em hãy quan sát kỹ Hình 1.9b trên màn hình: "
        "Thầy đã vẽ điểm M nằm trong góc phần tư thứ ba. "
        "Khi hạ hình chiếu của M vuông góc xuống trục hoành O x, ta nhận được hoành độ x nhỏ hơn 0, tức là cos an-pha mang dấu âm. "
        "Khi hạ hình chiếu của M vuông góc sang trục tung O y, ta nhận được tung độ y nhỏ hơn 0, tức là sin an-pha mang dấu âm. "
        "Từ đó suy ra tang bằng sin chia cos, là tỉ số của hai số âm nên tan an-pha mang dấu dương lớn hơn 0; "
        "và cot an-pha cũng mang dấu dương lớn hơn 0! "
        "Bảng dấu 4 góc phần tư: "
        "Góc phần tư thứ nhất: sin dương, cos dương, tan dương, cot dương. "
        "Góc phần tư thứ hai: sin dương, cos âm, tan âm, cot âm. "
        "Góc phần tư thứ ba: sin âm, cos âm, tan dương, cot dương. "
        "Góc phần tư thứ tư: sin âm, cos dương, tan âm, cot âm. "
        "Ví dụ 6: Tính các giá trị lượng giác của góc an-pha bằng âm pi phần 3. "
        "Lời giải: Điểm M biểu diễn góc âm pi phần 3 có toạ độ là 1 phần 2 chấm phẩy âm căn 3 chia 2. "
        "Vậy cos âm pi phần 3 bằng 1 phần 2; sin âm pi phần 3 bằng âm căn 3 chia 2; "
        "tan âm pi phần 3 bằng âm căn 3; cot âm pi phần 3 bằng âm căn 3 chia 3. "
        "Luyện tập 6: Tính các giá trị lượng giác của góc an-pha bằng 135 độ và 5 pi phần 6. "
        "Lời giải: Với 135 độ thuộc góc phần tư thứ hai: sin 135 độ bằng căn 2 chia 2; "
        "cos 135 độ bằng âm căn 2 chia 2; tan 135 độ bằng âm 1; cot 135 độ bằng âm 1. "
        "Với 5 pi phần 6: sin 5 pi phần 6 bằng 1 phần 2; cos 5 pi phần 6 bằng âm căn 3 chia 2; "
        "tan 5 pi phần 6 bằng âm căn 3 chia 3; cot 5 pi phần 6 bằng âm căn 3."
    )),

    ("b11_1_sec4a.mp3", (
        "Mục 4. Quan hệ giữa các giá trị lượng giác. Tiểu mục a. Các công thức lượng giác cơ bản. "
        "Trên đường tròn lượng giác, tam giác vuông tạo bởi điểm M và hình chiếu của nó có cạnh kề bằng trị tuyệt đối cos, "
        "cạnh đối bằng trị tuyệt đối sin, cạnh huyền bằng bán kính R bằng 1. "
        "Theo định lí Pi-ta-go, ta có 4 công thức lượng giác cơ bản: "
        "Công thức 1: sin bình phương an-pha cộng cos bình phương an-pha bằng 1. "
        "Công thức 2: 1 cộng tang bình phương an-pha bằng 1 chia cos bình phương an-pha, với an-pha khác pi phần 2 cộng k pi. "
        "Công thức 3: 1 cộng cô-tang bình phương an-pha bằng 1 chia sin bình phương an-pha, với an-pha khác k pi. "
        "Công thức 4: tang an-pha nhân cô-tang an-pha bằng 1. "
        "Ví dụ 9 Sách giáo khoa trang 13: Cho sin an-pha bằng 3 phần 5 và pi phần 2 nhỏ hơn an-pha nhỏ hơn pi. "
        "Tính các giá trị lượng giác còn lại của góc an-pha. "
        "Lời giải: Vì pi phần 2 nhỏ hơn an-pha nhỏ hơn pi, an-pha thuộc góc phần tư thứ hai nên cos an-pha mang dấu âm nhỏ hơn 0. "
        "Áp dụng công thức 1: cos bình an-pha bằng 1 trừ sin bình an-pha bằng 1 trừ 9 phần 25 bằng 16 phần 25. "
        "Do cos âm nên ta lấy cos an-pha bằng âm căn của 16 phần 25 bằng âm 4 phần 5. "
        "Từ đó tính được: tan an-pha bằng sin chia cos bằng 3 phần 5 chia âm 4 phần 5 bằng âm 3 phần 4; "
        "cot an-pha bằng 1 chia tan an-pha bằng âm 4 phần 3. "
        "Luyện tập 7: Cho cos an-pha bằng âm 2 phần 3 và pi nhỏ hơn an-pha nhỏ hơn 3 pi phần 2. "
        "Tính sin an-pha, tan an-pha và cot an-pha. "
        "Lời giải: Vì an-pha thuộc góc phần tư thứ ba nên sin an-pha mang dấu âm. "
        "Ta có sin bình an-pha bằng 1 trừ mở ngoặc âm 2 phần 3 đóng ngoặc bình phương bằng 5 phần 9. "
        "Suy ra sin an-pha bằng âm căn 5 chia 3. "
        "tan an-pha bằng sin chia cos bằng mở ngoặc âm căn 5 chia 3 đóng ngoặc chia mở ngoặc âm 2 phần 3 đóng ngoặc bằng căn 5 chia 2; "
        "cot an-pha bằng 2 chia căn 5 bằng 2 căn 5 chia 5."
    )),

    ("b11_1_sec4b.mp3", (
        "Tiểu mục b. Giá trị lượng giác của các góc có liên quan đặc biệt. "
        "Để ghi nhớ nhanh và chính xác toàn bộ các hệ thức này, Thầy gửi tặng các em câu thần chú lượng giác bất hủ: "
        "Cos đối — Sin bù — Phụ chéo — Hơn kém pi tang cô-tang! "
        "Quy tắc 1: Hai góc đối nhau an-pha và âm an-pha (Cos đối): "
        "cos của âm an-pha bằng cos an-pha; sin của âm an-pha bằng âm sin an-pha; "
        "tan của âm an-pha bằng âm tan an-pha; cot của âm an-pha bằng âm cot an-pha. "
        "Quy tắc 2: Hai góc bù nhau an-pha và pi trừ an-pha (Sin bù): "
        "sin của pi trừ an-pha bằng sin an-pha; cos của pi trừ an-pha bằng âm cos an-pha; "
        "tan của pi trừ an-pha bằng âm tan an-pha; cot của pi trừ an-pha bằng âm cot an-pha. "
        "Quy tắc 3: Hai góc phụ nhau an-pha và pi phần 2 trừ an-pha (Phụ chéo): "
        "sin của pi phần 2 trừ an-pha bằng cos an-pha; cos của pi phần 2 trừ an-pha bằng sin an-pha; "
        "tan của pi phần 2 trừ an-pha bằng cot an-pha; cot của pi phần 2 trừ an-pha bằng tan an-pha. "
        "Quy tắc 4: Hai góc hơn kém nhau pi (Hơn kém pi tang cot): "
        "sin của an-pha cộng pi bằng âm sin an-pha; cos của an-pha cộng pi bằng âm cos an-pha; "
        "tan của an-pha cộng pi bằng tan an-pha; cot của an-pha cộng pi bằng cot an-pha. "
        "Ví dụ 10 Sách giáo khoa trang 14: Rút gọn biểu thức A bằng sin của pi trừ an-pha cộng cos của pi phần 2 trừ an-pha cộng cos của âm an-pha. "
        "Lời giải: Theo công thức Sin bù, sin của pi trừ an-pha bằng sin an-pha. "
        "Theo công thức Phụ chéo, cos của pi phần 2 trừ an-pha bằng sin an-pha. "
        "Theo công thức Cos đối, cos của âm an-pha bằng cos an-pha. "
        "Vậy biểu thức A bằng sin an-pha cộng sin an-pha cộng cos an-pha, bằng 2 sin an-pha cộng cos an-pha. "
        "Luyện tập 8: Tính giá trị biểu thức B bằng sin của 150 độ cộng cos của 120 độ cộng tan của 135 độ. "
        "Lời giải: sin 150 độ bằng sin của 180 độ trừ 30 độ bằng sin 30 độ bằng 1 phần 2. "
        "cos 120 độ bằng cos của 180 độ trừ 60 độ bằng âm cos 60 độ bằng âm 1 phần 2. "
        "tan 135 độ bằng tan của 180 độ trừ 45 độ bằng âm tan 45 độ bằng âm 1. "
        "Vậy biểu thức B bằng 1 phần 2 cộng mở ngoặc âm 1 phần 2 đóng ngoặc cộng mở ngoặc âm 1 đóng ngoặc bằng âm 1."
    ))
]

async def run_synth():
    for fname, text in AUDIOS_TO_SYNTH:
        outpath = f"assets/audio/{fname}"
        print(f"Synthesizing {fname} ({len(text)} chars)...", flush=True)
        t0 = time.time()
        for attempt in range(1, 4):
            try:
                comm = edge_tts.Communicate(text, VOICE)
                await comm.save(outpath)
                sz = os.path.getsize(outpath)
                dt = time.time() - t0
                print(f" -> SUCCESS: {fname} ({sz:,} bytes in {dt:.1f}s)", flush=True)
                break
            except Exception as e:
                print(f" -> Attempt {attempt} failed: {e}", flush=True)
                await asyncio.sleep(2.0)
        await asyncio.sleep(1.0)

if __name__ == "__main__":
    asyncio.run(run_synth())
