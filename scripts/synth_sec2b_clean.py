# -*- coding: utf-8 -*-
import asyncio, os
import edge_tts

text = (
    "Tiểu mục b. Độ dài cung tròn và Giải bài toán mở đầu trạm vũ trụ I-S-S. "
    "Công thức độ dài cung tròn. Một cung của đường tròn bán kính R có số đo an-pha ra-đi-an thì có độ dài l bằng R nhân an-pha. "
    "Bây giờ thầy trò ta cùng giải bài toán mở đầu trạm vũ trụ quốc tế I-S-S. "
    "Đề bài. Trạm vũ trụ I-S-S nằm trong quỹ đạo tròn cách bề mặt Trái Đất 400 kilômét, bán kính Trái Đất là 6 nghìn 400 kilômét. "
    "Tính quãng đường trạm di chuyển khi góc ở tâm là 45 độ. "
    "Hướng dẫn giải của Thầy Sáng. "
    "Bước một, bán kính quỹ đạo tròn của trạm I-S-S tính từ tâm Trái Đất là R bằng 6 nghìn 400 cộng 400 bằng 6 nghìn 800 kilômét. "
    "Bước hai, đổi số đo góc ở tâm sang đơn vị ra-đi-an, an-pha bằng 45 độ bằng pi phần 4 ra-đi-an. "
    "Bước ba, quãng đường trạm I-S-S bay được là: l bằng R nhân an-pha, bằng 6 nghìn 800 nhân pi phần 4, bằng 1 nghìn 700 pi, "
    "xấp xỉ 5 nghìn 341 kilômét. "
    "Ví dụ 4. Một đường tròn có bán kính 20 centimét. Tính độ dài của cung có số đo bằng 3 pi phần 4. "
    "Lời giải. Độ dài cung tròn là: l bằng R nhân an-pha bằng 20 nhân 3 pi chia 4 bằng 15 pi centimét, xấp xỉ 47 phẩy 12 centimét. "
    "Luyện tập 4. Một chiếc đu quay có bán kính 30 mét quay đều 1 vòng hết 10 phút. "
    "Tính quãng đường cabin đi được sau 2 phút và sau 5 phút. "
    "Lời giải. Sau 2 phút, góc quay an-pha bằng 2 pi chia 5 ra-đi-an, quãng đường đi được là 12 pi mét, xấp xỉ 37 phẩy 7 mét. "
    "Sau 5 phút, cabin quay nửa vòng, quãng đường đi được là 30 pi mét, xấp xỉ 94 phẩy 25 mét."
)

async def test():
    comm = edge_tts.Communicate(text, "vi-VN-NamMinhNeural")
    await comm.save("assets/audio/b11_1_sec2b.mp3")
    print("SUCCESS b11_1_sec2b.mp3:", os.path.getsize("assets/audio/b11_1_sec2b.mp3"))

asyncio.run(test())
