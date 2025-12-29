const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let w, h, stars = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.5,
    s: Math.random() * 0.5 + 0.2
  });
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "white";

  stars.forEach(star => {
    star.y += star.s;
    if (star.y > h) star.y = 0;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();
