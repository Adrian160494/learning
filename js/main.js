/**
 * Created by Adrian on 13.08.2018.
 */

$(window).on('load',function () {
     changeAdventageView();
})

$(document).ready(function () {

    var collapse = true;

   $('.main-menu-collapse-btn').bind('click',function () {
        if(collapse == true) {
            $('.main-menu-list').show('slide', {direction: 'up'},1000);
            collapse = false;
        } else {
            $('.main-menu-list').hide('slide', {direction: 'up'},1000);
            collapse = true;
        }
   });

   activeVideoButtonFirst();
   $('.video-btn-fix').each(function () {
       var numberOfButton = $(this).attr('id');
       var specialButton = '#'+numberOfButton+' .special-video-button';
       $(this).on('mouseover',function () {
           $(specialButton).show();
           $(this).removeClass('btn-not-hover').addClass('btn-hover');
       });
       $(this).on('mouseleave',function () {
           if($(this).hasClass('active')){
           } else {
               $(specialButton).hide();
               $(this).addClass('btn-not-hover').removeClass('btn-hover');
           }
       });
       $(this).on('click',function () {
            changeVideoView($(this));
       });
   })


});

function activeVideoButtonFirst() {
    $('.video-block').each(function () {
        $(this).hide();
    });
    $('#block1').show();
    $('#video-btn1').removeClass('btn-not-hover').addClass('btn-hover').addClass('active');
    $('#video-btn1 .special-video-button').show();
}

function changeVideoView(button) {
    $('.video-btn-fix').each(function () {
        $(this).attr('disabled','disabled');
    })
    $('.video-btn-fix').each(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).addClass('btn-not-hover').removeClass('btn-hover');
            var numberBlock = $(this).attr('data-toggle');
            var numberButton = $(this).attr('id');
            $('#'+numberBlock).hide();
            $('#'+numberButton+' .special-video-button').hide();
        }
    });
        var actualNumberOfBlock = button.attr('data-toggle');
        button.addClass('btn-hover').removeClass('btn-not-hover').addClass('active');
        $('#'+actualNumberOfBlock).show('slide',{direction:"up"},500);
   setTimeout(function () {
       $('.video-btn-fix').each(function () {
           $(this).removeAttr('disabled','disabled');
       })
   },500);

}

function changeAdventageView() {
    $('.adventages-body-btn img').on('mouseover',function () {
        $(this).animate({
            width: '60%'
        },200,'linear');
    })
    $('.adventages-body-btn img').on('mouseleave',function () {
        $(this).animate({
            width: '55%'
        },200,'linear');
    })
}