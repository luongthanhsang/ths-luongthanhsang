# -*- coding: utf-8 -*-
import asyncio, os, edge_tts

VOICE = "vi-VN-NamMinhNeural"
RATE = "+0%"
PITCH = "+0Hz"

scripts = {
    "assets/audio/b11_10_welcome.mp3": (
        "Thầy Sáng thân ái chào toàn thể các em học sinh yêu quý! Hôm nay, thầy rất vui mừng được cùng các em bước vào một thế giới toán học vô cùng kỳ thú và quan trọng, đó là Hình học không gian ba chiều với Bài 10: Đường thẳng và mặt phẳng trong không gian. Nếu như hình học phẳng mở ra cho chúng ta những bức tranh hai chiều phẳng lặng, thì hình học không gian sẽ nâng tầm tư duy logic, đưa các em tiếp cận với những cấu trúc 3D thực tế như các công trình kiến trúc, thiết kế đồ họa CAD và công nghệ in 3D hiện đại. Các em đã chuẩn bị sẵn sàng nguồn năng lượng tích cực cùng thầy chưa? Chúng ta cùng bắt đầu khám phá bài học ngay nhé!"
    ),
    "assets/audio/b11_10_goals.mp3": (
        "Mục tiêu bài học số 10. Sau khi hoàn thành bài học này, các em cần đạt được các yêu cầu then chốt sau: Thứ nhất, nhận biết được các quan hệ liên thuộc cơ bản giữa điểm, đường thẳng và mặt phẳng trong không gian. Thứ hai, nắm vững sáu tính chất thừa nhận của hình học không gian. Thứ ba, mô tả thành thạo ba cách xác định một mặt phẳng. Thứ tư, biết cách tìm giao tuyến của hai mặt phẳng và giao điểm của đường thẳng với mặt phẳng. Thứ năm, nhận biết và mô tả chính xác hình chóp và hình tứ diện, cùng các ứng dụng thực tiễn của nguyên lí ba chân và nam châm giữ cửa."
    ),
    "assets/audio/b11_10_hook.mp3": (
        "Tình huống mở đầu. Trong thực tế đời sống, các vật thể quanh chúng ta như hộp phấn, cục tẩy, máy in 3D hay khung xe ô tô thiết kế trên phần mềm đồ họa CAD đều là các khối hình trong không gian ba chiều. Các em có bao giờ tự hỏi, tại sao chiếc bàn bốn chân rất dễ bị bập bênh khi mặt đất gồ ghề, trong khi chiếc giá đỡ máy ảnh ba chân hay chiếc kiềng ba chân đun bếp luôn đứng vững vàng trên mọi địa hình? Đó chính là nhờ một nguyên lí cơ bản của hình học không gian: qua ba điểm không thẳng hàng luôn xác định duy nhất một mặt phẳng. Hãy cùng thầy tìm hiểu bản chất toán học tuyệt vời này ngay sau đây!"
    ),
    "assets/audio/b11_10_sec1.mp3": (
        "Mục 1. Khái niệm mở đầu. Tiểu mục a. Mặt phẳng và cách biểu diễn mặt phẳng trong không gian. Mặt bảng, màn hình máy tính hay mặt hồ phẳng lặng là những hình ảnh trực quan của một phần mặt phẳng. Mặt phẳng không có bề dày và mở rộng vô tận về mọi phía. Để biểu diễn mặt phẳng, ta thường vẽ một hình bình hành và ghi tên mặt phẳng vào một góc, kí hiệu là mở ngoặc đơn P đóng ngoặc đơn, hoặc mở ngoặc đơn an pha đóng ngoặc đơn. Tiểu mục b. Quan hệ liên thuộc và quy tắc vẽ hình không gian. Nếu điểm A thuộc mặt phẳng P, ta kí hiệu A thuộc P. Nếu điểm B không thuộc mặt phẳng P, ta kí hiệu B không thuộc P. Khi vẽ hình biểu diễn của một hình không gian, các em cần tuân thủ nghiêm ngặt quy tắc nét vẽ: dùng nét liền để biểu diễn cho những đường nhìn thấy được, và dùng nét đứt đoạn để biểu diễn cho những đường bị che khuất."
    ),
    "assets/audio/b11_10_sec2.mp3": (
        "Mục 2. Các tính chất thừa nhận của hình học không gian. Tiểu mục a. Ba tính chất xác định đường thẳng, mặt phẳng và điểm đồng phẳng. Tính chất 1: Có một và chỉ một đường thẳng đi qua hai điểm phân biệt. Tính chất 2: Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng, kí hiệu là mặt phẳng A B C. Tính chất 3: Tồn tại bốn điểm không cùng thuộc một mặt phẳng. Nếu nhiều điểm cùng thuộc một mặt phẳng, ta nói các điểm đó đồng phẳng. Bốn điểm không đồng phẳng sẽ tạo nên một tứ diện. Tiểu mục b. Vị trí đường thẳng trên mặt phẳng và giao tuyến của hai mặt phẳng. Tính chất 4: Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì tất cả các điểm của đường thẳng đều nằm trong mặt phẳng đó, kí hiệu là đường thẳng d con của mặt phẳng P. Tính chất 5: Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất đi qua điểm chung đó, đường thẳng này gọi là giao tuyến của hai mặt phẳng, kí hiệu d bằng P giao Q. Tính chất 6: Trên mỗi mặt phẳng, tất cả các định lí đã biết trong hình học phẳng đều đúng."
    ),
    "assets/audio/b11_10_sec3.mp3": (
        "Mục 3. Ba cách xác định một mặt phẳng và ứng dụng thực tiễn. Tiểu mục a. Ba cách xác định mặt phẳng. Ta có ba cách để xác định duy nhất một mặt phẳng trong không gian: Cách thứ nhất, qua ba điểm không thẳng hàng A, B, C, kí hiệu là mặt phẳng A B C. Cách thứ hai, qua một điểm A và một đường thẳng d không đi qua điểm A, kí hiệu là mặt phẳng A d. Cách thứ ba, qua hai đường thẳng cắt nhau a và b, kí hiệu là mặt phẳng a b. Tiểu mục b. Phương pháp tìm giao tuyến của hai mặt phẳng và ứng dụng giữ cửa. Để tìm giao tuyến của hai mặt phẳng, ta tìm hai điểm chung phân biệt của chúng, đường thẳng nối hai điểm chung chính là giao tuyến cần tìm. Trong đời sống, phụ kiện nam châm giữ cánh cửa hoạt động dựa trên việc cố định cánh cửa trên mặt phẳng tiếp xúc khi nam châm hút chặt, ngăn gió va đập làm hỏng đồ đạc."
    ),
    "assets/audio/b11_10_sec4.mp3": (
        "Mục 4. Hình chóp và hình tứ diện. Tiểu mục a. Khái niệm và các yếu tố của hình chóp. Cho đa giác lồi A 1 A 2 đến A n nằm trong mặt phẳng đáy và một điểm S nằm ngoài mặt phẳng đó. Nối S với các đỉnh của đáy, ta được hình chóp S A 1 A 2 đến A n. Điểm S gọi là đỉnh, đa giác đáy gọi là mặt đáy, các tam giác nối đỉnh với từng cạnh đáy gọi là các mặt bên, các đoạn thẳng nối đỉnh S với các đỉnh đáy là các cạnh bên. Nếu đáy là tam giác, ta gọi là hình chóp tam giác; nếu đáy là tứ giác, ta gọi là hình chóp tứ giác. Tiểu mục b. Khái niệm hình tứ diện và phương pháp tìm giao điểm. Cho bốn điểm A, B, C, D không đồng phẳng, hình tạo bởi bốn tam giác A B C, A C D, A B D và B C D được gọi là hình tứ diện A B C D. Để tìm giao điểm của một đường thẳng với một mặt phẳng, ta tìm một mặt phẳng phụ chứa đường thẳng đó, rồi tìm giao tuyến của mặt phẳng phụ với mặt phẳng đã cho. Giao điểm của đường thẳng ban đầu với giao tuyến vừa tìm được chính là giao điểm cần xác định."
    ),
    "assets/audio/b11_10_wrapup.mp3": (
        "Chốt kiến thức then chốt bài học số 10. Thầy Sáng dặn dò các em hai phương pháp cốt lõi cần khắc cốt ghi tâm: Thứ nhất, để tìm giao tuyến của hai mặt phẳng, hãy luôn săn tìm hai điểm chung phân biệt. Nối hai điểm chung đó lại, ta được đường giao tuyến duy nhất. Thứ hai, để tìm giao điểm của đường thẳng d và mặt phẳng P, hãy khéo léo chọn một mặt phẳng phụ Q chứa d, tìm giao tuyến a của Q và P, rồi cho d cắt a tại điểm mong muốn. Chúc các em tự tin chinh phục phần bài tập trắc nghiệm củng cố ngay sau đây!"
    )
}

async def generate_single(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    comm = edge_tts.Communicate(text, VOICE, rate=RATE, pitch=PITCH)
    await comm.save(path)
    print(f"Generated: {path} ({os.path.getsize(path):,} bytes)")

async def main():
    for p, txt in scripts.items():
        await generate_single(p, txt)

if __name__ == '__main__':
    asyncio.run(main())
