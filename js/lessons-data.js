/**
 * DỮ LIỆU BÀI HỌC SỐ MÔN TOÁN THPT (LỚP 10 - 11 - 12)
 * BỘ SÁCH GIÁO KHOA "KẾT NỐI TRI THỨC VỚI CUỘC SỐNG"
 * Biên soạn và chuẩn hóa: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================================
 * Cấu trúc 3 tầng:
 * - Tầng 1: Khối lớp (10, 11, 12)
 * - Tầng 2: Chương / Bài học (Tập 1 & Tập 2)
 * - Tầng 3: Khung tiêu đề các Mục (Mục 1, Mục 2...) và các khung phụ a), b), c)...
 */

const LESSONS_DATABASE = {
  "10": {
    grade: "10",
    gradeTitle: "Toán Lớp 10",
    subtitle: "Chương trình GDPT 2018 • Bộ sách Kết nối tri thức với cuộc sống",
    chapters: [
      {
        id: "c10-1",
        number: "Chương I",
        title: "Mệnh đề và tập hợp",
        volume: 1,
        volumeLabel: "Tập 1",
        lessons: [
          {
            id: "10-c1-b1",
            number: "Bài 1",
            title: "Mệnh đề",
            sections: [
              {
                id: "10-c1-b1-s1",
                num: "1",
                title: "Mệnh đề, mệnh đề chứa biến",
                subsections: [
                  { key: "a", title: "Mệnh đề", summary: "Khái niệm và định nghĩa mệnh đề logic, mệnh đề đúng, mệnh đề sai." },
                  { key: "b", title: "Mệnh đề chứa biến", summary: "Câu khẳng định chứa biến và cách xác định tính đúng sai khi gán giá trị cụ thể cho biến." }
                ]
              },
              {
                id: "10-c1-b1-s2",
                num: "2",
                title: "Mệnh đề phủ định",
                subsections: [
                  { key: "a", title: "Định nghĩa mệnh đề phủ định", summary: "Kí hiệu gạch đầu và mối quan hệ chân trị đúng - sai giữa mệnh đề ban đầu và phủ định." },
                  { key: "b", title: "Cách thành lập mệnh đề phủ định", summary: "Quy tắc thêm hoặc bớt từ phủ định 'không', 'không phải' và ví dụ minh họa." }
                ]
              },
              {
                id: "10-c1-b1-s3",
                num: "3",
                title: "Mệnh đề kéo theo, mệnh đề đảo",
                subsections: [
                  { key: "a", title: "Mệnh đề kéo theo", summary: "Cấu trúc 'Nếu P thì Q' (kí hiệu P => Q), điều kiện cần và điều kiện đủ." },
                  { key: "b", title: "Mệnh đề đảo", summary: "Khái niệm mệnh đề đảo 'Q => P' và phân tích tính đúng sai của mệnh đề đảo." }
                ]
              },
              {
                id: "10-c1-b1-s4",
                num: "4",
                title: "Mệnh đề tương đương",
                subsections: [
                  { key: "a", title: "Định nghĩa mệnh đề tương đương", summary: "Cấu trúc 'P khi và chỉ khi Q' (kí hiệu P <=> Q)." },
                  { key: "b", title: "Điều kiện cần và đủ", summary: "Ý nghĩa toán học của điều kiện cần và đủ trong các định lý hình học và đại số." }
                ]
              },
              {
                id: "10-c1-b1-s5",
                num: "5",
                title: "Kí hiệu với mọi (∀) và tồn tại (∃)",
                subsections: [
                  { key: "a", title: "Kí hiệu với mọi (∀)", summary: "Cách biểu đạt mệnh đề chứa lượng từ 'với mọi' và xét tính đúng sai." },
                  { key: "b", title: "Kí hiệu tồn tại (∃)", summary: "Cách biểu đạt mệnh đề chứa lượng từ 'tồn tại ít nhất' và phủ định của các mệnh đề chứa ∀, ∃." }
                ]
              }
            ]
          },
          {
            id: "10-c1-b2",
            number: "Bài 2",
            title: "Tập hợp và các phép toán trên tập hợp",
            sections: [
              {
                id: "10-c1-b2-s1",
                num: "1",
                title: "Các khái niệm cơ bản về tập hợp",
                subsections: [
                  { key: "a", title: "Tập hợp và phần tử", summary: "Kí hiệu thuộc, không thuộc, cách biểu diễn tập hợp bằng liệt kê hoặc nêu tính chất đặc trưng." },
                  { key: "b", title: "Tập hợp con và tập rỗng", summary: "Khái niệm tập con (A ⊂ B), tập hợp rỗng (∅) và sơ đồ Ven." },
                  { key: "c", title: "Hai tập hợp bằng nhau", summary: "Định nghĩa hai tập hợp bằng nhau khi A ⊂ B và B ⊂ A." }
                ]
              },
              {
                id: "10-c1-b2-s2",
                num: "2",
                title: "Các tập hợp số",
                subsections: [
                  { key: "a", title: "Các tập hợp số đã học", summary: "Quan hệ giữa các tập hợp số tự nhiên N, số nguyên Z, số hữu tỉ Q và số thực R." },
                  { key: "b", title: "Các tập con thường dùng của R", summary: "Khái niệm và biểu diễn trên trục số: khoảng, đoạn, nửa khoảng." }
                ]
              },
              {
                id: "10-c1-b2-s3",
                num: "3",
                title: "Các phép toán trên tập hợp",
                subsections: [
                  { key: "a", title: "Giao của hai tập hợp", summary: "Định nghĩa phép giao (A ∩ B), biểu diễn sơ đồ Ven và tìm giao các khoảng, đoạn." },
                  { key: "b", title: "Hợp của hai tập hợp", summary: "Định nghĩa phép hợp (A ∪ B), biểu diễn sơ đồ Ven và tìm hợp các khoảng, đoạn." },
                  { key: "c", title: "Hiệu và phần bù của hai tập hợp", summary: "Định nghĩa hiệu (A \\ B), phần bù (C_E A) và các bài toán thực tiễn." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-2",
        number: "Chương II",
        title: "Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
        volume: 1,
        volumeLabel: "Tập 1",
        lessons: [
          {
            id: "10-c2-b3",
            number: "Bài 3",
            title: "Bất phương trình bậc nhất hai ẩn",
            sections: [
              {
                id: "10-c2-b3-s1",
                num: "1",
                title: "Khái niệm bất phương trình bậc nhất hai ẩn",
                subsections: [
                  { key: "a", title: "Dạng tổng quát", summary: "Dạng ax + by <= c (hoặc <, >=, >) với a, b không đồng thời bằng 0." },
                  { key: "b", title: "Nghiệm của bất phương trình", summary: "Khái niệm cặp số (x0; y0) là nghiệm của bất phương trình bậc nhất hai ẩn." }
                ]
              },
              {
                id: "10-c2-b3-s2",
                num: "2",
                title: "Biểu diễn miền nghiệm trên mặt phẳng toạ độ",
                subsections: [
                  { key: "a", title: "Đường thẳng bờ của miền nghiệm", summary: "Vẽ đường thẳng ax + by = c chia mặt phẳng toạ độ thành hai nửa mặt phẳng đối nhau." },
                  { key: "b", title: "Quy tắc xác định miền nghiệm", summary: "Phương pháp chọn điểm kiểm tra (thường chọn gốc toạ độ O) và gạch bỏ miền không thích hợp." }
                ]
              }
            ]
          },
          {
            id: "10-c2-b4",
            number: "Bài 4",
            title: "Hệ bất phương trình bậc nhất hai ẩn",
            sections: [
              {
                id: "10-c2-b4-s1",
                num: "1",
                title: "Khái niệm hệ bất phương trình bậc nhất hai ẩn",
                subsections: [
                  { key: "a", title: "Định nghĩa hệ bất phương trình", summary: "Hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn x, y." },
                  { key: "b", title: "Nghiệm của hệ bất phương trình", summary: "Cặp số (x0; y0) đồng thời là nghiệm của tất cả các bất phương trình trong hệ." }
                ]
              },
              {
                id: "10-c2-b4-s2",
                num: "2",
                title: "Biểu diễn miền nghiệm của hệ bất phương trình",
                subsections: [
                  { key: "a", title: "Giao của các miền nghiệm", summary: "Phương pháp biểu diễn từng miền nghiệm và lấy phần giao không bị gạch." },
                  { key: "b", title: "Các dạng miền nghiệm thường gặp", summary: "Miền đa giác tam giác, tứ giác, ngũ giác hoặc miền không giới hạn." }
                ]
              },
              {
                id: "10-c2-b4-s3",
                num: "3",
                title: "Ứng dụng trong bài toán thực tế",
                subsections: [
                  { key: "a", title: "Mô hình hoá toán học bài toán kinh tế", summary: "Thiết lập hệ bất phương trình từ bài toán kế hoạch sản xuất, dinh dưỡng, chi phí." },
                  { key: "b", title: "Tìm giá trị lớn nhất, nhỏ nhất của biểu thức F(x; y)", summary: "Định lí giá trị tối ưu luôn đạt được tại các đỉnh của miền đa giác nghiệm." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-3",
        number: "Chương III",
        title: "Hệ thức lượng trong tam giác",
        volume: 1,
        volumeLabel: "Tập 1",
        lessons: [
          {
            id: "10-c3-b5",
            number: "Bài 5",
            title: "Giá trị lượng giác của một góc từ 0° đến 180°",
            sections: [
              {
                id: "10-c3-b5-s1",
                num: "1",
                title: "Định nghĩa giá trị lượng giác",
                subsections: [
                  { key: "a", title: "Nửa đường tròn đơn vị", summary: "Nửa đường tròn tâm O bán kính R = 1 nằm phía trên trục hoành." },
                  { key: "b", title: "Định nghĩa sin, cos, tan, cot", summary: "Xác định giá trị lượng giác qua toạ độ (x0; y0) của điểm M trên nửa đường tròn." }
                ]
              },
              {
                id: "10-c3-b5-s2",
                num: "2",
                title: "Mối quan hệ giữa các giá trị lượng giác của hai góc bù nhau",
                subsections: [
                  { key: "a", title: "Công thức hai góc bù nhau", summary: "sin(180° - α) = sin α; cos(180° - α) = -cos α; tan(180° - α) = -tan α." },
                  { key: "b", title: "Bảng giá trị lượng giác của một số góc đặc biệt", summary: "Các góc 0°, 30°, 45°, 60°, 90°, 120°, 135°, 150°, 180°." }
                ]
              }
            ]
          },
          {
            id: "10-c3-b6",
            number: "Bài 6",
            title: "Hệ thức lượng trong tam giác",
            sections: [
              {
                id: "10-c3-b6-s1",
                num: "1",
                title: "Định lí côsin",
                subsections: [
                  { key: "a", title: "Công thức định lí côsin", summary: "a² = b² + c² - 2bc cos A; b² = a² + c² - 2ac cos B; c² = a² + b² - 2ab cos C." },
                  { key: "b", title: "Hệ quả tính góc và độ dài đường trung tuyến", summary: "Công thức tính cos A, cos B, cos C và công thức đường trung tuyến ma, mb, mc." }
                ]
              },
              {
                id: "10-c3-b6-s2",
                num: "2",
                title: "Định lí sin",
                subsections: [
                  { key: "a", title: "Công thức định lí sin", summary: "a / sin A = b / sin B = c / sin C = 2R." },
                  { key: "b", title: "Mối liên hệ với bán kính đường tròn ngoại tiếp", summary: "Ứng dụng tính bán kính R và tính các cạnh khi biết hai góc và một cạnh." }
                ]
              },
              {
                id: "10-c3-b6-s3",
                num: "3",
                title: "Giải tam giác và ứng dụng thực tế",
                subsections: [
                  { key: "a", title: "Các công thức tính diện tích tam giác", summary: "S = 1/2 a.ha = 1/2 ab sin C = abc/(4R) = pr = √(p(p-a)(p-b)(p-c))." },
                  { key: "b", title: "Ứng dụng đo đạc thực tế", summary: "Đo khoảng cách tới điểm không tới được, đo chiều cao tháp, ngọn núi." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-4",
        number: "Chương IV",
        title: "Vectơ",
        volume: 1,
        volumeLabel: "Tập 1",
        lessons: [
          {
            id: "10-c4-b7",
            number: "Bài 7",
            title: "Các khái niệm mở đầu",
            isFeaturedLesson: true,
            teacherWelcome: {
              greetingText: "Thầy Sáng chào tất cả các em học sinh thân yêu! Thầy rất vui khi được đồng hành cùng các em trong tiết học số ngày hôm nay. Bước vào lớp 10, các em sẽ bắt đầu một hành trình mới đầy hứng khởi với môn Toán. Bài 7 hôm nay, 'Các khái niệm mở đầu về Vectơ', sẽ mở ra một công cụ toán học vô cùng kỳ diệu gắn liền với đời sống thực tế và môn Vật lý. Trước khi Thầy trò mình cùng nhau khám phá, các em hãy cùng Thầy điểm qua các mục tiêu quan trọng cần đạt trong bài học này nhé: Thứ nhất, các em sẽ hiểu rõ thế nào là một đoạn thẳng có hướng, xác định điểm đầu, điểm cuối và độ dài vectơ. Thứ hai, nắm vững khái niệm giá của vectơ, nhận biết hai vectơ cùng phương, cùng hướng và ngược hướng. Thứ ba, hiểu thế nào là hai vectơ bằng nhau và đặc điểm của vectơ-không. Thầy chúc các em có một buổi học thật say mê, tràn đầy hứng khởi và gặt hái thật nhiều kiến thức bổ ích. Nào, Thầy trò mình cùng bắt đầu nhé!",
              audioScript: "Thầy Sáng chào tất cả các em học sinh thân yêu! Thầy rất vui khi được đồng hành cùng các em trong tiết học số ngày hôm nay. Bước vào lớp 10, các em sẽ bắt đầu một hành trình mới đầy hứng khởi với môn Toán. Bài 7 hôm nay, Các khái niệm mở đầu về Vectơ, sẽ mở ra một công cụ toán học vô cùng kỳ diệu gắn liền với đời sống thực tế và môn Vật lý. Trước khi Thầy trò mình cùng nhau khám phá, các em hãy cùng Thầy điểm qua các mục tiêu quan trọng cần đạt trong bài học này nhé. Thứ nhất, các em sẽ hiểu rõ thế nào là một đoạn thẳng có hướng, xác định điểm đầu, điểm cuối và độ dài vectơ. Thứ hai, nắm vững khái niệm giá của vectơ, nhận biết hai vectơ cùng phương, cùng hướng và ngược hướng. Thứ ba, hiểu thế nào là hai vectơ bằng nhau và đặc điểm của vectơ-không. Thầy chúc các em có một buổi học thật say mê, tràn đầy hứng khởi và gặt hái thật nhiều kiến thức bổ ích. Nào, Thầy trò mình cùng bắt đầu nhé!",
              audioUrl: "assets/audio/b7_welcome.mp3"
            },
            learningGoals: [
              "Nắm vững định nghĩa vectơ là đoạn thẳng có hướng, xác định chính xác điểm đầu, điểm cuối và độ dài vectơ.",
              "Hiểu rõ khái niệm giá của vectơ, nhận biết hai vectơ cùng phương, cùng hướng và ngược hướng.",
              "Vận dụng thành thạo điều kiện hai vectơ bằng nhau để chứng minh các tính chất hình học phẳng.",
              "Nắm vững bản chất và các tính chất quy ước đặc biệt của vectơ-không."
            ],
            hook: {
              title: "Tình huống thực tế: Hai tàu lai dắt kéo tàu chở hàng vào cảng",
              story: "Tại cảng biển Hải Phòng, một con tàu hàng tải trọng 10.000 tấn đang chuẩn bị cập bến. Do không thể tự quay đầu trong luồng hẹp, hai chiếc tàu kéo nhỏ hơn được nối dây cáp vào mũi tàu để kéo. Tàu kéo A kéo một lực 5.000 N theo hướng Đông Bắc, tàu kéo B kéo một lực 5.000 N theo hướng Đông Nam. Chiếc tàu hàng sẽ di chuyển về hướng nào và chịu tổng lực kéo là bao nhiêu?",
              question: "Tại sao chỉ biết độ lớn của hai lực là 5.000 N ta vẫn chưa thể xác định được hướng đi của tàu? Ta cần thêm yếu tố gì để mô tả chính xác chuyển động này?",
              teacherNote: "Đúng vậy các em! Trong vật lí và đời sống, các đại lượng như lực, vận tốc, độ dịch chuyển không chỉ có 'độ lớn' mà còn gắn liền với 'phương hướng'. Đó là lí do toán học sáng tạo ra một công cụ cực kỳ mạnh mẽ mang tên: VECTƠ!",
              illustration: "assets/images/lessons/hook_tau_keo.svg",
              illustrationCaption: "Hai tàu lai dắt kéo tàu hàng lớn vào luồng cảng bằng hai lực F1 và F2 đối xứng nhau."
            },
            teacherVoiceGeneral: {
              title: "Lời giảng của Thầy Sáng: Giới thiệu khái niệm Vectơ",
              script: "Chào các em học sinh thân mến! Hôm nay Thầy Sáng sẽ cùng các em bước vào một thế giới toán học hoàn toàn mới — thế giới của Vectơ. Các em hãy hình dung, nếu trong cuộc sống có những đại lượng chỉ cần một con số là xác định xong, như khối lượng năm mươi ki-lô-gam hay nhiệt độ ba mươi độ C. Nhưng cũng có những đại lượng mà nếu thiếu đi phương hướng, chúng ta sẽ hoàn toàn mất phương hướng! Điển hình là vận tốc của cơn bão hay lực kéo của một con tàu. Để mô tả trọn vẹn cả độ lớn lẫn chiều di chuyển, toán học trang bị cho chúng ta khái niệm vectơ — một đoạn thẳng có hướng. Khi ta viết vectơ A B có mũi tên trên đầu, điểm A đứng trước là điểm xuất phát, điểm B đứng sau là đích đến, và khoảng cách giữa A và B chính là độ dài của vectơ ấy. Các em hãy cùng Thầy khám phá bài học đầy lôi cuốn này nhé!",
              audioUrl: "assets/audio/b7_main_lecture.mp3"
            },
            sections: [
              {
                id: "10-c4-b7-s1",
                num: "1",
                title: "1. Khái niệm vectơ",
                subsections: [
                  {
                    key: "a",
                    title: "Khái niệm vectơ & các ví dụ",
                    summary: "Vectơ là đoạn thẳng có hướng. Ký hiệu điểm đầu, điểm cuối và độ dài vectơ.",
                    illustration: "assets/images/lessons/hinh1_vecto_co_huong.svg",
                    illustrationCaption: "Đoạn thẳng có hướng AB: Điểm đầu A, điểm cuối B, đường thẳng d là giá của vectơ, độ dài |AB| = AB.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-bookmark"></i> Định nghĩa (SGK Kết nối tri thức)</div>
                          <p><strong>Vectơ</strong> là một đoạn thẳng có hướng, nghĩa là trong hai điểm mút của đoạn thẳng đã chỉ rõ điểm nào là <em>điểm đầu</em>, điểm nào là <em>điểm cuối</em>.</p>
                          <p>Vectơ có điểm đầu $A$, điểm cuối $B$ được ký hiệu là $\\vec{AB}$ và đọc là <strong>"vectơ AB"</strong>.</p>
                          <p>Để vẽ một vectơ $\\vec{AB}$, ta vẽ đoạn thẳng $AB$ và đánh dấu mũi tên ở đầu mút $B$.</p>
                          <p>Vectơ còn được ký hiệu đơn giản bằng một chữ cái thường có mũi tên ở trên đầu, ví dụ: $\\vec{a}, \\vec{b}, \\vec{x}, \\vec{u}, \\vec{v}$.</p>
                        </div>
                        <div class="definition-card" style="margin-top: 15px;">
                          <div class="def-badge"><i class="fa-solid fa-ruler-combined"></i> Độ dài của vectơ</div>
                          <p>Khoảng cách giữa điểm đầu và điểm cuối của vectơ $\\vec{AB}$ được gọi là <strong>độ dài của vectơ</strong> $\\vec{AB}$, ký hiệu là $|\\vec{AB}|$.</p>
                          <p>Như vậy: $|\\vec{AB}| = AB$. Độ dài của vectơ $\\vec{a}$ được ký hiệu là $|\\vec{a}|$.</p>
                        </div>
                      </div>
                    `,
                    teacherLecture: "Các em hãy ghi nhớ thật kỹ: Khi viết vectơ A B, điểm A viết trước luôn là điểm gốc, điểm B viết sau luôn là ngọn mũi tên. Nếu đảo lại thành vectơ B A thì hướng đi đã hoàn toàn đảo ngược một trăm tám mươi độ rồi đấy nhé! Còn độ dài của vectơ thì chính là khoảng cách hình học thông thường giữa hai điểm A và B, luôn là một số không âm.",
                    workedExample: {
                      title: "Ví dụ 1: Xác định vectơ, giá và độ dài của vectơ",
                      problem: "Cho hình vuông $ABCD$ có cạnh bằng $4\\text{ cm}$. Xác định các vectơ có điểm đầu là $A$ và điểm cuối là các đỉnh còn lại của hình vuông. Tính độ dài của các vectơ đó.",
                      thinking: "Điểm đầu cố định là A. Các điểm cuối còn lại là B, C, D. Đoạn thẳng AC là đường chéo hình vuông nên độ dài tính theo định lý Pythagore.",
                      solution: `
                        <p>1. Các vectơ có điểm đầu là $A$ và điểm cuối là các đỉnh còn lại gồm có: $\\vec{AB}, \\vec{AC}, \\vec{AD}$.</p>
                        <p>2. Tính độ dài của các vectơ:</p>
                        <ul>
                          <li>$|\\vec{AB}| = AB = 4\\text{ cm}$.</li>
                          <li>$|\\vec{AD}| = AD = 4\\text{ cm}$.</li>
                          <li>Vì $ABCD$ là hình vuông nên tam giác $ABC$ vuông tại $B$. Theo định lí Pythagore:
                          $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{4^2 + 4^2} = 4\\sqrt{2}\\text{ cm}$
                          Do đó $|\\vec{AC}| = AC = 4\\sqrt{2}\\text{ cm}$.</li>
                        </ul>
                      `,
                      teacherGuidance: "Các em lưu ý: Khi đề bài yêu cầu tìm vectơ, ta phải chỉ rõ cả tên vectơ và mũi tên. Vectơ đường chéo AC luôn có độ dài lớn hơn các vectơ cạnh AB và AD theo đúng tỉ lệ căn bậc hai của 2.",
                      audioScript: "Trong ví dụ một, điểm đầu là A thì các vectơ tạo thành lần lượt là vectơ A B, vectơ A C và vectơ A D. Độ dài của vectơ A B và A D bằng cạnh hình vuông là 4 xăng-ti-mét. Riêng vectơ A C là đường chéo hình vuông nên độ dài bằng 4 nhân căn bậc hai của 2 xăng-ti-mét các em nhé!"
                    }
                  },
                  {
                    key: "b",
                    title: "Vectơ cùng phương, vectơ cùng hướng",
                    summary: "Khái niệm giá của vectơ và điều kiện hai vectơ cùng phương, cùng hướng, ngược hướng.",
                    illustration: "assets/images/lessons/hinh2_cung_phuong_cung_huong.svg",
                    illustrationCaption: "Hai vectơ cùng phương khi giá song song hoặc trùng nhau; cùng hướng hoặc ngược hướng; 3 điểm thẳng hàng.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-graduation-cap"></i> Khái niệm cốt lõi</div>
                          <p><strong>Giá của vectơ:</strong> Đường thẳng đi qua điểm đầu và điểm cuối của một vectơ được gọi là <em>giá</em> của vectơ đó.</p>
                          <p><strong>Hai vectơ cùng phương:</strong> Hai vectơ được gọi là <em>cùng phương</em> nếu giá của chúng song song hoặc trùng nhau.</p>
                        </div>
                        <div class="note-box">
                          <i class="fa-solid fa-lightbulb"></i> <strong>Đặc biệt lưu ý:</strong>
                          <p>Nếu hai vectơ cùng phương thì chúng chỉ có thể hoặc là <strong>cùng hướng</strong>, hoặc là <strong>ngược hướng</strong>.</p>
                          <p><strong>Điều kiện ba điểm thẳng hàng:</strong> Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương.</p>
                        </div>
                      </div>
                    `,
                    teacherLecture: "Các em hãy hình dung giá của vectơ giống như đường ray xe lửa mà vectơ đang chạy trên đó. Hai vectơ cùng phương nghĩa là hai đường ray của chúng song song với nhau hoặc trùng làm một. Và một khi đã cùng chạy trên hai đường ray song song, thì hai đoàn tàu chỉ có hai khả năng: hoặc là chạy cùng chiều về phía trước — ta gọi là cùng hướng; hoặc là một đoàn tàu chạy lên phía bắc, đoàn kia chạy xuống phía nam — ta gọi là ngược hướng!",
                    workedExample: {
                      title: "Ví dụ 2: Xác định vectơ cùng phương, cùng hướng",
                      problem: "Cho hình bình hành $ABCD$. Hãy chỉ ra các vectơ có điểm đầu và điểm cuối là các đỉnh của hình bình hành cùng phương với vectơ $\\vec{AB}$. Trong đó những vectơ nào cùng hướng, những vectơ nào ngược hướng với $\\vec{AB}$?",
                      thinking: "Dựa vào tính chất cạnh đối của hình bình hành: AB // CD và AB, CD là các đoạn thẳng cùng phương.",
                      solution: `
                        <p>Giá của vectơ $\\vec{AB}$ là đường thẳng $AB$. Vì $ABCD$ là hình bình hành nên $AB // CD$. Do đó:</p>
                        <ul>
                          <li>Các vectơ cùng phương với $\\vec{AB}$ là: $\\vec{BA}$, $\\vec{CD}$ và $\\vec{DC}$.</li>
                          <li>Vectơ <strong>cùng hướng</strong> với $\\vec{AB}$ (hướng từ trái sang phải) là: $\\vec{DC}$.</li>
                          <li>Các vectơ <strong>ngược hướng</strong> với $\\vec{AB}$ (hướng từ phải sang trái) là: $\\vec{BA}$ và $\\vec{CD}$.</li>
                        </ul>
                      `,
                      teacherGuidance: "Thầy lưu ý các em rất hay nhầm lẫn giữa vectơ CD và DC. Vectơ DC có mũi tên từ D sang C cùng chiều với từ A sang B nên cùng hướng với AB. Còn vectơ CD thì ngược chiều nên ngược hướng với AB!",
                      audioScript: "Các em chú ý nhé: Trong hình bình hành A B C D, vectơ cùng hướng với vectơ A B là vectơ D C. Còn vectơ B A và vectơ C D có chiều mũi tên ngược lại nên là hai vectơ ngược hướng với vectơ A B."
                    }
                  }
                ]
              },
              {
                id: "10-c4-b7-s2",
                num: "2",
                title: "2. Hai vectơ bằng nhau và Vectơ-không",
                subsections: [
                  {
                    key: "a",
                    title: "Hai vectơ bằng nhau",
                    summary: "Điều kiện hai vectơ bằng nhau: cùng hướng và cùng độ dài.",
                    illustration: "assets/images/lessons/hinh3_vecto_bang_nhau.svg",
                    illustrationCaption: "Hình bình hành ABCD: Vectơ AB = Vectơ DC, Vectơ AD = Vectơ BC; Vectơ AB khác Vectơ CD (ngược hướng).",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-equals"></i> Định nghĩa hai vectơ bằng nhau</div>
                          <p>Hai vectơ $\\vec{a}$ và $\\vec{b}$ được gọi là <strong>bằng nhau</strong> nếu chúng có <strong>cùng hướng</strong> và <strong>cùng độ dài</strong>, ký hiệu là $\\vec{a} = \\vec{b}$.</p>
                          <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 10px 15px; margin: 10px 0; border-radius: 4px;">
                            $\\vec{a} = \\vec{b} \\iff \\begin{cases} \\vec{a} \\text{ cùng hướng với } \\vec{b} \\\\ |\\vec{a}| = |\\vec{b}| \\end{cases}$
                          </div>
                        </div>
                      </div>
                    `,
                    teacherLecture: "Thầy muốn các em khắc sâu điều này: Hai số bằng nhau thì chỉ cần cùng giá trị. Nhưng hai vectơ muốn bằng nhau thì phải thỏa mãn cả hai tiêu chuẩn khắt khe: Vừa phải cùng độ dài, lại vừa phải cùng hướng chỉ về một phía! Nếu hai vectơ cùng độ dài nhưng ngược hướng nhau thì chúng đối nhau chứ không thể bằng nhau.",
                    workedExample: {
                      title: "Ví dụ 3: Chứng minh hai vectơ bằng nhau trong hình học",
                      problem: "Cho tứ giác $ABCD$. Chứng minh rằng tứ giác $ABCD$ là hình bình hành khi và chỉ khi $\\vec{AB} = \\vec{DC}$.",
                      thinking: "Hai vectơ bằng nhau tương đương với cùng hướng (suy ra hai giá song song) và cùng độ dài (suy ra hai cạnh bằng nhau).",
                      solution: `
                        <p><strong>Chiều thuận ($\\implies$):</strong> Giả sử $ABCD$ là hình bình hành.</p>
                        <p>Khi đó $AB // DC$ và $AB = DC$. Do $AB // DC$ và hai tia $AB, DC$ cùng chỉ về một phía nên $\\vec{AB}$ cùng hướng với $\\vec{DC}$. Lại có $|\\vec{AB}| = AB = DC = |\\vec{DC}|$. Vậy $\\vec{AB} = \\vec{DC}$.</p>
                        <p><strong>Chiều đảo ($\\impliedby$):</strong> Giả sử $\\vec{AB} = \\vec{DC}$.</p>
                        <p>Theo định nghĩa, $\\vec{AB}$ và $\\vec{DC}$ cùng hướng (suy ra $AB // DC$) và cùng độ dài (suy ra $AB = DC$). Tứ giác $ABCD$ có một cặp cạnh đối song song và bằng nhau nên $ABCD$ là hình bình hành.</p>
                      `,
                      teacherGuidance: "Đây là một dấu hiệu nhận biết hình bình hành cực kỳ nhanh gọn trong toán vectơ: Chỉ cần viết vectơ AB bằng vectơ DC là đã khẳng định được tứ giác ABCD là hình bình hành!",
                      audioScript: "Ví dụ 3 cho chúng ta một công cụ chứng minh hình học vô cùng đẹp mắt: Tứ giác A B C D là hình bình hành khi và chỉ khi vectơ A B bằng vectơ D C các em nhé!"
                    }
                  },
                  {
                    key: "b",
                    title: "Vectơ-không",
                    summary: "Khái niệm vectơ-không có điểm đầu và điểm cuối trùng nhau, quy ước về phương và hướng.",
                    illustration: "assets/images/lessons/hinh4_vecto_khong.svg",
                    illustrationCaption: "Vectơ-không có điểm đầu trùng điểm cuối AA = 0, độ dài bằng 0, cùng phương và cùng hướng với mọi vectơ.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-circle-dot"></i> Vectơ-không</div>
                          <p>Vectơ-không là vectơ có điểm đầu và điểm cuối trùng nhau, ký hiệu là $\\vec{0}$.</p>
                          <p>Ví dụ: $\\vec{AA} = \\vec{0}$, $\\vec{BB} = \\vec{0}$, $\\vec{MM} = \\vec{0}$.</p>
                          <p><strong>Quy ước đặc biệt:</strong></p>
                          <ul>
                            <li>Độ dài của vectơ-không bằng $0$, tức là $|\\vec{0}| = 0$.</li>
                            <li>Vectơ-không có phương và hướng <strong>tùy ý</strong>.</li>
                            <li>Quy ước vectơ $\\vec{0}$ <strong>cùng phương, cùng hướng với mọi vectơ</strong>.</li>
                          </ul>
                        </div>
                      </div>
                    `,
                    teacherLecture: "Vectơ-không giống như số 0 trong tập hợp số thực vậy các em. Điểm xuất phát và điểm đích trùng làm một, độ dài bằng không. Vì không có hướng xác định cụ thể nên toán học quy ước vectơ-không cùng phương và cùng hướng với tất cả mọi vectơ trên đời!",
                    workedExample: {
                      title: "Ví dụ 4: Tính chất của vectơ-không",
                      problem: "Cho tam giác $ABC$. Có bao nhiêu vectơ có điểm đầu và điểm cuối là các đỉnh của tam giác mà có độ dài bằng $0$?",
                      thinking: "Vectơ có độ dài bằng 0 là vectơ-không, có điểm đầu trùng điểm cuối.",
                      solution: `
                        <p><strong>Lời giải chi tiết:</strong></p>
                        <p>Theo định nghĩa, vectơ có độ dài bằng $0$ là vectơ-không. Với 3 đỉnh $A, B, C$, các vectơ-không có điểm đầu và điểm cuối trùng nhau là: $\\vec{AA}, \\vec{BB}, \\vec{CC}$.</p>
                        <p>Vậy có đúng 3 vectơ thỏa mãn yêu cầu đề bài.</p>
                      `,
                      teacherGuidance: "Các em nhớ phân biệt: vectơ khác vectơ-không nối 2 đỉnh phân biệt thì có 6 vectơ (AB, BA, AC, CA, BC, CB), còn vectơ có độ dài bằng 0 thì có 3 vectơ (AA, BB, CC).",
                      audioScript: "Với ba đỉnh A, B, C của tam giác, các vectơ có độ dài bằng 0 chính là các vectơ-không: vectơ A A, vectơ B B và vectơ C C các em nhé!"
                    }
                  }
                ]
              }
            ],
            realworldWrapup: {
              title: "VẬN DỤNG THỰC TẾ: QUAY LẠI GIẢI QUYẾT BÀI TOÁN TÌNH HUỐNG MỞ ĐẦU",
              recap: "Tại sao hai tàu lai dắt kéo ở hai góc khác nhau lại có thể giúp con tàu chở hàng 10.000 tấn đi thẳng tắp vào luồng cảng Hải Phòng?",
              illustration: "assets/images/lessons/wrapup_giai_quyet_tau_keo.svg",
              illustrationCaption: "Mô hình toán học quy tắc hình bình hành lực giải quyết bài toán tàu lai dắt.",
              solution: `
                <p><strong>Lời giải chi tiết & Mô hình hóa Toán học của Thầy Sáng:</strong></p>
                <p>1. <strong>Mô hình hóa hình học:</strong> Điểm buộc dây cáp tại mũi tàu hàng là điểm $M$. Gọi $\\vec{F}_1$ là vectơ lực kéo của tàu A và $\\vec{F}_2$ là vectơ lực kéo của tàu B.</p>
                <p>2. <strong>Điều kiện để tàu đi thẳng:</strong> Để con tàu hàng di chuyển thẳng tắp theo trục luồng cảng, hợp lực kéo $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ phải có giá nằm chính xác trên trục luồng cảng. Điều này đòi hỏi:
                <ul>
                  <li>Hai lực kéo phải có độ lớn bằng nhau: $|\\vec{F}_1| = |\\vec{F}_2| = F_0 = 5.000\\text{ N}$.</li>
                  <li>Góc tạo bởi mỗi dây cáp với trục luồng cảng phải đối xứng nhau: $\\alpha_1 = \\alpha_2 = 30^\\circ$.</li>
                </ul>
                </p>
                <p>3. <strong>Tính độ lớn hợp lực:</strong> Theo quy tắc hình bình hành lực, độ lớn hợp lực $\\vec{F}$ kéo tàu là:
                $F = 2 \\cdot F_0 \\cdot \\cos 30^\\circ = 2 \\cdot 5.000 \\cdot \\frac{\\sqrt{3}}{2} = 5.000\\sqrt{3} \\approx 8.660\\text{ N}$
                </p>
                <p><strong>Ý nghĩa thực tế:</strong> Toán học vectơ đã giúp các thuyền trưởng điều phối lực kéo chính xác từng góc độ, giúp con tàu hàng khổng lồ cập cảng an toàn tuyệt đối mà không bị trôi dạt vào bờ cạn!</p>
              `,
              audioScript: "Các em thấy đấy, toán học vectơ không hề khô khan mà gắn liền với hơi thở cuộc sống. Khi hai tàu lai dắt kéo đối xứng nhau với góc ba mươi độ và lực kéo năm nghìn Niu-tơn, theo quy tắc hình bình hành lực, hợp lực tạo thành sẽ có phương đi thẳng tắp vào tim luồng cảng với độ lớn xấp xỉ tám nghìn sáu trăm sáu mươi Niu-tơn. Nhờ đó, con tàu hàng khổng lồ được dẫn dắt an toàn tuyệt đối!",
              audioUrl: "assets/audio/b7_wrapup.mp3"
            },
            interactiveChallenges: [
              {
                type: "quiz",
                title: "Thử thách 1: Trắc nghiệm nhận biết vectơ bằng nhau",
                question: "Cho hình bình hành $ABCD$ tâm $O$. Khẳng định nào sau đây là khẳng định ĐÚNG?",
                options: [
                  "A. $\\vec{AB} = \\vec{CD}$",
                  "B. $\\vec{AB} = \\vec{DC}$",
                  "C. $\\vec{OA} = \\vec{OC}$",
                  "D. $\\vec{AO} = \\vec{CO}$"
                ],
                correctIndex: 1,
                explanation: "Vì ABCD là hình bình hành nên cạnh AB song song và bằng cạnh DC. Hơn nữa hướng từ A đến B cùng hướng với hướng từ D đến C (từ trái sang phải). Do đó vectơ AB = vectơ DC. Khẳng định B đúng!"
              },
              {
                type: "matching",
                title: "Thử thách 2: Ghép cặp nối cột khái niệm Toán học",
                instruction: "Hãy ghép mỗi thuật ngữ ở Cột A với định nghĩa chuẩn xác nhất ở Cột B:",
                pairs: [
                  { left: "Hai vectơ cùng phương", right: "Giá của chúng song song hoặc trùng nhau" },
                  { left: "Hai vectơ bằng nhau", right: "Cùng hướng và cùng độ dài" },
                  { left: "Vectơ-không", right: "Điểm đầu trùng điểm cuối, độ dài bằng 0" },
                  { left: "Độ dài vectơ AB", right: "Khoảng cách hình học giữa hai điểm A và B" }
                ]
              },
              {
                type: "true_false",
                title: "Thử thách 3: Khảo sát Đúng / Sai (Chuẩn cấu trúc đề thi tốt nghiệp 2025)",
                instruction: "Cho đoạn thẳng $BC$ có $M$ là trung điểm. Xét tính Đúng hoặc Sai của các mệnh đề sau:",
                statements: [
                  { text: "a) Hai vectơ $\\vec{MB}$ và $\\vec{MC}$ cùng phương với nhau.", isTrue: true, explain: "Đúng vì giá của hai vectơ đều là đường thẳng chứa đoạn thẳng BC nên chúng trùng nhau." },
                  { text: "b) Độ dài $|\\vec{MB}| = |\\vec{MC}|$.", isTrue: true, explain: "Đúng vì M là trung điểm của BC nên khoảng cách MB = MC." },
                  { text: "c) Hai vectơ $\\vec{MB}$ và $\\vec{MC}$ là hai vectơ bằng nhau.", isTrue: false, explain: "Sai vì M là trung điểm của BC nên hai vectơ này có cùng độ dài nhưng ngược hướng nhau (chúng là hai vectơ đối nhau)." },
                  { text: "d) Vectơ $\\vec{AA}$ có độ dài bằng 1.", isTrue: false, explain: "Sai vì vectơ AA là vectơ-không, có độ dài bằng 0." }
                ]
              }
            ]
          },
          // Bài 8: Tổng và hiệu của hai vectơ (Tương thích 2 chiều với lesson-10-8-data.js)
          (function() {
            if (typeof window !== "undefined" && window.LESSON_10_C4_B8_DATA) {
              return window.LESSON_10_C4_B8_DATA;
            }
            return {
              id: "10-c4-b8",
              number: "Bài 8",
              title: "Tổng và hiệu của hai vectơ",
              sections: [
                {
                  id: "10-c4-b8-s1",
                  title: "1. Tổng của hai vectơ",
                  subsections: [
                    { id: "10-c4-b8-s1-a", title: "a) Định nghĩa tổng của hai vectơ", summary: "Cho hai vectơ a và b. Lấy điểm A, vẽ AB = a, BC = b. Vectơ AC gọi là tổng của hai vectơ a và b." },
                    { id: "10-c4-b8-s1-b", title: "b) Quy tắc ba điểm", summary: "Với ba điểm A, B, C bất kì, ta luôn có AB + BC = AC." },
                    { id: "10-c4-b8-s1-c", title: "c) Quy tắc hình bình hành", summary: "Nếu ABCD là hình bình hành thì AB + AD = AC." }
                  ]
                },
                {
                  id: "10-c4-b8-s2",
                  title: "2. Hiệu của hai vectơ",
                  subsections: [
                    { id: "10-c4-b8-s2-a", title: "a) Hai vectơ đối nhau", summary: "Hai vectơ đối nhau là hai vectơ ngược hướng và cùng độ dài. Kí hiệu vectơ đối của a là -a. a + (-a) = 0." },
                    { id: "10-c4-b8-s2-b", title: "b) Định nghĩa hiệu của hai vectơ", summary: "Hiệu của hai vectơ a và b là tổng của a và vectơ đối của b: a - b = a + (-b)." },
                    { id: "10-c4-b8-s2-c", title: "c) Quy tắc hiệu (quy tắc ba điểm cho phép trừ)", summary: "Với ba điểm O, A, B bất kì: OA - OB = BA (hoặc OB - OA = AB)." }
                  ]
                }
              ]
            };
          })(),
          {
            id: "10-c4-b9",
            number: "Bài 9",
            title: "Tích của một vectơ với một số",
            sections: [
              {
                id: "10-c4-b9-s1",
                num: "1",
                title: "Định nghĩa tích vectơ với một số",
                subsections: [
                  { key: "a", title: "Khái niệm và kí hiệu k.a", summary: "Độ dài |k.a| = |k|.|a| và hướng tuỳ thuộc vào dấu của k." },
                  { key: "b", title: "Các tính chất của phép nhân vectơ với số", summary: "Tính phân phối đối với phép cộng vectơ và số thực." }
                ]
              },
              {
                id: "10-c4-b9-s2",
                num: "2",
                title: "Điều kiện để hai vectơ cùng phương",
                subsections: [
                  { key: "a", title: "Biểu thị vectơ qua hai vectơ không cùng phương", summary: "Định lí phân tích một vectơ bất kì theo hai vectơ không cùng phương." },
                  { key: "b", title: "Điều kiện ba điểm thẳng hàng", summary: "Ba điểm A, B, C thẳng hàng khi và chỉ khi AB = k.AC." }
                ]
              }
            ]
          },
          {
            id: "10-c4-b10",
            number: "Bài 10",
            title: "Vectơ trong mặt phẳng toạ độ",
            sections: [
              {
                id: "10-c4-b10-s1",
                num: "1",
                title: "Toạ độ của vectơ",
                subsections: [
                  { key: "a", title: "Hệ trục toạ độ Oxy", summary: "Trục Ox, trục Oy và các vectơ đơn vị i, j." },
                  { key: "b", title: "Toạ độ của vectơ và toạ độ điểm", summary: "u = x.i + y.j <=> u = (x; y); toạ độ điểm M là toạ độ của OM." }
                ]
              },
              {
                id: "10-c4-b10-s2",
                num: "2",
                title: "Biểu thức toạ độ của các phép toán vectơ",
                subsections: [
                  { key: "a", title: "Toạ độ tổng, hiệu và tích với một số", summary: "u ± v = (x ± x'; y ± y'); k.u = (kx; ky)." },
                  { key: "b", title: "Toạ độ trung điểm và trọng tâm tam giác", summary: "Công thức trung điểm M((xA+xB)/2; (yA+yB)/2) và trọng tâm G." }
                ]
              }
            ]
          },
          {
            id: "10-c4-b11",
            number: "Bài 11",
            title: "Tích vô hướng của hai vectơ",
            sections: [
              {
                id: "10-c4-b11-s1",
                num: "1",
                title: "Góc giữa hai vectơ",
                subsections: [
                  { key: "a", title: "Định nghĩa góc giữa hai vectơ", summary: "Góc (a, b) từ 0° đến 180° xác định từ một điểm O chung gốc." },
                  { key: "b", title: "Hai vectơ vuông góc", summary: "Khi góc giữa hai vectơ bằng 90°, kí hiệu a ⊥ b." }
                ]
              },
              {
                id: "10-c4-b11-s2",
                num: "2",
                title: "Tích vô hướng của hai vectơ",
                subsections: [
                  { key: "a", title: "Định nghĩa tích vô hướng", summary: "a . b = |a| . |b| . cos(a, b)." },
                  { key: "b", title: "Biểu thức toạ độ của tích vô hướng", summary: "u . v = x.x' + y.y'; công thức độ dài và khoảng cách giữa hai điểm." },
                  { key: "c", title: "Công thức côsin của góc giữa hai vectơ", summary: "cos(u, v) = (x.x' + y.y') / (√(x²+y²) . √(x'²+y'²))." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-5",
        number: "Chương V",
        title: "Các số đặc trưng của mẫu số liệu không ghép nhóm",
        volume: 1,
        volumeLabel: "Tập 1",
        lessons: [
          {
            id: "10-c5-b12",
            number: "Bài 12",
            title: "Số gần đúng và sai số",
            sections: [
              {
                id: "10-c5-b12-s1",
                num: "1",
                title: "Số gần đúng và sai số tuyệt đối",
                subsections: [
                  { key: "a", title: "Số gần đúng", summary: "Khái niệm số đúng a và số gần đúng a_." },
                  { key: "b", title: "Sai số tuyệt đối và độ chính xác", summary: "Δa = |a - a_| <= d; cách viết a = a_ ± d." }
                ]
              },
              {
                id: "10-c5-b12-s2",
                num: "2",
                title: "Sai số tương đối và số quy tròn",
                subsections: [
                  { key: "a", title: "Sai số tương đối", summary: "δa = Δa / |a_| dùng đánh giá độ chính xác của phép đo." },
                  { key: "b", title: "Quy tròn số gần đúng", summary: "Quy tắc làm tròn số và xác định chữ số có nghĩa đáng tin cậy." }
                ]
              }
            ]
          },
          {
            id: "10-c5-b13",
            number: "Bài 13",
            title: "Các số đặc trưng đo xu thế trung tâm",
            sections: [
              {
                id: "10-c5-b13-s1",
                num: "1",
                title: "Số trung bình",
                subsections: [
                  { key: "a", title: "Công thức tính số trung bình", summary: "x̄ = (x1 + x2 + ... + xn) / n." },
                  { key: "b", title: "Ý nghĩa của số trung bình", summary: "Đại diện cho mức độ trung bình của toàn bộ mẫu số liệu." }
                ]
              },
              {
                id: "10-c5-b13-s2",
                num: "2",
                title: "Trung vị và tứ phân vị",
                subsections: [
                  { key: "a", title: "Trung vị Me", summary: "Giá trị nằm chính giữa dãy số liệu đã sắp xếp thứ tự." },
                  { key: "b", title: "Các tứ phân vị Q1, Q2, Q3", summary: "Chia dãy số liệu thành 4 phần có số lượng phần tử xấp xỉ bằng nhau." }
                ]
              },
              {
                id: "10-c5-b13-s3",
                num: "3",
                title: "Mốt của mẫu số liệu",
                subsections: [
                  { key: "a", title: "Định nghĩa mốt Mo", summary: "Giá trị có tần số xuất hiện lớn nhất trong mẫu số liệu." },
                  { key: "b", title: "Ý nghĩa thực tiễn của mốt", summary: "Áp dụng trong nghiên cứu thị trường, kinh doanh hàng tiêu dùng." }
                ]
              }
            ]
          },
          {
            id: "10-c5-b14",
            number: "Bài 14",
            title: "Các số đặc trưng đo độ phân tán",
            sections: [
              {
                id: "10-c5-b14-s1",
                num: "1",
                title: "Khoảng biến thiên và khoảng tứ phân vị",
                subsections: [
                  { key: "a", title: "Khoảng biến thiên R", summary: "R = x_max - x_min phản ánh độ biến thiên tổng thể." },
                  { key: "b", title: "Khoảng tứ phân vị ΔQ", summary: "ΔQ = Q3 - Q1 và tiêu chí phát hiện giá trị ngoại lệ." }
                ]
              },
              {
                id: "10-c5-b14-s2",
                num: "2",
                title: "Phương sai và độ lệch chuẩn",
                subsections: [
                  { key: "a", title: "Công thức tính phương sai s²", summary: "s² = 1/n ∑ (xi - x̄)²." },
                  { key: "b", title: "Độ lệch chuẩn s", summary: "s = √(s²) đo mức độ phân tán quanh số trung bình." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-6",
        number: "Chương VI",
        title: "Hàm số, đồ thị và ứng dụng",
        volume: 2,
        volumeLabel: "Tập 2",
        lessons: [
          {
            id: "10-c6-b15",
            number: "Bài 15",
            title: "Hàm số",
            sections: [
              {
                id: "10-c6-b15-s1",
                num: "1",
                title: "Khái niệm hàm số",
                subsections: [
                  { key: "a", title: "Định nghĩa hàm số và tập xác định", summary: "Quy tắc đặt tương ứng mỗi x thuộc D với duy nhất một y thuộc R." },
                  { key: "b", title: "Đồ thị của hàm số", summary: "Tập hợp các điểm M(x; f(x)) trên mặt phẳng toạ độ Oxy." }
                ]
              },
              {
                id: "10-c6-b15-s2",
                num: "2",
                title: "Sự đồng biến, nghịch biến của hàm số",
                subsections: [
                  { key: "a", title: "Hàm số đồng biến (tăng)", summary: "Với x1 < x2 => f(x1) < f(x2) trên khoảng K." },
                  { key: "b", title: "Hàm số nghịch biến (giảm)", summary: "Với x1 < x2 => f(x1) > f(x2) trên khoảng K." }
                ]
              }
            ]
          },
          {
            id: "10-c6-b16",
            number: "Bài 16",
            title: "Hàm số bậc hai",
            sections: [
              {
                id: "10-c6-b16-s1",
                num: "1",
                title: "Định nghĩa và đồ thị parabol",
                subsections: [
                  { key: "a", title: "Định nghĩa hàm số bậc hai y = ax² + bx + c", summary: "Hàm số bậc hai với hệ số a khác 0." },
                  { key: "b", title: "Đỉnh và trục đối xứng của parabol", summary: "Đỉnh I(-b/(2a); -Δ/(4a)), trục đối xứng x = -b/(2a), bề lõm quay lên khi a > 0, quay xuống khi a < 0." }
                ]
              },
              {
                id: "10-c6-b16-s2",
                num: "2",
                title: "Sự biến thiên của hàm số bậc hai",
                subsections: [
                  { key: "a", title: "Bảng biến thiên hàm số bậc hai", summary: "Khoảng đồng biến, nghịch biến và giá trị cực trị của parabol." },
                  { key: "b", title: "Ứng dụng thực tế của hàm số bậc hai", summary: "Bài toán quỹ đạo bóng bay, thiết kế cầu treo, tối ưu diện tích." }
                ]
              }
            ]
          },
          {
            id: "10-c6-b17",
            number: "Bài 17",
            title: "Dấu của tam thức bậc hai",
            sections: [
              {
                id: "10-c6-b17-s1",
                num: "1",
                title: "Tam thức bậc hai và định lí về dấu",
                subsections: [
                  { key: "a", title: "Khái niệm tam thức bậc hai", summary: "Biểu thức f(x) = ax² + bx + c (a ≠ 0)." },
                  { key: "b", title: "Định lí về dấu của tam thức bậc hai", summary: "Quy tắc cùng dấu với hệ số a khi Δ < 0; cùng dấu trừ x = -b/(2a) khi Δ = 0; 'trong trái ngoài cùng' khi Δ > 0." }
                ]
              },
              {
                id: "10-c6-b17-s2",
                num: "2",
                title: "Bất phương trình bậc hai một ẩn",
                subsections: [
                  { key: "a", title: "Khái niệm bất phương trình bậc hai", summary: "Dạng ax² + bx + c > 0 (hoặc >=, <, <= 0)." },
                  { key: "b", title: "Phương pháp giải bất phương trình bậc hai", summary: "Xét dấu tam thức bậc hai và kết luận tập nghiệm." }
                ]
              }
            ]
          },
          {
            id: "10-c6-b18",
            number: "Bài 18",
            title: "Phương trình quy về phương trình bậc hai",
            sections: [
              {
                id: "10-c6-b18-s1",
                num: "1",
                title: "Phương trình dạng √(ax² + bx + c) = √(dx² + ex + f)",
                subsections: [
                  { key: "a", title: "Phương pháp giải bình phương hai vế", summary: "Bình phương hai vế để đưa về phương trình bậc nhất hoặc bậc hai." },
                  { key: "b", title: "Thử lại và kết luận nghiệm", summary: "Thử lại các nghiệm tìm được vào phương trình ban đầu để loại nghiệm ngoại lai." }
                ]
              },
              {
                id: "10-c6-b18-s2",
                num: "2",
                title: "Phương trình dạng √(ax² + bx + c) = dx + e",
                subsections: [
                  { key: "a", title: "Phương pháp giải và đặt điều kiện", summary: "Bình phương hai vế đưa về phương trình đại số." },
                  { key: "b", title: "Luyện tập giải phương trình chứa căn", summary: "Các dạng bài tập rèn kỹ năng và thử lại nghiệm." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-7",
        number: "Chương VII",
        title: "Phương pháp toạ độ trong mặt phẳng",
        volume: 2,
        volumeLabel: "Tập 2",
        lessons: [
          {
            id: "10-c7-b19",
            number: "Bài 19",
            title: "Phương trình đường thẳng",
            sections: [
              {
                id: "10-c7-b19-s1",
                num: "1",
                title: "Vectơ chỉ phương và vectơ pháp tuyến",
                subsections: [
                  { key: "a", title: "Vectơ chỉ phương (VTCP)", summary: "Vectơ khác 0 có giá song song hoặc trùng với đường thẳng." },
                  { key: "b", title: "Vectơ pháp tuyến (VTPT)", summary: "Vectơ khác 0 có giá vuông góc với đường thẳng; liên hệ u(-b; a) <=> n(a; b)." }
                ]
              },
              {
                id: "10-c7-b19-s2",
                num: "2",
                title: "Các dạng phương trình đường thẳng",
                subsections: [
                  { key: "a", title: "Phương trình tham số của đường thẳng", summary: "Hệ x = x0 + at; y = y0 + bt với t thuộc R." },
                  { key: "b", title: "Phương trình tổng quát của đường thẳng", summary: "ax + by + c = 0 với a² + b² > 0." }
                ]
              }
            ]
          },
          {
            id: "10-c7-b20",
            number: "Bài 20",
            title: "Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách",
            sections: [
              {
                id: "10-c7-b20-s1",
                num: "1",
                title: "Vị trí tương đối của hai đường thẳng",
                subsections: [
                  { key: "a", title: "Xét hệ phương trình toạ độ giao điểm", summary: "Hệ có nghiệm duy nhất (cắt nhau), vô nghiệm (song song), vô số nghiệm (trùng nhau)." },
                  { key: "b", title: "Điều kiện tỉ số hệ số", summary: "So sánh tỉ số a1/a2, b1/b2, c1/c2 khi các hệ số khác 0." }
                ]
              },
              {
                id: "10-c7-b20-s2",
                num: "2",
                title: "Góc giữa hai đường thẳng",
                subsections: [
                  { key: "a", title: "Công thức tính góc giữa hai đường thẳng", summary: "cos φ = |a1.a2 + b1.b2| / (√(a1²+b1²) . √(a2²+b2²))." },
                  { key: "b", title: "Điều kiện hai đường thẳng vuông góc", summary: "a1.a2 + b1.b2 = 0." }
                ]
              },
              {
                id: "10-c7-b20-s3",
                num: "3",
                title: "Khoảng cách từ một điểm đến một đường thẳng",
                subsections: [
                  { key: "a", title: "Công thức tính khoảng cách", summary: "d(M0, Δ) = |ax0 + by0 + c| / √(a² + b²)." },
                  { key: "b", title: "Ứng dụng tính diện tích và khoảng cách song song", summary: "Tính chiều cao tam giác, khoảng cách giữa hai đường thẳng song song." }
                ]
              }
            ]
          },
          {
            id: "10-c7-b21",
            number: "Bài 21",
            title: "Đường tròn trong mặt phẳng toạ độ",
            sections: [
              {
                id: "10-c7-b21-s1",
                num: "1",
                title: "Phương trình đường tròn",
                subsections: [
                  { key: "a", title: "Phương trình chính tắc", summary: "(x - a)² + (y - b)² = R² với tâm I(a; b) bán kính R." },
                  { key: "b", title: "Phương trình khai triển", summary: "x² + y² - 2ax - 2by + c = 0 với điều kiện a² + b² - c > 0." }
                ]
              },
              {
                id: "10-c7-b21-s2",
                num: "2",
                title: "Phương trình tiếp tuyến của đường tròn",
                subsections: [
                  { key: "a", title: "Tiếp tuyến tại một điểm thuộc đường tròn", summary: "(x0 - a)(x - x0) + (y0 - b)(y - y0) = 0." },
                  { key: "b", title: "Tiếp tuyến kẻ từ điểm nằm ngoài đường tròn", summary: "Sử dụng điều kiện d(I, tiếp tuyến) = R." }
                ]
              }
            ]
          },
          {
            id: "10-c7-b22",
            number: "Bài 22",
            title: "Ba đường conic",
            sections: [
              {
                id: "10-c7-b22-s1",
                num: "1",
                title: "Đường elip",
                subsections: [
                  { key: "a", title: "Định nghĩa elip", summary: "Tập hợp các điểm có tổng khoảng cách tới hai tiêu điểm MF1 + MF2 = 2a." },
                  { key: "b", title: "Phương trình chính tắc của elip", summary: "x²/a² + y²/b² = 1 với b² = a² - c²." }
                ]
              },
              {
                id: "10-c7-b22-s2",
                num: "2",
                title: "Đường hypebol",
                subsections: [
                  { key: "a", title: "Định nghĩa hypebol", summary: "Tập hợp các điểm có giá trị tuyệt đối hiệu khoảng cách |MF1 - MF2| = 2a." },
                  { key: "b", title: "Phương trình chính tắc của hypebol", summary: "x²/a² - y²/b² = 1 với b² = c² - a²." }
                ]
              },
              {
                id: "10-c7-b22-s3",
                num: "3",
                title: "Đường parabol",
                subsections: [
                  { key: "a", title: "Định nghĩa parabol", summary: "Tập hợp các điểm cách đều tiêu điểm F và đường chuẩn Δ." },
                  { key: "b", title: "Phương trình chính tắc của parabol", summary: "y² = 2px (p > 0) với tiêu điểm F(p/2; 0) và đường chuẩn x = -p/2." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-8",
        number: "Chương VIII",
        title: "Đại số tổ hợp",
        volume: 2,
        volumeLabel: "Tập 2",
        lessons: [
          {
            id: "10-c8-b23",
            number: "Bài 23",
            title: "Quy tắc đếm",
            sections: [
              {
                id: "10-c8-b23-s1",
                num: "1",
                title: "Quy tắc cộng",
                subsections: [
                  { key: "a", title: "Định nghĩa quy tắc cộng", summary: "Công việc thực hiện bởi một trong hai hành động không giao nhau: m + n cách." },
                  { key: "b", title: "Sơ đồ hình cây áp dụng quy tắc cộng", summary: "Dựng nhánh phân tích các phương án lựa chọn độc lập." }
                ]
              },
              {
                id: "10-c8-b23-s2",
                num: "2",
                title: "Quy tắc nhân",
                subsections: [
                  { key: "a", title: "Định nghĩa quy tắc nhân", summary: "Công việc gồm nhiều công đoạn liên tiếp: m . n cách." },
                  { key: "b", title: "Phối hợp quy tắc cộng và quy tắc nhân", summary: "Chia trường hợp và phân chia các bước giải quyết bài toán đếm phức tạp." }
                ]
              }
            ]
          },
          {
            id: "10-c8-b24",
            number: "Bài 24",
            title: "Hoán vị, chỉnh hợp và tổ hợp",
            sections: [
              {
                id: "10-c8-b24-s1",
                num: "1",
                title: "Hoán vị",
                subsections: [
                  { key: "a", title: "Khái niệm hoán vị", summary: "Mỗi cách sắp xếp thứ tự n phần tử của một tập hợp." },
                  { key: "b", title: "Công thức số hoán vị Pn", summary: "Pn = n! = 1 . 2 . ... . n (quy ước 0! = 1)." }
                ]
              },
              {
                id: "10-c8-b24-s2",
                num: "2",
                title: "Chỉnh hợp",
                subsections: [
                  { key: "a", title: "Khái niệm chỉnh hợp", summary: "Chọn k phần tử từ n phần tử và sắp xếp theo thứ tự." },
                  { key: "b", title: "Công thức số chỉnh hợp Ank", summary: "Ank = n! / (n - k)!." }
                ]
              },
              {
                id: "10-c8-b24-s3",
                num: "3",
                title: "Tổ hợp",
                subsections: [
                  { key: "a", title: "Khái niệm tổ hợp", summary: "Chọn k phần tử từ n phần tử không phân biệt thứ tự." },
                  { key: "b", title: "Công thức số tổ hợp Cnk và tính chất", summary: "Cnk = n! / (k!(n-k)!); tính chất đối xứng và hệ thức Pascal." }
                ]
              }
            ]
          },
          {
            id: "10-c8-b25",
            number: "Bài 25",
            title: "Nhị thức Newton",
            sections: [
              {
                id: "10-c8-b25-s1",
                num: "1",
                title: "Công thức nhị thức Newton",
                subsections: [
                  { key: "a", title: "Khai triển (a + b)⁴", summary: "(a+b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴." },
                  { key: "b", title: "Khai triển (a + b)⁵", summary: "(a+b)⁵ = a⁵ + 5a⁴b + 10a³b² + 10a²b³ + 5ab⁴ + b⁵." }
                ]
              },
              {
                id: "10-c8-b25-s2",
                num: "2",
                title: "Ứng dụng của nhị thức Newton",
                subsections: [
                  { key: "a", title: "Tìm hệ số của số hạng trong khai triển", summary: "Phương pháp xác định hệ số chứa x^k trong các biểu thức đa thức." },
                  { key: "b", title: "Tính tổng các hệ số tổ hợp", summary: "Kỹ thuật gán giá trị đặc biệt a = 1, b = 1 vào khai triển nhị thức." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c10-9",
        number: "Chương IX",
        title: "Tính xác suất theo định nghĩa cổ điển",
        volume: 2,
        volumeLabel: "Tập 2",
        lessons: [
          {
            id: "10-c9-b26",
            number: "Bài 26",
            title: "Biến cố và định nghĩa cổ điển của xác suất",
            sections: [
              {
                id: "10-c9-b26-s1",
                num: "1",
                title: "Phép thử ngẫu nhiên và biến cố",
                subsections: [
                  { key: "a", title: "Không gian mẫu Ω", summary: "Tập hợp tất cả các kết quả có thể xảy ra của một phép thử ngẫu nhiên." },
                  { key: "b", title: "Biến cố và các loại biến cố", summary: "Biến cố là tập con của Ω; biến cố không thể ∅, biến cố chắc chắn Ω, biến cố đối." }
                ]
              },
              {
                id: "10-c9-b26-s2",
                num: "2",
                title: "Định nghĩa cổ điển của xác suất",
                subsections: [
                  { key: "a", title: "Công thức xác suất cổ điển", summary: "P(A) = n(A) / n(Ω) khi các kết quả có cùng khả năng xuất hiện." },
                  { key: "b", title: "Tính chất của xác suất", summary: "0 <= P(A) <= 1; P(∅) = 0; P(Ω) = 1; P(A_) = 1 - P(A)." }
                ]
              }
            ]
          },
          {
            id: "10-c9-b27",
            number: "Bài 27",
            title: "Thực hành tính xác suất theo định nghĩa cổ điển",
            sections: [
              {
                id: "10-c9-b27-s1",
                num: "1",
                title: "Sử dụng sơ đồ hình cây tính xác suất",
                subsections: [
                  { key: "a", title: "Dựng sơ đồ hình cây mô tả phép thử", summary: "Biểu diễn trực quan các giai đoạn của phép thử ngẫu nhiên nhiều bước." },
                  { key: "b", title: "Tính xác suất bằng đếm nhánh kết quả", summary: "Đếm số nhánh thuận lợi và tổng số nhánh trong sơ đồ hình cây." }
                ]
              },
              {
                id: "10-c9-b27-s2",
                num: "2",
                title: "Sử dụng các quy tắc đếm tính xác suất",
                subsections: [
                  { key: "a", title: "Tính số phần tử bằng quy tắc tổ hợp", summary: "Áp dụng hoán vị, chỉnh hợp, tổ hợp để đếm n(Ω) và n(A)." },
                  { key: "b", title: "Bài toán chọn thẻ, rút bài, bốc bóng", summary: "Các dạng bài toán xác suất thực hành thường gặp trong đề thi." }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "11": {
    grade: "11",
    gradeTitle: "Toán Lớp 11",
    subtitle: "Chương trình GDPT 2018 • Bộ sách Kết nối tri thức với cuộc sống",
    chapters: [
      {
        id: "c11-1",
        number: "Chương I",
        title: "Hàm số lượng giác và phương trình lượng giác",
        volume: 1,
        volumeLabel: "Tập 1",
        lessons: [
          {
            id: "11-c1-b1",
            number: "Bài 1",
            title: "Giá trị lượng giác của góc lượng giác",
            sections: [
              {
                id: "11-c1-b1-s1",
                num: "1",
                title: "Góc lượng giác và đơn vị rađian",
                subsections: [
                  { key: "a", title: "Khái niệm góc lượng giác", summary: "Tia đầu, tia cuối, chiều quay dương/âm và số đo góc lượng giác tổng quát α + k360°." },
                  { key: "b", title: "Đơn vị rađian và công thức đổi đơn vị", summary: "1 rad = 180°/π; công thức độ dài cung tròn l = α.R." }
                ]
              },
              {
                id: "11-c1-b1-s2",
                num: "2",
                title: "Đường tròn lượng giác và giá trị lượng giác",
                subsections: [
                  { key: "a", title: "Đường tròn lượng giác", summary: "Đường tròn định hướng tâm O, bán kính 1 với điểm gốc A(1; 0)." },
                  { key: "b", title: "Định nghĩa sin, cos, tan, cot", summary: "Trục hoành là trục côsin, trục tung là trục sin, trục tan và trục cot." }
                ]
              },
              {
                id: "11-c1-b1-s3",
                num: "3",
                title: "Hệ thức lượng giác cơ bản và giá trị góc liên quan đặc biệt",
                subsections: [
                  { key: "a", title: "Các hệ thức lượng giác cơ bản", summary: "sin²α + cos²α = 1; 1 + tan²α = 1/cos²α; 1 + cot²α = 1/sin²α; tanα.cotα = 1." },
                  { key: "b", title: "Giá trị góc liên quan đặc biệt", summary: "Cung đối nhau, bù nhau, hơn kém π, phụ nhau, hơn kém π/2." }
                ]
              }
            ]
          },
          {
            id: "11-c1-b2",
            number: "Bài 2",
            title: "Công thức lượng giác",
            sections: [
              {
                id: "11-c1-b2-s1",
                num: "1",
                title: "Công thức cộng",
                subsections: [
                  { key: "a", title: "Công thức cộng sin, cos, tan", summary: "cos(a ± b) = cos a cos b ∓ sin a sin b; sin(a ± b) = sin a cos b ± cos a sin b." },
                  { key: "b", title: "Ứng dụng tính giá trị lượng giác", summary: "Tính giá trị của các góc không đặc biệt đưa về tổng/hiệu của các góc đặc biệt." }
                ]
              },
              {
                id: "11-c1-b2-s2",
                num: "2",
                title: "Công thức nhân đôi và hạ bậc",
                subsections: [
                  { key: "a", title: "Công thức nhân đôi", summary: "sin 2a = 2 sin a cos a; cos 2a = cos²a - sin²a = 2cos²a - 1 = 1 - 2sin²a." },
                  { key: "b", title: "Công thức hạ bậc", summary: "cos²a = (1 + cos 2a)/2; sin²a = (1 - cos 2a)/2." }
                ]
              },
              {
                id: "11-c1-b2-s3",
                num: "3",
                title: "Công thức biến đổi tích thành tổng và tổng thành tích",
                subsections: [
                  { key: "a", title: "Biến đổi tích thành tổng", summary: "cos a cos b = 1/2 [cos(a-b) + cos(a+b)]; sin a sin b = 1/2 [cos(a-b) - cos(a+b)]." },
                  { key: "b", title: "Biến đổi tổng thành tích", summary: "cos u + cos v = 2 cos((u+v)/2) cos((u-v)/2); sin u + sin v = 2 sin((u+v)/2) cos((u-v)/2)." }
                ]
              }
            ]
          },
          {
            id: "11-c1-b3",
            number: "Bài 3",
            title: "Hàm số lượng giác",
            sections: [
              {
                id: "11-c1-b3-s1",
                num: "1",
                title: "Hàm số y = sin x và hàm số y = cos x",
                subsections: [
                  { key: "a", title: "Tập xác định, chu kì và tính chẵn lẻ", summary: "y = sin x là hàm số lẻ, chu kì 2π; y = cos x là hàm số chẵn, chu kì 2π." },
                  { key: "b", title: "Đồ thị và bảng biến thiên", summary: "Đường hình sin, cực đại, cực tiểu và các khoảng đồng biến, nghịch biến." }
                ]
              },
              {
                id: "11-c1-b3-s2",
                num: "2",
                title: "Hàm số y = tan x và hàm số y = cot x",
                subsections: [
                  { key: "a", title: "Tập xác định và tính tuần hoàn", summary: "y = tan x có D = R \\ {π/2 + kπ}, chu kì π; y = cot x có D = R \\ {kπ}, chu kì π." },
                  { key: "b", title: "Đồ thị và tính đơn điệu", summary: "Tính đồng biến của hàm tan và tính nghịch biến của hàm cot trên từng khoảng xác định." }
                ]
              }
            ]
          },
          {
            id: "11-c1-b4",
            number: "Bài 4",
            title: "Phương trình lượng giác cơ bản",
            sections: [
              {
                id: "11-c1-b4-s1",
                num: "1",
                title: "Phương trình sin x = m và cos x = m",
                subsections: [
                  { key: "a", title: "Công thức nghiệm phương trình sin x = m", summary: "Điều kiện có nghiệm |m| <= 1; x = α + k2π hoặc x = π - α + k2π." },
                  { key: "b", title: "Công thức nghiệm phương trình cos x = m", summary: "Điều kiện có nghiệm |m| <= 1; x = ±α + k2π." }
                ]
              },
              {
                id: "11-c1-b4-s2",
                num: "2",
                title: "Phương trình tan x = m và cot x = m",
                subsections: [
                  { key: "a", title: "Công thức nghiệm phương trình tan x = m", summary: "Luôn có nghiệm với mọi m; x = arctan m + kπ." },
                  { key: "b", title: "Công thức nghiệm phương trình cot x = m", summary: "Luôn có nghiệm với mọi m; x = arccot m + kπ." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-2",
        number: "Chương II",
        title: "Dãy số. Cấp số cộng và cấp số nhân",
        volume: 1,
        volumeLabel: "Tập 1",
        lessons: [
          {
            id: "11-c2-b5",
            number: "Bài 5",
            title: "Dãy số",
            sections: [
              {
                id: "11-c2-b5-s1",
                num: "1",
                title: "Khái niệm dãy số",
                subsections: [
                  { key: "a", title: "Định nghĩa dãy số vô hạn và hữu hạn", summary: "Hàm số u xác định trên tập số nguyên dương N*." },
                  { key: "b", title: "Cách cho một dãy số", summary: "Cho bởi công thức số hạng tổng quát, bằng quy nạp (truy hồi) hoặc diễn đạt bằng lời." }
                ]
              },
              {
                id: "11-c2-b5-s2",
                num: "2",
                title: "Dãy số tăng, dãy số giảm và dãy số bị chặn",
                subsections: [
                  { key: "a", title: "Dãy số tăng, dãy số giảm", summary: "un+1 > un với mọi n (dãy tăng); un+1 < un với mọi n (dãy giảm)." },
                  { key: "b", title: "Dãy số bị chặn", summary: "Khái niệm bị chặn trên (un <= M), bị chặn dưới (un >= m) và bị chặn." }
                ]
              }
            ]
          },
          {
            id: "11-c2-b6",
            number: "Bài 6",
            title: "Cấp số cộng",
            sections: [
              {
                id: "11-c2-b6-s1",
                num: "1",
                title: "Định nghĩa và số hạng tổng quát",
                subsections: [
                  { key: "a", title: "Định nghĩa cấp số cộng và công sai d", summary: "un+1 = un + d với mọi n >= 1." },
                  { key: "b", title: "Số hạng tổng quát un", summary: "un = u1 + (n - 1)d." }
                ]
              },
              {
                id: "11-c2-b6-s2",
                num: "2",
                title: "Tổng của n số hạng đầu tiên",
                subsections: [
                  { key: "a", title: "Công thức tính Sn", summary: "Sn = n(u1 + un)/2 = n[2u1 + (n-1)d]/2." },
                  { key: "b", title: "Ứng dụng giải quyết bài toán thực tế", summary: "Bài toán xếp ghế nhà hát, số tiền tích luỹ theo cấp số." }
                ]
              }
            ]
          },
          {
            id: "11-c2-b7",
            number: "Bài 7",
            title: "Cấp số nhân",
            sections: [
              {
                id: "11-c2-b7-s1",
                num: "1",
                title: "Định nghĩa và số hạng tổng quát",
                subsections: [
                  { key: "a", title: "Định nghĩa cấp số nhân và công bội q", summary: "un+1 = un . q với mọi n >= 1." },
                  { key: "b", title: "Số hạng tổng quát un", summary: "un = u1 . q^(n-1)." }
                ]
              },
              {
                id: "11-c2-b7-s2",
                num: "2",
                title: "Tổng của n số hạng đầu tiên",
                subsections: [
                  { key: "a", title: "Công thức tính Sn", summary: "Sn = u1(1 - q^n)/(1 - q) với q ≠ 1." },
                  { key: "b", title: "Ứng dụng lãi kép và tăng trưởng dân số", summary: "Mô hình tăng trưởng số mũ trong kinh tế tài chính và sinh học." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-3",
        number: "Chương III",
        title: "Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
        volume: 1,
        volumeLabel: "Tập 1",
        lessons: [
          {
            id: "11-c3-b8",
            number: "Bài 8",
            title: "Mẫu số liệu ghép nhóm",
            sections: [
              {
                id: "11-c3-b8-s1",
                num: "1",
                title: "Thu thập và phân nhóm số liệu",
                subsections: [
                  { key: "a", title: "Khái niệm mẫu số liệu ghép nhóm", summary: "Nhóm số liệu theo các nửa khoảng [ai; ai+1)." },
                  { key: "b", title: "Bảng tần số ghép nhóm", summary: "Cách đếm tần số mi của từng nhóm số liệu." }
                ]
              },
              {
                id: "11-c3-b8-s2",
                num: "2",
                title: "Biểu diễn mẫu số liệu ghép nhóm",
                subsections: [
                  { key: "a", title: "Tần số tương đối ghép nhóm", summary: "fi = mi / n và bảng phân bố phần trăm." },
                  { key: "b", title: "Biểu đồ tần số ghép nhóm", summary: "Biểu đồ cột liền kề thể hiện độ rộng và độ cao các nhóm số liệu." }
                ]
              }
            ]
          },
          {
            id: "11-c3-b9",
            number: "Bài 9",
            title: "Các số đặc trưng đo xu thế trung tâm",
            sections: [
              {
                id: "11-c3-b9-s1",
                num: "1",
                title: "Số trung bình",
                subsections: [
                  { key: "a", title: "Giá trị đại diện của nhóm ci", summary: "ci = (ai + ai+1) / 2 là trung điểm khoảng nhóm." },
                  { key: "b", title: "Công thức tính số trung bình ghép nhóm", summary: "x̄ = (1/n) ∑ mi.ci và ý nghĩa." }
                ]
              },
              {
                id: "11-c3-b9-s2",
                num: "2",
                title: "Trung vị và tứ phân vị của mẫu ghép nhóm",
                subsections: [
                  { key: "a", title: "Công thức tính trung vị Me", summary: "Xác định nhóm chứa trung vị và công thức nội suy trung vị." },
                  { key: "b", title: "Công thức tính các tứ phân vị Q1, Q2, Q3", summary: "Nội suy tứ phân vị thứ nhất và thứ ba trong mẫu ghép nhóm." }
                ]
              },
              {
                id: "11-c3-b9-s3",
                num: "3",
                title: "Mốt của mẫu số liệu ghép nhóm",
                subsections: [
                  { key: "a", title: "Nhóm chứa mốt và công thức Mo", summary: "Nhóm có tần số lớn nhất và công thức nội suy mốt Mo." },
                  { key: "b", title: "Ý nghĩa và so sánh với mẫu không ghép nhóm", summary: "Ứng dụng trong phân tích thống kê thực tế." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-4",
        number: "Chương IV",
        title: "Quan hệ song song trong không gian",
        volume: 1,
        volumeLabel: "Tập 1",
        lessons: [
          {
            id: "11-c4-b10",
            number: "Bài 10",
            title: "Đường thẳng và mặt phẳng trong không gian",
            sections: [
              {
                id: "11-c4-b10-s1",
                num: "1",
                title: "Khái niệm mở đầu",
                subsections: [
                  { key: "a", title: "Mặt phẳng và các tính chất thừa nhận", summary: "Điểm thuộc mặt phẳng, đường thẳng nằm trong mặt phẳng và các tiên đề Hilbert cơ bản." },
                  { key: "b", title: "Ba cách xác định một mặt phẳng", summary: "Qua ba điểm không thẳng hàng, qua một đường thẳng và điểm ngoài, qua hai đường thẳng cắt nhau." }
                ]
              },
              {
                id: "11-c4-b10-s2",
                num: "2",
                title: "Hình chóp và hình tứ diện",
                subsections: [
                  { key: "a", title: "Hình chóp", summary: "Đỉnh, đáy, các mặt bên, các cạnh bên và quy tắc vẽ hình." },
                  { key: "b", title: "Hình tứ diện", summary: "Hình bốn mặt tam giác và các cạnh đối diện." }
                ]
              }
            ]
          },
          {
            id: "11-c4-b11",
            number: "Bài 11",
            title: "Hai đường thẳng song song",
            isFeaturedLesson: true,
            isOlmInteractive: true,
            teacherWelcome: {
              greetingText: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
              audioScript: "Thầy Sáng chào cả lớp! Hôm nay thầy rất vui vì được đồng hành cùng các em trong tiết học này. Thầy hy vọng cùng các em thắp sáng lên những kiến thức mới, những góc nhìn thú vị trong bài học toán ngày hôm nay. Các em đã sẵn sàng tràn đầy năng lượng cùng thầy chưa? Chúng ta bắt đầu nhé!",
              audioUrl: "assets/audio/b11_11_welcome.mp3"
            },
            learningGoals: [
              "Nhận biết và phân biệt chính xác 4 vị trí tương đối của hai đường thẳng trong không gian: cắt nhau, trùng nhau, song song và chéo nhau.",
              "Nắm vững định nghĩa hai đường thẳng song song trong không gian và hai tính chất nền tảng: tính duy nhất qua một điểm nằm ngoài đường thẳng và tính chất bắc cầu ($a // c$ và $b // c \\Rightarrow a // b$).",
              "Làm chủ Định lý giao tuyến của ba mặt phẳng cùng hệ quả quan trọng: tìm giao tuyến song song của hai mặt phẳng lần lượt chứa hai đường thẳng song song.",
              "Vận dụng thành thạo các phương pháp chứng minh hai đường thẳng song song (đưa về hình học phẳng bằng đường trung bình, định lý Ta-lét, hình bình hành hoặc dùng định lý giao tuyến) và giải quyết các bài toán thiết diện."
            ],
            goalsAudioUrl: "assets/audio/b11_11_goals.mp3",
            hook: {
              title: "Tình huống thực tế: Cây cầu sắt và bí ẩn các đường thẳng không cắt nhau",
              story: "Các em hãy cùng Thầy quan sát một hình ảnh quen thuộc: Trên một cây cầu sắt hoặc cầu vượt giao thông, các thanh ray tàu hỏa chạy dài song song với nhau trên cùng một mặt sàn và không bao giờ gặp nhau. Thế nhưng, hãy nhìn thanh ray tàu chạy phía dưới với một đường dây cáp điện trên cao hoặc thanh lan can của tầng trên: chúng cũng không bao giờ cắt nhau, nhưng chúng lại không hề song song vì chúng nằm ở hai độ cao khác nhau và hướng lệch nhau trong không gian! Tại sao cùng là không cắt nhau, nhưng cặp này lại song song, còn cặp kia lại chéo nhau? Bài học Hai đường thẳng song song ngày hôm nay sẽ giúp các em phân biệt chính xác bản chất không gian này và làm chủ các định lý nền tảng của hình học ba chiều!",
              audioUrl: "assets/audio/b11_11_hook.mp3",
              bridge: "Để giải mã trọn vẹn câu hỏi thú vị này, Thầy trò mình sẽ cùng bước vào tìm hiểu Vị trí tương đối của hai đường thẳng trong không gian ngay sau đây!"
            },
            interactiveAudio: {
              title: "Bài giảng tương tác: Hai đường thẳng song song và chéo nhau trong không gian (Voice AI Nam Minh)",
              audioUrl: "assets/audio/b11_11_interactive_lecture.mp3",
              duration: 75,
              stops: [
                {
                  time: 30,
                  title: "Dừng tương tác 1: Phân biệt Song song vs Chéo nhau",
                  question: "Trong không gian, cho hai đường thẳng phân biệt $a$ và $b$ không có điểm chung nào. Khẳng định nào sau đây là <strong>ĐÚNG NHẤT</strong>?",
                  options: [
                    "$a$ và $b$ có thể song song hoặc chéo nhau",
                    "$a$ và $b$ chắc chắn song song với nhau",
                    "$a$ và $b$ chắc chắn chéo nhau với nhau",
                    "$a$ và $b$ cùng nằm trong một mặt phẳng"
                  ],
                  correctIndex: 0,
                  hint: "Không có điểm chung chưa đủ để khẳng định song song! Nếu có một mặt phẳng chứa cả hai thì chúng song song, còn nếu không có mặt phẳng nào chứa cả hai thì chúng chéo nhau.",
                  explain: "Rất xuất sắc! Trong không gian, hai đường thẳng không có điểm chung có thể song song (nếu đồng phẳng) hoặc chéo nhau (nếu không đồng phẳng). Đây là điểm khác biệt cốt lõi giữa hình học phẳng và hình học không gian!"
                },
                {
                  time: 70,
                  title: "Dừng tương tác 2: Định lý giao tuyến của ba mặt phẳng",
                  question: "Cho hai mặt phẳng $(\\alpha)$ và $(\\beta)$ cắt nhau theo giao tuyến $d$. Giả sử đường thẳng $a \\subset (\\alpha)$ và đường thẳng $b \\subset (\\beta)$ sao cho $a // b$. Khẳng định nào sau đây là đúng?",
                  options: [
                    "Giao tuyến $d$ song song với cả $a$ và $b$ (hoặc trùng với một trong hai đường)",
                    "Giao tuyến $d$ vuông góc với cả $a$ và $b$",
                    "Giao tuyến $d$ cắt $a$ tại một điểm",
                    "Giao tuyến $d$ chéo nhau với đường thẳng $b$"
                  ],
                  correctIndex: 0,
                  hint: "Hai mặt phẳng lần lượt chứa hai đường thẳng song song thì giao tuyến của chúng (nếu có) phải song song với hai đường thẳng ấy.",
                  explain: "Chính xác tuyệt đối! Đây chính là hệ quả vàng của định lý ba giao tuyến, được áp dụng liên tục để tìm giao tuyến và dựng thiết diện song song!"
                }
              ]
            },
            geogebra3D: {
              title: "Phòng thí nghiệm hình học không gian 3D tương tác: Hai đường thẳng song song & chéo nhau",
              description: "Dùng chuột hoặc chạm tay xoay hình chóp 3 chiều để quan sát sự khác biệt giữa hai đường song song và hai đường chéo nhau. Chuyển đổi giữa Mô hình 3D Canvas và GeoGebra Web.",
              iframeUrl: "https://www.geogebra.org/material/iframe/id/krhvyyd7"
            },
            sections: [
              {
                id: "11-c4-b11-s1",
                num: "1",
                title: "Vị trí tương đối của hai đường thẳng trong không gian",
                subsections: [
                  {
                    key: "a",
                    title: "Hai đường thẳng đồng phẳng (Cắt nhau, Trùng nhau, Song song)",
                    summary: "Cùng nằm trong một mặt phẳng: cắt nhau (1 điểm chung), song song (0 điểm chung) hoặc trùng nhau.",
                    teacherLecture: {
                      audioUrl: "assets/audio/b11_11_sec1a.mp3",
                      duration: 25,
                      coreSummary: "Mục 1a: Hai đường thẳng đồng phẳng. Trong không gian, nếu hai đường thẳng a và b cùng nằm trong một mặt phẳng, ta có ba vị trí tương đối quen thuộc của hình học phẳng: cắt nhau tại một điểm duy nhất, trùng nhau, hoặc song song với nhau (cùng thuộc 1 mặt phẳng và không có điểm chung)."
                    },
                    contentHtml: `
                      <div class="definition-card">
                        <div class="def-badge"><i class="fa-solid fa-layer-group"></i> Trường hợp 1: Có mặt phẳng chứa cả $a$ và $b$ (đồng phẳng)</div>
                        <p>Khi hai đường thẳng $a$ và $b$ cùng nằm trong một mặt phẳng $(\\alpha)$, vị trí tương đối giữa chúng giống hệt như trong hình học phẳng:</p>
                        <ul>
                          <li><strong>$a$ cắt $b$:</strong> $a$ và $b$ có đúng một điểm chung duy nhất: $a \\cap b = \\{M\\}$.</li>
                          <li><strong>$a$ song song $b$</strong> (ký hiệu $a // b$): $a$ và $b$ cùng thuộc $(\\alpha)$ và không có điểm chung nào:
                            <div class="math-highlight-box">
                              $a // b \\iff \\begin{cases} a, b \\subset (\\alpha) \\\\ a \\cap b = \\emptyset \\end{cases}$
                            </div>
                          </li>
                          <li><strong>$a$ trùng $b$</strong> (ký hiệu $a \\equiv b$): $a$ và $b$ có từ hai điểm chung phân biệt trở lên.</li>
                        </ul>
                      </div>
                    `,
                    workedExample: {
                      title: "Ví dụ 1: Nhận biết hai đường thẳng song song trong hình chóp",
                      problem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Chỉ ra các cặp đường thẳng song song nằm trong mặt phẳng đáy $(ABCD)$.",
                      solution: `
                        <p>Vì tứ giác $ABCD$ là hình bình hành nằm trong mặt phẳng đáy $(ABCD)$ nên:</p>
                        <p>- Cặp cạnh đối: $AB // CD$ (cùng nằm trong $(ABCD)$ và không có điểm chung).</p>
                        <p>- Cặp cạnh đối: $AD // BC$ (cùng nằm trong $(ABCD)$ và không có điểm chung).</p>
                        <p>Vậy ta có hai cặp đường thẳng song song trong mặt phẳng đáy là $AB // CD$ và $AD // BC$.</p>
                      `
                    },
                    teacherTip: "Lưu ý sống còn của Thầy Sáng: Định nghĩa hai đường thẳng song song trong không gian bắt buộc phải có 2 điều kiện: 1) Cùng nằm trong một mặt phẳng; 2) Không có điểm chung nào! Thiếu điều kiện 'đồng phẳng' là hoàn toàn sai!"
                  },
                  {
                    key: "b",
                    title: "Hai đường thẳng chéo nhau trong không gian",
                    summary: "Hai đường thẳng không cùng nằm trong bất kì mặt phẳng nào; không có điểm chung.",
                    teacherLecture: {
                      audioUrl: "assets/audio/b11_11_sec1b.mp3",
                      duration: 28,
                      coreSummary: "Mục 1b: Hai đường thẳng chéo nhau. Hai đường thẳng được gọi là chéo nhau nếu không có bất kì mặt phẳng nào chứa cả hai đường thẳng đó. Hai đường chéo nhau không cùng thuộc một mặt phẳng và không bao giờ có điểm chung."
                    },
                    contentHtml: `
                      <div class="definition-card">
                        <div class="def-badge"><i class="fa-solid fa-shuffle"></i> Trường hợp 2: Không có mặt phẳng nào chứa cả $a$ và $b$</div>
                        <p>Hai đường thẳng được gọi là <strong>chéo nhau</strong> nếu không có bất kì mặt phẳng nào chứa cả hai đường thẳng đó.</p>
                        <div class="math-highlight-box">
                          $a$ và $b$ chéo nhau $\\iff \\text{Không tồn tại mặt phẳng } (\\alpha) \\text{ chứa cả } a \\text{ và } b$
                        </div>
                        <p><strong>Tính chất nhận biết quan trọng:</strong></p>
                        <ul>
                          <li>Hai đường thẳng chéo nhau thì <strong>không bao giờ cắt nhau</strong> (không có điểm chung).</li>
                          <li>Hai đường thẳng chéo nhau thì <strong>không song song</strong> với nhau.</li>
                        </ul>
                      </div>
                    `,
                    workedExample: {
                      title: "Ví dụ 2: Nhận biết hai đường thẳng chéo nhau trong tứ diện",
                      problem: "Cho tứ diện $ABCD$. Chứng minh rằng hai đường thẳng $AB$ và $CD$ là hai đường thẳng chéo nhau.",
                      solution: `
                        <p>Giả sử phản chứng $AB$ và $CD$ không chéo nhau, nghĩa là tồn tại một mặt phẳng $(\\alpha)$ chứa cả $AB$ và $CD$.</p>
                        <p>Khi đó cả bốn điểm $A, B, C, D$ đều cùng thuộc mặt phẳng $(\\alpha)$, mâu thuẫn với giả thiết $ABCD$ là một tứ diện (bốn điểm không đồng phẳng).</p>
                        <p>Vậy $AB$ và $CD$ là hai đường thẳng chéo nhau. <em>(Tương tự: $AC$ và $BD$ chéo nhau; $AD$ và $BC$ chéo nhau).</em></p>
                      `
                    },
                    teacherTip: "Bảng phân biệt vị trí tương đối trong không gian của Thầy Sáng: <br>• Có điểm chung: 1 điểm chung $\\rightarrow$ Cắt nhau; Vô số điểm chung $\\rightarrow$ Trùng nhau.<br>• Không có điểm chung: Đồng phẳng $\\rightarrow$ Song song; Không đồng phẳng $\\rightarrow$ Chéo nhau!"
                  }
                ]
              },
              {
                id: "11-c4-b11-s2",
                num: "2",
                title: "Tính chất của hai đường thẳng song song",
                subsections: [
                  {
                    key: "a",
                    title: "Tính chất duy nhất và Tính chất bắc cầu",
                    summary: "Qua điểm ngoài đường thẳng có duy nhất một đường song song; tính chất bắc cầu: a // c và b // c => a // b.",
                    teacherLecture: {
                      audioUrl: "assets/audio/b11_11_sec2a.mp3",
                      duration: 26,
                      coreSummary: "Mục 2a: Tính chất hai đường thẳng song song: Trong không gian, qua một điểm nằm ngoài đường thẳng cho trước, có một và chỉ một đường thẳng song song với đường đã cho. Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau: a song song c và b song song c suy ra a song song b."
                    },
                    contentHtml: `
                      <div class="theorem-card">
                        <div class="theorem-badge"><i class="fa-solid fa-fingerprint"></i> Định lý 1: Tính duy nhất</div>
                        <p>Trong không gian, qua một điểm không thuộc một đường thẳng cho trước, có <strong>một và chỉ một</strong> đường thẳng song song với đường thẳng đã cho.</p>
                      </div>

                      <div class="theorem-card" style="margin-top: 14px;">
                        <div class="theorem-badge"><i class="fa-solid fa-link"></i> Định lý 2: Tính chất bắc cầu</div>
                        <p>Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau:</p>
                        <div class="math-highlight-box">
                          $\\begin{cases} a // c \\\\ b // c \\\\ a \\neq b \\end{cases} \\implies a // b$
                        </div>
                      </div>
                    `,
                    workedExample: {
                      title: "Ví dụ 3: Ứng dụng tính chất bắc cầu chứng minh song song",
                      problem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SB$. Chứng minh rằng $MN // CD$.",
                      solution: `
                        <p>Xét tam giác $SAB$, ta có $M$ là trung điểm của $SA$, $N$ là trung điểm của $SB$.</p>
                        <p>Do đó $MN$ là đường trung bình của tam giác $SAB$, suy ra: $MN // AB$ (1).</p>
                        <p>Lại có tứ giác $ABCD$ là hình bình hành nên: $AB // CD$ (2).</p>
                        <p>Từ (1) và (2), theo tính chất bắc cầu ta suy ra: $MN // CD$ (điều phải chứng minh).</p>
                      `
                    }
                  },
                  {
                    key: "b",
                    title: "Định lý giao tuyến của ba mặt phẳng & Phương pháp chứng minh song song",
                    summary: "Ba mặt phẳng cắt nhau theo 3 giao tuyến thì đôi một song song hoặc đồng quy. Hệ quả tìm giao tuyến song song.",
                    teacherLecture: {
                      audioUrl: "assets/audio/b11_11_sec2b.mp3",
                      duration: 30,
                      coreSummary: "Mục 2b: Định lý giao tuyến của ba mặt phẳng: Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt, thì ba giao tuyến đó hoặc đôi một song song, hoặc đồng quy tại một điểm. Hệ quả: Khi hai mặt phẳng lần lượt chứa hai đường thẳng song song, giao tuyến của chúng nếu có chắc chắn phải song song với hai đường thẳng ấy."
                    },
                    contentHtml: `
                      <div class="theorem-card">
                        <div class="theorem-badge"><i class="fa-solid fa-diagram-project"></i> Định lý 3: Định lý về ba giao tuyến</div>
                        <p>Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt, thì ba giao tuyến đó hoặc <strong>đôi một song song</strong>, hoặc <strong>đồng quy</strong> tại một điểm.</p>
                        <div class="math-highlight-box">
                          $\\begin{cases} (\\alpha) \\cap (\\beta) = d_1 \\\\ (\\beta) \\cap (\\gamma) = d_2 \\\\ (\\gamma) \\cap (\\alpha) = d_3 \\end{cases} \\implies \\begin{cases} d_1 // d_2 // d_3 \\quad \\text{hoặc} \\\\ d_1, d_2, d_3 \\text{ đồng quy tại } I \\end{cases}$
                        </div>
                      </div>

                      <div class="theorem-card" style="margin-top: 14px;">
                        <div class="theorem-badge"><i class="fa-solid fa-crown"></i> Hệ quả vàng: Tìm giao tuyến song song</div>
                        <p>Nếu hai mặt phẳng phân biệt lần lượt chứa hai đường thẳng song song thì giao tuyến của chúng (nếu có) cũng song song với hai đường thẳng đó (hoặc trùng với một trong hai đường):</p>
                        <div class="math-highlight-box">
                          $\\begin{cases} a \\subset (\\alpha), \\; b \\subset (\\beta) \\\\ a // b \\\\ (\\alpha) \\cap (\\beta) = d \\end{cases} \\implies d // a // b$
                        </div>
                      </div>
                    `,
                    workedExample: {
                      title: "Ví dụ 4: Tìm giao tuyến của hai mặt phẳng chứa hai đường song song",
                      problem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với đáy lớn $AB$ và đáy nhỏ $CD$ ($AB // CD$). Tìm giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$.",
                      solution: `
                        <p>Ta có:</p>
                        <p>- Điểm chung: $S \\in (SAB) \\cap (SCD)$.</p>
                        <p>- Hai đường thẳng song song nằm trong hai mặt phẳng: $AB \\subset (SAB)$ và $CD \\subset (SCD)$ với $AB // CD$.</p>
                        <p>Áp dụng hệ quả của định lý ba giao tuyến, giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng $d$ đi qua $S$ và song song với $AB, CD$ ($d // AB // CD$).</p>
                      `
                    },
                    teacherTip: "Chiến thuật của Thầy Sáng: Muốn tìm giao tuyến của 2 mặt phẳng chứa 2 đường thẳng song song: Tìm 1 điểm chung, rồi từ điểm chung đó kẻ một đường thẳng chạy song song với 2 đường thẳng ấy là xong ngay!"
                  }
                ]
              }
            ],
            practiceQuestions: [
              {
                id: "q-11-11-1",
                difficulty: "nb",
                difficultyLabel: "Mức 1: Nhận biết",
                hasDynamicVariation: true,
                prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Cặp đường thẳng nào sau đây là <strong>hai đường thẳng chéo nhau</strong>?",
                options: [
                  "A. $SA$ và $CD$",
                  "B. $AB$ và $CD$",
                  "C. $SA$ và $AB$",
                  "D. $AC$ và $BD$"
                ],
                correctIndex: 0,
                explanation: "Hai đường thẳng $SA$ và $CD$ không cùng nằm trong bất kỳ mặt phẳng nào và không có điểm chung, do đó chúng là hai đường thẳng chéo nhau."
              },
              {
                id: "q-11-11-2",
                difficulty: "th",
                difficultyLabel: "Mức 2: Thông hiểu",
                hasDynamicVariation: true,
                prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SB$. Khẳng định nào sau đây là <strong>ĐÚNG</strong>?",
                options: [
                  "A. $MN // CD$",
                  "B. $MN$ cắt $CD$",
                  "C. $MN$ và $CD$ chéo nhau",
                  "D. $MN // SC$"
                ],
                correctIndex: 0,
                explanation: "Vì $MN$ là đường trung bình của tam giác $SAB$ nên $MN // AB$. Lại có $ABCD$ là hình bình hành nên $AB // CD$. Theo tính chất bắc cầu: $MN // CD$."
              },
              {
                id: "q-11-11-3",
                difficulty: "vd",
                difficultyLabel: "Mức 3: Vận dụng",
                hasDynamicVariation: true,
                prompt: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với hai đáy $AB$ và $CD$ ($AB // CD, AB > CD$). Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là:",
                options: [
                  "A. Đường thẳng qua $S$ và song song với $AB, CD$",
                  "B. Đường thẳng nối $S$ với giao điểm của $AD$ và $BC$",
                  "C. Đường thẳng qua $S$ và cắt cạnh đáy $AB$",
                  "D. Đoạn thẳng $SO$ với $O$ là giao điểm của $AC$ và $BD$"
                ],
                correctIndex: 0,
                explanation: "Hai mặt phẳng $(SAB)$ và $(SCD)$ có điểm chung $S$ và lần lượt chứa hai đường thẳng song song $AB // CD$. Theo hệ quả định lý ba giao tuyến, giao tuyến của chúng là đường thẳng qua $S$ và song song với $AB, CD$."
              },
              {
                id: "q-11-11-4",
                difficulty: "vdc",
                difficultyLabel: "Mức 4: Vận dụng cao",
                hasDynamicVariation: true,
                prompt: "Cho tứ diện $ABCD$ có cặp cạnh đối diện $AB = 8\\text{ cm}$ và $CD = 6\\text{ cm}$. Mặt phẳng $(\\alpha)$ song song với cả $AB$ và $CD$, cắt các cạnh $BC, BD, AD, AC$ lần lượt tại bốn điểm $M, N, P, Q$. Thiết diện $MNPQ$ là hình gì và chu vi của thiết diện đó bằng bao nhiêu?",
                options: [
                  "A. Hình bình hành, chu vi bằng $14\\text{ cm}$",
                  "B. Hình chữ nhật, chu vi bằng $18\\text{ cm}$",
                  "C. Hình thang cân, chu vi bằng $28\\text{ cm}$",
                  "D. Hình thoi, chu vi bằng $16\\text{ cm}$"
                ],
                correctIndex: 0,
                explanation: "Vì $(\\alpha) // AB$ nên $MN // AB // PQ \\Rightarrow MN // PQ$. Vì $(\\alpha) // CD$ nên $MQ // CD // NP \\Rightarrow MQ // NP$. Do đó tứ giác $MNPQ$ là hình bình hành. Theo định lý Ta-lét: $MN = \\frac{CM}{CB} \\cdot AB$ và $MQ = \\frac{BM}{BC} \\cdot CD$. Chu vi thiết diện bằng $2(MN + MQ) = AB + CD = 8 + 6 = 14\\text{ cm}$ (luôn không đổi với mọi vị trí của mặt phẳng $(\\alpha)$!)."
              }
            ],
            realworldWrapup: {
              title: "QUAY VỀ GIẢI QUYẾT BÀI TOÁN TÌNH HUỐNG MỞ ĐẦU: CÂY CẦU SẮT VÀ ĐƯỜNG RAY",
              recap: "Tại sao hai thanh ray tàu hỏa không cắt nhau thì song song, còn thanh ray với dây cáp điện trên cao không cắt nhau lại chéo nhau?",
              solution: `
                <p><strong>Lời giải thích khoa học của Thầy Sáng:</strong></p>
                <ol>
                  <li><strong>Đối với hai thanh ray tàu hỏa:</strong> Chúng được cố định trên cùng một mặt phẳng tà-vẹt và mặt đất $(P)$. Vì chúng cùng thuộc một mặt phẳng và khoảng cách giữa hai thanh ray luôn bằng $1\\text{ m}$ hoặc $1{,}435\\text{ m}$ (không bao giờ có điểm chung) nên theo định nghĩa: <strong>Hai thanh ray là hai đường thẳng song song</strong>.</li>
                  <li><strong>Đối với thanh ray và đường dây cáp điện trên không (hoặc thanh giàn cầu tầng trên):</strong> Thanh ray nằm ở mặt phẳng sàn đất $(P)$, còn dây cáp điện chạy trên các cột trụ cao ở một mặt phẳng không gian khác lệch phương. Không thể tìm được bất kỳ một mặt phẳng nào có thể chứa được đồng thời cả thanh ray và dây cáp điện. Dù kéo dài vô tận chúng cũng không bao giờ gặp nhau, nhưng chúng <strong>không song song mà là hai đường thẳng chéo nhau</strong>.</li>
                </ol>
                <p><em>Ứng dụng kỹ thuật:</em> Trong thiết kế cầu vượt nhiều tầng và giàn không gian chịu lực (Space Truss), các kỹ sư phải tính toán chính xác các thanh giằng song song để truyền tải trọng phân bố đều, và các thanh giằng chéo nhau để chống xoắn vặn gió bão, tạo nên những công trình thế kỷ vững chãi và an toàn tuyệt đối!</p>
              `,
              audioUrl: "assets/audio/b11_11_wrapup.mp3",
              audioScript: "Như vậy Thầy trò mình đã giải quyết trọn vẹn câu hỏi mở đầu về cây cầu sắt và đường ray. Hai thanh ray tàu hỏa cùng nằm trên mặt tà vẹt và không cắt nhau nên chúng song song. Còn thanh ray với dây cáp điện trên cao nằm ở hai mặt phẳng lệch nhau nên chúng là hai đường thẳng chéo nhau. Hiểu rõ điều này giúp các kỹ sư thiết kế các tầng giàn cầu vượt chịu lực an toàn và chính xác tuyệt đối. Các em hãy tiếp tục làm bài tập luyện tập thích ứng bên dưới để tích luỹ điểm thưởng nhé!"
            }
          },
          {
            id: "11-c4-b12",
            number: "Bài 12",
            title: "Đường thẳng và mặt phẳng song song",
            isFeaturedLesson: true,
            teacherWelcome: {
              greetingText: "Thầy Sáng xin chào tất cả các em học sinh lớp 11 yêu quý! Khi bước vào môn Hình học không gian, nhiều bạn thường cảm thấy bỡ ngỡ vì phải rèn luyện trí tưởng tượng hình học ba chiều. Nhưng các em đừng lo lắng, Thầy Sáng sẽ đồng hành và giúp các em làm chủ từng quy tắc một cách trực quan, dễ hiểu nhất. Bài 12 hôm nay, 'Đường thẳng và mặt phẳng song song', là bài học bản lề quan trọng bậc nhất của học kỳ 1. Trước khi học, các em hãy cùng Thầy điểm qua các mục tiêu cốt lõi: Thứ nhất, nhận biết và phân biệt chính xác 3 vị trí tương đối giữa đường thẳng và mặt phẳng. Thứ hai, nắm vững Định lí 1 – chìa khóa vàng để chứng minh đường thẳng song song với mặt phẳng. Thứ ba, vận dụng linh hoạt Định lí 2 về giao tuyến song song để giải quyết các bài toán thiết diện trong các đề thi. Thầy tin rằng với sự tập trung và tinh thần học hỏi chủ động, các em sẽ học thật vui và đạt điểm số thật cao. Nào, Thầy trò mình cùng bắt đầu tiết học nhé!",
              audioScript: "Thầy Sáng xin chào tất cả các em học sinh lớp 11 yêu quý! Khi bước vào môn Hình học không gian, nhiều bạn thường cảm thấy bỡ ngỡ vì phải rèn luyện trí tưởng tượng hình học ba chiều. Nhưng các em đừng lo lắng, Thầy Sáng sẽ đồng hành và giúp các em làm chủ từng quy tắc một cách trực quan, dễ hiểu nhất. Bài 12 hôm nay, Đường thẳng và mặt phẳng song song, là bài học bản lề quan trọng bậc nhất của học kỳ 1. Trước khi học, các em hãy cùng Thầy điểm qua các mục tiêu cốt lõi. Thứ nhất, nhận biết và phân biệt chính xác 3 vị trí tương đối giữa đường thẳng và mặt phẳng. Thứ hai, nắm vững Định lí 1 – chìa khóa vàng để chứng minh đường thẳng song song với mặt phẳng. Thứ ba, vận dụng linh hoạt Định lí 2 về giao tuyến song song để giải quyết các bài toán thiết diện trong các đề thi. Thầy tin rằng với sự tập trung và tinh thần học hỏi chủ động, các em sẽ học thật vui và đạt điểm số thật cao. Nào, Thầy trò mình cùng bắt đầu tiết học nhé!",
              audioUrl: "assets/audio/b12_welcome.mp3"
            },
            learningGoals: [
              "Nhận biết và phân biệt chính xác 3 vị trí tương đối giữa đường thẳng và mặt phẳng trong không gian.",
              "Nắm vững Định lí 1 và làm chủ phương pháp chứng minh đường thẳng song song với mặt phẳng (kỹ năng cốt lõi hình 11).",
              "Vận dụng Định lí 2 (Định lí giao tuyến) và hệ quả để dựng thiết diện và tìm giao tuyến song song.",
              "Liên hệ và giải quyết các bài toán thực tiễn về cấu trúc song song trong đời sống và kỹ thuật xây dựng."
            ],
            hook: {
              title: "Tình huống thực tế: Thiết kế xà gồ đỡ mái và dầm cầu trục nhà xưởng",
              story: "Trong các nhà xưởng công nghiệp tại Thoại Sơn, An Giang, các thanh xà gồ thép chịu lực được lắp đặt trên cao để đỡ mái tôn. Toàn bộ các thanh xà gồ này luôn giữ khoảng cách ổn định và song song với mặt nền nhà xưởng rộng hàng ngàn mét vuông.",
              question: "Làm thế nào người kỹ sư xây dựng có thể khẳng định thanh xà gồ d song song với toàn bộ mặt sàn (P) mà không cần phải đo khoảng cách từ vô số điểm trên thanh xà xuống sàn?",
              teacherNote: "Đó chính là sức mạnh của Định lí 1 trong bài học hôm nay: Chỉ cần tìm thấy một đường thẳng d' trên sàn song song với xà gồ d, ta có thể kết luận chắc chắn 100% rằng xà gồ d song song với toàn bộ mặt sàn!",
              illustration: "assets/images/lessons/hook_xa_go_mai_nha.svg",
              illustrationCaption: "Các thanh xà gồ đỡ mái nhà xưởng được đặt song song với mặt sàn bê tông."
            },
            teacherVoiceGeneral: {
              title: "Lời giảng của Thầy Sáng: Giới thiệu Đường thẳng và mặt phẳng song song",
              script: "Thầy Sáng xin chào tất cả các em học sinh lớp 11 yêu quý! Khi học hình học không gian, nhiều bạn thường sợ vì khó tưởng tượng hình vẽ ba chiều trên mặt giấy phẳng. Nhưng hôm nay, Thầy Sáng sẽ tặng các em một công thức tư duy vô cùng đơn giản và hiệu quả. Các em hãy nhớ lời Thầy dặn: Một đường thẳng muốn song song với một mặt phẳng, nó không cần phải quen biết toàn bộ mặt phẳng đó. Nó chỉ cần tìm được một người bạn thân nằm sẵn trong mặt phẳng, và song song với người bạn ấy! Chỉ một định lí ngắn gọn ấy thôi sẽ giúp các em giải quyết đến 80 phần trăm các bài toán chứng minh song song trong các đề thi học kì và thi thử. Nào, các em hãy cùng Thầy bắt đầu bài học nhé!",
              audioUrl: "assets/audio/b12_main_lecture.mp3"
            },
            sections: [
              {
                id: "11-c4-b12-s1",
                num: "1",
                title: "1. Vị trí tương đối của đường thẳng và mặt phẳng",
                subsections: [
                  {
                    key: "a",
                    title: "Ba vị trí tương đối giữa đường thẳng và mặt phẳng",
                    summary: "Đường thẳng và mặt phẳng có thể song song (0 điểm chung), cắt nhau (1 điểm chung) hoặc đường thẳng nằm trong mặt phẳng (vô số điểm chung).",
                    illustration: "assets/images/lessons/hinh1_vi_tri_tuong_doi_11.svg",
                    illustrationCaption: "Ba vị trí tương đối: Song song (0 điểm chung), Cắt nhau (1 điểm chung M), Nằm trong (vô số điểm chung).",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-shapes"></i> 3 Vị trí tương đối</div>
                          <p>Cho đường thẳng $d$ và mặt phẳng $(\\alpha)$. Ta có đúng ba khả năng sau:</p>
                          <ol>
                            <li><strong>$d$ song song với $(\\alpha)$</strong> (ký hiệu $d // (\\alpha)$): $d$ và $(\\alpha)$ không có điểm chung nào:
                            $d \\cap (\\alpha) = \\emptyset$</li>
                            <li><strong>$d$ cắt $(\\alpha)$</strong> tại điểm $M$ (ký hiệu $d \\cap (\\alpha) = \\{M\\}$): $d$ và $(\\alpha)$ có đúng một điểm chung duy nhất.</li>
                            <li><strong>$d$ nằm trong $(\\alpha)$</strong> (ký hiệu $d \\subset (\\alpha)$): $d$ và $(\\alpha)$ có từ 2 điểm chung phân biệt trở lên, do đó có vô số điểm chung.</li>
                          </ol>
                        </div>
                      </div>
                    `,
                    teacherLecture: "Các em hãy đếm số điểm chung: Không có điểm chung nào là song song; Đúng một điểm chung là cắt nhau; Còn nếu có từ hai điểm chung trở lên thì lập tức đường thẳng nằm bẹp dí trong mặt phẳng luôn! Hãy ghi nhớ điều này để làm các câu hỏi lý thuyết trắc nghiệm nhé.",
                    workedExample: {
                      title: "Ví dụ 1: Nhận biết vị trí tương đối trong hình chóp",
                      problem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $O$ là giao điểm của $AC$ và $BD$. Xác định vị trí tương đối của các đường thẳng $AB, SO, AC$ đối với mặt phẳng $(SBD)$.",
                      thinking: "Xem xét các điểm chung giữa từng đường thẳng với mặt phẳng (SBD).",
                      solution: `
                        <p>1. Xét đường thẳng $SO$: Vì $S \\in (SBD)$ và $O \\in BD \\subset (SBD)$ nên $SO \\subset (SBD)$ (đường thẳng nằm trong mặt phẳng).</p>
                        <p>2. Xét đường thẳng $AC$: $AC \\cap (SBD) = \\{O\\}$ và $AC$ không nằm trong $(SBD)$, do đó $AC$ cắt mặt phẳng $(SBD)$ tại điểm duy nhất $O$.</p>
                        <p>3. Xét đường thẳng $AB$: Ta có $AB \\cap (SBD) = \\{B\\}$ vì $B$ là đỉnh chung. Do đó $AB$ cắt mặt phẳng $(SBD)$ tại điểm $B$.</p>
                      `,
                      teacherGuidance: "Điểm mấu chốt là tìm giao điểm chung giữa đường thẳng và các đường thẳng nằm trong mặt phẳng. Nếu điểm đó là duy nhất thì đường thẳng cắt mặt phẳng.",
                      audioScript: "Trong ví dụ 1, đường thẳng S O có cả hai điểm S và O thuộc mặt phẳng S B D nên S O nằm trong mặt phẳng S B D. Đường thẳng A C cắt mặt phẳng S B D tại điểm O, còn đường thẳng A B cắt mặt phẳng S B D tại điểm B các em nhé!"
                    }
                  }
                ]
              },
              {
                id: "11-c4-b12-s2",
                num: "2",
                title: "2. Dấu hiệu nhận biết đường thẳng song song với mặt phẳng (Định lí 1)",
                subsections: [
                  {
                    key: "a",
                    title: "Nội dung Định lí 1 & Phương pháp chứng minh",
                    summary: "Nếu đường thẳng d không nằm trong mặt phẳng và song song với một đường thẳng nằm trong mặt phẳng thì d song song với mặt phẳng đó.",
                    illustration: "assets/images/lessons/hinh2_dinh_li_1_nhan_biet_11.svg",
                    illustrationCaption: "Định lí 1: d không nằm trong (alpha) và d // d' nằm trong (alpha) suy ra d // (alpha); Hình chóp S.ABCD.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-star"></i> Định lí 1 (Dấu hiệu nhận biết cốt lõi)</div>
                          <p>Nếu đường thẳng $d$ không nằm trong mặt phẳng $(\\alpha)$ và song song với một đường thẳng $d'$ nằm trong $(\\alpha)$ thì $d$ song song với $(\\alpha)$.</p>
                          <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 12px 16px; margin: 10px 0; border-radius: 4px;">
                            $\\begin{cases} d \\not\\subset (\\alpha) \\\\ d' \\subset (\\alpha) \\\\ d // d' \\end{cases} \\implies d // (\\alpha)$
                          </div>
                        </div>
                        <div class="note-box">
                          <i class="fa-solid fa-pen-ruler"></i> <strong>Sơ đồ 3 bước chứng minh $d // (\\alpha)$ của Thầy Sáng:</strong>
                          <p><strong>Bước 1:</strong> Khẳng định $d$ không nằm trong $(\\alpha)$ ($d \\not\\subset (\\alpha)$).</p>
                          <p><strong>Bước 2:</strong> Tìm một đường thẳng $d'$ nằm trong $(\\alpha)$ ($d' \\subset (\\alpha)$).</p>
                          <p><strong>Bước 3:</strong> Chứng minh $d // d'$ (sử dụng đường trung bình tam giác, hình bình hành hoặc định lí Thales).</p>
                        </div>
                      </div>
                    `,
                    teacherLecture: "Định lí 1 chính là câu thần chú của hình học không gian 11: Để chứng minh đường song song với mặt, ta đưa về chứng minh hai đường thẳng song song trong hình học phẳng! Tìm cho Thầy đường thẳng d phẩy nằm sẵn trong mặt phẳng, chứng minh d song song d phẩy bằng đường trung bình hay hình bình hành là xong!",
                    workedExample: {
                      title: "Ví dụ 2: Chứng minh đường thẳng song song với mặt phẳng",
                      problem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SB$. Chứng minh rằng $MN // (ABCD)$ và $MN // (SCD)$.",
                      thinking: "MN là đường trung bình của tam giác SAB, suy ra MN song song với AB. Do AB nằm trong (ABCD) nên MN song song với (ABCD).",
                      solution: `
                        <p>1. <strong>Chứng minh $MN // (ABCD)$</strong>:</p>
                        <ul>
                          <li>Trong tam giác $SAB$, vì $M, N$ lần lượt là trung điểm của $SA, SB$ nên $MN$ là đường trung bình của tam giác $SAB$.</li>
                          <li>Suy ra $MN // AB$.</li>
                          <li>Mặt khác $AB \\subset (ABCD)$ và $MN \\not\\subset (ABCD)$.</li>
                          <li>Theo Định lí 1: $MN // (ABCD)$.</li>
                        </ul>
                        <p>2. <strong>Chứng minh $MN // (SCD)$</strong>:</p>
                        <ul>
                          <li>Vì $ABCD$ là hình bình hành nên $AB // CD$.</li>
                          <li>Lại có $MN // AB$, suy ra $MN // CD$.</li>
                          <li>Mặt khác $CD \\subset (SCD)$ và $MN \\not\\subset (SCD)$.</li>
                          <li>Theo Định lí 1: $MN // (SCD)$.</li>
                        </ul>
                      `,
                      teacherGuidance: "Các em phải viết đủ 3 điều kiện: MN không nằm trong mặt phẳng, đường thẳng song song nằm trong mặt phẳng, và hai đường song song nhau. Thiếu điều kiện d không nằm trong mặt phẳng sẽ bị trừ điểm trình bày!",
                      audioScript: "Trong ví dụ 2, M N là đường trung bình của tam giác S A B nên M N song song với A B. Vì A B nằm trong mặt đáy A B C D và M N không nằm trong đáy, nên theo Định lí một, M N song song với mặt phẳng A B C D. Tương tự, M N cũng song song với C D nên M N song song với mặt phẳng S C D các em nhé!"
                    }
                  }
                ]
              },
              {
                id: "11-c4-b12-s3",
                num: "3",
                title: "3. Tính chất của đường thẳng song song với mặt phẳng (Định lí 2)",
                subsections: [
                  {
                    key: "a",
                    title: "Định lí 2 (Định lí giao tuyến song song) & Hệ quả",
                    summary: "Mặt phẳng chứa đường thẳng song song cắt mặt phẳng kia theo giao tuyến song song với đường thẳng đó.",
                    illustration: "assets/images/lessons/hinh3_dinh_li_2_giao_tuyen_11.svg",
                    illustrationCaption: "Định lí 2: Mặt phẳng (beta) chứa d // (alpha) cắt (alpha) theo giao tuyến d' thì d // d'.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-code-fork"></i> Định lí 2 (Giao tuyến song song)</div>
                          <p>Cho đường thẳng $d$ song song với mặt phẳng $(\\alpha)$. Nếu mặt phẳng $(\\beta)$ chứa $d$ và cắt $(\\alpha)$ theo giao tuyến $d'$ thì $d'$ song song với $d$.</p>
                          <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 10px 15px; margin: 10px 0; border-radius: 4px;">
                            $\\begin{cases} d // (\\alpha) \\\\ d \\subset (\\beta) \\\\ (\\alpha) \\cap (\\beta) = d' \\end{cases} \\implies d // d'$
                          </div>
                        </div>
                        <div class="note-box">
                          <i class="fa-solid fa-lightbulb"></i> <strong>Hệ quả quan trọng:</strong>
                          <p>Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có) cũng song song với đường thẳng đó.</p>
                        </div>
                      </div>
                    `,
                    teacherLecture: "Định lí 2 cực kỳ lợi hại khi làm bài toán tìm giao tuyến và dựng thiết diện các em nhé! Khi hai mặt phẳng chứa hai đường thẳng song song, giao tuyến của chúng nếu có chắc chắn phải đi qua điểm chung và chạy song song với hai đường thẳng ấy!",
                    workedExample: {
                      title: "Ví dụ 3: Xác định giao tuyến và thiết diện",
                      problem: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB // CD, AB > CD$). Gọi $M$ là điểm nằm trên cạnh $SA$ ($M$ không trùng với $S$ và $A$). Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với $AB, BC$. Xác định thiết diện của hình chóp cắt bởi mặt phẳng $(\\alpha)$.",
                      thinking: "Mặt phẳng (alpha) chứa các đường thẳng song song với AB và BC. Áp dụng định lí 2 để kẻ các giao tuyến song song qua các đỉnh.",
                      solution: `
                        <p>1. Trong mặt phẳng $(SAB)$, qua $M$ kẻ đường thẳng song song với $AB$, cắt $SB$ tại $N$. Vì $(\\alpha) // AB$ nên $MN$ là giao tuyến của $(\\alpha)$ với $(SAB)$.</p>
                        <p>2. Trong mặt phẳng $(SBC)$, qua $N$ kẻ đường thẳng song song với $BC$, cắt $SC$ tại $P$. Vì $(\\alpha) // BC$ nên $NP$ là giao tuyến của $(\\alpha)$ với $(SBC)$.</p>
                        <p>3. Vì $AB // CD$ nên $(\\alpha) // CD$. Trong $(SCD)$, qua $P$ kẻ đường thẳng song song với $CD$, cắt $SD$ tại $Q$.</p>
                        <p>4. Nối $Q$ với $M$ trong mặt phẳng $(SAD)$. Thiết diện cần tìm là tứ giác $MNPQ$.</p>
                        <p>Vì $MN // AB$ và $PQ // CD // AB$ nên $MN // PQ$. Vậy thiết diện $MNPQ$ là một hình thang.</p>
                      `,
                      teacherGuidance: "Khi bài toán cho mặt phẳng song song với một đường thẳng, qua điểm đã biết ta cứ kẻ đường thẳng song song với đường thẳng đó để tìm các đỉnh thiết diện tiếp theo.",
                      audioScript: "Trong ví dụ 3, áp dụng Định lí 2, qua điểm M ta kẻ đường thẳng song song với A B cắt S B tại N; qua N kẻ song song với B C cắt S C tại P; và qua P kẻ song song với C D cắt S D tại Q. Thiết diện thu được chính là hình thang M N P Q các em nhé!"
                    }
                  }
                ]
              }
            ],
            realworldWrapup: {
              title: "VẬN DỤNG THỰC TẾ: QUAY LẠI GIẢI QUYẾT BÀI TOÁN TÌNH HUỐNG MỞ ĐẦU",
              recap: "Làm thế nào người kỹ sư xây dựng có thể khẳng định thanh xà gồ d song song với toàn bộ mặt sàn (P) mà không cần phải đo khoảng cách từ vô số điểm trên thanh xà xuống sàn?",
              illustration: "assets/images/lessons/wrapup_giai_quyet_xa_go_11.svg",
              illustrationCaption: "Mô hình toán học không gian chứng minh xà gồ mái song song mặt sàn bê tông.",
              solution: `
                <p><strong>Lời giải chi tiết & Mô hình hóa Toán học của Thầy Sáng:</strong></p>
                <p>1. <strong>Mô hình hóa hình học:</strong> Xem mặt nền bê tông nhà xưởng là mặt phẳng $(P)$, và thanh xà gồ thép trên mái nhà là đường thẳng $d$.</p>
                <p>2. <strong>Áp dụng Định lí 1:</strong>
                <ul>
                  <li>Thanh xà gồ lắp đặt trên cao cách sàn $8\\text{ m}$, do đó $d \\not\\subset (P)$.</li>
                  <li>Dưới mặt sàn, các kỹ sư luôn thi công mép chân tường hoặc vạch tim phân làn nhà xưởng là một đường thẳng $b \\subset (P)$.</li>
                  <li>Khi lắp đặt, thợ dựng căn chỉnh xà gồ $d$ song song chính xác với đường gióng chân tường $b$ dưới sàn ($d // b$).</li>
                </ul>
                </p>
                <p>3. <strong>Kết luận:</strong> Theo Định lí 1:
                $\\begin{cases} d \\not\\subset (P) \\\\ b \\subset (P) \\\\ d // b \\end{cases} \\implies d // (P)$
                </p>
                <p><strong>Ý nghĩa thực tế:</strong> Nhờ định lí toán học, kỹ sư chỉ cần căn chỉnh song song với một đường mốc dưới mặt đất là bảo đảm toàn bộ thanh xà gồ song song với sàn nhà, giúp trần nhà chịu lực đồng đều và không bị vẹo lệch!</p>
              `,
              audioScript: "Định lí 1 chính là bí quyết kỳ diệu của ngành xây dựng các em ạ! Bác thợ hồ hay chú kỹ sư không cần leo trèo đo đạc hàng nghìn điểm trên cao, mà chỉ cần căn chỉnh thanh xà gồ trên mái song song với mép chân tường nằm trên mặt sàn, thì định lí 1 bảo đảm một trăm phần trăm xà gồ đã song song với toàn bộ mặt sàn nhà xưởng rồi!",
              audioUrl: "assets/audio/b12_wrapup.mp3"
            },
            interactiveChallenges: [
              {
                type: "quiz",
                title: "Thử thách 1: Trắc nghiệm điều kiện song song",
                question: "Cho đường thẳng $d$ và mặt phẳng $(\\alpha)$. Điều kiện nào sau đây là ĐỦ để kết luận $d // (\\alpha)$?",
                options: [
                  "A. $d$ song song với một đường thẳng $a$ bất kỳ.",
                  "B. $d$ không có điểm chung với mặt phẳng $(\\alpha)$.",
                  "C. $d$ song song với đường thẳng $a$ nằm trong $(\\alpha)$ và $d$ không nằm trong $(\\alpha)$.",
                  "D. $d$ và $(\\alpha)$ có đúng một điểm chung."
                ],
                correctIndex: 2,
                explanation: "Theo Định lí 1: Nếu đường thẳng d không nằm trong mặt phẳng (alpha) và song song với đường thẳng a nằm trong (alpha) thì d song song với (alpha). Đáp án C đầy đủ và chính xác nhất!"
              },
              {
                type: "matching",
                title: "Thử thách 2: Ghép cặp vị trí tương đối và số điểm chung",
                instruction: "Hãy ghép mỗi vị trí tương đối ở Cột A với số điểm chung tương ứng ở Cột B:",
                pairs: [
                  { left: "d // (alpha)", right: "Không có điểm chung nào (0 điểm)" },
                  { left: "d cắt (alpha) tại M", right: "Có đúng một điểm chung duy nhất (1 điểm)" },
                  { left: "d nằm trong (alpha)", right: "Có vô số điểm chung" },
                  { left: "(alpha) cap (beta) = d'", right: "Giao tuyến của hai mặt phẳng" }
                ]
              },
              {
                type: "true_false",
                title: "Thử thách 3: Khảo sát Đúng / Sai (Cấu trúc mới 2025)",
                instruction: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Xét tính Đúng/Sai của các khẳng định sau:",
                statements: [
                  { text: "a) Đường thẳng AB song song với mặt phẳng (SCD).", isTrue: true, explain: "Đúng vì AB không nằm trong (SCD), AB // CD và CD nằm trong (SCD)." },
                  { text: "b) Đường thẳng SC song song với mặt phẳng (SAB).", isTrue: false, explain: "Sai vì SC và (SAB) có điểm chung là S nên SC cắt (SAB) tại S." },
                  { text: "c) Nếu M, N lần lượt là trung điểm của SA, SD thì MN // (ABCD).", isTrue: true, explain: "Đúng vì MN là đường trung bình tam giác SAD nên MN // AD, mà AD nằm trong (ABCD)." },
                  { text: "d) Giao tuyến của hai mặt phẳng (SAB) và (SCD) là đường thẳng đi qua S và cắt AB.", isTrue: false, explain: "Sai vì AB // CD nên giao tuyến của (SAB) và (SCD) phải là đường thẳng đi qua S và song song với AB và CD." }
                ]
              }
            ]
          },
{
            id: "11-c4-b13",
            number: "Bài 13",
            title: "Hai mặt phẳng song song",
            sections: [
              {
                id: "11-c4-b13-s1",
                num: "1",
                title: "Vị trí tương đối và điều kiện song song",
                subsections: [
                  { key: "a", title: "Khái niệm hai mặt phẳng song song", summary: "Hai mặt phẳng không có điểm chung." },
                  { key: "b", title: "Điều kiện để hai mặt phẳng song song", summary: "Mặt phẳng (P) chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng (Q)." }
                ]
              },
              {
                id: "11-c4-b13-s2",
                num: "2",
                title: "Tính chất và các hình khối cơ bản",
                subsections: [
                  { key: "a", title: "Định lí Thalès trong không gian", summary: "Các mặt phẳng song song chắn trên hai đường thẳng bất kì các đoạn thẳng tỉ lệ." },
                  { key: "b", title: "Hình lăng trụ và hình hộp", summary: "Đáy là các đa giác bằng nhau nằm trên hai mặt phẳng song song, mặt bên là hình bình hành." }
                ]
              }
            ]
          },
          {
            id: "11-c4-b14",
            number: "Bài 14",
            title: "Phép chiếu song song",
            sections: [
              {
                id: "11-c4-b14-s1",
                num: "1",
                title: "Khái niệm phép chiếu song song",
                subsections: [
                  { key: "a", title: "Phương chiếu và mặt phẳng chiếu", summary: "Đường thẳng d không song song với (P), phép gán mỗi điểm M với hình chiếu M'." },
                  { key: "b", title: "Tính chất của phép chiếu song song", summary: "Bảo toàn tính thẳng hàng, thứ tự điểm và tỉ số của hai đoạn thẳng cùng phương." }
                ]
              },
              {
                id: "11-c4-b14-s2",
                num: "2",
                title: "Hình biểu diễn của một hình không gian",
                subsections: [
                  { key: "a", title: "Quy tắc vẽ hình biểu diễn", summary: "Biểu diễn đoạn thẳng song song bằng đoạn thẳng song song, elip biểu diễn cho đường tròn." },
                  { key: "b", title: "Hình biểu diễn của tam giác, hình bình hành, hình tròn", summary: "Các lưu ý khi phác thảo mô hình hình học không gian." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-5",
        number: "Chương V",
        title: "Giới hạn. Hàm số liên tục",
        volume: 1,
        volumeLabel: "Tập 1",
        lessons: [
          {
            id: "11-c5-b15",
            number: "Bài 15",
            title: "Giới hạn của dãy số",
            sections: [
              {
                id: "11-c5-b15-s1",
                num: "1",
                title: "Giới hạn hữu hạn của dãy số",
                subsections: [
                  { key: "a", title: "Dãy số có giới hạn là 0", summary: "lim un = 0 khi |un| có thể nhỏ hơn số dương bé tuỳ ý kể từ một số hạng nào đó." },
                  { key: "b", title: "Dãy số có giới hạn hữu hạn a", summary: "lim un = a <=> lim(un - a) = 0 và các định lí về phép toán giới hạn." }
                ]
              },
              {
                id: "11-c5-b15-s2",
                num: "2",
                title: "Cấp số nhân lùi vô hạn và giới hạn vô cực",
                subsections: [
                  { key: "a", title: "Tổng của cấp số nhân lùi vô hạn", summary: "S = u1 / (1 - q) với |q| < 1." },
                  { key: "b", title: "Dãy số dần tới vô cực", summary: "Khái niệm lim un = +∞ hoặc lim un = -∞ và quy tắc tính." }
                ]
              }
            ]
          },
          {
            id: "11-c5-b16",
            number: "Bài 16",
            title: "Giới hạn của hàm số",
            sections: [
              {
                id: "11-c5-b16-s1",
                num: "1",
                title: "Giới hạn hữu hạn tại một điểm",
                subsections: [
                  { key: "a", title: "Định nghĩa và các phép toán giới hạn", summary: "lim_{x->x0} f(x) = L qua dãy số và các quy tắc cộng, trừ, nhân, chia." },
                  { key: "b", title: "Giới hạn một bên", summary: "Giới hạn bên phải lim_{x->x0+} và giới hạn bên trái lim_{x->x0-}." }
                ]
              },
              {
                id: "11-c5-b16-s2",
                num: "2",
                title: "Giới hạn tại vô cực và giới hạn vô cực",
                subsections: [
                  { key: "a", title: "Giới hạn khi x tiến tới ±∞", summary: "Khái niệm tiệm cận sơ khai và cách khử dạng vô định ∞/∞." },
                  { key: "b", title: "Giới hạn vô cực của hàm số", summary: "Khi f(x) tiến tới ±∞ khi x tiến tới x0 hoặc vô cực, khử dạng 0/0, ∞ - ∞." }
                ]
              }
            ]
          },
          {
            id: "11-c5-b17",
            number: "Bài 17",
            title: "Hàm số liên tục",
            sections: [
              {
                id: "11-c5-b17-s1",
                num: "1",
                title: "Khái niệm hàm số liên tục",
                subsections: [
                  { key: "a", title: "Hàm số liên tục tại một điểm", summary: "lim_{x->x0} f(x) = f(x0); khái niệm điểm gián đoạn." },
                  { key: "b", title: "Hàm số liên tục trên một khoảng, một đoạn", summary: "Liên tục tại mọi điểm trên khoảng và liên tục một bên tại các đầu mút." }
                ]
              },
              {
                id: "11-c5-b17-s2",
                num: "2",
                title: "Tính chất của hàm số liên tục",
                subsections: [
                  { key: "a", title: "Các phép toán trên hàm liên tục", summary: "Hàm đa thức, phân thức, lượng giác liên tục trên từng khoảng xác định." },
                  { key: "b", title: "Định lí giá trị trung gian", summary: "Nếu f(x) liên tục trên [a; b] và f(a).f(b) < 0 thì phương trình f(x) = 0 có ít nhất một nghiệm." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-6",
        number: "Chương VI",
        title: "Hàm số mũ và hàm số lôgarit",
        volume: 2,
        volumeLabel: "Tập 2",
        lessons: [
          {
            id: "11-c6-b18",
            number: "Bài 18",
            title: "Luỹ thừa với số mũ thực",
            sections: [
              {
                id: "11-c6-b18-s1",
                num: "1",
                title: "Luỹ thừa với số mũ nguyên và căn bậc n",
                subsections: [
                  { key: "a", title: "Luỹ thừa với số mũ nguyên", summary: "Số mũ nguyên dương, quy ước a^0 = 1 và số mũ nguyên âm a^(-n) = 1/a^n." },
                  { key: "b", title: "Khái niệm căn bậc n", summary: "Căn bậc lẻ có duy nhất một giá trị, căn bậc chẵn của số dương có hai giá trị đối nhau." }
                ]
              },
              {
                id: "11-c6-b18-s2",
                num: "2",
                title: "Luỹ thừa với số mũ hữu tỉ và số mũ thực",
                subsections: [
                  { key: "a", title: "Luỹ thừa số mũ hữu tỉ", summary: "a^(m/n) = ⁿ√(a^m) với a > 0." },
                  { key: "b", title: "Luỹ thừa số mũ thực và các tính chất", summary: "Quy tắc nhân, chia cùng cơ số, luỹ thừa của luỹ thừa và so sánh luỹ thừa." }
                ]
              }
            ]
          },
          {
            id: "11-c6-b19",
            number: "Bài 19",
            title: "Lôgarit",
            sections: [
              {
                id: "11-c6-b19-s1",
                num: "1",
                title: "Khái niệm và các loại lôgarit",
                subsections: [
                  { key: "a", title: "Định nghĩa lôgarit", summary: "log_a b = α <=> a^α = b với 0 < a ≠ 1, b > 0." },
                  { key: "b", title: "Lôgarit thập phân và lôgarit tự nhiên", summary: "log b = lg b (cơ số 10) và ln b (cơ số e ≈ 2,71828)." }
                ]
              },
              {
                id: "11-c6-b19-s2",
                num: "2",
                title: "Tính chất và các quy tắc tính lôgarit",
                subsections: [
                  { key: "a", title: "Lôgarit của tích, thương, luỹ thừa", summary: "log_a(xy) = log_a x + log_a y; log_a(x/y) = log_a x - log_a y; log_a(x^α) = α log_a x." },
                  { key: "b", title: "Công thức đổi cơ số", summary: "log_a b = (log_c b) / (log_c a); công thức nghịch đảo log_a b = 1 / log_b a." }
                ]
              }
            ]
          },
          {
            id: "11-c6-b20",
            number: "Bài 20",
            title: "Hàm số mũ và hàm số lôgarit",
            sections: [
              {
                id: "11-c6-b20-s1",
                num: "1",
                title: "Hàm số mũ y = a^x",
                subsections: [
                  { key: "a", title: "Tập xác định và tập giá trị", summary: "Tập xác định D = R, tập giá trị (0; +∞)." },
                  { key: "b", title: "Đồ thị và tính biến thiên", summary: "Đồng biến khi a > 1, nghịch biến khi 0 < a < 1; luôn đi qua (0; 1)." }
                ]
              },
              {
                id: "11-c6-b20-s2",
                num: "2",
                title: "Hàm số lôgarit y = log_a x",
                subsections: [
                  { key: "a", title: "Tập xác định và tập giá trị", summary: "Tập xác định (0; +∞), tập giá trị R." },
                  { key: "b", title: "Đồ thị và tính biến thiên", summary: "Đồng biến khi a > 1, nghịch biến khi 0 < a < 1; đồ thị đối xứng qua đường thẳng y = x." }
                ]
              }
            ]
          },
          {
            id: "11-c6-b21",
            number: "Bài 21",
            title: "Phương trình, bất phương trình mũ và lôgarit",
            sections: [
              {
                id: "11-c6-b21-s1",
                num: "1",
                title: "Phương trình, bất phương trình mũ",
                subsections: [
                  { key: "a", title: "Phương trình mũ cơ bản a^x = b", summary: "Vô nghiệm khi b <= 0; có nghiệm duy nhất x = log_a b khi b > 0." },
                  { key: "b", title: "Bất phương trình mũ cơ bản", summary: "Giữ chiều bất đẳng thức khi a > 1, đổi chiều khi 0 < a < 1." }
                ]
              },
              {
                id: "11-c6-b21-s2",
                num: "2",
                title: "Phương trình, bất phương trình lôgarit",
                subsections: [
                  { key: "a", title: "Phương trình lôgarit cơ bản log_a x = b", summary: "Luôn có nghiệm duy nhất x = a^b." },
                  { key: "b", title: "Bất phương trình lôgarit cơ bản", summary: "Chú ý điều kiện biểu thức trong lôgarit dương và xét cơ số a." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-7",
        number: "Chương VII",
        title: "Quan hệ vuông góc trong không gian",
        volume: 2,
        volumeLabel: "Tập 2",
        lessons: [
          {
            id: "11-c7-b22",
            number: "Bài 22",
            title: "Hai đường thẳng vuông góc",
            sections: [
              {
                id: "11-c7-b22-s1",
                num: "1",
                title: "Góc giữa hai đường thẳng trong không gian",
                subsections: [
                  { key: "a", title: "Vectơ chỉ phương của đường thẳng", summary: "Xác định góc qua góc giữa hai vectơ chỉ phương." },
                  { key: "b", title: "Định nghĩa góc giữa hai đường thẳng", summary: "Số đo góc từ 0° đến 90°." }
                ]
              },
              {
                id: "11-c7-b22-s2",
                num: "2",
                title: "Hai đường thẳng vuông góc",
                subsections: [
                  { key: "a", title: "Định nghĩa và kí hiệu a ⊥ b", summary: "Khi góc giữa hai đường thẳng bằng 90°." },
                  { key: "b", title: "Phương pháp chứng minh hai đường vuông góc", summary: "Sử dụng tích vô hướng hoặc quan hệ vuông góc trung gian." }
                ]
              }
            ]
          },
          {
            id: "11-c7-b23",
            number: "Bài 23",
            title: "Đường thẳng vuông góc với mặt phẳng",
            sections: [
              {
                id: "11-c7-b23-s1",
                num: "1",
                title: "Định nghĩa và điều kiện vuông góc",
                subsections: [
                  { key: "a", title: "Định nghĩa đường thẳng vuông góc mặt phẳng", summary: "Vuông góc với mọi đường thẳng nằm trong mặt phẳng đó." },
                  { key: "b", title: "Điều kiện vuông góc", summary: "Đường thẳng vuông góc với hai đường thẳng cắt nhau cùng nằm trong mặt phẳng." }
                ]
              },
              {
                id: "11-c7-b23-s2",
                num: "2",
                title: "Tính chất và định lí ba đường vuông góc",
                subsections: [
                  { key: "a", title: "Liên hệ song song và vuông góc", summary: "Hai đường song song cùng vuông góc một mặt phẳng; hai mặt phẳng vuông góc cùng một đường." },
                  { key: "b", title: "Định lí ba đường vuông góc", summary: "Liên hệ giữa đường thẳng, hình chiếu và đường nằm trong mặt phẳng." }
                ]
              }
            ]
          },
          {
            id: "11-c7-b24",
            number: "Bài 24",
            title: "Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng",
            sections: [
              {
                id: "11-c7-b24-s1",
                num: "1",
                title: "Phép chiếu vuông góc",
                subsections: [
                  { key: "a", title: "Định nghĩa phép chiếu vuông góc", summary: "Trường hợp đặc biệt của phép chiếu song song khi phương chiếu vuông góc với mặt phẳng chiếu." },
                  { key: "b", title: "Hình chiếu của điểm và đoạn thẳng", summary: "Xác định chân đường vuông góc hạ từ điểm xuống mặt phẳng." }
                ]
              },
              {
                id: "11-c7-b24-s2",
                num: "2",
                title: "Góc giữa đường thẳng và mặt phẳng",
                subsections: [
                  { key: "a", title: "Định nghĩa góc giữa đường thẳng và mặt phẳng", summary: "Góc giữa đường thẳng và hình chiếu vuông góc của nó lên mặt phẳng." },
                  { key: "b", title: "Phương pháp xác định và tính số đo góc", summary: "Dựng hình chiếu và áp dụng hệ thức lượng trong tam giác vuông." }
                ]
              }
            ]
          },
          {
            id: "11-c7-b25",
            number: "Bài 25",
            title: "Hai mặt phẳng vuông góc",
            sections: [
              {
                id: "11-c7-b25-s1",
                num: "1",
                title: "Góc giữa hai mặt phẳng và góc nhị diện",
                subsections: [
                  { key: "a", title: "Khái niệm góc giữa hai mặt phẳng", summary: "Góc giữa hai đường thẳng lần lượt vuông góc với hai mặt phẳng đó." },
                  { key: "b", title: "Góc phẳng của góc nhị diện", summary: "Hai nửa mặt phẳng cùng bờ và mặt cắt vuông góc với cạnh nhị diện." }
                ]
              },
              {
                id: "11-c7-b25-s2",
                num: "2",
                title: "Hai mặt phẳng vuông góc",
                subsections: [
                  { key: "a", title: "Định nghĩa và điều kiện vuông góc", summary: "Mặt phẳng chứa đường thẳng vuông góc với mặt phẳng kia." },
                  { key: "b", title: "Tính chất của hai mặt phẳng vuông góc", summary: "Đường thẳng nằm trong mặt phẳng này và vuông góc với giao tuyến thì vuông góc với mặt phẳng kia." }
                ]
              },
              {
                id: "11-c7-b25-s3",
                num: "3",
                title: "Hình chóp đều và hình lăng trụ đứng",
                subsections: [
                  { key: "a", title: "Hình chóp đều và chóp cụt đều", summary: "Đáy là đa giác đều và chân đường cao trùng tâm đáy." },
                  { key: "b", title: "Hình lăng trụ đứng, hình hộp chữ nhật", summary: "Các cạnh bên vuông góc với đáy, các mặt bên là hình chữ nhật." }
                ]
              }
            ]
          },
          {
            id: "11-c7-b26",
            number: "Bài 26",
            title: "Khoảng cách",
            sections: [
              {
                id: "11-c7-b26-s1",
                num: "1",
                title: "Khoảng cách từ điểm đến đường thẳng và mặt phẳng",
                subsections: [
                  { key: "a", title: "Khoảng cách từ điểm đến đường thẳng", summary: "Độ dài đoạn vuông góc kẻ từ điểm đến đường thẳng." },
                  { key: "b", title: "Khoảng cách từ điểm đến mặt phẳng", summary: "Độ dài đoạn vuông góc kẻ từ điểm đến mặt phẳng; phương pháp đổi điểm." }
                ]
              },
              {
                id: "11-c7-b26-s2",
                num: "2",
                title: "Khoảng cách giữa các đối tượng song song",
                subsections: [
                  { key: "a", title: "Khoảng cách giữa đường thẳng và mặt phẳng song song", summary: "Lấy một điểm bất kì trên đường thẳng tính đến mặt phẳng." },
                  { key: "b", title: "Khoảng cách giữa hai mặt phẳng song song", summary: "Độ dài đoạn thẳng nối hai điểm tương ứng trên hai mặt phẳng và vuông góc với chúng." }
                ]
              },
              {
                id: "11-c7-b26-s3",
                num: "3",
                title: "Khoảng cách giữa hai đường thẳng chéo nhau",
                subsections: [
                  { key: "a", title: "Đoạn vuông góc chung", summary: "Đoạn thẳng cắt cả hai đường và vuông góc với cả hai đường." },
                  { key: "b", title: "Phương pháp mặt phẳng song song", summary: "Chuyển về khoảng cách từ đường này đến mặt phẳng song song chứa đường kia." }
                ]
              }
            ]
          },
          {
            id: "11-c7-b27",
            number: "Bài 27",
            title: "Thể tích",
            sections: [
              {
                id: "11-c7-b27-s1",
                num: "1",
                title: "Thể tích của hình chóp và hình chóp cụt đều",
                subsections: [
                  { key: "a", title: "Thể tích hình chóp", summary: "V = 1/3 . S_đáy . h." },
                  { key: "b", title: "Thể tích hình chóp cụt đều", summary: "V = 1/3 . h . (S1 + S2 + √(S1.S2))." }
                ]
              },
              {
                id: "11-c7-b27-s2",
                num: "2",
                title: "Thể tích của hình lăng trụ và hình hộp",
                subsections: [
                  { key: "a", title: "Thể tích hình lăng trụ", summary: "V = S_đáy . h." },
                  { key: "b", title: "Thể tích hình hộp chữ nhật và khối lập phương", summary: "V = a.b.c; khối lập phương V = a³." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-8",
        number: "Chương VIII",
        title: "Các quy tắc tính xác suất",
        volume: 2,
        volumeLabel: "Tập 2",
        lessons: [
          {
            id: "11-c8-b28",
            number: "Bài 28",
            title: "Biến cố hợp, biến cố giao, biến cố độc lập",
            sections: [
              {
                id: "11-c8-b28-s1",
                num: "1",
                title: "Biến cố hợp và biến cố giao",
                subsections: [
                  { key: "a", title: "Biến cố hợp A ∪ B", summary: "'Biến cố A hoặc B xảy ra', biểu diễn tập hợp bằng hợp hai tập kết quả." },
                  { key: "b", title: "Biến cố giao AB", summary: "'Cả biến cố A và B cùng xảy ra', biểu diễn tập hợp bằng giao hai tập kết quả." }
                ]
              },
              {
                id: "11-c8-b28-s2",
                num: "2",
                title: "Hai biến cố xung khắc và độc lập",
                subsections: [
                  { key: "a", title: "Hai biến cố xung khắc", summary: "A và B không thể cùng xảy ra: AB = ∅." },
                  { key: "b", title: "Hai biến cố độc lập", summary: "Việc xảy ra hay không của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia." }
                ]
              }
            ]
          },
          {
            id: "11-c8-b29",
            number: "Bài 29",
            title: "Công thức cộng xác suất",
            sections: [
              {
                id: "11-c8-b29-s1",
                num: "1",
                title: "Công thức cộng cho hai biến cố xung khắc",
                subsections: [
                  { key: "a", title: "Công thức P(A ∪ B) = P(A) + P(B)", summary: "Áp dụng khi A và B xung khắc nhau." },
                  { key: "b", title: "Xác suất của biến cố đối", summary: "P(A_) = 1 - P(A) giúp đơn giản hoá các bài toán đếm phức tạp." }
                ]
              },
              {
                id: "11-c8-b29-s2",
                num: "2",
                title: "Công thức cộng xác suất tổng quát",
                subsections: [
                  { key: "a", title: "Công thức tổng quát P(A ∪ B) = P(A) + P(B) - P(AB)", summary: "Áp dụng cho hai biến cố bất kì có thể cùng xảy ra." },
                  { key: "b", title: "Luyện tập bài toán xác suất thực tế", summary: "Phân tích biến cố thi đỗ môn học, kiểm định chất lượng." }
                ]
              }
            ]
          },
          {
            id: "11-c8-b30",
            number: "Bài 30",
            title: "Công thức nhân xác suất cho hai biến cố độc lập",
            sections: [
              {
                id: "11-c8-b30-s1",
                num: "1",
                title: "Công thức nhân xác suất",
                subsections: [
                  { key: "a", title: "Công thức P(AB) = P(A) . P(B)", summary: "Áp dụng khi A và B là hai biến cố độc lập." },
                  { key: "b", title: "Mở rộng cho nhiều biến cố độc lập", summary: "P(A1.A2...An) = P(A1).P(A2)...P(An)." }
                ]
              },
              {
                id: "11-c8-b30-s2",
                num: "2",
                title: "Ứng dụng trong các bài toán thực tiễn",
                subsections: [
                  { key: "a", title: "Bài toán mạch điện và độ tin cậy hệ thống", summary: "Xác suất bóng đèn sáng, linh kiện hoạt động bình thường." },
                  { key: "b", title: "Bài toán bắn bia và thể thao", summary: "Tính xác suất ít nhất một người bắn trúng mục tiêu." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c11-9",
        number: "Chương IX",
        title: "Đạo hàm",
        volume: 2,
        volumeLabel: "Tập 2",
        lessons: [
          {
            id: "11-c9-b31",
            number: "Bài 31",
            title: "Định nghĩa và ý nghĩa của đạo hàm",
            sections: [
              {
                id: "11-c9-b31-s1",
                num: "1",
                title: "Khái niệm đạo hàm tại một điểm",
                subsections: [
                  { key: "a", title: "Định nghĩa đạo hàm bằng giới hạn tỉ số", summary: "f'(x0) = lim_{x->x0} [f(x) - f(x0)] / (x - x0) = lim_{Δx->0} Δy / Δx." },
                  { key: "b", title: "Đạo hàm trên một khoảng", summary: "Hàm số có đạo hàm tại mọi điểm thuộc khoảng." }
                ]
              },
              {
                id: "11-c9-b31-s2",
                num: "2",
                title: "Ý nghĩa của đạo hàm",
                subsections: [
                  { key: "a", title: "Ý nghĩa hình học và phương trình tiếp tuyến", summary: "Hệ số góc k = f'(x0); phương trình tiếp tuyến y - y0 = f'(x0)(x - x0)." },
                  { key: "b", title: "Ý nghĩa vật lí", summary: "Vận tốc tức thời v(t) = s'(t) và cường độ dòng điện tức thời." }
                ]
              }
            ]
          },
          {
            id: "11-c9-b32",
            number: "Bài 32",
            title: "Các quy tắc tính đạo hàm",
            sections: [
              {
                id: "11-c9-b32-s1",
                num: "1",
                title: "Đạo hàm của các hàm số thường gặp",
                subsections: [
                  { key: "a", title: "Đạo hàm hàm đa thức và căn thức", summary: "(c)' = 0; (x^n)' = n.x^(n-1); (√x)' = 1/(2√x)." },
                  { key: "b", title: "Đạo hàm hàm lượng giác", summary: "(sin x)' = cos x; (cos x)' = -sin x; (tan x)' = 1/cos²x; (cot x)' = -1/sin²x." }
                ]
              },
              {
                id: "11-c9-b32-s2",
                num: "2",
                title: "Các quy tắc đại số và đạo hàm hàm hợp",
                subsections: [
                  { key: "a", title: "Quy tắc đạo hàm tổng, hiệu, tích, thương", summary: "(u ± v)' = u' ± v'; (uv)' = u'v + uv'; (u/v)' = (u'v - uv')/v²." },
                  { key: "b", title: "Đạo hàm của hàm hợp", summary: "y'_x = y'_u . u'_x và bảng công thức hàm hợp." }
                ]
              }
            ]
          },
          {
            id: "11-c9-b33",
            number: "Bài 33",
            title: "Đạo hàm cấp hai",
            sections: [
              {
                id: "11-c9-b33-s1",
                num: "1",
                title: "Khái niệm đạo hàm cấp hai",
                subsections: [
                  { key: "a", title: "Định nghĩa f''(x)", summary: "Đạo hàm của đạo hàm cấp một: f''(x) = (f'(x))'." },
                  { key: "b", title: "Phương pháp tính đạo hàm cấp hai", summary: "Tính f'(x) rồi tiếp tục áp dụng quy tắc tính đạo hàm lần thứ hai." }
                ]
              },
              {
                id: "11-c9-b33-s2",
                num: "2",
                title: "Ý nghĩa vật lí của đạo hàm cấp hai",
                subsections: [
                  { key: "a", title: "Gia tốc tức thời", summary: "a(t) = v'(t) = s''(t) trong chuyển động thẳng biến đổi." },
                  { key: "b", title: "Ứng dụng trong cơ học", summary: "Định luật II Newton F = m.a = m.s''(t)." }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "12": {
    grade: "12",
    gradeTitle: "Toán Lớp 12",
    subtitle: "Chương trình GDPT 2018 • Bộ sách Kết nối tri thức với cuộc sống",
    chapters: [
      {
        id: "c12-1",
        number: "Chương I",
        title: "Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
        volume: 1,
        volumeLabel: "Tập 1",
        lessons: [
          {
            id: "12-c1-b1",
            number: "Bài 1",
            title: "Tính đơn điệu và cực trị của hàm số",
            sections: [
              {
                id: "12-c1-b1-s1",
                num: "1",
                title: "Tính đơn điệu của hàm số",
                subsections: [
                  { key: "a", title: "Dấu của đạo hàm và sự biến thiên", summary: "f'(x) >= 0 trên K => hàm số đồng biến; f'(x) <= 0 => hàm số nghịch biến." },
                  { key: "b", title: "Quy tắc xét tính đơn điệu", summary: "Lập bảng xét dấu đạo hàm f'(x) và kết luận khoảng đơn điệu." }
                ]
              },
              {
                id: "12-c1-b1-s2",
                num: "2",
                title: "Cực trị của hàm số",
                subsections: [
                  { key: "a", title: "Khái niệm điểm cực đại, cực tiểu", summary: "Giá trị cực đại, giá trị cực tiểu và điểm cực trị của đồ thị hàm số." },
                  { key: "b", title: "Điều kiện đủ để hàm số có cực trị", summary: "Đạo hàm đổi dấu khi đi qua x0; dấu hiệu đạo hàm cấp hai f''(x0)." }
                ]
              }
            ]
          },
          {
            id: "12-c1-b2",
            number: "Bài 2",
            title: "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
            sections: [
              {
                id: "12-c1-b2-s1",
                num: "1",
                title: "Định nghĩa giá trị lớn nhất, nhỏ nhất",
                subsections: [
                  { key: "a", title: "Định nghĩa trên tập hợp D", summary: "M = max f(x) khi f(x) <= M và tồn tại x0 để f(x0) = M; tương tự với min." },
                  { key: "b", title: "Ý nghĩa hình học", summary: "Điểm cao nhất và điểm thấp nhất của đồ thị hàm số trên miền D." }
                ]
              },
              {
                id: "12-c1-b2-s2",
                num: "2",
                title: "Phương pháp tìm giá trị lớn nhất, nhỏ nhất",
                subsections: [
                  { key: "a", title: "Tìm GTLN, GTNN trên đoạn [a; b]", summary: "Tính giá trị tại các đầu mút và các điểm dừng bên trong đoạn rồi so sánh." },
                  { key: "b", title: "Tìm GTLN, GTNN trên khoảng mở", summary: "Sử dụng bảng biến thiên và giới hạn tại các đầu mút vô cực." }
                ]
              }
            ]
          },
          {
            id: "12-c1-b3",
            number: "Bài 3",
            title: "Đường tiệm cận của đồ thị hàm số",
            sections: [
              {
                id: "12-c1-b3-s1",
                num: "1",
                title: "Đường tiệm cận đứng",
                subsections: [
                  { key: "a", title: "Định nghĩa bằng giới hạn một bên", summary: "lim_{x->x0+} f(x) = ±∞ hoặc lim_{x->x0-} f(x) = ±∞ => x = x0 là tiệm cận đứng." },
                  { key: "b", title: "Cách xác định tiệm cận đứng của hàm phân thức", summary: "Nghiệm của mẫu số không là nghiệm của tử số." }
                ]
              },
              {
                id: "12-c1-b3-s2",
                num: "2",
                title: "Đường tiệm cận ngang",
                subsections: [
                  { key: "a", title: "Định nghĩa bằng giới hạn tại vô cực", summary: "lim_{x->+∞} f(x) = y0 hoặc lim_{x->-∞} f(x) = y0 => y = y0 là tiệm cận ngang." },
                  { key: "b", title: "Cách xác định tiệm cận ngang", summary: "So sánh bậc của tử số và mẫu số của hàm phân thức." }
                ]
              },
              {
                id: "12-c1-b3-s3",
                num: "3",
                title: "Đường tiệm cận xiên",
                subsections: [
                  { key: "a", title: "Định nghĩa tiệm cận xiên y = ax + b", summary: "lim_{x->±∞} [f(x) - (ax + b)] = 0 (với a ≠ 0)." },
                  { key: "b", title: "Phương pháp xác định hệ số a và b", summary: "a = lim f(x)/x; b = lim [f(x) - ax] hoặc chia đa thức tử cho mẫu." }
                ]
              }
            ]
          },
          {
            id: "12-c1-b4",
            number: "Bài 4",
            title: "Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
            sections: [
              {
                id: "12-c1-b4-s1",
                num: "1",
                title: "Sơ đồ khảo sát hàm số tổng quát",
                subsections: [
                  { key: "a", title: "Các bước khảo sát hàm số", summary: "Tập xác định, đạo hàm, chiều biến thiên, cực trị, tiệm cận, bảng biến thiên." },
                  { key: "b", title: "Tâm đối xứng và trục đối xứng của đồ thị", summary: "Tìm điểm uốn, giao điểm với các trục toạ độ và vẽ đồ thị chính xác." }
                ]
              },
              {
                id: "12-c1-b4-s2",
                num: "2",
                title: "Khảo sát các hàm số tiêu biểu",
                subsections: [
                  { key: "a", title: "Hàm số bậc ba y = ax³ + bx² + cx + d", summary: "Hình dạng đồ thị chữ N hoặc chữ N ngược, điểm uốn là tâm đối xứng." },
                  { key: "b", title: "Hàm phân thức bậc nhất trên bậc nhất y = (ax+b)/(cx+d)", summary: "Đồ thị hypebol vuông góc, giao điểm hai đường tiệm cận là tâm đối xứng." },
                  { key: "c", title: "Hàm phân thức bậc hai trên bậc nhất y = (ax²+bx+c)/(dx+e)", summary: "Đồ thị có tiệm cận đứng và tiệm cận xiên." }
                ]
              }
            ]
          },
          {
            id: "12-c1-b5",
            number: "Bài 5",
            title: "Ứng dụng đạo hàm giải quyết bài toán thực tiễn",
            sections: [
              {
                id: "12-c1-b5-s1",
                num: "1",
                title: "Bài toán tối ưu hoá hình học",
                subsections: [
                  { key: "a", title: "Tối ưu thể tích và diện tích", summary: "Hộp có thể tích lớn nhất từ tấm tôn cho trước, lon nước có diện tích bề mặt nhỏ nhất." },
                  { key: "b", title: "Tối ưu đường đi và khoảng cách", summary: "Bài toán ống dẫn dầu, đường dây điện tối ưu chi phí lắp đặt." }
                ]
              },
              {
                id: "12-c1-b5-s2",
                num: "2",
                title: "Bài toán tối ưu trong kinh tế và xã hội",
                subsections: [
                  { key: "a", title: "Tối ưu lợi nhuận và doanh thu", summary: "Lợi nhuận = Doanh thu - Chi phí; đạo hàm biên tế (marginal analysis)." },
                  { key: "b", title: "Mô hình hoá và đánh giá kết quả thực tiễn", summary: "Xác định khoảng giá trị biến thực tế và đưa ra khuyến nghị." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c12-2",
        number: "Chương II",
        title: "Vectơ và hệ trục toạ độ trong không gian",
        volume: 1,
        volumeLabel: "Tập 1",
        lessons: [
          {
            id: "12-c2-b6",
            number: "Bài 6",
            title: "Vectơ trong không gian",
            isFeaturedLesson: true,
            teacherWelcome: {
              greetingText: "Thầy Sáng xin chào tất cả các em học sinh lớp 12 thân yêu! Năm học lớp 12 là một năm học vô cùng đặc biệt và ý nghĩa, nơi các em sẽ nỗ lực bứt phá để chạm tay vào cánh cửa trường đại học mơ ước. Thầy rất tự hào khi được đồng hành cùng các em trong hành trình này. Bài 6 hôm nay, 'Vectơ trong không gian', sẽ đưa các em bước vào thế giới hình học tọa độ và không gian 3 chiều – nội dung cốt lõi chiếm tỉ trọng điểm rất cao trong kỳ thi tốt nghiệp THPT quốc gia. Trước khi bước vào bài học, các em hãy cùng Thầy điểm qua các mục tiêu trọng tâm cần làm chủ nhé: Thứ nhất, mở rộng trọn vẹn khái niệm vectơ, độ dài và các phép toán từ mặt phẳng lên không gian ba chiều. Thứ hai, nắm vững và vận dụng xuất sắc Quy tắc hình hộp – công cụ đắc lực để phân tích vectơ trong khối đa diện. Thứ ba, làm chủ công thức tích vô hướng và góc giữa hai vectơ trong không gian để chứng minh quan hệ vuông góc và giải quyết bài toán thực tế. Thầy chúc các em luôn giữ vững niềm tin, học tập hăng say và chinh phục trọn vẹn điểm mười môn Toán nhé. Nào, Thầy trò mình cùng bắt đầu tiết học ngay bây giờ!",
              audioScript: "Thầy Sáng xin chào tất cả các em học sinh lớp 12 thân yêu! Năm học lớp 12 là một năm học vô cùng đặc biệt và ý nghĩa, nơi các em sẽ nỗ lực bứt phá để chạm tay vào cánh cửa trường đại học mơ ước. Thầy rất tự hào khi được đồng hành cùng các em trong hành trình này. Bài 6 hôm nay, Vectơ trong không gian, sẽ đưa các em bước vào thế giới hình học tọa độ và không gian 3 chiều – nội dung cốt lõi chiếm tỉ trọng điểm rất cao trong kỳ thi tốt nghiệp trung học phổ thông quốc gia. Trước khi bước vào bài học, các em hãy cùng Thầy điểm qua các mục tiêu trọng tâm cần làm chủ nhé. Thứ nhất, mở rộng trọn vẹn khái niệm vectơ, độ dài và các phép toán từ mặt phẳng lên không gian ba chiều. Thứ hai, nắm vững và vận dụng xuất sắc Quy tắc hình hộp – công cụ đắc lực để phân tích vectơ trong khối đa diện. Thứ ba, làm chủ công thức tích vô hướng và góc giữa hai vectơ trong không gian để chứng minh quan hệ vuông góc và giải quyết bài toán thực tế. Thầy chúc các em luôn giữ vững niềm tin, học tập hăng say và chinh phục trọn vẹn điểm mười môn Toán nhé. Nào, Thầy trò mình cùng bắt đầu tiết học ngay bây giờ!",
              audioUrl: "assets/audio/b6_welcome.mp3"
            },
            learningGoals: [
              "Mở rộng trọn vẹn khái niệm vectơ, độ dài, vectơ cùng hướng, bằng nhau từ mặt phẳng lên không gian ba chiều.",
              "Nắm vững và vận dụng xuất sắc Quy tắc hình hộp: $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$ để phân tích vectơ trong khối đa diện.",
              "Làm chủ định nghĩa góc giữa hai vectơ và công thức tích vô hướng trong không gian $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$.",
              "Vận dụng tích vô hướng để tính độ dài, chứng minh quan hệ vuông góc và giải bài toán thực tiễn phân tích lực 3 chiều."
            ],
            hook: {
              title: "Tình huống thực tế: Cân bằng lực của đèn chùm trần nhà và flycam bay lơ lửng",
              story: "Trong một phòng khách hiện đại, một chiếc đèn chùm pha lê nặng 12 kg được treo lơ lửng tại điểm O nhờ 4 sợi dây cáp thép nối từ 4 góc trần phòng hình chữ nhật. Tương tự, một thiết bị bay flycam đang đứng yên trên không trung chịu tác động đồng thời của trọng lực hút xuống, lực nâng của cánh quạt và lực đẩy của gió tạt ngang.",
              question: "Làm thế nào các kỹ sư có thể biểu diễn và tính toán trạng thái cân bằng lực khi các lực tác dụng theo cả ba chiều: dài, rộng và cao trong không gian?",
              teacherNote: "Câu trả lời chính xác nhất chính là VECTƠ TRONG KHÔNG GIAN và Quy tắc hình hộp mà Thầy trò mình sẽ cùng khám phá ngay sau đây!",
              illustration: "assets/images/lessons/hook_den_chum_flycam_12.svg",
              illustrationCaption: "Chiếc đèn chùm nặng treo lơ lửng nhờ 4 sợi dây cáp thép tỏa về 4 góc trần phòng, cân bằng lực trong không gian 3D."
            },
            teacherVoiceGeneral: {
              title: "Lời giảng của Thầy Sáng: Giới thiệu Vectơ trong không gian",
              script: "Thầy Sáng xin chào tất cả các em học sinh lớp 12 thân yêu! Khi bước vào lớp 12, chúng ta đã tích lũy được một nền tảng vững vàng về vectơ từ lớp 10. Hôm nay, Thầy Sáng sẽ dẫn dắt các em thực hiện một bước nhảy vọt: Đưa toàn bộ tư duy vectơ từ trang giấy phẳng hai chiều bay bổng vào không gian ba chiều thực tế! Viên ngọc sáng nhất trong bài học hôm nay chính là Quy tắc hình hộp. Nếu như ở lớp 10, quy tắc hình bình hành cho ta tổng hai vectơ cạnh bằng vectơ đường chéo mặt phẳng; thì lên lớp 12, từ một đỉnh của hình hộp chữ nhật, tổng ba vectơ theo ba kích thước dài, rộng, cao sẽ hợp lực thành một vectơ đường chéo đâm xuyên qua lòng hình hộp: vectơ A C phẩy bằng vectơ A B cộng vectơ A D cộng vectơ A A phẩy! Đây là công thức nền tảng xuất hiện thường xuyên trong đề thi tốt nghiệp trung học phổ thông quốc gia. Nào, Thầy trò mình cùng nhau bắt đầu bài học nhé!",
              audioUrl: "assets/audio/b6_main_lecture.mp3"
            },
            sections: [
              {
                id: "12-c2-b6-s1",
                num: "1",
                title: "1. Định nghĩa và các phép toán vectơ trong không gian",
                subsections: [
                  {
                    key: "a",
                    title: "Định nghĩa vectơ và các phép toán cộng, trừ, nhân với một số",
                    summary: "Khái niệm vectơ trong không gian hoàn toàn tương tự trong mặt phẳng. Quy tắc 3 điểm và quy tắc hình bình hành vẫn giữ nguyên giá trị.",
                    illustration: "assets/images/lessons/hinh1_quy_tac_hinh_hop_12.svg",
                    illustrationCaption: "Quy tắc hình hộp: Vectơ đường chéo chính AC' = Vectơ AB + Vectơ AD + Vectơ AA'.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-cube"></i> Khái niệm trong không gian</div>
                          <p><strong>Vectơ trong không gian</strong> là một đoạn thẳng có hướng. Các khái niệm điểm đầu, điểm cuối, giá, độ dài, hai vectơ cùng phương, cùng hướng, ngược hướng và bằng nhau được định nghĩa hoàn toàn tương tự như trong mặt phẳng.</p>
                          <p>Các phép cộng, trừ vectơ và nhân vectơ với một số trong không gian tuân theo các quy tắc đại số tương tự như trong mặt phẳng.</p>
                        </div>
                        <div class="definition-card" style="margin-top: 15px; border-left: 4px solid #dc2626;">
                          <div class="def-badge" style="background: #dc2626;"><i class="fa-solid fa-crown"></i> QUY TẮC HÌNH HỘP (TRỌNG TÂM THI ĐẠI HỌC)</div>
                          <p>Cho hình hộp $ABCD.A'B'C'D'$. Khi đó vectơ đường chéo $\\vec{AC'}$ bằng tổng của ba vectơ xuất phát từ cùng đỉnh $A$ trên ba cạnh kề:</p>
                          <div style="background: #fef2f2; padding: 12px 18px; border-radius: 6px; margin: 10px 0; text-align: center;">
                            $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$
                          </div>
                          <p><strong>Chứng minh:</strong></p>
                          <ul>
                            <li>Vì $ABCD$ là hình bình hành nên theo quy tắc hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.</li>
                            <li>Tứ giác $ACC'A'$ là hình bình hành nên: $\\vec{AC} + \\vec{AA'} = \\vec{AC'}$.</li>
                            <li>Thay vào ta được: $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$ (đpcm).</li>
                          </ul>
                        </div>
                      </div>
                    `,
                    teacherLecture: "Quy tắc hình hộp cực kỳ đẹp đẽ các em ạ: Từ gốc A, có 3 chiều không gian gồm dài là A B, rộng là A D và cao là A A phẩy. Tổng của ba vectơ này sẽ phóng một đường chéo xuyên qua lòng khối hộp đến đỉnh đối diện C phẩy. Đề thi đại học rất hay hỏi câu này dưới dạng trắc nghiệm lý thuyết hoặc tính toán phân tích lực!",
                    workedExample: {
                      title: "Ví dụ 1: Vận dụng quy tắc hình hộp và phân tích vectơ",
                      problem: "Cho hình hộp $ABCD.A'B'C'D'$. Gọi $I$ là tâm của hình bình hành $ABCD$. Chứng minh rằng: $\\vec{A'C} = \\vec{AB} + \\vec{AD} - \\vec{AA'}$ và $\\vec{SI} = \\frac{1}{2}(\\vec{SA} + \\vec{SC})$ với điểm $S$ bất kỳ trong không gian.",
                      thinking: "Phân tích vectơ A'C thành tổng các vectơ cạnh xuất phát từ A'. Áp dụng tính chất trung điểm I của đường chéo AC.",
                      solution: `
                        <p>1. <strong>Chứng minh $\\vec{A'C} = \\vec{AB} + \\vec{AD} - \\vec{AA'}$:</strong></p>
                        <ul>
                          <li>Theo quy tắc 3 điểm: $\\vec{A'C} = \\vec{A'A} + \\vec{AC}$.</li>
                          <li>Vì $\\vec{A'A} = -\\vec{AA'}$ và $ABCD$ là hình bình hành nên $\\vec{AC} = \\vec{AB} + \\vec{AD}$.</li>
                          <li>Do đó: $\\vec{A'C} = -\\vec{AA'} + \\vec{AB} + \\vec{AD} = \\vec{AB} + \\vec{AD} - \\vec{AA'}$ (đpcm).</li>
                        </ul>
                        <p>2. <strong>Chứng minh $\\vec{SI} = \\frac{1}{2}(\\vec{SA} + \\vec{SC})$:</strong></p>
                        <ul>
                          <li>Vì $I$ là tâm hình bình hành $ABCD$ nên $I$ là trung điểm của đoạn thẳng $AC$.</li>
                          <li>Với điểm $S$ bất kỳ trong không gian, theo tính chất trung điểm: $\\vec{SA} + \\vec{SC} = 2\\vec{SI} \\implies \\vec{SI} = \\frac{1}{2}(\\vec{SA} + \\vec{SC})$ (đpcm).</li>
                        </ul>
                      `,
                      teacherGuidance: "Trong không gian, các quy tắc trung điểm, quy tắc trọng tâm tam giác và quy tắc trọng tâm tứ diện vẫn giữ nguyên vẹn dạng đại số như trong mặt phẳng.",
                      audioScript: "Trong ví dụ 1, vectơ A phẩy C bằng trừ vectơ A A phẩy cộng vectơ A B cộng vectơ A D. Còn với điểm I là trung điểm đường chéo A C, ta luôn có vectơ S I bằng một phần hai tổng của vectơ S A và vectơ S C các em nhé!"
                    }
                  }
                ]
              },
              {
                id: "12-c2-b6-s2",
                num: "2",
                title: "2. Góc giữa hai vectơ và tích vô hướng trong không gian",
                subsections: [
                  {
                    key: "a",
                    title: "Góc giữa hai vectơ trong không gian & Công thức tích vô hướng",
                    summary: "Định nghĩa góc giữa hai vectơ bất kỳ trong không gian, công thức tích vô hướng và điều kiện vuông góc.",
                    illustration: "assets/images/lessons/hinh2_goc_va_tich_vo_huong_12.svg",
                    illustrationCaption: "Đưa về cùng gốc O để xác định góc giữa hai vectơ và công thức tích vô hướng trong không gian.",
                    contentHtml: `
                      <div class="theory-block">
                        <div class="definition-card">
                          <div class="def-badge"><i class="fa-solid fa-compass-drafting"></i> Góc giữa hai vectơ trong không gian</div>
                          <p>Trong không gian, cho hai vectơ $\\vec{u}$ và $\\vec{v}$ khác $\\vec{0}$. Lấy một điểm $O$ bất kỳ, dựng $\\vec{OA} = \\vec{u}$ và $\\vec{OB} = \\vec{v}$.</p>

                          <p>Khi đó góc $\\widehat{AOB}$ với $0^\\circ \\le \\widehat{AOB} \\le 180^\\circ$ được gọi là <strong>góc giữa hai vectơ $\\vec{u}$ và $\\vec{v}$</strong>, ký hiệu là $(\\vec{u}, \\vec{v})$.</p>
                        </div>
                        <div class="definition-card" style="margin-top: 15px; border-left: 4px solid #16a34a;">
                          <div class="def-badge" style="background: #16a34a;"><i class="fa-solid fa-calculator"></i> Tích vô hướng trong không gian</div>
                          <p><strong>Tích vô hướng</strong> của hai vectơ $\\vec{u}$ và $\\vec{v}$ trong không gian là một số, ký hiệu là $\\vec{u} \\cdot \\vec{v}$, được xác định bởi công thức:</p>
                          <div style="background: #f0fdf4; padding: 12px 18px; border-radius: 6px; margin: 10px 0; text-align: center;">
                            $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$
                          </div>
                          <p><strong>Điều kiện vuông góc 3D cốt lõi:</strong></p>
                          <div style="background: #eff6ff; padding: 10px 15px; border-radius: 4px; margin: 8px 0;">
                            $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$
                          </div>
                        </div>
                      </div>
                    `,
                    teacherLecture: "Tích vô hướng trong không gian là vũ khí bí mật số 1 để chứng minh hai đường thẳng chéo nhau vuông góc đấy các em! Thay vì phải dựng hình chiếu phức tạp, ta chỉ cần gắn vectơ và tính tích vô hướng của chúng, nếu ra kết quả bằng 0 thì lập tức kết luận hai đường vuông góc nhau ngay!",
                    workedExample: {
                      title: "Ví dụ 2: Tính tích vô hướng và chứng minh hai đường thẳng vuông góc",
                      problem: "Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{CD}$ và suy ra mối quan hệ giữa hai đường thẳng $AB$ và $CD$.",
                      thinking: "Chèn điểm A vào vectơ CD: CD = AD - AC. Sau đó khai triển tích vô hướng và dùng góc 60 độ của các tam giác đều.",
                      solution: `
                        <p>1. Ta có: $\\vec{CD} = \\vec{AD} - \\vec{AC}$.</p>
                        <p>2. Khi đó tích vô hướng:
                        $\\vec{AB} \\cdot \\vec{CD} = \\vec{AB} \\cdot (\\vec{AD} - \\vec{AC}) = \\vec{AB} \\cdot \\vec{AD} - \\vec{AB} \\cdot \\vec{AC}$
                        </p>
                        <p>3. Vì $ABCD$ là tứ diện đều cạnh $a$ nên các tam giác $ABD$ và $ABC$ là các tam giác đều cạnh $a$, do đó:
                        $(\\vec{AB}, \\vec{AD}) = \\widehat{BAD} = 60^\\circ \\implies \\vec{AB} \\cdot \\vec{AD} = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{a^2}{2}$
                        $(\\vec{AB}, \\vec{AC}) = \\widehat{BAC} = 60^\\circ \\implies \\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{a^2}{2}$
                        </p>
                        <p>4. Suy ra: $\\vec{AB} \\cdot \\vec{CD} = \\frac{a^2}{2} - \\frac{a^2}{2} = 0$.</p>
                        <p><strong>Kết luận:</strong> Vì $\\vec{AB} \\cdot \\vec{CD} = 0$ nên $\\vec{AB} \\perp \\vec{CD}$, tức là đường thẳng $AB$ vuông góc với đường thẳng $CD$.</p>
                      `,
                      teacherGuidance: "Đây là một tính chất kinh điển của tứ diện đều: Từng cặp cạnh đối diện luôn vuông góc với nhau! Phương pháp giải bằng tích vô hướng nhanh và đẹp hơn rất nhiều so với phương pháp hình học cổ điển.",
                      audioScript: "Trong ví dụ 2, bằng cách chèn điểm A vào vectơ C D thành vectơ A D trừ vectơ A C, ta tính được tích vô hướng giữa vectơ A B và vectơ C D đúng bằng không. Suy ra trong tứ diện đều, hai cạnh đối diện A B và C D luôn vuông góc với nhau các em nhé!"
                    }
                  }
                ]
              }
            ],
            realworldWrapup: {
              title: "VẬN DỤNG THỰC TẾ: QUAY LẠI GIẢI QUYẾT BÀI TOÁN TÌNH HUỐNG MỞ ĐẦU",
              recap: "Tính lực căng trên mỗi sợi dây cáp thép của chiếc đèn chùm nặng 12 kg treo cân bằng trong không gian 3D.",
              illustration: "assets/images/lessons/wrapup_giai_quyet_den_chum_12.svg",
              illustrationCaption: "Mô hình hóa toán học cân bằng lực 3D của hệ thống treo đèn chùm.",
              solution: `
                <p><strong>Lời giải chi tiết & Mô hình hóa Toán học của Thầy Sáng:</strong></p>
                <p>1. <strong>Điều kiện cân bằng trong không gian 3D:</strong>
                Đèn chùm đứng yên cân bằng tại điểm $O$ khi và chỉ khi tổng hợp lực tác dụng lên nó triệt tiêu:
                $\\vec{T}_1 + \\vec{T}_2 + \\vec{T}_3 + \\vec{T}_4 + \\vec{P} = \\vec{0}$
                Trong đó $\\vec{T}_1, \\vec{T}_2, \\vec{T}_3, \\vec{T}_4$ là lực căng của 4 sợi cáp hướng lên, $\\vec{P}$ là trọng lực kéo thẳng đứng xuống ($P = m \\cdot g = 12 \\times 9.8 = 117.6\\text{ N}$).</p>
                <p>2. <strong>Tính đối xứng không gian:</strong>
                Do 4 sợi dây cáp có cùng chiều dài và treo đối xứng ở 4 góc trần chữ nhật nên lực căng trên mỗi sợi dây có độ lớn bằng nhau:
                $T_1 = T_2 = T_3 = T_4 = T$
                và mỗi sợi dây tạo với trục thẳng đứng một góc nghiêng $\\alpha = 30^\\circ$.</p>
                <p>3. <strong>Chiếu lên trục thẳng đứng $Oz$:</strong>
                Thành phần thẳng đứng hướng lên của 4 sợi dây cáp cân bằng với trọng lượng đèn:
                $4 \\cdot T \\cdot \\cos 30^\\circ = P = m \\cdot g$
                $\\implies T = \\frac{m \\cdot g}{4 \\cdot \\cos 30^\\circ} = \\frac{12 \\times 9.8}{4 \\times \\frac{\\sqrt{3}}{2}} = \\frac{117.6}{2\\sqrt{3}} \\approx 33.95\\text{ N}$
                </p>
                <p><strong>Ý nghĩa thực tế:</strong> Nhờ công thức vectơ không gian này, các kỹ sư tính được mỗi sợi dây cáp phải chịu một lực kéo tối thiểu khoảng 34 N (tương đương treo vật nặng 3.5 kg). Kỹ sư sẽ chọn loại dây cáp chịu tải an toàn gấp 3-5 lần để đảm bảo đèn chùm treo vững chắc trọn đời mà không bao giờ bị đứt rơi!</p>
              `,
              audioScript: "Quy tắc cân bằng lực trong không gian ba chiều đã giúp các kỹ sư giải quyết một bài toán vô cùng thực tế: Tính lực căng của bốn sợi dây cáp treo đèn chùm. Khi đèn nặng mười hai ki-lô-gam và góc nghiêng ba mươi độ, mỗi sợi dây cáp phải chịu một lực kéo khoảng ba mươi tư Niu-tơn. Nhờ đó, việc chọn dây cáp được tính toán chuẩn xác từng con số, đảm bảo an toàn tuyệt đối cho người ngồi bên dưới!",
              audioUrl: "assets/audio/b6_wrapup.mp3"
            },
            interactiveChallenges: [
              {
                type: "quiz",
                title: "Thử thách 1: Trắc nghiệm Quy tắc hình hộp",
                question: "Cho hình hộp $ABCD.A'B'C'D'$. Đẳng thức vectơ nào sau đây là khẳng định ĐÚNG?",
                options: [
                  "A. $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$",
                  "B. $\\vec{AC'} = \\vec{AB} + \\vec{BC} + \\vec{CD}$",
                  "C. $\\vec{AC'} = \\vec{AB} + \\vec{AD} - \\vec{AA'}$",
                  "D. $\\vec{AC'} = \\vec{A'B'} + \\vec{A'D'} + \\vec{AC}$"
                ],
                correctIndex: 0,
                explanation: "Theo Quy tắc hình hộp: Vectơ đường chéo xuất phát từ đỉnh A bằng tổng ba vectơ xuất phát từ đỉnh A trên ba cạnh kề: AC' = AB + AD + AA'. Khẳng định A hoàn toàn chính xác!"
              },
              {
                type: "matching",
                title: "Thử thách 2: Ghép cặp công thức và quy tắc toán học không gian",
                instruction: "Hãy ghép mỗi công thức ở Cột A với tên quy tắc hình học không gian chuẩn xác nhất ở Cột B:",
                pairs: [
                  { left: "AC' = AB + AD + AA'", right: "Quy tắc hình hộp" },
                  { left: "u . v = 0", right: "Điều kiện hai vectơ vuông góc trong không gian" },
                  { left: "u . v = |u| . |v| . cos(u, v)", right: "Công thức tích vô hướng trong không gian" },
                  { left: "AB + BC = AC", right: "Quy tắc ba điểm" }
                ]
              },
              {
                type: "true_false",
                title: "Thử thách 3: Khảo sát Đúng / Sai (Cấu trúc thi tốt nghiệp THPT 2025)",
                instruction: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Xét tính Đúng/Sai của các mệnh đề sau:",
                statements: [
                  { text: "a) Hai vectơ $\\vec{AB}$ và $\\vec{C'D'}$ là hai vectơ bằng nhau.", isTrue: false, explain: "Sai vì AB và C'D' ngược hướng nhau (chúng là hai vectơ đối nhau)." },
                  { text: "b) Tích vô hướng $\\vec{AB} \\cdot \\vec{AD} = 0$.", isTrue: true, explain: "Đúng vì ABCD là hình vuông nên AB vuông góc AD, do đó tích vô hướng bằng 0." },
                  { text: "c) Độ dài của vectơ $\\vec{u} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng $a\\sqrt{3}$.", isTrue: true, explain: "Đúng vì theo quy tắc hình hộp u = AC', và đường chéo hình lập phương cạnh a có độ dài a căn 3." },
                  { text: "d) Góc giữa hai vectơ $\\vec{AA'}$ và $\\vec{BD}$ bằng $90^\\circ$.", isTrue: true, explain: "Đúng vì AA' vuông góc với mặt phẳng đáy (ABCD) nên AA' vuông góc với mọi đường thẳng nằm trong đáy, bao gồm cả BD." }
                ]
              }
            ]
          },
          {
            id: "12-c2-b7",
            number: "Bài 7",
            title: "Hệ trục toạ độ trong không gian",
            isFeaturedLesson: true,
            isOlmInteractive: true,
            teacherWelcome: {
              greetingText: "Thầy Sáng xin chào tất cả các em học sinh lớp 12 thân yêu! Hôm nay, Thầy trò mình sẽ cùng bước vào Bài 7: Hệ trục toạ độ trong không gian Oxyz. Đây là bài học mang tính nền tảng quyết định của toàn bộ chương trình hình học lớp 12, chiếm tỉ trọng câu hỏi rất lớn trong đề thi tốt nghiệp THPT Quốc gia. Trước khi khám phá, các em hãy cùng Thầy xác định 4 mục tiêu cốt lõi: Thứ nhất, hiểu rõ cấu tạo hệ trục toạ độ Oxyz với ba trục vuông góc và ba véctơ đơn vị i, j, k. Thứ hai, xác định thành thạo toạ độ điểm M và các hình chiếu vuông góc lên các mặt phẳng toạ độ. Thứ ba, nắm vững toạ độ véctơ u và công thức AB = B - A. Và thứ tư, vận dụng hệ toạ độ để giải quyết các bài toán thực tiễn không gian ba chiều. Các em hãy chuẩn bị vở ghi, thước kẻ và sẵn sàng tương tác cùng Thầy Sáng nhé!",
              audioScript: "Thầy Sáng xin chào tất cả các em học sinh lớp mười hai thân yêu! Hôm nay, Thầy trò mình sẽ cùng bước vào Bài bảy: Hệ trục toạ độ trong không gian O x y z. Đây là một trong những bài học mang tính nền tảng quan trọng nhất của toàn bộ chương trình hình học lớp mười hai, chiếm tỉ trọng câu hỏi rất lớn trong đề thi tốt nghiệp trung học phổ thông quốc gia. Trước khi khám phá, các em hãy cùng Thầy xác định bốn mục tiêu cốt lõi cần làm chủ. Thứ nhất, hiểu rõ cấu tạo hệ trục toạ độ O x y z với ba trục vuông góc và ba véc tơ đơn vị i, j, k. Thứ hai, xác định thành thạo toạ độ của điểm M và các hình chiếu vuông góc lên các mặt phẳng toạ độ. Thứ ba, nắm vững toạ độ véc tơ u và công thức toạ độ véc tơ A B bằng toạ độ B trừ toạ độ A. Và thứ tư, vận dụng hệ toạ độ để giải quyết các bài toán thực tiễn không gian ba chiều. Các em hãy chuẩn bị vở ghi, thước kẻ và sẵn sàng tương tác cùng Thầy Sáng nhé!",
              audioUrl: "assets/audio/b12_7_welcome.mp3"
            },
            learningGoals: [
              "Hiểu rõ cấu tạo hệ trục toạ độ Đề-các vuông góc $Oxyz$ trong không gian: gốc toạ độ $O$, ba trục $Ox, Oy, Oz$ đôi một vuông góc, ba véctơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ và ba mặt phẳng toạ độ $(Oxy), (Oyz), (Ozx)$.",
              "Làm chủ khái niệm toạ độ của điểm $M(x; y; z)$ thông qua biểu diễn $\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ và xác định nhanh toạ độ các hình chiếu vuông góc lên trục/mặt phẳng toạ độ.",
              "Nắm vững toạ độ véctơ $\\vec{u} = (x; y; z) \\Leftrightarrow \\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ và công thức liên hệ điểm đầu - điểm cuối: $\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$.",
              "Vận dụng hệ toạ độ $Oxyz$ để giải quyết bài toán thực tế: định vị radar hàng không và phân tích kết cấu giàn không gian 3 chiều."
            ],
            hook: {
              title: "Bài toán định vị kiểm soát không lưu radar tại sân bay Tân Sơn Nhất",
              story: "Tại trung tâm kiểm soát không lưu radar, mỗi máy bay di chuyển trên bầu trời đều được máy tính giám sát liên tục theo ba thông số: vị trí Đông - Tây, vị trí Nam - Bắc và độ cao so với mực nước biển. Khi hai máy bay bay cắt qua cùng một khu vực không phận, làm thế nào để các kỹ sư điều hành biết chắc chắn chúng không bao giờ va chạm nhau, và tính được khoảng cách chính xác từng mét giữa hai phi cơ?",
              illustrationCaption: "Mô hình hoá không gian ba chiều định vị vị trí máy bay qua ba trục kinh độ, vĩ độ và độ cao",
              question: "Để mô tả vị trí của một vật thể tự do bay lượn trong không gian bao la, hệ toạ độ mặt phẳng Oxy quen thuộc ở lớp 10 có còn đủ để xác định không, hay ta cần thêm đại lượng đo lường nào nữa?",
              teacherNote: "Rất trực quan các em ạ! Trong mặt phẳng, ta chỉ cần hai số (hoành độ và tung độ) để định vị. Nhưng trong không gian ba chiều thực tế, một chiếc máy bay hay một vệ tinh còn có thêm 'độ cao' (cao độ z). Đó chính là lý do các nhà toán học đã xây dựng Hệ trục toạ độ Đề-các Oxyz – chìa khoá để số hoá vạn vật trong vũ trụ 3 chiều!"
            },
            interactiveAudio: {
              title: "Bài giảng tương tác chuẩn OLM: Hệ trục toạ độ Oxyz & Toạ độ điểm, véctơ",
              audioUrl: "assets/audio/b12_7_main_lecture.mp3",
              timestamps: [
                {
                  time: 25,
                  id: "poi-1",
                  question: "Trong không gian $Oxyz$, cho ba véctơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ lần lượt trên ba trục $Ox, Oy, Oz$. Khẳng định nào sau đây là <strong>SAI</strong>?",
                  options: [
                    "A. $|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1$",
                    "B. $\\vec{i} \\cdot \\vec{j} = 0, \\; \\vec{j} \\cdot \\vec{k} = 0, \\; \\vec{k} \\cdot \\vec{i} = 0$",
                    "C. $\\vec{i}^2 = \\vec{j}^2 = \\vec{k}^2 = 1$",
                    "D. $\\vec{i} + \\vec{j} + \\vec{k} = \\vec{0}$"
                  ],
                  correctIndex: 3,
                  hint: "Ba véctơ đơn vị xuất phát từ gốc O hướng theo ba phương vuông góc, độ dài đều bằng 1 nên tổng của chúng là véctơ đường chéo hình lập phương đơn vị, không thể triệt tiêu thành véctơ không!",
                  explanation: "Theo định nghĩa SGK, $\\vec{i}, \\vec{j}, \\vec{k}$ đôi một vuông góc nên tích vô hướng bằng 0; mỗi véctơ có độ dài bằng 1 nên bình phương vô hướng bằng 1. Tổng $\\vec{i} + \\vec{j} + \\vec{k} = (1; 1; 1) \\neq \\vec{0}$. Do đó khẳng định D là sai."
                },
                {
                  time: 55,
                  id: "poi-2",
                  question: "Trong không gian $Oxyz$, cho điểm $M(3; -2; 5)$. Toạ độ hình chiếu vuông góc của $M$ lên mặt phẳng toạ độ $(Oxy)$ là:",
                  options: [
                    "A. $M'(3; -2; 0)$",
                    "B. $M'(3; 0; 5)$",
                    "C. $M'(0; -2; 5)$",
                    "D. $M'(0; 0; 5)$"
                  ],
                  correctIndex: 0,
                  hint: "Mặt phẳng toạ độ (Oxy) khuyết cao độ z (tức là z = 0). Khi chiếu vuông góc điểm M(x; y; z) lên (Oxy), hoành độ x và tung độ y giữ nguyên, còn z = 0.",
                  explanation: "Hình chiếu vuông góc của điểm $M(x; y; z)$ lên mặt phẳng toạ độ $(Oxy)$ có toạ độ là $M'(x; y; 0)$. Với $M(3; -2; 5)$, ta được $M'(3; -2; 0)$."
                }
              ]
            },
            geogebra3D: {
              title: "Mô hình hình học động GeoGebra 3D & 3D Canvas Engine",
              iframeUrl: "https://www.geogebra.org/material/iframe/id/h2spt8z5/width/800/height/500/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false",
              description: "Học sinh có thể dùng chuột/ngón tay xoay 360 độ góc nhìn không gian, kéo các thanh trượt x, y, z để quan sát toạ độ điểm M(x; y; z) và các hình chiếu vuông góc lên ba mặt phẳng toạ độ theo thời gian thực."
            },
            sections: [
              {
                id: "12-c2-b7-s1",
                num: "1",
                title: "Hệ toạ độ Oxyz và toạ độ của một điểm",
                subsections: [
                  {
                    key: "a",
                    title: "Hệ trục toạ độ Đề-các vuông góc Oxyz",
                    summary: "Ba trục Ox, Oy, Oz đôi một vuông góc tại gốc O; ba véctơ đơn vị i, j, k và các mặt phẳng toạ độ (Oxy), (Oyz), (Ozx).",
                    contentHtml: `
                      <div class="definition-card">
                        <div class="def-badge"><i class="fa-solid fa-cube"></i> Định nghĩa Hệ trục toạ độ Oxyz</div>
                        <p>Trong không gian, xét ba trục số $Ox, Oy, Oz$ vuông góc với nhau từng đôi một tại gốc $O$. Ta gọi đó là <strong>hệ trục toạ độ Đề-các vuông góc trong không gian</strong> (gọi tắt là hệ toạ độ $Oxyz$).</p>
                        <ul>
                          <li><strong>Điểm gốc:</strong> Điểm $O$ gọi là <em>gốc toạ độ</em>.</li>
                          <li><strong>Các trục:</strong> Trục $Ox$ gọi là <em>trục hoành</em>; trục $Oy$ gọi là <em>trục tung</em>; trục $Oz$ gọi là <em>trục cao</em>.</li>
                          <li><strong>Các véctơ đơn vị:</strong> Lần lượt trên các trục $Ox, Oy, Oz$, ta chọn các véctơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ sao cho:
                            <div class="math-highlight-box">
                              $|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1 \\quad \\text{và} \\quad \\vec{i} \\cdot \\vec{j} = \\vec{j} \\cdot \\vec{k} = \\vec{k} \\cdot \\vec{i} = 0$
                            </div>
                          </li>
                          <li><strong>Các mặt phẳng toạ độ:</strong> Mặt phẳng $(Oxy)$ đi qua hai trục $Ox$ và $Oy$; mặt phẳng $(Oyz)$ đi qua hai trục $Oy$ và $Oz$; mặt phẳng $(Ozx)$ đi qua hai trục $Oz$ và $Ox$. Ba mặt phẳng toạ độ này vuông góc từng đôi một.</li>
                        </ul>
                      </div>
                    `
                  },
                  {
                    key: "b",
                    title: "Toạ độ của một điểm trong không gian",
                    summary: "Định nghĩa toạ độ điểm M(x; y; z) qua véctơ OM = x.i + y.j + z.k và toạ độ các hình chiếu vuông góc.",
                    contentHtml: `
                      <div class="definition-card">
                        <div class="def-badge"><i class="fa-solid fa-location-dot"></i> Định nghĩa Toạ độ điểm M</div>
                        <p>Trong không gian với hệ toạ độ $Oxyz$, cho một điểm $M$ tuỳ ý. Khi đó luôn tồn tại <strong>duy nhất</strong> một bộ ba số thực $(x; y; z)$ sao cho:</p>
                        <div class="math-highlight-box">
                          $\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$
                        </div>
                        <p>Bộ ba số $(x; y; z)$ đó được gọi là <strong>toạ độ của điểm $M$</strong> đối với hệ toạ độ $Oxyz$, ký hiệu là $M(x; y; z)$ hoặc $M = (x; y; z)$.</p>
                        <p>Trong đó: $x$ là <em>hoành độ</em>, $y$ là <em>tung độ</em>, $z$ là <em>cao độ</em> của điểm $M$.</p>
                      </div>

                      <div class="property-card" style="margin-top: 18px;">
                        <div class="prop-badge"><i class="fa-solid fa-lightbulb"></i> Quy tắc nhớ nhanh toạ độ hình chiếu vuông góc</div>
                        <p>Để tìm toạ độ hình chiếu vuông góc của điểm $M(x; y; z)$:</p>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.95rem;">
                          <thead>
                            <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                              <th style="padding: 8px 12px; text-align: left;">Chiếu lên</th>
                              <th style="padding: 8px 12px; text-align: left;">Toạ độ hình chiếu</th>
                              <th style="padding: 8px 12px; text-align: left;">Quy tắc ghi nhớ</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                              <td style="padding: 8px 12px;"><strong>Mặt phẳng $(Oxy)$</strong></td>
                              <td style="padding: 8px 12px; color: #0284c7; font-weight: 700;">$M_{Oxy}(x; y; 0)$</td>
                              <td style="padding: 8px 12px;">Khuyết $z$ thì $z = 0$, giữ nguyên $x, y$</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                              <td style="padding: 8px 12px;"><strong>Mặt phẳng $(Oyz)$</strong></td>
                              <td style="padding: 8px 12px; color: #0284c7; font-weight: 700;">$M_{Oyz}(0; y; z)$</td>
                              <td style="padding: 8px 12px;">Khuyết $x$ thì $x = 0$, giữ nguyên $y, z$</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                              <td style="padding: 8px 12px;"><strong>Mặt phẳng $(Ozx)$</strong></td>
                              <td style="padding: 8px 12px; color: #0284c7; font-weight: 700;">$M_{Ozx}(x; 0; z)$</td>
                              <td style="padding: 8px 12px;">Khuyết $y$ thì $y = 0$, giữ nguyên $x, z$</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                              <td style="padding: 8px 12px;"><strong>Trục $Ox$</strong></td>
                              <td style="padding: 8px 12px; color: #10b981; font-weight: 700;">$M_x(x; 0; 0)$</td>
                              <td style="padding: 8px 12px;">Chỉ giữ hoành độ $x$, $y = z = 0$</td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 12px;"><strong>Trục $Oz$</strong></td>
                              <td style="padding: 8px 12px; color: #10b981; font-weight: 700;">$M_z(0; 0; z)$</td>
                              <td style="padding: 8px 12px;">Chỉ giữ cao độ $z$, $x = y = 0$</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    `,
                    workedExample: {
                      title: "Ví dụ 1: Xác định toạ độ điểm và hình chiếu vuông góc",
                      problem: "Trong không gian $Oxyz$, cho điểm $A$ thoả mãn hệ thức véctơ: $\\vec{OA} = 2\\vec{i} - 5\\vec{j} + 7\\vec{k}$. Hãy xác định toạ độ của điểm $A$ và tìm toạ độ các điểm hình chiếu vuông góc của $A$ lên mặt phẳng $(Oxy)$ và trục $Oz$.",
                      solution: `
                        <p>1. Theo định nghĩa toạ độ của một điểm trong không gian:</p>
                        <p>Vì $\\vec{OA} = 2\\vec{i} - 5\\vec{j} + 7\\vec{k}$ nên toạ độ của điểm $A$ là: $A(2; -5; 7)$.</p>
                        <p>2. Hình chiếu vuông góc của điểm $A(2; -5; 7)$ lên mặt phẳng toạ độ $(Oxy)$ là điểm $A_1(2; -5; 0)$ (giữ nguyên $x$ và $y$, thay $z = 0$).</p>
                        <p>3. Hình chiếu vuông góc của điểm $A(2; -5; 7)$ lên trục cao $Oz$ là điểm $A_2(0; 0; 7)$ (thay $x = 0, y = 0$, giữ nguyên $z = 7$).</p>
                      `,
                      thinking: "Các em hãy luôn đối chiếu biểu thức véctơ với dạng chuẩn: số nhân với i là hoành độ x, số nhân với j là tung độ y, và số nhân với k là cao độ z. Nếu khuyết véctơ nào thì toạ độ tương ứng bằng 0 nhé!"
                    }
                  }
                ]
              },
              {
                id: "12-c2-b7-s2",
                num: "2",
                title: "Toạ độ của véctơ trong không gian",
                subsections: [
                  {
                    key: "a",
                    title: "Biểu diễn véctơ qua bộ ba véctơ đơn vị",
                    summary: "u = (x; y; z) <=> u = x.i + y.j + z.k; toạ độ của các véctơ đặc biệt.",
                    contentHtml: `
                      <div class="definition-card">
                        <div class="def-badge"><i class="fa-solid fa-arrows-to-dot"></i> Định nghĩa Toạ độ véctơ trong không gian</div>
                        <p>Trong không gian với hệ toạ độ $Oxyz$, cho véctơ $\\vec{u}$. Khi đó luôn tồn tại <strong>duy nhất</strong> bộ ba số thực $(x; y; z)$ sao cho:</p>
                        <div class="math-highlight-box">
                          $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k}$
                        </div>
                        <p>Bộ ba số $(x; y; z)$ được gọi là <strong>toạ độ của véctơ $\\vec{u}$</strong>, ký hiệu là $\\vec{u} = (x; y; z)$ hoặc $\\vec{u}(x; y; z)$.</p>
                        <ul>
                          <li>$\\vec{i} = (1; 0; 0); \\quad \\vec{j} = (0; 1; 0); \\quad \\vec{k} = (0; 0; 1)$</li>
                          <li>Véctơ không: $\\vec{0} = (0; 0; 0)$</li>
                          <li>Hai véctơ bằng nhau: Cho $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$. Khi đó:
                            <div class="math-highlight-box">
                              $\\vec{u} = \\vec{v} \\iff \\begin{cases} x_1 = x_2 \\\\ y_1 = y_2 \\\\ z_1 = z_2 \\end{cases}$
                            </div>
                          </li>
                        </ul>
                      </div>
                    `
                  },
                  {
                    key: "b",
                    title: "Toạ độ điểm đầu và điểm cuối của véctơ",
                    summary: "Công thức AB = (xB - xA; yB - yA; zB - zA) và mối liên hệ giữa toạ độ điểm và véctơ.",
                    contentHtml: `
                      <div class="theorem-card">
                        <div class="theorem-badge"><i class="fa-solid fa-calculator"></i> Định lí toạ độ véctơ qua toạ độ hai đầu mút</div>
                        <p>Trong không gian $Oxyz$, cho hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$. Khi đó toạ độ của véctơ $\\vec{AB}$ được tính theo công thức:</p>
                        <div class="math-highlight-box">
                          $\\vec{AB} = (x_B - x_A; \\; y_B - y_A; \\; z_B - z_A)$
                        </div>
                        <p style="margin-top: 8px;"><em>(Quy tắc nhớ: Toạ độ véctơ bằng toạ độ điểm ngọn trừ toạ độ điểm gốc).</em></p>
                      </div>
                    `,
                    workedExample: {
                      title: "Ví dụ 2: Tính toạ độ véctơ và tìm toạ độ điểm",
                      problem: "Trong không gian $Oxyz$, cho điểm $A(1; -2; 3)$ và véctơ $\\vec{u} = (-3; 4; 1)$.<br>a) Tìm toạ độ của điểm $B$ sao cho $\\vec{AB} = \\vec{u}$.<br>b) Tìm toạ độ trung điểm $M$ của đoạn thẳng $AB$.",
                      solution: `
                        <p><strong>a) Tìm toạ độ điểm $B$:</strong></p>
                        <p>Gọi $B(x_B; y_B; z_B)$. Ta có $\\vec{AB} = (x_B - 1; \\; y_B - (-2); \\; z_B - 3) = (x_B - 1; \\; y_B + 2; \\; z_B - 3)$.</p>
                        <p>Vì $\\vec{AB} = \\vec{u} = (-3; 4; 1)$ nên ta có hệ phương trình:</p>
                        <p>$\\begin{cases} x_B - 1 = -3 \\\\ y_B + 2 = 4 \\\\ z_B - 3 = 1 \\end{cases} \\iff \\begin{cases} x_B = -2 \\\\ y_B = 2 \\\\ z_B = 4 \\end{cases}$. Vậy $B(-2; 2; 4)$.</p>
                        <p><strong>b) Tìm toạ độ trung điểm $M$:</strong></p>
                        <p>Áp dụng công thức toạ độ trung điểm đoạn thẳng $AB$:</p>
                        <p>$x_M = \\frac{x_A + x_B}{2} = \\frac{1 + (-2)}{2} = -\\frac{1}{2}$;</p>
                        <p>$y_M = \\frac{y_A + y_B}{2} = \\frac{-2 + 2}{2} = 0$;</p>
                        <p>$z_M = \\frac{z_A + z_B}{2} = \\frac{3 + 4}{2} = \\frac{7}{2}$.</p>
                        <p>Vậy trung điểm $M$ có toạ độ là $M\\left(-\\frac{1}{2}; \\; 0; \\; \\frac{7}{2}\\right)$.</p>
                      `,
                      thinking: "Các em lưu ý: Để tìm toạ độ điểm ngọn B khi biết điểm gốc A và véctơ AB, ta chỉ việc lấy toạ độ điểm A cộng với toạ độ véctơ AB: B = A + AB. Cách nhớ này rất nhanh và không bao giờ bị nhầm lẫn dấu!"
                    }
                  }
                ]
              }
            ],
            realworldWrapup: {
              title: "QUAY LẠI GIẢI QUYẾT BÀI TOÁN TÌNH HUỐNG: ĐỊNH VỊ RA-ĐA KHÔNG LƯU",
              recap: "Trong bài toán mở đầu, trạm kiểm soát không lưu radar tại sân bay phát hiện máy bay A ở vị trí M1(40; 60; 8) và máy bay B ở vị trí M2(40; 60; 11) (đơn vị toạ độ tính bằng ki-lô-mét). Hãy giải thích ý nghĩa toạ độ và tính khoảng cách thẳng đứng an toàn giữa hai máy bay.",
              illustrationCaption: "Mô hình hoá hệ toạ độ 3D kiểm soát không lưu định vị phân cách an toàn giữa hai máy bay",
              solution: `
                <p>1. <strong>Phân tích ý nghĩa toạ độ:</strong></p>
                <ul>
                  <li>Máy bay $A$ có toạ độ $M_1(40; 60; 8)$: Nghĩa là máy bay đang ở toạ độ cách gốc radar $40\\text{ km}$ về hướng Đông (trục $Ox$), $60\\text{ km}$ về hướng Bắc (trục $Oy$), và ở độ cao $8\\text{ km}$ (cao độ $z = 8$).</li>
                  <li>Máy bay $B$ có toạ độ $M_2(40; 60; 11)$: Nghĩa là máy bay đang ở cùng vị trí mặt phẳng $(Oxy)$ với máy bay $A$ (cùng kinh độ và vĩ độ), nhưng ở độ cao $11\\text{ km}$ (cao độ $z = 11$).</li>
                </ul>
                <p>2. <strong>Tính khoảng cách và đánh giá an toàn:</strong></p>
                <p>Toạ độ véctơ nối hai máy bay: $\\vec{M_1 M_2} = (40 - 40; \\; 60 - 60; \\; 11 - 8) = (0; 0; 3)$.</p>
                <p>Khoảng cách giữa hai máy bay: $M_1 M_2 = |\\vec{M_1 M_2}| = \\sqrt{0^2 + 0^2 + 3^2} = 3\\text{ km} = 3000\\text{ mét}$.</p>
                <p><strong>Kết luận của Thầy Sáng:</strong> Mặc dù hai máy bay có cùng vị trí kinh vĩ độ trên mặt đất ($x = 40, y = 60$), nhưng nhờ có trục cao độ $Oz$, khoảng cách thẳng đứng giữa chúng là $3000\\text{ mét}$, vượt xa tiêu chuẩn phân cách an toàn tối thiểu của ngành hàng không quốc tế ($1000\\text{ feet} \\approx 300\\text{ mét}$). Nhờ hệ trục toạ độ $Oxyz$, các kiểm soát viên không lưu hoàn toàn yên tâm về an toàn bay!</p>
              `,
              audioScript: "Chào các em! Như vậy Thầy trò mình đã cùng nhau làm chủ toạ độ của điểm và véc tơ trong không gian. Trong thực tế đời sống, hệ trục toạ độ O x y z chính là ngôn ngữ để các hệ thống radar hàng không kiểm soát đường bay của máy bay, hoặc các kĩ sư tính toán kết cấu giàn không gian mái vòm sân vận động hiện đại. Khi gắn hệ toạ độ vào công trình, mọi vị trí liên kết đều được số hoá chính xác từng mi li mét. Các em hãy tiếp tục làm phần luyện tập thích ứng bên dưới để tích luỹ điểm thưởng và làm chủ hoàn toàn bài học nhé!",
              audioUrl: "assets/audio/b12_7_wrapup.mp3"
            }
          },
          {
            id: "12-c2-b8",
            number: "Bài 8",
            title: "Biểu thức toạ độ của các phép toán vectơ",
            sections: [
              {
                id: "12-c2-b8-s1",
                num: "1",
                title: "Biểu thức toạ độ các phép toán cơ bản",
                subsections: [
                  { key: "a", title: "Toạ độ tổng, hiệu và tích với một số", summary: "u ± v = (x±x'; y±y'; z±z'); k.u = (kx; ky; kz)." },
                  { key: "b", title: "Toạ độ trung điểm và trọng tâm tứ diện", summary: "Trung điểm M((xA+xB)/2; (yA+yB)/2; (zA+zB)/2); trọng tâm tứ diện G." }
                ]
              },
              {
                id: "12-c2-b8-s2",
                num: "2",
                title: "Biểu thức toạ độ của tích vô hướng",
                subsections: [
                  { key: "a", title: "Công thức tích vô hướng và độ dài", summary: "u . v = x.x' + y.y' + z.z'; |u| = √(x² + y² + z²)." },
                  { key: "b", title: "Khoảng cách giữa hai điểm và góc giữa hai vectơ", summary: "AB = √((xB-xA)² + (yB-yA)² + (zB-zA)²); cos(u, v) = (u.v)/(|u|.|v|)." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c12-3",
        number: "Chương III",
        title: "Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
        volume: 1,
        volumeLabel: "Tập 1",
        lessons: [
          {
            id: "12-c3-b9",
            number: "Bài 9",
            title: "Khoảng biến thiên và khoảng tứ phân vị",
            sections: [
              {
                id: "12-c3-b9-s1",
                num: "1",
                title: "Khoảng biến thiên của mẫu ghép nhóm",
                subsections: [
                  { key: "a", title: "Khái niệm và công thức tính R", summary: "R = đầu mút phải nhóm cuối - đầu mút trái nhóm đầu." },
                  { key: "b", title: "Ý nghĩa của khoảng biến thiên", summary: "Đánh giá mức độ tản mạn tổng quát của toàn bộ mẫu số liệu." }
                ]
              },
              {
                id: "12-c3-b9-s2",
                num: "2",
                title: "Khoảng tứ phân vị của mẫu ghép nhóm",
                subsections: [
                  { key: "a", title: "Công thức tính ΔQ = Q3 - Q1", summary: "Độ dài của khoảng chứa 50% số liệu trung tâm." },
                  { key: "b", title: "Ý nghĩa và xác định giá trị ngoại lệ", summary: "Không bị ảnh hưởng bởi các giá trị bất thường ở hai biên." }
                ]
              }
            ]
          },
          {
            id: "12-c3-b10",
            number: "Bài 10",
            title: "Phương sai và độ lệch chuẩn",
            sections: [
              {
                id: "12-c3-b10-s1",
                num: "1",
                title: "Phương sai của mẫu số liệu ghép nhóm",
                subsections: [
                  { key: "a", title: "Công thức tính phương sai s²", summary: "s² = (1/n) ∑ mi.(ci - x̄)² = (1/n) ∑ mi.ci² - x̄²." },
                  { key: "b", title: "Ý nghĩa thống kê của phương sai", summary: "Đo độ phân tán bình phương trung bình quanh số trung bình mẫu." }
                ]
              },
              {
                id: "12-c3-b10-s2",
                num: "2",
                title: "Độ lệch chuẩn của mẫu số liệu ghép nhóm",
                subsections: [
                  { key: "a", title: "Công thức tính độ lệch chuẩn s = √(s²)", summary: "Cùng đơn vị đo với số liệu ban đầu, thuận lợi cho việc so sánh." },
                  { key: "b", title: "So sánh độ phân tán giữa hai mẫu số liệu", summary: "Mẫu có độ lệch chuẩn nhỏ hơn thì mức độ ổn định và đồng đều cao hơn." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c12-4",
        number: "Chương IV",
        title: "Nguyên hàm và tích phân",
        volume: 2,
        volumeLabel: "Tập 2",
        lessons: [
          {
            id: "12-c4-b11",
            number: "Bài 11",
            title: "Nguyên hàm",
            sections: [
              {
                id: "12-c4-b11-s1",
                num: "1",
                title: "Khái niệm nguyên hàm",
                subsections: [
                  { key: "a", title: "Định nghĩa nguyên hàm và họ nguyên hàm", summary: "F'(x) = f(x); họ nguyên hàm ∫ f(x)dx = F(x) + C." },
                  { key: "b", title: "Tính chất cơ bản của nguyên hàm", summary: "∫ k f(x)dx = k ∫ f(x)dx; ∫ [f(x) ± g(x)]dx = ∫ f(x)dx ± ∫ g(x)dx." }
                ]
              },
              {
                id: "12-c4-b11-s2",
                num: "2",
                title: "Bảng nguyên hàm và phương pháp tính",
                subsections: [
                  { key: "a", title: "Bảng nguyên hàm của các hàm số cơ bản", summary: "Nguyên hàm hàm luỹ thừa, hàm mũ, hàm lượng giác." },
                  { key: "b", title: "Phương pháp đổi biến số và từng phần", summary: "Phương pháp đặt t = u(x) và công thức tích phân từng phần ∫ u dv = uv - ∫ v du." }
                ]
              }
            ]
          },
          {
            id: "12-c4-b12",
            number: "Bài 12",
            title: "Tích phân",
            sections: [
              {
                id: "12-c4-b12-s1",
                num: "1",
                title: "Khái niệm tích phân",
                subsections: [
                  { key: "a", title: "Định nghĩa tích phân theo công thức Newton-Leibniz", summary: "∫_a^b f(x)dx = F(b) - F(a) = F(x)|_a^b." },
                  { key: "b", title: "Ý nghĩa hình học của tích phân", summary: "Diện tích hình thang cong giới hạn bởi y = f(x) >= 0, y = 0, x = a, x = b." }
                ]
              },
              {
                id: "12-c4-b12-s2",
                num: "2",
                title: "Tính chất của tích phân và phương pháp tính",
                subsections: [
                  { key: "a", title: "Các tính chất đại số", summary: "Chèn cận ∫_a^b = ∫_a^c + ∫_c^b; đổi cận ∫_a^b = -∫_b^a; tích phân với hệ số." },
                  { key: "b", title: "Phương pháp đổi biến số và từng phần trong tích phân", summary: "Quy tắc đổi cận khi đổi biến và công thức tích phân từng phần có cận." }
                ]
              }
            ]
          },
          {
            id: "12-c4-b13",
            number: "Bài 13",
            title: "Ứng dụng hình học của tích phân",
            sections: [
              {
                id: "12-c4-b13-s1",
                num: "1",
                title: "Tính diện tích hình phẳng",
                subsections: [
                  { key: "a", title: "Hình phẳng giới hạn bởi đồ thị và trục hoành", summary: "S = ∫_a^b |f(x)|dx; phương pháp phá dấu trị tuyệt đối." },
                  { key: "b", title: "Hình phẳng giới hạn bởi hai đường cong", summary: "S = ∫_a^b |f(x) - g(x)|dx và bài toán tìm hoành độ giao điểm." }
                ]
              },
              {
                id: "12-c4-b13-s2",
                num: "2",
                title: "Tính thể tích vật thể",
                subsections: [
                  { key: "a", title: "Thể tích vật thể có diện tích thiết diện S(x)", summary: "V = ∫_a^b S(x)dx." },
                  { key: "b", title: "Thể tích khối tròn xoay khi quay quanh trục Ox", summary: "V = π ∫_a^b [f(x)]²dx." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c12-5",
        number: "Chương V",
        title: "Phương pháp toạ độ trong không gian",
        volume: 2,
        volumeLabel: "Tập 2",
        lessons: [
          {
            id: "12-c5-b14",
            number: "Bài 14",
            title: "Phương trình mặt phẳng",
            sections: [
              {
                id: "12-c5-b14-s1",
                num: "1",
                title: "Vectơ pháp tuyến của mặt phẳng",
                subsections: [
                  { key: "a", title: "Định nghĩa vectơ pháp tuyến (VTPT)", summary: "Vectơ n ≠ 0 vuông góc với mọi vectơ chỉ phương của mặt phẳng." },
                  { key: "b", title: "Cặp vectơ chỉ phương và tích có hướng", summary: "Công thức n = [u1, u2] và cách xác định VTPT từ hai VTCP." }
                ]
              },
              {
                id: "12-c5-b14-s2",
                num: "2",
                title: "Phương trình tổng quát của mặt phẳng",
                subsections: [
                  { key: "a", title: "Phương trình dạng Ax + By + Cz + D = 0", summary: "Mặt phẳng đi qua M0(x0; y0; z0) có VTPT n(A; B; C): A(x-x0) + B(y-y0) + C(z-z0) = 0." },
                  { key: "b", title: "Vị trí tương đối của hai mặt phẳng và khoảng cách", summary: "Điều kiện song song, trùng, cắt, vuông góc và công thức khoảng cách từ điểm đến mặt phẳng." }
                ]
              }
            ]
          },
          {
            id: "12-c5-b15",
            number: "Bài 15",
            title: "Phương trình đường thẳng trong không gian",
            sections: [
              {
                id: "12-c5-b15-s1",
                num: "1",
                title: "Phương trình tham số và chính tắc",
                subsections: [
                  { key: "a", title: "Phương trình tham số", summary: "x = x0 + at; y = y0 + bt; z = z0 + ct (t ∈ R) với VTCP u(a; b; c)." },
                  { key: "b", title: "Phương trình chính tắc", summary: "(x - x0)/a = (y - y0)/b = (z - z0)/c khi a.b.c ≠ 0." }
                ]
              },
              {
                id: "12-c5-b15-s2",
                num: "2",
                title: "Vị trí tương đối trong không gian",
                subsections: [
                  { key: "a", title: "Vị trí tương đối giữa hai đường thẳng", summary: "Chéo nhau, cắt nhau, song song, trùng nhau bằng xét hệ phương trình toạ độ." },
                  { key: "b", title: "Vị trí tương đối giữa đường thẳng và mặt phẳng", summary: "Đường thẳng song song, cắt hoặc nằm trong mặt phẳng." }
                ]
              }
            ]
          },
          {
            id: "12-c5-b16",
            number: "Bài 16",
            title: "Công thức tính góc trong không gian",
            sections: [
              {
                id: "12-c5-b16-s1",
                num: "1",
                title: "Góc giữa hai đường thẳng",
                subsections: [
                  { key: "a", title: "Công thức côsin góc giữa hai đường thẳng", summary: "cos φ = |u1 . u2| / (|u1| . |u2|)." },
                  { key: "b", title: "Điều kiện hai đường thẳng vuông góc", summary: "u1 . u2 = 0 <=> a1.a2 + b1.b2 + c1.c2 = 0." }
                ]
              },
              {
                id: "12-c5-b16-s2",
                num: "2",
                title: "Góc giữa đường thẳng và mặt phẳng",
                subsections: [
                  { key: "a", title: "Công thức sin góc giữa đường thẳng và mặt phẳng", summary: "sin φ = |u . n| / (|u| . |n|)." },
                  { key: "b", title: "Luyện tập bài toán góc", summary: "Ứng dụng giải bài toán hình khối không gian toạ độ hoá." }
                ]
              },
              {
                id: "12-c5-b16-s3",
                num: "3",
                title: "Góc giữa hai mặt phẳng",
                subsections: [
                  { key: "a", title: "Công thức côsin góc giữa hai mặt phẳng", summary: "cos φ = |n1 . n2| / (|n1| . |n2|)." },
                  { key: "b", title: "Điều kiện hai mặt phẳng vuông góc", summary: "n1 . n2 = 0 <=> A1.A2 + B1.B2 + C1.C2 = 0." }
                ]
              }
            ]
          },
          {
            id: "12-c5-b17",
            number: "Bài 17",
            title: "Phương trình mặt cầu",
            sections: [
              {
                id: "12-c5-b17-s1",
                num: "1",
                title: "Định nghĩa và phương trình mặt cầu",
                subsections: [
                  { key: "a", title: "Phương trình chính tắc tâm I(a; b; c) bán kính R", summary: "(x - a)² + (y - b)² + (z - c)² = R²." },
                  { key: "b", title: "Phương trình dạng khai triển", summary: "x² + y² + z² - 2ax - 2by - 2cz + d = 0 với a² + b² + c² - d > 0." }
                ]
              },
              {
                id: "12-c5-b17-s2",
                num: "2",
                title: "Vị trí tương đối và mặt phẳng tiếp diện",
                subsections: [
                  { key: "a", title: "Vị trí tương đối giữa mặt phẳng và mặt cầu", summary: "So sánh d(I, (P)) với R: cắt nhau theo đường tròn (d < R), tiếp xúc (d = R), không cắt (d > R)." },
                  { key: "b", title: "Phương trình mặt phẳng tiếp diện tại điểm thuộc mặt cầu", summary: "(x0 - a)(x - x0) + (y0 - b)(y - y0) + (z0 - c)(z - z0) = 0." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "c12-6",
        number: "Chương VI",
        title: "Xác suất có điều kiện và các quy tắc xác suất",
        volume: 2,
        volumeLabel: "Tập 2",
        lessons: [
          {
            id: "12-c6-b18",
            number: "Bài 18",
            title: "Xác suất có điều kiện",
            sections: [
              {
                id: "12-c6-b18-s1",
                num: "1",
                title: "Khái niệm xác suất có điều kiện",
                subsections: [
                  { key: "a", title: "Định nghĩa P(A|B)", summary: "P(A|B) = P(AB) / P(B) với P(B) > 0." },
                  { key: "b", title: "Quy tắc nhân xác suất tổng quát", summary: "P(AB) = P(B) . P(A|B) = P(A) . P(B|A)." }
                ]
              },
              {
                id: "12-c6-b18-s2",
                num: "2",
                title: "Ứng dụng xác suất có điều kiện trong thực tế",
                subsections: [
                  { key: "a", title: "Bảng phân phối ngẫu nhiên hai chiều", summary: "Phân tích số liệu chéo trong y tế, giáo dục, điều tra dân số." },
                  { key: "b", title: "Bài toán kiểm tra y tế và tỉ lệ dương tính giả", summary: "Tính xác suất thực sự mắc bệnh khi có kết quả xét nghiệm dương tính." }
                ]
              }
            ]
          },
          {
            id: "12-c6-b19",
            number: "Bài 19",
            title: "Công thức xác suất toàn phần và công thức Bayes",
            sections: [
              {
                id: "12-c6-b19-s1",
                num: "1",
                title: "Công thức xác suất toàn phần",
                subsections: [
                  { key: "a", title: "Hệ biến cố đầy đủ", summary: "Hệ các biến cố đôi một xung khắc và có hợp bằng không gian mẫu Ω." },
                  { key: "b", title: "Định lí xác suất toàn phần", summary: "P(B) = P(A1).P(B|A1) + P(A2).P(B|A2) + ... + P(An).P(B|An)." }
                ]
              },
              {
                id: "12-c6-b19-s2",
                num: "2",
                title: "Công thức Bayes",
                subsections: [
                  { key: "a", title: "Định nghĩa và công thức Bayes", summary: "P(Ai|B) = [P(Ai) . P(B|Ai)] / P(B) giúp cập nhật xác suất khi có thêm thông tin mới." },
                  { key: "b", title: "Ứng dụng trong phân tích dữ liệu và ra quyết định", summary: "Bộ lọc thư rác (spam filter), chẩn đoán y khoa, đánh giá rủi ro tài chính." }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};

// Xuất ra phạm vi toàn cục
if (typeof window !== "undefined") {
  window.LESSONS_DATABASE = LESSONS_DATABASE;

  // Tự động kết nối với window.LESSON_10_C4_B8_DATA nếu có sẵn
  if (window.LESSON_10_C4_B8_DATA) {
    try {
      var c4 = window.LESSONS_DATABASE["10"] && window.LESSONS_DATABASE["10"].chapters["c4"];
      if (c4 && Array.isArray(c4.lessons)) {
        var idx = c4.lessons.findIndex(function(l) { return l.id === "10-c4-b8"; });
        if (idx !== -1) {
          c4.lessons[idx] = window.LESSON_10_C4_B8_DATA;
        }
      }
    } catch (e) {
      console.warn("Could not auto-link LESSON_10_C4_B8_DATA:", e);
    }
  }
}


