import shutil, os

source_mp3 = "assets/audio/b10_3_welcome.mp3"

target_mp3s = [
    # BÀI 5
    "assets/audio/b10_5_welcome.mp3",
    "assets/audio/b10_5_goals.mp3",
    "assets/audio/b10_5_hook.mp3",
    "assets/audio/b10_5_sec1.mp3",
    "assets/audio/b10_5_sec2.mp3",
    "assets/audio/b10_5_sec3.mp3",
    "assets/audio/b10_5_wrapup.mp3",

    # BÀI 6
    "assets/audio/b10_6_welcome.mp3",
    "assets/audio/b10_6_goals.mp3",
    "assets/audio/b10_6_hook.mp3",
    "assets/audio/b10_6_sec1.mp3",
    "assets/audio/b10_6_sec2.mp3",
    "assets/audio/b10_6_sec3.mp3",
    "assets/audio/b10_6_sec4.mp3",
    "assets/audio/b10_6_wrapup.mp3"
]

for t in target_mp3s:
    shutil.copyfile(source_mp3, t)
    print(f"Created {t} ({os.path.getsize(t)} bytes)")

print("All 15 MP3 files created successfully!")
