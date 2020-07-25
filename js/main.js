$(document).ready(function() {
    ScrollOut({
        once: true
    });

    /*let elements = {
        wp: $('#wp-img'),
        bs: $('#bs-img'),
        react: $('#react-img'),
        flutter: $('#flutter-img'),
        nodejs: $('#nodejs-img'),
        firebase: $('#firebase-img')
    };

    let originais = {
        wp: elements.wp.attr('src'),
        bs: elements.bs.attr('src'),
        react: elements.react.attr('src'),
        flutter: elements.flutter.attr('src'),
        nodejs: elements.nodejs.attr('src'),
        firebase: elements.firebase.attr('src')
    };

    $('.wp-used').mouseenter(function() {
        elements.wp.fadeOut(100, () => elements.wp.attr('src', elements.wp.attr('data-src')).fadeIn(100));
    }).mouseleave(function() {
        elements.wp.fadeOut(100, () => elements.wp.attr('src', originais.wp).fadeIn(100))
    });

    $('.bs-used').mouseenter(function() {
        elements.bs.fadeOut(100, () => elements.bs.attr('src', elements.bs.attr('data-src')).fadeIn(100))
    }).mouseleave(function() {
        elements.bs.fadeOut(100, () => elements.bs.attr('src', originais.bs).fadeIn(100));
    });

    $('.react-used').mouseenter(function() {
        elements.react.fadeOut(100, () => elements.react.attr('src', elements.react.attr('data-src')).fadeIn(100))
    }).mouseleave(function() {
        elements.react.fadeOut(100, () => elements.react.attr('src', originais.react).fadeIn(100));
    });

    $('.flutter-used').mouseenter(function() {
        elements.flutter.fadeOut(100, () => elements.flutter.attr('src', elements.flutter.attr('data-src')).fadeIn(100))
    }).mouseleave(function() {
        elements.flutter.fadeOut(100, () => elements.flutter.attr('src', originais.flutter).fadeIn(100));
    });

    $('.nodejs-used').mouseenter(function() {
        elements.nodejs.fadeOut(100, () => elements.nodejs.attr('src', elements.nodejs.attr('data-src')).fadeIn(100))
    }).mouseleave(function() {
        elements.nodejs.fadeOut(100, () => elements.nodejs.attr('src', originais.nodejs).fadeIn(100));
    });

    $('.firebase-used').mouseenter(function() {
        elements.firebase.fadeOut(100, () => elements.firebase.attr('src', elements.firebase.attr('data-src')).fadeIn(100))
    }).mouseleave(function() {
        elements.firebase.fadeOut(100, () => elements.firebase.attr('src', originais.firebase).fadeIn(100));
    });*/
});

$('.link-scroll').click(function(e){
    e.preventDefault();
    var h = $(this).attr('href');
    $('html,body').animate({
        scrollTop: $(h).offset().top
    }, 1000);
});