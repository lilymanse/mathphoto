// === [데이터 세팅] ===
const questions = [
    {
        q: "수학 숙제를 할 때 나의 스타일은?",
        a: [
            { text: "오답이나 글씨 흐트러짐 없이 완벽하게 풀 때까지 끝내지 않는다.", type: "A" },
            { text: "나만의 새로운 풀이 방법이 떠오르면 일단 시도해 본다.", type: "B" },
            { text: "풀리지 않는 깊은 원리가 나오면 끝까지 파고들어 생각한다.", type: "C" },
            { text: "가장 효율적이고 빠르게 풀 수 있는 공식을 찾아 해결한다.", type: "D" }
        ]
    },
    {
        q: "정말 어려운 수학 난제를 만났을 때 나는?",
        a: [
            { text: "배운 정의와 개념, 공식의 첫 단계부터 차근차근 검토한다.", type: "A" },
            { text: "그림을 그리거나 직관적인 힌트를 떠올려 수수께끼 풀듯 접근한다.", type: "B" },
            { text: "문제가 가진 근본적인 의미와 수학적 아름다움에 대해 고민해 본다.", type: "C" },
            { text: "이 문제를 해결하면 현실에서 어디에 써먹을 수 있을지 생각한다.", type: "D" }
        ]
    },
    {
        q: "내가 가장 흥미를 느끼는 수학 분야는?",
        a: [
            { text: "정교한 계산과 딱 떨어지는 논리가 필요한 '대수와 방정식'", type: "A" },
            { text: "숫자들의 신비로운 성질과 규칙을 파헤치는 '정수론'", type: "B" },
            { text: "끝없는 상상력과 우주의 크기를 논하는 '집합과 무한의 세계'", type: "C" },
            { text: "암호 해독, 확률, 데이터 분석처럼 실생활에 유용한 '이산수학/통계'", type: "D" }
        ]
    },
    {
        q: "친구들과 만날 때 약속 시간에 대한 나의 태도는?",
        a: [
            { text: "1분도 틀리지 않게 정확한 시간에 도착하도록 계산해서 움직인다.", type: "A" },
            { text: "그날 기분이나 상황에 따라 번뜩이는 생각대로 유연하게 움직인다.", type: "B" },
            { text: "가끔 나만의 생각에 깊이 몰두해 있다가 시간 가는 줄 모를 때가 있다.", type: "C" },
            { text: "효율적인 동선을 짜서 늦지 않게 최적의 방법으로 도착한다.", type: "D" }
        ]
    },
    {
        q: "나의 책상 위 모습이나 필기 스타일은?",
        a: [
            { text: "모든 물건이 직각으로 정렬되어 있고, 노트는 자를 댄 듯 깔끔하다.", type: "A" },
            { text: "기발한 아이디어나 낙서, 메모지가 사방에 자유롭게 붙어 있다.", type: "B" },
            { text: "책과 종이가 가득 쌓여 있지만, 나만 아는 깊은 규칙으로 분류되어 있다.", type: "C" },
            { text: "공부하기 가장 편리하도록 필요한 필기구와 도구만 딱 배치되어 있다.", type: "D" }
        ]
    },
    {
        q: "내가 수학을 공부하는 가장 큰 이유는?",
        a: [
            { text: "머릿속 복잡한 생각들이 명쾌하게 정리되는 질서가 좋아서", type: "A" },
            { text: "어려운 문제를 나만의 방식으로 풀어냈을 때의 짜릿한 지적 쾌감 때문에", type: "B" },
            { text: "눈에 보이지 않는 절대적인 진리와 생각의 자유로움을 탐구하고 싶어서", type: "C" },
            { text: "세상의 복잡한 문제를 해결하고 미래를 설계하는 강력한 도구라서", type: "D" }
        ]
    },
    {
        q: "수학 수행평가(보고서 쓰기 또는 발표)를 한다면 나의 전략은?",
        a: [
            { text: "빈틈없는 논리 구조와 완벽한 서술로 감점 요인이 없는 보고서를 쓴다.", type: "A" },
            { text: "듣는 사람들의 호기심을 자극하는 흥미로운 수수께끼나 퀴즈 형식으로 발표한다.", type: "B" },
            { text: "남들이 생각하지 못한 깊이 있고 독창적인 주제를 선정해 깊게 서술한다.", type: "C" },
            { text: "실생활의 유용한 사례를 중심으로 시각 자료와 파워포인트를 깔끔하게 활용한다.", type: "D" }
        ]
    },
    {
        q: "주변 친구들이 나를 표현하는 말은?",
        a: [
            { text: "\"너는 정말 계획적이고 빈틈없이 철저해!\"", type: "A" },
            { text: "\"너는 생각이 정말 튀고 독특해서 같이 있으면 재밌어!\"", type: "B" },
            { text: "\"너는 가끔 되게 깊은 생각에 빠져 있는 철학자 같아!\"", type: "C" },
            { text: "\"너는 아는 것도 많고 현실적인 문제를 참 잘 해결해!\"", type: "D" }
        ]
    },
    {
        q: "만약 내가 수학 동아리를 만든다면?",
        a: [
            { text: "수학의 기초부터 심화까지 체계적으로 마스터하는 학구적인 동아리", type: "A" },
            { text: "수학 퍼즐, 보드게임, 난제 풀이 등 지적 유희를 즐기는 동아리", type: "B" },
            { text: "수학의 역사, 철학, 무한의 개념을 자유롭게 토론하는 사색 동아리", type: "C" },
            { text: "코딩, 암호 제작, 인공지능 등 수학을 기술에 접목하는 융합 동아리", type: "D" }
        ]
    },
    {
        q: "인생을 살아가면서 내가 가장 중요하게 생각하는 가치는?",
        a: [
            { text: "규칙과 계획성, 흔들리지 않는 안정적인 질서", type: "A" },
            { text: "고정관념에서 벗어난 자유로운 영감과 즐거움", type: "B" },
            { text: "남들이 알아주지 않아도 끝까지 쫓고 싶은 나만의 진리", type: "C" },
            { text: "세상을 더 편리하고 이롭게 바꾸는 실용적인 능력", type: "D" }
        ]
    }
];

const results = {
    A: { name: "가우스 (Gauss)", img: "gauss.png", desc: "빈틈없는 논리의 완벽주의자!" },
    B: { name: "페르마 (Fermat)", img: "fermat.png", desc: "기발한 직관의 아이디어 뱅크!" },
    C: { name: "칸토어 (Cantor)", img: "cantor.png", desc: "무한을 탐구한 철학적 사색가!" },
    D: { name: "튜링 (Turing)", img: "alan_turing.png", desc: "미래를 바꾼 최고의 실천가!" }
};

// === 🎭 표정/느낌 랜덤 배정용 변형 세트 (이미지 없이 CSS/캔버스 필터로 연출) ===
const expressionVariants = [
    { label: "든든함",   filter: "none",                              rotate: -4, badge: "😌" },
    { label: "신남",     filter: "saturate(1.5) brightness(1.08)",    rotate: 5,  badge: "😆" },
    { label: "골똘함",   filter: "grayscale(0.2) contrast(1.15)",     rotate: -7, badge: "🤔" },
    { label: "자신만만", filter: "hue-rotate(-8deg) saturate(1.25)",  rotate: 6,  badge: "😎" },
    { label: "깜짝",     filter: "brightness(1.18) saturate(1.1)",    rotate: 0,  badge: "😲" },
    { label: "뿌듯함",   filter: "sepia(0.15) saturate(1.2)",         rotate: 3,  badge: "🥹" }
];

function randomExpression() {
    return expressionVariants[Math.floor(Math.random() * expressionVariants.length)];
}

let currentIdx = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };
let finalResultType = 'A';
let capturedImages = []; // 촬영된 4장의 이미지 배열 { data, expression }
let userMessage = '';

function setActiveView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

function startQuiz() {
    currentIdx = 0;
    scores = { A: 0, B: 0, C: 0, D: 0 };
    setActiveView('quiz-view');
    showQuestion();
}

function showQuestion() {
    const q = questions[currentIdx];
    document.getElementById('q-number').innerText = currentIdx + 1;
    document.getElementById('q-text').innerText = q.q;
    document.getElementById('progress').style.width = ((currentIdx + 1) / questions.length) * 100 + '%';

    const btnContainer = document.getElementById('answer-buttons');
    btnContainer.innerHTML = '';

    q.a.forEach(ans => {
        const btn = document.createElement('button');
        btn.innerText = ans.text;
        btn.onclick = () => selectAnswer(ans.type);
        btnContainer.appendChild(btn);
    });
}

function selectAnswer(type) {
    scores[type]++;
    currentIdx++;
    if (currentIdx < questions.length) showQuestion();
    else showResult();
}

function showResult() {
    finalResultType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const data = results[finalResultType];
    const expr = randomExpression();

    document.getElementById('result-name').innerText = data.name;
    document.getElementById('result-img').src = data.img;
    document.getElementById('result-img').style.filter = expr.filter;
    document.getElementById('result-img').style.transform = `rotate(${expr.rotate}deg)`;
    document.getElementById('result-badge').innerText = expr.badge;
    document.getElementById('result-desc').innerText = data.desc;

    setActiveView('result-view');
}

// === 📸 포토부스 및 연속 카운트다운 촬영 시스템 ===
const video = document.getElementById('webcam');
const canvas = document.getElementById('hidden-canvas');
const frameOverlay = document.getElementById('frame-overlay');
const countdownDisplay = document.getElementById('countdown-display');
const liveBadge = document.getElementById('live-badge');
let stream = null;

async function startPhotoBooth() {
    setActiveView('photo-view');
    frameOverlay.src = results[finalResultType].img;
    capturedImages = [];
    document.getElementById('start-shot-btn').style.display = 'block';
    document.getElementById('start-shot-btn').innerText = '▶️ 촬영 시작';
    document.getElementById('shot-counter').innerText = '1';
    applyLiveExpression();

    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user", width: 640, height: 480 },
            audio: false
        });
        video.srcObject = stream;
        video.muted = true;
        await video.play().catch(() => {});
    } catch (err) {
        alert("카메라 연결 실패! 권한을 확인해주세요.");
        backToResult();
    }
}

// 촬영 화면의 워터마크 캐릭터에도 매 컷 랜덤 표정을 미리보기로 보여줌
function applyLiveExpression() {
    const expr = randomExpression();
    frameOverlay.style.filter = expr.filter;
    frameOverlay.style.transform = `rotate(${expr.rotate}deg)`;
    liveBadge.innerText = expr.badge;
    return expr;
}

// 4회 연속 촬영 자동 루프 함수
function startFourShots() {
    document.getElementById('start-shot-btn').style.display = 'none'; // 촬영 중 버튼 숨기기
    let currentShot = 1;

    function captureLoop() {
        if (currentShot > 4) {
            // 4장 촬영 종료 -> 검토 단계로 이동
            stopCamera();
            renderReviewGrid();
            setActiveView('review-view');
            return;
        }

        document.getElementById('shot-counter').innerText = currentShot;
        let count = 3; // 3초 카운트다운
        countdownDisplay.innerText = count;
        countdownDisplay.style.display = 'flex';

        let timer = setInterval(() => {
            count--;
            if (count > 0) {
                countdownDisplay.innerText = count;
            } else {
                clearInterval(timer);
                countdownDisplay.style.display = 'none';

                // 단일 컷 스냅샷 촬영 및 임시 저장
                saveSingleFrame();
                currentShot++;
                if (currentShot <= 4) applyLiveExpression();

                // 1초 뒤 다음 촬영 진행
                setTimeout(captureLoop, 1000);
            }
        }, 1000);
    }

    captureLoop();
}

// 카메라에서 현재 컷을 따서 임시 저장하는 함수 (표정 변형이 적용된 워터마크 포함)
function saveSingleFrame(expressionOverride) {
    canvas.width = 800; // 고화질 저장용
    canvas.height = 1067; // 3:4 비율
    const ctx = canvas.getContext('2d');

    // 1. 카메라 화면 그리기 (좌우 반전 해결)
    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1); // 미러링 반전

    // 비디오의 중앙 부분을 3:4 비율로 크롭하여 그리기
    const videoRatio = video.videoWidth / video.videoHeight;
    const targetRatio = canvas.width / canvas.height;
    let sw, sh, sx, sy;

    if (videoRatio > targetRatio) {
        sh = video.videoHeight;
        sw = sh * targetRatio;
        sx = (video.videoWidth - sw) / 2;
        sy = 0;
    } else {
        sw = video.videoWidth;
        sh = sw / targetRatio;
        sx = 0;
        sy = (video.videoHeight - sh) / 2;
    }

    ctx.drawImage(video, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    // 2. 캐릭터 워터마크 추가 (매 컷 랜덤 표정/각도로 연출, 사진 우측 하단)
    const expr = expressionOverride || randomExpression();
    const frameImg = new Image();
    frameImg.src = frameOverlay.src;
    const fw = canvas.width * 0.25;
    const fh = (frameImg.height / frameImg.width) * fw;
    const cx = canvas.width - fw / 2 - 20;
    const cy = canvas.height - fh / 2 - 20;

    ctx.save();
    ctx.filter = expr.filter;
    ctx.globalAlpha = 0.85;
    ctx.translate(cx, cy);
    ctx.rotate(expr.rotate * Math.PI / 180);
    ctx.drawImage(frameImg, -fw / 2, -fh / 2, fw, fh);
    ctx.restore();

    // 3. 표정 이모지 배지 그리기
    ctx.save();
    ctx.font = `${Math.round(fw * 0.35)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(expr.badge, cx + fw / 2 - 6, cy - fh / 2 + 6);
    ctx.restore();

    // 배열에 저장 (재촬영 시 표정도 다시 뽑을 수 있도록 함께 보관)
    capturedImages.push({ data: canvas.toDataURL('image/png') });
}

function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
}

// === 🔍 촬영 검토 & 재촬영 ===
function renderReviewGrid() {
    const grid = document.getElementById('review-grid-target');
    grid.innerHTML = '';
    capturedImages.forEach((shot, index) => {
        const cell = document.createElement('div');
        cell.className = 'review-cell';

        const img = document.createElement('img');
        img.src = shot.data;
        cell.appendChild(img);

        const idxTag = document.createElement('span');
        idxTag.className = 'slot-idx';
        idxTag.innerText = index + 1;
        cell.appendChild(idxTag);

        const retakeBtn = document.createElement('button');
        retakeBtn.className = 'btn-retake';
        retakeBtn.innerText = '🔄 다시 찍기';
        retakeBtn.onclick = () => retakeShot(index);
        cell.appendChild(retakeBtn);

        grid.appendChild(cell);
    });
}

async function retakeShot(index) {
    // 카메라를 다시 켜고, 촬영 화면에서 해당 컷만 새로 찍는다
    setActiveView('photo-view');
    document.getElementById('shot-counter').innerText = index + 1;
    document.getElementById('start-shot-btn').style.display = 'block';
    document.getElementById('start-shot-btn').innerText = `🔄 ${index + 1}번 컷 다시 찍기`;
    applyLiveExpression();

    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user", width: 640, height: 480 },
            audio: false
        });
        video.srcObject = stream;
        video.muted = true;
        await video.play().catch(() => {});
    } catch (err) {
        alert("카메라 연결 실패! 권한을 확인해주세요.");
        setActiveView('review-view');
        return;
    }

    document.getElementById('start-shot-btn').onclick = () => retakeSingleShot(index);
}

function retakeSingleShot(index) {
    document.getElementById('start-shot-btn').style.display = 'none';
    let count = 3;
    countdownDisplay.innerText = count;
    countdownDisplay.style.display = 'flex';

    let timer = setInterval(() => {
        count--;
        if (count > 0) {
            countdownDisplay.innerText = count;
        } else {
            clearInterval(timer);
            countdownDisplay.style.display = 'none';

            const expr = randomExpression();
            saveSingleFrameAt(index, expr);
            stopCamera();

            // 재촬영 버튼 원상 복구
            const startBtn = document.getElementById('start-shot-btn');
            startBtn.onclick = () => startFourShots();

            renderReviewGrid();
            setActiveView('review-view');
        }
    }, 1000);
}

function saveSingleFrameAt(index, expr) {
    canvas.width = 800;
    canvas.height = 1067;
    const ctx = canvas.getContext('2d');

    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);

    const videoRatio = video.videoWidth / video.videoHeight;
    const targetRatio = canvas.width / canvas.height;
    let sw, sh, sx, sy;

    if (videoRatio > targetRatio) {
        sh = video.videoHeight;
        sw = sh * targetRatio;
        sx = (video.videoWidth - sw) / 2;
        sy = 0;
    } else {
        sw = video.videoWidth;
        sh = sw / targetRatio;
        sx = 0;
        sy = (video.videoHeight - sh) / 2;
    }

    ctx.drawImage(video, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    const frameImg = new Image();
    frameImg.src = frameOverlay.src;
    const fw = canvas.width * 0.25;
    const fh = (frameImg.height / frameImg.width) * fw;
    const cx = canvas.width - fw / 2 - 20;
    const cy = canvas.height - fh / 2 - 20;

    ctx.save();
    ctx.filter = expr.filter;
    ctx.globalAlpha = 0.85;
    ctx.translate(cx, cy);
    ctx.rotate(expr.rotate * Math.PI / 180);
    ctx.drawImage(frameImg, -fw / 2, -fh / 2, fw, fh);
    ctx.restore();

    ctx.save();
    ctx.font = `${Math.round(fw * 0.35)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(expr.badge, cx + fw / 2 - 6, cy - fh / 2 + 6);
    ctx.restore();

    capturedImages[index] = { data: canvas.toDataURL('image/png') };
}

function backToResult() {
    stopCamera();
    setActiveView('result-view');
}

// === 💌 메시지 입력 단계 ===
const messageInput = document.getElementById('message-input');
if (messageInput) {
    messageInput.addEventListener('input', () => {
        document.getElementById('char-count-num').innerText = messageInput.value.length;
    });
}

function goToMessageStep() {
    setActiveView('message-view');
}

function goToOutputChoice() {
    userMessage = messageInput ? messageInput.value.trim() : '';
    setActiveView('output-choice-view');
}

// === 🎁 출력 방식 선택 ===
function chooseOutput(method) {
    if (method === 'print') {
        buildFourCutFrame();
        setActiveView('print-view');
    }
    // QR 옵션은 준비 중 (추후 구현)
}

// === 🖨️ 최종 결과 프레임 제작 및 인쇄 관리 ===
function buildFourCutFrame() {
    // 하단 인포 바 세팅
    document.getElementById('print-math-avatar').src = results[finalResultType].img;
    document.getElementById('print-frame-title').innerText = results[finalResultType].name;

    const msg = (userMessage || (messageInput ? messageInput.value.trim() : ''));
    const msgEl = document.getElementById('print-message');
    msgEl.innerText = msg;
    msgEl.style.display = msg ? 'block' : 'none';

    const grid = document.getElementById('photos-grid-target');
    grid.innerHTML = ''; // 초기화

    // 4장의 사진을 스크랩북 느낌으로 살짝씩 다른 각도로 배치
    capturedImages.forEach((shot, index) => {
        const slot = document.createElement('div');
        slot.className = 'photo-slot';
        const wiggle = (index % 2 === 0 ? -1 : 1) * (2 + Math.random() * 2);
        slot.style.transform = `rotate(${wiggle.toFixed(1)}deg)`;

        const tape = document.createElement('span');
        tape.className = 'washi-tape';
        slot.appendChild(tape);

        const img = document.createElement('img');
        img.src = shot.data;

        // 브라우저가 이미지를 완벽히 그렸는지 검사하는 안전장치
        img.onload = function () {
            slot.classList.add('loaded');
        };

        slot.appendChild(img);
        grid.appendChild(slot);
    });
}

function printFourCut() {
    // [핵심] 모든 이미지가 화면에 완전히 로드될 수 있도록 0.5초(500ms)의 여유 시간을 준 뒤 인쇄창을 엽니다.
    setTimeout(() => {
        window.print();
    }, 500);
}
