const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const starCount = 300;  // Number of stars
const stars = [];

// Create stars with random starting positions and properties
for (let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * canvas.width,       // Random x position
    y: Math.random() * canvas.height,      // Random y position
    speed: Math.random() * 0.5 + 0.1,      // Speed of star movement (top to bottom)
    radius: Math.random() * 2 + 1,         // Random size of star
    brightness: Math.random() * 0.5 + 0.5, // Initial brightness
    color: Math.random() < 0.5 ? "white" : "golden",  // Random color (white or golden)
    flickerSpeed: Math.random() * 0.05 + 0.02, // Speed of flicker
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    // Update brightness for glimmering (flickering effect)
    star.brightness += (Math.random() - 0.5) * star.flickerSpeed;
    if (star.brightness > 1) star.brightness = 1;
    if (star.brightness < 0.2) star.brightness = 0.2;

    // Move stars top to bottom
    star.y += star.speed;
    if (star.y > canvas.height) {
      // Reset the star's position to the top if it goes off-screen
      star.y = 0;
      star.x = Math.random() * canvas.width;  // Random x position
    }

    // Choose the color of the star (white or golden)
    const starColor = star.color === "golden" 
      ? `rgba(255, 215, 0, ${star.brightness})` 
      : `rgba(255, 255, 255, ${star.brightness})`;

    // Draw the star with a glowing effect
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = starColor;
    ctx.shadowColor = starColor;
    ctx.shadowBlur = 15;  // Glowing effect
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

animate();

// Adjust canvas size when window is resized
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
