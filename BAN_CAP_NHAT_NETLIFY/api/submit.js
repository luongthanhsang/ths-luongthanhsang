/**
 * api/submit.js
 * Vercel Serverless Function tiếp nhận bài nộp của học sinh,
 * thực hiện tính điểm AN TOÀN TRÊN SERVER theo chuẩn 3 Phần GDPT 2018 của Bộ GD&ĐT:
 * - Phần I: Trắc nghiệm nhiều lựa chọn
 * - Phần II: Trắc nghiệm Đúng / Sai (Barem lũy tiến 0.1 - 0.25 - 0.5 - 1.0 hoặc tùy chỉnh)
 * - Phần III: Trắc nghiệm Trả lời ngắn (Chuẩn hóa số thập phân)
 */

const db = require('./db');

module.exports = async (req, res) => {
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

    if (exam.status === 'closed') {
      return res.status(403).json({ success: false, message: 'Đề thi này hiện đã đóng nộp bài.' });
    }

    if (exam.closeTime) {
      const now = new Date();
      const deadline = new Date(exam.closeTime);
      if (now > deadline) {
        return res.status(403).json({ success: false, message: 'Đã quá hạn chót nộp bài của đề thi này!' });
      }
    }

    if (exam.password && exam.password.trim() !== '') {
      if (exam.password.trim() !== String(password).trim()) {
        return res.status(401).json({ success: false, message: 'Mật khẩu đề thi không chính xác!' });
      }
    }

    // BẢO MẬT: TÍNH ĐIỂM CHUẨN XÁC TRÊN SERVER THEO 3 PHẦN 2018
    let totalEarned = 0;
    let totalCorrect = 0;
    let totalWrong = 0;
    let totalUnanswered = 0;
    const detailResult = { part1: {}, part2: {}, part3: {} };

    // 1. Chấm Phần I
    let p1Earned = 0;
    if (exam.part1 && exam.part1.enabled) {
      const p1Key = exam.part1.answerKey || {};
      const p1Points = exam.part1.points || {};
      const defP1 = parseFloat(exam.part1.defaultPoint) || 0.25;
      const nQ1 = parseInt(exam.part1.numQuestions) || Object.keys(p1Key).length || 0;

      for (let i = 1; i <= nQ1; i++) {
        const qStr = String(i);
        const sAns = (studentAnswers.part1 && studentAnswers.part1[qStr] || studentAnswers[qStr] || '').toUpperCase().trim();
        const cAns = (p1Key[qStr] || '').toUpperCase().trim();
        const pt = parseFloat(p1Points[qStr]) || defP1;

        let isCor = false;
        if (!sAns) {
          totalUnanswered++;
        } else if (sAns === cAns) {
          isCor = true;
          totalCorrect++;
          p1Earned += pt;
        } else {
          totalWrong++;
        }

        detailResult.part1[qStr] = {
          student: sAns || '(Chưa chọn)',
          correct: cAns,
          isCorrect: isCor,
          point: isCor ? pt : 0
        };
      }
    }

    // 2. Chấm Phần II: Đúng / Sai
    let p2Earned = 0;
    if (exam.part2 && exam.part2.enabled) {
      const p2Key = exam.part2.answerKey || {};
      const nQ2 = parseInt(exam.part2.numQuestions) || Object.keys(p2Key).length || 0;
      const scoringMode = exam.part2.scoringMode || 'moet_progressive';
      const customPts = exam.part2.customPoints || {};
      const subPts = exam.part2.subItemPoints || {};

      for (let i = 1; i <= nQ2; i++) {
        const qStr = String(i);
        const cAnsObj = p2Key[qStr] || {};
        const sAnsObj = (studentAnswers.part2 && studentAnswers.part2[qStr]) || {};
        const maxPt = parseFloat(customPts[qStr]) || parseFloat(exam.part2.maxPointPerQuestion) || 1.0;

        let correctSubsCount = 0;
        let subDetails = {};

        ['a', 'b', 'c', 'd'].forEach(function(item) {
          const cItem = (cAnsObj[item] || '').toUpperCase().trim();
          const sItem = (sAnsObj[item] || '').toUpperCase().trim();
          let isItemCor = false;

          if (sItem && sItem === cItem) {
            isItemCor = true;
            correctSubsCount++;
            totalCorrect++;
          } else if (sItem) {
            totalWrong++;
          } else {
            totalUnanswered++;
          }

          subDetails[item] = {
            student: sItem || '(Trống)',
            correct: cItem,
            isCorrect: isItemCor
          };
        });

        let qPoint = 0;
        if (scoringMode === 'moet_progressive') {
          let multiplier = 0;
          if (correctSubsCount === 1) multiplier = 0.10;
          else if (correctSubsCount === 2) multiplier = 0.25;
          else if (correctSubsCount === 3) multiplier = 0.50;
          else if (correctSubsCount === 4) multiplier = 1.00;
          qPoint = maxPt * multiplier;
        } else if (scoringMode === 'equal_sub') {
          qPoint = correctSubsCount * (maxPt / 4.0);
        } else if (scoringMode === 'custom') {
          const itemMap = subPts[qStr] || { a: 0.25, b: 0.25, c: 0.25, d: 0.25 };
          ['a', 'b', 'c', 'd'].forEach(function(it) {
            if (subDetails[it].isCorrect) {
              qPoint += parseFloat(itemMap[it]) || 0.25;
            }
          });
        }

        qPoint = Math.round(qPoint * 100) / 100;
        p2Earned += qPoint;

        detailResult.part2[qStr] = {
          correctSubsCount: correctSubsCount,
          subDetails: subDetails,
          point: qPoint,
          maxPoint: maxPt
        };
      }
    }

    // 3. Chấm Phần III: Trả lời ngắn
    let p3Earned = 0;
    if (exam.part3 && exam.part3.enabled) {
      const p3Key = exam.part3.answerKey || {};
      const p3Points = exam.part3.points || {};
      const defP3 = parseFloat(exam.part3.defaultPoint) || 0.5;
      const nQ3 = parseInt(exam.part3.numQuestions) || Object.keys(p3Key).length || 0;

      for (let i = 1; i <= nQ3; i++) {
        const qStr = String(i);
        let sRaw = (studentAnswers.part3 && studentAnswers.part3[qStr] || '').trim();
        let cRaw = (p3Key[qStr] || '').trim();
        const pt = parseFloat(p3Points[qStr]) || defP3;

        const normalize = (val) => String(val).toLowerCase().replace(/\s+/g, '').replace(/,/g, '.');
        const sNorm = normalize(sRaw);
        const cNorm = normalize(cRaw);

        let isCor = false;
        if (!sNorm) {
          totalUnanswered++;
        } else if (sNorm === cNorm) {
          isCor = true;
          totalCorrect++;
          p3Earned += pt;
        } else {
          const sNum = parseFloat(sNorm);
          const cNum = parseFloat(cNorm);
          if (!isNaN(sNum) && !isNaN(cNum) && Math.abs(sNum - cNum) < 1e-5) {
            isCor = true;
            totalCorrect++;
            p3Earned += pt;
          } else {
            totalWrong++;
          }
        }

        detailResult.part3[qStr] = {
          student: sRaw || '(Chưa điền)',
          correct: cRaw,
          isCorrect: isCor,
          point: isCor ? pt : 0
        };
      }
    }

    // Tương thích ngược đề cũ
    if (!exam.part1 && !exam.part2 && !exam.part3 && exam.answerKey) {
      const oldKey = exam.answerKey || {};
      const oldPts = exam.questionPoints || {};
      const nQ = parseInt(exam.totalQuestions) || Object.keys(oldKey).length || 10;
      const defOld = (parseFloat(exam.totalPoints) || 10) / nQ;

      for (let i = 1; i <= nQ; i++) {
        const qStr = String(i);
        const sAns = (studentAnswers[qStr] || '').toUpperCase().trim();
        const cAns = (oldKey[qStr] || '').toUpperCase().trim();
        const pt = parseFloat(oldPts[qStr]) || defOld;

        let isCor = false;
        if (!sAns) {
          totalUnanswered++;
        } else if (sAns === cAns) {
          isCor = true;
          totalCorrect++;
          totalEarned += pt;
        } else {
          totalWrong++;
        }
      }
    } else {
      totalEarned = p1Earned + p2Earned + p3Earned;
    }

    const finalScore = Math.round(totalEarned * 100) / 100;
    const finalP1 = Math.round(p1Earned * 100) / 100;
    const finalP2 = Math.round(p2Earned * 100) / 100;
    const finalP3 = Math.round(p3Earned * 100) / 100;

    const submissionId = `SUB-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random()*1000)}`;
    const newSubmission = {
      id: submissionId,
      examId,
      studentName: studentName.trim(),
      studentClass: studentClass.trim(),
      submittedAt: new Date().toISOString(),
      durationSeconds: parseInt(durationSeconds) || 0,
      score: finalScore,
      part1Score: finalP1,
      part2Score: finalP2,
      part3Score: finalP3,
      correctCount: totalCorrect,
      wrongCount: totalWrong,
      unansweredCount: totalUnanswered,
      tabViolations: parseInt(tabViolations) || 0,
      studentAnswers
    };

    db.saveSubmission(newSubmission);

    const resultPayload = {
      submissionId,
      examId,
      examTitle: exam.title,
      studentName: newSubmission.studentName,
      studentClass: newSubmission.studentClass,
      submittedAt: newSubmission.submittedAt,
      durationSeconds: newSubmission.durationSeconds,
      tabViolations: newSubmission.tabViolations,
      viewResultMode: exam.viewResultMode || 'all',
      score: finalScore,
      part1Score: finalP1,
      part2Score: finalP2,
      part3Score: finalP3,
      correctCount: totalCorrect,
      wrongCount: totalWrong,
      unansweredCount: totalUnanswered,
      details: (exam.viewResultMode === 'all') ? detailResult : null
    };

    if (exam.viewResultMode === 'none') {
      resultPayload.message = 'Bài thi của bạn đã được ghi nhận thành công! Giáo viên sẽ công bố kết quả sau.';
      delete resultPayload.score;
      delete resultPayload.details;
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
