import asyncio, edge_tts

async def test(t):
    try:
        c = edge_tts.Communicate(t, 'vi-VN-NamMinhNeural')
        await c.save('test_phrase.mp3')
        print(f"SUCCESS for: '{t}'")
        return True
    except Exception as e:
        print(f"FAIL for: '{t}' -> {e}")
        return False

async def main():
    await test("Thầy Sáng thân mến chào tất cả các em học sinh lớp 11 thân yêu!")
    await test("Thầy Sáng nồng nhiệt chào đón tất cả các em học sinh lớp 11!")
    await test("Thầy Sáng xin chào tất cả các em học sinh lớp 11 thân yêu!")

asyncio.run(main())
