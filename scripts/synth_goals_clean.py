# -*- coding: utf-8 -*-
import asyncio, os
import edge_tts

text = (
    "Phần hai. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần đạt được các yêu cầu trọng tâm sau đây: "
    "Thứ nhất, nhận biết các khái niệm cơ bản về góc lượng giác, tia đầu, tia cuối, chiều quay và số đo góc lượng giác; hiểu và vận dụng thành thạo hệ thức Sát-lơ. "
    "Thứ hai, hiểu khái niệm đơn vị ra-đi-an, mối quan hệ giữa độ và ra-đi-an, 180 độ bằng pi ra-đi-an, công thức tính độ dài cung tròn l bằng R nhân an-pha. "
    "Thứ ba, nhận biết đường tròn lượng giác gốc A toạ độ 1 chấm phẩy 0, điểm biểu diễn góc lượng giác và định nghĩa các giá trị lượng giác: sin, cô-sin, tang, cô-tang. "
    "Thứ tư, nắm vững các hệ thức lượng giác cơ bản và công thức các góc liên quan đặc biệt: cos đối, sin bù, phụ chéo, hơn kém pi. "
    "Thứ năm, vận dụng giải quyết các bài toán thực tiễn như quỹ đạo trạm không gian I-S-S và bài toán dao động huyết áp tâm trương."
)

async def test():
    comm = edge_tts.Communicate(text, "vi-VN-NamMinhNeural")
    await comm.save("assets/audio/b11_1_goals.mp3")
    print("SUCCESS b11_1_goals.mp3:", os.path.getsize("assets/audio/b11_1_goals.mp3"))

asyncio.run(test())
