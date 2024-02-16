const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearactiveclass()

    slide.classList.add('active')
  })
}

function clearactiveclass() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}