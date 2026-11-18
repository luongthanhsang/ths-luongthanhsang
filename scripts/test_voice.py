import asyncio
import edge_tts

async def test():
    comm = edge_tts.Communicate("Thầy Sáng thân ái chào các em.", "vi-VN-NamMinhNeural")
    await comm.save("test_voice.mp3")
    print("Success saving test_voice.mp3!")

asyncio.run(test())
