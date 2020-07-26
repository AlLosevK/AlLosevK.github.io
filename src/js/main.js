import Swiper from '../local_modules/swiper/swiper-bundle.min.js';

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
