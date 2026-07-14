const canvas = document.createElement("canvas");
canvas.id = "particles";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
}
resize();

window.addEventListener("resize", resize);

const particles = [];

for (let i = 0; i < 120; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.4,
        a: Math.random(),
        speed: Math.random() * 0.15 + 0.03
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.y -= p.speed;

        if (p.y < -5) {
            p.y = canvas.height + 5;
            p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,140,40,${p.a})`;
        ctx.shadowColor = "#ff7a00";
        ctx.shadowBlur = 8;
        ctx.fill();
    });

    requestAnimationFrame(draw);
}

draw();