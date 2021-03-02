(function($){
    
    let scale = '100%';

    $('#1_1_scale').click(function() {
        set_scale('200%', $(this));
    }); 
    $('#1_2_scale').click(function() {
        set_scale('100%', $(this));
    }); 
    $('#1_6_scale').click(function() {
        set_scale('33.3%', $(this));
    });

    function set_scale(val, btn) {
        scale = val;
        $('#image_show').css('background-size', scale);
        $('.scale-selector li').removeClass('active');
        btn.addClass('active');
    }

})(jQuery);