var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '185',
        width: '360',
        videoId: 'fZYO_4prFKI',
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(evt) {
    if(evt.data == YT.PlayerState.ENDED){
        player.stopVideo();
    }
}

$(document).ready(function(){
    /*$("#modalForm").modal({
        backdrop:"static",
        keyboard:false
    },"show");*/
});

$(".link-scroll").click(function(e){
    e.preventDefault();
    var h = $(this).attr('href');
    $('html,body').animate({
        scrollTop: $(h).offset().top
    }, 1000);
});

$("#send-form-button").click(function(){
    if(validate_form())
        $("#mainform").submit();
});

function validate_form() {
    if($("#nomeInput").val() == "") {
        $("#nomeInput").addClass("is-invalid");
        return false;
    } else {
        $("#nomeInput").removeClass("is-invalid");
    }

    if(!validate_mail($("#emailInput").val())){
        $("#emailInput").addClass("is-invalid");
        return false;
    } else {
        $("#emailInput").removeClass("is-invalid");
    }
    format_phone();
    if(!validate_phone($("#telInput").val())){
        $("#telInput").addClass("is-invalid");
        return false;
    } else {
        $("#telInput").removeClass("is-invalid");
    }

    return true;
}

function validate_mail(mail){
    var r = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return r.test(String(mail).toLowerCase());
}

function validate_phone(phone){
    if(phone.length == 15){
        var r = /[0-9]/;
        return r.test(phone);
    } else {
        return false;
    }
}

function format_phone() {
    phone = $("#telInput").val();
    phone = phone.replace(/[^\d]/g, "");
    if (phone.length == 11) {
        $("#telInput").val(phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"));
    }
}

$("#mainform").submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "assets/db/send_form.php",
        data: $(this).serialize(),
        success: function() {
            $("#modalForm").modal("hide");
        }
    });
});