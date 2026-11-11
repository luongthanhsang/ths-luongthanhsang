"""
deploy_vercel.py
Tự động đóng gói và triển khai website ThS. Lương Thanh Sáng lên Vercel qua Vercel REST API v13.
"""

import os
import sys
import json
import base64
import urllib.request
import urllib.error

PROJECT_NAME = "thpt-luongthanhsang"

# Các tệp tĩnh cần triển khai
DEPLOY_FILES = [
    "index.html",
    "vercel.json",
    "package.json",
    "css/styles.css",
    "js/document-data.js",
    "js/quiz-data.js",
    "js/script.js"
]

def load_files():
    files_payload = []
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    for rel_path in DEPLOY_FILES:
        full_path = os.path.join(base_dir, rel_path)
        if not os.path.exists(full_path):
            print(f"Warning: File not found: {rel_path}")
            continue
        
        try:
            with open(full_path, "r", encoding="utf-8") as f:
                content = f.read()
            files_payload.append({
                "file": rel_path.replace("\\", "/"),
                "data": content
            })
        except UnicodeDecodeError:
            with open(full_path, "rb") as f:
                raw_bytes = f.read()
            files_payload.append({
                "file": rel_path.replace("\\", "/"),
                "data": base64.b64encode(raw_bytes).decode("ascii"),
                "encoding": "base64"
            })
    return files_payload

def deploy(token, team_id=None):
    if not token:
        print("ERROR: VERCEL_TOKEN is required.")
        return None

    files_payload = load_files()
    print(f"[*] Đã đóng gói {len(files_payload)} tệp tin cho dự án: {PROJECT_NAME}")

    payload = {
        "name": PROJECT_NAME,
        "files": files_payload,
        "projectSettings": {
            "framework": None
        },
        "target": "production"
    }

    url = "https://api.vercel.com/v13/deployments"
    if team_id:
        url += f"?teamId={team_id}"

    data = json.dumps(payload).encode("utf-8")
    headers = {
        "Authorization": f"Bearer {token.strip()}",
        "Content-Type": "application/json"
    }

    req = urllib.request.Request(url, data=data, headers=headers, method="POST")

    print("[*] Đang gửi yêu cầu khởi tạo bản triển khai lên Vercel...")
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            deploy_url = result.get("url")
            deploy_id = result.get("id")
            ready_state = result.get("readyState")
            
            full_url = f"https://{deploy_url}"
            print("\n" + "="*60)
            print("🚀 TRIỂN KHAI THÀNH CÔNG LÊN VERCEL!")
            print(f"• Deployment ID: {deploy_id}")
            print(f"• Trạng thái: {ready_state}")
            print(f"• Đường dẫn trực tiếp: {full_url}")
            print("="*60 + "\n")
            return full_url
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode("utf-8", errors="ignore")
        print(f"[-] Lỗi HTTP {e.code}: {err_msg}")
        return None
    except Exception as e:
        print(f"[-] Lỗi kết nối: {e}")
        return None

if __name__ == "__main__":
    token = os.environ.get("VERCEL_TOKEN")
    if len(sys.argv) > 1:
        token = sys.argv[1]
    
    if not token:
        print("Usage: python deploy_vercel.py <VERCEL_TOKEN>")
        print("Or set environment variable: VERCEL_TOKEN=<token>")
        sys.exit(1)
        
    deploy(token)

