/**
 * Created by Adrian on 13.08.2018.
 */

$(window).on('load',function () {
     changeAdventageView();
    addHandleCheckboxesInRegisterAdmin();


    $('button.translate').on('click',function () {
        console.log('translate');
        $('.video-player-slider').css('transform','translateX(400px)');
    })
})

$(document).ready(function () {

    var collapse = true;
    var login_collapse = true;

   $('.main-menu-collapse-btn').bind('click',function () {
        if(collapse == true) {
            $('#main-menu-list ul').show('slide', {direction: 'up'},1000);
            collapse = false;
        } else {
            $('#main-menu-list ul').hide('slide', {direction: 'up'},1000);
            collapse = true;
        }
   });

   $('.login-menu-collapse-button').bind('click',function () {
       if(login_collapse == true) {
           $('.logging-menu-rwd').show('slide', {direction: 'right'},1000);
           login_collapse = false;
       } else {
           $('.logging-menu-rwd').hide('slide', {direction: 'right'},1000);
           login_collapse = true;
       }
   })

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

$(document).ready(function() {
    var flag = true;
    var windowWidth = $(window).outerWidth();
    if(windowWidth > 600){
        addCounters();
        flag = false;
    } else if(windowWidth < 600){
        addCounters();
        flag = true;
    }
    addCounters();
        $(window).resize(function () {
            if($(window).outerWidth() > 600 ){
                addCounters();
                flag = false;
            } else if($(window).outerWidth() < 600){
                addCounters();
                flag = true;
            }
        });

});

function addCounters() {
    $("#my-progress-bar1").circularProgress({
        line_width: 5,
        color: "#fff",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "30/30"
    }).circularProgress('animate', 100, 1000);
    $("#my-progress-bar2").circularProgress({
        line_width: 5,
        color: "#fff",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "27/30"
    }).circularProgress('animate', 85, 1000);
    $("#my-progress-bar3").circularProgress({
        line_width: 5,
        color: "#fff",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "5/30"
    }).circularProgress('animate', 17, 1000);
}

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


function checkActivityButton() {
    $('.register-admin-btns button').each(function () {
        if($(this).hasClass('btn-white-border-active')){
            $(this).removeClass('btn-white-border-active');
            var name = $(this).attr('value');
            $("input[name='"+name+"']").prop('checked',false);
        }
    })
}


function addHandleCheckboxesInRegisterAdmin(){
    $('.register-admin-btns button').each(function () {
        $(this).on('click',function () {
            if($(this).hasClass('btn-white-border-active')){
                var name = $(this).attr('value');
                console.log('input[name="'+name+'"]');
                $(this).removeClass('btn-white-border-active');
                $("input[name='"+name+"']").prop('checked',false);
            } else {
                var name = $(this).attr('value');
                checkActivityButton();
                console.log('input[name="'+name+'"]');
                $(this).addClass('btn-white-border-active');
                $("input[name='"+name+"']").prop('checked',true);
            }

        })
    })
}