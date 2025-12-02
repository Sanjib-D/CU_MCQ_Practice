let navHistory = [];
let currentSelection = {
    stream: null,
    semester: null,
    subject: null
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initStreamView();
    // Check if the URL has a link to a specific subject
    checkDeepLink(); 
});

// --- Deep Linking (URL Handling) ---

function checkDeepLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectCode = urlParams.get('subject');

    if (subjectCode) {
        const details = findSubjectByCode(subjectCode);
        if (details) {
            currentSelection = {
                stream: details.stream,
                semester: details.semester,
                subject: details.subject
            };
            
            // Navigate directly to the subject view
            navigateTo('view-action');
            document.getElementById('action-subject-title').innerText = currentSelection.subject.name;

            // Fake the history so the Back button works
            navHistory = ['view-stream']; 
            updateNavButtons();
        } else {
            // Invalid code in URL, clean it up
            resetUrl();
        }
    }
}

// Helper to find a subject deeply nested in the data
function findSubjectByCode(code) {
    for (const streamKey in syllabusData) {
        const stream = syllabusData[streamKey];
        for (const semester of stream.semesters) {
            // Check core subjects
            if (semester.subjects) {
                const sub = semester.subjects.find(s => s.code === code);
                if (sub) return { stream: streamKey, semester: semester, subject: sub };
            }
            // Check specialization groups
            if (semester.groups) {
                for (const group of semester.groups) {
                    const sub = group.subjects.find(s => s.code === code);
                    if (sub) return { stream: streamKey, semester: semester, subject: sub };
                }
            }
        }
    }
    return null;
}

function resetUrl() {
    const newUrl = window.location.pathname;
    window.history.pushState({}, '', newUrl);
}

// --- Theme Logic ---
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && systemDark)) {
        document.body.classList.add('dark-mode');
        themeBtn.innerText = '☀️';
    } else {
        themeBtn.innerText = '🌙';
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeBtn.innerText = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// --- Navigation Logic ---
function navigateTo(viewId) {
    const currentView = document.querySelector('.view-section:not(.hidden)');
    if (currentView) {
        navHistory.push(currentView.id);
    }

    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
    
    updateNavButtons();
    window.scrollTo(0, 0);
}

function goBack() {
    if (navHistory.length === 0) return;
    const previousViewId = navHistory.pop();
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    document.getElementById(previousViewId).classList.remove('hidden');
    updateNavButtons();
}

function updateNavButtons() {
    const backBtn = document.getElementById('back-btn');
    const homeBtn = document.getElementById('home-btn');
    const isRoot = document.getElementById('view-stream').classList.contains('hidden') === false;

    if (isRoot) {
        backBtn.classList.add('hidden');
        homeBtn.classList.add('hidden');
        navHistory = [];
        resetUrl(); // Clear URL when at home/root
    } else {
        backBtn.classList.remove('hidden');
        homeBtn.classList.remove('hidden');
    }
}

function resetApp() {
    navHistory = [];
    currentSelection = { stream: null, semester: null, subject: null };
    resetUrl(); // Clear URL on reset
    initStreamView();
}

function initStreamView() {
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    document.getElementById('view-stream').classList.remove('hidden');
    updateNavButtons();

    const container = document.getElementById('stream-cards');
    container.innerHTML = Object.keys(syllabusData).map(stream =>
        `<div class="card" onclick="selectStream('${stream}')">
            <div class="icon">🎓</div>
            <h3>${stream}</h3>
            <p>Master of Computer Applications</p>
        </div>`
    ).join('');
}

function selectStream(stream) {
    currentSelection.stream = stream;
    navigateTo('view-semester');
    renderSemesters();
}

function renderSemesters() {
    const container = document.getElementById('sem-cards');
    const semesters = syllabusData[currentSelection.stream].semesters;

    container.innerHTML = semesters.map(sem =>
        `<div class="card" onclick="selectSemester('${sem.id}')">
            <h3>${sem.title}</h3>
            <p>${sem.type === 'core' ? 'Core Subjects' : 'Specialization Required'}</p>
        </div>`
    ).join('');
}

function selectSemester(semId) {
    const semesters = syllabusData[currentSelection.stream].semesters;
    currentSelection.semester = semesters.find(s => s.id === semId);

    if (currentSelection.semester.type === 'specialization') {
        navigateTo('view-specialization');
        renderSpecializations();
    } else {
        navigateTo('view-subject');
        renderSubjects(currentSelection.semester.subjects);
    }
}

function renderSpecializations() {
    const container = document.getElementById('spec-cards');
    container.innerHTML = currentSelection.semester.groups.map((group, index) =>
        `<div class="card" onclick="selectSpecialization(${index})">
            <h3>${group.name}</h3>
        </div>`
    ).join('');
}

function selectSpecialization(index) {
    const group = currentSelection.semester.groups[index];
    navigateTo('view-subject');
    renderSubjects(group.subjects);
}

function renderSubjects(subjects) {
    const container = document.getElementById('subject-cards');
    container.innerHTML = subjects.map(sub =>
        `<div class="card" onclick="selectSubject('${sub.code}')">
            <h3>${sub.name}</h3>
            <small>${sub.code}</small>
        </div>`
    ).join('');
}

function selectSubject(code) {
    let foundSub = null;
    
    // Logic to find subject object from current selection
    if (currentSelection.semester.type === 'core') {
        foundSub = currentSelection.semester.subjects.find(s => s.code === code);
    } else {
        currentSelection.semester.groups.forEach(g => {
            const s = g.subjects.find(sub => sub.code === code);
            if (s) foundSub = s;
        });
    }

    currentSelection.subject = foundSub;
    
    // UPDATE URL: Add the subject code to the URL
    const newUrl = `${window.location.pathname}?subject=${code}`;
    window.history.pushState({ path: newUrl }, '', newUrl);

    navigateTo('view-action');
    document.getElementById('action-subject-title').innerText = currentSelection.subject.name;
}

function viewSyllabus() {
    navigateTo('view-syllabus-content');
    const container = document.getElementById('syllabus-container');
    const title = document.getElementById('syllabus-title');

    title.innerText = `Syllabus: ${currentSelection.subject.name}`;

    if (!currentSelection.subject.syllabus || currentSelection.subject.syllabus.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:#666;">Syllabus details coming soon. Please refer to the PDF.</p>`;
        return;
    }

    container.innerHTML = currentSelection.subject.syllabus.map(mod => `
        <div class="syllabus-module">
            <h4>${mod.module}</h4>
            <ul>
                ${mod.topics.map(t => `<li>${t}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function prepareMode(mode) {
    currentSelection.mode = mode;
    navigateTo('view-chapters');
    initChapterSelection(currentSelection.subject.code);
}