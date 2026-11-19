# -*- coding: utf-8 -*-
"""
Script lắp ráp và xuất file dữ liệu bài học hoàn hảo Bài 6 Lớp 11: Cấp số cộng
Bộ sách Kết nối tri thức với cuộc sống - ThS. Lương Thanh Sáng
"""

import os, sys, json
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from build_b11_6_svgs import (
    SVG_HOOK, SVG_COMMON_DIFF, SVG_STEP_LADDER, SVG_GAUSS_PAIRING, SVG_SALARY_GROWTH
)

def build_lesson_11_6_data():
    # Nội dung lời chào Thầy Sáng
    welcome_text = (
        "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! "
        "Hôm nay thầy trò chúng ta sẽ cùng nhau bước vào Bài 6: Cấp số cộng. "
        "Nếu như ở bài trước, các em đã làm quen với bức tranh tổng quan của Dãy số, "
        "thì Cấp số cộng chính là một trong những quy luật toán học phổ biến và đẹp đẽ nhất trong thực tiễn. "
        "Từ những bậc thang quen thuộc ta bước mỗi ngày, cách bài trí hàng ghế cong trong nhà hát lớn, "
        "cho đến bài toán cộng dồn tiền lương, tiền thưởng và bài toán huyền thoại của cậu bé Gauss lúc 10 tuổi - "
        "tất cả đều vận hành theo quy luật kì diệu của Cấp số cộng! "
        "Nắm chắc bài học này sẽ giúp các em làm chủ định nghĩa, công thức số hạng tổng quát, "
        "và tuyệt chiêu tính tổng n số hạng đầu tiên để tự tin bứt phá điểm số cao trong các kì thi sắp tới. "
        "Nào, các em hãy cùng Thầy mở đầu bài học đầy hứng khởi nhé!"
    )

    goals_script = (
        "Phần 2. Mục tiêu và yêu cầu cần đạt Bài 6: Cấp số cộng. "
        "Sau bài học này, các em cần nắm chắc 4 mục tiêu cốt lõi: "
        "Thứ nhất, nhận biết một dãy số là cấp số cộng và xác định công sai d. "
        "Thứ hai, hiểu và vận dụng thành thạo công thức số hạng tổng quát u n bằng u 1 cộng mở ngoặc n trừ 1 đóng ngoặc nhân d. "
        "Thứ ba, tính chuẩn xác tổng của n số hạng đầu của cấp số cộng. "
        "Thứ tư, vận dụng linh hoạt giải quyết các bài toán thực tiễn gắn với đời sống."
    )

    hook_script = (
        "Tình huống mở đầu. Bài toán xếp ghế trong nhà hát lớn. "
        "Một nhà hát hiện đại có 25 hàng ghế xếp theo hình nan quạt. "
        "Hàng ghế thứ nhất có 16 ghế, hàng thứ hai có 18 ghế, hàng thứ ba có 20 ghế "
        "và cứ tiếp tục theo quy luật đó, tức là hàng sau nhiều hơn hàng liền trước đúng 2 ghế. "
        "Hỏi toàn bộ nhà hát đó có tổng cộng bao nhiêu ghế ngồi cho khán giả?"
    )

    sec1a_script = (
        "Mục 1. Định nghĩa cấp số cộng. Tiểu mục a: Định nghĩa và Khái niệm công sai. "
        "Cấp số cộng là một dãy số mà kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó cộng với một số không đổi d. "
        "Số d gọi là công sai của cấp số cộng. "
        "Hệ thức truy hồi là: u n bằng u n trừ 1 cộng d với n lớn hơn hoặc bằng 2. "
        "Nếu công sai d lớn hơn 0, cấp số cộng là dãy tăng; nếu d nhỏ hơn 0, là dãy giảm; và khi d bằng 0, ta có dãy số không đổi."
    )

    sec1b_script = (
        "Tiểu mục b: Phương pháp chứng minh một dãy số là cấp số cộng. "
        "Để chứng minh dãy số u n là một cấp số cộng, ta xét hiệu hai số hạng liên tiếp: u n trừ u n trừ 1, hoặc u n cộng 1 trừ u n. "
        "Nếu hiệu số này luôn bằng một hằng số d không phụ thuộc vào n, thì dãy số đã cho là cấp số cộng có công sai d."
    )

    sec2a_script = (
        "Mục 2. Số hạng tổng quát. Tiểu mục a: Công thức số hạng tổng quát của cấp số cộng. "
        "Nếu cấp số cộng có số hạng đầu u 1 và công sai d, thì số hạng tổng quát u n được tính theo công thức: "
        "u n bằng u 1 cộng mở ngoặc n trừ 1 đóng ngoặc nhân d. "
        "Công thức này cho phép ta tính trực tiếp bất kì số hạng nào, chẳng hạn số hạng thứ 100 hay thứ 1000 mà không cần tính tuần tự các số hạng trước."
    )

    sec2b_script = (
        "Tiểu mục b: Xác định các yếu tố của cấp số cộng và giải hệ phương trình. "
        "Khi biết hai số hạng bất kì, ta biểu diễn chúng qua u 1 và d để thiết lập hệ hai phương trình bậc nhất hai ẩn. "
        "Giải hệ phương trình này, ta sẽ tìm được số hạng đầu u 1 và công sai d, từ đó xác định trọn vẹn mọi yếu tố của cấp số cộng."
    )

    sec3a_script = (
        "Mục 3. Tổng n số hạng đầu của một cấp số cộng. Tiểu mục a: Công thức tính tổng S n. "
        "Tổng của n số hạng đầu tiên được tính bằng: S n bằng n nhân mở ngoặc u 1 cộng u n đóng ngoặc chia 2. "
        "Thay u n bằng u 1 cộng n trừ 1 nhân d, ta có công thức thứ hai: "
        "S n bằng n chia 2 nhân mở ngoặc 2 u 1 cộng mở ngoặc n trừ 1 đóng ngoặc nhân d đóng ngoặc."
    )

    sec3b_script = (
        "Tiểu mục b: Giải bài toán thực tế và tìm số số hạng. "
        "Vận dụng công thức S n, ta giải quyết nhanh chóng bài toán tổng số ghế nhà hát ở tình huống mở đầu, "
        "hoặc bài toán tính tổng thu nhập của người lao động sau nhiều năm tăng lương định kì. "
        "Nếu đề bài cho trước tổng S n và yêu cầu tìm n, ta đưa về giải phương trình bậc hai ẩn n và chọn nghiệm nguyên dương."
    )

    wrapup_script = (
        "Chốt kiến thức then chốt Bài 6: Cấp số cộng. Thầy chúc mừng các em đã hoàn thành bài học xuất sắc! "
        "Các em hãy ghi nhớ ba trụ cột kiến thức: "
        "Thứ nhất, định nghĩa và hệ thức truy hồi u n cộng 1 bằng u n cộng d. "
        "Thứ hai, công thức số hạng tổng quát u n bằng u 1 cộng n trừ 1 nhân d. "
        "Thứ ba, hai công thức tính tổng n số hạng đầu của cấp số cộng. "
        "Bây giờ, các em hãy cùng Thầy bước vào Phần 4 để tự tin chinh phục bộ đề trắc nghiệm chuẩn cấu trúc mới nhé!"
    )

    return {
        "welcome_text": welcome_text,
        "goals_script": goals_script,
        "hook_script": hook_script,
        "sec1a_script": sec1a_script,
        "sec1b_script": sec1b_script,
        "sec2a_script": sec2a_script,
        "sec2b_script": sec2b_script,
        "sec3a_script": sec3a_script,
        "sec3b_script": sec3b_script,
        "wrapup_script": wrapup_script
    }

if __name__ == "__main__":
    d = build_lesson_11_6_data()
    print("Lesson scripts ready! Length of welcome:", len(d["welcome_text"]))
