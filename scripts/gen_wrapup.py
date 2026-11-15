# -*- coding: utf-8 -*-
import asyncio
import edge_tts
import os

wrapup_chunks = [
    'Tổng kết bài học. Bài học số 4 mang lại cho các em quy trình bốn bước giải quyết bài toán quy hoạch tuyến tính.',
    'Bước một, gọi ẩn và thiết lập hệ bất phương trình. Bước hai, biểu diễn miền nghiệm của hệ.',
    'Bước 3, tìm tọa độ các giao điểm.',
    'Bước bốn, tính giá trị biểu thức tại các đỉnh để chọn phương án tối ưu.',
    'Thầy mời các em cùng bước vào Phần bốn để làm chủ dạng toán này nhé.'
]

async def make_wrapup():
    raw_data = bytearray()
    for idx, text in enumerate(wrapup_chunks):
        tmp = f"tmp_w_{idx}.mp3"
        comm = edge_tts.Communicate(text, "vi-VN-NamMinhNeural")
        await comm.save(tmp)
        with open(tmp, "rb") as f:
            chunk = f.read()
        raw_data.extend(chunk)
        if os.path.exists(tmp):
            os.remove(tmp)
        print(f"Chunk {idx} done: {len(chunk)} bytes", flush=True)
        await asyncio.sleep(0.3)
    
    with open("assets/audio/b10_4_wrapup.mp3", "wb") as fout:
        fout.write(raw_data)
    print(f"WRAPUP DONE! Size: {len(raw_data)} bytes", flush=True)

asyncio.run(make_wrapup())
