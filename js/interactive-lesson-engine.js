/**
 * INTERACTIVE DIGITAL LESSON ENGINE (Há»† THá»NG BÃ€I Há»ŒC Sá» TÆ¯Æ NG TÃC THÃ”NG MINH)
 * BiÃªn soáº¡n & PhÃ¡t triá»ƒn: ThS. LÆ°Æ¡ng Thanh SÃ¡ng (THPT Nguyá»…n VÄƒn Thoáº¡i, Thoáº¡i SÆ¡n, An Giang)
 * =========================================================================
 * TÃ­nh nÄƒng tÆ°Æ¡ng tÃ¡c chuáº©n sÆ° pháº¡m:
 * 1. Thanh Tiáº¿n Äá»™ Há»c Táº­p (% Progress Bar) & Gamification (XP, Sao vÃ ng, PhÃ¡o hoa Confetti, Web Audio Sound)
 * 2. Há»‡ Thá»‘ng TrÃ¬nh PhÃ¡t Audio TÆ°Æ¡ng TÃ¡c (Interactive Audio Player vá»›i cÃ¡c má»‘c POI - Point of Interest)
 * 3. MÃ´ HÃ¬nh HÃ¬nh Há»c Äá»™ng Trá»±c Quan (2D Vector Canvas & 3D Space Canvas, Full Screen & Landscape Mode)
 * 4. Luyá»‡n Táº­p ThÃ­ch á»¨ng (Adaptive Practice 4 má»©c Ä‘á»™: NB - TH - VD - VDC & Äá»•i Sá»‘ Tá»± Äá»™ng Dynamic Parameters)
 * =========================================================================
 * TUYá»†T Äá»I KHÃ”NG HIá»‚N THá»Š CHá»® OLM TRÃŠN GIAO DIá»†N NGÆ¯á»œI DÃ™NG Äá»‚ Báº¢O Vá»† Báº¢N QUYá»€N
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
    // 2D Vector Canvas State (Cho BÃ i 8 Lá»›p 10)
    canvas2D: {
      mode: 'triangle', // 'triangle' | 'parallelogram' | 'subtraction'
      pointA: { x: 120, y: 260, label: 'A' },
      pointB: { x: 320, y: 140, label: 'B' },
      pointC: { x: 500, y: 220, label: 'C' },
      pointD: { x: 300, y: 340, label: 'D' }, // Cho hbh
      draggingPoint: null,
      hoverPoint: null
    },
    // 3D Canvas State (Cho BÃ i 7 Lá»›p 12)
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

  // PhÃ¡t Ã¢m thanh Synthesizer chÃºc má»«ng khi Ä‘áº¡t má»‘c tiáº¿n Ä‘á»™ hoáº·c hoÃ n thÃ nh 100%
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

  // Cáº­p nháº­t Thanh Tiáº¿n Äá»™ & Gamification
  function updateProgress() {
    let totalScore = 0;

    // Lá»i chÃ o & Má»¥c tiÃªu: 15%
    if (LESSON_ENGINE_STATE.progress.welcomeListened) totalScore += 15;

    // CÃ¡c má»‘c POI: 30%
    const poiKeys = Object.keys(LESSON_ENGINE_STATE.progress.poiCompleted);
    if (poiKeys.length > 0) {
      const passedCount = poiKeys.filter(k => LESSON_ENGINE_STATE.progress.poiCompleted[k]).length;
      totalScore += Math.round((passedCount / poiKeys.length) * 30);
    } else {
      totalScore += 30; // Náº¿u bÃ i há»c khÃ´ng cÃ³ POI thÃ¬ tá»± Ä‘á»™ng Ä‘áº¡t Ä‘iá»ƒm
    }

    // TÆ°Æ¡ng tÃ¡c MÃ´ hÃ¬nh hÃ¬nh há»c: 15%
    if (LESSON_ENGINE_STATE.progress.geometryInteracted) totalScore += 15;

    // Luyá»‡n táº­p thÃ­ch á»©ng 4 má»©c Ä‘á»™: 40% (10% má»—i má»©c Ä‘á»™)
    let adaptiveDoneCount = 0;
    for (let lvl = 1; lvl <= 4; lvl++) {
      if (LESSON_ENGINE_STATE.progress.adaptiveCompleted[lvl]) adaptiveDoneCount++;
    }
    totalScore += adaptiveDoneCount * 10;

    if (totalScore > 100) totalScore = 100;

    // Cáº­p nháº­t DOM thanh tiáº¿n Ä‘á»™
    const fillEl = document.getElementById('olmProgressFill');
    const percentEl = document.getElementById('olmProgressPercent');
    const xpEl = document.getElementById('olmXpDisplay');
    const starsEl = document.getElementById('olmStarsDisplay');

    if (fillEl) fillEl.style.width = totalScore + '%';
    if (percentEl) percentEl.textContent = totalScore + '%';
    if (xpEl) xpEl.textContent = `${LESSON_ENGINE_STATE.xp} XP`;
    if (starsEl) starsEl.textContent = `â­ ${LESSON_ENGINE_STATE.stars}`;

    // LÆ°u vÃ o LocalStorage
    localStorage.setItem('ths_sang_math_xp', LESSON_ENGINE_STATE.xp);
    localStorage.setItem('ths_sang_stars', LESSON_ENGINE_STATE.stars);
    localStorage.setItem(`interactive_progress_${LESSON_ENGINE_STATE.lessonId}`, JSON.stringify(LESSON_ENGINE_STATE.progress));

    // Hiá»‡u á»©ng phÃ¡o hoa rá»±c rá»¡ khi Ä‘áº¡t 100%
    if (totalScore === 100 && !LESSON_ENGINE_STATE.isCompleted100) {
      LESSON_ENGINE_STATE.isCompleted100 = true;
      triggerConfettiFireworks();
      playCelebrationSound(true);

      if (typeof window.showToast === 'function') {
        window.showToast(
          'ðŸŽ‰ XUáº¤T Sáº®C! Em Ä‘Ã£ hoÃ n thÃ nh 100% bÃ i há»c sá»‘! ThÆ°á»Ÿng +50 XP & 5 Sao vÃ ng danh dá»±!',
          'success'
        );
      }
    }
  }

  // KÃ­ch hoáº¡t phÃ¡o hoa canvas-confetti
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
  // 2. TRÃŒNH PHÃT AUDIO TÆ¯Æ NG TÃC (INTERACTIVE AUDIO PLAYER Vá»šI POI)
  // =========================================================================
  function initInteractiveAudio(interactiveData) {
    if (!interactiveData || !interactiveData.audioUrl) return;

    const audioUrl = interactiveData.audioUrl;
    const timestamps = interactiveData.timestamps || [];

    // Khá»Ÿi táº¡o tráº¡ng thÃ¡i POI
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

    // Náº¡p duration vÃ  váº½ cÃ¡c POI markers trÃªn timeline
    audio.addEventListener('loadedmetadata', function () {
      if (durTimeEl) durTimeEl.textContent = formatTime(audio.duration);

      if (markersContainer && audio.duration > 0) {
        markersContainer.innerHTML = '';
        timestamps.forEach(poi => {
          const pct = (poi.time / audio.duration) * 100;
          const marker = document.createElement('div');
          marker.className = `olm-poi-marker ${LESSON_ENGINE_STATE.progress.poiCompleted[poi.id] ? 'completed' : ''}`;
          marker.style.left = `${pct}%`;
          marker.title = `Äiá»ƒm dá»«ng tÆ°Æ¡ng tÃ¡c táº¡i ${formatTime(poi.time)}`;
          marker.dataset.poiId = poi.id;
          markersContainer.appendChild(marker);
        });
      }
    });

    // Sá»± kiá»‡n timeupdate kiá»ƒm tra POI
    audio.addEventListener('timeupdate', function () {
      if (curTimeEl) curTimeEl.textContent = formatTime(audio.currentTime);

      if (progressBar && audio.duration > 0) {
        const pct = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = pct + '%';
      }

      // Kiá»ƒm tra cháº¡m má»‘c POI chÆ°a hoÃ n thÃ nh
      for (let i = 0; i < timestamps.length; i++) {
        const poi = timestamps[i];
        if (!LESSON_ENGINE_STATE.progress.poiCompleted[poi.id]) {
          if (audio.currentTime >= poi.time && audio.currentTime <= poi.time + 1.2) {
            audio.pause();
            if (btnPlay) {
              btnPlay.innerHTML = '<i class="fa-solid fa-play"></i> Tiáº¿p tá»¥c nghe Tháº§y SÃ¡ng giáº£ng';
            }
            if (seekbar) seekbar.classList.add('disabled'); // KhÃ³a tua
            openPoiModal(poi);
            break;
          }
        }
      }
    });

    audio.addEventListener('ended', function () {
      if (btnPlay) {
        btnPlay.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Nghe láº¡i bÃ i giáº£ng';
      }
      LESSON_ENGINE_STATE.progress.welcomeListened = true;
      LESSON_ENGINE_STATE.xp += 15;
      updateProgress();
    });

    // Xá»­ lÃ½ nÃºt Play/Pause
    if (btnPlay) {
      btnPlay.addEventListener('click', function () {
        if (audio.paused) {
          audio.play();
          btnPlay.innerHTML = '<i class="fa-solid fa-pause"></i> Táº¡m dá»«ng';
        } else {
          audio.pause();
          btnPlay.innerHTML = '<i class="fa-solid fa-play"></i> Nghe Tháº§y SÃ¡ng giáº£ng bÃ i tÆ°Æ¡ng tÃ¡c';
        }
      });
    }

    // Xá»­ lÃ½ click thanh tua (chá»‰ cho phÃ©p khi khÃ´ng bá»‹ khÃ³a)
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
              window.showToast('âš ï¸ Em cáº§n hoÃ n thÃ nh cÃ¢u há»i tÆ°Æ¡ng tÃ¡c trÆ°á»›c khi tua tiáº¿p nhÃ©!', 'info');
            }
          } else {
            audio.currentTime = targetTime;
          }
        }
      });
    }
  }

  // Má»Ÿ Popup Modal POI
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

    // Render danh sÃ¡ch phÆ°Æ¡ng Ã¡n A, B, C, D
    optList.innerHTML = poi.options.map((optText, optIdx) => `
      <button class="olm-poi-btn-option" data-idx="${optIdx}">
        <span>${optText}</span>
        <i class="fa-regular fa-circle"></i>
      </button>
    `).join('');

    // Báº¯t sá»± kiá»‡n chá»n Ä‘Ã¡p Ã¡n
    const optButtons = optList.querySelectorAll('.olm-poi-btn-option');
    optButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const chosenIdx = parseInt(this.dataset.idx, 10);
        if (chosenIdx === poi.correctIndex) {
          // TRáº¢ Lá»œI ÄÃšNG
          this.className = 'olm-poi-btn-option correct';
          this.querySelector('i').className = 'fa-solid fa-circle-check';
          optButtons.forEach(b => b.disabled = true);

          feedbackBox.className = 'olm-poi-feedback-box success';
          feedbackBox.innerHTML = `
            <strong><i class="fa-solid fa-award"></i> Tháº§y SÃ¡ng khen ngá»£i:</strong> Ráº¥t chÃ­nh xÃ¡c! 
            <br><em>${poi.explanation}</em>
          `;

          // ÄÃ¡nh dáº¥u hoÃ n thÃ nh POI
          LESSON_ENGINE_STATE.progress.poiCompleted[poi.id] = true;
          LESSON_ENGINE_STATE.xp += 20;
          LESSON_ENGINE_STATE.stars += 1;
          updateProgress();
          playCelebrationSound(false);

          // Cáº­p nháº­t marker trÃªn timeline
          const marker = document.querySelector(`.olm-poi-marker[data-poi-id="${poi.id}"]`);
          if (marker) marker.classList.add('completed');

          // Má»Ÿ khÃ³a nÃºt Tiáº¿p tá»¥c
          btnResume.disabled = false;
        } else {
          // TRáº¢ Lá»œI SAI
          this.className = 'olm-poi-btn-option wrong';
          this.querySelector('i').className = 'fa-solid fa-circle-xmark';

          feedbackBox.className = 'olm-poi-feedback-box error';
          feedbackBox.innerHTML = `
            <strong><i class="fa-solid fa-circle-info"></i> Gá»£i Ã½ cá»§a Tháº§y SÃ¡ng:</strong> ${poi.hint || 'CÃ¡c em hÃ£y nhá»› láº¡i Ä‘á»‹nh nghÄ©a vÃ  quy táº¯c Ä‘Ã£ há»c nhÃ©! Thá»­ láº¡i nÃ o!'}
          `;
        }

        // Render láº¡i MathJax trong modal náº¿u cÃ³
        if (window.MathJax && MathJax.typesetPromise) {
          MathJax.typesetPromise([feedbackBox]);
        }
      });
    });

    // Má»Ÿ modal
    modal.classList.add('active');

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([qEl, optList]);
    }
  }

  // ÄÃ³ng Modal vÃ  tiáº¿p tá»¥c phÃ¡t audio
  function resumeAudioAfterPoi() {
    const modal = document.getElementById('olmPoiModalBackdrop');
    const seekbar = document.getElementById('olmAudioSeekbar');
    const btnPlay = document.getElementById('olmBtnPlayInteractive');

    if (modal) modal.classList.remove('active');
    if (seekbar) seekbar.classList.remove('disabled');

    if (LESSON_ENGINE_STATE.audioInstance) {
      LESSON_ENGINE_STATE.audioInstance.play();
      if (btnPlay) {
        btnPlay.innerHTML = '<i class="fa-solid fa-pause"></i> Táº¡m dá»«ng';
      }
    }
  }

  // =========================================================================
  // 3. MÃ” HÃŒNH HÃŒNH Há»ŒC Äá»˜NG VECTOR 2D (CHO BÃ€I 8 Lá»šP 10)
  // =========================================================================
  function init2DVectorCanvasEngine() {
    const canvas = document.getElementById('olmCanvas3D'); // dÃ¹ng chung container
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

    // Váº½ mÅ©i tÃªn vectÆ¡
    function drawVectorArrow(fromX, fromY, toX, toY, color, width, label, offsetLabel = { x: 0, y: -10 }) {
      const headLen = 14 * (window.devicePixelRatio || 1);
      const angle = Math.atan2(toY - fromY, toX - fromX);

      ctx.save();
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = width * (window.devicePixelRatio || 1);

      // ThÃ¢n vectÆ¡
      ctx.beginPath();
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.stroke();

      // Äáº§u mÅ©i tÃªn
      ctx.beginPath();
      ctx.moveTo(toX, toY);
      ctx.lineTo(toX - headLen * Math.cos(angle - Math.PI / 6), toY - headLen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(toX - headLen * Math.cos(angle + Math.PI / 6), toY - headLen * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fill();

      // NhÃ£n vectÆ¡
      if (label) {
        const midX = (fromX + toX) / 2 + offsetLabel.x * (window.devicePixelRatio || 1);
        const midY = (fromY + toY) / 2 + offsetLabel.y * (window.devicePixelRatio || 1);
        ctx.font = `bold ${14 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = color;
        ctx.fillText(label, midX, midY);
      }
      ctx.restore();
    }

    // Váº½ Ä‘iá»ƒm tÆ°Æ¡ng tÃ¡c
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

      // NhÃ£n Ä‘iá»ƒm
      ctx.font = `bold ${16 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
      ctx.fillStyle = '#0f172a';
      ctx.fillText(p.label, p.x + 10 * (window.devicePixelRatio || 1), p.y - 10 * (window.devicePixelRatio || 1));
      ctx.restore();
    }

    function draw2DScene() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Váº½ ná»n lÆ°á»›i toáº¡ Ä‘á»™ má» nháº¹
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
        // CHáº¾ Äá»˜ 1: QUY Táº®C TAM GIÃC (BA ÄIá»‚M)
        // AB + BC = AC
        drawVectorArrow(A.x, A.y, B.x, B.y, '#2563eb', 3, 'ABâƒ— (vectÆ¡ thá»© nháº¥t)', { x: -30, y: -14 });
        drawVectorArrow(B.x, B.y, C.x, C.y, '#059669', 3, 'BCâƒ— (vectÆ¡ thá»© hai)', { x: 10, y: -14 });
        drawVectorArrow(A.x, A.y, C.x, C.y, '#dc2626', 4, 'ACâƒ— = ABâƒ— + BCâƒ— (VectÆ¡ tá»•ng)', { x: 0, y: 24 });

        drawPoint(A, s.draggingPoint === A);
        drawPoint(B, s.draggingPoint === B);
        drawPoint(C, s.draggingPoint === C);

        // ChÃº thÃ­ch quy táº¯c
        ctx.fillStyle = '#0f172a';
        ctx.font = `bold ${15 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Quy táº¯c ba Ä‘iá»ƒm (Tam giÃ¡c): ABâƒ— + BCâƒ— = ACâƒ—', 20, 35 * (window.devicePixelRatio || 1));
        ctx.font = `${13 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = '#64748b';
        ctx.fillText('ðŸ’¡ DÃ¹ng chuá»™t hoáº·c ngÃ³n tay cháº¡m kÃ©o cÃ¡c Ä‘iá»ƒm A, B, C Ä‘á»ƒ quan sÃ¡t vectÆ¡ tá»•ng ACâƒ— thay Ä‘á»•i', 20, 58 * (window.devicePixelRatio || 1));

      } else if (s.mode === 'parallelogram') {
        // CHáº¾ Äá»˜ 2: QUY Táº®C HÃŒNH BÃŒNH HÃ€NH
        // Tá»± Ä‘á»™ng tÃ­nh C Ä‘á»ƒ ABCD lÃ  hÃ¬nh bÃ¬nh hÃ nh: C = B + D - A
        C.x = B.x + D.x - A.x;
        C.y = B.y + D.y - A.y;

        // Váº½ cáº¡nh nÃ©t Ä‘á»©t hÃ¬nh bÃ¬nh hÃ nh
        ctx.save();
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(B.x, B.y); ctx.lineTo(C.x, C.y);
        ctx.moveTo(D.x, D.y); ctx.lineTo(C.x, C.y);
        ctx.stroke();
        ctx.restore();

        drawVectorArrow(A.x, A.y, B.x, B.y, '#2563eb', 3, 'ABâƒ—', { x: -20, y: -12 });
        drawVectorArrow(A.x, A.y, D.x, D.y, '#059669', 3, 'ADâƒ—', { x: -20, y: 20 });
        drawVectorArrow(A.x, A.y, C.x, C.y, '#dc2626', 4, 'ACâƒ— = ABâƒ— + ADâƒ— (ÄÆ°á»ng chÃ©o tá»•ng)', { x: 10, y: -10 });

        drawPoint(A, s.draggingPoint === A);
        drawPoint(B, s.draggingPoint === B);
        drawPoint(D, s.draggingPoint === D);
        drawPoint(C, false);

        ctx.fillStyle = '#0f172a';
        ctx.font = `bold ${15 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Quy táº¯c hÃ¬nh bÃ¬nh hÃ nh: ABâƒ— + ADâƒ— = ACâƒ—', 20, 35 * (window.devicePixelRatio || 1));
        ctx.font = `${13 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = '#64748b';
        ctx.fillText('ðŸ’¡ DÃ¹ng chuá»™t hoáº·c ngÃ³n tay cháº¡m kÃ©o cÃ¡c Ä‘iá»ƒm A, B, D Ä‘á»ƒ quan sÃ¡t vectÆ¡ Ä‘Æ°á»ng chÃ©o ACâƒ—', 20, 58 * (window.devicePixelRatio || 1));

      } else if (s.mode === 'subtraction') {
        // CHáº¾ Äá»˜ 3: QUY Táº®C HIá»†U VECTÆ  (CHUNG Gá»C)
        // OB - OA = AB
        A.label = 'O';
        B.label = 'A';
        C.label = 'B';

        drawVectorArrow(A.x, A.y, B.x, B.y, '#2563eb', 3, 'OAâƒ—', { x: -25, y: -10 });
        drawVectorArrow(A.x, A.y, C.x, C.y, '#059669', 3, 'OBâƒ—', { x: 25, y: -10 });
        drawVectorArrow(B.x, B.y, C.x, C.y, '#d97706', 4, 'ABâƒ— = OBâƒ— - OAâƒ— (VectÆ¡ hiá»‡u)', { x: 0, y: -18 });

        drawPoint(A, s.draggingPoint === A);
        drawPoint(B, s.draggingPoint === B);
        drawPoint(C, s.draggingPoint === C);

        ctx.fillStyle = '#0f172a';
        ctx.font = `bold ${15 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Quy táº¯c trá»« hai vectÆ¡ chung gá»‘c: OBâƒ— - OAâƒ— = ABâƒ—', 20, 35 * (window.devicePixelRatio || 1));
        ctx.font = `${13 * (window.devicePixelRatio || 1)}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = '#64748b';
        ctx.fillText('ðŸ’¡ ChÃº Ã½ quy táº¯c: VectÆ¡ hiá»‡u ná»‘i tá»« ngá»n vectÆ¡ trá»« (A) sang ngá»n vectÆ¡ bá»‹ trá»« (B)', 20, 58 * (window.devicePixelRatio || 1));
      }
    }

    resizeCanvas();

    // TÆ°Æ¡ng tÃ¡c cháº¡m / chuá»™t kÃ©o tháº£ Ä‘iá»ƒm
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

    // Chuyá»ƒn cháº¿ Ä‘á»™ tÆ°Æ¡ng tÃ¡c qua thanh cÃ´ng cá»¥
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
  // 3B. MÃ” HÃŒNH HÃŒNH Há»ŒC KHÃ”NG GIAN 3D Äá»˜NG (CHO BÃ€I 11 Lá»šP 11: HAI ÄÆ¯á»œNG THáº²NG SONG SONG)
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

    // Toáº¡ Ä‘á»™ 3D cÃ¡c Ä‘á»‰nh hÃ¬nh chÃ³p S.ABCD
    const S = { x: 0, y: 3.8, z: 0, label: 'S' };
    const A = { x: -3.0, y: -1.6, z: -1.8, label: 'A' };
    const B = { x: 2.5, y: -1.6, z: -1.8, label: 'B' };
    const C = { x: 3.5, y: -1.6, z: 1.8, label: 'C' };
    const D = { x: -2.0, y: -1.6, z: 1.8, label: 'D' };

    // Trung Ä‘iá»ƒm M cá»§a SA vÃ  N cá»§a SB
    const M = { x: (S.x + A.x) / 2, y: (S.y + A.y) / 2, z: (S.z + A.z) / 2, label: 'M' };
    const N = { x: (S.x + B.x) / 2, y: (S.y + B.y) / 2, z: (S.z + B.z) / 2, label: 'N' };

    // ÄÆ°á»ng tháº³ng qua S song song AB (giao tuyáº¿n)
    const Sx1 = { x: -4.0, y: 3.8, z: 0, label: '' };
    const Sx2 = { x: 4.0, y: 3.8, z: 0, label: 'x' };

    // HÃ m chiáº¿u 3D -> 2D
    function project3D(p) {
      const radX = (s.rotX * Math.PI) / 180;
      const radY = (s.rotY * Math.PI) / 180;

      // Xoay quanh trá»¥c Y
      let x1 = p.x * Math.cos(radY) + p.z * Math.sin(radY);
      let z1 = -p.x * Math.sin(radY) + p.z * Math.cos(radY);

      // Xoay quanh trá»¥c X
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

      // LÆ°á»›i ná»n khÃ´ng gian
      ctx.strokeStyle = 'rgba(226, 232, 240, 0.5)';
      ctx.lineWidth = 1;
      const step = 45 * dpr;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // 1. Cáº¡nh khung cÆ¡ sá»Ÿ hÃ¬nh chÃ³p S.ABCD
      // ÄÃ¡y: AB khuáº¥t (nÃ©t Ä‘á»©t), BC, CD, DA nÃ©t liá»n
      drawLine3D(A, B, '#94a3b8', 1.5, true);
      drawLine3D(B, C, '#94a3b8', 1.5, false);
      drawLine3D(C, D, '#94a3b8', 1.5, false);
      drawLine3D(D, A, '#94a3b8', 1.5, false);

      // Cáº¡nh bÃªn: SA khuáº¥t hoáº·c má» nháº¹, SB, SC, SD
      drawLine3D(S, A, '#64748b', 1.5, true);
      drawLine3D(S, B, '#64748b', 1.5, false);
      drawLine3D(S, C, '#64748b', 1.5, false);
      drawLine3D(S, D, '#64748b', 1.5, false);

      if (s.mode === 'parallel') {
        // CHáº¾ Äá»˜ 1: HAI ÄÆ¯á»œNG THáº²NG SONG SONG
        // Ná»•i báº­t AB // CD vÃ  Ä‘Æ°á»ng trung bÃ¬nh MN // AB // CD
        drawLine3D(A, B, '#10b981', 4, true); // AB nÃ©t Ä‘á»©t xanh lÃ¡ Ä‘áº­m
        drawLine3D(C, D, '#10b981', 4.5, false); // CD xanh lÃ¡ Ä‘áº­m
        drawLine3D(M, N, '#059669', 3.5, true); // MN Ä‘Æ°á»ng trung bÃ¬nh

        drawPoint3D(M, '#10b981', 5);
        drawPoint3D(N, '#10b981', 5);

        // ChÃº thÃ­ch
        ctx.fillStyle = '#0f172a';
        ctx.font = `bold ${15 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Hai Ä‘Æ°á»ng tháº³ng song song: AB // CD vÃ  MN // AB // CD (TÃ­nh cháº¥t báº¯c cáº§u)', 20, 35 * dpr);
        ctx.font = `${13 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = '#059669';
        ctx.fillText('âœ“ CÃ¹ng náº±m trong máº·t pháº³ng Ä‘Ã¡y (ABCD). Xoay hÃ¬nh 3D Ä‘á»ƒ quan sÃ¡t máº·t pháº³ng Ä‘á»“ng pháº³ng.', 20, 58 * dpr);

      } else if (s.mode === 'skew') {
        // CHáº¾ Äá»˜ 2: HAI ÄÆ¯á»œNG THáº²NG CHÃ‰O NHAU
        // Ná»•i báº­t SA (Ä‘á») vÃ  CD (vÃ ng cam)
        drawLine3D(S, A, '#ef4444', 4.5, false);
        drawLine3D(C, D, '#f59e0b', 4.5, false);

        // ChÃº thÃ­ch
        ctx.fillStyle = '#0f172a';
        ctx.font = `bold ${15 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau: SA vÃ  CD', 20, 35 * dpr);
        ctx.font = `${13 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = '#dc2626';
        ctx.fillText('âš ï¸ KhÃ´ng cÃ¹ng náº±m trong báº¥t ká»³ máº·t pháº³ng nÃ o! DÃ¹ng chuá»™t/ngÃ³n tay xoay 3 chiá»u Ä‘á»ƒ tháº¥y lá»‡ch táº§ng.', 20, 58 * dpr);

      } else if (s.mode === 'intersection') {
        // CHáº¾ Äá»˜ 3: Äá»ŠNH LÃ 3 GIAO TUYáº¾N
        // (SAB) chá»©a AB, (SCD) chá»©a CD; AB // CD => giao tuyáº¿n Sx // AB // CD
        drawLine3D(A, B, '#3b82f6', 3.5, true);
        drawLine3D(C, D, '#8b5cf6', 3.5, false);
        drawLine3D(Sx1, Sx2, '#ec4899', 4, false); // Giao tuyáº¿n Sx

        // Váº½ nhÃ£n Sx
        const prSx2 = project3D(Sx2);
        ctx.fillStyle = '#ec4899';
        ctx.font = `bold ${14 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Sx', prSx2.x + 8 * dpr, prSx2.y);

        ctx.fillStyle = '#0f172a';
        ctx.font = `bold ${15 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillText('Äá»‹nh lÃ½ 3 giao tuyáº¿n: (SAB) âˆ© (SCD) = Sx // AB // CD', 20, 35 * dpr);
        ctx.font = `${13 * dpr}px "Be Vietnam Pro", sans-serif`;
        ctx.fillStyle = '#db2777';
        ctx.fillText('âœ“ Hai máº·t pháº³ng chá»©a hai Ä‘Æ°á»ng tháº³ng song song, giao tuyáº¿n qua Ä‘iá»ƒm chung S song song vá»›i cáº£ hai Ä‘Æ°á»ng.', 20, 58 * dpr);
      }

      // Váº½ cÃ¡c Ä‘á»‰nh chÃ³p
      drawPoint3D(S, '#0284c7', 6);
      drawPoint3D(A, '#0284c7', 5);
      drawPoint3D(B, '#0284c7', 5);
      drawPoint3D(C, '#0284c7', 5);
      drawPoint3D(D, '#0284c7', 5);
    }

    resizeCanvas();

    // Báº¯t sá»± kiá»‡n xoay 3D báº±ng chuá»™t vÃ  cáº£m á»©ng touch
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

    // Chuyá»ƒn cháº¿ Ä‘á»™ tÆ°Æ¡ng tÃ¡c qua thanh cÃ´ng cá»¥
    let modeBar = document.getElementById('olm3DParallelModeBar');
    const cardEl = document.getElementById('olm3DCard');
    if (cardEl && !modeBar) {
      modeBar = document.createElement('div');
      modeBar.id = 'olm3DParallelModeBar';
      modeBar.style.cssText = 'display:flex;gap:8px;padding:8px 16px;background:#f8fafc;border-bottom:1px solid #e2e8f0;flex-wrap:wrap;';
      modeBar.innerHTML = `
        <button class="olm-btn-3d-tool active" id="btnParallelMode1"><i class="fa-solid fa-arrows-split-up-and-left"></i> ÄÆ°á»ng tháº³ng song song</button>
        <button class="olm-btn-3d-tool" id="btnParallelMode2"><i class="fa-solid fa-shuffle"></i> ÄÆ°á»ng tháº³ng chÃ©o nhau</button>
        <button class="olm-btn-3d-tool" id="btnParallelMode3"><i class="fa-solid fa-diagram-project"></i> Äá»‹nh lÃ½ giao tuyáº¿n</button>
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
  // 4B. LUYá»†N Táº¬P THÃCH á»¨NG CHO BÃ€I 11 Lá»šP 11: HAI ÄÆ¯á»œNG THáº²NG SONG SONG
  // =========================================================================
  const ADAPTIVE_GENERATORS_11_11 = {
    // Má»¨C Äá»˜ 1: NHáº¬N BIáº¾T (Vá»‹ trÃ­ tÆ°Æ¡ng Ä‘á»‘i trong khÃ´ng gian)
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
        prompt = `Cho hÃ¬nh chÃ³p $${p.S}.${p.A}${p.B}${p.C}${p.D}$ cÃ³ Ä‘Ã¡y lÃ  hÃ¬nh bÃ¬nh hÃ nh. Cáº·p Ä‘Æ°á»ng tháº³ng nÃ o sau Ä‘Ã¢y lÃ  <strong>hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau</strong>?`;
        correctAns = `$${p.S}${p.A}$ vÃ  $${p.C}${p.D}$`;
        expText = `Hai Ä‘Æ°á»ng tháº³ng $${p.S}${p.A}$ vÃ  $${p.C}${p.D}$ khÃ´ng cÃ¹ng náº±m trong báº¥t ká»³ máº·t pháº³ng nÃ o vÃ  khÃ´ng cÃ³ Ä‘iá»ƒm chung, do Ä‘Ã³ chÃºng lÃ  <strong>hai Ä‘Æ°á»ng tháº³ng chÃ©o nhau</strong>.`;
        distractors = [
          `$${p.A}${p.B}$ vÃ  $${p.C}${p.D}$`,
          `$${p.S}${p.A}$ vÃ  $${p.A}${p.B}$`,
          `$${p.A}${p.C}$ vÃ  $${p.B}${p.D}$`
        ];
      } else {
        prompt = `Cho hÃ¬nh chÃ³p $${p.S}.${p.A}${p.B}${p.C}${p.D}$ cÃ³ Ä‘Ã¡y lÃ  hÃ¬nh bÃ¬nh hÃ nh tÃ¢m $O$. Cáº·p Ä‘Æ°á»ng tháº³ng nÃ o sau Ä‘Ã¢y lÃ  <strong>hai Ä‘Æ°á»ng tháº³ng song song</strong> vá»›i nhau?`;
        correctAns = `$${p.A}${p.B}$ vÃ  $${p.C}${p.D}$`;
        expText = `VÃ¬ Ä‘Ã¡y $${p.A}${p.B}${p.C}${p.D}$ lÃ  hÃ¬nh bÃ¬nh hÃ nh nÃªn hai cáº¡nh Ä‘á»‘i $${p.A}${p.B}$ vÃ  $${p.C}${p.D}$ cÃ¹ng thuá»™c máº·t pháº³ng Ä‘Ã¡y vÃ  khÃ´ng cÃ³ Ä‘iá»ƒm chung, suy ra $${p.A}${p.B} // ${p.C}${p.D}$.`;
        distractors = [
          `$${p.S}${p.A}$ vÃ  $${p.C}${p.D}$`,
          `$${p.S}${p.A}$ vÃ  $${p.A}${p.D}$`,
          `$${p.S}${p.B}$ vÃ  $${p.A}${p.C}$`
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

    // Má»¨C Äá»˜ 2: THÃ”NG HIá»‚U (ÄÆ°á»ng trung bÃ¬nh & TÃ­nh cháº¥t báº¯c cáº§u)
    2: function () {
      const pyramids = [
        { S: 'S', A: 'A', B: 'B', C: 'C', D: 'D', M: 'M', N: 'N' },
        { S: 'S', A: 'M', B: 'N', C: 'P', D: 'Q', M: 'I', N: 'K' },
        { S: 'T', A: 'A', B: 'B', C: 'C', D: 'D', M: 'E', N: 'F' }
      ];
      const p = pyramids[Math.floor(Math.random() * pyramids.length)];

      const prompt = `Cho hÃ¬nh chÃ³p $${p.S}.${p.A}${p.B}${p.C}${p.D}$ cÃ³ Ä‘Ã¡y $${p.A}${p.B}${p.C}${p.D}$ lÃ  hÃ¬nh bÃ¬nh hÃ nh. Gá»i $${p.M}, ${p.N}$ láº§n lÆ°á»£t lÃ  trung Ä‘iá»ƒm cá»§a $${p.S}${p.A}$ vÃ  $${p.S}${p.B}$. Kháº³ng Ä‘á»‹nh nÃ o sau Ä‘Ã¢y lÃ  <strong>ÄÃšNG</strong>?`;
      const correctAns = `$${p.M}${p.N} // ${p.C}${p.D}$`;
      const expText = `XÃ©t tam giÃ¡c $${p.S}${p.A}${p.B}$, ta cÃ³ $${p.M}, ${p.N}$ lÃ  trung Ä‘iá»ƒm cá»§a $${p.S}${p.A}$ vÃ  $${p.S}${p.B}$ nÃªn $${p.M}${p.N}$ lÃ  Ä‘Æ°á»ng trung bÃ¬nh cá»§a tam giÃ¡c, suy ra $${p.M}${p.N} // ${p.A}${p.B}$.<br>Láº¡i cÃ³ $${p.A}${p.B}${p.C}${p.D}$ lÃ  hÃ¬nh bÃ¬nh hÃ nh nÃªn $${p.A}${p.B} // ${p.C}${p.D}$.<br>Theo tÃ­nh cháº¥t báº¯c cáº§u cá»§a quan há»‡ song song trong khÃ´ng gian: $${p.M}${p.N} // ${p.C}${p.D}$.`;

      const distractors = [
        `$${p.M}${p.N}$ cáº¯t $${p.C}${p.D}$`,
        `$${p.M}${p.N}$ vÃ  $${p.C}${p.D}$ chÃ©o nhau`,
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

    // Má»¨C Äá»˜ 3: Váº¬N Dá»¤NG (Äá»‹nh lÃ½ giao tuyáº¿n cá»§a ba máº·t pháº³ng)
    3: function () {
      const shapes = [
        { name: 'hÃ¬nh thang', base: 'AB // CD, AB > CD', S: 'S', b1: 'AB', b2: 'CD' },
        { name: 'hÃ¬nh thang', base: 'AD // BC, AD > BC', S: 'S', b1: 'AD', b2: 'BC' },
        { name: 'hÃ¬nh bÃ¬nh hÃ nh', base: 'AB // CD', S: 'S', b1: 'AB', b2: 'CD' }
      ];
      const sh = shapes[Math.floor(Math.random() * shapes.length)];

      const prompt = `Cho hÃ¬nh chÃ³p $${sh.S}.ABCD$ cÃ³ Ä‘Ã¡y $ABCD$ lÃ  ${sh.name} (${sh.base}). Giao tuyáº¿n cá»§a hai máº·t pháº³ng $(${sh.S}${sh.b1})$ vÃ  $(${sh.S}${sh.b2})$ lÃ :`;
      const correctAns = `ÄÆ°á»ng tháº³ng qua $${sh.S}$ vÃ  song song vá»›i $${sh.b1}, ${sh.b2}$`;
      const expText = `Hai máº·t pháº³ng $(${sh.S}${sh.b1})$ vÃ  $(${sh.S}${sh.b2})$ cÃ³ Ä‘iá»ƒm chung $${sh.S}$ vÃ  láº§n lÆ°á»£t chá»©a hai Ä‘Æ°á»ng tháº³ng song song $${sh.b1} // ${sh.b2}$.<br>Theo Ä‘á»‹nh lÃ½ vá» giao tuyáº¿n cá»§a ba máº·t pháº³ng: Giao tuyáº¿n cá»§a hai máº·t pháº³ng náº¿u cÃ³ sáº½ Ä‘i qua Ä‘iá»ƒm chung $${sh.S}$ vÃ  song song vá»›i $${sh.b1}$ vÃ  $${sh.b2}$.`;

      const distractors = [
        `Äoáº¡n tháº³ng ná»‘i $${sh.S}$ vá»›i giao Ä‘iá»ƒm cá»§a hai cáº¡nh bÃªn`,
        `ÄÆ°á»ng tháº³ng qua $${sh.S}$ vÃ  cáº¯t cáº¡nh Ä‘Ã¡y $${sh.b1}$`,
        `ÄÆ°á»ng tháº³ng vuÃ´ng gÃ³c vá»›i máº·t pháº³ng Ä‘Ã¡y táº¡i $${sh.S}$`
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

    // Má»¨C Äá»˜ 4: Váº¬N Dá»¤NG CAO (Thiáº¿t diá»‡n song song & Chu vi khÃ´ng Ä‘á»•i)
    4: function () {
      const a = (Math.floor(Math.random() * 4) + 4) * 2; // 8, 10, 12, 14
      const b = (Math.floor(Math.random() * 3) + 3) * 2; // 6, 8, 10
      const chuVi = a + b;

      const prompt = `Cho tá»© diá»‡n $ABCD$ cÃ³ cáº·p cáº¡nh Ä‘á»‘i diá»‡n $AB = ${a}\\text{ cm}$ vÃ  $CD = ${b}\\text{ cm}$. Máº·t pháº³ng $(\\alpha)$ song song vá»›i cáº£ $AB$ vÃ  $CD$, cáº¯t cÃ¡c cáº¡nh $BC, BD, AD, AC$ láº§n lÆ°á»£t táº¡i bá»‘n Ä‘iá»ƒm $M, N, P, Q$. Thiáº¿t diá»‡n $MNPQ$ lÃ  hÃ¬nh gÃ¬ vÃ  chu vi cá»§a thiáº¿t diá»‡n Ä‘Ã³ báº±ng bao nhiÃªu?`;
      const correctAns = `HÃ¬nh bÃ¬nh hÃ nh, chu vi báº±ng $${chuVi}\\text{ cm}$`;
      const expText = `VÃ¬ máº·t pháº³ng $(\\alpha) // AB$ nÃªn cÃ¡c giao tuyáº¿n $MN // AB$ vÃ  $PQ // AB \\Rightarrow MN // PQ$.<br>TÆ°Æ¡ng tá»±, $(\\alpha) // CD$ nÃªn $MQ // CD$ vÃ  $NP // CD \\Rightarrow MQ // NP$.<br>Do Ä‘Ã³ tá»© giÃ¡c $MNPQ$ lÃ  <strong>hÃ¬nh bÃ¬nh hÃ nh</strong>.<br>Theo Ä‘á»‹nh lÃ½ Ta-lÃ©t: $\\frac{MN}{AB} = \\frac{CM}{CB}$ vÃ  $\\frac{MQ}{CD} = \\frac{BM}{BC}$.<br>Suy ra chu vi thiáº¿t diá»‡n lÃ : $2(MN + MQ) = 2\\left(\\frac{CM}{CB} \\cdot AB + \\frac{BM}{BC} \\cdot CD\\right) = AB + CD = ${a} + ${b} = ${chuVi}\\text{ cm}$ (luÃ´n khÃ´ng Ä‘á»•i vá»›i má»i vá»‹ trÃ­ cá»§a $(\\alpha)$!).`;

      const distractors = [
        `HÃ¬nh chá»¯ nháº­t, chu vi báº±ng $${chuVi + 4}\\text{ cm}$`,
        `HÃ¬nh thang cÃ¢n, chu vi báº±ng $${chuVi * 2}\\text{ cm}$`,
        `HÃ¬nh thoi, chu vi báº±ng $${a * 2}\\text{ cm}$`
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
  // 4. LUYá»†N Táº¬P THÃCH á»¨NG (ADAPTIVE PRACTICE 4 Má»¨C Äá»˜ & Äá»”I Sá» Tá»° Äá»˜NG)
  // =========================================================================
  const ADAPTIVE_GENERATORS_10_8 = {
    // Má»¨C Äá»˜ 1: NHáº¬N BIáº¾T
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
        prompt = `Cho ba Ä‘iá»ƒm phÃ¢n biá»‡t $${P1}, ${P2}, ${P3}$. Theo quy táº¯c tam giÃ¡c (ba Ä‘iá»ƒm), tá»•ng hai vÃ©ctÆ¡ $\\vec{${P1}${P2}} + \\vec{${P2}${P3}}$ báº±ng vÃ©ctÆ¡ nÃ o sau Ä‘Ã¢y?`;
        correctAns = `\\vec{${P1}${P3}}`;
        expText = `Theo quy táº¯c ba Ä‘iá»ƒm, Ä‘iá»ƒm cuá»‘i cá»§a vÃ©ctÆ¡ thá»© nháº¥t lÃ  Ä‘iá»ƒm Ä‘áº§u cá»§a vÃ©ctÆ¡ thá»© hai: $\\vec{${P1}${P2}} + \\vec{${P2}${P3}} = \\vec{${P1}${P3}}$.`;
        distractors = [
          `\\vec{${P3}${P1}}`,
          `\\vec{${P2}${P1}}`,
          `\\vec{0}`
        ];
      } else {
        prompt = `Cho ba Ä‘iá»ƒm phÃ¢n biá»‡t $${P1}, ${P2}, ${P3}$. Theo quy táº¯c trá»« hai vÃ©ctÆ¡ chung gá»‘c, hiá»‡u $\\vec{${P1}${P3}} - \\vec{${P1}${P2}}$ báº±ng vÃ©ctÆ¡ nÃ o sau Ä‘Ã¢y?`;
        correctAns = `\\vec{${P2}${P3}}`;
        expText = `Theo quy táº¯c hiá»‡u hai vÃ©ctÆ¡ chung gá»‘c: $\\vec{${P1}${P3}} - \\vec{${P1}${P2}} = \\vec{${P2}${P3}}$ (ngá»n sau ná»‘i vá» ngá»n trÆ°á»›c: Ä‘iá»ƒm ${P2} lÃ  Ä‘iá»ƒm Ä‘áº§u, Ä‘iá»ƒm ${P3} lÃ  Ä‘iá»ƒm cuá»‘i).`;
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

    // Má»¨C Äá»˜ 2: THÃ”NG HIá»‚U
    2: function () {
      const a = (Math.floor(Math.random() * 5) + 3); // 3, 4, 5, 6, 7
      const b = (Math.floor(Math.random() * 5) + 3);
      const isPerp = true; // tam giÃ¡c vuÃ´ng táº¡i A

      const c = Math.sqrt(a * a + b * b).toFixed(2);
      const prompt = `Cho tam giÃ¡c $ABC$ vuÃ´ng táº¡i $A$ cÃ³ $AB = ${a}$ vÃ  $AC = ${b}$. Äá»™ dÃ i cá»§a vÃ©ctÆ¡ tá»•ng $|\\vec{AB} + \\vec{AC}|$ báº±ng bao nhiÃªu?`;
      const correctAns = `${c}`;
      const expText = `Dá»±ng hÃ¬nh chá»¯ nháº­t $ABDC$. Theo quy táº¯c hÃ¬nh bÃ¬nh hÃ nh, $\\vec{AB} + \\vec{AC} = \\vec{AD}$. <br>Do tam giÃ¡c $ABC$ vuÃ´ng táº¡i $A$ nÃªn $ABDC$ lÃ  hÃ¬nh chá»¯ nháº­t, suy ra Ä‘Æ°á»ng chÃ©o $AD = \\sqrt{AB^2 + AC^2} = \\sqrt{${a}^2 + ${b}^2} = \\sqrt{${a*a + b*b}} \\approx ${c}$. <br>Váº­y $|\\vec{AB} + \\vec{AC}| = AD \\approx ${c}$.`;

      const distractors = [
        `${a + b}`, // Cá»™ng Ä‘áº¡i sá»‘
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

    // Má»¨C Äá»˜ 3: Váº¬N Dá»¤NG
    3: function () {
      const pts = ['M', 'N', 'P', 'Q'];
      const prompt = `Cho hÃ¬nh bÃ¬nh hÃ nh $ABCD$ tÃ¢m $O$. Vá»›i Ä‘iá»ƒm $M$ tuá»³ Ã½ trong máº·t pháº³ng, kháº³ng Ä‘á»‹nh nÃ o sau Ä‘Ã¢y lÃ  <strong>ÄÃšNG</strong>?`;
      const correctAns = `\\vec{MA} + \\vec{MC} = \\vec{MB} + \\vec{MD}`;
      const expText = `VÃ¬ $O$ lÃ  tÃ¢m hÃ¬nh bÃ¬nh hÃ nh $ABCD$ nÃªn $O$ lÃ  trung Ä‘iá»ƒm cá»§a cáº£ hai Ä‘Æ°á»ng chÃ©o $AC$ vÃ  $BD$. <br>Ãp dá»¥ng tÃ­nh cháº¥t trung Ä‘iá»ƒm vá»›i Ä‘iá»ƒm $M$ tuá»³ Ã½: <br>$\\vec{MA} + \\vec{MC} = 2\\vec{MO}$ vÃ  $\\vec{MB} + \\vec{MD} = 2\\vec{MO}$. <br>Tá»« Ä‘Ã³ suy ra: $\\vec{MA} + \\vec{MC} = \\vec{MB} + \\vec{MD}$.`;

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

    // Má»¨C Äá»˜ 4: Váº¬N Dá»¤NG CAO
    4: function () {
      const v_cano = (Math.floor(Math.random() * 4) + 12); // 12-15 km/h
      const v_dong = (Math.floor(Math.random() * 3) + 3);  // 3-5 km/h

      const v_thuc = Math.sqrt(v_cano * v_cano + v_dong * v_dong).toFixed(2);
      const prompt = `Má»™t chiáº¿c ca nÃ´ di chuyá»ƒn tá»« bá» sÃ´ng bÃªn nÃ y sang bá» sÃ´ng bÃªn kia. Váº­n tá»‘c riÃªng cá»§a ca nÃ´ Ä‘á»‘i vá»›i dÃ²ng nÆ°á»›c lÃ  $v_1 = ${v_cano}\\text{ km/h}$ hÆ°á»›ng vuÃ´ng gÃ³c vá»›i bá» sÃ´ng. Váº­n tá»‘c cá»§a dÃ²ng nÆ°á»›c cháº£y xiáº¿t lÃ  $v_2 = ${v_dong}\\text{ km/h}$ cháº£y xuÃ´i dÃ²ng. TÃ­nh tá»‘c Ä‘á»™ thá»±c táº¿ cá»§a chiáº¿c ca nÃ´ Ä‘á»‘i vá»›i bá» sÃ´ng.`;
      const correctAns = `${v_thuc} km/h`;
      const expText = `Gá»i $\\vec{v}_1$ lÃ  váº­n tá»‘c riÃªng cá»§a ca nÃ´ (hÆ°á»›ng vuÃ´ng gÃ³c bá» sÃ´ng) vÃ  $\\vec{v}_2$ lÃ  váº­n tá»‘c dÃ²ng nÆ°á»›c (hÆ°á»›ng xuÃ´i dÃ²ng). <br>Váº­n tá»‘c thá»±c táº¿ cá»§a ca nÃ´ Ä‘á»‘i vá»›i bá» lÃ  $\\vec{v} = \\vec{v}_1 + \\vec{v}_2$. <br>VÃ¬ hai chuyá»ƒn Ä‘á»™ng vuÃ´ng gÃ³c vá»›i nhau, Ã¡p dá»¥ng quy táº¯c hÃ¬nh chá»¯ nháº­t ta cÃ³: <br>$v = |\\vec{v}| = \\sqrt{v_1^2 + v_2^2} = \\sqrt{${v_cano}^2 + ${v_dong}^2} = \\sqrt{${v_cano*v_cano + v_dong*v_dong}} \\approx ${v_thuc}\\text{ km/h}$.`;

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

    // Chá»n bá»™ sinh Ä‘á» theo bÃ i há»c
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
      1: { text: 'Nháº­n biáº¿t (NB)', cls: 'nb' },
      2: { text: 'ThÃ´ng hiá»ƒu (TH)', cls: 'th' },
      3: { text: 'Váº­n dá»¥ng (VD)', cls: 'vd' },
      4: { text: 'Váº­n dá»¥ng cao (VDC)', cls: 'vdc' }
    }[level];

    cardEl.innerHTML = `
      <div class="olm-q-meta">
        <span class="olm-q-level-badge ${levelBadgeText.cls}">
          <i class="fa-solid fa-chart-simple"></i> ${levelBadgeText.text}
        </span>
        <button class="olm-btn-dynamic-reload" id="olmBtnRegenerateQ" title="Sinh dá»¯ liá»‡u sá»‘ vÃ  biáº¿n má»›i Ä‘á»ƒ luyá»‡n táº­p">
          <i class="fa-solid fa-arrows-rotate"></i> Äá»•i dá»¯ kiá»‡n tÆ°Æ¡ng tá»±
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
          <i class="fa-solid fa-circle-check"></i> Lá»i giáº£i chi tiáº¿t cá»§a Tháº§y SÃ¡ng:
        </div>
        <div class="olm-solution-body">${qData.explanation}</div>
      </div>
    `;

    // Render MathJax
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([cardEl]);
    }

    // Báº¯t sá»± kiá»‡n chá»n Ä‘Ã¡p Ã¡n
    const optButtons = cardEl.querySelectorAll('.olm-btn-q-opt');
    const solutionReveal = cardEl.querySelector('#olmSolutionReveal');

    optButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const chosen = parseInt(this.dataset.optIdx, 10);
        if (chosen === qData.correctIndex) {
          this.className = 'olm-btn-q-opt selected-correct';
          optButtons.forEach(b => b.disabled = true);
          solutionReveal.classList.add('show');

          // ÄÃ¡nh dáº¥u hoÃ n thÃ nh má»©c Ä‘á»™
          LESSON_ENGINE_STATE.progress.adaptiveCompleted[level] = true;
          LESSON_ENGINE_STATE.xp += 15;
          LESSON_ENGINE_STATE.stars += 1;
          updateProgress();
          playCelebrationSound(false);

          if (typeof window.showToast === 'function') {
            window.showToast(`ðŸŽ‰ ChÃ­nh xÃ¡c! Em Ä‘Ã£ vÆ°á»£t qua thá»­ thÃ¡ch Má»©c Ä‘á»™ ${level}! (+15 XP, +1 â­)`, 'success');
          }
        } else {
          this.className = 'olm-btn-q-opt selected-wrong';
          solutionReveal.classList.add('show');
          if (typeof window.showToast === 'function') {
            window.showToast('ChÆ°a chÃ­nh xÃ¡c rá»“i! Em hÃ£y xem lá»i giáº£i chi tiáº¿t vÃ  báº¥m "Äá»•i dá»¯ kiá»‡n tÆ°Æ¡ng tá»±" Ä‘á»ƒ lÃ m láº¡i nhÃ©!', 'warning');
          }
        }

        if (window.MathJax && MathJax.typesetPromise) {
          MathJax.typesetPromise([solutionReveal]);
        }
      });
    });

    // Báº¯t sá»± kiá»‡n Ä‘á»•i sá»‘ tÆ°Æ¡ng tá»±
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
  // 5. KHá»žI CHáº Y Há»† THá»NG BÃ€I Há»ŒC Sá» TÆ¯Æ NG TÃC
  // =========================================================================
  window.initInteractiveLessonEngine = function (lessonData) {
    if (!lessonData) return;

    LESSON_ENGINE_STATE.lessonId = lessonData.id;
    console.log(`[Interactive Engine] Khá»Ÿi cháº¡y bÃ i há»c sá»‘ tÆ°Æ¡ng tÃ¡c: ${lessonData.id} - ${lessonData.title}`);

    // 1. Cáº­p nháº­t tiáº¿n Ä‘á»™ ban Ä‘áº§u
    updateProgress();

    // 2. KÃ­ch hoáº¡t Interactive Audio náº¿u cÃ³
    if (lessonData.interactiveAudio) {
      initInteractiveAudio(lessonData.interactiveAudio);
    }

    // 3. Khá»Ÿi táº¡o Canvas phÃ¹ há»£p
    if (lessonData.id === '11-c4-b11') {
      // BÃ i há»c Lá»›p 11 (BÃ i 11): Canvas HÃ¬nh chÃ³p & Hai Ä‘Æ°á»ng tháº³ng song song 3D
      init3DParallelCanvasEngine();
    } else if (lessonData.id.startsWith('10-')) {
      // BÃ i há»c Lá»›p 10: Canvas Vector 2D
      init2DVectorCanvasEngine();
    } else {
      // BÃ i há»c Lá»›p 12: Canvas Space 3D
      if (typeof window.init3DCanvasEngine === 'function') {
        window.init3DCanvasEngine();
      }
    }

    // 4. Khá»Ÿi táº¡o Luyá»‡n táº­p thÃ­ch á»©ng
    setupAdaptiveLevelTabs();
    renderAdaptiveQuestion(1);

    // 5. Sá»± kiá»‡n nÃºt Resume trong Modal POI
    const btnResume = document.getElementById('olmBtnResumeAudio');
    if (btnResume) {
      btnResume.addEventListener('click', resumeAudioAfterPoi);
    }
  };

})();

window.initOlmLessonEngine = window.initInteractiveLessonEngine;
