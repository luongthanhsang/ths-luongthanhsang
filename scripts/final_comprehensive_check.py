# -*- coding: utf-8 -*-
import subprocess
import re

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

def audit_url(url, expected_title, expected_svg_count):
    print(f"\n==========================================")
    print(f"AUDITING: {expected_title}")
    print(f"URL: {url}")
    print(f"==========================================")
    cmd = [chrome_path, '--headless=new', '--incognito', '--dump-dom', '--virtual-time-budget=6000', url]
    res = subprocess.run(cmd, capture_output=True, text=True, timeout=25)
    dom = res.stdout

    # Title check
    title_ok = expected_title in dom
    print(f"1. Title '{expected_title}': {'PASS' if title_ok else 'FAIL'}")

    # Voice AI check
    voice_ok = 'Thầy Sáng' in dom and 'btn-play-gold-voice' in dom
    print(f"2. Voice AI Player: {'PASS' if voice_ok else 'FAIL'}")

    # SVGs count
    svgs = re.findall(r'<svg[^>]*>[\s\S]*?</svg>', dom)
    svg_ok = len(svgs) >= expected_svg_count
    print(f"3. SVG Diagrams (found {len(svgs)}, expected >={expected_svg_count}): {'PASS' if svg_ok else 'FAIL'}")

    # Practice parts
    has_mc = 'prompt-mc-' in dom
    has_tf = 'Cho bất phương trình' in dom or 'Cho hệ bất phương trình' in dom
    has_sa = 'prompt-sa-' in dom
    print(f"4. Practice System:")
    print(f"   - Part 1 (Trắc nghiệm nhiều lựa chọn): {'PASS' if has_mc else 'FAIL'}")
    print(f"   - Part 2 (Trắc nghiệm Đúng/Sai 4 ý): {'PASS' if has_tf else 'FAIL'}")
    print(f"   - Part 3 (Câu hỏi trả lời ngắn): {'PASS' if has_sa else 'FAIL'}")

    # MathJax error check
    math_errors = re.findall(r'data-mjx-error="([^"]+)"', dom)
    print(f"5. MathJax Errors: {len(math_errors)} -> {'PASS (0 errors)' if len(math_errors) == 0 else f'FAIL ({math_errors})'}")

    return title_ok and voice_ok and svg_ok and has_mc and has_tf and has_sa and len(math_errors) == 0

if __name__ == '__main__':
    ok3 = audit_url('http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c2-b3&v=final', 'Bất phương trình bậc nhất hai ẩn', 4)
    ok4 = audit_url('http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c2-b4&v=final', 'Hệ bất phương trình bậc nhất hai ẩn', 2)

    if ok3 and ok4:
        print("\n==========================================")
        print(">>> ALL AUDITS PASSED WITH 100% SUCCESS! <<<")
        print("==========================================")
    else:
        print("\n>>> AUDITS FAILED! <<<")
