import os
import sys
import time
import subprocess
import unicodedata
import hashlib
import re
import shutil

PY_EXE = os.path.abspath("scripts/py/python.exe")
VOICE = "vi-VN-NamMinhNeural"
CACHE_DIR = os.path.abspath("scripts/audio_cache")
os.makedirs(CACHE_DIR, exist_ok=True)

OUT_DIR1 = os.path.abspath("assets/audio")
OUT_DIR2 = os.path.abspath("BAN_CAP_NHAT_NETLIFY/assets/audio")
os.makedirs(OUT_DIR1, exist_ok=True)
os.makedirs(OUT_DIR2, exist_ok=True)

TRACKS = [
    # ==================== LỚP 10 - BÀI 7 ====================
    {
        "filename": "b7_welcome.mp3",
        "title": "Bài 7 Lớp 10 - Lời chào & Mục tiêu",
        "text": (
            "Thầy Sáng chào tất cả các em học sinh thân yêu! Thầy rất vui khi được đồng hành cùng các em trong tiết học số ngày hôm nay. "
            "Bước vào lớp mười, các em sẽ bắt đầu một hành trình mới đầy hứng khởi với môn Toán. "
            "Bài bảy hôm nay, Các khái niệm mở đầu về Véc tơ, sẽ mở ra một công cụ toán học vô cùng kỳ diệu gắn liền với đời sống thực tế và môn Vật lý. "
            "Trước khi Thầy trò mình cùng nhau khám phá, các em hãy cùng Thầy điểm qua các mục tiêu quan trọng cần đạt trong bài học này nhé. "
            "Thứ nhất, các em sẽ hiểu rõ thế nào là một đoạn thẳng có hướng, xác định điểm đầu, điểm cuối và độ dài véc tơ. "
            "Thứ hai, nắm vững khái niệm giá của véc tơ, nhận biết hai véc tơ cùng phương, cùng hướng và ngược hướng. "
            "Thứ ba, hiểu thế nào là hai véc tơ bằng nhau và đặc điểm của véc tơ không. "
            "Thầy chúc các em có một buổi học thật say mê, tràn đầy hứng khởi và gặt hái thật nhiều kiến thức bổ ích. "
            "Nào, Thầy trò mình cùng bắt đầu nhé!"
        )
    },
    {
        "filename": "b7_main_lecture.mp3",
        "title": "Bài 7 Lớp 10 - Lời giảng lý thuyết",
        "text": (
            "Chào các em học sinh thân mến! Hôm nay Thầy Sáng sẽ cùng các em bước vào một thế giới toán học hoàn toàn mới, thế giới của Véc tơ. "
            "Các em hãy hình dung, trong cuộc sống có những đại lượng chỉ cần một con số là xác định xong, như khối lượng năm mươi ki lô gam hay nhiệt độ ba mươi độ C. "
            "Nhưng cũng có những đại lượng mà nếu thiếu đi phương hướng, chúng ta sẽ hoàn toàn mất phương hướng! Điển hình là vận tốc của cơn bão hay lực kéo của một con tàu. "
            "Để mô tả trọn vẹn cả độ lớn lẫn chiều di chuyển, toán học trang bị cho chúng ta khái niệm véc tơ, một đoạn thẳng có hướng. "
            "Khi ta viết véc tơ A B có mũi tên trên đầu, điểm A đứng trước là điểm xuất phát, điểm B đứng sau là đích đến, và khoảng cách giữa A và B chính là độ dài của véc tơ ấy. "
            "Các em hãy cùng Thầy khám phá bài học đầy lôi cuốn này nhé!"
        )
    },
    {
        "filename": "b7_wrapup.mp3",
        "title": "Bài 7 Lớp 10 - Vận dụng thực tế tàu kéo",
        "text": (
            "Các em thấy đấy, toán học véc tơ không hề khô khan mà gắn liền với hơi thở cuộc sống. "
            "Khi hai tàu lai dắt kéo đối xứng nhau với góc ba mươi độ và lực kéo năm nghìn Niu tơn, theo quy tắc hình bình hành lực, "
            "hợp lực tạo thành sẽ có phương đi thẳng tắp vào tim luồng cảng với độ lớn xấp xỉ tám nghìn sáu trăm sáu mươi Niu tơn. "
            "Nhờ đó, con tàu hàng khổng lồ được dẫn dắt an toàn tuyệt đối!"
        )
    },

    # ==================== LỚP 11 - BÀI 12 ====================
    {
        "filename": "b12_welcome.mp3",
        "title": "Bài 12 Lớp 11 - Lời chào & Mục tiêu",
        "text": (
            "Thầy Sáng xin chào tất cả các em học sinh lớp mười một yêu quý! "
            "Khi bước vào môn Hình học không gian, nhiều bạn thường cảm thấy bỡ ngỡ vì phải rèn luyện trí tưởng tượng hình học ba chiều. "
            "Nhưng các em đừng lo lắng, Thầy Sáng sẽ đồng hành và giúp các em làm chủ từng quy tắc một cách trực quan, dễ hiểu nhất. "
            "Bài mười hai hôm nay, Đường thẳng và mặt phẳng song song, là bài học bản lề quan trọng bậc nhất của học kỳ một. "
            "Trước khi học, các em hãy cùng Thầy điểm qua các mục tiêu cốt lõi: "
            "Thứ nhất, nhận biết và phân biệt chính xác ba vị trí tương đối giữa đường thẳng và mặt phẳng. "
            "Thứ hai, nắm vững Định lí một, chìa khóa vàng để chứng minh đường thẳng song song với mặt phẳng. "
            "Thứ ba, vận dụng linh hoạt Định lí hai về giao tuyến song song để giải quyết các bài toán thiết diện trong các đề thi. "
            "Thầy tin rằng với sự tập trung và tinh thần học hỏi chủ động, các em sẽ học thật vui và đạt điểm số thật cao. Nào, Thầy trò mình cùng bắt đầu tiết học nhé!"
        )
    },
    {
        "filename": "b12_main_lecture.mp3",
        "title": "Bài 12 Lớp 11 - Lời giảng lý thuyết",
        "text": (
            "Thầy Sáng xin chào tất cả các em học sinh lớp mười một yêu quý! "
            "Khi học hình học không gian, nhiều bạn thường sợ vì khó tưởng tượng hình vẽ ba chiều trên mặt giấy phẳng. "
            "Nhưng hôm nay, Thầy Sáng sẽ tặng các em một công thức tư duy vô cùng đơn giản và hiệu quả. "
            "Các em hãy nhớ lời Thầy dặn: Một đường thẳng muốn song song với một mặt phẳng, nó không cần phải quen biết toàn bộ mặt phẳng đó. "
            "Nó chỉ cần tìm được một người bạn thân nằm sẵn trong mặt phẳng, và song song với người bạn ấy! "
            "Chỉ một định lí ngắn gọn ấy thôi sẽ giúp các em giải quyết đến tám mươi phần trăm các bài toán chứng minh song song trong các đề thi học kì và thi thử. "
            "Nào, các em hãy cùng Thầy bắt đầu bài học nhé!"
        )
    },
    {
        "filename": "b12_wrapup.mp3",
        "title": "Bài 12 Lớp 11 - Vận dụng thực tế xà gồ mái",
        "text": (
            "Định lí một chính là bí quyết kỳ diệu của ngành xây dựng các em ạ! "
            "Bác thợ hồ hay chú kỹ sư không cần leo trèo đo đạc hàng nghìn điểm trên cao, mà chỉ cần căn chỉnh thanh xà gồ trên mái song song với mép chân tường nằm trên mặt sàn, "
            "thì định lí một bảo đảm một trăm phần trăm xà gồ đã song song với toàn bộ mặt sàn nhà xưởng rồi!"
        )
    },

    # ==================== LỚP 12 - BÀI 6 ====================
    {
        "filename": "b6_welcome.mp3",
        "title": "Bài 6 Lớp 12 - Lời chào & Mục tiêu",
        "text": (
            "Thầy Sáng xin chào tất cả các em học sinh lớp mười hai thân yêu! "
            "Năm học lớp mười hai là một năm học vô cùng đặc biệt và ý nghĩa, nơi các em sẽ nỗ lực bứt phá để chạm tay vào cánh cửa trường đại học mơ ước. "
            "Thầy rất tự hào khi được đồng hành cùng các em trong hành trình này. "
            "Bài sáu hôm nay, Véc tơ trong không gian, sẽ đưa các em bước vào thế giới hình học tọa độ và không gian ba chiều, nội dung cốt lõi chiếm tỉ trọng điểm rất cao trong kỳ thi tốt nghiệp trung học phổ thông quốc gia. "
            "Trước khi bước vào bài học, các em hãy cùng Thầy điểm qua các mục tiêu trọng tâm cần làm chủ nhé: "
            "Thứ nhất, mở rộng trọn vẹn khái niệm véc tơ, độ dài và các phép toán từ mặt phẳng lên không gian ba chiều. "
            "Thứ hai, nắm vững và vận dụng xuất sắc Quy tắc hình hộp, công cụ đắc lực để phân tích véc tơ trong khối đa diện. "
            "Thứ ba, làm chủ công thức tích vô hướng và góc giữa hai véc tơ trong không gian để chứng minh quan hệ vuông góc và giải quyết bài toán thực tế. "
            "Thầy chúc các em luôn giữ vững niềm tin, học tập hăng say và chinh phục trọn vẹn điểm mười môn Toán nhé. "
            "Nào, Thầy trò mình cùng bắt đầu tiết học ngay bây giờ!"
        )
    },
    {
        "filename": "b6_main_lecture.mp3",
        "title": "Bài 6 Lớp 12 - Lời giảng lý thuyết",
        "text": (
            "Thầy Sáng xin chào tất cả các em học sinh lớp mười hai thân yêu! "
            "Khi bước vào lớp mười hai, chúng ta đã tích lũy được một nền tảng vững vàng về véc tơ từ lớp mười. "
            "Hôm nay, Thầy Sáng sẽ dẫn dắt các em thực hiện một bước nhảy vọt: Đưa toàn bộ tư duy véc tơ từ trang giấy phẳng hai chiều bay bổng vào không gian ba chiều thực tế! "
            "Viên ngọc sáng nhất trong bài học hôm nay chính là Quy tắc hình hộp. "
            "Nếu như ở lớp mười, quy tắc hình bình hành cho ta tổng hai véc tơ cạnh bằng véc tơ đường chéo mặt phẳng; "
            "thì lên lớp mười hai, từ một đỉnh của hình hộp chữ nhật, tổng ba véc tơ theo ba kích thước dài, rộng, cao sẽ hợp lực thành một véc tơ đường chéo đâm xuyên qua lòng hình hộp: "
            "véc tơ A C phẩy bằng véc tơ A B cộng véc tơ A D cộng véc tơ A A phẩy! "
            "Đây là công thức nền tảng xuất hiện thường xuyên trong đề thi tốt nghiệp trung học phổ thông quốc gia. "
            "Nào, Thầy trò mình cùng nhau bắt đầu bài học nhé!"
        )
    },
    {
        "filename": "b6_wrapup.mp3",
        "title": "Bài 6 Lớp 12 - Vận dụng thực tế đèn chùm 3D",
        "text": (
            "Quy tắc cân bằng lực trong không gian ba chiều đã giúp các kỹ sư giải quyết một bài toán vô cùng thực tế: "
            "Tính lực căng của bốn sợi dây cáp treo đèn chùm. "
            "Khi đèn nặng mười hai ki lô gam và góc nghiêng ba mươi độ, mỗi sợi dây cáp phải chịu một lực kéo khoảng ba mươi tư Niu tơn. "
            "Nhờ đó, việc chọn dây cáp được tính toán chuẩn xác từng con số, đảm bảo an toàn tuyệt đối cho người ngồi bên dưới!"
        )
    }
]

def synthesize_sentence(sentence):
    # Hash for cache
    h = hashlib.sha256(sentence.encode("utf-8")).hexdigest()[:16]
    cache_path = os.path.join(CACHE_DIR, f"chunk_{h}.mp3")
    
    if os.path.exists(cache_path) and os.path.getsize(cache_path) > 500:
        with open(cache_path, "rb") as f:
            return f.read()
            
    temp_txt = os.path.join(CACHE_DIR, f"temp_{h}.txt")
    temp_mp3 = os.path.join(CACHE_DIR, f"temp_{h}.mp3")
    with open(temp_txt, "w", encoding="utf-8") as f:
        f.write(sentence)
        
    for attempt in range(1, 10):
        try:
            cmd = [
                PY_EXE, "-m", "edge_tts",
                "--voice", VOICE,
                "-f", temp_txt,
                "--write-media", temp_mp3
            ]
            res = subprocess.run(cmd, capture_output=True, text=True, timeout=25)
            if res.returncode == 0 and os.path.exists(temp_mp3) and os.path.getsize(temp_mp3) > 500:
                shutil.copyfile(temp_mp3, cache_path)
                with open(cache_path, "rb") as f:
                    data = f.read()
                try:
                    os.remove(temp_txt)
                    os.remove(temp_mp3)
                except:
                    pass
                time.sleep(2.0)  # Gentle spacing between API calls
                return data
            else:
                time.sleep(2.5 * attempt)
        except Exception:
            time.sleep(2.5 * attempt)
            
    try:
        if os.path.exists(temp_txt): os.remove(temp_txt)
        if os.path.exists(temp_mp3): os.remove(temp_mp3)
    except:
        pass
    return None

def build_track(track):
    filename = track["filename"]
    title = track["title"]
    text = track["text"]
    text_clean = unicodedata.normalize("NFC", text)
    sentences = [s.strip() for s in re.split(r"(?<=[.!?])\s+", text_clean) if s.strip()]
    
    print(f"\n==========================================")
    print(f"Bắt đầu: {title} ({filename}) - {len(sentences)} câu")
    print(f"==========================================")
    
    combined = b""
    for idx, s in enumerate(sentences, 1):
        data = synthesize_sentence(s)
        if data:
            combined += data
            print(f"  [{idx}/{len(sentences)}] OK ({len(data):,} bytes): {s[:40]}...")
        else:
            print(f"  [ERROR] Không thể đọc câu {idx}: {s}")
            return False
            
    out1 = os.path.join(OUT_DIR1, filename)
    out2 = os.path.join(OUT_DIR2, filename)
    with open(out1, "wb") as f:
        f.write(combined)
    with open(out2, "wb") as f:
        f.write(combined)
        
    print(f"==> HOÀN TẤT {filename}: {len(combined):,} bytes!")
    return True

def main():
    print("KHỞI ĐỘNG HỆ THỐNG TẠO ÂM THANH GIỌNG NAM MINH AI THẦY SÁNG")
    success_count = 0
    for track in TRACKS:
        ok = build_track(track)
        if ok:
            success_count += 1
        time.sleep(2.0)
        
    print(f"\n==========================================")
    print(f"TỔNG KẾT: Đã tạo thành công {success_count}/{len(TRACKS)} tệp âm thanh MP3!")
    print(f"==========================================")

if __name__ == "__main__":
    main()

