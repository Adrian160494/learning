/**
 * Created by Adrian on 13.08.2018.
 */

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
   })
});