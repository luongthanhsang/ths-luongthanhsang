# -*- coding: utf-8 -*-
import asyncio
import edge_tts
import os

AUDIOS = [
    ("assets/audio/b10_4_hook.mp3", "Tình huống kinh doanh điều hoà: Một cửa hàng điện lạnh dự định kinh doanh máy điều hoà hai chiều và một chiều với số vốn đầu tư không vượt quá một phẩy hai tỉ đồng. Giá mua vào lần lượt là hai mươi triệu và mười triệu đồng mỗi máy, lợi nhuận dự kiến là ba phẩy năm triệu và hai triệu đồng mỗi máy. Nhu cầu thị trường không quá một trăm máy cả hai loại. Chủ cửa hàng cần đầu tư nhập bao nhiêu máy mỗi loại để thu được lợi nhuận cao nhất? Toán học sẽ cho chúng ta đáp án chính xác tới từng đồng."),
    ("assets/audio/b10_4_sec3.mp3", "Mục ba, Ứng dụng giải bài toán quy hoạch tuyến tính thực tế: Tổng quát, người ta đã chứng minh được rằng: Giá trị lớn nhất hay nhỏ nhất của biểu thức mục tiêu F bằng a ích cộng b y trên miền đa giác luôn đạt được tại một trong các đỉnh của đa giác đó. Với bài toán điều hoà, miền nghiệm là tứ giác Ô A B C với bốn đỉnh: Ô toạ độ 0 0, A toạ độ 0 100, B toạ độ 20 80, và C toạ độ 60 0. Thay vào biểu thức lợi nhuận, ta thấy tại đỉnh B toạ độ 20 80, lợi nhuận đạt mức cực đại là 230 triệu đồng. Như vậy, quyết định tối ưu là nhập 20 máy hai chiều và 80 máy một chiều."),
    ("assets/audio/b10_4_wrapup.mp3", "Tổng kết bài học: Bài học số 4 mang lại cho các em quy trình bốn bước giải quyết bài toán quy hoạch tuyến tính: Bước một, gọi ẩn và thiết lập hệ bất phương trình. Bước hai, vẽ miền đa giác nghiệm. Bước ba, tìm toạ độ các đỉnh của miền đa giác. Bước bốn, tính và so sánh giá trị biểu thức mục tiêu tại các đỉnh để đưa ra kết luận tối ưu. Thầy mời các em cùng bước vào Phần bốn để luyện tập và làm chủ dạng toán này nhé!")
]

async def main():
    for outfile, text in AUDIOS:
        if os.path.exists(outfile) and os.path.getsize(outfile) > 30000:
            print(f"[EXISTS] {outfile} ({os.path.getsize(outfile)} bytes)", flush=True)
            continue
        print(f"Generating {outfile}...", flush=True)
        for att in range(3):
            try:
                comm = edge_tts.Communicate(text, "vi-VN-NamMinhNeural")
                await comm.save(outfile)
                sz = os.path.getsize(outfile)
                print(f"[SUCCESS] {outfile}: {sz} bytes", flush=True)
                break
            except Exception as e:
                print(f"  Attempt {att+1} failed: {e}", flush=True)
                await asyncio.sleep(2)
        await asyncio.sleep(1)
    print("DONE ALL COMMUNICATE!", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
