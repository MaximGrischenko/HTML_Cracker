jQuery(document).ready(function ($) {
  $(".nav-element > a").click(function() {
    $(".nav-element > a").removeClass("active");
    $(this).addClass("active");
  });

  $('.menu-btn').click(function () {
    $('.menu').slideToggle(150, function () {
      if($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
  });

  $(window).resize(function () {
    if($(window).width() >= 768){
      if($('.menu').css('display') === 'block') {
        $('.menu').removeAttr('style');
      }
    }
  });
});