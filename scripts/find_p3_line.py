import pymupdf

doc = pymupdf.open(r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1794658543880_0f314319.png")
pix = doc[0].get_pixmap()

print("Panel 3 line scan:")
for y in range(50, 135, 5):
    # find dark pixels inside x: 530..740 not on border
    dark = [x for x in range(540, 740) if pix.pixel(x, y)[0] < 100]
    cyan = [x for x in range(540, 740) if pix.pixel(x, y)[2] > 150 and pix.pixel(x, y)[0] < 100]
    print(f"y={y}: dark={dark}, cyan={cyan}")
