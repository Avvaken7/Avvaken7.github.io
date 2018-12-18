// Slick slider
$(document).ready(function(){
    $('.main-slider').slick({
      dots: true,
    });
    $('.popular-slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: "unslick"
        }
      ]
    });
  });
// Adaptive menu
  (function($){
    $(function() {
      $('.header-nav__icon').on('click', function() {
        $(this).closest('.header-nav').toggleClass('header-nav_state_open');
      });
    });
  })(jQuery);
// Counter
  $('#plus').click( function () {
    var i = +$('#count').text() + 1;
    $('#count').text(i);
  });
  $('#minus').click( function () {
    var i = +$('#count').text() -1;
    $('#count').text(i);
  });
  // scrollUP
  $(document).ready(function() {

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
    });
    $('.scrollup').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
  });
