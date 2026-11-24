/**
 * api/exams.js
 * Vercel Serverless Function quản lý danh sách và chi tiết đề thi.
 * TUYỆT ĐỐI BẢO MẬT: Khi học sinh truy cập (role=student), ẩn hoàn toàn answerKey của cả 3 phần!
 */

const db = require('./db');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const { method } = req;
    const { id, role } = req.query;

    if (method === 'GET') {
      if (id) {
        const exam = db.getExamById(id);
        if (!exam) {
          return res.status(404).json({ success: false, message: 'Không tìm thấy đề thi với mã này!' });
        }

        // BẢO MẬT TUYỆT ĐỐI: Ẩn đáp án của cả 3 phần khi học sinh lấy đề thi
        if (role === 'student') {
          const studentSafeExam = JSON.parse(JSON.stringify(exam));
          delete studentSafeExam.answerKey;
          if (studentSafeExam.part1) delete studentSafeExam.part1.answerKey;
          if (studentSafeExam.part2) delete studentSafeExam.part2.answerKey;
          if (studentSafeExam.part3) delete studentSafeExam.part3.answerKey;
          return res.status(200).json({ success: true, data: studentSafeExam });
        }

        return res.status(200).json({ success: true, data: exam });
      }

      // Toàn bộ danh sách đề thi
      const allExams = db.getExams().map(e => {
        const summary = JSON.parse(JSON.stringify(e));
        if (role === 'student') {
          delete summary.answerKey;
          if (summary.part1) delete summary.part1.answerKey;
          if (summary.part2) delete summary.part2.answerKey;
          if (summary.part3) delete summary.part3.answerKey;
        }
        return summary;
      });

      return res.status(200).json({ success: true, data: allExams });
    }

    if (method === 'POST') {
      const examData = req.body;
      if (!examData || !examData.title) {
        return res.status(400).json({ success: false, message: 'Dữ liệu đề thi không hợp lệ.' });
      }

      if (!examData.id) {
        const randStr = Math.random().toString(36).substring(2, 7).toUpperCase();
        examData.id = `AZ-${randStr}`;
      }

      examData.createdAt = examData.createdAt || new Date().toISOString();
      examData.status = examData.status || 'active';
      examData.submissionsCount = examData.submissionsCount || 0;
      examData.formatVersion = examData.formatVersion || '2018';

      const saved = db.saveExam(examData);
      return res.status(200).json({
        success: true,
        message: 'Lưu đề thi thành công!',
        data: saved
      });
    }

    if (method === 'DELETE') {
      if (!id) {
        return res.status(400).json({ success: false, message: 'Thiếu mã đề thi cần xóa.' });
      }
      db.deleteExam(id);
      return res.status(200).json({ success: true, message: 'Đã xóa đề thi thành công!' });
    }

    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  } catch (error) {
    console.error('API Exams Error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Lỗi máy chủ nội bộ.' });
  }
};
