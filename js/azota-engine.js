/**
 * js/azota-engine.js
 * Hệ Thống Giao Bài & Quản Lý Đề Thi Trực Tuyến Chuẩn 100% Quy Trình Azota
 * Tích hợp đầy đủ 3 dạng thức trắc nghiệm theo Chương trình GDPT 2018:
 * - Phần I: Trắc nghiệm nhiều lựa chọn (A, B, C, D)
 * - Phần II: Trắc nghiệm Đúng / Sai (4 ý a, b, c, d kèm barem điểm chuẩn Bộ GD&ĐT hoặc tùy chỉnh từng ý)
 * - Phần III: Trắc nghiệm Trả lời ngắn (Điền kết quả số / phân số)
 * 
 * Tác giả: ThS. Lương Thanh Sáng - Tổ trưởng Tổ Toán, THPT Nguyễn Văn Thoại, An Giang.
 */

(function(window) {
  'use strict';

  // Hạt giống đề thi mẫu chuẩn 2018 của ThS. Lương Thanh Sáng (3 Phần: 12 câu P1, 4 câu P2, 6 câu P3 = 22 câu = 10 điểm)
  const DEFAULT_SAMPLE_EXAM = {
    id: "AZ-TOAN12-2018",
    title: "Đề Khảo Sát Toán 12 - Chuẩn Cấu Trúc 3 Phần Mới Bộ GD&ĐT (Năm Học 2026 - 2027)",
    description: "Biên soạn: ThS. Lương Thanh Sáng - Đầy đủ 3 phần: Nhiều lựa chọn, Đúng/Sai (chuẩn barem lũy tiến), Trả lời ngắn",
    createdAt: "2026-11-24T08:00:00.000Z",
    totalPoints: 10,
    durationMinutes: 45,
    openTime: "",
    closeTime: "",
    password: "",
    maxAttempts: 1,
    viewResultMode: "all", // "none", "score_only", "all"
    enableTabTracking: true,
    fileSourceType: "url",
    fileUrl: "https://drive.google.com/file/d/1eESzLLWKia1FQ2t1e9VsyImzvwYeTu1P/preview",
    fileName: "De_Kiem_Tra_Chuan_2018_Thay_Sang.pdf",
    status: "active",
    submissionsCount: 2,
    formatVersion: "2018", // Hỗ trợ 3 dạng thức

    // PHẦN I: Trắc nghiệm nhiều lựa chọn (12 câu - 3.0 điểm)
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

    // PHẦN II: Trắc nghiệm Đúng / Sai (4 câu - 4.0 điểm, mỗi câu tối đa 1.0đ)
    part2: {
      enabled: true,
      numQuestions: 4,
      scoringMode: "moet_progressive", // "moet_progressive" (0.1, 0.25, 0.5, 1.0) hoặc "equal_sub" (0.25đ/ý) hoặc "custom"
      maxPointPerQuestion: 1.0,
      customPoints: { "1": 1.0, "2": 1.0, "3": 1.0, "4": 1.0 },
      subItemPoints: {
        "1": { "a": 0.1, "b": 0.15, "c": 0.25, "d": 0.5 },
        "2": { "a": 0.1, "b": 0.15, "c": 0.25, "d": 0.5 },
        "3": { "a": 0.1, "b": 0.15, "c": 0.25, "d": 0.5 },
        "4": { "a": 0.1, "b": 0.15, "c": 0.25, "d": 0.5 }
      },
      answerKey: {
        "1": { "a": "D", "b": "S", "c": "D", "d": "S" },
        "2": { "a": "S", "b": "D", "c": "D", "d": "S" },
        "3": { "a": "D", "b": "D", "c": "S", "d": "S" },
        "4": { "a": "S", "b": "S", "c": "D", "d": "D" }
      }
    },

    // PHẦN III: Trắc nghiệm Trả lời ngắn (6 câu - 3.0 điểm, mỗi câu 0.5đ)
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
      examId: "AZ-TOAN12-2018",
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
      examId: "AZ-TOAN12-2018",
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

  // Storage Driver
  const AzotaStore = {
    LOCAL_KEY_EXAMS: 'AZOTA_TEACHER_EXAMS_2018_V2',
    LOCAL_KEY_SUBS: 'AZOTA_STUDENT_SUBS_2018_V2',

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

    async fetchExams() {
      try {
        const resp = await fetch('/api/exams');
        if (resp.ok) {
          const resJson = await resp.json();
          if (resJson.success && Array.isArray(resJson.data)) {
            this.saveLocalExams(resJson.data);
            return resJson.data;
          }
        }
      } catch (e) {}
      return this.getLocalExams();
    },

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
        // Xóa bảng đáp án của cả 3 phần trước khi giao cho học sinh
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

    async deleteExam(id) {
      try {
        await fetch(`/api/exams?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
      } catch (e) {}

      let exams = this.getLocalExams();
      exams = exams.filter(function(e) { return e.id !== id; });
      this.saveLocalExams(exams);
      return true;
    },

    // Chấm điểm chuẩn xác 3 Phần 2018 (Hỗ trợ cả Serverless và Local Fallback)
    calculateScore2018: function(exam, studentPayload) {
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

      // 1. CHẤM PHẦN I: Trắc nghiệm nhiều lựa chọn
      let p1Earned = 0;
      if (exam.part1 && exam.part1.enabled) {
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

      // 2. CHẤM PHẦN II: Đúng / Sai (Quy tắc lũy tiến chuẩn Bộ GD&ĐT 0.1 - 0.25 - 0.5 - 1.0)
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

          // Áp dụng thang điểm cho câu hỏi Đúng/Sai
          let qPoint = 0;
          if (scoringMode === 'moet_progressive') {
            // Chuẩn Bộ GD&ĐT: đúng 1 ý = 0.1, 2 ý = 0.25, 3 ý = 0.5, 4 ý = 1.0 (nhân với maxPt)
            let multiplier = 0;
            if (correctSubsCount === 1) multiplier = 0.10;
            else if (correctSubsCount === 2) multiplier = 0.25;
            else if (correctSubsCount === 3) multiplier = 0.50;
            else if (correctSubsCount === 4) multiplier = 1.00;
            qPoint = maxPt * multiplier;
          } else if (scoringMode === 'equal_sub') {
            // Chia đều mỗi ý = maxPt / 4
            qPoint = correctSubsCount * (maxPt / 4.0);
          } else if (scoringMode === 'custom') {
            // Từng ý có điểm lẻ riêng do giáo viên cài đặt
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

      // 3. CHẤM PHẦN III: Trả lời ngắn
      let p3Earned = 0;
      if (exam.part3 && exam.part3.enabled) {
        const p3Key = exam.part3.answerKey || {};
        const p3Points = exam.part3.points || {};
        const defP3 = parseFloat(exam.part3.defaultPoint) || 0.5;
        const nQ3 = parseInt(exam.part3.numQuestions) || Object.keys(p3Key).length || 0;

        for (let i = 1; i <= nQ3; i++) {
          const qStr = String(i);
          let sRaw = (studentAns.part3 && studentAns.part3[qStr] || '').trim();
          let cRaw = (p3Key[qStr] || '').trim();
          const pt = parseFloat(p3Points[qStr]) || defP3;

          // Chuẩn hóa dấu phẩy thành dấu chấm: ví dụ "1,5" -> "1.5"
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
            // Thử so sánh số thực nếu cả 2 là số
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

      // Trường hợp đề thi cũ (không chia parts): tương thích ngược
      if (!exam.part1 && !exam.part2 && !exam.part3 && exam.answerKey) {
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

      // Fallback tính điểm an toàn local
      const exams = this.getLocalExams();
      const exam = exams.find(function(e) { return e.id === payload.examId; });
      if (!exam) {
        return { success: false, message: 'Đề thi không tồn tại.' };
      }

      const scoreReport = this.calculateScore2018(exam, payload);
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
      try {
        const resp = await fetch(`/api/results?examId=${encodeURIComponent(examId)}`);
        if (resp.ok) {
          const resJson = await resp.json();
          if (resJson.success && resJson.data) return resJson.data;
        }
      } catch (e) {}

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

  // Tiện ích chuyển link Google Drive
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

  // Parse chuỗi nhập nhanh đáp án Phần I
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

  // Parse chuỗi nhập nhanh Phần II (Đúng/Sai): ví dụ "1: Đ S Đ S, 2: S Đ S Đ" hoặc "1: aD bS cD dS"
  function parseQuickAnswersPart2(rawText, totalQ) {
    if (!rawText) return {};
    const text = rawText.toUpperCase().trim();
    const result = {};

    // Chuẩn hóa: Đ -> D, S -> S, T -> D, F -> S
    const normalized = text.replace(/Đ/g, 'D').replace(/TRUE/g, 'D').replace(/FALSE/g, 'S');

    // Thử tìm theo cấu trúc từng câu "1: D S D S"
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

    // Nếu không có số câu, chia nhóm 4 ký tự liên tiếp: "DSDSSDSD"
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

  // Xuất file CSV danh sách điểm
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
    a.download = `Bang_Diem_${exam.id || 'Azota'}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  window.AzotaEngine = {
    store: AzotaStore,
    convertToGoogleDrivePreview: convertToGoogleDrivePreview,
    parseQuickAnswersPart1: parseQuickAnswersPart1,
    parseQuickAnswersPart2: parseQuickAnswersPart2,
    exportSubmissionsToCSV: exportSubmissionsToCSV
  };

})(window);
