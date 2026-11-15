import asyncio, os
import edge_tts

VOICE = "vi-VN-NamMinhNeural"

tasks = [
    # BÀI 5
    ("assets/audio/b10_5_welcome.mp3", 
     "Thầy Sáng thân ái chào toàn thể các em học sinh Lớp 10! Thầy rất vui khi được đồng hành cùng các em trong Chương ba: Hệ thức lượng trong tam giác. Hôm nay, Thầy trò mình cùng khám phá Bài 5: Giá trị lượng giác của một góc từ 0 độ đến 180 độ. Ở lớp 9, các em đã rất quen thuộc với tỉ số lượng giác của góc nhọn trong tam giác vuông. Nhưng trong không gian thực tế, các góc chuyển động của bánh xe, cánh tay robot hay quỹ đạo vệ tinh có thể là góc tù, thậm chí góc bẹt. Nửa đường tròn đơn vị hôm nay sẽ mở ra cho các em một chân trời toán học hoàn toàn mới. Thầy chúc các em học thật hứng khởi và tiếp thu trọn vẹn kiến thức nhé!"),
    
    ("assets/audio/b10_5_goals.mp3",
     "Sau bài học này, các em cần đạt được bốn mục tiêu then chốt: Thứ nhất, hiểu rõ định nghĩa giá trị lượng giác của góc từ 0 đến 180 độ trên nửa đường tròn đơn vị. Thứ hai, vận dụng thành thạo mối quan hệ hai góc bù nhau và hai góc phụ nhau. Thứ ba, bấm máy tính cầm tay chính xác. Và thứ tư, giải quyết thành công các bài toán thực tiễn như vòng quay đu quay khổng lồ."),
    
    ("assets/audio/b10_5_hook.mp3",
     "Lượng giác bắt nguồn từ nhu cầu tính toán góc và khoảng cách trong thiên văn học, hàng hải và dẫn đường vệ tinh. Ở lớp 9, chúng ta chỉ mới biết tỉ số lượng giác của góc nhọn trong tam giác vuông. Vậy khi góc quay là góc tù, làm sao để định nghĩa sin, cos, tan và cot? Nửa đường tròn đơn vị chính là lời giải hoàn hảo kết nối đại số và hình học toạ độ. Cùng thầy khám phá ngay nhé!"),
    
    ("assets/audio/b10_5_sec1.mp3",
     "Mục một, định nghĩa giá trị lượng giác của một góc. Trong mặt phẳng tọa độ Oxy, nửa đường tròn tâm O bán kính R bằng một nằm phía trên trục hoành được gọi là nửa đường tròn đơn vị. Với mỗi góc alpha từ 0 đến 180 độ, ta xác định duy nhất điểm M có tọa độ x0, y0 trên nửa đường tròn sao cho góc xOM bằng alpha. Khi đó: sin alpha bằng tung độ y0; cos alpha bằng hoành độ x0; tan alpha bằng y0 chia x0; và cot alpha bằng x0 chia y0. Các em hãy chú ý: sin của góc từ 0 đến 180 độ luôn không âm, còn cos của góc tù thì luôn mang dấu âm nhé!"),
    
    ("assets/audio/b10_5_sec2.mp3",
     "Mục hai, mối quan hệ giữa các giá trị lượng giác của hai góc bù nhau. Hai góc bù nhau là hai góc có tổng số đo bằng 180 độ, tức là alpha và 180 độ trừ alpha. Trên nửa đường tròn đơn vị, hai điểm M và M phẩy đối xứng nhau qua trục tung Oy. Vì vậy, chúng có cùng tung độ, nhưng hoành độ đối nhau. Ta có quy tắc thần chú: Sin bù, cos đối, tan đối, cot đối. Tức là: sin của 180 độ trừ alpha bằng sin alpha; còn cos, tan và cot của 180 độ trừ alpha đều bằng số đối của cos, tan và cot alpha. Nhờ tính chất tuyệt vời này, các em có thể dễ dàng quy bất kì góc tù nào về góc nhọn để tính toán cực kì nhanh chóng!"),
    
    ("assets/audio/b10_5_sec3.mp3",
     "Mục ba, bài toán thực tiễn Vòng quay đu quay khổng lồ trang 37 sách giáo khoa. Một chiếc đu quay có bán kính 75 mét, tâm vòng quay ở độ cao 90 mét so với mặt đất, thời gian thực hiện một vòng quay trọn vẹn là 30 phút. Một người bước vào cabin ở vị trí thấp nhất, tức là cách mặt đất 15 mét. Câu hỏi đặt ra là: Sau 20 phút quay đều, người đó sẽ ở độ cao bao nhiêu mét? Bài toán này được mô hình hoá chính xác nhờ toạ độ góc lượng giác trên đường tròn. Cùng thầy xem mô hình giải chi tiết bên dưới nhé!"),
    
    ("assets/audio/b10_5_wrapup.mp3",
     "Nửa đường tròn đơn vị là chiếc cầu nối tuyệt hảo đưa các tỉ số lượng giác góc nhọn lớp 9 vươn mình ra toàn bộ góc từ 0 đến 180 độ. Các em chỉ cần khắc cốt ghi tâm câu khẩu quyết của Thầy Sáng: Sin bù, phụ chéo, nhất cả, nhị sin. Hãy rèn luyện thường xuyên các dạng bài tập trắc nghiệm ở phần 5 bên dưới để thành thạo tuyệt đối nhé!"),

    # BÀI 6
    ("assets/audio/b10_6_welcome.mp3",
     "Thầy Sáng chào các em học sinh Lớp 10 thân yêu! Chào mừng các em đến với Bài 6: Hệ thức lượng trong tam giác, một trong những bài học trọng tâm và ứng dụng thực tiễn rực rỡ nhất của hình học phẳng. Từ thời cổ đại, các nhà toán học đã tìm ra cách đo khoảng cách đến những hòn đảo xa xôi, đo chiều cao của kim tự tháp hay khoảng cách tới các vì sao mà không cần đặt chân đến. Tất cả bí mật tuyệt diệu đó nằm ở Định lí Côsin, Định lí Sin và các công thức tính diện tích tam giác mà Thầy trò mình sẽ cùng chinh phục ngay hôm nay. Hãy cùng Thầy bắt đầu tiết học với niềm đam mê khám phá bất tận nhé!"),
    
    ("assets/audio/b10_6_goals.mp3",
     "Sau bài học số sáu, các em cần đạt được bốn mục tiêu trọng tâm: Thứ nhất, làm chủ định lí côsin và công thức đường trung tuyến. Thứ hai, vận dụng định lí sin liên hệ với bán kính đường tròn ngoại tiếp. Thứ ba, thành thạo năm công thức tính diện tích tam giác, đặc biệt là công thức Hê-rông. Và thứ tư, giải quyết xuất sắc các bài toán đo đạc khoảng cách thực tế như bài toán Tháp Rùa Hồ Gươm."),
    
    ("assets/audio/b10_6_hook.mp3",
     "Ngắm Tháp Rùa cổ kính nằm giữa lòng Hồ Hoàn Kiếm, làm sao để đo chính xác khoảng cách từ bờ hồ tới Tháp Rùa mà không cần bơi hay chèo thuyền qua hồ? Chỉ với hai chiếc cọc tiêu cắm trên bờ, một thước đo khoảng cách và một giác kế ngắm góc, các hệ thức lượng trong tam giác sẽ giúp các kỹ sư đo đạc khoảng cách chính xác đến từng centimet. Cùng thầy khám phá bí mật tuyệt vời này nhé!"),
    
    ("assets/audio/b10_6_sec1.mp3",
     "Mục một, định lí côsin trong tam giác. Trong một tam giác ABC bất kì, bình phương một cạnh bằng tổng bình phương hai cạnh kia trừ đi hai lần tích của hai cạnh đó với côsin của góc xen giữa. Cụ thể: a bình phương bằng b bình cộng c bình trừ hai b c nhân cos A. Khi góc A vuông, cos A bằng 0, định lí côsin chính là định lí Pi-ta-go quen thuộc. Từ định lí côsin, ta suy ra công thức tính góc: cos A bằng b bình cộng c bình trừ a bình, tất cả chia cho hai b c. Ngoài ra, ta còn có công thức tính độ dài đường trung tuyến m a bình phương bằng hai lần tổng b bình cộng c bình trừ a bình, tất cả chia cho bốn."),
    
    ("assets/audio/b10_6_sec2.mp3",
     "Mục hai, định lí sin. Trong mọi tam giác ABC, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng nhau và bằng hai lần bán kính đường tròn ngoại tiếp, tức là: a chia sin A bằng b chia sin B bằng c chia sin C và bằng 2R. Nhờ định lí sin, hễ các em biết một cặp cạnh đối và góc đối, ta có thể tính ngay bán kính đường tròn ngoại tiếp R, hoặc tính các cạnh và các góc còn lại cực kì thanh thoát!"),
    
    ("assets/audio/b10_6_sec3.mp3",
     "Mục ba, giải tam giác và ứng dụng thực tiễn. Giải tam giác là bài toán tìm số đo các cạnh và các góc còn lại khi đã biết một số yếu tố của tam giác đó. Chúng ta thường gặp ba trường hợp điển hình: biết hai cạnh và góc xen giữa; biết ba cạnh; hoặc biết một cạnh và hai góc kề. Trở lại bài toán đo Tháp Rùa giữa hồ Hoàn Kiếm, ta cắm hai cọc tiêu A và B trên bờ, đo được khoảng cách AB và hai góc ngắm tới Tháp Rùa C. Áp dụng định lí sin, ta tính được khoảng cách từ vị trí A tới Tháp Rùa một cách chính xác tuyệt đối mà không cần đặt chân xuống nước!"),
    
    ("assets/audio/b10_6_sec4.mp3",
     "Mục bốn, các công thức tính diện tích tam giác. Trong hình học, chúng ta có năm công thức tính diện tích tam giác vô cùng lợi hại. Thứ nhất, diện tích bằng một nửa cạnh đáy nhân chiều cao tương ứng. Thứ hai, diện tích bằng một nửa tích hai cạnh nhân sin của góc xen giữa. Thứ ba, diện tích bằng tích ba cạnh a b c chia cho 4R. Thứ tư, diện tích bằng nửa chu vi p nhân bán kính đường tròn nội tiếp r. Và thứ năm, khi biết độ dài cả ba cạnh, công thức Hê-rông nổi tiếng cho phép ta tính diện tích bằng căn bậc hai của p nhân p trừ a, nhân p trừ b, nhân p trừ c. Nắm vững năm công thức này, các em có thể giải quyết mọi bài toán diện tích từ đơn giản đến nâng cao!"),
    
    ("assets/audio/b10_6_wrapup.mp3",
     "Hệ thức lượng trong tam giác là kho báu hình học kết nối các cạnh, các góc và diện tích của mọi tam giác trong vũ trụ. Nắm vững Định lí Côsin, Định lí Sin và Công thức Hê-rông, các em có trong tay chiếc chìa khóa vạn năng để đo đạc và kiến thiết thế giới. Hãy cùng Thầy luyện tập ngay các câu hỏi trắc nghiệm ở phần 5 nhé!")
]

async def generate_all():
    os.makedirs("assets/audio", exist_ok=True)
    for path, text in tasks:
        print(f"Generating {path}...")
        communicate = edge_tts.Communicate(text, VOICE)
        await communicate.save(path)
        size = os.path.getsize(path)
        print(f" -> Done: {path} ({size} bytes)")
    print("\nALL AUDIO FILES GENERATED SUCCESSFULLY!")

if __name__ == "__main__":
    asyncio.run(generate_all())
