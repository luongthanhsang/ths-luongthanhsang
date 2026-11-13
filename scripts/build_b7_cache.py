import os
import base64
import json
import subprocess

AUDIOS = [
    "assets/audio/b7_welcome.mp3",
    "assets/audio/b7_goals.mp3",
    "assets/audio/b7_hook.mp3",
    "assets/audio/b7_sec1.mp3",
    "assets/audio/b7_sec2.mp3",
    "assets/audio/b7_sec3.mp3",
    "assets/audio/b7_sec4.mp3",
    "assets/audio/b7_wrapup.mp3"
]

# Measure durations via Chrome
file_list = [os.path.abspath(f).replace('\\', '/') for f in AUDIOS]
script = """<!DOCTYPE html><html><body><div id="res"></div><script>
const files = %s;
const results = {};
let pending = files.length;
files.forEach(f => {
    const a = new Audio(f);
    a.addEventListener('loadedmetadata', () => {
        results[f] = Math.round(a.duration * 100) / 100;
        pending--;
        if (pending === 0) document.getElementById('res').textContent = JSON.stringify(results);
    });
    a.addEventListener('error', () => {
        results[f] = 20.0;
        pending--;
        if (pending === 0) document.getElementById('res').textContent = JSON.stringify(results);
    });
});
</script></body></html>""" % json.dumps(file_list)

temp_html = "scripts/temp_b7_dur.html"
with open(temp_html, "w", encoding="utf-8") as f:
    f.write(script)

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
file_url = 'file:///' + os.path.abspath(temp_html).replace('\\', '/')
res = subprocess.run([chrome_path, '--headless=new', '--allow-file-access-from-files', '--virtual-time-budget=4000', '--dump-dom', file_url], capture_output=True, text=True, timeout=15)

try:
    os.remove(temp_html)
except:
    pass

dom = res.stdout
start = dom.find('<div id="res">')
end = dom.find('</div>', start)
final_durs = {}
if start != -1 and end != -1:
    json_str = dom[start + len('<div id="res">'):end]
    try:
        dur_map = json.loads(json_str)
        for outpath in AUDIOS:
            abs_p = os.path.abspath(outpath).replace('\\', '/')
            final_durs[outpath] = dur_map.get(abs_p, 20.0)
    except Exception as e:
        print(f"Error parsing json: {e}")
        final_durs = {f: 20.0 for f in AUDIOS}
else:
    final_durs = {f: 20.0 for f in AUDIOS}

print("\nMeasured durations:")
for k, v in final_durs.items():
    print(f'  "{k}": {v},')

# Write cache
cache_entries = {}
for outpath in AUDIOS:
    with open(outpath, "rb") as fp:
        b64 = base64.b64encode(fp.read()).decode("utf-8")
        cache_entries[outpath] = f"data:audio/mpeg;base64,{b64}"

with open("js/b7-audio-cache.js", "w", encoding="utf-8") as f:
    f.write("window.B7_AUDIO_CACHE = window.B7_AUDIO_CACHE || {};\n")
    for k, v in cache_entries.items():
        f.write(f'window.B7_AUDIO_CACHE["{k}"] = "{v}";\n')

print("\nSaved js/b7-audio-cache.js successfully! File size: %d bytes" % os.path.getsize("js/b7-audio-cache.js"))

with open("scripts/b7_durations.json", "w", encoding="utf-8") as f:
    json.dump(final_durs, f, indent=2)

print("Done all!")
