# -*- coding: utf-8 -*-
import asyncio, os
import edge_tts

VOICE = "vi-VN-NamMinhNeural"

async def test():
    comm = edge_tts.Communicate("Thầy Sáng chào các em học sinh.", VOICE)
    await comm.save("scripts/test_audio.mp3")
    print("Saved test_audio.mp3:", os.path.getsize("scripts/test_audio.mp3"))

asyncio.run(test())
