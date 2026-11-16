# -*- coding: utf-8 -*-
import asyncio, edge_tts

sentences = [
    "Tiểu mục b. Độ dài cung tròn và Giải bài toán mở đầu trạm vũ trụ I-S-S.",
    "Công thức độ dài cung tròn.",
    "Một cung của đường tròn bán kính R có số đo an-pha ra-đi-an thì có độ dài l bằng R nhân an-pha.",
    "Giải quyết bài toán mở đầu Trạm vũ trụ Quốc tế I-S-S.",
    "Đề bài: Trạm vũ trụ I-S-S nằm trong quỹ đạo tròn cách bề mặt Trái Đất 400 kilômét, bán kính Trái Đất là 6 nghìn 400 kilômét."
]

async def main():
    for i, s in enumerate(sentences):
        try:
            comm = edge_tts.Communicate(s, "vi-VN-NamMinhNeural")
            await comm.save(f"temp_s_{i}.mp3")
            print(f"[{i}] OK: {s[:30]}")
        except Exception as e:
            print(f"[{i}] FAIL: {e} -> {s}")

asyncio.run(main())
