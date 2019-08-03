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
    width: '640',
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
function onPlayerStateChange(event) {
  /*if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }*/
  if(player.getPlayerState() == 1){
      interval = setInterval(function(){
        playingtime = player.getCurrentTime();

        if(playingtime >= 6){ // 6 segundos
            clearInterval(interval);
            player.stopVideo();
            change_videotoform();
        }
        console.log(playingtime);
      },2000);
  }
}

function change_videotoform() {
    $("#player").toggle();
    $("#form-holder").fadeIn("fast");
}