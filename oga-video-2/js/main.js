$(document).ready(function() {
    const player = new Plyr("#player-div");
});

$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        var $color = $(this).data('color');
        // Add class of currently active div
        $body.addClass('color-' + $color);

        if($color == 'black') {
          setTimeout(function() {
            $(".stars").fadeIn(1000, function() {
              $(".twinkling").fadeIn(1000)
            });
          }, 2000);
        } else {
          $(".stars").hide();
          $(".twinkling").hide();
        }
      }
    });    
    
  }).scroll();