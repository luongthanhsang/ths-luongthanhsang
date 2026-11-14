import asyncio
import edge_tts
import os

VOICE = "vi-VN-NamMinhNeural"
AUDIO_DIR = "assets/audio"

SCRIPTS = {
    "b10_11_welcome.mp3": "Thầy Sáng chào toàn thể các em học sinh lớp 10 yêu quý! Trong các bài học trước, các em đã làm quen với phép cộng, phép trừ và phép nhân vectơ với một số – các phép toán này cho kết quả là một vectơ mới. Hôm nay, Thầy trò mình sẽ cùng khám phá một phép toán đặc biệt giữa hai vectơ: Bài 11, Tích vô hướng của hai vectơ. Phép toán này cho kết quả là một đại lượng vô hướng – một số thực, gắn liền mật thiết với khái niệm công cơ học trong Vật lí và là chìa khoá để tính góc, độ dài và chứng minh vuông góc trong hình học!",
    
    "b10_11_goals.mp3": "Mục tiêu bài học cần đạt: Sau bài học này, các em cần làm chủ ba mục tiêu trọng tâm: Thứ nhất, hiểu rõ định nghĩa và cách xác định góc giữa hai vectơ từ 0 độ đến 180 độ. Thứ hai, nắm vững định nghĩa tích vô hướng, bình phương vô hướng và mối liên hệ sâu sắc với công sinh bởi một lực trong Vật lí. Thứ ba, thành thạo công thức toạ độ của tích vô hướng, điều kiện hai vectơ vuông góc và tính chất phân phối để giải các bài toán hình học và thực tiễn.",
    
    "b10_11_hook.mp3": "Bài toán dẫn nhập: Trong Vật lí lớp 10, khi một người tác dụng một lực F không đổi kéo một thùng hàng chuyển động trên mặt sàn nằm ngang, công sinh ra được tính bằng tích độ lớn lực F, độ dài quãng đường chuyển dời và cosin góc hợp bởi hướng lực kéo với hướng chuyển động. Vì sao công lại là một đại lượng vô hướng, có thể nhận giá trị dương, âm hoặc bằng 0? Ngôn ngữ vectơ và tích vô hướng sẽ giúp chúng ta giải mã bản chất toán học kì diệu này!",
    
    "b10_11_sec1.mp3": "Mục một, Góc giữa hai vectơ: Cho hai vectơ u và v khác vectơ không. Từ một điểm A bất kì, ta vẽ vectơ AB bằng u và AC bằng v. Khi đó, góc BAC chính là góc giữa hai vectơ u và v, nhận giá trị từ 0 độ đến 180 độ. Đặc biệt, góc bằng 0 độ khi hai vectơ cùng hướng, bằng 180 độ khi ngược hướng, và nếu góc bằng 90 độ, ta nói hai vectơ vuông góc với nhau.",
    
    "b10_11_sec2.mp3": "Mục hai, Định nghĩa tích vô hướng: Tích vô hướng của hai vectơ u và v là một số thực, kí hiệu là u chấm v, bằng tích độ dài của u, độ dài của v nhân với cosin góc giữa chúng. Bình phương vô hướng của một vectơ bằng bình phương độ dài của nó. Tích vô hướng sẽ dương nếu góc giữa chúng là góc nhọn, âm nếu là góc tù, và bằng 0 khi và chỉ khi hai vectơ vuông góc với nhau.",
    
    "b10_11_sec3.mp3": "Mục ba, Biểu thức toạ độ của tích vô hướng: Trong mặt phẳng toạ độ Oxy, nếu u có toạ độ x, y và v có toạ độ x phẩy, y phẩy, thì tích vô hướng u nhân v bằng x nhân x phẩy cộng y nhân y phẩy. Từ đó, hai vectơ vuông góc khi và chỉ khi x x phẩy cộng y y phẩy bằng 0, và cosin góc giữa hai vectơ bằng tích vô hướng chia cho tích độ dài của chúng.",
    
    "b10_11_sec4.mp3": "Mục bốn, Tính chất và ứng dụng của tích vô hướng: Tích vô hướng có tính chất giao hoán, phân phối đối với phép cộng và phép trừ, cùng các hằng đẳng thức vectơ đáng nhớ. Nhờ tích vô hướng, ta có thể dễ dàng chứng minh các đoạn thẳng vuông góc, tìm trực tâm tam giác, tính độ dài, góc và tính công của hợp lực tác dụng lên vật thể trong cơ học.",
    
    "b10_11_wrapup.mp3": "Chốt bài học: Thầy Sáng chúc mừng các em đã xuất sắc hoàn thành Bài 11 cũng như toàn bộ Chương IV Vectơ của chương trình Toán 10! Kiến thức về vectơ và phương pháp toạ độ sẽ là hành trang vô giá đồng hành cùng các em trong suốt các năm học cấp ba và kì thi tốt nghiệp trung học phổ thông. Bây giờ, các em hãy cùng Thầy rèn luyện 10 câu trắc nghiệm chuẩn hoá ở Phần IV nhé!"
}

async def generate():
    os.makedirs(AUDIO_DIR, exist_ok=True)
    for fname, text in SCRIPTS.items():
        out_path = os.path.join(AUDIO_DIR, fname)
        for attempt in range(5):
            print(f"[START] Generating {out_path} (attempt {attempt+1})...")
            try:
                communicate = edge_tts.Communicate(text, VOICE)
                await communicate.save(out_path)
                size = os.path.getsize(out_path)
                if size > 30000:
                    print(f"[OK] Generated {out_path} ({size} bytes)")
                    break
                else:
                    print(f"[RETRY] File too small ({size} bytes)")
            except Exception as e:
                print(f"[ERROR] {e}, retrying...")
            await asyncio.sleep(2)

    print("ALL AUDIOS FOR LESSON 11 (GRADE 10) FINISHED!")

if __name__ == "__main__":
    asyncio.run(generate())
