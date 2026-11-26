/**
 * js/exam-engine.js
 * Hệ Thống Giao Bài & Quản Lý Đề Thi Trực Tuyến - ThS. Lương Thanh Sáng
 * 
 * Hỗ trợ ĐA DẠNG THỨC LINH HOẠT:
 * - Đề 1 dạng thức (chỉ Nhiều lựa chọn, hoặc chỉ Đúng/Sai, hoặc chỉ Trả lời ngắn)
 * - Đề 2 dạng thức (P1 + P2, hoặc P1 + P3, hoặc P2 + P3)
 * - Đề 3 dạng thức đầy đủ chuẩn Bộ GD&ĐT (P1 + P2 + P3)
 * 
 * CHIA ĐIỂM ĐÚNG/SAI THEO TỶ LỆ PHẦN TRĂM (%) CHUẨN BỘ GD&ĐT:
 * - Lũy tiến chuẩn Bộ GD&ĐT: [1 ý = 10% | 2 ý = 25% | 3 ý = 50% | 4 ý = 100%]
 * - Chia đều từng ý: [1 ý = 25% | 2 ý = 50% | 3 ý = 75% | 4 ý = 100%]
 * - Tùy chỉnh phần trăm tự do: Giáo viên tự nhập % cho từng mức 1, 2, 3, 4 ý đúng.
 * 
 * Tác giả: ThS. Lương Thanh Sáng - Tổ trưởng Tổ Toán, THPT Nguyễn Văn Thoại, An Giang.
 */

(function(window) {
  'use strict';

  // Hạt giống đề mẫu linh hoạt 3 dạng thức
  const DEFAULT_SAMPLE_EXAM = {
    id: "TS-TOAN12-CK1",
    title: "Đề Khảo Sát Toán 12 - Chuẩn Cấu Trúc 3 Phần Mới Bộ GD&ĐT (Năm Học 2026 - 2027)",
    description: "Biên soạn: ThS. Lương Thanh Sáng - Linh hoạt 1, 2 hoặc 3 dạng thức, chia điểm Đúng/Sai theo tỷ lệ %",
    createdAt: "2026-11-24T08:00:00.000Z",
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
    fileName: "De_Kiem_Tra_Chuan_Thay_Sang.pdf",
    status: "active",
    submissionsCount: 2,
    formatVersion: "moet_flexible",

    // PHẦN I: Trắc nghiệm nhiều lựa chọn
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

    // PHẦN II: Trắc nghiệm Đúng / Sai (Chia điểm theo Tỷ Lệ Phần Trăm %)
    part2: {
      enabled: true,
      numQuestions: 4,
      maxPointPerQuestion: 1.0,
      percentMode: "moet", // "moet": Lũy tiến, "equal": Chia đều, "custom": Tùy chỉnh %
      percentages: {
        1: 10,  // Đúng 1 ý = 10%
        2: 25,  // Đúng 2 ý = 25%
        3: 50,  // Đúng 3 ý = 50%
        4: 100  // Đúng 4 ý = 100%
      },
      customPoints: { "1": 1.0, "2": 1.0, "3": 1.0, "4": 1.0 },
      answerKey: {
        "1": { "a": "D", "b": "S", "c": "D", "d": "S" },
        "2": { "a": "S", "b": "D", "c": "D", "d": "S" },
        "3": { "a": "D", "b": "D", "c": "S", "d": "S" },
        "4": { "a": "S", "b": "S", "c": "D", "d": "D" }
      }
    },

    // PHẦN III: Trắc nghiệm Trả lời ngắn
    part3: {
      enabled: true,
      numQuestions: 6,
      defaultPoint: 0.5,
      points: { "1": 0.5, "2": 0.5, "3": 0.5, "4": 0.5, "5": 0.5, "6": 0.5 },
      answerKey: {
        "1": "1.5",
        "2": "-4",
        "3": "2026",
        "4": "0.75",
        "5": "12",
        "6": "3.14"
      }
    }
  };

  const DEFAULT_SAMPLE_SUBMISSIONS = [
    {
      id: "SUB-001",
      examId: "TS-TOAN12-CK1",
      studentName: "Nguyễn Văn An",
      studentClass: "12A1",
      submittedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
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
      examId: "TS-TOAN12-CK1",
      studentName: "Trần Thị Mai",
      studentClass: "12A2",
      submittedAt: new Date(Date.now() - 1800000).toISOString(),
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
    }
  ];

  // Đề mẫu Kiểm tra Thường xuyên 2.1 (6 câu P1 + 2 câu P2 Đúng/Sai, thời gian 15 phút)
  const DEFAULT_TX_SAMPLE_EXAM = {
    id: "TS-TX21-TOAN12",
    title: "Đề Kiểm Tra Thường Xuyên 2.1 - Môn Toán 12 (Năm Học 2026 - 2027)",
    description: "Biên soạn: ThS. Lương Thanh Sáng - Đề KTTX 15 phút: 6 câu Phần I (3.0đ) + 2 câu Phần II Đúng/Sai (7.0đ)",
    createdAt: "2026-11-24T09:00:00.000Z",
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
    fileName: "De_Kiem_Tra_Thuong_Xuyen_2.1_Toan_12.pdf",
    status: "active",
    submissionsCount: 0,
    formatVersion: "moet_flexible",
    part1: {
      enabled: true,
      numQuestions: 6,
      defaultPoint: 0.5,
      answerKey: { "1": "A", "2": "C", "3": "B", "4": "D", "5": "A", "6": "C" },
      points: {}
    },
    part2: {
      enabled: true,
      numQuestions: 2,
      maxPointPerQuestion: 3.5,
      percentMode: "moet",
      percentages: { 1: 10, 2: 25, 3: 50, 4: 100 },
      customPoints: {},
      answerKey: {
        "1": { "a": "D", "b": "S", "c": "D", "d": "S" },
        "2": { "a": "S", "b": "D", "c": "D", "d": "S" }
      }
    },
    part3: {
      enabled: false,
      numQuestions: 0,
      defaultPoint: 0.5,
      answerKey: {},
      points: {}
    }
  };

  // Storage Driver
  // ==================== HỆ THỐNG ÁNH XẠ & MÃ HÓA LINK CHIA SẺ ĐỘC LẬP THIẾT BỊ ====================
  function extractAntiAnswerKeys(anti) {
    const p1Raw = Array.isArray(anti.part1) ? anti.part1 : [];
    const p2Raw = Array.isArray(anti.part2) ? anti.part2 : [];
    const p3Raw = Array.isArray(anti.part3) ? anti.part3 : [];

    const p1Key = {};
    p1Raw.forEach((q, idx) => {
      p1Key[String(idx + 1)] = String(q.answer || q.correctAnswer || '').toUpperCase().trim();
    });

    const p2Key = {};
    p2Raw.forEach((q, idx) => {
      const qStr = String(idx + 1);
      if (Array.isArray(q.items)) {
        const res = { a: 'S', b: 'S', c: 'S', d: 'S' };
        q.items.forEach(it => {
          if (it && it.id) res[it.id] = it.correct ? 'D' : 'S';
        });
        p2Key[qStr] = res;
      } else {
        const ca = q.correctAnswers || {};
        p2Key[qStr] = {
          a: ca.a || '',
          b: ca.b || '',
          c: ca.c || '',
          d: ca.d || ''
        };
      }
    });

    const p3Key = {};
    p3Raw.forEach((q, idx) => {
      p3Key[String(idx + 1)] = String(q.answer || q.correctAnswer || '').trim();
    });

    return { p1Key, p2Key, p3Key };
  }

  function resolveAntiExamKey(codeOrId, titleHint) {
    const secretDb = (typeof window !== 'undefined' && window.ANTI_SECRET_EXAMS_DATABASE) ? window.ANTI_SECRET_EXAMS_DATABASE : {};
    const publicDb = (typeof window !== 'undefined' && window.EXAMS_DATABASE) ? window.EXAMS_DATABASE : {};
    const allDb = Object.assign({}, publicDb, secretDb);
    const raw = String(codeOrId || '').trim();
    if (raw && allDb[raw]) return raw;

    const up = raw.toUpperCase();
    const compact = up.replace(/[^A-Z0-9]/g, '');

    // Ưu tiên nhận diện chính xác Đề ôn tập KKTX 3.2 trước KTTX 3 để tránh nhầm lẫn
    if (compact.includes('12KTTX32') || compact.includes('KTTX32') || compact.includes('KKTX32')) {
      if (allDb['12_KTTX3_2_VEC']) return '12_KTTX3_2_VEC';
    }
    if (compact.includes('12KTTX3V') || compact.includes('KTTX3')) {
      if (allDb['12_KTTX3_VEC']) return '12_KTTX3_VEC';
    }
    if (compact.includes('12TX1TOA') || compact.includes('12TX1HAM') || compact.includes('TX1')) {
      if (allDb['12_TX1_TOAN']) return '12_TX1_TOAN';
      if (allDb['12_TX1_HAMSO']) return '12_TX1_HAMSO';
    }

    // Tự động khớp theo 8 ký tự chuẩn hóa đầu của key trong DB (dạng TS-<8CHAR>-XXXX)
    const tsMatch = up.match(/^TS-([A-Z0-9]{4,12})-/);
    const prefix = tsMatch ? tsMatch[1] : compact;
    const allKeys = Object.keys(allDb);
    // Sắp xếp độ dài giảm dần để key cụ thể hơn (như 12_KTTX3_2_VEC) thắng trước
    allKeys.sort((a, b) => b.length - a.length);
    for (let i = 0; i < allKeys.length; i++) {
      const k = allKeys[i];
      const normK = k.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
      if (prefix && (normK.startsWith(prefix) || prefix.startsWith(normK.substring(0, 8)))) {
        return k;
      }
    }

    if (titleHint) {
      const t = String(titleHint).toUpperCase();
      if ((t.includes('3.2') || t.includes('KKTX 3.2') || t.includes('KTTX 3.2')) && allDb['12_KTTX3_2_VEC']) return '12_KTTX3_2_VEC';
      if ((t.includes('TX1') || t.includes('LẦN 1') || t.includes('HÀM SỐ')) && allDb['12_TX1_TOAN']) return '12_TX1_TOAN';
      if ((t.includes('KTTX 3') || t.includes('LẦN 3') || t.includes('OXYZ')) && allDb['12_KTTX3_VEC']) return '12_KTTX3_VEC';
    }
    return null;
  }

  function buildExamFromAnti(examId, anti, tokenCfg) {
    const cfg = (anti && anti.config) ? anti.config : {};
    const keys = extractAntiAnswerKeys(anti || {});
    const p1Raw = Array.isArray(anti.part1) ? anti.part1 : [];
    const p2Raw = Array.isArray(anti.part2) ? anti.part2 : [];
    const p3Raw = Array.isArray(anti.part3) ? anti.part3 : [];

    const title = (tokenCfg && tokenCfg.t) || cfg.title || anti.title || 'Đề Kiểm Tra';
    const isTx = /TX|KKTX|THUONG\s*XUYEN|15P/i.test(title);
    const dur = (tokenCfg && tokenCfg.d) || cfg.timeLimitMinutes || (isTx ? 15 : 45);

    const p1Arr = tokenCfg && Array.isArray(tokenCfg.p1) ? tokenCfg.p1 : null;
    const p2Arr = tokenCfg && Array.isArray(tokenCfg.p2) ? tokenCfg.p2 : null;
    const p3Arr = tokenCfg && Array.isArray(tokenCfg.p3) ? tokenCfg.p3 : null;

    const p1Num = p1Arr ? p1Arr[1] : p1Raw.length;
    const p1Def = p1Arr ? p1Arr[2] : (p1Num === 6 ? 1.0 : (isTx ? 1.0 : 0.25));

    const p2Num = p2Arr ? p2Arr[1] : p2Raw.length;
    const p2Max = p2Arr ? p2Arr[2] : (p2Num === 2 ? 2.0 : (isTx ? 2.0 : 1.0));
    const p2Mode = (p2Arr && p2Arr[3] === 'e') ? 'equal' : 'moet';
    const p2Pcts = (p2Mode === 'equal') ? { 1: 25, 2: 50, 3: 75, 4: 100 } : { 1: 10, 2: 25, 3: 50, 4: 100 };

    const p3Num = p3Arr ? p3Arr[1] : p3Raw.length;
    const p3Def = p3Arr ? p3Arr[2] : 0.5;

    const p1Enabled = p1Arr ? !!p1Arr[0] : (p1Num > 0);
    const p2Enabled = p2Arr ? !!p2Arr[0] : (p2Num > 0);
    const p3Enabled = p3Arr ? !!p3Arr[0] : (p3Num > 0);

    const calcTotal = Math.round(((p1Enabled ? p1Num * p1Def : 0) + (p2Enabled ? p2Num * p2Max : 0) + (p3Enabled ? p3Num * p3Def : 0)) * 100) / 100;

    return {
      id: examId,
      title: title,
      durationMinutes: dur,
      totalPoints: calcTotal || cfg.maxScore || 10,
      status: 'active',
      sourceType: 'anti_quiz',
      antiQuizId: (tokenCfg && tokenCfg.aq) || anti.id || resolveAntiExamKey(examId, title),
      antiQuizData: anti,
      openTime: (tokenCfg && tokenCfg.ot) || '',
      closeTime: (tokenCfg && tokenCfg.ct) || '',
      password: (tokenCfg && tokenCfg.pw) || '',
      maxAttempts: (tokenCfg && tokenCfg.ma !== undefined) ? tokenCfg.ma : 0,
      enableTabTracking: (tokenCfg && tokenCfg.tt !== undefined) ? !!tokenCfg.tt : true,
      viewResultMode: (tokenCfg && tokenCfg.vr) || 'all',
      part1: {
        enabled: p1Enabled,
        numQuestions: p1Num,
        defaultPoint: p1Def,
        answerKey: keys.p1Key
      },
      part2: {
        enabled: p2Enabled,
        numQuestions: p2Num,
        maxPointPerQuestion: p2Max,
        percentMode: p2Mode,
        percentages: p2Pcts,
        answerKey: keys.p2Key
      },
      part3: {
        enabled: p3Enabled,
        numQuestions: p3Num,
        defaultPoint: p3Def,
        answerKey: keys.p3Key
      }
    };
  }

  function encodeExamShareToken(exam) {
    try {
      if (!exam) return '';
      const p1 = exam.part1 || {};
      const p2 = exam.part2 || {};
      const p3 = exam.part3 || {};
      const payload = {
        id: exam.id,
        aq: exam.antiQuizId || (exam.antiQuizData && exam.antiQuizData.id) || '',
        t: exam.title || '',
        d: exam.durationMinutes || 15,
        p1: [p1.enabled !== false ? 1 : 0, parseInt(p1.numQuestions) || 0, parseFloat(p1.defaultPoint) || 0],
        p2: [p2.enabled !== false ? 1 : 0, parseInt(p2.numQuestions) || 0, parseFloat(p2.maxPointPerQuestion) || 0, p2.percentMode === 'equal' ? 'e' : 'm'],
        p3: [p3.enabled !== false ? 1 : 0, parseInt(p3.numQuestions) || 0, parseFloat(p3.defaultPoint) || 0]
      };
      if (exam.fileUrl && !String(exam.fileUrl).startsWith('blob:')) {
        payload.fu = exam.fileUrl;
        payload.ft = exam.fileSourceType || 'url';
      }
      if (exam.viewResultMode && exam.viewResultMode !== 'all') payload.vr = exam.viewResultMode;
      if (exam.enableTabTracking === false) payload.tt = 0;
      if (exam.maxAttempts !== undefined && exam.maxAttempts !== 0) payload.ma = exam.maxAttempts;
      if (exam.openTime) payload.ot = exam.openTime;
      if (exam.closeTime) payload.ct = exam.closeTime;
      if (exam.password) payload.pw = exam.password;

      const jsonStr = JSON.stringify(payload);
      const bytes = new TextEncoder().encode(jsonStr);
      let bin = '';
      for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
      return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    } catch (e) {
      return '';
    }
  }

  function decodeExamShareToken(token) {
    try {
      if (!token) return null;
      let b64 = String(token).replace(/-/g, '+').replace(/_/g, '/');
      while (b64.length % 4) b64 += '=';
      const bin = atob(b64);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      const jsonStr = new TextDecoder().decode(bytes);
      return JSON.parse(jsonStr);
    } catch (e) {
      return null;
    }
  }

  function buildShareExamUrl(examOrId, baseHref) {
    const id = (typeof examOrId === 'string') ? examOrId : (examOrId && examOrId.id ? examOrId.id : '');
    const exam = (typeof examOrId === 'object' && examOrId) ? examOrId : null;
    let baseUrl;
    try {
      baseUrl = new URL('lam-bai.html', baseHref || (typeof window !== 'undefined' ? window.location.href : 'https://localhost/'));
    } catch (e) {
      baseUrl = new URL('https://localhost/lam-bai.html');
    }
    if (id) baseUrl.searchParams.set('code', id);
    if (exam) {
      const token = encodeExamShareToken(exam);
      if (token) baseUrl.searchParams.set('share', token);
    }
    return baseUrl.toString();
  }

  function resolveExamFromTokenOrAnti(id, shareToken) {
    const secretDb = (typeof window !== 'undefined' && window.ANTI_SECRET_EXAMS_DATABASE) ? window.ANTI_SECRET_EXAMS_DATABASE : {};
    const publicDb = (typeof window !== 'undefined' && window.EXAMS_DATABASE) ? window.EXAMS_DATABASE : {};
    const allDb = Object.assign({}, publicDb, secretDb);

    let tok = null;
    if (shareToken) tok = decodeExamShareToken(shareToken);
    if (!tok && typeof window !== 'undefined' && window.location && window.location.search) {
      try {
        const sp = new URLSearchParams(window.location.search).get('share');
        if (sp) tok = decodeExamShareToken(sp);
      } catch (e) {}
    }

    if (tok && (!id || !tok.id || tok.id === id)) {
      const targetId = id || tok.id;
      const antiKey = tok.aq && allDb[tok.aq] ? tok.aq : resolveAntiExamKey(tok.aq || targetId, tok.t);
      if (antiKey && allDb[antiKey]) {
        return buildExamFromAnti(targetId, allDb[antiKey], tok);
      }
      if (tok.fu) {
        const p1Arr = tok.p1 || [1, 6, 1.0];
        const p2Arr = tok.p2 || [1, 2, 2.0, 'm'];
        const p3Arr = tok.p3 || [0, 0, 0.5];
        return {
          id: targetId,
          title: tok.t || 'Đề Kiểm Tra',
          durationMinutes: tok.d || 15,
          fileSourceType: tok.ft || 'url',
          fileUrl: tok.fu,
          openTime: tok.ot || '',
          closeTime: tok.ct || '',
          password: tok.pw || '',
          maxAttempts: tok.ma !== undefined ? tok.ma : 0,
          enableTabTracking: tok.tt !== undefined ? !!tok.tt : true,
          viewResultMode: tok.vr || 'all',
          status: 'active',
          part1: { enabled: !!p1Arr[0], numQuestions: p1Arr[1], defaultPoint: p1Arr[2] },
          part2: { enabled: !!p2Arr[0], numQuestions: p2Arr[1], maxPointPerQuestion: p2Arr[2], percentMode: p2Arr[3] === 'e' ? 'equal' : 'moet' },
          part3: { enabled: !!p3Arr[0], numQuestions: p3Arr[1], defaultPoint: p3Arr[2] }
        };
      }
    }

    const mappedKey = resolveAntiExamKey(id, tok ? tok.t : '');
    if (mappedKey && allDb[mappedKey]) {
      return buildExamFromAnti(id || mappedKey, allDb[mappedKey], tok);
    }
    return null;
  }

  const ExamStore = {
    LOCAL_KEY_EXAMS: 'THS_SANG_TEACHER_EXAMS_V4',
    LOCAL_KEY_SUBS: 'THS_SANG_STUDENT_SUBS_V4',
    LOCAL_KEY_DELETED: 'THS_SANG_DELETED_EXAM_IDS_V4',

    getDeletedExamIds: function() {
      try {
        const raw = localStorage.getItem(this.LOCAL_KEY_DELETED) || localStorage.getItem(['AZO', 'TA_DELETED_EXAM_IDS_V4'].join(''));
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    },

    getLocalExams: function() {
      try {
        const deletedIds = this.getDeletedExamIds();
        let raw = localStorage.getItem(this.LOCAL_KEY_EXAMS);
        if (!raw) {
          raw = localStorage.getItem(['AZO', 'TA_TEACHER_EXAMS_20', '18_V3'].join(''));
        }
        if (!raw) {
          const initial = [DEFAULT_SAMPLE_EXAM].filter(e => !deletedIds.includes(e.id));
          localStorage.setItem(this.LOCAL_KEY_EXAMS, JSON.stringify(initial));
          return initial;
        }
        const parsed = JSON.parse(raw);
        // Lọc bỏ triệt để các đề đã xóa vĩnh viễn
        const filtered = (Array.isArray(parsed) ? parsed : []).filter(e => e && e.id && !deletedIds.includes(e.id));
        return filtered;
      } catch (e) {
        const deletedIds = this.getDeletedExamIds();
        return [DEFAULT_SAMPLE_EXAM].filter(e => !deletedIds.includes(e.id));
      }
    },

    saveLocalExams: function(exams) {
      try {
        const deletedIds = this.getDeletedExamIds();
        const validExams = (Array.isArray(exams) ? exams : []).filter(e => e && e.id && !deletedIds.includes(e.id));
        localStorage.setItem(this.LOCAL_KEY_EXAMS, JSON.stringify(validExams));
      } catch (e) {
        console.error('Lỗi lưu LocalStorage:', e);
      }
    },

    getLocalSubmissions: function(examId) {
      try {
        const raw = localStorage.getItem(this.LOCAL_KEY_SUBS) || localStorage.getItem(['AZO', 'TA_STUDENT_SUBS_20', '18_V3'].join(''));
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

    async fetchExams() {
      const deletedIds = this.getDeletedExamIds();
      const localExams = (this.getLocalExams() || []).filter(e => e && e.id && !deletedIds.includes(e.id));
      try {
        const resp = await fetch('/api/exams');
        if (resp.ok) {
          const resJson = await resp.json();
          if (resJson.success && Array.isArray(resJson.data)) {
            const serverExams = resJson.data.filter(e => e && e.id && !deletedIds.includes(e.id));
            // GỘP AN TOÀN: Không bao giờ ghi đè làm mất các đề đã xuất bản lưu trong localStorage khi server cold-start
            const mergedMap = {};
            const mergedList = [];

            // 1. Ưu tiên giữ nguyên toàn bộ đề đã xuất bản trên máy người dùng (localExams)
            localExams.forEach(function(le) {
              mergedMap[le.id] = le;
              mergedList.push(le);
            });

            // 2. Bổ sung đề từ server nếu chưa có hoặc cập nhật nếu server mới hơn
            serverExams.forEach(function(se) {
              const existing = mergedMap[se.id];
              if (!existing) {
                mergedMap[se.id] = se;
                mergedList.push(se);
              } else {
                const localTime = new Date(existing.updatedAt || existing.createdAt || 0).getTime();
                const serverTime = new Date(se.updatedAt || se.createdAt || 0).getTime();
                const bestSubsCount = Math.max(existing.submissionsCount || 0, se.submissionsCount || 0);
                if (serverTime > localTime) {
                  mergedMap[se.id] = Object.assign({}, existing, se, { submissionsCount: bestSubsCount });
                } else {
                  existing.submissionsCount = bestSubsCount;
                }
              }
            });

            const finalMerged = mergedList.map(item => mergedMap[item.id]);
            this.saveLocalExams(finalMerged);
            return finalMerged;
          }
        }
      } catch (e) {}
      return localExams;
    },

    async fetchExamDetail(id, role, shareToken) {
      const deletedIds = this.getDeletedExamIds();
      if (deletedIds.includes(id)) {
        return null;
      }
      const isStudent = (role === 'student');
      try {
        const url = `/api/exams?id=${encodeURIComponent(id)}${isStudent ? '&role=student' : ''}`;
        const resp = await fetch(url);
        if (resp.ok) {
          const resJson = await resp.json();
          if (resJson.success && resJson.data) {
            if (deletedIds.includes(resJson.data.id)) return null;
            return resJson.data;
          }
        }
      } catch (e) {}

      const exams = this.getLocalExams();
      let exam = exams.find(function(e) { return e.id === id; });

      // Nếu không có trong local (hoặc server cold-start), giải mã từ link chia sẻ & ánh xạ từ kho đề Anti
      if (!exam && !deletedIds.includes(id)) {
        exam = resolveExamFromTokenOrAnti(id, shareToken);
      }

      if (!exam || deletedIds.includes(exam.id)) return null;
      
      const copy = JSON.parse(JSON.stringify(exam));
      // Tự động chuẩn hóa thời gian 15 phút nếu là đề KTTX
      if (/TX|KKTX|THUONG\s*XUYEN|15P|15\s*PHUT/i.test((copy.title || '') + ' ' + (copy.fileName || ''))) {
        if (!copy.durationMinutes || copy.durationMinutes === 45) {
          copy.durationMinutes = 15;
        }
      }
      if (isStudent) {
        if (copy.answerKey) delete copy.answerKey;
        if (copy.part1) delete copy.part1.answerKey;
        if (copy.part2) delete copy.part2.answerKey;
        if (copy.part3) delete copy.part3.answerKey;
      }
      return copy;
    },

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
            const exams = this.getLocalExams();
            const idx = exams.findIndex(function(e) { return e.id === resJson.data.id; });
            if (idx >= 0) exams[idx] = resJson.data;
            else exams.unshift(resJson.data);
            this.saveLocalExams(exams);
            return resJson.data;
          }
        }
      } catch (e) {}

      if (!examData.id) {
        const randStr = Math.random().toString(36).substring(2, 7).toUpperCase();
        examData.id = `TS-${randStr}`;
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

    async deleteExam(id) {
      // 1. Thêm vĩnh viễn vào Blacklist để không bao giờ xuất hiện lại
      const deletedIds = this.getDeletedExamIds();
      if (!deletedIds.includes(id)) {
        deletedIds.push(id);
        try {
          localStorage.setItem(this.LOCAL_KEY_DELETED, JSON.stringify(deletedIds));
        } catch (e) {}
      }

      // 2. Gửi request DELETE lên API nếu có backend
      try {
        await fetch(`/api/exams?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
      } catch (e) {}

      // 3. Xóa khỏi danh sách local hiện tại
      let exams = this.getLocalExams();
      exams = exams.filter(function(e) { return e.id !== id; });
      this.saveLocalExams(exams);
      return true;
    },

    // THUẬT TOÁN TÍNH ĐIỂM CHUẨN XÁC LINH HOẠT THEO TỶ LỆ PHẦN TRĂM (%) VÀ SỐ DẠNG THỨC
    calculateScoreFlexible: function(exam, studentPayload) {
      let totalEarned = 0;
      let totalCorrect = 0;
      let totalWrong = 0;
      let totalUnanswered = 0;

      const studentAns = studentPayload.studentAnswers || {};
      const detailResult = {
        part1: {},
        part2: {},
        part3: {}
      };

      // 1. CHẤM PHẦN I: Nhiều lựa chọn (nếu phần này được bật)
      let p1Earned = 0;
      const isP1Active = exam.part1 && (exam.part1.enabled !== false) && (parseInt(exam.part1.numQuestions) > 0);
      if (isP1Active) {
        const p1Key = exam.part1.answerKey || {};
        const p1Points = exam.part1.points || {};
        const defP1 = parseFloat(exam.part1.defaultPoint) || 0.25;
        const nQ1 = parseInt(exam.part1.numQuestions) || Object.keys(p1Key).length || 0;

        for (let i = 1; i <= nQ1; i++) {
          const qStr = String(i);
          const sAns = (studentAns.part1 && studentAns.part1[qStr] || studentAns[qStr] || '').toUpperCase().trim();
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

      // 2. CHẤM PHẦN II: Đúng / Sai THEO TỶ LỆ PHẦN TRĂM (%) CHUẨN BỘ GD&ĐT
      let p2Earned = 0;
      const isP2Active = exam.part2 && (exam.part2.enabled !== false) && (parseInt(exam.part2.numQuestions) > 0);
      if (isP2Active) {
        const p2Key = exam.part2.answerKey || {};
        const nQ2 = parseInt(exam.part2.numQuestions) || Object.keys(p2Key).length || 0;
        const customPts = exam.part2.customPoints || {};

        // Bảng tỷ lệ phần trăm: [1 ý: %, 2 ý: %, 3 ý: %, 4 ý: %]
        // Mặc định chuẩn Bộ GD&ĐT: 10%, 25%, 50%, 100%
        const percentages = (exam.part2 && exam.part2.percentages) 
          ? exam.part2.percentages 
          : (exam.part2Percentages ? exam.part2Percentages : {
              1: 10,
              2: 25,
              3: 50,
              4: 100
            });

        for (let i = 1; i <= nQ2; i++) {
          const qStr = String(i);
          const cAnsObj = p2Key[qStr] || {};
          const sAnsObj = (studentAns.part2 && studentAns.part2[qStr]) || {};
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

          // TÍNH ĐIỂM THEO TỶ LỆ PHẦN TRĂM (%)
          let earnedPercent = 0;
          if (correctSubsCount > 0) {
            earnedPercent = parseFloat(percentages[correctSubsCount]) || (correctSubsCount * 25);
          }
          let qPoint = maxPt * (earnedPercent / 100.0);
          qPoint = Math.round(qPoint * 100) / 100;
          p2Earned += qPoint;

          detailResult.part2[qStr] = {
            correctSubsCount: correctSubsCount,
            earnedPercent: earnedPercent,
            subDetails: subDetails,
            point: qPoint,
            maxPoint: maxPt
          };
        }
      }

      // 3. CHẤM PHẦN III: Trả lời ngắn (nếu phần này được bật)
      let p3Earned = 0;
      const isP3Active = exam.part3 && (exam.part3.enabled !== false) && (parseInt(exam.part3.numQuestions) > 0);
      if (isP3Active) {
        const p3Key = exam.part3.answerKey || {};
        const p3Points = exam.part3.points || {};
        const defP3 = parseFloat(exam.part3.defaultPoint) || 0.5;
        const nQ3 = parseInt(exam.part3.numQuestions) || Object.keys(p3Key).length || 0;

        for (let i = 1; i <= nQ3; i++) {
          const qStr = String(i);
          let sRaw = (studentAns.part3 && studentAns.part3[qStr] || '').trim();
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

      // Tương thích ngược đề cũ 1 phần đơn thuần
      if (!isP1Active && !isP2Active && !isP3Active && exam.answerKey) {
        const oldKey = exam.answerKey || {};
        const oldPts = exam.questionPoints || {};
        const nQ = parseInt(exam.totalQuestions) || Object.keys(oldKey).length || 10;
        const defOld = (parseFloat(exam.totalPoints) || 10) / nQ;

        for (let i = 1; i <= nQ; i++) {
          const qStr = String(i);
          const sAns = (studentAns[qStr] || '').toUpperCase().trim();
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

          detailResult.part1[qStr] = {
            student: sAns || '(Chưa chọn)',
            correct: cAns,
            isCorrect: isCor,
            point: isCor ? pt : 0
          };
        }
        totalEarned = Math.round(totalEarned * 100) / 100;
        return {
          totalScore: totalEarned,
          part1Score: totalEarned,
          part2Score: 0,
          part3Score: 0,
          correctCount: totalCorrect,
          wrongCount: totalWrong,
          unansweredCount: totalUnanswered,
          details: detailResult
        };
      }

      totalEarned = Math.round((p1Earned + p2Earned + p3Earned) * 100) / 100;

      return {
        totalScore: totalEarned,
        part1Score: Math.round(p1Earned * 100) / 100,
        part2Score: Math.round(p2Earned * 100) / 100,
        part3Score: Math.round(p3Earned * 100) / 100,
        correctCount: totalCorrect,
        wrongCount: totalWrong,
        unansweredCount: totalUnanswered,
        details: detailResult
      };
    },

    async submitExam(payload) {
      try {
        const resp = await fetch('/api/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (resp.ok) {
          const resJson = await resp.json();
          if (resJson.success) return resJson;
        }
      } catch (e) {}

      const exams = this.getLocalExams();
      let exam = exams.find(function(e) { return e.id === payload.examId; });

      // Nếu không tìm thấy trong LocalExams, dựng lại từ shareToken hoặc ánh xạ trong kho đề bảo mật Anti
      if (!exam) {
        exam = resolveExamFromTokenOrAnti(payload.examId, payload.shareToken);
        if (exam) {
          exams.unshift(exam);
          this.saveLocalExams(exams);
        }
      }

      if (!exam) {
        return { success: false, message: 'Đề thi không tồn tại.' };
      }

      const scoreReport = this.calculateScoreFlexible(exam, payload);
      const subId = `SUB-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random()*1000)}`;

      const newSubmission = {
        id: subId,
        examId: payload.examId,
        studentName: payload.studentName.trim(),
        studentClass: payload.studentClass.trim(),
        submittedAt: new Date().toISOString(),
        durationSeconds: parseInt(payload.durationSeconds) || 0,
        score: scoreReport.totalScore,
        part1Score: scoreReport.part1Score,
        part2Score: scoreReport.part2Score,
        part3Score: scoreReport.part3Score,
        correctCount: scoreReport.correctCount,
        wrongCount: scoreReport.wrongCount,
        unansweredCount: scoreReport.unansweredCount,
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
        viewResultMode: exam.viewResultMode || 'all',
        score: scoreReport.totalScore,
        part1Score: scoreReport.part1Score,
        part2Score: scoreReport.part2Score,
        part3Score: scoreReport.part3Score,
        correctCount: scoreReport.correctCount,
        wrongCount: scoreReport.wrongCount,
        unansweredCount: scoreReport.unansweredCount,
        details: (exam.viewResultMode === 'all') ? scoreReport.details : null
      };

      if (exam.viewResultMode === 'none') {
        resultPayload.message = 'Bài thi của bạn đã được ghi nhận thành công! Giáo viên sẽ công bố kết quả sau.';
        delete resultPayload.score;
        delete resultPayload.details;
      }

      return { success: true, message: 'Nộp bài thi thành công!', data: resultPayload };
    },

    async fetchExamResults(examId) {
      let serverData = null;
      try {
        const resp = await fetch(`/api/results?examId=${encodeURIComponent(examId)}`);
        if (resp.ok) {
          const resJson = await resp.json();
          if (resJson.success && resJson.data) serverData = resJson.data;
        }
      } catch (e) {}

      const exams = this.getLocalExams();
      let exam = exams.find(function(e) { return e.id === examId; });
      if (!exam && serverData && serverData.exam) {
        exam = serverData.exam;
      }
      if (!exam) {
        exam = resolveExamFromTokenOrAnti(examId);
      }
      if (!exam) {
        const secretDb = (typeof window !== 'undefined' && window.ANTI_SECRET_EXAMS_DATABASE) ? window.ANTI_SECRET_EXAMS_DATABASE : {};
        const publicDb = (typeof window !== 'undefined' && window.EXAMS_DATABASE) ? window.EXAMS_DATABASE : {};
        const anti = secretDb[examId] || publicDb[examId];
        if (anti) {
          const cfg = anti.config || {};
          exam = {
            id: examId,
            title: cfg.title || anti.title || `Đề ${examId}`,
            status: 'active',
            durationMinutes: cfg.timeLimitMinutes || 15
          };
        } else {
          exam = { id: examId, title: `Đề thi [${examId}]`, status: 'active' };
        }
      }

      const localSubs = this.getLocalSubmissions(examId) || [];
      const serverSubs = (serverData && Array.isArray(serverData.submissions)) ? serverData.submissions : [];
      const mergedMap = {};
      const mergedSubs = [];
      serverSubs.concat(localSubs).forEach(function(s) {
        if (s && s.id && !mergedMap[s.id]) {
          mergedMap[s.id] = true;
          mergedSubs.push(s);
        } else if (s && !s.id) {
          mergedSubs.push(s);
        }
      });

      return {
        exam: exam,
        totalSubmissions: mergedSubs.length,
        submissions: mergedSubs
      };
    }
  };

  function convertToGoogleDrivePreview(url) {
    if (!url) return '';
    const trimmed = url.trim();
    const match1 = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match1 && match1[1]) return `https://drive.google.com/file/d/${match1[1]}/preview`;
    const match2 = trimmed.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
    if (match2 && match2[1]) return `https://drive.google.com/file/d/${match2[1]}/preview`;
    const match3 = trimmed.match(/drive\.google\.com\/uc\?id=([a-zA-Z0-9_-]+)/);
    if (match3 && match3[1]) return `https://drive.google.com/file/d/${match3[1]}/preview`;
    return trimmed;
  }

  /**
   * THUẬT TOÁN TỰ ĐỘNG QUÉT & ĐẾM SỐ CÂU CỦA TỪNG DẠNG THỨC KHI GIÁO VIÊN UP ĐỀ
   * Nhận diện:
   * - Phần I: Trắc nghiệm nhiều lựa chọn
   * - Phần II: Trắc nghiệm Đúng / Sai (các câu có ý a, b, c, d hoặc Đ/S)
   * - Phần III: Trắc nghiệm Trả lời ngắn
   * - Đề 1 dạng thức: Nếu không chia phần mà chỉ có Câu 1 -> Câu N (A, B, C, D)
   * Hỗ trợ nhận diện thông minh qua văn bản hoặc gợi ý theo tên file (Đề KTTX: 6 câu P1 + 2 câu P2).
   */
  function detectExamStructure(rawText, fileName = '') {
    const fUpper = (fileName || '').toUpperCase();
    const isTxName = /TX|THUONG\s*XUYEN|15P|15\s*PHUT/i.test(fUpper);

    if (!rawText || typeof rawText !== 'string' || rawText.trim().length === 0) {
      if (isTxName) {
        return {
          hasPart1: true, p1Count: 6,
          hasPart2: true, p2Count: 2,
          hasPart3: false, p3Count: 0,
          detectedFormats: 2,
          summary: "Nhận diện từ tên file Đề KTTX: Phần I (6 câu) + Phần II (2 câu Đ/S)"
        };
      }
      return {
        hasPart1: true, p1Count: 12,
        hasPart2: true, p2Count: 4,
        hasPart3: true, p3Count: 6,
        isCustom: false,
        summary: "Cấu hình chuẩn Bộ GD&ĐT (12 câu P1, 4 câu P2, 6 câu P3)"
      };
    }

    const text = rawText.toUpperCase();
    
    // Tách các phân đoạn Phần I, Phần II, Phần III
    const p1Idx = text.search(/PHẦN\s*(?:I|1|THỨ\s*NHẤT)|TRẮC\s*NGHIỆM\s*NHIỀU\s*LỰA\s*CHỌN/i);
    const p2Idx = text.search(/PHẦN\s*(?:II|2|THỨ\s*HAI)|TRẮC\s*NGHIỆM\s*ĐÚNG\s*[\/\-]?\s*SAI/i);
    const p3Idx = text.search(/PHẦN\s*(?:III|3|THỨ\s*BA)|TRẮC\s*NGHIỆM\s*TRẢ\s*LỜI\s*NGẮN|CÂU\s*HỎI\s*TRẢ\s*LỜI\s*NGẮN/i);

    let hasPart1 = false;
    let hasPart2 = false;
    let hasPart3 = false;

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;

    // Đếm số câu bằng regex tìm "từ câu 1 đến câu N", hoặc "Câu 1", "Câu 2"...
    function countQuestionsInBlock(block) {
      if (!block) return 0;
      
      // 1. Kiểm tra xem văn bản đề có ghi "từ câu 1 đến câu N" hoặc "gồm N câu"
      let rangeCount = 0;
      const rangeMatch = block.match(/(?:TỪ\s*CÂU\s*1\s*ĐẾN\s*CÂU|ĐẾN\s*CÂU|GỒM)\s*(\d+)/i) || 
                         block.match(/(?:TRẢ\s*LỜI\s*TỪ\s*CÂU\s*1\s*ĐẾN\s*(\d+))/i);
      if (rangeMatch) {
        rangeCount = parseInt(rangeMatch[1]);
      }

      // 2. Tìm các câu "Câu 1", "Câu 2"...
      const matches = block.match(/(?:CÂU|BÀI)\s*\d+[\s.:-]/gi) || [];
      const qNumMatches = [...block.matchAll(/(?:CÂU|BÀI)\s*(\d+)[\s.:-]/gi)];
      let maxNum = 0;
      if (qNumMatches.length > 0) {
        const nums = qNumMatches.map(m => parseInt(m[1])).filter(n => !isNaN(n));
        if (nums.length > 0) maxNum = Math.max(...nums);
      }
      return Math.max(rangeCount, maxNum, matches.length);
    }

    if (p1Idx !== -1 || p2Idx !== -1 || p3Idx !== -1) {
      // Có chia các Phần rõ ràng
      const indices = [
        { type: 'p1', pos: p1Idx },
        { type: 'p2', pos: p2Idx },
        { type: 'p3', pos: p3Idx }
      ].filter(item => item.pos !== -1).sort((a, b) => a.pos - b.pos);

      for (let i = 0; i < indices.length; i++) {
        const cur = indices[i];
        const nextPos = (i + 1 < indices.length) ? indices[i + 1].pos : text.length;
        const block = text.substring(cur.pos, nextPos);
        if (cur.type === 'p1') {
          hasPart1 = true;
          p1Count = countQuestionsInBlock(block);
        } else if (cur.type === 'p2') {
          hasPart2 = true;
          p2Count = countQuestionsInBlock(block);
        } else if (cur.type === 'p3') {
          hasPart3 = true;
          p3Count = countQuestionsInBlock(block);
        }
      }
    } else {
      // Đề không ghi rõ tiêu đề "Phần I", kiểm tra xem là đề 1 dạng thức truyền thống
      const totalQ = countQuestionsInBlock(text);
      if (totalQ > 0) {
        hasPart1 = true;
        p1Count = totalQ;
        hasPart2 = false;
        hasPart3 = false;
      }
    }

    // Nếu là đề thường xuyên (TX) mà đếm = 0
    if (isTxName) {
      if (hasPart1 && p1Count === 0) p1Count = 6;
      if (hasPart2 && p2Count === 0) p2Count = 2;
    } else {
      if (hasPart1 && p1Count === 0) p1Count = 12;
      if (hasPart2 && p2Count === 0) p2Count = 4;
      if (hasPart3 && p3Count === 0) p3Count = 6;
    }

    // Nếu không tìm thấy gì cả: kiểm tra tên file
    if (!hasPart1 && !hasPart2 && !hasPart3) {
      if (isTxName) {
        hasPart1 = true; p1Count = 6;
        hasPart2 = true; p2Count = 2;
        hasPart3 = false; p3Count = 0;
      } else {
        hasPart1 = true; p1Count = 12;
        hasPart2 = true; p2Count = 4;
        hasPart3 = true; p3Count = 6;
      }
    }

    const detectedFormats = (hasPart1 && p1Count > 0 ? 1 : 0) + (hasPart2 && p2Count > 0 ? 1 : 0) + (hasPart3 && p3Count > 0 ? 1 : 0);
    let summary = `Đã phát hiện ${detectedFormats} dạng thức: `;
    const parts = [];
    if (hasPart1 && p1Count > 0) parts.push(`Phần I (${p1Count} câu)`);
    if (hasPart2 && p2Count > 0) parts.push(`Phần II (${p2Count} câu Đ/S)`);
    if (hasPart3 && p3Count > 0) parts.push(`Phần III (${p3Count} câu TLN)`);
    summary += parts.join(' + ');

    return {
      hasPart1: hasPart1 && p1Count > 0,
      p1Count,
      hasPart2: hasPart2 && p2Count > 0,
      p2Count,
      hasPart3: hasPart3 && p3Count > 0,
      p3Count,
      detectedFormats,
      summary
    };
  }

  /**
   * TỰ ĐỘNG GỢI Ý CÁCH TÍNH ĐIỂM DỰA TRÊN SỐ CÂU VÀ DẠNG THỨC ĐÃ PHÁT HIỆN
   * Giáo viên có thể bấm áp dụng hoặc tự do điều chỉnh sửa theo ý mình.
   */
  function suggestScoring(structure, targetTotal = 10.0) {
    const has1 = structure.hasPart1 && structure.p1Count > 0;
    const has2 = structure.hasPart2 && structure.p2Count > 0;
    const has3 = structure.hasPart3 && structure.p3Count > 0;
    const nFormats = (has1 ? 1 : 0) + (has2 ? 1 : 0) + (has3 ? 1 : 0);

    const suggestion = {
      targetTotal: targetTotal,
      part1: { enabled: has1, numQuestions: structure.p1Count || 0, totalPoints: 0, pointPerQuestion: 0 },
      part2: { enabled: has2, numQuestions: structure.p2Count || 0, totalPoints: 0, maxPointPerQuestion: 0, percentMode: "moet", percentages: { 1: 10, 2: 25, 3: 50, 4: 100 } },
      part3: { enabled: has3, numQuestions: structure.p3Count || 0, totalPoints: 0, pointPerQuestion: 0 },
      description: ""
    };

    if (has1 && has2 && !has3) {
      // 2 Dạng thức P1 + P2 (Đặc biệt phổ biến cho kiểm tra thường xuyên TX)
      if (suggestion.part1.numQuestions === 6 && suggestion.part2.numQuestions === 2) {
        // Chuẩn đề KTTX của Thầy Sáng: 6 câu Phần I = 6.0đ (1.0đ/câu) + 2 câu Phần II = 4.0đ (2.0đ/câu)
        suggestion.part1.totalPoints = 6.0;
        suggestion.part1.pointPerQuestion = 1.0;
        suggestion.part2.totalPoints = 4.0;
        suggestion.part2.maxPointPerQuestion = 2.0;
        suggestion.description = `Chuẩn Đề KTTX Thầy Sáng: Phần I (6 câu x 1.0đ = 6.0đ) • Phần II (2 câu x 2.0đ = 4.0đ theo % Chuẩn Bộ).`;
      } else if (suggestion.part1.numQuestions === 8 && suggestion.part2.numQuestions === 2) {
        suggestion.part1.totalPoints = 4.0;
        suggestion.part1.pointPerQuestion = 0.5;
        suggestion.part2.totalPoints = 6.0;
        suggestion.part2.maxPointPerQuestion = 3.0;
        suggestion.description = `Gợi ý Đề KTTX: Phần I (8 câu x 0.5đ = 4.0đ) • Phần II (2 câu x 3.0đ = 6.0đ theo % Lũy tiến).`;
      } else {
        suggestion.part1.totalPoints = 4.0;
        suggestion.part1.pointPerQuestion = Math.round((4.0 / suggestion.part1.numQuestions) * 100) / 100;
        suggestion.part2.totalPoints = 6.0;
        suggestion.part2.maxPointPerQuestion = Math.round((6.0 / suggestion.part2.numQuestions) * 100) / 100;
        suggestion.description = `Gợi ý 2 dạng thức: Phần I (${suggestion.part1.totalPoints}đ) • Phần II (${suggestion.part2.totalPoints}đ theo % Lũy tiến).`;
      }
    } else if (nFormats === 3) {
      suggestion.part1.totalPoints = 3.0;
      suggestion.part1.pointPerQuestion = Math.round((3.0 / suggestion.part1.numQuestions) * 100) / 100;
      suggestion.part2.totalPoints = 4.0;
      suggestion.part2.maxPointPerQuestion = Math.round((4.0 / suggestion.part2.numQuestions) * 100) / 100;
      suggestion.part3.totalPoints = 3.0;
      suggestion.part3.pointPerQuestion = Math.round((3.0 / suggestion.part3.numQuestions) * 100) / 100;
      suggestion.description = `Gợi ý chuẩn 10đ Bộ GD&ĐT: Phần I (3.0đ - ${suggestion.part1.pointPerQuestion}đ/câu) • Phần II (4.0đ - ${suggestion.part2.maxPointPerQuestion}đ/câu theo % Lũy tiến) • Phần III (3.0đ - ${suggestion.part3.pointPerQuestion}đ/câu).`;
    } else if (nFormats === 2) {
      if (has1 && has3) {
        suggestion.part1.totalPoints = 5.0;
        suggestion.part1.pointPerQuestion = Math.round((5.0 / suggestion.part1.numQuestions) * 100) / 100;
        suggestion.part3.totalPoints = 5.0;
        suggestion.part3.pointPerQuestion = Math.round((5.0 / suggestion.part3.numQuestions) * 100) / 100;
        suggestion.description = `Gợi ý 2 dạng thức (P1 + P3): Phần I (5.0đ) • Phần III (5.0đ).`;
      } else if (has2 && has3) {
        suggestion.part2.totalPoints = 6.0;
        suggestion.part2.maxPointPerQuestion = Math.round((6.0 / suggestion.part2.numQuestions) * 100) / 100;
        suggestion.part3.totalPoints = 4.0;
        suggestion.part3.pointPerQuestion = Math.round((4.0 / suggestion.part3.numQuestions) * 100) / 100;
        suggestion.description = `Gợi ý 2 dạng thức (P2 + P3): Phần II (6.0đ) • Phần III (4.0đ).`;
      }
    } else if (nFormats === 1) {
      if (has1) {
        suggestion.part1.totalPoints = targetTotal;
        suggestion.part1.pointPerQuestion = Math.round((targetTotal / suggestion.part1.numQuestions) * 100) / 100;
        suggestion.description = `Gợi ý 1 dạng thức: 100% Trắc nghiệm nhiều lựa chọn (${suggestion.part1.numQuestions} câu = ${targetTotal}đ, mỗi câu ${suggestion.part1.pointPerQuestion}đ).`;
      } else if (has2) {
        suggestion.part2.totalPoints = targetTotal;
        suggestion.part2.maxPointPerQuestion = Math.round((targetTotal / suggestion.part2.numQuestions) * 100) / 100;
        suggestion.description = `Gợi ý 1 dạng thức: 100% Đúng / Sai (${suggestion.part2.numQuestions} câu = ${targetTotal}đ, mỗi câu ${suggestion.part2.maxPointPerQuestion}đ theo %).`;
      } else if (has3) {
        suggestion.part3.totalPoints = targetTotal;
        suggestion.part3.pointPerQuestion = Math.round((targetTotal / suggestion.part3.numQuestions) * 100) / 100;
        suggestion.description = `Gợi ý 1 dạng thức: 100% Trả lời ngắn (${suggestion.part3.numQuestions} câu = ${targetTotal}đ, mỗi câu ${suggestion.part3.pointPerQuestion}đ).`;
      }
    }

    return suggestion;
  }

  function parseQuickAnswersPart1(rawText, totalQ) {
    if (!rawText) return {};
    const text = rawText.toUpperCase().trim();
    const result = {};
    const pairRegex = /(?:CÂU\s*)?(\d+)[\s.:-]*([ABCD])/gi;
    let match;
    let foundPairs = false;

    while ((match = pairRegex.exec(text)) !== null) {
      foundPairs = true;
      const qNum = parseInt(match[1]);
      const ans = match[2].toUpperCase();
      if (qNum >= 1 && (!totalQ || qNum <= totalQ)) {
        result[String(qNum)] = ans;
      }
    }

    if (!foundPairs) {
      const lettersOnly = text.replace(/[^ABCD]/gi, '');
      const limit = totalQ || lettersOnly.length;
      for (let i = 0; i < Math.min(lettersOnly.length, limit); i++) {
        result[String(i + 1)] = lettersOnly[i];
      }
    }
    return result;
  }

  function parseQuickAnswersPart2(rawText, totalQ) {
    if (!rawText) return {};
    const text = rawText.toUpperCase().trim();
    const result = {};
    const normalized = text.replace(/Đ/g, 'D').replace(/TRUE/g, 'D').replace(/FALSE/g, 'S');

    const lines = normalized.split(/\n|;|(?=CÂU\s*\d+)|(?=\d+[:.-])/gi);
    lines.forEach(function(line) {
      const qMatch = line.match(/(?:CÂU\s*)?(\d+)[:.-]\s*(.+)/i);
      if (qMatch) {
        const qNum = parseInt(qMatch[1]);
        const letters = qMatch[2].replace(/[^DS]/g, '');
        if (letters.length >= 4) {
          result[String(qNum)] = {
            a: letters[0],
            b: letters[1],
            c: letters[2],
            d: letters[3]
          };
        }
      }
    });

    if (Object.keys(result).length === 0) {
      const allLetters = normalized.replace(/[^DS]/g, '');
      const limit = totalQ || Math.floor(allLetters.length / 4);
      for (let i = 0; i < limit; i++) {
        const slice = allLetters.substr(i * 4, 4);
        if (slice.length === 4) {
          result[String(i + 1)] = {
            a: slice[0],
            b: slice[1],
            c: slice[2],
            d: slice[3]
          };
        }
      }
    }
    return result;
  }

  function exportSubmissionsToCSV(exam, submissions) {
    let csv = '\uFEFF';
    csv += `DANH SÁCH KẾT QUẢ THI: ${exam.title || ''}\n`;
    csv += `Mã đề thi: ${exam.id || ''} - Tổng số lượt nộp: ${submissions.length}\n`;
    csv += `Thời điểm xuất: ${new Date().toLocaleString('vi-VN')}\n\n`;
    csv += 'STT,Họ và tên học sinh,Lớp,Tổng điểm,Điểm Phần I,Điểm Phần II,Điểm Phần III,Số câu đúng,Số câu sai,Thời gian làm,Số lần chuyển tab,Thời điểm nộp bài\n';

    submissions.forEach(function(sub, idx) {
      const minutes = Math.floor(sub.durationSeconds / 60);
      const seconds = sub.durationSeconds % 60;
      const durationStr = `${minutes}p ${seconds}s`;
      const submitTime = new Date(sub.submittedAt).toLocaleString('vi-VN');

      csv += `"${idx + 1}",`;
      csv += `"${(sub.studentName || '').replace(/"/g, '""')}",`;
      csv += `"${(sub.studentClass || '').replace(/"/g, '""')}",`;
      csv += `"${sub.score}",`;
      csv += `"${sub.part1Score !== undefined ? sub.part1Score : '--'}",`;
      csv += `"${sub.part2Score !== undefined ? sub.part2Score : '--'}",`;
      csv += `"${sub.part3Score !== undefined ? sub.part3Score : '--'}",`;
      csv += `"${sub.correctCount}",`;
      csv += `"${sub.wrongCount}",`;
      csv += `"${durationStr}",`;
      csv += `"${sub.tabViolations}",`;
      csv += `"${submitTime}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Bang_Diem_${exam.id || 'Thi_Truc_Tuyen'}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  window.ExamEngine = {
    store: ExamStore,
    convertToGoogleDrivePreview: convertToGoogleDrivePreview,
    parseQuickAnswersPart1: parseQuickAnswersPart1,
    parseQuickAnswersPart2: parseQuickAnswersPart2,
    detectExamStructure: detectExamStructure,
    suggestScoring: suggestScoring,
    exportSubmissionsToCSV: exportSubmissionsToCSV,
    buildShareExamUrl: buildShareExamUrl,
    resolveAntiExamKey: resolveAntiExamKey,
    decodeExamShareToken: decodeExamShareToken
  };

})(window);
