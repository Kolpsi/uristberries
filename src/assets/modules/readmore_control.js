$(function() {
        if ($(window).width() < 1160){
            $('.team-readmore1').readmore({
                speed: 500,
                startOpen: false,
                maxHeight: 0,
                lessLink: '<p class="more"><a href="#" class="btn btn-default team-cards-btn">свернуть</a></p>',
                moreLink: '<p class="more"><a href="#" class="btn btn-default team-cards-btn">подробнее...</a></p>',
            });
            $('.team-readmore2').readmore({
                speed: 500,
                startOpen: false,
                maxHeight: 0,
                lessLink: '<p class="more"><a href="#" class="btn btn-default team-cards-btn">свернуть</a></p>',
                moreLink: '<p class="more"><a href="#" class="btn btn-default team-cards-btn">подробнее...</a></p>',
            });
            $('.team-readmore3').readmore({
                speed: 500,
                startOpen: false,
                maxHeight: 0,
                lessLink: '<p class="more"><a href="#" class="btn btn-default team-cards-btn">свернуть</a></p>',
                moreLink: '<p class="more"><a href="#" class="btn btn-default team-cards-btn">подробнее...</a></p>',
            });
        }
        else{
            $('.team-readmore1').readmore({
                speed: 500,
                startOpen: false,
                maxHeight: 200,
                lessLink: '<p class="more"><a href="#" class="btn btn-default team-cards-btn">свернуть</a></p>',
                moreLink: '<p class="more"><a href="#" class="btn btn-default team-cards-btn">читать полностью</a></p>',
            });
            $('.team-readmore2').readmore({
                speed: 500,
                startOpen: false,
                maxHeight: 200,
                lessLink: '<p class="more"><a href="#" class="btn btn-default team-cards-btn">свернуть</a></p>',
                moreLink: '<p class="more"><a href="#" class="btn btn-default team-cards-btn">читать полностью</a></p>',
            });
            $('.team-readmore3').readmore({
                speed: 500,
                startOpen: false,
                maxHeight: 200,
                lessLink: '<p class="more"><a href="#" class="btn btn-default team-cards-btn">свернуть</a></p>',
                moreLink: '<p class="more"><a href="#" class="btn btn-default team-cards-btn">читать полностью</a></p>',
            });
        }
    
});
