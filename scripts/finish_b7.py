import os
import time
import subprocess
import unicodedata
import hashlib
import re

PY_EXE = os.path.abspath("scripts/py/python.exe")
VOICE = "vi-VN-NamMinhNeural"
CACHE_DIR = os.path.abspath("scripts/audio_cache")
os.makedirs(CACHE_DIR, exist_ok=True)

OUT_DIR1 = os.path.abspath("assets/audio")
OUT_DIR2 = os.path.abspath("BAN_CAP_NHAT_NETLIFY/assets/audio")

TRACKS_B7 = [
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
            "Thầy chúc các em có một buổi học thật say mê, tràn đầy hứng khởi và gặt hái rất nhiều kiến thức bổ ích. "
            "Nào, Thầy trò mình cùng bắt đầu nhé!"
        )
    },
    {
        "filename": "b7_main_lecture.mp3",
        "title": "Bài 7 Lớp 10 - Lời giảng lý thuyết",
        "text": (
            "Chào các em học sinh thân mến! "
            "Hôm nay Thầy Sáng sẽ cùng các em bước vào một thế giới toán học hoàn toàn mới, thế giới của Véc tơ. "
            "Các em hãy hình dung, trong cuộc sống có những đại lượng chỉ cần một con số là xác định xong, như khối lượng năm mươi ki lô gam hay nhiệt độ ba mươi độ C. "
            "Nhưng cũng có những đại lượng mà nếu thiếu đi phương hướng, chúng ta sẽ hoàn toàn mất phương hướng! "
            "Điển hình là vận tốc của cơn bão hay lực kéo của một con tàu. "
            "Để mô tả trọn vẹn cả độ lớn lẫn chiều di chuyển, toán học trang bị cho chúng ta khái niệm véc tơ, một đoạn thẳng có hướng. "
            "Khi ta viết véc tơ A B có mũi tên trên đầu, điểm A đứng trước là điểm xuất phát, điểm B đứng sau là đích đến, và khoảng cách giữa A và B chính là độ dài của véc tơ ấy. "
            "Các em hãy cùng Thầy khám phá bài học đầy lôi cuốn này nhé!"
        )
    }
]

def synthesize_clean_chunk(sentence):
    # Strip trailing periods/exclamations to avoid edge_tts empty chunk bug
    text_to_say = sentence.rstrip('.!? \t\r\n')
    h = hashlib.sha256(text_to_say.encode("utf-8")).hexdigest()[:16]
    cache_path = os.path.join(CACHE_DIR, f"chunk_{h}.mp3")
    
    if os.path.exists(cache_path) and os.path.getsize(cache_path) > 500:
        with open(cache_path, "rb") as f:
            return f.read()
            
    for attempt in range(1, 8):
        try:
            temp_mp3 = os.path.join(CACHE_DIR, f"tmp_{h}.mp3")
            cmd = [
                PY_EXE, "-m", "edge_tts",
                "--voice", VOICE,
                "--text", text_to_say,
                "--write-media", temp_mp3
            ]
            res = subprocess.run(cmd, capture_output=True, text=True, timeout=25)
            if res.returncode == 0 and os.path.exists(temp_mp3) and os.path.getsize(temp_mp3) > 500:
                with open(temp_mp3, "rb") as f:
                    data = f.read()
                with open(cache_path, "wb") as f:
                    f.write(data)
                try: os.remove(temp_mp3)
                except: pass
                time.sleep(2.0)
                return data
            else:
                time.sleep(2.0 * attempt)
        except Exception:
            time.sleep(2.0 * attempt)
    return None

def main():
    print("HOÀN THÀNH 2 BẢN THU ÂM CÒN LẠI CỦA BÀI 7 LỚP 10")
    for track in TRACKS_B7:
        filename = track["filename"]
        title = track["title"]
        text_clean = unicodedata.normalize("NFC", track["text"])
        sentences = [s.strip() for s in re.split(r"(?<=[.!?])\s+", text_clean) if s.strip()]
        
        print(f"\nĐang xử lý: {title} ({len(sentences)} câu)...")
        combined = b""
        for idx, s in enumerate(sentences, 1):
            data = synthesize_clean_chunk(s)
            if data:
                combined += data
                print(f"  [{idx}/{len(sentences)}] OK ({len(data):,} bytes): {s[:35]}...")
            else:
                print(f"  [ERROR] Lỗi câu {idx}: {s}")
                
        out1 = os.path.join(OUT_DIR1, filename)
        out2 = os.path.join(OUT_DIR2, filename)
        with open(out1, "wb") as f:
            f.write(combined)
        with open(out2, "wb") as f:
            f.write(combined)
        print(f"==> HOÀN TẤT {filename}: {len(combined):,} bytes!")
        
    print("\nĐÃ HOÀN TẤT 100% TOÀN BỘ CÁC TỆP ÂM THANH!")

if __name__ == "__main__":
    main()

