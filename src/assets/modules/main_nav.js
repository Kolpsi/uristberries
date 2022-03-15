(function() {
    const navMain = document.querySelector('.main-nav');
    const navToggle = document.querySelector('.main-nav-toggle');
    const buttonConsult = document.querySelector('.button-consult');
    navMain.classList.remove('main-nav--nojs');
    /**
     * @description Функция переключения навигационного меню
     */
    navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('main-nav--closed')) {
            navMain.classList.remove('main-nav--closed');
            navMain.classList.add('main-nav--opened');
        } else {
            navMain.classList.add('main-nav--closed');
            navMain.classList.remove('main-nav--opened');
        }
    });


    // Открытие карточек с отзывами
    let activeStep = 1;
    $(".button-more").click(function() {
        $('.happy-item').eq(activeStep++).show();
        if (activeStep == $('.happy-item').length) $(this).hide();
    });

    // прокрутка от блока к блоку
    $('.circle-wrapper').on('click', function() {
        $('html,body').animate({ scrollTop: $('.advice').offset().top + "px" }, { duration: 1E3 });
    });
    if (document.documentElement.clientWidth > 1160) {
        buttonConsult.innerHTML = 'Проконсультироваться'
    }
})();
