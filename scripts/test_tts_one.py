# -*- coding: utf-8 -*-
import asyncio
import edge_tts

async def test():
    text = "Tình huống mở đầu: Bài toán góc bắn của nòng pháo. Trong quân sự và vật lý, một quả đạn pháo được bắn ra khỏi nòng pháo với vận tốc ban đầu v không đổi từ mặt đất."
    comm = edge_tts.Communicate(text, "vi-VN-NamMinhNeural")
    await comm.save("assets/audio/test_hook.mp3")
    print("Success test!")

if __name__ == "__main__":
    asyncio.run(test())
