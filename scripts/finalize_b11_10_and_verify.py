# -*- coding: utf-8 -*-
"""
Finalize Bài 10 Lớp 11:
1. Update audio durations in js/script.js
2. Sync to Netlify
3. Verify DOM and Stepper logic via Headless Chrome
"""
import os, re, json, glob, shutil, time, subprocess, socket, urllib.request, struct

def get_mp3_duration(path):
    if not os.path.exists(path): return 30.0
    # Approximate duration for 48kbps mono MP3: size / 6000
    size = os.path.getsize(path)
    return round(size / 6000.0, 1)

all_audios = [
    "assets/audio/b11_10_welcome.mp3",
    "assets/audio/b11_10_goals.mp3",
    "assets/audio/b11_10_hook.mp3",
    "assets/audio/b11_10_sec1.mp3",
    "assets/audio/b11_10_sec2.mp3",
    "assets/audio/b11_10_sec3.mp3",
    "assets/audio/b11_10_sec4.mp3",
    "assets/audio/b11_10_wrapup.mp3"
]

print("1. Updating KNOWN_AUDIO_DURATIONS in js/script.js...")
with open('js/script.js', 'r', encoding='utf-8') as f:
    js_text = f.read()

m_dur = re.search(r'const KNOWN_AUDIO_DURATIONS = \{([\s\S]*?)\};', js_text)
if m_dur:
    old_block = m_dur.group(0)
    new_entries = []
    for a in all_audios:
        dur = get_mp3_duration(a)
        if a not in old_block:
            new_entries.append(f'      "{a}": {dur},')
    if new_entries:
        insert_pos = js_text.find('const KNOWN_AUDIO_DURATIONS = {') + len('const KNOWN_AUDIO_DURATIONS = {\n')
        js_text = js_text[:insert_pos] + "\n".join(new_entries) + "\n" + js_text[insert_pos:]
        with open('js/script.js', 'w', encoding='utf-8') as f:
            f.write(js_text)
        print(f"Added {len(new_entries)} duration entries to script.js!")

print("\n2. Syncing all files to BAN_CAP_NHAT_NETLIFY/...")
subprocess.run(['scripts/py/python.exe', 'scripts/sync_to_netlify.py'])

print("\n3. Testing via Headless Chrome CDP...")
cmd = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--disable-gpu",
    "--remote-allow-origins=*",
    "--remote-debugging-port=9228",
    "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c4-b10"
]
proc = subprocess.Popen(cmd)
time.sleep(3)

try:
    req = urllib.request.urlopen("http://localhost:9228/json")
    tabs = json.loads(req.read().decode())
    page_tab = [t for t in tabs if t.get('type') == 'page'][0]
    ws_url = page_tab['webSocketDebuggerUrl']
    path = ws_url.split(':9228')[1]

    s = socket.socket()
    s.connect(('localhost', 9228))
    handshake = (
        f"GET {path} HTTP/1.1\r\n"
        "Host: localhost:9228\r\n"
        "Upgrade: websocket\r\n"
        "Connection: Upgrade\r\n"
        "Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\n"
        "Sec-WebSocket-Version: 13\r\n"
        "Origin: http://localhost:9228\r\n\r\n"
    )
    s.sendall(handshake.encode())
    res = s.recv(4096)

    def evaluate(expr):
        payload = json.dumps({"id": 1, "method": "Runtime.evaluate", "params": {"expression": expr, "awaitPromise": True, "returnByValue": True}}).encode('utf-8')
        length = len(payload)
        header = bytearray([0x81])
        if length <= 125:
            header.append(0x80 | length)
        elif length <= 65535:
            header.append(0x80 | 126)
            header.extend(struct.pack("!H", length))
        header.extend(b"\x00\x00\x00\x00")
        s.sendall(header + payload)
        raw = bytearray()
        while True:
            chunk = s.recv(65536)
            if not chunk: break
            raw.extend(chunk)
            if b'"result"' in raw: break
        p_len = raw[1] & 0x7F
        offset = 2
        if p_len == 126: offset = 4
        elif p_len == 127: offset = 10
        data = raw[offset:].decode('utf-8', errors='ignore')
        return json.loads(data)

    test_expr = """(() => {
        // Reset progress
        localStorage.removeItem('ths_sang_completed_steps_11-c4-b10');
        
        const title = document.querySelector('.structure-lesson-title')?.textContent.trim();
        const secLabels = Array.from(document.querySelectorAll('.tree-node .tree-item-label')).map(el => el.textContent.trim());
        const subItems = Array.from(document.querySelectorAll('.tree-sub-item')).map(el => {
            const letter = el.querySelector('.tree-sub-letter')?.textContent.trim();
            const title = el.querySelector('.tree-sub-title')?.textContent.trim();
            const parent = el.dataset.stepId;
            const subKey = el.dataset.subkey;
            return { parent, subKey, letter, title };
        });

        // Test tick hierarchy logic on Section 1
        window.markStepCompleted('sec-1', 'a');
        const sub1a_done = document.querySelector('.tree-sub-item[data-sub-step-id="sec-1-a"] .fa-circle-check') !== null;
        const parentSec1_done = document.querySelector('.tree-node[data-step-id="sec-1"] .fa-circle-check') !== null;

        window.markStepCompleted('sec-1', 'b');
        const sub1b_done = document.querySelector('.tree-sub-item[data-sub-step-id="sec-1-b"] .fa-circle-check') !== null;
        const parentSec1_done_after = document.querySelector('.tree-node[data-step-id="sec-1"] .fa-circle-check') !== null;

        // Check Part 1 Multiple Choice Answers
        const flatList = window.getFlatLessonsList ? window.getFlatLessonsList('11') : [];
        const currentItem = flatList.find(item => item.lesson.id === '11-c4-b10');
        const lesson = currentItem ? currentItem.lesson : null;
        const mcAnswers = lesson && lesson.examFormatPractice ? lesson.examFormatPractice.part1MultipleChoice.map(q => ({ id: q.id, correctIndex: q.correctIndex, correctLetter: ['A','B','C','D'][q.correctIndex] })) : [];

        // Check SVGs
        const svgCount = document.querySelectorAll('.lesson-detail-viewer svg').length;

        return {
            title,
            secLabels,
            subItemsCount: subItems.length,
            sampleSubItems: subItems.slice(0, 4),
            hierarchyTickTest: {
                sub1a_done,
                parentSec1_done_initial: parentSec1_done, // MUST BE FALSE
                sub1b_done,
                parentSec1_done_after_both: parentSec1_done_after // MUST BE TRUE
            },
            mcAnswers,
            svgCount
        };
    })()"""
    result = evaluate(test_expr)
    print("CHROME VERIFICATION RESULTS:")
    print(json.dumps(result, ensure_ascii=False, indent=2))
finally:
    proc.terminate()
