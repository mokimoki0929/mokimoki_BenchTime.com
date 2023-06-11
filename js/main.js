$("document").ready(function(){
    $('.mypattern').slick({
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 800,
      dots: false,
      arrows: true,
      centerMode: true,
      adaptiveHeight: true,
      centerPadding: '25%',
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
      responsive: [
        {
            breakpoint: 769,
            settings: {
                centerMode: false,
            },
        },
      ],
    });
  });