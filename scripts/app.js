$(document).ready(function(){
  $('.preview__slider-inner').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      freeMode: true,
      autoplaySpeed: 1300,
      centerMode: false,
      responsive: [
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  });

  $('.burger').on('click', function(){
    $(this).toggleClass('burger-active');
    $('.header__menu').toggleClass('header__menu-active');
  });
});