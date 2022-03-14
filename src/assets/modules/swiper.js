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

// if (document.documentElement.clientWidth > 1160) {
//     // const happy = document.querySelector('.happy');
//     // const happylist = happy.querySelector(".happy-list");
//     // const swiperContainer = happy.querySelector(".swiper-container");
//     // const happyItem = happy.querySelectorAll('.happy-item');
//     // happylist.classList.add('swiper2')
//     // swiperContainer.classList.add('swiper-wrapper')
//     const swiper2 = new Swiper('.swiper2', {
//         loop: true,
//         slidesPerView: 1,
//         centeredSlides: true,
//     });
// }
