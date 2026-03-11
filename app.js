/* ==============================
   Motonauta Study App — app.js
   ============================== */

// --- Storage helpers ---
const Storage = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set(key, val) { localStorage.setItem(key, JSON.stringify(val)); },
  remove(key) { localStorage.removeItem(key); }
};

// --- State ---
let selectedTopic = 'all';

// --- Router ---
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + id);
  if (el) el.classList.add('active');
}

function navigate(hash) {
  window.location.hash = hash;
}

function handleRoute() {
  const hash = (window.location.hash || '#home').slice(1);
  const screen = ['home', 'flashcards', 'quiz', 'exam'].includes(hash) ? hash : 'home';
  showScreen(screen);
  if (screen === 'home') updateHomeStats();
}

window.addEventListener('hashchange', handleRoute);

// --- Utility ---
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function filterByTopic(list, topic) {
  return topic === 'all' ? list : list.filter(q => q.topic === topic);
}

function shuffleOptions(q) {
  const indices = [0, 1, 2, 3, 4];
  for (let i = 4; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    ...q,
    options: indices.map(i => q.options[i]),
    correctIndex: indices.indexOf(q.correctIndex)
  };
}

function topicLabel(topic) {
  return TOPICS[topic] || topic;
}

// --- Topic Chips (Home) ---
document.getElementById('topic-chips').addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('#topic-chips .chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  selectedTopic = chip.dataset.topic;
});

// --- Mode Cards ---
document.querySelectorAll('.mode-card').forEach(card => {
  card.addEventListener('click', () => {
    const mode = card.dataset.mode;
    if (mode === 'flashcards') initFlashCards();
    else if (mode === 'quiz') initQuizSetup();
    else if (mode === 'exam') initExamIntro();
    navigate(mode);
  });
});

// ==============================
// HOME SCREEN — Stats
// ==============================
function updateHomeStats() {
  const fc = Storage.get('flashcards', {});
  const knownCount = Object.values(fc).filter(v => v === 'know').length;
  document.getElementById('stat-cards').textContent = knownCount;

  const quizH = Storage.get('quizHistory', []);
  if (quizH.length > 0) {
    const avg = Math.round(quizH.reduce((s, q) => s + q.score, 0) / quizH.length * 10);
    document.getElementById('stat-quiz').textContent = avg + '%';
  } else {
    document.getElementById('stat-quiz').textContent = '-';
  }

  const examH = Storage.get('examHistory', []);
  document.getElementById('stat-exams').textContent = examH.length;
}

// Reset
document.getElementById('btn-reset').addEventListener('click', () => {
  if (confirm('Tem certeza que deseja resetar todo o progresso?')) {
    Storage.remove('flashcards');
    Storage.remove('quizHistory');
    Storage.remove('examHistory');
    updateHomeStats();
  }
});

// ==============================
// FLASH CARDS
// ==============================
let fcDeck = [];
let fcIndex = 0;
let fcFlipped = false;

function initFlashCards() {
  const fcStatus = Storage.get('flashcards', {});
  let pool = filterByTopic(questions, selectedTopic);

  // Build weighted deck: "review" cards appear 3x
  const weighted = [];
  pool.forEach(q => {
    const status = fcStatus[q.id];
    if (status === 'know') return; // skip known
    const times = status === 'review' ? 3 : 1;
    for (let i = 0; i < times; i++) weighted.push(q);
  });

  fcDeck = shuffle(weighted);
  // Dedupe consecutive same question
  const deduped = [];
  fcDeck.forEach(q => { if (deduped.length === 0 || deduped[deduped.length-1].id !== q.id) deduped.push(q); });
  fcDeck = deduped;

  fcIndex = 0;
  fcFlipped = false;

  const container = document.getElementById('fc-container');
  const actions = document.querySelector('.fc-actions');
  const empty = document.getElementById('fc-empty');
  const done = document.getElementById('fc-done');

  if (fcDeck.length === 0) {
    container.classList.add('hidden');
    actions.classList.add('hidden');
    done.classList.add('hidden');
    empty.classList.remove('hidden');
    return;
  }

  container.classList.remove('hidden');
  actions.classList.remove('hidden');
  empty.classList.add('hidden');
  done.classList.add('hidden');
  renderFlashCard();
}

function renderFlashCard() {
  if (fcIndex >= fcDeck.length) {
    document.getElementById('fc-container').classList.add('hidden');
    document.querySelector('.fc-actions').classList.add('hidden');
    document.getElementById('fc-done').classList.remove('hidden');
    return;
  }
  const q = fcDeck[fcIndex];
  document.getElementById('fc-topic').textContent = topicLabel(q.topic);
  document.getElementById('fc-question').textContent = q.question;
  document.getElementById('fc-answer').textContent = q.options[q.correctIndex];
  document.getElementById('fc-explanation').textContent = q.explanation;
  document.getElementById('fc-counter').textContent = `${fcIndex + 1}/${fcDeck.length}`;
  document.getElementById('fc-progress-fill').style.width = `${((fcIndex + 1) / fcDeck.length) * 100}%`;

  const card = document.getElementById('flashcard');
  card.classList.remove('flipped');
  fcFlipped = false;
}

document.getElementById('flashcard').addEventListener('click', () => {
  const card = document.getElementById('flashcard');
  fcFlipped = !fcFlipped;
  card.classList.toggle('flipped', fcFlipped);
});

document.getElementById('fc-sei').addEventListener('click', () => {
  if (fcIndex >= fcDeck.length) return;
  const fc = Storage.get('flashcards', {});
  fc[fcDeck[fcIndex].id] = 'know';
  Storage.set('flashcards', fc);
  fcIndex++;
  renderFlashCard();
});

document.getElementById('fc-revisar').addEventListener('click', () => {
  if (fcIndex >= fcDeck.length) return;
  const fc = Storage.get('flashcards', {});
  fc[fcDeck[fcIndex].id] = 'review';
  Storage.set('flashcards', fc);
  fcIndex++;
  renderFlashCard();
});

document.getElementById('fc-back').addEventListener('click', () => navigate('home'));
document.getElementById('fc-empty-back').addEventListener('click', () => navigate('home'));
document.getElementById('fc-done-back').addEventListener('click', () => navigate('home'));
document.getElementById('fc-done-restart').addEventListener('click', () => {
  // Reset all cards for this topic to allow re-study
  const fc = Storage.get('flashcards', {});
  const pool = filterByTopic(questions, selectedTopic);
  pool.forEach(q => { delete fc[q.id]; });
  Storage.set('flashcards', fc);
  initFlashCards();
});

// ==============================
// QUIZ MODE
// ==============================
let quizQuestions = [];
let quizIndex = 0;
let quizAnswers = [];
let quizTopic = 'all';
let quizAnswered = false;

function initQuizSetup() {
  document.getElementById('quiz-setup').classList.remove('hidden');
  document.getElementById('quiz-active').classList.add('hidden');
  document.getElementById('quiz-results').classList.add('hidden');
  quizTopic = 'all';
  document.querySelectorAll('#quiz-topic-select .chip').forEach(c => {
    c.classList.toggle('active', c.dataset.topic === 'all');
  });
}

document.getElementById('quiz-topic-select').addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('#quiz-topic-select .chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  quizTopic = chip.dataset.topic;
});

document.getElementById('quiz-start').addEventListener('click', () => {
  const pool = filterByTopic(questions, quizTopic);
  quizQuestions = shuffle(pool).slice(0, 10).map(shuffleOptions);
  quizIndex = 0;
  quizAnswers = [];
  quizAnswered = false;
  document.getElementById('quiz-setup').classList.add('hidden');
  document.getElementById('quiz-active').classList.remove('hidden');
  renderQuizQuestion();
});

function renderQuizQuestion() {
  quizAnswered = false;
  const q = quizQuestions[quizIndex];
  document.getElementById('quiz-counter').textContent = `${quizIndex + 1}/${quizQuestions.length}`;
  document.getElementById('quiz-topic-tag').textContent = topicLabel(q.topic);
  document.getElementById('quiz-question').textContent = q.question;
  document.getElementById('quiz-explanation').classList.add('hidden');
  document.getElementById('quiz-next').classList.add('hidden');

  const optContainer = document.getElementById('quiz-options');
  optContainer.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleQuizAnswer(i));
    optContainer.appendChild(btn);
  });
}

function handleQuizAnswer(idx) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = quizQuestions[quizIndex];
  const correct = idx === q.correctIndex;
  quizAnswers.push({ question: q, selectedIndex: idx, correct });

  const opts = document.querySelectorAll('#quiz-options .quiz-option');
  opts.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === q.correctIndex) btn.classList.add('correct');
    if (i === idx && !correct) btn.classList.add('wrong');
  });

  const expEl = document.getElementById('quiz-explanation');
  expEl.textContent = q.explanation;
  expEl.classList.remove('hidden');
  document.getElementById('quiz-next').classList.remove('hidden');
}

document.getElementById('quiz-next').addEventListener('click', () => {
  quizIndex++;
  if (quizIndex >= quizQuestions.length) {
    showQuizResults();
  } else {
    renderQuizQuestion();
  }
});

function showQuizResults() {
  document.getElementById('quiz-active').classList.add('hidden');
  document.getElementById('quiz-results').classList.remove('hidden');

  const correct = quizAnswers.filter(a => a.correct).length;
  const total = quizAnswers.length;
  const pct = Math.round((correct / total) * 100);
  const pass = pct >= 50;

  document.getElementById('quiz-results-score').innerHTML =
    `<span class="score-big ${pass ? 'score-pass' : 'score-fail'}">${correct}/${total}</span>` +
    `<span class="score-pct">${pct}% — ${pass ? 'Aprovado!' : 'Reprovado'}</span>`;

  // Save history
  const hist = Storage.get('quizHistory', []);
  hist.push({ date: new Date().toISOString(), score: correct / total, topic: quizTopic });
  Storage.set('quizHistory', hist);

  // Reset errors list
  document.getElementById('quiz-errors-list').classList.add('hidden');
  document.getElementById('quiz-errors-list').innerHTML = '';
}

document.getElementById('quiz-review-errors').addEventListener('click', () => {
  const container = document.getElementById('quiz-errors-list');
  if (!container.classList.contains('hidden')) {
    container.classList.add('hidden');
    return;
  }
  container.innerHTML = '';
  const errors = quizAnswers.filter(a => !a.correct);
  if (errors.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#2e7d32;padding:1rem;">Nenhum erro! Parabéns!</p>';
  } else {
    errors.forEach(a => {
      const div = document.createElement('div');
      div.className = 'error-item';
      div.innerHTML =
        `<p class="error-q">${a.question.question}</p>` +
        `<p class="error-yours">Sua resposta: ${a.question.options[a.selectedIndex]}</p>` +
        `<p class="error-correct">Correta: ${a.question.options[a.question.correctIndex]}</p>` +
        `<p class="error-explanation">${a.question.explanation}</p>`;
      container.appendChild(div);
    });
  }
  container.classList.remove('hidden');
});

document.getElementById('quiz-new').addEventListener('click', () => initQuizSetup());
document.getElementById('quiz-results-home').addEventListener('click', () => navigate('home'));
document.getElementById('quiz-back').addEventListener('click', () => navigate('home'));
document.getElementById('quiz-quit').addEventListener('click', () => {
  if (confirm('Sair do quiz? O progresso será perdido.')) initQuizSetup();
});

// ==============================
// EXAM SIMULATION
// ==============================
let examQuestions = [];
let examIndex = 0;
let examAnswers = [];
let examTimer = null;
let examTimeLeft = 0;

function initExamIntro() {
  document.getElementById('exam-intro').classList.remove('hidden');
  document.getElementById('exam-active').classList.add('hidden');
  document.getElementById('exam-results').classList.add('hidden');
}

document.getElementById('exam-start').addEventListener('click', () => {
  examQuestions = shuffle([...questions]).slice(0, 20).map(shuffleOptions);
  examAnswers = new Array(20).fill(-1);
  examIndex = 0;
  examTimeLeft = 90 * 60; // 1h30 in seconds

  document.getElementById('exam-intro').classList.add('hidden');
  document.getElementById('exam-active').classList.remove('hidden');

  renderExamQuestion();
  renderExamGrid();
  startExamTimer();
});

function startExamTimer() {
  clearInterval(examTimer);
  updateTimerDisplay();
  examTimer = setInterval(() => {
    examTimeLeft--;
    updateTimerDisplay();
    if (examTimeLeft <= 0) {
      clearInterval(examTimer);
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const h = Math.floor(examTimeLeft / 3600);
  const m = Math.floor((examTimeLeft % 3600) / 60);
  const s = examTimeLeft % 60;
  document.getElementById('exam-timer').textContent =
    `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function renderExamQuestion() {
  const q = examQuestions[examIndex];
  document.getElementById('exam-question-label').textContent = `Questão ${examIndex + 1} de 20`;
  document.getElementById('exam-question').textContent = q.question;

  const optContainer = document.getElementById('exam-options');
  optContainer.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'exam-option' + (examAnswers[examIndex] === i ? ' selected' : '');
    btn.textContent = opt;
    btn.addEventListener('click', () => {
      examAnswers[examIndex] = i;
      renderExamQuestion();
      renderExamGrid();
    });
    optContainer.appendChild(btn);
  });
}

function renderExamGrid() {
  const grid = document.getElementById('exam-grid');
  grid.innerHTML = '';
  for (let i = 0; i < examQuestions.length; i++) {
    const btn = document.createElement('button');
    btn.className = 'exam-grid-btn';
    if (examAnswers[i] >= 0) btn.classList.add('answered');
    if (i === examIndex) btn.classList.add('current');
    btn.textContent = i + 1;
    btn.addEventListener('click', () => {
      examIndex = i;
      renderExamQuestion();
      renderExamGrid();
    });
    grid.appendChild(btn);
  }
}

document.getElementById('exam-prev').addEventListener('click', () => {
  if (examIndex > 0) {
    examIndex--;
    renderExamQuestion();
    renderExamGrid();
  }
});

document.getElementById('exam-next-q').addEventListener('click', () => {
  if (examIndex < examQuestions.length - 1) {
    examIndex++;
    renderExamQuestion();
    renderExamGrid();
  }
});

document.getElementById('exam-finish').addEventListener('click', () => {
  const unanswered = examAnswers.filter(a => a === -1).length;
  const msg = unanswered > 0
    ? `Você tem ${unanswered} questão(ões) sem resposta. Deseja finalizar?`
    : 'Deseja finalizar o simulado?';
  if (confirm(msg)) finishExam();
});

function finishExam() {
  clearInterval(examTimer);
  document.getElementById('exam-active').classList.add('hidden');
  document.getElementById('exam-results').classList.remove('hidden');

  let correct = 0;
  const topicScores = {};
  examQuestions.forEach((q, i) => {
    if (!topicScores[q.topic]) topicScores[q.topic] = { correct: 0, total: 0 };
    topicScores[q.topic].total++;
    if (examAnswers[i] === q.correctIndex) {
      correct++;
      topicScores[q.topic].correct++;
    }
  });

  const pct = Math.round((correct / 20) * 100);
  const pass = correct >= 10;

  document.getElementById('exam-banner').className = 'results-banner ' + (pass ? 'pass' : 'fail');
  document.getElementById('exam-banner').textContent = pass ? 'APROVADO!' : 'REPROVADO';

  document.getElementById('exam-results-score').innerHTML =
    `<span class="score-big ${pass ? 'score-pass' : 'score-fail'}">${correct}/20</span>` +
    `<span class="score-pct">${pct}%</span>`;

  // Topic breakdown
  const breakdownEl = document.getElementById('exam-breakdown');
  breakdownEl.innerHTML = '<h3 style="margin-bottom:.75rem;font-size:1rem;">Resultado por Tema</h3>';
  Object.entries(topicScores).forEach(([topic, data]) => {
    const topicPct = Math.round((data.correct / data.total) * 100);
    const color = topicPct >= 50 ? '#2e7d32' : '#c62828';
    const div = document.createElement('div');
    div.className = 'breakdown-item';
    div.innerHTML =
      `<span>${topicLabel(topic)}</span>` +
      `<span style="display:flex;align-items:center;gap:.5rem;">` +
      `<span>${data.correct}/${data.total}</span>` +
      `<span class="breakdown-bar"><span class="breakdown-fill" style="width:${topicPct}%;background:${color}"></span></span>` +
      `</span>`;
    breakdownEl.appendChild(div);
  });

  // Save history
  const hist = Storage.get('examHistory', []);
  hist.push({ date: new Date().toISOString(), score: correct, passed: pass });
  Storage.set('examHistory', hist);

  // Reset review
  document.getElementById('exam-review-list').classList.add('hidden');
  document.getElementById('exam-review-list').innerHTML = '';
}

document.getElementById('exam-review').addEventListener('click', () => {
  const container = document.getElementById('exam-review-list');
  if (!container.classList.contains('hidden')) {
    container.classList.add('hidden');
    return;
  }
  container.innerHTML = '';
  examQuestions.forEach((q, i) => {
    const userAns = examAnswers[i];
    const isCorrect = userAns === q.correctIndex;
    const div = document.createElement('div');
    div.className = 'review-item ' + (isCorrect ? 'review-correct' : 'review-wrong');
    let html = `<p class="review-q">${i + 1}. ${q.question}</p>`;
    if (userAns >= 0) {
      html += `<p class="review-answer" style="color:${isCorrect ? '#2e7d32' : '#c62828'}">Sua resposta: ${q.options[userAns]}</p>`;
    } else {
      html += `<p class="review-answer" style="color:#666">Sem resposta</p>`;
    }
    if (!isCorrect) {
      html += `<p class="review-answer" style="color:#2e7d32;font-weight:600">Correta: ${q.options[q.correctIndex]}</p>`;
    }
    html += `<p class="error-explanation">${q.explanation}</p>`;
    div.innerHTML = html;
    container.appendChild(div);
  });
  container.classList.remove('hidden');
});

document.getElementById('exam-new').addEventListener('click', () => initExamIntro());
document.getElementById('exam-results-home').addEventListener('click', () => navigate('home'));
document.getElementById('exam-back').addEventListener('click', () => navigate('home'));
document.getElementById('exam-quit').addEventListener('click', () => {
  if (confirm('Sair do simulado? O progresso será perdido.')) {
    clearInterval(examTimer);
    initExamIntro();
  }
});

// ==============================
// INIT
// ==============================
handleRoute();
