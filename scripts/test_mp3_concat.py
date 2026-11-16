# -*- coding: utf-8 -*-
with open("assets/audio/test_cli.mp3", "rb") as f:
    b = f.read()

concat = b + b
with open("assets/audio/test_concat.mp3", "wb") as f:
    f.write(concat)

print("Original sz:", len(b), "Concat sz:", len(concat))
