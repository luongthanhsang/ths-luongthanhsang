import pymupdf

doc = pymupdf.open(r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1794658543880_0f314319.png")
print("Image size:", doc[0].rect)
pix = doc[0].get_pixmap()
print("Pixmap width:", pix.width, "height:", pix.height)
