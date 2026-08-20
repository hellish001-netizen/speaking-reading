const lessons = [
  {
    id: 'simple-present',
    title: 'Simple Present Tense',
    short: 'Simple Present',
    subtitle: 'Habits, facts, and routines',
    icon: '⏰',
    summary: 'Use the simple present to talk about routines, repeated actions, facts, and things that are generally true.',
    uses: [
      'Daily habits and routines: “I walk to school every day.”',
      'Facts and general truths: “Water boils at 100°C.”',
      'Schedules and timetables: “The class starts at 07:00.”'
    ],
    formulas: [
      '<strong>(+)</strong> Subject + V1 / V1+s/es',
      '<strong>(-)</strong> Subject + do/does not + V1',
      '<strong>(?)</strong> Do/Does + subject + V1?'
    ],
    examples: [
      ['She studies English every evening.', 'With she/he/it, the verb usually takes -s or -es.'],
      ['They do not play football on Monday.', 'Use do not with I/you/we/they.'],
      ['Does Rina live near the school?', 'After does, return the main verb to V1: live, not lives.']
    ],
    practice: [
      { q: 'My brother ___ (watch) television after dinner.', a: ['watches'] },
      { q: 'They ___ to school on Sunday. (negative: go)', a: ['do not go', "don't go"] },
      { q: '___ your teacher give homework every week?', a: ['does'] }
    ],
    tip: 'Ask students to describe three things they really do before school. Personal routines are harder to copy from Google because, tragically, Google still does not brush their teeth for them.'
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous Tense',
    short: 'Present Continuous',
    subtitle: 'Actions happening now',
    icon: '▶️',
    summary: 'Use the present continuous for actions happening now or around the present time, especially temporary activities.',
    uses: [
      'Something happening right now: “I am reading.”',
      'A temporary situation: “She is staying with her aunt this week.”',
      'A changing situation: “The weather is getting warmer.”'
    ],
    formulas: [
      '<strong>(+)</strong> Subject + am/is/are + V-ing',
      '<strong>(-)</strong> Subject + am/is/are not + V-ing',
      '<strong>(?)</strong> Am/Is/Are + subject + V-ing?'
    ],
    examples: [
      ['The students are working quietly.', 'Use are with plural subjects.'],
      ['I am not using my phone.', 'Use am with I.'],
      ['Is Budi writing the answer?', 'Put am/is/are before the subject in questions.']
    ],
    practice: [
      { q: 'Look! The monkey ___ (climb) the tree.', a: ['is climbing'] },
      { q: 'We ___ (study) English right now.', a: ['are studying'] },
      { q: '___ she listening to the teacher?', a: ['is'] }
    ],
    tip: 'Use the classroom itself. Ask, “What is X doing?” Students can answer from visible reality instead of searching the web for a sentence written by someone in Ohio.'
  },
  {
    id: 'simple-past',
    title: 'Simple Past Tense',
    short: 'Simple Past',
    subtitle: 'Finished actions in the past',
    icon: '⏪',
    summary: 'Use the simple past for actions or situations that started and finished in the past.',
    uses: [
      'Finished actions: “We visited the zoo yesterday.”',
      'A sequence of past events: “I woke up, ate breakfast, and left.”',
      'Past states: “She was tired after class.”'
    ],
    formulas: [
      '<strong>(+)</strong> Subject + V2',
      '<strong>(-)</strong> Subject + did not + V1',
      '<strong>(?)</strong> Did + subject + V1?'
    ],
    examples: [
      ['I watched a documentary last night.', 'Regular verbs usually add -ed.'],
      ['She did not bring her book.', 'After did not, use V1: bring, not brought.'],
      ['Did they see the orangutan?', 'After did, use V1: see, not saw.']
    ],
    practice: [
      { q: 'Yesterday, we ___ (visit) the library.', a: ['visited'] },
      { q: 'He ___ the task last night. (negative: finish)', a: ['did not finish', "didn't finish"] },
      { q: '___ you see the gorilla at the zoo?', a: ['did'] }
    ],
    tip: 'Give students a six-picture sequence and make them retell it using past verbs. Meaning first, verb correction second. Civilization will survive a missing -ed.'
  },
  {
    id: 'present-perfect',
    title: 'Present Perfect Tense',
    short: 'Present Perfect',
    subtitle: 'Past actions connected to now',
    icon: '🔗',
    summary: 'Use the present perfect when a past action is connected to the present, or when the exact past time is not important.',
    uses: [
      'Experiences: “I have visited Surabaya.”',
      'Actions with a result now: “She has lost her key.”',
      'Actions continuing until now: “We have studied here for two years.”'
    ],
    formulas: [
      '<strong>(+)</strong> Subject + have/has + V3',
      '<strong>(-)</strong> Subject + have/has not + V3',
      '<strong>(?)</strong> Have/Has + subject + V3?'
    ],
    examples: [
      ['They have finished the assignment.', 'Use have with I/you/we/they.'],
      ['Rina has never seen a gorilla.', 'Use has with she/he/it.'],
      ['Have you ever eaten durian?', 'Ever is common when asking about life experience.']
    ],
    practice: [
      { q: 'She ___ the project already. (complete)', a: ['has completed'] },
      { q: 'We ___ a wild orangutan. (never / see)', a: ['have never seen'] },
      { q: '___ they ever visited Bali?', a: ['have'] }
    ],
    tip: 'Use “Have you ever...?” questions about safe, ordinary experiences. Students interview classmates, then report the answers. Grammar suddenly has a reason to exist. Disturbing, but useful.'
  },
  {
    id: 'comparison',
    title: 'Comparatives & Superlatives',
    short: 'Comparison',
    subtitle: 'Comparing people, animals, and things',
    icon: '⚖️',
    summary: 'Use comparative forms to compare two things and superlative forms to compare one thing with a whole group.',
    uses: [
      'Comparative: compare two people or things.',
      'Superlative: show the highest or lowest degree in a group.',
      'Long adjectives usually use more/most instead of -er/-est.'
    ],
    formulas: [
      '<strong>Comparative:</strong> A + be + adjective-er + than + B',
      '<strong>Long adjective:</strong> A + be + more + adjective + than + B',
      '<strong>Superlative:</strong> Subject + be + the + adjective-est / most + adjective'
    ],
    examples: [
      ['A gorilla is heavier than a monkey.', 'heavy → heavier'],
      ['Orangutans are more solitary than chimpanzees.', 'Use more with many longer adjectives.'],
      ['This is the tallest tree in the garden.', 'Use the before superlatives.']
    ],
    practice: [
      { q: 'A tiger is ___ (large) than a house cat.', a: ['larger'] },
      { q: 'This is the ___ (interesting) animal in the article.', a: ['most interesting'] },
      { q: 'My classroom is ___ (quiet) than the canteen.', a: ['quieter'] }
    ],
    tip: 'Animal comparison works well because students already possess background knowledge. Give them two animals and force a claim plus evidence: “X is ___ than Y because...”'
  },
  {
    id: 'modals',
    title: 'Modal Verbs',
    short: 'Modal Verbs',
    subtitle: 'Ability, advice, obligation, and possibility',
    icon: '🧭',
    summary: 'Modal verbs such as can, should, must, and might add meaning like ability, advice, obligation, or possibility.',
    uses: [
      'can / cannot: ability or possibility',
      'should / should not: advice',
      'must / must not: strong obligation or prohibition',
      'might: possibility'
    ],
    formulas: [
      '<strong>(+)</strong> Subject + modal + V1',
      '<strong>(-)</strong> Subject + modal + not + V1',
      '<strong>(?)</strong> Modal + subject + V1?'
    ],
    examples: [
      ['Students should read the instruction first.', 'Should gives advice.'],
      ['You must not feed wild animals.', 'Must not expresses prohibition.'],
      ['A bekantan can swim well.', 'Can expresses ability.']
    ],
    practice: [
      { q: 'You ___ wear a helmet when riding a motorcycle. (strong obligation)', a: ['must'] },
      { q: 'Students ___ ask questions when they are confused. (advice)', a: ['should'] },
      { q: 'A young orangutan ___ climb very well. (ability)', a: ['can'] }
    ],
    tip: 'Turn classroom rules into modal sentences. Students decide which rules use should, must, or must not, then defend the difference in strength.'
  }
];

const finalQuiz = [
  { q: 'She ___ to school every day.', options: ['walk', 'walks', 'walking', 'walked'], answer: 1 },
  { q: 'Look! The students ___ a poster.', options: ['make', 'made', 'are making', 'have make'], answer: 2 },
  { q: 'We ___ the museum last Saturday.', options: ['visit', 'visited', 'have visit', 'visiting'], answer: 1 },
  { q: 'I ___ never ___ a komodo dragon.', options: ['have / seen', 'did / saw', 'am / seeing', 'has / seen'], answer: 0 },
  { q: 'A gorilla is ___ than a monkey.', options: ['heavy', 'heaviest', 'heavier', 'more heavy'], answer: 2 },
  { q: 'You ___ respect wildlife protection rules.', options: ['must', 'are', 'did', 'has'], answer: 0 },
  { q: 'Does she ___ English every night?', options: ['studies', 'studied', 'study', 'studying'], answer: 2 },
  { q: 'They did not ___ the answer.', options: ['knew', 'know', 'known', 'knowing'], answer: 1 },
  { q: 'This is the ___ interesting article in the magazine.', options: ['more', 'much', 'most', 'best'], answer: 2 },
  { q: '___ you ever visited another island?', options: ['Did', 'Are', 'Have', 'Do'], answer: 2 }
];

const state = {
  currentIndex: 0,
  completed: JSON.parse(localStorage.getItem('grammarLabCompleted') || '[]'),
  theme: localStorage.getItem('grammarLabTheme') || 'light',
  quizAnswers: {}
};

const lessonNav = document.getElementById('lessonNav');
const lessonView = document.getElementById('lessonView');
const pageTitle = document.getElementById('pageTitle');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const sidebar = document.getElementById('sidebar');

function normalize(value) {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function renderNav() {
  lessonNav.innerHTML = '';
  lessons.forEach((lesson, index) => {
    const btn = document.createElement('button');
    btn.className = `nav-btn ${state.currentIndex === index ? 'active' : ''}`;
    btn.type = 'button';
    btn.innerHTML = `
      <span class="nav-num">${index + 1}</span>
      <span class="nav-label">${lesson.short}<small>${lesson.subtitle}</small></span>
      <span class="nav-check">${state.completed.includes(lesson.id) ? '✓' : ''}</span>`;
    btn.addEventListener('click', () => {
      state.currentIndex = index;
      render();
      sidebar.classList.remove('open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    lessonNav.appendChild(btn);
  });

  const quizBtn = document.createElement('button');
  quizBtn.className = `nav-btn ${state.currentIndex === lessons.length ? 'active' : ''}`;
  quizBtn.type = 'button';
  quizBtn.innerHTML = `
    <span class="nav-num">★</span>
    <span class="nav-label">Final Quiz<small>10 mixed questions</small></span>
    <span class="nav-check"></span>`;
  quizBtn.addEventListener('click', () => {
    state.currentIndex = lessons.length;
    render();
    sidebar.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  lessonNav.appendChild(quizBtn);
}

function updateProgress() {
  const percent = Math.round((state.completed.length / lessons.length) * 100);
  progressText.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
}

function renderLesson(index) {
  const lesson = lessons[index];
  const template = document.getElementById('lessonTemplate');
  const node = template.content.cloneNode(true);

  pageTitle.textContent = lesson.title;
  node.querySelector('.lesson-tag').textContent = `Lesson ${index + 1} of ${lessons.length}`;
  node.querySelector('.lesson-title').textContent = lesson.title;
  node.querySelector('.lesson-summary').textContent = lesson.summary;
  node.querySelector('.lesson-icon').textContent = lesson.icon;

  const useList = node.querySelector('.use-list');
  lesson.uses.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    useList.appendChild(li);
  });

  const formulaBox = node.querySelector('.formula-box');
  lesson.formulas.forEach(line => {
    const div = document.createElement('div');
    div.className = 'formula-line';
    div.innerHTML = line;
    formulaBox.appendChild(div);
  });

  const exampleList = node.querySelector('.example-list');
  lesson.examples.forEach(([sentence, note], i) => {
    const div = document.createElement('div');
    div.className = 'example-item';
    div.innerHTML = `<span class="example-num">${i + 1}</span><p>${sentence}<span class="example-note">${note}</span></p>`;
    exampleList.appendChild(div);
  });

  const practiceList = node.querySelector('.practice-list');
  lesson.practice.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.innerHTML = `
      <p><strong>${i + 1}.</strong> ${item.q}</p>
      <div class="answer-row">
        <input class="answer-input" type="text" data-q="${i}" autocomplete="off" placeholder="Type your answer..." />
      </div>
      <span class="answer-key">Accepted answer: ${item.a[0]}</span>`;
    practiceList.appendChild(card);
  });

  const feedback = node.querySelector('.practice-feedback');
  const scoreBadge = node.querySelector('.practice-score');
  node.querySelector('.check-practice-btn').addEventListener('click', () => {
    let score = 0;
    const inputs = lessonView.querySelectorAll('.answer-input');
    inputs.forEach(input => {
      const qIndex = Number(input.dataset.q);
      const accepted = lesson.practice[qIndex].a.map(normalize);
      const correct = accepted.includes(normalize(input.value));
      input.classList.toggle('correct', correct);
      input.classList.toggle('incorrect', !correct);
      input.closest('.question-card').querySelector('.answer-key').classList.toggle('show', !correct);
      if (correct) score++;
    });
    scoreBadge.textContent = `${score} / ${lesson.practice.length}`;
    feedback.hidden = false;
    feedback.className = `feedback-box practice-feedback ${score === lesson.practice.length ? 'success' : 'warning'}`;
    feedback.textContent = score === lesson.practice.length
      ? 'Excellent. Every answer is correct.'
      : `You got ${score} of ${lesson.practice.length}. Check the highlighted answers and try again.`;
  });

  node.querySelector('.teacher-tip').textContent = lesson.tip;

  const completeBtn = node.querySelector('.complete-btn');
  const isComplete = state.completed.includes(lesson.id);
  completeBtn.textContent = isComplete ? '✓ Lesson completed' : 'Mark lesson complete';
  completeBtn.addEventListener('click', () => {
    if (!state.completed.includes(lesson.id)) {
      state.completed.push(lesson.id);
    } else {
      state.completed = state.completed.filter(id => id !== lesson.id);
    }
    localStorage.setItem('grammarLabCompleted', JSON.stringify(state.completed));
    render();
  });

  const prevBtn = node.querySelector('.prev-btn');
  const nextBtn = node.querySelector('.next-btn');
  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === lessons.length - 1 ? 'Final Quiz →' : 'Next →';

  prevBtn.addEventListener('click', () => {
    state.currentIndex = Math.max(0, state.currentIndex - 1);
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    state.currentIndex = Math.min(lessons.length, state.currentIndex + 1);
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  lessonView.innerHTML = '';
  lessonView.appendChild(node);
}

function renderQuiz() {
  pageTitle.textContent = 'Final Grammar Quiz';
  lessonView.innerHTML = `
    <div class="quiz-home">
      <section class="panel quiz-intro">
        <div class="big-icon">🎯</div>
        <span class="mini-label">FINAL CHECK</span>
        <h2>Grammar Challenge</h2>
        <p>Answer 10 mixed questions from all six lessons. Your result appears immediately after submission.</p>
      </section>
      <section class="panel" id="quizQuestions"></section>
    </div>`;

  const container = document.getElementById('quizQuestions');
  finalQuiz.forEach((item, qIndex) => {
    const block = document.createElement('div');
    block.className = 'quiz-question';
    block.innerHTML = `<p><strong>${qIndex + 1}.</strong> ${item.q}</p>`;
    item.options.forEach((option, oIndex) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `option-btn ${state.quizAnswers[qIndex] === oIndex ? 'selected' : ''}`;
      btn.textContent = option;
      btn.addEventListener('click', () => {
        state.quizAnswers[qIndex] = oIndex;
        renderQuiz();
      });
      block.appendChild(btn);
    });
    container.appendChild(block);
    const divider = document.createElement('hr');
    divider.style.cssText = 'border:0;border-top:1px solid var(--border);margin:22px 0;';
    container.appendChild(divider);
  });

  const submit = document.createElement('button');
  submit.className = 'primary-btn';
  submit.type = 'button';
  submit.textContent = 'Submit final quiz';
  submit.addEventListener('click', showQuizResult);
  container.appendChild(submit);
}

function showQuizResult() {
  let score = 0;
  finalQuiz.forEach((item, i) => {
    if (state.quizAnswers[i] === item.answer) score++;
  });
  const percent = score * 10;
  const message = percent >= 80
    ? 'Strong result. The grammar patterns are holding together.'
    : percent >= 60
      ? 'Decent foundation. Review the lessons you missed, then try again.'
      : 'You need another pass through the lessons. That is what practice is for, annoyingly enough.';

  lessonView.innerHTML = `
    <section class="panel quiz-result">
      <div class="big-icon">${percent >= 80 ? '🏆' : percent >= 60 ? '📘' : '🛠️'}</div>
      <span class="mini-label">YOUR RESULT</span>
      <div class="result-score">${score}/10</div>
      <h2>${percent}%</h2>
      <p style="color:var(--muted);max-width:600px;margin:0 auto 22px;line-height:1.7;">${message}</p>
      <button class="primary-btn" id="retryQuizBtn" type="button">Try quiz again</button>
      <button class="secondary-btn" id="backLessonBtn" type="button" style="margin-left:8px;">Back to lessons</button>
    </section>`;

  document.getElementById('retryQuizBtn').addEventListener('click', () => {
    state.quizAnswers = {};
    renderQuiz();
  });
  document.getElementById('backLessonBtn').addEventListener('click', () => {
    state.currentIndex = 0;
    render();
  });
}

function render() {
  renderNav();
  updateProgress();
  if (state.currentIndex < lessons.length) renderLesson(state.currentIndex);
  else renderQuiz();
}

function applyTheme() {
  document.body.classList.toggle('dark', state.theme === 'dark');
}

document.getElementById('themeBtn').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('grammarLabTheme', state.theme);
  applyTheme();
});

document.getElementById('menuBtn').addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.getElementById('resetProgressBtn').addEventListener('click', () => {
  state.completed = [];
  localStorage.removeItem('grammarLabCompleted');
  render();
});

applyTheme();
render();
