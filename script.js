let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
 slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? '1' : '0';
 });
}

function nextSlide() {
 currentIndex = (currentIndex + 1) % slides.length;
 showSlide(currentIndex);
}

function startSlider() {
 showSlide(currentIndex);
 setInterval(nextSlide, 3000);
}

startSlider();