import fitz

doc = fitz.open("de_thi_2026_0110.pdf")
page = doc[3] # Page 4 (0-indexed)
rect = page.rect
print("Page rect:", rect)

# Clip around Câu 3: y from roughly 200 to 550
# Let's inspect text blocks on page 4 to find exact y coordinates
blocks = page.get_text("blocks")
for b in blocks:
    if "Câu 3" in b[4]:
        print("Found Câu 3 at:", b[:4])
        y0 = b[1]
    if "Câu 4" in b[4]:
        print("Found Câu 4 at:", b[:4])
        y1 = b[1]

# Clip rect for Câu 3 drawing
clip_rect = fitz.Rect(0, y0, rect.width, y1)
pix = page.get_pixmap(clip=clip_rect, dpi=200)
pix.save("pdf_pages_0110/cau_3_detail.png")
print("Saved pdf_pages_0110/cau_3_detail.png")
