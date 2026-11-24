/**
 * api/exams.js
 * Vercel Serverless Function quản lý danh sách và chi tiết đề thi.
 * TUYỆT ĐỐI BẢO MẬT: Khi học sinh truy cập (role=student), ẩn hoàn toàn answerKey!
 */

const db = require('./db');

module.exports = async (req, res) => {
  // CORS Headers
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

        // BẢO MẬT TUYỆT ĐỐI: Học sinh tuyệt đối không được xem đáp án gốc trong lúc lấy đề thi
        if (role === 'student') {
          const studentSafeExam = { ...exam };
          delete studentSafeExam.answerKey; // Xóa sạch bảng đáp án trước khi gửi về client
          return res.status(200).json({ success: true, data: studentSafeExam });
        }

        // Giáo viên xem đầy đủ thông tin
        return res.status(200).json({ success: true, data: exam });
      }

      // Lấy toàn bộ danh sách đề thi (dạng rút gọn cho danh sách quản lý)
      const allExams = db.getExams().map(e => {
        const summary = { ...e };
        if (role === 'student') {
          delete summary.answerKey;
        }
        return summary;
      });

      return res.status(200).json({ success: true, data: allExams });
    }

    if (method === 'POST') {
      const examData = req.body;
      if (!examData || !examData.title) {
        return res.status(400).json({ success: false, message: 'Dữ liệu đề thi không hợp lệ (thiếu tiêu đề).' });
      }

      // Tạo ID ngắn ngẫu nhiên chuẩn Azota nếu chưa có
      if (!examData.id) {
        const randStr = Math.random().toString(36).substring(2, 7).toUpperCase();
        examData.id = `AZ-${randStr}`;
      }

      examData.createdAt = examData.createdAt || new Date().toISOString();
      examData.status = examData.status || 'active';
      examData.submissionsCount = examData.submissionsCount || 0;

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
