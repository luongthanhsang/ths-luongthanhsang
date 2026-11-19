# -*- coding: utf-8 -*-
"""
Kịch bản lời thoại Voice AI Thầy Sáng cho Bài 7 Lớp 11: Cấp số nhân
Bộ sách Kết nối tri thức với cuộc sống - ThS. Lương Thanh Sáng
"""

def get_b11_7_scripts():
    welcome_text = (
        "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! "
        "Chào mừng các em đến với Bài 7: Cấp số nhân. "
        "Nếu như ở bài học trước, chúng ta đã cùng nhau khám phá quy luật cộng dồn thẳng tắp của Cấp số cộng, "
        "thì Cấp số nhân lại mang đến một sức mạnh tăng trưởng bùng nổ phi thường theo hàm số mũ! "
        "Từ hợp đồng tiền lương tăng trưởng phần trăm của một kỹ sư công nghệ thông tin, "
        "tốc độ phân chia nhân đôi chóng mặt của quần thể tế bào và vi khuẩn, "
        "cho đến câu chuyện huyền thoại về phần thưởng hạt thóc trên bàn cờ vua làm kinh ngạc cả một đế chế - "
        "tất cả đều tuân theo quy luật tuyệt đẹp của Cấp số nhân. "
        "Nắm chắc bài học này, các em sẽ làm chủ định nghĩa, công bội quy nạp, công thức số hạng tổng quát "
        "và tuyệt chiêu tính tổng n số hạng đầu để tự tin bứt phá điểm số cao trong các kì thi. "
        "Nào, thầy trò chúng ta hãy cùng nhau bắt đầu bài học tràn đầy năng lượng nhé!"
    )

    goals_script = (
        "Phần 2. Mục tiêu và yêu cầu cần đạt Bài 7: Cấp số nhân. "
        "Sau bài học này, các em cần làm chủ 4 mục tiêu trọng tâm: "
        "Thứ nhất, nhận biết chuẩn xác một dãy số là cấp số nhân và xác định công bội q. "
        "Thứ hai, hiểu bản chất và vận dụng thành thạo công thức số hạng tổng quát u n bằng u 1 nhân q mũ n trừ 1. "
        "Thứ ba, tính chuẩn xác tổng của n số hạng đầu của cấp số nhân với công bội q khác 1. "
        "Thứ tư, giải quyết linh hoạt các bài toán thực tiễn gắn với tăng trưởng kinh tế, tài chính và tự nhiên."
    )

    hook_script = (
        "Tình huống mở đầu. Bài toán hợp đồng tiền lương của chuyên gia công nghệ thông tin. "
        "Một công ty công nghệ tuyển dụng chuyên gia với mức lương năm đầu tiên là 240 triệu đồng "
        "và cam kết sẽ tăng thêm 5% lương mỗi năm so với năm liền trước đó. "
        "Hỏi sau 10 năm cống hiến cho công ty, tổng số tiền lương mà vị chuyên gia đó nhận được là bao nhiêu? "
        "Liệu quy luật tăng trưởng phần trăm này có gì khác biệt so với việc tăng một số tiền cố định mỗi năm?"
    )

    sec1a_script = (
        "Mục 1. Định nghĩa cấp số nhân. Tiểu mục a: Định nghĩa và Khái niệm công bội q. "
        "Cấp số nhân là một dãy số mà kể từ số hạng thứ hai, mỗi số hạng đều bằng tích của số hạng đứng ngay trước nó với một số không đổi q. "
        "Số q được gọi là công bội của cấp số nhân. "
        "Hệ thức truy hồi là: u n bằng u n trừ 1 nhân q với mọi n lớn hơn hoặc bằng 2. "
        "Đặc biệt, nếu công bội q lớn hơn 0, các số hạng cùng dấu; nếu q nhỏ hơn 0, cấp số nhân là một dãy số đan dấu xen kẽ âm dương."
    )

    sec1b_script = (
        "Tiểu mục b: Phương pháp chứng minh một dãy số là cấp số nhân. "
        "Để chứng minh dãy số u n gồm các số khác 0 là một cấp số nhân, "
        "ta xét tỉ số giữa hai số hạng liên tiếp: u n chia cho u n trừ 1. "
        "Nếu tỉ số này luôn bằng một hằng số q không đổi và không phụ thuộc vào n, "
        "thì dãy số đã cho chính là một cấp số nhân có công bội q."
    )

    sec2a_script = (
        "Mục 2. Số hạng tổng quát. Tiểu mục a: Công thức số hạng tổng quát của cấp số nhân. "
        "Nếu một cấp số nhân có số hạng đầu u 1 và công bội q, thì số hạng tổng quát u n được tính bằng: "
        "u n bằng u 1 nhân q mũ n trừ 1 với mọi n lớn hơn hoặc bằng 2. "
        "Các em hãy ghi nhớ: số mũ của công bội q luôn luôn nhỏ hơn chỉ số của số hạng đúng 1 đơn vị. "
        "Từ đó, ta có thể tính trực tiếp bất kì số hạng thứ bao nhiêu mà không cần tính tuần tự các số hạng trước nó."
    )

    sec2b_script = (
        "Tiểu mục b: Xác định các yếu tố của cấp số nhân và bài toán thực tế. "
        "Khi biết hai số hạng bất kì, ta biểu diễn chúng theo u 1 và q rồi lập tỉ số để khử u 1, tìm ra công bội q. "
        "Đặc biệt với ba số hạng liên tiếp, bình phương số hạng ở giữa bằng tích của hai số hạng hai bên, "
        "tức là u k bình phương bằng u k trừ 1 nhân u k cộng 1. "
        "Đây cũng chính là nền tảng để giải bài toán tăng trưởng quần thể vi khuẩn hay lãi suất kép trong đời sống."
    )

    sec3a_script = (
        "Mục 3. Tổng n số hạng đầu của một cấp số nhân. Tiểu mục a: Công thức tính tổng S n. "
        "Cho cấp số nhân có công bội q khác 1. Tổng của n số hạng đầu tiên được tính theo công thức: "
        "S n bằng u 1 nhân mở ngoặc 1 trừ q mũ n đóng ngoặc, tất cả chia cho 1 trừ q. "
        "Bằng kĩ thuật nhân sai phân và trừ hai vế, toàn bộ các số hạng ở giữa đều bị triệt tiêu, "
        "đem lại cho chúng ta một công thức rút gọn vô cùng thanh lịch và mạnh mẽ."
    )

    sec3b_script = (
        "Tiểu mục b: Giải bài toán tìm số số hạng và bài toán thực tế. "
        "Vận dụng công thức S n, ta giải quyết trọn vẹn bài toán tính tổng 10 năm lương của chuyên gia công nghệ thông tin "
        "với kết quả xấp xỉ hơn 3 tỷ đồng. "
        "Nếu đề bài cho trước tổng S n và yêu cầu tìm số số hạng n, "
        "ta cô lập lũy thừa q mũ n rồi đưa về giải phương trình mũ cơ bản để tìm ra số tự nhiên n."
    )

    wrapup_script = (
        "Chốt kiến thức then chốt Bài 7: Cấp số nhân. Thầy chúc mừng các em đã hoàn thành xuất sắc tiến trình bài học! "
        "Các em hãy khắc sâu 3 viên ngọc kiến thức: "
        "Thứ nhất, định nghĩa và hệ thức u n bằng u n trừ 1 nhân q. "
        "Thứ hai, công thức số hạng tổng quát u n bằng u 1 nhân q mũ n trừ 1. "
        "Thứ ba, công thức tính tổng S n bằng u 1 nhân mở ngoặc 1 trừ q mũ n đóng ngoặc chia cho 1 trừ q. "
        "Bây giờ, các em hãy cùng Thầy bước vào Phần 4 để tự tin chinh phục bộ đề trắc nghiệm chuẩn cấu trúc mới 2026 nhé!"
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
    scripts = get_b11_7_scripts()
    print("Loaded 10 scripts successfully!")
    for k, v in scripts.items():
        print(f"  {k}: {len(v)} chars")
