# -*- coding: utf-8 -*-
import subprocess, time, json, urllib.request, base64, os

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
PORT = 9222
URL = "http://localhost:8000/bai-hoc-so.html?grade=11&lesson=11-c1-b1"
ARTIFACT_DIR = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"

def start_chrome():
    cmd = [
        CHROME_PATH,
        f"--remote-debugging-port={PORT}",
        "--headless=new",
        "--disable-gpu",
        "--window-size=1280,1024",
        "--user-data-dir=C:/temp/chrome_verify_b11_1",
        URL
    ]
    p = subprocess.Popen(cmd)
    time.sleep(3)
    return p

import websocket

def cdp_call(ws, method, params=None, msg_id=1):
    payload = {"id": msg_id, "method": method, "params": params or {}}
    ws.send(json.dumps(payload))
    while True:
        resp = json.loads(ws.recv())
        if resp.get("id") == msg_id:
            return resp.get("result", {})

def main():
    chrome_proc = start_chrome()
    try:
        # Lấy webSocketDebuggerUrl
        resp = urllib.request.urlopen(f"http://localhost:{PORT}/json").read().decode("utf-8")
        tabs = json.loads(resp)
        page_tab = [t for t in tabs if t.get("type") == "page"][0]
        ws_url = page_tab["webSocketDebuggerUrl"]
        
        ws = websocket.create_connection(ws_url, timeout=15)
        print("Connected to Chrome CDP WebSocket!")

        # Chờ 4s để MathJax và trang render đầy đủ
        time.sleep(4)

        # Chụp toàn màn hình lúc khởi tạo
        res = cdp_call(ws, "Page.captureScreenshot", {"format": "png"}, msg_id=10)
        img_data = base64.b64decode(res["data"])
        out_init = os.path.join(ARTIFACT_DIR, "verified_b11_1_fixed_init.png")
        with open(out_init, "wb") as f:
            f.write(img_data)
        print("Captured:", out_init)

        # 1. Chuyển sang Mục tiêu (goals)
        cdp_call(ws, "Runtime.evaluate", {"expression": "window.activateStep('goals');"}, msg_id=20)
        time.sleep(2)
        res = cdp_call(ws, "Page.captureScreenshot", {"format": "png"}, msg_id=21)
        out_goals = os.path.join(ARTIFACT_DIR, "verified_b11_1_goals_math.png")
        with open(out_goals, "wb") as f:
            f.write(base64.b64decode(res["data"]))
        print("Captured Goals:", out_goals)

        # 2. Chuyển sang Tình huống mở đầu (hook - ISS)
        cdp_call(ws, "Runtime.evaluate", {"expression": "window.activateStep('hook');"}, msg_id=30)
        time.sleep(2)
        res = cdp_call(ws, "Page.captureScreenshot", {"format": "png"}, msg_id=31)
        out_hook = os.path.join(ARTIFACT_DIR, "verified_b11_1_hook_iss.png")
        with open(out_hook, "wb") as f:
            f.write(base64.b64decode(res["data"]))
        print("Captured Hook ISS:", out_hook)

        # 3. Chuyển sang Mục 1a (sec1a - 4 sơ đồ xoắn ốc & Luyện tập 1)
        cdp_call(ws, "Runtime.evaluate", {"expression": "window.activateStep('sec-1', 'a');"}, msg_id=40)
        time.sleep(2)
        res = cdp_call(ws, "Page.captureScreenshot", {"format": "png"}, msg_id=41)
        out_sec1a = os.path.join(ARTIFACT_DIR, "verified_b11_1_sec1a_spirals.png")
        with open(out_sec1a, "wb") as f:
            f.write(base64.b64decode(res["data"]))
        print("Captured Sec 1a:", out_sec1a)

        # Cuộn xuống Luyện tập 1 trong mục 1a
        cdp_call(ws, "Runtime.evaluate", {"expression": "window.scrollBy(0, 600);"}, msg_id=45)
        time.sleep(1)
        res = cdp_call(ws, "Page.captureScreenshot", {"format": "png"}, msg_id=46)
        out_lt1 = os.path.join(ARTIFACT_DIR, "verified_b11_1_sec1a_lt1_math.png")
        with open(out_lt1, "wb") as f:
            f.write(base64.b64decode(res["data"]))
        print("Captured LT1 Math:", out_lt1)

        # 4. Chuyển sang Mục 3b (Hình 1.9b góc phần tư III)
        cdp_call(ws, "Runtime.evaluate", {"expression": "window.activateStep('sec-3', 'b');"}, msg_id=50)
        time.sleep(2)
        res = cdp_call(ws, "Page.captureScreenshot", {"format": "png"}, msg_id=51)
        out_sec3b = os.path.join(ARTIFACT_DIR, "verified_b11_1_sec3b_quadrant3.png")
        with open(out_sec3b, "wb") as f:
            f.write(base64.b64decode(res["data"]))
        print("Captured Sec 3b Quadrant III:", out_sec3b)

        # 5. Chuyển sang Mục 4b (Bộ sơ đồ công thức góc đặc biệt)
        cdp_call(ws, "Runtime.evaluate", {"expression": "window.activateStep('sec-4', 'b');"}, msg_id=60)
        time.sleep(2)
        res = cdp_call(ws, "Page.captureScreenshot", {"format": "png"}, msg_id=61)
        out_sec4b = os.path.join(ARTIFACT_DIR, "verified_b11_1_sec4b_formulas.png")
        with open(out_sec4b, "wb") as f:
            f.write(base64.b64decode(res["data"]))
        print("Captured Sec 4b Formulas:", out_sec4b)

        # 6. Kiểm tra việc phát audio không bị lỗi
        test_audio_eval = cdp_call(ws, "Runtime.evaluate", {
            "expression": """(() => {
                const results = {};
                results.hasAudioCache = (typeof window.B11_1_AUDIO_CACHE === 'object' && Object.keys(window.B11_1_AUDIO_CACHE).length >= 12);
                results.welcomeCacheLen = window.B11_1_AUDIO_CACHE ? (window.B11_1_AUDIO_CACHE['assets/audio/b11_1_welcome.mp3'] || '').length : 0;
                results.hookCacheLen = window.B11_1_AUDIO_CACHE ? (window.B11_1_AUDIO_CACHE['assets/audio/b11_1_hook.mp3'] || '').length : 0;
                results.sec1aCacheLen = window.B11_1_AUDIO_CACHE ? (window.B11_1_AUDIO_CACHE['assets/audio/b11_1_sec1a.mp3'] || '').length : 0;
                return JSON.stringify(results);
            })()"""
        }, msg_id=70)
        print("Audio verification results:", test_audio_eval.get("value"))

        ws.close()
    finally:
        chrome_proc.terminate()

if __name__ == "__main__":
    main()
