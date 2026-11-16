import os
from pymupdf import * # test import
import wave

# Read duration from mp3 using mutan or calculate from bitrate (48kbps CBR)
files = [
    "assets/audio/b10_1_welcome.mp3",
    "assets/audio/b10_1_goals.mp3",
    "assets/audio/b10_1_hook.mp3",
    "assets/audio/b10_1_sec1.mp3",
    "assets/audio/b10_1_sec2.mp3",
    "assets/audio/b10_1_sec3.mp3",
    "assets/audio/b10_1_sec4.mp3",
    "assets/audio/b10_1_sec5.mp3",
    "assets/audio/b10_1_wrapup.mp3"
]

# We synthesized at "audio-24khz-48kbitrate-mono-mp3" -> 48000 bits/sec = 6000 bytes/sec
durations = {}
for f in files:
    size = os.path.getsize(f)
    dur = round(size / 6000.0, 1)
    durations[f] = dur
    print(f'"{f}": {dur},')
