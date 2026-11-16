# -*- coding: utf-8 -*-
import asyncio, edge_tts

async def test():
    s = "Hôm nay, thầy trò chúng ta sẽ cùng bước vào Chương 1: Hàm số lượng giác và phương trình lượng giác, với bài học mở đầu vô cùng quan trọng: Bài 1. Giá trị lượng giác của góc lượng giác."
    try:
        comm = edge_tts.Communicate(s, "vi-VN-NamMinhNeural")
        await comm.save("temp_chunk_err.mp3")
        print("Success!")
    except Exception as e:
        print("Exception:", type(e), e)

asyncio.run(test())
