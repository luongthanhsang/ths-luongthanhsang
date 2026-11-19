# -*- coding: utf-8 -*-
"""
Tích hợp Bài 7 (Cấp số nhân) vào hệ thống bài học số
ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại
"""

import os, re

def update_html(path):
    with open(path, "r", encoding="utf-8") as f:
        html = f.read()

    # Thêm script tags sau b11-6
    target = '<script src="js/lesson-11-6-data.js?v=20261119_01"></script>'
    replacement = (
        '<script src="js/lesson-11-6-data.js?v=20261119_01"></script>\n'
        '  <script src="js/b11-7-audio-cache.js?v=20261119_01"></script>\n'
        '  <script src="js/lesson-11-7-data.js?v=20261119_01"></script>'
    )
    if "b11-7-audio-cache.js" not in html:
        if target in html:
            html = html.replace(target, replacement)
            print(f"Updated script tags in {path}")
        else:
            print(f"Target not found in {path}")
    else:
        print(f"Already updated in {path}")

    with open(path, "w", encoding="utf-8") as f:
        f.write(html)

def update_lessons_data(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    target = "if (window.LESSON_11_C2_B6_DATA) autoInjectLesson(window.LESSON_11_C2_B6_DATA);"
    replacement = (
        "if (window.LESSON_11_C2_B6_DATA) autoInjectLesson(window.LESSON_11_C2_B6_DATA);\n"
        "  if (window.LESSON_11_C2_B7_DATA) autoInjectLesson(window.LESSON_11_C2_B7_DATA);"
    )
    if "LESSON_11_C2_B7_DATA" not in content:
        if target in content:
            content = content.replace(target, replacement)
            print(f"Injected autoInjectLesson for B7 in {path}")
        else:
            print(f"Target not found in {path}")
    else:
        print(f"Already injected in {path}")

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

def update_script_js(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    target = "(window.B11_6_AUDIO_CACHE && window.B11_6_AUDIO_CACHE[audioUrl]) ||"
    replacement = (
        "(window.B11_7_AUDIO_CACHE && window.B11_7_AUDIO_CACHE[audioUrl]) ||\n"
        "                         (window.B11_6_AUDIO_CACHE && window.B11_6_AUDIO_CACHE[audioUrl]) ||"
    )
    if "B11_7_AUDIO_CACHE" not in content:
        if target in content:
            content = content.replace(target, replacement)
            print(f"Added B11_7_AUDIO_CACHE in {path}")
        else:
            print(f"Target not found in {path}")
    else:
        print(f"Already has B11_7_AUDIO_CACHE in {path}")

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    update_html("bai-hoc-so.html")
    update_html("BAN_CAP_NHAT_NETLIFY/bai-hoc-so.html")
    update_lessons_data("js/lessons-data.js")
    update_lessons_data("BAN_CAP_NHAT_NETLIFY/js/lessons-data.js")
    update_script_js("js/script.js")
    update_script_js("BAN_CAP_NHAT_NETLIFY/js/script.js")
    print("Integration complete!")
