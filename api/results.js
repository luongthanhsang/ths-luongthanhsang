/**
 * api/results.js
 * Vercel Serverless Function cho giáo viên:
 * Lấy danh sách kết quả học sinh nộp bài và xuất báo cáo CSV chuẩn 3 phần 2018.
 */

const db = require('./db');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const { examId, format } = req.query;

    if (!examId) {
      return res.status(400).json({ success: false, message: 'Vui lòng cung cấp mã đề thi (examId).' });
    }

    const exam = db.getExamById(examId) || {
      id: examId,
      title: `Đề thi [${examId}]`,
      status: 'active'
    };

    const submissions = db.getSubmissionsByExamId(examId);

    if (format === 'csv') {
      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="Ket_Qua_${examId}.csv"`);
      
      let csvContent = '\uFEFF';
      csvContent += `DANH SÁCH KẾT QUẢ THI: ${exam.title || ''}\n`;
      csvContent += `Mã đề: ${examId} - Tổng số bài nộp: ${submissions.length}\n`;
      csvContent += `Thời điểm xuất: ${new Date().toLocaleString('vi-VN')}\n\n`;
      csvContent += 'STT,Họ và tên,Lớp,Tổng điểm,Điểm Phần I,Điểm Phần II,Điểm Phần III,Số câu đúng,Số câu sai,Thời gian làm,Số lần chuyển tab,Thời điểm nộp\n';

      submissions.forEach((sub, index) => {
        const timeFormatted = `${Math.floor(sub.durationSeconds / 60)}p ${sub.durationSeconds % 60}s`;
        const submitDate = new Date(sub.submittedAt).toLocaleString('vi-VN');
        csvContent += `"${index + 1}","${sub.studentName}","${sub.studentClass}","${sub.score}","${sub.part1Score !== undefined ? sub.part1Score : '--'}","${sub.part2Score !== undefined ? sub.part2Score : '--'}","${sub.part3Score !== undefined ? sub.part3Score : '--'}","${sub.correctCount}","${sub.wrongCount}","${timeFormatted}","${sub.tabViolations}","${submitDate}"\n`;
      });

      return res.status(200).send(csvContent);
    }

    return res.status(200).json({
      success: true,
      data: {
        exam,
        totalSubmissions: submissions.length,
        submissions
      }
    });
  } catch (error) {
    console.error('API Results Error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Lỗi khi lấy kết quả.' });
  }
};
