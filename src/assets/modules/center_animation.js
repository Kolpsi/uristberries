(function() {
    const adviseItem1 = document.querySelector('.advice-item-1');
    const adviseItem2 = document.querySelector('.advice-item-2');
    const adviseItem3 = document.querySelector('.advice-item-3');
    const adviseTitle = document.querySelector('.advice-title')
    if (document.documentElement.clientWidth < 1160) {
        function getCoord(elem) {
            let centerElem = document.elementFromPoint(400, 400)
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
    } else {
        function getCoord(elem) {
            let centerElem = document.elementFromPoint(1170, 300)
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
    };
})();
