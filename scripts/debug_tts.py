import asyncio, edge_tts

text = "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Thầy rất vui mừng được đồng hành cùng các em mở màn Chương 2 với Bài 5: Dãy số."

async def test():
    try:
        c = edge_tts.Communicate(text, 'vi-VN-NamMinhNeural')
        await c.save('test_piece.mp3')
        print("SUCCESS:", len(text))
    except Exception as e:
        print("FAIL:", e)

asyncio.run(test())
