/**
 * api/submit.js
 * Vercel Serverless Function tiếp nhận bài nộp của học sinh,
 * thực hiện tính điểm AN TOÀN TRÊN SERVER và ghi nhận lịch sử vi phạm gian lận (chuyển tab).
 */

const db = require('./db');

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Chỉ chấp nhận phương thức POST.' });
  }

  try {
    const {
      examId,
      studentName,
      studentClass,
      studentAnswers = {},
      durationSeconds = 0,
      tabViolations = 0,
      password = ''
    } = req.body || {};

    if (!examId || !studentName || !studentClass) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng cung cấp đầy đủ: Mã đề thi, Họ tên học sinh và Lớp.'
      });
    }

    const exam = db.getExamById(examId);
    if (!exam) {
      return res.status(404).json({ success: false, message: 'Đề thi không tồn tại hoặc đã bị xóa.' });
    }

    // 1. Kiểm tra trạng thái đề thi
    if (exam.status === 'closed') {
      return res.status(403).json({ success: false, message: 'Đề thi này hiện đã đóng nộp bài.' });
    }

    // 2. Kiểm tra hạn chót nếu có
    if (exam.closeTime) {
      const now = new Date();
      const deadline = new Date(exam.closeTime);
      if (now > deadline) {
        return res.status(403).json({ success: false, message: 'Đã quá hạn chót nộp bài của đề thi này!' });
      }
    }

    // 3. Kiểm tra mật khẩu đề thi nếu có
    if (exam.password && exam.password.trim() !== '') {
      if (exam.password.trim() !== String(password).trim()) {
        return res.status(401).json({ success: false, message: 'Mật khẩu đề thi không chính xác!' });
      }
    }

    // 4. BẢO MẬT: TÍNH ĐIỂM HOÀN TOÀN TRÊN SERVER
    const answerKey = exam.answerKey || {};
    const questionPoints = exam.questionPoints || {};
    const totalQuestions = parseInt(exam.totalQuestions) || Object.keys(answerKey).length || 10;
    const defaultPointPerQ = (parseFloat(exam.totalPoints) || 10) / totalQuestions;

    let earnedScore = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;
    const details = {};

    for (let i = 1; i <= totalQuestions; i++) {
      const qKey = String(i);
      const studentAns = (studentAnswers[qKey] || '').toUpperCase().trim();
      const correctAns = (answerKey[qKey] || '').toUpperCase().trim();
      const point = parseFloat(questionPoints[qKey]) || defaultPointPerQ;

      let isCorrect = false;
      if (!studentAns) {
        unansweredCount++;
      } else if (studentAns === correctAns) {
        isCorrect = true;
        correctCount++;
        earnedScore += point;
      } else {
        wrongCount++;
      }

      details[qKey] = {
        questionNumber: i,
        studentAnswer: studentAns || '(Chưa chọn)',
        correctAnswer: correctAns,
        isCorrect: isCorrect,
        pointAwarded: isCorrect ? point : 0
      };
    }

    // Làm tròn điểm 2 chữ số thập phân
    const finalScore = Math.round(earnedScore * 100) / 100;

    // 5. Lưu bài nộp vào database
    const submissionId = `SUB-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random()*1000)}`;
    const newSubmission = {
      id: submissionId,
      examId,
      studentName: studentName.trim(),
      studentClass: studentClass.trim(),
      submittedAt: new Date().toISOString(),
      durationSeconds: parseInt(durationSeconds) || 0,
      score: finalScore,
      correctCount,
      wrongCount,
      unansweredCount,
      tabViolations: parseInt(tabViolations) || 0,
      studentAnswers
    };

    db.saveSubmission(newSubmission);

    // 6. Trả về kết quả phù hợp với cấu hình xem kết quả (viewResultMode)
    const resultPayload = {
      submissionId,
      examId,
      examTitle: exam.title,
      studentName: newSubmission.studentName,
      studentClass: newSubmission.studentClass,
      submittedAt: newSubmission.submittedAt,
      durationSeconds: newSubmission.durationSeconds,
      tabViolations: newSubmission.tabViolations,
      viewResultMode: exam.viewResultMode || 'all'
    };

    if (exam.viewResultMode === 'none') {
      // Không cho xem điểm & đáp án
      resultPayload.message = 'Bài thi của bạn đã được ghi nhận thành công! Giáo viên sẽ công bố kết quả sau.';
    } else if (exam.viewResultMode === 'score_only') {
      // Chỉ cho xem điểm
      resultPayload.score = finalScore;
      resultPayload.totalPoints = exam.totalPoints || 10;
      resultPayload.correctCount = correctCount;
      resultPayload.totalQuestions = totalQuestions;
    } else {
      // Mặc định: Cho xem điểm và chi tiết đáp án
      resultPayload.score = finalScore;
      resultPayload.totalPoints = exam.totalPoints || 10;
      resultPayload.correctCount = correctCount;
      resultPayload.wrongCount = wrongCount;
      resultPayload.unansweredCount = unansweredCount;
      resultPayload.totalQuestions = totalQuestions;
      resultPayload.details = details;
    }

    return res.status(200).json({
      success: true,
      message: 'Nộp bài thi thành công!',
      data: resultPayload
    });
  } catch (error) {
    console.error('API Submit Error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Lỗi khi nộp bài.' });
  }
};
