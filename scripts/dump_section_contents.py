# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_1_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

import re

def print_section(tag, start_str, end_str):
    s = text.find(start_str)
    if s == -1:
        print(f"[{tag}] NOT FOUND: {start_str}")
        return
    e = text.find(end_str, s)
    if e == -1:
        e = s + 1500
    sub = text[s:e]
    # Clean tags
    plain = re.sub(r'<[^>]+>', ' ', sub)
    plain = re.sub(r'\s+', ' ', plain)
    print(f"=== {tag} ({len(plain)} chars) ===")
    print(plain[:400] + ("..." if len(plain) > 400 else ""))

print_section("SEC1A", 'subsections: [', 'title: "Hệ thức Chasles')
print_section("SEC1B", 'title: "Hệ thức Chasles', 'id: "11-c1-b1-s2"')
print_section("SEC2A", 'id: "11-c1-b1-s2"', 'title: "Độ dài cung tròn')
print_section("SEC2B", 'title: "Độ dài cung tròn', 'id: "11-c1-b1-s3"')
print_section("SEC3A", 'id: "11-c1-b1-s3"', 'title: "Các giá trị lượng giác')
print_section("SEC3B", 'title: "Các giá trị lượng giác', 'id: "11-c1-b1-s4"')
print_section("SEC4A", 'id: "11-c1-b1-s4"', 'title: "Giá trị lượng giác của các góc')
print_section("SEC4B", 'title: "Giá trị lượng giác của các góc', 'wrapup: {{')
print_section("WRAPUP", 'wrapup: {{', 'examFormatPractice: {{')
