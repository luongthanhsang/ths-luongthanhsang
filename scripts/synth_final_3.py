import asyncio, edge_tts, os

VOICE = "vi-VN-NamMinhNeural"

async def test(fname, txt):
    fpath = os.path.join("assets/audio", fname)
    try:
        c = edge_tts.Communicate(txt, VOICE)
        await c.save(fpath)
        print(f"{fname}: {os.path.getsize(fpath):,} bytes")
    except Exception as e:
        print(f"{fname} error: {e}")

async def main():
    await test("b11_5_hook.mp3", "Tình huống mở đầu. Bài toán dự báo số dân. Năm hai nghìn không trăm hai mươi thành phố có năm trăm nghìn dân. Hỏi sau mười năm dân số là bao nhiêu?")
    await asyncio.sleep(4)
    await test("b11_5_sec2b.mp3", "Tiểu mục b: Phương pháp mô tả và truy hồi. Hệ thức truy hồi cho số hạng đầu và công thức tính các số hạng tiếp theo. Tiêu biểu là dãy số Phi bô na xi.")
    await asyncio.sleep(4)
    await test("b11_5_sec3b.mp3", "Tiểu mục b: Dãy số bị chặn. Dãy số bị chặn trên nếu mọi số hạng nhỏ hơn hoặc bằng M lớn. Dãy số bị chặn dưới nếu mọi số hạng lớn hơn hoặc bằng m nhỏ.")

asyncio.run(main())
