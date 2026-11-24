/**
 * js/azota-engine.js
 * Hệ Thống Giao Bài & Quản Lý Đề Thi Trực Tuyến Chuẩn 100% Quy Trình Azota
 * 
 * Hỗ trợ ĐA DẠNG THỨC LINH HOẠT:
 * - Đề 1 dạng thức (chỉ Nhiều lựa chọn, hoặc chỉ Đúng/Sai, hoặc chỉ Trả lời ngắn)
 * - Đề 2 dạng thức (P1 + P2, hoặc P1 + P3, hoặc P2 + P3)
 * - Đề 3 dạng thức đầy đủ chuẩn GDPT 2018 (P1 + P2 + P3)
 * 
 * CHIA ĐIỂM ĐÚNG/SAI THEO TỶ LỆ PHẦN TRĂM (%) CHUẨN AZOTA:
 * - Lũy tiến chuẩn Bộ GD&ĐT: [1 ý = 10% | 2 ý = 25% | 3 ý = 50% | 4 ý = 100%]
 * - Chia đều từng ý: [1 ý = 25% | 2 ý = 50% | 3 ý = 75% | 4 ý = 100%]
 * - Tùy chỉnh phần trăm tự do: Giáo viên tự nhập % cho từng mức 1, 2, 3, 4 ý đúng.
 * 
 * Tác giả: ThS. Lương Thanh Sáng - Tổ trưởng Tổ Toán, THPT Nguyễn Văn Thoại, An Giang.
 */

(function(window) {
  'use strict';

  // Hạt giống đề mẫu linh hoạt chuẩn 2018
  const DEFAULT_SAMPLE_EXAM = {
    id: "AZ-TOAN12-2018",
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
    fileName: "De_Kiem_Tra_Chuan_2018_Thay_Sang.pdf",
    status: "active",
    submissionsCount: 2,
    formatVersion: "2018_flexible",

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
    LOCAL_KEY_EXAMS: 'AZOTA_TEACHER_EXAMS_2018_V3',
    LOCAL_KEY_SUBS: 'AZOTA_STUDENT_SUBS_2018_V3',

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

      const exams = this.getLocalExams();
      const exam = exams.find(function(e) { return e.id === id; });
      if (!exam) return null;
      
      const copy = JSON.parse(JSON.stringify(exam));
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

      // 2. CHẤM PHẦN II: Đúng / Sai THEO TỶ LỆ PHẦN TRĂM (%) CHUẨN AZOTA
      let p2Earned = 0;
      const isP2Active = exam.part2 && (exam.part2.enabled !== false) && (parseInt(exam.part2.numQuestions) > 0);
      if (isP2Active) {
        const p2Key = exam.part2.answerKey || {};
        const nQ2 = parseInt(exam.part2.numQuestions) || Object.keys(p2Key).length || 0;
        const customPts = exam.part2.customPoints || {};

        // Bảng tỷ lệ phần trăm: [1 ý: %, 2 ý: %, 3 ý: %, 4 ý: %]
        // Mặc định chuẩn Bộ GD&ĐT: 10%, 25%, 50%, 100%
        const percentages = (exam.part2.percentages) ? exam.part2.percentages : {
          1: 10,
          2: 25,
          3: 50,
          4: 100
        };

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
      const exam = exams.find(function(e) { return e.id === payload.examId; });
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
   */
  function detectExamStructure(rawText) {
    if (!rawText || typeof rawText !== 'string') {
      return {
        hasPart1: true, p1Count: 12,
        hasPart2: true, p2Count: 4,
        hasPart3: true, p3Count: 6,
        isCustom: false,
        summary: "Mặc định chuẩn Bộ GD&ĐT 2018 (12 câu P1, 4 câu P2, 6 câu P3)"
      };
    }

    const text = rawText.toUpperCase();
    
    // Tách các phân đoạn Phần I, Phần II, Phần III
    let p1Text = '';
    let p2Text = '';
    let p3Text = '';

    const p1Idx = text.search(/PHẦN\s*(?:I|1|THỨ\s*NHẤT)|TRẮC\s*NGHIỆM\s*NHIỀU\s*LỰA\s*CHỌN/i);
    const p2Idx = text.search(/PHẦN\s*(?:II|2|THỨ\s*HAI)|TRẮC\s*NGHIỆM\s*ĐÚNG\s*[\/\-]?\s*SAI/i);
    const p3Idx = text.search(/PHẦN\s*(?:III|3|THỨ\s*BA)|TRẮC\s*NGHIỆM\s*TRẢ\s*LỜI\s*NGẮN|CÂU\s*HỎI\s*TRẢ\s*LỜI\s*NGẮN/i);

    let hasPart1 = false;
    let hasPart2 = false;
    let hasPart3 = false;

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;

    // Đếm số câu bằng regex tìm "Câu 1", "Câu 2"...
    function countQuestionsInBlock(block) {
      if (!block) return 0;
      const matches = block.match(/(?:CÂU|BÀI)\s*\d+[\s.:-]/gi) || [];
      // Đếm các số câu lớn nhất tìm thấy
      const qNumMatches = [...block.matchAll(/(?:CÂU|BÀI)\s*(\d+)[\s.:-]/gi)];
      if (qNumMatches.length > 0) {
        const nums = qNumMatches.map(m => parseInt(m[1])).filter(n => !isNaN(n));
        if (nums.length > 0) return Math.max(...nums, matches.length);
      }
      return matches.length;
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

    // Chuẩn hóa dự phòng nếu đếm = 0
    if (hasPart1 && p1Count === 0) p1Count = 12;
    if (hasPart2 && p2Count === 0) p2Count = 4;
    if (hasPart3 && p3Count === 0) p3Count = 6;

    // Nếu không tìm thấy gì cả thì mặc định 3 dạng thức chuẩn
    if (!hasPart1 && !hasPart2 && !hasPart3) {
      hasPart1 = true; p1Count = 12;
      hasPart2 = true; p2Count = 4;
      hasPart3 = true; p3Count = 6;
    }

    const detectedFormats = (hasPart1 ? 1 : 0) + (hasPart2 ? 1 : 0) + (hasPart3 ? 1 : 0);
    let summary = `Đã phát hiện ${detectedFormats} dạng thức: `;
    const parts = [];
    if (hasPart1) parts.push(`Phần I (${p1Count} câu)`);
    if (hasPart2) parts.push(`Phần II (${p2Count} câu Đ/S)`);
    if (hasPart3) parts.push(`Phần III (${p3Count} câu TLN)`);
    summary += parts.join(' + ');

    return {
      hasPart1,
      p1Count,
      hasPart2,
      p2Count,
      hasPart3,
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

    if (nFormats === 3) {
      // Chuẩn Bộ GD&ĐT 2018: Phần I = 3.0đ, Phần II = 4.0đ, Phần III = 3.0đ
      suggestion.part1.totalPoints = 3.0;
      suggestion.part1.pointPerQuestion = Math.round((3.0 / suggestion.part1.numQuestions) * 100) / 100;

      suggestion.part2.totalPoints = 4.0;
      suggestion.part2.maxPointPerQuestion = Math.round((4.0 / suggestion.part2.numQuestions) * 100) / 100;
      suggestion.part2.percentMode = "moet";

      suggestion.part3.totalPoints = 3.0;
      suggestion.part3.pointPerQuestion = Math.round((3.0 / suggestion.part3.numQuestions) * 100) / 100;

      suggestion.description = `Gợi ý chuẩn 10đ Bộ GD&ĐT: Phần I (3.0đ - ${suggestion.part1.pointPerQuestion}đ/câu) • Phần II (4.0đ - ${suggestion.part2.maxPointPerQuestion}đ/câu theo % Lũy tiến) • Phần III (3.0đ - ${suggestion.part3.pointPerQuestion}đ/câu).`;
    } else if (nFormats === 2) {
      // Có 2 dạng thức: chia 5.0đ - 5.0đ
      if (has1 && has2) {
        suggestion.part1.totalPoints = 4.0;
        suggestion.part1.pointPerQuestion = Math.round((4.0 / suggestion.part1.numQuestions) * 100) / 100;
        suggestion.part2.totalPoints = 6.0;
        suggestion.part2.maxPointPerQuestion = Math.round((6.0 / suggestion.part2.numQuestions) * 100) / 100;
        suggestion.description = `Gợi ý 2 dạng thức (P1 + P2): Phần I (4.0đ) • Phần II (6.0đ - Lũy tiến %).`;
      } else if (has1 && has3) {
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
      // Chỉ có 1 dạng thức: 100% điểm toàn đề = 10.0đ
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
    detectExamStructure: detectExamStructure,
    suggestScoring: suggestScoring,
    exportSubmissionsToCSV: exportSubmissionsToCSV
  };

})(window);
