import os
import time
import subprocess
import unicodedata
import re

PY_EXE = os.path.abspath("scripts/py/python.exe")
VOICE = "vi-VN-NamMinhNeural"

def synthesize_text_to_mp3(text, output_mp3):
    text_clean = unicodedata.normalize('NFC', text)
    # Split text into sentences
    sentences = [s.strip() for s in re.split(r'(?<=[.!?])\s+', text_clean) if s.strip()]
    print(f"Total sentences to synthesize: {len(sentences)}")
    
    combined_audio = b""
    for idx, sentence in enumerate(sentences, 1):
        temp_txt = os.path.abspath(f"scripts/temp_s_{idx}.txt")
        temp_mp3 = os.path.abspath(f"scripts/temp_s_{idx}.mp3")
        with open(temp_txt, "w", encoding="utf-8") as f:
            f.write(sentence)
            
        success = False
        for attempt in range(1, 8):
            cmd = [
                PY_EXE, "-m", "edge_tts",
                "--voice", VOICE,
                "-f", temp_txt,
                "--write-media", temp_mp3
            ]
            try:
                res = subprocess.run(cmd, capture_output=True, text=True, timeout=25)
                if res.returncode == 0 and os.path.exists(temp_mp3) and os.path.getsize(temp_mp3) > 500:
                    with open(temp_mp3, "rb") as mf:
                        chunk_bytes = mf.read()
                    combined_audio += chunk_bytes
                    print(f"  [Sentence {idx}/{len(sentences)}] SUCCESS ({len(chunk_bytes):,} bytes): {sentence[:35]}...")
                    success = True
                    break
                else:
                    # Transient error, wait and retry
                    time.sleep(1.5 * attempt)
            except Exception as e:
                time.sleep(1.5 * attempt)
                
        # Clean up temp files
        if os.path.exists(temp_txt):
            os.remove(temp_txt)
        if os.path.exists(temp_mp3):
            os.remove(temp_mp3)
            
        if not success:
            print(f"  !! FAILED sentence {idx}: {sentence}")
            return False
            
    with open(output_mp3, "wb") as out:
        out.write(combined_audio)
    print(f"-> FINISHED {output_mp3} ({len(combined_audio):,} bytes)")
    return True

if __name__ == "__main__":
    t_welcome = (
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
    synthesize_text_to_mp3(t_welcome, "assets/audio/b7_welcome.mp3")

