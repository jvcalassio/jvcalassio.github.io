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

// carrega a API do iframe
var tag = document.createElement('script');
var interval;
var playingtime = 0;
var sent_form_data = false;
var player;

$(document).ready(function(){
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    /*
    var limit_date = new Date("Aug 13, 2019 20:00:00").getTime();
    var counter_interval = setInterval(function(){
        var now = new Date().getTime();
        var time = limit_date - now;


        var days = Math.floor(time / (1000 * 60 * 60 * 24));
        var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((time % (1000 * 60)) / 1000);

        if(time >= 0){
            //$("#contador").html(days + ":" + hours + ":" + minutes + ":" + seconds);
            $("#days").html(days);
            $("#hours").html(('0' + hours).slice(-2));
            $("#minutes").html(('0' + minutes).slice(-2));
            $("#seconds").html(('0' + seconds).slice(-2));
        } else {
            clearInterval(counter_interval);
            //$("#contador").html("ACABOU");
        }
    }, 1000);*/
    var limit = new Date("Aug 13, 2019 20:00:00").getTime() / 1000;
    new FlipDown(limit,{theme:'light'}).start();
});

// cria iframe
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '700',
    width: '400',
    //videoId: 'c4kqTCQF70k',
    videoId: 'fJ9rUzIMcZQ',
    playerVars: {'controls': 0},
    events: {
      //'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// quando o player estiver pronto, inicia o video automaticamente
//function onPlayerReady(event) {
  //event.target.playVideo();
//}

function onPlayerStateChange(event) {
  if(player.getPlayerState() == 1 && !sent_form_data){
      interval = setInterval(function(){
        playingtime = player.getCurrentTime();

        if(playingtime >= 6){ // 6 segundos
            clearInterval(interval);
            change_videotoform();
        }
        console.log(playingtime);
      },1000);
  }
}

function change_videotoform() {
    player.pauseVideo();
    $("#player").toggle();
    setTimeout(function() {
        //$(".video-wrapper").css("width","0");
        $("#form-holder").fadeIn("fast");
    }, 1000);
}

function change_formtovideo() {
    sent_form_data = true;
    $("#form-holder").fadeOut("fast");
    setTimeout(function(){
        //$(".video-wrapper").css("width",auto);
        $("#player").fadeIn("fast");
    }, 1000);
    setTimeout(function(){
        player.playVideo();
        setTimeout(function(){
            player.seekTo(8, true);
        }, 200);
    }, 500);
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
    phone = $("#input_tel").val();
    phone = phone.replace(/[^\d]/g, "");
    if (phone.length == 11) {
        $("#input_tel").val(phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"));
    }
}

$("#send_data").click(function(){
    format_phone();
    var valid_mail = validate_mail($("#input_email").val());
    var valid_phone = validate_phone($("#input_tel").val());
    if(valid_mail && valid_phone){
        $("#form-dados").submit();
    } else {
        if(!valid_mail){
            $("#input_email").addClass("is-invalid");
        } else if(valid_mail){
            $("#input_email").removeClass("is-invalid");
        }
        if(!valid_phone){
            $("#input_tel").addClass("is-invalid");
        } else if(valid_phone){
            $("#input_tel").removeClass("is-invalid");
        }
    }
});

$("#form-dados").submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "form_submit.php",
        data: $(this).serialize(),
        success: function(){
            change_formtovideo();
        }, error: function(data) {
            change_formtovideo();
        }
    });
});