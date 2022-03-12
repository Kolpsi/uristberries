(function() {
    const form = document.querySelector('.form')
    const formButton = form.querySelector('.button-form')
    const modal = document.querySelector('.modal')
    const modalClose = modal.querySelector('.modal-close-btn')

    form.addEventListener('submit', function(evt) {
        evt.preventDefault();
        modal.classList.add('modal-show');
    })

    modal.addEventListener('click', function(evt) {
        let target = evt.target;
        evt.preventDefault();
        if (target.classList.contains('modal-close-btn') || target.classList.contains('button-modal'))
            modal.classList.remove('modal-show');
    })
})();