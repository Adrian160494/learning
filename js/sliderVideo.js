var actualVideoPlayer = 0;
var numberOfVideoPlayers = 0;
var windowWidth = $(window).outerWidth() / 2;
var halfActualVideoPlayerWidth = $('.video-player').outerWidth() / 2;
var startPosition = windowWidth - halfActualVideoPlayerWidth;

$(document).ready(function () {
    windowWidth = $(window).outerWidth() / 2;
    halfActualVideoPlayerWidth = $('.video-player').outerWidth() / 2;
    startPosition = windowWidth - halfActualVideoPlayerWidth;
    $('.video-player-slider').css('transform', 'translateX(' + startPosition + 'px)');
    checkVisibilityOfVideoPlayer(actualVideoPlayer);
    $(window).resize(function () {
        windowWidth = $(window).outerWidth() / 2;
        halfActualVideoPlayerWidth = $('.video-player').outerWidth() / 2;
        startPosition = windowWidth - halfActualVideoPlayerWidth;
        $('.video-player-slider').css('transform', 'translateX(' + startPosition + 'px)');
    });


    $('.video-player').each(function () {
        numberOfVideoPlayers++;
    });

    $('.navigation-left').on('click', function () {
        if (actualVideoPlayer == 0) {
            actualVideoPlayer = numberOfVideoPlayers - 1;
        } else {
            actualVideoPlayer--;
        }
        sliderVideoPlayerSlide(actualVideoPlayer);
        console.log(actualVideoPlayer);

    });

    $('.navigation-right').on('click', function () {
        if (actualVideoPlayer == (numberOfVideoPlayers - 1)) {
            actualVideoPlayer = 0;
        } else {
            actualVideoPlayer++;
        }
        sliderVideoPlayerSlide(actualVideoPlayer);
        console.log(actualVideoPlayer);
    });

});



function sliderVideoPlayerSlide(id) {
    checkVisibilityOfVideoPlayer(id);
    console.log('up');
    var actualVideoPlayerWidth = $('.video-player').outerWidth();
    var position =  (parseInt(actualVideoPlayerWidth) * (parseInt(id))) - startPosition ;
    console.log(position);
    if(id != 0){
        $('.video-player-slider').css('transform', 'translateX(-' + position + 'px)');
    } else {
        $('.video-player-slider').css('transform', 'translateX(' + ( startPosition) + 'px)');
    }
}

function checkVisibilityOfVideoPlayer(id) {
    $('.video-player').each(function () {
        if($(this).attr('id') == id){
            $(this).css('opacity',1);
            $(this).children('.video-player-body').css('padding',0);
            $(this).children('div.video-player-header').css('visibility','visible');
            $(this).children('div.video-player-footer').css('display','block');
        } else {
            $(this).css('opacity','0.5');
            $(this).children('.video-player-body').css('padding','50px');
            $(this).children('div.video-player-header').css('visibility','hidden');
            $(this).children('div.video-player-footer').css('display','none');
        }
    })
}