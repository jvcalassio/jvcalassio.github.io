$(document).ready(function() {
    $("#black-price-lbl").css('width', $("#black-price-lbl-orig").css('width'));
});

$(".card-header").click(function(){
    $(this).children().children(".fa-chevron-down").toggle();
    $(this).children().children(".fa-chevron-right").toggle();
    let k = this;
    $(".card-header").each(function(i, obj){
        if(obj != k){
            $(this).children().children(".fa-chevron-down").css("display","none");
            $(this).children().children(".fa-chevron-right").css("display","block");
        }
    });
});