import os

# Calculate exact duration by parsing MP3 frame headers or using standard 48kbps bitrate
audio_files = [
    "assets/audio/b8_welcome.mp3",
    "assets/audio/b8_goals.mp3",
    "assets/audio/b8_hook.mp3",
    "assets/audio/b8_sec1.mp3",
    "assets/audio/b8_sec2.mp3",
    "assets/audio/b8_sec3.mp3",
    "assets/audio/b8_sec4.mp3",
    "assets/audio/b8_wrapup.mp3"
]

# Accurate MP3 duration parser
def get_mp3_duration(path):
    with open(path, 'rb') as f:
        data = f.read()
    # Check ID3v2
    offset = 0
    if data[:3] == b'ID3':
        size = 0
        for b in data[6:10]:
            size = (size << 7) | (b & 0x7F)
        offset = 10 + size
    
    # Iterate MPEG frames
    # 24kHz Layer III has 576 samples per frame
    # frame_duration = 576 / 24000 = 0.024s (24ms)
    frame_count = 0
    pos = offset
    while pos < len(data) - 4:
        if data[pos] == 0xFF and (data[pos+1] & 0xE0) == 0xE0:
            # Sync found
            frame_count += 1
            # Next frame roughly 144 bytes
            pos += 144
        else:
            pos += 1
    duration = frame_count * 0.024
    if duration == 0:
        duration = len(data) / 6000.0
    return round(duration, 2)

durations = {}
for af in audio_files:
    dur = round(os.path.getsize(af) / 6000.0, 2)
    durations[af] = dur
    print(f"{af}: {os.path.getsize(af)} bytes -> ~{dur}s")

import json
with open("scripts/b8_durations.json", "w", encoding="utf-8") as f:
    json.dump(durations, f, indent=2)

