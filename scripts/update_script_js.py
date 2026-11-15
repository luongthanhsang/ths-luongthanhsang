with open('js/script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update KNOWN_AUDIO_DURATIONS
durations_insert = '''      "assets/audio/b10_5_welcome.mp3": 28.5,
      "assets/audio/b10_5_goals.mp3": 24.0,
      "assets/audio/b10_5_hook.mp3": 25.5,
      "assets/audio/b10_5_sec1.mp3": 30.0,
      "assets/audio/b10_5_sec2.mp3": 32.5,
      "assets/audio/b10_5_sec3.mp3": 29.0,
      "assets/audio/b10_5_wrapup.mp3": 22.0,
      "assets/audio/b10_6_welcome.mp3": 27.5,
      "assets/audio/b10_6_goals.mp3": 24.5,
      "assets/audio/b10_6_hook.mp3": 25.0,
      "assets/audio/b10_6_sec1.mp3": 31.0,
      "assets/audio/b10_6_sec2.mp3": 27.0,
      "assets/audio/b10_6_sec3.mp3": 29.5,
      "assets/audio/b10_6_sec4.mp3": 34.0,
      "assets/audio/b10_6_wrapup.mp3": 23.0,
'''

target_dur = '"assets/audio/b10_4_wrapup.mp3": 26.8'
if target_dur in text:
    text = text.replace(target_dur, target_dur + ",\n" + durations_insert.strip())
    print("Updated KNOWN_AUDIO_DURATIONS")
else:
    print("Could not find target_dur")

# 2. Update audioSrc cache checks
target_cache = 'const audioSrc = (window.B10_4_AUDIO_CACHE && window.B10_4_AUDIO_CACHE[audioUrl]) ||'
cache_replacement = '''const audioSrc = (window.B10_5_AUDIO_CACHE && window.B10_5_AUDIO_CACHE[audioUrl]) ||
                         (window.B10_6_AUDIO_CACHE && window.B10_6_AUDIO_CACHE[audioUrl]) ||
                         (window.B10_4_AUDIO_CACHE && window.B10_4_AUDIO_CACHE[audioUrl]) ||'''

if target_cache in text:
    text = text.replace(target_cache, cache_replacement)
    print("Updated audioSrc cache check")
else:
    print("Could not find target_cache")

# 3. Update allLessons
target_lessons = '''const allLessons = [
          window.LESSON_10_C4_B7_DATA,'''

lessons_replacement = '''const allLessons = [
          window.LESSON_10_C3_B5_DATA,
          window.LESSON_10_C3_B6_DATA,
          window.LESSON_10_C2_B3_DATA,
          window.LESSON_10_C2_B4_DATA,
          window.LESSON_10_C4_B7_DATA,'''

if target_lessons in text:
    text = text.replace(target_lessons, lessons_replacement)
    print("Updated allLessons")
else:
    print("Could not find target_lessons")

with open('js/script.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Finished updating js/script.js")
