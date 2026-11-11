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
        "filename": "b10_8_welcome.mp3",
        "title": "Lời chào mở đầu",
        "text": (
            "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. "
            "Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. "
            "Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!"
        )
    },
    {
        "filename": "b10_8_hook.mp3",
        "title": "Tình huống thực tế dẫn nhập",
        "text": (
            "Các em hãy cùng Thầy quan sát một tình huống thực tế rất gần gũi ở vùng sông nước: "
            "Một chiếc ca nô muốn di chuyển từ bờ bên này sang bờ bên kia của một dòng sông chảy xiết. "
            "Người lái ca nô hướng mũi lái thẳng sang bờ đối diện với vận tốc riêng là v một. "
            "Thế nhưng, dòng nước chảy xiết lại cuốn ca nô xuôi dòng với vận tốc v hai. "
            "Kết quả là chiếc ca nô bị dạt chéo về phía hạ lưu và cập bến tại một vị trí hoàn toàn khác với vận tốc thực tế v. "
            "Vận tốc thực tế này chính là tổng của hai chuyển động: véctơ v bằng véctơ v một cộng véctơ v hai. "
            "Làm thế nào để xác định chính xác hướng đi và tốc độ thực tế của chiếc ca nô? "
            "Đó chính là câu hỏi mà bài học Tổng và hiệu của hai véctơ ngày hôm nay sẽ giúp các em giải quyết trọn vẹn!"
        )
    },
    {
        "filename": "b10_8_goals.mp3",
        "title": "Mục tiêu bài học",
        "text": (
            "Mục tiêu cốt lõi của bài học hôm nay gồm bốn nội dung trọng tâm: "
            "Thứ nhất, làm chủ định nghĩa tổng của hai véctơ, quy tắc tam giác và quy tắc hình bình hành. "
            "Thứ hai, hiểu rõ khái niệm véctơ đối và thành thạo quy tắc trừ hai véctơ. "
            "Thứ ba, vận dụng xuất sắc hệ thức trung điểm và trọng tâm tam giác. "
            "Và thứ tư, giải quyết thành thạo các bài toán thực tiễn về hợp lực và vận tốc tổng hợp trong đời sống."
        )
    },
    {
        "filename": "b10_8_sec1a.mp3",
        "title": "Mục 1a - Quy tắc tam giác",
        "text": (
            "Mục một a: Quy tắc tam giác. Cho hai véctơ a và b tuỳ ý. "
            "Từ một điểm A bất kỳ, ta vẽ véctơ A B bằng véctơ a, rồi từ điểm B ta vẽ véctơ B C bằng véctơ b. "
            "Khi đó véctơ A C được gọi là tổng của hai véctơ a và b. "
            "Quy tắc ba điểm được phát biểu là: Với ba điểm A, B, C bất kỳ, ta luôn có véctơ A B cộng véctơ B C bằng véctơ A C."
        )
    },
    {
        "filename": "b10_8_sec1b.mp3",
        "title": "Mục 1b - Quy tắc hình bình hành",
        "text": (
            "Mục một b: Quy tắc hình bình hành. Nếu tứ giác A B C D là một hình bình hành, "
            "thì tổng của hai véctơ có chung điểm gốc A là véctơ A B cộng véctơ A D sẽ bằng véctơ đường chéo xuất phát từ đỉnh A, tức là véctơ A C."
        )
    },
    {
        "filename": "b10_8_sec1c.mp3",
        "title": "Mục 1c - Tính chất phép cộng vectơ",
        "text": (
            "Mục một c: Các tính chất của phép cộng véctơ. Phép cộng véctơ có ba tính chất quan trọng: "
            "Tính chất giao hoán: véctơ a cộng véctơ b bằng véctơ b cộng véctơ a. "
            "Tính chất kết hợp: tổng véctơ a cộng b rồi cộng c bằng véctơ a cộng với tổng b cộng c. "
            "Và tính chất cộng với véctơ không: véctơ a cộng véctơ không bằng chính nó."
        )
    },
    {
        "filename": "b10_8_sec2a.mp3",
        "title": "Mục 2a - Vectơ đối",
        "text": (
            "Mục hai a: Véctơ đối. Véctơ đối của véctơ a là một véctơ có cùng độ dài nhưng ngược hướng với véctơ a, kí hiệu là trừ véctơ a. "
            "Tổng của véctơ a và véctơ đối của nó luôn bằng véctơ không. "
            "Đặc biệt, véctơ đối của véctơ A B chính là véctơ B A."
        )
    },
    {
        "filename": "b10_8_sec2b.mp3",
        "title": "Mục 2b - Quy tắc trừ hai vectơ",
        "text": (
            "Mục hai b: Quy tắc trừ hai véctơ. Hiệu của hai véctơ a trừ véctơ b được định nghĩa là véctơ a cộng với véctơ đối của véctơ b. "
            "Với ba điểm O, A, B bất kỳ, ta có quy tắc hiệu chung gốc: véctơ O B trừ véctơ O A bằng véctơ A B. "
            "Quy tắc này cho phép ta biến đổi hiệu hai véctơ chung gốc thành véctơ nối hai điểm ngọn theo thứ tự sau trừ trước."
        )
    },
    {
        "filename": "b10_8_interactive_lecture.mp3",
        "title": "Bài giảng tương tác",
        "text": (
            "Chào các em! Bây giờ Thầy trò mình cùng bước vào bài giảng tương tác tổng hợp của Bài tám. "
            "Trong hình học và vật lý, khi hai lực cùng tác dụng vào một vật, hoặc hai chuyển động diễn ra đồng thời, "
            "chúng ta cần tìm một véctơ duy nhất thay thế cho cả hai véctơ đó. Đó chính là bài toán tìm tổng của hai véctơ. "
            "Chúng ta có hai công cụ kỳ diệu: Quy tắc ba điểm, khi điểm cuối véctơ trước là điểm đầu véctơ sau; "
            "và Quy tắc hình bình hành khi hai véctơ có chung gốc xuất phát. "
            "Bây giờ, Thầy có một câu hỏi tương tác nhanh để kiểm tra các em nhé. Hãy trả lời câu hỏi hiện trên màn hình! "
            "Rất tuyệt vời! Thầy khen các em đã nắm chắc quy tắc tam giác. "
            "Tiếp tục với phép trừ véctơ, để trừ hai véctơ ta cộng với véctơ đối. "
            "Đặc biệt, khi có hai véctơ chung gốc O B trừ O A, kết quả chính là véctơ A B. "
            "Thầy lại có một câu hỏi tương tác tiếp theo để các em thực hành ngay nhé!"
        )
    },
    {
        "filename": "b10_8_wrapup.mp3",
        "title": "Lời giải thực tế ca nô",
        "text": (
            "Chào các em! Như vậy Thầy trò mình đã giải quyết xong trọn vẹn bài toán chiếc ca nô qua sông. "
            "Nhờ quy tắc hình bình hành, ta đã xác định được chính xác vận tốc tổng hợp và góc dạt của ca nô. "
            "Kiến thức tổng và hiệu véctơ không chỉ là nền tảng của toán học mà còn là chìa khoá vàng trong vật lý học và đời sống kỹ thuật. "
            "Các em hãy làm tiếp phần luyện tập thích ứng bên dưới để tích luỹ điểm thưởng nhé!"
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
                time.sleep(1.0)
                return data
            else:
                time.sleep(1.5 * attempt)
        except Exception:
            time.sleep(1.5 * attempt)
    return None

def main():
    print("BAT DAU TAO AM THANH CHO BAI 8 LOP 10...")
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
        
    print("\nDA TAO XONG TOAN BO 10 FILE AUDIO CHO BAI 8 LOP 10!")

if __name__ == "__main__":
    main()

