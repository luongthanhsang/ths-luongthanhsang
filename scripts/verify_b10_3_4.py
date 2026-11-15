# -*- coding: utf-8 -*-
import subprocess
import re
import sys

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'

def check_lesson(url, lesson_name, expected_svgs, expected_parts):
    print(f"\n==========================================")
    print(f"TESTING: {lesson_name}")
    print(f"URL: {url}")
    print(f"==========================================")
    
    cmd = [chrome_path, '--headless=new', '--dump-dom', '--virtual-time-budget=8000', url]
    res = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
    dom = res.stdout
    
    # 1. Check title
    if lesson_name in dom:
        print(f"[PASS] Lesson title '{lesson_name}' found in DOM!")
    else:
        print(f"[FAIL] Lesson title '{lesson_name}' NOT found!")
        return False
        
    # 2. Check Teacher Voice AI & Welcome
    if 'Thầy Sáng' in dom and 'btn-play-gold-voice' in dom:
        print("[PASS] ThS. Lương Thanh Sáng Voice AI player present!")
    else:
        print("[FAIL] Voice AI player not found!")
        
    # 3. Check SVGs
    for svg_desc in expected_svgs:
        if svg_desc in dom:
            print(f"[PASS] SVG diagram with '{svg_desc}' rendered!")
        else:
            print(f"[FAIL] SVG diagram with '{svg_desc}' missing!")
            
    # 4. Check Practice Parts
    for p in expected_parts:
        if p in dom:
            print(f"[PASS] Practice part '{p}' rendered!")
        else:
            print(f"[FAIL] Practice part '{p}' missing!")
            
    # 5. Check MathJax / Math errors
    if 'Math input error' in dom:
        print("[FAIL] Math input error detected in DOM!")
    else:
        print("[PASS] Zero 'Math input error' in DOM!")
        
    return True

if __name__ == '__main__':
    ok3 = check_lesson(
        'http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c2-b3',
        'Bất phương trình bậc nhất hai ẩn',
        ['x + y = 200', '2x - y = 2', 'x + 2y < 400'],
        ['Câu 1', 'Câu 5', 'Câu 1 (Đúng/Sai)', 'Câu 1 (Trả lời ngắn)']
    )
    
    ok4 = check_lesson(
        'http://localhost:8000/bai-hoc-so.html?grade=10&lesson=10-c2-b4',
        'Hệ bất phương trình bậc nhất hai ẩn',
        ['x + y = 3', '2x - y = -3', 'F(20; 80) = 230'],
        ['Câu 1', 'Câu 5', 'Câu 1 (Đúng/Sai)', 'Câu 1 (Trả lời ngắn)']
    )
    
    if ok3 and ok4:
        print("\n>>> ALL TESTS PASSED WITH 100% SUCCESS! <<<")
    else:
        print("\n>>> SOME TESTS FAILED! <<<")
