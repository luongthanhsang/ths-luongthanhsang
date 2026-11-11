import os
import subprocess
import shutil
import time

VOICE = "vi-VN-NamMinhNeural"

TASKS = [
    {
        "id": "b7_welcome",
        "filename": "b7_welcome.mp3",
        "text": (
            "Thầy Sáng chào tất cả các em học sinh thân yêu! Thầy rất vui khi được đồng hành cùng các em trong tiết học số ngày hôm nay. "
            "Bước vào lớp 10, các em sẽ bắt đầu một hành trình mới đầy hứng khởi với môn Toán. "
            "Bài 7 hôm nay, Các khái niệm mở đầu về Véc tơ, sẽ mở ra một công cụ toán học vô cùng kỳ diệu gắn liền với đời sống thực tế và môn Vật lý. "
            "Trước khi Thầy trò mình cùng nhau khám phá, các em hãy cùng Thầy điểm qua các mục tiêu quan trọng cần đạt trong bài học này nhé. "
            "Thứ nhất, các em sẽ hiểu rõ thế nào là một đoạn thẳng có hướng, xác định điểm đầu, điểm cuối và độ dài véc tơ. "
            "Thứ hai, nắm vững khái niệm giá của véc tơ, nhận biết hai véc tơ cùng phương, cùng hướng và ngược hướng. "
            "Thứ ba, hiểu thế nào là hai véc tơ bằng nhau và đặc điểm của véc tơ không. "
            "Thầy chúc các em có một buổi học thật say mê, tràn đầy hứng khởi và gặt hái thật nhiều kiến thức bổ ích. "
            "Nào, Thầy trò mình cùng bắt đầu nhé!"
        )
    },
    {
        "id": "b7_main_lecture",
        "filename": "b7_main_lecture.mp3",
        "text": (
            "Chào các em học sinh thân mến! Hôm nay Thầy Sáng sẽ cùng các em bước vào một thế giới toán học hoàn toàn mới — thế giới của Véc tơ. "
            "Các em hãy hình dung, nếu trong cuộc sống có những đại lượng chỉ cần một con số là xác định xong, như khối lượng năm mươi ki lô gam hay nhiệt độ ba mươi độ C. "
            "Nhưng cũng có những đại lượng mà nếu thiếu đi phương hướng, chúng ta sẽ hoàn toàn mất phương hướng! Điển hình là vận tốc của cơn bão hay lực kéo của một con tàu. "
            "Để mô tả trọn vẹn cả độ lớn lẫn chiều di chuyển, toán học trang bị cho chúng ta khái niệm véc tơ — một đoạn thẳng có hướng. "
            "Khi ta viết véc tơ A B có mũi tên trên đầu, điểm A đứng trước là điểm xuất phát, điểm B đứng sau là đích đến, và khoảng cách giữa A và B chính là độ dài của véc tơ ấy. "
            "Các em hãy cùng Thầy khám phá bài học đầy lôi cuốn này nhé!"
        )
    },
    {
        "id": "b7_wrapup",
        "filename": "b7_wrapup.mp3",
        "text": (
            "Các em thấy đấy, toán học véc tơ không hề khô khan mà gắn liền với hơi thở cuộc sống. "
            "Khi hai tàu lai dắt kéo đối xứng nhau với góc ba mươi độ và lực kéo năm nghìn Niu tơn, theo quy tắc hình bình hành lực, "
            "hợp lực tạo thành sẽ có phương đi thẳng tắp vào tim luồng cảng với độ lớn xấp xỉ tám nghìn sáu trăm sáu mươi Niu tơn. "
            "Nhờ đó, con tàu hàng khổng lồ được dẫn dắt an toàn tuyệt đối!"
        )
    },
    {
        "id": "b12_welcome",
        "filename": "b12_welcome.mp3",
        "text": (
            "Thầy Sáng xin chào tất cả các em học sinh lớp 11 yêu quý! "
            "Khi bước vào môn Hình học không gian, nhiều bạn thường cảm thấy bỡ ngỡ vì phải rèn luyện trí tưởng tượng hình học ba chiều. "
            "Nhưng các em đừng lo lắng, Thầy Sáng sẽ đồng hành và giúp các em làm chủ từng quy tắc một cách trực quan, dễ hiểu nhất. "
            "Bài 12 hôm nay, Đường thẳng và mặt phẳng song song, là bài học bản lề quan trọng bậc nhất của học kỳ 1. "
            "Trước khi học, các em hãy cùng Thầy điểm qua các mục tiêu cốt lõi: "
            "Thứ nhất, nhận biết và phân biệt chính xác 3 vị trí tương đối giữa đường thẳng và mặt phẳng. "
            "Thứ hai, nắm vững Định lí 1 – chìa khóa vàng để chứng minh đường thẳng song song với mặt phẳng. "
            "Thứ ba, vận dụng linh hoạt Định lí 2 về giao tuyến song song để giải quyết các bài toán thiết diện trong các đề thi. "
            "Thầy tin rằng với sự tập trung và tinh thần học hỏi chủ động, các em sẽ học thật vui và đạt điểm số thật cao. Nào, Thầy trò mình cùng bắt đầu tiết học nhé!"
        )
    },
    {
        "id": "b12_main_lecture",
        "filename": "b12_main_lecture.mp3",
        "text": (
            "Thầy Sáng xin chào tất cả các em học sinh lớp 11 yêu quý! "
            "Khi học hình học không gian, nhiều bạn thường sợ vì khó tưởng tượng hình vẽ ba chiều trên mặt giấy phẳng. "
            "Nhưng hôm nay, Thầy Sáng sẽ tặng các em một công thức tư duy vô cùng đơn giản và hiệu quả. "
            "Các em hãy nhớ lời Thầy dặn: Một đường thẳng muốn song song với một mặt phẳng, nó không cần phải quen biết toàn bộ mặt phẳng đó. "
            "Nó chỉ cần tìm được một người bạn thân nằm sẵn trong mặt phẳng, và song song với người bạn ấy! "
            "Chỉ một định lí ngắn gọn ấy thôi sẽ giúp các em giải quyết đến 80 phần trăm các bài toán chứng minh song song trong các đề thi học kì và thi thử. "
            "Nào, các em hãy cùng Thầy bắt đầu bài học nhé!"
        )
    },
    {
        "id": "b12_wrapup",
        "filename": "b12_wrapup.mp3",
        "text": (
            "Định lí 1 chính là bí quyết kỳ diệu của ngành xây dựng các em ạ! "
            "Bác thợ hồ hay chú kỹ sư không cần leo trèo đo đạc hàng nghìn điểm trên cao, mà chỉ cần căn chỉnh thanh xà gồ trên mái song song với mép chân tường nằm trên mặt sàn, "
            "thì định lí 1 bảo đảm một trăm phần trăm xà gồ đã song song với toàn bộ mặt sàn nhà xưởng rồi!"
        )
    },
    {
        "id": "b6_welcome",
        "filename": "b6_welcome.mp3",
        "text": (
            "Thầy Sáng xin chào tất cả các em học sinh lớp 12 thân yêu! "
            "Năm học lớp 12 là một năm học vô cùng đặc biệt và ý nghĩa, nơi các em sẽ nỗ lực bứt phá để chạm tay vào cánh cửa trường đại học mơ ước. "
            "Thầy rất tự hào khi được đồng hành cùng các em trong hành trình này. "
            "Bài 6 hôm nay, Véc tơ trong không gian, sẽ đưa các em bước vào thế giới hình học tọa độ và không gian 3 chiều – nội dung cốt lõi chiếm tỉ trọng điểm rất cao trong kỳ thi tốt nghiệp trung học phổ thông quốc gia. "
            "Trước khi bước vào bài học, các em hãy cùng Thầy điểm qua các mục tiêu trọng tâm cần làm chủ nhé: "
            "Thứ nhất, mở rộng trọn vẹn khái niệm véc tơ, độ dài và các phép toán từ mặt phẳng lên không gian ba chiều. "
            "Thứ hai, nắm vững và vận dụng xuất sắc Quy tắc hình hộp – công cụ đắc lực để phân tích véc tơ trong khối đa diện. "
            "Thứ ba, làm chủ công thức tích vô hướng và góc giữa hai véc tơ trong không gian để chứng minh quan hệ vuông góc và giải quyết bài toán thực tế. "
            "Thầy chúc các em luôn giữ vững niềm tin, học tập hăng say và chinh phục trọn vẹn điểm mười môn Toán nhé. "
            "Nào, Thầy trò mình cùng bắt đầu tiết học ngay bây giờ!"
        )
    },
    {
        "id": "b6_main_lecture",
        "filename": "b6_main_lecture.mp3",
        "text": (
            "Thầy Sáng xin chào tất cả các em học sinh lớp 12 thân yêu! "
            "Khi bước vào lớp 12, chúng ta đã tích lũy được một nền tảng vững vàng về véc tơ từ lớp 10. "
            "Hôm nay, Thầy Sáng sẽ dẫn dắt các em thực hiện một bước nhảy vọt: Đưa toàn bộ tư duy véc tơ từ trang giấy phẳng hai chiều bay bổng vào không gian ba chiều thực tế! "
            "Viên ngọc sáng nhất trong bài học hôm nay chính là Quy tắc hình hộp. "
            "Nếu như ở lớp 10, quy tắc hình bình hành cho ta tổng hai véc tơ cạnh bằng véc tơ đường chéo mặt phẳng; "
            "thì lên lớp 12, từ một đỉnh của hình hộp chữ nhật, tổng ba véc tơ theo ba kích thước dài, rộng, cao sẽ hợp lực thành một véc tơ đường chéo đâm xuyên qua lòng hình hộp: "
            "véc tơ A C phẩy bằng véc tơ A B cộng véc tơ A D cộng véc tơ A A phẩy! "
            "Đây là công thức nền tảng xuất hiện thường xuyên trong đề thi tốt nghiệp trung học phổ thông quốc gia. "
            "Nào, Thầy trò mình cùng nhau bắt đầu bài học nhé!"
        )
    },
    {
        "id": "b6_wrapup",
        "filename": "b6_wrapup.mp3",
        "text": (
            "Quy tắc cân bằng lực trong không gian ba chiều đã giúp các kỹ sư giải quyết một bài toán vô cùng thực tế: "
            "Tính lực căng của bốn sợi dây cáp treo đèn chùm. "
            "Khi đèn nặng mười hai ki lô gam và góc nghiêng ba mươi độ, mỗi sợi dây cáp phải chịu một lực kéo khoảng ba mươi tư Niu tơn. "
            "Nhờ đó, việc chọn dây cáp được tính toán chuẩn xác từng con số, đảm bảo an toàn tuyệt đối cho người ngồi bên dưới!"
        )
    }
]

def main():
    py_exe = os.path.abspath("scripts/py/python.exe")
    out_dir1 = os.path.abspath("assets/audio")
    out_dir2 = os.path.abspath("BAN_CAP_NHAT_NETLIFY/assets/audio")
    os.makedirs(out_dir1, exist_ok=True)
    os.makedirs(out_dir2, exist_ok=True)
    
    print(f"Generating {len(TASKS)} audio files using Edge TTS Nam Minh Voice...")
    for idx, item in enumerate(TASKS, 1):
        filename = item["filename"]
        target1 = os.path.join(out_dir1, filename)
        target2 = os.path.join(out_dir2, filename)
        text = item["text"]
        
        print(f"[{idx}/{len(TASKS)}] Processing {filename} ({len(text)} chars)...")
        
        # Write text to a temporary utf-8 file to avoid command-line quoting issues
        temp_txt = os.path.abspath(f"scripts/temp_{item['id']}.txt")
        with open(temp_txt, "w", encoding="utf-8") as f:
            f.write(text)
            
        cmd = [
            py_exe, "-m", "edge_tts",
            "--voice", VOICE,
            "-f", temp_txt,
            "--write-media", target1
        ]
        
        success = False
        for attempt in range(1, 4):
            try:
                res = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
                if res.returncode == 0 and os.path.exists(target1) and os.path.getsize(target1) > 1000:
                    shutil.copyfile(target1, target2)
                    size = os.path.getsize(target1)
                    print(f"  -> SUCCESS ({size:,} bytes): {filename}")
                    success = True
                    break
                else:
                    print(f"  -> Attempt {attempt} failed (code {res.returncode}): {res.stderr.strip()[:100]}")
                    time.sleep(2)
            except Exception as e:
                print(f"  -> Exception attempt {attempt}: {e}")
                time.sleep(2)
                
        if os.path.exists(temp_txt):
            os.remove(temp_txt)
            
        if not success:
            print(f"  !! FAILED to generate {filename}")
            
    print("\nALL AUDIO GENERATION TASKS COMPLETE!")

if __name__ == "__main__":
    main()

