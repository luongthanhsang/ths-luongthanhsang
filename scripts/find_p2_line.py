import pymupdf

doc = pymupdf.open(r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1794658543880_0f314319.png")
pix = doc[0].get_pixmap()

# In Panel 2 (x: 250..520), let's find the line pixels across y: 15..175
print("Panel 2 line scan:")
for y in range(15, 175, 5):
    # look for dark pixels that are NOT part of the horizontal top/bottom edges
    if abs(y - 49) > 3 and abs(y - 133) > 3:
        dark = [x for x in range(330, 480) if pix.pixel(x, y)[0] < 100]
        # check if cyan
        cyan = [x for x in range(330, 480) if pix.pixel(x, y)[2] > 150 and pix.pixel(x, y)[0] < 100]
        print(f"y={y}: dark={dark}, cyan={cyan}")
