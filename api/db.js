/**
 * api/db.js
 * Module lưu trữ dữ liệu đề thi và bài nộp học sinh cho Vercel Serverless.
 * Hỗ trợ lưu trữ linh hoạt: In-Memory cache kết hợp filesystem tmp/data,
 * và dễ dàng mở rộng sang Vercel KV / Upstash / Supabase khi cần.
 */

const fs = require('fs');
const path = require('path');

// Đề thi mặc định mẫu chuẩn của ThS. Lương Thanh Sáng để Thầy trải nghiệm được ngay
const SEED_EXAMS = [
  {
    id: "AZ-TOAN12-2018",
    title: "Đề Khảo Sát Toán 12 - Chuẩn Cấu Trúc 3 Phần Mới Bộ GD&ĐT (Năm Học 2026 - 2027)",
    description: "Biên soạn: ThS. Lương Thanh Sáng - Linh hoạt 1, 2 hoặc 3 dạng thức, chia điểm Đúng/Sai theo tỷ lệ %",
    createdAt: new Date().toISOString(),
    totalPoints: 10,
    durationMinutes: 45,
    openTime: "",
    closeTime: "",
    password: "",
    maxAttempts: 1,
    viewResultMode: "all",
    enableTabTracking: true,
    fileSourceType: "url",
    fileUrl: "https://drive.google.com/file/d/1eESzLLWKia1FQ2t1e9VsyImzvwYeTu1P/preview",
    fileName: "De_Kiem_Tra_Chuan_2018_Thay_Sang.pdf",
    status: "active",
    submissionsCount: 2,
    formatVersion: "2018_flexible",
    part1: {
      enabled: true,
      numQuestions: 12,
      defaultPoint: 0.25,
      answerKey: {
        "1": "A", "2": "C", "3": "B", "4": "D",
        "5": "A", "6": "B", "7": "C", "8": "D",
        "9": "A", "10": "B", "11": "C", "12": "D"
      },
      points: {
        "1": 0.25, "2": 0.25, "3": 0.25, "4": 0.25,
        "5": 0.25, "6": 0.25, "7": 0.25, "8": 0.25,
        "9": 0.25, "10": 0.25, "11": 0.25, "12": 0.25
      }
    },
    part2: {
      enabled: true,
      numQuestions: 4,
      maxPointPerQuestion: 1.0,
      percentMode: "moet",
      percentages: { 1: 10, 2: 25, 3: 50, 4: 100 },
      customPoints: { "1": 1.0, "2": 1.0, "3": 1.0, "4": 1.0 },
      answerKey: {
        "1": { "a": "D", "b": "S", "c": "D", "d": "S" },
        "2": { "a": "S", "b": "D", "c": "D", "d": "S" },
        "3": { "a": "D", "b": "D", "c": "S", "d": "S" },
        "4": { "a": "S", "b": "S", "c": "D", "d": "D" }
      }
    },
    part3: {
      enabled: true,
      numQuestions: 6,
      defaultPoint: 0.5,
      points: { "1": 0.5, "2": 0.5, "3": 0.5, "4": 0.5, "5": 0.5, "6": 0.5 },
      answerKey: {
        "1": "1.5", "2": "-4", "3": "2026", "4": "0.75", "5": "12", "6": "3.14"
      }
    }
  },
  {
    id: "AZ-TOAN12-01",
    title: "Đề Khảo Sát Chất Lượng Toán 12 - Phương Pháp Tọa Độ Trong Không Gian (Oxyz)",
    description: "Đề kiểm tra trọng tâm Hệ tọa độ trong không gian Oxyz và Vectơ - Biên soạn: ThS. Lương Thanh Sáng",
    createdAt: new Date().toISOString(),
    totalQuestions: 10,
    totalPoints: 10,
    durationMinutes: 15,
    openTime: "",
    closeTime: "",
    password: "",
    maxAttempts: 1, // 1: 1 lần, 0: không giới hạn
    viewResultMode: "all", // "none": không xem, "score_only": chỉ điểm, "all": điểm + đáp án chi tiết
    enableTabTracking: true,
    fileSourceType: "url", // "upload" hoặc "url"
    fileUrl: "https://drive.google.com/file/d/1KBwzw9LtiVB88jxsz5hkfYDZ_D8ZLkrS/preview",
    fileName: "De_Khao_Sat_Oxyz_Toan12_Thay_Sang.pdf",
    part1: {
      enabled: true,
      numQuestions: 10,
      defaultPoint: 1.0,
      answerKey: {
        "1": "A", "2": "C", "3": "B", "4": "D", "5": "A",
        "6": "B", "7": "C", "8": "D", "9": "A", "10": "B"
      },
      points: {
        "1": 1.0, "2": 1.0, "3": 1.0, "4": 1.0, "5": 1.0,
        "6": 1.0, "7": 1.0, "8": 1.0, "9": 1.0, "10": 1.0
      }
    },
    part2: { enabled: false, numQuestions: 0 },
    part3: { enabled: false, numQuestions: 0 },
    status: "active",
    submissionsCount: 2
  }
];

const SEED_SUBMISSIONS = [
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

// In-Memory store trên Vercel Serverless Function instance
let memoryExams = [...SEED_EXAMS];
let memorySubmissions = [...SEED_SUBMISSIONS];

// File lưu trữ tạm thời trong /tmp (khả dụng trên môi trường Linux Vercel / serverless)
const TMP_EXAMS_FILE = path.join('/tmp', 'azota_exams.json');
const TMP_SUBMISSIONS_FILE = path.join('/tmp', 'azota_submissions.json');

function initStorage() {
  try {
    if (fs.existsSync(TMP_EXAMS_FILE)) {
      const data = fs.readFileSync(TMP_EXAMS_FILE, 'utf-8');
      memoryExams = JSON.parse(data);
    } else {
      fs.writeFileSync(TMP_EXAMS_FILE, JSON.stringify(memoryExams, null, 2));
    }
  } catch (e) {
    // Nếu không ghi được /tmp, dùng memory
  }

  try {
    if (fs.existsSync(TMP_SUBMISSIONS_FILE)) {
      const data = fs.readFileSync(TMP_SUBMISSIONS_FILE, 'utf-8');
      memorySubmissions = JSON.parse(data);
    } else {
      fs.writeFileSync(TMP_SUBMISSIONS_FILE, JSON.stringify(memorySubmissions, null, 2));
    }
  } catch (e) {
    // fallback
  }
}

initStorage();

function saveExams() {
  try {
    fs.writeFileSync(TMP_EXAMS_FILE, JSON.stringify(memoryExams, null, 2));
  } catch (e) {}
}

function saveSubmissions() {
  try {
    fs.writeFileSync(TMP_SUBMISSIONS_FILE, JSON.stringify(memorySubmissions, null, 2));
  } catch (e) {}
}

module.exports = {
  getExams: () => memoryExams,
  getExamById: (id) => memoryExams.find(e => e.id === id),
  saveExam: (exam) => {
    const idx = memoryExams.findIndex(e => e.id === exam.id);
    if (idx >= 0) {
      memoryExams[idx] = { ...memoryExams[idx], ...exam };
    } else {
      memoryExams.unshift(exam);
    }
    saveExams();
    return exam;
  },
  deleteExam: (id) => {
    memoryExams = memoryExams.filter(e => e.id !== id);
    memorySubmissions = memorySubmissions.filter(s => s.examId !== id);
    saveExams();
    saveSubmissions();
    return true;
  },
  getSubmissionsByExamId: (examId) => memorySubmissions.filter(s => s.examId === examId),
  saveSubmission: (sub) => {
    memorySubmissions.unshift(sub);
    const exam = memoryExams.find(e => e.id === sub.examId);
    if (exam) {
      exam.submissionsCount = (exam.submissionsCount || 0) + 1;
      saveExams();
    }
    saveSubmissions();
    return sub;
  }
};
