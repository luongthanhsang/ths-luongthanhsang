# -*- coding: utf-8 -*-
import asyncio, edge_tts

async def test():
    comm = edge_tts.Communicate("Công thức độ dài cung tròn.", "vi-VN-NamMinhNeural")
    await comm.save("temp_rate_test.mp3")
    print("Success rate test!")

asyncio.run(test())
