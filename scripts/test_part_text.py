# -*- coding: utf-8 -*-
import asyncio, edge_tts

async def test_part(text, label):
    try:
        comm = edge_tts.Communicate(text, "vi-VN-NamMinhNeural")
        await comm.save(f"temp_{label}.mp3")
        print(f"[{label}] OK")
    except Exception as e:
        print(f"[{label}] FAIL: {e}")

async def main():
    await test_part("Hôm nay, thầy trò chúng ta sẽ cùng bước vào Chương một.", "p1")
    await test_part("Hàm số lượng giác và phương trình lượng giác.", "p2")
    await test_part("Chương 1: Hàm số lượng giác", "p3")
    await test_part("Bài 1. Giá trị lượng giác của góc lượng giác.", "p4")
    await test_part("Bài một, Giá trị lượng giác của góc lượng giác.", "p5")

asyncio.run(main())
