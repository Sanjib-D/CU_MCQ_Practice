let allQuestions = [];
let activeQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

async function initChapterSelection(subjectCode) {
    try {
        const response = await fetch(`data/${subjectCode}.json`);
        if (!response.ok) throw new Error("File not found");

        allQuestions = await response.json();
        const chapters = [...new Set(allQuestions.map(q => q.chapter))].sort((a, b) => a - b);
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

    let html = `<div class="card action-card ${cardClass}" onclick="handleModuleSelect('all')">
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

    if (mode === 'qa') {
        btnQa.classList.add('active');
        btnExp.classList.remove('active');

        contentArea.innerHTML = activeQuestions.map((q, i) => `
            <div class="summary-item">
                <span class="summary-q">Q${i + 1}: ${q.question}</span>
                <div class="summary-answer">
                    <strong>✅ Answer:</strong> ${q.options[q.answerIndex]}
                </div>
                <div class="summary-explanation">
                    <strong>💡 Explanation:</strong> ${q.explanation || 'No explanation provided.'}
                </div>
            </div>
        `).join('');

    } else if (mode === 'exp') {
        btnQa.classList.remove('active');
        btnExp.classList.add('active');

        contentArea.innerHTML = activeQuestions.map((q, i) => {
            const expText = q.explanation ? q.explanation : "No explanation provided for this question.";
            return `
            <div class="explanation-only-card">
                <div class="exp-number">#${i + 1}</div>
                <div class="exp-text">${expText}</div>
            </div>
            `;
        }).join('');
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(activeQuestions.length).fill(null);
    navigateTo('view-quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = activeQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = `${currentQuestionIndex + 1}. ${q.question}`;
    document.getElementById('quiz-progress').innerText = `Question ${currentQuestionIndex + 1}/${activeQuestions.length}`;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = q.options.map((opt, index) =>
        `<button class="option-btn ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}" 
            onclick="selectOption(${index})">
            ${opt}
        </button>`
    ).join('');

    const isLast = currentQuestionIndex === activeQuestions.length - 1;
    document.getElementById('next-btn').classList.toggle('hidden', isLast);
    document.getElementById('submit-btn').classList.toggle('hidden', !isLast);
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    renderQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < activeQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    }
}

function submitQuiz() {
    let score = 0;
    let resultHtml = '';

    activeQuestions.forEach((q, i) => {
        const userAnsIndex = userAnswers[i];
        const isCorrect = userAnsIndex === q.answerIndex;

        if (isCorrect) score++;

        const userAnsText = userAnsIndex !== null ? q.options[userAnsIndex] : "Skipped";
        const correctAnsText = q.options[q.answerIndex];

        resultHtml += `
            <div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
                <span class="review-q">Q${i + 1}: ${q.question}</span>
                <div class="review-detail">
                    ${isCorrect
                ? `<span class="val-correct">✔ Your Answer: ${userAnsText}</span>`
                : `<span class="val-wrong">✘ Your Answer: ${userAnsText}</span> <span class="val-correct">✔ Correct: ${correctAnsText}</span>`
            }
                </div>
                ${!isCorrect ? `<div class="explanation">💡 <strong>Explanation:</strong> ${q.explanation || 'No explanation available.'}</div>` : ''}
            </div>
        `;
    });

    const percentage = Math.round((score / activeQuestions.length) * 100);

    navigateTo('view-result');
    document.getElementById('score-text').innerText = `${score}/${activeQuestions.length}`;
    document.getElementById('score-percentage').innerText = `${percentage}% Accuracy`;
    document.getElementById('review-container').innerHTML = resultHtml;
}