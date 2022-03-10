(function() {
    let centerX = document.documentElement.clientWidth / 2;
    let centerY = document.documentElement.clientHeight / 2;

    let elem = document.elementFromPoint(centerX, centerY);

    window.addEventListener('click', function(e) {
        if (e.classList.contains('advice-item')) {

        }
    });
})();