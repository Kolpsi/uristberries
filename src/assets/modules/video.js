$('.about-video').parent().click(function() {
    if ($(this).children(".about-video").get(0).paused) {
        $(this).children(".about-video").get(0).play();
        $(this).children(".playpause").fadeOut();

    } else {
        $(this).children(".about-video").get(0).pause();

        $(this).children(".playpause").fadeIn();

    }


});

const videoWrapper = document.querySelector('.video-wrapper');
const video = videoWrapper.querySelector('.about-video');

if (video.src == '') {
    videoWrapper.classList.add('hidden');
} else {
    videoWrapper.classList.add('show');
}
