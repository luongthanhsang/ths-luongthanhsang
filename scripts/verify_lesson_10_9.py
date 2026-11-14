import subprocess
import time
import re

server_proc = subprocess.Popen(['scripts/py/python.exe', '-m', 'http.server', '8113'])
time.sleep(1.5)

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
try:
    url = 'http://localhost:8113/bai-hoc-so.html?grade=10&lesson=10-c4-b9'
    res = subprocess.run([chrome_path, '--headless=new', '--dump-dom', url], capture_output=True, text=True, timeout=25)
    dom = res.stdout
    print(f"DOM length: {len(dom)}")

    # Check title
    has_title = "Tích của một vectơ với một số" in dom
    print("Has Lesson 9 title:", has_title)

    # Check for undefined
    dom_no_scripts = re.sub(r'<script.*?</script>', '', dom, flags=re.DOTALL)
    undefs = re.findall(r'[^<>"\']{0,30}undefined[^<>"\']{0,30}', dom_no_scripts)
    print("Undefined occurrences:", len(undefs), undefs[:3])

    # Check Math input error
    math_errs = re.findall(r'.{0,40}Math input error.{0,40}', dom)
    print("Math input errors:", len(math_errs), math_errs)

    # Check Voice boxes
    voice_boxes = re.findall(r'teacher-voice-gold-box', dom)
    print("Voice boxes found:", len(voice_boxes))

    # Check SVGs
    svgs = re.findall(r'<svg', dom)
    print("SVG elements found:", len(svgs))

    # Check exam practice cards
    exam_cards = re.findall(r'exam-item-card', dom)
    print("Exam practice cards found:", len(exam_cards))

    # Check section cards
    sections = re.findall(r'class="lesson-section-card"', dom)
    print("Section cards found:", len(sections))

    # Check POI markers
    pois = re.findall(r'gold-audio-poi-marker', dom)
    print("POI markers found:", len(pois))

    # Check if window.B10_9_AUDIO_CACHE is available in script execution
    is_cache_loaded = "window.B10_9_AUDIO_CACHE" in dom or "b10_9_welcome.mp3" in dom
    print("Is B10_9 Audio Cache loaded:", is_cache_loaded)

finally:
    server_proc.terminate()
