import asyncio, edge_tts

async def main():
    try:
        text = "Thầy Sáng chào các em học sinh Lớp 10!"
        communicate = edge_tts.Communicate(text, "vi-VN-NamMinhNeural")
        await communicate.save("test_sang.mp3")
        print("Success! File size:", len(open("test_sang.mp3", "rb").read()))
    except Exception as e:
        print("Error saving:", repr(e))

if __name__ == '__main__':
    asyncio.run(main())
