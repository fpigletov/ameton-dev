'use strict';

window.addEventListener('DOMContentLoaded', () => {

  //FAQ Slider
  if (document.querySelector('.faq__slider')) {
    new Swiper('.faq__slider', {
      grabCursor: true,
      speed: 800,
      slidesPerView: 4,
      spaceBetween: 24,
      watchOverflow: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      navigation: {
        nextEl: '.faq__arrow--next',
        prevEl: '.faq__arrow--prev',
      },
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1.2,
        },
        560: {
          spaceBetween: 20,
          slidesPerView: 2.2,
        },
        768: {
          slidesPerView: 3,
        },
        1060: {
          slidesPerView: 4,
        },
      },
    });
  }

  //Section Info
  const infoBtns = document.querySelectorAll('.info-item__btn');

  infoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget;

      infoBtns.forEach(el => {
        if (el !== target) {
          el.closest('.info__item').classList.remove('active');
          if (el.nextElementSibling) {
            el.nextElementSibling.classList.remove('active');
          }
        }
      });

      btn.closest('.info__item').classList.toggle('active');
      if (btn.nextElementSibling) {
        btn.nextElementSibling.classList.toggle('active');
      }
    });
  })

  function removeActiveClasses() {
    infoBtns.forEach(btn => {
      btn.closest('.info__item').classList.remove('active');
      if (btn.nextElementSibling) {
        btn.nextElementSibling.classList.remove('active');
      }
    })
  }

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      removeActiveClasses();
    }
  });

  document.addEventListener('click', (e) => {
    const target = e.target;


    if (!target.closest('.info__item')) {
      removeActiveClasses();
    }
  });


});


