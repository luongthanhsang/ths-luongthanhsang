# -*- coding: utf-8 -*-
import asyncio
import edge_tts
import os

sec3_chunks = [
    'Mục ba, ứng dụng giải bài toán quy hoạch tuyến tính.',
    'Người ta đã chứng minh được rằng, giá trị cực đại hay cực tiểu của biểu thức mục tiêu ép bằng a nhân x cộng b nhân y trên miền đa giác luôn đạt được tại một trong các đỉnh của miền đa giác đó.',
    'Với bài toán điều hoà, miền nghiệm là tứ giác Ô A B C với bốn đỉnh.',
    'Thay vào biểu thức lợi nhuận, ta thấy tại đỉnh B toạ độ hai mươi tám mươi, lợi nhuận đạt mức cực đại là hai trăm ba mươi triệu đồng.',
    'Như vậy, quyết định tối ưu là nhập hai mươi máy hai chiều và tám mươi máy một chiều.'
]

wrapup_chunks = [
    'Tổng kết bài học. Bài học số 4 mang lại cho các em quy trình bốn bước giải quyết bài toán quy hoạch tuyến tính.',
    'Bước một, gọi ẩn và thiết lập hệ bất phương trình. Bước hai, vẽ miền đa giác nghiệm.',
    'Bước ba, tìm toạ độ các đỉnh của miền đa giác. Bước bốn, tính và so sánh giá trị biểu thức mục tiêu tại các đỉnh để đưa ra kết luận tối ưu.',
    'Thầy mời các em cùng bước vào Phần bốn để luyện tập và làm chủ dạng toán này nhé!'
]

async def build_concat(chunks, outfile):
    print(f"Building {outfile} from {len(chunks)} chunks...", flush=True)
    raw_data = bytearray()
    for idx, text in enumerate(chunks):
        tmp_file = f"tmp_chunk_{idx}.mp3"
        comm = edge_tts.Communicate(text, "vi-VN-NamMinhNeural")
        await comm.save(tmp_file)
        with open(tmp_file, "rb") as f:
            chunk_bytes = f.read()
        raw_data.extend(chunk_bytes)
        if os.path.exists(tmp_file):
            os.remove(tmp_file)
        print(f"  Chunk {idx} done: {len(chunk_bytes)} bytes", flush=True)
        await asyncio.sleep(0.5)
    
    with open(outfile, "wb") as f:
        f.write(raw_data)
    print(f"[SUCCESS] Wrote {outfile} ({len(raw_data)} bytes)\n", flush=True)

async def main():
    await build_concat(sec3_chunks, "assets/audio/b10_4_sec3.mp3")
    await build_concat(wrapup_chunks, "assets/audio/b10_4_wrapup.mp3")
    print("ALL DONE CHUNK GENERATION!", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
