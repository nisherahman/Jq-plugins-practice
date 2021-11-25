$(document).ready(function(){
    //type js
    var typed = new Typed('.element', {
        strings: [
        'designer',
        'marketer',
        'developer',
        'directer',
    ],
        smartBackspace: true,
        typeSpeed: 200,
        backSpeed: 100,
        showCursor: false,
        loop: true,

      });

    //countdown
    $('#countdown').countdown({
        year:2022,
        month:1,
        day:1,
        hour:0,
        minute:0,
        second:0
    });

    //gallery menu active
    $('.gallery ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //gallery filter
    var mixer = mixitup('.gallery-main');

    //gallery popup
    $('.venobox').venobox({
        arrowsColor: '#709dca',
        closeBackground: '#ffc155',
        closeColor: '#fff',
        spinner:'three-bounce',
    }); 




});