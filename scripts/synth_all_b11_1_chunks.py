# -*- coding: utf-8 -*-
"""
Chương trình tổng hợp giọng đọc AI Thầy Sáng đọc NGUYÊN VĂN 100%
dùng phương pháp ghép câu (sentence-chunking) siêu bền bỉ, không lo rớt mạng.
"""
import asyncio, os, base64, json, time, re
import edge_tts

VOICE = "vi-VN-NamMinhNeural"
AUDIO_DIR = "assets/audio"
os.makedirs(AUDIO_DIR, exist_ok=True)
os.makedirs("temp_chunks", exist_ok=True)

SCRIPTS = {
    "b11_1_welcome.mp3": (
        "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! "
        "Hôm nay, thầy trò chúng ta sẽ cùng bước vào Chương 1: Hàm số lượng giác và phương trình lượng giác, "
        "với bài học mở đầu vô cùng quan trọng: Bài 1. Giá trị lượng giác của góc lượng giác. "
        "Ở lớp 10, các em đã biết giá trị lượng giác của các góc hình học từ 0 độ đến 180 độ. "
        "Lên lớp 11, chúng ta sẽ mở rộng khái niệm góc lượng giác với số đo tùy ý từ âm vô cực đến dương vô cực, "
        "tìm hiểu đơn vị ra-đi-an, đường tròn lượng giác và các công thức lượng giác nền tảng. "
        "Bài học này là chiếc chìa khóa vàng cho toàn bộ chương trình lượng giác và vật lý dao động lớp 11. "
        "Các em hãy chuẩn bị sách vở, bút thước và máy tính cầm tay, tập trung lắng nghe và tương tác cùng Thầy nhé!"
    ),

    "b11_1_goals.mp3": (
        "Phần 2. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần đạt được các yêu cầu trọng tâm sau: "
        "Thứ nhất: Nhận biết các khái niệm cơ bản về góc lượng giác, tia đầu, tia cuối, chiều quay và số đo góc lượng giác; "
        "hiểu và vận dụng thành thạo hệ thức Sát-lơ. "
        "Thứ hai: Hiểu khái niệm đơn vị ra-đi-an, mối quan hệ giữa độ và ra-đi-an: 180 độ bằng pi ra-đi-an, "
        "công thức tính độ dài cung tròn: l bằng R nhân an-pha. "
        "Thứ ba: Nhận biết đường tròn lượng giác gốc A toạ độ 1 chấm phẩy 0, "
        "điểm biểu diễn góc lượng giác và định nghĩa các giá trị lượng giác: sin, cô-sin, tang, cô-tang. "
        "Thứ tư: Nắm vững các hệ thức lượng giác cơ bản và công thức các góc liên quan đặc biệt: "
        "cos đối, sin bù, phụ chéo, hơn kém pi. "
        "Thứ năm: Vận dụng giải quyết các bài toán thực tiễn như quỹ đạo trạm không gian I-S-S và bài toán dao động huyết áp tâm trương."
    ),

    "b11_1_hook.mp3": (
        "Phần 3. Tiến trình bài học. Tình huống mở đầu: Quỹ đạo Trạm Vũ trụ Quốc tế I-S-S. "
        "Trạm vũ trụ quốc tế I-S-S nằm trong một quỹ đạo tròn cách bề mặt Trái Đất khoảng 400 kilômét theo Hình 1.1 Sách giáo khoa trang 5. "
        "Bán kính Trái Đất là khoảng 6 nghìn 400 kilômét. "
        "Câu hỏi khởi động: Nếu trạm mặt đất theo dõi trạm I-S-S khi nó nằm trong góc 45 độ ở tâm của quỹ đạo tròn này "
        "phía trên ăng-ten theo dõi, thì trạm vũ trụ I-S-S đã di chuyển được bao nhiêu kilômét trong khi đang được trạm mặt đất theo dõi? "
        "Để tính được quãng đường cong này một cách nhanh chóng và chính xác, chúng ta cần tới một đơn vị đo góc mới trong toán học: đơn vị ra-đi-an. "
        "Hãy cùng Thầy khám phá bài học ngay sau đây!"
    ),

    "b11_1_sec1a.mp3": (
        "Mục 1. Góc lượng giác. Tiểu mục a: Khái niệm góc lượng giác và số đo của góc lượng giác. "
        "Một nhỏ. Khái niệm góc lượng giác: Trong mặt phẳng, cho hai tia O u và O v. Xét tia O m cùng nằm trong mặt phẳng này. "
        "Nếu tia O m quay quanh điểm O, theo một chiều nhất định từ tia O u đến tia O v, "
        "thì ta nói nó quét một góc lượng giác với tia đầu O u, tia cuối O v, kí hiệu là mở ngoặc O u phẩy O v đóng ngoặc. "
        "Quy ước: Chiều quay ngược chiều kim đồng hồ là chiều dương; chiều quay cùng chiều kim đồng hồ là chiều âm. "
        "Hai nhỏ. Số đo của góc lượng giác: Khi tia O m quay góc an-pha độ thì góc lượng giác mà nó quét có số đo an-pha độ. "
        "Kí hiệu số đo của góc lượng giác O u phẩy O v là s đ mở ngoặc O u phẩy O v đóng ngoặc. "
        "Các em hãy quan sát 4 sơ đồ xoắn ốc Ác-si-mét trên màn hình: "
        "Hình thứ nhất: Quay 1 vòng theo chiều dương về trùng tia O v, số đo góc O u O v bằng 360 độ. "
        "Hình thứ hai: Quay 2 vòng theo chiều dương, số đo góc O u O v bằng 720 độ. "
        "Hình thứ ba: Quay nửa vòng theo chiều âm đến trùng tia đối của O u, số đo góc O u O v bằng âm 180 độ. "
        "Hình thứ tư: Quay 1,5 vòng theo chiều âm, số đo góc O u O v bằng âm 540 độ. "
        "Chú ý quan trọng: Số đo của các góc lượng giác có cùng tia đầu O u và cùng tia cuối O v sai khác nhau một bội nguyên của 360 độ, "
        "theo công thức: s đ mở ngoặc O u phẩy O v đóng ngoặc bằng an-pha độ cộng k nhân 360 độ, với k thuộc tập số nguyên Z. "
        "Ví dụ 1 Sách giáo khoa trang 6: Cho góc hình học u O v bằng 45 độ. "
        "Xác định số đo của góc lượng giác O u phẩy O v khi tia O m quay theo chiều dương góc 45 độ; "
        "và khi quay ngược lại theo chiều âm 1 vòng và 45 độ. "
        "Lời giải: Khi quay theo chiều dương góc 45 độ, s đ O u O v bằng 45 độ. "
        "Khi quay theo chiều âm 1 vòng cộng 45 độ, s đ O u O v bằng âm của 360 độ cộng 45 độ, bằng âm 405 độ. "
        "Luyện tập 1: Cho góc lượng giác O u phẩy O v có số đo bằng âm 225 độ. "
        "Hỏi trong các số sau, số nào là số đo của một góc lượng giác có cùng tia đầu và tia cuối với góc lượng giác đã cho? "
        "a) 135 độ; b) 495 độ; c) âm 585 độ; d) 315 độ. "
        "Hướng dẫn của Thầy Sáng: Ta có công thức tổng quát: s đ O u O v bằng âm 225 độ cộng k nhân 360 độ. "
        "Với k bằng 1: âm 225 độ cộng 360 độ bằng 135 độ, chọn đáp án a. "
        "Với k bằng 2: âm 225 độ cộng 720 độ bằng 495 độ, chọn đáp án b. "
        "Với k bằng âm 1: âm 225 độ trừ 360 độ bằng âm 585 độ, chọn đáp án c. "
        "Với 315 độ: 315 độ trừ đi âm 225 độ bằng 540 độ, không chia hết cho 360 độ, nên ta loại đáp án d. "
        "Như vậy các đáp án đúng là a, b và c."
    ),

    "b11_1_sec1b.mp3": (
        "Tiểu mục b: Hệ thức Sát-lơ. "
        "Với ba tia O u, O v, O w bất kì trong mặt phẳng, ta có hệ thức Sát-lơ: "
        "Số đo góc O u phẩy O v, cộng số đo góc O v phẩy O w, bằng số đo góc O u phẩy O w, cộng k nhân 360 độ, với k thuộc tập số nguyên Z. "
        "Hệ quả công thức hiệu quan trọng: "
        "Với ba tia O u, O v, O x bất kì, ta có: "
        "Số đo góc O u phẩy O v bằng số đo góc O x phẩy O v, trừ đi số đo góc O x phẩy O u, cộng k nhân 360 độ, với k thuộc Z. "
        "Nhận xét sư phạm của Thầy Sáng: Công thức này hoàn toàn tương tự công thức hiệu hai vectơ mà các em đã học ở lớp 10: "
        "vectơ A B bằng vectơ O B trừ vectơ O A. "
        "Ví dụ 2 Sách giáo khoa trang 7: Cho số đo góc O x phẩy O u bằng âm 270 độ, số đo góc O x phẩy O v bằng 135 độ. "
        "Tính số đo của góc lượng giác O u phẩy O v. "
        "Lời giải: Áp dụng công thức hiệu, ta có: "
        "s đ O u O v bằng s đ O x O v trừ s đ O x O u cộng k 360 độ, "
        "bằng 135 độ trừ đi âm 270 độ cộng k 360 độ, bằng 405 độ cộng k 360 độ, "
        "bằng 45 độ cộng mở ngoặc k cộng 1 đóng ngoặc nhân 360 độ, bằng 45 độ cộng m nhân 360 độ, với m thuộc Z. "
        "Luyện tập 2: Cho một góc lượng giác O u phẩy O v có số đo 45 độ và một góc lượng giác O v phẩy O w có số đo âm 315 độ. "
        "Tính số đo của góc lượng giác O u phẩy O w. "
        "Hướng dẫn của Thầy Sáng: Áp dụng trực tiếp hệ thức Sát-lơ: "
        "s đ O u O w bằng s đ O u O v cộng s đ O v O w cộng k 360 độ, "
        "bằng 45 độ cộng âm 315 độ cộng k 360 độ, bằng âm 270 độ cộng k 360 độ, với k thuộc Z. "
        "Hai tia O u và O w vuông góc với nhau!"
    ),

    "b11_1_sec2a.mp3": (
        "Mục 2. Đơn vị đo góc và độ dài cung tròn. Tiểu mục a: Đơn vị đo góc và cung tròn, đơn vị ra-đi-an. "
        "Một nhỏ. Khái niệm ra-đi-an: "
        "Cho đường tròn tâm O bán kính R. Cung tròn có độ dài đúng bằng bán kính R được gọi là cung có số đo 1 ra-đi-an. "
        "Góc ở tâm chắn cung đó được gọi là góc có số đo 1 ra-đi-an, viết tắt là 1 r a d. "
        "Hai nhỏ. Quan hệ giữa độ và ra-đi-an: "
        "Vì đường tròn bán kính R có chu vi bằng 2 pi R, do đó cả đường tròn có số đo 2 pi ra-đi-an, tương ứng với 360 độ. "
        "Từ đó ta có hệ thức then chốt: 180 độ bằng pi ra-đi-an. "
        "Công thức chuyển đổi: "
        "Một độ bằng pi chia 180 ra-đi-an. Do đó, a độ bằng a nhân pi chia 180 ra-đi-an. "
        "Một ra-đi-an bằng 180 chia pi độ, xấp xỉ 57 độ 17 phút 45 giây. "
        "Do đó, an-pha ra-đi-an bằng an-pha nhân 180 chia pi độ. "
        "Chú ý: Khi viết số đo của một góc theo đơn vị ra-đi-an, người ta thường không viết chữ ra-đi-an sau số đo. "
        "Chẳng hạn, góc pi phần 2 được hiểu là góc pi phần 2 ra-đi-an. "
        "Bảng quy đổi các góc đặc biệt: "
        "0 độ ứng với 0 ra-đi-an; 30 độ ứng với pi phần 6; 45 độ ứng với pi phần 4; 60 độ ứng với pi phần 3; "
        "90 độ ứng với pi phần 2; 120 độ ứng với 2 pi phần 3; 135 độ ứng với 3 pi phần 4; "
        "150 độ ứng với 5 pi phần 6; 180 độ ứng với pi; 360 độ ứng với 2 pi. "
        "Ví dụ 3 Sách giáo khoa trang 8: "
        "a) Đổi từ độ sang ra-đi-an: 45 độ bằng 45 nhân pi chia 180 bằng pi phần 4; "
        "âm 150 độ bằng âm 150 nhân pi chia 180 bằng âm 5 pi phần 6. "
        "b) Đổi từ ra-đi-an sang độ: 3 pi phần 8 ra-đi-an bằng mở ngoặc 3 pi phần 8 nhân 180 chia pi đóng ngoặc độ, bằng 67 độ 30 phút; "
        "âm 2 ra-đi-an bằng mở ngoặc âm 2 nhân 180 chia pi đóng ngoặc độ, xấp xỉ âm 114 độ 35 phút 30 giây. "
        "Luyện tập 3: "
        "a) Đổi từ độ sang ra-đi-an các góc: 36 độ và âm 210 độ. "
        "Lời giải: 36 độ bằng 36 nhân pi chia 180 bằng pi phần 5 ra-đi-an; "
        "âm 210 độ bằng âm 210 nhân pi chia 180 bằng âm 7 pi phần 6 ra-đi-an. "
        "b) Đổi từ ra-đi-an sang độ các góc: 5 pi phần 9 và âm 4 ra-đi-an. "
        "Lời giải: 5 pi phần 9 ra-đi-an bằng 5 nhân 180 chia 9 bằng 100 độ; "
        "âm 4 ra-đi-an bằng âm 4 nhân 180 chia pi xấp xỉ âm 229 độ 10 phút 59 giây."
    ),

    "b11_1_sec2b.mp3": (
        "Tiểu mục b: Độ dài cung tròn và Giải bài toán mở đầu trạm vũ trụ I-S-S. "
        "Công thức độ dài cung tròn: "
        "Một cung của đường tròn bán kính R có số đo an-pha ra-đi-an thì có độ dài l bằng R nhân an-pha. "
        "Giải quyết bài toán mở đầu Trạm vũ trụ Quốc tế I-S-S: "
        "Đề bài: Trạm vũ trụ I-S-S nằm trong quỹ đạo tròn cách bề mặt Trái Đất 400 kilômét, "
        "bán kính Trái Đất là 6 nghìn 400 kilômét. Tính quãng đường trạm di chuyển khi góc ở tâm là 45 độ. "
        "Hướng dẫn giải chi tiết của Thầy Sáng: "
        "Bước 1: Bán kính quỹ đạo tròn của trạm I-S-S tính từ tâm Trái Đất là: "
        "R bằng 6 nghìn 400 cộng 400 bằng 6 nghìn 800 kilômét. "
        "Bước 2: Đổi số đo góc ở tâm sang đơn vị ra-đi-an: "
        "an-pha bằng 45 độ bằng 45 nhân pi chia 180 bằng pi phần 4 ra-đi-an. "
        "Bước 3: Quãng đường trạm vũ trụ I-S-S di chuyển khi đang được trạm mặt đất theo dõi là: "
        "l bằng R nhân an-pha, bằng 6 nghìn 800 nhân pi phần 4, bằng 1 nghìn 700 pi, "
        "xấp xỉ 5 nghìn 340 phẩy 71 kilômét, làm tròn đến hàng đơn vị là 5 nghìn 341 kilômét. "
        "Ví dụ 4: Một đường tròn có bán kính 20 centimét. Tính độ dài của cung trên đường tròn đó có số đo bằng 3 pi phần 4. "
        "Lời giải: Độ dài cung tròn là: l bằng R nhân an-pha bằng 20 nhân 3 pi chia 4 bằng 15 pi centimét, xấp xỉ 47 phẩy 12 centimét. "
        "Luyện tập 4: Một chiếc đu quay có bán kính 30 mét quay đều với tốc độ 1 vòng hết 10 phút. "
        "Tính quãng đường một cabin đi được sau 2 phút và sau 5 phút. "
        "Lời giải: Sau 2 phút, cabin quay được 2 phần 10 bằng 1 phần 5 vòng, tức là góc an-pha bằng 2 pi chia 5 ra-đi-an. "
        "Quãng đường đi được là: l bằng 30 nhân 2 pi chia 5 bằng 12 pi mét, xấp xỉ 37 phẩy 7 mét. "
        "Sau 5 phút, cabin quay nửa vòng, quãng đường đi được là: l bằng 30 nhân pi xấp xỉ 94 phẩy 25 mét."
    ),

    "b11_1_sec3a.mp3": (
        "Mục 3. Giá trị lượng giác của góc lượng giác. Tiểu mục a: Đường tròn lượng giác. "
        "Một nhỏ. Định nghĩa đường tròn lượng giác: "
        "Trong mặt phẳng toạ độ O x y, đường tròn lượng giác là đường tròn tâm tại gốc toạ độ O, bán kính R bằng 1, "
        "trên đó chọn chiều quay ngược chiều kim đồng hồ làm chiều dương và lấy điểm A toạ độ 1 chấm phẩy 0 làm điểm gốc của đường tròn. "
        "Hai nhỏ. Điểm biểu diễn của góc lượng giác trên đường tròn lượng giác: "
        "Điểm M trên đường tròn lượng giác sao cho số đo góc lượng giác tia đầu O A, tia cuối O M bằng an-pha "
        "được gọi là điểm biểu diễn góc lượng giác có số đo an-pha. "
        "Định lí then chốt: Mỗi góc lượng giác an-pha được biểu diễn bởi duy nhất một điểm M trên đường tròn lượng giác. "
        "Ngược lại, mỗi điểm M trên đường tròn lượng giác biểu diễn cho vô số góc lượng giác có số đo an-pha cộng k 2 pi, với k thuộc tập số nguyên Z. "
        "Ví dụ 5: Xác định điểm biểu diễn trên đường tròn lượng giác của các góc: 5 pi phần 6; âm 3 pi phần 4; và 5 pi phần 2. "
        "Lời giải: Điểm biểu diễn góc 5 pi phần 6 bằng 150 độ thuộc góc phần tư thứ hai. "
        "Điểm biểu diễn góc âm 3 pi phần 4 bằng âm 135 độ thuộc góc phần tư thứ ba. "
        "Điểm biểu diễn góc 5 pi phần 2 bằng 2 pi cộng pi phần 2, trùng với điểm biểu diễn góc pi phần 2 tại điểm B toạ độ 0 chấm phẩy 1 trên trục tung. "
        "Luyện tập 5: Biểu diễn trên đường tròn lượng giác các góc lượng giác có số đo: âm 5 pi phần 3; và 7 pi phần 4. "
        "Lời giải: Góc âm 5 pi phần 3 bằng âm 2 pi cộng pi phần 3, có điểm biểu diễn trùng với góc pi phần 3 bằng 60 độ trong góc phần tư thứ nhất. "
        "Góc 7 pi phần 4 bằng 2 pi trừ pi phần 4, có điểm biểu diễn trùng với góc âm pi phần 4 trong góc phần tư thứ tư."
    ),

    "b11_1_sec3b.mp3": (
        "Tiểu mục b: Các giá trị lượng giác của góc lượng giác. "
        "Định nghĩa: Giả sử điểm M toạ độ x chấm phẩy y trên đường tròn lượng giác biểu diễn góc lượng giác có số đo an-pha. Khi đó: "
        "Tung độ y của điểm M gọi là sin của an-pha, kí hiệu sin an-pha bằng y. Trục tung O y được gọi là trục sin. "
        "Hoành độ x của điểm M gọi là cô-sin của an-pha, kí hiệu cos an-pha bằng x. Trục hoành O x được gọi là trục cô-sin. "
        "Tỉ số y chia x với x khác 0 gọi là tang của an-pha, kí hiệu tan an-pha bằng sin an-pha chia cos an-pha bằng y chia x. "
        "Tỉ số x chia y với y khác 0 gọi là cô-tang của an-pha, kí hiệu cot an-pha bằng cos an-pha chia sin an-pha bằng x chia y. "
        "Các em hãy quan sát kỹ Hình 1.9b trên màn hình: "
        "Thầy đã vẽ điểm M nằm trong góc phần tư thứ ba. "
        "Khi hạ hình chiếu của M vuông góc xuống trục hoành O x, ta nhận được hoành độ x nhỏ hơn 0, tức là cos an-pha mang dấu âm. "
        "Khi hạ hình chiếu của M vuông góc sang trục tung O y, ta nhận được tung độ y nhỏ hơn 0, tức là sin an-pha mang dấu âm. "
        "Từ đó suy ra tang bằng sin chia cos, là tỉ số của hai số âm nên tan an-pha mang dấu dương lớn hơn 0; "
        "và cot an-pha cũng mang dấu dương lớn hơn 0! "
        "Bảng dấu 4 góc phần tư: "
        "Góc phần tư thứ nhất: sin dương, cos dương, tan dương, cot dương. "
        "Góc phần tư thứ hai: sin dương, cos âm, tan âm, cot âm. "
        "Góc phần tư thứ ba: sin âm, cos âm, tan dương, cot dương. "
        "Góc phần tư thứ tư: sin âm, cos dương, tan âm, cot âm. "
        "Ví dụ 6: Tính các giá trị lượng giác của góc an-pha bằng âm pi phần 3. "
        "Lời giải: Điểm M biểu diễn góc âm pi phần 3 có toạ độ là 1 phần 2 chấm phẩy âm căn 3 chia 2. "
        "Vậy cos âm pi phần 3 bằng 1 phần 2; sin âm pi phần 3 bằng âm căn 3 chia 2; "
        "tan âm pi phần 3 bằng âm căn 3; cot âm pi phần 3 bằng âm căn 3 chia 3. "
        "Luyện tập 6: Tính các giá trị lượng giác của góc an-pha bằng 135 độ và 5 pi phần 6. "
        "Lời giải: Với 135 độ thuộc góc phần tư thứ hai: sin 135 độ bằng căn 2 chia 2; "
        "cos 135 độ bằng âm căn 2 chia 2; tan 135 độ bằng âm 1; cot 135 độ bằng âm 1. "
        "Với 5 pi phần 6: sin 5 pi phần 6 bằng 1 phần 2; cos 5 pi phần 6 bằng âm căn 3 chia 2; "
        "tan 5 pi phần 6 bằng âm căn 3 chia 3; cot 5 pi phần 6 bằng âm căn 3."
    ),

    "b11_1_sec4a.mp3": (
        "Mục 4. Quan hệ giữa các giá trị lượng giác. Tiểu mục a: Các công thức lượng giác cơ bản. "
        "Trên đường tròn lượng giác, tam giác vuông tạo bởi điểm M và hình chiếu của nó có cạnh kề bằng trị tuyệt đối cos, "
        "cạnh đối bằng trị tuyệt đối sin, cạnh huyền bằng bán kính R bằng 1. "
        "Theo định lí Pi-ta-go, ta có 4 công thức lượng giác cơ bản: "
        "Công thức 1: sin bình phương an-pha cộng cos bình phương an-pha bằng 1. "
        "Công thức 2: 1 cộng tang bình phương an-pha bằng 1 chia cos bình phương an-pha, với an-pha khác pi phần 2 cộng k pi. "
        "Công thức 3: 1 cộng cô-tang bình phương an-pha bằng 1 chia sin bình phương an-pha, với an-pha khác k pi. "
        "Công thức 4: tang an-pha nhân cô-tang an-pha bằng 1. "
        "Ví dụ 9: Cho sin an-pha bằng 3 phần 5 và pi phần 2 nhỏ hơn an-pha nhỏ hơn pi. "
        "Tính các giá trị lượng giác còn lại của góc an-pha. "
        "Lời giải: Vì pi phần 2 nhỏ hơn an-pha nhỏ hơn pi, an-pha thuộc góc phần tư thứ hai nên cos an-pha mang dấu âm nhỏ hơn 0. "
        "Áp dụng công thức 1: cos bình an-pha bằng 1 trừ sin bình an-pha bằng 1 trừ 9 phần 25 bằng 16 phần 25. "
        "Do cos âm nên ta lấy cos an-pha bằng âm căn của 16 phần 25 bằng âm 4 phần 5. "
        "Từ đó tính được: tan an-pha bằng sin chia cos bằng 3 phần 5 chia âm 4 phần 5 bằng âm 3 phần 4; "
        "cot an-pha bằng 1 chia tan an-pha bằng âm 4 phần 3. "
        "Luyện tập 7: Cho cos an-pha bằng âm 2 phần 3 và pi nhỏ hơn an-pha nhỏ hơn 3 pi phần 2. "
        "Tính sin an-pha, tan an-pha và cot an-pha. "
        "Lời giải: Vì an-pha thuộc góc phần tư thứ ba nên sin an-pha mang dấu âm. "
        "Ta có sin bình an-pha bằng 1 trừ mở ngoặc âm 2 phần 3 đóng ngoặc bình phương bằng 5 phần 9. "
        "Suy ra sin an-pha bằng âm căn 5 chia 3. "
        "tan an-pha bằng sin chia cos bằng mở ngoặc âm căn 5 chia 3 đóng ngoặc chia mở ngoặc âm 2 phần 3 đóng ngoặc bằng căn 5 chia 2; "
        "cot an-pha bằng 2 chia căn 5 bằng 2 căn 5 chia 5."
    ),

    "b11_1_sec4b.mp3": (
        "Tiểu mục b: Giá trị lượng giác của các góc có liên quan đặc biệt. "
        "Để ghi nhớ nhanh và chính xác toàn bộ các hệ thức này, Thầy gửi tặng các em câu thần chú lượng giác bất hủ: "
        "Cos đối — Sin bù — Phụ chéo — Hơn kém pi tang cô-tang! "
        "Quy tắc 1: Hai góc đối nhau an-pha và âm an-pha (Cos đối): "
        "cos của âm an-pha bằng cos an-pha; sin của âm an-pha bằng âm sin an-pha; "
        "tan của âm an-pha bằng âm tan an-pha; cot của âm an-pha bằng âm cot an-pha. "
        "Quy tắc 2: Hai góc bù nhau an-pha và pi trừ an-pha (Sin bù): "
        "sin của pi trừ an-pha bằng sin an-pha; cos của pi trừ an-pha bằng âm cos an-pha; "
        "tan của pi trừ an-pha bằng âm tan an-pha; cot của pi trừ an-pha bằng âm cot an-pha. "
        "Quy tắc 3: Hai góc phụ nhau an-pha và pi phần 2 trừ an-pha (Phụ chéo): "
        "sin của pi phần 2 trừ an-pha bằng cos an-pha; cos của pi phần 2 trừ an-pha bằng sin an-pha; "
        "tan của pi phần 2 trừ an-pha bằng cot an-pha; cot của pi phần 2 trừ an-pha bằng tan an-pha. "
        "Quy tắc 4: Hai góc hơn kém nhau pi (Hơn kém pi tang cot): "
        "sin của an-pha cộng pi bằng âm sin an-pha; cos của an-pha cộng pi bằng âm cos an-pha; "
        "tan của an-pha cộng pi bằng tan an-pha; cot của an-pha cộng pi bằng cot an-pha. "
        "Ví dụ 10: Rút gọn biểu thức A bằng sin của pi trừ an-pha cộng cos của pi phần 2 trừ an-pha cộng cos của âm an-pha. "
        "Lời giải: Theo công thức Sin bù, sin của pi trừ an-pha bằng sin an-pha. "
        "Theo công thức Phụ chéo, cos của pi phần 2 trừ an-pha bằng sin an-pha. "
        "Theo công thức Cos đối, cos của âm an-pha bằng cos an-pha. "
        "Vậy biểu thức A bằng sin an-pha cộng sin an-pha cộng cos an-pha, bằng 2 sin an-pha cộng cos an-pha. "
        "Luyện tập 8: Tính giá trị biểu thức B bằng sin của 150 độ cộng cos của 120 độ cộng tan của 135 độ. "
        "Lời giải: sin 150 độ bằng sin của 180 độ trừ 30 độ bằng sin 30 độ bằng 1 phần 2. "
        "cos 120 độ bằng cos của 180 độ trừ 60 độ bằng âm cos 60 độ bằng âm 1 phần 2. "
        "tan 135 độ bằng tan của 180 độ trừ 45 độ bằng âm tan 45 độ bằng âm 1. "
        "Vậy biểu thức B bằng 1 phần 2 cộng mở ngoặc âm 1 phần 2 đóng ngoặc cộng mở ngoặc âm 1 đóng ngoặc bằng âm 1."
    ),

    "b11_1_wrapup.mp3": (
        "Phần 4. Chốt kiến thức then chốt và Vận dụng thực tế. "
        "Chúc mừng các em đã xuất sắc chinh phục trọn vẹn Bài 1: Giá trị lượng giác của góc lượng giác. "
        "Chúng ta cùng điểm lại 4 nội dung cốt lõi: "
        "Thứ nhất: Góc lượng giác với chiều quay ngược kim đồng hồ là chiều dương, "
        "công thức tổng quát là an-pha cộng k 360 độ hoặc an-pha cộng k 2 pi, và hệ thức Sát-lơ. "
        "Thứ hai: Đơn vị ra-đi-an với 180 độ bằng pi ra-đi-an và công thức độ dài cung tròn l bằng R nhân an-pha. "
        "Thứ ba: Đường tròn lượng giác tâm O bán kính 1 với gốc A toạ độ 1 chấm phẩy 0; "
        "trục hoành là trục cô-sin, trục tung là trục sin. "
        "Thứ tư: Bộ công thức cơ bản và thần chú lượng giác: Cos đối, Sin bù, Phụ chéo, Hơn kém pi tang cô-tang. "
        "Vận dụng 2 Sách giáo khoa trang 15: Dao động huyết áp tâm trương. "
        "Dao động huyết áp tâm trương của một người theo thời gian t kể từ nửa đêm được mô tả bởi hàm số: "
        "B của t bằng 80 cộng 7 sin mở ngoặc pi nhân t chia 12 đóng ngoặc, với t từ 0 đến 24. "
        "Lúc 6 giờ sáng, ứng với t bằng 6: B của 6 bằng 80 cộng 7 sin của pi phần 2 bằng 80 cộng 7 nhân 1 bằng 87 milimét thuỷ ngân. "
        "Đây là lúc huyết áp đạt mức cao nhất trong ngày. "
        "Lúc 20 giờ tối, tức 8 giờ tối, ứng với t bằng 20: B của 20 bằng 80 cộng 7 sin của 5 pi phần 3 xấp xỉ 73 phẩy 94 milimét thuỷ ngân. "
        "Huyết áp giảm thấp vào buổi tối. "
        "Lúc 18 giờ chiều, ứng với t bằng 18: B của 18 bằng 80 cộng 7 sin của 3 pi phần 2 bằng 80 trừ 7 bằng 73 milimét thuỷ ngân, "
        "là mức huyết áp thấp nhất trong ngày. "
        "Mẹo vàng của Thầy Sáng: Khi sử dụng máy tính cầm tay Casio để bấm lượng giác, "
        "hãy luôn kiểm tra ký hiệu đơn vị D cho độ hoặc R cho ra-đi-an trên màn hình để không bao giờ bị nhầm lẫn kết quả! "
        "Bây giờ, xin mời các em cùng chuyển sang Phần 5 để tham gia Bài tập trắc nghiệm củng cố chuẩn cấu trúc mới 2025 của Bộ Giáo dục và Đào tạo!"
    )
}

def split_into_sentences(text):
    # Tách theo dấu chấm, chấm than, chấm hỏi, hoặc chấm phẩy
    raw = re.split(r'([.!?;]+)', text)
    sentences = []
    i = 0
    while i < len(raw):
        s = raw[i].strip()
        punct = raw[i+1].strip() if i+1 < len(raw) else "."
        if s:
            sentences.append(f"{s}{punct}")
        i += 2
    return [s for s in sentences if s.strip()]

async def synth_chunk(sentence, outpath, retries=3):
    for attempt in range(1, retries + 1):
        try:
            comm = edge_tts.Communicate(sentence, VOICE)
            await comm.save(outpath)
            if os.path.exists(outpath) and os.path.getsize(outpath) > 500:
                return True
        except Exception as e:
            await asyncio.sleep(1.0)
    return False

async def synth_one_audio(fname, script):
    target_path = os.path.join(AUDIO_DIR, fname)
    print(f"\nProcessing {fname} ({len(script)} chars)...", flush=True)
    sentences = split_into_sentences(script)
    print(f" -> Split into {len(sentences)} sentences", flush=True)

    all_bytes = bytearray()
    for idx, sentence in enumerate(sentences):
        chunk_path = f"temp_chunks/{fname}_part_{idx}.mp3"
        ok = await synth_chunk(sentence, chunk_path)
        if ok:
            with open(chunk_path, "rb") as cf:
                all_bytes.extend(cf.read())
            try: os.remove(chunk_path)
            except: pass
        else:
            print(f"    WARNING: Failed chunk {idx}: {sentence[:40]}...", flush=True)
        await asyncio.sleep(0.3)

    if len(all_bytes) > 5000:
        with open(target_path, "wb") as f:
            f.write(all_bytes)
        print(f" -> SUCCESS: {target_path} ({len(all_bytes):,} bytes)", flush=True)
        return True
    else:
        print(f" -> ERROR: Output too small: {len(all_bytes)} bytes", flush=True)
        return False

async def main():
    print(f"=== SYNTHESIZING ALL 12 VERBATIM AUDIOS ({len(SCRIPTS)} files) ===")
    for fname, script in SCRIPTS.items():
        await synth_one_audio(fname, script)
        await asyncio.sleep(1.0)

    print("\n=== PACKAGING js/b11-1-audio-cache.js ===")
    cache = {}
    for fname in SCRIPTS.keys():
        target_path = os.path.join(AUDIO_DIR, fname)
        if os.path.exists(target_path) and os.path.getsize(target_path) > 1000:
            b64 = base64.b64encode(open(target_path, "rb").read()).decode("utf-8")
            cache[fname] = f"data:audio/mp3;base64,{b64}"
            cache[f"assets/audio/{fname}"] = f"data:audio/mp3;base64,{b64}"
            print(f"Cached {fname}: {os.path.getsize(target_path):,} bytes", flush=True)

    cache_js_path = "js/b11-1-audio-cache.js"
    with open(cache_js_path, "w", encoding="utf-8") as f:
        f.write("// Audio Cache Base64 - Bài 1 Lớp 11: Giá trị lượng giác của góc lượng giác\n")
        f.write("// Đọc NGUYÊN VĂN 100% - ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\n")
        f.write("window.B11_1_AUDIO_CACHE = ")
        json.dump(cache, f, ensure_ascii=False)
        f.write(";\n")

    print(f"Created {cache_js_path}! Total keys: {len(cache)}")

    netlify_cache = "BAN_CAP_NHAT_NETLIFY/js/b11-1-audio-cache.js"
    os.makedirs(os.path.dirname(netlify_cache), exist_ok=True)
    with open(netlify_cache, "w", encoding="utf-8") as f:
        f.write("// Audio Cache Base64 - Bài 1 Lớp 11: Giá trị lượng giác của góc lượng giác\n")
        f.write("// Đọc NGUYÊN VĂN 100% - ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại)\n")
        f.write("window.B11_1_AUDIO_CACHE = ")
        json.dump(cache, f, ensure_ascii=False)
        f.write(";\n")
    print(f"Synchronized to {netlify_cache}!")

if __name__ == "__main__":
    asyncio.run(main())
