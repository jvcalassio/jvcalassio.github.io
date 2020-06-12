$(".card-header .btn").click(function(){
    $(this).children(".minus-img").toggle();
    $(this).children(".plus-img").toggle();
    let k = this;
    $(".card-header .btn").each(function(i, obj){
        if(obj != k){
            $(this).children(".minus-img").css("display","none");
            $(this).children(".plus-img").css("display","inline");
        }
    });
});

$("#collapseOne").on("show.bs.dropdown", function() {
    console.log(this)
})

function toggleDropdown(e) {
    if(window.innerWidth > 992) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function () {
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
}

$('body')
    .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);

$('.dropdown a').on('click tap', e => e.preventDefault())