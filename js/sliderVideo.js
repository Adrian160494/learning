$(document).ready(function () {
    var actualVideoPlayer = 0;
    var numberOfVideoPlayers = 0;
    checkVisibilityOfVideoPlayer(actualVideoPlayer);
    var windowWidth = $(window).outerWidth() / 2;
    var halfActualVideoPlayerWidth = $('.video-player').outerWidth() / 2;

    var startPosition = windowWidth - halfActualVideoPlayerWidth;
    $('.video-player-slider').css('transform', 'translateX(' + startPosition + 'px)');

    $('.video-player').each(function () {
        numberOfVideoPlayers++;
    });

    $('.navigation-left').on('click', function () {
        if (actualVideoPlayer == 0) {
            actualVideoPlayer = numberOfVideoPlayers - 1;
        } else {
            actualVideoPlayer--;
        }
        sliderVideoPlayerDown(actualVideoPlayer);
        console.log(actualVideoPlayer);

    });

    $('.navigation-right').on('click', function () {
        if (actualVideoPlayer == (numberOfVideoPlayers - 1)) {
            actualVideoPlayer = 0;
        } else {
            actualVideoPlayer++;
        }
        sliderVideoPlayerUp(actualVideoPlayer);
        console.log(actualVideoPlayer);
    });

});



function sliderVideoPlayerUp(id) {
    checkVisibilityOfVideoPlayer(id);
    var actualVideoPlayerWidth = $('.video-player').outerWidth();
    $('.video-player-slider').css('transform', 'translateX(' + startPosition + 'px)');
}

function sliderVideoPlayerDown(id) {
    checkVisibilityOfVideoPlayer(id);
    var actualVideoPlayerWidth = $('.video-player').outerWidth();
    $('.video-player-slider').css('transform', 'translateX(' + startPosition + 'px)');
}

function checkVisibilityOfVideoPlayer(id) {
    $('.video-player').each(function () {
        if($(this).attr('id') == id){
            $(this).css('opacity',1);
        } else {
            $(this).css('opacity','0.5');
        }
    })
}