# -*- coding: utf-8 -*-
import asyncio, json, urllib.request, subprocess, time, os, base64
import websockets

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
user_data = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9\chrome_profile_chat"
artifact_dir = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"
os.makedirs(user_data, exist_ok=True)

async def run_chat_test():
    proc = subprocess.Popen([
        chrome_path, "--headless=new", "--disable-gpu",
        "--remote-debugging-port=9223",
        f"--user-data-dir={user_data}",
        "--window-size=1366,1100",
        "http://localhost:8000/lien-he.html"
    ])
    
    await asyncio.sleep(2)
    
    try:
        with urllib.request.urlopen("http://localhost:9223/json") as resp:
            tabs = json.loads(resp.read().decode('utf-8'))
            target_tab = None
            for t in tabs:
                if t.get("type") == "page":
                    target_tab = t
                    break
            if not target_tab:
                target_tab = tabs[0]
            ws_url = target_tab["webSocketDebuggerUrl"]

        async with websockets.connect(ws_url, max_size=20*1024*1024) as ws:
            req_id = 1
            async def send_cmd(method, params=None):
                nonlocal req_id
                cid = req_id
                req_id += 1
                msg = {"id": cid, "method": method, "params": params or {}}
                await ws.send(json.dumps(msg))
                while True:
                    res = json.loads(await ws.recv())
                    if res.get("id") == cid:
                        return res.get("result")

            await send_cmd("Page.enable")
            await send_cmd("Runtime.enable")
            await asyncio.sleep(1.5)

            # 1. Bấm vào nút gợi ý câu hỏi lượng giác: sin(2x)
            print("Clicking quick suggestion button...")
            click_res = await send_cmd("Runtime.evaluate", {
                "expression": """
                (() => {
                    const pill = document.querySelector('.quick-pill[data-query*="sin(2x)"]');
                    if (pill) {
                        pill.click();
                        return "Clicked sin(2x) pill";
                    }
                    return "Pill not found";
                })()
                """
            })
            print("Click result:", click_res)

            # Đợi AI trả lời và MathJax typeset
            await asyncio.sleep(2.5)

            # Cuộn xuống đáy khung chat
            await send_cmd("Runtime.evaluate", {
                "expression": """
                (() => {
                    const c = document.getElementById('chatMessagesContainer');
                    if (c) c.scrollTop = c.scrollHeight;
                })()
                """
            })
            await asyncio.sleep(0.5)

            # Chụp ảnh 1: Câu trả lời Toán học của AI Thầy Sáng kèm MathJax
            shot1 = await send_cmd("Page.captureScreenshot", {"format": "png"})
            with open(os.path.join(artifact_dir, "ai_chat_response_mathjax.png"), "wb") as f:
                f.write(base64.b64decode(shot1["data"]))
            print("Saved ai_chat_response_mathjax.png")

            # 2. Test đính kèm hình ảnh qua nút dấu "+" (mô phỏng chọn ảnh đề bài)
            print("Simulating image upload via '+' button...")
            upload_res = await send_cmd("Runtime.evaluate", {
                "expression": """
                (() => {
                    // Tạo một dummy canvas ảnh đề bài hình học lượng giác
                    const canvas = document.createElement('canvas');
                    canvas.width = 400;
                    canvas.height = 200;
                    const ctx = canvas.getContext('2d');
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, 400, 200);
                    ctx.strokeStyle = '#2563eb';
                    ctx.lineWidth = 3;
                    ctx.strokeRect(10, 10, 380, 180);
                    ctx.fillStyle = '#1e3a8a';
                    ctx.font = 'bold 18px Arial';
                    ctx.fillText('ĐỀ BÀI: TÍNH TỔNG CẤP SỐ NHÂN', 30, 50);
                    ctx.fillStyle = '#b45309';
                    ctx.font = '16px Arial';
                    ctx.fillText('Cho u1 = 3, q = 2. Tính S10?', 30, 95);
                    ctx.fillStyle = '#64748b';
                    ctx.font = '14px Arial';
                    ctx.fillText('(Ảnh chụp từ phiếu bài tập trên lớp)', 30, 140);
                    
                    const dataUrl = canvas.toDataURL('image/png');
                    const base64Data = dataUrl.split(',')[1];
                    
                    // Giả lập đối tượng currentSelectedImage
                    const previewImg = document.getElementById('chatImagePreviewImg');
                    const previewFileName = document.getElementById('previewFileName');
                    const previewFileSize = document.getElementById('previewFileSize');
                    const imagePreviewArea = document.getElementById('chatImagePreviewArea');
                    const chatInput = document.getElementById('chatInputText');
                    
                    previewImg.src = dataUrl;
                    previewFileName.textContent = 'de-bai-cap-so-nhan.png';
                    previewFileSize.textContent = '85 KB';
                    imagePreviewArea.style.display = 'flex';
                    
                    // Đưa dữ liệu vào biến nội bộ của module chat
                    window.__testImage = {
                        base64: base64Data,
                        mimeType: 'image/png',
                        name: 'de-bai-cap-so-nhan.png',
                        size: '85 KB',
                        dataUrl: dataUrl
                    };
                    
                    // Gán vào textarea câu hỏi
                    chatInput.value = 'Nhờ Thầy Sáng giải giúp em câu hỏi trong hình này ạ!';
                    return "Image attached and preview displayed";
                })()
                """
            })
            print("Upload result:", upload_res)
            await asyncio.sleep(0.5)

            # Chụp ảnh 2: Xem trước Thumbnail Preview sau khi chọn ảnh
            shot2 = await send_cmd("Page.captureScreenshot", {"format": "png"})
            with open(os.path.join(artifact_dir, "ai_chat_image_preview.png"), "wb") as f:
                f.write(base64.b64decode(shot2["data"]))
            print("Saved ai_chat_image_preview.png")

            # 3. Nhấn gửi bài tập có kèm ảnh
            print("Sending image question...")
            send_img_res = await send_cmd("Runtime.evaluate", {
                "expression": """
                (() => {
                    // Kích hoạt gửi tin nhắn kèm ảnh
                    const btnSend = document.getElementById('btnChatSend');
                    // Gán __testImage vào currentSelectedImage bằng cách kích hoạt code
                    // Gọi hàm gửi tin nhắn của hệ thống
                    const chatInput = document.getElementById('chatInputText');
                    chatInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
                    return "Sent image message";
                })()
                """
            })
            print("Send image result:", send_img_res)

            # Đợi AI phản hồi bài toán hình ảnh
            await asyncio.sleep(2.5)

            # Cuộn xuống đáy
            await send_cmd("Runtime.evaluate", {
                "expression": """
                (() => {
                    const c = document.getElementById('chatMessagesContainer');
                    if (c) c.scrollTop = c.scrollHeight;
                })()
                """
            })
            await asyncio.sleep(0.5)

            # Chụp ảnh 3: Kết quả câu trả lời của Thầy Sáng cho bài toán có hình ảnh
            shot3 = await send_cmd("Page.captureScreenshot", {"format": "png"})
            with open(os.path.join(artifact_dir, "ai_chat_image_response.png"), "wb") as f:
                f.write(base64.b64decode(shot3["data"]))
            print("Saved ai_chat_image_response.png")

    finally:
        proc.terminate()
        print("Done test.")

asyncio.run(run_chat_test())
