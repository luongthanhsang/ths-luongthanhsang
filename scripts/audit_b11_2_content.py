# -*- coding: utf-8 -*-
with open('scripts/build_lesson_11_2_full.py', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect the sections in build_lesson_11_2_full.py
import re

sections = re.findall(r'\{\s*id:\s*"11-c1-b2-s(\d+)"(.*?)(?=\{\s*id:\s*"11-c1-b2-s|\Z)', text, re.DOTALL)
print(f"Found {len(sections)} sections")

for sec_num, sec_content in sections:
    print(f"\n================ SECTION {sec_num} ================")
    subsecs = re.findall(r'\{\s*key:\s*"([a-z])"(.*?)(?=\{\s*key:\s*"[a-z]"|\Z)', sec_content, re.DOTALL)
    print(f"Found {len(subsecs)} subsections")
    for sub_key, sub_content in subsecs:
        pois = re.findall(r'id:\s*"([^"]+)"', sub_content)
        has_alert_success = 'alert-success' in sub_content
        has_alert_info = 'alert-info' in sub_content
        has_audio = 'audioUrl:' in sub_content
        print(f"  Subsection {sec_num}{sub_key}:")
        print(f"    - POIs: {pois}")
        print(f"    - alert-success (Ví dụ mẫu): {has_alert_success}")
        print(f"    - alert-info (Luyện tập): {has_alert_info}")
        print(f"    - has audioUrl: {has_audio}")
