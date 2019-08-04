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

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// cria iframe
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '700',
    width: '400',
    //videoId: 'c4kqTCQF70k',
    videoId: 'fJ9rUzIMcZQ',
    playerVars: {'controls': 0},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// quando o player estiver pronto, inicia o video automaticamente
function onPlayerReady(event) {
  //event.target.playVideo();
}

// Quando o estado do player muda (state = 1), o video toca por 6s e depois para
//var done = false;

var interval;
var playingtime = 0;
var sent_form_data = false;
function onPlayerStateChange(event) {
  /*if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }*/
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
        $(".video-wrapper").css("width","0");
        $("#form-holder").fadeIn("fast");
    }, 1000);
}

function change_formtovideo() {
    sent_form_data = true;
    $("#form-holder").fadeOut("fast");
    setTimeout(function(){
        $(".video-wrapper").css("width","640");
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

function format_phone() {
    phone = $("#input_tel").val();
    phone = phone.replace(/[^\d]/g, "");
    if (phone.length == 11) {
        $("#input_tel").val(phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"));
    }
}

$("#send_data").click(function(){
    format_phone();
    if(validate_mail($("#input_email").val()) && $("#input_tel").val().length == 15){
        $("#form-dados").submit();
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