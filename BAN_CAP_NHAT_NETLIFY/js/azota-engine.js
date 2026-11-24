/**
 * js/azota-engine.js
 * Hệ Thống Giao Bài & Quản Lý Đề Thi Trực Tuyến Chuẩn 100% Quy Trình Azota
 * Tác giả: ThS. Lương Thanh Sáng - THPT Nguyễn Văn Thoại, An Giang
 * 
 * Hỗ trợ Dual-Engine:
 * - Khi chạy trên Vercel: Tương tác qua Vercel Serverless API (/api/exams, /api/submit, /api/results)
 * - Khi chạy offline/Netlify/local static: Tự động fallback sang LocalStorage / IndexedDB an toàn
 */

(function(window) {
  'use strict';

  // Khởi tạo hạt giống đề thi mẫu chuẩn Oxyz của Thầy Sáng
  const DEFAULT_SAMPLE_EXAM = {
    id: "AZ-TOAN12-01",
    title: "Đề Khảo Sát Chất Lượng Toán 12 - Phương Pháp Tọa Độ Trong Không Gian (Oxyz)",
    description: "Đề kiểm tra trọng tâm Hệ tọa độ trong không gian Oxyz và Vectơ - Biên soạn: ThS. Lương Thanh Sáng",
    createdAt: "2026-11-24T08:00:00.000Z",
    totalQuestions: 10,
    totalPoints: 10,
    durationMinutes: 15,
    openTime: "",
    closeTime: "",
    password: "",
    maxAttempts: 1,
    viewResultMode: "all", // "none", "score_only", "all"
    enableTabTracking: true,
    fileSourceType: "url",
    fileUrl: "https://drive.google.com/file/d/1KBwzw9LtiVB88jxsz5hkfYDZ_D8ZLkrS/preview",
    fileName: "De_Khao_Sat_Oxyz_Toan12_Thay_Sang.pdf",
    answerKey: {
      "1": "A", "2": "C", "3": "B", "4": "D", "5": "A",
      "6": "B", "7": "C", "8": "D", "9": "A", "10": "B"
    },
    questionPoints: {
      "1": 1.0, "2": 1.0, "3": 1.0, "4": 1.0, "5": 1.0,
      "6": 1.0, "7": 1.0, "8": 1.0, "9": 1.0, "10": 1.0
    },
    status: "active",
    submissionsCount: 2
  };

  const DEFAULT_SAMPLE_SUBMISSIONS = [
    {
      id: "SUB-001",
      examId: "AZ-TOAN12-01",
      studentName: "Nguyễn Văn An",
      studentClass: "12A1",
      submittedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
      durationSeconds: 745,
      score: 9.0,
      correctCount: 9,
      wrongCount: 1,
      unansweredCount: 0,
      tabViolations: 0,
      studentAnswers: {
        "1": "A", "2": "C", "3": "B", "4": "D", "5": "A",
        "6": "B", "7": "C", "8": "D", "9": "A", "10": "A"
      }
    },
    {
      id: "SUB-002",
      examId: "AZ-TOAN12-01",
      studentName: "Trần Thị Mai",
      studentClass: "12A2",
      submittedAt: new Date(Date.now() - 1800000).toISOString(),
      durationSeconds: 820,
      score: 10.0,
      correctCount: 10,
      wrongCount: 0,
      unansweredCount: 0,
      tabViolations: 1,
      studentAnswers: {
        "1": "A", "2": "C", "3": "B", "4": "D", "5": "A",
        "6": "B", "7": "C", "8": "D", "9": "A", "10": "B"
      }
    }
  ];

  // Storage Driver
  const AzotaStore = {
    LOCAL_KEY_EXAMS: 'AZOTA_TEACHER_EXAMS_V1',
    LOCAL_KEY_SUBS: 'AZOTA_STUDENT_SUBS_V1',

    getLocalExams: function() {
      try {
        const raw = localStorage.getItem(this.LOCAL_KEY_EXAMS);
        if (!raw) {
          const initial = [DEFAULT_SAMPLE_EXAM];
          localStorage.setItem(this.LOCAL_KEY_EXAMS, JSON.stringify(initial));
          return initial;
        }
        return JSON.parse(raw);
      } catch (e) {
        return [DEFAULT_SAMPLE_EXAM];
      }
    },

    saveLocalExams: function(exams) {
      try {
        localStorage.setItem(this.LOCAL_KEY_EXAMS, JSON.stringify(exams));
      } catch (e) {
        console.error('Lỗi lưu LocalStorage:', e);
      }
    },

    getLocalSubmissions: function(examId) {
      try {
        const raw = localStorage.getItem(this.LOCAL_KEY_SUBS);
        let list = raw ? JSON.parse(raw) : DEFAULT_SAMPLE_SUBMISSIONS;
        if (!raw) {
          localStorage.setItem(this.LOCAL_KEY_SUBS, JSON.stringify(DEFAULT_SAMPLE_SUBMISSIONS));
        }
        if (examId) {
          return list.filter(function(s) { return s.examId === examId; });
        }
        return list;
      } catch (e) {
        return DEFAULT_SAMPLE_SUBMISSIONS.filter(function(s) { return !examId || s.examId === examId; });
      }
    },

    saveLocalSubmission: function(sub) {
      try {
        const raw = localStorage.getItem(this.LOCAL_KEY_SUBS);
        let list = raw ? JSON.parse(raw) : [...DEFAULT_SAMPLE_SUBMISSIONS];
        list.unshift(sub);
        localStorage.setItem(this.LOCAL_KEY_SUBS, JSON.stringify(list));

        // Cập nhật lượt nộp trong danh sách đề
        const exams = this.getLocalExams();
        const ex = exams.find(function(e) { return e.id === sub.examId; });
        if (ex) {
          ex.submissionsCount = (ex.submissionsCount || 0) + 1;
          this.saveLocalExams(exams);
        }
      } catch (e) {
        console.error('Lỗi lưu bài nộp:', e);
      }
    },

    // Kiểm tra API backend Vercel
    async checkApiAvailable() {
      try {
        const ctrl = new AbortController();
        const timeout = setTimeout(() => ctrl.abort(), 2000);
        const resp = await fetch('/api/exams', { signal: ctrl.signal });
        clearTimeout(timeout);
        return resp.ok;
      } catch (e) {
        return false;
      }
    },

    // Lấy danh sách đề thi (cho giáo viên)
    async fetchExams() {
      try {
        const resp = await fetch('/api/exams');
        if (resp.ok) {
          const resJson = await resp.json();
          if (resJson.success && Array.isArray(resJson.data)) {
            // Đồng bộ nhẹ vào local để cache
            this.saveLocalExams(resJson.data);
            return resJson.data;
          }
        }
      } catch (e) {}
      return this.getLocalExams();
    },

    // Lấy chi tiết 1 đề thi
    async fetchExamDetail(id, role) {
      const isStudent = (role === 'student');
      try {
        const url = `/api/exams?id=${encodeURIComponent(id)}${isStudent ? '&role=student' : ''}`;
        const resp = await fetch(url);
        if (resp.ok) {
          const resJson = await resp.json();
          if (resJson.success && resJson.data) {
            return resJson.data;
          }
        }
      } catch (e) {}

      // Fallback Local
      const exams = this.getLocalExams();
      const exam = exams.find(function(e) { return e.id === id; });
      if (!exam) return null;
      
      const copy = JSON.parse(JSON.stringify(exam));
      if (isStudent) {
        delete copy.answerKey; // Bảo mật không lộ đáp án cho học sinh
      }
      return copy;
    },

    // Lưu / Xuất bản đề thi mới
    async saveExam(examData) {
      try {
        const resp = await fetch('/api/exams', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(examData)
        });
        if (resp.ok) {
          const resJson = await resp.json();
          if (resJson.success && resJson.data) {
            // Cập nhật lại local
            const exams = this.getLocalExams();
            const idx = exams.findIndex(function(e) { return e.id === resJson.data.id; });
            if (idx >= 0) exams[idx] = resJson.data;
            else exams.unshift(resJson.data);
            this.saveLocalExams(exams);
            return resJson.data;
          }
        }
      } catch (e) {}

      // Fallback local
      if (!examData.id) {
        const randStr = Math.random().toString(36).substring(2, 7).toUpperCase();
        examData.id = `AZ-${randStr}`;
      }
      examData.createdAt = examData.createdAt || new Date().toISOString();
      examData.status = examData.status || 'active';
      examData.submissionsCount = examData.submissionsCount || 0;

      const exams = this.getLocalExams();
      const idx = exams.findIndex(function(e) { return e.id === examData.id; });
      if (idx >= 0) {
        exams[idx] = Object.assign({}, exams[idx], examData);
      } else {
        exams.unshift(examData);
      }
      this.saveLocalExams(exams);
      return examData;
    },

    // Xóa đề thi
    async deleteExam(id) {
      try {
        const resp = await fetch(`/api/exams?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
        if (resp.ok) {
          // Xóa local
        }
      } catch (e) {}

      let exams = this.getLocalExams();
      exams = exams.filter(function(e) { return e.id !== id; });
      this.saveLocalExams(exams);
      return true;
    },

    // Nộp bài thi học sinh
    async submitExam(payload) {
      try {
        const resp = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (resp.ok) {
          const resJson = await resp.json();
          if (resJson.success) {
            return resJson;
          }
        }
      } catch (e) {}

      // Fallback tính điểm an toàn local
      const exams = this.getLocalExams();
      const exam = exams.find(function(e) { return e.id === payload.examId; });
      if (!exam) {
        return { success: false, message: 'Đề thi không tồn tại.' };
      }

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
        const studentAns = (payload.studentAnswers && payload.studentAnswers[qKey] || '').toUpperCase().trim();
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

      const finalScore = Math.round(earnedScore * 100) / 100;
      const subId = `SUB-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random()*1000)}`;

      const newSubmission = {
        id: subId,
        examId: payload.examId,
        studentName: payload.studentName.trim(),
        studentClass: payload.studentClass.trim(),
        submittedAt: new Date().toISOString(),
        durationSeconds: parseInt(payload.durationSeconds) || 0,
        score: finalScore,
        correctCount,
        wrongCount,
        unansweredCount,
        tabViolations: parseInt(payload.tabViolations) || 0,
        studentAnswers: payload.studentAnswers || {}
      };

      this.saveLocalSubmission(newSubmission);

      const resultPayload = {
        submissionId: subId,
        examId: exam.id,
        examTitle: exam.title,
        studentName: newSubmission.studentName,
        studentClass: newSubmission.studentClass,
        submittedAt: newSubmission.submittedAt,
        durationSeconds: newSubmission.durationSeconds,
        tabViolations: newSubmission.tabViolations,
        viewResultMode: exam.viewResultMode || 'all'
      };

      if (exam.viewResultMode === 'none') {
        resultPayload.message = 'Bài thi của bạn đã được ghi nhận thành công! Giáo viên sẽ công bố kết quả sau.';
      } else if (exam.viewResultMode === 'score_only') {
        resultPayload.score = finalScore;
        resultPayload.totalPoints = exam.totalPoints || 10;
        resultPayload.correctCount = correctCount;
        resultPayload.totalQuestions = totalQuestions;
      } else {
        resultPayload.score = finalScore;
        resultPayload.totalPoints = exam.totalPoints || 10;
        resultPayload.correctCount = correctCount;
        resultPayload.wrongCount = wrongCount;
        resultPayload.unansweredCount = unansweredCount;
        resultPayload.totalQuestions = totalQuestions;
        resultPayload.details = details;
      }

      return { success: true, message: 'Nộp bài thi thành công!', data: resultPayload };
    },

    // Lấy danh sách kết quả học sinh (cho giáo viên)
    async fetchExamResults(examId) {
      try {
        const resp = await fetch(`/api/results?examId=${encodeURIComponent(examId)}`);
        if (resp.ok) {
          const resJson = await resp.json();
          if (resJson.success && resJson.data) {
            return resJson.data;
          }
        }
      } catch (e) {}

      // Fallback local
      const exams = this.getLocalExams();
      const exam = exams.find(function(e) { return e.id === examId; }) || {};
      const submissions = this.getLocalSubmissions(examId);

      return {
        exam,
        totalSubmissions: submissions.length,
        submissions
      };
    }
  };

  // Tiện ích chuyển đổi link Google Drive sang Preview Iframe
  function convertToGoogleDrivePreview(url) {
    if (!url) return '';
    const trimmed = url.trim();

    // Dạng https://drive.google.com/file/d/FILE_ID/view...
    const match1 = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match1 && match1[1]) {
      return `https://drive.google.com/file/d/${match1[1]}/preview`;
    }

    // Dạng https://drive.google.com/open?id=FILE_ID
    const match2 = trimmed.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
    if (match2 && match2[1]) {
      return `https://drive.google.com/file/d/${match2[1]}/preview`;
    }

    // Dạng https://drive.google.com/uc?id=FILE_ID
    const match3 = trimmed.match(/drive\.google\.com\/uc\?id=([a-zA-Z0-9_-]+)/);
    if (match3 && match3[1]) {
      return `https://drive.google.com/file/d/${match3[1]}/preview`;
    }

    return trimmed;
  }

  // Parse chuỗi nhập nhanh đáp án: "1A 2B 3C" hoặc "ABCDABCD" hoặc "1.A 2.B"
  function parseQuickAnswers(rawText, totalQuestions) {
    if (!rawText) return {};
    const text = rawText.toUpperCase().trim();
    const result = {};

    // Dạng 1: Các cặp "1A 2B" hoặc "1.A 2:B" hoặc "Câu 1: A, Câu 2: B"
    const pairRegex = /(?:CÂU\s*)?(\d+)[\s.:-]*([ABCD])/gi;
    let match;
    let foundPairs = false;

    while ((match = pairRegex.exec(text)) !== null) {
      foundPairs = true;
      const qNum = parseInt(match[1]);
      const ans = match[2].toUpperCase();
      if (qNum >= 1 && (!totalQuestions || qNum <= totalQuestions)) {
        result[String(qNum)] = ans;
      }
    }

    // Dạng 2: Chuỗi liên tục không số ví dụ "ABCDABCD" hoặc "A B C D"
    if (!foundPairs) {
      const lettersOnly = text.replace(/[^ABCD]/gi, '');
      const limit = totalQuestions || lettersOnly.length;
      for (let i = 0; i < Math.min(lettersOnly.length, limit); i++) {
        result[String(i + 1)] = lettersOnly[i];
      }
    }

    return result;
  }

  // Xuất file CSV danh sách điểm cho giáo viên
  function exportSubmissionsToCSV(exam, submissions) {
    let csv = '\uFEFF'; // BOM UTF-8
    csv += `DANH SÁCH KẾT QUẢ THI: ${exam.title || ''}\n`;
    csv += `Mã đề thi: ${exam.id || ''} - Tổng số lượt nộp: ${submissions.length}\n`;
    csv += `Thời điểm xuất: ${new Date().toLocaleString('vi-VN')}\n\n`;
    csv += 'STT,Họ và tên học sinh,Lớp,Điểm số,Số câu đúng,Số câu sai,Chưa làm,Thời gian làm,Số lần chuyển tab,Thời điểm nộp bài\n';

    submissions.forEach(function(sub, idx) {
      const minutes = Math.floor(sub.durationSeconds / 60);
      const seconds = sub.durationSeconds % 60;
      const durationStr = `${minutes} phút ${seconds} giây`;
      const submitTime = new Date(sub.submittedAt).toLocaleString('vi-VN');

      csv += `"${idx + 1}",`;
      csv += `"${(sub.studentName || '').replace(/"/g, '""')}",`;
      csv += `"${(sub.studentClass || '').replace(/"/g, '""')}",`;
      csv += `"${sub.score}",`;
      csv += `"${sub.correctCount}",`;
      csv += `"${sub.wrongCount}",`;
      csv += `"${sub.unansweredCount}",`;
      csv += `"${durationStr}",`;
      csv += `"${sub.tabViolations}",`;
      csv += `"${submitTime}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Bang_Diem_${exam.id || 'Azota'}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Xuất ra đối tượng toàn cục
  window.AzotaEngine = {
    store: AzotaStore,
    convertToGoogleDrivePreview: convertToGoogleDrivePreview,
    parseQuickAnswers: parseQuickAnswers,
    exportSubmissionsToCSV: exportSubmissionsToCSV
  };

})(window);
