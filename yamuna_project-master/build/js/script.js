// var elem = document.querySelector('.sidenav');
// var instance = M.Sidenav.init(elem, options);
$(document).ready(function(){
  // $('.normal-nav').css("background-color","red");
  //
  // $(".button-collapse").sideNav();
  //
  // $('.nav-links').hide();
  // $(".button-collapse").on('click',function(){
  //   $('.nav-links').toggle('slow');
  // })
  // $(".button-collapse").on('click',function(){
  //   $('.nav-links').css("transform","translateX(0)")
  // })
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        autoplaySpeed: 2000,
        loop: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        items: 1,
        dots: true,
        dotData: true,
    });
      var owl = $('.owl-carousel');
  $(".owl-carousel").owlCarousel({
    autoplay: false,
    autoplaySpeed: 1000,
    loop: true,
    margin: 30,

    autoplayTimeout: 500,
    autoplayHoverPause: false,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        nav: false,

      },
      // breakpoint from 600 up
      600: {
        items: 2,
        nav: false,

      },
      // breakpoint from 992 up
      992: {
        items: 1,
        nav: false,

      },
      // breakpoint from 992 up
      1200: {
        items: 3,
        nav: false,

      },
      1900: {
        items: 4,
        nav: false,
      }
    }

  });
  $('.nextBtn').click(function() {
    owl.trigger('next.owl.carousel', [1000]);
  })
  // Go to the previous item
  $('.prevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [1000]);
  })



});
