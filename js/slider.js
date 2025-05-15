let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 2000; // Time in ms (5000ms = 5s)

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function changeSlide(n) {
  currentSlide = (currentSlide + n + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Autoplay function
function autoSlide() {
  changeSlide(1);
}

// Start autoplay
let autoplay = setInterval(autoSlide, slideInterval);

// Optional: Pause on hover
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
  clearInterval(autoplay);
});
document.querySelector('.slider-container').addEventListener('mouseleave', () => {
  autoplay = setInterval(autoSlide, slideInterval);
});
