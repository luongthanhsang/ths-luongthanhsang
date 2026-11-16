# -*- coding: utf-8 -*-
import asyncio, os, time
import edge_tts

VOICE = "vi-VN-NamMinhNeural"

text = (
    "Tiểu mục b. Độ dài cung tròn và Giải bài toán mở đầu trạm vũ trụ I-S-S. "
    "Công thức độ dài cung tròn: Một cung của đường tròn bán kính R có số đo an-pha ra-đi-an thì có độ dài l bằng R nhân an-pha. "
    "Giải quyết bài toán mở đầu Trạm vũ trụ Quốc tế I-S-S. "
    "Đề bài: Trạm vũ trụ I-S-S nằm trong quỹ đạo tròn cách bề mặt Trái Đất 400 kilômét, bán kính Trái Đất là 6 nghìn 400 kilômét. "
    "Tính quãng đường trạm di chuyển khi góc ở tâm là 45 độ. "
    "Hướng dẫn giải chi tiết của Thầy Sáng: "
    "Bước một: Bán kính quỹ đạo tròn của trạm I-S-S tính từ tâm Trái Đất là: "
    "R bằng 6 nghìn 400 cộng 400 bằng 6 nghìn 800 kilômét. "
    "Bước hai: Đổi số đo góc ở tâm sang đơn vị ra-đi-an: "
    "an-pha bằng 45 độ bằng 45 nhân pi chia 180 bằng pi phần 4 ra-đi-an. "
    "Bước ba: Quãng đường trạm vũ trụ I-S-S di chuyển khi đang được trạm mặt đất theo dõi là: "
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
)

def chunk_text(t, max_len=400):
    sentences = [s.strip() for s in t.replace('!', '.').replace(';', '.').split('.') if s.strip()]
    chunks = []
    curr = ""
    for s in sentences:
        if len(curr) + len(s) + 2 > max_len and curr:
            chunks.append(curr.strip())
            curr = s + ". "
        else:
            curr += s + ". "
    if curr:
        chunks.append(curr.strip())
    return chunks

async def synth():
    chunks = chunk_text(text, 400)
    print(f"Chunks count: {len(chunks)}")
    for i, c in enumerate(chunks):
        print(f" Chunk {i}: {len(c)} chars -> {c[:40]}...")

    all_data = bytearray()
    for i, c in enumerate(chunks):
        comm = edge_tts.Communicate(c, VOICE)
        tmp = f"temp_chunk_{i}.mp3"
        await comm.save(tmp)
        with open(tmp, "rb") as f:
            all_data.extend(f.read())
        os.remove(tmp)
        print(f" -> Chunk {i} done, so far {len(all_data):,} bytes")
        await asyncio.sleep(0.5)

    with open("assets/audio/b11_1_sec2b.mp3", "wb") as f:
        f.write(all_data)
    print("SUCCESS b11_1_sec2b.mp3:", os.path.getsize("assets/audio/b11_1_sec2b.mp3"))

asyncio.run(synth())
