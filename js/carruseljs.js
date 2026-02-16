let index = 0;
const slides = document.querySelectorAll(".slide");
const carousel = document.getElementById("carousel");
const intervalTime = 4000;
let autoSlide;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

function startAuto() {
  autoSlide = setInterval(nextSlide, intervalTime);
}

function stopAuto() {
  clearInterval(autoSlide);
}

/* Pausa al pasar el mouse */
carousel.addEventListener("mouseenter", stopAuto);
carousel.addEventListener("mouseleave", startAuto);

/* Iniciar */
startAuto();
