const lessons = [
  {
    id: 'simple-present',
    title: 'Simple Present Tense',
    short: 'Simple Present',
    subtitle: 'Habits, facts, routines',
    icon: '⏰',
    summary: 'Use the simple present when an action is repeated, usual, scheduled, or generally true.',
    objective: 'I can identify and build simple-present sentences about routines and facts, including negative sentences and questions.',
    context: 'Every school day, Sinta <mark>wakes up</mark> at 5:30. She <mark>walks</mark> to school with her sister. Their first lesson <mark>starts</mark> at 7:00.',
    notice: {
      prompt: 'What happens to the verbs when the subject is “Sinta”, “she”, or “the lesson”?',
      answer: 'The affirmative verb usually gets -s or -es with he, she, it, or another singular third-person subject: walks, starts, studies.'
    },
    uses: [
      'Habits and routines: “I read before bed.”',
      'Facts and general truths: “Water boils at 100°C.”',
      'Schedules: “The bus leaves at 6:30.”'
    ],
    formulas: [
      '<strong>(+)</strong> Subject + V1 / V1+s/es',
      '<strong>(-)</strong> Subject + do/does not + V1',
      '<strong>(?)</strong> Do/Does + subject + V1?'
    ],
    mistake: 'After does or does not, use the base verb: “Does she study?” not “Does she studies?”',
    levels: [
      {
        name: 'Level 1 • Recognize',
        description: 'Choose the form that matches a routine or fact.',
        questions: [
          { type: 'choice', prompt: 'My brother ___ television after dinner.', options: ['watch', 'watches', 'watched'], answer: 1, explanation: '“My brother” is singular, so the affirmative verb takes -es: watches.' },
          { type: 'choice', prompt: 'Which sentence is correct?', options: ['She go to school every day.', 'She goes to school every day.', 'She going to school every day.'], answer: 1, explanation: 'A repeated routine with “she” uses goes.' },
          { type: 'choice', prompt: '___ your teacher give homework every week?', options: ['Do', 'Does', 'Did'], answer: 1, explanation: 'Use “Does” for a present-tense question with a singular third-person subject.' }
        ]
      },
      {
        name: 'Level 2 • Construct',
        description: 'Build the missing grammar yourself.',
        questions: [
          { type: 'text', prompt: 'Rina ___ English every evening. (study)', accepted: ['studies'], answerText: 'studies', explanation: 'study → studies after a consonant + y.' },
          { type: 'text', prompt: 'They ___ to school on Sunday. (negative: go)', accepted: ['do not go', "don't go"], answerText: 'do not go', explanation: 'With “they”, use do not + base verb.' },
          { type: 'text', prompt: 'Does Budi ___ near the school? (live)', accepted: ['live'], answerText: 'live', explanation: 'After “does”, the main verb returns to V1: live.' }
        ]
      },
      {
        name: 'Level 3 • Apply',
        description: 'Use the tense in meaning-based situations.',
        questions: [
          { type: 'choice', prompt: 'Adi is describing a fact about bekantan. Which sentence works best?', options: ['A bekantan lives near rivers and mangroves.', 'A bekantan lived near rivers every day.', 'A bekantan is live near rivers.'], answer: 0, explanation: 'A general fact uses the simple present: lives.' },
          { type: 'text', prompt: 'Turn this into a question: “Nina reads English stories every night.”', accepted: ['does nina read english stories every night?', 'does nina read english stories every night'], answerText: 'Does Nina read English stories every night?', explanation: 'Use Does + subject + V1. “reads” becomes “read”.' },
          { type: 'text', prompt: 'Correct the sentence: “My father don’t work on Sunday.”', accepted: ['my father does not work on sunday.', 'my father does not work on sunday', "my father doesn't work on sunday.", "my father doesn't work on sunday"], answerText: 'My father does not work on Sunday.', explanation: 'A singular third-person subject needs does not / doesn’t.' }
        ]
      }
    ],
    production: 'Write three true sentences about your normal school morning. Use at least one sentence with he/she/it or another singular person.',
    selfCheck: ['routine or fact', 'correct subject', 'V1 or V1+s/es', 'capital letter + punctuation'],
    teacherTip: 'Ask students for real routines before showing the formula. Collect several sentences orally, underline the verbs, then let students discover the he/she/it change before naming the rule.'
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous Tense',
    short: 'Present Continuous',
    subtitle: 'Actions happening now',
    icon: '▶',
    summary: 'Use the present continuous for actions happening now or around the present moment.',
    objective: 'I can describe what people or animals are doing now using am/is/are + verb-ing.',
    context: 'The class is quiet for once. Dimas <mark>is reading</mark>. Two students <mark>are drawing</mark> a poster, and I <mark>am checking</mark> their work.',
    notice: {
      prompt: 'What two grammatical parts appear before and inside every highlighted action?',
      answer: 'Each action uses a form of be (am/is/are) plus a verb ending in -ing.'
    },
    uses: [
      'An action happening right now.',
      'A temporary activity around the present time.',
      'A changing situation: “The river is getting higher.”'
    ],
    formulas: [
      '<strong>(+)</strong> Subject + am/is/are + V-ing',
      '<strong>(-)</strong> Subject + am/is/are not + V-ing',
      '<strong>(?)</strong> Am/Is/Are + subject + V-ing?'
    ],
    mistake: 'Do not remove the helping verb: “She is reading,” not “She reading.”',
    levels: [
      {
        name: 'Level 1 • Recognize',
        description: 'Identify the correct form for actions happening now.',
        questions: [
          { type: 'choice', prompt: 'Look! The monkey ___ the tree.', options: ['climbs', 'is climbing', 'climbed'], answer: 1, explanation: '“Look!” signals an action happening now, so use is climbing.' },
          { type: 'choice', prompt: 'We ___ English right now.', options: ['study', 'are studying', 'studied'], answer: 1, explanation: '“Right now” calls for are + studying.' },
          { type: 'choice', prompt: 'Which sentence is correct?', options: ['I am writing.', 'I is writing.', 'I writing.'], answer: 0, explanation: 'The subject “I” uses am.' }
        ]
      },
      {
        name: 'Level 2 • Construct',
        description: 'Supply the complete present-continuous form.',
        questions: [
          { type: 'text', prompt: 'Sari ___ to the teacher now. (listen)', accepted: ['is listening'], answerText: 'is listening', explanation: 'Sari = she, so use is + listening.' },
          { type: 'text', prompt: 'The boys ___ football at the moment. (play)', accepted: ['are playing'], answerText: 'are playing', explanation: 'Plural “boys” uses are + playing.' },
          { type: 'text', prompt: '___ she ___ a book? (read)', accepted: ['is she reading'], answerText: 'Is she reading', explanation: 'A question begins with Is, then subject, then V-ing.' }
        ]
      },
      {
        name: 'Level 3 • Apply',
        description: 'Choose or repair sentences based on the situation.',
        questions: [
          { type: 'choice', prompt: 'You can see an orangutan moving between branches now. Which report is best?', options: ['The orangutan moves between branches now.', 'The orangutan is moving between branches.', 'The orangutan moved between branches tomorrow.'], answer: 1, explanation: 'A visible action in progress uses is moving.' },
          { type: 'text', prompt: 'Correct: “They is making a presentation now.”', accepted: ['they are making a presentation now.', 'they are making a presentation now'], answerText: 'They are making a presentation now.', explanation: 'Plural “they” uses are, not is.' },
          { type: 'text', prompt: 'Make this negative: “Budi is using his phone.”', accepted: ['budi is not using his phone.', 'budi is not using his phone', "budi isn't using his phone.", "budi isn't using his phone"], answerText: 'Budi is not using his phone.', explanation: 'Place not after is.' }
        ]
      }
    ],
    production: 'Look around your classroom or another real place. Write three sentences describing actions you can actually observe now.',
    selfCheck: ['action happening now', 'am/is/are', 'verb + ing', 'sentence makes sense'],
    teacherTip: 'Use visible classroom actions as the input. Students can point, say the action, and then write it. This reduces the temptation to search for ready-made answers because the evidence is physically in front of them.'
  },
  {
    id: 'simple-past',
    title: 'Simple Past Tense',
    short: 'Simple Past',
    subtitle: 'Finished past events',
    icon: '↶',
    summary: 'Use the simple past for actions or situations that started and finished in the past.',
    objective: 'I can tell what happened in the past using V2, and I can form negative sentences and questions with did.',
    context: 'Yesterday our class <mark>visited</mark> the library. We <mark>looked</mark> for animal books, and Raka <mark>found</mark> a book about orangutans.',
    notice: {
      prompt: 'Which highlighted verb is irregular, and what do the three verbs tell us about time?',
      answer: '“Found” is irregular (find → found). All three verbs describe completed events in the past.'
    },
    uses: [
      'A completed action: “We visited the zoo yesterday.”',
      'A sequence of events in a recount.',
      'A past state: “The room was noisy.”'
    ],
    formulas: [
      '<strong>(+)</strong> Subject + V2',
      '<strong>(-)</strong> Subject + did not + V1',
      '<strong>(?)</strong> Did + subject + V1?'
    ],
    mistake: 'After did or did not, use V1: “Did she go?” not “Did she went?”',
    levels: [
      {
        name: 'Level 1 • Recognize',
        description: 'Identify completed past actions.',
        questions: [
          { type: 'choice', prompt: 'Yesterday, we ___ the library.', options: ['visit', 'visited', 'visiting'], answer: 1, explanation: '“Yesterday” signals completed past time, so use visited.' },
          { type: 'choice', prompt: 'Which sentence is correct?', options: ['Did you saw the gorilla?', 'Did you see the gorilla?', 'Do you saw the gorilla?'], answer: 1, explanation: 'After did, use V1: see.' },
          { type: 'choice', prompt: 'Rani ___ her homework last night.', options: ['finishes', 'finished', 'is finishing'], answer: 1, explanation: '“Last night” indicates a finished past action.' }
        ]
      },
      {
        name: 'Level 2 • Construct',
        description: 'Build past-tense forms without options.',
        questions: [
          { type: 'text', prompt: 'The students ___ a documentary yesterday. (watch)', accepted: ['watched'], answerText: 'watched', explanation: 'watch is regular: watch → watched.' },
          { type: 'text', prompt: 'He ___ the task last night. (negative: finish)', accepted: ['did not finish', "didn't finish"], answerText: 'did not finish', explanation: 'Use did not + V1.' },
          { type: 'text', prompt: '___ you ___ the article? (read)', accepted: ['did you read'], answerText: 'Did you read', explanation: 'Use Did + subject + V1.' }
        ]
      },
      {
        name: 'Level 3 • Apply',
        description: 'Repair and select language for a short recount.',
        questions: [
          { type: 'choice', prompt: 'A recount says: “Last Sunday, my family ___ to the beach.”', options: ['go', 'went', 'goes'], answer: 1, explanation: 'go → went in the simple past.' },
          { type: 'text', prompt: 'Correct: “She did not brought her notebook yesterday.”', accepted: ['she did not bring her notebook yesterday.', 'she did not bring her notebook yesterday', "she didn't bring her notebook yesterday.", "she didn't bring her notebook yesterday"], answerText: 'She did not bring her notebook yesterday.', explanation: 'After did not, brought returns to bring.' },
          { type: 'text', prompt: 'Complete the sequence: “I woke up, ate breakfast, and ___ for school. (leave)”', accepted: ['left'], answerText: 'left', explanation: 'leave → left is irregular.' }
        ]
      }
    ],
    production: 'Write a four-sentence mini recount about something that happened yesterday or last weekend. Include at least one irregular verb.',
    selfCheck: ['finished past time', 'V2 in affirmative', 'did + V1 if needed', 'events in logical order'],
    teacherTip: 'Use picture sequences or a shared class event. Let students establish the event order first, then correct verbs. Recount meaning should not be buried under an avalanche of red ink.'
  },
  {
    id: 'present-perfect',
    title: 'Present Perfect Tense',
    short: 'Present Perfect',
    subtitle: 'Past connected to now',
    icon: '🔗',
    summary: 'Use the present perfect when a past action matters now or when the exact past time is not the focus.',
    objective: 'I can use have/has + V3 for experiences, present results, and situations continuing until now.',
    context: 'Our class <mark>has studied</mark> three endangered animals this month. I <mark>have learned</mark> several new words, but I <mark>have never seen</mark> a wild orangutan.',
    notice: {
      prompt: 'What words come before the past participles studied, learned, and seen?',
      answer: 'The sentences use have or has before V3. The exact finished past time is not the main point.'
    },
    uses: [
      'Life experience: “I have visited Bali.”',
      'A past action with a result now: “She has lost her key.”',
      'A situation continuing until now: “We have studied here for two years.”'
    ],
    formulas: [
      '<strong>(+)</strong> Subject + have/has + V3',
      '<strong>(-)</strong> Subject + have/has not + V3',
      '<strong>(?)</strong> Have/Has + subject + V3?'
    ],
    mistake: 'Do not combine present perfect with a finished time such as “yesterday” in a basic sentence. Use simple past for a specific finished time.',
    levels: [
      {
        name: 'Level 1 • Recognize',
        description: 'Recognize have/has + V3 and its meaning.',
        questions: [
          { type: 'choice', prompt: 'I ___ never ___ a komodo dragon.', options: ['have / seen', 'did / saw', 'am / seeing'], answer: 0, explanation: 'Experience without a specific past time uses have seen.' },
          { type: 'choice', prompt: 'Rina ___ already finished the task.', options: ['have', 'has', 'did'], answer: 1, explanation: 'Rina = she, so use has.' },
          { type: 'choice', prompt: 'Which sentence is best?', options: ['We have visited the museum yesterday.', 'We visited the museum yesterday.', 'We have visit the museum yesterday.'], answer: 1, explanation: 'A specific finished time, “yesterday”, normally takes simple past.' }
        ]
      },
      {
        name: 'Level 2 • Construct',
        description: 'Build present-perfect forms.',
        questions: [
          { type: 'text', prompt: 'She ___ the project already. (complete)', accepted: ['has completed'], answerText: 'has completed', explanation: 'She → has + completed.' },
          { type: 'text', prompt: 'We ___ a wild orangutan. (never / see)', accepted: ['have never seen'], answerText: 'have never seen', explanation: 'We → have + never + V3 seen.' },
          { type: 'text', prompt: '___ they ever ___ Bali? (visit)', accepted: ['have they ever visited'], answerText: 'Have they ever visited', explanation: 'Question: Have + subject + ever + V3.' }
        ]
      },
      {
        name: 'Level 3 • Apply',
        description: 'Choose between present perfect and simple past.',
        questions: [
          { type: 'choice', prompt: 'Which is better if the exact time is unknown?', options: ['I have read that article.', 'I read that article last Tuesday.', 'I am read that article.'], answer: 0, explanation: 'Without a specific finished time, present perfect can focus on the current relevance.' },
          { type: 'text', prompt: 'Correct: “She have never saw a gorilla.”', accepted: ['she has never seen a gorilla.', 'she has never seen a gorilla'], answerText: 'She has never seen a gorilla.', explanation: 'She takes has, and the V3 of see is seen.' },
          { type: 'choice', prompt: 'Which sentence answers “Have you ever visited Jakarta?” naturally?', options: ['Yes, I have.', 'Yes, I did yesterday have.', 'Yes, I am.'], answer: 0, explanation: 'A short present-perfect answer repeats have.' }
        ]
      }
    ],
    production: 'Write three “Have you ever...?” questions for classmates about ordinary experiences, then write one possible short answer for each.',
    selfCheck: ['have/has', 'V3', 'no unnecessary finished time', 'experience/result meaning'],
    teacherTip: 'Contrast two timelines: “I visited Surabaya in 2025” versus “I have visited Surabaya.” Ask what information each sentence chooses to foreground rather than treating the tenses as interchangeable formulas.'
  },
  {
    id: 'comparison',
    title: 'Comparatives & Superlatives',
    short: 'Comparison',
    subtitle: 'Compare animals and things',
    icon: '⚖',
    summary: 'Use comparatives for two things and superlatives for one member of a larger group.',
    objective: 'I can compare people, animals, places, or objects using comparative and superlative adjective forms.',
    context: 'A gorilla is <mark>heavier than</mark> a proboscis monkey. An orangutan is often <mark>more solitary than</mark> a gorilla. Among the three, the gorilla is <mark>the heaviest</mark>.',
    notice: {
      prompt: 'Which phrase compares two things, and which phrase identifies one thing inside a group?',
      answer: 'Comparatives use forms such as heavier than or more solitary than. Superlatives use the + highest form, such as the heaviest.'
    },
    uses: [
      'Comparative: compare two people, animals, places, or things.',
      'Superlative: show the highest or lowest degree in a group.',
      'Longer adjectives often use more / most.'
    ],
    formulas: [
      '<strong>Short adjective:</strong> adjective-er + than',
      '<strong>Long adjective:</strong> more + adjective + than',
      '<strong>Superlative:</strong> the + adjective-est / most + adjective'
    ],
    mistake: 'Avoid double comparison: say “more interesting,” not “more interestinger.” English already has enough irregularity without inventing bonus irregularity.',
    levels: [
      {
        name: 'Level 1 • Recognize',
        description: 'Select correct comparative and superlative forms.',
        questions: [
          { type: 'choice', prompt: 'A tiger is ___ than a house cat.', options: ['large', 'larger', 'largest'], answer: 1, explanation: 'Comparing two things uses larger than.' },
          { type: 'choice', prompt: 'This is the ___ interesting article in the set.', options: ['more', 'most', 'interestinger'], answer: 1, explanation: 'A superlative with a longer adjective uses the most interesting.' },
          { type: 'choice', prompt: 'My classroom is ___ than the canteen.', options: ['quieter', 'quietest', 'more quietest'], answer: 0, explanation: 'Comparing two places uses quieter than.' }
        ]
      },
      {
        name: 'Level 2 • Construct',
        description: 'Form the adjective correctly.',
        questions: [
          { type: 'text', prompt: 'An elephant is ___ than a deer. (heavy)', accepted: ['heavier'], answerText: 'heavier', explanation: 'heavy → heavier.' },
          { type: 'text', prompt: 'This is the ___ animal in the article. (dangerous)', accepted: ['most dangerous'], answerText: 'most dangerous', explanation: 'Long adjective: the most dangerous.' },
          { type: 'text', prompt: 'A motorcycle is usually ___ than a bicycle. (fast)', accepted: ['faster'], answerText: 'faster', explanation: 'fast → faster.' }
        ]
      },
      {
        name: 'Level 3 • Apply',
        description: 'Make comparisons that fit real information.',
        questions: [
          { type: 'choice', prompt: 'Which sentence makes a complete comparison?', options: ['A gorilla is heavier.', 'A gorilla is heavier than a proboscis monkey.', 'A gorilla is the heavier than.'], answer: 1, explanation: 'A comparative normally identifies the second item with than.' },
          { type: 'text', prompt: 'Correct: “This book is more easier than that book.”', accepted: ['this book is easier than that book.', 'this book is easier than that book'], answerText: 'This book is easier than that book.', explanation: 'Do not combine more with the -er form.' },
          { type: 'text', prompt: 'Complete: “Of the three animals, the gorilla is ___.” (heavy)', accepted: ['the heaviest', 'heaviest'], answerText: 'the heaviest', explanation: 'A group of three requires a superlative: the heaviest.' }
        ]
      }
    ],
    production: 'Choose two animals you know. Write two comparative sentences and one superlative sentence. Add a reason or fact after at least one comparison.',
    selfCheck: ['two things → comparative', 'group → superlative', 'than used correctly', 'no double comparison'],
    teacherTip: 'Give students familiar animals or classroom objects and require a claim plus evidence: “X is ___ than Y because...” That shifts the task from adjective manipulation toward meaningful language.'
  },
  {
    id: 'modals',
    title: 'Modal Verbs',
    short: 'Modal Verbs',
    subtitle: 'Ability, advice, rules',
    icon: '🧭',
    summary: 'Modal verbs such as can, should, must, and might express ability, advice, obligation, prohibition, or possibility.',
    objective: 'I can choose a modal verb based on meaning and use modal + V1 correctly.',
    context: 'Visitors <mark>must follow</mark> park rules. They <mark>must not feed</mark> wild animals. A guide <mark>can explain</mark> the habitat, and visitors <mark>should listen</mark> carefully.',
    notice: {
      prompt: 'What form does the main verb take after must, can, and should?',
      answer: 'The main verb stays in its base form (V1): follow, feed, explain, listen.'
    },
    uses: [
      'can / cannot: ability or possibility.',
      'should / should not: advice.',
      'must / must not: strong obligation or prohibition.',
      'might: possibility.'
    ],
    formulas: [
      '<strong>(+)</strong> Subject + modal + V1',
      '<strong>(-)</strong> Subject + modal + not + V1',
      '<strong>(?)</strong> Modal + subject + V1?'
    ],
    mistake: 'Do not add -s after a modal: “She can swim,” not “She can swims.”',
    levels: [
      {
        name: 'Level 1 • Recognize',
        description: 'Choose a modal that matches the intended meaning.',
        questions: [
          { type: 'choice', prompt: 'You ___ wear a helmet when riding a motorcycle. (strong obligation)', options: ['must', 'might', 'can'], answer: 0, explanation: 'Must expresses strong obligation.' },
          { type: 'choice', prompt: 'Students ___ ask questions when they are confused. (advice)', options: ['should', 'must not', 'might not'], answer: 0, explanation: 'Should is suitable for advice.' },
          { type: 'choice', prompt: 'A young orangutan ___ climb very well. (ability)', options: ['can', 'should', 'must'], answer: 0, explanation: 'Can expresses ability.' }
        ]
      },
      {
        name: 'Level 2 • Construct',
        description: 'Supply the modal or repair the verb after it.',
        questions: [
          { type: 'text', prompt: 'Visitors ___ not throw rubbish in the forest. (strong prohibition)', accepted: ['must'], answerText: 'must', explanation: 'Must not expresses strong prohibition.' },
          { type: 'text', prompt: 'Correct the verb only: “She can swims well.” → She can ___.', accepted: ['swim'], answerText: 'swim', explanation: 'A modal is followed by V1.' },
          { type: 'text', prompt: 'You ___ review the lesson before the test. (advice)', accepted: ['should'], answerText: 'should', explanation: 'Should gives advice.' }
        ]
      },
      {
        name: 'Level 3 • Apply',
        description: 'Choose meaning carefully in realistic rules and advice.',
        questions: [
          { type: 'choice', prompt: 'A sign says feeding wild animals is prohibited. Which sentence is strongest?', options: ['You might not feed the animals.', 'You should not feed the animals.', 'You must not feed the animals.'], answer: 2, explanation: 'Must not communicates prohibition most clearly.' },
          { type: 'text', prompt: 'Correct: “Students should to read the instruction first.”', accepted: ['students should read the instruction first.', 'students should read the instruction first'], answerText: 'Students should read the instruction first.', explanation: 'After should, use V1 directly. Do not add “to”.' },
          { type: 'choice', prompt: 'The sky is very dark. It ___ rain later. (possibility)', options: ['must', 'might', 'can to'], answer: 1, explanation: 'Might expresses possibility without certainty.' }
        ]
      }
    ],
    production: 'Write four rules or pieces of advice for a school trip: one with can, one with should, one with must, and one with must not.',
    selfCheck: ['modal matches meaning', 'modal + V1', 'no “to” after modal', 'rule/advice is clear'],
    teacherTip: 'Have students rank rules from optional advice to absolute prohibition. The interesting learning happens in defending why a sentence needs should, must, or must not, not in memorizing a list of labels.'
  }
];

const finalQuiz = [
  { lesson: 'simple-present', q: 'She ___ to school every day.', options: ['walk', 'walks', 'walking', 'walked'], answer: 1 },
  { lesson: 'simple-present', q: 'Does Rina ___ English at home?', options: ['studies', 'study', 'studied', 'studying'], answer: 1 },
  { lesson: 'present-continuous', q: 'Look! The students ___ a poster.', options: ['make', 'made', 'are making', 'have made'], answer: 2 },
  { lesson: 'present-continuous', q: 'Which is correct?', options: ['I am reading now.', 'I is reading now.', 'I reading now.', 'I readed now.'], answer: 0 },
  { lesson: 'simple-past', q: 'We ___ the museum last Saturday.', options: ['visit', 'visited', 'have visit', 'visiting'], answer: 1 },
  { lesson: 'simple-past', q: 'They did not ___ the answer.', options: ['knew', 'know', 'known', 'knowing'], answer: 1 },
  { lesson: 'present-perfect', q: 'I ___ never ___ a komodo dragon.', options: ['have / seen', 'did / saw', 'am / seeing', 'has / seen'], answer: 0 },
  { lesson: 'present-perfect', q: '___ you ever visited another island?', options: ['Did', 'Are', 'Have', 'Do'], answer: 2 },
  { lesson: 'comparison', q: 'A gorilla is ___ than a monkey.', options: ['heavy', 'heaviest', 'heavier', 'more heavy'], answer: 2 },
  { lesson: 'comparison', q: 'This is the ___ interesting article in the set.', options: ['more', 'most', 'much', 'best'], answer: 1 },
  { lesson: 'modals', q: 'You ___ respect wildlife protection rules. (strong obligation)', options: ['must', 'are', 'did', 'has'], answer: 0 },
  { lesson: 'modals', q: 'Students should ___ the instructions first.', options: ['reads', 'read', 'to read', 'reading'], answer: 1 }
];

const STORAGE = {
  scores: 'grammarLabV2Scores',
  theme: 'grammarLabTheme',
  teacher: 'grammarLabTeacherMode',
  writing: 'grammarLabV2Writing'
};

const state = {
  currentIndex: 0,
  currentLevel: {},
  scores: JSON.parse(localStorage.getItem(STORAGE.scores) || '{}'),
  writing: JSON.parse(localStorage.getItem(STORAGE.writing) || '{}'),
  theme: localStorage.getItem(STORAGE.theme) || 'light',
  teacherMode: localStorage.getItem(STORAGE.teacher) === 'true',
  practiceAnswers: {},
  quizAnswers: {}
};

const lessonNav = document.getElementById('lessonNav');
const lessonView = document.getElementById('lessonView');
const pageTitle = document.getElementById('pageTitle');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const masteryText = document.getElementById('masteryText');
const sidebar = document.getElementById('sidebar');
const teacherModeBtn = document.getElementById('teacherModeBtn');

function normalize(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function lessonScoreRecord(lessonId) {
  if (!state.scores[lessonId]) state.scores[lessonId] = {};
  return state.scores[lessonId];
}

function bestScore(lessonId, levelIndex) {
  return Number(lessonScoreRecord(lessonId)[levelIndex] || 0);
}

function isLevelUnlocked(lessonId, levelIndex) {
  if (levelIndex === 0) return true;
  return bestScore(lessonId, levelIndex - 1) >= 2;
}

function isMastered(lessonId) {
  return bestScore(lessonId, 2) >= 2;
}

function masteredCount() {
  return lessons.filter(lesson => isMastered(lesson.id)).length;
}

function finalQuizUnlocked() {
  return masteredCount() === lessons.length;
}

function saveScores() {
  localStorage.setItem(STORAGE.scores, JSON.stringify(state.scores));
}

function applyTheme() {
  document.body.classList.toggle('dark', state.theme === 'dark');
}

function applyTeacherMode() {
  document.body.classList.toggle('teacher-mode', state.teacherMode);
  teacherModeBtn.textContent = `Teacher notes: ${state.teacherMode ? 'On' : 'Off'}`;
  teacherModeBtn.classList.toggle('active', state.teacherMode);
  teacherModeBtn.setAttribute('aria-pressed', String(state.teacherMode));
}

function updateProgress() {
  const mastered = masteredCount();
  const percent = Math.round((mastered / lessons.length) * 100);
  progressText.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
  masteryText.textContent = `${mastered} of ${lessons.length} lessons mastered`;
}

function renderNav() {
  lessonNav.innerHTML = '';
  lessons.forEach((lesson, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `nav-btn ${state.currentIndex === index ? 'active' : ''}`;
    const stage = [0, 1, 2].filter(level => bestScore(lesson.id, level) >= 2).length;
    btn.innerHTML = `
      <span class="nav-num">${index + 1}</span>
      <span class="nav-label">${lesson.short}<small>${stage}/3 levels passed</small></span>
      <span class="nav-check">${isMastered(lesson.id) ? '✓' : ''}</span>`;
    btn.addEventListener('click', () => {
      state.currentIndex = index;
      render();
      sidebar.classList.remove('open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    lessonNav.appendChild(btn);
  });

  const quizBtn = document.createElement('button');
  quizBtn.type = 'button';
  quizBtn.className = `nav-btn ${state.currentIndex === lessons.length ? 'active' : ''} ${finalQuizUnlocked() ? '' : 'locked'}`;
  quizBtn.innerHTML = `
    <span class="nav-num">★</span>
    <span class="nav-label">Final Quiz<small>${finalQuizUnlocked() ? '12 mixed questions' : 'Master all lessons first'}</small></span>
    <span class="nav-check">${finalQuizUnlocked() ? '→' : '🔒'}</span>`;
  quizBtn.addEventListener('click', () => {
    state.currentIndex = lessons.length;
    render();
    sidebar.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  lessonNav.appendChild(quizBtn);
}

function renderStepHeading(number, label, title, description) {
  return `
    <div class="step-heading">
      <span class="step-number">${number}</span>
      <div>
        <span class="mini-label">${label}</span>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    </div>`;
}

function renderLesson(index) {
  const lesson = lessons[index];
  const selectedLevel = state.currentLevel[lesson.id] ?? 0;
  pageTitle.textContent = lesson.title;

  lessonView.innerHTML = `
    <article class="lesson-stack">
      <section class="lesson-hero">
        <div class="lesson-hero-top">
          <div>
            <span class="lesson-tag">Lesson ${index + 1} of ${lessons.length}</span>
            <h1 class="lesson-title">${lesson.title}</h1>
            <p class="lesson-summary">${lesson.summary}</p>
          </div>
          <div class="lesson-icon" aria-hidden="true">${lesson.icon}</div>
        </div>
        <div class="objective-box">
          <strong>Learning target</strong>
          <p>${lesson.objective}</p>
        </div>
      </section>

      <section class="panel" id="noticeSection">
        ${renderStepHeading(1, 'SEE + NOTICE', 'Start with meaning', 'Read the short situation first. Then notice the grammar pattern before memorizing a rule.')}
        <div class="context-card">${lesson.context}</div>
        <div class="notice-box">
          <div class="notice-prompt">${lesson.notice.prompt}</div>
          <button class="secondary-btn reveal-btn" id="revealNoticeBtn" type="button">Reveal pattern</button>
          <div class="reveal-answer" id="noticeAnswer" hidden>${lesson.notice.answer}</div>
        </div>
      </section>

      <section class="panel">
        ${renderStepHeading(2, 'UNDERSTAND', 'Build the rule from the pattern', 'Use the rule as a tool for meaning, not as decorative grammar furniture.')}
        <div class="learning-grid">
          <div>
            <h3>When do we use it?</h3>
            <ul class="use-list">${lesson.uses.map(item => `<li>${item}</li>`).join('')}</ul>
          </div>
          <div>
            <h3>Basic pattern</h3>
            <div class="formula-box">${lesson.formulas.map(line => `<div class="formula-line">${line}</div>`).join('')}</div>
          </div>
        </div>
        <div class="mistake-callout"><strong>Common trap:</strong> ${lesson.mistake}</div>
      </section>

      <section class="panel" id="practiceSection">
        ${renderStepHeading(3, 'TRY IT', 'Practice in three levels', 'Pass at least 2 of 3 questions to unlock the next level. Difficulty increases from recognition to application.')}
        <div class="level-switcher" id="levelSwitcher"></div>
        <div id="levelContent"></div>
      </section>

      <section class="panel">
        ${renderStepHeading(4, 'USE IT', 'Produce your own English', 'This part is not automatically graded. The goal is to make the grammar carry your own meaning.')}
        <div class="production-box">
          <div class="production-prompt">${lesson.production}</div>
          <textarea id="productionText" placeholder="Write your answer here...">${escapeHtml(state.writing[lesson.id] || '')}</textarea>
          <div class="self-check">${lesson.selfCheck.map(item => `<span>✓ ${item}</span>`).join('')}</div>
          <p class="mini-save" style="margin:0;color:var(--muted);font-size:.78rem;">Your writing is saved only in this browser.</p>
        </div>
      </section>

      <section class="panel teacher-panel">
        <span class="mini-label">TEACHER NOTE</span>
        <h3>How to use this lesson</h3>
        <p>${lesson.teacherTip}</p>
      </section>

      ${isMastered(lesson.id) ? `
        <section class="mastery-banner">
          <div class="big">✓</div>
          <div><h3>Lesson mastered</h3><p>You passed Level 3. The lesson now counts toward the final quiz unlock.</p></div>
        </section>` : ''}

      <div class="lesson-actions">
        <button class="secondary-btn" id="prevLessonBtn" type="button" ${index === 0 ? 'disabled' : ''}>← Previous lesson</button>
        <button class="secondary-btn" id="nextLessonBtn" type="button">${index === lessons.length - 1 ? 'Final quiz →' : 'Next lesson →'}</button>
      </div>
    </article>`;

  document.getElementById('revealNoticeBtn').addEventListener('click', () => {
    const answer = document.getElementById('noticeAnswer');
    answer.hidden = !answer.hidden;
    document.getElementById('revealNoticeBtn').textContent = answer.hidden ? 'Reveal pattern' : 'Hide pattern';
  });

  document.getElementById('productionText').addEventListener('input', event => {
    state.writing[lesson.id] = event.target.value;
    localStorage.setItem(STORAGE.writing, JSON.stringify(state.writing));
  });

  renderLevelSwitcher(lesson, selectedLevel);
  renderLevelContent(lesson, selectedLevel);

  document.getElementById('prevLessonBtn').addEventListener('click', () => {
    state.currentIndex = Math.max(0, state.currentIndex - 1);
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('nextLessonBtn').addEventListener('click', () => {
    state.currentIndex = Math.min(lessons.length, state.currentIndex + 1);
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function answerKey(lessonId, levelIndex, questionIndex) {
  return `${lessonId}:${levelIndex}:${questionIndex}`;
}

function renderLevelSwitcher(lesson, selectedLevel) {
  const switcher = document.getElementById('levelSwitcher');
  switcher.innerHTML = '';
  lesson.levels.forEach((level, levelIndex) => {
    const unlocked = isLevelUnlocked(lesson.id, levelIndex);
    const score = bestScore(lesson.id, levelIndex);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.disabled = !unlocked;
    btn.className = `level-tab ${selectedLevel === levelIndex ? 'active' : ''}`;
    btn.textContent = `${unlocked ? '' : '🔒 '}${level.name}${score ? ` • ${score}/3` : ''}`;
    btn.addEventListener('click', () => {
      state.currentLevel[lesson.id] = levelIndex;
      renderLevelSwitcher(lesson, levelIndex);
      renderLevelContent(lesson, levelIndex);
    });
    switcher.appendChild(btn);
  });
}

function renderLevelContent(lesson, levelIndex) {
  const container = document.getElementById('levelContent');
  if (!isLevelUnlocked(lesson.id, levelIndex)) {
    container.innerHTML = `<div class="lock-message">Pass the previous level with at least 2/3 correct answers to unlock this level.</div>`;
    return;
  }

  const level = lesson.levels[levelIndex];
  const previousBest = bestScore(lesson.id, levelIndex);
  container.innerHTML = `
    <div class="level-meta">
      <div><h4>${level.name}</h4><p>${level.description}</p></div>
      <span class="score-badge" id="levelScoreBadge">Best: ${previousBest}/3</span>
    </div>
    <div class="question-list" id="questionList"></div>
    <div class="level-actions">
      <button class="primary-btn" id="checkLevelBtn" type="button">Check this level</button>
      <button class="secondary-btn" id="clearLevelBtn" type="button">Clear answers</button>
    </div>
    <div id="levelSummary" class="feedback-box" hidden></div>`;

  const questionList = document.getElementById('questionList');
  level.questions.forEach((question, questionIndex) => {
    const key = answerKey(lesson.id, levelIndex, questionIndex);
    const card = document.createElement('div');
    card.className = 'question-card';
    card.dataset.question = String(questionIndex);
    card.innerHTML = `<p><strong>${questionIndex + 1}.</strong> ${question.prompt}</p>`;

    if (question.type === 'choice') {
      const choices = document.createElement('div');
      choices.className = 'choice-grid';
      question.options.forEach((option, optionIndex) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `choice-btn ${state.practiceAnswers[key] === optionIndex ? 'selected' : ''}`;
        btn.textContent = option;
        btn.addEventListener('click', () => {
          state.practiceAnswers[key] = optionIndex;
          choices.querySelectorAll('.choice-btn').forEach((choiceBtn, i) => {
            choiceBtn.classList.toggle('selected', i === optionIndex);
          });
        });
        choices.appendChild(btn);
      });
      card.appendChild(choices);
    } else {
      const input = document.createElement('input');
      input.className = 'answer-input';
      input.type = 'text';
      input.autocomplete = 'off';
      input.placeholder = 'Type your answer...';
      input.value = state.practiceAnswers[key] || '';
      input.addEventListener('input', event => {
        state.practiceAnswers[key] = event.target.value;
      });
      card.appendChild(input);
    }

    questionList.appendChild(card);
  });

  document.getElementById('checkLevelBtn').addEventListener('click', () => checkLevel(lesson, levelIndex));
  document.getElementById('clearLevelBtn').addEventListener('click', () => {
    level.questions.forEach((_, questionIndex) => delete state.practiceAnswers[answerKey(lesson.id, levelIndex, questionIndex)]);
    renderLevelContent(lesson, levelIndex);
  });
}

function isQuestionCorrect(question, response) {
  if (question.type === 'choice') return Number(response) === question.answer;
  return question.accepted.map(normalize).includes(normalize(response));
}

function checkLevel(lesson, levelIndex) {
  const level = lesson.levels[levelIndex];
  let score = 0;

  level.questions.forEach((question, questionIndex) => {
    const key = answerKey(lesson.id, levelIndex, questionIndex);
    const response = state.practiceAnswers[key];
    const correct = isQuestionCorrect(question, response);
    if (correct) score++;

    const card = document.querySelector(`.question-card[data-question="${questionIndex}"]`);
    card.classList.toggle('correct-card', correct);
    card.classList.toggle('incorrect-card', !correct);
    const previousFeedback = card.querySelector('.question-feedback');
    if (previousFeedback) previousFeedback.remove();

    const feedback = document.createElement('div');
    feedback.className = `question-feedback ${correct ? 'correct' : 'incorrect'}`;
    const answerText = question.type === 'choice' ? question.options[question.answer] : question.answerText;
    feedback.textContent = correct
      ? `Correct. ${question.explanation}`
      : `Not yet. ${question.explanation} Model answer: ${answerText}`;
    card.appendChild(feedback);
  });

  const record = lessonScoreRecord(lesson.id);
  record[levelIndex] = Math.max(Number(record[levelIndex] || 0), score);
  saveScores();

  const passed = score >= 2;
  const summary = document.getElementById('levelSummary');
  summary.hidden = false;
  summary.className = `feedback-box ${passed ? 'success' : 'warning'}`;
  if (passed && levelIndex < 2) {
    summary.textContent = `${score}/3 correct. Level passed. The next level is now unlocked.`;
  } else if (passed) {
    summary.textContent = `${score}/3 correct. Level passed. You have demonstrated lesson mastery.`;
  } else {
    summary.textContent = `${score}/3 correct. Review the explanations, change your answers, and try again. You need 2/3 to continue.`;
  }

  document.getElementById('levelScoreBadge').textContent = `Best: ${bestScore(lesson.id, levelIndex)}/3`;
  renderLevelSwitcher(lesson, levelIndex);
  renderNav();
  updateProgress();

  if (isMastered(lesson.id) && !document.querySelector('.mastery-banner')) {
    const actions = document.querySelector('.lesson-actions');
    const banner = document.createElement('section');
    banner.className = 'mastery-banner';
    banner.innerHTML = '<div class="big">✓</div><div><h3>Lesson mastered</h3><p>You passed Level 3. The lesson now counts toward the final quiz unlock.</p></div>';
    actions.before(banner);
  }
}

function renderQuiz() {
  pageTitle.textContent = 'Final Grammar Quiz';

  if (!finalQuizUnlocked()) {
    const remaining = lessons.length - masteredCount();
    lessonView.innerHTML = `
      <section class="panel locked-quiz">
        <div class="big-icon">🔒</div>
        <span class="mini-label">FINAL CHECK</span>
        <h2>Final quiz is still locked</h2>
        <p style="color:var(--muted);line-height:1.65;max-width:620px;margin:0 auto 20px;">Master all six lessons first. You still have ${remaining} lesson${remaining === 1 ? '' : 's'} to master. A lesson is mastered after you score at least 2/3 on Level 3.</p>
        <button class="primary-btn" id="returnLessonsBtn" type="button">Return to lessons</button>
      </section>`;
    document.getElementById('returnLessonsBtn').addEventListener('click', () => {
      const firstIncomplete = lessons.findIndex(lesson => !isMastered(lesson.id));
      state.currentIndex = firstIncomplete >= 0 ? firstIncomplete : 0;
      render();
    });
    return;
  }

  lessonView.innerHTML = `
    <div class="quiz-home">
      <section class="panel quiz-intro">
        <div class="big-icon">🎯</div>
        <span class="mini-label">FINAL CHECK</span>
        <h2>Mixed Grammar Challenge</h2>
        <p>Answer 12 questions across all six lessons. After submission, you will see which grammar areas are secure and which ones deserve another visit.</p>
      </section>
      <section class="panel" id="quizQuestions"></section>
    </div>`;

  const container = document.getElementById('quizQuestions');
  finalQuiz.forEach((item, qIndex) => {
    const block = document.createElement('div');
    block.className = 'quiz-question';
    block.innerHTML = `<p><strong>${qIndex + 1}.</strong> ${item.q}</p>`;
    const choices = document.createElement('div');
    choices.className = 'choice-grid';
    item.options.forEach((option, optionIndex) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `choice-btn ${state.quizAnswers[qIndex] === optionIndex ? 'selected' : ''}`;
      btn.textContent = option;
      btn.addEventListener('click', () => {
        state.quizAnswers[qIndex] = optionIndex;
        choices.querySelectorAll('.choice-btn').forEach((choiceBtn, i) => choiceBtn.classList.toggle('selected', i === optionIndex));
      });
      choices.appendChild(btn);
    });
    block.appendChild(choices);
    container.appendChild(block);
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
  const breakdown = Object.fromEntries(lessons.map(lesson => [lesson.id, { correct: 0, total: 0 }]));

  finalQuiz.forEach((item, index) => {
    breakdown[item.lesson].total++;
    if (state.quizAnswers[index] === item.answer) {
      score++;
      breakdown[item.lesson].correct++;
    }
  });

  const percent = Math.round((score / finalQuiz.length) * 100);
  const message = percent >= 80
    ? 'Strong result. Most grammar patterns are working reliably.'
    : percent >= 60
      ? 'A workable foundation. Review the weaker categories before another attempt.'
      : 'The result shows several unstable patterns. Return to the weakest lessons and rebuild them level by level.';

  lessonView.innerHTML = `
    <section class="panel quiz-result">
      <div style="font-size:3.2rem;">${percent >= 80 ? '🏆' : percent >= 60 ? '📘' : '🛠'}</div>
      <span class="mini-label">YOUR RESULT</span>
      <div class="result-score">${score}/${finalQuiz.length}</div>
      <h2>${percent}%</h2>
      <p style="color:var(--muted);max-width:640px;margin:0 auto;line-height:1.65;">${message}</p>
      <div class="review-grid">
        ${lessons.map(lesson => {
          const result = breakdown[lesson.id];
          const status = result.correct === result.total ? 'Secure' : result.correct >= 1 ? 'Review once' : 'Needs review';
          return `<div class="review-card"><strong>${lesson.short}</strong><span>${result.correct}/${result.total} correct • ${status}</span></div>`;
        }).join('')}
      </div>
      <div class="level-actions" style="justify-content:center;margin-top:24px;">
        <button class="primary-btn" id="retryQuizBtn" type="button">Try quiz again</button>
        <button class="secondary-btn" id="reviewWeakBtn" type="button">Review weakest lesson</button>
      </div>
    </section>`;

  document.getElementById('retryQuizBtn').addEventListener('click', () => {
    state.quizAnswers = {};
    renderQuiz();
  });

  document.getElementById('reviewWeakBtn').addEventListener('click', () => {
    let weakestId = lessons[0].id;
    let weakestScore = Infinity;
    lessons.forEach(lesson => {
      const result = breakdown[lesson.id];
      const ratio = result.correct / result.total;
      if (ratio < weakestScore) {
        weakestScore = ratio;
        weakestId = lesson.id;
      }
    });
    state.currentIndex = lessons.findIndex(lesson => lesson.id === weakestId);
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function render() {
  renderNav();
  updateProgress();
  if (state.currentIndex < lessons.length) renderLesson(state.currentIndex);
  else renderQuiz();
}

document.getElementById('themeBtn').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem(STORAGE.theme, state.theme);
  applyTheme();
});

teacherModeBtn.addEventListener('click', () => {
  state.teacherMode = !state.teacherMode;
  localStorage.setItem(STORAGE.teacher, String(state.teacherMode));
  applyTeacherMode();
});

document.getElementById('menuBtn').addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.getElementById('resetProgressBtn').addEventListener('click', () => {
  const approved = window.confirm('Reset all lesson scores and saved writing on this browser?');
  if (!approved) return;
  state.scores = {};
  state.writing = {};
  state.practiceAnswers = {};
  state.quizAnswers = {};
  localStorage.removeItem(STORAGE.scores);
  localStorage.removeItem(STORAGE.writing);
  state.currentIndex = 0;
  render();
});

applyTheme();
applyTeacherMode();
render();
