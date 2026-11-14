with open("de_thi_0110_extracted_text.txt", "r", encoding="utf-8") as f:
    text = f.read()

pages = text.split("--- PAGE ")

print("=== CONTENT OF PAGE 4 (DE THI PHAN III) ===")
print(pages[4])

print("\n=== CONTENT OF PAGE 13 (LOI GIAI CAU 3 PHAN III) ===")
print(pages[13])
