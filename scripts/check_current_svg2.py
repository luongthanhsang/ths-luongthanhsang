import pymupdf

doc = pymupdf.open('scripts/current_svg2.png')
print("Image size:", doc[0].rect)
pix = doc[0].get_pixmap()
print("Pixmap width:", pix.width, "height:", pix.height)
