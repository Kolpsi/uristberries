(function() {
    const navMain = document.querySelector('.main-nav');
    const navToggle = document.querySelector('.main-nav-toggle');


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

    var activeStep = 1;
    $(".button-more").click(function() {
        $('.happy-item').eq(activeStep++).show();
        if (activeStep == $('.happy-item').length) $(this).hide();
    });

})();
