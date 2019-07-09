
$('.flash-carousel').owlCarousel({
  loop: true,
  autoplay: false,
  dots: false,
  nav: true,
  items: 1,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>",
    "<i class='mdi mdi-chevron-right'></i>" 
  ],
});

$(document).ready(() => {
  const pageUrl = window.location.href;
  const windowWidth = document.body.clientWidth;

  // GO TOP
  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
      $('.go-top').fadeIn().css('transform','scale(1)');
      $('.menu').addClass('down')
    } else {
      $('.go-top').fadeOut().css('transform','scale(0)');
      $('.menu').removeClass('down')
    }
  });

  $('.go-top').click(() => {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  $(".menu a").each( function () {
    if (pageUrl == (this.href)) {
      $(this).closest("a").addClass("active");
    }
  });
  
  $('.toggleMenu').click(() => {
    $('.nav').toggleClass('out');
    $('.overlay-menu').toggleClass('overlay-in');
  });

  $('.overlay-menu, .nav-close').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
    $('.nav').removeClass('out');
  });

  $('.footer h4').click(function() {
    $(this).parent().find('ul').toggleClass('active');
  });

  $('.search-btn i').click(function() {
    $('.search, .right-search').toggleClass('active');
    $(this).toggleClass('mdi-magnify mdi-close');
  });

  
});
