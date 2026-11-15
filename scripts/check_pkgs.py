import os

p = r"D:\Wed_ThS. Lương Thanh Sáng\scripts\py\Lib\site-packages"
if os.path.exists(p):
    print(os.listdir(p))
else:
    print("Not found")
