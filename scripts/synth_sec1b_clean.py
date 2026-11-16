# -*- coding: utf-8 -*-
import asyncio, os
import edge_tts

text = (
    "Tiểu mục b. Hệ thức Sát-lơ. "
    "Với ba tia O u, O v, O w bất kì trong mặt phẳng, ta có hệ thức Sát-lơ nổi tiếng: "
    "Số đo góc O u phẩy O v, cộng số đo góc O v phẩy O w, bằng số đo góc O u phẩy O w, cộng k nhân 360 độ, với k thuộc tập số nguyên Z. "
    "Từ hệ thức này, ta suy ra công thức hiệu quan trọng: "
    "Số đo góc O u phẩy O v bằng số đo góc O x phẩy O v, trừ đi số đo góc O x phẩy O u, cộng k nhân 360 độ, với k thuộc Z. "
    "Nhận xét sư phạm của Thầy Sáng: Công thức này hoàn toàn tương tự công thức hiệu hai vectơ mà các em đã học ở lớp 10: "
    "vectơ A B bằng vectơ O B trừ vectơ O A. "
    "Ví dụ 2 Sách giáo khoa trang 7: Cho số đo góc O x phẩy O u bằng âm 270 độ, số đo góc O x phẩy O v bằng 135 độ. "
    "Tính số đo của góc lượng giác O u phẩy O v. "
    "Lời giải chi tiết: Áp dụng công thức hiệu, ta có: "
    "Số đo góc O u O v bằng số đo O x O v trừ số đo O x O u cộng k 360 độ, "
    "bằng 135 độ trừ đi âm 270 độ cộng k 360 độ, bằng 405 độ cộng k 360 độ, "
    "bằng 45 độ cộng mở ngoặc k cộng 1 đóng ngoặc nhân 360 độ, bằng 45 độ cộng m nhân 360 độ, với m là số nguyên. "
    "Luyện tập 2: Cho góc lượng giác O u phẩy O v có số đo 45 độ và góc lượng giác O v phẩy O w có số đo âm 315 độ. "
    "Tính số đo của góc lượng giác O u phẩy O w. "
    "Hướng dẫn của Thầy Sáng: Áp dụng trực tiếp hệ thức Sát-lơ: "
    "Số đo góc O u O w bằng số đo O u O v cộng số đo O v O w cộng k 360 độ, "
    "bằng 45 độ cộng âm 315 độ cộng k 360 độ, bằng âm 270 độ cộng k 360 độ, với k thuộc Z. "
    "Hai tia O u và O w vuông góc với nhau!"
)

async def test():
    comm = edge_tts.Communicate(text, "vi-VN-NamMinhNeural")
    await comm.save("assets/audio/b11_1_sec1b.mp3")
    print("SUCCESS b11_1_sec1b.mp3:", os.path.getsize("assets/audio/b11_1_sec1b.mp3"))

asyncio.run(test())
