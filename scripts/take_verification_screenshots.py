# -*- coding: utf-8 -*-
import subprocess, os, time

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
artifact_dir = r"C:\Users\Hp\.gemini\antigravity\brain\11f82038-0c61-4794-81cd-02e242f3fac9"

# 1. Chụp index.html (Card Thầy Sáng)
shot_card = os.path.join(artifact_dir, "test_teacher_card_highlight.png")
cmd1 = [
    chrome_path, "--headless=new", "--disable-gpu", 
    "--window-size=1280,900", 
    f"--screenshot={shot_card}", 
    "http://localhost:8000/index.html"
]
subprocess.run(cmd1)

# 2. Chụp lien-he.html (Khung Chat AI & Nút +)
shot_chat = os.path.join(artifact_dir, "test_ai_chat_full.png")
cmd2 = [
    chrome_path, "--headless=new", "--disable-gpu", 
    "--window-size=1366,1050", 
    f"--screenshot={shot_chat}", 
    "http://localhost:8000/lien-he.html"
]
subprocess.run(cmd2)

print("Card screenshot:", os.path.exists(shot_card), "size:", os.path.getsize(shot_card) if os.path.exists(shot_card) else 0)
print("Chat screenshot:", os.path.exists(shot_chat), "size:", os.path.getsize(shot_chat) if os.path.exists(shot_chat) else 0)
