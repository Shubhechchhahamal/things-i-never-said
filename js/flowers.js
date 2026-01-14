const canvas = document.getElementById("flowers");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balls = [];

for (let i = 0; i < 25; i++) {
  balls.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    speed: Math.random() * 0.4 + 0.2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  balls.forEach(b => {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255,140,0,0.6)";
    ctx.lineWidth = 2;
    ctx.stroke();

    b.y -= b.speed;
    if (b.y < -20) {
      b.y = canvas.height + 20;
      b.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(draw);
}

draw();
