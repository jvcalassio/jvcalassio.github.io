$(document).ready(function() {
    $('.link-scroll').click(function(e){
        e.preventDefault();
        var h = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(h).offset().top
        }, 1000);
    });

    $(window).scroll(function(e) {
        if($(this).scrollTop() > $('#planos').offset().top) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
    });
});