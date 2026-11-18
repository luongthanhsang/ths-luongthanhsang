with open("scripts/b3_extracted_text.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

for line in lines:
    line_s = line.strip()
    if line_s.startswith("===") or any(line_s.startswith(k) for k in ["Bài ", "1. ", "2. ", "3. ", "4. ", "Ví dụ ", "Luyện tập ", "Vận dụng ", "Hình "]):
        print(line_s)
