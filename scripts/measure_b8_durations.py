import subprocess
import time
import json
import os

server_proc = subprocess.Popen(['scripts/py/python.exe', '-m', 'http.server', '8099'])
time.sleep(1.5)

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

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

durations = {}

try:
    for af in audio_files:
        url = f"http://localhost:8099/{af}"
        script = f"""
        const audio = new Audio('{url}');
        audio.onloadedmetadata = () => {{
            console.log('DURATION:' + audio.duration);
        }};
        """
        # Run headless chrome to inspect duration
        eval_script = f"""
        (function() {{
            return new Promise((resolve) => {{
                const a = new Audio('{url}');
                a.onloadedmetadata = () => resolve(a.duration);
                a.onerror = () => resolve(-1);
            }});
        }})()
        """
        html_content = f"""<!DOCTYPE html><html><body><script>
        const a = new Audio('{url}');
        a.onloadedmetadata = () => {{
            document.title = 'DUR:' + a.duration;
        }};
        </script></body></html>"""
        with open("scripts/temp_dur.html", "w", encoding="utf-8") as f:
            f.write(html_content)
        
        args = [
            chrome_path,
            "--headless=new",
            "--dump-dom",
            "http://localhost:8099/scripts/temp_dur.html"
        ]
        # Let's give it a short moment
        time.sleep(0.5)
        res = subprocess.run(args, capture_output=True, text=True, timeout=10)
        # Or let's use mutagen or python MP3 frame reader for precise duration
finally:
    server_proc.terminate()
    if os.path.exists("scripts/temp_dur.html"):
        os.remove("scripts/temp_dur.html")

