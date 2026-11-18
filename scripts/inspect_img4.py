from PIL import Image
import numpy as np

img_path = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\.user_uploaded\media_1795005831131_5e3a3ced.png"
img = Image.open(img_path)
print("Image format:", img.format, "Size:", img.size, "Mode:", img.mode)

# Let's see if there's transparency or white background
arr = np.array(img)
print("Array shape:", arr.shape)
