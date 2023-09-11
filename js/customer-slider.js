const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
    }
    },
  
});