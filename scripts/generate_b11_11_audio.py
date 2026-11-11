# -*- coding: utf-8 -*-
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
os.makedirs(OUT_DIR1, exist_ok=True)
os.makedirs(OUT_DIR2, exist_ok=True)

TRACKS = [
    {
        "filename": "b11_11_welcome.mp3",
        "title": "Lời chào mở đầu",
        "text": (
            "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. "
            "Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. "
            "Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!"
        )
    },
    {
        "filename": "b11_11_hook.mp3",
        "title": "Tình huống thực tế dẫn nhập",
        "text": (
            "Các em hãy cùng Thầy quan sát một hình ảnh quen thuộc: "
            "Trên một cây cầu sắt hoặc cầu vượt giao thông, các thanh ray tàu hỏa chạy dài song song với nhau trên cùng một mặt sàn và không bao giờ gặp nhau. "
            "Thế nhưng, hãy nhìn thanh ray tàu chạy phía dưới với một đường dây cáp điện trên cao hoặc thanh lan can của tầng trên: "
            "chúng cũng không bao giờ cắt nhau, nhưng chúng lại không hề song song vì chúng nằm ở hai độ cao khác nhau và hướng lệch nhau trong không gian! "
            "Tại sao cùng là không cắt nhau, nhưng cặp này lại song song, còn cặp kia lại chéo nhau? "
            "Bài học Hai đường thẳng song song ngày hôm nay sẽ giúp các em phân biệt chính xác bản chất không gian này và làm chủ các định lý nền tảng của hình học ba chiều!"
        )
    },
    {
        "filename": "b11_11_goals.mp3",
        "title": "Mục tiêu bài học",
        "text": (
            "Mục tiêu cốt lõi của bài học hôm nay gồm bốn nội dung trọng tâm: "
            "Thứ nhất, nhận biết và phân biệt chính xác bốn vị trí tương đối của hai đường thẳng trong không gian: cắt nhau, trùng nhau, song song và chéo nhau. "
            "Thứ hai, nắm vững định nghĩa và hai tính chất cơ bản: tính duy nhất qua một điểm và tính chất bắc cầu. "
            "Thứ ba, làm chủ định lý về giao tuyến của ba mặt phẳng cùng hệ quả tìm giao tuyến song song. "
            "Và thứ tư, vận dụng thành thạo để giải quyết các bài toán thiết diện và tình huống kết cấu giàn không gian thực tế."
        )
    },
    {
        "filename": "b11_11_sec1a.mp3",
        "title": "Mục 1a - Hai đường thẳng đồng phẳng",
        "text": (
            "Mục một a: Hai đường thẳng đồng phẳng. "
            "Trong không gian, nếu hai đường thẳng a và b cùng nằm trong một mặt phẳng, ta có ba vị trí tương đối quen thuộc của hình học phẳng: "
            "hoặc chúng cắt nhau tại một điểm duy nhất, hoặc chúng trùng nhau, hoặc chúng song song với nhau, tức là cùng nằm trong một mặt phẳng và không có điểm chung nào."
        )
    },
    {
        "filename": "b11_11_sec1b.mp3",
        "title": "Mục 1b - Hai đường thẳng chéo nhau",
        "text": (
            "Mục một b: Hai đường thẳng chéo nhau. "
            "Đây là nét đặc trưng khác biệt hoàn toàn giữa không gian và mặt phẳng. "
            "Hai đường thẳng được gọi là chéo nhau nếu không có bất kì mặt phẳng nào chứa cả hai đường thẳng đó. "
            "Nói cách khác, hai đường thẳng chéo nhau thì không cùng nằm trong một mặt phẳng và không bao giờ có điểm chung."
        )
    },
    {
        "filename": "b11_11_sec2a.mp3",
        "title": "Mục 2a - Tính chất hai đường thẳng song song",
        "text": (
            "Mục hai a: Tính chất của hai đường thẳng song song. "
            "Trong không gian, qua một điểm nằm ngoài một đường thẳng cho trước, có một và chỉ một đường thẳng song song với đường thẳng đã cho. "
            "Đồng thời, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau: a song song c và b song song c suy ra a song song b."
        )
    },
    {
        "filename": "b11_11_sec2b.mp3",
        "title": "Mục 2b - Định lý giao tuyến của ba mặt phẳng",
        "text": (
            "Mục hai b: Định lý giao tuyến của ba mặt phẳng. "
            "Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt, thì ba giao tuyến đó hoặc đôi một song song, hoặc đồng quy tại một điểm. "
            "Từ định lý này ta có hệ quả cực kỳ quan trọng: Khi hai mặt phẳng lần lượt chứa hai đường thẳng song song, giao tuyến của chúng nếu có chắc chắn phải song song với hai đường thẳng ấy."
        )
    },
    {
        "filename": "b11_11_interactive_lecture.mp3",
        "title": "Bài giảng tương tác",
        "text": (
            "Chào các em! Bây giờ Thầy trò mình cùng bước vào bài giảng tương tác tổng hợp của Bài mười một: Hai đường thẳng song song. "
            "Trong không gian ba chiều, việc phân biệt giữa hai đường thẳng song song và hai đường thẳng chéo nhau là chiếc chìa khoá đầu tiên mở cánh cửa hình học không gian. "
            "Nhớ lời Thầy dặn: Không có điểm chung chưa chắc đã song song! "
            "Nếu chúng đồng phẳng thì mới là song song, còn nếu không có mặt phẳng nào chứa cả hai thì chúng là hai đường thẳng chéo nhau. "
            "Bây giờ, Thầy có một câu hỏi tương tác nhanh để kiểm tra các em nhé. Hãy quan sát và trả lời câu hỏi hiện trên màn hình! "
            "Rất tuyệt vời! Thầy khen các em đã trả lời rất chuẩn xác. "
            "Tiếp theo, khi làm bài toán tìm giao tuyến giữa hai mặt phẳng mà mỗi mặt phẳng lại chứa một đường thẳng song song, "
            "giao tuyến nếu có sẽ luôn đi qua điểm chung và chạy song song với hai đường thẳng ấy. "
            "Đây là quy tắc vàng để vẽ thiết diện! Nào, Thầy lại có câu hỏi tương tác tiếp theo để các em thực hành ngay nhé!"
        )
    },
    {
        "filename": "b11_11_wrapup.mp3",
        "title": "Quay về giải quyết bài toán mở đầu",
        "text": (
            "Như vậy Thầy trò mình đã giải quyết trọn vẹn câu hỏi mở đầu về cây cầu sắt và đường ray. "
            "Hai thanh ray tàu hỏa cùng nằm trên mặt tà vẹt và không cắt nhau nên chúng song song. "
            "Còn thanh ray với dây cáp điện trên cao nằm ở hai mặt phẳng lệch nhau nên chúng là hai đường thẳng chéo nhau. "
            "Hiểu rõ điều này giúp các kỹ sư thiết kế các tầng giàn cầu vượt chịu lực an toàn và chính xác tuyệt đối. "
            "Các em hãy tiếp tục làm bài tập luyện tập thích ứng bên dưới để tích luỹ điểm thưởng nhé!"
        )
    }
]

def synthesize_clean_chunk(sentence):
    text_to_say = sentence.rstrip('.!? \t\r\n')
    if not text_to_say:
        return None
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
                time.sleep(0.8)
                return data
            else:
                time.sleep(1.2 * attempt)
        except Exception:
            time.sleep(1.2 * attempt)
    return None

def main():
    print("BAT DAU TAO AM THANH CHO BAI 11 LOP 11...")
    for track in TRACKS:
        filename = track["filename"]
        title = track["title"]
        text_clean = unicodedata.normalize("NFC", track["text"])
        sentences = [s.strip() for s in re.split(r"(?<=[.!?])\s+", text_clean) if s.strip()]
        
        print(f"\nDang xu ly: {title} ({len(sentences)} cau)...")
        combined = b""
        for idx, s in enumerate(sentences, 1):
            data = synthesize_clean_chunk(s)
            if data:
                combined += data
                print(f"  [{idx}/{len(sentences)}] OK ({len(data):,} bytes): {s[:35]}...")
            else:
                print(f"  [ERROR] Loi cau {idx}: {s}")
                
        out1 = os.path.join(OUT_DIR1, filename)
        out2 = os.path.join(OUT_DIR2, filename)
        with open(out1, "wb") as f:
            f.write(combined)
        with open(out2, "wb") as f:
            f.write(combined)
        print(f"==> HOAN TAT {filename}: {len(combined):,} bytes!")
        
    print("\nDA TAO XONG TOAN BO 9 FILE AUDIO CHO BAI 11 LOP 11!")

if __name__ == "__main__":
    main()

