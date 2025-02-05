// Initialize the canvas and context
const canvas = document.getElementById('dustbackgroundCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize the canvas when the window is resized
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Generate random dots
const numDots = 200;
const dots = [];

for (let i = 0; i < numDots; i++) {
    dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2
    });
}

// Animate the dots
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let dot of dots) {
        // Update the position
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        // Boundary detection
        if (dot.x < 0 || dot.x > canvas.width) dot.speedX *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.speedY *= -1;

        // Draw the dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    }

    requestAnimationFrame(animate);
}

animate();
