$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$url = "file:///D:/Wed_ThS.%20L%C6%B0%C6%A1ng%20Thanh%20S%C3%A1ng/bai-hoc-so.html"
$p = Start-Process -FilePath $edge -ArgumentList "--headless","--disable-gpu","--dump-dom",$url -RedirectStandardOutput "d:\Wed_ThS. Lương Thanh Sáng\rendered_12_clean.html" -Wait -PassThru
$len = (Get-Item "d:\Wed_ThS. Lương Thanh Sáng\rendered_12_clean.html").Length
Write-Output "Rendered DOM size: $len bytes"

$html = Get-Content -Path "d:\Wed_ThS. Lương Thanh Sáng\rendered_12_clean.html" -Raw -Encoding utf8

$checks = @{
    "Tiêu đề Bài 7 Hệ trục toạ độ" = ($html -match "Hệ trục toạ độ trong không gian" -or $html -match "Hệ trục tọa độ trong không gian");
    "Lời chào Thầy Sáng" = ($html -match "Thầy Sáng chào cả lớp");
    "Giọng đọc AI của ThS. Lương Thanh Sáng" = ($html -match "Giọng đọc AI của ThS\. Lương Thanh Sáng");
    "Mục tiêu bài học SGK trang 58" = ($html -match "Mục tiêu &amp; Yêu cầu cần đạt của bài học");
    "Tình huống radar Tân Sơn Nhất" = ($html -match "Tân Sơn Nhất");
    "Trình phát tương tác POI" = ($html -match "olm-interactive-player-card");
    "Tiểu mục 1a Oxyz" = ($html -match "Hệ trục toạ độ Đề-các vuông góc trong không gian Oxyz");
    "Tiểu mục 1b Điểm & Hình chiếu" = ($html -match "Toạ độ của một điểm trong không gian &amp; Toạ độ hình chiếu");
    "Tiểu mục 2a Vectơ" = ($html -match "Định nghĩa toạ độ véctơ và các véctơ đặc biệt");
    "Tiểu mục 2b Vectơ AB" = ($html -match "Vectơ AB, Toạ độ trung điểm &amp; Trọng tâm tam giác");
    "Mẹo nhớ của Thầy Sáng" = ($html -match "Mẹo nhớ của Thầy Sáng");
    "Khung Checkpoint tương tác" = ($html -match "sub-checkpoint-card");
    "Nút Bung lời giải chi tiết" = ($html -match "btn-toggle-solution");
    "GeoGebra 3D interactive embed" = ($html -match "geogebra\.org");
    "Luyện tập 3 dạng thức 2025" = ($html -match "examFormatPracticeSection" -or $html -match "PHẦN IV\. BÀI TẬP TRẮC NGHIỆM TỔNG HỢP");
    "Đang tải mục lục (phải là False)" = ($html -match "Đang tải mục lục bài học");
}

foreach ($k in $checks.Keys) {
    Write-Output "$k : $($checks[$k])"
}

