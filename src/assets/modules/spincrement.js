// Анимация счетчика
$(function() {
    var Animation = function() {
        var hFrom = $(window).scrollTop();
        var hTo = $(window).scrollTop() + ($(window).height() / 3);
        if ($(".statistic-list").offset().top > hFrom && $(".statistic-list").offset().top < hTo) {
            $('.statistic-item-title').delay(500).spincrement({
                thousandSeparator: "",
                duration: 3000
            });
        }
    };
    $(window).scroll(function() {
        Animation();
    });
    Animation();
});
