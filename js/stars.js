const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numStars = 500;
const stars = [];

class Star {
  constructor() {
    this.reset();
    this.opacity = Math.random() * 0.5 + 0.5;
    this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 1.2 + 0.3;
    this.speed = Math.random() * 0.2 + 0.05; // very slow speed
  }

  update() {
    this.y += this.speed;

    // Slowly twinkle
    this.opacity += this.twinkleDirection * 0.005;
    if (this.opacity >= 1 || this.opacity <= 0.3) {
      this.twinkleDirection *= -1;
    }

    // Reset to top if out of view
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.shadowBlur = 5;
    ctx.shadowColor = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.fill();
  }
}

function createStars() {
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    star.update();
    star.draw();
  }

  requestAnimationFrame(animateStars);
}

createStars();
animateStars();

// Adjust canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars.length = 0;
  createStars();
});
