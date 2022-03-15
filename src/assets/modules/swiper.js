const swiper = new Swiper('.swiper', {
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: -70,
            centeredSlides: true,
        },
        1160: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides: false,
        }
    }
});

if (document.documentElement.clientWidth > 1160) {
    const happyList = document.querySelector('.happy-list');
    const happyItem = document.querySelectorAll('.happy-item');

    happyItem.forEach((item) => {
        item.classList.add('swiper-slide');
        item.classList.remove('happy-item-hidden')
    })

    happyList.classList.add('swiper-wrapper');

    var x = document.getElementsByClassName("slider-produtos-wrap");


    const swiper2 = new Swiper('.swiper2', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 600,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
