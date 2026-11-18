# -*- coding: utf-8 -*-
import os, re, shutil

# 1. Update bai-hoc-so.html
with open("bai-hoc-so.html", "r", encoding="utf-8") as f:
    html = f.read()

tag_to_insert = '''  <script src="js/b11-3-audio-cache.js?v=20261118_01"></script>
  <script src="js/lesson-11-3-data.js?v=20261118_01"></script>'''

if "lesson-11-3-data.js" not in html:
    target = '<script src="js/lesson-11-2-data.js?v=20261116_01"></script>'
    if target in html:
        html = html.replace(target, target + "\n" + tag_to_insert)
        print("Inserted script tags into bai-hoc-so.html!")
    else:
        # try without query param
        html = re.sub(r'(<script\s+src="js/lesson-11-2-data\.js[^"]*"></script>)', r'\1\n' + tag_to_insert, html)
        print("Inserted script tags into bai-hoc-so.html (via regex)!")

    with open("bai-hoc-so.html", "w", encoding="utf-8") as f:
        f.write(html)

# 2. Update js/lessons-data.js
with open("js/lessons-data.js", "r", encoding="utf-8") as f:
    ld = f.read()

# Add autoInjectLesson(window.LESSON_11_C1_B3_DATA);
if "autoInjectLesson(window.LESSON_11_C1_B3_DATA)" not in ld:
    target_inj = "if (window.LESSON_11_C1_B2_DATA) autoInjectLesson(window.LESSON_11_C1_B2_DATA);"
    new_inj = target_inj + "\n  if (window.LESSON_11_C1_B3_DATA) autoInjectLesson(window.LESSON_11_C1_B3_DATA);"
    ld = ld.replace(target_inj, new_inj)
    print("Added autoInjectLesson for LESSON_11_C1_B3_DATA!")

# Update 11-c1-b3 in lessons-data.js to match 6 sections
old_b3_pattern = re.search(r'\{\s*id:\s*"11-c1-b3",[\s\S]*?sections:\s*\[[\s\S]*?\}\s*\]\s*\},', ld)
if old_b3_pattern:
    new_b3_entry = '''{
            id: "11-c1-b3",
            number: "Bài 3",
            title: "Hàm số lượng giác",
            isFeaturedLesson: true,
            isInteractiveDigitalLesson: true,
            sections: [
              {
                id: "11-c1-b3-s1",
                num: "1",
                title: "Định nghĩa các hàm số lượng giác"
              },
              {
                id: "11-c1-b3-s2",
                num: "2",
                title: "Hàm số chẵn, hàm số lẻ, hàm số tuần hoàn",
                subsections: [
                  { key: "a", title: "Hàm số chẵn và hàm số lẻ" },
                  { key: "b", title: "Hàm số tuần hoàn và chu kì" }
                ]
              },
              {
                id: "11-c1-b3-s3",
                num: "3",
                title: "Đồ thị và tính chất của hàm số y = sin x"
              },
              {
                id: "11-c1-b3-s4",
                num: "4",
                title: "Đồ thị và tính chất của hàm số y = cos x"
              },
              {
                id: "11-c1-b3-s5",
                num: "5",
                title: "Đồ thị và tính chất của hàm số y = tan x"
              },
              {
                id: "11-c1-b3-s6",
                num: "6",
                title: "Đồ thị và tính chất của hàm số y = cot x"
              }
            ]
          },'''
    ld = ld[:old_b3_pattern.start()] + new_b3_entry + ld[old_b3_pattern.end():]
    print("Replaced 11-c1-b3 outline in js/lessons-data.js with full 6 sections!")

with open("js/lessons-data.js", "w", encoding="utf-8") as f:
    f.write(ld)

# 3. Update js/script.js
with open("js/script.js", "r", encoding="utf-8") as f:
    sj = f.read()

if "window.LESSON_11_C1_B3_DATA" not in sj:
    target_sj = "window.LESSON_11_C1_B2_DATA,"
    new_sj = target_sj + "\n          window.LESSON_11_C1_B3_DATA,"
    sj = sj.replace(target_sj, new_sj)
    print("Added window.LESSON_11_C1_B3_DATA to script.js!")

with open("js/script.js", "w", encoding="utf-8") as f:
    f.write(sj)

# 4. Synchronize all to BAN_CAP_NHAT_NETLIFY
files_to_sync = [
    ("bai-hoc-so.html", "BAN_CAP_NHAT_NETLIFY/bai-hoc-so.html"),
    ("js/lessons-data.js", "BAN_CAP_NHAT_NETLIFY/js/lessons-data.js"),
    ("js/script.js", "BAN_CAP_NHAT_NETLIFY/js/script.js"),
    ("js/lesson-11-3-data.js", "BAN_CAP_NHAT_NETLIFY/js/lesson-11-3-data.js"),
    ("js/b11-3-audio-cache.js", "BAN_CAP_NHAT_NETLIFY/js/b11-3-audio-cache.js")
]

for src, dst in files_to_sync:
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy2(src, dst)
    print(f"Synced {src} -> {dst}")

print("ALL FILES UPDATED AND SYNCED SUCCESSFULLY!")
