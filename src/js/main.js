import Swiper from '../local_modules/swiper/swiper-bundle.min.js';
import FullPage from '../local_modules/fullpage.js/dist/fullpage.min.js';

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const fullpage = new FullPage('#fullpage', {
  licenseKey: 'LD@o1ZF%p7',
	//options here
  scrollBar: false,
  anchors:['start', 'portfolio', 'contacts'],
});
