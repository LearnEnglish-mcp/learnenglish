"use strict";

// ============================================================
// CommonN.js - BỘ MÁY DÙNG CHUNG CHO CÁC BÀI HỌC
// Dữ liệu cụ thể của từng bài được nạp từ file HTML tương ứng.
// ============================================================
const vocabData = [];
const readingVocabOrder = [];
const grammarData = [];
const essayData = [];
const ex1Data = [];
const ex2Data = [];
const ex3Data = [];
const ex4Data = [];
const ex5Data = [];
const ex6Data = [];
const ex7Data = [];
const analysisData = [];

const lessonConfig = Object.freeze({
    id: String(window.LESSON_CONFIG?.id || 'lesson').trim() || 'lesson',
    title: String(window.LESSON_CONFIG?.title || document.title || 'English Lesson').trim(),
    backupName: String(window.LESSON_CONFIG?.backupName || window.LESSON_CONFIG?.id || 'lesson').trim() || 'lesson',
    audioFile: String(window.LESSON_CONFIG?.audioFile || 'audio').trim(),
    videoFile: String(window.LESSON_CONFIG?.videoFile || 'video').trim()
});

const storageKey = (name) => `interactive-english:${lessonConfig.id}:${name}`;

function readStoredJSON(name, fallback) {
    try {
        const raw = localStorage.getItem(storageKey(name));
        return raw === null ? fallback : JSON.parse(raw);
    } catch (error) {
        console.warn(`Không đọc được dữ liệu ${name}:`, error);
        return fallback;
    }
}

function saveStoredJSON(name, value) {
    try {
        localStorage.setItem(storageKey(name), JSON.stringify(value));
    } catch (error) {
        console.warn(`Không lưu được dữ liệu ${name}:`, error);
    }
}

function normalizeAnswer(value) {
    return String(value ?? '')
        .normalize('NFKC')
        .trim()
        .replace(/\s+/g, ' ')
        .toLocaleLowerCase('en-US');
}
// ============================================================
// JAVASCRIPT - GIỮ NGUYÊN LOGIC
// ============================================================
let currentExercise = 1;
let activeParagraph = null;
let isSpeaking = false;
let audio = document.getElementById('main-audio');
let matchAnswers = {};
let flashcardIndex = 0;
let wordOrderAnswers = {};
let typingIndex = 0;
let shuffledTypingData = [];
let learnedWords = readStoredJSON('learnedWords', []);
let favoriteWords = readStoredJSON('favoriteWords', []);
let exerciseResults = readStoredJSON('exerciseResults', {});
let accumulatedStudySeconds = Number(localStorage.getItem(storageKey('studySeconds'))) || 0;
let lastStudyTick = Date.now();
let currentFilter = 'all';
let showLearnedOnly = false;
let startTime = Date.now();
let speechRate = 0.85;
let selectedVoice = '';

const recording = {
    recorder: null,
    chunks: [],
    url: null,
    isRecording: false,
    activeIndex: null,
    recordedIndex: null
};

let paragraphLoop = {
    active: false,
    index: null,
    utterance: null,
    text: ''
};

let isLooping = false;
let isParagraphToggling = false;
let loopUtterance = null;
let fullRecorder = null;
let fullAudioChunks = [];
let fullRecordingUrl = null;
let isFullRecording = false;

// ===== HÀM TIỆN ÍCH =====
function formatTime(sec) {
    if (isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ':' + String(s).padStart(2, '0');
}

function playAudio(text, cb) {
    // Dừng tất cả audio đang phát
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    
    // Dừng audio player nếu đang phát
    const mainAudio = document.getElementById('main-audio');
    if (mainAudio && !mainAudio.paused) {
        mainAudio.pause();
        mainAudio.currentTime = 0;
    }
    
    // Dừng loop nếu đang chạy
    if (isLooping) {
        stopLoop();
    }
    
    // Dừng paragraph loop nếu đang chạy
    if (paragraphLoop.active) {
        stopAllAudio();
    }
    
    if (!window.speechSynthesis) return false;
    
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = speechRate;
    u.pitch = 1;
    if (selectedVoice) {
        const voices = window.speechSynthesis.getVoices();
        const selected = voices.find(v => v.name === selectedVoice);
        if (selected) u.voice = selected;
    }
    if (cb) u.onend = cb;
    window.speechSynthesis.speak(u);
    isSpeaking = true;
    document.getElementById('tts-status')?.classList.remove('hidden');
    document.getElementById('tts-play')?.classList.add('hidden');
    document.getElementById('tts-stop')?.classList.remove('hidden');
    return true;
}

function stopAllAudio() {
    // Dừng text-to-speech
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    
    // Dừng audio player
    const mainAudio = document.getElementById('main-audio');
    if (mainAudio) {
        mainAudio.pause();
        mainAudio.currentTime = 0;
        // Cập nhật UI audio
        const progressBar = document.getElementById('audio-progress-bar');
        if (progressBar) progressBar.style.width = '0%';
        const currentLabel = document.getElementById('audio-current');
        if (currentLabel) currentLabel.textContent = '0:00';
    }
    
    isSpeaking = false;
    activeParagraph = null;
    
    // Dừng paragraph loop
    if (paragraphLoop.active) {
        paragraphLoop.active = false;
        paragraphLoop.index = null;
        paragraphLoop.utterance = null;
        for (let i = 0; i < essayData.length; i++) {
            const btn = document.getElementById('p-btn-' + i);
            if (btn) {
                btn.textContent = '🔁 Nghe lặp';
                btn.className = 'flex items-center justify-center gap-1 px-3 py-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-xl transition font-medium text-slate-700 text-sm';
            }
        }
    }
    
    // Dừng loop toàn bài
    if (isLooping) {
        isLooping = false;
        loopUtterance = null;
        document.getElementById('btn-play-loop')?.classList.remove('hidden');
        document.getElementById('btn-stop-loop')?.classList.add('hidden');
    }
    
    // Cập nhật UI
    document.getElementById('tts-status')?.classList.add('hidden');
    document.getElementById('tts-play')?.classList.remove('hidden');
    document.getElementById('tts-stop')?.classList.add('hidden');
    document.getElementById('reading-indicator')?.classList.add('hidden');
    document.getElementById('cancel-read')?.classList.add('hidden');
    
    // Xóa active state của các đoạn
    for (let i = 0; i < essayData.length; i++) {
        const card = document.getElementById('para-card-' + i);
        if (card) card.classList.remove('active');
    }
}

function updateAudioProgress() {
    if (audio) {
        const pct = (audio.currentTime / audio.duration) * 100 || 0;
        document.getElementById('audio-progress-bar').style.width = pct + '%';
        document.getElementById('audio-current').textContent = formatTime(audio.currentTime);
        const durationLabel = document.getElementById('audio-duration-label');
            if (durationLabel) durationLabel.textContent = formatTime(audio.duration);
    }
}

function seekAudio(e) {
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    audio.currentTime = x * audio.duration;
}

function showToast(message, type = 'success', duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast';
    if (type === 'error') toast.classList.add('error');
    else if (type === 'warning') toast.classList.add('warning');
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const btn = document.querySelector('.dark-toggle');
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    localStorage.setItem('darkMode', document.body.classList.contains('dark') ? 'true' : 'false');
    showToast(document.body.classList.contains('dark') ? '🌙 Chế độ tối' : '☀️ Chế độ sáng', 'success', 1500);
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.() || document.documentElement.webkitRequestFullscreen?.();
        showToast('⛶ Toàn màn hình', 'success', 1500);
    } else {
        document.exitFullscreen?.() || document.webkitExitFullscreen?.();
        showToast('⛶ Thoát toàn màn hình', 'success', 1500);
    }
}

function exportData() {
    persistStudyTime();
    const data = {
        lessonId: lessonConfig.id,
        lessonTitle: lessonConfig.title,
        learnedWords,
        favoriteWords,
        exerciseResults,
        studySeconds: accumulatedStudySeconds,
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${lessonConfig.backupName}_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast('📤 Xuất dữ liệu thành công!', 'success');
}

function importData(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(String(e.target?.result || ''));
            if (data.lessonId && data.lessonId !== lessonConfig.id) {
                showToast('⚠️ File sao lưu thuộc một bài học khác.', 'warning');
                return;
            }
            if (Array.isArray(data.learnedWords)) learnedWords = data.learnedWords;
            if (Array.isArray(data.favoriteWords)) favoriteWords = data.favoriteWords;
            if (data.exerciseResults && typeof data.exerciseResults === 'object') exerciseResults = data.exerciseResults;
            if (Number.isFinite(Number(data.studySeconds))) accumulatedStudySeconds = Math.max(0, Number(data.studySeconds));
            sanitizeStoredState();
            saveLessonState();
            renderVocab(document.getElementById('vocab-search')?.value || '');
            renderScore();
            updateProgress();
            showToast('📥 Nhập dữ liệu thành công!', 'success');
        } catch (error) {
            console.error(error);
            showToast('❌ File sao lưu không hợp lệ!', 'error');
        } finally {
            event.target.value = '';
        }
    };
    reader.onerror = () => {
        showToast('❌ Không thể đọc file sao lưu!', 'error');
        event.target.value = '';
    };
    reader.readAsText(file);
}

function switchTab(id) {
    if (recording.isRecording) stopRecording();
    if (paragraphLoop.active) {
        stopAllAudio();
    }
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.getElementById('tab-' + id)?.classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-' + id)?.classList.add('active');
    window.scrollTo(0, 0);
}

// ===== MODAL VÀ TỪ VỰNG =====
function showWord(id) {
    const w = vocabData.find(v => v.id === id);
    if (!w) return;
    const modal = document.getElementById('word-modal');
    const body = document.getElementById('modal-body');
    const catMap = { n: 'Danh từ', v: 'Động từ', adj: 'Tính từ', adv: 'Trạng từ', conj: 'Liên từ' };
    const isLearned = learnedWords.includes(w.id);
    const isFav = favoriteWords.includes(w.id);

    body.innerHTML = `
        <div class="flex justify-between items-start">
            <div>
                <h2 class="text-3xl font-extrabold text-blue-600">${w.word}</h2>
                <p class="text-slate-400 text-sm">${w.type} ${w.phonetic}</p>
                <span class="badge-cat ${w.cat}">${catMap[w.cat] || ''}</span>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="toggleFavorite(${w.id})" class="star-btn ${isFav ? 'active' : ''}" title="Yêu thích">⭐</button>
                <button onclick="playAudio('${w.word}')" class="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition text-xl">🔊</button>
            </div>
        </div>
        <div class="bg-blue-50/70 p-4 rounded-2xl border border-blue-100">
            <p class="text-xs text-blue-500 font-bold uppercase tracking-wider">Nghĩa</p>
            <p class="text-xl font-bold text-slate-800">${w.meaning}</p>
            
        </div>
        <div class="border-t pt-4">
            <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">📖 Ví dụ trong bài học</p>
            <ul class="example-list">
                <li>
                    <span class="en">"${w.ex1}"</span>
                    <span class="vi">📝 ${w.ex1_vi}</span>
                    <button onclick="playAudio('${w.ex1.replace(/'/g, "\\'")}')" class="text-[10px] text-blue-600 font-bold hover:underline mt-1">🔊 Nghe</button>
                </li>
            </ul>
        </div>
        <div class="mt-4 flex justify-between">
            <button onclick="toggleLearned(${w.id})" class="px-4 py-2 rounded-xl text-sm font-bold ${isLearned ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-700'} transition hover:scale-105">
                ${isLearned ? '✅ Đã học' : '📌 Đánh dấu đã học'}
            </button>
            <button onclick="toggleFavorite(${w.id})" class="px-4 py-2 rounded-xl text-sm font-bold ${isFav ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-700'} transition hover:scale-105">
                ${isFav ? '⭐ Yêu thích' : '☆ Thêm yêu thích'}
            </button>
        </div>
    `;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.dataset.currentId = id;
}

function closeModal() {
    const modal = document.getElementById('word-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function toggleFavorite(id) {
    if (favoriteWords.includes(id)) {
        favoriteWords = favoriteWords.filter(x => x !== id);
        showToast('⭐ Đã bỏ yêu thích', 'warning', 1500);
    } else {
        favoriteWords.push(id);
        showToast('⭐ Đã thêm vào yêu thích', 'success', 1500);
    }
    saveStoredJSON('favoriteWords', favoriteWords);
    renderVocab(document.getElementById('vocab-search')?.value || '');
    updateProgress();
    const modal = document.getElementById('word-modal');
    if (!modal.classList.contains('hidden')) {
        showWord(parseInt(modal.dataset.currentId));
    }
}

function toggleLearned(id) {
    if (learnedWords.includes(id)) {
        learnedWords = learnedWords.filter(x => x !== id);
    } else {
        learnedWords.push(id);
        showToast('📌 Đã đánh dấu đã học!', 'success', 1500);
    }
    saveStoredJSON('learnedWords', learnedWords);
    renderVocab(document.getElementById('vocab-search')?.value || '');
    updateProgress();
    const modal = document.getElementById('word-modal');
    if (!modal.classList.contains('hidden')) {
        showWord(id);
    }
}

function toggleLearnedFilter() {
    showLearnedOnly = !showLearnedOnly;
    const btn = document.getElementById('learned-toggle');
    btn.classList.toggle('bg-blue-100');
    btn.classList.toggle('border-blue-300');
    btn.textContent = showLearnedOnly ? '📌 Tất cả' : '📌 Đã học';
    renderVocab(document.getElementById('vocab-search')?.value || '');
}

function filterVocab(cat) {
    currentFilter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
    if (btn) btn.classList.add('active');
    renderVocab(document.getElementById('vocab-search')?.value || '');
}

function shuffleVocab() {
    const grid = document.getElementById('vocab-grid');
    const cards = Array.from(grid.children);
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        grid.appendChild(cards[j]);
    }
    showToast('🎲 Đã xáo trộn!', 'success', 1500);
}



function renderVocab(search = '') {
    const grid = document.getElementById('vocab-grid');
    if (!grid) return;
    const query = normalizeAnswer(search);
    let filtered = vocabData.filter(item =>
        normalizeAnswer(item.word).includes(query) || normalizeAnswer(item.meaning).includes(query)
    );
    if (currentFilter === 'fav') filtered = filtered.filter(item => favoriteWords.includes(Number(item.id)));
    else if (currentFilter !== 'all') filtered = filtered.filter(item => item.cat === currentFilter);
    if (showLearnedOnly) filtered = filtered.filter(item => learnedWords.includes(Number(item.id)));

    const categoryNames = {
        n: 'Danh từ',
        v: 'Động từ',
        adj: 'Tính từ',
        adv: 'Trạng từ',
        conj: 'Liên từ'
    };

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-span-full rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">Không tìm thấy từ vựng phù hợp.</div>';
        updateProgress();
        return;
    }

    grid.innerHTML = filtered.map(item => {
        const id = Number(item.id);
        const isLearned = learnedWords.includes(id);
        const isFavorite = favoriteWords.includes(id);
   
        return `
            <button type="button" onclick="showWord(${id})" aria-label="Mở từ ${item.word}"
                class="vocab-card w-full text-left bg-white p-4 rounded-2xl border border-slate-100 shadow-soft hover:border-amber-200 cursor-pointer ${isLearned ? 'border-l-4 border-l-amber-500' : ''} ${isFavorite ? 'border-t-4 border-t-amber-400' : ''}">
                <span class="flex justify-between items-start">
                    <span class="text-[10px] text-slate-400 font-bold">#${id}</span>
                    <span class="badge-cat ${item.cat}">${categoryNames[item.cat] || item.type || ''}</span>
                </span>
                <span class="block text-lg font-bold text-slate-800 text-center hover:text-amber-600 transition">${item.word} ${isFavorite ? '⭐' : ''}</span>
                <span class="block text-[10px] text-slate-400 text-center italic">${item.phonetic || ''}</span>
                <span class="block text-sm text-slate-700 border-t border-slate-100 pt-2 mt-2 text-center font-semibold">${item.meaning}</span>
                <span class="block text-[10px] text-slate-400 text-center mt-1">📖 1 ví dụ</span>
                ${isLearned ? '<span class="block text-[10px] text-amber-600 font-bold text-center mt-1">✅ Đã học</span>' : ''}
            </button>
        `;
    }).join('');
    updateProgress();
}

function getCurrentStudySeconds() {
    const activeSeconds = document.hidden ? 0 : Math.max(0, Math.floor((Date.now() - lastStudyTick) / 1000));
    return accumulatedStudySeconds + activeSeconds;
}

function persistStudyTime() {
    if (!document.hidden) {
        accumulatedStudySeconds += Math.max(0, Math.floor((Date.now() - lastStudyTick) / 1000));
    }
    lastStudyTick = Date.now();
    try {
        localStorage.setItem(storageKey('studySeconds'), String(accumulatedStudySeconds));
    } catch (error) {
        console.warn('Không lưu được thời gian học:', error);
    }
}

function sanitizeStoredState() {
    const validIds = new Set(vocabData.map(item => Number(item.id)));
    learnedWords = [...new Set((Array.isArray(learnedWords) ? learnedWords : []).map(Number))]
        .filter(id => validIds.has(id));
    favoriteWords = [...new Set((Array.isArray(favoriteWords) ? favoriteWords : []).map(Number))]
        .filter(id => validIds.has(id));
    if (!exerciseResults || typeof exerciseResults !== 'object' || Array.isArray(exerciseResults)) exerciseResults = {};
}

function saveLessonState() {
    saveStoredJSON('learnedWords', learnedWords);
    saveStoredJSON('favoriteWords', favoriteWords);
    saveStoredJSON('exerciseResults', exerciseResults);
    try {
        localStorage.setItem(storageKey('studySeconds'), String(accumulatedStudySeconds));
    } catch (error) {
        console.warn('Không lưu được trạng thái bài học:', error);
    }
}

function updateProgress() {
    const total = vocabData.length;
    const learned = learnedWords.length;
    const favorites = favoriteWords.length;
    const score = getOverallExerciseScore();

    const vocabProgressText = document.getElementById('vocab-progress-text');
    const vocabProgressFill = document.getElementById('vocab-progress-fill');
    const exerciseProgressText = document.getElementById('exercise-progress-text');
    const exerciseProgressFill = document.getElementById('exercise-progress-fill');
    const statLearned = document.getElementById('stat-learned');
    const statFavorites = document.getElementById('stat-favorites');
    const statScore = document.getElementById('stat-score');
    const statTime = document.getElementById('stat-time');

    if (vocabProgressText) vocabProgressText.textContent = `${learned}/${total}`;
    if (vocabProgressFill) vocabProgressFill.style.width = `${total ? (learned / total) * 100 : 0}%`;
    if (exerciseProgressText) exerciseProgressText.textContent = `${score.percent}/100`;
    if (exerciseProgressFill) exerciseProgressFill.style.width = `${score.percent}%`;
    if (statLearned) statLearned.textContent = String(learned);
    if (statFavorites) statFavorites.textContent = String(favorites);
    if (statScore) statScore.textContent = String(score.percent);
    if (statTime) statTime.textContent = (getCurrentStudySeconds() / 60).toFixed(1);
}

// ===== RENDER BÀI ĐỌC TỔNG QUAN =====
function renderDashboardEssay() {
    const container = document.getElementById('essay-preview');
    const transContainer = document.getElementById('essay-translation');

    const vocabMap = {};
    vocabData.forEach(v => { vocabMap[v.word.toLowerCase()] = v; });

    const fullText = essayData.map(p => p.text).join(' ');
    const fullTranslation = essayData.map(p => p.vi).join(' ');

    const words = fullText.split(/(\s+|[.,!?;:])/);
    const processed = words.map(token => {
        const trimmed = token.replace(/^[^a-zA-Z']+/, '').replace(/[^a-zA-Z']+$/, '');
        const lower = trimmed.toLowerCase();
        if (vocabMap[lower]) {
            return `<span class="clickable-word" onclick="showWord(${vocabMap[lower].id})">${token}</span>`;
        }
        return token;
    }).join('');

    container.innerHTML = `<p class="mb-0">${processed}</p>`;
    transContainer.innerHTML = `<p class="mb-0">${fullTranslation}</p>`;
}

// ===== NGHE LẶP TỔNG QUAN =====
function playLoop() {
    if (isLooping) { stopLoop(); return; }
    const full = essayData.map(p => p.text).join('. ');
    if (!window.speechSynthesis) return showToast('❌ Trình duyệt không hỗ trợ', 'error');
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(full);
    u.lang = 'en-US';
    u.rate = speechRate;
    u.pitch = 1;
    if (selectedVoice) {
        const voices = window.speechSynthesis.getVoices();
        const selected = voices.find(v => v.name === selectedVoice);
        if (selected) u.voice = selected;
    }
    u.onend = function() {
        if (isLooping) {
            const next = new SpeechSynthesisUtterance(full);
            next.lang = 'en-US';
            next.rate = speechRate;
            next.pitch = 1;
            if (selectedVoice) {
                const voices = window.speechSynthesis.getVoices();
                const selected = voices.find(v => v.name === selectedVoice);
                if (selected) next.voice = selected;
            }
            next.onend = this.onend;
            window.speechSynthesis.speak(next);
            loopUtterance = next;
        }
    };
    isLooping = true;
    loopUtterance = u;
    window.speechSynthesis.speak(u);
    document.getElementById('btn-play-loop').classList.add('hidden');
    document.getElementById('btn-stop-loop').classList.remove('hidden');
    showToast('🔁 Đang đọc lặp...', 'success', 2000);
}

function stopLoop() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    isLooping = false;
    loopUtterance = null;
    document.getElementById('btn-play-loop').classList.remove('hidden');
    document.getElementById('btn-stop-loop').classList.add('hidden');
    showToast('⏹ Đã dừng', 'warning', 1500);
}

// ===== GHI ÂM TOÀN BÀI =====
async function toggleFullRecording() {
    const btn = document.getElementById('btn-record-full');
    if (isFullRecording) {
        if (fullRecorder && fullRecorder.state === 'recording') fullRecorder.stop();
        return;
    }
    if (fullRecordingUrl) {
        URL.revokeObjectURL(fullRecordingUrl);
        fullRecordingUrl = null;
        fullAudioChunks = [];
    }
    const oldPlay = document.getElementById('play-full-recording');
    if (oldPlay) oldPlay.remove();
    const oldDel = document.getElementById('delete-full-recording');
    if (oldDel) oldDel.remove();

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        fullRecorder = new MediaRecorder(stream);
        fullAudioChunks = [];
        fullRecorder.ondataavailable = e => fullAudioChunks.push(e.data);
        fullRecorder.onstop = () => {
            const blob = new Blob(fullAudioChunks, { type: 'audio/webm' });
            fullRecordingUrl = URL.createObjectURL(blob);
            isFullRecording = false;
            btn.classList.remove('recording');
            btn.textContent = '🎤 Ghi âm';
            showToast('✅ Đã ghi âm toàn bài!', 'success', 1500);
            stream.getTracks().forEach(t => t.stop());

            const parent = btn.parentNode;
            const playBtn = document.createElement('button');
            playBtn.id = 'play-full-recording';
            playBtn.className = 'text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-xl border border-amber-200 transition flex items-center gap-1';
            playBtn.innerHTML = '▶️ Nghe lại';
            playBtn.onclick = () => {
                if (fullRecordingUrl) {
                    const a = new Audio(fullRecordingUrl);
                    a.play();
                    showToast('▶️ Đang phát bản ghi', 'success', 1500);
                }
            };
            const delBtn = document.createElement('button');
            delBtn.id = 'delete-full-recording';
            delBtn.className = 'text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-xl border border-red-200 transition flex items-center gap-1';
            delBtn.innerHTML = '🗑️ Xóa';
            delBtn.onclick = function() {
                if (fullRecordingUrl) {
                    URL.revokeObjectURL(fullRecordingUrl);
                    fullRecordingUrl = null;
                    fullAudioChunks = [];
                    const play = document.getElementById('play-full-recording');
                    if (play) play.remove();
                    const del = document.getElementById('delete-full-recording');
                    if (del) del.remove();
                    showToast('🗑️ Đã xóa bản ghi', 'warning', 1500);
                }
            };
            parent.insertBefore(playBtn, btn.nextSibling);
            parent.insertBefore(delBtn, btn.nextSibling);
        };
        fullRecorder.start();
        isFullRecording = true;
        btn.classList.add('recording');
        btn.textContent = '⏹ Dừng ghi';
        showToast('🔴 Đang ghi âm...', 'success', 1500);
        const oldPlay2 = document.getElementById('play-full-recording');
        if (oldPlay2) oldPlay2.remove();
        const oldDel2 = document.getElementById('delete-full-recording');
        if (oldDel2) oldDel2.remove();
    } catch (err) {
        alert('Không thể truy cập microphone.');
        console.error(err);
    }
}

function toggleTranslateAll() {
    const trans = document.getElementById('essay-translation');
    const btn = document.getElementById('translate-all-btn');
    if (trans.classList.contains('hidden')) {
        trans.classList.remove('hidden');
        btn.textContent = '🇻🇳 Ẩn dịch';
        btn.classList.add('bg-blue-200');
    } else {
        trans.classList.add('hidden');
        btn.textContent = '🇻🇳 Dịch';
        btn.classList.remove('bg-blue-200');
    }
}

// ===== RENDER KHUNG TỪ VỰNG TRONG TAB BÀI ĐỌC =====
function renderReadingVocab() {
    const container = document.getElementById('reading-vocab-cloud');
    if (!container) return;
    const orderedWords = [];
    for (const wordName of readingVocabOrder) {
        const found = vocabData.find(v => v.word.toLowerCase() === wordName.toLowerCase());
        if (found) {
            orderedWords.push(found);
        }
    }
    container.innerHTML = orderedWords.map(v =>
        `<span class="vocab-list-item" onclick="showWord(${v.id})">${v.word} <span class="text-xs text-slate-500 ml-1">(${v.meaning})</span></span>`
    ).join('');
}

// ===== READING TAB =====
function renderReading() {
    const container = document.getElementById('essay-container');
    container.innerHTML = essayData.map((p, idx) => {
        const words = p.text.split(/\s+/);
        const highlighted = words.map(w => {
            const clean = w.replace(/[^a-zA-Z']/g, '');
            const found = vocabData.find(v => v.word.toLowerCase() === clean.toLowerCase());
            if (found) {
                return `<span class="clickable-word" onclick="showWord(${found.id})">${w}</span>`;
            }
            return w;
        }).join(' ');
        const hasRecording = (recording.recordedIndex === idx && recording.url);
        return `
        <div id="para-card-${idx}" class="paragraph-card bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div class="flex items-center justify-between mb-2">
                <span class="bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-0.5 rounded-full">Đoạn ${idx+1}</span>
                <div class="flex gap-2">
                    <button onclick="toggleParagraphLoop(${idx})" id="p-btn-${idx}" class="text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1 rounded-xl flex items-center gap-1">🔁 Nghe lặp</button>
                    <button onclick="toggleRecording(${idx})" id="rec-btn-${idx}" class="mic-btn text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-300 px-3 py-1 rounded-xl flex items-center gap-1 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                        Ghi âm
                    </button>
                    <button onclick="playRecording(${idx})" id="play-rec-${idx}" class="${hasRecording ? '' : 'hidden'} text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1 rounded-xl flex items-center gap-1">▶️ Nghe lại</button>
                    <button onclick="deleteRecording(${idx})" id="del-rec-${idx}" class="${hasRecording ? '' : 'hidden'} text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-1 rounded-xl flex items-center gap-1">🗑️ Xóa</button>
                    <button onclick="toggleTranslate(${idx})" class="text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1 rounded-xl flex items-center gap-1">🇻🇳 Dịch</button>
                </div>
            </div>
            <p class="text-slate-800 text-[17px] leading-[2]">${highlighted}</p>
            <div id="translate-${idx}" class="translate-box" style="display: none;">${p.vi}</div>
        </div>
    `}).join('');

    renderReadingVocab();
}

function toggleTranslate(idx) {
    const box = document.getElementById('translate-' + idx);
    if (box) {
        box.style.display = (box.style.display === 'none' || box.style.display === '') ? 'block' : 'none';
    }
}

function toggleParagraphLoop(idx) {
    if (isParagraphToggling) return;
    isParagraphToggling = true;

    const btn = document.getElementById('p-btn-' + idx);

    // Dừng audio player nếu đang phát
    const mainAudio = document.getElementById('main-audio');
    if (mainAudio && !mainAudio.paused) {
        mainAudio.pause();
        mainAudio.currentTime = 0;
        const progressBar = document.getElementById('audio-progress-bar');
        if (progressBar) progressBar.style.width = '0%';
        const currentLabel = document.getElementById('audio-current');
        if (currentLabel) currentLabel.textContent = '0:00';
    }

    // Nếu đang lặp chính đoạn này → DỪNG
    if (paragraphLoop.active && paragraphLoop.index === idx) {
        // QUAN TRỌNG: tắt active TRƯỚC khi cancel để tránh onend gọi lại speak
        paragraphLoop.active = false;
        paragraphLoop.index = null;
        paragraphLoop.utterance = null;

        if (window.speechSynthesis) window.speechSynthesis.cancel();

        if (btn) {
            btn.textContent = '🔁 Nghe lặp';
            btn.className = 'text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1 rounded-xl flex items-center gap-1';
        }
        document.getElementById('reading-indicator')?.classList.add('hidden');
        for (let i = 0; i < essayData.length; i++) {
            const card = document.getElementById('para-card-' + i);
            if (card) card.classList.remove('active');
        }
        showToast('⏹ Đã dừng lặp đoạn', 'warning', 1500);
        isParagraphToggling = false;
        return;
    }

    // Nếu đang lặp đoạn khác → dừng đoạn đó trước
    if (paragraphLoop.active) {
        paragraphLoop.active = false;
        paragraphLoop.index = null;
        paragraphLoop.utterance = null;
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        // Reset tất cả nút
        for (let i = 0; i < essayData.length; i++) {
            const oldBtn = document.getElementById('p-btn-' + i);
            if (oldBtn) {
                oldBtn.textContent = '🔁 Nghe lặp';
                oldBtn.className = 'text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1 rounded-xl flex items-center gap-1';
            }
        }
    }

    // BẮT ĐẦU lặp đoạn mới
    const text = essayData[idx].text;
    if (!window.speechSynthesis) {
        showToast('❌ Trình duyệt không hỗ trợ', 'error');
        isParagraphToggling = false;
        return;
    }

    paragraphLoop.active = true;
    paragraphLoop.index = idx;
    paragraphLoop.text = text;

    if (btn) {
        btn.textContent = '⏹ Dừng lặp';
        btn.className = 'text-xs font-bold text-white bg-red-500 hover:bg-red-600 border border-red-300 px-3 py-1 rounded-xl flex items-center gap-1';
    }

    const speak = () => {
        if (!paragraphLoop.active) return;
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        u.rate = speechRate;
        u.pitch = 1;
        if (selectedVoice) {
            const voices = window.speechSynthesis.getVoices();
            const selected = voices.find(v => v.name === selectedVoice);
            if (selected) u.voice = selected;
        }
        u.onend = function() {
            if (paragraphLoop.active) speak();
        };
        paragraphLoop.utterance = u;
        window.speechSynthesis.speak(u);
        document.getElementById('reading-indicator')?.classList.remove('hidden');
        for (let i = 0; i < essayData.length; i++) {
            const card = document.getElementById('para-card-' + i);
            if (card) card.classList.remove('active');
        }
        const activeCard = document.getElementById('para-card-' + idx);
        if (activeCard) activeCard.classList.add('active');
    };

    speak();
    showToast('🔁 Đang lặp đoạn ' + (idx + 1), 'success', 1500);
    isParagraphToggling = false;
}

function playFullText() {
    stopAllAudio();
    const full = essayData.map(p => p.text).join(' ');
    const ok = playAudio(full, () => { stopAllAudio(); });
    if (ok) {
        document.getElementById('reading-indicator').classList.remove('hidden');
        document.getElementById('cancel-read').classList.remove('hidden');
        for (let i = 0; i < essayData.length; i++) {
            const btn = document.getElementById('p-btn-' + i);
            if (btn) { btn.className = 'text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1 rounded-xl flex items-center gap-1';
                btn.textContent = '🔁 Nghe lặp'; }
            const card = document.getElementById('para-card-' + i);
            if (card) card.classList.remove('active');
        }
    }
}

// ===== RECORDING =====
function deleteRecording(index) {
    if (recording.recordedIndex === index) {
        recording.url = null;
        recording.recordedIndex = null;
        const playBtn = document.getElementById('play-rec-' + index);
        const delBtn = document.getElementById('del-rec-' + index);
        if (playBtn) playBtn.classList.add('hidden');
        if (delBtn) delBtn.classList.add('hidden');
        const recBtn = document.getElementById('rec-btn-' + index);
        if (recBtn) {
            recBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                Ghi âm
            `;
            recBtn.className = 'mic-btn text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-300 px-3 py-1 rounded-xl flex items-center gap-1 transition';
        }
        showToast('🗑️ Đã xóa bản ghi', 'warning', 1500);
    }
}

async function toggleRecording(index) {
    if (recording.isRecording) {
        if (recording.activeIndex === index) {
            stopRecording();
        } else {
            stopRecording();
            await startRecording(index);
        }
    } else {
        await startRecording(index);
    }
}

async function startRecording(index) {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        const chunks = [];
        recorder.ondataavailable = e => chunks.push(e.data);
        recorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'audio/webm' });
            const url = URL.createObjectURL(blob);
            recording.url = url;
            recording.chunks = chunks;
            const recordedIdx = recording.activeIndex;
            recording.recordedIndex = recordedIdx;
            recording.activeIndex = null;
            const playBtn = document.getElementById('play-rec-' + recordedIdx);
            const delBtn = document.getElementById('del-rec-' + recordedIdx);
            if (playBtn) playBtn.classList.remove('hidden');
            if (delBtn) delBtn.classList.remove('hidden');
            const recBtn = document.getElementById('rec-btn-' + recordedIdx);
            if (recBtn) {
                recBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                    Ghi âm
                `;
                recBtn.className = 'mic-btn text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-300 px-3 py-1 rounded-xl flex items-center gap-1 transition';
            }
            recording.isRecording = false;
            recording.recorder = null;
            showToast('🎤 Đã ghi âm xong!', 'success', 2000);
        };
        recorder.start();
        recording.recorder = recorder;
        recording.isRecording = true;
        recording.activeIndex = index;
        const recBtn = document.getElementById('rec-btn-' + index);
        if (recBtn) {
            recBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="1"/></svg>
                Dừng
            `;
            recBtn.className = 'mic-btn text-xs font-bold text-white bg-red-600 hover:bg-red-700 border border-red-300 px-3 py-1 rounded-xl flex items-center gap-1 transition recording';
        }
        const playBtn = document.getElementById('play-rec-' + index);
        const delBtn = document.getElementById('del-rec-' + index);
        if (playBtn) playBtn.classList.add('hidden');
        if (delBtn) delBtn.classList.add('hidden');
    } catch (err) {
        alert('Không thể truy cập microphone. Vui lòng cho phép quyền truy cập.');
        console.error(err);
    }
}

function stopRecording() {
    if (recording.recorder && recording.isRecording) {
        recording.recorder.stop();
        if (recording.recorder.stream) {
            recording.recorder.stream.getTracks().forEach(track => track.stop());
        }
    }
}

function playRecording(index) {
    if (recording.url && recording.recordedIndex === index) {
        const audioEl = new Audio(recording.url);
        audioEl.play();
    } else {
        alert('Chưa có bản ghi cho đoạn này. Hãy ghi âm trước.');
    }
}

// ===== GRAMMAR =====
function escapeHTML(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function renderGrammar() {
    const grid = document.getElementById('grammar-grid');
    if (!grid) return;

    // Chuẩn hệ thống: Ngữ pháp luôn hiển thị một cột.
    grid.className = 'grid grid-cols-1 gap-6';

    if (!Array.isArray(grammarData) || grammarData.length === 0) {
        grid.innerHTML = '<p class="text-sm text-slate-500">Chưa có dữ liệu ngữ pháp.</p>';
        return;
    }

    grid.innerHTML = grammarData.map((g, idx) => {
        const examples = Array.isArray(g.extra)
            ? g.extra.filter(ex => ex && ex.en && ex.vi)
            : [];

        const extraHTML = examples.length
            ? examples.map((ex, exIndex) => `
                <div class="grammar-extra-example pl-3 border-l-2 border-blue-300 py-1.5">
                    <div class="flex items-start justify-between gap-2">
                        <p class="text-slate-700"><span class="font-bold text-blue-600">${exIndex + 1}.</span> ${escapeHTML(ex.en)}</p>
                        <button type="button"
                                class="grammar-listen-btn shrink-0"
                                data-speech="${escapeHTML(ex.en)}"
                                onclick="playAudio(this.dataset.speech)"
                                aria-label="Nghe ví dụ ${exIndex + 1}">🔊</button>
                    </div>
                    <p class="text-slate-500 mt-0.5">📝 ${escapeHTML(ex.vi)}</p>
                </div>`).join('')
            : '<p class="text-xs italic text-slate-400">Chưa có ví dụ bổ sung.</p>';

        return `
        <article class="grammar-card bg-white p-5 rounded-2xl border border-blue-100 shadow-soft">
            <div class="flex items-start justify-between gap-3">
                <h3 class="text-lg font-extrabold text-blue-700">${escapeHTML(g.title)}</h3>
                <span class="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">#${idx + 1}</span>
            </div>

            <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-100 my-3 overflow-x-auto">
                <code class="text-sm font-mono text-slate-700">${escapeHTML(g.formula)}</code>
            </div>

            <p class="text-sm text-slate-600 leading-relaxed">${escapeHTML(g.desc)}</p>

            <div class="bg-blue-50/60 p-3 rounded-xl border border-blue-100 my-3">
                <div class="flex items-start justify-between gap-2">
                    <p class="text-sm font-semibold text-slate-700">📌 ${escapeHTML(g.example)}</p>
                    <button type="button"
                            class="grammar-listen-btn shrink-0"
                            data-speech="${escapeHTML(g.example)}"
                            onclick="playAudio(this.dataset.speech)"
                            aria-label="Nghe ví dụ chính">🔊</button>
                </div>
                <p class="text-sm text-slate-500 mt-1">📝 ${escapeHTML(g.vi)}</p>
            </div>

            ${g.detail ? `
            <div class="grammar-note text-xs text-slate-600 bg-amber-50/70 p-3 rounded-xl border border-amber-100 mb-3 leading-relaxed">
                <p><span class="font-bold text-amber-700">💡 Giải thích:</span> ${escapeHTML(g.detail)}</p>
            </div>` : ''}

            <div class="grammar-examples text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-2">
                <p class="font-bold text-slate-600">📖 Ví dụ thêm (${examples.length}):</p>
                ${extraHTML}
            </div>
        </article>`;
    }).join('');

}
// ===== EXERCISES =====
function switchExercise(id) {
    currentExercise = id;
    document.querySelectorAll('.exercise-tab').forEach(b => b.classList.remove('active'));
    document.getElementById('ex-tab-' + id)?.classList.add('active');
    document.querySelectorAll('.exercise-section').forEach(el => el.classList.add('hidden'));
    document.getElementById('ex-' + id)?.classList.remove('hidden');
}

function getOverallExerciseScore() {
    const results = Object.values(exerciseResults).filter(result =>
        result && Number.isFinite(Number(result.correct)) && Number.isFinite(Number(result.total)) && Number(result.total) > 0
    );
    const correct = results.reduce((sum, result) => sum + Math.max(0, Number(result.correct)), 0);
    const total = results.reduce((sum, result) => sum + Math.max(0, Number(result.total)), 0);
    return {
        correct,
        total,
        percent: total > 0 ? Math.round((correct / total) * 100) : 0
    };
}

function renderScore() {
    const score = getOverallExerciseScore();
    const badge = document.getElementById('score-badge');
    if (badge) badge.textContent = `${score.percent}/100`;
    saveStoredJSON('exerciseResults', exerciseResults);
    updateProgress();
    return score;
}

function recordExerciseResult(exerciseId, correct, total) {
    exerciseResults[String(exerciseId)] = {
        correct: Math.max(0, Number(correct) || 0),
        total: Math.max(0, Number(total) || 0),
        updatedAt: new Date().toISOString()
    };
    return renderScore();
}

function updateScore() {
    if (currentExercise === 3) {
        recordExerciseResult(3, Object.keys(matchAnswers).length, ex3Data.length);
    } else if (currentExercise === 6) {
        recordExerciseResult(6, Object.keys(wordOrderAnswers).length, ex6Data.length);
    } else {
        renderScore();
    }
}

function renderEx1() {
    const container = document.getElementById('ex-1');

    // Chỉ xử lý phần Điền từ.
    // Khôi phục câu đầy đủ rồi tạo khoảng trống ở đầu, giữa hoặc cuối câu.
    const questions = ex1Data.map((item, questionIndex) => {
        // Thay dấu ______ cũ bằng đáp án để tạo lại câu đầy đủ.
        const fullSentence = item.q.replace(/_{3,}/g, item.a);

        // Tìm tất cả các từ tiếng Anh trong câu.
        // Hỗ trợ cả từ ghép như long-distance và từ có dấu nháy.
        const words = [
            ...fullSentence.matchAll(/[A-Za-z]+(?:[-'][A-Za-z]+)*/g)
        ];

        // Nếu không tìm thấy từ thì giữ nguyên câu cũ.
        if (words.length === 0) {
            return {
                q: item.q,
                a: item.a
            };
        }

        // Chia câu thành 3 khu vực:
        // câu 1, 4, 7...: khoảng trống ở đầu câu
        // câu 2, 5, 8...: khoảng trống ở giữa câu
        // câu 3, 6, 9...: khoảng trống ở cuối câu
        const sectionSize = Math.max(1, Math.ceil(words.length / 3));
        let candidates = [];

        if (questionIndex % 3 === 0) {
            candidates = words.slice(0, sectionSize);
        } else if (questionIndex % 3 === 1) {
            const middleStart = Math.max(
                0,
                Math.floor((words.length - sectionSize) / 2)
            );

            candidates = words.slice(
                middleStart,
                middleStart + sectionSize
            );
        } else {
            candidates = words.slice(
                Math.max(0, words.length - sectionSize)
            );
        }

        // Chọn ngẫu nhiên một từ trong khu vực đã xác định.
        const selected =
            candidates[Math.floor(Math.random() * candidates.length)];

        const answer = selected[0];
        const startIndex = selected.index;
        const endIndex = startIndex + answer.length;

        // Thay từ được chọn bằng khoảng trống.
        const question =
            fullSentence.slice(0, startIndex) +
            '______' +
            fullSentence.slice(endIndex);

        return {
            q: question,
            a: answer
        };
    });

    container.innerHTML = `
        <div class="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 mb-4">
            <p class="text-sm font-semibold text-blue-800">
                📝 Điền từ (${questions.length} câu)
            </p>
        </div>

        ${questions.map(question => `
            <div class="bg-slate-50/80 p-4 rounded-2xl border border-slate-100 space-y-2">
                <p class="font-bold text-sm text-slate-700">
                    ${question.q}
                </p>

                <input
                    type="text"
                    data-answer="${String(question.a).replace(/&/g, '&amp;').replace(/"/g, '&quot;')}"
                    class="quiz-input w-full px-4 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white font-medium"
                    placeholder="Nhập từ..."
                    autocomplete="off"
                    spellcheck="false"
                >

                <p class="result-feedback hidden text-xs font-bold"></p>
            </div>
        `).join('')}
    `;
}

function renderEx2() {
    const c = document.getElementById('ex-2');
    const shuffledData = ex2Data.map(q => {
        const shuffledOpts = [...q.opts].sort(() => Math.random() - 0.5);
        return { ...q, opts: shuffledOpts };
    });
    c.innerHTML = `
        <div class="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 mb-4"><p class="text-sm font-semibold text-blue-800">🔘 Trắc nghiệm (${shuffledData.length} câu)</p></div>
        ${shuffledData.map(q => `
            <div class="bg-slate-50/80 p-4 rounded-2xl border border-slate-100 space-y-3">
                <p class="font-bold text-sm text-slate-700">${q.q}</p>
                <div class="grid grid-cols-2 gap-2">
                    ${q.opts.map(opt => `
                        <label class="quiz-option flex items-center gap-2 p-2.5 bg-white hover:bg-blue-50 border border-slate-200 rounded-xl cursor-pointer text-xs font-medium transition">
                            <input type="radio" name="q2-${q.q}" value="${opt}" class="quiz-radio h-4 w-4 text-blue-600 focus:ring-blue-400" data-answer="${q.a}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
                <p class="result-feedback hidden text-xs font-bold"></p>
            </div>
        `).join('')}
    `;
}

function renderEx3() {
    const c = document.getElementById('ex-3');
    matchAnswers = {};
    const distractorMeanings = [
        'đường chạy ngắn', 'giải thưởng âm nhạc', 'sự mệt mỏi', 'thời tiết lạnh',
        'bữa ăn nhanh', 'chiếc xe đạp', 'kỳ nghỉ dài', 'sân vận động',
        'đồng hồ báo thức', 'bản đồ thành phố'
    ];
    const meaningChoices = [
        ...ex3Data.map(item => ({ ...item, distractor: false })),
        ...distractorMeanings.map((mean, index) => ({ word: `distractor-${index}`, mean, distractor: true }))
    ].sort(() => Math.random() - 0.5);
    const wordChoices = [...ex3Data].sort(() => Math.random() - 0.5);
    c.innerHTML = `
        <div class="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 mb-4"><p class="text-sm font-semibold text-blue-800">🎯 Ghép ${ex3Data.length} từ với ${meaningChoices.length} nghĩa</p></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><p class="text-xs font-bold text-slate-500 uppercase">Từ vựng</p>
                ${wordChoices.map(item => `
                    <div class="match-item bg-white p-3 rounded-xl border border-slate-200 mb-2 shadow-sm" draggable="true" role="button" tabindex="0" aria-label="Chọn từ để ghép nghĩa" data-id="${item.word}" data-word="${item.word}" data-mean="${item.mean}">
                        <span class="font-bold text-blue-600">${item.word}</span>
                    </div>
                `).join('')}
            </div>
            <div><p class="text-xs font-bold text-slate-500 uppercase">Nghĩa</p>
                ${meaningChoices.map(item => `
                    <div class="match-zone p-3 rounded-xl border-2 border-dashed border-slate-300 mb-2" role="button" tabindex="0" aria-label="Chọn nghĩa để ghép" data-id="${item.word}" data-mean="${item.mean}">
                        <span class="text-slate-600">${item.mean}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <p id="match-result" class="text-xs font-bold text-center mt-4 hidden"></p>
    `;
    setupDragDrop();
}

function setupDragDrop() {
    const items = document.querySelectorAll('.match-item');
    const zones = document.querySelectorAll('.match-zone');
    let selectedItem = null;

    const selectItem = (item) => {
        if (!item || item.classList.contains('dropped')) return;
        items.forEach(el => el.classList.remove('selected'));
        selectedItem = item;
        item.classList.add('selected');
        const hint = document.getElementById('match-result');
        if (hint) {
            hint.textContent = `👉 Đã chọn “${item.dataset.word}”. Hãy chọn nghĩa phù hợp.`;
            hint.className = 'text-xs font-bold text-center mt-4 text-amber-600';
            hint.classList.remove('hidden');
        }
    };

    const tryMatch = (item, zone) => {
        if (!item || !zone || zone.classList.contains('filled')) return;
        zone.classList.remove('drag-over');
        const hint = document.getElementById('match-result');
        if (item.dataset.id === zone.dataset.id) {
            zone.classList.add('filled');
            zone.innerHTML = `<span class="text-emerald-600 font-bold">✓ ${item.dataset.word}</span>`;
            zone.removeAttribute('tabindex');
            item.style.opacity = '0.4';
            item.draggable = false;
            item.classList.add('dropped');
            item.classList.remove('selected');
            item.removeAttribute('tabindex');
            matchAnswers[item.dataset.id] = true;
            selectedItem = null;
            const total = ex3Data.length;
            const done = Object.keys(matchAnswers).length;
            if (hint) {
                hint.classList.remove('hidden');
                hint.textContent = done === total
                    ? '🎉 Chúc mừng! Bạn đã ghép đúng tất cả!'
                    : `✅ Đã ghép ${done}/${total}`;
                hint.className = 'text-xs font-bold text-center mt-4 text-emerald-600';
            }
            updateScore();
        } else {
            zone.classList.add('wrong');
            setTimeout(() => zone.classList.remove('wrong'), 400);
            if (hint) {
                hint.textContent = '❌ Không khớp. Hãy thử lại!';
                hint.className = 'text-xs font-bold text-center mt-4 text-red-600';
                hint.classList.remove('hidden');
            }
        }
    };

    items.forEach(item => {
        item.addEventListener('click', () => selectItem(item));
        item.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                selectItem(item);
            }
        });
        item.addEventListener('dragstart', event => {
            selectItem(item);
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', item.dataset.id || '');
            item.classList.add('dragging');
        });
        item.addEventListener('dragend', () => item.classList.remove('dragging'));
    });

    zones.forEach(zone => {
        zone.addEventListener('click', () => tryMatch(selectedItem, zone));
        zone.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                tryMatch(selectedItem, zone);
            }
        });
        zone.addEventListener('dragover', event => {
            event.preventDefault();
            zone.classList.add('drag-over');
        });
        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
        zone.addEventListener('drop', event => {
            event.preventDefault();
            tryMatch(selectedItem, zone);
        });
    });
}

// ===== FLASHCARD VỚI NÚT ĐỌC =====
let flashcardData = [];

function renderEx4() {
    const c = document.getElementById('ex-4');
    flashcardIndex = 0;
    const totalCards = flashcardData.length;
    c.innerHTML = `
        <div class="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 mb-4 flex items-center justify-between flex-wrap">
            <p class="text-sm font-semibold text-purple-800">🃏 Flashcard (${totalCards} thẻ)</p>
            <div class="flex items-center gap-3">
                <button onclick="shuffleFlashcards()" class="text-xs bg-purple-100 hover:bg-purple-200 px-3 py-1 rounded-xl transition">🔀 Xáo trộn</button>
            </div>
        </div>
        <div class="flex flex-col items-center">
            <div class="flashcard w-full max-w-xl" onclick="flipCard()">
                <div class="flashcard-inner">
                    <!-- Mặt trước -->
                    <div class="flashcard-front flex flex-col items-center justify-center p-4">
                        <span class="text-2xl font-bold text-blue-600" id="fc-word"></span>
                        <span class="text-sm text-slate-500" id="fc-phonetic"></span>
                        <span class="text-xs text-slate-400" id="fc-type"></span>
                        <div class="mt-2 flex items-center gap-2">
                            <span class="text-xs text-slate-400">👆 Nhấp để lật</span>
                            <button class="fc-audio-btn" id="fc-play-front" onclick="event.stopPropagation(); playAudio(currentWord)" title="Nghe từ">🔊</button>
                        </div>
                    </div>
                    <!-- Mặt sau -->
                    <div class="flashcard-back flex flex-col items-center justify-center p-5 overflow-auto">
                        <span class="flashcard-vi text-2xl font-bold" id="fc-mean"></span>
                        <div class="text-sm text-slate-600 mt-3 w-full text-left" id="fc-examples"></div>
                        <div class="flashcard-flip-hint mt-3 flex items-center gap-2">
                            <span class="text-xs text-slate-400">👆 Nhấp để lật lại</span>
                            <button class="fc-audio-btn" id="fc-play-back" onclick="event.stopPropagation(); playAudio(currentWord)" title="Nghe từ">🔊</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-4 mt-4">
                <button onclick="prevCard()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition text-sm font-medium">&larr; Trước</button>
                <span class="text-sm font-bold text-slate-600" id="fc-counter">1/${totalCards}</span>
                <button onclick="nextCard()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition text-sm font-medium">Sau &rarr;</button>
            </div>
        </div>
    `;
    updateFC(0);
}

function toggleFlashcardReverse() {
    const checked = document.getElementById('flashcard-reverse').checked;
    localStorage.setItem('flashcardReverse', checked);
    renderEx4();
}

function flipCard() { document.querySelector('.flashcard')?.classList.toggle('flipped'); }

function updateFC(idx) {
    const data = flashcardData[idx];
    if (!data) return;
    const wordEl = document.getElementById('fc-word');
    const phoneticEl = document.getElementById('fc-phonetic');
    const typeEl = document.getElementById('fc-type');
    const meanEl = document.getElementById('fc-mean');
    const examplesEl = document.getElementById('fc-examples');
    const counterEl = document.getElementById('fc-counter');

    if (wordEl) wordEl.textContent = data.word;
    if (phoneticEl) phoneticEl.textContent = data.phonetic;
    if (typeEl) typeEl.textContent = data.type;
    if (meanEl) meanEl.textContent = data.meaning;
    if (examplesEl) {
        // Thêm nút 🔊 cho mỗi câu ví dụ
        examplesEl.innerHTML = `
            <div class="example-item flashcard-single-example">
                <div class="flashcard-example-en-row">
                    <span class="flashcard-example-en">${data.ex1}</span>
                    <button onclick="event.stopPropagation(); playAudio('${data.ex1.replace(/'/g, "\'")}')" 
                            class="flashcard-example-audio" 
                            title="Nghe câu này"
                            aria-label="Nghe câu ví dụ">🔊</button>
                </div>
                <span class="flashcard-example-vi">${data.ex1_vi}</span>
            </div>
        `;
    }
    if (counterEl) counterEl.textContent = (idx + 1) + '/' + flashcardData.length;
    document.querySelector('.flashcard')?.classList.remove('flipped');
    
    // Cập nhật nút nghe từ chính
    const frontBtn = document.getElementById('fc-play-front');
    const backBtn = document.getElementById('fc-play-back');
    const word = data.word;
    if (frontBtn) {
        frontBtn.onclick = function(e) { e.stopPropagation(); playAudio(word); };
    }
    if (backBtn) {
        backBtn.onclick = function(e) { e.stopPropagation(); playAudio(word); };
    }
    window.currentWord = word;
}

function nextCard() {
    if (flashcardIndex < flashcardData.length - 1) {
        flashcardIndex++;
        updateFC(flashcardIndex);
    }
}
function prevCard() {
    if (flashcardIndex > 0) {
        flashcardIndex--;
        updateFC(flashcardIndex);
    }
}

function shuffleFlashcards() {
    for (let i = flashcardData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcardData[i], flashcardData[j]] = [flashcardData[j], flashcardData[i]];
    }
    flashcardIndex = 0;
    updateFC(0);
    showToast('🃏 Đã xáo trộn flashcard!', 'success', 1500);
}

// ===== TYPING =====
function renderEx5() {
    const c = document.getElementById('ex-5');
    if (typingIndex === 0 || shuffledTypingData.length !== ex5Data.length) shuffledTypingData = [...ex5Data].sort(() => Math.random() - 0.5);
    const sentence = shuffledTypingData[typingIndex % shuffledTypingData.length];
    c.innerHTML = `
        <div class="bg-orange-50/60 p-4 rounded-2xl border border-orange-100 mb-4"><p class="text-sm font-semibold text-orange-800">⌨️ Gõ chính tả (10 câu)</p></div>
        <div class="bg-white p-6 rounded-2xl border border-slate-200">
            <div class="flex justify-between items-center mb-2"><span class="text-sm font-semibold text-slate-600">📝 Gõ chính xác câu sau:</span><span class="text-xs text-slate-400">Câu ${typingIndex+1}/10</span></div>
            <div class="typing-practice font-mono bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4" id="typing-display">
                ${sentence.split('').map((ch, i) => `<span class="${i===0?'char-current':''}" data-idx="${i}">${ch}</span>`).join('')}
            </div>
            <input type="text" id="typing-input" class="w-full px-4 py-3 text-lg rounded-xl border-2 border-slate-200 focus:border-blue-400 focus:outline-none font-mono" placeholder="Bắt đầu gõ..." autofocus>
            <div class="flex justify-between mt-2 text-xs text-slate-400"><span>Lỗi: <span id="typing-errors">0</span></span><span>Tiến độ: <span id="typing-progress">0%</span></span></div>
            <div id="typing-result" class="hidden text-center font-bold mt-4"></div>
            <div class="flex gap-2 mt-4">
                <button onclick="nextTyping()" class="text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-xl transition font-medium">Câu tiếp →</button>
                <button onclick="resetTyping()" class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl transition font-medium">🔄 Làm lại</button>
            </div>
        </div>
    `;
    document.getElementById('typing-input')?.addEventListener('input', handleTyping);
}

function handleTyping(e) {
    const input = e.target;
    const val = input.value;
    const sentence = shuffledTypingData[typingIndex % shuffledTypingData.length];
    const chars = document.querySelectorAll('#typing-display span');
    let errors = 0,
        correct = 0;
    chars.forEach((sp, i) => {
        sp.classList.remove('char-correct', 'char-wrong', 'char-current');
        if (i < val.length) {
            if (val[i] === sentence[i]) { sp.classList.add('char-correct');
                correct++; } else { sp.classList.add('char-wrong');
                errors++; }
        } else if (i === val.length) sp.classList.add('char-current');
    });
    document.getElementById('typing-errors').textContent = errors;
    document.getElementById('typing-progress').textContent = Math.round((correct / sentence.length) * 100) + '%';
    if (val.length === sentence.length) {
        const res = document.getElementById('typing-result');
        res.classList.remove('hidden');
        if (errors === 0) { res.innerHTML = '🎉 Chính xác!';
            res.className = 'text-center font-bold mt-4 text-blue-600'; } else { res.innerHTML =
                '⚠️ Có ' + errors + ' lỗi. Thử lại!';
            res.className = 'text-center font-bold mt-4 text-amber-600'; }
    }
}

function nextTyping() {
    if (typingIndex < shuffledTypingData.length - 1) { typingIndex++;
        renderEx5(); } else { alert('🎉 Hoàn thành 10 câu!');
        typingIndex = 0;
        renderEx5(); }
}

function resetTyping() { renderEx5(); }

// ===== WORD ORDER =====
function renderEx6() {
    const c = document.getElementById('ex-6');
    wordOrderAnswers = {};
    const shuffledQuestions = [...ex6Data].sort(() => Math.random() - 0.5);
    c.innerHTML = `
        <div class="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 mb-4"><p class="text-sm font-semibold text-blue-800">🔄 Sắp xếp từng từ (${shuffledQuestions.length} câu)</p></div>
        ${shuffledQuestions.map(item => `
            <div class="bg-white p-4 rounded-2xl border border-slate-200 mb-4">
                <p class="text-xs font-bold text-slate-500 mb-2">Câu ${item.id}: Sắp xếp</p>
                <div class="flex flex-wrap gap-2 mb-3" id="bank-${item.id}">
                    ${item.correct.trim().split(/\s+/).sort(() => Math.random() - 0.5).map(w => `<span class="word-token px-3 py-1.5 bg-slate-100 rounded-lg text-sm hover:bg-blue-100 transition cursor-pointer" data-word="${w}" onclick="pickWord(${item.id},'${w}',this)">${w}</span>`).join('')}
                </div>
                <div class="word-slot flex flex-wrap gap-2 min-h-[48px] p-2 border-2 border-dashed border-slate-300 rounded-xl" id="slot-${item.id}">
                    <span class="text-slate-400 text-sm">⬇️ Nhấp từ bên trên</span>
                </div>
                <div class="flex justify-between mt-2">
                    <button onclick="checkOrder(${item.id})" class="text-xs text-blue-600 hover:underline font-medium">✅ Kiểm tra</button>
                    <button onclick="resetOrder(${item.id})" class="text-xs text-slate-400 hover:underline">🔄 Làm lại</button>
                </div>
                <p id="order-result-${item.id}" class="text-xs font-bold mt-2 hidden"></p>
            </div>
        `).join('')}
    `;
}

function pickWord(id, word, el) {
    const slot = document.getElementById('slot-' + id);
    const bank = document.getElementById('bank-' + id);
    const ph = slot.querySelector('.text-slate-400');
    if (ph) ph.remove();
    const span = document.createElement('span');
    span.className = 'word-token px-3 py-1.5 bg-blue-100 rounded-lg text-sm hover:bg-red-100 transition cursor-pointer';
    span.textContent = word;
    span.dataset.word = word;
    span.onclick = function() { removeWord(id, word, this); };
    slot.appendChild(span);
    el.remove();
    document.getElementById('order-result-' + id).classList.add('hidden');
}

function removeWord(id, word, el) {
    const bank = document.getElementById('bank-' + id);
    const slot = document.getElementById('slot-' + id);
    el.remove();
    const sp = document.createElement('span');
    sp.className = 'word-token px-3 py-1.5 bg-slate-100 rounded-lg text-sm hover:bg-blue-100 transition cursor-pointer';
    sp.textContent = word;
    sp.dataset.word = word;
    sp.onclick = function() { pickWord(id, word, this); };
    bank.appendChild(sp);
    if (slot.children.length === 0) {
        const ph = document.createElement('span');
        ph.className = 'text-slate-400 text-sm';
        ph.textContent = '⬇️ Nhấp từ bên trên';
        slot.appendChild(ph);
    }
    document.getElementById('order-result-' + id).classList.add('hidden');
}

function checkOrder(id) {
    const slot = document.getElementById('slot-' + id);
    const res = document.getElementById('order-result-' + id);
    const words = Array.from(slot.querySelectorAll('.word-token')).map(el => el.textContent);
    const user = words.join(' ');
    const correct = ex6Data.find(d => d.id === id).correct;
    res.classList.remove('hidden');
    if (user.toLowerCase() === correct.toLowerCase()) {
        res.textContent = '✅ Chính xác!';
        res.className = 'text-xs font-bold mt-2 text-blue-600';
        wordOrderAnswers[id] = true;
        updateScore();
    } else {
        res.textContent = '❌ Chưa đúng. Đáp án: "' + correct + '"';
        res.className = 'text-xs font-bold mt-2 text-red-600';
    }
}

function resetOrder(id) {
    const slot = document.getElementById('slot-' + id);
    const bank = document.getElementById('bank-' + id);
    const res = document.getElementById('order-result-' + id);
    const words = Array.from(slot.querySelectorAll('.word-token'));
    words.forEach(el => {
        const sp = document.createElement('span');
        sp.className = 'word-token px-3 py-1.5 bg-slate-100 rounded-lg text-sm hover:bg-blue-100 transition cursor-pointer';
        sp.textContent = el.textContent;
        sp.dataset.word = el.textContent;
        sp.onclick = function() { pickWord(id, el.textContent, this); };
        bank.appendChild(sp);
        el.remove();
    });
    const ph = document.createElement('span');
    ph.className = 'text-slate-400 text-sm';
    ph.textContent = '⬇️ Nhấp từ bên trên';
    slot.appendChild(ph);
    res.classList.add('hidden');
    delete wordOrderAnswers[id];
}

// ===== QUESTIONS =====
function renderEx7() {
    const c = document.getElementById('ex-7');
    c.innerHTML = `
        <div class="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 mb-4"><p class="text-sm font-semibold text-blue-800">❓ Câu hỏi đọc hiểu (${ex7Data.length} câu)</p></div>
        ${ex7Data.map((item, idx) => `
            <div class="bg-white p-4 rounded-2xl border border-slate-200 mb-4">
                <p class="font-bold text-sm text-slate-700">${idx+1}. ${item.q}</p>
                <button onclick="toggleAnswer(${idx})" class="btn-toggle-answer mt-2">Ẩn/Hiện đáp án</button>
                <div id="answer-${idx}" class="answer-box">
                    <strong>Đáp án:</strong> ${item.a}
                </div>
            </div>
        `).join('')}
    `;
}

function toggleAnswer(idx) {
    const box = document.getElementById('answer-' + idx);
    if (box) {
        box.classList.toggle('show');
    }
}

// ===== EVALUATE & RESET =====
function evaluateCurrent() {
    const ex = currentExercise;
    let correct = 0;
    let total = 0;

    if (ex === 1) {
        const inputs = document.querySelectorAll('#ex-1 .quiz-input');
        total = inputs.length;
        inputs.forEach(inp => {
            const feedback = inp.nextElementSibling;
            const isCorrect = normalizeAnswer(inp.value) === normalizeAnswer(inp.dataset.answer);
            feedback?.classList.remove('hidden');
            if (isCorrect) {
                correct++;
                if (feedback) {
                    feedback.textContent = '✅ Chính xác!';
                    feedback.className = 'result-feedback text-xs font-bold text-emerald-600 mt-1';
                }
                inp.className = 'quiz-input w-full px-4 py-2 text-sm rounded-xl border-2 border-emerald-500 focus:outline-none bg-white font-medium';
            } else {
                if (feedback) {
                    feedback.textContent = `❌ Đáp án: "${inp.dataset.answer || ''}"`;
                    feedback.className = 'result-feedback text-xs font-bold text-rose-600 mt-1';
                }
                inp.className = 'quiz-input w-full px-4 py-2 text-sm rounded-xl border-2 border-rose-400 focus:outline-none bg-white font-medium';
            }
        });
    } else if (ex === 2) {
        const radios = document.querySelectorAll('#ex-2 .quiz-radio');
        const groups = {};
        radios.forEach(radio => {
            if (!groups[radio.name]) groups[radio.name] = [];
            groups[radio.name].push(radio);
        });
        total = Object.keys(groups).length;
        Object.values(groups).forEach(group => {
            const checked = group.find(radio => radio.checked);
            const answer = group[0]?.dataset.answer || '';
            const parent = group[0]?.closest('.space-y-3');
            const feedback = parent?.querySelector('.result-feedback');
            feedback?.classList.remove('hidden');
            if (checked && normalizeAnswer(checked.value) === normalizeAnswer(answer)) {
                correct++;
                if (feedback) {
                    feedback.textContent = '✅ Chính xác!';
                    feedback.className = 'result-feedback text-xs font-bold text-emerald-600 mt-1';
                }
            } else if (feedback) {
                feedback.textContent = `❌ Đáp án: "${answer}"`;
                feedback.className = 'result-feedback text-xs font-bold text-rose-600 mt-1';
            }
        });
    } else if (ex === 3) {
        total = ex3Data.length;
        correct = Object.keys(matchAnswers).length;
    } else if (ex === 4) {
        showToast('🃏 Flashcard là phần tự học, không chấm điểm.', 'warning');
        return;
    } else if (ex === 5) {
        showToast('⌨️ Kết quả gõ chính tả được hiển thị ngay trong bài.', 'warning');
        return;
    } else if (ex === 6) {
        total = ex6Data.length;
        correct = Object.keys(wordOrderAnswers).length;
    } else if (ex === 7) {
        showToast('📝 Hãy tự trả lời rồi mở đáp án để đối chiếu.', 'warning');
        return;
    }

    recordExerciseResult(ex, correct, total);
    const container = document.getElementById(`ex-${ex}`);
    container?.querySelector('.exercise-result')?.remove();
    const message = document.createElement('div');
    const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
    message.className = `exercise-result text-center font-bold p-3 rounded-xl mt-4 ${percent === 100 ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`;
    message.textContent = percent === 100
        ? '🎉 Hoàn thành 100%! Rất tốt!'
        : `📊 Kết quả: ${correct}/${total} đúng (${percent}%)`;
    container?.appendChild(message);

    if (percent === 100) showToast('🎉 Bạn đã hoàn thành xuất sắc!', 'success');
    else if (percent >= 80) showToast('👍 Kết quả khá tốt!', 'success');
    else showToast('📖 Hãy ôn lại và thử lại!', 'warning');
}

function resetCurrent() {
    const ex = currentExercise;
    if (ex === 1) {
        document.querySelectorAll('#ex-1 .quiz-input').forEach(inp => {
            inp.value = '';
            inp.className =
                'quiz-input w-full px-4 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white font-medium';
            const fb = inp.nextElementSibling;
            fb.classList.add('hidden');
        });
    } else if (ex === 2) {
        document.querySelectorAll('#ex-2 .quiz-radio').forEach(r => r.checked = false);
        document.querySelectorAll('#ex-2 .result-feedback').forEach(f => f.classList.add('hidden'));
    } else if (ex === 3) { renderEx3(); } else if (ex === 4) { renderEx4(); } else if (ex === 5) { typingIndex = 0;
        renderEx5(); } else if (ex === 6) { renderEx6(); } else if (ex === 7) { renderEx7(); }
    const container = document.getElementById('ex-' + ex);
    const old = container?.querySelector('.exercise-result');
    if (old) old.remove();
    delete exerciseResults[String(ex)];
    saveStoredJSON('exerciseResults', exerciseResults);
    renderScore();
    showToast('🔄 Đã làm lại!', 'success', 1500);
}

// ===== ANALYSIS =====
function formatAnalysisText(value) {
    return escapeHTML(value)
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<strong>$1</strong>');
}

function renderAnalysis() {
    const container = document.getElementById('analysis-container');
    if (!container) return;

    if (!Array.isArray(analysisData) || analysisData.length === 0) {
        container.innerHTML = '<p class="text-sm text-slate-500">Chưa có dữ liệu phân tích câu.</p>';
        return;
    }

    container.className = 'space-y-3';

    container.innerHTML = analysisData.map((item, idx) => {
        const sentence = String(item.sentence ?? '').trim();
        const grammar = String(item.grammar ?? '').trim();

        const grammarRow = grammar ? `
            <div class="analysis-compact-row">
                <span class="analysis-compact-label">📚 Ngữ pháp:</span>
                <span class="analysis-compact-value">${formatAnalysisText(grammar)}</span>
            </div>` : '';

        return `
            <article class="analysis-compact-card rounded-2xl border border-slate-200 bg-white px-4 py-4 md:px-5 shadow-sm">
                <div class="analysis-compact-header">
                    <h3 class="analysis-compact-title">
                        Câu ${idx + 1}: <span>${escapeHTML(sentence)}</span>
                    </h3>
                    <button type="button"
                            class="analysis-play-btn"
                            data-speech="${escapeHTML(sentence)}"
                            onclick="playAudio(this.dataset.speech)"
                            aria-label="Nghe câu ${idx + 1}"
                            title="Nghe câu này">🔊</button>
                </div>

                <div class="analysis-compact-body">
                    <div class="analysis-compact-row">
                        <span class="analysis-compact-label">📐 Cấu trúc:</span>
                        <span class="analysis-compact-value analysis-formula">${escapeHTML(item.structure ?? '')}</span>
                    </div>
                    ${grammarRow}
                    <div class="analysis-compact-row">
                        <span class="analysis-compact-label">🇻🇳 Dịch:</span>
                        <span class="analysis-compact-value">${escapeHTML(item.translation ?? '')}</span>
                    </div>
                    <div class="analysis-compact-row">
                        <span class="analysis-compact-label">🎯 Chức năng:</span>
                        <span class="analysis-compact-value">${escapeHTML(item.function ?? '')}</span>
                    </div>
                    <div class="analysis-compact-row">
                        <span class="analysis-compact-label">🏷️ Từ loại:</span>
                        <span class="analysis-compact-value">${escapeHTML(item.pos ?? '')}</span>
                    </div>
                </div>
            </article>`;
    }).join('');
}

// ===== VOICE & RATE =====
function populateVoices() {
    const voices = window.speechSynthesis.getVoices();
    const selects = ['voice-select', 'voice-select-dashboard'];
    selects.forEach(id => {
        const select = document.getElementById(id);
        if (!select) return;
        select.innerHTML = '';
        const defaultOpt = document.createElement('option');
        defaultOpt.value = '';
        defaultOpt.textContent = '🔊 Mặc định';
        select.appendChild(defaultOpt);
        const enVoices = voices.filter(v => v.lang.startsWith('en'));
        const voiceList = enVoices.length > 0 ? enVoices : voices;
        voiceList.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v.name;
            opt.textContent = `${v.name} (${v.lang})`;
            select.appendChild(opt);
        });
        const savedVoice = localStorage.getItem('selectedVoice');
        if (savedVoice) {
            select.value = savedVoice;
            selectedVoice = savedVoice;
        }
        select.addEventListener('change', () => {
            const val = select.value;
            selectedVoice = val;
            localStorage.setItem('selectedVoice', val);
            selects.forEach(id2 => {
                const sel2 = document.getElementById(id2);
                if (sel2 && sel2 !== select) {
                    sel2.value = val;
                }
            });
        });
    });
}

if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = populateVoices;
    setTimeout(populateVoices, 500);
}

const rateSlider = document.getElementById('speech-rate');
const rateSliderDash = document.getElementById('speech-rate-dashboard');
const rateDisplay = document.getElementById('rate-display');
const rateDisplayDash = document.getElementById('rate-display-dashboard');

function updateRate(value) {
    speechRate = parseFloat(value);
    if (rateDisplay) rateDisplay.textContent = speechRate.toFixed(1) + 'x';
    if (rateDisplayDash) rateDisplayDash.textContent = speechRate.toFixed(1) + 'x';
    localStorage.setItem('speechRate', speechRate);
}

if (rateSlider) {
    rateSlider.addEventListener('input', () => {
        const val = rateSlider.value;
        if (rateSliderDash) rateSliderDash.value = val;
        updateRate(val);
    });
}
if (rateSliderDash) {
    rateSliderDash.addEventListener('input', () => {
        const val = rateSliderDash.value;
        if (rateSlider) rateSlider.value = val;
        updateRate(val);
    });
}

const savedRate = localStorage.getItem('speechRate');
if (savedRate) {
    speechRate = parseFloat(savedRate);
    if (rateSlider) rateSlider.value = speechRate;
    if (rateSliderDash) rateSliderDash.value = speechRate;
    if (rateDisplay) rateDisplay.textContent = speechRate.toFixed(1) + 'x';
    if (rateDisplayDash) rateDisplayDash.textContent = speechRate.toFixed(1) + 'x';
}


// ===== KIỂM TRA FILE MP3 / MP4 TRONG TAB BÀI ĐỌC =====
const readingMediaState = {
    audio: 'checking',
    video: 'checking'
};

function updateReadingMediaCard() {
    const card = document.getElementById('reading-media-card');
    const title = document.getElementById('reading-media-title');
    const audioWrapper = document.getElementById('audio-wrapper');
    const videoContainer = document.getElementById('video-container');
    if (!card) return;

    const hasAudio = readingMediaState.audio === 'available';
    const hasVideo = readingMediaState.video === 'available';

    if (audioWrapper) audioWrapper.hidden = !hasAudio;
    if (videoContainer) videoContainer.hidden = !hasVideo;

    if (!hasAudio && !hasVideo) {
        card.hidden = true;
        return;
    }

    card.hidden = false;
    if (title) {
        if (hasAudio && hasVideo) title.textContent = '🎵 Audio & 🎬 Video';
        else if (hasAudio) title.textContent = '🎵 Audio';
        else title.textContent = '🎬 Video';
    }
}

function setReadingMediaAvailability(type, isAvailable) {
    if (type !== 'audio' && type !== 'video') return;
    readingMediaState[type] = isAvailable ? 'available' : 'missing';
    updateReadingMediaCard();
}

function watchMediaAvailability(element, type) {
    if (!element) {
        setReadingMediaAvailability(type, false);
        return;
    }

    let settled = false;
    const finish = (isAvailable) => {
        if (settled) return;
        settled = true;
        setReadingMediaAvailability(type, isAvailable);
        if (!isAvailable) {
            const fileName = type === 'audio' ? lessonConfig.audioFile : lessonConfig.videoFile;
            console.info(`Không tìm thấy ${fileName}; đã ẩn phần ${type === 'audio' ? 'âm thanh' : 'video'}.`);
        }
    };

    const markAvailable = () => finish(true);
    const markMissing = () => finish(false);

    element.addEventListener('loadedmetadata', markAvailable, { once: true });
    element.addEventListener('loadeddata', markAvailable, { once: true });
    element.addEventListener('canplay', markAvailable, { once: true });
    element.addEventListener('error', markMissing, { once: true });
    element.addEventListener('abort', () => {
        if (element.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) markMissing();
    }, { once: true });

    // Trường hợp trình duyệt đã nạp metadata trước khi gắn listener.
    if (element.readyState >= HTMLMediaElement.HAVE_METADATA) {
        markAvailable();
        return;
    }

    try {
        element.load();
    } catch (error) {
        console.warn(`Không thể kiểm tra ${type}:`, error);
        markMissing();
    }
}

function initializeReadingMedia() {
    readingMediaState.audio = 'checking';
    readingMediaState.video = 'checking';
    updateReadingMediaCard();

    const mainAudio = document.getElementById('main-audio');
    const mainVideo = document.getElementById('main-video-player');
    watchMediaAvailability(mainAudio, 'audio');
    watchMediaAvailability(mainVideo, 'video');
}

// ===== INIT =====
let hasInitialized = false;
function init() {
    if (hasInitialized) return;
    hasInitialized = true;
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
        const darkToggle = document.querySelector('.dark-toggle');
        if (darkToggle) darkToggle.textContent = '☀️';
    }

    sanitizeStoredState();
    saveLessonState();
    flashcardData = vocabData.slice();

    renderDashboardEssay();
    renderReading();
    renderVocab('');
    renderGrammar();
    renderEx1();
    renderEx2();
    renderEx3();
    renderEx4();
    renderEx5();
    renderEx6();
    renderEx7();
    renderAnalysis();
    switchExercise(1);
    renderScore();
    updateProgress();
    initializeReadingMedia();

    document.querySelectorAll('.translate-box').forEach(el => el.style.display = 'none');

    document.getElementById('vocab-search')?.addEventListener('input', e => renderVocab(e.target.value));

    if (audio) {
        audio.addEventListener('timeupdate', updateAudioProgress);
        audio.addEventListener('loadedmetadata', () => {
            const durationLabel = document.getElementById('audio-duration-label');
            if (durationLabel) durationLabel.textContent = formatTime(audio.duration);
        });
    }

    document.getElementById('word-modal')?.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    const playLoopBtn = document.getElementById('btn-play-loop');
    const stopLoopBtn = document.getElementById('btn-stop-loop');
    if (playLoopBtn) playLoopBtn.addEventListener('click', playLoop);
    if (stopLoopBtn) stopLoopBtn.addEventListener('click', stopLoop);

    setTimeout(populateVoices, 1000);

    setTimeout(() => {
        showToast(`🏃 Chào mừng! Bắt đầu bài học ${lessonConfig.title}.`, 'success', 2500);
    }, 500);
	
    // Khi audio player bắt đầu phát, dừng các audio khác
    const mainAudio = document.getElementById('main-audio');
    const mainVideo = document.getElementById('main-video-player');

    if (mainAudio) {
        mainAudio.addEventListener('play', function() {
            if (window.speechSynthesis) window.speechSynthesis.cancel();
            if (isLooping) stopLoop();
            if (paragraphLoop.active) stopAllAudio();
            if (mainVideo && !mainVideo.paused) mainVideo.pause();
            document.getElementById('tts-status')?.classList.add('hidden');
            document.getElementById('tts-play')?.classList.remove('hidden');
            document.getElementById('tts-stop')?.classList.add('hidden');
            document.getElementById('reading-indicator')?.classList.add('hidden');
        });
    }

    if (mainVideo) {
        mainVideo.addEventListener('play', function() {
            if (window.speechSynthesis) window.speechSynthesis.cancel();
            if (isLooping) stopLoop();
            if (mainAudio && !mainAudio.paused) mainAudio.pause();
            document.getElementById('tts-status')?.classList.add('hidden');
            document.getElementById('tts-play')?.classList.remove('hidden');
            document.getElementById('tts-stop')?.classList.add('hidden');
            document.getElementById('reading-indicator')?.classList.add('hidden');
        });
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) persistStudyTime();
        else lastStudyTick = Date.now();
        updateProgress();
    });
    window.addEventListener('beforeunload', persistStudyTime);
    window.setInterval(() => {
        persistStudyTime();
        updateProgress();
    }, 30000);

    // 👇 GỌI HÀM THÊM LOGO
    addLogos();
}

// 👇 ĐỊNH NGHĨA HÀM NÀY BÊN NGOÀI init()
function addLogos() {
    console.log('🔥 addLogos() đã chạy');

    const scriptTag = document.querySelector('script[src*="CommonN.js"]');
    let basePath = '';
    if (scriptTag) {
        const src = scriptTag.src;
        basePath = src.substring(0, src.lastIndexOf('/') + 1);
    }
    console.log('📁 basePath:', basePath);

    // ============================================================
    // 1. NAVBAR - Thay thế icon 🏙️ bằng logo
    // ============================================================
    const navIcon = document.querySelector('nav .w-11.h-11');
    if (navIcon) {
        console.log('✅ Tìm thấy navIcon');
        const img = document.createElement('img');
        img.src = basePath + 'LogoMCP.png';
        img.alt = 'Logo Minh Châu Phú';
        img.className = 'w-full h-full object-contain p-1';
        img.onerror = () => console.error('❌ Lỗi load ảnh navbar:', img.src);
        img.onload = () => console.log('✅ Ảnh navbar load thành công');
        navIcon.innerHTML = '';
        navIcon.className = 'w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden border border-red-200';
        navIcon.appendChild(img);
    } else {
        console.warn('❌ Không tìm thấy navIcon');
    }

    // ============================================================
    // 2. FOOTER - Logo cạnh chữ "Minh Châu Phú"
    // ============================================================
    const footer = document.querySelector('footer');
    if (footer) {
        console.log('✅ Tìm thấy footer');
        const allSpans = footer.querySelectorAll('span');
        let nameSpan = null;
        allSpans.forEach(span => {
            const text = span.textContent.trim();
            if (text === 'Minh Châu Phú' || text.includes('Minh Châu Phú')) {
                nameSpan = span;
            }
        });

        if (nameSpan) {
            console.log('✅ Tìm thấy nameSpan:', nameSpan.textContent);
            const imgFoot = document.createElement('img');
            imgFoot.src = basePath + 'LogoMCP.png';
            imgFoot.alt = 'MCP';
            imgFoot.className = 'inline-block h-9 w-auto align-middle mr-3';
            imgFoot.onerror = () => console.error('❌ Lỗi load ảnh footer:', imgFoot.src);
            imgFoot.onload = () => console.log('✅ Ảnh footer load thành công');
            nameSpan.parentNode.insertBefore(imgFoot, nameSpan);
            console.log('✅ Đã chèn logo footer cạnh chữ');
        } else {
            console.warn('❌ Không tìm thấy span chứa "Minh Châu Phú" trong footer');
            console.log('📄 Nội dung footer:', footer.textContent);
        }
    } else {
        console.warn('❌ Không tìm thấy footer');
    }

    // ============================================================
    // 3. FOOTER - Logo góc phải (dưới cùng)
    // ============================================================
    const footerEl = document.querySelector('footer');
    if (footerEl) {
        const rightLogoContainer = document.createElement('div');
        rightLogoContainer.style.cssText = `
            position: absolute;
            right: 24px;
            bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
            z-index: 10;
        `;

        const label = document.createElement('span');
        label.textContent = 'Design by';
        label.style.cssText = `
            font-size: 10px;
            color: #94a3b8;
            font-weight: 500;
            letter-spacing: 0.5px;
        `;

        const imgRight = document.createElement('img');
        imgRight.src = basePath + 'LogoMCP.png';
        imgRight.alt = 'MCP';
        imgRight.style.cssText = `
            height: 70px;
            width: auto;
            border-radius: 6px;
            opacity: 0.85;
            transition: opacity 0.3s;
        `;
        imgRight.onerror = () => console.error('❌ Lỗi load logo góc phải:', imgRight.src);
        imgRight.onload = () => console.log('✅ Logo góc phải load thành công');

        imgRight.onmouseenter = () => imgRight.style.opacity = '1';
        imgRight.onmouseleave = () => imgRight.style.opacity = '0.85';

        rightLogoContainer.appendChild(label);
        rightLogoContainer.appendChild(imgRight);

        footerEl.style.position = 'relative';
        footerEl.appendChild(rightLogoContainer);
        console.log('✅ Đã thêm logo góc phải footer');
    }

    // ============================================================
    // 4. DASHBOARD - Logo nằm NGOÀI khung "Mẹo học" (khung riêng)
    //    Tìm bằng NỘI DUNG "Mẹo học" - KHÔNG phụ thuộc màu sắc
    // ============================================================
    const dashboardSection = document.getElementById('tab-dashboard');
    if (dashboardSection) {
        console.log('✅ Tìm thấy dashboard section');

        // Tìm box chứa chữ "Mẹo học" (KHÔNG phụ thuộc màu sắc)
        let tipBox = null;
        const allDivs = dashboardSection.querySelectorAll('div.p-5.rounded-2xl, div.p-4.rounded-2xl, div.p-5.rounded-3xl');
        for (const div of allDivs) {
            const text = div.textContent || '';
            if (text.includes('Mẹo học')) {
                tipBox = div;
                console.log('✅ Tìm thấy box Mẹo học bằng nội dung');
                break;
            }
        }
        
        if (tipBox) {
            // Tạo container riêng cho logo (nằm NGOÀI khung Mẹo học)
            const logoWrapper = document.createElement('div');
            logoWrapper.style.cssText = `
                margin-top: 16px;
                padding: 20px 16px 16px 16px;
                // background: linear-gradient(135deg, #fef2f2 0%, #fef9c3 100%);
				background: #ffffff;
                border-radius: 16px;
                border: 2px solid rgba(239, 68, 68, 0.2);
                text-align: center;
                width: 100%;
                transition: all 0.3s;
            `;

            // Hiệu ứng hover
            logoWrapper.onmouseenter = () => {
                logoWrapper.style.boxShadow = '0 8px 30px rgba(239, 68, 68, 0.15)';
                logoWrapper.style.transform = 'translateY(-2px)';
            };
            logoWrapper.onmouseleave = () => {
                logoWrapper.style.boxShadow = 'none';
                logoWrapper.style.transform = 'translateY(0)';
            };

            // Logo
            const imgBig = document.createElement('img');
            imgBig.src = basePath + 'LogoMCP.png';
            imgBig.alt = 'Minh Châu Phú';
            imgBig.style.cssText = `
                height: 300px;
                width: auto;
                object-fit: contain;
                display: block;
                margin: 0 auto;
                border-radius: 8px;
            `;
            imgBig.onerror = () => console.error('❌ Lỗi load logo dưới Mẹo học:', imgBig.src);
            imgBig.onload = () => console.log('✅ Logo dưới Mẹo học load thành công');

            logoWrapper.appendChild(imgBig);

            // CHÈN LOGO VÀO SAU (bên ngoài) khung Mẹo học
            tipBox.parentNode.insertBefore(logoWrapper, tipBox.nextSibling);
            
            console.log('✅ Đã thêm logo (khung riêng, nằm ngoài Mẹo học) - KHÔNG phụ thuộc màu');
        } else {
            console.warn('❌ Không tìm thấy box chứa "Mẹo học" trong dashboard');
        }
    } else {
        console.warn('❌ Không tìm thấy dashboard section');
    }
}

window.addEventListener('DOMContentLoaded', init, { once: true });

// ===== EXPOSE FUNCTIONS =====
window.initLesson = init;
window.switchTab = switchTab;
window.showWord = showWord;
window.closeModal = closeModal;
window.toggleParagraphLoop = toggleParagraphLoop;
window.playFullText = playFullText;
window.stopAllAudio = stopAllAudio;
window.toggleTranslate = toggleTranslate;
window.seekAudio = seekAudio;
window.switchExercise = switchExercise;
window.evaluateCurrent = evaluateCurrent;
window.resetCurrent = resetCurrent;
window.flipCard = flipCard;
window.nextCard = nextCard;
window.prevCard = prevCard;
window.shuffleFlashcards = shuffleFlashcards;
window.nextTyping = nextTyping;
window.resetTyping = resetTyping;
window.pickWord = pickWord;
window.checkOrder = checkOrder;
window.resetOrder = resetOrder;
window.playAudio = playAudio;
window.toggleRecording = toggleRecording;
window.playRecording = playRecording;
window.stopRecording = stopRecording;
window.deleteRecording = deleteRecording;
window.toggleDarkMode = toggleDarkMode;
window.toggleFullscreen = toggleFullscreen;
window.exportData = exportData;
window.importData = importData;
window.filterVocab = filterVocab;
window.toggleLearned = toggleLearned;
window.toggleLearnedFilter = toggleLearnedFilter;
window.toggleFavorite = toggleFavorite;
window.shuffleVocab = shuffleVocab;
window.toggleFlashcardReverse = toggleFlashcardReverse;
window.toggleFullRecording = toggleFullRecording;
window.toggleTranslateAll = toggleTranslateAll;
window.playLoop = playLoop;
window.stopLoop = stopLoop;
window.toggleAnswer = toggleAnswer;
// ===== FOOTER DARK MODE =====
function updateFooterTheme() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const isDark = document.body.classList.contains('dark');
    const textEl = footer.querySelector('.text-slate-600');
    if (textEl) {
        if (isDark) {
            textEl.className = 'text-xs md:text-sm text-slate-300 font-medium leading-relaxed';
        } else {
            textEl.className = 'text-xs md:text-sm text-slate-600 font-medium leading-relaxed';
        }
    }
}

// Ghi đè hàm toggleDarkMode để cập nhật footer
const originalToggleDarkMode = window.toggleDarkMode;
window.toggleDarkMode = function() {
    if (originalToggleDarkMode) originalToggleDarkMode();
    updateFooterTheme();
};

// Cập nhật footer khi khởi tạo
setTimeout(updateFooterTheme, 100);

// Các hàm tương thích với HTML cũ; đồng bộ vào hệ thống kiểm tra media mới.
window.hideAudio = function() {
    setReadingMediaAvailability('audio', false);
};
window.hideVideo = function() {
    setReadingMediaAvailability('video', false);
};

// =========================================================
// NÚT QUAY LẠI DANH SÁCH BÀI HỌC
// Tự động được thêm vào mọi trang đang sử dụng CommonN.js.
// Không cần sửa từng file HTML.
// =========================================================
(function addBackToLessonIndexButton() {
    "use strict";

    function isIndexPage() {
        const fileName = decodeURIComponent(
            window.location.pathname.split("/").pop() || ""
        ).toLowerCase();

        return (
            fileName === "" ||
            fileName === "index.html" ||
            fileName === "index.htm"
        );
    }

    function getIndexUrl() {
        /*
         * Các trang bài học hiện nằm trong thư mục con:
         * 03hochiminh/, 04danang/, 05tayninh/...
         * Vì vậy ../index.html sẽ quay về đúng trang danh sách.
         */
        return "../index.html";
    }

    function createBackButton() {
        if (isIndexPage()) {
            return;
        }

        if (document.querySelector(".mcp-back-to-index")) {
            return;
        }

        const link = document.createElement("a");

        link.className = "mcp-back-to-index";
        link.href = getIndexUrl();
        link.setAttribute(
            "aria-label",
            "Quay lại danh sách bài học"
        );
        link.title = "Quay lại danh sách bài học";

        link.innerHTML = `
            <span class="mcp-back-icon" aria-hidden="true">←</span>
            <span class="mcp-back-text">Danh sách bài học</span>
        `;

        document.body.appendChild(link);
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            createBackButton,
            { once: true }
        );
    } else {
        createBackButton();
    }
})();


// =========================================================
// NÚT TRANG CHỦ TRÊN THANH MENU
// Tự động chèn trước mục "Tổng Quan" trên mọi trang bài học.
// Không cần sửa từng file HTML.
// =========================================================
(function addHomeMenuItem() {
    "use strict";

    function createHomeMenuItem() {
        if (document.querySelector(".mcp-home-menu")) {
            return;
        }

        const dashboardButton =
            document.getElementById("btn-dashboard");

        if (!dashboardButton || !dashboardButton.parentElement) {
            return;
        }

        const homeLink = document.createElement("a");

        homeLink.className = "mcp-home-menu";
        homeLink.href = "../index.html";
        homeLink.title = "Về trang chủ";
        homeLink.setAttribute("aria-label", "Về trang chủ");

        homeLink.innerHTML = `
            <span class="mcp-home-icon" aria-hidden="true">🏠</span>
            <span class="mcp-home-text">Trang chủ</span>
        `;

        dashboardButton.parentElement.insertBefore(
            homeLink,
            dashboardButton
        );
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            createHomeMenuItem,
            { once: true }
        );
    } else {
        createHomeMenuItem();
    }
})();
