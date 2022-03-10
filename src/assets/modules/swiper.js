const swiper = new Swiper('.swiper', {
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: -70,
            centeredSlides: true,
        }
    }
});
