# -*- coding: utf-8 -*-
import asyncio, os
import edge_tts

VOICE = "vi-VN-NamMinhNeural"

async def test():
    text = "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu!"
    comm = edge_tts.Communicate(text, VOICE)
    await comm.save("temp_test.mp3")
    print("Success! Size:", os.path.getsize("temp_test.mp3"))

asyncio.run(test())
