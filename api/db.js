/**
 * api/db.js
 * Module lưu trữ dữ liệu đề thi và bài nộp học sinh cho Vercel Serverless.
 * Hỗ trợ đa tầng (Zero-dependency, tối ưu cho hàng trăm học sinh thi đồng thời):
 *  1. Upstash Redis / Vercel KV REST API (KV_REST_API_URL + KV_REST_API_TOKEN hoặc UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN)
 *  2. Firebase Realtime Database REST API (FIREBASE_DB_URL + FIREBASE_AUTH_SECRET tùy chọn)
 *  3. Fallback Local /tmp JSON + In-Memory (tự đồng bộ lại từ /tmp trên cùng instance)
 */

const fs = require('fs');
const path = require('path');

const SEED_EXAMS = [
  {
    id: "AZ-TOAN12-2018",
    title: "Đề Khảo Sát Toán 12 - Chuẩn Cấu Trúc 3 Phần Mới Bộ GD&ĐT (Năm Học 2026 - 2027)",
    description: "Biên soạn: ThS. Lương Thanh Sáng - Linh hoạt 1, 2 hoặc 3 dạng thức, chia điểm Đúng/Sai theo tỷ lệ %",
    createdAt: "2026-11-20T08:00:00.000Z",
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
    createdAt: "2026-11-20T08:00:00.000Z",
    totalQuestions: 10,
    totalPoints: 10,
    durationMinutes: 15,
    openTime: "",
    closeTime: "",
    password: "",
    maxAttempts: 1,
    viewResultMode: "all",
    enableTabTracking: true,
    fileSourceType: "url",
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
  },
  {
    id: "AZ-TX21-2018",
    title: "Đề Kiểm Tra Thường Xuyên 2.1 - Môn Toán 12 (Năm Học 2026 - 2027)",
    description: "Biên soạn: ThS. Lương Thanh Sáng - Đề KTTX 15 phút: 6 câu Phần I (3.0đ) + 2 câu Phần II Đúng/Sai (7.0đ)",
    createdAt: "2026-11-20T08:00:00.000Z",
    totalPoints: 10,
    durationMinutes: 15,
    openTime: "",
    closeTime: "",
    password: "",
    maxAttempts: 1,
    viewResultMode: "all",
    enableTabTracking: true,
    fileSourceType: "url",
    fileUrl: "https://drive.google.com/file/d/1eESzLLWKia1FQ2t1e9VsyImzvwYeTu1P/preview",
    fileName: "De_KTTX_2_1_Toan12_Thay_Sang.pdf",
    status: "active",
    submissionsCount: 0,
    formatVersion: "2018_flexible",
    part1: {
      enabled: true,
      numQuestions: 6,
      defaultPoint: 0.5,
      answerKey: { "1": "A", "2": "C", "3": "B", "4": "D", "5": "A", "6": "C" },
      points: { "1": 0.5, "2": 0.5, "3": 0.5, "4": 0.5, "5": 0.5, "6": 0.5 }
    },
    part2: {
      enabled: true,
      numQuestions: 2,
      maxPointPerQuestion: 3.5,
      percentMode: "moet",
      percentages: { 1: 10, 2: 25, 3: 50, 4: 100 },
      customPoints: { "1": 3.5, "2": 3.5 },
      answerKey: {
        "1": { "a": "D", "b": "S", "c": "D", "d": "S" },
        "2": { "a": "S", "b": "D", "c": "D", "d": "S" }
      }
    },
    part3: { enabled: false, numQuestions: 0 }
  }
];

const SEED_SUBMISSIONS = [
  {
    id: "SUB-001",
    examId: "AZ-TOAN12-2018",
    studentName: "Nguyễn Văn An",
    studentClass: "12A1",
    submittedAt: "2026-11-20T08:30:00.000Z",
    durationSeconds: 1650,
    score: 9.25,
    part1Score: 2.75,
    part2Score: 3.5,
    part3Score: 3.0,
    correctCount: 19,
    wrongCount: 3,
    unansweredCount: 0,
    tabViolations: 0,
    studentAnswers: {
      part1: { "1": "A", "2": "C", "3": "B", "4": "D", "5": "A", "6": "B", "7": "C", "8": "D", "9": "A", "10": "B", "11": "A", "12": "D" },
      part2: {
        "1": { "a": "D", "b": "S", "c": "D", "d": "S" },
        "2": { "a": "S", "b": "D", "c": "D", "d": "S" },
        "3": { "a": "D", "b": "D", "c": "S", "d": "D" },
        "4": { "a": "S", "b": "S", "c": "D", "d": "D" }
      },
      part3: { "1": "1.5", "2": "-4", "3": "2026", "4": "0.75", "5": "12", "6": "3.14" }
    }
  },
  {
    id: "SUB-002",
    examId: "AZ-TOAN12-2018",
    studentName: "Trần Thị Mai",
    studentClass: "12A2",
    submittedAt: "2026-11-20T09:00:00.000Z",
    durationSeconds: 1920,
    score: 9.85,
    part1Score: 3.0,
    part2Score: 4.0,
    part3Score: 2.5,
    correctCount: 21,
    wrongCount: 1,
    unansweredCount: 0,
    tabViolations: 1,
    studentAnswers: {
      part1: { "1": "A", "2": "C", "3": "B", "4": "D", "5": "A", "6": "B", "7": "C", "8": "D", "9": "A", "10": "B", "11": "C", "12": "D" },
      part2: {
        "1": { "a": "D", "b": "S", "c": "D", "d": "S" },
        "2": { "a": "S", "b": "D", "c": "D", "d": "S" },
        "3": { "a": "D", "b": "D", "c": "S", "d": "S" },
        "4": { "a": "S", "b": "S", "c": "D", "d": "D" }
      },
      part3: { "1": "1.5", "2": "-4", "3": "2026", "4": "0.75", "5": "12", "6": "3.2" }
    }
  },
  {
    id: "SUB-003",
    examId: "AZ-TOAN12-01",
    studentName: "Lê Minh Hoàng",
    studentClass: "12A3",
    submittedAt: "2026-11-20T09:15:00.000Z",
    durationSeconds: 780,
    score: 9.0,
    part1Score: 9.0,
    part2Score: 0,
    part3Score: 0,
    correctCount: 9,
    wrongCount: 1,
    unansweredCount: 0,
    tabViolations: 0,
    studentAnswers: {
      "1": "A", "2": "C", "3": "B", "4": "D", "5": "A",
      "6": "B", "7": "C", "8": "D", "9": "A", "10": "C"
    }
  }
];

// ==================== CẤU HÌNH KẾT NỐI CLOUD DB (NẾU CÓ ENV TRÊN VERCEL) ====================
const KV_URL = (process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '').replace(/\/+$/, '');
const KV_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '';
const FIREBASE_URL = (process.env.FIREBASE_DB_URL || '').replace(/\/+$/, '');
const FIREBASE_SECRET = process.env.FIREBASE_AUTH_SECRET || '';

function getStorageMode() {
  if (KV_URL && KV_TOKEN) return 'cloud_kv';
  if (FIREBASE_URL) return 'cloud_firebase';
  return 'ephemeral_tmp';
}

// Helper gọi Upstash / Vercel KV REST Pipeline (atomic O(1), chịu tải hàng nghìn request/giây)
async function kvPipeline(commands) {
  const resp = await fetch(`${KV_URL}/pipeline`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${KV_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commands)
  });
  if (!resp.ok) throw new Error(`KV REST error ${resp.status}`);
  return await resp.json();
}

// Helper gọi Firebase Realtime DB REST API
function firebaseEndpoint(subPath) {
  const clean = subPath.replace(/^\/+/, '');
  const auth = FIREBASE_SECRET ? `?auth=${encodeURIComponent(FIREBASE_SECRET)}` : '';
  return `${FIREBASE_URL}/${clean}.json${auth}`;
}

async function fbRequest(subPath, method = 'GET', bodyObj = null) {
  const opts = { method, headers: { 'Content-Type': 'application/json' } };
  if (bodyObj !== null && method !== 'GET') opts.body = JSON.stringify(bodyObj);
  const resp = await fetch(firebaseEndpoint(subPath), opts);
  if (!resp.ok) throw new Error(`Firebase REST error ${resp.status}`);
  return await resp.json();
}

// ==================== FALLBACK /TMP STORAGE TRÊN VERCEL CONTAINER ====================
let memoryExams = [...SEED_EXAMS];
let memorySubmissions = [...SEED_SUBMISSIONS];

const TMP_EXAMS_FILE = path.join('/tmp', 'azota_exams.json');
const TMP_SUBMISSIONS_FILE = path.join('/tmp', 'azota_submissions.json');

function loadTmpStorage() {
  try {
    if (fs.existsSync(TMP_EXAMS_FILE)) {
      const data = fs.readFileSync(TMP_EXAMS_FILE, 'utf-8');
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) memoryExams = parsed;
      }
    } else {
      fs.writeFileSync(TMP_EXAMS_FILE, JSON.stringify(memoryExams));
    }
  } catch (e) {}

  try {
    if (fs.existsSync(TMP_SUBMISSIONS_FILE)) {
      const data = fs.readFileSync(TMP_SUBMISSIONS_FILE, 'utf-8');
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) memorySubmissions = parsed;
      }
    } else {
      fs.writeFileSync(TMP_SUBMISSIONS_FILE, JSON.stringify(memorySubmissions));
    }
  } catch (e) {}
}

loadTmpStorage();

function writeTmpAtomic(targetFile, dataObj) {
  try {
    const tmpPath = `${targetFile}.${process.pid}.${Date.now()}.tmp`;
    fs.writeFileSync(tmpPath, JSON.stringify(dataObj));
    fs.renameSync(tmpPath, targetFile);
  } catch (e) {
    try { fs.writeFileSync(targetFile, JSON.stringify(dataObj)); } catch (e2) {}
  }
}

function dedupeSubs(list) {
  const seen = new Set();
  const out = [];
  for (const s of list || []) {
    if (!s) continue;
    const key = s.id || `${s.examId}_${s.studentName}_${s.submittedAt}`;
    if (!seen.has(key)) {
      seen.add(key);
      out.push(s);
    }
  }
  out.sort((a, b) => new Date(b.submittedAt || 0).getTime() - new Date(a.submittedAt || 0).getTime());
  return out;
}

// ==================== PUBLIC ASYNC DB INTERFACE ====================
module.exports = {
  getStorageMode,

  async getExams() {
    const mode = getStorageMode();
    if (mode === 'cloud_kv') {
      try {
        const [res] = await kvPipeline([['HVALS', 'ts:exams']]);
        const vals = Array.isArray(res && res.result) ? res.result : [];
        if (vals.length > 0) {
          const parsed = vals.map(v => { try { return JSON.parse(v); } catch (e) { return null; } }).filter(Boolean);
          parsed.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
          return parsed;
        }
        // Seed lần đầu lên KV nếu rỗng
        const seedCmds = SEED_EXAMS.map(e => ['HSET', 'ts:exams', e.id, JSON.stringify(e)]);
        if (seedCmds.length) await kvPipeline(seedCmds);
        return [...SEED_EXAMS];
      } catch (err) {
        console.warn('KV getExams fallback:', err.message);
      }
    } else if (mode === 'cloud_firebase') {
      try {
        const obj = await fbRequest('ts_store/exams');
        if (obj && typeof obj === 'object') {
          const list = Object.values(obj).filter(Boolean);
          list.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
          return list;
        }
        const seedMap = {};
        SEED_EXAMS.forEach(e => { seedMap[e.id] = e; });
        await fbRequest('ts_store/exams', 'PUT', seedMap);
        return [...SEED_EXAMS];
      } catch (err) {
        console.warn('Firebase getExams fallback:', err.message);
      }
    }

    loadTmpStorage();
    return memoryExams;
  },

  async getExamById(id) {
    if (!id) return null;
    const mode = getStorageMode();
    if (mode === 'cloud_kv') {
      try {
        const [res] = await kvPipeline([['HGET', 'ts:exams', id]]);
        if (res && res.result) return JSON.parse(res.result);
      } catch (err) {}
    } else if (mode === 'cloud_firebase') {
      try {
        const data = await fbRequest(`ts_store/exams/${encodeURIComponent(id)}`);
        if (data) return data;
      } catch (err) {}
    }
    loadTmpStorage();
    return memoryExams.find(e => e.id === id) || null;
  },

  async saveExam(exam) {
    if (!exam || !exam.id) return exam;
    const idx = memoryExams.findIndex(e => e.id === exam.id);
    if (idx >= 0) memoryExams[idx] = { ...memoryExams[idx], ...exam };
    else memoryExams.unshift(exam);
    writeTmpAtomic(TMP_EXAMS_FILE, memoryExams);

    const mode = getStorageMode();
    if (mode === 'cloud_kv') {
      try {
        await kvPipeline([['HSET', 'ts:exams', exam.id, JSON.stringify(exam)]]);
      } catch (err) {
        console.warn('KV saveExam error:', err.message);
      }
    } else if (mode === 'cloud_firebase') {
      try {
        await fbRequest(`ts_store/exams/${encodeURIComponent(exam.id)}`, 'PUT', exam);
      } catch (err) {
        console.warn('Firebase saveExam error:', err.message);
      }
    }
    return exam;
  },

  async deleteExam(id) {
    loadTmpStorage();
    memoryExams = memoryExams.filter(e => e.id !== id);
    memorySubmissions = memorySubmissions.filter(s => s.examId !== id);
    writeTmpAtomic(TMP_EXAMS_FILE, memoryExams);
    writeTmpAtomic(TMP_SUBMISSIONS_FILE, memorySubmissions);

    const mode = getStorageMode();
    if (mode === 'cloud_kv') {
      try {
        await kvPipeline([
          ['HDEL', 'ts:exams', id],
          ['DEL', `ts:subs:${id}`]
        ]);
      } catch (err) {}
    } else if (mode === 'cloud_firebase') {
      try {
        await fbRequest(`ts_store/exams/${encodeURIComponent(id)}`, 'DELETE');
        await fbRequest(`ts_store/submissions/${encodeURIComponent(id)}`, 'DELETE');
      } catch (err) {}
    }
    return true;
  },

  async getSubmissionsByExamId(examId) {
    if (!examId) return [];
    const mode = getStorageMode();
    if (mode === 'cloud_kv') {
      try {
        const [res] = await kvPipeline([['LRANGE', `ts:subs:${examId}`, 0, 4999]]);
        const rawList = Array.isArray(res && res.result) ? res.result : [];
        const parsed = rawList.map(v => { try { return JSON.parse(v); } catch (e) { return null; } }).filter(Boolean);
        return dedupeSubs(parsed);
      } catch (err) {
        console.warn('KV getSubmissions fallback:', err.message);
      }
    } else if (mode === 'cloud_firebase') {
      try {
        const obj = await fbRequest(`ts_store/submissions/${encodeURIComponent(examId)}`);
        if (obj && typeof obj === 'object') {
          return dedupeSubs(Object.values(obj));
        }
        return [];
      } catch (err) {
        console.warn('Firebase getSubmissions fallback:', err.message);
      }
    }

    loadTmpStorage();
    return dedupeSubs(memorySubmissions.filter(s => s.examId === examId));
  },

  async searchAllSubmissions(query = '') {
    const q = String(query || '').toLowerCase().trim();
    const mode = getStorageMode();
    let pool = [];

    if (mode === 'cloud_kv') {
      try {
        const [res] = await kvPipeline([['LRANGE', 'ts:subs_recent', 0, 999]]);
        const rawList = Array.isArray(res && res.result) ? res.result : [];
        pool = rawList.map(v => { try { return JSON.parse(v); } catch (e) { return null; } }).filter(Boolean);
      } catch (err) {}
    } else if (mode === 'cloud_firebase') {
      try {
        const obj = await fbRequest('ts_store/submissions');
        if (obj && typeof obj === 'object') {
          Object.values(obj).forEach(examBucket => {
            if (examBucket && typeof examBucket === 'object') {
              Object.values(examBucket).forEach(sub => { if (sub) pool.push(sub); });
            }
          });
        }
      } catch (err) {}
    }

    if (pool.length === 0) {
      loadTmpStorage();
      pool = memorySubmissions;
    }

    const clean = dedupeSubs(pool);
    if (!q) return clean.slice(0, 100);
    return clean.filter(s =>
      (s.studentName || '').toLowerCase().includes(q) ||
      (s.studentClass || '').toLowerCase().includes(q) ||
      (s.examId || '').toLowerCase().includes(q) ||
      (s.id || '').toLowerCase().includes(q)
    ).slice(0, 200);
  },

  async saveSubmission(sub) {
    if (!sub) return sub;
    loadTmpStorage();
    const existIdx = sub.id ? memorySubmissions.findIndex(s => s && s.id === sub.id) : -1;
    if (existIdx >= 0) {
      memorySubmissions[existIdx] = { ...memorySubmissions[existIdx], ...sub };
    } else {
      memorySubmissions.unshift(sub);
    }

    const exam = memoryExams.find(e => e.id === sub.examId);
    if (exam) {
      const localCount = memorySubmissions.filter(s => s.examId === sub.examId).length;
      exam.submissionsCount = Math.max(exam.submissionsCount || 0, localCount);
      writeTmpAtomic(TMP_EXAMS_FILE, memoryExams);
    }
    writeTmpAtomic(TMP_SUBMISSIONS_FILE, memorySubmissions);

    const mode = getStorageMode();
    if (mode === 'cloud_kv') {
      try {
        const jsonSub = JSON.stringify(sub);
        await kvPipeline([
          ['LPUSH', `ts:subs:${sub.examId}`, jsonSub],
          ['LPUSH', 'ts:subs_recent', jsonSub],
          ['LTRIM', 'ts:subs_recent', 0, 999]
        ]);
      } catch (err) {
        console.warn('KV saveSubmission error:', err.message);
      }
    } else if (mode === 'cloud_firebase') {
      try {
        // Atomic PUT theo sub.id giúp tránh ghi đè & tránh trùng lặp khi 200+ học sinh nộp cùng giây
        const safeSubId = String(sub.id || `SUB-${Date.now()}`).replace(/[.#$\[\]\/]/g, '_');
        await fbRequest(`ts_store/submissions/${encodeURIComponent(sub.examId)}/${encodeURIComponent(safeSubId)}`, 'PUT', sub);
      } catch (err) {
        console.warn('Firebase saveSubmission error:', err.message);
      }
    }
    return sub;
  }
};
