// Satellite Communication Question Bank (Based on ECE R2021 Syllabus)
const questionBank = [
    // UNIT I - SATELLITE ORBITS
    { q: "What does Kepler's first law state about satellite orbits?", options: ["Orbits are circular", "Orbits are elliptical with Earth at one focus", "Orbits are parabolic", "Orbits are hyperbolic"], ans: 1 },
    { q: "The point in an orbit closest to Earth is called?", options: ["Apogee", "Perigee", "Zenith", "Nadir"], ans: 1 },
    { q: "The point in an orbit farthest from Earth is called?", options: ["Perigee", "Apogee", "Focus", "Node"], ans: 1 },
    { q: "What is the orbital period of a geostationary satellite?", options: ["12 hours", "24 hours", "48 hours", "6 hours"], ans: 1 },
    { q: "What is the altitude of a geostationary orbit?", options: ["20,000 km", "35,786 km", "42,164 km", "50,000 km"], ans: 1 },
    { q: "Sun transit outage in satellite communication occurs when?", options: ["Sun is behind the satellite", "Sun is aligned with satellite and earth station", "During lunar eclipse", "At midnight"], ans: 1 },
    { q: "Azimuth angle is measured from which direction?", options: ["East", "West", "True North", "True South"], ans: 2 },
    { q: "Elevation angle is the angle measured between?", options: ["Satellite and horizon", "Satellite and zenith", "Two satellites", "Earth station and equator"], ans: 0 },
    { q: "Which Kepler's law relates orbital period to semi-major axis?", options: ["First Law", "Second Law", "Third Law", "Fourth Law"], ans: 2 },
    { q: "Orbital perturbations are mainly caused by?", options: ["Solar radiation only", "Non-spherical Earth, Sun, Moon gravity", "Satellite weight", "Ground station signals"], ans: 1 },

    // UNIT II - SPACE AND EARTH SEGMENT
    { q: "What subsystem provides electrical power in a satellite?", options: ["Propulsion subsystem", "Power supply subsystem", "Telemetry subsystem", "Transponder"], ans: 1 },
    { q: "Attitude control of a satellite refers to?", options: ["Speed control", "Orientation control in space", "Temperature control", "Frequency control"], ans: 1 },
    { q: "What device in a satellite receives, amplifies, and retransmits signals?", options: ["Solar panel", "Transponder", "Thruster", "Battery"], ans: 1 },
    { q: "TT&C stands for?", options: ["Tracking, Telemetry & Command", "Time, Transmission & Control", "Thermal, Tracking & Communication", "Telemetry, Time & Coding"], ans: 0 },
    { q: "CATV stands for?", options: ["Cable Antenna Television", "Community Antenna Television", "Central Access Television", "Commercial Audio Television"], ans: 1 },
    { q: "A receive-only home TV system is also known as?", options: ["VSAT", "TVRO", "DTH", "MATV"], ans: 1 },
    { q: "MATV system stands for?", options: ["Master Antenna TV", "Multiple Access TV", "Modulated Antenna TV", "Main Analog TV"], ans: 0 },
    { q: "What is the primary power source for most communication satellites?", options: ["Nuclear reactor", "Solar cells", "Fuel cells", "Wind turbines"], ans: 1 },
    { q: "Which subsystem maintains the satellite's orbital position?", options: ["Telemetry", "Command", "Orbit control", "Payload"], ans: 2 },
    { q: "What is the function of a satellite earth station?", options: ["Launch satellites", "Transmit and receive signals to/from satellite", "Manufacture satellites", "Track asteroids"], ans: 1 },

    // UNIT III - SATELLITE LINK DESIGN
    { q: "What does C/N ratio stand for in satellite links?", options: ["Current to Noise", "Carrier to Noise", "Channel to Network", "Code to Null"], ans: 1 },
    { q: "Free space loss in satellite link is proportional to?", options: ["Frequency only", "Distance only", "Square of frequency and distance", "Wavelength"], ans: 2 },
    { q: "Link power budget accounts for?", options: ["Only transmit power", "All gains and losses from transmitter to receiver", "Only antenna gain", "Only atmospheric loss"], ans: 1 },
    { q: "Rain attenuation is more severe at which frequency band?", options: ["L-band", "C-band", "Ku-band and above", "VHF"], ans: 2 },
    { q: "System noise temperature is measured in?", options: ["Watts", "Decibels", "Kelvin", "Hertz"], ans: 2 },
    { q: "EIRP stands for?", options: ["Effective Isotropic Radiated Power", "Earth Incident Radio Power", "Equivalent Input Received Power", "External Isotropic Reflected Power"], ans: 0 },
    { q: "G/T ratio of an earth station represents?", options: ["Gain to Temperature (figure of merit)", "Ground to Transmitter ratio", "Gigahertz to Time", "Gain to Threshold"], ans: 0 },
    { q: "Satellite uplink frequency is typically?", options: ["Lower than downlink", "Higher than downlink", "Same as downlink", "Not fixed"], ans: 1 },
    { q: "What causes intermodulation interference in satellite links?", options: ["Rain", "Non-linear amplifier characteristics", "Solar eclipse", "Antenna misalignment"], ans: 1 },
    { q: "Frequency reuse in satellites is achieved by?", options: ["Using same frequency everywhere", "Orthogonal polarization and spatial separation", "Increasing power", "Reducing bandwidth"], ans: 1 },

    // UNIT IV - SATELLITE LAUNCH
    { q: "What type of orbit is used for initial satellite deployment before GEO transfer?", options: ["Low Earth Orbit (LEO)", "Geostationary Transfer Orbit (GTO)", "Sun-synchronous orbit", "Polar orbit"], ans: 1 },
    { q: "Apogee kick motor is used to?", options: ["Launch from ground", "Transfer satellite from GTO to GEO", "De-orbit satellite", "Spin the satellite"], ans: 1 },
    { q: "Which is NOT a launch vehicle?", options: ["Ariane", "Atlas", "PSLV", "INTELSAT"], ans: 3 },
    { q: "Primary power in a spacecraft is usually provided by?", options: ["Batteries alone", "Solar arrays with battery backup", "Nuclear reactors", "Fuel cells"], ans: 1 },
    { q: "Thermal control in spacecraft is needed to?", options: ["Increase speed", "Maintain equipment within operating temperature", "Reduce weight", "Increase bandwidth"], ans: 1 },
    { q: "Satellite telemetry is used for?", options: ["Sending commands to satellite", "Monitoring satellite health and status", "Broadcasting TV", "Navigation"], ans: 1 },
    { q: "Station keeping refers to?", options: ["Building earth stations", "Maintaining satellite's orbital position", "Tracking ground vehicles", "Launching rockets"], ans: 1 },
    { q: "Satellite tracking is performed to?", options: ["Control satellite attitude", "Determine satellite position and velocity", "Encrypt signals", "Modulate carrier"], ans: 1 },
    { q: "The communication payload of a satellite includes?", options: ["Solar panels only", "Transponders and antennas", "Thrusters only", "Batteries only"], ans: 1 },
    { q: "Propulsion system in a satellite is used for?", options: ["Signal amplification", "Orbit correction and station keeping", "Power generation", "Data encoding"], ans: 1 },

    // UNIT V - COMMUNICATION SATELLITES
    { q: "INTELSAT stands for?", options: ["International Telecommunications Satellite Organization", "Internal Telecom Satellite", "Integrated Telephone Satellite", "Inter-Network Telecommunication System"], ans: 0 },
    { q: "VSAT stands for?", options: ["Very Small Aperture Terminal", "Variable Satellite Access Terminal", "Vertical Signal Amplification Technology", "Virtual Satellite Array Terminal"], ans: 0 },
    { q: "GPS stands for?", options: ["Global Positioning System", "Geostationary Position Satellite", "Ground Pointing System", "General Purpose Satellite"], ans: 0 },
    { q: "DBS/DTH satellite services provide?", options: ["Military communication", "Direct broadcast to home receivers", "Deep space exploration", "Underground communication"], ans: 1 },
    { q: "LNB in a home satellite dish stands for?", options: ["Low Noise Block converter", "Linear Network Bridge", "Local Node Base", "Long Narrow Band"], ans: 0 },
    { q: "GSM in mobile satellite context stands for?", options: ["Global System for Mobile", "Geostationary Satellite Module", "Ground Station Management", "General Service Module"], ans: 0 },
    { q: "HDTV transmitted via satellite provides?", options: ["Low resolution only", "High definition video and audio", "Only audio", "Only data"], ans: 1 },
    { q: "Mobile satellite services use which type of orbit primarily?", options: ["GEO and LEO", "Only polar", "Only Molniya", "Only sun-synchronous"], ans: 0 },
    { q: "The outdoor unit of a satellite home receiver consists of?", options: ["TV and decoder", "Dish antenna and LNB", "Only cables", "Set-top box"], ans: 1 },
    { q: "INTELSAT series satellites operate primarily in which orbit?", options: ["LEO", "MEO", "GEO", "Polar"], ans: 2 }
];

// Shuffle array utility
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Global Game State
const GameState = {
    MENU: 0,
    PLAYING_ARCHERY: 1,
    PLAYING_QUIZ: 2,
    GAME_OVER: 3
};

let currentState = GameState.MENU;
let score = 0;
let arrowsTotal = 10;
let arrowsUsed = 0;
let targetHitStats = { shots: 0, hits: 0, quizQuestionsCorrect: 0, quizQuestionsTotal: 0 };
let currentQuestionQueue = [];
let questionTimer = null;
let timeRemaining = 10;

// Canvas Setup
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
let cw = canvas.width = window.innerWidth;
let ch = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    cw = canvas.width = window.innerWidth;
    ch = canvas.height = window.innerHeight;
    initEntities();
});

// Audio setup
const playSound = (id) => {
    const audio = document.getElementById(id);
    if(audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Audio play prevented:", e));
    }
};

// UI Elements mapping
const UI = {
    startScreen: document.getElementById('start-screen'),
    hud: document.getElementById('hud'),
    quizOverlay: document.getElementById('quiz-overlay'),
    gameOverScreen: document.getElementById('game-over-screen'),
    scoreDisplay: document.getElementById('score-display'),
    arrowCounter: document.getElementById('arrow-counter'),
    powerBar: document.getElementById('power-bar'),
    toast: document.getElementById('feedback-toast'),
    toastTitle: document.getElementById('toast-title'),
    toastMsg: document.getElementById('toast-message'),
    toastIcon: document.getElementById('toast-icon')
};

let animFrameId = null;

function updateHUD() {
    UI.scoreDisplay.innerText = score;
    UI.arrowCounter.innerHTML = '';
    for(let i=0; i<arrowsTotal; i++) {
        let div = document.createElement('div');
        div.className = 'arrow-icon' + (i < arrowsUsed ? ' used' : '');
        UI.arrowCounter.appendChild(div);
    }
}

function showToast(title, msg, icon="🎯", isGood=true) {
    UI.toastTitle.innerText = title;
    UI.toastTitle.style.color = isGood ? "#00ff80" : "#ff3366";
    UI.toastMsg.innerText = msg;
    UI.toastIcon.innerText = icon;
    
    UI.toast.classList.remove('hidden');
    setTimeout(() => UI.toast.classList.add('show'), 10);
    
    setTimeout(() => {
        UI.toast.classList.remove('show');
        setTimeout(() => UI.toast.classList.add('hidden'), 300);
    }, 2500);
}

// Event Listeners
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('restart-btn').addEventListener('click', () => {
    playSound('sfx-click');
    UI.gameOverScreen.classList.remove('active');
    setTimeout(() => {
        UI.gameOverScreen.classList.add('hidden');
        startGame();
    }, 400);
});

// --- Archery Visual Engine & Physics ---

const archer = { x: 150, y: ch - 200, bowRotation: 0 };
const target = { x: cw - 200, y: ch - 400, radius: 100, speedy: 2, dir: 1, baseRadius: 100 };
let arrow = { x: archer.x, y: archer.y, vx: 0, vy: 0, angle: 0, active: false, stuck: false, stuckDist: 0, stuckTargetYOffset: 0 };

// Aiming & Power state
let isAiming = false;
let powerLevel = 0;
let powerGrowing = true;
let aimAngle = 0;

// Ring colors: index 0 = center (Black), index 4 = outermost (Orange)
// Center to outermost: Black(5Q) → White(4Q) → Blue(3Q) → Yellow(2Q) → Orange(1Q)
// Drawing loop draws i=4 first (outermost) down to i=0 (center on top)
const targetColors = ['#111111', '#ffffff', '#2a5cff', '#ffdd00', '#ff6600'];
const ringNames = ['Black', 'White', 'Blue', 'Yellow', 'Orange'];
const ringQuestions = [5, 4, 3, 2, 1];
// Quiz theme colors per ring
const ringThemeColors = [
    { border: '#888888', glow: 'rgba(136,136,136,0.4)', text: '#cccccc' },  // Black (center)
    { border: '#ffffff', glow: 'rgba(255,255,255,0.3)', text: '#ffffff' },  // White
    { border: '#2a5cff', glow: 'rgba(42,92,255,0.4)', text: '#5c8aff' },   // Blue
    { border: '#ffdd00', glow: 'rgba(255,221,0,0.4)', text: '#ffdd00' },   // Yellow
    { border: '#ff6600', glow: 'rgba(255,102,0,0.4)', text: '#ff6600' }    // Orange (edge)
];
let currentRingTheme = null;

function startGame() {
    playSound('sfx-click');
    score = 0;
    arrowsTotal = 10;
    arrowsUsed = 0;
    targetHitStats = { shots: 0, hits: 0, quizQuestionsCorrect: 0, quizQuestionsTotal: 0 };
    
    // adjust canvas size again just in case
    cw = canvas.width = window.innerWidth;
    ch = canvas.height = window.innerHeight;
    
    updateHUD();
    
    UI.startScreen.classList.remove('active');
    setTimeout(() => {
        UI.startScreen.classList.add('hidden');
        UI.hud.classList.remove('hidden');
        currentState = GameState.PLAYING_ARCHERY;
        initEntities();
        if(!animFrameId) {
            animFrameId = requestAnimationFrame(renderLoop);
        }
    }, 400);
}

function initEntities() {
    archer.x = Math.min(200, cw * 0.15);
    archer.y = ch - 200;
    
    target.x = cw - Math.min(250, cw * 0.2);
    target.y = ch / 2;
    target.baseRadius = Math.min(100, cw * 0.1);
    target.radius = target.baseRadius;
    
    resetArrow();
}

function resetArrow() {
    arrow.active = false;
    arrow.stuck = false;
    arrow.x = archer.x;
    arrow.y = archer.y;
    arrow.vx = 0;
    arrow.vy = 0;
    isAiming = false;
    powerLevel = 0;
    UI.powerBar.style.width = '0%';
}

// Input Handlers
window.addEventListener('mousedown', (e) => {
    if(currentState !== GameState.PLAYING_ARCHERY || arrow.active || arrow.stuck) return;
    
    // Check if clicked UI elements (like buttons) - if so, ignore
    if(e.target.tagName === 'BUTTON') return;

    isAiming = true;
    powerLevel = 0;
    powerGrowing = true;
    updateAim(e);
});

window.addEventListener('mousemove', (e) => {
    if(isAiming) updateAim(e);
});

window.addEventListener('mouseup', (e) => {
    if(isAiming) {
        shootArrow();
    }
    isAiming = false;
});

// Touch support
window.addEventListener('touchstart', (e) => {
    if(currentState !== GameState.PLAYING_ARCHERY || arrow.active || arrow.stuck) return;
    if(e.target.tagName === 'BUTTON') return;
    
    isAiming = true;
    powerLevel = 0;
    powerGrowing = true;
    updateAim(e.touches[0]);
});
window.addEventListener('touchmove', (e) => {
    if(isAiming) updateAim(e.touches[0]);
});
window.addEventListener('touchend', (e) => {
    if(isAiming) {
        shootArrow();
    }
    isAiming = false;
});

function updateAim(e) {
    const dx = e.clientX - archer.x;
    const dy = e.clientY - archer.y;
    aimAngle = Math.atan2(dy, dx);
    // Limit angle so player doesn't shoot backwards
    if(aimAngle < -Math.PI/2) aimAngle = -Math.PI/2;
    if(aimAngle > Math.PI/2) aimAngle = Math.PI/2;
    archer.bowRotation = aimAngle;
}

function shootArrow() {
    // Check if we have arrows left
    if(arrowsUsed >= arrowsTotal) return;
    
    arrowsUsed++;
    updateHUD();
    playSound('sfx-shoot');
    
    const maxSpeed = 35; // px per frame
    const speed = 10 + (powerLevel / 100) * maxSpeed;
    
    arrow.active = true;
    arrow.x = archer.x;
    arrow.y = archer.y;
    arrow.vx = Math.cos(aimAngle) * speed;
    arrow.vy = Math.sin(aimAngle) * speed;
    arrow.angle = aimAngle;
    
    powerLevel = 0;
    UI.powerBar.style.width = '0%';
}

function checkHit() {
    // Simple point/circle collision for arrow tip
    const tipX = arrow.x + Math.cos(arrow.angle) * 30; // 30 is half arrow length
    const tipY = arrow.y + Math.sin(arrow.angle) * 30;
    
    // Target face is a vertical line essentially, but to make it 2D dartboard-like,
    // we use a circle. Actually, if target is side profile, it's a vertical segment.
    // Let's make it a front-facing target slightly angled, or just simple circle hit on 2D plane:
    // Assume target is an ellipse or circle in front view, but placed at right side.
    const dx = tipX - target.x;
    const dy = tipY - target.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    
    if(dist <= target.radius) {
        // Hit!
        arrow.active = false;
        arrow.stuck = true;
        arrow.stuckDist = Math.sqrt(dx*dx + dy*dy);
        arrow.stuckTargetYOffset = dy; // relative to target center to move with it
        
        // Push arrow slightly into target
        arrow.x += arrow.vx * 0.2;
        arrow.y += arrow.vy * 0.2;
        
        playSound('sfx-hit');
        targetHitStats.hits++;
        evaluateHit(dist);
    } else if (arrow.y > ch || arrow.x > cw || arrow.x < 0) {
        // Missed off screen
        arrow.active = false;
        showToast("Missed!", "0 Questions", "💨", false);
        setTimeout(nextTurn, 1000);
    }
}

function evaluateHit(dist) {
    // 5 rings — center (index 0) gives most questions
    const ringWidth = target.radius / 5;
    let ringIndex;
    
    if(dist < ringWidth) ringIndex = 0;          // Black center → 5Q
    else if(dist < ringWidth * 2) ringIndex = 1;  // White → 4Q
    else if(dist < ringWidth * 3) ringIndex = 2;  // Blue → 3Q
    else if(dist < ringWidth * 4) ringIndex = 3;  // Yellow → 2Q
    else ringIndex = 4;                            // Orange edge → 1Q
    
    const ringHit = ringQuestions[ringIndex];
    const colorName = ringNames[ringIndex];
    const title = ringHit === 5 ? "🎯 BULLSEYE!" : `HIT ${colorName.toUpperCase()} RING!`;
    
    showToast(title, `${ringHit} Question${ringHit > 1 ? 's' : ''} Unlocked`, "🎯", true);
    
    setTimeout(() => {
        triggerQuiz(ringHit, ringIndex);
    }, 1500);
}

function renderLoop() {
    ctx.clearRect(0, 0, cw, ch);
    
    // Update logic
    if(currentState === GameState.PLAYING_ARCHERY) {
        // Power meter logic
        if(isAiming && !arrow.active && !arrow.stuck) {
            if(powerGrowing) {
                powerLevel += 2;
                if(powerLevel >= 100) powerGrowing = false;
            } else {
                powerLevel -= 2;
                if(powerLevel <= 0) powerGrowing = true;
            }
            UI.powerBar.style.width = powerLevel + '%';
        }
        
        // Target moving logic (bounce up down)
        // Harder rounds could make it move faster
        const speedMultiplier = 1 + (arrowsUsed * 0.1); 
        target.y += target.speedy * target.dir * speedMultiplier;
        if(target.y - target.radius < 100) {
            target.y = target.radius + 100;
            target.dir = 1;
        }
        if(target.y + target.radius > ch - 100) {
            target.y = ch - target.radius - 100;
            target.dir = -1;
        }
        
        // Arrow Physics
        const gravity = 0.5;
        if(arrow.active) {
            arrow.vy += gravity;
            arrow.x += arrow.vx;
            arrow.y += arrow.vy;
            arrow.angle = Math.atan2(arrow.vy, arrow.vx);
            
            checkHit();
        } else if (arrow.stuck) {
            // move arrow with target
            arrow.y = target.y + arrow.stuckTargetYOffset;
        } else if (!isAiming) {
            // align with archer when idle
            arrow.x = archer.x;
            arrow.y = archer.y;
            arrow.angle = 0;
        }
    }
    
    // Render Draw
    drawGround();
    drawTarget();
    drawArcher();
    drawArrow();
    drawAimLine();

    if(currentState === GameState.PLAYING_ARCHERY) {
        animFrameId = requestAnimationFrame(renderLoop);
    } else {
        // Continue rendering static background if states change, but freeze animations
        animFrameId = requestAnimationFrame(renderLoop);
    }
}

function drawAimLine() {
    if(!isAiming || arrow.active || arrow.stuck) return;

    ctx.save();

    // --- Trajectory prediction dots ---
    const speed = 10 + (powerLevel / 100) * 35;
    let simX = archer.x;
    let simY = archer.y - 10;
    let simVx = Math.cos(aimAngle) * speed;
    let simVy = Math.sin(aimAngle) * speed;
    const gravity = 0.5;

    for(let i = 0; i < 25; i++) {
        simVy += gravity;
        simX += simVx;
        simY += simVy;

        if(simX > cw || simY > ch || simX < 0) break;

        const alpha = 1 - (i / 25);
        const dotSize = 3 - (i / 25) * 2;

        ctx.beginPath();
        ctx.arc(simX, simY, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${alpha * 0.6})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(simX, simY, dotSize + 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${alpha * 0.15})`;
        ctx.fill();
    }

    // --- Dashed aim line from bow ---
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(archer.x, archer.y - 10);
    const lineLen = 80;
    ctx.lineTo(
        archer.x + Math.cos(aimAngle) * lineLen,
        archer.y - 10 + Math.sin(aimAngle) * lineLen
    );
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.setLineDash([]);

    // --- Crosshair at cursor ---
    const cursorX = archer.x + Math.cos(aimAngle) * 120;
    const cursorY = archer.y - 10 + Math.sin(aimAngle) * 120;
    const pulse = 1 + Math.sin(Date.now() / 200) * 0.15;
    const chSize = 14 * pulse;

    // Outer ring
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, chSize, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 51, 102, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Glow ring
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, chSize + 4, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 51, 102, 0.2)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Cross
    ctx.beginPath();
    ctx.moveTo(cursorX - chSize - 3, cursorY);
    ctx.lineTo(cursorX - 6, cursorY);
    ctx.moveTo(cursorX + 6, cursorY);
    ctx.lineTo(cursorX + chSize + 3, cursorY);
    ctx.moveTo(cursorX, cursorY - chSize - 3);
    ctx.lineTo(cursorX, cursorY - 6);
    ctx.moveTo(cursorX, cursorY + 6);
    ctx.lineTo(cursorX, cursorY + chSize + 3);
    ctx.strokeStyle = 'rgba(255, 51, 102, 0.9)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Center dot
    ctx.beginPath();
    ctx.arc(cursorX, cursorY, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#ff3366';
    ctx.fill();

    // Power indicator text near crosshair
    ctx.fillStyle = `rgba(255, 255, 255, 0.7)`;
    ctx.font = '600 12px Outfit';
    ctx.textAlign = 'center';
    ctx.fillText(Math.round(powerLevel) + '%', cursorX, cursorY - chSize - 10);

    ctx.restore();
}

function drawGround() {
    // Sky gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, ch);
    skyGrad.addColorStop(0, '#0a0e27');
    skyGrad.addColorStop(0.6, '#1a1a3e');
    skyGrad.addColorStop(1, '#2d4a2e');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, cw, ch);

    // Ground
    const groundY = ch - 100;
    const groundGrad = ctx.createLinearGradient(0, groundY, 0, ch);
    groundGrad.addColorStop(0, '#2d5a2e');
    groundGrad.addColorStop(1, '#1a3a1b');
    ctx.fillStyle = groundGrad;
    ctx.fillRect(0, groundY, cw, 100);

    // Ground line (grass top)
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(cw, groundY);
    ctx.strokeStyle = '#4a8a4c';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Some simple stars
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    for(let i = 0; i < 30; i++) {
        // Use a seeded-ish pattern so they don't flicker
        const sx = ((i * 137.5) % cw);
        const sy = ((i * 73.1) % (groundY * 0.6));
        ctx.fillRect(sx, sy, 2, 2);
    }
}

function drawTarget() {
    ctx.save();
    ctx.translate(target.x, target.y);
    
    // Outer shadow for 3D depth
    ctx.beginPath();
    ctx.arc(0, 0, target.radius + 8, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fill();
    
    // Outer border ring (wooden frame)
    ctx.beginPath();
    ctx.arc(0, 0, target.radius + 5, 0, Math.PI * 2);
    const frameGrad = ctx.createRadialGradient(0, 0, target.radius - 5, 0, 0, target.radius + 5);
    frameGrad.addColorStop(0, '#a0522d');
    frameGrad.addColorStop(0.5, '#cd853f');
    frameGrad.addColorStop(1, '#8b4513');
    ctx.fillStyle = frameGrad;
    ctx.fill();
    
    // Draw 5 rings as proper circles (matching hit detection)
    const ringWidth = target.radius / 5;
    const ringLabels = ['5Q', '4Q', '3Q', '2Q', '1Q']; // center to outer
    
    for(let i=4; i>=0; i--) {
        const r = target.radius - (ringWidth * (4 - i));
        
        // Ring gradient for 3D effect
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        
        const grad = ctx.createRadialGradient(-r*0.2, -r*0.2, 0, 0, 0, r);
        const baseColor = targetColors[i];
        
        if(baseColor === '#111111') {
            grad.addColorStop(0, '#333333');
            grad.addColorStop(1, '#050505');
        } else if(baseColor === '#ffffff') {
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(1, '#d0d0d0');
        } else if(baseColor === '#2a5cff') {
            grad.addColorStop(0, '#4a7cff');
            grad.addColorStop(1, '#1a3ccc');
        } else if(baseColor === '#ffdd00') {
            grad.addColorStop(0, '#ffee55');
            grad.addColorStop(1, '#ccaa00');
        } else {
            grad.addColorStop(0, '#ff8833');
            grad.addColorStop(1, '#cc4400');
        }
        
        ctx.fillStyle = grad;
        ctx.fill();
        
        // Ring borders
        if(i > 0) {
            ctx.strokeStyle = (baseColor === '#ffffff' || baseColor === '#ffdd00')
                ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.25)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }
        
        // Ring label (question count)
        if(r > 12) {
            const labelR = r - ringWidth * 0.5;
            if(labelR > 5) {
                ctx.save();
                ctx.font = `bold ${Math.max(10, ringWidth * 0.35)}px Outfit`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Contrast text color
                if(baseColor === '#111111' || baseColor === '#2a5cff' || baseColor === '#ff6600') {
                    ctx.fillStyle = 'rgba(255,255,255,0.7)';
                } else {
                    ctx.fillStyle = 'rgba(0,0,0,0.5)';
                }
                
                ctx.fillText(ringLabels[i], 0, -labelR);
                ctx.restore();
            }
        }
    }
    
    // Bullseye center dot
    ctx.beginPath();
    ctx.arc(0, 0, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#ff0000';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // Crosshair lines on target
    ctx.beginPath();
    ctx.moveTo(-target.radius, 0);
    ctx.lineTo(target.radius, 0);
    ctx.moveTo(0, -target.radius);
    ctx.lineTo(0, target.radius);
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // Wooden stand
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(-8, target.radius + 3, 16, ch - target.y);
    
    // Cross beam
    ctx.fillStyle = '#a0522d';
    ctx.fillRect(-25, target.radius + 15, 50, 8);
    
    ctx.restore();
}

function drawArcher() {
    const { x, y } = archer;
    ctx.save();
    
    // Simple stickman
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    // Head
    ctx.beginPath();
    ctx.arc(x, y - 40, 15, 0, Math.PI*2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.stroke();
    
    // Body
    ctx.beginPath();
    ctx.moveTo(x, y - 25);
    ctx.lineTo(x, y + 40);
    ctx.stroke();
    
    // Legs
    ctx.beginPath();
    ctx.moveTo(x, y + 40);
    ctx.lineTo(x - 20, y + 90);
    ctx.moveTo(x, y + 40);
    ctx.lineTo(x + 20, y + 90);
    ctx.stroke();
    
    // Bow Hand (Front hand pointing to aim angle)
    ctx.translate(x, y - 10); // shoulder pivot
    
    // Back Arm (pulling string)
    ctx.save();
    const pullDist = isAiming ? 10 + (powerLevel / 100) * 30 : 10;
    ctx.rotate(isAiming ? aimAngle : 0);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-pullDist, 10);
    ctx.strokeStyle = "#aaa";
    ctx.stroke();
    ctx.restore();

    // Front Arm & Bow
    ctx.rotate(isAiming ? aimAngle : 0);
    
    // Arm
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(30, 0); // straight out
    ctx.stroke();
    
    // Bow
    ctx.beginPath();
    ctx.quadraticCurveTo(50, 0, 30, 60);
    ctx.moveTo(30, -60);
    ctx.quadraticCurveTo(50, 0, 30, 60);
    ctx.strokeStyle = "#8b4513"; // brown bow
    ctx.lineWidth = 4;
    ctx.stroke();
    
    // Bow String
    ctx.beginPath();
    ctx.moveTo(30, -60);
    ctx.lineTo(30 - pullDist, 0);
    ctx.lineTo(30, 60);
    ctx.strokeStyle = "rgba(255,255,255,0.4)";
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.restore();
}

function drawArrow() {
    if(!arrow.active && !arrow.stuck && !isAiming) return; // hold by archer handled if we want
    
    ctx.save();
    
    let ax, ay, aAngle;
    
    if(arrow.active || arrow.stuck) {
        ax = arrow.x;
        ay = arrow.y;
        aAngle = arrow.angle;
    } else if (isAiming) {
        // drawn in bow
        const pullDist = 10 + (powerLevel / 100) * 30;
        const bowPivotX = archer.x;
        const bowPivotY = archer.y - 10;
        
        ax = bowPivotX - Math.cos(aimAngle) * pullDist + Math.cos(aimAngle) * 30;
        ay = bowPivotY - Math.sin(aimAngle) * pullDist + Math.sin(aimAngle) * 30;
        aAngle = aimAngle;
    }

    ctx.translate(ax, ay);
    ctx.rotate(aAngle);
    
    // Shaft
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(30, 0);
    ctx.strokeStyle = "#e2b86b";
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Tip
    ctx.beginPath();
    ctx.moveTo(30, -3);
    ctx.lineTo(40, 0);
    ctx.lineTo(30, 3);
    ctx.fillStyle = "#888";
    ctx.fill();
    
    // Fletching (feathers)
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(-20, -4);
    ctx.moveTo(-30, 0);
    ctx.lineTo(-20, 4);
    ctx.strokeStyle = "#ff3366";
    ctx.stroke();

    ctx.restore();
}

function triggerQuiz(numQuestions, ringIndex) {
    // Generate numQuestions of random questions
    currentQuestionQueue = shuffle([...questionBank]).slice(0, numQuestions);
    targetHitStats.quizQuestionsTotal += numQuestions;
    
    // Apply ring color theme to quiz overlay
    currentRingTheme = ringThemeColors[ringIndex];
    const overlay = UI.quizOverlay;
    overlay.style.borderColor = currentRingTheme.border;
    overlay.style.boxShadow = `0 0 40px ${currentRingTheme.glow}, 0 20px 40px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1)`;
    
    // Color the progress badge
    const progressEl = document.getElementById('quiz-progress-text');
    progressEl.style.background = currentRingTheme.glow;
    progressEl.style.color = currentRingTheme.text;
    
    // Color the timer ring
    const timerCircle = document.getElementById('timer-progress');
    timerCircle.style.stroke = currentRingTheme.border;
    
    currentState = GameState.PLAYING_QUIZ;
    UI.hud.classList.add('hidden');
    overlay.classList.remove('hidden');
    overlay.classList.add('active');
    
    showNextQuestion();
}

function showNextQuestion() {
    if(currentQuestionQueue.length === 0) {
        // Quiz complete for this arrow
        endQuizTurn();
        return;
    }
    
    const q = currentQuestionQueue[0];
    
    // Update UI Progress
    const totalQueueForCurrentRound = currentQuestionQueue.length; // actually we need total generated this round
    // We'll just show remaining
    document.getElementById('quiz-progress-text').innerText = `${currentQuestionQueue.length} Question(s) Remaining`;
    
    // Set Question Text
    document.getElementById('question-text').innerText = q.q;
    
    // Render Options
    const optsContainer = document.getElementById('options-container');
    optsContainer.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((optText, index) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="opt-letter">${letters[index]}</span> ${optText}`;
        btn.onclick = () => handleAnswer(index, q.ans, btn);
        optsContainer.appendChild(btn);
    });
    
    // Reset Timer
    timeRemaining = 10;
    updateTimerVisuals();
    if(questionTimer) clearInterval(questionTimer);
    questionTimer = setInterval(() => {
        timeRemaining--;
        updateTimerVisuals();
        if(timeRemaining <= 0) {
            handleAnswer(-1, q.ans, null); // Timeout
        }
    }, 1000);
}

function updateTimerVisuals() {
    document.getElementById('timer-text').innerText = timeRemaining;
    const circle = document.getElementById('timer-progress');
    const pct = ((10 - timeRemaining) / 10) * 163; // 163 is dasharray circumference
    circle.style.strokeDashoffset = pct;
    
    if(timeRemaining <= 3) {
        circle.style.stroke = "#ff3366";
    } else {
        circle.style.stroke = "var(--secondary)";
    }
}

function handleAnswer(selectedIndex, correctIndex, btnElement) {
    if(questionTimer) clearInterval(questionTimer);
    
    // Disable all options
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.style.pointerEvents = 'none');
    
    if(selectedIndex === correctIndex) {
        // Correct
        if(btnElement) btnElement.classList.add('correct');
        playSound('sfx-correct');
        score += 1;
        targetHitStats.quizQuestionsCorrect++;
    } else {
        // Wrong or Timeout
        if(btnElement) btnElement.classList.add('wrong');
        if(selectedIndex !== -1) {
            btns[correctIndex].classList.add('correct'); // Highlight correct
        }
        playSound('sfx-wrong');
    }
    
    // Wait then next question
    setTimeout(() => {
        currentQuestionQueue.shift();
        showNextQuestion();
    }, 1500);
}

function endQuizTurn() {
    UI.quizOverlay.classList.remove('active');
    setTimeout(() => {
        UI.quizOverlay.classList.add('hidden');
        UI.hud.classList.remove('hidden');
        
        updateHUD();
        nextTurn();
    }, 400);
}

function nextTurn() {
    if(arrowsUsed >= arrowsTotal) {
        gameOver();
    } else {
        currentState = GameState.PLAYING_ARCHERY;
        resetArrow();
    }
}

function gameOver() {
    currentState = GameState.GAME_OVER;
    
    // Calculate stats
    const acc = Math.round((targetHitStats.hits / arrowsTotal) * 100) || 0;
    const qRate = targetHitStats.quizQuestionsTotal > 0 
        ? Math.round((targetHitStats.quizQuestionsCorrect / targetHitStats.quizQuestionsTotal) * 100) 
        : 0;
    
    document.getElementById('final-score').innerText = score;
    document.getElementById('stat-accuracy').innerText = acc + '%';
    document.getElementById('stat-quiz-rate').innerText = qRate + '%';
    
    UI.hud.classList.add('hidden');
    UI.gameOverScreen.classList.remove('hidden');
    setTimeout(() => {
        UI.gameOverScreen.classList.add('active');
    }, 10);
}
