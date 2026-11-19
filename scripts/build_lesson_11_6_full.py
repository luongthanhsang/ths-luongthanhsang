# -*- coding: utf-8 -*-
"""
Tạo file dữ liệu hoàn chỉnh js/lesson-11-6-data.js
Bộ sách Kết nối tri thức với cuộc sống - ThS. Lương Thanh Sáng
Áp dụng Bộ Quy chuẩn Thầy Sáng 5 Sao
"""

import os, sys, json
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from build_b11_6_svgs import (
    SVG_HOOK, SVG_COMMON_DIFF, SVG_STEP_LADDER, SVG_GAUSS_PAIRING, SVG_SALARY_GROWTH
)

template = r"""// ===========================================================================
// BÀI HỌC SỐ TƯƠNG TÁC HOÀN HẢO - THS. LƯƠNG THANH SÁNG (5 SAO)
// BÀI 6: CẤP SỐ CỘNG - TOÁN 11 KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
// ===========================================================================

window.LESSON_11_C2_B6_DATA = {
  "id": "11-c2-b6",
  "grade": "11",
  "volume": 1,
  "chapterId": "c11-2",
  "chapter": "Chương II. Dãy số. Cấp số cộng và cấp số nhân",
  "title": "Bài 6. Cấp số cộng",
  "badgeText": "BÀI HỌC SỐ LỚP 11",
  "subject": "Toán học 11 - Kết nối tri thức với cuộc sống",
  "duration": "90 phút",
  "author": "ThS. Lương Thanh Sáng",
  "school": "THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang",

  // =======================================================================
  // PHẦN I. LỜI CHÀO CỦA THẦY SÁNG (5% TIẾN TRÌNH)
  // =======================================================================
  "teacherWelcome": {
    "title": "Lời chào truyền cảm hứng từ ThS. Lương Thanh Sáng",
    "audioUrl": "assets/audio/b11_6_welcome.mp3",
    "audioScript": "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Hôm nay thầy trò chúng ta sẽ cùng nhau bước vào Bài 6: Cấp số cộng. Nếu như ở bài trước, các em đã làm quen với bức tranh tổng quan của Dãy số, thì Cấp số cộng chính là một trong những quy luật toán học phổ biến và đẹp đẽ nhất trong thực tiễn. Từ những bậc thang quen thuộc ta bước mỗi ngày, cách bài trí hàng ghế cong trong nhà hát lớn, cho đến bài toán cộng dồn tiền lương, tiền thưởng và bài toán huyền thoại của cậu bé Gauss lúc 10 tuổi - tất cả đều vận hành theo quy luật kì diệu của Cấp số cộng! Nắm chắc bài học này sẽ giúp các em làm chủ định nghĩa, công thức số hạng tổng quát, và tuyệt chiêu tính tổng n số hạng đầu tiên để tự tin bứt phá điểm số cao trong các kì thi sắp tới. Nào, các em hãy cùng Thầy mở đầu bài học đầy hứng khởi nhé!",
    "quote": "Toán học không chỉ là những con số vô hồn, mà là giai điệu hài hòa của các quy luật tự nhiên và đời sống. Cấp số cộng chính là bước đệm vững chắc mở ra cánh cửa tư duy tài chính, tối ưu hóa và logic khoa học hiện đại.",
    "signature": "ThS. Lương Thanh Sáng - GV Toán THPT Nguyễn Văn Thoại"
  },

  // =======================================================================
  // PHẦN II. MỤC TIÊU & YÊU CẦU CẦN ĐẠT (5% TIẾN TRÌNH)
  // =======================================================================
  "learningGoals": {
    "title": "Mục tiêu và Yêu cầu cần đạt (Chuẩn GDPT 2018)",
    "audioUrl": "assets/audio/b11_6_goals.mp3",
    "audioScript": "Phần 2. Mục tiêu và yêu cầu cần đạt Bài 6: Cấp số cộng. Sau bài học này, các em cần nắm chắc 4 mục tiêu cốt lõi: Thứ nhất, nhận biết một dãy số là cấp số cộng và xác định công sai d. Thứ hai, hiểu và vận dụng thành thạo công thức số hạng tổng quát u n bằng u 1 cộng mở ngoặc n trừ 1 đóng ngoặc nhân d. Thứ ba, tính chuẩn xác tổng của n số hạng đầu của cấp số cộng. Thứ tư, vận dụng linh hoạt giải quyết các bài toán thực tiễn gắn với đời sống.",
    "goals": [
      {
        "icon": "fa-solid fa-compass",
        "title": "Nhận biết cấp số cộng",
        "desc": "Nhận biết một dãy số (hữu hạn hay vô hạn) là cấp số cộng và xác định chính xác số hạng đầu $u_1$ cùng công sai $d$."
      },
      {
        "icon": "fa-solid fa-calculator",
        "title": "Số hạng tổng quát",
        "desc": "Hiểu ý nghĩa và vận dụng thuần thục công thức $u_n = u_1 + (n - 1)d$ để tính số hạng bất kì hoặc giải hệ phương trình tìm $u_1, d$."
      },
      {
        "icon": "fa-solid fa-cubes-stacked",
        "title": "Tính tổng n số hạng đầu",
        "desc": "Nắm vững hai công thức tính tổng $S_n = \\dfrac{n(u_1 + u_n)}{2} = \\dfrac{n}{2}[2u_1 + (n - 1)d]$ và phương pháp ghép cặp đối xứng Gauss."
      },
      {
        "icon": "fa-solid fa-briefcase",
        "title": "Ứng dụng thực tiễn",
        "desc": "Vận dụng giải quyết các bài toán thực tế: bài toán hàng ghế nhà hát, tiền lương tích lũy tăng định kì, xếp chồng vật liệu, bài toán kinh tế."
      },
      {
        "icon": "fa-solid fa-award",
        "title": "Chinh phục bài tập thi mới 2026",
        "desc": "Rèn luyện tư duy tự tin làm chủ cả 3 dạng thức đề thi mới: Trắc nghiệm 4 phương án, Đúng/Sai đa ý và Trả lời ngắn."
      }
    ]
  },

  // =======================================================================
  // PHẦN III. TIẾN TRÌNH BÀI HỌC ĐA PHƯƠNG TIỆN TƯƠNG TÁC (70% TIẾN TRÌNH)
  // =======================================================================
  "hook": {
    "title": "Tình huống mở đầu (Bài toán dẫn nhập: Sắp xếp hàng ghế nhà hát)",
    "audioUrl": "assets/audio/b11_6_hook.mp3",
    "audioScript": "Tình huống mở đầu. Bài toán xếp ghế trong nhà hát lớn. Một nhà hát hiện đại có 25 hàng ghế xếp theo hình nan quạt. Hàng ghế thứ nhất có 16 ghế, hàng thứ hai có 18 ghế, hàng thứ ba có 20 ghế và cứ tiếp tục theo quy luật đó, tức là hàng sau nhiều hơn hàng liền trước đúng 2 ghế. Hỏi toàn bộ nhà hát đó có tổng cộng bao nhiêu ghế ngồi cho khán giả?",
    "contentHtml": `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
        <h5 class="fw-bold section-heading-blue mb-2"><i class="fa-solid fa-masks-theater"></i> TÌNH HUỐNG THỰC TẾ: BÀI TOÁN HÀNG GHẾ NHÀ HÁT (SGK TRANG 48)</h5>
        <p class="text-secondary mb-3">Một nhà hát có <b>25 hàng ghế</b> với <b>16 ghế</b> ở hàng thứ nhất, <b>18 ghế</b> ở hàng thứ hai, <b>20 ghế</b> ở hàng thứ ba và cứ tiếp tục theo quy luật đó, tức là hàng sau nhiều hơn hàng liền trước nó <b>2 ghế</b>. Hãy tính tổng số ghế của nhà hát đó.</p>

        <!-- ĐỒ HỌA SVG BÀI TOÁN NHÀ HÁT -->
        <div class="text-center my-3">
          __SVG_HOOK__
        </div>

        <div class="alert alert-info border-start border-4 border-info">
          <h6 class="fw-bold mb-1"><i class="fa-solid fa-lightbulb text-warning"></i> Góc suy ngẫm của Thầy Sáng:</h6>
          <p class="mb-1">• Số ghế ở mỗi hàng tạo thành một dãy số: $u_1 = 16, \\, u_2 = 18, \\, u_3 = 20, \\dots, u_n = u_{n-1} + 2$.</p>
          <p class="mb-0">• Đây chính là mô hình tiêu biểu của một <b>Cấp số cộng</b>! Làm sao để tính tổng số ghế $S_{25} = u_1 + u_2 + \\dots + u_{25}$ nhanh nhất mà không phải bấm máy cộng từng số? Thầy trò chúng ta cùng khám phá ngay sau đây!</p>
        </div>
      </div>`
  },

  "sections": [
    // -----------------------------------------------------------------------
    // MỤC 1. ĐỊNH NGHĨA CẤP SỐ CỘNG
    // -----------------------------------------------------------------------
    {
      "id": "11-c2-b6-s1",
      "num": "1",
      "title": "Định nghĩa cấp số cộng",
      "subsections": [
        // Mục 1a
        {
          "key": "a",
          "title": "Định nghĩa và Khái niệm công sai",
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-white shadow-sm rounded-3">
              <h5 class="fw-bold section-heading-blue mb-3"><i class="fa-solid fa-book-open"></i> 1. ĐỊNH NGHĨA CẤP SỐ CỘNG & CÔNG SAI (SGK TRANG 48)</h5>

              <!-- HĐ1 KHỞI ĐỘNG -->
              <div class="alert alert-primary mb-3">
                <h6 class="fw-bold mb-1"><i class="fa-solid fa-bolt text-warning"></i> HĐ1. Khám phá dãy số tự nhiên lẻ:</h6>
                <p class="mb-1">Cho dãy số $(u_n)$ gồm tất cả các số tự nhiên lẻ xếp theo thứ tự tăng dần: $1, 3, 5, 7, 9, \\dots$</p>
                <p class="mb-1">• Năm số hạng đầu: $u_1 = 1, \\, u_2 = 3, \\, u_3 = 5, \\, u_4 = 7, \\, u_5 = 9$.</p>
                <p class="mb-0">• Nhận xét quy luật: $u_2 = u_1 + 2, \\, u_3 = u_2 + 2, \\, u_4 = u_3 + 2, \\dots \\implies \\mathbf{u_n = u_{n-1} + 2}$.</p>
              </div>

              <!-- HỘP ĐỊNH NGHĨA CHUẨN SGK -->
              <div class="math-func-card border-primary mb-3" style="border-left: 5px solid #2563eb; background: #f0f7ff; padding: 16px; border-radius: 8px;">
                <div class="math-func-title fw-bold text-primary fs-6 mb-2"><i class="fa-solid fa-certificate"></i> ĐỊNH NGHĨA CẤP SỐ CỘNG (SGK TRANG 48)</div>
                <div style="background: #ffffff; border-radius: 8px; padding: 14px 16px; border: 1px solid #bfdbfe; font-size: 0.98rem; color: #1e293b; line-height: 1.7;">
                  <p class="mb-2"><b>Cấp số cộng</b> là một dãy số (hữu hạn hay vô hạn), trong đó kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó cộng với một số không đổi $d$.</p>
                  <p class="mb-2">• Số $d$ được gọi là <b>công sai</b> của cấp số cộng.</p>
                  <p class="mb-0">• Cấp số cộng $(u_n)$ với công sai $d$ được cho bởi hệ thức truy hồi:</p>
                  <div class="text-center my-2">
                    <span class="badge bg-primary fs-6 px-4 py-2">$$u_n = u_{n-1} + d \\quad (n \\ge 2) \\quad \\text{hay} \\quad u_{n+1} = u_n + d \\quad (n \\ge 1)$$</span>
                  </div>
                </div>
              </div>

              <!-- ĐỒ HỌA TRỤC SỐ CÔNG SAI -->
              <div class="text-center my-3">
                __SVG_COMMON_DIFF__
              </div>

              <!-- LƯU Ý SƯ PHẠM CỦA THẦY SÁNG -->
              <div class="card p-3 mb-3 bg-light border-0">
                <h6 class="fw-bold text-danger mb-2"><i class="fa-solid fa-triangle-exclamation"></i> Ba trường hợp đặc biệt của công sai $d$:</h6>
                <div class="table-responsive">
                  <table class="table table-bordered text-center align-middle mb-0 bg-white">
                    <thead class="table-secondary">
                      <tr>
                        <th>Dấu của công sai $d$</th>
                        <th>Tính chất đơn điệu của cấp số cộng</th>
                        <th>Ví dụ minh họa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="fw-bold text-success">$d > 0$</td>
                        <td>Dãy số <b>tăng nghiêm ngặt</b> ($u_{n+1} > u_n$)</td>
                        <td>$2, 5, 8, 11, 14, \\dots$ ($d = 3 > 0$)</td>
                      </tr>
                      <tr>
                        <td class="fw-bold text-danger">$d < 0$</td>
                        <td>Dãy số <b>giảm nghiêm ngặt</b> ($u_{n+1} < u_n$)</td>
                        <td>$10, 5, 0, -5, -10, \\dots$ ($d = -5 < 0$)</td>
                      </tr>
                      <tr>
                        <td class="fw-bold text-primary">$d = 0$</td>
                        <td>Dãy số <b>không đổi (dãy hằng)</b>: $a, a, a, a, \\dots$</td>
                        <td>$7, 7, 7, 7, 7, \\dots$ ($d = 0$)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- VÍ DỤ MẪU 1 -->
              <div class="alert alert-success border-start border-4 border-success mb-3">
                <h6 class="fw-bold text-success mb-2"><i class="fa-solid fa-circle-check"></i> Ví dụ mẫu 1 (SGK trang 48):</h6>
                <p class="mb-1"><b>Đề bài:</b> Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 2$ và công sai $d = 3$. Hãy viết năm số hạng đầu của cấp số cộng này.</p>
                <hr class="my-2">
                <p class="mb-1 text-dark"><b>Lời giải chi tiết của Thầy Sáng:</b></p>
                <p class="mb-1">Áp dụng hệ thức truy hồi $u_n = u_{n-1} + d$ với $u_1 = 2$ và $d = 3$, ta có:</p>
                <p class="mb-1">• $u_1 = 2$</p>
                <p class="mb-1">• $u_2 = u_1 + d = 2 + 3 = 5$</p>
                <p class="mb-1">• $u_3 = u_2 + d = 5 + 3 = 8$</p>
                <p class="mb-1">• $u_4 = u_3 + d = 8 + 3 = 11$</p>
                <p class="mb-0">• $u_5 = u_4 + d = 11 + 3 = 14$</p>
                <p class="mt-2 mb-0 fw-bold text-success">Vậy năm số hạng đầu của cấp số cộng là: $2, 5, 8, 11, 14$.</p>
              </div>

              <!-- BÀI TẬP RÈN LUYỆN 1 -->
              <div class="alert alert-info border-start border-4 border-info mb-0">
                <h6 class="fw-bold text-primary mb-2"><i class="fa-solid fa-pen-to-square"></i> Bài tập rèn luyện 1 (Tương tự):</h6>
                <p class="mb-1"><b>Đề bài:</b> Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = -5$ và công sai $d = 4$. Hãy viết năm số hạng đầu của cấp số cộng này.</p>
                <hr class="my-2">
                <details>
                  <summary class="text-primary fw-bold" style="cursor: pointer;"><i class="fa-solid fa-eye"></i> Nhấn để xem hướng dẫn giải chi tiết</summary>
                  <div class="mt-2 pt-2 border-top">
                    <p class="mb-1">• $u_1 = -5$</p>
                    <p class="mb-1">• $u_2 = -5 + 4 = -1$</p>
                    <p class="mb-1">• $u_3 = -1 + 4 = 3$</p>
                    <p class="mb-1">• $u_4 = 3 + 4 = 7$</p>
                    <p class="mb-0">• $u_5 = 7 + 4 = 11$</p>
                    <p class="mt-1 mb-0 fw-bold text-success">Đáp số: Năm số hạng đầu là $-5, -1, 3, 7, 11$.</p>
                  </div>
                </details>
              </div>
            </div>`,
          "audioUrl": "assets/audio/b11_6_sec1a.mp3",
          "audioScript": "Mục 1. Định nghĩa cấp số cộng. Tiểu mục a: Định nghĩa và Khái niệm công sai. Cấp số cộng là một dãy số mà kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó cộng với một số không đổi d. Số d gọi là công sai của cấp số cộng. Hệ thức truy hồi là: u n bằng u n trừ 1 cộng d với n lớn hơn hoặc bằng 2. Nếu công sai d lớn hơn 0, cấp số cộng là dãy tăng; nếu d nhỏ hơn 0, là dãy giảm; và khi d bằng 0, ta có dãy số không đổi.",
          "pois": [
            {
              "time": 0.35,
              "question": "Trong cấp số cộng (un), hệ thức liên hệ giữa hai số hạng liên tiếp un và un-1 là gì?",
              "options": [
                "un = un-1 + d (n ≥ 2)",
                "un = un-1 · d (n ≥ 2)",
                "un = (un-1)² + d",
                "un = un-1 - d"
              ],
              "correctIndex": 0,
              "explain": "Định nghĩa chuẩn: Kể từ số hạng thứ hai, mỗi số hạng bằng số hạng đứng trước nó cộng với công sai d: un = un-1 + d (n ≥ 2)."
            },
            {
              "time": 0.70,
              "question": "Dãy số không đổi 5, 5, 5, 5,... có phải là một cấp số cộng không? Nếu có thì công sai d bằng bao nhiêu?",
              "options": [
                "Không phải là cấp số cộng",
                "Là cấp số cộng với công sai d = 0",
                "Là cấp số cộng với công sai d = 5",
                "Là cấp số cộng với công sai d = 1"
              ],
              "correctIndex": 1,
              "explain": "Dãy số hằng là cấp số cộng với công sai d = 0 vì un+1 - un = 5 - 5 = 0 với mọi n."
            }
          ]
        },

        // Mục 1b
        {
          "key": "b",
          "title": "Phương pháp chứng minh một dãy số là cấp số cộng",
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-white shadow-sm rounded-3">
              <h5 class="fw-bold section-heading-blue mb-3"><i class="fa-solid fa-wand-magic-sparkles"></i> PHƯƠNG PHÁP CHỨNG MINH DÃY SỐ LÀ CẤP SỐ CỘNG (SGK TRANG 49)</h5>

              <!-- KHUNG PHƯƠNG PHÁP VÀNG -->
              <div class="alert alert-warning border-start border-4 border-warning mb-3">
                <h6 class="fw-bold text-dark mb-2"><i class="fa-solid fa-key text-warning"></i> Phương pháp vàng của Thầy Sáng:</h6>
                <p class="mb-2">Để chứng minh một dãy số $(u_n)$ là một cấp số cộng, ta thực hiện theo 2 bước chuẩn mực:</p>
                <div class="bg-white p-3 rounded border">
                  <p class="mb-1"><b>Bước 1:</b> Lập hiệu số hai số hạng liên tiếp: $u_n - u_{n-1}$ (với $n \\ge 2$) hoặc $u_{n+1} - u_n$ (với $n \\ge 1$).</p>
                  <p class="mb-1"><b>Bước 2:</b> Rút gọn biểu thức hiệu:</p>
                  <p class="mb-1">• Nếu kết quả là một <b>hằng số $d$ không đổi</b> (không còn phụ thuộc vào biến $n$), thì kết luận $(u_n)$ là cấp số cộng với công sai $d$.</p>
                  <p class="mb-0">• Nếu hiệu còn chứa $n$, thì kết luận $(u_n)$ <b>không phải</b> là cấp số cộng.</p>
                </div>
              </div>

              <!-- VÍ DỤ MẪU 2 -->
              <div class="alert alert-success border-start border-4 border-success mb-3">
                <h6 class="fw-bold text-success mb-2"><i class="fa-solid fa-circle-check"></i> Ví dụ mẫu 2 (SGK trang 49):</h6>
                <p class="mb-1"><b>Đề bài:</b> Cho dãy số $(u_n)$ với $u_n = 5n - 1$. Chứng minh rằng $(u_n)$ là một cấp số cộng. Tìm số hạng đầu $u_1$ và công sai $d$ của nó.</p>
                <hr class="my-2">
                <p class="mb-1 text-dark"><b>Lời giải chi tiết của Thầy Sáng:</b></p>
                <p class="mb-1">Với mọi $n \\ge 2$, ta có:</p>
                <p class="mb-1">$$u_{n-1} = 5(n - 1) - 1 = 5n - 5 - 1 = 5n - 6.$$</p>
                <p class="mb-1">Xét hiệu hai số hạng liên tiếp:</p>
                <p class="mb-1">$$u_n - u_{n-1} = (5n - 1) - (5n - 6) = 5n - 1 - 5n + 6 = 5.$$</p>
                <p class="mb-1">Vì hiệu $u_n - u_{n-1} = 5$ là hằng số với mọi $n \\ge 2$, nên $(u_n)$ là một cấp số cộng với:</p>
                <p class="mb-0">• Số hạng đầu: $u_1 = 5 \\cdot 1 - 1 = 4$.<br>• Công sai: $d = 5$.</p>
              </div>

              <!-- BÀI LUYỆN TẬP 1 SGK -->
              <div class="alert alert-info border-start border-4 border-info mb-0">
                <h6 class="fw-bold text-primary mb-2"><i class="fa-solid fa-pen-to-square"></i> Luyện tập 1 (SGK trang 49):</h6>
                <p class="mb-1"><b>Đề bài:</b> Cho dãy số $(u_n)$ với $u_n = -2n + 3$. Chứng minh rằng $(u_n)$ là một cấp số cộng. Xác định số hạng đầu và công sai của cấp số cộng này.</p>
                <hr class="my-2">
                <details>
                  <summary class="text-primary fw-bold" style="cursor: pointer;"><i class="fa-solid fa-eye"></i> Nhấn để xem hướng dẫn giải chi tiết</summary>
                  <div class="mt-2 pt-2 border-top">
                    <p class="mb-1">Với mọi $n \\ge 1$, ta xét hiệu:</p>
                    <p class="mb-1">$$u_{n+1} - u_n = [-2(n + 1) + 3] - (-2n + 3) = -2n - 2 + 3 + 2n - 3 = -2.$$</p>
                    <p class="mb-1">Vì hiệu số là hằng số $-2$ không đổi, nên $(u_n)$ là một cấp số cộng.</p>
                    <p class="mb-0">• Số hạng đầu: $u_1 = -2 \\cdot 1 + 3 = 1$.<br>• Công sai: $d = -2$.</p>
                  </div>
                </details>
              </div>
            </div>`,
          "audioUrl": "assets/audio/b11_6_sec1b.mp3",
          "audioScript": "Tiểu mục b: Phương pháp chứng minh một dãy số là cấp số cộng. Để chứng minh dãy số u n là một cấp số cộng, ta xét hiệu hai số hạng liên tiếp: u n trừ u n trừ 1, hoặc u n cộng 1 trừ u n. Nếu hiệu số này luôn bằng một hằng số d không phụ thuộc vào n, thì dãy số đã cho là cấp số cộng có công sai d.",
          "pois": [
            {
              "time": 0.35,
              "question": "Dãy số un = 3n + 2 có phải là một cấp số cộng không và công sai d bằng bao nhiêu?",
              "options": [
                "Là cấp số cộng với công sai d = 3",
                "Là cấp số cộng với công sai d = 2",
                "Là cấp số cộng với công sai d = 5",
                "Không phải là cấp số cộng"
              ],
              "correctIndex": 0,
              "explain": "Xét hiệu: un+1 - un = [3(n+1) + 2] - (3n + 2) = 3 là hằng số không đổi, do đó là cấp số cộng có d = 3."
            },
            {
              "time": 0.70,
              "question": "Dãy số un = n² + 1 có phải là một cấp số cộng không? Vì sao?",
              "options": [
                "Là cấp số cộng vì các số hạng đều tăng",
                "Không phải cấp số cộng vì un+1 - un = 2n + 1 phụ thuộc vào n",
                "Là cấp số cộng với công sai d = 1",
                "Là cấp số cộng với công sai d = 2"
              ],
              "correctIndex": 1,
              "explain": "Xét hiệu: un+1 - un = [(n+1)² + 1] - (n² + 1) = 2n + 1. Hiệu số này thay đổi theo n, không phải hằng số, do đó dãy số không phải là cấp số cộng."
            }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 2. SỐ HẠNG TỔNG QUÁT CỦA CẤP SỐ CỘNG
    // -----------------------------------------------------------------------
    {
      "id": "11-c2-b6-s2",
      "num": "2",
      "title": "Số hạng tổng quát",
      "subsections": [
        // Mục 2a
        {
          "key": "a",
          "title": "Công thức số hạng tổng quát của cấp số cộng",
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-white shadow-sm rounded-3">
              <h5 class="fw-bold section-heading-blue mb-3"><i class="fa-solid fa-stairs"></i> 2. CÔNG THỨC SỐ HẠNG TỔNG QUÁT (SGK TRANG 49)</h5>

              <!-- HĐ2 KHÁM PHÁ CÔNG THỨC -->
              <div class="alert alert-primary mb-3">
                <h6 class="fw-bold mb-1"><i class="fa-solid fa-magnifying-glass text-warning"></i> HĐ2. Khám phá quy luật số hạng thứ n:</h6>
                <p class="mb-1">Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1$ và công sai $d$. Ta có:</p>
                <p class="mb-1">• $u_2 = u_1 + d$ (1 lần $d$)</p>
                <p class="mb-1">• $u_3 = u_2 + d = (u_1 + d) + d = u_1 + 2d$ (2 lần $d$)</p>
                <p class="mb-1">• $u_4 = u_3 + d = (u_1 + 2d) + d = u_1 + 3d$ (3 lần $d$)</p>
                <p class="mb-0">• Dự đoán số hạng thứ $n$: Để đi từ $u_1$ đến $u_n$, ta cần nhảy $(n - 1)$ bước công sai $d$!</p>
              </div>

              <!-- HỘP ĐỊNH LÝ SỐ HẠNG TỔNG QUÁT -->
              <div class="math-func-card border-danger mb-3" style="border-left: 5px solid #dc2626; background: #fff5f5; padding: 16px; border-radius: 8px;">
                <div class="math-func-title fw-bold text-danger fs-6 mb-2"><i class="fa-solid fa-crown text-warning"></i> ĐỊNH LÝ SỐ HẠNG TỔNG QUÁT (SGK TRANG 49)</div>
                <div style="background: #ffffff; border-radius: 8px; padding: 14px 16px; border: 1px solid #fecaca; font-size: 0.98rem; color: #1e293b; line-height: 1.7;">
                  <p class="mb-2">Nếu cấp số cộng $(u_n)$ có số hạng đầu $u_1$ và công sai $d$ thì số hạng tổng quát $u_n$ của nó được xác định theo công thức:</p>
                  <div class="text-center my-2">
                    <span class="badge bg-danger fs-5 px-4 py-2">$$u_n = u_1 + (n - 1)d \\quad (n \\ge 2)$$</span>
                  </div>
                  <p class="mb-0 text-muted small text-center"><i>(Công thức cũng đúng cho cả trường hợp $n = 1$: $u_1 = u_1 + 0 \\cdot d$).</i></p>
                </div>
              </div>

              <!-- ĐỒ HỌA BẬC THANG SỐ HẠNG TỔNG QUÁT -->
              <div class="text-center my-3">
                __SVG_STEP_LADDER__
              </div>

              <!-- VÍ DỤ MẪU 3 -->
              <div class="alert alert-success border-start border-4 border-success mb-3">
                <h6 class="fw-bold text-success mb-2"><i class="fa-solid fa-circle-check"></i> Ví dụ mẫu 3 (SGK trang 49):</h6>
                <p class="mb-1"><b>Đề bài:</b> Tìm năm số hạng đầu và số hạng thứ 100 của cấp số cộng $(u_n)$: $10, 5, \\dots$</p>
                <hr class="my-2">
                <p class="mb-1 text-dark"><b>Lời giải chi tiết của Thầy Sáng:</b></p>
                <p class="mb-1">• Cấp số cộng có số hạng đầu $u_1 = 10$ và công sai $d = u_2 - u_1 = 5 - 10 = -5$.</p>
                <p class="mb-1">• Do đó năm số hạng đầu là: $10, \\, 5, \\, 0, \\, -5, \\, -10$.</p>
                <p class="mb-1">• Số hạng thứ 100 là:</p>
                <p class="mb-0">$$u_{100} = u_1 + (100 - 1)d = 10 + 99 \\cdot (-5) = 10 - 495 = -485.$$</p>
              </div>

              <!-- BÀI TẬP RÈN LUYỆN -->
              <div class="alert alert-info border-start border-4 border-info mb-0">
                <h6 class="fw-bold text-primary mb-2"><i class="fa-solid fa-pen-to-square"></i> Bài tập rèn luyện (Tương tự):</h6>
                <p class="mb-1"><b>Đề bài:</b> Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = -4$ và công sai $d = 3$. Hãy tìm số hạng thứ 50 của cấp số cộng này.</p>
                <hr class="my-2">
                <details>
                  <summary class="text-primary fw-bold" style="cursor: pointer;"><i class="fa-solid fa-eye"></i> Nhấn để xem hướng dẫn giải chi tiết</summary>
                  <div class="mt-2 pt-2 border-top">
                    <p class="mb-1">Áp dụng công thức số hạng tổng quát với $n = 50$:</p>
                    <p class="mb-1">$$u_{50} = u_1 + (50 - 1)d = -4 + 49 \\cdot 3 = -4 + 147 = 143.$$</p>
                    <p class="mb-0 fw-bold text-success">Đáp số: $u_{50} = 143$.</p>
                  </div>
                </details>
              </div>
            </div>`,
          "audioUrl": "assets/audio/b11_6_sec2a.mp3",
          "audioScript": "Mục 2. Số hạng tổng quát. Tiểu mục a: Công thức số hạng tổng quát của cấp số cộng. Nếu cấp số cộng có số hạng đầu u 1 và công sai d, thì số hạng tổng quát u n được tính theo công thức: u n bằng u 1 cộng mở ngoặc n trừ 1 đóng ngoặc nhân d. Công thức này cho phép ta tính trực tiếp bất kì số hạng nào, chẳng hạn số hạng thứ 100 hay thứ 1000 mà không cần tính tuần tự các số hạng trước.",
          "pois": [
            {
              "time": 0.35,
              "question": "Công thức biểu diễn số hạng thứ 10 (u10) theo số hạng đầu u1 và công sai d là:",
              "options": [
                "u10 = u1 + 9d",
                "u10 = u1 + 10d",
                "u10 = 10u1 + d",
                "u10 = u1 + 11d"
              ],
              "correctIndex": 0,
              "explain": "Áp dụng un = u1 + (n - 1)d với n = 10: u10 = u1 + (10 - 1)d = u1 + 9d."
            },
            {
              "time": 0.70,
              "question": "Một cấp số cộng có u1 = 3 và d = 2. Giá trị của số hạng thứ 15 (u15) là bao nhiêu?",
              "options": [
                "u15 = 33",
                "u15 = 31",
                "u15 = 30",
                "u15 = 29"
              ],
              "correctIndex": 1,
              "explain": "Ta có: u15 = u1 + 14d = 3 + 14 · 2 = 3 + 28 = 31."
            }
          ]
        },

        // Mục 2b
        {
          "key": "b",
          "title": "Xác định các yếu tố của cấp số cộng & Giải hệ phương trình",
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-white shadow-sm rounded-3">
              <h5 class="fw-bold section-heading-blue mb-3"><i class="fa-solid fa-code-fork"></i> XÁC ĐỊNH CÁC YẾU TỐ VÀ GIẢI HỆ CẤP SỐ CỘNG (SGK TRANG 49)</h5>

              <!-- KHỐI TÍNH CHẤT TRUNG BÌNH CỘNG -->
              <div class="alert alert-secondary mb-3">
                <h6 class="fw-bold mb-1"><i class="fa-solid fa-gem text-primary"></i> Tính chất vàng của 3 số hạng liên tiếp (Trung bình cộng):</h6>
                <p class="mb-1">Nếu ba số $a, b, c$ theo thứ tự lập thành một cấp số cộng thì số hạng đứng giữa bằng trung bình cộng của hai số hạng kề bên:</p>
                <div class="text-center my-1">
                  <span class="badge bg-primary fs-6 px-3 py-1">$$b = \\dfrac{a + c}{2} \\iff a + c = 2b$$</span>
                </div>
              </div>

              <!-- VÍ DỤ MẪU 4 -->
              <div class="alert alert-success border-start border-4 border-success mb-3">
                <h6 class="fw-bold text-success mb-2"><i class="fa-solid fa-circle-check"></i> Ví dụ mẫu 4 (SGK trang 49):</h6>
                <p class="mb-1"><b>Đề bài:</b> Số hạng thứ 10 của một cấp số cộng $(u_n)$ bằng 48 và số hạng thứ 18 bằng 88. Tìm số hạng thứ 100 của cấp số cộng đó.</p>
                <hr class="my-2">
                <p class="mb-1 text-dark"><b>Lời giải chi tiết của Thầy Sáng:</b></p>
                <p class="mb-1">Gọi số hạng đầu là $u_1$ và công sai là $d$. Theo công thức số hạng tổng quát, ta có:</p>
                <p class="mb-1">$$\\begin{cases} u_{10} = u_1 + 9d = 48 \\\\ u_{18} = u_1 + 17d = 88 \\end{cases}$$</p>
                <p class="mb-1">Lấy phương trình thứ hai trừ phương trình thứ nhất theo từng vế:</p>
                <p class="mb-1">$$(u_1 + 17d) - (u_1 + 9d) = 88 - 48 \\iff 8d = 40 \\iff d = 5.$$</p>
                <p class="mb-1">Thay $d = 5$ vào phương trình thứ nhất:</p>
                <p class="mb-1">$$u_1 + 9 \\cdot 5 = 48 \\iff u_1 + 45 = 48 \\iff u_1 = 3.$$</p>
                <p class="mb-0">Vậy số hạng thứ 100 của cấp số cộng là:</p>
                <p class="mb-0 fw-bold text-success">$$u_{100} = u_1 + 99d = 3 + 99 \\cdot 5 = 3 + 495 = 498.$$</p>
              </div>

              <!-- LUYỆN TẬP 2 SGK -->
              <div class="alert alert-info border-start border-4 border-info mb-0">
                <h6 class="fw-bold text-primary mb-2"><i class="fa-solid fa-pen-to-square"></i> Luyện tập 2 (SGK trang 49):</h6>
                <p class="mb-1"><b>Đề bài:</b> Cho dãy số $(u_n)$ với $u_n = 4n - 3$. Chứng minh rằng $(u_n)$ là một cấp số cộng. Xác định số hạng đầu $u_1$ và công sai $d$ của cấp số cộng này. Từ đó viết số hạng tổng quát $u_n$ dưới dạng $u_n = u_1 + (n - 1)d$.</p>
                <hr class="my-2">
                <details>
                  <summary class="text-primary fw-bold" style="cursor: pointer;"><i class="fa-solid fa-eye"></i> Nhấn để xem hướng dẫn giải chi tiết</summary>
                  <div class="mt-2 pt-2 border-top">
                    <p class="mb-1">• Ta xét hiệu: $u_{n+1} - u_n = [4(n + 1) - 3] - (4n - 3) = 4$. Do đó $(u_n)$ là cấp số cộng.</p>
                    <p class="mb-1">• Số hạng đầu: $u_1 = 4 \\cdot 1 - 3 = 1$.</p>
                    <p class="mb-1">• Công sai: $d = 4$.</p>
                    <p class="mb-0">• Viết dưới dạng chuẩn: $u_n = 1 + (n - 1) \\cdot 4$.</p>
                  </div>
                </details>
              </div>
            </div>`,
          "audioUrl": "assets/audio/b11_6_sec2b.mp3",
          "audioScript": "Tiểu mục b: Xác định các yếu tố của cấp số cộng và giải hệ phương trình. Khi biết hai số hạng bất kì, ta biểu diễn chúng qua u 1 và d để thiết lập hệ hai phương trình bậc nhất hai ẩn. Giải hệ phương trình này, ta sẽ tìm được số hạng đầu u 1 và công sai d, từ đó xác định trọn vẹn mọi yếu tố của cấp số cộng.",
          "pois": [
            {
              "time": 0.35,
              "question": "Nếu ba số thực a, b, c theo thứ tự lập thành một cấp số cộng thì hệ thức nào sau đây luôn đúng?",
              "options": [
                "b² = a · c",
                "a + c = 2b",
                "a + b = c",
                "2(a + c) = b"
              ],
              "correctIndex": 1,
              "explain": "Tính chất trung bình cộng: Vì b - a = d và c - b = d nên b - a = c - b <=> a + c = 2b."
            },
            {
              "time": 0.70,
              "question": "Một cấp số cộng có u1 = 1 và u3 = 9. Công sai d của cấp số cộng đó bằng bao nhiêu?",
              "options": [
                "d = 8",
                "d = 4",
                "d = 3",
                "d = 5"
              ],
              "correctIndex": 1,
              "explain": "Ta có: u3 = u1 + 2d <=> 9 = 1 + 2d <=> 2d = 8 <=> d = 4."
            }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------------
    // MỤC 3. TỔNG n SỐ HẠNG ĐẦU CỦA MỘT CẤP SỐ CỘNG
    // -----------------------------------------------------------------------
    {
      "id": "11-c2-b6-s3",
      "num": "3",
      "title": "Tổng n số hạng đầu tiên",
      "subsections": [
        // Mục 3a
        {
          "key": "a",
          "title": "Công thức tính tổng n số hạng đầu",
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-white shadow-sm rounded-3">
              <h5 class="fw-bold section-heading-blue mb-3"><i class="fa-solid fa-sigma"></i> 3. CÔNG THỨC TÍNH TỔNG n SỐ HẠNG ĐẦU (SGK TRANG 50)</h5>

              <!-- HĐ3 XÂY DỰNG CÔNG THỨC BẰNG Ý TƯỞNG GAUSS -->
              <div class="alert alert-primary mb-3">
                <h6 class="fw-bold mb-1"><i class="fa-solid fa-shapes text-warning"></i> HĐ3. Ý tưởng ghép đối xứng thiên tài của Gauss:</h6>
                <p class="mb-1">Đặt $S_n = u_1 + u_2 + u_3 + \\dots + u_{n-1} + u_n$. Viết lại theo thứ tự ngược lại:</p>
                <p class="mb-1">$$S_n = u_n + u_{n-1} + \\dots + u_2 + u_1$$</p>
                <p class="mb-1">Cộng vế với vế hai đẳng thức trên, ta thấy từng cặp đối xứng đều có tổng không đổi:</p>
                <p class="mb-1">$$u_1 + u_n = u_2 + u_{n-1} = u_3 + u_{n-2} = \\dots = 2u_1 + (n - 1)d$$</p>
                <p class="mb-0">Do có đúng $n$ cặp như vậy, ta suy ra: $2S_n = n(u_1 + u_n) \\implies \\mathbf{S_n = \\dfrac{n(u_1 + u_n)}{2}}$.</p>
              </div>

              <!-- HỘP HAI CÔNG THỨC TỔNG CHUẨN -->
              <div class="math-func-card border-success mb-3" style="border-left: 5px solid #16a34a; background: #f0fdf4; padding: 16px; border-radius: 8px;">
                <div class="math-func-title fw-bold text-success fs-6 mb-2"><i class="fa-solid fa-calculator"></i> HAI CÔNG THỨC VÀNG TÍNH TỔNG $S_n$ (SGK TRANG 50)</div>
                <div style="background: #ffffff; border-radius: 8px; padding: 14px 16px; border: 1px solid #bbf7d0; font-size: 0.98rem; color: #1e293b; line-height: 1.7;">
                  <p class="mb-2">Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1$ và công sai $d$. Tổng của $n$ số hạng đầu $S_n = u_1 + u_2 + \\dots + u_n$ được tính theo 2 công thức:</p>
                  <div class="row text-center g-2 my-2">
                    <div class="col-md-6">
                      <div class="p-2 border border-primary rounded bg-light">
                        <small class="text-primary fw-bold">Công thức 1 (Khi biết số hạng cuối $u_n$):</small>
                        <div class="fs-5 fw-bold text-primary mt-1">$$S_n = \\dfrac{n(u_1 + u_n)}{2}$$</div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="p-2 border border-success rounded bg-light">
                        <small class="text-success fw-bold">Công thức 2 (Khi biết công sai $d$):</small>
                        <div class="fs-5 fw-bold text-success mt-1">$$S_n = \\dfrac{n}{2}[2u_1 + (n - 1)d]$$</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ĐỒ HỌA SVG GHÉP ĐỐI XỨNG GAUSS -->
              <div class="text-center my-3">
                __SVG_GAUSS_PAIRING__
              </div>

              <!-- VÍ DỤ MẪU 5 - GIẢI QUYẾT BÀI TOÁN HOOK NHÀ HÁT -->
              <div class="alert alert-success border-start border-4 border-success mb-3">
                <h6 class="fw-bold text-success mb-2"><i class="fa-solid fa-circle-check"></i> Ví dụ mẫu 5 (SGK trang 50 - Giải bài toán tình huống mở đầu):</h6>
                <p class="mb-1"><b>Đề bài:</b> Một nhà hát có 25 hàng ghế với 16 ghế ở hàng thứ nhất, 18 ghế ở hàng thứ hai, 20 ghế ở hàng thứ ba... Tính tổng số ghế của nhà hát đó.</p>
                <hr class="my-2">
                <p class="mb-1 text-dark"><b>Lời giải chi tiết của Thầy Sáng:</b></p>
                <p class="mb-1">Số ghế ở mỗi hàng của nhà hát lập thành một cấp số cộng gồm $n = 25$ số hạng, với số hạng đầu $u_1 = 16$ và công sai $d = 2$.</p>
                <p class="mb-1">Áp dụng công thức tính tổng $S_n$ với $n = 25$:</p>
                <p class="mb-1">$$S_{25} = \\dfrac{25}{2}[2u_1 + (25 - 1)d] = \\dfrac{25}{2}[2 \\cdot 16 + 24 \\cdot 2].$$</p>
                <p class="mb-1">$$S_{25} = \\dfrac{25}{2}[32 + 48] = \\dfrac{25}{2} \\cdot 80 = 25 \\cdot 40 = 1000.$$</p>
                <p class="mb-0 fw-bold text-success">Vậy nhà hát đó có tổng cộng 1.000 ghế ngồi!</p>
              </div>

              <!-- BÀI TẬP RÈN LUYỆN -->
              <div class="alert alert-info border-start border-4 border-info mb-0">
                <h6 class="fw-bold text-primary mb-2"><i class="fa-solid fa-pen-to-square"></i> Bài tập rèn luyện (Tương tự):</h6>
                <p class="mb-1"><b>Đề bài:</b> Tính tổng của 20 số hạng đầu của cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 5$ và công sai $d = 3$.</p>
                <hr class="my-2">
                <details>
                  <summary class="text-primary fw-bold" style="cursor: pointer;"><i class="fa-solid fa-eye"></i> Nhấn để xem hướng dẫn giải chi tiết</summary>
                  <div class="mt-2 pt-2 border-top">
                    <p class="mb-1">Áp dụng công thức tính tổng với $n = 20, u_1 = 5, d = 3$:</p>
                    <p class="mb-1">$$S_{20} = \\dfrac{20}{2}[2 \\cdot 5 + (20 - 1) \\cdot 3] = 10 \\cdot [10 + 19 \\cdot 3] = 10 \\cdot [10 + 57] = 10 \\cdot 67 = 670.$$</p>
                    <p class="mb-0 fw-bold text-success">Đáp số: $S_{20} = 670$.</p>
                  </div>
                </details>
              </div>
            </div>`,
          "audioUrl": "assets/audio/b11_6_sec3a.mp3",
          "audioScript": "Mục 3. Tổng n số hạng đầu của một cấp số cộng. Tiểu mục a: Công thức tính tổng S n. Tổng của n số hạng đầu tiên được tính bằng: S n bằng n nhân mở ngoặc u 1 cộng u n đóng ngoặc chia 2. Thay u n bằng u 1 cộng n trừ 1 nhân d, ta có công thức thứ hai: S n bằng n chia 2 nhân mở ngoặc 2 u 1 cộng mở ngoặc n trừ 1 đóng ngoặc nhân d đóng ngoặc.",
          "pois": [
            {
              "time": 0.35,
              "question": "Công thức tính tổng Sn khi biết số hạng đầu u1 và số hạng cuối un là:",
              "options": [
                "Sn = n(u1 + un)",
                "Sn = [n(u1 + un)] / 2",
                "Sn = (u1 + un) / 2",
                "Sn = n · u1 · un / 2"
              ],
              "correctIndex": 1,
              "explain": "Công thức Gauss: Sn = n(u1 + un) / 2."
            },
            {
              "time": 0.70,
              "question": "Tính tổng của 10 số tự nhiên lẻ đầu tiên: S = 1 + 3 + 5 + ... + 19.",
              "options": [
                "S = 90",
                "S = 100",
                "S = 110",
                "S = 120"
              ],
              "correctIndex": 1,
              "explain": "Áp dụng công thức: S10 = 10 · (1 + 19) / 2 = 10 · 20 / 2 = 100 (tổng n số lẻ đầu tiên luôn bằng n²)."
            }
          ]
        },

        // Mục 3b
        {
          "key": "b",
          "title": "Giải bài toán thực tế & Tìm số số hạng",
          "contentHtml": `<div class="card p-3 mb-3 border-0 bg-white shadow-sm rounded-3">
              <h5 class="fw-bold section-heading-blue mb-3"><i class="fa-solid fa-chart-line"></i> BÀI TOÁN THỰC TẾ & TÌM SỐ SỐ HẠNG KHI BIẾT TỔNG (SGK TRANG 50)</h5>

              <!-- PHƯƠNG PHÁP TÌM n KHI BIẾT TỔNG -->
              <div class="alert alert-warning border-start border-4 border-warning mb-3">
                <h6 class="fw-bold text-dark mb-1"><i class="fa-solid fa-crosshairs text-danger"></i> Kĩ thuật giải phương trình tìm số số hạng n:</h6>
                <p class="mb-1">Khi biết tổng $S_n = S$, số hạng đầu $u_1$ và công sai $d$, để tìm số số hạng $n$:</p>
                <p class="mb-1">1. Thay vào công thức: $S = \\dfrac{n}{2}[2u_1 + (n - 1)d] \\iff dn^2 + (2u_1 - d)n - 2S = 0$.</p>
                <p class="mb-0">2. Giải phương trình bậc hai ẩn $n$ và <b>chọn nghiệm nguyên dương $n \\in \\mathbb{N}^*$</b> (loại nghiệm âm hoặc phân số).</p>
              </div>

              <!-- VÍ DỤ MẪU 6 SGK -->
              <div class="alert alert-success border-start border-4 border-success mb-3">
                <h6 class="fw-bold text-success mb-2"><i class="fa-solid fa-circle-check"></i> Ví dụ mẫu 6 (SGK trang 50):</h6>
                <p class="mb-1"><b>Đề bài:</b> Cần lấy tổng của bao nhiêu số hạng đầu của cấp số cộng $2, 5, 8, \\dots$ để được kết quả bằng $345$?</p>
                <hr class="my-2">
                <p class="mb-1 text-dark"><b>Lời giải chi tiết của Thầy Sáng:</b></p>
                <p class="mb-1">Cấp số cộng này có số hạng đầu $u_1 = 2$ và công sai $d = 5 - 2 = 3$.</p>
                <p class="mb-1">Gọi $n$ là số các số hạng đầu cần lấy ($n \\in \\mathbb{N}^*$). Ta có:</p>
                <p class="mb-1">$$345 = S_n = \\dfrac{n}{2}[2 \\cdot 2 + (n - 1) \\cdot 3] = \\dfrac{n}{2}(3n + 1).$$</p>
                <p class="mb-1">$$\\iff 3n^2 + n = 690 \\iff 3n^2 + n - 690 = 0.$$</p>
                <p class="mb-1">Giải phương trình bậc hai này bằng máy tính cầm tay, ta được hai nghiệm:</p>
                <p class="mb-1">$$n = 15 \\quad \\text{hoặc} \\quad n = -\\dfrac{46}{3} \\approx -15{,}33 \\quad (\\text{loại vì } n \\in \\mathbb{N}^*).$$</p>
                <p class="mb-0 fw-bold text-success">Vậy cần lấy tổng của 15 số hạng đầu tiên.</p>
              </div>

              <!-- ĐỒ HỌA BÀI TOÁN LƯƠNG ANH NAM -->
              <div class="text-center my-3">
                __SVG_SALARY_GROWTH__
              </div>

              <!-- BÀI TOÁN VẬN DỤNG SGK -->
              <div class="alert alert-info border-start border-4 border-info mb-0">
                <h6 class="fw-bold text-primary mb-2"><i class="fa-solid fa-coins text-warning"></i> Bài toán Vận dụng thực tế (SGK trang 50):</h6>
                <p class="mb-1"><b>Đề bài:</b> Anh Nam được nhận vào làm việc ở một công ty công nghệ với mức lương khởi điểm là 100 triệu đồng một năm. Công ty sẽ tăng thêm lương cho anh Nam mỗi năm là 20 triệu đồng. Tính tổng số tiền lương mà anh Nam nhận được sau 10 năm làm việc cho công ty đó.</p>
                <hr class="my-2">
                <details>
                  <summary class="text-primary fw-bold" style="cursor: pointer;"><i class="fa-solid fa-eye"></i> Nhấn để xem hướng dẫn giải chi tiết</summary>
                  <div class="mt-2 pt-2 border-top">
                    <p class="mb-1">• Số tiền lương mỗi năm của anh Nam lập thành một cấp số cộng với số hạng đầu $u_1 = 100$ (triệu đồng) và công sai $d = 20$ (triệu đồng).</p>
                    <p class="mb-1">• Sau $n = 10$ năm, tổng số tiền lương anh Nam nhận được là:</p>
                    <p class="mb-1">$$S_{10} = \\dfrac{10}{2}[2 \\cdot 100 + (10 - 1) \\cdot 20] = 5 \\cdot [200 + 180] = 5 \\cdot 380 = 1.900 \\text{ triệu đồng}.$$</p>
                    <p class="mb-0 fw-bold text-success">Kết luận: Sau 10 năm, tổng số tiền lương anh Nam nhận được là 1.900 triệu đồng (tức 1,9 tỉ đồng!).</p>
                  </div>
                </details>
              </div>
            </div>`,
          "audioUrl": "assets/audio/b11_6_sec3b.mp3",
          "audioScript": "Tiểu mục b: Giải bài toán thực tế và tìm số số hạng. Vận dụng công thức S n, ta giải quyết nhanh chóng bài toán tổng số ghế nhà hát ở tình huống mở đầu, hoặc bài toán tính tổng thu nhập của người lao động sau nhiều năm tăng lương định kì. Nếu đề bài cho trước tổng S n và yêu cầu tìm n, ta đưa về giải phương trình bậc hai ẩn n và chọn nghiệm nguyên dương.",
          "pois": [
            {
              "time": 0.35,
              "question": "Khi giải phương trình tìm số các số hạng n của cấp số cộng, nghiệm n bắt buộc phải thỏa mãn điều kiện gì?",
              "options": [
                "n là số thực bất kì",
                "n là số nguyên dương (n ∈ ℕ*)",
                "n là số âm",
                "n là phân số hữu tỉ"
              ],
              "correctIndex": 1,
              "explain": "Số lượng các số hạng là số đếm nên bắt buộc n phải là số nguyên dương: n ∈ ℕ* (1, 2, 3,...)."
            },
            {
              "time": 0.70,
              "question": "Tổng Sn của một cấp số cộng tăng có số hạng đầu dương và công sai d > 0 sẽ như thế nào khi n ngày càng lớn?",
              "options": [
                "Giảm dần về 0",
                "Không đổi",
                "Tăng dần và tiến ra vô cực",
                "Dao động tuần hoàn"
              ],
              "correctIndex": 2,
              "explain": "Vì các số hạng ngày càng lớn và mang dấu dương nên tổng Sn tăng nghiêm ngặt và tiến ra dương vô cực."
            }
          ]
        }
      ]
    }
  ],

  // =======================================================================
  // CHỐT KIẾN THỨC THEN CHỐT (WRAP-UP)
  // =======================================================================
  "wrapUp": {
    "title": "Chốt kiến thức then chốt Bài 6: Cấp số cộng",
    "contentHtml": `<div class="card p-3 mb-3 border-0 bg-light rounded-3">
        <h5 class="fw-bold section-heading-red mb-3"><i class="fa-solid fa-graduation-cap"></i> HỆ THỐNG HOÁ TOÀN DIỆN BÀI 6: CẤP SỐ CỘNG</h5>

        <!-- BẢNG VÀNG CÔNG THỨC QUY TẮC CỐT LÕI -->
        <div class="math-table-container mb-3">
          <table class="math-table table-bordered">
            <thead class="table-primary">
              <tr>
                <th style="width: 25%;">Đơn vị kiến thức</th>
                <th style="width: 50%;">Công thức cốt lõi</th>
                <th style="width: 25%;">Bí quyết của Thầy Sáng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold text-primary">Định nghĩa & Công sai</td>
                <td>$$u_n = u_{n-1} + d \\quad (n \\ge 2) \\iff d = u_n - u_{n-1}$$</td>
                <td>Chứng minh cấp số cộng: chứng minh hiệu $u_n - u_{n-1}$ là hằng số.</td>
              </tr>
              <tr>
                <td class="fw-bold text-success">Số hạng tổng quát</td>
                <td>$$u_n = u_1 + (n - 1)d \\quad (n \\ge 1)$$</td>
                <td>Từ $u_1$ nhảy $(n - 1)$ bước công sai $d$. Biết 2 số hạng lập hệ tìm $u_1, d$.</td>
              </tr>
              <tr>
                <td class="fw-bold text-warning">Trung bình cộng 3 số</td>
                <td>$$a, b, c \\text{ lập thành CSC} \\iff a + c = 2b$$</td>
                <td>Số đứng giữa bằng trung bình cộng 2 số kề bên.</td>
              </tr>
              <tr>
                <td class="fw-bold text-danger">Tổng $n$ số hạng đầu</td>
                <td>
                  $$S_n = \\dfrac{n(u_1 + u_n)}{2} = \\dfrac{n}{2}[2u_1 + (n - 1)d]$$
                </td>
                <td>Ý tưởng Gauss: ghép cặp đối xứng $u_1 + u_n$. Biết $S_n$ tìm $n$: giải PT bậc hai.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- ỨNG DỤNG THỰC TIỄN & LỊCH SỬ TOÁN HỌC -->
        <div class="alert alert-info mb-0">
          <h6 class="fw-bold"><i class="fa-solid fa-earth-americas"></i> CÂU CHUYỆN TOÁN HỌC & ỨNG DỤNG ĐỜI SỐNG:</h6>
          <p class="mb-1">• <b>Giai thoại Carl Friedrich Gauss (1777 - 1855):</b> Khi mới 10 tuổi, thầy giáo yêu cầu cả lớp tính tổng từ 1 đến 100. Trong khi các bạn miệt mài cộng từng số, cậu bé Gauss chỉ mất vài giây để đưa ra đáp số <b>5.050</b> bằng cách ghép cặp: $(1 + 100) + (2 + 99) + \\dots + (50 + 51) = 50 \\times 101 = 5050$. Đây chính là phát minh vĩ đại về tổng của cấp số cộng!</p>
          <p class="mb-1">• <b>Ứng dụng kinh tế:</b> Tính tiền lương tích lũy sau các đợt tăng lương định kì, trả nợ gốc đều đặn mỗi tháng, khấu hao tài sản cố định.</p>
          <p class="mb-0">• <b>Kiến trúc & Xây dựng:</b> Thiết kế khán đài sân vận động, hàng ghế nhà hát hình nan quạt, xếp chồng ống thép, kim tự tháp gạch.</p>
        </div>
      </div>`,
    "audioUrl": "assets/audio/b11_6_wrapup.mp3",
    "audioScript": "Chốt kiến thức then chốt Bài 6: Cấp số cộng. Thầy chúc mừng các em đã hoàn thành bài học xuất sắc! Các em hãy ghi nhớ ba trụ cột kiến thức: Thứ nhất, định nghĩa và hệ thức truy hồi u n cộng 1 bằng u n cộng d. Thứ hai, công thức số hạng tổng quát u n bằng u 1 cộng n trừ 1 nhân d. Thứ ba, hai công thức tính tổng n số hạng đầu của cấp số cộng. Bây giờ, các em hãy cùng Thầy bước vào Phần 4 để tự tin chinh phục bộ đề trắc nghiệm chuẩn cấu trúc mới nhé!"
  },

  // =======================================================================
  // PHẦN IV. BÀI TẬP TRẮC NGHIỆM CỦNG CỐ (CHUẨN CẤU TRÚC ĐỀ THI 2026)
  // =======================================================================
  "quiz": [
    // ---------------------------------------------------------------------
    // DẠNG 1: TRẮC NGHIỆM 4 PHƯƠNG ÁN (5 CÂU CỐT LÕI - NHẬN BIẾT & THÔNG HIỂU)
    // ---------------------------------------------------------------------
    {
      "type": "multiple_choice",
      "question": "<b>Câu 1 (Nhận biết):</b> Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 2$. Số hạng thứ 5 của cấp số cộng này là:",
      "options": [
        "$u_5 = 10$",
        "$u_5 = 11$",
        "$u_5 = 13$",
        "$u_5 = 15$"
      ],
      "correct": 1,
      "hint": "Áp dụng công thức un = u1 + (n - 1)d với n = 5.",
      "explain": "Áp dụng công thức số hạng tổng quát: $u_5 = u_1 + (5 - 1)d = 3 + 4 \\cdot 2 = 11$. Phương án đúng là B."
    },
    {
      "type": "multiple_choice",
      "question": "<b>Câu 2 (Nhận biết):</b> Trong các dãy số $(u_n)$ cho bởi số hạng tổng quát sau đây, dãy số nào là một cấp số cộng?",
      "options": [
        "$u_n = n^2 + 1$",
        "$u_n = 2^n$",
        "$u_n = 3n - 2$",
        "$u_n = \\dfrac{1}{n}$"
      ],
      "correct": 2,
      "hint": "Cấp số cộng có số hạng tổng quát dạng bậc nhất theo n: un = an + b với công sai d = a.",
      "explain": "Dãy số $u_n = 3n - 2$ có dạng nhị thức bậc nhất theo $n$. Ta xét hiệu: $u_{n+1} - u_n = [3(n + 1) - 2] - (3n - 2) = 3$ (hằng số). Do đó đây là cấp số cộng có $u_1 = 1$ và $d = 3$. Phương án đúng là C."
    },
    {
      "type": "multiple_choice",
      "question": "<b>Câu 3 (Thông hiểu):</b> Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = -2$ và số hạng thứ hai $u_2 = 3$. Công sai $d$ của cấp số cộng bằng:",
      "options": [
        "$d = 5$",
        "$d = -5$",
        "$d = 1$",
        "$d = -1$"
      ],
      "correct": 0,
      "hint": "Công sai d = u2 - u1.",
      "explain": "Ta có công sai: $d = u_2 - u_1 = 3 - (-2) = 3 + 2 = 5$. Phương án đúng là A."
    },
    {
      "type": "multiple_choice",
      "question": "<b>Câu 4 (Thông hiểu):</b> Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 4$ và công sai $d = -3$. Số $-26$ là số hạng thứ mấy của cấp số cộng?",
      "options": [
        "Số hạng thứ 9",
        "Số hạng thứ 10",
        "Số hạng thứ 12",
        "Số hạng thứ 11"
      ],
      "correct": 3,
      "hint": "Giải phương trình un = u1 + (n - 1)d = -26 để tìm n.",
      "explain": "Ta có: $u_n = u_1 + (n - 1)d \\iff -26 = 4 + (n - 1)(-3) \\iff -30 = -3(n - 1) \\iff n - 1 = 10 \\iff n = 11$. Vậy $-26$ là số hạng thứ 11. Phương án đúng là D."
    },
    {
      "type": "multiple_choice",
      "question": "<b>Câu 5 (Thông hiểu):</b> Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 1$ và công sai $d = 4$. Tổng 20 số hạng đầu tiên $S_{20}$ của cấp số cộng bằng:",
      "options": [
        "$S_{20} = 760$",
        "$S_{20} = 780$",
        "$S_{20} = 800$",
        "$S_{20} = 820$"
      ],
      "correct": 1,
      "hint": "Áp dụng công thức Sn = (n / 2)[2u1 + (n - 1)d].",
      "explain": "Ta có: $S_{20} = \\dfrac{20}{2}[2 \\cdot 1 + (20 - 1) \\cdot 4] = 10 \\cdot [2 + 19 \\cdot 4] = 10 \\cdot [2 + 76] = 10 \\cdot 78 = 780$. Phương án đúng là B."
    },

    // ---------------------------------------------------------------------
    // DẠNG 2: TRẮC NGHIỆM ĐÚNG / SAI (3 CÂU - MỖI CÂU 4 Ý A, B, C, D)
    // ---------------------------------------------------------------------
    {
      "type": "true_false",
      "question": "<b>Câu 1 (Đúng/Sai):</b> Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 5$ và số hạng thứ hai $u_2 = 9$. Xét tính Đúng / Sai của các khẳng định sau:",
      "items": [
        {
          "id": "a",
          "statement": "a) Công sai của cấp số cộng là $d = 4$.",
          "correct": true,
          "explain": "Đúng vì d = u₂ - u₁ = 9 - 5 = 4."
        },
        {
          "id": "b",
          "statement": "b) Công thức số hạng tổng quát của cấp số cộng là $u_n = 4n + 1$.",
          "correct": true,
          "explain": "Đúng vì un = u₁ + (n - 1)d = 5 + 4(n - 1) = 4n + 1."
        },
        {
          "id": "c",
          "statement": "c) Số 81 là số hạng thứ 20 của cấp số cộng.",
          "correct": true,
          "explain": "Đúng vì u₂₀ = 4 · 20 + 1 = 81."
        },
        {
          "id": "d",
          "statement": "d) Tổng 10 số hạng đầu của cấp số cộng là $S_{10} = 250$.",
          "correct": false,
          "explain": "Sai vì S₁₀ = (10 / 2)[2 · 5 + 9 · 4] = 5 · [10 + 36] = 5 · 46 = 230 ≠ 250."
        }
      ]
    },
    {
      "type": "true_false",
      "question": "<b>Câu 2 (Đúng/Sai):</b> Cho cấp số cộng $(u_n)$ thỏa mãn hệ điều kiện: $\\begin{cases} u_2 + u_5 - u_3 = 10 \\\\ u_4 + u_6 = 26 \\end{cases}$. Xét tính Đúng / Sai của các khẳng định sau:",
      "items": [
        {
          "id": "a",
          "statement": "a) Biểu thức $u_2 + u_5 - u_3$ rút gọn theo $u_1$ và $d$ bằng $u_1 + 3d$.",
          "correct": true,
          "explain": "Đúng vì (u₁ + d) + (u₁ + 4d) - (u₁ + 2d) = u₁ + 3d."
        },
        {
          "id": "b",
          "statement": "b) Cấp số cộng có số hạng đầu $u_1 = 1$ và công sai $d = 3$.",
          "correct": true,
          "explain": "Đúng vì ta có hệ: u₁ + 3d = 10 và 2u₁ + 8d = 26 <=> u₁ + 3d = 10 và u₁ + 4d = 13 => d = 3, u₁ = 1."
        },
        {
          "id": "c",
          "statement": "c) Số hạng thứ 15 của cấp số cộng là $u_{15} = 45$.",
          "correct": false,
          "explain": "Sai vì u₁₅ = u₁ + 14d = 1 + 14 · 3 = 43 ≠ 45."
        },
        {
          "id": "d",
          "statement": "d) Tổng của 15 số hạng đầu tiên là $S_{15} = 330$.",
          "correct": true,
          "explain": "Đúng vì S₁₅ = (15 / 2)(u₁ + u₁₅) = (15 / 2)(1 + 43) = 15 · 22 = 330."
        }
      ]
    },
    {
      "type": "true_false",
      "question": "<b>Câu 3 (Đúng/Sai - Ứng dụng thực tế):</b> Một rạp xiếc ngoài trời thiết kế các hàng ghế ngồi xếp theo hình nan quạt: hàng thứ nhất có 20 ghế, hàng thứ hai có 23 ghế, hàng thứ ba có 26 ghế và cứ như thế tiếp tục đến hàng cuối cùng có 77 ghế. Xét tính Đúng / Sai của các khẳng định sau:",
      "items": [
        {
          "id": "a",
          "statement": "a) Số ghế ở mỗi hàng lập thành một cấp số cộng với công sai $d = 3$.",
          "correct": true,
          "explain": "Đúng vì mỗi hàng sau hơn hàng liền trước 3 ghế: 23 - 20 = 26 - 23 = 3."
        },
        {
          "id": "b",
          "statement": "b) Rạp xiếc có tổng cộng 20 hàng ghế.",
          "correct": true,
          "explain": "Đúng vì hàng cuối có 77 ghế: 20 + (n - 1)·3 = 77 <=> 3(n - 1) = 57 <=> n - 1 = 19 <=> n = 20."
        },
        {
          "id": "c",
          "statement": "c) Số ghế ở hàng thứ 10 là 47 ghế.",
          "correct": true,
          "explain": "Đúng vì u₁₀ = u₁ + 9d = 20 + 9 · 3 = 47 ghế."
        },
        {
          "id": "d",
          "statement": "d) Tổng số ghế của toàn bộ rạp xiếc là 950 ghế.",
          "correct": false,
          "explain": "Sai vì tổng số ghế là S₂₀ = [20 · (20 + 77)] / 2 = 10 · 97 = 970 ghế ≠ 950 ghế."
        }
      ]
    },

    // ---------------------------------------------------------------------
    // DẠNG 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (3 CÂU - ĐIỀN SỐ / TOÁN THỰC TẾ)
    // ---------------------------------------------------------------------
    {
      "type": "short_answer",
      "question": "<b>Câu 1 (Vận dụng):</b> Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = -3$ và công sai $d = 5$. Hãy tìm giá trị của số hạng thứ 21 ($u_{21}$).",
      "acceptableAnswers": ["97"],
      "correctAnswer": "97",
      "unit": "",
      "hint": "Áp dụng công thức: u21 = u1 + 20d.",
      "explain": "Ta có: $u_{21} = u_1 + (21 - 1)d = -3 + 20 \\cdot 5 = -3 + 100 = 97$.<br><b>Đáp số: 97</b>."
    },
    {
      "type": "short_answer",
      "question": "<b>Câu 2 (Vận dụng thực tế):</b> Một công ty tuyển dụng nhân sự với mức lương khởi điểm là 15 triệu đồng/tháng. Cứ sau mỗi quý (3 tháng), nhân viên được tăng lương thêm 0,5 triệu đồng/tháng. Hỏi ở quý thứ mấy thì mức lương hàng tháng của nhân viên đó đạt đúng 20 triệu đồng?",
      "acceptableAnswers": ["11", "quý 11", "quý thứ 11"],
      "correctAnswer": "11",
      "unit": "quý",
      "hint": "Mức lương quý n là un = 15 + (n - 1) · 0,5. Giải un = 20 tìm n.",
      "explain": "Mức lương qua các quý lập thành cấp số cộng với $u_1 = 15$ và $d = 0{,}5$.<br>Để lương đạt 20 triệu đồng, ta có phương trình:<br>$15 + (n - 1) \\cdot 0{,}5 = 20 \\iff 0{,}5(n - 1) = 5 \\iff n - 1 = 10 \\iff n = 11$.<br>Vậy ở <b>quý thứ 11</b> thì mức lương đạt 20 triệu đồng/tháng.<br><b>Đáp số: 11</b>."
    },
    {
      "type": "short_answer",
      "question": "<b>Câu 3 (Vận dụng cao):</b> Một người muốn xếp 465 khối gỗ hình lập phương thành một kim tự tháp bậc thang đứng, sao cho hàng trên cùng có 1 khối gỗ, hàng thứ hai có 2 khối, hàng thứ ba có 3 khối, và cứ tiếp tục như thế (hàng thứ $n$ có $n$ khối). Hỏi kim tự tháp đó có tất cả bao nhiêu hàng (tầng)?",
      "acceptableAnswers": ["30", "30 hàng", "30 tầng"],
      "correctAnswer": "30",
      "unit": "tầng",
      "hint": "Tổng số khối gỗ là Sn = 1 + 2 + ... + n = n(n + 1) / 2 = 465. Giải phương trình bậc hai tìm n nguyên dương.",
      "explain": "Số khối gỗ ở mỗi tầng từ trên xuống là cấp số cộng với $u_1 = 1, d = 1$.<br>Tổng số khối gỗ ở $n$ tầng là: $S_n = \\dfrac{n(n + 1)}{2}$.<br>Theo đề bài: $\\dfrac{n(n + 1)}{2} = 465 \\iff n^2 + n - 930 = 0$.<br>Phương trình có hai nghiệm: $n = 30$ hoặc $n = -31$ (loại vì $n \\in \\mathbb{N}^*$).<br>Vậy kim tự tháp đó có tất cả <b>30 tầng</b>.<br><b>Đáp số: 30</b>."
    }
  ]
};

// ===========================================================================
// BỘ ADAPTER TƯƠNG THÍCH 100% VỚI RENDERER 5 SAO & NETLIFY ENGINE
// ===========================================================================
window.LESSON_11_C2_B6_DATA.realworldWrapup = {
  title: "Chốt kiến thức then chốt & Hệ thống hóa Bài 6: Cấp số cộng",
  audioUrl: "assets/audio/b11_6_wrapup.mp3",
  audioScript: window.LESSON_11_C2_B6_DATA.wrapUp.audioScript,
  recap: "Hệ thống hóa toàn diện định nghĩa cấp số cộng, công sai d, số hạng tổng quát un, tính chất trung bình cộng và hai công thức tính tổng Sn cùng các ứng dụng thực tế phong phú.",
  summaryHtml: window.LESSON_11_C2_B6_DATA.wrapUp.contentHtml,
  solutionHtml: window.LESSON_11_C2_B6_DATA.wrapUp.contentHtml,
  solution: window.LESSON_11_C2_B6_DATA.wrapUp.contentHtml
};

window.LESSON_11_C2_B6_DATA.examFormatPractice = {
  title: "PHẦN IV. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP (CHUẨN CẤU TRÚC ĐỀ THI MỚI 2026 BỘ GD&ĐT)",
  durationMinutes: 20,
  totalPoints: 10,
  part1MultipleChoice: window.LESSON_11_C2_B6_DATA.quiz.filter(q => q.type === "multiple_choice" || !q.type).map((q, idx) => ({
    id: "mc-11-6-" + (idx + 1),
    num: idx + 1,
    question: q.question,
    prompt: q.question,
    options: q.options,
    correctIndex: q.correct,
    correctAnswer: String.fromCharCode(65 + q.correct),
    hint: q.hint,
    explain: q.explain,
    solution: q.explain
  })),
  part2TrueFalse: window.LESSON_11_C2_B6_DATA.quiz.filter(q => q.type === "true_false").map((q, idx) => ({
    id: "tf-11-6-" + (idx + 1),
    num: idx + 1,
    prompt: q.question,
    intro: q.question,
    items: q.items.map(it => ({
      id: it.id,
      label: it.id,
      text: it.statement,
      statement: it.statement,
      correct: it.correct,
      isCorrect: it.correct,
      isTrue: it.correct,
      explain: it.explain
    })),
    solution: q.items.map(it => `<strong>${it.id.toUpperCase()})</strong> ${it.explain}`).join("<br>"),
    explain: q.items.map(it => `<strong>${it.id.toUpperCase()})</strong> ${it.explain}`).join("<br>")
  })),
  part3ShortAnswer: window.LESSON_11_C2_B6_DATA.quiz.filter(q => q.type === "short_answer").map((q, idx) => ({
    id: "sa-11-6-" + (idx + 1),
    num: idx + 1,
    question: q.question,
    prompt: q.question,
    correctAnswer: q.correctAnswer,
    acceptableAnswers: q.acceptableAnswers,
    unit: q.unit || "",
    hint: q.hint,
    explain: q.explain,
    solution: q.explain
  }))
};

// Global Alias & Auto-Inject
window.B11_6_DATA = window.LESSON_11_C2_B6_DATA;

if (typeof autoInjectLesson === "function") {
  autoInjectLesson(window.LESSON_11_C2_B6_DATA);
} else if (typeof window !== "undefined" && window.LESSONS_DATA && window.LESSONS_DATA["11"]) {
  const list = window.LESSONS_DATA["11"];
  const idx = list.findIndex(l => l.id === "11-c2-b6");
  if (idx >= 0) list[idx] = Object.assign(list[idx], window.LESSON_11_C2_B6_DATA);
  else list.push(window.LESSON_11_C2_B6_DATA);
}
"""

def generate_full_file():
    content = template.replace("__SVG_HOOK__", SVG_HOOK)
    content = content.replace("__SVG_COMMON_DIFF__", SVG_COMMON_DIFF)
    content = content.replace("__SVG_STEP_LADDER__", SVG_STEP_LADDER)
    content = content.replace("__SVG_GAUSS_PAIRING__", SVG_GAUSS_PAIRING)
    content = content.replace("__SVG_SALARY_GROWTH__", SVG_SALARY_GROWTH)

    out_path = "js/lesson-11-6-data.js"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Written: {out_path} ({os.path.getsize(out_path):,} bytes)")

    net_path = "BAN_CAP_NHAT_NETLIFY/js/lesson-11-6-data.js"
    os.makedirs(os.path.dirname(net_path), exist_ok=True)
    with open(net_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Synchronized to Netlify: {net_path} ({os.path.getsize(net_path):,} bytes)")

if __name__ == "__main__":
    generate_full_file()
