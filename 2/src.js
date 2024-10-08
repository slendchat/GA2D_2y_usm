document.addEventListener('mousemove', function (e) {
  const texts = document.querySelectorAll('.parallax-text1, .parallax-text2');
  texts.forEach(text => {
      const speed = text.getAttribute('data-speed');
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;
      text.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

window.addEventListener('scroll', function () {
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  document.querySelector('.parallax-bg').style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  document.querySelector('.text1').style.transform = 'translateY(' + scrollPosition * 0.1 + 'px)';
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', function () {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add('active');
    document.querySelector('.slider-container').style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', function () {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides[currentIndex].classList.add('active');
    document.querySelector('.slider-container').style.transform = `translateX(-${currentIndex * 100}%)`;
});
