const canvas = document.getElementById("star-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* ===== RESIZE ===== */
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

/* ===== MOUSE (PARALLAX) ===== */
let mouse = { x: 0, y: 0 };

window.addEventListener("mousemove", e => {
  mouse.x = (e.clientX - window.innerWidth / 2) / 50;
  mouse.y = (e.clientY - window.innerHeight / 2) / 50;
});

/* ===== STARS ===== */
const stars = [];
const STAR_COUNT = 200;

for (let i = 0; i < STAR_COUNT; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.4 + 0.1,
    alpha: Math.random(),
    alphaChange: Math.random() * 0.02 + 0.005
  });
}

/* ===== SHOOTING STARS ===== */
const shootingStars = [];

function createShootingStar() {
  shootingStars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height * 0.4,
    len: Math.random() * 120 + 100,
    speed: Math.random() * 12 + 10,
    angle: Math.PI / 4,
    life: 0,
    maxLife: 25
  });
}

setInterval(() => {
  if (Math.random() < 0.4) {
    createShootingStar();
  }
}, 2000);

/* ===== ANIMATE ===== */
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  /* NORMAL STARS */
  stars.forEach(star => {
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;

    star.alpha += star.alphaChange;
    if (star.alpha <= 0 || star.alpha >= 1) {
      star.alphaChange *= -1;
    }

    ctx.beginPath();
    ctx.arc(
      star.x + mouse.x * star.r,
      star.y + mouse.y * star.r,
      star.r,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
    ctx.fill();
  });

  /* SHOOTING STARS */
  shootingStars.forEach((s, i) => {
    ctx.strokeStyle = "rgba(255,255,255,0.8)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(
      s.x - Math.cos(s.angle) * s.len,
      s.y - Math.sin(s.angle) * s.len
    );
    ctx.stroke();

    s.x += Math.cos(s.angle) * s.speed;
    s.y += Math.sin(s.angle) * s.speed;
    s.life++;

    if (s.life > s.maxLife) shootingStars.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

animate();
