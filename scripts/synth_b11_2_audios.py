# -*- coding: utf-8 -*-
"""
Bộ tạo âm thanh Voice AI Thầy Sáng cho Bài 2. Công thức lượng giác (Lớp 11)
Giọng đọc: vi-VN-NamMinhNeural
Đóng gói trực tiếp Base64 vào js/b11-2-audio-cache.js
"""

import subprocess, os, json, base64, time, shutil

VOICE = "vi-VN-NamMinhNeural"
PYTHON_EXE = os.path.abspath("scripts/py/python.exe")
os.makedirs("assets/audio", exist_ok=True)

AUDIO_TASKS = [
    (
        "assets/audio/b11_2_welcome.mp3",
        "Thầy Sáng thân ái chào tất cả các em học sinh khối mười một thân yêu! Thầy rất vui mừng được tiếp tục đồng hành cùng các em trong bài học tiếp theo của Chương một: Bài hai, Công thức lượng giác. Trong bài một, các em đã làm quen với góc lượng giác và các giá trị lượng giác cơ bản. Sang bài học này, chúng ta sẽ khám phá bốn bộ công thức quyền năng nhất của lượng giác: công thức cộng, công thức nhân đôi, công thức biến đổi tích thành tổng và tổng thành tích. Đây không chỉ là công cụ cốt lõi để biến đổi các biểu thức toán học phức tạp, mà còn là nền tảng giải quyết các bài toán sóng âm, tín hiệu điện thoại di động và dao động điều hòa trong vật lý. Các em hãy chuẩn bị sách vở, tập trung lắng nghe và cùng Thầy chinh phục bài học nhé!"
    ),
    (
        "assets/audio/b11_2_goals.mp3",
        "Phần hai. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần đạt được các yêu cầu trọng tâm theo chương trình mới: Thứ nhất: Nhận biết và mô tả chính xác bốn nhóm công thức lượng giác cơ bản: công thức cộng, công thức nhân đôi và hạ bậc, công thức biến đổi tích thành tổng và biến đổi tổng thành tích. Thứ hai: Vận dụng thành thạo các công thức để tính giá trị lượng giác của các góc đặc biệt không cần dùng máy tính cầm tay, rút gọn biểu thức và chứng minh các đẳng thức lượng giác. Thứ ba: Giải quyết được các bài toán thực tiễn gắn với sóng âm hình sin, thiết bị trễ kỹ thuật số, tín hiệu âm thanh bàn phím cảm ứng D-T-M-F và phương trình dao động điều hòa tổng hợp."
    ),
    (
        "assets/audio/b11_2_hook.mp3",
        "Phần ba. Tiến trình bài học. Tình huống mở đầu. Một thiết bị trễ kĩ thuật số lặp lại tín hiệu đầu vào bằng cách lặp lại tín hiệu đó trong một khoảng thời gian cố định sau khi nhận được tín hiệu. Nếu thiết bị nhận được nốt thuần f 1 của t bằng 5 sin t và phát lại được nốt thuần f 2 của t bằng 5 cos t, thì âm kết hợp là f của t bằng f 1 của t cộng f 2 của t. Làm thế nào để chứng tỏ âm kết hợp là một sóng âm hình sin có dạng k sin của t cộng phi, đồng thời xác định được biên độ âm k và pha ban đầu phi? Để giải quyết bài toán giao thoa sóng âm đầy thú vị này, chúng ta sẽ cùng bước vào tìm hiểu công thức cộng ngay sau đây!"
    ),
    (
        "assets/audio/b11_2_sec1a.mp3",
        "Mục một. Công thức cộng. Tiểu mục a: Công thức cộng đối với Sin và Cô-sin. Cho hai góc a và b. Trên đường tròn lượng giác, ta xét hai vectơ đơn vị O M biểu diễn góc a và O N biểu diễn góc b. Tích vô hướng của O M và O N một mặt bằng độ dài O M nhân độ dài O N nhân cos của góc a trừ b, tức là bằng cos của a trừ b. Mặt khác, tọa độ điểm M là cos a, sin a; tọa độ điểm N là cos b, sin b, nên tích vô hướng bằng cos a cos b cộng sin a sin b. Từ đó ta có công thức nền tảng: cos của a trừ b bằng cos a cos b cộng sin a sin b. Thầy Sáng tặng các em câu thần chú dễ nhớ: Cos thì cos cos sin sin, dấu trừ đổi lại; Sin thì sin cos cos sin, dấu cùng một thể! Nghĩa là: cos của tổng thì thành hiệu, cos của hiệu thì thành tổng. Còn sin của tổng vẫn là tổng, sin của hiệu vẫn là hiệu."
    ),
    (
        "assets/audio/b11_2_sec1b.mp3",
        "Tiểu mục b: Công thức cộng đối với Tang và Vận dụng sóng âm mở đầu. Từ định nghĩa tang bằng sin chia cos, chia cả tử và mẫu cho cos a nhân cos b, ta thu được hai công thức cộng tang: tang của a trừ b bằng tang a trừ tang b chia cho một cộng tang a tang b; tang của a cộng b bằng tang a cộng tang b chia cho một trừ tang a tang b. Quay lại bài toán trễ âm thanh mở đầu: khi sóng âm gốc năm sin t kết hợp với sóng trễ năm cos t, ta áp dụng công thức cộng sin x cộng cos x bằng căn hai sin của x cộng pi trên bốn. Nhân thêm hệ số năm, ta được ngay biên độ âm k bằng năm căn hai xấp xỉ bảy phẩy không bảy, và pha ban đầu phi bằng pi trên bốn ra-đi-an."
    ),
    (
        "assets/audio/b11_2_sec2a.mp3",
        "Mục hai. Công thức nhân đôi và hạ bậc. Tiểu mục a: Công thức nhân đôi cơ bản. Trong các công thức cộng, nếu ta cho góc b bằng góc a, ta sẽ thu được các công thức tính giá trị lượng giác của góc nhân đôi hai a. Thứ nhất: sin hai a bằng hai sin a cos a. Thứ hai: cos hai a có ba dạng biến đổi vô cùng linh hoạt: bằng cos bình a trừ sin bình a, hoặc bằng hai cos bình a trừ một, hoặc bằng một trừ hai sin bình a. Thứ ba: tang hai a bằng hai tang a chia cho một trừ tang bình a. Các em đặc biệt ghi nhớ: cos hai a chính là cầu nối liên kết mật thiết với các công thức hạ bậc cực kì quan trọng."
    ),
    (
        "assets/audio/b11_2_sec2b.mp3",
        "Tiểu mục b: Công thức hạ bậc và kĩ thuật tính góc không đặc biệt. Xuất phát từ hai công thức cos hai a bằng hai cos bình a trừ một và cos hai a bằng một trừ hai sin bình a, ta rút ra công thức hạ bậc: cos bình a bằng một cộng cos hai a chia hai; sin bình a bằng một trừ cos hai a chia hai. Công thức hạ bậc cho phép chúng ta tính chính xác giá trị lượng giác của các góc bằng một nửa góc đặc biệt. Điển hình như Luyện tập hai trong sách giáo khoa: để tính cos của pi trên tám, ta áp dụng cos bình pi trên tám bằng một cộng cos pi trên bốn chia hai, bằng hai cộng căn hai chia bốn. Vì pi trên tám thuộc góc phần tư thứ nhất nên cos dương, ta thu được kết quả căn bậc hai của hai cộng căn hai chia hai."
    ),
    (
        "assets/audio/b11_2_sec3a.mp3",
        "Mục ba. Công thức biến đổi tích thành tổng. Tiểu mục a: Ba công thức cơ bản và quy tắc nhớ. Khi cộng hoặc trừ từng vế các công thức cộng của cosin và sin, ta thiết lập được ba công thức biến đổi tích thành tổng: cos a cos b bằng một phần hai nhân mở ngoặc cos của a trừ b cộng cos của a cộng b; sin a sin b bằng một phần hai nhân mở ngoặc cos của a trừ b trừ cos của a cộng b; và sin a cos b bằng một phần hai nhân mở ngoặc sin của a trừ b cộng sin của a cộng b. Các em hãy chú ý: ở công thức sin a sin b, bên trong dấu ngoặc vuông là dấu trừ giữa cos hiệu và cos tổng, đây là điểm học sinh rất dễ nhầm lẫn dấu."
    ),
    (
        "assets/audio/b11_2_sec3b.mp3",
        "Tiểu mục b: Kĩ thuật rút gọn và chứng minh đẳng thức tích thành tổng. Trong các đề kiểm tra và thi học sinh giỏi, các bài toán rút gọn tích liên hoàn xuất hiện rất phổ biến. Điển hình như bài một chấm mười một trong sách giáo khoa: Chứng minh tích của sin a cộng b nhân sin a trừ b bằng sin bình a trừ sin bình b. Ta chỉ cần áp dụng biến đổi tích thành tổng: sin a cộng b nhân sin a trừ b bằng một phần hai nhân mở ngoặc cos hai b trừ cos hai a đóng ngoặc. Sau đó hạ bậc cos hai b thành một trừ hai sin bình b, và cos hai a thành một trừ hai sin bình a, ta sẽ thu được ngay điều phải chứng minh một cách vô cùng thanh thoát."
    ),
    (
        "assets/audio/b11_2_sec4a.mp3",
        "Mục bốn. Công thức biến đổi tổng thành tích. Tiểu mục a: Bốn công thức cơ bản và bài ca lượng giác. Đặt u bằng a trừ b và v bằng a cộng b, ta suy ra bốn công thức biến đổi tổng thành tích bất hủ. Thầy tặng các em bài ca lượng giác truyền thống cực kì dễ thuộc: Cos cộng cos bằng hai cos cos; Cos trừ cos bằng trừ hai sin sin; Sin cộng sin bằng hai sin cos; Sin trừ sin bằng hai cos sin! Trong bốn công thức này, góc của thừa số thứ nhất luôn là nửa tổng, u cộng v chia hai; góc của thừa số thứ hai luôn là nửa hiệu, u trừ v chia hai."
    ),
    (
        "assets/audio/b11_2_sec4b.mp3",
        "Tiểu mục b: Ứng dụng thực tiễn trong công nghệ âm thanh bàn phím cảm ứng D-T-M-F. Khi các em nhấn một phím số trên điện thoại thông minh, bàn phím sẽ phát ra hai âm thuần đồng thời: một âm có tần số thấp tương ứng với hàng, và một âm có tần số cao tương ứng với cột. Ví dụ khi nhấn phím số 4, tần số thấp là 770 héc và tần số cao là 1209 héc. Phương trình sóng âm kết hợp là y bằng sin của 1540 pi t cộng sin của 2418 pi t. Nhờ công thức tổng thành tích sin cộng sin bằng hai sin cos, vi xử lý chuyển đổi thành dạng hai nhân sin của 1979 pi t nhân cos của 439 pi t, giúp tổng đài nhận diện chính xác phím bấm chỉ trong một phần nghìn giây."
    ),
    (
        "assets/audio/b11_2_wrapup.mp3",
        "Phần tổng kết: Chốt kiến thức then chốt. Thầy Sáng chúc mừng tất cả các em đã xuất sắc hoàn thành bốn nhóm công thức lượng giác đỉnh cao của bài học hôm nay. Bốn bộ công thức: công thức cộng, công thức nhân đôi và hạ bậc, biến đổi tích thành tổng và biến đổi tổng thành tích tạo nên bộ khung xương sống vững chắc cho toàn bộ chương lượng giác. Ở phần cuối, các em hãy cùng áp dụng công thức tổng thành tích để giải bài một chấm mười ba sách giáo khoa: tìm phương trình dao động điều hòa tổng hợp x của t bằng x một cộng x hai. Sau đó, hãy tự tin chinh phục bộ câu hỏi trắc nghiệm củng cố chuẩn ba dạng thức thi mới để nhận điểm mười tuyệt đối từ Thầy nhé!"
    )
]

def synthesize():
    print(f"Synthesizing {len(AUDIO_TASKS)} audios with voice {VOICE} ...")
    for idx, (outfile, script_text) in enumerate(AUDIO_TASKS):
        print(f"[{idx+1}/{len(AUDIO_TASKS)}] Synthesizing {outfile} ...", flush=True)
        temp_txt = f"scratch/b11_2_temp_{idx}.txt"
        os.makedirs("scratch", exist_ok=True)
        with open(temp_txt, "w", encoding="utf-8") as f:
            f.write(script_text)

        cmd = [
            PYTHON_EXE, "-m", "edge_tts",
            "--voice", VOICE,
            "-f", temp_txt,
            "--write-media", outfile
        ]

        ok = False
        for attempt in range(1, 4):
            try:
                res = subprocess.run(cmd, capture_output=True, text=True, timeout=35)
                if os.path.exists(outfile) and os.path.getsize(outfile) > 5000:
                    print(f"  -> SUCCESS: {outfile} ({os.path.getsize(outfile):,} bytes)", flush=True)
                    ok = True
                    break
                else:
                    print(f"  -> Attempt {attempt} failed, stderr: {res.stderr[:200]}", flush=True)
            except Exception as e:
                print(f"  -> Attempt {attempt} error: {e}", flush=True)
            time.sleep(2)

        if os.path.exists(temp_txt):
            os.remove(temp_txt)

        if not ok:
            print(f"[ERROR] Failed to synthesize {outfile}!", flush=True)
        time.sleep(1)

    print("\nPacking Base64 audio cache into js/b11-2-audio-cache.js ...")
    cache = {}
    for outfile, _ in AUDIO_TASKS:
        rel_key = outfile.replace("\\", "/")
        fname = os.path.basename(outfile)
        if os.path.exists(outfile) and os.path.getsize(outfile) > 1000:
            b64 = base64.b64encode(open(outfile, "rb").read()).decode("utf-8")
            data_uri = f"data:audio/mp3;base64,{b64}"
            cache[rel_key] = data_uri
            cache[fname] = data_uri
            print(f"  -> Cached {rel_key} ({os.path.getsize(outfile):,} bytes)")

    out_file = "js/b11-2-audio-cache.js"
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("// Audio Cache Base64 - Bài 2 Lớp 11: Công thức lượng giác\n")
        f.write("// ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại\n")
        f.write("window.B11_2_AUDIO_CACHE = ")
        json.dump(cache, f, ensure_ascii=False)
        f.write(";\n")
        f.write("if (typeof window !== 'undefined') window.AUDIO_CACHE = Object.assign(window.AUDIO_CACHE || {}, window.B11_2_AUDIO_CACHE);\n")

    print(f"Wrote {out_file} ({os.path.getsize(out_file):,} bytes)")

    # Đồng bộ sang BAN_CAP_NHAT_NETLIFY
    netlify_dir = "BAN_CAP_NHAT_NETLIFY/js"
    os.makedirs(netlify_dir, exist_ok=True)
    shutil.copy2(out_file, os.path.join(netlify_dir, "b11-2-audio-cache.js"))
    print(f"Synchronized to BAN_CAP_NHAT_NETLIFY/js/b11-2-audio-cache.js")

if __name__ == "__main__":
    synthesize()
