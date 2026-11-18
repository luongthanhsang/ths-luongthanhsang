for path in ['js/script.js', 'BAN_CAP_NHAT_NETLIFY/js/script.js']:
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()

    target = """function retakeQuiz() {
  if (confirm("Em có muốn làm lại lượt thi này với một bộ câu hỏi và phương án được hoán vị mới không?")) {
    currentShuffleCode = "HV-" + Math.floor(100 + Math.random() * 900);
    window.currentShuffleCode = currentShuffleCode;
    loadQuestionsForMode(currentQuizMode);
    const quizSection = document.getElementById("quiz");
    if (quizSection) quizSection.scrollIntoView({ behavior: "smooth" });
    showToast(`Đã tạo đề hoán vị ngẫu nhiên mới (${currentShuffleCode}). Chúc em đạt điểm cao!`, "info");
  }
}
}"""

    replacement = """function retakeQuiz() {
  if (confirm("Em có muốn làm lại lượt thi này với một bộ câu hỏi và phương án được hoán vị mới không?")) {
    currentShuffleCode = "HV-" + Math.floor(100 + Math.random() * 900);
    window.currentShuffleCode = currentShuffleCode;
    loadQuestionsForMode(currentQuizMode);
    const quizSection = document.getElementById("quiz");
    if (quizSection) quizSection.scrollIntoView({ behavior: "smooth" });
    showToast(`Đã tạo đề hoán vị ngẫu nhiên mới (${currentShuffleCode}). Chúc em đạt điểm cao!`, "info");
  }
}"""

    if target in text:
        text = text.replace(target, replacement)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Fixed extra closing brace in {path}")
    else:
        print(f"Target not found in {path}")
