# -*- coding: utf-8 -*-
import asyncio
import os
import edge_tts

text_sec4 = (
    "Mục 4. Phương trình tan x bằng m. Vì tập giá trị của hàm số tang là toàn bộ tập số thực R, nên phương trình tan x bằng m luôn luôn có nghiệm với mọi giá trị của m. "
    "Với mỗi m thuộc R, luôn tồn tại duy nhất một góc alpha thuộc khoảng từ trừ pi chia 2 đến pi chia 2 sao cho tan alpha bằng m. "
    "Khi đó, phương trình tan x bằng tan alpha có công thức nghiệm rất gọn: x bằng alpha cộng k pi, với k thuộc Z. "
    "Nếu tính theo đơn vị độ: x bằng alpha độ cộng k một trăm tám mươi độ. "
    "Các em chú ý: phương trình tan x chỉ xác định khi cos x khác 0, tức là x khác pi chia 2 cộng k pi; và chu kì nghiệm ở đây là k pi, chứ không phải k hai pi như ở hàm sin và côsin."
)

async def test():
    for attempt in range(1, 5):
        try:
            print(f"Attempt {attempt} for sec4...")
            c = edge_tts.Communicate(text_sec4, "vi-VN-NamMinhNeural")
            await c.save("assets/audio/test_sec4.mp3")
            size = os.path.getsize("assets/audio/test_sec4.mp3")
            print(f"Success! Size = {size:,} bytes")
            break
        except Exception as e:
            print(f"Error: {e}")
            await asyncio.sleep(2.0)

if __name__ == "__main__":
    asyncio.run(test())
