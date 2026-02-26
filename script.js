// ─── Counter ───
const subCountEl = document.getElementById("subCount");
let target = 500; // ← change to your real goal
let count = 0;

const counter = setInterval(() => {
  if (count < target) {
    count += Math.floor(Math.random() * 3) + 1; // little randomness
    subCountEl.textContent = count.toLocaleString();
  } else {
    clearInterval(counter);
    subCountEl.classList.add("complete");
  }
}, 18);

// ─── Typing with glitch reveal ───
const text = "DARKNESS KALU";
const typingEl = document.getElementById("typingText");
let i = 0;

function type() {
  if (i < text.length) {
    typingEl.innerHTML += text[i];
    i++;
    setTimeout(type, 80 + Math.random() * 60);
  } else {
    // After typing → full glitch intensity
    typingEl.parentElement.style.animationDuration = "2.2s";
  }
}
setTimeout(type, 600);

// ─── Growing text + dots ───
const memberEl = document.getElementById("memberCount");
let dots = 0;
setInterval(() => {
  dots = (dots + 1) % 4;
  memberEl.textContent = "Unlimited" + ".".repeat(dots);
}, 450);

// ─── Music ───
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

toggle.addEventListener("click", () => {
  if (music.paused) {
    music.volume = 0.25;
    music.play().catch(()=>{});
    toggle.textContent = "🔊";
  } else {
    music.pause();
    toggle.textContent = "🔇";
  }
});

// ─── Enhanced Particles ───
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

const particles = [];
for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * w,
    y: Math.random() * h,
    size: Math.random() * 2.8 + 0.8,
    speedY: Math.random() * 1.2 + 0.4,
    alpha: Math.random() * 0.5 + 0.3,
    hue: Math.random() > 0.5 ? 340 : 180   // red ~ cyan variation
  });
}

function draw() {
  ctx.clearRect(0, 0, w, h);

  particles.forEach(p => {
    p.y += p.speedY;
    if (p.y > h) p.y = -10;

    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = `hsl(${p.hue}, 100%, 60%)`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    // faint trail
    ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, 0.15)`;
    ctx.beginPath();
    ctx.arc(p.x, p.y + 8, p.size * 1.6, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(draw);
}


draw();
