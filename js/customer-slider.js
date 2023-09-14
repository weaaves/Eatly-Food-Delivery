const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
    }
    },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});