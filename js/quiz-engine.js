// --- Helper: Prevent HTML code in data from breaking layout ---
function escapeHTML(str) {
    if (!str) return str;
    return str.toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

let allQuestions = [];
let activeQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizSubMode = 'standard'; 

// Timer Variables
let timerInterval;
let startTime;

// --- 1. Fetch Data & Show Chapters ---
async function initChapterSelection(subjectCode) {
    try {
        const response = await fetch(`data/${subjectCode}.json`);
        if (!response.ok) throw new Error("File not found");

        allQuestions = await response.json();
        const chapters = [...new Set(allQuestions.map(q => q.chapter))].sort((a, b) => a - b);

        quizSubMode = 'standard';
        renderChapters(chapters);
    } catch (error) {
        alert("Data not found for this subject. Please ensure the JSON file exists in /data folder.");
        console.error(error);
        goBack();
    }
}

function renderChapters(chapters) {
    const container = document.getElementById('chapter-cards');
    const modeLabel = currentSelection.mode === 'quiz' ? 'Test' : 'Summary';
    const cardClass = currentSelection.mode === 'quiz' ? 'practice-card-bg' : 'summary-card-bg';

    let html = '';

    if (currentSelection.mode === 'quiz') {
        html += `
        <div class="summary-controls" style="margin-bottom: 25px;">
            <button class="toggle-btn ${quizSubMode === 'standard' ? 'active' : ''}" onclick="setQuizSubMode('standard', this)">
                🏁 Result at End
            </button>
            <button class="toggle-btn ${quizSubMode === 'immediate' ? 'active' : ''}" onclick="setQuizSubMode('immediate', this)">
                ⚡ Result per Qn
            </button>
        </div>
        `;
    }

    html += `<div class="card action-card ${cardClass}" onclick="handleModuleSelect('all')">
                    <h3>Full Syllabus ${modeLabel}</h3>
                    <p>All Modules</p>
                </div>`;

    html += chapters.map(chap =>
        `<div class="card ${cardClass}" onclick="handleModuleSelect(${chap})">
            <h3>Module ${chap}</h3>
            <p>${modeLabel} for Module ${chap}</p>
        </div>`
    ).join('');

    container.innerHTML = html;
}

function setQuizSubMode(mode, btn) {
    quizSubMode = mode;
    const chapters = [...new Set(allQuestions.map(q => q.chapter))].sort((a, b) => a - b);
    renderChapters(chapters);
}

function handleModuleSelect(chapter) {
    if (chapter === 'all') {
        activeQuestions = allQuestions;
    } else {
        activeQuestions = allQuestions.filter(q => q.chapter == chapter);
    }

    if (activeQuestions.length === 0) {
        alert("No questions found for this selection.");
        return;
    }

    if (currentSelection.mode === 'summary') {
        renderSummaryView(chapter);
    } else {
        startQuiz();
    }
}

// --- 2. SUMMARY MODE ---
function renderSummaryView(chapter) {
    navigateTo('view-summary-content');

    const title = document.getElementById('summary-title');
    title.innerText = chapter === 'all'
        ? `Full Syllabus Study Mode (${activeQuestions.length} Qs)`
        : `Module ${chapter} Study Mode (${activeQuestions.length} Qs)`;

    const container = document.getElementById('summary-list');
    container.innerHTML = `
        <div class="summary-controls">
            <button id="btn-mode-qa" class="toggle-btn active" onclick="switchSummaryMode('qa')">
                📖 Q&A View
            </button>
            <button id="btn-mode-exp" class="toggle-btn" onclick="switchSummaryMode('exp')">
                💡 Explanations Only
            </button>
        </div>
        <div id="study-content-area"></div>
    `;

    switchSummaryMode('qa');
}

function switchSummaryMode(mode) {
    const contentArea = document.getElementById('study-content-area');
    const btnQa = document.getElementById('btn-mode-qa');
    const btnExp = document.getElementById('btn-mode-exp');

    // UPDATED: Added escapeHTML wrappers for Question, Options, and Explanation
    if (mode === 'qa') {
        btnQa.classList.add('active');
        btnExp.classList.remove('active');

        contentArea.innerHTML = activeQuestions.map((q, i) => `
            <div class="summary-item">
                <span class="summary-q">Q${i + 1}: ${escapeHTML(q.question)}</span>
                <div class="summary-answer">
                    <strong>✅ Answer:</strong> ${escapeHTML(q.options[q.answerIndex])}
                </div>
                <div class="summary-explanation">
                    <strong>💡 Explanation:</strong> ${q.explanation ? escapeHTML(q.explanation) : 'No explanation provided.'}
                </div>
            </div>
        `).join('');

    } else if (mode === 'exp') {
        btnQa.classList.remove('active');
        btnExp.classList.add('active');

        contentArea.innerHTML = activeQuestions.map((q, i) => {
            const expText = q.explanation ? escapeHTML(q.explanation) : "No explanation provided for this question.";
            return `
            <div class="explanation-only-card">
                <div class="exp-number">#${i + 1}</div>
                <div class="exp-text">${expText}</div>
            </div>
            `;
        }).join('');
    }
}

// --- 3. QUIZ MODE & TIMER LOGIC ---

function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(activeQuestions.length).fill(null);
    navigateTo('view-quiz');

    startTimer();
    renderQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    startTime = Date.now();
    updateTimerUI();

    timerInterval = setInterval(() => {
        updateTimerUI();
    }, 1000);
}

function updateTimerUI() {
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsedSeconds / 60).toString().padStart(2, '0');
    const seconds = (elapsedSeconds % 60).toString().padStart(2, '0');
    document.getElementById('quiz-timer').innerText = `Time: ${minutes}:${seconds}`;
}

function stopTimer() {
    clearInterval(timerInterval);
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;

    if (minutes > 0) {
        return `${minutes}m ${seconds}s`;
    } else {
        return `${seconds}s`;
    }
}

function renderQuestion() {
    const q = activeQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = `${currentQuestionIndex + 1}. ${q.question}`;
    document.getElementById('quiz-progress').innerText = `Question ${currentQuestionIndex + 1}/${activeQuestions.length}`;

    const optionsContainer = document.getElementById('options-container');
    const explanationBox = document.getElementById('quiz-explanation');

    explanationBox.classList.add('hidden');
    optionsContainer.classList.remove('locked');

    const hasAnswered = userAnswers[currentQuestionIndex] !== null;

    // UPDATED: Added escapeHTML to options map
    optionsContainer.innerHTML = q.options.map((opt, index) => {
        let btnClass = '';

        if (quizSubMode === 'standard') {
            if (userAnswers[currentQuestionIndex] === index) btnClass = 'selected';
        } else {
            if (hasAnswered) {
                if (index === q.answerIndex) {
                    btnClass = 'correct-immediate'; 
                } else if (userAnswers[currentQuestionIndex] === index) {
                    btnClass = 'wrong-immediate';
                }
            }
        }

        return `<button class="option-btn ${btnClass}" onclick="selectOption(${index})">${escapeHTML(opt)}</button>`;
    }).join('');

    // UPDATED: Added escapeHTML to explanation
    if (quizSubMode === 'immediate' && hasAnswered) {
        optionsContainer.classList.add('locked'); 
        explanationBox.innerHTML = `<strong>💡 Explanation:</strong> ${q.explanation ? escapeHTML(q.explanation) : 'No explanation provided.'}`;
        explanationBox.classList.remove('hidden');
    }

    const isFirst = currentQuestionIndex === 0;
    const isLast = currentQuestionIndex === activeQuestions.length - 1;

    document.getElementById('prev-btn').classList.toggle('hidden', isFirst);
    document.getElementById('next-btn').classList.toggle('hidden', isLast);
    document.getElementById('submit-btn').classList.toggle('hidden', !isLast);
}

function selectOption(index) {
    if (quizSubMode === 'immediate' && userAnswers[currentQuestionIndex] !== null) {
        return;
    }

    userAnswers[currentQuestionIndex] = index;
    renderQuestion();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < activeQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    }
}

function submitQuiz() {
    const timeTaken = stopTimer();
    let score = 0;
    let resultHtml = '';

    activeQuestions.forEach((q, i) => {
        const userAnsIndex = userAnswers[i];
        const isCorrect = userAnsIndex === q.answerIndex;

        if (isCorrect) score++;

        // UPDATED: Added escapeHTML for result details
        const userAnsText = userAnsIndex !== null ? escapeHTML(q.options[userAnsIndex]) : "Skipped";
        const correctAnsText = escapeHTML(q.options[q.answerIndex]);

        resultHtml += `
            <div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
                <span class="review-q">Q${i + 1}: ${escapeHTML(q.question)}</span>
                <div class="review-detail">
                    ${isCorrect
                ? `<span class="val-correct">✔ Your Answer: ${userAnsText}</span>`
                : `<span class="val-wrong">✘ Your Answer: ${userAnsText}</span> <span class="val-correct">✔ Correct: ${correctAnsText}</span>`
            }
                </div>
                ${!isCorrect ? `<div class="explanation">💡 <strong>Explanation:</strong> ${q.explanation ? escapeHTML(q.explanation) : 'No explanation available.'}</div>` : ''}
            </div>
        `;
    });

    const percentage = Math.round((score / activeQuestions.length) * 100);

    navigateTo('view-result');

    const summaryContainer = document.querySelector('.result-summary');
    summaryContainer.innerHTML = `
        <div class="score-card">
            <span class="score-label">Score</span>
            <h1 id="score-text">${score}/${activeQuestions.length}</h1>
            <p id="score-percentage">${percentage}% Accuracy</p>
        </div>
        <div class="score-card" style="border-left: 5px solid #3b82f6;">
            <span class="score-label">Time Taken</span>
            <h1 id="time-text">${timeTaken}</h1>
            <p>Duration</p>
        </div>
    `;

    document.getElementById('review-container').innerHTML = resultHtml;
}