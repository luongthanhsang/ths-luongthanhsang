import re

with open("de_thi_0110_extracted_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Let's inspect all parts:
# Trang 1: Phần I, Câu 1 -> 7
# Trang 2: Câu 8 -> 12, Phần II Câu 1
# Trang 3: Phần II Câu 2 -> 4
# Trang 4: Phần III Câu 1 -> 6
pages = text.split("--- PAGE ")
for i in range(1, 5):
    print(f"==================== EXAM PAGE {i} ====================")
    print(pages[i])

print("\n==================== SOLUTIONS PREVIEW (PAGES 6 TO 14) ====================")
for i in range(6, 15):
    print(f"--- SOLUTION PAGE {i} ---")
    lines = pages[i].split("\n")
    print("\n".join(lines[:12]))
