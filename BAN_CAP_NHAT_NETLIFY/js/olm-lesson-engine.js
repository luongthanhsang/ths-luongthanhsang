/**
 * INTERACTIVE DIGITAL LESSON ENGINE (HỆ THỐNG BÀI HỌC SỐ TƯƠNG TÁC THÔNG MINH)
 * Biên soạn & Phát triển: ThS. Lương Thanh Sáng (THPT Nguyễn Văn Thoại, Thoại Sơn, An Giang)
 * =========================================================================
 * Tính năng tương tác chuẩn sư phạm:
 * 1. Thanh Tiến Độ Học Tập (% Progress Bar) & Gamification (XP, Sao vàng, Pháo hoa Confetti, Web Audio Sound)
 * 2. Hệ Thống Trình Phát Audio Tương Tác (Interactive Audio Player với các mốc POI - Point of Interest)
 * 3. Mô Hình Hình Học Động Trực Quan (2D Vector Canvas & 3D Space Canvas, Full Screen & Landscape Mode)
 * 4. Luyện Tập Thích Ứng (Adaptive Practice 4 mức độ: NB - TH - VD - VDC & Đổi Số Tự Động Dynamic Parameters)
 * =========================================================================
 * TUYỆT ĐỐI KHÔNG HIỂN THỊ CHỮ OLM TRÊN GIAO DIỆN NGƯỜI DÙNG ĐỂ BẢO VỆ BẢN QUYỀN
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. STATE MANAGEMENT & GAMIFICATION
  // =========================================================================
  const LESSON_ENGINE_STATE = {
    lessonId: '10-c4-b8',
    progress: {
      welcomeListened: false,
      poiCompleted: {}, // { poiId: boolean }
      geometryInteracted: false,
      adaptiveCompleted: { 1: false, 2: false, 3: false, 4: false }
    },
    xp: parseInt(localStorage.getItem('ths_sang_math_xp') || '0', 10),
    stars: parseInt(localStorage.getItem('ths_sang_stars') || '0', 10),
    isCompleted100: false,
    audioInstance: null,
    activePOI: null,
    // 2D Vector Canvas State (Cho Bài 8 Lớp 10)
    canvas2D: {
      mode: 'triangle', // 'triangle' | 'parallelogram' | 'subtraction'
      pointA: { x: 120, y: 260, label: 'A' },
      pointB: { x: 320, y: 140, label: 'B' },
      pointC: { x: 500, y: 220, label: 'C' },
      pointD: { x: 300, y: 340, label: 'D' }, // Cho hbh
      draggingPoint: null,
      hoverPoint: null
    },
    // 3D Canvas State (Cho Bài 7 Lớp 12)
    canvas3D: {
      rotX: 25,
      rotY: -35,
      scale: 24,
      pointM: { x: 3, y: 4, z: 5 },
      isDragging: false,
      lastMouseX: 0,
      lastMouseY: 0
    }
  };

  // Phát âm thanh Synthesizer chúc mừng khi đạt mốc tiến độ hoặc hoàn thành 100%
  function playCelebrationSound(isGrand = false) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const notes = isGrand
        ? [523.25, 659.25, 783.99, 1046.50, 1318.51] // C5, E5, G5, C6, E6
        : [523.25, 659.25, 783.99]; // C5, E5, G5

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.12);
        osc.stop(ctx.currentTime + i * 0.12 + 0.45);
      });
    } catch (e) {
      // Audio context blocked or unsupported
    }
  }

  // Cập nhật Thanh Tiến Độ & Gamification
  function updateProgress() {
    let totalScore = 0;

    // Lời chào & Mục tiêu: 15%
    if (LESSON_ENGINE_STATE.progress.welcomeListened) totalScore += 15;

    // Các mốc POI: 30%
    const poiKeys = Object.keys(LESSON_ENGINE_STATE.progress.poiCompleted);
    if (poiKeys.length > 0) {
      const passedCount = poiKeys.filter(k => LESSON_ENGINE_STATE.progress.poiCompleted[k]).length;
      totalScore += Math.round((passedCount / poiKeys.length) * 30);
    } else {
      totalScore += 30; // Nếu bài học không có POI thì tự động đạt điểm
    }

    // Tương tác Mô hình hình học: 15%
    if (LESSON_ENGINE_STATE.progress.geometryInteracted) totalScore += 15;

    // Luyện tập thích ứng 4 mức độ: 40% (10% mỗi mức độ)
    let adaptiveDoneCount = 0;
    for (let lvl = 1; lvl <= 4; lvl++) {
      if (LESSON_ENGINE_STATE.progress.adaptiveCompleted[lvl]) adaptiveDoneCount++;
    }
    totalScore += adaptiveDoneCount * 10;

    if (totalScore > 100) totalScore = 100;

    // Cập nhật DOM thanh tiến độ
    const fillEl = document.getElementById('olmProgressFill');
    const percentEl = document.getElementById('olmProgressPercent');
    const xpEl = document.getElementById('olmXpDisplay');
    const starsEl = document.getElementById('olmStarsDisplay');

    if (fillEl) fillEl.style.width = totalScore + '%';
    if (percentEl) percentEl.textContent = totalScore + '%';
    if (xpEl) xpEl.textContent = `${LESSON_ENGINE_STATE.xp} XP`;
    if (starsEl) starsEl.textContent = `⭐ ${LESSON_ENGINE_STATE.stars}`;

    // Lưu vào LocalStorage
    localStorage.setItem('ths_sang_math_xp', LESSON_ENGINE_STATE.xp);
    localStorage.setItem('ths_sang_stars', LESSON_ENGINE_STATE.stars);
    localStorage.setItem(`interactive_progress_${LESSON_ENGINE_STATE.lessonId}`, JSON.stringify(LESSON_ENGINE_STATE.progress));

    // Hiệu ứng pháo hoa rực rỡ khi đạt 100%
    if (totalScore === 100 && !LESSON_ENGINE_STATE.isCompleted100) {
      LESSON_ENGINE_STATE.isCompleted100 = true;
      triggerConfettiFireworks();
      playCelebrationSound(true);

      if (typeof window.showToast === 'function') {
        window.showToast(
          '🎉 XUẤT SẮC! Em đã hoàn thành 100% bài học số! Thưởng +50 XP & 5 Sao vàng danh dự!',
          'success'
        );
      }
    }
  }

  // Kích hoạt pháo hoa canvas-confetti
  function triggerConfettiFireworks() {
    if (typeof confetti === 'function') {
      const count = 220;
      const defaults = { origin: { y: 0.7 } };

      function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio)
        }));
      }

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    }
  }

  // =========================================================================
  // 2. TRÌNH PHÁT AUDIO TƯƠNG TÁC (INTERACTIVE AUDIO PLAYER VỚI POI)
  // =========================================================================
  function initInteractiveAudio(interactiveData) {
    if (!interactiveData || !interactiveData.audioUrl) return;

    const audioUrl = interactiveData.audioUrl;
    const timestamps = interactiveData.timestamps || [];

    // Khởi tạo trạng thái POI
    timestamps.forEach(poi => {
      if (LESSON_ENGINE_STATE.progress.poiCompleted[poi.id] === undefined) {
        LESSON_ENGINE_STATE.progress.poiCompleted[poi.id] = false;
      }
    });

    const audio = new Audio(audioUrl);
    LESSON_ENGINE_STATE.audioInstance = audio;

    const btnPlay = document.getElementById('olmBtnPlayInteractive');
    const seekbar = document.getElementById('olmAudioSeekbar');
    const progressBar = document.getElementById('olmAudioProgress');
    const curTimeEl = document.getElementById('olmCurrentTime');
    const durTimeEl = document.getElementById('olmDurationTime');
    const markersContainer = document.getElementById('olmPoiMarkersContainer');

    function formatTime(sec) {
      if (isNaN(sec)) return "00:00";
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    }

    // Nạp duration và vẽ các POI markers trên timeline
    audio.addEventListener('loadedmetadata', function () {
      if (durTimeEl) durTimeEl.textContent = formatTime(audio.duration);

      if (markersContainer && audio.duration > 0) {
        markersContainer.innerHTML = '';
        timestamps.forEach(poi => {
          const pct = (poi.time / audio.duration) * 100;
          const marker = document.createElement('div');
          marker.className = `olm-poi-marker ${LESSON_ENGINE_STATE.progress.poiCompleted[poi.id] ? 'completed' : ''}`;
          marker.style.left = `${pct}%`;
          marker.title = `Điểm dừng tương tác tại ${formatTime(poi.time)}`;
          marker.dataset.poiId = poi.id;
          markersContainer.appendChild(marker);
        });
      }
    });

    // Sự kiện timeupdate kiểm tra POI
    audio.addEventListener('timeupdate', function () {
      if (curTimeEl) curTimeEl.textContent = formatTime(audio.currentTime);

      if (progressBar && audio.duration > 0) {
        const pct = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = pct + '%';
      }

      // Kiểm tra chạm mốc POI chưa hoàn thành
      for (let i = 0; i < timestamps.length; i++) {
        const poi = timestamps[i];
        if (!LESSON_ENGINE_STATE.progress.poiCompleted[poi.id]) {
          if (audio.currentTime >= poi.time && audio.currentTime <= poi.time + 1.2) {
            audio.pause();
            if (btnPlay) {
              btnPlay.innerHTML = '<i class="fa-solid fa-play"></i> Tiếp tục nghe Thầy Sáng giảng';
            }
            if (seekbar) seekbar.classList.add('disabled'); // Khóa tua
            openPoiModal(poi);
            break;
          }
        }
      }
    });

    audio.addEventListener('ended', function () {
      if (btnPlay) {
        btnPlay.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Nghe lại bài giảng';
      }
      LESSON_ENGINE_STATE.progress.welcomeListened = true;
      LESSON_ENGINE_STATE.xp += 15;
      updateProgress();
    });

    // Xử lý nút Play/Pause
    if (btnPlay) {
      btnPlay.addEventListener('click', function () {
        if (audio.paused) {
          audio.play();
          btnPlay.innerHTML = '<i class="fa-solid fa-pause"></i> Tạm dừng';
        } else {
          audio.pause();
          btnPlay.innerHTML = '<i class="fa-solid fa-play"></i> Nghe Thầy Sáng giảng bài tương tác';
        }
      });
    }

    // Xử lý click thanh tua (chỉ cho phép khi không bị khóa)
    if (seekbar) {
      seekbar.addEventListener('click', function (e) {
        if (seekbar.classList.contains('disabled')) return;
        const rect = seekbar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        if (width > 0 && audio.duration > 0) {
          const targetTime = (clickX / width) * audio.duration;
          const uncompletedPoi = timestamps.find(p => !LESSON_ENGINE_STATE.progress.poiCompleted[p.id] && p.time < targetTime);
          if (uncompletedPoi) {
            audio.currentTime = uncompletedPoi.time - 0.5;
            if (typeof window.showToast === 'function') {
              window.showToast('⚠️ Em cần hoàn thành câu hỏi tương tác trước khi tua tiếp nhé!', 'info');
            }
          } else {
            audio.currentTime = targetTime;
          }
        }
      });
    }
  }

  // Mở Popup Modal POI
  function openPoiModal(poi) {
    LESSON_ENGINE_STATE.activePOI = poi;
    const modal = document.getElementById('olmPoiModalBackdrop');
    const qEl = document.getElementById('olmPoiQuestionText');
    const optList = document.getElementById('olmPoiOptionsList');
    const feedbackBox = document.getElementById('olmPoiFeedbackBox');
    const btnResume = document.getElementById('olmBtnResumeAudio');

    if (!modal || !qEl || !optList) return;

    qEl.innerHTML = poi.question;
    feedbackBox.className = 'olm-poi-feedback-box';
    feedbackBox.innerHTML = '';
    btnResume.disabled = true;

    // Render danh sách phương án A, B, C, D
    optList.innerHTML = poi.options.map((optText, optIdx) => `
      <button class="olm-poi-btn-option" data-idx="${optIdx}">
        <span>${optText}</span>
        <i class="fa-regular fa-circle"></i>
      </button>
    `).join('');

    // Bắt sự kiện chọn đáp án
    const optButtons = optList.querySelectorAll('.olm-poi-btn-option');
    optButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const chosenIdx = parseInt(this.dataset.idx, 10);
        if (chosenIdx === poi.correctIndex) {
          // TRẢ LỜI ĐÚNG
          this.className = 'olm-poi-btn-option correct';
          this.querySelector('i').className = 'fa-solid fa-circle-check';
          optButtons.forEach(b => b.disabled = true);

          feedbackBox.className = 'olm-poi-feedback-box success';
          feedbackBox.innerHTML = `
            <strong><i class="fa-solid fa-award"></i> Thầy Sáng khen ngợi:</strong> Rất chính xác! 
            <br><em>${poi.explanation}</em>
          `;

          // Đánh dấu hoàn thành POI
          LESSON_ENGINE_STATE.progress.poiCompleted[poi.id] = true;
          LESSON_ENGINE_STATE.xp += 20;
          LESSON_ENGINE_STATE.stars += 1;
          updateProgress();
          playCelebrationSound(false);

          // Cập nhật marker trên timeline
          const marker = document.querySelector(`.olm-poi-marker[data-poi-id="${poi.id}"]`);
          if (marker) marker.classList.add('completed');

          // Mở khóa nút Tiếp tục
          btnResume.disabled = false;
        } else {
          // TRẢ LỜI SAI
          this.className = 'olm-poi-btn-option wrong';
          this.querySelector('i').className = 'fa-solid fa-circle-xmark';

          feedbackBox.className = 'olm-poi-feedback-box error';
          feedbackBox.innerHTML = `
            <strong><i class="fa-solid fa-circle-info"></i> Gợi ý của Thầy Sáng:</strong> ${poi.hint || 'Các em hãy nhớ lại định nghĩa và quy tắc đã học nhé! Thử lại nào!'}
          `;
        }

        // Render lại MathJax trong modal nếu có
        if (window.MathJax && MathJax.typesetPromise) {
          MathJax.typesetPromise([feedbackBox]);
        }
      });
    });

    // Mở modal
    modal.classList.add('active');

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([qEl, optList]);
    }
  }

  // Đóng Modal và tiếp tục phát audio
  function resumeAudioAfterPoi() {
    const modal = document.getElementById('olmPoiModalBackdrop');
    const seekbar = document.getElementById('olmAudioSeekbar');
    const btnPlay = document.getElementById('olmBtnPlayInteractive');

    if (modal) modal.classList.remove('active');
    if (seekbar) seekbar.classList.remove('disabled');

    if (LESSON_ENGINE_STATE.audioInstance) {
      LESSON_ENGINE_STATE.audioInstance.play();
      if (btnPlay) {
        btnPlay.innerHTML = '<i class="fa-solid fa-pause"></i> Tạm dừng';
      }
    }
  }

  // =========================================================================
  // 3. MÔ HÌNH HÌNH HỌC ĐỘNG VECTOR 2D (CHO BÀI 8 LỚP 10)
  // =========================================================================
  function init2DVectorCanvasEngine() {
    const canvas = document.getElementById('olmCanvas3D'); // dùng chung container
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const s = LESSON_ENGINE_STATE.canvas2D;

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      draw2DScene();
    }
    window.addEventListener('resize', resizeCanvas);

    // Vẽ mũi tên vectơ
    function drawVectorArrow(fromX, fromY, toX, toY, color, width, label, offsetLabel = { x: 0, y: -10 }) {
      const headLen = 14 * (window.devicePixelRatio || 1);
      const angle = Math.atan2(toY - fromY, toX - fromX);

      ctx.save();
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = width * (window.devicePixelRatio || 1);

      // Thân vectơ
      ctx.beginPath();
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.stroke();

      // Đầu mũi tên
      ctx.beginPath();
      ctx.moveTo(toX, toY);
      ctx.lineTo(toX - headLen * Math.cos(angle - Math.PI / 6), toY - headLen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(toX - headLen * Math.cos(angle + Math.PI / 6), toY - headLen * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fill();

      // Nhãn vectơ
      if (label) {
        const midX = (fromX + toX) / 2 + offsetLabel.x * (window.devicePixelRatio || 1);
        const midY = (fromY + toY) / 2 + offsetLabel.y * (window.devicePixelRatio || 1);
        ctx.font = `bold ${14 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = color;
        ctx.fillText(label, midX, midY);
      }
      ctx.restore();
    }

    // Vẽ điểm tương tác
    function drawPoint(p, isDragging) {
      const radius = (isDragging ? 8 : 6) * (window.devicePixelRatio || 1);
      ctx.save();
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 3 * (window.devicePixelRatio || 1);

      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Nhãn điểm
      ctx.font = `bold ${16 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
      ctx.fillStyle = '#0f172a';
      ctx.fillText(p.label, p.x + 10 * (window.devicePixelRatio || 1), p.y - 10 * (window.devicePixelRatio || 1));
      ctx.restore();
    }

    function draw2DScene() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Vẽ nền lưới toạ độ mờ nhẹ
      ctx.strokeStyle = 'rgba(226, 232, 240, 0.6)';
      ctx.lineWidth = 1;
      const gridSize = 40 * (window.devicePixelRatio || 1);
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      const A = s.pointA;
      const B = s.pointB;
      const C = s.pointC;
      const D = s.pointD;

      if (s.mode === 'triangle') {
        // CHẾ ĐỘ 1: QUY TẮC TAM GIÁC (BA ĐIỂM)
        // AB + BC = AC
        drawVectorArrow(A.x, A.y, B.x, B.y, '#2563eb', 3, 'AB⃗ (vectơ thứ nhất)', { x: -30, y: -14 });
        drawVectorArrow(B.x, B.y, C.x, C.y, '#059669', 3, 'BC⃗ (vectơ thứ hai)', { x: 10, y: -14 });
        drawVectorArrow(A.x, A.y, C.x, C.y, '#dc2626', 4, 'AC⃗ = AB⃗ + BC⃗ (Vectơ tổng)', { x: 0, y: 24 });

        drawPoint(A, s.draggingPoint === A);
        drawPoint(B, s.draggingPoint === B);
        drawPoint(C, s.draggingPoint === C);

        // Chú thích quy tắc
        ctx.fillStyle = '#0f172a';
        ctx.font = `bold ${15 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Quy tắc ba điểm (Tam giác): AB⃗ + BC⃗ = AC⃗', 20, 35 * (window.devicePixelRatio || 1));
        ctx.font = `${13 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = '#64748b';
        ctx.fillText('💡 Dùng chuột hoặc ngón tay chạm kéo các điểm A, B, C để quan sát vectơ tổng AC⃗ thay đổi', 20, 58 * (window.devicePixelRatio || 1));

      } else if (s.mode === 'parallelogram') {
        // CHẾ ĐỘ 2: QUY TẮC HÌNH BÌNH HÀNH
        // Tự động tính C để ABCD là hình bình hành: C = B + D - A
        C.x = B.x + D.x - A.x;
        C.y = B.y + D.y - A.y;

        // Vẽ cạnh nét đứt hình bình hành
        ctx.save();
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(B.x, B.y); ctx.lineTo(C.x, C.y);
        ctx.moveTo(D.x, D.y); ctx.lineTo(C.x, C.y);
        ctx.stroke();
        ctx.restore();

        drawVectorArrow(A.x, A.y, B.x, B.y, '#2563eb', 3, 'AB⃗', { x: -20, y: -12 });
        drawVectorArrow(A.x, A.y, D.x, D.y, '#059669', 3, 'AD⃗', { x: -20, y: 20 });
        drawVectorArrow(A.x, A.y, C.x, C.y, '#dc2626', 4, 'AC⃗ = AB⃗ + AD⃗ (Đường chéo tổng)', { x: 10, y: -10 });

        drawPoint(A, s.draggingPoint === A);
        drawPoint(B, s.draggingPoint === B);
        drawPoint(D, s.draggingPoint === D);
        drawPoint(C, false);

        ctx.fillStyle = '#0f172a';
        ctx.font = `bold ${15 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Quy tắc hình bình hành: AB⃗ + AD⃗ = AC⃗', 20, 35 * (window.devicePixelRatio || 1));
        ctx.font = `${13 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = '#64748b';
        ctx.fillText('💡 Dùng chuột hoặc ngón tay chạm kéo các điểm A, B, D để quan sát vectơ đường chéo AC⃗', 20, 58 * (window.devicePixelRatio || 1));

      } else if (s.mode === 'subtraction') {
        // CHẾ ĐỘ 3: QUY TẮC HIỆU VECTƠ (CHUNG GỐC)
        // OB - OA = AB
        A.label = 'O';
        B.label = 'A';
        C.label = 'B';

        drawVectorArrow(A.x, A.y, B.x, B.y, '#2563eb', 3, 'OA⃗', { x: -25, y: -10 });
        drawVectorArrow(A.x, A.y, C.x, C.y, '#059669', 3, 'OB⃗', { x: 25, y: -10 });
        drawVectorArrow(B.x, B.y, C.x, C.y, '#d97706', 4, 'AB⃗ = OB⃗ - OA⃗ (Vectơ hiệu)', { x: 0, y: -18 });

        drawPoint(A, s.draggingPoint === A);
        drawPoint(B, s.draggingPoint === B);
        drawPoint(C, s.draggingPoint === C);

        ctx.fillStyle = '#0f172a';
        ctx.font = `bold ${15 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Quy tắc trừ hai vectơ chung gốc: OB⃗ - OA⃗ = AB⃗', 20, 35 * (window.devicePixelRatio || 1));
        ctx.font = `${13 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = '#64748b';
        ctx.fillText('💡 Chú ý quy tắc: Vectơ hiệu nối từ ngọn vectơ trừ (A) sang ngọn vectơ bị trừ (B)', 20, 58 * (window.devicePixelRatio || 1));
      }
    }

    resizeCanvas();

    // Tương tác chạm / chuột kéo thả điểm
    function getPointerPos(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: (clientX - rect.left) * (window.devicePixelRatio || 1),
        y: (clientY - rect.top) * (window.devicePixelRatio || 1)
      };
    }

    function findClosestPoint(pos) {
      const points = s.mode === 'parallelogram' ? [s.pointA, s.pointB, s.pointD] : [s.pointA, s.pointB, s.pointC];
      for (let p of points) {
        const dist = Math.hypot(p.x - pos.x, p.y - pos.y);
        if (dist <= 25 * (window.devicePixelRatio || 1)) return p;
      }
      return null;
    }

    function onPointerDown(e) {
      const pos = getPointerPos(e);
      const p = findClosestPoint(pos);
      if (p) {
        s.draggingPoint = p;
        draw2DScene();
        LESSON_ENGINE_STATE.progress.geometryInteracted = true;
        updateProgress();
      }
    }

    function onPointerMove(e) {
      if (!s.draggingPoint) return;
      const pos = getPointerPos(e);
      s.draggingPoint.x = pos.x;
      s.draggingPoint.y = pos.y;
      draw2DScene();
      LESSON_ENGINE_STATE.progress.geometryInteracted = true;
      updateProgress();
      if (e.cancelable) e.preventDefault();
    }

    function onPointerUp() {
      s.draggingPoint = null;
      draw2DScene();
    }

    canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    canvas.addEventListener('touchstart', onPointerDown, { passive: false });
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('touchend', onPointerUp);

    // Chuyển chế độ tương tác qua thanh công cụ
    const btnTri = document.getElementById('btnModeTriangle');
    const btnPara = document.getElementById('btnModeParallelogram');
    const btnSub = document.getElementById('btnModeSubtraction');

    if (btnTri && btnPara && btnSub) {
      btnTri.addEventListener('click', function () {
        s.mode = 'triangle';
        s.pointA.label = 'A'; s.pointB.label = 'B'; s.pointC.label = 'C';
        btnTri.className = 'olm-btn-3d-tool active';
        btnPara.className = 'olm-btn-3d-tool';
        btnSub.className = 'olm-btn-3d-tool';
        draw2DScene();
      });

      btnPara.addEventListener('click', function () {
        s.mode = 'parallelogram';
        s.pointA.label = 'A'; s.pointB.label = 'B'; s.pointC.label = 'C'; s.pointD.label = 'D';
        btnPara.className = 'olm-btn-3d-tool active';
        btnTri.className = 'olm-btn-3d-tool';
        btnSub.className = 'olm-btn-3d-tool';
        draw2DScene();
      });

      btnSub.addEventListener('click', function () {
        s.mode = 'subtraction';
        btnSub.className = 'olm-btn-3d-tool active';
        btnTri.className = 'olm-btn-3d-tool';
        btnPara.className = 'olm-btn-3d-tool';
        draw2DScene();
      });
    }
  }

  // =========================================================================
  // 3B. MÔ HÌNH HÌNH HỌC KHÔNG GIAN 3D ĐỘNG (CHO BÀI 11 LỚP 11: HAI ĐƯỜNG THẲNG SONG SONG)
  // =========================================================================
  function init3DParallelCanvasEngine() {
    const canvas = document.getElementById('olmCanvas3D');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const s = {
      mode: 'parallel', // 'parallel' | 'skew' | 'intersection'
      rotX: 25,
      rotY: -35,
      scale: 32,
      isDragging: false,
      lastMouseX: 0,
      lastMouseY: 0
    };

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      drawScene();
    }
    window.addEventListener('resize', resizeCanvas);

    // Toạ độ 3D các đỉnh hình chóp S.ABCD
    const S = { x: 0, y: 3.8, z: 0, label: 'S' };
    const A = { x: -3.0, y: -1.6, z: -1.8, label: 'A' };
    const B = { x: 2.5, y: -1.6, z: -1.8, label: 'B' };
    const C = { x: 3.5, y: -1.6, z: 1.8, label: 'C' };
    const D = { x: -2.0, y: -1.6, z: 1.8, label: 'D' };

    // Trung điểm M của SA và N của SB
    const M = { x: (S.x + A.x) / 2, y: (S.y + A.y) / 2, z: (S.z + A.z) / 2, label: 'M' };
    const N = { x: (S.x + B.x) / 2, y: (S.y + B.y) / 2, z: (S.z + B.z) / 2, label: 'N' };

    // Đường thẳng qua S song song AB (giao tuyến)
    const Sx1 = { x: -4.0, y: 3.8, z: 0, label: '' };
    const Sx2 = { x: 4.0, y: 3.8, z: 0, label: 'x' };

    // Hàm chiếu 3D -> 2D
    function project3D(p) {
      const radX = (s.rotX * Math.PI) / 180;
      const radY = (s.rotY * Math.PI) / 180;

      // Xoay quanh trục Y
      let x1 = p.x * Math.cos(radY) + p.z * Math.sin(radY);
      let z1 = -p.x * Math.sin(radY) + p.z * Math.cos(radY);

      // Xoay quanh trục X
      let y2 = p.y * Math.cos(radX) - z1 * Math.sin(radX);
      let z2 = p.y * Math.sin(radX) + z1 * Math.cos(radX);

      const dpr = window.devicePixelRatio || 1;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2 + 15 * dpr;

      return {
        x: centerX + x1 * s.scale * dpr,
        y: centerY - y2 * s.scale * dpr,
        z: z2
      };
    }

    function drawLine3D(p1, p2, color, width, isDashed = false) {
      const pr1 = project3D(p1);
      const pr2 = project3D(p2);
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = width * (window.devicePixelRatio || 1);
      if (isDashed) {
        ctx.setLineDash([6 * (window.devicePixelRatio || 1), 6 * (window.devicePixelRatio || 1)]);
      }
      ctx.beginPath();
      ctx.moveTo(pr1.x, pr1.y);
      ctx.lineTo(pr2.x, pr2.y);
      ctx.stroke();
      ctx.restore();
    }

    function drawPoint3D(p, color = '#0284c7', radius = 5) {
      const pr = project3D(p);
      const dpr = window.devicePixelRatio || 1;
      ctx.save();
      ctx.fillStyle = color;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2 * dpr;
      ctx.beginPath();
      ctx.arc(pr.x, pr.y, radius * dpr, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      if (p.label) {
        ctx.font = `bold ${14 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = '#0f172a';
        ctx.fillText(p.label, pr.x + 8 * dpr, pr.y - 8 * dpr);
      }
      ctx.restore();
    }

    function drawScene() {
      const w = canvas.width;
      const h = canvas.height;
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, w, h);

      // Lưới nền không gian
      ctx.strokeStyle = 'rgba(226, 232, 240, 0.5)';
      ctx.lineWidth = 1;
      const step = 45 * dpr;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // 1. Cạnh khung cơ sở hình chóp S.ABCD
      // Đáy: AB khuất (nét đứt), BC, CD, DA nét liền
      drawLine3D(A, B, '#94a3b8', 1.5, true);
      drawLine3D(B, C, '#94a3b8', 1.5, false);
      drawLine3D(C, D, '#94a3b8', 1.5, false);
      drawLine3D(D, A, '#94a3b8', 1.5, false);

      // Cạnh bên: SA khuất hoặc mờ nhẹ, SB, SC, SD
      drawLine3D(S, A, '#64748b', 1.5, true);
      drawLine3D(S, B, '#64748b', 1.5, false);
      drawLine3D(S, C, '#64748b', 1.5, false);
      drawLine3D(S, D, '#64748b', 1.5, false);

      if (s.mode === 'parallel') {
        // CHẾ ĐỘ 1: HAI ĐƯỜNG THẲNG SONG SONG
        // Nổi bật AB // CD và đường trung bình MN // AB // CD
        drawLine3D(A, B, '#10b981', 4, true); // AB nét đứt xanh lá đậm
        drawLine3D(C, D, '#10b981', 4.5, false); // CD xanh lá đậm
        drawLine3D(M, N, '#059669', 3.5, true); // MN đường trung bình

        drawPoint3D(M, '#10b981', 5);
        drawPoint3D(N, '#10b981', 5);

        // Chú thích
        ctx.fillStyle = '#0f172a';
        ctx.font = `bold ${15 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Hai đường thẳng song song: AB // CD và MN // AB // CD (Tính chất bắc cầu)', 20, 35 * dpr);
        ctx.font = `${13 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = '#059669';
        ctx.fillText('✓ Cùng nằm trong mặt phẳng đáy (ABCD). Xoay hình 3D để quan sát mặt phẳng đồng phẳng.', 20, 58 * dpr);

      } else if (s.mode === 'skew') {
        // CHẾ ĐỘ 2: HAI ĐƯỜNG THẲNG CHÉO NHAU
        // Nổi bật SA (đỏ) và CD (vàng cam)
        drawLine3D(S, A, '#ef4444', 4.5, false);
        drawLine3D(C, D, '#f59e0b', 4.5, false);

        // Chú thích
        ctx.fillStyle = '#0f172a';
        ctx.font = `bold ${15 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Hai đường thẳng chéo nhau: SA và CD', 20, 35 * dpr);
        ctx.font = `${13 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = '#dc2626';
        ctx.fillText('⚠️ Không cùng nằm trong bất kỳ mặt phẳng nào! Dùng chuột/ngón tay xoay 3 chiều để thấy lệch tầng.', 20, 58 * dpr);

      } else if (s.mode === 'intersection') {
        // CHẾ ĐỘ 3: ĐỊNH LÝ 3 GIAO TUYẾN
        // (SAB) chứa AB, (SCD) chứa CD; AB // CD => giao tuyến Sx // AB // CD
        drawLine3D(A, B, '#3b82f6', 3.5, true);
        drawLine3D(C, D, '#8b5cf6', 3.5, false);
        drawLine3D(Sx1, Sx2, '#ec4899', 4, false); // Giao tuyến Sx

        // Vẽ nhãn Sx
        const prSx2 = project3D(Sx2);
        ctx.fillStyle = '#ec4899';
        ctx.font = `bold ${14 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Sx', prSx2.x + 8 * dpr, prSx2.y);

        ctx.fillStyle = '#0f172a';
        ctx.font = `bold ${15 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Định lý 3 giao tuyến: (SAB) ∩ (SCD) = Sx // AB // CD', 20, 35 * dpr);
        ctx.font = `${13 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = '#db2777';
        ctx.fillText('✓ Hai mặt phẳng chứa hai đường thẳng song song, giao tuyến qua điểm chung S song song với cả hai đường.', 20, 58 * dpr);
      }

      // Vẽ các đỉnh chóp
      drawPoint3D(S, '#0284c7', 6);
      drawPoint3D(A, '#0284c7', 5);
      drawPoint3D(B, '#0284c7', 5);
      drawPoint3D(C, '#0284c7', 5);
      drawPoint3D(D, '#0284c7', 5);
    }

    resizeCanvas();

    // Bắt sự kiện xoay 3D bằng chuột và cảm ứng touch
    function onPointerDown(e) {
      s.isDragging = true;
      s.lastMouseX = e.touches ? e.touches[0].clientX : e.clientX;
      s.lastMouseY = e.touches ? e.touches[0].clientY : e.clientY;
      LESSON_ENGINE_STATE.progress.geometryInteracted = true;
      updateProgress();
    }

    function onPointerMove(e) {
      if (!s.isDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const dx = clientX - s.lastMouseX;
      const dy = clientY - s.lastMouseY;

      s.rotY += dx * 0.6;
      s.rotX -= dy * 0.6;
      if (s.rotX > 85) s.rotX = 85;
      if (s.rotX < -85) s.rotX = -85;

      s.lastMouseX = clientX;
      s.lastMouseY = clientY;
      drawScene();
      if (e.cancelable) e.preventDefault();
    }

    function onPointerUp() {
      s.isDragging = false;
    }

    canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    canvas.addEventListener('touchstart', onPointerDown, { passive: false });
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('touchend', onPointerUp);

    // Chuyển chế độ tương tác qua thanh công cụ
    let modeBar = document.getElementById('olm3DParallelModeBar');
    const cardEl = document.getElementById('olm3DCard');
    if (cardEl && !modeBar) {
      modeBar = document.createElement('div');
      modeBar.id = 'olm3DParallelModeBar';
      modeBar.style.cssText = 'display:flex;gap:8px;padding:8px 16px;background:#f8fafc;border-bottom:1px solid #e2e8f0;flex-wrap:wrap;';
      modeBar.innerHTML = `
        <button class="olm-btn-3d-tool active" id="btnParallelMode1"><i class="fa-solid fa-arrows-split-up-and-left"></i> Đường thẳng song song</button>
        <button class="olm-btn-3d-tool" id="btnParallelMode2"><i class="fa-solid fa-shuffle"></i> Đường thẳng chéo nhau</button>
        <button class="olm-btn-3d-tool" id="btnParallelMode3"><i class="fa-solid fa-diagram-project"></i> Định lý giao tuyến</button>
      `;
      const viewport = cardEl.querySelector('.olm-3d-viewport-wrapper');
      if (viewport) {
        cardEl.insertBefore(modeBar, viewport);
      }

      const b1 = document.getElementById('btnParallelMode1');
      const b2 = document.getElementById('btnParallelMode2');
      const b3 = document.getElementById('btnParallelMode3');

      if (b1 && b2 && b3) {
        b1.addEventListener('click', () => {
          s.mode = 'parallel';
          b1.className = 'olm-btn-3d-tool active';
          b2.className = 'olm-btn-3d-tool';
          b3.className = 'olm-btn-3d-tool';
          drawScene();
        });
        b2.addEventListener('click', () => {
          s.mode = 'skew';
          b2.className = 'olm-btn-3d-tool active';
          b1.className = 'olm-btn-3d-tool';
          b3.className = 'olm-btn-3d-tool';
          drawScene();
        });
        b3.addEventListener('click', () => {
          s.mode = 'intersection';
          b3.className = 'olm-btn-3d-tool active';
          b1.className = 'olm-btn-3d-tool';
          b2.className = 'olm-btn-3d-tool';
          drawScene();
        });
      }
    }
  }

  // =========================================================================
  // 4B. LUYỆN TẬP THÍCH ỨNG CHO BÀI 11 LỚP 11: HAI ĐƯỜNG THẲNG SONG SONG
  // =========================================================================
  const ADAPTIVE_GENERATORS_11_11 = {
    // MỨC ĐỘ 1: NHẬN BIẾT (Vị trí tương đối trong không gian)
    1: function () {
      const pyramids = [
        { S: 'S', A: 'A', B: 'B', C: 'C', D: 'D' },
        { S: 'S', A: 'M', B: 'N', C: 'P', D: 'Q' },
        { S: 'T', A: 'A', B: 'B', C: 'C', D: 'D' },
        { S: 'S', A: 'E', B: 'F', C: 'G', D: 'H' }
      ];
      const p = pyramids[Math.floor(Math.random() * pyramids.length)];
      const askSkew = Math.random() > 0.5;

      let prompt, correctAns, expText, distractors;

      if (askSkew) {
        prompt = `Cho hình chóp $${p.S}.${p.A}${p.B}${p.C}${p.D}$ có đáy là hình bình hành. Cặp đường thẳng nào sau đây là <strong>hai đường thẳng chéo nhau</strong>?`;
        correctAns = `$${p.S}${p.A}$ và $${p.C}${p.D}$`;
        expText = `Hai đường thẳng $${p.S}${p.A}$ và $${p.C}${p.D}$ không cùng nằm trong bất kỳ mặt phẳng nào và không có điểm chung, do đó chúng là <strong>hai đường thẳng chéo nhau</strong>.`;
        distractors = [
          `$${p.A}${p.B}$ và $${p.C}${p.D}$`,
          `$${p.S}${p.A}$ và $${p.A}${p.B}$`,
          `$${p.A}${p.C}$ và $${p.B}${p.D}$`
        ];
      } else {
        prompt = `Cho hình chóp $${p.S}.${p.A}${p.B}${p.C}${p.D}$ có đáy là hình bình hành tâm $O$. Cặp đường thẳng nào sau đây là <strong>hai đường thẳng song song</strong> với nhau?`;
        correctAns = `$${p.A}${p.B}$ và $${p.C}${p.D}$`;
        expText = `Vì đáy $${p.A}${p.B}${p.C}${p.D}$ là hình bình hành nên hai cạnh đối $${p.A}${p.B}$ và $${p.C}${p.D}$ cùng thuộc mặt phẳng đáy và không có điểm chung, suy ra $${p.A}${p.B} // ${p.C}${p.D}$.`;
        distractors = [
          `$${p.S}${p.A}$ và $${p.C}${p.D}$`,
          `$${p.S}${p.A}$ và $${p.A}${p.D}$`,
          `$${p.S}${p.B}$ và $${p.A}${p.C}$`
        ];
      }

      const allOpts = [correctAns, ...distractors].sort(() => 0.5 - Math.random());
      const correctIndex = allOpts.indexOf(correctAns);

      return {
        prompt: prompt,
        options: allOpts.map((opt, i) => `${['A', 'B', 'C', 'D'][i]}. ${opt}`),
        correctIndex: correctIndex,
        explanation: expText
      };
    },

    // MỨC ĐỘ 2: THÔNG HIỂU (Đường trung bình & Tính chất bắc cầu)
    2: function () {
      const pyramids = [
        { S: 'S', A: 'A', B: 'B', C: 'C', D: 'D', M: 'M', N: 'N' },
        { S: 'S', A: 'M', B: 'N', C: 'P', D: 'Q', M: 'I', N: 'K' },
        { S: 'T', A: 'A', B: 'B', C: 'C', D: 'D', M: 'E', N: 'F' }
      ];
      const p = pyramids[Math.floor(Math.random() * pyramids.length)];

      const prompt = `Cho hình chóp $${p.S}.${p.A}${p.B}${p.C}${p.D}$ có đáy $${p.A}${p.B}${p.C}${p.D}$ là hình bình hành. Gọi $${p.M}, ${p.N}$ lần lượt là trung điểm của $${p.S}${p.A}$ và $${p.S}${p.B}$. Khẳng định nào sau đây là <strong>ĐÚNG</strong>?`;
      const correctAns = `$${p.M}${p.N} // ${p.C}${p.D}$`;
      const expText = `Xét tam giác $${p.S}${p.A}${p.B}$, ta có $${p.M}, ${p.N}$ là trung điểm của $${p.S}${p.A}$ và $${p.S}${p.B}$ nên $${p.M}${p.N}$ là đường trung bình của tam giác, suy ra $${p.M}${p.N} // ${p.A}${p.B}$.<br>Lại có $${p.A}${p.B}${p.C}${p.D}$ là hình bình hành nên $${p.A}${p.B} // ${p.C}${p.D}$.<br>Theo tính chất bắc cầu của quan hệ song song trong không gian: $${p.M}${p.N} // ${p.C}${p.D}$.`;

      const distractors = [
        `$${p.M}${p.N}$ cắt $${p.C}${p.D}$`,
        `$${p.M}${p.N}$ và $${p.C}${p.D}$ chéo nhau`,
        `$${p.M}${p.N} // ${p.S}${p.C}$`
      ];

      const allOpts = [correctAns, ...distractors].sort(() => 0.5 - Math.random());
      const correctIndex = allOpts.indexOf(correctAns);

      return {
        prompt: prompt,
        options: allOpts.map((opt, i) => `${['A', 'B', 'C', 'D'][i]}. ${opt}`),
        correctIndex: correctIndex,
        explanation: expText
      };
    },

    // MỨC ĐỘ 3: VẬN DỤNG (Định lý giao tuyến của ba mặt phẳng)
    3: function () {
      const shapes = [
        { name: 'hình thang', base: 'AB // CD, AB > CD', S: 'S', b1: 'AB', b2: 'CD' },
        { name: 'hình thang', base: 'AD // BC, AD > BC', S: 'S', b1: 'AD', b2: 'BC' },
        { name: 'hình bình hành', base: 'AB // CD', S: 'S', b1: 'AB', b2: 'CD' }
      ];
      const sh = shapes[Math.floor(Math.random() * shapes.length)];

      const prompt = `Cho hình chóp $${sh.S}.ABCD$ có đáy $ABCD$ là ${sh.name} (${sh.base}). Giao tuyến của hai mặt phẳng $(${sh.S}${sh.b1})$ và $(${sh.S}${sh.b2})$ là:`;
      const correctAns = `Đường thẳng qua $${sh.S}$ và song song với $${sh.b1}, ${sh.b2}$`;
      const expText = `Hai mặt phẳng $(${sh.S}${sh.b1})$ và $(${sh.S}${sh.b2})$ có điểm chung $${sh.S}$ và lần lượt chứa hai đường thẳng song song $${sh.b1} // ${sh.b2}$.<br>Theo định lý về giao tuyến của ba mặt phẳng: Giao tuyến của hai mặt phẳng nếu có sẽ đi qua điểm chung $${sh.S}$ và song song với $${sh.b1}$ và $${sh.b2}$.`;

      const distractors = [
        `Đoạn thẳng nối $${sh.S}$ với giao điểm của hai cạnh bên`,
        `Đường thẳng qua $${sh.S}$ và cắt cạnh đáy $${sh.b1}$`,
        `Đường thẳng vuông góc với mặt phẳng đáy tại $${sh.S}$`
      ];

      const allOpts = [correctAns, ...distractors].sort(() => 0.5 - Math.random());
      const correctIndex = allOpts.indexOf(correctAns);

      return {
        prompt: prompt,
        options: allOpts.map((opt, i) => `${['A', 'B', 'C', 'D'][i]}. ${opt}`),
        correctIndex: correctIndex,
        explanation: expText
      };
    },

    // MỨC ĐỘ 4: VẬN DỤNG CAO (Thiết diện song song & Chu vi không đổi)
    4: function () {
      const a = (Math.floor(Math.random() * 4) + 4) * 2; // 8, 10, 12, 14
      const b = (Math.floor(Math.random() * 3) + 3) * 2; // 6, 8, 10
      const chuVi = a + b;

      const prompt = `Cho tứ diện $ABCD$ có cặp cạnh đối diện $AB = ${a}\\text{ cm}$ và $CD = ${b}\\text{ cm}$. Mặt phẳng $(\\alpha)$ song song với cả $AB$ và $CD$, cắt các cạnh $BC, BD, AD, AC$ lần lượt tại bốn điểm $M, N, P, Q$. Thiết diện $MNPQ$ là hình gì và chu vi của thiết diện đó bằng bao nhiêu?`;
      const correctAns = `Hình bình hành, chu vi bằng $${chuVi}\\text{ cm}$`;
      const expText = `Vì mặt phẳng $(\\alpha) // AB$ nên các giao tuyến $MN // AB$ và $PQ // AB \\Rightarrow MN // PQ$.<br>Tương tự, $(\\alpha) // CD$ nên $MQ // CD$ và $NP // CD \\Rightarrow MQ // NP$.<br>Do đó tứ giác $MNPQ$ là <strong>hình bình hành</strong>.<br>Theo định lý Ta-lét: $\\frac{MN}{AB} = \\frac{CM}{CB}$ và $\\frac{MQ}{CD} = \\frac{BM}{BC}$.<br>Suy ra chu vi thiết diện là: $2(MN + MQ) = 2\\left(\\frac{CM}{CB} \\cdot AB + \\frac{BM}{BC} \\cdot CD\\right) = AB + CD = ${a} + ${b} = ${chuVi}\\text{ cm}$ (luôn không đổi với mọi vị trí của $(\\alpha)$!).`;

      const distractors = [
        `Hình chữ nhật, chu vi bằng $${chuVi + 4}\\text{ cm}$`,
        `Hình thang cân, chu vi bằng $${chuVi * 2}\\text{ cm}$`,
        `Hình thoi, chu vi bằng $${a * 2}\\text{ cm}$`
      ];

      const allOpts = [correctAns, ...distractors].sort(() => 0.5 - Math.random());
      const correctIndex = allOpts.indexOf(correctAns);

      return {
        prompt: prompt,
        options: allOpts.map((opt, i) => `${['A', 'B', 'C', 'D'][i]}. ${opt}`),
        correctIndex: correctIndex,
        explanation: expText
      };
    }
  };

  // =========================================================================
  // 4. LUYỆN TẬP THÍCH ỨNG (ADAPTIVE PRACTICE 4 MỨC ĐỘ & ĐỔI SỐ TỰ ĐỘNG)
  // =========================================================================
  const ADAPTIVE_GENERATORS_10_8 = {
    // MỨC ĐỘ 1: NHẬN BIẾT
    1: function () {
      const pointSets = [
        ['M', 'N', 'P'],
        ['A', 'B', 'C'],
        ['X', 'Y', 'Z'],
        ['E', 'F', 'K']
      ];
      const pts = pointSets[Math.floor(Math.random() * pointSets.length)];
      const [P1, P2, P3] = pts;

      const isAddition = Math.random() > 0.5;
      let prompt, correctAns, expText, distractors;

      if (isAddition) {
        prompt = `Cho ba điểm phân biệt $${P1}, ${P2}, ${P3}$. Theo quy tắc tam giác (ba điểm), tổng hai véctơ $\\vec{${P1}${P2}} + \\vec{${P2}${P3}}$ bằng véctơ nào sau đây?`;
        correctAns = `\\vec{${P1}${P3}}`;
        expText = `Theo quy tắc ba điểm, điểm cuối của véctơ thứ nhất là điểm đầu của véctơ thứ hai: $\\vec{${P1}${P2}} + \\vec{${P2}${P3}} = \\vec{${P1}${P3}}$.`;
        distractors = [
          `\\vec{${P3}${P1}}`,
          `\\vec{${P2}${P1}}`,
          `\\vec{0}`
        ];
      } else {
        prompt = `Cho ba điểm phân biệt $${P1}, ${P2}, ${P3}$. Theo quy tắc trừ hai véctơ chung gốc, hiệu $\\vec{${P1}${P3}} - \\vec{${P1}${P2}}$ bằng véctơ nào sau đây?`;
        correctAns = `\\vec{${P2}${P3}}`;
        expText = `Theo quy tắc hiệu hai véctơ chung gốc: $\\vec{${P1}${P3}} - \\vec{${P1}${P2}} = \\vec{${P2}${P3}}$ (ngọn sau nối về ngọn trước: điểm ${P2} là điểm đầu, điểm ${P3} là điểm cuối).`;
        distractors = [
          `\\vec{${P3}${P2}}`,
          `\\vec{${P1}${P2}}`,
          `\\vec{${P2}${P1}}`
        ];
      }

      const allOpts = [correctAns, ...distractors].sort(() => 0.5 - Math.random());
      const correctIndex = allOpts.indexOf(correctAns);

      return {
        prompt: prompt,
        options: allOpts.map((opt, i) => `${['A', 'B', 'C', 'D'][i]}. $${opt}$`),
        correctIndex: correctIndex,
        explanation: expText
      };
    },

    // MỨC ĐỘ 2: THÔNG HIỂU
    2: function () {
      const a = (Math.floor(Math.random() * 5) + 3); // 3, 4, 5, 6, 7
      const b = (Math.floor(Math.random() * 5) + 3);
      const isPerp = true; // tam giác vuông tại A

      const c = Math.sqrt(a * a + b * b).toFixed(2);
      const prompt = `Cho tam giác $ABC$ vuông tại $A$ có $AB = ${a}$ và $AC = ${b}$. Độ dài của véctơ tổng $|\\vec{AB} + \\vec{AC}|$ bằng bao nhiêu?`;
      const correctAns = `${c}`;
      const expText = `Dựng hình chữ nhật $ABDC$. Theo quy tắc hình bình hành, $\\vec{AB} + \\vec{AC} = \\vec{AD}$. <br>Do tam giác $ABC$ vuông tại $A$ nên $ABDC$ là hình chữ nhật, suy ra đường chéo $AD = \\sqrt{AB^2 + AC^2} = \\sqrt{${a}^2 + ${b}^2} = \\sqrt{${a * a + b * b}} \\approx ${c}$. <br>Vậy $|\\vec{AB} + \\vec{AC}| = AD \\approx ${c}$.`;

      const distractors = [
        `${a + b}`, // Cộng đại số
        `${Math.abs(a - b)}`,
        `${(Math.sqrt(a * a + b * b) + 1.5).toFixed(2)}`
      ];

      const allOpts = [correctAns, ...distractors].sort(() => 0.5 - Math.random());
      const correctIndex = allOpts.indexOf(correctAns);

      return {
        prompt: prompt,
        options: allOpts.map((opt, i) => `${['A', 'B', 'C', 'D'][i]}. $${opt}$`),
        correctIndex: correctIndex,
        explanation: expText
      };
    },

    // MỨC ĐỘ 3: VẬN DỤNG
    3: function () {
      const pts = ['M', 'N', 'P', 'Q'];
      const prompt = `Cho hình bình hành $ABCD$ tâm $O$. Với điểm $M$ tuỳ ý trong mặt phẳng, khẳng định nào sau đây là <strong>ĐÚNG</strong>?`;
      const correctAns = `\\vec{MA} + \\vec{MC} = \\vec{MB} + \\vec{MD}`;
      const expText = `Vì $O$ là tâm hình bình hành $ABCD$ nên $O$ là trung điểm của cả hai đường chéo $AC$ và $BD$. <br>Áp dụng tính chất trung điểm với điểm $M$ tuỳ ý: <br>$\\vec{MA} + \\vec{MC} = 2\\vec{MO}$ và $\\vec{MB} + \\vec{MD} = 2\\vec{MO}$. <br>Từ đó suy ra: $\\vec{MA} + \\vec{MC} = \\vec{MB} + \\vec{MD}$.`;

      const distractors = [
        `\\vec{MA} + \\vec{MB} = \\vec{MC} + \\vec{MD}`,
        `\\vec{MA} + \\vec{MD} = \\vec{MB} + \\vec{MC}`,
        `\\vec{MA} + \\vec{MC} = 2\\vec{AB}`
      ];

      const allOpts = [correctAns, ...distractors].sort(() => 0.5 - Math.random());
      const correctIndex = allOpts.indexOf(correctAns);

      return {
        prompt: prompt,
        options: allOpts.map((opt, i) => `${['A', 'B', 'C', 'D'][i]}. $${opt}$`),
        correctIndex: correctIndex,
        explanation: expText
      };
    },

    // MỨC ĐỘ 4: VẬN DỤNG CAO
    4: function () {
      const v_cano = (Math.floor(Math.random() * 4) + 12); // 12-15 km/h
      const v_dong = (Math.floor(Math.random() * 3) + 3);  // 3-5 km/h

      const v_thuc = Math.sqrt(v_cano * v_cano + v_dong * v_dong).toFixed(2);
      const prompt = `Một chiếc ca nô di chuyển từ bờ sông bên này sang bờ sông bên kia. Vận tốc riêng của ca nô đối với dòng nước là $v_1 = ${v_cano}\\text{ km/h}$ hướng vuông góc với bờ sông. Vận tốc của dòng nước chảy xiết là $v_2 = ${v_dong}\\text{ km/h}$ chảy xuôi dòng. Tính tốc độ thực tế của chiếc ca nô đối với bờ sông.`;
      const correctAns = `${v_thuc} km/h`;
      const expText = `Gọi $\\vec{v}_1$ là vận tốc riêng của ca nô (hướng vuông góc bờ sông) và $\\vec{v}_2$ là vận tốc dòng nước (hướng xuôi dòng). <br>Vận tốc thực tế của ca nô đối với bờ là $\\vec{v} = \\vec{v}_1 + \\vec{v}_2$. <br>Vì hai chuyển động vuông góc với nhau, áp dụng quy tắc hình chữ nhật ta có: <br>$v = |\\vec{v}| = \\sqrt{v_1^2 + v_2^2} = \\sqrt{${v_cano}^2 + ${v_dong}^2} = \\sqrt{${v_cano * v_cano + v_dong * v_dong}} \\approx ${v_thuc}\\text{ km/h}$.`;

      const distractors = [
        `${v_cano + v_dong} km/h`,
        `${v_cano - v_dong} km/h`,
        `${(Math.sqrt(v_cano * v_cano + v_dong * v_dong) - 1.6).toFixed(2)} km/h`
      ];

      const allOpts = [correctAns, ...distractors].sort(() => 0.5 - Math.random());
      const correctIndex = allOpts.indexOf(correctAns);

      return {
        prompt: prompt,
        options: allOpts.map((opt, i) => `${['A', 'B', 'C', 'D'][i]}. ${opt}`),
        correctIndex: correctIndex,
        explanation: expText
      };
    }
  };

  let activeLevel = 1;

  function renderAdaptiveQuestion(level) {
    activeLevel = level;
    const cardEl = document.getElementById('olmAdaptiveQuestionCard');
    if (!cardEl) return;

    // Chọn bộ sinh đề theo bài học
    let generator;
    if (LESSON_ENGINE_STATE.lessonId === '11-c4-b11') {
      generator = ADAPTIVE_GENERATORS_11_11[level] || ADAPTIVE_GENERATORS_11_11[1];
    } else if (LESSON_ENGINE_STATE.lessonId.startsWith('10-')) {
      generator = ADAPTIVE_GENERATORS_10_8[level] || ADAPTIVE_GENERATORS_10_8[1];
    } else {
      generator = (window.ADAPTIVE_GENERATORS_12_7 ? window.ADAPTIVE_GENERATORS_12_7[level] : (ADAPTIVE_GENERATORS_11_11[level] || ADAPTIVE_GENERATORS_10_8[1]));
    }

    const qData = generator();

    const levelBadgeText = {
      1: { text: 'Nhận biết (NB)', cls: 'nb' },
      2: { text: 'Thông hiểu (TH)', cls: 'th' },
      3: { text: 'Vận dụng (VD)', cls: 'vd' },
      4: { text: 'Vận dụng cao (VDC)', cls: 'vdc' }
    }[level];

    cardEl.innerHTML = `
      <div class="olm-q-meta">
        <span class="olm-q-level-badge ${levelBadgeText.cls}">
          <i class="fa-solid fa-chart-simple"></i> ${levelBadgeText.text}
        </span>
        <button class="olm-btn-dynamic-reload" id="olmBtnRegenerateQ" title="Sinh dữ liệu số và biến mới để luyện tập">
          <i class="fa-solid fa-arrows-rotate"></i> Đổi dữ kiện tương tự
        </button>
      </div>

      <div class="olm-q-prompt" id="olmQPromptText">${qData.prompt}</div>

      <div class="olm-q-options" id="olmQOptionsArea">
        ${qData.options.map((opt, idx) => `
          <button class="olm-btn-q-opt" data-opt-idx="${idx}">
            ${opt}
          </button>
        `).join('')}
      </div>

      <div class="olm-solution-reveal" id="olmSolutionReveal">
        <div class="olm-solution-title">
          <i class="fa-solid fa-circle-check"></i> Lời giải chi tiết của Thầy Sáng:
        </div>
        <div class="olm-solution-body">${qData.explanation}</div>
      </div>
    `;

    // Render MathJax
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([cardEl]);
    }

    // Bắt sự kiện chọn đáp án
    const optButtons = cardEl.querySelectorAll('.olm-btn-q-opt');
    const solutionReveal = cardEl.querySelector('#olmSolutionReveal');

    optButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const chosen = parseInt(this.dataset.optIdx, 10);
        if (chosen === qData.correctIndex) {
          this.className = 'olm-btn-q-opt selected-correct';
          optButtons.forEach(b => b.disabled = true);
          solutionReveal.classList.add('show');

          // Đánh dấu hoàn thành mức độ
          LESSON_ENGINE_STATE.progress.adaptiveCompleted[level] = true;
          LESSON_ENGINE_STATE.xp += 15;
          LESSON_ENGINE_STATE.stars += 1;
          updateProgress();
          playCelebrationSound(false);

          if (typeof window.showToast === 'function') {
            window.showToast(`🎉 Chính xác! Em đã vượt qua thử thách Mức độ ${level}! (+15 XP, +1 ⭐)`, 'success');
          }
        } else {
          this.className = 'olm-btn-q-opt selected-wrong';
          solutionReveal.classList.add('show');
          if (typeof window.showToast === 'function') {
            window.showToast('Chưa chính xác rồi! Em hãy xem lời giải chi tiết và bấm "Đổi dữ kiện tương tự" để làm lại nhé!', 'warning');
          }
        }

        if (window.MathJax && MathJax.typesetPromise) {
          MathJax.typesetPromise([solutionReveal]);
        }
      });
    });

    // Bắt sự kiện đổi số tương tự
    const btnRegen = cardEl.querySelector('#olmBtnRegenerateQ');
    if (btnRegen) {
      btnRegen.addEventListener('click', function () {
        const icon = this.querySelector('i');
        if (icon) icon.classList.add('spinning');
        setTimeout(() => {
          renderAdaptiveQuestion(level);
        }, 300);
      });
    }
  }

  function setupAdaptiveLevelTabs() {
    const tabs = document.querySelectorAll('.olm-tab-level');
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const lvl = parseInt(this.dataset.level, 10);
        renderAdaptiveQuestion(lvl);
      });
    });
  }

  // =========================================================================
  // 5. KHỞI CHẠY HỆ THỐNG BÀI HỌC SỐ TƯƠNG TÁC
  // =========================================================================
  window.initOlmLessonEngine = function (lessonData) {
    if (!lessonData) return;

    LESSON_ENGINE_STATE.lessonId = lessonData.id;
    console.log(`[Interactive Engine] Khởi chạy bài học số tương tác: ${lessonData.id} - ${lessonData.title}`);

    // 1. Cập nhật tiến độ ban đầu
    updateProgress();

    // 2. Kích hoạt Interactive Audio nếu có
    if (lessonData.interactiveAudio) {
      initInteractiveAudio(lessonData.interactiveAudio);
    }

    // 3. Khởi tạo Canvas phù hợp
    if (lessonData.id === '11-c4-b11') {
      // Bài học Lớp 11 (Bài 11): Canvas Hình chóp & Hai đường thẳng song song 3D
      init3DParallelCanvasEngine();
    } else if (lessonData.id.startsWith('10-')) {
      // Bài học Lớp 10: Canvas Vector 2D
      init2DVectorCanvasEngine();
    } else {
      // Bài học Lớp 12: Canvas Space 3D
      if (typeof window.init3DCanvasEngine === 'function') {
        window.init3DCanvasEngine();
      }
    }

    // 4. Khởi tạo Luyện tập thích ứng
    setupAdaptiveLevelTabs();
    renderAdaptiveQuestion(1);

    // 5. Sự kiện nút Resume trong Modal POI
    const btnResume = document.getElementById('olmBtnResumeAudio');
    if (btnResume) {
      btnResume.addEventListener('click', resumeAudioAfterPoi);
    }
  };

})();
