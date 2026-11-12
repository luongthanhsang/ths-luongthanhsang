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
        "filename": "b12_7_welcome.mp3",
        "title": "Lời chào mở đầu Thầy Sáng",
        "text": (
            "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. "
            "Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. "
            "Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!"
        )
    },
    {
        "filename": "b12_7_goals.mp3",
        "title": "Mục tiêu bài học",
        "text": (
            "Mục tiêu cốt lõi của bài học hôm nay gồm bốn nội dung trọng tâm. "
            "Thứ nhất, nhận biết và hiểu sâu sắc hệ trục tọa độ Đề các vuông góc O x y z trong không gian với ba trục vuông góc và ba véc tơ đơn vị i, j, k. "
            "Thứ hai, xác định thành thạo tọa độ của một điểm M và tọa độ các hình chiếu vuông góc lên các trục cũng như các mặt phẳng tọa độ. "
            "Thứ ba, làm chủ tọa độ của véc tơ, công thức tọa độ véc tơ A B bằng tọa độ B trừ tọa độ A, cùng tọa độ trung điểm và trọng tâm tam giác. "
            "Thứ tư, vận dụng linh hoạt hệ tọa độ không gian để giải quyết các bài toán định vị thực tế và kết cấu không gian ba chiều."
        )
    },
    {
        "filename": "b12_7_hook.mp3",
        "title": "Tình huống thực tế radar kiểm soát không lưu",
        "text": (
            "Các em hãy cùng Thầy quan sát một tình huống thực tế rất sinh động: "
            "Tại đài kiểm soát không lưu sân bay quốc tế Tân Sơn Nhất, màn hình radar liên tục giám sát hàng trăm chuyến bay di chuyển trên bầu trời. "
            "Mỗi chiếc máy bay đều được xác định chính xác vị trí thông qua ba thông số không gian: khoảng cách kinh độ Đông Tây, khoảng cách vĩ độ Nam Bắc, và độ cao hành trình so với mực nước biển. "
            "Làm thế nào để các kỹ sư hàng không xây dựng một hệ thống toán học chuẩn xác nhằm định vị chính xác vị trí máy bay và giám sát khoảng cách an toàn giữa các máy bay trong không gian ba chiều? "
            "Hệ trục tọa độ Đề các vuông góc O x y z chính là công cụ vĩ đại giúp chúng ta giải mã trọn vẹn bài toán thực tế này!"
        )
    },
    {
        "filename": "b12_7_interactive_lecture.mp3",
        "title": "Bài giảng tương tác POI",
        "text": (
            "Chào các em! Bây giờ Thầy trò mình cùng bước vào bài giảng tương tác tổng hợp của Bài bảy. "
            "Nếu như trong mặt phẳng chúng ta chỉ cần hai trục O x và O y để xác định vị trí, thì trong không gian ba chiều, chúng ta bổ sung thêm trục thứ ba là trục cao O z vuông góc với cả hai trục còn lại. "
            "Ba trục này tạo thành hệ tọa độ Đề các vuông góc O x y z. "
            "Bây giờ, Thầy có một câu hỏi tương tác nhanh xuất hiện trên màn hình để kiểm tra các em nhé. Hãy trả lời thật chính xác! "
            "Rất tuyệt vời! Thầy khen các em đã nắm rất chắc kiến thức về các trục tọa độ. "
            "Tiếp theo, với mỗi điểm M trong không gian, ta luôn biểu diễn được véc tơ O M bằng x nhân véc tơ i, cộng y nhân véc tơ j, cộng z nhân véc tơ k. "
            "Bộ ba số x, y, z chính là tọa độ của điểm M. "
            "Thầy lại có một câu hỏi tương tác tiếp theo để các em thực hành ngay nhé!"
        )
    },
    {
        "filename": "b12_7_sec1a.mp3",
        "title": "Mục 1a - Hệ trục tọa độ Oxyz",
        "text": (
            "Mục một a: Hệ trục tọa độ Đề các vuông góc trong không gian. "
            "Trong không gian, ta xét ba trục số O x, O y, O z vuông góc với nhau từng đôi một tại gốc O. "
            "Trục O x gọi là trục hoành, trục O y gọi là trục tung, và trục O z gọi là trục cao. "
            "Trên ba trục lần lượt có ba véc tơ đơn vị i, j, k có độ dài bằng một và đôi một vuông góc với nhau. "
            "Ba mặt phẳng tọa độ O x y, O y z, và O z x vuông góc từng đôi một."
        )
    },
    {
        "filename": "b12_7_sec1b.mp3",
        "title": "Mục 1b - Tọa độ điểm và hình chiếu",
        "text": (
            "Mục một b: Tọa độ của một điểm trong không gian. "
            "Trong không gian O x y z, mỗi điểm M hoàn toàn được xác định bởi bộ ba số thực x, y, z sao cho véc tơ O M bằng x nhân véc tơ i, cộng y nhân véc tơ j, cộng z nhân véc tơ k. "
            "Ta viết M mở ngoặc x chấm phẩy y chấm phẩy z đóng ngoặc. "
            "Để tìm hình chiếu vuông góc của M lên trục hoặc mặt phẳng tọa độ, Thầy Sáng có một mẹo cực kỳ nhanh: Chiếu lên đâu thì giữ nguyên tọa độ đó, khuyết thành phần nào thì thành phần đó bằng không!"
        )
    },
    {
        "filename": "b12_7_sec2a.mp3",
        "title": "Mục 2a - Tọa độ của vectơ",
        "text": (
            "Mục hai a: Tọa độ của véc tơ trong không gian. "
            "Cho véc tơ u trong không gian O x y z. Luôn tồn tại duy nhất bộ ba số x, y, z sao cho véc tơ u bằng x véc tơ i cộng y véc tơ j cộng z véc tơ k. "
            "Ta gọi x, y, z là tọa độ của véc tơ u. "
            "Đặc biệt: véc tơ i có tọa độ một chấm phẩy không chấm phẩy không. Véc tơ j là không chấm phẩy một chấm phẩy không. Véc tơ k là không chấm phẩy không chấm phẩy một. Và véc tơ không là không chấm phẩy không chấm phẩy không."
        )
    },
    {
        "filename": "b12_7_sec2b.mp3",
        "title": "Mục 2b - Vectơ AB, trung điểm và trọng tâm",
        "text": (
            "Mục hai b: Liên hệ giữa tọa độ điểm và tọa độ véc tơ. "
            "Khi biết tọa độ hai điểm A và B, ta tính tọa độ véc tơ A B bằng quy tắc sau trừ trước: lấy tọa độ điểm B trừ đi tọa độ điểm A tương ứng. "
            "Tọa độ trung điểm của đoạn thẳng A B bằng trung bình cộng tọa độ của A và B. "
            "Tọa độ trọng tâm của tam giác A B C bằng tổng tọa độ ba đỉnh chia cho ba."
        )
    },
    {
        "filename": "b12_7_wrapup.mp3",
        "title": "Chốt bài học",
        "text": (
            "Chào các em! Như vậy Thầy trò mình đã giải quyết xong trọn vẹn bài toán radar định vị không lưu tại sân bay Tân Sơn Nhất. "
            "Bằng cách gắn hệ tọa độ O x y z vào tháp không lưu, ta dễ dàng xác định được vị trí từng chiếc máy bay và khoảng cách an toàn giữa chúng bằng công thức độ dài véc tơ. "
            "Hệ tọa độ O x y z là chìa khóa vàng mở ra toàn bộ thế giới hình học không gian hiện đại. "
            "Các em hãy làm tiếp các câu hỏi trắc nghiệm ba dạng thức bên dưới để tích lũy điểm thưởng nhé!"
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
    print("BAT DAU TAO AM THANH CHO BAI 7 LOP 12...")
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
                
        if combined:
            p1 = os.path.join(OUT_DIR1, filename)
            p2 = os.path.join(OUT_DIR2, filename)
            with open(p1, "wb") as f:
                f.write(combined)
            with open(p2, "wb") as f:
                f.write(combined)
            print(f"-> Luu thanh cong: {filename} ({len(combined):,} bytes)")
        else:
            print(f"-> THAT BAI: {filename}")

if __name__ == "__main__":
    main()

