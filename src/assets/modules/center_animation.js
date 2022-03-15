// подсвечивание элемента находящегося в центре экрана
(function() {
    const adviseItem1 = document.querySelector('.advice-item-1');
    const adviseItem2 = document.querySelector('.advice-item-2');
    const adviseItem3 = document.querySelector('.advice-item-3');

    function getCoord(elem) {
        let centerX = document.documentElement.clientWidth / 2;
        let centerY = document.documentElement.clientHeight / 2;
        let centerElem = document.elementFromPoint(centerX, centerY)
        if (centerElem.classList.contains('advice-item-1')) {
            adviseItem1.classList.add('active');
            adviseItem2.classList.remove('active');
            adviseItem3.classList.remove('active');
        } else
        if (centerElem.classList.contains('advice-item-2')) {
            adviseItem2.classList.add('active');
            adviseItem1.classList.remove('active');
            adviseItem3.classList.remove('active');
        } else
        if (centerElem.classList.contains('advice-item-3')) {
            adviseItem3.classList.add('active');
            adviseItem1.classList.remove('active');
            adviseItem2.classList.remove('active');
        }
    };

    document.addEventListener('scroll', getCoord)

})();
