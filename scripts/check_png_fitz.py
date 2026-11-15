import fitz # pymupdf has pixmap/image handling!

# Let's see if we can open the screenshot with fitz
doc = fitz.open('scripts/b12_section1.png')
print("Image size:", doc[0].rect)
