$(function () {
  // slick-slider
  $(".slider-list").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
$(function () {
  $("#menu").click(function () {
    $(this).toggleClass("open");
    $(".nav").slideToggle("");
    return false;
  });
});
$(function () {
  $("#contactMenu").click(function () {
    $(this).toggleClass("open");
    $(".headerMenu").slideToggle("");
    return false;
  });
});
$("#menu").click(function () {
  if ($("#menu").hasClass('open')) {
    $(this).removeClass('open');
    $('.bagResp').removeClass('top');
    $(".nav").slideUp("");
  }
  else {
    $(this).addClass('open');
    $('.bagResp').addClass('top');
    $(".nav").slideDown("");
  }
});
