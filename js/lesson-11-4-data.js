// Dữ liệu Bài 4 Lớp 11: Phương trình lượng giác cơ bản
// ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại, An Giang
window.LESSON_11_C1_B4_DATA = {
  "id": "11-c1-b4",
  "grade": "11",
  "subject": "Toán 11 - Kết nối tri thức",
  "chapter": "Chương I",
  "chapterTitle": "Hàm số lượng giác và phương trình lượng giác",
  "number": "Bài 4",
  "title": "Phương trình lượng giác cơ bản",
  "isFeaturedLesson": true,
  "isInteractiveDigitalLesson": true,
  "teacherWelcome": {
    "greetingText": "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Hôm nay, thầy trò chúng ta sẽ bước vào Bài 4: Phương trình lượng giác cơ bản. Nếu như ở bài trước, các em đã biết rằng các hiện tượng tuần hoàn như nhịp thở, sóng biển, dòng điện hay dao động điều hòa đều được mô hình hóa bởi các hàm số lượng giác; thì trong bài học hôm nay, việc giải phương trình lượng giác chính là chìa khóa để chúng ta xác định chính xác thời điểm con sóng đạt đỉnh cao nhất, thời khắc vận tốc hô hấp đổi chiều, hay tính toán góc bắn nòng pháo tối ưu để quả đạn pháo bay xa nhất bảo vệ Tổ quốc. Bài học này không chỉ trang bị cho các em các công thức nghiệm kinh điển của bốn phương trình lượng giác cơ bản sin, cos, tan, cotang, mà còn rèn luyện tư duy logic, sự cẩn trọng với điều kiện xác định và kĩ năng sử dụng máy tính cầm tay điêu luyện. Các em hãy chuẩn bị sách vở, tập trung lắng nghe và cùng Thầy chinh phục đỉnh cao bài học ngày hôm nay nhé!",
    "audioScript": "Thầy Sáng thân ái chào tất cả các em học sinh lớp 11 thân yêu! Hôm nay, thầy trò chúng ta sẽ bước vào Bài 4: Phương trình lượng giác cơ bản. Nếu như ở bài trước, các em đã biết rằng các hiện tượng tuần hoàn như nhịp thở, sóng biển, dòng điện hay dao động điều hòa đều được mô hình hóa bởi các hàm số lượng giác; thì trong bài học hôm nay, việc giải phương trình lượng giác chính là chìa khóa để chúng ta xác định chính xác thời điểm con sóng đạt đỉnh cao nhất, thời khắc vận tốc hô hấp đổi chiều, hay tính toán góc bắn nòng pháo tối ưu để quả đạn pháo bay xa nhất bảo vệ Tổ quốc. Bài học này không chỉ trang bị cho các em các công thức nghiệm kinh điển của bốn phương trình lượng giác cơ bản sin, cos, tan, cotang, mà còn rèn luyện tư duy logic, sự cẩn trọng với điều kiện xác định và kĩ năng sử dụng máy tính cầm tay điêu luyện. Các em hãy chuẩn bị sách vở, tập trung lắng nghe và cùng Thầy chinh phục đỉnh cao bài học ngày hôm nay nhé!",
    "audioUrl": "assets/audio/b11_4_welcome.mp3"
  },
  "learningGoals": [
    "Hiểu sâu sắc khái niệm hai phương trình tương đương, tập nghiệm của phương trình và hai quy tắc biến đổi tương đương cơ bản.",
    "Nắm vững điều kiện có nghiệm $|m| \\le 1$ và thành thạo công thức nghiệm của phương trình $\\sin x = m$, $\\cos x = m$ (theo đơn vị radian và độ), xử lý chuẩn xác các trường hợp đặc biệt và các góc biểu diễn qua $\\arcsin, \\arccos$.",
    "Nắm vững công thức nghiệm của phương trình $\\tan x = m$ và $\\cot x = m$ (luôn có nghiệm với mọi $m \\in \\mathbb{R}$), điều kiện xác định và các góc biểu diễn qua $\\arctan, \\text{arccot}$.",
    "Giải quyết thành thạo phương trình lượng giác mở rộng dạng $\\sin u = \\sin v, \\cos u = \\cos v, \\tan u = \\tan v, \\cot u = \\cot v$ và sử dụng thành thạo máy tính cầm tay Casio tìm góc lượng giác.",
    "Vận dụng kiến thức phương trình lượng giác để giải quyết các bài toán mô hình hóa thực tiễn: bài toán tầm xa góc bắn pháo, các pha chiếu sáng của Mặt Trăng và dao động cơ học."
  ],
  "goalsAudioUrl": "assets/audio/b11_4_goals.mp3",
  "goalsAudioScript": "Phần 2. Mục tiêu và yêu cầu cần đạt. Sau khi hoàn thành bài học này, các em cần đạt được các yêu cầu trọng tâm sau: Thứ nhất, hiểu sâu sắc khái niệm hai phương trình tương đương, tập nghiệm và hai quy tắc biến đổi tương đương cơ bản. Thứ hai, nắm vững điều kiện có nghiệm trị tuyệt đối của m nhỏ hơn hoặc bằng 1, và thành thạo công thức nghiệm của phương trình sin x bằng m, cos x bằng m theo cả đơn vị radian và đơn vị độ, xử lý thuần thục các trường hợp đặc biệt và các góc lượng giác biểu diễn qua ac sin, ac cos. Thứ ba, nắm vững công thức nghiệm của phương trình tan x bằng m và cotang x bằng m, luôn có nghiệm với mọi số thực m, kèm điều kiện xác định chặt chẽ. Thứ tư, giải quyết thành thạo phương trình lượng giác mở rộng dạng sin u bằng sin v, cos u bằng cos v, tan u bằng tan v và sử dụng thành thạo máy tính cầm tay tìm góc lượng giác. Thứ năm, vận dụng phương trình lượng giác để giải quyết các bài toán thực tiễn như góc bắn đạn pháo, các pha chiếu sáng của Mặt Trăng và dao động cơ học.",
  "hook": {
    "title": "Tình huống mở đầu: Bài toán góc bắn của nòng pháo (Hình 1.18 SGK)",
    "storyHtml": "<p>Một quả đạn pháo được bắn ra khỏi nòng pháo với vận tốc ban đầu $v_0$ không đổi từ mặt đất với góc bắn $\\alpha$ ($0 < \\alpha < 90^\\circ$). Bỏ qua sức cản không khí, theo định luật Vật lí, quỹ đạo bay của quả đạn pháo là một đường cong parabol có phương trình (SGK trang 31):</p>\n            <div class=\"text-center my-3 p-3 bg-light rounded border border-primary\">\n              <span class=\"fs-4 fw-bold text-primary\">$$y = -\\dfrac{g}{2v_0^2 \\cos^2 \\alpha}x^2 + x\\tan\\alpha$$</span>\n              <div class=\"text-muted small mt-1\">trong đó $x$ là tầm xa theo phương ngang (m), $y$ là độ cao so với mặt đất (m), $g$ là gia tốc trọng trường.</div>\n            </div>\n            <p><b>Câu hỏi đặt ra:</b></p>\n            <ul>\n              <li>Khi quả đạn pháo chạm đất ($y = 0, x > 0$), tầm xa $x$ đạt được tính theo công thức lượng giác nào?</li>\n              <li>Để quả đạn pháo bay được xa nhất ($x_{\\max}$), ta phải điều chỉnh góc bắn $\\alpha$ bằng bao nhiêu độ?</li>\n            </ul>",
    "svgDiagram": "<div class=\"text-center my-3\">\n              <svg viewBox=\"0 0 760 300\" style=\"max-width:100%; height:auto; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0; box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);\">\n                <defs>\n                  <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n                    <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#334155\"/>\n                  </marker>\n                  <linearGradient id=\"grad45\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n                    <stop offset=\"0%\" stop-color=\"#2563eb\" stop-opacity=\"0.25\"/>\n                    <stop offset=\"100%\" stop-color=\"#2563eb\" stop-opacity=\"0.0\"/>\n                  </linearGradient>\n                </defs>\n                <!-- Trục tọa độ -->\n                <line x1=\"60\" y1=\"250\" x2=\"720\" y2=\"250\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n                <line x1=\"90\" y1=\"280\" x2=\"90\" y2=\"30\" stroke=\"#334155\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n                <text x=\"715\" y=\"270\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#334155\">x (m)</text>\n                <text x=\"65\" y=\"30\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#334155\">y (m)</text>\n                <text x=\"75\" y=\"265\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#64748b\">O</text>\n                \n                <!-- Vạch gốc tọa độ y = v0^2 / 4g -->\n                <line x1=\"85\" y1=\"140\" x2=\"95\" y2=\"140\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n                <text x=\"45\" y=\"145\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#64748b\">v₀²/4g</text>\n\n                <!-- Quỹ đạo góc 20 độ (xanh lá nhạt) -->\n                <path d=\"M 90 250 Q 235 185 380 250\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/>\n                <text x=\"245\" y=\"200\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#64748b\">20°</text>\n\n                <!-- Quỹ đạo góc 30 độ (xanh lam) -->\n                <path d=\"M 90 250 Q 320 145 550 250\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n                <text x=\"325\" y=\"160\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#0284c7\">30°</text>\n\n                <!-- Quỹ đạo góc 45 độ (XANH DƯƠNG ĐẬM - XA NHẤT) -->\n                <path d=\"M 90 250 Q 375 70 660 250\" fill=\"url(#grad45)\"/>\n                <path d=\"M 90 250 Q 375 70 660 250\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3.5\"/>\n                <circle cx=\"375\" cy=\"115\" r=\"4\" fill=\"#2563eb\"/>\n                <text x=\"385\" y=\"110\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#2563eb\">45° (Tầm xa cực đại)</text>\n                \n                <!-- Điểm rơi cực đại 45 độ -->\n                <circle cx=\"660\" cy=\"250\" r=\"5\" fill=\"#dc2626\"/>\n                <text x=\"635\" y=\"275\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">x_max = v₀²/g</text>\n\n                <!-- Quỹ đạo góc 60 độ (màu hổ phách) -->\n                <path d=\"M 90 250 Q 320 50 550 250\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"2\"/>\n                <text x=\"280\" y=\"70\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#d97706\">60°</text>\n\n                <!-- Quỹ đạo góc 70 độ (đỏ cam) -->\n                <path d=\"M 90 250 Q 235 30 380 250\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/>\n                <text x=\"200\" y=\"45\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#ef4444\">70°</text>\n\n                <!-- Điểm rơi 30 độ và 60 độ trùng nhau -->\n                <circle cx=\"550\" cy=\"250\" r=\"4\" fill=\"#0284c7\"/>\n                <text x=\"525\" y=\"270\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#0284c7\">x = v₀²√3/2g</text>\n              </svg>\n            </div>",
    "audioUrl": "assets/audio/b11_4_hook.mp3",
    "audioScript": "Tình huống mở đầu: Bài toán góc bắn của nòng pháo...",
    "pois": [
      {
        "time": 0.35,
        "question": "Khi quả đạn pháo chạm đất, đại lượng nào trong phương trình quỹ đạo y(x) nhận giá trị bằng 0?",
        "options": [
          "Hoành độ x",
          "Tung độ y",
          "Góc bắn alpha",
          "Vận tốc ban đầu v0"
        ],
        "correctIndex": 1,
        "explanation": "Khi chạm đất, độ cao của quả đạn so với mặt đất bằng 0, tức là tung độ y = 0."
      },
      {
        "time": 0.7,
        "question": "Biểu thức tầm xa x = (v0² sin 2alpha)/g đạt giá trị lớn nhất khi giá trị của sin 2alpha bằng bao nhiêu?",
        "options": [
          "sin 2alpha = 0",
          "sin 2alpha = 0,5",
          "sin 2alpha = 1",
          "sin 2alpha = 2"
        ],
        "correctIndex": 2,
        "explanation": "Vì hàm số sin có giá trị lớn nhất bằng 1, nên tầm xa x đạt cực đại khi sin 2alpha = 1, tương đương 2alpha = 90 độ, tức alpha = 45 độ."
      }
    ],
    "workedExample": {
      "title": "Ví dụ mở đầu: Tính tầm xa cực đại của quả đạn pháo",
      "problem": "Một quả đạn pháo được bắn với vận tốc ban đầu $v_0 = 500\\text{ m/s}$, gia tốc trọng trường $g = 9{,}8\\text{ m/s}^2$. Hãy tính tầm xa lớn nhất mà quả đạn pháo có thể đạt tới (làm tròn đến hàng đơn vị mét).",
      "solution": "<p><b>Lời giải:</b></p>\n                <p>Theo công thức tầm xa của chuyển động ném xiên:</p>\n                $$x = \\dfrac{v_0^2 \\sin 2\\alpha}{g}$$\n                <p>Vì $\\sin 2\\alpha \\le 1$ với mọi $\\alpha$, nên tầm xa lớn nhất đạt được khi:</p>\n                $$\\sin 2\\alpha = 1 \\Leftrightarrow 2\\alpha = 90^\\circ \\Leftrightarrow \\alpha = 45^\\circ$$\n                <p>Khi đó, tầm xa cực đại là:</p>\n                $$x_{\\max} = \\dfrac{v_0^2}{g} = \\dfrac{500^2}{9{,}8} = \\dfrac{250000}{9{,}8} \\approx 25510\\text{ m} = 25{,}51\\text{ km}$$\n                <p><b>Kết luận:</b> Với góc bắn $\\alpha = 45^\\circ$, quả đạn pháo sẽ bay xa nhất với tầm xa xấp xỉ $25{,}51\\text{ km}$.</p>"
    },
    "practiceProblem": {
      "title": "Bài tập tự rèn luyện: Tính góc bắn để trúng mục tiêu",
      "problem": "Với khẩu pháo trên ($v_0 = 500\\text{ m/s}, g = 9{,}8\\text{ m/s}^2$), muốn bắn trúng một mục tiêu ở cùng mặt đất cách vị trí đặt pháo một khoảng $22000\\text{ m}$, pháo thủ cần chỉnh góc bắn $\\alpha$ bằng bao nhiêu độ (làm tròn đến độ)?",
      "solution": "<p><b>Hướng dẫn giải chi tiết của Thầy Sáng:</b></p>\n                <p>Ta có phương trình tầm xa:</p>\n                $$x = \\dfrac{v_0^2 \\sin 2\\alpha}{g} \\Leftrightarrow 22000 = \\dfrac{500^2 \\cdot \\sin 2\\alpha}{9{,}8}$$\n                $$\\Leftrightarrow \\sin 2\\alpha = \\dfrac{22000 \\times 9{,}8}{250000} = 0{,}8624$$\n                <p>Sử dụng máy tính cầm tay giải phương trình $\\sin 2\\alpha = 0{,}8624$:</p>\n                $$2\\alpha \\approx 59^\\circ 35' \\quad \\text{hoặc} \\quad 2\\alpha \\approx 180^\\circ - 59^\\circ 35' = 120^\\circ 25'$$\n                $$\\Rightarrow \\alpha \\approx 29^\\circ 48' \\approx 30^\\circ \\quad \\text{hoặc} \\quad \\alpha \\approx 60^\\circ 12' \\approx 60^\\circ$$\n                <p>Vậy pháo thủ có thể chọn góc bắn góc thấp $\\alpha \\approx 30^\\circ$ hoặc góc cao $\\alpha \\approx 60^\\circ$.</p>"
    }
  },
  "sections": [
    {
      "id": "sec1",
      "num": "1",
      "title": "Khái niệm phương trình tương đương",
      "subsections": [
        {
          "key": "a",
          "title": "Khái niệm hai phương trình tương đương",
          "summary": "Hai phương trình được gọi là tương đương khi chúng có cùng tập nghiệm. Kí hiệu f(x) = 0 <=> g(x) = 0. Hai phương trình vô nghiệm luôn tương đương nhau.",
          "audioUrl": "assets/audio/b11_4_sec1a.mp3",
          "audioScript": "Mục 1. Tiểu mục a: Khái niệm hai phương trình tương đương...",
          "contentHtml": "<div class=\"theory-box p-3 bg-white rounded border-start border-4 border-primary shadow-sm mb-3\">\n                          <h4 class=\"text-primary fw-bold\"><i class=\"fa-solid fa-bookmark\"></i> Định nghĩa hai phương trình tương đương (SGK trang 31)</h4>\n                          <ul class=\"mb-2\">\n                            <li>Hai phương trình được gọi là <b>tương đương</b> khi chúng có <b>cùng tập nghiệm</b>.</li>\n                            <li>Nếu phương trình $f(x) = 0$ tương đương với phương trình $g(x) = 0$ thì ta viết:\n                              <div class=\"text-center my-2\"><span class=\"fs-5 fw-bold text-success\">$$f(x) = 0 \\Leftrightarrow g(x) = 0$$</span></div>\n                            </li>\n                          </ul>\n                          <div class=\"alert alert-warning py-2 px-3 mb-0\">\n                            <i class=\"fa-solid fa-triangle-exclamation\"></i> <b>Chú ý quan trọng:</b> Hai phương trình cùng <b>vô nghiệm</b> luôn được coi là tương đương với nhau (vì tập nghiệm của chúng đều là tập rỗng $\\emptyset$).\n                          </div>\n                        </div>",
          "svgDiagram": "<div class=\"text-center my-3\">\n                          <svg viewBox=\"0 0 540 180\" style=\"max-width:100%; height:auto; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0;\">\n                            <!-- Tập hợp S1 -->\n                            <ellipse cx=\"160\" cy=\"90\" rx=\"100\" ry=\"60\" fill=\"#3b82f6\" fill-opacity=\"0.15\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n                            <text x=\"160\" y=\"55\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#1e40af\" text-anchor=\"middle\">Tập nghiệm S₁</text>\n                            <text x=\"160\" y=\"85\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#334155\" text-anchor=\"middle\">2x + 6 = 0</text>\n                            <circle cx=\"160\" cy=\"115\" r=\"4\" fill=\"#dc2626\"/>\n                            <text x=\"175\" y=\"119\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">x = -3</text>\n                            \n                            <!-- Dấu tương đương -->\n                            <text x=\"270\" y=\"98\" font-family=\"sans-serif\" font-size=\"28\" font-weight=\"bold\" fill=\"#059669\" text-anchor=\"middle\">⟺</text>\n                            <text x=\"270\" y=\"130\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#059669\" text-anchor=\"middle\">S₁ = S₂</text>\n\n                            <!-- Tập hợp S2 -->\n                            <ellipse cx=\"380\" cy=\"90\" rx=\"100\" ry=\"60\" fill=\"#10b981\" fill-opacity=\"0.15\" stroke=\"#059669\" stroke-width=\"2\"/>\n                            <text x=\"380\" y=\"55\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#065f46\" text-anchor=\"middle\">Tập nghiệm S₂</text>\n                            <text x=\"380\" y=\"85\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#334155\" text-anchor=\"middle\">x² + 6x + 9 = 0</text>\n                            <circle cx=\"380\" cy=\"115\" r=\"4\" fill=\"#dc2626\"/>\n                            <text x=\"395\" y=\"119\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">x = -3</text>\n                          </svg>\n                        </div>",
          "pois": [
            {
              "time": 0.35,
              "question": "Hai phương trình f(x) = 0 và g(x) = 0 được gọi là tương đương khi nào?",
              "options": [
                "Khi chúng có cùng tập xác định",
                "Khi chúng có cùng tập nghiệm",
                "Khi đồ thị của chúng cắt nhau",
                "Khi f(x) và g(x) có cùng bậc"
              ],
              "correctIndex": 1,
              "explanation": "Theo định nghĩa SGK trang 31, hai phương trình được gọi là tương đương khi chúng có cùng tập nghiệm."
            },
            {
              "time": 0.7,
              "question": "Khẳng định nào sau đây là ĐÚNG về hai phương trình vô nghiệm?",
              "options": [
                "Hai phương trình cùng vô nghiệm luôn tương đương nhau",
                "Hai phương trình cùng vô nghiệm không bao giờ tương đương nhau",
                "Chỉ tương đương khi chúng có cùng tập xác định",
                "Chỉ tương đương khi chúng là phương trình bậc hai"
              ],
              "correctIndex": 0,
              "explanation": "Vì hai phương trình vô nghiệm đều có tập nghiệm là tập rỗng S = ∅, nên theo định nghĩa chúng có cùng tập nghiệm, do đó luôn tương đương nhau."
            }
          ],
          "workedExample": {
            "title": "Ví dụ 1 (SGK trang 31): Xét sự tương đương của hai phương trình",
            "problem": "Hai phương trình sau có tương đương không: $2x + 6 = 0$ và $x^2 + 6x + 9 = 0$?",
            "solution": "<p><b>Lời giải chi tiết chuẩn SGK:</b></p>\n                            <ul>\n                              <li>Giải phương trình thứ nhất: $2x + 6 = 0 \\Leftrightarrow 2x = -6 \\Leftrightarrow x = -3$.<br>\n                                  Do đó tập nghiệm của phương trình thứ nhất là $S_1 = \\{-3\\}$.</li>\n                              <li>Giải phương trình thứ hai: $x^2 + 6x + 9 = 0 \\Leftrightarrow (x+3)^2 = 0 \\Leftrightarrow x = -3$.<br>\n                                  Do đó tập nghiệm của phương trình thứ hai là $S_2 = \\{-3\\}$.</li>\n                            </ul>\n                            <p><b>Kết luận:</b> Vì $S_1 = S_2 = \\{-3\\}$ (có cùng tập nghiệm), nên hai phương trình trên <b>tương đương</b> với nhau.</p>"
          },
          "practiceProblem": {
            "title": "Luyện tập 1 (SGK trang 32): Xét sự tương đương kèm điều kiện xác định",
            "problem": "Xét sự tương đương của hai phương trình sau: $\\dfrac{x-1}{x+1} = 0$ và $x^2 - 1 = 0$.",
            "solution": "<p><b>Hướng dẫn giải chi tiết của Thầy Sáng:</b></p>\n                            <ul>\n                              <li>Xét phương trình (1): $\\dfrac{x-1}{x+1} = 0$.<br>\n                                  Điều kiện xác định: $x + 1 \\neq 0 \\Leftrightarrow x \\neq -1$.<br>\n                                  Với điều kiện đó: $x - 1 = 0 \\Leftrightarrow x = 1$ (thỏa mãn điều kiện).<br>\n                                  Tập nghiệm: $S_1 = \\{1\\}$.</li>\n                              <li>Xét phương trình (2): $x^2 - 1 = 0 \\Leftrightarrow x^2 = 1 \\Leftrightarrow x = 1$ hoặc $x = -1$.<br>\n                                  Tập nghiệm: $S_2 = \\{-1; 1\\}$.</li>\n                            </ul>\n                            <p><b>Kết luận:</b> Vì $S_1 \\neq S_2$ (tập nghiệm khác nhau do nghiệm $x = -1$ bị loại ở phương trình 1), nên hai phương trình trên <b>không tương đương</b>.</p>"
          }
        },
        {
          "key": "b",
          "title": "Các phép biến đổi tương đương",
          "summary": "Để giải phương trình ta thực hiện các phép biến đổi không làm thay đổi điều kiện xác định: cộng/trừ cùng một biểu thức, hoặc nhân/chia với một biểu thức luôn khác 0.",
          "audioUrl": "assets/audio/b11_4_sec1b.mp3",
          "audioScript": "Mục 1. Tiểu mục b: Các phép biến đổi tương đương...",
          "contentHtml": "<div class=\"theory-box p-3 bg-white rounded border-start border-4 border-success shadow-sm mb-3\">\n                          <h4 class=\"text-success fw-bold\"><i class=\"fa-solid fa-scale-balanced\"></i> Hai phép biến đổi tương đương cơ bản (SGK trang 32)</h4>\n                          <p>Nếu thực hiện các phép biến đổi sau đây trên một phương trình mà <b>không làm thay đổi điều kiện xác định</b> của nó thì ta được một phương trình mới tương đương với phương trình đã cho:</p>\n                          <div class=\"row g-3\">\n                            <div class=\"col-md-6\">\n                              <div class=\"p-3 bg-light rounded border border-primary h-100\">\n                                <h6 class=\"fw-bold text-primary\"><i class=\"fa-solid fa-plus-minus\"></i> a) Cộng hoặc trừ hai vế</h6>\n                                <p class=\"mb-1\">Cộng hoặc trừ hai vế với cùng một biểu thức $h(x)$:</p>\n                                <div class=\"text-center fw-bold text-primary\">$$f(x) = g(x) \\Leftrightarrow f(x) + h(x) = g(x) + h(x)$$</div>\n                              </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                              <div class=\"p-3 bg-light rounded border border-success h-100\">\n                                <h6 class=\"fw-bold text-success\"><i class=\"fa-solid fa-xmark\"></i> b) Nhân hoặc chia hai vế</h6>\n                                <p class=\"mb-1\">Nhân hoặc chia hai vế với số khác 0 hoặc biểu thức $h(x) \\neq 0$:</p>\n                                <div class=\"text-center fw-bold text-success\">$$f(x) = g(x) \\Leftrightarrow f(x)h(x) = g(x)h(x) \\quad (h(x) \\neq 0)$$</div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>",
          "svgDiagram": "<div class=\"text-center my-3\">\n                          <svg viewBox=\"0 0 540 180\" style=\"max-width:100%; height:auto; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0;\">\n                            <!-- Trụ cân -->\n                            <rect x=\"264\" y=\"50\" width=\"12\" height=\"100\" fill=\"#475569\" rx=\"3\"/>\n                            <polygon points=\"270,40 250,55 290,55\" fill=\"#334155\"/>\n                            <rect x=\"210\" y=\"145\" width=\"120\" height=\"15\" fill=\"#334155\" rx=\"4\"/>\n                            \n                            <!-- Đòn cân thăng bằng -->\n                            <line x1=\"100\" y1=\"50\" x2=\"440\" y2=\"50\" stroke=\"#0284c7\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n                            <circle cx=\"270\" cy=\"50\" r=\"6\" fill=\"#f59e0b\"/>\n\n                            <!-- Dây treo & Đĩa cân trái -->\n                            <line x1=\"120\" y1=\"50\" x2=\"90\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n                            <line x1=\"120\" y1=\"50\" x2=\"150\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n                            <path d=\"M 80 105 Q 120 120 160 105 Z\" fill=\"#38bdf8\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n                            <rect x=\"100\" y=\"85\" width=\"40\" height=\"20\" fill=\"#2563eb\" rx=\"4\"/>\n                            <text x=\"120\" y=\"99\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">f(x)</text>\n\n                            <!-- Dây treo & Đĩa cân phải -->\n                            <line x1=\"420\" y1=\"50\" x2=\"390\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n                            <line x1=\"420\" y1=\"50\" x2=\"450\" y2=\"105\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n                            <path d=\"M 380 105 Q 420 120 460 105 Z\" fill=\"#38bdf8\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n                            <rect x=\"400\" y=\"85\" width=\"40\" height=\"20\" fill=\"#16a34a\" rx=\"4\"/>\n                            <text x=\"420\" y=\"99\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">g(x)</text>\n\n                            <!-- Chú thích quy tắc biến đổi -->\n                            <text x=\"270\" y=\"25\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#0369a1\" text-anchor=\"middle\">CÂN BẰNG PHƯƠNG TRÌNH TƯƠNG ĐƯƠNG</text>\n                            <text x=\"270\" y=\"172\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#64748b\" text-anchor=\"middle\">+ h(x) cả 2 vế  hoặc  × h(x) (với h(x) ≠ 0)</text>\n                          </svg>\n                        </div>",
          "pois": [
            {
              "time": 0.35,
              "question": "Khi nhân cả hai vế của phương trình f(x) = g(x) với biểu thức h(x), điều kiện bắt buộc để thu được phương trình tương đương là gì?",
              "options": [
                "h(x) phải là số dương",
                "h(x) phải luôn khác 0 trên tập xác định",
                "h(x) phải là một đa thức bậc nhất",
                "Không cần điều kiện gì"
              ],
              "correctIndex": 1,
              "explanation": "Nếu nhân với biểu thức có thể bằng 0, ta có thể bổ sung thêm các nghiệm làm cho h(x) = 0 (gọi là nghiệm ngoại lai), làm thay đổi tập nghiệm của phương trình ban đầu."
            },
            {
              "time": 0.7,
              "question": "Phép biến đổi bình phương hai vế phương trình √(x - 1) = 2x - 3 mà không đặt điều kiện 2x - 3 ≥ 0 dẫn đến phương trình nào?",
              "options": [
                "Phương trình tương đương",
                "Phương trình hệ quả (có thể có nghiệm ngoại lai)",
                "Phương trình vô nghiệm",
                "Phương trình đồng nhất"
              ],
              "correctIndex": 1,
              "explanation": "Bình phương hai vế khi chưa biết chắc cả hai vế cùng dấu chỉ là phép biến đổi hệ quả (dấu =>), cần phải thử lại nghiệm vào phương trình ban đầu để loại nghiệm ngoại lai."
            }
          ],
          "workedExample": {
            "title": "Ví dụ mẫu: Biến đổi tương đương giải phương trình chứa căn",
            "problem": "Giải phương trình: $x + \\sqrt{x-2} = 2 + \\sqrt{x-2}$.",
            "solution": "<p><b>Lời giải chi tiết chuẩn Thầy Sáng:</b></p>\n                            <ul>\n                              <li>Điều kiện xác định của phương trình là: $x - 2 \\ge 0 \\Leftrightarrow x \\ge 2$.</li>\n                              <li>Với điều kiện $x \\ge 2$, ta trừ cả hai vế cho biểu thức $\\sqrt{x-2}$ (phép biến đổi tương đương không làm thay đổi điều kiện xác định):\n                                $$x + \\sqrt{x-2} = 2 + \\sqrt{x-2} \\Leftrightarrow x = 2$$\n                              </li>\n                              <li>Kiểm tra lại: Giá trị $x = 2$ thỏa mãn điều kiện xác định $x \\ge 2$.</li>\n                            </ul>\n                            <p><b>Kết luận:</b> Phương trình có nghiệm duy nhất là $x = 2$.</p>"
          },
          "practiceProblem": {
            "title": "Bài tập tự rèn luyện: Phân tích phép biến đổi làm mất nghiệm / sinh nghiệm ngoại lai",
            "problem": "Cho phương trình $x(x-2) = 3(x-2)$. Nếu chia cả hai vế cho $(x-2)$ để được $x = 3$ thì phép biến đổi đó có tương đương không? Vì sao?",
            "solution": "<p><b>Hướng dẫn giải chi tiết của Thầy Sáng:</b></p>\n                            <ul>\n                              <li>Phép chia cả hai vế cho $(x-2)$ <b>không phải</b> là phép biến đổi tương đương, vì biểu thức $(x-2)$ có thể nhận giá trị bằng 0 (khi $x = 2$).</li>\n                              <li>Hậu quả của phép chia này là làm <b>mất nghiệm $x = 2$</b> của phương trình ban đầu!</li>\n                              <li><b>Cách giải tương đương đúng đắn:</b>\n                                $$x(x-2) = 3(x-2) \\Leftrightarrow x(x-2) - 3(x-2) = 0 \\Leftrightarrow (x-2)(x-3) = 0 \\Leftrightarrow x = 2 \\text{ hoặc } x = 3$$\n                              </li>\n                            </ul>\n                            <p><b>Bài học:</b> Tuyệt đối không chia hai vế của phương trình cho một biểu thức chứa ẩn khi chưa chắc chắn biểu thức đó luôn khác 0.</p>"
          }
        }
      ]
    },
    {
      "id": "sec2",
      "num": "2",
      "title": "Phương trình sin x = m",
      "audioUrl": "assets/audio/b11_4_sec2.mp3",
      "audioScript": "Mục 2. Phương trình sin x bằng m...",
      "contentHtml": "<div class=\"theory-box p-3 bg-white rounded border-start border-4 border-primary shadow-sm mb-3\">\n                  <h4 class=\"text-primary fw-bold\"><i class=\"fa-solid fa-wave-square\"></i> Công thức nghiệm của phương trình $\\sin x = m$ (SGK trang 33)</h4>\n                  <ul>\n                    <li>Nếu $|m| > 1$: Phương trình <b>vô nghiệm</b> vì $-1 \\le \\sin x \\le 1$ với mọi $x \\in \\mathbb{R}$.</li>\n                    <li>Nếu $|m| \\le 1$: Tồn tại duy nhất một góc $\\alpha \\in \\left[-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right]$ sao cho $\\sin\\alpha = m$. Khi đó:\n                      <div class=\"p-3 my-2 bg-light rounded border border-primary text-center\">\n                        <span class=\"fs-5 fw-bold text-primary\">\n                          $$\\sin x = m \\Leftrightarrow \\sin x = \\sin\\alpha \\Leftrightarrow \\left[\\begin{array}{l} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{array}\\right. \\quad (k \\in \\mathbb{Z})$$\n                        </span>\n                      </div>\n                    </li>\n                    <li>Theo đơn vị độ: $\\sin x = \\sin\\alpha^\\circ \\Leftrightarrow x = \\alpha^\\circ + k360^\\circ$ hoặc $x = 180^\\circ - \\alpha^\\circ + k360^\\circ$.</li>\n                    <li>Nếu $m$ không phải góc đặc biệt, ta dùng kí hiệu $\\arcsin m$: $x = \\arcsin m + k2\\pi$ hoặc $x = \\pi - \\arcsin m + k2\\pi$.</li>\n                  </ul>\n                  <div class=\"alert alert-info py-2 px-3 mb-0\">\n                    <i class=\"fa-solid fa-star text-warning\"></i> <b>Ba trường hợp đặc biệt cần ghi nhớ:</b>\n                    <ul class=\"mb-0 mt-1\">\n                      <li>$\\sin x = 0 \\Leftrightarrow x = k\\pi \\quad (k \\in \\mathbb{Z})$</li>\n                      <li>$\\sin x = 1 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$</li>\n                      <li>$\\sin x = -1 \\Leftrightarrow x = -\\dfrac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$</li>\n                    </ul>\n                  </div>\n                </div>",
      "svgDiagram": "<div class=\"text-center my-3\">\n                  <svg viewBox=\"0 0 680 240\" style=\"max-width:100%; height:auto; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0;\">\n                    <!-- Nửa trái: Đường tròn lượng giác nghiệm của sin x = 1/2 -->\n                    <g transform=\"translate(140, 120)\">\n                      <circle cx=\"0\" cy=\"0\" r=\"80\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n                      <line x1=\"-95\" y1=\"0\" x2=\"95\" y2=\"0\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                      <line x1=\"0\" y1=\"95\" x2=\"0\" y2=\"-95\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                      <text x=\"85\" y=\"15\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#334155\">A(1,0)</text>\n                      <text x=\"-5\" y=\"-88\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#334155\">y</text>\n                      <text x=\"90\" y=\"-5\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#334155\">x</text>\n                      \n                      <!-- Đường thẳng y = 1/2 -->\n                      <line x1=\"-85\" y1=\"-40\" x2=\"85\" y2=\"-40\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/>\n                      <text x=\"-15\" y=\"-43\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">m=1/2</text>\n\n                      <!-- Điểm M(pi/6) -->\n                      <line x1=\"0\" y1=\"0\" x2=\"69.28\" y2=\"-40\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n                      <circle cx=\"69.28\" cy=\"-40\" r=\"4.5\" fill=\"#2563eb\"/>\n                      <text x=\"75\" y=\"-43\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\">M (π/6)</text>\n\n                      <!-- Điểm M'(5pi/6) -->\n                      <line x1=\"0\" y1=\"0\" x2=\"-69.28\" y2=\"-40\" stroke=\"#059669\" stroke-width=\"2\"/>\n                      <circle cx=\"-69.28\" cy=\"-40\" r=\"4.5\" fill=\"#059669\"/>\n                      <text x=\"-120\" y=\"-43\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#059669\">M' (5π/6)</text>\n                      <text x=\"0\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">Hình 1.19: Nghiệm trên đường tròn</text>\n                    </g>\n\n                    <!-- Nửa phải: Đồ thị hàm số y = sin x cắt đường y = 1/2 -->\n                    <g transform=\"translate(320, 120)\">\n                      <line x1=\"0\" y1=\"0\" x2=\"340\" y2=\"0\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                      <line x1=\"50\" y1=\"80\" x2=\"50\" y2=\"-80\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                      <text x=\"330\" y=\"-8\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#334155\">x</text>\n                      <text x=\"40\" y=\"-70\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#334155\">y</text>\n                      <text x=\"40\" y=\"15\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#64748b\">O</text>\n\n                      <!-- Đồ thị sóng sin -->\n                      <path d=\"M 0 0 C 25 -60, 45 -60, 70 0 C 95 60, 115 60, 140 0 C 165 -60, 185 -60, 210 0 C 235 60, 255 60, 280 0 C 305 -60, 325 -60, 340 0\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n                      <text x=\"285\" y=\"-45\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">y = sin x</text>\n\n                      <!-- Đường y = 1/2 -->\n                      <line x1=\"0\" y1=\"-25\" x2=\"340\" y2=\"-25\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n                      <text x=\"5\" y=\"-30\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">y = 1/2</text>\n\n                      <!-- Các giao điểm -->\n                      <circle cx=\"58\" cy=\"-25\" r=\"3.5\" fill=\"#dc2626\"/>\n                      <circle cx=\"82\" cy=\"-25\" r=\"3.5\" fill=\"#dc2626\"/>\n                      <circle cx=\"198\" cy=\"-25\" r=\"3.5\" fill=\"#dc2626\"/>\n                      <circle cx=\"222\" cy=\"-25\" r=\"3.5\" fill=\"#dc2626\"/>\n                      <text x=\"170\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">Hình 1.20: Giao điểm lặp lại chu kì 2π</text>\n                    </g>\n                  </svg>\n                </div>",
      "pois": [
        {
          "time": 0.35,
          "question": "Phương trình sin x = -√2 có bao nhiêu nghiệm thực?",
          "options": [
            "Vô nghiệm",
            "1 nghiệm",
            "2 họ nghiệm",
            "Vô số nghiệm"
          ],
          "correctIndex": 0,
          "explanation": "Vì |-√2| ≈ 1,414 > 1 (nằm ngoài đoạn [-1; 1] của tập giá trị hàm sin), nên phương trình vô nghiệm."
        },
        {
          "time": 0.7,
          "question": "Công thức nghiệm của phương trình sin x = 0 là gì?",
          "options": [
            "x = k2π",
            "x = kπ",
            "x = π/2 + kπ",
            "x = π/2 + k2π"
          ],
          "correctIndex": 1,
          "explanation": "sin x = 0 tại hai điểm gốc A(1, 0) và A'(-1, 0) trên đường tròn lượng giác, gộp lại thành x = kπ (k ∈ ℤ)."
        }
      ],
      "workedExample": {
        "title": "Ví dụ 2 & 3 (SGK trang 33): Giải phương trình sin cơ bản và mở rộng",
        "problem": "Giải các phương trình lượng giác sau:\n                    <ol type=\"a\">\n                      <li>$\\sin x = -\\dfrac{\\sqrt{3}}{2}$</li>\n                      <li>$\\sin 2x = \\sin(60^\\circ - 3x)$</li>\n                    </ol>",
        "solution": "<p><b>Lời giải chi tiết chuẩn SGK:</b></p>\n                    <p><b>a)</b> Vì $-\\dfrac{\\sqrt{3}}{2} = \\sin\\left(-\\dfrac{\\pi}{3}\\right)$ nên phương trình đã cho tương đương với:</p>\n                    $$\\sin x = \\sin\\left(-\\dfrac{\\pi}{3}\\right) \\Leftrightarrow \\left[\\begin{array}{l} x = -\\dfrac{\\pi}{3} + k2\\pi \\\\ x = \\pi - \\left(-\\dfrac{\\pi}{3}\\right) + k2\\pi = \\dfrac{4\\pi}{3} + k2\\pi \\end{array}\\right. \\quad (k \\in \\mathbb{Z})$$\n                    <p><b>b)</b> Phương trình ở đơn vị độ: $\\sin 2x = \\sin(60^\\circ - 3x)$</p>\n                    $$\\Leftrightarrow \\left[\\begin{array}{l} 2x = 60^\\circ - 3x + k360^\\circ \\\\ 2x = 180^\\circ - (60^\\circ - 3x) + k360^\\circ \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l} 5x = 60^\\circ + k360^\\circ \\\\ -x = 120^\\circ + k360^\\circ \\end{array}\\right.$$\n                    $$\\Leftrightarrow \\left[\\begin{array}{l} x = 12^\\circ + k72^\\circ \\\\ x = -120^\\circ - k360^\\circ \\quad (\\text{hay } x = -120^\\circ + k360^\\circ) \\end{array}\\right. \\quad (k \\in \\mathbb{Z})$$"
      },
      "practiceProblem": {
        "title": "Luyện tập 2 (SGK trang 34): Luyện tập giải phương trình sin",
        "problem": "Giải các phương trình lượng giác sau:\n                    <ol type=\"a\">\n                      <li>$\\sin x = -\\dfrac{\\sqrt{2}}{2}$</li>\n                      <li>$\\sin 3x = -\\sin 5x$</li>\n                    </ol>",
        "solution": "<p><b>Hướng dẫn giải chi tiết của Thầy Sáng:</b></p>\n                    <p><b>a)</b> Vì $-\\dfrac{\\sqrt{2}}{2} = \\sin\\left(-\\dfrac{\\pi}{4}\\right)$ nên:</p>\n                    $$\\sin x = \\sin\\left(-\\dfrac{\\pi}{4}\\right) \\Leftrightarrow \\left[\\begin{array}{l} x = -\\dfrac{\\pi}{4} + k2\\pi \\\\ x = \\pi - \\left(-\\dfrac{\\pi}{4}\\right) + k2\\pi = \\dfrac{5\\pi}{4} + k2\\pi \\end{array}\\right. \\quad (k \\in \\mathbb{Z})$$\n                    <p><b>b)</b> Áp dụng tính chất góc đối $-\\sin 5x = \\sin(-5x)$:</p>\n                    $$\\sin 3x = \\sin(-5x) \\Leftrightarrow \\left[\\begin{array}{l} 3x = -5x + k2\\pi \\\\ 3x = \\pi - (-5x) + k2\\pi = \\pi + 5x + k2\\pi \\end{array}\\right.$$\n                    $$\\Leftrightarrow \\left[\\begin{array}{l} 8x = k2\\pi \\\\ -2x = \\pi + k2\\pi \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l} x = \\dfrac{k\\pi}{4} \\\\ x = -\\dfrac{\\pi}{2} - k\\pi \\quad (\\text{hay } x = -\\dfrac{\\pi}{2} + k\\pi) \\end{array}\\right. \\quad (k \\in \\mathbb{Z})$$"
      }
    },
    {
      "id": "sec3",
      "num": "3",
      "title": "Phương trình cos x = m",
      "audioUrl": "assets/audio/b11_4_sec3.mp3",
      "audioScript": "Mục 3. Phương trình cos x bằng m...",
      "contentHtml": "<div class=\"theory-box p-3 bg-white rounded border-start border-4 border-success shadow-sm mb-3\">\n                  <h4 class=\"text-success fw-bold\"><i class=\"fa-solid fa-circle-notch\"></i> Công thức nghiệm của phương trình $\\cos x = m$ (SGK trang 34 - 35)</h4>\n                  <ul>\n                    <li>Nếu $|m| > 1$: Phương trình <b>vô nghiệm</b>.</li>\n                    <li>Nếu $|m| \\le 1$: Tồn tại duy nhất một góc $\\alpha \\in [0; \\pi]$ sao cho $\\cos\\alpha = m$. Khi đó:\n                      <div class=\"p-3 my-2 bg-light rounded border border-success text-center\">\n                        <span class=\"fs-5 fw-bold text-success\">\n                          $$\\cos x = m \\Leftrightarrow \\cos x = \\cos\\alpha \\Leftrightarrow x = \\pm\\alpha + k2\\pi \\quad (k \\in \\mathbb{Z})$$\n                        </span>\n                      </div>\n                    </li>\n                    <li>Theo đơn vị độ: $\\cos x = \\cos\\alpha^\\circ \\Leftrightarrow x = \\pm\\alpha^\\circ + k360^\\circ \\quad (k \\in \\mathbb{Z})$.</li>\n                    <li>Dùng $\\arccos m$ khi $m$ không phải góc đặc biệt: $x = \\pm\\arccos m + k2\\pi$.</li>\n                  </ul>\n                  <div class=\"alert alert-info py-2 px-3 mb-0\">\n                    <i class=\"fa-solid fa-star text-warning\"></i> <b>Ba trường hợp đặc biệt của côsin:</b>\n                    <ul class=\"mb-0 mt-1\">\n                      <li>$\\cos x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi \\quad (k \\in \\mathbb{Z})$</li>\n                      <li>$\\cos x = 1 \\Leftrightarrow x = k2\\pi \\quad (k \\in \\mathbb{Z})$</li>\n                      <li>$\\cos x = -1 \\Leftrightarrow x = \\pi + k2\\pi \\quad (k \\in \\mathbb{Z})$</li>\n                    </ul>\n                  </div>\n                </div>",
      "svgDiagram": "<div class=\"text-center my-3\">\n                  <svg viewBox=\"0 0 680 240\" style=\"max-width:100%; height:auto; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0;\">\n                    <!-- Nửa trái: Đường tròn lượng giác nghiệm cos x = -1/2 -->\n                    <g transform=\"translate(140, 120)\">\n                      <circle cx=\"0\" cy=\"0\" r=\"80\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n                      <line x1=\"-95\" y1=\"0\" x2=\"95\" y2=\"0\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                      <line x1=\"0\" y1=\"95\" x2=\"0\" y2=\"-95\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                      \n                      <!-- Đường thẳng đứng x = -1/2 -->\n                      <line x1=\"-40\" y1=\"-85\" x2=\"-40\" y2=\"85\" stroke=\"#dc2626\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/>\n                      <text x=\"-48\" y=\"15\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" fill=\"#dc2626\">-1/2</text>\n\n                      <!-- Điểm M(2pi/3) -->\n                      <line x1=\"0\" y1=\"0\" x2=\"-40\" y2=\"-69.28\" stroke=\"#059669\" stroke-width=\"2\"/>\n                      <circle cx=\"-40\" cy=\"-69.28\" r=\"4.5\" fill=\"#059669\"/>\n                      <text x=\"-95\" y=\"-72\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#059669\">M (2π/3)</text>\n\n                      <!-- Điểm M'(-2pi/3) đối xứng qua Ox -->\n                      <line x1=\"0\" y1=\"0\" x2=\"-40\" y2=\"69.28\" stroke=\"#2563eb\" stroke-width=\"2\"/>\n                      <circle cx=\"-40\" cy=\"69.28\" r=\"4.5\" fill=\"#2563eb\"/>\n                      <text x=\"-100\" y=\"78\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#2563eb\">M' (-2π/3)</text>\n                      <text x=\"0\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">Hình 1.22: Hai nghiệm đối xứng qua trục Ox</text>\n                    </g>\n\n                    <!-- Nửa phải: Đồ thị hàm số y = cos x cắt đường y = -1/2 -->\n                    <g transform=\"translate(320, 120)\">\n                      <line x1=\"0\" y1=\"0\" x2=\"340\" y2=\"0\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                      <line x1=\"50\" y1=\"80\" x2=\"50\" y2=\"-80\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                      <text x=\"330\" y=\"-8\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#334155\">x</text>\n                      <text x=\"40\" y=\"-70\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#334155\">y</text>\n                      <text x=\"40\" y=\"15\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#64748b\">O</text>\n\n                      <!-- Đồ thị sóng cos (đỉnh tại x=50, y=-50) -->\n                      <path d=\"M 0 35 C 20 0, 35 -50, 50 -50 C 65 -50, 80 0, 100 35 C 120 70, 140 70, 160 35 C 180 0, 200 -50, 220 -50 C 240 -50, 260 0, 280 35 C 300 70, 320 70, 340 35\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2.5\"/>\n                      <text x=\"225\" y=\"-55\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#16a34a\">y = cos x</text>\n\n                      <!-- Đường y = -1/2 -->\n                      <line x1=\"0\" y1=\"25\" x2=\"340\" y2=\"25\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n                      <text x=\"5\" y=\"20\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">y = -1/2</text>\n\n                      <!-- Các giao điểm -->\n                      <circle cx=\"95\" cy=\"25\" r=\"3.5\" fill=\"#dc2626\"/>\n                      <circle cx=\"165\" cy=\"25\" r=\"3.5\" fill=\"#dc2626\"/>\n                      <circle cx=\"265\" cy=\"25\" r=\"3.5\" fill=\"#dc2626\"/>\n                      <text x=\"170\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">Hình 1.23: Hoành độ giao điểm x = ±2π/3 + k2π</text>\n                    </g>\n                  </svg>\n                </div>",
      "pois": [
        {
          "time": 0.35,
          "question": "Hai họ nghiệm x = α + k2π và x = -α + k2π của phương trình cos x = cos α có tính chất hình học gì trên đường tròn lượng giác?",
          "options": [
            "Đối xứng nhau qua trục hoành Ox",
            "Đối xứng nhau qua trục tung Oy",
            "Đối xứng nhau qua gốc tọa độ O",
            "Trùng nhau thành một điểm"
          ],
          "correctIndex": 0,
          "explanation": "Hai điểm M(α) và M'(-α) có cùng hoành độ cos α và có tung độ đối nhau sin(-α) = -sin α nên đối xứng nhau qua trục hoành Ox."
        },
        {
          "time": 0.7,
          "question": "Phương trình cos x = 1 có công thức nghiệm là:",
          "options": [
            "x = π/2 + k2π",
            "x = π + k2π",
            "x = k2π",
            "x = kπ"
          ],
          "correctIndex": 2,
          "explanation": "cos x = 1 duy nhất tại điểm gốc A(1; 0) ứng với góc x = 0 + k2π = k2π (k ∈ ℤ)."
        }
      ],
      "workedExample": {
        "title": "Ví dụ 5 & 6 (SGK trang 35): Giải phương trình cosin cơ bản và mở rộng",
        "problem": "Giải các phương trình sau:\n                    <ol type=\"a\">\n                      <li>$\\cos x = -\\dfrac{\\sqrt{3}}{2}$</li>\n                      <li>$\\cos 2x = \\cos(45^\\circ - x)$</li>\n                    </ol>",
        "solution": "<p><b>Lời giải chi tiết chuẩn SGK:</b></p>\n                    <p><b>a)</b> Vì $-\\dfrac{\\sqrt{3}}{2} = \\cos\\dfrac{5\\pi}{6}$ nên phương trình tương đương với:</p>\n                    $$\\cos x = \\cos\\dfrac{5\\pi}{6} \\Leftrightarrow x = \\pm\\dfrac{5\\pi}{6} + k2\\pi \\quad (k \\in \\mathbb{Z})$$\n                    <p><b>b)</b> Phương trình ở đơn vị độ: $\\cos 2x = \\cos(45^\\circ - x)$</p>\n                    $$\\Leftrightarrow \\left[\\begin{array}{l} 2x = 45^\\circ - x + k360^\\circ \\\\ 2x = -(45^\\circ - x) + k360^\\circ \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l} 3x = 45^\\circ + k360^\\circ \\\\ x = -45^\\circ + k360^\\circ \\end{array}\\right.$$\n                    $$\\Leftrightarrow \\left[\\begin{array}{l} x = 15^\\circ + k120^\\circ \\\\ x = -45^\\circ + k360^\\circ \\end{array}\\right. \\quad (k \\in \\mathbb{Z})$$"
      },
      "practiceProblem": {
        "title": "Luyện tập 3 (SGK trang 35): Luyện tập giải phương trình cos",
        "problem": "Giải các phương trình sau:\n                    <ol type=\"a\">\n                      <li>$2\\cos x = -\\sqrt{2}$</li>\n                      <li>$\\cos 3x - \\sin 5x = 0$</li>\n                    </ol>",
        "solution": "<p><b>Hướng dẫn giải chi tiết của Thầy Sáng:</b></p>\n                    <p><b>a)</b> $2\\cos x = -\\sqrt{2} \\Leftrightarrow \\cos x = -\\dfrac{\\sqrt{2}}{2} = \\cos\\dfrac{3\\pi}{4} \\Leftrightarrow x = \\pm\\dfrac{3\\pi}{4} + k2\\pi \\quad (k \\in \\mathbb{Z})$.</p>\n                    <p><b>b)</b> $\\cos 3x - \\sin 5x = 0 \\Leftrightarrow \\cos 3x = \\sin 5x$.<br>\n                    Sử dụng công thức hai góc phụ nhau $\\sin 5x = \\cos\\left(\\dfrac{\\pi}{2} - 5x\\right)$:</p>\n                    $$\\cos 3x = \\cos\\left(\\dfrac{\\pi}{2} - 5x\\right) \\Leftrightarrow \\left[\\begin{array}{l} 3x = \\dfrac{\\pi}{2} - 5x + k2\\pi \\\\ 3x = -\\left(\\dfrac{\\pi}{2} - 5x\\right) + k2\\pi \\end{array}\\right.$$\n                    $$\\Leftrightarrow \\left[\\begin{array}{l} 8x = \\dfrac{\\pi}{2} + k2\\pi \\\\ -2x = -\\dfrac{\\pi}{2} + k2\\pi \\end{array}\\right. \\Leftrightarrow \\left[\\begin{array}{l} x = \\dfrac{\\pi}{16} + \\dfrac{k\\pi}{4} \\\\ x = \\dfrac{\\pi}{4} - k\\pi \\quad (\\text{hay } x = \\dfrac{\\pi}{4} + k\\pi) \\end{array}\\right. \\quad (k \\in \\mathbb{Z})$$"
      }
    },
    {
      "id": "sec4",
      "num": "4",
      "title": "Phương trình tan x = m",
      "audioUrl": "assets/audio/b11_4_sec4.mp3",
      "audioScript": "Mục 4. Phương trình tan x bằng m...",
      "contentHtml": "<div class=\"theory-box p-3 bg-white rounded border-start border-4 border-warning shadow-sm mb-3\">\n                  <h4 class=\"text-warning fw-bold\"><i class=\"fa-solid fa-chart-line\"></i> Công thức nghiệm của phương trình $\\tan x = m$ (SGK trang 36)</h4>\n                  <ul>\n                    <li>Phương trình $\\tan x = m$ <b>luôn có nghiệm với mọi số thực $m \\in \\mathbb{R}$</b> vì tập giá trị của hàm tang là toàn bộ $\\mathbb{R}$.</li>\n                    <li>Với mọi $m \\in \\mathbb{R}$, luôn tồn tại duy nhất một góc $\\alpha \\in \\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ sao cho $\\tan\\alpha = m$. Khi đó:\n                      <div class=\"p-3 my-2 bg-light rounded border border-warning text-center\">\n                        <span class=\"fs-5 fw-bold text-dark\">\n                          $$\\tan x = m \\Leftrightarrow \\tan x = \\tan\\alpha \\Leftrightarrow x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$$\n                        </span>\n                      </div>\n                    </li>\n                    <li>Theo đơn vị độ: $\\tan x = \\tan\\alpha^\\circ \\Leftrightarrow x = \\alpha^\\circ + k180^\\circ \\quad (k \\in \\mathbb{Z})$.</li>\n                    <li>Nếu $m$ không là góc đặc biệt, dùng $\\arctan m$: $x = \\arctan m + k\\pi$.</li>\n                  </ul>\n                  <div class=\"alert alert-warning py-2 px-3 mb-0\">\n                    <i class=\"fa-solid fa-triangle-exclamation\"></i> <b>Lưu ý quan trọng:</b> Điều kiện xác định của $\\tan x$ là $\\cos x \\neq 0 \\Leftrightarrow x \\neq \\dfrac{\\pi}{2} + k\\pi$. Nghiệm của phương trình tang có chu kì là <b>$k\\pi$</b> (không phải $k2\\pi$).\n                  </div>\n                </div>",
      "svgDiagram": "<div class=\"text-center my-3\">\n                  <svg viewBox=\"0 0 680 230\" style=\"max-width:100%; height:auto; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0;\">\n                    <!-- Hệ trục tọa độ -->\n                    <line x1=\"40\" y1=\"115\" x2=\"640\" y2=\"115\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                    <line x1=\"340\" y1=\"210\" x2=\"340\" y2=\"20\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                    <text x=\"635\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#334155\">x</text>\n                    <text x=\"350\" y=\"25\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#334155\">y</text>\n                    <text x=\"325\" y=\"130\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#64748b\">O</text>\n\n                    <!-- Các đường tiệm cận đứng nét đứt màu đỏ cam -->\n                    <line x1=\"140\" y1=\"25\" x2=\"140\" y2=\"205\" stroke=\"#f97316\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n                    <line x1=\"240\" y1=\"25\" x2=\"240\" y2=\"205\" stroke=\"#f97316\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n                    <line x1=\"440\" y1=\"25\" x2=\"440\" y2=\"205\" stroke=\"#f97316\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n                    <line x1=\"540\" y1=\"25\" x2=\"540\" y2=\"205\" stroke=\"#f97316\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n                    <text x=\"245\" y=\"40\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#f97316\">-π/2</text>\n                    <text x=\"445\" y=\"40\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#f97316\">π/2</text>\n\n                    <!-- Các nhánh đồ thị y = tan x -->\n                    <path d=\"M 250 200 Q 280 150 290 115 T 330 30\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n                    <path d=\"M 350 200 Q 380 150 390 115 T 430 30\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n                    <path d=\"M 450 200 Q 480 150 490 115 T 530 30\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n\n                    <!-- Đường y = 1 -->\n                    <line x1=\"40\" y1=\"80\" x2=\"640\" y2=\"80\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n                    <text x=\"45\" y=\"73\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">y = 1</text>\n\n                    <!-- Các giao điểm tại pi/4 + kpi -->\n                    <circle cx=\"215\" cy=\"80\" r=\"4\" fill=\"#dc2626\"/>\n                    <circle cx=\"415\" cy=\"80\" r=\"4\" fill=\"#dc2626\"/>\n                    <text x=\"415\" y=\"98\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">π/4</text>\n                    <circle cx=\"615\" cy=\"80\" r=\"4\" fill=\"#dc2626\"/>\n                    <text x=\"590\" y=\"98\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">5π/4</text>\n\n                    <text x=\"340\" y=\"225\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">Hình 1.24: Giao điểm của đường y = 1 và đồ thị y = tan x cách đều chu kì π</text>\n                  </svg>\n                </div>",
      "pois": [
        {
          "time": 0.35,
          "question": "Phương trình tan x = 2026 có nghiệm không?",
          "options": [
            "Không có nghiệm vì 2026 > 1",
            "Luôn có nghiệm vì tập giá trị của hàm số tang là R",
            "Chỉ có nghiệm khi x là góc vuông",
            "Chỉ có nghiệm duy nhất"
          ],
          "correctIndex": 1,
          "explanation": "Khác với sin và cos (bị chặn trong [-1; 1]), hàm tang có tập giá trị là R, nên phương trình tan x = m luôn có nghiệm với mọi số thực m."
        },
        {
          "time": 0.7,
          "question": "Chu kì của họ nghiệm trong công thức x = α + kπ của phương trình tan x = tan α là bao nhiêu?",
          "options": [
            "k2π (360°)",
            "kπ (180°)",
            "kπ/2 (90°)",
            "k4π (720°)"
          ],
          "correctIndex": 1,
          "explanation": "Hàm số tang tuần hoàn với chu kì π, do đó họ nghiệm của phương trình tang luôn có dạng x = α + kπ (k ∈ ℤ)."
        }
      ],
      "workedExample": {
        "title": "Ví dụ 7 (SGK trang 36): Giải phương trình tang cơ bản",
        "problem": "Giải các phương trình lượng giác sau:\n                    <ol type=\"a\">\n                      <li>$\\tan x = -\\sqrt{3}$</li>\n                      <li>$\\tan x = 2$</li>\n                    </ol>",
        "solution": "<p><b>Lời giải chi tiết chuẩn SGK:</b></p>\n                    <p><b>a)</b> Vì $-\\sqrt{3} = \\tan\\left(-\\dfrac{\\pi}{3}\\right)$ nên phương trình tương đương với:</p>\n                    $$\\tan x = \\tan\\left(-\\dfrac{\\pi}{3}\\right) \\Leftrightarrow x = -\\dfrac{\\pi}{3} + k\\pi \\quad (k \\in \\mathbb{Z})$$\n                    <p><b>b)</b> Vì 2 không phải giá trị lượng giác của các góc đặc biệt, ta gọi $\\alpha \\in \\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$ là góc thỏa mãn $\\tan\\alpha = 2$ (tức $\\alpha = \\arctan 2$). Khi đó:</p>\n                    $$\\tan x = 2 \\Leftrightarrow x = \\arctan 2 + k\\pi \\quad (k \\in \\mathbb{Z})$$"
      },
      "practiceProblem": {
        "title": "Luyện tập 4 (SGK trang 36): Luyện tập giải phương trình tang",
        "problem": "Giải các phương trình sau:\n                    <ol type=\"a\">\n                      <li>$\\sqrt{3}\\tan 2x = -1$</li>\n                      <li>$\\tan 3x + \\tan 5x = 0$</li>\n                    </ol>",
        "solution": "<p><b>Hướng dẫn giải chi tiết của Thầy Sáng:</b></p>\n                    <p><b>a)</b> $\\sqrt{3}\\tan 2x = -1 \\Leftrightarrow \\tan 2x = -\\dfrac{1}{\\sqrt{3}} = \\tan\\left(-\\dfrac{\\pi}{6}\\right)$.<br>\n                    $$\\Leftrightarrow 2x = -\\dfrac{\\pi}{6} + k\\pi \\Leftrightarrow x = -\\dfrac{\\pi}{12} + \\dfrac{k\\pi}{2} \\quad (k \\in \\mathbb{Z})$$\n                    <p><b>b)</b> $\\tan 3x + \\tan 5x = 0 \\Leftrightarrow \\tan 5x = -\\tan 3x = \\tan(-3x)$.<br>\n                    Điều kiện xác định: $\\cos 5x \\neq 0$ và $\\cos 3x \\neq 0$.<br>\n                    Khi đó: $5x = -3x + k\\pi \\Leftrightarrow 8x = k\\pi \\Leftrightarrow x = \\dfrac{k\\pi}{8} \\quad (k \\in \\mathbb{Z})$.<br>\n                    Kết hợp điều kiện xác định để loại bỏ các điểm làm mẫu số bằng 0.</p>"
      }
    },
    {
      "id": "sec5",
      "num": "5",
      "title": "Phương trình cot x = m",
      "audioUrl": "assets/audio/b11_4_sec5.mp3",
      "audioScript": "Mục 5. Phương trình cotang x bằng m...",
      "contentHtml": "<div class=\"theory-box p-3 bg-white rounded border-start border-4 border-danger shadow-sm mb-3\">\n                  <h4 class=\"text-danger fw-bold\"><i class=\"fa-solid fa-calculator\"></i> Công thức nghiệm của phương trình $\\cot x = m$ (SGK trang 37)</h4>\n                  <ul>\n                    <li>Phương trình $\\cot x = m$ <b>luôn có nghiệm với mọi $m \\in \\mathbb{R}$</b>.</li>\n                    <li>Với mọi $m \\in \\mathbb{R}$, tồn tại duy nhất một góc $\\alpha \\in (0; \\pi)$ sao cho $\\cot\\alpha = m$. Khi đó:\n                      <div class=\"p-3 my-2 bg-light rounded border border-danger text-center\">\n                        <span class=\"fs-5 fw-bold text-danger\">\n                          $$\\cot x = m \\Leftrightarrow \\cot x = \\cot\\alpha \\Leftrightarrow x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$$\n                        </span>\n                      </div>\n                    </li>\n                    <li>Theo đơn vị độ: $\\cot x = \\cot\\alpha^\\circ \\Leftrightarrow x = \\alpha^\\circ + k180^\\circ \\quad (k \\in \\mathbb{Z})$.</li>\n                    <li>Nếu $m$ không là góc đặc biệt, dùng $\\text{arccot}\\, m$: $x = \\text{arccot}\\, m + k\\pi$.</li>\n                  </ul>\n                  <div class=\"alert alert-danger py-2 px-3 mb-0\">\n                    <i class=\"fa-solid fa-triangle-exclamation\"></i> <b>Lưu ý:</b> Điều kiện xác định của $\\cot x$ là $\\sin x \\neq 0 \\Leftrightarrow x \\neq k\\pi \\ (k \\in \\mathbb{Z})$.\n                  </div>\n                </div>",
      "svgDiagram": "<div class=\"text-center my-3\">\n                  <svg viewBox=\"0 0 680 230\" style=\"max-width:100%; height:auto; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0;\">\n                    <!-- Hệ trục tọa độ -->\n                    <line x1=\"40\" y1=\"115\" x2=\"640\" y2=\"115\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                    <line x1=\"140\" y1=\"210\" x2=\"140\" y2=\"20\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                    <text x=\"635\" y=\"105\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#334155\">x</text>\n                    <text x=\"150\" y=\"25\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#334155\">y</text>\n                    <text x=\"125\" y=\"130\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#64748b\">O</text>\n\n                    <!-- Tiệm cận đứng x = k*pi nét đứt -->\n                    <line x1=\"280\" y1=\"25\" x2=\"280\" y2=\"205\" stroke=\"#0284c7\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n                    <line x1=\"420\" y1=\"25\" x2=\"420\" y2=\"205\" stroke=\"#0284c7\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n                    <line x1=\"560\" y1=\"25\" x2=\"560\" y2=\"205\" stroke=\"#0284c7\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/>\n                    <text x=\"285\" y=\"40\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0284c7\">π</text>\n                    <text x=\"425\" y=\"40\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0284c7\">2π</text>\n\n                    <!-- Đồ thị nghịch biến y = cot x -->\n                    <path d=\"M 155 30 Q 195 100 210 115 T 265 200\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\"/>\n                    <path d=\"M 295 30 Q 335 100 350 115 T 405 200\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\"/>\n                    <path d=\"M 435 30 Q 475 100 490 115 T 545 200\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"2.5\"/>\n\n                    <!-- Đường y = -1 -->\n                    <line x1=\"40\" y1=\"150\" x2=\"640\" y2=\"150\" stroke=\"#059669\" stroke-width=\"2\"/>\n                    <text x=\"45\" y=\"145\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#059669\">y = -1</text>\n\n                    <!-- Các giao điểm tại 3pi/4 + kpi -->\n                    <circle cx=\"245\" cy=\"150\" r=\"4\" fill=\"#059669\"/>\n                    <text x=\"245\" y=\"170\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#059669\">3π/4</text>\n                    <circle cx=\"385\" cy=\"150\" r=\"4\" fill=\"#059669\"/>\n                    <text x=\"385\" y=\"170\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#059669\">7π/4</text>\n\n                    <text x=\"340\" y=\"225\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">Hình 1.25: Đồ thị y = cot x cắt đường y = -1 tại các điểm hoành độ x = 3π/4 + kπ</text>\n                  </svg>\n                </div>",
      "pois": [
        {
          "time": 0.35,
          "question": "Điều kiện xác định của phương trình cot x = m là gì?",
          "options": [
            "cos x ≠ 0 <=> x ≠ π/2 + kπ",
            "sin x ≠ 0 <=> x ≠ kπ",
            "x ≠ k2π",
            "x ∈ R không cần điều kiện"
          ],
          "correctIndex": 1,
          "explanation": "cot x = cos x / sin x, do đó phương trình xác định khi mẫu số sin x ≠ 0 <=> x ≠ kπ (k ∈ ℤ)."
        },
        {
          "time": 0.7,
          "question": "Khoảng giá trị duy nhất của góc α trong định nghĩa công thức nghiệm cot x = cot α là khoảng nào?",
          "options": [
            "[-π/2; π/2]",
            "(-π/2; π/2)",
            "[0; π]",
            "(0; π)"
          ],
          "correctIndex": 3,
          "explanation": "Theo định nghĩa SGK trang 37, với mỗi m ∈ ℝ, luôn tồn tại duy nhất một góc α thuộc khoảng mở (0; π) sao cho cot α = m."
        }
      ],
      "workedExample": {
        "title": "Ví dụ 8 (SGK trang 37): Giải phương trình côtang cơ bản",
        "problem": "Giải các phương trình sau:\n                    <ol type=\"a\">\n                      <li>$\\cot x = -\\sqrt{3}$</li>\n                      <li>$\\cot x = 5$</li>\n                    </ol>",
        "solution": "<p><b>Lời giải chi tiết chuẩn SGK:</b></p>\n                    <p><b>a)</b> Vì $-\\sqrt{3} = \\cot\\left(-\\dfrac{\\pi}{6}\\right)$ (hoặc $\\cot\\dfrac{5\\pi}{6}$) nên phương trình tương đương:</p>\n                    $$\\cot x = \\cot\\left(-\\dfrac{\\pi}{6}\\right) \\Leftrightarrow x = -\\dfrac{\\pi}{6} + k\\pi \\quad (k \\in \\mathbb{Z})$$\n                    <p><b>b)</b> Vì 5 không phải giá trị đặc biệt, gọi $\\alpha \\in (0; \\pi)$ là góc thỏa mãn $\\cot\\alpha = 5$. Khi đó:</p>\n                    $$\\cot x = 5 \\Leftrightarrow \\cot x = \\cot\\alpha \\Leftrightarrow x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$$"
      },
      "practiceProblem": {
        "title": "Luyện tập 5 (SGK trang 37): Luyện tập giải phương trình côtang",
        "problem": "Giải các phương trình sau:\n                    <ol type=\"a\">\n                      <li>$\\cot x = 1$</li>\n                      <li>$\\sqrt{3}\\cot x + 1 = 0$</li>\n                    </ol>",
        "solution": "<p><b>Hướng dẫn giải chi tiết của Thầy Sáng:</b></p>\n                    <p><b>a)</b> $\\cot x = 1 = \\cot\\dfrac{\\pi}{4} \\Leftrightarrow x = \\dfrac{\\pi}{4} + k\\pi \\quad (k \\in \\mathbb{Z})$.</p>\n                    <p><b>b)</b> $\\sqrt{3}\\cot x + 1 = 0 \\Leftrightarrow \\cot x = -\\dfrac{1}{\\sqrt{3}} = \\cot\\left(-\\dfrac{\\pi}{3}\\right) \\Leftrightarrow x = -\\dfrac{\\pi}{3} + k\\pi \\quad (k \\in \\mathbb{Z})$.</p>"
      }
    },
    {
      "id": "sec6",
      "num": "6",
      "title": "Sử dụng máy tính cầm tay tìm góc khi biết giá trị lượng giác",
      "audioUrl": "assets/audio/b11_4_sec6.mp3",
      "audioScript": "Mục 6. Sử dụng máy tính cầm tay tìm một góc khi biết giá trị lượng giác...",
      "contentHtml": "<div class=\"theory-box p-3 bg-white rounded border-start border-4 border-info shadow-sm mb-3\">\n                  <h4 class=\"text-info fw-bold\"><i class=\"fa-solid fa-gamepad\"></i> Hướng dẫn thao tác trên Casio fx-580VN X / fx-880BTG (SGK trang 38)</h4>\n                  <p>Các phím $\\sin^{-1}, \\cos^{-1}, \\tan^{-1}$ được dùng để tìm số đo (độ hoặc radian) của một góc khi biết giá trị lượng giác của nó.</p>\n                  <div class=\"table-responsive my-2\">\n                    <table class=\"table table-bordered align-middle\">\n                      <thead class=\"table-primary text-center\">\n                        <tr>\n                          <th style=\"width: 25%;\">Bước thực hiện</th>\n                          <th style=\"width: 40%;\">Thao tác phím bấm</th>\n                          <th style=\"width: 35%;\">Ý nghĩa / Màn hình hiển thị</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td><b>Bước 1: Chọn đơn vị góc</b></td>\n                          <td>\n                            • Độ: <kbd>SHIFT</kbd> <kbd>MENU</kbd> <kbd>2</kbd> <kbd>1</kbd><br>\n                            • Radian: <kbd>SHIFT</kbd> <kbd>MENU</kbd> <kbd>2</kbd> <kbd>2</kbd>\n                          </td>\n                          <td>Màn hình hiện chữ nhỏ <b>D</b> (Degree) hoặc <b>R</b> (Radian).</td>\n                        </tr>\n                        <tr>\n                          <td><b>Bước 2: Tìm góc $\\alpha$</b></td>\n                          <td>\n                            • Sin: <kbd>SHIFT</kbd> <kbd>sin</kbd> <kbd>m</kbd> <kbd>=</kbd><br>\n                            • Côsin: <kbd>SHIFT</kbd> <kbd>cos</kbd> <kbd>m</kbd> <kbd>=</kbd><br>\n                            • Tang: <kbd>SHIFT</kbd> <kbd>tan</kbd> <kbd>m</kbd> <kbd>=</kbd>\n                          </td>\n                          <td>Màn hình trả về góc $\\alpha$ (số thập phân).</td>\n                        </tr>\n                        <tr>\n                          <td><b>Bước 3: Đổi sang Độ-Phút-Giây</b></td>\n                          <td>Ấn phím độ phút giây: <kbd>° ' \"</kbd></td>\n                          <td>Chuyển kết quả sang dạng $a^\\circ b' c''$.</td>\n                        </tr>\n                        <tr class=\"table-warning\">\n                          <td><b>* Chú ý đặc biệt cho Côtang</b></td>\n                          <td>Ấn: <kbd>SHIFT</kbd> <kbd>tan</kbd> <kbd>(</kbd> <kbd>1</kbd> <kbd>÷</kbd> <kbd>m</kbd> <kbd>)</kbd> <kbd>=</kbd></td>\n                          <td>Vì $\\cot\\alpha = m \\Leftrightarrow \\tan\\alpha = \\dfrac{1}{m}$.</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>",
      "svgDiagram": "<div class=\"text-center my-3\">\n                  <svg viewBox=\"0 0 540 220\" style=\"max-width:100%; height:auto; background:#1e293b; border-radius:12px; border:1px solid #334155;\">\n                    <!-- Vỏ máy tính -->\n                    <rect x=\"15\" y=\"15\" width=\"510\" height=\"190\" rx=\"12\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2\"/>\n                    \n                    <!-- Màn hình LCD -->\n                    <rect x=\"35\" y=\"30\" width=\"470\" height=\"65\" rx=\"6\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"2\"/>\n                    <text x=\"45\" y=\"48\" font-family=\"monospace\" font-size=\"11\" fill=\"#047857\">D   Math</text>\n                    <text x=\"45\" y=\"72\" font-family=\"monospace\" font-size=\"14\" font-weight=\"bold\" fill=\"#065f46\">sin⁻¹(0.58)</text>\n                    <text x=\"490\" y=\"82\" font-family=\"monospace\" font-size=\"16\" font-weight=\"bold\" fill=\"#065f46\" text-anchor=\"end\">35°27'2.04\"</text>\n\n                    <!-- Hàng phím chức năng -->\n                    <!-- Phím SHIFT (màu vàng) -->\n                    <rect x=\"35\" y=\"110\" width=\"60\" height=\"35\" rx=\"5\" fill=\"#d97706\" stroke=\"#b45309\"/>\n                    <text x=\"65\" y=\"132\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">SHIFT</text>\n\n                    <!-- Phím OPTN -->\n                    <rect x=\"110\" y=\"110\" width=\"60\" height=\"35\" rx=\"5\" fill=\"#334155\" stroke=\"#475569\"/>\n                    <text x=\"140\" y=\"132\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">OPTN</text>\n\n                    <!-- Phím sin (có nhãn sin^-1 ở trên) -->\n                    <rect x=\"185\" y=\"110\" width=\"60\" height=\"35\" rx=\"5\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                    <text x=\"215\" y=\"132\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\">sin</text>\n                    <text x=\"215\" y=\"105\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#f59e0b\" text-anchor=\"middle\">sin⁻¹</text>\n\n                    <!-- Phím cos -->\n                    <rect x=\"260\" y=\"110\" width=\"60\" height=\"35\" rx=\"5\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                    <text x=\"290\" y=\"132\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\">cos</text>\n                    <text x=\"290\" y=\"105\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#f59e0b\" text-anchor=\"middle\">cos⁻¹</text>\n\n                    <!-- Phím tan -->\n                    <rect x=\"335\" y=\"110\" width=\"60\" height=\"35\" rx=\"5\" fill=\"#1e293b\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n                    <text x=\"365\" y=\"132\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#38bdf8\" text-anchor=\"middle\">tan</text>\n                    <text x=\"365\" y=\"105\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"bold\" fill=\"#f59e0b\" text-anchor=\"middle\">tan⁻¹</text>\n\n                    <!-- Phím độ phút giây -->\n                    <rect x=\"410\" y=\"110\" width=\"95\" height=\"35\" rx=\"5\" fill=\"#0284c7\" stroke=\"#0369a1\"/>\n                    <text x=\"457\" y=\"132\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">° ' \"</text>\n\n                    <!-- Hàng chữ hướng dẫn bấm nhanh -->\n                    <text x=\"270\" y=\"180\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#94a3b8\" text-anchor=\"middle\">Mô phỏng máy tính cầm tay: Bấm [SHIFT] + [sin] + [0.58] + [=] + [° ' \"]</text>\n                  </svg>\n                </div>",
      "pois": [
        {
          "time": 0.35,
          "question": "Để tìm góc khi biết sin α = 0,58 ở đơn vị Radian trên máy Casio fx-580VN X, ta cần làm gì trước khi nhập?",
          "options": [
            "Cài đặt đơn vị góc Radian (SHIFT MENU 2 2)",
            "Bấm MENU 9",
            "Bấm SHIFT 9 3 = =",
            "Không cần cài đặt gì"
          ],
          "correctIndex": 0,
          "explanation": "Máy tính mặc định thường ở đơn vị Độ (D). Muốn kết quả ra Radian, bắt buộc phải chọn đơn vị góc Radian qua phím SHIFT MENU -> 2 (Angle Unit) -> 2 (Radian)."
        },
        {
          "time": 0.7,
          "question": "Để tìm góc α khi biết cot α = -6,18 trên máy tính không có phím cot trực tiếp, ta bấm thao tác nào?",
          "options": [
            "SHIFT sin (-6,18)",
            "SHIFT cos (-6,18)",
            "SHIFT tan (1 / -6,18)",
            "1 / (SHIFT tan (-6,18))"
          ],
          "correctIndex": 2,
          "explanation": "Vì cot α = 1 / tan α <=> tan α = 1 / cot α, ta tìm α bằng cách bấm hàm nghịch đảo SHIFT tan của giá trị (1 / -6,18)."
        }
      ],
      "workedExample": {
        "title": "Ví dụ 9 (SGK trang 38): Sử dụng máy tính cầm tay tìm góc",
        "problem": "Sử dụng máy tính cầm tay, tìm số đo độ và radian của góc $\\alpha$, biết $\\sin\\alpha = 0{,}58$.",
        "solution": "<p><b>Lời giải chi tiết chuẩn SGK:</b></p>\n                    <ul>\n                      <li><b>Số đo độ:</b><br>\n                        • Cài đặt đơn vị độ: <kbd>SHIFT</kbd> <kbd>MENU</kbd> <kbd>2</kbd> <kbd>1</kbd><br>\n                        • Bấm phím: <kbd>SHIFT</kbd> <kbd>sin</kbd> <kbd>0</kbd> <kbd>.</kbd> <kbd>5</kbd> <kbd>8</kbd> <kbd>=</kbd><br>\n                        • Màn hình hiện: $35.45054264^\\circ$. Ấn phím <kbd>° ' \"</kbd> ta được: $\\alpha \\approx 35^\\circ 27' 2''$.\n                      </li>\n                      <li><b>Số đo radian:</b><br>\n                        • Cài đặt đơn vị radian: <kbd>SHIFT</kbd> <kbd>MENU</kbd> <kbd>2</kbd> <kbd>2</kbd><br>\n                        • Bấm phím: <kbd>SHIFT</kbd> <kbd>sin</kbd> <kbd>0</kbd> <kbd>.</kbd> <kbd>5</kbd> <kbd>8</kbd> <kbd>=</kbd><br>\n                        • Màn hình hiện kết quả: $\\alpha \\approx 0{,}61873\\text{ rad}$.\n                      </li>\n                    </ul>"
      },
      "practiceProblem": {
        "title": "Luyện tập 6 (SGK trang 38): Thực hành bấm máy tính cầm tay",
        "problem": "Sử dụng máy tính cầm tay, tìm số đo độ (phút, giây) và radian của góc $\\alpha$, biết:\n                    <ol type=\"a\">\n                      <li>$\\cos\\alpha = -0{,}75$</li>\n                      <li>$\\tan\\alpha = 2{,}46$</li>\n                      <li>$\\cot\\alpha = -6{,}18$</li>\n                    </ol>",
        "solution": "<p><b>Hướng dẫn giải chi tiết của Thầy Sáng:</b></p>\n                    <ul>\n                      <li><b>a) $\\cos\\alpha = -0{,}75$:</b><br>\n                        • Bấm <kbd>SHIFT</kbd> <kbd>cos</kbd> $(-0{,}75) =$: $\\alpha \\approx 138^\\circ 35' 25''$ hoặc $\\alpha \\approx 2{,}4189\\text{ rad}$.</li>\n                      <li><b>b) $\\tan\\alpha = 2{,}46$:</b><br>\n                        • Bấm <kbd>SHIFT</kbd> <kbd>tan</kbd> $(2{,}46) =$: $\\alpha \\approx 67^\\circ 52' 52''$ hoặc $\\alpha \\approx 1{,}1847\\text{ rad}$.</li>\n                      <li><b>c) $\\cot\\alpha = -6{,}18$:</b><br>\n                        • Bấm <kbd>SHIFT</kbd> <kbd>tan</kbd> $(1 / -6{,}18) =$: máy ra góc âm $-9^\\circ 11' 29''$. Vì góc của côtang thuộc $(0; \\pi)$, ta cộng thêm $180^\\circ$ (hoặc $\\pi$):<br>\n                        $\\alpha \\approx 180^\\circ - 9^\\circ 11' 29'' = 170^\\circ 48' 31''$ hay $\\alpha \\approx 2{,}9812\\text{ rad}$.</li>\n                    </ul>"
      }
    }
  ],
  "realworldWrapup": {
    "title": "Chốt kiến thức then chốt & Ứng dụng thực tế",
    "audioUrl": "assets/audio/b11_4_wrapup.mp3",
    "recap": "Tổng hợp bảng vàng công thức nghiệm 4 phương trình lượng giác cơ bản, trường hợp đặc biệt và giải quyết trọn vẹn bài toán nòng pháo tầm xa cùng các pha chiếu sáng của Mặt Trăng.",
    "summaryHtml": "<div class=\"wrapup-box p-3 bg-white rounded border-start border-4 border-primary shadow-sm mb-4\">\n              <h4 class=\"text-primary fw-bold text-center mb-3\"><i class=\"fa-solid fa-crown text-warning\"></i> BẢNG VÀNG CÔNG THỨC NGHIỆM 4 PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN</h4>\n              <div class=\"table-responsive\">\n                <table class=\"table table-bordered table-hover align-middle text-center mb-0\">\n                  <thead class=\"table-dark\">\n                    <tr>\n                      <th style=\"width: 18%;\">Phương trình</th>\n                      <th style=\"width: 22%;\">Điều kiện có nghiệm</th>\n                      <th style=\"width: 32%;\">Công thức nghiệm (Radian)</th>\n                      <th style=\"width: 28%;\">Trường hợp đặc biệt</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td class=\"fw-bold text-primary fs-5\">$$\\sin x = m$$</td>\n                      <td>$$|m| \\le 1$$<br><span class=\"badge bg-danger\">|m| > 1: Vô nghiệm</span></td>\n                      <td class=\"text-start\">\n                        $$\\left[\\begin{array}{l} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{array}\\right.$$\n                        <small class=\"text-muted\">($\\sin\\alpha = m, k \\in \\mathbb{Z}$)</small>\n                      </td>\n                      <td class=\"text-start small\">\n                        • $\\sin x = 0 \\Leftrightarrow x = k\\pi$<br>\n                        • $\\sin x = 1 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k2\\pi$<br>\n                        • $\\sin x = -1 \\Leftrightarrow x = -\\dfrac{\\pi}{2} + k2\\pi$\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"fw-bold text-success fs-5\">$$\\cos x = m$$</td>\n                      <td>$$|m| \\le 1$$<br><span class=\"badge bg-danger\">|m| > 1: Vô nghiệm</span></td>\n                      <td class=\"text-start\">\n                        $$x = \\pm\\alpha + k2\\pi$$\n                        <small class=\"text-muted\">($\\cos\\alpha = m, k \\in \\mathbb{Z}$)</small>\n                      </td>\n                      <td class=\"text-start small\">\n                        • $\\cos x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi$<br>\n                        • $\\cos x = 1 \\Leftrightarrow x = k2\\pi$<br>\n                        • $\\cos x = -1 \\Leftrightarrow x = \\pi + k2\\pi$\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"fw-bold text-warning fs-5\">$$\\tan x = m$$</td>\n                      <td><span class=\"badge bg-success\">Luôn có nghiệm</span><br>với mọi $m \\in \\mathbb{R}$</td>\n                      <td class=\"text-start\">\n                        $$x = \\alpha + k\\pi$$\n                        <small class=\"text-muted\">($\\tan\\alpha = m, k \\in \\mathbb{Z}$)</small>\n                      </td>\n                      <td class=\"text-start small\">\n                        • Điều kiện: $x \\neq \\dfrac{\\pi}{2} + k\\pi$<br>\n                        • $\\tan x = 0 \\Leftrightarrow x = k\\pi$<br>\n                        • $\\tan x = \\pm 1 \\Leftrightarrow x = \\pm\\dfrac{\\pi}{4} + k\\pi$\n                      </td>\n                    </tr>\n                    <tr>\n                      <td class=\"fw-bold text-danger fs-5\">$$\\cot x = m$$</td>\n                      <td><span class=\"badge bg-success\">Luôn có nghiệm</span><br>với mọi $m \\in \\mathbb{R}$</td>\n                      <td class=\"text-start\">\n                        $$x = \\alpha + k\\pi$$\n                        <small class=\"text-muted\">($\\cot\\alpha = m, k \\in \\mathbb{Z}$)</small>\n                      </td>\n                      <td class=\"text-start small\">\n                        • Điều kiện: $x \\neq k\\pi$<br>\n                        • $\\cot x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi$<br>\n                        • $\\cot x = \\pm 1 \\Leftrightarrow x = \\pm\\dfrac{\\pi}{4} + k\\pi$\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>",
    "solutionHtml": "<div class=\"application-box p-3 bg-white rounded border-start border-4 border-success shadow-sm\">\n              <h4 class=\"text-success fw-bold\"><i class=\"fa-solid fa-moon text-warning\"></i> ỨNG DỤNG THỰC TẾ: CÁC PHA CỦA MẶT TRĂNG (SGK TRANG 35 - 36)</h4>\n              <p>Khi Mặt Trăng quay quanh Trái Đất, tỉ lệ diện tích bề mặt $F$ của Mặt Trăng được Mặt Trời chiếu sáng nhìn thấy từ Trái Đất được tính bởi công thức:</p>\n              <div class=\"text-center my-2 p-2 bg-light rounded border border-success\">\n                <span class=\"fs-5 fw-bold text-success\">$$F = \\dfrac{1}{2}(1 - \\cos\\alpha)$$</span>\n                <span class=\"text-muted small ms-2\">($0^\\circ \\le \\alpha \\le 360^\\circ$, với $\\alpha$ là góc giữa Mặt Trời, Trái Đất và Mặt Trăng).</span>\n              </div>\n              <div class=\"table-responsive my-2\">\n                <table class=\"table table-bordered text-center align-middle\">\n                  <thead class=\"table-secondary\">\n                    <tr>\n                      <th>Pha Mặt Trăng</th>\n                      <th>Tỉ lệ chiếu sáng $F$</th>\n                      <th>Phương trình lượng giác</th>\n                      <th>Góc $\\alpha$ tương ứng</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td><b>Trăng mới (Không trăng)</b></td>\n                      <td>$F = 0$</td>\n                      <td>$\\dfrac{1}{2}(1 - \\cos\\alpha) = 0 \\Leftrightarrow \\cos\\alpha = 1$</td>\n                      <td><span class=\"badge bg-primary fs-6\">$\\alpha = 0^\\circ$</span> hoặc $360^\\circ$</td>\n                    </tr>\n                    <tr>\n                      <td><b>Trăng lưỡi liềm</b></td>\n                      <td>$F = 0{,}25$</td>\n                      <td>$\\dfrac{1}{2}(1 - \\cos\\alpha) = 0{,}25 \\Leftrightarrow \\cos\\alpha = 0{,}5$</td>\n                      <td><span class=\"badge bg-info fs-6\">$\\alpha = 60^\\circ$</span> hoặc $300^\\circ$</td>\n                    </tr>\n                    <tr>\n                      <td><b>Trăng bán nguyệt</b></td>\n                      <td>$F = 0{,}5$</td>\n                      <td>$\\dfrac{1}{2}(1 - \\cos\\alpha) = 0{,}5 \\Leftrightarrow \\cos\\alpha = 0$</td>\n                      <td><span class=\"badge bg-warning text-dark fs-6\">$\\alpha = 90^\\circ$</span> hoặc $270^\\circ$</td>\n                    </tr>\n                    <tr>\n                      <td><b>Trăng tròn (Rằm)</b></td>\n                      <td>$F = 1$</td>\n                      <td>$\\dfrac{1}{2}(1 - \\cos\\alpha) = 1 \\Leftrightarrow \\cos\\alpha = -1$</td>\n                      <td><span class=\"badge bg-success fs-6\">$\\alpha = 180^\\circ$</span></td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>"
  },
  "examFormatPractice": {
    "title": "Bài tập trắc nghiệm củng cố (Chuẩn cấu trúc 2026 Bộ GD&ĐT)",
    "durationMinutes": 20,
    "totalPoints": 10,
    "part1MultipleChoice": [
      {
        "id": "mc-11-4-1",
        "question": "Nghiệm của phương trình $\\sin x = \\dfrac{1}{2}$ là:",
        "prompt": "Nghiệm của phương trình $\\sin x = \\dfrac{1}{2}$ là:",
        "options": [
          "$x = \\pm\\dfrac{\\pi}{6} + k2\\pi \\quad (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\dfrac{5\\pi}{6} + k2\\pi \\quad (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{6} + k\\pi \\quad (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{3} + k2\\pi$ hoặc $x = \\dfrac{2\\pi}{3} + k2\\pi \\quad (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 1,
        "correctAnswer": "B",
        "hint": "Góc nhọn có sin bằng 1/2 là π/6. Áp dụng công thức nghiệm bù nhau của phương trình sin.",
        "explain": "Ta có $\\dfrac{1}{2} = \\sin\\dfrac{\\pi}{6}$. Do đó $\\sin x = \\sin\\dfrac{\\pi}{6} \\Leftrightarrow x = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\pi - \\dfrac{\\pi}{6} + k2\\pi = \\dfrac{5\\pi}{6} + k2\\pi \\ (k \\in \\mathbb{Z})$. Đáp án đúng là B."
      },
      {
        "id": "mc-11-4-2",
        "question": "Công thức nghiệm của phương trình $\\cos 2x = -1$ là:",
        "prompt": "Công thức nghiệm của phương trình $\\cos 2x = -1$ là:",
        "options": [
          "$x = \\pi + k2\\pi \\quad (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k2\\pi \\quad (k \\in \\mathbb{Z})$",
          "$x = k\\pi \\quad (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k\\pi \\quad (k \\in \\mathbb{Z})$"
        ],
        "correctIndex": 3,
        "correctAnswer": "D",
        "hint": "Trường hợp đặc biệt: cos u = -1 <=> u = π + k2π.",
        "explain": "Ta có $\\cos 2x = -1 \\Leftrightarrow 2x = \\pi + k2\\pi \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$. Đáp án đúng là D."
      },
      {
        "id": "mc-11-4-3",
        "question": "Tập nghiệm của phương trình $\\tan\\left(x - \\dfrac{\\pi}{4}\\right) = 1$ là:",
        "prompt": "Tập nghiệm của phương trình $\\tan\\left(x - \\dfrac{\\pi}{4}\\right) = 1$ là:",
        "options": [
          "$\\left\\{x = \\dfrac{\\pi}{2} + k\\pi \\mid k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{x = k\\pi \\mid k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{x = \\dfrac{\\pi}{4} + k\\pi \\mid k \\in \\mathbb{Z}\\right\\}$",
          "$\\left\\{x = \\dfrac{\\pi}{2} + k2\\pi \\mid k \\in \\mathbb{Z}\\right\\}$"
        ],
        "correctIndex": 0,
        "correctAnswer": "A",
        "hint": "Ta có 1 = tan(π/4). Công thức nghiệm tang có chu kì là kπ.",
        "explain": "Ta có $\\tan\\left(x - \\dfrac{\\pi}{4}\\right) = \\tan\\dfrac{\\pi}{4} \\Leftrightarrow x - \\dfrac{\\pi}{4} = \\dfrac{\\pi}{4} + k\\pi \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$. Đáp án đúng là A."
      },
      {
        "id": "mc-11-4-4",
        "question": "Tìm tất cả các giá trị của tham số $m$ để phương trình $\\sin x = m - 1$ có nghiệm:",
        "prompt": "Tìm tất cả các giá trị của tham số $m$ để phương trình $\\sin x = m - 1$ có nghiệm:",
        "options": [
          "$m \\le 2$",
          "$-1 \\le m \\le 1$",
          "$0 \\le m \\le 2$",
          "$m \\ge 0$"
        ],
        "correctIndex": 2,
        "correctAnswer": "C",
        "hint": "Phương trình sin x = a có nghiệm khi và chỉ khi -1 <= a <= 1.",
        "explain": "Phương trình $\\sin x = m - 1$ có nghiệm khi và chỉ khi: $-1 \\le m - 1 \\le 1 \\Leftrightarrow 0 \\le m \\le 2$. Đáp án đúng là C."
      }
    ],
    "part2TrueFalse": [
      {
        "id": "tf-11-4-1",
        "prompt": "Cho phương trình lượng giác $\\cos\\left(2x + \\dfrac{\\pi}{3}\\right) = -\\dfrac{\\sqrt{3}}{2}$. Xét tính Đúng / Sai của các khẳng định sau:",
        "items": [
          {
            "id": "tf-11-4-1-a",
            "text": "Phương trình đã cho có nghiệm vì $\\left|-\\dfrac{\\sqrt{3}}{2}\\right| \\le 1$.",
            "correct": true,
            "explain": "Đúng vì |-√3/2| = √3/2 ≈ 0,866 ≤ 1."
          },
          {
            "id": "tf-11-4-1-b",
            "text": "Giá trị $x = \\dfrac{\\pi}{6}$ là một nghiệm của phương trình đã cho.",
            "correct": false,
            "explain": "Sai vì cos(2 · π/6 + π/3) = cos(2π/3) = -1/2 ≠ -√3/2."
          },
          {
            "id": "tf-11-4-1-c",
            "text": "Phương trình có hai họ nghiệm là $x = \\dfrac{\\pi}{4} + k\\pi$ và $x = -\\dfrac{7\\pi}{12} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correct": true,
            "explain": "Đúng vì cos(5π/6) = -√3/2. Ta có 2x + π/3 = ±5π/6 + k2π => x = π/4 + kπ hoặc x = -7π/12 + kπ."
          },
          {
            "id": "tf-11-4-1-d",
            "text": "Số nghiệm của phương trình thuộc đoạn $[0; 2\\pi]$ là 4 nghiệm.",
            "correct": true,
            "explain": "Đúng vì mỗi họ nghiệm cách nhau chu kì π, trong đoạn độ dài 2π mỗi họ có 2 nghiệm, tổng là 4 nghiệm."
          }
        ]
      },
      {
        "id": "tf-11-4-2",
        "prompt": "Cho phương trình lượng giác $\\tan x = \\sqrt{3}$. Xét tính Đúng / Sai của các khẳng định sau:",
        "items": [
          {
            "id": "tf-11-4-2-a",
            "text": "Điều kiện xác định của phương trình là $x \\neq \\dfrac{\\pi}{2} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correct": true,
            "explain": "Đúng vì hàm tang xác định khi cos x ≠ 0 <=> x ≠ π/2 + kπ."
          },
          {
            "id": "tf-11-4-2-b",
            "text": "Phương trình có hai họ nghiệm khác nhau có dạng $x = \\pm \\dfrac{\\pi}{3} + k2\\pi$.",
            "correct": false,
            "explain": "Sai vì phương trình tan x = m chỉ có 1 họ nghiệm chu kì π."
          },
          {
            "id": "tf-11-4-2-c",
            "text": "Nghiệm của phương trình đã cho là $x = \\dfrac{\\pi}{3} + k\\pi \\ (k \\in \\mathbb{Z})$.",
            "correct": true,
            "explain": "Đúng vì √3 = tan(π/3) => x = π/3 + kπ."
          },
          {
            "id": "tf-11-4-2-d",
            "text": "Nghiệm dương nhỏ nhất của phương trình là $x = \\dfrac{\\pi}{3}$.",
            "correct": true,
            "explain": "Đúng vì với k = 0 ta có nghiệm dương nhỏ nhất x = π/3."
          }
        ]
      }
    ],
    "part3ShortAnswer": [
      {
        "id": "sa-11-4-1",
        "question": "Một quả đạn pháo được bắn từ mặt đất với vận tốc ban đầu $v_0 = 500\\text{ m/s}$, gia tốc trọng trường $g = 9{,}8\\text{ m/s}^2$. Để quả đạn pháo bắn trúng mục tiêu cách xa $x = 12755\\text{ m}$ (coi mục tiêu ở cùng mặt đất với điểm bắn), góc bắn $\\alpha$ nhỏ nhất (tính bằng độ, $0^\\circ < \\alpha < 45^\\circ$) bằng bao nhiêu độ?",
        "prompt": "Góc bắn nhỏ nhất bằng bao nhiêu độ (điền một số nguyên):",
        "correctAnswer": "15",
        "acceptableAnswers": [
          "15",
          "15 độ",
          "15°"
        ],
        "hint": "Công thức tầm xa: x = (v0² sin 2α) / g.",
        "explain": "Ta có: 12755 = (500² · sin 2α) / 9,8 <=> sin 2α = 0,5 <=> 2α = 30° <=> α = 15°. Vậy góc bắn nhỏ nhất là 15 độ."
      },
      {
        "id": "sa-11-4-2",
        "question": "Số nghiệm của phương trình lượng giác $\\sin 2x = 1$ trên đoạn $[0; 2\\pi]$ là bao nhiêu nghiệm?",
        "prompt": "Số nghiệm trên đoạn [0; 2π] là (điền một số nguyên):",
        "correctAnswer": "2",
        "acceptableAnswers": [
          "2",
          "2 nghiệm"
        ],
        "hint": "sin u = 1 <=> u = π/2 + k2π.",
        "explain": "sin 2x = 1 <=> 2x = π/2 + k2π <=> x = π/4 + kπ (k ∈ ℤ). Với x ∈ [0; 2π] ta có 0 ≤ π/4 + kπ ≤ 2π <=> -1/4 ≤ k ≤ 7/4. Do k ∈ ℤ nên k ∈ {0; 1}. Vậy phương trình có đúng 2 nghiệm là π/4 và 5π/4."
      }
    ]
  }
};

// Global Aliases & Auto-Inject for Compatibility
window.B11_4_DATA = window.LESSON_11_C1_B4_DATA;

if (typeof window !== 'undefined' && window.LESSONS_DATABASE) {
  if (typeof autoInjectLesson === 'function') {
    autoInjectLesson(window.LESSON_11_C1_B4_DATA);
  } else {
    for (var gradeKey in window.LESSONS_DATABASE) {
      if (window.LESSONS_DATABASE[gradeKey] && Array.isArray(window.LESSONS_DATABASE[gradeKey])) {
        var found = window.LESSONS_DATABASE[gradeKey].find(function(l) { return l.id === '11-c1-b4'; });
        if (found) {
          Object.assign(found, window.LESSON_11_C1_B4_DATA);
          found.isReady = true;
        }
      }
    }
  }
}
